import { moderate } from '@mkt/shared';

export interface Report {
  id: string;
  platform: string;
  reporterId: string;
  targetId: string;
  reason: string;
  /** `queue` = our built moderation queue; `webhook` = arrived via the vendor's webhook; `vendor-api` = read back from the vendor. */
  source: 'queue' | 'webhook' | 'vendor-api';
  at: string;
  raw?: unknown;
}

const reports: Report[] = [];
const webhookLog: { platform: string; at: string; event: string; body: unknown }[] = [];
const blockedLog: { platform: string; at: string; text: string; matches: string[]; senderId?: string }[] = [];

export const moderationStore = {
  addReport(r: Omit<Report, 'id' | 'at'>): Report {
    const full: Report = { ...r, id: `rep_${Date.now()}_${reports.length}`, at: new Date().toISOString() };
    reports.push(full);
    return full;
  },
  reports(platform?: string): Report[] {
    return platform ? reports.filter((r) => r.platform === platform) : reports.slice();
  },
  logWebhook(platform: string, event: string, body: unknown): void {
    webhookLog.push({ platform, at: new Date().toISOString(), event, body });
    if (webhookLog.length > 2000) webhookLog.shift();
  },
  webhooks(platform?: string) {
    return platform ? webhookLog.filter((w) => w.platform === platform) : webhookLog.slice();
  },
  logBlocked(platform: string, text: string, matches: string[], senderId?: string): void {
    blockedLog.push({ platform, at: new Date().toISOString(), text, matches, senderId });
  },
  blocked(platform?: string) {
    return platform ? blockedLog.filter((b) => b.platform === platform) : blockedLog.slice();
  },
  reset(platform?: string): void {
    for (const arr of [reports, webhookLog, blockedLog] as unknown[][]) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (!platform || (arr[i] as { platform: string }).platform === platform) arr.splice(i, 1);
      }
    }
  },
  /** Built moderation check: regex from @mkt/shared. */
  check: moderate,
};
