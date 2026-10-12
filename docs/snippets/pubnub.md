# pubnub: send the order card

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

## pubnub: @pubnub/chat@1.0.4, pubnub@13.0.3, 7 lines

```ts
async sendOrderCard(card: OrderCard) {
  // PubNub Chat SDK: a text message whose `meta` carries the structured card.
  const result = await channel!.sendText(`Order ${card.orderId}: ${card.listingTitle}`, {
    meta: { type: 'order_card', card },
    storeInHistory: true,
  });
  return { messageId: String(result.timetoken) };
},
```
