import type { Lang, OrderCard } from '@mkt/shared';
declare module 'stream-chat' {
  interface CustomAttachmentData { card?: OrderCard }
  interface CustomChannelData { orderId?: string; listingId?: string; name?: string }
  interface CustomMessageData { translations?: Partial<Record<Lang, string>> }
}
