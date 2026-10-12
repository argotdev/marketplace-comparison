# TalkJS

Status: **run** on 2026-10-07 against the TalkJS test app. Checks: 1, 2, 6, 7 pass; 3 fails with 0/4 blocked because contact masking is a per-role dashboard setting not yet configured on this app; 4 cannot complete until the TalkJS webhook is configured in the dashboard (TalkJS emails from its own infrastructure, so the webhook is the only evidence); 5 fails as expected (translation needs Growth). Results in `results/checks/talkjs.json`. Research notes with every URL: `docs/research/talkjs.md`.

## Compared with Sendbird

- **Same:** order conversation with custom data, custom message with live edits, escalation by adding a participant, typing and image attachments. Read receipts exist (the Data API exposes one `everyoneReadUntil` value, not a per-user event).
- **Sendbird can, TalkJS can't:** report a user or message into a moderation queue (TalkJS has none); translation on the test plan (TalkJS needs Growth plus a Google key; Sendbird needs Pro plus sales, so neither worked here); a desk product; US hosting (TalkJS is EU-only).
- **TalkJS can, Sendbird can't:** contact masking (phone, email, links, custom regex) as a per-role dashboard setting on every plan, with no server code; a React kit that renders in the page with a one-component override for the card; native email to offline participants.

## Versions

| Package | Version | Role |
|---|---|---|
| `@talkjs/core` | 1.12.0 | headless Data API (sessions, conversations, send/edit/subscribe, typing, read, uploads) |
| `@talkjs/react-components` | 0.3.9 | Components SDK kit view (`Chatbox`, renders in the page; peer React 17 to 19) |
| `jose` | 6.2.12 | HS256 user JWTs on the server |
| REST | `https://api.talkjs.com/v1/{appId}` | server half |

Not used: the Classic SDK (`talkjs` 0.46.0 + `@talkjs/react` 0.1.12), which renders chat inside an iframe served from talkjs.com. TalkJS steers new sign-ups to the Components SDK since October 2025.

## Docs relied on

- Components SDK overview and the Classic/Components split: https://talkjs.com/docs/UI_Components/
- React Chatbox: https://talkjs.com/docs/UI_Components/React/Chatbox/
- Theme components (`Message` override): https://talkjs.com/docs/UI_Components/Theme/Overview/?framework=react and https://talkjs.com/docs/UI_Components/Theme/Theme_components/Message/
- Data API: https://talkjs.com/docs/Data_APIs/JavaScript/ , conversations https://talkjs.com/docs/Data_APIs/JavaScript/Conversations/ , participants https://talkjs.com/docs/Data_APIs/JavaScript/Participants/ , messages https://talkjs.com/docs/Data_APIs/JavaScript/Messages/ , session https://talkjs.com/docs/Data_APIs/JavaScript/TalkSession/
- Authentication (JWT): https://talkjs.com/docs/Features/Security/Authentication/
- REST API: https://talkjs.com/docs/REST_API/ , messages https://talkjs.com/docs/REST_API/Messages/ , participation https://talkjs.com/docs/REST_API/Participation/ , users https://talkjs.com/docs/REST_API/Users/ , rate limits https://talkjs.com/docs/REST_API/Rate_Limits/
- Contact masking: https://talkjs.com/resources/how-to-ensure-that-contact-information-cant-be-shared-in-a-talkjs-chat/ and https://talkjs.com/docs/Features/Moderation/
- Email notifications: https://talkjs.com/docs/Features/Notifications/Email_Notifications/
- Translation: https://talkjs.com/docs/Features/Language_Support/
- Webhooks and signature: https://talkjs.com/docs/Webhooks/ , https://talkjs.com/docs/Features/Security/#verify-webhook-integrity
- Read receipts and typing: https://talkjs.com/docs/Features/Messages/Read_Receipts/ , https://talkjs.com/docs/Features/Conversations/Typing_Indicator/
- Hosting region: https://talkjs.com/security/

## Plan and region

Test mode (free forever, no limits, no card). Hosting is EU-only (DigitalOcean EU, GCS EU buckets), so every round trip from the US test machine crosses the Atlantic; the result files record that. Plan features that matter: contact masking and email on all plans; translation and a custom email sender domain on Growth.

## Terms

https://talkjs.com/terms/ : no clause about benchmarking, performance testing or publishing comparative results. Article 4.3 forbids use that causes "reduced efficiency"; the harness stays far below the REST limits (burst 500, 9 req/s). No benchmark is run for any platform (author's decision of 2026-10-06).

## The seven requirements against Sendbird

| # | Status | How, and the gap against Sendbird |
|---|---|---|
| 1 | native | `conversation(id).createIfNotExists({ subject, custom })` and two `participant().createIfNotExists()` calls. Custom data is `Record<string,string>`; Sendbird's `data` is one string, so neither is typed JSON (Stream is). |
| 2 | native | Custom data on the message carries the card as a JSON string; the server edits with `PUT /messages/{id}`; the client diffs `subscribeMessages` snapshots by `editedAt` to raise the update. TalkJS has no "message updated" event; snapshots are the model. |
| 3 | native (masking) / built (report) | Contact masking is a per-role dashboard setting with phone, email, link toggles and custom regex; it works on all plans, which beats Sendbird (RE2 regex via Platform API, rules engine Enterprise). Whether the Data API delivers the masked text (the check reads what our React UI renders from the Data API) is unconfirmed; the Components SDK UI definitely masks. No report API and no moderation queue: reports go to our server. |
| 4 | documented, not tested (was: native (email), not run (push)) | TalkJS emails offline participants itself, grouped after an inactivity window, from `notifications@talkjs.com`. There is no custom SMTP, so Mailpit cannot receive it; the check asserts the `notification.*` webhook instead and needs an https `PUBLIC_URL`. Sendbird has no email at all. Browser push is FCM + a service worker; not run. |
| 5 | gated | `message.translate('en')` from `@talkjs/core` 1.12 on the reader's side, needing Growth and a Google Cloud Translation key in the dashboard. The Components `<Chatbox>` has no translation props yet. Built fallback otherwise. Sendbird: sales-enabled translation. |
| 6 | native | Third participant with `ReadWrite`; full history visible. No desk product (same as Stream). |
| 7 | native | Read receipts via `everyoneReadUntil` on the conversation snapshot (no per-user read event in the Data API); `markAsTyping()` with automatic expiry and `subscribeTyping`; `session.uploadImage` then a file content block. |

## Kit view

`<Chatbox appId userId token conversationId theme={{ Message }}>`: one `Message` override (7 lines) that renders our card for `custom.type === 'order_card'` and otherwise returns `defaultTheme.Message`, which `@talkjs/react-components` exports. No iframe, no dashboard theme editing.

## Documented rate limits (recorded; no benchmark is run)

No Data API send limit is documented ("requests sent from the pre-built UIs do not count"); the REST limit is 9 req/s sustained. Not exercised: no benchmark is run.

## Surprises so far

- TalkJS now has a headless core and an in-page React kit; most third-party write-ups still describe the iframe Classic SDK.
- The Data API exposes messages as full snapshots with `loadMore`, not as events, so "message updated" and "new message" are both diffs.
- Email cannot be pointed at a test SMTP server, which makes requirement 4 unobservable in Mailpit by design.
