/**
 * stream-chat-react v14 kit view. The order card is a custom attachment type ("order_card");
 * it is rendered by overriding the `Attachment` component through <WithComponents>: our component
 * handles that type and delegates every other attachment to the kit's default <Attachment>.
 * Docs: https://getstream.io/chat/docs/sdk/react/components/message-components/attachment/
 */
import { useEffect, useState } from 'react';
import { StreamChat, type Channel as StreamChannel } from 'stream-chat';
import { Chat, Channel, Window, MessageList, MessageComposer, Attachment, WithComponents, type AttachmentProps } from 'stream-chat-react';
import '../stream-types.ts';
import 'stream-chat-react/dist/css/index.css';
import { channelIdForOrder, ORDER_CARD_TYPE, serverApi, USERS, type OrderCard as OrderCardData, type UserId } from '@mkt/shared';
import { OrderCard } from './OrderCard.tsx';
import { CHANNEL_TYPE } from '../index.ts';

function OrderCardAttachment(props: AttachmentProps) {
  const card = props.attachments.find((a) => 'type' in a && a.type === ORDER_CARD_TYPE) as { card?: OrderCardData } | undefined;
  if (card?.card) return <OrderCard card={card.card} />;
  return <Attachment {...props} />;
}

export default function StreamKit({ userId, orderId }: { userId: string; orderId: string }) {
  const user = USERS[userId as UserId];
  const [client, setClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<StreamChannel | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    let c: StreamChat | null = null;
    (async () => {
      try {
        const t = await serverApi.token('stream', userId as UserId);
        c = StreamChat.getInstance(t.extra?.apiKey ?? '');
        await c.connectUser({ id: userId, name: user?.name, language: user?.lang }, t.token);
        const ch = c.channel(CHANNEL_TYPE, channelIdForOrder(orderId));
        await ch.watch();
        setClient(c);
        setChannel(ch);
      } catch (e) {
        setError((e as Error).message);
      }
    })();
    return () => {
      c?.disconnectUser();
    };
  }, [userId, orderId, user]);

  if (error) return <div className="error">{error}</div>;
  if (!client || !channel) return <div>Loading Stream kit…</div>;
  return (
    <div className="kit-frame" data-kit="stream">
      <Chat client={client}>
        <WithComponents overrides={{ Attachment: OrderCardAttachment }}>
          <Channel channel={channel}>
            <Window>
              <MessageList />
              <MessageComposer />
            </Window>
          </Channel>
        </WithComponents>
      </Chat>
    </div>
  );
}
