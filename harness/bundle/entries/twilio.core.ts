// Twilio Conversations (classic): @twilio/conversations Client + getConversationByUniqueName + sendMessage + messageAdded.
import { Client } from '@twilio/conversations';

export async function run(token: string, uniqueName: string) {
  const client = new Client(token);
  const conversation = await client.getConversationByUniqueName(uniqueName);
  conversation.on('messageAdded', (m) => console.log(m.sid));
  await conversation.sendMessage('hola');
}
