# Ably

Status: **run** on 2026-10-12 against a Free Ably app. Checks: 1, 2, 6, 7 pass; 3 fails with 0/4 blocked because the app's Integrations page offers no moderation rule type at all, so the documented before-publish hook could not be configured (gated: Ably would need to enable moderation on the app); 5 is unavailable (no translation). Results in `results/checks/ably.json`. Research notes with every URL: `docs/research/ably.md`.

## Compared with Sendbird

- **Same:** a room per order, structured card in message metadata with native message edits, typing indicators.
- **Sendbird can, Ably can't:** channel membership and metadata (Ably rooms are channels; access is a token capability), read receipts, file uploads, translation, user reporting or banning ("coming soon" on the pricing page), a kit that renders custom messages, a desk product. Moderation exists only as a hook: your endpoint or Hive, Tisane, Bodyguard, Azure.
- **Ably can, Sendbird can't:** documented ordering and exactly-once delivery guarantees per channel (not measured here), browser push without Firebase, and terms that explicitly allow publishing benchmarks.

## Versions

| Package | Version | Role |
|---|---|---|
| `ably` | 2.29.0 | Realtime (browser) and Rest (server) |
| `@ably/chat` | 1.4.0 | Chat SDK: rooms, messages (send/update/history), typing, presence; React bindings at `@ably/chat/react` |
| `@ably/chat-react-ui-kit` | 0.3.0 | kit view; Ably marks it experimental |

## Docs relied on

- Chat setup: https://ably.com/docs/chat/setup ; rooms: https://ably.com/docs/chat/rooms ; messages: https://ably.com/docs/chat/rooms/messages ; history: https://ably.com/docs/chat/rooms/history ; typing: https://ably.com/docs/chat/rooms/typing ; presence: https://ably.com/docs/chat/rooms/presence ; media: https://ably.com/docs/chat/rooms/media
- Moderation: https://ably.com/docs/chat/moderation , custom hook https://ably.com/docs/chat/moderation/custom
- Token auth and capabilities: https://ably.com/docs/auth/token , https://ably.com/docs/auth/capabilities
- Webhooks: https://ably.com/docs/integrations/webhooks
- Web push: https://ably.com/docs/push/configure/web
- Ordering and delivery: https://ably.com/docs/platform/architecture/message-ordering , https://ably.com/docs/platform/architecture/idempotency , https://ably.com/docs/connect/states
- Limits: https://ably.com/docs/platform/pricing/limits ; Free plan: https://ably.com/docs/platform/pricing/free
- React UI kit: https://ably.com/docs/chat/getting-started/react-ui-kit , components https://ably.com/docs/chat/react-ui-kit/components
- Edge network: https://ably.com/docs/platform/architecture/edge-network
- Terms: https://ably.com/terms

## Plan and region

Free plan (6M messages/month, 200 connections, 200 channels, 1-day history, no card, no time limit). Clients are routed to the nearest of 15+ datacenters by latency-based DNS; region is not selectable below Enterprise.

## Terms

Ably Terms §3.5 explicitly permits benchmarks and publishing the results without approval, provided the benchmark is made available to Ably on publication, enough detail is given to replicate it, and Ably gets reciprocal rights. This repository and `docs/METHODOLOGY.md` are that detail; send Ably the link when the article goes out. No benchmark is run for any platform (author's decision of 2026-10-06), so these conditions are moot.

## The seven requirements against Sendbird

| # | Status | How, and the gap against Sendbird |
|---|---|---|
| 1 | built | A room is just a channel: no member list, no metadata. Membership is the token capability `order:*` plus a member list on our server plus presence; order ids travel in message headers. Sendbird has channels with members and `data`. |
| 2 | native | `messages.send({ text, metadata })` and `messages.update(serial, {...})` with `message.updated` events; edit rights are capabilities (`message-update-own` for users, the API key for the server). |
| 3 | built on a native hook | The custom before-publish rule posts the message to our server, which answers `accept` with the masked text (whole-message replacement) within the rule's timeout; rejected publishes would return error 42213 to the sender. Vendor integrations (Hive, Tisane, Bodyguard, Azure) are the native alternative. No reporting, muting or banning yet (pricing page says "coming soon"). |
| 4 | documented, not tested (was: built) | No email; a webhook rule on `channel.message` feeds our presence check and mailer. Web push exists natively through the browser Push API with Ably-generated VAPID keys (no FCM), not run. |
| 5 | built | No translation. |
| 6 | built | No membership to add anyone to: the agent's token already covers `order:*`, so "Get help" is a server-side record plus the agent attaching. History is `messages.history`, subject to the Free plan's 1-day storage (the Chat docs say 30 days by default; which one applies on Free will be recorded when run). |
| 7 | mixed | Typing is native (`keystroke`/`stop`, throttled heartbeat). Read receipts are not a Chat SDK feature: `lastReadSerial` is published as presence data (message annotations are the other documented route). No uploads: the test image is inlined as a data URL in metadata (64 KiB message limit); production would use object storage. |

## Ordering and delivery guarantees (why Ably is here)

Ably documents in-order delivery per channel for Realtime publishers, exactly-once delivery through idempotent publishing (2-minute dedupe window) and connection recovery with no loss for drops under about two minutes. With benchmarks skipped, these documented guarantees are what the article can cite; nothing here was measured by us.

## Kit view

Providers (`ChatClientProvider` from `@ably/chat/react`, `ThemeProvider`, `AvatarProvider`, `ChatSettingsProvider`) around `<ChatWindow roomName customHeaderContent>`. The kit has no custom message renderer, so the latest order card is rendered in the header slot, which is a workaround and is labelled as such in the screenshot caption.

## Documented rate limits (recorded; no benchmark is run)

50 messages per second per channel and per connection on every plan; 64 KiB per message. Not exercised: no benchmark is run.

## Surprises so far

- `messages.update` takes `(serial, { text, metadata, headers })` and requires the text, so a metadata-only update still re-sends the text.
- Ably rooms have no membership, so the simplest requirement (two members on a channel) is the one that needs the most scaffolding.
- Ably is the only vendor whose terms say benchmarks may be published, with conditions.
