import { Router, type Request, type Response } from 'express';
import {
  isPlatform,
  LISTING,
  MODERATION_FIXTURE,
  ORDER_STATUSES,
  orderCardFrom,
  USERS,
  type Lang,
  type OrderStatus,
  type UserId,
} from '@mkt/shared';
import { orders } from './orders.ts';
import { sendOfflineEmail, sentEmails } from './email.ts';
import { presence } from './presence.ts';
import { translate, translationProvider } from './translate.ts';
import { moderationStore } from './moderation.ts';
import { vendor, allVendors } from './vendors/index.ts';
import { env } from './env.ts';

export const api = Router();

function platformParam(req: Request, res: Response) {
  const p = String(req.params.platform);
  if (!isPlatform(p)) {
    res.status(404).json({ error: `unknown platform ${p}` });
    return null;
  }
  const v = vendor(p);
  if (!v) {
    res.status(501).json({ error: `no server vendor for ${p}` });
    return null;
  }
  return v;
}

api.get('/health', (_req, res) => res.json({ ok: true, now: new Date().toISOString() }));

// ---- listing & orders -------------------------------------------------------
api.get('/listing', (_req, res) => res.json(LISTING));
api.get('/users', (_req, res) => res.json(USERS));

api.get('/orders/:id', (req, res) => res.json(orders.getOrCreate(String(req.params.id))));

api.post('/orders/:id/status', (req, res) => {
  const status = req.body?.status as OrderStatus;
  if (!ORDER_STATUSES.includes(status)) return res.status(400).json({ error: 'bad status' });
  const o = orders.setStatus(String(req.params.id), status);
  res.json(o);
});

api.post('/orders/:id/reset', (req, res) => res.json(orders.reset(String(req.params.id))));

/** Clients call this after sending the order card so the order service can update it in place. */
api.post('/orders/:id/card-message', (req, res) => {
  const { platform, channelId, messageId, extra } = req.body ?? {};
  if (!isPlatform(platform) || !channelId || !messageId) return res.status(400).json({ error: 'platform, channelId, messageId required' });
  orders.registerCardMessage(String(req.params.id), { platform, channelId: String(channelId), messageId: String(messageId), extra });
  res.json({ ok: true, refs: orders.cardRefsFor(String(req.params.id)) });
});
api.get('/orders/:id/card-message', (req, res) => res.json(orders.cardRefsFor(String(req.params.id))));

// ---- vendors ---------------------------------------------------------------
api.get('/vendors', (_req, res) =>
  res.json(
    allVendors().map((v) => ({
      platform: v.platform,
      configured: v.configured(),
      missingEnv: v.requiredEnv.filter((k) => !process.env[k]),
      ...v.describe(),
    })),
  ),
);

api.post('/vendors/:platform/setup', async (req, res) => {
  const v = platformParam(req, res);
  if (!v) return;
  if (!v.configured()) return res.status(412).json({ error: 'not configured', missingEnv: v.requiredEnv.filter((k) => !process.env[k]) });
  try {
    res.json(await v.setup());
  } catch (e) {
    res.status(500).json({ error: String((e as Error).message ?? e) });
  }
});

api.post('/vendors/:platform/token', async (req, res) => {
  const v = platformParam(req, res);
  if (!v) return;
  const userId = req.body?.userId as UserId;
  const user = USERS[userId];
  if (!user) return res.status(400).json({ error: 'unknown userId' });
  if (!v.configured()) return res.status(412).json({ error: 'not configured', missingEnv: v.requiredEnv.filter((k) => !process.env[k]) });
  try {
    res.json(await v.issueToken(user));
  } catch (e) {
    res.status(500).json({ error: String((e as Error).message ?? e) });
  }
});

api.post('/vendors/:platform/add-member', async (req, res) => {
  const v = platformParam(req, res);
  if (!v) return;
  if (!v.addMember) return res.status(501).json({ error: 'addMember not implemented server-side' });
  const { channelId, userId } = req.body ?? {};
  if (!USERS[userId as UserId]) return res.status(400).json({ error: 'unknown userId' });
  try {
    await v.addMember(String(channelId), userId);
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ error: String((e as Error).message ?? e) });
  }
});

/** API round-trip benchmark target. Returns how long the vendor call itself took. */
api.get('/vendors/:platform/order-channel/:orderId', async (req, res) => {
  const v = platformParam(req, res);
  if (!v) return;
  const t0 = process.hrtime.bigint();
  try {
    const data = await v.fetchOrderChannel(String(req.params.orderId));
    const ms = Number(process.hrtime.bigint() - t0) / 1e6;
    res.json({ vendorMs: ms, data });
  } catch (e) {
    const ms = Number(process.hrtime.bigint() - t0) / 1e6;
    res.status(502).json({ vendorMs: ms, error: String((e as Error).message ?? e) });
  }
});

// ---- webhooks --------------------------------------------------------------
api.all('/webhooks/:platform', async (req, res) => {
  const p = String(req.params.platform);
  if (!isPlatform(p)) return res.status(404).end();
  const v = vendor(p);
  moderationStore.logWebhook(p, String(req.headers['x-event'] ?? req.body?.category ?? req.body?.type ?? req.body?.EventType ?? 'unknown'), {
    headers: req.headers,
    body: req.body,
  });
  if (!v?.handleWebhook) return res.status(200).json({ received: true });
  try {
    const out = await v.handleWebhook(req);
    if (out.reply) {
      for (const [k, val] of Object.entries(out.reply.headers ?? {})) res.setHeader(k, val);
      return res.status(out.reply.status).send(out.reply.body ?? '');
    }
    res.json({ received: true, events: out.events });
  } catch (e) {
    console.error(`[webhook:${p}]`, e);
    res.status(500).json({ error: String((e as Error).message ?? e) });
  }
});
api.get('/webhooks-log/:platform', (req, res) => res.json(moderationStore.webhooks(String(req.params.platform))));

// ---- moderation (built fallback + report queue) ---------------------------
api.get('/moderation/fixture', (_req, res) => res.json(MODERATION_FIXTURE));

api.post('/moderation/check', (req, res) => {
  const { text, platform, senderId } = req.body ?? {};
  const r = moderationStore.check(String(text ?? ''));
  if (!r.allowed && platform) moderationStore.logBlocked(String(platform), String(text), r.matches, senderId);
  res.json(r);
});

api.post('/moderation/report', (req, res) => {
  const { platform, reporterId, targetId, reason } = req.body ?? {};
  if (!isPlatform(platform)) return res.status(400).json({ error: 'platform' });
  res.json(moderationStore.addReport({ platform, reporterId, targetId, reason: String(reason ?? ''), source: 'queue' }));
});

api.get('/moderation/reports/:platform', async (req, res) => {
  const p = String(req.params.platform);
  if (!isPlatform(p)) return res.status(404).end();
  const local = moderationStore.reports(p);
  const v = vendor(p);
  let remote: unknown[] = [];
  let remoteError: string | undefined;
  if (v?.listReports) {
    try {
      remote = await v.listReports();
    } catch (e) {
      remoteError = String((e as Error).message ?? e);
    }
  }
  res.json({ local, remote, remoteError, blocked: moderationStore.blocked(p) });
});

api.post('/moderation/reset/:platform', (req, res) => {
  moderationStore.reset(String(req.params.platform));
  res.json({ ok: true });
});

// ---- translation (built fallback) -----------------------------------------
api.get('/translate/status', (_req, res) => res.json({ provider: translationProvider() }));
api.post('/translate', async (req, res) => {
  const { text, from, targets } = req.body ?? {};
  try {
    res.json(await translate(String(text ?? ''), from as Lang, (targets ?? ['en', 'es']) as Lang[]));
  } catch (e) {
    res.status(502).json({ available: true, error: String((e as Error).message ?? e), translations: {} });
  }
});

// ---- presence & email fallback (built) -------------------------------------
api.post('/presence/heartbeat', (req, res) => {
  const { platform, userId } = req.body ?? {};
  presence.heartbeat(String(platform), String(userId));
  res.json({ ok: true });
});
api.post('/presence/offline', (req, res) => {
  const { platform, userId } = req.body ?? {};
  presence.offline(String(platform), String(userId));
  res.json({ ok: true });
});
api.get('/presence/:platform', (req, res) => res.json(presence.snapshot(String(req.params.platform))));

/**
 * Email fallback entry point. Vendors' webhook handlers call notifyOffline() directly; builds whose
 * vendor cannot reach this server (no webhook) post here from the sending client instead, and the
 * requirements matrix notes that shortcut.
 */
export async function notifyOffline(platform: string, channelId: string, fromUserId: string, toUserIds: UserId[], text: string) {
  const v = isPlatform(platform) ? vendor(platform) : undefined;
  const sent: UserId[] = [];
  for (const to of toUserIds) {
    if (to === fromUserId) continue;
    let online = v?.isOnline ? await v.isOnline(to) : undefined;
    if (online === undefined) online = presence.isOnline(platform, to);
    if (!online) {
      await sendOfflineEmail({ platform, channelId, fromUserId, toUserId: to, text });
      sent.push(to);
    }
  }
  return sent;
}

api.post('/notify/message', async (req, res) => {
  const { platform, channelId, fromUserId, toUserIds, text } = req.body ?? {};
  try {
    const sent = await notifyOffline(String(platform), String(channelId), String(fromUserId), toUserIds ?? [], String(text ?? ''));
    res.json({ sent });
  } catch (e) {
    res.status(500).json({ error: String((e as Error).message ?? e) });
  }
});
api.get('/notify/sent/:platform', (req, res) => res.json(sentEmails.filter((e) => e.platform === req.params.platform)));

api.get('/config', (_req, res) => res.json({ publicUrl: env.PUBLIC_URL, webUrl: env.WEB_URL, translationProvider: translationProvider() }));

// convenience for tests
api.get('/order-card/:id', (req, res) => res.json(orderCardFrom(orders.getOrCreate(String(req.params.id)), LISTING)));
