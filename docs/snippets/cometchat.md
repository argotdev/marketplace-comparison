# cometchat: send the order card

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

## cometchat: @cometchat/calls-sdk-javascript@5.0.6, @cometchat/chat-sdk-javascript@4.2.0, @cometchat/chat-uikit-react@7.2.3, dompurify@3.4.16, 8 lines

```ts
async sendOrderCard(card: OrderCard) {
  // CometChat's custom message: a type string plus any JSON in customData.
  const message = new CometChat.CustomMessage(guid, CometChat.RECEIVER_TYPE.GROUP, 'order_card', { card });
  message.setConversationText(`Order ${card.orderId}: ${card.listingTitle}`);
  message.shouldUpdateConversation(true);
  const sent = await CometChat.sendCustomMessage(message);
  echo(sent);
  return { messageId: String(sent.getId()) };
},
```
