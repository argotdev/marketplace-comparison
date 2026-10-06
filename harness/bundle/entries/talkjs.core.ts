// TalkJS: @talkjs/core headless Data API (session, conversation, send, subscribe). The Components SDK is in the kit entry.
import { getTalkSession } from '@talkjs/core';

export async function run(appId: string, userId: string, token: string, conversationId: string) {
  const session = getTalkSession({ appId, userId, token });
  const conversation = session.conversation(conversationId);
  await conversation.createIfNotExists();
  conversation.subscribeMessages((messages) => console.log(messages?.length));
  await conversation.send('hola');
}
