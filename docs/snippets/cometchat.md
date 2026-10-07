# cometchat: send the order card

Source: `packages/adapters/cometchat/src/index.ts`. SDK: @cometchat/calls-sdk-javascript@5.0.6, @cometchat/chat-sdk-javascript@4.2.0, @cometchat/chat-uikit-react@7.2.3, dompurify@3.4.16. 8 lines excluding comments.

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
