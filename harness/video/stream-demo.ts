/**
 * Scripted 60 to 90 second recording of the Stream build: order card, a phone number being blocked, translation.
 * Two browser contexts (buyer, seller) are recorded; the buyer's video is the main take and the seller's the
 * reaction shot. Paced with pauses so a viewer can follow. Output: results/video/stream-demo/*.webm (+ mp4 via ffmpeg if present).
 *
 *   npx tsx harness/video/stream-demo.ts
 */
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
import { mkdirSync, readdirSync, renameSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { OrderCard } from '@mkt/shared';
import { WEB_URL, REPO_ROOT } from '../lib/env.ts';
import { api, post } from '../lib/api.ts';

const PLATFORM = 'stream';
const out = resolve(REPO_ROOT, 'results/video/stream-demo');
mkdirSync(out, { recursive: true });
const pause = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function type(page: import('playwright').Page, text: string) {
  await page.click('[data-testid=composer]');
  await page.keyboard.type(text, { delay: 55 });
  await pause(600);
  await page.keyboard.press('Enter');
}

async function main() {
  const vendors = await api<{ platform: string; configured: boolean; missingEnv: string[] }[]>('/vendors');
  const v = vendors.find((x) => x.platform === PLATFORM);
  if (!v?.configured) {
    writeFileSync(resolve(out, 'NOT_RUN.md'), `Not run: Stream is not configured (missing ${v?.missingEnv.join(', ')}).\n`);
    console.log('[video] not run: Stream keys missing');
    return;
  }
  const translation = (await api<{ provider: string | null }>('/translate/status')).provider;
  const orderId = `ord_demo_${Date.now().toString(36)}`;
  await post(`/vendors/${PLATFORM}/setup`);
  await post(`/orders/${orderId}/reset`);
  const browser = await chromium.launch();
  const mk = async (user: string) => {
    const ctx = await browser.newContext({ viewport: { width: 720, height: 800 }, recordVideo: { dir: out, size: { width: 720, height: 800 } } });
    const page = await ctx.newPage();
    await page.goto(`${WEB_URL}/adapter/${PLATFORM}?user=${user}&order=${orderId}`);
    await page.waitForFunction(() => window.__chat?.state === 'ready', null, { timeout: 60000 });
    return { ctx, page };
  };
  const t0 = Date.now();
  const seller = await mk('seller_ben');
  const buyer = await mk('buyer_ana');
  await pause(2500);

  // 1. The order card (buyer sends, seller sees it; seller moves the order to "shipped" and both cards update).
  const card = await api<OrderCard>(`/order-card/${orderId}`);
  await buyer.page.evaluate((c) => window.__chat!.sendCard(c), card);
  await pause(4000);
  await seller.page.click('[data-testid=status-paid]');
  await pause(3500);
  await seller.page.click('[data-testid=status-shipped]');
  await pause(4500);

  // 2. A phone number is blocked.
  await type(buyer.page, 'Call me at 415-555-0134');
  await pause(5000);
  await type(buyer.page, 'Is the 54cm frame still available?');
  await pause(4000);

  // 3. Translation (Stream's own if the plan allows it, otherwise the server provider).
  await type(buyer.page, '¿Todavía está disponible el cuadro de 54 cm?');
  await pause(5000);
  await type(seller.page, 'Yes, it is still available. Shipping tomorrow.');
  await pause(6000);

  const elapsed = Math.round((Date.now() - t0) / 1000);
  await buyer.page.evaluate(() => window.__chat!.disconnect()).catch(() => {});
  await seller.page.evaluate(() => window.__chat!.disconnect()).catch(() => {});
  const buyerVideo = await buyer.page.video()?.path();
  const sellerVideo = await seller.page.video()?.path();
  await buyer.ctx.close();
  await seller.ctx.close();
  await browser.close();
  if (buyerVideo) renameSync(buyerVideo, resolve(out, 'buyer.webm'));
  if (sellerVideo) renameSync(sellerVideo, resolve(out, 'seller.webm'));
  try {
    execSync(`ffmpeg -y -loglevel error -i "${resolve(out, 'buyer.webm')}" -i "${resolve(out, 'seller.webm')}" -filter_complex hstack=inputs=2 "${resolve(out, 'stream-demo.mp4')}"`);
  } catch {
    console.log('[video] ffmpeg side-by-side not produced');
  }
  writeFileSync(resolve(out, 'README.md'), `# Stream demo recording\n\nRecorded ${new Date().toISOString()}, ${elapsed} s wall clock, order ${orderId}. Translation provider: ${translation ?? 'Stream auto-translation only'}.\n\nFiles: ${readdirSync(out).filter((f) => !f.endsWith('.md')).join(', ')}.\n\nSequence: order card sent by the buyer and moved to paid then shipped by the seller; "Call me at 415-555-0134" blocked while "Is the 54cm frame still available?" goes through; Spanish to English and English to Spanish translation.\n`);
  console.log(`[video] ${elapsed} s recorded -> ${out}`);
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
