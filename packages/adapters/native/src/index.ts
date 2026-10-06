/**
 * Native build adapter. Talks to our own WebSocket server (packages/native-server) over a JSON
 * protocol. No vendor SDK. Translation is the "built" server-side fallback shared by every
 * platform without translation: the sender attaches a translations map, the reader picks their language.
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

interface WireMessage {
  id: string;
  seq: number;
  channelId: string;
  senderId: string;
  kind: 'text' | 'order_card' | 'attachment';
  text?: string;
  data: { card?: OrderCard; translations?: Partial<Record<Lang, string>>; url?: string; name?: string };
  moderated: boolean;
  createdAt: number;
}

export const meta = { platform: 'native' as const, name: 'Native (no vendor)', hasKit: false };

export function createAdapter(user: AppUser): ChatAdapter {
  let ws: WebSocket | null = null;
  let token = '';
  let httpUrl = '';
  let channelId = '';
  let order: Order | null = null;
  const pending = new Map<string, { resolve: (v: unknown) => void; reject: (e: Error) => void }>();
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();
  let seqCounter = 0;

  const toMessage = (w: WireMessage): ChatMessage => ({
    id: w.id,
    kind: w.kind,
    senderId: w.senderId,
    text: w.text ? pickTranslation(w.data.translations, user.lang, w.text) : undefined,
    originalText: w.text,
    card: w.data.card,
    attachmentUrl: w.data.url,
    attachmentName: w.data.name,
    createdAt: w.createdAt,
    moderated: w.moderated,
    raw: w,
  });

  function sendWire(payload: Record<string, unknown>): void {
    if (!ws || ws.readyState !== WebSocket.OPEN) throw new Error('native: socket not open');
    ws.send(JSON.stringify(payload));
  }

  /** Send and wait for the matching server reply (by reply type, or clientId for sends). */
  function request<T>(payload: Record<string, unknown>, key: string, timeoutMs = 10000): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const t = setTimeout(() => {
        pending.delete(key);
        reject(new Error(`native: timeout waiting for ${key}`));
      }, timeoutMs);
      pending.set(key, {
        resolve: (v) => {
          clearTimeout(t);
          resolve(v as T);
        },
        reject: (e) => {
          clearTimeout(t);
          reject(e);
        },
      });
      sendWire(payload);
    });
  }

  function handle(ev: MessageEvent): void {
    const m = JSON.parse(String(ev.data)) as Record<string, unknown> & { type: string };
    switch (m.type) {
      case 'authed':
        pending.get('authed')?.resolve(m);
        pending.delete('authed');
        break;
      case 'channel': {
        const ch = m.channel as ChannelInfo;
        pending.get('channel')?.resolve(ch);
        pending.delete('channel');
        break;
      }
      case 'sent': {
        const k = `sent:${m.clientId as string}`;
        pending.get(k)?.resolve(m.message);
        pending.delete(k);
        break;
      }
      case 'history':
        pending.get('history')?.resolve(m.messages);
        pending.delete('history');
        break;
      case 'reported':
        pending.get('reported')?.resolve(true);
        pending.delete('reported');
        break;
      case 'message': {
        // Our own sends are echoed too, so the UI has one source of truth for the list.
        const msg = toMessage(m.message as WireMessage);
        for (const cb of onMsg) cb(msg);
        break;
      }
      case 'message_updated': {
        const msg = toMessage(m.message as WireMessage);
        for (const cb of onUpd) cb(msg);
        break;
      }
      case 'typing':
        if (m.userId !== user.id) for (const cb of onTyp) cb({ userId: m.userId as string, typing: Boolean(m.typing) });
        break;
      case 'read':
        for (const cb of onRd) cb({ userId: m.userId as string, lastReadMessageId: (m.lastReadMessageId as string) ?? undefined, at: m.at as number });
        break;
      case 'error': {
        const k = m.clientId ? `sent:${m.clientId as string}` : undefined;
        if (k && pending.has(k)) {
          pending.get(k)!.reject(new Error(String(m.error)));
          pending.delete(k);
        } else console.warn('[native]', m.error);
        break;
      }
    }
  }

  const adapter: ChatAdapter = {
    platform: 'native',
    user,

    async connect(opts: ConnectOptions) {
      token = opts.token;
      httpUrl = opts.extra?.httpUrl ?? '';
      const wsUrl = opts.extra?.wsUrl ?? 'ws://localhost:4101';
      await new Promise<void>((resolve, reject) => {
        ws = new WebSocket(wsUrl);
        ws.onmessage = handle;
        ws.onerror = () => reject(new Error(`native: websocket error connecting to ${wsUrl}`));
        ws.onopen = () => resolve();
      });
      await request({ type: 'auth', token }, 'authed');
    },

    async openOrderChannel(o: Order) {
      order = o;
      channelId = channelIdForOrder(o.id);
      return request<ChannelInfo>(
        { type: 'open_channel', channelId, data: { orderId: o.id, listingId: o.listingId }, members: [o.buyerId, o.sellerId] },
        'channel',
      );
    },

    async getChannelInfo() {
      return request<ChannelInfo>({ type: 'channel_info', channelId }, 'channel');
    },

    async sendText(text: string) {
      // Built translation: attach every target language; readers pick theirs.
      let translations: Partial<Record<Lang, string>> | undefined;
      try {
        const t = await serverApi.translate(text, user.lang);
        if (t.available) translations = t.translations;
      } catch {
        /* translation provider error: send untranslated */
      }
      const clientId = `c${Date.now()}_${++seqCounter}`;
      const w = await request<WireMessage>({ type: 'send', channelId, kind: 'text', text, data: { translations }, clientId }, `sent:${clientId}`);
      return { messageId: w.id, blocked: w.moderated };
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // Our own protocol: a message of kind "order_card" whose data holds the card.
      const clientId = `c${Date.now()}_${++seqCounter}`;
      const sent = await request<WireMessage>(
        { type: 'send', channelId, kind: ORDER_CARD_TYPE, data: { card }, clientId },
        `sent:${clientId}`,
      );
      return { messageId: sent.id };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      sendWire({ type: 'update', channelId, messageId, data: { card } });
    },

    async sendAttachment(file: File) {
      const res = await fetch(`${httpUrl}/upload`, {
        method: 'POST',
        headers: { authorization: `Bearer ${token}`, 'content-type': file.type || 'application/octet-stream', 'x-file-name': encodeURIComponent(file.name) },
        body: file,
      });
      if (!res.ok) throw new Error(`upload failed ${res.status}`);
      const { url, name } = (await res.json()) as { url: string; name: string };
      const clientId = `c${Date.now()}_${++seqCounter}`;
      const w = await request<WireMessage>({ type: 'send', channelId, kind: 'attachment', data: { url, name }, clientId }, `sent:${clientId}`);
      return { messageId: w.id };
    },

    async getMessages(limit = 200) {
      const rows = await request<WireMessage[]>({ type: 'history', channelId, limit }, 'history');
      return rows.map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      sendWire({ type: 'read', channelId });
    },
    async setTyping(typing: boolean) {
      sendWire({ type: 'typing', channelId, typing });
    },
    async reportUser(userId: UserId, reason: string) {
      await request({ type: 'report', channelId, targetId: userId, reason }, 'reported');
    },
    async addSupportAgent() {
      sendWire({ type: 'add_member', channelId, userId: 'agent_sam' });
      await request<ChannelInfo>({ type: 'channel_info', channelId }, 'channel');
    },
    async disconnect() {
      ws?.close();
      ws = null;
      void order;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
