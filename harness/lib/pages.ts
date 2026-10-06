import type { Browser, BrowserContext, Page } from '@playwright/test';
import { WEB_URL } from './env.ts';

export interface ChatPage {
  ctx: BrowserContext;
  page: Page;
  userId: string;
}

/** Open the adapter view for a user and wait until the adapter is connected and the channel is open. */
export async function openChat(browser: Browser, platform: string, userId: string, orderId: string, opts: { auto?: boolean; timeoutMs?: number } = {}): Promise<ChatPage> {
  const ctx = await browser.newContext({ viewport: { width: 720, height: 800 } });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => console.log(`[${userId} pageerror]`, e.message));
  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning') console.log(`[${userId} console.${m.type()}]`, m.text().slice(0, 300));
  });
  await page.goto(`${WEB_URL}/adapter/${platform}?user=${userId}&order=${orderId}&auto=${opts.auto === false ? 0 : 1}`);
  if (opts.auto !== false) await waitReady(page, opts.timeoutMs);
  return { ctx, page, userId };
}

export async function waitReady(page: Page, timeoutMs = 30000): Promise<void> {
  await page.waitForFunction(() => window.__chat && (window.__chat.state === 'ready' || window.__chat.state === 'error'), null, { timeout: timeoutMs });
  const err = await page.evaluate(() => (window.__chat?.state === 'error' ? window.__chat.error : null));
  if (err) throw new Error(`adapter error: ${err}`);
}

/** Run a hook on the page's window.__chat. */
export function hook<K extends keyof NonNullable<Window['__chat']>>(page: Page, name: K, ...args: unknown[]) {
  return page.evaluate(
    async ([n, a]) => {
      const h = window.__chat!;
      const fn = h[n as keyof typeof h] as unknown as (...x: unknown[]) => unknown;
      return await fn.apply(h, a as unknown[]);
    },
    [name, args] as const,
  ) as Promise<Awaited<ReturnType<NonNullable<Window['__chat']>[K] extends (...a: never[]) => infer R ? (...a: never[]) => R : never>>>;
}

/** Texts currently rendered for the user (as that user should read them). */
export async function visibleTexts(page: Page): Promise<string[]> {
  return page.$$eval('[data-testid=message] [data-testid=text]', (els) => els.map((e) => e.textContent ?? ''));
}

/** 1x1 PNG, used as the image attachment on every platform. */
export const TINY_PNG_BASE64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
