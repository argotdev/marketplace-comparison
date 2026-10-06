# Twilio Conversations — research notes (verified 2026-10-06)

Scope: buyer/seller marketplace chat, web only, TypeScript, React + Vite client, Node server.
Method: every fact below was read from the cited vendor page on 2026-10-06 unless marked **unconfirmed**.

## 0. Naming heads-up: the product is now "Conversations (classic)"

- The product formerly called "Twilio Conversations" is now titled **"Conversations (classic)"** across its docs. Pages live under both
  `https://www.twilio.com/docs/conversations/...` and `https://www.twilio.com/docs/conversations-classic/...` (both paths serve the same classic content).
- `https://www.twilio.com/docs/conversations` (landing) now describes a NEW agentic platform ("An agentic harness for conversational customer engagement... Conversation Intelligence, Agent Connect, and contextual memory"), which "requires an active Twilio communications implementation". That is NOT the chat SDK product.
- The classic landing page `https://www.twilio.com/docs/conversations-classic` has **no deprecation or end-of-life notice**; the JS SDK shipped 3.0.1 on 2026-09-01 and the Node SDK 6.1.2 on 2026-09-28, so it is actively maintained.
- Exact rename announcement: **unconfirmed** (not found on https://www.twilio.com/en-us/changelog as of today; search snippets say "Twilio Conversations has been renamed Conversations (classic)" and tie it to SIGNAL, 2026-05-07).
- Console note from the landing page: "Conversations products are only available in the new Twilio Console. If your account hasn't been migrated, you'll be redirected to the legacy Console."

## 1. Account & plan

Sources: https://www.twilio.com/docs/usage/trials , https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account

- **Credit card:** not required. "You can sign up for a Twilio free trial account without a credit card."
- **Trial model (2026):** product-specific free units rather than a dollar balance: 100 SMS, 100 WhatsApp messages, 75 voice minutes, 3,000 emails, 40 verifications, 100 lookups.
- **Trial expiry:** "Trial accounts expire 30 days after sign-up. When your trial expires, you can no longer use trial resources."
- **Verified numbers only:** "You can send messages and make calls only to verified phone numbers" — up to 5 recipients, sign-up number auto-verified.
- **Template-only bodies in trial:** "You must use Twilio-provided templates or message examples. Custom message bodies, email content, and WhatsApp templates aren't available during the trial." (This matters for SMS/WhatsApp legs of a Conversation in trial; chat-to-chat is unaffected.)
- **Trial phone number:** "Outgoing messages, calls, and conversations use a Twilio trial phone number." Geography: "SMS messages and voice calls are restricted to your sign-up country."
- **Trial watermark:** the current trials doc does not mention it; search snippets of the Help Center article (https://support.twilio.com/hc/en-us/articles/360036052753-Twilio-Free-Trial-Limitations, returned 403 to fetch) say SMS from trial begins with "Sent from a Twilio Trial account". **Partially unconfirmed** (Help Center fetch blocked).
- **Pricing model (no prices recorded):** per the pricing page https://www.twilio.com/en-us/messaging/pricing/conversations-api : "Pay per active monthly user. Users are counted once a month based on their unique address or identity." There is a free tier of monthly active users (first 200 MAU per page). Media: "Pay per GB of stored media per month." Channel fees are additional: "Standard SMS and MMS segment rates, carrier passthrough fees, WhatsApp conversation fees, and monthly phone number rentals where applicable." No separate per-message fee for chat.
- **What costs money:** phone number rental, SMS/MMS segments + carrier fees, WhatsApp conversation fees, media storage. **WhatsApp Sandbox is not free:** "Sandbox messages are billed at standard Twilio API for WhatsApp pricing" (https://www.twilio.com/docs/whatsapp/sandbox), though trial free units cover 100 WhatsApp messages.

## 2. Console setup (before first message)

Sources: https://www.twilio.com/docs/conversations/quickstart , https://www.twilio.com/docs/conversations/create-tokens , https://www.twilio.com/docs/conversations/api/service-configuration-resource , https://www.twilio.com/docs/conversations/conversations-webhooks , https://www.twilio.com/docs/conversations/api/webhook-configuration-resource , https://www.twilio.com/docs/conversations/push-notification-configuration , https://www.twilio.com/docs/conversations-classic/javascript/push-notifications-web , https://www.twilio.com/docs/conversations/api/credential-resource , https://www.twilio.com/docs/conversations/reachability , https://www.twilio.com/docs/conversations/read-horizon , https://www.twilio.com/docs/conversations/inbound-autocreation , https://www.twilio.com/docs/conversations-classic/use-twilio-sandbox-for-whatsapp

Steps:
1. **Account SID + Auth Token** from Console home. Auth Token is needed server-side only for webhook signature validation.
2. **API Key SID + Secret** (Console > Account > API keys & tokens). Used for REST client auth and for signing Access Tokens.
3. **Conversations Service** ("Chat Service", SID `IS...`): the quickstart says it "is generated automatically when creating your first conversation"; a default service exists. A **Messaging Service** is "automatically provisioned alongside the Conversation Service" (needed for SMS/WhatsApp legs). You can also create a dedicated Service in Console > Conversations (classic) > Services.
4. **Service Configuration** (REST `Services/{IS}/Configuration`): fields `default_conversation_creator_role_sid`, `default_conversation_role_sid`, `default_chat_service_role_sid`, `reachability_enabled` ("Whether the Reachability Indicator is enabled for this Conversations Service. The default is `false`."). Links: `notifications`, `webhooks`.
5. **Reachability (online presence):** set `ReachabilityEnabled=true` on the Service Configuration via REST (no Console path documented). SDK exposes read-only `client.reachabilityEnabled`, `User.isOnline`, `User.isNotifiable`; changes arrive via the User `updated` event with `updateReasons` containing `'online'`. Properties are `null` until the user has been online after enabling.
6. **Read horizon:** no enabling needed, but "The Conversations (classic) SDKs do not automatically set the Read Horizon for chat Participants." Your client must call `setAllMessagesRead()` / `updateLastReadMessageIndex(i)`. Read reports batch every ~10 s.
7. **Webhooks:** Console path "Conversations (classic) > Global webhooks" (account-level) or Service > Webhooks (service-level). REST: `client.conversations.v1.configuration.webhooks().update({ preWebhookUrl, postWebhookUrl, filters: [...], method: 'POST' })`. Conversation-scoped webhooks "may only be modified via the REST API". Pre-event timeout 5 s; on timeout the change is published unmodified. Set `X-Twilio-Webhook-Enabled: true` on REST calls if you want REST-originated actions to fire post-event webhooks (they do not by default). Requests are signed with `X-Twilio-Signature` (see §10).
8. **Push credential (web):** Console > Credentials > create "FCM Push Credentials" (REST Credential resource `Type=fcm`, `Secret` = "The Server key of your project from the Firebase console, found under Settings / Cloud messaging"). FCM HTTP v1 / service-account JSON: **unconfirmed** on the Credential resource page.
9. **Enable push on the Service** (REST Service Notification Configuration): `NewMessage.Enabled`, `NewMessage.Template`, `NewMessage.Sound`, `NewMessage.BadgeCountEnabled`, `AddedToConversation.*`, `RemovedFromConversation.*`. "Push notifications are disabled by default." Payload template max 178 chars.
10. **SMS number:** buy an SMS-capable number (Console > Buy a Number). For inbound SMS/WhatsApp to land in Conversations: Messaging Service toggle "Handle Inbound Messages with Conversations (classic)" = Unlocked, Integration = "Autocreate a Conversation"; or use the Address Configuration REST resource per sender address. Takes up to 60 s to apply.
11. **WhatsApp Sandbox:** Console > Conversations (classic) > Try it out (sandbox lives in legacy Console: https://www.twilio.com/console/sms/whatsapp/sandbox). User sends `join <sandbox keyword>` to the sandbox number (+1 415 523 8886). Clear the Sandbox "When a message comes in" webhook URL first (Messaging > Try it out > Send a WhatsApp message > Sandbox Settings), otherwise Twilio replies asking you to update it. Add participant with `messagingBinding.address=whatsapp:+<user>` and `messagingBinding.proxyAddress=whatsapp:+14155238886`. Sandbox session expires 3 days after joining; sandbox sends max 1 message / 3 s; recipients must have joined. Autocreation with the sandbox: **unconfirmed** (search snippet says not supported; not on the page I read).

`.env` keys for this build:
```
TWILIO_ACCOUNT_SID=AC...
TWILIO_AUTH_TOKEN=...            # webhook signature validation only
TWILIO_API_KEY_SID=SK...
TWILIO_API_KEY_SECRET=...
TWILIO_CONVERSATIONS_SERVICE_SID=IS...   # ChatGrant.serviceSid
TWILIO_SMS_FROM=+1...            # purchased SMS number (proxyAddress)
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886   # sandbox, or your approved sender
TWILIO_REGION=us1                # optional; see §12
```

## 3. SDKs

- **Client:** `@twilio/conversations` — latest **3.0.1** (published 2026-09-01; 3.0.0 on 2026-03-18). Engines: `node >=20`. Changelog: https://www.twilio.com/docs/conversations/javascript/changelog — 3.0.0 breaking change: "Conversations (classic) SDK now requires Node 20 or above"; 3.0.1 "Replaced the `uuid` dependency with the native `crypto.randomUUID` API". API reference: https://sdk.twilio.com/js/conversations/releases/3.0.1/docs/
- **Server:** `twilio` — latest **6.1.2** (2026-09-28). 6.0.0 (2026-04-16): "Raise minimum Node.js engine from >=14.0 to >=20.0" (https://github.com/twilio/twilio-node/blob/main/CHANGES.md). Engines `node >=20.0.0`.

Verified API surface (https://sdk.twilio.com/js/conversations/releases/3.0.1/docs/classes/Client.html , .../Conversation.html , .../Message.html):

| Need | API |
|---|---|
| Create client | `new Client(token, { region?, logLevel?, typingIndicatorTimeoutOverride? })` (quickstart uses `new ConversationsClient(token)`; regional doc uses `ConversationsClient.create(token, { region: 'ie1' })`) |
| Connection state | `client.connectionState` + `connectionStateChanged` event; states connecting/connected/disconnecting/disconnected/denied; also `initialized`, `initFailed` |
| Token refresh | `tokenAboutToExpire`, `tokenExpired` events; `client.updateToken(token)` |
| Access token (server) | `new AccessToken(accountSid, apiKeySid, apiKeySecret, { identity, ttl })` + `token.addGrant(new ChatGrant({ serviceSid }))` → `token.toJwt()`; default ttl 3600 s, max 24 h (https://www.twilio.com/docs/conversations/create-tokens) |
| Create conversation | `client.createConversation({ uniqueName, friendlyName, attributes })`; `getConversationByUniqueName`, `getConversationBySid`, `getSubscribedConversations()` |
| Conversation attributes | `conversation.updateAttributes(JSONValue)`; `updateFriendlyName`, `updateUniqueName`; limit 16 KB |
| Add chat participant | `conversation.add(identity, attributes?)`; REST `participants.create({ identity })` |
| Add SMS/WhatsApp participant | `conversation.addNonChatParticipant(proxyAddress, address, attributes?, bindingOptions?)`; REST `participants.create({ 'messagingBinding.address', 'messagingBinding.proxyAddress' })`, prefix both with `whatsapp:` for WhatsApp |
| Send message w/ attributes | `conversation.sendMessage(body: string \| FormData \| SendMediaOptions, attributes?: JSONValue): Promise<number>`; or `conversation.prepareMessage().setBody().setAttributes().addMedia(formData).build().send()`; REST `messages.create({ author, body, attributes: '{"k":"v"}' })`; attributes limit 4 KB |
| Edit message / attributes | `message.updateAttributes(attributes: JSONValue): Promise<Message>` and `message.updateBody(body)` — **confirmed exist**; REST `POST /v1/Conversations/{CH}/Messages/{IM}` |
| Events | `messageAdded`, `messageUpdated`, `messageRemoved`, `participantJoined`, `participantUpdated`, `updated`, `typingStarted`, `typingEnded`; client-level `conversationAdded`, `conversationJoined`, `messageAdded` |
| Read receipts (chat) | read horizon: `setAllMessagesRead()`, `updateLastReadMessageIndex(i)`, `getUnreadMessagesCount()`; other participants' `lastReadMessageIndex` / `lastReadTimestamp` via `participantUpdated` |
| Delivery receipts | `message.getDetailedDeliveryReceipts()`, `message.aggregatedDeliveryReceipt` — **SMS/WhatsApp only**: "Messages sent to Chat Participants do not emit delivery information" (https://www.twilio.com/docs/conversations/delivery-receipts) |
| Typing | `conversation.typing()`; signal sent at most once per 5 s by default; `TypingIndicatorTimeout` on Service resource (https://www.twilio.com/docs/conversations/typing-indicator) |
| Media | send: `sendMessage(formData)` or `prepareMessage().addMedia(...)`; receive: `message.attachedMedia: Media[]`, `message.getTemporaryContentUrlsForAttachedMedia()`; temp URLs expire after 300 s (https://www.twilio.com/docs/conversations/media-support-conversations) |
| Paging | `conversation.getMessages(pageSize?, anchor?, 'backwards' \| 'forward')` → `Paginator<Message>` |
| Web push | `client.setPushRegistrationId('fcm', fcmToken)`, `client.handlePushNotification(payload)`, `Client.parsePushNotification(payload)`, `pushNotification` event |

## 4. UI kit

- **No first-party, supported chat UI kit for Conversations.** What exists:
  - `twilio/twilio-conversations-demo-react` (GitHub, MIT): a demo app ("not a production ready implementation. This is ONLY for testing") built with React + Paste. https://github.com/twilio/twilio-conversations-demo-react
  - `TwilioDevEd/conversations-demo`: the quickstart's CRA/React SPA + small Node backend (https://www.twilio.com/docs/conversations-classic/javascript/exploring-conversations-javascript-quickstart).
  - `twilio/twilio-webchat-react-app`: website chat widget demo on Conversations JS SDK + Paste (search result; not read).
  - Twilio Paste (design system) has presentational Chat components (ChatLog/ChatMessage/ChatBubble) with no SDK binding — **unconfirmed** today: paste.twilio.design component pages 301-redirect to https://github.com/twilio-labs/paste. A 2022 "Conversations UI Kit" RFC exists at https://github.com/twilio-labs/paste/discussions/2477.
  - Flex UI is a contact-center product, not a reusable chat kit.

## 5. Moderation

Source: https://www.twilio.com/docs/conversations/conversations-webhooks

- **No built-in content filter, profanity list, or user-report feature** in Conversations (classic). Nothing on the docs tree for moderation beyond webhooks. (Twilio Proxy had rules-based filtering; Proxy is a different, legacy product.)
- **Mechanism:** pre-event webhook `onMessageAdd` (POST with `EventType`, `ConversationSid`, `Body`, `Author`, `ParticipantSid`, `Attributes` (stringified JSON), `Media`, `Source` ("SDK" or "API"), `ClientIdentity`, `AccountSid`).
  - **Reject:** return HTTP 40x or 50x → "Conversations (classic) will reject the change and no publication will be made." The SDK `sendMessage` promise rejects; no documented custom error payload is relayed to the client.
  - **Modify:** return 200 with JSON `{"body": "...", "author": "...", "attributes": "{\"key\":\"value\"}"}` — "All values are optional, and missing fields will be left unmodified." Only body/author/attributes are modifiable.
  - **Timeout:** 5 s max; on timeout the original message is published unmodified ("your messages will be delayed accordingly").
  - Other pre-events usable for gating: `onConversationAdd`, `onParticipantAdd`, `onMessageUpdate`, `onMessageRemove`, `onUserUpdate`, etc.
- **Reporting users / blocking:** nothing built in — implement in your own backend (e.g., store reports, then remove participant via REST `participants(sid).remove()` or role changes).

## 6. Translation

- **None built in.** Twilio's own guidance is a blog tutorial wiring DeepL server-side (https://www.twilio.com/en-us/blog/developers/community/multilingual-translator-chat-app-python-deepl-translator-flask). ConversationRelay voice translation is a different product. Flex excluded per brief.

## 7. Push & email

- **Push:** "Conversations (classic) integrates Apple Push Notifications (iOS) and Firebase Cloud Messaging (Android and browsers)". Web push via FCM is supported in the JS SDK: create an FCM Push Credential, enable NewMessage on the Service, Firebase v9+ modular SDK with VAPID key, `setPushRegistrationId('fcm', token)`, forward FCM `onMessage` payloads to `handlePushNotification(payload)`. https://www.twilio.com/docs/conversations-classic/javascript/push-notifications-web , https://www.twilio.com/docs/conversations/push-notification-configuration
- **Email:** no built-in email notifications for Conversations. Email as a *channel* exists only for Flex (JS SDK 2.5.0 "support for Email in Flex"). Transactional email = SendGrid, separate product/billing.

## 8. Support escalation

- Add an agent as a chat participant to the existing conversation: `conversation.add('support-agent-1')` or REST `participants.create({ identity })` (https://www.twilio.com/docs/conversations/api/conversation-participant-resource). Or add a non-chat (SMS/WhatsApp) participant.
- Limits: "A Conversation can have up to 1000 Participants, including up to 50 non-chat Participants" (https://www.twilio.com/docs/conversations/conversations-limits). Group MMS max 10.
- Roles: per-conversation `RoleSid` on participant; service defaults in Service Configuration.

## 9. Rate limits & quotas

Source: https://www.twilio.com/docs/conversations/conversations-limits

- **Actions per second:** default max **30 APS** for state-changing operations (per conversation or per service, depending on resource type).
- **Participants:** 1000 per conversation, incl. 50 non-chat. A chat identity can be in 1000 active/inactive conversations.
- **Message body:** chat 32 KB; SMS/WhatsApp outbound 1,600 chars.
- **Attributes:** conversation 16 KB, message 4 KB, participant 4 KB.
- **Media:** chat up to 150 MB per file; delivered to SMS/MMS < 5 MB total (max 10 files); WhatsApp up to 16 MB.
- **Connections (SDK):** up to 7,000 concurrent per subaccount (100,000 overall); connection establishment 110/s per subaccount; upstream requests 500/s per connection.
- Media uploaded but not attached within 5 minutes is deleted.

## 10. Webhooks

Sources: https://www.twilio.com/docs/conversations/conversations-webhooks , https://www.twilio.com/docs/conversations/api/webhook-configuration-resource , https://www.twilio.com/docs/usage/webhooks/webhooks-security

- **Pre-event:** `onMessageAdd`, `onMessageUpdate`, `onMessageRemove`, `onConversationAdd`, `onConversationUpdate`, `onConversationRemove`, `onParticipantAdd`, `onParticipantUpdate`, `onParticipantRemove`, `onUserUpdate`.
- **Post-event:** `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationAdded`, `onConversationUpdated`, `onConversationRemoved`, `onConversationStateUpdated`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated`, `onUserAdded`, `onUserUpdated`. Post-events carry `RetryCount`.
- **Config fields:** `PreWebhookUrl`, `PostWebhookUrl`, `Filters[]`, `Method` (GET/POST), `Target` (webhook | flex). Scopes: global (account), per-service, per-conversation (REST only).
- **Signature:** `X-Twilio-Signature` = HMAC-SHA1 over (full webhook URL + sorted POST params) keyed with the **Auth Token**. Node: `twilio.validateRequest(authToken, signature, url, params)`; for JSON bodies `twilio.validateRequestWithBody(authToken, signature, url, rawBody)` (URL carries `bodySHA256`). "Twilio recommends using the provided signature validation library from a Twilio SDK. Don't implement your own." Express middleware `twilio.webhook()` exists in the Node SDK (not re-verified today).
- Conversations webhooks are form-encoded POSTs by default (`Method` POST); `Attributes` and `Media` arrive as stringified JSON.

## 11. Terms

- **Twilio Terms of Service** https://www.twilio.com/en-us/legal/tos — no clause found on benchmarking, performance testing, or publishing comparative results.
- **Acceptable Use Policy** https://www.twilio.com/en-us/legal/aup — no benchmarking/comparative-publication clause. Relevant headings that do exist: "Interference with the Services", "Reverse Engineering", "Bypassing Service Limitations", "Harmful Code or Bots", "Disabling the Services". Load testing that degrades the service could fall under "Interference" / "Disabling"; a modest functional benchmark does not appear restricted.
- Conclusion: no explicit anti-benchmark or anti-publication clause located on either page.

## 12. Regions

Source: https://www.twilio.com/docs/global-infrastructure/conversations-api-with-twilio-regions , https://www.twilio.com/docs/global-infrastructure/regional-product-and-feature-availability

| Region | Chat | SMS | WhatsApp |
|---|---|---|---|
| US1 (default) | yes | yes | yes |
| IE1 (Dublin) | yes | no | no |
| AU1 (Sydney) | no | no | no |

- IE1 also lacks: Messaging services, Notification logs, Delivery receipts, Static IP config.
- Regional REST base: `https://conversations.dublin.ie1.twilio.com/v1`; Node: `twilio(apiKeySid, apiKeySecret, { accountSid, edge: 'dublin', region: 'ie1' })`.
- JS SDK: `ConversationsClient.create(accessToken, { region: 'ie1' })` (ClientOptions.region).
- Token: "the credentials used in the token must exist in the same Region that the client is connecting to" — create an IE1 API Key using the IE1 Auth Token. The generic Access Token page says the `region` token option is "Currently only supported for Voice tokens", so for Conversations the regionality comes from the regional API Key, not a token claim.
- Resources do not cross regions ("your application will no longer have access to any existing Conversations resources ... previously created in US1").
- For this project (SMS + WhatsApp legs): **US1 only**.

## 13. Pricing page

https://www.twilio.com/en-us/messaging/pricing/conversations-api (prices intentionally not recorded).

## Unconfirmed / gaps

- Exact rename announcement URL for "Conversations (classic)".
- Trial SMS watermark text (Help Center 403; only via search snippet).
- Whether FCM credential accepts HTTP v1 service-account JSON vs legacy server key.
- Whether WhatsApp Sandbox supports Conversation autocreation.
- Paste chat components (site redirected to GitHub).
- `https://www.twilio.com/docs/conversations-classic/sdk-download` returned 404; use the changelog + sdk.twilio.com reference instead.
