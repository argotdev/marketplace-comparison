// Draws results/charts/cost-curve.{svg,png} from data/pricing.csv (vendor, mau, monthly_usd, billing, source_url, date_checked, note).
// Prices come from separate research; this script never looks them up or estimates them. With no rows it writes a placeholder.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from 'playwright';
import { PALETTE, text, niceTicks, fmt, svgDoc, parseCsv } from './lib/svg.mjs';

const root = resolve(import.meta.dirname, '..');
const out = resolve(root, 'results/charts');
mkdirSync(out, { recursive: true });
const rows = parseCsv(readFileSync(resolve(root, 'data/pricing.csv'), 'utf8')).filter((r) => r.vendor && r.mau && r.monthly_usd !== '');
const VENDOR_ORDER = ['sendbird', 'stream', 'talkjs', 'cometchat', 'twilio', 'pubnub', 'ably', 'rocketchat'];
const NAMES = { sendbird: 'Sendbird', stream: 'Stream', talkjs: 'TalkJS', cometchat: 'CometChat', twilio: 'Twilio', pubnub: 'PubNub', ably: 'Ably', rocketchat: 'Rocket.Chat' };

const W = 900, H = 560, left = 90, right = 170, top = 80, bottom = 100;
const plotW = W - left - right, plotH = H - top - bottom;
let b = text(24, 28, 'Monthly cost by monthly active users', { size: 18, weight: 600, fill: PALETTE.inkPrimary });
b += text(24, 50, 'Monthly list price at each MAU tier, from data/pricing.csv (source URL and date per point).', { size: 12 });

const vendors = VENDOR_ORDER.filter((v) => rows.some((r) => r.vendor === v));
if (!vendors.length) {
  b += text(W / 2, H / 2, 'No pricing data yet: data/pricing.csv has headers only.', { size: 14, fill: PALETTE.inkMuted, anchor: 'middle' });
} else {
  const maus = rows.map((r) => Number(r.mau)), usd = rows.map((r) => Number(r.monthly_usd));
  const xTicks = niceTicks(Math.max(...maus)), yTicks = niceTicks(Math.max(...usd));
  const xMax = xTicks.at(-1), yMax = yTicks.at(-1);
  const x = (v) => left + (v / xMax) * plotW, y = (v) => top + plotH - (v / yMax) * plotH;
  for (const t of yTicks) {
    b += `<line x1="${left}" y1="${y(t)}" x2="${left + plotW}" y2="${y(t)}" stroke="${PALETTE.grid}" stroke-width="1"/>`;
    b += text(left - 8, y(t), `$${fmt(t)}`, { size: 11, fill: PALETTE.inkMuted, anchor: 'end', tabular: true });
  }
  for (const t of xTicks) b += text(x(t), top + plotH + 18, `${fmt(t)} MAU`, { size: 11, fill: PALETTE.inkMuted, anchor: 'middle', tabular: true });
  b += `<line x1="${left}" y1="${top + plotH}" x2="${left + plotW}" y2="${top + plotH}" stroke="${PALETTE.axis}" stroke-width="1"/>`;
  const ends = [];
  vendors.forEach((v, i) => {
    const color = PALETTE.series[VENDOR_ORDER.indexOf(v)];
    // Hollow points: estimates or sales quotes, i.e. anything that is not a list price.
    const pts = rows.filter((r) => r.vendor === v).map((r) => ({ x: Number(r.mau), y: Number(r.monthly_usd), quote: /quote|estimate/i.test(r.billing + ' ' + r.note) })).sort((a, c) => a.x - c.x);
    b += `<polyline points="${pts.map((p) => `${x(p.x)},${y(p.y)}`).join(' ')}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    for (const p of pts) b += `<circle cx="${x(p.x)}" cy="${y(p.y)}" r="4" fill="${p.quote ? PALETTE.surface : color}" stroke="${p.quote ? color : PALETTE.surface}" stroke-width="2"/>`;
    const last = pts.at(-1);
    ends.push({ v, color, yy: y(last.y), xx: x(last.x) });
  });
  // Direct end labels, nudged apart with leader lines when they collide.
  ends.sort((a, c) => a.yy - c.yy);
  let prev = -Infinity;
  for (const e of ends) {
    const ly = Math.max(e.yy, prev + 14);
    prev = ly;
    if (Math.abs(ly - e.yy) > 2) b += `<line x1="${e.xx + 6}" y1="${e.yy}" x2="${left + plotW + 10}" y2="${ly}" stroke="${PALETTE.axis}" stroke-width="1"/>`;
    b += `<rect x="${left + plotW + 14}" y="${ly - 5}" width="10" height="10" rx="2" fill="${e.color}"/>` + text(left + plotW + 30, ly, NAMES[e.v], { size: 12, fill: PALETTE.inkPrimary });
  }
  b += text(24, H - 28, 'Filled point = list price; hollow point = estimate or sales quote (see the billing and note columns).', { size: 11, fill: PALETTE.inkMuted });
  b += text(24, H - 12, 'Lines join the tiers that were checked; they are not the vendor\u2019s pricing between tiers. Rocket.Chat (self-hosted) has no list price.', { size: 11, fill: PALETTE.inkMuted });
}
const svg = svgDoc(W, H, b);
writeFileSync(resolve(out, 'cost-curve.svg'), svg);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
await page.screenshot({ path: resolve(out, 'cost-curve.png') });
await browser.close();
console.log(`[cost-curve] ${vendors.length} vendor(s) plotted -> results/charts/cost-curve.{svg,png}`);
