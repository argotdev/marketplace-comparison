# PubNub

Status: **written, not run**. No `PUBNUB_PUBLISH_KEY` / `PUBNUB_SUBSCRIBE_KEY` / `PUBNUB_SECRET_KEY` in `.env` as of 2026-10-06. Adapter, courier demo and server half type-check against the pinned SDKs. Research notes with every URL: `docs/research/pubnub.md`.

## Versions

| Package | Version | Role |
|---|---|---|
| `@pubnub/chat` | 1.0.4 | Chat SDK (channels, messages, memberships, typing, read receipts, files, reports); bundles its own `pubnub` 13.0.1 |
| `pubnub` | 13.0.3 | core SDK: courier publish/subscribe in the browser; PAM tokens, App Context, message actions, presence on the server |
| `@pubnub/react-chat-components` | not installed | 0.34.0 from May 2024; repository archived 2026-06-17, support ended 2025-01-01 |

## Docs relied on

- Account and keyset setup: https://www.pubnub.com/docs/general/setup/account-setup
- Chat SDK configuration: https://www.pubnub.com/docs/chat/chat-sdk/build/configuration
- Channels: create https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/create , watch https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/watch , join https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/join , invite https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/invite , typing https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/typing-indicator
- Messages: send/receive https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/send-receive , updates https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/updates , history https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/history , files https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/files , read receipts https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/read-receipts , unread https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/unread , moderation https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/moderation
- Permissions (Access Manager with the Chat SDK): https://www.pubnub.com/docs/chat/chat-sdk/build/features/users/permissions ; Access Manager: https://www.pubnub.com/docs/general/security/access-control
- App Context: https://www.pubnub.com/docs/general/metadata/basics
- Functions (Before Publish): https://www.pubnub.com/docs/serverless/functions/overview
- Events & Actions: https://www.pubnub.com/docs/serverless/events-and-actions/overview , webhook action https://www.pubnub.com/docs/integrations/event-forwarding/create-webhook-action , payloads https://www.pubnub.com/docs/integrations/event-forwarding/payloads
- Core SDK publish/subscribe: https://www.pubnub.com/docs/sdks/javascript/api-reference/publish-and-subscribe ; message actions: https://www.pubnub.com/docs/sdks/javascript/api-reference/message-actions
- Limits: https://www.pubnub.com/docs/general/setup/limits
- Push (no web push): https://www.pubnub.com/docs/general/push/send
- Terms: https://www.pubnub.com/trust/legal/terms-and-conditions/
- Geolocation tutorial the courier demo follows: https://www.pubnub.com/blog/google-maps-geolocation-tracking-in-realtime-with-javascript/

## Plan and region

Free plan (200 MAU or 1M transactions, no card, 7-day retention max, 5 Functions, Events & Actions with one listener and no retries). Single global origin `ps.pndsn.com`; the App Context bucket region is chosen per keyset (`PUBNUB_REGION`).

## Terms

PubNub Terms and Conditions §3.1(g): no disclosing or publishing "performance or capacity statistics or the results of any benchmark test" without PubNub's written consent; §3.1(h): no load testing without approval. No benchmark is run for any platform (author's decision of 2026-10-06), so this clause needs no consent request. The requirement checks will run.

## The seven requirements against Sendbird: what the Chat SDK gives and what we wrote

| # | Status | Chat SDK | Ours |
|---|---|---|---|
| 1 | native | `createGroupConversation` with a chosen channel id and scalar custom data; memberships in App Context | nothing (custom is scalar-only, fine for two ids) |
| 2 | built | message `meta` carries the card on send; `message.onUpdated` fires on message actions | the update: meta cannot change after publish, so the server adds a message action `order_card` with the new JSON and the adapter picks the latest action over the original meta (~30 lines) |
| 3 | built | `message.report(reason)` publishes to `PUBNUB_INTERNAL_MODERATION_<channel>`; `setRestrictions` for mute/ban (server, Access Manager) | the filter itself: a Before Publish Function with our regex set, pasted into the portal; no dashboard queue on Free (Channel Monitor is paid), so reports are mirrored to our queue |
| 4 | built | nothing (no email; push is FCM/APNs only, no browser tokens) | Events & Actions webhook → `whereNow` presence → Mailpit |
| 5 | built | nothing | server provider, translations in meta |
| 6 | native | `channel.invite(user)` (needs `manage` in the token) and `getHistory` | the PAM grant that includes `manage` on `order-*` |
| 7 | native | `setLastReadMessage` + `onReadReceiptReceived` (receipts stored as membership custom); `startTyping` / `onTypingChanged` (signals); `MessageDraft.files` | pagination over `getHistory`'s 25-message cap |

Threads: `message.createThread` exists in the SDK (one level, channel `PUBNUB_INTERNAL_THREAD_…`); not needed by this build and not wired.

## Courier demo

`src/courier.ts`: `startCourier` publishes `{ lat, lng }` once a second on `courier-<orderId>` over the same connection; `watchCourier` subscribes and sets `window.__courier`, which `/order/:id?platform=pubnub` polls to move its marker. The kit page (no kit exists) hosts the Start/Stop button.

## Documented rate limits (recorded; no benchmark is run)

Documented guidance: 10 to 15 messages per second per channel; 32 KiB per message. Not used: no benchmark is run.

## Surprises so far

- Chat SDK 1.0 (May 2026) renamed most streaming APIs (`connect()` → `onMessageReceived()`, etc.); most published examples are out of date.
- `custom` on channels, users and memberships is scalar-only; `getHistory` caps at 25.
- `@pubnub/chat` ships its own nested `pubnub` (13.0.1) alongside the root `pubnub` (13.0.3).
- New accounts may be offered "DataSync" instead of App Context while the Chat SDK still documents App Context; the core SDK's typings now carry both.
