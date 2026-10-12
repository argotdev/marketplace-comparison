# talkjs: send the order card

## Sendbird (baseline): @sendbird/chat@4.22.13, @sendbird/uikit-react@3.20.0, 14 lines

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
  echo(message);
  return { messageId: String(message.messageId) };
},
```

## talkjs: @talkjs/core@1.12.0, @talkjs/react-components@0.3.9, 9 lines

```ts
async sendOrderCard(card: OrderCard) {
  // TalkJS custom data is string-only, so the card is a JSON string under a `type` discriminator.
  const conversation = requireConv();
  const message = await conversation.send({
    text: `Order ${card.orderId}: ${card.listingTitle}`,
    custom: { type: 'order_card', card: JSON.stringify(card) },
  });
  await conversation.markAsRead().catch(() => {});
  return { messageId: message.id };
},
```
