/**
 * PubNub adapter on the Chat SDK (@pubnub/chat 1.0) over the core SDK (pubnub 13). A group conversation per
 * order; the card rides in message `meta`; card updates are message actions (the same primitive the SDK uses
 * for text edits), because the Chat SDK cannot rewrite meta after publish. Docs: docs/vendors/pubnub.md.
 */
import { Chat, type Channel, type Membership, type Message, type User } from '@pubnub/chat';
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
import { watchCourier } from './courier.ts';

export const meta = { platform: 'pubnub' as const, name: 'PubNub (Chat SDK)', hasKit: false };

type Meta = { type?: string; card?: OrderCard; translations?: Partial<Record<Lang, string>>; moderated?: boolean };

/** Latest "order_card" message action wins over the original meta (that is how the card gets updated). */
function cardOf(m: Message): OrderCard | undefined {
  const actions = (m.actions ?? {}) as Record<string, Record<string, { actionTimetoken: string | number }[]>>;
  const entries = Object.entries(actions[ORDER_CARD_TYPE] ?? {});
  let best: { value: string; tt: number } | null = null;
  for (const [value, list] of entries) for (const a of list) if (!best || Number(a.actionTimetoken) > best.tt) best = { value, tt: Number(a.actionTimetoken) };
  if (best) {
    try {
      return JSON.parse(best.value) as OrderCard;
    } catch {
      /* fall through */
    }
  }
  return (m.meta as Meta | undefined)?.card;
}

export function createAdapter(user: AppUser): ChatAdapter {
  let chat: Chat | null = null;
  let channel: Channel | null = null;
  let membership: Membership | null = null;
  let order: Order | null = null;
  let lastMessage: Message | null = null;
  const unsubs: (() => void)[] = [];
  const typingNow = new Set<string>();
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();

  const toMessage = (m: Message): ChatMessage => {
    const mt = (m.meta ?? {}) as Meta;
    const base = { id: m.timetoken, senderId: m.userId, createdAt: Math.floor(Number(m.timetoken) / 10000), raw: m };
    if (mt.type === ORDER_CARD_TYPE) return { ...base, kind: 'order_card', card: cardOf(m) };
    const file = m.files?.[0];
    if (file) return { ...base, kind: 'attachment', attachmentUrl: file.url, attachmentName: file.name };
    return { ...base, kind: 'text', text: pickTranslation(mt.translations, user.lang, m.text), originalText: m.text, moderated: Boolean(mt.moderated) };
  };

  function requireChannel(): Channel {
    if (!channel) throw new Error('pubnub: channel not open');
    return channel;
  }

  async function info(ch: Channel): Promise<ChannelInfo> {
    const { members } = await ch.getMembers({ limit: 100 });
    return { id: ch.id, memberIds: members.map((mb) => mb.user.id), data: { orderId: ch.custom?.orderId, listingId: ch.custom?.listingId } };
  }

  /** Subscribe to per-message updates (actions) so card changes and edits surface as onMessageUpdated. */
  function track(m: Message) {
    lastMessage = m;
    unsubs.push(
      m.onUpdated((updated) => {
        for (const cb of onUpd) cb(toMessage(updated));
      }),
    );
  }

  const adapter: ChatAdapter = {
    platform: 'pubnub',
    user,

    async connect(opts: ConnectOptions) {
      const { publishKey, subscribeKey } = opts.extra ?? {};
      if (!publishKey || !subscribeKey) throw new Error('pubnub: keys missing from token response');
      chat = await Chat.init({ publishKey, subscribeKey, userId: user.id, authKey: opts.token, typingTimeout: 5000, emitReadReceiptEvents: { 'order-*': true } as never });
      if (!(await chat.getUser(user.id))) await chat.createUser(user.id, { name: user.name, custom: { lang: user.lang } });
    },

    async openOrderChannel(o: Order) {
      order = o;
      const id = channelIdForOrder(o.id);
      let ch = await chat!.getChannel(id);
      if (!ch) {
        const others: User[] = [];
        for (const uid of [o.buyerId, o.sellerId]) {
          if (uid === user.id) continue;
          others.push((await chat!.getUser(uid)) ?? (await chat!.createUser(uid, { name: uid })));
        }
        const r = await chat!.createGroupConversation({ users: others, channelId: id, channelData: { name: `Order ${o.id}`, custom: { orderId: o.id, listingId: o.listingId } } });
        ch = r.channel;
        membership = r.hostMembership;
      } else {
        membership = await ch.join();
      }
      channel = ch;
      unsubs.push(
        ch.onMessageReceived((m) => {
          track(m);
          for (const cb of onMsg) cb(toMessage(m));
        }),
        ch.onTypingChanged((ids) => {
          const now = new Set(ids.filter((x) => x !== user.id));
          for (const x of now) if (!typingNow.has(x)) for (const cb of onTyp) cb({ userId: x, typing: true });
          for (const x of typingNow) if (!now.has(x)) for (const cb of onTyp) cb({ userId: x, typing: false });
          typingNow.clear();
          for (const x of now) typingNow.add(x);
        }),
        ch.onReadReceiptReceived((r) => {
          if (r.userId !== user.id) for (const cb of onRd) cb({ userId: r.userId, lastReadMessageId: r.lastReadTimetoken, at: Math.floor(Number(r.lastReadTimetoken) / 10000) });
        }),
        watchCourier(chat!, o.id),
      );
      return info(ch);
    },

    getChannelInfo: () => info(requireChannel()),

    async sendText(text: string) {
      const ch = requireChannel();
      const m: Meta = {};
      try {
        const t = await serverApi.translate(text, user.lang);
        if (t.available) m.translations = t.translations;
      } catch {
        /* no provider */
      }
      const r = await ch.sendText(text, { meta: m, storeInHistory: true });
      return { messageId: String(r.timetoken) };
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // PubNub Chat SDK: a text message whose `meta` carries the structured card.
      const result = await channel!.sendText(`Order ${card.orderId}: ${card.listingTitle}`, {
        meta: { type: 'order_card', card },
        storeInHistory: true,
      });
      return { messageId: String(result.timetoken) };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      // meta is immutable after publish; a message action of type "order_card" carries the new state.
      await chat!.sdk.addMessageAction({ channel: requireChannel().id, messageTimetoken: messageId, action: { type: ORDER_CARD_TYPE, value: JSON.stringify(card) } });
    },

    async sendAttachment(file: File) {
      const draft = requireChannel().createMessageDraft();
      draft.update(file.name);
      draft.files = [file];
      const r = await draft.send({ storeInHistory: true });
      return { messageId: String(r.timetoken) };
    },

    async getMessages(limit = 200) {
      // getHistory returns at most 25 per call; page backwards until we have enough.
      const ch = requireChannel();
      const out: Message[] = [];
      let start: string | undefined;
      for (let i = 0; i < Math.ceil(limit / 25); i++) {
        const { messages, isMore } = await ch.getHistory({ count: 25, startTimetoken: start });
        out.unshift(...messages);
        if (!isMore || !messages.length) break;
        start = messages[0].timetoken;
      }
      for (const m of out) track(m);
      return out.map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      if (lastMessage && membership) membership = await membership.setLastReadMessage(lastMessage);
    },
    async setTyping(typing: boolean) {
      const ch = requireChannel();
      if (typing) await ch.startTyping();
      else await ch.stopTyping();
    },

    async reportUser(userId: UserId, reason: string) {
      // Chat SDK reports are message-level and land on PUBNUB_INTERNAL_MODERATION_<channel>; report the
      // target's latest message, and mirror to our queue so the report is observable without Access Manager quirks.
      const { messages } = await requireChannel().getHistory({ count: 25 });
      const target = [...messages].reverse().find((m) => m.userId === userId);
      if (target) await target.report(reason).catch(() => {});
      await serverApi.report('pubnub', user.id, userId, reason);
    },

    async addSupportAgent() {
      const agent = (await chat!.getUser('agent_sam')) ?? (await chat!.createUser('agent_sam', { name: 'Sam (support)' }));
      await requireChannel().invite(agent);
    },

    async disconnect() {
      for (const u of unsubs.splice(0)) u();
      chat?.sdk.unsubscribeAll();
      chat?.sdk.destroy();
      chat = null;
      channel = null;
      void order;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
