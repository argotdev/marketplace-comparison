# Sendbird

Status: **run** on 2026-10-07 against a Sendbird application (free trial). Checks: 1, 2, 3, 4, 6, 7 pass; 5 fails because the account returns no translations (sales-enabled feature). Results in `results/checks/sendbird.json`. Research notes with every URL: `docs/research/sendbird.md`.

## Versions

| Package | Version | Role |
|---|---|---|
| `@sendbird/chat` | 4.22.13 | core JS SDK (GroupChannelModule only) |
| `@sendbird/uikit-react` | 3.20.0 | kit view; peer deps React 16.8 to 19 |
| Platform API | v3 over `fetch` | server half (the official Node SDKs are generated REST clients, not used) |
| `sendbird-desk` | 1.3.0 | not installed; Desk is described below from the docs |

## Docs relied on

- Send first message / init: https://sendbird.com/docs/chat/sdk/v4/javascript/getting-started/send-first-message
- Authentication and session handler: https://sendbird.com/docs/chat/sdk/v4/javascript/application/authenticating-a-user/authentication
- Issue a session token (Platform API): https://sendbird.com/docs/chat/platform-api/v3/user/managing-session-tokens/issue-a-session-token
- Create a channel: https://sendbird.com/docs/chat/sdk/v4/javascript/channel/creating-a-channel/create-a-channel
- Send a message (user and file): https://sendbird.com/docs/chat/sdk/v4/javascript/message/sending-a-message/send-a-message
- Update a message: https://sendbird.com/docs/chat/sdk/v4/javascript/message/managing-a-message/update-a-message
- Channel event handler: https://sendbird.com/docs/chat/sdk/v4/javascript/event-handler/managing-channel-event-handlers/add-or-remove-a-channel-event-handler
- Mark as read: https://sendbird.com/docs/chat/sdk/v4/javascript/message/managing-read-status-in-a-group-channel/mark-messages-as-read
- Typing indicators: https://sendbird.com/docs/chat/sdk/v4/javascript/message/managing-a-message/send-typing-indicators-to-other-members
- Invite users: https://sendbird.com/docs/chat/sdk/v4/javascript/channel/inviting-users-to-a-group-channel/invite-users-as-members
- Report a user: https://sendbird.com/docs/chat/sdk/v4/javascript/report/creating-a-report/report-a-message-user-or-channel
- Auto-translate: https://sendbird.com/docs/chat/sdk/v4/javascript/message/translating-messages/auto-translate-messages
- Profanity filter (Platform API): https://sendbird.com/docs/chat/platform-api/v3/moderation/moderating-messages/profanity-filter
- Channel settings by custom type: https://sendbird.com/docs/chat/platform-api/v3/channel/setting-up-channels/create-channel-settings-by-a-custom-channel-type
- Webhooks overview and signature: https://sendbird.com/docs/chat/platform-api/v3/webhook/webhook-overview
- Push overview (no browser push): https://sendbird.com/docs/chat/sdk/v4/javascript/push-notifications/overview-push-notifications
- Rate limits (client): https://sendbird.com/docs/chat/sdk/v4/javascript/application/understanding-rate-limits/rate-limits
- UIKit GroupChannel module and `renderMessage`: https://sendbird.com/docs/chat/uikit/v3/react/modules/group-channel
- Desk: https://sendbird.com/docs/desk and https://sendbird.com/docs/desk/sdk/v1/javascript/features/ticket

## Plan and region

To be filled from `.env` (`SENDBIRD_PLAN`, `SENDBIRD_REGION`) once an app exists. Free 30-day trial per the pricing page: 1,000 MAU, 20 peak connections, all Pro features; then the Developer plan (100 users, 10 peak connections).

## Terms

Sendbird License Agreement v4 (last updated 2026-07-27), https://sendbird.com/terms, §5.1(iii): customers may not "disclose or publish, without SendBird's express prior written consent, performance or capacity statistics or the results of any benchmark test performed on the SendBird Services". §5.1(iv) also bars using the service to "promote or support any product or service that is competitive". No benchmark is run for any platform (author's decision of 2026-10-06), so this clause needs no consent request. The functional requirement checks are not performance statistics and will run once keys exist.

## The seven requirements (this is the baseline, so "gap" means where Sendbird itself needs more than configuration)

| # | Status | How |
|---|---|---|
| 1 | native | `groupChannel.createChannel({ channelUrl: 'order-<id>', customType: 'order', data: JSON, invitedUserIds })`. Invited users auto-join by default. |
| 2 | native | `sendUserMessage({ customType: 'order_card', data: JSON.stringify(card) })`; server edits with `PUT /v3/group_channels/{url}/messages/{id}` (`message_type: MESG`, `data`); both clients get `onMessageUpdated`. |
| 3 | native (filter) / gated (rules) | Profanity filter with three RE2 regexes on channel type `order`, type 1 (replace with asterisks). Reports via `channel.reportUser(user, ReportCategory.SUSPICIOUS, text)` land in the dashboard and the `user:report` webhook; the server also reads `GET /v3/report`. The rules engine, review tickets and keyword detection are the Advanced Moderation Enterprise add-on. |
| 4 | built | The JS SDK does not support browser push at all; the docs point to webhooks. Our webhook handler for `group_channel:message_send` checks `is_online` on the recipient and emails Mailpit. |
| 5 | gated | `translationTargetLanguages: ['en','es']` is sent on every message; the docs say enabling auto-translation means contacting sales. If translations come back empty and a server provider is configured, the built fallback in `data.translations` is used and the status stays `gated`. |
| 6 | native | `inviteWithUserIds(['agent_sam'])`; "Chat history" is on by default so the agent reads earlier messages. Desk would instead create a ticket (`Ticket.create`) backed by a *separate* group channel, auto-assigned to an agent working in the dashboard, with `relatedChannelUrls` linking back to the order channel. Desk is a separate product type at app creation; its pricing page 404s; marked `gated` until the account shows it. |
| 7 | native | `markAsRead()` + `onUserMarkedRead`; `startTyping()`/`endTyping()` + `onTypingStatusUpdated` (diffed against `getTypingUsers()`); `sendFileMessage({ file })`. |

## Kit view

`@sendbird/uikit-react`: `SendbirdProvider` (appId, userId, accessToken = session token) → `GroupChannel channelUrl=… renderMessage={…}`. The card is 15 lines; the branch in `renderMessage` is 4 lines and falls back to the kit's `Message` component for everything else. Not yet rendered (no keys).

## Documented rate limits (recorded; no benchmark is run)

Client: five messages per second per user and per channel. Not exercised: no benchmark is run. Platform API: message send and invite are capped at 5 requests/s on every plan.

## Surprises so far

- `channel.reportUser` takes the `ReportCategory` enum; the docs example passes a plain string.
- The free-trial column of the pricing page is the only one rendered server-side; Starter/Pro gating for the profanity filter and webhooks could not be read from the page.
- Browser push is unsupported in the JS SDK, which turns requirement 4 into a webhook build on the baseline platform itself.
