// Ably: ably-js Realtime + @ably/chat ChatClient; rooms.get + attach + send + subscribe.
import * as Ably from 'ably';
import { ChatClient } from '@ably/chat';

export async function run(tokenRequest: Ably.TokenRequest, clientId: string, roomName: string) {
  const realtime = new Ably.Realtime({ clientId, authCallback: (_p, cb) => cb(null, tokenRequest) });
  const chat = new ChatClient(realtime);
  const room = await chat.rooms.get(roomName);
  await room.attach();
  room.messages.subscribe((ev) => console.log(ev.message.serial));
  await room.messages.send({ text: 'hola' });
}
