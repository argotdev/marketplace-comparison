# CometChat

Status: **run** on 2026-10-12 against a CometChat app (Build plan, region us). Checks: 1, 2, 5, 6, 7 pass (translation through the Message Translation extension works on Build); 3 fails with 0/4 blocked because the moderation rules are dashboard settings not yet enabled on this app. Results in `results/checks/cometchat.json`. Research notes with every URL: `docs/research/cometchat.md`.

## Compared with Sendbird

- **Same:** private group per order with metadata, custom message type for the card with live edits (author or admin only), escalation by adding a member, read receipts, typing and image attachments. Five of six checks pass.
- **Sendbird can, CometChat can't:** a desk product (CometChat bridges to Chatwoot or Intercom); moderate custom messages (CometChat skips them by design); edit a message as any member (CometChat: author, admin or moderator only).
- **CometChat can, Sendbird can't (on the accounts used):** translation on the free Build plan (Sendbird: Pro plus sales); a rules engine with phone and email detection, regex lists and AI rules on every plan (Sendbird: Enterprise add-on), once enabled in the dashboard; native email and SMS notifications; a kit with a plugin system for custom message types.

## Versions

| Package | Version | Role |
|---|---|---|
| `@cometchat/chat-sdk-javascript` | 4.2.0 | core SDK (browser-only; the server uses REST) |
| `@cometchat/chat-uikit-react` | 7.2.3 | kit view; peer deps React 18 to 20, `@cometchat/calls-sdk-javascript` ^5.0.3 |
| `@cometchat/calls-sdk-javascript` | 5.0.6 | installed only to satisfy the UI Kit's peer dependency; calls are not used |
| `dompurify` | 3.4.16 (ours) / 3.3.1 (pinned inside the UI Kit) | the UI Kit's exact pin is behind `npm audit`'s moderate DOMPurify advisories |
| REST | `https://{appId}.api-{region}.cometchat.io/v3` | server half |

## Docs relied on

- Setup / AppSettingsBuilder: https://www.cometchat.com/docs/sdk/javascript/setup-sdk
- Authentication and auth tokens: https://www.cometchat.com/docs/sdk/javascript/authentication-overview , https://www.cometchat.com/docs/rest-api/auth-tokens/create
- Groups: https://www.cometchat.com/docs/sdk/javascript/create-group , https://www.cometchat.com/docs/sdk/javascript/group-add-members , https://www.cometchat.com/docs/rest-api/groups/create
- Messages: https://www.cometchat.com/docs/sdk/javascript/send-message , https://www.cometchat.com/docs/sdk/javascript/edit-message , https://www.cometchat.com/docs/sdk/javascript/receive-message , https://www.cometchat.com/docs/rest-api/messages/update-message
- Receipts and typing: https://www.cometchat.com/docs/sdk/javascript/delivery-read-receipts , https://www.cometchat.com/docs/sdk/javascript/typing-indicators
- Moderation: https://www.cometchat.com/docs/moderation/overview , https://www.cometchat.com/docs/moderation/rules-management , https://www.cometchat.com/docs/sdk/javascript/ai-moderation , https://www.cometchat.com/docs/sdk/javascript/flag-message
- Translation extension: https://www.cometchat.com/docs/fundamentals/message-translation
- Notifications (push, email custom provider): https://www.cometchat.com/docs/notifications/push-overview , https://www.cometchat.com/docs/notifications/web-push-notifications , https://www.cometchat.com/docs/notifications/email-custom-providers
- Webhooks: https://www.cometchat.com/docs/fundamentals/webhooks
- UI Kit v7 plugins: https://www.cometchat.com/docs/ui-kit/react/plugins/custom-plugin , migration https://www.cometchat.com/docs/ui-kit/react/migration-overview
- Rate limits: https://www.cometchat.com/docs/articles/rate-limits
- Terms: https://www.cometchat.com/legal-terms-of-service

## Plan and region

Build plan (free forever, no card): 100 MAU, 25 concurrent connections, 6-month retention; it includes rule-based moderation, AI rules, translation, email/SMS notifications and webhooks. Region `us` (also `eu`, `in`).

## Terms

No clause about benchmarking, performance testing or publishing comparative results was found in the Terms of Service. The nearest restriction is not interfering with the service and not building a competing product. No benchmark is run for any platform (author's decision of 2026-10-06).

## The seven requirements against Sendbird

| # | Status | How, and the gap against Sendbird |
|---|---|---|
| 1 | native | Private group whose GUID is the order channel id, `metadata` JSON, created with both members in one call. Equivalent to Sendbird's group channel with `data`. |
| 2 | native | `CustomMessage('order_card', { card })`; the client can `editMessage` a `CustomMessage`, which the docs state explicitly. The REST update schema documents only `data.text` and `data.metadata`, so the server sends the card in `metadata` as well and the adapter reads either. Sendbird's Platform API edits `data` directly. |
| 3 | native | The rules engine (dashboard) ships default phone and email detection and accepts custom regex lists on every plan, with Block or Flag actions; Sendbird needs the Enterprise add-on for rules. Caveat from the docs: custom messages are never moderated. Reporting is message-level (`flagMessage`); report-user survives only as a legacy extension. |
| 4 | documented, not tested (was: native) | Email is a first-class Notifications feature (unread-fallback with a 1 to 1440 minute wait); with the Custom provider option CometChat posts the payload to our webhook and we mail Mailpit. Browser push exists (FCM_WEB), not run. Sendbird has neither. |
| 5 | native | Message Translation extension, free on Build, on-demand through `callExtension`; the adapter pre-translates on send into `metadata['message-translation']` as the docs suggest. Sendbird's translation is sales-enabled. |
| 6 | native | `addMembersToGroup`. No desk product (Chatwoot and Intercom bridges exist). |
| 7 | native | Receipts, typing and media are all SDK calls; group receipts work for groups up to 300 members. |

## Kit view

UI Kit v7 dropped message templates; a `CometChatMessagePlugin` (`id`, `messageTypes`, `messageCategories`, `renderBubble`) passed to `<CometChatProvider plugins>` renders the card. The plugin is 14 lines; the card component matches the Sendbird kit's card so the two screenshots line up. The kit injects its own CSS, so there is no stylesheet import.

## Documented rate limits (recorded; no benchmark is run)

No WebSocket send limit is documented; REST is 20,000 standard operations per minute. Not exercised: no benchmark is run.

## Surprises so far

- Custom messages bypass moderation by design, so a moderation check on the order card type would pass for the wrong reason; the fixture uses text messages.
- Webhooks are protected by Basic Auth only (no signature header).
- The UI Kit pins `dompurify` to an exact 3.3.1, which `npm audit` flags as moderate; the kit's own peer dependency on the calls SDK must be installed even when calls are unused.
- There is no Node SDK at all.
- `POST /users` rejects a `role` that does not exist in the dashboard ("The selected role is invalid"); roles are not free-form strings.
- `PUT /messages/{id}` is allowed for the author, group admins and moderators only; any other member gets 403. Editing as the author persists both `customData` and `metadata` (the docs list only text/metadata).
