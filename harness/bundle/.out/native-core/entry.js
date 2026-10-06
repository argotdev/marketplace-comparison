var x = {
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
}, T = "order_card";
function O(t) {
  return `order-${t}`;
}
var A = [
  "Call me at 415-555-0134",
  "Email me at ben@example.com and we'll sort it out",
  "Pay me on Venmo instead, it's cheaper",
  "Let's move this to WhatsApp, +44 7700 900123"
], E = ["Is the 54cm frame still available?", "Order 4155550134 arrived this morning, thanks"], R = [...A.map((t) => ({
  text: t,
  expect: "block"
})), ...E.map((t) => ({
  text: t,
  expect: "pass"
}))], S = globalThis.__API_BASE || "/api";
async function l(t, a) {
  const s = await fetch(`${S}${t}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(a)
  });
  if (!s.ok) throw new Error(`${t} -> ${s.status}: ${await s.text()}`);
  return s.json();
}
async function b(t) {
  const a = await fetch(`${S}${t}`);
  if (!a.ok) throw new Error(`${t} -> ${a.status}: ${await a.text()}`);
  return a.json();
}
var M = {
  token: (t, a) => l(`/vendors/${t}/token`, { userId: a }),
  setup: (t) => l(`/vendors/${t}/setup`, {}),
  addMember: (t, a, s) => l(`/vendors/${t}/add-member`, {
    channelId: a,
    userId: s
  }),
  registerCardMessage: (t, a, s, c, o) => l(`/orders/${t}/card-message`, {
    platform: a,
    channelId: s,
    messageId: c,
    extra: o
  }),
  moderate: (t, a, s) => l("/moderation/check", {
    platform: t,
    text: a,
    senderId: s
  }),
  report: (t, a, s, c) => l("/moderation/report", {
    platform: t,
    reporterId: a,
    targetId: s,
    reason: c
  }),
  translate: (t, a, s = ["en", "es"]) => l("/translate", {
    text: t,
    from: a,
    targets: s
  }),
  translateStatus: () => b("/translate/status"),
  heartbeat: (t, a) => l("/presence/heartbeat", {
    platform: t,
    userId: a
  }),
  offline: (t, a) => l("/presence/offline", {
    platform: t,
    userId: a
  }),
  notifyMessage: (t, a, s, c, o) => l("/notify/message", {
    platform: t,
    channelId: a,
    fromUserId: s,
    toUserIds: c,
    text: o
  }),
  order: (t) => b(`/orders/${t}`),
  orderCard: (t) => b(`/order-card/${t}`),
  setOrderStatus: (t, a) => l(`/orders/${t}/status`, { status: a })
};
function U(t, a, s) {
  return t?.[a] ?? s;
}
function C(t) {
  let a = null, s = "", c = "", o = "";
  const d = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  let h = 0;
  const y = (e) => ({
    id: e.id,
    kind: e.kind,
    senderId: e.senderId,
    text: e.text ? U(e.data.translations, t.lang, e.text) : void 0,
    originalText: e.text,
    card: e.data.card,
    attachmentUrl: e.data.url,
    attachmentName: e.data.name,
    createdAt: e.createdAt,
    moderated: e.moderated,
    raw: e
  });
  function u(e) {
    if (!a || a.readyState !== WebSocket.OPEN) throw new Error("native: socket not open");
    a.send(JSON.stringify(e));
  }
  function p(e, n, r = 1e4) {
    return new Promise((i, m) => {
      const v = setTimeout(() => {
        d.delete(n), m(/* @__PURE__ */ new Error(`native: timeout waiting for ${n}`));
      }, r);
      d.set(n, {
        resolve: (f) => {
          clearTimeout(v), i(f);
        },
        reject: (f) => {
          clearTimeout(v), m(f);
        }
      }), u(e);
    });
  }
  function _(e) {
    const n = JSON.parse(String(e.data));
    switch (n.type) {
      case "authed":
        d.get("authed")?.resolve(n), d.delete("authed");
        break;
      case "channel": {
        const r = n.channel;
        d.get("channel")?.resolve(r), d.delete("channel");
        break;
      }
      case "sent": {
        const r = `sent:${n.clientId}`;
        d.get(r)?.resolve(n.message), d.delete(r);
        break;
      }
      case "history":
        d.get("history")?.resolve(n.messages), d.delete("history");
        break;
      case "reported":
        d.get("reported")?.resolve(!0), d.delete("reported");
        break;
      case "message": {
        const r = y(n.message);
        for (const i of w) i(r);
        break;
      }
      case "message_updated": {
        const r = y(n.message);
        for (const i of I) i(r);
        break;
      }
      case "typing":
        if (n.userId !== t.id) for (const r of $) r({
          userId: n.userId,
          typing: !!n.typing
        });
        break;
      case "read":
        for (const r of k) r({
          userId: n.userId,
          lastReadMessageId: n.lastReadMessageId ?? void 0,
          at: n.at
        });
        break;
      case "error": {
        const r = n.clientId ? `sent:${n.clientId}` : void 0;
        r && d.has(r) ? (d.get(r).reject(new Error(String(n.error))), d.delete(r)) : console.warn("[native]", n.error);
        break;
      }
    }
  }
  return {
    platform: "native",
    user: t,
    async connect(e) {
      s = e.token, c = e.extra?.httpUrl ?? "";
      const n = e.extra?.wsUrl ?? "ws://localhost:4101";
      await new Promise((r, i) => {
        a = new WebSocket(n), a.onmessage = _, a.onerror = () => i(/* @__PURE__ */ new Error(`native: websocket error connecting to ${n}`)), a.onopen = () => r();
      }), await p({
        type: "auth",
        token: s
      }, "authed");
    },
    async openOrderChannel(e) {
      return o = O(e.id), p({
        type: "open_channel",
        channelId: o,
        data: {
          orderId: e.id,
          listingId: e.listingId
        },
        members: [e.buyerId, e.sellerId]
      }, "channel");
    },
    async getChannelInfo() {
      return p({
        type: "channel_info",
        channelId: o
      }, "channel");
    },
    async sendText(e) {
      let n;
      try {
        const m = await M.translate(e, t.lang);
        m.available && (n = m.translations);
      } catch {
      }
      const r = `c${Date.now()}_${++h}`, i = await p({
        type: "send",
        channelId: o,
        kind: "text",
        text: e,
        data: { translations: n },
        clientId: r
      }, `sent:${r}`);
      return {
        messageId: i.id,
        blocked: i.moderated
      };
    },
    async sendOrderCard(e) {
      const n = `c${Date.now()}_${++h}`;
      return { messageId: (await p({
        type: "send",
        channelId: o,
        kind: T,
        data: { card: e },
        clientId: n
      }, `sent:${n}`)).id };
    },
    async updateOrderCard(e, n) {
      u({
        type: "update",
        channelId: o,
        messageId: e,
        data: { card: n }
      });
    },
    async sendAttachment(e) {
      const n = await fetch(`${c}/upload`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${s}`,
          "content-type": e.type || "application/octet-stream",
          "x-file-name": encodeURIComponent(e.name)
        },
        body: e
      });
      if (!n.ok) throw new Error(`upload failed ${n.status}`);
      const { url: r, name: i } = await n.json(), m = `c${Date.now()}_${++h}`;
      return { messageId: (await p({
        type: "send",
        channelId: o,
        kind: "attachment",
        data: {
          url: r,
          name: i
        },
        clientId: m
      }, `sent:${m}`)).id };
    },
    async getMessages(e = 200) {
      return (await p({
        type: "history",
        channelId: o,
        limit: e
      }, "history")).map(y);
    },
    onMessage: (e) => g(w, e),
    onMessageUpdated: (e) => g(I, e),
    onTyping: (e) => g($, e),
    onRead: (e) => g(k, e),
    async markAsRead() {
      u({
        type: "read",
        channelId: o
      });
    },
    async setTyping(e) {
      u({
        type: "typing",
        channelId: o,
        typing: e
      });
    },
    async reportUser(e, n) {
      await p({
        type: "report",
        channelId: o,
        targetId: e,
        reason: n
      }, "reported");
    },
    async addSupportAgent() {
      u({
        type: "add_member",
        channelId: o,
        userId: "agent_sam"
      }), await p({
        type: "channel_info",
        channelId: o
      }, "channel");
    },
    async disconnect() {
      a?.close(), a = null;
    }
  };
}
function g(t, a) {
  return t.add(a), () => t.delete(a);
}
async function P(t, a, s) {
  const c = C(x.buyer_ana);
  await c.connect({
    token: a,
    extra: {
      wsUrl: s,
      httpUrl: ""
    }
  }), await c.openOrderChannel(t), c.onMessage((o) => console.log(o.text)), await c.sendText("hola");
}
export {
  P as run
};
