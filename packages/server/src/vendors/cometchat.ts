/**
 * CometChat server half: REST API only (there is no Node SDK). Base URL https://{appId}.api-{region}.cometchat.io/v3,
 * header `apikey` (REST API key, fullAccess) and `onBehalfOf` to act as a user.
 * Docs: https://www.cometchat.com/docs/rest-api/authentication , .../rest-api/auth-tokens/create , .../fundamentals/webhooks
 */
import type { Request } from 'express';
import { channelIdForOrder, USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';
import { notifyOffline } from '../routes.ts';
import { sendOfflineEmail } from '../email.ts';

const REQUIRED = ['COMETCHAT_APP_ID', 'COMETCHAT_REGION', 'COMETCHAT_AUTH_KEY', 'COMETCHAT_REST_API_KEY'];
const base = () => `https://${env.get('COMETCHAT_APP_ID')}.api-${env.get('COMETCHAT_REGION')}.cometchat.io/v3`;

async function api<T = unknown>(method: string, path: string, body?: unknown, onBehalfOf?: string): Promise<T> {
  const res = await fetch(`${base()}${path}`, {
    method,
    headers: { apikey: env.get('COMETCHAT_REST_API_KEY'), 'Content-Type': 'application/json', Accept: 'application/json', ...(onBehalfOf ? { onBehalfOf } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`cometchat ${method} ${path} -> ${res.status}: ${text}`) as Error & { status?: number; code?: string };
    err.status = res.status;
    try {
      err.code = (JSON.parse(text) as { error?: { code?: string } }).error?.code;
    } catch {
      /* not json */
    }
    throw err;
  }
  return (text ? JSON.parse(text) : {}) as T;
}

async function ensureUser(u: AppUser): Promise<void> {
  try {
    // `role` must name a role that exists in the dashboard ("The selected role is invalid" otherwise); users get the default role.
    await api('POST', '/users', { uid: u.id, name: u.name, metadata: { lang: u.lang, '@private': { email: u.email } } });
  } catch (e) {
    if ((e as { code?: string }).code !== 'ERR_UID_ALREADY_EXISTS') throw e;
  }
}

function basicAuthOk(req: Request): boolean {
  const user = env.get('COMETCHAT_WEBHOOK_USER');
  const pass = env.get('COMETCHAT_WEBHOOK_PASS');
  if (!user && !pass) return true; // Basic Auth not configured in the dashboard either
  const expected = `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`;
  return req.headers.authorization === expected;
}

export const cometchatVendor: ServerVendor = {
  platform: 'cometchat',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    for (const u of Object.values(USERS)) await ensureUser(u);
    notes.push('users ensured via POST /v3/users');
    notes.push('moderation rules (Contact Details Removal, Email Detection, custom off-platform regex list, action Block) and the Message Translation extension are dashboard settings; the REST API cannot set them');
    notes.push(env.PUBLIC_URL.startsWith('https://') ? `webhook + email custom provider URL to paste: ${env.PUBLIC_URL}/api/webhooks/cometchat` : 'PUBLIC_URL is not https: webhooks and the email custom provider cannot reach this machine');
    return { notes };
  },

  async issueToken(user: AppUser) {
    await ensureUser(user);
    const r = await api<{ data: { authToken: string } }>('POST', `/users/${encodeURIComponent(user.id)}/auth_tokens`, {});
    return { token: r.data.authToken, extra: { appId: env.get('COMETCHAT_APP_ID'), region: env.get('COMETCHAT_REGION') } };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    // Only group admins/moderators or the message's author may edit (403 otherwise), so act as the author.
    // The documented REST schema for PUT /messages/{id} lists data.text and data.metadata; customData is sent too,
    // and the adapter reads metadata.card first, then customData.card.
    const author = ref.extra?.senderId ?? 'buyer_ana';
    try {
      await api('PUT', `/messages/${encodeURIComponent(ref.messageId)}`, { data: { customData: { card }, metadata: { card } } }, author);
    } catch (e) {
      if ((e as { status?: number }).status === 400) await api('PUT', `/messages/${encodeURIComponent(ref.messageId)}`, { data: { metadata: { card } } }, author);
      else throw e;
    }
  },

  async fetchOrderChannel(orderId: string) {
    return api('GET', `/groups/${encodeURIComponent(channelIdForOrder(orderId))}`);
  },

  async addMember(channelId: string, userId: UserId) {
    await api('POST', `/groups/${encodeURIComponent(channelId)}/members`, { participants: [userId] });
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    if (!basicAuthOk(req)) return { events: ['bad-basic-auth'], reply: { status: 401, body: 'unauthorized' } };
    const body = req.body as { trigger: string; data?: Record<string, unknown> };
    const events = [body.trigger];
    const reports: Report[] = [];
    // Email custom provider: CometChat has decided the seller is offline and unread; our server sends the mail.
    if (body.trigger === 'email-notification-payload-generated') {
      const d = body.data as { to?: { uid?: string }; messages?: { data?: { text?: string }; sender?: string }[]; subject?: string } | undefined;
      const to = d?.to?.uid as UserId | undefined;
      const first = d?.messages?.[0];
      if (to && USERS[to]) await sendOfflineEmail({ platform: 'cometchat', toUserId: to, fromUserId: String(first?.sender ?? 'unknown'), text: first?.data?.text ?? d?.subject ?? '', channelId: 'cometchat' });
      return { events, reply: { status: 200, body: { ok: true } } };
    }
    if (body.trigger === 'moderation_engine_blocked') {
      const d = body.data as { message?: { data?: { text?: string }; sender?: string } } | undefined;
      moderationStore.logBlocked('cometchat', d?.message?.data?.text ?? '', ['cometchat-rule'], d?.message?.sender);
    }
    if (body.trigger === 'message_sent') {
      // Email is handled by the Notifications platform above; nothing to do here besides the log.
      void notifyOffline;
    }
    return { events, reports };
  },

  async listReports(): Promise<Report[]> {
    // Flagged messages queue (dashboard: Moderation → Flagged Messages). Endpoint per the REST moderation docs.
    try {
      const r = await api<{ data?: { id: string; flaggedBy?: string; sender?: string; reason?: string; createdAt?: number }[] }>('GET', '/moderation/flagged-messages?limit=25');
      return (r.data ?? []).map((x) => ({ id: String(x.id), platform: 'cometchat' as const, reporterId: x.flaggedBy ?? 'unknown', targetId: x.sender ?? 'unknown', reason: x.reason ?? '', source: 'vendor-api' as const, at: new Date((x.createdAt ?? 0) * 1000).toISOString() }));
    } catch {
      return [];
    }
  },

  async isOnline(userId: UserId) {
    try {
      const r = await api<{ data: { status?: string } }>('GET', `/users/${encodeURIComponent(userId)}`);
      return r.data.status === 'online';
    } catch {
      return undefined;
    }
  },

  describe() {
    return { region: env.get('COMETCHAT_REGION') || 'not set', plan: env.get('COMETCHAT_PLAN') || 'not set', api: env.has('COMETCHAT_APP_ID') ? base() : 'n/a' };
  },
};

register(cometchatVendor);
