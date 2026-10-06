var ss = Object.defineProperty, rs = Object.defineProperties, is = Object.getOwnPropertyDescriptors, At = Object.getOwnPropertySymbols, Sn = Object.prototype.hasOwnProperty, In = Object.prototype.propertyIsEnumerable, Tn = (t) => {
  throw TypeError(t);
}, _e = (t, e, n) => e in t ? ss(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n, I = (t, e) => {
  for (var n in e || (e = {})) Sn.call(e, n) && _e(t, n, e[n]);
  if (At)
    for (var n of At(e)) In.call(e, n) && _e(t, n, e[n]);
  return t;
}, R = (t, e) => rs(t, is(e)), Yt = (t, e) => {
  var n = {};
  for (var s in t) Sn.call(t, s) && e.indexOf(s) < 0 && (n[s] = t[s]);
  if (t != null && At)
    for (var s of At(t)) e.indexOf(s) < 0 && In.call(t, s) && (n[s] = t[s]);
  return n;
}, xn = (t, e, n) => e.has(t) || Tn("Cannot " + n), Pt = (t, e, n) => (xn(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Me = (t, e, n) => e.has(t) ? Tn("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ae = (t, e, n, s) => (xn(t, e, "write to private field"), s ? s.call(t, n) : e.set(t, n), n), h = (t, e, n) => new Promise((s, r) => {
  var i = (o) => {
    try {
      l(n.next(o));
    } catch (d) {
      r(d);
    }
  }, a = (o) => {
    try {
      l(n.throw(o));
    } catch (d) {
      r(d);
    }
  }, l = (o) => o.done ? s(o.value) : Promise.resolve(o.value).then(i, a);
  l((n = n.apply(t, e)).next());
}), Re, Ne, Tt, pt, X = /* @__PURE__ */ Symbol("*"), W = X, st = X, V = X, ht = X, Y = X;
function D(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0; n < t.length; n++) if (e[n] !== X && t[n] !== e[n]) return !1;
  return !0;
}
function En(t) {
  return t <= 0 ? Promise.resolve() : new Promise((e) => setTimeout(e, t));
}
function ie(t, e) {
  return t * (1 - e + 2 * Math.random() * e);
}
var as = () => !0;
function _n(t, e, n) {
  return h(this, arguments, function* (s, r, { initialDelay: i, maxDelay: a, log: l, shouldRetry: o = as }) {
    return r().catch((d) => h(null, null, function* () {
      if (s === 0 || !(yield o(d))) throw d;
      const c = 1e3 * i * 1.2, u = ie(a ? Math.min(1e3 * a, c) : c, 0.05);
      return En(u).then(() => _n(s - 1, r, {
        initialDelay: u / 1e3,
        maxDelay: a,
        log: l,
        shouldRetry: o
      }));
    }));
  });
}
function j() {
  const t = {};
  return t.promise = new Promise(function(e, n) {
    t.resolve = e, t.reject = n;
  }), t;
}
var Nt = class {
  constructor(t, e, n) {
    this.layer = t, this.states = e, this.transitions = n, this._state = e[0];
  }
  get state() {
    return this._state;
  }
  transition(t) {
    const e = this.transitions[t];
    if (!e || !this.canTransition(t)) return;
    const n = this.state;
    this._state = e.to, e.afterTransition({
      from: n,
      to: this.state
    });
  }
  canTransition(t) {
    const e = this.transitions[t];
    return !!e && (e.from === "ANY" || e.from.includes(this.state));
  }
};
function f(t) {
  return {
    ok: !0,
    value: t
  };
}
function O(t) {
  return {
    ok: !1,
    where: "client",
    value: t
  };
}
function q(t) {
  return {
    ok: !1,
    where: "server",
    value: t
  };
}
function vt() {
  const t = {};
  return t.promise = new Promise((e) => {
    t.ok = (n) => h(null, null, function* () {
      return e(f(n));
    }), t.clientErr = (n) => e(O(n)), t.serverErr = (n) => e(q(n)), t.resolve = (n) => e(n);
  }), t;
}
function Oe(t) {
  return t.filter((e) => e.ok).map((e) => e.value);
}
function _(t, e) {
  if (e.ok) return e.value.data;
  throw e.value === "SESSION_DESTROYED" ? new Error(`${t} failed because the session was destroyed`) : e.where === "server" ? new Error(B(t, e.value)) : "unreachable";
}
function B(t, e) {
  let n;
  return n = Array.isArray(e.reasons) ? e.reasons.join() : JSON.stringify(e.reasons), `${t} failed, got status ${e.status} ${e.errorCode}, reasons: ${n}`;
}
var De = null, os = class {
  constructor(t, e) {
    this.realtimeUrl = t, this.handlers = e, this.socket = null, this.stateMachine = new Nt("ReconnectingSocket", [
      "STOPPED",
      "CONNECTING",
      "READY",
      "DISCONNECTED",
      "TERMINATED"
    ], {
      startWs: {
        from: ["STOPPED", "DISCONNECTED"],
        to: "CONNECTING",
        afterTransition: () => {
          const n = new ((function() {
            if (De) return De;
            if (globalThis.WebSocket) return globalThis.WebSocket;
            throw new Error("Missing WebSocket implementation");
          })())(this.realtimeUrl + "&talkjs-time=" + Date.now());
          this.socket = n, n.addEventListener("open", () => {
            this.socket === n && this.stateMachine.transition("onOpen");
          }), n.addEventListener("close", () => {
            this.socket === n && this.stateMachine.transition("onClose");
          }), n.addEventListener("message", (s) => {
            this.socket === n && this.handlers.onMessage(s);
          });
        }
      },
      onOpen: {
        from: ["CONNECTING"],
        to: "READY",
        afterTransition: () => {
          this.handlers.onOpen();
        }
      },
      onClose: {
        from: ["CONNECTING", "READY"],
        to: "DISCONNECTED",
        afterTransition: (n) => h(this, [n], function* ({ from: s }) {
          s === "READY" && this.handlers.onClose(), this.socket = null;
          const r = ie(1e4, 0.5);
          setTimeout(() => {
            this.stateMachine.state === "DISCONNECTED" && this.stateMachine.transition("startWs");
          }, r);
        })
      },
      stopWs: {
        from: [
          "CONNECTING",
          "DISCONNECTED",
          "READY"
        ],
        to: "STOPPED",
        afterTransition: ({ from: n }) => {
          n === "READY" && this.handlers.onClose();
          const s = this.socket;
          this.socket = null, s?.close(1e3);
        }
      },
      destroy: {
        from: "ANY",
        to: "TERMINATED",
        afterTransition: () => {
          const n = this.socket;
          this.socket = null, n?.close(1e3);
        }
      }
    });
  }
  stopWs() {
    this.stateMachine.transition("stopWs");
  }
  startWs() {
    this.stateMachine.transition("startWs");
  }
  send(t) {
    return this.stateMachine.state === "READY" ? (this.socket.send(t), f(void 0)) : O("SOCKET_NOT_READY");
  }
  terminate() {
    const t = this.socket;
    this.stateMachine.canTransition("onClose") && this.stateMachine.transition("onClose"), t && ("terminate" in t ? t.terminate() : t.close(1e3));
  }
  destroy() {
    this.stateMachine.transition("destroy");
  }
}, ls = class {
  constructor(t, e) {
    this.handlers = e, this.socket = new os(t, {
      onOpen: () => this.handlers.onOpen(),
      onClose: () => this.handlers.onClose(),
      onMessage: (n) => this.onWebSocketMessage(n)
    });
  }
  call(t, e) {
    const n = `/${e.path.map((r) => encodeURIComponent(r)).join("/")}`, s = JSON.stringify([
      t,
      e.method,
      n,
      e.data,
      e.headers
    ]);
    return this.socket.send(s);
  }
  stopWs() {
    this.socket.stopWs();
  }
  startWs() {
    this.socket.startWs();
  }
  destroy() {
    this.socket.destroy();
  }
  terminate() {
    this.socket.terminate();
  }
  onWebSocketMessage(t) {
    try {
      const e = JSON.parse(t.data);
      if (e[1] === "PUBLISH") {
        const n = e[0], s = JSON.stringify([n, "ACK"]);
        this.socket.send(s);
        const r = e.slice(2), i = [];
        r.forEach((a) => {
          a.type === "session.expired" ? this.handlers.onAuthExpired() : a.type === "upstream.restarting" ? this.handlers.onUpstreamRestarting() : i.push(a);
        }), i.length > 0 && this.handlers.onPublish(n, i);
      } else {
        const n = e[0], s = e[1], r = e[2];
        this.handlers.onResponse(n, s, r);
      }
    } catch {
    }
  }
}, xt = class {
  constructor(t) {
    this.delayMs = t, this.timeout = void 0;
  }
  schedule(t) {
    this.stop(), this.timeout = setTimeout(() => {
      this.timeout !== void 0 && (this.stop(), t());
    }, this.delayMs);
  }
  stop() {
    this.timeout !== void 0 && (clearTimeout(this.timeout), this.timeout = void 0);
  }
}, cs = typeof window < "u" && (Re = window.queueMicrotask) != null ? Re : setTimeout, us = class {
  constructor() {
    this.i = -1;
  }
  next() {
    return this.i++, this.i;
  }
  reset() {
    this.i = -1;
  }
}, hs = class {
  constructor(t, e) {
    this.handlers = e, this.seqCounter = new us(), this.responseHandlers = {}, this.heartbeats = new ds(this), this.socket = new ls(t, {
      onUpstreamRestarting: () => {
        this.heartbeats.serverActive(), this.handlers.onUpstreamRestarting();
      },
      onOpen: () => {
        this.heartbeats.clientActive(), this.heartbeats.serverActive(), this.handlers.onReady();
      },
      onClose: () => {
        this.heartbeats.stop(), Object.values(this.responseHandlers).forEach((n) => {
          n.clientErr("WEBSOCKET_DISCONNECTED");
        }), this.responseHandlers = {}, this.seqCounter.reset(), this.handlers.onNotReady();
      },
      onResponse: (n, s, r) => {
        this.heartbeats.serverActive(), this.onResponse(n, s, r);
      },
      onPublish: (n, s) => {
        this.heartbeats.serverActive(), this.handlers.onPublish(n, s), this.heartbeats.clientActive();
      },
      onAuthExpired: () => {
        this.heartbeats.serverActive(), this.handlers.onAuthExpired();
      }
    });
  }
  sync() {
    return h(this, null, function* () {
      yield new Promise((e) => cs(() => e()));
      const t = Object.values(this.responseHandlers).map((e) => e.promise.catch(() => {
      }));
      return Promise.all(t);
    });
  }
  call(t) {
    const e = this.seqCounter.next(), n = vt();
    this.responseHandlers[e] = n;
    const s = this.socket.call(e, t);
    return s.ok || (n.resolve(s), delete this.responseHandlers[e]), this.heartbeats.clientActive(), n.promise;
  }
  onResponse(t, e, n) {
    return h(this, null, function* () {
      const s = this.responseHandlers[t];
      s && (e === 200 ? s.ok({
        status: e,
        data: n
      }) : s.serverErr({
        status: e,
        errorCode: n.errorCode,
        reasons: n.reasons
      }), delete this.responseHandlers[t]);
    });
  }
  stopWs() {
    this.socket.stopWs();
  }
  startWs() {
    this.socket.startWs();
  }
  destroy() {
    this.heartbeats.stop(), Object.values(this.responseHandlers).forEach((t) => {
      t.clientErr("WEBSOCKET_DISCONNECTED");
    }), this.responseHandlers = {}, this.socket.destroy();
  }
  terminate() {
    this.socket.terminate();
  }
}, ds = class {
  constructor(t) {
    this.connection = t, this.clientInactivityTimer = new xt(25e3), this.serverInactivityTimer = new xt(1e4), this.serverTimeoutTimer = new xt(5e3);
  }
  clientActive() {
    this.clientInactivityTimer.schedule(() => {
      this.sendHeartbeat();
    });
  }
  serverActive() {
    this.serverTimeoutTimer.stop(), this.serverInactivityTimer.schedule(() => {
      this.sendHeartbeat(), this.serverTimeoutTimer.schedule(() => {
        this.connection.terminate();
      });
    });
  }
  stop() {
    this.clientInactivityTimer.stop(), this.serverInactivityTimer.stop(), this.serverTimeoutTimer.stop();
  }
  sendHeartbeat() {
    this.connection.call({
      method: "GET",
      path: ["ping"],
      data: {},
      headers: {}
    }).catch(() => {
    });
  }
}, fs = class {
  constructor(t, e, n) {
    this.authProvider = e, this.handlers = n, this.stateMachine = new Nt("AuthenticatedConnection", [
      "WAITING_FOR_WS",
      "LOGGING_IN",
      "RENEWING_SESSION",
      "READY",
      "TERMINATED"
    ], {
      logIn: {
        from: ["WAITING_FOR_WS"],
        to: "LOGGING_IN",
        afterTransition: () => h(this, null, function* () {
          yield this.renewSession();
        })
      },
      logInFailed: {
        from: ["LOGGING_IN"],
        to: "LOGGING_IN",
        afterTransition: () => h(this, null, function* () {
          this.authProvider.invalidateAndRefresh(), yield this.renewSession();
        })
      },
      scheduledReauth: {
        from: ["READY"],
        to: "RENEWING_SESSION",
        afterTransition: () => h(this, null, function* () {
          yield this.renewSession();
        })
      },
      scheduledReauthFailed: {
        from: ["RENEWING_SESSION"],
        to: "RENEWING_SESSION",
        afterTransition: () => h(this, null, function* () {
          this.authProvider.invalidateAndRefresh(), yield this.renewSession();
        })
      },
      authenticated: {
        from: ["LOGGING_IN", "RENEWING_SESSION"],
        to: "READY",
        afterTransition: ({ from: s }) => {
          s === "LOGGING_IN" && this.handlers.onReady();
        }
      },
      authExpired: {
        from: ["READY", "RENEWING_SESSION"],
        to: "LOGGING_IN",
        afterTransition: () => h(this, null, function* () {
          this.handlers.onNotReady(), this.authProvider.invalidateAndRefresh(), yield this.renewSession();
        })
      },
      wsDisconnected: {
        from: [
          "READY",
          "LOGGING_IN",
          "RENEWING_SESSION"
        ],
        to: "WAITING_FOR_WS",
        afterTransition: ({ from: s }) => {
          s !== "READY" && s !== "RENEWING_SESSION" || this.handlers.onNotReady(), this.authProvider.clearScheduledRefresh();
        }
      },
      destroy: {
        from: "ANY",
        to: "TERMINATED",
        afterTransition: () => {
          this.authProvider.clearScheduledRefresh(), this.connection.destroy();
        }
      }
    }), this.connection = new hs(t, {
      onUpstreamRestarting: () => this.handlers.onUpstreamRestarting(),
      onReady: () => this.stateMachine.transition("logIn"),
      onNotReady: () => {
        this.stateMachine.transition("wsDisconnected");
      },
      onAuthExpired: () => {
        this.stateMachine.transition("authExpired");
      },
      onPublish: (s, r) => {
        this.handlers.onPublish(s, r);
      }
    }), e.onTokenChanged(() => {
      this.stateMachine.state === "READY" && this.stateMachine.transition("scheduledReauth");
    });
  }
  sync() {
    return h(this, null, function* () {
      return this.connection.sync();
    });
  }
  call(t) {
    const e = this.connection.call(t);
    return e.then((n) => {
      n.ok || n.where !== "server" || n.value.status !== 401 || this.stateMachine.state !== "READY" && this.stateMachine.state !== "RENEWING_SESSION" || this.stateMachine.transition("authExpired");
    }), e;
  }
  stopWs() {
    this.connection.stopWs();
  }
  startWs() {
    this.connection.startWs(), this.authProvider.getToken().catch(() => {
    });
  }
  destroy() {
    this.stateMachine.transition("destroy");
  }
  renewSession() {
    return h(this, null, function* () {
      let t;
      try {
        t = this.authProvider.getCachedToken() || (yield this.authProvider.getToken());
      } catch {
        return;
      }
      const e = yield this.connection.call({
        method: "POST",
        path: ["session", "renew"],
        data: { token: t },
        headers: {}
      });
      if (!e.ok && e.where === "client") return;
      const n = e.value;
      if (n.status, n.status === 200) {
        const r = n.data.expiresInSeconds;
        r !== null && r < 120 ? (console.warn(`[TalkJS] Authenticated with a token that expires in ${r}s. Treating it as already expired and refreshing. Newly generated tokens should last at least 10 minutes.`), this.stateMachine.state === "LOGGING_IN" ? this.stateMachine.transition("logInFailed") : this.stateMachine.state === "RENEWING_SESSION" && this.stateMachine.transition("scheduledReauthFailed")) : (this.authProvider.scheduleRefresh(r), this.authProvider.emitTokenAccepted(t), this.stateMachine.canTransition("authenticated") && this.stateMachine.transition("authenticated"));
        return;
      }
      if (n.status === 401) return void (this.stateMachine.state === "LOGGING_IN" ? this.stateMachine.transition("logInFailed") : this.stateMachine.state === "RENEWING_SESSION" && this.stateMachine.transition("scheduledReauthFailed"));
      if (n.status === 400) return void this.authProvider.emitTokenRefreshFailed(B("Authentication", n));
      if (n.status === 402) return void this.authProvider.emitTokenRefreshFailed(B("Authentication", n));
      const s = 5e3 * Math.random() + 5e3;
      setTimeout(() => {
        this.call({
          method: "POST",
          path: ["session", "renew"],
          data: { token: t },
          headers: {}
        }).catch(() => {
        });
      }, s);
    });
  }
}, ps = class {
  constructor(t, e, n) {
    this.handlers = n, this.stateMachine = new Nt("StopStartConnection", [
      "STOPPED",
      "WAITING_FOR_WS",
      "READY",
      "TERMINATED"
    ], {
      unexpectedDisconnect: {
        from: ["READY"],
        to: "WAITING_FOR_WS",
        afterTransition: () => {
          this.inactivityTimer.stop(), this.handlers.onNotReady();
        }
      },
      stop: {
        from: ["WAITING_FOR_WS", "READY"],
        to: "STOPPED",
        afterTransition: () => {
          this.connection.stopWs(), this.inactivityTimer.stop(), this.handlers.onNotReady();
        }
      },
      start: {
        from: ["STOPPED"],
        to: "WAITING_FOR_WS",
        afterTransition: () => {
          this.connection.startWs();
        }
      },
      ready: {
        from: ["WAITING_FOR_WS"],
        to: "READY",
        afterTransition: () => {
          this.pendingCalls = 0, this.activeSubscriptions = 0, this.inactivityTimer.schedule(() => {
            this.stateMachine.transition("stop");
          }), this.handlers.onReady();
        }
      },
      destroy: {
        from: "ANY",
        to: "TERMINATED",
        afterTransition: () => {
          this.inactivityTimer.stop(), this.connection.destroy();
        }
      }
    }), this.pendingCalls = 0, this.activeSubscriptions = 0, this.inactivityTimer = new xt(3e3), this.connection = new fs(t, e, {
      onUpstreamRestarting: () => {
        this.handlers.onUpstreamRestarting();
      },
      onReady: () => {
        this.stateMachine.transition("ready");
      },
      onNotReady: () => {
        this.stateMachine.state === "READY" && this.stateMachine.transition("unexpectedDisconnect");
      },
      onPublish: (s, r) => {
        this.handlers.onPublish(s, r);
      }
    });
  }
  get inactive() {
    return this.pendingCalls === 0 && this.activeSubscriptions === 0;
  }
  sync() {
    return h(this, null, function* () {
      return this.connection.sync();
    });
  }
  ensureStarted() {
    this.stateMachine.canTransition("start") && this.stateMachine.transition("start");
  }
  call(t) {
    return h(this, null, function* () {
      this.inactivityTimer.stop(), this.pendingCalls++, this.logTrace("Called", t.path, t.data);
      const e = yield this.connection.call(t);
      return this.pendingCalls--, this.logTrace("Received", t.path, t.data), t.method === "SUBSCRIBE" && e.ok ? (this.activeSubscriptions++, this.logTrace("Subscribed", t.path, t.data)) : t.method === "UNSUBSCRIBE" && e.ok && (this.activeSubscriptions--, this.logTrace("Unsubscribed", t.path, t.data)), this.inactive && this.inactivityTimer.schedule(() => {
        this.stateMachine.transition("stop");
      }), e;
    });
  }
  destroy() {
    this.stateMachine.transition("destroy");
  }
  isConnected() {
    return this.stateMachine.state === "READY";
  }
  logTrace(t, e, n) {
  }
}, gs = class {
  constructor(t, e, n) {
    this.handlers = n, this.stateMachine = new Nt("QueuedConnection", [
      "NOT_READY",
      "PROCESSING_QUEUE",
      "READY",
      "TERMINATED"
    ], {
      processQueue: {
        from: ["NOT_READY"],
        to: "PROCESSING_QUEUE",
        afterTransition: () => {
          this.sendQueuedCalls();
        }
      },
      ready: {
        from: ["PROCESSING_QUEUE"],
        to: "READY",
        afterTransition: () => {
          this.handlers.onReady();
        }
      },
      notReady: {
        from: ["PROCESSING_QUEUE", "READY"],
        to: "NOT_READY",
        afterTransition: () => {
          Object.values(this.subscribeQueue).forEach((s) => s.deferred.ok({
            status: 200,
            data: {}
          })), this.subscribeQueue = {}, this.handlers.onSubscriptionsLost();
        }
      },
      destroy: {
        from: "ANY",
        to: "TERMINATED",
        afterTransition: () => {
          for (var s; this.callQueue.length; ) ((s = this.callQueue.shift()) == null ? void 0 : s.deferred)?.clientErr("SESSION_DESTROYED");
          this.connection.destroy();
        }
      }
    }), this.subscribeQueue = {}, this.callQueue = [], this.connection = new ps(t, e, {
      onUpstreamRestarting: () => {
        this.handlers.onUpstreamRestarting();
      },
      onReady: () => {
        this.stateMachine.transition("processQueue");
      },
      onNotReady: () => {
        this.stateMachine.transition("notReady");
      },
      onPublish: (s, r) => {
        this.handlers.onPublish(s, r);
      }
    });
  }
  sync() {
    return h(this, null, function* () {
      return this.connection.sync();
    });
  }
  call(t) {
    return this.stateMachine.state === "READY" ? this.connection.call(t) : (this.stateMachine.state === "NOT_READY" && this.connection.ensureStarted(), t.method === "SUBSCRIBE" || t.method === "UNSUBSCRIBE" ? this._subscribe(t) : this._call(t));
  }
  _subscribe(t) {
    const e = t.path.join("/"), n = this.subscribeQueue[e];
    if (n && n.params.method === t.method) return n.deferred.promise;
    n && n.params.method !== t.method && (n.deferred.ok({
      status: 200,
      data: {}
    }), delete this.subscribeQueue[e]);
    const s = {
      deferred: vt(),
      params: t
    };
    return this.subscribeQueue[e] = s, s.deferred.promise;
  }
  _call(t) {
    const e = {
      deferred: vt(),
      params: t
    };
    return this.callQueue.push(e), e.deferred.promise;
  }
  dequeue() {
    for (const t in this.subscribeQueue) {
      const e = this.subscribeQueue[t];
      return delete this.subscribeQueue[t], e;
    }
    return this.callQueue.shift();
  }
  destroy() {
    this.stateMachine.transition("destroy");
  }
  sendQueuedCalls() {
    return h(this, null, function* () {
      let t = 0;
      for (; this.stateMachine.state === "PROCESSING_QUEUE"; ) {
        t++;
        const e = this.dequeue();
        if (!e) return void this.stateMachine.transition("ready");
        this.connection.call(e.params).then((n) => {
          e.deferred.resolve(n);
        }), t > 50 && (yield new Promise((n) => setTimeout(n, 100)));
      }
    });
  }
  isConnected() {
    return this.stateMachine.state === "READY" || this.stateMachine.state === "PROCESSING_QUEUE";
  }
};
function k(t) {
  return Object.freeze(t);
}
function Pe(t) {
  return k(t.map((e) => (function(n) {
    switch (n.type) {
      case "text":
        return Object.freeze({
          type: "text",
          children: Mn(n.children)
        });
      case "file":
      case "location":
        return Object.freeze(n);
    }
  })(e)));
}
function Mn(t) {
  return k(t.map((e) => (function(n) {
    if (typeof n == "string") return n;
    switch (n.type) {
      case "bold":
      case "italic":
      case "strikethrough":
      case "bulletList":
      case "bulletPoint":
      case "link":
      case "actionLink":
      case "actionButton":
        return Object.freeze(R(I({}, n), { children: Mn(n.children) }));
      case "mention":
      case "autoLink":
      case "codeSpan":
      case "customEmoji":
        return Object.freeze(n);
    }
  })(e)));
}
function A(t, e) {
  return e === void 0 ? t : e;
}
function ms(t, e) {
  return e === void 0 ? t : k(e);
}
function ae(t, e) {
  if (e === void 0) return t;
  if (e === null) return k({});
  const n = I({}, t);
  for (const s in e) {
    const r = e[s];
    r === null ? delete n[s] : n[s] = r;
  }
  return k(n);
}
function M(t, e) {
  if (t === e) return !0;
  if (!t || !e || typeof t != "object" || typeof e != "object" || t.constructor !== e.constructor) return !1;
  if (Array.isArray(t) && Array.isArray(e)) {
    if (t.length !== e.length) return !1;
    for (let n = 0; n < t.length; n++) if (!M(t[n], e[n])) return !1;
  } else {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !1;
    for (const s of n)
      if (!Object.hasOwnProperty.call(e, s) || !M(t[s], e[s])) return !1;
  }
  return !0;
}
var vs = typeof window < "u" && (Ne = window.queueMicrotask) != null ? Ne : setTimeout, oe = class {
  constructor(t, e, n) {
    this.headers = t, this.clearPendingBatch = e, this.sendCalls = n, this.sent = !1, vs(() => this.send());
  }
  send() {
    this.sent || (this.sent = !0, this.clearPendingBatch(), this.sendCalls());
  }
  destroy() {
    this.sent = !0;
  }
}, je = class An extends oe {
  constructor(e, n, s) {
    super(n, s, () => {
      this.sendSubscribe(), this.sendGet();
    }), this.connection = e, this.getCalls = [], this.subscribeCalls = [];
  }
  canPush(e) {
    return An.isCorrectBatchTypeFor(e) && M(this.headers, e.headers);
  }
  static isCorrectBatchTypeFor(e) {
    const n = D(e.path, ["users", V]), s = e.method === "GET" || e.method === "SUBSCRIBE";
    return n && s;
  }
  push(e) {
    const n = e.path[1], s = vt();
    return e.method === "GET" ? this.getCalls.push({
      userId: n,
      deferred: s
    }) : this.subscribeCalls.push({
      userId: n,
      deferred: s
    }), this.getCalls.length !== 1e3 && this.subscribeCalls.length !== 1e3 || this.send(), s.promise;
  }
  sendGet() {
    return h(this, null, function* () {
      if (this.getCalls.length === 0) return;
      const e = [...new Set(this.getCalls.map((s) => s.userId))], n = yield this.connection.call({
        method: "GET",
        path: ["users"],
        data: {
          ids: e,
          includePrivateFields: !1
        },
        headers: this.headers
      });
      if (n.ok) for (const s of this.getCalls) {
        const r = n.value.data[s.userId];
        r ? s.deferred.ok({
          status: 200,
          data: r
        }) : s.deferred.serverErr({
          status: 404,
          errorCode: "NOT_FOUND",
          reasons: ["No user with that ID exists"]
        });
      }
      else this.getCalls.forEach((s) => s.deferred.resolve(n));
    });
  }
  sendSubscribe() {
    if (this.subscribeCalls.length === 0) return;
    const e = [...new Set(this.subscribeCalls.map((n) => n.userId))];
    this.connection.call({
      method: "SUBSCRIBE",
      path: ["users"],
      data: { ids: e },
      headers: this.headers
    }).then((n) => this.subscribeCalls.forEach((s) => s.deferred.resolve(n)));
  }
}, Ue = class Rn extends oe {
  constructor(e, n, s, r) {
    super(s, r, () => this.sendMutate()), this.conversationId = e, this.connection = n, this.calls = [];
  }
  canPush(e) {
    return !(!Rn.isCorrectBatchTypeFor(e) || e.path[1] !== this.conversationId || !M(this.headers, e.headers));
  }
  static isCorrectBatchTypeFor(e) {
    return !!(D(e.path, [
      "conversations",
      W,
      "participants",
      V
    ]) && (e.method === "PUT" || e.method === "POST" || e.method === "PATCH"));
  }
  push(e) {
    const n = e.path[3], s = vt();
    return this.calls.push({
      action: {
        id: n,
        method: e.method,
        params: e.data
      },
      deferred: s
    }), this.calls.length === 100 && this.send(), s.promise;
  }
  sendMutate() {
    return h(this, null, function* () {
      const e = this.calls.map((r) => r.action), n = yield this.connection.call({
        method: "POST",
        path: [
          "conversations",
          this.conversationId,
          "participants"
        ],
        data: { actions: e },
        headers: this.headers
      });
      if (!n.ok) return void this.calls.forEach((r) => r.deferred.resolve(n));
      const s = n.value.data.responses;
      for (let r = 0; r < s.length; r++) {
        const i = this.calls[r].deferred, a = s[r];
        a.status === 200 ? i.ok(R(I({}, a), { data: {} })) : i.serverErr(a);
      }
    });
  }
}, $e = class Nn extends oe {
  constructor(e, n, s, r, i) {
    super(r, i, () => {
      this.sendTranslations();
    }), this.conversationId = e, this.language = n, this.connection = s, this.deferredByMessageId = /* @__PURE__ */ new Map();
  }
  static isCorrectBatchTypeFor(e) {
    const n = e.data;
    return e.method === "GET" && D(e.path, [
      "me",
      "conversations",
      W,
      "translate"
    ]) && Array.isArray(n.ids) && n.ids.length > 0 && n.ids.length <= 100;
  }
  canPush(e) {
    const n = e.data;
    if (!Nn.isCorrectBatchTypeFor(e) || e.path[2] !== this.conversationId || n.lang !== this.language || !M(this.headers, e.headers)) return !1;
    const s = new Set(n.ids.filter((r) => !this.deferredByMessageId.has(r)));
    return this.deferredByMessageId.size + s.size <= 100;
  }
  push(e) {
    const n = e.data.ids, s = n.map((r) => this.getOrCreateDeferredResult(r).promise);
    return this.deferredByMessageId.size === 100 && this.send(), Promise.all(s).then((r) => this.toCallResult(n, r));
  }
  sendTranslations() {
    return h(this, null, function* () {
      var e;
      const n = [...this.deferredByMessageId.keys()], s = yield this.connection.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          this.conversationId,
          "translate"
        ],
        data: {
          ids: n,
          lang: this.language
        },
        headers: this.headers
      });
      if (s.ok) for (const [r, i] of this.deferredByMessageId) i.resolve({
        ok: !0,
        result: (e = s.value.data.data[r]) != null ? e : null
      });
      else this.deferredByMessageId.forEach((r) => r.resolve({
        ok: !1,
        error: s
      }));
    });
  }
  getOrCreateDeferredResult(e) {
    let n = this.deferredByMessageId.get(e);
    return n || (n = j(), this.deferredByMessageId.set(e, n)), n;
  }
  toCallResult(e, n) {
    const s = {};
    for (let r = 0; r < e.length; r++) {
      const i = n[r];
      if (!i.ok) return i.error;
      s[e[r]] = i.result;
    }
    return {
      ok: !0,
      value: {
        status: 200,
        data: { data: s }
      }
    };
  }
}, ys = class {
  constructor(t, e, n) {
    this.pendingBatch = null, this.connection = new gs(t, e, n);
  }
  sync() {
    return h(this, null, function* () {
      return this.connection.sync();
    });
  }
  call(t) {
    return h(this, null, function* () {
      var e;
      if ((e = this.pendingBatch) != null && e.canPush(t)) return this.pendingBatch.push(t);
      this.pendingBatch && this.pendingBatch.send();
      const n = this.createEmptyBatchFor(t);
      return n ? (this.pendingBatch = n, n.push(t)) : this.connection.call(t);
    });
  }
  destroy() {
    var t;
    this.connection.destroy(), (t = this.pendingBatch) == null || t.destroy();
  }
  isConnected() {
    return this.connection.isConnected();
  }
  createEmptyBatchFor(t) {
    var e, n, s;
    if (je.isCorrectBatchTypeFor(t)) return new je(this.connection, (e = t.headers) != null ? e : {}, () => this.pendingBatch = null);
    if (Ue.isCorrectBatchTypeFor(t)) {
      const r = t.path[1];
      return new Ue(r, this.connection, (n = t.headers) != null ? n : {}, () => this.pendingBatch = null);
    }
    if ($e.isCorrectBatchTypeFor(t)) {
      const r = t.path[2], i = t.data.lang;
      return new $e(r, i, this.connection, (s = t.headers) != null ? s : {}, () => this.pendingBatch = null);
    }
    return null;
  }
}, bs = {
  200: "RESOLVE",
  400: "RESOLVE",
  401: "RETRY",
  402: "RESOLVE",
  403: "RESOLVE",
  404: "RESOLVE",
  405: "RESOLVE",
  409: "RESOLVE",
  429: "DELAY",
  500: "DELAY"
}, ws = class {
  constructor(t, e, n) {
    this.throttler = new ks(), this.alive = !0, this.connection = new ys(t, e, n);
  }
  sync() {
    return h(this, null, function* () {
      return this.connection.sync();
    });
  }
  call(t) {
    return h(this, null, function* () {
      let e = 0;
      for (; this.alive; ) {
        const n = yield this.connection.call(t);
        if ((n.ok || n.where !== "client" || n.value !== "SOCKET_NOT_READY") && (n.ok || n.where !== "server" || n.value.status !== 500) || e++, e === 10) return n;
        if (n.ok || n.where !== "client") {
          const s = n.value, r = s.status, i = bs[r];
          if (i === "RESOLVE") return this.throttler.resetDelay(), n;
          if (i === "RETRY") continue;
          if (i === "DELAY") {
            yield this.throttler.wait();
            continue;
          }
          return console.warn("[TalkJS] Unexpected status code", r), s;
        }
        if (n.value === "SESSION_DESTROYED") return O("SESSION_DESTROYED");
        n.value !== "WEBSOCKET_DISCONNECTED" && (n.value !== "SOCKET_NOT_READY" ? n.value : yield this.throttler.wait());
      }
      return O("SESSION_DESTROYED");
    });
  }
  destroy() {
    this.alive = !1, this.connection.destroy();
  }
  isConnected() {
    return this.connection.isConnected();
  }
}, ks = class {
  constructor() {
    this.initialDelayMs = 200, this.exponentialFactor = 1.2, this.maxDelayMs = 3e4, this.currentDelayMs = this.initialDelayMs, this.lastCall = 0;
  }
  getCurrentDelay() {
    return this.currentDelayMs;
  }
  wait() {
    const t = (/* @__PURE__ */ new Date()).getTime(), e = ie(this.currentDelayMs, 0.05), n = this.lastCall + e, s = Math.max(0, n - t);
    return this.lastCall = t + s, this.currentDelayMs = Math.min(e * this.exponentialFactor, this.maxDelayMs), En(s);
  }
  resetDelay() {
    this.currentDelayMs = this.initialDelayMs;
  }
};
function jt(t) {
  return t.map((e) => encodeURIComponent(e)).join();
}
var Cs = class {
  constructor() {
    this.paths = {};
  }
  add(t) {
    this.paths[jt(t)] = t;
  }
  delete(t) {
    delete this.paths[jt(t)];
  }
  has(t) {
    return Object.hasOwnProperty.call(this.paths, jt(t));
  }
  clear() {
    this.paths = {};
  }
  forEach(t) {
    Object.values(this.paths).forEach((e) => t(e));
  }
}, Ss = class {
  constructor(t, e, n) {
    this.handlers = n, this.targetSubscriptions = new Cs(), this.connection = new ws(t, e, {
      onUpstreamRestarting: () => this.handlers.onUpstreamRestarting(),
      onSubscriptionsLost: () => {
        this.targetSubscriptions.forEach((s) => {
          this.resubscribe(s);
        }), this.handlers.onResubscribeSent();
      },
      onReady: () => this.handlers.onReady(),
      onPublish: (s, r) => {
        this.handlers.onPublish(s, r);
      }
    });
  }
  sync() {
    return h(this, null, function* () {
      return this.connection.sync();
    });
  }
  call(t) {
    return this.connection.call(t);
  }
  subscribe(t) {
    return h(this, null, function* () {
      return this.targetSubscriptions.add(t), this.connection.call({
        method: "SUBSCRIBE",
        path: t,
        data: {},
        headers: {}
      });
    });
  }
  unsubscribe(t) {
    return h(this, null, function* () {
      return this.targetSubscriptions.delete(t), this.connection.call({
        method: "UNSUBSCRIBE",
        path: t,
        data: {},
        headers: {}
      });
    });
  }
  resubscribe(t) {
    return h(this, null, function* () {
      const e = yield this.connection.call({
        method: "SUBSCRIBE",
        path: t,
        data: {},
        headers: {}
      });
      e.ok || this.handlers.onResubscribeError(t, e);
    });
  }
  destroy() {
    this.targetSubscriptions.clear(), this.connection.destroy();
  }
  isConnected() {
    return this.connection.isConnected();
  }
}, Is = class {
  constructor(t, e, n) {
    this.handlers = n, this.virtualPathsPerRealSubscription = /* @__PURE__ */ new Map(), this.connection = new Ss(t, e, {
      onUpstreamRestarting: () => this.handlers.onUpstreamRestarting(),
      onResubscribeSent: () => this.handlers.onResubscribeSent(),
      onResubscribeError: (s, r) => this.handlers.onResubscribeError(s, r),
      onReady: () => this.handlers.onReady(),
      onPublish: (s, r) => this.handlers.onPublish(s, r)
    });
  }
  toRealPath(t) {
    return D(t, [
      "<filtered>",
      "me",
      "conversations",
      Y
    ]) ? ["me", "conversations"] : t;
  }
  sync() {
    return h(this, null, function* () {
      return this.connection.sync();
    });
  }
  call(t) {
    return this.connection.call(t);
  }
  subscribe(t) {
    return h(this, null, function* () {
      const e = t.join("/"), n = this.toRealPath(t), s = n.join("/"), r = this.virtualPathsPerRealSubscription.get(s);
      return r ? (r.add(e), {
        ok: !0,
        value: {
          status: 200,
          data: {}
        }
      }) : (this.virtualPathsPerRealSubscription.set(s, /* @__PURE__ */ new Set([e])), this.connection.subscribe(n));
    });
  }
  unsubscribe(t) {
    return h(this, null, function* () {
      const e = t.join("/"), n = this.toRealPath(t), s = n.join("/"), r = this.virtualPathsPerRealSubscription.get(s);
      return r ? (r.delete(e), r.size === 0 ? (this.virtualPathsPerRealSubscription.delete(s), this.connection.unsubscribe(n)) : {
        ok: !0,
        value: {
          status: 200,
          data: {}
        }
      }) : {
        ok: !0,
        value: {
          status: 200,
          data: {}
        }
      };
    });
  }
  destroy() {
    this.virtualPathsPerRealSubscription.clear(), this.connection.destroy();
  }
  isConnected() {
    return this.connection.isConnected();
  }
}, On = class {
  constructor() {
    this.prev = Promise.resolve();
  }
  runExclusive(t) {
    return h(this, null, function* () {
      const e = this.prev.then(() => t());
      return this.prev = e, e;
    });
  }
  sync() {
    return h(this, null, function* () {
      return this.runExclusive(() => {
      });
    });
  }
}, Ts = class {
  constructor(t) {
    this.initialised = !1, this.getPointer = void 0, this.pendingStates = [t], t.resultPromise.then(() => this.initialised = !0);
  }
  get pendingPointer() {
    if (this.pendingStates.length !== 0) return this.pendingStates[this.pendingStates.length - 1];
  }
  get mostRecentState() {
    var t;
    return (t = this.pendingPointer) != null ? t : this.getPointer;
  }
  canAppendState(t) {
    var e, n;
    const s = (e = this.getPointer) == null ? void 0 : e.seq;
    if (s !== void 0 && t <= s) return !1;
    const r = (n = this.pendingPointer) == null ? void 0 : n.seq;
    return !(r !== void 0 && t < r);
  }
  set(t) {
    if (!this.canAppendState(t.seq)) throw "Appending in the past";
    this.pendingStates.push(t);
  }
  mutate(t, e) {
    if (!this.initialised) return;
    if (!this.canAppendState(t)) throw "Mutating in the past";
    const n = this.mostRecentState.resultPromise.then((s) => s.ok ? e(s) : s);
    this.pendingStates.push({
      seq: t,
      resultPromise: n
    });
  }
  get(t) {
    for (; this.pendingStates.length > 0 && (this.getPointer === void 0 || this.pendingStates[0].seq <= t); ) this.getPointer = this.pendingStates.shift();
    return this.getPointer;
  }
}, xs = class extends Ts {
  constructor(t, e) {
    super(t), this.onTeardown = e, this._error = null, this._lastGoodState = Promise.resolve(void 0), this.registerNewState(t.resultPromise);
  }
  get error() {
    return this._error;
  }
  get lastGoodState() {
    return this._lastGoodState;
  }
  mutate(t, e) {
    super.mutate(t, e), this.registerNewState(this.mostRecentState.resultPromise);
  }
  set(t) {
    super.set(t), this.registerNewState(this.mostRecentState.resultPromise);
  }
  registerNewState(t) {
    const e = this.lastGoodState;
    this._lastGoodState = t.then((n) => n.ok ? n.value : e), t.then((n) => {
      n.ok || this.setError(n);
    });
  }
  setError(t) {
    var e;
    this._error || (this._error = t, (e = this.onTeardown) == null || e.call(this, t), this.lastGoodState.then((n) => {
      n !== void 0 && this.teardownNested(n);
    }));
  }
}, le = class extends xs {
  constructor(t, e) {
    const n = new Promise((s) => setTimeout(s)).then(() => this.fetchInitial(t));
    super({
      seq: t,
      resultPromise: n
    }, e.onTeardown), this.initialSeq = t, this.getDeepMutex = new On(), this.lastDeep = void 0;
  }
  refetchInitial(t) {
    return h(this, null, function* () {
      const e = this.mostRecentState.resultPromise, n = this.fetchInitial(t), [s, r] = yield Promise.all([e, n]);
      return s === void 0 || !s.ok || !r.ok ? r : this.equal(s.value, r.value) ? s : r;
    });
  }
  refetch(t) {
    if (this.error !== null) return;
    const e = {
      seq: t,
      resultPromise: this.refetchInitial(t)
    };
    this.set(e);
  }
  changedBetween(t, e) {
    return h(this, null, function* () {
      if (t >= e) return !1;
      const n = yield this.get(e).resultPromise;
      return n.ok ? n.value.lastChanged > Math.max(this.initialSeq, t) && n.value.lastChanged <= e ? !0 : yield this.anyChildChanged(t, e, n.value) : !1;
    });
  }
  getDeep(t) {
    return h(this, null, function* () {
      return this.getDeepMutex.runExclusive(() => h(this, null, function* () {
        var e;
        if (this.error !== null) return this.error;
        const n = (e = this.lastDeep) == null ? void 0 : e.seq;
        if (t === n) return this.lastDeep.deep;
        if (n !== void 0) {
          if (t < n) throw `Trying to load seq ${t} when we have previously loaded seq ${n}`;
          if (!(yield this.changedBetween(n, t))) return this.lastDeep.seq = t, this.lastDeep.deep;
        }
        const s = this.get(t).resultPromise, r = s.then((a) => a.ok ? this.loadNested(t, a.value) : a);
        this.lastDeep = {
          seq: t,
          shallow: s,
          deep: r
        };
        const i = yield r;
        return this.error !== null ? this.error : (i.ok || this.setError(i), i);
      }));
    });
  }
}, L = class extends le {
  constructor(t, e, n) {
    super(t, n), this.emitMutex = e, this.externallyIdleTimer = new We(), this.externallyIdle = !0, this.internallyIdleTimer = new We(), this.internallyIdle = !0, this.referencedByOtherStores = 0, this.listeners = [], this.lastEmitSeq = void 0, this.lastEmitResult = void 0, e.runExclusive(() => h(this, null, function* () {
      yield this.emit(t);
    }));
  }
  registerInternalSubscription() {
    this.internallyIdleTimer.stop(), this.internallyIdle = !1, this.referencedByOtherStores++;
    let t = !0;
    return () => {
      t && (t = !1, this.referencedByOtherStores--, this.referencedByOtherStores === 0 && this.internallyIdleTimer.restart(() => {
        this.internallyIdle = !0, this.tryFullyUnsubscribe();
      }, this.unsubscribeDebounceMs), this.tryFullyUnsubscribe());
    };
  }
  get onlyUsedInternally() {
    return this.listeners.length === 0;
  }
  listen(t) {
    this.externallyIdleTimer.stop(), this.externallyIdle = !1, this.listeners.push(t), this.lastEmitResult !== void 0 && t(this.lastEmitResult);
    let e = !0;
    return () => {
      e && (e = !1, this.listeners = this.listeners.filter((n) => n !== t), this.listeners.length === 0 && this.externallyIdleTimer.restart(() => {
        this.externallyIdle = !0, this.tryFullyUnsubscribe();
      }, this.unsubscribeDebounceMs));
    };
  }
  tryFullyUnsubscribe() {
    this.externallyIdle && this.internallyIdle && this.setError(O("UNSUBSCRIBED"));
  }
  emit(t) {
    return h(this, null, function* () {
      var e;
      if (this.lastEmitSeq && this.lastEmitSeq >= t || ((e = this.lastEmitResult) == null ? void 0 : e.ok) === !1) return;
      this.lastEmitSeq = t;
      const n = yield this.getDeep(t);
      n !== this.lastEmitResult && (this.lastEmitResult = n, this.listeners.forEach((s) => s(n)));
    });
  }
}, We = class {
  constructor() {
    this.timerId = void 0;
  }
  restart(t, e) {
    this.timerId !== void 0 && clearTimeout(this.timerId), this.timerId = setTimeout(() => t(), e);
  }
  stop() {
    clearTimeout(this.timerId);
  }
}, qe, Ct = {};
(function() {
  if (qe) return Ct;
  function t(n) {
    return String.fromCharCode(parseInt(n.slice(1), 16));
  }
  function e(n) {
    return `%${`00${n.charCodeAt(0).toString(16)}`.slice(-2)}`;
  }
  qe = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.encode = function(n) {
    return btoa(encodeURIComponent(n).replace(/%[0-9A-F]{2}/g, t));
  }, Ct.decode = function(n) {
    return decodeURIComponent(Array.from(atob(n), e).join(""));
  };
})();
function Dn(t, e) {
  const n = e.lastIndex;
  let s;
  const r = [];
  for (; (s = e.exec(t)) !== null; ) r.push(s), s[0] === "" && (e.lastIndex += 1);
  return e.lastIndex = n, r;
}
function St(t) {
  const e = t.replace(/%2F/g, "/").replace(/^.*?\/([^/]+?)(?:\?.*)?$/, "$1"), n = decodeURIComponent(e);
  if (/%[0-9A-Fa-f]{2}/.test(n)) try {
    return decodeURIComponent(n.replace(/\+/g, "%20"));
  } catch {
    return n;
  }
  return n;
}
function Vt(t, e) {
  !t() && !e && (e = t.toString().replace(/^function\s*\(\)\s*\{\s*return\s*(.*);\s*\}\s*$/, "`$1`") + " was not true");
}
((t) => {
  function e(s) {
  }
  function n(s, r) {
    (function(i, a) {
      switch (a) {
        case "undefined":
          return i === void 0;
        case String:
          return typeof i == "string" || i instanceof String;
        case Boolean:
          return typeof i == "boolean" || i instanceof Boolean;
        case Number:
          return typeof i == "number" || i instanceof Number;
        default:
          return i instanceof a;
      }
    })(s, r) || r.name;
  }
  t.defined = e, t.has = function(s, r) {
    s[r];
  }, t.is = n, t.equals = function(s, r) {
  }, t.oneOf = function(s, r) {
    r.includes(s) || JSON.stringify(r);
  }, t.isArray = function(s, r) {
    n(s, Array), s && s.length > 0 && n(s[0], r);
  }, t.optional = function(s, r) {
    s !== void 0 && n(s, r);
  }, t.falsy = function(s) {
  }, t.never = function(s) {
  };
})(Vt || (Vt = {}));
var Ut = Vt, Es = /^\/.*[^\\]\/[im]*$/;
function Be(t) {
  return Es.test(t) ? !Qt(t).test("") : !1;
}
function Qt(t) {
  const e = t.match(/^\/(.*[^\\])\/(.*)$/);
  if (!e) throw new Error(`Expected ${t} to be a (non-empty) regex`);
  let n = e[2] || "";
  return n = n.replace(/[^im]/g, "") + "g", new RegExp(e[1], n);
}
var _s = class {
  constructor({ mode: t, allowedHostnames: e, allowedPhoneNrs: n, allowedMatches: s, forbiddenMatches: r, forbiddenWords: i, suppressLinks: a, suppressEmailAddresses: l, suppressPhoneNumbers: o, replacement: d }) {
    if (Ut.oneOf(t, [
      "all",
      "otherOnly",
      "off"
    ]), this.mode = t, this.suppressLinks = a !== !1, this.suppressEmailAddresses = l !== !1, this.suppressPhoneNumbers = o !== !1, this.allowedHostnames = e || [], this.allowedPhoneNrs = (n || []).filter((c) => c).map((c) => c.replace(/[^0-9]/g, "")), this.allowedMatches = (s || []).filter(Be).map((c) => Qt(c)), this.forbiddenMatches = (r || []).filter(Be).map((c) => Qt(c)), i) {
      const c = i.split(`
`).map((u) => u.trim().toLowerCase()).filter((u) => u.length > 0 && !u.startsWith("#")).map((u) => u.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"));
      c.length && this.forbiddenMatches.push(new RegExp(`\\b(${c.join("|")})\\b`, "gi"));
    }
    Ut(() => this.allowedMatches.every((c) => c.flags.includes("g")), "All regexes in `suppressContactInfo.allowedMatches` must be global. Check `allowedMatches`!"), Ut(() => this.forbiddenMatches.every((c) => c.flags.includes("g")), "All regexes in `suppressContactInfo.forbiddenMatches` must be global. Check `forbiddenMatches`!"), d = d?.trim(), this.replacement = d && d.length > 0 ? d : void 0;
  }
  shouldSuppress({ isContentBySender: t }) {
    return this.mode === "all" || this.mode === "otherOnly" && !t;
  }
};
function lt(t) {
  return t.map((e) => (function(n) {
    if (n.type === "text") return (function(s, r) {
      return Et(s, (function(i) {
        var a, l, o, d, c, u, p, m, g, y, C, w, b, v;
        let S = "";
        return i.t && (S = `(${i.t("CONTACT_INFORMATION_HIDDEN")})`), {
          formattedLinks: (a = i.formattedLinks) != null ? a : "plaintext",
          markup: (l = i.markup) != null ? l : !1,
          useFallbackMentions: (o = i.useFallbackMentions) != null ? o : !1,
          sameTabLinkRules: (d = i.sameTabLinkRules) != null ? d : [],
          enableEmojiImageFallback: (c = i.enableEmojiImageFallback) != null ? c : !1,
          highlight: (u = i.highlight) != null ? u : [],
          highlightFromWordBeginnings: (p = i.highlightFromWordBeginnings) != null ? p : !1,
          contactInfo: (m = i.contactInfo) != null ? m : !1,
          suppression: (g = i.suppression) != null ? g : new _s({ mode: "off" }),
          contactInfoHiddenText: (w = (C = i.contactInfoHiddenText) != null ? C : (y = i.suppression) == null ? void 0 : y.replacement) != null ? w : S,
          customEmojiUrls: (b = i.customEmojiUrls) != null ? b : {},
          enableActions: (v = i.enableActions) != null ? v : !0
        };
      })(r));
    })(n.children, {});
    if (n.type === "file" && n.subtype === "video") return `🎥 ${St(n.url)}`;
    if (n.type === "file" && n.subtype === "image") return `📷 ${St(n.url)}`;
    if (n.type === "file" && n.subtype === "audio") return `🎧 ${St(n.url)}`;
    if (n.type === "file" && n.subtype === "voice") {
      const s = n.duration;
      return s === void 0 ? "🎙️" : `🎙️ (${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, "0")})`;
    }
    return n.type === "file" ? (n.subtype, `📎 ${St(n.url)}`) : n.type === "location" ? "📍" : "";
  })(e)).join(`

`);
}
function Et(t, e) {
  return t.flatMap((n) => {
    if (typeof n == "string") return n;
    switch (n.type) {
      case "blockquote":
      case "bold":
      case "italic":
      case "strikethrough":
      case "link":
      case "actionlink":
      case "actionLink":
      case "actionbutton":
      case "actionButton":
        return Et(n.children, e);
      case "bulletlist":
      case "bulletList":
        return `
` + Et(n.children, e);
      case "bulletpoint":
      case "bulletPoint":
        return "- " + Et(n.children, e) + `
`;
      case "autolink":
      case "autoLink":
      case "codeblock":
      case "codeBlock":
      case "codespan":
      case "codeSpan":
      case "emoji":
      case "customemoji":
      case "customEmoji":
        return n.text;
      case "suppressed":
        return e.contactInfoHiddenText;
      case "mention":
        return `@${n.text}`;
    }
  }).join("");
}
function Kt(t) {
  return k({
    id: t.id,
    name: t.name,
    custom: k(t.custom),
    locale: t.locale,
    photoUrl: t.photoUrl,
    role: t.role,
    welcomeMessage: t.welcomeMessage
  });
}
function Ms(t, e) {
  return k({
    user: e,
    access: t.access,
    notify: t.notify,
    joinedAt: t.joinedAt
  });
}
function Zt(t) {
  const e = Object.entries(t);
  return e.sort(([n, s], [r, i]) => {
    const a = s.createdAt - i.createdAt;
    return a !== 0 ? a : n.localeCompare(r);
  }), k(e.map(([n, s]) => ({
    emoji: n,
    count: s.count,
    currentUserReacted: s.currentUserReacted
  })));
}
var As = class extends L {
  constructor(t, e, n, s, r) {
    super(t, s, r), this.userId = e, this.realtimeClient = n, this.unsubscribeDebounceMs = 3e4;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = yield this.realtimeClient.call({
        method: "GET",
        path: ["users", this.userId],
        data: { includePrivateFields: !1 },
        flags: { bypassCache: !0 }
      });
      return e.ok ? f({
        snapshot: Kt(e.value.data),
        lastChanged: t
      }) : e.where === "server" && e.value.status === 404 ? f({
        snapshot: null,
        lastChanged: t
      }) : e;
    });
  }
  equal(t, e) {
    return M(t.snapshot, e.snapshot);
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      return f(e);
    });
  }
  userCreated(t, e) {
    this.mutate(t, (n) => n.value.snapshot !== null ? n : f({
      snapshot: Kt(e.state),
      lastChanged: t
    }));
  }
  userEdited(t, e) {
    this.mutate(t, (n) => {
      const s = n.value.snapshot;
      return s === null ? (console.warn("[TalkJS] Received a 'used edited' event for a user that we thought didn't exist."), n) : f({
        snapshot: {
          id: s.id,
          name: A(s.name, e.diff.name),
          custom: ae(s.custom, e.diff.custom),
          locale: A(s.locale, e.diff.locale),
          photoUrl: A(s.photoUrl, e.diff.photoUrl),
          role: A(s.role, e.diff.role),
          welcomeMessage: A(s.welcomeMessage, e.diff.welcomeMessage)
        },
        lastChanged: t
      });
    });
  }
  getFromCache() {
    return h(this, null, function* () {
      const t = yield this.mostRecentState.resultPromise;
      return t.ok ? t.value.snapshot === null ? q({
        status: 404,
        errorCode: "USER_NOT_FOUND",
        reasons: ["That user does not exist yet"]
      }) : f({
        status: 200,
        data: {
          id: t.value.snapshot.id,
          name: t.value.snapshot.name,
          custom: t.value.snapshot.custom,
          locale: t.value.snapshot.locale,
          photoUrl: t.value.snapshot.photoUrl,
          role: t.value.snapshot.role,
          welcomeMessage: t.value.snapshot.welcomeMessage
        }
      }) : O("NOT_IN_CACHE");
    });
  }
  teardownNested(t) {
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      return !1;
    });
  }
}, rt = class extends le {
  constructor(t, e, n, s) {
    super(t, {}), this.conversationId = e, this.message = n, this.realtimeClient = s;
  }
  get messageId() {
    return typeof this.message == "string" ? this.message : this.message.id;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      let e;
      if (typeof this.message == "object") e = this.message;
      else {
        const r = yield this.realtimeClient.call({
          method: "GET",
          path: [
            "me",
            "conversations",
            this.conversationId,
            "messages",
            this.message
          ],
          data: {},
          flags: { bypassCache: !0 }
        });
        if (!r.ok) return r;
        e = r.value.data;
      }
      const n = e.senderId === null ? null : this.realtimeClient.internalSubscribe(["users", e.senderId]), s = {};
      return Object.entries(e.reactions).forEach(([r, { createdAt: i }]) => {
        s[r] = i;
      }), f({
        lastChanged: t,
        sender: n,
        data: {
          id: e.id,
          type: e.type,
          custom: k(e.custom),
          createdAt: e.createdAt,
          editedAt: e.editedAt,
          referencedMessageId: e.referencedMessageId,
          origin: e.origin,
          plaintext: lt(e.content),
          content: Pe(e.content),
          reactions: Zt(e.reactions),
          reactionsCreatedAt: s
        }
      });
    });
  }
  refetch(t) {
    throw "Do not call refetch on message data stores, it can return outdated data. Destroy and remake them instead";
  }
  equal(t, e) {
    return M(t.data, e.data);
  }
  teardownNested(t) {
    var e;
    (e = t.sender) == null || e.unsubscribe();
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      var s;
      const r = (s = n.sender) == null ? void 0 : s.store;
      return (yield r?.changedBetween(t, e)) === !0;
    });
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      var n, s, r;
      const i = yield (s = (n = e.sender) == null ? void 0 : n.store) == null ? void 0 : s.getDeep(t);
      if (i?.ok === !1) return i;
      if (e.data === null) return f({ snapshot: null });
      const a = i?.value;
      return f({ snapshot: k({
        sender: (r = a?.snapshot) != null ? r : null,
        id: e.data.id,
        type: e.data.type,
        custom: k(e.data.custom),
        createdAt: e.data.createdAt,
        editedAt: e.data.editedAt,
        origin: e.data.origin,
        plaintext: e.data.plaintext,
        content: e.data.content,
        referencedMessageId: e.data.referencedMessageId,
        reactions: e.data.reactions
      }) });
    });
  }
  messageEdited(t, e) {
    this.mutate(t, (n) => {
      if (n.value.data === null) return n;
      const s = n.value.data.content, r = (i = s, (a = e.diff.content) === void 0 ? i : Pe(a));
      var i, a;
      const l = s === r ? n.value.data.plaintext : lt(r), { reactions: o, reactionsCreatedAt: d } = (function(c, u, p) {
        const m = (function(y, C) {
          if (C === void 0) return y;
          if (C === null) return {};
          if (Object.values(C).every((b) => b !== null && b.createdAt === void 0)) return y;
          const w = I({}, y);
          return Object.entries(C).forEach(([b, v]) => {
            v === null ? delete w[b] : w[b] = b in y ? A(y[b], v.createdAt) : v.createdAt;
          }), w;
        })(u, p);
        let g = (function(y, C) {
          if (C === void 0) return y;
          if (C === null) return [];
          if (Object.values(C).every((v) => v !== null && v.count === void 0 && v.currentUserReacted === void 0)) return y;
          const w = y.map((v) => {
            const S = C[v.emoji];
            return S === void 0 ? v : k(S === null ? R(I({}, v), { count: 0 }) : {
              emoji: v.emoji,
              count: A(v.count, S.count),
              currentUserReacted: A(v.currentUserReacted, S.currentUserReacted)
            });
          }).filter((v) => v.count > 0), b = new Set(w.map((v) => v.emoji));
          for (const v in C) {
            const S = C[v];
            S && !b.has(v) && w.push(k({
              emoji: v,
              count: S.count,
              currentUserReacted: S.currentUserReacted
            }));
          }
          return w;
        })(c, p);
        return m !== u && (g = [...g], g.sort((y, C) => {
          const w = m[y.emoji] - m[C.emoji];
          return w !== 0 ? w : y.emoji.localeCompare(C.emoji);
        })), g = k(g), {
          reactions: g,
          reactionsCreatedAt: m
        };
      })(n.value.data.reactions, n.value.data.reactionsCreatedAt, e.diff.reactions);
      return f({
        lastChanged: t,
        sender: n.value.sender,
        data: {
          id: n.value.data.id,
          type: n.value.data.type,
          createdAt: n.value.data.createdAt,
          origin: n.value.data.origin,
          referencedMessageId: n.value.data.referencedMessageId,
          editedAt: A(n.value.data.editedAt, e.diff.editedAt),
          custom: ae(n.value.data.custom, e.diff.custom),
          plaintext: l,
          content: r,
          reactions: o,
          reactionsCreatedAt: d
        }
      });
    });
  }
  messageDeleted(t, e) {
    this.mutate(t, (n) => n.value.data === null ? n : this.messageId === e.messageId ? (this.teardownNested(n.value), f({
      lastChanged: t,
      sender: null,
      data: null
    })) : n.value.data.referencedMessageId === e.messageId ? f({
      lastChanged: t,
      sender: n.value.sender,
      data: {
        id: n.value.data.id,
        type: n.value.data.type,
        createdAt: n.value.data.createdAt,
        origin: n.value.data.origin,
        referencedMessageId: null,
        editedAt: n.value.data.editedAt,
        custom: n.value.data.custom,
        plaintext: n.value.data.plaintext,
        content: n.value.data.content,
        reactions: n.value.data.reactions,
        reactionsCreatedAt: n.value.data.reactionsCreatedAt
      }
    }) : n);
  }
  getFromCache() {
    return h(this, null, function* () {
      var t;
      const e = yield this.mostRecentState.resultPromise;
      if (!e.ok) return O("NOT_IN_CACHE");
      if (e.value.data === null) return q({
        status: 404,
        errorCode: "MESSAGE_NOT_FOUND",
        reasons: ["No message with that ID exists"]
      });
      const n = e.value, { sender: s } = n, r = Yt(n, ["sender"]).data, { reactions: i, reactionsCreatedAt: a } = r, l = Yt(r, ["reactions", "reactionsCreatedAt"]), o = {};
      return i.forEach(({ emoji: d, count: c, currentUserReacted: u }) => {
        const p = d;
        o[p] = {
          count: c,
          createdAt: a[p],
          currentUserReacted: u
        };
      }), f({
        status: 200,
        data: R(I({}, l), {
          senderId: (t = s?.store.userId) != null ? t : null,
          reactions: o
        })
      });
    });
  }
}, Xt = class extends le {
  constructor(t, e, n, s) {
    super(t, {}), this.createdAt = e, this.dataStore = n, this.referencedDataStore = s;
  }
  get messageId() {
    return this.dataStore.messageId;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      return f({
        lastChanged: t,
        dataStore: this.dataStore,
        referencedDataStore: this.referencedDataStore
      });
    });
  }
  refetch(t) {
    throw "Do not call refetch on message stores, it can return outdated data. Destroy and remake them instead";
  }
  equal(t, e) {
    return !0;
  }
  teardownNested(t) {
  }
  anyChildChanged(t, e, n) {
    return h(this, arguments, function* (s, r, { dataStore: i, referencedDataStore: a }) {
      return (yield i.changedBetween(s, r)) === !0 ? !0 : (yield a?.changedBetween(s, r)) === !0;
    });
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      var n, s, r;
      const i = yield e.dataStore.getDeep(t);
      if (!i.ok) return i;
      const a = i.value;
      if (a.snapshot === null) return f({ snapshot: null });
      const l = yield (n = e.referencedDataStore) == null ? void 0 : n.getDeep(t);
      if (l && !l.ok) return l;
      const o = (s = l?.value) != null ? s : null, d = (r = o?.snapshot) != null ? r : null;
      return f({ snapshot: k({
        id: a.snapshot.id,
        type: a.snapshot.type,
        sender: a.snapshot.sender,
        custom: k(a.snapshot.custom),
        createdAt: a.snapshot.createdAt,
        editedAt: a.snapshot.editedAt,
        referencedMessage: d,
        origin: a.snapshot.origin,
        plaintext: a.snapshot.plaintext,
        content: a.snapshot.content,
        reactions: a.snapshot.reactions
      }) });
    });
  }
}, Rs = class extends L {
  constructor(t, e, n, s, r) {
    super(t, s, r), this.conversationId = e, this.realtimeClient = n, this.handlers = r, this.unsubscribeDebounceMs = 1e4, this.pendingLoadMore = void 0;
  }
  listen(t) {
    return this.onlyUsedInternally && this.mostRecentState.resultPromise.then((e) => {
      if (e.ok && e.value.inWindow !== null) {
        const n = 30 - e.value.inWindow.length;
        n > 0 && this.loadMore(n);
      }
    }), super.listen(t);
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = this.onlyUsedInternally ? 1 : 30, n = yield Le({
        realtimeClient: this.realtimeClient,
        conversationId: this.conversationId,
        count: e
      });
      return n.ok ? n.value.messages === null ? f({
        lastChanged: t,
        lastMessageChanged: t,
        stores: null,
        inWindow: null,
        windowEnd: null
      }) : Ge({
        seq: t,
        messages: n.value.messages,
        cursor: n.value.nextCursor,
        conversationId: this.conversationId,
        realtimeClient: this.realtimeClient
      }) : n;
    });
  }
  teardownNested(t) {
    if (t.stores) {
      const e = O("TERMINATED");
      Object.values(t.stores).forEach((n) => n.setError(e)), t.inWindow.forEach((n) => n.setError(e));
    }
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      for (const s in n.stores) {
        const r = n.stores[s];
        if ((yield r?.changedBetween(t, e)) === !0) return !0;
      }
      return !1;
    });
  }
  lastMessageChangedBetween(t, e) {
    return h(this, null, function* () {
      if (t >= e) return !1;
      const n = yield this.get(e).resultPromise;
      if (!n.ok) return !1;
      if (n.value.lastMessageChanged > t) return !0;
      if (n.value.stores === null) return !1;
      const s = n.value.inWindow[0];
      return s === void 0 ? !1 : (yield s.changedBetween(t, e)) === !0;
    });
  }
  equal(t, e) {
    return t.stores === null && e.stores === null || t.stores !== null && e.stores !== null && !!M(Object.keys(t.stores), Object.keys(e.stores)) && !!M(t.inWindow.map((n) => n.messageId), e.inWindow.map((n) => n.messageId)) && M(t.windowEnd, e.windowEnd);
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      if (e.stores === null) return f({
        snapshot: null,
        loadedAll: !0
      });
      const n = yield Promise.all(e.inWindow.map((r) => r.getDeep(t))), s = n.find((r) => !r.ok);
      return s || f({
        snapshot: k(n.filter((r) => r.value.snapshot !== null).map((r) => r.value.snapshot)),
        loadedAll: e.windowEnd === null
      });
    });
  }
  loadMore(t = 30) {
    return h(this, null, function* () {
      if (this.pendingLoadMore) return this.pendingLoadMore;
      const e = j();
      this.pendingLoadMore = e.promise;
      const n = yield this.mostRecentState.resultPromise;
      if (!n.ok) {
        if (n.where === "client") throw e.reject(n.value), this.pendingLoadMore = void 0, n.value;
        {
          const i = B("Loading more messages", n.value);
          throw e.reject(n.value), this.pendingLoadMore = void 0, i;
        }
      }
      if (n.value.windowEnd === null) return e.resolve(), void (this.pendingLoadMore = void 0);
      const s = n.value.windowEnd.cursor, r = yield Le({
        count: t,
        cursor: s,
        conversationId: this.conversationId,
        realtimeClient: this.realtimeClient
      });
      e.resolve(), this.pendingLoadMore = void 0, yield this.handlers.onLoadedMore({
        type: "virtual.messages.loadedMore",
        conversationId: this.conversationId,
        data: r
      });
    });
  }
  loadedMore(t, e) {
    this.mutate(t, (n) => n.value.windowEnd === null ? n : e.data.ok ? e.data.value.messages === null ? (console.warn("[TalkJS] When loading more messages, the conversation no longer existed. We should have been told about this."), n) : Ge({
      seq: t,
      prevState: n.value,
      messages: e.data.value.messages,
      cursor: e.data.value.nextCursor,
      conversationId: this.conversationId,
      realtimeClient: this.realtimeClient
    }) : e.data);
  }
  messageCreated(t, e) {
    this.mutate(t, (n) => {
      if (n.value.stores === null) return console.warn("[TalkJS] Received a 'message.created' event for a nonexistent conversation."), n;
      if (n.value.windowEnd && e.state.createdAt < n.value.windowEnd.oldestMessageTs || Object.hasOwnProperty.call(n.value.stores, e.state.id)) return n;
      const s = I({}, n.value.stores), r = new rt(t, this.conversationId, e.state, this.realtimeClient);
      s[e.state.id] = r;
      const i = e.state.referencedMessageId;
      let a;
      i === null ? a = null : i in s ? a = s[i] : (a = new rt(t, this.conversationId, i, this.realtimeClient), s[i] = a);
      const l = new Xt(t, e.state.createdAt, r, a), o = [...n.value.inWindow, l];
      return o.sort((d, c) => c.createdAt - d.createdAt), f({
        lastChanged: t,
        lastMessageChanged: o[0].messageId === e.messageId ? t : n.value.lastMessageChanged,
        stores: s,
        inWindow: o,
        windowEnd: n.value.windowEnd
      });
    });
  }
  messageEdited(t, e) {
    this.mutate(t, (n) => {
      var s;
      return n.value.stores === null ? (console.warn("[TalkJS] Received a 'message.edited' event for a nonexistent conversation."), n) : ((s = n.value.stores[e.messageId]) == null || s.messageEdited(t, e), n);
    });
  }
  messageDeleted(t, e) {
    this.mutate(t, (n) => {
      if (n.value.stores === null) return console.warn("[TalkJS] Received a 'message.deleted' event for a conversation that we thought didn't exist."), n;
      if (Object.values(n.value.stores).forEach((i) => i.messageDeleted(t, e)), n.value.stores[e.messageId] === void 0) return n;
      const s = I({}, n.value.stores);
      delete s[e.messageId];
      const r = n.value.inWindow.filter((i) => i.messageId !== e.messageId);
      if (e.newLastMessage && r.length === 0) {
        const i = new rt(t, this.conversationId, e.newLastMessage, this.realtimeClient);
        s[i.messageId] = i;
        const a = e.newLastMessage.referencedMessageId;
        let l;
        a === null ? l = null : a in s ? l = s[a] : (l = new rt(t, this.conversationId, a, this.realtimeClient), s[a] = l);
        const o = new Xt(t, e.newLastMessage.createdAt, i, l);
        r.push(o);
      }
      return f({
        lastChanged: t,
        lastMessageChanged: e.newLastMessage !== void 0 ? t : n.value.lastMessageChanged,
        stores: s,
        inWindow: r,
        windowEnd: n.value.windowEnd
      });
    });
  }
  conversationCleared(t, e) {
    this.mutate(t, (n) => {
      var s;
      return ((s = n.value.inWindow) == null ? void 0 : s.length) === 0 && n.value.windowEnd === null ? n : (this.teardownNested(n.value), f({
        lastChanged: t,
        lastMessageChanged: t,
        stores: {},
        inWindow: [],
        windowEnd: null
      }));
    });
  }
  sideCreated(t, e) {
    const n = this.fetchInitial(t);
    this.mutate(t, (s) => s.value.stores !== null ? (n.then((r) => {
      r.ok && this.teardownNested(r.value);
    }), s) : n);
  }
  sideDeleted(t, e) {
    this.mutate(t, (n) => n.value.stores === null ? n : (this.teardownNested(n.value), f({
      lastChanged: t,
      lastMessageChanged: t,
      stores: null,
      inWindow: null,
      windowEnd: null
    })));
  }
  getMessageFromCache(t) {
    return h(this, null, function* () {
      const e = yield this.mostRecentState.resultPromise;
      if (!e.ok || e.value.stores === null) return O("NOT_IN_CACHE");
      const n = e.value.stores[t];
      return n === void 0 ? O("NOT_IN_CACHE") : n.getFromCache();
    });
  }
};
function Le(t) {
  return h(this, arguments, function* ({ cursor: e, realtimeClient: n, conversationId: s, count: r }) {
    const i = {
      limit: r,
      cursor: e
    }, a = yield n.call({
      method: "GET",
      path: [
        "me",
        "conversations",
        s,
        "messages"
      ],
      data: i,
      flags: { bypassCache: !0 }
    });
    if (a.ok) {
      const { data: l, cursor: o } = a.value.data;
      return f({
        messages: l,
        nextCursor: o
      });
    }
    return (a.ok || a.where !== "server" || a.value.status !== 404) && (a.ok || a.where !== "server" || a.value.status !== 403 || a.value.errorCode !== "NOT_A_PARTICIPANT") ? a : f({
      messages: null,
      nextCursor: null
    });
  });
}
function Ge({ seq: t, prevState: e, messages: n, cursor: s, conversationId: r, realtimeClient: i }) {
  var a, l, o, d;
  const c = e ? I({}, e.stores) : {};
  for (const m of n) if (c[m.id] === void 0) {
    const g = new rt(t, r, m, i);
    c[g.messageId] = g;
  }
  for (const m of n) {
    const g = m.referencedMessageId;
    if (g && c[g] === void 0) {
      const y = new rt(t, r, g, i);
      c[y.messageId] = y;
    }
  }
  const u = e ? [...e.inWindow] : [];
  for (const m of n) u.push(new Xt(t, m.createdAt, c[m.id], m.referencedMessageId ? c[m.referencedMessageId] : null));
  u.sort((m, g) => g.createdAt - m.createdAt);
  const p = ((l = (a = e?.inWindow) == null ? void 0 : a[0]) == null ? void 0 : l.messageId) === ((o = u?.[0]) == null ? void 0 : o.messageId) && (d = e?.lastMessageChanged) != null ? d : t;
  return f(s === null ? {
    lastChanged: t,
    lastMessageChanged: p,
    stores: c,
    inWindow: u,
    windowEnd: null
  } : {
    lastChanged: t,
    lastMessageChanged: p,
    stores: c,
    inWindow: u,
    windowEnd: {
      cursor: s,
      oldestMessageTs: n[n.length - 1].createdAt
    }
  });
}
var Ns = class extends L {
  constructor(t, e, n, s, r) {
    super(t, s, r), this.convData = e, this.realtimeClient = n, this.unsubscribeDebounceMs = 3e4;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      return f({
        lastChanged: t,
        convData: this.convData
      });
    });
  }
  teardownNested(t) {
    t.convData.unsubscribe();
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      return n.convData.store.changedBetween(t, e);
    });
  }
  equal(t, e) {
    return !0;
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      return e.convData.store.getDeep(t);
    });
  }
  getFromCache() {
    return h(this, null, function* () {
      return this.convData.store.getFromCache();
    });
  }
};
function te(t, e) {
  for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n);
}
function $t(t, e) {
  return (function(n, s) {
    let r = {}, i = 0;
    return te(n, (a, l) => {
      const [o, d] = s([l, a], i++);
      r[o] = d;
    }), r;
  })(t, ([n, s]) => [n, e(s, n)]);
}
var Os = class extends L {
  constructor(t, e, n, s, r) {
    super(t, s, r), this.conversationId = e, this.realtimeClient = n, this.unsubscribeDebounceMs = 1e4;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = yield this.realtimeClient.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          this.conversationId,
          "typing"
        ],
        data: {},
        flags: { bypassCache: !0 }
      });
      if (!e.ok && e.where === "server" && e.value.status === 404) return f({
        data: null,
        lastChanged: t
      });
      if (!e.ok && e.where === "server" && e.value.status === 403 && e.value.errorCode === "NOT_A_PARTICIPANT") return f({
        data: null,
        lastChanged: t
      });
      if (!e.ok) return e;
      const n = e.value.data;
      return n.many ? f({
        data: {
          usersTyping: null,
          many: !0
        },
        userSubscriptions: {},
        lastChanged: t
      }) : f({
        data: n,
        userSubscriptions: $t(n.usersTyping, (s, r) => this.realtimeClient.internalSubscribe(["users", r])),
        lastChanged: t
      });
    });
  }
  equal(t, e) {
    return M(t.data, e.data);
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      if (e.data === null) return f({
        snapshot: null,
        lastChanged: e.lastChanged
      });
      if (e.data.many) return f({
        snapshot: k({ many: !0 }),
        lastChanged: e.lastChanged
      });
      const n = Object.entries(e.data.usersTyping).sort(([d, c], [u, p]) => c - p).map(([d, c]) => d).map((d) => e.userSubscriptions[d].store.getDeep(t)), s = yield Promise.all(n), r = s.find((d) => !d.ok);
      if (r) return r;
      const i = s.map((d) => d.value), a = i.map((d) => d.snapshot), l = i.map((d) => d.lastChanged), o = Math.max(e.lastChanged, ...l);
      return f({
        snapshot: k({
          users: k(a),
          many: !1
        }),
        lastChanged: o
      });
    });
  }
  typingAvailable(t, e) {
    this.mutate(t, () => f({
      data: e.state,
      userSubscriptions: e.state.many ? {} : $t(e.state.usersTyping, (n, s) => this.realtimeClient.internalSubscribe(["users", s])),
      lastChanged: t
    }));
  }
  typingChanged(t, e) {
    this.mutate(t, (n) => {
      if (n.value.data === null) return n;
      if (e.diff.many === void 0) {
        if (n.value.data.many === !0) return n;
        const s = I({}, n.value.data.usersTyping), r = I({}, n.value.userSubscriptions);
        return te(e.diff.usersTyping, (i, a) => {
          var l;
          typeof i == "number" ? (s[a] = i, r[a] = this.realtimeClient.internalSubscribe(["users", a])) : i === null && (delete s[a], (l = r[a]) == null || l.unsubscribe(), delete r[a]);
        }), f({
          data: {
            usersTyping: s,
            many: !1
          },
          userSubscriptions: r,
          lastChanged: t
        });
      }
      if (e.diff.many === !0) return n.value.data.many ? n : f({
        data: {
          usersTyping: null,
          many: !0
        },
        userSubscriptions: {},
        lastChanged: t
      });
      if (e.diff.many === !1) {
        if (n.value.data.many === !1) return n;
        const s = $t(e.diff.usersTyping, (r, i) => this.realtimeClient.internalSubscribe(["users", i]));
        return f({
          data: e.diff,
          userSubscriptions: s,
          lastChanged: t
        });
      }
      throw e.diff, "Unreachable";
    });
  }
  sideDeleted(t, e) {
    this.mutate(t, (n) => n.value.data === null ? n : f({
      data: null,
      lastChanged: t
    }));
  }
  teardownNested(t) {
    t.data && te(t.userSubscriptions, (e) => e.unsubscribe());
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      var s;
      if (n.data === null) return !1;
      for (const r in n.userSubscriptions) {
        const i = n.userSubscriptions[r];
        if ((yield (s = i?.store) == null ? void 0 : s.changedBetween(t, e)) === !0) return !0;
      }
      return !1;
    });
  }
}, Fe = class extends L {
  constructor(t, e, n, s, r, i) {
    super(t, r, i), this.conversationId = e, this.participant = n, this.realtimeClient = s, this.unsubscribeDebounceMs = 0;
  }
  get userId() {
    return typeof this.participant == "string" ? this.participant : this.participant.id;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = this.realtimeClient.internalSubscribe(["users", this.userId]);
      if (typeof this.participant == "object") return f({
        lastChanged: t,
        user: e,
        data: this.participant,
        sideExists: !0
      });
      const n = yield He(this.conversationId, this.userId, this.realtimeClient);
      return n.ok ? f(I({
        lastChanged: t,
        user: e
      }, n.value)) : (e.unsubscribe(), n);
    });
  }
  refetch(t) {
    throw "Do not call refetch on participant data stores, it can return outdated data. Destroy and remake them instead";
  }
  equal(t, e) {
    var n, s, r, i;
    return ((s = (n = t.user) == null ? void 0 : n.store) == null ? void 0 : s.userId) === ((i = (r = e.user) == null ? void 0 : r.store) == null ? void 0 : i.userId) && M(t.data, e.data) && t.sideExists === e.sideExists;
  }
  teardownNested(t) {
    t.user.unsubscribe();
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      var s;
      if (!n.sideExists || n.data === null) return !1;
      const r = (s = n.user) == null ? void 0 : s.store;
      return (yield r?.changedBetween(t, e)) === !0;
    });
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      if (!e.sideExists || e.data === null) return f({ snapshot: null });
      const n = yield e.user.store.getDeep(t);
      if (n.ok === !1) return n;
      const s = n.value.snapshot;
      return f({ snapshot: Ms(e.data, s) });
    });
  }
  participantCreated(t, e) {
    this.mutate(t, (n) => n.value.data !== null ? n : f({
      lastChanged: t,
      user: n.value.user,
      data: e.state,
      sideExists: n.value.sideExists
    }));
  }
  participantEdited(t, e) {
    this.mutate(t, (n) => n.value.data === null ? n : f({
      lastChanged: t,
      user: n.value.user,
      data: {
        id: n.value.data.id,
        access: A(n.value.data.access, e.diff.access),
        notify: A(n.value.data.notify, e.diff.notify),
        joinedAt: n.value.data.joinedAt
      },
      sideExists: n.value.sideExists
    }));
  }
  participantDeleted(t, e) {
    this.mutate(t, (n) => n.value.data === null ? n : f({
      lastChanged: t,
      user: n.value.user,
      data: null,
      sideExists: n.value.sideExists
    }));
  }
  sideCreated(t, e) {
    const n = He(this.conversationId, this.userId, this.realtimeClient);
    this.mutate(t, (s) => h(this, null, function* () {
      if (s.value.data !== null) return s;
      const r = yield n;
      return r.ok ? f({
        lastChanged: r.value.data === null ? s.value.lastChanged : t,
        user: s.value.user,
        data: r.value.data,
        sideExists: !0
      }) : (this.teardownNested(s.value), r);
    }));
  }
  sideDeleted(t, e) {
    this.mutate(t, (n) => n.value.sideExists ? f({
      lastChanged: n.value.data === null ? n.value.lastChanged : t,
      user: n.value.user,
      data: null,
      sideExists: !1
    }) : n);
  }
  getSideExists() {
    return h(this, null, function* () {
      const t = yield this.mostRecentState.resultPromise;
      return t.ok && t.value.sideExists;
    });
  }
  getFromCache() {
    return h(this, null, function* () {
      const t = yield this.mostRecentState.resultPromise;
      return t.ok ? t.value.data === null ? q({
        status: 404,
        errorCode: "PARTICIPANT_NOT_FOUND",
        reasons: ["No participant with that ID exists"]
      }) : f({
        status: 200,
        data: t.value.data
      }) : O("NOT_IN_CACHE");
    });
  }
};
function He(t, e, n) {
  return h(this, null, function* () {
    const s = yield n.call({
      method: "GET",
      path: [
        "me",
        "conversations",
        t,
        "participants",
        e
      ],
      data: {},
      flags: { bypassCache: !0 }
    });
    return s.ok ? f({
      data: s.value.data,
      sideExists: !0
    }) : s.where === "server" && s.value.status === 404 ? f({
      data: null,
      sideExists: s.value.errorCode === "PARTICIPANT_NOT_FOUND" && e !== n.userId
    }) : s.where === "server" && s.value.status === 403 && s.value.errorCode === "NOT_A_PARTICIPANT" ? f({
      data: null,
      sideExists: !1
    }) : s;
  });
}
var Ds = class extends L {
  constructor(t, e, n, s, r, i) {
    super(t, r, i), this.getParticipantDataStore = e, this.conversationId = n, this.realtimeClient = s, this.handlers = i, this.unsubscribeDebounceMs = 3e4, this.pendingLoadMore = void 0;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = yield ze({
        realtimeClient: this.realtimeClient,
        conversationId: this.conversationId,
        count: 10
      });
      return e.ok ? e.value.participants === null ? f({
        lastChanged: t,
        stores: null,
        windowEnd: null
      }) : Je({
        seq: t,
        participants: e.value.participants,
        cursor: e.value.nextCursor,
        getParticipantDataStore: this.getParticipantDataStore
      }) : e;
    });
  }
  teardownNested(t) {
    t.stores !== null && Object.values(t.stores).forEach((e) => e.unsubscribe());
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      var s;
      for (const r in n.stores) {
        const i = n.stores[r];
        if ((yield (s = i?.store) == null ? void 0 : s.changedBetween(t, e)) === !0) return !0;
      }
      return !1;
    });
  }
  equal(t, e) {
    return t.stores === null && e.stores === null || t.stores !== null && e.stores !== null && !!M(Object.keys(t.stores), Object.keys(e.stores)) && M(t.windowEnd, e.windowEnd);
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      if (e.stores === null) return f({
        snapshot: null,
        loadedAll: !0
      });
      const n = yield Promise.all(Object.values(e.stores).map((i) => i.store.getDeep(t))), s = n.find((i) => !i.ok);
      if (s) return s;
      const r = n.filter((i) => i.value.snapshot !== null).map((i) => i.value.snapshot);
      return r.sort((i, a) => a.joinedAt - i.joinedAt), f({
        snapshot: k(r),
        loadedAll: e.windowEnd === null
      });
    });
  }
  loadMore(t = 10) {
    return h(this, null, function* () {
      if (this.pendingLoadMore) return this.pendingLoadMore;
      const e = j();
      this.pendingLoadMore = e.promise;
      const n = yield this.mostRecentState.resultPromise;
      if (!n.ok) {
        if (n.where === "client") throw e.reject(n.value), this.pendingLoadMore = void 0, n.value;
        {
          const i = B("Loading more participants", n.value);
          throw e.reject(i), this.pendingLoadMore = void 0, i;
        }
      }
      if (n.value.windowEnd === null) return e.resolve(), void (this.pendingLoadMore = void 0);
      const s = n.value.windowEnd.cursor, r = yield ze({
        count: t,
        cursor: s,
        conversationId: this.conversationId,
        realtimeClient: this.realtimeClient
      });
      e.resolve(), this.pendingLoadMore = void 0, yield this.handlers.onLoadedMore({
        type: "virtual.participants.loadedMore",
        conversationId: this.conversationId,
        data: r
      });
    });
  }
  loadedMore(t, e) {
    this.mutate(t, (n) => n.value.windowEnd === null ? n : e.data.ok ? e.data.value.participants === null ? (console.warn("[TalkJS] When loading more participants, the conversation no longer existed. We should have been told about this."), n) : Je({
      seq: t,
      prevStores: n.value.stores,
      participants: e.data.value.participants,
      cursor: e.data.value.nextCursor,
      getParticipantDataStore: this.getParticipantDataStore
    }) : e.data);
  }
  participantCreated(t, e) {
    const n = this.getParticipantDataStore(e.state);
    this.mutate(t, (s) => {
      let r = s.value.stores;
      return r === null && (console.warn("[TalkJS] Received a 'participant.created' event when we thought the conversation didn't exist."), r = {}), Object.hasOwnProperty.call(r, e.userId) ? (n.unsubscribe(), s) : f({
        lastChanged: t,
        stores: R(I({}, r), { [e.userId]: n }),
        windowEnd: s.value.windowEnd
      });
    });
  }
  participantDeleted(t, e) {
    this.mutate(t, (n) => {
      var s;
      if (!Object.hasOwnProperty.call(n.value.stores, e.userId)) return n;
      const r = I({}, n.value.stores);
      return (s = r[e.userId]) == null || s.unsubscribe(), delete r[e.userId], f({
        lastChanged: t,
        stores: r,
        windowEnd: n.value.windowEnd
      });
    });
  }
  sideCreated(t, e) {
    const n = this.fetchInitial(t);
    this.mutate(t, (s) => s.value.stores !== null ? (n.then((r) => {
      r.ok && this.teardownNested(r.value);
    }), s) : n);
  }
  sideDeleted(t, e) {
    this.mutate(t, (n) => n.value.stores === null ? n : (this.teardownNested(n.value), f({
      lastChanged: t,
      stores: null,
      windowEnd: null
    })));
  }
};
function ze(t) {
  return h(this, arguments, function* ({ cursor: e, realtimeClient: n, conversationId: s, count: r }) {
    const i = {
      limit: r,
      cursor: e
    }, a = yield n.call({
      method: "GET",
      path: [
        "me",
        "conversations",
        s,
        "participants"
      ],
      data: i,
      flags: { bypassCache: !0 }
    });
    if (a.ok) {
      const { data: l, cursor: o } = a.value.data;
      return f({
        participants: l,
        nextCursor: o
      });
    }
    return (a.ok || a.where !== "server" || a.value.status !== 404) && (a.ok || a.where !== "server" || a.value.status !== 403 || a.value.errorCode !== "NOT_A_PARTICIPANT") ? a : f({
      participants: null,
      nextCursor: null
    });
  });
}
function Je({ seq: t, prevStores: e, participants: n, cursor: s, getParticipantDataStore: r }) {
  const i = e ? I({}, e) : {};
  for (const a of n) i[a.id] === void 0 && (i[a.id] = r(a));
  return f(s === null ? {
    lastChanged: t,
    stores: i,
    windowEnd: null
  } : {
    lastChanged: t,
    stores: i,
    windowEnd: {
      cursor: s,
      oldestParticipantTs: n[n.length - 1].joinedAt
    }
  });
}
function Ye(t, e) {
  return Array.isArray(e) ? e[1].some((n) => Ve(t, n)) : Ve(t, e);
}
function Ve(t, e) {
  const n = t.lastMessageAt, s = t.lastMessageAt !== t.joinedAt;
  return (function(r, i) {
    if (i === void 0) return !0;
    const a = Object.prototype.hasOwnProperty;
    for (const l of Object.getOwnPropertyNames(i)) {
      const o = i[l], d = a.call(r, l);
      switch (o) {
        case "exists":
          if (!d) return !1;
          break;
        case "!exists":
          if (d) return !1;
          break;
        default:
          if (!it(r[l], o)) return !1;
      }
    }
    return !0;
  })(t.custom, e.custom) && it(t.access, e.access) && ee(t.isUnread, e.isUnread) && ee(s, e.hasMessages) && it(t.subject, e.subject) && _t(n, e.lastActivityAt) && _t(t.createdAt, e.createdAt) && _t(t.joinedAt, e.joinedAt);
}
function it(t, e) {
  if (e === void 0) return !0;
  const [n, s] = e;
  switch (n) {
    case "oneOf":
      return s.indexOf(t) !== -1;
    case "!oneOf":
      return s.indexOf(t) === -1;
    case "==":
      return t === s;
    case "!=":
      return t !== s;
    default:
      return !0;
  }
}
function _t(t, e) {
  if (e === void 0) return !0;
  const [n, s] = e;
  switch (n) {
    case ">":
      return t > s;
    case "<":
      return t < s;
    case ">=":
      return t >= s;
    case "<=":
      return t <= s;
    case "between": {
      const [r, i] = s;
      return t >= r && t < i;
    }
    case "!between": {
      const [r, i] = s;
      return !(t >= r && t < i);
    }
    default:
      return !0;
  }
}
function ee(t, e) {
  return e === void 0 || t === e;
}
function Wt(t, e) {
  if (!Array.isArray(e)) return Qe(t, e);
  const n = e[1];
  let s = !0, r = !1, i = !1;
  for (const a of n) {
    const l = Qe(t, a);
    if (l === "match") return "match";
    l === "may-match" ? (s = !1, i = !0) : l === "unchanged" ? s = !1 : l === "unmatch" && (r = !0);
  }
  return s ? "unmatch" : r ? i ? "may-move" : "may-unmatch" : i ? "may-match" : "unchanged";
}
function Qe(t, e) {
  let n = !1, s = !0;
  if (e.access !== void 0) {
    if (t.access === void 0) s = !1;
    else if (n = !0, !it(t.access, e.access)) return "unmatch";
  }
  if (e.createdAt !== void 0 && (s = !1), e.joinedAt !== void 0 && (s = !1), e.custom !== void 0) if (t.custom === void 0) s = !1;
  else {
    const r = (function(i, a) {
      let l = !1, o = !0;
      for (const [d, c] of Object.entries(a)) {
        const u = i === null ? null : i[d];
        if (u === void 0) o = !1;
        else switch (l = !0, c) {
          case "exists":
            if (u === null) return "unmatch";
            break;
          case "!exists":
            if (u !== null) return "unmatch";
            break;
          default:
            if (u === null || !it(u, c)) return "unmatch";
        }
      }
      return o ? "match" : l ? "may-match" : "unchanged";
    })(t.custom, e.custom);
    if (r === "match") n = !0;
    else if (r === "may-match") n = !0, s = !1;
    else if (r === "unchanged") s = !1;
    else if (r === "unmatch") return "unmatch";
  }
  if (e.isUnread !== void 0) {
    if (t.isUnread === void 0) s = !1;
    else if (n = !0, !ee(t.isUnread, e.isUnread)) return "unmatch";
  }
  if (e.lastActivityAt !== void 0) {
    if (t.lastMessageAt === void 0) s = !1;
    else if (n = !0, !_t(t.lastMessageAt, e.lastActivityAt)) return "unmatch";
  }
  if (e.subject !== void 0) {
    if (t.subject === void 0) s = !1;
    else if (n = !0, !it(t.subject, e.subject)) return "unmatch";
  }
  return e.hasMessages !== void 0 && (s = !1, t.lastMessageAt !== void 0 && (n = !0)), s ? "match" : n ? "may-match" : "unchanged";
}
var Ke = class {
  constructor(t) {
    if (this.maxSize = t, this.underlying = /* @__PURE__ */ new Set(), t <= 0) throw new Error("maxSize must be greater than 0");
  }
  has(t) {
    return !!this.underlying.has(t) && (this.underlying.delete(t), this.underlying.add(t), !0);
  }
  add(t) {
    if (this.underlying.add(t), this.underlying.size > this.maxSize) {
      const e = this.underlying.values().next().value;
      this.underlying.delete(e);
    }
    return this;
  }
  delete(t) {
    return this.underlying.delete(t), this;
  }
  clear() {
    this.underlying.clear();
  }
}, Ps = class {
  constructor() {
    this.positiveCache = new Ke(1e4), this.negativeCache = new Ke(1e4);
  }
  move(t, e) {
    switch (e) {
      case "match":
        this.positiveCache.add(t), this.negativeCache.delete(t);
        return;
      case "unmatch":
        this.positiveCache.delete(t), this.negativeCache.add(t);
        return;
      case "unchanged":
        return;
      case "may-match":
        this.negativeCache.delete(t);
        return;
      case "may-unmatch":
        this.positiveCache.delete(t);
        return;
      case "may-move":
        this.positiveCache.delete(t), this.negativeCache.delete(t);
        return;
    }
    throw "unreachable";
  }
  delete(t) {
    this.positiveCache.delete(t), this.negativeCache.delete(t);
  }
  included(t) {
    return !!this.positiveCache.has(t) || !this.negativeCache.has(t) && "unknown";
  }
  clear() {
    this.positiveCache.clear(), this.negativeCache.clear();
  }
}, at = /* @__PURE__ */ Symbol("matches_nothing"), ot = /* @__PURE__ */ Symbol("matches_everything"), Mt = "{}";
function js(t) {
  const e = (function(r) {
    return Array.isArray(r) ? r[1] : [r];
  })(t).map((r) => Pn(r));
  if (e.some((r) => r === ot)) return Mt;
  const n = e.filter((r) => r !== at).map((r) => JSON.stringify(r)), s = Array.from(new Set(n));
  return s.length === 1 ? s[0] : (s.sort(), `["any", [${s.join(",")}]]`);
}
function Pn(t, e = "") {
  const n = {}, s = Object.keys(t).sort();
  for (const r of s) {
    const i = t[r];
    if (i === void 0) continue;
    const a = Us(e + r, i);
    if (a === at) return at;
    a !== ot && (n[r] = a);
  }
  return Object.keys(n).length === 0 ? ot : n;
}
function Us(t, e) {
  return e === !0 || e === !1 || e === "exists" || e === "!exists" ? e : t in Ze ? (function(n, s) {
    const { accept: r, reject: i } = (function(a, l) {
      const o = Ze[a], [d, c] = l;
      if (d === "==") return {
        accept: o.filter((u) => u === c),
        reject: o.filter((u) => u !== c)
      };
      if (d === "!=") return {
        accept: o.filter((u) => u !== c),
        reject: o.filter((u) => u === c)
      };
      if (d === "oneOf") return {
        accept: o.filter((u) => c.includes(u)),
        reject: o.filter((u) => !c.includes(u))
      };
      if (d === "!oneOf") return {
        accept: o.filter((u) => !c.includes(u)),
        reject: o.filter((u) => c.includes(u))
      };
      throw "unreachable";
    })(n, s);
    return r.length === 0 ? at : i.length === 0 ? ot : r.length === 1 ? ["==", r[0]] : i.length === 1 ? ["!=", i[0]] : ["oneOf", r];
  })(t, e) : Array.isArray(e) ? (function(n) {
    const [s, r] = n;
    if (s === "==" || s === "!=" || s === ">" || s === "<") return n;
    if (s === ">=") return [">", r - 1];
    if (s === "<=") return ["<", r + 1];
    if (s === "oneOf" && r.length === 0) return at;
    if (s === "oneOf") {
      const i = Array.from(new Set(r));
      return i.sort(), i.length === 1 ? ["==", i[0]] : ["oneOf", i];
    }
    if (s === "!oneOf" && r.length === 0) return ot;
    if (s === "!oneOf") {
      const i = Array.from(new Set(r));
      return i.sort(), i.length === 1 ? ["!=", i[0]] : ["!oneOf", i];
    }
    if (s === "between" && r[0] >= r[1]) return at;
    if (s === "between") return n;
    if (s === "!between" && r[0] >= r[1]) return ot;
    if (s === "!between") return n;
    throw "unreachable";
  })(e) : Pn(e, "custom.");
}
var Ze = {
  type: ["UserMessage", "SystemMessage"],
  access: ["Read", "ReadWrite"],
  origin: [
    "rest",
    "import",
    "email",
    "web"
  ]
}, $s = class extends L {
  constructor(t, e, n, s, r, i) {
    super(e, r, i), this.filterId = t, this.getConvDataStore = n, this.realtimeClient = s, this.handlers = i, this.unsubscribeDebounceMs = 1e4, this.filterCache = new Ps(), this.filter = JSON.parse(this.filterId), this.pendingLoadMore = void 0;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = yield tn({
        filter: this.filter,
        cursor: void 0,
        realtimeClient: this.realtimeClient,
        count: 20
      });
      if (!e.ok) return e;
      if (e.value.conversations === null) return f({
        lastChanged: t,
        stores: null,
        windowEnd: null
      });
      this.filterCache.clear();
      for (const n of e.value.conversations) this.filterCache.move(n.id, "match");
      return en({
        seq: t,
        conversations: e.value.conversations,
        newCursor: e.value.nextCursor,
        getConvDataStore: this.getConvDataStore
      });
    });
  }
  teardownNested(t) {
    t.stores !== null && Object.values(t.stores).forEach((e) => e.unsubscribe());
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      var s;
      for (const r in n.stores) {
        const i = n.stores[r];
        if ((yield (s = i?.store) == null ? void 0 : s.changedBetween(t, e)) === !0) return !0;
      }
      return !1;
    });
  }
  equal(t, e) {
    return t.stores === null && e.stores === null || t.stores !== null && e.stores !== null && !!M(Object.keys(t.stores), Object.keys(e.stores)) && M(t.windowEnd, e.windowEnd);
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      if (e.stores === null) return f({
        snapshot: k([]),
        loadedAll: !0
      });
      const n = yield Promise.all(Object.values(e.stores).map((i) => i.store.getDeep(t))), s = n.find((i) => !i.ok);
      if (s) return s;
      const r = n.filter((i) => i.value.snapshot !== null).map((i) => i.value.snapshot);
      return r.sort((i, a) => {
        var l, o, d, c;
        const u = (o = (l = i.lastMessage) == null ? void 0 : l.createdAt) != null ? o : i.joinedAt;
        return ((c = (d = a.lastMessage) == null ? void 0 : d.createdAt) != null ? c : a.joinedAt) - u;
      }), f({
        snapshot: k(r),
        loadedAll: e.windowEnd === null
      });
    });
  }
  loadMore(t = 20) {
    return h(this, null, function* () {
      if (this.pendingLoadMore) return this.pendingLoadMore;
      const e = j();
      this.pendingLoadMore = e.promise;
      const n = yield this.mostRecentState.resultPromise;
      if (!n.ok) {
        if (n.where === "client") throw e.reject(n.value), this.pendingLoadMore = void 0, n.value;
        {
          const i = B("Loading more conversations", n.value);
          throw e.reject(i), this.pendingLoadMore = void 0, i;
        }
      }
      if (n.value.windowEnd === null) return e.resolve(), void (this.pendingLoadMore = void 0);
      const s = n.value.windowEnd.cursor, r = yield tn({
        filter: this.filter,
        cursor: s,
        realtimeClient: this.realtimeClient,
        count: t
      });
      e.resolve(), this.pendingLoadMore = void 0, yield this.handlers.onLoadedMore({
        type: "virtual.conversations.loadedMore",
        filterId: this.filterId,
        data: r
      });
    });
  }
  loadedMore(t, e) {
    this.mutate(t, (n) => {
      if (n.value.windowEnd === null) return n;
      if (!e.data.ok) return e.data;
      if (e.data.value.conversations === null) return console.warn("[TalkJS] When loading more conversations, the user stopped existing, which should be impossible."), n;
      for (const s of e.data.value.conversations) this.filterCache.move(s.id, "match");
      return en({
        seq: t,
        prevStores: n.value.stores,
        conversations: e.data.value.conversations,
        newCursor: e.data.value.nextCursor,
        getConvDataStore: this.getConvDataStore
      });
    });
  }
  userCreated(t, e) {
    this.mutate(t, (n) => n.value.stores !== null ? n : f({
      lastChanged: n.value.lastChanged,
      stores: {},
      windowEnd: null
    }));
  }
  sideCreated(t, e) {
    const n = Ye(e.state, this.filter), s = this.getConvDataStore(e.state);
    this.mutate(t, (r) => {
      this.filterCache.move(e.conversationId, n ? "match" : "unmatch");
      let i = r.value.stores;
      return i === null && (console.warn("[TalkJS] Received a 'side.created' event when we thought your user didn't exist."), i = {}), Object.hasOwnProperty.call(i, e.conversationId) || this.filterCache.included(e.conversationId) !== !0 ? (s.unsubscribe(), r) : f({
        lastChanged: t,
        stores: R(I({}, i), { [e.conversationId]: s }),
        windowEnd: r.value.windowEnd
      });
    });
  }
  sideDeleted(t, e) {
    this.mutate(t, (n) => {
      var s;
      if (this.filterCache.delete(e.conversationId), !Object.hasOwnProperty.call(n.value.stores, e.conversationId)) return n;
      const r = I({}, n.value.stores);
      return (s = r[e.conversationId]) == null || s.unsubscribe(), delete r[e.conversationId], f({
        lastChanged: t,
        stores: r,
        windowEnd: n.value.windowEnd
      });
    });
  }
  sideEdited(t, e) {
    const n = Wt(e.diff, this.filter);
    this.mutate(t, (s) => h(this, null, function* () {
      return s.value.stores === null ? (console.warn("[TalkJS] Received a 'side.edited' event when we thought your user didn't exist."), s) : this.handleConvDiff(s.value, t, e.conversationId, n, e.diff.lastMessageAt);
    }));
  }
  participantEdited(t, e) {
    if (this.realtimeClient.userId !== e.userId) return;
    const n = Wt(e.diff, this.filter);
    n !== "unchanged" && this.mutate(t, (s) => h(this, null, function* () {
      return s.value.stores === null ? s : this.handleConvDiff(s.value, t, e.conversationId, n, void 0);
    }));
  }
  conversationEdited(t, e) {
    const n = Wt(e.diff, this.filter);
    n !== "unchanged" && this.mutate(t, (s) => h(this, null, function* () {
      return s.value.stores === null ? s : this.handleConvDiff(s.value, t, e.conversationId, n, void 0);
    }));
  }
  handleConvDiff(t, e, n, s, r) {
    return h(this, null, function* () {
      var i, a;
      this.filterCache.move(n, s);
      const l = this.filterCache.included(n), o = Object.hasOwnProperty.call(t.stores, n);
      let d;
      if (l === "unknown") if (d = yield Xe(n, this.realtimeClient), d !== null) {
        const u = Ye(d, this.filter);
        this.filterCache.move(n, u ? "match" : "unmatch");
      } else this.filterCache.move(n, "unmatch");
      const c = this.filterCache.included(n);
      if (!c && o) {
        const u = I({}, t.stores);
        return (i = u[n]) == null || i.unsubscribe(), delete u[n], f({
          lastChanged: e,
          stores: u,
          windowEnd: t.windowEnd
        });
      }
      if (c && !o) {
        if (t.windowEnd === null) {
          const p = this.getConvDataStore(n);
          return f({
            lastChanged: e,
            stores: R(I({}, t.stores), { [n]: p }),
            windowEnd: t.windowEnd
          });
        }
        let u = d;
        if (r !== void 0) {
          if (r >= t.windowEnd.oldestMessageTs) {
            const p = this.getConvDataStore(n);
            return f({
              lastChanged: e,
              stores: R(I({}, t.stores), { [n]: p }),
              windowEnd: t.windowEnd
            });
          }
          return f(t);
        }
        if (u === void 0 && (u = yield Xe(n, this.realtimeClient)), u !== null && u.lastMessageAt >= t.windowEnd.oldestMessageTs) {
          const p = this.getConvDataStore(n);
          return f({
            lastChanged: e,
            stores: R(I({}, t.stores), { [n]: p }),
            windowEnd: t.windowEnd
          });
        }
        return f(t);
      }
      if (r === void 0 || t.windowEnd === null) return f(t);
      if (o && r < t.windowEnd.oldestMessageTs) {
        const u = I({}, t.stores);
        return (a = u[n]) == null || a.unsubscribe(), delete u[n], f({
          lastChanged: e,
          stores: u,
          windowEnd: t.windowEnd
        });
      }
      if (!o && r >= t.windowEnd.oldestMessageTs) {
        const u = this.getConvDataStore(n);
        return f({
          lastChanged: e,
          stores: R(I({}, t.stores), { [n]: u }),
          windowEnd: t.windowEnd
        });
      }
      return f(t);
    });
  }
};
function Xe(t, e) {
  return h(this, null, function* () {
    const n = yield e.call({
      method: "GET",
      path: [
        "me",
        "conversations",
        t
      ],
      data: {},
      flags: { bypassCache: !0 }
    });
    return n.ok ? n.value.data : null;
  });
}
function tn(t) {
  return h(this, arguments, function* ({ filter: e, cursor: n, realtimeClient: s, count: r }) {
    const i = {
      limit: r,
      cursor: n
    };
    n || (i.filter = e);
    const a = yield s.call({
      method: "GET",
      path: ["me", "conversations"],
      data: i,
      flags: { bypassCache: !0 }
    });
    if (a.ok) {
      const { data: l, cursor: o } = a.value.data;
      return f({
        conversations: l,
        nextCursor: o
      });
    }
    return a.ok || a.where !== "server" || a.value.status !== 404 || a.value.errorCode !== "USER_NOT_FOUND" ? a : f({
      conversations: null,
      nextCursor: null
    });
  });
}
function en({ seq: t, prevStores: e, conversations: n, newCursor: s, getConvDataStore: r }) {
  const i = e ? I({}, e) : {};
  for (const a of n) i[a.id] === void 0 && (i[a.id] = r(a));
  return f(s === null ? {
    lastChanged: t,
    stores: i,
    windowEnd: null
  } : {
    lastChanged: t,
    stores: i,
    windowEnd: {
      cursor: s,
      oldestMessageTs: Math.min(...n.map((a) => a.lastMessageAt))
    }
  });
}
var nn = class extends L {
  constructor(t, e, n, s, r) {
    super(t, s, r), this.conversation = e, this.realtimeClient = n, this.unsubscribeDebounceMs = 0;
  }
  get conversationId() {
    return typeof this.conversation == "string" ? this.conversation : this.conversation.id;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = this.realtimeClient.internalSubscribe([
        "me",
        "conversations",
        this.conversationId,
        "messages"
      ]);
      if (typeof this.conversation == "object") return f({
        lastChanged: t,
        snapshot: this.conversation,
        messageWindow: e
      });
      const n = yield this.realtimeClient.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          this.conversationId
        ],
        data: {},
        flags: { bypassCache: !0 }
      });
      let s;
      if (n.ok) s = n.value.data;
      else if (n.where === "server" && n.value.status === 404) s = null;
      else {
        if (n.where !== "server" || n.value.status !== 403 || n.value.errorCode !== "NOT_A_PARTICIPANT") return e.unsubscribe(), n;
        s = null;
      }
      return f({
        lastChanged: t,
        snapshot: s,
        messageWindow: e
      });
    });
  }
  teardownNested(t) {
    var e;
    (e = t.messageWindow) == null || e.unsubscribe();
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      return (yield n.messageWindow.store.lastMessageChangedBetween(t, e)) === !0;
    });
  }
  refetch(t) {
    throw "Do not call refetch on conversation data stores, it can return outdated data. Destroy and remake them instead";
  }
  equal(t, e) {
    return M(t.snapshot, e.snapshot);
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      var n;
      if (!e.snapshot) return f({
        snapshot: null,
        loadedAll: !0
      });
      const s = yield e.messageWindow.store.getDeep(t);
      if (!s.ok) return s;
      const r = s.value.snapshot, i = (n = r?.[0]) != null ? n : null;
      return f({ snapshot: k(R(I({}, e.snapshot), {
        custom: k(e.snapshot.custom),
        welcomeMessages: k(e.snapshot.welcomeMessages),
        lastMessage: i
      })) });
    });
  }
  participantEdited(t, e) {
    this.realtimeClient.userId === e.userId && this.mutate(t, (n) => n.value.snapshot === null ? (console.warn("[TalkJS] Received a 'participant.edited' event for a conversation that we thought didn't exist."), n) : f({
      lastChanged: t,
      snapshot: qt(n.value.snapshot, e.diff),
      messageWindow: n.value.messageWindow
    }));
  }
  conversationEdited(t, e) {
    this.mutate(t, (n) => n.value.snapshot === null ? (console.warn("[TalkJS] Received a 'conversation.edited' event for a conversation that we thought didn't exist."), n) : f({
      lastChanged: t,
      snapshot: qt(n.value.snapshot, e.diff),
      messageWindow: n.value.messageWindow
    }));
  }
  sideEdited(t, e) {
    this.mutate(t, (n) => n.value.snapshot === null ? (console.warn("[TalkJS] Received a 'side.edited' event for a conversation that we thought didn't exist."), n) : f({
      lastChanged: t,
      snapshot: qt(n.value.snapshot, e.diff),
      messageWindow: n.value.messageWindow
    }));
  }
  sideCreated(t, e) {
    this.mutate(t, (n) => n.value.snapshot ? n : f({
      lastChanged: t,
      snapshot: e.state,
      messageWindow: n.value.messageWindow
    }));
  }
  sideDeleted(t, e) {
    this.mutate(t, (n) => n.value.snapshot === null ? n : f({
      lastChanged: t,
      snapshot: null,
      messageWindow: n.value.messageWindow
    }));
  }
  getFromCache() {
    return h(this, null, function* () {
      const t = yield this.mostRecentState.resultPromise;
      return t.ok && t.value.snapshot ? f({
        status: 200,
        data: t.value.snapshot
      }) : O("NOT_IN_CACHE");
    });
  }
};
function qt(t, e) {
  const n = e;
  return {
    id: t.id,
    createdAt: t.createdAt,
    subject: A(t.subject, n.subject),
    photoUrl: A(t.photoUrl, n.photoUrl),
    welcomeMessages: ms(t.welcomeMessages, n.welcomeMessages),
    custom: ae(t.custom, n.custom),
    lastMessageAt: A(t.lastMessageAt, n.lastMessageAt),
    unreadMessageCount: A(t.unreadMessageCount, n.unreadMessageCount),
    isUnread: A(t.isUnread, n.isUnread),
    access: A(t.access, n.access),
    notify: A(t.notify, n.notify),
    readUntil: A(t.readUntil, n.readUntil),
    everyoneReadUntil: A(t.everyoneReadUntil, n.everyoneReadUntil),
    joinedAt: t.joinedAt
  };
}
var Ws = class extends L {
  constructor(t, e, n, s, r) {
    super(t, s, r), this.userId = e, this.realtimeClient = n, this.unsubscribeDebounceMs = 3e4;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = this.realtimeClient.internalSubscribe(["users", this.userId]), n = yield this.realtimeClient.call({
        method: "GET",
        path: [
          "users",
          this.userId,
          "online"
        ],
        data: {},
        flags: { bypassCache: !0 }
      });
      return n.ok || n.where !== "server" || n.value.status !== 404 || n.value.errorCode !== "USER_NOT_FOUND" ? n.ok ? f({
        lastChanged: t,
        user: e,
        data: n.value.data
      }) : n : f({
        lastChanged: t,
        user: e,
        data: null
      });
    });
  }
  equal(t, e) {
    return M(t.data, e.data);
  }
  teardownNested(t) {
    t.user.unsubscribe();
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      return n.user.store.changedBetween(t, e);
    });
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      const n = yield e.user.store.getDeep(t);
      if (!n.ok) return n;
      const s = n.value.snapshot;
      return e.data === null || s === null ? f({ snapshot: null }) : f({ snapshot: k(R(I({}, e.data), { user: s })) });
    });
  }
  userCreated(t, e) {
    const n = this.fetchInitial(t);
    this.mutate(t, (s) => s.value.data !== null ? (n.then((r) => {
      r.ok && this.teardownNested(r.value);
    }), s) : n);
  }
  userOnlineChanged(t, e) {
    this.mutate(t, (n) => n.value.data === null ? n : f({
      lastChanged: t,
      user: n.value.user,
      data: e.diff
    }));
  }
  getFromCache() {
    return h(this, null, function* () {
      const t = yield this.mostRecentState.resultPromise;
      if (!t.ok) return O("NOT_IN_CACHE");
      if (t.value.data === null) return q({
        status: 404,
        errorCode: "USER_NOT_FOUND",
        reasons: ["No user with that ID exists"]
      });
      const e = t.value, { user: n } = e;
      return f({
        status: 200,
        data: I({}, Yt(e, ["user"]).data)
      });
    });
  }
}, sn = class extends L {
  constructor(t, e, n, s, r) {
    super(t, s, r), this.participantData = e, this.realtimeClient = n, this.unsubscribeDebounceMs = 3e4;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      return f({
        lastChanged: t,
        participantData: this.participantData
      });
    });
  }
  teardownNested(t) {
    t.participantData.unsubscribe();
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      return n.participantData.store.changedBetween(t, e);
    });
  }
  equal(t, e) {
    return !0;
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      return e.participantData.store.getDeep(t);
    });
  }
  getSideExists() {
    return this.participantData.store.getSideExists();
  }
}, qs = class extends L {
  constructor(t, e, n, s, r, i, a) {
    super(t, i, a), this.conversationId = e, this.messageId = n, this.emoji = s, this.realtimeClient = r, this.handlers = a, this.unsubscribeDebounceMs = 1e4, this.pendingLoadMore = void 0;
  }
  fetchInitial(t) {
    return h(this, null, function* () {
      const e = yield rn({
        realtimeClient: this.realtimeClient,
        conversationId: this.conversationId,
        messageId: this.messageId,
        emoji: this.emoji,
        count: 30
      });
      return e.ok ? e.value.reactions === null ? f({
        lastChanged: t,
        reactions: null,
        windowEnd: null
      }) : an({
        seq: t,
        reactions: e.value.reactions,
        cursor: e.value.nextCursor,
        realtimeClient: this.realtimeClient
      }) : e;
    });
  }
  teardownNested(t) {
    t.reactions !== null && Object.values(t.reactions).forEach(({ user: e }) => e.unsubscribe());
  }
  anyChildChanged(t, e, n) {
    return h(this, null, function* () {
      var s, r;
      for (const i in n.reactions) {
        const a = n.reactions[i];
        if ((yield (r = (s = a?.user) == null ? void 0 : s.store) == null ? void 0 : r.changedBetween(t, e)) === !0) return !0;
      }
      return !1;
    });
  }
  equal(t, e) {
    if (t.reactions === null && e.reactions === null) return !0;
    if (t.reactions === null || e.reactions === null || !M(Object.keys(t.reactions), Object.keys(e.reactions)) || !M(t.windowEnd, e.windowEnd)) return !1;
    for (const n in t.reactions) {
      const s = n;
      if (t.reactions[s].createdAt !== e.reactions[s].createdAt) return !1;
    }
    return !0;
  }
  loadNested(t, e) {
    return h(this, null, function* () {
      if (e.reactions === null) return f({
        snapshot: null,
        loadedAll: !0
      });
      const n = yield Promise.all(Object.values(e.reactions).map((i) => i.user.store.getDeep(t).then((a) => ({
        user: a,
        createdAt: i.createdAt
      })))), s = n.find((i) => !i.user.ok);
      if (s) return s.user;
      const r = n.filter((i) => i.user.value.snapshot !== null).map((i) => ({
        user: i.user.value.snapshot,
        createdAt: i.createdAt
      })).map((i) => k(i));
      return r.sort((i, a) => i.createdAt - a.createdAt), f({
        snapshot: k(r),
        loadedAll: e.windowEnd === null
      });
    });
  }
  loadMore(t = 30) {
    return h(this, null, function* () {
      if (this.pendingLoadMore) return this.pendingLoadMore;
      const e = j();
      this.pendingLoadMore = e.promise;
      const n = yield this.mostRecentState.resultPromise;
      if (!n.ok) {
        if (n.where === "client") throw e.reject(n.value), this.pendingLoadMore = void 0, n.value;
        {
          const i = B("Loading more user reactions", n.value);
          throw e.reject(i), this.pendingLoadMore = void 0, i;
        }
      }
      if (n.value.windowEnd === null) return e.resolve(), void (this.pendingLoadMore = void 0);
      const s = n.value.windowEnd.cursor, r = yield rn({
        count: t,
        cursor: s,
        conversationId: this.conversationId,
        messageId: this.messageId,
        emoji: this.emoji,
        realtimeClient: this.realtimeClient
      });
      e.resolve(), this.pendingLoadMore = void 0, yield this.handlers.onLoadedMore({
        type: "virtual.reactions.loadedMore",
        conversationId: this.conversationId,
        messageId: this.messageId,
        emoji: this.emoji,
        data: r
      });
    });
  }
  loadedMore(t, e) {
    this.mutate(t, (n) => n.value.windowEnd === null ? n : e.data.ok ? e.data.value.reactions === null ? (console.warn("[TalkJS] When loading more user reactions, the message was no longer visible. We should have been told about this."), n) : an({
      seq: t,
      prevReactions: n.value.reactions,
      reactions: e.data.value.reactions,
      cursor: e.data.value.nextCursor,
      realtimeClient: this.realtimeClient
    }) : e.data);
  }
  reactionAdded(t, e) {
    const n = this.realtimeClient.internalSubscribe(["users", e.userId]);
    this.mutate(t, (s) => {
      let r = s.value.reactions;
      return r === null && (console.warn("[TalkJS] Received a 'reaction.added' event when we thought the message didn't exist."), r = {}), Object.hasOwnProperty.call(r, e.userId) ? (n.unsubscribe(), s) : f({
        lastChanged: t,
        reactions: R(I({}, r), { [e.userId]: {
          user: n,
          createdAt: e.createdAt
        } }),
        windowEnd: s.value.windowEnd
      });
    });
  }
  reactionRemoved(t, e) {
    this.mutate(t, (n) => {
      var s, r;
      if (!Object.hasOwnProperty.call(n.value.reactions, e.userId)) return n;
      const i = I({}, n.value.reactions);
      return (r = (s = i[e.userId]) == null ? void 0 : s.user) == null || r.unsubscribe(), delete i[e.userId], f({
        lastChanged: t,
        reactions: i,
        windowEnd: n.value.windowEnd
      });
    });
  }
  sideOrMessageCreated(t, e) {
    const n = this.fetchInitial(t);
    this.mutate(t, (s) => s.value.reactions !== null ? (n.then((r) => {
      r.ok && this.teardownNested(r.value);
    }), s) : n);
  }
  sideOrMessageDeleted(t, e) {
    this.mutate(t, (n) => n.value.reactions === null ? n : (this.teardownNested(n.value), f({
      lastChanged: t,
      reactions: null,
      windowEnd: null
    })));
  }
};
function rn(t) {
  return h(this, arguments, function* ({ cursor: e, realtimeClient: n, conversationId: s, messageId: r, emoji: i, count: a }) {
    const l = {
      limit: a,
      cursor: e
    }, o = yield n.call({
      method: "GET",
      path: [
        "me",
        "conversations",
        s,
        "messages",
        r,
        "reactions",
        i
      ],
      data: l,
      flags: { bypassCache: !0 }
    });
    if (o.ok) {
      const { data: d, cursor: c } = o.value.data;
      return f({
        reactions: d,
        nextCursor: c
      });
    }
    return (o.ok || o.where !== "server" || o.value.status !== 404) && (o.ok || o.where !== "server" || o.value.status !== 403 || o.value.errorCode !== "NOT_A_PARTICIPANT") ? o : f({
      reactions: null,
      nextCursor: null
    });
  });
}
function an({ seq: t, prevReactions: e, reactions: n, cursor: s, realtimeClient: r }) {
  const i = e ? I({}, e) : {};
  for (const a of n) i[a.userId] === void 0 && (i[a.userId] = {
    user: r.internalSubscribe(["users", a.userId]),
    createdAt: a.createdAt
  });
  return f(s === null ? {
    lastChanged: t,
    reactions: i,
    windowEnd: null
  } : {
    lastChanged: t,
    reactions: i,
    windowEnd: {
      cursor: s,
      maxCreatedAt: n[n.length - 1].createdAt
    }
  });
}
var on = class {
  constructor() {
    this.children = /* @__PURE__ */ new Map();
  }
}, ln = class {
  constructor() {
    this.root = new on();
  }
  set(t, e) {
    this._set(t, e);
  }
  setVirtual(t, e) {
    this._set(t, e);
  }
  _set(t, e) {
    let n = this.root;
    for (const s of t) n.children.has(s) || n.children.set(s, new on()), n = n.children.get(s);
    n.value = e;
  }
  delete(...t) {
    return this._delete(this.root, t, 0);
  }
  deleteVirtual(...t) {
    return this._delete(this.root, t, 0);
  }
  _delete(t, e, n) {
    if (n === e.length) return t.value !== void 0 && (t.value = void 0, !0);
    const s = e[n], r = t.children.get(s);
    if (!r) return !1;
    const i = this._delete(r, e, n + 1);
    return i && r.value === void 0 && r.children.size === 0 && t.children.delete(s), i;
  }
  get(...t) {
    return this._get(t);
  }
  getVirtual(...t) {
    return this._get(t);
  }
  _get(t) {
    let e = this.root;
    for (const n of t) {
      const s = e.children.get(n);
      if (!s) return;
      e = s;
    }
    return e.value;
  }
  list(...t) {
    const e = [];
    return this._list(this.root, t, 0, e), e;
  }
  listVirtual(...t) {
    const e = [];
    return this._list(this.root, t, 0, e), e;
  }
  _list(t, e, n, s) {
    if (n === e.length) return void (t.value !== void 0 && s.push(t.value));
    const r = e[n];
    if (r === X) for (const i of t.children.values()) this._list(i, e, n + 1, s);
    else {
      const i = t.children.get(r);
      i && this._list(i, e, n + 1, s);
    }
  }
  forEach(t) {
    this._forEach(this.root, t);
  }
  _forEach(t, e) {
    t.value !== void 0 && e(t.value);
    for (const n of t.children.values()) this._forEach(n, e);
  }
}, Bs = class {
  constructor(t, e, n) {
    this.realtimeClient = n, this.storeRegistry = new ln(), this.emitMutex = new On(), this.virtualSeqOffset = 0, this.realPublishSeq = 0, this.refetchOnNextNetworkLoss = !0, this.connection = new Is(t, e, {
      onUpstreamRestarting: () => {
        this.refetchOnNextNetworkLoss = !1;
      },
      onReady: () => {
        this.refetchOnNextNetworkLoss = !0;
      },
      onResubscribeSent: () => {
        if (this.virtualSeqOffset += this.realPublishSeq, this.realPublishSeq = 0, this.refetchOnNextNetworkLoss) {
          this.virtualSeqOffset++;
          const s = this.virtualSeq;
          this.refetchAll(s), this.emitAll(s);
        }
      },
      onResubscribeError: (s, r) => {
        var i;
        (i = this.storeRegistry.get(...s)) == null || i.setError(r);
      },
      onPublish: (s, r) => {
        this.realPublishSeq = s;
        const i = this.virtualSeq;
        for (const a of r) this.handlePublish(i, a);
        this.emitAll(i);
      }
    });
  }
  get virtualSeq() {
    return this.realPublishSeq + this.virtualSeqOffset;
  }
  sync() {
    return h(this, null, function* () {
      yield this.connection.sync(), yield this.emitMutex.sync();
    });
  }
  refetchAll(t) {
    this.storeRegistry.forEach((e) => {
      e instanceof Fe || e instanceof nn || e.refetch(t);
    });
  }
  emitAll(t) {
    return this.emitMutex.runExclusive(() => h(this, null, function* () {
      const e = [];
      this.storeRegistry.forEach((n) => e.push(n.emit(t))), yield Promise.all(e);
    }));
  }
  handlePublish(t, e) {
    var n, s, r, i, a, l, o, d, c, u, p, m, g, y, C, w, b, v, S, T, G, ut, me, ve, ye, be, we, ke, Ce, Se, Ie, Te, xe, Ee;
    switch (e.type) {
      case "user.created":
        (n = this.storeRegistry.get("users", e.userId)) == null || n.userCreated(t, e), this.storeRegistry.list("<filtered>", "me", "conversations", Y).forEach((x) => x.userCreated(t, e)), (s = this.storeRegistry.get("users", e.userId, "online")) == null || s.userCreated(t, e);
        return;
      case "user.edited":
        (r = this.storeRegistry.get("users", e.userId)) == null || r.userEdited(t, e);
        return;
      case "side.created":
        (i = this.storeRegistry.get("me", "conversations", e.conversationId, "messages")) == null || i.sideCreated(t, e), (a = this.storeRegistry.get("me", "conversations", e.conversationId, "participants")) == null || a.sideCreated(t, e), this.storeRegistry.list("<filtered>", "me", "conversations", Y).forEach((x) => x.sideCreated(t, e)), this.storeRegistry.list("me", "conversations", e.conversationId, "messages", st, "reactions", ht).forEach((x) => x.sideOrMessageCreated(t, e)), (l = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId)) == null || l.sideCreated(t, e), this.storeRegistry.listVirtual("<virtual>", "me", "conversations", e.conversationId, "participants", V).forEach((x) => x.sideCreated(t, e));
        return;
      case "side.edited":
        this.storeRegistry.list("<filtered>", "me", "conversations", Y).forEach((x) => x.sideEdited(t, e)), (o = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId)) == null || o.sideEdited(t, e);
        return;
      case "side.deleted":
        (c = (d = this.storeRegistry) == null ? void 0 : d.get("me", "conversations", e.conversationId, "messages")) == null || c.sideDeleted(t, e), (p = (u = this.storeRegistry) == null ? void 0 : u.get("me", "conversations", e.conversationId, "participants")) == null || p.sideDeleted(t, e), (g = (m = this.storeRegistry) == null ? void 0 : m.get("me", "conversations", e.conversationId, "typing")) == null || g.sideDeleted(t, e), this.storeRegistry.list("<filtered>", "me", "conversations", Y).forEach((x) => x.sideDeleted(t, e)), this.storeRegistry.list("me", "conversations", e.conversationId, "messages", st, "reactions", ht).forEach((x) => x.sideOrMessageDeleted(t, e)), (y = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId)) == null || y.sideDeleted(t, e), this.storeRegistry.listVirtual("<virtual>", "me", "conversations", e.conversationId, "participants", V).forEach((x) => x.sideDeleted(t, e));
        return;
      case "conversation.edited":
        this.storeRegistry.list("<filtered>", "me", "conversations", Y).forEach((x) => x.conversationEdited(t, e)), (C = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId)) == null || C.conversationEdited(t, e);
        return;
      case "message.created":
        (w = this.storeRegistry.get("me", "conversations", e.conversationId, "messages")) == null || w.messageCreated(t, e), this.storeRegistry.list("me", "conversations", e.conversationId, "messages", st, "reactions", ht).forEach((x) => x.sideOrMessageCreated(t, e));
        return;
      case "message.edited":
        (b = this.storeRegistry.get("me", "conversations", e.conversationId, "messages")) == null || b.messageEdited(t, e);
        return;
      case "message.deleted":
        (v = this.storeRegistry.get("me", "conversations", e.conversationId, "messages")) == null || v.messageDeleted(t, e), this.storeRegistry.list("me", "conversations", e.conversationId, "messages", st, "reactions", ht).forEach((x) => x.sideOrMessageDeleted(t, e));
        return;
      case "typing.available":
        (S = this.storeRegistry.get("me", "conversations", e.conversationId, "typing")) == null || S.typingAvailable(t, e);
        return;
      case "typing.changed":
        (T = this.storeRegistry.get("me", "conversations", e.conversationId, "typing")) == null || T.typingChanged(t, e);
        return;
      case "conversation.cleared":
        (G = this.storeRegistry.get("me", "conversations", e.conversationId, "messages")) == null || G.conversationCleared(t, e);
        return;
      case "participant.edited":
        this.storeRegistry.list("<filtered>", "me", "conversations", Y).forEach((x) => x.participantEdited(t, e)), (ut = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId)) == null || ut.participantEdited(t, e), (me = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId, "participants", e.userId)) == null || me.participantEdited(t, e);
        return;
      case "participant.created":
        (ve = this.storeRegistry.get("me", "conversations", e.conversationId, "participants")) == null || ve.participantCreated(t, e), (ye = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId, "participants", e.userId)) == null || ye.participantCreated(t, e);
        return;
      case "participant.deleted":
        (be = this.storeRegistry.get("me", "conversations", e.conversationId, "participants")) == null || be.participantDeleted(t, e), (we = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e.conversationId, "participants", e.userId)) == null || we.participantDeleted(t, e);
        return;
      case "user.online.changed":
        (ke = this.storeRegistry.get("users", e.userId, "online")) == null || ke.userOnlineChanged(t, e);
        return;
      case "reaction.added":
        (Ce = this.storeRegistry.get("me", "conversations", e.conversationId, "messages", e.messageId, "reactions", e.emoji)) == null || Ce.reactionAdded(t, e);
        return;
      case "reaction.removed":
        (Se = this.storeRegistry.get("me", "conversations", e.conversationId, "messages", e.messageId, "reactions", e.emoji)) == null || Se.reactionRemoved(t, e);
        return;
      case "virtual.conversations.loadedMore":
        (Ie = this.storeRegistry.get("<filtered>", "me", "conversations", e.filterId)) == null || Ie.loadedMore(t, e);
        return;
      case "virtual.messages.loadedMore":
        (Te = this.storeRegistry.get("me", "conversations", e.conversationId, "messages")) == null || Te.loadedMore(t, e);
        return;
      case "virtual.participants.loadedMore":
        (xe = this.storeRegistry.get("me", "conversations", e.conversationId, "participants")) == null || xe.loadedMore(t, e);
        return;
      case "virtual.reactions.loadedMore":
        (Ee = this.storeRegistry.get("me", "conversations", e.conversationId, "messages", e.messageId, "reactions", e.emoji)) == null || Ee.loadedMore(t, e);
        return;
    }
  }
  call(t) {
    return h(this, arguments, function* ({ method: e, path: n, data: s, headers: r, flags: i }) {
      if (i?.bypassCache !== !0 && e === "GET") {
        if (D(n, [
          "me",
          "conversations",
          W,
          "messages",
          st
        ])) {
          const a = this.storeRegistry.get("me", "conversations", n[2], "messages");
          if (a) {
            yield this.sync();
            const l = yield a.getMessageFromCache(n[4]);
            if (l.value !== "NOT_IN_CACHE") return l;
          }
        } else if (D(n, [
          "me",
          "conversations",
          W,
          "participants",
          V
        ])) {
          const a = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", n[2], "participants", n[4]);
          if (a) {
            yield this.sync();
            const l = yield a.getFromCache();
            if (l.value !== "NOT_IN_CACHE") return l;
          }
        } else if (D(n, [
          "me",
          "conversations",
          W
        ])) {
          const a = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", n[2]);
          if (a) {
            yield this.sync();
            const l = yield a.getFromCache();
            if (l.value !== "NOT_IN_CACHE") return l;
          }
        } else if (!D(n, ["me", "conversations"])) {
          const a = this.storeRegistry.get(...n);
          if (a && "getFromCache" in a) {
            yield this.sync();
            const l = yield a.getFromCache();
            if (l.value !== "NOT_IN_CACHE") return l;
          }
        }
      }
      return this.connection.call({
        method: e,
        path: n,
        data: s,
        headers: r ?? {}
      });
    });
  }
  subscribe(t, e) {
    const n = this.getOrCreateStore(t), s = j(), r = j();
    s.promise.catch(() => {
    }), r.promise.catch(() => {
    });
    const i = {
      state: {
        type: "pending",
        latestSnapshot: void 0
      },
      connected: s.promise,
      terminated: r.promise,
      loadMore: (l) => h(this, null, function* () {
        "loadMore" in n && (yield n.loadMore(l));
      }),
      unsubscribe: () => {
      }
    };
    n instanceof sn && (i._sideExists = () => n.getSideExists());
    const a = n.listen((l) => {
      if (l.ok) {
        const o = !("loadedAll" in l.value) || l.value.loadedAll, d = {
          type: "active",
          latestSnapshot: l.value.snapshot,
          loadedAll: o
        };
        i.state = d, e?.(l.value.snapshot, o), s.resolve(d);
      } else if (i.state.type === "pending" || i.state.type === "active") {
        if (l.where === "server") {
          const o = {
            type: "error",
            error: new Error(B(`Subscribe to ${t.join("/")}`, l.value))
          };
          i.state = o, r.resolve(o), s.reject("Subscription encountered an error during initial connection");
          return;
        }
        if (l.value === "SESSION_DESTROYED") {
          const o = {
            type: "error",
            error: /* @__PURE__ */ new Error("Session was destroyed causing all subscriptions to be terminated")
          };
          i.state = o, r.resolve(o), s.reject("Subscription encountered an error during initial connection");
          return;
        }
        if (l.value === "UNSUBSCRIBED" || l.value === "TERMINATED") return;
        l.value;
      }
    });
    return i.unsubscribe = () => {
      if (i.state.type === "pending" || i.state.type === "active") {
        a();
        const l = { type: "unsubscribed" };
        i.state = l, r.resolve(l), s.reject("Subscription was unsubscribed before connecting");
      }
    }, i;
  }
  onVirtualPublish(t) {
    return h(this, null, function* () {
      this.virtualSeqOffset++;
      const e = this.virtualSeq;
      this.handlePublish(e, t), yield this.emitAll(e);
    });
  }
  getOrCreateStore(t) {
    const e = this.storeRegistry.get(...t);
    if (e) return e;
    this.connection.subscribe(t).then((s) => {
      s.ok || n.setError(s);
    });
    const n = this.instantiateStore(t, () => {
      this.storeRegistry.delete(...t), this.connection.unsubscribe(t);
    });
    return this.storeRegistry.set(t, n), n;
  }
  destroy() {
    this.storeRegistry = new ln(), this.connection.destroy();
  }
  isConnected() {
    return this.connection.isConnected();
  }
  instantiateStore(t, e) {
    if (D(t, ["users", V])) return new As(this.virtualSeq, t[1], this.realtimeClient, this.emitMutex, { onTeardown: e });
    if (D(t, [
      "me",
      "conversations",
      W
    ])) return new Ns(this.virtualSeq, this.subscribeConvData(t[2]), this.realtimeClient, this.emitMutex, { onTeardown: e });
    if (D(t, [
      "me",
      "conversations",
      W,
      "messages"
    ])) return new Rs(this.virtualSeq, t[2], this.realtimeClient, this.emitMutex, {
      onTeardown: e,
      onLoadedMore: (n) => this.onVirtualPublish(n)
    });
    if (D(t, [
      "me",
      "conversations",
      W,
      "participants"
    ])) return new Ds(this.virtualSeq, (n) => this.subscribeParticipantData(t[2], n), t[2], this.realtimeClient, this.emitMutex, {
      onTeardown: e,
      onLoadedMore: (n) => this.onVirtualPublish(n)
    });
    if (D(t, [
      "me",
      "conversations",
      W,
      "participants",
      V
    ])) return new sn(this.virtualSeq, this.subscribeParticipantData(t[2], t[4]), this.realtimeClient, this.emitMutex, { onTeardown: e });
    if (D(t, [
      "me",
      "conversations",
      W,
      "typing"
    ])) return new Os(this.virtualSeq, t[2], this.realtimeClient, this.emitMutex, { onTeardown: e });
    if (D(t, [
      "<filtered>",
      "me",
      "conversations",
      Y
    ])) return new $s(t[3], this.virtualSeq, (n) => this.subscribeConvData(n), this.realtimeClient, this.emitMutex, {
      onTeardown: e,
      onLoadedMore: (n) => this.onVirtualPublish(n)
    });
    if (D(t, [
      "users",
      V,
      "online"
    ])) return new Ws(this.virtualSeq, t[1], this.realtimeClient, this.emitMutex, { onTeardown: e });
    if (D(t, [
      "me",
      "conversations",
      W,
      "messages",
      st,
      "reactions",
      ht
    ])) return new qs(this.virtualSeq, t[2], t[4], t[6], this.realtimeClient, this.emitMutex, {
      onTeardown: e,
      onLoadedMore: (n) => this.onVirtualPublish(n)
    });
    throw "Unreachable";
  }
  subscribeConvData(t) {
    const e = typeof t == "string" ? t : t.id, n = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", e);
    if (n) return {
      store: n,
      unsubscribe: n.registerInternalSubscription()
    };
    const s = new nn(this.virtualSeq, t, this.realtimeClient, this.emitMutex, { onTeardown: () => {
      this.storeRegistry.deleteVirtual("<virtual>", "me", "conversations", e);
    } });
    return this.storeRegistry.setVirtual([
      "<virtual>",
      "me",
      "conversations",
      e
    ], s), {
      store: s,
      unsubscribe: s.registerInternalSubscription()
    };
  }
  subscribeParticipantData(t, e) {
    const n = typeof e == "string" ? e : e.id, s = this.storeRegistry.getVirtual("<virtual>", "me", "conversations", t, "participants", n);
    if (s) return {
      store: s,
      unsubscribe: s.registerInternalSubscription()
    };
    const r = new Fe(this.virtualSeq, t, e, this.realtimeClient, this.emitMutex, { onTeardown: () => {
      this.storeRegistry.deleteVirtual("<virtual>", "me", "conversations", t, "participants", n);
    } });
    return this.storeRegistry.setVirtual([
      "<virtual>",
      "me",
      "conversations",
      t,
      "participants",
      n
    ], r), {
      store: r,
      unsubscribe: r.registerInternalSubscription()
    };
  }
}, Ls = class {
  constructor(t, e) {
    this.id = t, this._realtimeClient = e;
  }
  get brandedId() {
    return this.id;
  }
  get() {
    return h(this, null, function* () {
      const t = this.subscribe();
      yield t.connected.catch(() => {
        throw new Error("GET User failed, could not fetch user");
      }), yield this._realtimeClient.sync();
      const e = t.state;
      if (t.unsubscribe(), e.type === "active") return e.latestSnapshot;
      throw e.type === "error" ? e.error : "Unreachable";
    });
  }
  set(t) {
    return h(this, null, function* () {
      t.role === null && (t.role = "default");
      const e = typeof t.email == "string" ? [t.email] : t.email, n = typeof t.phone == "string" ? [t.phone] : t.phone, s = yield this._realtimeClient.call({
        method: "PUT",
        path: ["users", this.brandedId],
        data: R(I({}, t), {
          email: e,
          phone: n
        })
      });
      _("Set user " + this.id, s);
    });
  }
  createIfNotExists(t) {
    return h(this, null, function* () {
      t.role === void 0 && (t.role = "default");
      const e = typeof t.email == "string" ? [t.email] : t.email, n = typeof t.phone == "string" ? [t.phone] : t.phone, s = yield this._realtimeClient.call({
        method: "POST",
        path: ["users", this.brandedId],
        data: R(I({}, t), {
          email: e,
          phone: n
        })
      });
      (s.ok || s.where !== "server" || s.value.status != 409) && _(`Create user ${this.id} if not exists`, s);
    });
  }
  subscribe(t) {
    return this._realtimeClient.subscribe(["users", this.brandedId], t);
  }
  subscribeOnline(t) {
    return this._realtimeClient.subscribe([
      "users",
      this.brandedId,
      "online"
    ], t);
  }
};
function Gs(t) {
  const e = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
  let n = 0;
  const s = [], r = t === n;
  n = t;
  const i = new Array(8);
  for (let l = 7; l >= 0; l--) i[l] = e.charAt(t % 64), t = Math.floor(t / 64);
  if (t !== 0) throw new Error("We should have converted the entire timestamp.");
  let a = i.join("");
  if (r) {
    let l = 11;
    for (; l >= 0 && s[l] === 63; l--) s[l] = 0;
    s[l]++;
  } else for (let l = 0; l < 12; l++) s[l] = Math.floor(64 * Math.random());
  for (let l = 0; l < 12; l++) a += e.charAt(s[l]);
  if (a.length != 20) throw new Error("Length should be 20.");
  return a;
}
var mt = (t, e, n = void 0) => (function(s, r) {
  return s.reduce((i, a, l) => i.concat(r(a, l)), []);
})(t, (s) => {
  if (typeof s == "string") return e(s, n);
  switch (s.type) {
    case "bold":
    case "italic":
    case "strikethrough":
    case "blockquote":
    case "bulletlist":
    case "bulletList":
    case "bulletpoint":
    case "bulletPoint":
      return [{
        type: s.type,
        children: mt(s.children, e, s.type)
      }];
    case "link":
      return [{
        type: s.type,
        url: s.url,
        children: mt(s.children, e, s.type)
      }];
    case "actionlink":
    case "actionLink":
    case "actionbutton":
    case "actionButton":
      return [{
        type: s.type,
        action: s.action,
        params: s.params,
        children: mt(s.children, e, s.type)
      }];
    case "mention":
    case "autolink":
    case "autoLink":
    case "codeblock":
    case "codeBlock":
    case "codespan":
    case "codeSpan":
    case "suppressed":
    case "emoji":
    case "customemoji":
    case "customEmoji":
      return [s];
  }
});
function J(t, e) {
  return (n) => {
    const s = n;
    let r = 0;
    const i = [];
    for (const a of Dn(n, t)) {
      a.index - r > 0 && i.push(s.substring(r, a.index));
      const l = e(a);
      Array.isArray(l) ? i.push(...l) : i.push(l), r = a.index + a[0].length;
    }
    return r < n.length && i.push(n.substring(r)), i;
  };
}
var cn = "’'()[]{}<>:,‒–—―…!.«»-‐?‘’“”;/⁄␠·&@*\\•^¤¢$€£¥₩₪†‡°¡¿¬#№%‰‱¶′§~¨_|¦⁂☞∴‽※".replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), ne = ((t) => (t[t.italic = 1] = "italic", t[t.strikethrough = 2] = "strikethrough", t[t.bold = 4] = "bold", t))(ne || {}), Fs = [
  0,
  1,
  2,
  3,
  4,
  5,
  6
].map((t) => {
  const e = [];
  return 1 & t || e.push(/_([^\s_].*?[^\s_])_|_([^\s_])_/), 2 & t || e.push(/~([^\s~].*?[^\s~])~|~([^\s~])~/), 4 & t || e.push(/\*([^\s*].*?[^\s*])\*|\*([^\s*])\*/), new RegExp(e.map((n) => n.source).join("|"), "g");
}), Hs = {
  _: 1,
  "*": 4,
  "~": 2
};
function zs(t) {
  return jn(t, 0);
}
function jn(t, e = 0) {
  const n = Fs[e], s = n ? (function(r) {
    const i = J(Js.getOrCompute(r, () => new RegExp(`(?:^|[\\s${cn}])(?:${r.source})(?=[\\s${cn}]|$)`, "g")), (a) => {
      const l = a[0][1], o = a[1] || a[2] || a[3] || a[4] || a[5] || a[6];
      return [" ", {
        type: ne[Hs[l]],
        children: [o]
      }];
    });
    return (a) => {
      const [l, ...o] = i(" " + a);
      return l.length > 1 && o.unshift(l.substring(1)), o;
    };
  })(n) : () => [t];
  return mt(s(t), (r, i) => i === "bold" || i === "italic" || i === "strikethrough" ? jn(r, e | ne[i]) : [r]);
}
var Js = (function() {
  const t = (function() {
    try {
      return /* @__PURE__ */ new WeakMap();
    } catch {
      const n = {
        has: () => !1,
        get: () => {
        },
        set: () => n
      };
      return n;
    }
  })();
  return { getOrCompute(e, n) {
    if (t.has(e)) return t.get(e);
    const s = n();
    return t.set(e, s), s;
  } };
})(), se = function(t, e) {
  return se = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
    n.__proto__ = s;
  } || function(n, s) {
    for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (n[r] = s[r]);
  }, se(t, e);
};
function bt(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function n() {
    this.constructor = t;
  }
  se(t, e), t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var N = function() {
  return N = Object.assign || function(t) {
    for (var e, n = 1, s = arguments.length; n < s; n++) for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t;
  }, N.apply(this, arguments);
}, Ys = Object.prototype.hasOwnProperty;
function U(t) {
  return typeof t == "boolean";
}
function K(t, e) {
  for (var n = t.length - 1; n >= 0; n--) e(t[n]) === !0 && t.splice(n, 1);
}
function Z(t) {
  throw new Error("Unhandled case for value: '".concat(t, "'"));
}
var It = /\s+/, Un = (function() {
  function t(e) {
    e === void 0 && (e = {}), this.tagName = "", this.attrs = {}, this.innerHTML = "", this.tagName = e.tagName || "", this.attrs = e.attrs || {}, this.innerHTML = e.innerHtml || e.innerHTML || "";
  }
  return t.prototype.setTagName = function(e) {
    return this.tagName = e, this;
  }, t.prototype.getTagName = function() {
    return this.tagName;
  }, t.prototype.setAttr = function(e, n) {
    return this.getAttrs()[e] = n, this;
  }, t.prototype.getAttr = function(e) {
    return this.getAttrs()[e];
  }, t.prototype.setAttrs = function(e) {
    return Object.assign(this.getAttrs(), e), this;
  }, t.prototype.getAttrs = function() {
    return this.attrs;
  }, t.prototype.setClass = function(e) {
    return this.setAttr("class", e);
  }, t.prototype.addClass = function(e) {
    for (var n, s = this.getClass(), r = s ? s.split(It) : [], i = e.split(It); n = i.shift(); ) r.indexOf(n) === -1 && r.push(n);
    return this.getAttrs().class = r.join(" "), this;
  }, t.prototype.removeClass = function(e) {
    for (var n, s = this.getClass(), r = s ? s.split(It) : [], i = e.split(It); r.length && (n = i.shift()); ) {
      var a = r.indexOf(n);
      a !== -1 && r.splice(a, 1);
    }
    return this.getAttrs().class = r.join(" "), this;
  }, t.prototype.getClass = function() {
    return this.getAttrs().class || "";
  }, t.prototype.hasClass = function(e) {
    return (" " + this.getClass() + " ").indexOf(" " + e + " ") !== -1;
  }, t.prototype.setInnerHTML = function(e) {
    return this.innerHTML = e, this;
  }, t.prototype.setInnerHtml = function(e) {
    return this.setInnerHTML(e);
  }, t.prototype.getInnerHTML = function() {
    return this.innerHTML || "";
  }, t.prototype.getInnerHtml = function() {
    return this.getInnerHTML();
  }, t.prototype.toAnchorString = function() {
    var e = this.getTagName(), n = this.buildAttrsStr();
    return [
      "<",
      e,
      n = n ? " " + n : "",
      ">",
      this.getInnerHtml(),
      "</",
      e,
      ">"
    ].join("");
  }, t.prototype.buildAttrsStr = function() {
    var e = this.getAttrs(), n = [];
    for (var s in e) Ys.call(e, s) && n.push(s + '="' + e[s] + '"');
    return n.join(" ");
  }, t;
})();
function un(t) {
  var e = "";
  return t.scheme && t.host && (e += t.scheme + "://"), t.host && (e += t.host), t.path && (e += "/" + t.path), t.query && (e += "?" + t.query), t.fragment && (e += "#" + t.fragment), e;
}
function Bt(t, e, n) {
  var s = e / 2, r = Math.ceil(s), i = -1 * Math.floor(s), a = "";
  return i < 0 && (a = t.substr(i)), t.substr(0, r) + n + a;
}
var Vs = (function() {
  function t(e) {
    e === void 0 && (e = {}), this.newWindow = !1, this.truncate = {}, this.className = "", this.newWindow = e.newWindow || !1, this.truncate = e.truncate || {}, this.className = e.className || "";
  }
  return t.prototype.build = function(e) {
    return new Un({
      tagName: "a",
      attrs: this.createAttrs(e),
      innerHtml: this.processAnchorText(e.getAnchorText())
    });
  }, t.prototype.createAttrs = function(e) {
    var n = { href: e.getAnchorHref() }, s = this.createCssClass(e);
    return s && (n.class = s), this.newWindow && (n.target = "_blank", n.rel = "noopener noreferrer"), this.truncate.length && this.truncate.length < e.getAnchorText().length && (n.title = e.getAnchorHref()), n;
  }, t.prototype.createCssClass = function(e) {
    var n = this.className;
    if (n) {
      for (var s = [n], r = e.getCssClassSuffixes(), i = 0, a = r.length; i < a; i++) s.push(n + "-" + r[i]);
      return s.join(" ");
    }
    return "";
  }, t.prototype.processAnchorText = function(e) {
    return e = this.doTruncate(e);
  }, t.prototype.doTruncate = function(e) {
    var n = this.truncate;
    if (!n.length) return e;
    var s = n.length, r = n.location;
    return r === "smart" ? (function(i, a, l) {
      var o, d;
      if (l == null ? (l = "&hellip;", d = 3, o = 8) : (d = l.length, o = l.length), i.length <= a) return i;
      var c = a - d, u = (function(b) {
        var v = {}, S = b, T = S.match(/^([a-z]+):\/\//i);
        return T && (v.scheme = T[1], S = S.slice(T[0].length)), (T = S.match(/^(.*?)(?=(\?|#|\/|$))/i)) && (v.host = T[1], S = S.slice(T[0].length)), (T = S.match(/^\/(.*?)(?=(\?|#|$))/i)) && (v.path = T[1], S = S.slice(T[0].length)), (T = S.match(/^\?(.*?)(?=(#|$))/i)) && (v.query = T[1], S = S.slice(T[0].length)), (T = S.match(/^#(.*?)$/i)) && (v.fragment = T[1]), v;
      })(i);
      if (u.query) {
        var p = u.query.match(/^(.*?)(?=(\?|#))(.*?)$/i);
        p && (u.query = u.query.substr(0, p[1].length), i = un(u));
      }
      if (i.length <= a || (u.host && (u.host = u.host.replace(/^www\./, ""), i = un(u)), i.length <= a)) return i;
      var m = "";
      if (u.host && (m += u.host), m.length >= c) return u.host.length === a ? (u.host.substr(0, a - d) + l).substr(0, c + o) : Bt(m, c, l).substr(0, c + o);
      var g = "";
      if (u.path && (g += "/" + u.path), u.query && (g += "?" + u.query), g) {
        if ((m + g).length >= c) return (m + g).length == a ? (m + g).substr(0, a) : (m + Bt(g, c - m.length, l)).substr(0, c + o);
        m += g;
      }
      if (u.fragment) {
        var y = "#" + u.fragment;
        if ((m + y).length >= c) return (m + y).length == a ? (m + y).substr(0, a) : (m + Bt(y, c - m.length, l)).substr(0, c + o);
        m += y;
      }
      if (u.scheme && u.host) {
        var C = u.scheme + "://";
        if ((m + C).length < c) return (C + m).substr(0, a);
      }
      if (m.length <= a) return m;
      var w = "";
      return c > 0 && (w = m.substr(-1 * Math.floor(c / 2))), (m.substr(0, Math.ceil(c / 2)) + l + w).substr(0, c + o);
    })(e, s) : r === "middle" ? (function(i, a, l) {
      if (i.length <= a) return i;
      var o, d;
      l == null ? (l = "&hellip;", o = 8, d = 3) : (o = l.length, d = l.length);
      var c = a - d, u = "";
      return c > 0 && (u = i.substr(-1 * Math.floor(c / 2))), (i.substr(0, Math.ceil(c / 2)) + l + u).substr(0, c + o);
    })(e, s) : (function(i, a, l) {
      return (function(o, d, c) {
        var u;
        return o.length > d && (c == null ? (c = "&hellip;", u = 3) : u = c.length, o = o.substring(0, d - u) + c), o;
      })(i, a, l);
    })(e, s);
  }, t;
})(), wt = (function() {
  function t(e) {
    this._ = null, this.matchedText = "", this.offset = 0, this.tagBuilder = e.tagBuilder, this.matchedText = e.matchedText, this.offset = e.offset;
  }
  return t.prototype.getMatchedText = function() {
    return this.matchedText;
  }, t.prototype.setOffset = function(e) {
    this.offset = e;
  }, t.prototype.getOffset = function() {
    return this.offset;
  }, t.prototype.getCssClassSuffixes = function() {
    return [this.type];
  }, t.prototype.buildTag = function() {
    return this.tagBuilder.build(this);
  }, t;
})();
function ct(t) {
  return t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
function P(t) {
  return t >= 48 && t <= 57;
}
function ce(t) {
  return t == 34 || t == 39;
}
function tt(t) {
  return t < 8232 ? t < 160 ? t >= 9 && t <= 13 || t == 32 : t < 5760 ? t == 160 : t == 5760 || t >= 8192 && t <= 8202 : t < 8287 ? t >= 8232 && t <= 8233 || t == 8239 : t < 12288 ? t == 8287 : t == 12288 || t == 65279;
}
function et(t) {
  return t < 4800 ? t < 2949 ? t < 2451 ? t < 1425 ? t < 768 ? t < 192 ? t < 169 ? t < 65 ? t >= 48 && t <= 57 : t >= 65 && t <= 90 || t >= 97 && t <= 122 : t < 181 ? t >= 169 && t <= 170 || t == 174 : t == 181 || t == 186 : t < 710 ? t < 216 ? t >= 192 && t <= 214 : t >= 216 && t <= 246 || t >= 248 && t <= 705 : t < 748 ? t >= 710 && t <= 721 || t >= 736 && t <= 740 : t == 748 || t == 750 : t < 910 ? t < 895 ? t < 886 ? t >= 768 && t <= 884 : t >= 886 && t <= 887 || t >= 890 && t <= 893 : t < 904 ? t == 895 || t == 902 : t >= 904 && t <= 906 || t == 908 : t < 1155 ? t < 931 ? t >= 910 && t <= 929 : t >= 931 && t <= 1013 || t >= 1015 && t <= 1153 : t < 1369 ? t >= 1155 && t <= 1327 || t >= 1329 && t <= 1366 : t == 1369 || t >= 1377 && t <= 1415 : t < 1808 ? t < 1552 ? t < 1476 ? t < 1471 ? t >= 1425 && t <= 1469 : t == 1471 || t >= 1473 && t <= 1474 : t < 1488 ? t >= 1476 && t <= 1477 || t == 1479 : t >= 1488 && t <= 1514 || t >= 1520 && t <= 1522 : t < 1749 ? t < 1568 ? t >= 1552 && t <= 1562 : t >= 1568 && t <= 1641 || t >= 1646 && t <= 1747 : t < 1770 ? t >= 1749 && t <= 1756 || t >= 1759 && t <= 1768 : t >= 1770 && t <= 1788 || t == 1791 : t < 2230 ? t < 2042 ? t < 1869 ? t >= 1808 && t <= 1866 : t >= 1869 && t <= 1969 || t >= 1984 && t <= 2037 : t < 2112 ? t == 2042 || t >= 2048 && t <= 2093 : t >= 2112 && t <= 2139 || t >= 2208 && t <= 2228 : t < 2406 ? t < 2260 ? t >= 2230 && t <= 2237 : t >= 2260 && t <= 2273 || t >= 2275 && t <= 2403 : t < 2437 ? t >= 2406 && t <= 2415 || t >= 2417 && t <= 2435 : t >= 2437 && t <= 2444 || t >= 2447 && t <= 2448 : t < 2693 ? t < 2579 ? t < 2519 ? t < 2486 ? t < 2474 ? t >= 2451 && t <= 2472 : t >= 2474 && t <= 2480 || t == 2482 : t < 2503 ? t >= 2486 && t <= 2489 || t >= 2492 && t <= 2500 : t >= 2503 && t <= 2504 || t >= 2507 && t <= 2510 : t < 2534 ? t < 2524 ? t == 2519 : t >= 2524 && t <= 2525 || t >= 2527 && t <= 2531 : t < 2565 ? t >= 2534 && t <= 2545 || t >= 2561 && t <= 2563 : t >= 2565 && t <= 2570 || t >= 2575 && t <= 2576 : t < 2631 ? t < 2613 ? t < 2602 ? t >= 2579 && t <= 2600 : t >= 2602 && t <= 2608 || t >= 2610 && t <= 2611 : t < 2620 ? t >= 2613 && t <= 2614 || t >= 2616 && t <= 2617 : t == 2620 || t >= 2622 && t <= 2626 : t < 2649 ? t < 2635 ? t >= 2631 && t <= 2632 : t >= 2635 && t <= 2637 || t == 2641 : t < 2662 ? t >= 2649 && t <= 2652 || t == 2654 : t >= 2662 && t <= 2677 || t >= 2689 && t <= 2691 : t < 2821 ? t < 2759 ? t < 2730 ? t < 2703 ? t >= 2693 && t <= 2701 : t >= 2703 && t <= 2705 || t >= 2707 && t <= 2728 : t < 2741 ? t >= 2730 && t <= 2736 || t >= 2738 && t <= 2739 : t >= 2741 && t <= 2745 || t >= 2748 && t <= 2757 : t < 2784 ? t < 2763 ? t >= 2759 && t <= 2761 : t >= 2763 && t <= 2765 || t == 2768 : t < 2809 ? t >= 2784 && t <= 2787 || t >= 2790 && t <= 2799 : t == 2809 || t >= 2817 && t <= 2819 : t < 2887 ? t < 2858 ? t < 2831 ? t >= 2821 && t <= 2828 : t >= 2831 && t <= 2832 || t >= 2835 && t <= 2856 : t < 2869 ? t >= 2858 && t <= 2864 || t >= 2866 && t <= 2867 : t >= 2869 && t <= 2873 || t >= 2876 && t <= 2884 : t < 2911 ? t < 2902 ? t >= 2887 && t <= 2888 || t >= 2891 && t <= 2893 : t >= 2902 && t <= 2903 || t >= 2908 && t <= 2909 : t < 2929 ? t >= 2911 && t <= 2915 || t >= 2918 && t <= 2927 : t == 2929 || t >= 2946 && t <= 2947 : t < 3517 ? t < 3205 ? t < 3046 ? t < 2984 ? t < 2969 ? t < 2958 ? t >= 2949 && t <= 2954 : t >= 2958 && t <= 2960 || t >= 2962 && t <= 2965 : t < 2974 ? t >= 2969 && t <= 2970 || t == 2972 : t >= 2974 && t <= 2975 || t >= 2979 && t <= 2980 : t < 3014 ? t < 2990 ? t >= 2984 && t <= 2986 : t >= 2990 && t <= 3001 || t >= 3006 && t <= 3010 : t < 3024 ? t >= 3014 && t <= 3016 || t >= 3018 && t <= 3021 : t == 3024 || t == 3031 : t < 3142 ? t < 3086 ? t < 3072 ? t >= 3046 && t <= 3055 : t >= 3072 && t <= 3075 || t >= 3077 && t <= 3084 : t < 3114 ? t >= 3086 && t <= 3088 || t >= 3090 && t <= 3112 : t >= 3114 && t <= 3129 || t >= 3133 && t <= 3140 : t < 3160 ? t < 3146 ? t >= 3142 && t <= 3144 : t >= 3146 && t <= 3149 || t >= 3157 && t <= 3158 : t < 3174 ? t >= 3160 && t <= 3162 || t >= 3168 && t <= 3171 : t >= 3174 && t <= 3183 || t >= 3200 && t <= 3203 : t < 3333 ? t < 3274 ? t < 3242 ? t < 3214 ? t >= 3205 && t <= 3212 : t >= 3214 && t <= 3216 || t >= 3218 && t <= 3240 : t < 3260 ? t >= 3242 && t <= 3251 || t >= 3253 && t <= 3257 : t >= 3260 && t <= 3268 || t >= 3270 && t <= 3272 : t < 3296 ? t < 3285 ? t >= 3274 && t <= 3277 : t >= 3285 && t <= 3286 || t == 3294 : t < 3313 ? t >= 3296 && t <= 3299 || t >= 3302 && t <= 3311 : t >= 3313 && t <= 3314 || t >= 3329 && t <= 3331 : t < 3423 ? t < 3389 ? t < 3342 ? t >= 3333 && t <= 3340 : t >= 3342 && t <= 3344 || t >= 3346 && t <= 3386 : t < 3402 ? t >= 3389 && t <= 3396 || t >= 3398 && t <= 3400 : t >= 3402 && t <= 3406 || t >= 3412 && t <= 3415 : t < 3458 ? t < 3430 ? t >= 3423 && t <= 3427 : t >= 3430 && t <= 3439 || t >= 3450 && t <= 3455 : t < 3482 ? t >= 3458 && t <= 3459 || t >= 3461 && t <= 3478 : t >= 3482 && t <= 3505 || t >= 3507 && t <= 3515 : t < 3804 ? t < 3722 ? t < 3570 ? t < 3535 ? t < 3520 ? t == 3517 : t >= 3520 && t <= 3526 || t == 3530 : t < 3544 ? t >= 3535 && t <= 3540 || t == 3542 : t >= 3544 && t <= 3551 || t >= 3558 && t <= 3567 : t < 3664 ? t < 3585 ? t >= 3570 && t <= 3571 : t >= 3585 && t <= 3642 || t >= 3648 && t <= 3662 : t < 3716 ? t >= 3664 && t <= 3673 || t >= 3713 && t <= 3714 : t == 3716 || t >= 3719 && t <= 3720 : t < 3754 ? t < 3737 ? t < 3725 ? t == 3722 : t == 3725 || t >= 3732 && t <= 3735 : t < 3749 ? t >= 3737 && t <= 3743 || t >= 3745 && t <= 3747 : t == 3749 || t == 3751 : t < 3776 ? t < 3757 ? t >= 3754 && t <= 3755 : t >= 3757 && t <= 3769 || t >= 3771 && t <= 3773 : t < 3784 ? t >= 3776 && t <= 3780 || t == 3782 : t >= 3784 && t <= 3789 || t >= 3792 && t <= 3801 : t < 4176 ? t < 3902 ? t < 3872 ? t < 3840 ? t >= 3804 && t <= 3807 : t == 3840 || t >= 3864 && t <= 3865 : t < 3895 ? t >= 3872 && t <= 3881 || t == 3893 : t == 3895 || t == 3897 : t < 3974 ? t < 3913 ? t >= 3902 && t <= 3911 : t >= 3913 && t <= 3948 || t >= 3953 && t <= 3972 : t < 4038 ? t >= 3974 && t <= 3991 || t >= 3993 && t <= 4028 : t == 4038 || t >= 4096 && t <= 4169 : t < 4688 ? t < 4301 ? t < 4256 ? t >= 4176 && t <= 4253 : t >= 4256 && t <= 4293 || t == 4295 : t < 4348 ? t == 4301 || t >= 4304 && t <= 4346 : t >= 4348 && t <= 4680 || t >= 4682 && t <= 4685 : t < 4746 ? t < 4698 ? t >= 4688 && t <= 4694 || t == 4696 : t >= 4698 && t <= 4701 || t >= 4704 && t <= 4744 : t < 4786 ? t >= 4746 && t <= 4749 || t >= 4752 && t <= 4784 : t >= 4786 && t <= 4789 || t >= 4792 && t <= 4798 : t < 11035 ? t < 7416 ? t < 6176 ? t < 5873 ? t < 4992 ? t < 4824 ? t < 4802 ? t == 4800 : t >= 4802 && t <= 4805 || t >= 4808 && t <= 4822 : t < 4888 ? t >= 4824 && t <= 4880 || t >= 4882 && t <= 4885 : t >= 4888 && t <= 4954 || t >= 4957 && t <= 4959 : t < 5121 ? t < 5024 ? t >= 4992 && t <= 5007 : t >= 5024 && t <= 5109 || t >= 5112 && t <= 5117 : t < 5761 ? t >= 5121 && t <= 5740 || t >= 5743 && t <= 5759 : t >= 5761 && t <= 5786 || t >= 5792 && t <= 5866 : t < 6002 ? t < 5920 ? t < 5888 ? t >= 5873 && t <= 5880 : t >= 5888 && t <= 5900 || t >= 5902 && t <= 5908 : t < 5984 ? t >= 5920 && t <= 5940 || t >= 5952 && t <= 5971 : t >= 5984 && t <= 5996 || t >= 5998 && t <= 6e3 : t < 6108 ? t < 6016 ? t >= 6002 && t <= 6003 : t >= 6016 && t <= 6099 || t == 6103 : t < 6155 ? t >= 6108 && t <= 6109 || t >= 6112 && t <= 6121 : t >= 6155 && t <= 6157 || t >= 6160 && t <= 6169 : t < 6783 ? t < 6512 ? t < 6400 ? t < 6272 ? t >= 6176 && t <= 6263 : t >= 6272 && t <= 6314 || t >= 6320 && t <= 6389 : t < 6448 ? t >= 6400 && t <= 6430 || t >= 6432 && t <= 6443 : t >= 6448 && t <= 6459 || t >= 6470 && t <= 6509 : t < 6608 ? t < 6528 ? t >= 6512 && t <= 6516 : t >= 6528 && t <= 6571 || t >= 6576 && t <= 6601 : t < 6688 ? t >= 6608 && t <= 6617 || t >= 6656 && t <= 6683 : t >= 6688 && t <= 6750 || t >= 6752 && t <= 6780 : t < 7040 ? t < 6832 ? t < 6800 ? t >= 6783 && t <= 6793 : t >= 6800 && t <= 6809 || t == 6823 : t < 6992 ? t >= 6832 && t <= 6846 || t >= 6912 && t <= 6987 : t >= 6992 && t <= 7001 || t >= 7019 && t <= 7027 : t < 7245 ? t < 7168 ? t >= 7040 && t <= 7155 : t >= 7168 && t <= 7223 || t >= 7232 && t <= 7241 : t < 7376 ? t >= 7245 && t <= 7293 || t >= 7296 && t <= 7304 : t >= 7376 && t <= 7378 || t >= 7380 && t <= 7414 : t < 8450 ? t < 8130 ? t < 8025 ? t < 7960 ? t < 7424 ? t >= 7416 && t <= 7417 : t >= 7424 && t <= 7669 || t >= 7675 && t <= 7957 : t < 8008 ? t >= 7960 && t <= 7965 || t >= 7968 && t <= 8005 : t >= 8008 && t <= 8013 || t >= 8016 && t <= 8023 : t < 8031 ? t < 8027 ? t == 8025 : t == 8027 || t == 8029 : t < 8118 ? t >= 8031 && t <= 8061 || t >= 8064 && t <= 8116 : t >= 8118 && t <= 8124 || t == 8126 : t < 8205 ? t < 8150 ? t < 8134 ? t >= 8130 && t <= 8132 : t >= 8134 && t <= 8140 || t >= 8144 && t <= 8147 : t < 8178 ? t >= 8150 && t <= 8155 || t >= 8160 && t <= 8172 : t >= 8178 && t <= 8180 || t >= 8182 && t <= 8188 : t < 8305 ? t < 8252 ? t == 8205 : t == 8252 || t == 8265 : t < 8336 ? t == 8305 || t == 8319 : t >= 8336 && t <= 8348 || t >= 8400 && t <= 8432 : t < 8579 ? t < 8486 ? t < 8469 ? t < 8455 ? t == 8450 : t == 8455 || t >= 8458 && t <= 8467 : t < 8482 ? t == 8469 || t >= 8473 && t <= 8477 : t == 8482 || t == 8484 : t < 8495 ? t < 8488 ? t == 8486 : t == 8488 || t >= 8490 && t <= 8493 : t < 8517 ? t >= 8495 && t <= 8505 || t >= 8508 && t <= 8511 : t >= 8517 && t <= 8521 || t == 8526 : t < 9410 ? t < 9e3 ? t < 8592 ? t >= 8579 && t <= 8580 : t >= 8592 && t <= 8703 || t >= 8986 && t <= 8987 : t < 9193 ? t == 9e3 || t == 9167 : t >= 9193 && t <= 9203 || t >= 9208 && t <= 9210 : t < 9723 ? t < 9654 ? t == 9410 || t >= 9642 && t <= 9643 : t == 9654 || t == 9664 : t < 10548 ? t >= 9723 && t <= 9726 || t >= 9728 && t <= 10175 : t >= 10548 && t <= 10549 || t >= 11013 && t <= 11015 : t < 43259 ? t < 12445 ? t < 11688 ? t < 11520 ? t < 11264 ? t < 11088 ? t >= 11035 && t <= 11036 : t == 11088 || t == 11093 : t < 11360 ? t >= 11264 && t <= 11310 || t >= 11312 && t <= 11358 : t >= 11360 && t <= 11492 || t >= 11499 && t <= 11507 : t < 11568 ? t < 11559 ? t >= 11520 && t <= 11557 : t == 11559 || t == 11565 : t < 11647 ? t >= 11568 && t <= 11623 || t == 11631 : t >= 11647 && t <= 11670 || t >= 11680 && t <= 11686 : t < 11744 ? t < 11712 ? t < 11696 ? t >= 11688 && t <= 11694 : t >= 11696 && t <= 11702 || t >= 11704 && t <= 11710 : t < 11728 ? t >= 11712 && t <= 11718 || t >= 11720 && t <= 11726 : t >= 11728 && t <= 11734 || t >= 11736 && t <= 11742 : t < 12330 ? t < 11823 ? t >= 11744 && t <= 11775 : t == 11823 || t >= 12293 && t <= 12294 : t < 12353 ? t >= 12330 && t <= 12341 || t >= 12347 && t <= 12349 : t >= 12353 && t <= 12438 || t >= 12441 && t <= 12442 : t < 42512 ? t < 12951 ? t < 12549 ? t < 12449 ? t >= 12445 && t <= 12447 : t >= 12449 && t <= 12538 || t >= 12540 && t <= 12543 : t < 12704 ? t >= 12549 && t <= 12589 || t >= 12593 && t <= 12686 : t >= 12704 && t <= 12730 || t >= 12784 && t <= 12799 : t < 19968 ? t < 12953 ? t == 12951 : t == 12953 || t >= 13312 && t <= 19893 : t < 42192 ? t >= 19968 && t <= 40917 || t >= 40960 && t <= 42124 : t >= 42192 && t <= 42237 || t >= 42240 && t <= 42508 : t < 42891 ? t < 42623 ? t < 42560 ? t >= 42512 && t <= 42539 : t >= 42560 && t <= 42610 || t >= 42612 && t <= 42621 : t < 42775 ? t >= 42623 && t <= 42725 || t >= 42736 && t <= 42737 : t >= 42775 && t <= 42783 || t >= 42786 && t <= 42888 : t < 43072 ? t < 42928 ? t >= 42891 && t <= 42926 : t >= 42928 && t <= 42935 || t >= 42999 && t <= 43047 : t < 43216 ? t >= 43072 && t <= 43123 || t >= 43136 && t <= 43205 : t >= 43216 && t <= 43225 || t >= 43232 && t <= 43255 : t < 55243 ? t < 43744 ? t < 43488 ? t < 43312 ? t < 43261 ? t == 43259 : t == 43261 || t >= 43264 && t <= 43309 : t < 43392 ? t >= 43312 && t <= 43347 || t >= 43360 && t <= 43388 : t >= 43392 && t <= 43456 || t >= 43471 && t <= 43481 : t < 43600 ? t < 43520 ? t >= 43488 && t <= 43518 : t >= 43520 && t <= 43574 || t >= 43584 && t <= 43597 : t < 43642 ? t >= 43600 && t <= 43609 || t >= 43616 && t <= 43638 : t >= 43642 && t <= 43714 || t >= 43739 && t <= 43741 : t < 43824 ? t < 43785 ? t < 43762 ? t >= 43744 && t <= 43759 : t >= 43762 && t <= 43766 || t >= 43777 && t <= 43782 : t < 43808 ? t >= 43785 && t <= 43790 || t >= 43793 && t <= 43798 : t >= 43808 && t <= 43814 || t >= 43816 && t <= 43822 : t < 44012 ? t < 43868 ? t >= 43824 && t <= 43866 : t >= 43868 && t <= 43877 || t >= 43888 && t <= 44010 : t < 44032 ? t >= 44012 && t <= 44013 || t >= 44016 && t <= 44025 : t >= 44032 && t <= 55203 || t >= 55216 && t <= 55238 : t < 64848 ? t < 64298 ? t < 64112 ? t < 55296 ? t >= 55243 && t <= 55291 : t >= 55296 && t <= 57343 || t >= 63744 && t <= 64109 : t < 64275 ? t >= 64112 && t <= 64217 || t >= 64256 && t <= 64262 : t >= 64275 && t <= 64279 || t >= 64285 && t <= 64296 : t < 64320 ? t < 64312 ? t >= 64298 && t <= 64310 : t >= 64312 && t <= 64316 || t == 64318 : t < 64326 ? t >= 64320 && t <= 64321 || t >= 64323 && t <= 64324 : t >= 64326 && t <= 64433 || t >= 64467 && t <= 64829 : t < 65296 ? t < 65024 ? t < 64914 ? t >= 64848 && t <= 64911 : t >= 64914 && t <= 64967 || t >= 65008 && t <= 65019 : t < 65136 ? t >= 65024 && t <= 65039 || t >= 65056 && t <= 65071 : t >= 65136 && t <= 65140 || t >= 65142 && t <= 65276 : t < 65474 ? t < 65345 ? t >= 65296 && t <= 65305 || t >= 65313 && t <= 65338 : t >= 65345 && t <= 65370 || t >= 65382 && t <= 65470 : t < 65490 ? t >= 65474 && t <= 65479 || t >= 65482 && t <= 65487 : t >= 65490 && t <= 65495 || t >= 65498 && t <= 65500;
}
function $n(t) {
  return t < 58 ? t < 44 ? t == 33 : t == 44 || t == 46 : t < 63 ? t >= 58 && t <= 59 : t == 63 || t == 94;
}
function Qs(t) {
  return t < 91 ? t == 40 : t == 91 || t == 123;
}
function hn(t) {
  return t < 93 ? t == 41 : t == 93 || t == 125;
}
var Ks = /^(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|travelersinsurance|vermögensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|موريتانيا|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|banamex|bauhaus|bestbuy|booking|brother|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|yamaxun|youtube|zuerich|католик|البحرين|الجزائر|العليان|پاکستان|كاثوليك|இந்தியா|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kindle|kosher|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|nagoya|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|walter|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|loans|locus|lotte|lotto|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|ישראל|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|アマゾン|グーグル|クラウド|ポイント|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|scb|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ລາວ|ストア|セール|みんな|中文网|亚马逊|天主教|我爱你|新加坡|淡马锡|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|ευ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|广东|微博|慈善|手机|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)$/, Wn = /https?:\/\//i, Zs = new RegExp("^" + Wn.source, "i"), Xs = /^(javascript|vbscript):/i, tr = /^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/, er = /^(?:\/\/)?([^/#?:]+)/, yt = ct;
function qn(t) {
  return ct(t) || P(t) || t === 43 || t === 45 || t === 46;
}
var Q = et;
function ue(t) {
  return t === 95 || Q(t);
}
function Bn(t) {
  return et(t) || ((e = t) < 91 ? e < 47 ? e >= 35 && e <= 43 || e == 45 : e < 61 ? e == 47 : e == 61 || e == 64 : e < 95 ? e == 91 || e == 93 : e < 123 ? e == 95 : e >= 123 && e <= 126 || e == 10003) || $n(t);
  var e;
}
function he(t) {
  return t === 47 || t === 63 || t === 35;
}
function dn(t) {
  return Ks.test(t.toLowerCase());
}
var nr = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, sr = /[:/?#]/, rr = /^(https?:\/\/)?(?:www\.)?/i, ir = /^\/\//, Ln = (function(t) {
  function e(n) {
    var s = t.call(this, n) || this;
    return s.type = "url", s.url = "", s.urlMatchType = "scheme", s.protocolRelativeMatch = !1, s.stripPrefix = {
      scheme: !0,
      www: !0
    }, s.stripTrailingSlash = !0, s.decodePercentEncoding = !0, s.protocolPrepended = !1, s.urlMatchType = n.urlMatchType, s.url = n.url, s.protocolRelativeMatch = n.protocolRelativeMatch, s.stripPrefix = n.stripPrefix, s.stripTrailingSlash = n.stripTrailingSlash, s.decodePercentEncoding = n.decodePercentEncoding, s;
  }
  return bt(e, t), e.prototype.getType = function() {
    return "url";
  }, e.prototype.getUrlMatchType = function() {
    return this.urlMatchType;
  }, e.prototype.getUrl = function() {
    var n = this.url;
    return this.protocolRelativeMatch || this.urlMatchType === "scheme" || this.protocolPrepended || (n = this.url = "http://" + n, this.protocolPrepended = !0), n;
  }, e.prototype.getAnchorHref = function() {
    return this.getUrl().replace(/&amp;/g, "&");
  }, e.prototype.getAnchorText = function() {
    var n = this.getMatchedText();
    return this.protocolRelativeMatch && (n = n.replace(ir, "")), this.stripPrefix.scheme && (n = n.replace(Zs, "")), this.stripPrefix.www && (n = (function(s) {
      return s.includes("www.") ? s.replace(rr, "$1") : s;
    })(n)), this.stripTrailingSlash && (n = (function(s) {
      return s.charAt(s.length - 1) === "/" && (s = s.slice(0, -1)), s;
    })(n)), this.decodePercentEncoding && (n = (function(s) {
      var r = s.replace(/%(?:22|26|27|3C|3E)/gi, function(i) {
        return i === "%22" ? "&quot;" : i === "%26" ? "&amp;" : i === "%27" ? "&#39;" : i === "%3C" || i === "%3c" ? "&lt;" : "&gt;";
      });
      if (r.includes("%")) try {
        return decodeURIComponent(r);
      } catch {
      }
      return r;
    })(n)), n;
  }, e;
})(wt), ar = /^mailto:/i, Gn = et;
function de(t) {
  return Gn(t) || ((e = t) < 47 ? e < 42 ? e == 33 || e >= 35 && e <= 39 : e >= 42 && e <= 43 || e == 45 : e < 63 ? e == 47 || e == 61 : e < 94 ? e == 63 : e >= 94 && e <= 96 || e >= 123 && e <= 126);
  var e;
}
var Fn = (function(t) {
  function e(n) {
    var s = t.call(this, n) || this;
    return s.type = "email", s.email = "", s.email = n.email, s;
  }
  return bt(e, t), e.prototype.getType = function() {
    return "email";
  }, e.prototype.getEmail = function() {
    return this.email;
  }, e.prototype.getAnchorHref = function() {
    return "mailto:" + this.email;
  }, e.prototype.getAnchorText = function() {
    return this.email;
  }, e;
})(wt);
function Hn(t) {
  return t === 95 || et(t);
}
var or = [
  "twitter",
  "facebook",
  "instagram",
  "tiktok",
  "youtube"
], lr = (function(t) {
  function e(n) {
    var s = t.call(this, n) || this;
    return s.type = "hashtag", s.serviceName = "twitter", s.hashtag = "", s.serviceName = n.serviceName, s.hashtag = n.hashtag, s;
  }
  return bt(e, t), e.prototype.getType = function() {
    return "hashtag";
  }, e.prototype.getServiceName = function() {
    return this.serviceName;
  }, e.prototype.getHashtag = function() {
    return this.hashtag;
  }, e.prototype.getAnchorHref = function() {
    var n = this.serviceName, s = this.hashtag;
    switch (n) {
      case "twitter":
        return "https://twitter.com/hashtag/" + s;
      case "facebook":
        return "https://www.facebook.com/hashtag/" + s;
      case "instagram":
        return "https://instagram.com/explore/tags/" + s;
      case "tiktok":
        return "https://www.tiktok.com/tag/" + s;
      case "youtube":
        return "https://youtube.com/hashtag/" + s;
      default:
        Z(n);
    }
  }, e.prototype.getAnchorText = function() {
    return "#" + this.hashtag;
  }, e.prototype.getCssClassSuffixes = function() {
    var n = t.prototype.getCssClassSuffixes.call(this), s = this.getServiceName();
    return s && n.push(s), n;
  }, e;
})(wt), cr = {
  twitter: /^@\w{1,15}$/,
  instagram: /^@[_\w]{1,30}$/,
  soundcloud: /^@[-a-z0-9_]{3,25}$/,
  tiktok: /^@[.\w]{1,23}[\w]$/,
  youtube: /^@[-.·\w]{3,30}$/
};
function zn(t) {
  return t === 45 || t === 46 || t === 95 || ct(t) || P(t);
}
var ur = [
  "twitter",
  "instagram",
  "soundcloud",
  "tiktok",
  "youtube"
], hr = (function(t) {
  function e(n) {
    var s = t.call(this, n) || this;
    return s.type = "mention", s.serviceName = "twitter", s.mention = "", s.mention = n.mention, s.serviceName = n.serviceName, s;
  }
  return bt(e, t), e.prototype.getType = function() {
    return "mention";
  }, e.prototype.getMention = function() {
    return this.mention;
  }, e.prototype.getServiceName = function() {
    return this.serviceName;
  }, e.prototype.getAnchorHref = function() {
    switch (this.serviceName) {
      case "twitter":
        return "https://twitter.com/" + this.mention;
      case "instagram":
        return "https://instagram.com/" + this.mention;
      case "soundcloud":
        return "https://soundcloud.com/" + this.mention;
      case "tiktok":
        return "https://www.tiktok.com/@" + this.mention;
      case "youtube":
        return "https://youtube.com/@" + this.mention;
      default:
        Z(this.serviceName);
    }
  }, e.prototype.getAnchorText = function() {
    return "@" + this.mention;
  }, e.prototype.getCssClassSuffixes = function() {
    var n = t.prototype.getCssClassSuffixes.call(this), s = this.getServiceName();
    return s && n.push(s), n;
  }, e;
})(wt), dr = /[-. ()]/, fr = new RegExp("^".concat(/(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/.source, "|").concat(/(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/.source, "$"));
function Jn(t) {
  return t === 45 || t === 46 || t === 32;
}
function fe(t) {
  return t === 44 || t === 59;
}
var pr = (function(t) {
  function e(n) {
    var s = t.call(this, n) || this;
    return s.type = "phone", s.number = "", s.plusSign = !1, s.number = n.number, s.plusSign = n.plusSign, s;
  }
  return bt(e, t), e.prototype.getType = function() {
    return "phone";
  }, e.prototype.getPhoneNumber = function() {
    return this.number;
  }, e.prototype.getNumber = function() {
    return this.getPhoneNumber();
  }, e.prototype.getAnchorHref = function() {
    return "tel:" + (this.plusSign ? "+" : "") + this.number;
  }, e.prototype.getAnchorText = function() {
    return this.matchedText;
  }, e;
})(wt), gr = (function() {
  function t(e, n) {
    this.charIdx = 0, this.matches = [], this._stateMachines = [], this.schemeUrlMachinesCount = 0, this.text = e, this.tagBuilder = n.tagBuilder, this.stripPrefix = n.stripPrefix, this.stripTrailingSlash = n.stripTrailingSlash, this.decodePercentEncoding = n.decodePercentEncoding, this.hashtagServiceName = n.hashtagServiceName, this.mentionServiceName = n.mentionServiceName;
  }
  return Object.defineProperty(t.prototype, "stateMachines", {
    get: function() {
      return this._stateMachines;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.addMachine = function(e) {
    this._stateMachines.push(e), pn(e) && this.schemeUrlMachinesCount++;
  }, t.prototype.removeMachine = function(e) {
    this._stateMachines = this._stateMachines.filter(function(n) {
      return n !== e;
    }), pn(e) && this.schemeUrlMachinesCount--;
  }, t.prototype.hasSchemeUrlMachine = function() {
    return this.schemeUrlMachinesCount > 0;
  }, t;
})();
function Ot(t, e, n) {
  var s = t.charIdx;
  if (n === 35) t.addMachine({
    type: 2,
    startIdx: s,
    state: 28,
    acceptStateReached: !1
  });
  else if (n === 64) t.addMachine(/* @__PURE__ */ (function(i, a) {
    return {
      type: 3,
      startIdx: i,
      state: a,
      acceptStateReached: !1
    };
  })(s, 30));
  else if (n === 47) t.addMachine(re(s, 11));
  else if (n === 43) t.addMachine(Lt(s, 37));
  else if (n === 40) t.addMachine(Lt(s, 32));
  else {
    if (P(n) && (t.addMachine(Lt(s, 38)), t.addMachine(/* @__PURE__ */ (function(i, a) {
      return {
        type: 0,
        startIdx: i,
        state: a,
        acceptStateReached: !1,
        matchType: 2,
        octetsEncountered: 1
      };
    })(s, 13))), Gn(n)) {
      var r = e.toLowerCase() === "m" ? 15 : 22;
      t.addMachine(/* @__PURE__ */ (function(i, a) {
        return {
          type: 1,
          startIdx: i,
          state: a,
          acceptStateReached: !1
        };
      })(s, r));
    }
    yt(n) && t.addMachine(Dt(s, 0)), et(n) && t.addMachine(re(s, 5));
  }
}
function mr(t, e, n) {
  n === 58 ? e.state = 2 : n === 45 ? e.state = 1 : qn(n) || t.removeMachine(e);
}
function vr(t, e, n) {
  var s = t.charIdx;
  n === 45 || (n === 47 ? (t.removeMachine(e), t.addMachine(re(s, 11))) : qn(n) ? e.state = 0 : t.removeMachine(e));
}
function yr(t, e, n) {
  var s = t.charIdx;
  n === 47 ? e.state = 3 : n === 46 ? t.removeMachine(e) : Q(n) ? (e.state = 5, yt(n) && t.addMachine(Dt(s, 0))) : t.removeMachine(e);
}
function br(t, e, n) {
  n === 47 ? e.state = 4 : Bn(n) ? (e.state = 10, e.acceptStateReached = !0) : E(t, e);
}
function wr(t, e, n, s) {
  s === 47 ? (e.state = 10, e.acceptStateReached = !0) : Q(s) ? (e.state = 5, e.acceptStateReached = !0) : t.removeMachine(e);
}
function kr(t, e, n) {
  n === 47 ? e.state = 12 : t.removeMachine(e);
}
function Cr(t, e, n) {
  Q(n) ? e.state = 5 : t.removeMachine(e);
}
function Sr(t, e, n) {
  n === 46 ? e.state = 7 : n === 45 ? e.state = 6 : n === 58 ? e.state = 8 : he(n) ? e.state = 10 : ue(n) || E(t, e);
}
function Ir(t, e, n, s) {
  s === 45 || (s === 46 ? E(t, e) : Q(s) ? e.state = 5 : E(t, e));
}
function Tr(t, e, n, s) {
  s === 46 ? E(t, e) : Q(s) ? (e.state = 5, e.acceptStateReached = !0) : E(t, e);
}
function xr(t, e, n) {
  n === 46 ? e.state = 14 : n === 58 ? e.state = 8 : P(n) || (he(n) ? e.state = 10 : et(n) ? t.removeMachine(e) : E(t, e));
}
function Er(t, e, n) {
  P(n) ? (e.octetsEncountered++, e.octetsEncountered === 4 && (e.acceptStateReached = !0), e.state = 13) : E(t, e);
}
function _r(t, e, n) {
  P(n) ? e.state = 9 : E(t, e);
}
function Mr(t, e, n) {
  P(n) || (he(n) ? e.state = 10 : E(t, e));
}
function Ar(t, e, n) {
  Bn(n) || E(t, e);
}
function Rr(t, e, n, s) {
  n.toLowerCase() === "a" ? e.state = 16 : nt(t, e, s);
}
function Nr(t, e, n, s) {
  n.toLowerCase() === "i" ? e.state = 17 : nt(t, e, s);
}
function Or(t, e, n, s) {
  n.toLowerCase() === "l" ? e.state = 18 : nt(t, e, s);
}
function Dr(t, e, n, s) {
  n.toLowerCase() === "t" ? e.state = 19 : nt(t, e, s);
}
function Pr(t, e, n, s) {
  n.toLowerCase() === "o" ? e.state = 20 : nt(t, e, s);
}
function jr(t, e, n) {
  n === 58 ? e.state = 21 : nt(t, e, n);
}
function Ur(t, e, n) {
  de(n) ? e.state = 22 : t.removeMachine(e);
}
function nt(t, e, n) {
  n === 46 ? e.state = 23 : n === 64 ? e.state = 24 : de(n) ? e.state = 22 : t.removeMachine(e);
}
function $r(t, e, n) {
  n === 46 || n === 64 ? t.removeMachine(e) : de(n) ? e.state = 22 : t.removeMachine(e);
}
function Wr(t, e, n) {
  Q(n) ? e.state = 25 : t.removeMachine(e);
}
function qr(t, e, n) {
  n === 46 ? e.state = 27 : n === 45 ? e.state = 26 : ue(n) || E(t, e);
}
function Br(t, e, n) {
  n === 45 || n === 46 ? E(t, e) : ue(n) ? e.state = 25 : E(t, e);
}
function Lr(t, e, n) {
  n === 46 || n === 45 ? E(t, e) : Q(n) ? (e.state = 25, e.acceptStateReached = !0) : E(t, e);
}
function Gr(t, e, n) {
  Hn(n) ? (e.state = 29, e.acceptStateReached = !0) : t.removeMachine(e);
}
function Fr(t, e, n) {
  Hn(n) || E(t, e);
}
function Hr(t, e, n) {
  zn(n) ? (e.state = 31, e.acceptStateReached = !0) : t.removeMachine(e);
}
function zr(t, e, n) {
  zn(n) || (et(n) ? t.removeMachine(e) : E(t, e));
}
function Jr(t, e, n, s) {
  P(s) ? e.state = 38 : (t.removeMachine(e), Ot(t, n, s));
}
function Yr(t, e, n, s) {
  P(s) ? e.state = 33 : t.removeMachine(e), Ot(t, n, s);
}
function Vr(t, e, n) {
  P(n) ? e.state = 34 : t.removeMachine(e);
}
function Qr(t, e, n) {
  P(n) ? e.state = 35 : t.removeMachine(e);
}
function Kr(t, e, n) {
  n === 41 ? e.state = 36 : t.removeMachine(e);
}
function Zr(t, e, n, s) {
  P(s) ? e.state = 38 : Jn(s) ? e.state = 39 : t.removeMachine(e);
}
function Xr(t, e, n, s) {
  var r = t.charIdx;
  e.acceptStateReached = !0, fe(s) ? e.state = 40 : s === 35 ? e.state = 41 : P(s) || (s === 40 ? e.state = 32 : Jn(s) ? e.state = 39 : (E(t, e), yt(s) && t.addMachine(Dt(r, 0))));
}
function ti(t, e, n, s) {
  P(s) ? e.state = 38 : s === 40 ? e.state = 32 : (E(t, e), Ot(t, n, s));
}
function ei(t, e, n) {
  fe(n) || (n === 35 ? e.state = 41 : P(n) ? e.state = 38 : E(t, e));
}
function ni(t, e, n) {
  fe(n) ? e.state = 40 : P(n) ? t.removeMachine(e) : E(t, e);
}
function E(t, e) {
  var n = t.matches, s = t.text, r = t.charIdx, i = t.tagBuilder, a = t.stripPrefix, l = t.stripTrailingSlash, o = t.decodePercentEncoding, d = t.hashtagServiceName, c = t.mentionServiceName;
  if (t.removeMachine(e), e.acceptStateReached) {
    var u, p, m = e.startIdx, g = s.slice(e.startIdx, r);
    switch (g = (function(w) {
      for (var b = {
        "(": 0,
        "{": 0,
        "[": 0
      }, v = 0; v < w.length; v++) {
        var S = w.charAt(v);
        Qs(G = w.charCodeAt(v)) ? b[S]++ : hn(G) && b[fn[S]]--;
      }
      for (var T = w.length - 1; T >= 0; ) {
        var G;
        if (S = w.charAt(T), hn(G = w.charCodeAt(T))) {
          var ut = fn[S];
          if (!(b[ut] < 0)) break;
          b[ut]++, T--;
        } else {
          if (!$n(G)) break;
          T--;
        }
      }
      return w.slice(0, T + 1);
    })(g), e.type) {
      case 0:
        if (s.charCodeAt(e.startIdx - 1) === 64) return;
        switch (e.matchType) {
          case 0:
            var y = Wn.exec(g);
            if (y && (m += y.index, g = g.slice(y.index)), !(function(w) {
              if (Xs.test(w)) return !1;
              var b = w.match(tr);
              if (!b) return !1;
              var v = !!b[1], S = b[2];
              return !!v || !(S.indexOf(".") === -1 || !/[A-Za-z]/.test(S));
            })(g)) return;
            break;
          case 1:
            if (!(function(w) {
              var b = w.match(er);
              if (!b) return !1;
              var v = b[0].split(".");
              return !(v.length < 2 || !dn(v[v.length - 1]));
            })(g)) return;
            break;
          case 2:
            if (p = g.split(sr, 1)[0], !nr.test(p)) return;
            break;
          default:
            Z(e);
        }
        n.push(new Ln({
          tagBuilder: i,
          matchedText: g,
          offset: m,
          urlMatchType: si(e.matchType),
          url: g,
          protocolRelativeMatch: g.slice(0, 2) === "//",
          stripPrefix: a,
          stripTrailingSlash: l,
          decodePercentEncoding: o
        }));
        break;
      case 1:
        dn(g.split(".").pop()) && n.push(new Fn({
          tagBuilder: i,
          matchedText: g,
          offset: m,
          email: g.replace(ar, "")
        }));
        break;
      case 2:
        g.length <= 140 && n.push(new lr({
          tagBuilder: i,
          matchedText: g,
          offset: m,
          serviceName: d,
          hashtag: g.slice(1)
        }));
        break;
      case 3:
        (function(w, b) {
          return cr[b].test(w);
        })(g, c) && n.push(new hr({
          tagBuilder: i,
          matchedText: g,
          offset: m,
          serviceName: c,
          mention: g.slice(1)
        }));
        break;
      case 4:
        if (g = g.replace(/ +$/g, ""), ((u = g).charAt(0) === "+" || dr.test(u)) && fr.test(u)) {
          var C = g.replace(/[^0-9,;#]/g, "");
          n.push(new pr({
            tagBuilder: i,
            matchedText: g,
            offset: m,
            number: C,
            plusSign: g.charAt(0) === "+"
          }));
        }
        break;
      default:
        Z(e);
    }
  }
}
function si(t) {
  switch (t) {
    case 0:
      return "scheme";
    case 1:
      return "tld";
    case 2:
      return "ipV4";
    default:
      Z(t);
  }
}
var fn = {
  ")": "(",
  "}": "{",
  "]": "["
};
function Dt(t, e) {
  return {
    type: 0,
    startIdx: t,
    state: e,
    acceptStateReached: !1,
    matchType: 0
  };
}
function re(t, e) {
  return {
    type: 0,
    startIdx: t,
    state: e,
    acceptStateReached: !1,
    matchType: 1
  };
}
function Lt(t, e) {
  return {
    type: 4,
    startIdx: t,
    state: e,
    acceptStateReached: !1
  };
}
function pn(t) {
  return t.type === 0 && t.matchType === 0;
}
var F = function(t) {
  t === void 0 && (t = {}), this.idx = t.idx !== void 0 ? t.idx : -1, this.type = t.type || "tag", this.name = t.name || "", this.isOpening = !!t.isOpening, this.isClosing = !!t.isClosing;
}, pe = new F(), ri = function(t, e) {
  this.charIdx = 0, this.state = 0, this.currentDataIdx = 0, this.currentTag = pe, this.html = t, this.callbacks = e;
};
function ii(t, e) {
  e === "<" && H(t);
}
function ai(t, e, n) {
  e === "!" ? t.state = 13 : e === "/" ? (t.state = 2, t.currentTag = new F(N(N({}, t.currentTag), { isClosing: !0 }))) : e === "<" ? H(t) : ct(n) ? (t.state = 3, t.currentTag = new F(N(N({}, t.currentTag), { isOpening: !0 }))) : (t.state = 0, t.currentTag = pe);
}
function oi(t, e, n) {
  tt(n) ? (t.currentTag = new F(N(N({}, t.currentTag), { name: Gt(t) })), t.state = 4) : e === "<" ? H(t) : e === "/" ? (t.currentTag = new F(N(N({}, t.currentTag), { name: Gt(t) })), t.state = 12) : e === ">" ? (t.currentTag = new F(N(N({}, t.currentTag), { name: Gt(t) })), z(t)) : ct(n) || P(n) || e === ":" || $(t);
}
function li(t, e, n) {
  e === ">" ? $(t) : ct(n) ? t.state = 3 : $(t);
}
function ci(t, e, n) {
  var s;
  tt(n) || (e === "/" ? t.state = 12 : e === ">" ? z(t) : e === "<" ? H(t) : e === "=" || ce(n) || (s = n) >= 0 && s <= 31 || s == 127 ? $(t) : t.state = 5);
}
function ui(t, e, n) {
  tt(n) ? t.state = 6 : e === "/" ? t.state = 12 : e === "=" ? t.state = 7 : e === ">" ? z(t) : e === "<" ? H(t) : ce(n) && $(t);
}
function hi(t, e, n) {
  tt(n) || (e === "/" ? t.state = 12 : e === "=" ? t.state = 7 : e === ">" ? z(t) : e === "<" ? H(t) : ce(n) ? $(t) : t.state = 5);
}
function di(t, e, n) {
  tt(n) || (e === '"' ? t.state = 8 : e === "'" ? t.state = 9 : /[>=`]/.test(e) ? $(t) : e === "<" ? H(t) : t.state = 10);
}
function fi(t, e) {
  e === '"' && (t.state = 11);
}
function pi(t, e) {
  e === "'" && (t.state = 11);
}
function gi(t, e, n) {
  tt(n) ? t.state = 4 : e === ">" ? z(t) : e === "<" && H(t);
}
function mi(t, e, n) {
  tt(n) ? t.state = 4 : e === "/" ? t.state = 12 : e === ">" ? z(t) : e === "<" ? H(t) : (t.state = 4, (function(s) {
    s.charIdx--;
  })(t));
}
function vi(t, e) {
  e === ">" ? (t.currentTag = new F(N(N({}, t.currentTag), { isClosing: !0 })), z(t)) : $(t);
}
function yi(t) {
  var e = t.html, n = t.charIdx;
  e.slice(n, n + 2) === "--" ? (t.charIdx++, t.currentTag = new F(N(N({}, t.currentTag), { type: "comment" })), t.state = 14) : e.slice(n, n + 7).toUpperCase() === "DOCTYPE" ? (t.charIdx += 6, t.currentTag = new F(N(N({}, t.currentTag), { type: "doctype" })), t.state = 20) : $(t);
}
function bi(t, e) {
  e === "-" ? t.state = 15 : e === ">" ? $(t) : t.state = 16;
}
function wi(t, e) {
  e === "-" ? t.state = 18 : e === ">" ? $(t) : t.state = 16;
}
function ki(t, e) {
  e === "-" && (t.state = 17);
}
function Ci(t, e) {
  t.state = e === "-" ? 18 : 16;
}
function Si(t, e) {
  e === ">" ? z(t) : e === "!" ? t.state = 19 : e === "-" || (t.state = 16);
}
function Ii(t, e) {
  e === "-" ? t.state = 17 : e === ">" ? z(t) : t.state = 16;
}
function Ti(t, e) {
  e === ">" ? z(t) : e === "<" && H(t);
}
function $(t) {
  t.state = 0, t.currentTag = pe;
}
function H(t) {
  t.state = 1, t.currentTag = new F({ idx: t.charIdx });
}
function z(t) {
  var e = t.html.slice(t.currentDataIdx, t.currentTag.idx);
  e && t.callbacks.onText(e, t.currentDataIdx);
  var n = t.currentTag;
  n.type === "comment" ? t.callbacks.onComment(n.idx) : n.type === "doctype" ? t.callbacks.onDoctype(n.idx) : (n.isOpening && t.callbacks.onOpenTag(n.name, n.idx), n.isClosing && t.callbacks.onCloseTag(n.name, n.idx)), $(t), t.currentDataIdx = t.charIdx + 1;
}
function Gt(t) {
  var e = t.currentTag.idx + (t.currentTag.isClosing ? 2 : 1);
  return t.html.slice(e, t.charIdx).toLowerCase();
}
var xi = (function() {
  function t(e) {
    e === void 0 && (e = {}), this.version = t.version, this.urls = {}, this.email = !0, this.phone = !0, this.hashtag = !1, this.mention = !1, this.newWindow = !0, this.stripPrefix = {
      scheme: !0,
      www: !0
    }, this.stripTrailingSlash = !0, this.decodePercentEncoding = !0, this.truncate = {
      length: 0,
      location: "end"
    }, this.className = "", this.replaceFn = null, this.context = void 0, this.sanitizeHtml = !1, this.tagBuilder = null, this.urls = (function(i) {
      return i ??= !0, U(i) ? {
        schemeMatches: i,
        tldMatches: i,
        ipV4Matches: i
      } : {
        schemeMatches: !U(i.schemeMatches) || i.schemeMatches,
        tldMatches: !U(i.tldMatches) || i.tldMatches,
        ipV4Matches: !U(i.ipV4Matches) || i.ipV4Matches
      };
    })(e.urls), this.email = U(e.email) ? e.email : this.email, this.phone = U(e.phone) ? e.phone : this.phone, this.hashtag = e.hashtag || this.hashtag, this.mention = e.mention || this.mention, this.newWindow = U(e.newWindow) ? e.newWindow : this.newWindow, this.stripPrefix = (function(i) {
      return i ??= !0, U(i) ? {
        scheme: i,
        www: i
      } : {
        scheme: !U(i.scheme) || i.scheme,
        www: !U(i.www) || i.www
      };
    })(e.stripPrefix), this.stripTrailingSlash = U(e.stripTrailingSlash) ? e.stripTrailingSlash : this.stripTrailingSlash, this.decodePercentEncoding = U(e.decodePercentEncoding) ? e.decodePercentEncoding : this.decodePercentEncoding, this.sanitizeHtml = e.sanitizeHtml || !1;
    var n = this.mention;
    if (n !== !1 && ur.indexOf(n) === -1) throw new Error("invalid `mention` cfg '".concat(n, "' - see docs"));
    var s, r = this.hashtag;
    if (r !== !1 && or.indexOf(r) === -1) throw new Error("invalid `hashtag` cfg '".concat(r, "' - see docs"));
    this.truncate = typeof (s = e.truncate) == "number" ? {
      length: s,
      location: "end"
    } : N({
      length: Number.POSITIVE_INFINITY,
      location: "end"
    }, s), this.className = e.className || this.className, this.replaceFn = e.replaceFn || this.replaceFn, this.context = e.context || this;
  }
  return t.link = function(e, n) {
    return new t(n).link(e);
  }, t.parse = function(e, n) {
    return new t(n).parse(e);
  }, t.prototype.parse = function(e) {
    var n = this, s = [
      "a",
      "style",
      "script"
    ], r = 0, i = [];
    return (function(a, l) {
      for (var o = new ri(a, l), d = a.length; o.charIdx < d; ) {
        var c = a.charAt(o.charIdx), u = a.charCodeAt(o.charIdx);
        switch (o.state) {
          case 0:
            ii(o, c);
            break;
          case 1:
            ai(o, c, u);
            break;
          case 2:
            li(o, c, u);
            break;
          case 3:
            oi(o, c, u);
            break;
          case 4:
            ci(o, c, u);
            break;
          case 5:
            ui(o, c, u);
            break;
          case 6:
            hi(o, c, u);
            break;
          case 7:
            di(o, c, u);
            break;
          case 8:
            fi(o, c);
            break;
          case 9:
            pi(o, c);
            break;
          case 10:
            gi(o, c, u);
            break;
          case 11:
            mi(o, c, u);
            break;
          case 12:
            vi(o, c);
            break;
          case 13:
            yi(o);
            break;
          case 14:
            bi(o, c);
            break;
          case 15:
            wi(o, c);
            break;
          case 16:
            ki(o, c);
            break;
          case 17:
            Ci(o, c);
            break;
          case 18:
            Si(o, c);
            break;
          case 19:
            Ii(o, c);
            break;
          case 20:
            Ti(o, c);
            break;
          default:
            Z(o.state);
        }
        o.charIdx++;
      }
      o.currentDataIdx < o.charIdx && (function(p) {
        var m = p.html.slice(p.currentDataIdx, p.charIdx);
        p.callbacks.onText(m, p.currentDataIdx), p.currentDataIdx = p.charIdx + 1;
      })(o);
    })(e, {
      onOpenTag: function(a) {
        s.indexOf(a) >= 0 && r++;
      },
      onText: function(a, l) {
        if (r === 0) {
          var o = a.split(/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi), d = l;
          o.forEach(function(c, u) {
            if (u % 2 == 0) {
              var p = n.parseText(c, d);
              i.push.apply(i, (function(m, g, y) {
                if (y || arguments.length === 2) for (var C, w = 0, b = g.length; w < b; w++) !C && w in g || (C || (C = Array.prototype.slice.call(g, 0, w)), C[w] = g[w]);
                return m.concat(C || Array.prototype.slice.call(g));
              })([], (function(m, g) {
                var y = typeof Symbol == "function" && m[Symbol.iterator];
                if (!y) return m;
                var C, w, b = y.call(m), v = [];
                try {
                  for (; (g === void 0 || g-- > 0) && !(C = b.next()).done; ) v.push(C.value);
                } catch (S) {
                  w = { error: S };
                } finally {
                  try {
                    C && !C.done && (y = b.return) && y.call(b);
                  } finally {
                    if (w) throw w.error;
                  }
                }
                return v;
              })(p), !1));
            }
            d += c.length;
          });
        }
      },
      onCloseTag: function(a) {
        s.indexOf(a) >= 0 && (r = Math.max(r - 1, 0));
      },
      onComment: function() {
      },
      onDoctype: function() {
      }
    }), i = this.compactMatches(i), i = this.removeUnwantedMatches(i);
  }, t.prototype.compactMatches = function(e) {
    e.sort(Ei);
    for (var n = 0; n < e.length - 1; ) {
      var s = e[n], r = s.getOffset(), i = s.getMatchedText().length;
      if (n + 1 < e.length && e[n + 1].getOffset() === r) {
        var a = e[n + 1].getMatchedText().length > i ? n : n + 1;
        e.splice(a, 1);
      } else n++;
    }
    return e;
  }, t.prototype.removeUnwantedMatches = function(e) {
    return this.hashtag || K(e, function(n) {
      return n.getType() === "hashtag";
    }), this.email || K(e, function(n) {
      return n.getType() === "email";
    }), this.phone || K(e, function(n) {
      return n.getType() === "phone";
    }), this.mention || K(e, function(n) {
      return n.getType() === "mention";
    }), this.urls.schemeMatches || K(e, function(n) {
      return n.getType() === "url" && n.getUrlMatchType() === "scheme";
    }), this.urls.tldMatches || K(e, function(n) {
      return n.getType() === "url" && n.getUrlMatchType() === "tld";
    }), this.urls.ipV4Matches || K(e, function(n) {
      return n.getType() === "url" && n.getUrlMatchType() === "ipV4";
    }), e;
  }, t.prototype.parseText = function(e, n) {
    n = n || 0;
    for (var s = (function(a, l) {
      for (var o = new gr(a, l); o.charIdx < o.text.length; o.charIdx++) {
        var d = a.charAt(o.charIdx), c = a.charCodeAt(o.charIdx);
        if (o.stateMachines.length === 0) Ot(o, d, c);
        else {
          for (var u = o.stateMachines.length - 1; u >= 0; u--) {
            var p = o.stateMachines[u];
            switch (p.state) {
              case 11:
                kr(o, p, c);
                break;
              case 12:
                Cr(o, p, c);
                break;
              case 0:
                mr(o, p, c);
                break;
              case 1:
                vr(o, p, c);
                break;
              case 2:
                yr(o, p, c);
                break;
              case 3:
                br(o, p, c);
                break;
              case 4:
                wr(o, p, 0, c);
                break;
              case 5:
                Sr(o, p, c);
                break;
              case 6:
                Ir(o, p, 0, c);
                break;
              case 7:
                Tr(o, p, 0, c);
                break;
              case 13:
                xr(o, p, c);
                break;
              case 14:
                Er(o, p, c);
                break;
              case 8:
                _r(o, p, c);
                break;
              case 9:
                Mr(o, p, c);
                break;
              case 10:
                Ar(o, p, c);
                break;
              case 15:
                Rr(o, p, d, c);
                break;
              case 16:
                Nr(o, p, d, c);
                break;
              case 17:
                Or(o, p, d, c);
                break;
              case 18:
                Dr(o, p, d, c);
                break;
              case 19:
                Pr(o, p, d, c);
                break;
              case 20:
                jr(o, p, c);
                break;
              case 21:
                Ur(o, p, c);
                break;
              case 22:
                nt(o, p, c);
                break;
              case 23:
                $r(o, p, c);
                break;
              case 24:
                Wr(o, p, c);
                break;
              case 25:
                qr(o, p, c);
                break;
              case 26:
                Br(o, p, c);
                break;
              case 27:
                Lr(o, p, c);
                break;
              case 28:
                Gr(o, p, c);
                break;
              case 29:
                Fr(o, p, c);
                break;
              case 30:
                Hr(o, p, c);
                break;
              case 31:
                zr(o, p, c);
                break;
              case 32:
                Yr(o, p, d, c);
                break;
              case 33:
                Vr(o, p, c);
                break;
              case 34:
                Qr(o, p, c);
                break;
              case 35:
                Kr(o, p, c);
                break;
              case 36:
                Zr(o, p, 0, c);
                break;
              case 37:
                Jr(o, p, d, c);
                break;
              case 38:
                Xr(o, p, 0, c);
                break;
              case 39:
                ti(o, p, d, c);
                break;
              case 40:
                ei(o, p, c);
                break;
              case 41:
                ni(o, p, c);
                break;
              default:
                Z(p.state);
            }
          }
          !o.hasSchemeUrlMachine() && o.charIdx > 0 && yt(c) && (yt(o.text.charCodeAt(o.charIdx - 1)) || o.addMachine(Dt(o.charIdx, 0)));
        }
      }
      for (var m = o.stateMachines.length - 1; m >= 0; m--) o.stateMachines.forEach(function(g) {
        return E(o, g);
      });
      return o.matches;
    })(e, {
      tagBuilder: this.getTagBuilder(),
      stripPrefix: this.stripPrefix,
      stripTrailingSlash: this.stripTrailingSlash,
      decodePercentEncoding: this.decodePercentEncoding,
      hashtagServiceName: this.hashtag,
      mentionServiceName: this.mention || "twitter"
    }), r = 0, i = s.length; r < i; r++) s[r].setOffset(n + s[r].getOffset());
    return s;
  }, t.prototype.link = function(e) {
    if (!e) return "";
    this.sanitizeHtml && (e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    for (var n = this.parse(e), s = new Array(2 * n.length + 1), r = 0, i = 0, a = n.length; i < a; i++) {
      var l = n[i];
      s.push(e.substring(r, l.getOffset())), s.push(this.createMatchReturnVal(l)), r = l.getOffset() + l.getMatchedText().length;
    }
    return s.push(e.substring(r)), s.join("");
  }, t.prototype.createMatchReturnVal = function(e) {
    var n;
    return this.replaceFn && (n = this.replaceFn.call(this.context, e)), typeof n == "string" ? n : n === !1 ? e.getMatchedText() : n instanceof Un ? n.toAnchorString() : e.buildTag().toAnchorString();
  }, t.prototype.getTagBuilder = function() {
    var e = this.tagBuilder;
    return e || (e = this.tagBuilder = new Vs({
      newWindow: this.newWindow,
      truncate: this.truncate,
      className: this.className
    })), e;
  }, t.version = "4.1.5", t;
})();
function Ei(t, e) {
  return t.getOffset() - e.getOffset();
}
function Yn(t, e = t) {
  return {
    type: "autolink",
    url: t,
    text: e
  };
}
var _i = J(/<!!mention:([^>\s]*?)\|(.*?)>/gm, ([t, e, n]) => /* @__PURE__ */ (function(s, r) {
  return {
    type: "mention",
    id: s,
    text: r
  };
})(decodeURIComponent(e), n)), Mi = J(/<!!customemoji:(.*?)>/gm, ([t, e]) => /* @__PURE__ */ (function(n) {
  return {
    type: "customemoji",
    text: n
  };
})(e)), Vn = J(/<((?:https?|mailto):.*?)\|(.*?)>/gi, ([t, e, n]) => /* @__PURE__ */ (function(s, r = []) {
  return {
    type: "link",
    url: s,
    children: r
  };
})(e, [n])), Ai = J(/<actionlink:([^|]+)[|]([^>]*)>/gi, ([t, e, n]) => {
  const { action: s, params: r } = Qn(e);
  return /* @__PURE__ */ (function(i, a, l = []) {
    return {
      type: "actionlink",
      action: i,
      params: a,
      children: l
    };
  })(s, r, [n]);
}), Ri = J(/<actionbutton:([^|]+)[|]([^>]*)>/gi, ([t, e, n]) => {
  const { action: s, params: r } = Qn(e);
  return /* @__PURE__ */ (function(i, a, l = []) {
    return {
      type: "actionbutton",
      action: i,
      params: a,
      children: l
    };
  })(s, r, [n]);
});
function Qn(t) {
  const e = t.indexOf("?");
  return e === -1 ? {
    action: t,
    params: {}
  } : {
    action: t.slice(0, e),
    params: Object.fromEntries(new URLSearchParams(t.slice(e)))
  };
}
var Ni = J(/(?:^|\n)(?:\s*[-*+]\s+[^\n]+(?:\n|$))+/g, ([t]) => /* @__PURE__ */ (function(e = []) {
  return {
    type: "bulletlist",
    children: e
  };
})([t.startsWith(`
`) ? t.slice(1) : t])), Oi = J(/^\s*[-*+]\s+([^\n]+)(?:\n|$)/gm, ([t, e]) => ({
  type: "bulletpoint",
  children: [e]
})), Di = (t) => {
  const e = /(?:^|[^-:/\w])([(+]?[0-9](?:[-_+ ().]?[0-9]){5,11}[0-9])(?:[^-:/\w]|$)/g, n = /^(\d{4})-(\d{4})$/, s = /^(\d{1,2})\.(\d{2})-(\d{1,2})\.(\d{2})$/;
  let r = 0;
  const i = [];
  for (const a of Dn(t, e)) {
    const l = a[0], o = a[1], d = o.match(n);
    if (d && Number(d[1]) < Number(d[2]))
      continue;
    const c = o.match(s);
    if (c) {
      const m = Number(c[1]), g = Number(c[2]), y = Number(c[3]), C = Number(c[4]);
      if (m <= 23 && y <= 23 && g <= 59 && C <= 59) continue;
    }
    const u = l.startsWith(o) ? a.index : a.index + 1;
    u - r > 0 && i.push(t.substring(r, u));
    const p = Yn("tel:" + o.replace(/[^0-9+]/g, ""), o);
    i.push(p), r = u + o.length;
  }
  return r < t.length && i.push(t.substring(r)), i;
}, Pi = (t) => Vn(t).flatMap((e) => typeof e == "string" ? Ft(e) : [
  "<",
  ...Ft(e.url),
  ...Ft("|" + e.children[0] + ">")
]), Ft = (t) => {
  const e = xi.parse(t, {
    urls: !0,
    email: !0,
    phone: !1,
    hashtag: !1,
    mention: !1
  }), n = [];
  let s = 0;
  for (const r of e) {
    const i = r.getOffset(), a = r.getMatchedText(), l = a.length;
    let o = a;
    r instanceof Fn ? o = "mailto:" + r.getEmail() : r instanceof Ln && (o = r.getUrl()), i > s && n.push(t.substring(s, i)), n.push(Yn(o, a)), s = i + l;
  }
  return s < t.length && n.push(t.substring(s)), n;
}, ji = [
  "Codeblock",
  "Codespan",
  "FormattedLink",
  "Wikitext",
  "Autolink",
  "Actions",
  "Mention",
  "Mention",
  "BulletPoint",
  "CustomEmoji"
];
function Ui(t = { except: [] }) {
  var e;
  const n = {
    multilineSteps: [],
    singlelineSteps: []
  }, s = (e = t.except) != null ? e : ji.filter((r) => !t.only.includes(r));
  return s.includes("BulletPoint") || n.multilineSteps.push(Ni, Oi), s.includes("Mention") || n.singlelineSteps.push(_i), s.includes("CustomEmoji") || n.singlelineSteps.push(Mi), s.includes("Codespan") || n.multilineSteps.push(J(/```([^]+?)```/g, ([r, i]) => ({
    type: "codespan",
    text: i.replace(/<!!mention:.*?\|([^>]*)>/gim, "@$1").replace(/<!!customemoji:(.*?)>/gim, "$1")
  }))), s.includes("FormattedLink") || n.singlelineSteps.push(Vn), s.includes("Actions") || (n.singlelineSteps.push(Ai), n.singlelineSteps.push(Ri)), s.includes("Wikitext") || n.singlelineSteps.push(zs), s.includes("Autolink") || n.singlelineSteps.push(Pi, Di), n;
}
var $i = (function(t) {
  const e = RegExp(`[^${t}]+${t}?|${t}`, "g");
  return (n) => Array.from(n.match(e) || []);
})(`
`);
function Rt(t, e = { except: [] }) {
  let n = (function(s, r) {
    let i = [s];
    return i = Ht(i, r.multilineSteps), i = Ht(i, [$i]), i = Ht(i, r.singlelineSteps), i = Kn(i), i;
  })(t, Ui(e));
  return n = Zn(n, !1), n;
}
function gn(t) {
  return Rt(t, { except: ["FormattedLink", "Actions"] });
}
function Ht(t, e) {
  return e.reduce((n, s) => mt(n, s), t);
}
function Kn(t) {
  const e = [];
  let n = -1;
  for (const s of t) typeof s == "string" ? typeof e[n] == "string" ? e[n] += s : e[++n] = s : e[++n] = "children" in s ? R(I({}, s), { children: Kn(s.children) }) : s;
  return e;
}
function Zn(t, e) {
  const n = [];
  let s = [];
  for (let r = 0; r < t.length; r++) {
    const i = t[r];
    if (typeof i == "string") s.push(i);
    else if ("children" in i) {
      s.length > 0 && (n.push(s.join("")), s = []);
      const a = Zn(i.children, e || i.type === "link" || i.type === "actionbutton" || i.type === "actionlink");
      n.push(R(I({}, i), { children: a }));
    } else i.type === "autolink" && e ? s.push(i.text) : (s.length > 0 && (n.push(s.join("")), s = []), n.push(i));
  }
  return s.length > 0 && (n.push(s.join("")), s = []), n;
}
function Xn(t, e, n) {
  return t.primary < e.primary ? n.primaryOrder === "ASC" ? "before" : "after" : t.primary > e.primary ? n.primaryOrder === "ASC" ? "after" : "before" : t.secondary < e.secondary ? n.secondaryOrder === "ASC" ? "before" : "after" : t.secondary > e.secondary ? n.secondaryOrder === "ASC" ? "after" : "before" : "equal";
}
function Wi(t, e, n, s) {
  if (t.length === 0) return 0;
  var r = 0, i = e, a = t.length - 1;
  const l = (o) => {
    const d = t[o];
    return Xn(n.getSortPointer(d), s, n) === "after";
  };
  if (l(e = Math.max(r, Math.min(i, a)))) {
    for (let o = e - 1; o >= 0; o--) if (!l(o)) return o + 1;
    return 0;
  }
  for (let o = e + 1; o < t.length; o++) if (l(o)) return o;
  return t.length;
}
function mn(t, e) {
  return e >= t.length ? t : k(t.slice(0, e));
}
var ge = class {
  constructor(t, e, n, s, r) {
    this._onSnapshot = e, this._pageSize = n, this._maxPageSize = s, this._sort = r, this._windowStatus = void 0, this._loadMoreDeferred = void 0, this._connectedDefer = j(), this._connectedDefer.promise.catch(() => {
    }), this._underlyingSubscription = t(this.handleSnapshot.bind(this)), this._underlyingSubscription.connected.catch((i) => this._connectedDefer.reject(i));
  }
  updateWindowStatusAndGetState(t, e) {
    var n, s;
    if (t === null) {
      const b = {
        type: "active",
        latestSnapshot: t,
        loadedAll: e
      };
      return this._windowStatus = void 0, b;
    }
    if (t.length === 0) {
      const b = {
        type: "active",
        latestSnapshot: t,
        loadedAll: e
      };
      return this._windowStatus && (this._windowStatus.lastState = b), b;
    }
    if (this._windowStatus === void 0) {
      const b = mn(t, this._pageSize), v = b[b.length - 1], S = this._sort.getSortPointer(v), T = e ? 0 : this._pageSize - b.length, G = {
        type: "active",
        latestSnapshot: b,
        loadedAll: e && t === b
      };
      return this._windowStatus = {
        endPoint: S,
        loadingMore: T,
        lastState: G
      }, G;
    }
    const r = Wi(t, (s = (n = this._windowStatus.lastState.latestSnapshot) == null ? void 0 : n.length) != null ? s : this._pageSize, this._sort, this._windowStatus.endPoint), i = Math.min(r + this._windowStatus.loadingMore, t.length), a = (function(b, v, S) {
      if (b === v) return !1;
      if (b === null || v === null || b.length !== S) return !0;
      for (let T = 0; T < S; T++) if (b[T] !== v[T]) return !0;
      return !1;
    })(this._windowStatus.lastState.latestSnapshot, t, i), l = e && i === t.length, o = this._windowStatus.lastState.loadedAll !== l;
    if (!a && !o) return this._windowStatus.lastState;
    const d = mn(t, i), c = {
      type: "active",
      latestSnapshot: d,
      loadedAll: l
    };
    if (d.length === 0) return c;
    const u = d.length - r, p = c.loadedAll ? 0 : this._windowStatus.loadingMore - u;
    if (p === this._windowStatus.loadingMore) return this._windowStatus = R(I({}, this._windowStatus), { lastState: c }), c;
    const m = d[d.length - 1], g = (y = this._sort.getSortPointer(m), C = this._windowStatus.endPoint, w = this._sort, Xn(y, C, w) === "after" ? y : C);
    var y, C, w;
    return this._windowStatus = {
      endPoint: g,
      loadingMore: p,
      lastState: c
    }, c;
  }
  handleSnapshot(t, e) {
    var n, s;
    const r = (n = this._windowStatus) == null ? void 0 : n.lastState, i = this.updateWindowStatusAndGetState(t, e);
    if (this._connectedDefer.resolve(i), i !== r && ((s = this._onSnapshot) == null || s.call(this, i.latestSnapshot, i.loadedAll)), this._loadMoreDeferred && this._windowStatus === void 0 && (this._loadMoreDeferred.resolve(), this._loadMoreDeferred = void 0), this._loadMoreDeferred && this._windowStatus && this._windowStatus.loadingMore <= 0 && (this._loadMoreDeferred.resolve(), this._loadMoreDeferred = void 0), this._windowStatus && this._windowStatus.loadingMore > 0) {
      const a = this._windowStatus.loadingMore;
      setTimeout(() => this._underlyingSubscription.loadMore(a));
    }
  }
  get state() {
    const t = this._underlyingSubscription.state;
    return t.type === "active" && t !== null ? this._windowStatus ? this._windowStatus.lastState : this.updateWindowStatusAndGetState(t.latestSnapshot, t.loadedAll) : t;
  }
  get connected() {
    return this._connectedDefer.promise;
  }
  get terminated() {
    return this._underlyingSubscription.terminated;
  }
  loadMore() {
    return h(this, arguments, function* (t = this._pageSize) {
      var e, n, s;
      if (t <= 0 || !Number.isInteger(t)) throw new Error("Invalid count: must be a positive integer.");
      if (t > this._maxPageSize) throw new Error(`Invalid count: cannot load more than ${this._maxPageSize} items at once.`);
      if (this._windowStatus === void 0 || this._underlyingSubscription.state.type !== "active") return Promise.resolve();
      const r = this._underlyingSubscription.state.latestSnapshot;
      if (r === null) return Promise.resolve();
      const i = this._underlyingSubscription.state.loadedAll, a = this.updateWindowStatusAndGetState(r, i), l = r.length - a.latestSnapshot.length, o = Math.min(t, i ? l : Number.POSITIVE_INFINITY);
      if (this._windowStatus.loadingMore = Math.max(this._windowStatus.loadingMore, o), l > 0) {
        const c = this._windowStatus.lastState, u = this.updateWindowStatusAndGetState(r, i);
        u !== c && ((e = this._onSnapshot) == null || e.call(this, u.latestSnapshot, u.loadedAll));
      }
      if (this._windowStatus.loadingMore <= 0) return (n = this._loadMoreDeferred) == null || n.resolve(), void (this._loadMoreDeferred = void 0);
      const d = (s = this._loadMoreDeferred) != null ? s : j();
      this._loadMoreDeferred = d, yield this._underlyingSubscription.loadMore(this._windowStatus.loadingMore), yield d.promise;
    });
  }
  unsubscribe() {
    return this._underlyingSubscription.unsubscribe();
  }
}, qi = class extends ge {
  constructor(t, e, n) {
    super((s) => t.subscribe([
      "me",
      "conversations",
      e,
      "messages"
    ], s), n, 30, 100, {
      getSortPointer: (s) => ({
        primary: s.createdAt,
        secondary: s.id
      }),
      primaryOrder: "DESC",
      secondaryOrder: "ASC"
    });
  }
}, Bi = class extends ge {
  constructor(t, e, n) {
    super((s) => t.subscribe([
      "me",
      "conversations",
      e,
      "participants"
    ], s), n, 10, 50, {
      getSortPointer: (s) => ({
        primary: s.joinedAt,
        secondary: s.user.id
      }),
      primaryOrder: "DESC",
      secondaryOrder: "ASC"
    });
  }
}, zt = class extends ge {
  constructor(t, e, n) {
    super((s) => t.subscribe([
      "<filtered>",
      "me",
      "conversations",
      e
    ], s), n, 20, 30, {
      getSortPointer: (s) => {
        var r, i;
        return {
          primary: (i = (r = s.lastMessage) == null ? void 0 : r.createdAt) != null ? i : s.createdAt,
          secondary: s.id
        };
      },
      primaryOrder: "DESC",
      secondaryOrder: "ASC"
    });
  }
}, Li = class {
  constructor(t, e) {
    this.id = t, this._realtimeClient = e, this.uselessObjForTypeCheck = {
      subject: null,
      photoUrl: null,
      welcomeMessages: null,
      custom: null,
      access: null,
      notify: null
    };
  }
  get brandedId() {
    return this.id;
  }
  get brandedUserId() {
    return this._realtimeClient.userId;
  }
  participant(t) {
    if (typeof t == "string") {
      if (t === "") throw new Error(`Creating ParticipantRef failed because ID "${t}" is an empty string`);
      return this._realtimeClient.refs.participant(this.brandedId, t);
    }
    if ("brandedId" in t) return this._realtimeClient.refs.participant(this.brandedId, t.id);
    throw new Error(`Creating ParticipantRef failed because user "${t}" is not a string or a UserRef`);
  }
  message(t) {
    if (typeof t != "string") throw new Error(`Creating MessageRef failed because ID "${t}" is not a string`);
    if (t === "") throw new Error(`Creating MessageRef failed because ID "${t}" is an empty string`);
    return this._realtimeClient.refs.message(this.brandedId, t);
  }
  get() {
    return h(this, null, function* () {
      const t = this.subscribe();
      yield t.connected.catch(() => {
        throw new Error("GET Conversation failed, could not fetch conversation");
      }), yield this._realtimeClient.sync();
      const e = t.state;
      if (t.unsubscribe(), e.type === "active") return e.latestSnapshot;
      throw e.type === "error" ? e.error : "Unreachable";
    });
  }
  set(t) {
    return h(this, null, function* () {
      const e = this._realtimeClient.call({
        method: "PUT",
        path: ["conversations", this.brandedId],
        data: t
      }), n = this._realtimeClient.call({
        method: "PUT",
        path: [
          "conversations",
          this.brandedId,
          "participants",
          this.brandedUserId
        ],
        data: t
      }), s = yield e;
      !s.ok && s.where === "server" && s.value.status === 403 && s.value.errorCode === "UNAUTHORIZED_TO_EDIT" && (function(i) {
        return !(i.subject !== void 0 || i.photoUrl !== void 0 || i.welcomeMessages !== void 0 || i.custom === null || i.custom !== void 0 && Object.values(i.custom).some((a) => a !== void 0));
      })(t) || _("Set conversation " + this.id, s);
      const r = yield n;
      !r.ok && r.where === "server" && r.value.status === 403 && r.value.errorCode === "UNAUTHORIZED_TO_EDIT_PARTICIPANT" && (function(i) {
        return i.access === void 0 && i.notify === void 0;
      })(t) || _("Set your participation in conversation " + this.id, r);
    });
  }
  createIfNotExists() {
    return h(this, arguments, function* (t = {}) {
      const e = this._realtimeClient.call({
        method: "POST",
        path: ["conversations", this.brandedId],
        data: t
      }), n = this._realtimeClient.call({
        method: "POST",
        path: [
          "conversations",
          this.brandedId,
          "participants",
          this.brandedUserId
        ],
        data: t
      }), s = yield e;
      (s.ok || s.where !== "server" || s.value.status !== 409) && _("Create conversation " + this.id, yield e);
      const r = yield n;
      (r.ok || r.where !== "server" || r.value.status !== 409) && _("Join conversation " + this.id, yield n);
    });
  }
  markAsRead() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "POST",
        path: [
          "me",
          "conversations",
          this.brandedId,
          "read"
        ],
        data: {}
      });
      _(`Mark ${this.id} as read`, t);
    });
  }
  markAsUnread() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "POST",
        path: [
          "me",
          "conversations",
          this.brandedId,
          "unread"
        ],
        data: {}
      });
      _(`Mark ${this.id} as unread`, t);
    });
  }
  send(t) {
    return h(this, null, function* () {
      const e = {
        content: Gi(t),
        referencedMessageId: Fi(t),
        custom: typeof t == "string" ? void 0 : t.custom,
        idempotencyKey: Gs((/* @__PURE__ */ new Date()).getTime())
      }, n = yield this._realtimeClient.call({
        method: "POST",
        path: [
          "conversations",
          this.brandedId,
          "messages"
        ],
        data: e
      }), s = _("Send message to conversation " + this.id, n);
      return this._realtimeClient.refs.message(this.brandedId, s.id);
    });
  }
  subscribeMessages(t) {
    return new qi(this._realtimeClient, this.brandedId, t);
  }
  subscribeParticipants(t) {
    return new Bi(this._realtimeClient, this.brandedId, t);
  }
  subscribe(t) {
    return this._realtimeClient.subscribe([
      "me",
      "conversations",
      this.brandedId
    ], t);
  }
  subscribeTyping(t) {
    return this._realtimeClient.subscribe([
      "me",
      "conversations",
      this.brandedId,
      "typing"
    ], t);
  }
  markAsTyping() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "POST",
        path: [
          "me",
          "conversations",
          this.brandedId,
          "typing"
        ],
        data: {}
      });
      _(`Set user as typing in  ${this.id}`, t);
    });
  }
};
function Gi(t) {
  return typeof t == "string" ? [{
    type: "text",
    children: gn(t)
  }] : "text" in t ? [{
    type: "text",
    children: gn(t.text)
  }] : t.content;
}
function Fi(t) {
  if (typeof t == "string") return;
  const e = t.referencedMessage;
  return e !== void 0 ? typeof e == "string" ? e : e.id : void 0;
}
var Hi = class {
  constructor(t, e, n) {
    this.userId = t, this.conversationId = e, this._realtimeClient = n;
  }
  get brandedUserId() {
    return this.userId;
  }
  get brandedConversationId() {
    return this.conversationId;
  }
  get() {
    return h(this, null, function* () {
      const t = this.subscribe();
      yield t.connected.catch(() => {
        throw new Error("GET Participant failed, could not fetch participant");
      }), yield this._realtimeClient.sync();
      const e = t.state;
      if (t.unsubscribe(), e.type === "active" && e.latestSnapshot !== null || e.type === "active" && e.latestSnapshot === null && this.brandedUserId === this._realtimeClient.userId) return e.latestSnapshot;
      if (e.type === "active" && e.latestSnapshot === null) {
        if (yield t._sideExists()) return null;
        throw new Error(B(`Get participant ${this.userId} in conversation ${this.conversationId}`, {
          status: 403,
          errorCode: "NOT_A_PARTICIPANT",
          reasons: ["You must be a participant in the conversation to get the other participant's info"]
        }));
      }
      throw e.type === "error" ? e.error : "Unreachable";
    });
  }
  set() {
    return h(this, arguments, function* (t = {}) {
      const e = yield this._realtimeClient.call({
        method: "PUT",
        path: [
          "conversations",
          this.brandedConversationId,
          "participants",
          this.brandedUserId
        ],
        data: t
      });
      _(`Set participant ${this.userId} in conversation ${this.conversationId}`, e);
    });
  }
  edit() {
    return h(this, arguments, function* (t = {}) {
      const e = yield this._realtimeClient.call({
        method: "PATCH",
        path: [
          "conversations",
          this.brandedConversationId,
          "participants",
          this.brandedUserId
        ],
        data: t
      });
      _(`Edit participant ${this.userId} in conversation ${this.conversationId}`, e);
    });
  }
  createIfNotExists() {
    return h(this, arguments, function* (t = {}) {
      const e = yield this._realtimeClient.call({
        method: "POST",
        path: [
          "conversations",
          this.brandedConversationId,
          "participants",
          this.brandedUserId
        ],
        data: t
      });
      (e.ok || e.where !== "server" || e.value.status !== 409) && _(`Add participant ${this.userId} to conversation ${this.conversationId}`, e);
    });
  }
  delete() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "DELETE",
        path: [
          "conversations",
          this.brandedConversationId,
          "participants",
          this.brandedUserId
        ],
        data: {}
      });
      (t.ok || t.where !== "server" || t.value.status !== 404) && _(`Remove participant ${this.userId} from conversation ${this.conversationId}`, t);
    });
  }
  subscribe(t) {
    return this._realtimeClient.subscribe([
      "me",
      "conversations",
      this.brandedConversationId,
      "participants",
      this.brandedUserId
    ], t);
  }
}, zi = class {
  constructor(t, e, n) {
    this.id = t, this.conversationId = e, this._realtimeClient = n;
  }
  get brandedId() {
    return this.id;
  }
  get brandedConversationId() {
    return this.conversationId;
  }
  reactions(t) {
    if (typeof t != "string") throw new Error(`Creating ReactionsRef failed because emoji "${t}" is not a string`);
    if (t === "") throw new Error(`Creating ReactionsRef failed because emoji "${t}" is an empty string`);
    return this._realtimeClient.refs.reactions(this.brandedConversationId, this.brandedId, t);
  }
  reaction(t) {
    return this.reactions(t);
  }
  get() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          this.brandedConversationId,
          "messages",
          this.brandedId
        ],
        data: {}
      });
      if (!t.ok && t.where === "server" && t.value.status === 404 || !t.ok && t.where === "server" && t.value.status === 403 && t.value.errorCode === "NOT_A_PARTICIPANT") return null;
      const e = _("Get message " + this.id, t), n = yield this._realtimeClient.hydrateMessageData(e, this.brandedConversationId);
      return ts("Get message " + this.id, n);
    });
  }
  translate(t) {
    return h(this, null, function* () {
      if (typeof t != "string" || t === "") throw new Error("Translating a message requires a non-empty language");
      const e = yield this._realtimeClient.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          this.brandedConversationId,
          "translate"
        ],
        data: {
          ids: [this.brandedId],
          lang: t
        }
      }), n = _(`Translate message ${this.id} in conversation ${this.conversationId}`, e).data[this.brandedId];
      if (!n) return null;
      if ("content" in n) return {
        content: n.content,
        plaintext: lt(n.content)
      };
      const s = [{
        type: "text",
        children: Rt(n.markup)
      }];
      return {
        content: s,
        plaintext: lt(s)
      };
    });
  }
  edit(t) {
    return h(this, null, function* () {
      const e = {
        content: Ji(t),
        custom: typeof t == "string" ? void 0 : t.custom
      }, n = yield this._realtimeClient.call({
        method: "PATCH",
        path: [
          "conversations",
          this.brandedConversationId,
          "messages",
          this.brandedId
        ],
        data: e
      });
      _(`Edit message ${this.id} in conversation ${this.conversationId}`, n);
    });
  }
  delete() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "DELETE",
        path: [
          "conversations",
          this.brandedConversationId,
          "messages",
          this.brandedId
        ],
        data: {}
      });
      (t.ok || t.where !== "server" || t.value.status !== 404) && _(`Delete message ${this.id} in conversation ${this.conversationId}`, t);
    });
  }
};
function Ji(t) {
  if (typeof t == "string") return [{
    type: "text",
    children: Rt(t)
  }];
  if ("text" in t && t.text) return [{
    type: "text",
    children: Rt(t.text)
  }];
  if ("content" in t && t.content) return t.content;
}
var Yi = class {
  constructor(t, e, n, s) {
    this.emoji = t, this.messageId = e, this.conversationId = n, this._realtimeClient = s;
  }
  get brandedMessageId() {
    return this.messageId;
  }
  get brandedConversationId() {
    return this.conversationId;
  }
  get brandedEmoji() {
    return this.emoji;
  }
  add() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "PUT",
        path: [
          "conversations",
          this.brandedConversationId,
          "messages",
          this.brandedMessageId,
          "reactions",
          this.brandedEmoji,
          this._realtimeClient.userId
        ],
        data: {}
      });
      _(`Add ${this.emoji} reaction on message ${this.messageId} in conversation ${this.conversationId}`, t);
    });
  }
  remove() {
    return h(this, null, function* () {
      const t = yield this._realtimeClient.call({
        method: "DELETE",
        path: [
          "conversations",
          this.brandedConversationId,
          "messages",
          this.brandedMessageId,
          "reactions",
          this.brandedEmoji,
          this._realtimeClient.userId
        ],
        data: {}
      });
      (t.ok || t.where !== "server" || t.value.status !== 404) && _(`Remove ${this.emoji} reaction from message ${this.messageId} in conversation ${this.conversationId}`, t);
    });
  }
  getFirstReactions() {
    return h(this, null, function* () {
      const t = this.subscribe(), { latestSnapshot: e } = yield t.connected;
      return t.unsubscribe(), e ? e.slice(0, 10) : null;
    });
  }
  subscribe(t) {
    return this._realtimeClient.subscribe([
      "me",
      "conversations",
      this.brandedConversationId,
      "messages",
      this.brandedMessageId,
      "reactions",
      this.brandedEmoji
    ], t);
  }
}, dt = typeof WeakRef < "u" ? WeakRef : class {
  constructor(t) {
    this.value = t;
  }
  deref() {
    return this.value;
  }
}, vn = globalThis.FinalizationRegistry, Vi = vn !== void 0 ? vn : class {
  constructor(t) {
  }
  register(t, e, n) {
  }
  unregister(t) {
  }
}, Qi = class {
  constructor(t) {
    this.client = t, this.userRefs = /* @__PURE__ */ new Map(), this.conversationRefs = /* @__PURE__ */ new Map(), this.participantRefs = /* @__PURE__ */ new Map(), this.messageRefs = /* @__PURE__ */ new Map(), this.reactionsRefs = /* @__PURE__ */ new Map(), this.registry = new Vi(({ map: e, key: n }) => {
      e.delete(n);
    });
  }
  user(t) {
    var e;
    const n = (e = this.userRefs.get(t)) == null ? void 0 : e.deref();
    if (n) return n;
    const s = k(new Ls(t, this.client));
    return this.userRefs.set(t, new dt(s)), this.registry.register(s, {
      map: this.userRefs,
      key: t
    }), s;
  }
  conversation(t) {
    var e;
    const n = (e = this.conversationRefs.get(t)) == null ? void 0 : e.deref();
    if (n) return n;
    const s = k(new Li(t, this.client));
    return this.conversationRefs.set(t, new dt(s)), this.registry.register(s, {
      map: this.conversationRefs,
      key: t
    }), s;
  }
  participant(t, e) {
    var n;
    const s = `[${t}][${e}]`, r = (n = this.participantRefs.get(s)) == null ? void 0 : n.deref();
    if (r) return r;
    const i = k(new Hi(e, t, this.client));
    return this.participantRefs.set(s, new dt(i)), this.registry.register(i, {
      map: this.participantRefs,
      key: s
    }), i;
  }
  message(t, e) {
    var n;
    const s = `[${t}][${e}]`, r = (n = this.messageRefs.get(s)) == null ? void 0 : n.deref();
    if (r) return r;
    const i = k(new zi(e, t, this.client));
    return this.messageRefs.set(s, new dt(i)), this.registry.register(i, {
      map: this.messageRefs,
      key: s
    }), i;
  }
  reactions(t, e, n) {
    var s;
    const r = `[${t}][${e}][${n}]`, i = (s = this.reactionsRefs.get(r)) == null ? void 0 : s.deref();
    if (i) return i;
    const a = k(new Yi(n, e, t, this.client));
    return this.reactionsRefs.set(r, new dt(a)), this.registry.register(a, {
      map: this.reactionsRefs,
      key: r
    }), a;
  }
}, Ki = class {
  constructor(t, e, n) {
    this.userId = e, this.refs = new Qi(this), this.alive = !0, this.connection = new Bs(t, n, this), n.onTokenRefreshFailed(() => {
      this.destroy();
    });
  }
  call(t) {
    return h(this, null, function* () {
      return this.alive ? this.connection.call(t) : O("SESSION_DESTROYED");
    });
  }
  subscribe(t, e) {
    return this.connection.subscribe(t, e);
  }
  internalSubscribe(t) {
    const e = this.connection.getOrCreateStore(t);
    return {
      store: e,
      unsubscribe: e.registerInternalSubscription()
    };
  }
  destroy() {
    this.alive = !1, this.connection.destroy();
  }
  isConnected() {
    return this.connection.isConnected();
  }
  sync() {
    return h(this, null, function* () {
      yield this.connection.sync();
    });
  }
  hydrateMessageData(t, e) {
    return h(this, null, function* () {
      const n = t.senderId === null ? Promise.resolve(f(null)) : this.getUser(t.senderId), s = t.referencedMessageId === null ? Promise.resolve(f(null)) : this.getReferencedMessage(e, t.referencedMessageId), r = yield n;
      if (!r.ok) return r;
      const i = yield s;
      return i.ok ? f((function(a, l, o) {
        return k({
          id: a.id,
          type: a.type,
          sender: l,
          referencedMessage: o,
          custom: k(a.custom),
          createdAt: a.createdAt,
          editedAt: a.editedAt,
          origin: a.origin,
          content: a.content,
          reactions: Zt(a.reactions),
          plaintext: lt(a.content)
        });
      })(t, r.value, i.value)) : i;
    });
  }
  hydrateConvData(t, e) {
    return h(this, null, function* () {
      const n = this.listMessages(t.id, { limit: 1 }, e), s = yield this.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          t.id
        ],
        data: {},
        headers: e
      });
      if (!s.ok && s.where === "server" && s.value.status === 404) return f(null);
      const r = _("Get conversation " + t.id, s), i = ts("Get last message in conversation " + t.id, yield n);
      return f((function(a, l) {
        return k({
          id: a.id,
          subject: a.subject,
          photoUrl: a.photoUrl,
          welcomeMessages: k(a.welcomeMessages),
          custom: k(a.custom),
          createdAt: a.createdAt,
          joinedAt: a.joinedAt,
          lastMessageAt: a.lastMessageAt,
          unreadMessageCount: a.unreadMessageCount,
          isUnread: a.isUnread,
          access: a.access,
          notify: a.notify,
          lastMessage: l,
          readUntil: a.readUntil,
          everyoneReadUntil: a.everyoneReadUntil
        });
      })(r, i.length === 0 ? null : i[0]));
    });
  }
  listMessages(t, e, n) {
    return h(this, null, function* () {
      const s = yield this.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          t,
          "messages"
        ],
        data: e,
        headers: n
      });
      if (!s.ok) return Jt(s, "Listing messages in " + t);
      const r = s.value.data.data, i = yield Promise.all(r.map((l) => this.hydrateMessageData(l, t))), a = i.find((l) => !l.ok);
      return a !== void 0 && !a.ok ? a : f(i.map(({ value: l }) => l));
    });
  }
  getReferencedMessage(t, e) {
    return h(this, null, function* () {
      const n = yield this.call({
        method: "GET",
        path: [
          "me",
          "conversations",
          t,
          "messages",
          e
        ],
        data: {}
      });
      if (!n.ok && n.where === "server" && n.value.status === 404 || !n.ok && n.where === "server" && n.value.status === 403 && n.value.errorCode === "NOT_A_PARTICIPANT") return f(null);
      if (!n.ok) return Jt(n, `Fetching referenced message ${e} in conversation ${t}`);
      const s = n.value.data, r = yield this.getUser(s.senderId);
      return r.ok ? f((function(i, a) {
        return k({
          id: i.id,
          type: i.type,
          sender: a,
          referencedMessageId: i.referencedMessageId,
          custom: k(i.custom),
          createdAt: i.createdAt,
          editedAt: i.editedAt,
          origin: i.origin,
          content: i.content,
          reactions: Zt(i.reactions),
          plaintext: lt(i.content)
        });
      })(s, r.value)) : r;
    });
  }
  getUser(t) {
    return h(this, null, function* () {
      const e = yield this.call({
        method: "GET",
        path: ["users", t],
        data: { includePrivateFields: !1 }
      });
      return !e.ok && e.where === "server" && e.value.status === 404 ? f(null) : e.ok ? f(Kt(e.value.data)) : Jt(e, "Get user " + t);
    });
  }
};
function Jt(t, e) {
  return t.where === "server" ? q(R(I({}, t.value), { operation: e })) : t;
}
function ts(t, e) {
  var n;
  if (e.ok) return e.value;
  throw e.value === "SESSION_DESTROYED" ? /* @__PURE__ */ new Error(`${t} failed because the session was destroyed`) : new Error(B((n = e.value.operation) != null ? n : t, e.value));
}
var yn = class gt {
  constructor(e, n, s) {
    this.realtimeWsApiUrl = e, this.internalHttpApiUrl = n, this.restApiHttpUrl = s;
  }
  getBokensUrl(e, n, s) {
    return this.internalHttpApiUrl + `/${e}/bokens/${encodeURIComponent(n)}?signature=${encodeURIComponent(s ?? "")}`;
  }
  getRealtimeWsUrl(e, n, s, r, i) {
    const a = encodeURIComponent(n);
    return this.realtimeWsApiUrl + `/${e}/realtime/${a}?talkjs-client-build=${i ?? "standalone"}&talkjs-core=${s}&talkjs-client-id=${r}`;
  }
  static fromHost(e) {
    var n;
    const s = new gt("wss://realtime.talkjs.com/v1", "https://app.talkjs.com/api/v0", "https://api.talkjs.com/v1");
    if (!e) return s;
    if (e === "@currentHost") {
      if (typeof location > "u") throw new Error("You can only use @currentHost in a browser.");
      e = ((n = window.top) != null ? n : window).location.host;
    }
    if (e.endsWith("talkjs.com")) {
      const r = e.match(/^(?:\w+-)?([^.]+)\.talkjs\.com$/);
      if (r) {
        const i = r[1];
        return [
          "app",
          "cdn",
          "api",
          "realtime"
        ].includes(i) ? s : new gt(`wss://realtime-${i}.talkjs.com/v1`, `https://app-${i}.talkjs.com/api/v0`, `https://api-${i}.talkjs.com/v1`);
      }
      return s;
    }
    return e.includes("localhost") || e.includes("localtest.me") || /^\d+\.\d+\.\d+\.\d+(:\d+)?$/.test(e) ? new gt(`ws://${e}/public_api/v1`, `http://${e}/api/v0`, `http://${e}/public_api/v1`) : new gt(`wss://${e}/public_api/v1`, `https://${e}/api/v0`, `https://${e}/public_api/v1`);
  }
};
function kt({ method: t, url: e, data: n, options: s, attempts: r, shouldRetry: i, authProvider: a, errorTracker: l, abortSignal: o }) {
  var d;
  (!r || r <= 0) && (r = 1);
  const c = {
    "x-talkjs-client-build": "jssdk-dev",
    "x-talkjs-client-date": "2026-09-02T11:11:08.839Z"
  };
  return n instanceof FormData || (c["Content-Type"] = (d = s?.contentType) != null ? d : "application/json"), _n(r, () => h(null, null, function* () {
    if (a) {
      const u = yield a.getToken();
      c.Authorization = `Bearer ${u}`;
    }
    return fetch(e, {
      method: t,
      headers: c,
      body: n,
      signal: o
    }).then((u) => {
      if (u.ok) return u;
      throw u;
    });
  }), {
    initialDelay: 0.2,
    log: void 0,
    shouldRetry: (u) => h(null, null, function* () {
      return a && u.status === 401 ? (l?.log(`401 error from ${t} ${e}, ${yield a.getToken()}`), a.invalidateAndRefresh(), !0) : i ? i(u) : !(typeof u == "object" && "status" in u && u.status >= 400 && u.status < 500);
    })
  }).catch((u) => {
    if (Math.random() < 0.1 && !e.toString().startsWith("https://capture.trackjs.com")) {
      const p = `Network Error for ${t} ${e}`;
      typeof window < "u" && (u instanceof Response ? u.clone().text().then((m) => l?.log(`${p} ${u.status} ${m} (10% logged)`)) : l?.log(`${p} ${u} (10% logged)`)), console.error("[TalkJS]", p);
    }
    throw u;
  });
}
var Zi = class {
  constructor(t) {
    Me(this, Tt), Me(this, pt);
    var e, n, s, r;
    this._timeCreated = Date.now(), Ae(this, Tt, (n = (e = globalThis.document) == null ? void 0 : e.referrer) != null ? n : ""), Ae(this, pt, ((r = (s = globalThis.location) == null ? void 0 : s.href) != null ? r : globalThis.HermesInternal) ? "React Native Hermes" : ""), this._trackJSData = {
      customer: {
        application: "",
        correlationId: "",
        sessionId: "",
        token: "",
        userId: "",
        version: "dev-2026-09-02T11:11:08.839Z"
      },
      entry: "direct",
      environment: {
        age: Date.now() - this._timeCreated,
        dependencies: {},
        originalUrl: Pt(this, pt),
        referrer: Pt(this, Tt),
        userAgent: window.navigator.userAgent
      },
      metadata: [],
      nav: [],
      network: [],
      url: Pt(this, pt),
      stack: "",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      version: "dev-2026-09-02T11:11:08.839Z",
      throttled: 0
    }, this._url = `https://capture.trackjs.com/capture?token=${t}`, this._trackJSData.customer.token = t;
  }
  setData({ appId: t, meId: e, sessionId: n }) {
    this._trackJSData.customer.userId = t, this._trackJSData.customer.sessionId = `${t}/${e}`, this._trackJSData.customer.correlationId = n;
  }
  log(t) {
    return h(this, null, function* () {
      try {
        const e = R(I({}, this._trackJSData), { message: t });
        yield kt({
          method: "POST",
          url: this._url,
          data: JSON.stringify(e),
          options: { contentType: "text/plain" }
        });
      } catch (e) {
        console.error("[TalkJS] Failed when sending an error report. Error: ", e);
      }
    });
  }
};
Tt = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
var Xi = {
  log: (t) => Promise.resolve(),
  setData: (t) => {
  }
}, ta = class {
  constructor(t, e = {}) {
    this._onSubscription = e, this._handlers = {};
    for (const n in t) Object.hasOwnProperty.call(t, n) && (this._handlers[n] = []);
  }
  emit(t, e) {
    for (const n of this._handlers[t]) try {
      n(e);
    } catch (s) {
      console.error(`[TalkJS] '${String(t)}' handler threw an error:`, s);
    }
  }
  emitAsync(t, e) {
    return h(this, null, function* () {
      try {
        const n = this._handlers[t].map((s) => s(e));
        yield Promise.all(n);
      } catch (n) {
        console.error(`[TalkJS] '${String(t)}' handler threw an error:`, n);
      }
    });
  }
  supports(t) {
    return t in this._handlers;
  }
  on(t, e) {
    var n, s;
    if (!this.supports(t)) throw new Error(`Unknown event type '${String(t)}'`);
    (s = (n = this._onSubscription)[t]) == null || s.call(n), this._handlers[t].push(e);
  }
  off(t, e) {
    if (!Object.hasOwnProperty.call(this._handlers, t)) throw new Error(`Unknown event type '${String(t)}'`);
    const n = this._handlers[t].indexOf(e);
    n !== -1 && this._handlers[t].splice(n, 1);
  }
  removeAllListeners() {
    for (const t in this._handlers) this._handlers[t] = [];
  }
  handles(t) {
    return this._handlers[t].length > 0;
  }
  subscribe(t, e) {
    return this.on(t, e), { unsubscribe: () => this.off(t, e) };
  }
}, ea = class {
  constructor(t) {
    this.handlers = t, this.tokenResult = null, this.pendingToken = null;
  }
  getTokenResult() {
    return h(this, null, function* () {
      if (this.tokenResult) return this.tokenResult;
      if (this.pendingToken) return this.pendingToken.promise;
      const t = j();
      return this.pendingToken = t, this.handlers.onNeedToken(), t.promise;
    });
  }
  getCachedTokenResult() {
    return this.tokenResult ? this.tokenResult : void 0;
  }
  setTokenResult(t) {
    this.pendingToken && (this.pendingToken.resolve(t), this.pendingToken = null), this.tokenResult = t, this.handlers.onChange(t);
  }
  refreshToken() {
    this.pendingToken || (this.pendingToken = j(), this.handlers.onNeedToken());
  }
  invalidateAndRefresh() {
    this.tokenResult = null, this.refreshToken();
  }
}, na = class {
  constructor(t, e, n, s) {
    this.apiUrls = t, this.appId = e, this.userId = n, this.signature = s, this.inner = new ea({
      onChange: (i) => {
        i.ok ? this.eventEmitter.emit("tokenChanged", i.value) : this.emitTokenRefreshFailed(i.value);
      },
      onNeedToken: () => h(this, null, function* () {
        if (this._usingBokens && !this.signature && !this._calledBokens && (yield new Promise((i) => setTimeout(i, 1))), this._usingBokens) yield this.sendBokenRequest().then((i) => this.inner.setTokenResult(f(i))).catch((i) => this.inner.setTokenResult(q(i)));
        else if (this.onNeedToken) this.onNeedToken();
        else {
          const i = O("Cannot refresh token, no `onNeedToken` provided.");
          this.inner.setTokenResult(i);
        }
      })
    }), this._usingBokens = !0, this._calledBokens = !1, this.onNeedToken = void 0, this.eventEmitter = new ta({
      tokenChanged(i) {
      },
      tokenRefreshFailed(i) {
      },
      tokenAccepted(i) {
      }
    }), this.sessionExpiryWarningTimeoutId = void 0;
    const r = typeof window < "u" && t.restApiHttpUrl.includes("api.talkjs.com");
    this.errorTracker = r ? new Zi("970cd0be0fb74630b75c8451051299dc") : Xi;
  }
  get usingBokens() {
    return this._usingBokens;
  }
  getToken() {
    return h(this, null, function* () {
      return wn(yield this.inner.getTokenResult());
    });
  }
  getCachedToken() {
    const t = this.inner.getCachedTokenResult();
    if (t !== void 0) return wn(t);
  }
  checkCanSetAuth() {
    if (this._calledBokens) throw new Error("[TalkJS] Cannot switch to JWT authentication once connected to TalkJS servers. To use JWTs, call `setToken` or set `onNeedToken` before triggering any requests or mounting any components. We recommend setting up authentication in your app's entry point (App.jsx, main.js, or similar) so it runs first.");
  }
  setToken(t) {
    this.checkCanSetAuth(), setTimeout(() => this.checkJwt(t), 200), this._usingBokens = !1, this.inner.setTokenResult(f(t));
  }
  setTokenError(t) {
    this._usingBokens = !1, this.inner.setTokenResult(O(t));
  }
  refreshToken() {
    this.inner.refreshToken();
  }
  invalidateAndRefresh() {
    this.inner.invalidateAndRefresh();
  }
  setOnNeedToken(t) {
    this.checkCanSetAuth(), this._usingBokens = !1, this.onNeedToken = t;
  }
  onTokenChanged(t) {
    return this.eventEmitter.on("tokenChanged", t), () => {
      this.eventEmitter.off("tokenChanged", t);
    };
  }
  onTokenRefreshFailed(t) {
    return this.eventEmitter.on("tokenRefreshFailed", t), () => {
      this.eventEmitter.off("tokenRefreshFailed", t);
    };
  }
  emitTokenRefreshFailed(t) {
    this.eventEmitter.emit("tokenRefreshFailed", t);
  }
  onTokenAccepted(t) {
    return this.eventEmitter.on("tokenAccepted", t), () => {
      this.eventEmitter.off("tokenAccepted", t);
    };
  }
  emitTokenAccepted(t) {
    this.eventEmitter.emit("tokenAccepted", t);
  }
  clearScheduledRefresh() {
    this.sessionExpiryWarningTimeoutId && clearTimeout(this.sessionExpiryWarningTimeoutId);
  }
  scheduleRefresh(t) {
    if (this.clearScheduledRefresh(), t === null) return;
    const e = this.onNeedToken !== void 0;
    t < 120 && !e ? console.warn(`[TalkJS] TalkJS will stop working in ${t} seconds due to auth token expiry. Token expires in ${t} seconds, and cannot be refreshed because no \`onNeedToken\` callback was provided. Non-refreshable tokens are recommended to expire at least 24 hours in the future.`) : t < 120 && e ? console.warn(`[TalkJS] TalkJS auth token will expire and need to be refreshed in ${t} seconds. Refreshable JWTs are recommended to expire at least 30 minutes in the future, to improve performance and reduce unnecessary refreshes.`) : t < 3300 && !e && console.warn(`[TalkJS debug] TalkJS will stop working in ${Math.round(t / 60)} minutes due to auth token expiry. Non-refreshable tokens are recommended to expire at least 24 hours in the future. Alternatively, set \`onNeedToken\` with a callback that will run whenever a new token is needed.`);
    const n = t > 600 ? t - 300 : t / 2, s = Math.min(1728e6, 1e3 * n);
    this.sessionExpiryWarningTimeoutId = setTimeout(() => {
      this.onNeedToken !== void 0 && this.refreshToken();
    }, s);
  }
  checkJwt(t) {
    (function(i) {
      if (!(typeof i == "string" || i instanceof String))
        throw i === void 0 ? "Token was undefined" : "Token must be a string, got: " + i;
    })(t);
    const e = [];
    let n, s, r;
    if (typeof t == "string" ? n = t : e.push(`Token type is ${typeof t} instead of a string.`), n) try {
      const i = (function(a) {
        const l = a.split(".");
        if (l.length !== 3) throw "Token does not contain exactly two `.`. Check that you generated your JWT correctly. It should be `<header>.<payload>.<signature>`.";
        return {
          header: bn(l[0]),
          payload: bn(l[1])
        };
      })(n);
      s = i.header, r = i.payload;
    } catch (i) {
      e.push(i);
    }
    if (s) {
      const i = this.checkJwtHeader(s);
      e.push(...i);
    }
    if (r) {
      const i = this.checkJwtPayload(r);
      e.push(...i);
    }
    if (e.length) if (this.usingBokens) this.errorTracker.log(`JWT Errors detected by AuthProvider when using bokens: ${e.join(`
`)}`);
    else {
      console.warn("[TalkJS] Authentication token appears to be generated incorrectly. Will still attempt to authenticate, but TalkJS may not work as expected. See below for a description of any problems and how to fix them.");
      const i = e.length > 1;
      e.forEach((a, l) => {
        const o = i ? `Reason ${l + 1}:` : "Reason:";
        console.warn(`[TalkJS] ${o} ${a}`);
      }), console.warn(`[TalkJS]: Authentication token: "${t}"`);
    }
  }
  checkJwtHeader(t) {
    const e = [], n = t.alg;
    return n === void 0 ? e.push('Token header must contain `"alg": "HS256"`, but no `alg` was specified.') : typeof n != "string" ? e.push(`Token header must contain \`"alg": "HS256"\`, but \`alg\` was ${typeof n} instead of a string. Make sure you wrap the value in "".`) : n !== "HS256" && e.push(`Token header must contain \`"alg": "HS256"\`, but \`alg\` was set to "${n}" instead. HS256 is the only supported algorithm.`), e;
  }
  checkJwtPayload(t) {
    const e = [], n = t.iss;
    n === void 0 ? e.push(`Token payload must contain an \`iss\` claim set to your app ID (${this.appId}), but \`iss\` was missing.`) : typeof n != "string" ? e.push(`Token payload must contain an \`iss\` claim set to your app ID (${this.appId}), but \`iss\` was ${typeof n} instead of a string. Make sure you wrap the value in "".`) : n !== this.appId && e.push(`Token payload must contain an \`iss\` claim set to your app ID (${this.appId}), but \`iss\` was set to "${n}" instead.`);
    const s = t.sub;
    s === void 0 ? e.push(`Token payload must contain a \`sub\` claim set to your user ID (${this.userId}), but \`sub\` was missing.`) : typeof s != "string" ? e.push(`Token payload must contain a \`sub\` claim set to your user ID (${this.userId}), but \`sub\` was ${typeof s} instead of a string. Make sure you wrap the value in "".`) : s !== this.userId && e.push(`Token payload must contain a \`sub\` claim set to your userId ID (${this.userId}), but \`sub\` was set to "${s}" instead.`);
    const r = t.tokenType;
    r === void 0 ? e.push('Token payload must contain a `"tokenType": "user"` claim, but no `tokenType` was specified.') : typeof r != "string" ? e.push(`Token payload must contain a \`"tokenType": "user"\` claim, but \`tokenType\` was ${typeof r} instead of a string. Make sure you wrap the value in "".`) : r !== "user" && e.push(`Token payload must contain a \`"tokenType": "user"\` claim, but \`tokenType\` was set to "${r}" instead.`);
    const i = t.exp;
    i === void 0 || (typeof i != "number" ? e.push(`Token payload contains an \`exp\` claim, but \`exp\` was ${typeof r} instead of a number. If set, \`exp\` should be the expiry date as a number of seconds since 1970-01-01. Don't wrap the value in "".`) : i < 1e9 ? e.push(`Token payload contains an \`exp\` claim, but \`exp\` is very small (${i}, representing ${(/* @__PURE__ */ new Date(1e3 * i)).toLocaleDateString()}). If set, \`exp\` should be the expiry date as a number of seconds since 1970-01-01.`) : i > 1e11 ? e.push(`Token payload contains an \`exp\` claim, but \`exp\` is very small (${i}, representing ${(/* @__PURE__ */ new Date(1e3 * i)).toLocaleDateString()}). If set, \`exp\` should be the expiry date as a number of seconds since 1970-01-01. Double-check that you are using seconds and not milliseconds or nanoseconds.`) : i < (/* @__PURE__ */ new Date()).getTime() / 1e3 && e.push(`Token payload contains an \`exp\` claim, but \`exp\` (${i}, representing ${(/* @__PURE__ */ new Date(1e3 * i)).toLocaleDateString()}) appears to be in the past, meaning the token will be rejected. This error can also happen if your device's clock is set incorrectly, in which case the token will still work.`));
    const a = t.nbf;
    return a === void 0 || (typeof a != "number" ? e.push(`Token payload contains a \`nbf\` (not-before) claim, but \`nbf\` was ${typeof r} instead of a number. If set, \`nbf\` should be the date when the JWT becomes valid, as a number of seconds since 1970-01-01.`) : a > 1e11 && e.push(`Token payload contains a \`nbf\` (not-before) claim, but \`nbf\` is very large (${a}, representing ${(/* @__PURE__ */ new Date(1e3 * a)).toLocaleDateString()}). If set, \`nbf\` should be the date when the JWT becomes valid, as a number of seconds since 1970-01-01. Double-check that you are using seconds and not milliseconds or nanoseconds.`)), e;
  }
  sendBokenRequest() {
    return h(this, null, function* () {
      this._calledBokens = !0;
      let t = 0;
      return (yield (yield kt({
        method: "GET",
        url: this.apiUrls.getBokensUrl(this.appId, this.userId, this.signature),
        attempts: 1e4,
        shouldRetry: (e) => {
          if (e instanceof Error) return !0;
          if (e.status === 401) throw "Check that you provided a valid signature.";
          if (e.status === 404) throw "Check that you specified the correct App ID.";
          if (e.status === 429 || e.status === 502) return !0;
          if (e.status >= 400 && e.status < 500) throw `Unexpected HTTP ${e.status} response when fetching auth token. Check that you configured the session correctly.`;
          if (t++, t >= 5) throw `Unexpected HTTP ${e.status} response when fetching auth token, retrying did not help.`;
          return !0;
        },
        errorTracker: this.errorTracker
      })).json()).boken;
    });
  }
};
function bn(t) {
  try {
    const e = t.replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(atob(e).split("").map((s) => "%" + ("00" + s.charCodeAt(0).toString(16)).slice(-2)).join(""));
    return JSON.parse(n);
  } catch {
    throw `Could not base64-decode and JSON-parse token section: ${t}. Check that you base-64 encoded the section correctly.`;
  }
}
function wn(t) {
  if (t.ok) return t.value;
  throw t.value;
}
var kn = class {
  constructor(t, e, n, s, r, i) {
    this.onResults = t, this.searchString = e, this.baseUrl = n, this.hydrateData = s, this.authProvider = r, this.conversationFilter = i, this.error = void 0, this.lastCompletedQueryState = {
      results: [],
      loadedAll: !1
    }, this.currentCursor = void 0, this.cancelQuery = () => {
    }, t?.([], "searching");
  }
  get currentState() {
    return this.loadingDeferred ? this.loadingDeferred.promise : Promise.resolve(this.lastCompletedQueryState);
  }
  cancel() {
    this.cancelQuery();
  }
  buildUrl(t) {
    const e = new URL(this.baseUrl);
    return this.currentCursor === void 0 && (e.searchParams.append("searchString", encodeURIComponent(this.searchString)), e.searchParams.append("conversationFilter", JSON.stringify(this.conversationFilter))), this.currentCursor !== void 0 && e.searchParams.append("cursor", this.currentCursor), e.searchParams.append("limit", t.toString()), e.toString();
  }
  loadMore(t) {
    return h(this, null, function* () {
      var e, n;
      if (this.error) throw this.error;
      if (this.loadingDeferred) return this.loadingDeferred.promise;
      if (this.lastCompletedQueryState.loadedAll) return Promise.resolve(this.lastCompletedQueryState);
      this.loadingDeferred = j(), this.loadingDeferred.promise.catch(() => {
      });
      const s = new AbortController();
      this.cancelQuery = () => {
        s.abort();
      };
      const r = this.buildUrl(t), i = [], a = yield this._performSearch(r, s, (o) => {
        const d = this.hydrateData(o);
        i.push(d), this.onResults !== void 0 && Promise.all(i).then((c) => {
          const u = Oe(c), p = k([...this.lastCompletedQueryState.results, ...u]);
          this.onResults(p, "searching");
        });
      }), l = a.ok ? a.value : void 0;
      if (yield Promise.all(i).then((o) => {
        var d;
        const c = Oe(o), u = k([...this.lastCompletedQueryState.results, ...c]), p = l === void 0;
        this.lastCompletedQueryState = k({
          results: u,
          loadedAll: p
        }), this.currentCursor = l;
        const m = p ? "loadedAll" : "canLoadMore";
        (d = this.onResults) == null || d.call(this, u, m);
      }), a.ok) return (e = this.loadingDeferred) == null || e.resolve(this.lastCompletedQueryState), this.loadingDeferred = void 0, this.lastCompletedQueryState;
      throw (n = this.loadingDeferred) == null || n.reject(a.value), this.loadingDeferred = void 0, this.error = a.value, a.value;
    });
  }
  _performSearch(t, e, n) {
    return h(this, null, function* () {
      let s;
      return kt({
        method: "GET",
        url: t,
        authProvider: this.authProvider,
        errorTracker: this.authProvider.errorTracker,
        abortSignal: e.signal
      }).then((r) => h(this, null, function* () {
        if (!r.body) return q("Search response was missing body");
        const i = r.body.getReader(), a = new TextDecoder();
        let l = "", o = !0;
        const d = (u, p) => {
          if (o) o = !1;
          else try {
            if (u.startsWith("]")) {
              const g = `{"data":[${u}`;
              s = JSON.parse(g).cursor;
              return;
            }
            let m = u;
            m.startsWith(",") && (m = m.slice(1)), p(JSON.parse(m));
          } catch {
            console.warn("[TalkJS] Error during search, received unexpected data, ignoring. Some search results may be missing.");
          }
        };
        for (; ; ) {
          const { done: u, value: p } = yield i.read();
          if (u) break;
          l += a.decode(p, { stream: !0 });
          const m = l.split(`
`);
          l = m.pop() || "";
          for (const g of m) d(g, n);
        }
        l += a.decode();
        const c = l.split(`
`);
        for (const u of c) d(u, n);
        return f(s);
      })).catch((r) => h(this, null, function* () {
        if (r instanceof DOMException && r.name === "AbortError") return f(void 0);
        if (r instanceof Response) {
          const i = yield r.clone().json();
          return q(B("Search", {
            status: r.status,
            errorCode: i.errorCode,
            reasons: i.reasons
          }));
        }
        return q(r);
      }));
    });
  }
}, Cn = {}, es = new class {
  constructor() {
    this.registry = {};
  }
  getOrCreate(t) {
    const e = this.key(t), n = this.registry[e];
    if (n) return n;
    const s = new ns(t);
    return this.registry[e] = s, s;
  }
  deregister(t, e) {
    const n = this.key({
      appId: t,
      userId: e
    });
    delete this.registry[n];
  }
  key({ appId: t, userId: e }) {
    return `${t}:${e}`;
  }
}();
function sa(t) {
  if (!t) throw new Error("[TalkJS] Must provide an options object to `getTalkSession`");
  return t.forceCreateNew ? new ns(t) : es.getOrCreate(t);
}
var ns = class {
  constructor(t) {
    this._onNeedToken = void 0, (function(l) {
      function o(d, c) {
        if (!d) throw new Error("[TalkJS] TalkSession: " + c);
      }
      o(l && typeof l == "object", "Expected an object argument in `getTalkSession`."), o(l.appId && typeof l.appId == "string", "The `appId` property of the `getTalkSession` options is required and it must be a non-empty string."), o(typeof l.userId == "string", "The `userId` property of the `getTalkSession` options is required and it must be a string."), l.token !== void 0 && o(l.token && typeof l.token == "string", "The `token` property of the `getTalkSession` options must be a non-empty string."), l.tokenFetcher !== void 0 && o(typeof l.tokenFetcher == "function", "The `tokenFetcher` property of the `getTalkSession` options must be a function.");
    })(t);
    const { appId: e, userId: n, token: s, tokenFetcher: r, signature: i } = t;
    this.appId = e, this._apiUrls = t.apiUrls ? new yn(t.apiUrls.realtimeWsApiUrl, t.apiUrls.internalHttpApiUrl, t.apiUrls.restApiHttpUrl) : yn.fromHost(t.host), this._authProvider = new na(this._apiUrls, e, n, i), s && this._authProvider.setToken(s), r && this._authProvider.setOnNeedToken(() => h(this, null, function* () {
      try {
        const l = yield r();
        this._authProvider.setToken(l);
      } catch (l) {
        this._authProvider.setTokenError(`${l}`);
      }
    }));
    const a = Math.random().toString().split(".")[1];
    this._realtimeClient = new Ki(this._apiUrls.getRealtimeWsUrl(e, n, "1.11.2", a, t.clientBuild), n, this._authProvider), this.currentUser = this.user(n), this._terminationReason = j(), this._terminationReason.promise.then((l) => {
      console.error(`[TalkJS] ${l}`);
    }), (function(l, o) {
      return h(this, null, function* () {
        return kt({
          method: "GET",
          url: `${o}/${l}`
        }).then((d) => h(null, null, function* () {
          return d.status === 200 || d.status !== 404 && (console.warn(`[TalkJS] Received unexpected ${d.status} status code when validating app ID. Assuming that the app ID is valid.`), !0);
        })).catch((d) => {
          if (typeof d != "string" && "status" in d) {
            const c = d;
            return c.status === 200 || c.status !== 404 && (console.warn(`[TalkJS] Received unexpected ${c.status} status code when validating app ID. Assuming that the app ID is valid.`), !0);
          }
          return console.warn("[TalkJS] Encountered network issues when validating app ID. Assuming that the app ID is valid."), !0;
        });
      });
    })(this.appId, this._apiUrls.internalHttpApiUrl).then((l) => {
      l || this.terminate(/* @__PURE__ */ new Error(`The app ID ${this.appId} does not exist. Make sure you are using the correct app ID as found on the TalkJS dashboard. App IDs are case-sensitive.`));
    }), this._authProvider.onTokenRefreshFailed((l) => {
      this.terminate(/* @__PURE__ */ new Error(`Could not authenticate, cannot recover automatically: ${l}`));
    });
  }
  setToken(t) {
    this._authProvider.setToken(t);
  }
  get onNeedToken() {
    return this._onNeedToken;
  }
  set onNeedToken(t) {
    this._onNeedToken = t, t === void 0 ? this._authProvider.setOnNeedToken(void 0) : this._authProvider.setOnNeedToken(() => {
      try {
        t();
      } catch (e) {
        console.error("[TalkJS] error when calling `onNeedToken` - your auth token will expire soon.", e);
      }
    });
  }
  onError(t) {
    const e = j();
    return Promise.race([e.promise, this._terminationReason.promise]).then((n) => {
      n !== "UNSUBSCRIBED" && t(n);
    }), { unsubscribe: () => e.resolve("UNSUBSCRIBED") };
  }
  user(t) {
    if (typeof t != "string") throw new Error(`Creating UserRef failed because ID "${t}" is not a string`);
    if (t === "") throw new Error(`Creating UserRef failed because ID "${t}" is an empty string`);
    return this._realtimeClient.refs.user(t);
  }
  conversation(t) {
    if (typeof t != "string") throw new Error(`Creating ConversationRef failed because ID "${t}" is not a string`);
    if (t === "") throw new Error(`Creating ConversationRef failed because ID "${t}" is an empty string`);
    return this._realtimeClient.refs.conversation(t);
  }
  subscribeConversations(t, e) {
    if (t === void 0) return new zt(this._realtimeClient, Mt, void 0);
    if (typeof t == "function") return new zt(this._realtimeClient, Mt, t);
    const n = t.filter ? js(t.filter) : Mt;
    return new zt(this._realtimeClient, n, e);
  }
  searchMessages(t) {
    let e;
    return {
      setQuery: (n, s) => {
        var r;
        const i = (r = s?.conversation) != null ? r : Cn;
        return e && e.searchString === n && M(e.conversationFilter, i) ? e.currentState : (e && e.cancel(), n && n !== "" ? (e = new kn(t, n, `${this._apiUrls.restApiHttpUrl}/${this.appId}/me/messages/search`, (a) => h(this, null, function* () {
          const [l, o] = yield Promise.all([this.conversation(a.conversationId).get(), this._realtimeClient.hydrateMessageData(a, a.conversationId)]);
          return l === null ? O("Message belongs to nonexistent conversation") : o.ok ? f({
            conversation: l,
            message: o.value
          }) : o;
        }), this._authProvider, i), e.loadMore(3)) : (e = void 0, t?.([], "loadedAll"), Promise.resolve({
          results: [],
          loadedAll: !0
        })));
      },
      loadMore: (n) => e ? e.loadMore(n ?? 10) : Promise.resolve({
        results: [],
        loadedAll: !0
      })
    };
  }
  searchConversations(t) {
    let e;
    return {
      setQuery: (n, s) => {
        var r;
        const i = (r = s?.conversation) != null ? r : Cn;
        return e && e.searchString === n && M(e.conversationFilter, i) ? e.currentState : (e && e.cancel(), n && n !== "" ? (e = new kn(t, n, `${this._apiUrls.restApiHttpUrl}/${this.appId}/me/conversations/search`, (a) => h(this, null, function* () {
          const l = yield this._realtimeClient.hydrateConvData(a);
          if (!l.ok) return l;
          const o = l.value;
          return o === null ? q({
            status: 404,
            errorCode: "CONVERSATION_NOT_FOUND",
            reasons: ["No conversation with that ID was found"]
          }) : f(o);
        }), this._authProvider, i), e.loadMore(3)) : (e = void 0, t?.([], "loadedAll"), Promise.resolve({
          results: [],
          loadedAll: !0
        })));
      },
      loadMore: (n) => e ? e.loadMore(n ?? 10) : Promise.resolve({
        results: [],
        loadedAll: !0
      })
    };
  }
  terminate(t) {
    es.deregister(this.appId, this.currentUser.id), this._terminationReason.resolve(t), this._realtimeClient.destroy();
  }
  _isConnected() {
    return this._realtimeClient.isConnected();
  }
  uploadFile(t, e) {
    return ft(`${this._apiUrls.restApiHttpUrl}/${this.appId}/files`, this._authProvider, this._realtimeClient, t, e);
  }
  uploadImage(t, e) {
    return ft(`${this._apiUrls.restApiHttpUrl}/${this.appId}/files`, this._authProvider, this._realtimeClient, t, I({ subtype: "image" }, e));
  }
  uploadVideo(t, e) {
    return ft(`${this._apiUrls.restApiHttpUrl}/${this.appId}/files`, this._authProvider, this._realtimeClient, t, I({ subtype: "video" }, e));
  }
  uploadAudio(t, e) {
    return ft(`${this._apiUrls.restApiHttpUrl}/${this.appId}/files`, this._authProvider, this._realtimeClient, t, I({ subtype: "audio" }, e));
  }
  uploadVoice(t, e) {
    return ft(`${this._apiUrls.restApiHttpUrl}/${this.appId}/files`, this._authProvider, this._realtimeClient, t, I({ subtype: "voice" }, e));
  }
};
function ft(t, e, n, s, r) {
  return h(this, arguments, function* (i, a, l, o, { subtype: d, filename: c, width: u, height: p, duration: m }) {
    _("Upload file", yield l.call({
      method: "POST",
      path: ["files", "validate"],
      data: {
        filename: c,
        filesize: o.size
      }
    }));
    const g = new FormData();
    return g.set("file", o, c), d !== void 0 && g.set("subtype", d), u !== void 0 && g.set("width", u.toString()), p !== void 0 && g.set("height", p.toString()), m !== void 0 && g.set("duration", m.toString()), kt({
      method: "POST",
      url: i,
      data: g,
      authProvider: a,
      errorTracker: a.errorTracker
    }).then((y) => y.json()).then((y) => y.fileToken).catch((y) => h(null, null, function* () {
      if (y instanceof Response) {
        const C = yield y.json(), w = `Unexpected response when uploading file, status code ${y.status} ${C.errorCode}, ${C.reasons}`;
        throw new Error(w);
      }
      throw y;
    }));
  });
}
async function ra(t, e, n, s) {
  const r = sa({
    appId: t,
    userId: e,
    token: n
  }).conversation(s);
  await r.createIfNotExists(), r.subscribeMessages((i) => console.log(i?.length)), await r.send("hola");
}
export {
  ra as run
};
