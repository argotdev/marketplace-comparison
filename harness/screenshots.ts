/**
 * Kit-view screenshots: the order card in each platform's kit at the same viewport, plus one side-by-side image.
 * For each platform with a kit: open the adapter view as the buyer, send the order card, then open the kit view as
 * the seller and screenshot it. Platforms without keys are skipped and listed in results/screenshots/README.md.
 *
 *   npx tsx harness/screenshots.ts [platform ...]
 */
import { chromium } from 'playwright';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { OrderCard } from '@mkt/shared';
import { WEB_URL, REPO_ROOT } from './lib/env.ts';
import { api, post } from './lib/api.ts';
import { PLATFORM_FACTS } from './lib/platforms.ts';

const VIEWPORT = { width: 720, height: 800 };
const only = process.argv.slice(2);
const out = resolve(REPO_ROOT, 'results/screenshots');
mkdirSync(out, { recursive: true });

async function main() {
  const browser = await chromium.launch();
  const vendors = await api<{ platform: string; configured: boolean; missingEnv: string[] }[]>('/vendors');
  const done: string[] = [];
  const skipped: string[] = [];
  for (const platform of Object.keys(PLATFORM_FACTS).filter((p) => !only.length || only.includes(p))) {
    const facts = PLATFORM_FACTS[platform];
    const v = vendors.find((x) => x.platform === platform);
    if (!facts.kitPackage) {
      skipped.push(`${platform}: no React UI kit`);
      continue;
    }
    if (!v?.configured) {
      skipped.push(`${platform}: not run, missing .env keys ${v?.missingEnv.join(', ') ?? ''}`);
      continue;
    }
    const orderId = `ord_shot_${Date.now().toString(36)}`;
    await post(`/vendors/${platform}/setup`).catch(() => {});
    await post(`/orders/${orderId}/reset`);
    const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2 });
    try {
      const buyer = await ctx.newPage();
      await buyer.goto(`${WEB_URL}/adapter/${platform}?user=buyer_ana&order=${orderId}`);
      await buyer.waitForFunction(() => window.__chat?.state === 'ready', null, { timeout: 60000 });
      const card = await api<OrderCard>(`/order-card/${orderId}`);
      await buyer.evaluate((c) => window.__chat!.sendCard(c), card);
      await buyer.evaluate(() => window.__chat!.sendText('¡Hola Ben! ¿Puedes enviarla esta semana?'));
      const seller = await ctx.newPage();
      await seller.goto(`${WEB_URL}/kit/${platform}?user=seller_ben&order=${orderId}`);
      // Wait for the kit to render the card (or give it 15 s and shoot whatever is there, noting it).
      const sawCard = await seller
        .waitForSelector('[data-testid=order-card], [data-kit] iframe', { timeout: 20000 })
        .then(() => true)
        .catch(() => false);
      await seller.waitForTimeout(2500);
      const file = resolve(out, `${platform}-kit.png`);
      await seller.screenshot({ path: file, clip: { x: 0, y: 0, ...VIEWPORT } });
      done.push(`${platform}: ${file.replace(REPO_ROOT + '/', '')}${sawCard ? '' : ' (card not detected in the kit before the screenshot)'}`);
      console.log(`[screenshots] ${platform} -> ${file}`);
      await buyer.evaluate(() => window.__chat!.disconnect()).catch(() => {});
    } catch (e) {
      skipped.push(`${platform}: failed: ${(e as Error).message.split('\n')[0]}`);
    } finally {
      await ctx.close();
    }
  }
  // Side-by-side composite of whatever was captured.
  const files = done.map((d) => d.split(': ')[1].split(' ')[0]).filter((f) => existsSync(resolve(REPO_ROOT, f)));
  if (files.length) {
    const page = await browser.newPage({ viewport: { width: VIEWPORT.width * files.length + 16 * (files.length + 1), height: VIEWPORT.height + 64 }, deviceScaleFactor: 1 });
    const imgs = files.map((f) => `<figure style="margin:0"><img src="data:image/png;base64,${readFileSync(resolve(REPO_ROOT, f)).toString('base64')}" width="${VIEWPORT.width}" height="${VIEWPORT.height}"/><figcaption style="font:14px system-ui;text-align:center;padding:8px">${f.replace('results/screenshots/', '').replace('-kit.png', '')}</figcaption></figure>`).join('');
    await page.setContent(`<body style="margin:0;background:#f6f6f4;display:flex;gap:16px;padding:16px">${imgs}</body>`);
    await page.screenshot({ path: resolve(out, 'side-by-side.png'), fullPage: true });
    console.log('[screenshots] side-by-side.png');
  }
  writeFileSync(resolve(out, 'README.md'), ['# Kit view screenshots', '', `Viewport ${VIEWPORT.width}x${VIEWPORT.height} at 2x, seller view of the order card inside each vendor kit. Taken ${new Date().toISOString()}.`, '', ...done.map((d) => `- ${d}`), ...skipped.map((s) => `- ${s}`), ''].join('\n'));
  await browser.close();
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
