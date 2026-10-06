/**
 * Minimal presence registry shared by every build. Clients send a heartbeat every 2 s while the
 * tab is open and an explicit `offline` on disconnect. A user is offline when the last heartbeat is
 * older than TTL_MS. Platforms with their own presence API can override this in their server vendor.
 */
const TTL_MS = 5000;
const last = new Map<string, number>(); // key platform:userId

export const presence = {
  heartbeat(platform: string, userId: string): void {
    last.set(`${platform}:${userId}`, Date.now());
  },
  offline(platform: string, userId: string): void {
    last.delete(`${platform}:${userId}`);
  },
  isOnline(platform: string, userId: string): boolean {
    const t = last.get(`${platform}:${userId}`);
    return t !== undefined && Date.now() - t < TTL_MS;
  },
  snapshot(platform: string): Record<string, boolean> {
    const out: Record<string, boolean> = {};
    for (const [k] of last) {
      const [p, u] = k.split(':');
      if (p === platform) out[u] = this.isOnline(p, u);
    }
    return out;
  },
  TTL_MS,
};
