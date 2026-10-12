/**
 * TalkJS adapter on the headless Data API (@talkjs/core, the "Components SDK" generation, Oct 2025+).
 * TalkJS custom data is Record<string, string>, so structured values are JSON strings.
 * Docs relied on are listed in docs/vendors/talkjs.md.
 */
import { getTalkSession, type ConversationRef, type MessageSnapshot, type MessageSubscription, type TalkSession } from '@talkjs/core';
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

export const meta = { platform: 'talkjs' as const, name: 'TalkJS', hasKit: true };

/** Default replacement text of TalkJS contact masking ("Mask unwanted content"), localisable in the dashboard. */
const MASK_TEXT = /\(hidden information\)|\(información oculta\)/i;

export function createAdapter(user: AppUser): ChatAdapter {
  let session: TalkSession | null = null;
  let conv: ConversationRef | null = null;
  let order: Order | null = null;
  let msgSub: MessageSubscription | null = null;
  const subs: { unsubscribe(): void }[] = [];
  // id -> change key. TalkJS leaves editedAt null when only custom data is edited over REST, so include custom in the key.
  const seen = new Map<string, string>();
  const changeKey = (m: MessageSnapshot) => `${m.editedAt ?? ''}|${JSON.stringify(m.custom)}`;
  const translated = new Map<string, string>();
  const typingNow = new Set<string>();
  let everyoneReadUntil = 0;
  const onMsg = new Set<(m: ChatMessage) => void>();
  const onUpd = new Set<(m: ChatMessage) => void>();
  const onTyp = new Set<(e: TypingEvent) => void>();
  const onRd = new Set<(e: ReadEvent) => void>();

  const toMessage = (m: MessageSnapshot): ChatMessage => {
    const base = { id: m.id, senderId: m.sender?.id ?? 'system', createdAt: m.createdAt, raw: m };
    if (m.custom.type === ORDER_CARD_TYPE && m.custom.card) return { ...base, kind: 'order_card', card: JSON.parse(m.custom.card) as OrderCard };
    const file = m.content.find((c) => c.type === 'file');
    if (file && 'url' in file) return { ...base, kind: 'attachment', attachmentUrl: file.url, attachmentName: 'filename' in file ? String(file.filename) : undefined };
    if (m.type === 'SystemMessage') return { ...base, kind: 'system', text: m.plaintext };
    let translations: Partial<Record<Lang, string>> | undefined;
    if (m.custom.translations) {
      try {
        translations = JSON.parse(m.custom.translations) as Partial<Record<Lang, string>>;
      } catch {
        /* ignore */
      }
    }
    const text = translated.get(m.id) ?? pickTranslation(translations, user.lang, m.plaintext);
    return { ...base, kind: 'text', text, originalText: m.plaintext, moderated: MASK_TEXT.test(m.plaintext) };
  };

  /** TalkJS's own translation (Growth plan, Google key in the dashboard): try once per foreign message, then fall back. */
  async function nativeTranslate(m: MessageSnapshot): Promise<void> {
    if (!conv || translated.has(m.id) || m.custom.translations || m.sender?.id === user.id || m.custom.type) return;
    try {
      const r = await conv.message(m.id).translate(user.lang);
      if (r?.plaintext && r.plaintext !== m.plaintext) {
        translated.set(m.id, r.plaintext);
        for (const cb of onUpd) cb(toMessage(m));
      }
    } catch {
      /* translation not enabled on this plan */
    }
  }

  function requireConv(): ConversationRef {
    if (!conv) throw new Error('talkjs: conversation not open');
    return conv;
  }

  async function participants(c: ConversationRef): Promise<string[]> {
    const sub = c.subscribeParticipants();
    const st = await sub.connected;
    sub.unsubscribe();
    return (st.latestSnapshot ?? []).map((p) => p.user.id);
  }

  async function info(c: ConversationRef): Promise<ChannelInfo> {
    const snap = await c.get();
    return { id: c.id, memberIds: await participants(c), data: { orderId: snap?.custom.orderId, listingId: snap?.custom.listingId } };
  }

  const adapter: ChatAdapter = {
    platform: 'talkjs',
    user,

    async connect(opts: ConnectOptions) {
      const appId = opts.extra?.appId;
      if (!appId) throw new Error('talkjs: appId missing from token response');
      session = getTalkSession({ appId, userId: user.id, token: opts.token, tokenFetcher: () => serverApi.token('talkjs', user.id).then((t) => t.token) });
      await session.currentUser.createIfNotExists({ name: user.name, role: user.role, locale: user.lang, custom: { lang: user.lang } });
    },

    async openOrderChannel(o: Order) {
      order = o;
      const c = session!.conversation(channelIdForOrder(o.id));
      await c.createIfNotExists({ subject: `Order ${o.id}`, custom: { orderId: o.id, listingId: o.listingId } });
      await c.participant(o.buyerId).createIfNotExists({ access: 'ReadWrite', notify: true });
      await c.participant(o.sellerId).createIfNotExists({ access: 'ReadWrite', notify: true });
      conv = c;

      // Messages arrive as full snapshots (latest 30 + loadMore); diff them into new / updated events.
      msgSub = c.subscribeMessages((snapshot) => {
        // Snapshots are newest-first; walk them oldest-first so new messages are emitted in order.
        for (const m of [...(snapshot ?? [])].sort((a, b) => a.createdAt - b.createdAt)) {
          const prev = seen.get(m.id);
          const key = changeKey(m);
          if (prev === undefined) {
            seen.set(m.id, key);
            for (const cb of onMsg) cb(toMessage(m));
            void nativeTranslate(m);
          } else if (prev !== key) {
            seen.set(m.id, key);
            for (const cb of onUpd) cb(toMessage(m));
          }
        }
      });
      await msgSub.connected;
      subs.push(
        c.subscribeTyping((snap) => {
          const now = new Set(snap && !snap.many ? snap.users.map((u) => u.id) : []);
          for (const id of now) if (!typingNow.has(id) && id !== user.id) for (const cb of onTyp) cb({ userId: id, typing: true });
          for (const id of typingNow) if (!now.has(id) && id !== user.id) for (const cb of onTyp) cb({ userId: id, typing: false });
          typingNow.clear();
          for (const id of now) typingNow.add(id);
        }),
        c.subscribe((snap) => {
          // everyoneReadUntil moves when the other side reads; in a 1:1 that is the read receipt.
          if (snap && snap.everyoneReadUntil > everyoneReadUntil) {
            everyoneReadUntil = snap.everyoneReadUntil;
            const others = [o.buyerId, o.sellerId].filter((id) => id !== user.id);
            for (const id of others) for (const cb of onRd) cb({ userId: id, at: snap.everyoneReadUntil });
          }
        }),
      );
      return info(c);
    },

    getChannelInfo: () => info(requireConv()),

    async sendText(text: string) {
      const c = requireConv();
      const custom: Record<string, string> = {};
      try {
        const t = await serverApi.translate(text, user.lang);
        if (t.available) custom.translations = JSON.stringify(t.translations);
      } catch {
        /* no provider */
      }
      const ref = await c.send({ text, custom });
      // everyoneReadUntil is the minimum over all participants, including us; mark our own send as read so that,
      // in a 1:1, the snapshot tracks the other side's read position (what the TalkJS UI does for an open chatbox).
      await c.markAsRead().catch(() => {});
      return { messageId: ref.id };
    },

    // snippet:start send-order-card
    async sendOrderCard(card: OrderCard) {
      // TalkJS custom data is string-only, so the card is a JSON string under a `type` discriminator.
      const conversation = requireConv();
      const message = await conversation.send({
        text: `Order ${card.orderId}: ${card.listingTitle}`,
        custom: { type: 'order_card', card: JSON.stringify(card) },
      });
      await conversation.markAsRead().catch(() => {});
      return { messageId: message.id };
    },
    // snippet:end

    async updateOrderCard(messageId: string, card: OrderCard) {
      await requireConv().message(messageId).edit({ custom: { card: JSON.stringify(card) } });
    },

    async sendAttachment(file: File) {
      const token = await session!.uploadImage(file, { filename: file.name });
      const ref = await requireConv().send({ content: [{ type: 'file', fileToken: token }] });
      await requireConv().markAsRead().catch(() => {});
      return { messageId: ref.id };
    },

    async getMessages(limit = 200) {
      const c = requireConv();
      const sub = c.subscribeMessages();
      let st = await sub.connected;
      while (!st.loadedAll && (st.latestSnapshot?.length ?? 0) < limit) {
        await sub.loadMore(50);
        st = await sub.connected;
        if (sub.state.type === 'active') st = sub.state;
      }
      const list = (sub.state.type === 'active' ? sub.state.latestSnapshot : st.latestSnapshot) ?? [];
      sub.unsubscribe();
      return [...list].sort((a, b) => a.createdAt - b.createdAt).map(toMessage);
    },

    onMessage: (cb) => sub(onMsg, cb),
    onMessageUpdated: (cb) => sub(onUpd, cb),
    onTyping: (cb) => sub(onTyp, cb),
    onRead: (cb) => sub(onRd, cb),

    async markAsRead() {
      await requireConv().markAsRead();
    },
    async setTyping(typing: boolean) {
      // TalkJS has no explicit "stop typing"; the indicator expires on its own after a few seconds.
      if (typing) await requireConv().markAsTyping();
    },

    async reportUser(userId: UserId, reason: string) {
      // TalkJS has no report API or moderation queue; this goes to our own queue (built).
      await serverApi.report('talkjs', user.id, userId, reason);
    },

    async addSupportAgent() {
      await requireConv().participant('agent_sam').createIfNotExists({ access: 'ReadWrite', notify: true });
    },

    async disconnect() {
      msgSub?.unsubscribe();
      for (const s of subs.splice(0)) s.unsubscribe();
      // @talkjs/core sessions have no explicit close; dropping references lets the socket go away.
      session = null;
      conv = null;
      void order;
    },
  };
  return adapter;
}

function sub<T>(set: Set<(e: T) => void>, cb: (e: T) => void): Unsubscribe {
  set.add(cb);
  return () => set.delete(cb);
}
