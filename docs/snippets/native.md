# native: send the order card

Source: `packages/adapters/native/src/index.ts`. SDK: none (native build). 8 lines excluding comments.

```ts
async sendOrderCard(card: OrderCard) {
  // Our own protocol: a message of kind "order_card" whose data holds the card.
  const clientId = `c${Date.now()}_${++seqCounter}`;
  const sent = await request<WireMessage>(
    { type: 'send', channelId, kind: ORDER_CARD_TYPE, data: { card }, clientId },
    `sent:${clientId}`,
  );
  return { messageId: sent.id };
},
```
