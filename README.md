# One marketplace chat, nine builds

Evidence repo for a Stream blog article comparing Sendbird with seven alternatives and a vendor-free build. The same buyer/seller chat (one listing, one order, three users) is built on every platform behind one `ChatAdapter` interface, and checked with the same Playwright suite. Performance benchmarks were deliberately not run (see below).

Platforms: `native`, `sendbird`, `stream`, `talkjs`, `cometchat`, `twilio`, `pubnub`, `ably`, `rocketchat`.

## Layout

```
packages/shared          domain types, moderation fixture, ChatAdapter interface, browser API helpers
packages/server          order service, token endpoints, webhook receivers, built moderation/translation/email
packages/native-server   the vendor-free WebSocket server (2 instances, Postgres, Redis)
packages/web             Vite + React: /adapter/<platform> (plain UI) and /kit/<platform> (vendor UI kit)
packages/adapters/<p>    one ChatAdapter per platform, with the send-order-card snippet
harness/checks           the seven requirement checks (Playwright)
harness/bench            benchmark harness (connect, latency, ordering, API RTT)
harness/bundle           bundle-size builds and kit network transfer
results/                 everything measured; nothing here is estimated
docs/                    setup checklist, build log, per-vendor notes, snippets, methodology
```

## From a fresh clone to a running app

Requirements: Node 22+ (24 used), npm 11, Docker Desktop. The machine must be able to run Playwright's Chromium.

```bash
npm install
npx playwright install chromium
cp .env.example .env            # fill in vendor keys per docs/SETUP_ACCOUNTS.md; leave blank to skip a vendor
docker compose up -d            # Postgres (host port 5433), Redis, Mailpit (http://localhost:8025)
npm run dev:server              # API server on :4000
npm run dev:native              # native WebSocket instances on :4101 and :4102
npm run dev:web                 # Vite on :5173
```

Open http://localhost:5173 and pick a platform and user. Buyer and seller pages side by side show the chat; the seller's page has the order status buttons.

Vendor webhooks need a public URL. Run `ngrok http 4000` and put the HTTPS URL in `PUBLIC_URL` in `.env`, then paste `<PUBLIC_URL>/api/webhooks/<platform>` into each vendor dashboard as described in `docs/SETUP_ACCOUNTS.md`.

## Run the checks

```bash
PLATFORM=native npm run check        # results/checks/native.json
npm run matrix                       # results/requirements-matrix.csv + results/integration-effort.csv
```

## Benchmarks: not run, by decision

On 2026-10-06 the author decided to skip every performance benchmark (connect time, send-to-receive latency, ordering, API round trip) for all platforms, to avoid problems with vendor terms that restrict publishing performance results (Sendbird License §5.1(iii), PubNub Terms §3.1(g)) and to keep the comparison on functionality. The harness (`harness/bench/`, `harness/Dockerfile`, `scripts/charts.mjs`) stays in the repo but produced no results; `results/bench/` does not exist and must not be created for publication. Static measurements that are not performance statistics still run:

```bash
npm run bundle          # results/bundle-size.csv (minified + gzip of each SDK entry, built identically)
npm run kit-network     # results/kit-network.csv (JavaScript transferred from vendor hosts when the kit view loads)
```

## Rocket.Chat (self-hosted)

```bash
docker compose --profile rocketchat up -d     # Rocket.Chat 8.9.0 + MongoDB 8.2 on http://localhost:3000
```

The compose file skips the setup wizard and creates the admin user from `.env` (`ROCKETCHAT_ADMIN_USER`, `ROCKETCHAT_ADMIN_PASSWORD`, `ROCKETCHAT_CREATE_TOKENS_SECRET`). That leaves the workspace unregistered (Community limits); registering it for the Starter plan needs a person with a Rocket.Chat Cloud account, see `docs/vendors/rocketchat.md`.

## Measurement outputs

```bash
npm run charts        # results/charts/cost-curve.{svg,png} from data/pricing.csv (benchmark charts are not produced)
npm run screenshots   # results/screenshots/<platform>-kit.png + side-by-side.png (configured platforms with a kit)
npm run video         # results/video/stream-demo/ (needs Stream keys)
```

## Other scripts

```bash
npm run snippets    # docs/snippets/<platform>.md from the // snippet:start send-order-card markers
npm run loc         # results/loc.json
npm run matrix      # results/requirements-matrix.csv + results/integration-effort.csv
```
