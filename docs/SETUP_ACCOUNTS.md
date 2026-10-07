# Account checklist

Written 2026-10-06 from each vendor's current docs (details and URLs in `docs/research/<vendor>.md`). Work through it in any order; a platform with missing keys is built from the docs and marked `written, not run` until its keys appear in `.env`. Copy `.env.example` to `.env` and fill in as you go. Nothing below needs a credit card except where marked **costs money**.

## Decisions you need to make first

**Decided 2026-10-06: no benchmarks for any platform.** Items 1 to 4 below are kept for the record; none of them needs action now. Everything else in this file (accounts, keys, dashboard settings) is still needed for the functional checks.

1. **Sendbird benchmark.** The Sendbird License Agreement (v4, updated 2026-07-27, https://sendbird.com/terms) section 5.1(iii) forbids disclosing or publishing "performance or capacity statistics or the results of any benchmark test performed on the SendBird Services" without Sendbird's prior written consent. Section 5.1(iv) also forbids using the service "to develop a competitive product offering, promote or support any product or service that is competitive". Per the brief, the Sendbird benchmark is **skipped** unless you obtain written consent. The requirement checks still run (they are functional, not performance statistics), but 5.1(iv) is worth a look by legal before publication.
2. **PubNub benchmark.** PubNub Terms and Conditions (https://www.pubnub.com/trust/legal/terms-and-conditions/) section 3.1(g) forbids publishing "performance or capacity statistics or the results of any benchmark test" without written consent, and 3.1(h) forbids load testing without approval. The PubNub benchmark is **skipped** unless you obtain consent. Checks still run.
3. **Ably** permits it. Terms (https://ably.com/terms) section 3.5 allows publishing benchmarks without approval if you make the benchmark available to Ably on publication, give enough detail to replicate, and grant Ably reciprocal rights. This repo and `docs/METHODOLOGY.md` satisfy the detail requirement; you need to send Ably the link when the article goes out.
4. **Stream, TalkJS, CometChat, Twilio, Rocket.Chat**: no benchmarking or publication clause found in their terms. TalkJS article 4.3 and Twilio's AUP forbid use that degrades the service; our 1 msg/s run is well under every documented limit.
5. **Twilio SMS/WhatsApp leg costs money** (number rental, message fees). I will ask before doing anything that costs money; the chat-only Twilio build needs nothing paid.

## Shared pieces

| Item | What to do | `.env` keys |
|---|---|---|
| Public URL for webhooks | Run `ngrok http 4000` (ngrok 3.37 is installed and configured). Paste the HTTPS URL. Every vendor's webhook URL is `<PUBLIC_URL>/api/webhooks/<platform>`. Keep the tunnel running while checks run. | `PUBLIC_URL` |
| Translation provider (optional) | For native, Twilio, PubNub, Ably and Rocket.Chat (and Sendbird/Stream if their translation is plan-gated on your account) translation is done from our server. DeepL API Free (https://www.deepl.com/pro-api, key ends in `:fx`) or Google Cloud Translation v2 key. Leave empty and translation is `not run` on those builds. | `TRANSLATION_PROVIDER=deepl` or `google`, `DEEPL_API_KEY`, `GOOGLE_TRANSLATE_API_KEY` |

## Sendbird (baseline)

- **Account:** https://dashboard.sendbird.com/auth/signup/. The sign-up gives a **free 30-day trial** (pricing page: up to 1,000 MAU, 20 peak connections, unlimited messages, 6-month retention, "All pro features", no card). After the trial it drops to the **Developer plan** (free, 100 users, 10 peak connections, Pro features). Both cover this build.
- **Create app:** Dashboard → Create + → name, Product type **Chat**, Region (pick `north-virginia-1`; put the choice in `SENDBIRD_REGION`). Also try creating a **Desk** product-type application in the same org if the dashboard offers it; if it is not offered or asks for sales contact, note that and I mark Desk `gated`.
- **Settings to turn on:**
  1. Settings → Application → General: copy **Application ID** (case-sensitive) and the **master API token** (webhook signatures only work with the master token).
  2. Settings → Application → Security → Access token permission: **Deny login** without token (so session tokens are required).
  3. Settings → Chat → Webhooks: enable, URL `<PUBLIC_URL>/api/webhooks/sendbird`, tick "Include member information", events: `group_channel:message_send`, `group_channel:message_update`, `group_channel:message_read`, `group_channel:join`, `group_channel:invite`, `message:report`, `user:report`, `profanity_filter:*` (all four), `image_moderation:block`.
  4. Settings → Chat → Channels → Group channels: "Chat history" on (default) so the agent sees earlier messages.
  5. Moderation (profanity filter with regex, type **replace** or **block**) is set by our setup script through the Platform API per custom channel type `order`; nothing to click. If the API returns a plan error, note it.
  6. Translation: the docs say auto-translation needs "contact our sales team". If the dashboard shows a translation toggle under Settings → Chat, turn it on; otherwise leave it and I will try `translationTargetLanguages` on send and record the error.
  7. Push: nothing to configure; browser push is out of scope for this build (and the JS Chat SDK does not support it anyway).
- **Keys:** `SENDBIRD_APP_ID`, `SENDBIRD_API_TOKEN` (master), `SENDBIRD_REGION`, `SENDBIRD_PLAN` (e.g. `free-trial`).

## Stream

- **Account:** https://getstream.io/try-for-free. **Build plan** (free: 1,000 MAU, 100 concurrent connections, 5M stored messages, no card, no expiry). Optionally apply for the **Maker account** from the dashboard (2,000 MAU, modified Start plan, $100/mo moderation credit) if the team qualifies; it unlocks more moderation.
- **Create app:** name, pick Chat, **region** (`us-east`; locked once set). Copy **API key** and **secret** from the app overview.
- **Settings to turn on:**
  1. Webhooks: our setup script sets `event_hooks` via the API to `<PUBLIC_URL>/api/webhooks/stream`; alternatively Dashboard → app → Webhooks → URL. Events: `message.new`, `message.updated`, `message.flagged`, `user.flagged`, `member.added`.
  2. Moderation → Policies: check that a policy for key `chat:order` can be created and whether **Blocklist & Regex Filters**, **AI Text (Platform Circumvention)** and **Semantic Filters** are available on your plan. The setup script creates block lists (regex + email + domain) through the API; if the plan refuses semantic/AI filters it records `gated`. Note what the dashboard shows as locked.
  3. Auto-translation: the Chat pricing page puts it on Elevate+. The setup script calls `updateAppSettings({ auto_translation_enabled: true })` and records the response; if your Build app rejects it, translation falls back to our server provider and is marked `gated`.
  4. Feeds: enable the Feeds product on the same app (Build tier: 5,000 activities/month). Nothing else to click; the script creates the feed group.
  5. Push: nothing to configure; browser push is out of scope (Stream does not support web push).
- **Keys:** `STREAM_API_KEY`, `STREAM_API_SECRET`, `STREAM_REGION`, `STREAM_PLAN` (e.g. `build` or `maker`).

## TalkJS

- **Account:** https://talkjs.com/dashboard/. Every account has a **test app** that is free forever with no limits; use it. Plan features for the build: email notifications and **contact masking** are on all plans; **real-time translation** and custom email domain need Growth. Note which plan the test app reports.
- **Settings to turn on:**
  1. Settings: copy **App ID** (test) and a **Secret key** (`sk_test_…`); mark that key "use for webhooks".
  2. Security: enable **Authentication required** (we issue JWTs).
  3. Chat UI → Roles: create roles `buyer`, `seller`, `support`. For `buyer` and `seller`, open **Mask unwanted content** and tick phone numbers and email addresses, suppression **Global**; add a custom suppression pattern for the words `venmo`, `paypal`, `zelle`, `cash app`, `whatsapp`, `telegram` (one regex: `\b(venmo|paypal|zelle|cash\s?app|whatsapp|telegram)\b`, case-insensitive). Enable file sharing and typing indicator for all roles.
  4. Settings → Webhooks: URL `<PUBLIC_URL>/api/webhooks/talkjs`, events `message.sent`, `message.updated`, `notification.triggered`, `notification.sent`, `notification.delivered`.
  5. Notifications → Email: leave enabled. TalkJS sends email itself through Postmark and has **no custom SMTP**, so Mailpit cannot receive it. Set a real inbox you control for `seller_ben` if you want to see the email; I verify the trigger through the `notification.*` webhooks and record that Mailpit was not reachable by design.
  6. Settings → Localization: paste a Google Cloud Translation API key **only if** the plan allows translation (Growth). Otherwise skip and translation is `gated`.
- **Keys:** `TALKJS_APP_ID`, `TALKJS_SECRET_KEY`, `TALKJS_PLAN` (e.g. `test-mode`), `TALKJS_REGION=eu` (TalkJS hosts only in the EU).

## CometChat

- **Account:** https://app.cometchat.com. **Build plan** (free forever: 100 MAU, 25 concurrent, unlimited messages, 6-month retention, no card). It includes rule-based moderation, phone and email detection, AI rules, translation, email and SMS notifications, and webhooks.
- **Create app:** name, region **`us`**. Credentials page: copy **App ID**, **Auth Key**, **REST API Key**, region.
- **Settings to turn on:**
  1. Moderation → Rules: enable the default **Contact Details Removal** (phone), **Email Detection** and **Profanity Filter** rules with action **Block**; create one custom rule with a regex list for `venmo|paypal|zelle|cash ?app|whatsapp|telegram`, action Block. Do **not** enable the legacy Data Masking / Profanity extensions (the docs warn running both causes problems).
  2. Chat & Messaging → Features → Extensions: enable **Message Translation**.
  3. Application → Webhooks → Create: URL `<PUBLIC_URL>/api/webhooks/cometchat`, enable Basic Auth with a username/password you invent (put them in `.env`), triggers `message_sent`, `message_edited`, `moderation_engine_blocked`, `moderation_engine_approved`, `group_member_added`.
  4. Notifications → Settings → Email: enable, provider **Custom provider**, URL `<PUBLIC_URL>/api/webhooks/cometchat` (same URL as the webhook; our server branches on the payload's `trigger`), Basic Auth same credentials, wait window **1 minute** (the minimum). Our server receives the payload and sends the email to Mailpit.
- **Keys:** `COMETCHAT_APP_ID`, `COMETCHAT_REGION`, `COMETCHAT_AUTH_KEY`, `COMETCHAT_REST_API_KEY`, `COMETCHAT_WEBHOOK_USER`, `COMETCHAT_WEBHOOK_PASS`, `COMETCHAT_PLAN=build`.

## Twilio Conversations (classic)

- **Account:** https://www.twilio.com/try-twilio. Free trial, no card: 30 days, 100 SMS, 100 WhatsApp messages, verified numbers only, Twilio-provided templates only for SMS/WhatsApp bodies. Chat-to-chat is unaffected by trial limits. Note the product is now called **Conversations (classic)** in the console.
- **Settings to turn on:**
  1. Console home: copy **Account SID** and **Auth Token**. Account → API keys & tokens: create a **Standard API key** (SID + secret).
  2. Conversations (classic) → Services: use the **Default Conversations Service** or create one; copy its **SID** (`IS…`).
  3. Conversations (classic) → Global webhooks (or Service → Webhooks): **Pre-event** URL `<PUBLIC_URL>/api/webhooks/twilio` with `onMessageAdd`; **Post-event** URL `<PUBLIC_URL>/api/webhooks/twilio` (same URL; our server branches on `EventType`) with `onMessageAdded`, `onMessageUpdated`, `onParticipantAdded`. Method POST. Our setup script can set these through the API too.
  4. Reachability: set by our setup script (`ReachabilityEnabled=true` on the service configuration); nothing to click.
  5. **SMS or WhatsApp leg (costs money, your call):** either buy an SMS-capable number (**costs money**), or join the **WhatsApp sandbox** (free of rental; messages count against the 100 trial WhatsApp messages). Sandbox: Messaging → Try it out → Send a WhatsApp message; send `join <keyword>` from your phone to +1 415 523 8886; clear the sandbox "When a message comes in" URL. Put your phone number in `SELLER_PHONE`. I will not add a phone participant until you confirm.
- **Keys:** `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_API_KEY_SID`, `TWILIO_API_KEY_SECRET`, `TWILIO_CONVERSATIONS_SERVICE_SID`, `TWILIO_SMS_FROM` (optional), `TWILIO_WHATSAPP_FROM=whatsapp:+14155238886` (optional), `SELLER_PHONE` (optional), `TWILIO_REGION=us1`, `TWILIO_PLAN=trial`.

## PubNub

- **Account:** https://admin.pubnub.com/. **Free plan** (200 MAU or 1M transactions, no card, 7-day retention max, 5 Functions, Events & Actions trial with 1 listener). Covers the build except the moderation dashboard (Channel Monitor, paid) and Auto Moderation (paid, beta).
- **Create app and keyset:** Apps & Keysets → create app → keyset (Testing). Copy **Publish key**, **Subscribe key**, **Secret key**.
- **Keyset features to enable:** Presence; **Message Persistence** (7 days); **App Context** (pick bucket region `us-east-1`; turn on User, Channel and Membership metadata events; leave "Disallow Get All …" unticked) — if the portal offers **DataSync** instead of App Context on a new account, choose it and tell me; **File Sharing** (region, 7-day retention); **Access Manager**; **Stream Controller**; skip Mobile Push (no browser push on PubNub, and browser push is out of scope).
- **Functions:** Functions → create module `marketplace` → **Before Publish** function on channel pattern `order-*`. Paste the code from `packages/server/src/vendors/pubnub.function.js` once it exists (I will print it in the build log), then **Start** the module. This is the server-side moderation.
- **Events & Actions:** create a listener on **Message sent**, JSONPath filter `$.channel` matches `order-*`, action **Webhook** to `<PUBLIC_URL>/api/webhooks/pubnub`, add a custom header `x-pubnub-secret: <any string>` and put the same string in `.env`.
- **Keys:** `PUBNUB_PUBLISH_KEY`, `PUBNUB_SUBSCRIBE_KEY`, `PUBNUB_SECRET_KEY`, `PUBNUB_WEBHOOK_SECRET`, `PUBNUB_REGION` (bucket region), `PUBNUB_PLAN=free`.

## Ably

- **Account:** https://ably.com/sign-up. **Free plan** (6M messages/month, 200 connections, 200 channels, 1-day history, no card, no time limit). Everything the build needs is on Free, including web push, webhooks and moderation integrations. Note: Chat docs say rooms keep 30 days of history but the Free plan limit is 1 day; I will record what actually happens.
- **Create app:** Dashboard → Create new app → copy the root **API key** (`appId.keyId:secret`) from the API Keys tab.
- **Settings to turn on:**
  1. Integrations → New integration rule → **Webhook**: source `channel.message`, channel filter `.*::\$chat$`, URL `<PUBLIC_URL>/api/webhooks/ably`, enveloped, enable signing (`X-Ably-Signature`).
  2. Integrations → **Moderation** → **Custom (before publish)**: URL `<PUBLIC_URL>/api/webhooks/ably` (same URL as the webhook rule; our server recognises the moderation request shape), room filter `order-.*`, retry timeout 2000 ms, failed action **reject**.
  3. Nothing for persistence (chat rooms persist by default). Push: out of scope (Ably's Web Push needs no Firebase; described in its vendor doc only).
- **Keys:** `ABLY_API_KEY`, `ABLY_PLAN=free`, `ABLY_REGION=nearest-edge` (Ably routes to the nearest datacenter; region is not selectable on Free).

## Rocket.Chat (self-hosted)

- **Nothing to buy.** `docker compose --profile rocketchat up -d` starts Rocket.Chat 8.9.0 with MongoDB 8.2 on http://localhost:3000.
- **Human step (registration):** the setup wizard requires registering the workspace with a Rocket.Chat Cloud account and clicking a verification email; unregistered workspaces are "no longer supported" and fall to Community limits (0 private apps, 10k push/month). Open http://localhost:3000, create the admin user (username `admin`, pick a password, put it in `.env`), fill the org step, then **Register workspace** with your email and verify. This gives the free **Starter** plan (50 users). If you would rather skip it, set `ROCKETCHAT_SKIP_WIZARD=1` in `.env` before first start and the compose file forces `Setup_Wizard=completed` (Community limits, no marketplace apps).
- After registration, nothing else to click: our setup script logs in as admin, sets `Message_CustomFields_Enabled`, read receipts, SMTP to Mailpit, offline email notifications, auto-translate provider (only if `TRANSLATION_PROVIDER` is set; Rocket.Chat supports DeepL paid, Google, Microsoft, LibreTranslate), disables the REST rate limiter, creates users and an outgoing webhook.
- **Keys:** `ROCKETCHAT_URL=http://localhost:3000`, `ROCKETCHAT_ADMIN_USER`, `ROCKETCHAT_ADMIN_PASSWORD`, `ROCKETCHAT_CREATE_TOKENS_SECRET` (any long string; also passed to the container), `ROCKETCHAT_PLAN=starter` or `community`.

## When you are done with a vendor

Tell me which one, and I run `PLATFORM=<vendor> npm run check` and the benchmark (where terms allow), then update the matrix, the vendor doc and the build log.
