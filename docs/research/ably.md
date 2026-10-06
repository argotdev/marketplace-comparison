# Ably (Pub/Sub + Ably Chat SDK) — research notes

Researched 2026-10-06 against live ably.com/docs pages and npm. Every claim carries the URL it was read from.
Items I could not confirm from a doc page are marked **unconfirmed** with the URL tried.

Target build: buyer/seller marketplace chat, web only, TypeScript, React + Vite client, Node server.

---

## 1. Account & plan

| Item | Finding | Source |
|---|---|---|
| Sign-up | Free package, "No credit card is required to sign up and there's no time limit on how long you can try it for." | https://ably.com/docs/platform/pricing/free |
| Free: messages/month | 6,000,000 | https://ably.com/docs/platform/pricing/free, https://ably.com/docs/platform/pricing/limits |
| Free: message rate | 500 msg/s (account-wide); 250,000 msgs/hour | https://ably.com/docs/platform/pricing/limits |
| Free: peak connections | 200 concurrent | https://ably.com/docs/platform/pricing/free |
| Free: peak channels | 200 concurrent | https://ably.com/docs/platform/pricing/free |
| Free: history retention | Default history TTL 24 h; max storage TTL 1 day. (Standard: 72 h default, 30 days max. Pro/Enterprise: 365 days max.) | https://ably.com/docs/platform/pricing/limits |
| Free: support | Best-effort SLO, community (Discord/Stack Overflow) | https://ably.com/docs/platform/pricing/free |

**Plan-gated features (from the pricing comparison table, https://ably.com/pricing):**
- Message persistence: all plans (retention length is what differs, see table above).
- Webhooks and HTTP integrations: all plans. Streaming integrations (Kafka, Kinesis, etc.) are listed as paid-plan features.
- Push (mobile + web): all plans.
- Chat: 1:1, group rooms, reactions, typing, message history, "Moderation — Integration with leading moderation vendors": all plans.
- LiveObjects: all plans.
- SSO: Google/GitHub on Free; SAML/SCIM/Okta Enterprise only.
- Pricing page lists user muting/banning/blocking/message flagging as "Coming soon".
- **Chat retention vs. Free plan — conflict in docs.** Chat docs say "Message persistence is enabled by default for all chat rooms, with messages stored for 30 days" (https://ably.com/docs/chat/rooms/history, https://ably.com/docs/chat/rooms). The Pub/Sub limits page says Free max storage is 1 day. Whether a Free app actually gets 30 days of chat history is **unconfirmed**; assume the plan limit (1 day) wins until tested.

## 2. Dashboard setup (before first message)

1. Create an app in the dashboard ("Create a new app to get started with Ably") — https://ably.com/docs/platform/account
2. API keys tab: the app has keys; create a key with "Create a new API key", pick capabilities, optionally restrict to channels and enable token revocation. Key format `appId.keyId:secret` (e.g. `I2E_JQ.OqUdfg:EVKV...`). — https://ably.com/docs/platform/account/app/api . The default "root" key's capabilities are not stated on that page (**unconfirmed**; in practice it is created with all capabilities).
3. Persistence: Chat rooms map to channel `<roomId>::$chat` and the Chat docs say persistence is on by default (30 days) for chat rooms — https://ably.com/docs/chat/rooms . For plain Pub/Sub channels you add a channel rule in app settings: Create rule → match expression (e.g. `chat:*`) → tick "Persist all messages" / "Persist last message" — https://ably.com/docs/channels . Without a rule, Ably keeps messages for 2 minutes only — https://ably.com/docs/storage-history/storage .
4. Token auth: client uses `authCallback` or `authUrl`; server issues an Ably TokenRequest (`ably.auth.createTokenRequest({ clientId, capability })` on an `Ably.Rest` client) or signs a JWT with the API key secret (claims `x-ably-capability`, `x-ably-clientId`, `iat`, `exp`, header `kid` = key name). Max access-token TTL 24 h. — https://ably.com/docs/auth/token , https://ably.com/docs/auth/token/ably-tokens , https://ably.com/docs/auth/token/jwt . Chat SDK hard-requires a `clientId` on every client — https://ably.com/docs/chat/setup .
5. Integrations (webhooks): app → Integrations → new rule; sources channel.message / channel.presence / channel.lifecycle / channel.occupancy; optional signing via `X-Ably-Signature` — https://ably.com/docs/integrations/webhooks (details in §10).
6. Push (web): no FCM credentials needed for browsers. Ably auto-generates a VAPID key pair on first activation; you host a service worker and call `client.push.activate()` — https://ably.com/docs/push/configure/web (details in §7).
7. Chat moderation: app → Integrations → moderation rule (Hive model-only, Hive dashboard, Tisane, Bodyguard, Azure Content Safety, or Custom before-publish). — https://ably.com/docs/chat/moderation (details in §5).
8. Presence, occupancy, typing: nothing to enable in the dashboard; configured per room via `RoomOptions` (occupancy events off by default because they add billable messages) — https://ably.com/docs/chat/rooms , https://ably.com/docs/chat/rooms/occupancy .

**.env keys:** `ABLY_API_KEY` (server only; full key `appId.keyId:secret`). Client never holds the key; it calls `/api/ably-token`. Optionally `VITE_ABLY_...` only for throwaway demos (the React getting-started uses `VITE_ABLY_API_KEY` but setup docs say never expose keys to clients) — https://ably.com/docs/chat/getting-started/react , https://ably.com/docs/chat/setup .

## 3. SDKs

**npm (checked 2026-10-06 with `npm view`):**

| Package | Version | Notes |
|---|---|---|
| `ably` | 2.29.0 (modified 2026-09-23) | Pub/Sub core (ably-js) |
| `@ably/chat` | 1.4.0 (published 2026-06-01, modified 2026-10-01) | peerDeps: `ably ^2.19.0`, `react ^18 \|\| ^19`, `react-dom ^18 \|\| ^19`. React hooks ship in the same package at `@ably/chat/react`. |
| `@ably/chat-react-ui-kit` | 0.3.0 (published 2025-10-30, modified 2026-03-18) | peerDeps: `@ably/chat ^1.1.0`, react/react-dom 18 or 19 |
| `@ably/chat-react-ui-components` | 0.1.2, **deprecated** | npm deprecation notice: "renamed to @ably/chat-react-ui-kit" |

Install: `npm install ably @ably/chat` — https://ably.com/docs/chat/setup

**Doc URLs and API shapes (Chat SDK JS):**
- Init: `const chatClient = new ChatClient(realtimeClient, { logLevel })`; wrap an `Ably.Realtime({ authCallback, ... })`. React: `<ChatClientProvider client={chatClient}>`; create clients outside the component tree. — https://ably.com/docs/chat/setup
- Rooms: `chatClient.rooms.get(roomId, options?)`; `RoomOptions` = `presence.enableEvents` (default true), `occupancy.enableEvents` (default false), `typing.heartbeatThrottleMs` (default 10000), `messages.rawMessageReactions`, `messages.defaultMessageReactionType`. `room.attach()`, `room.detach()`, `rooms.release(roomId)`. Status: initializing → attached → suspended/failed; `room.onStatusChange()`. Channel name `<roomId>::$chat`. — https://ably.com/docs/chat/rooms
- Send: `await room.messages.send({ text, metadata?, headers? })`. `metadata` = "animations, effects or links to other resources such as images"; `headers` = "Do not use the headers for authoritative information." Message fields: `serial`, `clientId`, `text`, `headers`, `metadata`, `userClaim`, `timestamp`, `action` (`message.create|update|delete`), `version { serial, timestamp, clientId, description, metadata }`, `reactions`. — https://ably.com/docs/chat/rooms/messages
- Update (edit): `await room.messages.update(message.serial, message.copy({ text }), { description? })` — https://ably.com/docs/chat/rooms/messages . The signature on the current page is `update(serial, updatedMessage, details?)`, not `update(message, {text})`.
- Delete (soft delete): `await room.messages.delete(message.serial, { description? })` — https://ably.com/docs/chat/rooms/messages
- Who may edit/delete: controlled by capabilities `message-update-own` / `message-update-any` / `message-delete-own` / `message-delete-any` — https://ably.com/docs/auth/capabilities
- Subscribe: `room.messages.subscribe((event) => ...)`, `event.type` ∈ `ChatMessageEventType.Created | Updated | Deleted`; returns `{ unsubscribe }`. — https://ably.com/docs/chat/rooms/messages
- Single message: `room.messages.get(serial)`. — same page
- History: `room.messages.history({ orderBy: OrderBy.NewestFirst, limit, start?, end? })` (limit max 1000, default 100); paginated `items`, `hasNext()`, `next()`. `historyBeforeSubscribe()` for catching up before subscription. — https://ably.com/docs/chat/rooms/history
- Typing: `room.typing.keystroke()`, `room.typing.stop()`, `room.typing.subscribe()`, `room.typing.current()`; event `typing.set.changed` with `currentlyTyping` / `currentTypers` / `change`. Indicator persists `heartbeatThrottleMs` + 2000 ms grace. All clients must share the same throttle. — https://ably.com/docs/chat/rooms/typing
- Presence: `room.presence.enter(data?)`, `update()`, `leave()`, `subscribe()`, `get()`, `isUserPresent(clientId)`; events Enter/Leave/Update/Present; member has `clientId`, `data`, `extras`, `userClaim`, `updatedAt`. Requires clientId. — https://ably.com/docs/chat/rooms/presence
- Occupancy: `room.occupancy.subscribe()`, `.current`, `.get()` → `{ connections, presenceMembers }`; debounced up to 15 s; opt-in. — https://ably.com/docs/chat/rooms/occupancy
- Message reactions: `room.messages.reactions.send(message, { name, type?, count? })`, `.delete(...)`, `.subscribe()` (summaries), `.subscribeRaw()` (needs `rawMessageReactions: true`); types Unique / Distinct (default) / Multiple; capabilities `annotation-publish`, `annotation-subscribe`. — https://ably.com/docs/chat/rooms/message-reactions
- Room reactions (ephemeral, not stored): `room.reactions.send({ name, metadata })`, `room.reactions.subscribe()`. — https://ably.com/docs/chat/rooms/reactions
- React hooks (`@ably/chat/react`): `ChatClientProvider`, `ChatRoomProvider`, `useChatClient`, `useChatConnection`, `useRoom`, `useMessages`, `useTyping`, `usePresence`, `usePresenceListener`, `useOccupancy`, `useRoomReactions`. — https://ably.com/docs/chat/getting-started/react
- **Read receipts: not a Chat SDK feature.** The Chat docs index lists no read receipts, delivery receipts, message status, mentions, threads, translation, file upload, user reporting, or ban/mute/block — https://ably.com/docs/chat . (Marketing pages for the Kotlin/Swift SDKs mention "read receipts" but no SDK doc page exists; treat as unconfirmed marketing.) How to build: use Pub/Sub message annotations, whose docs explicitly list "Read receipts: marking messages as read or delivered" as a use case (`channel.annotations.publish(serial, { type: 'receipts:read.v1', ... })`, summaries arrive on `channel.subscribe` as `message.summary`; needs `annotation-publish` capability and the channel rule "Message annotations, updates, deletes, and appends") — https://ably.com/docs/messages/annotations . Simpler alternatives: a `lastReadSerial` field in presence data, or a per-user side channel.
- **File attachments: no native upload.** Docs say upload to your own storage (e.g. S3), put `{ id, title, width, height }` or a URL into `message.metadata`, never put signed URLs in metadata, validate metadata as untrusted on display. — https://ably.com/docs/chat/rooms/media
- **Room membership: none.** Rooms have no member list or "add user" API; anyone whose token capability covers `<roomId>::$chat` can attach. Scope access via token capabilities (e.g. `{ "order-123::$chat": ["publish","subscribe","presence","history","annotation-publish"] }`) — https://ably.com/docs/auth/capabilities , https://ably.com/docs/chat/rooms . (Chat's own "join" semantics = attach + presence.enter.)
- Capability wildcards: `*` replaces a whole `:`-delimited segment; `foo:*` matches `foo:bar` and `foo:bar:baz`. — https://ably.com/docs/auth/capabilities
- User claims: JWT claims `ably.channel.<name>` carry trusted per-user metadata (e.g. role, displayName) that appear as `userClaim` on messages/presence — https://ably.com/docs/auth/token/jwt

## 4. UI kit

- Package: `@ably/chat-react-ui-kit` 0.3.0 (the older `@ably/chat-react-ui-components` is deprecated and points to it). Install `npm install ably @ably/chat @ably/chat-react-ui-kit react react-dom`; import `@ably/chat-react-ui-kit/dist/style.css`. Docs state "The UI Kit is experimental and highly likely to change in future releases." — https://ably.com/docs/chat/getting-started/react-ui-kit
- Providers: `ThemeProvider`, `AvatarProvider`, `ChatSettingsProvider` (+ `ChatClientProvider`). Components: `App`, `ChatWindow`, `ChatMessageList`, `ChatMessage`, `MessageInput`, `RoomInfo`, `RoomReaction`, `Sidebar`, `ParticipantList`, `Avatar`, typing/reaction helpers. — https://ably.com/docs/chat/react-ui-kit , https://ably.com/docs/chat/react-ui-kit/components
- **Custom message rendering: not supported.** Components page: "There is currently no render prop, slot system, or custom renderer prop available for message display." `ChatWindow` only accepts `customHeaderContent` / `customFooterContent`; `ChatMessageList` `children` renders after the messages. `ChatMessage` props: `message`, `onEdit`, `onDelete`, `onReactionAdd`, `onReactionRemove`, `className`. — https://ably.com/docs/chat/react-ui-kit/components
- Styling guide (with/without Tailwind): https://ably.com/docs/chat/react-ui-kit/component-styling

## 5. Moderation

- Overview: before-publish (vetted before publish, adds latency; rejected publish returns error code `42213` to the sender) vs after-publish (published, then reviewed; removals are soft deletes you must filter in the UI). — https://ably.com/docs/chat/moderation , https://ably.com/docs/chat/moderation/direct/bodyguard , https://ably.com/docs/chat/moderation/direct/hive-model-only
- Vendor integrations (set up as integration rules in dashboard or Control API):
  - Hive model-only (before-publish): https://ably.com/docs/chat/moderation/direct/hive-model-only
  - Hive dashboard (after-publish, human review; Hive POSTs deletes to `https://main.realtime.ably.net/chat/v4/moderation/hive/delete?clientId=<base64Id>`): https://ably.com/docs/chat/moderation/direct/hive-dashboard
  - Tisane: https://ably.com/docs/chat/moderation/direct/tisane
  - Bodyguard (before-publish; fields API key, Channel ID, default language, model URL): https://ably.com/docs/chat/moderation/direct/bodyguard
  - Azure Content Safety: https://ably.com/docs/chat/moderation/direct/azure
  - AWS Comprehend: not listed on the moderation page. **Unconfirmed** / not an integration (https://ably.com/docs/chat/moderation).
- Custom before-publish moderation (your own HTTP endpoint): Ably POSTs JSON `{ source, appId, room, site, ruleId, message: { clientId, text, metadata, headers, userClaim? } }`; respond HTTP 200 with `{ action: "accept" | "reject", rejectionDetail?: {...} (≤32 KiB), message?: { text, metadata, headers } }` (replacement is whole-message, text required). 4xx (not 429) = no retry; 429 = retry if configured; 5xx = retry with backoff. — https://ably.com/docs/chat/moderation/custom
- Common before-publish rule fields: Retry timeout (0–5000 ms, includes retries), Max retries, Failed action (reject or publish anyway), Too-many-requests action (fail or retry), Room filter regex. — https://ably.com/docs/chat/moderation
- After-publish custom: "Ably currently lacks a chat-specific API for this; use standard integration rules" (i.e. a webhook on `<roomId>::$chat` plus a REST delete). — https://ably.com/docs/chat/moderation/custom
- **User reporting / ban / mute / block: none native.** Not in the moderation docs or Chat feature index; pricing page marks muting/banning/blocking/flagging "Coming soon". — https://ably.com/docs/chat/moderation , https://ably.com/pricing . Build with your own report endpoint + token revocation / capability changes.
- Plan gate: pricing table lists "Moderation — Integration with leading moderation vendors" under all plans including Free. — https://ably.com/pricing

## 6. Translation

None native. No translation feature appears anywhere in the Chat docs index (https://ably.com/docs/chat) or moderation docs. Do it server-side (webhook → translate → publish to a per-locale channel or update message metadata).

## 7. Push & email

- Web push in ably-js: `new Ably.Realtime({ pushServiceWorkerUrl: '/service_worker.js', plugins: { Push } })`, then `await client.push.activate()`; `push.deactivate()` to unregister. Ably generates and reuses a VAPID key pair on first activation; you host a service worker that handles the `push` event. Browser web push uses the browser Push API, **not FCM**. — https://ably.com/docs/push/configure/web
- Publishing push: direct to `clientId` / `deviceId` / `recipient`, or via channel push subscriptions (message `extras.push`). Supported transports: FCM (Android), APNs (iOS), Web Push (browsers). — https://ably.com/docs/push
- Plan: "Mobile and web push notifications" on all plans. — https://ably.com/pricing
- Email: no email integration. Integration targets are webhooks (AWS Lambda, Google Cloud Functions, Cloudflare Workers, Zapier, IFTTT, Datadog), streaming (Kafka, Kinesis, AMQP, SQS, Pulsar), queues, inbound webhooks/Kafka. — https://ably.com/docs/integrations . Build offline email via webhook → your server → email provider.

## 8. Ordering & delivery guarantees (key section)

- Ordering: "Ably delivers messages to persistently connected subscribers on a channel in the order they were published when using the Realtime client library." REST publishing at high rate can arrive out of order ("a later HTTP request may reach Ably before a previous request"). Recovery edge case: if the server holding connection state is recycled during recovery, "messages may potentially be replayed out of order." — https://ably.com/docs/platform/architecture/message-ordering
- Exactly-once: "Each message is delivered precisely once to subscribers, and messages are neither lost nor duplicated." Idempotent publishing: "Multiple attempts to publish the same message result in only one delivery to subscribers." The at-least-once fallback: "if uncertainty exists about delivery, the message is resent." State/messages kept "typically two minutes". — https://ably.com/docs/platform/architecture/idempotency
- Idempotent REST publishing enabled by default (`idempotentRestPublishing`); dedupe window: "Ably can only detect duplicate messages within a 2-minute window"; custom ids must be deterministic. — https://ably.com/docs/pub-sub/advanced
- Connection recovery: continuity "provided that a dropped connection is re-established by the client within a limited interval (typically around two minutes)"; messages from others "will be delivered to it when reconnected if the connection was resumed within two minutes"; after that → `suspended` (retry every 30 s, continuity lost, use history to resync). `recover` mode (new SDK instance, e.g. page refresh) needs the recovery key and re-attach within 15 s. — https://ably.com/docs/connect/states
- Chat SDK: rooms go `suspended` after >2 min and auto-reattach; use `historyBeforeSubscribe()` on discontinuity. — https://ably.com/docs/chat/rooms , https://ably.com/docs/chat/rooms/messages

## 9. Rate limits

From https://ably.com/docs/platform/pricing/limits (Free unless stated):
- Max message size: 64 KiB (Free, Standard); 256 KiB (Pro, Enterprise)
- Inbound publish rate per connection: 50 msg/s (all plans)
- Publish rate per channel: 50 msg/s (all plans); channel bandwidth 1024 KiB/s
- Account message rate: 500 msg/s; 250k msgs/hour; 6M/month
- Concurrent connections 200; concurrent channels 200; channels per connection 200
- Token requests: 60,000/hour, 50/s
- Integrations: 250 invocations/s, webhook concurrency 25, batch size 50–100
- Chat-specific limits: none documented on the Chat pages; a room is one channel, so the per-channel 50 msg/s and 64 KiB limits apply. History page size max 1000 (https://ably.com/docs/chat/rooms/history). Chat livestream guide notes >5–10 msg/s becomes unreadable and recommends server batching ≤1 s (https://ably.com/docs/chat/guides/build-livestream).

## 10. Webhooks / integrations

https://ably.com/docs/integrations/webhooks
- Sources: `channel.message`, `channel.presence`, `channel.lifecycle`, `channel.occupancy`. Channel filter is a regex (e.g. `.*::\$chat$`).
- Modes: single request per event (retries on 5xx after 4 s then 20 s) or batched (exponential backoff `delay * sqrt(2)` from 1 s, cap 60 s, queue persists 5 min).
- Enveloped (metadata + payload in body, recommended) vs non-enveloped (raw payload, metadata in headers).
- Signing: optional `X-Ably-Signature` header = base64(HMAC-SHA256(body, key secret)); "The signature covers the request body only".
- Available on all plans ("Webhooks and HTTP integrations" row, https://ably.com/pricing); limits in §9.
- Chat messages on the webhook arrive as Pub/Sub messages on `<roomId>::$chat` (unconfirmed exact envelope shape for chat messages; not shown on the webhook page).

## 11. Terms (benchmarking)

https://ably.com/terms, section 3.5 (quoted by the page summary): "You may perform benchmarks, comparative tests, or performance evaluations of the Ably Solution, and publish results, without prior approval from Ably." Conditions: make the benchmark available to Ably on publication, provide enough detail to replicate, grant Ably reciprocal benchmarking rights. Does not extend to volumetric/stress tests beyond your account's usage limits.
AUP page at https://ably.com/aup returned 404; no further restriction found.

## 12. Regions / routing

https://ably.com/docs/platform/architecture/edge-network
- "more than 15 physical datacenters within the AWS network"; CloudFront "over 700 edge locations" as entry points. Region names are not listed on the page.
- Routing: latency-based DNS on `main.realtime.ably.net` (60 s TTL) "resolves to the closest datacenter, among those that are currently enabled".
- Fallback hosts: `a`–`e.ably-realtime.com` on a different DNS provider, direct-to-datacenter, may add up to 150 ms latency.
- Region selection / data residency: Enterprise only. Account can be configured so all data stays in EU or US; client sets `endpoint: 'example-eu'` (→ `example-eu.realtime.ably.net`). "This approach does not apply regional restrictions when you are using a persistent history feature" (needs placement constraints). — https://ably.com/docs/platform/account/enterprise-customization . Not selectable on Free/Standard/Pro.

## 13. Pricing page

https://ably.com/pricing (prices intentionally not recorded). Limits: https://ably.com/docs/platform/pricing/limits . Free package: https://ably.com/docs/platform/pricing/free

---

## Build implications (marketplace chat)

- Room per order/listing conversation: `rooms.get('order-123')`; access control purely via token capability on `order-123::$chat` plus `annotation-publish` for reactions/read receipts.
- Server: `Ably.Rest` with `ABLY_API_KEY`, `/api/ably-token` returning `createTokenRequest({ clientId, capability })` or a JWT with `ably.channel.*` claims for role/displayName.
- Read receipts, attachments, translation, user reporting, email: all app-built (annotations / own storage + metadata / webhook pipeline).
- Moderation: Custom before-publish rule to your endpoint, or Hive/Bodyguard/Tisane/Azure, all on Free.
- Expect Free history to be 1 day despite the "30 days" Chat default (verify empirically).
