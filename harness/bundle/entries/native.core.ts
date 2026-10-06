// Native build: browser WebSocket API only; the "SDK" is our own adapter, so this measures the adapter itself.
import { createAdapter } from '@mkt/adapter-native';
import { USERS, type ChatMessage, type Order } from '@mkt/shared';

export async function run(order: Order, token: string, wsUrl: string) {
  const chat = createAdapter(USERS.buyer_ana);
  await chat.connect({ token, extra: { wsUrl, httpUrl: '' } });
  await chat.openOrderChannel(order);
  chat.onMessage((m: ChatMessage) => console.log(m.text));
  await chat.sendText('hola');
}
