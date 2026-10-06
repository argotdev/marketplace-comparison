/**
 * Courier location demo: coordinates published over the same PubNub connection as the chat, on channel
 * `courier-<orderId>`, moving a marker on the order page (window.__courier is read by /order/:id).
 */
import type { Chat } from '@pubnub/chat';

export const courierChannel = (orderId: string) => `courier-${orderId}`;

/** A short loop around Baltimore's Inner Harbor, one point per second. */
const PATH: [number, number][] = [
  [39.2854, -76.6131], [39.2862, -76.6118], [39.2871, -76.6105], [39.2883, -76.6098], [39.2895, -76.6104],
  [39.2904, -76.6122], [39.2898, -76.6141], [39.2886, -76.6152], [39.2872, -76.6148], [39.2861, -76.6139],
];

export function startCourier(chat: Chat, orderId: string): () => void {
  let i = 0;
  const t = setInterval(() => {
    const [lat, lng] = PATH[i++ % PATH.length];
    chat.sdk.publish({ channel: courierChannel(orderId), message: { lat, lng, at: Date.now() }, storeInHistory: false }).catch(() => {});
  }, 1000);
  return () => clearInterval(t);
}

export function watchCourier(chat: Chat, orderId: string): () => void {
  const subscription = chat.sdk.channel(courierChannel(orderId)).subscription();
  subscription.onMessage = (ev) => {
    const m = ev.message as { lat?: number; lng?: number };
    if (typeof m?.lat === 'number' && typeof m?.lng === 'number') (window as unknown as { __courier?: unknown }).__courier = { lat: m.lat, lng: m.lng };
  };
  subscription.subscribe();
  return () => subscription.unsubscribe();
}
