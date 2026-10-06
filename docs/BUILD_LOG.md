# Build log

Timestamps are local time (America/New_York) unless marked. Each entry names the platform it concerns, or `all` / `foundation`.

## 2026-10-06

- 14:20 `foundation` Started. Repo was empty except `docs/OUTLINE.md`. Machine: Apple M4 Pro, 48 GB, macOS 27.0.1, Node 24.16.0, npm 11.13.0, Docker 28.4.0 / Compose v2.39.2, Playwright Chromium builds already cached. Network: Comcast residential, Baltimore MD, US. ngrok 3.37.3 and ffmpeg 8.0.1 present; cloudflared absent.
- 14:20 `foundation` Docker daemon was not running; started Docker Desktop. Host port 5432 is already occupied by a local Postgres, so Compose maps Postgres to host port 5433.
- 14:20 `foundation` Parent directory `../package.json` declares `packageManager: yarn@4.6.0`, which makes pnpm/corepack refuse to run here. This repo declares `packageManager: npm@11.13.0` in its own `package.json` and uses npm workspaces.
- 14:22 `all` Spawned one research pass per vendor to read current docs for the account checklist (plans, dashboard steps, SDK versions, moderation/translation/push/email features, rate limits, webhooks, terms-of-service clauses about benchmarking). Raw notes land in `docs/research/<vendor>.md`.
- 14:35 `foundation` Scaffold, API server (Express 5), native WebSocket server, shared `ChatAdapter`, web UI (Vite 8, React 19), Playwright checks and bench harness written. First `npm install` pulled a critical advisory through `concurrently` (shell-quote); replaced it with a 10-line launcher script. 0 vulnerabilities after.
- 14:38 `native` Both instances ran the migration at once and Postgres raised a `pg_type` unique violation for the second. Fixed with `pg_advisory_lock` around the DDL.
- 14:41 `native` Requirement checks: 6 pass, translation `not run` (no `TRANSLATION_PROVIDER` in `.env`). Moderation fixture: 4/4 masked, 0 false positives (the order number `4155550134` passes because the phone pattern requires separators or a leading `+`).
- 14:42 `foundation` Bench harness smoke run exposed a measurement bug: the native adapter echoes the sender's own message, and the sender page's `recv` mark was being matched as the receive. Marks now carry the page role and only the receiver page's marks count. Worth remembering for every SDK that echoes sends.
- 14:45 `foundation` A background bench run failed because the harness was invoked with a relative path from the wrong working directory. Re-run with absolute paths; no results were written by the failed run.
