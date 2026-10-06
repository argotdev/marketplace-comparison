import type { ChannelInfo, ChatAdapter, ChatMessage, OrderCard, ReadEvent, SendResult, TypingEvent } from '@mkt/shared';

/**
 * Everything Playwright needs, exposed on window.__chat. The harness never reaches into React state;
 * it drives the adapter through these hooks so every platform is exercised the same way.
 * `__mark(label, id)` is optional and provided by the benchmark harness via page.exposeFunction so
 * all timestamps come from the Node process clock.
 */
export interface ChatTestHooks {
  platform: string;
  userId: string;
  adapter: ChatAdapter | null;
  ready: Promise<ChannelInfo>;
  state: 'idle' | 'connecting' | 'ready' | 'error';
  error?: string;
  channel: ChannelInfo | null;
  messages: ChatMessage[];
  updates: ChatMessage[];
  typing: TypingEvent[];
  reads: ReadEvent[];
  connect: () => Promise<ChannelInfo>;
  sendText: (text: string) => Promise<SendResult>;
  sendCard: (card: OrderCard) => Promise<SendResult & { sendMs: number }>;
  sendAttachment: (name: string, mime: string, base64: string) => Promise<SendResult>;
  markAsRead: () => Promise<void>;
  setTyping: (t: boolean) => Promise<void>;
  reportUser: (userId: string, reason: string) => Promise<void>;
  addSupportAgent: () => Promise<void>;
  getMessages: () => Promise<ChatMessage[]>;
  getChannelInfo: () => Promise<ChannelInfo>;
  disconnect: () => Promise<void>;
}

declare global {
  interface Window {
    __chat?: ChatTestHooks;
    __mark?: (label: string, id?: string) => Promise<number> | void;
    __API_BASE?: string;
  }
}

export function installHooks(h: ChatTestHooks): void {
  window.__chat = h;
}
