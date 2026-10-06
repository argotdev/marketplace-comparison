var R = {
  buyer_ana: {
    id: "buyer_ana",
    name: "Ana",
    lang: "es",
    role: "buyer",
    email: "ana@example.test"
  },
  seller_ben: {
    id: "seller_ben",
    name: "Ben",
    lang: "en",
    role: "seller",
    email: "ben@example.test"
  },
  agent_sam: {
    id: "agent_sam",
    name: "Sam (support)",
    lang: "en",
    role: "agent",
    email: "sam@example.test"
  }
}, U = "order_card";
function x(e) {
  return `order-${e}`;
}
var C = [
  "Call me at 415-555-0134",
  "Email me at ben@example.com and we'll sort it out",
  "Pay me on Venmo instead, it's cheaper",
  "Let's move this to WhatsApp, +44 7700 900123"
], E = ["Is the 54cm frame still available?", "Order 4155550134 arrived this morning, thanks"], J = [...C.map((e) => ({
  text: e,
  expect: "block"
})), ...E.map((e) => ({
  text: e,
  expect: "pass"
}))], v = globalThis.__API_BASE || "/api";
async function u(e, s) {
  const r = await fetch(`${v}${e}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(s)
  });
  if (!r.ok) throw new Error(`${e} -> ${r.status}: ${await r.text()}`);
  return r.json();
}
async function w(e) {
  const s = await fetch(`${v}${e}`);
  if (!s.ok) throw new Error(`${e} -> ${s.status}: ${await s.text()}`);
  return s.json();
}
var y = {
  token: (e, s) => u(`/vendors/${e}/token`, { userId: s }),
  setup: (e) => u(`/vendors/${e}/setup`, {}),
  addMember: (e, s, r) => u(`/vendors/${e}/add-member`, {
    channelId: s,
    userId: r
  }),
  registerCardMessage: (e, s, r, c, d) => u(`/orders/${e}/card-message`, {
    platform: s,
    channelId: r,
    messageId: c,
    extra: d
  }),
  moderate: (e, s, r) => u("/moderation/check", {
    platform: e,
    text: s,
    senderId: r
  }),
  report: (e, s, r, c) => u("/moderation/report", {
    platform: e,
    reporterId: s,
    targetId: r,
    reason: c
  }),
  translate: (e, s, r = ["en", "es"]) => u("/translate", {
    text: e,
    from: s,
    targets: r
  }),
  translateStatus: () => w("/translate/status"),
  heartbeat: (e, s) => u("/presence/heartbeat", {
    platform: e,
    userId: s
  }),
  offline: (e, s) => u("/presence/offline", {
    platform: e,
    userId: s
  }),
  notifyMessage: (e, s, r, c, d) => u("/notify/message", {
    platform: e,
    channelId: s,
    fromUserId: r,
    toUserIds: c,
    text: d
  }),
  order: (e) => w(`/orders/${e}`),
  orderCard: (e) => w(`/order-card/${e}`),
  setOrderStatus: (e, s) => u(`/orders/${e}/status`, { status: s })
};
function A(e, s, r) {
  return e?.[s] ?? r;
}
var M = class {
  ws = null;
  seq = 0;
  pending = /* @__PURE__ */ new Map();
  streams = /* @__PURE__ */ new Map();
  subIds = [];
  async connect(e) {
    await new Promise((s, r) => {
      const c = new WebSocket(e);
      this.ws = c, c.onerror = () => r(/* @__PURE__ */ new Error(`rocketchat: websocket error ${e}`)), c.onopen = () => c.send(JSON.stringify({
        msg: "connect",
        version: "1",
        support: ["1"]
      })), c.onmessage = (d) => {
        const i = JSON.parse(String(d.data));
        i.msg === "connected" && s(), this.handle(i);
      };
    });
  }
  handle(e) {
    if (e.msg === "ping") this.ws?.send(JSON.stringify({
      msg: "pong",
      id: e.id
    }));
    else if (e.msg === "result" && e.id) {
      const s = this.pending.get(e.id);
      if (this.pending.delete(e.id), !s) return;
      e.error ? s.reject(new Error(e.error.reason ?? e.error.message ?? "ddp error")) : s.resolve(e.result);
    } else if (e.msg === "changed" && e.collection && e.fields?.eventName) {
      const s = this.streams.get(`${e.collection}/${e.fields.eventName}`);
      s && s(e.fields.args ?? []);
    }
  }
  call(e, s) {
    const r = String(++this.seq);
    return new Promise((c, d) => {
      this.pending.set(r, {
        resolve: (i) => c(i),
        reject: d
      }), this.ws.send(JSON.stringify({
        msg: "method",
        method: e,
        id: r,
        params: s
      }));
    });
  }
  subscribe(e, s, r, c = [!1]) {
    const d = `sub${++this.seq}`;
    return this.streams.set(`${e}/${s}`, r), this.subIds.push(d), this.ws.send(JSON.stringify({
      msg: "sub",
      id: d,
      name: e,
      params: [s, ...c]
    })), () => {
      this.streams.delete(`${e}/${s}`), this.ws?.send(JSON.stringify({
        msg: "unsub",
        id: d
      }));
    };
  }
  close() {
    this.ws?.close(), this.ws = null;
  }
}, P = (e) => typeof e == "string" ? new Date(e).getTime() : e?.$date ?? Date.now();
function N(e) {
  let s = "", r = "", c = "", d = e.id, i = "", g = null;
  const $ = [], h = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set();
  async function l(t, a, n) {
    const o = await fetch(`${s}/api/v1/${a}`, {
      method: t,
      headers: {
        "X-Auth-Token": r,
        "X-User-Id": c,
        ...n instanceof FormData ? {} : { "content-type": "application/json" }
      },
      body: n === void 0 ? void 0 : n instanceof FormData ? n : JSON.stringify(n)
    }), m = await o.json().catch(() => ({}));
    if (!o.ok || m.success === !1) throw new Error(`rocketchat ${t} ${a} -> ${o.status}: ${m.error ?? m.errorType ?? "error"}`);
    return m;
  }
  const T = (t) => {
    const a = {
      id: t._id,
      senderId: t.u?.username ?? "system",
      createdAt: P(t.ts),
      raw: t
    }, n = t.customFields ?? {};
    if (n.type === "order_card" && n.card) return {
      ...a,
      kind: "order_card",
      card: JSON.parse(n.card)
    };
    const o = t.file ?? t.files?.[0];
    if (o && !n.type) return {
      ...a,
      kind: "attachment",
      attachmentUrl: `${s}/file-upload/${o._id}/${encodeURIComponent(o.name)}`,
      attachmentName: o.name
    };
    if (t.t) return {
      ...a,
      kind: "system",
      text: t.msg
    };
    let m;
    if (n.translations) try {
      m = JSON.parse(n.translations);
    } catch {
    }
    return {
      ...a,
      kind: "text",
      text: A(m, e.lang, t.msg),
      originalText: t.msg,
      moderated: /\*{3,}/.test(t.msg)
    };
  };
  async function k(t) {
    try {
      const a = await l("GET", `chat.getMessageReadReceipts?messageId=${encodeURIComponent(t)}`);
      for (const n of a.receipts) if (n.user?.username && n.user.username !== d) for (const o of O) o({
        userId: n.user.username,
        lastReadMessageId: t,
        at: new Date(n.ts).getTime()
      });
    } catch {
    }
  }
  async function _() {
    const t = await l("GET", `groups.info?roomId=${encodeURIComponent(i)}`), a = await l("GET", `groups.members?roomId=${encodeURIComponent(i)}&count=100`);
    return {
      id: t.group.name,
      memberIds: a.members.map((n) => n.username),
      data: {
        orderId: t.group.customFields?.orderId,
        listingId: t.group.customFields?.listingId,
        rid: i
      }
    };
  }
  return {
    platform: "rocketchat",
    user: e,
    async connect(t) {
      r = t.token, c = t.extra?.userId ?? "", s = t.extra?.url ?? "http://localhost:3000", d = t.extra?.username ?? e.id, g = new M(), await g.connect(`${s.replace(/^http/, "ws")}/websocket`), await g.call("login", [{ resume: r }]), await g.call("UserPresence:online", []).catch(() => {
      });
    },
    async openOrderChannel(t) {
      const a = x(t.id);
      try {
        i = (await l("GET", `groups.info?roomName=${encodeURIComponent(a)}`)).group._id;
      } catch {
        try {
          i = (await l("POST", "groups.create", {
            name: a,
            members: [t.buyerId, t.sellerId],
            customFields: {
              orderId: t.id,
              listingId: t.listingId
            }
          })).group._id;
        } catch {
          if (await y.setup("rocketchat").catch(() => {
          }), i = (await fetch(`/api/vendors/rocketchat/order-channel/${t.id}`).then((n) => n.json())).data?.group?._id ?? "", !i) throw new Error("rocketchat: could not create or find the order group");
        }
      }
      return await l("POST", "rooms.saveNotification", {
        roomId: i,
        notifications: { emailNotifications: "all" }
      }).catch(() => {
      }), $.push(g.subscribe("stream-room-messages", i, (n) => {
        const o = n[0];
        if (!o?._id) return;
        const m = T(o);
        if (h.has(o._id) || o.editedAt) {
          h.add(o._id);
          for (const p of S) p(m);
          o.u?.username === d && !o.unread && !o.editedAt && k(o._id);
        } else {
          h.add(o._id);
          for (const p of I) p(m);
        }
      }), g.subscribe("stream-notify-room", `${i}/user-activity`, (n) => {
        const [o, m] = n;
        if (o && o !== d) for (const p of b) p({
          userId: o,
          typing: Array.isArray(m) && m.includes("user-typing")
        });
      })), _();
    },
    getChannelInfo: _,
    async sendText(t) {
      const a = {};
      try {
        const o = await y.translate(t, e.lang);
        o.available && (a.translations = JSON.stringify(o.translations));
      } catch {
      }
      const n = await l("POST", "chat.sendMessage", { message: {
        rid: i,
        msg: t,
        ...Object.keys(a).length ? { customFields: a } : {}
      } });
      return {
        messageId: n.message._id,
        blocked: /\*{3,}/.test(n.message.msg)
      };
    },
    async sendOrderCard(t) {
      const { message: a } = await l("POST", "chat.sendMessage", { message: {
        rid: i,
        msg: `Order ${t.orderId}: ${t.listingTitle}`,
        customFields: {
          type: "order_card",
          card: JSON.stringify(t),
          orderId: t.orderId
        },
        attachments: [{
          title: t.listingTitle,
          text: `$${t.priceUsd} USD · ${t.status}`,
          image_url: new URL(t.imageUrl, window.location.origin).href
        }]
      } });
      return { messageId: a._id };
    },
    async updateOrderCard(t, a) {
      await l("POST", "chat.update", {
        roomId: i,
        msgId: t,
        text: `Order ${a.orderId}: ${a.listingTitle}`,
        customFields: {
          type: U,
          card: JSON.stringify(a),
          orderId: a.orderId
        }
      });
    },
    async sendAttachment(t) {
      const a = new FormData();
      a.append("file", t, t.name);
      const n = await l("POST", `rooms.media/${encodeURIComponent(i)}`, a);
      return { messageId: (await l("POST", `rooms.mediaConfirm/${encodeURIComponent(i)}/${n.file._id}`, {
        msg: "",
        description: t.name
      })).message._id };
    },
    async getMessages(t = 200) {
      return (await l("GET", `groups.history?roomId=${encodeURIComponent(i)}&count=${t}`)).messages.slice().reverse().map(T);
    },
    onMessage: (t) => f(I, t),
    onMessageUpdated: (t) => f(S, t),
    onTyping: (t) => f(b, t),
    onRead: (t) => f(O, t),
    async markAsRead() {
      await l("POST", "subscriptions.read", { rid: i });
    },
    async setTyping(t) {
      await g.call("stream-notify-room", [
        `${i}/user-activity`,
        d,
        t ? ["user-typing"] : [],
        {}
      ]);
    },
    async reportUser(t, a) {
      const n = (await l("GET", `groups.history?roomId=${encodeURIComponent(i)}&count=50`)).messages.find((o) => o.u?.username === t);
      n ? await l("POST", "chat.reportMessage", {
        messageId: n._id,
        description: a
      }) : await l("POST", "moderation.reportUser", {
        userId: (await l("GET", `users.info?username=${encodeURIComponent(t)}`)).user._id,
        description: a
      });
    },
    async addSupportAgent() {
      try {
        await l("POST", "groups.invite", {
          roomId: i,
          username: "agent_sam"
        });
      } catch {
        await y.addMember("rocketchat", i, "agent_sam");
      }
    },
    async disconnect() {
      for (const t of $.splice(0)) t();
      g?.close(), g = null;
    }
  };
}
function f(e, s) {
  return e.add(s), () => e.delete(s);
}
async function F(e, s, r) {
  const c = N(R.buyer_ana);
  await c.connect({
    token: s,
    extra: {
      userId: r,
      url: "http://localhost:3000"
    }
  }), await c.openOrderChannel(e), c.onMessage((d) => console.log(d.text)), await c.sendText("hola");
}
export {
  F as run
};
