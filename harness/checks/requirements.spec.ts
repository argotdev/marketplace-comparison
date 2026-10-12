/**
 * The seven requirement checks. Run with PLATFORM=<id>; the same file runs against every build.
 * Each test writes one row to results/checks/<platform>.json (pass/fail/skip + note + details).
 */
import { test, expect, type Browser } from '@playwright/test';
import { LISTING, MUST_BLOCK, MUST_PASS, channelIdForOrder, type ChannelInfo, type ChatMessage, type OrderCard } from '@mkt/shared';
import { PLATFORM } from '../lib/env.ts';
import { api, post, waitFor, sleep } from '../lib/api.ts';
import { openChat, hook, visibleTexts, TINY_PNG_BASE64, waitReady, type ChatPage } from '../lib/pages.ts';
import { recordCheck } from '../lib/results.ts';
import { PLATFORM_FACTS } from '../lib/platforms.ts';

const facts = PLATFORM_FACTS[PLATFORM];
const orderId = process.env.CHECK_ORDER_ID ?? `ord_${process.env.CHECK_RUN_ID ?? Date.now().toString(36)}`;
let setupNotes: string[] = [];
let translationProvider: string | null = null;

// Each check opens its own pages, so a failure in one must not stop the others (workers: 1 keeps them sequential).

test.beforeAll(async () => {
  if (!facts) throw new Error(`no PLATFORM_FACTS for ${PLATFORM}`);
  const vendors = await api<{ platform: string; configured: boolean; missingEnv: string[] }[]>('/vendors');
  const v = vendors.find((x) => x.platform === PLATFORM);
  if (!v) throw new Error(`server has no vendor for ${PLATFORM}`);
  if (!v.configured) throw new Error(`${PLATFORM} not configured; missing .env: ${v.missingEnv.join(', ')}`);
  setupNotes = (await post<{ notes: string[] }>(`/vendors/${PLATFORM}/setup`)).notes;
  await post(`/orders/${orderId}/reset`);
  await post(`/moderation/reset/${PLATFORM}`);
  translationProvider = (await api<{ provider: string | null }>('/translate/status')).provider;
  console.log(`[checks] platform=${PLATFORM} order=${orderId} setup: ${setupNotes.join(' | ')}`);
});

const pages: ChatPage[] = [];
async function open(browser: Browser, userId: string, opts?: { auto?: boolean }) {
  const p = await openChat(browser, PLATFORM, userId, orderId, opts);
  pages.push(p);
  return p;
}
test.afterEach(async ({}, info) => {
  for (const p of pages.splice(0)) {
    await p.page.evaluate(() => window.__chat?.disconnect?.()).catch(() => {});
    await p.ctx.close().catch(() => {});
  }
  const req = Number(info.title.split('.')[0]);
  const ann = info.annotations.find((a) => a.type === 'note')?.description ?? '';
  const details = info.annotations.find((a) => a.type === 'details')?.description;
  recordCheck(PLATFORM, orderId, {
    req,
    title: info.title,
    outcome: info.status === 'passed' ? 'pass' : info.status === 'skipped' ? 'skip' : 'fail',
    note: info.status === 'passed' || info.status === 'skipped' ? ann : `${ann}${ann ? ' | ' : ''}${(info.errors[0]?.message ?? '').split('\n')[0].slice(0, 300)}`,
    durationMs: info.duration,
    details: details ? JSON.parse(details) : undefined,
  });
});
function describeReportSources(r: { local: unknown[]; remote: unknown[] }): string {
  const srcs = new Set([...(r.local as { source: string }[]), ...(r.remote as { source: string }[])].map((x) => x.source));
  const names: Record<string, string> = { queue: 'our moderation queue', webhook: 'our webhook receiver', 'vendor-api': "the vendor's moderation queue" };
  return [...srcs].map((s) => names[s] ?? s).join(' + ');
}
const note = (s: string) => test.info().annotations.push({ type: 'note', description: s });
const details = (d: unknown) => test.info().annotations.push({ type: 'details', description: JSON.stringify(d) });

// ---------------------------------------------------------------------------
test('1. 1:1 buyer/seller channel tied to the order', async ({ browser }) => {
  const buyer = await open(browser, 'buyer_ana');
  const ch = (await hook(buyer.page, 'getChannelInfo')) as ChannelInfo;
  details(ch);
  expect(ch.id, 'channel id derives from the order id').toContain(orderId);
  expect(String(ch.data.orderId)).toBe(orderId);
  expect(String(ch.data.listingId)).toBe(LISTING.id);
  expect([...ch.memberIds].sort()).toEqual(['buyer_ana', 'seller_ben']);
  note(`channel ${ch.id}; members ${ch.memberIds.join(',')}; data keys ${Object.keys(ch.data).join(',')}`);
  void channelIdForOrder;
});

// ---------------------------------------------------------------------------
test('2. Order card as a custom message with live status', async ({ browser }) => {
  const buyer = await open(browser, 'buyer_ana');
  const seller = await open(browser, 'seller_ben');
  const card = (await api<OrderCard>(`/order-card/${orderId}`));
  expect(card.status).toBe('placed');
  const sent = (await hook(buyer.page, 'sendCard', card)) as { messageId: string };
  expect(sent.messageId).toBeTruthy();

  const sellerCard = seller.page.locator('[data-testid=order-card]');
  await expect(sellerCard).toHaveCount(1);
  await expect(sellerCard).toHaveAttribute('data-status', 'placed');
  await expect(sellerCard.locator('.title')).toHaveText(LISTING.title);
  const buyerCard = buyer.page.locator('[data-testid=order-card]');
  await expect(buyerCard).toHaveAttribute('data-status', 'placed');
  const msgIdBefore = await seller.page.locator('[data-testid=message][data-kind=order_card]').getAttribute('data-message-id');

  // The order service changes status; the existing card must change in place on both sides, no reload.
  const t0 = Date.now();
  await post(`/orders/${orderId}/status`, { status: 'shipped' });
  await expect(sellerCard).toHaveAttribute('data-status', 'shipped', { timeout: 20000 });
  await expect(buyerCard).toHaveAttribute('data-status', 'shipped', { timeout: 20000 });
  const propagationMs = Date.now() - t0;
  await expect(sellerCard).toHaveCount(1);
  const msgIdAfter = await seller.page.locator('[data-testid=message][data-kind=order_card]').getAttribute('data-message-id');
  expect(msgIdAfter, 'same message element updated, not a new message').toBe(msgIdBefore);
  details({ messageId: sent.messageId, propagationMs });
  note(`card sent as structured data; status placed->shipped propagated to both users in ${propagationMs} ms by editing the same message`);
});

// ---------------------------------------------------------------------------
test('3. Moderation: contact info and off-platform payment blocked; user report reaches a queue', async ({ browser }) => {
  const buyer = await open(browser, 'buyer_ana');
  const seller = await open(browser, 'seller_ben');
  const sensitive: Record<string, RegExp> = {
    [MUST_BLOCK[0]]: /415-555-0134/,
    [MUST_BLOCK[1]]: /ben@example\.com/,
    [MUST_BLOCK[2]]: /venmo/i,
    [MUST_BLOCK[3]]: /whatsapp|7700 900123/i,
  };
  const outcomes: { text: string; expect: 'block' | 'pass'; result: 'blocked' | 'masked' | 'delivered' | 'not delivered'; sellerSaw?: string; sendError?: string }[] = [];

  for (const text of [...MUST_BLOCK, ...MUST_PASS]) {
    const expectBlock = (MUST_BLOCK as readonly string[]).includes(text);
    const before = (await visibleTexts(seller.page)).length;
    let sendError: string | undefined;
    try {
      await hook(buyer.page, 'sendText', text);
    } catch (e) {
      sendError = (e as Error).message;
    }
    // Give the platform time to deliver (or not).
    let seen: string | undefined;
    const deadline = Date.now() + (expectBlock ? 4000 : 10000);
    while (Date.now() < deadline) {
      const texts = await visibleTexts(seller.page);
      if (texts.length > before) {
        seen = texts[texts.length - 1];
        break;
      }
      await sleep(150);
    }
    let result: (typeof outcomes)[number]['result'];
    if (seen === undefined) result = expectBlock ? 'blocked' : 'not delivered';
    else if (expectBlock) result = sensitive[text].test(seen) ? 'delivered' : 'masked';
    else result = seen === text ? 'delivered' : 'masked';
    outcomes.push({ text, expect: expectBlock ? 'block' : 'pass', result, sellerSaw: seen, sendError });
  }
  const misses = outcomes.filter((o) => o.expect === 'block' && o.result === 'delivered');
  const falsePositives = outcomes.filter((o) => o.expect === 'pass' && o.result !== 'delivered');

  // Report the seller; the report must reach a moderation queue or a webhook on our server.
  await hook(buyer.page, 'reportUser', 'seller_ben', 'Asked to pay off-platform');
  const reports = await waitFor(
    async () => {
      const r = await api<{ local: unknown[]; remote: unknown[]; remoteError?: string }>(`/moderation/reports/${PLATFORM}`);
      return r.local.length + r.remote.length > 0 ? r : undefined;
    },
    15000,
    500,
    'user report to reach queue/webhook',
  ).catch((e) => ({ local: [], remote: [], remoteError: String(e.message) }));
  const reportLanded = reports.local.length + reports.remote.length > 0;

  details({ outcomes, misses: misses.length, falsePositives: falsePositives.length, report: { local: reports.local.length, remote: reports.remote.length, error: reports.remoteError } });
  note(
    `${MUST_BLOCK.length - misses.length}/${MUST_BLOCK.length} blocked or masked, ${falsePositives.length} false positive(s) of ${MUST_PASS.length}; ` +
      `report ${reportLanded ? `reached ${describeReportSources(reports)}` : 'did NOT land'}`,
  );
  expect(misses, `missed: ${misses.map((m) => m.text).join(' / ')}`).toHaveLength(0);
  expect(falsePositives, `false positives: ${falsePositives.map((m) => `${m.text} -> ${m.result}`).join(' / ')}`).toHaveLength(0);
  expect(reportLanded, 'report landed in a moderation queue or webhook').toBe(true);
});

// ---------------------------------------------------------------------------
// Requirement 4 (offline notification: push + email) is documented per vendor, not tested (author's decision, 2026-10-12).
// Each docs/vendors/<vendor>.md records what the platform offers; the matrix row carries that note.

// ---------------------------------------------------------------------------
test('5. Auto-translation es<->en', async ({ browser }) => {
  if (facts.translation === 'none') {
    note('platform has no translation and the adapter does not implement a fallback');
    test.skip();
  }
  if (facts.translation === 'built' && !translationProvider) {
    note('not run: platform has no translation feature and no TRANSLATION_PROVIDER is set in .env');
    test.skip();
  }
  if (facts.translation === 'native-needs-provider' && !translationProvider) {
    note('not run: the platform translates natively but needs a provider API key, and none is set in .env');
    test.skip();
  }
  const buyer = await open(browser, 'buyer_ana');
  const seller = await open(browser, 'seller_ben');
  const es = '¿Todavía está disponible el cuadro de 54 cm?';
  await hook(buyer.page, 'sendText', es);
  const sellerText = seller.page.locator('[data-testid=message] [data-testid=text]').last();
  await expect(sellerText).toHaveText(/available/i, { timeout: 20000 });
  const en = 'Yes, the frame is still available. Shipping tomorrow.';
  await hook(seller.page, 'sendText', en);
  const buyerText = buyer.page.locator('[data-testid=message] [data-testid=text]').last();
  await expect(buyerText).toHaveText(/disponible/i, { timeout: 20000 });
  const seen = { sellerSaw: await sellerText.textContent(), buyerSaw: await buyerText.textContent() };
  details({ ...seen, provider: facts.translation === 'built' ? translationProvider : 'platform' });
  note(`es->en: "${seen.sellerSaw}" | en->es: "${seen.buyerSaw}" (${facts.translation === 'built' ? `built, provider ${translationProvider}` : 'platform feature'})`);
});

// ---------------------------------------------------------------------------
test('6. Escalation: "Get help" adds agent_sam who can read earlier messages', async ({ browser }) => {
  const buyer = await open(browser, 'buyer_ana');
  const earlier = [`Mensaje anterior uno ${orderId}`, `Mensaje anterior dos ${orderId}`];
  for (const t of earlier) await hook(buyer.page, 'sendText', t);
  await hook(buyer.page, 'addSupportAgent');
  const ch = (await hook(buyer.page, 'getChannelInfo')) as ChannelInfo;
  expect(ch.memberIds).toContain('agent_sam');
  const agent = await open(browser, 'agent_sam');
  const history = (await hook(agent.page, 'getMessages')) as ChatMessage[];
  const texts = history.map((m) => m.originalText ?? m.text ?? '');
  for (const t of earlier) expect(texts, `agent sees "${t}"`).toContain(t);
  details({ members: ch.memberIds, agentSees: texts.length });
  note(`agent added to the same channel (members ${ch.memberIds.join(',')}); agent reads ${texts.length} earlier message(s)`);
});

// ---------------------------------------------------------------------------
test('7. Read receipts, typing indicators, image attachment', async ({ browser }) => {
  const buyer = await open(browser, 'buyer_ana');
  const seller = await open(browser, 'seller_ben');
  // Each feature is recorded on its own so a platform that lacks one still gets the others measured.
  const result: Record<'typing' | 'readReceipt' | 'attachment', { ok: boolean; error?: string; extra?: unknown }> = {
    typing: { ok: false },
    readReceipt: { ok: false },
    attachment: { ok: false },
  };

  try {
    await hook(seller.page, 'setTyping', true);
    await expect(buyer.page.locator('[data-testid=typing]')).toContainText(/typing/i, { timeout: 15000 });
    await hook(seller.page, 'setTyping', false);
    result.typing.ok = true;
  } catch (e) {
    result.typing.error = String((e as Error).message).split('\n')[0];
  }

  try {
    await hook(buyer.page, 'sendText', `Recibo de lectura ${orderId}`);
    // Platforms with auto-translation show the seller an English rendering, so assert on the order id, not the words.
    await expect(seller.page.locator('[data-testid=message] [data-testid=text]').last()).toContainText(orderId);
    await hook(seller.page, 'markAsRead');
    await buyer.page.waitForFunction(() => window.__chat!.reads.some((r) => r.userId === 'seller_ben'), null, { timeout: 15000 });
    // Evidence captured the moment the event lands, before the UI assertion.
    result.readReceipt.extra = await buyer.page.evaluate(() => ({
      readsOnArrival: window.__chat!.reads,
      statusLine: document.querySelector('[data-testid=typing]')?.textContent,
      messages: (window.__chat!.messages as { id: string; senderId: string; createdAt: number; kind: string }[]).map((m) => ({ id: m.id, senderId: m.senderId, createdAt: m.createdAt, kind: m.kind })),
    }));
    await expect(buyer.page.locator('[data-testid=typing]')).toContainText(/Read by Ben/, { timeout: 15000 });
    result.readReceipt.ok = true;
  } catch (e) {
    result.readReceipt.error = String((e as Error).message).split('\n')[0];
  } finally {
    // Raw evidence either way: the read events the buyer saw and the message they should cover.
    const after = await buyer.page.evaluate(() => {
      const h = window.__chat!;
      const mine = [...(h.messages as { id: string; senderId: string; createdAt: number }[])].reverse().find((m) => m.senderId === h.userId);
      return { reads: h.reads, lastMine: mine ? { id: mine.id, createdAt: mine.createdAt } : null, statusLine: document.querySelector('[data-testid=typing]')?.textContent };
    });
    result.readReceipt.extra = { ...(result.readReceipt.extra as object | undefined), after };
  }

  try {
    await hook(buyer.page, 'sendAttachment', 'photo.png', 'image/png', TINY_PNG_BASE64);
    const img = seller.page.locator('[data-testid=attachment]').last();
    await expect(img).toBeVisible({ timeout: 20000 });
    await expect.poll(() => img.evaluate((el) => (el as HTMLImageElement).naturalWidth), { timeout: 15000 }).toBeGreaterThan(0);
    const src = await img.getAttribute('src');
    result.attachment.ok = true;
    result.attachment.extra = { attachmentHost: src ? new URL(src, 'http://x').host : null, dataUrl: src?.startsWith('data:') ?? false };
  } catch (e) {
    result.attachment.error = String((e as Error).message).split('\n')[0];
  }

  details(result);
  const okList = (Object.keys(result) as (keyof typeof result)[]).filter((k) => result[k].ok);
  const failList = (Object.keys(result) as (keyof typeof result)[]).filter((k) => !result[k].ok);
  note(`${okList.join(', ') || 'none'} delivered buyer<->seller${failList.length ? `; failed: ${failList.map((k) => `${k} (${result[k].error})`).join('; ')}` : ''}`);
  expect(failList, `failed: ${failList.join(', ')}`).toHaveLength(0);
});

void waitReady;
