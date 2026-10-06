// Draws results/charts/connect-time.{svg,png} and results/charts/latency.{svg,png} from results/bench/summary.csv.
// One row per platform, p50 and p95 as two series. Platforms without a run are listed as "not run" with the reason.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import { PALETTE, text, hbar, niceTicks, fmt, svgDoc, parseCsv } from './lib/svg.mjs';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'results/charts');
mkdirSync(out, { recursive: true });
const PLATFORMS = ['native', 'sendbird', 'stream', 'talkjs', 'cometchat', 'twilio', 'pubnub', 'ably', 'rocketchat'];
const NAMES = { native: 'Native (local)', sendbird: 'Sendbird', stream: 'Stream', talkjs: 'TalkJS', cometchat: 'CometChat', twilio: 'Twilio Conversations', pubnub: 'PubNub', ably: 'Ably', rocketchat: 'Rocket.Chat (self-hosted)' };
// Why a platform has no bar. Kept here so the chart itself says it, instead of a silent gap.
const NOT_RUN_REASON = {
  sendbird: 'skipped: license §5.1(iii) forbids publishing benchmarks',
  pubnub: 'skipped: terms §3.1(g) forbid publishing benchmarks',
};

const summaryPath = resolve(root, 'results/bench/summary.csv');
const rows = existsSync(summaryPath) ? parseCsv(readFileSync(summaryPath, 'utf8')) : [];
const region = process.env.REGION_LABEL ?? 'local-dev-machine';
const byPlatform = Object.fromEntries(rows.filter((r) => r.region_label === region).map((r) => [r.platform, r]));

function chart({ title, subtitle, p50Key, p95Key, nKey, file }) {
  const W = 900, left = 190, right = 120, top = 86, rowH = 58, barH = 18, gap = 2;
  const H = top + PLATFORMS.length * rowH + 60;
  const plotW = W - left - right;
  const values = PLATFORMS.flatMap((p) => [Number(byPlatform[p]?.[p50Key]), Number(byPlatform[p]?.[p95Key])]).filter((v) => Number.isFinite(v));
  const ticks = niceTicks(Math.max(...values, 1));
  const max = ticks[ticks.length - 1];
  const x = (v) => left + (v / max) * plotW;
  let b = '';
  b += text(24, 28, title, { size: 18, weight: 600, fill: PALETTE.inkPrimary });
  b += text(24, 50, subtitle, { size: 12, fill: PALETTE.inkSecondary });
  // Legend (two series -> always present).
  b += `<rect x="${W - right - 150}" y="22" width="10" height="10" rx="2" fill="${PALETTE.series[0]}"/>` + text(W - right - 134, 27, 'p50', { size: 12 });
  b += `<rect x="${W - right - 90}" y="22" width="10" height="10" rx="2" fill="${PALETTE.series[1]}"/>` + text(W - right - 74, 27, 'p95', { size: 12 });
  // Grid + ticks.
  for (const t of ticks) {
    b += `<line x1="${x(t)}" y1="${top - 10}" x2="${x(t)}" y2="${top + PLATFORMS.length * rowH}" stroke="${PALETTE.grid}" stroke-width="1"/>`;
    b += text(x(t), top + PLATFORMS.length * rowH + 16, `${fmt(t)} ms`, { size: 11, fill: PALETTE.inkMuted, anchor: 'middle', tabular: true });
  }
  b += `<line x1="${left}" y1="${top - 10}" x2="${left}" y2="${top + PLATFORMS.length * rowH}" stroke="${PALETTE.axis}" stroke-width="1"/>`;
  PLATFORMS.forEach((p, i) => {
    const y = top + i * rowH;
    b += text(left - 12, y + barH + gap / 2 + 2, NAMES[p], { size: 13, fill: PALETTE.inkPrimary, anchor: 'end' });
    const r = byPlatform[p];
    const p50 = Number(r?.[p50Key]), p95 = Number(r?.[p95Key]);
    if (!Number.isFinite(p50)) {
      b += text(left + 8, y + barH + gap / 2 + 2, NOT_RUN_REASON[p] ?? 'not run' + (r ? '' : ': no benchmark result for this platform yet'), { size: 12, fill: PALETTE.inkMuted });
      return;
    }
    b += hbar(left, y, x(p50) - left, barH, PALETTE.series[0]);
    b += text(x(p50) + 6, y + barH / 2 + 1, `${fmt(p50)} ms`, { size: 11, fill: PALETTE.inkSecondary, tabular: true });
    b += hbar(left, y + barH + gap, x(p95) - left, barH, PALETTE.series[1]);
    b += text(x(p95) + 6, y + barH + gap + barH / 2 + 1, `${fmt(p95)} ms`, { size: 11, fill: PALETTE.inkSecondary, tabular: true });
    const n = r?.[nKey];
    if (n) b += text(W - 24, y + barH + gap / 2 + 2, `n=${n}`, { size: 11, fill: PALETTE.inkMuted, anchor: 'end', tabular: true });
  });
  const meta = rows[0] ? `Run from ${region}. Dates and machine details in results/bench/<platform>/${region}/*.json. Native runs on the test machine itself, so it is a floor, not a vendor comparison.` : 'No benchmark results yet.';
  b += text(24, H - 18, meta, { size: 11, fill: PALETTE.inkMuted });
  const svg = svgDoc(W, H, b);
  writeFileSync(resolve(out, `${file}.svg`), svg);
  return { svg, W, H, file };
}

const charts = [
  chart({ title: 'Connect time', subtitle: 'From the SDK connect call until the client can send in the order channel. 30 cold runs per platform, new browser context each time.', p50Key: 'connect_p50_ms', p95Key: 'connect_p95_ms', nKey: 'connect_n', file: 'connect-time' }),
  chart({ title: 'Send to receive latency', subtitle: 'Order card payload, 200 messages at one per second after 10 warm-ups; sender and receiver in two headless Chromium pages, one clock.', p50Key: 'latency_p50_ms', p95Key: 'latency_p95_ms', nKey: 'latency_n', file: 'latency' }),
];

const browser = await chromium.launch();
for (const c of charts) {
  const page = await browser.newPage({ viewport: { width: c.W, height: c.H }, deviceScaleFactor: 2 });
  await page.setContent(`<html><body style="margin:0">${c.svg}</body></html>`);
  await page.screenshot({ path: resolve(out, `${c.file}.png`), clip: { x: 0, y: 0, width: c.W, height: c.H } });
  await page.close();
  console.log(`[charts] wrote results/charts/${c.file}.svg and .png`);
}
await browser.close();
