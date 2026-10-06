# sendbird: send the order card

Source: `packages/adapters/sendbird/src/index.ts`. SDK: @sendbird/chat@4.22.13, @sendbird/uikit-react@3.20.0. 13 lines excluding comments.

```ts
async sendOrderCard(card: OrderCard) {
  // A user message with a customType and a JSON string in `data` is Sendbird's custom message.
  const message = await new Promise<UserMessage>((resolve, reject) => {
    channel!
      .sendUserMessage({
        message: `Order ${card.orderId}: ${card.listingTitle}`,
        customType: 'order_card',
        data: JSON.stringify(card),
      })
      .onSucceeded((m) => resolve(m as UserMessage))
      .onFailed((err) => reject(err));
  });
  return { messageId: String(message.messageId) };
},
```
