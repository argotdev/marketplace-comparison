# Prompt for the writing model

Copy everything below this line into the writing model's context, along with the files it names.

---

You are writing the Stream blog article **"7 Sendbird Alternatives in 2026, Tested on a Real Marketplace Chat Build"** from the evidence in this repo. Follow `docs/OUTLINE.md` for structure. Every factual claim in the article must trace to a file in this repo; if the repo does not contain it, do not write it.

## What the repo is

One buyer/seller marketplace chat (used road bike, order `ord_1001`, users `buyer_ana` in Spanish, `seller_ben` in English, `agent_sam` for support) built first on Sendbird, then rebuilt with the same features on Stream, TalkJS, CometChat, Twilio Conversations, PubNub, Ably, Rocket.Chat (self-hosted) and a native build. The same Playwright checks ran against every build.

## Read these, in this order

1. `docs/METHODOLOGY.md` for how checks were run and what each status word means.
2. `results/requirements-matrix.csv` for the per-vendor, per-requirement result. This is the source of truth for every "can / can't" claim.
3. `docs/vendors/<platform>.md` for the per-vendor story. Each opens with a "Compared with Sendbird" block (same / Sendbird-only / vendor-only). Use that framing for every vendor section.
4. `docs/BUILD_LOG.md` for what actually happened, including failures, workarounds and vendor quirks. The best anecdotes are here.
5. `docs/snippets/<platform>.md` for code. Each file opens with the Sendbird baseline snippet, then the vendor's equivalent. Quote them unchanged.
6. `docs/MIGRATION_MAP.md` for the Sendbird-to-each-vendor concept mapping.
7. `results/integration-effort.csv`, `results/bundle-size.csv`, `results/kit-network.csv` for the numbers you are allowed to quote.
8. `results/charts/cost-curve.png` (built from `data/pricing.csv`, each row has a source URL and date) for pricing.
9. `results/screenshots/` (six UI kits, a side-by-side, and `talkjs-kit-masking.png`) and `results/video/stream-demo/stream-demo.mp4` for visuals.

## Rules

- **Never invent a result.** Use the matrix status words as written: `native`, `built`, `vendor hook + our rules`, `partial`, `gated`, `unavailable`, `not run`. If a cell is `not run`, say it was not run and why.
- **No performance claims.** No latency, connect time, throughput or ordering numbers exist in this repo, and none may be quoted from elsewhere as if measured here. Bundle size and kit network transfer are the only size figures, and they are package properties, not performance.
- **Requirement 4 (offline notification) was documented, not tested.** Say "documented" for every vendor on that row.
- **Our fallbacks do not count as vendor features.** Where the matrix says `unavailable` (for example translation on Twilio, PubNub and Ably), the vendor has no feature. Do not credit the vendor with the server-side code we wrote for the native build.
- **Sendbird is the baseline, not the villain.** Report what Sendbird did better (its regex filter had zero false positives; CometChat's blocked the order number) with the same weight as what it did worse (translation is Pro/Enterprise and sales-gated).
- **PubNub was blocked**, not failed: its chat SDK needs App Context, which a fresh account cannot enable without a support ticket. Report that as the finding.
- **Rocket.Chat ran as an unregistered Community workspace.** Its gates (read receipts, Apps-Engine moderation) are stated with that condition.
- **TalkJS masking** works in its own UI components but not through its headless Data API. Say both halves.
- Treat every vendor the same: same requirements, same checks, same tone. Do not pad a weak section or trim a strong one.
- Quote the fixed moderation fixture exactly when you discuss it (four must-block messages, two must-pass messages, listed in `docs/METHODOLOGY.md`).
- Secrets: app IDs appear in hostnames in some results files. Do not reproduce hostnames, keys or tokens in the article.
- When unsure whether something happened, check `docs/BUILD_LOG.md`. If it is not there, it did not happen.
