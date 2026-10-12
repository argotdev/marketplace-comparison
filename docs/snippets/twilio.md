# twilio: send the order card

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

## twilio: @twilio/conversations@3.0.1, 11 lines

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
