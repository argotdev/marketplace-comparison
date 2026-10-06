# Build log

Timestamps are local time (America/New_York) unless marked. Each entry names the platform it concerns, or `all` / `foundation`.

## 2026-10-06

- 14:20 `foundation` Started. Repo was empty except `docs/OUTLINE.md`. Machine: Apple M4 Pro, 48 GB, macOS 27.0.1, Node 24.16.0, npm 11.13.0, Docker 28.4.0 / Compose v2.39.2, Playwright Chromium builds already cached. Network: Comcast residential, Baltimore MD, US. ngrok 3.37.3 and ffmpeg 8.0.1 present; cloudflared absent.
- 14:20 `foundation` Docker daemon was not running; started Docker Desktop. Host port 5432 is already occupied by a local Postgres, so Compose maps Postgres to host port 5433.
- 14:20 `foundation` Parent directory `../package.json` declares `packageManager: yarn@4.6.0`, which makes pnpm/corepack refuse to run here. This repo declares `packageManager: npm@11.13.0` in its own `package.json` and uses npm workspaces.
- 14:22 `all` Spawned one research pass per vendor to read current docs for the account checklist (plans, dashboard steps, SDK versions, moderation/translation/push/email features, rate limits, webhooks, terms-of-service clauses about benchmarking). Raw notes land in `docs/research/<vendor>.md`.
