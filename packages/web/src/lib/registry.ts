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
  sendbird: null,
  stream: null,
  talkjs: null,
  cometchat: null,
  twilio: null,
  pubnub: null,
  ably: null,
  rocketchat: null,
};

/** Kit views: vendor UI kits mounted with the order card rendered through the kit's own API. */
export const kits: Record<PlatformId, (() => Promise<{ default: ComponentType<KitProps> }>) | null> = {
  native: null,
  sendbird: null,
  stream: null,
  talkjs: null,
  cometchat: null,
  twilio: null,
  pubnub: null,
  ably: null,
  rocketchat: null,
};
