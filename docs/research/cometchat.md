# CometChat — developer docs research (verified 2026-10-06)

Scope: buyer/seller marketplace chat, web only, TypeScript, React + Vite client, Node server.
Method: raw markdown pulled from `https://www.cometchat.com/docs/**.md` (Mintlify export), pricing page and ToS HTML, and `npm view`. Every claim below cites the page it came from. Anything not confirmed on a vendor page is marked **unconfirmed**.

Index of all docs pages: https://www.cometchat.com/docs/llms.txt (sub-indexes: `/docs/_llms/chat-and-messaging/sdks/java-script.md`, `/docs/_llms/chat-and-messaging/ui-kits/react.md`, `/docs/_llms/chat-and-messaging/apis.md`).

---

## 1. Account & plan

Source: https://www.cometchat.com/pricing (plan matrix + FAQ; prices deliberately omitted here) and https://www.cometchat.com/docs/sdk/javascript/setup-sdk

- **Sign up:** https://app.cometchat.com ("Signup for CometChat and then: 1. Create a new app 2. Head over to the API & Auth Keys section and note the Auth Key, App ID & Region").
- **Plans:** Build (free), Basic, Advanced, Enterprise ("Enterprise pricing starts from 10k MAU").
- **Free plan = "Build".** Pricing page: "A full featured, free plan for testing and integrating CometChat." / "Free for development" / "No credit card required" / "Free Forever".
  - FAQ: "When you create a new CometChat Chat account, you will be on the 'Build' plan ... You can test all features of CometChat on the Build plan until you're ready to go live at which time you must subscribe to one of the paid plans. The Build plan is free for up to 100 users. This plan also offers 10,000 free voice and video minutes."
  - Limits table (Build column): Monthly Active Users **100**; Concurrent connections included **25**; Messages/month Unlimited; Message storage Unlimited; **Message retention 6 months** (same on all plans; "Retention window can be extended at additional cost"); Images & files storage + retention Unlimited.
  - **Trial length:** none for Build (free forever). "Do you offer a free trial? Yes! All of our plans include a chance to try the product(s) for free." The paid-plan trial length is **unconfirmed** on vendor pages (third-party sites say 7 days; not relied on).
  - **Credit card:** "No credit card required" (Build).
- **MAU / PCC definitions:** "A Monthly Active User (MAU) is a user that has connected to CometChat servers during the subscription period." "Peak Concurrent Connections (PCC) ... maximum number of devices connected to CometChat at the same time."
- **Plan-gated features** (pricing matrix, columns Build / Basic / Advanced / Enterprise):

| Feature | Build | Basic | Advanced | Enterprise |
|---|---|---|---|---|
| Rule-based moderation with conditional logic (keywords/regex) | yes | yes | yes | yes |
| Ready-to-use word/pattern rules (profanity, contact details, email filter) | yes | yes | yes | yes |
| Phone & email detection filter | yes | yes | yes | yes |
| Manual moderation (Flag & Review) | yes | yes | yes | yes |
| AI powered moderation / Ready-to-use AI rules | yes | no | yes | yes |
| OpenAI powered moderation (needs your OpenAI subscription) | yes | no | no | yes |
| Moderation webhooks (post-event) | yes | no | yes | yes |
| Custom moderation engine (pre-event webhook) | yes | no | (see page) | yes |
| Message translation | yes | no | yes | yes |
| Push notifications (incl. VoIP) | yes | yes | yes | yes |
| Email notifications ("An active SendGrid account is required") | yes | no | yes | yes |
| SMS notifications ("An active Twilio account is required") | yes | no | yes | yes |
| Custom notification provider (your own push/email/SMS webhook) | yes | no | yes | yes |
| Messaging webhooks (message sent/edited/deleted) | yes | yes | yes | yes |
| User / Group / Calling webhooks | yes | no | yes | yes |
| Enterprise webhooks (presence, delivery/read receipts, reactions, mentions) | yes | no | no | yes |
| Role Based Access Control (message/receiver types per role) | yes | no | no | yes |
| Multi-tenancy | — | no | yes | yes (FAQ: "part of our Advanced and Enterprise Chat plans") |
| Private dedicated region / on-premise | no | no | no | addon |

- **Data export:** no "data export" row on the pricing page (**unconfirmed** as a product feature). Related: REST "Data Import" APIs exist (https://www.cometchat.com/docs/rest-api/data-import.md) and list/fetch APIs for users, groups, messages.
- **Data Masking / Profanity Filter extensions:** not on the pricing matrix at all; they are "Legacy Moderation Extensions" (see §5). Their equivalents are the moderation rules above (available on Build).
- Pattern: **Build has nearly everything Advanced/Enterprise has** (for testing); **Basic** is the stripped tier. Note "Enterprise pricing starts from 10k MAU".

## 2. Dashboard setup (before first message)

Sources: https://www.cometchat.com/docs/sdk/javascript/setup-sdk , https://www.cometchat.com/docs/ui-kit/react/integration-react , https://www.cometchat.com/docs/fundamentals/key-concepts , https://www.cometchat.com/docs/rest-api/authentication

1. Create app at https://app.cometchat.com. Key-concepts: "Ideally, you should create two apps - one for development and one for production. ... Do not create separate apps for every platform."
2. Choose region at app creation. Regions are `us`, `eu`, `in` (setup-sdk AppSettings table: "Region where your app was created (`us`, `eu`, `in`)").
3. Copy credentials: "Dashboard → Your App → Credentials" (integration-react) / "API & Auth Keys section" (setup-sdk): **App ID**, **Auth Key**, **Region**, and **REST API Key**.
   - REST auth page: scope `authOnly` = "Auth Key" ("Can only create users and generate auth tokens. Intended for quick demos and prototyping"); scope `fullAccess` = "REST API Key" ("All REST API operations ... Use server-side only"). "Never expose a fullAccess (REST API Key) in client-side code."
4. Create users: Dashboard for POC, or REST `POST /users` from your server (§3). Five test users pre-seeded: `cometchat-uid-1`..`cometchat-uid-5`.
5. Enable extensions: Dashboard → **Chat & Messaging → Features → Extensions** (translation page: "Navigate to Chat & Messaging → Features and enable Message Translation under Extensions"). Programmatic: Management API `POST /apps/{appId}/extensions` (https://www.cometchat.com/docs/rest-api/management-apis/extensions/enabledisable.md) using `key`/`secret` headers against `https://apimgmt.cometchat.io`.
6. Moderation rules: Dashboard **Moderation → Rules** (toggle default rules, create custom); flag reasons under **Moderation → Advanced Settings**. REST Moderation APIs: https://www.cometchat.com/docs/rest-api/moderation-apis/overview.md
7. Webhooks: Dashboard **Application → Webhooks → Create Webhook → Triggers**; or Management API (https://www.cometchat.com/docs/rest-api/management-apis/webhooks/overview.md). Auth = HTTP Basic (see §10).
8. Push: Dashboard **Notifications → Settings → enable Push Notifications → Add Credentials (FCM service-account JSON) → set a Provider ID** (https://www.cometchat.com/docs/notifications/push-overview.md). This is the **modern "Notifications" platform**, not the legacy "Push Notification extension". fundamentals/notification-extensions.md: "CometChat Notifications come in two variants: 1. The modern Notifications platform ... 2. The Legacy Notification Extensions ... we recommend using the modern Notifications platform."
9. Email: Dashboard **Notifications → Settings → enable Email**; provider = **SendGrid (built-in)** or **Custom provider (webhook to your server)**. Details §7.
10. SMS: **Notifications → Settings → enable SMS**; provider = **Twilio (built-in)** or Custom provider webhook. Store phone/email via `PATCH /v3/notifications/v1/contact-details` with `onBehalfOf` (https://www.cometchat.com/docs/notifications/sms-integration.md).

**.env keys (naming is ours; values from dashboard):**
```
COMETCHAT_APP_ID=
COMETCHAT_REGION=us        # us | eu | in
COMETCHAT_AUTH_KEY=        # client-side dev only; never ship in prod
COMETCHAT_REST_API_KEY=    # server only (fullAccess)
COMETCHAT_FCM_PROVIDER_ID= # only if web push is enabled
COMETCHAT_WEBHOOK_BASIC_USER= / COMETCHAT_WEBHOOK_BASIC_PASS=   # webhook Basic Auth
```
Vite client: `VITE_COMETCHAT_APP_ID`, `VITE_COMETCHAT_REGION` (and `VITE_COMETCHAT_AUTH_KEY` for dev only; production should use auth tokens minted by the Node server).

## 3. SDKs & core APIs

### Packages (npm view, 2026-10-06)
| Package | Latest | Notes |
|---|---|---|
| `@cometchat/chat-sdk-javascript` | **4.2.0** (2026-09-07; `4.2.1-beta` 2026-09-15) | Core SDK. Browser-only ("requires browser APIs (window, WebSocket) and cannot run on the server" — setup-sdk SSR section). |
| `@cometchat/chat-uikit-react` | **7.2.3** | peerDeps: `react >=18.0.0 <21.0.0`, `react-dom >=18.0.0 <21.0.0`, `@cometchat/chat-sdk-javascript ^4.2.0`, `@cometchat/calls-sdk-javascript ^5.0.3`. deps: `dompurify 3.3.1`, `@cometchat/cards-react ~1.0.0`. Migration page: "7.2.x declares @cometchat/chat-sdk-javascript ^4.2.0, so staying on a 4.1.x pin fails with ERESOLVE". |
| `@cometchat/calls-sdk-javascript` | 5.0.6 | Not needed (voice/video). Listed as a peerDep of the UI Kit; install only if calling is enabled (integration-react: "If you want voice/video calling, also install"). |
| Node SDK | **none** | Server side = REST API (`https://{appId}.api-{region}.cometchat.io/v3`, header `apikey`). No official Node package found in docs (**unconfirmed** that one exists; docs only reference REST). |

Install (UI Kit path): `npm install @cometchat/chat-uikit-react @cometchat/chat-sdk-javascript dompurify` (https://www.cometchat.com/docs/ui-kit/react/integration-react.md). UI Kit requires Node 18+.

### Init — https://www.cometchat.com/docs/sdk/javascript/setup-sdk.md
```ts
import { CometChat } from "@cometchat/chat-sdk-javascript";
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)                 // "us" | "eu" | "in"
  .autoEstablishSocketConnection(true)
  .build();
await CometChat.init(appID, appSetting);
```
Other builder options: `subscribePresenceForRoles([...])`, `subscribePresenceForFriends()`, `overrideAdminHost()`, `overrideClientHost()`, `setStorageMode(CometChat.StorageMode.SESSION)`.
UI Kit equivalent: `new UIKitSettingsBuilder().setAppId().setRegion().setAuthKey().subscribePresenceForAllUsers().build()` → `CometChatUIKit.init(settings)` → `CometChatUIKit.login(uid)` or `CometChatUIKit.loginWithAuthToken(token)` → render `<CometChatProvider>` (order is mandatory; "Breaking this order = blank screen").

### Login — https://www.cometchat.com/docs/sdk/javascript/authentication-overview.md
- Dev: `CometChat.login(UID, authKey)`; create user from client (dev only): `CometChat.createUser(new CometChat.User(uid).setName(name), authKey)`.
- Prod: `CometChat.login(authToken)` where the token is minted server-side: `POST /users/{uid}/auth_tokens` (body `{ "force": boolean }` optional) → `{ data: { uid, authToken, createdAt } }` (https://www.cometchat.com/docs/rest-api/auth-tokens/create.md). "Auth tokens should be per user per device"; max 100 active per user (rolling).
- Check session first: `const u = await CometChat.getLoggedinUser(); if (!u) await CometChat.login(...)`. `CometChat.logout()`.
- UI Kit v7: `CometChatUIKit.getLoggedInUser()` is **synchronous** (capital I) — https://www.cometchat.com/docs/ui-kit/react/migration-overview.md

### Create user (REST) — https://www.cometchat.com/docs/rest-api/users/create.md
`POST https://{appId}.api-{region}.cometchat.io/v3/users` header `apikey: <REST API key>`; body `{ uid, name, avatar?, link?, role?, statusMessage?, metadata?, tags?, withAuthToken? }`. Constraints: UID ≤100 chars "Alphanumeric with dashes only; spaces not allowed"; name ≤100; metadata ≤5 KB; tags ≤25; "Maximum groups per user 2000"; "Maximum users per app No limit". Private contact data for email/SMS: `metadata: { "@private": { email, contactNumber } }` (schema default in the OpenAPI), but the modern Notifications platform uses the contact-details endpoint instead (§7).

### Create group (GUID = order id) — SDK https://www.cometchat.com/docs/sdk/javascript/create-group.md ; REST https://www.cometchat.com/docs/rest-api/groups/create.md
- SDK: `new CometChat.Group(GUID, name, CometChat.GROUP_TYPE.PRIVATE, "")` → `CometChat.createGroup(group)`; or `CometChat.createGroupWithMembers(group, [new CometChat.GroupMember(uid, CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT)], bannedUids)`. "GUID can be alphanumeric with underscore and hyphen." Private = "Users must be added by an admin/moderator".
- REST (recommended from the Node server): `POST /v3/groups` body `{ guid, name, type: "private", icon?, description?, metadata?: {...}, owner?: uid, tags?: [...], members?: { admins: [], moderators: [], participants: [] } }`, optional header `onBehalfOf`. Constraints: GUID ≤100 chars (alphanumeric + dashes); ≤300 members for full features (receipts/typing); "Maximum groups No limit".
- Group `metadata` (JSON) and `tags` are settable at create and via `PUT /v3/groups/{guid}` / SDK `updateGroup()` (https://www.cometchat.com/docs/sdk/javascript/update-group.md — "There is no real-time event listener for group updates").

### Add members / kick — https://www.cometchat.com/docs/sdk/javascript/group-add-members.md , https://www.cometchat.com/docs/rest-api/group-members/add-members.md , https://www.cometchat.com/docs/rest-api/group-members/kick.md
- SDK: `CometChat.addMembersToGroup(GUID, [new CometChat.GroupMember(UID, CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT)], [])` → `{ [uid]: "success" | errorMsg }`. Scopes: `ADMIN`, `MODERATOR`, `PARTICIPANT`.
- REST: `POST /v3/groups/{guid}/members` body `{ admins?: [], moderators?: [], participants?: [], usersToBan?: [] }`.
- Kick: SDK `CometChat.kickGroupMember(GUID, UID)`; ban `banGroupMember`; unban `unbanGroupMember` ("can only be performed by the Admin or the Moderator"). REST `DELETE /v3/groups/{guid}/members/{uid}` (https://www.cometchat.com/docs/sdk/javascript/group-kick-ban-members.md). Listener: `CometChat.GroupListener` `onMemberAddedToGroup`, `onGroupMemberKicked`, `onGroupMemberBanned`.

### Send text — https://www.cometchat.com/docs/sdk/javascript/send-message.md
```ts
const m = new CometChat.TextMessage(GUID, "Hello", CometChat.RECEIVER_TYPE.GROUP);
await CometChat.sendMessage(m);
```
REST: `POST /v3/messages` with `onBehalfOf: <uid>` header, body `{ receiver, receiverType: "user"|"group", category: "message", type: "text", data: { text, metadata? }, tags?, muid?, quotedMessageId? }` (https://www.cometchat.com/docs/rest-api/messages/send-message.md). Limits: message ≤65 KB; `data` object ≤10 KB; tags ≤25.

### Send custom message — same page
```ts
const cm = new CometChat.CustomMessage(GUID, CometChat.RECEIVER_TYPE.GROUP, "offer", { price: 120, status: "pending" });
cm.setTags(["offer"]); cm.setConversationText("Sent an offer"); cm.shouldUpdateConversation(true);
await CometChat.sendCustomMessage(cm);     // UI Kit: CometChatUIKit.sendCustomMessage(cm)
```
REST: `{ receiver, receiverType, category: "custom", type: "<your type>", data: { customData: {...} }, tags? }` — "when category=="custom", this property can have any JSON object." Receiver gets `getCustomData()` (https://www.cometchat.com/docs/sdk/reference/messages.md#custommessage).

### Edit / update a message — https://www.cometchat.com/docs/sdk/javascript/edit-message.md
- "Use `editMessage()` with a `TextMessage` or `CustomMessage` object. Set the message ID using `setId()`." → **custom messages are editable via SDK** (build a new `CustomMessage` with same receiver/type and new customData, `setId(id)`, `CometChat.editMessage(cm)`). Returned message has `getEditedAt()`, `getEditedBy()`. Listener `onMessageEdited`.
- Who may edit: sender (own messages); group **owner** and **moderator** may edit all messages in the group.
- REST: `PUT /v3/messages/{id}` with `onBehalfOf`; documented body is `{ data: { text?, metadata? }, tags? }` (https://www.cometchat.com/docs/rest-api/messages/update-message.md). **Unconfirmed** whether REST accepts `data.customData` for custom messages — the OpenAPI schema only lists `text` and `metadata`. Safer server-side pattern: store offer state in `metadata` (editable by REST) or edit from the client via SDK.

### Receive — https://www.cometchat.com/docs/sdk/javascript/receive-message.md
```ts
CometChat.addMessageListener("LISTENER_ID", new CometChat.MessageListener({
  onTextMessageReceived: (m) => {}, onMediaMessageReceived: (m) => {},
  onCustomMessageReceived: (m: CometChat.CustomMessage) => {},
  onMessageEdited: (m) => {}, onMessageDeleted: (m) => {},
  onTypingStarted: (t) => {}, onTypingEnded: (t) => {},
  onMessagesDelivered: (r) => {}, onMessagesRead: (r) => {},
  onMessageModerated: (m) => {},
}));
CometChat.removeMessageListener("LISTENER_ID");
```
"As a sender, you will not receive your own message in a real-time event." History: `new CometChat.MessagesRequestBuilder().setGUID(GUID).setLimit(30).build().fetchPrevious()`; filter by `setCategories(["custom"])`/`setTypes([...])` (message-filtering page).

### Receipts — https://www.cometchat.com/docs/sdk/javascript/delivery-read-receipts.md
`CometChat.markAsDelivered(message)`, `CometChat.markAsRead(message)`, `CometChat.markAsUnread(message)`, `CometChat.getMessageReceipts(messageId)`; listeners `onMessagesDelivered` / `onMessagesRead`. REST: `/v3/conversations/...mark-group-conversation-as-read` etc. Group receipts only "Up to 300 online users".

### Typing — https://www.cometchat.com/docs/sdk/javascript/typing-indicators.md
`CometChat.startTyping(new CometChat.TypingIndicator(GUID, CometChat.RECEIVER_TYPE.GROUP))` / `endTyping(...)` (fire-and-forget); listener `onTypingStarted` / `onTypingEnded`.

### Media upload — https://www.cometchat.com/docs/sdk/javascript/send-message.md (classic) and https://www.cometchat.com/docs/sdk/javascript/upload-files.md (new)
- Classic: `new CometChat.MediaMessage(GUID, file, CometChat.MESSAGE_TYPE.IMAGE, CometChat.RECEIVER_TYPE.GROUP)` → `CometChat.sendMediaMessage(mm)`.
- New (4.2): `CometChat.createUploadFileRequest(receiverId, receiverType)` → `request.uploadAttachments([{ fileId, file }], listener)` with `onFileProgress/onFileUploaded/onFileError/onFileFailure/onComplete`, then `mediaMessage.setAttachments([...])` + `sendMediaMessage`. Per-file limit 100 MB default; ≤10 attachments per message.

## 4. UI Kit custom message rendering (React UI Kit v7)

Sources: https://www.cometchat.com/docs/ui-kit/react/plugins/overview.md , https://www.cometchat.com/docs/ui-kit/react/plugins/custom-plugin.md , https://www.cometchat.com/docs/ui-kit/react/migration-overview.md , https://www.cometchat.com/docs/ui-kit/react/components/message-list.md

- **`CometChatMessageTemplate` / `getAllMessageTemplates` / `ChatConfigurator` are gone in v7.** Migration page: "Extensibility: DataSource / ChatConfigurator → CometChatMessagePlugin interface"; property-changes table: "`templates` prop — CometChatMessageTemplate[] — Removed — Handled by plugin system."
- **Current API = plugin.** Implement `CometChatMessagePlugin` and pass via `<CometChatProvider plugins={[MyPlugin]}>`. Required members: `id`, `messageTypes: string[]`, `messageCategories: string[]`, `renderBubble(message, context) => ReactNode`. Optional: `getOptions()` (context menu), `getLastMessagePreview()` (conversation subtitle), `renderHeaderView/FooterView/BottomView/StatusInfoView/ReplyView/ThreadView/LeadingView`. "Custom plugins passed via the plugins prop are placed before the defaults, so a custom plugin can override a built-in one." "If no plugin matches a message type, the message is not displayed."
- Doc example (type `"location"`, category `"custom"`):
```tsx
export const OfferPlugin: CometChatMessagePlugin = {
  id: "offer", messageTypes: ["offer"], messageCategories: ["custom"],
  renderBubble(message, context) {
    const data = (message as CometChat.CustomMessage).getCustomData() as OfferData;
    return <OfferCard data={data} isMine={context.alignment === "right"} />;
  },
  getOptions: () => [],
  getLastMessagePreview: (m) => "Offer",
};
```
`context` includes `loggedInUser`, `group`, `alignment`, `theme`, `getLocalizedString`, `onDeleteMessage`, `onEditMessage`, `onFlagMessage`, `showToast`, `publish` (event system).
- Escape hatch: `<CometChatMessageList bubbleView={(message, loggedInUser) => ReactNode} />` replaces the entire bubble renderer ("When provided, the default plugin-based BubbleRenderer is skipped entirely") — flat API only.
- Sending from UI Kit: `CometChatUIKit.sendCustomMessage(customMessage)` (https://www.cometchat.com/docs/ui-kit/react/methods.md).
- Other UI Kit facts: v7 injects its own CSS (no stylesheet import); components are `height:100%` flex-fill (give the wrapper `height:100dvh`); `textFormatters` prop returned in 7.2.0; 19 built-in locales; moderation and Report Message are built in ("Message List ... provides the Report Message option").

## 5. Moderation

Sources: https://www.cometchat.com/docs/moderation/overview.md , https://www.cometchat.com/docs/moderation/getting-started.md , https://www.cometchat.com/docs/moderation/rules-management.md , https://www.cometchat.com/docs/moderation/constraints-and-limits.md , https://www.cometchat.com/docs/sdk/javascript/ai-moderation.md , https://www.cometchat.com/docs/sdk/javascript/flag-message.md , https://www.cometchat.com/docs/fundamentals/moderation-extensions.md , legacy: https://assets.cometchat.io/legacy-docs/moderation/legacy-extensions.html

- **Two generations.** "CometChat Moderation features come in two variants: 1. The modern rule based Moderation platform. 2. The Legacy Moderation Extensions ... we recommend using the rule based Moderation platform." Overview warns: "Disable legacy extensions (Profanity Filter, Data Masking, Image Moderation) ... before creating moderation rules. Running both will cause performance issues."
- **Rules engine (modern):** rules combine filters + conditions; actions **Block** (disapproved, not delivered) or **Flag** (delivered, queued for review). Default text rules include **Profanity Filter** (keyword list), **Contact Details Removal** ("Detects and blocks messages containing phone numbers"), **Email Detection**, AI Toxicity / Spam / Scam / Platform Circumvention, plus OpenAI-backed rules (hate, explicit, privacy & sensitive info, violence, self-harm, impersonation/fraud). Image/video: AI image/video moderation, OpenAI image rules, malware scanner. **Lists** = custom keyword lists and **regex patterns** (https://www.cometchat.com/docs/moderation/lists-management.md). Limits: 25 custom rules, 25 lists, 10 filters/rule, 10 conditions/rule. Images JPEG/PNG; videos MP4/MOV/AVI. Moderation host `rule-<region>.cometchat.io`.
- **Plan gates** (pricing): rule-based + word/pattern + phone/email detection + flag & review on **all** plans; AI rules on Build/Advanced/Enterprise; OpenAI rules on Build/Enterprise (bring your own OpenAI key); moderation webhooks not on Basic.
- **SDK behaviour:** `message.getModerationStatus()` → `CometChat.ModerationStatus.PENDING | APPROVED | DISAPPROVED | UNMODERATED`; `onMessageModerated` listener. "Custom messages are not subject to moderation" (text/image/video only) — **important for our offer messages: put free text in TextMessages if it must be moderated.**
- **Webhook events:** `moderation_engine_approved`, `moderation_engine_blocked`, `moderation_manual_approved` (getting-started). Dashboard path "Application → Webhooks → Create Webhook → Triggers → Moderation".
- **Report message (modern):** `CometChat.getFlagReasons()` → `[{id, reason}]`; `CometChat.flagMessage(messageId, { reasonId, remark? })`. Appears in Dashboard **Moderation > Flagged Messages**. REST: https://www.cometchat.com/docs/rest-api/moderation-apis/flag-a-message.md. UI Kit has the Report option built in.
- **Report user:** only as a **legacy extension** (`report-user`): `CometChat.callExtension('report-user','POST','v1/report',{ uid, reason, guid? })`; reports viewed on the extension settings page (Kick/Ban/Block/Ignore). No modern "report user" API found (**unconfirmed** beyond legacy). User-level block: `CometChat.blockUsers([uid])` (https://www.cometchat.com/docs/sdk/javascript/block-users.md).
- **Data Masking:** exists as legacy extension id `data-masking` ("Hide phone numbers, email addresses, and other sensitive information"; default masks "Emails, SSN, US phone numbers" + custom regex; option `dropMessage`; result injected into `metadata["@injected"].extensions["data-masking"].data.message_masked`). Management API: `PUT /apps/{appId}/extensions/data-masking/v1/settings` (https://www.cometchat.com/docs/rest-api/management-apis/extensions/data-masking-store-or-update-settings.md). Legacy page: "scheduled for deprecation ... will not receive feature updates." Plan: not listed on pricing; **unconfirmed** gate (enabled from Extensions page). Modern replacement = Contact Details Removal / Email Detection rules (block or flag; no partial masking documented).
- **Profanity Filter:** legacy extension `profanity-filter` (blacklist; "Drop messages with Profanity"; `message_clean` injected) — same deprecation note. Modern = Profanity Filter rule.
- **Moderation dashboard:** Rules, Lists, Flagged Messages, Blocked Messages, Reviewed Messages (https://www.cometchat.com/docs/moderation/flagged-messages.md etc.). Dashboard team roles (Owner/Admin/Moderator/Developer): https://www.cometchat.com/docs/fundamentals/user-roles-and-permissions.md

## 6. Translation

Source: https://www.cometchat.com/docs/fundamentals/message-translation.md ; UI Kit: https://www.cometchat.com/docs/ui-kit/react/extensions.md

- Extension **Message Translation** (id `message-translation`), enabled at Dashboard → Chat & Messaging → Features → Extensions. **On-demand (receiver-initiated)**:
```js
CometChat.callExtension('message-translation', 'POST', 'v2/translate',
  { msgId: 12, text: "Hey there!", languages: ["ru","hi"] })
// → { msgId, translations: [{ message_translated, language_translated, error, error_description }], language_original }
```
- Sender-side pre-translation pattern: call the extension before send and put results in `metadata["message-translation"][lang]`.
- ~75 languages (table on page; codes per RFC 5646). Error `ERR_NOT_SUPPORTED` when source language unsupported. **Engine not named** on the page (**unconfirmed**; language list/codes like `fa-AF`, `zh-TW` match Amazon Translate conventions but this is inference, not doc).
- Auto-translation of every message: not documented; only on-demand + sender-side metadata. UI Kit v7: "Translates messages into the local locale. Auto-integrates into the message options menu of MessageList when activated" (prop `hideTranslateMessageOption`).
- Plan gate: Build yes / Basic **no** / Advanced yes / Enterprise yes; "We do not charge for ... message translation".

## 7. Push, email, SMS

Sources: https://www.cometchat.com/docs/notifications/push-overview.md , https://www.cometchat.com/docs/notifications/web-push-notifications.md , https://www.cometchat.com/docs/notifications/email-overview.md , https://www.cometchat.com/docs/notifications/email-integration.md , https://www.cometchat.com/docs/notifications/email-custom-providers.md , https://www.cometchat.com/docs/notifications/email-preferences.md , https://www.cometchat.com/docs/notifications/sms-integration.md , https://www.cometchat.com/docs/notifications/constraints-and-limits.md

- **Web push = FCM via the modern Notifications platform** (the "Push Notification extension" is legacy). Steps: Notifications → Settings → enable Push → add FCM provider (service-account JSON) → Provider ID; Firebase web app + VAPID key; `npm install firebase`; after login `CometChatNotifications.registerPushToken(token, CometChatNotifications.PushPlatforms.FCM_WEB, providerId)` (class exported from `@cometchat/chat-sdk-javascript`, JS SDK ≥4.0.8); service worker `firebase-messaging-sw.js`. Limits: push for groups ≤1000 members; "Browser notifications are not supported on mobile devices"; supported browsers Chrome 50+, Firefox 44+, Edge 17+, Opera 42+.
- **Email notifications (confirmed feature).** Trigger = unread fallback: "Only fires when a chat message remains unread beyond the wait window you configure" (default 120 min, min 1, max 1440, per conversation). Providers: "SendGrid (recommended): Native integration ... Custom provider: Bring your own email gateway/webhook." **Own SMTP: not directly** — the overview text says "Configure SMTP or a supported provider" but the integration page only documents SendGrid + custom webhook; with a custom provider CometChat POSTs `{ trigger: "email-notification-payload-generated", data: { to: {uid,email?,name}, messages:[...], senderDetails|groupDetails, subject }, appId, region, webhook: "custom" }` to your HTTPS endpoint (Basic Auth optional) and **your server sends the email** (sample Express code on page). So "point at our own SMTP" = yes via the custom-provider webhook + our own mailer; no SMTP credential field in the dashboard is documented. Limits: email for groups ≤30 members; min 1 minute between emails. Plan: Build/Advanced/Enterprise ("An active SendGrid account is required" note on pricing refers to the built-in provider).
- **SMS:** Twilio built-in or custom webhook; contact numbers via `PATCH /v3/notifications/v1/contact-details` `{ email, phno }` with `onBehalfOf`; timezones via `CometChatNotifications.updateTimezone()`; 160-char limit; groups ≤30. Plan: Build/Advanced/Enterprise.
- Legacy Email Notification extension (`email-notification`) still exists in Management API with SendGrid + webhook settings (https://www.cometchat.com/docs/rest-api/management-apis/extensions/email-notification-store-settings.md) — avoid; use the modern platform.

## 8. Support escalation

- Add a support agent to the order group: SDK `addMembersToGroup` / REST `POST /v3/groups/{guid}/members` (§3), optionally with scope `moderator` so they can edit/delete messages. Server can also post as the agent with `onBehalfOf`. Bot users: "Maximum Bot users per app 25" (users/create).
- **No CometChat helpdesk product.** Customer-support integrations are extensions that bridge to third parties: **Chatwoot** (https://www.cometchat.com/docs/fundamentals/chatwoot.md) and **Intercom** (https://www.cometchat.com/docs/fundamentals/intercom.md, "works with Intercom API Version 2.3"). Both: "you can use CometChat as a front-end for your customer support use case as well". Confirmed none native.

## 9. Rate limits

Sources: https://www.cometchat.com/docs/articles/rate-limits.md , https://www.cometchat.com/docs/sdk/javascript/rate-limits.md , https://www.cometchat.com/docs/sdk/javascript/best-practices.md

- REST API, per app, **per minute**, same across MAU tiers 100/1K/2500/5K/10k: **Standard Operations 20k req**, **Core Operations 10k req** (best-practices: "Core operations (login, create/delete user) share a 10,000/min limit. Standard operations have 20,000/min"). "Rate limits are cumulative within each tier."
- On limit: HTTP 429 with `Retry-After` and `X-Rate-Limit-Reset`; every response carries `X-Rate-Limit` and `X-Rate-Limit-Remaining`. SDK error code `TOO_MANY_REQUEST`. "No rate-limit endpoint."
- **Client/WebSocket send rate limit: not documented** (**unconfirmed**; the SDK rate-limits page only describes REST limits). Legacy "Slow Mode" extension can throttle a group (`callExtension('slow-mode', ...)`).
- "Rate limits can be adjusted based on your use case and plan. Contact CometChat support."

## 10. Webhooks

Sources: https://www.cometchat.com/docs/fundamentals/webhooks.md , https://www.cometchat.com/docs/rest-api/management-apis/webhooks/overview.md , https://www.cometchat.com/docs/moderation/getting-started.md

- Config: Dashboard or Management API (`POST /apps/{appId}/webhooks`, then `POST /apps/{appId}/webhooks/{webhookId}/triggers`). Properties: `id`, `name`, `webhookURL` (HTTPS, public, ≤255 chars), `useBasicAuth`, `username`, `password`, `enabled`. Max 25 webhooks/app.
- **Security: HTTP Basic Auth only.** "CometChat supports Basic Authentication to secure your webhook endpoints. When configured, every webhook request includes an Authorization header with your credentials." **No HMAC signature header is documented** (grep of the overview found no signature/HMAC fields). Payload envelope: `{ trigger, data: {...}, appId, region, webhook: "<webhookID>" }`. "Respond quickly: Return 200 OK within 2 seconds"; "Handle retries gracefully: Use event IDs to deduplicate."
- Triggers: `message_sent`, `message_edited`, `message_deleted`, `message_reaction_added/removed`, `user_blocked/unblocked`, `group_created/updated/deleted`, `group_member_joined/left/added/kicked/banned/unbanned/scope_changed`, `group_owner_transferred`, `user_connection_status_changed`, `message_delivery_receipt`, `message_read_receipt`, call/meeting/recording/transcription events, campaign/feed/push events; moderation: `moderation_engine_approved`, `moderation_engine_blocked`, `moderation_manual_approved`. (Enterprise-tier gating applies to presence/receipt/reaction triggers per pricing; Basic plan only gets messaging webhooks.)

## 11. Terms of Service

Source: https://www.cometchat.com/legal-terms-of-service ("Online Terms of Service", CometChat Inc., Delaware). Also https://www.cometchat.com/legal-privacy-policy, https://www.cometchat.com/legal-data-processing-agreement, https://www.cometchat.com/legal-sub-processors-list. No separate Acceptable Use Policy page found (**unconfirmed** that one exists).

- **No clause about benchmarking, performance testing, or publishing comparative results** was found (searched the full ToS text for benchmark / performance test / load test / comparative / publish results / competitor).
- Nearest relevant restriction (quoted): "You shall not ... (d) otherwise interfere in any manner with the use or operation of the Services; or (e) use the Services in the development, directly or indirectly, of any product, software or service that offers any functionality substantially similar to, or competitive with, the Software."
- Publicity: "CometChat may use Subscriber's name and logo on client lists published on CometChat's website and in marketing materials."
- Feedback: "you grant CometChat an irrevocable, worldwide, full-paid-up, assignable right and license to the Feedback."
- Beta features excluded from "service level commitments".
- (Context: CometChat itself publishes load-test results at https://www.cometchat.com/blog/concurrency-testing.)

## 12. Regions → hosts

Sources: https://www.cometchat.com/docs/fundamentals/network-allowlist.md , https://www.cometchat.com/docs/rest-api/authentication.md , OpenAPI `servers` in every REST page

- Regions: **`us`, `eu`, `in`** ("`<region>` is your app's data region — us, eu, or in (find it in your app's endpoint on the Dashboard)").
- REST/Admin API: `https://<appId>.api-<region>.cometchat.io/v3`
- Client API: `<appId>.apiclient-<region>.cometchat.io`; WebSocket: `wss://<appId>.websocket-<region>.cometchat.io` (TCP 443 only for current SDKs); Calls: `<appId>.call-<region>.cometchat.io/v3`; extensions: `<extension>-<region>.cometchat.io` / `extensions-<region>`; moderation `rule-<region>.cometchat.io`; media `data-<region>` / `media-<region>` / `files-<region>.cometchat.io`; AI agents `<appId>.ai-agent-service-<region>.cometchat.io`. Alternate runtime families `cc-cluster-2.io` and `cc-edge-2.io` mirror the same host patterns (allowlist all three).
- Management API (multi-tenancy, extensions settings, webhooks): `https://apimgmt.cometchat.io` with `key` / `secret` headers (region-agnostic).
- SDK: `.setRegion(region)` in `AppSettingsBuilder` / `UIKitSettingsBuilder`. Default timezone per region for notifications: US→EST, EU→GMT, IN→Asia/Kolkata.

## 13. Pricing page

https://www.cometchat.com/pricing (prices intentionally not recorded).

---

## Gotchas for our build (derived from the above)

1. **No server SDK** — write a thin REST client in Node (`apikey` header, `onBehalfOf` to act as a user, base URL from `COMETCHAT_APP_ID` + `COMETCHAT_REGION`).
2. **Custom messages bypass moderation** — keep buyer/seller free text as TextMessages; use CustomMessage only for structured offer cards.
3. **Editing custom messages**: SDK `editMessage(CustomMessage)` is documented; REST `PUT /messages/{id}` schema lists only `data.text`/`data.metadata` — verify customData edits empirically or keep mutable state in `metadata`.
4. **UI Kit v7** uses plugins, not templates; `@cometchat/chat-uikit-react@7.2.3` needs `@cometchat/chat-sdk-javascript@^4.2.0` and `dompurify`.
5. **Webhooks are Basic-Auth only** (no signature) — terminate TLS and verify the Authorization header.
6. **Email via our own SMTP** is only possible through the custom-provider webhook (we send the mail); built-in path is SendGrid.
7. Build plan: 100 MAU / 25 concurrent, no card, all features; 6-month message retention.
