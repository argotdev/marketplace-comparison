# Methodology

Everything below describes the harness as it exists in this repo. Numbers in `results/` come from these scripts and nothing else. Where something was not run, the result files say `not run` and why.

## The build under test

One marketplace chat: one listing (used road bike, 240 USD), one order, three users (`buyer_ana` writes Spanish, `seller_ben` reads English, `agent_sam` is support). Every platform implements the same `ChatAdapter` interface (`packages/shared/src/adapter.ts`), and the same React UI, the same Playwright checks and the same benchmark run on top of it. Account setup, dashboard configuration and plan choice per vendor are in `docs/SETUP_ACCOUNTS.md` and `docs/vendors/<vendor>.md`.

## Requirement checks (`harness/checks/requirements.spec.ts`)

Seven Playwright tests, run serially in headless Chromium, one browser context per user. Each run uses a fresh order id so no state leaks between runs. Pass conditions are those in the brief; the test file is the authoritative statement of each one. Results land in `results/checks/<platform>.json` with the note and details that `results/requirements-matrix.csv` is built from (`npm run matrix`).

Moderation uses the fixed six-message set in `packages/shared/src/moderation.ts`: four that must be stopped, two that must pass (one of them an order number that looks like a phone number). The receiver page is watched for 4 s after each must-block message and 10 s after each must-pass message; a message counts as stopped when the receiver never renders the sensitive token (`415-555-0134`, `ben@example.com`, `venmo`, `whatsapp` or `7700 900123`). Misses and false positives are recorded per platform in the check details.

The email fallback check closes the seller's page, waits 6 s (longer than our presence TTL of 5 s) and then looks in Mailpit's API for a message to the seller containing the order id. Push is only configured when `.env` has Firebase credentials; otherwise the check notes `push not run`.

Translation runs only when the platform has its own translation or `TRANSLATION_PROVIDER` is set in `.env`. The Spanish sentence is `¿Todavía está disponible el cuadro de 54 cm?` and the receiver must render text matching `/available/i`; the English reply must render as text matching `/disponible/i` for the buyer.

## Benchmarks (`harness/bench/run.ts`)

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

## Known limits

- Everything runs on one machine, so connect and latency numbers include no last-mile variation beyond this one connection.
- The native build's server runs on the same machine as the browser; its latency is a floor, not a comparison point for hosted vendors.
- Playwright's exposed-function hop adds the `hookOverheadMs` noted in each file (sub-millisecond on this machine) to each mark.
- No load testing. 200 messages at one per second and a 50-message burst are the largest things sent.
