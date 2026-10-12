# native: send the order card

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

## native: no SDK (native build), 8 lines

```ts
async sendOrderCard(card: OrderCard) {
  // Our own protocol: a message of kind "order_card" whose data holds the card.
  const clientId = `c${Date.now()}_${++seqCounter}`;
  const sent = await request<WireMessage>(
    { type: 'send', channelId, kind: ORDER_CARD_TYPE, data: { card }, clientId },
    `sent:${clientId}`,
  );
  return { messageId: sent.id };
},
```
