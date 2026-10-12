/**
 * Per-platform facts the harness needs before it runs. Keep this honest: it changes which checks
 * can run (e.g. translation without a provider) and how fast the ordering burst may send.
 */
export interface PlatformFacts {
  name: string;
  /**
   * How translation is satisfied in the adapter. `built` and `native-needs-provider` need
   * TRANSLATION_PROVIDER (or the vendor's own provider key) in .env, otherwise the check is `not run`.
   */
  translation: 'native' | 'native-needs-provider' | 'built' | 'none';
  /** Offline notification (push + email) is documented per vendor, not tested; kept for the matrix note. */
  email: 'native' | 'native-external' | 'built-webhook' | 'built-client' | 'none';
  /** Documented client-side send rate limit used to pace the ordering burst (messages per second). */
  maxSendPerSec: number;
  /** npm package whose version is reported in results. */
  sdkPackage: string;
  kitPackage?: string;
  /** Env var names for the vendor region and plan labels recorded in result files. */
  regionEnv?: string;
  planEnv?: string;
  /** Vendor hosts whose JS transfer is counted when the kit view loads. */
  vendorHosts?: string[];
}

export const PLATFORM_FACTS: Record<string, PlatformFacts> = {
  native: {
    name: 'Native (WebSocket + Postgres + Redis)',
    translation: 'built',
    email: 'native',
    maxSendPerSec: 50,
    sdkPackage: '@mkt/adapter-native',
  },
  sendbird: {
    name: 'Sendbird Chat',
    translation: 'native',
    email: 'built-webhook',
    // Client SDK limit: five messages per second per user and per channel.
    maxSendPerSec: 5,
    sdkPackage: '@sendbird/chat',
    kitPackage: '@sendbird/uikit-react',
    vendorHosts: ['sendbird.com'],
  },
  stream: {
    name: 'Stream Chat',
    translation: 'native',
    email: 'built-webhook',
    // No per-channel messages/second limit documented; per-user limit is 60 requests/min per endpoint, so pace at 1/s to stay under it.
    maxSendPerSec: 1,
    sdkPackage: 'stream-chat',
    kitPackage: 'stream-chat-react',
    vendorHosts: ['stream-io-api.com', 'stream-io-cdn.com', 'getstream.io'],
  },
  talkjs: {
    name: 'TalkJS (Components SDK: @talkjs/core + @talkjs/react-components)',
    translation: 'native',
    email: 'native-external',
    // No documented Data API send limit; REST is 9 req/s sustained. Paced at 5/s to stay under the REST figure.
    maxSendPerSec: 5,
    sdkPackage: '@talkjs/core',
    kitPackage: '@talkjs/react-components',
    vendorHosts: ['talkjs.com'],
  },
  cometchat: {
    name: 'CometChat',
    translation: 'native',
    email: 'built-webhook',
    // No documented WebSocket send limit; REST is 20k/min standard operations. Paced at 5/s.
    maxSendPerSec: 5,
    sdkPackage: '@cometchat/chat-sdk-javascript',
    kitPackage: '@cometchat/chat-uikit-react',
    vendorHosts: ['cometchat.io', 'cometchat.com', 'cc-cluster-2.io', 'cc-edge-2.io'],
  },
  twilio: {
    name: 'Twilio Conversations (classic)',
    translation: 'none',
    email: 'built-webhook',
    // Documented: 30 actions per second per conversation. Paced at 20/s.
    maxSendPerSec: 20,
    sdkPackage: '@twilio/conversations',
    vendorHosts: ['twilio.com'],
  },
  pubnub: {
    name: 'PubNub (Chat SDK)',
    translation: 'none',
    email: 'built-webhook',
    // Documented guidance: keep publish rates at 10 to 15 messages per second per channel. Paced at 10/s.
    maxSendPerSec: 10,
    sdkPackage: '@pubnub/chat',
    vendorHosts: ['pndsn.com', 'pubnub.com'],
  },
  ably: {
    name: 'Ably (Chat SDK)',
    translation: 'none',
    email: 'built-webhook',
    // Documented: 50 messages per second per channel and per connection on every plan. Paced at 25/s.
    maxSendPerSec: 25,
    sdkPackage: '@ably/chat',
    kitPackage: '@ably/chat-react-ui-kit',
    vendorHosts: ['ably.io', 'ably-realtime.com', 'ably.net', 'ably.com'],
  },
  rocketchat: {
    name: 'Rocket.Chat (self-hosted, DDP + REST)',
    translation: 'native-needs-provider',
    email: 'native',
    // Default DDP limit per user per method is 20 calls / 10 s (2/s). Our compose raises it; paced at 5/s and recorded.
    maxSendPerSec: 5,
    sdkPackage: '@mkt/adapter-rocketchat',
    kitPackage: '@mkt/adapter-rocketchat',
    vendorHosts: ['localhost:3000'],
  },
};
