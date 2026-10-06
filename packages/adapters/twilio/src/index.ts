/**
 * Twilio Conversations (classic) adapter: @twilio/conversations v3. One Conversation per order
 * (uniqueName = order channel id). Twilio has no moderation, translation, email or UI kit; those are
 * built on our server (pre-event webhook rewrite, translation provider, mailer). Docs: docs/vendors/twilio.md.
 */
import { Client, type Conversation, type Message, type Participant } from '@twilio/conversations';
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

export const meta = { platform: 'twilio' as const, name: 'Twilio Conversations (classic)', hasKit: false };

type Attrs = { type?: string; card?: OrderCard; translations?: Partial<Record<Lang, string>>; moderated?: boolean };

export function createAdapter(user: AppUser): ChatAdapter {
  let client: Client | null = null;
  let conv: Conversation | null = null;
  let order: Order | null = null;
  const mediaUrls = new Map<string, string>();
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();
  const handlers: [string, (...a: never[]) => void][] = [];

  const toMessage = (m: Message): ChatMessage => {
    const a = (m.attributes ?? {}) as Attrs;
    const base = { id: m.sid, senderId: m.author ?? 'system', createdAt: m.dateCreated?.getTime() ?? Date.now(), raw: m };
    if (a.type === ORDER_CARD_TYPE && a.card) return { ...base, kind: 'order_card', card: a.card };
    if (m.attachedMedia?.length) {
      const media = m.attachedMedia[0];
      return { ...base, kind: 'attachment', attachmentUrl: mediaUrls.get(m.sid), attachmentName: media.filename ?? undefined };
    }
    const text = m.body ?? '';
    return { ...base, kind: 'text', text: pickTranslation(a.translations, user.lang, text), originalText: text, moderated: Boolean(a.moderated) };
  };

  /** Media URLs are temporary (300 s) and fetched per message. */
  async function withMedia(m: Message): Promise<ChatMessage> {
    if (m.attachedMedia?.length && !mediaUrls.has(m.sid)) {
      const urls = await m.getTemporaryContentUrlsForAttachedMedia();
      const first = urls.values().next().value as string | undefined;
      if (first) mediaUrls.set(m.sid, first);
    }
    return toMessage(m);
  }

  function requireConv(): Conversation {
    if (!conv) throw new Error('twilio: conversation not open');
    return conv;
  }

  async function info(c: Conversation): Promise<ChannelInfo> {
    const parts = await c.getParticipants();
    const data = (c.attributes ?? {}) as Record<string, unknown>;
    return { id: c.uniqueName ?? c.sid, memberIds: parts.map((p) => p.identity ?? `${p.type}:${p.sid}`), data: { orderId: data.orderId, listingId: data.listingId, sid: c.sid } };
  }

  const adapter: ChatAdapter = {
    platform: 'twilio',
    user,

    async connect(opts: ConnectOptions) {
      client = new Client(opts.token, opts.extra?.region ? { region: opts.extra.region } : undefined);
      await new Promise<void>((resolve, reject) => {
        const onState = (state: string) => {
          if (state === 'connected') resolve();
          if (state === 'denied') reject(new Error('twilio: connection denied (bad token?)'));
        };
        client!.on('connectionStateChanged', onState);
        if (client!.connectionState === 'connected') resolve();
      });
      client.on('tokenAboutToExpire', () => {
        serverApi.token('twilio', user.id).then((t) => client?.updateToken(t.token)).catch(() => {});
      });
    },

    async openOrderChannel(o: Order) {
      order = o;
      const uniqueName = channelIdForOrder(o.id);
      try {
        conv = await client!.getConversationByUniqueName(uniqueName);
      } catch {
        // Not found or not a participant yet: ask our server to create it with both participants.
        await serverApi.setup('twilio').catch(() => {});
        const res = await fetch(`/api/vendors/twilio/order-channel/${o.id}`);
        if (!res.ok) {
          conv = await client!.createConversation({ uniqueName, friendlyName: `Order ${o.id}`, attributes: { orderId: o.id, listingId: o.listingId } });
          await conv.join().catch(() => {});
          for (const id of [o.buyerId, o.sellerId]) if (id !== user.id) await conv.add(id).catch(() => {});
        } else {
          conv = await client!.getConversationByUniqueName(uniqueName);
        }
      }
      const c = conv;
      const on = <K extends keyof Parameters<Conversation['on']>[0]>(ev: string, fn: (...a: never[]) => void) => {
        (c.on as unknown as (e: string, f: unknown) => void)(ev, fn);
        handlers.push([ev, fn]);
        void (null as unknown as K);
      };
      on('messageAdded', (m: Message) => {
        withMedia(m).then((msg) => {
          for (const cb of onMsg) cb(msg);
        });
      });
      on('messageUpdated', (d: { message: Message }) => {
        for (const cb of onUpd) cb(toMessage(d.message));
      });
      on('typingStarted', (p: Participant) => {
        if (p.identity && p.identity !== user.id) for (const cb of onTyp) cb({ userId: p.identity, typing: true });
      });
      on('typingEnded', (p: Participant) => {
        if (p.identity && p.identity !== user.id) for (const cb of onTyp) cb({ userId: p.identity, typing: false });
      });
      on('participantUpdated', (d: { participant: Participant; updateReasons: string[] }) => {
        if (d.updateReasons.includes('lastReadMessageIndex') && d.participant.identity && d.participant.identity !== user.id) {
          for (const cb of onRd) cb({ userId: d.participant.identity, at: d.participant.lastReadTimestamp?.getTime() ?? Date.now() });
        }
      });
      return info(c);
    },

    getChannelInfo: () => info(requireConv()),

    async sendText(text: string) {
      const c = requireConv();
      const attrs: Attrs = {};
      try {
        const t = await serverApi.translate(text, user.lang);
        if (t.available) attrs.translations = t.translations;
      } catch {
        /* no provider */
      }
      try {
        const index = await c.sendMessage(text, attrs as unknown as Parameters<Conversation['sendMessage']>[1]);
        // Twilio returns the message index; resolve the SID from the page for a stable id.
        const page = await c.getMessages(1, index, 'backwards');
        return { messageId: page.items[0]?.sid ?? String(index) };
      } catch (e) {
        // The pre-event webhook (our moderation) rejected the message with a 4xx.
        return { messageId: `blocked_${Date.now()}`, blocked: true };
      }
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // Twilio has no custom message type; structured data goes in the message's JSON attributes (4 KB limit).
      const conversation = requireConv();
      const index = await conversation
        .prepareMessage()
        .setBody(`Order ${card.orderId}: ${card.listingTitle}`)
        .setAttributes({ type: 'order_card', card: { ...card } })
        .build()
        .send();
      const page = await conversation.getMessages(1, index ?? undefined, 'backwards');
      return { messageId: page.items[0].sid };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      const c = requireConv();
      const page = await c.getMessages(50, undefined, 'backwards');
      const m = page.items.find((x) => x.sid === messageId);
      if (!m) throw new Error('twilio: message not in the last 50');
      await m.updateAttributes({ type: ORDER_CARD_TYPE, card } as unknown as Parameters<Message['updateAttributes']>[0]);
    },

    async sendAttachment(file: File) {
      const c = requireConv();
      const fd = new FormData();
      fd.append('file', file, file.name);
      const index = await c.sendMessage(fd);
      const page = await c.getMessages(1, index, 'backwards');
      return { messageId: page.items[0]?.sid ?? String(index) };
    },

    async getMessages(limit = 200) {
      const page = await requireConv().getMessages(Math.min(limit, 100), undefined, 'backwards');
      return Promise.all(page.items.map(withMedia));
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      // The SDK does not advance the read horizon by itself.
      await requireConv().setAllMessagesRead();
    },
    async setTyping(typing: boolean) {
      // Twilio only has a "typing" signal (sent at most every 5 s); it ends by timeout.
      if (typing) await requireConv().typing();
    },

    async reportUser(userId: UserId, reason: string) {
      await serverApi.report('twilio', user.id, userId, reason); // nothing native
    },

    async addSupportAgent() {
      const c = requireConv();
      try {
        await c.add('agent_sam');
      } catch {
        await serverApi.addMember('twilio', c.sid, 'agent_sam');
      }
    },

    async disconnect() {
      await client?.shutdown();
      client = null;
      conv = null;
      void order;
      void handlers;
    },
  };

  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
