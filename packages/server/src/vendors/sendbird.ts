/**
 * Sendbird server half: Platform API v3 over fetch (no SDK needed; the official Node SDKs are
 * generated REST clients). Issues session tokens, configures the `order` channel type's profanity
 * filter, updates the order card message, receives webhooks, and reads reports back.
 * Docs: https://sendbird.com/docs/chat/platform-api/v3/prepare-to-use-api
 */
import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Request } from 'express';
import { channelIdForOrder, USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';
import { notifyOffline } from '../routes.ts';

const REQUIRED = ['SENDBIRD_APP_ID', 'SENDBIRD_API_TOKEN'];
const appId = () => env.get('SENDBIRD_APP_ID');
const token = () => env.get('SENDBIRD_API_TOKEN');
const base = () => `https://api-${appId()}.sendbird.com/v3`;

async function api<T = unknown>(method: string, path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${base()}${path}`, {
    method,
    headers: { 'Api-Token': token(), 'Content-Type': 'application/json; charset=utf8' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) {
    const err = new Error(`sendbird ${method} ${path} -> ${res.status}: ${text}`) as Error & { code?: number; status?: number };
    try {
      err.code = (JSON.parse(text) as { code?: number }).code;
    } catch {
      /* not json */
    }
    err.status = res.status;
    throw err;
  }
  return (text ? JSON.parse(text) : {}) as T;
}

/**
 * Regex set for Sendbird's profanity filter (Google RE2 syntax, so no lookbehind). type 1 = replace
 * matches with asterisks, type 2 = block the send. We use replace so the sender sees it went through masked.
 */
export const SENDBIRD_REGEX_FILTERS = [
  '(\\+\\d{1,3}[ .-]?)?(\\(?\\d{2,4}\\)?[ .-]){1,3}\\d{3,4}\\b',
  '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}',
  '(?i)\\b(venmo|paypal|zelle|cash ?app|revolut|western union|bitcoin|crypto|whatsapp|telegram|signal)\\b',
];

async function ensureUser(u: AppUser): Promise<void> {
  try {
    await api('POST', '/users', { user_id: u.id, nickname: u.name, profile_url: '', issue_access_token: false, metadata: { lang: u.lang, email: u.email } });
  } catch (e) {
    if ((e as { code?: number }).code !== 400202) throw e; // 400202 = user already exists
  }
}

export const sendbirdVendor: ServerVendor = {
  platform: 'sendbird',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    for (const u of Object.values(USERS)) await ensureUser(u);
    notes.push('users ensured via POST /v3/users');
    // Channel-type settings carry the profanity filter for custom type "order".
    const settings = {
      custom_type: 'order',
      profanity_filter: { keywords: '', regex_filters: SENDBIRD_REGEX_FILTERS.map((regex) => ({ regex })), type: 1, should_check_global: false },
      domain_filter: { domains: [], type: 0, should_check_global: false },
      display_past_message: true,
    };
    try {
      await api('PUT', '/applications/settings_by_channel_custom_type/order', settings);
      notes.push('profanity regex filter (replace) set on channel type "order"');
    } catch (e) {
      const status = (e as { status?: number }).status;
      if (status === 400 || status === 404) {
        try {
          await api('POST', '/applications/settings_by_channel_custom_type', settings);
          notes.push('profanity regex filter (replace) created on channel type "order"');
        } catch (e2) {
          notes.push(`profanity filter NOT configured: ${(e2 as Error).message}`);
        }
      } else notes.push(`profanity filter NOT configured: ${(e as Error).message}`);
    }
    // Webhook: point Sendbird at us when a public URL exists.
    if (env.PUBLIC_URL.startsWith('https://')) {
      try {
        await api('PUT', '/applications/settings/webhook', {
          enabled: true,
          url: `${env.PUBLIC_URL}/api/webhooks/sendbird`,
          include_members: true,
          enabled_events: ['group_channel:message_send', 'group_channel:message_update', 'group_channel:message_read', 'group_channel:join', 'group_channel:invite', 'message:report', 'user:report', 'profanity_filter:replace', 'profanity_filter:block', 'profanity_filter:moderate', 'profanity_filter:detect'],
        });
        notes.push(`webhook set to ${env.PUBLIC_URL}/api/webhooks/sendbird`);
      } catch (e) {
        notes.push(`webhook NOT configured: ${(e as Error).message}`);
      }
    } else notes.push('webhook not set: PUBLIC_URL is not https (run ngrok and set PUBLIC_URL)');
    return { notes };
  },

  async issueToken(user: AppUser) {
    await ensureUser(user);
    const r = await api<{ token: string; expires_at: number }>('POST', `/users/${encodeURIComponent(user.id)}/token`, { expires_at: Date.now() + 24 * 3600 * 1000 });
    return { token: r.token, extra: { appId: appId() } };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    await api('PUT', `/group_channels/${encodeURIComponent(ref.channelId)}/messages/${ref.messageId}`, {
      message_type: 'MESG',
      data: JSON.stringify(card),
    });
  },

  async fetchOrderChannel(orderId: string) {
    return api('GET', `/group_channels/${encodeURIComponent(channelIdForOrder(orderId))}?show_member=true`);
  },

  async addMember(channelId: string, userId: UserId) {
    await api('POST', `/group_channels/${encodeURIComponent(channelId)}/invite`, { user_ids: [userId] });
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    const raw = (req as Request & { rawBody?: Buffer }).rawBody ?? Buffer.from(JSON.stringify(req.body ?? {}));
    const sig = String(req.headers['x-sendbird-signature'] ?? '');
    const expected = createHmac('sha256', token()).update(raw).digest('hex');
    const valid = sig.length === expected.length && timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
    if (!valid) return { events: ['invalid-signature'], reply: { status: 401, body: 'bad signature' } };
    const body = req.body as { category: string; payload?: Record<string, unknown>; channel?: { channel_url: string }; members?: { user_id: string }[]; sender?: { user_id: string }; reporting_user?: { user_id: string }; offending_user?: { user_id: string }; report_category?: string; report_description?: string };
    const events = [body.category];
    const reports: Report[] = [];
    if (body.category === 'user:report' || body.category === 'message:report' || body.category === 'group_channel:report') {
      reports.push(
        moderationStore.addReport({
          platform: 'sendbird',
          reporterId: body.reporting_user?.user_id ?? 'unknown',
          targetId: body.offending_user?.user_id ?? 'unknown',
          reason: `${body.report_category ?? ''} ${body.report_description ?? ''}`.trim(),
          source: 'webhook',
          raw: body,
        }),
      );
    }
    if (body.category === 'group_channel:message_send' && body.channel && body.sender) {
      const text = String((body.payload as { message?: string } | undefined)?.message ?? '');
      const recipients = (body.members ?? []).map((m) => m.user_id as UserId).filter((id) => id !== body.sender!.user_id);
      await notifyOffline('sendbird', body.channel.channel_url, body.sender.user_id, recipients, text);
    }
    return { events, reports };
  },

  async listReports() {
    const r = await api<{ report_log: { reporting_user?: { user_id: string }; offending_user?: { user_id: string }; report_type: string; report_category: string; report_description: string; created_at: number }[] }>('GET', '/report?limit=50');
    return (r.report_log ?? []).map((x, i) => ({
      id: `sb_${x.created_at}_${i}`,
      platform: 'sendbird' as const,
      reporterId: x.reporting_user?.user_id ?? 'unknown',
      targetId: x.offending_user?.user_id ?? 'unknown',
      reason: `${x.report_category}: ${x.report_description}`,
      source: 'vendor-api' as const,
      at: new Date(x.created_at).toISOString(),
    }));
  },

  async isOnline(userId: UserId) {
    try {
      const u = await api<{ is_online: boolean }>('GET', `/users/${encodeURIComponent(userId)}`);
      return u.is_online;
    } catch {
      return undefined;
    }
  },

  describe() {
    return { region: env.get('SENDBIRD_REGION') || 'not set', plan: env.get('SENDBIRD_PLAN') || 'not set', apiHost: env.has('SENDBIRD_APP_ID') ? base() : 'n/a' };
  },
};

register(sendbirdVendor);
