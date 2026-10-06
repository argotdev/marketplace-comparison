# PubNub research (as of 2026-10-06)

Scope: buyer/seller marketplace chat, web only, TypeScript, React + Vite client, Node server.
Method: vendor docs fetched directly from pubnub.com on 2026-10-06, plus `npm view`. Anything not confirmed from a page is marked **unconfirmed** with the URL tried.

## npm facts (run 2026-10-06)

| Package | Latest | Last publish | Notes |
|---|---|---|---|
| `pubnub` (core JS SDK) | 13.0.3 | 2026-09-22 | Active. 13.0.0 shipped 2026-09-08. |
| `@pubnub/chat` (Chat SDK) | 1.0.4 | 2026-09-15 | `npm view ... peerDependencies` printed nothing (no peer deps declared). 1.0.x line since 2026-05. |
| `@pubnub/react-chat-components` | 0.34.0 | 2024-05-16 | Dead. GitHub repo archived 2026-06-17 (see UI kit). |

## 1. Account and plan

- Signup: Admin Portal at https://admin.pubnub.com/. Free plan: "Forever free • No credit card required". Source: https://www.pubnub.com/pricing/
- Free tier limits (pricing page): "200 MAU or 1M transactions", 1 GB storage with 7-day retention, 5 Functions. Account-setup doc repeats "up to 200 monthly active users (MAUs) or 1 million transactions". Source: https://www.pubnub.com/docs/general/setup/account-setup
- Tiers: Free, Starter, Pro (Enterprise is "contact sales" inside Pro). Source: https://www.pubnub.com/pricing/
- Feature gating as shown on the pricing page (2026-10-06):
  - Included on Free: Pub/Sub, Message Persistence (1 or 7 days), App Context, Presence, Access Manager, Mobile Push, File Sharing, Message Reactions, Functions (5 functions, "7-day runtime" on Free).
  - Events & Actions: pricing page shows "Trial" on Free. The E&A overview says Free = "10K events/month, 1 listener, 1 action per listener" and "The Free tier's single listener does not retry failed deliveries." Source: https://www.pubnub.com/docs/serverless/events-and-actions/overview
  - BizOps Workspace, Insights: "Trial" on Free, included on Starter and Pro (pricing page).
  - Illuminate: "two-week free trial", then "contact sales to continue". Source: https://www.pubnub.com/docs/illuminate/basics
  - Channel Monitor (moderation dashboard): "available on paid plans". Source: https://www.pubnub.com/docs/bizops-workspace/channel-monitor
  - Auto Moderation (beta): paid account + enablement by support/sales + beta terms. Source: https://www.pubnub.com/docs/bizops-workspace/auto-moderation
  - Message Persistence retention by plan: Free "1 or 7 days", Starter "30 days, 3 months, or 6 months", Pro "1 year or Unlimited". Source: https://www.pubnub.com/docs/general/setup/limits
- Note: App Context docs now say "DataSync is the successor to App Context, currently available only to new accounts or those not actively using App Context." A brand-new account may be steered to DataSync; the Chat SDK docs still say "enable App Context". Treat as a setup gotcha to check in the portal. Source: https://www.pubnub.com/docs/general/metadata/basics

## 2. Admin Portal setup before first message

Source for keys and keyset steps: https://www.pubnub.com/docs/general/setup/account-setup

1. Sign up / log in, Apps & Keysets, create an app, create a keyset (choose "Testing" or "Production").
2. Copy Publish Key (`pub-c-...`), Subscribe Key (`sub-c-...`), Secret Key (server only, used for Access Manager grants and admin Chat SDK operations).
3. Enable on the keyset (feature names as listed in the doc): Presence, Message Persistence (pick retention; also "Enable Delete-From-History" for hard deletes, source: https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/delete), App Context (pick Bucket Region, cannot be changed later; turn on "User Metadata Events", "Channel Metadata Events", "Membership Events"; untick "Disallow Get All Channel Metadata" / "Disallow Get All User Metadata" if you use `getChannels()` / `getUsers()`; sources: https://www.pubnub.com/docs/general/metadata/basics and https://www.pubnub.com/docs/chat/chat-sdk/overview), File Sharing (pick storage region and retention; 5 MB per file), Access Manager, Mobile Push Notifications (upload FCM service-account JSON "Private key file", source: https://www.pubnub.com/docs/general/push/android), Stream Controller (channel groups / wildcard subscribe).
4. Message Reactions: no separate portal toggle found. Chat SDK reactions use the Message Actions API and require Message Persistence. Source: https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/reactions
5. Functions: Admin Portal > Functions, create a module and a "Before Publish" function. Source: https://www.pubnub.com/docs/serverless/functions/overview
6. Events & Actions: Admin Portal > Events & Actions, create a listener (event + JSONPath filter on `channel`, `message`, `meta`, `uuid`) and a Webhook action. Source: https://www.pubnub.com/docs/integrations/event-forwarding/configure
7. Web push: NOT supported. See section 7.

Suggested `.env` keys (names are ours, not PubNub's):

```
PUBNUB_PUBLISH_KEY=pub-c-...
PUBNUB_SUBSCRIBE_KEY=sub-c-...
PUBNUB_SECRET_KEY=sec-c-...        # server only
PUBNUB_SERVER_USER_ID=marketplace-server   # userId is mandatory on every client, 92 chars max
```

`userId` is required by the JS SDK and Chat SDK ("Unique User ID ... up to 92 characters"). Source: https://www.pubnub.com/docs/sdks/javascript/api-reference/configuration and https://www.pubnub.com/docs/chat/chat-sdk/build/configuration

## 3. SDKs and API surface

### Core JS SDK (`pubnub` 13.0.3)
- Docs: https://www.pubnub.com/docs/sdks/javascript/api-reference/publish-and-subscribe
- `publish({ message, channel, meta, storeInHistory, sendByPost, ttl, customMessageType })`. `customMessageType` is 3-50 alphanumeric chars with dashes/underscores.
- `fire(...)`: delivers to Functions only, no replication or history.
- Subscribe: `pubnub.channel('x').subscription()` / `pubnub.subscriptionSet({channels, channelGroups})`, then `.subscribe()`. Listeners: `onMessage`, `onPresence`, `onObjects`, `onMessageAction`, `onFile`, `onSignal`, or `addListener({...})`.
- History: `fetchMessages` (page: https://www.pubnub.com/docs/general/storage). Signals are 64 bytes max and never stored.
- Config `origin` default `ps.pndsn.com`; no region parameter. Source: https://www.pubnub.com/docs/sdks/javascript/api-reference/configuration

### Chat SDK (`@pubnub/chat` 1.0.4)
Chat SDK 1.0 renamed most streaming APIs to `onX()` callbacks and deprecated `connect()`, `streamUpdates()`, `listenForEvents()`, `getTyping()`, `streamReadReceipts()`. Each `onX()` returns an unsubscribe function. All Chat SDK pages below say "Enable App Context" and most say "Enable Message Persistence".

| Capability | API (1.0.x) | Doc URL |
|---|---|---|
| Init | `Chat.init({ publishKey, subscribeKey, userId, authKey?, typingTimeout? (5000ms), storeUserActivityTimestamps?, pushNotifications?, rateLimitFactor?, rateLimitPerChannel? })` | https://www.pubnub.com/docs/chat/chat-sdk/build/configuration |
| Create user | `chat.createUser(id, { name, externalId, profileUrl, email, custom (scalar-only), status, type })` | https://www.pubnub.com/docs/chat/chat-sdk/build/features/users/create |
| 1:1 channel | `chat.createDirectConversation({ user, channelId?, channelData?: {name, description, custom}, membershipData? })` returns `{ channel, hostMembership, inviteeMembership }` | https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/create |
| Group channel | `chat.createGroupConversation({ users (max 100), channelId?, channelData?, membershipData? })` returns `{ channel, hostMembership, inviteesMemberships }` | same |
| Channel custom data update | `channel.update({ name, description, custom, status, type })`, `channel.onUpdated(cb)` | https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/updates |
| Send text | `channel.sendText(text, { meta?, storeInHistory?, sendByPost?, ttl?, customPushData? })`. Custom per-message data goes in `meta`. `files`, `mentionedUsers`, `quotedMessage` moved to MessageDraft. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/send-receive |
| Receive | `channel.onMessageReceived(cb)` (subscription only). `connect()` is "deprecated as of chat-1-0-0". | https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/watch |
| Join (membership) | `channel.join({ status?, type?, custom? })` returns `Membership`. "join() only sets membership. Use onMessageReceived() to subscribe to incoming messages." `channel.leave()`. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/join |
| Edit message | `message.editText(newText)` implemented as a Message Action; `message.onUpdated(cb)`. There is no API to replace arbitrary message content or meta after publish; only text edits via actions. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/updates |
| Delete | `message.delete({ soft?, preserveFiles? })`; hard delete needs "Enable Delete-From-History". | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/delete |
| History | `channel.getHistory({ startTimetoken, endTimetoken, count })`, max `count` is 25, returns `{ messages, isMore }`. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/history |
| Read receipts / unread | `membership.setLastReadMessage(msg)`, `setLastReadMessageTimetoken(tt)`, `membership.getUnreadMessagesCount()`, `chat.markAllMessagesAsRead()`, `chat.fetchUnreadMessagesCounts()` (old `getUnreadMessagesCounts` deprecated). Stored as membership custom `lastReadMessageTimetoken`. Receipts: `channel.onReadReceiptReceived(cb)`, `fetchReadReceipts()`, gated by `emitReadReceiptEvents` in init; disabled for public channels. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/unread and https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/read-receipts |
| Typing | `channel.startTyping()`, `stopTyping()`, `channel.onTypingChanged(cb)` (uses signals; not supported on public channels) | https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/typing-indicator |
| Files | `channel.createMessageDraft()`, set `draft.files = [InputFile...]`, `draft.send()`. 5 MB per file. `message.files` -> `{name, id, url, type}`. No `sendText({files})` in 1.x. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/files |
| Mentions | `draft.addMention(offset, length, "mention", userId)`, `chat.getCurrentUserMentions()`, `user.onMentioned(cb)` | https://www.pubnub.com/docs/chat/chat-sdk/build/features/users/mentions |
| Invite (add agent) | `channel.invite(user)` -> `Membership`; `channel.inviteMultiple(users)` (max 100); invitee listens with `user.onInvited(cb)` giving `{channelId, channelType, invitedByUserId, invitationTimetoken}`. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/invite |
| Threads | `message.createThread(text, options)` -> `{ threadChannel, parentMessage }`, `message.getThread()`, `message.hasThread`. Thread channel id `PUBNUB_INTERNAL_THREAD_{channel_id}_{message_id}`. One level only. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/threads |
| Reactions | `message.toggleReaction(emoji)`, `message.reactions`, `message.hasUserReaction(emoji)` | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/reactions |
| Report message | `message.report(reason)`; published to `PUBNUB_INTERNAL_MODERATION_{channel_id}`; admins use `channel.onMessageReported(cb)` with `MessageReport { reason, text, messageTimetoken, reportedMessageChannelId, reportedUserId, autoModerationId }`. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/messages/moderation |
| Restrictions (mute/ban) | `chat.setRestrictions(userId, channelId, { ban?, mute?, reason? })`, also `user.setRestrictions(channel, ...)` and `channel.setRestrictions(user, ...)`; read with `user.getChannelRestrictions(channel)`, `channel.getUserRestrictions(user)`, `getChannelsRestrictions`, `getUsersRestrictions`; listen with `user.onRestrictionChanged(cb)`. Stored as memberships prefixed `PUBNUB_INTERNAL_MODERATION_`, "secured via Access Manager". Must run with Secret Key server-side; Access Manager required to enforce. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/users/moderation |
| Report user | **unconfirmed**. The users/moderation page covers mute/ban only; no `user.report()` found on https://www.pubnub.com/docs/chat/chat-sdk/build/features/users/moderation or https://www.pubnub.com/docs/chat/chat-sdk/build/features/moderation (concept page). Build user reports as a custom event or as message reports. |
| Access Manager with Chat SDK | Server `Chat.init({... secretKey})` then `chat.sdk.grantToken({ ttl, authorized_uuid, resources, patterns })`; client passes `authKey`. Join needs `join` on channel + `update` on uuids; invite needs `manage` on channel; send needs `write`; read needs `read`; threads need `PUBNUB_INTERNAL_THREAD*` grants. | https://www.pubnub.com/docs/chat/chat-sdk/build/features/users/permissions |

Custom data caveat: `custom` on users, channels, memberships is scalar-only (no nested objects/arrays). Put structured data in `meta` on messages or JSON-encode strings.

## 4. UI kit

- `@pubnub/react-chat-components`: last npm publish 0.34.0 on 2024-05-16. GitHub repo archived 2026-06-17 (read-only). README: "PubNub will stop supporting Chat Components on January 1, 2025, but you are welcome to contribute. Learn how to migrate to the Chat SDK here." Source: https://github.com/pubnub/react-chat-components
- The old docs still describe `MessageList` props `messageRenderer`, `bubbleRenderer`, `filter`. Source: https://www.pubnub.com/docs/chat/components/react/ui-components/message-list
- Conclusion: there is no first-party maintained React UI kit. Build UI on `@pubnub/chat` with your own components. PubNub's maintained samples are demo apps, not a kit.

## 5. Moderation

- Functions "Before Publish": "read and modify `request.message`", reroute, or "call `request.abort()` to block delivery entirely". Source: https://www.pubnub.com/docs/serverless/functions/overview
- Code sample (ugc module, inside a Before Publish function): https://www.pubnub.com/docs/serverless/functions/functions-apis/ugc-module

```javascript
if (res.flagged && res.actions.includes('block')) {
    request.status = 403;
    return request.abort('Flagged');
}
```

  Masking is just `request.message.text = masked; return request.ok();` in the same handler (pattern from the overview; no verbatim masking sample found on the current pages, the older sample page https://www.pubnub.com/docs/chat/sdks/moderation/filtering no longer shows code).
- Auto Moderation (beta, paid, support-enabled): spam, profanity (15 languages), word masking; runs as a Before Publish Function, either PubNub-managed or generated code calling `ugc.moderateMessage`. Blocked and reported messages show in Channel Monitor "Review moderated messages". Source: https://www.pubnub.com/docs/bizops-workspace/auto-moderation
- Dashboard: BizOps Workspace in the Admin Portal = User Management, Channel Management, Channel Monitor (live view of up to five channels, edit/delete messages, mute/ban, keyword highlight, review user flags). Channel Monitor is "available on paid plans". Sources: https://www.pubnub.com/docs/bizops-workspace/channel-monitor, https://www.pubnub.com/docs/general/moderation/overview
- Illuminate is a real-time decision engine (business objects, decisions, dashboards), not a moderation tool. Source: https://www.pubnub.com/docs/illuminate/basics
- Chat SDK reports land on `PUBNUB_INTERNAL_MODERATION_{channel_id}`; restrictions are memberships prefixed `PUBNUB_INTERNAL_MODERATION_` (section 3 URLs).

## 6. Translation

No native translation. Functions call a translation API. Integration catalog entries confirmed:
- Google Translation API block (Vault secret `GOOGLE_TRANSLATION_SERVICES_APIKEY`): https://www.pubnub.com/integrations/google-translation-api/
- Amazon Translate: https://www.pubnub.com/integrations/amazon-translate/
- Microsoft Translator v3: https://www.pubnub.com/integrations/microsoft-translator-v3/
- DeepL: no catalog block found; PubNub docs mention calling DeepL over REST from a Function via `xhr` (catalog: https://www.pubnub.com/integrations/, 71 entries, DeepL not seen). **unconfirmed** as a block.
- Chat-specific Functions translation page: https://www.pubnub.com/docs/chat/functions/translation

## 7. Push and email

- Mobile Push supports APNs and FCM only. The Mobile Push docs, the JS SDK `push.addChannels` doc (`pushGateway: "apns2" | "fcm"`), and the Chat SDK push page contain no mention of browser / web push tokens. Treat web push as **not supported** by PubNub's push gateway. Sources: https://www.pubnub.com/docs/general/push/send, https://www.pubnub.com/docs/sdks/javascript/api-reference/mobile-push, https://www.pubnub.com/docs/chat/chat-sdk/build/features/push-notifications. For a web client, trigger your own browser notifications from the subscribe stream or send web push from your server off an Events & Actions webhook.
- Chat SDK push config: `pushNotifications: { sendPushes, deviceToken, deviceGateway: "gcm" | "apns2", apnsTopic, apnsEnvironment }`, plus `registerPushChannels()` etc. FCM setup in portal uploads a Firebase service-account JSON. Source: https://www.pubnub.com/docs/general/push/android
- Email: SendGrid block (Function triggered by a publish to e.g. `email-sendgrid-channel`, API key in Vault): https://www.pubnub.com/integrations/sendgrid-transactional-emails-with-templates/. Mailgun: no block found (**unconfirmed**, https://www.pubnub.com/integrations/). Any provider works via `xhr.fetch` inside a Function, or via an Events & Actions webhook to your server.

## 8. Support escalation (add agent to conversation)

`channel.invite(agentUser)` or `channel.inviteMultiple([...])` on the direct/group channel; agent receives `user.onInvited()`; agent calls `channel.join()` then `channel.onMessageReceived()`. Inviting needs `manage` on the channel under Access Manager. Direct conversations are 1:1 by design, so create the buyer/seller room with `createGroupConversation` if escalation to a third party is expected (invite docs talk about "private or group conversations"). Sources: https://www.pubnub.com/docs/chat/chat-sdk/build/features/channels/invite, https://www.pubnub.com/docs/chat/chat-sdk/build/features/users/permissions

## 9. Rate limits and sizes

Source: https://www.pubnub.com/docs/general/setup/limits (and publish doc for the first bullet)
- "The maximum message size is 32 KiB. This includes the escaped character count and the channel name." Recommended under 1,800 bytes.
- "You can publish as fast as bandwidth allows" but subscriber in-memory queue holds 100 messages; "keep publish rates at 10 to 15 messages per second per channel."
- Channel multiplexing: 10 to 50 channels recommended, 100 practical ceiling per subscribe.
- Channel names and User IDs: 92 UTF-8 chars max. Signals: 64 bytes. Files: 5 MB. Metadata record: 32 KiB. Memberships: 50,000 per user, 5,000 members per channel. Functions: 10 s CPU per execution, 3 hops recursion. Presence timeout default 300 s.
- Chat SDK `getHistory` max 25 per call.
- Access Manager token TTL: 1 to 43,200 minutes. Source: https://www.pubnub.com/docs/general/security/access-control

## 10. Webhooks (Events & Actions)

- Events: "Message sent", "Message action created/deleted", "File sent", presence (join/leave/timeout/occupancy), App Context user/channel/membership created/updated/deleted, push "Device removed"/"Push error". Source: https://www.pubnub.com/docs/integrations/event-forwarding/event-sources
- Actions: Webhook, Amazon SQS, Kinesis, S3, Apache Kafka, IFTTT Webhook, AMQP. Webhook succeeds on 2XX, follows up to three 301 redirects, supports batching, custom headers, and retries (attempts 1-4, interval 10-900 s; no retries on Free). Sources: https://www.pubnub.com/docs/integrations/event-forwarding/available-actions, https://www.pubnub.com/docs/integrations/event-forwarding/create-webhook-action
- Filters: JSONPath over `channel`, `message`, `meta`, `uuid`. Source: https://www.pubnub.com/docs/integrations/event-forwarding/configure
- Signing: no HMAC signature header documented. Auth is "add custom headers and select secret keys from your keyset" (i.e. a shared-secret header you verify yourself). Payload doc: https://www.pubnub.com/docs/integrations/event-forwarding/payloads (fields: `timestamp`, `message`, `meta`, `senderId`, `channel`, `timetoken`; envelope V1/V2/V2.1 optional). **unconfirmed** that any signature exists.

## 11. Terms

PubNub Terms and Conditions, https://www.pubnub.com/trust/legal/terms-and-conditions/ (page metadata last updated 2026-08-19), Section 3.1 License Restrictions:
- 3.1(g): customer shall not "disclose or publish, without PubNub's express prior written consent, performance or capacity statistics or the results of any benchmark test performed on the PubNub Services or PubNub Software".
- 3.1(h): shall not "load test the PubNub Services without the prior written approval of and coordination with PubNub".

Implication: do not publish latency/throughput comparisons involving PubNub without written consent; do not run load tests on the free keyset.

## 12. Regions

- Edge: single global origin `ps.pndsn.com`; the SDK `origin` parameter is only for a custom CNAME requested via support. No region parameter in the SDK. Source: https://www.pubnub.com/docs/sdks/javascript/api-reference/configuration
- Data residency: "Customers can choose US-only, EU-only, or APAC-only data residency options." Configured per keyset, not in code. Source: https://www.pubnub.com/trust/faq/. The doc page https://www.pubnub.com/docs/general/setup/data-residency returned 404; exact portal steps for an EU keyset are **unconfirmed** (FAQ implies support/sales request).
- App Context "Bucket Region" and File Sharing storage region are chosen per keyset when enabling each feature and cannot be changed later. Source: https://www.pubnub.com/docs/general/metadata/basics

## 13. Pricing

https://www.pubnub.com/pricing/ (prices intentionally not recorded).

## 14. Courier location demo links

- Delivery tracking demo: https://www.pubnub.com/demos/delivery-tracking/
- Transportation and logistics demo: https://www.pubnub.com/demos/transportation-&-logistics/
- Tutorial publishing `{lat, lng}` every 5 s to a channel and moving a Google Maps marker: https://www.pubnub.com/blog/google-maps-geolocation-tracking-in-realtime-with-javascript/
- Mapbox variant: https://www.pubnub.com/blog/displaying-live-location-data-javascript-mapbox-api/
- Vehicle tracking (EON Maps): https://www.pubnub.com/blog/tracking-streaming-realtime-vehicle-location-map/

## Gotchas for this build

1. Chat SDK 1.0 broke the pre-1.0 API; most blog posts and AI-generated snippets use `connect()`, `streamUpdates()`, `listenForEvents()`, `sendText({files})`. Use `onX()` callbacks and `MessageDraft`.
2. Scalar-only `custom` on channels/memberships/users.
3. `getHistory` is capped at 25 per call.
4. No web push; no built-in email; no native translation.
5. Moderation dashboard (Channel Monitor) and Auto Moderation are paid; on Free you get Functions (5) and Chat SDK report/mute/ban primitives only.
6. Mute/ban require the Secret Key on the server and Access Manager on the keyset to actually enforce.
7. Free retention is 1 or 7 days.
8. New accounts may be offered "DataSync" instead of App Context; Chat SDK docs still reference App Context.
