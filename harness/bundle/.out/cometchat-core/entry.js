var Nt = (We, xe) => () => (xe || (We((xe = { exports: {} }).exports, xe), We = null), xe.exports), mt = /* @__PURE__ */ Nt(((We, xe) => {
  (function(j, a) {
    if (typeof We == "object" && typeof xe == "object") xe.exports = a();
    else if (typeof define == "function" && define.amd) define([], a);
    else {
      var g = a();
      for (var p in g) (typeof We == "object" ? We : j)[p] = g[p];
    }
  })(window, function() {
    return (function(j) {
      var a = {};
      function g(p) {
        if (a[p]) return a[p].exports;
        var i = a[p] = {
          i: p,
          l: !1,
          exports: {}
        };
        return j[p].call(i.exports, i, i.exports, g), i.l = !0, i.exports;
      }
      return g.m = j, g.c = a, g.d = function(p, i, S) {
        g.o(p, i) || Object.defineProperty(p, i, {
          enumerable: !0,
          get: S
        });
      }, g.r = function(p) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(p, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(p, "__esModule", { value: !0 });
      }, g.t = function(p, i) {
        if (1 & i && (p = g(p)), 8 & i || 4 & i && typeof p == "object" && p && p.__esModule) return p;
        var S = /* @__PURE__ */ Object.create(null);
        if (g.r(S), Object.defineProperty(S, "default", {
          enumerable: !0,
          value: p
        }), 2 & i && typeof p != "string") for (var E in p) g.d(S, E, function(n) {
          return p[n];
        }.bind(null, E));
        return S;
      }, g.n = function(p) {
        var i = p && p.__esModule ? function() {
          return p.default;
        } : function() {
          return p;
        };
        return g.d(i, "a", i), i;
      }, g.o = function(p, i) {
        return Object.prototype.hasOwnProperty.call(p, i);
      }, g.p = "", g(g.s = 47);
    })([
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AI_ASSISTANT_EVENTS = a.ModerationStatus = a.AttachmentType = a.AI_SLUG_ENABLED = a.AI_SLUG_ACCESSIBLE = a.AI_FEATURE_ENABLED = a.AI_FEATURE_ACCESSIBLE = a.ADDITIONAL_CONSTANTS = a.ONLINE_MEMBER_COUNT_API = a.JWT_API = a.ProsodyApiErrors = a.PROSODY_API = a.API_ERROR_CODES = a.REACTION_ACTION = a.SESSION_STORE = a.CONNECTION_STATUS = a.COMMON_UTILITY_CONSTANTS = a.UPLOAD_CONSTANTS = a.APP_SETTINGS = a.PresenceConstants = a.PresenceConstatnts = a.FeatureRestrictionErrors = a.MessageErrors = a.AIFeatureError = a.ExtensionErrors = a.AIErrors = a.ConversationErrors = a.GroupErrors = a.UserErrors = a.ReceiptErrors = a.GENERAL_ERROR = a.PARAMETER_ERROR = a.CALL_ERROR = a.Errors = a.UserConstants = a.GroupMemersConstans = a.GroupConstants = a.CallConstants = a.BlockedUsersConstants = a.ActionConstatnts = a.TYPING_NOTIFICATION = a.GoalType = a.MessageCategory = a.ATTACHMENTS_CONSTANTS = a.MessageConstatnts = a.READ_RECEIPTS = a.DELIVERY_RECEIPTS = a.ResponseConstants = a.INTEGRATION_SOURCE = a.LOCAL_STORE = a.ANALYTICS = a.WS = a.SDKHeader = a.APPINFO = a.GROUP_MEMBER_SCOPE = a.StorageMode = a.GroupMemberScope = a.GROUP_TYPE = a.GroupType = a.CALLING_COMPONENT_VERSION = a.DEFAULT_VALUES = a.constants = void 0;
        var p, i, S, E, n, o, s, r, e = g(2);
        a.constants = {
          DEFAULT_STORE: "cometchat",
          MSG_VER_PRE: "store-ver-pre",
          MSG_VER_POST: "store-ver-post"
        }, a.DEFAULT_VALUES = {
          ZERO: 0,
          MSGS_LIMIT: 30,
          REACTIONS_LIMIT: 10,
          MSGS_MAX_LIMIT: 100,
          USERS_LIMIT: 30,
          USERS_MAX_LIMIT: 100,
          GROUPS_LIMIT: 30,
          GROUPS_MAX_LIMIT: 100,
          CONVERSATION_MAX_LIMIT: 50,
          CALL_TIMEOUT: 45,
          DEFAULT_MSG_ID: 0,
          DEFAULT_MAX_TYPING_INDICATOR_LIMIT: 5,
          REGION_DEFAULT: "eu",
          REGION_DEFAULT_EU: "eu",
          REGION_DEFAULT_US: "us",
          REGION_DEFAULT_IN: "in",
          REGION_DEFAULT_PRIVATE: "private",
          REACTIONS_MAX_LIMIT: 20
        }, a.CALLING_COMPONENT_VERSION = 5, (p = a.GroupType || (a.GroupType = {})).Public = "public", p.Private = "private", p.Protected = "protected", p.Password = "password", a.GROUP_TYPE = {
          PUBLIC: "public",
          PRIVATE: "private",
          PROTECTED: "password",
          PASSWORD: "password"
        }, (i = a.GroupMemberScope || (a.GroupMemberScope = {})).Admin = "admin", i.Moderator = "moderator", i.Member = "member", (S = a.StorageMode || (a.StorageMode = {})).LOCAL = "local", S.SESSION = "session", a.GROUP_MEMBER_SCOPE = {
          ADMIN: "admin",
          MODERATOR: "moderator",
          PARTICIPANT: "participant"
        }, a.APPINFO = {
          platform: "WEB",
          sdkVersion: "v4.2.0",
          apiVersion: "v3.0",
          sdkVersionWithUnderScore: "4_2_0"
        }, a.SDKHeader = {
          platform: "javascript",
          sdkVersion: "4.2.0",
          sdk: "%s@%s"
        }, a.WS = { CONVERSATION: { TYPE: {
          CHAT: "chat",
          GROUP_CHAT: "groupchat"
        } } }, a.ANALYTICS = {
          analyticsHost: "metrics-%s.cometchat.io",
          analyticsVersion: "v1"
        }, a.LOCAL_STORE = {
          COMMON_STORE: "common_store",
          MESSAGE_LISTENERS_LIST: "message_listeners_list",
          USERS_STORE: "users_store",
          MESSAGES_STORE: "messages_store",
          KEYS_STORE: "keys_store",
          STORE_STRING: "%s:%s",
          KEY_STRING: "%s/%s",
          KEY_USER: "user",
          KEY_APP_SETTINGS: "app_settings",
          KEY_APP_ID: "appId",
          KEY_DEVICE_ID: "deviceId",
          KEY_SESSION_ID: "sessionId",
          KEY_INTEGRATION_SOURCE: "integrationSource",
          KEY_MESSAGE_LISTENER_LIST: "all"
        }, a.INTEGRATION_SOURCE = {
          AI_AGENT: "ai-agent",
          MANUAL: "manual"
        }, a.ResponseConstants = { RESPONSE_KEYS: {
          KEY_DATA: "data",
          KEY_META: "meta",
          KEY_CURSOR: "cursor",
          KEY_NEXT: "next",
          KEY_PREVIOUS: "previous",
          KEY_ACTION: "action",
          KEY_MESSAGE: "message",
          KEY_ERROR: "error",
          KEY_ERROR_DETAILS: "details",
          KEY_ERROR_CODE: "code",
          KEY_ERROR_MESSAGE: "message",
          KEY_AUTH_TOKEN: "authToken",
          KEY_WS_CHANNEL: "wsChannel",
          KEY_IDENTITY: "identity",
          KEY_SERVICE: "identity",
          KEY_ENTITIES: "entities",
          KEY_REACTIONS: "reactions",
          KEY_ENTITITY: "entity",
          KEY_ENTITYTYPE: "entityType",
          KEY_ATTACHMENTS: "attachments",
          CODE_REQUEST_OK: 200,
          CODE_BAD_REQUEST: 401,
          UNREAD_UNDELIVERED_KEYS: {
            ENTITY: "entity",
            ENTITY_TYPE: "entityType",
            ENTITY_Id: "entityId",
            COUNT: "count"
          },
          GROUP_MEMBERS_RESPONSE: {
            SUCCESS: "success",
            ERROR: "error",
            MESSAGE: "message"
          },
          KEY_ENTITY_TYPE: {
            USER: "user",
            GROUP: "group"
          },
          KEY_CONVERSATION_STARTER: "conversation-starter",
          KEY_SMART_REPLIES: "smart-replies",
          KEY_CONVERSATION_SUMMARY: "conversation-summary",
          KEY_BOT_REPLY: "bot-reply"
        } }, a.DELIVERY_RECEIPTS = {
          RECEIVER_ID: "receiverId",
          RECEIVER_TYPE: "type",
          RECIPIENT: "recipient",
          MESSAGE_ID: "messageId",
          RECEIVED: "delivered",
          DELIVERED_AT: "deliveredAt",
          ID: "id",
          TIME: "time",
          DELIVERED_TO_ME_AT: "deliveredToMeAt"
        }, a.READ_RECEIPTS = {
          RECEIVER_ID: "receiverId",
          RECEIVER_TYPE: "type",
          RECIPIENT: "recipient",
          MESSAGE_ID: "messageId",
          READ: "read",
          READ_AT: "readAt",
          ID: "id",
          TIME: "time",
          READ_BY_ME_AT: "readByMeAt"
        }, a.MessageConstatnts = {
          TYPE: {
            TEXT: "text",
            MEDIA: "media",
            IMAGE: "image",
            VIDEO: "video",
            AUDIO: "audio",
            FILE: "file",
            CUSTOM: "custom",
            ASSISTANT: "assistant",
            TOOL_RESULT: "tool-result",
            TOOL_ARGUMENTS: "tool-arguments"
          },
          CATEGORY: {
            MESSAGE: "message",
            ACTION: "action",
            CALL: "call",
            CUSTOM: "custom",
            INTERACTIVE: "interactive",
            AGENTIC: "agentic",
            CARD: "card"
          },
          RECEIVER_TYPE: {
            USER: "user",
            GROUP: "group"
          },
          KEYS: {
            ATTATCHMENT: "attatchment",
            ATTATCHMENTS: "attachments",
            ACTION: "action",
            TYPE: "type",
            DATA: "data",
            ID: "id",
            MUID: "muid",
            SENDER: "sender",
            RECEIVER: "receiver",
            RECEIVER_ID: "receiverId",
            CATEGORY: "category",
            RECEIVER_TYPE: "receiverType",
            SENT_AT: "sentAt",
            STATUS: "status",
            TEXT: "text",
            URL: "url",
            METADATA: "metadata",
            RECEIPTS: "receipts",
            MY_RECEIPTS: "myReceipt",
            CUSTOM_DATA: "customData",
            CUSTOM_SUB_TYPE: "subType",
            RESOURCE: "resource",
            MENTIONS: "mentions",
            INTERACTIVE_DATA: "interactiveData",
            INTERACTION_GOAL: "interactionGoal",
            INTERACTIONS: "interactions",
            ALLOW_SENDER_INTERACTION: "allowSenderInteraction",
            ELEMENT_ID: "elementId",
            INTERACTED_AT: "interactedAt",
            ELEMENT_IDS: "elementIds",
            RUN_ID: "runId",
            THREAD_ID: "threadId",
            TOOL_CALLS: "toolCalls",
            FUNCTION: "function",
            NAME: "name",
            ARGUMENTS: "arguments",
            TOOL_CALL_ID: "toolCallId",
            DISPLAY_NAME: "displayName",
            EXECUTION_TEXT: "executionText",
            CARD: "card",
            CARD_ID: "cardId",
            ELEMENTS: "elements"
          },
          KNOWN_MEDIA_TYPE: {
            IMAGE: [],
            VIDEO: [],
            AUDIO: [],
            FILE: []
          },
          PAGINATION: {
            AFFIX: {
              APPEND: "append",
              PREPEND: "prepend"
            },
            CURSOR_FILEDS: {
              ID: "id",
              SENT_AT: "sentAt"
            },
            CURSOR_AFFIX_DEFAULT: "prepend",
            CURSOR_FIELD_DEFAULT: "sentAt",
            KEYS: {
              PER_PAGE: "per_page",
              CURSOR_AFFIX: "cursorAffix",
              AFFIX: "affix",
              CURSOR_FIELD: "cursorField",
              CURSOR_VALUE: "cursorValue",
              UID: "uid",
              SENT_AT: "sentAt",
              ID: "id",
              CURRENT_PAGE: "page",
              UNREAD: "unread",
              HIDE_MESSAGES_FROM_BLOCKED_USER: "hideMessagesFromBlockedUsers",
              SEARCH_KEY: "searchKey",
              ONLY_UPDATES: "onlyUpdates",
              UPDATED_AT: "updatedAt",
              CATEGORY: "category",
              CATEGORIES: "categories",
              TYPE: "type",
              TYPES: "types",
              HIDE_REPLIES: "hideReplies",
              HIDE_DELETED_MESSAGES: "hideDeleted",
              WITH_TAGS: "withTags",
              TAGS: "tags",
              MENTIONS_WITH_TAG_INFO: "mentionsWithTagInfo",
              MENTIONS_WITH_BLOCKED_INFO: "mentionsWithBlockedInfo",
              ONLY_INTERACTION_GOAL_COMPLETED: "onlyInteractionGoalCompleted",
              HAS_ATTACHMENTS: "hasAttachments",
              HAS_LINKS: "hasLinks",
              HAS_MENTIONS: "hasMentions",
              HAS_REACTIONS: "hasReactions",
              MENTIONED_UIDS: "mentionedUids",
              ATTACHMENT_TYPES: "attachmentTypes",
              WITH_PARENT: "withParent",
              HIDE_QUOTED_MESSAGES: "hideQuotedMessages"
            }
          }
        }, a.ATTACHMENTS_CONSTANTS = { KEYS: {
          EXTENSION: "extension",
          MIME_TYPE: "mimeType",
          NAME: "name",
          SIZE: "size",
          URL: "url"
        } }, (E = a.MessageCategory || (a.MessageCategory = {})).ACTION = "action", E.MESSAGE = "message", E.CALL = "call", E.CUSTOM = "custom", E.INTERACTIVE = "interactive", E.AGENTIC = "agentic", E.CARD = "card", (n = a.GoalType || (a.GoalType = {})).ANY_ACTION = "anyAction", n.ANY_OF = "anyOf", n.ALL_OF = "allOf", n.NONE = "none", a.TYPING_NOTIFICATION = {
          RECEIVER_ID: "receiverId",
          RECEIVER_TYPE: "receiverType",
          META: "metadata",
          KEYS: {
            TYPING_NOTIFICATION: "typingNotification",
            TIMESTAMP: "timestamp"
          },
          ACTIONS: {
            STARTED: "started",
            ENDED: "ended"
          }
        }, a.ActionConstatnts = {
          ACTION_SUBJECTS: {
            ACTION_ON: "on",
            ACTION_BY: "by",
            ACTION_FOR: "for"
          },
          ACTION_ENTITY_TYPE: {
            GROUP_USER: "groupuser",
            USER: "user",
            GROUP: "group",
            MESSAGE: "message"
          },
          ACTION_KEYS: {
            ACTION_CREATED: "created",
            ACTION_UPDATED: "updated",
            ACTION_DELETED: "deleted",
            ENTITIES: "entities",
            ENTITY: "entity",
            ENTITY_TYPE: "entityType",
            TYPE_MEMBER_JOINED: "joined",
            TYPE_MEMBER_LEFT: "left",
            TYPE_MEMBER_KICKED: "kicked",
            TYPE_MEMBER_BANNED: "banned",
            TYPE_MEMBER_UNBANNED: "unbanned",
            TYPE_MEMBER_INVITED: "invited",
            TYPE_MEMBER_ADDED: "added",
            ACTION_SCOPE_CHANGED: "scopeChanged",
            ACTION_TYPE_USER: "user",
            ACTION_TYPE_GROUP: "group",
            ACTION_TYPE_GROUP_MEMBER: "groupMember",
            TYPE_MESSAGE_EDITED: "edited",
            TYPE_MESSAGE_DELETED: "deleted",
            ACTION_TYPE_CALL: "call",
            EXTRAS: "extras",
            SCOPE: "scope",
            NEW: "new",
            OLD: "old"
          },
          ActionMessages: {
            ACTION_GROUP_JOINED_MESSAGE: "%s joined",
            ACTION_GROUP_LEFT_MESSAGE: "%s left",
            ACTION_MEMBER_KICKED_MESSAGE: "%s kicked %s",
            ACTION_MEMBER_BANNED_MESSAGE: "%s banned %s",
            ACTION_MEMBER_UNBANNED_MESSAGE: "%s unbanned %s",
            ACTION_MEMBER_INVITED_MESSAGE: "%s banned %s",
            ACTION_MESSAGE_EDITED_MESSAGE: " Message Edited",
            ACTION_MESSAGE_DELETED_MESSAGE: "Message Deleted",
            ACTION_MEMBER_SCOPE_CHANGED: "%s made %s %s",
            ACTION_MEMBER_ADDED_TO_GROUP: "%s added %s"
          },
          ACTION_TYPE: {
            TYPE_MEMBER_JOINED: "joined",
            TYPE_MEMBER_LEFT: "left",
            TYPE_MEMBER_KICKED: "kicked",
            TYPE_MEMBER_BANNED: "banned",
            TYPE_MEMBER_UNBANNED: "unbanned",
            TYPE_MEMBER_INVITED: "invited",
            TYPE_MEMBER_SCOPE_CHANGED: "scopeChanged",
            TYPE_MESSAGE: "message",
            TYPE_MESSAGE_EDITED: "edited",
            TYPE_MESSAGE_DELETED: "deleted",
            TYPE_MEMBER_ADDED: "added"
          },
          ACTIONS: {
            MEMBER_ADDED: "added",
            MEMBER_JOINED: "joined",
            MEMBER_LEFT: "left",
            MEMBER_KICKED: "kicked",
            MEMBER_BANNED: "banned",
            MEMBER_UNBANNED: "unbanned",
            MEMBER_INVITED: "invited",
            MEMBER_SCOPE_CHANGED: "scopeChanged",
            MESSAGE_EDITED: "edited",
            MESSSAGE_DELETED: "deleted",
            TYPE_USER: "user",
            TYPE_GROUP: "group",
            TYPE_GROUP_MEMBER: "groupMember"
          }
        }, a.BlockedUsersConstants = { REQUEST_KEYS: { DIRECTIONS: {
          BOTH: "both",
          HAS_BLOCKED_ME: "hasBlockedMe",
          BLOCKED_BY_ME: "blockedByMe"
        } } }, a.CallConstants = {
          CALL_MODE: {
            DEFAULT: "DEFAULT",
            SPOTLIGHT: "SPOTLIGHT",
            SINGLE: "SINGLE",
            TILE: "TILE",
            GRID: "GRID"
          },
          CALL_TYPE: {
            AUDIO: "audio",
            VIDEO: "video"
          },
          RECEIVER_TYPE_GROUP: "group",
          RECEIVER_TYPE_USER: "user",
          CALL_KEYS: {
            CALL_DATA: "data",
            CALL_ID: "id",
            CALL_SESSION_ID: "sessionid",
            CALL_RECEIVER: "receiver",
            CALL_SENDER: "sender",
            CALL_RECEIVER_TYPE: "receiverType",
            CALL_STATUS: "status",
            CALL_TYPE: "type",
            CALL_INITIATED_AT: "initiatedAt",
            CALL_JOINED_AT: "joinedAt",
            CALL_LEFT_AT: "leftAt",
            CALL_METADATA: "metadata",
            CALL_ENTITIES: "entities",
            CALL_ENTITY_TYPE: "entityType",
            CALL_ENTITY: "entity",
            CALL_ENTITY_USER: "user",
            CALL_ENTITY_GROUP: "group"
          },
          CALL_STATUS: {
            INITIATED: "initiated",
            ONGOING: "ongoing",
            UNANSWERED: "unanswered",
            REJECTED: "rejected",
            BUSY: "busy",
            CANCELLED: "cancelled",
            ENDED: "ended"
          },
          AUDIO_INPUT_DEVICES: "audioInputDevices",
          AUDIO_OUTPUT_DEVICES: "audioOutputDevices",
          VIDEO_INPUT_DEVICES: "videoInputDevices",
          POST_MESSAGES: {
            TYPES: {
              ACTION_MESSAGE: "cometchat_action_message",
              HANGUP: "hangup",
              COMETCHAT_RTC_SETTINGS: "cometchat_rtc_settings"
            },
            ACTIONS: {
              USER_JOINED: "onUserJoined",
              USER_LEFT: "onUserLeft",
              USER_LIST_CHANGED: "onUserListChanged",
              INITIAL_DEVICE_LIST: "initialDeviceList",
              DEVICE_CHANGE: "onDeviceChange",
              LOAD: "LOAD",
              CHANGE_AUDIO_INPUT: "changeAudioInput",
              CHANGE_AUDIO_OUTPUT: "changeAudioOutput",
              CHANGE_VIDEO_INPUT: "changeVideoInput",
              MUTE_AUDIO: "muteAudio",
              UNMUTE_AUDIO: "unMuteAudio",
              PAUSE_VIDEO: "pauseVideo",
              UNPAUSE_VIDEO: "unPauseVideo",
              SWITCH_MODE: "switchMode",
              START_SCREENSHARE: "startScreenShare",
              STOP_SCREENSHARE: "stopScreenShare",
              END_CALL: "endCall",
              START_RECORDING: "startRecording",
              STOP_RECORDING: "stopRecording",
              RECORDING_TOGGLED: "onRecordingToggled",
              USER_MUTED: "onUserMuted",
              SCREEN_SHARE_STARTED: "SCREEN_SHARE_STARTED",
              SCREEN_SHARE_STOPPED: "SCREEN_SHARE_ENDED",
              SWITCH_TO_VIDEO_CALL: "switchedToVideo",
              SWITCHED_TO_VIDEO_CALL: "onCallSwitchedToVideo",
              OPEN_VIRTUAL_BACKGROUND: "openVirtualBackgroundMenu",
              SET_BACKGROUND_BLUR: "setBackgroundBlur",
              SET_BACKGROUND_IMAGE: "setBackgroundImage"
            }
          },
          MEDIA_DEVICE: {
            ID: "id",
            NAME: "name",
            ACTIVE: "active"
          },
          ZOOM_BUTTON_DEFAULT_PARAMS: {
            position: "bottom-right",
            visible: !0
          },
          NAME_LABEL_DEFAULT_PARAMS: {
            position: "bottom-left",
            visible: !0,
            color: "rgba(27, 27, 27, 0.4)"
          },
          NETWORK_LABEL_DEFAULT_PARAMS: {
            position: "bottom-right",
            visible: !0
          },
          MAIN_VIDEO_CONTAINER_SETTINGS: { KEYS: {
            POSITION: "position",
            VISIBILITY: "visible",
            COLOR: "color"
          } }
        }, a.GroupConstants = { KEYS: {
          NAME: "name",
          GUID: "guid",
          TYPE: "type",
          PASSWORD: "password",
          ICON: "icon",
          DESCRIPTION: "description",
          OWNER: "owner",
          METADATA: "metadata",
          CREATED_AT: "createdAt",
          UPDATED_AT: "updatedAt",
          HAS_JOINED: "hasJoined",
          WS_CHANNEL: "wsChannel",
          TAGS: "tags"
        } }, a.GroupMemersConstans = { KEYS: {
          SCOPE: "scope",
          UID: "uid",
          GUID: "guid",
          USER: "user",
          NAME: "name"
        } }, a.UserConstants = {
          UID: "uid",
          NAME: "name",
          AUTH_TOKEN: "authToken",
          AVATAR: "avatar",
          LAST_ACTIVE_AT: "lastActiveAt",
          LINK: "link",
          META_DATA: "metadata",
          ROLE: "role",
          STATUS: "status",
          STATUS_MESSAGE: "statusMessage",
          USER_NAME: "user_name",
          TAGS: "tags",
          SORT_BY: {
            NAME: "name",
            STATUS: "status"
          },
          SORT_ORDER: {
            ASCENDING: "asc",
            DESCENDING: "desc"
          }
        }, a.Errors = {
          ERROR_IO_EXCEPTION: "ERROR_IO_EXCEPTION",
          ERROR_JSON_EXCEPTION: "ERROR_JSON_EXCEPTION",
          ERROR_PASSWORD_MISSING: "ERROR_PASSWORD_MISSING",
          ERROR_LIMIT_EXCEEDED: "ERROR_LIMIT_EXCEEDED",
          ERROR_USER_NOT_LOGGED_IN: "ERROR_USER_NOT_LOGGED_IN",
          ERROR_INVALID_GUID: "ERROR_INVALID_GUID",
          ERROR_PASSWORD_MISSING_MESSAGE: "Password is mandatory for a password group",
          ERROR_LIMIT_EXCEEDED_MESSAGE: "Limit Exceeded Max limit of %s",
          ERROR_USER_NOT_LOGGED_IN_MESSAGE: "Please log in to CometChat before calling this method",
          ERROR_INVALID_GUID_MESSAGE: "Please provide a valid GUID",
          ERROR_DEFAULT_MESSAGE: "Something went wrong",
          ERR_SETTINGS_HASH_OUTDATED: "ERR_SETTINGS_HASH_OUTDATED",
          ERR_NO_AUTH: "ERR_NO_AUTH"
        }, a.CALL_ERROR = {
          CALL_ALREADY_INITIATED: {
            code: "CALL_ALREADY_INITIATED",
            name: "CALL_ALREADY_INITIATED",
            message: "There is already call in progress",
            details: {}
          },
          ERROR_IN_CALLING: {
            code: "CALL_IN_PROGRESS",
            name: "CALL_ALREADY_INITIATED",
            message: "There is already call in progress",
            details: {}
          },
          CANNOT_ACCEPT_CALL: {
            code: "CALL_IN_PROGRESS",
            name: "CALL_IN_PROGRESS",
            message: "There is already a call in progress",
            details: {}
          },
          NOT_INITIALIZED: {
            code: "NOT_INITIALIZED",
            name: "NOT_INITIALIZED",
            message: "Please call the CometChat.init() method before calling any other methods related to CometChat.",
            details: {}
          },
          NOT_LOGGED_IN: {
            code: "NOT_LOGGED_IN",
            name: "NOT_LOGGED_IN",
            message: "Please login before starting a call.",
            details: {}
          },
          SESSION_ID_REQUIRED: {
            code: "SESSION_ID_REQUIRED",
            name: "SESSION_ID_REQUIRED",
            message: "Please make sure you are passing correct session id.",
            details: {}
          },
          CALL_SETTINGS_REQUIRED: {
            code: "CALL_SETTINGS_REQUIRED",
            name: "CALL_SETTINGS_REQUIRED",
            message: "Please make sure you are passing the call settings object.",
            details: {}
          },
          JWT_NOT_FOUND: {
            code: "JWT_NOT_FOUND",
            name: "JWT_NOT_FOUND",
            message: "There was some issue while fetching JWT from API.",
            details: {}
          }
        }, a.PARAMETER_ERROR = { PARAMETER_REQUIRED: {
          code: "%s_NOT_PROVIDED",
          name: "%s_NOT_PROVIDED",
          message: "please provide the %s.",
          details: {}
        } }, a.GENERAL_ERROR = {
          MUST_BE_A_STRING: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s should be a string.",
            details: {}
          },
          MUST_BE_A_NUMBER: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s should be a number.",
            details: {}
          },
          MUST_BE_A_OBJECT: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s should be a object.",
            details: {}
          },
          MUST_BE_AN_ARRAY: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s should be an array.",
            details: {}
          },
          MUST_BE_A_BOOLEAN: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s should be a boolean.",
            details: {}
          },
          MUST_BE_A_BLOB: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s should be a blob.",
            details: {}
          },
          INVALID: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "Invalid %s. Please provide a valid %s.",
            details: {}
          },
          METHOD_COMPULSORY: {
            code: "%s_IS_COMPULSORY",
            name: "%s_IS_COMPULSORY",
            message: "%s is required.",
            details: {}
          },
          LIMIT_EXCEEDED: {
            code: "ERROR_%s_EXCEEDED",
            name: "ERROR_%s_EXCEEDED",
            message: "Limit exceeded max limit of %s.",
            details: {}
          },
          MUST_BE_A_POSITIVE_NUMBER: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s should be a postive integer greater than 0.",
            details: {}
          },
          INVALID_MEDIA_FILE: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "The message type does not match the file's mime type.",
            details: {}
          },
          EMPTY_STRING: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s cannot be empty.",
            details: {}
          },
          MISSING_KEY: {
            code: "MISSING_KEY",
            name: "MISSING_KEY",
            message: "The key %s is missing from the %s object.",
            details: {}
          },
          EMPTY_ARRAY: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "The parameter %s should be an array and it cannot be empty.",
            details: {}
          },
          INVALID_SEARCH_KEYWORD: {
            code: "INVALID_SEARCH_KEYWORD",
            name: "INVALID_SEARCH_KEYWORD",
            message: "Invalid search keyword. Please provide a valid search keyword.",
            details: {}
          },
          INVALID_GROUP_PROPERTY: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "Invalid %s provided for the group. Please provide a valid %s.",
            details: {}
          },
          INVALID_USER_PROPERTY: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "Invalid %s provided for a user. Please provide a valid %s.",
            details: {}
          },
          PARAMETER_MUST_BE_A_NUMBER: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s method accepts parameter as a number.",
            details: {}
          },
          PARAMETER_MUST_BE_AN_ARRAY: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s method accepts parameter as an array.",
            details: {}
          },
          PARAMETER_MUST_BE_A_BOOLEAN: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s method accepts parameter as a boolean.",
            details: {}
          },
          PARAMETER_MUST_BE_A_POSITIVE_NUMBER: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s method accepts parameter to be a positive number greater than 0.",
            details: {}
          },
          PARAMETER_MUST_BE_A_STRING: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s method accepts parameter as a string.",
            details: {}
          },
          PARAMETER_COMPULSORY: {
            code: "%s_IS_COMPULSORY",
            name: "%s_IS_COMPULSORY",
            message: "%s cannot be blank. Please provide a valid %s.",
            details: {}
          },
          PASSWORD_COMPULSORY: {
            code: "%s_IS_COMPULSORY",
            name: "%s_IS_COMPULSORY",
            message: "Password is mandatory for a password group.",
            details: {}
          },
          INVALID_ARRAY: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s",
            details: {}
          }
        }, a.ReceiptErrors = {
          MISSING_PARAMETERS: {
            code: "MISSING_PARAMETERS",
            name: "MISSING_PARAMETERS",
            message: "Expected 4 parameters received 3",
            details: {}
          },
          INVALID_PARAMETER: {
            code: "INVALID_%s",
            name: "INVALID_%s",
            message: "%s",
            details: {}
          },
          NO_WEBSOCKET_CONNECTION: {
            code: "NO_WEBSOCKET_CONNECTION",
            name: "NO_WEBSOCKET_CONNECTION",
            message: "Connection to our Websockets server is broken. Please retry after some time.",
            details: {}
          },
          RECEIPTS_TEMPORARILY_BLOCKED: {
            code: "RECEIPTS_TEMPORARILY_BLOCKED",
            name: "RECEIPTS_TEMPORARILY_BLOCKED",
            message: "Due to high load. Receipts have been blocked for your app.",
            details: {}
          },
          UNKNOWN_ERROR_OCCURRED: {
            code: "UNKNOWN_ERROR_OCCURRED",
            name: "UNKNOWN_ERROR_OCCURRED",
            message: "Unknown error occurred while marking a message as read.",
            details: {}
          }
        }, a.UserErrors = {
          INVALID_STATUS: new e.CometChatException({
            code: "INVALID_STATUS_VALUE",
            name: "INVALID_STATUS_VALUE",
            message: "The `status` parameter accepts only `online` or `offline`.",
            details: ""
          }),
          INVALID_DIRECTION: new e.CometChatException({
            code: "INVALID_DIRECTION_VALUE",
            name: "INVALID_DIRECTION_VALUE",
            message: "The `direction` parameter accepts only `both`, `blockeyByMe` or `hasBlockedMe`.",
            details: ""
          }),
          USER_NOT_LOGGED_IN: new e.CometChatException({
            code: "USER_NOT_LOGGED_IN",
            name: "USER_NOT_LOGGED_IN",
            message: "Please log in to CometChat before calling this method.",
            details: ""
          })
        }, a.GroupErrors = {
          NOT_A_GROUP: new e.CometChatException({
            code: "NOT_A_GROUP",
            message: "Please use group class to construct a new group."
          }),
          INVALID_SCOPE: new e.CometChatException({
            code: "INVALID_SCOPE_VALUE",
            name: "INVALID_SCOPE_VALUE",
            message: "Scope can be `admin`, `moderator` or `participant`.",
            details: ""
          }),
          INVALID_GROUP_TYPE: new e.CometChatException({
            code: "INVALID_GROUP_TYPE",
            name: "INVALID_GROUP_TYPE",
            message: "Group type can be `public`, `private`, `protected` or `password`.",
            details: ""
          })
        }, a.ConversationErrors = {
          INVALID_CONVERSATION_TYPE: {
            code: "INVALID_CONVERSATION_TYPE",
            name: "INVALID_CONVERSATION_TYPE",
            message: "Conversation type can be `user` or `group`.",
            details: "Please check the value of conversationType."
          },
          CONVERSATION_NOT_FOUND: {
            code: "CONVERSATION_NOT_FOUND",
            name: "CONVERSATION_NOT_FOUND",
            message: "Conversation for %s %s not found.",
            details: "Please check the value of conversationWith and conversationType."
          }
        }, a.AIErrors = {
          NO_CONVERSATION_STARTER: {
            code: "NO_CONVERSATION_STARTER",
            name: "NO_CONVERSATION_STARTER",
            message: "Unable to get conversation starter for this conversation.",
            details: ""
          },
          NO_SMART_REPLY: {
            code: "NO_SMART_REPLY",
            name: "NO_SMART_REPLY",
            message: "Unable to get smart reply for this conversation.",
            details: ""
          },
          NO_CONVERSATION_SUMMARY: {
            code: "NO_CONVERSATION_SUMMARY",
            name: "NO_CONVERSATION_SUMMARY",
            message: "Unable to get summary of the conversation.",
            details: ""
          },
          NO_ASSISTANCE: {
            code: "EMPTY_RESPONSE",
            name: "EMPTY_RESPONSE",
            message: "Unable to get a suggestion.",
            details: ""
          }
        }, a.ExtensionErrors = {
          INVALID_EXTENSION: {
            code: "ERROR_INVALID_EXTENSION",
            name: "ERROR_INVALID_EXTENSION",
            message: "The provided extension cannot be null or empty. Please provide a valid extension.",
            details: {}
          },
          EXTENSION_NOT_FOUND: {
            code: "ERROR_EXTENSION_NOT_FOUND",
            name: "ERROR_EXTENSION_NOT_FOUND",
            message: "The provided extension could not be found.",
            details: {}
          }
        }, a.AIFeatureError = { INVALID_AI_FEATURE: {
          code: "ERROR_INVALID_AI_FEATURE",
          name: "ERROR_INVALID_AI_FEATURE",
          message: "The provided AI Feature cannot be null or empty. Please provide a valid AI Feature.",
          details: {}
        } }, a.MessageErrors = { INVALID_RECEIVER_TYPE: {
          code: "INVALID_RECEIVER_TYPE",
          name: "INVALID_RECEIVER_TYPE",
          message: "Receiver type can be `user` or `group`.",
          details: "Please check the value of receiverType."
        } }, a.FeatureRestrictionErrors = {
          INVALID_FEATURE: {
            code: "ERROR_INVALID_FEATURE",
            name: "ERROR_INVALID_FEATURE",
            message: "The provided feature cannot be null or empty. Please provide a valid feature.",
            details: {}
          },
          FEATURE_NOT_FOUND: {
            code: "ERROR_FEATURE_NOT_FOUND",
            name: "ERROR_FEATURE_NOT_FOUND",
            message: "The provided feature could not be found.",
            details: {}
          }
        }, a.PresenceConstatnts = { STATUS: {
          ONLINE: "online",
          AVAILABLE: "available",
          OFFLINE: "offline",
          JOINED: "JOINED",
          LEFT: "LEFT"
        } }, a.PresenceConstants = { STATUS: {
          ONLINE: "online",
          AVAILABLE: "available",
          OFFLINE: "offline",
          JOINED: "JOINED",
          LEFT: "LEFT"
        } }, a.APP_SETTINGS = {
          APP_SETTINGS: "app_settings",
          KEYS: {
            CHAT_HOST: "CHAT_HOST",
            CHAT_USE_SSL: "CHAT_USE_SSL",
            GROUP_SERVICE: "GROUP_SERVICE",
            CALL_SERVICE: "CALL_SERVICE",
            CHAT_WS_PORT: "CHAT_WS_PORT",
            CHAT_WSS_PORT: "CHAT_WSS_PORT",
            CHAT_HTTP_BIND_PORT: "CHAT_HTTP_BIND_PORT",
            CHAT_HTTPS_BIND_PORT: "CHAT_HTTPS_BIND_PORT",
            ADMIN_API_HOST: "ADMIN_API_HOST",
            CLIENT_API_HOST: "CLIENT_API_HOST",
            WEBRTC_HOST: "WEBRTC_HOST",
            WEBRTC_USE_SSL: "WEBRTC_USE_SSL",
            WEBRTC_WS_PORT: "WEBRTC_WS_PORT",
            WEBRTC_WSS_PORT: "WEBRTC_WSS_PORT",
            WEBRTC_HTTP_BIND_PORT: "WEBRTC_HTTP_BIND_PORT",
            WEBRTC_HTTPS_BIND_PORT: "WEBRTC_HTTPS_BIND_PORT",
            EXTENSION_LIST: "extensions",
            EXTENSION_KEYS: {
              ID: "id",
              NAME: "name"
            },
            JID_HOST_OVERRIDE: "JID_HOST_OVERRIDE",
            CHAT_HOST_OVERRIDE: "CHAT_HOST_OVERRIDE",
            CHAT_HOST_APP_SPECIFIC: "CHAT_HOST_APP_SPECIFIC",
            MODE: "MODE",
            CONNECTION_TYPE: "connection_type",
            DEFAULT_MODE: "DEFAULT",
            LIMITED_TRANSIENT: "LIMITED_TRANSIENT",
            NO_TRANSIENT: "NO_TRANSIENT",
            POLLING_ENABLED: "POLLING_ENABLED",
            POLLING_INTERVAL: "POLLING_INTERVAL",
            ANALYTICS_PING_DISABLED: "ANALYTICS_PING_DISABLED",
            ANALYTICS_HOST: "ANALYTICS_HOST",
            ANALYTICS_VERSION: "ANALYTICS_VERSION",
            ANALYTICS_USE_SSL: "ANALYTICS_USE_SSL",
            SETTINGS_HASH: "settingsHash",
            SETTINGS_HASH_RECEIVED_AT: "settingsHashReceivedAt",
            DENY_FALLBACK_TO_POLLING: "DENY_FALLBACK_TO_POLLING",
            APP_VERSION: "APP_VERSION",
            MAIN_DOMAIN: "MAIN_DOMAIN",
            CHAT_API_VERSION: "CHAT_API_VERSION",
            WS_API_VERSION: "WS_API_VERSION",
            REGION: "REGION",
            EXTENSION_DOMAIN: "EXTENSION_DOMAIN",
            WEBRTC_API_SUBDOMAIN: "WEBRTC_API_SUBDOMAIN",
            WEBRTC_WEB_FRONTEND_HOST: "WEBRTC_WEB_FRONTEND_HOST",
            WEBRTC_WEB_FRONTEND_VERSION: "WEBRTC_WEB_FRONTEND_VERSION",
            SECURED_MEDIA_HOST: "SECURED_MEDIA_HOST",
            PARAMETERS: "parameters",
            CORE_CONVERSATIONS_UPDATE_ON_CALL_ACTIVITIES: "core.conversations.updateOnCallActivity",
            CORE_CONVERSATIONS_UPDATE_ON_GROUP_ACTIONS: "core.conversations.updateOnGroupActions",
            CORE_CONVERSATIONS_UPDATE_ON_CUSTOM_MESSAGES: "core.conversations.updateOnCustomMessage",
            CORE_CONVERSATIONS_UPDATE_ON_REPLIES: "core.conversations.updateOnReplies",
            FLAG_REASONS: "flagReasons",
            FILE_SIZE_MAX: "file.size.max",
            FILE_COUNT_MAX: "file.count.max"
          }
        }, a.UPLOAD_CONSTANTS = {
          DEFAULT_FILE_SIZE_MAX: 104857600,
          DEFAULT_FILE_COUNT_MAX: 10,
          DEFAULT_CONCURRENCY: 1,
          STALL_TIMEOUT_MS: 3e4,
          PROGRESS_THROTTLE_PERCENT: 1,
          PRESIGN_TTL_MS: 9e5
        }, a.COMMON_UTILITY_CONSTANTS = { TYPE_CONSTANTS: {
          BOOLEAN: "boolean",
          STRING: "string",
          OBJECT: "object",
          NUMBER: "number"
        } }, a.CONNECTION_STATUS = {
          CONNECTED: "connected",
          CONNECTING: "connecting",
          DISCONNECTED: "disconnected",
          FEATURE_THROTTLED: "featureThrottled"
        }, a.SESSION_STORE = { SESSION_ID: "sessionId" }, (o = a.REACTION_ACTION || (a.REACTION_ACTION = {})).REACTION_ADDED = "message_reaction_added", o.REACTION_REMOVED = "message_reaction_removed", a.API_ERROR_CODES = { AUTH_ERR_AUTH_TOKEN_NOT_FOUND: "AUTH_ERR_AUTH_TOKEN_NOT_FOUND" }, a.PROSODY_API = {
          DOMAIN_PREFIX: "xmpp",
          PATH: {
            ROOM: "room",
            ROOM_SIZE: "room-size",
            SESSIONS: "sessions"
          },
          RESPONSE: { PARTICIPANTS: "participants" },
          QUERY_PARAMETERS: {
            DOMAIN: "domain",
            ROOM: "room"
          }
        }, a.ProsodyApiErrors = {
          INVALID_SESSIONID: {
            code: "ERROR_INVALID_SESSIONID",
            name: "ERROR_INVALID_SESSIONID",
            message: "The provided sessionId cannot be null or empty. Please provide a valid sessionId.",
            details: ""
          },
          INVALID_TYPE: {
            code: "ERROR_INVALID_TYPE",
            name: "ERROR_INVALID_TYPE",
            message: "The provided type cannot be null or empty. Please provide a valid type.",
            details: ""
          }
        }, a.JWT_API = { KEYS: {
          PASSTHROUGH: "passthrough",
          EXPAND: "expand"
        } }, a.ONLINE_MEMBER_COUNT_API = {
          ENDPOINTS: { GET_ONLINE_MEMBER_COUNT: "api/%s/online-members" },
          RESPONSE: {
            ONLINE_USERS_COUNT: "onlineUsersCount",
            GROUPS: "groups"
          },
          ERRORS: { INVALID_GROUPLIST: {
            code: "ERROR_INVALID_GROUPLIST",
            name: "ERROR_INVALID_GROUPLIST",
            message: "Grouplist cannot be null or empty.",
            details: ""
          } }
        }, a.ADDITIONAL_CONSTANTS = { SECURE_URL_PROPERTY: "fat" }, a.AI_FEATURE_ACCESSIBLE = "features.ai.accessible", a.AI_FEATURE_ENABLED = "features.ai.enabled", a.AI_SLUG_ACCESSIBLE = "features.ai.%s.accessible", a.AI_SLUG_ENABLED = "features.ai.%s.enabled", (s = a.AttachmentType || (a.AttachmentType = {})).IMAGE = "image", s.VIDEO = "video", s.AUDIO = "audio", s.FILE = "file", (r = a.ModerationStatus || (a.ModerationStatus = {})).PENDING = "pending", r.APPROVED = "approved", r.DISAPPROVED = "disapproved", r.UNMODERATED = "unmoderated", a.AI_ASSISTANT_EVENTS = {
          RUN_STARTED: "run_started",
          RUN_FINISHED: "run_finished",
          TEXT_MESSAGE_START: "text_message_start",
          TEXT_MESSAGE_END: "text_message_end",
          TEXT_MESSAGE_CONTENT: "text_message_content",
          TOOL_CALL_STARTED: "tool_call_start",
          TOOL_CALL_ENDED: "tool_call_end",
          TOOL_CALL_RESULT: "tool_call_result",
          TOOL_CALL_ARGUMENT: "tool_call_args",
          CARD_START: "card_start",
          CARD: "card",
          CARD_END: "card_end"
        };
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(T, f, P, m) {
          return new (P || (P = Promise))(function(D, V) {
            function M(de) {
              try {
                le(m.next(de));
              } catch (W) {
                V(W);
              }
            }
            function z(de) {
              try {
                le(m.throw(de));
              } catch (W) {
                V(W);
              }
            }
            function le(de) {
              var W;
              de.done ? D(de.value) : (W = de.value, W instanceof P ? W : new P(function(q) {
                q(W);
              })).then(M, z);
            }
            le((m = m.apply(T, f || [])).next());
          });
        }, i = this && this.__generator || function(T, f) {
          var P, m, D, V, M = {
            label: 0,
            sent: function() {
              if (1 & D[0]) throw D[1];
              return D[1];
            },
            trys: [],
            ops: []
          };
          return V = {
            next: z(0),
            throw: z(1),
            return: z(2)
          }, typeof Symbol == "function" && (V[Symbol.iterator] = function() {
            return this;
          }), V;
          function z(le) {
            return function(de) {
              return (function(W) {
                if (P) throw new TypeError("Generator is already executing.");
                for (; M; ) try {
                  if (P = 1, m && (D = 2 & W[0] ? m.return : W[0] ? m.throw || ((D = m.return) && D.call(m), 0) : m.next) && !(D = D.call(m, W[1])).done) return D;
                  switch (m = 0, D && (W = [2 & W[0], D.value]), W[0]) {
                    case 0:
                    case 1:
                      D = W;
                      break;
                    case 4:
                      return M.label++, {
                        value: W[1],
                        done: !1
                      };
                    case 5:
                      M.label++, m = W[1], W = [0];
                      continue;
                    case 7:
                      W = M.ops.pop(), M.trys.pop();
                      continue;
                    default:
                      if (!(D = 0 < (D = M.trys).length && D[D.length - 1]) && (W[0] === 6 || W[0] === 2)) {
                        M = 0;
                        continue;
                      }
                      if (W[0] === 3 && (!D || W[1] > D[0] && W[1] < D[3])) {
                        M.label = W[1];
                        break;
                      }
                      if (W[0] === 6 && M.label < D[1]) {
                        M.label = D[1], D = W;
                        break;
                      }
                      if (D && M.label < D[2]) {
                        M.label = D[2], M.ops.push(W);
                        break;
                      }
                      D[2] && M.ops.pop(), M.trys.pop();
                      continue;
                  }
                  W = f.call(T, M);
                } catch (q) {
                  W = [6, q], m = 0;
                } finally {
                  P = D = 0;
                }
                if (5 & W[0]) throw W[1];
                return {
                  value: W[0] ? W[1] : void 0,
                  done: !0
                };
              })([le, de]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.validateQuestion = a.updatePropertiesWithDynamicValue = a.validateConversationType = a.validateUpdateUser = a.validateCreateUser = a.validateMessage = a.validateChatType = a.validateMsgId = a.validateArray = a.validateHideMessagesFromBlockedUsers = a.validateId = a.validateCreateGroup = a.validateJoinGroup = a.validateUpdateGroup = a.validateScope = a.isAudio = a.isVideo = a.isImage = a.getUploadLimits = a.getUpdatedSettings = a.getAppSettings = a.getCurrentTime = a.Logger = a.createUidFromJid = a.format = a.getOrdinalSuffix = a.isFalsy = a.isTruthy = a.isObject = a.getJidHost = a.getChatHost = a.resolveTimeout = void 0;
        var S = g(19), E = g(0), n = g(4), o = g(2), s = g(25), r = g(27), e = g(28), l = g(6), u = g(13), C = g(29);
        function c(T) {
          return T != null && (typeof T == "string" && (T = T.trim()), typeof T == "object" && Object.keys(T).length === 0 && (T = void 0)), [
            "",
            0,
            "0",
            !1,
            null,
            "null",
            void 0,
            "undefined"
          ].includes(T);
        }
        function d(T) {
          for (var f = [], P = 1; P < arguments.length; P++) f[P - 1] = arguments[P];
          return T.split("%s").reduce(function(m, D, V) {
            return m + D + (f[V] || "");
          }, "");
        }
        a.resolveTimeout = function(T) {
          if (T == null || T == null) return l.DEFAULT_TIMEOUT;
          var f = Math.floor(T);
          return f <= 0 ? l.DEFAULT_TIMEOUT : f;
        }, a.getChatHost = function(T) {
          return T[E.APP_SETTINGS.KEYS.CHAT_HOST_OVERRIDE] ? T[E.APP_SETTINGS.KEYS.CHAT_HOST_OVERRIDE] : T[E.APP_SETTINGS.KEYS.CHAT_HOST_APP_SPECIFIC] ? T[E.APP_SETTINGS.KEYS.CHAT_HOST_APP_SPECIFIC] : T[E.APP_SETTINGS.KEYS.CHAT_HOST];
        }, a.getJidHost = function(T) {
          return T[E.APP_SETTINGS.KEYS.JID_HOST_OVERRIDE] ? T[E.APP_SETTINGS.KEYS.JID_HOST_OVERRIDE] : T[E.APP_SETTINGS.KEYS.CHAT_HOST];
        }, a.isObject = function(T) {
          return T instanceof Object && T.constructor === Object;
        }, a.isTruthy = function(T) {
          return [
            !0,
            1,
            "1",
            "true",
            "TRUE"
          ].includes(T);
        }, a.isFalsy = c, a.getOrdinalSuffix = function(T) {
          var f = T % 10, P = T % 100;
          return f == 1 && P != 11 ? T + "st" : f == 2 && P != 12 ? T + "nd" : f == 3 && P != 13 ? T + "rd" : T + "th";
        }, a.format = d, a.createUidFromJid = function(T) {
          return T.substring(T.lastIndexOf("]") + 1, T.lastIndexOf("@"));
        };
        var t = (function() {
          function T() {
          }
          return T.log = function(f, P) {
          }, T.error = function(f, P) {
          }, T.info = function(f, P) {
          }, T;
        })();
        function h() {
          return new Promise(function(T, f) {
            S.LocalStorage.getInstance().get(E.LOCAL_STORE.KEY_APP_SETTINGS).then(function(P) {
              c(P) ? I().then(function(m) {
                T(m);
              }, function(m) {
                f(m);
              }) : T(P);
            }, function(P) {
              f(P);
            });
          });
        }
        function I() {
          return new Promise(function(T, f) {
            n.makeApiCall("appSettings").then(function(P) {
              S.LocalStorage.getInstance().set(E.LOCAL_STORE.KEY_APP_SETTINGS, P.data), P.data.MODE && l.CometChat.setMode(P.data.MODE), T(P.data);
            }, function(P) {
              f(new o.CometChatException(P.error));
            });
          });
        }
        a.Logger = t, a.getCurrentTime = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, a.getAppSettings = h, a.getUpdatedSettings = I, a.getUploadLimits = function() {
          return p(this, void 0, void 0, function() {
            var T, f, P, m;
            return i(this, function(D) {
              switch (D.label) {
                case 0:
                  T = {}, D.label = 1;
                case 1:
                  return D.trys.push([
                    1,
                    3,
                    ,
                    4
                  ]), [4, h()];
                case 2:
                  return T = D.sent(), [3, 4];
                case 3:
                  return f = D.sent(), t.error("Helper: getUploadLimits", f), T = {}, [3, 4];
                case 4:
                  return P = Number(T?.[E.APP_SETTINGS.KEYS.FILE_COUNT_MAX]) || E.UPLOAD_CONSTANTS.DEFAULT_FILE_COUNT_MAX, m = Number(T?.[E.APP_SETTINGS.KEYS.FILE_SIZE_MAX]) || E.UPLOAD_CONSTANTS.DEFAULT_FILE_SIZE_MAX, [2, {
                    countMax: P,
                    sizeMax: m
                  }];
              }
            });
          });
        }, a.isImage = function(T) {
          var f;
          return T.type && T.type.toLowerCase().includes("image") && (f = !0), f;
        }, a.isVideo = function(T) {
          var f;
          return T.type && T.type.toLowerCase().includes("video") && (f = !0), f;
        }, a.isAudio = function(T) {
          var f;
          return T.type && T.type.toLowerCase().includes("audio") && (f = !0), f;
        }, a.validateScope = function(T) {
          return typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "SCOPE", "SCOPE", "Scope"))) : c(T) ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "SCOPE", "SCOPE", "scope", "scope"))) : T != l.CometChat.GROUP_MEMBER_SCOPE.ADMIN && T != l.CometChat.GROUP_MEMBER_SCOPE.MODERATOR && T != l.CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT ? new o.CometChatException(E.GroupErrors.INVALID_SCOPE) : void 0;
        }, a.validateUpdateGroup = function(T) {
          return T.hasOwnProperty(E.GroupConstants.KEYS.GUID) ? typeof T[E.GroupConstants.KEYS.GUID] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID"))) : c(T[E.GroupConstants.KEYS.GUID]) ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID"))) : T.hasOwnProperty(E.GroupConstants.KEYS.NAME) && T[E.GroupConstants.KEYS.NAME] === "" ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "GROUP_NAME", "GROUP_NAME", "Group name"))) : void 0 : new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
        }, a.validateJoinGroup = function(T, f, P) {
          if (typeof T == E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.OBJECT) {
            if (!T.hasOwnProperty(E.GroupConstants.KEYS.GUID)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
            if (typeof T[E.GroupConstants.KEYS.GUID] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
            if (c(T[E.GroupConstants.KEYS.GUID])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
            if (!T.hasOwnProperty(E.GroupConstants.KEYS.TYPE)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_TYPE", "GROUP_TYPE", "Group type", "Group type")));
            if (typeof T[E.GroupConstants.KEYS.TYPE] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
            if (c(T[E.GroupConstants.KEYS.TYPE])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
            if (T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PUBLIC && T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PASSWORD && T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PROTECTED && T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PRIVATE) return new o.CometChatException(E.GroupErrors.INVALID_GROUP_TYPE);
            if (T[E.GroupConstants.KEYS.TYPE].toLowerCase() == l.CometChat.GROUP_TYPE.PASSWORD) {
              if (!T.hasOwnProperty(E.GroupConstants.KEYS.PASSWORD)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PASSWORD_COMPULSORY), "PASSWORD", "PASSWORD")));
              if (typeof T[E.GroupConstants.KEYS.PASSWORD] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
              if (c(T[E.GroupConstants.KEYS.PASSWORD])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")));
            }
          } else {
            if (T !== void 0) {
              if (typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
              if (c(T)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
            }
            if (f !== void 0) {
              if (typeof f !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
              if (c(f)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
              if (f.toLowerCase() != l.CometChat.GROUP_TYPE.PUBLIC && f.toLowerCase() != l.CometChat.GROUP_TYPE.PASSWORD && f.toLowerCase() != l.CometChat.GROUP_TYPE.PROTECTED && f.toLowerCase() != l.CometChat.GROUP_TYPE.PRIVATE) return new o.CometChatException(E.GroupErrors.INVALID_GROUP_TYPE);
              if (f.toLowerCase() == l.CometChat.GROUP_TYPE.PASSWORD) {
                if (typeof P !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
                if (c(P)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")));
              }
            }
          }
        }, a.validateCreateGroup = function(T) {
          if (!T.hasOwnProperty(E.GroupConstants.KEYS.GUID)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "GUID", "GUID", "GUID", "GUID")));
          if (typeof T[E.GroupConstants.KEYS.GUID] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
          if (c(T[E.GroupConstants.KEYS.GUID])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GUID", "GUID", "GUID", "GUID")));
          if (!T.hasOwnProperty(E.GroupConstants.KEYS.NAME)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_NAME", "GROUP_NAME", "Group name", "Group name")));
          if (typeof T[E.GroupConstants.KEYS.NAME] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_NAME", "GROUP_NAME", "Group name")));
          if (c(T[E.GroupConstants.KEYS.NAME])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_NAME", "GROUP_NAME", "name", "name")));
          if (!T.hasOwnProperty(E.GroupConstants.KEYS.TYPE)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "GROUP_TYPE", "GROUP_TYPE", "Group type", "Group type")));
          if (typeof T[E.GroupConstants.KEYS.TYPE] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GROUP_TYPE", "GROUP_TYPE", "Group type")));
          if (c(T[E.GroupConstants.KEYS.TYPE])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "GROUP_TYPE", "GROUP_TYPE", "type", "type")));
          if (T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PUBLIC && T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PASSWORD && T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PROTECTED && T[E.GroupConstants.KEYS.TYPE].toLowerCase() != l.CometChat.GROUP_TYPE.PRIVATE) return new o.CometChatException(E.GroupErrors.INVALID_GROUP_TYPE);
          if (T[E.GroupConstants.KEYS.TYPE].toLowerCase() == l.CometChat.GROUP_TYPE.PASSWORD) {
            if (!T.hasOwnProperty(E.GroupConstants.KEYS.PASSWORD)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PASSWORD_COMPULSORY), "PASSWORD", "PASSWORD")));
            if (typeof T[E.GroupConstants.KEYS.PASSWORD] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "PASSWORD", "PASSWORD", "Password")));
            if (c(T[E.GroupConstants.KEYS.PASSWORD])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_GROUP_PROPERTY), "PASSWORD", "PASSWORD", "password", "password")));
          }
          if (T.hasOwnProperty(E.GroupConstants.KEYS.TAGS)) {
            if (!Array.isArray(T[E.GroupConstants.KEYS.TAGS])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_AN_ARRAY), "GROUP_TAGS", "GROUP_TAGS", "Group tags")));
            if (T[E.GroupConstants.KEYS.TAGS].length === 0) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_ARRAY), "GROUP_TAGS", "GROUP_TAGS", "Group tags")));
          }
        }, a.validateId = function(T, f) {
          if (f === "user") {
            if (typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID")));
            if (c(T)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "UID", "UID", "UID", "UID")));
          }
          if (f === "group") {
            if (typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "GUID", "GUID", "GUID")));
            if (c(T)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")));
          }
          if (f === "bot") {
            if (typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "BOT_ID", "BOT_ID", "BOT_ID")));
            if (c(T)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "BOT_ID", "BOT_ID", "BOT_ID", "BOT_ID")));
          }
        }, a.validateHideMessagesFromBlockedUsers = function(T) {
          if (typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_BOOLEAN), "HIDE_MESSAGES_FROM_BLOCKED_USERS", "HIDE_MESSAGES_FROM_BLOCKED_USERS", "hideMessagesFromBlockedUsers")));
        }, a.validateArray = function(T, f) {
          var P = "List should be an array.";
          return P = f === "blockUsers" ? "blockUsers() method accepts an array of users." : f === "unblockUsers" ? "unblockUsers() method accepts an array of users." : f === "groupMembers" ? "addMembersToGroup() method accepts members list as an array of users." : "addMembersToGroup() method accepts bannedMembers list as an array of users.", typeof T != E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.OBJECT ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_ARRAY), "USER_LIST", "USER_LIST", P))) : Array.isArray(T) ? void 0 : new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_ARRAY), "USER_LIST", "USER_LIST", P)));
        }, a.validateMsgId = function(T) {
          return isNaN(T) ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "Message Id"))) : c(T) ? new o.CometChatException(u.ERRORS.PARAMETER_MISSING) : void 0;
        }, a.validateChatType = function(T) {
          return typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type"))) : c(T) ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "RECEIVER_TYPE", "RECEIVER_TYPE", "receiver type", "receiver type"))) : T != E.MessageConstatnts.RECEIVER_TYPE.GROUP && T != E.MessageConstatnts.RECEIVER_TYPE.USER ? new o.CometChatException(E.MessageErrors.INVALID_RECEIVER_TYPE) : void 0;
        }, a.validateMessage = function(T) {
          var f = T;
          if (typeof f.getReceiverId() !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_ID", "RECEIVER_ID", "Receiver Id")));
          if (c(f.getReceiverId())) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "RECEIVER_ID", "RECEIVER_ID", "receiver id", "receiver id")));
          if (typeof f.getReceiverType() !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver Type")));
          if (c(f.getReceiverType())) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "RECEIVER_TYPE", "RECEIVER_TYPE", "receiver type", "receiver type")));
          if (f.getReceiverType() != E.MessageConstatnts.RECEIVER_TYPE.GROUP && f.getReceiverType() != E.MessageConstatnts.RECEIVER_TYPE.USER) return new o.CometChatException(E.MessageErrors.INVALID_RECEIVER_TYPE);
          if (T instanceof s.TextMessage) {
            var P = T;
            if (typeof P.getText() !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "MESSAGE_TEXT", "MESSAGE_TEXT", "Message text")));
            if (P.getText().trim() === "") return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "MESSAGE_TEXT", "MESSAGE_TEXT", "Message text")));
          }
          if (T instanceof r.MediaMessage) {
            var m = T;
            if (m.getData() && m.getData().hasOwnProperty("attachments")) for (var D = m.getAttachments(), V = 0; V < D.length; V++) {
              if (!D[V].getExtension()) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MISSING_KEY), "extension", "Attachment")));
              if (!D[V].getMimeType()) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MISSING_KEY), "mimeType", "Attachment")));
              if (!D[V].getName()) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MISSING_KEY), "name", "Attachment")));
              if (!D[V].getUrl()) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MISSING_KEY), "url", "Attachment")));
            }
            if (m.hasOwnProperty("files")) {
              for (V = 0; V < m.files.length; V++) if (!(m.files[V] instanceof Blob)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_BLOB), "MEDIA_OBJECT", "MEDIA_OBJECT", "Media object")));
            }
          }
          if (T instanceof e.CustomMessage && c(T.getCustomData())) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "CUSTOM_DATA", "CUSTOM_DATA", "custom data", "custom data")));
          if (T instanceof C.InteractiveMessage && c(T.getInteractiveData())) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "INTERACTIVE_DATA", "INTERACTIVE_DATA", "interactive data", "interactive data")));
        }, a.validateCreateUser = function(T) {
          if (!T.hasOwnProperty(E.UserConstants.UID)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "UID", "UID", "UID", "UID")));
          if (typeof T[E.UserConstants.UID] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID")));
          if (c(T[E.UserConstants.UID])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_USER_PROPERTY), "UID", "UID", "UID", "UID")));
          if (!T.hasOwnProperty(E.UserConstants.NAME)) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "USER_NAME", "USER_NAME", "User name", "User name")));
          if (typeof T[E.UserConstants.NAME] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "USER_NAME", "USER_NAME", "User name")));
          if (c(T[E.UserConstants.NAME])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_USER_PROPERTY), "USER_NAME", "USER_NAME", "name", "name")));
          if (T.hasOwnProperty(E.UserConstants.AVATAR) && T[E.UserConstants.AVATAR] === "") return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "USER_AVATAR", "USER_AVATAR", "User avatar")));
          if (T.hasOwnProperty(E.UserConstants.META_DATA) && T[E.UserConstants.META_DATA] === "") return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "USER_METADATA", "USER_METADATA", "User metadata")));
          if (T.hasOwnProperty(E.UserConstants.LINK) && T[E.UserConstants.LINK] === "") return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "USER_LINK", "USER_LINK", "User link")));
          if (T.hasOwnProperty(E.UserConstants.STATUS_MESSAGE) && T[E.UserConstants.STATUS_MESSAGE] === "") return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "USER_STATUS_MESSAGE", "USER_STATUS_MESSAGE", "User status message")));
          if (T.hasOwnProperty(E.UserConstants.ROLE) && T[E.UserConstants.ROLE] === "") return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "USER_ROLE", "USER_ROLE", "User role")));
          if (T.hasOwnProperty(E.UserConstants.TAGS)) {
            if (!Array.isArray(T[E.UserConstants.TAGS])) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_AN_ARRAY), "USER_TAGS", "USER_TAGS", "User tags")));
            if (T[E.UserConstants.TAGS].length === 0) return new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_ARRAY), "USER_TAGS", "USER_TAGS", "User tags")));
          }
        }, a.validateUpdateUser = function(T) {
          return T.hasOwnProperty(E.UserConstants.UID) ? typeof T[E.UserConstants.UID] !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "UID", "UID", "UID"))) : c(T[E.UserConstants.UID]) ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID_USER_PROPERTY), "UID", "UID", "UID", "UID"))) : T.hasOwnProperty(E.UserConstants.NAME) && T[E.UserConstants.NAME] === "" ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.EMPTY_STRING), "USER_NAME", "USER_NAME", "User name"))) : void 0 : new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.PARAMETER_COMPULSORY), "UID", "UID", "UID", "UID")));
        }, a.validateConversationType = function(T) {
          return typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "CONVERSATION_TYPE", "CONVERSATION_TYPE", "Conversation type"))) : c(T) ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "CONVERSATION_TYPE", "CONVERSATION_TYPE", "conversation type", "conversation type"))) : (T = T.toLowerCase()) != l.CometChat.RECEIVER_TYPE.USER && T != l.CometChat.RECEIVER_TYPE.GROUP ? new o.CometChatException(E.ConversationErrors.INVALID_CONVERSATION_TYPE) : void 0;
        }, a.updatePropertiesWithDynamicValue = function(T, f, P) {
          return (function m(D) {
            for (var V in D) D.hasOwnProperty(V) && (typeof D[V] == "object" ? m(D[V]) : typeof D[V] == "string" && D[V].includes(f) && !D[V].includes(E.ADDITIONAL_CONSTANTS.SECURE_URL_PROPERTY) && (D[V] += P));
          })(T), T;
        }, a.validateQuestion = function(T) {
          return typeof T !== E.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.MUST_BE_A_STRING), "QUESTION", "QUESTION", "Question"))) : c(T) ? new o.CometChatException(JSON.parse(d(JSON.stringify(E.GENERAL_ERROR.INVALID), "QUESTION", "QUESTION", "question", "question"))) : void 0;
        };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatException = void 0;
        var p = function(i) {
          i.code !== null && i.code !== void 0 && i.code !== "" && (this.code = i.code), i.name !== null && i.name !== void 0 && i.name !== "" && (this.name = i.name), i.message !== null && i.message !== void 0 && i.message !== "" && (this.message = i.message), i.details !== null && i.details !== void 0 && i.details !== "" && (this.details = i.details);
        };
        a.CometChatException = p;
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(o, s) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
            r.__proto__ = e;
          } || function(r, e) {
            for (var l in e) e.hasOwnProperty(l) && (r[l] = e[l]);
          })(o, s);
        }, function(o, s) {
          function r() {
            this.constructor = o;
          }
          p(o, s), o.prototype = s === null ? Object.create(s) : (r.prototype = s.prototype, new r());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Me = a.User = void 0;
        var S = g(2), E = g(13), n = g(0);
        a.Me = (function(o) {
          function s(r) {
            var e = o.call(this, r) || this;
            return e.wsChannel = r.wsChannel, r.jwt && (e.jwt = r.jwt), r.fat && (e.fat = r.fat), e;
          }
          return i(s, o), s.prototype.getWsChannel = function() {
            return this.wsChannel;
          }, s.prototype.getJWT = function() {
            return this.jwt;
          }, s.prototype.getFat = function() {
            return this.fat;
          }, s;
        })(a.User = (function() {
          function o() {
            for (var s = [], r = 0; r < arguments.length; r++) s[r] = arguments[r];
            if (this.hasBlockedMe = !1, this.blockedByMe = !1, this.deactivatedAt = 0, s.length === 1) typeof s[0] === n.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING ? this.uid = s[0] : (this.uid = s[0].uid, this.name = s[0].name, s[0].authToken && (this.authToken = s[0].authToken), s[0].avatar && (this.avatar = s[0].avatar), s[0].lastActiveAt && (this.lastActiveAt = s[0].lastActiveAt), s[0].link && (this.link = s[0].link), s[0].metadata && (this.metadata = s[0].metadata), s[0].role && (this.role = s[0].role), s[0].statusMessage && (this.statusMessage = s[0].statusMessage), s[0].status && s[0].status !== "offline" ? this.status = "online" : this.status = "offline", s[0].tags && (this.tags = s[0].tags), s[0].deactivatedAt && (this.deactivatedAt = s[0].deactivatedAt));
            else {
              if (s.length !== 2) throw new S.CometChatException(E.ERRORS.PARAMETER_MISSING);
              this.uid = s[0], this.name = s[1];
            }
          }
          return o.prototype.getUid = function() {
            return this.uid.toString();
          }, o.prototype.setUid = function(s) {
            this.uid = s;
          }, o.prototype.getName = function() {
            return this.name.toString();
          }, o.prototype.setName = function(s) {
            s && (this.name = s);
          }, o.prototype.getAuthToken = function() {
            return this.authToken;
          }, o.prototype.setAuthToken = function(s) {
            this.authToken = s;
          }, o.prototype.getAvatar = function() {
            return this.avatar;
          }, o.prototype.setAvatar = function(s) {
            this.avatar = s;
          }, o.prototype.getLastActiveAt = function() {
            return this.lastActiveAt;
          }, o.prototype.setLastActiveAt = function(s) {
            this.lastActiveAt = s;
          }, o.prototype.getLink = function() {
            return this.link;
          }, o.prototype.setLink = function(s) {
            return this.link = s;
          }, o.prototype.getMetadata = function() {
            return this.metadata;
          }, o.prototype.setMetadata = function(s) {
            this.metadata = s;
          }, o.prototype.getRole = function() {
            return this.role;
          }, o.prototype.setRole = function(s) {
            this.role = s;
          }, o.prototype.getStatus = function() {
            return this.status;
          }, o.prototype.setStatus = function(s) {
            this.status = s;
          }, o.prototype.getStatusMessage = function() {
            return this.statusMessage;
          }, o.prototype.setStatusMessage = function(s) {
            this.statusMessage = s;
          }, o.prototype.setBlockedByMe = function(s) {
            this.blockedByMe = s;
          }, o.prototype.getBlockedByMe = function() {
            return this.blockedByMe;
          }, o.prototype.setHasBlockedMe = function(s) {
            this.hasBlockedMe = s;
          }, o.prototype.getHasBlockedMe = function() {
            return this.hasBlockedMe;
          }, o.prototype.setTags = function(s) {
            this.tags = s;
          }, o.prototype.getTags = function() {
            return this.tags;
          }, o.prototype.setDeactivatedAt = function(s) {
            this.deactivatedAt = s;
          }, o.prototype.getDeactivatedAt = function() {
            return this.deactivatedAt;
          }, o;
        })());
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__assign || function() {
          return (p = Object.assign || function(e) {
            for (var l, u = 1, C = arguments.length; u < C; u++) for (var c in l = arguments[u]) Object.prototype.hasOwnProperty.call(l, c) && (e[c] = l[c]);
            return e;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.postData = a.makeAdminApiCall = a.makeApiCall = void 0;
        var i = g(50), S = g(6), E = g(1), n = g(2), o = g(13), s = g(0);
        function r(e, l, u, C, c) {
          var d;
          return e === void 0 && (e = ""), l === void 0 && (l = "GET"), u === void 0 && (u = {}), C === void 0 && (C = {}), u = E.isFalsy(u) ? void 0 : (l == "GET" && (e += "?", Object.keys(u).map(function(t, h) {
            e = h === Object.keys(u).length - 1 ? e + t + "=" + u[t] : e + t + "=" + u[t] + "&";
          }), u = void 0), c && (d = new FormData(), Object.keys(u).map(function(t) {
            if (t != "data") {
              if (t == "tags") for (var h = 0; h < u[t].length; h++) d.append(t + "[]", u[t][h]);
              else if (t != "metadata") if (t === "files") for (h = 0; h < u[t].length; h++) d.append(t + "[]", u[t][h]);
              else d.append(t, u[t]);
            } else d.append(t, JSON.stringify(u[t]));
          })), JSON.stringify(u)), fetch(e, {
            method: l,
            mode: "cors",
            cache: "no-cache",
            headers: C,
            redirect: "follow",
            referrer: "no-referrer",
            body: c ? d : u
          });
        }
        a.makeApiCall = function(e, l, u, C, c) {
          e === void 0 && (e = ""), l === void 0 && (l = {}), u === void 0 && (u = {});
          var d = S.CometChat.getInstance(S.CometChat.getAppId());
          return new Promise(function(t, h) {
            try {
              i.getEndPoint(e, l).then(function(I) {
                var T = p({
                  resource: S.CometChat.getSessionId(),
                  appId: S.CometChat.getAppId(),
                  Accept: "application/json",
                  sdk: E.format(s.SDKHeader.sdk, s.SDKHeader.platform, s.SDKHeader.sdkVersion)
                }, c);
                C || (T["Content-Type"] = "application/json"), I.hasOwnProperty("isAIApi") && I.isAIApi && (T.onbehalfofuser = l.onbehalfofuser), I.hasOwnProperty("isAdminApi") && I.isAdminApi ? d.getApiKey() ? T.apiKey = d.getApiKey() : h({ error: {
                  code: "API_KEY_NOT_SET",
                  message: "An apiKey is needed to use the " + e + " api.",
                  name: "API_KEY_NOT_SET"
                } }) : d.getAuthToken() ? T.authToken = d.getAuthToken() : h({ error: {
                  code: "USER_NOT_LOGED_IN",
                  message: "An authToken is need to use the " + e + " end-point. PS- We are aware of the spelling mistake, but in order to maintain backward compatibility we cannot change it :(",
                  name: "User not logged-in"
                } }), r(I.endpoint, I.method, u, T, C).then(function(f) {
                  return f.json();
                }).then(function(f) {
                  if (f.hasOwnProperty("data")) f.data.hasOwnProperty("authToken") && S.CometChat.setAuthToken(f.data.authToken), t(f);
                  else {
                    if (f.hasOwnProperty("error")) {
                      var P = f.error;
                      P.hasOwnProperty("code") && P.code === s.API_ERROR_CODES.AUTH_ERR_AUTH_TOKEN_NOT_FOUND && S.CometChat.getInstance().internalLogout().then(function() {
                        E.Logger.log("CometChat: makeApiCall", "User logged out");
                      });
                    }
                    h(f);
                  }
                }).catch(function(f) {
                  h({ error: o.FETCH_ERROR.ERROR_IN_API_CALL });
                });
              }).catch(function(I) {
                return h;
              });
            } catch (I) {
              h(new n.CometChatException(I));
            }
          });
        }, a.makeAdminApiCall = function(e, l, u, C) {
          e === void 0 && (e = ""), l === void 0 && (l = {}), u === void 0 && (u = {});
          var c = S.CometChat.getInstance(S.CometChat.getAppId());
          return new Promise(function(d, t) {
            i.getEndPoint(e, l).then(function(h) {
              var I = {
                appId: S.CometChat.getAppId(),
                Accept: "application/json",
                sdk: E.format(s.SDKHeader.sdk, s.SDKHeader.platform, s.SDKHeader.sdkVersion)
              };
              C || (I["Content-Type"] = "application/json"), h.hasOwnProperty("isAdminApi") && h.isAdminApi ? c.getApiKey() ? I.apiKey = c.getApiKey() : t({ error: "An apiKey is need to use the " + e + " api." }) : c.getAuthToken() ? I.authToken = c.getAuthToken() : t({ error: "An authToken is need to use the " + e + " api." }), r(h.endpoint, h.method, u, I, C).then(function(T) {
                return T.json();
              }).then(function(T) {
                T.hasOwnProperty("data") ? (T.data.hasOwnProperty("authToken") && S.CometChat.setAuthToken(T.data.authToken), d(T)) : t(T);
              }).catch(function(T) {
                t({ error: o.FETCH_ERROR.ERROR_IN_API_CALL });
              });
            }).catch(function(h) {
              return t;
            });
          });
        }, a.postData = r;
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.NOTIFICATION_FEED = a.STREAM_MESSAGE = a.MODERATION_STATUS_CHANGED = a.KEYS = a.AUTH = a.MESSAGE = a.PRESENCE = a.INTERACTION_RECEIPT = a.RECEIPTS = a.TRANSIENT_MESSAGE = a.MESSAGE_REACTION = a.TYPING_INDICATOR = a.LOGOUT_REASON = a.LOGOUT_CODE = a.READY_STATE = a.WS = void 0, a.WS = { protocol: "wss://" }, a.READY_STATE = {
          CONNECTING: 0,
          OPEN: 1,
          CLOSING: 2,
          CLOSED: 3,
          INVALID_JWT: 4
        }, a.LOGOUT_CODE = 1e3, a.LOGOUT_REASON = "User logged out", a.TYPING_INDICATOR = {
          TYPE: "typing_indicator",
          ACTION: {
            STARTED: "started",
            ENDED: "ended"
          }
        }, a.MESSAGE_REACTION = {
          TYPE: "reaction",
          ACTION: {
            ADDED: "message_reaction_added",
            REMOVED: "message_reaction_removed"
          }
        }, a.TRANSIENT_MESSAGE = { TYPE: "transient_message" }, a.RECEIPTS = {
          TYPE: "receipts",
          ACTION: {
            READ: "read",
            DELIVERED: "delivered",
            READ_BY_ALL: "readByAll",
            DELIVERED_TO_ALL: "deliveredToAll"
          },
          RECEIPT_TYPE: {
            READ_RECEIPT: "read",
            DELIVERY_RECEIPT: "delivery",
            READ_BY_ALL_RECEIPT: "readByAll",
            DELIVERY_TO_ALL_RECEIPT: "deliveredToAll"
          }
        }, a.INTERACTION_RECEIPT = { TYPE: "interaction_completed" }, a.PRESENCE = {
          TYPE: "presence",
          ACTION: {
            ONLINE: "online",
            AVAILABLE: "available",
            OFFLINE: "offline"
          }
        }, a.MESSAGE = { TYPE: "message" }, a.AUTH = { TYPE: "auth" }, a.KEYS = {
          TYPE: "type",
          ACTION: "action",
          APP_ID: "appId",
          RECEIVER: "receiver",
          RECEIVER_TYPE: "receiverType",
          DEVICE_ID: "deviceId",
          BODY: "body",
          USER: "user",
          METADATA: "metadata",
          MESSAGE_ID: "messageId",
          TIMESTAMP: "timestamp",
          STATUS: "status",
          CODE: "code",
          SENDER: "sender",
          MESSAGE_SENDER: "messageSender",
          PRESENCE_SUBSCRIPTION: "presenceSubscription",
          AUTH: "auth",
          PING: "ping",
          DATA: "data",
          PARAMS: "params",
          ACK: "ack",
          PONG: "pong",
          INTERACTIONS: "interactions",
          REACTION: "reaction",
          REACTED_AT: "reactedAt",
          REACTED_BY: "reactedBy",
          ID: "id",
          UID: "uid",
          CONVERSATION_ID: "conversationId",
          PARENT_ID: "parentId",
          ROLES: "roles"
        }, a.MODERATION_STATUS_CHANGED = { TYPE: "on_moderation_status_changed" }, a.STREAM_MESSAGE = { TYPE: "streamed_message" }, a.NOTIFICATION_FEED = {
          TYPE: "notification_feed_item",
          ACTION: { SENT: "sent" }
        };
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__assign || function() {
          return (p = Object.assign || function(_) {
            for (var A, R = 1, N = arguments.length; R < N; R++) for (var O in A = arguments[R]) Object.prototype.hasOwnProperty.call(A, O) && (_[O] = A[O]);
            return _;
          }).apply(this, arguments);
        }, i = this && this.__awaiter || function(_, A, R, N) {
          return new (R || (R = Promise))(function(O, y) {
            function v(B) {
              try {
                K(N.next(B));
              } catch (J) {
                y(J);
              }
            }
            function G(B) {
              try {
                K(N.throw(B));
              } catch (J) {
                y(J);
              }
            }
            function K(B) {
              var J;
              B.done ? O(B.value) : (J = B.value, J instanceof R ? J : new R(function(Q) {
                Q(J);
              })).then(v, G);
            }
            K((N = N.apply(_, A || [])).next());
          });
        }, S = this && this.__generator || function(_, A) {
          var R, N, O, y, v = {
            label: 0,
            sent: function() {
              if (1 & O[0]) throw O[1];
              return O[1];
            },
            trys: [],
            ops: []
          };
          return y = {
            next: G(0),
            throw: G(1),
            return: G(2)
          }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
            return this;
          }), y;
          function G(K) {
            return function(B) {
              return (function(J) {
                if (R) throw new TypeError("Generator is already executing.");
                for (; v; ) try {
                  if (R = 1, N && (O = 2 & J[0] ? N.return : J[0] ? N.throw || ((O = N.return) && O.call(N), 0) : N.next) && !(O = O.call(N, J[1])).done) return O;
                  switch (N = 0, O && (J = [2 & J[0], O.value]), J[0]) {
                    case 0:
                    case 1:
                      O = J;
                      break;
                    case 4:
                      return v.label++, {
                        value: J[1],
                        done: !1
                      };
                    case 5:
                      v.label++, N = J[1], J = [0];
                      continue;
                    case 7:
                      J = v.ops.pop(), v.trys.pop();
                      continue;
                    default:
                      if (!(O = 0 < (O = v.trys).length && O[O.length - 1]) && (J[0] === 6 || J[0] === 2)) {
                        v = 0;
                        continue;
                      }
                      if (J[0] === 3 && (!O || J[1] > O[0] && J[1] < O[3])) {
                        v.label = J[1];
                        break;
                      }
                      if (J[0] === 6 && v.label < O[1]) {
                        v.label = O[1], O = J;
                        break;
                      }
                      if (O && v.label < O[2]) {
                        v.label = O[2], v.ops.push(J);
                        break;
                      }
                      O[2] && v.ops.pop(), v.trys.pop();
                      continue;
                  }
                  J = A.call(_, v);
                } catch (Q) {
                  J = [6, Q], N = 0;
                } finally {
                  R = O = 0;
                }
                if (5 & J[0]) throw J[1];
                return {
                  value: J[0] ? J[1] : void 0,
                  done: !0
                };
              })([K, B]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChat = a.DEFAULT_TIMEOUT = void 0;
        var E = g(48), n = g(1), o = g(2), s = g(4), r = g(3), e = g(19), l = g(27), u = g(7), C = g(25), c = g(11), d = g(17), t = g(0), h = g(9), I = g(24), T = g(34), f = g(35), P = g(32), m = g(58), D = g(13), V = g(31), M = g(75), z = g(76), le = g(77), de = g(78), W = g(80), q = g(81), se = g(36), Ae = g(37), Pe = g(62), Ee = g(28), fe = g(61), Te = g(83), ue = g(38), F = g(84), b = g(57), w = g(23), ie = g(20), ae = g(85), ne = g(86), Ne = g(87), ge = g(39), Ie = g(5), ce = g(114), De = g(50), be = g(59), Ue = g(42), ke = g(29), Xe = g(51), Ke = g(30), ot = g(64), ve = g(115), st = g(116), He = g(26), rt = g(65), ut = g(41), Et = g(117), it = g(21), L = g(44), Y = g(43), U = g(67), H = g(118), k = g(119), x = g(120), X = g(68), Z = g(33), ee = g(22), te = g(69), re = g(15), oe = g(14), Ce = g(40), me = g(63), Re = g(66), Fe = g(52), at = g(53), Be = g(54), St = g(55), pt = g(56), Qe = g(12), At = g(49), It = g(16), ft = g(70), Rt = g(71), gt = g(72), Ot = g(45), ze = g(46);
        a.DEFAULT_TIMEOUT = 45;
        var Me = Ne.WSConnectionHelper.getInstance(), Le = ge.ListenerHandlers.getInstance();
        a.CometChat = (function() {
          function _(A) {
            try {
              _.appId = A, _.localStorage = e.LocalStorage.getInstance(), _.keyStore = T.KeyStore.getInstance();
            } catch (R) {
              n.Logger.error("CometChat: constructor", R);
            }
          }
          return _.setAuthToken = function(A) {
            try {
              _.authToken = A;
            } catch (R) {
              n.Logger.error("CometChat: setAuthToken", R);
            }
          }, _.prototype.getAuthToken = function() {
            try {
              return _.authToken;
            } catch (A) {
              n.Logger.error("CometChat: getAuthToken", A);
            }
          }, _.getAppId = function() {
            try {
              return _.appId;
            } catch (A) {
              n.Logger.error("CometChat: getAppId", A);
            }
          }, _.prototype.getApiKey = function() {
            try {
              return _.apiKey;
            } catch (A) {
              n.Logger.error("CometChat: getApiKey", A);
            }
          }, _.getMode = function() {
            try {
              return _.mode;
            } catch (A) {
              n.Logger.error("CometChat: getMode", A);
            }
          }, _.setMode = function(A) {
            try {
              _.mode = A;
            } catch (R) {
              n.Logger.error("CometChat: getMode", R);
            }
          }, _.getSessionId = function() {
            try {
              return _.sessionId;
            } catch (A) {
              n.Logger.error("CometChat: getSessionId", A);
            }
          }, _.initializeStorage = function() {
            var A;
            return i(this, void 0, void 0, function() {
              var R, N;
              return S(this, function(O) {
                switch (O.label) {
                  case 0:
                    if (_.keyStore) return [2];
                    O.label = 1;
                  case 1:
                    return O.trys.push([
                      1,
                      3,
                      ,
                      5
                    ]), R = ((A = _.appSettings) === null || A === void 0 ? void 0 : A.getStorageMode()) || t.StorageMode.LOCAL, [4, (N = It.StorageManager.getInstance()).initialize(R)];
                  case 2:
                    return O.sent(), _.keyStore = N.getStorage(_.getAppId(), t.LOCAL_STORE.KEYS_STORE), [3, 5];
                  case 3:
                    return O.sent(), [4, (_.keyStore = Qe.createInstance({ name: n.format(t.LOCAL_STORE.STORE_STRING, _.getAppId(), t.LOCAL_STORE.KEYS_STORE) })).setDriver([
                      Qe.LOCALSTORAGE,
                      Qe.INDEXEDDB,
                      Qe.WEBSQL
                    ])];
                  case 4:
                    return O.sent(), [3, 5];
                  case 5:
                    return [2];
                }
              });
            });
          }, _.onStorageEvent = function(A) {
            if (document && !document.hasFocus()) {
              var R = _.appId + ":common_store/user";
              A.key === R && A.newValue === null && (_.authToken = void 0, _.didAnalyticsPingStart() && _.clearAnalyticsPingTimer(), Me.WSLogout(), _.pushToLoginListener("", "Logout_Success")), A.key === R && A.oldValue === null && e.LocalStorage.getInstance().get("user").then(function(N) {
                N && (_.user = new r.Me(N), _.setAuthToken(_.user.getAuthToken()), N.jwt && (_.jwt = N.jwt), e.LocalStorage.getInstance().get("app_settings").then(function(O) {
                  if (O) {
                    if (O.hasOwnProperty(t.APP_SETTINGS.KEYS.APP_VERSION)) {
                      var y = parseInt(t.APPINFO.sdkVersion.charAt(1));
                      O[t.APP_SETTINGS.KEYS.APP_VERSION] < y && (_.appSettings.shouldAutoEstablishSocketConnection() || (_.shouldConnectToWS = !1), _.getInstance().internalRestart(_.user.getAuthToken()));
                    } else _.appSettings.shouldAutoEstablishSocketConnection() || (_.shouldConnectToWS = !1), _.getInstance().internalRestart(_.user.getAuthToken());
                    if (O[t.APP_SETTINGS.KEYS.MODE] && (_.mode = O[t.APP_SETTINGS.KEYS.MODE]), O[t.APP_SETTINGS.KEYS.SETTINGS_HASH] && (_.settingsHash = O[t.APP_SETTINGS.KEYS.SETTINGS_HASH]), O[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (_.settingsHashReceivedAt = O[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), _.isAnalyticsDisabled = !!O[t.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], _.didAnalyticsPingStart() || _.isAnalyticsDisabled || !_.appSettings.shouldAutoEstablishSocketConnection() || (_.pingAnalytics(), _.startAnalyticsPingTimer()), _.getConnectionStatus() !== t.CONNECTION_STATUS.CONNECTED) {
                      var v = new r.User(_.user);
                      _.pushToLoginListener(v, "Login_Success"), _.appSettings.shouldAutoEstablishSocketConnection() && _.WSLogin(_.user);
                    }
                  }
                }));
              });
            }
          }, _.beforeUnload = function(A) {
            var R = _.getDataFromSessionStorage(t.SESSION_STORE.SESSION_ID);
            _.removeDataFromSessionStorage(t.SESSION_STORE.SESSION_ID), e.LocalStorage.getInstance().set(t.SESSION_STORE.SESSION_ID, R);
          }, _.didAnalyticsPingStart = function() {
            try {
              return _.isAnalyticsPingStarted;
            } catch (A) {
              n.Logger.error("CometChat: didAnalyticsPingStart", A);
            }
          }, _.getDataFromSessionStorage = function(A) {
            if (window.sessionStorage) return window.sessionStorage.getItem(A);
          }, _.addDataToSessionStorage = function(A, R) {
            window.sessionStorage && window.sessionStorage.setItem(A, R);
          }, _.removeDataFromSessionStorage = function(A) {
            window.sessionStorage && window.sessionStorage.removeItem(A);
          }, _.init = function(A, R) {
            var N = this;
            return A === void 0 && (A = ""), new Promise(function(O, y) {
              return i(N, void 0, void 0, function() {
                var v, G, K = this;
                return S(this, function(B) {
                  switch (B.label) {
                    case 0:
                      if (B.trys.push([
                        0,
                        8,
                        ,
                        9
                      ]), typeof A == "object" && (A.hasOwnProperty("appId") && (A = A.appId), A.hasOwnProperty("appSettings") && (R = A.appSettings)), n.isFalsy(R) ? R = new ue.AppSettingsBuilder().setRegion(ue.AppSettings.REGION_EU).build() : R.getRegion() == ue.AppSettings.REGION_PRIVATE && (R.region = A), (this.appSettings = R).getStorageMode() !== t.StorageMode.SESSION) return [3, 4];
                      B.label = 1;
                    case 1:
                      return B.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [4, At.registerSessionStorageDriver()];
                    case 2:
                      return B.sent(), [3, 4];
                    case 3:
                      return v = B.sent(), y(new o.CometChatException(v)), [3, 4];
                    case 4:
                      return n.isFalsy(A) ? (y(new o.CometChatException(D.INIT_ERROR.NO_APP_ID)), [3, 7]) : [3, 5];
                    case 5:
                      window.addEventListener && (window.addEventListener("storage", _.onStorageEvent, !1), window.addEventListener("beforeunload", _.beforeUnload, !1)), this.initialzed = !0, _.appId = A, _.getInstance(A);
                      try {
                        typeof window < "u" && (window.CometChat = _);
                      } catch {
                      }
                      return [4, _.initializeStorage()];
                    case 6:
                      B.sent(), T.KeyStore.getInstance().set(t.LOCAL_STORE.KEY_INTEGRATION_SOURCE, t.INTEGRATION_SOURCE.MANUAL), e.LocalStorage.getInstance().get(t.SESSION_STORE.SESSION_ID).then(function(J) {
                        J == null || J == null ? (_.sessionId = t.APPINFO.platform + "-" + t.APPINFO.sdkVersionWithUnderScore + "-" + ze() + "-" + (/* @__PURE__ */ new Date()).getTime(), _.addDataToSessionStorage(t.SESSION_STORE.SESSION_ID, _.getSessionId()), e.LocalStorage.getInstance().remove(t.SESSION_STORE.SESSION_ID)) : (_.sessionId = J.toLocaleString(), e.LocalStorage.getInstance().remove(t.SESSION_STORE.SESSION_ID), _.addDataToSessionStorage(t.SESSION_STORE.SESSION_ID, _.getSessionId())), e.LocalStorage.getInstance().get(t.LOCAL_STORE.KEY_APP_ID).then(function(Q) {
                          if (Q == null || Q == null) _.appId = A, _.getInstance(A), e.LocalStorage.getInstance().set(t.LOCAL_STORE.KEY_APP_ID, A), O(!0);
                          else {
                            var he = Q.toLocaleString();
                            he === A ? (_.appId = he, _.getInstance(he), e.LocalStorage.getInstance().get(t.LOCAL_STORE.KEY_USER).then(function(pe) {
                              pe ? (_.isLoggedOut = !1, _.user = new r.Me(pe), new ve.PostDetails(), _.setAuthToken(_.user.getAuthToken()), pe.jwt && (_.jwt = pe.jwt), O(!0), e.LocalStorage.getInstance().get(t.LOCAL_STORE.KEY_APP_SETTINGS).then(function($) {
                                if ($) {
                                  if ($.hasOwnProperty(t.APP_SETTINGS.KEYS.APP_VERSION)) {
                                    var _e = parseInt(t.APPINFO.sdkVersion.charAt(1));
                                    $[t.APP_SETTINGS.KEYS.APP_VERSION] < _e && $[t.APP_SETTINGS.KEYS.APP_VERSION] !== 3 && (K.appSettings.shouldAutoEstablishSocketConnection() || (_.shouldConnectToWS = !1), _.getInstance().internalRestart(_.user.getAuthToken()));
                                  } else K.appSettings.shouldAutoEstablishSocketConnection() || (_.shouldConnectToWS = !1), _.getInstance().internalRestart(_.user.getAuthToken());
                                  $[t.APP_SETTINGS.KEYS.SECURED_MEDIA_HOST] && (_.SECURED_MEDIA_HOST = $[t.APP_SETTINGS.KEYS.SECURED_MEDIA_HOST]), $[t.APP_SETTINGS.KEYS.MODE] && (_.mode = $[t.APP_SETTINGS.KEYS.MODE]), $[t.APP_SETTINGS.KEYS.SETTINGS_HASH] && (_.settingsHash = $[t.APP_SETTINGS.KEYS.SETTINGS_HASH]), $[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (_.settingsHashReceivedAt = $[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), _.isAnalyticsDisabled = !!$[t.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], _.didAnalyticsPingStart() || _.isAnalyticsDisabled || !K.appSettings.shouldAutoEstablishSocketConnection() || (_.pingAnalytics(), _.startAnalyticsPingTimer()), Me && !Me.connection && K.appSettings.shouldAutoEstablishSocketConnection() && (_.isConnectingFromInit = !0, _.WSLogin(_.user));
                                }
                              })) : O(!0);
                            })) : K.clearCache().then(function() {
                              _.apiKey = void 0, _.user = void 0, _.authToken = void 0, _.cometChat = void 0, _.mode = void 0, Me.WSLogout(), _.appId = A, e.LocalStorage.getInstance().set(t.LOCAL_STORE.KEY_APP_ID, A), _.getInstance(A), O(!0);
                            });
                          }
                          T.KeyStore.getInstance().get(t.LOCAL_STORE.KEY_DEVICE_ID).then(function(pe) {
                            if (pe == null) {
                              var $ = ze(), _e = (/* @__PURE__ */ new Date()).getTime(), Se = A + "_" + $ + "_" + _e;
                              T.KeyStore.getInstance().set(t.LOCAL_STORE.KEY_DEVICE_ID, Se);
                            }
                          });
                        });
                      }), B.label = 7;
                    case 7:
                      return [3, 9];
                    case 8:
                      return G = B.sent(), y(new o.CometChatException(G)), [3, 9];
                    case 9:
                      return [2];
                  }
                });
              });
            });
          }, _.initFromSettings = function(A) {
            var R = this;
            return new Promise(function(N, O) {
              return i(R, void 0, void 0, function() {
                var y, v, G, K, B, J, Q, he = this;
                return S(this, function(pe) {
                  switch (pe.label) {
                    case 0:
                      if (pe.trys.push([
                        0,
                        6,
                        ,
                        7
                      ]), !A || !A.appId) return O(new o.CometChatException(D.INIT_ERROR.NO_APP_ID)), [2];
                      if ((y = new ue.AppSettingsBuilder()).setRegion(A.region || ue.AppSettings.REGION_EU), A.chatSDK && ((v = A.chatSDK.presenceSubscription) && v.type && ((G = v.type.toUpperCase()) === ue.AppSettings.SUBSCRIPTION_TYPE_ALL_USERS ? y.subscribePresenceForAllUsers() : G === ue.AppSettings.SUBSCRIPTION_TYPE_ROLES ? y.subscribePresenceForRoles(v.roles || []) : G === ue.AppSettings.SUBSCRIPTION_TYPE_FRIENDS && y.subscribePresenceForFriends()), A.chatSDK.autoEstablishSocketConnection !== void 0 && y.autoEstablishSocketConnection(A.chatSDK.autoEstablishSocketConnection), A.chatSDK.adminHost && y.overrideAdminHost(A.chatSDK.adminHost), A.chatSDK.clientHost && y.overrideClientHost(A.chatSDK.clientHost)), K = y.build(), B = A.appId, (this.appSettings = K).getStorageMode() !== t.StorageMode.SESSION) return [3, 4];
                      pe.label = 1;
                    case 1:
                      return pe.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [4, At.registerSessionStorageDriver()];
                    case 2:
                      return pe.sent(), [3, 4];
                    case 3:
                      return J = pe.sent(), O(new o.CometChatException(J)), [2];
                    case 4:
                      this.initialzed = !0, _.appId = B, _.getInstance(B);
                      try {
                        typeof window < "u" && (window.CometChat = _);
                      } catch {
                      }
                      return [4, _.initializeStorage()];
                    case 5:
                      return pe.sent(), T.KeyStore.getInstance().set(t.LOCAL_STORE.KEY_INTEGRATION_SOURCE, t.INTEGRATION_SOURCE.AI_AGENT), window.addEventListener && (window.addEventListener("storage", _.onStorageEvent, !1), window.addEventListener("beforeunload", _.beforeUnload, !1)), e.LocalStorage.getInstance().get(t.SESSION_STORE.SESSION_ID).then(function($) {
                        $ == null || $ == null ? (_.sessionId = t.APPINFO.platform + "-" + t.APPINFO.sdkVersionWithUnderScore + "-" + ze() + "-" + (/* @__PURE__ */ new Date()).getTime(), _.addDataToSessionStorage(t.SESSION_STORE.SESSION_ID, _.getSessionId()), e.LocalStorage.getInstance().remove(t.SESSION_STORE.SESSION_ID)) : (_.sessionId = $.toLocaleString(), e.LocalStorage.getInstance().remove(t.SESSION_STORE.SESSION_ID), _.addDataToSessionStorage(t.SESSION_STORE.SESSION_ID, _.getSessionId())), e.LocalStorage.getInstance().get(t.LOCAL_STORE.KEY_APP_ID).then(function(_e) {
                          if (_e == null || _e == null) _.appId = B, _.getInstance(B), e.LocalStorage.getInstance().set(t.LOCAL_STORE.KEY_APP_ID, B), N(!0);
                          else {
                            var Se = _e.toLocaleString();
                            Se === B ? (_.appId = Se, _.getInstance(Se), e.LocalStorage.getInstance().get(t.LOCAL_STORE.KEY_USER).then(function(Ge) {
                              Ge ? (_.isLoggedOut = !1, _.user = new r.Me(Ge), new ve.PostDetails(), _.setAuthToken(_.user.getAuthToken()), Ge.jwt && (_.jwt = Ge.jwt), N(!0), e.LocalStorage.getInstance().get(t.LOCAL_STORE.KEY_APP_SETTINGS).then(function(ye) {
                                if (ye) {
                                  if (ye.hasOwnProperty(t.APP_SETTINGS.KEYS.APP_VERSION)) {
                                    var Oe = parseInt(t.APPINFO.sdkVersion.charAt(1));
                                    ye[t.APP_SETTINGS.KEYS.APP_VERSION] < Oe && ye[t.APP_SETTINGS.KEYS.APP_VERSION] !== 3 && (he.appSettings.shouldAutoEstablishSocketConnection() || (_.shouldConnectToWS = !1), _.getInstance().internalRestart(_.user.getAuthToken()));
                                  } else he.appSettings.shouldAutoEstablishSocketConnection() || (_.shouldConnectToWS = !1), _.getInstance().internalRestart(_.user.getAuthToken());
                                  ye[t.APP_SETTINGS.KEYS.SECURED_MEDIA_HOST] && (_.SECURED_MEDIA_HOST = ye[t.APP_SETTINGS.KEYS.SECURED_MEDIA_HOST]), ye[t.APP_SETTINGS.KEYS.MODE] && (_.mode = ye[t.APP_SETTINGS.KEYS.MODE]), ye[t.APP_SETTINGS.KEYS.SETTINGS_HASH] && (_.settingsHash = ye[t.APP_SETTINGS.KEYS.SETTINGS_HASH]), ye[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (_.settingsHashReceivedAt = ye[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), _.isAnalyticsDisabled = !!ye[t.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], _.didAnalyticsPingStart() || _.isAnalyticsDisabled || !he.appSettings.shouldAutoEstablishSocketConnection() || (_.pingAnalytics(), _.startAnalyticsPingTimer()), Me && !Me.connection && he.appSettings.shouldAutoEstablishSocketConnection() && (_.isConnectingFromInit = !0, _.WSLogin(_.user));
                                }
                              })) : N(!0);
                            })) : he.clearCache().then(function() {
                              _.apiKey = void 0, _.user = void 0, _.authToken = void 0, _.cometChat = void 0, _.mode = void 0, Me.WSLogout(), _.appId = B, e.LocalStorage.getInstance().set(t.LOCAL_STORE.KEY_APP_ID, B), _.getInstance(B), N(!0);
                            });
                          }
                          T.KeyStore.getInstance().get(t.LOCAL_STORE.KEY_DEVICE_ID).then(function(Ge) {
                            if (Ge == null) {
                              var ye = ze(), Oe = (/* @__PURE__ */ new Date()).getTime(), Ye = B + "_" + ye + "_" + Oe;
                              T.KeyStore.getInstance().set(t.LOCAL_STORE.KEY_DEVICE_ID, Ye);
                            }
                          });
                        });
                      }), [3, 7];
                    case 6:
                      return Q = pe.sent(), O(new o.CometChatException(Q)), [3, 7];
                    case 7:
                      return [2];
                  }
                });
              });
            });
          }, _.isInitialized = function() {
            try {
              return this.initialzed;
            } catch (A) {
              n.Logger.error("CometChat: isInitialized", A);
            }
          }, _.getInstance = function(A) {
            try {
              return this.cometChat || (this.cometChat = new _(A)), this.cometChat;
            } catch (R) {
              n.Logger.error("CometChat: getInstance", R);
            }
          }, _.registerTokenForPushNotification = function(A, R) {
            var N = this;
            return new Promise(function(O, y) {
              try {
                _.keyStore.get(t.LOCAL_STORE.KEY_DEVICE_ID).then(function(v) {
                  n.getAppSettings().then(function(G) {
                    var K = "", B = v, J = t.APPINFO.platform, Q = t.APPINFO.sdkVersion, he = G[t.APP_SETTINGS.KEYS.CHAT_API_VERSION];
                    if (navigator && (K = navigator.userAgent), B == null) {
                      var pe = ze(), $ = (/* @__PURE__ */ new Date()).getTime();
                      B = N.appId + "_" + pe + "_" + $, _.keyStore.set(t.LOCAL_STORE.KEY_DEVICE_ID, B);
                    }
                    var _e = {
                      platform: J,
                      deviceId: B,
                      appInfo: {
                        version: Q,
                        apiVersion: he,
                        userAgent: K,
                        pushNotification: {
                          fcmDeviceToken: A,
                          settings: R
                        }
                      }
                    };
                    s.makeApiCall("updateMyDetails", {}, _e, !1).then(function(Se) {
                      O("Token Registration successful");
                    }, function(Se) {
                      y(new o.CometChatException(Se.error));
                    }).catch(function(Se) {
                      y(new o.CometChatException(Se));
                    });
                  }, function(G) {
                    y(new o.CometChatException(G));
                  });
                });
              } catch (v) {
                y(new o.CometChatException(v));
              }
            });
          }, _.pushToLoginListener = function(A, R) {
            Le.loginHandlers.map(function(N) {
              try {
                if (N._eventListener) switch (R) {
                  case "Login_Success":
                    n.isFalsy(N._eventListener.loginSuccess) || N._eventListener.loginSuccess(A);
                    break;
                  case "Login_Failure":
                    n.isFalsy(N._eventListener.loginFailure) || N._eventListener.loginFailure(A);
                    break;
                  case "Logout_Success":
                    n.isFalsy(N._eventListener.logoutSuccess) || N._eventListener.logoutSuccess();
                }
              } catch (O) {
                n.Logger.error("ConnectionHandlers: onConnected Status", O);
              }
            });
          }, _.login = function() {
            for (var A = this, R = [], N = 0; N < arguments.length; N++) R[N] = arguments[N];
            return new Promise(function(O, y) {
              return i(A, void 0, void 0, function() {
                var v, G, K = this;
                return S(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return B.trys.push([
                        0,
                        2,
                        ,
                        3
                      ]), [4, _.initializeStorage()];
                    case 1:
                      return B.sent(), _.loginInProgress ? (_.isLoggedOut = !0, G = new o.CometChatException(D.LOGIN_ERROR.REQUEST_IN_PROGRESS), [2, y(G)]) : (_.loginInProgress = !0, _.isConnectingFromInit = !1, _.localStorage.get(t.LOCAL_STORE.KEY_APP_ID).then(function(J) {
                        if (J == null || J == null) {
                          var Q = new o.CometChatException(D.LOGIN_ERROR.NOT_INITIALIZED);
                          return _.internalRestart || _.pushToLoginListener(Q, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Q);
                        }
                        var he = J.toLocaleString();
                        if (K.getInstance(he), _.appId = he, e.LocalStorage.getInstance().set(t.LOCAL_STORE.KEY_APP_ID, he), typeof R[0] == "object") {
                          var pe = R[0];
                          R[0].hasOwnProperty("authToken") ? R[0] = pe.authToken : R[0].hasOwnProperty("username") && R[0].hasOwnProperty("apiKey") && (R[0] = pe.username, R[1] = pe.apiKey);
                        }
                        if (R.length == 2) {
                          if (n.isFalsy(R[0]) || n.isFalsy(R[1]))
                            return Q = new o.CometChatException(D.ERRORS.PARAMETER_MISSING), _.internalRestart || _.pushToLoginListener(Q, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Q);
                        } else {
                          if (R.length != 1)
                            return Q = new o.CometChatException(D.ERRORS.PARAMETER_MISSING), _.internalRestart || _.pushToLoginListener(Q, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Q);
                          if (n.isFalsy(R[0])) {
                            var Q = new o.CometChatException(D.ERRORS.PARAMETER_MISSING);
                            return _.internalRestart || _.pushToLoginListener(Q, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Q);
                          }
                        }
                        return n.isFalsy(K.getAppId()) ? (Q = new o.CometChatException(D.LOGIN_ERROR.NOT_INITIALIZED), _.internalRestart || _.pushToLoginListener(Q, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Q)) : _.localStorage.get(t.LOCAL_STORE.KEY_USER).then(function($) {
                          if (R.length == 2) {
                            _.apiKey = R[1];
                            var _e = R[0];
                            if ($ != null && $.uid !== R[0]) _.localStorage.clearStore().then(function() {
                              Me.WSLogout(), _.generateAuthToken(_e).then(function(ye) {
                                _.user = new r.Me(ye), _.setAuthToken(_.user.getAuthToken()), _.getLoggedInUser().then(function(Oe) {
                                  (_.user = new r.Me(Oe)).setAuthToken(_.authToken), _.setAuthToken(_.user.getAuthToken());
                                  var Ye = _.user;
                                  Ye.setStatus(t.PresenceConstatnts.STATUS.ONLINE), _.localStorage.set("user", Ye);
                                  var we = new r.User(Ye);
                                  O(we), _.isConnectingFromInit || _.internalRestart || (_.pushToLoginListener(we, "Login_Success"), new ve.PostDetails()), _.loginInProgress = !1, _.didAnalyticsPingStart() || _.isAnalyticsDisabled || !_.appSettings.shouldAutoEstablishSocketConnection() || (_.pingAnalytics(), _.startAnalyticsPingTimer()), _.isLoggedOut = !1, (_.appSettings.shouldAutoEstablishSocketConnection() || _.internalRestart) && _.shouldConnectToWS && _.WSLogin(_.user);
                                }, function(Oe) {
                                  return _.internalRestart || _.pushToLoginListener(Oe, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Oe);
                                });
                              }, function(ye) {
                                return _.internalRestart || _.pushToLoginListener(ye, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(ye);
                              });
                            });
                            else {
                              if (!n.isFalsy(_.authToken)) {
                                var Se = new r.User(K.user);
                                return _.internalRestart || (_.pushToLoginListener(Se, "Login_Success"), new ve.PostDetails()), _.loginInProgress = !1, _.isLoggedOut = !1, O(Se);
                              }
                              if (!n.isFalsy(_e)) {
                                if (n.isFalsy(_.apiKey)) {
                                  var Ge = new o.CometChatException(D.LOGIN_ERROR.UNAUTHORISED);
                                  return _.internalRestart || _.pushToLoginListener(Ge, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Ge);
                                }
                                K.generateAuthToken(_e).then(function(ye) {
                                  K.user = new r.Me(ye), K.setAuthToken(_.user.getAuthToken()), K.getLoggedInUser().then(function(Oe) {
                                    K.user = new r.Me(Oe), K.user.setAuthToken(_.authToken), K.setAuthToken(K.user.getAuthToken()), Me.WSLogout();
                                    var Ye = K.user;
                                    Ye.setStatus(t.PresenceConstatnts.STATUS.ONLINE), K.localStorage.set("user", Ye);
                                    var we = new r.User(Ye);
                                    O(we), _.isConnectingFromInit || _.internalRestart || (_.pushToLoginListener(we, "Login_Success"), new ve.PostDetails()), _.loginInProgress = !1, _.didAnalyticsPingStart() || _.isAnalyticsDisabled || !_.appSettings.shouldAutoEstablishSocketConnection() || (_.pingAnalytics(), _.startAnalyticsPingTimer()), _.isLoggedOut = !1, (_.appSettings.shouldAutoEstablishSocketConnection() || _.internalRestart) && _.shouldConnectToWS && K.WSLogin(K.user);
                                  }, function(Oe) {
                                    return _.internalRestart || _.pushToLoginListener(Oe, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Oe);
                                  });
                                }, function(ye) {
                                  return _.internalRestart || _.pushToLoginListener(ye, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(ye);
                                });
                              }
                            }
                          } else _.authToken = R[0], K.getLoggedInUser().then(function(ye) {
                            if (ye.authToken != R[0]) {
                              var Oe = K;
                              Oe.localStorage.clearStore().then(function() {
                                Me.WSLogout(), Oe.getLoggedInUser().then(function(Je) {
                                  (_.user = new r.Me(Je)).setAuthToken(_.authToken), _.setAuthToken(_.user.getAuthToken());
                                  var Ze = _.user;
                                  Ze.setStatus(t.PresenceConstatnts.STATUS.ONLINE), Oe.localStorage.set("user", Ze);
                                  var et = new r.User(Ze);
                                  O(et), _.isConnectingFromInit || _.internalRestart || (_.pushToLoginListener(et, "Login_Success"), new ve.PostDetails()), _.loginInProgress = !1, _.didAnalyticsPingStart() || _.isAnalyticsDisabled || !_.appSettings.shouldAutoEstablishSocketConnection() || (_.pingAnalytics(), _.startAnalyticsPingTimer()), _.isLoggedOut = !1, (_.appSettings.shouldAutoEstablishSocketConnection() || _.internalRestart) && _.shouldConnectToWS && _.WSLogin(new r.Me(Je));
                                }, function(Je) {
                                  return _.internalRestart || _.pushToLoginListener(Je, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(Je);
                                });
                              });
                            } else {
                              if ($) {
                                var Ye = new r.User(ye);
                                return _.internalRestart || (_.pushToLoginListener(Ye, "Login_Success"), new ve.PostDetails()), _.loginInProgress = !1, _.isLoggedOut = !1, O(Ye);
                              }
                              (_.user = new r.Me(ye)).setAuthToken(_.authToken), _.setAuthToken(_.user.getAuthToken());
                              var we = _.user;
                              we.setStatus(t.PresenceConstatnts.STATUS.ONLINE), _.localStorage.set("user", we);
                              var $e = new r.User(we);
                              O($e), _.isConnectingFromInit || _.internalRestart || (_.pushToLoginListener($e, "Login_Success"), new ve.PostDetails()), _.loginInProgress = !1, _.didAnalyticsPingStart() || _.isAnalyticsDisabled || !_.appSettings.shouldAutoEstablishSocketConnection() || (_.pingAnalytics(), _.startAnalyticsPingTimer()), _.isLoggedOut = !1, (_.appSettings.shouldAutoEstablishSocketConnection() || _.internalRestart) && _.shouldConnectToWS && _.WSLogin(new r.Me(ye));
                            }
                          }, function(ye) {
                            return _.internalRestart || _.pushToLoginListener(ye, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, y(ye);
                          });
                        });
                      }), [3, 3]);
                    case 2:
                      return v = B.sent(), G = new o.CometChatException(v), _.internalRestart || _.pushToLoginListener(G, "Login_Failure"), _.loginInProgress = !1, _.isLoggedOut = !0, [2, y(G)];
                    case 3:
                      return [2];
                  }
                });
              });
            });
          }, _.sendMessage = function(A) {
            var R = this;
            return new Promise(function(N, O) {
              return i(R, void 0, void 0, function() {
                var y, v, G, K, B = this;
                return S(this, function(J) {
                  try {
                    return A instanceof C.TextMessage || A instanceof l.MediaMessage || A instanceof Ee.CustomMessage || A instanceof ke.InteractiveMessage || (A = A[t.MessageConstatnts.KEYS.ATTATCHMENT] ? (y = t.MessageConstatnts.TYPE.FILE, n.isImage(A[t.MessageConstatnts.KEYS.ATTATCHMENT]) ? y = t.MessageConstatnts.TYPE.IMAGE : n.isAudio(A[t.MessageConstatnts.KEYS.ATTATCHMENT]) ? y = t.MessageConstatnts.TYPE.AUDIO : n.isVideo(A[t.MessageConstatnts.KEYS.ATTATCHMENT]) && (y = t.MessageConstatnts.TYPE.VIDEO), new l.MediaMessage(A[t.MessageConstatnts.KEYS.RECEIVER_ID], A[t.MessageConstatnts.KEYS.ATTATCHMENT], y, A[t.MessageConstatnts.KEYS.RECEIVER_TYPE])) : new C.TextMessage(A[t.MessageConstatnts.KEYS.RECEIVER_ID], A[t.MessageConstatnts.KEYS.TEXT], A[t.MessageConstatnts.KEYS.RECEIVER_TYPE])), (v = n.validateMessage(A)) instanceof o.CometChatException ? (O(v), [2]) : (A.receiver = A.receiverId, delete A.receiverId, G = A.parentMessageId, K = A instanceof l.MediaMessage && !_.hasPreUploadedAttachments(A), [2, s.makeApiCall(G ? "sendMessageInThread" : "sendMessage", G ? { parentId: G } : {}, A, K).then(function(Q) {
                      return i(B, void 0, void 0, function() {
                        var he;
                        return S(this, function(pe) {
                          return he = c.MessageController.trasformJSONMessge(Q.data), se.MessageListnerMaping.getInstance().set("all", parseInt(he.id)), N(he), [2];
                        });
                      });
                    }, function(Q) {
                      O(new o.CometChatException(Q.error));
                    })]);
                  } catch (Q) {
                    O(new o.CometChatException(Q));
                  }
                  return [2];
                });
              });
            });
          }, _.sendDirectMessage = function(A) {
            try {
              return Object.assign(A, { receiverType: t.MessageConstatnts.RECEIVER_TYPE.USER }), this.sendMessage(A);
            } catch (R) {
              n.Logger.error("CometChat: sendDirectMessage", R);
            }
          }, _.sendGroupMessage = function(A) {
            try {
              return Object.assign(A, { receiverType: t.MessageConstatnts.RECEIVER_TYPE.GROUP }), this.sendMessage(A);
            } catch (R) {
              n.Logger.error("CometChat: sendGroupMessage", R);
            }
          }, _.hasPreUploadedAttachments = function(A) {
            try {
              var R = (typeof A.getData == "function" ? A.getData() : null) || {}, N = R[t.MessageConstatnts.KEYS.ATTATCHMENTS], O = Array.isArray(N) && 0 < N.length, y = !!A.files || !!A.file || !!R[t.MessageConstatnts.KEYS.URL];
              return O && !y;
            } catch (v) {
              return n.Logger.error("CometChat: hasPreUploadedAttachments", v), !1;
            }
          }, _.sendMediaMessage = function(A) {
            var R = this;
            try {
              if (A instanceof l.MediaMessage && _.hasPreUploadedAttachments(A)) {
                var N = ((typeof A.getData == "function" ? A.getData() : null) || {})[t.MessageConstatnts.KEYS.ATTATCHMENTS];
                return n.getUploadLimits().then(function(O) {
                  return N.length > O.countMax ? Promise.reject(new o.CometChatException({
                    code: D.MEDIA_UPLOAD_ERRORS.FILE_COUNT_EXCEEDED.code,
                    name: D.MEDIA_UPLOAD_ERRORS.FILE_COUNT_EXCEEDED.name,
                    message: n.format(D.MEDIA_UPLOAD_ERRORS.FILE_COUNT_EXCEEDED.message, String(O.countMax)),
                    details: {}
                  })) : R.sendMessage(A);
                });
              }
              return this.sendMessage(A);
            } catch (O) {
              return n.Logger.error("CometChat: sendMediaMessage", O), Promise.reject(O);
            }
          }, _.createUploadFileRequest = function(A, R) {
            return new gt.UploadFileRequest(A, R);
          }, _.getMaxAttachmentCount = function() {
            return n.getUploadLimits().then(function(A) {
              return A.countMax;
            });
          }, _.sendCustomMessage = function(A) {
            try {
              return this.sendMessage(A);
            } catch (R) {
              n.Logger.error("CometChat: sendCustomMessage", R);
            }
          }, _.sendInteractiveMessage = function(A) {
            try {
              return this.sendMessage(A);
            } catch (R) {
              n.Logger.error("CometChat: sendInteractiveMessage", R);
            }
          }, _.getLastDeliveredMessageId = function() {
            return i(this, void 0, void 0, function() {
              var A;
              return S(this, function(R) {
                switch (R.label) {
                  case 0:
                    return R.trys.push([
                      0,
                      2,
                      ,
                      3
                    ]), [4, se.MessageListnerMaping.getInstance().get(t.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST)];
                  case 1:
                    return [2, R.sent()];
                  case 2:
                    return A = R.sent(), n.Logger.error("CometChat: getLastDeliveredMessageId", A), [3, 3];
                  case 3:
                    return [2];
                }
              });
            });
          }, _.startTyping = function(A) {
            try {
              if (n.isFalsy(A)) return;
              var R = void 0, N = this.RECEIVER_TYPE.USER, O = {};
              if (A instanceof Ae.TypingIndicator) R = A.getReceiverId(), N = A.getReceiverType(), O = A.getMetadata();
              else {
                if (!A.hasOwnProperty(t.TYPING_NOTIFICATION.RECEIVER_ID)) return;
                R = A[t.TYPING_NOTIFICATION.RECEIVER_ID], A.hasOwnProperty(t.TYPING_NOTIFICATION.RECEIVER_TYPE) && (N = A[t.TYPING_NOTIFICATION.RECEIVER_TYPE]), A.hasOwnProperty(t.TYPING_NOTIFICATION.META) && (O = A[t.TYPING_NOTIFICATION.META]);
              }
              if (n.isFalsy(R)) return;
              if (Pe.TypingNotificationController.getTypingStartedMap(R) == null) {
                var y = _.getMode();
                (n.isFalsy(y) || y && y !== t.APP_SETTINGS.KEYS.NO_TRANSIENT && y !== t.APP_SETTINGS.KEYS.LIMITED_TRANSIENT) && (Me.startTypingIndicator(R, N, O), Pe.TypingNotificationController.addTypingStarted(R), Pe.TypingNotificationController.removeTypingEnded(R));
                return;
              }
            } catch (v) {
              n.Logger.error("CometChat: startTyping", v);
            }
          }, _.endTyping = function(A) {
            try {
              if (n.isFalsy(A)) return;
              var R = void 0, N = this.RECEIVER_TYPE.USER, O = {};
              if (A instanceof Ae.TypingIndicator) R = A.getReceiverId(), N = A.getReceiverType(), O = A.getMetadata();
              else {
                if (!A.hasOwnProperty(t.TYPING_NOTIFICATION.RECEIVER_ID)) return;
                R = A[t.TYPING_NOTIFICATION.RECEIVER_ID], A.hasOwnProperty(t.TYPING_NOTIFICATION.RECEIVER_TYPE) && (N = A[t.TYPING_NOTIFICATION.RECEIVER_TYPE]), N = N == this.RECEIVER_TYPE.USER ? t.WS.CONVERSATION.TYPE.CHAT : t.WS.CONVERSATION.TYPE.GROUP_CHAT, A.hasOwnProperty(t.TYPING_NOTIFICATION.META) && (O = A[t.TYPING_NOTIFICATION.META]);
              }
              if (n.isFalsy(R)) return;
              if (Pe.TypingNotificationController.getTypingEndedMap(R) == null) {
                var y = _.getMode();
                (n.isFalsy(y) || y && y !== t.APP_SETTINGS.KEYS.NO_TRANSIENT && y !== t.APP_SETTINGS.KEYS.LIMITED_TRANSIENT) && (Me.pauseTypingIndicator(R, N, O), Pe.TypingNotificationController.addTypingEnded(R), Pe.TypingNotificationController.removeTypingStarted(R));
                return;
              }
            } catch (v) {
              n.Logger.error("CometChat: endTyping", v);
            }
          }, _.markAsRead = function() {
            for (var A = [], R = 0; R < arguments.length; R++) A[R] = arguments[R];
            return new Promise(function(N, O) {
              try {
                var y = void 0, v = void 0, G = void 0, K = void 0;
                if (A.length === 3) return O(new o.CometChatException(t.ReceiptErrors.MISSING_PARAMETERS));
                if (A.length === 4) {
                  if (n.isFalsy(A[0]) || typeof A[0] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "MESSAGE_ID", "MESSAGE_ID", "Message ID should be a string."))));
                  if (y = A[0], n.isFalsy(A[1]) || typeof A[1] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_ID", "RECEIVER_ID", "Receiver ID should be a string."))));
                  if (v = A[1], n.isFalsy(A[2]) || typeof A[2] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type should be a string."))));
                  if (G = A[2], n.isFalsy(A[3]) || typeof A[3] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "SENDER_ID", "SENDER_ID", "Sender ID should be a string."))));
                  K = A[3];
                } else {
                  if (A.length !== 1) return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "ARGUMENTS", "ARGUMENTS", "markAsRead() expects either 1 or 4 arguments."))));
                  if (n.isFalsy(A[0]) || !(A[0] instanceof u.BaseMessage)) return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                  var B = A[0];
                  y = B.getId().toString(), v = (G = B.getReceiverType()) === t.MessageConstatnts.RECEIVER_TYPE.USER ? B.getSender().getUid() === _.user.getUid() ? B.getReceiverId() : B.getSender().getUid() : B.getReceiverId(), K = B.getSender().getUid();
                }
                var J = _.getMode();
                return n.isFalsy(J) || J && J !== t.APP_SETTINGS.KEYS.NO_TRANSIENT && J !== t.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? _.getConnectionStatus() === t.CONNECTION_STATUS.CONNECTED ? (Me.markAsRead(v, G, y, K), N()) : O(new o.CometChatException(t.ReceiptErrors.NO_WEBSOCKET_CONNECTION)) : O(new o.CometChatException(t.ReceiptErrors.RECEIPTS_TEMPORARILY_BLOCKED));
              } catch (Q) {
                return n.Logger.error("CometChat: markAsRead", Q), O(new o.CometChatException(t.ReceiptErrors.UNKNOWN_ERROR_OCCURRED));
              }
            });
          }, _.markAsDelivered = function() {
            for (var A = [], R = 0; R < arguments.length; R++) A[R] = arguments[R];
            return new Promise(function(N, O) {
              try {
                var y = void 0, v = void 0, G = void 0, K = void 0;
                if (A.length === 3) return O(new o.CometChatException(t.ReceiptErrors.MISSING_PARAMETERS));
                if (A.length === 4) {
                  if (n.isFalsy(A[0]) || typeof A[0] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "MESSAGE_ID", "MESSAGE_ID", "Message ID should be a string."))));
                  if (y = A[0], n.isFalsy(A[1]) || typeof A[1] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_ID", "RECEIVER_ID", "Receiver ID should be a string."))));
                  if (v = A[1], n.isFalsy(A[2]) || typeof A[2] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "RECEIVER_TYPE", "RECEIVER_TYPE", "Receiver type should be a string."))));
                  if (G = A[2], n.isFalsy(A[3]) || typeof A[3] != "string") return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "SENDER_ID", "SENDER_ID", "Sender ID should be a string."))));
                  K = A[3];
                } else {
                  if (A.length !== 1) return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "ARGUMENTS", "ARGUMENTS", "markAsDelivered() expects either 1 or 4 arguments."))));
                  if (n.isFalsy(A[0]) || !(A[0] instanceof u.BaseMessage)) return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                  var B = A[0];
                  y = B.getId().toString(), v = (G = B.getReceiverType()) === t.MessageConstatnts.RECEIVER_TYPE.USER ? B.getSender().getUid() === _.user.getUid() ? B.getReceiverId() : B.getSender().getUid() : B.getReceiverId(), K = B.getSender().getUid();
                }
                var J = _.getMode();
                return n.isFalsy(J) || J && J !== t.APP_SETTINGS.KEYS.NO_TRANSIENT && J !== t.APP_SETTINGS.KEYS.LIMITED_TRANSIENT ? _.getConnectionStatus() === t.CONNECTION_STATUS.CONNECTED ? (Me.markAsDelivered(v, G, y, K), N()) : O(new o.CometChatException(t.ReceiptErrors.NO_WEBSOCKET_CONNECTION)) : O(new o.CometChatException(t.ReceiptErrors.RECEIPTS_TEMPORARILY_BLOCKED));
              } catch (Q) {
                return n.Logger.error("CometChat: markAsDelivered", Q), O(new o.CometChatException(t.ReceiptErrors.UNKNOWN_ERROR_OCCURRED));
              }
            });
          }, _.markConversationAsRead = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateConversationType(R);
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(A, R);
                if (v instanceof o.CometChatException) return void O(v);
                var G = {}, K = "";
                R = R.toLowerCase(), A = A.toLowerCase(), R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (K = "markGroupConversationAsRead", G.guid = A) : (K = "markUserConversationAsRead", G.uid = A), s.makeApiCall(K, G, {}).then(function(B) {
                  N("Conversation marked as read successfully.");
                }, function(B) {
                  return O(new o.CometChatException(B.error));
                });
              } catch (B) {
                return n.Logger.error("CometChat: markConversationAsRead", B), O(new o.CometChatException(B));
              }
            });
          }, _.markConversationAsDelivered = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateConversationType(R);
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(A, R);
                if (v instanceof o.CometChatException) return void O(v);
                var G = {}, K = "";
                R = R.toLowerCase(), A = A.toLowerCase(), R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (K = "markGroupConversationAsDelivered", G.guid = A) : (K = "markUserConversationAsDelivered", G.uid = A), s.makeApiCall(K, G, {}).then(function(B) {
                  N("Conversation marked as delivered successfully.");
                }, function(B) {
                  return O(new o.CometChatException(B.error));
                });
              } catch (B) {
                return n.Logger.error("CometChat: markConversationAsDelivered", B), O(new o.CometChatException(B));
              }
            });
          }, _.markAsUnread = function(A) {
            var R = this;
            return new Promise(function(N, O) {
              try {
                var y = void 0;
                if (n.isFalsy(A) || !(A instanceof u.BaseMessage)) return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                y = A.getId().toString();
                var v = {}, G = "";
                A.getReceiverType() === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (G = "markGroupMessagesAsUnread", v.guid = A.getReceiverId()) : (G = "markUserMessagesAsUnread", R.user && A.getSender().getUid() === R.user.getUid() ? v.uid = A.getReceiverId() : v.uid = A.getSender().getUid()), s.makeApiCall(G, v, { messageId: y }).then(function(K) {
                  return N("Messages marked as unread successfully.");
                }, function(K) {
                  return O(new o.CometChatException(K.error));
                });
              } catch (K) {
                return n.Logger.error("CometChat: markAsUnread", K), O(new o.CometChatException(K));
              }
            });
          }, _.markMessageAsUnread = function(A) {
            var R = this;
            return b.Conversation, new Promise(function(N, O) {
              try {
                var y = void 0;
                if (n.isFalsy(A) || !(A instanceof u.BaseMessage)) return O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ReceiptErrors.INVALID_PARAMETER), "MESSAGE", "MESSAGE", "Invalid message object received."))));
                y = A.getId().toString();
                var v = {}, G = "";
                A.getReceiverType() === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (G = "markGroupMessagesAsUnread", v.guid = A.getReceiverId()) : (G = "markUserMessagesAsUnread", R.user && A.getSender().getUid() === R.user.getUid() ? v.uid = A.getReceiverId() : v.uid = A.getSender().getUid()), s.makeApiCall(G, v, { messageId: y }).then(function(K) {
                  var B, J = (B = K?.data) === null || B === void 0 ? void 0 : B.conversation;
                  return N(w.ConversationController.trasformJSONConversation(J.conversationId, J.conversationType, J.lastMessage, J.conversationWith, parseInt(J.unreadMessageCount), J.tags ? J.tags : [], J.unreadMentionsCount, J.lastReadMessageId, J.latestMessageId, J));
                }, function(K) {
                  return O(new o.CometChatException(K.error));
                });
              } catch (K) {
                return n.Logger.error("CometChat: markMessageAsUnread", K), O(new o.CometChatException(K));
              }
            });
          }, _.sendTransientMessage = function(A) {
            try {
              if (n.isFalsy(A)) return;
              var R = void 0, N = void 0, O = {};
              if (!(A instanceof Ue.TransientMessage) || (R = A.getReceiverId(), N = A.getReceiverType(), O = A.getData(), n.isFalsy(R) || n.isFalsy(N))) return;
              var y = _.getMode();
              (n.isFalsy(y) || y && y !== t.APP_SETTINGS.KEYS.NO_TRANSIENT) && Me.sendTransientMessage(R, N, O);
              return;
            } catch (v) {
              n.Logger.error("CometChat: sendTransientMessage", v);
            }
          }, _.sendTestMessage = function(A) {
            return i(this, void 0, void 0, function() {
              var R, N;
              return S(this, function(O) {
                switch (O.label) {
                  case 0:
                    return O.trys.push([
                      0,
                      3,
                      ,
                      4
                    ]), (R = A) instanceof u.BaseMessage ? [3, 2] : [4, F.CometChatHelper.processMessage(A)];
                  case 1:
                    R = O.sent(), O.label = 2;
                  case 2:
                    return R instanceof C.TextMessage && Ne.WSConnectionHelper.getInstance().publishMessage(R), [3, 4];
                  case 3:
                    return N = O.sent(), n.Logger.error("CometChat: sendTestMessage", N), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }, _.getMessageDetails = function(A) {
            return new Promise(function(R, N) {
              try {
                n.isFalsy(A) ? N(new o.CometChatException(D.ERRORS.PARAMETER_MISSING)) : s.makeApiCall("getMessageDetails", { messageId: A }, ee.ThreadParser.withThreadSubscribedParam()).then(function(O) {
                  R(c.MessageController.trasformJSONMessge(O.data));
                }, function(O) {
                  n.Logger.error("CometChat:GetMessageDetails:", O), N(new o.CometChatException(O.error));
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.getMessageReceipts = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateMsgId(A);
                if (O instanceof o.CometChatException) return void N(O);
                n.isFalsy(A) ? N(new o.CometChatException(D.ERRORS.PARAMETER_MISSING)) : s.makeApiCall("getMessageDetails", { messageId: A }).then(function(y) {
                  c.MessageController.getReceiptsFromJSON(y.data).then(function(v) {
                    R(v);
                  }, function(v) {
                    N(new o.CometChatException(v));
                  });
                }, function(y) {
                  n.Logger.error("CometChat:GetMessageDetails:", y), N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.getUnreadMessageCount = function(A) {
            A === void 0 && (A = !1);
            var R = 0;
            return new Promise(function(N, O) {
              try {
                var y = n.validateHideMessagesFromBlockedUsers(A);
                if (y instanceof o.CometChatException) return void O(y);
                A && (R = 1), s.makeApiCall("getMessages", {}, {
                  unread: 1,
                  count: 1,
                  hideMessagesFromBlockedUsers: R
                }).then(function(v) {
                  var G = {}, K = {};
                  v.data.map(function(B) {
                    B[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == t.MessageConstatnts.RECEIVER_TYPE.GROUP ? K[B[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = B[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT] : G[B[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = B[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT];
                  }), N({
                    users: G,
                    groups: K
                  });
                }, function(v) {
                  O(new o.CometChatException(v.error));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
            });
          }, _.getUnreadMessageCountForAllUsers = function(A) {
            A === void 0 && (A = !1);
            var R = 0;
            return new Promise(function(N, O) {
              try {
                var y = n.validateHideMessagesFromBlockedUsers(A);
                if (y instanceof o.CometChatException) return void O(y);
                A && (R = 1), s.makeApiCall("getMessages", {}, {
                  hideMessagesFromBlockedUsers: R,
                  receiverType: t.MessageConstatnts.RECEIVER_TYPE.USER,
                  unread: 1,
                  count: 1
                }).then(function(v) {
                  var G = {};
                  v.data.map(function(K) {
                    G[K[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = K[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT];
                  }), N(p({}, G));
                }, function(v) {
                  O(new o.CometChatException(v.error));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
            });
          }, _.getUnreadMessageCountForAllGroups = function(A) {
            A === void 0 && (A = !1);
            var R = 0;
            return new Promise(function(N, O) {
              try {
                var y = n.validateHideMessagesFromBlockedUsers(A);
                if (y instanceof o.CometChatException) return void O(y);
                A && (R = 1), s.makeApiCall("getMessages", {}, {
                  hideMessagesFromBlockedUsers: R,
                  receiverType: t.MessageConstatnts.RECEIVER_TYPE.GROUP,
                  unread: 1,
                  count: 1
                }).then(function(v) {
                  var G = {};
                  v.data.map(function(K) {
                    K[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == t.MessageConstatnts.RECEIVER_TYPE.GROUP && (G[K[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = K[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT]);
                  }), N(p({}, G));
                }, function(v) {
                  O(new o.CometChatException(v.error));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
            });
          }, _.getUnreadMessageCountForUser = function(A, R) {
            R === void 0 && (R = !1);
            var N = 0;
            return new Promise(function(O, y) {
              try {
                var v = n.validateId(A, "user");
                if (v instanceof o.CometChatException) return void y(v);
                var G = n.validateHideMessagesFromBlockedUsers(R);
                if (G instanceof o.CometChatException) return void y(G);
                R && (N = 1), s.makeApiCall("getUserMessages", { listId: A }, {
                  hideMessagesFromBlockedUsers: N,
                  unread: 1,
                  count: 1,
                  uid: A
                }).then(function(K) {
                  var B = {};
                  K.data.map(function(J) {
                    B[J[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = J[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT];
                  }), O(p({}, B));
                }, function(K) {
                  y(new o.CometChatException(K.error));
                });
              } catch (K) {
                y(new o.CometChatException(K));
              }
            });
          }, _.getUnreadMessageCountForGroup = function(A, R) {
            R === void 0 && (R = !1);
            var N = 0;
            return new Promise(function(O, y) {
              try {
                var v = n.validateId(A, "group");
                if (v instanceof o.CometChatException) return void y(v);
                var G = n.validateHideMessagesFromBlockedUsers(R);
                if (G instanceof o.CometChatException) return void y(G);
                R && (N = 1), s.makeApiCall("getGroupMessages", { listId: A }, {
                  hideMessagesFromBlockedUsers: N,
                  unread: 1,
                  count: 1,
                  guid: A
                }).then(function(K) {
                  var B = {};
                  K.data.map(function(J) {
                    J[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_TYPE] == t.MessageConstatnts.RECEIVER_TYPE.GROUP && (B[J[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.ENTITY_Id]] = J[t.ResponseConstants.RESPONSE_KEYS.UNREAD_UNDELIVERED_KEYS.COUNT]);
                  }), O(p({}, B));
                }, function(K) {
                  y(new o.CometChatException(K.error));
                });
              } catch (K) {
                y(new o.CometChatException(K));
              }
            });
          }, _.addReaction = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateMsgId(A);
                if (y instanceof o.CometChatException) return void O(y);
                n.isFalsy(A) || n.isFalsy(R) ? O(new o.CometChatException(D.ERRORS.PARAMETER_MISSING)) : s.makeApiCall("addReaction", {
                  messageId: A,
                  reaction: encodeURIComponent(R)
                }).then(function(v) {
                  N(c.MessageController.trasformJSONMessge(v.data));
                }, function(v) {
                  n.Logger.error("CometChat:addReaction:", v), O(new o.CometChatException(v.error));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
            });
          }, _.removeReaction = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateMsgId(A);
                if (y instanceof o.CometChatException) return void O(y);
                n.isFalsy(A) || n.isFalsy(R) ? O(new o.CometChatException(D.ERRORS.PARAMETER_MISSING)) : s.makeApiCall("removeReaction", {
                  messageId: A,
                  reaction: encodeURIComponent(R)
                }).then(function(v) {
                  N(c.MessageController.trasformJSONMessge(v.data));
                }, function(v) {
                  n.Logger.error("CometChat:removeReaction:", v), O(new o.CometChatException(v.error));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
            });
          }, _.editMessage = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateMsgId(A.getId());
                if (O instanceof o.CometChatException) return void N(O);
                s.makeApiCall("updateMessage", { messageId: A.getId() }, A).then(function(y) {
                  R(c.MessageController.trasformJSONMessge(y.data).getActionOn());
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.deleteMessage = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateMsgId(A);
                if (O instanceof o.CometChatException) return void N(O);
                s.makeApiCall("deleteMessage", { messageId: A }, { id: A }).then(function(y) {
                  R(c.MessageController.trasformJSONMessge(y.data).getActionOn());
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.getOnlineUserCount = function() {
            return new Promise(function(A, R) {
              try {
                n.getAppSettings().then(function(N) {
                  var O = n.format(new E.EndpointFactory().wsApi, n.getChatHost(N), n.format(t.ONLINE_MEMBER_COUNT_API.ENDPOINTS.GET_ONLINE_MEMBER_COUNT, N[t.APP_SETTINGS.KEYS.WS_API_VERSION])), y = {
                    appId: _.appId,
                    Authorization: _.jwt,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  };
                  s.postData(O, "POST", {}, y, !1).then(function(v) {
                    return v.json();
                  }).then(function(v) {
                    return v.hasOwnProperty(t.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? A(v[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ONLINE_MEMBER_COUNT_API.RESPONSE.ONLINE_USERS_COUNT]) : R(new o.CometChatException(v.error));
                  }).catch(function() {
                    return R({ error: D.FETCH_ERROR.ERROR_IN_API_CALL });
                  });
                }, function(N) {
                  return R(new o.CometChatException(N));
                });
              } catch (N) {
                return R(new o.CometChatException(N));
              }
            });
          }, _.getOnlineGroupMemberCount = function(A) {
            return new Promise(function(R, N) {
              try {
                if (!A || A.length == 0) return N(new o.CometChatException(t.ONLINE_MEMBER_COUNT_API.ERRORS.INVALID_GROUPLIST));
                n.getAppSettings().then(function(O) {
                  var y = n.format(new E.EndpointFactory().wsApi, n.getChatHost(O), n.format(t.ONLINE_MEMBER_COUNT_API.ENDPOINTS.GET_ONLINE_MEMBER_COUNT, O[t.APP_SETTINGS.KEYS.WS_API_VERSION])), v = { groups: A }, G = {
                    appId: _.appId,
                    Authorization: _.jwt,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  };
                  s.postData(y, "POST", v, G, !1).then(function(K) {
                    return K.json();
                  }).then(function(K) {
                    return K.hasOwnProperty(t.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? R(K[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ONLINE_MEMBER_COUNT_API.RESPONSE.GROUPS]) : N(new o.CometChatException(K.error));
                  }).catch(function() {
                    return N({ error: D.FETCH_ERROR.ERROR_IN_API_CALL });
                  });
                }, function(O) {
                  return N(new o.CometChatException(O));
                });
              } catch (O) {
                return N(new o.CometChatException(O));
              }
            });
          }, _.createUser = function(A, R) {
            return new Promise(function(N, O) {
              try {
                if (n.isFalsy(R)) return void O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.GENERAL_ERROR.INVALID), "AUTH_KEY", "AUTH_KEY", "AUTH_KEY", "AUTH_KEY"))));
                _.apiKey = R;
                var y = n.validateCreateUser(A);
                if (y instanceof o.CometChatException) return void O(y);
                if (!(A instanceof r.User)) {
                  var v = void 0;
                  if (!A.hasOwnProperty(t.UserConstants.UID)) return void O(new o.CometChatException(D.ERRORS.PARAMETER_MISSING));
                  if (!A.hasOwnProperty(t.UserConstants.NAME)) return void O(new o.CometChatException(D.ERRORS.PARAMETER_MISSING));
                  v = new r.User(A[t.UserConstants.UID], A[t.UserConstants.NAME]), A.hasOwnProperty(t.UserConstants.AVATAR) && v.setAvatar(A[t.UserConstants.AVATAR]), A.hasOwnProperty(t.UserConstants.ROLE) && v.setRole(A[t.UserConstants.ROLE]), A.hasOwnProperty(t.UserConstants.META_DATA) && v.setMetadata(A[t.UserConstants.META_DATA]), A.hasOwnProperty(t.UserConstants.LINK) && v.setLink(A[t.UserConstants.LINK]), A.hasOwnProperty(t.UserConstants.STATUS_MESSAGE) && v.setStatusMessage(A[t.UserConstants.STATUS_MESSAGE]), A.hasOwnProperty(t.UserConstants.TAGS) && v.setTags(A[t.UserConstants.TAGS]), A = v;
                }
                s.makeApiCall("createUser", {}, A).then(function(G) {
                  N(d.UsersController.trasformJSONUser(G.data));
                }, function(G) {
                  O(new o.CometChatException(G.error));
                });
              } catch (G) {
                O(new o.CometChatException(G));
              }
            });
          }, _.updateUser = function(A, R) {
            var N = this;
            return new Promise(function(O, y) {
              try {
                if (n.isFalsy(R)) return void y(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.GENERAL_ERROR.INVALID), "AUTH_KEY", "AUTH_KEY", "AUTH_KEY", "AUTH_KEY"))));
                _.apiKey = R;
                var v = n.validateUpdateUser(A);
                if (v instanceof o.CometChatException) return void y(v);
                if (!(A instanceof r.User)) {
                  var G = void 0;
                  if (!A.hasOwnProperty(t.UserConstants.UID)) return void y(new o.CometChatException(D.ERRORS.PARAMETER_MISSING));
                  G = new r.User(A[t.UserConstants.UID]), A.hasOwnProperty(t.UserConstants.NAME) && G.setName(A[t.UserConstants.NAME]), A.hasOwnProperty(t.UserConstants.AVATAR) && G.setAvatar(A[t.UserConstants.AVATAR]), A.hasOwnProperty(t.UserConstants.ROLE) && G.setRole(A[t.UserConstants.ROLE]), A.hasOwnProperty(t.UserConstants.META_DATA) && G.setMetadata(A[t.UserConstants.META_DATA]), A.hasOwnProperty(t.UserConstants.LINK) && G.setLink(A[t.UserConstants.LINK]), A.hasOwnProperty(t.UserConstants.STATUS_MESSAGE) && G.setStatusMessage(A[t.UserConstants.STATUS_MESSAGE]), A.hasOwnProperty(t.UserConstants.TAGS) && G.setTags(A[t.UserConstants.TAGS]), A = G;
                }
                var K = A.uid;
                s.makeApiCall("updateUser", { uid: K }, A).then(function(B) {
                  N.user && K.toLocaleLowerCase() === N.user.getUid().toLocaleLowerCase() ? e.LocalStorage.getInstance().get("user").then(function(J) {
                    if (J) {
                      var Q = d.UsersController.trasformJSONUser(B.data), he = B.data;
                      he.wsChannel = J.wsChannel, he.authToken = _.authToken, he.status = t.PresenceConstatnts.STATUS.ONLINE, J.jwt && (he.jwt = J.jwt), _.user = new r.Me(he), N.localStorage.set("user", _.user), O(Q);
                    }
                  }) : O(d.UsersController.trasformJSONUser(B.data));
                }, function(B) {
                  y(new o.CometChatException(B.error));
                });
              } catch (B) {
                y(new o.CometChatException(B));
              }
            });
          }, _.updateCurrentUserDetails = function(A) {
            var R = this;
            return new Promise(function(N, O) {
              try {
                A.uid = R.user.uid;
                var y = n.validateUpdateUser(A);
                if (y instanceof o.CometChatException) return void O(y);
                if (!(A instanceof r.User)) {
                  var v = void 0;
                  A.hasOwnProperty(t.UserConstants.UID) && (v = new r.User(A[t.UserConstants.UID])), A.hasOwnProperty(t.UserConstants.NAME) && v.setName(A[t.UserConstants.NAME]), A.hasOwnProperty(t.UserConstants.AVATAR) && v.setAvatar(A[t.UserConstants.AVATAR]), A.hasOwnProperty(t.UserConstants.ROLE) && v.setRole(A[t.UserConstants.ROLE]), A.hasOwnProperty(t.UserConstants.META_DATA) && v.setMetadata(A[t.UserConstants.META_DATA]), A.hasOwnProperty(t.UserConstants.LINK) && v.setLink(A[t.UserConstants.LINK]), A.hasOwnProperty(t.UserConstants.STATUS_MESSAGE) && v.setStatusMessage(A[t.UserConstants.STATUS_MESSAGE]), A.hasOwnProperty(t.UserConstants.TAGS) && v.setTags(A[t.UserConstants.TAGS]), A = v;
                }
                s.makeApiCall("updateMyDetails", {}, A).then(function(G) {
                  var K = d.UsersController.trasformJSONUser(G.data), B = _.user = new r.Me(G.data);
                  B.setStatus(t.PresenceConstatnts.STATUS.ONLINE), _.localStorage.set("user", B), N(K);
                }, function(G) {
                  O(new o.CometChatException(G.error));
                });
              } catch (G) {
                O(new o.CometChatException(G));
              }
            });
          }, _.getUser = function(A) {
            return new Promise(function(R, N) {
              try {
                typeof A == "object" && A.hasOwnProperty("uid") && (A = A.uid);
                var O = n.validateId(A, "user");
                if (O instanceof o.CometChatException) return void N(O);
                s.makeApiCall("user", { uid: A }).then(function(y) {
                  R(d.UsersController.trasformJSONUser(y.data));
                }).catch(function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.getLoggedInUser = function() {
            var A = this;
            return new Promise(function(R, N) {
              try {
                _.localStorage.get(t.LOCAL_STORE.KEY_USER).then(function(O) {
                  if (O) _.user = new r.Me(O), R(_.user);
                  else {
                    var y = "", v = "", G = t.APPINFO.platform, K = t.APPINFO.sdkVersion, B = t.APPINFO.apiVersion;
                    _.keyStore.get(t.LOCAL_STORE.KEY_DEVICE_ID).then(function(J) {
                      if (v = J, navigator && (y = navigator.userAgent), v == null) {
                        var Q = ze(), he = (/* @__PURE__ */ new Date()).getTime();
                        v = A.appId + "_" + Q + "_" + he, _.keyStore.set(t.LOCAL_STORE.KEY_DEVICE_ID, v);
                      }
                      var pe = {
                        version: K,
                        apiVersion: B,
                        userAgent: y
                      };
                      n.isFalsy(A.platform) || (pe.platform = A.platform), n.isFalsy(A.language) || (pe.language = A.language), n.isFalsy(A.resource) || (pe.resource = A.resource);
                      var $ = {
                        platform: G,
                        deviceId: v,
                        appInfo: pe
                      };
                      s.makeApiCall("updateMyDetails", {}, $, !1).then(function(_e) {
                        _e.data.jwt && (_.jwt = _e.data.jwt);
                        var Se = _e.data.settings;
                        Se && (e.LocalStorage.getInstance().set("app_settings", Se), Se[t.APP_SETTINGS.KEYS.MODE] && _.setMode(Se[t.APP_SETTINGS.KEYS.MODE]), Se[t.APP_SETTINGS.KEYS.SETTINGS_HASH] && (_.settingsHash = Se[t.APP_SETTINGS.KEYS.SETTINGS_HASH]), Se[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT] && (_.settingsHashReceivedAt = Se[t.APP_SETTINGS.KEYS.SETTINGS_HASH_RECEIVED_AT]), _.isAnalyticsDisabled = !!Se[t.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], Se[t.APP_SETTINGS.KEYS.SECURED_MEDIA_HOST] && (_.SECURED_MEDIA_HOST = Se[t.APP_SETTINGS.KEYS.SECURED_MEDIA_HOST])), R(new r.Me(_e.data));
                      }, function(_e) {
                        N(new o.CometChatException(_e.error));
                      }).catch(function(_e) {
                        N(new o.CometChatException(_e));
                      });
                    });
                  }
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.getLoggedinUser = function() {
            return new Promise(function(A, R) {
              try {
                _.localStorage.get(t.LOCAL_STORE.KEY_USER).then(function(N) {
                  A(N ? new r.User(N) : null);
                }, function(N) {
                  A(null);
                });
              } catch (N) {
                R(new o.CometChatException(N));
              }
            });
          }, _.blockUsers = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateArray(A, "blockUsers");
                if (O instanceof o.CometChatException) return void N(O);
                n.isFalsy(A) ? N(new o.CometChatException(D.USERS_REQUEST_ERRORS.EMPTY_USERS_LIST)) : s.makeApiCall("blockUsers", {}, { blockedUids: A }).then(function(y) {
                  R(y.data);
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.unblockUsers = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateArray(A, "unblockUsers");
                if (O instanceof o.CometChatException) return void N(O);
                n.isFalsy(A) ? N(new o.CometChatException(D.USERS_REQUEST_ERRORS.EMPTY_USERS_LIST)) : s.makeApiCall("unblockUsers", {}, { blockedUids: A }).then(function(y) {
                  R(y.data);
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.getConversation = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateConversationType(R);
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(A, R);
                if (v instanceof o.CometChatException) return void O(v);
                R = R.toLowerCase(), A = A.toLowerCase();
                var G = {}, K = "";
                R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (K = "getGroupConversation", G.guid = A) : (K = "getUserConversation", G.uid = A), s.makeApiCall(K, G).then(function(B) {
                  if (B.data) {
                    var J = B.data;
                    N(w.ConversationController.trasformJSONConversation(J.conversationId, J.conversationType, J.lastMessage, J.conversationWith, parseInt(J.unreadMessageCount), J.tags ? J.tags : [], J.unreadMentionsCount, J.lastReadMessageId, J.latestMessageId, J));
                  } else O(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ConversationErrors.CONVERSATION_NOT_FOUND), R, A))));
                }, function(B) {
                  O(new o.CometChatException(B.error));
                });
              } catch (B) {
                O(new o.CometChatException(B));
              }
            });
          }, _.tagConversation = function(A, R, N) {
            return N === void 0 && (N = []), new Promise(function(O, y) {
              try {
                var v = n.validateConversationType(R);
                if (v instanceof o.CometChatException) return void y(v);
                var G = n.validateId(A, R);
                if (G instanceof o.CometChatException) return void y(G);
                R = R.toLowerCase(), A = A.toLowerCase();
                var K = {}, B = "";
                R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (B = "updateGroupConversation", K.guid = A) : (B = "updateUserConversation", K.uid = A), s.makeApiCall(B, K, { tags: N }).then(function(J) {
                  if (J.data) {
                    var Q = J.data;
                    O(w.ConversationController.trasformJSONConversation(Q.conversationId, Q.conversationType, Q.lastMessage, Q.conversationWith, parseInt(Q.unreadMessageCount), Q.tags ? Q.tags : [], Q.unreadMentionsCount, Q.lastReadMessageId, Q.latestMessageId, Q));
                  } else y(new o.CometChatException(JSON.parse(n.format(JSON.stringify(t.ConversationErrors.CONVERSATION_NOT_FOUND), R, A))));
                }, function(J) {
                  y(new o.CometChatException(J.error));
                });
              } catch (J) {
                y(new o.CometChatException(J));
              }
            });
          }, _.deleteConversation = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateConversationType(R);
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(A, R);
                if (v instanceof o.CometChatException) return void O(v);
                var G = {}, K = "";
                R = R.toLowerCase(), A = A.toLowerCase(), R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (K = "deleteGroupConversation", G.guid = A) : (K = "deleteUserConversation", G.uid = A), s.makeApiCall(K, G).then(function(B) {
                  N("Conversation deleted successfully.");
                }, function(B) {
                  O(new o.CometChatException(B.error));
                });
              } catch (B) {
                O(new o.CometChatException(B));
              }
            });
          }, _.createGroup = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateCreateGroup(A);
                if (O instanceof o.CometChatException) return void N(O);
                if (!(A instanceof h.Group)) {
                  var y = void 0;
                  if (!A.hasOwnProperty(t.GroupConstants.KEYS.GUID)) return void N(new o.CometChatException(D.ERRORS.PARAMETER_MISSING));
                  if (!A.hasOwnProperty(t.GroupConstants.KEYS.NAME)) return void N(new o.CometChatException(D.ERRORS.PARAMETER_MISSING));
                  if (y = new h.Group(A[t.GroupConstants.KEYS.GUID], A[t.GroupConstants.KEYS.NAME], ""), A.hasOwnProperty(t.GroupConstants.KEYS.TYPE)) if (A[t.GroupConstants.KEYS.TYPE].toLocaleLowerCase() == t.GroupType.Password) {
                    if (!A.hasOwnProperty(t.GroupConstants.KEYS.PASSWORD)) return void N(new o.CometChatException(D.GROUP_CREATION_ERRORS.EMPTY_PASSWORD));
                    y.setType(t.GROUP_TYPE.PASSWORD), y.setPassword(A[t.GroupConstants.KEYS.PASSWORD]);
                  } else y.setType(A[t.GroupConstants.KEYS.TYPE]);
                  else y.setType(t.GROUP_TYPE.PUBLIC);
                  A.hasOwnProperty(t.GroupConstants.KEYS.ICON) && y.setIcon(A[t.GroupConstants.KEYS.ICON]), A.hasOwnProperty(t.GroupConstants.KEYS.DESCRIPTION) && y.setDescription(A[t.GroupConstants.KEYS.DESCRIPTION]), A.hasOwnProperty(t.GroupConstants.KEYS.TAGS) && y.setTags(A[t.GroupConstants.KEYS.TAGS]), A = y;
                }
                s.makeApiCall("createGroup", {}, A).then(function(v) {
                  I.GroupsController.trasformJSONGroup(v.data).setHasJoined(!0), R(I.GroupsController.trasformJSONGroup(v.data));
                }, function(v) {
                  N(new o.CometChatException(v.error));
                });
              } catch (v) {
                N(new o.CometChatException(v));
              }
            });
          }, _.getGroup = function(A) {
            return new Promise(function(R, N) {
              try {
                typeof A == "object" && A.hasOwnProperty("guid") && (A = A.guid);
                var O = n.validateId(A, "group");
                if (O instanceof o.CometChatException) return void N(O);
                s.makeApiCall("getGroup", { guid: A }).then(function(y) {
                  R(I.GroupsController.trasformJSONGroup(y.data));
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.joinGroup = function(A, R, N) {
            return R === void 0 && (R = t.GroupType.Public), N === void 0 && (N = ""), new Promise(function(O, y) {
              try {
                var v = n.validateJoinGroup(A, R, N);
                if (v instanceof o.CometChatException) return void y(v);
                var G = void 0;
                typeof A == "object" && (A.hasOwnProperty(t.GroupConstants.KEYS.GUID) ? (A.hasOwnProperty(t.GroupConstants.KEYS.TYPE) && (R = A[t.GroupConstants.KEYS.TYPE], A[t.GroupConstants.KEYS.TYPE].toLocaleLowerCase() === t.GroupType.Password && A.hasOwnProperty(t.GroupConstants.KEYS.PASSWORD) && (N = A[t.GroupConstants.KEYS.PASSWORD])), A = A[t.GroupConstants.KEYS.GUID]) : y(new o.CometChatException(D.ERRORS.PARAMETER_MISSING))), G = n.isFalsy(N) ? new h.Group(A, "name", R) : new h.Group(A, "name", R, N), s.makeApiCall("joinGroup", G, G).then(function(K) {
                  var B = I.GroupsController.trasformJSONGroup(K.data[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ActionConstatnts.ACTION_KEYS.ENTITIES][t.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][t.ActionConstatnts.ACTION_KEYS.ENTITY]);
                  B.setHasJoined(!0), O(B);
                }, function(K) {
                  y(new o.CometChatException(K.error));
                });
              } catch (K) {
                y(new o.CometChatException(K));
              }
            });
          }, _.updateGroup = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateUpdateGroup(A);
                if (O instanceof o.CometChatException) return void N(O);
                if (!(A instanceof h.Group)) {
                  var y = void 0;
                  if (!A.hasOwnProperty(t.GroupConstants.KEYS.GUID)) return void N(new o.CometChatException(D.ERRORS.PARAMETER_MISSING));
                  y = new h.Group(t.GroupConstants.KEYS.GUID, "", ""), A.hasOwnProperty(t.GroupConstants.KEYS.TYPE) ? y.setType(A[t.GroupConstants.KEYS.TYPE]) : (A[t.GroupConstants.KEYS.TYPE] = t.GROUP_TYPE.PUBLIC, y.setType[t.GROUP_TYPE.PUBLIC]), A.hasOwnProperty(t.GroupConstants.KEYS.NAME) && y.setName(A[t.GroupConstants.KEYS.NAME]), A.hasOwnProperty(t.GroupConstants.KEYS.ICON) && y.setIcon(A[t.GroupConstants.KEYS.ICON]), A.hasOwnProperty(t.GroupConstants.KEYS.DESCRIPTION) && y.setDescription(A[t.GroupConstants.KEYS.DESCRIPTION]), A.hasOwnProperty(t.GroupConstants.KEYS.TAGS) && y.setTags(A[t.GroupConstants.KEYS.TAGS]), A = y;
                }
                s.makeApiCall("updateGroup", A, A).then(function(v) {
                  R(I.GroupsController.trasformJSONGroup(v.data));
                }, function(v) {
                  N(new o.CometChatException(v.error));
                });
              } catch (v) {
                N(new o.CometChatException(v));
              }
            });
          }, _.deleteGroup = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateId(A, "group");
                if (O instanceof o.CometChatException) return void N(O);
                s.makeApiCall("deleteGroup", { guid: A }).then(function(y) {
                  R(!0);
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.leaveGroup = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = n.validateId(A, "group");
                if (O instanceof o.CometChatException) return void N(O);
                s.makeApiCall("leaveGroup", { guid: A }).then(function(y) {
                  R(!0);
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.kickGroupMember = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateId(A, "group");
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(R, "user");
                if (v instanceof o.CometChatException) return void O(v);
                s.makeApiCall("kickGroupMembers", {
                  guid: A,
                  uid: R
                }).then(function(G) {
                  N(!0);
                }, function(G) {
                  O(new o.CometChatException(G.error));
                });
              } catch (G) {
                O(new o.CometChatException(G));
              }
            });
          }, _.updateGroupMemberScope = function(A, R, N) {
            return new Promise(function(O, y) {
              try {
                var v = n.validateId(A, "group");
                if (v instanceof o.CometChatException) return void y(v);
                var G = n.validateId(R, "user");
                if (G instanceof o.CometChatException) return void y(G);
                var K = n.validateScope(N);
                if (K instanceof o.CometChatException) return void y(K);
                s.makeApiCall("changeScopeOfMember", {
                  guid: A,
                  uid: R
                }, { scope: N }).then(function(B) {
                  O(!0);
                }, function(B) {
                  y(new o.CometChatException(B.error));
                });
              } catch (B) {
                y(new o.CometChatException(B));
              }
            });
          }, _.banGroupMember = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateId(A, "group");
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(R, "user");
                if (v instanceof o.CometChatException) return void O(v);
                s.makeApiCall("banGroupMember", {
                  guid: A,
                  uid: R
                }).then(function(G) {
                  N(!0);
                }, function(G) {
                  O(new o.CometChatException(G.error));
                });
              } catch (G) {
                O(new o.CometChatException(G));
              }
            });
          }, _.unbanGroupMember = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateId(A, "group");
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(R, "user");
                if (v instanceof o.CometChatException) return void O(v);
                s.makeApiCall("unbanGroupMember", {
                  guid: A,
                  uid: R
                }).then(function(G) {
                  N(!0);
                }, function(G) {
                  O(new o.CometChatException(G.error));
                });
              } catch (G) {
                O(new o.CometChatException(G));
              }
            });
          }, _.addMembersToGroup = function(A, R, N) {
            var O = [], y = [], v = [], G = [];
            return new Promise(function(K, B) {
              try {
                var J = n.validateId(A, "group");
                if (J instanceof o.CometChatException) return void B(J);
                var Q = n.validateArray(R, "groupMembers");
                if (Q instanceof o.CometChatException) return void B(Q);
                if (N) {
                  var he = n.validateArray(N, "bannedMembers");
                  if (he instanceof o.CometChatException) return void B(he);
                }
                n.isFalsy(R) && n.isFalsy(N) ? B(new o.CometChatException({})) : n.isFalsy(R) || n.isFalsy(N) ? n.isFalsy(R) ? N.map(function($) {
                  G.push($);
                }) : (R.filter(function($) {
                  if ($.getScope() == t.GROUP_MEMBER_SCOPE.ADMIN) return !0;
                }).map(function($) {
                  O.push($.getUid());
                }), R.filter(function($) {
                  if ($.getScope() == t.GROUP_MEMBER_SCOPE.MODERATOR) return !0;
                }).map(function($) {
                  y.push($.getUid());
                }), R.filter(function($) {
                  if ($.getScope() == t.GROUP_MEMBER_SCOPE.PARTICIPANT) return !0;
                }).map(function($) {
                  v.push($.getUid());
                })) : (R.filter(function($) {
                  if ($.getScope() == t.GROUP_MEMBER_SCOPE.ADMIN) return !0;
                }).map(function($) {
                  O.push($.getUid());
                }), R.filter(function($) {
                  if ($.getScope() == t.GROUP_MEMBER_SCOPE.MODERATOR) return !0;
                }).map(function($) {
                  y.push($.getUid());
                }), R.filter(function($) {
                  if ($.getScope() == t.GROUP_MEMBER_SCOPE.PARTICIPANT) return !0;
                }).map(function($) {
                  v.push($.getUid());
                }), N.map(function($) {
                  G.push($);
                }));
                var pe = {};
                n.isFalsy(O) || (pe = p(p({}, pe), { admins: O })), n.isFalsy(v) || (pe = p(p({}, pe), { participants: v })), n.isFalsy(y) || (pe = p(p({}, pe), { moderators: y })), n.isFalsy(G) || (pe = p(p({}, pe), { usersToBan: G })), s.makeApiCall("addMemebersToGroup", { guid: A }, pe).then(function($) {
                  var _e = {};
                  Object.keys($.data.admins).map(function(Se) {
                    $.data.admins[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e[Se] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e[Se] = $.data.admins[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys($.data.participants).map(function(Se) {
                    $.data.participants[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e[Se] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e[Se] = $.data.participants[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys($.data.moderators).map(function(Se) {
                    $.data.moderators[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e[Se] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e[Se] = $.data.moderators[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys($.data.usersToBan).map(function(Se) {
                    $.data.usersToBan[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e[Se] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e[Se] = $.data.usersToBan[Se][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), K(_e);
                }, function($) {
                  B(new o.CometChatException($.error));
                });
              } catch ($) {
                B(new o.CometChatException($));
              }
            });
          }, _.transferGroupOwnership = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateId(A, "group");
                if (y instanceof o.CometChatException) return void O(y);
                var v = n.validateId(R, "user");
                if (v instanceof o.CometChatException) return void O(v);
                s.makeApiCall("transferOwnership", { guid: A }, { owner: R }).then(function(G) {
                  N(G && G.data && G.data.message ? G.data.message : "Ownership transferred to user " + R + " for the group with guid " + A + ".");
                }, function(G) {
                  O(new o.CometChatException(G.error));
                });
              } catch (G) {
                O(new o.CometChatException(G));
              }
            });
          }, _.createGroupWithMembers = function(A, R, N) {
            var O = [], y = [], v = [], G = [];
            return new Promise(function(K, B) {
              try {
                var J = n.validateCreateGroup(A);
                if (J instanceof o.CometChatException) return void B(J);
                if (R && 0 < R.length) {
                  var Q = n.validateArray(R, "groupMembers");
                  if (Q instanceof o.CometChatException) return void B(Q);
                  R.map(function($) {
                    $.getScope() === t.GROUP_MEMBER_SCOPE.ADMIN && O.push($.getUid()), $.getScope() === t.GROUP_MEMBER_SCOPE.MODERATOR && y.push($.getUid()), $.getScope() === t.GROUP_MEMBER_SCOPE.PARTICIPANT && v.push($.getUid());
                  });
                }
                if (N && 0 < N.length) {
                  var he = n.validateArray(N, "bannedMembers");
                  if (he instanceof o.CometChatException) return void B(he);
                  N.map(function($) {
                    G.push($);
                  });
                }
                var pe = {};
                pe = p({}, A), n.isFalsy(O) || (pe.members = p(p({}, pe.members), { admins: O })), n.isFalsy(v) || (pe.members = p(p({}, pe.members), { participants: v })), n.isFalsy(y) || (pe.members = p(p({}, pe.members), { moderators: y })), n.isFalsy(G) || (pe.members = p(p({}, pe.members), { usersToBan: G })), s.makeApiCall("createGroup", {}, pe).then(function($) {
                  var _e = { members: {} }, Se = $.data.members.data ? $.data.members.data : {
                    admins: {},
                    moderators: {},
                    participants: {},
                    usersToBan: {}
                  };
                  Object.keys(Se.admins).map(function(Oe) {
                    Se.admins[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e.members[Oe] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e.members[Oe] = Se.admins[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(Se.participants).map(function(Oe) {
                    Se.participants[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e.members[Oe] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e.members[Oe] = Se.participants[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(Se.moderators).map(function(Oe) {
                    Se.moderators[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e.members[Oe] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e.members[Oe] = Se.moderators[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), Object.keys(Se.usersToBan).map(function(Oe) {
                    Se.usersToBan[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS] ? _e.members[Oe] = t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.SUCCESS : _e.members[Oe] = Se.usersToBan[Oe][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.ERROR][t.ResponseConstants.RESPONSE_KEYS.GROUP_MEMBERS_RESPONSE.MESSAGE];
                  }), delete $.data.members;
                  var Ge = $.data, ye = I.GroupsController.trasformJSONGroup(Ge);
                  ye.setHasJoined(!0), _e = p(p({}, _e), { group: ye }), K(_e);
                }, function($) {
                  B(new o.CometChatException($.error));
                });
              } catch ($) {
                B(new o.CometChatException($));
              }
            });
          }, _.initiateCall = function(A, R) {
            var N = this;
            return R === void 0 && (R = a.DEFAULT_TIMEOUT), new Promise(function(O, y) {
              var v = n.resolveTimeout(R), G = N.getActiveCall();
              if (G === null) try {
                n.isFalsy(JSON.parse(JSON.stringify(A)).sender) ? n.isFalsy(G) ? (A.setStatus(t.CallConstants.CALL_STATUS.INITIATED), A.receiver = A.receiverId.toString(), delete A.receiverId, s.makeApiCall("createCallSession", {}, A).then(function(K) {
                  var B = c.MessageController.trasformJSONMessge(K[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  m.CallController.getInstance().initiateCall(B, v).then(function(J) {
                    O(B);
                  }).catch(function(J) {
                    y(new o.CometChatException(J));
                  });
                }, function(K) {
                  y(new o.CometChatException(K.error));
                })) : y(new o.CometChatException(t.CALL_ERROR.ERROR_IN_CALLING)) : m.CallController.getInstance().initiateCall(A, v).then(function(K) {
                  O(Object.assign(A));
                }).catch(function(K) {
                  y(new o.CometChatException(K));
                });
              } catch (K) {
                y(new o.CometChatException(K));
              }
              else y(new o.CometChatException(t.CALL_ERROR.CALL_ALREADY_INITIATED));
            });
          }, _.acceptCall = function(A) {
            var R = this;
            return new Promise(function(N, O) {
              if (R.getActiveCall() === null) try {
                var y = {};
                y[t.CallConstants.CALL_KEYS.CALL_STATUS] = t.CallConstants.CALL_STATUS.ONGOING, s.makeApiCall("updateCallSession", { sessionid: A }, y).then(function(v) {
                  var G = c.MessageController.trasformJSONMessge(v[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  m.CallController.getInstance().onCallStarted(G), N(G);
                }, function(v) {
                  O(new o.CometChatException(v.error));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
              else O(new o.CometChatException(t.CALL_ERROR.CANNOT_ACCEPT_CALL));
            });
          }, _.rejectCall = function(A, R) {
            try {
              switch (R) {
                case t.CallConstants.CALL_STATUS.REJECTED:
                  return this.rejectIncomingCall(A);
                case t.CallConstants.CALL_STATUS.CANCELLED:
                  return this.cancelCall(A);
                case t.CallConstants.CALL_STATUS.BUSY:
                  return this.sendBusyResponse(A);
                default:
                  return this.endCall(A, !0);
              }
            } catch (N) {
              n.Logger.error("CometChat: rejectCall", N);
            }
          }, _.endCall = function(A, R) {
            var N = this;
            return new Promise(function(O, y) {
              n.isFalsy(R) && (R = !1);
              var v = N.getActiveCall();
              if (v !== null) {
                if (v.getSessionId() === A) try {
                  var G = {};
                  G[t.CallConstants.CALL_KEYS.CALL_STATUS] = t.CallConstants.CALL_STATUS.ENDED, v.getJoinedAt() && (G[t.CallConstants.CALL_KEYS.CALL_JOINED_AT] = v.getJoinedAt()), s.makeApiCall("updateCallSession", { sessionid: A }, G).then(function(K) {
                    R || m.CallController.getInstance().endSession();
                    var B = c.MessageController.trasformJSONMessge(K[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                    O(B), m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onCallEnded(B), m.CallController.getInstance().endCall();
                  }, function(K) {
                    n.Logger.log("calling Log", { error: K }), R || m.CallController.getInstance().endSession(), v.setStatus(t.CallConstants.CALL_STATUS.ENDED), O(v), m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onCallEnded(v), m.CallController.getInstance().endCall();
                  });
                } catch (K) {
                  y(new o.CometChatException(K));
                }
              } else R || m.CallController.getInstance().endSession(), O(null), m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onCallEnded(null), m.CallController.getInstance().endCall();
            });
          }, _.getActiveCall = function() {
            try {
              return m.CallController.getInstance().getActiveCall();
            } catch (A) {
              n.Logger.error("CometChat: getActiveCall", A);
            }
          }, _.clearActiveCall = function() {
            m.CallController.getInstance().clearActiveCall();
          }, _.startCall = function(A, R, N) {
            var O = this;
            try {
              var y, v, G, K, B, J, Q, he, pe, $, _e = this.getActiveCall(), Se = !1, Ge = !0, ye = !0, Oe = !0, Ye = !0, we = !0, $e = !0, Je = !1, Ze = !1, et = t.CallConstants.CALL_MODE.DEFAULT, lt = !1, dt = !1, _t = !1, ct = !0, Ct = !0, tt = {}, nt = this.user;
              K = new ae.VirtualBackgroundBuilder().build(), B = new ae.MainVideoContainerSetting(), n.getAppSettings().then(function(Ve) {
                if (he = Ve[t.APP_SETTINGS.KEYS.WEBRTC_HOST], tt[t.APP_SETTINGS.KEYS.ANALYTICS_HOST] = Ve[t.APP_SETTINGS.KEYS.ANALYTICS_HOST], tt[t.APP_SETTINGS.KEYS.ANALYTICS_VERSION] = Ve[t.APP_SETTINGS.KEYS.ANALYTICS_VERSION], tt[t.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED] = Ve[t.APP_SETTINGS.KEYS.ANALYTICS_PING_DISABLED], tt[t.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL] = Ve[t.APP_SETTINGS.KEYS.ANALYTICS_USE_SSL], J = Ve[t.APP_SETTINGS.KEYS.REGION], n.isFalsy(N) || m.CallController.getInstance().setCallListner(N), n.isFalsy(O.appSettings)) m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.NOT_INITIALIZED));
                else if (J) if (nt) if (($ = new ne.RTCUser(nt.getUid())).setName(nt.getName()), $.setAvatar(nt.getAvatar()), $.setResource(_.getSessionId()), _.appId) if (Q = _.appId, typeof A == "string") {
                  if (_e) {
                    var Tt = _e.getType();
                    Se = Tt === t.CallConstants.CALL_TYPE.AUDIO, v = _e.getSessionId();
                  } else {
                    if (n.isFalsy(A)) return void (m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.SESSION_ID_REQUIRED)));
                    v = ("v1." + J + "." + _.getAppId() + "." + A).toLowerCase();
                  }
                  if (!v) return void (m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.SESSION_ID_REQUIRED)));
                  ct = !!Se;
                  var ht = {
                    uid: nt.getUid(),
                    sessionId: v
                  };
                  _.getJWT(ht).then(function(je) {
                    je.hasOwnProperty("token") ? ($.setJWT(je.token), y = new ae.CallSettingsBuilder().setSessionID(v).enableDefaultLayout(Ge).setIsAudioOnlyCall(Se).setUser($).setRegion(J).setAppId(Q).setDomain(he).showEndCallButton(Ye).showMuteAudioButton(Oe).showPauseVideoButton(ye).showScreenShareButton(we).showModeButton($e).setMode(et).setAnalyticsSettings(tt).startWithAudioMuted(Je).startWithVideoMuted(Ze).showRecordingButton(lt).startRecordingOnCallStart(dt).forceLegacyUI(_t).showSwitchToVideoCallButton(ct).setVirtualBackground(K).showVirtualBackgroundSetting(Ct).setMainVideoContainerSetting(B).build(), m.CallController.getInstance().startCall(y, R)) : m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.JWT_NOT_FOUND));
                  }, function(je) {
                    m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(je));
                  });
                } else {
                  if (n.isFalsy(A)) return void (m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.CALL_SETTINGS_REQUIRED)));
                  if (_e)
                    Tt = _e.getType(), Se = Tt === t.CallConstants.CALL_TYPE.AUDIO, v = _e.getSessionId();
                  else {
                    if (Se = A.isAudioOnlyCall(), n.isFalsy(A.getSessionId())) return void (m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.SESSION_ID_REQUIRED)));
                    v = ("v1." + J + "." + _.getAppId() + "." + A.getSessionId()).toLowerCase();
                  }
                  if (!v) return void (m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.SESSION_ID_REQUIRED)));
                  Ge = A.isDefaultLayoutEnabled(), ye = A.isPauseVideoButtonEnabled(), Oe = A.isMuteAudioButtonEnabled(), Ye = A.isEndCallButtonEnabled(), we = A.isScreenShareButtonEnabled(), et = A.getMode(), pe = A.getLocalizedStringObject(), G = A.getCustomCSS(), $e = A.isModeButtonEnabled(), Je = A.getStartWithAudioMuted(), Ze = A.getStartWithVideoMuted(), lt = A.isRecordingButtonEnabled(), dt = A.shouldStartRecordingOnCallStart(), _t = A.shouldUseLegacyUI(), ct = !!Se && A.isAudioToVideoButtonEnabled(), K = A.getVirtualBackground(), Ct = A.isVirtualBackgroundSettingEnabled(), B = A.getMainVideoContainerSetting(), ht = {
                    uid: nt.getUid(),
                    sessionId: v
                  }, _.getJWT(ht).then(function(je) {
                    je.hasOwnProperty("token") ? ($.setJWT(je.token), y = new ae.CallSettingsBuilder().setSessionID(v).enableDefaultLayout(Ge).setIsAudioOnlyCall(Se).setUser($).setRegion(J).setAppId(Q).setDomain(he).showEndCallButton(Ye).showMuteAudioButton(Oe).showPauseVideoButton(ye).showScreenShareButton(we).showModeButton($e).setMode(et).setLocalizedStringObject(pe).setCustomCSS(G).setAnalyticsSettings(tt).startWithAudioMuted(Je).startWithVideoMuted(Ze).showRecordingButton(lt).startRecordingOnCallStart(dt).forceLegacyUI(_t).showSwitchToVideoCallButton(ct).setVirtualBackground(K).showVirtualBackgroundSetting(Ct).setMainVideoContainerSetting(B).build(), m.CallController.getInstance().startCall(y, R)) : m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.JWT_NOT_FOUND));
                  }, function(je) {
                    m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(je));
                  });
                }
                else m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.NOT_INITIALIZED));
                else m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.NOT_LOGGED_IN));
                else m.CallController.getInstance().getCallListner() && m.CallController.getInstance().getCallListner()._eventListener.onError(new o.CometChatException(t.CALL_ERROR.NOT_INITIALIZED));
              }, function(Ve) {
                n.Logger.error("CometChat: startCall", Ve);
              });
            } catch (Ve) {
              n.Logger.error("CometChat: startCall", Ve);
            }
          }, _.getCallParticipantCount = function(A, R) {
            return new Promise(function(N, O) {
              try {
                n.getAppSettings().then(function(y) {
                  if (n.isFalsy(A)) return O(new o.CometChatException(t.ProsodyApiErrors.INVALID_SESSIONID));
                  if (n.isFalsy(R)) return O(new o.CometChatException(t.ProsodyApiErrors.INVALID_TYPE));
                  var v = y[t.APP_SETTINGS.KEYS.REGION], G = {}, K = y[t.APP_SETTINGS.KEYS.WEBRTC_HOST], B = y[t.APP_SETTINGS.KEYS.WEBRTC_API_SUBDOMAIN], J = n.format(new E.EndpointFactory().prosodyApi, B, K, t.PROSODY_API.PATH.ROOM_SIZE);
                  R.toLowerCase() === "direct" && (A = ("v1." + v + "." + _.getAppId() + "." + A).toLowerCase()), G[t.PROSODY_API.QUERY_PARAMETERS.DOMAIN] = K, G[t.PROSODY_API.QUERY_PARAMETERS.ROOM] = A, s.postData(J, "GET", G, {}, !1).then(function(Q) {
                    return Q.text();
                  }).then(function(Q) {
                    var he = Q ? JSON.parse(Q) : {};
                    return he.hasOwnProperty(t.PROSODY_API.RESPONSE.PARTICIPANTS) ? N(he[t.PROSODY_API.RESPONSE.PARTICIPANTS]) : N(0);
                  }).catch(function() {
                    return O({ error: D.FETCH_ERROR.ERROR_IN_API_CALL });
                  });
                }, function(y) {
                  return O(new o.CometChatException(y));
                });
              } catch (y) {
                return O(new o.CometChatException(y));
              }
            });
          }, _.rejectIncomingCall = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = {};
                O[t.CallConstants.CALL_KEYS.CALL_STATUS] = t.CallConstants.CALL_STATUS.REJECTED, s.makeApiCall("updateCallSession", { sessionid: A }, O).then(function(y) {
                  R(c.MessageController.trasformJSONMessge(y[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]));
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.cancelCall = function(A) {
            var R = this;
            return new Promise(function(N, O) {
              try {
                var y = {};
                y[t.CallConstants.CALL_KEYS.CALL_STATUS] = t.CallConstants.CALL_STATUS.CANCELLED, s.makeApiCall("updateCallSession", { sessionid: A }, y).then(function(v) {
                  var G = c.MessageController.trasformJSONMessge(v[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  R.getActiveCall().getSessionId() === A && m.CallController.getInstance().endCallSession(), N(G);
                }, function(v) {
                  O(new o.CometChatException(v.error));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
            });
          }, _.sendBusyResponse = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = {};
                O[t.CallConstants.CALL_KEYS.CALL_STATUS] = t.CallConstants.CALL_STATUS.BUSY, s.makeApiCall("updateCallSession", { sessionid: A }, O).then(function(y) {
                  R(c.MessageController.trasformJSONMessge(y[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]));
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.sendUnansweredResponse = function(A) {
            return new Promise(function(R, N) {
              try {
                var O = {};
                O[t.CallConstants.CALL_KEYS.CALL_STATUS] = t.CallConstants.CALL_STATUS.UNANSWERED, s.makeApiCall("updateCallSession", { sessionid: A }, O).then(function(y) {
                  var v = c.MessageController.trasformJSONMessge(y[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                  Me.publishCallMessage(v), R(v);
                }, function(y) {
                  N(new o.CometChatException(y.error));
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.addConnectionListener = function(A, R) {
            try {
              Le.addConnectionEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addConnectionListener", N);
            }
          }, _.removeConnectionListener = function(A) {
            try {
              Le.removeConnectionEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeConnectionListener", R);
            }
          }, _.addMessageListener = function(A, R) {
            try {
              Le.addMessageEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addMessageListener", N);
            }
          }, _.removeMessageListener = function(A) {
            try {
              Le.removeMessageEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeMessageListener", R);
            }
          }, _.addCallListener = function(A, R) {
            try {
              Le.addCallEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addCallListener", N);
            }
          }, _.removeCallListener = function(A) {
            try {
              Le.removeCallEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeCallListener", R);
            }
          }, _.addAIAssistantListener = function(A, R) {
            try {
              Le.addAIAssistantListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addAIAssistantListener", N);
            }
          }, _.removeAIAssistantListener = function(A) {
            try {
              Le.removeAIAssistantListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeAIAssistantListener", R);
            }
          }, _.addUserListener = function(A, R) {
            try {
              Le.addUserEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addUserListener", N);
            }
          }, _.removeUserListener = function(A) {
            try {
              Le.removeUserEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeUserListener", R);
            }
          }, _.addGroupListener = function(A, R) {
            try {
              Le.addGroupEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addGroupListener", N);
            }
          }, _.removeGroupListener = function(A) {
            try {
              Le.removeGroupEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeGroupListener", R);
            }
          }, _.addLoginListener = function(A, R) {
            try {
              Le.addLoginEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addLoginListener", N);
            }
          }, _.removeLoginListener = function(A) {
            try {
              Le.removeLoginEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeLoginListener", R);
            }
          }, _.generateAuthToken = function(A) {
            var R = this;
            return new Promise(function(N, O) {
              try {
                var y = {}, v = "", G = "", K = t.APPINFO.platform, B = t.APPINFO.sdkVersion, J = t.APPINFO.apiVersion;
                navigator && (G = navigator.userAgent), _.keyStore.get(t.LOCAL_STORE.KEY_DEVICE_ID).then(function(Q) {
                  if ((v = Q) == null) {
                    var he = ze(), pe = (/* @__PURE__ */ new Date()).getTime();
                    v = R.appId + "_" + he + "_" + pe, _.keyStore.set(t.LOCAL_STORE.KEY_DEVICE_ID, v);
                  }
                  y = {
                    platform: K,
                    deviceId: v,
                    appInfo: {
                      version: B,
                      apiVersion: J,
                      userAgent: G
                    }
                  }, s.makeApiCall("authToken", { uid: A }, y).then(function($) {
                    N($.data);
                  }).catch(function($) {
                    O(new o.CometChatException($.error));
                  });
                }, function(Q) {
                  n.Logger.error("Got error while fetching data from key store", Q);
                });
              } catch (Q) {
                O(new o.CometChatException(Q));
              }
            });
          }, _.tryReconnectingToWS = function() {
            _.WSReconnectionInProgress || _.startWSReconnectionTimer();
          }, _.prototype.makeWSConnection = function() {
            _.WSLogin(_.user);
          }, _.prototype.accidentallyDisconnected = function() {
            _.currentConnectionStatus = t.CONNECTION_STATUS.CONNECTING, Le.connectionHandlers.map(function(A) {
              try {
                A._eventListener && (n.isFalsy(A._eventListener.inConnecting) || A._eventListener.inConnecting());
              } catch (R) {
                n.Logger.error("ConnectionHandlers: inConnecting Status", R);
              }
            }), _.tryReconnectingToWS();
          }, _.WSLogin = function(A) {
            var R = this;
            if (Me.connection) {
              var N = Me.connection.readyState;
              if (N !== Ie.READY_STATE.CLOSING && N !== Ie.READY_STATE.CLOSED) return void n.Logger.error("CometChat :: WSLogin", Me.connection);
              Me.connection = null;
            }
            Me.WSLogin(A.getJWT(), function(O) {
              switch (O) {
                case Ie.READY_STATE.CONNECTING:
                  (y = _.getConnectionStatus()) == t.CONNECTION_STATUS.DISCONNECTED && (R.currentConnectionStatus = t.CONNECTION_STATUS.CONNECTING, Le.connectionHandlers.map(function(v) {
                    try {
                      v._eventListener && (n.isFalsy(v._eventListener.inConnecting) || v._eventListener.inConnecting());
                    } catch (G) {
                      n.Logger.error("connectionHandlers: Connecting Status", G);
                    }
                  }));
                  break;
                case Ie.READY_STATE.OPEN:
                  (y = _.getConnectionStatus()) == t.CONNECTION_STATUS.CONNECTING && (R.currentConnectionStatus = t.CONNECTION_STATUS.CONNECTED, Le.connectionHandlers.map(function(v) {
                    try {
                      v._eventListener && (n.isFalsy(v._eventListener.onConnected) || v._eventListener.onConnected());
                    } catch (G) {
                      n.Logger.error("connectionHandlers: Connected Status", G);
                    }
                  })), _.WSReconnectionInProgress && _.clearWSReconnectionTimer();
                  break;
                case Ie.READY_STATE.CLOSING:
                  break;
                case Ie.READY_STATE.CLOSED:
                  var y;
                  (y = _.getConnectionStatus()) !== t.CONNECTION_STATUS.DISCONNECTED && y !== t.CONNECTION_STATUS.CONNECTING && (R.currentConnectionStatus = t.CONNECTION_STATUS.DISCONNECTED, Le.connectionHandlers.map(function(v) {
                    try {
                      v._eventListener && (n.isFalsy(v._eventListener.onDisconnected) || v._eventListener.onDisconnected());
                    } catch (G) {
                      n.Logger.error("connectionHandlers: Disconnected Status", G);
                    }
                  })), Me.connection && (Me.connection = null), _.isLoggedOut || _.disconnectedByUser || R.tryReconnectingToWS();
              }
            });
          }, _.pingAnalytics = function() {
            var A = this;
            try {
              _.keyStore.get("deviceId").then(function(R) {
                n.getAppSettings().then(function(N) {
                  var O = null;
                  window && window.location && window.location.origin && (O = window.location.origin);
                  var y = "", v = R, G = {
                    version: t.SDKHeader.sdkVersion,
                    apiVersion: N[t.APP_SETTINGS.KEYS.CHAT_API_VERSION],
                    origin: O,
                    uts: (/* @__PURE__ */ new Date()).getTime()
                  };
                  n.isFalsy(A.resource) || (G.resource = A.resource), n.isFalsy(A.platform) || (G.platform = A.platform), n.isFalsy(A.language) || (G.language = A.language), navigator && (y = navigator.userAgent);
                  var K = {
                    appInfo: G,
                    uid: _.user.getUid(),
                    userAgent: y,
                    deviceId: v,
                    platform: t.SDKHeader.platform
                  };
                  n.isFalsy(_.getSessionId()) || (K.wsId = _.getSessionId());
                  var B = "https://" + N[t.APP_SETTINGS.KEYS.ANALYTICS_HOST] + "/" + N[t.APP_SETTINGS.KEYS.ANALYTICS_VERSION] + "/ping", J = {
                    appId: _.appId,
                    sdk: n.format(t.SDKHeader.sdk, t.SDKHeader.platform, t.SDKHeader.sdkVersion),
                    "Content-Type": "application/json"
                  };
                  _.settingsHash && (J.settingsHash = _.settingsHash), _.settingsHashReceivedAt && (J.settingsHashReceivedAt = _.settingsHashReceivedAt), _.jwt && (J.Authorization = "Bearer " + _.jwt), _.authToken && (J.authToken = _.authToken), s.postData(B, "POST", K, J, !1).then(function(Q) {
                    return Q.json();
                  }).then(function(Q) {
                    if (Q.hasOwnProperty(t.ResponseConstants.RESPONSE_KEYS.KEY_DATA)) n.Logger.log("Analytics Ping Request Data", Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]);
                    else if (Q.hasOwnProperty(t.ResponseConstants.RESPONSE_KEYS.KEY_ERROR)) {
                      var he = Q[t.ResponseConstants.RESPONSE_KEYS.KEY_ERROR];
                      n.Logger.log("Analytics Ping Request Error", new o.CometChatException(he));
                      var pe = he.code;
                      if (pe === t.Errors.ERR_SETTINGS_HASH_OUTDATED) {
                        var $ = _.authToken;
                        _.getInstance().internalRestart($);
                      }
                      pe === t.Errors.ERR_NO_AUTH && A.updateJWT();
                    }
                  }).catch(function(Q) {
                    n.Logger.error("CometChat: pingAnalytics Fetch Error", Q);
                  });
                }, function(N) {
                  n.Logger.error("CometChat: pingAnalytics getSettings Error", N);
                });
              }, function(R) {
                n.Logger.error("CometChat: pingAnalytics getDeviceId Error", R);
              });
            } catch (R) {
              n.Logger.error("CometChat: pingAnalytics", R);
            }
          }, _.updateJWT = function() {
            s.makeApiCall("getMyDetails", {}, {}, !1).then(function(A) {
              var R = A.data, N = R.settings, O = new r.Me(R);
              if (_.user = O, R.hasOwnProperty("jwt") && R.jwt && (_.jwt = R.jwt), e.LocalStorage.getInstance().set("user", O), N && N[t.APP_SETTINGS.KEYS.SETTINGS_HASH] && _.settingsHash !== N[t.APP_SETTINGS.KEYS.SETTINGS_HASH]) {
                var y = _.getInstance().getAuthToken();
                _.getInstance().internalRestart(y);
              }
              n.Logger.log("CometChat: updateJWT response", A);
            }, function(A) {
              n.Logger.error("CometChat: updateJWT Fetch Error", A);
            }).catch(function(A) {
              n.Logger.error("CometChat: updateJWT", A);
            });
          }, _.startAnalyticsPingTimer = function() {
            var A = this;
            _.isAnalyticsPingStarted = !0, _.analyticsPingTimer = setInterval(function() {
              try {
                A.pingAnalytics();
              } catch (R) {
                n.Logger.error("CometChat: startAnalyticsPingTimer", R);
              }
            }, _.settingsInterval);
          }, _.clearAnalyticsPingTimer = function() {
            try {
              _.isAnalyticsPingStarted = !1, clearInterval(_.analyticsPingTimer);
            } catch (A) {
              n.Logger.error("CometChat: clearAnalyticsPingTimer", A);
            }
          }, _.startWSReconnectionTimer = function() {
            _.WSReconnectionInProgress = !0, _.WSReconnectionTimer = setInterval(function() {
              try {
                _.WSLogin(_.user);
              } catch (A) {
                n.Logger.error("CometChat: startWSReconnectionTimer", A);
              }
            }, _.WSReconnectionTimerInterval);
          }, _.clearWSReconnectionTimer = function() {
            _.WSReconnectionInProgress = !1, clearInterval(_.WSReconnectionTimer);
          }, _.getJWT = function(A) {
            return new Promise(function(R, N) {
              try {
                De.getEndPoint("getJWT").then(function(O) {
                  var y = {
                    appId: _.appId,
                    Accept: "application/json",
                    authToken: _.authToken,
                    resource: _.getSessionId(),
                    sdk: n.format(t.SDKHeader.sdk, t.SDKHeader.platform, t.SDKHeader.sdkVersion),
                    "Content-Type": "application/json"
                  }, v = {};
                  v[t.JWT_API.KEYS.PASSTHROUGH] = A, s.postData(O.endpoint, O.method, v, y, !1).then(function(G) {
                    return G.json();
                  }).then(function(G) {
                    G.hasOwnProperty(t.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? R(G[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]) : N(new o.CometChatException(G.error));
                  }).catch(function(G) {
                    var K = { error: D.FETCH_ERROR.ERROR_IN_API_CALL };
                    N(new o.CometChatException(K));
                  });
                }, function(O) {
                  N(new o.CometChatException(O));
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.getConnectionStatus = function() {
            return this.currentConnectionStatus;
          }, _.prototype.setConnectionStatus = function(A) {
            _.currentConnectionStatus = A;
          }, _.isExtensionEnabled = function(A) {
            return new Promise(function(R, N) {
              try {
                if (n.isFalsy(A)) return N(new o.CometChatException(t.ExtensionErrors.INVALID_EXTENSION));
                n.getAppSettings().then(function(O) {
                  if (O.extensions) {
                    var y = O.extensions;
                    return 0 < y.length ? R(y.some(function(v) {
                      return v.id === A;
                    })) : R(!1);
                  }
                  return N(new o.CometChatException(t.ExtensionErrors.EXTENSION_NOT_FOUND));
                }, function(O) {
                  return N(new o.CometChatException(O));
                });
              } catch (O) {
                return N(new o.CometChatException(O));
              }
            });
          }, _.isAIFeatureEnabled = function(A) {
            return new Promise(function(R, N) {
              try {
                if (n.isFalsy(A)) return N(new o.CometChatException(t.AIFeatureError.INVALID_AI_FEATURE));
                var O = t.AI_FEATURE_ACCESSIBLE, y = t.AI_FEATURE_ENABLED, v = n.format(t.AI_SLUG_ACCESSIBLE, A), G = n.format(t.AI_SLUG_ENABLED, A);
                n.getAppSettings().then(function(K) {
                  if (K?.parameters) {
                    var B = K?.parameters;
                    return B[O] && B[y] && B[v] && B[G] ? R(!0) : R(!1);
                  }
                  return R(!1);
                }, function(K) {
                  return N(new o.CometChatException(K));
                });
              } catch (K) {
                return N(new o.CometChatException(K));
              }
            });
          }, _.getExtensionDetails = function(A) {
            return new Promise(function(R, N) {
              try {
                if (n.isFalsy(A)) return N(new o.CometChatException(t.ExtensionErrors.INVALID_EXTENSION));
                n.getAppSettings().then(function(O) {
                  if (O.extensions) {
                    var y = O.extensions;
                    if (0 < y.length) {
                      var v = y.filter(function(G) {
                        return G.id === A;
                      });
                      return 0 < v.length ? R(new ce.CCExtension(v[0])) : N(new o.CometChatException(t.ExtensionErrors.EXTENSION_NOT_FOUND));
                    }
                    return N(new o.CometChatException(t.ExtensionErrors.EXTENSION_NOT_FOUND));
                  }
                  return N(new o.CometChatException(t.ExtensionErrors.EXTENSION_NOT_FOUND));
                }, function(O) {
                  return N(new o.CometChatException(O));
                });
              } catch (O) {
                return N(new o.CometChatException(O));
              }
            });
          }, _.getAppSettings = function() {
            return new Promise(function(A, R) {
              try {
                s.makeApiCall("appSettings").then(function(N) {
                  e.LocalStorage.getInstance().set(t.LOCAL_STORE.KEY_APP_SETTINGS, N.data), A(N.data);
                }, function(N) {
                  R(new o.CometChatException(N.error));
                });
              } catch (N) {
                R(new o.CometChatException(N));
              }
            });
          }, _.isFeatureEnabled = function(A) {
            return new Promise(function(R, N) {
              try {
                if (n.isFalsy(A)) return N(new o.CometChatException(t.FeatureRestrictionErrors.INVALID_FEATURE));
                n.getAppSettings().then(function(O) {
                  if (O.parameters) {
                    var y = O.parameters;
                    return y.hasOwnProperty(A) ? R(y[A]) : R(!1);
                  }
                  return N(new o.CometChatException(t.FeatureRestrictionErrors.FEATURE_NOT_FOUND));
                }, function(O) {
                  return N(new o.CometChatException(O));
                });
              } catch (O) {
                return N(new o.CometChatException(O));
              }
            });
          }, _.logout = function() {
            var A = this;
            return new Promise(function(R, N) {
              try {
                _.didAnalyticsPingStart() && _.clearAnalyticsPingTimer(), _.WSReconnectionInProgress && _.clearWSReconnectionTimer(), _.isLoggedOut = !0, _.WSReconnectionInProgress = !1, _.isAnalyticsDisabled = !1, s.makeApiCall("userLogout").then(function(O) {
                  A.clearCache().then(function() {
                    _.apiKey = void 0, _.user = void 0, _.authToken = void 0, _.cometChat = void 0, _.mode = void 0, Me.WSLogout(), _.pushToLoginListener("", "Logout_Success"), R(O.data);
                  });
                }, function(O) {
                  A.clearCache().then(function() {
                    _.apiKey = void 0, _.user = void 0, _.authToken = void 0, _.cometChat = void 0, _.mode = void 0, Me.WSLogout(), _.pushToLoginListener("", "Logout_Success"), new o.CometChatException(O.error).code == D.SERVER_ERRORS.AUTH_ERR.code ? R({}) : N(new o.CometChatException(O.error));
                  });
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.callExtension = function(A, R, N, O) {
            return O === void 0 && (O = {}), new Promise(function(y, v) {
              try {
                n.getAppSettings().then(function(G) {
                  var K = n.format(new E.EndpointFactory().extensionApi, A, G[t.APP_SETTINGS.KEYS.REGION], G[t.APP_SETTINGS.KEYS.EXTENSION_DOMAIN], N), B = {
                    appId: _.appId,
                    Accept: "application/json",
                    authToken: _.authToken,
                    resource: _.getSessionId(),
                    sdk: n.format(t.SDKHeader.sdk, t.SDKHeader.platform, t.SDKHeader.sdkVersion),
                    chatApiVersion: G[t.APP_SETTINGS.KEYS.CHAT_API_VERSION],
                    "Content-Type": "application/json"
                  };
                  _.jwt && (B.Authorization = "Bearer " + _.jwt), s.postData(K, R, O, B, !1).then(function(J) {
                    return J.json();
                  }).then(function(J) {
                    J.hasOwnProperty(t.ResponseConstants.RESPONSE_KEYS.KEY_DATA) ? y(J[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA]) : v(new o.CometChatException(J.error));
                  }).catch(function(J) {
                    v({ error: D.FETCH_ERROR.ERROR_IN_API_CALL });
                  });
                }, function(G) {
                  return v(new o.CometChatException(G));
                });
              } catch (G) {
                return v(new o.CometChatException(G));
              }
            });
          }, _.getConversationStarter = function(A, R, N) {
            return new Promise(function(O, y) {
              try {
                A = A.toLowerCase(), R = R.toLowerCase();
                var v = n.validateChatType(R);
                if (v instanceof o.CometChatException) return void y(v);
                var G = n.validateId(A, R);
                if (G instanceof o.CometChatException) return void y(G);
                var K = {}, B = "";
                R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (B = "getGroupConversationStarter", K.guid = A) : (B = "getUserConversationStarter", K.uid = A);
                var J = {
                  uid: _.user.uid,
                  name: _.user.name
                };
                K.onbehalfofuser = btoa(JSON.stringify(J)), s.makeApiCall(B, K, N || {}).then(function(Q) {
                  return Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA] && Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_CONVERSATION_STARTER] ? O(Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_CONVERSATION_STARTER]) : y(new o.CometChatException(t.AIErrors.NO_CONVERSATION_STARTER));
                }, function(Q) {
                  return y(new o.CometChatException(Q.error));
                });
              } catch (Q) {
                return y(new o.CometChatException(Q));
              }
            });
          }, _.getSmartReplies = function(A, R, N) {
            return new Promise(function(O, y) {
              try {
                A = A.toLowerCase(), R = R.toLowerCase();
                var v = n.validateChatType(R);
                if (v instanceof o.CometChatException) return void y(v);
                var G = n.validateId(A, R);
                if (G instanceof o.CometChatException) return void y(G);
                var K = {}, B = "";
                R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (B = "getGroupSmartReply", K.guid = A) : (B = "getUserSmartReply", K.uid = A);
                var J = {
                  uid: _.user.uid,
                  name: _.user.name
                };
                K.onbehalfofuser = btoa(JSON.stringify(J)), s.makeApiCall(B, K, N || {}).then(function(Q) {
                  return Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA] && Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_SMART_REPLIES] ? O(Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_SMART_REPLIES]) : y(new o.CometChatException(t.AIErrors.NO_SMART_REPLY));
                }, function(Q) {
                  return y(new o.CometChatException(Q.error));
                });
              } catch (Q) {
                return y(new o.CometChatException(Q));
              }
            });
          }, _.askBot = function(A, R, N, O, y) {
            return new Promise(function(v, G) {
              try {
                var K = {}, B = "";
                A = A.toLowerCase(), R = R.toLowerCase();
                var J = n.validateChatType(R);
                if (J instanceof o.CometChatException) return void G(J);
                var Q = n.validateId(A, R);
                if (Q instanceof o.CometChatException) return void G(Q);
                var he = n.validateId(N, "bot");
                if (he instanceof o.CometChatException) return void G(he);
                K.botId = N, n.isFalsy(y) && (y = {});
                var pe = n.validateQuestion(O);
                if (pe instanceof o.CometChatException) return void G(pe);
                y.question = O, R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (B = "getBotAssistanceInGroupConversation", K.guid = A) : (B = "getBotAssistanceInUserConversation", K.uid = A);
                var $ = {
                  uid: _.user.uid,
                  name: _.user.name
                };
                K.onbehalfofuser = btoa(JSON.stringify($)), s.makeApiCall(B, K, y).then(function(_e) {
                  if (_e[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA] && _e[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_BOT_REPLY]) {
                    var Se = _e[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_BOT_REPLY];
                    return v(Se.toString());
                  }
                  return G(new o.CometChatException(t.AIErrors.NO_ASSISTANCE));
                }, function(_e) {
                  return G(new o.CometChatException(_e.error));
                });
              } catch (_e) {
                return G(new o.CometChatException(_e));
              }
            });
          }, _.getConversationSummary = function(A, R, N) {
            return new Promise(function(O, y) {
              try {
                A = A.toLowerCase(), R = R.toLowerCase();
                var v = n.validateChatType(R);
                if (v instanceof o.CometChatException) return void y(v);
                var G = n.validateId(A, R);
                if (G instanceof o.CometChatException) return void y(G);
                var K = {}, B = "";
                R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (B = "getGroupConversationSummary", K.guid = A) : (B = "getUserConversationSummary", K.uid = A);
                var J = {
                  uid: _.user.uid,
                  name: _.user.name
                };
                K.onbehalfofuser = btoa(JSON.stringify(J)), s.makeApiCall(B, K, N || {}).then(function(Q) {
                  if (Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA] && Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_CONVERSATION_SUMMARY]) {
                    var he = Q[t.ResponseConstants.RESPONSE_KEYS.KEY_DATA][t.ResponseConstants.RESPONSE_KEYS.KEY_CONVERSATION_SUMMARY];
                    return O(he.toString());
                  }
                  return y(new o.CometChatException(t.AIErrors.NO_CONVERSATION_SUMMARY));
                }, function(Q) {
                  return y(new o.CometChatException(Q.error));
                });
              } catch (Q) {
                return y(new o.CometChatException(Q));
              }
            });
          }, _.setSource = function(A, R, N) {
            n.isFalsy(A) || (this.resource = A), n.isFalsy(R) || (this.platform = R), n.isFalsy(N) || (this.language = N);
          }, _.setDemoMetaInfo = function(A) {
            _.demoMetaInfo = A;
          }, _.clearCache = function() {
            return new Promise(function(A, R) {
              try {
                e.LocalStorage.getInstance().clearStore().then(function() {
                  _.removeDataFromSessionStorage(t.SESSION_STORE.SESSION_ID), n.Logger.info("CometChat: clearCache => All store cleared successfully", "true"), A(!0);
                });
              } catch (N) {
                n.Logger.error("CometChat: clearCache", N), R(N);
              }
            });
          }, _.connect = function() {
            _.user && (Me.connection || (_.disconnectedByUser = !1, _.WSLogin(_.user)), _.didAnalyticsPingStart() || _.isAnalyticsDisabled || (_.pingAnalytics(), _.startAnalyticsPingTimer()));
          }, _.disconnect = function() {
            _.user && (_.disconnectedByUser = !0, Me.connection && Me.WSLogout(), _.didAnalyticsPingStart() && _.clearAnalyticsPingTimer());
          }, _.prototype.internalRestart = function(A) {
            _.internalRestart || _.getInstance().internalLogout(!1).then(function() {
              _.internalRestart = !0, _.login(A).then(function(R) {
                _.shouldConnectToWS = !0, _.internalRestart = !1;
              }, function(R) {
                n.Logger.error("CometChat: internalRestart :: login", R), _.internalRestart = !1;
              });
            }, function(R) {
              n.Logger.error("CometChat: internalRestart :: internalLogout", R);
            });
          }, _.prototype.internalLogout = function(A) {
            return A === void 0 && (A = !0), new Promise(function(R, N) {
              try {
                _.didAnalyticsPingStart() && _.clearAnalyticsPingTimer(), _.WSReconnectionInProgress && _.clearWSReconnectionTimer(), _.isLoggedOut = !0, _.WSReconnectionInProgress = !1, _.isAnalyticsDisabled = !1, ft.UploadManager.getInstance().clearAll(), _.clearCache().then(function() {
                  _.apiKey = void 0, _.user = void 0, _.authToken = void 0, _.cometChat = void 0, _.mode = void 0, Me.WSLogout(), A && _.pushToLoginListener("", "Logout_Success"), R(!0);
                });
              } catch (O) {
                n.Logger.error("CometChat: internalLogout", O), N(O);
              }
            });
          }, _.markAsInteracted = function(A, R) {
            return new Promise(function(N, O) {
              try {
                n.isFalsy(A) ? O(new o.CometChatException(D.ERRORS.PARAMETER_MISSING)) : s.makeApiCall("markInteracted", { messageId: A }, { interactions: [R] }).then(function(y) {
                  N(y && y.data && y.data.message ? y.data.message : "Marked interacted");
                }, function(y) {
                  O(new o.CometChatException(y.error));
                });
              } catch (y) {
                O(new o.CometChatException(y));
              }
            });
          }, _.getConversationUpdateSettings = function() {
            return i(this, void 0, void 0, function() {
              var A;
              return S(this, function(R) {
                switch (R.label) {
                  case 0:
                    return R.trys.push([
                      0,
                      2,
                      ,
                      3
                    ]), [4, n.getAppSettings()];
                  case 1:
                    return A = R.sent(), [2, Et.ConversationUpdateSettings.fromJSON(A)];
                  case 2:
                    return R.sent(), [2, new Et.ConversationUpdateSettings()];
                  case 3:
                    return [2];
                }
              });
            });
          }, _.getFlagReasons = function() {
            return new Promise(function(A, R) {
              try {
                n.getAppSettings().then(function(N) {
                  N && N[t.APP_SETTINGS.KEYS.FLAG_REASONS] && Array.isArray(N[t.APP_SETTINGS.KEYS.FLAG_REASONS]) ? A(N[t.APP_SETTINGS.KEYS.FLAG_REASONS].map(function(O) {
                    return {
                      id: O.id,
                      name: O.name,
                      description: O.description,
                      createdAt: parseInt(O.createdAt),
                      updatedAt: parseInt(O.updatedAt),
                      default: !!O.hasOwnProperty("default") && O.default
                    };
                  })) : A([]);
                }, function(N) {
                  R(new o.CometChatException(N));
                }).catch(function(N) {
                  R(new o.CometChatException(N));
                });
              } catch (N) {
                R(new o.CometChatException(N));
              }
            });
          }, _.flagMessage = function(A, R) {
            var N = this;
            return new Promise(function(O, y) {
              try {
                if (n.isFalsy(A)) return void y(new o.CometChatException(D.ERRORS.PARAMETER_MISSING));
                n.isFalsy(R.reasonId) || N.getFlagReasons().then(function(v) {
                  v.find(function(G) {
                    return G.id === R.reasonId;
                  }) ? N.performFlagMessage(A, R, O, y) : y(new o.CometChatException(D.ERRORS.INVALID_REASON_ID));
                }, function(v) {
                  y(v);
                });
              } catch (v) {
                y(new o.CometChatException(v));
              }
            });
          }, _.performFlagMessage = function(A, R, N, O) {
            var y = {};
            R.reasonId && (y.id = R.reasonId), R.remark && (y.remark = R.remark), s.makeApiCall("flagMessage", { messageId: A }, y, !1).then(function(v) {
              v?.data ? N(v?.data) : N(v);
            }, function(v) {
              O(new o.CometChatException(v.error));
            }).catch(function(v) {
              O(new o.CometChatException(v));
            });
          }, _.markFeedItemAsDelivered = function(A) {
            return new Promise(function(R, N) {
              var O;
              try {
                var y = A && typeof A.getId == "function" ? A.getId() : (O = A) === null || O === void 0 ? void 0 : O.id;
                if (!y) return N(new o.CometChatException({
                  code: "INVALID_FEED_ITEM",
                  message: "A valid NotificationFeedItem with an ID is required.",
                  name: "INVALID_FEED_ITEM"
                }));
                s.makeApiCall(L.CAMPAIGN_ENDPOINTS.NOTIFICATION_FEED_MARK_DELIVERED, { feedItemId: y }, {}).then(function() {
                  R();
                }, function(v) {
                  N(new o.CometChatException(v.error));
                });
              } catch (v) {
                N(new o.CometChatException(v));
              }
            });
          }, _.markFeedItemsAsDelivered = function(A) {
            return new Promise(function(R, N) {
              try {
                if (!A || !Array.isArray(A) || A.length === 0) return N(new o.CometChatException({
                  code: "INVALID_FEED_ITEMS",
                  message: "A non-empty array of NotificationFeedItem is required.",
                  name: "INVALID_FEED_ITEMS"
                }));
                var O = A.map(function(y) {
                  return _.markFeedItemAsDelivered(y);
                });
                Promise.all(O).then(function() {
                  R();
                }, function(y) {
                  N(y);
                });
              } catch (y) {
                N(new o.CometChatException(y));
              }
            });
          }, _.markFeedItemAsRead = function(A) {
            return new Promise(function(R, N) {
              var O;
              try {
                var y = A && typeof A.getId == "function" ? A.getId() : (O = A) === null || O === void 0 ? void 0 : O.id;
                if (!y) return N(new o.CometChatException({
                  code: "INVALID_FEED_ITEM",
                  message: "A valid NotificationFeedItem with an ID is required.",
                  name: "INVALID_FEED_ITEM"
                }));
                s.makeApiCall(L.CAMPAIGN_ENDPOINTS.NOTIFICATION_FEED_MARK_READ, { feedItemId: y }, {}).then(function() {
                  R();
                }, function(v) {
                  N(new o.CometChatException(v.error));
                });
              } catch (v) {
                N(new o.CometChatException(v));
              }
            });
          }, _.reportFeedEngagement = function(A, R) {
            return new Promise(function(N, O) {
              var y;
              try {
                var v = A && typeof A.getId == "function" ? A.getId() : (y = A) === null || y === void 0 ? void 0 : y.id;
                if (!v) return O(new o.CometChatException({
                  code: "INVALID_FEED_ITEM",
                  message: "A valid NotificationFeedItem with an ID is required.",
                  name: "INVALID_FEED_ITEM"
                }));
                if (!R) return O(new o.CometChatException({
                  code: "INVALID_ENGAGEMENT_TYPE",
                  message: "Engagement type is required.",
                  name: "INVALID_ENGAGEMENT_TYPE"
                }));
                s.makeApiCall(L.CAMPAIGN_ENDPOINTS.NOTIFICATION_FEED_ENGAGEMENT, { feedItemId: v }, { topic: R }).then(function(G) {
                  N(G?.data);
                }, function(G) {
                  O(new o.CometChatException(G.error));
                });
              } catch (G) {
                O(new o.CometChatException(G));
              }
            });
          }, _.getNotificationFeedUnreadCount = function() {
            return new Promise(function(A, R) {
              try {
                s.makeApiCall(L.CAMPAIGN_ENDPOINTS.NOTIFICATION_FEED_UNREAD_COUNT, {}, {}).then(function(N) {
                  N && N.data && N.data.count !== void 0 ? A({ count: N.data.count }) : A({ count: 0 });
                }, function(N) {
                  R(new o.CometChatException(N.error));
                });
              } catch (N) {
                R(new o.CometChatException(N));
              }
            });
          }, _.getNotificationFeedItem = function(A) {
            return new Promise(function(R, N) {
              try {
                if (!A || typeof A != "string" || A.trim() === "") return N(new o.CometChatException({
                  code: "INVALID_FEED_ITEM_ID",
                  message: "A valid feed item ID string is required.",
                  name: "INVALID_FEED_ITEM_ID"
                }));
                s.makeApiCall(L.CAMPAIGN_ENDPOINTS.NOTIFICATION_FEED_ITEM, { feedItemId: A.trim() }, {}).then(function(O) {
                  O && O.data ? R(new Y.NotificationFeedItem(O.data)) : N(new o.CometChatException({
                    code: "FEED_ITEM_NOT_FOUND",
                    message: "Feed item not found.",
                    name: "FEED_ITEM_NOT_FOUND"
                  }));
                }, function(O) {
                  N(new o.CometChatException(O.error));
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.markPushNotificationDelivered = function(A) {
            return new Promise(function(R, N) {
              try {
                if (!A || !A.getId()) return N(new o.CometChatException({
                  code: "INVALID_PUSH_NOTIFICATION",
                  message: "A valid PushNotification with an ID is required.",
                  name: "INVALID_PUSH_NOTIFICATION"
                }));
                s.makeApiCall(L.CAMPAIGN_ENDPOINTS.PUSH_NOTIFICATION_MARK_DELIVERED, { pushNotificationId: A.getId() }, {}).then(function() {
                  R();
                }, function(O) {
                  N(new o.CometChatException(O.error));
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.markPushNotificationClicked = function(A) {
            return new Promise(function(R, N) {
              try {
                if (!A || !A.getId()) return N(new o.CometChatException({
                  code: "INVALID_PUSH_NOTIFICATION",
                  message: "A valid PushNotification with an ID is required.",
                  name: "INVALID_PUSH_NOTIFICATION"
                }));
                s.makeApiCall(L.CAMPAIGN_ENDPOINTS.PUSH_NOTIFICATION_MARK_CLICKED, { pushNotificationId: A.getId() }, {}).then(function() {
                  R();
                }, function(O) {
                  N(new o.CometChatException(O.error));
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.addNotificationFeedListener = function(A, R) {
            try {
              Le.addNotificationFeedEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addNotificationFeedListener", N);
            }
          }, _.removeNotificationFeedListener = function(A) {
            try {
              Le.removeNotificationFeedEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeNotificationFeedListener", R);
            }
          }, _.subscribeToThread = function(A) {
            return new Promise(function(R, N) {
              try {
                if (!A || isNaN(Number(A))) return void N(new o.CometChatException(te.THREAD_ERROR.INVALID_PARENT_MESSAGE_ID));
                s.makeApiCall(te.THREAD_ENDPOINTS.SUBSCRIBE_TO_THREAD, { messageId: A }, {}).then(function(O) {
                  R(ee.ThreadParser.parseSubscriptionAck(O));
                }, function(O) {
                  n.Logger.error("CometChat: subscribeToThread", O), N(new o.CometChatException(O && O.error ? O.error : O));
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.unsubscribeFromThread = function(A) {
            return new Promise(function(R, N) {
              try {
                if (!A || isNaN(Number(A))) return void N(new o.CometChatException(te.THREAD_ERROR.INVALID_PARENT_MESSAGE_ID));
                s.makeApiCall(te.THREAD_ENDPOINTS.UNSUBSCRIBE_FROM_THREAD, { messageId: A }, {}).then(function(O) {
                  R(ee.ThreadParser.parseSubscriptionAck(O));
                }, function(O) {
                  n.Logger.error("CometChat: unsubscribeFromThread", O), N(new o.CometChatException(O && O.error ? O.error : O));
                });
              } catch (O) {
                N(new o.CometChatException(O));
              }
            });
          }, _.pinSaveWrite = function(A, R) {
            return new Promise(function(N, O) {
              try {
                var y = n.validateMsgId(R);
                if (y instanceof o.CometChatException) return void O(y);
                if (n.isFalsy(R)) return void O(new o.CometChatException(oe.PIN_SAVE_ERROR.INVALID_MESSAGE_ID));
                s.makeApiCall(A, { messageId: R }, {}).then(function(v) {
                  try {
                    var G = c.MessageController.trasformJSONMessge(v && v.data);
                    if (!G) return n.Logger.error("CometChat: " + A + ": parse", "unparseable response body"), void O(new o.CometChatException(oe.PIN_SAVE_ERROR.UNPARSEABLE_RESPONSE));
                    N(G);
                  } catch (K) {
                    n.Logger.error("CometChat: " + A + ": parse", K), O(new o.CometChatException(K));
                  }
                }, function(v) {
                  n.Logger.error("CometChat: " + A, v), O(new o.CometChatException(v && v.error ? v.error : v));
                });
              } catch (v) {
                O(new o.CometChatException(v));
              }
            });
          }, _.pinMessage = function(A) {
            return _.pinSaveWrite(oe.PIN_SAVE_ENDPOINTS.PIN_MESSAGE, A);
          }, _.unpinMessage = function(A) {
            return _.pinSaveWrite(oe.PIN_SAVE_ENDPOINTS.UNPIN_MESSAGE, A);
          }, _.saveMessage = function(A) {
            return _.pinSaveWrite(oe.PIN_SAVE_ENDPOINTS.SAVE_MESSAGE, A);
          }, _.unsaveMessage = function(A) {
            return _.pinSaveWrite(oe.PIN_SAVE_ENDPOINTS.UNSAVE_MESSAGE, A);
          }, _.pinConversationWrite = function(A, R, N, O) {
            return new Promise(function(y, v) {
              try {
                var G = n.validateConversationType(R);
                if (G instanceof o.CometChatException) return void v(G);
                var K = n.validateId(A, R);
                if (K instanceof o.CometChatException) return void v(K);
                var B = {}, J = "";
                R = R.toLowerCase(), A = A.toLowerCase(), R === t.MessageConstatnts.RECEIVER_TYPE.GROUP ? (J = O, B.guid = A) : (J = N, B.uid = A), s.makeApiCall(J, B, {}).then(function(Q) {
                  try {
                    var he = re.PinSaveParser.parseConversation(Q && Q.data);
                    if (!he) return n.Logger.error("CometChat: " + J + ": parse", "unparseable response body"), void v(new o.CometChatException(oe.PIN_SAVE_ERROR.UNPARSEABLE_RESPONSE));
                    y(he);
                  } catch (pe) {
                    n.Logger.error("CometChat: " + J + ": parse", pe), v(new o.CometChatException(pe));
                  }
                }, function(Q) {
                  n.Logger.error("CometChat: " + J, Q), v(new o.CometChatException(Q && Q.error ? Q.error : Q));
                });
              } catch (Q) {
                v(new o.CometChatException(Q));
              }
            });
          }, _.pinConversation = function(A, R) {
            return _.pinConversationWrite(A, R, oe.PIN_SAVE_ENDPOINTS.PIN_USER_CONVERSATION, oe.PIN_SAVE_ENDPOINTS.PIN_GROUP_CONVERSATION);
          }, _.unpinConversation = function(A, R) {
            return _.pinConversationWrite(A, R, oe.PIN_SAVE_ENDPOINTS.UNPIN_USER_CONVERSATION, oe.PIN_SAVE_ENDPOINTS.UNPIN_GROUP_CONVERSATION);
          }, _.addConversationListener = function(A, R) {
            try {
              Le.addConversationEventListener(A, R);
            } catch (N) {
              n.Logger.error("CometChat: addConversationListener", N);
            }
          }, _.removeConversationListener = function(A) {
            try {
              Le.removeConversationEventListener(A);
            } catch (R) {
              n.Logger.error("CometChat: removeConversationListener", R);
            }
          }, _.isPinConversationEnabled = function() {
            return _.isPinSaveFeatureEnabled(oe.PIN_SAVE_FEATURES.PIN_CONVERSATION);
          }, _.isPinMessageEnabled = function() {
            return _.isPinSaveFeatureEnabled(oe.PIN_SAVE_FEATURES.PIN_MESSAGE);
          }, _.isSaveMessageEnabled = function() {
            return _.isPinSaveFeatureEnabled(oe.PIN_SAVE_FEATURES.SAVE_MESSAGE);
          }, _.getPinnedMessagesLimit = function() {
            return _.readPinSaveLimit(oe.PIN_SAVE_LIMITS.PINNED_MESSAGES);
          }, _.getSystemPinnedMessagesLimit = function() {
            return _.readPinSaveLimit(oe.PIN_SAVE_LIMITS.PINNED_MESSAGES_SYSTEM);
          }, _.getSavedMessagesLimit = function() {
            return _.readPinSaveLimit(oe.PIN_SAVE_LIMITS.SAVED_MESSAGES);
          }, _.getPinnedConversationsLimit = function() {
            return _.readPinSaveLimit(oe.PIN_SAVE_LIMITS.PINNED_CONVERSATIONS);
          }, _.getSystemPinnedConversationsLimit = function() {
            return _.readPinSaveLimit(oe.PIN_SAVE_LIMITS.PINNED_CONVERSATIONS_SYSTEM);
          }, _.isPinSaveFeatureEnabled = function(A) {
            return new Promise(function(R) {
              try {
                _.isFeatureEnabled(A).then(function(N) {
                  return R(N === !0);
                }, function(N) {
                  n.Logger.log("CometChat: isPinSaveFeatureEnabled", N), R(!1);
                });
              } catch (N) {
                n.Logger.error("CometChat: isPinSaveFeatureEnabled", N), R(!1);
              }
            });
          }, _.readPinSaveLimit = function(A) {
            return new Promise(function(R) {
              try {
                _.isFeatureEnabled(A).then(function(N) {
                  if (N !== !0 && N !== !1 && N != null) {
                    var O = typeof N == "number" ? N : parseInt(String(N), 10);
                    !isFinite(O) || isNaN(O) || O <= 0 ? R(null) : R(O);
                  } else R(null);
                }, function(N) {
                  n.Logger.log("CometChat: readPinSaveLimit", N), R(null);
                });
              } catch (N) {
                n.Logger.error("CometChat: readPinSaveLimit", N), R(null);
              }
            });
          }, _.AIAssistantBaseEvent = Re.AIAssistantBaseEvent, _.AIAssistantRunStartedEvent = Re.AIAssistantRunStartedEvent, _.AIAssistantRunFinishedEvent = Re.AIAssistantRunFinishedEvent, _.AIAssistantMessageStartedEvent = Re.AIAssistantMessageStartedEvent, _.AIAssistantMessageEndedEvent = Re.AIAssistantMessageEndedEvent, _.AIAssistantContentReceivedEvent = Re.AIAssistantContentReceivedEvent, _.AIAssistantToolStartedEvent = Re.AIAssistantToolStartedEvent, _.AIAssistantToolEndedEvent = Re.AIAssistantToolEndedEvent, _.AIAssistantToolArgumentEvent = Re.AIAssistantToolArgumentEvent, _.AIAssistantToolResultEvent = Re.AIAssistantToolResultEvent, _.AIAssistantCardStartedEvent = Re.AIAssistantCardStartedEvent, _.AIAssistantCardReceivedEvent = Re.AIAssistantCardReceivedEvent, _.AIAssistantCardEndedEvent = Re.AIAssistantCardEndedEvent, _.AI_ASSISTANT_EVENTS = t.AI_ASSISTANT_EVENTS, _.GroupType = t.GroupType, _.GroupMemberScope = t.GroupMemberScope, _.ResponseConstants = t.ResponseConstants, _.CallConstants = t.CallConstants, _.ActionConstatnts = t.ActionConstatnts, _.CALL_ERROR = t.CALL_ERROR, _.MessageConstatnts = t.MessageConstatnts, _.APP_SETTINGS = t.APP_SETTINGS, _.GroupConstants = t.GroupConstants, _.TYPING_NOTIFICATION = t.TYPING_NOTIFICATION, _.PresenceConstatnts = t.PresenceConstatnts, _.PresenceConstants = t.PresenceConstants, _.APPINFO = t.APPINFO, _.UserConstants = t.UserConstants, _.GENERAL_ERROR = t.GENERAL_ERROR, _.ConversationErrors = t.ConversationErrors, _.LOCAL_STORE = t.LOCAL_STORE, _.SDKHeader = t.SDKHeader, _.Errors = t.Errors, _.SESSION_STORE = t.SESSION_STORE, _.REACTION_ACTION = t.REACTION_ACTION, _.ExtensionErrors = t.ExtensionErrors, _.FeatureRestrictionErrors = t.FeatureRestrictionErrors, _.WS = t.WS, _.JWT_API = t.JWT_API, _.PROSODY_API = t.PROSODY_API, _.ProsodyApiErrors = t.ProsodyApiErrors, _.ONLINE_MEMBER_COUNT_API = t.ONLINE_MEMBER_COUNT_API, _.ReceiptErrors = t.ReceiptErrors, _.ANALYTICS = t.ANALYTICS, _.API_ERROR_CODES = t.API_ERROR_CODES, _.ATTACHMENTS_CONSTANTS = t.ATTACHMENTS_CONSTANTS, _.BlockedUsersConstants = t.BlockedUsersConstants, _.CALLING_COMPONENT_VERSION = t.CALLING_COMPONENT_VERSION, _.COMMON_UTILITY_CONSTANTS = t.COMMON_UTILITY_CONSTANTS, _.DEFAULT_VALUES = t.DEFAULT_VALUES, _.DELIVERY_RECEIPTS = t.DELIVERY_RECEIPTS, _.GroupErrors = t.GroupErrors, _.GroupMemersConstans = t.GroupMemersConstans, _.MessageCategory = t.MessageCategory, _.MessageErrors = t.MessageErrors, _.PARAMETER_ERROR = t.PARAMETER_ERROR, _.READ_RECEIPTS = t.READ_RECEIPTS, _.UserErrors = t.UserErrors, _.constants = t.constants, _.GoalType = t.GoalType, _.AttachmentType = t.AttachmentType, _.ModerationStatus = t.ModerationStatus, _.initialzed = !1, _.CometChatException = o.CometChatException, _.TextMessage = C.TextMessage, _.MediaMessage = l.MediaMessage, _.CustomMessage = Ee.CustomMessage, _.BaseMessage = u.BaseMessage, _.Action = V.Action, _.Call = P.Call, _.TypingIndicator = Ae.TypingIndicator, _.TransientMessage = Ue.TransientMessage, _.InteractiveMessage = ke.InteractiveMessage, _.InteractionGoal = Xe.InteractionGoal, _.Interaction = Ke.Interaction, _.InteractionReceipt = ot.InteractionReceipt, _.MessageReceipt = it.MessageReceipt, _.AIAssistantMessage = Fe.AIAssistantMessage, _.AIAssistantElement = pt.AIAssistantElement, _.CardMessage = St.CardMessage, _.AIToolCall = Be.AIToolCall, _.AIToolCallFunction = Be.AIToolCallFunction, _.AIAssistantMessageData = Fe.AIAssistantMessageData, _.AIToolResultMessage = at.AIToolResultMessage, _.AIToolResultMessageData = at.AIToolResultMessageData, _.AIToolArgumentMessage = Be.AIToolArgumentMessage, _.AIToolArgumentMessageData = Be.AIToolArgumentMessageData, _.Group = h.Group, _.User = r.User, _.GroupMember = fe.GroupMember, _.Conversation = b.Conversation, _.ReactionCount = He.ReactionCount, _.ReactionEvent = rt.ReactionEvent, _.Reaction = ut.Reaction, _.USER_STATUS = {
            ONLINE: t.PresenceConstatnts.STATUS.ONLINE,
            OFFLINE: t.PresenceConstatnts.STATUS.OFFLINE
          }, _.MessagesRequest = q.MessagesRequest, _.MessagesRequestBuilder = q.MessagesRequestBuilder, _.ReactionsRequest = st.ReactionsRequest, _.ReactionsRequestBuilder = st.ReactionsRequestBuilder, _.UsersRequest = de.UsersRequest, _.UsersRequestBuilder = de.UsersRequestBuilder, _.ConversationsRequest = W.ConversationsRequest, _.ConversationsRequestBuilder = W.ConversationsRequestBuilder, _.BlockedUsersRequest = Te.BlockedUsersRequest, _.BlockedUsersRequestBuilder = Te.BlockedUsersRequestBuilder, _.GroupsRequest = M.GroupsRequest, _.GroupsRequestBuilder = M.GroupsRequestBuilder, _.GroupMembersRequest = z.GroupMembersRequest, _.GroupMembersRequestBuilder = z.GroupMembersRequestBuilder, _.BannedMembersRequest = le.BannedMembersRequest, _.BannedMembersRequestBuilder = le.BannedMembersRequestBuilder, _.CAMPAIGN_ENDPOINTS = L.CAMPAIGN_ENDPOINTS, _.CAMPAIGN_DEFAULTS = L.CAMPAIGN_DEFAULTS, _.CAMPAIGN_ERRORS = L.CAMPAIGN_ERRORS, _.CAMPAIGN_PAGINATION = L.CAMPAIGN_PAGINATION, _.NotificationFeedItem = Y.NotificationFeedItem, _.NotificationCategory = U.NotificationCategory, _.PushNotification = H.PushNotification, _.NotificationFeedRequest = k.NotificationFeedRequest, _.NotificationFeedRequestBuilder = k.NotificationFeedRequestBuilder, _.NotificationCategoriesRequest = x.NotificationCategoriesRequest, _.NotificationCategoriesRequestBuilder = x.NotificationCategoriesRequestBuilder, _.NotificationFeedListener = me.NotificationFeedListener, _.MessageThread = Z.MessageThread, _.ThreadsRequest = X.ThreadsRequest, _.ThreadsRequestBuilder = X.ThreadsRequestBuilder, _.PIN_SAVE_ERROR_CODES = oe.PIN_SAVE_ERROR_CODES, _.PIN_SAVE_DEFAULTS = oe.PIN_SAVE_DEFAULTS, _.PINNED_BY = oe.PINNED_BY, _.ConversationListener = Ce.ConversationListener, _.CallSettings = ae.CallSettings, _.CallSettingsBuilder = ae.CallSettingsBuilder, _.MainVideoContainerSetting = ae.MainVideoContainerSetting, _.VirtualBackground = ae.VirtualBackground, _.VirtualBackgroundBuilder = ae.VirtualBackgroundBuilder, _.AppSettings = ue.AppSettings, _.AppSettingsBuilder = ue.AppSettingsBuilder, _.MessageListener = f.MessageListener, _.UserListener = f.UserListener, _.GroupListener = f.GroupListener, _.OngoingCallListener = f.OngoingCallListener, _.CallListener = f.CallListener, _.ConnectionListener = f.ConnectionListener, _.LoginListener = f.LoginListener, _.UploadFileListener = Rt.UploadFileListener, _.UploadFileRequest = gt.UploadFileRequest, _.UploadStatus = Ot.UploadStatus, _.AIAssistantListener = f.AIAssistantListener, _.CallController = m.CallController, _.CometChatHelper = F.CometChatHelper, _.Attachment = ie.Attachment, _.MediaDevice = be.MediaDevice, _.StorageMode = t.StorageMode, _.MESSAGE_TYPE = t.MessageConstatnts.TYPE, _.CATEGORY_MESSAGE = t.MessageConstatnts.CATEGORY.MESSAGE, _.CATEGORY_ACTION = t.MessageConstatnts.CATEGORY.ACTION, _.CATEGORY_CALL = t.MessageConstatnts.CATEGORY.CALL, _.CATEGORY_CUSTOM = t.MessageConstatnts.CATEGORY.CUSTOM, _.CATEGORY_INTERACTIVE = t.MessageConstatnts.CATEGORY.INTERACTIVE, _.ACTION_TYPE = t.ActionConstatnts.ACTIONS, _.CALL_TYPE = t.CallConstants.CALL_TYPE, _.SORT_BY = t.UserConstants.SORT_BY, _.SORT_ORDER = t.UserConstants.SORT_ORDER, _.CALL_MODE = t.CallConstants.CALL_MODE, _.RECEIVER_TYPE = t.MessageConstatnts.RECEIVER_TYPE, _.CONNECTION_STATUS = t.CONNECTION_STATUS, _.CALL_STATUS = t.CallConstants.CALL_STATUS, _.GROUP_MEMBER_SCOPE = t.GROUP_MEMBER_SCOPE, _.GROUP_TYPE = t.GROUP_TYPE, _.MESSAGE_REQUEST = t.MessageConstatnts.PAGINATION.CURSOR_FILEDS, _.WSReconnectionInProgress = !1, _.WSReconnectionTimerInterval = 5e3, _.currentConnectionStatus = t.CONNECTION_STATUS.DISCONNECTED, _.isConnectingFromInit = !1, _.loginInProgress = !1, _.internalRestart = !1, _.settingsInterval = 6e4, _.isAnalyticsPingStarted = !1, _.isLoggedOut = !0, _.isAnalyticsDisabled = !1, _.disconnectedByUser = !1, _.shouldConnectToWS = !0, _;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.BaseMessage = void 0;
        var p = g(0), i = g(26), S = g(1), E = g(14);
        a.BaseMessage = (function() {
          function n(o, s, r, e) {
            this.receiverId = o, this.type = s, this.receiverType = r, this.category = e;
          }
          return n.prototype.getUnreadRepliesCount = function() {
            return this.unreadRepliesCount;
          }, n.prototype.setUnreadRepliesCount = function(o) {
            this.unreadRepliesCount = o;
          }, n.prototype.getId = function() {
            return this.id;
          }, n.prototype.setId = function(o) {
            this.id = o;
          }, n.prototype.getConversationId = function() {
            return this.conversationId;
          }, n.prototype.setConversationId = function(o) {
            this.conversationId = o;
          }, n.prototype.getParentMessageId = function() {
            return this.parentMessageId;
          }, n.prototype.setParentMessageId = function(o) {
            this.parentMessageId = o;
          }, n.prototype.getMuid = function() {
            return this.muid;
          }, n.prototype.setMuid = function(o) {
            this.muid = o;
          }, n.prototype.getSender = function() {
            return this.sender;
          }, n.prototype.setSender = function(o) {
            this.sender = o;
          }, n.prototype.getReceiver = function() {
            return this.receiver;
          }, n.prototype.setReceiver = function(o) {
            this.receiver = o;
          }, n.prototype.getReceiverId = function() {
            return this.receiverId;
          }, n.prototype.setReceiverId = function(o) {
            this.receiverId = o;
          }, n.prototype.getType = function() {
            return this.type;
          }, n.prototype.setType = function(o) {
            this.type = o;
          }, n.prototype.getReceiverType = function() {
            return this.receiverType;
          }, n.prototype.setReceiverType = function(o) {
            this.receiverType = o;
          }, n.prototype.getSentAt = function() {
            return this.sentAt;
          }, n.prototype.setSentAt = function(o) {
            this.sentAt = o;
          }, n.prototype.getStatus = function() {
            return this.status;
          }, n.prototype.setStatus = function(o) {
            this.status = o;
          }, n.prototype.getDeliveredAt = function() {
            return this.deliveredAt;
          }, n.prototype.setDeliveredAt = function(o) {
            this.deliveredAt = o;
          }, n.prototype.getDeliveredToMeAt = function() {
            return this.deliveredToMeAt;
          }, n.prototype.setDeliveredToMeAt = function(o) {
            this.deliveredToMeAt = o;
          }, n.prototype.getReadAt = function() {
            return this.readAt;
          }, n.prototype.setReadAt = function(o) {
            this.readAt = o;
          }, n.prototype.getReadByMeAt = function() {
            return this.readByMeAt;
          }, n.prototype.setReadByMeAt = function(o) {
            this.readByMeAt = o;
          }, n.prototype.getCategory = function() {
            return this.category;
          }, n.prototype.setCategory = function(o) {
            this.category = o;
          }, n.prototype.getEditedAt = function() {
            return this.editedAt;
          }, n.prototype.setEditedAt = function(o) {
            this.editedAt = o;
          }, n.prototype.getEditedBy = function() {
            return this.editedBy;
          }, n.prototype.setEditedBy = function(o) {
            this.editedBy = o;
          }, n.prototype.getDeletedAt = function() {
            return this.deletedAt;
          }, n.prototype.setDeletedAt = function(o) {
            this.deletedAt = o;
          }, n.prototype.getDeletedBy = function() {
            return this.deletedBy;
          }, n.prototype.setDeletedBy = function(o) {
            this.deletedBy = o;
          }, n.prototype.getReplyCount = function() {
            return this.replyCount;
          }, n.prototype.setReplyCount = function(o) {
            this.replyCount = o;
          }, n.prototype.getRawMessage = function() {
            return this.rawMessage;
          }, n.prototype.setRawMessage = function(o) {
            this.rawMessage = o;
          }, n.prototype.setMentionedUsers = function(o) {
            this.mentionedUsers = o;
          }, n.prototype.getMentionedUsers = function() {
            var o;
            return (o = this.mentionedUsers) !== null && o !== void 0 ? o : [];
          }, n.prototype.setHasMentionedMe = function(o) {
            this.mentionedMe = o;
          }, n.prototype.hasMentionedMe = function() {
            var o;
            return (o = this.mentionedMe) !== null && o !== void 0 && o;
          }, n.prototype.getData = function() {
            return this.data;
          }, n.prototype.setData = function(o) {
            this.data = o;
          }, n.prototype.setReactions = function(o) {
            try {
              this.setReactionsToData(o);
            } catch {
              this.reactions = o;
            }
          }, n.prototype.getReactions = function() {
            var o;
            try {
              return this.getReactionsFromData();
            } catch {
              return (o = this.reactions) !== null && o !== void 0 ? o : [];
            }
          }, n.prototype.getQuotedMessageId = function() {
            return this.quotedMessageId;
          }, n.prototype.setQuotedMessageId = function(o) {
            this.quotedMessageId = o;
          }, n.prototype.getQuotedMessage = function() {
            return this.quotedMessage;
          }, n.prototype.setQuotedMessage = function(o) {
            this.quotedMessage = o;
          }, n.prototype.getPinnedAt = function() {
            return this.pinnedAt;
          }, n.prototype.setPinnedAt = function(o) {
            o != null ? this.pinnedAt = o : delete this.pinnedAt;
          }, n.prototype.getPinnedBy = function() {
            return this.pinnedBy;
          }, n.prototype.setPinnedBy = function(o) {
            o != null ? this.pinnedBy = o : delete this.pinnedBy;
          }, n.prototype.getSavedAt = function() {
            return this.savedAt;
          }, n.prototype.setSavedAt = function(o) {
            o != null ? this.savedAt = o : delete this.savedAt;
          }, n.prototype.isPinned = function() {
            return this.pinnedAt !== null && this.pinnedAt !== void 0;
          }, n.prototype.isSaved = function() {
            return this.savedAt !== null && this.savedAt !== void 0;
          }, n.prototype.isThreadSubscribed = function() {
            return this.threadSubscribed === !0;
          }, n.prototype.setThreadSubscribed = function(o) {
            this.threadSubscribed = o === !0;
          }, n.prototype.isSystemPinned = function() {
            return this.isPinned() && this.pinnedBy === E.PIN_SAVE_SENTINELS.SYSTEM_PINNER;
          }, n.prototype.setReactionsToData = function(o) {
            var s = this.getData();
            if (s[p.ResponseConstants.RESPONSE_KEYS.KEY_REACTIONS]) {
              var r = o.map(function(e) {
                return new i.ReactionCount(e.reaction, e.count, !!e.reactedByMe && e.reactedByMe);
              });
              s[p.ResponseConstants.RESPONSE_KEYS.KEY_REACTIONS] = r, this.setData(s), this.reactions = r;
            } else s[p.ResponseConstants.RESPONSE_KEYS.KEY_REACTIONS] = o, this.setData(s), this.reactions = o;
          }, n.prototype.getReactionsFromData = function() {
            try {
              var o = this.getData(), s = [];
              return o[p.ResponseConstants.RESPONSE_KEYS.KEY_REACTIONS] && o[p.ResponseConstants.RESPONSE_KEYS.KEY_REACTIONS].forEach(function(r) {
                var e = new i.ReactionCount(r.reaction, r.count, !!r.reactedByMe && r.reactedByMe);
                s.push(e);
              }), s;
            } catch (r) {
              throw S.Logger.error("BaseMessageModel: getReactionsFromData", r), r;
            }
          }, n;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantBaseEvent = void 0, a.AIAssistantBaseEvent = (function() {
          function p(i, S, E, n, o) {
            this.type = i, this.conversationId = S, this.messageId = E, this.parentMessageId = n, this.data = o;
          }
          return p.prototype.getType = function() {
            return this.type;
          }, p.prototype.setType = function(i) {
            this.type = i;
          }, p.prototype.getConversationId = function() {
            return this.conversationId;
          }, p.prototype.setConversationId = function(i) {
            this.conversationId = i;
          }, p.prototype.getMessageId = function() {
            return this.messageId;
          }, p.prototype.setMessageId = function(i) {
            this.messageId = i;
          }, p.prototype.getPatentMessageId = function() {
            return this.parentMessageId;
          }, p.prototype.getParentMessageId = function() {
            return this.parentMessageId;
          }, p.prototype.setPatentMessageId = function(i) {
            this.parentMessageId = i;
          }, p.prototype.setParentMessageId = function(i) {
            this.parentMessageId = i;
          }, p.prototype.getData = function() {
            return this.data;
          }, p.prototype.setData = function(i) {
            this.data = i;
          }, p.prototype.getTimestamp = function() {
            return this.data.timestamp;
          }, p.prototype.setTimestamp = function(i) {
            this.data.timestamp = i;
          }, p.prototype.getRunId = function() {
            return this.data.runId;
          }, p.prototype.setRunId = function(i) {
            this.data.runId = i;
          }, p.prototype.getThreadId = function() {
            return this.data.threadId;
          }, p.prototype.setThreadId = function(i) {
            this.data.threadId = i;
          }, p.prototype.toJSON = function() {
            return {
              type: this.type,
              conversationId: this.conversationId,
              messageId: this.messageId,
              parentMessageId: this.parentMessageId,
              data: this.data
            };
          }, p.fromJSON = function(i) {
            return new p(i.type, i.conversationId, i.messageId, i.parentMessageId, i.data);
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Group = void 0;
        var p = g(0);
        a.Group = (function() {
          function i(S, E, n, o, s, r, e) {
            this.hasJoined = !1, this.membersCount = 0, this.isBanned = !1, this.guid = S, E && (this.name = E), n && (this.type = n), !o && o !== "" || n != "password" || (this.password = o), (s || s === "") && (this.icon = s), (r || r === "") && (this.description = r), e && (this.hasJoined = e);
          }
          return i.prototype.getGuid = function() {
            return this.guid;
          }, i.prototype.setGuid = function(S) {
            this.guid = S;
          }, i.prototype.getName = function() {
            return this.name;
          }, i.prototype.setName = function(S) {
            S && (this.name = S);
          }, i.prototype.getType = function() {
            return this.type;
          }, i.prototype.setType = function(S) {
            this.type = S;
          }, i.prototype.getPassword = function() {
            return this.password;
          }, i.prototype.setPassword = function(S) {
            this.password = S;
          }, i.prototype.getIcon = function() {
            return this.icon;
          }, i.prototype.setIcon = function(S) {
            this.icon = S;
          }, i.prototype.getDescription = function() {
            return this.description;
          }, i.prototype.setDescription = function(S) {
            this.description = S;
          }, i.prototype.getOwner = function() {
            return this.owner;
          }, i.prototype.setOwner = function(S) {
            this.owner = S;
          }, i.prototype.getMetadata = function() {
            return this.metadata;
          }, i.prototype.setMetadata = function(S) {
            this.metadata = S;
          }, i.prototype.getCreatedAt = function() {
            return this.createdAt;
          }, i.prototype.setCreatedAt = function(S) {
            this.createdAt = S;
          }, i.prototype.getUpdatedAt = function() {
            return this.updatedAt;
          }, i.prototype.setUpdatedAt = function(S) {
            this.updatedAt = S;
          }, i.prototype.getHasJoined = function() {
            return this.hasJoined;
          }, i.prototype.setHasJoined = function(S) {
            this.hasJoined = S;
          }, i.prototype.getWsChannel = function() {
            return this.wsChannel;
          }, i.prototype.setWsChannel = function(S) {
            this.wsChannel = S;
          }, i.prototype.setScope = function(S) {
            this.scope = S;
          }, i.prototype.getScope = function() {
            return this.scope;
          }, i.prototype.getJoinedAt = function() {
            return this.joinedAt;
          }, i.prototype.setJoinedAt = function(S) {
            this.joinedAt = S;
          }, i.prototype.getMembersCount = function() {
            return this.membersCount;
          }, i.prototype.setMembersCount = function(S) {
            this.membersCount = S;
          }, i.prototype.setTags = function(S) {
            this.tags = S;
          }, i.prototype.getTags = function() {
            return this.tags;
          }, i.prototype.isBannedFromGroup = function() {
            return this.isBanned;
          }, i.TYPE = p.GroupType, i.Type = i.TYPE, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatEvent = void 0;
        var p = g(1), i = g(5);
        a.CometChatEvent = (function() {
          function S(E, n, o, s, r, e) {
            p.isFalsy(E) || (this.appId = E), p.isFalsy(n) || (this.receiver = n), p.isFalsy(o) || (this.receiverType = o), p.isFalsy(r) || (this.deviceId = r), p.isFalsy(s) || (this.sender = s), p.isFalsy(e) || (this.messageSender = e);
          }
          return S.prototype.getAppId = function() {
            return this.appId;
          }, S.prototype.setAppId = function(E) {
            this.appId = E;
          }, S.prototype.getReceiver = function() {
            return this.receiver;
          }, S.prototype.setReceiver = function(E) {
            this.receiver = E;
          }, S.prototype.getSender = function() {
            return this.sender;
          }, S.prototype.setSender = function(E) {
            this.sender = E;
          }, S.prototype.getReceiverType = function() {
            return this.receiverType;
          }, S.prototype.setReceiverType = function(E) {
            this.receiverType = E;
          }, S.prototype.getType = function() {
            return this.type;
          }, S.prototype.setType = function(E) {
            this.type = E;
          }, S.prototype.getDeviceId = function() {
            return this.deviceId;
          }, S.prototype.setDeviceId = function(E) {
            this.deviceId = E;
          }, S.prototype.getMessageSender = function() {
            return this.messageSender;
          }, S.prototype.setMessageSender = function(E) {
            this.messageSender = E;
          }, S.prototype.getCometChatEventJSON = function() {
            var E = {};
            return E[i.KEYS.APP_ID] = this.getAppId(), E[i.KEYS.RECEIVER] = this.getReceiver(), E[i.KEYS.RECEIVER_TYPE] = this.getReceiverType(), E[i.KEYS.DEVICE_ID] = this.getDeviceId(), E[i.KEYS.TYPE] = this.getType(), E[i.KEYS.SENDER] = this.getSender(), p.isFalsy(this.getMessageSender()) || (E[i.KEYS.MESSAGE_SENDER] = this.getMessageSender()), E;
          }, S;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MessageController = void 0;
        var p = g(7), i = g(25), S = g(27), E = g(1), n = g(0), o = g(31), s = g(32), r = g(21), e = g(2), l = g(20), u = g(28), C = g(6), c = g(17), d = g(29), t = g(3), h = g(52), I = g(53), T = g(54), f = g(55), P = g(56), m = g(22), D = g(15);
        a.MessageController = (function() {
          function V() {
          }
          return V.trasformJSONMessge = function(M) {
            var z, le, de, W, q;
            try {
              var se = null, Ae = void 0;
              switch (M[n.MessageConstatnts.KEYS.CATEGORY]) {
                case n.MessageConstatnts.CATEGORY.ACTION:
                  Ae = o.Action.actionFromJSON(M);
                  break;
                case n.MessageConstatnts.CATEGORY.CALL:
                  Ae = s.Call.callFromJSON(M);
                  break;
                case n.MessageConstatnts.CATEGORY.MESSAGE:
                  switch (M[n.MessageConstatnts.KEYS.TYPE]) {
                    case n.MessageConstatnts.TYPE.TEXT:
                      Ae = new i.TextMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.DATA][n.MessageConstatnts.KEYS.TEXT], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                      break;
                    case n.MessageConstatnts.TYPE.CUSTOM:
                      Ae = new u.CustomMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.DATA][n.MessageConstatnts.KEYS.CUSTOM_DATA], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                      break;
                    default:
                      if (Ae = new S.MediaMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.DATA][n.MessageConstatnts.KEYS.URL], M[n.MessageConstatnts.KEYS.TYPE], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]), M.hasOwnProperty(n.MessageConstatnts.KEYS.DATA)) {
                        if ((ne = M[n.MessageConstatnts.KEYS.DATA]).hasOwnProperty(n.MessageConstatnts.KEYS.ATTATCHMENTS)) {
                          var Pe = (ne[n.MessageConstatnts.KEYS.ATTATCHMENTS] || []).map(function(Ie) {
                            return new l.Attachment(Ie);
                          });
                          Ae.setAttachments(Pe);
                        }
                        ne.hasOwnProperty(n.MessageConstatnts.KEYS.TEXT) && Ae.setCaption(ne[n.MessageConstatnts.KEYS.TEXT]);
                      }
                      Ae.hasOwnProperty("file") && delete Ae.file;
                  }
                  break;
                case n.MessageConstatnts.CATEGORY.CUSTOM:
                  Ae = new u.CustomMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.DATA][n.MessageConstatnts.KEYS.CUSTOM_DATA], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE], M.type);
                  break;
                case n.MessageConstatnts.CATEGORY.INTERACTIVE:
                  Ae = new d.InteractiveMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE], M.type, M[n.MessageConstatnts.KEYS.DATA][n.MessageConstatnts.KEYS.INTERACTIVE_DATA], M[n.MessageConstatnts.KEYS.DATA][n.MessageConstatnts.KEYS.INTERACTION_GOAL]);
                  break;
                case n.MessageConstatnts.CATEGORY.AGENTIC:
                  switch (M[n.MessageConstatnts.KEYS.TYPE]) {
                    case n.MessageConstatnts.TYPE.ASSISTANT:
                      Ae = new h.AIAssistantMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                      break;
                    case n.MessageConstatnts.TYPE.TOOL_ARGUMENTS:
                      Ae = new T.AIToolArgumentMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                      break;
                    case n.MessageConstatnts.TYPE.TOOL_RESULT:
                      Ae = new I.AIToolResultMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]);
                  }
                  break;
                case n.MessageConstatnts.CATEGORY.CARD:
                  Ae = new f.CardMessage(M[n.MessageConstatnts.KEYS.RECEIVER], M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]);
              }
              if ((M[n.MessageConstatnts.KEYS.CATEGORY] === n.MessageConstatnts.CATEGORY.MESSAGE || M[n.MessageConstatnts.KEYS.CATEGORY] === n.MessageConstatnts.CATEGORY.CUSTOM) && M[n.MessageConstatnts.KEYS.TYPE] !== n.MessageConstatnts.TYPE.TEXT && M?.[n.MessageConstatnts.KEYS.DATA] && (!((z = M?.[n.MessageConstatnts.KEYS.DATA]) === null || z === void 0) && z[n.MessageConstatnts.KEYS.ATTATCHMENTS]) && ((de = (le = M?.[n.MessageConstatnts.KEYS.DATA]) === null || le === void 0 ? void 0 : le[n.MessageConstatnts.KEYS.ATTATCHMENTS]) === null || de === void 0 ? void 0 : de.length) !== 0 && (!((W = C.CometChat.user) === null || W === void 0) && W.getFat()) && C.CometChat.SECURED_MEDIA_HOST) {
                var Ee = C.CometChat.SECURED_MEDIA_HOST, fe = (q = C.CometChat.user) === null || q === void 0 ? void 0 : q.getFat(), Te = E.updatePropertiesWithDynamicValue(M, Ee, "?" + n.ADDITIONAL_CONSTANTS.SECURE_URL_PROPERTY + "=" + fe);
                Te && (M = Te);
              }
              M[n.MessageConstatnts.KEYS.MY_RECEIPTS] && (M[n.MessageConstatnts.KEYS.MY_RECEIPTS] = M[n.MessageConstatnts.KEYS.MY_RECEIPTS], Object.keys(M[n.MessageConstatnts.KEYS.MY_RECEIPTS]).map(function(Ie) {
                var ce = new r.MessageReceipt();
                Ie == n.DELIVERY_RECEIPTS.DELIVERED_AT && (ce.setReceiptType(ce.RECEIPT_TYPE.DELIVERY_RECEIPT), ce.setDeliveredAt(M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.DELIVERY_RECEIPTS.DELIVERED_AT]), E.isFalsy(M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.DELIVERY_RECEIPTS.RECIPIENT]) ? M[n.DELIVERY_RECEIPTS.DELIVERED_TO_ME_AT] = M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.DELIVERY_RECEIPTS.DELIVERED_AT] : ce.setSender(M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.DELIVERY_RECEIPTS.RECIPIENT]), ce.setReceiverType(M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]), ce.setReceiver(M[n.MessageConstatnts.KEYS.RECEIVER])), M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.READ_RECEIPTS.READ_AT] && (ce.setReceiptType(ce.RECEIPT_TYPE.READ_RECEIPT), ce.setReadAt(M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.READ_RECEIPTS.READ_AT]), E.isFalsy(M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.READ_RECEIPTS.RECIPIENT]) ? M[n.READ_RECEIPTS.READ_BY_ME_AT] = M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.READ_RECEIPTS.READ_AT] : ce.setSender(M[n.MessageConstatnts.KEYS.MY_RECEIPTS][n.READ_RECEIPTS.RECIPIENT]), ce.setReceiverType(M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]), ce.setReceiver(M[n.MessageConstatnts.KEYS.RECEIVER]));
              }));
              try {
                if (Object.assign(Ae, M), (M = Ae).parentId && (M.parentMessageId = M.parentId, delete M.parentId), M instanceof p.BaseMessage && (E.isFalsy(se) || M.setRawMessage(se), M.quotedMessage && (M.setQuotedMessageId(M.quotedMessage.id), M.setQuotedMessage(V.trasformJSONMessge(M.quotedMessage)))), M instanceof i.TextMessage) V.extractDetailsFromMentions(M), M.setSender(M.getSender()), M.setReceiver(M.getReceiver()), M.getData()[n.MessageConstatnts.KEYS.METADATA] && M.setMetadata(M.getData()[n.MessageConstatnts.KEYS.METADATA]);
                else if (M instanceof S.MediaMessage) V.extractDetailsFromMentions(M), M.getData()[n.MessageConstatnts.KEYS.METADATA] && M.setMetadata(M.getData()[n.MessageConstatnts.KEYS.METADATA]), M.setSender(M.getSender()), M.setReceiver(M.getReceiver());
                else if (M instanceof o.Action) M.setSender(M.getSender()), M.setReceiver(M.getActionFor()), M.setActionBy(M.getActionBy()), M.setActionOn(M.getActionOn()), M.setActionFor(M.getActionFor()), M.setMessage(M.getMessage());
                else if (M instanceof s.Call) {
                  try {
                    M.setSender(M.getSender());
                  } catch (Ie) {
                    E.Logger.error("MessageController: trasformJSONMessge: setSender", Ie);
                  }
                  try {
                    M.setCallInitiator(M.getCallInitiator());
                  } catch (Ie) {
                    E.Logger.error("MessageController: trasformJSONMessge: setCallInitiator", Ie);
                  }
                  try {
                    M.setReceiver(M.getCallReceiver()), M.setCallReceiver(M.getCallReceiver());
                  } catch (Ie) {
                    E.Logger.error("MessageController: trasformJSONMessge: setCallreceiver", Ie);
                  }
                } else if (M instanceof u.CustomMessage) M.getData()[n.MessageConstatnts.KEYS.METADATA] && M.setMetadata(M.getData()[n.MessageConstatnts.KEYS.METADATA]), M.setCustomData(M.getData()[n.MessageConstatnts.KEYS.CUSTOM_DATA]), M.setSubType(M.getData()[n.MessageConstatnts.KEYS.CUSTOM_SUB_TYPE]), M.setSender(M.getSender()), M.setReceiver(M.getReceiver());
                else if (M instanceof d.InteractiveMessage) M.getData()[n.MessageConstatnts.KEYS.METADATA] && M.setMetadata(M.getData()[n.MessageConstatnts.KEYS.METADATA]), M.setInteractiveData(M.getData()[n.MessageConstatnts.KEYS.INTERACTIVE_DATA]), M.setInteractionGoal(M.getInteractionGoal()), M.setInteractions(M.getInteractions()), M.setSender(M.getSender()), M.setReceiver(M.getReceiver()), M.setIsSenderInteractionAllowed(M.getData()[n.MessageConstatnts.KEYS.ALLOW_SENDER_INTERACTION]);
                else if (M instanceof h.AIAssistantMessage) {
                  if (M.setSender(M.getSender()), M.setReceiver(M.getReceiver()), M[n.MessageConstatnts.KEYS.DATA]) {
                    var ue = (ne = M[n.MessageConstatnts.KEYS.DATA])[n.MessageConstatnts.KEYS.RUN_ID] || "", F = ne[n.MessageConstatnts.KEYS.THREAD_ID] || "", b = ne[n.MessageConstatnts.KEYS.TEXT] || "", w = new h.AIAssistantMessageData(ue, F, b);
                    M.setAssistantMessageData(w), ne[n.MessageConstatnts.KEYS.ELEMENTS] && M.setElements(P.AIAssistantElement.fromArray(ne[n.MessageConstatnts.KEYS.ELEMENTS]));
                  }
                } else if (M instanceof I.AIToolResultMessage) {
                  if (M.setSender(M.getSender()), M.setReceiver(M.getReceiver()), M[n.MessageConstatnts.KEYS.DATA]) {
                    ue = (ne = M[n.MessageConstatnts.KEYS.DATA])[n.MessageConstatnts.KEYS.RUN_ID] || "", F = ne[n.MessageConstatnts.KEYS.THREAD_ID] || "", b = ne[n.MessageConstatnts.KEYS.TEXT] || "";
                    var ie = ne[n.MessageConstatnts.KEYS.TOOL_CALL_ID] || "", ae = new I.AIToolResultMessageData(ue, F, b, ie);
                    M.setToolResultMessageData(ae);
                  }
                } else if (M instanceof T.AIToolArgumentMessage) {
                  if (M.setSender(M.getSender()), M.setReceiver(M.getReceiver()), M[n.MessageConstatnts.KEYS.DATA]) {
                    ue = (ne = M[n.MessageConstatnts.KEYS.DATA])[n.MessageConstatnts.KEYS.RUN_ID] || "", F = ne[n.MessageConstatnts.KEYS.THREAD_ID] || "";
                    var ne, Ne = T.AIToolCall.fromArray(ne[n.MessageConstatnts.KEYS.TOOL_CALLS] || []), ge = new T.AIToolArgumentMessageData(ue, F, Ne);
                    M.setToolArgumentMessageData(ge);
                  }
                } else M instanceof f.CardMessage && (M.setSender(M.getSender()), M.setReceiver(M.getReceiver()));
                M.hasOwnProperty("rawMessage") || (se = JSON.parse(JSON.stringify(M))), M instanceof p.BaseMessage && (E.isFalsy(se) || M.setRawMessage(se));
              } catch (Ie) {
                E.Logger.error("MessageController: trasformJSONMessge: Main", Ie), M = null;
              }
              return D.PinSaveParser.applyPinSaveAttributes(M), m.ThreadParser.applyThreadAttributes(M), M;
            } catch (Ie) {
              E.Logger.error("MessageController: trasformJSONMessge", Ie);
            }
          }, V.extractDetailsFromMentions = function(M) {
            if (M.getData()[n.MessageConstatnts.KEYS.MENTIONS]) {
              var z = [], le = !1, de = C.CometChat.user, W = M.getData()[n.MessageConstatnts.KEYS.MENTIONS];
              for (var q in W) q.toString() == de?.getUid() && (le = !0), z.push(new t.User(W[q]));
              M.setMentionedUsers(z), M.setHasMentionedMe(le);
            }
          }, V.getReceiptsFromJSON = function(M) {
            return new Promise(function(z, le) {
              try {
                var de = [];
                C.CometChat.getLoggedInUser().then(function(W) {
                  E.isFalsy(M.receipts) ? z([]) : (M.receipts.data.map(function(q) {
                    var se = new r.MessageReceipt();
                    q[n.DELIVERY_RECEIPTS.DELIVERED_AT] && (se.setReceiptType(se.RECEIPT_TYPE.DELIVERY_RECEIPT), se.setDeliveredAt(q[n.DELIVERY_RECEIPTS.DELIVERED_AT]), se.setTimestamp(q[n.DELIVERY_RECEIPTS.DELIVERED_AT]), E.isFalsy(q[n.DELIVERY_RECEIPTS.RECIPIENT]) ? se.setSender(W) : se.setSender(c.UsersController.trasformJSONUser(q[n.DELIVERY_RECEIPTS.RECIPIENT])), se.setReceiverType(M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]), se.setReceiver(M[n.MessageConstatnts.KEYS.RECEIVER])), q[n.READ_RECEIPTS.READ_AT] && (se.setReceiptType(se.RECEIPT_TYPE.READ_RECEIPT), se.setReadAt(q[n.READ_RECEIPTS.READ_AT]), se.setTimestamp(q[q[n.READ_RECEIPTS.READ_AT]]), E.isFalsy(q[n.READ_RECEIPTS.RECIPIENT]) ? se.setSender(W) : se.setSender(c.UsersController.trasformJSONUser(q[n.READ_RECEIPTS.RECIPIENT])), se.setReceiverType(M[n.MessageConstatnts.KEYS.RECEIVER_TYPE]), se.setReceiver(M[n.MessageConstatnts.KEYS.RECEIVER])), de.push(se);
                  }), z(de));
                });
              } catch (W) {
                le(new e.CometChatException(W));
              }
            });
          }, V;
        })();
      },
      function(j, a, g) {
        (function(p) {
          j.exports = (function i(S, E, n) {
            function o(e, l) {
              if (!E[e]) {
                if (!S[e]) {
                  if (s) return s(e, !0);
                  var u = /* @__PURE__ */ new Error("Cannot find module '" + e + "'");
                  throw u.code = "MODULE_NOT_FOUND", u;
                }
                var C = E[e] = { exports: {} };
                S[e][0].call(C.exports, function(c) {
                  var d = S[e][1][c];
                  return o(d || c);
                }, C, C.exports, i, S, E, n);
              }
              return E[e].exports;
            }
            for (var s = !1, r = 0; r < n.length; r++) o(n[r]);
            return o;
          })({
            1: [function(i, S, E) {
              (function(n) {
                "use strict";
                var o, s, r = n.MutationObserver || n.WebKitMutationObserver;
                if (r) {
                  var e = 0, l = new r(d), u = n.document.createTextNode("");
                  l.observe(u, { characterData: !0 }), o = function() {
                    u.data = e = ++e % 2;
                  };
                } else if (n.setImmediate || n.MessageChannel === void 0) o = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
                  var t = n.document.createElement("script");
                  t.onreadystatechange = function() {
                    d(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
                  }, n.document.documentElement.appendChild(t);
                } : function() {
                  setTimeout(d, 0);
                };
                else {
                  var C = new n.MessageChannel();
                  C.port1.onmessage = d, o = function() {
                    C.port2.postMessage(0);
                  };
                }
                var c = [];
                function d() {
                  var t, h;
                  s = !0;
                  for (var I = c.length; I; ) {
                    for (h = c, c = [], t = -1; ++t < I; ) h[t]();
                    I = c.length;
                  }
                  s = !1;
                }
                S.exports = function(t) {
                  c.push(t) !== 1 || s || o();
                };
              }).call(this, p !== void 0 ? p : typeof self < "u" ? self : typeof window < "u" ? window : {});
            }, {}],
            2: [function(i, S, E) {
              "use strict";
              var n = i(1);
              function o() {
              }
              var s = {}, r = ["REJECTED"], e = ["FULFILLED"], l = ["PENDING"];
              function u(I) {
                if (typeof I != "function") throw new TypeError("resolver must be a function");
                this.state = l, this.queue = [], this.outcome = void 0, I !== o && t(this, I);
              }
              function C(I, T, f) {
                this.promise = I, typeof T == "function" && (this.onFulfilled = T, this.callFulfilled = this.otherCallFulfilled), typeof f == "function" && (this.onRejected = f, this.callRejected = this.otherCallRejected);
              }
              function c(I, T, f) {
                n(function() {
                  var P;
                  try {
                    P = T(f);
                  } catch (m) {
                    return s.reject(I, m);
                  }
                  P === I ? s.reject(I, /* @__PURE__ */ new TypeError("Cannot resolve promise with itself")) : s.resolve(I, P);
                });
              }
              function d(I) {
                var T = I && I.then;
                if (I && (typeof I == "object" || typeof I == "function") && typeof T == "function") return function() {
                  T.apply(I, arguments);
                };
              }
              function t(I, T) {
                var f = !1;
                function P(V) {
                  f || (f = !0, s.reject(I, V));
                }
                function m(V) {
                  f || (f = !0, s.resolve(I, V));
                }
                var D = h(function() {
                  T(m, P);
                });
                D.status === "error" && P(D.value);
              }
              function h(I, T) {
                var f = {};
                try {
                  f.value = I(T), f.status = "success";
                } catch (P) {
                  f.status = "error", f.value = P;
                }
                return f;
              }
              (S.exports = u).prototype.catch = function(I) {
                return this.then(null, I);
              }, u.prototype.then = function(I, T) {
                if (typeof I != "function" && this.state === e || typeof T != "function" && this.state === r) return this;
                var f = new this.constructor(o);
                return this.state !== l ? c(f, this.state === e ? I : T, this.outcome) : this.queue.push(new C(f, I, T)), f;
              }, C.prototype.callFulfilled = function(I) {
                s.resolve(this.promise, I);
              }, C.prototype.otherCallFulfilled = function(I) {
                c(this.promise, this.onFulfilled, I);
              }, C.prototype.callRejected = function(I) {
                s.reject(this.promise, I);
              }, C.prototype.otherCallRejected = function(I) {
                c(this.promise, this.onRejected, I);
              }, s.resolve = function(I, T) {
                var f = h(d, T);
                if (f.status === "error") return s.reject(I, f.value);
                var P = f.value;
                if (P) t(I, P);
                else {
                  I.state = e, I.outcome = T;
                  for (var m = -1, D = I.queue.length; ++m < D; ) I.queue[m].callFulfilled(T);
                }
                return I;
              }, s.reject = function(I, T) {
                I.state = r, I.outcome = T;
                for (var f = -1, P = I.queue.length; ++f < P; ) I.queue[f].callRejected(T);
                return I;
              }, u.resolve = function(I) {
                return I instanceof this ? I : s.resolve(new this(o), I);
              }, u.reject = function(I) {
                var T = new this(o);
                return s.reject(T, I);
              }, u.all = function(I) {
                var T = this;
                if (Object.prototype.toString.call(I) !== "[object Array]") return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
                var f = I.length, P = !1;
                if (!f) return this.resolve([]);
                for (var m = new Array(f), D = 0, V = -1, M = new this(o); ++V < f; ) z(I[V], V);
                return M;
                function z(le, de) {
                  T.resolve(le).then(function(W) {
                    m[de] = W, ++D !== f || P || (P = !0, s.resolve(M, m));
                  }, function(W) {
                    P || (P = !0, s.reject(M, W));
                  });
                }
              }, u.race = function(I) {
                var T = this;
                if (Object.prototype.toString.call(I) !== "[object Array]") return this.reject(/* @__PURE__ */ new TypeError("must be an array"));
                var f = I.length, P = !1;
                if (!f) return this.resolve([]);
                for (var m, D = -1, V = new this(o); ++D < f; ) m = I[D], T.resolve(m).then(function(M) {
                  P || (P = !0, s.resolve(V, M));
                }, function(M) {
                  P || (P = !0, s.reject(V, M));
                });
                return V;
              };
            }, { 1: 1 }],
            3: [function(i, S, E) {
              (function(n) {
                "use strict";
                typeof n.Promise != "function" && (n.Promise = i(2));
              }).call(this, p !== void 0 ? p : typeof self < "u" ? self : typeof window < "u" ? window : {});
            }, { 2: 2 }],
            4: [function(i, S, E) {
              "use strict";
              var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(L) {
                return typeof L;
              } : function(L) {
                return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
              }, o = (function() {
                try {
                  if (typeof indexedDB < "u") return indexedDB;
                  if (typeof webkitIndexedDB < "u") return webkitIndexedDB;
                  if (typeof mozIndexedDB < "u") return mozIndexedDB;
                  if (typeof OIndexedDB < "u") return OIndexedDB;
                  if (typeof msIndexedDB < "u") return msIndexedDB;
                } catch {
                  return;
                }
              })();
              function s(L, Y) {
                L = L || [], Y = Y || {};
                try {
                  return new Blob(L, Y);
                } catch (k) {
                  if (k.name !== "TypeError") throw k;
                  for (var U = new (typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder)(), H = 0; H < L.length; H += 1) U.append(L[H]);
                  return U.getBlob(Y.type);
                }
              }
              typeof Promise > "u" && i(3);
              var r = Promise;
              function e(L, Y) {
                Y && L.then(function(U) {
                  Y(null, U);
                }, function(U) {
                  Y(U);
                });
              }
              function l(L, Y, U) {
                typeof Y == "function" && L.then(Y), typeof U == "function" && L.catch(U);
              }
              function u(L) {
                return typeof L != "string" && (L = String(L)), L;
              }
              function C() {
                if (arguments.length && typeof arguments[arguments.length - 1] == "function") return arguments[arguments.length - 1];
              }
              var c = "local-forage-detect-blob-support", d = void 0, t = {}, h = Object.prototype.toString, I = "readonly", T = "readwrite";
              function f(L) {
                return typeof d == "boolean" ? r.resolve(d) : (Y = L, new r(function(U) {
                  var H = Y.transaction(c, T), k = s([""]);
                  H.objectStore(c).put(k, "key"), H.onabort = function(x) {
                    x.preventDefault(), x.stopPropagation(), U(!1);
                  }, H.oncomplete = function() {
                    var x = navigator.userAgent.match(/Chrome\/(\d+)/);
                    U(navigator.userAgent.match(/Edge\//) || !x || 43 <= parseInt(x[1], 10));
                  };
                }).catch(function() {
                  return !1;
                })).then(function(U) {
                  return d = U;
                });
                var Y;
              }
              function P(L) {
                var Y = t[L.name], U = {};
                U.promise = new r(function(H, k) {
                  U.resolve = H, U.reject = k;
                }), Y.deferredOperations.push(U), Y.dbReady ? Y.dbReady = Y.dbReady.then(function() {
                  return U.promise;
                }) : Y.dbReady = U.promise;
              }
              function m(L) {
                var Y = t[L.name].deferredOperations.pop();
                if (Y) return Y.resolve(), Y.promise;
              }
              function D(L, Y) {
                var U = t[L.name].deferredOperations.pop();
                if (U) return U.reject(Y), U.promise;
              }
              function V(L, Y) {
                return new r(function(U, H) {
                  if (t[L.name] = t[L.name] || {
                    forages: [],
                    db: null,
                    dbReady: null,
                    deferredOperations: []
                  }, L.db) {
                    if (!Y) return U(L.db);
                    P(L), L.db.close();
                  }
                  var k = [L.name];
                  Y && k.push(L.version);
                  var x = o.open.apply(o, k);
                  Y && (x.onupgradeneeded = function(X) {
                    var Z = x.result;
                    try {
                      Z.createObjectStore(L.storeName), X.oldVersion <= 1 && Z.createObjectStore(c);
                    } catch (ee) {
                      if (ee.name !== "ConstraintError") throw ee;
                    }
                  }), x.onerror = function(X) {
                    X.preventDefault(), H(x.error);
                  }, x.onsuccess = function() {
                    var X = x.result;
                    X.onversionchange = function(Z) {
                      Z.target.close();
                    }, U(X), m(L);
                  };
                });
              }
              function M(L) {
                return V(L, !1);
              }
              function z(L) {
                return V(L, !0);
              }
              function le(L, Y) {
                if (!L.db) return !0;
                var U = !L.db.objectStoreNames.contains(L.storeName), H = L.version < L.db.version, k = L.version > L.db.version;
                if (H && (L.version, L.version = L.db.version), k || U) {
                  if (U) {
                    var x = L.db.version + 1;
                    x > L.version && (L.version = x);
                  }
                  return !0;
                }
                return !1;
              }
              function de(L) {
                return s([(function(Y) {
                  for (var U = Y.length, H = new ArrayBuffer(U), k = new Uint8Array(H), x = 0; x < U; x++) k[x] = Y.charCodeAt(x);
                  return H;
                })(atob(L.data))], { type: L.type });
              }
              function W(L) {
                return L && L.__local_forage_encoded_blob;
              }
              function q(L) {
                var Y = this, U = Y._initReady().then(function() {
                  var H = t[Y._dbInfo.name];
                  if (H && H.dbReady) return H.dbReady;
                });
                return l(U, L, L), U;
              }
              function se(L, Y, U, H) {
                H === void 0 && (H = 1);
                try {
                  U(null, L.db.transaction(L.storeName, Y));
                } catch (k) {
                  if (0 < H && (!L.db || k.name === "InvalidStateError" || k.name === "NotFoundError")) return r.resolve().then(function() {
                    if (!L.db || k.name === "NotFoundError" && !L.db.objectStoreNames.contains(L.storeName) && L.version <= L.db.version) return L.db && (L.version = L.db.version + 1), z(L);
                  }).then(function() {
                    return (function(x) {
                      P(x);
                      for (var X = t[x.name], Z = X.forages, ee = 0; ee < Z.length; ee++) {
                        var te = Z[ee];
                        te._dbInfo.db && (te._dbInfo.db.close(), te._dbInfo.db = null);
                      }
                      return x.db = null, M(x).then(function(re) {
                        return x.db = re, le(x) ? z(x) : re;
                      }).then(function(re) {
                        x.db = X.db = re;
                        for (var oe = 0; oe < Z.length; oe++) Z[oe]._dbInfo.db = re;
                      }).catch(function(re) {
                        throw D(x, re), re;
                      });
                    })(L).then(function() {
                      se(L, Y, U, H - 1);
                    });
                  }).catch(U);
                  U(k);
                }
              }
              var Ae = {
                _driver: "asyncStorage",
                _initStorage: function(L) {
                  var Y = this, U = { db: null };
                  if (L) for (var H in L) U[H] = L[H];
                  var k = t[U.name];
                  k || (k = {
                    forages: [],
                    db: null,
                    dbReady: null,
                    deferredOperations: []
                  }, t[U.name] = k), k.forages.push(Y), Y._initReady || (Y._initReady = Y.ready, Y.ready = q);
                  var x = [];
                  function X() {
                    return r.resolve();
                  }
                  for (var Z = 0; Z < k.forages.length; Z++) {
                    var ee = k.forages[Z];
                    ee !== Y && x.push(ee._initReady().catch(X));
                  }
                  var te = k.forages.slice(0);
                  return r.all(x).then(function() {
                    return U.db = k.db, M(U);
                  }).then(function(re) {
                    return U.db = re, le(U, Y._defaultConfig.version) ? z(U) : re;
                  }).then(function(re) {
                    U.db = k.db = re, Y._dbInfo = U;
                    for (var oe = 0; oe < te.length; oe++) {
                      var Ce = te[oe];
                      Ce !== Y && (Ce._dbInfo.db = U.db, Ce._dbInfo.version = U.version);
                    }
                  });
                },
                _support: (function() {
                  try {
                    if (!o || !o.open) return !1;
                    var L = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), Y = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
                    return (!L || Y) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
                  } catch {
                    return !1;
                  }
                })(),
                iterate: function(L, Y) {
                  var U = this, H = new r(function(k, x) {
                    U.ready().then(function() {
                      se(U._dbInfo, I, function(X, Z) {
                        if (X) return x(X);
                        try {
                          var ee = Z.objectStore(U._dbInfo.storeName).openCursor(), te = 1;
                          ee.onsuccess = function() {
                            var re = ee.result;
                            if (re) {
                              var oe = re.value;
                              W(oe) && (oe = de(oe));
                              var Ce = L(oe, re.key, te++);
                              Ce !== void 0 ? k(Ce) : re.continue();
                            } else k();
                          }, ee.onerror = function() {
                            x(ee.error);
                          };
                        } catch (re) {
                          x(re);
                        }
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                getItem: function(L, Y) {
                  var U = this;
                  L = u(L);
                  var H = new r(function(k, x) {
                    U.ready().then(function() {
                      se(U._dbInfo, I, function(X, Z) {
                        if (X) return x(X);
                        try {
                          var ee = Z.objectStore(U._dbInfo.storeName).get(L);
                          ee.onsuccess = function() {
                            var te = ee.result;
                            te === void 0 && (te = null), W(te) && (te = de(te)), k(te);
                          }, ee.onerror = function() {
                            x(ee.error);
                          };
                        } catch (te) {
                          x(te);
                        }
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                setItem: function(L, Y, U) {
                  var H = this;
                  L = u(L);
                  var k = new r(function(x, X) {
                    var Z;
                    H.ready().then(function() {
                      return Z = H._dbInfo, h.call(Y) === "[object Blob]" ? f(Z.db).then(function(ee) {
                        return ee ? Y : (te = Y, new r(function(re, oe) {
                          var Ce = new FileReader();
                          Ce.onerror = oe, Ce.onloadend = function(me) {
                            re({
                              __local_forage_encoded_blob: !0,
                              data: btoa(me.target.result || ""),
                              type: te.type
                            });
                          }, Ce.readAsBinaryString(te);
                        }));
                        var te;
                      }) : Y;
                    }).then(function(ee) {
                      se(H._dbInfo, T, function(te, re) {
                        if (te) return X(te);
                        try {
                          var oe = re.objectStore(H._dbInfo.storeName);
                          ee === null && (ee = void 0);
                          var Ce = oe.put(ee, L);
                          re.oncomplete = function() {
                            ee === void 0 && (ee = null), x(ee);
                          }, re.onabort = re.onerror = function() {
                            X(Ce.error ? Ce.error : Ce.transaction.error);
                          };
                        } catch (me) {
                          X(me);
                        }
                      });
                    }).catch(X);
                  });
                  return e(k, U), k;
                },
                removeItem: function(L, Y) {
                  var U = this;
                  L = u(L);
                  var H = new r(function(k, x) {
                    U.ready().then(function() {
                      se(U._dbInfo, T, function(X, Z) {
                        if (X) return x(X);
                        try {
                          var ee = Z.objectStore(U._dbInfo.storeName).delete(L);
                          Z.oncomplete = function() {
                            k();
                          }, Z.onerror = function() {
                            x(ee.error);
                          }, Z.onabort = function() {
                            x(ee.error ? ee.error : ee.transaction.error);
                          };
                        } catch (te) {
                          x(te);
                        }
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                clear: function(L) {
                  var Y = this, U = new r(function(H, k) {
                    Y.ready().then(function() {
                      se(Y._dbInfo, T, function(x, X) {
                        if (x) return k(x);
                        try {
                          var Z = X.objectStore(Y._dbInfo.storeName).clear();
                          X.oncomplete = function() {
                            H();
                          }, X.onabort = X.onerror = function() {
                            k(Z.error ? Z.error : Z.transaction.error);
                          };
                        } catch (ee) {
                          k(ee);
                        }
                      });
                    }).catch(k);
                  });
                  return e(U, L), U;
                },
                length: function(L) {
                  var Y = this, U = new r(function(H, k) {
                    Y.ready().then(function() {
                      se(Y._dbInfo, I, function(x, X) {
                        if (x) return k(x);
                        try {
                          var Z = X.objectStore(Y._dbInfo.storeName).count();
                          Z.onsuccess = function() {
                            H(Z.result);
                          }, Z.onerror = function() {
                            k(Z.error);
                          };
                        } catch (ee) {
                          k(ee);
                        }
                      });
                    }).catch(k);
                  });
                  return e(U, L), U;
                },
                key: function(L, Y) {
                  var U = this, H = new r(function(k, x) {
                    L < 0 ? k(null) : U.ready().then(function() {
                      se(U._dbInfo, I, function(X, Z) {
                        if (X) return x(X);
                        try {
                          var ee = Z.objectStore(U._dbInfo.storeName), te = !1, re = ee.openKeyCursor();
                          re.onsuccess = function() {
                            var oe = re.result;
                            oe ? L === 0 || te ? k(oe.key) : (te = !0, oe.advance(L)) : k(null);
                          }, re.onerror = function() {
                            x(re.error);
                          };
                        } catch (oe) {
                          x(oe);
                        }
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                keys: function(L) {
                  var Y = this, U = new r(function(H, k) {
                    Y.ready().then(function() {
                      se(Y._dbInfo, I, function(x, X) {
                        if (x) return k(x);
                        try {
                          var Z = X.objectStore(Y._dbInfo.storeName).openKeyCursor(), ee = [];
                          Z.onsuccess = function() {
                            var te = Z.result;
                            te ? (ee.push(te.key), te.continue()) : H(ee);
                          }, Z.onerror = function() {
                            k(Z.error);
                          };
                        } catch (te) {
                          k(te);
                        }
                      });
                    }).catch(k);
                  });
                  return e(U, L), U;
                },
                dropInstance: function(L, Y) {
                  Y = C.apply(this, arguments);
                  var U, H = this.config();
                  if ((L = typeof L != "function" && L || {}).name || (L.name = L.name || H.name, L.storeName = L.storeName || H.storeName), L.name) {
                    var k = L.name === H.name && this._dbInfo.db ? r.resolve(this._dbInfo.db) : M(L).then(function(x) {
                      var X = t[L.name], Z = X.forages;
                      X.db = x;
                      for (var ee = 0; ee < Z.length; ee++) Z[ee]._dbInfo.db = x;
                      return x;
                    });
                    U = L.storeName ? k.then(function(x) {
                      if (x.objectStoreNames.contains(L.storeName)) {
                        var X = x.version + 1;
                        P(L);
                        var Z = t[L.name], ee = Z.forages;
                        x.close();
                        for (var te = 0; te < ee.length; te++) {
                          var re = ee[te];
                          re._dbInfo.db = null, re._dbInfo.version = X;
                        }
                        return new r(function(oe, Ce) {
                          var me = o.open(L.name, X);
                          me.onerror = function(Re) {
                            me.result.close(), Ce(Re);
                          }, me.onupgradeneeded = function() {
                            me.result.deleteObjectStore(L.storeName);
                          }, me.onsuccess = function() {
                            var Re = me.result;
                            Re.close(), oe(Re);
                          };
                        }).then(function(oe) {
                          Z.db = oe;
                          for (var Ce = 0; Ce < ee.length; Ce++) {
                            var me = ee[Ce];
                            me._dbInfo.db = oe, m(me._dbInfo);
                          }
                        }).catch(function(oe) {
                          throw (D(L, oe) || r.resolve()).catch(function() {
                          }), oe;
                        });
                      }
                    }) : k.then(function(x) {
                      P(L);
                      var X = t[L.name], Z = X.forages;
                      x.close();
                      for (var ee = 0; ee < Z.length; ee++) {
                        var te = Z[ee];
                        te._dbInfo.db = null;
                      }
                      return new r(function(re, oe) {
                        var Ce = o.deleteDatabase(L.name);
                        Ce.onerror = function() {
                          var me = Ce.result;
                          me && me.close(), oe(Ce.error);
                        }, Ce.onblocked = function() {
                        }, Ce.onsuccess = function() {
                          var me = Ce.result;
                          me && me.close(), re(me);
                        };
                      }).then(function(re) {
                        X.db = re;
                        for (var oe = 0; oe < Z.length; oe++) {
                          var Ce = Z[oe];
                          m(Ce._dbInfo);
                        }
                      }).catch(function(re) {
                        throw (D(L, re) || r.resolve()).catch(function() {
                        }), re;
                      });
                    });
                  } else U = r.reject("Invalid arguments");
                  return e(U, Y), U;
                }
              }, Pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ee = /^~~local_forage_type~([^~]+)~/, fe = "__lfsc__:", Te = fe.length, ue = "arbf", F = "blob", b = Te + ue.length, w = Object.prototype.toString;
              function ie(L) {
                var Y, U, H, k, x, X = 0.75 * L.length, Z = L.length, ee = 0;
                L[L.length - 1] === "=" && (X--, L[L.length - 2] === "=" && X--);
                var te = new ArrayBuffer(X), re = new Uint8Array(te);
                for (Y = 0; Y < Z; Y += 4) U = Pe.indexOf(L[Y]), H = Pe.indexOf(L[Y + 1]), k = Pe.indexOf(L[Y + 2]), x = Pe.indexOf(L[Y + 3]), re[ee++] = U << 2 | H >> 4, re[ee++] = (15 & H) << 4 | k >> 2, re[ee++] = (3 & k) << 6 | 63 & x;
                return te;
              }
              function ae(L) {
                var Y, U = new Uint8Array(L), H = "";
                for (Y = 0; Y < U.length; Y += 3) H += Pe[U[Y] >> 2], H += Pe[(3 & U[Y]) << 4 | U[Y + 1] >> 4], H += Pe[(15 & U[Y + 1]) << 2 | U[Y + 2] >> 6], H += Pe[63 & U[Y + 2]];
                return U.length % 3 == 2 ? H = H.substring(0, H.length - 1) + "=" : U.length % 3 == 1 && (H = H.substring(0, H.length - 2) + "=="), H;
              }
              var ne = {
                serialize: function(L, Y) {
                  var U = "";
                  if (L && (U = w.call(L)), L && (U === "[object ArrayBuffer]" || L.buffer && w.call(L.buffer) === "[object ArrayBuffer]")) {
                    var H, k = fe;
                    L instanceof ArrayBuffer ? (H = L, k += ue) : (H = L.buffer, U === "[object Int8Array]" ? k += "si08" : U === "[object Uint8Array]" ? k += "ui08" : U === "[object Uint8ClampedArray]" ? k += "uic8" : U === "[object Int16Array]" ? k += "si16" : U === "[object Uint16Array]" ? k += "ur16" : U === "[object Int32Array]" ? k += "si32" : U === "[object Uint32Array]" ? k += "ui32" : U === "[object Float32Array]" ? k += "fl32" : U === "[object Float64Array]" ? k += "fl64" : Y(/* @__PURE__ */ new Error("Failed to get type for BinaryArray"))), Y(k + ae(H));
                  } else if (U === "[object Blob]") {
                    var x = new FileReader();
                    x.onload = function() {
                      var X = "~~local_forage_type~" + L.type + "~" + ae(this.result);
                      Y(fe + F + X);
                    }, x.readAsArrayBuffer(L);
                  } else try {
                    Y(JSON.stringify(L));
                  } catch (X) {
                    Y(null, X);
                  }
                },
                deserialize: function(L) {
                  if (L.substring(0, Te) !== fe) return JSON.parse(L);
                  var Y, U = L.substring(b), H = L.substring(Te, b);
                  if (H === F && Ee.test(U)) {
                    var k = U.match(Ee);
                    Y = k[1], U = U.substring(k[0].length);
                  }
                  var x = ie(U);
                  switch (H) {
                    case ue:
                      return x;
                    case F:
                      return s([x], { type: Y });
                    case "si08":
                      return new Int8Array(x);
                    case "ui08":
                      return new Uint8Array(x);
                    case "uic8":
                      return new Uint8ClampedArray(x);
                    case "si16":
                      return new Int16Array(x);
                    case "ur16":
                      return new Uint16Array(x);
                    case "si32":
                      return new Int32Array(x);
                    case "ui32":
                      return new Uint32Array(x);
                    case "fl32":
                      return new Float32Array(x);
                    case "fl64":
                      return new Float64Array(x);
                    default:
                      throw new Error("Unkown type: " + H);
                  }
                },
                stringToBuffer: ie,
                bufferToString: ae
              };
              function Ne(L, Y, U, H) {
                L.executeSql("CREATE TABLE IF NOT EXISTS " + Y.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], U, H);
              }
              function ge(L, Y, U, H, k, x) {
                L.executeSql(U, H, k, function(X, Z) {
                  Z.code === Z.SYNTAX_ERR ? X.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [Y.storeName], function(ee, te) {
                    te.rows.length ? x(ee, Z) : Ne(ee, Y, function() {
                      ee.executeSql(U, H, k, x);
                    }, x);
                  }, x) : x(X, Z);
                }, x);
              }
              function Ie(L, Y, U, H) {
                var k = this;
                L = u(L);
                var x = new r(function(X, Z) {
                  k.ready().then(function() {
                    Y === void 0 && (Y = null);
                    var ee = Y, te = k._dbInfo;
                    te.serializer.serialize(Y, function(re, oe) {
                      oe ? Z(oe) : te.db.transaction(function(Ce) {
                        ge(Ce, te, "INSERT OR REPLACE INTO " + te.storeName + " (key, value) VALUES (?, ?)", [L, re], function() {
                          X(ee);
                        }, function(me, Re) {
                          Z(Re);
                        });
                      }, function(Ce) {
                        if (Ce.code === Ce.QUOTA_ERR) {
                          if (0 < H) return void X(Ie.apply(k, [
                            L,
                            ee,
                            U,
                            H - 1
                          ]));
                          Z(Ce);
                        }
                      });
                    });
                  }).catch(Z);
                });
                return e(x, U), x;
              }
              var ce = {
                _driver: "webSQLStorage",
                _initStorage: function(L) {
                  var Y = this, U = { db: null };
                  if (L) for (var H in L) U[H] = typeof L[H] != "string" ? L[H].toString() : L[H];
                  var k = new r(function(x, X) {
                    try {
                      U.db = openDatabase(U.name, String(U.version), U.description, U.size);
                    } catch (Z) {
                      return X(Z);
                    }
                    U.db.transaction(function(Z) {
                      Ne(Z, U, function() {
                        Y._dbInfo = U, x();
                      }, function(ee, te) {
                        X(te);
                      });
                    }, X);
                  });
                  return U.serializer = ne, k;
                },
                _support: typeof openDatabase == "function",
                iterate: function(L, Y) {
                  var U = this, H = new r(function(k, x) {
                    U.ready().then(function() {
                      var X = U._dbInfo;
                      X.db.transaction(function(Z) {
                        ge(Z, X, "SELECT * FROM " + X.storeName, [], function(ee, te) {
                          for (var re = te.rows, oe = re.length, Ce = 0; Ce < oe; Ce++) {
                            var me = re.item(Ce), Re = me.value;
                            if (Re && (Re = X.serializer.deserialize(Re)), (Re = L(Re, me.key, Ce + 1)) !== void 0) return void k(Re);
                          }
                          k();
                        }, function(ee, te) {
                          x(te);
                        });
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                getItem: function(L, Y) {
                  var U = this;
                  L = u(L);
                  var H = new r(function(k, x) {
                    U.ready().then(function() {
                      var X = U._dbInfo;
                      X.db.transaction(function(Z) {
                        ge(Z, X, "SELECT * FROM " + X.storeName + " WHERE key = ? LIMIT 1", [L], function(ee, te) {
                          var re = te.rows.length ? te.rows.item(0).value : null;
                          re && (re = X.serializer.deserialize(re)), k(re);
                        }, function(ee, te) {
                          x(te);
                        });
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                setItem: function(L, Y, U) {
                  return Ie.apply(this, [
                    L,
                    Y,
                    U,
                    1
                  ]);
                },
                removeItem: function(L, Y) {
                  var U = this;
                  L = u(L);
                  var H = new r(function(k, x) {
                    U.ready().then(function() {
                      var X = U._dbInfo;
                      X.db.transaction(function(Z) {
                        ge(Z, X, "DELETE FROM " + X.storeName + " WHERE key = ?", [L], function() {
                          k();
                        }, function(ee, te) {
                          x(te);
                        });
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                clear: function(L) {
                  var Y = this, U = new r(function(H, k) {
                    Y.ready().then(function() {
                      var x = Y._dbInfo;
                      x.db.transaction(function(X) {
                        ge(X, x, "DELETE FROM " + x.storeName, [], function() {
                          H();
                        }, function(Z, ee) {
                          k(ee);
                        });
                      });
                    }).catch(k);
                  });
                  return e(U, L), U;
                },
                length: function(L) {
                  var Y = this, U = new r(function(H, k) {
                    Y.ready().then(function() {
                      var x = Y._dbInfo;
                      x.db.transaction(function(X) {
                        ge(X, x, "SELECT COUNT(key) as c FROM " + x.storeName, [], function(Z, ee) {
                          var te = ee.rows.item(0).c;
                          H(te);
                        }, function(Z, ee) {
                          k(ee);
                        });
                      });
                    }).catch(k);
                  });
                  return e(U, L), U;
                },
                key: function(L, Y) {
                  var U = this, H = new r(function(k, x) {
                    U.ready().then(function() {
                      var X = U._dbInfo;
                      X.db.transaction(function(Z) {
                        ge(Z, X, "SELECT key FROM " + X.storeName + " WHERE id = ? LIMIT 1", [L + 1], function(ee, te) {
                          k(te.rows.length ? te.rows.item(0).key : null);
                        }, function(ee, te) {
                          x(te);
                        });
                      });
                    }).catch(x);
                  });
                  return e(H, Y), H;
                },
                keys: function(L) {
                  var Y = this, U = new r(function(H, k) {
                    Y.ready().then(function() {
                      var x = Y._dbInfo;
                      x.db.transaction(function(X) {
                        ge(X, x, "SELECT key FROM " + x.storeName, [], function(Z, ee) {
                          for (var te = [], re = 0; re < ee.rows.length; re++) te.push(ee.rows.item(re).key);
                          H(te);
                        }, function(Z, ee) {
                          k(ee);
                        });
                      });
                    }).catch(k);
                  });
                  return e(U, L), U;
                },
                dropInstance: function(L, Y) {
                  Y = C.apply(this, arguments);
                  var U = this.config();
                  (L = typeof L != "function" && L || {}).name || (L.name = L.name || U.name, L.storeName = L.storeName || U.storeName);
                  var H, k = this;
                  return e(H = L.name ? new r(function(x) {
                    var X = L.name === U.name ? k._dbInfo.db : openDatabase(L.name, "", "", 0), Z;
                    L.storeName ? x({
                      db: X,
                      storeNames: [L.storeName]
                    }) : x((Z = X, new r(function(ee, te) {
                      Z.transaction(function(re) {
                        re.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(oe, Ce) {
                          for (var me = [], Re = 0; Re < Ce.rows.length; Re++) me.push(Ce.rows.item(Re).name);
                          ee({
                            db: Z,
                            storeNames: me
                          });
                        }, function(oe, Ce) {
                          te(Ce);
                        });
                      }, function(re) {
                        te(re);
                      });
                    })));
                  }).then(function(x) {
                    return new r(function(X, Z) {
                      x.db.transaction(function(ee) {
                        function te(me) {
                          return new r(function(Re, Fe) {
                            ee.executeSql("DROP TABLE IF EXISTS " + me, [], function() {
                              Re();
                            }, function(at, Be) {
                              Fe(Be);
                            });
                          });
                        }
                        for (var re = [], oe = 0, Ce = x.storeNames.length; oe < Ce; oe++) re.push(te(x.storeNames[oe]));
                        r.all(re).then(function() {
                          X();
                        }).catch(function(me) {
                          Z(me);
                        });
                      }, function(ee) {
                        Z(ee);
                      });
                    });
                  }) : r.reject("Invalid arguments"), Y), H;
                }
              };
              function De(L, Y) {
                var U = L.name + "/";
                return L.storeName !== Y.storeName && (U += L.storeName + "/"), U;
              }
              function be() {
                return !(function() {
                  var L = "_localforage_support_test";
                  try {
                    return localStorage.setItem(L, !0), localStorage.removeItem(L), !1;
                  } catch {
                    return !0;
                  }
                })() || 0 < localStorage.length;
              }
              var Ue = {
                _driver: "localStorageWrapper",
                _initStorage: function(L) {
                  var Y = {};
                  if (L) for (var U in L) Y[U] = L[U];
                  return Y.keyPrefix = De(L, this._defaultConfig), be() ? ((this._dbInfo = Y).serializer = ne, r.resolve()) : r.reject();
                },
                _support: (function() {
                  try {
                    return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
                  } catch {
                    return !1;
                  }
                })(),
                iterate: function(L, Y) {
                  var U = this, H = U.ready().then(function() {
                    for (var k = U._dbInfo, x = k.keyPrefix, X = x.length, Z = localStorage.length, ee = 1, te = 0; te < Z; te++) {
                      var re = localStorage.key(te);
                      if (re.indexOf(x) === 0) {
                        var oe = localStorage.getItem(re);
                        if (oe && (oe = k.serializer.deserialize(oe)), (oe = L(oe, re.substring(X), ee++)) !== void 0) return oe;
                      }
                    }
                  });
                  return e(H, Y), H;
                },
                getItem: function(L, Y) {
                  var U = this;
                  L = u(L);
                  var H = U.ready().then(function() {
                    var k = U._dbInfo, x = localStorage.getItem(k.keyPrefix + L);
                    return x && (x = k.serializer.deserialize(x)), x;
                  });
                  return e(H, Y), H;
                },
                setItem: function(L, Y, U) {
                  var H = this;
                  L = u(L);
                  var k = H.ready().then(function() {
                    Y === void 0 && (Y = null);
                    var x = Y;
                    return new r(function(X, Z) {
                      var ee = H._dbInfo;
                      ee.serializer.serialize(Y, function(te, re) {
                        if (re) Z(re);
                        else try {
                          localStorage.setItem(ee.keyPrefix + L, te), X(x);
                        } catch (oe) {
                          oe.name !== "QuotaExceededError" && oe.name !== "NS_ERROR_DOM_QUOTA_REACHED" || Z(oe), Z(oe);
                        }
                      });
                    });
                  });
                  return e(k, U), k;
                },
                removeItem: function(L, Y) {
                  var U = this;
                  L = u(L);
                  var H = U.ready().then(function() {
                    var k = U._dbInfo;
                    localStorage.removeItem(k.keyPrefix + L);
                  });
                  return e(H, Y), H;
                },
                clear: function(L) {
                  var Y = this, U = Y.ready().then(function() {
                    for (var H = Y._dbInfo.keyPrefix, k = localStorage.length - 1; 0 <= k; k--) {
                      var x = localStorage.key(k);
                      x.indexOf(H) === 0 && localStorage.removeItem(x);
                    }
                  });
                  return e(U, L), U;
                },
                length: function(L) {
                  var Y = this.keys().then(function(U) {
                    return U.length;
                  });
                  return e(Y, L), Y;
                },
                key: function(L, Y) {
                  var U = this, H = U.ready().then(function() {
                    var k, x = U._dbInfo;
                    try {
                      k = localStorage.key(L);
                    } catch {
                      k = null;
                    }
                    return k && (k = k.substring(x.keyPrefix.length)), k;
                  });
                  return e(H, Y), H;
                },
                keys: function(L) {
                  var Y = this, U = Y.ready().then(function() {
                    for (var H = Y._dbInfo, k = localStorage.length, x = [], X = 0; X < k; X++) {
                      var Z = localStorage.key(X);
                      Z.indexOf(H.keyPrefix) === 0 && x.push(Z.substring(H.keyPrefix.length));
                    }
                    return x;
                  });
                  return e(U, L), U;
                },
                dropInstance: function(L, Y) {
                  if (Y = C.apply(this, arguments), !(L = typeof L != "function" && L || {}).name) {
                    var U = this.config();
                    L.name = L.name || U.name, L.storeName = L.storeName || U.storeName;
                  }
                  var H, k = this;
                  return e(H = L.name ? new r(function(x) {
                    L.storeName ? x(De(L, k._defaultConfig)) : x(L.name + "/");
                  }).then(function(x) {
                    for (var X = localStorage.length - 1; 0 <= X; X--) {
                      var Z = localStorage.key(X);
                      Z.indexOf(x) === 0 && localStorage.removeItem(Z);
                    }
                  }) : r.reject("Invalid arguments"), Y), H;
                }
              }, ke = function(L, Y) {
                for (var U = L.length, H = 0; H < U; ) {
                  if ((k = L[H]) === (x = Y) || typeof k == "number" && typeof x == "number" && isNaN(k) && isNaN(x)) return !0;
                  H++;
                }
                var k, x;
                return !1;
              }, Xe = Array.isArray || function(L) {
                return Object.prototype.toString.call(L) === "[object Array]";
              }, Ke = {}, ot = {}, ve = {
                INDEXEDDB: Ae,
                WEBSQL: ce,
                LOCALSTORAGE: Ue
              }, st = [
                ve.INDEXEDDB._driver,
                ve.WEBSQL._driver,
                ve.LOCALSTORAGE._driver
              ], He = ["dropInstance"], rt = [
                "clear",
                "getItem",
                "iterate",
                "key",
                "keys",
                "length",
                "removeItem",
                "setItem"
              ].concat(He), ut = {
                description: "",
                driver: st.slice(),
                name: "localforage",
                size: 4980736,
                storeName: "keyvaluepairs",
                version: 1
              };
              function Et(L, Y) {
                L[Y] = function() {
                  var U = arguments;
                  return L.ready().then(function() {
                    return L[Y].apply(L, U);
                  });
                };
              }
              function it() {
                for (var L = 1; L < arguments.length; L++) {
                  var Y = arguments[L];
                  if (Y) for (var U in Y) Y.hasOwnProperty(U) && (Xe(Y[U]) ? arguments[0][U] = Y[U].slice() : arguments[0][U] = Y[U]);
                }
                return arguments[0];
              }
              S.exports = new ((function() {
                function L(Y) {
                  for (var U in (function(x, X) {
                    if (!(x instanceof X)) throw new TypeError("Cannot call a class as a function");
                  })(this, L), ve) if (ve.hasOwnProperty(U)) {
                    var H = ve[U], k = H._driver;
                    this[U] = k, Ke[k] || this.defineDriver(H);
                  }
                  this._defaultConfig = it({}, ut), this._config = it({}, this._defaultConfig, Y), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
                  });
                }
                return L.prototype.config = function(Y) {
                  if ((Y === void 0 ? "undefined" : n(Y)) !== "object") return typeof Y == "string" ? this._config[Y] : this._config;
                  if (this._ready) return /* @__PURE__ */ new Error("Can't call config() after localforage has been used.");
                  for (var U in Y) {
                    if (U === "storeName" && (Y[U] = Y[U].replace(/\W/g, "_")), U === "version" && typeof Y[U] != "number") return /* @__PURE__ */ new Error("Database version must be a number.");
                    this._config[U] = Y[U];
                  }
                  return !("driver" in Y && Y.driver) || this.setDriver(this._config.driver);
                }, L.prototype.defineDriver = function(Y, U, H) {
                  var k = new r(function(x, X) {
                    try {
                      var Z = Y._driver, ee = /* @__PURE__ */ new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                      if (!Y._driver) return void X(ee);
                      for (var te = rt.concat("_initStorage"), re = 0, oe = te.length; re < oe; re++) {
                        var Ce = te[re];
                        if ((!ke(He, Ce) || Y[Ce]) && typeof Y[Ce] != "function") return void X(ee);
                      }
                      (function() {
                        for (var Re = function(St) {
                          return function() {
                            var pt = /* @__PURE__ */ new Error("Method " + St + " is not implemented by the current driver"), Qe = r.reject(pt);
                            return e(Qe, arguments[arguments.length - 1]), Qe;
                          };
                        }, Fe = 0, at = He.length; Fe < at; Fe++) {
                          var Be = He[Fe];
                          Y[Be] || (Y[Be] = Re(Be));
                        }
                      })();
                      var me = function(Re) {
                        Ke[Z], Ke[Z] = Y, ot[Z] = Re, x();
                      };
                      "_support" in Y ? Y._support && typeof Y._support == "function" ? Y._support().then(me, X) : me(!!Y._support) : me(!0);
                    } catch (Re) {
                      X(Re);
                    }
                  });
                  return l(k, U, H), k;
                }, L.prototype.driver = function() {
                  return this._driver || null;
                }, L.prototype.getDriver = function(Y, U, H) {
                  var k = Ke[Y] ? r.resolve(Ke[Y]) : r.reject(/* @__PURE__ */ new Error("Driver not found."));
                  return l(k, U, H), k;
                }, L.prototype.getSerializer = function(Y) {
                  var U = r.resolve(ne);
                  return l(U, Y), U;
                }, L.prototype.ready = function(Y) {
                  var U = this, H = U._driverSet.then(function() {
                    return U._ready === null && (U._ready = U._initDriver()), U._ready;
                  });
                  return l(H, Y, Y), H;
                }, L.prototype.setDriver = function(Y, U, H) {
                  var k = this;
                  Xe(Y) || (Y = [Y]);
                  var x = this._getSupportedDrivers(Y);
                  function X() {
                    k._config.driver = k.driver();
                  }
                  function Z(te) {
                    return k._extend(te), X(), k._ready = k._initStorage(k._config), k._ready;
                  }
                  var ee = this._driverSet !== null ? this._driverSet.catch(function() {
                    return r.resolve();
                  }) : r.resolve();
                  return this._driverSet = ee.then(function() {
                    var te = x[0];
                    return k._dbInfo = null, k._ready = null, k.getDriver(te).then(function(re) {
                      var oe;
                      k._driver = re._driver, X(), k._wrapLibraryMethodsWithReady(), k._initDriver = (oe = x, function() {
                        var Ce = 0;
                        function me() {
                          for (; Ce < oe.length; ) {
                            var Re = oe[Ce];
                            return Ce++, k._dbInfo = null, k._ready = null, k.getDriver(Re).then(Z).catch(me);
                          }
                          X();
                          var Fe = /* @__PURE__ */ new Error("No available storage method found.");
                          return k._driverSet = r.reject(Fe), k._driverSet;
                        }
                        return me();
                      });
                    });
                  }).catch(function() {
                    X();
                    var te = /* @__PURE__ */ new Error("No available storage method found.");
                    return k._driverSet = r.reject(te), k._driverSet;
                  }), l(this._driverSet, U, H), this._driverSet;
                }, L.prototype.supports = function(Y) {
                  return !!ot[Y];
                }, L.prototype._extend = function(Y) {
                  it(this, Y);
                }, L.prototype._getSupportedDrivers = function(Y) {
                  for (var U = [], H = 0, k = Y.length; H < k; H++) {
                    var x = Y[H];
                    this.supports(x) && U.push(x);
                  }
                  return U;
                }, L.prototype._wrapLibraryMethodsWithReady = function() {
                  for (var Y = 0, U = rt.length; Y < U; Y++) Et(this, rt[Y]);
                }, L.prototype.createInstance = function(Y) {
                  return new L(Y);
                }, L;
              })())();
            }, { 3: 3 }]
          }, {}, [4])(4);
        }).call(this, g(74));
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.FETCH_ERROR = a.TYPINGNOTIFICATION_CONSTANTS = a.LOGIN_ERROR = a.MEDIA_UPLOAD_ERRORS = a.MESSAGE_ERRORS = a.MESSAGES_REQUEST_ERRORS = a.USERS_REQUEST_ERRORS = a.GROUP_CREATION_ERRORS = a.INIT_ERROR = a.ERRORS = a.SERVER_ERRORS = void 0, a.SERVER_ERRORS = { AUTH_ERR: {
          code: "AUTH_ERR_AUTH_TOKEN_NOT_FOUND",
          message: "The auth token %s% does not exist. Please make sure you are logged in and have a valid auth token or try login again."
        } }, a.ERRORS = {
          PARAMETER_MISSING: {
            code: "MISSING_PARAMETERS",
            name: "Invalid or no parameter passed to the method."
          },
          INVALID_REASON_ID: {
            code: "INVALID_REASON_ID",
            name: "Invalid reasonId provided."
          }
        }, a.INIT_ERROR = { NO_APP_ID: {
          code: a.ERRORS.PARAMETER_MISSING.code,
          name: a.ERRORS.PARAMETER_MISSING.name,
          message: "AppID cannot be empty. Please specify a valid appID.",
          details: {}
        } }, a.GROUP_CREATION_ERRORS = { EMPTY_PASSWORD: {
          code: "ERR_EMPTY_GROUP_PASS",
          details: void 0,
          message: "Password is mandatory to join a group.",
          name: void 0
        } }, a.USERS_REQUEST_ERRORS = { EMPTY_USERS_LIST: {
          code: "EMPTY_USERS_LIST",
          name: "EMPTY_USERS_LIST",
          message: "The users list needs to have atleast one UID.",
          details: {}
        } }, a.MESSAGES_REQUEST_ERRORS = {
          REQUEST_IN_PROGRESS_ERROR: {
            code: "REQUEST_IN_PROGRESS",
            name: "REQUEST_IN_PROGRESS",
            message: "Request in progress.",
            details: {}
          },
          NOT_ENOUGH_PARAMS: {
            code: "NOT_ENOUGH_PARAMETERS",
            name: "NOT_ENOUGH_PARAMETERS",
            message: "`Timestamp`, `MessageId` or `updatedAfter` is required to use the 'fetchNext()' method.",
            details: {}
          }
        }, a.MESSAGE_ERRORS = { INVALID_CUSTOM_DATA: {
          code: "-1",
          name: "%s_CUSTOM_DATA",
          message: "",
          details: {}
        } }, a.MEDIA_UPLOAD_ERRORS = {
          FILE_COUNT_EXCEEDED: {
            code: "ERR_FILE_COUNT_EXCEEDED",
            name: "ERR_FILE_COUNT_EXCEEDED",
            message: "The number of attachments exceeds the allowed limit of %s.",
            details: {}
          },
          FILE_SIZE_EXCEEDED: {
            code: "ERR_FILE_SIZE_EXCEEDED",
            name: "ERR_FILE_SIZE_EXCEEDED",
            message: "The file %s exceeds the maximum allowed size of %s bytes.",
            details: {}
          },
          INVALID_FILE_OBJECT: {
            code: "ERR_INVALID_FILE_OBJECT",
            name: "ERR_INVALID_FILE_OBJECT",
            message: "The provided file is invalid or its size cannot be determined.",
            details: {}
          },
          S3_UPLOAD_FAILED: {
            code: "ERR_S3_UPLOAD_FAILED",
            name: "ERR_S3_UPLOAD_FAILED",
            message: "Failed to upload the file to storage. %s",
            details: {}
          },
          PRESIGNED_URL_EXPIRED: {
            code: "ERR_PRESIGNED_URL_EXPIRED",
            name: "ERR_PRESIGNED_URL_EXPIRED",
            message: "The pre-signed upload URL has expired. Please retry the upload.",
            details: {}
          },
          UPLOAD_STALLED: {
            code: "ERR_UPLOAD_STALLED",
            name: "ERR_UPLOAD_STALLED",
            message: "The upload stalled with no progress and was aborted.",
            details: {}
          }
        }, a.LOGIN_ERROR = {
          NOT_INITIALIZED: {
            code: "-1",
            name: "COMETCHAT_INITIALIZATION_NOT_DONE",
            message: "please initialize the cometchat before using login method.",
            details: {}
          },
          UNAUTHORISED: {
            code: 401,
            name: "USER_NOT_AUTHORISED",
            message: "The `authToken` of the user is not authorised. Please verify again.",
            details: {}
          },
          WS_CONNECTION_FAIL: {
            code: -1,
            name: "WS_CONNECTION_FAIL",
            message: "WS Connection failed. %s",
            details: {}
          },
          WS_CONNECTION_FAIL_PORT_ERROR: {
            code: -1,
            name: "WS_CONNECTION_FAIL",
            message: "WS Connection failed. Trying to connect with port: %s",
            details: {}
          },
          WS_CONNECTION_FALLBACK_FAIL_PORT_ERROR: {
            code: -1,
            name: "WS_CONNECTION_FALLBACK_FAIL",
            message: "WS Connection fallback failed. Trying to connect with port: %s",
            details: {}
          },
          WS_AUTH_FAIL: {
            code: -1,
            name: "WS_AUTH_FAIL",
            message: "WS username/password not correct.",
            details: {}
          },
          NO_INTERNET: {
            code: -1,
            name: "NO_INTERNET_CONNECTION",
            message: "You do not have internet connection.",
            details: {}
          },
          REQUEST_IN_PROGRESS: {
            code: -1,
            name: "LOGIN_IN_PROGRESS",
            message: "Please wait until the previous login request ends.",
            details: {}
          }
        }, a.TYPINGNOTIFICATION_CONSTANTS = { TOO_MANY_REQUEST: {
          code: "TOO_MANY_REQUEST",
          name: "TOO MANY REQUEST",
          message: "too many request, wait for `%s` seconds before sending next request.",
          details: {}
        } }, a.FETCH_ERROR = { ERROR_IN_API_CALL: {
          code: "FAILED_TO_FETCH",
          name: "FAILED_TO_FETCH",
          message: "There is an unknown issue with the API request. Please check your internet connection and verify the api call.",
          details: {}
        } };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.PIN_SAVE_ERROR = a.PIN_SAVE_ERROR_CODES = a.PIN_SAVE_LIMITS = a.PIN_SAVE_FEATURES = a.PIN_SAVE_ACTION = a.PIN_SAVE_SENTINELS = a.PIN_SAVE_EVENT = a.PINNED_BY = a.PIN_SAVE_DEFAULTS = a.PIN_SAVE_ENDPOINTS = void 0, a.PIN_SAVE_ENDPOINTS = {
          PIN_MESSAGE: "pinMessage",
          UNPIN_MESSAGE: "unpinMessage",
          SAVE_MESSAGE: "saveMessage",
          UNSAVE_MESSAGE: "unsaveMessage",
          USER_MESSAGES: "getUserMessages",
          GROUP_MESSAGES: "getGroupMessages",
          MESSAGES: "getMessages",
          PIN_USER_CONVERSATION: "pinUserConversation",
          UNPIN_USER_CONVERSATION: "unpinUserConversation",
          PIN_GROUP_CONVERSATION: "pinGroupConversation",
          UNPIN_GROUP_CONVERSATION: "unpinGroupConversation"
        }, a.PIN_SAVE_DEFAULTS = {
          LIMIT: 30,
          MIN_LIMIT: 1,
          MAX_LIMIT: 100
        }, a.PINNED_BY = {
          SYSTEM: "system",
          ME: "me"
        }, a.PIN_SAVE_EVENT = { TYPE: "message_pin_save" }, a.PIN_SAVE_SENTINELS = { SYSTEM_PINNER: "app_system" }, a.PIN_SAVE_ACTION = {
          PINNED: "pinned",
          UNPINNED: "unpinned",
          SAVED: "saved",
          UNSAVED: "unsaved",
          CONVERSATION_PINNED: "conversationPinned",
          CONVERSATION_UNPINNED: "conversationUnpinned"
        }, a.PIN_SAVE_FEATURES = {
          PIN_MESSAGE: "features.ux.messages.pinned.enabled",
          SAVE_MESSAGE: "features.ux.messages.saved.enabled",
          PIN_CONVERSATION: "features.ux.conversations.pinned.enabled"
        }, a.PIN_SAVE_LIMITS = {
          PINNED_MESSAGES: "features.ux.messages.pinned.limit",
          PINNED_MESSAGES_SYSTEM: "features.ux.messages.pinned.system.limit",
          SAVED_MESSAGES: "features.ux.messages.saved.limit",
          PINNED_CONVERSATIONS: "features.ux.conversations.pinned.limit",
          PINNED_CONVERSATIONS_SYSTEM: "features.ux.conversations.pinned.system.limit"
        }, a.PIN_SAVE_ERROR_CODES = { ACTION_NOT_ALLOWED: "ERR_ACTION_NOT_ALLOWED" }, a.PIN_SAVE_ERROR = {
          REQUEST_IN_PROGRESS: {
            code: "REQUEST_IN_PROGRESS",
            name: "REQUEST_IN_PROGRESS",
            message: "Request in progress.",
            details: {}
          },
          LIMIT_NOT_A_NUMBER: {
            code: "INVALID_SET_LIMIT",
            name: "INVALID_SET_LIMIT",
            message: "setLimit() method accepts parameter as a number.",
            details: {}
          },
          LIMIT_OUT_OF_RANGE: {
            code: "INVALID_SET_LIMIT",
            name: "INVALID_SET_LIMIT",
            message: "setLimit() accepts a value between 1 and 100.",
            details: {}
          },
          UID_GUID_MUTUALLY_EXCLUSIVE: {
            code: "INVALID_PINNED_MESSAGES_REQUEST",
            name: "INVALID_PINNED_MESSAGES_REQUEST",
            message: "setUID() and setGUID() are mutually exclusive; set only one.",
            details: {}
          },
          UID_OR_GUID_REQUIRED: {
            code: "INVALID_PINNED_MESSAGES_REQUEST",
            name: "INVALID_PINNED_MESSAGES_REQUEST",
            message: "A pinned messages request is conversation-scoped; call setUID() or setGUID().",
            details: {}
          },
          INVALID_MESSAGE_ID: {
            code: "INVALID_MESSAGE_ID",
            name: "INVALID_MESSAGE_ID",
            message: "A valid messageId is required.",
            details: {}
          },
          UNPARSEABLE_RESPONSE: {
            code: "UNPARSEABLE_RESPONSE",
            name: "UNPARSEABLE_RESPONSE",
            message: "The server response could not be parsed.",
            details: {}
          }
        };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.PinSaveParser = a.PIN_SAVE_CONTRACT = void 0;
        var p = g(1), i = g(11), S = g(23), E = g(14);
        a.PIN_SAVE_CONTRACT = {
          ABSENT_PIN_MEANS_NOT_PINNED: !0,
          ABSENT_SAVED_MEANS_NOT_SAVED: !0,
          SYSTEM_PINNER_SENTINEL: E.PIN_SAVE_SENTINELS.SYSTEM_PINNER,
          SINGLE_PINNER: !0,
          SOCKET_FRAME_CARRIES_PIN_ATTRS: !0,
          CLEAR_ON_UNSET: !0
        };
        var n = "pinnedAt", o = "pinnedBy", s = "savedAt", r = "data", e = "body", l = "action", u = "type", C = "message", c = "pinned", d = "saved", t = "pinnedBy", h = 1, I = "conversationId", T = "conversationType", f = "conversationWith", P = "lastMessage", m = "unreadMessageCount", D = "unreadMentionsCount", V = "lastReadMessageId", M = "latestMessageId", z = "tags", le = "conversation", de = {
          TYPES: [
            "message_pin",
            "message_save",
            "message_pinned",
            "message_unpinned",
            "message_saved",
            "message_unsaved",
            "pin",
            "save"
          ],
          ACTIONS: {
            PINNED: [
              "message_pinned",
              "pinned",
              "pin"
            ],
            UNPINNED: [
              "message_unpinned",
              "unpinned",
              "unpin"
            ],
            SAVED: [
              "message_saved",
              "saved",
              "save"
            ],
            UNSAVED: [
              "message_unsaved",
              "unsaved",
              "unsave"
            ]
          },
          CONVERSATION_TYPES: [
            "conversation_pin",
            "conversation_pinned",
            "conversation_unpinned"
          ],
          CONVERSATION_ACTIONS: {
            PINNED: [
              "conversation_pinned",
              "pinned",
              "pin"
            ],
            UNPINNED: [
              "conversation_unpinned",
              "unpinned",
              "unpin"
            ]
          }
        };
        a.PinSaveParser = (function() {
          function W() {
          }
          return W.isObject = function(q) {
            return q !== null && typeof q == "object";
          }, W.pick = function(q, se) {
            if (W.isObject(q)) {
              if (q[se] !== void 0 && q[se] !== null) return q[se];
              var Ae = q[r];
              return W.isObject(Ae) && Ae[se] !== void 0 && Ae[se] !== null ? Ae[se] : void 0;
            }
          }, W.toTimestamp = function(q) {
            if (typeof q == "number" && !isNaN(q) && 0 < q) return Math.floor(q);
            if (typeof q == "string" && q.trim() !== "") {
              var se = parseInt(q, 10);
              if (!isNaN(se) && 0 < se) return se;
            }
            return null;
          }, W.toCount = function(q) {
            if (typeof q == "number" && !isNaN(q) && 0 <= q) return Math.floor(q);
            if (typeof q == "string" && q.trim() !== "") {
              var se = parseInt(q, 10);
              if (!isNaN(se) && 0 <= se) return se;
            }
            return 0;
          }, W.toUid = function(q) {
            return typeof q == "string" && q.trim() !== "" ? q : typeof q != "number" || isNaN(q) ? null : String(q);
          }, W.applyPinSaveAttributes = function(q) {
            try {
              if (!W.isObject(q)) return;
              var se = W.toTimestamp(W.pick(q, n)), Ae = W.toTimestamp(W.pick(q, s)), Pe = se === null ? null : W.toUid(W.pick(q, o));
              se === null ? delete q[n] : q[n] = se, Pe === null ? delete q[o] : q[o] = Pe, Ae === null ? delete q[s] : q[s] = Ae;
            } catch (Ee) {
              p.Logger.error("PinSaveParser: applyPinSaveAttributes", Ee);
            }
          }, W.isSystemPinner = function(q) {
            return q === a.PIN_SAVE_CONTRACT.SYSTEM_PINNER_SENTINEL;
          }, W.applyConversationPinAttributes = function(q, se) {
            try {
              if (!q || typeof q.setPinnedAt != "function") return;
              var Ae = W.toTimestamp(W.pick(se, n)), Pe = Ae === null ? null : W.toUid(W.pick(se, o));
              q.setPinnedAt(Ae === null ? void 0 : Ae), q.setPinnedBy(Pe === null ? void 0 : Pe);
            } catch (Ee) {
              p.Logger.error("PinSaveParser: applyConversationPinAttributes", Ee);
            }
          }, W.pinnedListQuery = function() {
            var q = {};
            return q[c] = h, q;
          }, W.savedListQuery = function() {
            var q = {};
            return q[d] = h, q;
          }, W.conversationPinnedByQuery = function(q) {
            if (!Array.isArray(q) || q.length === 0) return {};
            var se = {};
            return se[t] = q.join(","), se;
          }, W.resolveWsEventAction = function(q) {
            try {
              if (!W.isObject(q)) return null;
              var se = q[u];
              if (typeof se != "string") return null;
              var Ae = de.TYPES.indexOf(se) !== -1, Pe = de.CONVERSATION_TYPES.indexOf(se) !== -1;
              if (!Ae && !Pe) return null;
              var Ee = q[e], fe = W.isObject(Ee) ? Ee[l] : void 0;
              return typeof fe == "string" && fe !== "" || (fe = q[l]), typeof fe == "string" && fe !== "" || (fe = se), Pe ? de.CONVERSATION_ACTIONS.PINNED.indexOf(fe) !== -1 ? E.PIN_SAVE_ACTION.CONVERSATION_PINNED : de.CONVERSATION_ACTIONS.UNPINNED.indexOf(fe) !== -1 ? E.PIN_SAVE_ACTION.CONVERSATION_UNPINNED : null : de.ACTIONS.PINNED.indexOf(fe) !== -1 ? E.PIN_SAVE_ACTION.PINNED : de.ACTIONS.UNPINNED.indexOf(fe) !== -1 ? E.PIN_SAVE_ACTION.UNPINNED : de.ACTIONS.SAVED.indexOf(fe) !== -1 ? E.PIN_SAVE_ACTION.SAVED : de.ACTIONS.UNSAVED.indexOf(fe) !== -1 ? E.PIN_SAVE_ACTION.UNSAVED : null;
            } catch (Te) {
              return p.Logger.error("PinSaveParser: resolveWsEventAction", Te), null;
            }
          }, W.isConversationAction = function(q) {
            return q === E.PIN_SAVE_ACTION.CONVERSATION_PINNED || q === E.PIN_SAVE_ACTION.CONVERSATION_UNPINNED;
          }, W.parseConversation = function(q) {
            try {
              return W.isObject(q) && S.ConversationController.trasformJSONConversation(q[I], q[T], q[P], q[f], W.toCount(q[m]), q[z] ? q[z] : [], q[D], q[V], q[M], q) || null;
            } catch (se) {
              return p.Logger.error("PinSaveParser: parseConversation", se), null;
            }
          }, W.parseWsEventConversation = function(q) {
            try {
              if (!W.isObject(q)) return null;
              var se = q[e];
              if (!W.isObject(se)) return null;
              var Ae = se[le];
              return W.parseConversation(W.isObject(Ae) ? Ae : se);
            } catch (Pe) {
              return p.Logger.error("PinSaveParser: parseWsEventConversation", Pe), null;
            }
          }, W.parseWsEventMessage = function(q) {
            try {
              if (!W.isObject(q)) return null;
              var se = q[e];
              if (!W.isObject(se)) return null;
              var Ae = se[C], Pe = W.isObject(Ae) ? Ae : se;
              return i.MessageController.trasformJSONMessge(Pe) || null;
            } catch (Ee) {
              return p.Logger.error("PinSaveParser: parseWsEventMessage", Ee), null;
            }
          }, W;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(s, r, e, l) {
          return new (e || (e = Promise))(function(u, C) {
            function c(h) {
              try {
                t(l.next(h));
              } catch (I) {
                C(I);
              }
            }
            function d(h) {
              try {
                t(l.throw(h));
              } catch (I) {
                C(I);
              }
            }
            function t(h) {
              var I;
              h.done ? u(h.value) : (I = h.value, I instanceof e ? I : new e(function(T) {
                T(I);
              })).then(c, d);
            }
            t((l = l.apply(s, r || [])).next());
          });
        }, i = this && this.__generator || function(s, r) {
          var e, l, u, C, c = {
            label: 0,
            sent: function() {
              if (1 & u[0]) throw u[1];
              return u[1];
            },
            trys: [],
            ops: []
          };
          return C = {
            next: d(0),
            throw: d(1),
            return: d(2)
          }, typeof Symbol == "function" && (C[Symbol.iterator] = function() {
            return this;
          }), C;
          function d(t) {
            return function(h) {
              return (function(I) {
                if (e) throw new TypeError("Generator is already executing.");
                for (; c; ) try {
                  if (e = 1, l && (u = 2 & I[0] ? l.return : I[0] ? l.throw || ((u = l.return) && u.call(l), 0) : l.next) && !(u = u.call(l, I[1])).done) return u;
                  switch (l = 0, u && (I = [2 & I[0], u.value]), I[0]) {
                    case 0:
                    case 1:
                      u = I;
                      break;
                    case 4:
                      return c.label++, {
                        value: I[1],
                        done: !1
                      };
                    case 5:
                      c.label++, l = I[1], I = [0];
                      continue;
                    case 7:
                      I = c.ops.pop(), c.trys.pop();
                      continue;
                    default:
                      if (!(u = 0 < (u = c.trys).length && u[u.length - 1]) && (I[0] === 6 || I[0] === 2)) {
                        c = 0;
                        continue;
                      }
                      if (I[0] === 3 && (!u || I[1] > u[0] && I[1] < u[3])) {
                        c.label = I[1];
                        break;
                      }
                      if (I[0] === 6 && c.label < u[1]) {
                        c.label = u[1], u = I;
                        break;
                      }
                      if (u && c.label < u[2]) {
                        c.label = u[2], c.ops.push(I);
                        break;
                      }
                      u[2] && c.ops.pop(), c.trys.pop();
                      continue;
                  }
                  I = r.call(s, c);
                } catch (T) {
                  I = [6, T], l = 0;
                } finally {
                  e = u = 0;
                }
                if (5 & I[0]) throw I[1];
                return {
                  value: I[0] ? I[1] : void 0,
                  done: !0
                };
              })([t, h]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.StorageManager = void 0;
        var S = g(12), E = g(1), n = g(0), o = g(49);
        a.StorageManager = (function() {
          function s() {
            this.isInitialized = !1, this.storageInstances = /* @__PURE__ */ new Map(), this.storageMode = n.StorageMode.LOCAL, this.drivers = [];
          }
          return s.getInstance = function() {
            return s.instance || (s.instance = new s()), s.instance;
          }, s.prototype.initialize = function(r) {
            return r === void 0 && (r = n.StorageMode.LOCAL), p(this, void 0, void 0, function() {
              var e;
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    if (this.isInitialized) return [2];
                    l.label = 1;
                  case 1:
                    return l.trys.push([
                      1,
                      3,
                      ,
                      4
                    ]), this.storageMode = r, [4, o.getDriverForMode(r)];
                  case 2:
                    return e = l.sent(), this.drivers = r === "session" ? [
                      e,
                      S.LOCALSTORAGE,
                      S.INDEXEDDB,
                      S.WEBSQL
                    ] : [
                      S.LOCALSTORAGE,
                      S.INDEXEDDB,
                      S.WEBSQL
                    ], this.isInitialized = !0, [3, 4];
                  case 3:
                    return l.sent(), this.drivers = [
                      S.LOCALSTORAGE,
                      S.INDEXEDDB,
                      S.WEBSQL
                    ], this.isInitialized = !0, [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }, s.prototype.getStorage = function(r, e) {
            if (!this.isInitialized) throw new Error("StorageManager must be initialized before getting storage instances");
            var l = r + "_" + e;
            if (!this.storageInstances.has(l)) {
              var u = S.createInstance({ name: E.format(n.LOCAL_STORE.STORE_STRING, r, e) });
              u.setDriver(this.drivers), this.storageInstances.set(l, u);
            }
            return this.storageInstances.get(l);
          }, s.prototype.isStorageInitialized = function() {
            return this.isInitialized;
          }, s.prototype.clearStorageInstances = function() {
            this.storageInstances.clear();
          }, s.prototype.getStorageMode = function() {
            return this.storageMode;
          }, s;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UsersController = void 0;
        var p = g(3), i = g(1);
        a.UsersController = (function() {
          function S() {
          }
          return S.trasformJSONUser = function(E) {
            var n;
            try {
              E.uid = E.uid.toString(), E.name = E.name.toString(), E.status && E.status !== "offline" ? E.status = "online" : E.status = "offline", n = new p.User(E), Object.assign(n, E), E = n;
            } catch (o) {
              i.Logger.error("UsersController:transformJSONUser", o);
            }
            return E;
          }, S;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i, S, E, n, o, s, r;
        Object.defineProperty(a, "__esModule", { value: !0 }), a.DEFAULT_PROVIDER_ID = a.APIResponseConstants = a.APIConstants = a.PushPlatforms = a.MutedConversationType = a.DayOfWeek = a.DNDOptions = a.MemberActionsOptions = a.ReactionsOptions = a.QuotedRepliesOptions = a.RepliesOptions = a.MessagesOptions = void 0, (p = a.MessagesOptions || (a.MessagesOptions = {}))[p.DONT_SUBSCRIBE = 1] = "DONT_SUBSCRIBE", p[p.SUBSCRIBE_TO_ALL = 2] = "SUBSCRIBE_TO_ALL", p[p.SUBSCRIBE_TO_MENTIONS = 3] = "SUBSCRIBE_TO_MENTIONS", (i = a.RepliesOptions || (a.RepliesOptions = {}))[i.DONT_SUBSCRIBE = 1] = "DONT_SUBSCRIBE", i[i.SUBSCRIBE_TO_ALL = 2] = "SUBSCRIBE_TO_ALL", i[i.SUBSCRIBE_TO_MENTIONS = 3] = "SUBSCRIBE_TO_MENTIONS", i[i.SUBSCRIBE_TO_SUBSCRIBED_THREADS = 4] = "SUBSCRIBE_TO_SUBSCRIBED_THREADS", (S = a.QuotedRepliesOptions || (a.QuotedRepliesOptions = {}))[S.DONT_SUBSCRIBE = 1] = "DONT_SUBSCRIBE", S[S.SUBSCRIBE_TO_ALL = 2] = "SUBSCRIBE_TO_ALL", S[S.SUBSCRIBE_TO_MENTIONS = 3] = "SUBSCRIBE_TO_MENTIONS", S[S.SUBSCRIBE_TO_QUOTES_ON_OWN_MESSAGES = 4] = "SUBSCRIBE_TO_QUOTES_ON_OWN_MESSAGES", (E = a.ReactionsOptions || (a.ReactionsOptions = {}))[E.DONT_SUBSCRIBE = 1] = "DONT_SUBSCRIBE", E[E.SUBSCRIBE_TO_REACTIONS_ON_OWN_MESSAGES = 2] = "SUBSCRIBE_TO_REACTIONS_ON_OWN_MESSAGES", E[E.SUBSCRIBE_TO_REACTIONS_ON_ALL_MESSAGES = 3] = "SUBSCRIBE_TO_REACTIONS_ON_ALL_MESSAGES", (n = a.MemberActionsOptions || (a.MemberActionsOptions = {}))[n.DONT_SUBSCRIBE = 1] = "DONT_SUBSCRIBE", n[n.SUBSCRIBE = 2] = "SUBSCRIBE", (o = a.DNDOptions || (a.DNDOptions = {}))[o.DISABLED = 1] = "DISABLED", o[o.ENABLED = 2] = "ENABLED", (s = a.DayOfWeek || (a.DayOfWeek = {})).MONDAY = "monday", s.TUESDAY = "tuesday", s.WEDNESDAY = "wednesday", s.THURSDAY = "thursday", s.FRIDAY = "friday", s.SATURDAY = "saturday", s.SUNDAY = "sunday", (r = a.MutedConversationType || (a.MutedConversationType = {})).ONE_ON_ONE = "oneOnOne", r.GROUP = "group", (a.PushPlatforms || (a.PushPlatforms = {})).FCM_WEB = "fcm_web", a.APIConstants = {
          KEY_GROUP_PREFERENCES: "groupPreferences",
          KEY_GROUP_MESSAGES: "groupMessages",
          KEY_GROUP_REACTIONS: "groupReactions",
          KEY_GROUP_REPLIES: "groupReplies",
          KEY_GROUP_QUOTED_REPLIES: "groupQuotedReplies",
          KEY_GROUP_MEMBER_ADDED: "groupMemberAdded",
          KEY_GROUP_MEMBER_LEFT: "groupMemberLeft",
          KEY_GROUP_MEMBER_JOINED: "groupMemberJoined",
          KEY_GROUP_MEMBER_KICKED: "groupMemberKicked",
          KEY_GROUP_MEMBER_BANNED: "groupMemberBanned",
          KEY_GROUP_MEMBER_UNBANNED: "groupMemberUnbanned",
          KEY_GROUP_MEMBER_SCOPE_CHANGED: "groupMemberScopeChanged",
          KEY_MUTE_PREFERENCES: "mutePreferences",
          KEY_MUTE_DND: "dnd",
          KEY_MUTE_SCHEDULE: "schedule",
          KEY_ONE_ON_ONE_PREFERENCES: "oneOnOnePreferences",
          KEY_ONE_ON_ONE_MESSAGES: "oneOnOneMessages",
          KEY_ONE_ON_ONE_REACTIONS: "oneOnOneReactions",
          KEY_ONE_ON_ONE_REPLIES: "oneOnOneReplies",
          KEY_ONE_ON_ONE_QUOTED_REPLIES: "oneOnOneQuotedReplies",
          KEY_USE_PRIVACY_TEMPLATE: "usePrivacyTemplate",
          KEY_PROVIDER_ID: "providerId",
          KEY_TIMEZONE: "timezone",
          KEY_PLATFORM: "platform",
          KEY_FCM_TOKEN: "fcmToken",
          KEY_CONVERSATIONS: "conversations",
          KEY_GET_PREFERENCES: "getPushPreferences",
          KEY_UPDATE_PREFERENCES: "updatePushPreferences",
          KEY_RESET_PREFERENCES: "resetPushPreferences",
          KEY_REGISTER_TOKEN: "registerToken",
          KEY_UNREGISTER_TOKEN: "unregisterToken",
          KEY_MUTE_CONVERSATIONS: "muteConversations",
          KEY_UNMUTE_CONVERSATIONS: "unmuteConversations",
          KEY_GET_MUTED_CONVERSATIONS: "getMutedConversations",
          KEY_MUTED_CONVERSATIONS: "mutedConversations",
          KEY_FROM: "from",
          KEY_TO: "to",
          KEY_GET_TIMEZONE: "getTimezone",
          KEY_UPDATE_TIMEZONE: "updateTimezone"
        }, a.APIResponseConstants = {
          TOKEN_REGISTER_SUCCESS: "Push token registered successfully.",
          TOKEN_REGISTER_ERROR: "Failed to register push token.",
          TOKEN_UNREGISTER_SUCCESS: "Push token unregistered successfully.",
          TOKEN_UNREGISTER_ERROR: "Failed to unregister push token.",
          MUTE_CONVERSATION_SUCCESS: "Conversations muted successfully.",
          MUTE_CONVERSATION_ERROR: "Failed to mute conversations.",
          UNMUTE_CONVERSATION_SUCCESS: "Conversations unmuted successfully.",
          UNMUTE_CONVERSATION_ERROR: "Failed to unmute conversations.",
          TIMEZONE_UPDATE_SUCCESS: "Timezone updated successfully.",
          TIMEZONE_UPDATE_ERROR: "Failed to update Timezone.",
          TIMEZONE_FETCH_ERROR: "Failed to fetch Timezone."
        }, a.DEFAULT_PROVIDER_ID = "default";
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(e, l, u, C) {
          return new (u || (u = Promise))(function(c, d) {
            function t(T) {
              try {
                I(C.next(T));
              } catch (f) {
                d(f);
              }
            }
            function h(T) {
              try {
                I(C.throw(T));
              } catch (f) {
                d(f);
              }
            }
            function I(T) {
              var f;
              T.done ? c(T.value) : (f = T.value, f instanceof u ? f : new u(function(P) {
                P(f);
              })).then(t, h);
            }
            I((C = C.apply(e, l || [])).next());
          });
        }, i = this && this.__generator || function(e, l) {
          var u, C, c, d, t = {
            label: 0,
            sent: function() {
              if (1 & c[0]) throw c[1];
              return c[1];
            },
            trys: [],
            ops: []
          };
          return d = {
            next: h(0),
            throw: h(1),
            return: h(2)
          }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function h(I) {
            return function(T) {
              return (function(f) {
                if (u) throw new TypeError("Generator is already executing.");
                for (; t; ) try {
                  if (u = 1, C && (c = 2 & f[0] ? C.return : f[0] ? C.throw || ((c = C.return) && c.call(C), 0) : C.next) && !(c = c.call(C, f[1])).done) return c;
                  switch (C = 0, c && (f = [2 & f[0], c.value]), f[0]) {
                    case 0:
                    case 1:
                      c = f;
                      break;
                    case 4:
                      return t.label++, {
                        value: f[1],
                        done: !1
                      };
                    case 5:
                      t.label++, C = f[1], f = [0];
                      continue;
                    case 7:
                      f = t.ops.pop(), t.trys.pop();
                      continue;
                    default:
                      if (!(c = 0 < (c = t.trys).length && c[c.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                        t = 0;
                        continue;
                      }
                      if (f[0] === 3 && (!c || f[1] > c[0] && f[1] < c[3])) {
                        t.label = f[1];
                        break;
                      }
                      if (f[0] === 6 && t.label < c[1]) {
                        t.label = c[1], c = f;
                        break;
                      }
                      if (c && t.label < c[2]) {
                        t.label = c[2], t.ops.push(f);
                        break;
                      }
                      c[2] && t.ops.pop(), t.trys.pop();
                      continue;
                  }
                  f = l.call(e, t);
                } catch (P) {
                  f = [6, P], C = 0;
                } finally {
                  u = c = 0;
                }
                if (5 & f[0]) throw f[1];
                return {
                  value: f[0] ? f[1] : void 0,
                  done: !0
                };
              })([I, T]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.LocalStorage = void 0;
        var S = g(1), E = g(0), n = g(12), o = g(6), s = g(2), r = g(16);
        a.LocalStorage = (function() {
          function e(l) {
            this.store = E.constants.DEFAULT_STORE, this.initializationPromise = null, this.isInitialized = !1, S.isFalsy(l) || (this.store = l);
          }
          return e.prototype.initializeStorage = function() {
            return p(this, void 0, void 0, function() {
              var l;
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    if (this.initializationPromise) return [2, this.initializationPromise];
                    if (this.isInitialized && this.localStore) return [2, Promise.resolve()];
                    this.initializationPromise = this.doInitializeStorage(), u.label = 1;
                  case 1:
                    return u.trys.push([
                      1,
                      3,
                      ,
                      4
                    ]), [4, this.initializationPromise];
                  case 2:
                    return u.sent(), this.isInitialized = !0, [3, 4];
                  case 3:
                    throw l = u.sent(), this.initializationPromise = null, this.isInitialized = !1, l;
                  case 4:
                    return [2];
                }
              });
            });
          }, e.prototype.doInitializeStorage = function() {
            var l;
            return p(this, void 0, void 0, function() {
              var u, C;
              return i(this, function(c) {
                switch (c.label) {
                  case 0:
                    if (this.localStore && this.isInitialized) return [2];
                    c.label = 1;
                  case 1:
                    return c.trys.push([
                      1,
                      5,
                      ,
                      7
                    ]), (u = r.StorageManager.getInstance()).isStorageInitialized() ? (this.localStore = u.getStorage(o.CometChat.getAppId(), E.LOCAL_STORE.COMMON_STORE), [3, 4]) : [3, 2];
                  case 2:
                    return C = ((l = o.CometChat.appSettings) === null || l === void 0 ? void 0 : l.getStorageMode()) || E.StorageMode.LOCAL, [4, u.initialize(C)];
                  case 3:
                    c.sent(), this.localStore = u.getStorage(o.CometChat.getAppId(), E.LOCAL_STORE.COMMON_STORE), c.label = 4;
                  case 4:
                    return [3, 7];
                  case 5:
                    return c.sent(), this.localStore = n.createInstance({ name: S.format(E.LOCAL_STORE.STORE_STRING, o.CometChat.getAppId(), E.LOCAL_STORE.COMMON_STORE) }), [4, this.localStore.setDriver([
                      n.LOCALSTORAGE,
                      n.INDEXEDDB,
                      n.WEBSQL
                    ])];
                  case 6:
                    return c.sent(), [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }, e.getInstance = function() {
            return e.localStorage ??= new e(), e.localStorage;
          }, e.prototype.set = function(l, u) {
            return p(this, void 0, void 0, function() {
              return i(this, function(C) {
                switch (C.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return C.sent(), [2, this.localStore.setItem(l, JSON.stringify(u))];
                }
              });
            });
          }, e.prototype.remove = function(l) {
            return p(this, void 0, void 0, function() {
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return u.sent(), [2, this.localStore.removeItem(l)];
                }
              });
            });
          }, e.prototype.update = function(l, u) {
            return p(this, void 0, void 0, function() {
              return i(this, function(C) {
                switch (C.label) {
                  case 0:
                    return [4, this.remove(l)];
                  case 1:
                    return C.sent(), [4, this.set(l, u)];
                  case 2:
                    return C.sent(), [2];
                }
              });
            });
          }, e.prototype.get = function(l) {
            return p(this, void 0, void 0, function() {
              var u = this;
              return i(this, function(C) {
                return [2, new Promise(function(c, d) {
                  return p(u, void 0, void 0, function() {
                    var t;
                    return i(this, function(h) {
                      switch (h.label) {
                        case 0:
                          return h.trys.push([
                            0,
                            2,
                            ,
                            3
                          ]), [4, this.initializeStorage()];
                        case 1:
                          return h.sent(), this.localStore.getItem(l).then(function(I) {
                            try {
                              c(JSON.parse(I));
                            } catch {
                              c(I);
                            }
                          }, function(I) {
                            d(I);
                          }), [3, 3];
                        case 2:
                          return t = h.sent(), d(new s.CometChatException(t)), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                })];
              });
            });
          }, e.prototype.clearStore = function() {
            return p(this, void 0, void 0, function() {
              var l = this;
              return i(this, function(u) {
                return [2, new Promise(function(C, c) {
                  return p(l, void 0, void 0, function() {
                    var d, t = this;
                    return i(this, function(h) {
                      switch (h.label) {
                        case 0:
                          return h.trys.push([
                            0,
                            2,
                            ,
                            3
                          ]), [4, this.initializeStorage()];
                        case 1:
                          return h.sent(), this.localStore.keys().then(function(I) {
                            if (0 < I.length) for (var T = 0; T < I.length; T++) I[T] !== "appId" && t.localStore.removeItem(I[T]);
                            C(!0);
                          }), [3, 3];
                        case 2:
                          return d = h.sent(), c(d), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                })];
              });
            });
          }, e.prototype.clear = function(l) {
          }, e.prototype.selectStore = function(l) {
            this.store = l;
          }, e.localStorage = null, e;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Attachment = void 0;
        var p = g(0);
        a.Attachment = (function() {
          function i(S) {
            S.hasOwnProperty(p.ATTACHMENTS_CONSTANTS.KEYS.EXTENSION) && (this.extension = S[p.ATTACHMENTS_CONSTANTS.KEYS.EXTENSION]), S.hasOwnProperty(p.ATTACHMENTS_CONSTANTS.KEYS.MIME_TYPE) && (this.mimeType = S[p.ATTACHMENTS_CONSTANTS.KEYS.MIME_TYPE]), S.hasOwnProperty(p.ATTACHMENTS_CONSTANTS.KEYS.NAME) && (this.name = S[p.ATTACHMENTS_CONSTANTS.KEYS.NAME]), S.hasOwnProperty(p.ATTACHMENTS_CONSTANTS.KEYS.SIZE) && (this.size = S[p.ATTACHMENTS_CONSTANTS.KEYS.SIZE]), S.hasOwnProperty(p.ATTACHMENTS_CONSTANTS.KEYS.URL) && (this.url = S[p.ATTACHMENTS_CONSTANTS.KEYS.URL]);
          }
          return i.prototype.createFileFromJSON = function(S) {
            return new i(S);
          }, i.toJSON = function(S) {
            return {
              extension: S.getExtension(),
              mimeType: S.getMimeType(),
              name: S.getName(),
              url: S.getUrl(),
              size: S.getSize()
            };
          }, i.prototype.getExtension = function() {
            return this.extension;
          }, i.prototype.setExtension = function(S) {
            this.extension = S;
          }, i.prototype.getMimeType = function() {
            return this.mimeType;
          }, i.prototype.setMimeType = function(S) {
            this.mimeType = S;
          }, i.prototype.getName = function() {
            return this.name;
          }, i.prototype.setName = function(S) {
            this.name = S;
          }, i.prototype.getSize = function() {
            return this.size;
          }, i.prototype.setSize = function(S) {
            this.size = S;
          }, i.prototype.getUrl = function() {
            return this.url;
          }, i.prototype.setUrl = function(S) {
            this.url = S;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MessageReceipt = void 0, a.MessageReceipt = (function() {
          function p() {
            this.RECEIPT_TYPE = {
              READ_RECEIPT: "read",
              DELIVERY_RECEIPT: "delivery",
              READ_BY_ALL_RECEIPT: "readByAll",
              DELIVERED_TO_ALL_RECEIPT: "deliveredToAll"
            }, this.receiptType = this.RECEIPT_TYPE.DELIVERY_RECEIPT;
          }
          return p.prototype.getReceiverType = function() {
            return this.receiverType;
          }, p.prototype.setReceiverType = function(i) {
            this.receiverType = i;
          }, p.prototype.getSender = function() {
            return this.sender;
          }, p.prototype.setSender = function(i) {
            this.sender = i;
          }, p.prototype.getReceiver = function() {
            return this.receiver;
          }, p.prototype.setReceiver = function(i) {
            this.receiver = i;
          }, p.prototype.getTimestamp = function() {
            return this.timestamp;
          }, p.prototype.setTimestamp = function(i) {
            this.timestamp = i;
          }, p.prototype.setReadAt = function(i) {
            this.readAt = i;
          }, p.prototype.getReadAt = function() {
            return this.readAt;
          }, p.prototype.setDeliveredAt = function(i) {
            this.deliveredAt = i;
          }, p.prototype.getDeliveredAt = function() {
            return this.deliveredAt;
          }, p.prototype.getMessageId = function() {
            return this.messageId;
          }, p.prototype.setMessageId = function(i) {
            this.messageId = i;
          }, p.prototype.getReceiptType = function() {
            return this.receiptType;
          }, p.prototype.setReceiptType = function(i) {
            i === void 0 && (i = this.RECEIPT_TYPE.DELIVERY_RECEIPT), this.receiptType = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ThreadParser = a.THREAD_CONTRACT = void 0;
        var p = g(1), i = g(11), S = g(33);
        a.THREAD_CONTRACT = {
          LIST_IMPLIES_SUBSCRIBED: !0,
          AUTO_SUBSCRIBE_ON_REPLY: !0,
          CURSOR_IS_INCLUSIVE: !0,
          ECHO_SERVER_AFFIX: !1,
          FORCED_AFFIX: "prepend",
          TRUST_META_NEXT_AS_HAS_MORE: !1,
          CURSOR_HAS_ID_TIEBREAKER: !0,
          REQUEST_THREAD_SUBSCRIBED_FLAG: !0
        };
        var E = [
          "parentMessageId",
          "parentId",
          "id"
        ], n = "replyCount", o = "lastReply", s = "updatedAt", r = "conversationId", e = "receiverType", l = [
          "receiver",
          "receiverUid",
          "receiverId"
        ], u = "threadSubscribed", C = "unreadReplyCount", c = "message", d = "data";
        a.ThreadParser = (function() {
          function t() {
          }
          return t.isObject = function(h) {
            return h !== null && typeof h == "object";
          }, t.firstPresent = function(h, I) {
            for (var T = 0; T < I.length; T++) if (t.isObject(h) && h[I[T]] !== void 0 && h[I[T]] !== null) return h[I[T]];
          }, t.toInt = function(h, I) {
            if (typeof h == "number" && !isNaN(h)) return Math.floor(h);
            if (typeof h == "string" && h.trim() !== "") {
              var T = parseInt(h, 10);
              if (!isNaN(T)) return T;
            }
            return I;
          }, t.toNullableInt = function(h) {
            if (h == null) return null;
            if (typeof h == "number" && !isNaN(h)) return Math.floor(h);
            if (typeof h == "string" && h.trim() !== "") {
              var I = parseInt(h, 10);
              if (!isNaN(I)) return I;
            }
            return null;
          }, t.toStr = function(h, I) {
            return typeof h == "string" ? h : typeof h == "number" ? String(h) : I;
          }, t.safeMessage = function(h) {
            try {
              return t.isObject(h) && i.MessageController.trasformJSONMessge(h) || null;
            } catch (I) {
              return p.Logger.error("ThreadParser: safeMessage", I), null;
            }
          }, t.readSubscriptionState = function(h) {
            try {
              if (!t.isObject(h)) return !1;
              var I = h[u];
              return I === !0 || I === "true" || I === 1 || I === "1";
            } catch {
              return !1;
            }
          }, t.applyThreadAttributes = function(h) {
            try {
              if (!t.isObject(h)) return;
              h[u] = t.readSubscriptionState(h);
            } catch (I) {
              p.Logger.error("ThreadParser: applyThreadAttributes", I);
            }
          }, t.withThreadSubscribedParam = function() {
            return a.THREAD_CONTRACT.REQUEST_THREAD_SUBSCRIBED_FLAG ? { withThreadSubscribed: !0 } : {};
          }, t.parseThread = function(h) {
            var I = t.isObject(h) ? h : {};
            return new S.MessageThread({
              parentMessageId: t.toInt(t.firstPresent(I, E), 0),
              parentMessage: t.safeMessage(I),
              replyCount: t.toInt(I[n], 0),
              lastReply: t.safeMessage(I[o]),
              updatedAt: t.toInt(I[s], 0),
              conversationId: t.toStr(I[r], ""),
              receiverType: t.toStr(I[e], ""),
              receiverId: t.toStr(t.firstPresent(I, l), ""),
              subscribed: t.readSubscriptionState(I),
              unreadReplyCount: t.toNullableInt(I[C]),
              rawData: I
            });
          }, t.parseThreadList = function(h) {
            try {
              var I = t.isObject(h) ? h[d] : void 0;
              if (!Array.isArray(I)) return [];
              for (var T = [], f = 0; f < I.length; f++) {
                var P = t.parseThread(I[f]);
                a.THREAD_CONTRACT.LIST_IMPLIES_SUBSCRIBED && P.setSubscribed(!0), T.push(P);
              }
              return T;
            } catch (m) {
              return p.Logger.error("ThreadParser: parseThreadList", m), [];
            }
          }, t.parseCursor = function(h) {
            try {
              if (!Array.isArray(h) || h.length === 0) return null;
              for (var I = null, T = 0; T < h.length; T++) {
                var f = h[T].getUpdatedAt(), P = h[T].getParentMessageId();
                typeof f != "number" || isNaN(f) || typeof P != "number" || isNaN(P) || (I === null || f < I.updatedAt || f === I.updatedAt && P < I.id) && (I = {
                  updatedAt: f,
                  id: P
                });
              }
              return I;
            } catch (m) {
              return p.Logger.error("ThreadParser: parseCursor", m), null;
            }
          }, t.parseSubscriptionAck = function(h) {
            try {
              var I = t.isObject(h) ? h[d] : void 0;
              return t.isObject(I) && typeof I[c] == "string" ? I[c] : "";
            } catch (T) {
              return p.Logger.error("ThreadParser: parseSubscriptionAck", T), "";
            }
          }, t;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ConversationController = void 0;
        var p = g(57), i = g(1), S = g(15);
        a.ConversationController = (function() {
          function E() {
          }
          return E.trasformJSONConversation = function(n, o, s, r, e, l, u, C, c, d) {
            var t;
            c === void 0 && (c = "");
            try {
              t = new p.Conversation(n, o, s, r, e, l, u, C, c), d && S.PinSaveParser.applyConversationPinAttributes(t, d);
            } catch (h) {
              i.Logger.error("ConversationController:transformJSONConversation", h);
            }
            return t;
          }, E;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.GroupsController = void 0;
        var p = g(9), i = g(0), S = g(1);
        a.GroupsController = (function() {
          function E() {
          }
          return E.trasformJSONGroup = function(n) {
            var o;
            try {
              o = new p.Group(n[i.GroupConstants.KEYS.GUID], n[i.GroupConstants.KEYS.NAME], n[i.GroupConstants.KEYS.TYPE]), n.wsChannel && delete n.wsChannel, Object.assign(o, n), n = o;
            } catch (s) {
              S.Logger.error("GroupsController:transformJSONGroup", s);
            }
            return n;
          }, E;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(e, l) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, C) {
            u.__proto__ = C;
          } || function(u, C) {
            for (var c in C) C.hasOwnProperty(c) && (u[c] = C[c]);
          })(e, l);
        }, function(e, l) {
          function u() {
            this.constructor = e;
          }
          p(e, l), e.prototype = l === null ? Object.create(l) : (u.prototype = l.prototype, new u());
        }), S = this && this.__assign || function() {
          return (S = Object.assign || function(e) {
            for (var l, u = 1, C = arguments.length; u < C; u++) for (var c in l = arguments[u]) Object.prototype.hasOwnProperty.call(l, c) && (e[c] = l[c]);
            return e;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.TextMessage = void 0;
        var E = g(7), n = g(0), o = g(3), s = g(9), r = g(1);
        a.TextMessage = (function(e) {
          function l(u, C, c) {
            var d = e.call(this, u, "text", c, n.MessageCategory.MESSAGE) || this;
            return d.type = "text", d.data = { text: C }, d.text = C, d;
          }
          return i(l, e), l.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, l.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, l.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, l.prototype.setMetadata = function(u) {
            this.metadata = u, this.data = S(S({}, this.data), { metadata: u });
          }, l.prototype.getData = function() {
            return this.data;
          }, l.prototype.setData = function(u) {
            this.data = u;
          }, l.prototype.getText = function() {
            return this.text;
          }, l.prototype.setText = function(u) {
            this.text = u, this.data.text = u;
          }, l.prototype.setProcessedText = function(u) {
            this.processedText = u;
          }, l.prototype.getProcessedText = function() {
            return this.processedText;
          }, l.prototype.getTags = function() {
            return this.tags;
          }, l.prototype.setTags = function(u) {
            this.tags = u;
          }, l.prototype.getModerationStatus = function() {
            var u, C, c = (C = (u = this.data) === null || u === void 0 ? void 0 : u.moderation) === null || C === void 0 ? void 0 : C.status, d = Object.values(n.ModerationStatus);
            return c && d.includes(c) ? c : n.ModerationStatus.UNMODERATED;
          }, l.prototype.getSenderFromData = function() {
            try {
              var u = this.getData();
              if (u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new o.User(u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (C) {
              throw r.Logger.error("TextMessageModel: getSenderFromData", C), C;
            }
          }, l.prototype.getReceiverFromData = function() {
            try {
              var u = this.getData(), C = u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new o.User(C);
              var c = new s.Group(C[n.GroupConstants.KEYS.GUID], C[n.GroupConstants.KEYS.NAME], C[n.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(c, C);
            } catch (d) {
              throw r.Logger.error("TextMessageModel: getReceiverFromData", d), d;
            }
          }, l.TYPE = n.MessageConstatnts.TYPE.TEXT, l.RECEIVER_TYPE = n.MessageConstatnts.RECEIVER_TYPE, l.CATEGORY = n.MessageConstatnts.CATEGORY.MESSAGE, l;
        })(E.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ReactionCount = void 0;
        var p = g(1);
        a.ReactionCount = (function() {
          function i(S, E, n) {
            this.reactedByMe = !1, p.isFalsy(S) || (this.reaction = S), p.isFalsy(E) || (this.count = E), n === null && n === void 0 || (this.reactedByMe = n);
          }
          return i.prototype.getReaction = function() {
            return this.reaction;
          }, i.prototype.setReaction = function(S) {
            this.reaction = S;
          }, i.prototype.getCount = function() {
            return this.count;
          }, i.prototype.setCount = function(S) {
            this.count = S;
          }, i.prototype.getReactedByMe = function() {
            return !!this.reactedByMe && this.reactedByMe;
          }, i.prototype.setReactedByMe = function(S) {
            this.reactedByMe = S;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(l, u) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(C, c) {
            C.__proto__ = c;
          } || function(C, c) {
            for (var d in c) c.hasOwnProperty(d) && (C[d] = c[d]);
          })(l, u);
        }, function(l, u) {
          function C() {
            this.constructor = l;
          }
          p(l, u), l.prototype = u === null ? Object.create(u) : (C.prototype = u.prototype, new C());
        }), S = this && this.__assign || function() {
          return (S = Object.assign || function(l) {
            for (var u, C = 1, c = arguments.length; C < c; C++) for (var d in u = arguments[C]) Object.prototype.hasOwnProperty.call(u, d) && (l[d] = u[d]);
            return l;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MediaMessage = void 0;
        var E = g(7), n = g(0), o = g(3), s = g(20), r = g(9), e = g(1);
        a.MediaMessage = (function(l) {
          function u(C, c, d, t) {
            var h = l.call(this, C, d, t, n.MessageCategory.MESSAGE) || this;
            return h.data = {}, typeof c != "object" ? h.data = { url: c } : c && (0 < c.length ? h.files = c : h.files = [c]), h;
          }
          return i(u, l), u.prototype.setCaption = function(C) {
            this.caption = C, this.data[n.MessageConstatnts.KEYS.TEXT] = C;
          }, u.prototype.getCaption = function() {
            return this.data[n.MessageConstatnts.KEYS.TEXT];
          }, u.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, u.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, u.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, u.prototype.setMetadata = function(C) {
            this.metadata = C, this.data = S(S({}, this.data), { metadata: C });
          }, u.prototype.getData = function() {
            return this.data;
          }, u.prototype.setData = function(C) {
            this.data = C;
          }, u.prototype.getAttachment = function() {
            return new s.Attachment(this.data.attachments[0]);
          }, u.prototype.setAttachment = function(C) {
            this.data.attachments = [s.Attachment.toJSON(C)];
          }, u.prototype.getAttachments = function() {
            var C = [];
            if (this.data.attachments && 0 < this.data.attachments.length) for (var c = 0; c < this.data.attachments.length; c++) C.push(new s.Attachment(this.data.attachments[c]));
            return C;
          }, u.prototype.setAttachments = function(C) {
            var c = [];
            if (C && 0 < C.length) for (var d = 0; d < C.length; d++) c.push(s.Attachment.toJSON(C[d]));
            this.data.attachments = c;
          }, u.prototype.getURL = function() {
            try {
              var C = this.getData();
              if (C[n.MessageConstatnts.KEYS.URL]) return C[n.MessageConstatnts.KEYS.URL];
            } catch (c) {
              e.Logger.error("MediaMessageModel: getURL", c);
            }
          }, u.prototype.getTags = function() {
            return this.tags;
          }, u.prototype.setTags = function(C) {
            this.tags = C;
          }, u.prototype.getModerationStatus = function() {
            var C, c, d = (c = (C = this.data) === null || C === void 0 ? void 0 : C.moderation) === null || c === void 0 ? void 0 : c.status, t = Object.values(n.ModerationStatus);
            return d && t.includes(d) ? d : n.ModerationStatus.UNMODERATED;
          }, u.prototype.getSenderFromData = function() {
            try {
              var C = this.getData();
              if (C[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new o.User(C[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (c) {
              throw e.Logger.error("MediaMessageModel: getSenderFromData", c), c;
            }
          }, u.prototype.getReceiverFromData = function() {
            try {
              var C = this.getData(), c = C[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (C[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new o.User(c);
              var d = new r.Group(c[n.GroupConstants.KEYS.GUID], c[n.GroupConstants.KEYS.NAME], c[n.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(d, c);
            } catch (t) {
              throw e.Logger.error("MediaMessageModel: getReceiverFromData", t), t;
            }
          }, u.TYPE = n.MessageConstatnts.TYPE, u.RECEIVER_TYPE = n.MessageConstatnts.RECEIVER_TYPE, u.CATEGORY = n.MessageConstatnts.CATEGORY, u;
        })(E.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(e, l) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, C) {
            u.__proto__ = C;
          } || function(u, C) {
            for (var c in C) C.hasOwnProperty(c) && (u[c] = C[c]);
          })(e, l);
        }, function(e, l) {
          function u() {
            this.constructor = e;
          }
          p(e, l), e.prototype = l === null ? Object.create(l) : (u.prototype = l.prototype, new u());
        }), S = this && this.__assign || function() {
          return (S = Object.assign || function(e) {
            for (var l, u = 1, C = arguments.length; u < C; u++) for (var c in l = arguments[u]) Object.prototype.hasOwnProperty.call(l, c) && (e[c] = l[c]);
            return e;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CustomMessage = void 0;
        var E = g(7), n = g(0), o = g(3), s = g(1), r = g(9);
        a.CustomMessage = (function(e) {
          function l() {
            for (var u = [], C = 0; C < arguments.length; C++) u[C] = arguments[C];
            var c = this;
            if (u.length == 3) {
              var d = u[0], t = u[1], h = u[2];
              c = e.call(this, d, n.MessageConstatnts.TYPE.CUSTOM, t, n.MessageCategory.MESSAGE) || this, (typeof h != "object" || Array.isArray(h)) && (h = {}), c.customData = h, s.isFalsy(c.data) && (c.data = {}), c.data[n.MessageConstatnts.KEYS.CUSTOM_DATA] = h;
            }
            if (u.length == 4) {
              d = u[0], t = u[1];
              var I = u[2];
              h = u[3], c = e.call(this, d, I, t, n.MessageCategory.CUSTOM) || this, (typeof h != "object" || Array.isArray(h)) && (h = {}), c.customData = h, s.isFalsy(c.data) && (c.data = {}), c.data[n.MessageConstatnts.KEYS.CUSTOM_DATA] = h;
            }
            return c;
          }
          return i(l, e), l.prototype.getConversationText = function() {
            var u;
            return (u = this.data.text) !== null && u !== void 0 ? u : "";
          }, l.prototype.setConversationText = function(u) {
            this.data.text = u;
          }, l.prototype.willUpdateConversation = function() {
            var u;
            return (u = this.data.updateConversation) !== null && u !== void 0 && u;
          }, l.prototype.shouldUpdateConversation = function(u) {
            this.data.updateConversation = u;
          }, l.prototype.willSendNotification = function() {
            var u;
            return (u = this.data.sendNotification) !== null && u !== void 0 && u;
          }, l.prototype.shouldSendNotification = function(u) {
            this.data.sendNotification = u;
          }, l.prototype.getCustomData = function() {
            return this.customData;
          }, l.prototype.setCustomData = function(u) {
            this.customData = u, this.data[n.MessageConstatnts.KEYS.CUSTOM_DATA] = u;
          }, l.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, l.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, l.prototype.getSubType = function() {
            return this.subType;
          }, l.prototype.setSubType = function(u) {
            this.subType = u, this.data = S(S({}, this.data), { subType: u });
          }, l.prototype.getMetadata = function() {
            return this.metadata;
          }, l.prototype.setMetadata = function(u) {
            this.metadata = u, this.data = S(S({}, this.data), { metadata: u });
          }, l.prototype.getData = function() {
            return this.data;
          }, l.prototype.getTags = function() {
            return this.tags;
          }, l.prototype.setTags = function(u) {
            this.tags = u;
          }, l.prototype.getSenderFromData = function() {
            try {
              var u = this.getData();
              if (u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new o.User(u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (C) {
              throw s.Logger.error("CustomMessageModel: getSenderFromData", C), C;
            }
          }, l.prototype.getReceiverFromData = function() {
            try {
              var u = this.getData(), C = u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (u[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER) return new o.User(C);
              var c = new r.Group(C[n.GroupConstants.KEYS.GUID], C[n.GroupConstants.KEYS.NAME], C[n.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(c, C);
            } catch (d) {
              throw s.Logger.error("CustomMessageModel: getReceiverFromData", d), d;
            }
          }, l;
        })(E.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(u, C) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, d) {
            c.__proto__ = d;
          } || function(c, d) {
            for (var t in d) d.hasOwnProperty(t) && (c[t] = d[t]);
          })(u, C);
        }, function(u, C) {
          function c() {
            this.constructor = u;
          }
          p(u, C), u.prototype = C === null ? Object.create(C) : (c.prototype = C.prototype, new c());
        }), S = this && this.__assign || function() {
          return (S = Object.assign || function(u) {
            for (var C, c = 1, d = arguments.length; c < d; c++) for (var t in C = arguments[c]) Object.prototype.hasOwnProperty.call(C, t) && (u[t] = C[t]);
            return u;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.InteractiveMessage = void 0;
        var E = g(7), n = g(0), o = g(3), s = g(1), r = g(9), e = g(51), l = g(30);
        a.InteractiveMessage = (function(u) {
          function C() {
            for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
            var t = this;
            if (c.length == 4) {
              var h = c[0], I = c[1], T = c[2], f = c[3];
              (t = u.call(this, h, T, I, n.MessageCategory.INTERACTIVE) || this).interactionGoal = new e.InteractionGoal(n.GoalType.NONE, []), (typeof f != "object" || Array.isArray(f)) && (f = {}), t.interactiveData = f, t.interactions = [], s.isFalsy(t.data) && (t.data = {}), t.data[n.MessageConstatnts.KEYS.INTERACTIVE_DATA] = f, t.data[n.MessageConstatnts.KEYS.INTERACTION_GOAL] = new e.InteractionGoal(n.GoalType.NONE, []);
            } else if (c.length == 5) {
              h = c[0], I = c[1], T = c[2], f = c[3];
              var P = c[4];
              t = u.call(this, h, T, I, n.MessageCategory.INTERACTIVE) || this, (typeof f != "object" || Array.isArray(f)) && (f = {}), (typeof P != "object" || Array.isArray(P)) && (P = {}), t.interactiveData = f, t.interactionGoal = P, s.isFalsy(t.data) && (t.data = {}), t.data[n.MessageConstatnts.KEYS.INTERACTIVE_DATA] = f, t.data[n.MessageConstatnts.KEYS.INTERACTION_GOAL] = P, t.interactions = [];
            }
            return t;
          }
          return i(C, u), C.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, C.prototype.getInteractiveData = function() {
            return this.interactiveData;
          }, C.prototype.setInteractiveData = function(c) {
            this.interactiveData = c, this.data[n.MessageConstatnts.KEYS.INTERACTIVE_DATA] = c;
          }, C.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, C.prototype.getInteractionGoal = function() {
            try {
              return this.getInteractionGoalFromdata();
            } catch {
              return this.interactionGoal;
            }
          }, C.prototype.setInteractionGoal = function(c) {
            this.interactionGoal = c, this.data = S(S({}, this.data), { interactionGoal: c });
          }, C.prototype.getInteractions = function() {
            try {
              return this.getInteractionsFromData();
            } catch {
              return this.interactions;
            }
          }, C.prototype.setInteractions = function(c) {
            this.interactions = c;
            var d = n.MessageConstatnts.KEYS.INTERACTIONS;
            this.data[d] = c;
          }, C.prototype.getMetadata = function() {
            return this.metadata;
          }, C.prototype.setMetadata = function(c) {
            this.metadata = c, this.data = S(S({}, this.data), { metadata: c });
          }, C.prototype.getData = function() {
            return this.data;
          }, C.prototype.getTags = function() {
            return this.tags;
          }, C.prototype.setTags = function(c) {
            this.tags = c;
          }, C.prototype.setIsSenderInteractionAllowed = function(c) {
            this.allowSenderInteraction = c;
            var d = n.MessageConstatnts.KEYS.ALLOW_SENDER_INTERACTION;
            this.data[d] = c;
          }, C.prototype.getIsSenderInteractionAllowed = function(c) {
            return this.allowSenderInteraction;
          }, C.prototype.getInteractionGoalFromdata = function() {
            try {
              var c = this.getData();
              if (c[n.MessageConstatnts.KEYS.INTERACTION_GOAL]) return new e.InteractionGoal(c[n.MessageConstatnts.KEYS.INTERACTION_GOAL][n.MessageConstatnts.KEYS.TYPE], c[n.MessageConstatnts.KEYS.INTERACTION_GOAL][n.MessageConstatnts.KEYS.ELEMENT_IDS]);
            } catch (d) {
              throw s.Logger.error("InteractiveMessageModel: getFromData", d), d;
            }
          }, C.prototype.getInteractionsFromData = function() {
            try {
              var c = this.getData();
              if (c[n.MessageConstatnts.KEYS.INTERACTIONS]) return (c[n.MessageConstatnts.KEYS.INTERACTIONS] || []).map(function(d) {
                return new l.Interaction(d[n.MessageConstatnts.KEYS.ELEMENT_ID], d[n.MessageConstatnts.KEYS.INTERACTED_AT]);
              });
            } catch (d) {
              throw s.Logger.error("InteractiveMessageModel: getFromData", d), d;
            }
          }, C.prototype.getSenderFromData = function() {
            try {
              var c = this.getData();
              if (c[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new o.User(c[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.SENDER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (d) {
              throw s.Logger.error("CustomMessageModel: getSenderFromData", d), d;
            }
          }, C.prototype.getReceiverFromData = function() {
            try {
              var c = this.getData(), d = c[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (c[n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][n.MessageConstatnts.KEYS.RECEIVER][n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == [n.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER]) return new o.User(d);
              var t = new r.Group(d[n.GroupConstants.KEYS.GUID], d[n.GroupConstants.KEYS.NAME], d[n.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(t, d);
            } catch (h) {
              throw s.Logger.error("InteractiveMessageModel: getReceiverFromData", h), h;
            }
          }, C.TYPE = n.MessageConstatnts.TYPE, C.RECEIVER_TYPE = n.MessageConstatnts.RECEIVER_TYPE, C.CATEGORY = n.MessageConstatnts.CATEGORY, C;
        })(E.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Interaction = void 0;
        var p = g(0);
        a.Interaction = (function() {
          function i(S, E) {
            this.elementId = S, this.interactedAt = E;
          }
          return i.prototype.getElementId = function() {
            return this.elementId;
          }, i.prototype.getInteractedAt = function() {
            return this.interactedAt;
          }, i.prototype.setElementId = function(S) {
            this.elementId = S;
          }, i.prototype.setInteractedAt = function(S) {
            this.interactedAt = this.interactedAt;
          }, i.getInteractionFromJSON = function(S) {
            var E = S[p.MessageConstatnts.KEYS.INTERACTED_AT];
            return new i(S[p.MessageConstatnts.KEYS.ELEMENT_ID], E);
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(l, u) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(C, c) {
            C.__proto__ = c;
          } || function(C, c) {
            for (var d in c) c.hasOwnProperty(d) && (C[d] = c[d]);
          })(l, u);
        }, function(l, u) {
          function C() {
            this.constructor = l;
          }
          p(l, u), l.prototype = u === null ? Object.create(u) : (C.prototype = u.prototype, new C());
        }), S = this && this.__assign || function() {
          return (S = Object.assign || function(l) {
            for (var u, C = 1, c = arguments.length; C < c; C++) for (var d in u = arguments[C]) Object.prototype.hasOwnProperty.call(u, d) && (l[d] = u[d]);
            return l;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Action = void 0;
        var E = g(7), n = g(9), o = g(3), s = g(0), r = g(1), e = g(11);
        a.Action = (function(l) {
          function u() {
            return l !== null && l.apply(this, arguments) || this;
          }
          return i(u, l), u.actionFromJSON = function(C) {
            var c = new this(C[s.MessageConstatnts.KEYS.RECEIVER], C[s.MessageConstatnts.KEYS.TYPE], C[s.MessageConstatnts.KEYS.RECEIVER_TYPE], s.MessageCategory.ACTION), d = C[s.MessageConstatnts.KEYS.DATA];
            if (c.data = d, c.setAction(d[s.MessageConstatnts.KEYS.ACTION]), d[s.ActionConstatnts.ACTION_KEYS.EXTRAS]) {
              var t = d[s.ActionConstatnts.ACTION_KEYS.EXTRAS];
              if (t[s.ActionConstatnts.ACTION_KEYS.SCOPE]) {
                var h = t[s.ActionConstatnts.ACTION_KEYS.SCOPE];
                h[s.ActionConstatnts.ACTION_KEYS.NEW] && h[s.ActionConstatnts.ACTION_KEYS.OLD] && (c.setOldScope(h[s.ActionConstatnts.ACTION_KEYS.OLD]), c.setNewScope(h[s.ActionConstatnts.ACTION_KEYS.NEW]));
              }
            }
            d[s.MessageConstatnts.KEYS.METADATA] && c.setMetadata(d[s.MessageConstatnts.KEYS.METADATA]);
            var I = d[s.ActionConstatnts.ACTION_KEYS.ENTITIES];
            if (I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY]) if (I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][s.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == s.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
              var T = new o.User(I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][s.ActionConstatnts.ACTION_KEYS.ENTITY]);
              Object.assign(T, I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][s.ActionConstatnts.ACTION_KEYS.ENTITY]), c.actionBy = T, c.setSender(T);
            } else {
              var f = new n.Group("", "", "");
              Object.assign(f, I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][s.ActionConstatnts.ACTION_KEYS.ENTITY]), c.actionBy = f;
            }
            return I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR] && (I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][s.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == s.ActionConstatnts.ACTION_ENTITY_TYPE.USER ? (T = new o.User(I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][s.ActionConstatnts.ACTION_KEYS.ENTITY]), Object.assign(T, I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][s.ActionConstatnts.ACTION_KEYS.ENTITY]), c.actionFor = T) : (f = new n.Group("", "", ""), Object.assign(f, I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][s.ActionConstatnts.ACTION_KEYS.ENTITY]), c.actionFor = f)), I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON] && (I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][s.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == s.ActionConstatnts.ACTION_ENTITY_TYPE.USER ? (T = new o.User(I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][s.ActionConstatnts.ACTION_KEYS.ENTITY]), Object.assign(T, I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][s.ActionConstatnts.ACTION_KEYS.ENTITY]), c.actionOn = T) : I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][s.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == s.ActionConstatnts.ACTION_ENTITY_TYPE.GROUP ? (f = new n.Group("", "", ""), Object.assign(f, I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][s.ActionConstatnts.ACTION_KEYS.ENTITY]), c.actionOn = f) : I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][s.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == s.ActionConstatnts.ACTION_ENTITY_TYPE.MESSAGE && (c.actionOn = e.MessageController.trasformJSONMessge(I[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][s.ActionConstatnts.ACTION_KEYS.ENTITY]))), c.setMessage(c.getActionMessage(c)), c;
          }, u.prototype.getOldScope = function() {
            return this.oldScope;
          }, u.prototype.setOldScope = function(C) {
            this.oldScope = C;
          }, u.prototype.getNewScope = function() {
            return this.newScope;
          }, u.prototype.setNewScope = function(C) {
            this.newScope = C;
          }, u.prototype.getRawData = function() {
            return this.rawData;
          }, u.prototype.setRawData = function(C) {
            this.rawData = C;
          }, u.prototype.getMessage = function() {
            return this.message;
          }, u.prototype.setMessage = function(C) {
            this.message = C;
          }, u.prototype.getAction = function() {
            return this.action;
          }, u.prototype.setAction = function(C) {
            this.action = C;
          }, u.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, u.prototype.getActionBy = function() {
            return this.actionBy;
          }, u.prototype.setActionBy = function(C) {
            this.actionBy = C;
          }, u.prototype.getActionOn = function() {
            return this.actionOn;
          }, u.prototype.setActionOn = function(C) {
            this.actionOn = C;
          }, u.prototype.getActionFor = function() {
            return this.actionFor;
          }, u.prototype.setActionFor = function(C) {
            this.actionFor = C;
          }, u.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, u.prototype.setMetadata = function(C) {
            this.metadata = C, this.data = S(S({}, this.data), { metadata: C });
          }, u.prototype.getActionMessage = function(C) {
            var c = "";
            switch (C.getType()) {
              case s.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_USER:
              case s.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_GROUP:
                switch (C.getAction()) {
                  case s.ActionConstatnts.ACTION_KEYS.ACTION_CREATED:
                  case s.ActionConstatnts.ACTION_KEYS.ACTION_UPDATED:
                  case s.ActionConstatnts.ACTION_KEYS.ACTION_DELETED:
                }
                break;
              case s.ActionConstatnts.ACTION_KEYS.ACTION_TYPE_GROUP_MEMBER:
                switch (C.getAction()) {
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_JOINED:
                    var d = C.getActionBy();
                    c = r.format(s.ActionConstatnts.ActionMessages.ACTION_GROUP_JOINED_MESSAGE, d.getName());
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_LEFT:
                    d = C.getActionBy(), c = r.format(s.ActionConstatnts.ActionMessages.ACTION_GROUP_LEFT_MESSAGE, d.getName());
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_KICKED:
                    d = C.getActionBy();
                    var t = C.getActionOn();
                    c = r.format(s.ActionConstatnts.ActionMessages.ACTION_MEMBER_KICKED_MESSAGE, d.getName(), t.getName());
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_BANNED:
                    d = C.getActionBy(), t = C.getActionOn(), c = r.format(s.ActionConstatnts.ActionMessages.ACTION_MEMBER_BANNED_MESSAGE, d.getName(), t.getName());
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_UNBANNED:
                    d = C.getActionBy(), t = C.getActionOn(), c = r.format(s.ActionConstatnts.ActionMessages.ACTION_MEMBER_UNBANNED_MESSAGE, d.getName(), t.getName());
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.ACTION_SCOPE_CHANGED:
                    d = C.getActionBy(), t = C.getActionOn();
                    var h = C.getNewScope();
                    c = r.format(s.ActionConstatnts.ActionMessages.ACTION_MEMBER_SCOPE_CHANGED, d.getName(), t.getName(), h);
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MEMBER_ADDED:
                    d = C.getActionBy(), t = C.getActionOn(), c = r.format(s.ActionConstatnts.ActionMessages.ACTION_MEMBER_ADDED_TO_GROUP, d.getName(), t.getName());
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MESSAGE_EDITED:
                    c = r.format(s.ActionConstatnts.ActionMessages.ACTION_MESSAGE_EDITED_MESSAGE, "");
                    break;
                  case s.ActionConstatnts.ACTION_KEYS.TYPE_MESSAGE_DELETED:
                    c = r.format(s.ActionConstatnts.ActionMessages.ACTION_MESSAGE_DELETED_MESSAGE, "");
                }
            }
            return c;
          }, u.prototype.getSenderFromData = function() {
            var C = this.data[s.ActionConstatnts.ACTION_KEYS.ENTITIES];
            if (C[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY] && C[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][s.ActionConstatnts.ACTION_KEYS.ENTITY_TYPE] == s.ActionConstatnts.ACTION_ENTITY_TYPE.USER) {
              var c = new o.User(C[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][s.ActionConstatnts.ACTION_KEYS.ENTITY]);
              return Object.assign(c, C[s.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][s.ActionConstatnts.ACTION_KEYS.ENTITY]), c;
            }
          }, u.TYPE = s.MessageConstatnts.TYPE, u.RECEIVER_TYPE = s.MessageConstatnts.RECEIVER_TYPE, u.CATEGORY = s.MessageConstatnts.CATEGORY, u.ACTION_TYPE = s.ActionConstatnts.ACTION_TYPE, u;
        })(E.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(e, l) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, C) {
            u.__proto__ = C;
          } || function(u, C) {
            for (var c in C) C.hasOwnProperty(c) && (u[c] = C[c]);
          })(e, l);
        }, function(e, l) {
          function u() {
            this.constructor = e;
          }
          p(e, l), e.prototype = l === null ? Object.create(l) : (u.prototype = l.prototype, new u());
        }), S = this && this.__assign || function() {
          return (S = Object.assign || function(e) {
            for (var l, u = 1, C = arguments.length; u < C; u++) for (var c in l = arguments[u]) Object.prototype.hasOwnProperty.call(l, c) && (e[c] = l[c]);
            return e;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Call = void 0;
        var E = g(7), n = g(9), o = g(0), s = g(1), r = g(3);
        a.Call = (function(e) {
          function l(u, C, c, d) {
            return s.isFalsy(d) ? e.call(this, u, C, c, o.MessageCategory.CALL) || this : e.call(this, u, C, c, d) || this;
          }
          return i(l, e), l.prototype.getCallInitiator = function() {
            try {
              return this.getCallInitiatedByFromData();
            } catch {
              return this.callInitiator;
            }
          }, l.prototype.setCallInitiator = function(u) {
            this.callInitiator = u;
          }, l.prototype.getCallReceiver = function() {
            try {
              return this.getCallReceivedByFromData();
            } catch {
              return this.callReceiver;
            }
          }, l.prototype.setCallReceiver = function(u) {
            this.callReceiver = u;
          }, l.prototype.getData = function() {
            return this.data;
          }, l.prototype.setData = function(u) {
            this.data = u;
          }, l.prototype.getSessionId = function() {
            return this.sessionId;
          }, l.prototype.setSessionId = function(u) {
            this.sessionId = u;
          }, l.prototype.getMetadata = function() {
            return this.data.metadata && (this.metadata = this.data.metadata), this.metadata;
          }, l.prototype.setMetadata = function(u) {
            this.metadata = u, this.data = S(S({}, this.data), { metadata: u });
          }, l.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, l.prototype.getAction = function() {
            return this.action;
          }, l.prototype.setAction = function(u) {
            this.action = u;
          }, l.prototype.getInitiatedAt = function() {
            return this.initiatedAt;
          }, l.prototype.setInitiatedAt = function(u) {
            this.initiatedAt = u;
          }, l.prototype.getJoinedAt = function() {
            return this.joinedAt;
          }, l.prototype.setJoinedAt = function(u) {
            this.joinedAt = u;
          }, l.prototype.getRawData = function() {
            return this.rawData;
          }, l.prototype.setRawData = function(u) {
            this.rawData = u;
          }, l.callFromJSON = function(u) {
            try {
              var C = new this(u[o.MessageConstatnts.KEYS.RECEIVER], u[o.MessageConstatnts.KEYS.TYPE], u[o.MessageConstatnts.KEYS.RECEIVER_TYPE], o.MessageCategory.CALL), c = u[o.MessageConstatnts.KEYS.DATA];
              C.setAction(c[o.MessageConstatnts.KEYS.ACTION]), c[o.MessageConstatnts.KEYS.METADATA] && C.setMetadata(c[o.MessageConstatnts.KEYS.METADATA]);
              var d = c[o.ActionConstatnts.ACTION_KEYS.ENTITIES];
              if (d[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY] && d[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY], d[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON]) {
                var t = d[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON];
                if (t[o.CallConstants.CALL_KEYS.CALL_ENTITY]) {
                  var h = t[o.CallConstants.CALL_KEYS.CALL_ENTITY];
                  if (h[o.CallConstants.CALL_KEYS.CALL_SESSION_ID] && (C.sessionId = h[o.CallConstants.CALL_KEYS.CALL_SESSION_ID]), h[o.CallConstants.CALL_KEYS.CALL_STATUS] && (C.status = h[o.CallConstants.CALL_KEYS.CALL_STATUS]), h[o.CallConstants.CALL_KEYS.CALL_DATA]) {
                    var I = h[o.CallConstants.CALL_KEYS.CALL_DATA];
                    I[o.CallConstants.CALL_KEYS.CALL_METADATA] && (C.metadata = I[o.CallConstants.CALL_KEYS.CALL_METADATA]), I[o.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES] && I[o.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES];
                  }
                  h[o.CallConstants.CALL_KEYS.CALL_INITIATED_AT] && (C.initiatedAt = h[o.CallConstants.CALL_KEYS.CALL_INITIATED_AT]), h[o.CallConstants.CALL_KEYS.CALL_JOINED_AT] && (C.joinedAt = h[o.CallConstants.CALL_KEYS.CALL_JOINED_AT]), h[o.CallConstants.CALL_KEYS.CALL_LEFT_AT] && (C.joinedAt = h[o.CallConstants.CALL_KEYS.CALL_LEFT_AT]);
                }
              }
              return C;
            } catch (T) {
              s.Logger.error("CallModel: callFromJSON", T);
            }
          }, l.prototype.getSenderFromData = function() {
            try {
              var u = this.getData();
              if ((u = u[o.ActionConstatnts.ACTION_KEYS.ENTITIES])[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][o.CallConstants.CALL_KEYS.CALL_ENTITY]) return new r.User(u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_BY][o.CallConstants.CALL_KEYS.CALL_ENTITY]);
            } catch (C) {
              throw s.Logger.error("CallModel:getSenderFromData", C), C;
            }
          }, l.prototype.getCallInitiatedByFromData = function() {
            try {
              var u = this.getData();
              if ((u = u[o.ActionConstatnts.ACTION_KEYS.ENTITIES])[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][o.CallConstants.CALL_KEYS.CALL_ENTITY][o.CallConstants.CALL_KEYS.CALL_DATA][o.ActionConstatnts.ACTION_KEYS.ENTITIES][o.CallConstants.CALL_KEYS.CALL_SENDER]) return new r.User(u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_ON][o.CallConstants.CALL_KEYS.CALL_ENTITY][o.CallConstants.CALL_KEYS.CALL_DATA][o.ActionConstatnts.ACTION_KEYS.ENTITIES][o.CallConstants.CALL_KEYS.CALL_SENDER][o.CallConstants.CALL_KEYS.CALL_ENTITY]);
            } catch (C) {
              throw s.Logger.error("CallModel:getCallInitiatedByFromData", C), C;
            }
          }, l.prototype.getCallReceivedByFromData = function() {
            try {
              var u = this.getData();
              if ((u = u[o.ActionConstatnts.ACTION_KEYS.ENTITIES])[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][o.CallConstants.CALL_KEYS.CALL_ENTITY]) {
                if (u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][o.CallConstants.CALL_KEYS.CALL_ENTITY_TYPE] == o.CallConstants.CALL_KEYS.CALL_ENTITY_USER) return new r.User(u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][o.CallConstants.CALL_KEYS.CALL_ENTITY]);
                var C = new n.Group(u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][o.CallConstants.CALL_KEYS.CALL_ENTITY][o.GroupConstants.KEYS.GUID], u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][o.CallConstants.CALL_KEYS.CALL_ENTITY][o.GroupConstants.KEYS.NAME], u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][o.CallConstants.CALL_KEYS.CALL_ENTITY][o.GroupConstants.KEYS.TYPE]);
                return Object.assign(C, u[o.ActionConstatnts.ACTION_SUBJECTS.ACTION_FOR][o.CallConstants.CALL_KEYS.CALL_ENTITY]);
              }
            } catch (c) {
              throw s.Logger.error("CallModel:getCallReceivedByFromData", c), c;
            }
          }, l.TYPE = o.MessageConstatnts.TYPE, l.RECEIVER_TYPE = o.MessageConstatnts.RECEIVER_TYPE, l.CATEGORY = o.MessageConstatnts.CATEGORY, l.ACTION_TYPE = o.ActionConstatnts.ACTION_TYPE, l;
        })(E.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MessageThread = void 0, a.MessageThread = (function() {
          function p(i) {
            this.parentMessageId = i.parentMessageId, this.parentMessage = i.parentMessage, this.replyCount = i.replyCount, this.lastReply = i.lastReply, this.updatedAt = i.updatedAt, this.conversationId = i.conversationId, this.receiverType = i.receiverType, this.receiverId = i.receiverId, this.subscribed = i.subscribed, this.unreadReplyCount = i.unreadReplyCount, this.rawData = i.rawData;
          }
          return p.prototype.getParentMessageId = function() {
            return this.parentMessageId;
          }, p.prototype.getParentMessage = function() {
            return this.parentMessage;
          }, p.prototype.getReplyCount = function() {
            return this.replyCount;
          }, p.prototype.setReplyCount = function(i) {
            this.replyCount = i;
          }, p.prototype.getLastReply = function() {
            return this.lastReply;
          }, p.prototype.getUpdatedAt = function() {
            return this.updatedAt;
          }, p.prototype.getConversationId = function() {
            return this.conversationId;
          }, p.prototype.getReceiverType = function() {
            return this.receiverType;
          }, p.prototype.getReceiverId = function() {
            return this.receiverId;
          }, p.prototype.isSubscribed = function() {
            return this.subscribed;
          }, p.prototype.setSubscribed = function(i) {
            this.subscribed = i;
          }, p.prototype.getUnreadReplyCount = function() {
            return this.unreadReplyCount;
          }, p.prototype.getRawData = function() {
            return this.rawData;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(e, l, u, C) {
          return new (u || (u = Promise))(function(c, d) {
            function t(T) {
              try {
                I(C.next(T));
              } catch (f) {
                d(f);
              }
            }
            function h(T) {
              try {
                I(C.throw(T));
              } catch (f) {
                d(f);
              }
            }
            function I(T) {
              var f;
              T.done ? c(T.value) : (f = T.value, f instanceof u ? f : new u(function(P) {
                P(f);
              })).then(t, h);
            }
            I((C = C.apply(e, l || [])).next());
          });
        }, i = this && this.__generator || function(e, l) {
          var u, C, c, d, t = {
            label: 0,
            sent: function() {
              if (1 & c[0]) throw c[1];
              return c[1];
            },
            trys: [],
            ops: []
          };
          return d = {
            next: h(0),
            throw: h(1),
            return: h(2)
          }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function h(I) {
            return function(T) {
              return (function(f) {
                if (u) throw new TypeError("Generator is already executing.");
                for (; t; ) try {
                  if (u = 1, C && (c = 2 & f[0] ? C.return : f[0] ? C.throw || ((c = C.return) && c.call(C), 0) : C.next) && !(c = c.call(C, f[1])).done) return c;
                  switch (C = 0, c && (f = [2 & f[0], c.value]), f[0]) {
                    case 0:
                    case 1:
                      c = f;
                      break;
                    case 4:
                      return t.label++, {
                        value: f[1],
                        done: !1
                      };
                    case 5:
                      t.label++, C = f[1], f = [0];
                      continue;
                    case 7:
                      f = t.ops.pop(), t.trys.pop();
                      continue;
                    default:
                      if (!(c = 0 < (c = t.trys).length && c[c.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                        t = 0;
                        continue;
                      }
                      if (f[0] === 3 && (!c || f[1] > c[0] && f[1] < c[3])) {
                        t.label = f[1];
                        break;
                      }
                      if (f[0] === 6 && t.label < c[1]) {
                        t.label = c[1], c = f;
                        break;
                      }
                      if (c && t.label < c[2]) {
                        t.label = c[2], t.ops.push(f);
                        break;
                      }
                      c[2] && t.ops.pop(), t.trys.pop();
                      continue;
                  }
                  f = l.call(e, t);
                } catch (P) {
                  f = [6, P], C = 0;
                } finally {
                  u = c = 0;
                }
                if (5 & f[0]) throw f[1];
                return {
                  value: f[0] ? f[1] : void 0,
                  done: !0
                };
              })([I, T]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.KeyStore = void 0;
        var S = g(6), E = g(1), n = g(0), o = g(12), s = g(2), r = g(16);
        a.KeyStore = (function() {
          function e(l) {
            this.store = n.constants.DEFAULT_STORE, E.isFalsy(l) || (this.store = l);
          }
          return e.prototype.initializeStorage = function() {
            var l;
            return p(this, void 0, void 0, function() {
              var u, C;
              return i(this, function(c) {
                switch (c.label) {
                  case 0:
                    if (this.keyStore) return [2];
                    c.label = 1;
                  case 1:
                    return c.trys.push([
                      1,
                      5,
                      ,
                      6
                    ]), (u = r.StorageManager.getInstance()).isStorageInitialized() ? (this.keyStore = u.getStorage(S.CometChat.getAppId(), n.LOCAL_STORE.KEYS_STORE), [3, 4]) : [3, 2];
                  case 2:
                    return C = ((l = S.CometChat.appSettings) === null || l === void 0 ? void 0 : l.getStorageMode()) || n.StorageMode.LOCAL, [4, u.initialize(C)];
                  case 3:
                    c.sent(), this.keyStore = u.getStorage(S.CometChat.getAppId(), n.LOCAL_STORE.KEYS_STORE), c.label = 4;
                  case 4:
                    return [3, 6];
                  case 5:
                    return c.sent(), this.keyStore = o.createInstance({ name: E.format(n.LOCAL_STORE.STORE_STRING, S.CometChat.getAppId(), n.LOCAL_STORE.KEYS_STORE) }), this.keyStore.setDriver([
                      o.LOCALSTORAGE,
                      o.INDEXEDDB,
                      o.WEBSQL
                    ]), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }, e.getInstance = function() {
            return e.KeyStore ??= new e(), e.KeyStore;
          }, e.prototype.set = function(l, u) {
            return p(this, void 0, void 0, function() {
              return i(this, function(C) {
                switch (C.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return C.sent(), [2, this.keyStore.setItem(l, u)];
                }
              });
            });
          }, e.prototype.remove = function(l) {
            return p(this, void 0, void 0, function() {
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return u.sent(), [2, this.keyStore.removeItem(l)];
                }
              });
            });
          }, e.prototype.get = function(l) {
            var u = this;
            return new Promise(function(C, c) {
              return p(u, void 0, void 0, function() {
                var d;
                return i(this, function(t) {
                  switch (t.label) {
                    case 0:
                      return t.trys.push([
                        0,
                        2,
                        ,
                        3
                      ]), [4, this.initializeStorage()];
                    case 1:
                      return t.sent(), this.keyStore.getItem(l).then(function(h) {
                        try {
                          C(JSON.parse(h));
                        } catch {
                          C(h);
                        }
                      }, function(h) {
                        c(h);
                      }), [3, 3];
                    case 2:
                      return d = t.sent(), c(new s.CometChatException(d)), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            });
          }, e.prototype.clearStore = function() {
            return p(this, void 0, void 0, function() {
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return l.sent(), [2, this.keyStore.clear()];
                }
              });
            });
          }, e;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(c, d) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, h) {
            t.__proto__ = h;
          } || function(t, h) {
            for (var I in h) h.hasOwnProperty(I) && (t[I] = h[I]);
          })(c, d);
        }, function(c, d) {
          function t() {
            this.constructor = c;
          }
          p(c, d), c.prototype = d === null ? Object.create(d) : (t.prototype = d.prototype, new t());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.WSConnectionListener = a.AssistantsListener = a.UserLoginListener = a.CallsListener = a.UserCallListener = a.GroupsListener = a.UsersListener = a.MessagesListener = a.Listener = a.ConnectionListener = a.LoginListener = a.OngoingCallListener = a.GroupListener = a.UserListener = a.AIAssistantListener = a.CallListener = a.MessageListener = void 0;
        var S = g(1), E = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          this.onTextMessageReceived = void 0, this.onMediaMessageReceived = void 0, this.onCustomMessageReceived = void 0, this.onTypingStarted = void 0, this.onTypingEnded = void 0, this.onMessagesDelivered = void 0, this.onMessagesRead = void 0, this.onMessageEdited = void 0, this.onMessageDeleted = void 0, this.onTransientMessageReceived = void 0, this.onInteractiveMessageReceived = void 0, this.onInteractionGoalCompleted = void 0, this.onMessageReactionAdded = void 0, this.onMessageReactionRemoved = void 0, this.onMessagesDeliveredToAll = void 0, this.onMessagesReadByAll = void 0, this.onMessageModerated = void 0, this.onAIToolResultReceived = void 0, this.onAIToolArgumentsReceived = void 0, this.onAIAssistantMessageReceived = void 0, this.onCardMessageReceived = void 0, this.onMessagePinned = void 0, this.onMessageUnpinned = void 0, this.onMessageSaved = void 0, this.onMessageUnsaved = void 0, S.isFalsy(c[0].onTextMessageReceived) || (this.onTextMessageReceived = c[0].onTextMessageReceived), S.isFalsy(c[0].onMediaMessageReceived) || (this.onMediaMessageReceived = c[0].onMediaMessageReceived), S.isFalsy(c[0].onTypingStarted) || (this.onTypingStarted = c[0].onTypingStarted), S.isFalsy(c[0].onTypingEnded) || (this.onTypingEnded = c[0].onTypingEnded), S.isFalsy(c[0].onMessagesDelivered) || (this.onMessagesDelivered = c[0].onMessagesDelivered), S.isFalsy(c[0].onMessagesRead) || (this.onMessagesRead = c[0].onMessagesRead), S.isFalsy(c[0].onCustomMessageReceived) || (this.onCustomMessageReceived = c[0].onCustomMessageReceived), S.isFalsy(c[0].onMessageEdited) || (this.onMessageEdited = c[0].onMessageEdited), S.isFalsy(c[0].onMessageDeleted) || (this.onMessageDeleted = c[0].onMessageDeleted), S.isFalsy(c[0].onTransientMessageReceived) || (this.onTransientMessageReceived = c[0].onTransientMessageReceived), S.isFalsy(c[0].onInteractiveMessageReceived) || (this.onInteractiveMessageReceived = c[0].onInteractiveMessageReceived), S.isFalsy(c[0].onInteractionGoalCompleted) || (this.onInteractionGoalCompleted = c[0].onInteractionGoalCompleted), S.isFalsy(c[0].onMessageReactionAdded) || (this.onMessageReactionAdded = c[0].onMessageReactionAdded), S.isFalsy(c[0].onMessageReactionRemoved) || (this.onMessageReactionRemoved = c[0].onMessageReactionRemoved), S.isFalsy(c[0].onMessagesDeliveredToAll) || (this.onMessagesDeliveredToAll = c[0].onMessagesDeliveredToAll), S.isFalsy(c[0].onMessagesReadByAll) || (this.onMessagesReadByAll = c[0].onMessagesReadByAll), S.isFalsy(c[0].onMessageModerated) || (this.onMessageModerated = c[0].onMessageModerated), S.isFalsy(c[0].onAIToolResultReceived) || (this.onAIToolResultReceived = c[0].onAIToolResultReceived), S.isFalsy(c[0].onAIToolArgumentsReceived) || (this.onAIToolArgumentsReceived = c[0].onAIToolArgumentsReceived), S.isFalsy(c[0].onAIAssistantMessageReceived) || (this.onAIAssistantMessageReceived = c[0].onAIAssistantMessageReceived), S.isFalsy(c[0].onCardMessageReceived) || (this.onCardMessageReceived = c[0].onCardMessageReceived), S.isFalsy(c[0].onMessagePinned) || (this.onMessagePinned = c[0].onMessagePinned), S.isFalsy(c[0].onMessageUnpinned) || (this.onMessageUnpinned = c[0].onMessageUnpinned), S.isFalsy(c[0].onMessageSaved) || (this.onMessageSaved = c[0].onMessageSaved), S.isFalsy(c[0].onMessageUnsaved) || (this.onMessageUnsaved = c[0].onMessageUnsaved);
        };
        a.MessageListener = E;
        var n = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          this.onIncomingCallReceived = void 0, this.onOutgoingCallAccepted = void 0, this.onOutgoingCallRejected = void 0, this.onIncomingCallCancelled = void 0, this.onCallEndedMessageReceived = void 0, S.isFalsy(c[0].onIncomingCallReceived) || (this.onIncomingCallReceived = c[0].onIncomingCallReceived), S.isFalsy(c[0].onOutgoingCallAccepted) || (this.onOutgoingCallAccepted = c[0].onOutgoingCallAccepted), S.isFalsy(c[0].onOutgoingCallRejected) || (this.onOutgoingCallRejected = c[0].onOutgoingCallRejected), S.isFalsy(c[0].onIncomingCallCancelled) || (this.onIncomingCallCancelled = c[0].onIncomingCallCancelled), S.isFalsy(c[0].onCallEndedMessageReceived) || (this.onCallEndedMessageReceived = c[0].onCallEndedMessageReceived);
        };
        a.CallListener = n;
        var o = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          S.isFalsy(c[0].onAIAssistantEventReceived) || (this.onAIAssistantEventReceived = c[0].onAIAssistantEventReceived);
        };
        a.AIAssistantListener = o;
        var s = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          S.isFalsy(c[0].onUserOnline) || (this.onUserOnline = c[0].onUserOnline), S.isFalsy(c[0].onUserOffline) || (this.onUserOffline = c[0].onUserOffline);
        };
        a.UserListener = s;
        var r = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          S.isFalsy(c[0].onGroupMemberJoined) || (this.onGroupMemberJoined = c[0].onGroupMemberJoined), S.isFalsy(c[0].onGroupMemberLeft) || (this.onGroupMemberLeft = c[0].onGroupMemberLeft), S.isFalsy(c[0].onGroupMemberKicked) || (this.onGroupMemberKicked = c[0].onGroupMemberKicked), S.isFalsy(c[0].onGroupMemberBanned) || (this.onGroupMemberBanned = c[0].onGroupMemberBanned), S.isFalsy(c[0].onGroupMemberUnbanned) || (this.onGroupMemberUnbanned = c[0].onGroupMemberUnbanned), S.isFalsy(c[0].onGroupMemberScopeChanged) || (this.onGroupMemberScopeChanged = c[0].onGroupMemberScopeChanged), S.isFalsy(c[0].onMemberAddedToGroup) || (this.onGroupMemberAddedToGroup = c[0].onMemberAddedToGroup);
        };
        a.GroupListener = r;
        var e = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          S.isFalsy(c[0].onYouLeft) || (this.onYouLeft = c[0].onYouLeft), S.isFalsy(c[0].onYouJoined) || (this.onYouJoined = c[0].onYouJoined), S.isFalsy(c[0].onUserJoined) || (this.onUserJoined = c[0].onUserJoined), S.isFalsy(c[0].onUserLeft) || (this.onUserLeft = c[0].onUserLeft), S.isFalsy(c[0].onUserListUpdated) || (this.onUserListUpdated = c[0].onUserListUpdated), S.isFalsy(c[0].onMediaDeviceListUpdated) || (this.onMediaDeviceListUpdated = c[0].onMediaDeviceListUpdated), S.isFalsy(c[0].onRecordingStarted) || (this.onRecordingStarted = c[0].onRecordingStarted), S.isFalsy(c[0].onRecordingStopped) || (this.onRecordingStopped = c[0].onRecordingStopped), S.isFalsy(c[0].onScreenShareStarted) || (this.onScreenShareStarted = c[0].onScreenShareStarted), S.isFalsy(c[0].onScreenShareStopped) || (this.onScreenShareStopped = c[0].onScreenShareStopped), S.isFalsy(c[0].onUserMuted) || (this.onUserMuted = c[0].onUserMuted), S.isFalsy(c[0].onCallSwitchedToVideo) || (this.onCallSwitchedToVideo = c[0].onCallSwitchedToVideo), S.isFalsy(c[0].onCallEnded) || (this.onCallEnded = c[0].onCallEnded), S.isFalsy(c[0].onError) || (this.onError = c[0].onError);
        };
        a.OngoingCallListener = e;
        var l = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          S.isFalsy(c[0].loginSuccess) || (this.loginSuccess = c[0].loginSuccess), S.isFalsy(c[0].loginFailure) || (this.loginFailure = c[0].loginFailure), S.isFalsy(c[0].logoutSuccess) || (this.logoutSuccess = c[0].logoutSuccess), S.isFalsy(c[0].logoutFailure) || (this.logoutFailure = c[0].logoutFailure);
        };
        a.LoginListener = l;
        var u = function() {
          for (var c = [], d = 0; d < arguments.length; d++) c[d] = arguments[d];
          this.onConnected = void 0, this.inConnecting = void 0, this.onDisconnected = void 0, this.onFeatureThrottled = void 0, S.isFalsy(c[0].onConnected) || (this.onConnected = c[0].onConnected), S.isFalsy(c[0].inConnecting) || (this.inConnecting = c[0].inConnecting), S.isFalsy(c[0].onDisconnected) || (this.onDisconnected = c[0].onDisconnected), S.isFalsy(c[0].onFeatureThrottled) || (this.onFeatureThrottled = c[0].onFeatureThrottled);
        };
        a.ConnectionListener = u;
        var C = function(c, d) {
          this._name = c, this._callback = d;
        };
        a.MessagesListener = (function(c) {
          function d(t, h, I, T) {
            var f = c.call(this, t, T) || this;
            return f._eventListener = h, I && (f._cursor = I), f;
          }
          return i(d, c), d;
        })(a.Listener = C), a.UsersListener = (function(c) {
          function d(t, h, I, T) {
            var f = c.call(this, t, T) || this;
            return f._eventListener = h, I && (f._cursor = I), f;
          }
          return i(d, c), d;
        })(C), a.GroupsListener = (function(c) {
          function d(t, h, I, T) {
            var f = c.call(this, t, T) || this;
            return f._eventListener = h, I && (f._cursor = I), f;
          }
          return i(d, c), d;
        })(C), a.UserCallListener = (function(c) {
          function d(t, h, I) {
            var T = c.call(this, "callListner", I) || this;
            return T._eventListener = t, T;
          }
          return i(d, c), d;
        })(C), a.CallsListener = (function(c) {
          function d(t, h, I, T) {
            var f = c.call(this, t, T) || this;
            return f._eventListener = h, f;
          }
          return i(d, c), d;
        })(C), a.UserLoginListener = (function(c) {
          function d(t, h, I, T) {
            var f = c.call(this, t, T) || this;
            return f._eventListener = h, I && (f._cursor = I), f;
          }
          return i(d, c), d;
        })(C), a.AssistantsListener = (function(c) {
          function d(t, h, I, T) {
            var f = c.call(this, t, T) || this;
            return f._eventListener = h, I && (f._cursor = I), f;
          }
          return i(d, c), d;
        })(C), a.WSConnectionListener = (function(c) {
          function d(t, h, I, T) {
            var f = c.call(this, t, T) || this;
            return f._eventListener = h, I && (f._cursor = I), f;
          }
          return i(d, c), d;
        })(C);
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(r, e, l, u) {
          return new (l || (l = Promise))(function(C, c) {
            function d(I) {
              try {
                h(u.next(I));
              } catch (T) {
                c(T);
              }
            }
            function t(I) {
              try {
                h(u.throw(I));
              } catch (T) {
                c(T);
              }
            }
            function h(I) {
              var T;
              I.done ? C(I.value) : (T = I.value, T instanceof l ? T : new l(function(f) {
                f(T);
              })).then(d, t);
            }
            h((u = u.apply(r, e || [])).next());
          });
        }, i = this && this.__generator || function(r, e) {
          var l, u, C, c, d = {
            label: 0,
            sent: function() {
              if (1 & C[0]) throw C[1];
              return C[1];
            },
            trys: [],
            ops: []
          };
          return c = {
            next: t(0),
            throw: t(1),
            return: t(2)
          }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
            return this;
          }), c;
          function t(h) {
            return function(I) {
              return (function(T) {
                if (l) throw new TypeError("Generator is already executing.");
                for (; d; ) try {
                  if (l = 1, u && (C = 2 & T[0] ? u.return : T[0] ? u.throw || ((C = u.return) && C.call(u), 0) : u.next) && !(C = C.call(u, T[1])).done) return C;
                  switch (u = 0, C && (T = [2 & T[0], C.value]), T[0]) {
                    case 0:
                    case 1:
                      C = T;
                      break;
                    case 4:
                      return d.label++, {
                        value: T[1],
                        done: !1
                      };
                    case 5:
                      d.label++, u = T[1], T = [0];
                      continue;
                    case 7:
                      T = d.ops.pop(), d.trys.pop();
                      continue;
                    default:
                      if (!(C = 0 < (C = d.trys).length && C[C.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                        d = 0;
                        continue;
                      }
                      if (T[0] === 3 && (!C || T[1] > C[0] && T[1] < C[3])) {
                        d.label = T[1];
                        break;
                      }
                      if (T[0] === 6 && d.label < C[1]) {
                        d.label = C[1], C = T;
                        break;
                      }
                      if (C && d.label < C[2]) {
                        d.label = C[2], d.ops.push(T);
                        break;
                      }
                      C[2] && d.ops.pop(), d.trys.pop();
                      continue;
                  }
                  T = e.call(r, d);
                } catch (f) {
                  T = [6, f], u = 0;
                } finally {
                  l = C = 0;
                }
                if (5 & T[0]) throw T[1];
                return {
                  value: T[0] ? T[1] : void 0,
                  done: !0
                };
              })([h, I]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MessageListnerMaping = void 0;
        var S = g(1), E = g(0), n = g(12), o = g(6), s = g(16);
        a.MessageListnerMaping = (function() {
          function r(e) {
            this.store = E.constants.DEFAULT_STORE, this.initializationPromise = null, this.isInitialized = !1, S.isFalsy(e) || (this.store = e);
          }
          return r.prototype.initializeStorage = function() {
            return p(this, void 0, void 0, function() {
              var e;
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    if (this.initializationPromise) return [2, this.initializationPromise];
                    if (this.isInitialized && this.settingsStore) return [2, Promise.resolve()];
                    l.label = 1;
                  case 1:
                    return l.trys.push([
                      1,
                      3,
                      ,
                      4
                    ]), this.initializationPromise = this.doInitializeStorage(), [4, this.initializationPromise];
                  case 2:
                    return l.sent(), this.isInitialized = !0, [3, 4];
                  case 3:
                    throw e = l.sent(), this.initializationPromise = null, this.isInitialized = !1, e;
                  case 4:
                    return [2];
                }
              });
            });
          }, r.prototype.doInitializeStorage = function() {
            var e;
            return p(this, void 0, void 0, function() {
              var l, u;
              return i(this, function(C) {
                switch (C.label) {
                  case 0:
                    if (this.settingsStore && this.isInitialized) return [2];
                    C.label = 1;
                  case 1:
                    return C.trys.push([
                      1,
                      5,
                      ,
                      7
                    ]), (l = s.StorageManager.getInstance()).isStorageInitialized() ? (this.settingsStore = l.getStorage(o.CometChat.getAppId(), E.LOCAL_STORE.MESSAGE_LISTENERS_LIST), [3, 4]) : [3, 2];
                  case 2:
                    return u = ((e = o.CometChat.appSettings) === null || e === void 0 ? void 0 : e.getStorageMode()) || E.StorageMode.LOCAL, [4, l.initialize(u)];
                  case 3:
                    C.sent(), this.settingsStore = l.getStorage(o.CometChat.getAppId(), E.LOCAL_STORE.MESSAGE_LISTENERS_LIST), C.label = 4;
                  case 4:
                    return [3, 7];
                  case 5:
                    return C.sent(), this.settingsStore = n.createInstance({ name: S.format(E.LOCAL_STORE.STORE_STRING, o.CometChat.getAppId(), E.LOCAL_STORE.MESSAGE_LISTENERS_LIST) }), [4, this.settingsStore.setDriver([
                      n.LOCALSTORAGE,
                      n.INDEXEDDB,
                      n.WEBSQL
                    ])];
                  case 6:
                    return C.sent(), [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }, r.getInstance = function() {
            return r.settingsStore ??= new r(), r.settingsStore;
          }, r.prototype.set = function(e, l) {
            return p(this, void 0, void 0, function() {
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return u.sent(), [2, this.settingsStore.setItem(e, l)];
                }
              });
            });
          }, r.prototype.remove = function(e) {
            return p(this, void 0, void 0, function() {
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return l.sent(), [2, this.settingsStore.removeItem(e)];
                }
              });
            });
          }, r.prototype.get = function(e) {
            return p(this, void 0, void 0, function() {
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return l.sent(), [2, this.settingsStore.getItem(e)];
                }
              });
            });
          }, r.prototype.clearStore = function() {
            return p(this, void 0, void 0, function() {
              return i(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return e.sent(), [2, this.settingsStore.clear()];
                }
              });
            });
          }, r.prototype.clear = function(e) {
          }, r.prototype.selectStore = function(e) {
            this.store = e;
          }, r.settingsStore = null, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.TypingIndicator = void 0, a.TypingIndicator = (function() {
          function p(i, S, E) {
            this.receiverId = i, this.receiverType = S, this.metadata = E;
          }
          return p.prototype.getReceiverType = function() {
            return this.receiverType;
          }, p.prototype.setReceiverType = function(i) {
            this.receiverType = i;
          }, p.prototype.getReceiverId = function() {
            return this.receiverId;
          }, p.prototype.setReceiverId = function(i) {
            this.receiverId = i;
          }, p.prototype.getMetadata = function() {
            return this.metadata;
          }, p.prototype.setMetadata = function(i) {
            this.metadata = i;
          }, p.prototype.getSender = function() {
            return this.sender;
          }, p.prototype.setSender = function(i) {
            this.sender = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AppSettingsBuilder = a.AppSettings = void 0;
        var p = g(0), i = (function() {
          function S(E) {
            this.subscriptionType = S.SUBSCRIPTION_TYPE_NONE, this.roles = null, this.region = p.DEFAULT_VALUES.REGION_DEFAULT, this.autoJoinGroup = !0, this.establishSocketConnection = !0, this.adminHost = null, this.clientHost = null, this.storageMode = p.StorageMode.LOCAL, this.subscriptionType = E.subscriptionType, this.roles = E.roles, this.region = E.region, this.autoJoinGroup = E.autoJoinGroup, this.establishSocketConnection = E.establishSocketConnection, this.adminHost = E.adminHost, this.clientHost = E.clientHost, this.storageMode = E.storageMode;
          }
          return S.prototype.getSubscriptionType = function() {
            return this.subscriptionType;
          }, S.prototype.getRoles = function() {
            return this.roles;
          }, S.prototype.getRegion = function() {
            return this.region;
          }, S.prototype.getIsAutoJoinEnabled = function() {
            return this.autoJoinGroup;
          }, S.prototype.shouldAutoEstablishSocketConnection = function() {
            return this.establishSocketConnection;
          }, S.prototype.getAdminHost = function() {
            return this.adminHost;
          }, S.prototype.getClientHost = function() {
            return this.clientHost;
          }, S.prototype.getStorageMode = function() {
            return this.storageMode;
          }, S.SUBSCRIPTION_TYPE_NONE = "NONE", S.SUBSCRIPTION_TYPE_ALL_USERS = "ALL_USERS", S.SUBSCRIPTION_TYPE_ROLES = "ROLES", S.SUBSCRIPTION_TYPE_FRIENDS = "FRIENDS", S.REGION_EU = p.DEFAULT_VALUES.REGION_DEFAULT_EU, S.REGION_US = p.DEFAULT_VALUES.REGION_DEFAULT_US, S.REGION_IN = p.DEFAULT_VALUES.REGION_DEFAULT_IN, S.REGION_PRIVATE = p.DEFAULT_VALUES.REGION_DEFAULT_PRIVATE, S.STORAGE_MODE_LOCAL = p.StorageMode.LOCAL, S.STORAGE_MODE_SESSION = p.StorageMode.SESSION, S;
        })();
        a.AppSettings = i, a.AppSettingsBuilder = (function() {
          function S() {
            this.subscriptionType = i.SUBSCRIPTION_TYPE_NONE, this.roles = null, this.region = p.DEFAULT_VALUES.REGION_DEFAULT, this.autoJoinGroup = !0, this.establishSocketConnection = !0, this.adminHost = null, this.clientHost = null, this.storageMode = p.StorageMode.LOCAL;
          }
          return S.prototype.subscribePresenceForAllUsers = function() {
            return this.subscriptionType = i.SUBSCRIPTION_TYPE_ALL_USERS, this;
          }, S.prototype.subscribePresenceForRoles = function(E) {
            return this.subscriptionType = i.SUBSCRIPTION_TYPE_ROLES, this.roles = E, this;
          }, S.prototype.subscribePresenceForFriends = function() {
            return this.subscriptionType = i.SUBSCRIPTION_TYPE_FRIENDS, this;
          }, S.prototype.setRegion = function(E) {
            return E === void 0 && (E = p.DEFAULT_VALUES.REGION_DEFAULT), this.region = E.toLowerCase(), this;
          }, S.prototype.enableAutoJoinForGroups = function(E) {
            return E === void 0 && (E = !0), this.autoJoinGroup = E, this;
          }, S.prototype.autoEstablishSocketConnection = function(E) {
            return E === void 0 && (E = !0), this.establishSocketConnection = E, this;
          }, S.prototype.overrideAdminHost = function(E) {
            return this.adminHost = E, this;
          }, S.prototype.overrideClientHost = function(E) {
            return this.clientHost = E, this;
          }, S.prototype.setStorageMode = function(E) {
            return this.storageMode = E, this;
          }, S.prototype.build = function() {
            return new i(this);
          }, S;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__spreadArrays || function() {
          for (var o = 0, s = 0, r = arguments.length; s < r; s++) o += arguments[s].length;
          var e = Array(o), l = 0;
          for (s = 0; s < r; s++) for (var u = arguments[s], C = 0, c = u.length; C < c; C++, l++) e[l] = u[C];
          return e;
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ListenerHandlers = void 0;
        var i = g(1), S = g(35), E = g(63), n = g(40);
        a.ListenerHandlers = (function() {
          function o() {
            this.connectionHandlers = [], this.loginHandlers = [], this.messageHandlers = [], this.userHandlers = [], this.groupHandlers = [], this.callHandlers = [], this.assistantHandlers = [], this.notificationFeedHandlers = [], this.conversationHandlers = [];
          }
          return o.getInstance = function() {
            return this.listenerHandlers != null && this.listenerHandlers != null || (this.listenerHandlers = new o()), this.listenerHandlers;
          }, o.prototype.addConnectionEventListener = function(s, r) {
            try {
              this.connectionHandlers = this.connectionHandlers.filter(function(e) {
                return e._name != s;
              }), this.connectionHandlers = p(this.connectionHandlers, [new S.WSConnectionListener(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addWSConnectionEventListener", e);
            }
          }, o.prototype.removeConnectionEventListener = function(s) {
            try {
              this.connectionHandlers = this.connectionHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeWSConnectionEventListener", r);
            }
          }, o.prototype.addLoginEventListener = function(s, r) {
            try {
              this.loginHandlers = this.loginHandlers.filter(function(e) {
                return e._name != s;
              }), this.loginHandlers = p(this.loginHandlers, [new S.UserLoginListener(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addLoginEventListener", e);
            }
          }, o.prototype.removeLoginEventListener = function(s) {
            try {
              this.loginHandlers = this.loginHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeLoginEventListener", r);
            }
          }, o.prototype.addMessageEventListener = function(s, r) {
            try {
              this.messageHandlers = this.messageHandlers.filter(function(e) {
                return e._name != s;
              }), this.messageHandlers = p(this.messageHandlers, [new S.MessagesListener(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addMessageEventListener", e);
            }
          }, o.prototype.removeMessageEventListener = function(s) {
            try {
              this.messageHandlers = this.messageHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeMessageEventListener", r);
            }
          }, o.prototype.addAIAssistantListener = function(s, r) {
            try {
              this.assistantHandlers = this.assistantHandlers.filter(function(e) {
                return e._name != s;
              }), this.assistantHandlers = p(this.assistantHandlers, [new S.AssistantsListener(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addAIAssistantListener", e);
            }
          }, o.prototype.removeAIAssistantListener = function(s) {
            try {
              this.assistantHandlers = this.assistantHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeAIAssistantListener", r);
            }
          }, o.prototype.addUserEventListener = function(s, r) {
            try {
              this.userHandlers = this.userHandlers.filter(function(e) {
                return e._name != s;
              }), this.userHandlers = p(this.userHandlers, [new S.UsersListener(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addUserEventListener", e);
            }
          }, o.prototype.removeUserEventListener = function(s) {
            try {
              this.userHandlers = this.userHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeUserEventListener", r);
            }
          }, o.prototype.addGroupEventListener = function(s, r) {
            try {
              this.groupHandlers = this.groupHandlers.filter(function(e) {
                return e._name != s;
              }), this.groupHandlers = p(this.groupHandlers, [new S.GroupsListener(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addGroupEventListener", e);
            }
          }, o.prototype.removeGroupEventListener = function(s) {
            try {
              this.groupHandlers = this.groupHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeGroupEventListener", r);
            }
          }, o.prototype.addCallEventListener = function(s, r) {
            try {
              this.callHandlers = this.callHandlers.filter(function(e) {
                return e._name != s;
              }), this.callHandlers = p(this.callHandlers, [new S.CallsListener(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addCallEventListener", e);
            }
          }, o.prototype.removeCallEventListener = function(s) {
            try {
              this.callHandlers = this.callHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeCallEventListener", r);
            }
          }, o.prototype.addNotificationFeedEventListener = function(s, r) {
            try {
              this.notificationFeedHandlers = this.notificationFeedHandlers.filter(function(e) {
                return e._name !== s;
              }), this.notificationFeedHandlers = p(this.notificationFeedHandlers, [new E.NotificationFeedListenerWrapper(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addNotificationFeedEventListener", e);
            }
          }, o.prototype.removeNotificationFeedEventListener = function(s) {
            try {
              this.notificationFeedHandlers = this.notificationFeedHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeNotificationFeedEventListener", r);
            }
          }, o.prototype.addConversationEventListener = function(s, r) {
            try {
              this.conversationHandlers = this.conversationHandlers.filter(function(e) {
                return e._name !== s;
              }), this.conversationHandlers = p(this.conversationHandlers, [new n.ConversationListenerWrapper(s, r)]);
            } catch (e) {
              i.Logger.error("ListenerHandlers: addConversationEventListener", e);
            }
          }, o.prototype.removeConversationEventListener = function(s) {
            try {
              this.conversationHandlers = this.conversationHandlers.filter(function(r) {
                return r._name !== s;
              });
            } catch (r) {
              i.Logger.error("ListenerHandlers: removeConversationEventListener", r);
            }
          }, o.listenerHandlers = new o(), o;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ConversationListenerWrapper = a.ConversationListener = void 0;
        var p = g(1), i = function() {
          for (var E = [], n = 0; n < arguments.length; n++) E[n] = arguments[n];
          this.onConversationPinned = void 0, this.onConversationUnpinned = void 0, E[0] && !p.isFalsy(E[0].onConversationPinned) && (this.onConversationPinned = E[0].onConversationPinned), E[0] && !p.isFalsy(E[0].onConversationUnpinned) && (this.onConversationUnpinned = E[0].onConversationUnpinned);
        };
        a.ConversationListener = i;
        var S = function(E, n) {
          this._name = E, this._eventListener = n;
        };
        a.ConversationListenerWrapper = S;
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Reaction = void 0;
        var p = g(3), i = g(1);
        a.Reaction = (function() {
          function S(E, n, o, s, r, e) {
            i.isFalsy(E) || (this.id = E), i.isFalsy(n) || (this.messageId = n), i.isFalsy(o) || (this.reaction = o), i.isFalsy(s) || (this.uid = s), i.isFalsy(r) || (this.reactedAt = r), i.isFalsy(e) || (this.reactedBy = e);
          }
          return S.prototype.getReactionId = function() {
            return this.id;
          }, S.prototype.setReactionId = function(E) {
            this.id = E;
          }, S.prototype.getMessageId = function() {
            return this.messageId;
          }, S.prototype.setMessageId = function(E) {
            this.messageId = E;
          }, S.prototype.getReaction = function() {
            return this.reaction;
          }, S.prototype.setReaction = function(E) {
            this.reaction = E;
          }, S.prototype.getUid = function() {
            return this.uid;
          }, S.prototype.setUid = function(E) {
            this.uid = E;
          }, S.prototype.getReactedAt = function() {
            return this.reactedAt;
          }, S.prototype.setReactedAt = function(E) {
            this.reactedAt = E;
          }, S.prototype.getReactedBy = function() {
            return new p.User(this.reactedBy);
          }, S.prototype.setReactedBy = function(E) {
            this.reactedBy = E;
          }, S;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.TransientMessage = void 0, a.TransientMessage = (function() {
          function p(i, S, E) {
            this.receiverId = i, this.receiverType = S, this.data = E || {};
          }
          return p.prototype.getReceiverId = function() {
            return this.receiverId;
          }, p.prototype.setReceiverId = function(i) {
            this.receiverId = i;
          }, p.prototype.getReceiverType = function() {
            return this.receiverType;
          }, p.prototype.setReceiverType = function(i) {
            this.receiverType = i;
          }, p.prototype.getData = function() {
            return this.data;
          }, p.prototype.setData = function(i) {
            this.data = i;
          }, p.prototype.getSender = function() {
            return this.sender;
          }, p.prototype.setSender = function(i) {
            this.sender = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.NotificationFeedItem = void 0, a.NotificationFeedItem = (function() {
          function p(i) {
            i && (this.id = i.id || "", this.category = i.templateCategory || i.category || "", this.content = i.content || {}, this.readAt = i.readAt !== void 0 ? i.readAt : null, this.deliveredAt = i.deliveredAt !== void 0 ? i.deliveredAt : null, this.sentAt = i.sentAt || 0, this.metadata = i.metadata || {}, this.tags = i.tags || [], this.sender = i.sender || "server", this.receiver = i.receiver || "", this.receiverType = i.receiverType || "user");
          }
          return p.prototype.getId = function() {
            return this.id;
          }, p.prototype.setId = function(i) {
            this.id = i;
          }, p.prototype.getCategory = function() {
            return this.category;
          }, p.prototype.setCategory = function(i) {
            this.category = i;
          }, p.prototype.getContent = function() {
            return this.content;
          }, p.prototype.setContent = function(i) {
            this.content = i;
          }, p.prototype.getReadAt = function() {
            return this.readAt;
          }, p.prototype.setReadAt = function(i) {
            this.readAt = i;
          }, p.prototype.getDeliveredAt = function() {
            return this.deliveredAt;
          }, p.prototype.setDeliveredAt = function(i) {
            this.deliveredAt = i;
          }, p.prototype.getSentAt = function() {
            return this.sentAt;
          }, p.prototype.setSentAt = function(i) {
            this.sentAt = i;
          }, p.prototype.getMetadata = function() {
            return this.metadata;
          }, p.prototype.setMetadata = function(i) {
            this.metadata = i;
          }, p.prototype.getTags = function() {
            return this.tags;
          }, p.prototype.setTags = function(i) {
            this.tags = i;
          }, p.prototype.getSender = function() {
            return this.sender;
          }, p.prototype.setSender = function(i) {
            this.sender = i;
          }, p.prototype.getReceiver = function() {
            return this.receiver;
          }, p.prototype.setReceiver = function(i) {
            this.receiver = i;
          }, p.prototype.getReceiverType = function() {
            return this.receiverType;
          }, p.prototype.setReceiverType = function(i) {
            this.receiverType = i;
          }, p.prototype.getIsRead = function() {
            return this.readAt !== null;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CAMPAIGN_PAGINATION = a.CAMPAIGN_ERRORS = a.CAMPAIGN_DEFAULTS = a.CAMPAIGN_ENDPOINTS = a.WS_ACTION_DELETED = a.WS_ACTION_READ = a.WS_ACTION_DELIVERED = a.WS_ACTION_SENT = a.WS_TYPE_NOTIFICATION_FEED_ITEM = a.NOTIFICATION_CATEGORIES_LIST = a.PUSH_NOTIFICATION_MARK_CLICKED = a.PUSH_NOTIFICATION_MARK_DELIVERED = a.NOTIFICATION_FEED_ENGAGEMENT = a.NOTIFICATION_FEED_MARK_READ = a.NOTIFICATION_FEED_MARK_DELIVERED = a.NOTIFICATION_FEED_UNREAD_COUNT = a.NOTIFICATION_FEED_ITEM = a.NOTIFICATION_FEED_LIST = a.CAMPAIGN_PATH_PREFIX = void 0, a.CAMPAIGN_PATH_PREFIX = "campaigns", a.NOTIFICATION_FEED_LIST = "campaigns/notification-feed", a.NOTIFICATION_FEED_ITEM = "campaigns/notification-feed/{{feedItemId}}", a.NOTIFICATION_FEED_UNREAD_COUNT = "campaigns/notification-feed/unread-count", a.NOTIFICATION_FEED_MARK_DELIVERED = "campaigns/notification-feed/{{feedItemId}}/delivered", a.NOTIFICATION_FEED_MARK_READ = "campaigns/notification-feed/{{feedItemId}}/read", a.NOTIFICATION_FEED_ENGAGEMENT = "campaigns/notification-feed/{{feedItemId}}/engagement", a.PUSH_NOTIFICATION_MARK_DELIVERED = "campaigns/push-notifications/{{pushNotificationId}}/delivered", a.PUSH_NOTIFICATION_MARK_CLICKED = "campaigns/push-notifications/{{pushNotificationId}}/clicked", a.NOTIFICATION_CATEGORIES_LIST = "campaigns/templates/categories", a.WS_TYPE_NOTIFICATION_FEED_ITEM = "notification_feed_item", a.WS_ACTION_SENT = "sent", a.WS_ACTION_DELIVERED = "delivered", a.WS_ACTION_READ = "read", a.WS_ACTION_DELETED = "deleted", a.CAMPAIGN_ENDPOINTS = {
          NOTIFICATION_FEED_LIST: "notificationFeedList",
          NOTIFICATION_FEED_ITEM: "notificationFeedItem",
          NOTIFICATION_FEED_UNREAD_COUNT: "notificationFeedUnreadCount",
          NOTIFICATION_FEED_MARK_DELIVERED: "notificationFeedMarkDelivered",
          NOTIFICATION_FEED_MARK_READ: "notificationFeedMarkRead",
          NOTIFICATION_FEED_ENGAGEMENT: "notificationFeedEngagement",
          PUSH_NOTIFICATION_MARK_DELIVERED: "pushNotificationMarkDelivered",
          PUSH_NOTIFICATION_MARK_CLICKED: "pushNotificationMarkClicked",
          NOTIFICATION_CATEGORIES_LIST: "notificationCategoriesList"
        }, a.CAMPAIGN_DEFAULTS = {
          NOTIFICATION_FEED_LIMIT: 20,
          NOTIFICATION_FEED_MAX_LIMIT: 100,
          CATEGORIES_LIMIT: 50,
          CATEGORIES_MAX_LIMIT: 100
        }, a.CAMPAIGN_ERRORS = {
          FEED_ITEM_NOT_FOUND: "FEED_ITEM_NOT_FOUND",
          PUSH_NOTIFICATION_NOT_FOUND: "PUSH_NOTIFICATION_NOT_FOUND",
          VALIDATION_ERROR: "VALIDATION_ERROR",
          RATE_LIMITED: "RATE_LIMITED",
          UNAUTHORIZED: "UNAUTHORIZED"
        }, a.CAMPAIGN_PAGINATION = {
          KEYS: {
            LIMIT: "limit",
            CURSOR: "cursor",
            READ_STATE: "readState",
            CATEGORY: "templateCategory",
            CHANNEL_ID: "channelId",
            TAGS: "tags",
            TAG_MATCH: "tagMatch",
            DATE_FROM: "dateFrom",
            DATE_TO: "dateTo",
            AFFIX: "affix"
          },
          AFFIX: {
            APPEND: "append",
            PREPEND: "prepend"
          }
        };
      },
      function(j, a, g) {
        "use strict";
        var p, i;
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UploadStatus = a.UploadFileStatus = void 0, (p = a.UploadFileStatus || (a.UploadFileStatus = {})).QUEUED = "queued", p.REQUESTING_URL = "requesting_url", p.UPLOADING = "uploading", p.UPLOADED = "uploaded", p.FAILED = "failed", p.REJECTED = "rejected", p.CANCELLED = "cancelled", (i = a.UploadStatus || (a.UploadStatus = {})).IN_PROGRESS = "in_progress", i.IDLE = "idle";
      },
      function(j, a, g) {
        var p = g(123), i = g(124);
        j.exports = function(S, E, n) {
          var o = E && n || 0;
          typeof S == "string" && (E = S === "binary" ? new Array(16) : null, S = null);
          var s = (S = S || {}).random || (S.rng || p)();
          if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, E) for (var r = 0; r < 16; ++r) E[o + r] = s[r];
          return E || i(s);
        };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatNotifications = a.CometChat = a.init = void 0;
        var p = g(6), i = g(125);
        a.init = function(l) {
          return p.CometChat.getInstance(l);
        }, a.CometChat = p.CometChat, a.CometChatNotifications = i.CometChatNotifications;
        var S = g(33);
        Object.defineProperty(a, "MessageThread", {
          enumerable: !0,
          get: function() {
            return S.MessageThread;
          }
        });
        var E = g(68);
        Object.defineProperty(a, "ThreadsRequest", {
          enumerable: !0,
          get: function() {
            return E.ThreadsRequest;
          }
        }), Object.defineProperty(a, "ThreadsRequestBuilder", {
          enumerable: !0,
          get: function() {
            return E.ThreadsRequestBuilder;
          }
        });
        var n = g(14);
        Object.defineProperty(a, "PIN_SAVE_ERROR_CODES", {
          enumerable: !0,
          get: function() {
            return n.PIN_SAVE_ERROR_CODES;
          }
        }), Object.defineProperty(a, "PIN_SAVE_DEFAULTS", {
          enumerable: !0,
          get: function() {
            return n.PIN_SAVE_DEFAULTS;
          }
        }), Object.defineProperty(a, "PINNED_BY", {
          enumerable: !0,
          get: function() {
            return n.PINNED_BY;
          }
        });
        var o = g(40);
        Object.defineProperty(a, "ConversationListener", {
          enumerable: !0,
          get: function() {
            return o.ConversationListener;
          }
        });
        var s = g(71);
        Object.defineProperty(a, "UploadFileListener", {
          enumerable: !0,
          get: function() {
            return s.UploadFileListener;
          }
        });
        var r = g(72);
        Object.defineProperty(a, "UploadFileRequest", {
          enumerable: !0,
          get: function() {
            return r.UploadFileRequest;
          }
        });
        var e = g(45);
        Object.defineProperty(a, "UploadStatus", {
          enumerable: !0,
          get: function() {
            return e.UploadStatus;
          }
        });
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.EndpointFactory = void 0;
        var p = g(1), i = g(0), S = g(19), E = g(6), n = g(2);
        a.EndpointFactory = (function() {
          function o() {
            this.baseUrl = "https://%s.apiclient-%s.cometchat.io/", this.apiVersion = i.APPINFO.apiVersion, this.adminApiUrl = "https://%s.api-%s.cometchat.io/", this.adminApiVersion = i.APPINFO.apiVersion, this.extensionApi = "https://%s-%s.%s/%s", this.prosodyApi = "https://%s.%s/%s", this.wsApi = "https://%s/%s", this.uriEndpoints = {
              authToken: {
                endpoint: "users/{{uid}}/auth_tokens",
                method: "POST",
                data: { uid: "string|max:100" },
                isAdminApi: !0
              },
              appSettings: {
                endpoint: "settings",
                method: "GET"
              },
              login: {
                endpoint: "admin/users/auth",
                method: "POST",
                data: { uid: "string|max:100" }
              },
              logout: {
                endpoint: "admin/users/auth/{{authToken}}",
                method: "DELETE"
              },
              getMyDetails: {
                endpoint: "me",
                method: "GET"
              },
              updateMyDetails: {
                endpoint: "me",
                method: "PUT"
              },
              getJWT: {
                endpoint: "me/jwt",
                method: "POST"
              },
              userSessions: {
                endpoint: "user_sessions",
                method: "POST"
              },
              users: {
                endpoint: "users",
                method: "GET"
              },
              user: {
                endpoint: "users/{{uid}}",
                method: "GET"
              },
              blockUsers: {
                endpoint: "blockedusers",
                method: "POST"
              },
              blockedUsersList: {
                endpoint: "blockedusers",
                method: "GET"
              },
              unblockUsers: {
                endpoint: "blockedusers",
                method: "DELETE"
              },
              userLogout: {
                endpoint: "me",
                method: "DELETE"
              },
              createUser: {
                endpoint: "users",
                method: "POST",
                isAdminApi: !0
              },
              updateUser: {
                endpoint: "users/{{uid}}",
                method: "PUT",
                isAdminApi: !0
              },
              createGroup: {
                endpoint: "groups",
                method: "POST",
                data: {
                  guid: "required|string|max:100",
                  name: "required|string|max:100",
                  type: "enum|public,protected,password",
                  password: "filled|string|max:100"
                }
              },
              getGroups: {
                endpoint: "groups",
                method: "GET"
              },
              getGroup: {
                endpoint: "groups/{{guid}}",
                method: "GET"
              },
              updateGroup: {
                endpoint: "groups/{{guid}}",
                method: "PUT"
              },
              deleteGroup: {
                endpoint: "groups/{{guid}}",
                method: "DELETE"
              },
              addGroupMembers: {
                endpoint: "groups/{{guid}}/members",
                method: "POST",
                data: { uids: "array<string|max:100>" }
              },
              getGroupMembers: {
                endpoint: "groups/{{guid}}/members",
                method: "GET"
              },
              joinGroup: {
                endpoint: "groups/{{guid}}/members",
                method: "POST"
              },
              leaveGroup: {
                endpoint: "groups/{{guid}}/members",
                method: "DELETE"
              },
              kickGroupMembers: {
                endpoint: "groups/{{guid}}/members/{{uid}}",
                method: "DELETE",
                data: { uids: "array<string|max:100>" }
              },
              changeScopeOfMember: {
                endpoint: "groups/{{guid}}/members/{{uid}}",
                method: "PUT",
                data: { uids: "array<string|max:100>" }
              },
              banGroupMember: {
                endpoint: "groups/{{guid}}/bannedusers/{{uid}}",
                method: "POST",
                data: { uids: "array<string|max:100>" }
              },
              unbanGroupMember: {
                endpoint: "groups/{{guid}}/bannedusers/{{uid}}",
                method: "DELETE",
                data: { uids: "array<string|max:100>" }
              },
              addMemebersToGroup: {
                endpoint: "groups/{{guid}}/members",
                method: "PUT"
              },
              getBannedGroupMembers: {
                endpoint: "groups/{{guid}}/bannedusers",
                method: "GET"
              },
              promotemoteGroupMember: {
                endpoint: "groups/{{guid}}/promote",
                method: "PUT",
                data: { uids: "array<string|max:100>" }
              },
              demoteGroupMember: {
                endpoint: "groups/{{guid}}/demote",
                method: "DELETE",
                data: { uids: "array<string|max:100>" }
              },
              transferOwnership: {
                endpoint: "groups/{{guid}}/owner",
                method: "PATCH"
              },
              sendMessage: {
                endpoint: "messages",
                method: "POST",
                data: {
                  sender: "array:string:max:100>",
                  isGroupMember: "filled|boolean|bail",
                  data: "required|json"
                }
              },
              sendMessageInThread: {
                endpoint: "messages/{{parentId}}/thread",
                method: "POST",
                data: {
                  sender: "array:string:max:100>",
                  isGroupMember: "filled|boolean|bail",
                  data: "required|json"
                }
              },
              getMessages: {
                endpoint: "messages",
                method: "GET"
              },
              filesUploadUrl: {
                endpoint: "files/upload-url",
                method: "POST"
              },
              getMessageDetails: {
                endpoint: "messages/{{messageId}}",
                method: "GET"
              },
              flagMessage: {
                endpoint: "messages/{{messageId}}/flagged",
                method: "POST"
              },
              addReaction: {
                endpoint: "messages/{{messageId}}/reactions/{{reaction}}",
                method: "POST"
              },
              removeReaction: {
                endpoint: "messages/{{messageId}}/reactions/{{reaction}}",
                method: "DELETE"
              },
              getFilteredReactionsList: {
                endpoint: "messages/{{messageId}}/reactions/{{reaction}}",
                method: "GET",
                data: {}
              },
              getReactionsList: {
                endpoint: "messages/{{messageId}}/reactions",
                method: "GET",
                data: {}
              },
              getUserMessages: {
                endpoint: "users/{{listId}}/messages",
                method: "GET"
              },
              getGroupMessages: {
                endpoint: "groups/{{listId}}/messages",
                method: "GET"
              },
              getThreadMessages: {
                endpoint: "messages/{{listId}}/thread",
                method: "GET"
              },
              getMessage: {
                endpoint: "user/messages/{{muid}}",
                method: "GET"
              },
              updateMessage: {
                endpoint: "messages/{{messageId}}",
                method: "PUT"
              },
              deleteMessage: {
                endpoint: "messages/{{messageId}}",
                method: "DELETE"
              },
              markUserMessagesAsUnread: {
                endpoint: "users/{{uid}}/conversation/read",
                method: "DELETE"
              },
              markGroupMessagesAsUnread: {
                endpoint: "groups/{{guid}}/conversation/read",
                method: "DELETE"
              },
              threads: {
                endpoint: "threads",
                method: "GET"
              },
              groupThreads: {
                endpoint: "groups/{{guid}}/threads",
                method: "GET"
              },
              userThreads: {
                endpoint: "users/{{uid}}/threads",
                method: "GET"
              },
              subscribeToThread: {
                endpoint: "messages/{{messageId}}/thread/subscription",
                method: "POST"
              },
              unsubscribeFromThread: {
                endpoint: "messages/{{messageId}}/thread/subscription",
                method: "DELETE"
              },
              pinMessage: {
                endpoint: "messages/{{messageId}}/pin",
                method: "POST"
              },
              unpinMessage: {
                endpoint: "messages/{{messageId}}/pin",
                method: "DELETE"
              },
              saveMessage: {
                endpoint: "messages/{{messageId}}/save",
                method: "POST"
              },
              unsaveMessage: {
                endpoint: "messages/{{messageId}}/save",
                method: "DELETE"
              },
              pinUserConversation: {
                endpoint: "users/{{uid}}/conversation/pin",
                method: "POST"
              },
              unpinUserConversation: {
                endpoint: "users/{{uid}}/conversation/pin",
                method: "DELETE"
              },
              pinGroupConversation: {
                endpoint: "groups/{{guid}}/conversation/pin",
                method: "POST"
              },
              unpinGroupConversation: {
                endpoint: "groups/{{guid}}/conversation/pin",
                method: "DELETE"
              },
              createCallSession: {
                endpoint: "calls",
                method: "POST",
                data: {}
              },
              updateCallSession: {
                endpoint: "calls/{{sessionid}}",
                method: "put",
                data: {}
              },
              getConversations: {
                endpoint: "conversations",
                method: "GET"
              },
              getUserConversation: {
                endpoint: "users/{{uid}}/conversation",
                method: "GET"
              },
              getGroupConversation: {
                endpoint: "groups/{{guid}}/conversation",
                method: "GET"
              },
              deleteUserConversation: {
                endpoint: "users/{{uid}}/conversation",
                method: "DELETE"
              },
              deleteGroupConversation: {
                endpoint: "groups/{{guid}}/conversation",
                method: "DELETE"
              },
              updateUserConversation: {
                endpoint: "users/{{uid}}/conversation",
                method: "PUT"
              },
              markGroupConversationAsRead: {
                endpoint: "groups/{{guid}}/conversation/read",
                method: "POST"
              },
              markUserConversationAsRead: {
                endpoint: "users/{{uid}}/conversation/read",
                method: "POST"
              },
              markGroupConversationAsDelivered: {
                endpoint: "groups/{{guid}}/conversation/delivered",
                method: "POST"
              },
              markUserConversationAsDelivered: {
                endpoint: "users/{{uid}}/conversation/delivered",
                method: "POST"
              },
              updateGroupConversation: {
                endpoint: "groups/{{guid}}/conversation",
                method: "PUT"
              },
              updateCallType: {
                endpoint: "calls/{{sessionid}}/type",
                method: "PATCH"
              },
              getUserConversationStarter: {
                endpoint: "ai/conversation-starter/users/{{uid}}",
                method: "GET",
                isAIApi: !0
              },
              getGroupConversationStarter: {
                endpoint: "ai/conversation-starter/groups/{{guid}}",
                method: "GET",
                isAIApi: !0
              },
              getUserSmartReply: {
                endpoint: "ai/smart-replies/users/{{uid}}",
                method: "GET",
                isAIApi: !0
              },
              getGroupSmartReply: {
                endpoint: "ai/smart-replies/groups/{{guid}}",
                method: "GET",
                isAIApi: !0
              },
              markInteracted: {
                endpoint: "messages/{{messageId}}/interacted",
                method: "PATCH"
              },
              getUserConversationSummary: {
                endpoint: "ai/conversation-summary/users/{{uid}}",
                method: "GET",
                isAIApi: !0
              },
              getGroupConversationSummary: {
                endpoint: "ai/conversation-summary/groups/{{guid}}",
                method: "GET",
                isAIApi: !0
              },
              getBotAssistanceInUserConversation: {
                endpoint: "ai/bots/{{botId}}/assistance/users/{{uid}}",
                method: "GET",
                isAIApi: !0
              },
              getBotAssistanceInGroupConversation: {
                endpoint: "ai/bots/{{botId}}/assistance/groups/{{guid}}",
                method: "GET",
                isAIApi: !0
              },
              getPushPreferences: {
                endpoint: "notifications/push/v1/preferences",
                method: "GET"
              },
              updatePushPreferences: {
                endpoint: "notifications/push/v1/preferences",
                method: "PATCH"
              },
              resetPushPreferences: {
                endpoint: "notifications/push/v1/preferences",
                method: "DELETE"
              },
              registerToken: {
                endpoint: "notifications/push/v1/tokens",
                method: "POST"
              },
              unregisterToken: {
                endpoint: "notifications/push/v1/tokens",
                method: "DELETE"
              },
              muteConversations: {
                endpoint: "notifications/push/v1/preferences/mute",
                method: "PUT"
              },
              unmuteConversations: {
                endpoint: "notifications/push/v1/preferences/mute",
                method: "DELETE"
              },
              getMutedConversations: {
                endpoint: "notifications/push/v1/preferences/mute",
                method: "GET"
              },
              updateTimezone: {
                endpoint: "notifications/v1/preferences/timezone",
                method: "PATCH"
              },
              getTimezone: {
                endpoint: "notifications/v1/preferences/timezone",
                method: "GET"
              },
              notificationFeedList: {
                endpoint: "campaigns/notification-feed",
                method: "GET",
                isCampaignApi: !0
              },
              notificationFeedItem: {
                endpoint: "campaigns/notification-feed/{{feedItemId}}",
                method: "GET",
                isCampaignApi: !0
              },
              notificationFeedUnreadCount: {
                endpoint: "campaigns/notification-feed/unread-count",
                method: "GET",
                isCampaignApi: !0
              },
              notificationFeedMarkDelivered: {
                endpoint: "campaigns/notification-feed/{{feedItemId}}/delivered",
                method: "POST",
                isCampaignApi: !0
              },
              notificationFeedMarkRead: {
                endpoint: "campaigns/notification-feed/{{feedItemId}}/read",
                method: "POST",
                isCampaignApi: !0
              },
              notificationFeedEngagement: {
                endpoint: "campaigns/notification-feed/{{feedItemId}}/engagement",
                method: "POST",
                isCampaignApi: !0
              },
              pushNotificationMarkDelivered: {
                endpoint: "campaigns/push-notifications/{{pushNotificationId}}/delivered",
                method: "PUT",
                isCampaignApi: !0
              },
              pushNotificationMarkClicked: {
                endpoint: "campaigns/push-notifications/{{pushNotificationId}}/clicked",
                method: "PUT",
                isCampaignApi: !0
              },
              notificationCategoriesList: {
                endpoint: "campaigns/templates/categories",
                method: "GET",
                isCampaignApi: !0
              }
            };
          }
          return o.prototype.getEndpointData = function(s) {
            return new Promise(function(r, e) {
              try {
                var l = E.CometChat.appSettings.getAdminHost(), u = E.CometChat.appSettings.getClientHost();
                S.LocalStorage.getInstance().get(i.LOCAL_STORE.KEY_APP_SETTINGS).then(function(C) {
                  if (p.isFalsy(C)) {
                    var c = {};
                    if (new o().uriEndpoints.hasOwnProperty(s)) if ((c = new o().uriEndpoints[s]).hasOwnProperty("isAdminApi")) if (p.isFalsy(l)) {
                      var d = p.format(new o().adminApiUrl, E.CometChat.getAppId(), E.CometChat.appSettings.getRegion()) + new o().adminApiVersion + "/" + c.endpoint;
                      c.endpoint = d, r(c);
                    } else
                      d = "https://" + l + "/" + c.endpoint, c.endpoint = d, r(c);
                    else p.isFalsy(u) ? (d = p.format(new o().baseUrl, E.CometChat.getAppId(), E.CometChat.appSettings.getRegion()) + new o().apiVersion + "/" + c.endpoint, c.endpoint = d, r(c)) : (d = "https://" + u + "/" + c.endpoint, c.endpoint = d, r(c));
                  } else if (c = {}, new o().uriEndpoints.hasOwnProperty(s)) if ((c = new o().uriEndpoints[s]).hasOwnProperty("isAdminApi")) {
                    var t = "https://" + C[i.APP_SETTINGS.KEYS.ADMIN_API_HOST] + "/" + C[i.APP_SETTINGS.KEYS.CHAT_API_VERSION] + "/" + c.endpoint;
                    c.endpoint = t, r(c);
                  } else
                    t = "https://" + C[i.APP_SETTINGS.KEYS.CLIENT_API_HOST] + "/" + C[i.APP_SETTINGS.KEYS.CHAT_API_VERSION] + "/" + c.endpoint, c.endpoint = t, r(c);
                }, function(C) {
                  var c;
                  if (new o().uriEndpoints.hasOwnProperty(s)) if ((c = new o().uriEndpoints[s]).hasOwnProperty(["isAdminApi"])) if (p.isFalsy(l)) {
                    var d = p.format(new o().adminApiUrl, E.CometChat.getAppId(), E.CometChat.appSettings.getRegion()) + new o().adminApiVersion + "/" + c.endpoint;
                    c.endpoint = d, r(c);
                  } else c.endpoint = "https://" + l + "/" + c.endpoint, r(c);
                  else p.isFalsy(u) ? (d = p.format(new o().baseUrl, E.CometChat.getAppId(), E.CometChat.appSettings.getRegion()) + new o().apiVersion + "/" + c.endpoint, c.endpoint = d, r(c)) : (c.endpoint = "https://" + u + "/" + c.endpoint, r(c));
                });
              } catch (C) {
                e(new n.CometChatException(C));
              }
            });
          }, o;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(u, C, c, d) {
          return new (c || (c = Promise))(function(t, h) {
            function I(P) {
              try {
                f(d.next(P));
              } catch (m) {
                h(m);
              }
            }
            function T(P) {
              try {
                f(d.throw(P));
              } catch (m) {
                h(m);
              }
            }
            function f(P) {
              var m;
              P.done ? t(P.value) : (m = P.value, m instanceof c ? m : new c(function(D) {
                D(m);
              })).then(I, T);
            }
            f((d = d.apply(u, C || [])).next());
          });
        }, i = this && this.__generator || function(u, C) {
          var c, d, t, h, I = {
            label: 0,
            sent: function() {
              if (1 & t[0]) throw t[1];
              return t[1];
            },
            trys: [],
            ops: []
          };
          return h = {
            next: T(0),
            throw: T(1),
            return: T(2)
          }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
            return this;
          }), h;
          function T(f) {
            return function(P) {
              return (function(m) {
                if (c) throw new TypeError("Generator is already executing.");
                for (; I; ) try {
                  if (c = 1, d && (t = 2 & m[0] ? d.return : m[0] ? d.throw || ((t = d.return) && t.call(d), 0) : d.next) && !(t = t.call(d, m[1])).done) return t;
                  switch (d = 0, t && (m = [2 & m[0], t.value]), m[0]) {
                    case 0:
                    case 1:
                      t = m;
                      break;
                    case 4:
                      return I.label++, {
                        value: m[1],
                        done: !1
                      };
                    case 5:
                      I.label++, d = m[1], m = [0];
                      continue;
                    case 7:
                      m = I.ops.pop(), I.trys.pop();
                      continue;
                    default:
                      if (!(t = 0 < (t = I.trys).length && t[t.length - 1]) && (m[0] === 6 || m[0] === 2)) {
                        I = 0;
                        continue;
                      }
                      if (m[0] === 3 && (!t || m[1] > t[0] && m[1] < t[3])) {
                        I.label = m[1];
                        break;
                      }
                      if (m[0] === 6 && I.label < t[1]) {
                        I.label = t[1], t = m;
                        break;
                      }
                      if (t && I.label < t[2]) {
                        I.label = t[2], I.ops.push(m);
                        break;
                      }
                      t[2] && I.ops.pop(), I.trys.pop();
                      continue;
                  }
                  m = C.call(u, I);
                } catch (D) {
                  m = [6, D], d = 0;
                } finally {
                  c = t = 0;
                }
                if (5 & m[0]) throw m[1];
                return {
                  value: m[0] ? m[1] : void 0,
                  done: !0
                };
              })([f, P]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.migrateStorage = a.getDriverForMode = a.isStorageAvailable = a.registerSessionStorageDriver = void 0;
        var S = g(12), E = g(0), n = !1, o = null, s = {
          _driver: "sessionStorageDriver",
          _initStorage: function(u) {
            var C = this;
            return new Promise(function(c, d) {
              try {
                if (typeof sessionStorage > "u") return void d(/* @__PURE__ */ new Error("SessionStorage is not available"));
                C._dbInfo = {
                  name: u.name,
                  storeName: u.storeName
                }, c();
              } catch (t) {
                d(/* @__PURE__ */ new Error("SessionStorage initialization failed: " + (t instanceof Error ? t.message : "Unknown error")));
              }
            });
          },
          _support: function() {
            return Promise.resolve(typeof sessionStorage < "u");
          },
          _getFullKey: function(u) {
            return this._dbInfo.name + "/" + u;
          },
          getItem: function(u) {
            var C = this;
            return new Promise(function(c) {
              try {
                var d = C._getFullKey(u), t = sessionStorage.getItem(d);
                c(t ? JSON.parse(t) : null);
              } catch {
                c(null);
              }
            });
          },
          setItem: function(u, C) {
            var c = this;
            return new Promise(function(d, t) {
              try {
                var h = c._getFullKey(u);
                sessionStorage.setItem(h, JSON.stringify(C)), d(C);
              } catch (I) {
                t(/* @__PURE__ */ new Error('Failed to store value for key "' + u + '": ' + (I instanceof Error ? I.message : "Unknown error")));
              }
            });
          },
          removeItem: function(u) {
            var C = this;
            return new Promise(function(c) {
              try {
                var d = C._getFullKey(u);
                sessionStorage.removeItem(d), c();
              } catch {
                c();
              }
            });
          },
          clear: function() {
            var u = this;
            return new Promise(function(C) {
              try {
                for (var c = u._dbInfo.name + "/", d = [], t = 0; t < sessionStorage.length; t++) {
                  var h = sessionStorage.key(t);
                  h && h.startsWith(c) && d.push(h);
                }
                d.forEach(function(I) {
                  return sessionStorage.removeItem(I);
                }), C();
              } catch {
                C();
              }
            });
          },
          length: function() {
            var u = this;
            return new Promise(function(C) {
              try {
                for (var c = u._dbInfo.name + "/", d = 0, t = 0; t < sessionStorage.length; t++) {
                  var h = sessionStorage.key(t);
                  h && h.startsWith(c) && d++;
                }
                C(d);
              } catch {
                C(0);
              }
            });
          },
          key: function(u) {
            var C = this;
            return new Promise(function(c) {
              try {
                for (var d = C._dbInfo.name + "/", t = [], h = 0; h < sessionStorage.length; h++) {
                  var I = sessionStorage.key(h);
                  I && I.startsWith(d) && t.push(I.substring(d.length));
                }
                c(u < t.length ? t[u] : null);
              } catch {
                c(null);
              }
            });
          },
          keys: function() {
            var u = this;
            return new Promise(function(C) {
              try {
                for (var c = u._dbInfo.name + "/", d = [], t = 0; t < sessionStorage.length; t++) {
                  var h = sessionStorage.key(t);
                  h && h.startsWith(c) && d.push(h.substring(c.length));
                }
                C(d);
              } catch {
                C([]);
              }
            });
          },
          iterate: function(u) {
            return new Promise(function(C) {
              try {
                for (var c = void 0, d = 0; d < sessionStorage.length; d++) {
                  var t = sessionStorage.key(d);
                  if (t) {
                    var h = sessionStorage.getItem(t);
                    if (h !== null) try {
                      c = u(JSON.parse(h), t, d);
                    } catch {
                      continue;
                    }
                  }
                }
                C(c);
              } catch {
                C(void 0);
              }
            });
          }
        };
        function r() {
          return p(this, void 0, void 0, function() {
            return i(this, function(u) {
              switch (u.label) {
                case 0:
                  if (n) return [2, Promise.resolve()];
                  if (!o) return [3, 4];
                  u.label = 1;
                case 1:
                  return u.trys.push([
                    1,
                    3,
                    ,
                    4
                  ]), [4, o];
                case 2:
                  return u.sent(), [2];
                case 3:
                  return u.sent(), [3, 4];
                case 4:
                  return u.trys.push([
                    4,
                    6,
                    ,
                    7
                  ]), [4, S.defineDriver(s)];
                case 5:
                  return u.sent(), n = !0, [3, 7];
                case 6:
                  throw u.sent();
                case 7:
                  return [2];
              }
            });
          });
        }
        function e(u) {
          try {
            return u === E.StorageMode.LOCAL ? typeof localStorage < "u" : u === E.StorageMode.SESSION && typeof sessionStorage < "u";
          } catch {
            return !1;
          }
        }
        function l(u) {
          return p(this, void 0, void 0, function() {
            return i(this, function(C) {
              switch (C.label) {
                case 0:
                  return C.trys.push([
                    0,
                    4,
                    ,
                    5
                  ]), u !== E.StorageMode.SESSION ? [3, 3] : e(E.StorageMode.SESSION) ? [4, r()] : [2, S.LOCALSTORAGE];
                case 1:
                  return C.sent(), [4, new Promise(function(c) {
                    return setTimeout(c, 10);
                  })];
                case 2:
                  return C.sent(), e(E.StorageMode.SESSION) ? [2, s._driver] : [2, S.LOCALSTORAGE];
                case 3:
                  return [2, S.LOCALSTORAGE];
                case 4:
                  return C.sent(), [2, S.LOCALSTORAGE];
                case 5:
                  return [2];
              }
            });
          });
        }
        typeof window > "u" || o || (o = p(void 0, void 0, void 0, function() {
          return i(this, function(u) {
            switch (u.label) {
              case 0:
                return u.trys.push([
                  0,
                  3,
                  ,
                  4
                ]), typeof sessionStorage > "u" ? [3, 2] : [4, S.defineDriver(s)];
              case 1:
                u.sent(), n = !0, u.label = 2;
              case 2:
                return [3, 4];
              case 3:
                return u.sent(), [2];
              case 4:
                return [2];
            }
          });
        })), a.registerSessionStorageDriver = r, a.isStorageAvailable = e, a.getDriverForMode = l, a.migrateStorage = function(u, C) {
          return p(this, void 0, void 0, function() {
            var c, d, t, h, I, T, f, P, m, D;
            return i(this, function(V) {
              switch (V.label) {
                case 0:
                  if (u === C) return [2];
                  V.label = 1;
                case 1:
                  return V.trys.push([
                    1,
                    10,
                    ,
                    11
                  ]), [4, l(u)];
                case 2:
                  return c = V.sent(), [4, l(C)];
                case 3:
                  return d = V.sent(), t = S.createInstance({
                    name: "SDKStore_Migration_Source",
                    driver: c
                  }), h = S.createInstance({
                    name: "SDKStore_Migration_Target",
                    driver: d
                  }), [4, t.keys()];
                case 4:
                  I = V.sent(), T = 0, f = I, V.label = 5;
                case 5:
                  return T < f.length ? (P = f[T], [4, t.getItem(P)]) : [3, 9];
                case 6:
                  return (m = V.sent()) === null ? [3, 8] : [4, h.setItem(P, m)];
                case 7:
                  V.sent(), V.label = 8;
                case 8:
                  return T++, [3, 5];
                case 9:
                  return [3, 11];
                case 10:
                  throw D = V.sent(), /* @__PURE__ */ new Error("Migration failed: " + (D instanceof Error ? D.message : "Unknown error"));
                case 11:
                  return [2];
              }
            });
          });
        };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.getEndPoint = void 0;
        var p = g(48), i = g(2);
        a.getEndPoint = function(S, E) {
          S === void 0 && (S = ""), E === void 0 && (E = {});
          var n = new p.EndpointFactory();
          return new Promise(function(o, s) {
            try {
              n.getEndpointData(S).then(function(r) {
                var e = r;
                if (e) {
                  for (var l in E) e.endpoint = e.endpoint.replace("{{" + l + "}}", E[l]);
                  o(e);
                } else s({ error: "Unknown endPoint name." });
              });
            } catch (r) {
              s(new i.CometChatException(r));
            }
          });
        };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.InteractionGoal = void 0, a.InteractionGoal = (function() {
          function p(i, S) {
            this.elementIds = [], this.type = i, this.elementIds = S;
          }
          return p.prototype.getType = function() {
            return this.type;
          }, p.prototype.setType = function(i) {
            this.type = i;
          }, p.prototype.getElementIds = function() {
            return this.elementIds;
          }, p.prototype.setElementIds = function(i) {
            this.elementIds = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(r, e) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, u) {
            l.__proto__ = u;
          } || function(l, u) {
            for (var C in u) u.hasOwnProperty(C) && (l[C] = u[C]);
          })(r, e);
        }, function(r, e) {
          function l() {
            this.constructor = r;
          }
          p(r, e), r.prototype = e === null ? Object.create(e) : (l.prototype = e.prototype, new l());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantMessage = a.AIAssistantMessageData = void 0;
        var S = g(7), E = g(0), n = g(3), o = g(1), s = g(9);
        a.AIAssistantMessageData = (function() {
          function r(e, l, u) {
            this.runId = e, this.threadId = l, this.text = u;
          }
          return r.prototype.getRunId = function() {
            return this.runId;
          }, r.prototype.setRunId = function(e) {
            this.runId = e;
          }, r.prototype.getThreadId = function() {
            return this.threadId;
          }, r.prototype.setThreadId = function(e) {
            this.threadId = e;
          }, r.prototype.getText = function() {
            return this.text;
          }, r.prototype.setText = function(e) {
            this.text = e;
          }, r;
        })(), a.AIAssistantMessage = (function(r) {
          function e(l, u) {
            var C = r.call(this, l, E.MessageConstatnts.TYPE.ASSISTANT, u, E.MessageCategory.AGENTIC) || this;
            return C.aiAssistantMessageData = void 0, C.elements = void 0, C;
          }
          return i(e, r), e.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, e.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, e.prototype.getAssistantMessageData = function() {
            return this.aiAssistantMessageData;
          }, e.prototype.setAssistantMessageData = function(l) {
            this.aiAssistantMessageData = l;
          }, e.prototype.getData = function() {
            return this.data;
          }, e.prototype.getTags = function() {
            return this.tags;
          }, e.prototype.setTags = function(l) {
            this.tags = l;
          }, e.prototype.getElements = function() {
            return this.elements || [];
          }, e.prototype.setElements = function(l) {
            this.elements = l;
          }, e.prototype.getSenderFromData = function() {
            try {
              var l = this.getData();
              if (l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new n.User(l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (u) {
              throw o.Logger.error("AssistantMessageModel: getSenderFromData", u), u;
            }
          }, e.prototype.getReceiverFromData = function() {
            try {
              var l = this.getData(), u = l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER) return new n.User(u);
              var C = new s.Group(u[E.GroupConstants.KEYS.GUID], u[E.GroupConstants.KEYS.NAME], u[E.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(C, u);
            } catch (c) {
              throw o.Logger.error("AssistantMessageModel: getReceiverFromData", c), c;
            }
          }, e;
        })(S.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(r, e) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, u) {
            l.__proto__ = u;
          } || function(l, u) {
            for (var C in u) u.hasOwnProperty(C) && (l[C] = u[C]);
          })(r, e);
        }, function(r, e) {
          function l() {
            this.constructor = r;
          }
          p(r, e), r.prototype = e === null ? Object.create(e) : (l.prototype = e.prototype, new l());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIToolResultMessage = a.AIToolResultMessageData = void 0;
        var S = g(7), E = g(0), n = g(3), o = g(1), s = g(9);
        a.AIToolResultMessageData = (function() {
          function r(e, l, u, C) {
            this.runId = e, this.threadId = l, this.text = u, this.toolCallId = C;
          }
          return r.prototype.getRunId = function() {
            return this.runId;
          }, r.prototype.setRunId = function(e) {
            this.runId = e;
          }, r.prototype.getThreadId = function() {
            return this.threadId;
          }, r.prototype.setThreadId = function(e) {
            this.threadId = e;
          }, r.prototype.getText = function() {
            return this.text;
          }, r.prototype.setText = function(e) {
            this.text = e;
          }, r.prototype.getToolCallId = function() {
            return this.toolCallId;
          }, r.prototype.setToolCallId = function(e) {
            this.toolCallId = e;
          }, r;
        })(), a.AIToolResultMessage = (function(r) {
          function e(l, u) {
            var C = r.call(this, l, E.MessageConstatnts.TYPE.TOOL_RESULT, u, E.MessageCategory.AGENTIC) || this;
            return C.toolMessageData = void 0, C;
          }
          return i(e, r), e.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, e.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, e.prototype.getToolResultMessageData = function() {
            return this.toolMessageData;
          }, e.prototype.setToolResultMessageData = function(l) {
            this.toolMessageData = l;
          }, e.prototype.getData = function() {
            return this.data;
          }, e.prototype.getTags = function() {
            return this.tags;
          }, e.prototype.setTags = function(l) {
            this.tags = l;
          }, e.prototype.getSenderFromData = function() {
            try {
              var l = this.getData();
              if (l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new n.User(l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (u) {
              throw o.Logger.error("ToolResultMessageModel: getSenderFromData", u), u;
            }
          }, e.prototype.getReceiverFromData = function() {
            try {
              var l = this.getData(), u = l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER) return new n.User(u);
              var C = new s.Group(u[E.GroupConstants.KEYS.GUID], u[E.GroupConstants.KEYS.NAME], u[E.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(C, u);
            } catch (c) {
              throw o.Logger.error("ToolResultMessageModel: getReceiverFromData", c), c;
            }
          }, e;
        })(S.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(e, l) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, C) {
            u.__proto__ = C;
          } || function(u, C) {
            for (var c in C) C.hasOwnProperty(c) && (u[c] = C[c]);
          })(e, l);
        }, function(e, l) {
          function u() {
            this.constructor = e;
          }
          p(e, l), e.prototype = l === null ? Object.create(l) : (u.prototype = l.prototype, new u());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIToolArgumentMessage = a.AIToolArgumentMessageData = a.AIToolCall = a.AIToolCallFunction = void 0;
        var S = g(7), E = g(0), n = g(3), o = g(1), s = g(9), r = (function() {
          function e(l, u) {
            this.name = l, this.arguments = u;
          }
          return e.prototype.getName = function() {
            return this.name;
          }, e.prototype.setName = function(l) {
            this.name = l;
          }, e.prototype.getArguments = function() {
            return this.arguments;
          }, e.prototype.setArguments = function(l) {
            this.arguments = l;
          }, e;
        })();
        a.AIToolCallFunction = r, a.AIToolCall = (function() {
          function e(l, u, C, c, d) {
            this.id = l, this.type = u, this.function = C, this.displayName = c, this.executionText = d;
          }
          return e.prototype.getId = function() {
            return this.id;
          }, e.prototype.setId = function(l) {
            this.id = l;
          }, e.prototype.getType = function() {
            return this.type;
          }, e.prototype.setType = function(l) {
            this.type = l;
          }, e.prototype.getFunction = function() {
            return this.function;
          }, e.prototype.setFunction = function(l) {
            this.function = l;
          }, e.prototype.getDisplayName = function() {
            return this.displayName;
          }, e.prototype.setDisplayName = function(l) {
            this.displayName = l;
          }, e.prototype.getExecutionText = function() {
            return this.executionText;
          }, e.prototype.setExecutionText = function(l) {
            this.executionText = l;
          }, e.fromJSON = function(l) {
            var u = l[E.MessageConstatnts.KEYS.ID] || "", C = l[E.MessageConstatnts.KEYS.TYPE] || "", c = l[E.MessageConstatnts.KEYS.FUNCTION][E.MessageConstatnts.KEYS.DISPLAY_NAME] || "", d = l[E.MessageConstatnts.KEYS.FUNCTION][E.MessageConstatnts.KEYS.EXECUTION_TEXT] || "";
            return new e(u, C, new r(l[E.MessageConstatnts.KEYS.FUNCTION][E.MessageConstatnts.KEYS.NAME] || "", l[E.MessageConstatnts.KEYS.FUNCTION][E.MessageConstatnts.KEYS.ARGUMENTS] || ""), c, d);
          }, e.fromArray = function(l) {
            return l.length === 0 ? [] : l.map(function(u) {
              return e.fromJSON(u);
            });
          }, e;
        })(), a.AIToolArgumentMessageData = (function() {
          function e(l, u, C) {
            this.runId = l, this.threadId = u, this.toolCalls = C;
          }
          return e.prototype.getRunId = function() {
            return this.runId;
          }, e.prototype.setRunId = function(l) {
            this.runId = l;
          }, e.prototype.getThreadId = function() {
            return this.threadId;
          }, e.prototype.setThreadId = function(l) {
            this.threadId = l;
          }, e.prototype.getToolCalls = function() {
            return this.toolCalls;
          }, e.prototype.setToolCalls = function(l) {
            this.toolCalls = l;
          }, e;
        })(), a.AIToolArgumentMessage = (function(e) {
          function l(u, C) {
            var c = e.call(this, u, E.MessageConstatnts.TYPE.TOOL_ARGUMENTS, C, E.MessageCategory.AGENTIC) || this;
            return c.aiToolArgumentMessageData = void 0, c;
          }
          return i(l, e), l.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, l.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, l.prototype.getToolArgumentMessageData = function() {
            return this.aiToolArgumentMessageData;
          }, l.prototype.setToolArgumentMessageData = function(u) {
            this.aiToolArgumentMessageData = u;
          }, l.prototype.getData = function() {
            return this.data;
          }, l.prototype.getTags = function() {
            return this.tags;
          }, l.prototype.setTags = function(u) {
            this.tags = u;
          }, l.prototype.getSenderFromData = function() {
            try {
              var u = this.getData();
              if (u[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new n.User(u[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (C) {
              throw o.Logger.error("AssistantMessageModel: getSenderFromData", C), C;
            }
          }, l.prototype.getReceiverFromData = function() {
            try {
              var u = this.getData(), C = u[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (u[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER) return new n.User(C);
              var c = new s.Group(C[E.GroupConstants.KEYS.GUID], C[E.GroupConstants.KEYS.NAME], C[E.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(c, C);
            } catch (d) {
              throw o.Logger.error("AssistantMessageModel: getReceiverFromData", d), d;
            }
          }, l;
        })(S.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(r, e) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, u) {
            l.__proto__ = u;
          } || function(l, u) {
            for (var C in u) u.hasOwnProperty(C) && (l[C] = u[C]);
          })(r, e);
        }, function(r, e) {
          function l() {
            this.constructor = r;
          }
          p(r, e), r.prototype = e === null ? Object.create(e) : (l.prototype = e.prototype, new l());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CardMessage = void 0;
        var S = g(7), E = g(0), n = g(3), o = g(1), s = g(9);
        a.CardMessage = (function(r) {
          function e(l, u) {
            return r.call(this, l, E.MessageConstatnts.TYPE.TEXT, u, E.MessageCategory.CARD) || this;
          }
          return i(e, r), e.prototype.getCard = function() {
            try {
              var l = this.getData();
              return l && l[E.MessageConstatnts.KEYS.CARD] ? l[E.MessageConstatnts.KEYS.CARD] : void 0;
            } catch {
              return;
            }
          }, e.prototype.getText = function() {
            try {
              var l = this.getData();
              return l && l[E.MessageConstatnts.KEYS.TEXT] ? l[E.MessageConstatnts.KEYS.TEXT] : "";
            } catch {
              return "";
            }
          }, e.prototype.getFallbackText = function() {
            try {
              var l = this.getCard();
              return l && l.fallbackText ? l.fallbackText : "";
            } catch {
              return "";
            }
          }, e.prototype.getSender = function() {
            try {
              return this.getSenderFromData();
            } catch {
              return this.sender;
            }
          }, e.prototype.getReceiver = function() {
            try {
              return this.getReceiverFromData();
            } catch {
              return this.receiver;
            }
          }, e.prototype.getData = function() {
            return this.data;
          }, e.prototype.getTags = function() {
            return this.tags;
          }, e.prototype.setTags = function(l) {
            this.tags = l;
          }, e.prototype.getSenderFromData = function() {
            try {
              var l = this.getData();
              if (l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]) return new n.User(l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.SENDER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY]);
            } catch (u) {
              throw o.Logger.error("CardMessageModel: getSenderFromData", u), u;
            }
          }, e.prototype.getReceiverFromData = function() {
            try {
              var l = this.getData(), u = l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITITY];
              if (l[E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITIES][E.MessageConstatnts.KEYS.RECEIVER][E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITYTYPE] == E.ResponseConstants.RESPONSE_KEYS.KEY_ENTITY_TYPE.USER) return new n.User(u);
              var C = new s.Group(u[E.GroupConstants.KEYS.GUID], u[E.GroupConstants.KEYS.NAME], u[E.MessageConstatnts.KEYS.TYPE]);
              return Object.assign(C, u);
            } catch (c) {
              throw o.Logger.error("CardMessageModel: getReceiverFromData", c), c;
            }
          }, e;
        })(S.BaseMessage);
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantElement = void 0, a.AIAssistantElement = (function() {
          function p(i, S) {
            this.type = i, this.data = S;
          }
          return p.prototype.getType = function() {
            return this.type;
          }, p.prototype.setType = function(i) {
            this.type = i;
          }, p.prototype.getData = function() {
            return this.data;
          }, p.prototype.setData = function(i) {
            this.data = i;
          }, p.fromArray = function(i) {
            return Array.isArray(i) ? i.map(function(S) {
              return new p(S?.type, S?.value);
            }) : [];
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.Conversation = void 0;
        var p = g(11), i = g(0), S = g(17), E = g(24), n = g(14);
        a.Conversation = (function() {
          function o(s, r, e, l, u, C, c, d, t) {
            t === void 0 && (t = ""), this.conversationId = s, this.conversationType = r, this.unreadMentionsCount = c ?? 0, this.lastReadMessageId = d ?? "", this.latestMessageId = t, this.unreadMessageCount = u ?? 0, this.lastMessage = e ?? null, C && 0 < C.length && (this.tags = C), e && e.id && e.id !== void 0 && e.id !== null && e.id !== "" && (this.lastMessage = p.MessageController.trasformJSONMessge(e)), this.conversationType == i.MessageConstatnts.RECEIVER_TYPE.USER ? this.conversationWith = S.UsersController.trasformJSONUser(l) : this.conversationWith = E.GroupsController.trasformJSONGroup(l);
          }
          return o.prototype.setConversationId = function(s) {
            this.conversationId = s;
          }, o.prototype.getUnreadMentionsCount = function() {
            return this.unreadMentionsCount;
          }, o.prototype.setUnreadMentionsCount = function(s) {
            this.unreadMentionsCount = s;
          }, o.prototype.getLastReadMessageId = function() {
            return this.lastReadMessageId;
          }, o.prototype.setLastReadMessageId = function(s) {
            this.lastReadMessageId = s;
          }, o.prototype.getLatestMessageId = function() {
            return this.latestMessageId;
          }, o.prototype.setLatestMessageId = function(s) {
            this.latestMessageId = s;
          }, o.prototype.setConversationType = function(s) {
            this.conversationType = s;
          }, o.prototype.setLastMessage = function(s) {
            this.lastMessage = s;
          }, o.prototype.setConversationWith = function(s) {
            this.conversationWith = s;
          }, o.prototype.setUnreadMessageCount = function(s) {
            this.unreadMessageCount = s;
          }, o.prototype.getConversationId = function() {
            return this.conversationId;
          }, o.prototype.getConversationType = function() {
            return this.conversationType;
          }, o.prototype.getLastMessage = function() {
            return this.lastMessage;
          }, o.prototype.getConversationWith = function() {
            return this.conversationWith;
          }, o.prototype.getUnreadMessageCount = function() {
            return this.unreadMessageCount;
          }, o.prototype.getPinnedAt = function() {
            return this.pinnedAt;
          }, o.prototype.setPinnedAt = function(s) {
            s != null ? this.pinnedAt = s : delete this.pinnedAt;
          }, o.prototype.getPinnedBy = function() {
            return this.pinnedBy;
          }, o.prototype.setPinnedBy = function(s) {
            s != null ? this.pinnedBy = s : delete this.pinnedBy;
          }, o.prototype.isPinned = function() {
            return this.pinnedAt !== null && this.pinnedAt !== void 0;
          }, o.prototype.isSystemPinned = function() {
            return this.isPinned() && this.pinnedBy === n.PIN_SAVE_SENTINELS.SYSTEM_PINNER;
          }, o.prototype.getTags = function() {
            return this.tags;
          }, o;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CallController = void 0;
        var p = g(0), i = g(1), S = g(6), E = g(2), n = g(35), o = g(59), s = g(3), r = g(4);
        a.CallController = (function() {
          function e() {
            this.TAG = "calling Log", this.callTimeoutMs = 1e3 * S.DEFAULT_TIMEOUT, this.view = void 0, this.isDev = !1;
          }
          return e.prototype.getCallListner = function() {
            return e.callListner;
          }, e.prototype.setCallListner = function(l) {
            e.callListner = new n.UserCallListener(l);
          }, e.getInstance = function() {
            try {
              return this.callController != null && this.callController != null || (this.callController = new e()), this.callController;
            } catch (l) {
              i.Logger.error("CallController: getInstance", l);
            }
          }, e.prototype.getActiveCall = function() {
            try {
              return i.isFalsy(this.call) ? null : this.call;
            } catch (l) {
              i.Logger.error("CallController: getActiveCall", l);
            }
          }, e.prototype.initiateCall = function(l, u) {
            var C = this;
            return u === void 0 && (u = S.DEFAULT_TIMEOUT), new Promise(function(c, d) {
              try {
                i.isFalsy(C.call) ? l != null && l != null ? (C.callTimeoutMs = 1e3 * u, C.call = l, C.startCallTimer(), c(l)) : d(new E.CometChatException(p.CALL_ERROR.ERROR_IN_CALLING)) : d(new E.CometChatException(p.CALL_ERROR.CALL_ALREADY_INITIATED));
              } catch (t) {
                d(new E.CometChatException(t));
              }
            });
          }, e.prototype.clearTimer = function() {
            this.timer && this.stopCallTimer();
          }, e.prototype.endCall = function(l) {
            var u = this;
            try {
              document.getElementsByName("frame").forEach(function(C) {
                u.view && (u.view.removeChild(C), u.view = void 0);
              }), this.endCallSession();
            } catch (C) {
              i.Logger.error("CallController: endCall", C);
            }
          }, e.prototype.onCallStarted = function(l) {
            var u = this;
            return new Promise(function(C, c) {
              try {
                i.isFalsy(u.call) ? l != null && l != null ? C(u.call = l) : c(new E.CometChatException(p.CALL_ERROR.ERROR_IN_CALLING)) : c(new E.CometChatException(p.CALL_ERROR.CALL_ALREADY_INITIATED));
              } catch (d) {
                c(new E.CometChatException(d));
              }
            });
          }, e.prototype.clearActiveCall = function() {
            this.call = void 0, e.callController = void 0, this.timer && this.stopCallTimer(), this.view = void 0, this.removeListener(), e.callScreen = null, e.callSettings = null;
          }, e.prototype.endCallSession = function() {
            try {
              this.call = void 0, e.callController = void 0, this.timer && this.stopCallTimer(), this.view = void 0, this.removeListener(), e.callScreen = null, e.callSettings = null;
            } catch (l) {
              i.Logger.error("CallController:EndCallSession", { e: l });
            }
          }, e.prototype.startCallTimer = function() {
            var l = this;
            try {
              this.timer = setTimeout(function() {
                l.call ? S.CometChat.sendUnansweredResponse(l.call.getSessionId()).then(function(u) {
                  l.endCallSession();
                }, function(u) {
                  l.endCallSession();
                }) : l.endCallSession();
              }, this.callTimeoutMs);
            } catch (u) {
              i.Logger.error("CallController: startCallTimer", u);
            }
          }, e.prototype.stopCallTimer = function() {
            try {
              clearTimeout(this.timer);
            } catch (l) {
              i.Logger.error("CallController: stopCallTimer", l);
            }
          }, e.prototype.startCall = function(l, u) {
            var C = this;
            try {
              this.timer && this.stopCallTimer();
              var c = document.createElement("iframe");
              this.getCallUrl().then(function(d) {
                c.src = d + "", c.name = "frame", c.setAttribute("allow", "camera; microphone; display-capture;"), c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), e.callScreen = c, e.callSettings = l, u && (C.view = u), u.appendChild(c), C.addListener();
              });
            } catch (d) {
              i.Logger.error("CallController: startCall", d);
            }
          }, e.prototype.addListener = function() {
            window.addEventListener("message", this.handler, !0);
          }, e.prototype.removeListener = function() {
            window.removeEventListener("message", this.handler, !0);
          }, e.prototype.handler = function(l) {
            var u, C = this, c = e.callSettings, d = e.callScreen, t = e.getInstance().getActiveCall();
            try {
              if ((u = JSON.parse(l.data)) !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.HANGUP) e.deviceList = null, t ? (i.Logger.info(this.TAG, e.callListner), window.setTimeout(function() {
                S.CometChat.endCall(t.getSessionId(), !0).then(function(W) {
                  i.Logger.info(C.TAG, { call: W });
                }).catch(function(W) {
                  i.Logger.info(C.TAG, "The Call Was Already Ended");
                });
              }, 1e3)) : S.CometChat.endCall(c.getSessionId(), !0).then(function(W) {
                i.Logger.info(C.TAG, { call: W });
              }).catch(function(W) {
                i.Logger.info(C.TAG, "The Call Was Already Ended");
              });
              else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.USER_JOINED) {
                if (u.value) {
                  var h = void 0, I = u.value;
                  i.isFalsy(I.uid) || i.isFalsy(I.name) || ((h = new s.User(I)).setStatus("online"), S.CometChat.user.getUid().toLowerCase() != h.getUid().toLowerCase() && e.callListner && (i.isFalsy(e.callListner._eventListener.onUserJoined) || e.callListner._eventListener.onUserJoined(h)));
                }
              } else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.USER_LEFT)
                u.value && (h = void 0, I = u.value, i.isFalsy(I.uid) || i.isFalsy(I.name) || ((h = new s.User(I)).setStatus("online"), S.CometChat.user.getUid().toLowerCase() != h.getUid().toLowerCase() && e.callListner && (i.isFalsy(e.callListner._eventListener.onUserLeft) || e.callListner._eventListener.onUserLeft(h))));
              else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.USER_LIST_CHANGED) {
                var T = [];
                u.value && 0 < u.value.length && (u.value.map(function(W) {
                  if (!i.isFalsy(W.uid) && !i.isFalsy(W.name)) {
                    var q = new s.User(W);
                    q.setStatus("online"), T.push(q);
                  }
                }), e.callListner && (i.isFalsy(e.callListner._eventListener.onUserListUpdated) || e.callListner._eventListener.onUserListUpdated(T)));
              } else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.INITIAL_DEVICE_LIST) i.Logger.info("initialDeviceList received in SDK = ", u), u.value && (e.deviceList = u.value);
              else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.DEVICE_CHANGE) {
                if (i.Logger.info("onDeviceChange received in SDK = ", u), u.value) {
                  e.deviceList = u.value;
                  var f = e.getAvailableDeviceObject(e.deviceList);
                  e.callListner && (i.isFalsy(e.callListner._eventListener.onMediaDeviceListUpdated) || e.callListner._eventListener.onMediaDeviceListUpdated(f));
                }
              } else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.RECORDING_TOGGLED) {
                if (i.Logger.info("onRecordingToggled received in SDK = ", u), u.value && (M = u.value).hasOwnProperty("user") && M.hasOwnProperty("recordingStarted") && !i.isFalsy(M.user.uid) && !i.isFalsy(M.user.name)) {
                  var P = new s.User(M.user);
                  P.setStatus("online");
                  var m = M.recordingStarted;
                  e.callListner && (m ? i.isFalsy(e.callListner._eventListener.onRecordingStarted) || e.callListner._eventListener.onRecordingStarted(P) : i.isFalsy(e.callListner._eventListener.onRecordingStopped) || e.callListner._eventListener.onRecordingStopped(P));
                }
              } else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.USER_MUTED) {
                if (i.Logger.info("onUserMuted received in SDK = ", u), u.value && (M = u.value).hasOwnProperty("muted") && M.hasOwnProperty("mutedBy") && !i.isFalsy(M.muted.uid) && !i.isFalsy(M.muted.name) && !i.isFalsy(M.mutedBy.uid) && !i.isFalsy(M.mutedBy.name)) {
                  var D = new s.User(M.muted);
                  D.setStatus("online");
                  var V = new s.User(M.mutedBy);
                  V.setStatus("online"), e.callListner && (i.isFalsy(e.callListner._eventListener.onUserMuted) || e.callListner._eventListener.onUserMuted(D, V));
                }
              } else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.SCREEN_SHARE_STARTED) e.callListner && (i.isFalsy(e.callListner._eventListener.onScreenShareStarted) || e.callListner._eventListener.onScreenShareStarted(null));
              else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.SCREEN_SHARE_STOPPED) e.callListner && (i.isFalsy(e.callListner._eventListener.onScreenShareStopped) || e.callListner._eventListener.onScreenShareStopped(null));
              else if (u !== void 0 && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.SWITCHED_TO_VIDEO_CALL) {
                if (u.value) {
                  var M = u.value;
                  if (i.Logger.info("onCallSwitchedToVideo received in SDK = ", M), M.hasOwnProperty("initiator") && M.hasOwnProperty("sessionId") && !i.isFalsy(M.initiator.uid) && !i.isFalsy(M.sessionId) && M.hasOwnProperty("accepted") && !i.isFalsy(M.accepted.uid)) {
                    var z = M.sessionId, le = new s.User(M.initiator);
                    le.setStatus("online");
                    var de = new s.User(M.accepted);
                    if (de.setStatus("online"), e.getInstance().getCallListner() && (i.isFalsy(e.getInstance().getCallListner()._eventListener.onCallSwitchedToVideo) || e.getInstance().getCallListner()._eventListener.onCallSwitchedToVideo(z, le, de)), M.initiator.uid.toLowerCase() === S.CometChat.user.getUid().toLowerCase() && !M.sessionId.includes("v1.")) try {
                      r.makeApiCall("updateCallType", { sessionid: z }, { type: "video" }).then(function(W) {
                        i.Logger.log("response", W);
                      }, function(W) {
                        i.Logger.error("CallController :: onSwitchedToVideo", W);
                      });
                    } catch (W) {
                      i.Logger.error("CallController :: onSwitchedToVideo", W);
                    }
                  }
                }
              } else u !== void 0 && u.type && u.action && u.type == p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE && u.action == p.CallConstants.POST_MESSAGES.ACTIONS.LOAD && d.contentWindow != null && d.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.COMETCHAT_RTC_SETTINGS,
                callsettings: JSON.stringify(c)
              }, "*");
            } catch (W) {
              u = void 0, i.Logger.error("CallController: startCall", W);
            }
          }, e.prototype.getCallUrl = function() {
            var l = this, u = void 0;
            return new Promise(function(C, c) {
              try {
                l.isDev ? (u = "https://rtc-test.cometchat.io/?v=" + p.CALLING_COMPONENT_VERSION, C(u)) : i.getAppSettings().then(function(d) {
                  u = "https://" + d[p.APP_SETTINGS.KEYS.WEBRTC_WEB_FRONTEND_HOST] + "/?v=" + p.CALLING_COMPONENT_VERSION, C(u);
                });
              } catch (d) {
                c(new E.CometChatException(d));
              }
            });
          }, e.getAvailableDeviceArray = function(l) {
            var u = [];
            try {
              return l && 0 < l.length && l.map(function(C) {
                u.push(new o.MediaDevice(C.deviceId, C.label, C.active));
              }), u;
            } catch (C) {
              return i.Logger.error("CallController: getAvailableDeviceArray", C), u;
            }
          }, e.getAvailableDeviceObject = function(l) {
            var u = [], C = [], c = [];
            try {
              return i.isFalsy(l) || i.isFalsy(l[p.CallConstants.AUDIO_INPUT_DEVICES]) || (u = e.getAvailableDeviceArray(l[p.CallConstants.AUDIO_INPUT_DEVICES])), i.isFalsy(l) || i.isFalsy(l[p.CallConstants.AUDIO_OUTPUT_DEVICES]) || (C = e.getAvailableDeviceArray(l[p.CallConstants.AUDIO_OUTPUT_DEVICES])), i.isFalsy(l) || i.isFalsy(l[p.CallConstants.VIDEO_INPUT_DEVICES]) || (c = e.getAvailableDeviceArray(l[p.CallConstants.VIDEO_INPUT_DEVICES])), {
                audioInputDevices: u,
                audioOutputDevices: C,
                videoInputDevices: c
              };
            } catch (d) {
              return i.Logger.error("CallController: getAvailableDeviceObject", d), {
                audioInputDevices: u,
                audioOutputDevices: C,
                videoInputDevices: c
              };
            }
          }, e.prototype.getAudioInputDevices = function() {
            var l = [];
            try {
              return i.isFalsy(e.deviceList) || i.isFalsy(e.deviceList[p.CallConstants.AUDIO_INPUT_DEVICES]) || (l = e.getAvailableDeviceArray(e.deviceList[p.CallConstants.AUDIO_INPUT_DEVICES])), l;
            } catch (u) {
              return i.Logger.error("CallController: getAudioInputDevices", u), l;
            }
          }, e.prototype.getAudioOutputDevices = function() {
            var l = [];
            try {
              return i.isFalsy(e.deviceList) || i.isFalsy(e.deviceList[p.CallConstants.AUDIO_OUTPUT_DEVICES]) || (l = e.getAvailableDeviceArray(e.deviceList[p.CallConstants.AUDIO_OUTPUT_DEVICES])), l;
            } catch (u) {
              return i.Logger.error("CallController: getAudioOutputDevices", u), l;
            }
          }, e.prototype.getVideoInputDevices = function() {
            var l = [];
            try {
              return i.isFalsy(e.deviceList) || i.isFalsy(e.deviceList[p.CallConstants.VIDEO_INPUT_DEVICES]) || (l = e.getAvailableDeviceArray(e.deviceList[p.CallConstants.VIDEO_INPUT_DEVICES])), l;
            } catch (u) {
              return i.Logger.error("CallController: getVideoInputDevices", u), l;
            }
          }, e.prototype.setAudioInputDevice = function(l) {
            try {
              if (e.callScreen && !i.isFalsy(l)) {
                var u = e.getAvailableDeviceArray(e.deviceList[p.CallConstants.AUDIO_INPUT_DEVICES]).filter(function(C) {
                  return C[p.CallConstants.MEDIA_DEVICE.ID] === l && !C[p.CallConstants.MEDIA_DEVICE.ACTIVE];
                });
                u && 0 < u.length && e.callScreen.contentWindow.postMessage({
                  type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                  action: p.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_AUDIO_INPUT,
                  value: l
                }, "*");
              }
            } catch (C) {
              i.Logger.error("CallController: setAudioInputDevice", C);
            }
          }, e.prototype.setAudioOutputDevice = function(l) {
            try {
              if (e.callScreen && !i.isFalsy(l)) {
                var u = e.getAvailableDeviceArray(e.deviceList[p.CallConstants.AUDIO_OUTPUT_DEVICES]).filter(function(C) {
                  return C[p.CallConstants.MEDIA_DEVICE.ID] === l && !C[p.CallConstants.MEDIA_DEVICE.ACTIVE];
                });
                u && 0 < u.length && e.callScreen.contentWindow.postMessage({
                  type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                  action: p.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_AUDIO_OUTPUT,
                  value: l
                }, "*");
              }
            } catch (C) {
              i.Logger.error("CallController: setAudioOutputDevice", C);
            }
          }, e.prototype.setVideoInputDevice = function(l) {
            try {
              if (e.callScreen && !i.isFalsy(l)) {
                var u = e.getAvailableDeviceArray(e.deviceList[p.CallConstants.VIDEO_INPUT_DEVICES]).filter(function(C) {
                  return C[p.CallConstants.MEDIA_DEVICE.ID] === l && !C[p.CallConstants.MEDIA_DEVICE.ACTIVE];
                });
                u && 0 < u.length && e.callScreen.contentWindow.postMessage({
                  type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                  action: p.CallConstants.POST_MESSAGES.ACTIONS.CHANGE_VIDEO_INPUT,
                  value: l
                }, "*");
              }
            } catch (C) {
              i.Logger.error("CallController: setVideoInputDevice", C);
            }
          }, e.prototype.muteAudio = function(l) {
            try {
              e.callScreen && (l ? e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.MUTE_AUDIO
              }, "*") : e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.UNMUTE_AUDIO
              }, "*"));
            } catch (u) {
              i.Logger.error("CallController: muteAudio", u);
            }
          }, e.prototype.pauseVideo = function(l) {
            try {
              e.callScreen && (l ? e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.PAUSE_VIDEO
              }, "*") : e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.UNPAUSE_VIDEO
              }, "*"));
            } catch (u) {
              i.Logger.error("CallController: pauseVideo", u);
            }
          }, e.prototype.setMode = function(l) {
            try {
              e.callScreen && !i.isFalsy(l) && (l = l.toUpperCase(), -1 < Object.values(p.CallConstants.CALL_MODE).indexOf(l) && l != p.CallConstants.CALL_MODE.SINGLE && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.SWITCH_MODE,
                value: l
              }, "*"));
            } catch (u) {
              i.Logger.error("CallController: setMode", u);
            }
          }, e.prototype.startScreenShare = function() {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.START_SCREENSHARE
              }, "*");
            } catch (l) {
              i.Logger.error("CallController: startScreenShare", l);
            }
          }, e.prototype.stopScreenShare = function() {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.STOP_SCREENSHARE
              }, "*");
            } catch (l) {
              i.Logger.error("CallController: stopScreenShare", l);
            }
          }, e.prototype.startRecording = function() {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.START_RECORDING
              }, "*");
            } catch (l) {
              i.Logger.error("CallController: startRecording", l);
            }
          }, e.prototype.stopRecording = function() {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.STOP_RECORDING
              }, "*");
            } catch (l) {
              i.Logger.error("CallController: stopRecording", l);
            }
          }, e.prototype.switchToVideoCall = function() {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.SWITCH_TO_VIDEO_CALL
              }, "*");
            } catch (l) {
              i.Logger.error("CallController: switchToVideoCall", l);
            }
          }, e.prototype.openVirtualBackground = function() {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.OPEN_VIRTUAL_BACKGROUND
              }, "*");
            } catch (l) {
              i.Logger.error("CallController: openVirtualBackground", l);
            }
          }, e.prototype.setBackgroundBlur = function(l) {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.SET_BACKGROUND_BLUR,
                value: l
              }, "*");
            } catch (u) {
              i.Logger.error("CallController: openVirtualBackground", u);
            }
          }, e.prototype.setBackgroundImage = function(l) {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.SET_BACKGROUND_IMAGE,
                value: l
              }, "*");
            } catch (u) {
              i.Logger.error("CallController: openVirtualBackground", u);
            }
          }, e.prototype.endSession = function() {
            try {
              e.callScreen && e.callScreen.contentWindow.postMessage({
                type: p.CallConstants.POST_MESSAGES.TYPES.ACTION_MESSAGE,
                action: p.CallConstants.POST_MESSAGES.ACTIONS.END_CALL
              }, "*");
            } catch (l) {
              i.Logger.error("CallController: endSession", l);
            }
          }, e.callController = void 0, e.callListner = void 0, e;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MediaDevice = void 0;
        var p = g(1);
        a.MediaDevice = (function() {
          function i(S, E, n) {
            this.id = "", this.name = "", this.active = !1, p.isFalsy(S) || (this.id = S), p.isFalsy(E) || (this.name = E), this.active = !!n;
          }
          return i.prototype.getId = function() {
            return this.id;
          }, i.prototype.setId = function(S) {
            this.id = S || "";
          }, i.prototype.getName = function() {
            return this.name;
          }, i.prototype.setName = function(S) {
            this.name = S || "";
          }, i.prototype.getIsActive = function() {
            return this.active;
          }, i.prototype.setIsActive = function(S) {
            this.active = !!S;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.GroupMembersController = void 0;
        var p = g(61), i = g(0), S = g(1);
        a.GroupMembersController = (function() {
          function E() {
          }
          return E.trasformJSONGroupMember = function(n) {
            var o;
            try {
              return n.status && n.status !== "offline" ? n.status = "online" : n.status = "offline", o = new p.GroupMember(n[i.GroupMemersConstans.KEYS.UID]), Object.assign(o, n), o;
            } catch (s) {
              return S.Logger.error("GroupMembersController:trasformJSONGroupMember", {
                e: s,
                groupMember: n
              }), n;
            }
          }, E;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.GroupMember = void 0;
        var S = g(3), E = g(0);
        a.GroupMember = (function(n) {
          function o(s, r) {
            var e = n.call(this, s) || this;
            return e.joinedAt = 0, r && (e.scope = r), e;
          }
          return i(o, n), o.prototype.setScope = function(s) {
            this.scope = s;
          }, o.prototype.setJoinedAt = function(s) {
            this.joinedAt = s;
          }, o.prototype.setGuid = function(s) {
            this.guid = s;
          }, o.prototype.getScope = function() {
            return this.scope;
          }, o.prototype.getJoinedAt = function() {
            return this.joinedAt;
          }, o.prototype.getGuid = function() {
            return this.guid;
          }, o.GroupMemberScope = E.GroupMemberScope, o;
        })(S.User);
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.TypingNotificationController = void 0;
        var p = g(1);
        a.TypingNotificationController = (function() {
          function i() {
          }
          return i.addTypingStarted = function(S) {
            this.TYPING_STARTED_MAP[S] = p.getCurrentTime();
          }, i.removeTypingStarted = function(S) {
            delete this.TYPING_STARTED_MAP[S];
          }, i.getTypingStartedMap = function(S) {
            if (S) return this.TYPING_STARTED_MAP[S];
          }, i.addTypingEnded = function(S) {
            this.TYPING_ENDED_MAP[S] = p.getCurrentTime();
          }, i.removeTypingEnded = function(S) {
            delete this.TYPING_ENDED_MAP[S];
          }, i.getTypingEndedMap = function(S) {
            if (S) return this.TYPING_ENDED_MAP[S];
          }, i.addIncomingTypingStarted = function(S) {
            this.INCOMING_TYPING_STARTED_MAP[S.getReceiverId()] = {
              typingNotification: S,
              timestamp: p.getCurrentTime()
            };
          }, i.removeIncomingTypingStarted = function(S) {
            delete this.INCOMING_TYPING_STARTED_MAP[S.getReceiverId()];
          }, i.TYPING_STARTED_MAP = {}, i.TYPING_ENDED_MAP = {}, i.INCOMING_TYPING_STARTED_MAP = {}, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.NotificationFeedListenerWrapper = a.NotificationFeedListener = void 0;
        var p = g(1), i = function() {
          for (var E = [], n = 0; n < arguments.length; n++) E[n] = arguments[n];
          this.onFeedItemReceived = void 0, E[0] && !p.isFalsy(E[0].onFeedItemReceived) && (this.onFeedItemReceived = E[0].onFeedItemReceived);
        };
        a.NotificationFeedListener = i;
        var S = function(E, n) {
          this._name = E, this._eventListener = n;
        };
        a.NotificationFeedListenerWrapper = S;
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.InteractionReceipt = void 0, a.InteractionReceipt = (function() {
          function p() {
          }
          return p.prototype.getReceiverType = function() {
            return this.receiverType;
          }, p.prototype.setReceiverType = function(i) {
            this.receiverType = i;
          }, p.prototype.getSender = function() {
            return this.sender;
          }, p.prototype.setSender = function(i) {
            this.sender = i;
          }, p.prototype.getReceiveId = function() {
            return this.receiverId;
          }, p.prototype.setReceiverId = function(i) {
            this.receiverId = i;
          }, p.prototype.getMessageId = function() {
            return this.messageId;
          }, p.prototype.setMessageId = function(i) {
            this.messageId = i;
          }, p.prototype.getInteractions = function() {
            return this.interactions;
          }, p.prototype.setInteractions = function(i) {
            this.interactions = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ReactionEvent = void 0;
        var p = g(1);
        a.ReactionEvent = (function() {
          function i(S, E, n, o, s) {
            this.parentMessageId = null, p.isFalsy(S) || (this.reaction = S), p.isFalsy(E) || (this.receiverId = E), p.isFalsy(n) || (this.receiverType = n), p.isFalsy(o) || (this.conversationId = o), p.isFalsy(s) || (this.parentMessageId = s);
          }
          return i.prototype.getReaction = function() {
            return this.reaction;
          }, i.prototype.setReaction = function(S) {
            this.reaction = S;
          }, i.prototype.getReceiverId = function() {
            return this.receiverId;
          }, i.prototype.setReceiverId = function(S) {
            this.receiverId = S;
          }, i.prototype.getReceiverType = function() {
            return this.receiverType;
          }, i.prototype.setReceiverType = function(S) {
            this.receiverType = S;
          }, i.prototype.getConversationId = function() {
            return this.conversationId;
          }, i.prototype.setConversationId = function(S) {
            this.conversationId = S;
          }, i.prototype.getParentMessageId = function() {
            return this.parentMessageId;
          }, i.prototype.setParentMessageId = function(S) {
            this.parentMessageId = S;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var p = g(8);
        Object.defineProperty(a, "AIAssistantBaseEvent", {
          enumerable: !0,
          get: function() {
            return p.AIAssistantBaseEvent;
          }
        });
        var i = g(97);
        Object.defineProperty(a, "AIAssistantRunStartedEvent", {
          enumerable: !0,
          get: function() {
            return i.AIAssistantRunStartedEvent;
          }
        });
        var S = g(98);
        Object.defineProperty(a, "AIAssistantRunFinishedEvent", {
          enumerable: !0,
          get: function() {
            return S.AIAssistantRunFinishedEvent;
          }
        });
        var E = g(99);
        Object.defineProperty(a, "AIAssistantMessageStartedEvent", {
          enumerable: !0,
          get: function() {
            return E.AIAssistantMessageStartedEvent;
          }
        });
        var n = g(100);
        Object.defineProperty(a, "AIAssistantMessageEndedEvent", {
          enumerable: !0,
          get: function() {
            return n.AIAssistantMessageEndedEvent;
          }
        });
        var o = g(101);
        Object.defineProperty(a, "AIAssistantContentReceivedEvent", {
          enumerable: !0,
          get: function() {
            return o.AIAssistantContentReceivedEvent;
          }
        });
        var s = g(102);
        Object.defineProperty(a, "AIAssistantToolStartedEvent", {
          enumerable: !0,
          get: function() {
            return s.AIAssistantToolStartedEvent;
          }
        });
        var r = g(103);
        Object.defineProperty(a, "AIAssistantToolArgumentEvent", {
          enumerable: !0,
          get: function() {
            return r.AIAssistantToolArgumentEvent;
          }
        });
        var e = g(104);
        Object.defineProperty(a, "AIAssistantToolEndedEvent", {
          enumerable: !0,
          get: function() {
            return e.AIAssistantToolEndedEvent;
          }
        });
        var l = g(105);
        Object.defineProperty(a, "AIAssistantToolResultEvent", {
          enumerable: !0,
          get: function() {
            return l.AIAssistantToolResultEvent;
          }
        });
        var u = g(106);
        Object.defineProperty(a, "AIAssistantCardStartedEvent", {
          enumerable: !0,
          get: function() {
            return u.AIAssistantCardStartedEvent;
          }
        });
        var C = g(107);
        Object.defineProperty(a, "AIAssistantCardReceivedEvent", {
          enumerable: !0,
          get: function() {
            return C.AIAssistantCardReceivedEvent;
          }
        });
        var c = g(108);
        Object.defineProperty(a, "AIAssistantCardEndedEvent", {
          enumerable: !0,
          get: function() {
            return c.AIAssistantCardEndedEvent;
          }
        });
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.NotificationCategory = void 0, a.NotificationCategory = (function() {
          function p(i) {
            i && (this.id = i.id || "", this.label = i.label || i.name || "");
          }
          return p.prototype.getId = function() {
            return this.id;
          }, p.prototype.setId = function(i) {
            this.id = i;
          }, p.prototype.getLabel = function() {
            return this.label;
          }, p.prototype.setLabel = function(i) {
            this.label = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ThreadsRequestBuilder = a.ThreadsRequest = void 0;
        var p = g(4), i = g(1), S = g(2), E = g(22), n = g(69), o = (function() {
          function s(r) {
            this.limit = n.THREAD_DEFAULTS.LIMIT, this.participatedByMe = !0, this.cursor = null, this.cursorId = null, this.seenIds = {}, this.exhausted = !1, this.fetchingInProgress = !1, r && (r.limit !== void 0 && (this.limit = r.limit), r.participatedByMe !== void 0 && (this.participatedByMe = r.participatedByMe), r.guid !== void 0 && (this.guid = r.guid), r.uid !== void 0 && (this.uid = r.uid));
          }
          return s.prototype.validateThreadsRequest = function() {
            return typeof this.limit != "number" || isNaN(this.limit) ? new S.CometChatException(n.THREAD_ERROR.LIMIT_NOT_A_NUMBER) : this.limit < n.THREAD_DEFAULTS.MIN_LIMIT || this.limit > n.THREAD_DEFAULTS.MAX_LIMIT ? new S.CometChatException(n.THREAD_ERROR.LIMIT_OUT_OF_RANGE) : this.guid && this.uid ? new S.CometChatException(n.THREAD_ERROR.GUID_UID_MUTUALLY_EXCLUSIVE) : void 0;
          }, s.prototype.resolveEndpoint = function() {
            return this.guid ? {
              name: n.THREAD_ENDPOINTS.GROUP_THREADS,
              params: { guid: this.guid }
            } : this.uid ? {
              name: n.THREAD_ENDPOINTS.USER_THREADS,
              params: { uid: this.uid }
            } : {
              name: n.THREAD_ENDPOINTS.THREADS,
              params: {}
            };
          }, s.prototype.buildQuery = function() {
            var r = {};
            return r[n.THREAD_QUERY_KEYS.PARTICIPATED_BY_ME] = this.participatedByMe, r[n.THREAD_QUERY_KEYS.LIMIT] = this.limit, this.cursor !== null && this.cursor !== void 0 && (r[n.THREAD_QUERY_KEYS.AFFIX] = n.THREAD_AFFIX.PREPEND, r[n.THREAD_QUERY_KEYS.UPDATED_AT] = this.cursor, this.cursorId !== null && this.cursorId !== void 0 && (r[n.THREAD_QUERY_KEYS.ID] = this.cursorId)), r;
          }, s.prototype.fetchNext = function() {
            var r = this;
            return new Promise(function(e, l) {
              try {
                if (r.exhausted) return void e([]);
                if (r.fetchingInProgress) return void l(new S.CometChatException(n.THREAD_ERROR.REQUEST_IN_PROGRESS));
                var u = r.validateThreadsRequest();
                if (u instanceof S.CometChatException) return void l(u);
                r.fetchingInProgress = !0, r.fetchPage(e, l);
              } catch (C) {
                r.fetchingInProgress = !1, l(new S.CometChatException(C));
              }
            });
          }, s.prototype.fetchPage = function(r, e) {
            var l = this, u = this.resolveEndpoint();
            p.makeApiCall(u.name, u.params, this.buildQuery()).then(function(C) {
              try {
                for (var c = E.ThreadParser.parseThreadList(C).filter(function(T) {
                  return !!T.getParentMessageId();
                }), d = [], t = 0; t < c.length; t++) {
                  var h = c[t].getParentMessageId();
                  l.seenIds[h] || d.push(c[t]), l.seenIds[h] = !0;
                }
                var I = E.ThreadParser.parseCursor(c);
                if (c.length < l.limit) return l.exhausted = !0, l.fetchingInProgress = !1, void r(d);
                if (I === null || I.updatedAt === l.cursor && I.id === l.cursorId) return l.exhausted = !0, l.fetchingInProgress = !1, i.Logger.log("ThreadsRequest: fetchNext", "cursor did not advance on a full page; ending the list."), void r(d);
                l.cursor = I.updatedAt, l.cursorId = I.id, l.exhausted = !1, l.fetchingInProgress = !1, r(d);
              } catch (T) {
                l.fetchingInProgress = !1, e(new S.CometChatException(T));
              }
            }, function(C) {
              l.fetchingInProgress = !1, e(new S.CometChatException(C && C.error ? C.error : C));
            });
          }, s.prototype.getLimit = function() {
            return this.limit;
          }, s.prototype.isParticipatedByMe = function() {
            return this.participatedByMe;
          }, s.prototype.getGuid = function() {
            return this.guid;
          }, s.prototype.getUid = function() {
            return this.uid;
          }, s.prototype.hasMore = function() {
            return !this.exhausted;
          }, s;
        })();
        a.ThreadsRequest = o, a.ThreadsRequestBuilder = (function() {
          function s() {
            this.limit = n.THREAD_DEFAULTS.LIMIT, this.participatedByMe = !0;
          }
          return s.prototype.setLimit = function(r) {
            return this.limit = r, this;
          }, s.prototype.setParticipatedByMe = function(r) {
            return this.participatedByMe = r, this;
          }, s.prototype.setGuid = function(r) {
            return this.guid = r, this;
          }, s.prototype.setUid = function(r) {
            return this.uid = r, this;
          }, s.prototype.build = function() {
            return new o(this);
          }, s;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.THREAD_ERROR = a.THREAD_AFFIX = a.THREAD_QUERY_KEYS = a.THREAD_DEFAULTS = a.THREAD_ENDPOINTS = void 0, a.THREAD_ENDPOINTS = {
          THREADS: "threads",
          GROUP_THREADS: "groupThreads",
          USER_THREADS: "userThreads",
          SUBSCRIBE_TO_THREAD: "subscribeToThread",
          UNSUBSCRIBE_FROM_THREAD: "unsubscribeFromThread"
        }, a.THREAD_DEFAULTS = {
          LIMIT: 30,
          MAX_LIMIT: 1e3,
          MIN_LIMIT: 1
        }, a.THREAD_QUERY_KEYS = {
          PARTICIPATED_BY_ME: "participatedByMe",
          LIMIT: "limit",
          AFFIX: "affix",
          UPDATED_AT: "updatedAt",
          ID: "id"
        }, a.THREAD_AFFIX = { PREPEND: "prepend" }, a.THREAD_ERROR = {
          REQUEST_IN_PROGRESS: {
            code: "REQUEST_IN_PROGRESS",
            name: "REQUEST_IN_PROGRESS",
            message: "Request in progress.",
            details: {}
          },
          LIMIT_NOT_A_NUMBER: {
            code: "INVALID_SET_LIMIT",
            name: "INVALID_SET_LIMIT",
            message: "setLimit() method accepts parameter as a number.",
            details: {}
          },
          LIMIT_OUT_OF_RANGE: {
            code: "INVALID_SET_LIMIT",
            name: "INVALID_SET_LIMIT",
            message: "setLimit() accepts a value between 1 and 1000.",
            details: {}
          },
          GUID_UID_MUTUALLY_EXCLUSIVE: {
            code: "INVALID_THREADS_REQUEST",
            name: "INVALID_THREADS_REQUEST",
            message: "setGuid() and setUid() are mutually exclusive; set only one.",
            details: {}
          },
          INVALID_PARENT_MESSAGE_ID: {
            code: "INVALID_PARENT_MESSAGE_ID",
            name: "INVALID_PARENT_MESSAGE_ID",
            message: "A valid parentMessageId is required.",
            details: {}
          }
        };
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(c, d, t, h) {
          return new (t || (t = Promise))(function(I, T) {
            function f(D) {
              try {
                m(h.next(D));
              } catch (V) {
                T(V);
              }
            }
            function P(D) {
              try {
                m(h.throw(D));
              } catch (V) {
                T(V);
              }
            }
            function m(D) {
              var V;
              D.done ? I(D.value) : (V = D.value, V instanceof t ? V : new t(function(M) {
                M(V);
              })).then(f, P);
            }
            m((h = h.apply(c, d || [])).next());
          });
        }, i = this && this.__generator || function(c, d) {
          var t, h, I, T, f = {
            label: 0,
            sent: function() {
              if (1 & I[0]) throw I[1];
              return I[1];
            },
            trys: [],
            ops: []
          };
          return T = {
            next: P(0),
            throw: P(1),
            return: P(2)
          }, typeof Symbol == "function" && (T[Symbol.iterator] = function() {
            return this;
          }), T;
          function P(m) {
            return function(D) {
              return (function(V) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; f; ) try {
                  if (t = 1, h && (I = 2 & V[0] ? h.return : V[0] ? h.throw || ((I = h.return) && I.call(h), 0) : h.next) && !(I = I.call(h, V[1])).done) return I;
                  switch (h = 0, I && (V = [2 & V[0], I.value]), V[0]) {
                    case 0:
                    case 1:
                      I = V;
                      break;
                    case 4:
                      return f.label++, {
                        value: V[1],
                        done: !1
                      };
                    case 5:
                      f.label++, h = V[1], V = [0];
                      continue;
                    case 7:
                      V = f.ops.pop(), f.trys.pop();
                      continue;
                    default:
                      if (!(I = 0 < (I = f.trys).length && I[I.length - 1]) && (V[0] === 6 || V[0] === 2)) {
                        f = 0;
                        continue;
                      }
                      if (V[0] === 3 && (!I || V[1] > I[0] && V[1] < I[3])) {
                        f.label = V[1];
                        break;
                      }
                      if (V[0] === 6 && f.label < I[1]) {
                        f.label = I[1], I = V;
                        break;
                      }
                      if (I && f.label < I[2]) {
                        f.label = I[2], f.ops.push(V);
                        break;
                      }
                      I[2] && f.ops.pop(), f.trys.pop();
                      continue;
                  }
                  V = d.call(c, f);
                } catch (M) {
                  V = [6, M], h = 0;
                } finally {
                  t = I = 0;
                }
                if (5 & V[0]) throw V[1];
                return {
                  value: V[0] ? V[1] : void 0,
                  done: !0
                };
              })([m, D]);
            };
          }
        }, S = this && this.__spreadArrays || function() {
          for (var c = 0, d = 0, t = arguments.length; d < t; d++) c += arguments[d].length;
          var h = Array(c), I = 0;
          for (d = 0; d < t; d++) for (var T = arguments[d], f = 0, P = T.length; f < P; f++, I++) h[I] = T[f];
          return h;
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UploadManager = void 0;
        var E = g(20), n = g(2), o = g(1), s = g(0), r = g(13), e = g(121), l = g(122), u = g(45), C = g(46);
        a.UploadManager = (function() {
          function c() {
            this.groups = /* @__PURE__ */ new Map();
          }
          return c.getInstance = function() {
            return c.instance || (c.instance = new c()), c.instance;
          }, c.prototype.upload = function(d, t, h) {
            var I = this, T = t || {}, f = T.batchId || C(), P = this.ensureGroup(f);
            typeof T.concurrency == "number" && 0 < T.concurrency && (P.concurrency = T.concurrency), P.receiverId = T.receiverId, P.receiverType = T.receiverType, P.parentMessageId = T.parentMessageId;
            var m = [];
            return (d || []).forEach(function(D) {
              if (D) {
                var V = D.fileId === void 0 || D.fileId === null ? "" : String(D.fileId);
                if (V) {
                  if (!P.files.has(V)) {
                    var M = c.deriveFileMeta(D.file);
                    P.files.set(V, {
                      fileId: V,
                      file: D.file,
                      name: M.name,
                      size: M.size,
                      mimeType: M.mimeType,
                      status: u.UploadFileStatus.QUEUED,
                      listener: h
                    }), m.push(V);
                  }
                } else o.Logger.error("UploadManager: upload — a required fileId is missing; skipping file", D);
              }
            }), Promise.resolve().then(function() {
              return I.processBatch(P, m);
            }).catch(function(D) {
              o.Logger.error("UploadManager: processBatch", D);
            }), {
              batchId: P.batchId,
              fileIds: m
            };
          }, c.prototype.processBatch = function(d, t) {
            return p(this, void 0, void 0, function() {
              var h, I, T, f, P, m, D = this;
              return i(this, function(V) {
                switch (V.label) {
                  case 0:
                    return [4, o.getUploadLimits()];
                  case 1:
                    for (h = V.sent(), I = [], T = 0, f = t; T < f.length; T++) P = f[T], (m = d.files.get(P)) && (c.isValidFile(m) ? m.size > h.sizeMax ? this.rejectFile(d, m, c.buildError(r.MEDIA_UPLOAD_ERRORS.FILE_SIZE_EXCEEDED, m.name, String(h.sizeMax))) : (m.status = u.UploadFileStatus.REQUESTING_URL, I.push(m)) : this.rejectFile(d, m, c.buildError(r.MEDIA_UPLOAD_ERRORS.INVALID_FILE_OBJECT)));
                    return [4, Promise.all(I.map(function(M) {
                      return D.presignFile(d, M).then(function() {
                        return D.drain(d);
                      });
                    }))];
                  case 2:
                    return V.sent(), this.drain(d), this.checkComplete(d), [2];
                }
              });
            });
          }, c.prototype.presignFile = function(d, t) {
            return p(this, void 0, void 0, function() {
              var h, I, T, f, P, m, D, V, M, z;
              return i(this, function(le) {
                switch (le.label) {
                  case 0:
                    h = {
                      fileId: t.fileId,
                      name: t.name,
                      size: t.size,
                      mimeType: t.mimeType
                    }, T = !1, le.label = 1;
                  case 1:
                    return le.trys.push([
                      1,
                      3,
                      ,
                      4
                    ]), [4, e.PresignClient.getUploadUrls([h], {
                      receiverId: d.receiverId,
                      receiverType: d.receiverType,
                      parentMessageId: d.parentMessageId
                    })];
                  case 2:
                    return f = le.sent(), P = f[h.fileId], (m = d.files.get(t.fileId)) && m.status !== u.UploadFileStatus.CANCELLED ? P && P.form ? (m.presign = P.form, m.presignedAt = Date.now(), m.status = u.UploadFileStatus.QUEUED, d.queue.push(m.fileId), [2]) : (I = P && P.error, [3, 4]) : [2];
                  case 3:
                    return D = le.sent(), I = D && D.error ? D.error : D, T = !0, [3, 4];
                  case 4:
                    return (V = d.files.get(t.fileId)) && V.status !== u.UploadFileStatus.CANCELLED && (M = c.toException(I, r.MEDIA_UPLOAD_ERRORS.S3_UPLOAD_FAILED), z = M.code !== void 0 && c.NON_RETRYABLE_PRESIGN_CODES.indexOf(M.code) !== -1, !T || z ? this.rejectFile(d, V, M) : this.failFile(d, V, M)), [2];
                }
              });
            });
          }, c.prototype.drain = function(d) {
            for (; d.active.size < d.concurrency && 0 < d.queue.length; ) {
              var t = d.queue.shift();
              if (t) {
                var h = d.files.get(t);
                h && h.status === u.UploadFileStatus.QUEUED && this.startUpload(d, h);
              }
            }
          }, c.prototype.startUpload = function(d, t) {
            var h = this;
            t.status = u.UploadFileStatus.UPLOADING, t.settled = !1, t.lastPercent = 0, d.active.add(t.fileId), this.armStallTimer(d, t);
            var I = t.presign;
            t.request = l.XhrUploader.upload(I, t.file, {
              onProgress: function(T, f) {
                if (!t.settled) {
                  h.armStallTimer(d, t);
                  var P = 0 < f ? Math.floor(T / f * 100) : 0;
                  (P - (t.lastPercent || 0) >= s.UPLOAD_CONSTANTS.PROGRESS_THROTTLE_PERCENT || 100 <= P) && (t.lastPercent = P, h.emitFile(d, t, "onFileProgress", t.fileId, T, f, P));
                }
              },
              onLoad: function() {
                t.settled || (t.settled = !0, h.clearStallTimer(t), d.active.delete(t.fileId), t.status = u.UploadFileStatus.UPLOADED, t.attachment = new E.Attachment(I.attachment), t.file = null, t.request = null, h.emitFile(d, t, "onFileUploaded", t.fileId, t.attachment), h.drain(d), h.checkComplete(d));
              },
              onError: function(T, f) {
                if (!t.settled) {
                  t.settled = !0, h.clearStallTimer(t), d.active.delete(t.fileId), t.request = null;
                  var P = f ? c.buildError(r.MEDIA_UPLOAD_ERRORS.PRESIGNED_URL_EXPIRED) : c.buildError(r.MEDIA_UPLOAD_ERRORS.S3_UPLOAD_FAILED, T || "");
                  h.failFile(d, t, P), h.drain(d), h.checkComplete(d);
                }
              },
              onAbort: function() {
                h.clearStallTimer(t), d.active.delete(t.fileId), t.settled || (t.settled = !0, t.request = null, h.failFile(d, t, c.buildError(r.MEDIA_UPLOAD_ERRORS.S3_UPLOAD_FAILED, "Upload aborted"))), h.drain(d), h.checkComplete(d);
              }
            });
          }, c.prototype.removeAttachment = function(d, t) {
            var h = this.groups.get(d);
            if (h) {
              var I = h.files.get(t);
              if (I) {
                I.settled = !0, this.clearStallTimer(I);
                var T = h.queue.indexOf(t);
                if (T !== -1 && h.queue.splice(T, 1), I.request) try {
                  I.request.abort();
                } catch {
                }
                h.active.delete(t), h.files.delete(t), this.drain(h), this.checkComplete(h);
              }
            }
          }, c.prototype.retryAttachment = function(d, t) {
            var h = this, I = this.groups.get(d);
            if (I) {
              var T = I.files.get(t);
              if (T && T.status === u.UploadFileStatus.FAILED) {
                if (T.error = void 0, T.settled = !1, !(!T.presign || !T.presignedAt || T.presignedAt + s.UPLOAD_CONSTANTS.PRESIGN_TTL_MS < Date.now())) return T.status = u.UploadFileStatus.QUEUED, I.queue.push(t), void this.drain(I);
                T.status = u.UploadFileStatus.REQUESTING_URL, this.presignFile(I, T).then(function() {
                  h.drain(I), h.checkComplete(I);
                });
              }
            }
          }, c.prototype.addUploadListener = function(d, t) {
            this.ensureGroup(d).globalListener = t;
          }, c.prototype.removeUploadListener = function(d) {
            var t = this.groups.get(d);
            t && (t.globalListener = void 0);
          }, c.prototype.getAttachment = function(d, t) {
            var h = this.groups.get(d);
            if (!h) return null;
            var I = h.files.get(t);
            return I && I.attachment ? I.attachment : null;
          }, c.prototype.getAttachments = function(d) {
            var t = this.groups.get(d);
            if (!t) return [];
            var h = [];
            return t.files.forEach(function(I) {
              I.attachment && h.push(I.attachment);
            }), h;
          }, c.prototype.getAttachmentsByType = function(d, t) {
            return this.getAttachments(d).filter(function(h) {
              return c.classifyType(h.getMimeType && h.getMimeType()) === t;
            });
          }, c.prototype.getAttachmentCount = function(d) {
            var t = this.groups.get(d);
            return t ? t.files.size : 0;
          }, c.prototype.getStatus = function(d) {
            var t = this.groups.get(d);
            if (!t) return u.UploadStatus.IDLE;
            var h = 0;
            return t.files.forEach(function(I) {
              I.status !== u.UploadFileStatus.QUEUED && I.status !== u.UploadFileStatus.REQUESTING_URL && I.status !== u.UploadFileStatus.UPLOADING || h++;
            }), 0 < h ? u.UploadStatus.IN_PROGRESS : u.UploadStatus.IDLE;
          }, c.prototype.clearGroup = function(d) {
            var t = this.groups.get(d);
            t && (this.abortGroup(t), this.groups.delete(d));
          }, c.prototype.clearAll = function() {
            var d = this;
            this.groups.forEach(function(t) {
              return d.abortGroup(t);
            }), this.groups.clear();
          }, c.prototype.ensureGroup = function(d) {
            var t = this.groups.get(d);
            return t || (t = {
              batchId: d,
              concurrency: s.UPLOAD_CONSTANTS.DEFAULT_CONCURRENCY,
              files: /* @__PURE__ */ new Map(),
              queue: [],
              active: /* @__PURE__ */ new Set()
            }, this.groups.set(d, t)), t;
          }, c.prototype.abortGroup = function(d) {
            var t = this;
            d.files.forEach(function(h) {
              if (t.clearStallTimer(h), h.request) try {
                h.request.abort();
              } catch {
              }
            }), d.active.clear(), d.queue = [];
          }, c.prototype.rejectFile = function(d, t, h) {
            t.status = u.UploadFileStatus.REJECTED, t.error = h, t.file = null, this.emitFile(d, t, "onFileError", t.fileId, h);
          }, c.prototype.failFile = function(d, t, h) {
            t.status = u.UploadFileStatus.FAILED, t.error = h, this.emitFile(d, t, "onFileFailure", t.fileId, h);
          }, c.prototype.armStallTimer = function(d, t) {
            var h = this;
            this.clearStallTimer(t), t.stallTimer = setTimeout(function() {
              if (!t.settled) {
                if (t.settled = !0, d.active.delete(t.fileId), t.request) try {
                  t.request.abort();
                } catch {
                }
                t.request = null, h.failFile(d, t, c.buildError(r.MEDIA_UPLOAD_ERRORS.UPLOAD_STALLED)), h.drain(d), h.checkComplete(d);
              }
            }, s.UPLOAD_CONSTANTS.STALL_TIMEOUT_MS);
          }, c.prototype.clearStallTimer = function(d) {
            d.stallTimer && (clearTimeout(d.stallTimer), d.stallTimer = null);
          }, c.prototype.checkComplete = function(d) {
            var t = this, h = 0;
            if (d.files.forEach(function(f) {
              f.status !== u.UploadFileStatus.QUEUED && f.status !== u.UploadFileStatus.REQUESTING_URL && f.status !== u.UploadFileStatus.UPLOADING || h++;
            }), !(0 < h)) {
              var I = {
                batchId: d.batchId,
                successful: [],
                rejected: [],
                failed: []
              };
              d.files.forEach(function(f) {
                f.status === u.UploadFileStatus.UPLOADED && f.attachment ? I.successful.push({
                  fileId: f.fileId,
                  attachment: f.attachment
                }) : f.status === u.UploadFileStatus.REJECTED ? I.rejected.push({
                  fileId: f.fileId,
                  error: f.error
                }) : f.status === u.UploadFileStatus.FAILED && I.failed.push({
                  fileId: f.fileId,
                  error: f.error
                });
              });
              var T = [];
              d.files.forEach(function(f) {
                f.listener && T.indexOf(f.listener) === -1 && (T.push(f.listener), t.invoke(f.listener, "onComplete", [I]));
              }), d.globalListener && T.indexOf(d.globalListener) === -1 && this.invoke(d.globalListener, "onComplete", [I]);
            }
          }, c.prototype.emitFile = function(d, t, h) {
            for (var I = [], T = 3; T < arguments.length; T++) I[T - 3] = arguments[T];
            this.invoke(t.listener, h, I), d.globalListener && d.globalListener !== t.listener && this.invoke(d.globalListener, h, I);
          }, c.prototype.invoke = function(d, t, h) {
            try {
              var I = d && d[t];
              typeof I == "function" && I.apply(void 0, h);
            } catch (T) {
              o.Logger.error("UploadManager: listener " + t, T);
            }
          }, c.classifyType = function(d) {
            var t = (d || "").toLowerCase();
            return t.indexOf("image") !== -1 ? "image" : t.indexOf("video") !== -1 ? "video" : t.indexOf("audio") !== -1 ? "audio" : "file";
          }, c.deriveFileMeta = function(d) {
            var t = d || {};
            return {
              name: t.name || "file",
              size: typeof t.size == "number" ? t.size : NaN,
              mimeType: t.type || ""
            };
          }, c.isValidFile = function(d) {
            return !!d.file && typeof d.size == "number" && !isNaN(d.size);
          }, c.buildError = function(d) {
            for (var t = [], h = 1; h < arguments.length; h++) t[h - 1] = arguments[h];
            var I = t.length ? o.format.apply(void 0, S([d.message], t)) : d.message;
            return new n.CometChatException({
              code: d.code,
              name: d.name,
              message: I,
              details: d.details
            });
          }, c.toException = function(d, t) {
            return d && (d.code || d.message) ? new n.CometChatException({
              code: d.code || t.code,
              name: d.name || t.name,
              message: d.message || t.message,
              details: d.details
            }) : c.buildError(t, typeof d == "string" ? d : "");
          }, c.NON_RETRYABLE_PRESIGN_CODES = ["ERR_PERMISSION_DENIED", "ERR_BAD_REQUEST"], c;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UploadFileListener = void 0;
        var p = function(i) {
          i === void 0 && (i = {}), this.onFileProgress = i.onFileProgress, this.onFileUploaded = i.onFileUploaded, this.onFileError = i.onFileError, this.onFileFailure = i.onFileFailure, this.onComplete = i.onComplete;
        };
        a.UploadFileListener = p;
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UploadFileRequest = void 0;
        var p = g(0), i = g(70), S = g(46);
        a.UploadFileRequest = (function() {
          function E(n, o) {
            this.started = !1, this.receiverId = n, this.receiverType = o, this.batchId = S(), this.concurrency = p.UPLOAD_CONSTANTS.DEFAULT_CONCURRENCY;
          }
          return E.prototype.setParentMessageId = function(n) {
            return this.parentMessageId = n, this;
          }, E.prototype.setBatchId = function(n) {
            return n && !this.started && (this.batchId = n), this;
          }, E.prototype.getBatchId = function() {
            return this.batchId;
          }, E.prototype.setConcurrency = function(n) {
            return typeof n == "number" && 0 < n && (this.concurrency = n), this;
          }, E.prototype.uploadAttachments = function(n, o) {
            this.started = !0, i.UploadManager.getInstance().upload(n || [], this.uploadOptions(), o);
          }, E.prototype.uploadAttachment = function(n, o, s) {
            this.started = !0, i.UploadManager.getInstance().upload([{
              fileId: n,
              file: o
            }], this.uploadOptions(), s);
          }, E.prototype.getAttachment = function(n) {
            return i.UploadManager.getInstance().getAttachment(this.batchId, n);
          }, E.prototype.getAttachments = function() {
            return i.UploadManager.getInstance().getAttachments(this.batchId);
          }, E.prototype.getAttachmentsByType = function(n) {
            return i.UploadManager.getInstance().getAttachmentsByType(this.batchId, n);
          }, E.prototype.getAttachmentCount = function() {
            return i.UploadManager.getInstance().getAttachmentCount(this.batchId);
          }, E.prototype.getStatus = function() {
            return i.UploadManager.getInstance().getStatus(this.batchId);
          }, E.prototype.addUploadListener = function(n) {
            i.UploadManager.getInstance().addUploadListener(this.batchId, n);
          }, E.prototype.removeUploadListener = function() {
            i.UploadManager.getInstance().removeUploadListener(this.batchId);
          }, E.prototype.retryAttachment = function(n) {
            i.UploadManager.getInstance().retryAttachment(this.batchId, n);
          }, E.prototype.removeAttachment = function(n) {
            i.UploadManager.getInstance().removeAttachment(this.batchId, n);
          }, E.prototype.clearAll = function() {
            i.UploadManager.getInstance().clearGroup(this.batchId);
          }, E.prototype.uploadOptions = function() {
            return {
              batchId: this.batchId,
              receiverId: this.receiverId,
              receiverType: this.receiverType,
              parentMessageId: this.parentMessageId,
              concurrency: this.concurrency
            };
          }, E;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.DaySchedule = void 0, a.DaySchedule = (function() {
          function p(i, S, E) {
            this.from = i, this.to = S, this.dnd = E;
          }
          return p.prototype.getFrom = function() {
            return this.from;
          }, p.prototype.setFrom = function(i) {
            this.from = i;
          }, p.prototype.getTo = function() {
            return this.to;
          }, p.prototype.setTo = function(i) {
            this.to = i;
          }, p.prototype.getDND = function() {
            return this.dnd;
          }, p.prototype.setDND = function(i) {
            this.dnd = i;
          }, p;
        })();
      },
      function(j, a) {
        var g = /* @__PURE__ */ (function() {
          return this;
        })();
        try {
          g = g || new Function("return this")();
        } catch {
          typeof window == "object" && (g = window);
        }
        j.exports = g;
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.GroupsRequestBuilder = a.GroupsRequest = void 0;
        var p = g(4), i = g(1), S = g(2), E = g(24), n = g(0), o = (function() {
          function s(r) {
            this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 0, this.total_pages = -1, this.hasJoined = 0, this.withTags = !1, this.page = 0, this.pagination = {
              total: 0,
              count: 0,
              per_page: 0,
              current_page: 0,
              total_pages: 0,
              links: []
            }, i.isFalsy(r) || (i.isFalsy(r.limit) || (this.limit = r.limit), r.searchKeyword && r.searchKeyword.trim() !== "" && (this.searchKeyword = r.searchKeyword), i.isFalsy(r.hasJoined) || (this.hasJoined = 1), i.isFalsy(r.tags) || (this.tags = r.tags), i.isFalsy(r.showTags) || (this.withTags = r.showTags), r.page !== void 0 && (this.page = Math.max(0, r.page)));
          }
          return s.prototype.validateGroupBuilder = function() {
            if (this.limit === void 0) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > n.DEFAULT_VALUES.GROUPS_MAX_LIMIT) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", n.DEFAULT_VALUES.GROUPS_MAX_LIMIT)));
            if (this.limit < n.DEFAULT_VALUES.ZERO) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.searchKeyword !== void 0) {
              if (typeof this.searchKeyword !== n.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING && this.searchKeyword !== void 0) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (this.withTags !== void 0) {
              if (typeof this.withTags !== n.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()")));
              this.withTags == 1 ? this.withTags = !0 : this.withTags = !1;
            }
            return this.tags === void 0 || Array.isArray(this.tags) ? void 0 : new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "TAGS", "TAGS", "setTags()")));
          }, s.prototype.fetchNext = function() {
            var r = this;
            return new Promise(function(e, l) {
              try {
                var u = r.validateGroupBuilder();
                if (u instanceof S.CometChatException) return void l(u);
                var C = r.getPageToFetch();
                p.makeApiCall("getGroups", {}, r.getNextData()).then(function(c) {
                  if (c.meta && (r.total_pages = c.meta.pagination.total_pages), 0 < c.data.length) {
                    r.current_page = C, r.pagination = c.meta.pagination;
                    var d = [];
                    c.data.map(function(t, h) {
                      d.push(E.GroupsController.trasformJSONGroup(t));
                    }), e(d);
                  }
                  e([]);
                }, function(c) {
                  l(new S.CometChatException(c.error));
                });
              } catch (c) {
                l(new S.CometChatException(c));
              }
            });
          }, s.prototype.getLimit = function() {
            return this.limit;
          }, s.prototype.getSearchKeyword = function() {
            return this.searchKeyword;
          }, s.prototype.isJoinedOnly = function() {
            return this.hasJoined;
          }, s.prototype.getTags = function() {
            return this.tags;
          }, s.prototype.isWithTags = function() {
            return this.withTags;
          }, s.prototype.getPage = function() {
            return this.current_page;
          }, s.prototype.getPageToFetch = function() {
            return this.current_page == 0 ? this.page + 1 : this.current_page + 1;
          }, s.prototype.getNextData = function() {
            var r = {};
            return r.per_page = this.limit, this.searchKeyword && (r.searchKey = encodeURIComponent(this.searchKeyword)), i.isFalsy(this.hasJoined) || (r.hasJoined = 1), i.isFalsy(this.tags) || (r.tags = this.tags.map(function(e) {
              return encodeURIComponent(e);
            })), i.isFalsy(this.withTags) || (r.withTags = 1), r.page = this.getPageToFetch(), r;
          }, s.MAX_LIMIT = 100, s.DEFAULT_LIMIT = 30, s;
        })();
        a.GroupsRequest = o, a.GroupsRequestBuilder = (function() {
          function s() {
            this.page = 0;
          }
          return s.prototype.setLimit = function(r) {
            return this.limit = r, this;
          }, s.prototype.setSearchKeyword = function(r) {
            return this.searchKeyword = r, this;
          }, s.prototype.joinedOnly = function(r) {
            return this.hasJoined = r, this;
          }, s.prototype.setTags = function(r) {
            return this.tags = r, this;
          }, s.prototype.withTags = function(r) {
            return this.showTags = r, this;
          }, s.prototype.setPage = function(r) {
            return this.page = Math.max(0, r), this;
          }, s.prototype.build = function() {
            return new o(this);
          }, s;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.GroupMembersRequestBuilder = a.GroupMembersRequest = void 0;
        var p = g(4), i = g(1), S = g(19), E = g(2), n = g(60), o = g(0), s = (function() {
          function r(e) {
            this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 0, this.total_pages = -1, this.page = 0, this.pagination = {
              total: 0,
              count: 0,
              per_page: 0,
              current_page: 0,
              total_pages: 0,
              links: []
            }, this.store = S.LocalStorage.getInstance(), i.isFalsy(e) || (this.limit = e.limit, this.guid = e.guid, e.searchKeyword && e.searchKeyword.trim() !== "" && (this.searchKeyword = e.searchKeyword), i.isFalsy(e.scopes) || (this.scopes = e.scopes), e.page !== void 0 && (this.page = Math.max(0, e.page)), i.isFalsy(e.status) || (e.status == r.USER_STATUS.ONLINE ? this.status = o.PresenceConstants.STATUS.AVAILABLE : this.status = e.status));
          }
          return r.prototype.validateGroupMembersBuilder = function() {
            if (this.limit === void 0) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > o.DEFAULT_VALUES.USERS_MAX_LIMIT) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", o.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < o.DEFAULT_VALUES.ZERO) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.searchKeyword !== void 0) {
              if (typeof this.searchKeyword !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING && this.searchKeyword !== void 0) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (this.guid !== void 0) {
              if (typeof this.guid !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "GroupMembersRequestBuilder()")));
              if (i.isFalsy(this.guid)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")));
            }
            if (this.scopes !== void 0 && !Array.isArray(this.scopes)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_SCOPES", "SET_SCOPES", "setScopes()")));
            if (this.status) {
              if (typeof this.status !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_STATUS", "SET_STATUS", "setStatus()")));
              if (this.status.toLowerCase() != "available" && this.status.toLowerCase() != "offline") return new E.CometChatException(o.UserErrors.INVALID_STATUS);
            }
          }, r.prototype.fetchNext = function() {
            var e = this;
            return new Promise(function(l, u) {
              try {
                var C = e.validateGroupMembersBuilder();
                if (C instanceof E.CometChatException) return void u(C);
                var c = e.getPageToFetch();
                p.makeApiCall("getGroupMembers", { guid: e.guid }, e.getNextData()).then(function(d) {
                  if (d.meta && (e.total_pages = d.meta.pagination.total_pages), 0 < d.data.length) {
                    e.current_page = c, e.pagination = d.meta.pagination;
                    var t = [];
                    d.data.map(function(h) {
                      h.guid = e.guid, t.push(n.GroupMembersController.trasformJSONGroupMember(h));
                    }), l(t);
                  } else l([]);
                }, function(d) {
                  u(new E.CometChatException(d.error));
                });
              } catch (d) {
                u(new E.CometChatException(d));
              }
            });
          }, r.prototype.getGuid = function() {
            return this.guid;
          }, r.prototype.getLimit = function() {
            return this.limit;
          }, r.prototype.getSearchKeyword = function() {
            return this.searchKeyword;
          }, r.prototype.getScopes = function() {
            return this.scopes;
          }, r.prototype.getPage = function() {
            return this.current_page;
          }, r.prototype.getPageToFetch = function() {
            return this.current_page == 0 ? this.page + 1 : this.current_page + 1;
          }, r.prototype.getStatus = function() {
            return this.status;
          }, r.prototype.getNextData = function() {
            var e = {};
            return e.per_page = this.limit, this.searchKeyword && (e.searchKey = encodeURIComponent(this.searchKeyword)), i.isFalsy(this.scopes) || (e.scopes = this.scopes), e.page = this.getPageToFetch(), i.isFalsy(this.status) || (e.status = this.status), e;
          }, r.MAX_LIMIT = 2, r.DEFAULT_LIMIT = 1, r.USER_STATUS = {
            ONLINE: o.PresenceConstants.STATUS.ONLINE,
            OFFLINE: o.PresenceConstants.STATUS.OFFLINE
          }, r;
        })();
        a.GroupMembersRequest = s, a.GroupMembersRequestBuilder = (function() {
          function r(e) {
            this.page = 0, this.guid = e;
          }
          return r.prototype.setGuid = function(e) {
            return this.guid = e, this;
          }, r.prototype.setLimit = function(e) {
            return this.limit = e, this;
          }, r.prototype.setSearchKeyword = function(e) {
            return this.searchKeyword = e, this;
          }, r.prototype.setScopes = function(e) {
            return this.scopes = e, this;
          }, r.prototype.setPage = function(e) {
            return this.page = Math.max(0, e), this;
          }, r.prototype.setStatus = function(e) {
            return this.status = e, this;
          }, r.prototype.build = function() {
            return new s(this);
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.BannedMembersRequestBuilder = a.BannedMembersRequest = void 0;
        var p = g(4), i = g(1), S = g(2), E = g(60), n = g(0), o = (function() {
          function s(r) {
            this.cursor = -1, this.total = -1, this.next_page = 1, this.last_page = -1, this.current_page = 0, this.total_pages = -1, this.page = 0, this.pagination = {
              total: 0,
              count: 0,
              per_page: 0,
              current_page: 0,
              total_pages: 0,
              links: []
            }, i.isFalsy(r) || (this.limit = r.limit, this.guid = r.guid, r.searchKeyword && r.searchKeyword.trim() !== "" && (this.searchKeyword = r.searchKeyword), i.isFalsy(r.scopes) || (this.scopes = r.scopes), r.page !== void 0 && (this.page = Math.max(0, r.page)));
          }
          return s.prototype.validateBannedMembersBuilder = function() {
            if (this.limit === void 0) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > n.DEFAULT_VALUES.USERS_MAX_LIMIT) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", n.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < n.DEFAULT_VALUES.ZERO) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.searchKeyword !== void 0) {
              if (typeof this.searchKeyword !== n.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (this.guid !== void 0) {
              if (typeof this.guid !== n.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "GroupMembersRequestBuilder()")));
              if (i.isFalsy(this.guid)) return new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID")));
            }
            return this.scopes === void 0 || Array.isArray(this.scopes) ? void 0 : new S.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_SCOPES", "SET_SCOPES", "setScopes()")));
          }, s.prototype.fetchNext = function() {
            var r = this;
            return new Promise(function(e, l) {
              try {
                var u = r.validateBannedMembersBuilder();
                if (u instanceof S.CometChatException) return void l(u);
                var C = r.getPageToFetch();
                p.makeApiCall("getBannedGroupMembers", { guid: r.guid }, r.getNextData()).then(function(c) {
                  if (c.meta && (r.total_pages = c.meta.pagination.total_pages), 0 < c.data.length) {
                    r.current_page = C, r.pagination = c.meta.pagination;
                    var d = [];
                    c.data.map(function(t) {
                      t.guid = r.guid, d.push(E.GroupMembersController.trasformJSONGroupMember(t));
                    }), e(d);
                  } else e([]);
                }, function(c) {
                  l(new S.CometChatException(c.error));
                });
              } catch (c) {
                l(new S.CometChatException(c));
              }
            });
          }, s.prototype.getGuid = function() {
            return this.guid;
          }, s.prototype.getLimit = function() {
            return this.limit;
          }, s.prototype.getSearchKeyword = function() {
            return this.searchKeyword;
          }, s.prototype.getScopes = function() {
            return this.scopes;
          }, s.prototype.getPage = function() {
            return this.current_page;
          }, s.prototype.getPageToFetch = function() {
            return this.current_page == 0 ? this.page + 1 : this.current_page + 1;
          }, s.prototype.getNextData = function() {
            var r = {};
            return r.per_page = this.limit, this.searchKeyword && (r.searchKey = encodeURIComponent(this.searchKeyword)), i.isFalsy(this.scopes) || (r.scopes = this.scopes), r.page = this.getPageToFetch(), r;
          }, s.MAX_LIMIT = 2, s.DEFAULT_LIMIT = 1, s;
        })();
        a.BannedMembersRequest = o, a.BannedMembersRequestBuilder = (function() {
          function s(r) {
            this.page = 0, this.guid = r;
          }
          return s.prototype.setGuid = function(r) {
            return this.guid = r, this;
          }, s.prototype.setLimit = function(r) {
            return this.limit = r, this;
          }, s.prototype.setSearchKeyword = function(r) {
            return this.searchKeyword = r, this;
          }, s.prototype.setScopes = function(r) {
            return this.scopes = r, this;
          }, s.prototype.setPage = function(r) {
            return this.page = Math.max(0, r), this;
          }, s.prototype.build = function() {
            return new o(this);
          }, s;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UsersRequestBuilder = a.UsersRequest = void 0;
        var p = g(4), i = g(1), S = g(17), E = g(2), n = g(79), o = g(0), s = (function() {
          function r(e) {
            this.next_page = 1, this.current_page = 0, this.total_pages = -1, this.hideBlockedUsers = !1, this.friendsOnly = !1, this.fetchingInProgress = !1, this.withTags = !1, this.page = 0, this.pagination = {
              total: 0,
              count: 0,
              per_page: 0,
              current_page: 0,
              total_pages: 0,
              links: []
            }, r.userStore = n.UserStore.getInstance(), i.isFalsy(e) || (this.limit = e.limit, e.searchKeyword && e.searchKeyword.trim() !== "" && (this.searchKeyword = e.searchKeyword), i.isFalsy(e.status) || (e.status == r.USER_STATUS.ONLINE ? this.status = o.PresenceConstatnts.STATUS.AVAILABLE : this.status = e.status), i.isFalsy(e.shouldHideBlockedUsers) || (this.hideBlockedUsers = e.shouldHideBlockedUsers), i.isFalsy(e.showFriendsOnly) || (this.friendsOnly = e.showFriendsOnly), i.isFalsy(e.showTags) || (this.withTags = e.showTags), i.isFalsy(e.role) || (this.role = e.role), i.isFalsy(e.roles) || (this.roles = e.roles), i.isFalsy(e.tags) || (this.tags = e.tags), i.isFalsy(e.UIDs) || (this.UIDs = e.UIDs), i.isFalsy(e.SortBy) || (this.sortBy = e.SortBy), i.isFalsy(e.SearchIn) || (this.searchIn = e.SearchIn), i.isFalsy(e.SortOrder) || (this.sortOrder = e.SortOrder), e.page !== void 0 && (this.page = Math.max(0, e.page)));
          }
          return r.prototype.validateUserBuilder = function() {
            if (this.limit === void 0) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > o.DEFAULT_VALUES.USERS_MAX_LIMIT) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", o.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < o.DEFAULT_VALUES.ZERO) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.searchKeyword !== void 0) {
              if (typeof this.searchKeyword !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING && this.searchKeyword !== void 0) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (this.status) {
              if (typeof this.status !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_STATUS", "SET_STATUS", "setStatus()")));
              if (this.status.toLowerCase() != "available" && this.status.toLowerCase() != "offline") return new E.CometChatException(o.UserErrors.INVALID_STATUS);
            }
            if (this.hideBlockedUsers !== void 0) {
              if (typeof this.hideBlockedUsers !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_BLOCKED_USERS", "HIDE_BLOCKED_USERS", "hideBlockedUsers()")));
              this.hideBlockedUsers == 1 ? this.hideBlockedUsers = !0 : this.hideBlockedUsers = !1;
            }
            if (this.friendsOnly !== void 0) {
              if (typeof this.friendsOnly !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "FRIENDS_ONLY", "FRIENDS_ONLY", "friendsOnly()")));
              this.friendsOnly == 1 ? this.friendsOnly = !0 : this.friendsOnly = !1;
            }
            if (this.withTags !== void 0) {
              if (typeof this.withTags !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()")));
              this.withTags == 1 ? this.withTags = !0 : this.withTags = !1;
            }
            if (this.roles !== void 0 && !Array.isArray(this.roles)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "ROLES", "ROLES", "setRoles()")));
            if (this.tags !== void 0 && !Array.isArray(this.tags)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "TAGS", "TAGS", "setTags()")));
            if (this.UIDs !== void 0 && !Array.isArray(this.UIDs)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "UIDs", "UIDs", "setUIDs()")));
            if (this.sortBy) {
              if (typeof this.sortBy !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SORT_BY", "SORT_BY", "sortBy()")));
              if (i.isFalsy(this.sortBy.trim())) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.INVALID), "SORT_BY", "SORT_BY", "sort by", "sort by")));
              this.sortBy = this.sortBy.trim().toLowerCase();
            }
            if (this.sortOrder) {
              if (typeof this.sortOrder !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SORT_BY_ORDER", "SORT_BY_ORDER", "sortByOrder()")));
              if (i.isFalsy(this.sortOrder.trim())) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.INVALID), "SORT_BY_ORDER", "SORT_BY_ORDER", "sort order", "sort order")));
              this.sortOrder = this.sortOrder.trim().toLowerCase();
            }
            return this.searchIn && !Array.isArray(this.searchIn) ? new E.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SEARCH_IN", "SEARCH_IN", "searchIn()"))) : void 0;
          }, r.prototype.getLimit = function() {
            return this.limit;
          }, r.prototype.getSearchKeyword = function() {
            return this.searchKeyword;
          }, r.prototype.isHideBlockedUsers = function() {
            return this.hideBlockedUsers;
          }, r.prototype.getStatus = function() {
            return this.status;
          }, r.prototype.getRole = function() {
            return this.role;
          }, r.prototype.isFriendsOnly = function() {
            return this.friendsOnly;
          }, r.prototype.getRoles = function() {
            return this.roles;
          }, r.prototype.getTags = function() {
            return this.tags;
          }, r.prototype.isWithTags = function() {
            return this.withTags;
          }, r.prototype.getUIDs = function() {
            return this.UIDs;
          }, r.prototype.getSearchIn = function() {
            return this.searchIn;
          }, r.prototype.getSortBy = function() {
            return this.sortBy;
          }, r.prototype.getSortOrder = function() {
            return this.sortOrder;
          }, r.prototype.getPage = function() {
            return this.current_page;
          }, r.prototype.getPageToFetch = function() {
            return this.current_page == 0 ? this.page + 1 : this.current_page + 1;
          }, r.prototype.fetchNext = function() {
            var e = this;
            return new Promise(function(l, u) {
              try {
                if (e.fetchingInProgress) e.fetchingInProgress = !1, l([]);
                else {
                  e.fetchingInProgress = !0;
                  var C = e.validateUserBuilder();
                  if (C instanceof E.CometChatException) return void u(C);
                  var c = e.getPageToFetch();
                  p.makeApiCall("users", {}, e.getNextData()).then(function(d) {
                    if (d.meta && (e.total_pages = d.meta.pagination.total_pages), 0 < d.data.length) {
                      e.current_page = c, e.pagination = d.meta.pagination;
                      var t = [];
                      d.data.map(function(h) {
                        t.push(S.UsersController.trasformJSONUser(h));
                      }), l(t);
                    } else l([]);
                    e.fetchingInProgress = !1;
                  }, function(d) {
                    e.fetchingInProgress = !1, u(new E.CometChatException(d.error));
                  });
                }
              } catch (d) {
                e.fetchingInProgress = !1, u(new E.CometChatException(d));
              }
            });
          }, r.prototype.getNextData = function() {
            var e = {};
            return e.per_page = this.limit, this.searchKeyword && (e.searchKey = encodeURIComponent(this.searchKeyword)), i.isFalsy(this.status) || (e.status = this.status), i.isFalsy(this.hideBlockedUsers) || (e.hideBlockedUsers = 1), i.isFalsy(this.role) || (e.roles = this.role), i.isFalsy(this.roles) || (e.roles = this.roles), i.isFalsy(this.tags) || (e.tags = this.tags.map(function(l) {
              return encodeURIComponent(l);
            })), i.isFalsy(this.friendsOnly) || (e.friendsOnly = 1), i.isFalsy(this.withTags) || (e.withTags = 1), i.isFalsy(this.UIDs) || (e.uids = this.UIDs), i.isFalsy(this.sortBy) || (e.sortBy = this.sortBy), i.isFalsy(this.sortOrder) || (e.sortOrder = this.sortOrder), i.isFalsy(this.searchIn) || (e.searchIn = this.searchIn), e.page = this.getPageToFetch(), e;
          }, r.USER_STATUS = {
            ONLINE: o.PresenceConstatnts.STATUS.ONLINE,
            OFFLINE: o.PresenceConstatnts.STATUS.OFFLINE
          }, r;
        })();
        a.UsersRequest = s, a.UsersRequestBuilder = (function() {
          function r() {
            this.shouldHideBlockedUsers = !1, this.page = 0;
          }
          return r.prototype.setLimit = function(e) {
            return this.limit = e, this;
          }, r.prototype.setStatus = function(e) {
            return this.status = e, this;
          }, r.prototype.setSearchKeyword = function(e) {
            return this.searchKeyword = e, this;
          }, r.prototype.hideBlockedUsers = function(e) {
            return this.shouldHideBlockedUsers = e, this;
          }, r.prototype.setRole = function(e) {
            return this.role = e, this;
          }, r.prototype.setRoles = function(e) {
            return this.roles = e, this;
          }, r.prototype.friendsOnly = function(e) {
            return this.showFriendsOnly = e, this;
          }, r.prototype.setTags = function(e) {
            return this.tags = e, this;
          }, r.prototype.withTags = function(e) {
            return this.showTags = e, this;
          }, r.prototype.setUIDs = function(e) {
            return this.UIDs = e, this;
          }, r.prototype.sortBy = function(e) {
            return this.SortBy = e, this;
          }, r.prototype.sortByOrder = function(e) {
            return this.SortOrder = e, this;
          }, r.prototype.searchIn = function(e) {
            return this.SearchIn = e, this;
          }, r.prototype.setPage = function(e) {
            return this.page = Math.max(0, e), this;
          }, r.prototype.build = function() {
            return this.role && this.roles && this.roles.push(this.role), new s(this);
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(r, e, l, u) {
          return new (l || (l = Promise))(function(C, c) {
            function d(I) {
              try {
                h(u.next(I));
              } catch (T) {
                c(T);
              }
            }
            function t(I) {
              try {
                h(u.throw(I));
              } catch (T) {
                c(T);
              }
            }
            function h(I) {
              var T;
              I.done ? C(I.value) : (T = I.value, T instanceof l ? T : new l(function(f) {
                f(T);
              })).then(d, t);
            }
            h((u = u.apply(r, e || [])).next());
          });
        }, i = this && this.__generator || function(r, e) {
          var l, u, C, c, d = {
            label: 0,
            sent: function() {
              if (1 & C[0]) throw C[1];
              return C[1];
            },
            trys: [],
            ops: []
          };
          return c = {
            next: t(0),
            throw: t(1),
            return: t(2)
          }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
            return this;
          }), c;
          function t(h) {
            return function(I) {
              return (function(T) {
                if (l) throw new TypeError("Generator is already executing.");
                for (; d; ) try {
                  if (l = 1, u && (C = 2 & T[0] ? u.return : T[0] ? u.throw || ((C = u.return) && C.call(u), 0) : u.next) && !(C = C.call(u, T[1])).done) return C;
                  switch (u = 0, C && (T = [2 & T[0], C.value]), T[0]) {
                    case 0:
                    case 1:
                      C = T;
                      break;
                    case 4:
                      return d.label++, {
                        value: T[1],
                        done: !1
                      };
                    case 5:
                      d.label++, u = T[1], T = [0];
                      continue;
                    case 7:
                      T = d.ops.pop(), d.trys.pop();
                      continue;
                    default:
                      if (!(C = 0 < (C = d.trys).length && C[C.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                        d = 0;
                        continue;
                      }
                      if (T[0] === 3 && (!C || T[1] > C[0] && T[1] < C[3])) {
                        d.label = T[1];
                        break;
                      }
                      if (T[0] === 6 && d.label < C[1]) {
                        d.label = C[1], C = T;
                        break;
                      }
                      if (C && d.label < C[2]) {
                        d.label = C[2], d.ops.push(T);
                        break;
                      }
                      C[2] && d.ops.pop(), d.trys.pop();
                      continue;
                  }
                  T = e.call(r, d);
                } catch (f) {
                  T = [6, f], u = 0;
                } finally {
                  l = C = 0;
                }
                if (5 & T[0]) throw T[1];
                return {
                  value: T[0] ? T[1] : void 0,
                  done: !0
                };
              })([h, I]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UserStore = void 0;
        var S = g(6), E = g(1), n = g(0), o = g(12), s = g(16);
        a.UserStore = (function() {
          function r(e) {
            this.store = n.constants.DEFAULT_STORE, E.isFalsy(e) || (this.store = e);
          }
          return r.prototype.initializeStorage = function() {
            var e;
            return p(this, void 0, void 0, function() {
              var l, u;
              return i(this, function(C) {
                switch (C.label) {
                  case 0:
                    if (this.userStore) return [2];
                    C.label = 1;
                  case 1:
                    return C.trys.push([
                      1,
                      5,
                      ,
                      6
                    ]), (l = s.StorageManager.getInstance()).isStorageInitialized() ? (this.userStore = l.getStorage(S.CometChat.getAppId(), n.LOCAL_STORE.USERS_STORE), [3, 4]) : [3, 2];
                  case 2:
                    return u = ((e = S.CometChat.appSettings) === null || e === void 0 ? void 0 : e.getStorageMode()) || n.StorageMode.LOCAL, [4, l.initialize(u)];
                  case 3:
                    C.sent(), this.userStore = l.getStorage(S.CometChat.getAppId(), n.LOCAL_STORE.USERS_STORE), C.label = 4;
                  case 4:
                    return [3, 6];
                  case 5:
                    return C.sent(), this.userStore = o.createInstance({ name: E.format(n.LOCAL_STORE.STORE_STRING, S.CometChat.getAppId(), n.LOCAL_STORE.USERS_STORE) }), this.userStore.setDriver([
                      o.LOCALSTORAGE,
                      o.INDEXEDDB,
                      o.WEBSQL
                    ]), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }, r.getInstance = function() {
            return r.UserStore ??= new r(), r.UserStore;
          }, r.prototype.set = function(e, l) {
            return p(this, void 0, void 0, function() {
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return u.sent(), [2, this.userStore.setItem(e, l)];
                }
              });
            });
          }, r.prototype.remove = function(e) {
            return p(this, void 0, void 0, function() {
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return l.sent(), [2, this.userStore.removeItem(e)];
                }
              });
            });
          }, r.prototype.get = function(e) {
            return p(this, void 0, void 0, function() {
              return i(this, function(l) {
                switch (l.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return l.sent(), [2, this.userStore.getItem(e)];
                }
              });
            });
          }, r.prototype.clearStore = function() {
            return p(this, void 0, void 0, function() {
              var e = this;
              return i(this, function(l) {
                return [2, new Promise(function(u, C) {
                  return p(e, void 0, void 0, function() {
                    var c;
                    return i(this, function(d) {
                      switch (d.label) {
                        case 0:
                          return d.trys.push([
                            0,
                            2,
                            ,
                            3
                          ]), [4, this.initializeStorage()];
                        case 1:
                          return d.sent(), this.userStore.clear().then(function() {
                            u(!0);
                          }).catch(function(t) {
                            C(t);
                          }), [3, 3];
                        case 2:
                          return c = d.sent(), C(c), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                })];
              });
            });
          }, r.prototype.clear = function(e) {
          }, r.prototype.selectStore = function(e) {
            this.store = e;
          }, r.prototype.storeUsers = function(e) {
            var l = this;
            return e.map(function(u) {
              l.set(u.getUid(), u);
            }), !0;
          }, r.prototype.storeUser = function(e) {
            return this.set(e.getUid(), e), !0;
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ConversationsRequestBuilder = a.ConversationsRequest = void 0;
        var p = g(4), i = g(1), S = g(2), E = g(15), n = g(23), o = g(0), s = (function() {
          function r(e) {
            this.limit = 30, this.next_page = 1, this.current_page = 0, this.total_pages = -1, this.fetchingInProgress = !1, this.getUserAndGroupTags = !1, this.withTags = !1, this.page = 0, this.pinnedBy = [], this.pagination = {
              total: 0,
              count: 0,
              per_page: 0,
              current_page: 0,
              total_pages: 0,
              links: []
            }, i.isFalsy(e) || (this.limit = e.limit, i.isFalsy(e.conversationType) || (this.conversationType = e.conversationType), e.searchKeyword && e.searchKeyword.trim() !== "" && (this.searchKeyword = e.searchKeyword), i.isFalsy(e.getUserAndGroupTags) || (this.getUserAndGroupTags = e.getUserAndGroupTags), e.tags && (this.tags = e.tags), i.isFalsy(e.WithTags) || (this.withTags = e.WithTags), e.groupTags && (this.groupTags = e.groupTags), e.userTags && (this.userTags = e.userTags), e.IncludeBlockedUsers && (this.includeBlockedUsers = e.IncludeBlockedUsers), e.WithBlockedInfo && (this.withBlockedInfo = e.WithBlockedInfo), e.unreadOnly && (this.unread = e.unreadOnly), e.page !== void 0 && (this.page = Math.max(0, e.page)), e.hideAgentic !== void 0 && (this.hideAgentic = e.hideAgentic), e.onlyAgentic !== void 0 && (this.onlyAgentic = e.onlyAgentic), e.pinnedBy !== void 0 && (this.pinnedBy = e.pinnedBy));
          }
          return r.prototype.validateConversationBuilder = function() {
            return this.limit === void 0 ? new S.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit"))) : isNaN(this.limit) ? new S.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))) : this.limit > o.DEFAULT_VALUES.CONVERSATION_MAX_LIMIT ? new S.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", o.DEFAULT_VALUES.CONVERSATION_MAX_LIMIT))) : this.limit < o.DEFAULT_VALUES.ZERO ? new S.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))) : typeof this.searchKeyword !== o.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING && this.searchKeyword !== void 0 ? new S.CometChatException(JSON.parse(i.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()"))) : void 0;
          }, r.prototype.fetchNext = function() {
            var e = this;
            return new Promise(function(l, u) {
              try {
                if (e.fetchingInProgress) e.fetchingInProgress = !1, l([]);
                else {
                  e.fetchingInProgress = !0;
                  var C = e.validateConversationBuilder();
                  if (C instanceof S.CometChatException) return void u(C);
                  var c = e.getPageToFetch();
                  p.makeApiCall("getConversations", {}, e.getNextData()).then(function(d) {
                    if (d.meta && (e.total_pages = d.meta.pagination.total_pages), 0 < d.data.length) {
                      e.current_page = c, e.pagination = d.meta.pagination;
                      var t = [];
                      d.data.map(function(h) {
                        t.push(n.ConversationController.trasformJSONConversation(h.conversationId, h.conversationType, h.lastMessage, h.conversationWith, parseInt(h.unreadMessageCount), h.tags ? h.tags : [], h.unreadMentionsCount, h.lastReadMessageId, h.latestMessageId, h));
                      }), l(t);
                    } else l([]);
                    e.fetchingInProgress = !1;
                  }, function(d) {
                    e.fetchingInProgress = !1, u(new S.CometChatException(d.error));
                  });
                }
              } catch (d) {
                e.fetchingInProgress = !1, u(new S.CometChatException(d));
              }
            });
          }, r.prototype.getNextData = function() {
            var e = {};
            return e.per_page = this.limit, i.isFalsy(this.conversationType) || (e.conversationType = this.conversationType), this.searchKeyword && (e.searchKey = encodeURIComponent(this.searchKeyword.trim())), i.isFalsy(this.getUserAndGroupTags) || (e.withUserAndGroupTags = this.getUserAndGroupTags), i.isFalsy(this.tags) || (e.tags = this.tags.map(function(l) {
              return encodeURIComponent(l.trim());
            })), i.isFalsy(this.withTags) || (e.withTags = this.withTags), i.isFalsy(this.userTags) || (e.userTags = this.userTags.map(function(l) {
              return encodeURIComponent(l.trim());
            })), i.isFalsy(this.groupTags) || (e.groupTags = this.groupTags.map(function(l) {
              return encodeURIComponent(l.trim());
            })), i.isFalsy(this.includeBlockedUsers) || (e.includeBlockedUsers = this.includeBlockedUsers), i.isFalsy(this.withBlockedInfo) || (e.withBlockedInfo = this.withBlockedInfo), i.isFalsy(this.unread) || (e.unread = this.unread), i.isFalsy(this.hideAgentic) || (e.hideAgentic = this.hideAgentic), i.isFalsy(this.onlyAgentic) || (e.onlyAgentic = this.onlyAgentic), Object.assign(e, E.PinSaveParser.conversationPinnedByQuery(this.pinnedBy)), e.page = this.getPageToFetch(), e;
          }, r.prototype.isIncludeBlockedUsers = function() {
            return this.includeBlockedUsers;
          }, r.prototype.isWithBlockedInfo = function() {
            return this.withBlockedInfo;
          }, r.prototype.getLimit = function() {
            return this.limit;
          }, r.prototype.getConversationType = function() {
            return this.conversationType;
          }, r.prototype.getSearchKeyword = function() {
            return this.searchKeyword;
          }, r.prototype.isWithUserAndGroupTags = function() {
            return this.getUserAndGroupTags;
          }, r.prototype.getTags = function() {
            return this.tags;
          }, r.prototype.isWithTags = function() {
            return this.withTags;
          }, r.prototype.getGroupTags = function() {
            return this.groupTags;
          }, r.prototype.getUserTags = function() {
            return this.userTags;
          }, r.prototype.getUnread = function() {
            return this.unread;
          }, r.prototype.getPage = function() {
            return this.current_page;
          }, r.prototype.getPageToFetch = function() {
            return this.current_page == 0 ? this.page + 1 : this.current_page + 1;
          }, r.prototype.getHideAgentic = function() {
            return this.hideAgentic;
          }, r.prototype.getOnlyAgentic = function() {
            return this.onlyAgentic;
          }, r;
        })();
        a.ConversationsRequest = s, a.ConversationsRequestBuilder = (function() {
          function r() {
            this.WithTags = !1, this.IncludeBlockedUsers = !1, this.WithBlockedInfo = !1, this.unreadOnly = !1, this.page = 0;
          }
          return r.prototype.setLimit = function(e) {
            return this.limit = e, this;
          }, r.prototype.setConversationType = function(e) {
            return this.conversationType = e, this;
          }, r.prototype.setSearchKeyword = function(e) {
            return this.searchKeyword = e, this;
          }, r.prototype.withUserAndGroupTags = function(e) {
            return typeof e == "boolean" && (this.getUserAndGroupTags = e), this;
          }, r.prototype.setTags = function(e) {
            return this.tags = e, this;
          }, r.prototype.withTags = function(e) {
            return this.WithTags = e, this;
          }, r.prototype.setGroupTags = function(e) {
            return this.groupTags = e, this;
          }, r.prototype.setUserTags = function(e) {
            return this.userTags = e, this;
          }, r.prototype.setIncludeBlockedUsers = function(e) {
            return this.IncludeBlockedUsers = e, this;
          }, r.prototype.includeBlockedUsers = function(e) {
            return this.IncludeBlockedUsers = e, this;
          }, r.prototype.setWithBlockedInfo = function(e) {
            return this.WithBlockedInfo = e, this;
          }, r.prototype.withBlockedInfo = function(e) {
            return this.WithBlockedInfo = e, this;
          }, r.prototype.setUnread = function(e) {
            return this.unreadOnly = e, this;
          }, r.prototype.setPage = function(e) {
            return this.page = Math.max(0, e), this;
          }, r.prototype.setHideAgentic = function(e) {
            return this.hideAgentic = e, this;
          }, r.prototype.setPinnedBy = function(e) {
            return this.pinnedBy = e, this;
          }, r.prototype.setOnlyAgentic = function(e) {
            return this.onlyAgentic = e, this;
          }, r.prototype.build = function() {
            return new s(this);
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(t, h, I, T) {
          return new (I || (I = Promise))(function(f, P) {
            function m(M) {
              try {
                V(T.next(M));
              } catch (z) {
                P(z);
              }
            }
            function D(M) {
              try {
                V(T.throw(M));
              } catch (z) {
                P(z);
              }
            }
            function V(M) {
              var z;
              M.done ? f(M.value) : (z = M.value, z instanceof I ? z : new I(function(le) {
                le(z);
              })).then(m, D);
            }
            V((T = T.apply(t, h || [])).next());
          });
        }, i = this && this.__generator || function(t, h) {
          var I, T, f, P, m = {
            label: 0,
            sent: function() {
              if (1 & f[0]) throw f[1];
              return f[1];
            },
            trys: [],
            ops: []
          };
          return P = {
            next: D(0),
            throw: D(1),
            return: D(2)
          }, typeof Symbol == "function" && (P[Symbol.iterator] = function() {
            return this;
          }), P;
          function D(V) {
            return function(M) {
              return (function(z) {
                if (I) throw new TypeError("Generator is already executing.");
                for (; m; ) try {
                  if (I = 1, T && (f = 2 & z[0] ? T.return : z[0] ? T.throw || ((f = T.return) && f.call(T), 0) : T.next) && !(f = f.call(T, z[1])).done) return f;
                  switch (T = 0, f && (z = [2 & z[0], f.value]), z[0]) {
                    case 0:
                    case 1:
                      f = z;
                      break;
                    case 4:
                      return m.label++, {
                        value: z[1],
                        done: !1
                      };
                    case 5:
                      m.label++, T = z[1], z = [0];
                      continue;
                    case 7:
                      z = m.ops.pop(), m.trys.pop();
                      continue;
                    default:
                      if (!(f = 0 < (f = m.trys).length && f[f.length - 1]) && (z[0] === 6 || z[0] === 2)) {
                        m = 0;
                        continue;
                      }
                      if (z[0] === 3 && (!f || z[1] > f[0] && z[1] < f[3])) {
                        m.label = z[1];
                        break;
                      }
                      if (z[0] === 6 && m.label < f[1]) {
                        m.label = f[1], f = z;
                        break;
                      }
                      if (f && m.label < f[2]) {
                        m.label = f[2], m.ops.push(z);
                        break;
                      }
                      f[2] && m.ops.pop(), m.trys.pop();
                      continue;
                  }
                  z = h.call(t, m);
                } catch (le) {
                  z = [6, le], T = 0;
                } finally {
                  I = f = 0;
                }
                if (5 & z[0]) throw z[1];
                return {
                  value: z[0] ? z[1] : void 0,
                  done: !0
                };
              })([V, M]);
            };
          }
        }, S = this && this.__spreadArrays || function() {
          for (var t = 0, h = 0, I = arguments.length; h < I; h++) t += arguments[h].length;
          var T = Array(t), f = 0;
          for (h = 0; h < I; h++) for (var P = arguments[h], m = 0, D = P.length; m < D; m++, f++) T[f] = P[m];
          return T;
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MessagesRequestBuilder = a.MessagesRequest = void 0;
        var E = g(2), n = g(4), o = g(11), s = g(1), r = g(82), e = g(0), l = g(13), u = g(36), C = g(22), c = g(15), d = (function() {
          function t(h) {
            var I, T;
            this.limit = e.DEFAULT_VALUES.MSGS_LIMIT, this.timestamp = 0, this.id = e.DEFAULT_VALUES.DEFAULT_MSG_ID, this.messageStore = r.MessagesStore.getInstance(), this.endpointName = "getUserMessages", this.listId = "", this.totalPages = 0, this.unread = !1, this.inProgress = !1, this.hideMessagesFromBlockedUsers = !1, this.updatedAt = 0, this.onlyUpdates = 0, this.paginationMeta = {}, this.WithTags = !1, this.hideDeletedMessages = !1, this.mentionsWithUserTags = !1, this.mentionsWithBlockedRelation = !1, this.interactionGoalCompletedOnly = !1, this.hasAttachments = !1, this.hasLinks = !1, this.hasMentions = !1, this.hasReactions = !1, this.WithParent = !1, this.hideQuotedMessages = !1, this.pinned = !1, this.saved = !1, this.lastResponseHadNoCursor = !1, this.limit = h.limit, this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.PER_PAGE] = this.limit, this.pinned = (I = h.Pinned) !== null && I !== void 0 && I, this.saved = (T = h.Saved) !== null && T !== void 0 && T, this.pinned && Object.assign(this.paginationMeta, c.PinSaveParser.pinnedListQuery()), this.saved && Object.assign(this.paginationMeta, c.PinSaveParser.savedListQuery()), this.uid = h.uid, this.guid = h.guid, this.parentMessageId = h.parentMessageId, this.timestamp = h.timestamp, this.timestamp && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.SENT_AT] = this.timestamp), this.id = h.id, this.id != e.DEFAULT_VALUES.DEFAULT_MSG_ID && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.ID] = this.id), this.hideMessagesFromBlockedUsers = h.HideMessagesFromBlockedUsers, this.hideMessagesFromBlockedUsers && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_MESSAGES_FROM_BLOCKED_USER] = this.hideMessagesFromBlockedUsers), this.unread = h.unread, this.unread && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.UNREAD] = this.unread), h.searchKey && (this.searchKey = h.searchKey, this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY] = this.searchKey), h.onlyUpdate && (this.onlyUpdates = h.onlyUpdate, this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.ONLY_UPDATES] = this.onlyUpdates), h.updatedAt && (this.updatedAt = h.updatedAt, this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.UPDATED_AT] = this.updatedAt), h.category && (this.category = h.category), h.categories && (this.categories = h.categories), h.type && (this.type = h.type), h.types && (this.types = h.types), h.WithTags && (this.WithTags = h.WithTags), h.tags && (this.tags = h.tags), h.HideReplies && (this.hideReplies = h.HideReplies, this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_REPLIES] = this.hideReplies), this.hideDeletedMessages = h.HideDeletedMessages, this.hideDeletedMessages && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_DELETED_MESSAGES] = this.hideDeletedMessages), this.hideQuotedMessages = h.HideQuotedMessages, this.hideQuotedMessages && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_QUOTED_MESSAGES] = this.hideQuotedMessages), this.hasAttachments = h.HasAttachments, this.hasAttachments && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_ATTACHMENTS] = this.hasAttachments), this.hasLinks = h.HasLinks, this.hasLinks && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_LINKS] = this.hasLinks), this.hasMentions = h.HasMentions, this.hasMentions && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_MENTIONS] = this.hasMentions), this.hasReactions = h.HasReactions, this.hasReactions && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_REACTIONS] = this.hasReactions), h.mentionedUIDs && (this.mentionedUIDs = h.mentionedUIDs), h.attachmentTypes && (this.attachmentTypes = h.attachmentTypes), this.mentionsWithUserTags = h.mentionsWithUserTags, this.mentionsWithBlockedRelation = h.mentionsWithBlockedRelation, this.interactionGoalCompletedOnly = h.interactionGoalCompletedOnly, this.interactionGoalCompletedOnly && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.ONLY_INTERACTION_GOAL_COMPLETED] = this.interactionGoalCompletedOnly), h.WithParent && (this.WithParent = h.WithParent);
          }
          return t.prototype.getLimit = function() {
            return this.limit;
          }, t.prototype.getUID = function() {
            return this.uid;
          }, t.prototype.getGUID = function() {
            return this.guid;
          }, t.prototype.getMessageId = function() {
            return this.id;
          }, t.prototype.isUnread = function() {
            return this.unread;
          }, t.prototype.isHideMessagesFromBlockedUsers = function() {
            return this.hideMessagesFromBlockedUsers;
          }, t.prototype.getTimestamp = function() {
            return this.timestamp;
          }, t.prototype.getSearchKeyword = function() {
            return this.searchKey;
          }, t.prototype.getUpdatedAfter = function() {
            return this.updatedAt;
          }, t.prototype.isUpdatesOnly = function() {
            return this.onlyUpdates;
          }, t.prototype.getCategories = function() {
            return this.categories;
          }, t.prototype.getCategory = function() {
            return this.category;
          }, t.prototype.getTypes = function() {
            return this.types;
          }, t.prototype.getType = function() {
            return this.type;
          }, t.prototype.getParentMessageId = function() {
            return this.parentMessageId;
          }, t.prototype.isHideReplies = function() {
            return this.hideReplies;
          }, t.prototype.isHideDeletedMessages = function() {
            return this.hideDeletedMessages;
          }, t.prototype.getHasAttachments = function() {
            return this.hasAttachments;
          }, t.prototype.getHasLinks = function() {
            return this.hasLinks;
          }, t.prototype.getHasMentions = function() {
            return this.hasMentions;
          }, t.prototype.getHasReactions = function() {
            return this.hasReactions;
          }, t.prototype.getMentionedUIDs = function() {
            return this.mentionedUIDs;
          }, t.prototype.getTags = function() {
            return this.tags;
          }, t.prototype.isWithTags = function() {
            return this.WithTags;
          }, t.prototype.isMentionsWithTagInfo = function() {
            return this.mentionsWithUserTags;
          }, t.prototype.isMentionsWithBlockedInfo = function() {
            return this.mentionsWithBlockedRelation;
          }, t.prototype.isInteractionGoalCompletedOnly = function() {
            return this.interactionGoalCompletedOnly;
          }, t.prototype.getAttachmentTypes = function() {
            return this.attachmentTypes;
          }, t.prototype.isWithParent = function() {
            return this.WithParent;
          }, t.prototype.isHideQuotedMessages = function() {
            return this.hideQuotedMessages;
          }, t.prototype.isPinSaveListRead = function() {
            return this.pinned || this.saved;
          }, t.prototype.usesServerCursorVerbatim = function() {
            return this.pinned;
          }, t.prototype.fetchNext = function() {
            var h = this;
            return new Promise(function(I, T) {
              return p(h, void 0, void 0, function() {
                var f, P, m;
                return i(this, function(D) {
                  switch (D.label) {
                    case 0:
                      if (D.trys.push([
                        0,
                        5,
                        ,
                        6
                      ]), this.inProgress) return this.inProgress = !1, T(new E.CometChatException(l.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), [2];
                      if (this.inProgress = !0, this.onlyUpdates) {
                        if (this.updatedAt == 0) return this.inProgress = !1, T(new E.CometChatException(l.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                      } else if (this.timestamp == 0 && this.id == 0 && this.updatedAt == 0 && !this.isPinSaveListRead()) return this.inProgress = !1, T(new E.CometChatException(l.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                      this.affix = e.MessageConstatnts.PAGINATION.AFFIX.APPEND, this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, this.currentMethod = e.MessageConstatnts.PAGINATION.AFFIX.APPEND, D.label = 1;
                    case 1:
                      return D.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [4, this.makeAPICall()];
                    case 2:
                      return f = D.sent(), I(f), this.inProgress = !1, [3, 4];
                    case 3:
                      return P = D.sent(), this.inProgress = !1, T(new E.CometChatException(P)), [3, 4];
                    case 4:
                      return [3, 6];
                    case 5:
                      return m = D.sent(), this.inProgress = !1, T(new E.CometChatException(m)), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            });
          }, t.prototype.fetchPrevious = function() {
            var h = this;
            return new Promise(function(I, T) {
              return p(h, void 0, void 0, function() {
                var f, P, m;
                return i(this, function(D) {
                  switch (D.label) {
                    case 0:
                      if (D.trys.push([
                        0,
                        5,
                        ,
                        6
                      ]), this.inProgress) return T(new E.CometChatException(l.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), this.inProgress = !1, [2];
                      if (this.inProgress = !0, this.onlyUpdates && this.updatedAt == 0) return this.inProgress = !1, T(new E.CometChatException(l.MESSAGES_REQUEST_ERRORS.NOT_ENOUGH_PARAMS)), [2];
                      this.affix = e.MessageConstatnts.PAGINATION.AFFIX.PREPEND, this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, this.currentMethod = e.MessageConstatnts.PAGINATION.AFFIX.PREPEND, D.label = 1;
                    case 1:
                      return D.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [4, this.makeAPICall()];
                    case 2:
                      return f = D.sent(), I(f), this.inProgress = !1, [3, 4];
                    case 3:
                      return P = D.sent(), this.inProgress = !1, T(new E.CometChatException(P)), [3, 4];
                    case 4:
                      return [3, 6];
                    case 5:
                      return m = D.sent(), this.inProgress = !1, T(new E.CometChatException(m)), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            });
          }, t.prototype.makeAPICall = function() {
            var h = this;
            return new Promise(function(I, T) {
              try {
                var f = h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.PER_PAGE];
                if (f === void 0) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit"))));
                if (isNaN(f)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                if (f > e.DEFAULT_VALUES.MSGS_MAX_LIMIT) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", e.DEFAULT_VALUES.MSGS_MAX_LIMIT))));
                if (f < e.DEFAULT_VALUES.ZERO) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                var P = h.uid;
                if (P !== void 0) {
                  if (typeof P !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "UID", "UID", "setUID()"))));
                  if (s.isFalsy(P.trim())) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.INVALID), "UID", "UID", "UID", "UID"))));
                  h.uid = P.trim();
                }
                var m = h.guid;
                if (m !== void 0) {
                  if (typeof m !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "GUID", "GUID", "setGUID()"))));
                  if (s.isFalsy(m.trim())) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.INVALID), "GUID", "GUID", "GUID", "GUID"))));
                  h.guid = m.trim();
                }
                var D = h.mentionsWithUserTags;
                if (D !== void 0) {
                  if (typeof D !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "MENTIONS_WITH_TAG_INFO", "MENTIONS_WITH_TAG_INFO", "mentionsWithTagInfo()"))));
                  D == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.MENTIONS_WITH_TAG_INFO] = 1);
                }
                var V = h.mentionsWithBlockedRelation;
                if (V !== void 0) {
                  if (typeof V !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "MENTIONS_WITH_BLOCKED_INFO", "MENTIONS_WITH_BLOCKED_INFO", "mentionsWithBlockedInfo()"))));
                  V == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.MENTIONS_WITH_BLOCKED_INFO] = 1);
                }
                var M = h.parentMessageId;
                if (M !== void 0) {
                  if (isNaN(M)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "PARENT_MESSAGE_ID", "PARENT_MESSAGE_ID", "setParentMessageId()"))));
                  if (M < e.DEFAULT_VALUES.ZERO) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "PARENT_MESSAGE_ID", "PARENT_MESSAGE_ID", "setParentMessageId()"))));
                }
                var z = h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY];
                if (z !== void 0) {
                  if (typeof z !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()"))));
                  h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.SEARCH_KEY] = encodeURIComponent(z.trim());
                }
                var le = h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.ID];
                if (le !== void 0) {
                  if (isNaN(le)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "setMessageId()"))));
                  if (le < e.DEFAULT_VALUES.ZERO) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "MESSAGE_ID", "MESSAGE_ID", "setMessageId()"))));
                }
                var de = h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.SENT_AT];
                if (de !== void 0) {
                  if (isNaN(de)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "TIMESTAMP", "TIMESTAMP", "setTimestamp()"))));
                  if (de < e.DEFAULT_VALUES.ZERO) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "TIMESTAMP", "TIMESTAMP", "setTimestamp()"))));
                }
                var W = h.hideMessagesFromBlockedUsers;
                if (W !== void 0) {
                  if (typeof W !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_MESSAGES_FROM_BLOCKED_USERS", "HIDE_MESSAGES_FROM_BLOCKED_USERS", "hideMessagesFromBlockedUsers()"))));
                  W == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_MESSAGES_FROM_BLOCKED_USER] = 1);
                }
                var q = h.unread;
                if (q !== void 0) {
                  if (typeof q !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "UNREAD", "UNREAD", "setUnread()"))));
                  q == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.UNREAD] = 1);
                }
                var se = h.category;
                if (se !== void 0) {
                  if (typeof se !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_CATEGORY", "SET_CATEGORY", "setCategory()"))));
                  if (s.isFalsy(se.trim())) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.INVALID), "SET_CATEGORY", "SET_CATEGORY", "category", "category"))));
                  h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.CATEGORIES] = se.trim();
                }
                var Ae = h.categories;
                if (Ae !== void 0) {
                  if (!Array.isArray(Ae)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_CATEGORIES", "SET_CATEGORIES", "setCategories()"))));
                  0 < Ae.length && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.CATEGORIES] = Ae);
                }
                var Pe = h.type;
                if (Pe !== void 0) {
                  if (typeof Pe !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_TYPE", "SET_TYPE", "setType()"))));
                  if (s.isFalsy(Pe.trim())) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.INVALID), "SET_TYPE", "SET_TYPE", "type", "type"))));
                  h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.TYPES] = encodeURIComponent(Pe.trim());
                }
                var Ee = h.types;
                if (Ee !== void 0) {
                  if (!Array.isArray(Ee)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_TYPES", "SET_TYPES", "setTypes()"))));
                  0 < Ee.length && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.TYPES] = Ee.map(function(ce) {
                    return encodeURIComponent(ce);
                  }));
                }
                var fe = h.tags;
                if (fe !== void 0) {
                  if (!Array.isArray(fe)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_TAGS", "SET_TAGS", "setTags()"))));
                  0 < fe.length && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.TAGS] = fe.map(function(ce) {
                    return encodeURIComponent(ce);
                  }));
                }
                var Te = h.WithTags;
                if (Te !== void 0) {
                  if (typeof Te !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "WITH_TAGS", "WITH_TAGS", "withTags()"))));
                  Te == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.WITH_TAGS] = 1);
                }
                var ue = h.hideDeletedMessages;
                if (ue !== void 0) {
                  if (typeof ue !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_DELETED_MESSAGES", "HIDE_DELETED_MESSAGES", "hideDeletedMessages()"))));
                  ue == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_DELETED_MESSAGES] = 1);
                }
                var F = h.interactionGoalCompletedOnly;
                if (F !== void 0) {
                  if (typeof F !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "ONLY_INTERACTION_GOAL_COMPLETED", "ONLY_INTERACTION_GOAL_COMPLETED", "interactionGoalCompletedOnly()"))));
                  F == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.ONLY_INTERACTION_GOAL_COMPLETED] = 1);
                }
                var b = h.hasAttachments;
                if (b !== void 0) {
                  if (typeof b !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HAS_ATTACHMENTS", "HAS_ATTACHMENTS", "hasAttachments()"))));
                  b == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_ATTACHMENTS] = 1);
                }
                var w = h.hasLinks;
                if (w !== void 0) {
                  if (typeof w !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HAS_LINKS", "HAS_LINKS", "hasLinks()"))));
                  w == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_LINKS] = 1);
                }
                var ie = h.hasMentions;
                if (ie !== void 0) {
                  if (typeof ie !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HAS_MENTIONS", "HAS_MENTIONS", "hasMentions()"))));
                  ie == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_MENTIONS] = 1);
                }
                var ae = h.hasReactions;
                if (ae !== void 0) {
                  if (typeof ae !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HAS_REACTIONS", "HAS_REACTIONS", "hasReactions()"))));
                  ae == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HAS_REACTIONS] = 1);
                }
                var ne = h.mentionedUIDs;
                if (ne !== void 0) {
                  if (!Array.isArray(ne)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "MENTIONED_UIDS", "MENTIONED_UIDS", "setMentionedUIDs()"))));
                  0 < ne?.length && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.MENTIONED_UIDS] = ne);
                }
                var Ne = h.attachmentTypes;
                if (Ne !== void 0) {
                  if (!Array.isArray(Ne)) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_AN_ARRAY), "SET_TYPES", "SET_TYPES", "setTypes()"))));
                  0 < Ne.length && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.ATTACHMENT_TYPES] = Ne);
                }
                var ge = h.WithParent;
                if (ge !== void 0) {
                  if (typeof ge !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "WITH_PARENT", "WITH_PARENT", "withParent()"))));
                  ge == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.WITH_PARENT] = 1);
                }
                var Ie = h.hideQuotedMessages;
                if (Ie !== void 0) {
                  if (typeof Ie !== e.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.BOOLEAN) return void T(new E.CometChatException(JSON.parse(s.format(JSON.stringify(e.GENERAL_ERROR.PARAMETER_MUST_BE_A_BOOLEAN), "HIDE_QUOTED_MESSAGES", "HIDE_QUOTED_MESSAGES", "hideQuotedMessages()"))));
                  Ie == 1 && (h.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_QUOTED_MESSAGES] = 1);
                }
                if (h.createEndpoint(), h.lastResponseHadNoCursor) {
                  if (h.lastAffix == h.affix) return void I([]);
                } else if (h.totalPages && h.totalPages == 1) {
                  if (h.lastAffix == h.affix) return void I([]);
                }
                Object.assign(h.paginationMeta, C.ThreadParser.withThreadSubscribedParam()), n.makeApiCall(h.endpointName, { listId: h.listId }, h.paginationMeta).then(function(ce) {
                  return p(h, void 0, void 0, function() {
                    var De, be, Ue, ke, Xe, Ke = this;
                    return i(this, function(ot) {
                      return De = [], be = ce?.[e.ResponseConstants.RESPONSE_KEYS.KEY_META], Ue = be?.[e.ResponseConstants.RESPONSE_KEYS.KEY_CURSOR], ke = be?.pagination, Ue && (Ue.hasOwnProperty(e.MessageConstatnts.PAGINATION.KEYS.ID) && this.id == 0 && (this.id = parseInt(Ue[e.MessageConstatnts.PAGINATION.KEYS.ID])), Ue.hasOwnProperty(e.MessageConstatnts.PAGINATION.KEYS.SENT_AT) && this.timestamp == 0 && (this.timestamp = Ue[e.MessageConstatnts.PAGINATION.KEYS.SENT_AT])), ke && ke.hasOwnProperty("total_pages") && (this.totalPages = ke.total_pages), this.lastResponseHadNoCursor = !Ue, Ue && Ue.hasOwnProperty("affix") ? this.lastAffix = Ue.affix : this.lastAffix = this.affix, Ue && this.usesServerCursorVerbatim() && Object.keys(Ue).forEach(function(ve) {
                        ve !== e.MessageConstatnts.PAGINATION.KEYS.AFFIX && (Ke.paginationMeta[ve] = Ue[ve]);
                      }), ce.data[0] ? ((Xe = !this.usesServerCursorVerbatim()) && (0 < this.id && (this.id = parseInt(ce.data[0].id)), 0 < this.timestamp && (this.timestamp = ce.data[0].sentAt)), ce.data.map(function(ve) {
                        return p(Ke, void 0, void 0, function() {
                          return i(this, function(st) {
                            return u.MessageListnerMaping.getInstance().get(e.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST).then(function(He) {
                              parseInt(ve.id) > He && u.MessageListnerMaping.getInstance().set(e.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST, parseInt(ve.id));
                            }, function(He) {
                              u.MessageListnerMaping.getInstance().set(e.LOCAL_STORE.KEY_MESSAGE_LISTENER_LIST, parseInt(ve.id));
                            }), Xe && (this.affix == e.MessageConstatnts.PAGINATION.AFFIX.APPEND ? (this.id < parseInt(ve.id) && 0 < this.id && (this.id = parseInt(ve.id)), this.timestamp < ve.sentAt && 0 < this.timestamp && (this.timestamp = ve.sentAt), this.updatedAt < ve.updatedAt && 0 < this.updatedAt && (this.updatedAt = ve.updatedAt)) : (this.id > parseInt(ve.id) && (this.id = parseInt(ve.id)), this.timestamp > ve.sentAt && (this.timestamp = ve.sentAt), this.updatedAt > ve.updatedAt && (this.updatedAt = ve.updatedAt)), this.id && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.ID] = this.id), this.timestamp && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.SENT_AT] = this.timestamp), this.updatedAt && (this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.UPDATED_AT] = this.updatedAt)), De.push(o.MessageController.trasformJSONMessge(ve)), [2];
                          });
                        });
                      })) : De = [], I(De), [2];
                    });
                  });
                }, function(ce) {
                  T(new E.CometChatException(ce && ce.error ? ce.error : ce));
                }).catch(function(ce) {
                  T(new E.CometChatException(ce));
                });
              } catch (ce) {
                T(new E.CometChatException(ce));
              }
            });
          }, t.prototype.createEndpoint = function() {
            this.parentMessageId ? (this.endpointName = "getThreadMessages", this.listId = this.parentMessageId.toString(), this.hideReplies && (this.hideReplies = !1, delete this.paginationMeta[e.MessageConstatnts.PAGINATION.KEYS.HIDE_REPLIES])) : (s.isFalsy(this.guid) || s.isFalsy(this.uid)) && s.isFalsy(this.guid) ? (s.isFalsy(this.uid) ? this.endpointName = "getMessages" : this.endpointName = "getUserMessages", this.listId = this.uid) : (this.endpointName = "getGroupMessages", this.listId = this.guid);
          }, t.prototype.makeData = function() {
            var h = {};
            h[e.MessageConstatnts.PAGINATION.KEYS.PER_PAGE] = this.limit, h[e.MessageConstatnts.PAGINATION.KEYS.AFFIX] = this.affix, (s.isFalsy(this.guid) || s.isFalsy(this.uid)) && s.isFalsy(this.guid) && s.isFalsy(this.uid);
          }, t.prototype.getFilteredPreviousDataByReceiverId = function(h) {
            return p(this, void 0, void 0, function() {
              var I, T = this;
              return i(this, function(f) {
                switch (f.label) {
                  case 0:
                    switch (I = [], h) {
                      case "user":
                        return [3, 1];
                      case "group":
                        return [3, 3];
                      case "both":
                        return [3, 5];
                    }
                    return [3, 7];
                  case 1:
                    return [4, r.MessagesStore.getInstance().get(this.uid).then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 2:
                    return f.sent(), [3, 9];
                  case 3:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 4:
                    f.sent(), f.label = 5;
                  case 5:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).filter(function(m) {
                        return P[m].sender.uid == T.uid;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 6:
                    return f.sent(), [3, 9];
                  case 7:
                    return [4, r.MessagesStore.getInstance().getAllMessages().then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 8:
                    return f.sent(), [3, 9];
                  case 9:
                    return [2, I];
                }
              });
            });
          }, t.prototype.getFilteredNextDataByReceiverId = function(h) {
            return p(this, void 0, void 0, function() {
              var I, T = this;
              return i(this, function(f) {
                switch (f.label) {
                  case 0:
                    switch (I = [], h) {
                      case "user":
                        return [3, 1];
                      case "group":
                        return [3, 3];
                      case "both":
                        return [3, 5];
                    }
                    return [3, 7];
                  case 1:
                    return [4, r.MessagesStore.getInstance().get(this.uid).then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 2:
                    return f.sent(), [3, 9];
                  case 3:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 4:
                    f.sent(), f.label = 5;
                  case 5:
                    return [4, r.MessagesStore.getInstance().get(this.guid).then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).filter(function(m) {
                        return P[m].sender.uid == T.uid;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 6:
                    return f.sent(), [3, 9];
                  case 7:
                    return [4, r.MessagesStore.getInstance().getAllMessages().then(function(P) {
                      Object.keys(P).filter(function(m) {
                        return parseInt(m) > T.id;
                      }).map(function(m) {
                        I = S(I, [P[m]]);
                      });
                    })];
                  case 8:
                    return f.sent(), [3, 9];
                  case 9:
                    return [2, I];
                }
              });
            });
          }, t;
        })();
        a.MessagesRequest = d, a.MessagesRequestBuilder = (function() {
          function t() {
            this.maxLimit = e.DEFAULT_VALUES.MSGS_MAX_LIMIT, this.timestamp = 0, this.id = e.DEFAULT_VALUES.DEFAULT_MSG_ID, this.unread = !1, this.HideMessagesFromBlockedUsers = !1, this.onlyUpdate = 0, this.HideDeletedMessages = !1, this.Pinned = !1, this.Saved = !1, this.WithTags = !1, this.interactionGoalCompletedOnly = !1, this.mentionsWithUserTags = !1, this.mentionsWithBlockedRelation = !1, this.HasAttachments = !1, this.HasLinks = !1, this.HasMentions = !1, this.HasReactions = !1, this.WithParent = !1, this.HideQuotedMessages = !1;
          }
          return t.prototype.setLimit = function(h) {
            return this.limit = h, this;
          }, t.prototype.setGUID = function(h) {
            return this.guid = h, this;
          }, t.prototype.setUID = function(h) {
            return this.uid = h, this;
          }, t.prototype.setParentMessageId = function(h) {
            return this.parentMessageId = h, this;
          }, t.prototype.setTimestamp = function(h) {
            return h === void 0 && (h = s.getCurrentTime()), this.timestamp = h, this;
          }, t.prototype.setMessageId = function(h) {
            return h === void 0 && (h = e.DEFAULT_VALUES.DEFAULT_MSG_ID), this.id = h, this;
          }, t.prototype.setUnread = function(h) {
            return h === void 0 && (h = !1), this.unread = h, this;
          }, t.prototype.hideMessagesFromBlockedUsers = function(h) {
            return h === void 0 && (h = !1), this.HideMessagesFromBlockedUsers = h, this;
          }, t.prototype.setSearchKeyword = function(h) {
            return this.searchKey = h, this;
          }, t.prototype.setUpdatedAfter = function(h) {
            return this.updatedAt = h, this;
          }, t.prototype.updatesOnly = function(h) {
            return h && (this.onlyUpdate = 1), this;
          }, t.prototype.setCategory = function(h) {
            return this.category = h, this;
          }, t.prototype.setCategories = function(h) {
            return this.categories = h, this;
          }, t.prototype.setType = function(h) {
            return this.type = h, this;
          }, t.prototype.setTypes = function(h) {
            return this.types = h, this;
          }, t.prototype.hideReplies = function(h) {
            return this.HideReplies = h, this;
          }, t.prototype.hideDeletedMessages = function(h) {
            return this.HideDeletedMessages = h, this;
          }, t.prototype.hasAttachments = function(h) {
            return this.HasAttachments = h, this;
          }, t.prototype.hasLinks = function(h) {
            return this.HasLinks = h, this;
          }, t.prototype.hasMentions = function(h) {
            return this.HasMentions = h, this;
          }, t.prototype.hasReactions = function(h) {
            return this.HasReactions = h, this;
          }, t.prototype.setPinned = function(h) {
            return h === void 0 && (h = !0), this.Pinned = h, this;
          }, t.prototype.setSaved = function(h) {
            return h === void 0 && (h = !0), this.Saved = h, this;
          }, t.prototype.setMentionedUIDs = function(h) {
            return this.mentionedUIDs = h, this;
          }, t.prototype.setTags = function(h) {
            return this.tags = h, this;
          }, t.prototype.withTags = function(h) {
            return this.WithTags = h, this;
          }, t.prototype.mentionsWithTagInfo = function(h) {
            return h === void 0 && (h = !1), this.mentionsWithUserTags = h, this;
          }, t.prototype.mentionsWithBlockedInfo = function(h) {
            return h === void 0 && (h = !1), this.mentionsWithBlockedRelation = h, this;
          }, t.prototype.setInteractionGoalCompletedOnly = function(h) {
            return h === void 0 && (h = !1), this.interactionGoalCompletedOnly = h, this;
          }, t.prototype.setAttachmentTypes = function(h) {
            return this.attachmentTypes = h, this;
          }, t.prototype.withParent = function(h) {
            return h === void 0 && (h = !1), this.WithParent = h, this;
          }, t.prototype.hideQuotedMessages = function(h) {
            return this.HideQuotedMessages = h, this;
          }, t.prototype.build = function() {
            return this.category && this.categories && this.categories.push(this.category), this.type && this.types && this.types.push(this.type), new d(this);
          }, t;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__assign || function() {
          return (p = Object.assign || function(e) {
            for (var l, u = 1, C = arguments.length; u < C; u++) for (var c in l = arguments[u]) Object.prototype.hasOwnProperty.call(l, c) && (e[c] = l[c]);
            return e;
          }).apply(this, arguments);
        }, i = this && this.__awaiter || function(e, l, u, C) {
          return new (u || (u = Promise))(function(c, d) {
            function t(T) {
              try {
                I(C.next(T));
              } catch (f) {
                d(f);
              }
            }
            function h(T) {
              try {
                I(C.throw(T));
              } catch (f) {
                d(f);
              }
            }
            function I(T) {
              var f;
              T.done ? c(T.value) : (f = T.value, f instanceof u ? f : new u(function(P) {
                P(f);
              })).then(t, h);
            }
            I((C = C.apply(e, l || [])).next());
          });
        }, S = this && this.__generator || function(e, l) {
          var u, C, c, d, t = {
            label: 0,
            sent: function() {
              if (1 & c[0]) throw c[1];
              return c[1];
            },
            trys: [],
            ops: []
          };
          return d = {
            next: h(0),
            throw: h(1),
            return: h(2)
          }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
            return this;
          }), d;
          function h(I) {
            return function(T) {
              return (function(f) {
                if (u) throw new TypeError("Generator is already executing.");
                for (; t; ) try {
                  if (u = 1, C && (c = 2 & f[0] ? C.return : f[0] ? C.throw || ((c = C.return) && c.call(C), 0) : C.next) && !(c = c.call(C, f[1])).done) return c;
                  switch (C = 0, c && (f = [2 & f[0], c.value]), f[0]) {
                    case 0:
                    case 1:
                      c = f;
                      break;
                    case 4:
                      return t.label++, {
                        value: f[1],
                        done: !1
                      };
                    case 5:
                      t.label++, C = f[1], f = [0];
                      continue;
                    case 7:
                      f = t.ops.pop(), t.trys.pop();
                      continue;
                    default:
                      if (!(c = 0 < (c = t.trys).length && c[c.length - 1]) && (f[0] === 6 || f[0] === 2)) {
                        t = 0;
                        continue;
                      }
                      if (f[0] === 3 && (!c || f[1] > c[0] && f[1] < c[3])) {
                        t.label = f[1];
                        break;
                      }
                      if (f[0] === 6 && t.label < c[1]) {
                        t.label = c[1], c = f;
                        break;
                      }
                      if (c && t.label < c[2]) {
                        t.label = c[2], t.ops.push(f);
                        break;
                      }
                      c[2] && t.ops.pop(), t.trys.pop();
                      continue;
                  }
                  f = l.call(e, t);
                } catch (P) {
                  f = [6, P], C = 0;
                } finally {
                  u = c = 0;
                }
                if (5 & f[0]) throw f[1];
                return {
                  value: f[0] ? f[1] : void 0,
                  done: !0
                };
              })([I, T]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MessagesStore = void 0;
        var E = g(6), n = g(1), o = g(0), s = g(12), r = g(16);
        a.MessagesStore = (function() {
          function e(l) {
            this.store = o.constants.DEFAULT_STORE, n.isFalsy(l) || (this.store = l);
          }
          return e.prototype.initializeStorage = function() {
            var l;
            return i(this, void 0, void 0, function() {
              var u, C;
              return S(this, function(c) {
                switch (c.label) {
                  case 0:
                    if (this.messagesStore) return [2];
                    c.label = 1;
                  case 1:
                    return c.trys.push([
                      1,
                      5,
                      ,
                      6
                    ]), (u = r.StorageManager.getInstance()).isStorageInitialized() ? (this.messagesStore = u.getStorage(E.CometChat.getAppId(), o.LOCAL_STORE.MESSAGES_STORE), [3, 4]) : [3, 2];
                  case 2:
                    return C = ((l = E.CometChat.appSettings) === null || l === void 0 ? void 0 : l.getStorageMode()) || o.StorageMode.LOCAL, [4, u.initialize(C)];
                  case 3:
                    c.sent(), this.messagesStore = u.getStorage(E.CometChat.getAppId(), o.LOCAL_STORE.MESSAGES_STORE), c.label = 4;
                  case 4:
                    return [3, 6];
                  case 5:
                    return c.sent(), this.messagesStore = s.createInstance({ name: n.format(o.LOCAL_STORE.STORE_STRING, E.CometChat.getAppId(), o.LOCAL_STORE.MESSAGES_STORE) }), this.messagesStore.setDriver([
                      s.LOCALSTORAGE,
                      s.INDEXEDDB,
                      s.WEBSQL
                    ]), [3, 6];
                  case 6:
                    return [2];
                }
              });
            });
          }, e.getInstance = function() {
            return e.MessagesStore ??= new e(), e.MessagesStore;
          }, e.prototype.set = function(l, u) {
            return i(this, void 0, void 0, function() {
              return S(this, function(C) {
                switch (C.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return C.sent(), [2, this.messagesStore.setItem(l, u)];
                }
              });
            });
          }, e.prototype.remove = function(l) {
            return i(this, void 0, void 0, function() {
              return S(this, function(u) {
                switch (u.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return u.sent(), [2, this.messagesStore.removeItem(l)];
                }
              });
            });
          }, e.prototype.clearStore = function() {
            var l = this;
            return new Promise(function(u, C) {
              return i(l, void 0, void 0, function() {
                var c;
                return S(this, function(d) {
                  switch (d.label) {
                    case 0:
                      return d.trys.push([
                        0,
                        2,
                        ,
                        3
                      ]), [4, this.initializeStorage()];
                    case 1:
                      return d.sent(), this.messagesStore.clear().then(function() {
                        u(!0);
                      }).catch(function(t) {
                        C(t);
                      }), [3, 3];
                    case 2:
                      return c = d.sent(), C(c), [3, 3];
                    case 3:
                      return [2];
                  }
                });
              });
            });
          }, e.prototype.getAllMessages = function() {
            return i(this, void 0, void 0, function() {
              var l, u = this;
              return S(this, function(C) {
                return l = {}, [2, new Promise(function(c, d) {
                  return i(u, void 0, void 0, function() {
                    var t;
                    return S(this, function(h) {
                      switch (h.label) {
                        case 0:
                          return h.trys.push([
                            0,
                            2,
                            ,
                            3
                          ]), [4, this.initializeStorage()];
                        case 1:
                          return h.sent(), this.messagesStore.iterate ? this.messagesStore.iterate(function(I, T, f) {
                            T != o.constants.MSG_VER_POST && I && typeof I == "object" && (l = p(p({}, l), I));
                          }).then(function() {
                            c(l);
                          }).catch(d) : c(l), [3, 3];
                        case 2:
                          return t = h.sent(), d(t), [3, 3];
                        case 3:
                          return [2];
                      }
                    });
                  });
                })];
              });
            });
          }, e.prototype.get = function(l) {
            return i(this, void 0, void 0, function() {
              return S(this, function(u) {
                switch (u.label) {
                  case 0:
                    return [4, this.initializeStorage()];
                  case 1:
                    return u.sent(), [2, this.messagesStore.getItem(l)];
                }
              });
            });
          }, e.prototype.clear = function(l) {
          }, e.prototype.selectStore = function(l) {
            this.store = l;
          }, e.prototype.storeMessages = function(l) {
            return i(this, void 0, void 0, function() {
              var u, C, c, d, t, h, I, T, f, P;
              return S(this, function(m) {
                switch (m.label) {
                  case 0:
                    if (!E.CometChat.user.getUid()) return [3, 13];
                    u = E.CometChat.user.getUid(), C = {}, d = c = 0, m.label = 1;
                  case 1:
                    return m.trys.push([
                      1,
                      12,
                      ,
                      13
                    ]), [4, this.get(o.constants.MSG_VER_POST)];
                  case 2:
                    return t = m.sent(), d = t || 0, l.map(function(D) {
                      var V;
                      if (!n.isFalsy(D)) {
                        c == 0 && (c = parseInt(D.getId().toString())), c > D.getId() && (c = parseInt(D.getId().toString())), d < D.getId() && (d = parseInt(D.getId().toString()));
                        var M = void 0;
                        M = D.getSender() instanceof Object ? D.getSender().getUid() : D.getSender(), D.getReceiverType() == o.MessageConstatnts.RECEIVER_TYPE.GROUP ? M = D.getReceiver() : D.getSender() instanceof Object ? D.getSender().getUid() == u && (M = D.getReceiver()) : D.getSender() == u && (M = D.getReceiver()), C[M] || (C[M] = {}), C[M] = p(p({}, C[M]), ((V = {})[D.getId()] = D, V));
                      }
                    }), [4, this.get(o.constants.MSG_VER_PRE)];
                  case 3:
                    return h = m.sent(), 0 < c && c < h || h == null ? [4, this.set(o.constants.MSG_VER_PRE, c)] : [3, 5];
                  case 4:
                    m.sent(), m.label = 5;
                  case 5:
                    return 0 < d ? [4, this.set(o.constants.MSG_VER_POST, d)] : [3, 7];
                  case 6:
                    m.sent(), m.label = 7;
                  case 7:
                    I = 0, T = Object.keys(C), m.label = 8;
                  case 8:
                    return I < T.length ? (f = T[I], [4, this.get(f)]) : [3, 11];
                  case 9:
                    (P = m.sent()) ?? (P = {}), this.set(f, p(p({}, C[f]), P)), m.label = 10;
                  case 10:
                    return I++, [3, 8];
                  case 11:
                    return [3, 13];
                  case 12:
                    return m.sent(), [2, !1];
                  case 13:
                    return [2, !0];
                }
              });
            });
          }, e;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.BlockedUsersRequestBuilder = a.BlockedUsersRequest = void 0;
        var p = g(4), i = g(1), S = g(17), E = g(2), n = g(0), o = (function() {
          function s(r) {
            this.next_page = 1, this.current_page = 0, this.total_pages = -1, this.fetchingInProgress = !1, this.page = 0, this.pagination = {
              total: 0,
              count: 0,
              per_page: 0,
              current_page: 0,
              total_pages: 0,
              links: []
            }, i.isFalsy(r) || (this.limit = r.limit, r.searchKeyword && r.searchKeyword.trim() !== "" && (this.searchKeyword = r.searchKeyword), i.isFalsy(r.direction) || (this.direction = r.direction), r.page !== void 0 && (this.page = Math.max(0, r.page)));
          }
          return s.prototype.validateBlockedUsersBuilder = function() {
            if (this.limit === void 0) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit")));
            if (isNaN(this.limit)) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.limit > n.DEFAULT_VALUES.USERS_MAX_LIMIT) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", n.DEFAULT_VALUES.USERS_MAX_LIMIT)));
            if (this.limit < n.DEFAULT_VALUES.ZERO) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            if (this.searchKeyword !== void 0) {
              if (typeof this.searchKeyword !== n.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING && this.searchKeyword !== void 0) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_SEARCH_KEYWORD", "SET_SEARCH_KEYWORD", "setSearchKeyword()")));
              this.searchKeyword = this.searchKeyword.trim();
            }
            if (this.direction !== void 0) {
              if (typeof this.direction !== n.COMMON_UTILITY_CONSTANTS.TYPE_CONSTANTS.STRING) return new E.CometChatException(JSON.parse(i.format(JSON.stringify(n.GENERAL_ERROR.PARAMETER_MUST_BE_A_STRING), "SET_DIRECTION", "SET_DIRECTION", "setDirection()")));
              if (this.direction != n.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BOTH && this.direction != n.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BLOCKED_BY_ME && this.direction != n.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.HAS_BLOCKED_ME) return new E.CometChatException(n.UserErrors.INVALID_DIRECTION);
            }
          }, s.prototype.fetchNext = function() {
            var r = this;
            return new Promise(function(e, l) {
              try {
                if (r.fetchingInProgress) r.fetchingInProgress = !1, e([]);
                else {
                  r.fetchingInProgress = !0;
                  var u = r.validateBlockedUsersBuilder();
                  if (u instanceof E.CometChatException) return void l(u);
                  var C = r.getPageToFetch();
                  p.makeApiCall("blockedUsersList", {}, r.getNextData()).then(function(c) {
                    if (c.meta && (r.total_pages = c.meta.pagination.total_pages), 0 < c.data.length) {
                      r.current_page = C, r.pagination = c.meta.pagination;
                      var d = [];
                      c.data.map(function(t) {
                        d.push(S.UsersController.trasformJSONUser(t));
                      }), e(d);
                    } else e([]);
                    r.fetchingInProgress = !1;
                  }, function(c) {
                    r.fetchingInProgress = !1, l(new E.CometChatException(c.error));
                  });
                }
              } catch (c) {
                r.fetchingInProgress = !1, l(new E.CometChatException(c));
              }
            });
          }, s.prototype.getDirection = function() {
            return this.direction;
          }, s.prototype.getLimit = function() {
            return this.limit;
          }, s.prototype.getSearchKeyword = function() {
            return this.searchKeyword;
          }, s.prototype.getPage = function() {
            return this.current_page;
          }, s.prototype.getPageToFetch = function() {
            return this.current_page == 0 ? this.page + 1 : this.current_page + 1;
          }, s.prototype.getNextData = function() {
            var r = {};
            return r.per_page = this.limit, i.isFalsy(this.direction) || (r.direction = this.direction), this.searchKeyword && (r.searchKey = encodeURIComponent(this.searchKeyword)), r.page = this.getPageToFetch(), r;
          }, s.MAX_LIMIT = 2, s.DEFAULT_LIMIT = 1, s.directions = n.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS, s;
        })();
        a.BlockedUsersRequest = o, a.BlockedUsersRequestBuilder = (function() {
          function s() {
            this.page = 0;
          }
          return s.prototype.setLimit = function(r) {
            return this.limit = r, this;
          }, s.prototype.setSearchKeyword = function(r) {
            return this.searchKeyword = r, this;
          }, s.prototype.setDirection = function(r) {
            return this.direction = r, this;
          }, s.prototype.setPage = function(r) {
            return this.page = Math.max(0, r), this;
          }, s.prototype.blockedByMe = function() {
            return this.direction = n.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.BLOCKED_BY_ME, this;
          }, s.prototype.hasBlockedMe = function() {
            return this.direction = n.BlockedUsersConstants.REQUEST_KEYS.DIRECTIONS.HAS_BLOCKED_ME, this;
          }, s.prototype.build = function() {
            return new o(this);
          }, s;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__spreadArrays || function() {
          for (var d = 0, t = 0, h = arguments.length; t < h; t++) d += arguments[t].length;
          var I = Array(d), T = 0;
          for (t = 0; t < h; t++) for (var f = arguments[t], P = 0, m = f.length; P < m; P++, T++) I[T] = f[P];
          return I;
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatHelper = void 0;
        var i = g(11), S = g(0), E = g(17), n = g(24), o = g(23), s = g(6), r = g(2), e = g(1), l = g(7), u = g(5), C = g(26), c = g(13);
        a.CometChatHelper = (function() {
          function d() {
          }
          return d.processMessage = function(t) {
            try {
              return i.MessageController.trasformJSONMessge(t);
            } catch (h) {
              e.Logger.error("CometChatHelper: processMessage", h);
            }
          }, d.getConversationFromMessage = function(t) {
            return new Promise(function(h, I) {
              try {
                s.CometChat.getLoggedinUser().then(function(T) {
                  if (T !== null) {
                    var f = i.MessageController.trasformJSONMessge(t), P = f.receiverType, m = f.conversationId, D = void 0, V = i.MessageController.trasformJSONMessge(t);
                    if (P == S.MessageConstatnts.RECEIVER_TYPE.USER) {
                      var M = E.UsersController.trasformJSONUser(f[S.MessageConstatnts.KEYS.SENDER]);
                      D = M.getUid() == T.getUid() ? E.UsersController.trasformJSONUser(f[S.MessageConstatnts.KEYS.RECEIVER]) : M;
                    } else D = n.GroupsController.trasformJSONGroup(f[S.MessageConstatnts.KEYS.RECEIVER]);
                    h(o.ConversationController.trasformJSONConversation(m, P, V, D, 0, [], null, null));
                  } else I(S.UserErrors.USER_NOT_LOGGED_IN);
                }, function(T) {
                  I(new r.CometChatException(T.error));
                });
              } catch (T) {
                I(new r.CometChatException(T));
              }
            });
          }, d.updateMessageWithReactionInfo = function(t, h, I) {
            var T, f, P, m;
            try {
              if (!t || !h || !I) return new r.CometChatException(c.ERRORS.PARAMETER_MISSING);
              if (!(t instanceof l.BaseMessage)) return new r.CometChatException(c.ERRORS.PARAMETER_MISSING);
              if (I === u.MESSAGE_REACTION.ACTION.ADDED) {
                if (parseInt(t.getId()) === parseInt(h.getMessageId())) {
                  if (0 < ((T = t.getReactions()) === null || T === void 0 ? void 0 : T.length)) {
                    var D = t.getReactions().findIndex(function(le) {
                      return le.getReaction() === h.getReaction();
                    });
                    if (D !== -1) (M = t.getReactions())[D].setCount(M[D].getCount() + 1), ((f = s.CometChat === null || s.CometChat === void 0 ? void 0 : s.CometChat.user) === null || f === void 0 ? void 0 : f.uid) === h.getUid() && M[D].setReactedByMe(!0), t.setReactions(M);
                    else {
                      var V = void 0;
                      V = ((P = s.CometChat === null || s.CometChat === void 0 ? void 0 : s.CometChat.user) === null || P === void 0 ? void 0 : P.uid) === h.getUid() ? new C.ReactionCount(h.getReaction(), 1, !0) : new C.ReactionCount(h.getReaction(), 1, !1), t.setReactions(p(t.getReactions(), [V]));
                    }
                  } else ((m = s.CometChat === null || s.CometChat === void 0 ? void 0 : s.CometChat.user) === null || m === void 0 ? void 0 : m.uid) === h.getUid() ? t.setReactions([new C.ReactionCount(h.getReaction(), 1, !0)]) : t.setReactions([new C.ReactionCount(h.getReaction(), 1, !1)]);
                  return t;
                }
              } else {
                if (I !== u.MESSAGE_REACTION.ACTION.REMOVED) return new r.CometChatException(c.ERRORS.PARAMETER_MISSING);
                if (parseInt(t.getId()) === parseInt(h.getMessageId())) {
                  if (0 < t.getReactions().length) {
                    var M, z = t.getReactions().findIndex(function(le) {
                      return le.getReaction() === h.getReaction();
                    });
                    z !== -1 && (1 < (V = t.getReactions()[z]).getCount() ? ((M = t.getReactions())[z].setCount(M[z].getCount() - 1), s.CometChat.user.getUid() === h.getUid() && M[z].setReactedByMe(!1), t.setReactions(M)) : (M = (M = t.getReactions()).filter(function(le, de) {
                      return de !== z;
                    }), t.setReactions(M)));
                  }
                  return t;
                }
              }
            } catch (le) {
              return e.Logger.error("CometChatHelper: updateMessageWithReactionInfo", le), new r.CometChatException(le);
            }
          }, d;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MainVideoContainerSetting = a.VirtualBackgroundBuilder = a.VirtualBackground = a.CallSettingsBuilder = a.CallSettings = void 0;
        var p = g(0), i = g(1), S = (function() {
          function s(r) {
            this.sessionID = r.sessionID, this.defaultLayout = r.defaultLayout, this.isAudioOnly = r.isAudioOnly, this.region = r.region, this.user = r.user, this.mode = r.mode, this.domain = r.domain, this.ShowEndCallButton = r.ShowEndCallButton, this.ShowMuteAudioButton = r.ShowMuteAudioButton, this.ShowPauseVideoButton = r.ShowPauseVideoButton, this.ShowScreenShareButton = r.ShowScreenShareButton, this.ShowSwitchModeButton = r.ShowSwitchModeButton, this.StartAudioMuted = r.StartAudioMuted, this.StartVideoMuted = r.StartVideoMuted, this.localizedObject = r.localizedObject, this.analyticsSettings = r.analyticsSettings, this.appId = r.appId, this.customCSS = r.customCSS, this.ShowRecordingButton = r.ShowRecordingButton, this.StartRecordingOnCallStart = r.StartRecordingOnCallStart, this.useLegacyUI = r.useLegacyUI, this.ShowSwitchToVideoCallButton = r.ShowSwitchToVideoCallButton, this.VirtualBackground = r.virtualBackground, this.ShowVirtualBackgroundSetting = r.ShowVirtualBackgroundSetting, this.MainVideoContainerSetting = r.MainVideoContainerSetting;
          }
          return s.prototype.shouldUseLegacyUI = function() {
            return this.useLegacyUI;
          }, s.prototype.isRecordingButtonEnabled = function() {
            return this.ShowRecordingButton;
          }, s.prototype.shouldStartRecordingOnCallStart = function() {
            return this.StartRecordingOnCallStart;
          }, s.prototype.getCustomCSS = function() {
            return this.customCSS;
          }, s.prototype.getSessionId = function() {
            return this.sessionID;
          }, s.prototype.isAudioOnlyCall = function() {
            return this.isAudioOnly;
          }, s.prototype.getUser = function() {
            return this.user;
          }, s.prototype.getRegion = function() {
            return this.region;
          }, s.prototype.getAppId = function() {
            return this.appId;
          }, s.prototype.getDomain = function() {
            return this.domain;
          }, s.prototype.isDefaultLayoutEnabled = function() {
            return this.defaultLayout;
          }, s.prototype.getMode = function() {
            return this.mode;
          }, s.prototype.getStartWithAudioMuted = function() {
            return this.StartAudioMuted;
          }, s.prototype.getStartWithVideoMuted = function() {
            return this.StartVideoMuted;
          }, s.prototype.isEndCallButtonEnabled = function() {
            return this.ShowEndCallButton;
          }, s.prototype.isMuteAudioButtonEnabled = function() {
            return this.ShowMuteAudioButton;
          }, s.prototype.isPauseVideoButtonEnabled = function() {
            return this.ShowPauseVideoButton;
          }, s.prototype.isScreenShareButtonEnabled = function() {
            return this.ShowScreenShareButton;
          }, s.prototype.isModeButtonEnabled = function() {
            return this.ShowSwitchModeButton;
          }, s.prototype.getLocalizedStringObject = function() {
            return this.localizedObject;
          }, s.prototype.getAnalyticsSettings = function() {
            return this.analyticsSettings;
          }, s.prototype.isAudioToVideoButtonEnabled = function() {
            return this.ShowSwitchToVideoCallButton;
          }, s.prototype.getVirtualBackground = function() {
            return this.VirtualBackground;
          }, s.prototype.isVirtualBackgroundSettingEnabled = function() {
            return this.ShowVirtualBackgroundSetting;
          }, s.prototype.getMainVideoContainerSetting = function() {
            return this.MainVideoContainerSetting;
          }, s.POSITION_TOP_LEFT = "top-left", s.POSITION_TOP_RIGHT = "top-right", s.POSITION_BOTTOM_LEFT = "bottom-left", s.POSITION_BOTTOM_RIGHT = "bottom-right", s.ASPECT_RATIO_DEFAULT = "default", s.ASPECT_RATIO_CONTAIN = "contain", s.ASPECT_RATIO_COVER = "cover", s;
        })();
        a.CallSettings = S, a.CallSettingsBuilder = (function() {
          function s() {
            this.defaultLayout = !0, this.isAudioOnly = !1, this.mode = p.CallConstants.CALL_MODE.DEFAULT, this.ShowEndCallButton = !0, this.ShowMuteAudioButton = !0, this.ShowPauseVideoButton = !0, this.ShowScreenShareButton = !0, this.ShowSwitchModeButton = !0, this.StartAudioMuted = !1, this.StartVideoMuted = !1, this.localizedObject = {}, this.analyticsSettings = {}, this.ShowRecordingButton = !1, this.StartRecordingOnCallStart = !1, this.useLegacyUI = !1, this.ShowSwitchToVideoCallButton = !0, this.virtualBackground = new n().build(), this.ShowVirtualBackgroundSetting = !0, this.MainVideoContainerSetting = new o();
          }
          return s.prototype.setSessionID = function(r) {
            return this.sessionID = r, this;
          }, s.prototype.enableDefaultLayout = function(r) {
            return this.defaultLayout = r, this;
          }, s.prototype.setIsAudioOnlyCall = function(r) {
            return this.isAudioOnly = r, this;
          }, s.prototype.setRegion = function(r) {
            return this.region = r, this;
          }, s.prototype.setDomain = function(r) {
            return this.domain = r, this;
          }, s.prototype.setUser = function(r) {
            return this.user = r, this;
          }, s.prototype.setMode = function(r) {
            return this.mode = r, this;
          }, s.prototype.showEndCallButton = function(r) {
            return this.ShowEndCallButton = r, this;
          }, s.prototype.showMuteAudioButton = function(r) {
            return this.ShowMuteAudioButton = r, this;
          }, s.prototype.showPauseVideoButton = function(r) {
            return this.ShowPauseVideoButton = r, this;
          }, s.prototype.showScreenShareButton = function(r) {
            return this.ShowScreenShareButton = r, this;
          }, s.prototype.showModeButton = function(r) {
            return this.ShowSwitchModeButton = r, this;
          }, s.prototype.setLocalizedStringObject = function(r) {
            return this.localizedObject = r, this;
          }, s.prototype.setAnalyticsSettings = function(r) {
            return this.analyticsSettings = r, this;
          }, s.prototype.setAppId = function(r) {
            return this.appId = r, this;
          }, s.prototype.startWithAudioMuted = function(r) {
            return this.StartAudioMuted = r, this;
          }, s.prototype.startWithVideoMuted = function(r) {
            return this.StartVideoMuted = r, this;
          }, s.prototype.setCustomCSS = function(r) {
            return this.customCSS = r, this;
          }, s.prototype.showRecordingButton = function(r) {
            return this.ShowRecordingButton = r, this;
          }, s.prototype.startRecordingOnCallStart = function(r) {
            return this.StartRecordingOnCallStart = r, this;
          }, s.prototype.forceLegacyUI = function(r) {
            return this.useLegacyUI = r, this;
          }, s.prototype.showSwitchToVideoCallButton = function(r) {
            return this.ShowSwitchToVideoCallButton = r, this;
          }, s.prototype.setVirtualBackground = function(r) {
            return this.virtualBackground = r, this;
          }, s.prototype.showVirtualBackgroundSetting = function(r) {
            return this.ShowVirtualBackgroundSetting = r, this;
          }, s.prototype.setMainVideoContainerSetting = function(r) {
            return this.MainVideoContainerSetting = r, this;
          }, s.prototype.build = function() {
            return new S(this);
          }, s;
        })();
        var E = (function() {
          function s(r) {
            this.AllowBackgroundBlur = r.AllowBackgroundBlur, this.AllowUserImages = r.AllowUserImages, this.ShowDefaultImages = r.ShowDefaultImages, this.SetImages = r.SetImages, this.EnforceBackgroundBlur = r.EnforceBackgroundBlur, this.EnforceBackgroundImage = r.EnforceBackgroundImage;
          }
          return s.prototype.shouldAllowBackgroundBlur = function() {
            return this.AllowBackgroundBlur;
          }, s.prototype.shouldAllowUserImages = function() {
            return this.AllowUserImages;
          }, s.prototype.shouldShowDefaultImages = function() {
            return this.ShowDefaultImages;
          }, s.prototype.getImages = function() {
            return this.SetImages;
          }, s.prototype.isBackgroundBlurEnforced = function() {
            return this.EnforceBackgroundBlur;
          }, s.prototype.getEnforcedBackgroundImage = function() {
            return this.EnforceBackgroundImage;
          }, s;
        })();
        a.VirtualBackground = E;
        var n = (function() {
          function s() {
            this.AllowBackgroundBlur = !0, this.AllowUserImages = !0, this.ShowDefaultImages = !0, this.SetImages = [], this.EnforceBackgroundBlur = 0, this.EnforceBackgroundImage = "";
          }
          return s.prototype.allowBackgroundBlur = function(r) {
            return this.AllowBackgroundBlur = r, this;
          }, s.prototype.allowUserImages = function(r) {
            return this.AllowUserImages = r, this;
          }, s.prototype.showDefaultImages = function(r) {
            return this.ShowDefaultImages = r, this;
          }, s.prototype.setImages = function(r) {
            return this.SetImages = r, this;
          }, s.prototype.enforceBackgroundBlur = function(r) {
            return this.EnforceBackgroundBlur = r, this;
          }, s.prototype.enforceBackgroundImage = function(r) {
            return this.EnforceBackgroundImage = r, this;
          }, s.prototype.build = function() {
            return new E(this);
          }, s;
        })();
        a.VirtualBackgroundBuilder = n;
        var o = (function() {
          function s() {
            this.videoFit = S.ASPECT_RATIO_CONTAIN, this.zoomButton = p.CallConstants.ZOOM_BUTTON_DEFAULT_PARAMS, this.nameLabel = p.CallConstants.NAME_LABEL_DEFAULT_PARAMS, this.network = p.CallConstants.NETWORK_LABEL_DEFAULT_PARAMS;
          }
          return s.prototype.setMainVideoAspectRatio = function(r) {
            this.videoFit = r;
          }, s.prototype.setFullScreenButtonParams = function(r, e) {
            i.isFalsy(r) || (this.zoomButton[p.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.POSITION] = r), e != null && e != null && (this.zoomButton[p.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.VISIBILITY] = e);
          }, s.prototype.setNameLabelParams = function(r, e, l) {
            i.isFalsy(r) || (this.nameLabel[p.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.POSITION] = r), e != null && e != null && (this.nameLabel[p.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.VISIBILITY] = e), i.isFalsy(l) || (this.nameLabel[p.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.COLOR] = l);
          }, s.prototype.setNetworkLabelParams = function(r, e) {
            i.isFalsy(r) || (this.network[p.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.POSITION] = r), e != null && e != null && (this.network[p.CallConstants.MAIN_VIDEO_CONTAINER_SETTINGS.KEYS.VISIBILITY] = e);
          }, s;
        })();
        a.MainVideoContainerSetting = o;
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.RTCUser = void 0;
        var p = g(1);
        a.RTCUser = (function() {
          function i(S) {
            this.avatar = "", p.isFalsy(S) || (this.uid = S.toString());
          }
          return i.prototype.setUID = function(S) {
            this.uid = S ? S.toString() : "";
          }, i.prototype.getUID = function() {
            return this.uid.toString();
          }, i.prototype.setName = function(S) {
            this.name = S ? S.toString() : "";
          }, i.prototype.getName = function() {
            return this.name.toString();
          }, i.prototype.setAvatar = function(S) {
            this.avatar = S ? S.toString() : "";
          }, i.prototype.getAvatar = function() {
            return this.avatar.toString();
          }, i.prototype.setJWT = function(S) {
            this.jwt = S ? S.toString() : "";
          }, i.prototype.getJWT = function() {
            return this.jwt.toString();
          }, i.prototype.setResource = function(S) {
            this.resource = S ? S.toString() : "";
          }, i.prototype.getResource = function() {
            return this.resource.toString();
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(ue, F, b, w) {
          return new (b || (b = Promise))(function(ie, ae) {
            function ne(Ie) {
              try {
                ge(w.next(Ie));
              } catch (ce) {
                ae(ce);
              }
            }
            function Ne(Ie) {
              try {
                ge(w.throw(Ie));
              } catch (ce) {
                ae(ce);
              }
            }
            function ge(Ie) {
              var ce;
              Ie.done ? ie(Ie.value) : (ce = Ie.value, ce instanceof b ? ce : new b(function(De) {
                De(ce);
              })).then(ne, Ne);
            }
            ge((w = w.apply(ue, F || [])).next());
          });
        }, i = this && this.__generator || function(ue, F) {
          var b, w, ie, ae, ne = {
            label: 0,
            sent: function() {
              if (1 & ie[0]) throw ie[1];
              return ie[1];
            },
            trys: [],
            ops: []
          };
          return ae = {
            next: Ne(0),
            throw: Ne(1),
            return: Ne(2)
          }, typeof Symbol == "function" && (ae[Symbol.iterator] = function() {
            return this;
          }), ae;
          function Ne(ge) {
            return function(Ie) {
              return (function(ce) {
                if (b) throw new TypeError("Generator is already executing.");
                for (; ne; ) try {
                  if (b = 1, w && (ie = 2 & ce[0] ? w.return : ce[0] ? w.throw || ((ie = w.return) && ie.call(w), 0) : w.next) && !(ie = ie.call(w, ce[1])).done) return ie;
                  switch (w = 0, ie && (ce = [2 & ce[0], ie.value]), ce[0]) {
                    case 0:
                    case 1:
                      ie = ce;
                      break;
                    case 4:
                      return ne.label++, {
                        value: ce[1],
                        done: !1
                      };
                    case 5:
                      ne.label++, w = ce[1], ce = [0];
                      continue;
                    case 7:
                      ce = ne.ops.pop(), ne.trys.pop();
                      continue;
                    default:
                      if (!(ie = 0 < (ie = ne.trys).length && ie[ie.length - 1]) && (ce[0] === 6 || ce[0] === 2)) {
                        ne = 0;
                        continue;
                      }
                      if (ce[0] === 3 && (!ie || ce[1] > ie[0] && ce[1] < ie[3])) {
                        ne.label = ce[1];
                        break;
                      }
                      if (ce[0] === 6 && ne.label < ie[1]) {
                        ne.label = ie[1], ie = ce;
                        break;
                      }
                      if (ie && ne.label < ie[2]) {
                        ne.label = ie[2], ne.ops.push(ce);
                        break;
                      }
                      ie[2] && ne.ops.pop(), ne.trys.pop();
                      continue;
                  }
                  ce = F.call(ue, ne);
                } catch (De) {
                  ce = [6, De], w = 0;
                } finally {
                  b = ie = 0;
                }
                if (5 & ce[0]) throw ce[1];
                return {
                  value: ce[0] ? ce[1] : void 0,
                  done: !0
                };
              })([ge, Ie]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.WSConnectionHelper = void 0;
        var S = g(6), E = g(0), n = g(58), o = g(62), s = g(1), r = g(39), e = g(34), l = g(36), u = g(31), C = g(38), c = g(32), d = g(88), t = g(89), h = g(90), I = g(91), T = g(92), f = g(93), P = g(94), m = g(95), D = g(96), V = g(109), M = g(110), z = g(21), le = g(42), de = g(37), W = g(43), q = g(111), se = g(15), Ae = g(112), Pe = g(14), Ee = g(5), fe = g(113), Te = r.ListenerHandlers.getInstance();
        a.WSConnectionHelper = (function() {
          function ue() {
          }
          return ue.getInstance = function() {
            try {
              return this.wsConnectionHelper != null && this.wsConnectionHelper != null || (this.wsConnectionHelper = new ue()), this.wsConnectionHelper;
            } catch (F) {
              s.Logger.error("WSConnectionHelper: getInstance", F);
            }
          }, ue.prototype.WSLogin = function(F, b) {
            var w = this;
            try {
              fe.getWSURL().then(function(ie) {
                w.connection = new WebSocket(ie);
                var ae = w.connection;
                b && w.connection && w.connection.readyState == Ee.READY_STATE.CONNECTING && b(w.connection.readyState), w.connection.onopen = function(ne) {
                  w.connection === ae && (w.onOpen(ne, b), w.authenticateUser(F));
                }, w.connection.onclose = function(ne) {
                  w.connection === ae && w.onClose(ne, b);
                }, w.connection.onmessage = function(ne) {
                  w.connection === ae && w.onMessage(ne);
                };
              }, function(ie) {
                s.Logger.error("WSConnectionHelper :: WSLogin", ie);
              });
            } catch (ie) {
              s.Logger.error("WSConnectionHelper: WSLogin", ie);
            }
          }, ue.prototype.onOpen = function(F, b) {
            try {
              b && this.connection && b(this.connection.readyState);
            } catch (w) {
              s.Logger.error("WSConnectionHelper: onOpen", w);
            }
          }, ue.prototype.onClose = function(F, b) {
            try {
              b && this.connection && b(this.connection.readyState);
            } catch (w) {
              s.Logger.error("WSConnectionHelper: onClose", w);
            }
          }, ue.prototype.publishMessageReaction = function(F) {
            var b = F.getMessageReactionEvent();
            switch (F.getAction()) {
              case Ee.MESSAGE_REACTION.ACTION.ADDED:
                Te.messageHandlers.map(function(w) {
                  w._eventListener.onMessageReactionAdded && w._eventListener.onMessageReactionAdded(b);
                });
                break;
              case Ee.MESSAGE_REACTION.ACTION.REMOVED:
                Te.messageHandlers.map(function(w) {
                  w._eventListener.onMessageReactionRemoved && w._eventListener.onMessageReactionRemoved(b);
                });
            }
          }, ue.prototype.onMessage = function(F) {
            if (F.data && typeof F.data == "string") try {
              var b = JSON.parse(F.data);
              if (b && b.action && b.action === Ee.KEYS.PONG) return;
              if (b && b.type === Ee.NOTIFICATION_FEED.TYPE) return void this.publishNotificationFeedItem(b);
              var w = this.getCometChatEventFromMessage(b);
              if (w.getDeviceId() === S.CometChat.getSessionId() && w.getType() !== Ee.AUTH.TYPE && w.getType() !== Ee.MODERATION_STATUS_CHANGED.TYPE) return;
              switch (w.getType()) {
                case Ee.MESSAGE_REACTION.TYPE:
                  this.publishMessageReaction(w);
                  break;
                case Ee.TYPING_INDICATOR.TYPE:
                  this.publishTypingIndicator(w);
                  break;
                case Ee.RECEIPTS.TYPE:
                  this.publishReceipts(w);
                  break;
                case Ee.PRESENCE.TYPE:
                  this.publishPresence(w);
                  break;
                case Ee.AUTH.TYPE:
                  this.authResponseReceived(w);
                  break;
                case Ee.MESSAGE.TYPE:
                  this.publishMessages(w);
                  break;
                case Ee.TRANSIENT_MESSAGE.TYPE:
                  this.publishTransientMessage(w);
                  break;
                case Ee.INTERACTION_RECEIPT.TYPE:
                  this.publishInteractionReceipt(w);
                  break;
                case Ee.MODERATION_STATUS_CHANGED.TYPE:
                  this.publishModerationStatusChangedMessage(w);
                  break;
                case Ee.STREAM_MESSAGE.TYPE:
                  this.publishStreamMessages(w);
                  break;
                case Pe.PIN_SAVE_EVENT.TYPE:
                  this.publishPinSaveEvent(w);
                  break;
                default:
                  s.Logger.log("WSHelper: onMessage :: unknown type", F.data);
              }
            } catch (ie) {
              s.Logger.error("WSHelper: onMessage", ie);
            }
            else s.Logger.log("WSHelper: onMessage :: object data", F.data);
          }, ue.prototype.publishStreamMessages = function(F) {
            try {
              var b = F.getMessage();
              Te.assistantHandlers.map(function(w) {
                w._eventListener.onAIAssistantEventReceived && w._eventListener.onAIAssistantEventReceived(b);
              });
            } catch (w) {
              s.Logger.error("WSConnectionHelper: publishStreamMessages", w);
            }
          }, ue.prototype.authenticateUser = function(F) {
            var b = this;
            try {
              S.CometChat.getLoggedinUser().then(function(w) {
                w ? e.KeyStore.getInstance().get("deviceId").then(function(ie) {
                  s.getAppSettings().then(function(ae) {
                    var ne = null;
                    window && window.location && window.location.origin && (ne = window.location.origin);
                    var Ne = "", ge = ie, Ie = {
                      version: E.SDKHeader.sdkVersion,
                      apiVersion: ae[E.APP_SETTINGS.KEYS.CHAT_API_VERSION],
                      origin: ne,
                      uts: (/* @__PURE__ */ new Date()).getTime()
                    };
                    s.isFalsy(S.CometChat.resource) || (Ie.resource = S.CometChat.resource), s.isFalsy(S.CometChat.platform) || (Ie.platform = S.CometChat.platform), s.isFalsy(S.CometChat.language) || (Ie.language = S.CometChat.language), navigator && (Ne = navigator.userAgent);
                    var ce = {
                      appInfo: Ie,
                      userAgent: Ne,
                      deviceId: ge,
                      platform: E.SDKHeader.platform
                    }, De = new d.CometChatAuthEvent(S.CometChat.getAppId(), "", "", w.getUid(), S.CometChat.getSessionId());
                    if (De.setAuth(F), S.CometChat.appSettings.getSubscriptionType() !== C.AppSettings.SUBSCRIPTION_TYPE_NONE && (De.setPresenceSubscription(S.CometChat.appSettings.getSubscriptionType()), S.CometChat.appSettings.getSubscriptionType() === C.AppSettings.SUBSCRIPTION_TYPE_ROLES && S.CometChat.appSettings.getRoles() && 0 < S.CometChat.appSettings.getRoles().length && De.setRoles(S.CometChat.appSettings.getRoles())), De.setDeviceId(S.CometChat.getSessionId()), De.setExtraParmaeters(ce), fe.checkConnection(b.connection)) {
                      var be = De.getAsString();
                      b.connection.send(be);
                    }
                  });
                }) : s.Logger.log("no logged-in user", "null");
              }, function(w) {
                s.Logger.log("error in fetching logged-in user", w);
              });
            } catch (w) {
              s.Logger.error("WSConnectionHelper: startTypingIndicator", w);
            }
          }, ue.prototype.authResponseReceived = function(F) {
            try {
              F.getCode() === "200" && F.getStatus() === "OK" && this.startPingingWS();
            } catch (b) {
              s.Logger.error("WSConnectionHelper: authResponseReceived", b);
            }
          }, ue.prototype.WSLogout = function() {
            try {
              this.clearPingTimer(), this.connection && (this.connection.readyState !== Ee.READY_STATE.OPEN && this.connection.readyState !== Ee.READY_STATE.CONNECTING || this.connection.close(Ee.LOGOUT_CODE, Ee.LOGOUT_REASON), this.connection = null);
            } catch (F) {
              s.Logger.error("WSConnectionHelper: WSLogout", F);
            }
          }, ue.prototype.startPingingWS = function() {
            var F = this;
            try {
              ue.pingTimer || (ue.pingTimer = setInterval(function() {
                return p(F, void 0, void 0, function() {
                  var b, w;
                  return i(this, function(ie) {
                    switch (ie.label) {
                      case 0:
                        return fe.checkConnection(this.connection) ? (b = new T.CometChatPingEvent("", "", "", "", ""), w = b.getAsString(), this.connection.send(w), [4, this.listenForPong()]) : [3, 2];
                      case 1:
                        ie.sent() ? (s.Logger.log("WSConnectionHelper :: startPingingWS", "pong success"), S.CometChat.getConnectionStatus() != E.CONNECTION_STATUS.CONNECTED && (this.WSLogout(), this.connection = null, S.CometChat.getInstance().makeWSConnection())) : (s.Logger.log("WSConnectionHelper :: startPingingWS", "pong failure"), this.WSLogout(), this.connection = null, S.CometChat.getInstance().setConnectionStatus(E.CONNECTION_STATUS.DISCONNECTED), Te.connectionHandlers.map(function(ae) {
                          try {
                            ae._eventListener && (s.isFalsy(ae._eventListener.onDisconnected) || ae._eventListener.onDisconnected());
                          } catch (ne) {
                            s.Logger.error("WSConnectionHandlers: Disconnected Status", ne);
                          }
                        }), S.CometChat.getInstance().accidentallyDisconnected()), ie.label = 2;
                      case 2:
                        return [2];
                    }
                  });
                });
              }, 15e3));
            } catch (b) {
              s.Logger.error("WSConnectionHelper: startPingingWS", b);
            }
          }, ue.prototype.listenForPong = function() {
            var F = this;
            return new Promise(function(b, w) {
              var ie = setTimeout(function() {
                b(!1);
              }, 3e3);
              F.connection.addEventListener("message", function(ae) {
                ae && ae.data && typeof ae.data == "string" && JSON.parse(ae.data).action === Ee.KEYS.PONG && (clearTimeout(ie), b(!0));
              });
            });
          }, ue.prototype.clearPingTimer = function() {
            ue.pingTimer && (clearInterval(ue.pingTimer), ue.pingTimer = void 0);
          }, ue.prototype.sendOnlineEvent = function() {
            var F = this;
            try {
              fe.checkConnection(this.connection) && S.CometChat.getLoggedinUser().then(function(b) {
                if (b) {
                  b.authToken && delete b.authToken;
                  var w = {
                    appId: S.CometChat.getAppId(),
                    deviceId: S.CometChat.getSessionId(),
                    type: Ee.PRESENCE.TYPE,
                    body: {
                      action: Ee.PRESENCE.ACTION.ONLINE,
                      timestamp: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3),
                      user: b
                    }
                  };
                  if (fe.checkConnection(F.connection)) {
                    var ie = fe.stringifyMessage(w);
                    F.connection.send(ie);
                  }
                } else s.Logger.log("no logged-in user", "null");
              }, function(b) {
                s.Logger.log("error in fetching logged-in user", b);
              });
            } catch (b) {
              s.Logger.error("WSConnectionHelper: sendOnlineEvent", b);
            }
          }, ue.prototype.sendOfflineEvent = function() {
            var F = this;
            try {
              fe.checkConnection(this.connection) && S.CometChat.getLoggedinUser().then(function(b) {
                if (b) {
                  b.authToken && delete b.authToken;
                  var w = {
                    appId: S.CometChat.getAppId(),
                    deviceId: S.CometChat.getSessionId(),
                    type: Ee.PRESENCE.TYPE,
                    body: {
                      action: Ee.PRESENCE.ACTION.OFFLINE,
                      timestamp: Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3),
                      user: b
                    }
                  };
                  if (fe.checkConnection(F.connection)) {
                    var ie = fe.stringifyMessage(w);
                    F.connection.send(ie);
                  }
                } else s.Logger.log("no logged-in user", "null");
              }, function(b) {
                s.Logger.log("error in fetching logged-in user", b);
              });
            } catch (b) {
              s.Logger.error("WSConnectionHelper: sendOfflineEvent", b);
            }
          }, ue.prototype.startTypingIndicator = function(F, b, w) {
            var ie = this;
            try {
              S.CometChat.getLoggedinUser().then(function(ae) {
                if (ae) {
                  var ne = new de.TypingIndicator(F, b);
                  ae.authToken && delete ae.authToken, ne.setSender(ae), w && ne.setMetadata(w);
                  var Ne = new M.CometChatTypingEvent(S.CometChat.getAppId(), F, b, ae.getUid(), S.CometChat.getSessionId());
                  if (Ne.setAction(Ee.TYPING_INDICATOR.ACTION.STARTED), Ne.setTypingIndicator(ne), fe.checkConnection(ie.connection)) {
                    var ge = Ne.getAsString();
                    ie.connection.send(ge);
                  }
                } else s.Logger.log("no logged-in user", "null");
              }, function(ae) {
                s.Logger.log("error in fetching logged-in user", ae);
              });
            } catch (ae) {
              s.Logger.error("WSConnectionHelper: startTypingIndicator", ae);
            }
          }, ue.prototype.pauseTypingIndicator = function(F, b, w) {
            var ie = this;
            try {
              S.CometChat.getLoggedinUser().then(function(ae) {
                if (ae) {
                  var ne = new de.TypingIndicator(F, b);
                  ae.authToken && delete ae.authToken, ne.setSender(ae), w && ne.setMetadata(w);
                  var Ne = new M.CometChatTypingEvent(S.CometChat.getAppId(), F, b, ae.getUid(), S.CometChat.getSessionId());
                  if (Ne.setAction(Ee.TYPING_INDICATOR.ACTION.ENDED), Ne.setTypingIndicator(ne), fe.checkConnection(ie.connection)) {
                    var ge = Ne.getAsString();
                    ie.connection.send(ge);
                  }
                } else s.Logger.log("no logged-in user", "null");
              }, function(ae) {
                s.Logger.log("error in fetching logged-in user", ae);
              });
            } catch (ae) {
              s.Logger.error("WSConnectionHelper: pauseTypingIndicator", ae);
            }
          }, ue.prototype.markAsRead = function(F, b, w, ie) {
            var ae = this;
            try {
              S.CometChat.getMode(), S.CometChat.getLoggedinUser().then(function(ne) {
                if (ne) {
                  var Ne = new m.CometChatReceiptEvent(S.CometChat.getAppId(), F, b, ne.getUid(), S.CometChat.getSessionId(), ie);
                  Ne.setAction(Ee.RECEIPTS.ACTION.READ);
                  var ge = new z.MessageReceipt();
                  if (ne.authToken && delete ne.authToken, ge.setSender(ne), ge.setReceiverType(b), ge.setReceiver(F), ge.setReceiptType(Ee.RECEIPTS.RECEIPT_TYPE.READ_RECEIPT), ge.setMessageId(w), ge.setTimestamp(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3).toString()), Ne.setMessageReceipt(ge), fe.checkConnection(ae.connection)) {
                    var Ie = Ne.getAsString();
                    ae.connection.send(Ie);
                  }
                } else s.Logger.log("no logged-in user", "null");
              }, function(ne) {
                s.Logger.log("error in fetching logged-in user", ne);
              });
            } catch (ne) {
              s.Logger.error("WSConnectionHelper: markAsRead", ne);
            }
          }, ue.prototype.markAsDelivered = function(F, b, w, ie) {
            var ae = this;
            try {
              S.CometChat.getMode(), S.CometChat.getLoggedinUser().then(function(ne) {
                if (ne) {
                  var Ne = new m.CometChatReceiptEvent(S.CometChat.getAppId(), F, b, ne.getUid(), S.CometChat.getSessionId(), ie);
                  Ne.setAction(Ee.RECEIPTS.ACTION.DELIVERED);
                  var ge = new z.MessageReceipt();
                  if (ne.authToken && delete ne.authToken, ge.setSender(ne), ge.setReceiverType(b), ge.setReceiver(F), ge.setReceiptType(Ee.RECEIPTS.RECEIPT_TYPE.DELIVERY_RECEIPT), ge.setMessageId(w), ge.setTimestamp(Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3).toString()), Ne.setMessageReceipt(ge), fe.checkConnection(ae.connection)) {
                    var Ie = Ne.getAsString();
                    ae.connection.send(Ie);
                  }
                } else s.Logger.log("no logged-in user", "null");
              }, function(ne) {
                s.Logger.log("error in fetching logged-in user", ne);
              });
            } catch (ne) {
              s.Logger.error("WSConnectionHelper: markAsDelivered", ne);
            }
          }, ue.prototype.sendTransientMessage = function(F, b, w) {
            var ie = this;
            try {
              S.CometChat.getLoggedinUser().then(function(ae) {
                if (ae) {
                  var ne = new le.TransientMessage(F, b, w);
                  ae.authToken && delete ae.authToken, ne.setSender(ae);
                  var Ne = new V.CometChatTransientEvent(S.CometChat.getAppId(), F, b, ae.getUid(), S.CometChat.getSessionId());
                  if (Ne.setTransientMessage(ne), fe.checkConnection(ie.connection)) {
                    var ge = Ne.getAsString();
                    ie.connection.send(ge);
                  }
                } else s.Logger.log("no logged-in user", "null");
              }, function(ae) {
                s.Logger.log("error in fetching logged-in user", ae);
              });
            } catch (ae) {
              s.Logger.error("WSConnectionHelper: sendTransientMessage", ae);
            }
          }, ue.prototype.publishTypingIndicator = function(F) {
            try {
              var b = F.getTypingIndicator();
              switch (F.getAction()) {
                case Ee.TYPING_INDICATOR.ACTION.STARTED:
                  Te.messageHandlers.map(function(w) {
                    w._eventListener.onTypingStarted && w._eventListener.onTypingStarted(b);
                  }), o.TypingNotificationController.addIncomingTypingStarted(b);
                  break;
                case Ee.TYPING_INDICATOR.ACTION.ENDED:
                  Te.messageHandlers.map(function(w) {
                    w._eventListener.onTypingEnded && w._eventListener.onTypingEnded(b);
                  }), o.TypingNotificationController.removeIncomingTypingStarted(b);
              }
            } catch (w) {
              s.Logger.error("WSHelper: publishTypingIndicator", w);
            }
          }, ue.prototype.publishReceipts = function(F) {
            try {
              var b = F.getMessageReceipt();
              switch (F.getAction()) {
                case Ee.RECEIPTS.ACTION.DELIVERED:
                  Te.messageHandlers.map(function(w) {
                    w._eventListener.onMessagesDelivered && w._eventListener.onMessagesDelivered(b);
                  });
                  break;
                case Ee.RECEIPTS.ACTION.READ:
                  Te.messageHandlers.map(function(w) {
                    w._eventListener.onMessagesRead && w._eventListener.onMessagesRead(b);
                  });
                  break;
                case Ee.RECEIPTS.ACTION.DELIVERED_TO_ALL:
                  Te.messageHandlers.map(function(w) {
                    w._eventListener.onMessagesDeliveredToAll && w._eventListener.onMessagesDeliveredToAll(b);
                  });
                  break;
                case Ee.RECEIPTS.ACTION.READ_BY_ALL:
                  Te.messageHandlers.map(function(w) {
                    w._eventListener.onMessagesReadByAll && w._eventListener.onMessagesReadByAll(b);
                  });
              }
            } catch (w) {
              s.Logger.error("WSHelper: publishReceipts", w);
            }
          }, ue.prototype.publishPresence = function(F) {
            try {
              var b = F.getUser();
              switch (b.setLastActiveAt(F.getTimestamp()), F.getAction()) {
                case Ee.PRESENCE.ACTION.ONLINE:
                case Ee.PRESENCE.ACTION.AVAILABLE:
                  b.setStatus(E.PresenceConstants.STATUS.ONLINE), Te.userHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onUserOnline) || w._eventListener.onUserOnline(b);
                  });
                  break;
                case Ee.PRESENCE.ACTION.OFFLINE:
                  b.setStatus(E.PresenceConstants.STATUS.OFFLINE), Te.userHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onUserOffline) || w._eventListener.onUserOffline(b);
                  });
              }
            } catch (w) {
              s.Logger.error("WSHelper: publishPresence", w);
            }
          }, ue.prototype.publishMessages = function(F) {
            try {
              var b = F.getMessage();
              b && b.getId() && l.MessageListnerMaping.getInstance().set("all", b.getId()), b instanceof c.Call ? this.publishCallMessage(b) : b instanceof u.Action ? this.publishActionMessage(b) : this.publishMessage(b);
            } catch (w) {
              s.Logger.error("WSHelper: publishMessages", w);
            }
          }, ue.prototype.publishMessage = function(F) {
            try {
              Te.messageHandlers.map(function(b) {
                if (b._eventListener) {
                  var w = F;
                  switch (w.getType()) {
                    case E.MessageConstatnts.TYPE.TEXT:
                      s.isFalsy(b._eventListener.onTextMessageReceived) || b._eventListener.onTextMessageReceived(F);
                      break;
                    case E.MessageConstatnts.TYPE.CUSTOM:
                      s.isFalsy(b._eventListener.onCustomMessageReceived) || b._eventListener.onCustomMessageReceived(F);
                      break;
                    default:
                      if (w.getCategory() == E.MessageCategory.CUSTOM) s.isFalsy(b._eventListener.onCustomMessageReceived) || b._eventListener.onCustomMessageReceived(F);
                      else if (w.getCategory() == E.MessageCategory.INTERACTIVE) s.isFalsy(b._eventListener.onInteractiveMessageReceived) || b._eventListener.onInteractiveMessageReceived(F);
                      else if (w.getCategory() === E.MessageCategory.AGENTIC) switch (w.getType()) {
                        case E.MessageConstatnts.TYPE.ASSISTANT:
                          s.isFalsy(b._eventListener.onAIAssistantMessageReceived) || b._eventListener.onAIAssistantMessageReceived(F);
                          break;
                        case E.MessageConstatnts.TYPE.TOOL_RESULT:
                          s.isFalsy(b._eventListener.onAIToolResultReceived) || b._eventListener.onAIToolResultReceived(F);
                          break;
                        case E.MessageConstatnts.TYPE.TOOL_ARGUMENTS:
                          s.isFalsy(b._eventListener.onAIToolArgumentsReceived) || b._eventListener.onAIToolArgumentsReceived(F);
                      }
                      else w.getCategory() === E.MessageCategory.CARD ? s.isFalsy(b._eventListener.onCardMessageReceived) || b._eventListener.onCardMessageReceived(F) : s.isFalsy(b._eventListener.onMediaMessageReceived) || b._eventListener.onMediaMessageReceived(F);
                  }
                }
              });
            } catch (b) {
              s.Logger.error("WSHelper: publishMessage", b);
            }
          }, ue.prototype.publishPinSaveEvent = function(F) {
            try {
              var b = F.getAction();
              if (!b) return;
              if (se.PinSaveParser.isConversationAction(b)) {
                var w = F.getConversation();
                w ? Ae.PinSaveEventDispatcher.notifyConversation(b, w) : s.Logger.log("WSHelper: publishPinSaveEvent", "frame carried no usable conversation");
                return;
              }
              var ie = F.getMessage();
              if (!ie) return void s.Logger.log("WSHelper: publishPinSaveEvent", "frame carried no usable message");
              Ae.PinSaveEventDispatcher.notify(b, ie);
            } catch (ae) {
              s.Logger.error("WSHelper: publishPinSaveEvent", ae);
            }
          }, ue.prototype.publishModerationStatusChangedMessage = function(F) {
            var b = F.getMessage();
            try {
              Te.messageHandlers.map(function(w) {
                w._eventListener && (s.isFalsy(w._eventListener.onMessageModerated) || w._eventListener.onMessageModerated(b));
              });
            } catch (w) {
              s.Logger.error("WSHelper: publishModerationStatusChangedMessage", w);
            }
          }, ue.prototype.publishCallMessage = function(F) {
            try {
              var b = n.CallController.getInstance().getActiveCall();
              switch (F.getStatus()) {
                case E.CallConstants.CALL_STATUS.INITIATED:
                  F.getReceiverType() == E.CallConstants.RECEIVER_TYPE_GROUP ? Te.callHandlers.map(function(w) {
                    F.getCallInitiator().getUid().toLocaleLowerCase() != S.CometChat.user.getUid().toLocaleLowerCase() && (s.isFalsy(w._eventListener.onIncomingCallReceived) || w._eventListener.onIncomingCallReceived(F));
                  }) : Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onIncomingCallReceived) || w._eventListener.onIncomingCallReceived(F);
                  });
                  break;
                case E.CallConstants.CALL_STATUS.ONGOING:
                  F.getReceiverType() == E.CallConstants.RECEIVER_TYPE_GROUP ? F.getCallInitiator().getUid().toLocaleLowerCase() == S.CometChat.user.getUid().toLocaleLowerCase() && Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onOutgoingCallAccepted) || w._eventListener.onOutgoingCallAccepted(F);
                  }) : (n.CallController.getInstance().clearTimer(), Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onOutgoingCallAccepted) || w._eventListener.onOutgoingCallAccepted(F);
                  }));
                  break;
                case E.CallConstants.CALL_STATUS.UNANSWERED:
                  if (F.getCallInitiator().getUid().toLocaleLowerCase() == S.CometChat.user.getUid().toLocaleLowerCase()) Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onOutgoingCallRejected) || w._eventListener.onOutgoingCallRejected(F);
                  });
                  else {
                    if (b !== null && b.getSessionId() === F.getSessionId()) try {
                      n.CallController.getInstance().endCall();
                    } catch (w) {
                      s.Logger.error("CallError", w);
                    }
                    Te.callHandlers.map(function(w) {
                      s.isFalsy(w._eventListener.onIncomingCallCancelled) || w._eventListener.onIncomingCallCancelled(F);
                    });
                  }
                  break;
                case E.CallConstants.CALL_STATUS.REJECTED:
                  if (F.getReceiverType() == E.CallConstants.RECEIVER_TYPE_GROUP) F.getCallInitiator().getUid().toLocaleLowerCase() == S.CometChat.user.getUid().toLocaleLowerCase() && Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onOutgoingCallRejected) || w._eventListener.onOutgoingCallRejected(F);
                  });
                  else {
                    if (b !== null && b.getSessionId() === F.getSessionId()) try {
                      n.CallController.getInstance().endCall();
                    } catch (w) {
                      s.Logger.error("CallError", w);
                    }
                    Te.callHandlers.map(function(w) {
                      s.isFalsy(w._eventListener.onOutgoingCallRejected) || w._eventListener.onOutgoingCallRejected(F);
                    });
                  }
                  break;
                case E.CallConstants.CALL_STATUS.BUSY:
                  F.getReceiverType() == E.CallConstants.RECEIVER_TYPE_GROUP ? F.getCallInitiator().getUid().toLocaleLowerCase() == S.CometChat.user.getUid().toLocaleLowerCase() && Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onOutgoingCallRejected) || w._eventListener.onOutgoingCallRejected(F);
                  }) : Te.callHandlers.map(function(w) {
                    if (b !== null && b.getSessionId() === F.getSessionId()) try {
                      n.CallController.getInstance().endCall();
                    } catch (ie) {
                      s.Logger.error("CallError", ie);
                    }
                    s.isFalsy(w._eventListener.onOutgoingCallRejected) || w._eventListener.onOutgoingCallRejected(F);
                  });
                  break;
                case E.CallConstants.CALL_STATUS.CANCELLED:
                  if (Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onIncomingCallCancelled) || w._eventListener.onIncomingCallCancelled(F);
                  }), b !== null && b.getSessionId() === F.getSessionId()) try {
                    n.CallController.getInstance().endCall();
                  } catch (w) {
                    s.Logger.error("CallError", w);
                  }
                  break;
                case E.CallConstants.CALL_STATUS.ENDED:
                  if (Te.callHandlers.map(function(w) {
                    s.isFalsy(w._eventListener.onCallEndedMessageReceived) || w._eventListener.onCallEndedMessageReceived(F);
                  }), n.CallController.getInstance().getCallListner() && n.CallController.getInstance().getCallListner()._eventListener.onCallEnded(F), b !== null && b.getSessionId() === F.getSessionId()) try {
                    n.CallController.getInstance().endCall();
                  } catch (w) {
                    s.Logger.error("CallError", w);
                  }
                  break;
                default:
                  s.Logger.log("WSHelper: publishCallMessage :: unknown status", F);
              }
            } catch (w) {
              s.Logger.error("WSHelper: publishCallMessage", w);
            }
          }, ue.prototype.publishActionMessage = function(F) {
            try {
              switch (F.getAction()) {
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_JOINED:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberJoined) || b._eventListener.onGroupMemberJoined(F, F.getActionBy(), F.getActionFor());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_INVITED:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberJoined) || b._eventListener.onGroupMemberJoined(F, F.getActionBy(), F.getActionFor());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_LEFT:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberLeft) || b._eventListener.onGroupMemberLeft(F, F.getActionBy(), F.getActionFor());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_BANNED:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberBanned) || b._eventListener.onGroupMemberBanned(F, F.getActionOn(), F.getActionBy(), F.getActionFor());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_KICKED:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberKicked) || b._eventListener.onGroupMemberKicked(F, F.getActionOn(), F.getActionBy(), F.getActionFor());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_UNBANNED:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberUnbanned) || b._eventListener.onGroupMemberUnbanned(F, F.getActionOn(), F.getActionBy(), F.getActionFor());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_SCOPE_CHANGED:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberScopeChanged) || b._eventListener.onGroupMemberScopeChanged(F, F.getActionOn(), F.getNewScope(), F.getOldScope(), F.getActionFor());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MESSAGE_EDITED:
                  Te.messageHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onMessageEdited) || b._eventListener.onMessageEdited(F.getActionOn());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MESSAGE_DELETED:
                  Te.messageHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onMessageDeleted) || b._eventListener.onMessageDeleted(F.getActionOn());
                  });
                  break;
                case E.ActionConstatnts.ACTION_TYPE.TYPE_MEMBER_ADDED:
                  Te.groupHandlers.map(function(b) {
                    s.isFalsy(b._eventListener.onGroupMemberAddedToGroup) || b._eventListener.onGroupMemberAddedToGroup(F, F.getActionOn(), F.getActionBy(), F.getActionFor());
                  });
                  break;
                default:
                  s.Logger.log("WSHelper: publishActionMessage :: unknown action", F);
              }
            } catch (b) {
              s.Logger.error("WSHelper: publishActionMessage", b);
            }
          }, ue.prototype.publishTransientMessage = function(F) {
            try {
              var b = F.getTransientMessage();
              Te.messageHandlers.map(function(w) {
                w._eventListener.onTransientMessageReceived && w._eventListener.onTransientMessageReceived(b);
              });
            } catch (w) {
              s.Logger.error("WSHelper: publishTransientMessage", w);
            }
          }, ue.prototype.publishInteractionReceipt = function(F) {
            try {
              var b = F.getInteractionReceipt();
              Te.messageHandlers.map(function(w) {
                w._eventListener.onInteractionGoalCompleted && w._eventListener.onInteractionGoalCompleted(b);
              });
            } catch (w) {
              s.Logger.error("WSHelper: publishInteractionReceipt", w);
            }
          }, ue.prototype.getCometChatEventFromMessage = function(F) {
            try {
              if (F.hasOwnProperty(Ee.KEYS.TYPE)) {
                switch (F.type) {
                  case Ee.TYPING_INDICATOR.TYPE:
                    return M.CometChatTypingEvent.getTypingEventFromJSON(F);
                  case Ee.RECEIPTS.TYPE:
                    return m.CometChatReceiptEvent.getReceiptEventFromJSON(F);
                  case Ee.PRESENCE.TYPE:
                    return f.CometChatPresenceEvent.getPresenceEventFromJSON(F);
                  case Ee.MESSAGE.TYPE:
                    return h.CometChatMessageEvent.getMessageEventFromJSON(F);
                  case Ee.AUTH.TYPE:
                    return d.CometChatAuthEvent.getAuthEventFromJSON(F);
                  case Ee.TRANSIENT_MESSAGE.TYPE:
                    return V.CometChatTransientEvent.getTransientEventFromJSON(F);
                  case Ee.INTERACTION_RECEIPT.TYPE:
                    return t.CometChatInteractionReceiptEvent.getReceiptEventFromJSON(F);
                  case Ee.MESSAGE_REACTION.TYPE:
                    return P.CometChatReactionEvent.getReactionEventFromJSON(F);
                  case Ee.MODERATION_STATUS_CHANGED.TYPE:
                    return I.CometChatModerationStatusChangeEvent.getMessageEventFromJSON(F);
                  case Ee.STREAM_MESSAGE.TYPE:
                    return D.CometChatStreamMessageEvent.getMessageEventFromJSON(F);
                }
                var b = se.PinSaveParser.resolveWsEventAction(F);
                if (b) return q.CometChatPinSaveEvent.getEventFromJSON(F, b);
              }
            } catch (w) {
              s.Logger.error("WSConnectionHelper: getCometChatEventFromMessage", w);
            }
          }, ue.prototype.publishNotificationFeedItem = function(F) {
            try {
              if (!F || !F.body) return void s.Logger.log("WSConnectionHelper: publishNotificationFeedItem", "missing body");
              var b = F.body, w = b.action, ie = b.feedItem;
              if (w !== Ee.NOTIFICATION_FEED.ACTION.SENT) return void s.Logger.log("WSConnectionHelper: publishNotificationFeedItem", "ignoring action: " + w);
              if (!ie) return void s.Logger.log("WSConnectionHelper: publishNotificationFeedItem", "missing feedItem in body");
              var ae = new W.NotificationFeedItem(ie);
              Te.notificationFeedHandlers.map(function(ne) {
                ne._eventListener && ne._eventListener.onFeedItemReceived && ne._eventListener.onFeedItemReceived(ae);
              });
            } catch (ne) {
              s.Logger.error("WSConnectionHelper: publishNotificationFeedItem", ne);
            }
          }, ue.wsConnectionHelper = new ue(), ue;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatAuthEvent = void 0;
        var S = g(5), E = g(38);
        a.CometChatAuthEvent = (function(n) {
          function o(s, r, e, l, u) {
            var C = n.call(this, s, r, e, l, u) || this;
            return C.roles = [], C.setType(S.AUTH.TYPE), C;
          }
          return i(o, n), o.prototype.getStatus = function() {
            return this.status;
          }, o.prototype.setStatus = function(s) {
            this.status = s;
          }, o.prototype.getCode = function() {
            return this.code;
          }, o.prototype.setCode = function(s) {
            this.code = s;
          }, o.prototype.setAuth = function(s) {
            this.auth = s;
          }, o.prototype.getAuth = function() {
            return this.auth;
          }, o.prototype.setPresenceSubscription = function(s) {
            this.presenceSubscription = s;
          }, o.prototype.getPresenceSubscription = function() {
            return this.presenceSubscription;
          }, o.prototype.setDeviceId = function(s) {
            this.deviceId = s;
          }, o.prototype.getdeviceId = function() {
            return this.deviceId;
          }, o.prototype.setExtraParmaeters = function(s) {
            this.params = s;
          }, o.prototype.getExtraParameters = function() {
            return this.params;
          }, o.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, o.prototype.setRoles = function(s) {
            this.roles = s;
          }, o.prototype.getRoles = function() {
            return this.roles;
          }, o.prototype.getAsJSONObject = function() {
            var s = this.getCometChatEventJSON(), r = {};
            r[S.KEYS.AUTH] = this.auth, r[S.KEYS.DEVICE_ID] = this.deviceId;
            var e = this.getPresenceSubscription(), l = this.getRoles();
            return (r[S.KEYS.PRESENCE_SUBSCRIPTION] = e) === E.AppSettings.SUBSCRIPTION_TYPE_ROLES && 0 < l.length && (r[S.KEYS.ROLES] = l), r[S.KEYS.PARAMS] = this.params, s[S.KEYS.BODY] = r, s;
          }, o.getAuthEventFromJSON = function(s) {
            var r = s[S.KEYS.APP_ID], e = s[S.KEYS.RECEIVER], l = s[S.KEYS.RECEIVER_TYPE], u = s[S.KEYS.DEVICE_ID], C = s[S.KEYS.SENDER], c = s[S.KEYS.BODY], d = c[S.KEYS.STATUS], t = c[S.KEYS.CODE], h = new o(r, e, l, C, u);
            return h.setStatus(d), h.setCode(t), h;
          }, o;
        })(g(10).CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(r, e) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, u) {
            l.__proto__ = u;
          } || function(l, u) {
            for (var C in u) u.hasOwnProperty(C) && (l[C] = u[C]);
          })(r, e);
        }, function(r, e) {
          function l() {
            this.constructor = r;
          }
          p(r, e), r.prototype = e === null ? Object.create(e) : (l.prototype = e.prototype, new l());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatInteractionReceiptEvent = void 0;
        var S = g(5), E = g(10), n = g(30), o = g(64), s = g(3);
        a.CometChatInteractionReceiptEvent = (function(r) {
          function e(l, u, C, c, d, t) {
            var h = r.call(this, l, u, C, c, d, t) || this;
            return h.setType(S.INTERACTION_RECEIPT.TYPE), h;
          }
          return i(e, r), e.prototype.getInteractionReceipt = function() {
            return this.interactionReceipt;
          }, e.prototype.setInteractionReceipt = function(l) {
            this.interactionReceipt = l;
          }, e.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, e.prototype.getAsJSONObject = function() {
            var l = this.getCometChatEventJSON(), u = {};
            return u[S.KEYS.MESSAGE_ID] = this.interactionReceipt.getMessageId(), u[S.KEYS.USER] = this.interactionReceipt.getSender(), u[S.KEYS.INTERACTIONS] = this.interactionReceipt.getInteractions(), l[S.KEYS.BODY] = u, l;
          }, e.getReceiptEventFromJSON = function(l) {
            var u = l[S.KEYS.APP_ID], C = l[S.KEYS.RECEIVER], c = l[S.KEYS.RECEIVER_TYPE], d = l[S.KEYS.DEVICE_ID], t = l[S.KEYS.SENDER], h = l[S.KEYS.MESSAGE_SENDER], I = l[S.KEYS.BODY], T = I[S.KEYS.USER], f = I[S.KEYS.MESSAGE_ID], P = I[S.KEYS.INTERACTIONS], m = new e(u, C, c, t, d, h), D = new o.InteractionReceipt();
            return D.setSender(new s.User(T)), D.setReceiverType(c), D.setMessageId(f), D.setReceiverId(C), D.setInteractions(P.map(function(V) {
              return n.Interaction.getInteractionFromJSON(V);
            })), m.setInteractionReceipt(D), m;
          }, e;
        })(E.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatMessageEvent = void 0;
        var S = g(11), E = g(5);
        a.CometChatMessageEvent = (function(n) {
          function o(s, r, e, l, u) {
            var C = n.call(this, s, r, e, l, u) || this;
            return C.setType(E.MESSAGE.TYPE), C;
          }
          return i(o, n), o.prototype.getMessage = function() {
            return this.message;
          }, o.prototype.setMessage = function(s) {
            this.message = s;
          }, o.getMessageEventFromJSON = function(s) {
            var r = s[E.KEYS.APP_ID], e = s[E.KEYS.RECEIVER], l = s[E.KEYS.RECEIVER_TYPE], u = s[E.KEYS.DEVICE_ID], C = s[E.KEYS.SENDER], c = s[E.KEYS.BODY], d = new o(r, e, l, C, u), t = S.MessageController.trasformJSONMessge(c);
            return d.setMessage(t), d;
          }, o;
        })(g(10).CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatModerationStatusChangeEvent = void 0;
        var S = g(11), E = g(5);
        a.CometChatModerationStatusChangeEvent = (function(n) {
          function o(s, r, e, l, u) {
            var C = n.call(this, s, r, e, l, u) || this;
            return C.setType(E.MODERATION_STATUS_CHANGED.TYPE), C;
          }
          return i(o, n), o.prototype.getMessage = function() {
            return this.message;
          }, o.prototype.setMessage = function(s) {
            this.message = s;
          }, o.getMessageEventFromJSON = function(s) {
            var r = s[E.KEYS.APP_ID], e = s[E.KEYS.RECEIVER], l = s[E.KEYS.RECEIVER_TYPE], u = s[E.KEYS.DEVICE_ID], C = s[E.KEYS.SENDER], c = s[E.KEYS.BODY], d = new o(r, e, l, C, u), t = S.MessageController.trasformJSONMessge(c);
            return d.setMessage(t), d;
          }, o;
        })(g(10).CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(E, n) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, s) {
            o.__proto__ = s;
          } || function(o, s) {
            for (var r in s) s.hasOwnProperty(r) && (o[r] = s[r]);
          })(E, n);
        }, function(E, n) {
          function o() {
            this.constructor = E;
          }
          p(E, n), E.prototype = n === null ? Object.create(n) : (o.prototype = n.prototype, new o());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatPingEvent = void 0;
        var S = g(5);
        a.CometChatPingEvent = (function(E) {
          function n(o, s, r, e, l) {
            return E.call(this, o, s, r, e, l) || this;
          }
          return i(n, E), n.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, n.prototype.getAsJSONObject = function() {
            var o = {};
            return o[S.KEYS.ACTION] = S.KEYS.PING, o[S.KEYS.ACK] = "true", o;
          }, n;
        })(g(10).CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(o, s) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, e) {
            r.__proto__ = e;
          } || function(r, e) {
            for (var l in e) e.hasOwnProperty(l) && (r[l] = e[l]);
          })(o, s);
        }, function(o, s) {
          function r() {
            this.constructor = o;
          }
          p(o, s), o.prototype = s === null ? Object.create(s) : (r.prototype = s.prototype, new r());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatPresenceEvent = void 0;
        var S = g(5), E = g(10), n = g(3);
        a.CometChatPresenceEvent = (function(o) {
          function s(r, e, l, u, C) {
            var c = o.call(this, r, e, l, u, C) || this;
            return c.setType(S.PRESENCE.TYPE), c;
          }
          return i(s, o), s.prototype.getAction = function() {
            return this.action;
          }, s.prototype.setAction = function(r) {
            this.action = r;
          }, s.prototype.getUser = function() {
            return this.user;
          }, s.prototype.setUser = function(r) {
            this.user = r;
          }, s.prototype.getTimestamp = function() {
            return this.timestamp;
          }, s.prototype.setTimestamp = function(r) {
            this.timestamp = r;
          }, s.getPresenceEventFromJSON = function(r) {
            var e = r[S.KEYS.APP_ID], l = r[S.KEYS.DEVICE_ID], u = r[S.KEYS.SENDER], C = r[S.KEYS.BODY], c = C[S.KEYS.ACTION], d = C[S.KEYS.USER], t = C[S.KEYS.TIMESTAMP], h = new s(e, "", "", u, l);
            return h.setAction(c), h.setUser(new n.User(d)), h.setTimestamp(t), h;
          }, s;
        })(E.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(s, r) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, l) {
            e.__proto__ = l;
          } || function(e, l) {
            for (var u in l) l.hasOwnProperty(u) && (e[u] = l[u]);
          })(s, r);
        }, function(s, r) {
          function e() {
            this.constructor = s;
          }
          p(s, r), s.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatReactionEvent = void 0;
        var S = g(5), E = g(10), n = g(41), o = g(65);
        a.CometChatReactionEvent = (function(s) {
          function r(e, l, u, C, c) {
            var d = s.call(this, e, l, u, C, c) || this;
            return d.setType(S.MESSAGE_REACTION.TYPE), d;
          }
          return i(r, s), r.prototype.getAction = function() {
            return this.action;
          }, r.prototype.setAction = function(e) {
            this.action = e;
          }, r.prototype.getMessageReactionEvent = function() {
            return this.reaction;
          }, r.prototype.setMessageReactionEvent = function(e) {
            this.reaction = e;
          }, r.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, r.prototype.getAsJSONObject = function() {
            var e = this.getCometChatEventJSON(), l = {};
            return l[S.KEYS.ACTION] = this.action, l[S.KEYS.REACTION] = this.reaction, e[S.KEYS.BODY] = l, e;
          }, r.getReactionEventFromJSON = function(e) {
            var l = e[S.KEYS.APP_ID], u = e[S.KEYS.DEVICE_ID], C = e[S.KEYS.SENDER], c = e[S.KEYS.RECEIVER], d = e[S.KEYS.RECEIVER_TYPE], t = e[S.KEYS.BODY], h = t[S.KEYS.ACTION], I = t[S.KEYS.ID], T = t[S.KEYS.MESSAGE_ID], f = t[S.KEYS.UID], P = t[S.KEYS.REACTION], m = t[S.KEYS.REACTED_BY], D = t[S.KEYS.REACTED_AT], V = t[S.KEYS.CONVERSATION_ID], M = t[S.KEYS.PARENT_ID], z = new n.Reaction(I, T, P, f, D, m), le = new o.ReactionEvent(z, c, d, V, M), de = new r(l, c, d, C, u);
            return de.setAction(h), de.setMessageReactionEvent(le), de;
          }, r;
        })(E.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(s, r) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, l) {
            e.__proto__ = l;
          } || function(e, l) {
            for (var u in l) l.hasOwnProperty(u) && (e[u] = l[u]);
          })(s, r);
        }, function(s, r) {
          function e() {
            this.constructor = s;
          }
          p(s, r), s.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatReceiptEvent = void 0;
        var S = g(5), E = g(10), n = g(21), o = g(3);
        a.CometChatReceiptEvent = (function(s) {
          function r(e, l, u, C, c, d) {
            var t = s.call(this, e, l, u, C, c, d) || this;
            return t.setType(S.RECEIPTS.TYPE), t;
          }
          return i(r, s), r.prototype.getAction = function() {
            return this.action;
          }, r.prototype.setAction = function(e) {
            this.action = e;
          }, r.prototype.getMessageReceipt = function() {
            return this.receipt;
          }, r.prototype.setMessageReceipt = function(e) {
            this.receipt = e;
          }, r.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, r.prototype.getAsJSONObject = function() {
            var e = this.getCometChatEventJSON(), l = {};
            return l[S.KEYS.ACTION] = this.action, l[S.KEYS.MESSAGE_ID] = this.receipt.getMessageId(), l[S.KEYS.USER] = this.receipt.getSender(), e[S.KEYS.BODY] = l, e;
          }, r.getReceiptEventFromJSON = function(e) {
            var l = e[S.KEYS.APP_ID], u = e[S.KEYS.RECEIVER], C = e[S.KEYS.RECEIVER_TYPE], c = e[S.KEYS.DEVICE_ID], d = e[S.KEYS.SENDER], t = e[S.KEYS.BODY], h = t[S.KEYS.ACTION], I = t[S.KEYS.USER], T = t[S.KEYS.MESSAGE_ID], f = t[S.KEYS.TIMESTAMP], P = new r(l, u, C, d, c);
            P.setAction(h);
            var m = new n.MessageReceipt();
            return m.setSender(new o.User(I)), m.setReceiverType(C), m.setReceiver(u), h === S.RECEIPTS.ACTION.DELIVERED && (m.setReceiptType(S.RECEIPTS.RECEIPT_TYPE.DELIVERY_RECEIPT), m.setDeliveredAt(f)), h === S.RECEIPTS.ACTION.READ && (m.setReceiptType(S.RECEIPTS.RECEIPT_TYPE.READ_RECEIPT), m.setReadAt(f)), h === S.RECEIPTS.ACTION.READ_BY_ALL && (m.setReceiptType(S.RECEIPTS.RECEIPT_TYPE.READ_BY_ALL_RECEIPT), m.setReadAt(f)), h === S.RECEIPTS.ACTION.DELIVERED_TO_ALL && (m.setReceiptType(S.RECEIPTS.RECEIPT_TYPE.DELIVERY_TO_ALL_RECEIPT), m.setDeliveredAt(f)), m.setMessageId(T.toString()), m.setTimestamp(f), P.setMessageReceipt(m), P;
          }, r;
        })(E.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(r, e) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(l, u) {
            l.__proto__ = u;
          } || function(l, u) {
            for (var C in u) u.hasOwnProperty(C) && (l[C] = u[C]);
          })(r, e);
        }, function(r, e) {
          function l() {
            this.constructor = r;
          }
          p(r, e), r.prototype = e === null ? Object.create(e) : (l.prototype = e.prototype, new l());
        }), S = this && this.__assign || function() {
          return (S = Object.assign || function(r) {
            for (var e, l = 1, u = arguments.length; l < u; l++) for (var C in e = arguments[l]) Object.prototype.hasOwnProperty.call(e, C) && (r[C] = e[C]);
            return r;
          }).apply(this, arguments);
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatStreamMessageEvent = void 0;
        var E = g(5), n = g(10), o = g(66), s = g(0);
        a.CometChatStreamMessageEvent = (function(r) {
          function e(l, u, C, c, d) {
            var t = r.call(this, l, u, C, c, d) || this;
            return t.setType(E.STREAM_MESSAGE.TYPE), t;
          }
          return i(e, r), e.prototype.getMessage = function() {
            return this.message;
          }, e.prototype.setMessage = function(l) {
            this.message = l;
          }, e.createAssistantEventFromMessage = function(l) {
            var u = l.type, C = l.conversationId || "", c = l.id || "", d = l.parentId || "", t = l.data || { timestamp: Date.now() }, h = {
              timestamp: t.timestamp || Date.now(),
              runId: t.runId || "",
              threadId: t.threadId || ""
            };
            switch (u) {
              case s.AI_ASSISTANT_EVENTS.RUN_STARTED:
                var I = h;
                return new o.AIAssistantRunStartedEvent(C, c, d, I);
              case s.AI_ASSISTANT_EVENTS.RUN_FINISHED:
                var T = h;
                return new o.AIAssistantRunFinishedEvent(C, c, d, T);
              case s.AI_ASSISTANT_EVENTS.TEXT_MESSAGE_START:
                var f = S(S({}, h), { role: t.role || "" });
                return new o.AIAssistantMessageStartedEvent(C, c, d, f);
              case s.AI_ASSISTANT_EVENTS.TEXT_MESSAGE_END:
                var P = h;
                return new o.AIAssistantMessageEndedEvent(C, c, d, P);
              case s.AI_ASSISTANT_EVENTS.TEXT_MESSAGE_CONTENT:
                var m = S(S({}, h), { delta: t.delta || "" });
                return new o.AIAssistantContentReceivedEvent(C, c, d, m);
              case s.AI_ASSISTANT_EVENTS.TOOL_CALL_STARTED:
                var D = S(S({}, h), {
                  toolCallId: t.toolCallId || "",
                  toolCallName: t.toolCallName || "",
                  displayName: t.displayName || "",
                  executionText: t.executionText || ""
                });
                return new o.AIAssistantToolStartedEvent(C, c, d, D);
              case s.AI_ASSISTANT_EVENTS.TOOL_CALL_ENDED:
                var V = S(S({}, h), { toolCallId: t.toolCallId || "" });
                return new o.AIAssistantToolEndedEvent(C, c, d, V);
              case s.AI_ASSISTANT_EVENTS.TOOL_CALL_RESULT:
                var M = S(S({}, h), {
                  toolCallId: t.toolCallId || "",
                  content: t.content || "",
                  role: t.role || ""
                });
                return new o.AIAssistantToolResultEvent(C, c, d, M);
              case s.AI_ASSISTANT_EVENTS.TOOL_CALL_ARGUMENT:
                var z = S(S({}, h), {
                  toolCallId: t.toolCallId || "",
                  delta: t.delta || ""
                });
                return new o.AIAssistantToolArgumentEvent(C, c, d, z);
              case s.AI_ASSISTANT_EVENTS.CARD_START:
                var le = S(S({}, h), {
                  streamMessageId: t.streamMessageId || "",
                  cardId: t.cardId || "",
                  executionText: t.executionText || ""
                });
                return new o.AIAssistantCardStartedEvent(C, c, d, le);
              case s.AI_ASSISTANT_EVENTS.CARD:
                var de = S(S({}, h), {
                  streamMessageId: t.streamMessageId || "",
                  cardId: t.cardId || "",
                  card: t.card || void 0
                });
                return new o.AIAssistantCardReceivedEvent(C, c, d, de);
              case s.AI_ASSISTANT_EVENTS.CARD_END:
                var W = S(S({}, h), {
                  streamMessageId: t.streamMessageId || "",
                  cardId: t.cardId || ""
                });
                return new o.AIAssistantCardEndedEvent(C, c, d, W);
              default:
                var q = S(S({}, h), t);
                return new o.AIAssistantBaseEvent(u, C, c, d, q);
            }
          }, e.getMessageEventFromJSON = function(l) {
            var u = l[E.KEYS.APP_ID], C = l[E.KEYS.RECEIVER], c = l[E.KEYS.RECEIVER_TYPE], d = l[E.KEYS.DEVICE_ID], t = l[E.KEYS.SENDER], h = l[E.KEYS.BODY], I = new e(u, C, c, t, d), T = e.createAssistantEventFromMessage(h);
            return I.setMessage(T), I;
          }, e;
        })(n.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantRunStartedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantRunStartedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.RUN_STARTED, s, r, e, l) || this;
          }
          return i(o, n), o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantRunFinishedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantRunFinishedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.RUN_FINISHED, s, r, e, l) || this;
          }
          return i(o, n), o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantMessageStartedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantMessageStartedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.TEXT_MESSAGE_START, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getRole = function() {
            return this.data.role;
          }, o.prototype.setRole = function(s) {
            this.data.role = s;
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantMessageEndedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantMessageEndedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.TEXT_MESSAGE_END, s, r, e, l) || this;
          }
          return i(o, n), o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantContentReceivedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantContentReceivedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.TEXT_MESSAGE_CONTENT, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getDelta = function() {
            return this.data.delta;
          }, o.prototype.setDelta = function(s) {
            this.data.delta = s;
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantToolStartedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantToolStartedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.TOOL_CALL_STARTED, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getToolCallId = function() {
            return this.data.toolCallId;
          }, o.prototype.setToolCallId = function(s) {
            this.data.toolCallId = s;
          }, o.prototype.getToolCallName = function() {
            return this.data.toolCallName;
          }, o.prototype.setToolCallName = function(s) {
            this.data.toolCallName = s;
          }, o.prototype.getDisplayName = function() {
            return this.data.displayName;
          }, o.prototype.setDisplayName = function(s) {
            this.data.displayName = s;
          }, o.prototype.getExecutionText = function() {
            return this.data.executionText;
          }, o.prototype.setExecutionText = function(s) {
            this.data.executionText = s;
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantToolArgumentEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantToolArgumentEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.TOOL_CALL_ARGUMENT, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getToolCallId = function() {
            return this.data.toolCallId;
          }, o.prototype.setToolCallId = function(s) {
            this.data.toolCallId = s;
          }, o.prototype.getDelta = function() {
            return this.data.delta;
          }, o.prototype.setDelta = function(s) {
            this.data.delta = s;
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantToolEndedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantToolEndedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.TOOL_CALL_ENDED, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getToolCallId = function() {
            return this.data.toolCallId;
          }, o.prototype.setToolCallId = function(s) {
            this.data.toolCallId = s;
          }, o.fromJSON = function(s) {
            return new o(s.conversationId, s.messageId, s.parentMessageId, s.data);
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantToolResultEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantToolResultEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.TOOL_CALL_RESULT, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getToolCallId = function() {
            return this.data.toolCallId;
          }, o.prototype.setToolCallId = function(s) {
            this.data.toolCallId = s;
          }, o.prototype.getContent = function() {
            return this.data.content;
          }, o.prototype.setContent = function(s) {
            this.data.content = s;
          }, o.prototype.getRole = function() {
            return this.data.role;
          }, o.prototype.setRole = function(s) {
            this.data.role = s;
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantCardStartedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantCardStartedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.CARD_START, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getStreamMessageId = function() {
            var s;
            return ((s = this.data) === null || s === void 0 ? void 0 : s.streamMessageId) || "";
          }, o.prototype.getCardId = function() {
            var s;
            return ((s = this.data) === null || s === void 0 ? void 0 : s.cardId) || "";
          }, o.prototype.getExecutionText = function() {
            var s;
            return ((s = this.data) === null || s === void 0 ? void 0 : s.executionText) || "";
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantCardReceivedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantCardReceivedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.CARD, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getStreamMessageId = function() {
            var s;
            return ((s = this.data) === null || s === void 0 ? void 0 : s.streamMessageId) || "";
          }, o.prototype.getCardId = function() {
            var s;
            return ((s = this.data) === null || s === void 0 ? void 0 : s.cardId) || "";
          }, o.prototype.getCard = function() {
            var s;
            return (s = this.data) === null || s === void 0 ? void 0 : s.card;
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(n, o) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, r) {
            s.__proto__ = r;
          } || function(s, r) {
            for (var e in r) r.hasOwnProperty(e) && (s[e] = r[e]);
          })(n, o);
        }, function(n, o) {
          function s() {
            this.constructor = n;
          }
          p(n, o), n.prototype = o === null ? Object.create(o) : (s.prototype = o.prototype, new s());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.AIAssistantCardEndedEvent = void 0;
        var S = g(8), E = g(0);
        a.AIAssistantCardEndedEvent = (function(n) {
          function o(s, r, e, l) {
            return n.call(this, E.AI_ASSISTANT_EVENTS.CARD_END, s, r, e, l) || this;
          }
          return i(o, n), o.prototype.getStreamMessageId = function() {
            var s;
            return ((s = this.data) === null || s === void 0 ? void 0 : s.streamMessageId) || "";
          }, o.prototype.getCardId = function() {
            var s;
            return ((s = this.data) === null || s === void 0 ? void 0 : s.cardId) || "";
          }, o;
        })(S.AIAssistantBaseEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(s, r) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, l) {
            e.__proto__ = l;
          } || function(e, l) {
            for (var u in l) l.hasOwnProperty(u) && (e[u] = l[u]);
          })(s, r);
        }, function(s, r) {
          function e() {
            this.constructor = s;
          }
          p(s, r), s.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatTransientEvent = void 0;
        var S = g(5), E = g(10), n = g(42), o = g(3);
        a.CometChatTransientEvent = (function(s) {
          function r(e, l, u, C, c) {
            var d = s.call(this, e, l, u, C, c) || this;
            return d.setType(S.TRANSIENT_MESSAGE.TYPE), d;
          }
          return i(r, s), r.prototype.getTransientMessage = function() {
            return this.transientMessage;
          }, r.prototype.setTransientMessage = function(e) {
            this.transientMessage = e;
          }, r.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, r.prototype.getAsJSONObject = function() {
            var e = this.getCometChatEventJSON(), l = {};
            return l[S.KEYS.USER] = this.transientMessage.getSender(), this.transientMessage.getData() && (l[S.KEYS.DATA] = this.transientMessage.getData()), e[S.KEYS.BODY] = l, e;
          }, r.getTransientEventFromJSON = function(e) {
            var l = e[S.KEYS.APP_ID], u = e[S.KEYS.RECEIVER], C = e[S.KEYS.RECEIVER_TYPE], c = e[S.KEYS.DEVICE_ID], d = e[S.KEYS.SENDER], t = e[S.KEYS.BODY], h = t[S.KEYS.USER], I = t[S.KEYS.DATA], T = new r(l, u, C, d, c), f = new n.TransientMessage(u, C, I);
            return f.setSender(new o.User(h)), t.hasOwnProperty(S.KEYS.DATA) && t[S.KEYS.DATA] && f.setData(I), T.setTransientMessage(f), T;
          }, r;
        })(E.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(s, r) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, l) {
            e.__proto__ = l;
          } || function(e, l) {
            for (var u in l) l.hasOwnProperty(u) && (e[u] = l[u]);
          })(s, r);
        }, function(s, r) {
          function e() {
            this.constructor = s;
          }
          p(s, r), s.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatTypingEvent = void 0;
        var S = g(5), E = g(10), n = g(37), o = g(3);
        a.CometChatTypingEvent = (function(s) {
          function r(e, l, u, C, c) {
            var d = s.call(this, e, l, u, C, c) || this;
            return d.setType(S.TYPING_INDICATOR.TYPE), d;
          }
          return i(r, s), r.prototype.getAction = function() {
            return this.action;
          }, r.prototype.setAction = function(e) {
            this.action = e;
          }, r.prototype.getTypingIndicator = function() {
            return this.typingIndicator;
          }, r.prototype.setTypingIndicator = function(e) {
            this.typingIndicator = e;
          }, r.prototype.getAsString = function() {
            return JSON.stringify(this.getAsJSONObject());
          }, r.prototype.getAsJSONObject = function() {
            var e = this.getCometChatEventJSON(), l = {};
            return l[S.KEYS.ACTION] = this.action, l[S.KEYS.USER] = this.typingIndicator.getSender(), this.typingIndicator.getMetadata() && (l[S.KEYS.METADATA] = this.typingIndicator.getMetadata()), e[S.KEYS.BODY] = l, e;
          }, r.getTypingEventFromJSON = function(e) {
            var l = e[S.KEYS.APP_ID], u = e[S.KEYS.RECEIVER], C = e[S.KEYS.RECEIVER_TYPE], c = e[S.KEYS.DEVICE_ID], d = e[S.KEYS.SENDER], t = e[S.KEYS.BODY], h = t[S.KEYS.ACTION], I = t[S.KEYS.USER], T = t[S.KEYS.METADATA], f = new r(l, u, C, d, c);
            f.setAction(h);
            var P = new n.TypingIndicator(u, C);
            return P.setSender(new o.User(I)), t.hasOwnProperty(S.KEYS.METADATA) && t[S.KEYS.METADATA] && P.setMetadata(T), f.setTypingIndicator(P), f;
          }, r;
        })(E.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i = this && this.__extends || (p = function(s, r) {
          return (p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, l) {
            e.__proto__ = l;
          } || function(e, l) {
            for (var u in l) l.hasOwnProperty(u) && (e[u] = l[u]);
          })(s, r);
        }, function(s, r) {
          function e() {
            this.constructor = s;
          }
          p(s, r), s.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
        });
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatPinSaveEvent = void 0;
        var S = g(10), E = g(14), n = g(15), o = g(5);
        a.CometChatPinSaveEvent = (function(s) {
          function r(e, l, u, C, c) {
            var d = s.call(this, e, l, u, C, c) || this;
            return d.setType(E.PIN_SAVE_EVENT.TYPE), d;
          }
          return i(r, s), r.prototype.getMessage = function() {
            return this.message;
          }, r.prototype.setMessage = function(e) {
            this.message = e;
          }, r.prototype.getConversation = function() {
            return this.conversation;
          }, r.prototype.setConversation = function(e) {
            this.conversation = e;
          }, r.prototype.getAction = function() {
            return this.action;
          }, r.prototype.setAction = function(e) {
            this.action = e;
          }, r.getEventFromJSON = function(e, l) {
            var u = new r(e[o.KEYS.APP_ID], e[o.KEYS.RECEIVER], e[o.KEYS.RECEIVER_TYPE], e[o.KEYS.SENDER], e[o.KEYS.DEVICE_ID]);
            return u.setAction(l), n.PinSaveParser.isConversationAction(l) ? u.setConversation(n.PinSaveParser.parseWsEventConversation(e)) : u.setMessage(n.PinSaveParser.parseWsEventMessage(e)), u;
          }, r;
        })(S.CometChatEvent);
      },
      function(j, a, g) {
        "use strict";
        var p, i;
        Object.defineProperty(a, "__esModule", { value: !0 }), a.PinSaveEventDispatcher = void 0;
        var S = g(1), E = g(39), n = g(14), o = ((p = {})[n.PIN_SAVE_ACTION.PINNED] = "onMessagePinned", p[n.PIN_SAVE_ACTION.UNPINNED] = "onMessageUnpinned", p[n.PIN_SAVE_ACTION.SAVED] = "onMessageSaved", p[n.PIN_SAVE_ACTION.UNSAVED] = "onMessageUnsaved", p), s = ((i = {})[n.PIN_SAVE_ACTION.CONVERSATION_PINNED] = "onConversationPinned", i[n.PIN_SAVE_ACTION.CONVERSATION_UNPINNED] = "onConversationUnpinned", i);
        a.PinSaveEventDispatcher = (function() {
          function r() {
          }
          return r.notify = function(e, l) {
            try {
              var u = o[e];
              if (!u || !l) return;
              (E.ListenerHandlers.getInstance().messageHandlers || []).map(function(C) {
                try {
                  C._eventListener && typeof C._eventListener[u] == "function" && C._eventListener[u](l);
                } catch (c) {
                  S.Logger.error("PinSaveEventDispatcher: notify:listener", c);
                }
              });
            } catch (C) {
              S.Logger.error("PinSaveEventDispatcher: notify", C);
            }
          }, r.notifyConversation = function(e, l) {
            try {
              var u = s[e];
              if (!u || !l) return;
              (E.ListenerHandlers.getInstance().conversationHandlers || []).map(function(C) {
                try {
                  C._eventListener && typeof C._eventListener[u] == "function" && C._eventListener[u](l);
                } catch (c) {
                  S.Logger.error("PinSaveEventDispatcher: notifyConversation:listener", c);
                }
              });
            } catch (C) {
              S.Logger.error("PinSaveEventDispatcher: notifyConversation", C);
            }
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.getWSURL = a.stringifyMessage = a.checkConnection = void 0;
        var p = g(0), i = g(1), S = g(5);
        a.checkConnection = function(E) {
          return E && E.readyState === S.READY_STATE.OPEN;
        }, a.stringifyMessage = function(E) {
          return JSON.stringify(E);
        }, a.getWSURL = function() {
          return new Promise(function(E, n) {
            i.getAppSettings().then(function(o) {
              E(S.WS.protocol + i.getChatHost(o) + ":" + o[p.APP_SETTINGS.KEYS.CHAT_WSS_PORT]);
            }, function(o) {
              i.Logger.error("WSHelper :: getWSURL", o);
            });
          });
        };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CCExtension = void 0;
        var p = g(1);
        a.CCExtension = (function() {
          function i(S) {
            this.id = "", this.name = "", S && (p.isFalsy(S.id) || (this.id = S.id), p.isFalsy(S.name) || (this.name = S.name));
          }
          return i.prototype.getId = function() {
            return this.id;
          }, i.prototype.getName = function() {
            return this.name;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__assign || function() {
          return (p = Object.assign || function(r) {
            for (var e, l = 1, u = arguments.length; l < u; l++) for (var C in e = arguments[l]) Object.prototype.hasOwnProperty.call(e, C) && (r[C] = e[C]);
            return r;
          }).apply(this, arguments);
        }, i = this && this.__awaiter || function(r, e, l, u) {
          return new (l || (l = Promise))(function(C, c) {
            function d(I) {
              try {
                h(u.next(I));
              } catch (T) {
                c(T);
              }
            }
            function t(I) {
              try {
                h(u.throw(I));
              } catch (T) {
                c(T);
              }
            }
            function h(I) {
              var T;
              I.done ? C(I.value) : (T = I.value, T instanceof l ? T : new l(function(f) {
                f(T);
              })).then(d, t);
            }
            h((u = u.apply(r, e || [])).next());
          });
        }, S = this && this.__generator || function(r, e) {
          var l, u, C, c, d = {
            label: 0,
            sent: function() {
              if (1 & C[0]) throw C[1];
              return C[1];
            },
            trys: [],
            ops: []
          };
          return c = {
            next: t(0),
            throw: t(1),
            return: t(2)
          }, typeof Symbol == "function" && (c[Symbol.iterator] = function() {
            return this;
          }), c;
          function t(h) {
            return function(I) {
              return (function(T) {
                if (l) throw new TypeError("Generator is already executing.");
                for (; d; ) try {
                  if (l = 1, u && (C = 2 & T[0] ? u.return : T[0] ? u.throw || ((C = u.return) && C.call(u), 0) : u.next) && !(C = C.call(u, T[1])).done) return C;
                  switch (u = 0, C && (T = [2 & T[0], C.value]), T[0]) {
                    case 0:
                    case 1:
                      C = T;
                      break;
                    case 4:
                      return d.label++, {
                        value: T[1],
                        done: !1
                      };
                    case 5:
                      d.label++, u = T[1], T = [0];
                      continue;
                    case 7:
                      T = d.ops.pop(), d.trys.pop();
                      continue;
                    default:
                      if (!(C = 0 < (C = d.trys).length && C[C.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                        d = 0;
                        continue;
                      }
                      if (T[0] === 3 && (!C || T[1] > C[0] && T[1] < C[3])) {
                        d.label = T[1];
                        break;
                      }
                      if (T[0] === 6 && d.label < C[1]) {
                        d.label = C[1], C = T;
                        break;
                      }
                      if (C && d.label < C[2]) {
                        d.label = C[2], d.ops.push(T);
                        break;
                      }
                      C[2] && d.ops.pop(), d.trys.pop();
                      continue;
                  }
                  T = e.call(r, d);
                } catch (f) {
                  T = [6, f], u = 0;
                } finally {
                  l = C = 0;
                }
                if (5 & T[0]) throw T[1];
                return {
                  value: T[0] ? T[1] : void 0,
                  done: !0
                };
              })([h, I]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.PostDetails = void 0;
        var E = g(0), n = g(34), o = g(4), s = g(47);
        a.PostDetails = (function() {
          function r() {
            var e = this;
            this.wpPlugin = { version: "" }, this.builder = { version: "" }, this.uiKitSDK = { version: "" }, this.callSDK = { version: "" }, this.deviceId = "", this.platform = "unknown", this.sessionId = "", this.origin = "", this.debugMode = !1, this.integrationSource = E.INTEGRATION_SOURCE.MANUAL, this.getOperatingSystem = function() {
              var l = window.navigator.userAgent;
              return /Windows/.test(l) ? "Windows" : /Mac/.test(l) ? "Mac OS" : /Linux/.test(l) ? "Linux" : /Android/.test(l) ? "Android" : /iOS/.test(l) ? "iOS" : "Unknown";
            }, this.isIP = function(l) {
              return /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/.test(l);
            }, n.KeyStore.getInstance().get(E.LOCAL_STORE.KEY_DEVICE_ID).then(function(l) {
              l && (e.deviceId = l);
            }), this.getSDKVersion(), this.getBuilderVersion(), this.getWPPluginVersion(), this.getPlatform(), this.getOrgin(), setTimeout(function() {
              e.getCallSDKVersion(), e.postDetails();
            }, 5e3);
          }
          return r.prototype.getOrientation = function() {
            return window.matchMedia("(orientation: portrait)").matches ? "Portrait" : window.matchMedia("(orientation: landscape)").matches ? "Landscape" : "Unknown";
          }, r.prototype.getPlatform = function() {
            document.querySelector("#root, #app") && (this.platform = "react"), document.querySelector("app-root") && (this.platform = "angular"), document.querySelector("[__vue__]") && (this.platform = "vue"), "Ember" in window && (this.platform = "ember"), "Backbone" in window && (this.platform = "backbone"), "Meteor" in window && (this.platform = "meteor"), "ko" in window && (this.platform = "ko");
          }, r.prototype.getSDKVersion = function() {
            window.CometChatUiKit && (this.uiKitSDK = window.CometChatUiKit);
          }, r.prototype.getBuilderVersion = function() {
            window.CometChatVisualBuilderReact && (this.builder = window.CometChatVisualBuilderReact);
          }, r.prototype.getWPPluginVersion = function() {
            window.CometChatWP && (this.wpPlugin = window.CometChatWP);
          }, r.prototype.getCallSDKVersion = function() {
            if (typeof window.getCometChatCallSDKInfo == "function") {
              var e = window.getCometChatCallSDKInfo();
              e && (this.callSDK = e);
            }
          }, r.prototype.getUIKitPlatform = function(e) {
            return e ? e.includes("react") ? "react" : e.includes("angular") ? "angular" : e.includes("vue") ? "vue" : void 0 : "";
          }, r.prototype.getVCBPlatform = function(e) {
            return e ? e.includes("react") ? e.includes("no-code") ? "react-no-code" : "react" : void 0 : "";
          }, r.prototype.getBrowser = function() {
            var e = navigator.userAgent;
            return /Chrome/.test(e) && !/Edge/.test(e) ? "Google Chrome" : /Firefox/.test(e) ? "Mozilla Firefox" : /Safari/.test(e) && !/Chrome/.test(e) ? "Safari" : /Edge/.test(e) ? "Microsoft Edge" : /Trident\/7\./.test(e) ? "Internet Explorer" : /Opera\//.test(e) || /OPR\//.test(e) ? "Opera" : "Unknown Browser";
          }, r.prototype.getOrgin = function() {
            this.origin = window.location.hostname, (this.origin.includes("localhost") || this.isIP(this.origin)) && (this.debugMode = !0);
          }, r.prototype.encodeSHA256 = function(e) {
            return i(this, void 0, void 0, function() {
              var l, u, C;
              return S(this, function(c) {
                switch (c.label) {
                  case 0:
                    return l = new TextEncoder().encode(e), [4, crypto.subtle.digest("SHA-256", l)];
                  case 1:
                    return u = c.sent(), C = Array.from(new Uint8Array(u)), [2, C.map(function(d) {
                      return d.toString(16).padStart(2, "0");
                    }).join("")];
                }
              });
            });
          }, r.prototype.getSessionIdHash = function() {
            var e, l, u, C;
            return i(this, void 0, void 0, function() {
              var c;
              return S(this, function(d) {
                switch (d.label) {
                  case 0:
                    return c = "" + E.SDKHeader.sdkVersion + ((e = this.callSDK.version) !== null && e !== void 0 ? e : null) + ((l = this.uiKitSDK.version) !== null && l !== void 0 ? l : null) + ((u = this.builder.version) !== null && u !== void 0 ? u : null) + ((C = this.wpPlugin.version) !== null && C !== void 0 ? C : null) + this.debugMode + (s.CometChat.demoMetaInfo ? s.CometChat.demoMetaInfo.version : null) + this.integrationSource, [4, this.encodeSHA256(c)];
                  case 1:
                    return [2, d.sent()];
                }
              });
            });
          }, r.prototype.getStoredSessionIdHash = function() {
            return i(this, void 0, void 0, function() {
              return S(this, function(e) {
                switch (e.label) {
                  case 0:
                    return [4, n.KeyStore.getInstance().get(E.LOCAL_STORE.KEY_SESSION_ID)];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }, r.prototype.isMobile = function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          }, r.prototype.getTimeZone = function() {
            var e = (/* @__PURE__ */ new Date()).getTimezoneOffset(), l = Math.floor(Math.abs(e) / 60), u = Math.abs(e) % 60;
            return (0 < e ? "-" : "+") + (l = l < 10 ? "0" + l : l) + ":" + (u = u < 10 ? "0" + u : u);
          }, r.prototype.postDetails = function() {
            var e;
            return i(this, void 0, void 0, function() {
              var l, u, C, c = this;
              return S(this, function(d) {
                switch (d.label) {
                  case 0:
                    return [4, n.KeyStore.getInstance().get(E.LOCAL_STORE.KEY_INTEGRATION_SOURCE)];
                  case 1:
                    return (l = d.sent()) && (this.integrationSource = l), [4, this.getSessionIdHash()];
                  case 2:
                    return u = d.sent(), [4, this.getStoredSessionIdHash()];
                  case 3:
                    return d.sent() === u || (C = {
                      sessionId: u,
                      data: p(p({
                        integrationSource: this.integrationSource,
                        cometchat: p(p(p(p(p({}, this.builder.version ? { vcb: {
                          platform: this.getVCBPlatform(this.builder.name),
                          version: this.builder.version
                        } } : {}), this.wpPlugin.version ? { "wordpress-plugin": {
                          platform: "wordpress",
                          version: this.wpPlugin.version
                        } } : {}), this.uiKitSDK.version ? { uikit: {
                          platform: this.getUIKitPlatform(this.uiKitSDK.name),
                          version: this.uiKitSDK.version
                        } } : {}), { chatsdk: {
                          platform: "javascript",
                          version: E.SDKHeader.sdkVersion
                        } }), this.callSDK.version ? { callssdk: {
                          platform: "javascript",
                          version: this.callSDK.version
                        } } : {})
                      }, s.CometChat.demoMetaInfo ? { demo: {
                        name: s.CometChat.demoMetaInfo.name,
                        type: s.CometChat.demoMetaInfo.type,
                        version: s.CometChat.demoMetaInfo.version,
                        platform: s.CometChat.demoMetaInfo.platform
                      } } : {}), {
                        app: {
                          url: this.origin,
                          debug: this.debugMode,
                          browser: this.getBrowser(),
                          isMobileBrowser: this.isMobile()
                        },
                        device: {
                          id: this.deviceId,
                          platform: this.platform,
                          language: navigator.language,
                          resolution: window.screen.width + " × " + window.screen.height,
                          userAgent: navigator.userAgent,
                          timezone: this.getTimeZone(),
                          os: { name: this.getOperatingSystem() }
                        },
                        meta: {
                          network: (e = navigator.connection) === null || e === void 0 ? void 0 : e.effectiveType,
                          deviceOrientation: this.getOrientation()
                        }
                      }),
                      generatedAt: Math.ceil((/* @__PURE__ */ new Date()).valueOf() / 1e3)
                    }, o.makeApiCall("userSessions", {}, C).then(function(t) {
                      return i(c, void 0, void 0, function() {
                        return S(this, function(h) {
                          switch (h.label) {
                            case 0:
                              return t.data.sessionId ? [4, n.KeyStore.getInstance().set(E.LOCAL_STORE.KEY_SESSION_ID, t.data.sessionId)] : [3, 2];
                            case 1:
                              h.sent(), h.label = 2;
                            case 2:
                              return [2];
                          }
                        });
                      });
                    })), [2];
                }
              });
            });
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__assign || function() {
          return (p = Object.assign || function(C) {
            for (var c, d = 1, t = arguments.length; d < t; d++) for (var h in c = arguments[d]) Object.prototype.hasOwnProperty.call(c, h) && (C[h] = c[h]);
            return C;
          }).apply(this, arguments);
        }, i = this && this.__awaiter || function(C, c, d, t) {
          return new (d || (d = Promise))(function(h, I) {
            function T(m) {
              try {
                P(t.next(m));
              } catch (D) {
                I(D);
              }
            }
            function f(m) {
              try {
                P(t.throw(m));
              } catch (D) {
                I(D);
              }
            }
            function P(m) {
              var D;
              m.done ? h(m.value) : (D = m.value, D instanceof d ? D : new d(function(V) {
                V(D);
              })).then(T, f);
            }
            P((t = t.apply(C, c || [])).next());
          });
        }, S = this && this.__generator || function(C, c) {
          var d, t, h, I, T = {
            label: 0,
            sent: function() {
              if (1 & h[0]) throw h[1];
              return h[1];
            },
            trys: [],
            ops: []
          };
          return I = {
            next: f(0),
            throw: f(1),
            return: f(2)
          }, typeof Symbol == "function" && (I[Symbol.iterator] = function() {
            return this;
          }), I;
          function f(P) {
            return function(m) {
              return (function(D) {
                if (d) throw new TypeError("Generator is already executing.");
                for (; T; ) try {
                  if (d = 1, t && (h = 2 & D[0] ? t.return : D[0] ? t.throw || ((h = t.return) && h.call(t), 0) : t.next) && !(h = h.call(t, D[1])).done) return h;
                  switch (t = 0, h && (D = [2 & D[0], h.value]), D[0]) {
                    case 0:
                    case 1:
                      h = D;
                      break;
                    case 4:
                      return T.label++, {
                        value: D[1],
                        done: !1
                      };
                    case 5:
                      T.label++, t = D[1], D = [0];
                      continue;
                    case 7:
                      D = T.ops.pop(), T.trys.pop();
                      continue;
                    default:
                      if (!(h = 0 < (h = T.trys).length && h[h.length - 1]) && (D[0] === 6 || D[0] === 2)) {
                        T = 0;
                        continue;
                      }
                      if (D[0] === 3 && (!h || D[1] > h[0] && D[1] < h[3])) {
                        T.label = D[1];
                        break;
                      }
                      if (D[0] === 6 && T.label < h[1]) {
                        T.label = h[1], h = D;
                        break;
                      }
                      if (h && T.label < h[2]) {
                        T.label = h[2], T.ops.push(D);
                        break;
                      }
                      h[2] && T.ops.pop(), T.trys.pop();
                      continue;
                  }
                  D = c.call(C, T);
                } catch (V) {
                  D = [6, V], t = 0;
                } finally {
                  d = h = 0;
                }
                if (5 & D[0]) throw D[1];
                return {
                  value: D[0] ? D[1] : void 0,
                  done: !0
                };
              })([P, m]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ReactionsRequestBuilder = a.ReactionsRequest = void 0;
        var E = g(2), n = g(4), o = g(1), s = g(0), r = g(13), e = g(41), l = g(3), u = (function() {
          function C(c) {
            this.limit = s.DEFAULT_VALUES.REACTIONS_LIMIT, this.msgId = s.DEFAULT_VALUES.DEFAULT_MSG_ID, this.params = {}, this.inProgress = !1, this.paginationMeta = {}, this.endpointName = "getReactionsList", c.reaction && (this.reaction = c.reaction), c.limit && (this.limit = c.limit), this.msgId = c.msgId;
          }
          return C.prototype.getLimit = function() {
            return this.limit;
          }, C.prototype.getMessageId = function() {
            return this.msgId;
          }, C.prototype.getReaction = function() {
            return this.reaction;
          }, C.prototype.fetchNext = function() {
            var c = this;
            return new Promise(function(d, t) {
              return i(c, void 0, void 0, function() {
                var h, I, T, f, P, m;
                return S(this, function(D) {
                  switch (D.label) {
                    case 0:
                      if (D.trys.push([
                        0,
                        5,
                        ,
                        6
                      ]), this.inProgress) return this.inProgress = !1, t(new E.CometChatException(r.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), [2];
                      if (this.inProgress = !0, this.msgId == 0) return this.inProgress = !1, t(new E.CometChatException(JSON.parse(o.format(JSON.stringify(s.GENERAL_ERROR.METHOD_COMPULSORY), "SET_MESSAGE_ID", "SET_MESSAGE_ID", "Message Id")))), [2];
                      h = p(((P = { limit: this.limit })[s.MessageConstatnts.PAGINATION.KEYS.AFFIX] = s.MessageConstatnts.PAGINATION.AFFIX.APPEND, P), (m = this.nextPage) !== null && m !== void 0 ? m : {}), D.label = 1;
                    case 1:
                      return D.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [4, this.makeAPICall(h)];
                    case 2:
                      return I = D.sent(), d(I), this.inProgress = !1, [3, 4];
                    case 3:
                      return T = D.sent(), this.inProgress = !1, t(new E.CometChatException(T)), [3, 4];
                    case 4:
                      return [3, 6];
                    case 5:
                      return f = D.sent(), this.inProgress = !1, t(new E.CometChatException(f)), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            });
          }, C.prototype.fetchPrevious = function() {
            var c = this;
            return new Promise(function(d, t) {
              return i(c, void 0, void 0, function() {
                var h, I, T, f, P, m;
                return S(this, function(D) {
                  switch (D.label) {
                    case 0:
                      if (D.trys.push([
                        0,
                        5,
                        ,
                        6
                      ]), this.inProgress) return t(new E.CometChatException(r.MESSAGES_REQUEST_ERRORS.REQUEST_IN_PROGRESS_ERROR)), this.inProgress = !1, [2];
                      if (this.inProgress = !0, this.msgId == 0) return this.inProgress = !1, t(new E.CometChatException(JSON.parse(o.format(JSON.stringify(s.GENERAL_ERROR.METHOD_COMPULSORY), "SET_MESSAGE_ID", "SET_MESSAGE_ID", "Message Id")))), [2];
                      h = p(((P = { limit: this.limit })[s.MessageConstatnts.PAGINATION.KEYS.AFFIX] = s.MessageConstatnts.PAGINATION.AFFIX.PREPEND, P), (m = this.previousPage) !== null && m !== void 0 ? m : {}), D.label = 1;
                    case 1:
                      return D.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [4, this.makeAPICall(h)];
                    case 2:
                      return I = D.sent(), d(I), this.inProgress = !1, [3, 4];
                    case 3:
                      return T = D.sent(), this.inProgress = !1, t(new E.CometChatException(T)), [3, 4];
                    case 4:
                      return [3, 6];
                    case 5:
                      return f = D.sent(), this.inProgress = !1, t(new E.CometChatException(f)), [3, 6];
                    case 6:
                      return [2];
                  }
                });
              });
            });
          }, C.prototype.makeAPICall = function(c) {
            var d = this;
            return new Promise(function(t, h) {
              try {
                var I = d.limit;
                if (I === void 0) return void h(new E.CometChatException(JSON.parse(o.format(JSON.stringify(s.GENERAL_ERROR.METHOD_COMPULSORY), "SET_LIMIT", "SET_LIMIT", "Set Limit"))));
                if (isNaN(I)) return void h(new E.CometChatException(JSON.parse(o.format(JSON.stringify(s.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                if (I > s.DEFAULT_VALUES.REACTIONS_MAX_LIMIT) return void h(new E.CometChatException(JSON.parse(o.format(JSON.stringify(s.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", s.DEFAULT_VALUES.REACTIONS_MAX_LIMIT))));
                if (I < s.DEFAULT_VALUES.ZERO) return void h(new E.CometChatException(JSON.parse(o.format(JSON.stringify(s.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()"))));
                d.createEndpoint(), n.makeApiCall(d.endpointName, d.params, c).then(function(T) {
                  return i(d, void 0, void 0, function() {
                    var f;
                    return S(this, function(P) {
                      return this.paginationMeta = T.meta, T.meta && T.meta.next && (this.nextPage = T.meta.next), T.meta && T.meta.previous && (this.previousPage = T.meta.previous), f = [], 0 < T.data.length && T.data.map(function(m) {
                        f.push(new e.Reaction(m.id, m.messageId, m.reaction, m.uid, m.reactedAt, new l.User(m.reactedBy)));
                      }), t(f), [2];
                    });
                  });
                }, function(T) {
                  h(new E.CometChatException(T.error));
                });
              } catch (T) {
                h(new E.CometChatException(T));
              }
            });
          }, C.prototype.createEndpoint = function() {
            o.isFalsy(this.reaction) ? (this.endpointName = "getReactionsList", this.params = { messageId: this.msgId }) : (this.endpointName = "getFilteredReactionsList", this.params = {
              messageId: this.msgId,
              reaction: this.reaction
            });
          }, C;
        })();
        a.ReactionsRequest = u, a.ReactionsRequestBuilder = (function() {
          function C() {
            this.msgId = s.DEFAULT_VALUES.DEFAULT_MSG_ID;
          }
          return C.prototype.setLimit = function(c) {
            return this.limit = c, this;
          }, C.prototype.setMessageId = function(c) {
            return c === void 0 && (c = s.DEFAULT_VALUES.DEFAULT_MSG_ID), this.msgId = c, this;
          }, C.prototype.setReaction = function(c) {
            return this.reaction = c, this;
          }, C.prototype.build = function() {
            return new u(this);
          }, C;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.ConversationUpdateSettings = void 0;
        var p = g(0);
        a.ConversationUpdateSettings = (function() {
          function i() {
            this.callActivities = !0, this.groupActions = !0, this.customMessages = !0, this.messageReplies = !0;
          }
          return i.prototype.shouldUpdateOnCallActivities = function() {
            return this.callActivities;
          }, i.prototype.setCallActivities = function(S) {
            this.callActivities = S;
          }, i.prototype.shouldUpdateOnGroupActions = function() {
            return this.groupActions;
          }, i.prototype.setGroupActions = function(S) {
            this.groupActions = S;
          }, i.prototype.shouldUpdateOnCustomMessages = function() {
            return this.customMessages;
          }, i.prototype.setCustomMessages = function(S) {
            this.customMessages = S;
          }, i.prototype.shouldUpdateOnMessageReplies = function() {
            return this.messageReplies;
          }, i.prototype.setMessageReplies = function(S) {
            this.messageReplies = S;
          }, i.fromJSON = function(S) {
            var E, n = new i(), o = (E = S[p.APP_SETTINGS.KEYS.PARAMETERS]) !== null && E !== void 0 ? E : {};
            return n.setCallActivities(!!o.hasOwnProperty(p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_CALL_ACTIVITIES) && o[p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_CALL_ACTIVITIES]), n.setGroupActions(!!o.hasOwnProperty(p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_GROUP_ACTIONS) && o[p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_GROUP_ACTIONS]), n.setCustomMessages(!!o.hasOwnProperty(p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_CUSTOM_MESSAGES) && o[p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_CUSTOM_MESSAGES]), n.setMessageReplies(!!o.hasOwnProperty(p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_REPLIES) && o[p.APP_SETTINGS.KEYS.CORE_CONVERSATIONS_UPDATE_ON_REPLIES]), n;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.PushNotification = void 0, a.PushNotification = (function() {
          function p(i) {
            i && (this.id = i.id || "", this.announcementId = i.announcementId || i.id || "", this.campaignId = i.campaignId !== void 0 ? i.campaignId : null, this.source = i.source || "campaign");
          }
          return p.prototype.getId = function() {
            return this.id;
          }, p.prototype.setId = function(i) {
            this.id = i;
          }, p.prototype.getAnnouncementId = function() {
            return this.announcementId;
          }, p.prototype.setAnnouncementId = function(i) {
            this.announcementId = i;
          }, p.prototype.getCampaignId = function() {
            return this.campaignId;
          }, p.prototype.setCampaignId = function(i) {
            this.campaignId = i;
          }, p.prototype.getSource = function() {
            return this.source;
          }, p.prototype.setSource = function(i) {
            this.source = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.NotificationFeedRequestBuilder = a.NotificationFeedRequest = void 0;
        var p = g(4), i = g(2), S = g(43), E = g(44), n = g(1), o = g(0), s = (function() {
          function r(e) {
            this.limit = e.getLimit(), this.cursor = null, this.readState = e.getReadState(), this.category = e.getCategoryFilter(), this.channelId = e.getChannelId(), this.tags = e.getTagsFilter(), this.dateFrom = e.getDateFrom(), this.dateTo = e.getDateTo(), this.hasMore = !0, this.inProgress = !1;
          }
          return r.prototype.fetchNext = function() {
            var e = this;
            return new Promise(function(l, u) {
              try {
                if (e.inProgress) return void u(new i.CometChatException({
                  code: "REQUEST_IN_PROGRESS",
                  message: "A request is already in progress.",
                  name: "REQUEST_IN_PROGRESS"
                }));
                if (!e.hasMore) return void l([]);
                e.inProgress = !0;
                var C = {};
                if (C[E.CAMPAIGN_PAGINATION.KEYS.LIMIT] = e.limit, e.cursor) {
                  var c = typeof e.cursor == "string" ? JSON.parse(e.cursor) : e.cursor;
                  Object.keys(c).forEach(function(d) {
                    C[d] = c[d];
                  });
                }
                e.readState && e.readState !== "all" && (C[E.CAMPAIGN_PAGINATION.KEYS.READ_STATE] = e.readState), e.category && (C[E.CAMPAIGN_PAGINATION.KEYS.CATEGORY] = e.category), e.channelId && (C[E.CAMPAIGN_PAGINATION.KEYS.CHANNEL_ID] = e.channelId), e.tags && 0 < e.tags.length && (C[E.CAMPAIGN_PAGINATION.KEYS.TAGS] = e.tags.join(",")), e.dateFrom && (C[E.CAMPAIGN_PAGINATION.KEYS.DATE_FROM] = e.dateFrom), e.dateTo && (C[E.CAMPAIGN_PAGINATION.KEYS.DATE_TO] = e.dateTo), p.makeApiCall(E.CAMPAIGN_ENDPOINTS.NOTIFICATION_FEED_LIST, {}, C).then(function(d) {
                  e.inProgress = !1;
                  var t = [];
                  if (d && d.data && Array.isArray(d.data) && (t = d.data.map(function(I) {
                    return new S.NotificationFeedItem(I);
                  })), t.length < e.limit) e.hasMore = !1, e.cursor = null;
                  else if (d && d.meta && d.meta.next) {
                    var h = d.meta.next;
                    e.cursor = typeof h == "string" ? h : JSON.stringify(h);
                  } else e.hasMore = !1, e.cursor = null;
                  l(t);
                }, function(d) {
                  e.inProgress = !1, u(new i.CometChatException(d.error));
                });
              } catch (d) {
                e.inProgress = !1, u(new i.CometChatException(d));
              }
            });
          }, r;
        })();
        a.NotificationFeedRequest = s, a.NotificationFeedRequestBuilder = (function() {
          function r() {
            this.limit = E.CAMPAIGN_DEFAULTS.NOTIFICATION_FEED_LIMIT, this.readState = "all", this.category = null, this.channelId = null, this.tags = null, this.dateFrom = null, this.dateTo = null;
          }
          return r.prototype.setLimit = function(e) {
            return this.limit = e, this;
          }, r.prototype.setReadState = function(e) {
            return this.readState = e, this;
          }, r.prototype.setCategory = function(e) {
            return this.category = e, this;
          }, r.prototype.setChannelId = function(e) {
            return this.channelId = e, this;
          }, r.prototype.setTags = function(e) {
            return this.tags = e, this;
          }, r.prototype.setDateFrom = function(e) {
            return this.dateFrom = e, this;
          }, r.prototype.setDateTo = function(e) {
            return this.dateTo = e, this;
          }, r.prototype.build = function() {
            if (this.limit !== void 0) {
              if (isNaN(this.limit)) throw new i.CometChatException(JSON.parse(n.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
              if (this.limit > E.CAMPAIGN_DEFAULTS.NOTIFICATION_FEED_MAX_LIMIT) throw new i.CometChatException(JSON.parse(n.format(JSON.stringify(o.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", E.CAMPAIGN_DEFAULTS.NOTIFICATION_FEED_MAX_LIMIT)));
              if (this.limit < 1) throw new i.CometChatException(JSON.parse(n.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            }
            if (this.readState && ![
              "read",
              "unread",
              "all"
            ].includes(this.readState)) throw new i.CometChatException({
              code: "INVALID_READ_STATE",
              message: "readState must be 'read', 'unread', or 'all'.",
              name: "INVALID_READ_STATE"
            });
            return new s(this);
          }, r.prototype.getLimit = function() {
            return this.limit;
          }, r.prototype.getReadState = function() {
            return this.readState;
          }, r.prototype.getCategoryFilter = function() {
            return this.category;
          }, r.prototype.getChannelId = function() {
            return this.channelId;
          }, r.prototype.getTagsFilter = function() {
            return this.tags;
          }, r.prototype.getDateFrom = function() {
            return this.dateFrom;
          }, r.prototype.getDateTo = function() {
            return this.dateTo;
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.NotificationCategoriesRequestBuilder = a.NotificationCategoriesRequest = void 0;
        var p = g(4), i = g(2), S = g(67), E = g(44), n = g(1), o = g(0), s = (function() {
          function r(e) {
            this.limit = e.getLimit(), this.cursor = null, this.hasMore = !0, this.inProgress = !1;
          }
          return r.prototype.fetchNext = function() {
            var e = this;
            return new Promise(function(l, u) {
              try {
                if (e.inProgress) return void u(new i.CometChatException({
                  code: "REQUEST_IN_PROGRESS",
                  message: "A request is already in progress.",
                  name: "REQUEST_IN_PROGRESS"
                }));
                if (!e.hasMore) return void l([]);
                e.inProgress = !0;
                var C = {};
                C[E.CAMPAIGN_PAGINATION.KEYS.LIMIT] = e.limit, e.cursor && (C[E.CAMPAIGN_PAGINATION.KEYS.CURSOR] = e.cursor), p.makeApiCall(E.CAMPAIGN_ENDPOINTS.NOTIFICATION_CATEGORIES_LIST, {}, C).then(function(c) {
                  e.inProgress = !1;
                  var d = [];
                  c && c.data && Array.isArray(c.data) && (d = c.data.map(function(t) {
                    return new S.NotificationCategory(t);
                  })), c && c.meta && c.meta.next ? e.cursor = JSON.stringify(c.meta.next) : (e.hasMore = !1, e.cursor = null), l(d);
                }, function(c) {
                  e.inProgress = !1, u(new i.CometChatException(c.error));
                });
              } catch (c) {
                e.inProgress = !1, u(new i.CometChatException(c));
              }
            });
          }, r;
        })();
        a.NotificationCategoriesRequest = s, a.NotificationCategoriesRequestBuilder = (function() {
          function r() {
            this.limit = E.CAMPAIGN_DEFAULTS.CATEGORIES_LIMIT;
          }
          return r.prototype.setLimit = function(e) {
            return this.limit = e, this;
          }, r.prototype.build = function() {
            if (this.limit !== void 0) {
              if (isNaN(this.limit)) throw new i.CometChatException(JSON.parse(n.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
              if (this.limit > E.CAMPAIGN_DEFAULTS.CATEGORIES_MAX_LIMIT) throw new i.CometChatException(JSON.parse(n.format(JSON.stringify(o.GENERAL_ERROR.LIMIT_EXCEEDED), "SET_LIMIT", "SET_LIMIT", E.CAMPAIGN_DEFAULTS.CATEGORIES_MAX_LIMIT)));
              if (this.limit < 1) throw new i.CometChatException(JSON.parse(n.format(JSON.stringify(o.GENERAL_ERROR.PARAMETER_MUST_BE_A_POSITIVE_NUMBER), "SET_LIMIT", "SET_LIMIT", "setLimit()")));
            }
            return new s(this);
          }, r.prototype.getLimit = function() {
            return this.limit;
          }, r;
        })();
      },
      function(j, a, g) {
        "use strict";
        var p = this && this.__awaiter || function(E, n, o, s) {
          return new (o || (o = Promise))(function(r, e) {
            function l(c) {
              try {
                C(s.next(c));
              } catch (d) {
                e(d);
              }
            }
            function u(c) {
              try {
                C(s.throw(c));
              } catch (d) {
                e(d);
              }
            }
            function C(c) {
              var d;
              c.done ? r(c.value) : (d = c.value, d instanceof o ? d : new o(function(t) {
                t(d);
              })).then(l, u);
            }
            C((s = s.apply(E, n || [])).next());
          });
        }, i = this && this.__generator || function(E, n) {
          var o, s, r, e, l = {
            label: 0,
            sent: function() {
              if (1 & r[0]) throw r[1];
              return r[1];
            },
            trys: [],
            ops: []
          };
          return e = {
            next: u(0),
            throw: u(1),
            return: u(2)
          }, typeof Symbol == "function" && (e[Symbol.iterator] = function() {
            return this;
          }), e;
          function u(C) {
            return function(c) {
              return (function(d) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; l; ) try {
                  if (o = 1, s && (r = 2 & d[0] ? s.return : d[0] ? s.throw || ((r = s.return) && r.call(s), 0) : s.next) && !(r = r.call(s, d[1])).done) return r;
                  switch (s = 0, r && (d = [2 & d[0], r.value]), d[0]) {
                    case 0:
                    case 1:
                      r = d;
                      break;
                    case 4:
                      return l.label++, {
                        value: d[1],
                        done: !1
                      };
                    case 5:
                      l.label++, s = d[1], d = [0];
                      continue;
                    case 7:
                      d = l.ops.pop(), l.trys.pop();
                      continue;
                    default:
                      if (!(r = 0 < (r = l.trys).length && r[r.length - 1]) && (d[0] === 6 || d[0] === 2)) {
                        l = 0;
                        continue;
                      }
                      if (d[0] === 3 && (!r || d[1] > r[0] && d[1] < r[3])) {
                        l.label = d[1];
                        break;
                      }
                      if (d[0] === 6 && l.label < r[1]) {
                        l.label = r[1], r = d;
                        break;
                      }
                      if (r && l.label < r[2]) {
                        l.label = r[2], l.ops.push(d);
                        break;
                      }
                      r[2] && l.ops.pop(), l.trys.pop();
                      continue;
                  }
                  d = n.call(E, l);
                } catch (t) {
                  d = [6, t], s = 0;
                } finally {
                  o = r = 0;
                }
                if (5 & d[0]) throw d[1];
                return {
                  value: d[0] ? d[1] : void 0,
                  done: !0
                };
              })([C, c]);
            };
          }
        };
        Object.defineProperty(a, "__esModule", { value: !0 }), a.PresignClient = void 0;
        var S = g(4);
        a.PresignClient = (function() {
          function E() {
          }
          return E.getUploadUrls = function(n, o) {
            return p(this, void 0, void 0, function() {
              var s, r, e, l;
              return i(this, function(u) {
                switch (u.label) {
                  case 0:
                    return s = { files: {} }, n.forEach(function(C) {
                      s.files[C.fileId] = {
                        fileId: C.fileId,
                        name: C.name,
                        size: C.size,
                        mimeType: C.mimeType
                      };
                    }), o && (o.receiverId !== void 0 && (s.receiver = o.receiverId), o.receiverType !== void 0 && (s.receiverType = o.receiverType), o.parentMessageId !== void 0 && o.parentMessageId !== null && (r = Number(o.parentMessageId), isNaN(r) || (s.parentMessageId = r))), [4, S.makeApiCall("filesUploadUrl", {}, s, !1)];
                  case 1:
                    return e = u.sent(), l = e && e.data ? e.data : {}, [2, E.parseResponse(n, l)];
                }
              });
            });
          }, E.parseResponse = function(n, o) {
            var s = {};
            return n.forEach(function(r) {
              var e = o ? o[r.fileId] : void 0;
              e && e.request && e.attachment ? s[r.fileId] = { form: {
                request: e.request,
                attachment: e.attachment,
                expiresAt: e.expiresAt
              } } : s[r.fileId] = { error: e && e.error ? e.error : e };
            }), s;
          }, E;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.XhrUploader = void 0, a.XhrUploader = (function() {
          function p() {
          }
          return p.upload = function(i, S, E) {
            var n = new XMLHttpRequest(), o = new FormData(), s = i.request.body || {};
            return Object.keys(s).forEach(function(r) {
              o.append(r, s[r]);
            }), o.append("file", S), n.open(i.request.method || "POST", i.request.url, !0), n.upload.onprogress = function(r) {
              E.onProgress(r.loaded, r.total);
            }, n.onload = function() {
              if (200 <= n.status && n.status < 300) E.onLoad();
              else {
                var r = p.parseStorageError(n.responseText) || "Upload failed with status " + n.status, e = p.parseStorageErrorCode(n.responseText) === "ExpiredToken";
                E.onError(r, e);
              }
            }, n.onerror = function() {
              E.onError("Network error or CORS failure");
            }, n.onabort = function() {
              E.onAbort();
            }, n.send(o), { abort: function() {
              return n.abort();
            } };
          }, p.parseStorageError = function(i) {
            if (i) {
              var S = /<Message>([^<]+)<\/Message>/.exec(i);
              return S && S[1] ? S[1] : p.parseStorageErrorCode(i);
            }
          }, p.parseStorageErrorCode = function(i) {
            if (i) {
              var S = /<Code>([^<]+)<\/Code>/.exec(i);
              return S && S[1] ? S[1] : void 0;
            }
          }, p;
        })();
      },
      function(j, a) {
        var g = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
        if (g) {
          var p = /* @__PURE__ */ new Uint8Array(16);
          j.exports = function() {
            return g(p), p;
          };
        } else {
          var i = new Array(16);
          j.exports = function() {
            for (var S, E = 0; E < 16; E++) (3 & E) == 0 && (S = 4294967296 * Math.random()), i[E] = S >>> ((3 & E) << 3) & 255;
            return i;
          };
        }
      },
      function(j, a) {
        for (var g = [], p = 0; p < 256; ++p) g[p] = (p + 256).toString(16).substr(1);
        j.exports = function(i, S) {
          var E = S || 0, n = g;
          return [
            n[i[E++]],
            n[i[E++]],
            n[i[E++]],
            n[i[E++]],
            "-",
            n[i[E++]],
            n[i[E++]],
            "-",
            n[i[E++]],
            n[i[E++]],
            "-",
            n[i[E++]],
            n[i[E++]],
            "-",
            n[i[E++]],
            n[i[E++]],
            n[i[E++]],
            n[i[E++]],
            n[i[E++]],
            n[i[E++]]
          ].join("");
        };
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.CometChatNotifications = void 0;
        var p = g(0), i = g(1), S = g(2), E = g(4), n = g(18), o = g(73), s = g(126), r = g(127), e = g(128), l = g(129), u = g(130), C = g(131), c = g(132);
        a.CometChatNotifications = (function() {
          function d() {
          }
          return d.fetchPushPreferences = function() {
            return new Promise(function(t, h) {
              try {
                i.getAppSettings().then(function(I) {
                  E.makeApiCall(n.APIConstants.KEY_GET_PREFERENCES, null, null, !1, { chatApiVersion: I[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(T) {
                    if (T.data) {
                      var f = void 0, P = void 0, m = void 0, D = void 0;
                      return f = T.data.hasOwnProperty(n.APIConstants.KEY_GROUP_PREFERENCES) ? s.GroupPreferences.fromJSON(T.data) : new s.GroupPreferences(), P = T.data.hasOwnProperty(n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) ? u.OneOnOnePreferences.fromJSON(T.data) : new u.OneOnOnePreferences(), m = T.data.hasOwnProperty(n.APIConstants.KEY_MUTE_PREFERENCES) ? e.MutePreferences.fromJSON(T.data) : new e.MutePreferences(), D = !!T.data.hasOwnProperty(n.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && T.data[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE], t(C.PushPreferences.fromJSON({
                        groupPreferences: f,
                        oneOnOnePreferences: P,
                        mutePreferences: m,
                        usePrivacyTemplate: D
                      }));
                    }
                    return t(new C.PushPreferences());
                  }, function(T) {
                    return h(new S.CometChatException(T.error));
                  });
                }, function(I) {
                  return h(new S.CometChatException(I));
                });
              } catch (I) {
                return h(new S.CometChatException(I));
              }
            });
          }, d.fetchPreferences = function() {
            return new Promise(function(t, h) {
              try {
                i.getAppSettings().then(function(I) {
                  E.makeApiCall(n.APIConstants.KEY_GET_PREFERENCES, null, null, !1, { chatApiVersion: I[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(T) {
                    if (T.data) {
                      var f = void 0, P = void 0, m = void 0, D = void 0;
                      return f = T.data.hasOwnProperty(n.APIConstants.KEY_GROUP_PREFERENCES) ? s.GroupPreferences.fromJSON(T.data) : new s.GroupPreferences(), P = T.data.hasOwnProperty(n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) ? u.OneOnOnePreferences.fromJSON(T.data) : new u.OneOnOnePreferences(), m = T.data.hasOwnProperty(n.APIConstants.KEY_MUTE_PREFERENCES) ? e.MutePreferences.fromJSON(T.data) : new e.MutePreferences(), D = !!T.data.hasOwnProperty(n.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && T.data[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE], t(l.NotificationPreferences.fromJSON({
                        groupPreferences: f,
                        oneOnOnePreferences: P,
                        mutePreferences: m,
                        usePrivacyTemplate: D
                      }));
                    }
                    return t(new l.NotificationPreferences());
                  }, function(T) {
                    return h(new S.CometChatException(T.error));
                  });
                }, function(I) {
                  return h(new S.CometChatException(I));
                });
              } catch (I) {
                return h(new S.CometChatException(I));
              }
            });
          }, d.updatePushPreferences = function(t) {
            return new Promise(function(h, I) {
              try {
                i.getAppSettings().then(function(T) {
                  var f, P = ((f = {})[n.APIConstants.KEY_GROUP_PREFERENCES] = {}, f[n.APIConstants.KEY_MUTE_PREFERENCES] = {}, f[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES] = {}, f), m = t.getGroupPreferences(), D = t.getMutePreferences(), V = t.getOneOnOnePreferences(), M = t.getUsePrivacyTemplate();
                  m && (m.getMessagesPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MESSAGES] = m.getMessagesPreference()), m.getReactionsPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_REACTIONS] = m.getReactionsPreference()), m.getRepliesPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_REPLIES] = m.getRepliesPreference()), m.getQuotedRepliesPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_QUOTED_REPLIES] = m.getQuotedRepliesPreference()), m.getMemberAddedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_ADDED] = m.getMemberAddedPreference()), m.getMemberBannedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_BANNED] = m.getMemberBannedPreference()), m.getMemberJoinedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_JOINED] = m.getMemberJoinedPreference()), m.getMemberKickedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_KICKED] = m.getMemberKickedPreference()), m.getMemberLeftPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_LEFT] = m.getMemberLeftPreference()), m.getMemberScopeChangedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_SCOPE_CHANGED] = m.getMemberScopeChangedPreference()), m.getMemberUnbannedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_UNBANNED] = m.getMemberUnbannedPreference())), D && (D.getDNDPreference() && (P[n.APIConstants.KEY_MUTE_PREFERENCES][n.APIConstants.KEY_MUTE_DND] = D.getDNDPreference()), D.getSchedulePreference() && (P[n.APIConstants.KEY_MUTE_PREFERENCES][n.APIConstants.KEY_MUTE_SCHEDULE] = D.getSchedulePreference())), V && (V.getMessagesPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_MESSAGES] = V.getMessagesPreference()), V.getReactionsPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_REACTIONS] = V.getReactionsPreference()), V.getRepliesPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_REPLIES] = V.getRepliesPreference()), V.getQuotedRepliesPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_QUOTED_REPLIES] = V.getQuotedRepliesPreference())), M != null && (P[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE] = M), Object.keys(P[n.APIConstants.KEY_GROUP_PREFERENCES]).length === 0 && delete P[n.APIConstants.KEY_GROUP_PREFERENCES], Object.keys(P[n.APIConstants.KEY_MUTE_PREFERENCES]).length === 0 && delete P[n.APIConstants.KEY_MUTE_PREFERENCES], Object.keys(P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES]).length === 0 && delete P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES], E.makeApiCall(n.APIConstants.KEY_UPDATE_PREFERENCES, null, P, !1, { chatApiVersion: T[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(z) {
                    if (z.data) {
                      var le = void 0, de = void 0, W = void 0, q = void 0;
                      return le = z.data.hasOwnProperty(n.APIConstants.KEY_GROUP_PREFERENCES) ? s.GroupPreferences.fromJSON(z.data) : new s.GroupPreferences(), de = z.data.hasOwnProperty(n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) ? u.OneOnOnePreferences.fromJSON(z.data) : new u.OneOnOnePreferences(), W = z.data.hasOwnProperty(n.APIConstants.KEY_MUTE_PREFERENCES) ? e.MutePreferences.fromJSON(z.data) : new e.MutePreferences(), q = !!z.data.hasOwnProperty(n.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && z.data[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE], h(C.PushPreferences.fromJSON({
                        groupPreferences: le,
                        oneOnOnePreferences: de,
                        mutePreferences: W,
                        usePrivacyTemplate: q
                      }));
                    }
                    return h(new C.PushPreferences());
                  }, function(z) {
                    return I(new S.CometChatException(z.error));
                  });
                }, function(T) {
                  return I(new S.CometChatException(T));
                });
              } catch (T) {
                return I(new S.CometChatException(T));
              }
            });
          }, d.updatePreferences = function(t) {
            return new Promise(function(h, I) {
              try {
                i.getAppSettings().then(function(T) {
                  var f, P = ((f = {})[n.APIConstants.KEY_GROUP_PREFERENCES] = {}, f[n.APIConstants.KEY_MUTE_PREFERENCES] = {}, f[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES] = {}, f), m = t.getGroupPreferences(), D = t.getMutePreferences(), V = t.getOneOnOnePreferences(), M = t.getUsePrivacyTemplate();
                  m && (m.getMessagesPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MESSAGES] = m.getMessagesPreference()), m.getReactionsPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_REACTIONS] = m.getReactionsPreference()), m.getRepliesPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_REPLIES] = m.getRepliesPreference()), m.getQuotedRepliesPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_QUOTED_REPLIES] = m.getQuotedRepliesPreference()), m.getMemberAddedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_ADDED] = m.getMemberAddedPreference()), m.getMemberBannedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_BANNED] = m.getMemberBannedPreference()), m.getMemberJoinedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_JOINED] = m.getMemberJoinedPreference()), m.getMemberKickedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_KICKED] = m.getMemberKickedPreference()), m.getMemberLeftPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_LEFT] = m.getMemberLeftPreference()), m.getMemberScopeChangedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_SCOPE_CHANGED] = m.getMemberScopeChangedPreference()), m.getMemberUnbannedPreference() && (P[n.APIConstants.KEY_GROUP_PREFERENCES][n.APIConstants.KEY_GROUP_MEMBER_UNBANNED] = m.getMemberUnbannedPreference())), D && (D.getDNDPreference() && (P[n.APIConstants.KEY_MUTE_PREFERENCES][n.APIConstants.KEY_MUTE_DND] = D.getDNDPreference()), D.getSchedulePreference() && (P[n.APIConstants.KEY_MUTE_PREFERENCES][n.APIConstants.KEY_MUTE_SCHEDULE] = D.getSchedulePreference())), V && (V.getMessagesPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_MESSAGES] = V.getMessagesPreference()), V.getReactionsPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_REACTIONS] = V.getReactionsPreference()), V.getRepliesPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_REPLIES] = V.getRepliesPreference()), V.getQuotedRepliesPreference() && (P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][n.APIConstants.KEY_ONE_ON_ONE_QUOTED_REPLIES] = V.getQuotedRepliesPreference())), M != null && (P[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE] = M), Object.keys(P[n.APIConstants.KEY_GROUP_PREFERENCES]).length === 0 && delete P[n.APIConstants.KEY_GROUP_PREFERENCES], Object.keys(P[n.APIConstants.KEY_MUTE_PREFERENCES]).length === 0 && delete P[n.APIConstants.KEY_MUTE_PREFERENCES], Object.keys(P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES]).length === 0 && delete P[n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES], E.makeApiCall(n.APIConstants.KEY_UPDATE_PREFERENCES, null, P, !1, { chatApiVersion: T[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(z) {
                    if (z.data) {
                      var le = void 0, de = void 0, W = void 0, q = void 0;
                      return le = z.data.hasOwnProperty(n.APIConstants.KEY_GROUP_PREFERENCES) ? s.GroupPreferences.fromJSON(z.data) : new s.GroupPreferences(), de = z.data.hasOwnProperty(n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) ? u.OneOnOnePreferences.fromJSON(z.data) : new u.OneOnOnePreferences(), W = z.data.hasOwnProperty(n.APIConstants.KEY_MUTE_PREFERENCES) ? e.MutePreferences.fromJSON(z.data) : new e.MutePreferences(), q = !!z.data.hasOwnProperty(n.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && z.data[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE], h(l.NotificationPreferences.fromJSON({
                        groupPreferences: le,
                        oneOnOnePreferences: de,
                        mutePreferences: W,
                        usePrivacyTemplate: q
                      }));
                    }
                    return h(new l.NotificationPreferences());
                  }, function(z) {
                    return I(new S.CometChatException(z.error));
                  });
                }, function(T) {
                  return I(new S.CometChatException(T));
                });
              } catch (T) {
                return I(new S.CometChatException(T));
              }
            });
          }, d.resetPushPreferences = function() {
            return new Promise(function(t, h) {
              try {
                i.getAppSettings().then(function(I) {
                  E.makeApiCall(n.APIConstants.KEY_RESET_PREFERENCES, null, null, !1, { chatApiVersion: I[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(T) {
                    if (T.data) {
                      var f = void 0, P = void 0, m = void 0, D = void 0;
                      return f = T.data.hasOwnProperty(n.APIConstants.KEY_GROUP_PREFERENCES) ? s.GroupPreferences.fromJSON(T.data) : new s.GroupPreferences(), P = T.data.hasOwnProperty(n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) ? u.OneOnOnePreferences.fromJSON(T.data) : new u.OneOnOnePreferences(), m = T.data.hasOwnProperty(n.APIConstants.KEY_MUTE_PREFERENCES) ? e.MutePreferences.fromJSON(T.data) : new e.MutePreferences(), D = !!T.data.hasOwnProperty(n.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && T.data[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE], t(C.PushPreferences.fromJSON({
                        groupPreferences: f,
                        oneOnOnePreferences: P,
                        mutePreferences: m,
                        usePrivacyTemplate: D
                      }));
                    }
                    return t(new C.PushPreferences());
                  }, function(T) {
                    return h(new S.CometChatException(T.error));
                  });
                }, function(I) {
                  return h(new S.CometChatException(I));
                });
              } catch (I) {
                return h(new S.CometChatException(I));
              }
            });
          }, d.resetPreferences = function() {
            return new Promise(function(t, h) {
              try {
                i.getAppSettings().then(function(I) {
                  E.makeApiCall(n.APIConstants.KEY_RESET_PREFERENCES, null, null, !1, { chatApiVersion: I[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(T) {
                    if (T.data) {
                      var f = void 0, P = void 0, m = void 0, D = void 0;
                      return f = T.data.hasOwnProperty(n.APIConstants.KEY_GROUP_PREFERENCES) ? s.GroupPreferences.fromJSON(T.data) : new s.GroupPreferences(), P = T.data.hasOwnProperty(n.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) ? u.OneOnOnePreferences.fromJSON(T.data) : new u.OneOnOnePreferences(), m = T.data.hasOwnProperty(n.APIConstants.KEY_MUTE_PREFERENCES) ? e.MutePreferences.fromJSON(T.data) : new e.MutePreferences(), D = !!T.data.hasOwnProperty(n.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && T.data[n.APIConstants.KEY_USE_PRIVACY_TEMPLATE], t(l.NotificationPreferences.fromJSON({
                        groupPreferences: f,
                        oneOnOnePreferences: P,
                        mutePreferences: m,
                        usePrivacyTemplate: D
                      }));
                    }
                    return t(new l.NotificationPreferences());
                  }, function(T) {
                    return h(new S.CometChatException(T.error));
                  });
                }, function(I) {
                  return h(new S.CometChatException(I));
                });
              } catch (I) {
                return h(new S.CometChatException(I));
              }
            });
          }, d.getTokensForRequest = function(t, h, I, T) {
            var f = {};
            return f[n.APIConstants.KEY_PROVIDER_ID] = T ?? n.DEFAULT_PROVIDER_ID, f[n.APIConstants.KEY_TIMEZONE] = t, I === n.PushPlatforms.FCM_WEB && (f[n.APIConstants.KEY_FCM_TOKEN] = h), f[n.APIConstants.KEY_PLATFORM] = I, f;
          }, d.registerPushToken = function(t, h, I) {
            return new Promise(function(T, f) {
              try {
                i.getAppSettings().then(function(P) {
                  var m = Intl.DateTimeFormat().resolvedOptions().timeZone, D = d.getTokensForRequest(m, t, h, I);
                  E.makeApiCall(n.APIConstants.KEY_REGISTER_TOKEN, null, D, !1, { chatApiVersion: P[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(V) {
                    return V.data && V.data.success ? T(n.APIResponseConstants.TOKEN_REGISTER_SUCCESS) : T(n.APIResponseConstants.TOKEN_REGISTER_ERROR);
                  }, function(V) {
                    return f(new S.CometChatException(V.error));
                  });
                }, function(P) {
                  return f(new S.CometChatException(P));
                });
              } catch (P) {
                return f(new S.CometChatException(P));
              }
            });
          }, d.unregisterPushToken = function() {
            return new Promise(function(t, h) {
              try {
                i.getAppSettings().then(function(I) {
                  E.makeApiCall(n.APIConstants.KEY_UNREGISTER_TOKEN, null, null, !1, { chatApiVersion: I[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(T) {
                    return T.data && T.data.success ? t(n.APIResponseConstants.TOKEN_UNREGISTER_SUCCESS) : t(n.APIResponseConstants.TOKEN_UNREGISTER_ERROR);
                  }, function(T) {
                    return h(new S.CometChatException(T.error));
                  });
                }, function(I) {
                  return h(new S.CometChatException(I));
                });
              } catch (I) {
                return h(new S.CometChatException(I));
              }
            });
          }, d.muteConversations = function(t) {
            return new Promise(function(h, I) {
              try {
                i.getAppSettings().then(function(T) {
                  var f, P = ((f = {})[n.APIConstants.KEY_CONVERSATIONS] = t, f);
                  E.makeApiCall(n.APIConstants.KEY_MUTE_CONVERSATIONS, null, P, !1, { chatApiVersion: T[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(m) {
                    return m.data && m.data.success ? h(n.APIResponseConstants.MUTE_CONVERSATION_SUCCESS) : h(n.APIResponseConstants.MUTE_CONVERSATION_ERROR);
                  }, function(m) {
                    return I(new S.CometChatException(m.error));
                  });
                }, function(T) {
                  return I(new S.CometChatException(T));
                });
              } catch (T) {
                return I(new S.CometChatException(T));
              }
            });
          }, d.unmuteConversations = function(t) {
            return new Promise(function(h, I) {
              try {
                i.getAppSettings().then(function(T) {
                  var f, P = ((f = {})[n.APIConstants.KEY_CONVERSATIONS] = t, f);
                  E.makeApiCall(n.APIConstants.KEY_UNMUTE_CONVERSATIONS, null, P, !1, { chatApiVersion: T[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(m) {
                    return m.data && m.data.success ? h(n.APIResponseConstants.UNMUTE_CONVERSATION_SUCCESS) : h(n.APIResponseConstants.UNMUTE_CONVERSATION_ERROR);
                  }, function(m) {
                    return I(new S.CometChatException(m.error));
                  });
                }, function(T) {
                  return I(new S.CometChatException(T));
                });
              } catch (T) {
                return I(new S.CometChatException(T));
              }
            });
          }, d.getMutedConversations = function() {
            return new Promise(function(t, h) {
              try {
                i.getAppSettings().then(function(I) {
                  E.makeApiCall(n.APIConstants.KEY_GET_MUTED_CONVERSATIONS, null, null, !1, { chatApiVersion: I[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(T) {
                    var f = [];
                    return T.hasOwnProperty("data") && T.data.hasOwnProperty(n.APIConstants.KEY_MUTED_CONVERSATIONS) && T.data[n.APIConstants.KEY_MUTED_CONVERSATIONS].forEach(function(P) {
                      var m = new r.MutedConversation();
                      m.setId(P.id), m.setType(P.type), m.setUntil(P.until), f.push(m);
                    }), t(f);
                  }, function(T) {
                    return h(new S.CometChatException(T.error));
                  });
                }, function(I) {
                  return h(new S.CometChatException(I));
                });
              } catch (I) {
                return h(new S.CometChatException(I));
              }
            });
          }, d.updateTimezone = function(t) {
            return new Promise(function(h, I) {
              try {
                i.getAppSettings().then(function(T) {
                  E.makeApiCall(n.APIConstants.KEY_UPDATE_TIMEZONE, null, { timezone: t }, !1, { chatApiVersion: T[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(f) {
                    return f.data && f.data.success ? h(n.APIResponseConstants.TIMEZONE_UPDATE_SUCCESS) : h(n.APIResponseConstants.TIMEZONE_UPDATE_ERROR);
                  }, function(f) {
                    return I(new S.CometChatException(f.error));
                  });
                }, function(T) {
                  return I(new S.CometChatException(T));
                });
              } catch (T) {
                return I(new S.CometChatException(T));
              }
            });
          }, d.getTimezone = function() {
            return new Promise(function(t, h) {
              try {
                i.getAppSettings().then(function(I) {
                  E.makeApiCall(n.APIConstants.KEY_GET_TIMEZONE, null, null, !1, { chatApiVersion: I[p.APP_SETTINGS.KEYS.CHAT_API_VERSION] }).then(function(T) {
                    return T.data && T.data.success ? t(T.data) : t(n.APIResponseConstants.TIMEZONE_FETCH_ERROR);
                  }, function(T) {
                    return h(new S.CometChatException(T.error));
                  });
                }, function(I) {
                  return h(new S.CometChatException(I));
                });
              } catch (I) {
                return h(new S.CometChatException(I));
              }
            });
          }, d.MessagesOptions = n.MessagesOptions, d.RepliesOptions = n.RepliesOptions, d.ReactionsOptions = n.ReactionsOptions, d.QuotedRepliesOptions = n.QuotedRepliesOptions, d.MemberActionsOptions = n.MemberActionsOptions, d.DayOfWeek = n.DayOfWeek, d.DNDOptions = n.DNDOptions, d.MutedConversationType = n.MutedConversationType, d.PushPlatforms = n.PushPlatforms, d.DaySchedule = o.DaySchedule, d.PushPreferences = C.PushPreferences, d.GroupPreferences = s.GroupPreferences, d.OneOnOnePreferences = u.OneOnOnePreferences, d.MutePreferences = e.MutePreferences, d.MutedConversation = r.MutedConversation, d.UnmutedConversation = c.UnmutedConversation, d.NotificationPreferences = l.NotificationPreferences, d;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.GroupPreferences = void 0;
        var p = g(18);
        a.GroupPreferences = (function() {
          function i() {
          }
          return i.prototype.getMessagesPreference = function() {
            return this.groupMessages;
          }, i.prototype.getRepliesPreference = function() {
            return this.groupReplies;
          }, i.prototype.getQuotedRepliesPreference = function() {
            return this.groupQuotedReplies;
          }, i.prototype.getReactionsPreference = function() {
            return this.groupReactions;
          }, i.prototype.getMemberLeftPreference = function() {
            return this.groupMemberLeft;
          }, i.prototype.getMemberAddedPreference = function() {
            return this.groupMemberAdded;
          }, i.prototype.getMemberJoinedPreference = function() {
            return this.groupMemberJoined;
          }, i.prototype.getMemberKickedPreference = function() {
            return this.groupMemberKicked;
          }, i.prototype.getMemberBannedPreference = function() {
            return this.groupMemberBanned;
          }, i.prototype.getMemberUnbannedPreference = function() {
            return this.groupMemberUnbanned;
          }, i.prototype.getMemberScopeChangedPreference = function() {
            return this.groupMemberScopeChanged;
          }, i.prototype.setMessagesPreference = function(S) {
            this.groupMessages = S;
          }, i.prototype.setRepliesPreference = function(S) {
            this.groupReplies = S;
          }, i.prototype.setQuotedRepliesPreference = function(S) {
            this.groupQuotedReplies = S;
          }, i.prototype.setReactionsPreference = function(S) {
            this.groupReactions = S;
          }, i.prototype.setMemberLeftPreference = function(S) {
            this.groupMemberLeft = S;
          }, i.prototype.setMemberAddedPreference = function(S) {
            this.groupMemberAdded = S;
          }, i.prototype.setMemberJoinedPreference = function(S) {
            this.groupMemberJoined = S;
          }, i.prototype.setMemberKickedPreference = function(S) {
            this.groupMemberKicked = S;
          }, i.prototype.setMemberBannedPreference = function(S) {
            this.groupMemberBanned = S;
          }, i.prototype.setMemberUnbannedPreference = function(S) {
            this.groupMemberUnbanned = S;
          }, i.prototype.setMemberScopeChangedPreference = function(S) {
            this.groupMemberScopeChanged = S;
          }, i.fromJSON = function(S) {
            var E = new i();
            return E.setMessagesPreference(p.MessagesOptions[p.MessagesOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MESSAGES]]]), E.setRepliesPreference(p.RepliesOptions[p.RepliesOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_REPLIES]]]), E.setQuotedRepliesPreference(p.QuotedRepliesOptions[p.QuotedRepliesOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_QUOTED_REPLIES]]]), E.setReactionsPreference(p.ReactionsOptions[p.ReactionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_REACTIONS]]]), E.setMemberAddedPreference(p.MemberActionsOptions[p.MemberActionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MEMBER_ADDED]]]), E.setMemberJoinedPreference(p.MemberActionsOptions[p.MemberActionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MEMBER_JOINED]]]), E.setMemberBannedPreference(p.MemberActionsOptions[p.MemberActionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MEMBER_BANNED]]]), E.setMemberKickedPreference(p.MemberActionsOptions[p.MemberActionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MEMBER_KICKED]]]), E.setMemberLeftPreference(p.MemberActionsOptions[p.MemberActionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MEMBER_LEFT]]]), E.setMemberScopeChangedPreference(p.MemberActionsOptions[p.MemberActionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MEMBER_SCOPE_CHANGED]]]), E.setMemberUnbannedPreference(p.MemberActionsOptions[p.MemberActionsOptions[S[p.APIConstants.KEY_GROUP_PREFERENCES][p.APIConstants.KEY_GROUP_MEMBER_UNBANNED]]]), E;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MutedConversation = void 0, a.MutedConversation = (function() {
          function p() {
          }
          return p.prototype.getId = function() {
            return this.id;
          }, p.prototype.setId = function(i) {
            this.id = i;
          }, p.prototype.getType = function() {
            return this.type;
          }, p.prototype.setType = function(i) {
            this.type = i;
          }, p.prototype.getUntil = function() {
            return this.until;
          }, p.prototype.setUntil = function(i) {
            this.until = i;
          }, p;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.MutePreferences = void 0;
        var p = g(18), i = g(73);
        a.MutePreferences = (function() {
          function S() {
          }
          return S.prototype.getDNDPreference = function() {
            return this.dnd;
          }, S.prototype.setDNDPreference = function(E) {
            this.dnd = E;
          }, S.prototype.getSchedulePreference = function() {
            return this.schedule;
          }, S.prototype.setSchedulePreference = function(E) {
            this.schedule = E;
          }, S.prototype.getScheduleFor = function(E) {
            return this.schedule.get(E);
          }, S.prototype.setScheduleFor = function(E, n) {
            this.schedule.set(E, n);
          }, S.fromJSON = function(E) {
            var n = new S();
            n.setDNDPreference(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_DND]);
            var o = new i.DaySchedule(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.MONDAY][p.APIConstants.KEY_FROM], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.MONDAY][p.APIConstants.KEY_TO], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.MONDAY][p.APIConstants.KEY_MUTE_DND]), s = new i.DaySchedule(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.TUESDAY][p.APIConstants.KEY_FROM], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.TUESDAY][p.APIConstants.KEY_TO], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.TUESDAY][p.APIConstants.KEY_MUTE_DND]), r = new i.DaySchedule(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.WEDNESDAY][p.APIConstants.KEY_FROM], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.WEDNESDAY][p.APIConstants.KEY_TO], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.WEDNESDAY][p.APIConstants.KEY_MUTE_DND]), e = new i.DaySchedule(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.THURSDAY][p.APIConstants.KEY_FROM], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.THURSDAY][p.APIConstants.KEY_TO], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.THURSDAY][p.APIConstants.KEY_MUTE_DND]), l = new i.DaySchedule(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.FRIDAY][p.APIConstants.KEY_FROM], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.FRIDAY][p.APIConstants.KEY_TO], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.FRIDAY][p.APIConstants.KEY_MUTE_DND]), u = new i.DaySchedule(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.SATURDAY][p.APIConstants.KEY_FROM], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.SATURDAY][p.APIConstants.KEY_TO], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.SATURDAY][p.APIConstants.KEY_MUTE_DND]), C = new i.DaySchedule(E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.SUNDAY][p.APIConstants.KEY_FROM], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.SUNDAY][p.APIConstants.KEY_TO], E[p.APIConstants.KEY_MUTE_PREFERENCES][p.APIConstants.KEY_MUTE_SCHEDULE][p.DayOfWeek.SUNDAY][p.APIConstants.KEY_MUTE_DND]), c = /* @__PURE__ */ new Map([
              [p.DayOfWeek.MONDAY, o],
              [p.DayOfWeek.TUESDAY, s],
              [p.DayOfWeek.WEDNESDAY, r],
              [p.DayOfWeek.THURSDAY, e],
              [p.DayOfWeek.FRIDAY, l],
              [p.DayOfWeek.SATURDAY, u],
              [p.DayOfWeek.SUNDAY, C]
            ]);
            return n.setSchedulePreference(c), n;
          }, S;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.NotificationPreferences = void 0;
        var p = g(18);
        a.NotificationPreferences = (function() {
          function i() {
          }
          return i.prototype.getOneOnOnePreferences = function() {
            return this.oneOnOnePreferences;
          }, i.prototype.setOneOnOnePreferences = function(S) {
            this.oneOnOnePreferences = S;
          }, i.prototype.getMutePreferences = function() {
            return this.mutePreferences;
          }, i.prototype.setMutePreferences = function(S) {
            this.mutePreferences = S;
          }, i.prototype.getGroupPreferences = function() {
            return this.groupPreferences;
          }, i.prototype.setGroupPreferences = function(S) {
            this.groupPreferences = S;
          }, i.prototype.getUsePrivacyTemplate = function() {
            return this.usePrivacyTemplate;
          }, i.prototype.setUsePrivacyTemplate = function(S) {
            this.usePrivacyTemplate = S;
          }, i.fromJSON = function(S) {
            var E = new i();
            return S.hasOwnProperty(p.APIConstants.KEY_MUTE_PREFERENCES) && E.setMutePreferences(S[p.APIConstants.KEY_MUTE_PREFERENCES]), S.hasOwnProperty(p.APIConstants.KEY_GROUP_PREFERENCES) && E.setGroupPreferences(S[p.APIConstants.KEY_GROUP_PREFERENCES]), S.hasOwnProperty(p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) && E.setOneOnOnePreferences(S[p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES]), S.hasOwnProperty(p.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && E.setUsePrivacyTemplate(S[p.APIConstants.KEY_USE_PRIVACY_TEMPLATE]), E;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.OneOnOnePreferences = void 0;
        var p = g(18);
        a.OneOnOnePreferences = (function() {
          function i() {
          }
          return i.prototype.getReactionsPreference = function() {
            return this.oneOnOneMessageReactions;
          }, i.prototype.setReactionsPreference = function(S) {
            this.oneOnOneMessageReactions = S;
          }, i.prototype.getRepliesPreference = function() {
            return this.oneOnOneReplies;
          }, i.prototype.setRepliesPreference = function(S) {
            this.oneOnOneReplies = S;
          }, i.prototype.getQuotedRepliesPreference = function() {
            return this.oneOnOneQuotedReplies;
          }, i.prototype.setQuotedRepliesPreference = function(S) {
            this.oneOnOneQuotedReplies = S;
          }, i.prototype.getMessagesPreference = function() {
            return this.oneOnOneMessages;
          }, i.prototype.setMessagesPreference = function(S) {
            this.oneOnOneMessages = S;
          }, i.fromJSON = function(S) {
            var E = new i();
            return E.setMessagesPreference(p.MessagesOptions[p.MessagesOptions[S[p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][p.APIConstants.KEY_ONE_ON_ONE_MESSAGES]]]), E.setRepliesPreference(p.RepliesOptions[p.RepliesOptions[S[p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][p.APIConstants.KEY_ONE_ON_ONE_REPLIES]]]), E.setQuotedRepliesPreference(p.QuotedRepliesOptions[p.QuotedRepliesOptions[S[p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][p.APIConstants.KEY_ONE_ON_ONE_QUOTED_REPLIES]]]), E.setReactionsPreference(p.ReactionsOptions[p.ReactionsOptions[S[p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES][p.APIConstants.KEY_ONE_ON_ONE_REACTIONS]]]), E;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.PushPreferences = void 0;
        var p = g(18);
        a.PushPreferences = (function() {
          function i() {
          }
          return i.prototype.getOneOnOnePreferences = function() {
            return this.oneOnOnePreferences;
          }, i.prototype.setOneOnOnePreferences = function(S) {
            this.oneOnOnePreferences = S;
          }, i.prototype.getMutePreferences = function() {
            return this.mutePreferences;
          }, i.prototype.setMutePreferences = function(S) {
            this.mutePreferences = S;
          }, i.prototype.getGroupPreferences = function() {
            return this.groupPreferences;
          }, i.prototype.setGroupPreferences = function(S) {
            this.groupPreferences = S;
          }, i.prototype.getUsePrivacyTemplate = function() {
            return this.usePrivacyTemplate;
          }, i.prototype.setUsePrivacyTemplate = function(S) {
            this.usePrivacyTemplate = S;
          }, i.fromJSON = function(S) {
            var E = new i();
            return S.hasOwnProperty(p.APIConstants.KEY_MUTE_PREFERENCES) && E.setMutePreferences(S[p.APIConstants.KEY_MUTE_PREFERENCES]), S.hasOwnProperty(p.APIConstants.KEY_GROUP_PREFERENCES) && E.setGroupPreferences(S[p.APIConstants.KEY_GROUP_PREFERENCES]), S.hasOwnProperty(p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES) && E.setOneOnOnePreferences(S[p.APIConstants.KEY_ONE_ON_ONE_PREFERENCES]), S.hasOwnProperty(p.APIConstants.KEY_USE_PRIVACY_TEMPLATE) && E.setUsePrivacyTemplate(S[p.APIConstants.KEY_USE_PRIVACY_TEMPLATE]), E;
          }, i;
        })();
      },
      function(j, a, g) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 }), a.UnmutedConversation = void 0, a.UnmutedConversation = (function() {
          function p() {
          }
          return p.prototype.getId = function() {
            return this.id;
          }, p.prototype.setId = function(i) {
            this.id = i;
          }, p.prototype.getType = function() {
            return this.type;
          }, p.prototype.setType = function(i) {
            this.type = i;
          }, p;
        })();
      }
    ]);
  });
})), qe = mt();
async function yt(We, xe, j, a) {
  await qe.CometChat.init(We, new qe.CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(xe).autoEstablishSocketConnection(!0).build()), await qe.CometChat.login(j), qe.CometChat.addMessageListener("l", new qe.CometChat.MessageListener({ onTextMessageReceived: (g) => console.log(g.getId()) })), await qe.CometChat.sendMessage(new qe.CometChat.TextMessage(a, "hola", qe.CometChat.RECEIVER_TYPE.GROUP));
}
export {
  yt as run
};
