import type { AppUser, Order, OrderCard, PlatformId, UserId } from './domain.ts';

export type Unsubscribe = () => void;

export interface ChatMessage {
  id: string;
  /** Platform-neutral kind. `order_card` carries `card`; `attachment` carries `attachmentUrl`. */
  kind: 'text' | 'order_card' | 'attachment' | 'system';
  senderId: string;
  /** Text as the *current* user should read it (translated when translation applies). */
  text?: string;
  /** Original untranslated text when `text` is a translation. */
  originalText?: string;
  card?: OrderCard;
  attachmentUrl?: string;
  attachmentName?: string;
  /** Milliseconds since epoch according to the platform. Not used for latency measurement. */
  createdAt: number;
  /** True when the platform delivered a masked/edited version rather than the original. */
  moderated?: boolean;
  raw?: unknown;
}

export interface SendResult {
  messageId: string;
  /** True when the platform accepted the send but blocked or masked the content. */
  blocked?: boolean;
}

export interface ReadEvent {
  userId: string;
  /** Newest message id the user has read, when the platform exposes it. */
  lastReadMessageId?: string;
  at: number;
}

export interface TypingEvent {
  userId: string;
  typing: boolean;
}

export interface ChannelInfo {
  id: string;
  memberIds: string[];
  /** Custom metadata as stored on the platform (must include orderId and listingId). */
  data: Record<string, unknown>;
}

export interface ConnectOptions {
  /** Token or credential issued by our server for this user and platform. */
  token: string;
  /** Extra per-platform values the server returned alongside the token (app id, keys, etc.). */
  extra?: Record<string, string>;
}

/**
 * The one interface every platform implements. The React UI, the Playwright requirement
 * checks and the benchmark harness only ever talk to this.
 */
export interface ChatAdapter {
  readonly platform: PlatformId;
  readonly user: AppUser;

  /** Authenticate and open the socket. Resolves when the client can send in a channel. */
  connect(opts: ConnectOptions): Promise<void>;
  /** Create or open the 1:1 buyer/seller channel for the order, storing order and listing ids on it. */
  openOrderChannel(order: Order): Promise<ChannelInfo>;
  getChannelInfo(): Promise<ChannelInfo>;

  sendText(text: string): Promise<SendResult>;
  sendOrderCard(card: OrderCard): Promise<SendResult>;
  /** Change an already-sent card in place. Both sides must see the update without reload. */
  updateOrderCard(messageId: string, card: OrderCard): Promise<void>;
  sendAttachment(file: File): Promise<SendResult>;

  /** Load history as the current user can read it (used for the "agent can read earlier messages" check). */
  getMessages(limit?: number): Promise<ChatMessage[]>;
  onMessage(cb: (m: ChatMessage) => void): Unsubscribe;
  /** Fired when an existing message changes (card status update, moderation edit). */
  onMessageUpdated(cb: (m: ChatMessage) => void): Unsubscribe;
  onTyping(cb: (e: TypingEvent) => void): Unsubscribe;
  onRead(cb: (e: ReadEvent) => void): Unsubscribe;

  markAsRead(): Promise<void>;
  setTyping(typing: boolean): Promise<void>;

  /** Report another user for abuse. Must reach a moderation queue or a webhook on our server. */
  reportUser(userId: UserId, reason: string): Promise<void>;
  /** "Get help": add the support agent to this same channel. */
  addSupportAgent(): Promise<void>;

  disconnect(): Promise<void>;

  /** Optional: platform objects for debugging from Playwright (never used by the UI or the checks' assertions). */
  debug?(): Record<string, unknown>;
}

export interface AdapterFactory {
  (user: AppUser): ChatAdapter;
}

/**
 * Describes how a platform satisfies each requirement in *this* adapter, used to build
 * results/requirements-matrix.csv. Filled in by hand per adapter after the checks run.
 */
export type RequirementStatus = 'native' | 'built' | 'gated' | 'unavailable' | 'not run';
