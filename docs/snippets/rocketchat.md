# rocketchat: send the order card

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

## rocketchat: no SDK (native build), 11 lines

```ts
async sendOrderCard(card: OrderCard) {
  // Rocket.Chat: customFields carry the structured card (schema-validated); the attachment is what
  // Rocket.Chat's own UI renders, since it has no custom message components.
  const { message } = await rest<{ message: RcMessage }>('POST', 'chat.sendMessage', {
    message: {
      rid,
      msg: `Order ${card.orderId}: ${card.listingTitle}`,
      customFields: { type: 'order_card', card: JSON.stringify(card), orderId: card.orderId },
      // Rocket.Chat rejects relative hrefs in attachments, so the image URL must be absolute.
      attachments: [{ title: card.listingTitle, text: `$${card.priceUsd} USD · ${card.status}`, image_url: new URL(card.imageUrl, window.location.origin).href }],
    },
  });
  return { messageId: message._id };
},
```
