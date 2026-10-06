/**
 * CometChat UI Kit for React v7 kit view. Custom messages are rendered through the plugin system:
 * a CometChatMessagePlugin declares the (category, type) pairs it handles and renders the bubble.
 * Docs: https://www.cometchat.com/docs/ui-kit/react/plugins/custom-plugin
 */
import { useEffect, useState } from 'react';
import { CometChat } from '@cometchat/chat-sdk-javascript';
import { CometChatMessageComposer, CometChatMessageList, CometChatProvider, CometChatUIKit, UIKitSettingsBuilder, type CometChatMessagePlugin } from '@cometchat/chat-uikit-react';
import { channelIdForOrder, ORDER_CARD_TYPE, serverApi, type OrderCard as OrderCardData, type UserId } from '@mkt/shared';
import { OrderCard } from './OrderCard.tsx';

const OrderCardPlugin: CometChatMessagePlugin = {
  id: 'order-card',
  messageTypes: [ORDER_CARD_TYPE],
  messageCategories: [CometChat.CATEGORY_CUSTOM],
  renderBubble(message) {
    const m = message as CometChat.CustomMessage;
    const data = (m.getCustomData() ?? {}) as { card?: OrderCardData };
    const meta = (m.getMetadata() ?? {}) as { card?: OrderCardData };
    const card = meta.card ?? data.card;
    return card ? <OrderCard card={card} /> : <span>Order card</span>;
  },
  getOptions: () => [],
  getLastMessagePreview: () => 'Order card',
};

export default function CometChatKit({ userId, orderId }: { userId: string; orderId: string }) {
  const [group, setGroup] = useState<CometChat.Group | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        const t = await serverApi.token('cometchat', userId as UserId);
        const settings = new UIKitSettingsBuilder().setAppId(t.extra?.appId ?? '').setRegion(t.extra?.region ?? 'us').subscribePresenceForAllUsers().build();
        await CometChatUIKit.init(settings);
        if (CometChatUIKit.getLoggedInUser()?.getUid() !== userId) await CometChatUIKit.loginWithAuthToken(t.token);
        setGroup(await CometChat.getGroup(channelIdForOrder(orderId)));
      } catch (e) {
        setError((e as Error).message);
      }
    })();
  }, [userId, orderId]);

  if (error) return <div className="error">{error}</div>;
  if (!group) return <div>Loading CometChat UI Kit…</div>;
  return (
    <div className="kit-frame" data-kit="cometchat" style={{ display: 'flex', flexDirection: 'column' }}>
      <CometChatProvider plugins={[OrderCardPlugin]}>
        <CometChatMessageList group={group} />
        <CometChatMessageComposer group={group} />
      </CometChatProvider>
    </div>
  );
}
