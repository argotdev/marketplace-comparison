# stream: send the order card

Source: `packages/adapters/stream/src/index.ts`. SDK: @stream-io/feeds-client@2.9.0, @stream-io/feeds-react-sdk@1.0.23, stream-chat@9.54.0, stream-chat-react@14.12.2. 7 lines excluding comments.

```ts
async sendOrderCard(card: OrderCard) {
  // Stream's custom message is a custom attachment type; the kit renders it through the Attachment override.
  const { message } = await channel!.sendMessage({
    text: `Order ${card.orderId}: ${card.listingTitle}`,
    attachments: [{ type: 'order_card', card }],
  });
  return { messageId: message.id };
},
```
