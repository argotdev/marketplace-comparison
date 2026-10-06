import { createHmac } from 'node:crypto';
import { channelIdForOrder, type AppUser, type OrderCard, type UserId } from '@mkt/shared';
import { env } from '../env.ts';
import type { ServerVendor } from './types.ts';
import type { CardMessageRef } from '../orders.ts';

/** Token = `userId.expiresAt.hmac`; the native WebSocket server verifies it with the shared secret. */
export function signNativeToken(userId: string, ttlSec = 3600): string {
  const exp = Math.floor(Date.now() / 1000) + ttlSec;
  const payload = `${userId}.${exp}`;
  const sig = createHmac('sha256', env.NATIVE_TOKEN_SECRET).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

function httpBase(i = 0): string {
  return env.NATIVE_HTTP_URLS[i % env.NATIVE_HTTP_URLS.length];
}

async function internal(path: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(`${httpBase()}${path}`, {
    ...init,
    headers: { 'content-type': 'application/json', 'x-internal-secret': env.NATIVE_TOKEN_SECRET, ...(init?.headers ?? {}) },
  });
  if (!res.ok) throw new Error(`native ${path} -> ${res.status} ${await res.text()}`);
  return res;
}

export const nativeVendor: ServerVendor = {
  platform: 'native',
  requiredEnv: [],
  configured: () => true,
  async setup() {
    return { notes: ['No vendor account. Users are implicit; channels are created on first open.'] };
  },
  async issueToken(user: AppUser) {
    // Deterministic instance choice so buyer and seller sit on different instances and the
    // Redis pub/sub path between instances is exercised on every run.
    const idx = user.role === 'buyer' ? 0 : 1;
    return {
      token: signNativeToken(user.id),
      extra: { wsUrl: env.NATIVE_WS_URLS[idx % env.NATIVE_WS_URLS.length], httpUrl: httpBase(idx) },
    };
  },
  async updateOrderCard(ref: CardMessageRef, card: OrderCard) {
    await internal(`/internal/messages/${encodeURIComponent(ref.messageId)}`, {
      method: 'PATCH',
      body: JSON.stringify({ channelId: ref.channelId, card }),
    });
  },
  async fetchOrderChannel(orderId: string) {
    const res = await internal(`/internal/channels/${encodeURIComponent(channelIdForOrder(orderId))}`);
    return res.json();
  },
  async addMember(channelId: string, userId: UserId) {
    await internal(`/internal/channels/${encodeURIComponent(channelId)}/members`, {
      method: 'POST',
      body: JSON.stringify({ userId }),
    });
  },
  async listReports() {
    const res = await internal('/internal/reports');
    const rows = (await res.json()) as { id: string; reporter_id: string; target_id: string; reason: string; created_at: string }[];
    return rows.map((r) => ({
      id: String(r.id),
      platform: 'native',
      reporterId: r.reporter_id,
      targetId: r.target_id,
      reason: r.reason,
      source: 'queue' as const,
      at: r.created_at,
    }));
  },
  describe() {
    return { ws: env.NATIVE_WS_URLS, http: env.NATIVE_HTTP_URLS, instances: env.NATIVE_WS_URLS.length };
  },
};
