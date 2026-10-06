/**
 * JavaScript bytes transferred from vendor hosts when the kit view loads. Catches kits that pull
 * code from a CDN or render inside an iframe, which the npm package size misses.
 *
 *   npm run kit-network -- [platform ...]
 */
import { chromium } from 'playwright';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { WEB_URL, REPO_ROOT } from '../lib/env.ts';
import { PLATFORM_FACTS } from '../lib/platforms.ts';
import { csvEscape } from '../lib/results.ts';

const only = process.argv.slice(2);
const local = new Set(['localhost', '127.0.0.1']);

async function main() {
  const browser = await chromium.launch();
  const rows: string[] = [];
  for (const platform of Object.keys(PLATFORM_FACTS).filter((p) => !only.length || only.includes(p))) {
    const facts = PLATFORM_FACTS[platform];
    if (!facts.kitPackage) {
      rows.push([platform, 'not run', 'not run', 'not run', 'no React UI kit for this platform'].map(csvEscape).join(','));
      continue;
    }
    const ctx = await browser.newContext({ viewport: { width: 720, height: 800 } });
    const page = await ctx.newPage();
    let vendorJs = 0;
    let vendorAll = 0;
    const hosts = new Set<string>();
    page.on('response', async (res) => {
      try {
        const url = new URL(res.url());
        if (local.has(url.hostname)) return;
        const type = res.headers()['content-type'] ?? '';
        const isJs = /javascript|ecmascript/.test(type) || /\.m?js(\?|$)/.test(url.pathname);
        const len = Number(res.headers()['content-length']) || (await res.body().catch(() => Buffer.alloc(0))).length;
        hosts.add(url.hostname);
        vendorAll += len;
        if (isJs) vendorJs += len;
      } catch {
        /* ignore */
      }
    });
    await page.goto(`${WEB_URL}/kit/${platform}?user=seller_ben`);
    await page.waitForTimeout(8000);
    const frames = page.frames().length - 1;
    rows.push([platform, vendorJs, vendorAll, frames, `hosts: ${[...hosts].join(' ')}`].map(csvEscape).join(','));
    console.log(`[kit-network] ${platform}: ${(vendorJs / 1024).toFixed(1)} KB JS from vendor hosts, ${frames} iframe(s), hosts ${[...hosts].join(', ')}`);
    await ctx.close();
  }
  await browser.close();
  const file = resolve(REPO_ROOT, 'results/kit-network.csv');
  const header = 'platform,vendor_js_bytes,vendor_all_bytes,iframes,note';
  const existing = existsSync(file) ? readFileSync(file, 'utf8').trim().split('\n').slice(1) : [];
  const done = new Set(rows.map((r) => r.split(',')[0]));
  writeFileSync(file, [header, ...existing.filter((ln) => !done.has(ln.split(',')[0])), ...rows].join('\n') + '\n');
}
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
