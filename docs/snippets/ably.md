# ably: send the order card

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

## ably: @ably/chat@1.4.0, @ably/chat-react-ui-kit@0.3.0, ably@2.29.0, 8 lines

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
