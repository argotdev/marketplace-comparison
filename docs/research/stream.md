# Stream (getstream.io) — developer docs research

Researched 2026-10-06 for a buyer/seller marketplace chat build (web only, TypeScript, React + Vite client, Node server).
Every item lists the doc URL relied on. Items I could not confirm from a vendor page are marked **unconfirmed** with the URL tried.

---

## 0. npm versions (checked 2026-10-06 with `npm view`)

| Package | Latest | Notes |
|---|---|---|
| `stream-chat` | 9.54.0 | JS core; also the Node server SDK (same package) |
| `stream-chat-react` | 14.12.2 (published 2026-10-05); `15.0.0-rc.1` exists (2026-09-29) | UI kit |
| `@stream-io/node-sdk` | 0.8.11 | Server SDK for Feeds v3 / Video / Moderation (NOT needed for Chat) |
| `@stream-io/feeds-client` | 2.9.0 | Feeds v3 JS client |
| `@stream-io/feeds-react-sdk` | 1.0.23 | Feeds v3 React hooks/components |

`stream-chat-react` peerDependencies: `react ^19 || ^18 || ^17`, `react-dom ^19 || ^18 || ^17`, `stream-chat ^9.54.0`, `emoji-mart ^5.4.0`, `@emoji-mart/data ^1.1.0`, `modern-normalize ^3.0.1`, `@breezystack/lamejs ^1.2.7`.
`@stream-io/feeds-react-sdk` and `@stream-io/feeds-client` peerDependencies: `react ^17 || ^18 || ^19`.

---

## 1. Account & plan

Sources: https://getstream.io/chat/pricing/ , https://getstream.io/pricing/ , https://getstream.io/maker-account/ , https://getstream.io/moderation/pricing/ , https://getstream.io/activity-feeds/pricing/

- **Chat plan names:** Build (free), Start, Elevate, Enterprise.
- **Build (free) limits (Chat):** 1,000 MAU, 100 concurrent connections, "Up to 5M stored messages", Community Support. "No Credit Card Required." The page has no trial-length / expiry wording and no "not for production" wording (checked; none present).
- **Maker Account** (separate free program, apply from dashboard): eligibility "Five or less team members", "Less than $100k in funding", "Less than $10k/mo revenue". Chat = modified Start plan with "limit of 2,000 monthly active users and 100 concurrent connections"; Feeds = Start plan; Video = Build plan; Moderation = pay-as-you-go with "$100 Monthly Credit"; "Hard limits - no surprise bills".
- **Feeds free tier:** Build — 5,000 monthly activities, 125,000 monthly API calls, no credit card.
- **Plan gating (Chat pricing page):**
  - Webhooks Integration: "Included" on all tiers incl. Build.
  - Advanced Search: Elevate+.
  - Auto Message Translation: Elevate and Enterprise (usage-metered add-on).
  - Multi-Tenancy/Teams, HIPAA: Elevate+.
  - AI Moderation (Commercial Spam, Platform Circumvention, Semantic Filters, AI Image Moderation): listed as Enterprise add-on on the *Chat* pricing page.
  - Campaigns: Build "Unavailable"; Start/Elevate "30000 messages included"; Enterprise custom.
  - SAML/SSO, 99.999% SLA, dedicated servers, 24/7 support: Enterprise.
- **Conflict to note:** the *Moderation* product pricing page (https://getstream.io/moderation/pricing/) lists a Build (free) moderation tier that includes AI Text/Image/Video, "40 AI harm engines & semantic filtering", Blocklist/Regex, Rule Builder, "Dashboard for 3 Moderators"; LLM engine, NLP engine, OCR, facial recognition are Enterprise. So semantic filters/AI moderation appear free on the Moderation product's Build plan but Enterprise on the Chat pricing grid. Treat as **needs verification in dashboard**.
- Sign up: https://getstream.io/try-for-free (email/password, Google or GitHub per https://getstream.io/blog/stream-getting-started-guide/).

## 2. Dashboard setup (before first message)

Sources: https://getstream.io/blog/stream-getting-started-guide/ , https://getstream.io/chat/docs/javascript/multi_region/ , https://getstream.io/docs/platform/push-providers/?language=javascript , https://getstream.io/docs/platform/webhooks/ (reached via https://getstream.io/chat/docs/javascript/webhooks_overview/), https://getstream.io/moderation/docs/dashboard/configuring-policy/ , https://getstream.io/chat/docs/node/channel_features/

1. Sign up; create app: name it, pick primary product, **choose server region — locked once set** ("the region is locked in once set, but you can switch between development and production mode at any time"). Create separate dev and prod apps.
2. **Regions:** multi_region doc says only "At the app level you can control the primary region. This is where your data is stored. Connections always happen at the edge." Named region list (US East, EU West, Singapore, Sydney, Mumbai; Tokyo also mentioned for Feeds) comes from the support article "Where is Stream hosted?" https://support.getstream.io/hc/en-us/articles/360041490794-Where-is-Stream-hosted — direct fetch returned 403, list seen only via search snippet → **partially unconfirmed**. Base URL is `https://chat.stream-io-api.com` for all regions (edge routes).
3. App overview shows "App ID, API key, and secret ready to copy".
4. Users/tokens: generate server-side (`createToken`); dashboard offers dev tokens for testing; "Disable Auth Checks" dev mode allows `client.devToken(userId)` (https://getstream.io/chat/docs/javascript/tokens_and_authentication/).
5. Webhooks: Dashboard → app → Webhooks (exact path not quoted in docs) or API `updateAppSettings({ event_hooks: [...] })`. Signature header `X-Signature` (HMAC-SHA256), plus `X-Api-Key`, `X-Webhook-Id`. See §10.
6. Moderation: Dashboard → Moderation → Policies (key `chat:messaging`, `chat:<type>`, `chat:<type>:<channel_id>`, `chat`); blocklists under 'Blocklist & Regex Filters'. See §5.
7. Auto-translation: `client.updateAppSettings({ auto_translation_enabled: true })` (app level) or `channel.update({ auto_translation_enabled: true })` (per channel). Also `auto_translation_language`. See §6.
8. Push: Dashboard → Push Notifications → "New Configuration" → Firebase → upload service-account JSON. **Web push is not supported** ("The Stream API doesn't support web push notifications." https://getstream.io/chat/docs/react/push_introduction/). See §7.
9. Custom channel type: server-side only ("A client SDK cannot change a type's configuration"). `client.createChannelType({ name: "order", typing_events: true, read_events: true, uploads: true, max_message_length: 5000, automod: "simple" })`; permissions via `grants`. See §3.
10. **.env keys:** `STREAM_API_KEY`, `STREAM_API_SECRET` (server only). App ID is shown in dashboard but not required by `stream-chat` (StreamChat.getInstance takes key[, secret]). For `@stream-io/node-sdk` (Feeds) also key+secret only. Client-side: `VITE_STREAM_API_KEY`.

## 3. SDKs and method doc URLs

- **Node server = `stream-chat`** ("yarn add stream-chat"; `StreamChat.getInstance("{{ api_key }}", "{{ api_secret }}")`) — https://getstream.io/chat/docs/node/
- **Feeds v3 server = `@stream-io/node-sdk`** (`new StreamClient(key, secret)`; `client.feeds.addActivity(...)`) — https://getstream.io/activity-feeds/docs/node/
- Feeds v3 client/React: `@stream-io/feeds-client` (`new FeedsClient(key)`, `connectUser`), `@stream-io/feeds-react-sdk` (`StreamFeeds`, `StreamFeed`, `useFeedActivities`, `useStateStore`) — https://getstream.io/activity-feeds/docs/react/ , https://getstream.io/activity-feeds/docs/react/contexts-and-hooks/

| Topic | URL | Key API |
|---|---|---|
| Init / connectUser | https://getstream.io/chat/docs/javascript/init_and_users/ | `StreamChat.getInstance(key)`, `connectUser({id,name,image,language,...}, tokenOrProvider)`, `disconnectUser()`; user IDs `a-z 0-9 @ _ -`; `enableWSFallBack` |
| Tokens (server) | https://getstream.io/chat/docs/javascript/tokens_and_authentication/ | `serverClient.createToken(userId, exp)`; tokens valid indefinitely by default; expiry requires token provider; `client.devToken()` |
| Create channel w/ custom type/id/data | https://getstream.io/chat/docs/javascript/creating_channels/ | `client.channel("order", "order-123", { name, members, customField })`; `await channel.create()`; custom fields top-level, 5KB cap; id ≤64 chars; built-ins: messaging, agent, livestream, team, gaming, commerce |
| Send message w/ custom fields & attachments | https://getstream.io/chat/docs/javascript/send_message/ | `channel.sendMessage({ text, attachments:[{type:"image", asset_url, myCustomField:123}], custom })`; custom data ≤5KB; ≤30 attachments; custom attachment `type` allowed if you render it |
| Update message (partial) | same page | `client.updateMessage({id, text})`; `client.partialUpdateMessage(id, { set:{...}, unset:[...] })` |
| Channel update / partial | https://getstream.io/chat/docs/node/channel_update/ | `channel.update({...})` (replaces), `channel.updatePartial({ set, unset })` |
| Events (message.new etc.) | https://getstream.io/chat/docs/javascript/event_object/ | `channel.on("message.new", h)`, `client.on(...)`, `.unsubscribe()` |
| markRead / read receipts | https://getstream.io/chat/docs/javascript/unread/ | `channel.markRead()`, `channel.state.read`, `channel.countUnread()`, `user.me.total_unread_count` |
| Typing | https://getstream.io/chat/docs/javascript/typing_indicators/ | `channel.keystroke()`, `channel.stopTyping()`, `typing.start`/`typing.stop`, `channel.state.typing` |
| File/image upload | https://getstream.io/chat/docs/javascript/file_uploads/ | `channel.sendImage(file,...)`, `channel.sendFile(...)`; 100MB default; signed member-only CDN URLs (`*.stream-io-cdn.com`, 14-day expiry); allowed/blocked extensions & mime types in app settings |
| addMembers | https://getstream.io/chat/docs/javascript/channel_members/ | `channel.addMembers(["a","b"])`, `removeMembers`, `{hide_history:true}`, member custom data `[{user_id, key1}]`, max 100/op |
| Query channels | https://getstream.io/chat/docs/javascript/query_channels/ , https://getstream.io/chat/docs/node/query_channels/ | `client.queryChannels(filter, sort, {limit})`; max 30/limit, offset ≤1000; recommended `{type, members:{$in:[uid]}}` |
| Message search | https://getstream.io/chat/docs/javascript/search/ | `client.search(filter, query, {limit})`; message text + custom fields; search indexing enabled per channel type in dashboard; Advanced Search Elevate+ |
| Channel types (server) | https://getstream.io/chat/docs/node/channel_features/ | `createChannelType`, `updateChannelType`, `deleteChannelType`; flags: typing_events, read_events, connect_events, custom_events, reactions, search, replies, quotes, mutes, uploads, url_enrichment, polls, push_notifications, read_receipts, automod (`disabled`/`simple`/`AI`), max_message_length (≤20,000) |
| Permissions v2 | https://getstream.io/chat/docs/node/chat_permission_policies/ | roles user/guest/anonymous/admin/channel_member/channel_moderator; `updateChannelType("order", { grants: { channel_member: ["read-channel","create-message",...] } })` |
| Flag message | https://getstream.io/chat/docs/javascript/moderation/ | `client.flagMessage(id, { reason, custom })` |
| Flag user | https://getstream.io/moderation/docs/node/content-moderation/flag-mute-ban/ | `client.moderation.flag({ entity_type:"stream:user", entity_id, reason, user_id })` (`user_id` required server-side) |
| Ban / block / mute | https://getstream.io/chat/docs/node/moderation/ | `client.banUser`, `channel.banUser`, shadow ban, `client.blockUser`, mutes; `client.moderation.queryReviewQueue({entity_type:"stream:chat:v1:message"}, sort, {next})` |
| Block lists | https://getstream.io/chat/docs/javascript/block_lists/ | `client.createBlockList({ name, words })`; `updateChannelType("messaging", { blocklist:"name", blocklist_behavior:"block" })`; built-in `profanity_en_2020_v1`; ≤15 lists/app, ≤10,000 words |
| Moderation policies v2 | https://getstream.io/moderation/docs/node/ , https://getstream.io/moderation/docs/node/configuration/policies/ | `client.moderation.upsertConfig({ key:"chat:order", ai_text_config, block_list_config, ai_image_config, automod_platform_circumvention_config, velocity_filter_config, ... })`; `check()` → keep/flag/remove |
| Translation | https://getstream.io/chat/docs/javascript/translation/ , https://getstream.io/chat/docs/node/translation/ | see §6 |
| Feeds: create feed group | https://getstream.io/activity-feeds/docs/javascript/feed-groups/ (+ Node search result) | `serverClient.feeds.createFeedGroup({ id, activity_selectors, ranking, activity_processors, custom })`; built-ins user, timeline, foryou, notification, story, stories |
| Feeds: add activity | https://getstream.io/activity-feeds/docs/react/ , .../node/ | client `client.feed("user","john").addActivity({ text, type:"post" })`; server `client.feeds.addActivity({ type, feeds:["user:john"], text, user_id })` |
| Feeds: read in React | https://getstream.io/activity-feeds/docs/react/contexts-and-hooks/ | `<StreamFeeds client>`; `feed.getOrCreate({watch:true})`; `useFeedActivities(feed)` → `{activities,is_loading,has_next_page,loadNextPage}`; `useStateStore(feed.state, selector)` |
| Feeds token (node-sdk) | https://getstream.io/docs/platform/authentication/ | `client.generateUserToken({ user_id, validity_in_seconds })` |

## 4. UI kit custom message rendering (stream-chat-react v14)

- **Attachments:** https://getstream.io/chat/docs/sdk/react/components/message-components/attachment/ — wrap SDK `Attachment` and pass renderer overrides (`Image`, `Media`, `ModalGallery`, `Card`, `File`, `Audio`, `Giphy`, `Geolocation`, `VoiceRecording`, `UnsupportedAttachment`), then register globally: `<WithComponents overrides={{ Attachment: CustomAttachment }}><Channel>...</Channel></WithComponents>`. Unknown/custom attachment `type` falls to `UnsupportedAttachment` unless your `Attachment` override handles it — so for an "order card" attachment, branch on `props.attachments[i].type` in `CustomAttachment` before delegating to `<Attachment {...props} />`.
- **Message UI:** https://getstream.io/chat/docs/sdk/react/components/message-components/message_ui/ — pass `Message` prop to `MessageList`/`VirtualizedMessageList`/`Thread`, or via `WithComponents`; use `useMessageContext()` (`message`, `handleAction`, `handleOpenThread`); compose `MessageText`, `MessageReactions`, `Attachment`, `Poll`.
- **Custom actions:** `MessageActions` (experimental) https://getstream.io/chat/docs/sdk/react/experimental/message-actions/ ; legacy `customMessageActions` prop on `MessageList` — **unconfirmed on v14 page** (not quoted on the pages fetched).
- Older doc URL https://getstream.io/chat/docs/sdk/react/guides/customization/custom-attachment/ → 404.

## 5. Moderation

Sources: https://getstream.io/chat/docs/react/moderation/ , https://getstream.io/moderation/docs/dashboard/configuring-policy/ , https://getstream.io/moderation/docs/engines/semantic-filters/ , https://getstream.io/moderation/docs/engines/rule-builder/ , https://getstream.io/moderation/docs/guides/platform-circumvention-prevention/ , https://getstream.io/moderation/docs/dashboard/reviewing-content/ , https://getstream.io/moderation/docs/node/content-moderation/review-queue/ , https://getstream.io/moderation/pricing/

- **Block list types:** Word, Regex, Email, Domain (dashboard "Blocklist & Regex Filters"). Yes — a **regex type exists**, usable for phone-number patterns. Built-in: `profanity_en_2020_v1` (chat docs) / `profanity_en` (moderation config example). Word matching case-insensitive with optional leet-speak/plural detection.
- **Actions (dashboard wording):** Flag, Block, ShadowBlock, Mask and Flag, Bounce and Flag, Bounce and Block. **API wording:** `flag`, `remove`, `shadow_block`, `bounce`; rule builder adds `ban`, `webhook_only`, `custom`. Legacy channel-type `blocklist_behavior` supports only `block` | `flag`.
- **Phone/email detection built-ins:** `automod_platform_circumvention_config` ("phone numbers, emails, and external links"); AI Text "Platform Bypass" filter and "PII" filter; or Regex blocklist. No built-in blocklist named for phone numbers.
- **AI text (NLP):** severity low/medium/high/critical across harms (insults, bullying, threats, self-harm, scams, platform circumvention…); "40+ harms in 50+ languages". **AI text (LLM)** Enterprise. **AI image:** Explicit, Non-Explicit Nudity, Swimwear/Underwear, violence, weapons.
- **Semantic filters:** seed phrases → meaning-similarity matching; `semantic_filter_min_threshold` 0.0–1.0; dashboard actions Flag / Block / Shadow Block.
- **Policy keys:** `chat:messaging:<channel_id>` → `chat:messaging` → `chat` fallback; `feeds:default`.
- **Review queue:** dashboard has Users / Text Content / Media Content queues; API `queryReviewQueue`, `submitAction`.
- **Plan:** see §1 conflict. Moderation pricing page: Build includes AI text/image/video, semantic filtering, blocklist/regex, rule builder, 3-moderator dashboard. Chat pricing page: AI moderation = Enterprise add-on.

## 6. Translation

Sources: https://getstream.io/chat/docs/javascript/translation/ , https://getstream.io/chat/docs/node/translation/ , https://getstream.io/chat/pricing/

- Enable: `client.updateAppSettings({ auto_translation_enabled: true })` or per channel `channel.update({ auto_translation_enabled: true })`; optional `auto_translation_language`.
- User language: `connectUser({ id, language: "en" }, token)`.
- Result: `message.i18n = { fr_text, it_text, ..., language: "en" }`. On-demand: `client.translateMessage(messageId, "fr")`.
- Limitation: "best suited for groups with a maximum of two main languages"; 3+ languages → defaults to most common.
- 60+ languages listed. **Engine: unconfirmed** — not named on either doc page.
- Plan: "Auto Message Translation" Elevate and Enterprise (metered) per Chat pricing page.

## 7. Push & email

Sources: https://getstream.io/docs/platform/push-providers/?language=javascript , https://getstream.io/chat/docs/react/push_introduction/ , https://getstream.io/chat/docs/javascript/push_template/ , https://getstream.io/chat/docs/javascript/unread-reminders/

- Providers: Firebase, APN, Huawei, Xiaomi. Dashboard: Push Notifications → New Configuration → Firebase → upload service-account JSON (Firebase console → project settings → service accounts → generate new private key). API: `client.upsertPushProvider({ name, type:"firebase", firebase_credentials })`; device: `client.addDevice(token, "firebase", userId, providerName)`.
- **Web push: NOT supported.** Quote: "The Stream API doesn't support web push notifications." → for a web-only build, rely on in-app + your own email.
- Templates: Handlebars; Upsert Push Template with `enable_push`, `event_type` (message.new …), `push_provider_type`, `template`; helpers `truncate`, `implodeMembers`, `unread_count`.
- **Email: Stream does not send email.** Unread reminders: "Use them to trigger emails, push notifications, or SMS" via webhook/SQS event `user.unread_message_reminder`; enable per channel type (`updateChannelType(type, { reminders: true })`), interval 60–86,400s, default 5 min, channels ≤10 members.

## 8. Support escalation

No first-party help-desk/ticketing product. Search for "Stream for Support" returned only tutorials on *building* support chat with Stream Chat (https://getstream.io/blog/customer-support-live-chat-with-vanillajs-and-stream-chat/ , https://getstream.io/blog/support-chat-admin-dashboard/ , https://getstream.io/contact/). Confirmed absent from product nav at https://getstream.io/ and https://getstream.io/docs/ .

## 9. Rate limits

Sources: https://getstream.io/chat/docs/javascript/rate_limits/ , https://getstream.io/docs/platform/rate-limits/

- Counted per app, per API endpoint, per platform (web/iOS/Android/server), 1-minute window. Headers `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`. Inspect via `getRateLimits()`.
- Self-serve defaults (per minute, per platform): 10,000 — Connect, Get/Create Channel, Query Channels, Mark Read, Send Event; 1,000 — Send Message, Update Message, Upload File/Image, Query Users, Get Message, Reactions; 300 — Ban, Flag, Mute, Search, Query Members, Update Channel, Update Users; 60 — admin ops (Update App, Delete Channel, Export…).
- **Per user:** "60 requests per minute per endpoint and platform"; server-side exempt.
- No per-channel messages/second limit documented (**unconfirmed**; both pages checked). "Rate limits can be adjusted based on your use case and plan."

## 10. Webhooks

Sources: https://getstream.io/chat/docs/javascript/webhooks_overview/ (platform page), https://getstream.io/chat/docs/javascript/webhook_events/

- Headers: `X-Signature` (HMAC-SHA256 of uncompressed body, keyed by API secret), `X-Api-Key`, `X-Webhook-Id`. Verify: `client.verifyAndParseWebhook(req.rawBody, req.headers["x-signature"])` (throws `InvalidWebhookError`).
- Configure: `updateAppSettings({ event_hooks: [{ enabled:true, hook_type:"webhook", webhook_url, event_types:["message.new","message.updated"] }] })` — **replaces the whole array**.
- Retries: max 5 attempts, 6s timeout/attempt, 15s total budget, retry on 408/429/5xx.
- Events: message.new/read/updated/deleted/flagged, reaction.new/updated/deleted, member.added/updated/removed, channel.created/updated/hidden/deleted/muted, user.banned/unbanned/deactivated/reactivated/deleted/flagged/updated, user.messages.deleted, user.unread_message_reminder, export.* , reminder.*, notification.reminder_due, user_group.*, channel_batch_update.*.

## 11. Terms

- Terms & Conditions: https://getstream.io/legal/ (the legal center page IS the T&C). Other docs: /legal/privacy/, /legal/dpa/, /legal/cookie-statement/, /legal/subprocessors/, /security/.
- **No benchmarking / performance-testing / comparative-publication clause** found (searched for benchmark, performance test, comparative, publish results, disclose results). A separate AUP page at /legal/acceptable-use/ does not exist (404); /legal/terms-of-service/ → 404.
- Relevant restriction, §1.4: "Customer shall not (and shall not allow any third party to): (a) use the Service except as envisioned by the Documentation and for the Service's normal operation … (i) use the Service or the Stream Technology to develop or market any product, software or service that is functionally similar to or derivative of the Service … (ii) alter, modify, debug, reverse engineer, decompile, disassemble …".

## 12. Migration from Sendbird

Sources: https://getstream.io/chat/docs/node/migrating-from-sendbird/ , https://getstream.io/blog/sendbird-migration/ , https://getstream.io/chat/docs/javascript/import/ (CLI import), https://getstream.io/agent-skills/docs/migrate-from-sendbird/ , https://getstream.io/chat/docs/react/migration_to_stream_from_other_solution/

- Two halves: code migration (swap SDK) + optional data migration (users, channels, messages, reactions).
- Concept mapping: `open_channel` → `livestream`; `group_channel` → `messaging`; `getChannel + enter()` → `channel().watch()`; UserMessage/FileMessage → Message with attachments; ADMM → system messages; metadata → `custom_data` (≤5KB). Users `id,name,image,custom`; channels `id,type,created_by,name,members,custom`; messages `id,text,user,created_at (RFC3339),attachments,custom`.
- Import: JSON Lines `{"type":"user","data":{...}}`, strict order users→devices→future_channel_ban→channels→members→messages→reactions→polls→poll_votes; upload via `getstream import chat my-data.jsonl --watch` (CLI, ≤300MB) or dashboard; upsert semantics; attachment URLs must be public; cannot delete.
- Real-time sync: point Sendbird webhook at `https://chat.stream-io-api.com/sendbird/webhook?api_key=<YOUR_STREAM_API_KEY>`; queued, ordered, replayable. **"Real-time sync from Sendbird is available on Enterprise plans."**
- 4-week plan: export → sync on → SDK behind flags → delta export, QA, go-live.

## 13. Regions / edge / latency claim (URLs only)

- "8ms median API response" — https://getstream.io/chat/ (also https://getstream.io/chat/pricing/ header stats). Edge announcement "<9ms API latency globally", "up to 5x" — https://getstream.io/blog/chat-edge-infrastructure/ . Architecture ("<50ms API", "<40ms websocket", 5M concurrent per channel) — https://getstream.io/chat/docs/javascript/architecture_and_benchmark/ . Region concept — https://getstream.io/chat/docs/javascript/multi_region/ ; region list — https://support.getstream.io/hc/en-us/articles/360041490794-Where-is-Stream-hosted (403 on fetch).

## 14. Pricing page URL

https://getstream.io/chat/pricing/ (also https://getstream.io/pricing/, https://getstream.io/moderation/pricing/, https://getstream.io/activity-feeds/pricing/)

---

## Unconfirmed / dead URLs tried
- `https://getstream.io/chat/docs/javascript/push_firebase/` → 404 (use platform push-providers page).
- `https://getstream.io/legal/terms-of-service/`, `https://getstream.io/legal/acceptable-use/` → 404.
- `https://getstream.io/chat/docs/node/application_region/` → 404.
- `https://getstream.io/chat/docs/sdk/react/guides/customization/custom-attachment/` → 404.
- `https://getstream.io/moderation/docs/` index gives no AI-harm category list; categories came from search snippets of `.../engines/image-moderation/` and `.../engines/ai-llm-text/`.
- Translation engine name: not on any doc page fetched.
- `customMessageActions` prop on v14: not verified.
- Per-channel message throughput limit: none documented.
