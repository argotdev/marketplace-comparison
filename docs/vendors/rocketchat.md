# Rocket.Chat (self-hosted)

Status: **run locally**. Rocket.Chat 8.9.0 LTS with MongoDB 8.2 in Docker Compose (`--profile rocketchat`), unregistered workspace (Community limits). Checks ran on 2026-10-06 (`results/checks/rocketchat.json`); not benchmarked (author's decision to skip all benchmarks). Research notes with every URL: `docs/research/rocketchat.md`.

## Compared with Sendbird

- **Same:** private group per order with custom fields, card in message custom fields with live edits (as the author), escalation by invite, typing and image attachments, report into a moderation console. Four of six checks pass.
- **Sendbird can, Rocket.Chat can't (unregistered Community workspace):** a regex content filter (only a case-sensitive word list; a pre-send hook needs an Apps-Engine app, which needs a registered workspace), read receipts (answer "enterprise feature"), an embeddable SDK (the UI is an iframe or your own DDP client), a desk product in the same user model (Omnichannel is a separate visitor model).
- **Rocket.Chat can, Sendbird can't:** run on your own hardware with your data (690 MiB plus MongoDB at idle), native email to offline users over your own SMTP, self-hosted auto-translate providers including LibreTranslate.

## Versions

| Piece | Version |
|---|---|
| Rocket.Chat image | `registry.rocket.chat/rocketchat/rocket.chat:8.9.0` (1.6 GB) |
| MongoDB image | `docker.io/mongodb/mongodb-community-server:8.2-ubi8` (1.35 GB), single-node replica set `rs0` |
| Client SDK | none installable: `@rocket.chat/ddp-client` 1.2.0 depends on `@rocket.chat/core-typings`, which declares `typia` with a yarn-only `patch:` protocol that npm rejects (`EUNSUPPORTEDPROTOCOL`); every published version has it. The adapter speaks DDP over the browser `WebSocket` (72 lines) plus REST with `fetch`. |
| `@embeddedchat/react` | 0.2.3 (2025-03): peer dependency `react <19`, not installable with React 19, and no custom message rendering; not used |

## Docs relied on

- Deploy with Docker Compose: https://docs.rocket.chat/docs/deploy-with-docker-docker-compose and https://github.com/RocketChat/rocketchat-compose
- Settings through environment variables: https://docs.rocket.chat/docs/manage-settings-using-environmental-variables
- Plans and registration: https://docs.rocket.chat/docs/our-plans , https://docs.rocket.chat/docs/register-your-workspace , https://docs.rocket.chat/docs/rocketchat-setup-wizard
- REST: login https://developer.rocket.chat/apidocs/login-with-username-and-password , users.create https://developer.rocket.chat/apidocs/create-user , users.createToken https://developer.rocket.chat/apidocs/create-users-token , groups.create https://developer.rocket.chat/apidocs/create-group , groups.invite https://developer.rocket.chat/apidocs/invite-users-to-group , chat.sendMessage https://developer.rocket.chat/apidocs/send-message , chat.update https://developer.rocket.chat/apidocs/update-message , rooms.media https://developer.rocket.chat/apidocs/upload-media-files-to-a-room , subscriptions.read https://developer.rocket.chat/apidocs/mark-channel-as-read , chat.getMessageReadReceipts https://developer.rocket.chat/apidocs/get-message-read-receipts , chat.reportMessage https://developer.rocket.chat/apidocs/report-message , integrations.create https://developer.rocket.chat/apidocs/create-integration
- Realtime API (DDP): https://developer.rocket.chat/docs/realtime-api , https://developer.rocket.chat/apidocs/stream-room-messages-realtime , https://developer.rocket.chat/docs/stream-notify-room
- Message settings (custom fields, bad words): https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/message
- Read receipts: https://docs.rocket.chat/docs/read-receipts ; moderation: https://docs.rocket.chat/docs/moderation ; auto-translate: https://docs.rocket.chat/docs/auto-translate-messages ; email: https://docs.rocket.chat/docs/email ; rate limiter: https://docs.rocket.chat/docs/rate-limiter
- Embedding (iframe `?layout=embedded`): https://developer.rocket.chat/docs/adding-a-rocketchat-chat-room-to-your-web-app
- System requirements: https://docs.rocket.chat/docs/system-requirements

## Setup steps (what it took)

1. `docker compose --profile rocketchat up -d`: two containers, `mkt-chat-mongodb-1` (replica set initialised by a one-line `mongosh` command in the compose entrypoint) and `mkt-chat-rocketchat-1`. First boot about 90 s after the 3 GB of images are pulled.
2. Setup wizard skipped with `OVERWRITE_SETTING_Show_Setup_Wizard=completed` and the admin created from `ADMIN_USERNAME` / `ADMIN_PASS` / `ADMIN_EMAIL`; both worked on 8.9.0.
3. Settings forced at boot through `OVERWRITE_SETTING_*`: message custom fields on with a JSON schema (`type`, `card`, `orderId`, `translations` as strings), read receipts on, REST rate limiter off (default is 10 calls per minute per endpoint), DDP per-method limit raised to 200 per 10 s, SMTP to Mailpit, bad-words filter on with the off-platform word list, **CORS on for `http://localhost:5173`** (without it the browser cannot call the REST API from our app), iframe integration enabled for the kit view, registration form disabled.
4. `CREATE_TOKENS_FOR_USERS_SECRET` on the container so our API server can mint per-user tokens with `users.createToken`.
5. Our setup script creates the three users, an outgoing webhook (to `host.docker.internal:4000`, since the container cannot see `localhost`), and would configure auto-translate if a provider key existed.

### What needs a person

Registering the workspace with a Rocket.Chat Cloud account (email + verification link, or the offline token flow in the Cloud portal) is the step that gives the free **Starter** plan (50 users, read receipts, Apps-Engine, unlimited push). Without it the workspace runs under **Community** limits: no private apps (so no pre-send moderation hook), 10,000 push per month, and premium features refuse with "This is an enterprise feature". Nothing in this build attempted registration.

## Containers and idle memory

`docker stats --no-stream` after about two minutes idle (post-boot, no traffic): Rocket.Chat 690 MiB, MongoDB 253 MiB. Compare: the native build's Postgres + Redis containers idle at a fraction of that. Images: 1.6 GB + 1.35 GB.

## The seven requirements against Sendbird

| # | Status | How, and the gap against Sendbird |
|---|---|---|
| 1 | native | Private group named `order-<id>` with `customFields {orderId, listingId}` and both members, created by the buyer (`user` role has `create-p`). Admin is not a member, so the server half looks rooms up with `rooms.adminRooms`. |
| 2 | native | `chat.sendMessage` with `customFields {type, card}` (schema-enforced) plus a message attachment so Rocket.Chat's own UI shows a card-like block; `chat.update` with new `customFields`. Only members can edit in a private group, so the server edits as the message author (token minted with `users.createToken`). Live updates arrive on `stream-room-messages`. |
| 3 | native (word list only) | The built-in filter is a bad-words list that replaces listed words with asterisks: `whatsapp` masked; `Venmo` (capitalised in the fixture), the phone number and the email delivered unmasked (1 of 4 blocked, 0 false positives; the match appears case-sensitive). A regex filter needs an Apps-Engine app (`IPreMessageSentModify`), which an unregistered workspace cannot install. Reports go through `chat.reportMessage` / `moderation.reportUser` into the admin Moderation console (all plans) and were read back from `moderation.reportsByUsers`. Sendbird's regex profanity filter is configuration. |
| 4 | documented, not tested (was: native) | SMTP settings point at Mailpit; the per-room preference `emailNotifications: all` is set by each member on open (the account default is mentions-only). Email arrives immediately once Rocket.Chat considers the member offline. Caveat measured below: presence stays `online` for a while after the socket closes, so a message sent right after the seller leaves is not emailed. No web push. |
| 5 | native, not run | Auto-Translate (Google, Microsoft, DeepL paid, LibreTranslate) is built in, per user per room; `not run` because no provider key is configured (and Rocket.Chat refuses DeepL free keys). |
| 6 | native | `groups.invite` by a member; `groups.history` gives the agent everything earlier. |
| 7 | typing native; receipts gated; attachments native | Typing is the `stream-notify-room` `user-activity` stream, as the official client uses. Read receipts answer **"This is an enterprise feature"** on this unregistered workspace, so they are `gated` (Starter includes them per the docs). Image upload is the two-step `rooms.media` + `rooms.mediaConfirm`. |

## Kit view

Rocket.Chat's prebuilt UI in an iframe (`/group/order-<id>?layout=embedded`) logged in through `postMessage({ externalCommand: 'login-with-token' })`. Rocket.Chat has no custom message components, so the order card appears as a message attachment (title, text, image). The JavaScript the iframe loads comes from the Rocket.Chat server itself and is measured by `results/kit-network.csv`, not by the npm bundle build (which only measures our adapter).

## Documented rate limits (recorded; no benchmark is run)

Defaults: REST 10 calls per minute per endpoint (disabled for this build), DDP per-method 20 calls per 10 s per user (raised to 200). Not exercised: no benchmark is run.

## Surprises

- No installable npm client: the official `@rocket.chat/ddp-client` is blocked by a yarn-only `patch:` dependency in `core-typings`.
- CORS is off by default, so a separate web app cannot call the REST API until `API_Enable_CORS` and `API_CORS_Origin` are set.
- Admin cannot read or edit inside private groups it is not a member of; "admin" is not a superuser for room content.
- Attachments reject relative `image_url` values ("Invalid href value provided").
- Read receipts are an enterprise/licensed feature even though the setting toggles exist on Community.
- Presence lag after disconnect: a client that only logs in over DDP stays `online` for more than 3 minutes after its socket closes; a client that also calls `UserPresence:online` (as the official web client does) flips to `offline` 60 s after closing. The adapter now announces presence and the email check waits 65 s before the buyer sends.
