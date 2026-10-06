/**
 * Benchmark harness. Headless Chromium via Playwright, one page for the sender and one for the
 * receiver. Every timestamp is taken in this Node process (performance.now()) through
 * window.__mark, which the pages call right before the SDK send call and inside the receive callback.
 *
 *   PLATFORM=native npm run bench -- [--runs 30] [--messages 200] [--warmup 10] [--burst 50] [--api 50] [--only connect,latency,ordering,api]
 */
import { chromium, type Browser, type BrowserContext, type Page } from 'playwright';
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { performance } from 'node:perf_hooks';
import type { OrderCard } from '@mkt/shared';
import { PLATFORM, WEB_URL, REGION_LABEL, REPO_ROOT } from '../lib/env.ts';
import { api, post, sleep } from '../lib/api.ts';
import { PLATFORM_FACTS } from '../lib/platforms.ts';
import { summarize, r2, type Summary } from '../lib/stats.ts';
import { runMeta, type RunMeta } from '../lib/meta.ts';
import { csvEscape } from '../lib/results.ts';

const args = Object.fromEntries(
  process.argv.slice(2).map((a, i, arr) => (a.startsWith('--') ? [a.slice(2), arr[i + 1]?.startsWith('--') || arr[i + 1] === undefined ? 'true' : arr[i + 1]] : [])).filter((x) => x.length),
) as Record<string, string>;
const RUNS = Number(args.runs ?? 30);
const MESSAGES = Number(args.messages ?? 200);
const WARMUP = Number(args.warmup ?? 10);
const BURST = Number(args.burst ?? 50);
const API_CALLS = Number(args.api ?? 50);
const ONLY = (args.only ?? 'connect,latency,ordering,api').split(',');
const facts = PLATFORM_FACTS[PLATFORM];
if (!facts) throw new Error(`no PLATFORM_FACTS for ${PLATFORM}`);

interface Mark {
  label: string;
  id?: string;
  t: number;
  /** Which page produced the mark. Adapters that echo the sender's own message would otherwise count as a receive. */
  role: 'sender' | 'receiver' | 'solo';
}

async function newPage(browser: Browser, marks: Mark[], role: Mark['role'] = 'solo'): Promise<{ ctx: BrowserContext; page: Page }> {
  const ctx = await browser.newContext({ viewport: { width: 720, height: 800 } });
  const page = await ctx.newPage();
  await page.exposeFunction('__mark', (label: string, id?: string) => {
    marks.push({ label, id, t: performance.now(), role });
  });
  page.on('pageerror', (e) => console.log(`  [pageerror] ${e.message}`));
  return { ctx, page };
}

async function waitReady(page: Page, timeoutMs = 60000) {
  await page.waitForFunction(() => window.__chat && (window.__chat.state === 'ready' || window.__chat.state === 'error'), null, { timeout: timeoutMs });
  const err = await page.evaluate(() => (window.__chat?.state === 'error' ? window.__chat.error : null));
  if (err) throw new Error(`adapter error: ${err}`);
}

async function main() {
  const browser = await chromium.launch();
  const meta = await runMeta(PLATFORM, `Chromium ${browser.version()}`);
  const orderId = `ord_bench_${Date.now().toString(36)}`;
  console.log(`[bench] ${PLATFORM} region=${REGION_LABEL} order=${orderId} sdk=${meta.sdk.package}@${meta.sdk.version} ${meta.browser}`);

  const vendors = await api<{ platform: string; configured: boolean; missingEnv: string[] }[]>('/vendors');
  const v = vendors.find((x) => x.platform === PLATFORM);
  if (!v?.configured) throw new Error(`${PLATFORM} not configured (missing ${v?.missingEnv.join(',')})`);
  await post(`/vendors/${PLATFORM}/setup`);
  await post(`/orders/${orderId}/reset`);
  const baseCard = await api<OrderCard>(`/order-card/${orderId}`);

  const out: Record<string, unknown> = { meta, orderId, params: { RUNS, MESSAGES, WARMUP, BURST, API_CALLS }, payload: baseCard };

  // --- hook overhead calibration: page -> Node round trip through __mark ---------------------------
  {
    const marks: Mark[] = [];
    const { ctx, page } = await newPage(browser, marks);
    await page.goto(`${WEB_URL}/adapter/${PLATFORM}?user=buyer_ana&order=${orderId}&auto=0`);
    const rtts: number[] = [];
    for (let i = 0; i < 20; i++) {
      const t0 = performance.now();
      await page.evaluate(() => void window.__mark!('cal'));
      rtts.push(performance.now() - t0);
    }
    out.hookOverheadMs = summarize(rtts);
    console.log(`[bench] __mark round trip p50 ${r2((out.hookOverheadMs as Summary).p50)} ms (upper bound on per-mark error)`);
    await ctx.close();
  }

  // --- connect time: cold, new browser context each run -------------------------------------------
  if (ONLY.includes('connect')) {
    const samples: { run: number; connectMs: number; error?: string }[] = [];
    for (let i = 0; i < RUNS; i++) {
      const marks: Mark[] = [];
      const { ctx, page } = await newPage(browser, marks);
      try {
        await page.goto(`${WEB_URL}/adapter/${PLATFORM}?user=buyer_ana&order=${orderId}&auto=0`);
        await page.waitForFunction(() => Boolean(window.__chat), null, { timeout: 30000 });
        await page.evaluate(() => window.__chat!.connect());
        const start = marks.find((m) => m.label === 'connect:start')?.t;
        const ready = marks.find((m) => m.label === 'connect:ready')?.t;
        if (start === undefined || ready === undefined) throw new Error('missing connect marks');
        samples.push({ run: i, connectMs: ready - start });
        process.stdout.write(`  connect ${i + 1}/${RUNS}: ${r2(ready - start)} ms\r`);
        await page.evaluate(() => window.__chat!.disconnect()).catch(() => {});
      } catch (e) {
        samples.push({ run: i, connectMs: NaN, error: String((e as Error).message ?? e) });
        console.log(`  connect ${i + 1}/${RUNS}: ERROR ${(e as Error).message}`);
      } finally {
        await ctx.close();
      }
      await sleep(300);
    }
    out.connect = { samples, summary: summarize(samples.map((s) => s.connectMs)), errors: samples.filter((s) => s.error).length };
    console.log(`\n[bench] connect p50 ${r2((out.connect as { summary: Summary }).summary.p50)} p95 ${r2((out.connect as { summary: Summary }).summary.p95)} ms`);
  }

  // --- send -> receive latency ----------------------------------------------------------------------
  if (ONLY.includes('latency') || ONLY.includes('ordering')) {
    const marks: Mark[] = [];
    const sender = await newPage(browser, marks, 'sender');
    const receiver = await newPage(browser, marks, 'receiver');
    await receiver.page.goto(`${WEB_URL}/adapter/${PLATFORM}?user=seller_ben&order=${orderId}`);
    await waitReady(receiver.page);
    await sender.page.goto(`${WEB_URL}/adapter/${PLATFORM}?user=buyer_ana&order=${orderId}`);
    await waitReady(sender.page);
    await sleep(1000);

    if (ONLY.includes('latency')) {
      const total = WARMUP + MESSAGES;
      for (let i = 0; i < total; i++) {
        const t0 = performance.now();
        const card: OrderCard = { ...baseCard, benchId: `lat${i}`, seq: i };
        await sender.page.evaluate((c) => window.__chat!.sendCard(c), card).catch((e) => console.log(`  send lat${i} failed: ${(e as Error).message}`));
        process.stdout.write(`  latency ${i + 1}/${total}\r`);
        const elapsed = performance.now() - t0;
        if (elapsed < 1000) await sleep(1000 - elapsed);
      }
      await sleep(10000); // stragglers
      const samples = [];
      for (let i = 0; i < total; i++) {
        const id = `lat${i}`;
        const before = marks.find((m) => m.label === 'send:before' && m.id === id)?.t;
        const resolved = marks.find((m) => m.label === 'send:resolved' && m.id === id)?.t;
        const recv = marks.find((m) => m.label === 'recv' && m.id === id && m.role === 'receiver')?.t;
        samples.push({
          i,
          warmup: i < WARMUP,
          latencyMs: before !== undefined && recv !== undefined ? recv - before : NaN,
          sendResolveMs: before !== undefined && resolved !== undefined ? resolved - before : NaN,
          received: recv !== undefined,
        });
      }
      const measured = samples.filter((s) => !s.warmup);
      out.latency = {
        samples,
        summary: summarize(measured.map((s) => s.latencyMs)),
        sendResolve: summarize(measured.map((s) => s.sendResolveMs)),
        missing: measured.filter((s) => !s.received).length,
        warmupMissing: samples.filter((s) => s.warmup && !s.received).length,
      };
      const L = out.latency as { summary: Summary; sendResolve: Summary; missing: number };
      console.log(`\n[bench] latency p50 ${r2(L.summary.p50)} p95 ${r2(L.summary.p95)} p99 ${r2(L.summary.p99)} ms; send resolve p50 ${r2(L.sendResolve.p50)} ms; missing ${L.missing}/${MESSAGES}`);
    }

    // --- ordering: one burst from one sender, paced under the documented rate limit ----------------
    if (ONLY.includes('ordering')) {
      const gapMs = Math.ceil(1000 / facts.maxSendPerSec);
      const startIdx = marks.length;
      const sends: Promise<unknown>[] = [];
      for (let i = 0; i < BURST; i++) {
        const card: OrderCard = { ...baseCard, benchId: `ord${i}`, seq: i };
        sends.push(sender.page.evaluate((c) => window.__chat!.sendCard(c), card).catch((e) => ({ error: String((e as Error).message ?? e) })));
        await sleep(gapMs);
      }
      const sendResults = await Promise.all(sends);
      await sleep(15000);
      const arrivals = marks
        .slice(startIdx)
        .filter((m) => m.label === 'recv' && m.role === 'receiver' && m.id?.startsWith('ord'))
        .map((m) => Number(m.id!.slice(3)));
      const seen = new Set<number>();
      const unique: number[] = [];
      for (const a of arrivals) if (!seen.has(a)) (seen.add(a), unique.push(a));
      let maxSeen = -1;
      let outOfOrder = 0;
      for (const s of unique) {
        if (s < maxSeen) outOfOrder++;
        else maxSeen = s;
      }
      out.ordering = {
        burst: BURST,
        paceMs: gapMs,
        documentedMaxSendPerSec: facts.maxSendPerSec,
        arrivalOrder: unique,
        duplicates: arrivals.length - unique.length,
        outOfOrder,
        missing: BURST - unique.length,
        sendErrors: sendResults.filter((r) => (r as { error?: string })?.error).length,
      };
      const O = out.ordering as { outOfOrder: number; missing: number; duplicates: number };
      console.log(`[bench] ordering: ${O.outOfOrder} out of order, ${O.missing} missing, ${O.duplicates} duplicate deliveries (burst ${BURST} @ ${gapMs} ms)`);
    }

    await sender.page.evaluate(() => window.__chat!.disconnect()).catch(() => {});
    await receiver.page.evaluate(() => window.__chat!.disconnect()).catch(() => {});
    await sender.ctx.close();
    await receiver.ctx.close();
  }

  // --- API round trip: authenticated server-side fetch of the order channel ----------------------
  if (ONLY.includes('api')) {
    const samples: { i: number; vendorMs: number; error?: string }[] = [];
    for (let i = 0; i < API_CALLS; i++) {
      try {
        const r = await api<{ vendorMs: number }>(`/vendors/${PLATFORM}/order-channel/${orderId}`);
        samples.push({ i, vendorMs: r.vendorMs });
      } catch (e) {
        const m = /"vendorMs":([\d.]+)/.exec(String((e as Error).message));
        samples.push({ i, vendorMs: m ? Number(m[1]) : NaN, error: String((e as Error).message).slice(0, 200) });
      }
      await sleep(100);
    }
    out.api = { samples, summary: summarize(samples.filter((s) => !s.error).map((s) => s.vendorMs)), errors: samples.filter((s) => s.error).length };
    const A = out.api as { summary: Summary; errors: number };
    console.log(`[bench] api p50 ${r2(A.summary.p50)} p95 ${r2(A.summary.p95)} ms (${A.errors} errors)`);
  }

  await browser.close();
  out.finishedAt = new Date().toISOString();

  // --- write raw + summary --------------------------------------------------------------------------
  const dir = resolve(REPO_ROOT, 'results/bench', PLATFORM, REGION_LABEL);
  mkdirSync(dir, { recursive: true });
  const stamp = meta.startedAt.replace(/[:.]/g, '-');
  const file = resolve(dir, `${stamp}.json`);
  writeFileSync(file, JSON.stringify(out, null, 2) + '\n');
  writeSummaryRow(meta, out);
  console.log(`[bench] wrote ${file}`);
}

function writeSummaryRow(meta: RunMeta, out: Record<string, unknown>) {
  const file = resolve(REPO_ROOT, 'results/bench/summary.csv');
  const header = [
    'platform', 'region_label', 'started_at', 'vendor_region', 'plan', 'sdk_package', 'sdk_version', 'browser',
    'connect_n', 'connect_p50_ms', 'connect_p95_ms',
    'latency_n', 'latency_p50_ms', 'latency_p95_ms', 'latency_p99_ms', 'send_resolve_p50_ms', 'send_resolve_p95_ms', 'latency_missing',
    'ordering_burst', 'ordering_out_of_order', 'ordering_missing', 'ordering_duplicates',
    'api_n', 'api_p50_ms', 'api_p95_ms',
    'hook_overhead_p50_ms', 'raw_file',
  ];
  const c = out.connect as { summary: Summary } | undefined;
  const l = out.latency as { summary: Summary; sendResolve: Summary; missing: number } | undefined;
  const o = out.ordering as { burst: number; outOfOrder: number; missing: number; duplicates: number } | undefined;
  const a = out.api as { summary: Summary } | undefined;
  const h = out.hookOverheadMs as Summary;
  const row = [
    meta.platform, meta.regionLabel, meta.startedAt, meta.vendor.region, meta.vendor.plan, meta.sdk.package, meta.sdk.version, meta.browser,
    c?.summary.n ?? 'not run', r2(c?.summary.p50 ?? NaN), r2(c?.summary.p95 ?? NaN),
    l?.summary.n ?? 'not run', r2(l?.summary.p50 ?? NaN), r2(l?.summary.p95 ?? NaN), r2(l?.summary.p99 ?? NaN), r2(l?.sendResolve.p50 ?? NaN), r2(l?.sendResolve.p95 ?? NaN), l?.missing ?? 'not run',
    o?.burst ?? 'not run', o?.outOfOrder ?? 'not run', o?.missing ?? 'not run', o?.duplicates ?? 'not run',
    a?.summary.n ?? 'not run', r2(a?.summary.p50 ?? NaN), r2(a?.summary.p95 ?? NaN),
    r2(h.p50), `results/bench/${meta.platform}/${meta.regionLabel}/${meta.startedAt.replace(/[:.]/g, '-')}.json`,
  ].map((x) => csvEscape(Number.isNaN(x as number) ? 'not run' : x));
  let lines = existsSync(file) ? readFileSync(file, 'utf8').trim().split('\n') : [header.join(',')];
  if (lines[0] !== header.join(',')) lines = [header.join(','), ...lines.slice(1)];
  // Keep one row per platform+region (the latest run); older runs stay in the raw files.
  lines = lines.filter((ln, i) => i === 0 || !ln.startsWith(`${meta.platform},${meta.regionLabel},`));
  lines.push(row.join(','));
  writeFileSync(file, lines.join('\n') + '\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
