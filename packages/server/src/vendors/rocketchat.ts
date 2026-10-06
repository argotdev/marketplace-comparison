/**
 * Rocket.Chat server half over the REST API as the admin user: users, per-user tokens (users.createToken with
 * CREATE_TOKENS_FOR_USERS_SECRET), the order group, message edits for the card, per-room email notification
 * preference, outgoing webhook, presence, moderation reports. Self-hosted via docker compose --profile rocketchat.
 * Docs: https://developer.rocket.chat/apidocs
 */
import type { Request } from 'express';
import { channelIdForOrder, USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';
import { orders } from '../orders.ts';
import { translationProvider } from '../translate.ts';

const REQUIRED = ['ROCKETCHAT_URL', 'ROCKETCHAT_ADMIN_USER', 'ROCKETCHAT_ADMIN_PASSWORD', 'ROCKETCHAT_CREATE_TOKENS_SECRET'];
const base = () => env.get('ROCKETCHAT_URL').replace(/\/$/, '');
let admin: { token: string; userId: string } | null = null;
const userIds = new Map<string, string>(); // username -> _id

async function login(): Promise<{ token: string; userId: string }> {
  if (admin) return admin;
  const res = await fetch(`${base()}/api/v1/login`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ user: env.get('ROCKETCHAT_ADMIN_USER'), password: env.get('ROCKETCHAT_ADMIN_PASSWORD') }) });
  const j = (await res.json()) as { status: string; data?: { authToken: string; userId: string } };
  if (j.status !== 'success' || !j.data) throw new Error('rocketchat admin login failed');
  admin = { token: j.data.authToken, userId: j.data.userId };
  return admin;
}

async function api<T = unknown>(method: 'GET' | 'POST', path: string, body?: unknown, as?: { token: string; userId: string }): Promise<T> {
  const a = as ?? (await login());
  const res = await fetch(`${base()}/api/v1/${path}`, { method, headers: { 'X-Auth-Token': a.token, 'X-User-Id': a.userId, 'content-type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) });
  const json = (await res.json().catch(() => ({}))) as T & { success?: boolean; error?: string; errorType?: string };
  if (res.status === 401 && !as) {
    admin = null; // token expired; retry once
    return api(method, path, body);
  }
  if (!res.ok || json.success === false) throw new Error(`rocketchat ${method} ${path} -> ${res.status}: ${json.error ?? json.errorType ?? 'error'}`);
  return json;
}

async function ensureUser(u: AppUser): Promise<string> {
  const known = userIds.get(u.id);
  if (known) return known;
  try {
    const r = await api<{ user: { _id: string } }>('GET', `users.info?username=${encodeURIComponent(u.id)}`);
    userIds.set(u.id, r.user._id);
    return r.user._id;
  } catch {
    const r = await api<{ user: { _id: string } }>('POST', 'users.create', { username: u.id, name: u.name, email: u.email, password: `Pw-${Math.random().toString(36).slice(2)}!9`, verified: true, joinDefaultChannels: false, roles: u.role === 'agent' ? ['user', 'moderator'] : ['user'] });
    userIds.set(u.id, r.user._id);
    return r.user._id;
  }
}

/** Admin is not a member of order groups (groups.info needs membership), so look rooms up with rooms.adminRooms. */
async function findGroup(name: string): Promise<{ _id: string; name: string } | null> {
  const r = await api<{ rooms: { _id: string; name: string }[] }>('GET', `rooms.adminRooms?filter=${encodeURIComponent(name)}&types[]=p&count=5`);
  return r.rooms.find((x) => x.name === name) ?? null;
}

async function ensureGroup(orderId: string): Promise<{ _id: string; name: string }> {
  const name = channelIdForOrder(orderId);
  const found = await findGroup(name);
  if (found) return found;
  {
    const o = orders.getOrCreate(orderId);
    const r = await api<{ group: { _id: string; name: string } }>('POST', 'groups.create', { name, members: [o.buyerId, o.sellerId], customFields: { orderId, listingId: o.listingId } });
    // Email every message to offline members (default preference is mentions-only), per user per room.
    for (const uid of [o.buyerId, o.sellerId]) {
      const u = USERS[uid];
      const id = await ensureUser(u);
      const tok = await userToken(id);
      await api('POST', 'rooms.saveNotification', { roomId: r.group._id, notifications: { emailNotifications: 'all' } }, tok).catch(() => {});
    }
    return r.group;
  }
}

async function userToken(userId: string): Promise<{ token: string; userId: string }> {
  const r = await api<{ data: { authToken: string; userId: string } }>('POST', 'users.createToken', { userId, secret: env.get('ROCKETCHAT_CREATE_TOKENS_SECRET') });
  return { token: r.data.authToken, userId: r.data.userId };
}

export const rocketchatVendor: ServerVendor = {
  platform: 'rocketchat',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    for (const u of Object.values(USERS)) await ensureUser(u);
    notes.push('users ensured (users.create)');
    const info = await fetch(`${base()}/api/info`).then((r) => r.json() as Promise<{ version: string }>);
    notes.push(`Rocket.Chat ${info.version}`);
    // Auto-translate needs a provider key; Rocket.Chat refuses DeepL free keys.
    const provider = translationProvider();
    if (provider === 'google' || (provider === 'deepl' && !env.DEEPL_API_KEY.endsWith(':fx'))) {
      const settings: Record<string, unknown> = provider === 'google' ? { AutoTranslate_Enabled: true, AutoTranslate_ServiceProvider: 'google-translate', AutoTranslate_GoogleAPIKey: env.GOOGLE_TRANSLATE_API_KEY } : { AutoTranslate_Enabled: true, AutoTranslate_ServiceProvider: 'deepl-translate', AutoTranslate_DeepLAPIKey: env.DEEPL_API_KEY };
      for (const [k, v] of Object.entries(settings)) await api('POST', `settings/${k}`, { value: v }).catch((e) => notes.push(`setting ${k}: ${(e as Error).message}`));
      await api('POST', 'permissions.update', { permissions: [{ _id: 'auto-translate', roles: ['admin', 'user'] }] }).catch(() => {});
      notes.push(`auto-translate configured with ${provider} (per-room language is set when the group is created)`);
    } else notes.push(provider === 'deepl' ? 'auto-translate not configured: Rocket.Chat does not support DeepL free (:fx) keys' : 'auto-translate not configured: no TRANSLATION_PROVIDER');
    // Outgoing webhook so message events reach our log (email itself is native via SMTP → Mailpit).
    const target = env.PUBLIC_URL.startsWith('http://localhost') ? env.PUBLIC_URL.replace('localhost', 'host.docker.internal') : env.PUBLIC_URL;
    try {
      const existing = await api<{ integrations: { name: string }[] }>('GET', 'integrations.list?count=50');
      if (!existing.integrations.some((i) => i.name === 'mkt-webhook')) {
        await api('POST', 'integrations.create', { type: 'webhook-outgoing', name: 'mkt-webhook', event: 'sendMessage', enabled: true, username: env.get('ROCKETCHAT_ADMIN_USER'), urls: [`${target}/api/webhooks/rocketchat`], channel: 'all_private_groups', scriptEnabled: false, token: env.get('ROCKETCHAT_CREATE_TOKENS_SECRET') });
        notes.push(`outgoing webhook created -> ${target}/api/webhooks/rocketchat`);
      } else notes.push('outgoing webhook exists');
    } catch (e) {
      notes.push(`outgoing webhook not created: ${(e as Error).message}`);
    }
    notes.push('registration: workspace runs unregistered (Setup_Wizard skipped) = Community limits; Starter needs a human to register at cloud.rocket.chat');
    return { notes };
  },

  async issueToken(user: AppUser) {
    const id = await ensureUser(user);
    const t = await userToken(id);
    return { token: t.token, extra: { userId: t.userId, url: base(), username: user.id } };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    // Only members can edit in a private group and admin is not one: edit as the message's author.
    const g = await ensureGroup(ref.channelId.replace(/^order-/, ''));
    const author = (ref.extra?.senderId ?? 'buyer_ana') as UserId;
    const as = await userToken(await ensureUser(USERS[author] ?? USERS.buyer_ana));
    await api('POST', 'chat.update', { roomId: g._id, msgId: ref.messageId, text: `Order ${card.orderId}: ${card.listingTitle}`, customFields: { type: 'order_card', card: JSON.stringify(card), orderId: card.orderId } }, as);
  },

  async fetchOrderChannel(orderId: string) {
    // Authenticated admin lookup of the order room (admin is not a member, so this is the admin-side read).
    const g = await findGroup(channelIdForOrder(orderId));
    if (!g) throw new Error('order group not found');
    return { group: g };
  },

  async addMember(channelId: string, userId: UserId) {
    const rid = channelId.startsWith('order-') ? (await ensureGroup(channelId.replace(/^order-/, '')))._id : channelId;
    await api('POST', 'groups.invite', { roomId: rid, username: userId });
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    const body = req.body as { token?: string; text?: string; user_name?: string; channel_name?: string };
    if (body.token !== env.get('ROCKETCHAT_CREATE_TOKENS_SECRET')) return { events: ['bad-token'], reply: { status: 401, body: 'unauthorized' } };
    return { events: [`message:${body.channel_name ?? ''}`] }; // email is native (SMTP → Mailpit); this is just the log
  },

  async listReports(): Promise<Report[]> {
    // Moderation console lists: reported messages grouped by reported user, and user reports.
    const byUsers = await api<{ reports?: { userId?: string; username?: string; count?: number; ts?: string; reports?: { description?: string; reportedBy?: { username?: string }; ts?: string }[] }[] }>('GET', 'moderation.reportsByUsers?count=25').catch(() => ({ reports: [] as never[] }));
    const userReports = await api<{ reports?: { _id: string; description?: string; reportedBy?: { username?: string }; reportedUser?: { username?: string }; ts?: string }[] }>('GET', 'moderation.userReports?count=25').catch(() => ({ reports: [] as never[] }));
    const out: Report[] = [];
    for (const x of byUsers.reports ?? []) out.push({ id: `msgs_${x.userId ?? x.username}`, platform: 'rocketchat', reporterId: x.reports?.[0]?.reportedBy?.username ?? 'unknown', targetId: x.username ?? x.userId ?? 'unknown', reason: x.reports?.[0]?.description ?? `${x.count ?? ''} reported message(s)`, source: 'vendor-api', at: x.ts ?? x.reports?.[0]?.ts ?? new Date().toISOString() });
    for (const x of userReports.reports ?? []) out.push({ id: x._id, platform: 'rocketchat', reporterId: x.reportedBy?.username ?? 'unknown', targetId: x.reportedUser?.username ?? 'unknown', reason: x.description ?? '', source: 'vendor-api', at: x.ts ?? new Date().toISOString() });
    return out;
  },

  async isOnline(userId: UserId) {
    try {
      const id = await ensureUser(USERS[userId]);
      const r = await api<{ presence: string }>('GET', `users.getPresence?userId=${id}`);
      return r.presence === 'online';
    } catch {
      return undefined;
    }
  },

  describe() {
    return { url: env.get('ROCKETCHAT_URL') || 'not set', plan: env.get('ROCKETCHAT_PLAN') || 'community (unregistered)', wizardSkipped: env.get('ROCKETCHAT_SKIP_WIZARD') !== '0' };
  },
};

void moderationStore;
register(rocketchatVendor);
