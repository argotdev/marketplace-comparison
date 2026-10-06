import express from 'express';
import cors from 'cors';
import { env } from './env.ts';
import { api } from './routes.ts';
import { orders } from './orders.ts';
import { vendor } from './vendors/index.ts';
import { LISTING, orderCardFrom, type Order } from '@mkt/shared';
import type { CardMessageRef } from './orders.ts';
import './vendors/all.ts';

const app = express();
app.use(cors());
// Keep the raw body for webhook signature checks; parse JSON and form bodies for everything.
app.use(
  express.json({
    limit: '2mb',
    verify: (req, _res, buf) => {
      (req as express.Request & { rawBody?: Buffer }).rawBody = buf;
    },
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use('/api', api);

// Order service -> live card update on every platform that registered a card message.
orders.on('status', async (order: Order, refs: CardMessageRef[]) => {
  const card = orderCardFrom(order, LISTING);
  for (const ref of refs) {
    const v = vendor(ref.platform);
    if (!v) continue;
    try {
      await v.updateOrderCard(ref, card);
      console.log(`[orders] ${order.id} -> ${order.status}: updated card on ${ref.platform} (${ref.messageId})`);
    } catch (e) {
      console.error(`[orders] failed to update card on ${ref.platform}:`, (e as Error).message);
    }
  }
});

app.listen(env.PORT, () => {
  console.log(`[server] listening on http://localhost:${env.PORT}  public=${env.PUBLIC_URL}`);
});
