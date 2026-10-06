# TalkJS — developer documentation research (as of 2026-10-06)

Scope: buyer/seller marketplace chat, web only, TypeScript, React + Vite client, Node server.
Method: pages fetched from talkjs.com/docs (and talkjs.com pricing/terms/security), plus `npm view`.
Where a page did not state something, it is marked **unconfirmed** with the URL tried.

> **Headline finding.** TalkJS restructured its docs and SDKs in October 2025. New sign-ups are
> steered to the **"Components SDK"** (`@talkjs/react-components` + `@talkjs/core`), which renders
> React components in your page with code-based themes. The **"Classic SDK"** (`talkjs` +
> `@talkjs/react`) renders the chat **inside an iframe** with dashboard-edited themes. Both are
> supported. `@talkjs/core` is a **headless Data API** (no UI). The lead's assumptions "no headless
> core" and "UI in an iframe" are true only for Classic.
> Source: https://talkjs.com/docs/UI_Components/ ("If you signed up with TalkJS before October 2025,
> you're likely using one of the Classic SDKs ... run chat inside an iframe").

---

## 0. Exact package versions (npm view, 2026-10-06)

| Package | Version | Published | Peer deps | Notes |
|---|---|---|---|---|
| `@talkjs/react-components` | 0.3.9 | 2026-09-22 | `react >=17 <20`, `react-dom >=17 <20`, `@talkjs/core ^1.11.1` | Components SDK (React). |
| `@talkjs/core` | 1.12.0 | 2026-09-02 | — | Headless JavaScript Data API. |
| `@talkjs/web-components` | 0.3.9 | 2026-09-22 | `@talkjs/core ^1.11.1`; deps `preact ^10.26.7` | Components SDK (custom elements `<t-chatbox>`, `<t-inbox>`, `<t-conversation-list>`). |
| `talkjs` | 0.46.0 | 2026-05-07 | — | Classic JS SDK (iframe UI + Classic Data API). |
| `@talkjs/react` | 0.1.12 | 2026-02-02 | `react >=17`, `talkjs >=0` | Classic React wrapper. |

Components changelog: https://talkjs.com/docs/UI_Components/Changelog/?framework=react (0.3.9 added dark mode via `colorScheme="dark"`; 0.1.8 added search, Growth+).

---

## 1. Account & plan

- **Free dev plan:** "All plans include a forever free development mode." "The development app has no limits and is free forever." No trial expiry.
  https://talkjs.com/pricing/ ; https://talkjs.com/knowledge-base/article/do-you-offer-a-free-sandbox-development-account/
- **Test mode vs Live mode:** every account has a test app (free) and a live app (paid). "Your test mode and live mode each come with a different app ID and secret key." Data is not shared between them. Test mode shows a banner "You're in TalkJS Test Mode" and is backed up less frequently.
  https://talkjs.com/docs/Features/Environments/
- **Credit card:** not required to sign up or develop. Required to "go live": "the process of entering credit card information and going through checkout." https://talkjs.com/pricing/
- **MAU:** no MAU limit stated for test mode ("no limits"). Paid plans include an MAU allowance (not recorded here per instructions). https://talkjs.com/pricing/
- **Plans:** Basic, Growth, Enterprise.
- **Plan gating (from pricing feature matrix, https://talkjs.com/pricing/):**
  - All plans: email, SMS (charged separately), push notifications; REST API; webhooks (**Basic: 1 webhook URL; Growth/Enterprise: 3**); contact masking ("Mask contact information"); file transfers; voice messages; customizable UI; unlimited message retention.
  - Growth and up: **real-time message translation** (charged separately, needs your own Google key), **search** (messages & conversations, in-conversation search), **custom email sender domain**, **email themes** (Email_Notifications page: "If you're on the Growth plan or higher, you can fully customize ... with email themes").
  - Enterprise: SSO, SLA, guaranteed performance under high load, guaranteed at-rest encryption, on-prem / private cloud add-on, private dedicated servers add-on, designated solutions engineer.
  - Participants per conversation: Basic 100 participants + 300 concurrent guests; Growth 300 + 1250; Enterprise custom. https://talkjs.com/docs/Features/Conversations/Group_Chat/
- Themes: not plan-gated (code-based in Components SDK; dashboard editor in Classic).
- Sign-up: https://talkjs.com/dashboard/ (signup form itself returned HTTP 403 to the fetcher; fields **unconfirmed**).

---

## 2. Dashboard setup before first message

Steps (from https://talkjs.com/docs/UI_Components/React/ and https://talkjs.com/docs/UI_Components/JavaScript/):
1. Create account at https://talkjs.com/dashboard/. You get a test app with sample data (users `sample_user_alice`, conversation `sample_conversation`).
2. **Settings page** → copy **App ID** (test) and a **Secret key** (`sk_test_...`; live is `sk_live_...`). Up to 10 secret keys; one is marked for webhook signing; keys can be deactivated. https://talkjs.com/docs/Features/Security/Secret_Keys/
3. **Security settings** → enable **Authentication** ("Authentication required") once you issue JWTs. Not enforced until enabled. https://talkjs.com/docs/Features/Security/Authentication/
4. **Roles** (Chat UI page → Roles): create roles e.g. `buyer`, `seller`, `support`. Roles control features (typing indicator, file sharing, mentions, voice), theme (Classic), message/conversation action permissions, notification timing/templates, and **content masking**. Users without a role get `default`. https://talkjs.com/docs/Concepts/Roles/
5. **Chat UI page → "Mask unwanted content"** (contact masking) per role — see §5.
6. **Notifications → Email**: on by default from `notifications@r.talkjs.com` (Email_Notifications.md) / `notifications@talkjs.com` (rendered page). Custom domain via DNS (TXT + CNAME; MX for reply-by-email). https://talkjs.com/docs/Features/Notifications/Email_Notifications/
7. **Settings → Webhooks**: add endpoint URL, pick events. Test and live configured separately. https://talkjs.com/docs/Webhooks/
8. **Settings → Localization**: Google Translate API key (Growth+). https://talkjs.com/docs/Guides/JavaScript/Classic/Real-time_Translation/
9. Themes: Components SDK = code; Classic = dashboard **Themes** page, "Publish to live" button. https://talkjs.com/docs/Features/Themes/

**Email delivery questions:**
- TalkJS sends email itself (subprocessor: **Postmark**). https://talkjs.com/resources/subprocessors/
- **Custom SMTP: not offered.** No mention anywhere in Email_Notifications docs; only "custom sender domain" (DNS-verified, Growth+). Pointing TalkJS at a local Mailpit is **not possible**. To observe notifications locally, subscribe to webhooks `notification.triggered` / `notification.sent` / `notification.delivered` instead. https://talkjs.com/docs/Webhooks/
- Whether emails are sent in **test mode**: **unconfirmed** (not stated on https://talkjs.com/docs/Features/Notifications/Email_Notifications/ or https://talkjs.com/docs/Features/Environments/). Assume yes to real addresses; use throwaway addresses.
- Default offline delay: configurable, max 900 s (15 min) inactivity timeout before grouping missed messages into an email.

**.env keys**
```
TALKJS_APP_ID=        # test app id (client-visible, VITE_TALKJS_APP_ID for Vite)
TALKJS_SECRET_KEY=    # sk_test_... server only: signs user JWTs, REST bearer, webhook HMAC
TALKJS_WEBHOOK_SECRET # not separate — webhooks are signed with the secret key flagged "use for webhooks"
```
Optional later: `TALKJS_LIVE_APP_ID`, `TALKJS_LIVE_SECRET_KEY`.

---

## 3. SDKs & API references

### Install (Components SDK, recommended for new apps)
```bash
npm install @talkjs/react-components @talkjs/core
```
```tsx
import { Chatbox } from '@talkjs/react-components';
import '@talkjs/react-components/default.css';
import { getTalkSession } from '@talkjs/core';
```
https://talkjs.com/docs/UI_Components/React/Installation/ ; https://talkjs.com/docs/UI_Components/React/

### Session & identity verification (current = JWT HS256; HMAC signature = legacy)
- Token: JWT, header `alg: HS256`, claims `tokenType: "user"`, `iss: <APP_ID>`, `sub: <USER_ID>`, `exp` (recommended; 1 h for refreshable, up to 7 d long-life). Signed with secret key.
  ```js
  jwt.sign({ tokenType: 'user' }, SECRET_KEY, { issuer: APP_ID, subject: USER_ID, expiresIn: '1h' })
  ```
  https://talkjs.com/docs/Features/Security/Authentication/ ; https://talkjs.com/docs/Features/Security/Advanced_Authentication/
- Legacy HMAC-SHA256 `signature` of user id: "deprecated and equivalent to non-expiring tokens in security posture." (Advanced_Authentication)
- Components SDK: `getTalkSession({ appId, userId })`, then `session.setToken(token)` or `session.onNeedToken = async () => { ...; session.setToken(t) }` before mounting; or `<Chatbox token=... tokenFetcher=... />`. https://talkjs.com/docs/Data_APIs/JavaScript/TalkSession/ ; https://talkjs.com/docs/UI_Components/React/Chatbox/
- Classic: `Talk.ready.then(() => new Talk.Session({ appId, me, token }))` (also legacy `signature`). https://talkjs.com/docs/UI_Components/JavaScript/Classic/Session/
- Admin JWT for REST: `tokenType: "admin"`, `iss: APP_ID`, short `exp` (30 s recommended). https://talkjs.com/docs/REST_API/

### Users / conversations / participants
- Data API (`@talkjs/core`):
  ```ts
  session.currentUser.createIfNotExists({ name, email, photoUrl, role, custom });
  session.user(id).createIfNotExists({...});          // other user
  const c = session.conversation('order_123');
  await c.createIfNotExists({ subject, custom: { orderId: '123' }, welcomeMessages: [...] });  // or c.set()
  await c.participant(otherId).createIfNotExists();   // add participant
  await c.participant(agentId).set({ access: 'ReadWrite', notify: true }); // 3rd participant
  await c.participant(id).delete();
  ```
  https://talkjs.com/docs/Data_APIs/JavaScript/Conversations/ ; https://talkjs.com/docs/Data_APIs/JavaScript/Participants/
- Classic: `session.getOrCreateConversation(id)` → `ConversationBuilder.setAttributes({ subject, photoUrl, custom, welcomeMessages })`, `.setParticipant(user, { access: 'Read'|'ReadWrite', notify: boolean|'MentionsOnly' })`, `.sendMessage(text, { custom })`. https://talkjs.com/docs/UI_Components/JavaScript/Classic/Classic_Data_API/
- REST: `PUT /v1/{appId}/conversations/{id}` body `{ participants, subject, custom, welcomeMessages, photoUrl }`; `PUT /v1/{appId}/conversations/{id}/participants/{userId}` body `{ access, notify, readUntil }`; `PATCH` same path; `DELETE` same path; `PUT /v1/{appId}/users/{userId}` body `{ name, email[], phone[], photoUrl, role, custom, welcomeMessage, locale, pushTokens }`. https://talkjs.com/docs/REST_API/Conversations/ ; https://talkjs.com/docs/REST_API/Participation/ ; https://talkjs.com/docs/REST_API/Users/

### Messages
- Data API send: `await conversation.send({ text, custom: { type: 'order', orderId: '123' }, referencedMessageId })` or `{ content: [ {type:'text',...}, {type:'file', fileToken}, {type:'location', latitude, longitude} ], custom }`. Edit: `conversation.message(id).edit({ text, custom })`; `delete()`; `markAsRead()`; `markAsTyping()` (10 s); `subscribeMessages()` (30 latest, `loadMore()`), `subscribeTyping()`, `subscribeParticipants()`. https://talkjs.com/docs/Data_APIs/JavaScript/Messages/ ; https://talkjs.com/docs/Data_APIs/JavaScript/Conversations/
- REST send: `POST /v1/{appId}/conversations/{id}/messages` with array (max 10) of `{ text | content, sender, type: 'UserMessage' | 'SystemMessage', custom?: Record<string,string>, referencedMessageId?, idempotencyKey? }` (SystemMessage: no sender, no notifications). Edit: `PUT .../messages/{messageId}`. Delete: `DELETE .../messages/{messageId}`. List: `GET .../messages`. https://talkjs.com/docs/REST_API/Messages/
- **Custom data type:** `CustomData = Record<string, string>` (string values only) on users, conversations, messages. No documented size limit (**unconfirmed**). https://talkjs.com/docs/UI_Components/Other_types/?framework=react ; https://talkjs.com/docs/REST_API/Messages/
- Files: REST `POST /v1/{appId}/files` multipart `file` + `filename` (+ optional `subtype`, `width`, `height`, `duration`) → `{ fileToken }`; attach via `content: [{ type: 'file', fileToken }]` (legacy `attachmentToken` deprecated). Components SDK `ChatboxController.sendFileMessage({ fileToken, custom })`. Size limit **unconfirmed** (https://talkjs.com/docs/Features/Messages/File_Sharing/ lists 50+ extensions, no size). File sharing toggled per role in Chat UI page.
- Action buttons/links in message text: `<actionbutton:accept?orderId=123|Accept>` / `<actionlink:name|Label>`; handled via `onMessageAction={(e) => e.action, e.params}`. Styled via `button[t-action="accept"]`. https://talkjs.com/docs/Guides/React/Action_Buttons_Links/?framework=react
- Read receipts: ticks sending/sent/read, on by default, shown in conversations with ≤10 participants; `message.read` webhook for ≤300 participants; `readBy` on REST. https://talkjs.com/docs/Features/Messages/Read_Receipts/ ; https://talkjs.com/docs/Features/Messages/Delivery_Receipts/
- Typing indicator: on by default, per-role toggle; Data API `markAsTyping()` + `subscribeTyping()`. https://talkjs.com/docs/Features/Conversations/Typing_Indicator/

### React UI components & hooks
- Components SDK: `<Chatbox appId userId conversationId token tokenFetcher theme themeCustom baseTheme="default"|"classic" chatHeaderVisible messageFieldVisible onSendMessage beforeSendMessage onDeleteMessage onMessageAction onFocusMessage onMissingBrowserPermission beforeBrowserPermissionPrompt transformMentions ref />`; `<Inbox ... selectedConversationId conversationFilter onSelectConversation mobileBreakPoint />`; `<ConversationList />`. **No Popup** in Components SDK (build from Chatbox + launcher). Controller methods via ref: `sendMessage`, `sendFileMessage`, `sendLocationMessage`, `editMessage`, `deleteMessage`, `focusMessage`, `toggleReaction`, `setSearchQuery`, etc. https://talkjs.com/docs/UI_Components/React/Chatbox/ ; https://talkjs.com/docs/UI_Components/React/Inbox/ ; https://talkjs.com/docs/Features/Chat_UIs/
- The Components SDK has no "hooks" per se; data access is via `@talkjs/core` subscriptions (not React hooks). **unconfirmed** that any `use*` hooks exist in `@talkjs/react-components` (none on the React pages fetched).
- Classic React (`@talkjs/react`): `<Session appId syncUser|userId token|signature>`, `<Chatbox syncConversation|conversationId messageFilter />`, `<Inbox>`, `<Popup>`. https://talkjs.com/docs/UI_Components/React/Classic/ ; components incl. `Session` at https://talkjs.com/docs/UI_Components/React/Classic/Components/

### REST base & auth
- Base URL `https://api.talkjs.com`, paths `/v1/{appId}/...`. `Authorization: Bearer <secret key or admin JWT>`; docs recommend short-lived admin JWTs over raw `sk_live...` but raw key works. https://talkjs.com/docs/REST_API/

---

## 4. UI kit: prebuilt vs headless, iframe or not

- **Headless core exists:** `@talkjs/core` "lets you connect to your TalkJS chat as a user and read, subscribe to, and update your chat data" with no UI. Also works in Node with `registerPolyfills` (WebSocket). https://talkjs.com/docs/Data_APIs/JavaScript/
- **Rendering:**
  - Classic SDK: explicitly "run chat inside an iframe" (https://talkjs.com/docs/UI_Components/ ; https://talkjs.com/docs/UI_Components/React/Classic/). Bundle-size measurements of `talkjs` npm package exclude the iframe app loaded from TalkJS servers.
  - Components SDK: docs never say "light DOM" explicitly (**unconfirmed wording**), but the customization guide tells you to override styles with **CSS in your own page** targeting `.t-chatbox .t-theme-message[t-sender='currentUser'] .t-message-body`, and to attach plain `addEventListener` to `ref.current` and query `.t-theme-message` — which only works if the UI is in the host document (not iframe, not closed shadow DOM). `@talkjs/web-components` depends on `preact`. https://talkjs.com/docs/UI_Components/React/Customization/ ; https://talkjs.com/docs/UI_Components/Web_Components/Customization/?framework=javascript
- **Custom "order card" message (Components SDK):** pass `theme={{ Message: MyMessage }}` (memoised) to Chatbox; `MessageProps = { common: CommonChatboxProps; message: MessageSnapshot; messageStatus; permissions }`, `common` includes `currentUser, theme, conversation, t, chatbox, focusedMessage`; `themeCustom` prop is "arbitrary custom data passed down to the theme". Branch on `message.custom.type === 'order'` inside your `Message` (or `UserMessage`) component and render your card; fall back to the default theme component (download from https://github.com/talkjs/themes, MIT) for other messages. Theme component list (Message, UserMessage, TextBlock, FileBlock, ChatHeader, MessageField, MessageActionMenu, AfterMessages…): https://talkjs.com/docs/UI_Components/Theme/Overview/?framework=react ; Message props: https://talkjs.com/docs/UI_Components/Theme/Theme_components/Message/
- **Custom card (Classic):** dashboard Theme Editor, template language with `t:if` and `{{ message.custom.x }}` / `{{ conversation.custom.x }}` in `UserMessage` template. https://talkjs.com/docs/UI_Components/JavaScript/Classic/Themes/Passing_Data_to_Themes/ ; https://talkjs.com/docs/UI_Components/JavaScript/Classic/Themes/Template_Language/
- Alternative without custom theme: system/user message with action buttons (§3) carrying `custom` data.

---

## 5. Moderation

- **Contact masking** (dashboard: Chat UI page → per role → "Mask unwanted content"): checkboxes for links, email addresses, phone numbers; levels No / Global / Selective suppression (selective = sender still sees own text); replacement text default "(hidden information)" localized; allowed hostnames (wildcards), allowed phone-number suffixes, custom JS RegExp suppression patterns and exceptions. Available on **all plans** (pricing matrix "Mask contact information"). Masking is applied at display in the TalkJS UI; whether REST-fetched message bodies are masked: **unconfirmed**. https://talkjs.com/resources/how-to-ensure-that-contact-information-cant-be-shared-in-a-talkjs-chat/ ; https://talkjs.com/docs/Features/Moderation/
- **Word blocklist / spam:** word & regex blocklists, link blocking, all-caps and mention restrictions. https://talkjs.com/docs/Features/Moderation/
- **Reporting:** no built-in "flag user" dashboard; implement a **custom message action** (e.g. "Report") per role in Chat UI settings, handled with `onMessageAction` (Components) / `onCustomMessageAction` (Classic), then act via REST (delete message, set participant `access: 'None'`/remove, or ban across conversations). https://talkjs.com/docs/Features/Messages/Message_Actions/ ; https://talkjs.com/resources/how-to-ban-users-from-all-chats-with-talkjs/
- **Message filters** (`messageFilter` / `setMessageFilter`) hide messages by type/sender/custom field in the UI — not a moderation tool. https://talkjs.com/docs/Features/Messages/Message_Filters/
- Webhooks `message.sent` / `message.updated` for server-side moderation; dashboard **Live Log** for debugging.

---

## 6. Translation

- Real-time translation uses the **Google Cloud Translation API with your own API key** (Settings → Localization). **Growth plan and up**; charged separately. User messages only (not system messages). https://talkjs.com/docs/Features/Language_Support/ ; https://talkjs.com/docs/Guides/JavaScript/Classic/Real-time_Translation/
- Classic Chatbox options: `translateConversations: boolean | 'auto' | string[]`, `showTranslationToggle: boolean | 'auto'`, `setTranslationEnabledDefault()`, `onTranslationToggled()`. https://talkjs.com/docs/UI_Components/JavaScript/Classic/Chatbox/
- Components SDK: the React `<Chatbox>` props page lists **no** `translateConversations`/`showTranslationToggle` props (**not available there as of 0.3.9 — unconfirmed otherwise**). `@talkjs/core` 1.12.0 added `MessageRef.translate(language)` returning translated content blocks + plaintext, so translation can be done in a custom theme component. https://changelog.talkjs.com/dark-mode-message-translation-and-new-callback-props-3NZxIc
- UI localization: 40+ locales via `user.locale`. https://talkjs.com/docs/Features/Language_Support/

---

## 7. Email, SMS, push

- **Email:** automatic for offline users with an `email`; grouped after inactivity (≤900 s); from `notifications@(r.)talkjs.com`; **custom sender domain** via DNS (Growth+ per pricing); email **themes** Growth+; macros `{{recipient.name}}`; reply-by-email built in (MX record). Disable per participant via `notify: false | 'MentionsOnly'` or remove email. Manual re-trigger: `POST /v1/{appId}/conversations/{id}/notifications`. No custom SMTP. https://talkjs.com/docs/Features/Notifications/Email_Notifications/ ; https://talkjs.com/docs/REST_API/Notifications/
- **SMS:** automatic for offline users with `phone` (E.164); via Twilio or Amazon SNS; "Each plan includes a free monthly SMS credit with a soft limit of $10.00"; bring your own provider via `notification.triggered` webhook. https://talkjs.com/docs/Features/Notifications/SMS_Notifications/
- **Browser (desktop) notifications:** fire "as long as at least one browser tab has your app open"; Inbox has a built-in toggle; Classic `session.setDesktopNotificationEnabled(true)`; Components Chatbox has `onMissingBrowserPermission` / `beforeBrowserPermissionPrompt` ("notifications" permission). For closed tabs you need **FCM web push** with your own service worker; token registered via `session.currentUser.set({ pushTokens: { 'fcm:TOKEN': true } })`, FCM credentials in dashboard. Service-worker specifics for web: **unconfirmed** (page is mobile-focused). https://talkjs.com/docs/Features/Notifications/Browser_Notifications/ ; https://talkjs.com/docs/Guides/Push_Notifications/?framework=react ; https://talkjs.com/docs/Features/Notifications/Mobile_Push_Notifications/

---

## 8. Support escalation

- Any conversation can become a group chat by adding a participant: Data API `conversation.participant(agentId).set({ access: 'ReadWrite', notify: true })`, Classic `setParticipant()`, REST `PUT /conversations/{id}/participants/{agentId}`. Access levels `ReadWrite | Read | None`. Limits: 100 participants (Basic) / 300 (Growth). https://talkjs.com/docs/Features/Conversations/Group_Chat/ ; https://talkjs.com/docs/REST_API/Participation/
- No dedicated "support agent"/ticket feature. AI-agent guidance is "webhook in → your bot → REST out". https://talkjs.com/docs/Features/AI_Interface/
- Per-role permissions (e.g. `support` role may delete any message). https://talkjs.com/docs/Concepts/Roles/

---

## 9. Rate limits

- REST (per app ID; test and live separate): **burst 500**, **queue 100**, **sustained 9 req/s**; batch endpoint 500 / 100 / **1 req/s**; excess → HTTP 429; burst refills at the sustained rate. Custom limits on request ("Get in touch"). https://talkjs.com/docs/REST_API/Rate_Limits/
  (The REST overview page says "burst of up to 600" — the two pages disagree; the dedicated Rate_Limits page is treated as authoritative.) https://talkjs.com/docs/REST_API/
- "Rate limits only apply to requests sent to the REST API. Requests sent from the pre-built UIs do not count towards the limit." No documented per-user send limit for the JS SDK/Data API (**unconfirmed**; https://talkjs.com/docs/Data_APIs/JavaScript/Performance/ not fetched).
- No `Retry-After` header documented.

---

## 10. Webhooks

- Events: `user.created`, `user.updated`, `message.sent` (incl. `mentionedUserIds`), `message.read` (≤300 participants), `message.updated`, `message.deleted`, `conversation.deleted`, `notification.triggered`, `notification.sent`, `notification.delivered`, `notification.bounced`, `notification.opened`, `notification.link.clicked`. https://talkjs.com/docs/Webhooks/
- Payload: `{ id, type, createdAt (ms), data: { sender, conversation, message, ... } }`, JSON POST; 5 s timeout; non-200 "retried a small number of times, with a delay" (exact schedule **unconfirmed**); failure emails to owners max 1/endpoint/24 h; source IPs `152.42.150.194`, `138.68.122.213`.
- **Signature:** headers `X-TalkJS-Signature` and `X-TalkJS-Timestamp`; `HMAC_SHA256(secret_key, timestamp + '.' + raw_body)` encoded as **uppercase hex**; use the secret key flagged "use for webhooks". https://talkjs.com/docs/Features/Security/#verify-webhook-integrity
- Count: Basic 1 URL, Growth/Enterprise 3 (pricing). Test/live configured separately.

---

## 11. Terms of Service

- https://talkjs.com/terms/ — **No clause about benchmarking, performance/load testing, or publishing comparative results was found.**
- Related clauses: Art. 3.7 "Licensee is not permitted to reconstruct the source code of the TalkJS Services by means of reverse engineering." Art. 4.3 prohibits use "in a manner that causes damage, modification, interruption, or reduced efficiency" (relevant to load tests — keep them within rate limits / in test mode). Governing law: Netherlands (Art. 18).

---

## 12. Regions / data residency

- "Our servers are fully located within the European Union." Primary storage DigitalOcean (EU); files in EU-only Google Cloud Storage buckets; email via Postmark; SMS via Twilio/AWS; translation via Google Cloud Translation. No US region today; on-prem/private cloud only on Enterprise. ISO 27001; GDPR processor. https://talkjs.com/security/ ; https://talkjs.com/resources/subprocessors/ ; https://talkjs.com/resources/where-is-the-data-stored-hosted
- Implication for latency benchmarks from the US: expect transatlantic RTT.

---

## 13. Pricing page

https://talkjs.com/pricing/ (prices intentionally not recorded).

---

## Pages that 404'd or were blocked (for the record)
- https://talkjs.com/docs/Features/Message_Features/Message_Filters/ (404; moved to /docs/Features/Messages/Message_Filters/)
- https://talkjs.com/docs/UI_Components/React/Theme/ (404; use /docs/UI_Components/Theme/Overview/?framework=react)
- https://talkjs.com/docs/REST_API/Files/ (404; file upload is documented inside /docs/REST_API/Messages/)
- https://talkjs.com/docs/Features/Notifications/Email_Notifications/Email_Domains/ (404)
- https://talkjs.com/docs/UI_Components/Theme/ and /Theme.md (403/404), https://talkjs.com/dashboard/signup/ (403)
