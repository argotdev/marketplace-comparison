# ably: send the order card

Source: `packages/adapters/ably/src/index.ts`. SDK: @ably/chat@1.4.0, @ably/chat-react-ui-kit@0.3.0, ably@2.29.0. 8 lines excluding comments.

```ts
async sendOrderCard(card: OrderCard) {
  // Ably Chat: `metadata` is the documented home for structured data; headers are for routing, not content.
  const message = await room!.messages.send({
    text: `Order ${card.orderId}: ${card.listingTitle}`,
    metadata: { type: 'order_card', card: { ...card } },
    headers: { orderId: card.orderId },
  });
  return { messageId: message.serial };
},
```
