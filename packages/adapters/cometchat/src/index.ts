/**
 * CometChat adapter: @cometchat/chat-sdk-javascript v4. A private group per order (GUID = order channel id),
 * TextMessage for chat, CustomMessage type "order_card" for the card. Note from the docs: custom messages are
 * not subject to moderation, so free text must stay in TextMessages. Docs are listed in docs/vendors/cometchat.md.
 */
import { CometChat } from '@cometchat/chat-sdk-javascript';
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

export const meta = { platform: 'cometchat' as const, name: 'CometChat', hasKit: true };
const LISTENER_ID = 'mkt-adapter';
const TARGETS: Lang[] = ['en', 'es'];

type AnyMessage = CometChat.BaseMessage & { getText?: () => string; getCustomData?: () => object; getURL?: () => string; getMetadata?: () => object; getEditedAt?: () => number; getModerationStatus?: () => CometChat.ModerationStatus };

export function createAdapter(user: AppUser): ChatAdapter {
  let guid = '';
  let order: Order | null = null;
  let lastReceivedId: CometChat.BaseMessage | null = null;
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();

  const toMessage = (raw: CometChat.BaseMessage): ChatMessage => {
    const m = raw as AnyMessage;
    const base = { id: String(m.getId()), senderId: m.getSender()?.getUid() ?? 'system', createdAt: m.getSentAt() * 1000, raw: m };
    const category = m.getCategory();
    if (category === CometChat.CATEGORY_CUSTOM && m.getType() === ORDER_CARD_TYPE) {
      // The card lives in customData; the server-side edit path may only reach metadata, so read both.
      const data = (m.getCustomData?.() ?? {}) as { card?: OrderCard };
      const meta = (m.getMetadata?.() ?? {}) as { card?: OrderCard };
      return { ...base, kind: 'order_card', card: meta.card ?? data.card ?? (data as unknown as OrderCard) };
    }
    if (m.getType() === CometChat.MESSAGE_TYPE.IMAGE || m.getType() === CometChat.MESSAGE_TYPE.FILE) {
      const media = m as CometChat.MediaMessage;
      return { ...base, kind: 'attachment', attachmentUrl: media.getURL?.() ?? media.getAttachment?.()?.getUrl?.(), attachmentName: media.getAttachment?.()?.getName?.() };
    }
    if (category === CometChat.CATEGORY_ACTION) return { ...base, kind: 'system', text: m.getText?.() ?? '' };
    const text = m.getText?.() ?? '';
    const meta = (m.getMetadata?.() ?? {}) as { 'message-translation'?: Partial<Record<Lang, string>>; translations?: Partial<Record<Lang, string>> };
    const translated = pickTranslation(meta['message-translation'] ?? meta.translations, user.lang, text);
    const status = m.getModerationStatus?.();
    return { ...base, kind: 'text', text: translated, originalText: text, moderated: status === CometChat.ModerationStatus.DISAPPROVED };
  };

  async function members(): Promise<string[]> {
    const req = new CometChat.GroupMembersRequestBuilder(guid).setLimit(100).build();
    const list = await req.fetchNext();
    return list.map((gm) => gm.getUid());
  }

  async function info(): Promise<ChannelInfo> {
    const g = await CometChat.getGroup(guid);
    const data = (g.getMetadata() ?? {}) as Record<string, unknown>;
    return { id: g.getGuid(), memberIds: await members(), data: { orderId: data.orderId, listingId: data.listingId } };
  }

  const adapter: ChatAdapter = {
    platform: 'cometchat',
    user,

    async connect(opts: ConnectOptions) {
      const appId = opts.extra?.appId;
      const region = opts.extra?.region;
      if (!appId || !region) throw new Error('cometchat: appId/region missing from token response');
      const settings = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).autoEstablishSocketConnection(true).build();
      await CometChat.init(appId, settings);
      const existing = await CometChat.getLoggedinUser();
      if (!existing || existing.getUid() !== user.id) {
        if (existing) await CometChat.logout();
        await CometChat.login(opts.token); // auth token minted by our server
      }
      CometChat.addMessageListener(
        LISTENER_ID,
        new CometChat.MessageListener({
          onTextMessageReceived: (m: CometChat.TextMessage) => deliver(m),
          onMediaMessageReceived: (m: CometChat.MediaMessage) => deliver(m),
          onCustomMessageReceived: (m: CometChat.CustomMessage) => deliver(m),
          onMessageEdited: (m: CometChat.BaseMessage) => {
            if (m.getReceiverId() === guid) for (const cb of onUpd) cb(toMessage(m));
          },
          onTypingStarted: (t: CometChat.TypingIndicator) => {
            if (t.getReceiverId() === guid) for (const cb of onTyp) cb({ userId: t.getSender().getUid(), typing: true });
          },
          onTypingEnded: (t: CometChat.TypingIndicator) => {
            if (t.getReceiverId() === guid) for (const cb of onTyp) cb({ userId: t.getSender().getUid(), typing: false });
          },
          onMessagesRead: (r: CometChat.MessageReceipt) => {
            for (const cb of onRd) cb({ userId: r.getSender().getUid(), lastReadMessageId: String(r.getMessageId()), at: r.getReadAt() * 1000 });
          },
          onMessageModerated: (m: CometChat.BaseMessage) => {
            if (m.getReceiverId() === guid) for (const cb of onUpd) cb(toMessage(m));
          },
        }),
      );
      function deliver(m: CometChat.BaseMessage) {
        if (m.getReceiverId() !== guid) return;
        lastReceivedId = m;
        for (const cb of onMsg) cb(toMessage(m));
      }
    },

    async openOrderChannel(o: Order) {
      order = o;
      guid = channelIdForOrder(o.id);
      try {
        await CometChat.getGroup(guid);
      } catch {
        const group = new CometChat.Group(guid, `Order ${o.id}`, CometChat.GROUP_TYPE.PRIVATE, '');
        group.setMetadata({ orderId: o.id, listingId: o.listingId });
        const other = o.buyerId === user.id ? o.sellerId : o.buyerId;
        await CometChat.createGroupWithMembers(group, [new CometChat.GroupMember(other, CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT)], []);
      }
      return info();
    },

    getChannelInfo: info,

    async sendText(text: string) {
      const msg = new CometChat.TextMessage(guid, text, CometChat.RECEIVER_TYPE.GROUP);
      // CometChat's Message Translation extension is on-demand: translate before sending and store per language
      // in metadata, the pattern its docs describe. Fall back to our server provider if the extension is off.
      const meta: Record<string, unknown> = {};
      try {
        const r = (await CometChat.callExtension('message-translation', 'POST', 'v2/translate', { text, languages: TARGETS.filter((l) => l !== user.lang) })) as {
          translations?: { message_translated: string; language_translated: string }[];
        };
        if (r.translations?.length) meta['message-translation'] = Object.fromEntries([[user.lang, text], ...r.translations.map((t) => [t.language_translated, t.message_translated])]);
      } catch {
        try {
          const t = await serverApi.translate(text, user.lang, TARGETS);
          if (t.available) meta.translations = t.translations;
        } catch {
          /* no provider */
        }
      }
      if (Object.keys(meta).length) msg.setMetadata(meta);
      const sent = (await CometChat.sendMessage(msg)) as AnyMessage;
      const status = sent.getModerationStatus?.();
      return { messageId: String(sent.getId()), blocked: status === CometChat.ModerationStatus.DISAPPROVED };
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // CometChat's custom message: a type string plus any JSON in customData.
      const message = new CometChat.CustomMessage(guid, CometChat.RECEIVER_TYPE.GROUP, 'order_card', { card });
      message.setConversationText(`Order ${card.orderId}: ${card.listingTitle}`);
      message.shouldUpdateConversation(true);
      const sent = await CometChat.sendCustomMessage(message);
      return { messageId: String(sent.getId()) };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      const edited = new CometChat.CustomMessage(guid, CometChat.RECEIVER_TYPE.GROUP, ORDER_CARD_TYPE, { card });
      edited.setId(Number(messageId));
      await CometChat.editMessage(edited);
    },

    async sendAttachment(file: File) {
      const media = new CometChat.MediaMessage(guid, file, CometChat.MESSAGE_TYPE.IMAGE, CometChat.RECEIVER_TYPE.GROUP);
      const sent = await CometChat.sendMediaMessage(media);
      return { messageId: String(sent.getId()) };
    },

    async getMessages(limit = 200) {
      const req = new CometChat.MessagesRequestBuilder().setGUID(guid).setLimit(Math.min(limit, 100)).build();
      const list = await req.fetchPrevious();
      return list.map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      if (lastReceivedId) await CometChat.markAsRead(lastReceivedId);
    },
    async setTyping(typing: boolean) {
      const ind = new CometChat.TypingIndicator(guid, CometChat.RECEIVER_TYPE.GROUP);
      if (typing) CometChat.startTyping(ind);
      else CometChat.endTyping(ind);
    },

    async reportUser(userId: UserId, reason: string) {
      // Modern API is message-level: flag the target's latest message with a dashboard flag reason.
      // Report-user exists only as a legacy extension. Mirror to our queue so the report is observable either way.
      const req = new CometChat.MessagesRequestBuilder().setGUID(guid).setLimit(50).build();
      const recent = await req.fetchPrevious();
      const target = [...recent].reverse().find((m) => m.getSender()?.getUid() === userId);
      if (target) {
        const reasons = await CometChat.getFlagReasons();
        const reasonId = reasons[0]?.id;
        if (reasonId) await CometChat.flagMessage(String(target.getId()), { reasonId, remark: reason });
      }
      await serverApi.report('cometchat', user.id, userId, reason);
    },

    async addSupportAgent() {
      await CometChat.addMembersToGroup(guid, [new CometChat.GroupMember('agent_sam', CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT)], []);
    },

    async disconnect() {
      CometChat.removeMessageListener(LISTENER_ID);
      await CometChat.logout().catch(() => {});
      void order;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
