/**
 * Browser helpers for talking to our own API server. Adapters use these for the parts a platform
 * does not provide ("built" fallbacks): token exchange, moderation, translation, reports, email.
 */
import type { Lang, PlatformId, UserId } from './domain.ts';
import type { ModerationResult } from './moderation.ts';

export const API_BASE = (globalThis as unknown as { __API_BASE?: string }).__API_BASE || '/api';

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
  if (!res.ok) throw new Error(`${path} -> ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}
async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) throw new Error(`${path} -> ${res.status}: ${await res.text()}`);
  return res.json() as Promise<T>;
}

export const serverApi = {
  token: (platform: PlatformId, userId: UserId) => post<{ token: string; extra?: Record<string, string> }>(`/vendors/${platform}/token`, { userId }),
  setup: (platform: PlatformId) => post<{ notes: string[] }>(`/vendors/${platform}/setup`, {}),
  addMember: (platform: PlatformId, channelId: string, userId: UserId) => post<{ ok: true }>(`/vendors/${platform}/add-member`, { channelId, userId }),
  registerCardMessage: (orderId: string, platform: PlatformId, channelId: string, messageId: string, extra?: Record<string, string>) =>
    post(`/orders/${orderId}/card-message`, { platform, channelId, messageId, extra }),
  moderate: (platform: PlatformId, text: string, senderId: string) => post<ModerationResult>('/moderation/check', { platform, text, senderId }),
  report: (platform: PlatformId, reporterId: string, targetId: string, reason: string) => post('/moderation/report', { platform, reporterId, targetId, reason }),
  translate: (text: string, from: Lang, targets: Lang[] = ['en', 'es']) =>
    post<{ available: boolean; provider?: string; translations: Partial<Record<Lang, string>> }>('/translate', { text, from, targets }),
  translateStatus: () => get<{ provider: string | null }>('/translate/status'),
  heartbeat: (platform: PlatformId, userId: string) => post('/presence/heartbeat', { platform, userId }),
  offline: (platform: PlatformId, userId: string) => post('/presence/offline', { platform, userId }),
  notifyMessage: (platform: PlatformId, channelId: string, fromUserId: string, toUserIds: string[], text: string) =>
    post<{ sent: string[] }>('/notify/message', { platform, channelId, fromUserId, toUserIds, text }),
  order: (id: string) => get(`/orders/${id}`),
  orderCard: (id: string) => get(`/order-card/${id}`),
  setOrderStatus: (id: string, status: string) => post(`/orders/${id}/status`, { status }),
};

/** Pick the text a reader should see from a translations map, falling back to the original. */
export function pickTranslation(translations: Partial<Record<Lang, string>> | undefined, lang: Lang, original: string): string {
  return translations?.[lang] ?? original;
}
