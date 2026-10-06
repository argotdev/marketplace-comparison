# talkjs: send the order card

Source: `packages/adapters/talkjs/src/index.ts`. SDK: @talkjs/core@1.12.0, @talkjs/react-components@0.3.9. 8 lines excluding comments.

```ts
async sendOrderCard(card: OrderCard) {
  // TalkJS custom data is string-only, so the card is a JSON string under a `type` discriminator.
  const conversation = requireConv();
  const message = await conversation.send({
    text: `Order ${card.orderId}: ${card.listingTitle}`,
    custom: { type: 'order_card', card: JSON.stringify(card) },
  });
  return { messageId: message.id };
},
```
