/**
 * TalkJS Components SDK kit view (@talkjs/react-components <Chatbox>). The order card is rendered by
 * overriding the theme's `Message` component: messages with custom.type === "order_card" get our card,
 * everything else is handed to the default theme's Message. Docs:
 * https://talkjs.com/docs/UI_Components/React/Chatbox/ and https://talkjs.com/docs/UI_Components/Theme/Overview/?framework=react
 */
import { useEffect, useMemo, useState } from 'react';
import { Chatbox, defaultTheme, type MessageProps } from '@talkjs/react-components';
import '@talkjs/react-components/default.css';
import { channelIdForOrder, ORDER_CARD_TYPE, serverApi, type OrderCard as OrderCardData, type UserId } from '@mkt/shared';
import { OrderCard } from './OrderCard.tsx';

function OrderCardMessage(props: MessageProps) {
  const { custom } = props.message;
  if (custom.type === ORDER_CARD_TYPE && custom.card) return <OrderCard card={JSON.parse(custom.card) as OrderCardData} />;
  const Default = defaultTheme.Message;
  return <Default {...props} />;
}

export default function TalkjsKit({ userId, orderId }: { userId: string; orderId: string }) {
  const [auth, setAuth] = useState<{ token: string; appId: string } | null>(null);
  const [error, setError] = useState<string>();
  const theme = useMemo(() => ({ Message: OrderCardMessage }), []);

  useEffect(() => {
    serverApi
      .token('talkjs', userId as UserId)
      .then((t) => setAuth({ token: t.token, appId: t.extra?.appId ?? '' }))
      .catch((e) => setError((e as Error).message));
  }, [userId]);

  if (error) return <div className="error">{error}</div>;
  if (!auth) return <div>Loading TalkJS…</div>;
  return (
    <div className="kit-frame" data-kit="talkjs">
      <Chatbox appId={auth.appId} userId={userId} token={auth.token} conversationId={channelIdForOrder(orderId)} theme={theme} />
    </div>
  );
}
