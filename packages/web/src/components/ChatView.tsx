import { useEffect, useRef, useState } from 'react';
import {
  LISTING,
  orderCardFrom,
  serverApi,
  USERS,
  type AppUser,
  type ChannelInfo,
  type ChatAdapter,
  type ChatMessage,
  type Order,
  type OrderCard,
  type ReadEvent,
  type TypingEvent,
  type UserId,
} from '@mkt/shared';
import { OrderCardView } from './OrderCardView.tsx';
import { installHooks, type ChatTestHooks } from '../lib/testHooks.ts';

interface Props {
  adapter: ChatAdapter;
  user: AppUser;
  order: Order;
  autoConnect: boolean;
  tokenInfo: { token: string; extra?: Record<string, string> };
}

function upsert(list: ChatMessage[], m: ChatMessage): ChatMessage[] {
  const i = list.findIndex((x) => x.id === m.id);
  if (i === -1) return [...list, m];
  const next = list.slice();
  next[i] = { ...next[i], ...m };
  return next;
}

export function ChatView({ adapter, user, order, autoConnect, tokenInfo }: Props) {
  const [state, setState] = useState<'idle' | 'connecting' | 'ready' | 'error'>('idle');
  const [error, setError] = useState<string>();
  const [channel, setChannel] = useState<ChannelInfo | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typingUsers, setTypingUsers] = useState<Record<string, boolean>>({});
  const [reads, setReads] = useState<Record<string, ReadEvent>>({});
  const [draft, setDraft] = useState('');
  const [orderStatus, setOrderStatus] = useState(order.status);
  const listRef = useRef<HTMLDivElement>(null);
  const hooks = useRef<ChatTestHooks | null>(null);
  const typingTimer = useRef<number | undefined>(undefined);

  // Build the Playwright hooks once per adapter instance.
  useEffect(() => {
    let resolveReady!: (c: ChannelInfo) => void;
    let rejectReady!: (e: Error) => void;
    const ready = new Promise<ChannelInfo>((res, rej) => {
      resolveReady = res;
      rejectReady = rej;
    });
    ready.catch(() => {});

    const h: ChatTestHooks = {
      platform: adapter.platform,
      userId: user.id,
      adapter,
      ready,
      state: 'idle',
      channel: null,
      messages: [],
      updates: [],
      typing: [],
      reads: [],
      async connect() {
        h.state = 'connecting';
        setState('connecting');
        try {
          await window.__mark?.('connect:start');
          await adapter.connect(tokenInfo);
          const ch = await adapter.openOrderChannel(order);
          await window.__mark?.('connect:ready');
          h.channel = ch;
          setChannel(ch);
          const history = await adapter.getMessages();
          setMessages(history);
          h.messages = history.slice();
          h.state = 'ready';
          setState('ready');
          resolveReady(ch);
          return ch;
        } catch (e) {
          const msg = (e as Error).message ?? String(e);
          h.state = 'error';
          h.error = msg;
          setError(msg);
          setState('error');
          rejectReady(e as Error);
          throw e;
        }
      },
      sendText: (t) => adapter.sendText(t),
      async sendCard(card) {
        const id = card.benchId;
        await window.__mark?.('send:before', id);
        const t0 = performance.now();
        const r = await adapter.sendOrderCard(card);
        const sendMs = performance.now() - t0;
        await window.__mark?.('send:resolved', id);
        // The sender id lets server halves edit as the author where a platform only allows authors to edit.
        if (!id) await serverApi.registerCardMessage(order.id, adapter.platform, h.channel?.id ?? '', r.messageId, { senderId: user.id });
        return { ...r, sendMs };
      },
      async sendAttachment(name, mime, base64) {
        const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
        return adapter.sendAttachment(new File([bytes], name, { type: mime }));
      },
      markAsRead: () => adapter.markAsRead(),
      setTyping: (t) => adapter.setTyping(t),
      reportUser: (id, reason) => adapter.reportUser(id as UserId, reason),
      async addSupportAgent() {
        await adapter.addSupportAgent();
        const ch = await adapter.getChannelInfo();
        h.channel = ch;
        setChannel(ch);
      },
      getMessages: () => adapter.getMessages(),
      getChannelInfo: () => adapter.getChannelInfo(),
      async disconnect() {
        await serverApi.offline(adapter.platform, user.id).catch(() => {});
        await adapter.disconnect();
      },
    };
    hooks.current = h;
    installHooks(h);

    const offMsg = adapter.onMessage((m) => {
      if (m.card?.benchId) void window.__mark?.('recv', m.card.benchId);
      h.messages = upsert(h.messages, m);
      setMessages((list) => upsert(list, m));
    });
    const offUpd = adapter.onMessageUpdated((m) => {
      h.updates.push(m);
      h.messages = upsert(h.messages, m);
      setMessages((list) => upsert(list, m));
    });
    const offTyp = adapter.onTyping((e: TypingEvent) => {
      h.typing.push(e);
      setTypingUsers((t) => ({ ...t, [e.userId]: e.typing }));
    });
    const offRead = adapter.onRead((e) => {
      h.reads.push(e);
      setReads((r) => ({ ...r, [e.userId]: e }));
    });

    if (autoConnect) h.connect().catch(() => {});

    // Presence heartbeat for the built email fallback (same for every platform).
    const hb = window.setInterval(() => {
      if (h.state === 'ready') serverApi.heartbeat(adapter.platform, user.id).catch(() => {});
    }, 2000);
    const onUnload = () => {
      navigator.sendBeacon?.(`/api/presence/offline`, new Blob([JSON.stringify({ platform: adapter.platform, userId: user.id })], { type: 'application/json' }));
    };
    window.addEventListener('pagehide', onUnload);

    return () => {
      offMsg();
      offUpd();
      offTyp();
      offRead();
      window.clearInterval(hb);
      window.removeEventListener('pagehide', onUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adapter]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages.length]);

  async function send() {
    const text = draft.trim();
    if (!text) return;
    setDraft('');
    await adapter.setTyping(false).catch(() => {});
    try {
      await adapter.sendText(text);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  async function sendCard() {
    const card: OrderCard = orderCardFrom({ ...order, status: orderStatus }, LISTING);
    await hooks.current?.sendCard(card);
  }

  async function changeStatus(status: Order['status']) {
    setOrderStatus(status);
    await serverApi.setOrderStatus(order.id, status);
  }

  async function pickAttachment(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    try {
      await adapter.sendAttachment(f);
    } catch (err) {
      setError((err as Error).message);
    }
    e.target.value = '';
  }

  function onDraft(v: string) {
    setDraft(v);
    adapter.setTyping(true).catch(() => {});
    window.clearTimeout(typingTimer.current);
    typingTimer.current = window.setTimeout(() => adapter.setTyping(false).catch(() => {}), 2500);
  }

  const others = (channel?.memberIds ?? []).filter((id) => id !== user.id);
  const typingNames = Object.entries(typingUsers)
    .filter(([id, t]) => t && id !== user.id)
    .map(([id]) => USERS[id as UserId]?.name ?? id);
  const lastMine = [...messages].reverse().find((m) => m.senderId === user.id);
  const readBy = lastMine
    ? others.filter((id) => {
        const r = reads[id];
        if (!r) return false;
        if (r.lastReadMessageId) return r.lastReadMessageId === lastMine.id || r.at >= lastMine.createdAt;
        return r.at >= lastMine.createdAt;
      })
    : [];

  return (
    <div className="app" data-platform={adapter.platform} data-user={user.id} data-state={state}>
      <div className="topbar">
        <span className="who">
          {user.name} <span className="status">({user.role}, writes {user.lang})</span>
        </span>
        <span className="status" data-testid="conn-state">
          {adapter.platform} · {state}
        </span>
      </div>
      {error && <div className="error" data-testid="error">{error}</div>}
      <div className="chat">
        <div className="messages" ref={listRef} data-testid="messages">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`msg ${m.senderId === user.id ? 'mine' : ''} ${m.kind === 'system' ? 'system' : ''} ${m.moderated ? 'moderated' : ''}`}
              data-testid="message"
              data-message-id={m.id}
              data-kind={m.kind}
              data-sender={m.senderId}
            >
              {m.kind === 'order_card' && m.card && <OrderCardView card={m.card} />}
              {m.kind === 'attachment' && m.attachmentUrl && <img className="attachment" src={m.attachmentUrl} alt={m.attachmentName ?? 'attachment'} data-testid="attachment" />}
              {(m.kind === 'text' || m.kind === 'system') && <span data-testid="text">{m.text}</span>}
              <span className="meta">
                {USERS[m.senderId as UserId]?.name ?? m.senderId}
                {m.originalText && m.text !== m.originalText ? ' · translated' : ''}
                {m.moderated ? ' · moderated' : ''}
              </span>
            </div>
          ))}
        </div>
        <div className="typing" data-testid="typing">
          {typingNames.length ? `${typingNames.join(', ')} is typing…` : ''}
          {readBy.length ? ` Read by ${readBy.map((id) => USERS[id as UserId]?.name ?? id).join(', ')}` : ''}
        </div>
        <div className="composer">
          <input
            type="text"
            data-testid="composer"
            placeholder={user.lang === 'es' ? 'Escribe un mensaje…' : 'Write a message…'}
            value={draft}
            onChange={(e) => onDraft(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            disabled={state !== 'ready'}
          />
          <label>
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={pickAttachment} data-testid="file-input" />
            <button type="button" onClick={(e) => (e.currentTarget.previousElementSibling as HTMLInputElement).click()} disabled={state !== 'ready'}>
              📎
            </button>
          </label>
          <button className="primary" onClick={send} disabled={state !== 'ready'} data-testid="send">
            Send
          </button>
        </div>
        <div className="toolbar">
          {state !== 'ready' && state !== 'connecting' && (
            <button onClick={() => hooks.current?.connect()} data-testid="connect">
              Connect
            </button>
          )}
          <button onClick={sendCard} disabled={state !== 'ready'} data-testid="send-card">
            Send order card
          </button>
          <button onClick={() => adapter.markAsRead()} disabled={state !== 'ready'} data-testid="mark-read">
            Mark read
          </button>
          <button onClick={() => hooks.current?.addSupportAgent()} disabled={state !== 'ready'} data-testid="get-help">
            Get help
          </button>
          <button onClick={() => adapter.reportUser(others[0] as UserId, 'Asked to pay off-platform')} disabled={state !== 'ready' || !others.length} data-testid="report">
            Report {others[0] ? USERS[others[0] as UserId]?.name : ''}
          </button>
          <span className="members" data-testid="members">
            Members: {(channel?.memberIds ?? []).join(', ') || '—'}
          </span>
          {user.role === 'seller' && (
            <span>
              Order:{' '}
              {(['placed', 'paid', 'shipped', 'delivered'] as const).map((s) => (
                <button key={s} onClick={() => changeStatus(s)} disabled={state !== 'ready'} data-testid={`status-${s}`} style={{ marginLeft: 4, fontWeight: s === orderStatus ? 700 : 400 }}>
                  {s}
                </button>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
