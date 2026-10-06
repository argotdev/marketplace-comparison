/**
 * PubNub server half with the core SDK (pubnub 13) and the secret key: Access Manager v3 tokens, App Context
 * users/channels, message actions for card updates, Events & Actions webhook receiver, presence via hereNow.
 * Moderation runs in a PubNub Function (pubnub.function.js) that the user pastes into the Admin Portal.
 * Docs: https://www.pubnub.com/docs/general/security/access-control , https://www.pubnub.com/docs/general/metadata/basics
 */
import type { Request } from 'express';
import PubNub from 'pubnub';
import { channelIdForOrder, USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';
import { notifyOffline } from '../routes.ts';
import { orders } from '../orders.ts';

const REQUIRED = ['PUBNUB_PUBLISH_KEY', 'PUBNUB_SUBSCRIBE_KEY', 'PUBNUB_SECRET_KEY'];
let pn: PubNub | null = null;
function sdk(): PubNub {
  if (!pn) pn = new PubNub({ publishKey: env.get('PUBNUB_PUBLISH_KEY'), subscribeKey: env.get('PUBNUB_SUBSCRIBE_KEY'), secretKey: env.get('PUBNUB_SECRET_KEY'), userId: 'marketplace-server' });
  return pn;
}

const ALL = { read: true, write: true, manage: true, delete: true, get: true, update: true, join: true };

export const pubnubVendor: ServerVendor = {
  platform: 'pubnub',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    for (const u of Object.values(USERS)) {
      await sdk().objects.setUUIDMetadata({ uuid: u.id, data: { name: u.name, email: u.email, custom: { lang: u.lang } } });
    }
    notes.push('users upserted in App Context (setUUIDMetadata)');
    notes.push('keyset features expected ON: Presence, Message Persistence, App Context (with membership events), File Sharing, Access Manager, Stream Controller');
    notes.push('moderation: paste packages/server/src/vendors/pubnub.function.js as a Before Publish Function on channel pattern order-* and start the module');
    notes.push(env.PUBLIC_URL.startsWith('https://') ? `Events & Actions webhook URL to configure: ${env.PUBLIC_URL}/api/webhooks/pubnub (header x-pubnub-secret)` : 'PUBLIC_URL is not https: Events & Actions cannot reach this machine (email fallback not run)');
    return { notes };
  },

  async issueToken(user: AppUser) {
    // PAM v3 token: this user may read/write/manage order channels, the Chat SDK's internal channels, the courier
    // channel, and see user metadata. 60 minutes.
    const token = await sdk().grantToken({
      ttl: 60,
      authorized_uuid: user.id,
      resources: { uuids: { [user.id]: { get: true, update: true } } },
      patterns: {
        channels: { '^order-.*$': ALL, '^PUBNUB_INTERNAL_.*$': ALL, '^courier-.*$': { read: true, write: true }, '^.*-pnpres$': { read: true } },
        uuids: { '^.*$': { get: true } },
      },
    });
    return { token, extra: { publishKey: env.get('PUBNUB_PUBLISH_KEY'), subscribeKey: env.get('PUBNUB_SUBSCRIBE_KEY') } };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    // Same primitive the Chat SDK uses for edits: a message action; clients fold the latest "order_card" action into the card.
    await sdk().addMessageAction({ channel: ref.channelId, messageTimetoken: ref.messageId, action: { type: 'order_card', value: JSON.stringify(card) } });
  },

  async fetchOrderChannel(orderId: string) {
    const r = await sdk().objects.getChannelMetadata({ channel: channelIdForOrder(orderId), include: { customFields: true } });
    return r.data;
  },

  async addMember(channelId: string, userId: UserId) {
    await sdk().objects.setChannelMembers({ channel: channelId, uuids: [userId] });
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    const secret = env.get('PUBNUB_WEBHOOK_SECRET');
    if (secret && req.headers['x-pubnub-secret'] !== secret) return { events: ['bad-secret'], reply: { status: 401, body: 'unauthorized' } };
    // Events & Actions "Message sent" payload: { channel, message, meta, senderId, timetoken, ... } (batched arrays possible).
    const items = Array.isArray(req.body) ? (req.body as Record<string, unknown>[]) : [req.body as Record<string, unknown>];
    const events: string[] = [];
    for (const it of items) {
      const channel = String(it.channel ?? '');
      const sender = String(it.senderId ?? it.uuid ?? it.publisher ?? '');
      const msg = it.message as { type?: string; text?: string } | undefined;
      events.push(`message:${channel}`);
      if (channel.startsWith('order-') && sender && msg?.type === 'text') {
        const members = await sdk().objects.getChannelMembers({ channel, limit: 50 });
        const recipients = members.data.map((m) => m.uuid.id as UserId).filter((id) => id !== sender);
        await notifyOffline('pubnub', channel, sender, recipients, msg.text ?? '');
      }
    }
    return { events };
  },

  async listReports(): Promise<Report[]> {
    // Chat SDK reports are published to PUBNUB_INTERNAL_MODERATION_<channelId>; read them for the known order channels.
    const out: Report[] = [];
    const refs = orders.cardRefsFor(orders.getOrCreate('ord_1001').id);
    const channels = new Set<string>(refs.filter((r) => r.platform === 'pubnub').map((r) => `PUBNUB_INTERNAL_MODERATION_${r.channelId}`));
    for (const ch of channels) {
      try {
        const r = await sdk().fetchMessages({ channels: [ch], count: 25 });
        for (const m of r.channels[ch] ?? []) {
          const p = (m.message ?? {}) as { payload?: { reason?: string; reportedUserId?: string }; type?: string };
          out.push({ id: String(m.timetoken), platform: 'pubnub', reporterId: String(m.uuid ?? 'unknown'), targetId: p.payload?.reportedUserId ?? 'unknown', reason: p.payload?.reason ?? '', source: 'vendor-api', at: new Date(Number(m.timetoken) / 10000).toISOString() });
        }
      } catch {
        /* channel may not exist yet */
      }
    }
    return out;
  },

  async isOnline(userId: UserId) {
    try {
      const r = await sdk().whereNow({ uuid: userId });
      return r.channels.length > 0;
    } catch {
      return undefined;
    }
  },

  describe() {
    return { region: env.get('PUBNUB_REGION') || 'not set', plan: env.get('PUBNUB_PLAN') || 'not set', origin: 'ps.pndsn.com (single global origin)' };
  },
};

void moderationStore;
register(pubnubVendor);
