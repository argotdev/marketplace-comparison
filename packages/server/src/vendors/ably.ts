/**
 * Ably server half: ably-js Rest for TokenRequests and channel reads; a Node ChatClient (Realtime with the API
 * key) for message updates; webhook receiver for both the integration rule (enveloped channel.message → email
 * fallback) and the custom before-publish moderation hook (rewrite with masked text). Room membership does not
 * exist on Ably, so this file keeps the authorised member list per room.
 * Docs: https://ably.com/docs/auth/token , https://ably.com/docs/chat/moderation/custom , https://ably.com/docs/integrations/webhooks
 */
import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Request } from 'express';
import * as Ably from 'ably';
import { ChatClient } from '@ably/chat';
import { USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';
import { notifyOffline } from '../routes.ts';
import { orders } from '../orders.ts';

const REQUIRED = ['ABLY_API_KEY'];
const roomName = (orderId: string) => `order:${orderId}`;
const chatChannel = (room: string) => `${room}::$chat`;
const members = new Map<string, Set<UserId>>(); // room -> authorised members (Ably has no membership)

let rest: Ably.Rest | null = null;
function restClient(): Ably.Rest {
  if (!rest) rest = new Ably.Rest({ key: env.get('ABLY_API_KEY') });
  return rest;
}
let chat: ChatClient | null = null;
function chatClient(): ChatClient {
  if (!chat) chat = new ChatClient(new Ably.Realtime({ key: env.get('ABLY_API_KEY'), clientId: 'system' }));
  return chat;
}
function membersOf(room: string): Set<UserId> {
  let s = members.get(room);
  if (!s) {
    const o = orders.getOrCreate(room.replace(/^order:/, ''));
    s = new Set([o.buyerId, o.sellerId]);
    members.set(room, s);
  }
  return s;
}

export const ablyVendor: ServerVendor = {
  platform: 'ably',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    notes.push('no user objects on Ably; identity is the token clientId');
    notes.push('dashboard steps (not settable with the data API key): Integrations → webhook rule on channel.message for `.*::\\$chat$` → ' + `${env.PUBLIC_URL}/api/webhooks/ably` + '; Integrations → Moderation → Custom before-publish → same URL, room filter order:.*');
    if (!env.PUBLIC_URL.startsWith('https://')) notes.push('PUBLIC_URL is not https: moderation hook and email fallback cannot reach this machine');
    return { notes };
  },

  async issueToken(user: AppUser) {
    const ops: Ably.capabilityOp[] = ['publish', 'subscribe', 'presence', 'history', 'annotation-publish', 'annotation-subscribe', 'message-update-own'];
    const req = await restClient().auth.createTokenRequest({ clientId: user.id, ttl: 3600 * 1000, capability: { 'order:*': ops, 'courier:*': ['publish', 'subscribe'] } });
    return { token: JSON.stringify(req), extra: {} };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    const room = await chatClient().rooms.get(ref.channelId);
    await room.attach();
    const current = await room.messages.get(ref.messageId);
    await room.messages.update(ref.messageId, { text: current.text, metadata: { type: 'order_card', card: { ...card } }, headers: current.headers }, { description: `status ${card.status}` });
  },

  async fetchOrderChannel(orderId: string) {
    const ch = restClient().channels.get(chatChannel(roomName(orderId)));
    const [history, presence] = await Promise.all([ch.history({ limit: 1 }), ch.presence.get({ limit: 50 })]);
    return { room: roomName(orderId), members: [...membersOf(roomName(orderId))], present: presence.items.map((p) => p.clientId), lastMessageAt: history.items[0]?.timestamp ?? null };
  },

  async addMember(channelId: string, userId: UserId) {
    membersOf(channelId).add(userId); // the agent's token already covers order:* rooms
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    const body = req.body as Record<string, unknown>;
    // Custom before-publish moderation request: { source, appId, room, site, ruleId, message: { clientId, text, metadata, headers } }
    if (body.ruleId && body.room && body.message && typeof (body.message as { text?: unknown }).text === 'string') {
      const msg = body.message as { clientId?: string; text: string; metadata?: Record<string, unknown>; headers?: Record<string, unknown> };
      const r = moderationStore.check(msg.text);
      if (!r.allowed) {
        moderationStore.logBlocked('ably', msg.text, r.matches, msg.clientId);
        return { events: ['moderation:rewrite'], reply: { status: 200, body: { action: 'accept', message: { text: r.masked, metadata: { ...(msg.metadata ?? {}), moderated: true }, headers: msg.headers ?? {} } }, headers: { 'content-type': 'application/json' } } };
      }
      return { events: ['moderation:accept'], reply: { status: 200, body: { action: 'accept' }, headers: { 'content-type': 'application/json' } } };
    }
    // Integration rule (enveloped): verify X-Ably-Signature = base64(HMAC-SHA256(body, key secret)) when present.
    const sig = String(req.headers['x-ably-signature'] ?? '');
    if (sig) {
      const raw = (req as Request & { rawBody?: Buffer }).rawBody ?? Buffer.from(JSON.stringify(body));
      const secret = env.get('ABLY_API_KEY').split(':')[1] ?? '';
      const expected = createHmac('sha256', secret).update(raw).digest('base64');
      if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return { events: ['invalid-signature'], reply: { status: 401, body: 'bad signature' } };
    }
    const events: string[] = [];
    const items = Array.isArray(body.items) ? (body.items as Record<string, unknown>[]) : [body];
    for (const it of items) {
      const channel = String(it.channel ?? '');
      const msgs = (it.messages as { clientId?: string; data?: unknown }[] | undefined) ?? [];
      for (const m of msgs) {
        events.push(`message:${channel}`);
        if (!channel.endsWith('::$chat') || !m.clientId) continue;
        let text = '';
        try {
          const data = typeof m.data === 'string' ? (JSON.parse(m.data) as { text?: string }) : (m.data as { text?: string });
          text = data?.text ?? '';
        } catch {
          /* ignore */
        }
        const room = channel.replace(/::\$chat$/, '');
        const recipients = [...membersOf(room)].filter((id) => id !== m.clientId);
        await notifyOffline('ably', room, m.clientId, recipients, text);
      }
    }
    return { events };
  },

  async listReports(): Promise<Report[]> {
    return moderationStore.reports('ably'); // nothing native
  },

  async isOnline(userId: UserId) {
    // Presence on any order room counts as online.
    try {
      for (const room of members.keys()) {
        const p = await restClient().channels.get(chatChannel(room)).presence.get({ clientId: userId, limit: 1 });
        if (p.items.length) return true;
      }
      return members.size ? false : undefined;
    } catch {
      return undefined;
    }
  },

  describe() {
    return { region: env.get('ABLY_REGION') || 'nearest-edge', plan: env.get('ABLY_PLAN') || 'not set', users: Object.keys(USERS).length, rooms: members.size };
  },
};

register(ablyVendor);
