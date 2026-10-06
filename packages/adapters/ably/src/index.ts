/**
 * Ably adapter: Ably Chat SDK (@ably/chat 1.4) over ably-js 2. A room per order (name `order:<id>` so one
 * token capability `order:*` scopes it). Ably rooms have no membership list or channel metadata, no read
 * receipts, no uploads, no translation and no reporting: those parts are built and marked so. Docs: docs/vendors/ably.md.
 */
import * as Ably from 'ably';
import { ChatClient, ChatMessageEventType, OrderBy, type Message, type PresenceMember, type Room } from '@ably/chat';
import {
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

export const meta = { platform: 'ably' as const, name: 'Ably Chat', hasKit: true };
export const roomNameForOrder = (orderId: string) => `order:${orderId}`;

type Meta = { type?: string; card?: OrderCard; translations?: Partial<Record<Lang, string>>; moderated?: boolean; attachment?: { name: string; dataUrl: string } };
type PresenceData = { role?: string; lastReadSerial?: string; lastReadAt?: number };

export function createAdapter(user: AppUser): ChatAdapter {
  let realtime: Ably.Realtime | null = null;
  let chat: ChatClient | null = null;
  let room: Room | null = null;
  let order: Order | null = null;
  let lastSerial: string | undefined;
  const unsubs: (() => void)[] = [];
  const typingNow = new Set<string>();
  const lastRead = new Map<string, string>();
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();

  const toMessage = (m: Message): ChatMessage => {
    const mt = (m.metadata ?? {}) as Meta;
    const base = { id: m.serial, senderId: m.clientId, createdAt: m.timestamp.getTime(), raw: m };
    if (mt.type === 'order_card' && mt.card) return { ...base, kind: 'order_card', card: mt.card };
    if (mt.attachment) return { ...base, kind: 'attachment', attachmentUrl: mt.attachment.dataUrl, attachmentName: mt.attachment.name };
    return { ...base, kind: 'text', text: pickTranslation(mt.translations, user.lang, m.text), originalText: m.text, moderated: Boolean(mt.moderated) };
  };

  function requireRoom(): Room {
    if (!room) throw new Error('ably: room not open');
    return room;
  }

  /** Ably has no room membership: members = what our server authorised for this room, plus whoever is present. */
  async function info(r: Room): Promise<ChannelInfo> {
    const server = (await fetch(`/api/vendors/ably/order-channel/${encodeURIComponent(order!.id)}`).then((x) => x.json()).catch(() => ({}))) as { data?: { members?: string[] } };
    const present = (await r.presence.get()).map((p: PresenceMember) => p.clientId);
    const members = [...new Set([...(server.data?.members ?? []), ...present])];
    return { id: r.name, memberIds: members, data: { orderId: order!.id, listingId: order!.listingId } };
  }

  const adapter: ChatAdapter = {
    platform: 'ably',
    user,

    async connect(opts: ConnectOptions) {
      // The token response carries a TokenRequest signed by our server; Ably exchanges it for a token.
      let first: Ably.TokenRequest | null = JSON.parse(opts.token) as Ably.TokenRequest;
      realtime = new Ably.Realtime({
        clientId: user.id,
        authCallback: (_params, cb) => {
          if (first) {
            const t = first;
            first = null;
            cb(null, t);
            return;
          }
          serverApi.token('ably', user.id).then((t) => cb(null, JSON.parse(t.token) as Ably.TokenRequest)).catch((e) => cb(String(e), null));
        },
      });
      chat = new ChatClient(realtime);
      await new Promise<void>((resolve, reject) => {
        realtime!.connection.once('connected', () => resolve());
        realtime!.connection.once('failed', (s) => reject(new Error(`ably: connection failed ${s.reason?.message ?? ''}`)));
      });
    },

    async openOrderChannel(o: Order) {
      order = o;
      const r = await chat!.rooms.get(roomNameForOrder(o.id), { typing: { heartbeatThrottleMs: 3000 } });
      await r.attach();
      await r.presence.enter({ role: user.role } satisfies PresenceData);
      room = r;
      const sub = r.messages.subscribe((ev) => {
        if (ev.type === ChatMessageEventType.Created) {
          lastSerial = ev.message.serial;
          for (const cb of onMsg) cb(toMessage(ev.message));
        } else if (ev.type === ChatMessageEventType.Updated) {
          for (const cb of onUpd) cb(toMessage(ev.message));
        }
      });
      unsubs.push(() => sub.unsubscribe());
      const typ = r.typing.subscribe((ev) => {
        const now = new Set([...ev.currentlyTyping].filter((c) => c !== user.id));
        for (const c of now) if (!typingNow.has(c)) for (const cb of onTyp) cb({ userId: c, typing: true });
        for (const c of typingNow) if (!now.has(c)) for (const cb of onTyp) cb({ userId: c, typing: false });
        typingNow.clear();
        for (const c of now) typingNow.add(c);
      });
      unsubs.push(() => typ.unsubscribe());
      // Built read receipts: members publish lastReadSerial in presence data.
      const pres = r.presence.subscribe((ev) => {
        const data = (ev.member.data ?? {}) as PresenceData;
        if (ev.member.clientId !== user.id && data.lastReadSerial && lastRead.get(ev.member.clientId) !== data.lastReadSerial) {
          lastRead.set(ev.member.clientId, data.lastReadSerial);
          for (const cb of onRd) cb({ userId: ev.member.clientId, lastReadMessageId: data.lastReadSerial, at: data.lastReadAt ?? Date.now() });
        }
      });
      unsubs.push(() => pres.unsubscribe());
      return info(r);
    },

    getChannelInfo: () => info(requireRoom()),

    async sendText(text: string) {
      const mt: Meta = {};
      try {
        const t = await serverApi.translate(text, user.lang);
        if (t.available) mt.translations = t.translations;
      } catch {
        /* no provider */
      }
      try {
        const m = await requireRoom().messages.send({ text, metadata: JSON.parse(JSON.stringify(mt)), headers: { orderId: order!.id } });
        return { messageId: m.serial };
      } catch (e) {
        // Custom before-publish moderation rejected it (error 42213) when the rule is configured to reject.
        if ((e as { code?: number }).code === 42213) return { messageId: `blocked_${Date.now()}`, blocked: true };
        throw e;
      }
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // Ably Chat: `metadata` is the documented home for structured data; headers are for routing, not content.
      const message = await room!.messages.send({
        text: `Order ${card.orderId}: ${card.listingTitle}`,
        metadata: { type: 'order_card', card: { ...card } },
        headers: { orderId: card.orderId },
      });
      return { messageId: message.serial };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      const r = requireRoom();
      const current = await r.messages.get(messageId);
      await r.messages.update(messageId, { text: current.text, metadata: { type: 'order_card', card: { ...card } }, headers: current.headers }, { description: `status ${card.status}` });
    },

    async sendAttachment(file: File) {
      // Ably has no file storage. For the test image we inline a data URL (64 KiB message limit on Free);
      // production would upload to object storage and put the URL in metadata, as Ably's media guide says.
      const dataUrl = await new Promise<string>((res, rej) => {
        const fr = new FileReader();
        fr.onload = () => res(String(fr.result));
        fr.onerror = () => rej(fr.error);
        fr.readAsDataURL(file);
      });
      const m = await requireRoom().messages.send({ text: file.name, metadata: { attachment: { name: file.name, dataUrl } } });
      return { messageId: m.serial };
    },

    async getMessages(limit = 200) {
      const page = await requireRoom().messages.history({ limit: Math.min(limit, 1000), orderBy: OrderBy.OldestFirst });
      return page.items.map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      if (lastSerial) await requireRoom().presence.update({ role: user.role, lastReadSerial: lastSerial, lastReadAt: Date.now() } satisfies PresenceData);
    },
    async setTyping(typing: boolean) {
      const r = requireRoom();
      if (typing) await r.typing.keystroke();
      else await r.typing.stop();
    },

    async reportUser(userId: UserId, reason: string) {
      await serverApi.report('ably', user.id, userId, reason); // nothing native (pricing page: "coming soon")
    },

    async addSupportAgent() {
      // Access is capability-based: the agent's token already covers order:* rooms. Our server records the membership.
      await serverApi.addMember('ably', requireRoom().name, 'agent_sam');
    },

    async disconnect() {
      for (const u of unsubs.splice(0)) u();
      try {
        await room?.presence.leave();
        await room?.detach();
        if (room) await chat?.rooms.release(room.name);
      } catch {
        /* ignore */
      }
      realtime?.close();
      realtime = null;
      chat = null;
      room = null;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
