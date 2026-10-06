import { EventEmitter } from 'node:events';
import {
  DEFAULT_ORDER_ID,
  LISTING,
  ORDER_STATUSES,
  type Order,
  type OrderStatus,
  type PlatformId,
} from '@mkt/shared';

/** Where a platform stored the order card message, so a status change can update it in place. */
export interface CardMessageRef {
  platform: PlatformId;
  channelId: string;
  messageId: string;
  /** Platform-specific extras needed to update (e.g. Twilio participant/author, PubNub timetoken). */
  extra?: Record<string, string>;
  registeredAt: number;
}

function freshOrder(id = DEFAULT_ORDER_ID): Order {
  return {
    id,
    listingId: LISTING.id,
    buyerId: 'buyer_ana',
    sellerId: 'seller_ben',
    status: 'placed',
    updatedAt: new Date().toISOString(),
  };
}

class OrderService extends EventEmitter {
  private orders = new Map<string, Order>([[DEFAULT_ORDER_ID, freshOrder()]]);
  private cardRefs = new Map<string, CardMessageRef[]>();

  get(id: string): Order | undefined {
    return this.orders.get(id);
  }

  getOrCreate(id: string): Order {
    let o = this.orders.get(id);
    if (!o) {
      o = freshOrder(id);
      this.orders.set(id, o);
    }
    return o;
  }

  setStatus(id: string, status: OrderStatus): Order {
    if (!ORDER_STATUSES.includes(status)) throw new Error(`bad status ${status}`);
    const o = this.getOrCreate(id);
    const updated: Order = { ...o, status, updatedAt: new Date().toISOString() };
    this.orders.set(id, updated);
    this.emit('status', updated, this.cardRefs.get(id) ?? []);
    return updated;
  }

  reset(id: string): Order {
    const o = freshOrder(id);
    this.orders.set(id, o);
    this.cardRefs.delete(id);
    return o;
  }

  registerCardMessage(orderId: string, ref: Omit<CardMessageRef, 'registeredAt'>): void {
    const list = this.cardRefs.get(orderId) ?? [];
    // One live card per platform+channel; a re-sent card replaces the old reference.
    const filtered = list.filter((r) => !(r.platform === ref.platform && r.channelId === ref.channelId));
    filtered.push({ ...ref, registeredAt: Date.now() });
    this.cardRefs.set(orderId, filtered);
  }

  cardRefsFor(orderId: string): CardMessageRef[] {
    return this.cardRefs.get(orderId) ?? [];
  }
}

export const orders = new OrderService();
