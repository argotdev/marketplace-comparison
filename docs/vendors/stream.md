# Stream

Status: **run** on 2026-10-07 against a Stream app (Build plan). Checks: all seven pass, including auto-translation (the Build app accepted `auto_translation_enabled`) and moderation (4/4 blocked, 0 false positives). Results in `results/checks/stream.json`. Research notes with every URL: `docs/research/stream.md`.

## Versions

| Package | Version | Role |
|---|---|---|
| `stream-chat` | 9.54.0 | browser SDK and Node server (same package) |
| `stream-chat-react` | 14.12.2 | kit view; peer deps React 17 to 19 |
| `@stream-io/feeds-client` | 2.9.0 | Feeds v3 browser client |
| `@stream-io/feeds-react-sdk` | 1.0.23 | installed; the Feeds component uses the client's state store directly |
| `@stream-io/node-sdk` | 0.8.11 | Feeds v3 server (feed group, activities, feeds token) |

## Docs relied on

- Init and connectUser: https://getstream.io/chat/docs/javascript/init_and_users/
- Tokens: https://getstream.io/chat/docs/javascript/tokens_and_authentication/
- Creating channels with custom data: https://getstream.io/chat/docs/javascript/creating_channels/
- Send message, attachments, custom fields, partial update: https://getstream.io/chat/docs/javascript/send_message/
- Channel types (server): https://getstream.io/chat/docs/node/channel_features/
- Permissions v2: https://getstream.io/chat/docs/node/chat_permission_policies/
- Events: https://getstream.io/chat/docs/javascript/event_object/
- Read state: https://getstream.io/chat/docs/javascript/unread/
- Typing: https://getstream.io/chat/docs/javascript/typing_indicators/
- File uploads: https://getstream.io/chat/docs/javascript/file_uploads/
- Members: https://getstream.io/chat/docs/javascript/channel_members/
- Block lists: https://getstream.io/chat/docs/javascript/block_lists/
- Moderation policies v2: https://getstream.io/moderation/docs/node/configuration/policies/
- Flag user: https://getstream.io/moderation/docs/node/content-moderation/flag-mute-ban/
- Review queue: https://getstream.io/moderation/docs/node/content-moderation/review-queue/
- Translation: https://getstream.io/chat/docs/javascript/translation/
- Webhooks: https://getstream.io/docs/platform/webhooks/
- Push (no web push): https://getstream.io/chat/docs/react/push_introduction/
- Unread reminders: https://getstream.io/chat/docs/javascript/unread-reminders/
- Rate limits: https://getstream.io/chat/docs/javascript/rate_limits/
- React Attachment override and WithComponents: https://getstream.io/chat/docs/sdk/react/components/message-components/attachment/
- Feeds v3 Node: https://getstream.io/activity-feeds/docs/node/ ; React: https://getstream.io/activity-feeds/docs/react/
- Migration from Sendbird: https://getstream.io/chat/docs/node/migrating-from-sendbird/ ; import format: https://getstream.io/chat/docs/javascript/import/
- TypeScript custom data (declaration merging): https://getstream.io/chat/docs/javascript/typescript/

## Plan and region

To be filled from `.env` (`STREAM_PLAN`, `STREAM_REGION`). Build plan per the pricing page: 1,000 MAU, 100 concurrent connections, 5M stored messages, no card, no expiry. Maker account (if eligible): 2,000 MAU with a modified Start plan.

## Terms

Terms and Conditions at https://getstream.io/legal/. No clause about benchmarking, performance testing or publishing comparative results was found. §1.4(i) forbids using the service to develop a functionally similar product; not relevant to a comparison article. No benchmark is run for any platform (author's decision of 2026-10-06).

## The seven requirements against Sendbird

| # | Status | How, and the gap against Sendbird |
|---|---|---|
| 1 | native | `client.channel('order', 'order-<id>', { members, orderId, listingId })` then `watch()`. Custom fields are typed JSON at the top level, where Sendbird needs `JSON.stringify` into `data`. Channel type `order` is created once, server-side, with typing/read events, uploads and a `channel_member` grant that lets a member add members. |
| 2 | native | Custom attachment `{ type: 'order_card', card }`; the server edits with `partialUpdateMessage`. Same shape as Sendbird's custom-type message, but the kit renders it through a documented `Attachment` override rather than `renderMessage`. |
| 3 | native | Block lists: regex (phone), regex (email), word list (off-platform payment), wired into moderation policy `chat:order` with action `remove`, plus the AI platform-circumvention rule. `client.flagUser` lands in the review queue (dashboard) and `user.flagged` webhook. Stream has a regex block list type and built-in phone/email detection, where Sendbird's regex filter is RE2 on the profanity filter and the rules engine is an Enterprise add-on. Whether AI/semantic rules are accepted on Build is recorded by the setup script. |
| 4 | built | No web push and no email on Stream (same as Sendbird). `message.new` webhook → presence check via `queryUsers` → Mailpit. Stream also has `user.unread_message_reminder` events that could drive this; not used so both builds stay comparable. |
| 5 | gated | `auto_translation_enabled` on the app plus `language` on the user gives `message.i18n.es_text` / `en_text` automatically for every reader. The Chat pricing page puts it on Elevate+. The setup script records whether the Build app accepts the flag; the built fallback (translations in a custom message field) is used when it does not. Sendbird: per-message target languages, sales-enabled. |
| 6 | native | `channel.addMembers(['agent_sam'], { text })`. History is visible to new members unless `hide_history` is set. Stream has no Desk equivalent; see the migration map. |
| 7 | native | `markRead()` + `message.read`; `keystroke()`/`stopTyping()` + `typing.start/stop`; `sendImage()` then an image attachment with a signed, member-only CDN URL. |

## Kit view

`stream-chat-react` v14: `Chat → WithComponents overrides={{ Attachment }} → Channel → Window → MessageList + MessageComposer`. The override is a 5-line component that renders our card for `type === 'order_card'` and delegates to the kit's `Attachment` otherwise. `MessageInput` is gone in v14; the composer is `MessageComposer`. The Feeds component (`/feed` export) lists `order_status` activities on feed `listing:<listingId>`, which the server posts on every status change.

## Documented rate limits (recorded; no benchmark is run)

No per-channel messages/second limit is documented. The per-user limit is 60 requests per minute per endpoint and platform,.

## Surprises so far

- `stream-chat-react` 14 removed `MessageInput`; the composer is `MessageComposer` and the attachment override goes through `WithComponents`.
- Typing custom fields in `stream-chat` v9 is done by declaration merging on `CustomAttachmentData` / `CustomChannelData` / `CustomMessageData`; without it every custom field is a type error.
- Two pricing pages disagree on whether AI/semantic moderation is free on Build. The setup script records the API's answer.
