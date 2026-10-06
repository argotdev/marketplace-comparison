/**
 * Per-platform facts the harness needs before it runs. Keep this honest: it changes which checks
 * can run (e.g. translation without a provider) and how fast the ordering burst may send.
 */
export interface PlatformFacts {
  name: string;
  /** How translation is satisfied in the adapter. `built` needs TRANSLATION_PROVIDER in .env. */
  translation: 'native' | 'built' | 'none';
  /** How the email fallback is satisfied. */
  email: 'native' | 'built-webhook' | 'built-client' | 'none';
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
};
