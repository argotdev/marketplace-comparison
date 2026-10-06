/** Platform identifiers. `sendbird` is the baseline every other build is compared with. */
export const PLATFORMS = [
  'native',
  'sendbird',
  'stream',
  'talkjs',
  'cometchat',
  'twilio',
  'pubnub',
  'ably',
  'rocketchat',
] as const;
export type PlatformId = (typeof PLATFORMS)[number];

export function isPlatform(x: string): x is PlatformId {
  return (PLATFORMS as readonly string[]).includes(x);
}

export type UserId = 'buyer_ana' | 'seller_ben' | 'agent_sam';
export type Lang = 'es' | 'en';

export interface AppUser {
  id: UserId;
  name: string;
  /** Language the user writes and reads in. */
  lang: Lang;
  role: 'buyer' | 'seller' | 'agent';
  email: string;
}

export const USERS: Record<UserId, AppUser> = {
  buyer_ana: { id: 'buyer_ana', name: 'Ana', lang: 'es', role: 'buyer', email: 'ana@example.test' },
  seller_ben: { id: 'seller_ben', name: 'Ben', lang: 'en', role: 'seller', email: 'ben@example.test' },
  agent_sam: { id: 'agent_sam', name: 'Sam (support)', lang: 'en', role: 'agent', email: 'sam@example.test' },
};

export interface Listing {
  id: string;
  title: string;
  priceUsd: number;
  currency: 'USD';
  imageUrl: string;
  sellerId: UserId;
}

export const LISTING: Listing = {
  id: 'lst_bike_54',
  title: 'Used road bike, 54cm',
  priceUsd: 240,
  currency: 'USD',
  imageUrl: '/listing-bike.png',
  sellerId: 'seller_ben',
};

export const ORDER_STATUSES = ['placed', 'paid', 'shipped', 'delivered'] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export interface Order {
  id: string;
  listingId: string;
  buyerId: UserId;
  sellerId: UserId;
  status: OrderStatus;
  updatedAt: string;
}

export const DEFAULT_ORDER_ID = 'ord_1001';

/**
 * The order card payload. This exact shape is what every adapter sends as a custom
 * message and what the benchmark uses as its message payload.
 */
export interface OrderCard {
  orderId: string;
  listingTitle: string;
  priceUsd: number;
  imageUrl: string;
  status: OrderStatus;
  /** Set by the benchmark harness so the receiver can correlate arrivals. Absent in the app. */
  benchId?: string;
  /** Sequence number used by the ordering benchmark. */
  seq?: number;
}

export const ORDER_CARD_TYPE = 'order_card';

export function orderCardFrom(order: Order, listing: Listing): OrderCard {
  return {
    orderId: order.id,
    listingTitle: listing.title,
    priceUsd: listing.priceUsd,
    imageUrl: listing.imageUrl,
    status: order.status,
  };
}

/** Deterministic channel id for an order. Every platform uses it as the channel/room/conversation id. */
export function channelIdForOrder(orderId: string): string {
  return `order-${orderId}`;
}
