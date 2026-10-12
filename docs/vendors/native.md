# Native build (no chat vendor)

Status: adapter written and run. Checks: 6 pass, 1 not run (translation, no provider in `.env`). Not benchmarked (author's decision of 2026-10-06 to skip all benchmarks).

## What it is

- `packages/native-server`: a WebSocket + HTTP server run as two identical instances (ports 4101 and 4102). Postgres holds channels, members, messages, read state, reports and uploaded files. Redis pub/sub fans every event out to all instances; the buyer connects to instance 1 and everyone else to instance 2 so the cross-instance path is exercised on every run. Nodemailer sends the offline email to Mailpit.
- `packages/adapters/native`: the browser adapter, a JSON protocol over the browser `WebSocket` API. No third-party code in the client bundle.
- Token: HMAC-signed `userId.exp.sig` issued by our API server with a shared secret.

## Versions

| Piece | Version |
|---|---|
| ws | 8.22.0 |
| pg | 8.23.1 |
| ioredis | 6.0.0 |
| nodemailer | 10.0.15 |
| postgres image | 16-alpine |
| redis image | 7-alpine |
| mailpit image | axllent/mailpit:latest (pulled 2026-10-06) |

Docs relied on: none from a vendor. The `ws` README, the `pg` and `ioredis` READMEs, and the Mailpit API (`/api/v1/messages`, `/api/v1/message/{id}`) at https://mailpit.axllent.org/docs/api-v1/.

## Plan, region, terms

Not applicable. Runs on the test machine in Docker.

## The seven requirements against Sendbird

| # | Status | How, and the gap against Sendbird |
|---|---|---|
| 1 | built | `channels` row keyed `order-<orderId>` with `{orderId, listingId}` JSONB; members table. Sendbird gives this with `createChannel({customType, data})`. |
| 2 | built | `kind=order_card` message with the card in JSONB; the order service PATCHes the row over an internal HTTP endpoint and Redis publishes `message_updated`. Sendbird: `updateUserMessage` with `data`. Same number of moving parts once you own the server, but every one of them is ours to run. |
| 3 | built | Regex masking on the server before insert (patterns in `packages/shared/src/moderation.ts`); 4/4 blocked, 0 false positives on the fixture. Reports go to a `reports` table and there is no moderation UI, no image moderation, no AI classifier. Sendbird has a profanity/regex filter and a report API with a dashboard queue. |
| 4 | documented, not tested (was: built) | Presence is a Redis key with a 6 s TTL refreshed every 2 s; a message to an offline member triggers an email. Browser push: out of scope for this build; a native build would have to store push subscriptions and call the push service itself. Sendbird has mobile push built in but no browser push in its JS SDK. |
| 5 | built, not run | The sender asks our `/api/translate` for all target languages and attaches a translations map; the reader picks their language. No provider was configured, so it was not run. Sendbird has translation built in (plan-gated, see its doc). |
| 6 | built | `add_member` inserts the agent; history is a plain query so the agent sees everything. Sendbird: `inviteWithUserIds`. |
| 7 | built | `read_state` table, typing events fanned out over Redis, image upload stored as `BYTEA` and served from the same instance. Sendbird: `markAsRead`, `startTyping`, `sendFileMessage`. |

## What this build does not handle

Listed so the article does not oversell it:

- Offline sync and reconnection. A client that drops the socket gets nothing until it reconnects and re-requests history; there is no gap-fill or resume token.
- Read state across several devices. One `last_read_message_id` per user, no per-device state; "online" is one boolean per user, so a second tab going away marks the user offline.
- Presence at scale. The Redis TTL scheme is fine for three users and a disaster for fifty thousand; no heartbeating strategy, no presence fan-out limits.
- Abuse tooling. No ban, mute, shadow-ban, rate limiting per user, image moderation, or a queue UI. Reports sit in a table.
- Real push delivery. No FCM/APNs token registry, no delivery pipeline, no push templates or badge counts.
- Message search, threads, reactions, mentions, unread counts, pagination beyond `LIMIT`, file virus scanning, CDN delivery for attachments, data retention, GDPR deletion, audit logs.
- Horizontal scale of the WebSocket tier. Two instances share nothing except Redis; there is no sticky routing, no backpressure, and a Redis outage silently stops cross-instance delivery.

## Surprises

- Both instances start at the same time and both ran `CREATE TABLE IF NOT EXISTS`; Postgres raised a unique violation on `pg_type` for the second one. Serialised the migration with `pg_advisory_lock`.
- The order number `4155550134` passes the phone regex only because the pattern requires separators; a looser pattern that catches `4155550134` also masks order numbers. That is the trade-off every regex moderation setup makes.
