/**
 * Stream server half: stream-chat (same package as the browser SDK) with the API secret for tokens,
 * channel type + block lists + moderation policy, message edits, webhooks and the review queue;
 * @stream-io/node-sdk for Feeds v3 (feed group + listing activities).
 * Docs: https://getstream.io/chat/docs/node/ and https://getstream.io/activity-feeds/docs/node/
 */
import type { Request } from 'express';
import { StreamChat } from 'stream-chat';
import { StreamClient } from '@stream-io/node-sdk';
import { channelIdForOrder, LISTING, USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';
import { notifyOffline } from '../routes.ts';
import { orders } from '../orders.ts';

const REQUIRED = ['STREAM_API_KEY', 'STREAM_API_SECRET'];
const CHANNEL_TYPE = 'order';
const FEED_GROUP = 'listing';

let chat: StreamChat | null = null;
let feeds: StreamClient | null = null;
function chatClient(): StreamChat {
  if (!chat) chat = StreamChat.getInstance(env.get('STREAM_API_KEY'), env.get('STREAM_API_SECRET'), { timeout: 10000 });
  return chat;
}
function feedsClient(): StreamClient {
  if (!feeds) feeds = new StreamClient(env.get('STREAM_API_KEY'), env.get('STREAM_API_SECRET'));
  return feeds;
}

/** Block lists: a regex list for phone numbers, an email list, and a word list for off-platform payment. */
const BLOCK_LISTS = [
  { name: 'mkt_phone_regex', type: 'regex', words: ['(\\+\\d{1,3}[ .-]?)?(\\(?\\d{2,4}\\)?[ .-]){1,3}\\d{3,4}\\b'] },
  { name: 'mkt_email_regex', type: 'regex', words: ['[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}'] },
  { name: 'mkt_off_platform', type: 'word', words: ['venmo', 'paypal', 'zelle', 'cash app', 'cashapp', 'revolut', 'western union', 'bitcoin', 'crypto', 'whatsapp', 'telegram', 'signal'] },
];

export const streamVendor: ServerVendor = {
  platform: 'stream',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    const c = chatClient();
    await c.upsertUsers(Object.values(USERS).map((u) => ({ id: u.id, name: u.name, language: u.lang, role: 'user' })));
    notes.push('users upserted');

    // Channel type "order": typing + read events, uploads, 2 KB custom data, members can add members (escalation).
    try {
      await c.getChannelType(CHANNEL_TYPE);
    } catch {
      await c.createChannelType({ name: CHANNEL_TYPE, typing_events: true, read_events: true, connect_events: true, uploads: true, reactions: false, replies: false, search: true, max_message_length: 5000, automod: 'disabled' });
      notes.push(`channel type "${CHANNEL_TYPE}" created`);
    }
    try {
      await c.updateChannelType(CHANNEL_TYPE, {
        grants: { channel_member: ['read-channel', 'create-message', 'update-message-owner', 'delete-message-owner', 'upload-attachment', 'send-typing-event', 'read-message-flag', 'flag-message', 'update-channel-members', 'add-links', 'send-custom-event'] },
      });
      notes.push('channel_member grants include update-channel-members (Get help adds the agent client-side)');
    } catch (e) {
      notes.push(`grants not updated: ${(e as Error).message}`);
    }

    // Block lists (regex + word) and the v2 moderation policy for key chat:order.
    for (const bl of BLOCK_LISTS) {
      try {
        await c.createBlockList(bl);
      } catch (e) {
        if (!/already exists|duplicate/i.test((e as Error).message)) notes.push(`block list ${bl.name}: ${(e as Error).message}`);
      }
    }
    try {
      await c.moderation.upsertConfig({
        key: `chat:${CHANNEL_TYPE}`,
        block_list_config: { enabled: true, rules: BLOCK_LISTS.map((b) => ({ name: b.name, action: 'remove' as const })) },
        // Platform-circumvention (phone/email/off-platform) and semantic filters: try them; record if the plan refuses.
        automod_platform_circumvention_config: { enabled: true, rules: [{ label: 'PLATFORM_CIRCUMVENTION', action: 'remove', threshold: 0.7 }] },
      });
      notes.push('moderation policy chat:order upserted (block lists -> remove; AI platform-circumvention -> remove)');
    } catch (e) {
      notes.push(`moderation policy upsert failed (plan gate?): ${(e as Error).message}`);
      try {
        await c.updateChannelType(CHANNEL_TYPE, { blocklist: 'mkt_phone_regex', blocklist_behavior: 'block' });
        notes.push('fallback: legacy single blocklist on channel type (phone regex only)');
      } catch (e2) {
        notes.push(`legacy blocklist also failed: ${(e2 as Error).message}`);
      }
    }

    // Auto-translation (Elevate+ on the Chat pricing page). Record what the app accepts.
    try {
      await c.updateAppSettings({ auto_translation_enabled: true });
      notes.push('auto_translation_enabled: true accepted');
    } catch (e) {
      notes.push(`auto_translation_enabled refused (gated?): ${(e as Error).message}`);
    }

    // Webhook (all plans).
    if (env.PUBLIC_URL.startsWith('https://')) {
      try {
        await c.updateAppSettings({
          event_hooks: [{ enabled: true, hook_type: 'webhook', webhook_url: `${env.PUBLIC_URL}/api/webhooks/stream`, event_types: ['message.new', 'message.updated', 'message.flagged', 'user.flagged', 'member.added'] }],
        });
        notes.push(`webhook set to ${env.PUBLIC_URL}/api/webhooks/stream`);
      } catch (e) {
        notes.push(`webhook not set: ${(e as Error).message}`);
      }
    } else notes.push('webhook not set: PUBLIC_URL is not https');

    // Feeds v3: feed group "listing" for listing updates.
    try {
      await feedsClient().feeds.createFeedGroup({ id: FEED_GROUP, default_visibility: 'public' });
      notes.push(`feed group "${FEED_GROUP}" created`);
    } catch (e) {
      if (/exists/i.test((e as Error).message)) notes.push(`feed group "${FEED_GROUP}" exists`);
      else notes.push(`feed group not created (Feeds enabled on the app?): ${(e as Error).message}`);
    }
    return { notes };
  },

  async issueToken(user: AppUser) {
    const c = chatClient();
    await c.upsertUser({ id: user.id, name: user.name, language: user.lang });
    const exp = Math.floor(Date.now() / 1000) + 24 * 3600;
    const token = c.createToken(user.id, exp);
    let feedsToken = token;
    try {
      feedsToken = feedsClient().generateUserToken({ user_id: user.id, validity_in_seconds: 24 * 3600 });
    } catch {
      /* same signing key; chat token works for feeds too */
    }
    return { token, extra: { apiKey: env.get('STREAM_API_KEY'), feedsToken } };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    await chatClient().partialUpdateMessage(ref.messageId, { set: { attachments: [{ type: 'order_card', card }] } }, 'seller_ben');
    // Also post a listing update to the Feeds product.
    try {
      await feedsClient().feeds.addActivity({ type: 'order_status', feeds: [`${FEED_GROUP}:${LISTING.id}`], text: `Order ${card.orderId} is now ${card.status}`, user_id: 'seller_ben', custom: { orderId: card.orderId, status: card.status } });
    } catch (e) {
      console.warn('[stream] feeds activity failed:', (e as Error).message);
    }
  },

  async fetchOrderChannel(orderId: string) {
    const [ch] = await chatClient().queryChannels({ type: CHANNEL_TYPE, id: channelIdForOrder(orderId) }, {}, { limit: 1, state: true });
    if (!ch) throw new Error('channel not found');
    return { id: ch.id, members: Object.keys(ch.state.members), data: ch.data };
  },

  async addMember(channelId: string, userId: UserId) {
    await chatClient().channel(CHANNEL_TYPE, channelId).addMembers([userId]);
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    const raw = (req as Request & { rawBody?: Buffer }).rawBody ?? Buffer.from(JSON.stringify(req.body ?? {}));
    const sig = String(req.headers['x-signature'] ?? '');
    if (!chatClient().verifyWebhook(raw, sig)) return { events: ['invalid-signature'], reply: { status: 401, body: 'bad signature' } };
    const ev = req.body as { type: string; message?: { text?: string; user?: { id: string } }; channel_id?: string; members?: { user_id: string }[]; user?: { id: string }; target_user?: { id: string }; reason?: string };
    const reports: Report[] = [];
    if (ev.type === 'user.flagged' || ev.type === 'message.flagged') {
      reports.push(moderationStore.addReport({ platform: 'stream', reporterId: ev.user?.id ?? 'unknown', targetId: ev.target_user?.id ?? ev.message?.user?.id ?? 'unknown', reason: ev.reason ?? ev.type, source: 'webhook', raw: ev }));
    }
    if (ev.type === 'message.new' && ev.channel_id && ev.message?.user) {
      const recipients = (ev.members ?? []).map((m) => m.user_id as UserId).filter((id) => id !== ev.message!.user!.id);
      await notifyOffline('stream', ev.channel_id, ev.message.user.id, recipients, ev.message.text ?? '');
    }
    return { events: [ev.type], reports };
  },

  async listReports() {
    const r = await chatClient().moderation.queryReviewQueue({}, [{ created_at: -1 }], { limit: 25 });
    return (r.items ?? []).map((it) => ({
      id: it.id,
      platform: 'stream' as const,
      reporterId: (it.flags?.[0] as { user?: { id?: string } } | undefined)?.user?.id ?? 'unknown',
      targetId: (it as { entity_creator?: { id?: string } }).entity_creator?.id ?? 'unknown',
      reason: it.flags?.map((f) => (f as { reason?: string }).reason ?? '').join(', ') ?? '',
      source: 'vendor-api' as const,
      at: String(it.created_at),
    }));
  },

  async isOnline(userId: UserId) {
    try {
      const r = await chatClient().queryUsers({ id: userId }, {}, { presence: true });
      return r.users[0]?.online;
    } catch {
      return undefined;
    }
  },

  describe() {
    return { region: env.get('STREAM_REGION') || 'not set', plan: env.get('STREAM_PLAN') || 'not set', channelType: CHANNEL_TYPE, feedGroup: FEED_GROUP, orderRefs: orders.cardRefsFor('ord_1001').length };
  },
};

register(streamVendor);
