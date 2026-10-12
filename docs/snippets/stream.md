# stream: send the order card

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

## stream: @stream-io/feeds-client@2.9.0, @stream-io/feeds-react-sdk@1.0.23, stream-chat@9.54.0, stream-chat-react@14.12.2, 7 lines

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
