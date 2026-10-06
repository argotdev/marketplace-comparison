// Rocket.Chat: no installable npm client (the official ddp-client needs a yarn-only patch), so this is our own DDP + REST adapter code.
import { createAdapter } from '@mkt/adapter-rocketchat';
import { USERS, type Order } from '@mkt/shared';

export async function run(order: Order, token: string, userId: string) {
  const chat = createAdapter(USERS.buyer_ana);
  await chat.connect({ token, extra: { userId, url: 'http://localhost:3000' } });
  await chat.openOrderChannel(order);
  chat.onMessage((m) => console.log(m.text));
  await chat.sendText('hola');
}
