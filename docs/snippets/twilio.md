# twilio: send the order card

Source: `packages/adapters/twilio/src/index.ts`. SDK: @twilio/conversations@3.0.1. 11 lines excluding comments.

```ts
async sendOrderCard(card: OrderCard) {
  // Twilio has no custom message type; structured data goes in the message's JSON attributes (4 KB limit).
  const conversation = requireConv();
  const index = await conversation
    .prepareMessage()
    .setBody(`Order ${card.orderId}: ${card.listingTitle}`)
    .setAttributes({ type: 'order_card', card: { ...card } })
    .build()
    .send();
  const page = await conversation.getMessages(1, index ?? undefined, 'backwards');
  return { messageId: page.items[0].sid };
},
```
