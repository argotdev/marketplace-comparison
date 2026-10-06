/**
 * Stream adapter: stream-chat v9 (JS core). Channel type "order" is created server-side with
 * typing/read events, uploads and a block list; the order card travels as a custom attachment.
 * Docs relied on are listed in docs/vendors/stream.md.
 */
import { StreamChat, type Channel, type Event, type MessageResponse } from 'stream-chat';
import './stream-types.ts';
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

export const meta = { platform: 'stream' as const, name: 'Stream Chat', hasKit: true };
export const CHANNEL_TYPE = 'order';

export function createAdapter(user: AppUser): ChatAdapter {
  let client: StreamChat | null = null;
  let channel: Channel | null = null;
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();
  const subs: { unsubscribe: () => void }[] = [];

  /** Stream auto-translation puts translations in message.i18n as `<lang>_text`; the built fallback rides in `translations`. */
  const toMessage = (m: MessageResponse): ChatMessage => {
    const base = { id: m.id, senderId: m.user?.id ?? 'system', createdAt: m.created_at ? new Date(m.created_at).getTime() : Date.now(), raw: m };
    const card = m.attachments?.find((a) => a.type === ORDER_CARD_TYPE) as (Record<string, unknown> & { card?: OrderCard }) | undefined;
    if (card?.card) return { ...base, kind: 'order_card', card: card.card };
    const image = m.attachments?.find((a) => a.type === 'image' && (a.image_url || a.asset_url));
    if (image) return { ...base, kind: 'attachment', attachmentUrl: image.image_url ?? image.asset_url, attachmentName: image.title ?? image.fallback };
    if (m.type === 'system') return { ...base, kind: 'system', text: m.text };
    const i18n = m.i18n as Record<string, string> | undefined;
    const native = i18n?.[`${user.lang}_text`];
    const text = native ?? pickTranslation(m.translations, user.lang, m.text ?? '');
    // Block list "block" rejects the send; moderation that rewrites or shadow-blocks is flagged via moderation_details.
    const moderated = Boolean((m as { moderation_details?: unknown }).moderation_details) || m.type === 'error';
    return { ...base, kind: 'text', text, originalText: m.text, moderated };
  };

  function requireChannel(): Channel {
    if (!channel) throw new Error('stream: channel not open');
    return channel;
  }

  function info(ch: Channel): ChannelInfo {
    const data = (ch.data ?? {}) as Record<string, unknown>;
    return { id: ch.id ?? '', memberIds: Object.keys(ch.state.members), data: { orderId: data.orderId, listingId: data.listingId } };
  }

  const adapter: ChatAdapter = {
    platform: 'stream',
    user,

    async connect(opts: ConnectOptions) {
      const apiKey = opts.extra?.apiKey;
      if (!apiKey) throw new Error('stream: apiKey missing from token response');
      client = StreamChat.getInstance(apiKey, { timeout: 10000 });
      // `language` drives auto-translation for this user.
      await client.connectUser({ id: user.id, name: user.name, language: user.lang }, opts.token);
    },

    async openOrderChannel(o: Order) {
      // Deterministic id; custom fields are top-level on the channel.
      channel = client!.channel(CHANNEL_TYPE, channelIdForOrder(o.id), {
        members: [o.buyerId, o.sellerId],
        orderId: o.id,
        listingId: o.listingId,
        name: `Order ${o.id}`,
      });
      await channel.watch();
      subs.push(
        channel.on('message.new', (e: Event) => {
          if (e.message) for (const cb of onMsg) cb(toMessage(e.message));
        }),
        channel.on('message.updated', (e: Event) => {
          if (e.message) for (const cb of onUpd) cb(toMessage(e.message));
        }),
        channel.on('typing.start', (e: Event) => {
          if (e.user && e.user.id !== user.id) for (const cb of onTyp) cb({ userId: e.user.id, typing: true });
        }),
        channel.on('typing.stop', (e: Event) => {
          if (e.user && e.user.id !== user.id) for (const cb of onTyp) cb({ userId: e.user.id, typing: false });
        }),
        channel.on('message.read', (e: Event) => {
          if (e.user) for (const cb of onRd) cb({ userId: e.user.id, at: e.created_at ? new Date(e.created_at).getTime() : Date.now() });
        }),
        channel.on('member.added', () => {
          /* channel.state.members is kept current by the client */
        }),
      );
      return info(channel);
    },

    async getChannelInfo() {
      const ch = requireChannel();
      await ch.query({ state: true, members: { limit: 100 } });
      return info(ch);
    },

    async sendText(text: string) {
      const ch = requireChannel();
      // Stream auto-translation is plan-gated (Elevate+); attach the built fallback too when a provider exists.
      let translations: Partial<Record<Lang, string>> | undefined;
      try {
        const t = await serverApi.translate(text, user.lang);
        if (t.available) translations = t.translations;
      } catch {
        /* no provider */
      }
      try {
        const r = await ch.sendMessage({ text, translations });
        return { messageId: r.message.id, blocked: r.message.type === 'error' || Boolean((r.message as { moderation_details?: unknown }).moderation_details) };
      } catch (e) {
        // Block list behaviour "block" rejects the message outright (HTTP 403, code 73 / 403).
        const err = e as { code?: number; status?: number; message?: string };
        if (err.code === 73 || err.status === 403 || /blocked|moderation/i.test(err.message ?? '')) return { messageId: `blocked_${Date.now()}`, blocked: true };
        throw e;
      }
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // Stream's custom message is a custom attachment type; the kit renders it through the Attachment override.
      const { message } = await channel!.sendMessage({
        text: `Order ${card.orderId}: ${card.listingTitle}`,
        attachments: [{ type: 'order_card', card }],
      });
      return { messageId: message.id };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      await client!.partialUpdateMessage(messageId, { set: { attachments: [{ type: ORDER_CARD_TYPE, card }] } });
    },

    async sendAttachment(file: File) {
      const ch = requireChannel();
      const up = await ch.sendImage(file, file.name, file.type);
      const { message } = await ch.sendMessage({ attachments: [{ type: 'image', image_url: up.file, fallback: file.name, title: file.name }] });
      return { messageId: message.id };
    },

    async getMessages(limit = 200) {
      const ch = requireChannel();
      const r = await ch.query({ messages: { limit } });
      return r.messages.map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      await requireChannel().markRead();
    },
    async setTyping(typing: boolean) {
      const ch = requireChannel();
      if (typing) await ch.keystroke();
      else await ch.stopTyping();
    },

    async reportUser(userId: UserId, reason: string) {
      // Flag lands in the moderation review queue (dashboard) and fires user.flagged to the webhook.
      await client!.flagUser(userId, { reason });
    },

    async addSupportAgent() {
      await requireChannel().addMembers(['agent_sam'], { text: 'Support agent Sam joined the conversation.' });
    },

    async disconnect() {
      for (const s of subs.splice(0)) s.unsubscribe();
      await client?.disconnectUser();
      client = null;
      channel = null;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
