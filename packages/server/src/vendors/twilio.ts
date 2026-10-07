/**
 * Twilio Conversations (classic) server half with the `twilio` Node SDK: Access Tokens with a ChatGrant,
 * service configuration (reachability), webhooks (pre-event rewrite = our moderation; post-event = email
 * fallback), message attribute updates, participants. SMS/WhatsApp participants cost money and are only
 * added by an explicit helper that nothing calls automatically.
 * Docs: https://www.twilio.com/docs/conversations/create-tokens , .../conversations-webhooks , .../api/conversation-participant-resource
 */
import type { Request } from 'express';
import twilio from 'twilio';
import { channelIdForOrder, USERS, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import { register } from './index.ts';
import type { ServerVendor, WebhookOutcome } from './types.ts';
import type { CardMessageRef } from '../orders.ts';
import { moderationStore, type Report } from '../moderation.ts';
import { notifyOffline } from '../routes.ts';
import { orders } from '../orders.ts';

const REQUIRED = ['TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN', 'TWILIO_API_KEY_SID', 'TWILIO_API_KEY_SECRET', 'TWILIO_CONVERSATIONS_SERVICE_SID'];
const { AccessToken } = twilio.jwt;
const { ChatGrant } = AccessToken;

let client: twilio.Twilio | null = null;
function rest(): twilio.Twilio {
  if (!client) client = twilio(env.get('TWILIO_API_KEY_SID'), env.get('TWILIO_API_KEY_SECRET'), { accountSid: env.get('TWILIO_ACCOUNT_SID') });
  return client;
}
const service = () => rest().conversations.v1.services(env.get('TWILIO_CONVERSATIONS_SERVICE_SID'));

/** Conversation SID for an order; created with both participants when missing. */
async function ensureConversation(orderId: string): Promise<string> {
  const uniqueName = channelIdForOrder(orderId);
  try {
    const c = await service().conversations(uniqueName).fetch();
    return c.sid;
  } catch {
    const order = orders.getOrCreate(orderId);
    const c = await service().conversations.create({ uniqueName, friendlyName: `Order ${orderId}`, attributes: JSON.stringify({ orderId, listingId: order.listingId }) });
    for (const id of [order.buyerId, order.sellerId]) await service().conversations(c.sid).participants.create({ identity: id }).catch(() => {});
    return c.sid;
  }
}

export const twilioVendor: ServerVendor = {
  platform: 'twilio',
  requiredEnv: REQUIRED,
  configured: () => env.has(...REQUIRED),

  async setup() {
    const notes: string[] = [];
    for (const u of Object.values(USERS)) {
      await service().users.create({ identity: u.id, friendlyName: u.name, attributes: JSON.stringify({ lang: u.lang, email: u.email }) }).catch(() => {});
    }
    notes.push('users ensured on the Conversations service');
    try {
      await service().configuration().update({ reachabilityEnabled: true });
      notes.push('reachabilityEnabled=true on the service configuration (online presence)');
    } catch (e) {
      notes.push(`reachability not enabled: ${(e as Error).message}`);
    }
    if (env.PUBLIC_URL.startsWith('https://')) {
      try {
        const url = `${env.PUBLIC_URL}/api/webhooks/twilio`;
        await rest().conversations.v1.configuration.webhooks().update({ preWebhookUrl: url, postWebhookUrl: url, method: 'POST', filters: ['onMessageAdd', 'onMessageAdded', 'onMessageUpdated', 'onParticipantAdded'] });
        notes.push(`global pre/post webhooks set to ${url}`);
      } catch (e) {
        notes.push(`webhooks not set: ${(e as Error).message}`);
      }
    } else notes.push('webhooks not set: PUBLIC_URL is not https (moderation and email fallback need the pre/post-event webhooks)');
    notes.push('browser push not evaluated (out of scope); Twilio supports FCM web push per its docs');
    return { notes };
  },

  async issueToken(user: AppUser) {
    const token = new AccessToken(env.get('TWILIO_ACCOUNT_SID'), env.get('TWILIO_API_KEY_SID'), env.get('TWILIO_API_KEY_SECRET'), { identity: user.id, ttl: 3600 });
    token.addGrant(new ChatGrant({ serviceSid: env.get('TWILIO_CONVERSATIONS_SERVICE_SID') }));
    const extra: Record<string, string> = {};
    if (env.get('TWILIO_REGION') && env.get('TWILIO_REGION') !== 'us1') extra.region = env.get('TWILIO_REGION');
    return { token: token.toJwt(), extra };
  },

  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    const sid = ref.extra?.conversationSid ?? (await ensureConversation(ref.channelId.replace(/^order-/, '')));
    await service().conversations(sid).messages(ref.messageId).update({ attributes: JSON.stringify({ type: 'order_card', card }), xTwilioWebhookEnabled: 'true' });
  },

  async fetchOrderChannel(orderId: string) {
    const sid = await ensureConversation(orderId);
    const c = await service().conversations(sid).fetch();
    return { sid: c.sid, uniqueName: c.uniqueName, attributes: c.attributes, state: c.state };
  },

  async addMember(channelId: string, userId: UserId) {
    const sid = channelId.startsWith('CH') ? channelId : await ensureConversation(channelId.replace(/^order-/, ''));
    await service().conversations(sid).participants.create({ identity: userId, xTwilioWebhookEnabled: 'true' });
  },

  async handleWebhook(req: Request): Promise<WebhookOutcome> {
    const signature = String(req.headers['x-twilio-signature'] ?? '');
    const url = `${env.PUBLIC_URL}${req.originalUrl}`;
    const params = (req.body ?? {}) as Record<string, string>;
    if (!twilio.validateRequest(env.get('TWILIO_AUTH_TOKEN'), signature, url, params)) return { events: ['invalid-signature'], reply: { status: 401, body: 'bad signature' } };
    const type = params.EventType;
    if (type === 'onMessageAdd') {
      // Pre-event: Twilio waits for our answer. Rewrite the body with masked contact info (built moderation).
      const r = moderationStore.check(params.Body ?? '');
      if (!r.allowed) {
        moderationStore.logBlocked('twilio', params.Body ?? '', r.matches, params.Author);
        let attrs: Record<string, unknown> = {};
        try {
          attrs = JSON.parse(params.Attributes || '{}') as Record<string, unknown>;
        } catch {
          /* ignore */
        }
        return { events: [type], reply: { status: 200, body: { body: r.masked, attributes: JSON.stringify({ ...attrs, moderated: true }) }, headers: { 'content-type': 'application/json' } } };
      }
      return { events: [type], reply: { status: 200, body: '' } };
    }
    if (type === 'onMessageAdded' && params.ConversationSid && params.Author) {
      const parts = await service().conversations(params.ConversationSid).participants.list({ limit: 50 });
      const recipients = parts.map((p) => p.identity).filter((id): id is string => Boolean(id) && id !== params.Author) as UserId[];
      const conv = await service().conversations(params.ConversationSid).fetch();
      await notifyOffline('twilio', conv.uniqueName ?? params.ConversationSid, params.Author, recipients, params.Body ?? '');
    }
    return { events: [type ?? 'unknown'] };
  },

  async listReports(): Promise<Report[]> {
    return moderationStore.reports('twilio'); // nothing native on Twilio
  },

  async isOnline(userId: UserId) {
    try {
      const u = await service().users(userId).fetch();
      return u.isOnline ?? undefined;
    } catch {
      return undefined;
    }
  },

  describe() {
    return { region: env.get('TWILIO_REGION') || 'us1', plan: env.get('TWILIO_PLAN') || 'not set', smsFrom: env.get('TWILIO_SMS_FROM') ? 'set' : 'not set', whatsappFrom: env.get('TWILIO_WHATSAPP_FROM') ? 'set' : 'not set' };
  },
};

/**
 * Adds the seller's phone as an SMS or WhatsApp participant so a reply from the phone lands in the same
 * conversation. COSTS MONEY (number rental, message fees); nothing calls this until the author confirms.
 */
export async function addPhoneParticipant(orderId: string, via: 'sms' | 'whatsapp'): Promise<string> {
  const phone = env.get('SELLER_PHONE');
  const from = via === 'sms' ? env.get('TWILIO_SMS_FROM') : env.get('TWILIO_WHATSAPP_FROM');
  if (!phone || !from) throw new Error('SELLER_PHONE and TWILIO_SMS_FROM / TWILIO_WHATSAPP_FROM are required');
  const sid = await ensureConversation(orderId);
  const prefix = via === 'whatsapp' ? 'whatsapp:' : '';
  const p = await service().conversations(sid).participants.create({
    'messagingBinding.address': `${prefix}${phone.replace(/^whatsapp:/, '')}`,
    'messagingBinding.proxyAddress': from.startsWith('whatsapp:') || via === 'sms' ? from : `whatsapp:${from}`,
    attributes: JSON.stringify({ identity: 'seller_ben', via }),
  });
  return p.sid;
}

register(twilioVendor);
