/**
 * stream-chat v9 types custom data through declaration merging: whatever we add to these interfaces
 * becomes part of Attachment / ChannelData / Message everywhere. This is the documented way to type
 * custom fields (https://getstream.io/chat/docs/javascript/typescript/).
 */
import type { Lang, OrderCard } from '@mkt/shared';

declare module 'stream-chat' {
  interface CustomAttachmentData {
    /** The order card payload, on attachments of type "order_card". */
    card?: OrderCard;
  }
  interface CustomChannelData {
    orderId?: string;
    listingId?: string;
    name?: string;
  }
  interface CustomMessageData {
    /** Built translation fallback, used only when Stream's own auto-translation is not enabled on the plan. */
    translations?: Partial<Record<Lang, string>>;
  }
}
