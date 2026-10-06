/**
 * Sendbird UIKit for React (@sendbird/uikit-react v3) kit view. The order card is rendered through
 * the kit's `renderMessage` customisation on <GroupChannel>: messages whose customType is
 * "order_card" get our card; everything else falls through to the kit's default message.
 * Docs: https://sendbird.com/docs/chat/uikit/v3/react/modules/group-channel
 */
import { useEffect, useState } from 'react';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';
import { Message } from '@sendbird/uikit-react/GroupChannel/components/Message';
import '@sendbird/uikit-react/dist/index.css';
import { channelIdForOrder, ORDER_CARD_TYPE, serverApi, USERS, type OrderCard as OrderCardData, type UserId } from '@mkt/shared';
import { OrderCard } from './OrderCard.tsx';

export default function SendbirdKit({ userId, orderId }: { userId: string; orderId: string }) {
  const user = USERS[userId as UserId];
  const [auth, setAuth] = useState<{ token: string; appId: string } | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    serverApi
      .token('sendbird', userId as UserId)
      .then((t) => setAuth({ token: t.token, appId: t.extra?.appId ?? '' }))
      .catch((e) => setError((e as Error).message));
  }, [userId]);

  if (error) return <div className="error">{error}</div>;
  if (!auth) return <div>Loading Sendbird UIKit…</div>;

  return (
    <div className="kit-frame" data-kit="sendbird">
      <SendbirdProvider appId={auth.appId} userId={userId} accessToken={auth.token} nickname={user?.name}>
        <GroupChannel
          channelUrl={channelIdForOrder(orderId)}
          renderMessage={(props) => {
            const m = props.message;
            if (m.isUserMessage() && m.customType === ORDER_CARD_TYPE) {
              return <OrderCard card={JSON.parse(m.data || '{}') as OrderCardData} />;
            }
            return <Message {...props} />;
          }}
        />
      </SendbirdProvider>
    </div>
  );
}
