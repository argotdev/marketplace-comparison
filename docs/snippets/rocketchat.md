# rocketchat: send the order card

Source: `packages/adapters/rocketchat/src/index.ts`. SDK: none (native build). 11 lines excluding comments.

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
