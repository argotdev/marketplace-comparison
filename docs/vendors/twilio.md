# Twilio Conversations (classic)

Status: **written, not run**. No Twilio credentials in `.env` as of 2026-10-06. Adapter and server half type-check against `@twilio/conversations@3.0.1` and `twilio@6.1.2`. Research notes with every URL: `docs/research/twilio.md`.

## Compared with Sendbird

- **Same:** conversation per order with JSON attributes, structured card in message attributes with live edits, escalation by adding a participant, typing and media attachments.
- **Sendbird can, Twilio can't:** a custom message type (attributes only, our UI renders them); any content filter or report API (moderation is your webhook, run in Twilio's pre-event hook); translation; read receipts as events (a read horizon the client must advance itself; delivery receipts only for SMS/WhatsApp legs); a React UI kit; a desk product.
- **Twilio can, Sendbird can't:** put the seller's phone in the same conversation over SMS or WhatsApp so a phone reply lands in the thread (costs money; written, not run).

## Versions

| Package | Version | Role |
|---|---|---|
| `@twilio/conversations` | 3.0.1 | browser SDK (Node 20+ engines) |
| `twilio` | 6.1.2 | Node server SDK: Access Tokens, REST, webhook signature validation |

## Docs relied on

- Product landing (now "Conversations (classic)"): https://www.twilio.com/docs/conversations-classic
- Quickstart: https://www.twilio.com/docs/conversations/quickstart
- Access tokens: https://www.twilio.com/docs/conversations/create-tokens
- JS SDK reference 3.0.1: https://sdk.twilio.com/js/conversations/releases/3.0.1/docs/
- Webhooks (pre/post, modify response): https://www.twilio.com/docs/conversations/conversations-webhooks , configuration resource https://www.twilio.com/docs/conversations/api/webhook-configuration-resource
- Webhook security: https://www.twilio.com/docs/usage/webhooks/webhooks-security
- Participants (chat and SMS/WhatsApp bindings): https://www.twilio.com/docs/conversations/api/conversation-participant-resource
- Reachability: https://www.twilio.com/docs/conversations/reachability ; read horizon: https://www.twilio.com/docs/conversations/read-horizon ; delivery receipts: https://www.twilio.com/docs/conversations/delivery-receipts
- Media: https://www.twilio.com/docs/conversations/media-support-conversations
- Web push (documented, not evaluated): https://www.twilio.com/docs/conversations-classic/javascript/push-notifications-web
- Limits: https://www.twilio.com/docs/conversations/conversations-limits
- WhatsApp sandbox: https://www.twilio.com/docs/conversations-classic/use-twilio-sandbox-for-whatsapp
- Regions: https://www.twilio.com/docs/global-infrastructure/conversations-api-with-twilio-regions
- Terms: https://www.twilio.com/en-us/legal/tos , AUP https://www.twilio.com/en-us/legal/aup

## Plan and region

Free trial (no card, 30 days, verified numbers only, template-only SMS/WhatsApp bodies; chat-to-chat unaffected). Region `us1`; `ie1` has chat but no SMS/WhatsApp.

## Terms

No clause about benchmarking, performance testing or publishing comparative results in the Terms of Service or the Acceptable Use Policy. The AUP's "Interference with the Services" heading is the nearest; a 1 msg/s run is far from it. No benchmark is run for any platform (author's decision of 2026-10-06).

## The seven requirements against Sendbird

| # | Status | How, and the gap against Sendbird |
|---|---|---|
| 1 | native | Conversation per order with `uniqueName` and JSON `attributes`; participants are REST/SDK `add` calls. Similar to Sendbird's group channel with `data`. |
| 2 | built | No custom message type at all: the card is message `attributes` (4 KB) and our UI renders it; the server edits attributes over REST and clients get `messageUpdated`. Sendbird has `customType` + `data` and a kit that renders custom types. |
| 3 | built | No content filter, no report API. The pre-event `onMessageAdd` webhook lets our server rewrite the body (`{ body, attributes }` JSON reply) within 5 s, which is the documented mechanism; our regex mask runs there. Needs a public URL. Reports go to our queue. Sendbird: profanity filter + report API + dashboard. |
| 4 | documented, not tested (was: built (email) / native (push, not evaluated)) | No email. Post-event `onMessageAdded` webhook plus Reachability (`User.isOnline`) decides when to mail Mailpit. Browser push via FCM is supported per the docs; browser push is out of scope for this build. |
| 5 | built | No translation; our server provider with translations in attributes. |
| 6 | native | `conversation.add('agent_sam')` (role permitting) or REST. The Twilio-specific twist: `addPhoneParticipant` binds the seller's phone over SMS or the WhatsApp sandbox so a phone reply lands in the same conversation. It costs money (number rental, message or WhatsApp conversation fees) and is not called until you confirm. |
| 7 | native, with caveats | Read receipts are a read horizon that the client must advance itself (`setAllMessagesRead`), surfaced to others through `participantUpdated`; delivery receipts exist only for SMS/WhatsApp legs. `typing()` is a signal with a timeout, no explicit stop. Media uploads work, but content URLs are temporary (300 s). |

## Kit view

None. Twilio has no first-party, supported chat UI kit for Conversations; the page lists what exists (demo app, Paste components, Flex UI).

## Documented rate limits (recorded; no benchmark is run)

Documented default: 30 state-changing actions per second per conversation. Not exercised: no benchmark is run.

## Surprises so far

- The product is now called "Conversations (classic)", and the `/docs/conversations` landing page describes a new agentic platform; the chat SDK docs live under `conversations-classic`.
- Twilio's own SDK never sets the read horizon; without `setAllMessagesRead` nobody ever reads anything.
- The pre-event webhook can rewrite a message, which is a cleaner moderation hook than most vendors offer, but it also means moderation is impossible without a public server.
