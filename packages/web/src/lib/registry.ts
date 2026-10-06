import type { AdapterFactory, PlatformId } from '@mkt/shared';
import type { ComponentType } from 'react';

export interface AdapterModule {
  createAdapter: AdapterFactory;
  meta: { platform: PlatformId; name: string; hasKit: boolean };
}

export interface KitProps {
  userId: string;
  orderId: string;
}

/** Dynamic imports keep each vendor SDK out of every other platform's page. */
export const adapters: Record<PlatformId, (() => Promise<AdapterModule>) | null> = {
  native: () => import('@mkt/adapter-native'),
  sendbird: () => import('@mkt/adapter-sendbird'),
  stream: () => import('@mkt/adapter-stream'),
  talkjs: () => import('@mkt/adapter-talkjs'),
  cometchat: () => import('@mkt/adapter-cometchat'),
  twilio: () => import('@mkt/adapter-twilio'),
  pubnub: () => import('@mkt/adapter-pubnub'),
  ably: () => import('@mkt/adapter-ably'),
  rocketchat: () => import('@mkt/adapter-rocketchat'),
};

/** Kit views: vendor UI kits mounted with the order card rendered through the kit's own API. */
export const kits: Record<PlatformId, (() => Promise<{ default: ComponentType<KitProps> }>) | null> = {
  native: null,
  sendbird: () => import('@mkt/adapter-sendbird/kit'),
  stream: () => import('@mkt/adapter-stream/kit'),
  talkjs: () => import('@mkt/adapter-talkjs/kit'),
  cometchat: () => import('@mkt/adapter-cometchat/kit'),
  twilio: () => import('@mkt/adapter-twilio/kit'),
  pubnub: () => import('@mkt/adapter-pubnub/kit'),
  ably: () => import('@mkt/adapter-ably/kit'),
  rocketchat: () => import('@mkt/adapter-rocketchat/kit'),
};
