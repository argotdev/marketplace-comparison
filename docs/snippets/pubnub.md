# pubnub: send the order card

Source: `packages/adapters/pubnub/src/index.ts`. SDK: @pubnub/chat@1.0.4, pubnub@13.0.3. 7 lines excluding comments.

```ts
async sendOrderCard(card: OrderCard) {
  // PubNub Chat SDK: a text message whose `meta` carries the structured card.
  const result = await channel!.sendText(`Order ${card.orderId}: ${card.listingTitle}`, {
    meta: { type: 'order_card', card },
    storeInHistory: true,
  });
  return { messageId: String(result.timetoken) };
},
```
