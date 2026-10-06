# Rocket.Chat (self-hosted, Docker Compose) — research notes

Researched 2026-10-06 against docs.rocket.chat, developer.rocket.chat, github.com/RocketChat and npm.
Target: buyer/seller marketplace chat, web only, TypeScript, React + Vite client, Node server.
Anything not confirmed from a doc page is marked **unconfirmed** with the URL tried.

---

## 0. Headline facts

| Item | Value | Source |
|---|---|---|
| Latest stable | **8.9.0 LTS** (2026-10-05, supported until 2027-10-31). Prior stable 8.8.1 (2026-09-09). | https://github.com/RocketChat/Rocket.Chat/releases |
| Docker image | `registry.rocket.chat/rocketchat/rocket.chat:8.9.0` (official compose default). Docker Hub mirror `rocketchat/rocket.chat:8.9.0` also published 2026-10-05 (`latest` = 8.9.0). `docker manifest inspect registry.rocket.chat/rocketchat/rocket.chat:latest` succeeded locally. | https://docs.rocket.chat/docs/deploy-with-docker-docker-compose ; Docker Hub tag API |
| MongoDB | **8.0 or later** required for Rocket.Chat 8.x (verified by Rocket.Chat on 8.2). Official compose default `MONGODB_VERSION=8.2`, image `docker.io/mongodb/mongodb-community-server:8.2-ubi8`, single-node replica set `rs0`. | https://docs.rocket.chat/docs/system-requirements ; https://github.com/RocketChat/rocketchat-compose/blob/main/compose.database.yml |
| Node (server-side, informational) | 22.22.3 for Rocket.Chat 8.8; Deno 2.3.1 for Apps-Engine runtime | https://docs.rocket.chat/docs/system-requirements |
| Official compose repo | https://github.com/RocketChat/rocketchat-compose (`compose.yml`, `compose.database.yml`, `compose.nats.yml`, `compose.traefik.yml`, `compose.monitoring.yml`, `.env.example`) | https://docs.rocket.chat/docs/deploy-with-docker-docker-compose |
| Free self-hosted tier | **Starter** (default for every new workspace on 6.5+): up to **50 users** (was 25 on 6.x), unlimited push, unlimited marketplace/private apps, "selected premium capabilities". Fallback **Community**: up to 100 concurrent users, 10,000 push/month, 5 public apps, 0 private apps. | https://docs.rocket.chat/docs/our-plans |
| Registration | Mandatory step in the setup wizard; needs a Rocket.Chat Cloud account email + click-through email verification (or offline token flow). "Unregistered workspaces are no longer supported." Community-only workaround: `OVERWRITE_SETTING_Setup_Wizard=completed`. | https://docs.rocket.chat/docs/register-your-workspace ; https://github.com/orgs/RocketChat/discussions/32797 |
| Pricing page | https://www.rocket.chat/pricing | — |

---

## 1. Licensing, editions and registration

### Plan names (October 2026)

Docs page: https://docs.rocket.chat/docs/our-plans

- **Starter** — "Every workspace deployed on Rocket.Chat 6.5 or later is provisioned as a Starter workspace." Self-managed only. "Designed for technical evaluations and small teams (up to 50 users)". Limits users you can add (not MAU). Includes: AD/LDAP, SSO, MFA, RBAC, E2EE, retention, DLP, content moderation, channels/groups/DMs/threads, file sharing, searchable history, **read receipts**, **unlimited push notifications**, video integrations (Pexip, Jitsi, BBB, Google Meet, Zoom), **Marketplace apps, the Apps-Engine**, visual customization. Support: community/self-serve only.
- **Community** — "Up to 100 concurrent users", push "Up to 10,000 per month", video "Jitsi and BigBlueButton only". Marketplace: 5 enabled public apps, **0 private apps** (https://docs.rocket.chat/docs/rocketchat-marketplace). Applied automatically if you remove a license key ("Removing the key immediately applies the Rocket.Chat Community license, and Community restrictions take effect right away." — https://docs.rocket.chat/use-rocket.chat/workspace-administration/registration). The Starter announcement thread states Community "is not suitable for production deployment" (vendor position, https://forums.rocket.chat/t/introducing-the-starter-plan-free-access-to-premium-features-for-limited-scale-use/18736).
- **Paid** — now sold as **Commercial / Government / Defense** (the pricing page no longer shows "Pro"/"Enterprise" tiers; all three are "Talk to sales"). https://www.rocket.chat/pricing
- Starter user limit history: "Starter 6.x = 25 users / Starter 7.x = 50 users" (staff, Dec 2024, https://forums.rocket.chat/t/new-rocketchat-starter-plan-with-up-to-50-users/20851). Deactivated users don't occupy seats.
- Omnichannel on Starter: "Up to 100 monthly active contacts" (announcement thread, above). Not restated on the current our-plans page — **partly unconfirmed**.

### What happens when you exceed Starter limits

"Your workspace is restricted from adding new users. Existing users and data remain accessible." You can upgrade or "downgrade to a Community workspace." (https://docs.rocket.chat/docs/our-plans). The 2023 announcement said a 30-day premium trial is auto-provisioned on overflow; the current docs page says only the add-user restriction. There is **no documented read-only mode**.

### Registration requirement

- Setup wizard: step 1 admin user (Full Name, Username, Email, Password); step 2 org info (Organization Name, Industry, Size, Country); step 3 **Register workspace** — enter admin email, agree to Terms + Privacy Policy, click Register; then "a confirmation email at the admin address provided" → click **Verify Registration**. (https://docs.rocket.chat/docs/rocketchat-setup-wizard)
- "For self-managed deployments, workspace registration is a required step in the setup wizard." Registration "enables access to services such as push notifications, marketplace apps, and more." (https://docs.rocket.chat/docs/register-your-workspace)
- The wizard has **no "continue standalone" button** in current versions. A Rocket.Chat collaborator: "Registering of workspace being needed is something that will not be changed at this point." Community workaround that users report works: env `OVERWRITE_SETTING_Setup_Wizard=completed` (skips the wizard entirely; you then create the admin via `ADMIN_USERNAME/ADMIN_PASS/ADMIN_EMAIL` env — unconfirmed on 8.x, from https://github.com/orgs/RocketChat/discussions/32797).
- Offline/air-gapped path: wizard step 3 → **Register Offline** → copy token → in Rocket.Chat Cloud, Workspaces → Register self-managed → Continue Offline → paste token → back in wizard agree to terms. Still needs a human with a Cloud account. (https://docs.rocket.chat/setup-and-configure/rocket.chat-air-gapped-deployment/offline-workspace-registration)
- Automated: `REG_TOKEN=<token from cloud.rocket.chat>` env var in the compose `.env` registers at boot. (https://docs.rocket.chat/docs/register-your-workspace, https://github.com/RocketChat/rocketchat-compose/blob/main/.env.example)
- **Yes, a human must create a cloud.rocket.chat account and verify an email** (or generate a token in the Cloud portal) to get a Starter-licensed workspace. Unregistered = Community limits and no push gateway / no marketplace / no private apps.

### Feature gating summary (confirmed from docs unless noted)

| Feature | Community (unregistered or no license) | Starter (registered, free) | Source |
|---|---|---|---|
| Users | 100 concurrent | 50 total | our-plans |
| Push via gateway | 10,000/month, **requires registration** | Unlimited | https://docs.rocket.chat/docs/push-notifications |
| Marketplace / private apps (Apps-Engine) | 5 public, 0 private; **registration required regardless of plan** | Unlimited | https://docs.rocket.chat/docs/rocketchat-marketplace |
| Read receipts | Premium-badged in docs; implementation lives in `apps/meteor/ee/` (EE license) | Included | https://docs.rocket.chat/docs/read-receipts |
| Moderation console | "available to all workspaces from version 6.2 or above" | yes | https://docs.rocket.chat/docs/moderation |
| Auto-translate | No plan gating mentioned in the doc; code lives outside `ee/` (`apps/meteor/server/api/v1/autotranslate.ts`) | yes | https://docs.rocket.chat/docs/auto-translate-messages (plan gating **unconfirmed**) |
| Omnichannel | Not stated on our-plans; Starter 100 MAC per 2023 announcement | 100 MAC | **unconfirmed** on current docs |
| Engagement dashboard, device management | Premium (not researched further) | — | **unconfirmed** |

### Source license

- Server repo: **MIT**, except `apps/meteor/ee/` and `ee/` which are under the Enterprise Edition license (production use requires an EE subscription; dev/test use allowed). https://github.com/RocketChat/Rocket.Chat/blob/develop/LICENSE and https://github.com/RocketChat/Rocket.Chat/blob/develop/apps/meteor/ee/LICENSE
- Neither license, nor the Terms of Use (EULA, effective 2023-11-30, https://docs.rocket.chat/docs/terms-of-use), nor the Customer Terms of Service (effective 2023-11-30, https://docs.rocket.chat/docs/customer-terms-of-service) contain any clause about **benchmarking or publishing performance results**. None found. (Older PDFs: ToS 2021-05-04, MSA Self-Managed 2021-02-27 at https://docs.rocket.chat/legal/terms — not read.)

---

## 2. Setup steps (Docker Compose)

Doc: https://docs.rocket.chat/docs/deploy-with-docker-docker-compose · Repo: https://github.com/RocketChat/rocketchat-compose

Official `compose.yml` (rocketchat service) key env, verbatim defaults:

```yaml
image: registry.rocket.chat/rocketchat/rocket.chat:${RELEASE:-8.0.1}   # set RELEASE=8.9.0
environment:
  MONGO_URL: mongodb://mongodb:27017/rocketchat?replicaSet=rs0
  ROOT_URL: ${ROOT_URL:-http://localhost}
  PORT: 3000
  DEPLOY_METHOD: docker
  DEPLOY_PLATFORM: compose
  TRANSPORTER: monolith+nats://nats:4222      # only if you include compose.nats.yml
  REG_TOKEN: ${REG_TOKEN:-}
  ROCKETCHAT_LICENSE: ${ROCKETCHAT_LICENSE:-}
  OVERWRITE_SETTING_Prometheus_Enabled: true
  METRICS_PORT: 9458
```

- `MONGO_OPLOG_URL` is **not** in the official compose anymore (not found in rocketchat-compose repo). Setting it is optional on 6.x+/8.x — **unconfirmed** from a doc page; the compose relies on `replicaSet=rs0` only.
- MongoDB service: `mongodb/mongodb-community-server:${MONGODB_VERSION:-8.2}-ubi8`, `rs.initiate(...)` single member. Rocket.Chat requires a replica set.
- Settings via env: `SETTING_ID=value` for initial values, `OVERWRITE_SETTING_<Setting_Id>=value` to force, `SETTINGS_BLOCKED=a,b` to lock, `SETTINGS_HIDDEN=a,b` to hide. https://docs.rocket.chat/docs/manage-settings-using-environmental-variables
- Default file storage is GridFS (fine for a prototype; docs recommend S3/MinIO for prod).

### Suggested `.env` keys for our server

```
ROCKETCHAT_URL=http://localhost:3000
ROCKETCHAT_ADMIN_USER=admin
ROCKETCHAT_ADMIN_PASSWORD=...
# or, after `POST /api/v1/login` once:
ROCKETCHAT_ADMIN_TOKEN=...
ROCKETCHAT_ADMIN_USER_ID=...
# needed by users.createToken on 8.x:
CREATE_TOKENS_FOR_USERS_SECRET=...   (set on the rocketchat container too)
```

### Useful `OVERWRITE_SETTING_*` for a marketplace prototype

```
OVERWRITE_SETTING_Message_CustomFields_Enabled=true
OVERWRITE_SETTING_Message_CustomFields='{"properties":{"orderId":{"type":"string"},"kind":{"type":"string"}}}'   # JSON schema; type/additionalProperties forced to object/false
OVERWRITE_SETTING_Message_Read_Receipt_Enabled=true
OVERWRITE_SETTING_Message_Read_Receipt_Store_Users=true
OVERWRITE_SETTING_API_Enable_Rate_Limiter=false            # or raise *_Limit_Calls_Default
OVERWRITE_SETTING_SMTP_Host=mailpit  OVERWRITE_SETTING_SMTP_Port=1025  OVERWRITE_SETTING_SMTP_Protocol=smtp
OVERWRITE_SETTING_Accounts_RegistrationForm=Disabled
OVERWRITE_SETTING_Iframe_Integration_receive_enable=true   (ids below are from the UI labels; verify ids in Admin > Settings, unconfirmed)
```

### REST API essentials (all under `/api/v1`, headers `X-Auth-Token`, `X-User-Id`)

| Task | Endpoint | Notes | Doc |
|---|---|---|---|
| Admin login | `POST /login` `{user,password}` or `{resume}` → `data.authToken`, `data.userId` | `code` for 2FA | https://developer.rocket.chat/apidocs/login-with-username-and-password |
| Create user | `POST /users.create` `{email,name,password,username,roles?,verified?,customFields?,joinDefaultChannels?,requirePasswordChange?,setRandomPassword?}` | perm `create-user` | https://developer.rocket.chat/apidocs/create-user |
| Token for a user (impersonation for our client) | `POST /users.createToken` `{userId}` + `secret` | **8.0+: requires env `CREATE_TOKENS_FOR_USERS_SECRET`** on the server and perm `user-generate-access-token` | https://developer.rocket.chat/apidocs/create-users-token |
| Private group per order | `POST /groups.create` `{name, members:[usernames], readOnly?, customFields?, extraData:{broadcast?,encrypted?,teamId?}}` | perm `create-p`; name must be unique → use e.g. `order-<id>` | https://developer.rocket.chat/apidocs/create-group |
| Invite (support agent) | `POST /groups.invite` `{roomId|roomName, userId|username|userIds|usernames}` | | https://developer.rocket.chat/apidocs/invite-users-to-group |
| Send message | `POST /chat.sendMessage` `{message:{rid,msg?,_id?,tmid?,blocks?,attachments?,customFields?}}` | client-supplied `_id` allowed → idempotency | https://developer.rocket.chat/apidocs/send-message |
| Post message (server/bot) | `POST /chat.postMessage` `{roomId|channel,text?,alias?,emoji?,avatar?,attachments?,customFields?,tmid?,parseUrls?}` | `alias/avatar` need `message-impersonate` | https://developer.rocket.chat/apidocs/post-message |
| Message customFields | Setting **"Allow Custom Fields in Messages"** (`Message_CustomFields_Enabled`, default false) + **"Custom Fields Validation"** (`Message_CustomFields`, JSON schema). Settable only via chat.update / chat.postMessage / chat.sendMessage / upload endpoints (6.8+). | | https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/message |
| Update message | `POST /chat.update` `{roomId,msgId,text,customFields?,previewUrls?}` | | https://developer.rocket.chat/apidocs/update-message |
| Upload file | `POST /rooms.media/{rid}` multipart `file` (+ `content` JSON) → `file._id`; **then** `POST /rooms.mediaConfirm/{rid}/{fileId}` with JSON `{msg?, description?, tmid?, customFields?, t?, alias?, avatar?, emoji?, groupable?, fileName?}` (body shape from `packages/rest-typings/src/v1/rooms.ts`; the confirm doc page was not found). Upload expires in 24h if unconfirmed. `rooms.upload/:rid` was deprecated in 6.10 and removed in 8.0. | | https://developer.rocket.chat/apidocs/upload-media-files-to-a-room |
| Mark read | `POST /subscriptions.read` `{rid|roomId, readThreads?}` | | https://developer.rocket.chat/apidocs/mark-channel-as-read |
| Read receipts | `GET /chat.getMessageReadReceipts?messageId=` → `receipts[{userId,ts,user}]` | needs Read Receipts settings on | https://developer.rocket.chat/apidocs/get-message-read-receipts |
| Report message | `POST /chat.reportMessage` `{messageId,description}`; `POST /moderation.reportUser` | shows in Admin > Moderation | https://developer.rocket.chat/apidocs/report-message |
| History | `GET /groups.history?roomId=&count=&oldest=&latest=` | not fetched this session (**unconfirmed** params) | https://developer.rocket.chat/apidocs/group-history |

### Realtime (DDP over WebSocket)

Doc: https://developer.rocket.chat/docs/realtime-api · WS URL `ws(s)://host/websocket`; first frame `{"msg":"connect","version":"1","support":["1"]}`; answer server `ping` with `pong`.

- Login over DDP: `{"msg":"method","method":"login","params":[{"resume":"<authToken>"}]}` (resume token = REST authToken). Rocket.Chat marks **DDP method calls deprecated** ("use REST for new development") but **subscriptions/streams are the only way to receive live events**. https://developer.rocket.chat/docs/method-calls
- Room messages: `{"msg":"sub","id":"x","name":"stream-room-messages","params":["<rid>", false]}`. https://developer.rocket.chat/apidocs/stream-room-messages-realtime
- Room events: `{"msg":"sub","name":"stream-notify-room","params":["<rid>/user-activity", false]}` (also `<rid>/typing` legacy, `<rid>/deleteMessage`). https://developer.rocket.chat/docs/stream-notify-room
- Emit typing (what the official web client does, `apps/meteor/client/lib/UserAction.ts`): `sdk.publish('notify-room', [`${rid}/user-activity`, username, ['user-typing'], {}])` i.e. DDP method `stream-notify-room` with params `[rid + '/user-activity', username, ['user-typing'] | [], extras]`. Not on a doc page — **from source**.
- User-level stream (`stream-notify-user`: `<uid>/notification`, `<uid>/rooms-changed`, `<uid>/subscriptions-changed`) — **unconfirmed** this session (doc page not fetched).

---

## 3. SDKs (npm, checked 2026-10-06)

| Package | Version | Last publish | Status |
|---|---|---|---|
| `@rocket.chat/ddp-client` | **1.2.0** | 2026-10-05 | Actively released with the server monorepo (`packages/ddp-client`). Typed DDP + REST client: `DDPSDK.create(url)`, `sdk.connection.connect()`, `sdk.account.loginWithToken(token)`, `sdk.stream('room-messages', rid, cb)`, `sdk.stream('notify-room', [`${rid}/user-activity`], cb)`, `sdk.rest.post('/v1/chat.sendMessage', {...})`. README: https://github.com/RocketChat/Rocket.Chat/blob/develop/packages/ddp-client/README.md. Browser usage is how the official web client works; API surface is thinly documented. |
| `@rocket.chat/rest-typings` | 8.9.0 | 2026-10 | TS types for every REST endpoint; same version line as server. |
| `@rocket.chat/ui-kit` | 1.2.0 | — | Block kit types for `blocks` (used by Apps). Rendering blocks in our own React UI would need `@rocket.chat/fuselage-ui-kit` (not researched). |
| `@rocket.chat/sdk` (legacy JS SDK) | 1.0.0-alpha.42 | **2021-10-14** | Effectively dead for web; repo not archived but default branch is `mobile` (used by the RN app). Do not use. https://github.com/RocketChat/Rocket.Chat.js.SDK |
| `@embeddedchat/react` | **0.2.3** | **2025-03-14** (19 months ago) | Repo active (last commit 2026-08-28, GSoC-driven: AI theme generator, Matrix integration), 166 stars, 99 open issues, but no npm release in 19 months; GitHub Releases page stops at v0.0.2. Treat as community/GSoC quality. https://github.com/RocketChat/EmbeddedChat |

---

## 4. Embedding Rocket.Chat UI in a React app

### Option A — `@embeddedchat/react` (EmbeddedChat)

Install: `npm install @embeddedchat/react`. Vite needs `define: { "process.env": {} }` and `base: "/"` in `vite.config.ts` (README). Requires CORS enabled on the Rocket.Chat server.

```tsx
import { EmbeddedChat } from '@embeddedchat/react';
<EmbeddedChat
  host="http://localhost:3000"
  roomId="<rid>"
  auth={{ flow: 'TOKEN', credentials: { resume: '<authToken from login/users.createToken>' } }}
  hideHeader enableThreads={false} showRoles={false}
  width="100%" height="600px" theme={myTheme} dark={false}
/>
```

Props (README, verbatim list): `isClosable, setClosableState, width, height, host, roomId, channelName, anonymousMode, toastBarPosition, showRoles, showAvatar, showUsername, showName, enableThreads, theme, className, style, hideHeader, auth, secure, dark, remoteOpt`. Auth flows: `PASSWORD` (default modal), `TOKEN` (`credentials.resume` or `{serviceName, accessToken, expiresIn}`; "the credentials are posted to the /api/v1/login endpoint"), `OAUTH` (needs the EmbeddedChat RC App installed on the server). https://github.com/RocketChat/EmbeddedChat/blob/develop/packages/docs/docs/Usage/authentication.md

**Custom message rendering: not supported.** Customization is a `theme` object (palette, typography, per-component class overrides) and a "Layout Editor" that toggles/reorders header, message-toolbox and input-toolbar options. No render-prop / component-override API for message bodies is documented. https://rocketchat.github.io/EmbeddedChat/docs/docs/Usage/layout_editor/

### Option B — iframe with `?layout=embedded`

Doc: https://developer.rocket.chat/docs/adding-a-rocketchat-chat-room-to-your-web-app

```html
<iframe src="http://localhost:3000/group/order-123?layout=embedded"></iframe>
```
Login from the parent: `iframe.contentWindow.postMessage({ externalCommand: 'login-with-token', token: authToken }, 'http://localhost:3000')` (also documented as `{ event: 'login-with-token', loginToken }`). Server settings: Admin > Settings > General > **Iframe Integration** → Enable Receive + Receive Origins = our app origin, Enable Send + Send Target Origin; General > disable **Restrict access inside any Iframe**; CORS. Same caveat: UI is Rocket.Chat's, not customizable beyond admin Layout/CSS.

### Option C — headless: our own React UI over REST + `@rocket.chat/ddp-client`

The only route that gives full control over message rendering (order cards, offers, etc.). Server mints a per-user token with `users.createToken`; browser uses `ddp-client` for streams and REST for writes. This is what Rocket.Chat's own clients do; it is the recommended approach for a custom marketplace UI. Downsides: no official "headless UI" guide; must implement typing, read, uploads, unread counts yourself.

**Recommendation:** Option C for parity with the other vendors' custom-UI builds; Option A only if a drop-in widget is acceptable.

---

## 5. Moderation

- **No built-in regex/keyword block on send** except the legacy **"Allow Message bad words filtering"** setting with a blacklist ("Add Bad Words to the Blacklist" / "Remove words from the Blacklist") — a mask/blacklist, not a configurable regex engine. https://docs.rocket.chat/use-rocket.chat/workspace-administration/settings/message
- **Moderation console** (Admin > Moderation): users report messages/users (UI "Report" or `chat.reportMessage` / `moderation.reportUser`); admins review, dismiss, delete messages, deactivate users. "Moderation is available to all workspaces from version 6.2 or above." "You can also install content moderation apps that screen the rooms and report offensive messages automatically." https://docs.rocket.chat/docs/moderation
- Moderation REST: `moderation.reports`, `moderation.user.reportedMessages`, `moderation.user.deleteReportedMessages`, etc. https://developer.rocket.chat/apidocs/get-reported-messages
- **Apps-Engine pre-send hooks**: `IPreMessageSentPrevent` ("called to determine whether a user is allowed to send a message or not", `checkPreMessageSentPrevent` + `executePreMessageSentPrevent(message, read, http, persistence): Promise<boolean>`) and `IPreMessageSentModify` ("called when an app wants to modify a message"). https://developer.rocket.chat/docs/message-event-interfaces and https://rocketchat.github.io/Rocket.Chat.Apps-engine/
- **Availability:** installing a private app requires a registered workspace ("Your workspace must be registered on Rocket.Chat Cloud, regardless of your subscription plan") and Community allows **0 private apps**; Starter allows unlimited. So a custom filter app = registered Starter workspace. https://docs.rocket.chat/docs/rocketchat-marketplace
- Alternative without apps: outgoing webhook on "Message Sent" is **post-hoc** (fires after save); you'd delete/edit via REST. Not a true pre-send filter.

---

## 6. Translation

Doc: https://docs.rocket.chat/docs/auto-translate-messages

- Admin: Manage → Workspace → Settings → Message → **Auto-Translate**: `AutoTranslate_Enabled`, `AutoTranslate_ServiceProvider` (DeepL — "Free DeepL API plans are not supported"; Google Translate API key; Microsoft Translator `Ocp-Apim-Subscription-Key`; **LibreTranslate** since 8.6.0, self-hostable). Permission `auto-translate`.
- Per user per room: room kebab menu → Auto-Translate → enable, choose language (stored on the subscription). REST: `autotranslate.saveSettings`, `autotranslate.translateMessage` (`apps/meteor/server/api/v1/autotranslate.ts`).
- Edition: doc page shows no premium badge and code is outside `ee/` → appears available on Community/Starter. **Plan gating unconfirmed** (not stated on our-plans).

---

## 7. Push and email

- **Push** (irrelevant for web-only, but for the record): requires registered workspace + accepted Cloud Service Privacy Terms + egress to `gateway.rocket.chat`. Community 10,000/month; Starter unlimited. Disable gateway → bring your own APN/FCM credentials. https://docs.rocket.chat/docs/push-notifications
- **Email**: Admin → Settings → Email → SMTP: Protocol `smtp|smtps`, Host, Port, Username, Password, From. Env: `OVERWRITE_SETTING_SMTP_Host=mailpit`, `OVERWRITE_SETTING_SMTP_Port=1025`. https://docs.rocket.chat/docs/email
- **Offline email notifications**: Admin → Settings → Accounts → **Default User Preferences** → "Offline Email Notifications" ("Select when users should receive email notifications when they are offline"; options Default/Mentions/Nothing... — exact option list **unconfirmed**); users override in My Account → Preferences → Notifications → Offline Email Notifications. Setting id `Accounts_Default_User_Preferences_emailNotificationMode` (from search snippets; **unconfirmed** id). https://docs.rocket.chat/docs/accounts
- Note for a marketplace: every private-group message counts as a DM-style notification only if the user's room notification pref says so; "Every Mention/DM" is the user-level option documented.

---

## 8. Support escalation

- Simplest: keep a `support` user with `admin`/custom role; `POST /groups.invite {roomId, username:'support'}` adds them to the order room. Optionally `groups.kick` afterwards. https://developer.rocket.chat/apidocs/invite-users-to-group
- **Omnichannel/Livechat** (website widget → agent queue, departments, routing) exists and is the product's support-desk feature. Plan: Starter = 100 monthly active contacts (2023 announcement); current our-plans page silent → **unconfirmed**. Livechat is a separate visitor model (not the same users as our buyers/sellers), so it is a poor fit for in-order escalation. https://docs.rocket.chat/docs/omnichannel

---

## 9. Rate limits

Doc: https://docs.rocket.chat/docs/rate-limiter · Defaults from source `apps/meteor/server/settings/rate.ts` (develop):

| Setting | Default |
|---|---|
| `API_Enable_Rate_Limiter` | **true** |
| `API_Enable_Rate_Limiter_Dev` | true |
| `API_Enable_Rate_Limiter_Limit_Calls_Default` | **10** calls |
| `API_Enable_Rate_Limiter_Limit_Time_Default` | **60000** ms (per endpoint, per user/IP) |
| `DDP_Rate_Limit_IP_*` | 120000 req / 60000 ms |
| `DDP_Rate_Limit_User_*` | 1200 / 60000 ms |
| `DDP_Rate_Limit_Connection_*` | 600 / 60000 ms |
| `DDP_Rate_Limit_User_By_Method_*` | 20 / 10000 ms |
| `DDP_Rate_Limit_Connection_By_Method_*` | 10 / 10000 ms |
| `Rate_Limiter_Limit_RegisterUser` | 1 |

10 REST calls/min/endpoint will break any load test or seeding script. Raise `API_Enable_Rate_Limiter_Limit_Calls_Default` or set `OVERWRITE_SETTING_API_Enable_Rate_Limiter=false`. Users with permission `api-bypass-rate-limit` skip it (historical issues note the bypass was unreliable; **unconfirmed** on 8.x). Rate-limited responses carry `X-RateLimit-*` headers and HTTP 429 (**unconfirmed** header names on 8.x).

---

## 10. Webhooks

Doc: https://docs.rocket.chat/docs/integrations (Manage > Workspace > Integrations > New > Outgoing)

Event triggers: **Message Sent** (optional trigger words), **File Uploaded**, Room Archived, Room Created (public/private), User Joined Room, User Left Room, User Created. Fields: channel (`#room`, `@user`, `all_public_channels`, `all_private_groups`, `all_direct_messages`), URLs, token, optional JS script (`prepare_outgoing_request` / `process_outgoing_response`), retry count + backoff (10^x, 2^x, x*2). Payload: `channel_id, channel_name, user_id, user_name, text, trigger_word, timestamp, token, message_id`. REST to create: `POST /integrations.create`. https://developer.rocket.chat/apidocs/create-integration

---

## 11. Terms / benchmarking clause

Checked: MIT LICENSE, `apps/meteor/ee/LICENSE`, Terms of Use (EULA, 2023-11-30), Customer Terms of Service (2023-11-30). **No clause restricting benchmarking or publishing performance results was found in any of them.** URLs: https://docs.rocket.chat/docs/terms-of-use , https://docs.rocket.chat/docs/customer-terms-of-service , https://github.com/RocketChat/Rocket.Chat/blob/develop/LICENSE . The historical Terms of Service PDF (2021) at https://docs.rocket.chat/legal/terms was not read.

---

## 12. Resource requirements

Doc: https://docs.rocket.chat/docs/system-requirements ("The specifications above are minimum requirements")

| Tier | Rocket.Chat | MongoDB |
|---|---|---|
| Starter (≤500 concurrent) | 2 vCPU, 4 GiB RAM, 20 GiB disk | 2 cores, 4 GiB RAM, 10 GiB, 3 replicas (prod) |
| Commercial (500+ / HA) | 4 vCPU, 8–12 GiB | 2 cores, 8–16 GiB, 20–80 GiB |
| 5,000+ concurrent | 16 vCPU, 12 GiB, 40 GB | 4 vCPU, 16 GiB, 80 GB per replica |

For a laptop Docker Compose prototype: single Mongo node, expect roughly 1–1.5 GB RSS for Rocket.Chat plus 0.5–1 GB for Mongo (**not from docs**).

---

## 13. Pricing

https://www.rocket.chat/pricing (Commercial / Government / Defense are all "Talk to sales"; Starter link → https://www.rocket.chat/get-started).

---

## Gotchas for our build

1. Registration needs a human + email verification to get Starter; otherwise you are on Community (0 private apps, no push gateway). Budget 10 minutes of manual setup, or skip the wizard with `OVERWRITE_SETTING_Setup_Wizard=completed` and accept Community limits.
2. `users.createToken` on 8.x requires `CREATE_TOKENS_FOR_USERS_SECRET` env on the server and the `secret` in the request body.
3. Default REST rate limiter: 10 calls / 60 s / endpoint. Disable for load tests.
4. Message `customFields` are rejected unless `Message_CustomFields_Enabled=true` and the JSON schema in `Message_CustomFields` allows the keys.
5. File upload is two calls (`rooms.media` then `rooms.mediaConfirm`); `rooms.upload` is gone in 8.x.
6. Realtime still needs DDP (`@rocket.chat/ddp-client` 1.2.0, released alongside server 8.9.0); REST has no typing or live-message endpoint.
7. EmbeddedChat has no custom message renderer and its npm package is 19 months old; prefer a headless UI.
8. Private group names must be unique and URL-safe; use `order-<id>`; store `orderId` in room `customFields` too.
