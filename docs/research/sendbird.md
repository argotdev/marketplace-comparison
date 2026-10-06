# Sendbird research (docs as of 2026-10-06)

Scope: buyer/seller marketplace chat, web only, TypeScript, React + Vite client, Node server.
Method: vendor doc pages fetched directly (sendbird.com/docs), raw HTML grepped where the
summarizer was unreliable, npm registry queried for versions. Anything not confirmed on a
doc page is marked **unconfirmed** with the URL tried.

---

## 1. Account & plan

**Sign up:** https://dashboard.sendbird.com/auth/signup/ (linked from every docs page "Start free trial").

**Trial name and length:** "Free 30-day trial" — https://sendbird.com/free-trial
The pricing page labels the column "Free trial" ("Experiment with chat / Free / No overages
allowed / All pro features / No credit card required / Community support").
Source: https://sendbird.com/pricing/chat

**Developer plan (post-trial free tier):** pricing FAQ: "Yes, the Developer plan is free and
remains active as long as you log into the Sendbird dashboard once a year."
https://sendbird.com/pricing/chat. The announcement blog states Developer plan limits of
"The maximum number of chat users is 100" and "concurrent peak connections are limited to 10
per month", "It requires no credit card", and includes "the premium features available in the
Sendbird Chat Pro plan". https://sendbird.com/blog/build-chat-for-free-introducing-the-new-developer-plan
(Blog, not a doc page; undated. Treat the 100 MAU / 10 PCC figures as the Developer-plan
numbers and the pricing-page figures below as the trial numbers.)

**Free trial limits (pricing page comparison table, "Free trial" column; in the HTML this
column is literally `pricing-table__row-developer`):**

| Row | Free trial value |
|---|---|
| MAUs (Monthly Active Chat Users) | Up to 1,000 |
| Peak concurrent connections | Up to 20 |
| Messages/month | Unlimited |
| Message storage | Unlimited |
| Message retention | 6 months ("messages will be retained for a period of six months. Extended message retention is available on Enterprise plan.") |
| Credit card | "No credit card required" |

Note: a Sendbird Community thread says the trial uses Starter limits (5,000 MAU / 100 PCC)
(https://community.sendbird.com/t/free-trial-pcc-support/7543). The vendor pricing page is
authoritative; the community figure is recorded only as a discrepancy.

**Starter / Pro:** "For Starter and Pro packages, your Peak Concurrent Connections are capped
at 5% of your MAU limit." Tiers start at 5K MAU. Retention 6 months.

**Feature gating (pricing page).** The static HTML only renders the Free-trial column; the
Starter/Pro/Enterprise checkmarks are client-rendered and could not be read. What is
confirmable:

- Free trial column has a check for: Profanity filter, AI image moderation, Moderation
  dashboard, User reporting API, Message search, Auto message translation, On-demand
  translation, Push translation, Data export, Post-event webhooks, Announcements, Supergroup,
  Push notifications, Delivery/Read receipts, Analytics dashboard, Advanced analytics,
  Chatbot interface, SAML/SSO, IP whitelisting, "Choose your AWS region".
- Free trial column is EMPTY (not included) for the Advanced Moderation rows: Moderation rule
  engine, Moderation ticket system, Moderation logs, Moderator groups, Keyword detection,
  Moderated users, Analytics (moderation), Moderator messages, Hive moderation; also HIPAA
  w/ BAA, Private dedicated servers, Private status page, Public static IP, ticket support,
  guaranteed response time, emergency hotline, Slack support, CSM, onboarding.
- Plan cards: Starter = "Messaging essentials, Basic moderation, Ticketed support".
  Pro = "All Starter features, Translation, Data export, Image moderation, Supergroup
  channel". Enterprise = "Select from all features ... Add-on products (e.g., Advanced
  Moderation)".
- FAQ: "The Pro plan is designed to help you utilize our latest features, such as message
  search, message translation, auto-moderation, webhooks, and many more on top of the Starter
  pack." and "The enterprise plan gives customers the ability to purchase certain additional
  features, such as Data Export, not available to customers of the Starter and Pro plans."
  (The FAQ and the Pro card contradict each other on Data export; both quoted.)
- So: translation, data export, image moderation, message search, webhooks → Pro+ (and
  free trial). Advanced Moderation → Enterprise add-on. Desk → not on the chat pricing page
  at all (see §8). **Unconfirmed** whether Starter includes webhooks/profanity filter: the
  Starter column is client-rendered; https://sendbird.com/pricing/chat.
- SDK translation page separately says "To enable this feature, contact our sales team."
  https://sendbird.com/docs/chat/sdk/v4/javascript/message/translating-messages/auto-translate-messages

---

## 2. Dashboard setup (before first message)

Source: https://sendbird.com/docs/chat/sdk/v4/javascript/getting-started/send-first-message
and https://sendbird.com/docs/chat/platform-api/v3/prepare-to-use-api

1. Sign in to https://dashboard.sendbird.com, click **Create +**, enter application name,
   select **Product Type** (Chat; Desk is a separate product type) and **Region**, confirm.
2. **Application ID**: Settings > Application > General. "The Application ID is
   case-sensitive. Use the exact case as shown on the Sendbird Dashboard."
   The same page shows the "API request URL" (`https://api-{application_id}.sendbird.com`).
3. **API tokens**: Settings > Application > General > API tokens. The **master API token** is
   generated automatically at app creation and "cannot be revoked or modified". **Secondary
   API tokens** are generated with the master token (Platform API or dashboard) and can be
   revoked. Header: `Api-Token: {token}`. Docs warn: "DON'T send any Chat API requests from
   your client app."
   Secondary token API: https://sendbird.com/docs/chat/platform-api/v3/application/managing-api-tokens/generate-a-secondary-api-token
   Webhook signatures require the **master** token (see §10).
4. **Users**: Users menu > **Create user+** > User ID, Nickname, tick "Issue access token".
   Or Platform API `POST /v3/users` with `user_id`, `nickname`, `profile_url`,
   `issue_access_token`. https://sendbird.com/docs/chat/platform-api/v3/user/creating-users/create-a-user
5. **Access token permission**: Settings > Application > Security > "Access token permission"
   with options read & write / read only / deny login for users connecting without a token.
   https://sendbird.com/docs/chat/sdk/v4/javascript/application/authenticating-a-user/authentication
6. **Webhooks**: Settings > Chat > Webhooks (endpoint URL, event selection, "Include member
   information"). Or `PUT /v3/applications/settings/webhook` with `enabled`, `url`,
   `include_members`, `enabled_events` (`["*"]` for all).
   https://sendbird.com/docs/chat/platform-api/v3/webhook/webhook-overview
   https://sendbird.com/docs/chat/platform-api/v3/webhook/managing-subscribed-events/choose-events-to-subscribe
   Events worth subscribing for this build: `group_channel:message_send`,
   `group_channel:message_update`, `group_channel:message_read`, `group_channel:join`,
   `group_channel:leave`, `group_channel:invite`, `message:report`, `user:report`,
   `profanity_filter:replace|block|moderate|detect`, `image_moderation:block`.
7. **Push config**: Settings > Application > Push notifications (FCM/APNs credentials).
   **Web push via FCM is NOT supported** by the JS Chat SDK: "the Chat SDK doesn't support
   push notifications in web applications delivered through browsers like Chrome and Edge.
   But you can build your own notification system by using our webhook service".
   https://sendbird.com/docs/chat/sdk/v4/javascript/push-notifications/overview-push-notifications
   For a web-only build, skip push config; use webhooks → own notifier.
8. **Profanity / domain / image filters**: application-wide at
   Application > Settings > Moderation (profanity filter, domain filter, image moderation),
   or per custom channel type via Platform API
   `PUT /v3/applications/settings_global` and
   `PUT /v3/applications/settings_by_channel_custom_type/{custom_type}`
   (create: `POST /v3/applications/settings_by_channel_custom_type`).
   https://sendbird.com/docs/chat/platform-api/v3/moderation/moderating-messages/profanity-filter
   https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/create-channel-settings-by-a-custom-channel-type
   Advanced Moderation keyword detection lives at Application > Settings > Moderation >
   Advanced moderation > Keyword detection (add-on).
   https://sendbird.com/docs/advanced-moderation/guide/v1/settings/keyword-detection
9. **Auto-translation**: no dashboard toggle documented; SDK doc says "contact our sales
   team" to enable. Translation is requested per message via `translationTargetLanguages`.
   **Unconfirmed** dashboard path; https://sendbird.com/docs/chat/sdk/v4/javascript/message/translating-messages/auto-translate-messages
10. **Custom channel types**: no registration needed; `customType` (max 128 chars) is a free
    string on channel create. Per-type settings (filters, `max_message_length`,
    `display_past_message`, `user_messages_per_channel`) are created via the
    settings_by_channel_custom_type endpoint above.
11. **Chat history for new members**: Settings > Chat > Channels > Group channels >
    "Chat history" (default on).
    https://sendbird.com/docs/chat/sdk/v4/javascript/channel/inviting-users-to-a-group-channel/invite-users-as-members

**.env keys the app will need**

```
# server
SENDBIRD_APP_ID=                 # case-sensitive, dashboard Settings > Application > General
SENDBIRD_API_TOKEN=              # master token (needed for webhook signature); or secondary token for API calls
SENDBIRD_MASTER_API_TOKEN=       # if separating: master only for webhook verification
SENDBIRD_API_HOST=https://api-${SENDBIRD_APP_ID}.sendbird.com   # region-agnostic host format
SENDBIRD_WEBHOOK_URL=            # public URL registered in Settings > Chat > Webhooks
# client (Vite)
VITE_SENDBIRD_APP_ID=
VITE_SESSION_TOKEN_ENDPOINT=     # our server route that calls POST /v3/users/{user_id}/token
```

Base URL format: `https://api-{application_id}.sendbird.com/v3` (host does not encode the
region). https://sendbird.com/docs/chat/platform-api/v3/prepare-to-use-api

---

## 3. SDKs

Versions from `npm view` on 2026-10-06:

| Package | Version | Notes |
|---|---|---|
| `@sendbird/chat` | 4.22.13 | dist.unpackedSize 3,520,335 bytes (~3.4 MB). Modified 2026-09-23. ESM + CJS; subpath exports `./groupChannel`, `./openChannel`, `./message`, `./feedChannel`, `./poll`, `./node`, `./aiAgent`. peerDependencies only `react-native-mmkv >=2.0.0` (RN only). |
| `@sendbird/uikit-react` | 3.20.0 | Modified 2026-10-06. peerDependencies `react` and `react-dom` `^16.8.6 \|\| ^17.0.0 \|\| ^18.0.0 \|\| ^19.0.0`. Depends on `@sendbird/chat ^4.22.12`, `dompurify`, `date-fns ^2`, `css-vars-ponyfill`. |
| `@sendbird/sendbird-platform-sdk-javascript` | 2.1.6 | Official server-side Node SDK for the Platform API (generated client). Modified 2026-04-14. README: "intended for use in server-side environments only." Node 7+. https://github.com/sendbird/sendbird-platform-sdk-javascript |
| `@sendbird/sendbird-platform-sdk-typescript` | 2.1.8 | TypeScript variant. Modified 2026-07-14. https://github.com/sendbird/sendbird-platform-sdk-typescript |
| `sendbird-platform-sdk` | 0.0.16 | Old unscoped name, 3 years stale; do not use. |
| `sendbird-desk` | 1.3.0 | Desk JS SDK ("SendBird Desk SDK for JavaScript"). Modified 2026-09-15. `@sendbird/desk-sdk` does not exist on npm. |

Recommendation: call the Platform API via plain `fetch` from Node (it is a simple REST
surface with an `Api-Token` header); the generated SDKs are optional.

Install (JS): `npm install @sendbird/chat`. Browser support listed: Edge 13+, Chrome 16+,
Firefox 11+, Safari 7+. https://sendbird.com/docs/chat/sdk/v4/javascript/getting-started/send-first-message

Init / connect:

```ts
import SendbirdChat from '@sendbird/chat';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';
const sb = SendbirdChat.init({ appId: APP_ID, modules: [new GroupChannelModule()], localCacheEnabled: true });
await sb.connect(USER_ID, SESSION_TOKEN);
```

Doc URLs (all confirmed live):

- Connect / auth / SessionHandler: https://sendbird.com/docs/chat/sdk/v4/javascript/application/authenticating-a-user/authentication
  `sb.setSessionHandler(handler)` must be set before `connect`. Handler callbacks:
  `onSessionTokenRequired(resolve, reject)`, `onSessionClosed()`, `onSessionRefreshed()`,
  `onSessionError(err)`. Session lasts ~10 minutes of API use per token; the SDK calls
  `onSessionTokenRequired` to refresh.
- Issue session token (server): `POST https://api-{app_id}.sendbird.com/v3/users/{user_id}/token`
  body `{ "expires_at": <unix ms> }` → `{ "token": "..." }`; default expiry "seven days".
  https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token
- Create group channel: https://sendbird.com/docs/chat/sdk/v4/javascript/channel/creating-a-channel/create-a-channel
  `GroupChannelCreateParams` (ref confirms fields): `invitedUserIds`, `name`, `channelUrl`,
  `coverUrl`/`coverImage`, `operatorUserIds`, `data`, `customType`, `isDistinct`,
  `isPublic`, `isSuper`, `isEphemeral`, `accessCode`.
  `const channel = await sb.groupChannel.createChannel(params);`
  Ref: https://sendbird.com/docs/chat/sdk/v4/javascript/ref/interfaces/_sendbird_chat_groupChannel.GroupChannelCreateParams.html
  For 1:1 buyer↔seller per listing, use `isDistinct: false` (new channel per listing) or
  encode the listing id in `channelUrl`.
- Send user message: https://sendbird.com/docs/chat/sdk/v4/javascript/message/sending-a-message/send-a-message
  `UserMessageCreateParams`: `message`, `customType`, `data` (string; JSON ok),
  `mentionType`, `mentionedUserIds`, `metaArrays`, `translationTargetLanguages`,
  `pushNotificationDeliveryOption`.
  `channel.sendUserMessage(params).onPending(m=>{}).onFailed((e,m)=>{}).onSucceeded(m=>{})`
- File message: same page. `FileMessageCreateParams`: `file` or `fileUrl`, `fileName`,
  `fileSize`, `mimeType`, `thumbnailSizes`, `customType`, `data`.
  `channel.sendFileMessage(params)`; `sendMultipleFilesMessage` up to 20 files.
  "there is a size limit imposed on the file depending on your plan" (number not stated).
- Update message: https://sendbird.com/docs/chat/sdk/v4/javascript/message/managing-a-message/update-a-message
  `UserMessageUpdateParams`: `message`, `customType`, `data`, `mentionType`,
  `mentionedUserIds`. Operators can update any message; `onMessageUpdated` fires for all.
- Receive handlers: https://sendbird.com/docs/chat/sdk/v4/javascript/event-handler/managing-channel-event-handlers/add-or-remove-a-channel-event-handler
  `new GroupChannelHandler({ onMessageReceived, onMessageUpdated, onMessageDeleted,
  onTypingStatusUpdated, onUserMarkedRead, onUnreadMemberStatusUpdated (deprecated 4.18.2),
  onUndeliveredMemberStatusUpdated, onUserJoined, onUserReceivedInvitation, onChannelChanged,
  onMetaDataUpdated, onMetaCountersUpdated, ... })`;
  `sb.groupChannel.addGroupChannelHandler(ID, handler)` / `removeGroupChannelHandler(ID)`.
- Mark as read / read receipts: https://sendbird.com/docs/chat/sdk/v4/javascript/message/managing-read-status-in-a-group-channel/mark-messages-as-read
  `await groupChannel.markAsRead()`; listen `onUserMarkedRead(channel, userIds)`;
  `channel.getReadMembers(message)`, `channel.getUnreadMemberCount(message)`.
- Typing: https://sendbird.com/docs/chat/sdk/v4/javascript/message/managing-a-message/send-typing-indicators-to-other-members
  `channel.startTyping()` / `endTyping()`; `onTypingStatusUpdated(channel)` →
  `channel.getTypingUsers()`.
- Invite / add members: https://sendbird.com/docs/chat/sdk/v4/javascript/channel/inviting-users-to-a-group-channel/invite-users-as-members
  `await channel.inviteWithUserIds(['a','b'])`.
- Channel metadata: https://sendbird.com/docs/chat/sdk/v4/javascript/channel/managing-channel-metadata/manage-channel-metadata
  `createMetaData`, `updateMetaData`, `getMetaData`, `getAllMetaData`, `deleteMetaData`,
  `cachedMetaData`, `onMetaDataUpdated`. String keys/values.
- Channel metacounter: https://sendbird.com/docs/chat/sdk/v4/javascript/channel/managing-channel-metacounters/manage-channel-metacounters
  `createMetaCounters`, `increaseMetaCounters`, `decreaseMetaCounters`; atomic ints.
- Report (client): https://sendbird.com/docs/chat/sdk/v4/javascript/report/creating-a-report/report-a-message-user-or-channel
- Categorize by custom type: https://sendbird.com/docs/chat/sdk/v4/javascript/message/categorizing-messages/categorize-messages-by-custom-type
- Platform API send message (server, e.g. admin/system messages): `POST /v3/{channel_type}/{channel_url}/messages`
  with `message_type: "MESG"|"FILE"|"ADMM"`, `user_id`, `message`, `custom_type` (≤128),
  `data`, `send_push`, `is_silent`, `sorted_metaarray`.
  https://sendbird.com/docs/chat/platform-api/v3/message/messaging-basics/send-a-message

---

## 4. UIKit custom message rendering (@sendbird/uikit-react v3)

Current API: the **`renderMessage`** prop on `GroupChannel` (and on `MessageList` /
`Message` components), plus **`renderMessageContent`** for the bubble only. There is no
`renderCustomMessage` prop in v3; `renderMessage` replaces "the entire message component".
Older `Channel` module is being superseded by `GroupChannel`; migration guide:
https://sendbird.com/docs/chat/uikit/v3/react/introduction/group-channel-migration-guide

Docs: https://sendbird.com/docs/chat/uikit/v3/react/modules/group-channel
Ref: https://sendbird.com/docs/chat/uikit/v3/react/ref/interfaces/modules_GroupChannel_components_GroupChannelUI.GroupChannelUIProps.html
Types: `renderMessage?: (props: RenderMessageParamsType) => ReactElement`,
`renderMessageContent?: (props: MessageContentProps) => ReactElement`.

Pattern (from the module page):

```tsx
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';
import { MessageList } from '@sendbird/uikit-react/GroupChannel/components/MessageList';
import { Message } from '@sendbird/uikit-react/GroupChannel/components/Message';
import '@sendbird/uikit-react/dist/index.css';

<GroupChannel
  channelUrl={url}
  renderMessageList={() => (
    <MessageList
      renderMessage={({ message }) => (
        <Message
          message={message}
          renderMessageContent={(p) =>
            p.message.customType === 'offer'
              ? <OfferCard data={JSON.parse(p.message.data)} />
              : undefined /* falls back to default bubble */ }
        />
      )}
    />
  )}
/>
```

Simpler form: `<GroupChannel channelUrl={url} renderMessage={({ message }) => ...} />` where
you check `message.customType` and return your component; for non-custom types return
`undefined`/default (file-sharing example: https://sendbird.com/docs/chat/uikit/v3/react/features/file-sharing).

UIKit + session tokens: `SendbirdProvider` props `appId`, `userId`, `accessToken`
(session token goes here), `configureSession={(sdk) => SessionHandler}` using
`import SessionHandler from '@sendbird/uikit-react/handlers/SessionHandler'`. Full code at
https://sendbird.com/docs/chat/uikit/v3/react/core-components/handlers
Provider props: https://sendbird.com/docs/uikit/v3/react/core-components/sendbirdprovider

---

## 5. Moderation

Overview: https://sendbird.com/docs/chat/platform-api/v3/moderation/moderation-overview

**Profanity filter** (built-in; free trial ✓; Pro card implies basic moderation in Starter —
Starter column **unconfirmed**): https://sendbird.com/docs/chat/platform-api/v3/moderation/moderating-messages/profanity-filter
- `profanity_filter.keywords[]` (wildcards `*word`, `word*`) and
  `profanity_filter.regex_filters[]` as `[{"regex": "..."}]` using **Google RE2 syntax**.
- `profanity_filter.type`: `0` none (default), `1` **replace** ("replaces words that match
  the keywords property with asterisks"), `2` **block** ("prevents users from sending
  messages that contain the keywords property or match the regex_filters property").
  So: mask = type 1, reject = type 2; no custom replacement string option documented.
- `should_check_global` applies app-wide filter in addition to channel-type filter.
- Set via `PUT /v3/applications/settings_global` or
  `PUT /v3/applications/settings_by_channel_custom_type/{custom_type}`; dashboard
  Application > Settings > Moderation > Profanity filter.
- **Profanity-triggered moderation**: `count`, `duration` (≤86400 s), `action` 0 none /
  1 mute / 2 kick / 3 ban. https://sendbird.com/docs/chat/platform-api/v3/moderation/moderating-messages/profanity-triggered-moderation
- Webhook events: `profanity_filter:replace|block|moderate|detect`.

**Domain filter** (same settings endpoints): `domain_filter.domains[]`,
`domain_filter.type` 0 none / 1 allow-only / 2 block / 3 replace with asterisks.
https://sendbird.com/docs/chat/platform-api/v3/application/setting-up-an-application/update-global-application-settings

**Image moderation** (Pro+, free trial ✓): Google Cloud Vision; categories adult, spoof,
medical, violence, racy; `image_moderation.type` 0/1 normal/2 strict, `soft_block`,
`limits` 1–5 (defaults adult 3, spoof 5, medical 5, violence 3, racy 4); applies to client
SDK file messages and URLs in text when `check_urls` true; not to Platform API sends.
Blocked → error 900066 (file) / 900065 (URL). Webhook `image_moderation:block`.
https://sendbird.com/docs/chat/platform-api/v3/moderation/moderating-messages/image-moderation

**Advanced Moderation** (Enterprise add-on per pricing card): rules engine, event detection,
review queue/tickets, keyword detection (keywords + regex, "Replace with asterisks(*)" or
"Block from sending", up to 15 keyword groups), moderator groups, logs, analytics, Hive AI.
Dashboard: Application > Settings > Moderation > Advanced moderation.
https://sendbird.com/docs/advanced-moderation/guide/v1/overview
https://sendbird.com/docs/advanced-moderation/guide/v1/settings/keyword-detection

**Report APIs**
- Client SDK: `sb.getReportCategoryInfoList()`, `channel.reportMessage(message,
  reportCategoryInfo, description)`, `channel.reportUser(offendingUser, ...)`,
  `channel.report(...)`. Default categories suspicious, harassing, inappropriate, spam;
  custom categories need Advanced Moderation.
  https://sendbird.com/docs/chat/sdk/v4/javascript/report/creating-a-report/report-a-message-user-or-channel
- Platform API: `POST /v3/report/{channel_type}/{channel_url}/messages/{message_id}`
  body `report_category`, `offending_user_id`, `reporting_user_id`, `report_description`,
  `custom_report_category_name`; `POST /v3/report/users/{offending_user_id}`;
  list endpoints under /report/listing-reports/.
  https://sendbird.com/docs/chat/platform-api/v3/report/creating-a-report/report-a-message
  Webhooks `message:report`, `user:report`, `group_channel:report`.
- **Moderation dashboard** row is ✓ on free trial (pricing page); dashboard Chat > Group
  channels > channel view supports mute/ban/freeze/delete.

**Rate-limit style moderation** per channel type: `user_messages_per_channel` (default -1
= system limit) and `user_messages_per_channel_duration` (default 1 s).

---

## 6. Translation

- Engine: "powered by Google Cloud Translation API recognition engine" (Microsoft Translator
  no longer supported). Languages: ISO-639-1 list, 130+.
  https://sendbird.com/docs/chat/platform-api/v3/message/translations/translation-engine
- Per-message auto-translation on send: set `translationTargetLanguages: ['es','ko']` in
  `UserMessageCreateParams`; read `message.translations['es']` (Map). "To enable this
  feature, contact our sales team."
  https://sendbird.com/docs/chat/sdk/v4/javascript/message/translating-messages/auto-translate-messages
- On-demand: https://sendbird.com/docs/chat/sdk/v4/javascript/message/translating-messages/translate-messages-on-demand
  Platform API: `POST /v3/{channel_type}/{channel_url}/messages/{message_id}/translation`
  body `target_langs[]`; text (MESG) only.
  https://sendbird.com/docs/chat/platform-api/v3/message/translations/translate-a-message-into-other-languages
- Per-user: `preferred_languages[]` (≤4) on `PUT /v3/users/{user_id}` translates **push
  notification** text, not channel messages.
  https://sendbird.com/docs/chat/platform-api/v3/user/managing-users/update-a-user
- No per-channel auto-translate setting documented (**unconfirmed**; searched docs above).
- Plan: Pro+ ("Translation" on the Pro card; free trial ✓ in table).

---

## 7. Push & notifications

- **No web push in JS Chat SDK**: "the Chat SDK doesn't support push notifications in web
  applications delivered through browsers like Chrome and Edge ... you can build your own
  notification system by using our webhook service". Only React Native hybrid apps can use
  FCM/APNs through the Chat SDK. JS SDK must call `setForegroundState()` /
  `setBackgroundState()` manually. Limits: 20 FCM + 20 APNs tokens per user.
  https://sendbird.com/docs/chat/sdk/v4/javascript/push-notifications/overview-push-notifications
- **Business Messaging** (formerly "Notifications"): dashboard-driven campaigns over In-app,
  Push, SMS, WhatsApp, Kakao Alim Talk. **Email is not a listed channel.**
  https://sendbird.com/docs/business-messaging/user-guide/v2/overview
- **Email fallback**: Sendbird does not send email natively for chat; the webhook overview
  itself says webhooks are "useful for building your own custom notification service, such as
  an SMS or email notification system, for your offline users."
  https://sendbird.com/docs/chat/platform-api/v3/webhook/webhook-overview
  Build: subscribe `group_channel:message_send`, check recipient offline/unread, send email
  via our own provider.

---

## 8. Sendbird Desk

- "A customer support product that provides live chat between customers and agents."
  Tickets are backed by Sendbird Chat group channels: "the messages within a ticket are
  managed by Sendbird Chat"; `ticket.channel` exposes the channel.
  https://sendbird.com/docs/desk and https://sendbird.com/docs/desk/sdk/v1/javascript/features/ticket
- Flow: client `SendBirdDesk.init(sb)` → `SendBirdDesk.authenticate(userId, token)` →
  `Ticket.create(title, userName, groupKey?, customFields?, priority?, relatedChannelUrls?
  (≤3), botKey?)`; ticket is unassigned until the customer's first message, then "assigned
  to an available agent by the Desk server". Desk events arrive through Chat SDK handlers.
  https://sendbird.com/docs/desk/sdk/v1/javascript/quickstart/create-first-ticket
- Enabling: at app creation you "select Desk for Product type"; agents work in the dashboard
  (Admin/Agent roles). https://sendbird.com/docs/desk/guide/v1/overview/sendbird-dashboard
- Pricing/plan gate: Desk is not on the Chat pricing page; https://sendbird.com/pricing/desk
  returns 404. Blog says Desk free trial with "No credit card or commitment required"
  (https://sendbird.com/blog/sendbird-desk-free-trial, undated). **Unconfirmed** whether
  Desk is included in the Chat free trial / Developer plan and what it costs after;
  URLs tried: https://sendbird.com/pricing/chat, https://sendbird.com/pricing/desk,
  https://sendbird.com/products/support-agent-desk (404).
- Escalation vs. inviting a support user: Desk gives a ticket object, agent routing
  (auto-assignment, teams), SLA/CSAT, agent UI in the dashboard, and a **separate** ticket
  channel; `relatedChannelUrls` can link the buyer/seller channel. Simply inviting a
  support user into the existing group channel (`inviteWithUserIds`) keeps context in one
  channel but gives no queueing/assignment. For this build the invite path is sufficient
  unless an agent console is needed.
- npm: `sendbird-desk` 1.3.0.

---

## 9. Rate limits

**Client SDK** https://sendbird.com/docs/chat/sdk/v4/javascript/application/understanding-rate-limits/rate-limits
- Messages: "Five messages per second" per **user** (excess shown locally, not sent/saved)
  and per **channel** (excess saved but not displayed).
- Real-time events: send message 5/s; mark as read 3/s; typing indicator 0.1/s; other
  events (file, edit, delivery) 3/s.
- SDK method calls (per minute / per hour): list/retrieve 20/120; create 10/120; update
  10/120; delete 10/120; profile image upload 2/40; file upload 4/60; metacounter update
  2/60.
- Errors: `RATE_LIMIT_EXCEEDED (500910)`, `TOO_MANY_MESSAGES (900200)`.

**Platform API** https://sendbird.com/docs/chat/platform-api/v3/application/understanding-rate-limits/rate-limits
- By plan/MAU tier: GET 10/s → 600/s; POST/PUT/DELETE 5/s → 200/s.
- Stricter endpoints at 5 requests/s: message migration, user update, group channel create,
  invite, **message send**, mark as read.
- Headers `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`,
  `X-RateLimit-RetryAfter`; 429 on exceed.

---

## 10. Webhooks

- Overview + events list: https://sendbird.com/docs/chat/platform-api/v3/webhook/webhook-overview
  Event pages: https://sendbird.com/docs/chat/platform-api/v3/webhook/events/group-channel
  (`group_channel:create|changed|remove|invite|decline_invite|join|leave|message_send|
  message_read|message_update|message_delete|freeze_unfreeze|reaction_add|reaction_delete`),
  plus open_channel:*, user:*, operators:*, report (`message:report`, `user:report`,
  `open_channel:report`, `group_channel:report`), `profanity_filter:*`,
  `image_moderation:block`, alert, announcement.
- Delivery: POST JSON, headers `user-agent: SendBird`, `content-type: application/json`,
  `x-sendbird-signature`. Server waits 5 s, retries up to 3 times. Handle async.
- **Signature**: header `x-sendbird-signature` = hex `HMAC-SHA256(key = master API token,
  msg = raw request body bytes)`. "Always use the master API token to generate and validate
  the signature because secondary API tokens won't work." Compare against the raw body
  string (not re-serialized JSON) — non-ASCII will break re-stringified bodies.
  Sample (docs, Python): `hmac.new(key=api_token, msg=body.encode('utf8'),
  digestmod=hashlib.sha256).hexdigest()`.
- Member info in payload only if "Include member information" / `include_members` is on.

---

## 11. Terms

Document: "SENDBIRD LICENSE AGREEMENT (V4)", "LAST UPDATED: 07/27/2026", at
https://sendbird.com/terms. Section 5.1(iii):

> "disclose or publish, without SendBird's express prior written consent, performance or
> capacity statistics or the results of any benchmark test performed on the SendBird
> Services"

Also relevant 5.1(iv): not to "use the SendBird Services to develop a competitive product
offering promote or support any product or service that is competitive with the SendBird
Services"; 5.1(vii): not to "unreasonably burden the infrastructure"; 5.1(x): not to
"utilize SendBird's sandbox environment for commercial use".

Implication: load/latency numbers gathered on Sendbird must not be published without
written consent.

---

## 12. Regions

Valid `region_key` values (Organization API, application object):
`tokyo-1` Tokyo, Japan; `seoul-1` Seoul; `singapore-1` Singapore; `mumbai-1` Mumbai;
`sydney-1` Sydney; `oregon-1` Oregon, USA; `north-virginia-1` and `north-virginia-2`
Northern Virginia, USA; `canada-central-1` Central Canada; `frankfurt-1` Frankfurt, Germany.
https://sendbird.com/docs/chat/platform-api/v3/organization/organization-overview
Pricing page: "Choose from 9 global regions" (same list). Region is chosen at app creation
(dashboard "Region" dropdown) or `region_key` in `POST /applications` (organization API).
https://sendbird.com/docs/chat/platform-api/v3/organization/managing-application/create-an-application

API host is **not** region-specific in the URL: always
`https://api-{application_id}.sendbird.com/v3`; the App ID routes to its region.
https://sendbird.com/docs/chat/platform-api/v3/prepare-to-use-api

---

## 13. Pricing page

https://sendbird.com/pricing/chat (also https://sendbird.com/pricing). Prices intentionally
not recorded.

---

## 14. Migration / data export

- **Data export** (Platform API + dashboard Settings > Application > General): exports
  messages (text, file, admin), channels, users, failed webhooks; JSON or CSV; messages
  window 7 days (186 days when filtering by sender); channels/users 7-day window; failed
  webhooks 1-day window; ZIP download link expires 7 days after status `done`.
  https://sendbird.com/docs/chat/platform-api/v3/data-export/data-export-overview
- Plan gate: Pro card lists "Data export"; free trial ✓; FAQ says Enterprise can "purchase
  certain additional features, such as Data Export" — contradictory, both quoted (§1).
- Message **migration in** (import with original timestamps): Platform API migration
  endpoints, rate limit 5 req/s. https://sendbird.com/docs/chat/platform-api/v3/message/migration/migration-overview
- Message retrieval API (list messages) is available on all plans for incremental export.

---

## Dead / moved URLs encountered (for reference)

- /docs/chat/sdk/v4/javascript/authentication/... → now /application/authenticating-a-user/authentication
- /docs/chat/sdk/v4/javascript/channel/creating-a-channel/create-a-group-channel → create-a-channel
- /docs/chat/sdk/v4/javascript/message/receiving-a-message/... → event-handler/managing-channel-event-handlers/...
- /docs/chat/sdk/v4/javascript/message/updating-a-message/... → message/managing-a-message/update-a-message
- /docs/chat/platform-api/v3/moderation/profanity-filter/profanity-filter-overview → moderation/moderating-messages/profanity-filter
- /docs/chat/platform-api/v3/message/translating-a-message/... → message/translations/...
- /docs/chat/sdk/v4/javascript/push-notifications/overview → overview-push-notifications
- /docs/desk/platform-api/v1/overview → 404; use https://sendbird.com/docs/desk
- desk.sendbird.com/terms → DNS fails; use https://sendbird.com/terms
