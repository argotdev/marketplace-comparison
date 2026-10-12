/**
 * Ably Chat React UI Kit (@ably/chat-react-ui-kit 0.3.0, marked experimental by Ably). Its docs say there is
 * "no render prop, slot system, or custom renderer prop available for message display", so the order card
 * cannot be a custom message here. The only customisation slot is ChatWindow's customHeaderContent, which is
 * where this view puts the latest card: a workaround, not a custom message type.
 * Docs: https://ably.com/docs/chat/react-ui-kit/components
 */
import { useEffect, useState } from 'react';
import * as Ably from 'ably';
import { ChatClient, type Message } from '@ably/chat';
import { ChatClientProvider, ChatRoomProvider } from '@ably/chat/react';
import { AvatarProvider, ChatSettingsProvider, ChatWindow, ThemeProvider } from '@ably/chat-react-ui-kit';
import '@ably/chat-react-ui-kit/dist/style.css';
import { serverApi, type OrderCard as OrderCardData, type UserId } from '@mkt/shared';
import { OrderCard } from './OrderCard.tsx';
import { roomNameForOrder } from '../index.ts';

export default function AblyKit({ userId, orderId }: { userId: string; orderId: string }) {
  const [client, setClient] = useState<ChatClient | null>(null);
  const [card, setCard] = useState<OrderCardData | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let realtime: Ably.Realtime | null = null;
    (async () => {
      try {
        const t = await serverApi.token('ably', userId as UserId);
        realtime = new Ably.Realtime({ clientId: userId, authCallback: (_p, cb) => serverApi.token('ably', userId as UserId).then((x) => cb(null, JSON.parse(x.token) as Ably.TokenRequest)).catch((e) => cb(String(e), null)) });
        void t;
        const chat = new ChatClient(realtime);
        const room = await chat.rooms.get(roomNameForOrder(orderId));
        await room.attach();
        const pick = (m: Message) => {
          const mt = m.metadata as { type?: string; card?: OrderCardData };
          if (mt?.type === 'order_card' && mt.card) setCard(mt.card);
        };
        const history = await room.messages.history({ limit: 50 });
        for (const m of history.items) pick(m);
        room.messages.subscribe((ev) => pick(ev.message));
        setClient(chat);
      } catch (e) {
        setError((e as Error).message);
      }
    })();
    return () => realtime?.close();
  }, [userId, orderId]);

  if (error) return <div className="error">{error}</div>;
  if (!client) return <div>Loading Ably UI kit…</div>;
  return (
    <div className="kit-frame" data-kit="ably">
      <ChatClientProvider client={client}>
        <ThemeProvider>
          <AvatarProvider>
            <ChatSettingsProvider>
              <ChatRoomProvider name={roomNameForOrder(orderId)}>
                <ChatWindow roomName={roomNameForOrder(orderId)} customHeaderContent={card ? <OrderCard card={card} /> : <span>Order {orderId}</span>} />
              </ChatRoomProvider>
            </ChatSettingsProvider>
          </AvatarProvider>
        </ThemeProvider>
      </ChatClientProvider>
    </div>
  );
}
