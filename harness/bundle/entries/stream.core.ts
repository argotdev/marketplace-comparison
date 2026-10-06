// Stream: stream-chat JS client, connect + watch + send + message.new.
import { StreamChat } from 'stream-chat';

export async function run(apiKey: string, userId: string, token: string, channelId: string) {
  const client = StreamChat.getInstance(apiKey);
  await client.connectUser({ id: userId }, token);
  const channel = client.channel('order', channelId);
  await channel.watch();
  channel.on('message.new', (e) => console.log(e.message?.id));
  await channel.sendMessage({ text: 'hola' });
}
