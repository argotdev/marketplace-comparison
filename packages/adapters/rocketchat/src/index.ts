/**
 * Rocket.Chat adapter: REST (fetch) for writes and history, DDP over a raw WebSocket for live events, as the
 * official web client does. A private group per order (name = order channel id) with customFields; the order
 * card is a message with customFields { type, card } and an attachment so Rocket.Chat's own UI shows something.
 * Docs: docs/vendors/rocketchat.md.
 */
import {
  channelIdForOrder,
  ORDER_CARD_TYPE,
  pickTranslation,
  serverApi,
  type AppUser,
  type ChannelInfo,
  type ChatAdapter,
  type ChatMessage,
  type ConnectOptions,
  type Lang,
  type Order,
  type OrderCard,
  type ReadEvent,
  type SendResult,
  type TypingEvent,
  type Unsubscribe,
  type UserId,
} from '@mkt/shared';
import { Ddp } from './ddp.ts';

export const meta = { platform: 'rocketchat' as const, name: 'Rocket.Chat (self-hosted)', hasKit: true };

interface RcMessage {
  _id: string;
  rid: string;
  msg: string;
  ts: string | { $date: number };
  u: { _id: string; username: string };
  t?: string;
  editedAt?: unknown;
  customFields?: { type?: string; card?: string };
  /** Filled by Rocket.Chat Auto-Translate for subscribers with a target language. */
  translations?: Record<string, string>;
  attachments?: { title?: string; image_url?: string; title_link?: string }[];
  file?: { _id: string; name: string; type: string };
  files?: { _id: string; name: string; type: string }[];
}

const ts = (t: RcMessage['ts']) => (typeof t === 'string' ? new Date(t).getTime() : t?.$date ?? Date.now());

export function createAdapter(user: AppUser): ChatAdapter {
  let url = '';
  let token = '';
  let userId = '';
  let username: string = user.id;
  let rid = '';
  let order: Order | null = null;
  let ddp: Ddp | null = null;
  const unsubs: (() => void)[] = [];
  const seen = new Set<string>();
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();

  async function rest<T = unknown>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
    const res = await fetch(`${url}/api/v1/${path}`, {
      method,
      headers: { 'X-Auth-Token': token, 'X-User-Id': userId, ...(body instanceof FormData ? {} : { 'content-type': 'application/json' }) },
      body: body === undefined ? undefined : body instanceof FormData ? body : JSON.stringify(body),
    });
    const json = (await res.json().catch(() => ({}))) as T & { success?: boolean; error?: string; errorType?: string };
    if (!res.ok || json.success === false) throw new Error(`rocketchat ${method} ${path} -> ${res.status}: ${json.error ?? json.errorType ?? 'error'}`);
    return json;
  }

  const toMessage = (m: RcMessage): ChatMessage => {
    const base = { id: m._id, senderId: m.u?.username ?? 'system', createdAt: ts(m.ts), raw: m };
    const cf = m.customFields ?? {};
    if (cf.type === ORDER_CARD_TYPE && cf.card) return { ...base, kind: 'order_card', card: JSON.parse(cf.card) as OrderCard };
    const file = m.file ?? m.files?.[0];
    if (file && !cf.type) return { ...base, kind: 'attachment', attachmentUrl: `${url}/file-upload/${file._id}/${encodeURIComponent(file.name)}`, attachmentName: file.name };
    if (m.t) return { ...base, kind: 'system', text: m.msg };
    // The bad-words filter replaces listed words with asterisks server-side; Auto-Translate adds `translations`.
    return { ...base, kind: 'text', text: pickTranslation(m.translations as Partial<Record<Lang, string>> | undefined, user.lang, m.msg), originalText: m.msg, moderated: /\*{3,}/.test(m.msg) };
  };

  async function emitReadReceipts(messageId: string): Promise<void> {
    try {
      const r = await rest<{ receipts: { user?: { username?: string }; ts: string }[] }>('GET', `chat.getMessageReadReceipts?messageId=${encodeURIComponent(messageId)}`);
      for (const rc of r.receipts) if (rc.user?.username && rc.user.username !== username) for (const cb of onRd) cb({ userId: rc.user.username, lastReadMessageId: messageId, at: new Date(rc.ts).getTime() });
    } catch {
      /* receipts endpoint unavailable */
    }
  }

  async function info(): Promise<ChannelInfo> {
    const g = await rest<{ group: { _id: string; name: string; customFields?: Record<string, unknown> } }>('GET', `groups.info?roomId=${encodeURIComponent(rid)}`);
    const mem = await rest<{ members: { username: string }[] }>('GET', `groups.members?roomId=${encodeURIComponent(rid)}&count=100`);
    return { id: g.group.name, memberIds: mem.members.map((m) => m.username), data: { orderId: g.group.customFields?.orderId, listingId: g.group.customFields?.listingId, rid } };
  }

  const adapter: ChatAdapter = {
    platform: 'rocketchat',
    user,

    async connect(opts: ConnectOptions) {
      token = opts.token;
      userId = opts.extra?.userId ?? '';
      url = opts.extra?.url ?? 'http://localhost:3000';
      username = opts.extra?.username ?? user.id;
      ddp = new Ddp();
      await ddp.connect(`${url.replace(/^http/, 'ws')}/websocket`);
      await ddp.call('login', [{ resume: token }]);
      // Announce presence like the official web client; without it Rocket.Chat kept a closed connection "online" for 3+ minutes.
      await ddp.call('UserPresence:online', []).catch(() => {});
    },

    async openOrderChannel(o: Order) {
      order = o;
      const name = channelIdForOrder(o.id);
      try {
        const g = await rest<{ group: { _id: string } }>('GET', `groups.info?roomName=${encodeURIComponent(name)}`);
        rid = g.group._id;
      } catch {
        try {
          const g = await rest<{ group: { _id: string } }>('POST', 'groups.create', { name, members: [o.buyerId, o.sellerId], customFields: { orderId: o.id, listingId: o.listingId } });
          rid = g.group._id;
        } catch {
          // Normal users may lack create-p; the server half creates it as admin.
          await serverApi.setup('rocketchat').catch(() => {});
          const info2 = (await fetch(`/api/vendors/rocketchat/order-channel/${o.id}`).then((r) => r.json())) as { data?: { group?: { _id: string } } };
          rid = info2.data?.group?._id ?? '';
          if (!rid) throw new Error('rocketchat: could not create or find the order group');
        }
      }
      // Default email preference is mentions-only; ask for every message in this room (native per-room setting).
      await rest('POST', 'rooms.saveNotification', { roomId: rid, notifications: { emailNotifications: 'all' } }).catch(() => {});
      // Native Auto-Translate: this user wants the room translated into their language (needs the auto-translate permission).
      await rest('POST', 'autotranslate.saveSettings', { roomId: rid, field: 'autoTranslate', value: true }).catch(() => {});
      await rest('POST', 'autotranslate.saveSettings', { roomId: rid, field: 'autoTranslateLanguage', value: user.lang }).catch(() => {});
      // Live messages for the room (new and edited arrive on the same stream).
      unsubs.push(
        ddp!.subscribe('stream-room-messages', rid, (args) => {
          const m = args[0] as RcMessage & { unread?: boolean };
          if (!m?._id) return;
          const msg = toMessage(m);
          if (seen.has(m._id) || m.editedAt) {
            seen.add(m._id);
            for (const cb of onUpd) cb(msg);
            // With read receipts on, Rocket.Chat re-emits our own message with `unread` cleared once others read it.
            if (m.u?.username === username && !m.unread && !m.editedAt) void emitReadReceipts(m._id);
          } else {
            seen.add(m._id);
            for (const cb of onMsg) cb(msg);
          }
        }),
        // Typing ("user-activity") and other room notifications.
        ddp!.subscribe('stream-notify-room', `${rid}/user-activity`, (args) => {
          const [who, activities] = args as [string, string[]];
          if (who && who !== username) for (const cb of onTyp) cb({ userId: who, typing: Array.isArray(activities) && activities.includes('user-typing') });
        }),
      );
      return info();
    },

    getChannelInfo: info,

    async sendText(text: string) {
      // Translation is Rocket.Chat's own Auto-Translate (per-room language set on open); no fallback here.
      const r = await rest<{ message: RcMessage }>('POST', 'chat.sendMessage', { message: { rid, msg: text } });
      return { messageId: r.message._id, blocked: /\*{3,}/.test(r.message.msg) };
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // Rocket.Chat: customFields carry the structured card (schema-validated); the attachment is what
      // Rocket.Chat's own UI renders, since it has no custom message components.
      const { message } = await rest<{ message: RcMessage }>('POST', 'chat.sendMessage', {
        message: {
          rid,
          msg: `Order ${card.orderId}: ${card.listingTitle}`,
          customFields: { type: 'order_card', card: JSON.stringify(card), orderId: card.orderId },
          // Rocket.Chat rejects relative hrefs in attachments, so the image URL must be absolute.
          attachments: [{ title: card.listingTitle, text: `$${card.priceUsd} USD · ${card.status}`, image_url: new URL(card.imageUrl, window.location.origin).href }],
        },
      });
      return { messageId: message._id };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      await rest('POST', 'chat.update', { roomId: rid, msgId: messageId, text: `Order ${card.orderId}: ${card.listingTitle}`, customFields: { type: ORDER_CARD_TYPE, card: JSON.stringify(card), orderId: card.orderId } });
    },

    async sendAttachment(file: File) {
      // Two steps since 8.0: upload the media, then confirm it as a message.
      const fd = new FormData();
      fd.append('file', file, file.name);
      const up = await rest<{ file: { _id: string } }>('POST', `rooms.media/${encodeURIComponent(rid)}`, fd);
      const r = await rest<{ message: RcMessage }>('POST', `rooms.mediaConfirm/${encodeURIComponent(rid)}/${up.file._id}`, { msg: '', description: file.name });
      return { messageId: r.message._id };
    },

    async getMessages(limit = 200) {
      const r = await rest<{ messages: RcMessage[] }>('GET', `groups.history?roomId=${encodeURIComponent(rid)}&count=${limit}`);
      return r.messages.slice().reverse().map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      await rest('POST', 'subscriptions.read', { rid });
    },
    async setTyping(typing: boolean) {
      // What the official web client sends: method stream-notify-room [rid/user-activity, username, [activities], extras].
      await ddp!.call('stream-notify-room', [`${rid}/user-activity`, username, typing ? ['user-typing'] : [], {}]);
    },

    async reportUser(userId: UserId, reason: string) {
      // Native moderation console: report the user's latest message (chat.reportMessage) or the user (moderation.reportUser).
      const hist = await rest<{ messages: RcMessage[] }>('GET', `groups.history?roomId=${encodeURIComponent(rid)}&count=50`);
      const target = hist.messages.find((m) => m.u?.username === userId);
      if (target) await rest('POST', 'chat.reportMessage', { messageId: target._id, description: reason });
      else {
        const u = await rest<{ user: { _id: string } }>('GET', `users.info?username=${encodeURIComponent(userId)}`);
        await rest('POST', 'moderation.reportUser', { userId: u.user._id, description: reason });
      }
    },

    async addSupportAgent() {
      try {
        await rest('POST', 'groups.invite', { roomId: rid, username: 'agent_sam' });
      } catch {
        await serverApi.addMember('rocketchat', rid, 'agent_sam');
      }
    },

    async disconnect() {
      for (const u of unsubs.splice(0)) u();
      ddp?.close();
      ddp = null;
      void order;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
