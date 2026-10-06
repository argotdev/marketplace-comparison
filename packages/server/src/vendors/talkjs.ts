/**
 * TalkJS server half: HS256 user JWTs (jose) and the REST API at https://api.talkjs.com/v1/{appId}.
 * TalkJS sends email itself (Postmark), so requirement 4 is observed through its notification.* webhooks.
 * Docs: https://talkjs.com/docs/Features/Security/Authentication/ , https://talkjs.com/docs/REST_API/ , https://talkjs.com/docs/Webhooks/
 */
import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Request } from 'express';
import { SignJWT } from 'jose';
import { channelIdForOrder, USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';

const REQUIRED = ['TALKJS_APP_ID', 'TALKJS_SECRET_KEY'];
const appId = () => env.get('TALKJS_APP_ID');
const secret = () => env.get('TALKJS_SECRET_KEY');
const base = () => `https://api.talkjs.com/v1/${appId()}`;

async function api<T = unknown>(method: string, path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${base()}${path}`, {
    method,
    headers: { Authorization: `Bearer ${secret()}`, 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`talkjs ${method} ${path} -> ${res.status}: ${text}`);
  return (text ? JSON.parse(text) : {}) as T;
}

async function userToken(userId: string, ttlSeconds = 3600): Promise<string> {
  return new SignJWT({ tokenType: 'user' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuer(appId())
    .setSubject(userId)
    .setIssuedAt()
    .setExpirationTime(`${ttlSeconds}s`)
    .sign(new TextEncoder().encode(secret()));
}

export const talkjsVendor: ServerVendor = {
  platform: 'talkjs',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    for (const u of Object.values(USERS)) {
      await api('PUT', `/users/${encodeURIComponent(u.id)}`, { name: u.name, email: [u.email], role: u.role, locale: u.lang, custom: { lang: u.lang } });
    }
    notes.push('users upserted with roles buyer/seller/support (contact masking is configured per role in the dashboard)');
    notes.push('webhooks are configured in the dashboard (Settings → Webhooks); REST cannot create them');
    notes.push(env.PUBLIC_URL.startsWith('https://') ? `webhook URL to paste: ${env.PUBLIC_URL}/api/webhooks/talkjs` : 'PUBLIC_URL is not https: TalkJS notification webhooks cannot reach this machine');
    return { notes };
  },

  async issueToken(user: AppUser) {
    return { token: await userToken(user.id), extra: { appId: appId() } };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    await api('PUT', `/conversations/${encodeURIComponent(ref.channelId)}/messages/${encodeURIComponent(ref.messageId)}`, { custom: { card: JSON.stringify(card) } });
  },

  async fetchOrderChannel(orderId: string) {
    return api('GET', `/conversations/${encodeURIComponent(channelIdForOrder(orderId))}`);
  },

  async addMember(channelId: string, userId: UserId) {
    await api('PUT', `/conversations/${encodeURIComponent(channelId)}/participants/${encodeURIComponent(userId)}`, { access: 'ReadWrite', notify: true });
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    const raw = (req as Request & { rawBody?: Buffer }).rawBody ?? Buffer.from(JSON.stringify(req.body ?? {}));
    const ts = String(req.headers['x-talkjs-timestamp'] ?? '');
    const sig = String(req.headers['x-talkjs-signature'] ?? '');
    const expected = createHmac('sha256', secret()).update(`${ts}.${raw.toString('utf8')}`).digest('hex').toUpperCase();
    const ok = sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
    if (!ok) return { events: ['invalid-signature'], reply: { status: 401, body: 'bad signature' } };
    const ev = req.body as { type: string; data?: Record<string, unknown> };
    // notification.triggered / sent / delivered are the evidence that TalkJS emailed the offline seller.
    return { events: [ev.type] };
  },

  async listReports(): Promise<Report[]> {
    return moderationStore.reports('talkjs'); // TalkJS has no report API; our queue is the only one.
  },

  describe() {
    return { region: env.get('TALKJS_REGION') || 'eu', plan: env.get('TALKJS_PLAN') || 'not set', emailProvider: 'TalkJS (Postmark), not Mailpit' };
  },
};

register(talkjsVendor);
