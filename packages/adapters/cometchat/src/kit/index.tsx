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

// One init+login per user, shared across StrictMode's double mount (a second concurrent login makes the SDK
// answer "Please wait until the previous login request ends").
const loginOnce = new Map<string, Promise<void>>();
function ensureLoggedIn(userId: string): Promise<void> {
  let p = loginOnce.get(userId);
  if (!p) {
    p = (async () => {
      const t = await serverApi.token('cometchat', userId as UserId);
      const settings = new UIKitSettingsBuilder().setAppId(t.extra?.appId ?? '').setRegion(t.extra?.region ?? 'us').subscribePresenceForAllUsers().build();
      await CometChatUIKit.init(settings);
      const current = CometChatUIKit.getLoggedInUser()?.getUid();
      if (current && current !== userId) await CometChatUIKit.logout(); // the SDK keeps one session per origin
      if (current !== userId) await CometChatUIKit.loginWithAuthToken(t.token);
    })();
    loginOnce.set(userId, p);
    p.catch(() => loginOnce.delete(userId));
  }
  return p;
}

export default function CometChatKit({ userId, orderId }: { userId: string; orderId: string }) {
  const [group, setGroup] = useState<CometChat.Group | null>(null);
  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      try {
        await ensureLoggedIn(userId);
        setGroup(await CometChat.getGroup(channelIdForOrder(orderId)));
      } catch (e) {
        setError((e as Error).message);
      }
    })();
  }, [userId, orderId]);

  if (error) return <div className="error">{error}</div>;
  if (!group) return <div>Loading CometChat UI Kit…</div>;
  return (
    // The kit's components fill their parent (height: 100%); the list needs a sized flex child or it collapses to 0 px.
    <div className="kit-frame" data-kit="cometchat" style={{ display: 'flex', flexDirection: 'column' }}>
      <CometChatProvider plugins={[OrderCardPlugin]}>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <CometChatMessageList group={group} />
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <CometChatMessageComposer group={group} />
        </div>
      </CometChatProvider>
    </div>
  );
}
