# Methodology

Everything below describes the harness as it exists in this repo. Numbers in `results/` come from these scripts and nothing else. Where something was not run, the result files say `not run` and why.

## The build under test

One marketplace chat: one listing (used road bike, 240 USD), one order, three users (`buyer_ana` writes Spanish, `seller_ben` reads English, `agent_sam` is support). Every platform implements the same `ChatAdapter` interface (`packages/shared/src/adapter.ts`), and the same React UI, the same Playwright checks and the same benchmark run on top of it. Account setup, dashboard configuration and plan choice per vendor are in `docs/SETUP_ACCOUNTS.md` and `docs/vendors/<vendor>.md`.

## Requirement checks (`harness/checks/requirements.spec.ts`)

Seven Playwright tests, run one at a time in headless Chromium, one browser context per user. Each `playwright test` invocation gets a run id, so all seven checks share one fresh order id even when Playwright restarts its worker after a failure, and no state leaks between runs. Check 7 records typing, read receipts and the image attachment separately, so a platform that lacks one still has the others measured. Pass conditions are those in the brief; the test file is the authoritative statement of each one. Results land in `results/checks/<platform>.json` with the note and details that `results/requirements-matrix.csv` is built from (`npm run matrix`).

Moderation uses the fixed six-message set in `packages/shared/src/moderation.ts`: four that must be stopped, two that must pass (one of them an order number that looks like a phone number). The receiver page is watched for 4 s after each must-block message and 10 s after each must-pass message; a message counts as stopped when the receiver never renders the sensitive token (`415-555-0134`, `ben@example.com`, `venmo`, `whatsapp` or `7700 900123`). Misses and false positives are recorded per platform in the check details.

The email fallback check closes the seller's page, waits for presence to settle (6 s by default, longer than our presence TTL of 5 s; platforms with slower presence declare a measured `offlineSettleMs` in `harness/lib/platforms.ts`, 65 s for Rocket.Chat) and then looks in Mailpit's API for a message to the seller containing the order id. Vendors that send email from their own infrastructure with no custom SMTP (TalkJS) cannot reach Mailpit; for them the check asserts the vendor's notification webhook instead and needs an https `PUBLIC_URL`. Browser push is out of scope (decision of 2026-10-07): Sendbird, Stream, PubNub and Rocket.Chat do not support it, so the push half of requirement 4 is described from each vendor's docs and recorded as `not evaluated`; only the email fallback is checked.

Translation runs only when the platform has its own translation or `TRANSLATION_PROVIDER` is set in `.env`. The Spanish sentence is `¿Todavía está disponible el cuadro de 54 cm?` and the receiver must render text matching `/available/i`; the English reply must render as text matching `/disponible/i` for the buyer.

## Benchmarks: not run

Decision of 2026-10-06 (author): no performance benchmark was run against any platform, including the native build and self-hosted Rocket.Chat, and no connect-time, latency, ordering or API round-trip figure appears anywhere in `results/`. Reasons: vendor terms that restrict publishing performance results (Sendbird License §5.1(iii), PubNub Terms §3.1(g)), and the risk of such numbers being read as a like-for-like comparison when the test machine, network and vendor regions differ. Published vendor figures, if used in the article, are the vendor's claims and are cited as such. The harness below exists and was smoke-tested against the native build during development; its description is kept so a reader can see what *would* be measured, and so the decision not to is checkable.

### What the harness would do (`harness/bench/run.ts`, not run)

Headless Chromium through Playwright, one page for the sender and one for the receiver, both on the test machine. All timestamps are taken in the Node harness process with `performance.now()` through `window.__mark`, a function exposed to the pages, so there is one clock. The page-to-Node round trip of that function is measured at the start of every run (20 calls) and stored as `hookOverheadMs`; it is the upper bound on the error each mark adds.

- **Connect time.** New browser context per run; the page loads with `auto=0`, the harness calls `connect()`, and the page marks `connect:start` immediately before the SDK connect call and `connect:ready` once the order channel is open and the client can send. Token fetch happens before the first mark and is excluded. 30 runs by default.
- **Send to receive latency.** The sender sends the order card payload (`results/bench/.../*.json` `payload`) with a `benchId`; the page marks `send:before` right before the SDK send call and `send:resolved` when the send promise resolves; the receiver page marks `recv` inside the adapter's receive callback. Latency = `recv − send:before`. 10 warm-up messages, then 200 at one per second (paced from the start of each send). Messages without a `recv` mark after a 10 s grace period are counted as missing. Only the receiver page's marks count as receives, so SDKs that echo the sender's own message are not mis-measured.
- **Ordering.** One burst of 50 messages from the buyer, fire-and-forget, paced at the documented client rate limit in `harness/lib/platforms.ts`. Arrival order on the receiver is recorded; a message is out of order when its sequence number is lower than the highest already seen. Missing and duplicate deliveries are counted after 15 s.
- **API round trip.** 50 sequential authenticated server-side calls that fetch the order channel, timed inside the API server around the vendor call only (`vendorMs`), 100 ms apart.
- **Bundle size** (`harness/bundle/build.ts`). One minimal core entry per platform (connect, send, receive) and one kit entry where a React kit exists, both built with the same Vite production config (esbuild minify, ES2022, React externalised, no code splitting), reporting minified and gzip bytes of the emitted JS and CSS. `harness/bundle/kit-network.ts` loads `/kit/<platform>` and sums JavaScript bytes served from non-localhost hosts, with the iframe count, to catch kits that load from a CDN or an iframe.

Percentiles are nearest-rank (`harness/lib/stats.ts`). p50 and p95 are reported for every timing, p99 for latency. Raw samples are kept next to the summaries.

Every result file records: start time, machine (OS, CPU, cores, memory, Node version), network (city, region, country and provider from ipinfo.io; the IP address is not stored), region label (`REGION_LABEL`, default `local-dev-machine`), vendor app region and plan (`<PLATFORM>_REGION`, `<PLATFORM>_PLAN` from `.env`), SDK package and version, and the Chromium version.

## Test machine and network for the default run

Apple M4 Pro, 48 GB, macOS 27.0.1, Node 24.16.0, Chromium as installed by Playwright 1.63.0. Comcast residential connection in Baltimore, Maryland, US. Dates are in each result file. Runs from other regions use the Docker image in `harness/Dockerfile` and a different `REGION_LABEL`.

## Static measurements that did run

- **Bundle size** (`results/bundle-size.csv`): minified and gzip bytes of one minimal core entry per platform and one kit entry where a React kit exists, all built with the same Vite production config with React externalised. This is a property of the published npm packages, not a performance statistic.
- **Kit network transfer** (`results/kit-network.csv`): JavaScript bytes served from vendor hosts when the kit view loads, for kits that load from a CDN, an iframe or a self-hosted server.

## Known limits

- No benchmark numbers exist; see above.
- The requirement checks ran where keys existed: native and self-hosted Rocket.Chat (2026-10-06), Sendbird, Stream and TalkJS (2026-10-07, through an ngrok tunnel for webhooks). CometChat, Twilio, PubNub and Ably are `not run` until their keys arrive. Dashboard-only settings (TalkJS contact masking and webhooks, CometChat moderation rules) are the author's to configure; a check that depends on one records the failure as it stands.
- No load testing of any kind. The largest thing the checks send is six fixture messages in a row.
