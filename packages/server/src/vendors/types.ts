import type { Request } from 'express';
import type { AppUser, OrderCard, PlatformId, UserId } from '@mkt/shared';
import type { CardMessageRef } from '../orders.ts';
import type { Report } from '../moderation.ts';

export interface TokenResponse {
  token: string;
  /** Non-secret values the browser adapter needs (app id, public keys, hosts). Never put secrets here. */
  extra?: Record<string, string>;
}

export interface WebhookOutcome {
  /** Events the vendor delivered, normalised for the log. */
  events: string[];
  /** Reports found in the payload, already stored. */
  reports?: Report[];
  /** Response body to return to the vendor (some pre-event hooks need a specific shape). */
  reply?: { status: number; body?: unknown; headers?: Record<string, string> };
}

/**
 * Server-side half of a platform integration. Everything the browser cannot or should not do:
 * issue tokens, update a message as the system, add members with elevated rights, receive webhooks,
 * query the vendor for reports, and fetch the order channel for the API round-trip benchmark.
 */
export interface ServerVendor {
  platform: PlatformId;
  /** .env keys this vendor needs before anything can run. */
  requiredEnv: string[];
  configured(): boolean;
  /** Idempotent: create the three users, channel types, etc. Called before checks and benchmarks. */
  setup(): Promise<{ notes: string[] }>;
  issueToken(user: AppUser): Promise<TokenResponse>;
  /** Edit the order card message in place so both members see the new status live. */
  updateOrderCard(ref: CardMessageRef, card: OrderCard): Promise<void>;
  /** Authenticated server-side fetch of the order channel. Timed for the API RTT benchmark. */
  fetchOrderChannel(orderId: string): Promise<unknown>;
  addMember?(channelId: string, userId: UserId): Promise<void>;
  handleWebhook?(req: Request): Promise<WebhookOutcome>;
  /** Ask the vendor for reports/flags so the check can confirm the report landed in its queue. */
  listReports?(): Promise<Report[]>;
  /** Vendor presence, when it exists. Undefined = unknown, fall back to our heartbeat registry. */
  isOnline?(userId: UserId): Promise<boolean | undefined>;
  /** Free-form status for the /api/vendors endpoint and the build log. */
  describe(): Record<string, unknown>;
}
