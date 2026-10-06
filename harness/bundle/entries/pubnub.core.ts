// PubNub: @pubnub/chat (Chat SDK) over pubnub core; init + getChannel + sendText + onMessageReceived.
import { Chat } from '@pubnub/chat';

export async function run(publishKey: string, subscribeKey: string, userId: string, authKey: string, channelId: string) {
  const chat = await Chat.init({ publishKey, subscribeKey, userId, authKey });
  const channel = await chat.getChannel(channelId);
  channel!.onMessageReceived((m) => console.log(m.timetoken));
  await channel!.sendText('hola');
}
