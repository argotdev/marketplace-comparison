/**
 * Sendbird adapter: @sendbird/chat v4 (GroupChannelModule). The baseline every other build is
 * compared with. Docs relied on are listed in docs/vendors/sendbird.md.
 */
import SendbirdChat, { ReportCategory, type BaseChannel, type User } from '@sendbird/chat';
import { GroupChannelModule, GroupChannelHandler, type GroupChannel } from '@sendbird/chat/groupChannel';
import { type BaseMessage, type FileMessage, type UserMessage, MessageTypeFilter } from '@sendbird/chat/message';
import {
  channelIdForOrder,
  LISTING,
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

export const meta = { platform: 'sendbird' as const, name: 'Sendbird Chat', hasKit: true };

const HANDLER_ID = 'mkt-adapter';
const TARGET_LANGS: Lang[] = ['en', 'es'];

function parseData(data: string | undefined): Record<string, unknown> {
  if (!data) return {};
  try {
    return JSON.parse(data) as Record<string, unknown>;
  } catch {
    return {};
  }
}

export function createAdapter(user: AppUser): ChatAdapter {
  let sb: ReturnType<typeof SendbirdChat.init<[GroupChannelModule]>> | null = null;
  let channel: GroupChannel | null = null;
  let order: Order | null = null;
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();
  const typingState = new Map<string, boolean>();

  /** Map a Sendbird message to the platform-neutral shape, choosing the reader's language. */
  const toMessage = (m: BaseMessage): ChatMessage => {
    const base = { id: String(m.messageId), senderId: (m as UserMessage).sender?.userId ?? 'system', createdAt: m.createdAt, raw: m };
    if (m.isFileMessage()) {
      const f = m as FileMessage;
      return { ...base, kind: 'attachment', attachmentUrl: f.url, attachmentName: f.name };
    }
    if (m.isUserMessage()) {
      const u = m as UserMessage;
      const data = parseData(u.data);
      if (u.customType === ORDER_CARD_TYPE) return { ...base, kind: 'order_card', card: data as unknown as OrderCard };
      // Sendbird's own translations arrive in message.translations; the built fallback rides in data.translations.
      const native = (u.translations as Record<string, string> | undefined)?.[user.lang];
      const text = native ?? pickTranslation(data.translations as Partial<Record<Lang, string>> | undefined, user.lang, u.message);
      // Profanity filter type "replace" masks with asterisks in place; flag it when it did.
      const moderated = /\*{3,}/.test(u.message);
      return { ...base, kind: 'text', text, originalText: u.message, moderated };
    }
    return { ...base, kind: 'system', text: (m as UserMessage).message };
  };

  function requireChannel(): GroupChannel {
    if (!channel) throw new Error('sendbird: channel not open');
    return channel;
  }

  function info(ch: GroupChannel): ChannelInfo {
    return { id: ch.url, memberIds: ch.members.map((m) => m.userId), data: parseData(ch.data) };
  }

  const adapter: ChatAdapter = {
    platform: 'sendbird',
    user,

    async connect(opts: ConnectOptions) {
      const appId = opts.extra?.appId;
      if (!appId) throw new Error('sendbird: appId missing from token response');
      sb = SendbirdChat.init({ appId, modules: [new GroupChannelModule()] });
      // Session tokens expire; the SDK asks for a new one through the session handler.
      const { SessionHandler } = await import('@sendbird/chat');
      const handler = new SessionHandler();
      handler.onSessionTokenRequired = (resolve, reject) => {
        serverApi.token('sendbird', user.id).then((t) => resolve(t.token)).catch(reject);
      };
      sb.setSessionHandler(handler);
      await sb.connect(user.id, opts.token);
      await sb.updateCurrentUserInfo({ nickname: user.name });

      sb.groupChannel.addGroupChannelHandler(
        HANDLER_ID,
        new GroupChannelHandler({
          onMessageReceived: (ch: BaseChannel, m: BaseMessage) => {
            if (channel && ch.url === channel.url) for (const cb of onMsg) cb(toMessage(m));
          },
          onMessageUpdated: (ch: BaseChannel, m: BaseMessage) => {
            if (channel && ch.url === channel.url) for (const cb of onUpd) cb(toMessage(m));
          },
          onTypingStatusUpdated: (ch: GroupChannel) => {
            if (!channel || ch.url !== channel.url) return;
            const typingNow = new Set(ch.getTypingUsers().map((u) => u.userId));
            for (const m of ch.members) {
              const was = typingState.get(m.userId) ?? false;
              const is = typingNow.has(m.userId);
              if (was !== is && m.userId !== user.id) for (const cb of onTyp) cb({ userId: m.userId, typing: is });
              typingState.set(m.userId, is);
            }
          },
          onUserMarkedRead: (ch: GroupChannel, userIds: string[]) => {
            if (!channel || ch.url !== channel.url) return;
            for (const id of userIds) for (const cb of onRd) cb({ userId: id, at: Date.now() });
          },
          onUserJoined: (ch: GroupChannel) => {
            if (channel && ch.url === channel.url) channel = ch;
          },
        }),
      );
    },

    async openOrderChannel(o: Order) {
      order = o;
      const url = channelIdForOrder(o.id);
      try {
        channel = await sb!.groupChannel.getChannel(url);
      } catch {
        // Not found: create it with a deterministic URL, the order metadata and exactly two members.
        channel = await sb!.groupChannel.createChannel({
          channelUrl: url,
          name: `Order ${o.id}`,
          customType: 'order',
          isDistinct: false,
          invitedUserIds: [o.buyerId, o.sellerId],
          data: JSON.stringify({ orderId: o.id, listingId: o.listingId }),
        });
      }
      return info(channel);
    },

    async getChannelInfo() {
      channel = await sb!.groupChannel.getChannel(requireChannel().url);
      return info(channel);
    },

    async sendText(text: string) {
      const ch = requireChannel();
      // Try Sendbird's own translation first; it is plan-gated, so also attach the built fallback when a provider exists.
      let data: string | undefined;
      try {
        const t = await serverApi.translate(text, user.lang, TARGET_LANGS);
        if (t.available) data = JSON.stringify({ translations: t.translations });
      } catch {
        /* no provider */
      }
      const sent = await new Promise<UserMessage>((resolve, reject) => {
        ch.sendUserMessage({ message: text, translationTargetLanguages: TARGET_LANGS, data })
          .onSucceeded((m) => resolve(m as UserMessage))
          .onFailed((err) => reject(err));
      });
      return { messageId: String(sent.messageId), blocked: /\*{3,}/.test(sent.message) };
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // A user message with a customType and a JSON string in `data` is Sendbird's custom message.
      const message = await new Promise<UserMessage>((resolve, reject) => {
        channel!
          .sendUserMessage({
            message: `Order ${card.orderId}: ${card.listingTitle}`,
            customType: 'order_card',
            data: JSON.stringify(card),
          })
          .onSucceeded((m) => resolve(m as UserMessage))
          .onFailed((err) => reject(err));
      });
      return { messageId: String(message.messageId) };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      await requireChannel().updateUserMessage(Number(messageId), { data: JSON.stringify(card) });
    },

    async sendAttachment(file: File) {
      const ch = requireChannel();
      const sent = await new Promise<FileMessage>((resolve, reject) => {
        ch.sendFileMessage({ file, fileName: file.name, mimeType: file.type, fileSize: file.size })
          .onSucceeded((m) => resolve(m as FileMessage))
          .onFailed((err) => reject(err));
      });
      return { messageId: String(sent.messageId) };
    },

    async getMessages(limit = 200) {
      const ch = requireChannel();
      const msgs = await ch.getMessagesByTimestamp(Date.now(), {
        prevResultSize: limit,
        nextResultSize: 0,
        isInclusive: true,
        reverse: false,
        messageTypeFilter: MessageTypeFilter.ALL,
      });
      return msgs.map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      await requireChannel().markAsRead();
    },
    async setTyping(typing: boolean) {
      const ch = requireChannel();
      if (typing) await ch.startTyping();
      else await ch.endTyping();
    },

    async reportUser(userId: UserId, reason: string) {
      const ch = requireChannel();
      const target = ch.members.find((m) => m.userId === userId) as User | undefined;
      if (!target) throw new Error(`sendbird: ${userId} is not a member`);
      // Built-in categories: suspicious, harassing, inappropriate, spam. Lands in the dashboard and the user:report webhook.
      await ch.reportUser(target, ReportCategory.SUSPICIOUS, reason);
    },

    async addSupportAgent() {
      channel = await requireChannel().inviteWithUserIds(['agent_sam']);
    },

    async disconnect() {
      sb?.groupChannel.removeGroupChannelHandler(HANDLER_ID);
      await sb?.disconnect();
      sb = null;
      channel = null;
      void order;
      void LISTING;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
