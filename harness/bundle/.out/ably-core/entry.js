var Wa = Object.create, Nr = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, Va = Object.getOwnPropertyNames, za = Object.getPrototypeOf, Ur = Object.prototype.hasOwnProperty, $a = (r, c) => () => (c || (r((c = { exports: {} }).exports, c), r = null), c.exports), Ja = (r, c, h, f) => {
  if (c && typeof c == "object" || typeof c == "function")
    for (var b = Va(c), S = 0, k = b.length, B; S < k; S++)
      B = b[S], !Ur.call(r, B) && B !== h && Nr(r, B, {
        get: ((q) => c[q]).bind(null, B),
        enumerable: !(f = Fa(c, B)) || f.enumerable
      });
  return r;
}, Ka = (r, c, h) => (h = r != null ? Wa(za(r)) : {}, Ja(c || !r || !r.__esModule || !Ur.call(r, "default") ? Nr(h, "default", {
  value: r,
  enumerable: !0
}) : h, r)), Qa = /* @__PURE__ */ $a(((r, c) => {
  (function(h, f) {
    typeof r == "object" && typeof c == "object" ? c.exports = f() : typeof define == "function" && define.amd ? define([], f) : typeof r == "object" ? r.Ably = f() : h.Ably = f();
  })(r, () => {
    var h = {}, f = { exports: h }, b = Object.defineProperty, S = Object.defineProperties, k = Object.getOwnPropertyDescriptor, B = Object.getOwnPropertyDescriptors, q = Object.getOwnPropertyNames, J = Object.getOwnPropertySymbols, W = Object.prototype.hasOwnProperty, ie = Object.prototype.propertyIsEnumerable, Xe = (e, t, n) => t in e ? b(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[t] = n, K = (e, t) => {
      for (var n in t || (t = {})) W.call(t, n) && Xe(e, n, t[n]);
      if (J)
        for (var n of J(t)) ie.call(t, n) && Xe(e, n, t[n]);
      return e;
    }, ge = (e, t) => S(e, B(t)), Rn = (e, t) => {
      var n = {};
      for (var s in e) W.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
      if (e != null && J)
        for (var s of J(e)) t.indexOf(s) < 0 && ie.call(e, s) && (n[s] = e[s]);
      return n;
    }, Ye = (e, t) => {
      for (var n in t) b(e, n, {
        get: t[n],
        enumerable: !0
      });
    }, On = (e, t, n, s) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of q(t)) !W.call(e, i) && i !== n && b(e, i, {
          get: () => t[i],
          enumerable: !(s = k(t, i)) || s.enumerable
        });
      return e;
    }, An = (e) => On(b({}, "__esModule", { value: !0 }), e), ft = function(e, t) {
      this[0] = e, this[1] = t;
    }, Sn = (e, t, n) => {
      var s = (l, u, g, p) => {
        try {
          var w = n[l](u), C = (u = w.value) instanceof ft, O = w.done;
          Promise.resolve(C ? u[0] : u).then((v) => C ? s(l === "return" ? l : "next", u[1] ? {
            done: v.done,
            value: v.value
          } : v, g, p) : g({
            value: v,
            done: O
          })).catch((v) => s("throw", v, g, p));
        } catch (v) {
          p(v);
        }
      }, i = (l) => o[l] = (u) => new Promise((g, p) => s(l, u, g, p)), o = {};
      return n = n.apply(e, t), o[Symbol.asyncIterator] = () => o, i("next"), i("throw"), i("return"), o;
    }, Ze = {};
    Ye(Ze, {
      ErrorInfo: () => _,
      Realtime: () => li,
      Rest: () => si,
      default: () => Ga,
      makeProtocolMessageFromDeserialized: () => tr,
      msgpack: () => yi
    }), f.exports = An(Ze);
    var m = class {
    }, Ut = typeof global < "u" ? global : typeof window < "u" ? window : self;
    function et(e, t) {
      return `${e}`.padStart(t ? 3 : 2, "0");
    }
    function Tn(e) {
      return m.Config.logTimestamps ? function(t) {
        const n = new Date(m.Config.now());
        e(et(n.getHours()) + ":" + et(n.getMinutes()) + ":" + et(n.getSeconds()) + "." + et(n.getMilliseconds(), 1) + " " + t);
      } : function(t) {
        e(t);
      };
    }
    var kn = () => {
      var e;
      let t, n;
      return typeof ((e = Ut?.console) == null ? void 0 : e.log) == "function" ? (t = function(...s) {
        console.log.apply(console, s);
      }, n = console.warn ? function(...s) {
        console.warn.apply(console, s);
      } : t) : t = n = function() {
      }, [t, n].map(Tn);
    }, me = class gn {
      constructor() {
        this.deprecated = (t, n) => {
          this.deprecationWarning(`${t} is deprecated and will be removed in a future version. ${n}`);
        }, this.shouldLog = (t) => t <= this.logLevel, this.setLog = (t, n) => {
          t !== void 0 && (this.logLevel = t), n !== void 0 && (this.logHandler = this.logErrorHandler = n);
        }, this.logLevel = gn.defaultLogLevel, this.logHandler = gn.defaultLogHandler, this.logErrorHandler = gn.defaultLogErrorHandler;
      }
      static initLogHandlers() {
        const [t, n] = kn();
        this.defaultLogHandler = t, this.defaultLogErrorHandler = n, this.defaultLogger = new gn();
      }
      static logActionNoStrip(t, n, s, i) {
        t.logAction(n, s, i);
      }
      static silentFailureLogSuffix() {
        return " This call currently fails silently because clientOptions.strictMode is not enabled. A future major version will make this call fail with an error. Set clientOptions.strictMode: true to make this call reject with an error now.";
      }
      logAction(t, n, s) {
        this.shouldLog(t) && (t === 1 ? this.logErrorHandler : this.logHandler)("Ably: " + n + ": " + s, t);
      }
      renamedClientOption(t, n) {
        this.deprecationWarning(`The \`${t}\` client option has been renamed to \`${n}\`. Please update your code to use \`${n}\` instead. \`${t}\` will be removed in a future version.`);
      }
      renamedMethod(t, n, s) {
        this.deprecationWarning(`\`${t}\`’s \`${n}\` method has been renamed to \`${s}\`. Please update your code to use \`${s}\` instead. \`${n}\` will be removed in a future version.`);
      }
      deprecationWarning(t) {
        this.shouldLog(1) && this.logErrorHandler(`Ably: Deprecation warning - ${t}`, 1);
      }
    };
    me.defaultLogLevel = 1, me.LOG_NONE = 0, me.LOG_ERROR = 1, me.LOG_MAJOR = 2, me.LOG_MINOR = 3, me.LOG_MICRO = 4, me.logAction = (e, t, n, s) => {
      me.logActionNoStrip(e, t, n, s);
    };
    var a = me, Ue = {};
    Ye(Ue, {
      Format: () => Un,
      allSame: () => Ms,
      allToLowerCase: () => Wt,
      allToUpperCase: () => qn,
      arrChooseN: () => Bn,
      arrDeleteValue: () => xn,
      arrEquals: () => jn,
      arrIntersect: () => qt,
      arrIntersectOb: () => Ln,
      arrPopRandomElement: () => Be,
      arrWithoutValue: () => Nn,
      cheapRandStr: () => st,
      containsValue: () => Is,
      copy: () => tt,
      createMissingPluginError: () => ot,
      dataSizeBytes: () => Ht,
      decodeBody: () => X,
      detectV1Callback: () => ee,
      encodeBody: () => ce,
      ensureArray: () => In,
      forInOwnNonNullProperties: () => jt,
      getBackoffCoefficient: () => yt,
      getGlobalObject: () => rt,
      getJitterCoefficient: () => qe,
      getRetryTime: () => it,
      inherits: () => ks,
      inspectBody: () => Gt,
      inspectError: () => j,
      intersect: () => En,
      isEmpty: () => Mn,
      isErrorInfoOrPartialErrorInfo: () => ye,
      isNil: () => ae,
      isObject: () => oe,
      keysArray: () => De,
      listenerToAsyncIterator: () => Hn,
      matchDerivedChannel: () => je,
      mixin: () => A,
      parseQueryString: () => nt,
      prototypicalClone: () => Pn,
      randomString: () => Dn,
      shallowClone: () => Ts,
      shallowEquals: () => _t,
      stringifyValues: () => mt,
      throwMissingPluginError: () => Z,
      toBase64: () => bt,
      toQueryString: () => Pe,
      valuesArray: () => pt,
      whenPromiseSettles: () => ue,
      withTimeoutAsync: () => Gn
    });
    function Dt(e) {
      let t = "[" + e.constructor.name;
      return e.message && (t += ": " + e.message), e.statusCode && (t += "; statusCode=" + e.statusCode), e.code && (t += "; code=" + e.code), e.cause && (t += "; cause=" + j(e.cause)), e.remediation && (t += "; remediation=" + e.remediation), e.detail && Object.keys(e.detail).length > 0 && (t += "; detail=" + JSON.stringify(e.detail)), e.href && !(e.message && e.message.indexOf("help.ably.io") > -1) && (t += "; see " + e.href + " "), t += "]", t;
    }
    function Bt(e) {
      return e.code && !e.href && (e.href = "https://help.ably.io/error/" + e.code), e;
    }
    var _ = class fn extends Error {
      constructor(t, n, s, i, o) {
        var l = (...u) => {
          super(...u);
        };
        if (typeof t == "object") {
          const u = t;
          if (typeof u.message != "string" || typeof u.code != "number" || typeof u.statusCode != "number" || !ae(u.detail) && (typeof u.detail != "object" || Array.isArray(u.detail))) throw new Error("ErrorInfo: invalid values: " + m.Config.inspect(u));
          l(u.message), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, fn.prototype), this.code = u.code, this.statusCode = u.statusCode, this.detail = u.detail, Object.assign(this, u);
        } else
          l(t), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, fn.prototype), this.code = n, this.statusCode = s, this.cause = i, this.detail = o;
      }
      toString() {
        return Dt(this);
      }
      static fromValues(t) {
        return Bt(new fn(t));
      }
      static fromWireValues(t) {
        return Bt(new fn(t));
      }
    }, se = class bs extends Error {
      constructor(t, n, s, i, o) {
        var l = (...u) => {
          super(...u);
        };
        if (typeof t == "object") {
          const u = t;
          if (typeof u.message != "string" || !ae(u.code) && typeof u.code != "number" || !ae(u.statusCode) && typeof u.statusCode != "number" || !ae(u.detail) && (typeof u.detail != "object" || Array.isArray(u.detail))) throw new Error("PartialErrorInfo: invalid values: " + m.Config.inspect(u));
          l(u.message), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, bs.prototype), this.code = u.code, this.statusCode = u.statusCode, this.detail = u.detail, Object.assign(this, u);
        } else
          l(t), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, bs.prototype), this.code = n, this.statusCode = s, this.cause = i, this.detail = o;
      }
      toString() {
        return Dt(this);
      }
      static fromValues(t) {
        return Bt(new bs(t));
      }
    };
    function Ss(e) {
      return Math.floor(Math.random() * e.length);
    }
    function A(e, ...t) {
      for (let n = 0; n < t.length; n++) {
        const s = t[n];
        if (!s) break;
        for (const i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
      }
      return e;
    }
    function tt(e) {
      return A({}, e);
    }
    function In(e) {
      return ae(e) ? [] : Array.isArray(e) ? e : [e];
    }
    function oe(e) {
      return Object.prototype.toString.call(e) == "[object Object]";
    }
    function Mn(e) {
      for (const t in e) return !1;
      return !0;
    }
    function ae(e) {
      return e == null;
    }
    function Ts(e) {
      const t = /* @__PURE__ */ new Object();
      for (const n in e) t[n] = e[n];
      return t;
    }
    function Pn(e, t) {
      class n {
      }
      n.prototype = e;
      const s = new n();
      return t && A(s, t), s;
    }
    var ks = function(e, t) {
      if (m.Config.inherits) {
        m.Config.inherits(e, t);
        return;
      }
      e.super_ = t, e.prototype = Pn(t.prototype, { constructor: e });
    };
    function Is(e, t) {
      for (const n in e) if (e[n] == t) return !0;
      return !1;
    }
    function En(e, t) {
      return Array.isArray(t) ? qt(e, t) : Ln(e, t);
    }
    function qt(e, t) {
      const n = [];
      for (let s = 0; s < e.length; s++) {
        const i = e[s];
        t.indexOf(i) != -1 && n.push(i);
      }
      return n;
    }
    function Ln(e, t) {
      const n = [];
      for (let s = 0; s < e.length; s++) {
        const i = e[s];
        i in t && n.push(i);
      }
      return n;
    }
    function xn(e, t) {
      const n = e.indexOf(t), s = n != -1;
      return s && e.splice(n, 1), s;
    }
    function Nn(e, t) {
      const n = e.slice();
      return xn(n, t), n;
    }
    function De(e, t) {
      const n = [];
      for (const s in e)
        t && !Object.prototype.hasOwnProperty.call(e, s) || n.push(s);
      return n;
    }
    function pt(e, t) {
      const n = [];
      for (const s in e)
        t && !Object.prototype.hasOwnProperty.call(e, s) || n.push(e[s]);
      return n;
    }
    function jt(e, t) {
      for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && t(n);
    }
    function Ms(e, t) {
      if (e.length === 0) return !0;
      const n = e[0][t];
      return e.every(function(s) {
        return s[t] === n;
      });
    }
    var Un = /* @__PURE__ */ ((e) => (e.msgpack = "msgpack", e.json = "json", e))(Un || {});
    function Be(e) {
      return e.splice(Ss(e), 1)[0];
    }
    function Pe(e) {
      const t = [];
      if (e) for (const n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      return t.length ? "?" + t.join("&") : "";
    }
    function mt(e) {
      return Object.fromEntries(Object.entries(e).map(([t, n]) => [t, String(n)]));
    }
    function nt(e) {
      let t;
      const n = /([^?&=]+)=?([^&]*)/g, s = {};
      for (; t = n.exec(e); ) s[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
      return s;
    }
    function ye(e) {
      return typeof e == "object" && e !== null && (e instanceof _ || e instanceof se);
    }
    function ee(e, t) {
      const n = e.length;
      if (typeof e[n - 1] == "function" && !(n <= t && typeof e[n - 2] != "function"))
        throw new _({
          message: "v1 callback signature is no longer supported: v2 methods return a promise.",
          code: 40025,
          statusCode: 400,
          remediation: "Drop the trailing callback and `await` the returned promise. See https://github.com/ably/ably-js/blob/main/docs/migration-guides/v2/lib.md."
        });
    }
    function j(e) {
      var t, n;
      return e instanceof Error || ((t = e?.constructor) == null ? void 0 : t.name) === "ErrorInfo" || ((n = e?.constructor) == null ? void 0 : n.name) === "PartialErrorInfo" ? e.toString() : m.Config.inspect(e);
    }
    function Gt(e) {
      return m.BufferUtils.isBuffer(e) ? e.toString() : typeof e == "string" ? e : m.Config.inspect(e);
    }
    function Ht(e) {
      if (m.BufferUtils.isBuffer(e)) return m.BufferUtils.byteLength(e);
      if (typeof e == "string") return m.Config.stringByteSize(e);
      if (typeof e == "number") return 8;
      if (typeof e == "boolean") return 1;
      throw new Error(`Expected input of Utils.dataSizeBytes to be a string, a number, a boolean or a buffer, but was: ${typeof e}`);
    }
    function st() {
      return String(Math.random()).substr(2);
    }
    var Dn = async (e) => {
      const t = await m.Config.getRandomArrayBuffer(e);
      return m.BufferUtils.base64Encode(t);
    };
    function Bn(e, t) {
      const n = Math.min(t, e.length), s = e.slice(), i = [];
      for (let o = 0; o < n; o++) i.push(Be(s));
      return i;
    }
    function ue(e, t) {
      e.then((n) => {
        t?.(null, n);
      }).catch((n) => {
        t?.(n);
      });
    }
    function X(e, t, n) {
      return n == "msgpack" ? (t || Z("MsgPack"), t.decode(e)) : JSON.parse(String(e));
    }
    function ce(e, t, n) {
      return n == "msgpack" ? (t || Z("MsgPack"), t.encode(e, !0)) : JSON.stringify(e);
    }
    function Wt(e) {
      return e.map(function(t) {
        return t && t.toLowerCase();
      });
    }
    function qn(e) {
      return e.map(function(t) {
        return t && t.toUpperCase();
      });
    }
    function yt(e) {
      return Math.min((e + 2) / 3, 2);
    }
    function qe() {
      return 1 - Math.random() * 0.2;
    }
    function it(e, t) {
      return e * yt(t) * qe();
    }
    function rt() {
      return typeof global < "u" ? global : typeof window < "u" ? window : self;
    }
    function _t(e, t) {
      return Object.keys(e).every((n) => e[n] === t[n]) && Object.keys(t).every((n) => t[n] === e[n]);
    }
    function je(e) {
      const t = e.match(/^(\[([^?]*)(?:(.*))\])?(.+)$/);
      if (!t || !t.length || t.length < 5) throw new _({
        message: "Channel name is empty or could not be parsed",
        code: 40010,
        statusCode: 400,
        remediation: 'Pass a non-empty channel name to channels.getDerived(name, { filter: ... }) and put the filter expression in the filter option, not in the name. A channel-params prefix such as "[?rewind=1]foo" is allowed. See https://ably.com/docs/channels#derived.'
      });
      if (t[2]) throw new _({
        message: `cannot use a derived option with a ${t[2]} channel`,
        code: 40010,
        statusCode: 400,
        remediation: `Use a base channel name instead, without the "${t[2]}" qualifier.`
      });
      return {
        qualifierParam: t[3] || "",
        channelName: t[4]
      };
    }
    function bt(e) {
      const t = m.BufferUtils, n = t.utf8Encode(e);
      return t.base64Encode(n);
    }
    function jn(e, t) {
      return e.length === t.length && e.every(function(n, s) {
        return n === t[s];
      });
    }
    function ot(e) {
      let t;
      switch (e) {
        case "Push":
          t = 'Import Push from "ably/push" and pass it in ClientOptions.plugins: { Push }.';
          break;
        case "LiveObjects":
          t = 'Import { LiveObjects } from "ably/liveobjects" and pass it in ClientOptions.plugins: { LiveObjects }.';
          break;
        default:
          t = `Import ${e} from "ably/modular" and pass it in ClientOptions.plugins: { ${e} }. See the modular variant reference at https://sdk.ably.com/builds/ably/ably-pubsub-js/main/typedoc/modules/modular.html.`;
      }
      return new _({
        message: `${e} plugin not provided`,
        code: 40019,
        statusCode: 400,
        remediation: t
      });
    }
    function Z(e) {
      throw ot(e);
    }
    async function Gn(e, t = 5e3, n = "Timeout expired") {
      const s = new _(n, 5e4, 500);
      return Promise.race([e, new Promise((i, o) => m.Config.setTimeout(() => o(s), t))]);
    }
    function Hn(e) {
      return Sn(this, null, function* () {
        const t = [];
        let n = null;
        const s = e((i) => {
          if (n) {
            const o = n;
            n = null, o(i);
          } else t.push(i);
        });
        try {
          for (; ; ) if (t.length > 0) yield t.shift();
          else {
            if (n) throw new _({
              message: "Concurrent next() calls are not supported",
              code: 4e4,
              statusCode: 400,
              remediation: "Drive the async iterator from a single for-await-of loop."
            });
            yield yield new ft(new Promise((i) => {
              n = i;
            }));
          }
        } finally {
          s();
        }
      });
    }
    var Ft = "2.29.0", te = {
      ENDPOINT: "main",
      ENVIRONMENT: "",
      REST_HOST: "rest.ably.io",
      REALTIME_HOST: "realtime.ably.io",
      FALLBACK_HOSTS: [
        "main.a.fallback.ably-realtime.com",
        "main.b.fallback.ably-realtime.com",
        "main.c.fallback.ably-realtime.com",
        "main.d.fallback.ably-realtime.com",
        "main.e.fallback.ably-realtime.com"
      ],
      PORT: 80,
      TLS_PORT: 443,
      TIMEOUTS: {
        disconnectedRetryTimeout: 15e3,
        suspendedRetryTimeout: 3e4,
        httpRequestTimeout: 1e4,
        httpMaxRetryDuration: 15e3,
        channelRetryTimeout: 15e3,
        fallbackRetryTimeout: 6e5,
        connectionStateTtl: 12e4,
        realtimeRequestTimeout: 1e4,
        recvTimeout: 9e4,
        webSocketConnectTimeout: 1e4,
        webSocketSlowTimeout: 4e3
      },
      httpMaxRetryCount: 3,
      maxMessageSize: 65536,
      version: Ft,
      protocolVersion: 6,
      agent: "ably-js/" + Ft,
      getPort: Ps,
      getHttpScheme: Es,
      getPrimaryDomainFromEndpoint: Fn,
      getEndpointFallbackHosts: _e,
      getFallbackHosts: zn,
      getHosts: Ls,
      checkHost: $n,
      objectifyOptions: Ns,
      normaliseOptions: Ds,
      defaultGetHeaders: Bs,
      defaultPostHeaders: qs
    };
    function Ps(e, t) {
      return t || e.tls ? e.tlsPort : e.port;
    }
    function Es(e) {
      return e.tls ? "https://" : "http://";
    }
    function Vt(e) {
      return e.includes(":") && !e.startsWith("[") ? "[" + e + "]" : e;
    }
    function Wn(e) {
      return e.includes(".") || e.includes("::") || e === "localhost";
    }
    function Fn(e) {
      return Wn(e) ? e : e.startsWith("nonprod:") ? `${e.replace("nonprod:", "")}.realtime.ably-nonprod.net` : `${e}.realtime.ably.net`;
    }
    function _e(e) {
      return Wn(e) ? [] : e.startsWith("nonprod:") ? Vn(e.replace("nonprod:", ""), "ably-realtime-nonprod.com") : Vn(e, "ably-realtime.com");
    }
    function Vn(e, t) {
      return [
        "a",
        "b",
        "c",
        "d",
        "e"
      ].map((n) => `${e}.${n}.fallback.${t}`);
    }
    function zn(e) {
      const t = e.fallbackHosts, n = typeof e.httpMaxRetryCount < "u" ? e.httpMaxRetryCount : te.httpMaxRetryCount;
      return t ? Bn(t, n) : [];
    }
    function Ls(e) {
      return [e.primaryDomain].concat(zn(e));
    }
    function $n(e) {
      if (typeof e != "string") throw new _({
        message: "host must be a string: was of type " + typeof e,
        code: 4e4,
        statusCode: 400,
        remediation: "Make every entry of `fallbackHosts` a string. If you set `restHost` or `realtimeHost`, pass each as a single string, not an array or object."
      });
      if (!e.length) throw new _({
        message: "host must not be zero-length: an entry of `fallbackHosts` is an empty string",
        code: 4e4,
        statusCode: 400,
        remediation: "Remove any empty-string entry from the `fallbackHosts` array."
      });
    }
    function xs(e) {
      const t = {};
      for (const n in te.TIMEOUTS) t[n] = e[n] || te.TIMEOUTS[n];
      return t;
    }
    function Te(e) {
      let t = te.agent;
      if (e.agents) for (var n in e.agents) t += " " + n + "/" + e.agents[n];
      return t;
    }
    function Ns(e, t, n, s, i) {
      if (e === void 0) {
        const l = t ? `${n} must be initialized with either a client options object, an Ably API key, or an Ably Token` : `${n} must be initialized with a client options object`;
        throw a.logAction(s, a.LOG_ERROR, `${n}()`, l), new Error(l);
      }
      let o;
      if (typeof e == "string")
        if (e.indexOf(":") == -1) {
          if (!t) {
            const l = `${n} cannot be initialized with just an Ably Token; you must provide a client options object with a \`plugins\` property. (Set this Ably Token as the object’s \`token\` property.)`;
            throw a.logAction(s, a.LOG_ERROR, `${n}()`, l), new Error(l);
          }
          o = { token: e };
        } else {
          if (!t) {
            const l = `${n} cannot be initialized with just an Ably API key; you must provide a client options object with a \`plugins\` property. (Set this Ably API key as the object’s \`key\` property.)`;
            throw a.logAction(s, a.LOG_ERROR, `${n}()`, l), new Error(l);
          }
          o = { key: e };
        }
      else o = e;
      return i && (o = ge(K({}, o), { plugins: K(K({}, i), o.plugins) })), o;
    }
    function Us(e) {
      if (e.endpoint && (e.environment || e.restHost || e.realtimeHost)) throw new _({
        message: "The `endpoint` option cannot be used in conjunction with the `environment`, `restHost`, or `realtimeHost` options.",
        code: 40106,
        statusCode: 400,
        remediation: "Remove `environment`, `restHost`, and `realtimeHost` from `ClientOptions` and use only `endpoint`, which replaces them."
      });
      if (e.environment && (e.restHost || e.realtimeHost)) throw new _({
        message: "The `environment` option cannot be used in conjunction with the `restHost`, or `realtimeHost` options.",
        code: 40106,
        statusCode: 400,
        remediation: "Remove `environment`, `restHost`, and `realtimeHost` from `ClientOptions` and use only `endpoint`, which replaces them."
      });
    }
    function Ds(e, t, n) {
      const s = n ?? a.defaultLogger;
      e.environment && s.deprecated("The `environment` client option", "Use the `endpoint` client option instead."), e.restHost && s.deprecated("The `restHost` client option", "Use the `endpoint` client option instead."), e.realtimeHost && s.deprecated("The `realtimeHost` client option", "Use the `endpoint` client option instead."), Us(e), typeof e.recover == "function" && e.closeOnUnload === !0 && (a.logAction(s, a.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), e.recover = void 0), "closeOnUnload" in e || (e.closeOnUnload = !e.recover), "queueMessages" in e || (e.queueMessages = !0);
      const i = e.endpoint || te.ENDPOINT;
      !e.fallbackHosts && !e.restHost && !e.realtimeHost && !e.port && !e.tlsPort && (e.fallbackHosts = _e(e.environment || i));
      const o = e.environment && `${e.environment}.realtime.ably.net`, l = e.restHost || e.realtimeHost || o || Fn(i);
      (e.fallbackHosts || []).concat(l).forEach($n), e.port = e.port || te.PORT, e.tlsPort = e.tlsPort || te.TLS_PORT, "tls" in e || (e.tls = !0);
      const u = xs(e);
      t ? "useBinaryProtocol" in e ? e.useBinaryProtocol = m.Config.supportsBinary && e.useBinaryProtocol : e.useBinaryProtocol = m.Config.preferBinary : e.useBinaryProtocol = !1;
      const g = {};
      e.clientId && (g["X-Ably-ClientId"] = m.BufferUtils.base64Encode(m.BufferUtils.utf8Encode(e.clientId))), "idempotentRestPublishing" in e || (e.idempotentRestPublishing = !0);
      let p = null, w = e.connectivityCheckUrl;
      if (e.connectivityCheckUrl) {
        let [O, v] = e.connectivityCheckUrl.split("?");
        p = v ? nt(v) : {}, O.indexOf("://") === -1 && (O = "https://" + O), w = O;
      }
      let C = e.wsConnectivityCheckUrl;
      return C && C.indexOf("://") === -1 && (C = "wss://" + C), ge(K({}, e), {
        primaryDomain: l,
        maxMessageSize: e.maxMessageSize || te.maxMessageSize,
        timeouts: u,
        connectivityCheckParams: p,
        connectivityCheckUrl: w,
        wsConnectivityCheckUrl: C,
        headers: g
      });
    }
    function vt(e, t, n) {
      const s = n || {};
      if (s.cipher) {
        e || Z("Crypto");
        const i = e.getCipher(s.cipher, t);
        s.cipher = i.cipherParams, s.channelCipher = i.cipher;
      } else "cipher" in s && (s.cipher = void 0, s.channelCipher = null);
      return s;
    }
    var Jn = {
      json: "application/json",
      xml: "application/xml",
      html: "text/html",
      msgpack: "application/x-msgpack",
      text: "text/plain"
    }, Ee = {
      format: "json",
      protocolVersion: te.protocolVersion
    };
    function Bs(e, { format: t, protocolVersion: n = Ee.protocolVersion } = {}) {
      return {
        accept: Jn[t ?? (e.useBinaryProtocol ? "msgpack" : "json")],
        "X-Ably-Version": n.toString(),
        "Ably-Agent": Te(e)
      };
    }
    function qs(e, { format: t, protocolVersion: n = Ee.protocolVersion } = {}) {
      const s = Jn[t ?? (e.useBinaryProtocol ? "msgpack" : "json")];
      return {
        accept: s,
        "content-type": s,
        "X-Ably-Version": n.toString(),
        "Ably-Agent": Te(e)
      };
    }
    var E = te;
    function js(e) {
      return Object.assign(te, e);
    }
    var Kn = class Dr {
      constructor(t, n) {
        this.logger = t, this.members = n || [];
      }
      call(t, n) {
        for (const s of this.members) if (s) try {
          s(t, n);
        } catch (i) {
          a.logAction(this.logger, a.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + i + "; stack = " + i.stack);
        }
      }
      push(...t) {
        this.members.push(...t);
      }
      createPromise() {
        return new Promise((t, n) => {
          this.push((s, i) => {
            s ? n(s) : t(i);
          });
        });
      }
      resolveAll(t) {
        this.call(null, t);
      }
      rejectAll(t) {
        this.call(t);
      }
      static create(t, n) {
        const s = new Dr(t, n);
        return Object.assign((i, o) => s.call(i, o), {
          push: (i) => s.push(i),
          createPromise: () => s.createPromise(),
          resolveAll: (i) => s.resolveAll(i),
          rejectAll: (i) => s.rejectAll(i)
        });
      }
    }, Qn = /* @__PURE__ */ ((e) => (e.Get = "get", e.Delete = "delete", e.Post = "post", e.Put = "put", e.Patch = "patch", e))(Qn || {}), V = Qn, at = /* @__PURE__ */ ((e) => (e[e.Success = 200] = "Success", e[e.NoContent = 204] = "NoContent", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.Forbidden = 403] = "Forbidden", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.InternalServerError = 500] = "InternalServerError", e))(at || {});
    function Gs(e) {
      return e >= 200 && e < 400;
    }
    var Ge = at, zt = Math.pow(2, 17);
    function Hs() {
      return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
    }
    function Ws(e) {
      return !!e.connection;
    }
    var Xn = 40170, Fs = 40300;
    function Yn(e) {
      return ye(e) ? (e.code || (e.statusCode === 403 ? e.code = Fs : (e.code = Xn, e.statusCode = 401)), e) : new _(j(e), e.code || Xn, e.statusCode || 401);
    }
    var $t = (e, t) => {
      const n = m.BufferUtils, s = n.utf8Encode(e), i = n.utf8Encode(t), o = n.hmacSha256(s, i);
      return n.base64Encode(o);
    };
    function Zn(e) {
      if (!e) return "";
      typeof e == "string" && (e = JSON.parse(e));
      const t = /* @__PURE__ */ Object.create(null), n = De(e, !0);
      if (!n) return "";
      n.sort();
      for (let s = 0; s < n.length; s++) t[n[s]] = e[n[s]].sort();
      return JSON.stringify(t);
    }
    function es(e, t) {
      if (e.authCallback) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with authCallback");
      else if (e.authUrl) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with authUrl");
      else if (e.key) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with client-side signing");
      else if (e.tokenDetails) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with supplied token only");
      else {
        const n = "authOptions must include valid authentication parameters";
        throw a.logAction(t, a.LOG_ERROR, "Auth()", n), new _(n, 40106, 401);
      }
    }
    function Vs(e) {
      return "useTokenAuth" in e && !e.useTokenAuth;
    }
    function ts(e) {
      return e.useTokenAuth || !Vs(e) && (e.authCallback || e.authUrl || e.token || e.tokenDetails);
    }
    function zs(e) {
      return !e.key && !e.authCallback && !e.authUrl;
    }
    var $s = 0;
    function Js() {
      return $s++;
    }
    var ns = class {
      constructor(e, t) {
        if (this.authOptions = {}, this.client = e, this.tokenParams = t.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, ts(t))
          zs(t) && a.logAction(this.logger, a.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(t.defaultTokenParams, t), es(this.authOptions, this.logger);
        else {
          if (!t.key) {
            const n = "No authentication options provided";
            throw a.logAction(this.logger, a.LOG_ERROR, "Auth()", n), new _({
              message: n,
              code: 40106,
              statusCode: 401,
              remediation: "Set one of the following in ClientOptions: key, authUrl, authCallback, token, or tokenDetails. For production use, prefer authUrl or authCallback for client-side (browser, mobile apps), or key for server-side."
            });
          }
          a.logAction(this.logger, a.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(t);
        }
      }
      get logger() {
        return this.client.logger;
      }
      authorize(...e) {
        return ee(e, 0), this._authorizeImpl(e[0], e[1]);
      }
      async _authorizeImpl(e, t) {
        if (t && t.key && this.authOptions.key !== t.key) throw new _({
          message: "authorize called with a key that does not match the existing key being used by the client",
          code: 40102,
          statusCode: 401,
          remediation: "To use a different key, construct a new Ably client with the key as a client option."
        });
        try {
          let n = await this._forceNewToken(e ?? null, t ?? null);
          return Ws(this.client) ? new Promise((s, i) => {
            this.client.connection.connectionManager.onAuthUpdated(n, (o, l) => o ? i(o) : s(l));
          }) : n;
        } catch (n) {
          throw this.client.connection && n.statusCode === Ge.Forbidden && this.client.connection.connectionManager.actOnErrorFromAuthorize(n), n;
        }
      }
      async _forceNewToken(e, t) {
        this.tokenDetails = null, this._saveTokenOptions(e, t), es(this.authOptions, this.logger);
        try {
          return this._ensureValidAuthCredentials(!0);
        } finally {
          delete this.tokenParams.timestamp, delete this.authOptions.queryTime;
        }
      }
      requestToken(...e) {
        return ee(e, 0), this._requestTokenImpl(e[0], e[1]);
      }
      async _requestTokenImpl(e, t) {
        const n = t || this.authOptions, s = e || tt(this.tokenParams);
        let i, o = this.client;
        if (n.authCallback)
          a.logAction(this.logger, a.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), i = n.authCallback;
        else if (n.authUrl)
          a.logAction(this.logger, a.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), i = (u, g) => {
            const p = A({ accept: "application/json, text/plain" }, n.authHeaders), w = n.authMethod && n.authMethod.toLowerCase() === "post";
            let C;
            const O = n.authUrl.indexOf("?");
            O > -1 && (C = nt(n.authUrl.slice(O)), n.authUrl = n.authUrl.slice(0, O), w || (n.authParams = A(C, n.authParams)));
            const v = A({}, n.authParams || {}, u), I = (T) => {
              var L, D;
              let G = (L = T.body) != null ? L : null, F = null;
              if (T.error) a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + j(T.error));
              else {
                const he = (D = T.headers["content-type"]) != null ? D : null;
                Array.isArray(he) ? F = he.join(", ") : F = he, a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + F + "; body: " + Gt(G));
              }
              if (T.error) {
                g(T.error, null);
                return;
              }
              if (T.unpacked) {
                g(null, G);
                return;
              }
              if (m.BufferUtils.isBuffer(G) && (G = G.toString()), !F) {
                g(new _({
                  message: "authUrl response is missing a Content-Type header",
                  code: 40170,
                  statusCode: 401,
                  remediation: "Set a Content-Type response header on your authUrl endpoint: application/json for a TokenDetails/TokenRequest object, text/plain for a token string, or application/jwt for a JWT."
                }), null);
                return;
              }
              const x = F.indexOf("application/json") > -1, pe = F.indexOf("text/plain") > -1 || F.indexOf("application/jwt") > -1;
              if (!x && !pe) {
                g(new _({
                  message: "authUrl responded with unacceptable Content-Type " + F + ". Expected one of: text/plain, application/jwt or application/json",
                  code: 40170,
                  statusCode: 401,
                  remediation: "Change your authUrl endpoint to respond with a Content-Type the SDK can parse: application/json (TokenDetails/TokenRequest), text/plain (token string), or application/jwt (JWT)."
                }), null);
                return;
              }
              if (x) {
                if (G.length > zt) {
                  g(new _({
                    message: "authUrl JSON response exceeded the maximum permitted length of 128 KB",
                    code: 40170,
                    statusCode: 401,
                    remediation: 'Two things commonly cause this. If your authUrl wraps the Ably token in an envelope with extra fields, return only the token payload (a token string, or a TokenRequest/TokenDetails object). If the token carries a very large capability, narrow it: grant a wildcard resource such as "*" or "namespace:*" instead of listing every channel.'
                  }), null);
                  return;
                }
                try {
                  G = JSON.parse(G);
                } catch (he) {
                  g(new _("Unexpected error processing authURL response; err = " + he.message, 40170, 401), null);
                  return;
                }
              }
              g(null, G, F);
            };
            if (a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + n.authUrl + "; Params: " + JSON.stringify(v) + "; method: " + (w ? "POST" : "GET")), w) {
              const T = p || {};
              T["content-type"] = "application/x-www-form-urlencoded";
              const L = Pe(v).slice(1);
              ue(this.client.http.doUri(V.Post, n.authUrl, T, L, C), (D, G) => I(D || G));
            } else ue(this.client.http.doUri(V.Get, n.authUrl, p || {}, null, v), (T, L) => I(T || L));
          };
        else if (n.key)
          a.logAction(this.logger, a.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), i = (u, g) => {
            ue(this.createTokenRequest(u, n), (p, w) => g(p, w ?? null));
          };
        else {
          const u = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
          throw a.logAction(this.logger, a.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), new _({
            message: u,
            code: 40171,
            statusCode: 403,
            remediation: "Initialise the client with one of ClientOptions.{ key, authUrl, authCallback } so the SDK can refresh tokens."
          });
        }
        "capability" in s && (s.capability = Zn(s.capability));
        const l = (u, g) => {
          const p = "/keys/" + u.keyName + "/requestToken", w = function(O) {
            return o.baseUri(O) + p;
          }, C = E.defaultPostHeaders(this.client.options, { format: "json" });
          n.requestHeaders && A(C, n.requestHeaders), a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + p + "; Token params: " + JSON.stringify(u)), ue(this.client.http.do(V.Post, w, C, JSON.stringify(u), null), (O, v) => O ? g(O) : g(v.error, v.body, v.unpacked));
        };
        return new Promise((u, g) => {
          let p = !1, w = this.client.options.timeouts.realtimeRequestTimeout, C = m.Config.setTimeout(() => {
            p = !0;
            const O = "Token request via authCallback/authUrl did not complete within the configured timeout (" + w / 1e3 + " seconds)";
            a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", O), g(new _({
              message: O,
              code: 40170,
              statusCode: 401,
              remediation: "Add logging to your authCallback/authUrl to find where it stalls, and make sure it always resolves and that authUrl is reachable. If the work legitimately takes longer, raise ClientOptions.realtimeRequestTimeout."
            }));
          }, w);
          i(s, (O, v, I) => {
            if (p) return;
            if (m.Config.clearTimeout(C), O) {
              a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + j(O)), g(Yn(O));
              return;
            }
            if (typeof v == "string") {
              v.length === 0 ? g(new _({
                message: "Token string is empty",
                code: 40170,
                statusCode: 401,
                remediation: "Return a non-empty value from your authCallback/authUrl: a token string, a TokenRequest, or a TokenDetails object."
              })) : v.length > zt ? g(new _({
                message: "Token string exceeded max permitted length (was " + v.length + " bytes)",
                code: 40170,
                statusCode: 401,
                remediation: 'Return only the bare signed token string from your authCallback/authUrl, not an envelope, debug output, or a stringified TokenDetails wrapping it, since a token must serialise to under 128 KB. If the token carries a very large capability, narrow it: grant a wildcard resource such as "*" or "namespace:*" instead of listing every channel.'
              })) : v === "undefined" || v === "null" ? g(new _({
                message: "Token string was literal null/undefined",
                code: 40170,
                statusCode: 401,
                remediation: 'Return the token itself, not "undefined"/"null". Callbacks that have no value to return should pass an error instead.'
              })) : v[0] === "{" && !(I && I.indexOf("application/jwt") > -1) ? g(new _({
                message: "Token was double-encoded",
                code: 40170,
                statusCode: 401,
                remediation: "Return TokenDetails/TokenRequest as a parsed object, or set Content-Type: application/jwt for JWT tokens."
              })) : u({ token: v });
              return;
            }
            if (typeof v != "object" || v === null) {
              const L = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof v;
              a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", L), g(new _({
                message: L,
                code: 40170,
                statusCode: 401,
                remediation: "If authenticating with an authCallback, update it to callback with (err, tokenStringOrTokenDetailsOrTokenRequest). If authenticating with an authUrl, update the server to respond with a token string or TokenDetails/TokenRequest JSON."
              }));
              return;
            }
            const T = JSON.stringify(v).length;
            if (T > zt && !n.suppressMaxLengthCheck) {
              g(new _({
                message: "Token request/details object exceeded max permitted stringified size (was " + T + " bytes)",
                code: 40170,
                statusCode: 401,
                remediation: 'The TokenRequest/TokenDetails object must serialise to under 128 KB. Trim any unused fields, and if it carries a very large capability, narrow it: grant a wildcard resource such as "*" or "namespace:*" instead of listing every channel.'
              }));
              return;
            }
            if ("issued" in v) {
              u(v);
              return;
            }
            if (!("keyName" in v)) {
              const L = "Expected token request callback to call back with a token string, token request object, or token details object. The returned object has neither a keyName nor an issued field.";
              a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", L), g(new _({
                message: L,
                code: 40170,
                statusCode: 401,
                remediation: "Return a token string, a TokenRequest (an object with a `keyName` field), or a TokenDetails (an object with an `issued` field) from your authCallback/authUrl."
              }));
              return;
            }
            l(v, (L, D, G) => {
              if (L) {
                a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + j(L)), g(Yn(L));
                return;
              }
              G || (D = JSON.parse(D)), a.logAction(this.logger, a.LOG_MINOR, "Auth.getToken()", "token received"), u(D);
            });
          });
        });
      }
      createTokenRequest(...e) {
        return ee(e, 0), this._createTokenRequestImpl(e[0], e[1]);
      }
      async _createTokenRequestImpl(e, t) {
        t = t || this.authOptions, e = e || tt(this.tokenParams);
        const n = t.key;
        if (!n) throw new _({
          message: "No key specified",
          code: 40101,
          statusCode: 403,
          remediation: "Pass { key } in the authOptions argument, or set ClientOptions.key and omit the authOptions argument. A passed authOptions replaces the stored options rather than merging."
        });
        const s = n.split(":"), i = s[0], o = s[1];
        if (!o) throw new _({
          message: "Invalid key specified: the key has no colon-separated secret",
          code: 40101,
          statusCode: 403,
          remediation: 'Copy the full "appId.keyId:secret" key including the colon and secret from the Ably dashboard. If you have the Ably CLI installed, `ably auth keys list` shows the keys configured on the current app.'
        });
        if (e.clientId === "") throw new _({
          message: "clientId can’t be an empty string",
          code: 40012,
          statusCode: 400,
          remediation: "Pass a non-empty clientId, or omit the field entirely for an anonymous token."
        });
        "capability" in e && (e.capability = Zn(e.capability));
        const l = A({ keyName: i }, e), u = e.clientId || "", g = e.ttl || "", p = e.capability || "";
        l.timestamp || (l.timestamp = await this._getTimestamp(t && t.queryTime));
        const w = l.nonce || (l.nonce = Hs()), C = l.timestamp, O = l.keyName + `
` + g + `
` + p + `
` + u + `
` + C + `
` + w + `
`;
        return l.mac = l.mac || $t(O, o), a.logAction(this.logger, a.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), l;
      }
      async getAuthParams() {
        if (this.method == "basic") return { key: this.key };
        {
          let e = await this._ensureValidAuthCredentials(!1);
          if (!e) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
          return { access_token: e.token };
        }
      }
      async getAuthHeaders() {
        if (this.method == "basic") return { authorization: "Basic " + this.basicKey };
        {
          const e = await this._ensureValidAuthCredentials(!1);
          if (!e) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
          return { authorization: "Bearer " + bt(e.token) };
        }
      }
      _saveBasicOptions(e) {
        this.method = "basic", this.key = e.key, this.basicKey = bt(e.key), this.authOptions = e || {}, "clientId" in e && this._userSetClientId(e.clientId);
      }
      _saveTokenOptions(e, t) {
        this.method = "token", e && (this.tokenParams = e), t && (t.token && (t.tokenDetails = typeof t.token == "string" ? { token: t.token } : t.token), t.tokenDetails && (this.tokenDetails = t.tokenDetails), "clientId" in t && this._userSetClientId(t.clientId), this.authOptions = t);
      }
      async _ensureValidAuthCredentials(e) {
        const t = this.tokenDetails;
        if (t) {
          if (this._tokenClientIdMismatch(t.clientId)) throw new _({
            message: "Mismatch between clientId in token (" + t.clientId + ") and current clientId (" + this.clientId + ")",
            code: 40102,
            statusCode: 403,
            remediation: "Issue the token with the same clientId as ClientOptions.clientId, or omit ClientOptions.clientId and let the token define it."
          });
          if (!this.client.isTimeOffsetSet() || !t.expires || t.expires >= this.client.getTimestampUsingOffset())
            return a.logAction(this.logger, a.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + t.expires), t;
          a.logAction(this.logger, a.LOG_MINOR, "Auth.getToken()", "deleting expired token"), this.tokenDetails = null;
        }
        const n = (this.waitingForTokenRequest || (this.waitingForTokenRequest = Kn.create(this.logger))).createPromise();
        if (this.currentTokenRequestId !== null && !e) return n;
        const s = this.currentTokenRequestId = Js();
        let i, o = null;
        try {
          i = await this.requestToken(this.tokenParams, this.authOptions);
        } catch (u) {
          o = u;
        }
        if (this.currentTokenRequestId > s)
          return a.logAction(this.logger, a.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one"), n;
        this.currentTokenRequestId = null;
        const l = this.waitingForTokenRequest;
        return this.waitingForTokenRequest = null, o ? (l?.rejectAll(o), n) : (l?.resolveAll(this.tokenDetails = i), n);
      }
      _userSetClientId(e) {
        if (typeof e == "string" || e === null) {
          if (e === "*") throw new _({
            message: 'Can’t use "*" as a clientId as that string is reserved. clientId sets a single fixed identity for the client',
            code: 40012,
            statusCode: 400,
            remediation: 'Omit clientId and specify the identity per operation instead, for example with presence.enterClient(otherId, data) or by setting clientId on each message you publish. This requires the library to be instantiated with an API key or a token bound to a wildcard clientId. To request a wildcard token, set defaultTokenParams: { clientId: "*" } in ClientOptions. A wildcard token lets the client claim any clientId per operation but does not give it an identity of its own.'
          });
          {
            const t = this._uncheckedSetClientId(e);
            if (t) throw t;
          }
        } else throw new _({
          message: "clientId must be either a string or null",
          code: 40012,
          statusCode: 400,
          remediation: "Pass a stable string such as a user id to identify the client, or null (or omit it) for an anonymous client. Values like numbers or objects are not accepted."
        });
      }
      _uncheckedSetClientId(e) {
        if (this._tokenClientIdMismatch(e)) {
          const t = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + e, n = new _({
            message: t,
            code: 40102,
            statusCode: 401,
            remediation: "Issue the token with the matching clientId, or omit ClientOptions.clientId and let the token define it."
          });
          return a.logAction(this.logger, a.LOG_ERROR, "Auth._uncheckedSetClientId()", t), n;
        } else
          return this.clientId = this.tokenParams.clientId = e, null;
      }
      _tokenClientIdMismatch(e) {
        return !!(this.clientId && this.clientId !== "*" && e && e !== "*" && this.clientId !== e);
      }
      static isTokenErr(e) {
        return e.code && e.code >= 40140 && e.code < 40150;
      }
      revokeTokens(e, t) {
        return this.client.rest.revokeTokens(e, t);
      }
      async _getTimestamp(e) {
        return this.client.getTimestamp(e || !!this.authOptions.queryTime);
      }
    }, ve = ns;
    function Jt(e) {
      const t = [];
      if (e) for (const n in e) t.push(n + "=" + e[n]);
      return t.join("&");
    }
    function we(e, t) {
      return e + (t ? "?" : "") + Jt(t);
    }
    function He(e, t, n, s, i) {
      e.error ? a.logActionNoStrip(i, a.LOG_MICRO, "Http." + t + "()", "Received Error; " + we(n, s) + "; Error: " + j(e.error)) : a.logActionNoStrip(i, a.LOG_MICRO, "Http." + t + "()", "Received; " + we(n, s) + "; Headers: " + Jt(e.headers) + "; StatusCode: " + e.statusCode + "; Body" + (m.BufferUtils.isBuffer(e.body) ? " (Base64): " + m.BufferUtils.base64Encode(e.body) : ": " + e.body));
    }
    function ss(e, t, n, s, i) {
      i.shouldLog(a.LOG_MICRO) && a.logActionNoStrip(i, a.LOG_MICRO, "Http." + e + "()", "Sending; " + we(t, s) + "; Body" + (m.BufferUtils.isBuffer(n) ? " (Base64): " + m.BufferUtils.base64Encode(n) : ": " + n));
    }
    var Ce = class {
      constructor(e) {
        this.client = e, this.platformHttp = new m.Http(e), this.checkConnectivity = this.platformHttp.checkConnectivity ? () => this.platformHttp.checkConnectivity() : void 0;
      }
      get logger() {
        var e, t;
        return (t = (e = this.client) == null ? void 0 : e.logger) != null ? t : a.defaultLogger;
      }
      get supportsAuthHeaders() {
        return this.platformHttp.supportsAuthHeaders;
      }
      get supportsLinkHeaders() {
        return this.platformHttp.supportsLinkHeaders;
      }
      _getHosts(e) {
        const t = e.connection, n = t && t.connectionManager.host;
        return n ? [n].concat(E.getFallbackHosts(e.options)) : E.getHosts(e.options);
      }
      async do(e, t, n, s, i) {
        try {
          const o = this.client;
          if (!o) return { error: new _("http.do called without client", 5e4, 500) };
          const l = typeof t == "function" ? t : function(C) {
            return o.baseUri(C) + t;
          }, u = o._currentFallback;
          if (u)
            if (u.validUntil > m.Config.now()) {
              const C = await this.doUri(e, l(u.host), n, s, i);
              return C.error && this.platformHttp.shouldFallback(C.error) ? (o._currentFallback = null, this.do(e, t, n, s, i)) : C;
            } else o._currentFallback = null;
          const g = this._getHosts(o);
          if (g.length === 1) return this.doUri(e, l(g[0]), n, s, i);
          let p = null;
          const w = async (C, O) => {
            const v = C.shift();
            p = p ?? m.Config.now();
            const I = await this.doUri(e, l(v), n, s, i);
            return I.error && this.platformHttp.shouldFallback(I.error) && C.length ? m.Config.now() - p > o.options.timeouts.httpMaxRetryDuration ? { error: new _(`Timeout for trying fallback hosts retries. Total elapsed time exceeded the ${o.options.timeouts.httpMaxRetryDuration}ms limit`, 50003, 500) } : w(C, !0) : (O && (o._currentFallback = {
              host: v,
              validUntil: m.Config.now() + o.options.timeouts.fallbackRetryTimeout
            }), I);
          };
          return w(g);
        } catch (o) {
          return { error: new _(`Unexpected error in Http.do: ${j(o)}`, 5e4, 500) };
        }
      }
      async doUri(e, t, n, s, i) {
        try {
          ss(e, t, s, i, this.logger);
          const o = await this.platformHttp.doUri(e, t, n, s, i);
          return this.logger.shouldLog(a.LOG_MICRO) && He(o, e, t, i, this.logger), o;
        } catch (o) {
          return { error: new _(`Unexpected error in Http.doUri: ${j(o)}`, 5e4, 500) };
        }
      }
    };
    function Ks(e, t, n, s) {
      try {
        n.apply(t, s);
      } catch (i) {
        a.logAction(e, a.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + i + "; stack = " + (i && i.stack));
      }
    }
    function Kt(e, t, n) {
      let s, i, o;
      for (let l = 0; l < e.length; l++)
        if (s = e[l], n && (s = s[n]), Array.isArray(s)) {
          for (; (i = s.indexOf(t)) !== -1; ) s.splice(i, 1);
          n && s.length === 0 && delete e[l][n];
        } else if (oe(s))
          for (o in s) Object.prototype.hasOwnProperty.call(s, o) && Array.isArray(s[o]) && Kt([s], t, o);
    }
    var Qs = class {
      constructor(e) {
        this.logger = e, this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
      }
      on(...e) {
        if (e.length === 1) {
          const t = e[0];
          if (typeof t == "function") this.any.push(t);
          else throw new Error("EventListener.on(): Invalid arguments: " + m.Config.inspect(e));
        }
        if (e.length === 2) {
          const [t, n] = e;
          if (typeof n != "function") throw new Error("EventListener.on(): Invalid arguments: " + m.Config.inspect(e));
          if (ae(t)) this.any.push(n);
          else if (Array.isArray(t)) t.forEach((s) => {
            this.on(s, n);
          });
          else {
            if (typeof t != "string") throw new Error("EventListener.on(): Invalid arguments: " + m.Config.inspect(e));
            (this.events[t] || (this.events[t] = [])).push(n);
          }
        }
      }
      off(...e) {
        if (e.length == 0 || ae(e[0]) && ae(e[1])) {
          this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
          return;
        }
        const [t, n] = e;
        let s = null, i = null;
        if (e.length === 1 || !n)
          typeof t == "function" ? s = t : i = t;
        else {
          if (typeof n != "function") throw new Error("EventEmitter.off(): invalid arguments:" + m.Config.inspect(e));
          [i, s] = [t, n];
        }
        if (s && ae(i)) {
          Kt([
            this.any,
            this.events,
            this.anyOnce,
            this.eventsOnce
          ], s);
          return;
        }
        if (Array.isArray(i)) {
          i.forEach((o) => {
            this.off(o, s);
          });
          return;
        }
        if (typeof i != "string") throw new Error("EventEmitter.off(): invalid arguments:" + m.Config.inspect(e));
        s ? Kt([this.events, this.eventsOnce], s, i) : (delete this.events[i], delete this.eventsOnce[i]);
      }
      listeners(e) {
        if (e) {
          const t = this.events[e] || [];
          return this.eventsOnce[e] && Array.prototype.push.apply(t, this.eventsOnce[e]), t.length ? t : null;
        }
        return this.any.length ? this.any : null;
      }
      emit(e, ...t) {
        const n = { event: e }, s = [];
        this.anyOnce.length && (Array.prototype.push.apply(s, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(s, this.any);
        const i = this.eventsOnce[e];
        i && (Array.prototype.push.apply(s, i), delete this.eventsOnce[e]);
        const o = this.events[e];
        o && Array.prototype.push.apply(s, o), s.forEach((l) => {
          Ks(this.logger, n, l, t);
        });
      }
      once(...e) {
        const t = e.length;
        if (t === 0 || t === 1 && typeof e[0] != "function") {
          const i = e[0];
          return new Promise((o) => {
            this.once(i, o);
          });
        }
        const [n, s] = e;
        if (e.length === 1 && typeof n == "function") this.anyOnce.push(n);
        else if (ae(n)) {
          if (typeof s != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + m.Config.inspect(e));
          this.anyOnce.push(s);
        } else if (Array.isArray(n)) {
          const i = this, o = function() {
            const l = Array.prototype.slice.call(arguments);
            if (n.forEach(function(u) {
              i.off(u, o);
            }), typeof s != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + m.Config.inspect(e));
            s.apply(this, l);
          };
          n.forEach(function(l) {
            i.on(l, o);
          });
        } else {
          if (typeof n != "string") throw new Error("EventEmitter.once(): Invalid arguments:" + m.Config.inspect(e));
          const i = this.eventsOnce[n] || (this.eventsOnce[n] = []);
          if (s) {
            if (typeof s != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + m.Config.inspect(e));
            i.push(s);
          }
        }
      }
      async whenState(e, t) {
        if (typeof e != "string" || typeof t != "string") throw new Error("whenState requires a valid state String argument");
        return e === t ? null : this.once(e);
      }
    }, Y = Qs, M = {
      HEARTBEAT: 0,
      ACK: 1,
      NACK: 2,
      CONNECT: 3,
      CONNECTED: 4,
      DISCONNECT: 5,
      DISCONNECTED: 6,
      CLOSE: 7,
      CLOSED: 8,
      ERROR: 9,
      ATTACH: 10,
      ATTACHED: 11,
      DETACH: 12,
      DETACHED: 13,
      PRESENCE: 14,
      MESSAGE: 15,
      SYNC: 16,
      AUTH: 17,
      ACTIVATE: 18,
      OBJECT: 19,
      OBJECT_SYNC: 20,
      ANNOTATION: 21,
      PING: 22,
      PONG: 23
    }, is = [];
    Object.keys(M).forEach(function(e) {
      is[M[e]] = e;
    });
    var ne = {
      HAS_PRESENCE: 1,
      HAS_BACKLOG: 2,
      RESUMED: 4,
      TRANSIENT: 16,
      ATTACH_RESUME: 32,
      HAS_OBJECTS: 128,
      PRESENCE: 65536,
      PUBLISH: 1 << 17,
      SUBSCRIBE: 1 << 18,
      PRESENCE_SUBSCRIBE: 1 << 19,
      ANNOTATION_PUBLISH: 1 << 21,
      ANNOTATION_SUBSCRIBE: 1 << 22,
      OBJECT_SUBSCRIBE: 1 << 24,
      OBJECT_PUBLISH: 1 << 25
    }, Le = Object.keys(ne);
    ne.MODE_ALL = ne.PRESENCE | ne.PUBLISH | ne.SUBSCRIBE | ne.PRESENCE_SUBSCRIBE | ne.ANNOTATION_PUBLISH | ne.ANNOTATION_SUBSCRIBE | ne.OBJECT_SUBSCRIBE | ne.OBJECT_PUBLISH;
    var Qt = [
      "PRESENCE",
      "PUBLISH",
      "SUBSCRIBE",
      "PRESENCE_SUBSCRIBE",
      "ANNOTATION_PUBLISH",
      "ANNOTATION_SUBSCRIBE",
      "OBJECT_SUBSCRIBE",
      "OBJECT_PUBLISH"
    ];
    function rs(e) {
      return !!e && !!e.cipher && !!e.channelCipher;
    }
    function Xs(e) {
      return !e || !e.channelOptions ? {
        channelOptions: e,
        plugins: {},
        baseEncodedPreviousPayload: void 0
      } : e;
    }
    function wt(e, t, n) {
      if (n && n.cipher) {
        e || Z("Crypto");
        const s = e.getCipher(n.cipher, t);
        return {
          cipher: s.cipherParams,
          channelCipher: s.cipher
        };
      }
      return n ?? {};
    }
    async function os(e, t) {
      const { data: n, encoding: s } = await as(e.data, e.encoding, t);
      return e.data = n, e.encoding = s, e;
    }
    async function as(e, t, n) {
      let s = n.channelCipher, i = e, o = t ? t + "/" : "";
      m.BufferUtils.isBuffer(i) || (i = m.BufferUtils.utf8Encode(String(i)), o = o + "utf-8/");
      const l = await s.encrypt(i);
      return o = o + "cipher+" + s.algorithm, {
        data: l,
        encoding: o
      };
    }
    async function Xt(e, t) {
      const { data: n, encoding: s } = Yt(e.data, e.encoding);
      return e.data = n, e.encoding = s, rs(t) ? os(e, t) : e;
    }
    function Yt(e, t) {
      if (typeof e == "string" || m.BufferUtils.isBuffer(e) || e === null || e === void 0) return {
        data: e,
        encoding: t
      };
      if (oe(e) || Array.isArray(e)) return {
        data: JSON.stringify(e),
        encoding: t ? t + "/json" : "json"
      };
      throw new _({
        message: "Data type is unsupported",
        code: 40013,
        statusCode: 400,
        remediation: "Message data must be a string, Buffer/ArrayBuffer/TypedArray, plain object, or array. Convert other types (e.g. Date, Map, Set) to one of these before publishing."
      });
    }
    async function Zt(e, t) {
      const { data: n, encoding: s, error: i } = await ct(e.data, e.encoding, t);
      if (e.data = n, e.encoding = s, i) throw i;
    }
    async function ct(e, t, n) {
      const s = Xs(n);
      let i = e, o = e, l = t, u;
      if (t) {
        const g = t.split("/");
        let p, w = g.length, C = "";
        try {
          for (; (p = w) > 0; ) {
            const O = g[--w].match(/([-\w]+)(\+([\w-]+))?/);
            if (!O) break;
            switch (C = O[1], C) {
              case "base64":
                o = m.BufferUtils.base64Decode(String(o)), p == g.length && (i = o);
                continue;
              case "utf-8":
                o = m.BufferUtils.utf8Decode(o);
                continue;
              case "json":
                o = JSON.parse(o);
                continue;
              case "cipher":
                if (s.channelOptions != null && s.channelOptions.cipher && s.channelOptions.channelCipher) {
                  const v = O[3], I = s.channelOptions.channelCipher;
                  if (v != I.algorithm) throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                  o = await I.decrypt(o);
                  continue;
                } else throw new Error("Unable to decrypt message; not an encrypted channel");
              case "vcdiff":
                if (!s.plugins || !s.plugins.vcdiff) throw new _({
                  message: "Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)",
                  code: 40019,
                  statusCode: 400,
                  remediation: "Install @ably/vcdiff-decoder and pass it in ClientOptions.plugins.vcdiff."
                });
                if (typeof Uint8Array > "u") throw new _({
                  message: "Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)",
                  code: 40020,
                  statusCode: 400,
                  remediation: "Disable channel deltas (do not set delta in channel params) on environments without typed-array support, or upgrade the JavaScript runtime."
                });
                try {
                  let v = s.baseEncodedPreviousPayload;
                  typeof v == "string" && (v = m.BufferUtils.utf8Encode(v));
                  const I = m.BufferUtils.toBuffer(v);
                  o = m.BufferUtils.toBuffer(o), o = m.BufferUtils.arrayBufferViewToBuffer(s.plugins.vcdiff.decode(o, I)), i = o;
                } catch (v) {
                  throw new _({
                    message: "Vcdiff delta decode failed with " + v,
                    code: 40018,
                    statusCode: 400,
                    remediation: "The SDK recovers automatically by re-attaching from the last successfully processed message, and the server re-sends the affected message in full before deltas resume. If this recurs, disable deltas for this channel by removing delta from the channel params."
                  });
                }
                continue;
              default:
                throw new Error("Unknown encoding");
            }
          }
        } catch (O) {
          const v = O;
          u = new _({
            message: `Error processing the ${C} encoding, decoder returned ‘${v.message}’`,
            code: v.code || 40013,
            statusCode: 400,
            remediation: v.remediation
          });
        } finally {
          l = p <= 0 ? null : g.slice(0, p).join("/");
        }
      }
      return u ? {
        error: u,
        data: o,
        encoding: l
      } : (s.baseEncodedPreviousPayload = i, {
        data: o,
        encoding: l
      });
    }
    function en(...e) {
      const t = e.length > 0 ? "json" : "msgpack", { data: n, encoding: s } = Ct(this.data, this.encoding, t);
      return Object.assign({}, this, {
        encoding: s,
        data: n
      });
    }
    function Ct(e, t, n) {
      return !e || !m.BufferUtils.isBuffer(e) ? {
        data: e,
        encoding: t
      } : n === "msgpack" ? {
        data: m.BufferUtils.toBuffer(e),
        encoding: t
      } : {
        data: m.BufferUtils.base64Encode(e),
        encoding: t ? t + "/base64" : "base64"
      };
    }
    var Rt = {
      encryptData: as,
      encodeData: Yt,
      encodeDataForWire: Ct,
      decodeData: ct
    };
    function Ot(e) {
      const { id: t, connectionId: n, timestamp: s } = e;
      let i;
      switch (e.action) {
        case M.MESSAGE:
          i = e.messages;
          break;
        case M.PRESENCE:
        case M.SYNC:
          i = e.presence;
          break;
        case M.ANNOTATION:
          i = e.annotations;
          break;
        case M.OBJECT:
        case M.OBJECT_SYNC:
          i = e.state;
          break;
        default:
          throw new _("Unexpected action " + e.action, 4e4, 400);
      }
      for (let o = 0; o < i.length; o++) {
        const l = i[o];
        l.connectionId || (l.connectionId = n), l.timestamp || (l.timestamp = s), t && !l.id && (l.id = t + ":" + o);
      }
    }
    function d(e, t) {
      let n = "[" + t;
      for (const s in e) s === "data" ? typeof e.data == "string" ? n += "; data=" + e.data : m.BufferUtils.isBuffer(e.data) ? n += "; data (buffer)=" + m.BufferUtils.base64Encode(e.data) : typeof e.data < "u" && (n += "; data (json)=" + JSON.stringify(e.data)) : s && (s === "extras" || s === "operation") ? n += "; " + s + "=" + JSON.stringify(e[s]) : s === "version" ? n += "; version=" + JSON.stringify(e[s]) : s === "annotations" ? n += "; annotations=" + JSON.stringify(e[s]) : e[s] !== void 0 && (n += "; " + s + "=" + e[s]);
      return n += "]", n;
    }
    var y = class {
    }, R = class {
      constructor(e) {
        this.Platform = m, this.ErrorInfo = _, this.Logger = a, this.Defaults = E, this.Utils = Ue, this.EventEmitter = Y, this.MessageEncoding = Rt;
        var t, n, s, i, o, l, u, g, p, w, C, O;
        this._additionalHTTPRequestImplementations = (t = e.plugins) != null ? t : null, this.logger = new a(), this.logger.setLog(e.logLevel, e.logHandler), a.logAction(this.logger, a.LOG_MICRO, "BaseClient()", "initialized with clientOptions " + m.Config.inspect(e)), this._MsgPack = (s = (n = e.plugins) == null ? void 0 : n.MsgPack) != null ? s : null;
        const v = this.options = E.normaliseOptions(e, this._MsgPack, this.logger);
        if (v.key) {
          const I = v.key.match(/^([^:\s]+):([^:.\s]+)$/);
          if (!I) {
            const T = "invalid key parameter";
            throw a.logAction(this.logger, a.LOG_ERROR, "BaseClient()", T), new _({
              message: T,
              code: 40400,
              statusCode: 404,
              remediation: 'ClientOptions.key must be the full "appId.keyId:secret" string copied from the Ably dashboard. If you have the Ably CLI installed, `ably auth keys list` shows the keys configured on the current app.'
            });
          }
          v.keyName = I[1], v.keySecret = I[2];
        }
        if ("clientId" in v)
          if (typeof v.clientId == "string" || v.clientId === null) {
            if (v.clientId === "*") throw new _({
              message: 'Can’t use "*" as a clientId as that string is reserved',
              code: 40012,
              statusCode: 400,
              remediation: 'ClientOptions.clientId sets one fixed identity and cannot be "*". To let this client act as any clientId, request a wildcard token instead: set defaultTokenParams: { clientId: "*" } on the client. The "*" belongs in the token request, not in ClientOptions.clientId.'
            });
          } else throw new _({
            message: "clientId must be either a string or null",
            code: 40012,
            statusCode: 400,
            remediation: "Pass a stable string such as a user id to identify the client, or null (or omit it) for an anonymous client. Values like numbers or objects are not accepted."
          });
        a.logAction(this.logger, a.LOG_MINOR, "BaseClient()", "started; version = " + E.version), this._currentFallback = null, this.serverTimeOffset = null, this.http = new Ce(this), this.auth = new ve(this, v), this._rest = (i = e.plugins) != null && i.Rest ? new e.plugins.Rest(this) : null, this._Crypto = (l = (o = e.plugins) == null ? void 0 : o.Crypto) != null ? l : null, this.__FilteredSubscriptions = (g = (u = e.plugins) == null ? void 0 : u.MessageInteractions) != null ? g : null, this._Annotations = (w = (p = e.plugins) == null ? void 0 : p.Annotations) != null ? w : null, this._liveObjectsPlugin = (O = (C = e.plugins) == null ? void 0 : C.LiveObjects) != null ? O : null;
      }
      get rest() {
        return this._rest || Z("Rest"), this._rest;
      }
      get _FilteredSubscriptions() {
        return this.__FilteredSubscriptions || Z("MessageInteractions"), this.__FilteredSubscriptions;
      }
      get channels() {
        return this.rest.channels;
      }
      get push() {
        return this.rest.push;
      }
      get pushConfig() {
        var e, t, n;
        return (n = (t = (e = this.options.plugins) == null ? void 0 : e.Push) == null ? void 0 : t.pushConfig) != null ? n : m.Config.push;
      }
      device() {
        var e, t;
        if ((!((e = this.options.plugins) != null && e.Push) || !this.push.LocalDevice) && Z("Push"), !this._device) {
          if ((t = this.pushConfig) != null && t.storageIsAsync) throw new _({
            message: "client.device() cannot load the local device synchronously: push storage on this platform is asynchronous",
            code: 4e4,
            statusCode: 400,
            remediation: "Use await client.getDevice() instead. device() is deprecated and will become asynchronous in the next major release."
          });
          this._device = this.push.LocalDevice.load(this);
        }
        return this._device;
      }
      async getDevice() {
        var e, t;
        if ((!((e = this.options.plugins) != null && e.Push) || !this.push.LocalDevice) && Z("Push"), !this._device) {
          const n = (t = this._devicePromise) != null ? t : this._devicePromise = this.push.LocalDevice.loadAsync(this);
          try {
            this._device = await n;
          } catch (s) {
            throw this._devicePromise === n && (this._devicePromise = void 0), s;
          }
        }
        return this._device;
      }
      baseUri(e) {
        return E.getHttpScheme(this.options) + Vt(e) + ":" + E.getPort(this.options, !1);
      }
      async stats(e) {
        return this.rest.stats(e);
      }
      async time(e) {
        return this.rest.time(e);
      }
      async request(e, t, n, s, i, o) {
        return this.rest.request(e, t, n, s, i, o);
      }
      batchPublish(e) {
        return this.rest.batchPublish(e);
      }
      batchPresence(e) {
        return this.rest.batchPresence(e);
      }
      setLog(e) {
        this.logger.setLog(e.level, e.handler);
      }
      async getTimestamp(e) {
        return !this.isTimeOffsetSet() && e ? this.time() : this.getTimestampUsingOffset();
      }
      getTimestampUsingOffset() {
        return m.Config.now() + (this.serverTimeOffset || 0);
      }
      isTimeOffsetSet() {
        return this.serverTimeOffset !== null;
      }
    };
    R.Platform = m;
    var P = R, z = class Et {
      toJSON() {
        var t, n, s;
        return {
          id: this.id,
          deviceSecret: this.deviceSecret,
          platform: this.platform,
          formFactor: this.formFactor,
          clientId: this.clientId,
          metadata: this.metadata,
          deviceIdentityToken: this.deviceIdentityToken,
          push: {
            recipient: (t = this.push) == null ? void 0 : t.recipient,
            state: (n = this.push) == null ? void 0 : n.state,
            error: (s = this.push) == null ? void 0 : s.error
          }
        };
      }
      toString() {
        var t, n, s, i;
        let o = "[DeviceDetails";
        return this.id && (o += "; id=" + this.id), this.platform && (o += "; platform=" + this.platform), this.formFactor && (o += "; formFactor=" + this.formFactor), this.clientId && (o += "; clientId=" + this.clientId), this.metadata && (o += "; metadata=" + this.metadata), this.deviceIdentityToken && (o += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), (t = this.push) != null && t.recipient && (o += "; push.recipient=" + JSON.stringify(this.push.recipient)), (n = this.push) != null && n.state && (o += "; push.state=" + this.push.state), (s = this.push) != null && s.error && (o += "; push.error=" + JSON.stringify(this.push.error)), (i = this.push) != null && i.metadata && (o += "; push.metadata=" + this.push.metadata), o += "]", o;
      }
      static toRequestBody(t, n, s) {
        return ce(t, n, s);
      }
      static fromResponseBody(t, n, s) {
        return s && (t = X(t, n, s)), Array.isArray(t) ? Et.fromValuesArray(t) : Et.fromValues(t);
      }
      static fromValues(t) {
        return t.error = t.error && _.fromWireValues(t.error), Object.assign(new Et(), t);
      }
      static fromLocalDevice(t) {
        return Object.assign(new Et(), t);
      }
      static fromValuesArray(t) {
        const n = t.length, s = new Array(n);
        for (let i = 0; i < n; i++) s[i] = Et.fromValues(t[i]);
        return s;
      }
    };
    async function re(e, t, n, s) {
      return e.http.supportsAuthHeaders ? s(A(await e.auth.getAuthHeaders(), t), n) : s(t, A(await e.auth.getAuthParams(), n));
    }
    function Re(e, t, n) {
      if (e.err && !e.body) return { err: e.err };
      if (e.statusCode === Ge.NoContent) return ge(K({}, e), {
        body: [],
        unpacked: !0
      });
      let s = e.body;
      if (!e.unpacked) try {
        s = X(s, t, n);
      } catch (u) {
        return ye(u) ? { err: u } : { err: new se(j(u), null) };
      }
      if (!s) return { err: new se("unenvelope(): Response body is missing", null) };
      const { statusCode: i, response: o, headers: l } = s;
      if (i === void 0) return ge(K({}, e), {
        body: s,
        unpacked: !0
      });
      if (i < 200 || i >= 300) {
        let u = o && o.error || e.err;
        return u || (u = /* @__PURE__ */ new Error("Error in unenveloping " + s), u.statusCode = i), {
          err: u,
          body: o,
          headers: l,
          unpacked: !0,
          statusCode: i
        };
      }
      return {
        err: e.err,
        body: o,
        headers: l,
        unpacked: !0,
        statusCode: i
      };
    }
    function le(e, t, n, s, i) {
      e.err ? a.logAction(i, a.LOG_MICRO, "Resource." + t + "()", "Received Error; " + we(n, s) + "; Error: " + j(e.err)) : a.logAction(i, a.LOG_MICRO, "Resource." + t + "()", "Received; " + we(n, s) + "; Headers: " + Jt(e.headers) + "; StatusCode: " + e.statusCode + "; Body: " + (m.BufferUtils.isBuffer(e.body) ? " (Base64): " + m.BufferUtils.base64Encode(e.body) : ": " + m.Config.inspect(e.body)));
    }
    var H = class Lt {
      static async get(t, n, s, i, o, l) {
        return Lt.do(V.Get, t, n, null, s, i, o, l ?? !1);
      }
      static async delete(t, n, s, i, o, l) {
        return Lt.do(V.Delete, t, n, null, s, i, o, l);
      }
      static async post(t, n, s, i, o, l, u) {
        return Lt.do(V.Post, t, n, s, i, o, l, u);
      }
      static async patch(t, n, s, i, o, l, u) {
        return Lt.do(V.Patch, t, n, s, i, o, l, u);
      }
      static async put(t, n, s, i, o, l, u) {
        return Lt.do(V.Put, t, n, s, i, o, l, u);
      }
      static async do(t, n, s, i, o, l, u, g) {
        u && ((l = l || {}).envelope = u);
        const p = n.logger;
        async function w(O, v) {
          var I;
          if (p.shouldLog(a.LOG_MICRO)) {
            let L = i;
            if (((I = O["content-type"]) == null ? void 0 : I.indexOf("msgpack")) > 0) try {
              n._MsgPack || Z("MsgPack"), L = n._MsgPack.decode(i);
            } catch (D) {
              a.logAction(p, a.LOG_MICRO, "Resource." + t + "()", "Sending MsgPack Decoding Error: " + j(D));
            }
            a.logAction(p, a.LOG_MICRO, "Resource." + t + "()", "Sending; " + we(s, v) + "; Body: " + L);
          }
          const T = await n.http.do(t, s, O, i, v);
          return T.error && ve.isTokenErr(T.error) ? (await n.auth.authorize(null, null), re(n, O, v, w)) : {
            err: T.error,
            body: T.body,
            headers: T.headers,
            unpacked: T.unpacked,
            statusCode: T.statusCode
          };
        }
        let C = await re(n, o, l, w);
        if (u && (C = Re(C, n._MsgPack, u)), p.shouldLog(a.LOG_MICRO) && le(C, t, s, l, p), g) {
          if (C.err) throw C.err;
          {
            const O = K({}, C);
            return delete O.err, O;
          }
        }
        return C;
      }
    };
    function We(e) {
      const t = e.match(/^\.\/(\w+)\?(.*)$/);
      return t && t[2] && nt(t[2]);
    }
    function cs(e) {
      typeof e == "string" && (e = e.split(","));
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const s = e[n].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
        if (s) {
          const i = We(s[1]);
          i && (t[s[2]] = i);
        }
      }
      return t;
    }
    function ls(e, t, n) {
      return !(n && (t || typeof e.code == "number"));
    }
    var hs = class {
      constructor(e, t, n, s, i, o) {
        this.client = e, this.path = t, this.headers = n, this.envelope = s ?? null, this.bodyHandler = i, this.useHttpPaginatedResponse = o || !1;
      }
      get logger() {
        return this.client.logger;
      }
      async get(e) {
        const t = await H.get(this.client, this.path, this.headers, e, this.envelope, !1);
        return this.handlePage(t);
      }
      async delete(e) {
        const t = await H.delete(this.client, this.path, this.headers, e, this.envelope, !1);
        return this.handlePage(t);
      }
      async post(e, t) {
        const n = await H.post(this.client, this.path, t, this.headers, e, this.envelope, !1);
        return this.handlePage(n);
      }
      async put(e, t) {
        const n = await H.put(this.client, this.path, t, this.headers, e, this.envelope, !1);
        return this.handlePage(n);
      }
      async patch(e, t) {
        const n = await H.patch(this.client, this.path, t, this.headers, e, this.envelope, !1);
        return this.handlePage(n);
      }
      async handlePage(e) {
        if (e.err && ls(e.err, e.body, this.useHttpPaginatedResponse))
          throw a.logAction(this.logger, a.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + j(e.err)), e.err;
        let t, n, s;
        try {
          t = e.statusCode == Ge.NoContent ? [] : await this.bodyHandler(e.body, e.headers || {}, e.unpacked);
        } catch (i) {
          throw e.err || i;
        }
        return e.headers && (n = e.headers.Link || e.headers.link) && (s = cs(n)), this.useHttpPaginatedResponse ? new St(this, t, e.headers || {}, e.statusCode, s, e.err) : new At(this, t, s);
      }
    }, At = class {
      constructor(e, t, n) {
        this.resource = e, this.items = t, this._relParams = n;
      }
      async first() {
        if (this.hasFirst()) return this.get(this._relParams.first);
        throw new _({
          message: "No link to the first page of results",
          code: 40400,
          statusCode: 404,
          remediation: "first() is only available on results from a paginated REST query (such as channel history, presence, or stats), whose response includes a link to the first page. This result has no such link, so there is no first page to return."
        });
      }
      async current() {
        if (this.hasCurrent()) return this.get(this._relParams.current);
        throw new _({
          message: "No link to the current page of results",
          code: 40400,
          statusCode: 404,
          remediation: "current() reloads the current page and is only available on results from a paginated REST query (such as channel history, presence, or stats). This result has no such link. To page through results, use next() with hasNext() or isLast() instead."
        });
      }
      async next() {
        return this.hasNext() ? this.get(this._relParams.next) : null;
      }
      hasFirst() {
        return this._relParams != null && "first" in this._relParams;
      }
      hasCurrent() {
        return this._relParams != null && "current" in this._relParams;
      }
      hasNext() {
        return this._relParams != null && "next" in this._relParams;
      }
      isLast() {
        return !this.hasNext();
      }
      async get(e) {
        const t = this.resource, n = await H.get(t.client, t.path, t.headers, e, t.envelope, !1);
        return t.handlePage(n);
      }
    }, St = class extends At {
      constructor(e, t, n, s, i, o) {
        super(e, t, i), this.statusCode = s, this.success = s < 300 && s >= 200, this.headers = n, this.errorCode = o && o.code, this.errorMessage = o && o.message, this.errorDetail = o?.detail;
      }
      toJSON() {
        return {
          items: this.items,
          statusCode: this.statusCode,
          success: this.success,
          headers: this.headers,
          errorCode: this.errorCode,
          errorMessage: this.errorMessage,
          errorDetail: this.errorDetail
        };
      }
    }, Oe = hs, Mi = class pn {
      toJSON() {
        return {
          channel: this.channel,
          deviceId: this.deviceId,
          clientId: this.clientId
        };
      }
      toString() {
        let t = "[PushChannelSubscription";
        return this.channel && (t += "; channel=" + this.channel), this.deviceId && (t += "; deviceId=" + this.deviceId), this.clientId && (t += "; clientId=" + this.clientId), t += "]", t;
      }
      static fromResponseBody(t, n, s) {
        return s && (t = X(t, n, s)), Array.isArray(t) ? pn.fromValuesArray(t) : pn.fromValues(t);
      }
      static fromValues(t) {
        return Object.assign(new pn(), t);
      }
      static fromValuesArray(t) {
        const n = t.length, s = new Array(n);
        for (let i = 0; i < n; i++) s[i] = pn.fromValues(t[i]);
        return s;
      }
    };
    Mi.toRequestBody = ce;
    var us = Mi, to = "Run push.activate() in a browser environment with service worker support, or in React Native using the ably/react-native-push plugin. From a server, use client.push.admin instead. Call client.push.admin.publish(recipient, payload) to send to a device or clientId. Call client.push.admin.deviceRegistrations.save(device) to register a device record.", no = "Run push.deactivate() in a browser environment with service worker support, or in React Native using the ably/react-native-push plugin. From a server, call client.push.admin.deviceRegistrations.remove(deviceId) to remove a device registration.", so = "Call push.updateToken() in React Native with the ably/react-native-push plugin configured, passing plugins: { Push: ReactNativePush.create({ storage, requestToken }) } in the client options. From a server, use client.push.admin.deviceRegistrations.save(device) to modify a device registration instead.", io = class {
      constructor(e) {
        var t;
        this.client = e, this.admin = new ro(e);
        const n = (t = e.options.plugins) == null ? void 0 : t.Push;
        e.pushConfig && n && (this.stateMachine = new n.ActivationStateMachine(e), this.LocalDevice = n.localDeviceFactory(z));
      }
      async activate(e, t) {
        var n;
        const s = (n = this.client.options.plugins) == null ? void 0 : n.Push;
        if (!s) throw ot("Push");
        const i = this.stateMachine;
        if (!i) throw new _({
          message: "This platform is not supported as a target of push notifications: push activation requires a browser environment with service worker support, or a React Native environment with the ably/react-native-push plugin",
          code: 4e4,
          statusCode: 400,
          remediation: to
        });
        if (i.activatedCallback) throw new _({
          message: "Activation already in progress",
          code: 4e4,
          statusCode: 400,
          remediation: "Await the in-flight push.activate() before calling it again."
        });
        const o = new Promise((l, u) => {
          i.activatedCallback = (g) => {
            if (g) {
              u(g);
              return;
            }
            l();
          }, i.updateFailedCallback = t;
        });
        try {
          await this.client.getDevice(), await i.ensureInitialized();
        } catch (l) {
          throw delete i.activatedCallback, delete i.updateFailedCallback, l;
        }
        i.handleEvent(new s.CalledActivate(i, e)), await o;
      }
      async deactivate(e) {
        var t;
        const n = (t = this.client.options.plugins) == null ? void 0 : t.Push;
        if (!n) throw ot("Push");
        const s = this.stateMachine;
        if (!s) throw new _({
          message: "This platform is not supported as a target of push notifications: push activation requires a browser environment with service worker support, or a React Native environment with the ably/react-native-push plugin",
          code: 4e4,
          statusCode: 400,
          remediation: no
        });
        if (s.deactivatedCallback) throw new _({
          message: "Deactivation already in progress",
          code: 4e4,
          statusCode: 400,
          remediation: "Await the in-flight push.deactivate() before calling it again."
        });
        const i = new Promise((o, l) => {
          s.deactivatedCallback = (u) => {
            if (u) {
              l(u);
              return;
            }
            o();
          };
        });
        try {
          await this.client.getDevice(), await s.ensureInitialized();
        } catch (o) {
          throw delete s.deactivatedCallback, o;
        }
        s.handleEvent(new n.CalledDeactivate(s, e)), await i;
      }
      async updateToken(e) {
        var t;
        if (!((t = this.client.options.plugins) != null && t.Push)) throw ot("Push");
        const n = this.stateMachine;
        if (!n) throw new _({
          message: "This platform is not supported as a target of push notifications: push token updates require a React Native environment with the ably/react-native-push plugin",
          code: 4e4,
          statusCode: 400,
          remediation: so
        });
        if (!e || e.transportType !== "fcm" && e.transportType !== "apns" || typeof e.token != "string" || e.token.length === 0) throw new _({
          message: "push.updateToken() requires a { transportType, token } object with transportType 'fcm' or 'apns' and a non-empty token string",
          code: 4e4,
          statusCode: 400,
          remediation: "Pass the refreshed token in the shape your requestToken callback returns, for example { transportType: 'fcm', token } with the token value delivered by messaging().onTokenRefresh."
        });
        const s = await this.client.getDevice();
        if (await n.ensureInitialized(), !s.deviceIdentityToken) throw new _({
          message: "Push token cannot be updated because the device is not activated for push notifications",
          code: 4e4,
          statusCode: 400,
          remediation: "Call client.push.activate() and await its completion before calling push.updateToken(). Wire updateToken() to your platform token refresh listener only after activation has completed."
        });
        s.push.recipient = e.transportType === "apns" ? {
          transportType: "apns",
          deviceToken: e.token
        } : {
          transportType: "fcm",
          registrationToken: e.token
        }, await s.persist(), n.handleEvent(new n.GotPushDeviceDetails());
      }
    }, ro = class {
      constructor(e) {
        this.client = e, this.deviceRegistrations = new ao(e), this.channelSubscriptions = new co(e), this.liveActivity = new oo(e);
      }
      async publish(e, t) {
        const n = this.client, s = n.options.useBinaryProtocol ? "msgpack" : "json", i = E.defaultPostHeaders(n.options), o = {}, l = A({ recipient: e }, t);
        A(i, n.options.headers), n.options.pushFullWait && A(o, { fullWait: "true" });
        const u = ce(l, n._MsgPack, s);
        await H.post(n, "/push/publish", u, i, o, null, !0);
      }
      async createApnsBroadcast(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", s = E.defaultPostHeaders(t.options), i = {};
        A(s, t.options.headers);
        const o = ce({ messageStoragePolicy: e.messageStoragePolicy }, t._MsgPack, n), l = await H.post(t, "/push/apnsBroadcastChannels", o, s, i, null, !0);
        return l.unpacked ? l.body : X(l.body, t._MsgPack, n);
      }
    }, oo = class {
      constructor(e) {
        this.client = e;
      }
      async start(e) {
        const { recipient: t, apnsBroadcast: n, apns: s, headers: i } = e, o = Array.isArray(t.channels) && t.channels.length > 0, l = !!t.deviceId;
        if (o === l) throw new _("LiveActivity.start() requires exactly one of recipient.channels or recipient.deviceId", 4e4, 400);
        const u = { apns: s };
        o && (u.channels = t.channels), l && (u.deviceId = t.deviceId), i && (u.headers = i), await this._post(n, "start", u);
      }
      async update(e) {
        const { apnsBroadcast: t, apns: n, headers: s } = e, i = { apns: n };
        s && (i.headers = s), await this._post(t, "broadcast", i);
      }
      async end(e) {
        const { apnsBroadcast: t, apns: n, headers: s } = e, i = { apns: n };
        s && (i.headers = s), await this._post(t, "end", i);
      }
      async _post(e, t, n) {
        const s = this.client, i = s.options.useBinaryProtocol ? "msgpack" : "json", o = E.defaultPostHeaders(s.options), l = {};
        A(o, s.options.headers);
        const u = ce(n, s._MsgPack, i);
        await H.post(s, "/push/apnsBroadcastChannels/" + encodeURIComponent(e) + "/" + t, u, o, l, null, !0);
      }
    }, ao = class {
      constructor(e) {
        this.client = e;
      }
      async save(e) {
        const t = this.client, n = z.fromValues(e), s = t.options.useBinaryProtocol ? "msgpack" : "json", i = E.defaultPostHeaders(t.options), o = {};
        A(i, t.options.headers), t.options.pushFullWait && A(o, { fullWait: "true" });
        const l = ce(n, t._MsgPack, s), u = await H.put(t, "/push/deviceRegistrations/" + encodeURIComponent(e.id), l, i, o, null, !0);
        return z.fromResponseBody(u.body, t._MsgPack, u.unpacked ? void 0 : s);
      }
      async get(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", s = E.defaultGetHeaders(t.options), i = e.id || e;
        if (typeof i != "string" || !i.length) throw new _({
          message: "First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails",
          code: 4e4,
          statusCode: 400,
          remediation: "Pass either the device id string or a DeviceDetails object with a non-empty .id field. The local device id is available from client.device().id after push.activate() completes. Alternatively pass the .id of a DeviceDetails returned by push.admin.deviceRegistrations.save()."
        });
        A(s, t.options.headers);
        const o = await H.get(t, "/push/deviceRegistrations/" + encodeURIComponent(i), s, {}, null, !0);
        return z.fromResponseBody(o.body, t._MsgPack, o.unpacked ? void 0 : n);
      }
      async list(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", s = this.client.http.supportsLinkHeaders ? void 0 : n, i = E.defaultGetHeaders(t.options);
        return A(i, t.options.headers), new Oe(t, "/push/deviceRegistrations", i, s, async function(o, l, u) {
          return z.fromResponseBody(o, t._MsgPack, u ? void 0 : n);
        }).get(e);
      }
      async remove(e) {
        const t = this.client, n = E.defaultGetHeaders(t.options), s = {}, i = e.id || e;
        if (typeof i != "string" || !i.length) throw new _({
          message: "First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails",
          code: 4e4,
          statusCode: 400,
          remediation: "Pass either the device id string or the DeviceDetails object (with a non-empty .id field). To deactivate the local device, call client.push.deactivate() instead."
        });
        A(n, t.options.headers), t.options.pushFullWait && A(s, { fullWait: "true" }), await H.delete(t, "/push/deviceRegistrations/" + encodeURIComponent(i), n, s, null, !0);
      }
      async removeWhere(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", s = E.defaultGetHeaders(t.options, { format: n });
        A(s, t.options.headers), t.options.pushFullWait && A(e, { fullWait: "true" }), await H.delete(t, "/push/deviceRegistrations", s, e, null, !0);
      }
    }, co = class Br {
      constructor(t) {
        this.remove = Br.prototype.removeWhere, this.client = t;
      }
      async save(t) {
        const n = this.client, s = us.fromValues(t), i = n.options.useBinaryProtocol ? "msgpack" : "json", o = E.defaultPostHeaders(n.options), l = {};
        A(o, n.options.headers), n.options.pushFullWait && A(l, { fullWait: "true" });
        const u = ce(s, n._MsgPack, i), g = await H.post(n, "/push/channelSubscriptions", u, o, l, null, !0);
        return us.fromResponseBody(g.body, n._MsgPack, g.unpacked ? void 0 : i);
      }
      async list(t) {
        const n = this.client, s = n.options.useBinaryProtocol ? "msgpack" : "json", i = this.client.http.supportsLinkHeaders ? void 0 : s, o = E.defaultGetHeaders(n.options);
        return A(o, n.options.headers), new Oe(n, "/push/channelSubscriptions", o, i, async function(l, u, g) {
          return us.fromResponseBody(l, n._MsgPack, g ? void 0 : s);
        }).get(t);
      }
      async removeWhere(t) {
        const n = this.client, s = n.options.useBinaryProtocol ? "msgpack" : "json", i = E.defaultGetHeaders(n.options, { format: s });
        A(i, n.options.headers), n.options.pushFullWait && A(t, { fullWait: "true" }), await H.delete(n, "/push/channelSubscriptions", i, t, null, !0);
      }
      async listChannels(t) {
        const n = this.client, s = n.options.useBinaryProtocol ? "msgpack" : "json", i = this.client.http.supportsLinkHeaders ? void 0 : s, o = E.defaultGetHeaders(n.options);
        return A(o, n.options.headers), n.options.pushFullWait && A(t, { fullWait: "true" }), new Oe(n, "/push/channels", o, i, async function(l, u, g) {
          const p = !g && s ? X(l, n._MsgPack, s) : l;
          for (let w = 0; w < p.length; w++) p[w] = String(p[w]);
          return p;
        }).get(t);
      }
    }, lo = io, Pi = [
      "absent",
      "present",
      "enter",
      "leave",
      "update"
    ];
    async function Ei(e, t, n, s) {
      const i = wt(t, e, s ?? null);
      return tn.fromValues(n).decode(i, e);
    }
    async function ho(e, t, n, s) {
      return Promise.all(n.map(function(i) {
        return Ei(e, t, i, s);
      }));
    }
    async function uo(e, t) {
      return tn.fromValues(e).decode(t.channelOptions, t.logger);
    }
    async function Li(e, t) {
      return Promise.all(e.map(function(n) {
        return uo(n, t);
      }));
    }
    var xi = class mn extends y {
      get memberKey() {
        return this.connectionId + ":" + this.clientId;
      }
      isSynthesized() {
        return !this.id || !this.connectionId ? !0 : this.id.substring(this.connectionId.length, 0) !== this.connectionId;
      }
      parseId() {
        if (!this.id) throw new Error("parseId(): Presence message does not contain an id");
        const t = this.id.split(":");
        return {
          connectionId: t[0],
          msgSerial: parseInt(t[1], 10),
          index: parseInt(t[2], 10)
        };
      }
      async encode(t) {
        return Xt(Object.assign(new tn(), this, { action: Pi.indexOf(this.action || "present") }), t);
      }
      static fromValues(t) {
        return Object.assign(new mn(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => mn.fromValues(n));
      }
      static fromData(t) {
        return t instanceof mn ? t : mn.fromValues({ data: t });
      }
      toString() {
        return d(this, "PresenceMessage");
      }
    }, tn = class bi extends y {
      toJSON(...t) {
        return en.call(this, ...t);
      }
      static fromValues(t) {
        return Object.assign(new bi(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => bi.fromValues(n));
      }
      async decode(t, n) {
        const s = Object.assign(new xi(), ge(K({}, this), { action: Pi[this.action] }));
        try {
          await Zt(s, t);
        } catch (i) {
          a.logAction(n, a.LOG_ERROR, "WirePresenceMessage.decode()", j(i));
        }
        return s;
      }
      toString() {
        return d(this, "WirePresenceMessage");
      }
    }, xe = xi, go = class {
      constructor(e) {
        this.channel = e;
      }
      get logger() {
        return this.channel.logger;
      }
      async get(e) {
        a.logAction(this.logger, a.LOG_MICRO, "RestPresence.get()", "channel = " + this.channel.name);
        const t = this.channel.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", s = this.channel.client.http.supportsLinkHeaders ? void 0 : n, i = E.defaultGetHeaders(t.options);
        return A(i, t.options.headers), new Oe(t, this.channel.client.rest.presenceMixin.basePath(this), i, s, async (o, l, u) => Li(u ? o : X(o, t._MsgPack, n), this.channel)).get(e);
      }
      async history(e) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestPresence.history()", "channel = " + this.channel.name), this.channel.client.rest.presenceMixin.history(this, e);
      }
    }, fo = go, Ni = [
      "message.create",
      "message.update",
      "message.delete",
      "meta",
      "message.summary",
      "message.append"
    ];
    function po(e) {
      return Ni[e || 0] || "unknown";
    }
    function mo(e) {
      let t = 0;
      return e.name && (t += e.name.length), e.clientId && (t += e.clientId.length), e.extras && (t += JSON.stringify(e.extras).length), e.data && (t += Ht(e.data)), t;
    }
    async function Ui(e, t, n, s) {
      const i = wt(t, e, s ?? null);
      return nn.fromValues(n).decode(i, e);
    }
    async function yo(e, t, n, s) {
      return Promise.all(n.map(function(i) {
        return Ui(e, t, i, s);
      }));
    }
    async function Di(e, t) {
      return nn.fromValues(e).decode(t.channelOptions, t.logger);
    }
    async function Bi(e, t) {
      return Promise.all(e.map(function(n) {
        return Di(n, t);
      }));
    }
    async function qi(e, t) {
      return Promise.all(e.map((n) => n.encode(t)));
    }
    var ji = ce;
    function Gi(e) {
      let t, n = 0;
      for (let s = 0; s < e.length; s++)
        t = e[s], n += t.size || (t.size = mo(t));
      return n;
    }
    var Hi = class vi extends y {
      expandFields() {
        if (this.version || (this.version = {}), !this.version.serial && this.serial && (this.version.serial = this.serial), !this.version.timestamp && this.timestamp && (this.version.timestamp = this.timestamp), this.annotations ? this.annotations.summary || (this.annotations.summary = {}) : this.annotations = { summary: {} }, this.annotations && this.annotations.summary)
          for (const [t, n] of Object.entries(this.annotations.summary)) if (t.endsWith(":distinct.v1") || t.endsWith(":unique.v1") || t.endsWith(":multiple.v1"))
            for (const [, s] of Object.entries(n)) s.clipped || (s.clipped = !1);
          else t.endsWith(":flag.v1") && (n.clipped || (n.clipped = !1));
      }
      async encode(t) {
        return Xt(Object.assign(new nn(), this, { action: Ni.indexOf(this.action || "message.create") }), t);
      }
      static fromValues(t) {
        return Object.assign(new vi(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => vi.fromValues(n));
      }
      toString() {
        return d(this, "Message");
      }
    }, nn = class wi extends y {
      toJSON(...t) {
        return en.call(this, ...t);
      }
      static fromValues(t) {
        return Object.assign(new wi(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => wi.fromValues(n));
      }
      async decodeWithErr(t, n) {
        const s = Object.assign(new Hi(), ge(K({}, this), { action: po(this.action) }));
        let i;
        try {
          await Zt(s, t);
        } catch (o) {
          a.logAction(n, a.LOG_ERROR, "WireMessage.decode()", j(o)), i = o;
        }
        return s.expandFields(), {
          decoded: s,
          err: i
        };
      }
      async decode(t, n) {
        const { decoded: s } = await this.decodeWithErr(t, n);
        return s;
      }
      toString() {
        return d(this, "WireMessage");
      }
    }, ke = Hi, _o = 9;
    function bo(e) {
      return e.every(function(t) {
        return !t.id;
      });
    }
    var vo = class {
      constructor(e, t, n) {
        this._annotations = null;
        var s, i;
        a.logAction(e.logger, a.LOG_MINOR, "RestChannel()", "started; name = " + t), this.name = t, this.client = e, this.presence = new fo(this), this.channelOptions = vt((s = e._Crypto) != null ? s : null, this.logger, n), (i = e.options.plugins) != null && i.Push && (this._push = new e.options.plugins.Push.PushChannel(this)), e._Annotations && (this._annotations = new e._Annotations.RestAnnotations(this)), e._liveObjectsPlugin && (this._object = new e._liveObjectsPlugin.RestObject(this));
      }
      get annotations() {
        return this._annotations || Z("Annotations"), this._annotations;
      }
      get push() {
        return this._push || Z("Push"), this._push;
      }
      get object() {
        return this._object || Z("LiveObjects"), this._object;
      }
      get logger() {
        return this.client.logger;
      }
      setOptions(e) {
        var t;
        this.channelOptions = vt((t = this.client._Crypto) != null ? t : null, this.logger, e);
      }
      async history(e) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestChannel.history()", "channel = " + this.name), this.client.rest.channelMixin.history(this, e ?? null);
      }
      async publish(...e) {
        const t = e[0], n = e[1];
        let s, i;
        if (typeof t == "string" || t === null)
          s = [ke.fromValues({
            name: t,
            data: n
          })], i = e[2];
        else if (oe(t))
          s = [ke.fromValues(t)], i = e[1];
        else if (Array.isArray(t))
          s = ke.fromValuesArray(t), i = e[1];
        else throw new _({
          message: "publish() expects an event name (string or null), a message object, or an array of message objects as its first argument",
          code: 40013,
          statusCode: 400,
          remediation: "Call publish(name, data) for a single event, or publish(message | message[]) with a Message-shaped object."
        });
        i || (i = {});
        const o = this.client, l = o.options, u = l.useBinaryProtocol ? "msgpack" : "json", g = o.options.idempotentRestPublishing, p = E.defaultPostHeaders(o.options);
        if (A(p, l.headers), g && bo(s)) {
          const v = await Dn(_o);
          s.forEach(function(I, T) {
            I.id = v + ":" + T.toString();
          });
        }
        const w = await qi(s, this.channelOptions), C = Gi(w), O = l.maxMessageSize;
        if (C > O) throw new _({
          message: `Maximum size of messages that can be published at once exceeded (was ${C} bytes, against a limit of ${O} bytes)`,
          code: 40009,
          statusCode: 400,
          remediation: "Split the publish into multiple calls so each batch is under the limit. If you set ClientOptions.maxMessageSize yourself, raise it. It can only restrict below your account limit, not above it. To lift the account limit, contact Ably support."
        });
        return this._publish(ji(w, o._MsgPack, u), p, i);
      }
      async _publish(e, t, n) {
        const s = this.client, i = s.options.useBinaryProtocol ? "msgpack" : "json", { body: o, unpacked: l } = await H.post(s, s.rest.channelMixin.basePath(this) + "/messages", e, t, n, null, !0), u = (l ? o : X(o, s._MsgPack, i)) || {};
        return delete u.channel, delete u.messageId, u;
      }
      async status() {
        return this.client.rest.channelMixin.status(this);
      }
      async getMessage(e) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestChannel.getMessage()", "channel = " + this.name), this.client.rest.channelMixin.getMessage(this, e);
      }
      async updateMessage(e, t, n) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestChannel.updateMessage()", "channel = " + this.name), this.client.rest.channelMixin.updateDeleteMessage(this, "message.update", e, t, n);
      }
      async deleteMessage(e, t, n) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestChannel.deleteMessage()", "channel = " + this.name), this.client.rest.channelMixin.updateDeleteMessage(this, "message.delete", e, t, n);
      }
      async appendMessage(e, t, n) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestChannel.appendMessage()", "channel = " + this.name), this.client.rest.channelMixin.updateDeleteMessage(this, "message.append", e, t, n);
      }
      async getMessageVersions(e, t) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestChannel.getMessageVersions()", "channel = " + this.name), this.client.rest.channelMixin.getMessageVersions(this, e, t);
      }
    }, wo = vo, Co = class qr {
      constructor(t) {
        this.entries = t && t.entries || void 0, this.schema = t && t.schema || void 0, this.appId = t && t.appId || void 0, this.inProgress = t && t.inProgress || void 0, this.unit = t && t.unit || void 0, this.intervalId = t && t.intervalId || void 0;
      }
      static fromValues(t) {
        return new qr(t);
      }
    }, Wi = class {
      static basePath(e) {
        return "/channels/" + encodeURIComponent(e.name);
      }
      static history(e, t) {
        const n = e.client, s = n.options.useBinaryProtocol ? "msgpack" : "json", i = e.client.http.supportsLinkHeaders ? void 0 : s, o = E.defaultGetHeaders(n.options);
        return A(o, n.options.headers), new Oe(n, this.basePath(e) + "/messages", o, i, async function(l, u, g) {
          return Bi(g ? l : X(l, n._MsgPack, s), e);
        }).get(t);
      }
      static async status(e) {
        const t = e.client.options.useBinaryProtocol ? "msgpack" : "json", n = E.defaultPostHeaders(e.client.options);
        return (await H.get(e.client, this.basePath(e), n, {}, t, !0)).body;
      }
      static async getMessage(e, t) {
        const n = typeof t == "string" ? t : t.serial;
        if (!n) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), or its serial string. Newly constructed Message objects do not have a serial."
        });
        const s = e.client, i = s.options.useBinaryProtocol ? "msgpack" : "json", o = E.defaultGetHeaders(s.options);
        A(o, s.options.headers);
        const { body: l, unpacked: u } = await H.get(s, this.basePath(e) + "/messages/" + encodeURIComponent(n), o, {}, null, !0);
        return Di(u ? l : X(l, s._MsgPack, i), e);
      }
      static async updateDeleteMessage(e, t, n, s, i) {
        if (!n.serial) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), not a freshly constructed object."
        });
        const o = e.client, l = o.options.useBinaryProtocol ? "msgpack" : "json", u = E.defaultPostHeaders(o.options);
        A(u, o.options.headers);
        const g = ke.fromValues(n);
        g.action = t, g.version = s;
        const p = ji(await g.encode(e.channelOptions), o._MsgPack, l);
        let w = H.patch;
        const { body: C, unpacked: O } = await w(o, this.basePath(e) + "/messages/" + encodeURIComponent(n.serial), p, u, i || {}, null, !0);
        return (O ? C : X(C, o._MsgPack, l)) || { versionSerial: null };
      }
      static getMessageVersions(e, t, n) {
        const s = typeof t == "string" ? t : t.serial;
        if (!s) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), or its serial string. Newly constructed Message objects do not have a serial."
        });
        const i = e.client, o = i.options.useBinaryProtocol ? "msgpack" : "json", l = e.client.http.supportsLinkHeaders ? void 0 : o, u = E.defaultGetHeaders(i.options);
        return A(u, i.options.headers), new Oe(i, this.basePath(e) + "/messages/" + encodeURIComponent(s) + "/versions", u, l, async (g, p, w) => Bi(w ? g : X(g, i._MsgPack, o), e)).get(n || {});
      }
    }, Ro = class {
      static basePath(e) {
        return Wi.basePath(e.channel) + "/presence";
      }
      static async history(e, t) {
        const n = e.channel.client, s = n.options.useBinaryProtocol ? "msgpack" : "json", i = e.channel.client.http.supportsLinkHeaders ? void 0 : s, o = E.defaultGetHeaders(n.options);
        return A(o, n.options.headers), new Oe(n, this.basePath(e) + "/history", o, i, async (l, u, g) => Li(g ? l : X(l, n._MsgPack, s), e.channel)).get(t);
      }
    }, Fi = class {
      constructor(e) {
        this.channelMixin = Wi, this.presenceMixin = Ro, this.Resource = H, this.PaginatedResource = Oe, this.DeviceDetails = z, this.PushChannelSubscription = us, this.client = e, this.channels = new Oo(this.client), this.push = new lo(this.client);
      }
      async stats(e) {
        const t = E.defaultGetHeaders(this.client.options), n = this.client.options.useBinaryProtocol ? "msgpack" : "json", s = this.client.http.supportsLinkHeaders ? void 0 : n;
        return A(t, this.client.options.headers), new Oe(this.client, "/stats", t, s, async (i, o, l) => {
          const u = l ? i : X(i, this.client._MsgPack, n);
          for (let g = 0; g < u.length; g++) u[g] = Co.fromValues(u[g]);
          return u;
        }).get(e);
      }
      async time(e) {
        const t = E.defaultGetHeaders(this.client.options, { format: "json" });
        this.client.options.headers && A(t, this.client.options.headers);
        const n = (u) => this.client.baseUri(u) + "/time";
        let { error: s, body: i, unpacked: o } = await this.client.http.do(V.Get, n, t, null, e);
        if (s) throw s;
        o || (i = JSON.parse(i));
        const l = i[0];
        if (!l) throw new _("Internal error (unexpected result type from GET /time)", 5e4, 500);
        return this.client.serverTimeOffset = l - m.Config.now(), l;
      }
      async request(e, t, n, s, i, o) {
        var l;
        const [u, g, p] = this.client.options.useBinaryProtocol ? (this.client._MsgPack || Z("MsgPack"), [
          this.client._MsgPack.encode,
          this.client._MsgPack.decode,
          "msgpack"
        ]) : [
          JSON.stringify,
          JSON.parse,
          "json"
        ], w = this.client.http.supportsLinkHeaders ? void 0 : p;
        s = s || {};
        const C = e.toLowerCase(), O = C == "get" ? E.defaultGetHeaders(this.client.options, {
          format: p,
          protocolVersion: n
        }) : E.defaultPostHeaders(this.client.options, {
          format: p,
          protocolVersion: n
        });
        typeof i != "string" && (i = (l = u(i)) != null ? l : null), A(O, this.client.options.headers), o && A(O, o);
        const v = new Oe(this.client, t, O, w, async function(I, T, L) {
          return In(L ? I : g(I));
        }, !0);
        if (!m.Http.methods.includes(C)) throw new _({
          message: "Unsupported method " + C,
          code: 40500,
          statusCode: 405,
          remediation: `Use one of: ${m.Http.methods.join(", ")}.`
        });
        return m.Http.methodsWithBody.includes(C) ? v[C](s, i) : v[C](s);
      }
      async batchPublish(e) {
        let t, n;
        Array.isArray(e) ? (t = e, n = !1) : (t = [e], n = !0);
        const s = this.client.options.useBinaryProtocol ? "msgpack" : "json", i = E.defaultPostHeaders(this.client.options);
        this.client.options.headers && A(i, this.client.options.headers);
        const o = ce(t, this.client._MsgPack, s), l = await H.post(this.client, "/messages", o, i, {}, null, !0), u = l.unpacked ? l.body : X(l.body, this.client._MsgPack, s);
        return n ? u[0] : u;
      }
      async batchPresence(e) {
        const t = this.client.options.useBinaryProtocol ? "msgpack" : "json", n = E.defaultGetHeaders(this.client.options);
        this.client.options.headers && A(n, this.client.options.headers);
        const s = e.join(","), i = await H.get(this.client, "/presence", n, { channels: s }, null, !0);
        return i.unpacked ? i.body : X(i.body, this.client._MsgPack, t);
      }
      async revokeTokens(e, t) {
        if (ts(this.client.options)) throw new _({
          message: "Cannot revoke tokens when using token auth",
          code: 40162,
          statusCode: 401,
          remediation: "Token revocation must use basic auth, so construct a separate Ably.Rest client with ClientOptions.key (the API key that issued the tokens) just for this call. Revocable tokens must have been enabled on the key in the Ably dashboard before the tokens were issued, otherwise there is nothing to revoke."
        });
        const n = this.client.options.keyName;
        let s = t ?? {};
        const i = K({ targets: e.map((p) => `${p.type}:${p.value}`) }, s), o = this.client.options.useBinaryProtocol ? "msgpack" : "json", l = E.defaultPostHeaders(this.client.options);
        this.client.options.headers && A(l, this.client.options.headers);
        const u = ce(i, this.client._MsgPack, o), g = await H.post(this.client, `/keys/${n}/revokeTokens`, u, l, {}, null, !0);
        return g.unpacked ? g.body : X(g.body, this.client._MsgPack, o);
      }
    }, Oo = class {
      constructor(e) {
        this.client = e, this.all = /* @__PURE__ */ Object.create(null);
      }
      get(e, t) {
        e = String(e);
        let n = this.all[e];
        return n ? t && n.setOptions(t) : this.all[e] = n = new wo(this.client, e, t), n;
      }
      release(e) {
        delete this.all[String(e)];
      }
    }, Ao = class extends P {
      constructor(e) {
        super(E.objectifyOptions(e, !1, "BaseRest", a.defaultLogger, { Rest: Fi }));
      }
    }, Vi = { Rest: Fi }, zi = class extends ke {
      static async fromEncoded(e, t) {
        return Ui(a.defaultLogger, m.Crypto, e, t);
      }
      static async fromEncodedArray(e, t) {
        return yo(a.defaultLogger, m.Crypto, e, t);
      }
      static fromValues(e) {
        return ke.fromValues(e);
      }
    }, $i = class extends xe {
      static async fromEncoded(e, t) {
        return Ei(a.defaultLogger, m.Crypto, e, t);
      }
      static async fromEncodedArray(e, t) {
        return ho(a.defaultLogger, m.Crypto, e, t);
      }
      static fromValues(e) {
        return xe.fromValues(e);
      }
    }, Ji = ["annotation.create", "annotation.delete"];
    async function Ki(e, t, n) {
      return Tt.fromValues(t).decode(n || {}, e);
    }
    async function So(e, t, n) {
      return Promise.all(t.map(function(s) {
        return Ki(e, s, n);
      }));
    }
    async function To(e, t) {
      return Tt.fromValues(e).decode(t.channelOptions, t.logger);
    }
    async function ko(e, t) {
      return Promise.all(e.map(function(n) {
        return To(n, t);
      }));
    }
    var Qi = class Ci extends y {
      async encode(t) {
        return Xt(Object.assign(new Tt(), this, { action: Ji.indexOf(this.action || "annotation.create") }), t);
      }
      static fromValues(t) {
        return Object.assign(new Ci(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => Ci.fromValues(n));
      }
      toString() {
        return d(this, "Annotation");
      }
    }, Tt = class Ri extends y {
      toJSON(...t) {
        return en.call(this, ...t);
      }
      static fromValues(t) {
        return Object.assign(new Ri(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => Ri.fromValues(n));
      }
      async decode(t, n) {
        const s = Object.assign(new Qi(), ge(K({}, this), { action: Ji[this.action] }));
        try {
          await Zt(s, t);
        } catch (i) {
          a.logAction(n, a.LOG_ERROR, "WireAnnotation.decode()", j(i));
        }
        return s;
      }
      toString() {
        return d(this, "WireAnnotation");
      }
    }, kt = Qi, Xi = class extends kt {
      static async fromEncoded(e, t) {
        return Ki(a.defaultLogger, e, t);
      }
      static async fromEncodedArray(e, t) {
        return So(a.defaultLogger, e, t);
      }
      static fromValues(e) {
        return kt.fromValues(e);
      }
    };
    function Yi(e, t) {
      let n;
      switch (typeof e) {
        case "string":
          n = e;
          break;
        case "object":
          n = e.serial;
      }
      if (!n || typeof n != "string") throw new _({
        message: "The message argument of annotations." + t + "() must be either a Message or other object carrying a non-empty string `serial` property, or a message serial as a non-empty string",
        code: 40003,
        statusCode: 400,
        remediation: "Pass the Message received from a subscribe callback (which carries .serial), or its serial string. Newly constructed Message objects do not have a serial."
      });
      return n;
    }
    function Zi(e, t, n) {
      const s = Yi(e, n);
      if (!t || typeof t != "object") throw new _({
        message: "Second argument of annotations." + n + "() must be an object (the intended annotation to publish)",
        code: 40003,
        statusCode: 400,
        remediation: 'Pass an Annotation-shaped object as the second argument, e.g. { type: "reaction:unique.v1", name: "👍" }.'
      });
      const i = kt.fromValues(t);
      if (!i.type || typeof i.type != "string") throw new _({
        message: "The annotation argument of annotations." + n + "() must include a non-empty string `type`",
        code: 40003,
        statusCode: 400,
        remediation: 'Set type on the annotation object, e.g. { type: "reaction:unique.v1", name: "👍" }. Other fields are optional.'
      });
      return i.messageSerial = s, i.action || (i.action = "annotation.create"), i;
    }
    function er(e, t) {
      return e.client.rest.channelMixin.basePath(e) + "/messages/" + encodeURIComponent(t) + "/annotations";
    }
    var Io = class {
      constructor(e) {
        this.channel = e;
      }
      async publish(e, t) {
        return this._publish(e, t, "publish");
      }
      async _publish(e, t, n) {
        const s = Zi(e, t, n), i = await s.encode(this.channel.channelOptions), o = this.channel.client, l = o.options.useBinaryProtocol ? "msgpack" : "json", u = E.defaultPostHeaders(o.options), g = {};
        A(u, o.options.headers);
        const p = ce([i], o._MsgPack, l);
        await H.post(o, er(this.channel, s.messageSerial), p, u, g, null, !0);
      }
      async delete(e, t) {
        return t.action = "annotation.delete", this._publish(e, t, "delete");
      }
      async get(e, t) {
        const n = this.channel.client, s = Yi(e, "get"), i = n.options.useBinaryProtocol ? "msgpack" : "json", o = n.http.supportsLinkHeaders ? void 0 : i, l = E.defaultGetHeaders(n.options);
        return A(l, n.options.headers), new Oe(n, er(this.channel, s), l, o, async (u, g, p) => ko(p ? u : X(u, n._MsgPack, i), this.channel)).get(t);
      }
    }, ds = Io, Mo = ce;
    function gs(e) {
      const t = [];
      if (e) for (let n = 0; n < e.length; n++) t.push(e[n].toString());
      return "[ " + t.join(", ") + " ]";
    }
    function Po(e, t, n, s, i, o) {
      return Ys(X(e, t, o), n, s, i);
    }
    function Ys(e, t, n, s) {
      let i;
      e.error && (i = _.fromWireValues(e.error));
      let o;
      e.messages && (o = nn.fromValuesArray(e.messages));
      let l;
      t && e.presence && (l = t.WirePresenceMessage.fromValuesArray(e.presence));
      let u;
      n && e.annotations && (u = n.WireAnnotation.fromValuesArray(e.annotations));
      let g;
      return s && e.state && (g = s.WireObjectMessage.fromValuesArray(e.state, Ue, Rt)), Object.assign(new ei(), ge(K({}, e), {
        presence: l,
        messages: o,
        annotations: u,
        state: g,
        error: i
      }));
    }
    function tr(e) {
      return (t) => {
        var n;
        return Ys(t, {
          PresenceMessage: xe,
          WirePresenceMessage: tn
        }, {
          Annotation: kt,
          WireAnnotation: Tt,
          RealtimeAnnotations: ni,
          RestAnnotations: ds
        }, (n = e?.LiveObjectsPlugin) != null ? n : null);
      };
    }
    function de(e) {
      return Object.assign(new ei(), e);
    }
    function Zs(e, t, n, s) {
      let i = "[ProtocolMessage";
      e.action !== void 0 && (i += "; action=" + is[e.action] || e.action);
      const o = [
        "id",
        "channel",
        "channelSerial",
        "connectionId",
        "count",
        "msgSerial",
        "timestamp"
      ];
      let l;
      for (let u = 0; u < o.length; u++)
        l = o[u], e[l] !== void 0 && (i += "; " + l + "=" + e[l]);
      if (e.messages && (i += "; messages=" + gs(nn.fromValuesArray(e.messages))), e.presence && t && (i += "; presence=" + gs(t.WirePresenceMessage.fromValuesArray(e.presence))), e.annotations && n && (i += "; annotations=" + gs(n.WireAnnotation.fromValuesArray(e.annotations))), e.state && s && (i += "; state=" + gs(s.WireObjectMessage.fromValuesArray(e.state, Ue, Rt))), e.error && (i += "; error=" + _.fromWireValues(e.error).toString()), e.auth && e.auth.accessToken && (i += "; token=" + e.auth.accessToken), e.flags && (i += "; flags=" + Le.filter(e.hasFlag).join(",")), e.params) {
        let u = "";
        jt(e.params, function(g) {
          u.length > 0 && (u += "; "), u += g + "=" + e.params[g];
        }), u.length > 0 && (i += "; params=[" + u + "]");
      }
      return i += "]", i;
    }
    var ei = class {
      constructor() {
        this.hasFlag = (e) => (this.flags & ne[e]) > 0;
      }
      setFlag(e) {
        return this.flags = this.flags | ne[e];
      }
      getMode() {
        return (this.flags || 0) & ne.MODE_ALL;
      }
      encodeModesToFlags(e) {
        e.forEach((t) => this.setFlag(t));
      }
      decodeModesFromFlags() {
        const e = [];
        return Qt.forEach((t) => {
          this.hasFlag(t) && e.push(t);
        }), e.length > 0 ? e : void 0;
      }
    }, Eo = ei, Lo = class {
      constructor(e, t, n, s, i) {
        this.previous = e, this.current = t, t === "attached" && (this.resumed = n, this.hasBacklog = s), i && (this.reason = i);
      }
    }, ti = Lo;
    function xo(e) {
      if (e && "params" in e && !oe(e.params)) return new _({
        message: "options.params must be an object",
        code: 4e4,
        statusCode: 400,
        remediation: 'Pass an object map of channel params (e.g. { rewind: "1" }), not a string or array.'
      });
      if (e && "modes" in e) {
        if (!Array.isArray(e.modes)) return new _({
          message: "options.modes must be an array",
          code: 4e4,
          statusCode: 400,
          remediation: 'Pass an array of ChannelMode strings, e.g. { modes: ["publish", "subscribe"] }.'
        });
        for (let t = 0; t < e.modes.length; t++) {
          const n = e.modes[t];
          if (!n || typeof n != "string" || !Qt.includes(String.prototype.toUpperCase.call(n))) return new _({
            message: "Invalid channel mode: " + n,
            code: 4e4,
            statusCode: 400,
            remediation: `Valid ChannelMode values are: ${Qt.join(", ").toLowerCase()}. The server grants only the modes the key or token capability permits and silently drops the rest on attach. After attach, channel.modes shows what was granted. If you have the Ably CLI installed, \`ably auth keys list\` shows your key's capabilities.`
          });
        }
      }
    }
    var No = class Oi extends Y {
      constructor(t, n, s) {
        var i, o;
        super(t.logger), this._annotations = null, this._mode = 0, this._silentSubscribeWarned = !1, this.retryCount = 0, this.history = function(...l) {
          return ee(l, 0), this._historyImpl(l[0]);
        }, this._historyImpl = async function(l) {
          a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name);
          const u = this.client.rest.channelMixin;
          if (l && l.untilAttach) {
            if (this.state !== "attached") throw new _({
              message: "option untilAttach requires the channel to be attached, was: " + this.state,
              code: 4e4,
              statusCode: 400,
              remediation: "Await channel.attach() before calling history({ untilAttach: true })."
            });
            if (!this.properties.attachSerial) throw new _({
              message: "untilAttach was specified and channel is attached, but attachSerial is not defined",
              code: 4e4,
              statusCode: 400,
              remediation: "Detach the channel (await channel.detach()) and re-attach (await channel.attach()) so the SDK records the attachSerial from the new attach, then retry history({ untilAttach: true })."
            });
            delete l.untilAttach, l.from_serial = this.properties.attachSerial;
          }
          return u.history(this, l);
        }, this.whenState = (l) => Y.prototype.whenState.call(this, l, this.state), a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel()", "started; name = " + n), this.name = n, this.channelOptions = vt((i = t._Crypto) != null ? i : null, this.logger, s), this.client = t, this._presence = t._RealtimePresence ? new t._RealtimePresence.RealtimePresence(this) : null, t._Annotations && (this._annotations = new t._Annotations.RealtimeAnnotations(this)), this.connectionManager = t.connection.connectionManager, this.state = "initialized", this.subscriptions = new Y(this.logger), this.syncChannelSerial = void 0, this.properties = {
          attachSerial: void 0,
          channelSerial: void 0
        }, this.setOptions(s), this.errorReason = null, this._decodingContext = {
          channelOptions: this.channelOptions,
          plugins: t.options.plugins || {},
          baseEncodedPreviousPayload: void 0
        }, this._lastPayload = {
          messageId: null,
          protocolMessageChannelSerial: null,
          decodeFailureRecoveryInProgress: null
        }, this._attachedReceived = new Y(this.logger), this.internalStateChanges = new Y(this.logger), (o = t.options.plugins) != null && o.Push && (this._push = new t.options.plugins.Push.PushChannel(this)), t._liveObjectsPlugin && (this._object = new t._liveObjectsPlugin.RealtimeObject(this));
      }
      get presence() {
        return this._presence || Z("RealtimePresence"), this._presence;
      }
      get annotations() {
        return this._annotations || Z("Annotations"), this._annotations;
      }
      get push() {
        return this._push || Z("Push"), this._push;
      }
      get object() {
        return this._object || Z("LiveObjects"), this._object;
      }
      emit(t, ...n) {
        super.emit(t, ...n), this.internalStateChanges.emit(t, ...n);
      }
      invalidStateError() {
        return new _({
          message: "Channel operation failed as channel state is " + this.state,
          code: 90001,
          statusCode: 400,
          cause: this.errorReason || void 0,
          remediation: 'Inspect channel.errorReason for the underlying cause. It may be null after a clean detach. From "failed" or "detached", call channel.attach() to recover. From "suspended" the SDK re-attaches automatically, or call channel.attach() to retry now.'
        });
      }
      static processListenerArgs(t) {
        return t = Array.prototype.slice.call(t), typeof t[0] == "function" && t.unshift(null), t;
      }
      async setOptions(t) {
        var n;
        const s = this.channelOptions, i = xo(t);
        if (i) throw i;
        if (this.channelOptions = vt((n = this.client._Crypto) != null ? n : null, this.logger, t), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(t, s))
          return this.attachImpl(), new Promise((o, l) => {
            const u = () => {
              this._attachedReceived.off(g), this.internalStateChanges.off(p);
            }, g = () => {
              u(), o();
            }, p = (w) => {
              u(), l(w.reason);
            };
            this._attachedReceived.once("attached", g), this.internalStateChanges.once(["detached", "failed"], p);
          });
      }
      _shouldReattachToSetOptions(t, n) {
        if (!(this.state === "attached" || this.state === "attaching")) return !1;
        if (t?.params) {
          const s = nr(t.params), i = nr(n.params);
          if (Object.keys(s).length !== Object.keys(i).length || !_t(i, s)) return !0;
        }
        return !!(t?.modes && (!n.modes || !jn(t.modes, n.modes)));
      }
      publish(...t) {
        return ee(t, 0), this._publishImpl(t);
      }
      async _publishImpl(t) {
        const n = t[0], s = t[1];
        let i, o;
        if (typeof n == "string" || n === null || n === void 0)
          i = [ke.fromValues({
            name: n,
            data: s
          })], o = t[2];
        else if (oe(n))
          i = [ke.fromValues(n)], o = t[1];
        else if (Array.isArray(n))
          i = ke.fromValuesArray(n), o = t[1];
        else throw new _({
          message: "The single-argument form of publish() expects a message object or an array of message objects",
          code: 40013,
          statusCode: 400,
          remediation: "Call publish(name, data) for a single event, or publish(message | message[]) with a Message-shaped object."
        });
        const l = this.client.options.maxMessageSize, u = await qi(i, this.channelOptions), g = Gi(u);
        if (g > l) throw new _({
          message: `Maximum size of messages that can be published at once exceeded (was ${g} bytes, against a limit of ${l} bytes)`,
          code: 40009,
          statusCode: 400,
          remediation: "Split the publish into multiple calls so each batch is under the limit. If a single message exceeds the limit, reduce its payload size. To lift the account limit, contact Ably support."
        });
        this.throwIfUnpublishableState(), a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + this.state + ", message count = " + u.length);
        const p = de({
          action: M.MESSAGE,
          channel: this.name,
          messages: u,
          params: o ? mt(o) : void 0
        });
        return this.sendAndAwaitAck(p);
      }
      throwIfUnpublishableState() {
        if (!this.connectionManager.activeState()) throw this.connectionManager.getError();
        if (this.state === "failed" || this.state === "suspended") throw this.invalidStateError();
      }
      onEvent(t) {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
        const n = this.subscriptions;
        for (let s = 0; s < t.length; s++) {
          const i = t[s];
          n.emit(i.name, i);
        }
      }
      async attach() {
        return this.state === "attached" ? null : new Promise((t, n) => {
          this._attach(!1, null, (s, i) => s ? n(s) : t(i));
        });
      }
      _attach(t, n, s) {
        s || (s = (o) => {
          o && a.logAction(this.logger, a.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + o.toString());
        });
        const i = this.connectionManager;
        if (!i.activeState()) {
          s(i.getError());
          return;
        }
        (this.state !== "attaching" || t) && this.requestState("attaching", n), this.internalStateChanges.once(function(o) {
          switch (this.event) {
            case "attached":
              s?.(null, o);
              break;
            case "detached":
            case "suspended":
            case "failed":
              s?.(o.reason || i.getError() || new _("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
              break;
            case "detaching":
              s?.(new _("Attach request superseded by a subsequent detach request", 9e4, 409));
          }
        });
      }
      attachImpl() {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
        const t = de({
          action: M.ATTACH,
          channel: this.name,
          params: this.channelOptions.params,
          channelSerial: this.properties.channelSerial
        });
        this.channelOptions.modes && t.encodeModesToFlags(qn(this.channelOptions.modes)), this._lastPayload.decodeFailureRecoveryInProgress && (t.channelSerial = this._lastPayload.protocolMessageChannelSerial), this.send(t);
      }
      async detach() {
        const t = this.connectionManager;
        switch (this.state) {
          case "suspended":
            this.notifyState("detached");
            return;
          case "detached":
            return;
          case "failed":
            throw new _({
              message: "Unable to detach as channel state is failed",
              code: 90001,
              statusCode: 400,
              remediation: "A failed channel is not attached, so there is nothing to detach. Inspect channel.errorReason for the cause. Call channel.attach() to recover the channel, or channels.release(name) to discard it."
            });
          default:
            if (t.state.state !== "connected") {
              this.notifyState("detached");
              return;
            }
            this.requestState("detaching");
          case "detaching":
            return new Promise((n, s) => {
              this.internalStateChanges.once(function(i) {
                switch (this.event) {
                  case "detached":
                    n();
                    break;
                  case "attached":
                  case "suspended":
                  case "failed":
                    s(i.reason || t.getError() || new _("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                    break;
                  case "attaching":
                    s(new _("Detach request superseded by a subsequent attach request", 9e4, 409));
                }
              });
            });
        }
      }
      detachImpl() {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
        const t = de({
          action: M.DETACH,
          channel: this.name
        });
        this.send(t);
      }
      subscribe(...t) {
        return ee(t, 2), this._subscribeImpl(t);
      }
      async _subscribeImpl(t) {
        const [n, s] = Oi.processListenerArgs(t);
        if (this.state === "failed") throw _.fromValues(this.invalidStateError());
        n && typeof n == "object" && !Array.isArray(n) ? this.client._FilteredSubscriptions.subscribeFilter(this, n, s) : this.subscriptions.on(n, s);
        let i = null;
        if (this.channelOptions.attachOnSubscribe !== !1 && (i = await this.attach()), this.state === "attached" && (this._mode & ne.SUBSCRIBE) === 0) {
          const o = new _({
            message: "The channel was attached without the subscribe mode, so the server will not deliver messages to this listener.",
            code: 90009,
            statusCode: 400,
            remediation: 'Include "subscribe" in the channel modes: realtime.channels.get(name, { modes: ["subscribe", ...] }), or call channel.setOptions({ modes: [...] }) on an existing channel to trigger a reattach. Alternatively, omit modes entirely and ensure your token/API-key capability permits subscribe on this channel. If you have the Ably CLI installed, `ably auth keys list` shows your key\'s capabilities.'
          });
          if (this.client.options.strictMode === !0) throw o;
          this._silentSubscribeWarned || (a.logActionNoStrip(this.logger, a.LOG_ERROR, "RealtimeChannel.subscribe()", o.message + "; remediation=" + o.remediation + a.silentFailureLogSuffix()), this._silentSubscribeWarned = !0);
        }
        return i;
      }
      unsubscribe(...t) {
        var n;
        const [s, i] = Oi.processListenerArgs(t);
        if (typeof s == "object" && !i || (n = this.filteredSubscriptions) != null && n.has(i)) {
          this.client._FilteredSubscriptions.getAndDeleteFilteredSubscriptions(this, s, i).forEach((o) => this.subscriptions.off(o));
          return;
        }
        this.subscriptions.off(s, i);
      }
      sync() {
        switch (this.state) {
          case "initialized":
          case "detaching":
          case "detached":
            throw new se({
              message: "Unable to sync to channel; not attached",
              code: 4e4
            });
        }
        const t = this.connectionManager;
        if (!t.activeState()) throw t.getError();
        const n = de({
          action: M.SYNC,
          channel: this.name
        });
        this.syncChannelSerial && (n.channelSerial = this.syncChannelSerial), t.send(n);
      }
      send(t) {
        this.connectionManager.send(t);
      }
      async sendAndAwaitAck(t) {
        return new Promise((n, s) => {
          this.connectionManager.send(t, this.client.options.queueMessages, (i, o) => {
            i ? s(i) : n(o);
          });
        });
      }
      async sendPresence(t) {
        const n = de({
          action: M.PRESENCE,
          channel: this.name,
          presence: t
        });
        await this.sendAndAwaitAck(n);
      }
      requeuePresenceFromConnectionQueue(t) {
        var n;
        if (this._presence && (this.state === "attached" || this.state === "attaching" || this.state === "suspended")) {
          const s = t.callback;
          return this._presence.requeuePresenceMessages((n = t.message.presence) != null ? n : [], (i) => s?.(i)), !0;
        }
        return !1;
      }
      async sendState(t) {
        const n = de({
          action: M.OBJECT,
          channel: this.name,
          state: t
        });
        return this.sendAndAwaitAck(n);
      }
      async processMessage(t) {
        (t.action === M.ATTACHED || t.action === M.MESSAGE || t.action === M.PRESENCE || t.action === M.OBJECT || t.action === M.ANNOTATION) && this.setChannelSerial(t.channelSerial);
        let n, s = !1;
        switch (t.action) {
          case M.ATTACHED: {
            const i = t.hasFlag("RESUMED");
            i || (this.properties.attachSerial = t.channelSerial), this._mode = t.getMode(), this._silentSubscribeWarned = !1, this.params = t.params || {};
            const o = t.decodeModesFromFlags();
            this.modes = o && Wt(o) || void 0;
            const l = t.hasFlag("HAS_PRESENCE"), u = t.hasFlag("HAS_BACKLOG"), g = t.hasFlag("HAS_OBJECTS");
            if (this._attachedReceived.emit("attached"), this.state === "attached") {
              i || this._presence && this._presence.onAttached(l), this._object && this._object.onAttached(g);
              const p = new ti(this.state, this.state, i, u, t.error);
              (!i || this.channelOptions.updateOnAttached) && this.emit("update", p);
            } else this.state === "detaching" ? this.checkPendingState() : this.notifyState("attached", t.error, i, l, u, g);
            break;
          }
          case M.DETACHED: {
            const i = t.error ? _.fromWireValues(t.error) : new _("Channel detached", 90001, 404);
            this.state === "detaching" ? this.notifyState("detached", i) : this.state === "attaching" ? this.notifyState("suspended", i) : (this.state === "attached" || this.state === "suspended") && this.requestState("attaching", i);
            break;
          }
          case M.SYNC:
            if (s = !0, n = this.syncChannelSerial = t.channelSerial, !t.presence) break;
          case M.PRESENCE: {
            if (!t.presence) break;
            Ot(t);
            const i = this.channelOptions;
            if (this._presence) {
              const o = await Promise.all(t.presence.map((l) => l.decode(i, this.logger)));
              this._presence.setPresence(o, s, n);
            }
            break;
          }
          case M.OBJECT:
          case M.OBJECT_SYNC: {
            if (!this._object || !t.state) return;
            Ot(t);
            const i = this.client.connection.connectionManager.getActiveTransportFormat(), o = t.state.map((l) => l.decode(this.client, i));
            t.action === M.OBJECT ? this._object.handleObjectMessages(o) : this._object.handleObjectSyncMessages(o, t.channelSerial);
            break;
          }
          case M.MESSAGE: {
            if (this.state !== "attached") {
              a.logAction(this.logger, a.LOG_MAJOR, "RealtimeChannel.processMessage()", 'Message "' + t.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
              return;
            }
            Ot(t);
            const i = t.messages, o = i[0], l = i[i.length - 1];
            if (o.extras && o.extras.delta && o.extras.delta.from !== this._lastPayload.messageId) {
              const g = 'Delta message decode failure - previous message not available for message "' + t.id + '" on this channel "' + this.name + '".';
              a.logAction(this.logger, a.LOG_ERROR, "RealtimeChannel.processMessage()", g), this._startDecodeFailureRecovery(new _(g, 40018, 400));
              break;
            }
            let u = [];
            for (let g = 0; g < i.length; g++) {
              const { decoded: p, err: w } = await i[g].decodeWithErr(this._decodingContext, this.logger);
              if (u[g] = p, w) switch (w.code) {
                case 40018:
                  this._startDecodeFailureRecovery(w);
                  return;
                case 40019:
                case 40021:
                  this.notifyState("failed", w);
                  return;
              }
            }
            this._lastPayload.messageId = l.id, this._lastPayload.protocolMessageChannelSerial = t.channelSerial, this.onEvent(u);
            break;
          }
          case M.ANNOTATION: {
            Ot(t);
            const i = this.channelOptions;
            if (this._annotations) {
              const o = await Promise.all((t.annotations || []).map((l) => l.decode(i, this.logger)));
              this._annotations._processIncoming(o);
            }
            break;
          }
          case M.ERROR: {
            const i = t.error;
            i && i.code == 80016 ? this.checkPendingState() : this.notifyState("failed", _.fromWireValues(i));
            break;
          }
          default:
            a.logAction(this.logger, a.LOG_MAJOR, "RealtimeChannel.processMessage()", "Protocol error: unrecognised message action (" + t.action + ")");
        }
      }
      _startDecodeFailureRecovery(t) {
        this._lastPayload.decodeFailureRecoveryInProgress || (a.logAction(this.logger, a.LOG_MAJOR, "RealtimeChannel.processMessage()", "Starting decode failure recovery process."), this._lastPayload.decodeFailureRecoveryInProgress = !0, this._attach(!0, t, () => {
          this._lastPayload.decodeFailureRecoveryInProgress = !1;
        }));
      }
      onAttached() {
        a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name);
      }
      notifyState(t, n, s, i, o, l) {
        if (a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + t), this.clearStateTimer(), ["detached", "failed"].includes(t) && (this.properties.channelSerial = null), t === this.state) return;
        this._presence && this._presence.actOnChannelState(t, i, n), this._object && this._object.actOnChannelState(t, l, n), t === "suspended" && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), n && (this.errorReason = n);
        const u = new ti(this.state, t, s, o, n), g = 'Channel state for channel "' + this.name + '"', p = t + (n ? "; reason: " + n : "");
        t === "failed" ? a.logAction(this.logger, a.LOG_ERROR, g, p) : a.logAction(this.logger, a.LOG_MAJOR, g, p), t !== "attaching" && t !== "suspended" && (this.retryCount = 0), t === "attached" && this.onAttached(), this.state = t, this.emit(t, u);
      }
      requestState(t, n) {
        a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + t), this.notifyState(t, n), this.checkPendingState();
      }
      checkPendingState() {
        if (!this.connectionManager.state.sendEvents) {
          a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state);
          return;
        }
        switch (a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state), this.state) {
          case "attaching":
            this.startStateTimerIfNotRunning(), this.attachImpl();
            break;
          case "detaching":
            this.startStateTimerIfNotRunning(), this.detachImpl();
            break;
          case "attached":
            this.sync();
        }
      }
      timeoutPendingState() {
        switch (this.state) {
          case "attaching": {
            const t = new _({
              message: "Channel attach timed out",
              code: 90007,
              statusCode: 408,
              remediation: "The channel is now suspended. The SDK retries the attach automatically while the connection is connected, and you can call channel.attach() to retry immediately. Inspect channel.errorReason if it keeps timing out."
            });
            this.notifyState("suspended", t);
            break;
          }
          case "detaching": {
            const t = new _({
              message: "Channel detach timed out",
              code: 90007,
              statusCode: 408,
              remediation: "The detach timed out and the channel is back in the attached state. Call channel.detach() again to retry. Inspect channel.errorReason if it keeps timing out."
            });
            this.notifyState("attached", t);
            break;
          }
          default:
            this.checkPendingState();
        }
      }
      startStateTimerIfNotRunning() {
        this.stateTimer || (this.stateTimer = m.Config.setTimeout(() => {
          a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), this.stateTimer = null, this.timeoutPendingState();
        }, this.client.options.timeouts.realtimeRequestTimeout));
      }
      clearStateTimer() {
        const t = this.stateTimer;
        t && (m.Config.clearTimeout(t), this.stateTimer = null);
      }
      startRetryTimer() {
        if (this.retryTimer) return;
        this.retryCount++;
        const t = it(this.client.options.timeouts.channelRetryTimeout, this.retryCount);
        this.retryTimer = m.Config.setTimeout(() => {
          this.state === "suspended" && this.connectionManager.state.sendEvents && (this.retryTimer = null, a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), this.requestState("attaching"));
        }, t);
      }
      cancelRetryTimer() {
        this.retryTimer && (m.Config.clearTimeout(this.retryTimer), this.retryTimer = null);
      }
      getReleaseErr() {
        const t = this.state;
        return t === "initialized" || t === "detached" || t === "failed" ? null : new _({
          message: "Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed). The current state is " + t,
          code: 90001,
          statusCode: 400,
          remediation: 'Call channel.detach() and wait for the channel to reach "detached" before calling channels.release(name).'
        });
      }
      setChannelSerial(t) {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.setChannelSerial()", "Updating channel serial; serial = " + t + "; previous = " + this.properties.channelSerial), t && (this.properties.channelSerial = t);
      }
      async status() {
        return this.client.rest.channelMixin.status(this);
      }
      async getMessage(t) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.getMessage()", "channel = " + this.name), this.client.rest.channelMixin.getMessage(this, t);
      }
      async updateMessage(t, n, s) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.updateMessage()", "channel = " + this.name), this.sendUpdate(t, "message.update", n, s);
      }
      async deleteMessage(t, n, s) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.deleteMessage()", "channel = " + this.name), this.sendUpdate(t, "message.delete", n, s);
      }
      async appendMessage(t, n, s) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.appendMessage()", "channel = " + this.name), this.sendUpdate(t, "message.append", n, s);
      }
      async sendUpdate(t, n, s, i) {
        var o;
        if (!t.serial) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), not a freshly constructed object."
        });
        this.throwIfUnpublishableState();
        const l = await ke.fromValues(ge(K({}, t), {
          action: n,
          version: s
        })).encode(this.channelOptions), u = de({
          action: M.MESSAGE,
          channel: this.name,
          messages: [l],
          params: i ? mt(i) : void 0
        });
        return { versionSerial: (o = (await this.sendAndAwaitAck(u)).serials[0]) != null ? o : null };
      }
      async getMessageVersions(t, n) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.getMessageVersions()", "channel = " + this.name), this.client.rest.channelMixin.getMessageVersions(this, t, n);
      }
      async ensureAttached() {
        switch (this.state) {
          case "attached":
          case "suspended":
            break;
          case "initialized":
          case "detached":
          case "detaching":
          case "attaching":
            await this.attach();
            break;
          default:
            throw _.fromValues(this.invalidStateError());
        }
      }
    };
    function nr(e) {
      const t = e || {}, { agent: n } = t;
      return Rn(t, ["agent"]);
    }
    var sn = No, Uo = class {
      constructor(e) {
        this.channel = e, this.logger = e.logger, this.subscriptions = new Y(this.logger);
      }
      async publish(e, t) {
        const n = this.channel.name, s = Zi(e, t, "publish"), i = await s.encode(this.channel.channelOptions);
        this.channel.throwIfUnpublishableState(), a.logAction(this.logger, a.LOG_MICRO, "RealtimeAnnotations.publish()", "channelName = " + n + ", sending annotation with messageSerial = " + s.messageSerial + ", type = " + s.type);
        const o = de({
          action: M.ANNOTATION,
          channel: n,
          annotations: [i]
        });
        await this.channel.sendAndAwaitAck(o);
      }
      async delete(e, t) {
        t.action = "annotation.delete", await this.publish(e, t);
      }
      async subscribe(...e) {
        const t = sn.processListenerArgs(e), n = t[0], s = t[1], i = this.channel;
        if (i.state === "failed") throw _.fromValues(i.invalidStateError());
        if (this.subscriptions.on(n, s), this.channel.channelOptions.attachOnSubscribe !== !1 && await i.attach(), this.channel.state === "attached" && (this.channel._mode & ne.ANNOTATION_SUBSCRIBE) === 0) {
          const o = new _({
            message: "You are trying to add an annotation listener, but you haven't requested the annotation_subscribe channel mode in ChannelOptions, so this won't do anything (we only deliver annotations to clients who have explicitly requested them)",
            code: 93001,
            statusCode: 400,
            remediation: 'Include "annotation_subscribe" in the channel modes: realtime.channels.get(name, { modes: ["annotation_subscribe", ...] }), or call channel.setOptions({ modes: [...] }) on an existing channel to trigger a reattach. Calling channels.get(name, { modes }) on an existing channel throws. The server only grants the mode if your key or token has the annotation-subscribe capability. Without it the attach succeeds but the server silently drops the mode and annotations are never delivered. `ably auth keys list` shows your key\'s capabilities.'
          });
          throw a.logActionNoStrip(this.logger, a.LOG_MAJOR, "RealtimeAnnotations.subscribe()", o.message + "; remediation=" + o.remediation), o;
        }
      }
      unsubscribe(...e) {
        const t = sn.processListenerArgs(e), n = t[0], s = t[1];
        this.subscriptions.off(n, s);
      }
      _processIncoming(e) {
        for (const t of e) this.subscriptions.emit(t.type || "", t);
      }
      async get(e, t) {
        return ds.prototype.get.call(this, e, t);
      }
    }, ni = Uo, lt = class vs extends Ao {
      constructor(t) {
        var n, s;
        if (!vs._MsgPack) throw new Error("Expected DefaultRest._MsgPack to have been set");
        super(E.objectifyOptions(t, !0, "Rest", a.defaultLogger, ge(K({}, Vi), {
          Crypto: (n = vs.Crypto) != null ? n : void 0,
          MsgPack: (s = vs._MsgPack) != null ? s : void 0,
          Annotations: {
            Annotation: kt,
            WireAnnotation: Tt,
            RealtimeAnnotations: ni,
            RestAnnotations: ds
          }
        })));
      }
      static get Crypto() {
        if (this._Crypto === null) throw new Error("Encryption not enabled; use ably.encryption.js instead");
        return this._Crypto;
      }
      static set Crypto(t) {
        this._Crypto = t;
      }
    };
    lt._Crypto = null, lt.Message = zi, lt.PresenceMessage = $i, lt.Annotation = Xi, lt._MsgPack = null, lt._Http = Ce;
    var si = lt, Do = class extends Y {
      constructor(e) {
        super(e), this.messages = [];
      }
      count() {
        return this.messages.length;
      }
      push(e) {
        this.messages.push(e);
      }
      shift() {
        return this.messages.shift();
      }
      last() {
        return this.messages[this.messages.length - 1];
      }
      copyAll() {
        return this.messages.slice();
      }
      append(e) {
        this.messages.push.apply(this.messages, e);
      }
      prepend(e) {
        this.messages.unshift.apply(this.messages, e);
      }
      completeMessages(e, t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "MessageQueue.completeMessages()", e == "all" ? "(all)" : "serial = " + e.serial + "; count = " + e.count), t = t || null;
        const s = this.messages;
        if (s.length === 0) throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
        let i = [];
        if (e === "all") i = s.splice(0);
        else {
          const o = s[0];
          if (o) {
            const l = o.message.msgSerial, u = e.serial + e.count;
            u > l && (i = s.splice(0, u - l));
          }
        }
        for (let o = 0; o < i.length; o++) {
          const l = i[o], u = n?.[o];
          l.callback(t, u);
        }
        s.length == 0 && this.emit("idle");
      }
      completeAllMessages(e) {
        this.completeMessages("all", e);
      }
      resetSendAttempted() {
        for (let e of this.messages) e.sendAttempted = !1;
      }
      clear() {
        a.logAction(this.logger, a.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), this.messages = [], this.emit("idle");
      }
    }, sr = Do, ir = class {
      constructor(e, t) {
        this.message = e, this.callback = t, this.merged = !1;
        const n = e.action;
        this.sendAttempted = !1, this.ackRequired = typeof n == "number" && [
          M.MESSAGE,
          M.PRESENCE,
          M.ANNOTATION,
          M.OBJECT
        ].includes(n);
      }
    }, Bo = class extends Y {
      constructor(e) {
        super(e.logger), this.transport = e, this.messageQueue = new sr(this.logger), e.on("ack", (t, n, s) => {
          this.onAck(t, n, s);
        }), e.on("nack", (t, n, s) => {
          this.onNack(t, n, s);
        });
      }
      onAck(e, t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "Protocol.onAck()", "serial = " + e + "; count = " + t), this.messageQueue.completeMessages({
          serial: e,
          count: t
        }, null, n);
      }
      onNack(e, t, n) {
        a.logAction(this.logger, a.LOG_ERROR, "Protocol.onNack()", "serial = " + e + "; count = " + t + "; err = " + j(n)), n || (n = new _("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages({
          serial: e,
          count: t
        }, n);
      }
      onceIdle(e) {
        const t = this.messageQueue;
        if (t.count() === 0) {
          e();
          return;
        }
        t.once("idle", e);
      }
      send(e) {
        e.ackRequired && this.messageQueue.push(e), this.logger.shouldLog(a.LOG_MICRO) && a.logActionNoStrip(this.logger, a.LOG_MICRO, "Protocol.send()", "sending msg; " + Zs(e.message, this.transport.connectionManager.realtime._RealtimePresence, this.transport.connectionManager.realtime._Annotations, this.transport.connectionManager.realtime._liveObjectsPlugin)), e.sendAttempted = !0, this.transport.send(e.message);
      }
      getTransport() {
        return this.transport;
      }
      getPendingMessages() {
        return this.messageQueue.copyAll();
      }
      clearPendingMessages() {
        return this.messageQueue.clear();
      }
      finish() {
        const e = this.transport;
        this.onceIdle(function() {
          e.disconnect();
        });
      }
    }, qo = Bo, jo = class {
      constructor(e, t, n, s) {
        this.previous = e, this.current = t, n && (this.retryIn = n), s && (this.reason = s);
      }
    }, fs = jo, Fe = {
      DISCONNECTED: 80003,
      SUSPENDED: 80002,
      FAILED: 8e4,
      CLOSING: 80017,
      CLOSED: 80017,
      UNKNOWN_CONNECTION_ERR: 50002,
      UNKNOWN_CHANNEL_ERR: 50001
    }, Go = {
      disconnected: () => _.fromValues({
        statusCode: 400,
        code: Fe.DISCONNECTED,
        message: "Connection to server temporarily unavailable"
      }),
      suspended: () => _.fromValues({
        statusCode: 400,
        code: Fe.SUSPENDED,
        message: "Connection to server unavailable"
      }),
      failed: () => _.fromValues({
        statusCode: 400,
        code: Fe.FAILED,
        message: "Connection failed or disconnected by server"
      }),
      closing: () => _.fromValues({
        statusCode: 400,
        code: Fe.CLOSING,
        message: "Connection closing"
      }),
      closed: () => _.fromValues({
        statusCode: 400,
        code: Fe.CLOSED,
        message: "Connection closed"
      }),
      unknownConnectionErr: () => _.fromValues({
        statusCode: 500,
        code: Fe.UNKNOWN_CONNECTION_ERR,
        message: "Internal connection error"
      }),
      unknownChannelErr: () => _.fromValues({
        statusCode: 500,
        code: Fe.UNKNOWN_CHANNEL_ERR,
        message: "Internal channel error"
      })
    };
    function Ho(e) {
      return !e.statusCode || !e.code || e.statusCode >= 500 ? !0 : Object.values(Fe).includes(e.code);
    }
    var ht = Go, Wo = de({ action: M.CLOSE }), Fo = de({ action: M.DISCONNECT }), Vo = class extends Y {
      constructor(e, t, n, s) {
        super(e.logger), s && (n.format = void 0, n.heartbeats = "true"), this.connectionManager = e, this.auth = t, this.params = n, this.timeouts = n.options.timeouts, this.format = n.format, this.isConnected = !1, this.isFinished = !1, this.isDisposed = !1, this.maxIdleInterval = null, this.idleTimer = null, this.lastActivity = null;
      }
      connect() {
      }
      close() {
        this.isConnected && this.requestClose(), this.finish("closed", ht.closed());
      }
      disconnect(e) {
        this.isConnected && this.requestDisconnect(), this.finish("disconnected", e || ht.disconnected());
      }
      fail(e) {
        this.isConnected && this.requestDisconnect(), this.finish("failed", e || ht.failed());
      }
      finish(e, t) {
        var n;
        this.isFinished || (this.isFinished = !0, this.isConnected = !1, this.maxIdleInterval = null, m.Config.clearTimeout((n = this.idleTimer) != null ? n : void 0), this.idleTimer = null, this.emit(e, t), this.dispose());
      }
      onProtocolMessage(e) {
        switch (this.logger.shouldLog(a.LOG_MICRO) && a.logActionNoStrip(this.logger, a.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + Zs(e, this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._liveObjectsPlugin) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), e.action) {
          case M.HEARTBEAT:
            a.logActionNoStrip(this.logger, a.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", e.id);
            break;
          case M.CONNECTED:
            this.onConnect(e), this.emit("connected", e.error, e.connectionId, e.connectionDetails, e);
            break;
          case M.CLOSED:
            this.onClose(e);
            break;
          case M.DISCONNECTED:
            this.onDisconnect(e);
            break;
          case M.ACK:
            this.emit("ack", e.msgSerial, e.count, e.res);
            break;
          case M.NACK:
            this.emit("nack", e.msgSerial, e.count, e.error);
            break;
          case M.SYNC:
            this.connectionManager.onChannelMessage(e, this);
            break;
          case M.PING:
            this.send(de(e.id ? {
              action: M.PONG,
              id: e.id
            } : { action: M.PONG }));
            break;
          case M.PONG:
            break;
          case M.ACTIVATE:
            break;
          case M.AUTH:
            ue(this.auth.authorize(), (t) => {
              t && a.logAction(this.logger, a.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + j(t));
            });
            break;
          case M.ERROR:
            if (a.logAction(this.logger, a.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + m.Config.inspect(e.error) + (e.channel ? ", channel: " + e.channel : "")), e.channel === void 0) {
              this.onFatalError(e);
              break;
            }
            this.connectionManager.onChannelMessage(e, this);
            break;
          default:
            this.connectionManager.onChannelMessage(e, this);
        }
      }
      onConnect(e) {
        if (this.isConnected = !0, !e.connectionDetails) throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");
        const t = e.connectionDetails.maxIdleInterval;
        t && (this.maxIdleInterval = t + this.timeouts.realtimeRequestTimeout, this.onActivity());
      }
      onDisconnect(e) {
        const t = e && e.error;
        a.logAction(this.logger, a.LOG_MINOR, "Transport.onDisconnect()", "err = " + j(t)), this.finish("disconnected", t);
      }
      onFatalError(e) {
        const t = e && e.error;
        a.logAction(this.logger, a.LOG_MINOR, "Transport.onFatalError()", "err = " + j(t)), this.finish("failed", t);
      }
      onClose(e) {
        const t = e && e.error;
        a.logAction(this.logger, a.LOG_MINOR, "Transport.onClose()", "err = " + j(t)), this.finish("closed", t);
      }
      requestClose() {
        a.logAction(this.logger, a.LOG_MINOR, "Transport.requestClose()", ""), this.send(Wo);
      }
      requestDisconnect() {
        a.logAction(this.logger, a.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(Fo);
      }
      ping(e) {
        const t = { action: M.HEARTBEAT };
        e && (t.id = e), this.send(de(t));
      }
      dispose() {
        a.logAction(this.logger, a.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = !0, this.off();
      }
      onActivity() {
        this.maxIdleInterval && (this.lastActivity = m.Config.now(), this.setIdleTimer(this.maxIdleInterval + 100));
      }
      setIdleTimer(e) {
        this.idleTimer || (this.idleTimer = m.Config.setTimeout(() => {
          this.onIdleTimerExpire();
        }, e));
      }
      onIdleTimerExpire() {
        if (!this.lastActivity || !this.maxIdleInterval) throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
        this.idleTimer = null;
        const e = m.Config.now() - this.lastActivity, t = this.maxIdleInterval - e;
        if (t <= 0) {
          const n = "No activity seen from realtime in " + e + "ms; assuming connection has dropped";
          a.logAction(this.logger, a.LOG_ERROR, "Transport.onIdleTimerExpire()", n), this.disconnect(new _(n, 80003, 408));
        } else this.setIdleTimer(t + 100);
      }
      static tryConnect(e, t, n, s, i) {
        const o = new e(t, n, s);
        let l;
        const u = function(p) {
          m.Config.clearTimeout(l), i({
            event: this.event,
            error: p
          });
        }, g = t.options.timeouts.realtimeRequestTimeout;
        return l = m.Config.setTimeout(() => {
          o.off([
            "preconnect",
            "disconnected",
            "failed"
          ]), o.dispose(), u.call({ event: "disconnected" }, new _("Timeout waiting for transport to indicate itself viable", 5e4, 500));
        }, g), o.on(["failed", "disconnected"], u), o.on("preconnect", function() {
          a.logAction(t.logger, a.LOG_MINOR, "Transport.tryConnect()", "viable transport " + o), m.Config.clearTimeout(l), o.off(["failed", "disconnected"], u), i(null, o);
        }), o.connect(), o;
      }
      static isAvailable() {
        throw new _("isAvailable not implemented for transport", 5e4, 500);
      }
    }, It = Vo, fe;
    ((e) => {
      e.WebSocket = "web_socket", e.Comet = "comet", e.XhrPolling = "xhr_polling";
    })(fe || (fe = {}));
    var zo = typeof global < "u" ? global : typeof window < "u" ? window : self, ii = () => {
      var e;
      return typeof m.WebStorage < "u" && ((e = m.WebStorage) == null ? void 0 : e.localSupported);
    }, rn = () => {
      var e;
      return typeof m.WebStorage < "u" && ((e = m.WebStorage) == null ? void 0 : e.sessionSupported);
    }, rr = function() {
    }, ri = "ably-transport-preference";
    function oi(e) {
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    }
    var $o = class {
      constructor(e, t, n, s) {
        this.options = e, this.host = t, this.mode = n, this.connectionKey = s, this.format = e.useBinaryProtocol ? "msgpack" : "json";
      }
      getConnectParams(e) {
        const t = e ? tt(e) : {}, n = this.options;
        switch (this.mode) {
          case "resume":
            t.resume = this.connectionKey;
            break;
          case "recover": {
            const s = oi(n.recover);
            s && (t.recover = s.connectionKey);
            break;
          }
        }
        return n.clientId !== void 0 && (t.clientId = n.clientId), n.echoMessages === !1 && (t.echo = "false"), this.format !== void 0 && (t.format = this.format), this.stream !== void 0 && (t.stream = this.stream), this.heartbeats !== void 0 && (t.heartbeats = this.heartbeats), t.v = E.protocolVersion, t.agent = Te(this.options), n.transportParams !== void 0 && A(t, n.transportParams), t;
      }
      toString() {
        let e = "[mode=" + this.mode;
        return this.host && (e += ",host=" + this.host), this.connectionKey && (e += ",connectionKey=" + this.connectionKey), this.format && (e += ",format=" + this.format), e += "]", e;
      }
    }, or = class jr extends Y {
      constructor(t, n) {
        super(t.logger), this.supportedTransports = {}, this.disconnectedRetryCount = 0, this.pendingChannelMessagesState = {
          isProcessing: !1,
          queue: []
        }, this.realtime = t, this.initTransports(), this.options = n;
        const s = n.timeouts, i = s.webSocketConnectTimeout + s.realtimeRequestTimeout;
        if (this.states = {
          initialized: {
            state: "initialized",
            terminal: !1,
            queueEvents: !0,
            sendEvents: !1,
            failState: "disconnected"
          },
          connecting: {
            state: "connecting",
            terminal: !1,
            queueEvents: !0,
            sendEvents: !1,
            retryDelay: i,
            failState: "disconnected"
          },
          connected: {
            state: "connected",
            terminal: !1,
            queueEvents: !1,
            sendEvents: !0,
            failState: "disconnected"
          },
          disconnected: {
            state: "disconnected",
            terminal: !1,
            queueEvents: !0,
            sendEvents: !1,
            retryDelay: s.disconnectedRetryTimeout,
            failState: "disconnected"
          },
          suspended: {
            state: "suspended",
            terminal: !1,
            queueEvents: !1,
            sendEvents: !1,
            retryDelay: s.suspendedRetryTimeout,
            failState: "suspended"
          },
          closing: {
            state: "closing",
            terminal: !1,
            queueEvents: !1,
            sendEvents: !1,
            retryDelay: s.realtimeRequestTimeout,
            failState: "closed"
          },
          closed: {
            state: "closed",
            terminal: !0,
            queueEvents: !1,
            sendEvents: !1,
            failState: "closed"
          },
          failed: {
            state: "failed",
            terminal: !0,
            queueEvents: !1,
            sendEvents: !1,
            failState: "failed"
          }
        }, this.state = this.states.initialized, this.errorReason = null, this.queuedMessages = new sr(this.logger), this.msgSerial = 0, this.connectionDetails = void 0, this.connectionId = void 0, this.connectionKey = void 0, this.connectionStateTtl = s.connectionStateTtl, this.maxIdleInterval = null, this.transports = En(n.transports || E.defaultTransports, this.supportedTransports), this.transportPreference = null, this.transports.includes(fe.WebSocket) && (this.webSocketTransportAvailable = !0), this.transports.includes(fe.XhrPolling) ? this.baseTransport = fe.XhrPolling : this.transports.includes(fe.Comet) && (this.baseTransport = fe.Comet), this.domains = E.getHosts(n), this.activeProtocol = null, this.host = null, this.lastAutoReconnectAttempt = null, this.forceFallbackHost = !1, this.connectCounter = 0, this.wsCheckResult = null, this.wsCheckPromise = null, this.webSocketSlowTimer = null, this.webSocketGiveUpTimer = null, this.abandonedWebSocket = !1, a.logAction(this.logger, a.LOG_MINOR, "Realtime.ConnectionManager()", "started"), a.logAction(this.logger, a.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (n.transports || E.defaultTransports) + "]"), a.logAction(this.logger, a.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + this.transports + "]"), a.logAction(this.logger, a.LOG_MICRO, "Realtime.ConnectionManager()", "http domains = [" + this.domains + "]"), !this.transports.length) {
          const l = "no requested transports available";
          throw a.logAction(this.logger, a.LOG_ERROR, "realtime.ConnectionManager()", l), new Error(l);
        }
        const o = m.Config.addEventListener;
        o && (rn() && typeof n.recover == "function" && o("beforeunload", this.persistConnection.bind(this)), n.closeOnUnload === !0 && o("beforeunload", () => {
          a.logAction(this.logger, a.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), this.requestState({ state: "closing" });
        }), o("online", () => {
          var l;
          this.state == this.states.disconnected || this.state == this.states.suspended ? (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection"), this.requestState({ state: "connecting" })) : this.state == this.states.connecting && ((l = this.pendingTransport) == null || l.off(), this.disconnectAllTransports(), this.startConnect());
        }), o("offline", () => {
          this.state == this.states.connected && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport"), this.disconnectAllTransports());
        }));
      }
      static supportedTransports(t) {
        const n = { supportedTransports: {} };
        return this.initTransports(t, n), n.supportedTransports;
      }
      static initTransports(t, n) {
        const s = K(K({}, m.Transports.bundledImplementations), t);
        [fe.WebSocket, ...m.Transports.order].forEach((i) => {
          const o = s[i];
          o && o.isAvailable() && (n.supportedTransports[i] = o);
        });
      }
      initTransports() {
        jr.initTransports(this.realtime._additionalTransportImplementations, this);
      }
      createTransportParams(t, n) {
        return new $o(this.options, t, n, this.connectionKey);
      }
      getTransportParams(t) {
        ((s) => {
          if (this.connectionKey) {
            s("resume");
            return;
          }
          if (typeof this.options.recover == "string") {
            s("recover");
            return;
          }
          const i = this.options.recover, o = this.getSessionRecoverData(), l = this.sessionRecoveryName();
          if (o && typeof i == "function") {
            a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data (recovery scope: " + l + ")"), i(o, (u) => {
              u ? (this.options.recover = o.recoveryKey, s("recover")) : s("clean");
            });
            return;
          }
          s("clean");
        })((s) => {
          const i = this.createTransportParams(null, s);
          if (s === "recover") {
            a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + this.options.recover);
            const o = oi(this.options.recover);
            o && (this.msgSerial = o.msgSerial);
          } else a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + i.toString());
          t(i);
        });
      }
      tryATransport(t, n, s) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + n), this.proposedTransport = It.tryConnect(this.supportedTransports[n], this, this.realtime.auth, t, (i, o) => {
          const l = this.state;
          if (l == this.states.closing || l == this.states.closed || l == this.states.failed) {
            o && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + l.state + " while we were attempting the transport; closing " + o), o.close()), s(!0);
            return;
          }
          if (i) {
            a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + n + " " + i.event + ", err: " + i.error.toString()), ve.isTokenErr(i.error) && !(this.errorReason && ve.isTokenErr(this.errorReason)) ? (this.errorReason = i.error, ue(this.realtime.auth._forceNewToken(null, null), (u) => {
              if (u) {
                this.actOnErrorFromAuthorize(u);
                return;
              }
              this.tryATransport(t, n, s);
            })) : i.event === "failed" ? (this.notifyState({
              state: "failed",
              error: i.error
            }), s(!0)) : i.event === "disconnected" && (Ho(i.error) ? s(!1) : (this.notifyState({
              state: this.states.connecting.failState,
              error: i.error
            }), s(!0)));
            return;
          }
          a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + n + "; setting pending"), this.setTransportPending(o, t), s(null, o);
        });
      }
      setTransportPending(t, n) {
        const s = n.mode;
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + t + "; mode = " + s), this.pendingTransport = t, this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), t.once("connected", (o, l, u) => {
          this.activateTransport(o, t, l, u), s === "recover" && this.options.recover && (delete this.options.recover, this.unpersistConnection());
        });
        const i = this;
        t.on([
          "disconnected",
          "closed",
          "failed"
        ], function(o) {
          i.deactivateTransport(t, this.event, o);
        }), this.emit("transport.pending", t);
      }
      activateTransport(t, n, s, i) {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + n), t && a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + t), s && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + s), i && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(i)), this.persistTransportPreference(n);
        const o = this.state, l = this.states.connected.state;
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + o.state), o.state == this.states.closing.state || o.state == this.states.closed.state || o.state == this.states.failed.state)
          return a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), n.disconnect(), !1;
        if (delete this.pendingTransport, !n.isConnected)
          return a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + n + " since it appears to no longer be connected"), !1;
        const u = this.activeProtocol;
        this.activeProtocol = new qo(n), this.host = n.params.host;
        const g = i.connectionKey;
        if (g && this.connectionKey != g && this.setConnection(s, i, !!t), this.onConnectionDetailsUpdate(i, n), m.Config.nextTick(() => {
          n.on("connected", (p, w, C) => {
            this.onConnectionDetailsUpdate(C, n), this.emit("update", new fs(l, l, null, p));
          });
        }), o.state === this.states.connected.state ? t && (this.errorReason = this.realtime.connection.errorReason = t, this.emit("update", new fs(l, l, null, t))) : (this.notifyState({
          state: "connected",
          error: t
        }), this.errorReason = this.realtime.connection.errorReason = t || null), this.emit("transport.active", n), u)
          if (u.messageQueue.count() > 0 && a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + u.transport.shortName + ", new one is " + n.shortName + ") finishing with " + u.messageQueue.count() + " messages still pending"), u.transport === n) {
            const p = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + n.shortName + "; stack = " + (/* @__PURE__ */ new Error()).stack;
            a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.activateTransport()", p);
          } else u.finish();
        return !0;
      }
      deactivateTransport(t, n, s) {
        const i = this.activeProtocol, o = i && i.getTransport() === t, l = t === this.pendingTransport, u = this.noTransportsScheduledForActivation();
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + t), a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + n + (o ? "; was active" : l ? "; was pending" : "") + (u ? "" : "; another transport is scheduled for activation")), s && s.message && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + s.message), o && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(i.getPendingMessages()), i.clearPendingMessages(), this.activeProtocol = this.host = null), this.emit("transport.inactive", t), o && u || o && n === "failed" || n === "closed" || i === null && l) {
          if (n === "disconnected" && s && s.statusCode > 500 && this.domains.length > 1) {
            this.unpersistTransportPreference(), this.forceFallbackHost = !0, this.notifyState({
              state: n,
              error: s,
              retryImmediately: !0
            });
            return;
          }
          const g = n === "failed" && ve.isTokenErr(s) ? "disconnected" : n;
          this.notifyState({
            state: g,
            error: s
          });
          return;
        }
      }
      noTransportsScheduledForActivation() {
        return !this.pendingTransport || !this.pendingTransport.isConnected;
      }
      setConnection(t, n, s) {
        const i = this.connectionId;
        (i && i !== t || !i && s) && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0, this.queuedMessages.resetSendAttempted()), this.connectionId !== t && a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), this.realtime.connection.id = this.connectionId = t, this.realtime.connection.key = this.connectionKey = n.connectionKey;
      }
      clearConnection() {
        this.realtime.connection.id = this.connectionId = void 0, this.realtime.connection.key = this.connectionKey = void 0, this.msgSerial = 0, this.queuedMessages.resetSendAttempted(), this.unpersistConnection();
      }
      createRecoveryKey() {
        return this.connectionKey ? JSON.stringify({
          connectionKey: this.connectionKey,
          msgSerial: this.msgSerial,
          channelSerials: this.realtime.channels.channelSerials()
        }) : null;
      }
      persistConnection() {
        if (rn()) {
          const t = this.createRecoveryKey();
          t && this.setSessionRecoverData({
            recoveryKey: t,
            disconnectedAt: m.Config.now(),
            location: zo.location,
            clientId: this.realtime.auth.clientId
          });
        }
      }
      unpersistConnection() {
        this.clearSessionRecoverData();
      }
      getActiveTransportFormat() {
        var t;
        return (t = this.activeProtocol) == null ? void 0 : t.getTransport().format;
      }
      getError() {
        if (this.errorReason) {
          const t = se.fromValues(this.errorReason);
          return t.cause = this.errorReason, t;
        }
        return this.getStateError();
      }
      getStateError() {
        var t, n;
        return (n = (t = ht)[this.state.state]) == null ? void 0 : n.call(t);
      }
      activeState() {
        return this.state.queueEvents || this.state.sendEvents;
      }
      enactStateChange(t) {
        const n = "Connection state", s = t.current + (t.reason ? "; reason: " + t.reason : "");
        t.current === "failed" ? a.logAction(this.logger, a.LOG_ERROR, n, s) : a.logAction(this.logger, a.LOG_MAJOR, n, s), a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + t.current + "; reason = " + (t.reason && t.reason.message));
        const i = this.state = this.states[t.current];
        t.reason && (this.errorReason = t.reason, this.realtime.connection.errorReason = t.reason), i.terminal && this.clearConnection(), this.emit("connectionstate", t);
      }
      startTransitionTimer(t) {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + t.state), this.transitionTimer && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), m.Config.clearTimeout(this.transitionTimer)), this.transitionTimer = m.Config.setTimeout(() => {
          this.transitionTimer && (this.transitionTimer = null, a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager " + t.state + " timer expired", "requesting new state: " + t.failState), this.notifyState({ state: t.failState }));
        }, t.retryDelay);
      }
      cancelTransitionTimer() {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (m.Config.clearTimeout(this.transitionTimer), this.transitionTimer = null);
      }
      startSuspendTimer() {
        this.suspendTimer || (this.suspendTimer = m.Config.setTimeout(() => {
          this.suspendTimer && (this.suspendTimer = null, a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"), this.states.connecting.failState = "suspended", this.notifyState({ state: "suspended" }));
        }, this.connectionStateTtl));
      }
      checkSuspendTimer(t) {
        t !== "disconnected" && t !== "suspended" && t !== "connecting" && this.cancelSuspendTimer();
      }
      cancelSuspendTimer() {
        this.states.connecting.failState = "disconnected", this.suspendTimer && (m.Config.clearTimeout(this.suspendTimer), this.suspendTimer = null);
      }
      startRetryTimer(t) {
        this.retryTimer = m.Config.setTimeout(() => {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), this.retryTimer = null, this.requestState({ state: "connecting" });
        }, t);
      }
      cancelRetryTimer() {
        this.retryTimer && (m.Config.clearTimeout(this.retryTimer), this.retryTimer = null);
      }
      startWebSocketSlowTimer() {
        this.webSocketSlowTimer = m.Config.setTimeout(() => {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket slow timer", "checking connectivity"), this.checkWsConnectivityOnce().then((t) => {
            t ? a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket slow timer", "ws connectivity check succeeded") : a.logAction(this.logger, a.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "ws connectivity check failed");
          }), this.realtime.http.checkConnectivity && ue(this.realtime.http.checkConnectivity(), (t, n) => {
            t || !n ? (a.logAction(this.logger, a.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "http connectivity check failed"), this.cancelWebSocketGiveUpTimer(), this.notifyState({
              state: "disconnected",
              error: new _("Unable to connect (network unreachable)", 80003, 404)
            })) : a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket slow timer", "http connectivity check succeeded");
          });
        }, this.options.timeouts.webSocketSlowTimeout);
      }
      cancelWebSocketSlowTimer() {
        this.webSocketSlowTimer && (m.Config.clearTimeout(this.webSocketSlowTimer), this.webSocketSlowTimer = null);
      }
      startWebSocketGiveUpTimer(t) {
        this.webSocketGiveUpTimer = m.Config.setTimeout(() => {
          this.wsCheckResult || (this.baseTransport ? (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket give up timer", "websocket connection took more than " + this.options.timeouts.webSocketConnectTimeout + "ms"), this.abandonWebSocketForBaseTransport(t)) : a.logAction(this.logger, a.LOG_MAJOR, "ConnectionManager WebSocket give up timer", "websocket connectivity appears to be unavailable but no other transports to try"));
        }, this.options.timeouts.webSocketConnectTimeout);
      }
      cancelWebSocketGiveUpTimer() {
        this.webSocketGiveUpTimer && (m.Config.clearTimeout(this.webSocketGiveUpTimer), this.webSocketGiveUpTimer = null);
      }
      notifyState(t) {
        var n, s;
        const i = t.state, o = i === "disconnected" && (this.state === this.states.connected || t.retryImmediately || this.state === this.states.connecting && t.error && ve.isTokenErr(t.error) && !(this.errorReason && ve.isTokenErr(this.errorReason)));
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + i + (o ? "; will retry connection immediately" : "")), i == this.state.state || (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), this.checkSuspendTimer(t.state), (i === "suspended" || i === "connected") && (this.disconnectedRetryCount = 0), this.state.terminal)) return;
        const l = this.states[t.state];
        let u = l.retryDelay;
        l.state === "disconnected" && (this.disconnectedRetryCount++, u = it(l.retryDelay, this.disconnectedRetryCount));
        const g = new fs(this.state.state, l.state, u, t.error || ((s = (n = ht)[l.state]) == null ? void 0 : s.call(n)));
        if (o) {
          const p = () => {
            this.state === this.states.disconnected && (this.lastAutoReconnectAttempt = m.Config.now(), this.requestState({ state: "connecting" }));
          }, w = this.lastAutoReconnectAttempt && m.Config.now() - this.lastAutoReconnectAttempt + 1;
          w && w < 1e3 ? (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + w + "ms ago, waiting another " + (1e3 - w) + "ms before trying again"), m.Config.setTimeout(p, 1e3 - w)) : m.Config.nextTick(p);
        } else (i === "disconnected" || i === "suspended") && this.startRetryTimer(u);
        (i === "disconnected" && !o || i === "suspended" || l.terminal) && m.Config.nextTick(() => {
          this.disconnectAllTransports();
        }), i == "connected" && !this.activeProtocol && a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange(g), this.state.sendEvents ? (this.queuedPresenceToChannelQueues(), this.sendQueuedMessages()) : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(i, g.reason), this.failQueuedMessages(g.reason));
      }
      requestState(t) {
        var n, s;
        const i = t.state;
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + i + "; current state: " + this.state.state), i == this.state.state || (this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(i), i == "connecting" && this.state.state == "connected") || i == "closing" && this.state.state == "closed") return;
        const o = this.states[i], l = new fs(this.state.state, o.state, null, t.error || ((s = (n = ht)[o.state]) == null ? void 0 : s.call(n)));
        this.enactStateChange(l), i == "connecting" && m.Config.nextTick(() => {
          this.startConnect();
        }), i == "closing" && this.closeImpl();
      }
      startConnect() {
        if (this.state !== this.states.connecting) {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
          return;
        }
        const t = this.realtime.auth, n = ++this.connectCounter, s = () => {
          this.getTransportParams((i) => {
            if (i.mode === "recover" && i.options.recover) {
              const o = oi(i.options.recover);
              o && this.realtime.channels.recoverChannels(o.channelSerials);
            }
            n === this.connectCounter && this.connectImpl(i, n);
          });
        };
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), t.method === "basic") s();
        else {
          const i = (o) => {
            n === this.connectCounter && (o ? this.actOnErrorFromAuthorize(o) : s());
          };
          this.errorReason && ve.isTokenErr(this.errorReason) ? ue(t._forceNewToken(null, null), i) : ue(t._ensureValidAuthCredentials(!1), i);
        }
      }
      connectImpl(t, n) {
        const s = this.state.state;
        if (s !== this.states.connecting.state) {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect, but was " + s);
          return;
        }
        const i = this.getTransportPreference();
        i && i === this.baseTransport && this.webSocketTransportAvailable && this.checkWsConnectivity().then(() => {
          this.unpersistTransportPreference(), this.state === this.states.connecting && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.connectImpl():", "web socket connectivity available, cancelling connection attempt with " + this.baseTransport), this.disconnectAllTransports(), this.connectWs(t, ++this.connectCounter));
        }).catch(rr), i && i === this.baseTransport || this.baseTransport && !this.webSocketTransportAvailable ? this.connectBase(t, n) : this.connectWs(t, n);
      }
      connectWs(t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.connectWs()"), this.wsCheckResult = null, this.wsCheckPromise = null, this.abandonedWebSocket = !1, this.startWebSocketSlowTimer(), this.startWebSocketGiveUpTimer(t), this.tryTransportWithFallbacks("web_socket", t, !0, n, () => this.wsCheckResult !== !1 && !this.abandonedWebSocket);
      }
      connectBase(t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.connectBase()"), this.baseTransport ? this.tryTransportWithFallbacks(this.baseTransport, t, !1, n, () => !0) : this.notifyState({
          state: "disconnected",
          error: new _("No transports left to try", 8e4, 404)
        });
      }
      abandonWebSocketForBaseTransport(t) {
        var n, s;
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.abandonWebSocketForBaseTransport()", "websocket connectivity appears to be unavailable; trying base transport"), this.abandonedWebSocket = !0, this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), (n = this.proposedTransport) == null || n.dispose(), (s = this.pendingTransport) == null || s.dispose(), this.connectBase(t, ++this.connectCounter);
      }
      checkWsAvailabilityBeforeGivingUp(t, n, s) {
        return !this.baseTransport || this.abandonedWebSocket || this.wsCheckResult ? !1 : (this.checkWsConnectivityOnce().then((i) => {
          n !== this.connectCounter || this.abandonedWebSocket || this.state !== this.states.connecting || (i ? s(new _("Unable to connect (and no more fallback hosts to try)", 80003, 404)) : this.abandonWebSocketForBaseTransport(t));
        }), !0);
      }
      checkWsConnectivityOnce() {
        return this.wsCheckPromise || (this.wsCheckPromise = this.checkWsConnectivity().then(() => (this.wsCheckResult = !0, !0), () => (this.wsCheckResult = !1, !1))), this.wsCheckPromise;
      }
      tryTransportWithFallbacks(t, n, s, i, o) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.tryTransportWithFallbacks()", t);
        const l = (C) => {
          this.notifyState({
            state: this.states.connecting.failState,
            error: C
          });
        }, u = this.domains.slice(), g = (C, O) => {
          if (i === this.connectCounter) {
            if (!o()) {
              O && O.dispose();
              return;
            }
            !O && !C && w();
          }
        }, p = u.shift();
        if (!p) {
          l(new _("Unable to connect (no available host)", 80003, 404));
          return;
        }
        n.host = p;
        const w = () => {
          if (!u.length) {
            if (s && this.checkWsAvailabilityBeforeGivingUp(n, i, l)) return;
            l(new _("Unable to connect (and no more fallback hosts to try)", 80003, 404));
            return;
          }
          if (!this.realtime.http.checkConnectivity) {
            l(new se("Internal error: Http.checkConnectivity not set", null, 500));
            return;
          }
          ue(this.realtime.http.checkConnectivity(), (C, O) => {
            if (i === this.connectCounter && o()) {
              if (C) {
                l(C);
                return;
              }
              if (!O) {
                l(new _("Unable to connect (network unreachable)", 80003, 404));
                return;
              }
              n.host = Be(u), this.tryATransport(n, t, g);
            }
          });
        };
        if (this.forceFallbackHost && u.length) {
          this.forceFallbackHost = !1, w();
          return;
        }
        this.tryATransport(n, t, g);
      }
      closeImpl() {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), this.pendingTransport && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + this.pendingTransport), this.pendingTransport.close()), this.activeProtocol && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()), this.notifyState({ state: "closed" });
      }
      onAuthUpdated(t, n) {
        var s;
        switch (this.state.state) {
          case "connected": {
            a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport");
            const i = (s = this.activeProtocol) == null ? void 0 : s.getTransport();
            i && i.onAuthUpdated && i.onAuthUpdated(t);
            const o = de({
              action: M.AUTH,
              auth: { accessToken: t.token }
            });
            this.send(o);
            const l = () => {
              this.off(u), n(null, t);
            }, u = (g) => {
              g.current === "failed" && (this.off(l), this.off(u), n(g.reason || this.getStateError()));
            };
            this.once("connectiondetails", l), this.on("connectionstate", u);
            break;
          }
          case "connecting":
            a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
          default: {
            a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
            const i = (o) => {
              switch (o.current) {
                case "connected":
                  this.off(i), n(null, t);
                  break;
                case "failed":
                case "closed":
                case "suspended":
                  this.off(i), n(o.reason || this.getStateError());
              }
            };
            this.on("connectionstate", i), this.state.state === "connecting" ? this.startConnect() : this.requestState({ state: "connecting" });
          }
        }
      }
      disconnectAllTransports() {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports"), this.connectCounter++, this.pendingTransport && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + this.pendingTransport), this.pendingTransport.disconnect()), delete this.pendingTransport, this.proposedTransport && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting proposed transport: " + this.pendingTransport), this.proposedTransport.disconnect()), delete this.pendingTransport, this.activeProtocol && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect());
      }
      send(t, n, s) {
        s = s || rr;
        const i = this.state;
        if (i.sendEvents) {
          a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.send()", "sending event"), this.sendImpl(new ir(t, s));
          return;
        }
        if (!(n && i.queueEvents)) {
          const o = "rejecting event, queueEvent was " + n + ", state was " + i.state;
          a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.send()", o), s(this.errorReason || new _(o, 9e4, 400));
          return;
        }
        this.logger.shouldLog(a.LOG_MICRO) && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + Zs(t, this.realtime._RealtimePresence, this.realtime._Annotations, this.realtime._liveObjectsPlugin)), this.queue(t, s);
      }
      sendImpl(t) {
        const n = t.message;
        t.ackRequired && !t.sendAttempted && (n.msgSerial = this.msgSerial++);
        try {
          this.activeProtocol.send(t);
        } catch (s) {
          a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + s.stack);
        }
      }
      queue(t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.queue()", "queueing event"), this.queuedMessages.push(new ir(t, n));
      }
      queuedPresenceToChannelQueues() {
        this.queuedMessages.messages = this.queuedMessages.messages.filter((t) => {
          if (t.message.action !== M.PRESENCE) return !0;
          const n = t.message.channel, s = n ? this.realtime.channels.all[n] : void 0;
          return !(s && s.requeuePresenceFromConnectionQueue(t));
        });
      }
      sendQueuedMessages() {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages");
        let t;
        for (; t = this.queuedMessages.shift(); ) this.sendImpl(t);
      }
      queuePendingMessages(t) {
        t && t.length && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + t.length + " pending messages"), this.queuedMessages.prepend(t));
      }
      failQueuedMessages(t) {
        const n = this.queuedMessages.count();
        n > 0 && (a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + n + " queued messages, err = " + j(t)), this.queuedMessages.completeAllMessages(t));
      }
      onChannelMessage(t, n) {
        this.pendingChannelMessagesState.queue.push({
          message: t,
          transport: n
        }), this.pendingChannelMessagesState.isProcessing || this.processNextPendingChannelMessage();
      }
      processNextPendingChannelMessage() {
        if (this.pendingChannelMessagesState.queue.length > 0) {
          this.pendingChannelMessagesState.isProcessing = !0;
          const t = this.pendingChannelMessagesState.queue.shift();
          this.processChannelMessage(t.message).catch((n) => {
            a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.processNextPendingChannelMessage() received error ", n);
          }).finally(() => {
            this.pendingChannelMessagesState.isProcessing = !1, this.processNextPendingChannelMessage();
          });
        }
      }
      async processChannelMessage(t) {
        await this.realtime.channels.processChannelMessage(t);
      }
      async ping() {
        var t;
        if (this.state.state !== "connected") throw new _({
          message: "Unable to ping service: not connected",
          code: 4e4,
          statusCode: 400,
          remediation: 'Wait for connection.state to be "connected" before calling ping(). Use await connection.whenState("connected") or connection.once("connected", …). From the "closed" or "failed" state, or "initialized" with autoConnect disabled, the SDK does not connect automatically, so call connection.connect() first.'
        });
        const n = (t = this.activeProtocol) == null ? void 0 : t.getTransport();
        if (!n) throw this.getStateError();
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.ping()", "transport = " + n);
        const s = m.Config.now(), i = st();
        return Gn(new Promise((o) => {
          const l = (u) => {
            u === i && (n.off("heartbeat", l), o(m.Config.now() - s));
          };
          n.on("heartbeat", l), n.ping(i);
        }), this.options.timeouts.realtimeRequestTimeout, "Timeout waiting for heartbeat response");
      }
      abort(t) {
        this.activeProtocol.getTransport().fail(t);
      }
      getTransportPreference() {
        var t, n;
        return this.transportPreference || ii() && ((n = (t = m.WebStorage) == null ? void 0 : t.get) == null ? void 0 : n.call(t, ri));
      }
      persistTransportPreference(t) {
        var n, s;
        this.transportPreference = t.shortName, ii() && ((s = (n = m.WebStorage) == null ? void 0 : n.set) == null || s.call(n, ri, t.shortName));
      }
      unpersistTransportPreference() {
        var t, n;
        this.transportPreference = null, ii() && ((n = (t = m.WebStorage) == null ? void 0 : t.remove) == null || n.call(t, ri));
      }
      actOnErrorFromAuthorize(t) {
        if (t.code === 40171) this.notifyState({
          state: "failed",
          error: t
        });
        else if (t.code === 40102) this.notifyState({
          state: "failed",
          error: t
        });
        else if (t.statusCode === Ge.Forbidden) {
          const n = "Client configured authentication provider returned 403, failing the connection";
          a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", n);
          const s = new _({
            message: n,
            code: 80019,
            statusCode: 403,
            cause: t,
            remediation: "Inspect cause for the underlying error, then fix your authUrl/authCallback so it does not respond 403 for a valid client."
          });
          this.notifyState({
            state: "failed",
            error: s
          });
        } else {
          const n = "Client configured authentication provider request failed";
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", n);
          const s = new _({
            message: n,
            code: 80019,
            statusCode: 401,
            cause: t,
            remediation: "Check network connectivity to your authUrl/authCallback endpoint and that it returns a valid token shape. Inspect cause for the underlying error."
          });
          this.notifyState({
            state: this.state.failState,
            error: s
          });
        }
      }
      onConnectionDetailsUpdate(t, n) {
        if (!t) return;
        this.connectionDetails = t, t.maxMessageSize && (this.options.maxMessageSize = t.maxMessageSize);
        const s = t.clientId;
        if (s) {
          const o = this.realtime.auth._uncheckedSetClientId(s);
          if (o) {
            a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", o.message), n.fail(o);
            return;
          }
        }
        const i = t.connectionStateTtl;
        i && (this.connectionStateTtl = i), this.maxIdleInterval = t.maxIdleInterval, this.emit("connectiondetails", t);
      }
      checkWsConnectivity() {
        const t = this.options.wsConnectivityCheckUrl || E.wsConnectivityCheckUrl, n = new m.Config.WebSocket(t);
        return new Promise((s, i) => {
          let o = !1;
          n.onopen = () => {
            o || (o = !0, s(), n.close());
          }, n.onclose = n.onerror = () => {
            o || (o = !0, i());
          };
        });
      }
      sessionRecoveryName() {
        return this.options.recoveryKeyStorageName || "ably-connection-recovery";
      }
      getSessionRecoverData() {
        var t, n;
        return rn() && ((n = (t = m.WebStorage) == null ? void 0 : t.getSession) == null ? void 0 : n.call(t, this.sessionRecoveryName()));
      }
      setSessionRecoverData(t) {
        var n, s;
        return rn() && ((s = (n = m.WebStorage) == null ? void 0 : n.setSession) == null ? void 0 : s.call(n, this.sessionRecoveryName(), t));
      }
      clearSessionRecoverData() {
        var t, n;
        return rn() && ((n = (t = m.WebStorage) == null ? void 0 : t.removeSession) == null ? void 0 : n.call(t, this.sessionRecoveryName()));
      }
    }, Jo = class extends Y {
      constructor(e, t) {
        super(e.logger), this.whenState = (n) => Y.prototype.whenState.call(this, n, this.state), this.ably = e, this.connectionManager = new or(e, t), this.state = this.connectionManager.state.state, this.key = void 0, this.id = void 0, this.errorReason = null, this.connectionManager.on("connectionstate", (n) => {
          const s = this.state = n.current;
          m.Config.nextTick(() => {
            this.emit(s, n);
          });
        }), this.connectionManager.on("update", (n) => {
          m.Config.nextTick(() => {
            this.emit("update", n);
          });
        });
      }
      connect() {
        a.logAction(this.logger, a.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({ state: "connecting" });
      }
      ping(...e) {
        return ee(e, 0), this._pingImpl();
      }
      async _pingImpl() {
        return a.logAction(this.logger, a.LOG_MINOR, "Connection.ping()", ""), this.connectionManager.ping();
      }
      close() {
        a.logAction(this.logger, a.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({ state: "closing" });
      }
      get recoveryKey() {
        return this.logger.deprecationWarning("The `Connection.recoveryKey` attribute has been replaced by the `Connection.createRecoveryKey()` method. Replace your usage of `recoveryKey` with the return value of `createRecoveryKey()`. `recoveryKey` will be removed in a future version."), this.createRecoveryKey();
      }
      createRecoveryKey() {
        return this.connectionManager.createRecoveryKey();
      }
    }, Ko = Jo, ar = class Gr extends P {
      constructor(t) {
        var n, s;
        if (super(E.objectifyOptions(t, !1, "BaseRealtime", a.defaultLogger)), a.logAction(this.logger, a.LOG_MINOR, "Realtime()", ""), typeof EdgeRuntime == "string") throw new _(`Ably.Realtime instance cannot be used in Vercel Edge runtime. If you are running Vercel Edge functions, please replace your "new Ably.Realtime()" with "new Ably.Rest()" and use Ably Rest API instead of the Realtime API. If you are server-rendering your application in the Vercel Edge runtime, please use the condition "if (typeof EdgeRuntime === 'string')" to prevent instantiating Ably.Realtime instance during SSR in the Vercel Edge runtime.`, 4e4, 400);
        this._additionalTransportImplementations = Gr.transportImplementationsFromPlugins(this.options.plugins), this._RealtimePresence = (s = (n = this.options.plugins) == null ? void 0 : n.RealtimePresence) != null ? s : null, this.connection = new Ko(this, this.options), this._channels = new Xo(this), this.options.autoConnect !== !1 && this.connect();
      }
      static transportImplementationsFromPlugins(t) {
        const n = {};
        return t?.WebSocketTransport && (n[fe.WebSocket] = t.WebSocketTransport), t?.XHRPolling && (n[fe.XhrPolling] = t.XHRPolling), n;
      }
      get channels() {
        return this._channels;
      }
      get clientId() {
        return this.auth.clientId;
      }
      connect() {
        a.logAction(this.logger, a.LOG_MINOR, "Realtime.connect()", ""), this.connection.connect();
      }
      close() {
        a.logAction(this.logger, a.LOG_MINOR, "Realtime.close()", ""), this.connection.close();
      }
    };
    ar.EventEmitter = Y;
    var Qo = ar, Xo = class extends Y {
      constructor(e) {
        super(e.logger), this.realtime = e, this.all = /* @__PURE__ */ Object.create(null), e.connection.connectionManager.on("transport.active", () => {
          this.onTransportActive();
        });
      }
      channelSerials() {
        let e = {};
        for (const t of De(this.all, !0)) {
          const n = this.all[t];
          n.properties.channelSerial && (e[t] = n.properties.channelSerial);
        }
        return e;
      }
      recoverChannels(e) {
        for (const t of De(e, !0)) {
          const n = this.get(t);
          n.properties.channelSerial = e[t];
        }
      }
      async processChannelMessage(e) {
        const t = e.channel;
        if (t === void 0) {
          a.logAction(this.logger, a.LOG_ERROR, "Channels.processChannelMessage()", "received event unspecified channel, action = " + e.action);
          return;
        }
        const n = this.all[t];
        if (!n) {
          a.logAction(this.logger, a.LOG_ERROR, "Channels.processChannelMessage()", "received event for non-existent channel: " + t);
          return;
        }
        await n.processMessage(e);
      }
      onTransportActive() {
        for (const e in this.all) {
          const t = this.all[e];
          t.state === "attaching" || t.state === "detaching" ? t.checkPendingState() : t.state === "suspended" ? t._attach(!1, null) : t.state === "attached" && t.requestState("attaching");
        }
      }
      propogateConnectionInterruption(e, t) {
        const n = {
          closing: "detached",
          closed: "detached",
          failed: "failed",
          suspended: "suspended"
        }, s = [
          "attaching",
          "attached",
          "detaching",
          "suspended"
        ], i = n[e];
        for (const o in this.all) {
          const l = this.all[o];
          s.includes(l.state) && l.notifyState(i, t);
        }
      }
      get(e, t) {
        e = String(e);
        let n = this.all[e];
        if (!n) n = this.all[e] = new sn(this.realtime, e, t);
        else if (t) {
          if (n._shouldReattachToSetOptions(t, n.channelOptions)) throw new _({
            message: "Channels.get() cannot be used to set channel options that would cause the channel to reattach: channels.get() returns the existing channel instance.",
            code: 4e4,
            statusCode: 400,
            remediation: "To change params or modes on an existing channel, call channel.setOptions(opts) on the channel returned by channels.get(name). setOptions() re-attaches the channel to apply the new options."
          });
          n.setOptions(t);
        }
        return n;
      }
      getDerived(e, t, n) {
        if (t.filter) {
          const s = bt(t.filter), i = je(e);
          e = `[filter=${s}${i.qualifierParam}]${i.channelName}`;
        }
        return this.get(e, n);
      }
      release(e) {
        e = String(e), a.logAction(this.logger, a.LOG_MAJOR, "Channels.release()", "Releasing references to channel " + e);
        const t = this.all[e];
        if (!t) return;
        const n = t.state;
        if (n === "initialized" || n === "detached" || n === "failed") {
          delete this.all[e];
          return;
        }
        t.detach().catch((s) => {
          a.logAction(this.logger, a.LOG_ERROR, "Channels.release()", "Error detaching channel " + e + " prior to release: " + j(s));
        }).then(() => {
          delete this.all[e];
        });
      }
    }, Yo = Qo;
    function Zo(e, t) {
      if (e.isSynthesized() || t.isSynthesized()) return e.timestamp >= t.timestamp;
      const n = e.parseId(), s = t.parseId();
      return n.msgSerial === s.msgSerial ? n.index > s.index : n.msgSerial > s.msgSerial;
    }
    var ai = class extends Y {
      constructor(e, t, n = Zo) {
        super(e.logger), this.presence = e, this.map = /* @__PURE__ */ Object.create(null), this.syncInProgress = !1, this.residualMembers = null, this.memberKey = t, this.newerThan = n;
      }
      get(e) {
        return this.map[e];
      }
      getClient(e) {
        const t = this.map, n = [];
        for (const s in t) {
          const i = t[s];
          i.clientId == e && i.action != "absent" && n.push(i);
        }
        return n;
      }
      list(e) {
        const t = this.map, n = e && e.clientId, s = e && e.connectionId, i = [];
        for (const o in t) {
          const l = t[o];
          l.action !== "absent" && (n && n != l.clientId || s && s != l.connectionId || i.push(l));
        }
        return i;
      }
      put(e) {
        (e.action === "enter" || e.action === "update") && (e = xe.fromValues(e), e.action = "present");
        const t = this.map, n = this.memberKey(e);
        this.residualMembers && delete this.residualMembers[n];
        const s = t[n];
        return s && !this.newerThan(e, s) ? !1 : (t[n] = e, !0);
      }
      values() {
        const e = this.map, t = [];
        for (const n in e) {
          const s = e[n];
          s.action != "absent" && t.push(s);
        }
        return t;
      }
      remove(e) {
        const t = this.map, n = this.memberKey(e), s = t[n];
        return s && !this.newerThan(e, s) ? !1 : (this.syncInProgress ? (e = xe.fromValues(e), e.action = "absent", t[n] = e) : delete t[n], !!s);
      }
      startSync() {
        const e = this.map, t = this.syncInProgress;
        a.logAction(this.logger, a.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), this.residualMembers = /* @__PURE__ */ Object.create(null);
        for (const n in e) e[n].action !== "absent" && (this.residualMembers[n] = e[n]);
        this.setInProgress(!0);
      }
      endSync() {
        const e = this.map, t = this.syncInProgress;
        if (a.logAction(this.logger, a.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), t) {
          for (const n in e) e[n].action === "absent" && delete e[n];
          this.presence._synthesizeLeaves(pt(this.residualMembers));
          for (const n in this.residualMembers) delete e[n];
          this.residualMembers = null, this.setInProgress(!1);
        }
        this.emit("sync");
      }
      async waitSync() {
        const e = this.syncInProgress;
        a.logAction(this.logger, a.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + e), e && await this.once("sync");
      }
      clear() {
        this.map = {}, this.setInProgress(!1), this.residualMembers = null;
      }
      setInProgress(e) {
        a.logAction(this.logger, a.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e), this.syncInProgress = e, this.presence.syncComplete = !e;
      }
    };
    function ea(e) {
      return e.channel.client.auth.clientId;
    }
    function ci(e) {
      const t = e.channel.client, n = t.auth.clientId;
      return (!n || n === "*") && t.connection.state === "connected";
    }
    var ta = class extends Y {
      constructor(e) {
        super(e.logger), this.channel = e, this.syncComplete = !1, this.members = new ai(this, (t) => t.memberKey), this._myMembers = new ai(this, (t) => t.clientId), this.subscriptions = new Y(this.logger), this.pendingPresence = [];
      }
      enter(...e) {
        return ee(e, 0), this._enterImpl(e[0]);
      }
      async _enterImpl(e) {
        if (ci(this)) throw new _({
          message: "clientId must be specified to enter a presence channel",
          code: 40012,
          statusCode: 400,
          remediation: "Set ClientOptions.clientId (or include clientId in the token) before calling presence.enter() again. To enter on behalf of another identity, use presence.enterClient(otherId, data), which requires the library to be instantiated with an API key or a token bound to a wildcard clientId."
        });
        return this._enterOrUpdateClient(void 0, void 0, e, "enter");
      }
      update(...e) {
        return ee(e, 0), this._updateImpl(e[0]);
      }
      async _updateImpl(e) {
        if (ci(this)) throw new _({
          message: "clientId must be specified to update presence data",
          code: 40012,
          statusCode: 400,
          remediation: "Set ClientOptions.clientId (or include clientId in the token) before calling presence.update() again. To update on behalf of another identity, use presence.updateClient(otherId, data), which requires the library to be instantiated with an API key or a token bound to a wildcard clientId."
        });
        return this._enterOrUpdateClient(void 0, void 0, e, "update");
      }
      async enterClient(e, t) {
        return this._enterOrUpdateClient(void 0, e, t, "enter");
      }
      async updateClient(e, t) {
        return this._enterOrUpdateClient(void 0, e, t, "update");
      }
      async _enterOrUpdateClient(e, t, n, s) {
        const i = this.channel;
        if (!i.connectionManager.activeState()) throw i.connectionManager.getError();
        a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence." + s + "Client()", "channel = " + i.name + ", id = " + e + ", client = " + (t || "(implicit) " + ea(this)));
        const o = xe.fromData(n);
        o.action = s, e && (o.id = e), t && (o.clientId = t);
        const l = await o.encode(i.channelOptions);
        switch (i.state) {
          case "attached":
            return i.sendPresence([l]);
          case "initialized":
          case "detached":
            i.attach();
          case "attaching":
            if (i.client.options.queueMessages) return new Promise((u, g) => {
              this.pendingPresence.push({
                presence: l,
                callback: (p) => p ? g(p) : u()
              });
            });
          default: {
            const u = new se("Unable to " + s + " presence channel while in " + i.state + " state", 90001);
            throw u.code = 90001, u;
          }
        }
      }
      leave(...e) {
        return ee(e, 0), this._leaveImpl(e[0]);
      }
      async _leaveImpl(e) {
        if (ci(this)) throw new _({
          message: "clientId must have been specified to enter or leave a presence channel",
          code: 40012,
          statusCode: 400,
          remediation: "To leave a member entered on behalf of another identity, call presence.leaveClient(otherId). A client that never had a clientId has no self-entered member to leave. leaveClient requires the library to be instantiated with an API key or a token bound to a wildcard clientId."
        });
        return this.leaveClient(void 0, e);
      }
      async leaveClient(e, t) {
        const n = this.channel;
        if (!n.connectionManager.activeState()) throw n.connectionManager.getError();
        a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
        const s = xe.fromData(t);
        s.action = "leave", e && (s.clientId = e);
        const i = await s.encode(n.channelOptions);
        switch (n.state) {
          case "attached":
            return n.sendPresence([i]);
          case "attaching":
            if (n.client.options.queueMessages) return new Promise((o, l) => {
              this.pendingPresence.push({
                presence: i,
                callback: (u) => u ? l(u) : o()
              });
            });
          default:
            throw new se({
              message: "Unable to leave presence channel while in " + n.state + " state",
              code: 90001,
              remediation: 'presence.leave() only works while the channel is attached. From "suspended" or "attaching", await channel.attach() and retry, since your presence membership is restored when the channel re-attaches. From "initialized", "detached", or "failed" there is nothing to leave: either no member was entered, or the SDK already cleared your membership when the channel left the attached state.'
            });
        }
      }
      get(...e) {
        return ee(e, 0), this._getImpl(e[0]);
      }
      async _getImpl(e) {
        const t = !e || ("waitForSync" in e ? e.waitForSync : !0);
        function n(i) {
          return e ? i.list(e) : i.values();
        }
        if (this.channel.state === "suspended") {
          if (t) throw _.fromValues({
            statusCode: 400,
            code: 91005,
            message: "Presence state is out of sync due to channel being in the SUSPENDED state",
            remediation: 'Wait for the channel to reach "attached" before calling presence.get(), or pass { waitForSync: false } to read the last known (stale) members.'
          });
          return n(this.members);
        }
        if (await this.channel.ensureAttached(), (this.channel._mode & ne.PRESENCE_SUBSCRIBE) === 0) {
          const i = new _({
            message: "The channel was attached without the presence_subscribe mode, so the server has not delivered any members to this client.",
            code: 91008,
            statusCode: 400,
            remediation: 'Include "presence_subscribe" in the channel modes: realtime.channels.get(name, { modes: ["presence_subscribe", ...] }), or call channel.setOptions({ modes: [...] }) on an existing channel to trigger a reattach. Alternatively, omit modes entirely and ensure your token/API-key capability permits subscribe on this channel. If you have the Ably CLI installed, `ably auth keys list` shows your key\'s capabilities.'
          });
          if (this.channel.client.options.strictMode === !0) throw i;
          a.logActionNoStrip(this.logger, a.LOG_ERROR, "RealtimePresence.get()", i.message + "; remediation=" + i.remediation + a.silentFailureLogSuffix());
        }
        const s = this.members;
        return t && await s.waitSync(), n(this.members);
      }
      history(...e) {
        return ee(e, 0), this._historyImpl(e[0]);
      }
      async _historyImpl(e) {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name);
        const t = this.channel.client.rest.presenceMixin;
        if (e && e.untilAttach)
          if (this.channel.state === "attached")
            delete e.untilAttach, e.from_serial = this.channel.properties.attachSerial;
          else throw new _({
            message: "option untilAttach requires the channel to be attached, was: " + this.channel.state,
            code: 4e4,
            statusCode: 400,
            remediation: "Await channel.attach() before calling presence.history({ untilAttach: true })."
          });
        return t.history(this, e);
      }
      setPresence(e, t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + n);
        let s, i, o;
        const l = this.members, u = this._myMembers, g = [], p = this.channel.connectionManager.connectionId;
        t && (n && (o = n.match(/^([\w-]+):(.*)$/)) && (s = o[1], i = o[2]), (!this.members.syncInProgress || this._syncId !== void 0 && s !== this._syncId) && this.members.startSync(), s !== void 0 && (this._syncId = s));
        for (let w of e) switch (w.action) {
          case "leave":
            l.remove(w) && g.push(w), w.connectionId === p && !w.isSynthesized() && u.remove(w);
            break;
          case "enter":
          case "present":
          case "update":
            l.put(w) && g.push(w), w.connectionId === p && u.put(w);
        }
        t && !i && (l.endSync(), this._syncId = void 0, this.channel.syncChannelSerial = null);
        for (let w = 0; w < g.length; w++) {
          const C = g[w];
          this.subscriptions.emit(C.action, C);
        }
      }
      onAttached(e) {
        a.logAction(this.logger, a.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()), this._ensureMyMembersPresent();
        const t = this.pendingPresence, n = t.length;
        if (n) {
          this.pendingPresence = [];
          const s = [], i = Kn.create(this.logger);
          a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence.onAttached", "sending " + n + " queued presence messages");
          for (let o = 0; o < n; o++) {
            const l = t[o];
            s.push(l.presence), i.push(l.callback);
          }
          this.channel.sendPresence(s).then(() => i()).catch((o) => i(o));
        }
      }
      actOnChannelState(e, t, n) {
        switch (e) {
          case "attached":
            this.onAttached(t);
            break;
          case "detached":
          case "failed":
            this._clearMyMembers(), this.members.clear();
          case "suspended":
            this.failPendingPresence(n);
        }
      }
      failPendingPresence(e) {
        if (this.pendingPresence.length) {
          a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + j(e));
          for (let t = 0; t < this.pendingPresence.length; t++) try {
            this.pendingPresence[t].callback(e);
          } catch {
          }
          this.pendingPresence = [];
        }
      }
      requeuePresenceMessages(e, t) {
        for (const n of e) this.pendingPresence.push({
          presence: n,
          callback: t
        });
      }
      _clearMyMembers() {
        this._myMembers.clear();
      }
      _ensureMyMembersPresent() {
        const e = this._myMembers, t = this.channel.connectionManager.connectionId;
        for (const n in e.map) {
          const s = e.map[n];
          a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + s.clientId + '" into the presence set');
          const i = s.connectionId === t ? s.id : void 0;
          this._enterOrUpdateClient(i, s.clientId, s.data, "enter").catch((o) => {
            const l = new _({
              message: "Presence auto re-enter failed",
              code: 91004,
              statusCode: 400,
              cause: o,
              remediation: 'Listen for the channel "update" event and call presence.enter(...) again once the channel is attached. For a member entered on behalf of another clientId, call presence.enterClient(clientId, data) instead.'
            });
            a.logAction(this.logger, a.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", "Presence auto re-enter failed; reason = " + j(o));
            const u = new ti(this.channel.state, this.channel.state, !0, !1, l);
            this.channel.emit("update", u);
          });
        }
      }
      _synthesizeLeaves(e) {
        const t = this.subscriptions;
        e.forEach(function(n) {
          const s = xe.fromValues({
            action: "leave",
            connectionId: n.connectionId,
            clientId: n.clientId,
            data: n.data,
            encoding: n.encoding,
            timestamp: m.Config.now()
          });
          t.emit("leave", s);
        });
      }
      subscribe(...e) {
        return ee(e, 2), this._subscribeImpl(e);
      }
      async _subscribeImpl(e) {
        const t = sn.processListenerArgs(e), n = t[0], s = t[1], i = this.channel;
        if (i.state === "failed") throw _.fromValues(i.invalidStateError());
        this.subscriptions.on(n, s), i.channelOptions.attachOnSubscribe !== !1 && await i.attach();
      }
      unsubscribe(...e) {
        const t = sn.processListenerArgs(e), n = t[0], s = t[1];
        this.subscriptions.off(n, s);
      }
    }, na = ta, sa = fe.WebSocket;
    function ia(e) {
      return !!e.on;
    }
    var ra = class extends It {
      constructor(e, t, n) {
        super(e, t, n), this.shortName = sa, n.heartbeats = m.Config.websocketHeartbeatsParam, this.wsHost = n.host;
      }
      static isAvailable() {
        return !!m.Config.WebSocket;
      }
      createWebSocket(e, t) {
        return this.uri = e + Pe(t), new m.Config.WebSocket(this.uri);
      }
      toString() {
        return "WebSocketTransport; uri=" + this.uri;
      }
      connect() {
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.connect()", "starting"), It.prototype.connect.call(this);
        const e = this, t = this.params, n = t.options, s = (n.tls ? "wss://" : "ws://") + Vt(this.wsHost) + ":" + E.getPort(n) + "/";
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + s), ue(this.auth.getAuthParams(), function(i, o) {
          if (e.isDisposed) return;
          let l = "";
          for (const g in o) l += " " + g + ": " + o[g] + ";";
          if (a.logAction(e.logger, a.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + l + " err: " + i), i) {
            e.disconnect(i);
            return;
          }
          const u = t.getConnectParams(o);
          try {
            const g = e.wsConnection = e.createWebSocket(s, u);
            g.binaryType = m.Config.binaryType, g.onopen = function() {
              e.onWsOpen();
            }, g.onclose = function(p) {
              e.onWsClose(p);
            }, g.onmessage = function(p) {
              e.onWsData(p.data);
            }, g.onerror = function(p) {
              e.onWsError(p);
            }, ia(g) && g.on("ping", function() {
              e.onActivity();
            });
          } catch (g) {
            a.logAction(e.logger, a.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (g.stack || g.message)), e.disconnect(g);
          }
        });
      }
      send(e) {
        const t = this.wsConnection;
        if (!t) {
          a.logAction(this.logger, a.LOG_ERROR, "WebSocketTransport.send()", "No socket connection");
          return;
        }
        try {
          t.send(Mo(e, this.connectionManager.realtime._MsgPack, this.params.format));
        } catch (n) {
          const s = "Exception from ws connection when trying to send: " + j(n);
          a.logAction(this.logger, a.LOG_ERROR, "WebSocketTransport.send()", s), this.finish("disconnected", new _(s, 5e4, 500));
        }
      }
      onWsData(e) {
        a.logAction(this.logger, a.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + e.length + "; type = " + typeof e);
        try {
          this.onProtocolMessage(Po(e, this.connectionManager.realtime._MsgPack, this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._liveObjectsPlugin, this.format));
        } catch (t) {
          a.logAction(this.logger, a.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + t.stack);
        }
      }
      onWsOpen() {
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket"), this.emit("preconnect");
      }
      onWsClose(e) {
        let t, n;
        if (typeof e == "object" ? (n = e.code, t = e.wasClean || n === 1e3) : (n = e, t = n == 1e3), delete this.wsConnection, t) {
          a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
          const s = new _("Websocket closed", 80003, 400);
          this.finish("disconnected", s);
        } else {
          const s = "Unclean disconnection of WebSocket ; code = " + n, i = new _(s, 80003, 400);
          a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.onWsClose()", s), this.finish("disconnected", i);
        }
        this.emit("disposed");
      }
      onWsError(e) {
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + e.message), m.Config.nextTick(() => {
          this.disconnect(Error(e.message));
        });
      }
      dispose() {
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = !0;
        const e = this.wsConnection;
        e && (e.onmessage = function() {
        }, delete this.wsConnection, m.Config.nextTick(() => {
          if (a.logAction(this.logger, a.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !e) throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
          e.close();
        }));
      }
    }, cr = ra, oa = class {
      static subscribeFilter(e, t, n) {
        const s = (i) => {
          var o, l, u, g, p, w;
          const C = {
            name: i.name,
            refTimeserial: (l = (o = i.extras) == null ? void 0 : o.ref) == null ? void 0 : l.timeserial,
            refType: (g = (u = i.extras) == null ? void 0 : u.ref) == null ? void 0 : g.type,
            isRef: !!((w = (p = i.extras) == null ? void 0 : p.ref) != null && w.timeserial),
            clientId: i.clientId
          };
          Object.entries(t).find(([O, v]) => v !== void 0 ? C[O] !== v : !1) || n(i);
        };
        this.addFilteredSubscription(e, t, n, s), e.subscriptions.on(s);
      }
      static addFilteredSubscription(e, t, n, s) {
        var i;
        if (e.filteredSubscriptions || (e.filteredSubscriptions = /* @__PURE__ */ new Map()), e.filteredSubscriptions.has(n)) {
          const o = e.filteredSubscriptions.get(n);
          o.set(t, ((i = o?.get(t)) == null ? void 0 : i.concat(s)) || [s]);
        } else e.filteredSubscriptions.set(n, /* @__PURE__ */ new Map([[t, [s]]]));
      }
      static getAndDeleteFilteredSubscriptions(e, t, n) {
        if (!e.filteredSubscriptions) return [];
        if (!n && t) return Array.from(e.filteredSubscriptions.entries()).map(([o, l]) => {
          var u;
          let g = l.get(t);
          return l.delete(t), l.size === 0 && ((u = e.filteredSubscriptions) == null || u.delete(o)), g;
        }).reduce((o, l) => l ? o.concat(...l) : o, []);
        if (!n || !e.filteredSubscriptions.has(n)) return [];
        const s = e.filteredSubscriptions.get(n);
        if (!t) {
          const o = Array.from(s.values()).reduce((l, u) => l.concat(...u), []);
          return e.filteredSubscriptions.delete(n), o;
        }
        let i = s.get(t);
        return s.delete(t), i || [];
      }
    }, be = class Ai extends Yo {
      constructor(t) {
        var n;
        const s = Ai._MsgPack;
        if (!s) throw new Error("Expected DefaultRealtime._MsgPack to have been set");
        super(E.objectifyOptions(t, !0, "Realtime", a.defaultLogger, ge(K({}, Vi), {
          Crypto: (n = Ai.Crypto) != null ? n : void 0,
          MsgPack: s,
          RealtimePresence: {
            RealtimePresence: na,
            PresenceMessage: xe,
            WirePresenceMessage: tn
          },
          Annotations: {
            Annotation: kt,
            WireAnnotation: Tt,
            RealtimeAnnotations: ni,
            RestAnnotations: ds
          },
          WebSocketTransport: cr,
          MessageInteractions: oa
        })));
      }
      static get Crypto() {
        if (this._Crypto === null) throw new Error("Encryption not enabled; use ably.encryption.js instead");
        return this._Crypto;
      }
      static set Crypto(t) {
        this._Crypto = t;
      }
    };
    be.Utils = Ue, be.ConnectionManager = or, be.ProtocolMessage = Eo, be._Crypto = null, be.Message = zi, be.PresenceMessage = $i, be.Annotation = Xi, be._MsgPack = null, be._Http = Ce, be._PresenceMap = ai, be._MessageEncoding = Rt;
    var li = be, hi = Uint8Array, on = Uint32Array, ui = Math.pow, lr = new on(8), hr = [], an = new on(64);
    function ur(e) {
      return (e - (e | 0)) * ui(2, 32) | 0;
    }
    for (var cn = 2, ln = 0; ln < 64; ) {
      for (di = !0, ps = 2; ps <= cn / 2; ps++) cn % ps === 0 && (di = !1);
      di && (ln < 8 && (lr[ln] = ur(ui(cn, 1 / 2))), hr[ln] = ur(ui(cn, 1 / 3)), ln++), cn++;
    }
    var di, ps, aa = !!new hi(new on([1]).buffer)[0];
    function gi(e) {
      return aa ? e >>> 24 | (e >>> 16 & 255) << 8 | (e & 65280) << 8 | e << 24 : e;
    }
    function Ie(e, t) {
      return e >>> t | e << 32 - t;
    }
    function ms(e) {
      var t = lr.slice(), n = e.length, s = n * 8, i = 512 - (s + 64) % 512 - 1 + s + 65, o = new hi(i / 8), l = new on(o.buffer);
      o.set(e, 0), o[n] = 128, l[l.length - 1] = gi(s);
      for (var u, g = 0; g < i / 32; g += 16) {
        var p = t.slice();
        for (u = 0; u < 64; u++) {
          var w;
          if (u < 16) w = gi(l[g + u]);
          else {
            var C = an[u - 15], O = an[u - 2];
            w = an[u - 7] + an[u - 16] + (Ie(C, 7) ^ Ie(C, 18) ^ C >>> 3) + (Ie(O, 17) ^ Ie(O, 19) ^ O >>> 10);
          }
          an[u] = w |= 0;
          for (var v = (Ie(p[4], 6) ^ Ie(p[4], 11) ^ Ie(p[4], 25)) + (p[4] & p[5] ^ ~p[4] & p[6]) + p[7] + w + hr[u], I = (Ie(p[0], 2) ^ Ie(p[0], 13) ^ Ie(p[0], 22)) + (p[0] & p[1] ^ p[2] & (p[0] ^ p[1])), T = 7; T > 0; T--) p[T] = p[T - 1];
          p[0] = v + I | 0, p[4] = p[4] + v | 0;
        }
        for (u = 0; u < 8; u++) t[u] = t[u] + p[u] | 0;
      }
      return new hi(new on(t.map(function(L) {
        return gi(L);
      })).buffer);
    }
    function ca(e, t) {
      if (e.length > 64 && (e = ms(e)), e.length < 64) {
        const u = /* @__PURE__ */ new Uint8Array(64);
        u.set(e, 0), e = u;
      }
      for (var n = /* @__PURE__ */ new Uint8Array(64), s = /* @__PURE__ */ new Uint8Array(64), i = 0; i < 64; i++)
        n[i] = 54 ^ e[i], s[i] = 92 ^ e[i];
      var o = new Uint8Array(t.length + 64);
      o.set(n, 0), o.set(t, 64);
      var l = /* @__PURE__ */ new Uint8Array(96);
      return l.set(s, 0), l.set(ms(o), 64), ms(l);
    }
    var la = class {
      constructor() {
        this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.hexCharSet = "0123456789abcdef";
      }
      uint8ViewToBase64(e) {
        let t = "";
        const n = this.base64CharSet, s = e.byteLength, i = s % 3, o = s - i;
        let l, u, g, p, w;
        for (let C = 0; C < o; C = C + 3)
          w = e[C] << 16 | e[C + 1] << 8 | e[C + 2], l = (w & 16515072) >> 18, u = (w & 258048) >> 12, g = (w & 4032) >> 6, p = w & 63, t += n[l] + n[u] + n[g] + n[p];
        return i == 1 ? (w = e[o], l = (w & 252) >> 2, u = (w & 3) << 4, t += n[l] + n[u] + "==") : i == 2 && (w = e[o] << 8 | e[o + 1], l = (w & 64512) >> 10, u = (w & 1008) >> 4, g = (w & 15) << 2, t += n[l] + n[u] + n[g] + "="), t;
      }
      base64ToArrayBuffer(e) {
        const t = atob?.(e), n = t.length, s = new Uint8Array(n);
        for (let i = 0; i < n; i++) {
          const o = t.charCodeAt(i);
          s[i] = o;
        }
        return this.toArrayBuffer(s);
      }
      isBuffer(e) {
        return e instanceof ArrayBuffer || ArrayBuffer.isView(e);
      }
      toBuffer(e) {
        if (!ArrayBuffer) throw new Error("Can't convert to Buffer: browser does not support the necessary types");
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e)) return new Uint8Array(this.toArrayBuffer(e));
        throw new Error("BufferUtils.toBuffer expected an ArrayBuffer or a view onto one");
      }
      toArrayBuffer(e) {
        if (!ArrayBuffer) throw new Error("Can't convert to ArrayBuffer: browser does not support the necessary types");
        if (e instanceof ArrayBuffer) return e;
        if (ArrayBuffer.isView(e)) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
        throw new Error("BufferUtils.toArrayBuffer expected an ArrayBuffer or a view onto one");
      }
      base64Encode(e) {
        return this.uint8ViewToBase64(this.toBuffer(e));
      }
      base64UrlEncode(e) {
        return this.base64Encode(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      }
      base64Decode(e) {
        if (ArrayBuffer && m.Config.atob) return this.base64ToArrayBuffer(e);
        throw new Error("Expected ArrayBuffer to exist and Platform.Config.atob to be configured");
      }
      hexEncode(e) {
        return this.toBuffer(e).reduce((t, n) => t + n.toString(16).padStart(2, "0"), "");
      }
      hexDecode(e) {
        if (e.length % 2 !== 0) throw new Error("Can't create a byte array from a hex string of odd length");
        const t = new Uint8Array(e.length / 2);
        for (let n = 0; n < t.length; n++) t[n] = parseInt(e.slice(2 * n, 2 * (n + 1)), 16);
        return this.toArrayBuffer(t);
      }
      utf8Encode(e) {
        if (m.Config.TextEncoder) {
          const t = new m.Config.TextEncoder().encode(e);
          return this.toArrayBuffer(t);
        } else throw new Error("Expected TextEncoder to be configured");
      }
      utf8Decode(e) {
        if (!this.isBuffer(e)) throw new Error("Expected input of utf8decode to be an arraybuffer or typed array");
        if (TextDecoder) return new TextDecoder().decode(e);
        throw new Error("Expected TextDecoder to be configured");
      }
      areBuffersEqual(e, t) {
        if (!e || !t) return !1;
        const n = this.toArrayBuffer(e), s = this.toArrayBuffer(t);
        if (n.byteLength != s.byteLength) return !1;
        const i = new Uint8Array(n), o = new Uint8Array(s);
        for (var l = 0; l < i.length; l++) if (i[l] != o[l]) return !1;
        return !0;
      }
      byteLength(e) {
        return e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? e.byteLength : -1;
      }
      arrayBufferViewToBuffer(e) {
        return this.toArrayBuffer(e);
      }
      concat(e) {
        const t = e.reduce((i, o) => i + o.byteLength, 0), n = new Uint8Array(t);
        let s = 0;
        for (const i of e) {
          const o = this.toBuffer(i);
          n.set(o, s), s += o.byteLength;
        }
        return n.buffer;
      }
      sha256(e) {
        const t = ms(this.toBuffer(e));
        return this.toArrayBuffer(t);
      }
      hmacSha256(e, t) {
        const n = ca(this.toBuffer(t), this.toBuffer(e));
        return this.toArrayBuffer(n);
      }
    }, dr = new la(), ha = function(e, t) {
      var n = "aes", s = 256, i = "cbc", o = 16;
      function l(O) {
        if (O.algorithm === "aes" && O.mode === "cbc") {
          if (O.keyLength === 128 || O.keyLength === 256) return;
          throw new Error("Unsupported key length " + O.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)");
        }
      }
      function u(O) {
        return O.replace("_", "/").replace("-", "+");
      }
      function g(O) {
        return O instanceof p;
      }
      class p {
        constructor(v, I, T, L) {
          this.algorithm = v, this.keyLength = I, this.mode = T, this.key = L;
        }
      }
      class w {
        static getDefaultParams(v) {
          var I;
          if (!v.key) throw new Error("Crypto.getDefaultParams: a key is required");
          typeof v.key == "string" ? I = t.toArrayBuffer(t.base64Decode(u(v.key))) : v.key instanceof ArrayBuffer ? I = v.key : I = t.toArrayBuffer(v.key);
          var T = v.algorithm || n, L = I.byteLength * 8, D = v.mode || i, G = new p(T, L, D, I);
          if (v.keyLength && v.keyLength !== G.keyLength) throw new Error("Crypto.getDefaultParams: a keyLength of " + v.keyLength + " was specified, but the key actually has length " + G.keyLength);
          return l(G), G;
        }
        static async generateRandomKey(v) {
          try {
            return e.getRandomArrayBuffer((v || s) / 8);
          } catch (I) {
            throw new _("Failed to generate random key: " + I.message, 5e4, 500);
          }
        }
        static getCipher(v, I) {
          var T, L = g(v) ? v : this.getDefaultParams(v);
          return {
            cipherParams: L,
            cipher: new C(L, (T = v.iv) != null ? T : null, I)
          };
        }
      }
      w.CipherParams = p;
      class C {
        constructor(v, I, T) {
          if (this.logger = T, !crypto.subtle)
            throw isSecureContext ? new Error("Crypto operations are not possible since the browser’s SubtleCrypto class is unavailable (reason unknown).") : new Error("Crypto operations are is not possible since the current environment is a non-secure context and hence the browser’s SubtleCrypto class is not available.");
          this.algorithm = v.algorithm + "-" + String(v.keyLength) + "-" + v.mode, this.webCryptoAlgorithm = v.algorithm + "-" + v.mode, this.key = t.toArrayBuffer(v.key), this.iv = I ? t.toArrayBuffer(I) : null;
        }
        concat(v, I) {
          const T = new ArrayBuffer(v.byteLength + I.byteLength), L = new DataView(T), D = new DataView(t.toArrayBuffer(v));
          for (let F = 0; F < D.byteLength; F++) L.setInt8(F, D.getInt8(F));
          const G = new DataView(t.toArrayBuffer(I));
          for (let F = 0; F < G.byteLength; F++) L.setInt8(D.byteLength + F, G.getInt8(F));
          return T;
        }
        async encrypt(v) {
          a.logAction(this.logger, a.LOG_MICRO, "CBCCipher.encrypt()", "");
          const I = await this.getIv(), T = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, !1, ["encrypt"]), L = await crypto.subtle.encrypt({
            name: this.webCryptoAlgorithm,
            iv: I
          }, T, v);
          return this.concat(I, L);
        }
        async decrypt(v) {
          a.logAction(this.logger, a.LOG_MICRO, "CBCCipher.decrypt()", "");
          const I = t.toArrayBuffer(v), T = I.slice(0, o), L = I.slice(o), D = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, !1, ["decrypt"]);
          return crypto.subtle.decrypt({
            name: this.webCryptoAlgorithm,
            iv: T
          }, D, L);
        }
        async getIv() {
          if (this.iv) {
            var v = this.iv;
            return this.iv = null, v;
          }
          const I = await e.getRandomArrayBuffer(o);
          return t.toArrayBuffer(I);
        }
      }
      return w;
    }, gr = /* @__PURE__ */ ((e) => (e[e.REQ_SEND = 0] = "REQ_SEND", e[e.REQ_RECV = 1] = "REQ_RECV", e[e.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", e[e.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM", e))(gr || {}), Ne = gr;
    function fr() {
      return new _("No HTTP request plugin provided. Provide at least one of the FetchRequest or XHRRequest plugins.", 4e4, 400);
    }
    var ys = class {
      constructor(e) {
        this.checksInProgress = null, this.checkConnectivity = void 0, this.supportsAuthHeaders = !1, this.supportsLinkHeaders = !1;
        var t;
        this.client = e ?? null;
        const n = e?.options.connectivityCheckUrl || E.connectivityCheckUrl, s = (t = e?.options.connectivityCheckParams) != null ? t : null, i = !e?.options.connectivityCheckUrl, o = K(K({}, pr.bundledRequestImplementations), e?._additionalHTTPRequestImplementations), l = o.XHRRequest, u = o.FetchRequest, g = !!(l || u);
        if (!g) throw fr();
        m.Config.xhrSupported && l ? (this.supportsAuthHeaders = !0, this.Request = async function(p, w, C, O, v) {
          return new Promise((I) => {
            var T;
            const L = l.createRequest(w, C, O, v, Ne.REQ_SEND, (T = e && e.options.timeouts) != null ? T : null, this.logger, p);
            L.once("complete", (D, G, F, x, pe) => I({
              error: D,
              body: G,
              headers: F,
              unpacked: x,
              statusCode: pe
            })), L.exec();
          });
        }, e?.options.disableConnectivityCheck ? this.checkConnectivity = async function() {
          return !0;
        } : this.checkConnectivity = async function() {
          var p;
          a.logAction(this.logger, a.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + n);
          const w = await this.doUri(V.Get, n, null, null, s);
          let C = !1;
          return i ? C = !w.error && ((p = w.body) == null ? void 0 : p.replace(/\n/, "")) == "yes" : C = !w.error && Gs(w.statusCode), a.logAction(this.logger, a.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + C), C;
        }) : m.Config.fetchSupported && u ? (this.supportsAuthHeaders = !0, this.Request = async (p, w, C, O, v) => u(p, e ?? null, w, C, O, v), e?.options.disableConnectivityCheck ? this.checkConnectivity = async function() {
          return !0;
        } : this.checkConnectivity = async function() {
          var p;
          a.logAction(this.logger, a.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + n);
          const w = await this.doUri(V.Get, n, null, null, null), C = !w.error && ((p = w.body) == null ? void 0 : p.replace(/\n/, "")) == "yes";
          return a.logAction(this.logger, a.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + C), C;
        }) : this.Request = async () => ({ error: g ? new se("no supported HTTP transports available", null, 400) : fr() });
      }
      get logger() {
        var e, t;
        return (t = (e = this.client) == null ? void 0 : e.logger) != null ? t : a.defaultLogger;
      }
      async doUri(e, t, n, s, i) {
        return this.Request ? this.Request(e, t, n, i, s) : { error: new se("Request invoked before assigned to", null, 500) };
      }
      shouldFallback(e) {
        const t = e.statusCode;
        return t === 408 && !e.code || t === 400 && !e.code || t >= 500 && t <= 504;
      }
    }, pr = (ys.methods = [
      V.Get,
      V.Delete,
      V.Post,
      V.Put,
      V.Patch
    ], ys.methodsWithoutBody = [V.Get, V.Delete], ys.methodsWithBody = [
      V.Post,
      V.Put,
      V.Patch
    ], ys), mr = pr, Mt = "ablyjs-storage-test", Pt = typeof global < "u" ? global : typeof window < "u" ? window : self, ua = class {
      constructor() {
        try {
          Pt.sessionStorage.setItem(Mt, Mt), Pt.sessionStorage.removeItem(Mt), this.sessionSupported = !0;
        } catch {
          this.sessionSupported = !1;
        }
        try {
          Pt.localStorage.setItem(Mt, Mt), Pt.localStorage.removeItem(Mt), this.localSupported = !0;
        } catch {
          this.localSupported = !1;
        }
      }
      get(e) {
        return this._get(e, !1);
      }
      getSession(e) {
        return this._get(e, !0);
      }
      remove(e) {
        return this._remove(e, !1);
      }
      removeSession(e) {
        return this._remove(e, !0);
      }
      set(e, t, n) {
        return this._set(e, t, n, !1);
      }
      setSession(e, t, n) {
        return this._set(e, t, n, !0);
      }
      _set(e, t, n, s) {
        const i = { value: t };
        return n && (i.expires = Date.now() + n), this.storageInterface(s).setItem(e, JSON.stringify(i));
      }
      _get(e, t) {
        if (t && !this.sessionSupported) throw new Error("Session Storage not supported");
        if (!t && !this.localSupported) throw new Error("Local Storage not supported");
        const n = this.storageInterface(t).getItem(e);
        if (!n) return null;
        const s = JSON.parse(n);
        return s.expires && s.expires < Date.now() ? (this.storageInterface(t).removeItem(e), null) : s.value;
      }
      _remove(e, t) {
        return this.storageInterface(t).removeItem(e);
      }
      storageInterface(e) {
        return e ? Pt.sessionStorage : Pt.localStorage;
      }
    }, yr = new ua(), $ = rt(), da = typeof EdgeRuntime == "string";
    typeof Window > "u" && typeof WorkerGlobalScope > "u" && !da && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
    function ga() {
      const e = $.location;
      return !$.WebSocket || !e || !e.origin || e.origin.indexOf("http") > -1;
    }
    function fa() {
      return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
    }
    var _r = {
      agent: "browser",
      logTimestamps: !0,
      userAgent: $.navigator && $.navigator.userAgent.toString(),
      currentUrl: $.location && $.location.href,
      binaryType: "arraybuffer",
      WebSocket: $.WebSocket,
      fetchSupported: !!$.fetch,
      xhrSupported: $.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
      allowComet: ga(),
      websocketHeartbeatsParam: "bounce",
      supportsBinary: !!$.TextDecoder,
      preferBinary: !1,
      ArrayBuffer: $.ArrayBuffer,
      atob: $.atob,
      nextTick: typeof $.queueMicrotask == "function" ? (e) => $.queueMicrotask(e) : (e) => Promise.resolve().then(e),
      setTimeout: $.setTimeout.bind($),
      clearTimeout: $.clearTimeout.bind($),
      now: Date.now,
      addEventListener: $.addEventListener,
      inspect: JSON.stringify,
      stringByteSize: function(e) {
        return $.TextDecoder && new $.TextEncoder().encode(e).length || e.length;
      },
      TextEncoder: $.TextEncoder,
      TextDecoder: $.TextDecoder,
      getRandomArrayBuffer: async function(e) {
        const t = new Uint8Array(e);
        return $.crypto.getRandomValues(t), t.buffer;
      },
      isWebworker: fa(),
      push: {
        platform: "browser",
        formFactor: "desktop",
        storage: yr
      }
    };
    function pa(e) {
      const t = [
        80015,
        80017,
        80030
      ];
      return e.code ? ve.isTokenErr(e) ? !1 : t.includes(e.code) ? !0 : e.code >= 4e4 && e.code < 5e4 : !1;
    }
    function fi(e) {
      return pa(e) ? [de({
        action: M.ERROR,
        error: e
      })] : [de({
        action: M.DISCONNECTED,
        error: e
      })];
    }
    var ma = class extends It {
      constructor(e, t, n) {
        super(e, t, n, !0), this.onAuthUpdated = (s) => {
          this.authParams = { access_token: s.token };
        }, this.stream = "stream" in n ? n.stream : !0, this.sendRequest = null, this.recvRequest = null, this.pendingCallback = null, this.pendingItems = null;
      }
      connect() {
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.connect()", "starting"), It.prototype.connect.call(this);
        const e = this.params, t = e.options, n = e.host || t.primaryDomain, s = E.getPort(t), i = t.tls ? "https://" : "http://";
        this.baseUri = i + Vt(n) + ":" + s + "/comet/";
        const o = this.baseUri + "connect";
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.connect()", "uri: " + o), ue(this.auth.getAuthParams(), (l, u) => {
          if (l) {
            this.disconnect(l);
            return;
          }
          if (this.isDisposed) return;
          this.authParams = u;
          const g = this.params.getConnectParams(u);
          "stream" in g && (this.stream = g.stream), a.logAction(this.logger, a.LOG_MINOR, "CometTransport.connect()", "connectParams:" + Pe(g));
          let p = !1;
          const w = this.recvRequest = this.createRequest(o, null, g, null, this.stream ? Ne.REQ_RECV_STREAM : Ne.REQ_RECV);
          w.on("data", (C) => {
            this.recvRequest && (p || (p = !0, this.emit("preconnect")), this.onData(C));
          }), w.on("complete", (C) => {
            if (this.recvRequest || (C = C || new _("Request cancelled", 80003, 400)), this.recvRequest = null, !p && !C && (p = !0, this.emit("preconnect")), this.onActivity(), C) {
              C.code ? this.onData(fi(C)) : this.disconnect(C);
              return;
            }
            m.Config.nextTick(() => {
              this.recv();
            });
          }), w.exec();
        });
      }
      requestClose() {
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.requestClose()"), this._requestCloseOrDisconnect(!0);
      }
      requestDisconnect() {
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.requestDisconnect()"), this._requestCloseOrDisconnect(!1);
      }
      _requestCloseOrDisconnect(e) {
        const t = e ? this.closeUri : this.disconnectUri;
        if (t) {
          const n = this.createRequest(t, null, this.authParams, null, Ne.REQ_SEND);
          n.on("complete", (s) => {
            s && (a.logAction(this.logger, a.LOG_ERROR, "CometTransport.request" + (e ? "Close()" : "Disconnect()"), "request returned err = " + j(s)), this.finish("disconnected", s));
          }), n.exec();
        }
      }
      dispose() {
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = !0, this.recvRequest && (a.logAction(this.logger, a.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", ht.disconnected()), m.Config.nextTick(() => {
          this.emit("disposed");
        }));
      }
      onConnect(e) {
        var t;
        if (this.isDisposed) return;
        const n = (t = e.connectionDetails) == null ? void 0 : t.connectionKey;
        It.prototype.onConnect.call(this, e);
        const s = this.baseUri + n;
        a.logAction(this.logger, a.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + s), this.sendUri = s + "/send", this.recvUri = s + "/recv", this.closeUri = s + "/close", this.disconnectUri = s + "/disconnect";
      }
      send(e) {
        if (this.sendRequest) {
          this.pendingItems = this.pendingItems || [], this.pendingItems.push(e);
          return;
        }
        const t = this.pendingItems || [];
        t.push(e), this.pendingItems = null, this.sendItems(t);
      }
      sendAnyPending() {
        const e = this.pendingItems;
        e && (this.pendingItems = null, this.sendItems(e));
      }
      sendItems(e) {
        const t = this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(e), Ne.REQ_SEND);
        t.on("complete", (n, s) => {
          if (n && a.logAction(this.logger, a.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + j(n)), this.sendRequest = null, n) {
            n.code ? this.onData(fi(n)) : this.disconnect(n);
            return;
          }
          s && this.onData(s), this.pendingItems && m.Config.nextTick(() => {
            this.sendRequest || this.sendAnyPending();
          });
        }), t.exec();
      }
      recv() {
        if (this.recvRequest || !this.isConnected) return;
        const e = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? Ne.REQ_RECV_STREAM : Ne.REQ_RECV_POLL);
        e.on("data", (t) => {
          this.onData(t);
        }), e.on("complete", (t) => {
          if (this.recvRequest = null, this.onActivity(), t) {
            t.code ? this.onData(fi(t)) : this.disconnect(t);
            return;
          }
          m.Config.nextTick(() => {
            this.recv();
          });
        }), e.exec();
      }
      onData(e) {
        try {
          const t = this.decodeResponse(e);
          if (t && t.length) for (let n = 0; n < t.length; n++) this.onProtocolMessage(Ys(t[n], this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._liveObjectsPlugin));
        } catch (t) {
          a.logAction(this.logger, a.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + t.stack);
        }
      }
      encodeRequest(e) {
        return JSON.stringify(e);
      }
      decodeResponse(e) {
        return typeof e == "string" ? JSON.parse(e) : e;
      }
    }, ya = ma;
    function _a(e, t) {
      return Wt(De(t)).includes("x-ably-errorcode");
    }
    function ba(e, t) {
      if (_a(e, t)) return e.error && _.fromWireValues(e.error);
    }
    var va = function() {
    }, wa = 0, br = {};
    function Ca(e, t) {
      return e.getResponseHeader && e.getResponseHeader(t);
    }
    function Ra(e) {
      return e.getResponseHeader && (e.getResponseHeader("transfer-encoding") || !e.getResponseHeader("content-length"));
    }
    function Oa(e) {
      const t = e.getAllResponseHeaders().trim().split(`\r
`), n = {};
      for (let s = 0; s < t.length; s++) {
        const i = t[s].split(":").map((o) => o.trim());
        n[i[0].toLowerCase()] = i[1];
      }
      return n;
    }
    var vr = class Hr extends Y {
      constructor(t, n, s, i, o, l, u, g) {
        super(u), s = s || {}, s.rnd = st(), this.uri = t + Pe(s), this.headers = n || {}, this.body = i, this.method = g ? g.toUpperCase() : ae(i) ? "GET" : "POST", this.requestMode = o, this.timeouts = l, this.timedOut = !1, this.requestComplete = !1, this.id = String(++wa), br[this.id] = this;
      }
      static createRequest(t, n, s, i, o, l, u, g) {
        const p = l || E.TIMEOUTS;
        return new Hr(t, n, tt(s), i, o, p, u, g);
      }
      complete(t, n, s, i, o) {
        this.requestComplete || (this.requestComplete = !0, !t && n && this.emit("data", n), this.emit("complete", t, n, s, i, o), this.dispose());
      }
      abort() {
        this.dispose();
      }
      exec() {
        let t = this.headers;
        const n = this.requestMode == Ne.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout, s = this.timer = setTimeout(() => {
          this.timedOut = !0, o.abort();
        }, n), i = this.method, o = this.xhr = new XMLHttpRequest(), l = t.accept;
        let u = this.body, g = "text";
        l ? l.indexOf("application/x-msgpack") === 0 && (g = "arraybuffer") : t.accept = "application/json", u && (t["content-type"] || (t["content-type"] = "application/json")).indexOf("application/json") > -1 && typeof u != "string" && (u = JSON.stringify(u)), o.open(i, this.uri, !0), o.responseType = g, "authorization" in t && (o.withCredentials = !0);
        for (const x in t) o.setRequestHeader(x, t[x]);
        const p = (x, pe, he, Ve) => {
          var Sr;
          let _i = pe + " (event type: " + x.type + ")";
          (Sr = this == null ? void 0 : this.xhr) != null && Sr.statusText && (_i += ", current statusText is " + this.xhr.statusText), a.logAction(this.logger, a.LOG_ERROR, "Request.on" + x.type + "()", _i), this.complete(new se(_i, he, Ve));
        };
        o.onerror = (x) => {
          p(x, "XHR error occurred", null, 400);
        }, o.onabort = (x) => {
          this.timedOut ? p(x, "Request aborted due to request timeout expiring", null, 408) : p(x, "Request cancelled", null, 400);
        }, o.ontimeout = (x) => {
          p(x, "Request timed out", null, 408);
        };
        let w, C, O, v = 0, I = !1;
        const T = () => {
          if (clearTimeout(s), O = C < 400, C == 204) {
            this.complete(null, null, null, null, C);
            return;
          }
          w = this.requestMode == Ne.REQ_RECV_STREAM && O && Ra(o);
        }, L = () => {
          let x;
          try {
            const he = Ca(o, "content-type");
            if (he ? he.indexOf("application/json") >= 0 : o.responseType == "text") {
              const Ve = o.responseType === "arraybuffer" ? m.BufferUtils.utf8Decode(o.response) : String(o.responseText);
              Ve.length ? x = JSON.parse(Ve) : x = Ve, I = !0;
            } else x = o.response;
            x.response !== void 0 ? (C = x.statusCode, O = C < 400, t = x.headers, x = x.response) : t = Oa(o);
          } catch (he) {
            this.complete(new se("Malformed response body from server: " + he.message, null, 400));
            return;
          }
          if (O || Array.isArray(x)) {
            this.complete(null, x, t, I, C);
            return;
          }
          let pe = ba(x, t);
          pe || (pe = new se("Error response received from server: " + C + " body was: " + m.Config.inspect(x), null, C)), this.complete(pe, x, t, I, C);
        };
        function D() {
          const x = o.responseText, pe = x.length - 1;
          let he, Ve;
          for (; v < pe && (he = x.indexOf(`
`, v)) > -1; )
            Ve = x.slice(v, he), v = he + 1, G(Ve);
        }
        const G = (x) => {
          try {
            x = JSON.parse(x);
          } catch (pe) {
            this.complete(new se("Malformed response body from server: " + pe.message, null, 400));
            return;
          }
          this.emit("data", x);
        }, F = () => {
          D(), this.streamComplete = !0, m.Config.nextTick(() => {
            this.complete();
          });
        };
        o.onreadystatechange = () => {
          const x = o.readyState;
          x < 3 || o.status !== 0 && (C === void 0 && (C = o.status, T()), x == 3 && w ? D() : x == 4 && (w ? F() : L()));
        }, o.send(u);
      }
      dispose() {
        const t = this.xhr;
        if (t) {
          t.onreadystatechange = t.onerror = t.onabort = t.ontimeout = va, this.xhr = null;
          const n = this.timer;
          n && (clearTimeout(n), this.timer = null), this.requestComplete || t.abort();
        }
        delete br[this.id];
      }
    }, wr = fe.XhrPolling, Aa = class extends ya {
      constructor(e, t, n) {
        super(e, t, n), this.shortName = wr, n.stream = !1, this.shortName = wr;
      }
      static isAvailable() {
        return !!(m.Config.xhrSupported && m.Config.allowComet);
      }
      toString() {
        return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
      }
      createRequest(e, t, n, s, i) {
        return vr.createRequest(e, t, n, s, i, this.timeouts, this.logger);
      }
    }, Sa = {
      order: ["xhr_polling"],
      bundledImplementations: {
        web_socket: cr,
        xhr_polling: Aa
      }
    }, Ta = {
      connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
      wsConnectivityCheckUrl: "wss://ws-up.ably-realtime.com",
      defaultTransports: [fe.XhrPolling, fe.WebSocket]
    };
    function ka(e) {
      if (e === void 0) return "undefined";
      let t, n;
      if (e instanceof ArrayBuffer ? (n = "ArrayBuffer", t = new DataView(e)) : e instanceof DataView && (n = "DataView", t = e), !t) return JSON.stringify(e);
      const s = [];
      for (let i = 0; i < e.byteLength; i++) {
        if (i > 20) {
          s.push("...");
          break;
        }
        let o = t.getUint8(i).toString(16);
        o.length === 1 && (o = "0" + o), s.push(o);
      }
      return "<" + n + " " + s.join(" ") + ">";
    }
    function hn(e, t, n) {
      const s = new TextEncoder().encode(n);
      for (let i = 0; i < s.length; i++) e.setUint8(t + i, s[i]);
    }
    function Cr(e, t, n) {
      return new TextDecoder().decode(e.buffer.slice(t, t + n));
    }
    function pi(e) {
      return new TextEncoder().encode(e).length;
    }
    function Ia(e, t) {
      const n = dn(e, t);
      if (n === 0) return;
      const s = new ArrayBuffer(n);
      return un(e, new DataView(s), 0, t), s;
    }
    var mi = 4294967296, Rr = 1 / mi;
    function Ma(e, t) {
      return t = t || 0, e.getInt32(t) * mi + e.getUint32(t + 4);
    }
    function Pa(e, t) {
      return t = t || 0, e.getUint32(t) * mi + e.getUint32(t + 4);
    }
    function Ea(e, t, n) {
      n < 9223372036854776e3 ? (e.setInt32(t, Math.floor(n * Rr)), e.setInt32(t + 4, n & -1)) : (e.setUint32(t, 2147483647), e.setUint32(t + 4, 2147483647));
    }
    function La(e, t, n) {
      n < 18446744073709552e3 ? (e.setUint32(t, Math.floor(n * Rr)), e.setInt32(t + 4, n & -1)) : (e.setUint32(t, 4294967295), e.setUint32(t + 4, 4294967295));
    }
    var xa = class {
      constructor(e, t) {
        this.map = (n) => {
          const s = {};
          for (let i = 0; i < n; i++) {
            const o = this.parse();
            s[o] = this.parse();
          }
          return s;
        }, this.bin = (n) => {
          const s = new ArrayBuffer(n);
          return new Uint8Array(s).set(new Uint8Array(this.view.buffer, this.offset, n), 0), this.offset += n, s;
        }, this.buf = this.bin, this.str = (n) => {
          const s = Cr(this.view, this.offset, n);
          return this.offset += n, s;
        }, this.array = (n) => {
          const s = new Array(n);
          for (let i = 0; i < n; i++) s[i] = this.parse();
          return s;
        }, this.ext = (n) => (this.offset += n, {
          type: this.view.getInt8(this.offset),
          data: this.buf(n)
        }), this.parse = () => {
          const n = this.view.getUint8(this.offset);
          let s, i;
          if ((n & 128) === 0)
            return this.offset++, n;
          if ((n & 240) === 128)
            return i = n & 15, this.offset++, this.map(i);
          if ((n & 240) === 144)
            return i = n & 15, this.offset++, this.array(i);
          if ((n & 224) === 160)
            return i = n & 31, this.offset++, this.str(i);
          if ((n & 224) === 224)
            return s = this.view.getInt8(this.offset), this.offset++, s;
          switch (n) {
            case 192:
              return this.offset++, null;
            case 193:
              this.offset++;
              return;
            case 194:
              return this.offset++, !1;
            case 195:
              return this.offset++, !0;
            case 196:
              return i = this.view.getUint8(this.offset + 1), this.offset += 2, this.bin(i);
            case 197:
              return i = this.view.getUint16(this.offset + 1), this.offset += 3, this.bin(i);
            case 198:
              return i = this.view.getUint32(this.offset + 1), this.offset += 5, this.bin(i);
            case 199:
              return i = this.view.getUint8(this.offset + 1), this.offset += 2, this.ext(i);
            case 200:
              return i = this.view.getUint16(this.offset + 1), this.offset += 3, this.ext(i);
            case 201:
              return i = this.view.getUint32(this.offset + 1), this.offset += 5, this.ext(i);
            case 202:
              return s = this.view.getFloat32(this.offset + 1), this.offset += 5, s;
            case 203:
              return s = this.view.getFloat64(this.offset + 1), this.offset += 9, s;
            case 204:
              return s = this.view.getUint8(this.offset + 1), this.offset += 2, s;
            case 205:
              return s = this.view.getUint16(this.offset + 1), this.offset += 3, s;
            case 206:
              return s = this.view.getUint32(this.offset + 1), this.offset += 5, s;
            case 207:
              return s = Pa(this.view, this.offset + 1), this.offset += 9, s;
            case 208:
              return s = this.view.getInt8(this.offset + 1), this.offset += 2, s;
            case 209:
              return s = this.view.getInt16(this.offset + 1), this.offset += 3, s;
            case 210:
              return s = this.view.getInt32(this.offset + 1), this.offset += 5, s;
            case 211:
              return s = Ma(this.view, this.offset + 1), this.offset += 9, s;
            case 212:
              return i = 1, this.offset++, this.ext(i);
            case 213:
              return i = 2, this.offset++, this.ext(i);
            case 214:
              return i = 4, this.offset++, this.ext(i);
            case 215:
              return i = 8, this.offset++, this.ext(i);
            case 216:
              return i = 16, this.offset++, this.ext(i);
            case 217:
              return i = this.view.getUint8(this.offset + 1), this.offset += 2, this.str(i);
            case 218:
              return i = this.view.getUint16(this.offset + 1), this.offset += 3, this.str(i);
            case 219:
              return i = this.view.getUint32(this.offset + 1), this.offset += 5, this.str(i);
            case 220:
              return i = this.view.getUint16(this.offset + 1), this.offset += 3, this.array(i);
            case 221:
              return i = this.view.getUint32(this.offset + 1), this.offset += 5, this.array(i);
            case 222:
              return i = this.view.getUint16(this.offset + 1), this.offset += 3, this.map(i);
            case 223:
              return i = this.view.getUint32(this.offset + 1), this.offset += 5, this.map(i);
          }
          throw new Error("Unknown type 0x" + n.toString(16));
        }, this.offset = t || 0, this.view = e;
      }
    };
    function Na(e) {
      const t = new xa(new DataView(e)), n = t.parse();
      if (t.offset !== e.byteLength) throw new Error(e.byteLength - t.offset + " trailing bytes");
      return n;
    }
    function Or(e, t) {
      return Object.keys(e).filter(function(n) {
        const s = e[n];
        return (!t || s != null) && (typeof s != "function" || !!s.toJSON);
      });
    }
    function un(e, t, n, s) {
      const i = typeof e;
      if (typeof e == "string") {
        const o = pi(e);
        if (o < 32)
          return t.setUint8(n, o | 160), hn(t, n + 1, e), 1 + o;
        if (o < 256)
          return t.setUint8(n, 217), t.setUint8(n + 1, o), hn(t, n + 2, e), 2 + o;
        if (o < 65536)
          return t.setUint8(n, 218), t.setUint16(n + 1, o), hn(t, n + 3, e), 3 + o;
        if (o < 4294967296)
          return t.setUint8(n, 219), t.setUint32(n + 1, o), hn(t, n + 5, e), 5 + o;
      }
      if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
        const o = e.byteLength;
        if (o < 256)
          return t.setUint8(n, 196), t.setUint8(n + 1, o), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 2), 2 + o;
        if (o < 65536)
          return t.setUint8(n, 197), t.setUint16(n + 1, o), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 3), 3 + o;
        if (o < 4294967296)
          return t.setUint8(n, 198), t.setUint32(n + 1, o), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 5), 5 + o;
      }
      if (typeof e == "number") {
        if (Math.floor(e) !== e)
          return t.setUint8(n, 203), t.setFloat64(n + 1, e), 9;
        if (e >= 0) {
          if (e < 128)
            return t.setUint8(n, e), 1;
          if (e < 256)
            return t.setUint8(n, 204), t.setUint8(n + 1, e), 2;
          if (e < 65536)
            return t.setUint8(n, 205), t.setUint16(n + 1, e), 3;
          if (e < 4294967296)
            return t.setUint8(n, 206), t.setUint32(n + 1, e), 5;
          if (e < 18446744073709552e3)
            return t.setUint8(n, 207), La(t, n + 1, e), 9;
          throw new Error("Number too big 0x" + e.toString(16));
        }
        if (e >= -32)
          return t.setInt8(n, e), 1;
        if (e >= -128)
          return t.setUint8(n, 208), t.setInt8(n + 1, e), 2;
        if (e >= -32768)
          return t.setUint8(n, 209), t.setInt16(n + 1, e), 3;
        if (e >= -2147483648)
          return t.setUint8(n, 210), t.setInt32(n + 1, e), 5;
        if (e >= -9223372036854776e3)
          return t.setUint8(n, 211), Ea(t, n + 1, e), 9;
        throw new Error("Number too small -0x" + (-e).toString(16).substr(1));
      }
      if (i === "undefined")
        return s ? 0 : (t.setUint8(n, 212), t.setUint8(n + 1, 0), t.setUint8(n + 2, 0), 3);
      if (e === null)
        return s ? 0 : (t.setUint8(n, 192), 1);
      if (i === "boolean")
        return t.setUint8(n, e ? 195 : 194), 1;
      if (typeof e.toJSON == "function") return un(e.toJSON(), t, n, s);
      if (i === "object") {
        let o, l = 0, u;
        const g = Array.isArray(e);
        if (g ? o = e.length : (u = Or(e, s), o = u.length), o < 16 ? (t.setUint8(n, o | (g ? 144 : 128)), l = 1) : o < 65536 ? (t.setUint8(n, g ? 220 : 222), t.setUint16(n + 1, o), l = 3) : o < 4294967296 && (t.setUint8(n, g ? 221 : 223), t.setUint32(n + 1, o), l = 5), g) for (let p = 0; p < o; p++) l += un(e[p], t, n + l, s);
        else if (u) for (let p = 0; p < o; p++) {
          const w = u[p];
          l += un(w, t, n + l), l += un(e[w], t, n + l, s);
        }
        return l;
      }
      if (i === "function") return 0;
      throw new Error("Unknown type " + i);
    }
    function dn(e, t) {
      const n = typeof e;
      if (n === "string") {
        const s = pi(e);
        if (s < 32) return 1 + s;
        if (s < 256) return 2 + s;
        if (s < 65536) return 3 + s;
        if (s < 4294967296) return 5 + s;
      }
      if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
        const s = e.byteLength;
        if (s < 256) return 2 + s;
        if (s < 65536) return 3 + s;
        if (s < 4294967296) return 5 + s;
      }
      if (typeof e == "number") {
        if (Math.floor(e) !== e) return 9;
        if (e >= 0) {
          if (e < 128) return 1;
          if (e < 256) return 2;
          if (e < 65536) return 3;
          if (e < 4294967296) return 5;
          if (e < 18446744073709552e3) return 9;
          throw new Error("Number too big 0x" + e.toString(16));
        }
        if (e >= -32) return 1;
        if (e >= -128) return 2;
        if (e >= -32768) return 3;
        if (e >= -2147483648) return 5;
        if (e >= -9223372036854776e3) return 9;
        throw new Error("Number too small -0x" + e.toString(16).substr(1));
      }
      if (n === "boolean") return 1;
      if (e === null) return t ? 0 : 1;
      if (e === void 0) return t ? 0 : 3;
      if (typeof e.toJSON == "function") return dn(e.toJSON(), t);
      if (n === "object") {
        let s, i = 0;
        if (Array.isArray(e)) {
          s = e.length;
          for (let o = 0; o < s; o++) i += dn(e[o], t);
        } else {
          const o = Or(e, t);
          s = o.length;
          for (let l = 0; l < s; l++) {
            const u = o[l];
            i += dn(u) + dn(e[u], t);
          }
        }
        if (s < 16) return 1 + i;
        if (s < 65536) return 3 + i;
        if (s < 4294967296) return 5 + i;
        throw new Error("Array or object too long 0x" + s.toString(16));
      }
      if (n === "function") return 0;
      throw new Error("Unknown type " + n);
    }
    var yi = {
      encode: Ia,
      decode: Na,
      inspect: ka,
      utf8Write: hn,
      utf8Read: Cr,
      utf8ByteCount: pi
    };
    function Ua(e, t) {
      return !!t.get("x-ably-errorcode");
    }
    function Da(e, t) {
      if (Ua(e, t)) return e.error && _.fromWireValues(e.error);
    }
    function Ba(e) {
      const t = {};
      return e.forEach((n, s) => {
        t[s] = n;
      }), t;
    }
    async function qa(e, t, n, s, i, o) {
      const l = new Headers(s || {}), u = e ? e.toUpperCase() : ae(o) ? "GET" : "POST", g = new AbortController();
      let p;
      const w = new Promise((v) => {
        p = setTimeout(() => {
          g.abort(), v({ error: new se("Request timed out", null, 408) });
        }, t ? t.options.timeouts.httpRequestTimeout : E.TIMEOUTS.httpRequestTimeout);
      }), C = {
        method: u,
        headers: l,
        body: o,
        signal: g.signal
      };
      m.Config.isWebworker || (C.credentials = l.has("authorization") ? "include" : "same-origin");
      const O = (async () => {
        try {
          const v = new URLSearchParams(i || {});
          v.set("rnd", st());
          const I = n + "?" + v, T = await rt().fetch(I, C);
          if (clearTimeout(p), T.status == 204) return {
            error: null,
            statusCode: T.status
          };
          const L = T.headers.get("Content-Type");
          let D;
          L && L.indexOf("application/x-msgpack") > -1 ? D = await T.arrayBuffer() : L && L.indexOf("application/json") > -1 ? D = await T.json() : D = await T.text();
          const G = !!L && L.indexOf("application/x-msgpack") === -1, F = Ba(T.headers);
          return T.ok ? {
            error: null,
            body: D,
            headers: F,
            unpacked: G,
            statusCode: T.status
          } : {
            error: Da(D, T.headers) || new se("Error response received from server: " + T.status + " body was: " + m.Config.inspect(D), null, T.status),
            body: D,
            headers: F,
            unpacked: G,
            statusCode: T.status
          };
        } catch (v) {
          return clearTimeout(p), { error: v };
        }
      })();
      return Promise.race([w, O]);
    }
    var ja = {
      XHRRequest: vr,
      FetchRequest: qa
    }, Ar = ha(_r, dr);
    m.Crypto = Ar, m.BufferUtils = dr, m.Http = mr, m.Config = _r, m.Transports = Sa, m.WebStorage = yr;
    for (const e of [si, li])
      e.Crypto = Ar, e._MsgPack = yi;
    mr.bundledRequestImplementations = ja, a.initLogHandlers(), m.Defaults = js(Ta), m.Config.agent && (m.Defaults.agent += " " + m.Config.agent);
    var Ga = {
      ErrorInfo: _,
      Rest: si,
      Realtime: li,
      msgpack: yi,
      makeProtocolMessageFromDeserialized: tr
    };
    if (typeof f.exports == "object" && typeof h == "object") {
      var Ha = (e, t, n, s) => {
        if (t && typeof t == "object" || typeof t == "function")
          for (let i of Object.getOwnPropertyNames(t)) !Object.prototype.hasOwnProperty.call(e, i) && i !== n && Object.defineProperty(e, i, {
            get: () => t[i],
            enumerable: !(s = Object.getOwnPropertyDescriptor(t, i)) || s.enumerable
          });
        return e;
      };
      f.exports = Ha(f.exports, h);
    }
    return f.exports;
  });
})), N = /* @__PURE__ */ Ka(Qa(), 1), U = /* @__PURE__ */ ((r) => (r[r.BadRequest = 4e4] = "BadRequest", r[r.InvalidArgument = 40003] = "InvalidArgument", r[r.InvalidClientId = 40012] = "InvalidClientId", r[r.ResourceDisposed = 40014] = "ResourceDisposed", r[r.MessageRejectedByBeforePublishRule = 42211] = "MessageRejectedByBeforePublishRule", r[r.MessageRejectedByModeration = 42213] = "MessageRejectedByModeration", r[r.Disconnected = 80003] = "Disconnected", r[r.PresenceAutoReentryFailed = 91004] = "PresenceAutoReentryFailed", r[r.RoomDiscontinuity = 102100] = "RoomDiscontinuity", r[r.RoomInInvalidState = 102112] = "RoomInInvalidState", r[r.RoomReleasedBeforeOperationCompleted = 102106] = "RoomReleasedBeforeOperationCompleted", r[r.RoomExistsWithDifferentOptions = 102107] = "RoomExistsWithDifferentOptions", r[r.FeatureNotEnabledInRoom = 102108] = "FeatureNotEnabledInRoom", r[r.ListenerNotSubscribed = 102109] = "ListenerNotSubscribed", r[r.ChannelSerialNotDefined = 102110] = "ChannelSerialNotDefined", r[r.ChannelOptionsCannotBeModified = 102111] = "ChannelOptionsCannotBeModified", r[r.OperationSerializationFailed = 102113] = "OperationSerializationFailed", r[r.ReactHookMustBeUsedWithinProvider = 102200] = "ReactHookMustBeUsedWithinProvider", r[r.ReactComponentUnmounted = 102201] = "ReactComponentUnmounted", r[r.PresenceFetchFailed = 102202] = "PresenceFetchFailed", r))(U || {}), Xa = class {
  constructor(r, c) {
    this._realtime = r, this._logger = c;
  }
  get() {
    const r = this._realtime.auth.clientId;
    if (!r) throw this._logger.error("unable to get client id; client id is not set", { clientId: r }), new N.ErrorInfo("unable to get client id; client id is not set", U.InvalidClientId, 400);
    return r;
  }
}, Wr = /* @__PURE__ */ ((r) => (r.Trace = "trace", r.Debug = "debug", r.Info = "info", r.Warn = "warn", r.Error = "error", r.Silent = "silent", r))(Wr || {}), Ya = (r, c, h) => {
  const f = h ? `, context: ${JSON.stringify(h)}` : "", b = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${c.valueOf().toUpperCase()} ably-chat: ${r}${f}`;
  switch (c) {
    case "trace":
    case "debug":
      console.log(b);
      break;
    case "info":
      console.info(b);
      break;
    case "warn":
      console.warn(b);
      break;
    case "error":
      console.error(b);
  }
}, Za = (r) => {
  const c = r.logHandler ?? Ya;
  return new ec(c, r.logLevel);
}, Tr = /* @__PURE__ */ new Map([
  ["trace", 0],
  ["debug", 1],
  ["info", 2],
  ["warn", 3],
  ["error", 4],
  ["silent", 5]
]), ec = class Fr {
  constructor(c, h, f) {
    this._handler = c, this._context = f;
    const b = Tr.get(h);
    if (b === void 0) throw new N.ErrorInfo(`unable to create logger; invalid log level: ${h}`, U.InvalidArgument, 400);
    this._levelNumber = b;
  }
  trace(c, h) {
    this._write(c, "trace", 0, h);
  }
  debug(c, h) {
    this._write(c, "debug", 1, h);
  }
  info(c, h) {
    this._write(c, "info", 2, h);
  }
  warn(c, h) {
    this._write(c, "warn", 3, h);
  }
  error(c, h) {
    this._write(c, "error", 4, h);
  }
  withContext(c) {
    const h = [...Tr.entries()].find(([, f]) => f === this._levelNumber)?.[0] ?? "error";
    return new Fr(this._handler, h, this._mergeContext(c));
  }
  _write(c, h, f, b) {
    f >= this._levelNumber && this._handler(c, h, this._mergeContext(b));
  }
  _mergeContext(c) {
    return this._context ? c ? {
      ...this._context,
      ...c
    } : this._context : c ?? void 0;
  }
}, kr = {
  logLevel: Wr.Error,
  idempotentRestPublishing: !1
}, tc = (r) => (r = r ?? {}, {
  ...r,
  logLevel: r.logLevel ?? kr.logLevel,
  idempotentRestPublishing: r.idempotentRestPublishing ?? kr.idempotentRestPublishing
});
function $e(r, c, h) {
  if ((Array.isArray(c) || typeof c == "string") && h) return r.on(c, h), () => {
    r.off(h);
  };
  if (typeof c == "function") return r.on(c), () => {
    r.off(c);
  };
  throw new TypeError("Invalid arguments passed to on()");
}
function nc(r, c, h) {
  if (h) return r.once(c, h), () => {
    r.off(h);
  };
  throw new TypeError("Invalid arguments passed to once()");
}
function gt(r, c, h) {
  if ((Array.isArray(c) || typeof c == "string") && h) {
    const f = r.subscribe(c, h);
    return () => {
      f.then(() => {
        r.unsubscribe(h);
      }).catch((b) => {
        console.error("Error subscribing to events:", b);
      });
    };
  } else if (typeof c == "function") {
    const f = r.subscribe(c);
    return () => {
      f.then(() => {
        r.unsubscribe(c);
      }).catch((b) => {
        console.error("Error subscribing to events:", b);
      });
    };
  } else throw new TypeError("Invalid arguments passed to subscribe()");
}
var sc = N.Realtime.EventEmitter, Me = class extends sc {
}, Se = (r) => (...c) => r(...c), Qe = (r) => {
  const c = r, h = Object.values(c.events).flat().length + c.any.length + Object.values(c.eventsOnce).flat().length + c.anyOnce.length;
  return h ? h > 0 : !1;
}, ic = class {
  constructor(r, c) {
    this._status = "initialized", this._emitter = new Me(), this._logger = c, this._status = this._mapAblyStatusToChat(r.connection.state), this._error = r.connection.errorReason;
    const h = (f) => {
      const b = this._mapAblyStatusToChat(f.current);
      if (b === this._status) return;
      const S = {
        current: b,
        previous: this._status,
        error: f.reason,
        retryIn: f.retryIn
      };
      this._applyStatusChange(S);
    };
    this._clearAblyConnectionListener = $e(r.connection, h);
  }
  get status() {
    return this._status;
  }
  get error() {
    return this._error;
  }
  onStatusChange(r) {
    const c = Se(r);
    return this._emitter.on(c), { off: () => {
      this._emitter.off(c);
    } };
  }
  dispose() {
    this._logger.trace("DefaultConnection.dispose();"), this._clearAblyConnectionListener(), this._emitter.off();
  }
  hasListeners() {
    return Qe(this._emitter);
  }
  _applyStatusChange(r) {
    this._status = r.current, this._error = r.error, this._logger.info("Connection state changed", r), this._emitter.emit(r.current, r);
  }
  _mapAblyStatusToChat(r) {
    switch (r) {
      case "initialized":
        return "initialized";
      case "connecting":
        return "connecting";
      case "connected":
        return "connected";
      case "disconnected":
        return "disconnected";
      case "suspended":
        return "suspended";
      case "closing":
        return "closing";
      case "closed":
        return "closed";
      case "failed":
        return "failed";
      default:
        return this._logger.error("DefaultConnection._mapAblyStatusToChat(); unknown connection state", { status: r }), "failed";
    }
  }
}, Vr = () => Math.random().toString(36).slice(2), rc = 9, oc = () => {
  const r = new Uint8Array(rc);
  crypto.getRandomValues(r);
  const c = r.toBase64;
  if (typeof c == "function") return c.call(r);
  let h = "";
  for (const f of r) h += String.fromCodePoint(f);
  return btoa(h);
}, Ir = Object.prototype.hasOwnProperty;
function Mr(r, c, h) {
  for (h of r.keys()) if (bn(h, c)) return h;
}
function bn(r, c) {
  var h, f, b;
  if (r === c) return !0;
  if (r && c && (h = r.constructor) === c.constructor) {
    if (h === Date) return r.getTime() === c.getTime();
    if (h === RegExp) return r.toString() === c.toString();
    if (h === Array) {
      if ((f = r.length) === c.length) for (; f-- && bn(r[f], c[f]); ) ;
      return f === -1;
    }
    if (h === Set) {
      if (r.size !== c.size) return !1;
      for (f of r) if (b = f, b && typeof b == "object" && (b = Mr(c, b), !b) || !c.has(b)) return !1;
      return !0;
    }
    if (h === Map) {
      if (r.size !== c.size) return !1;
      for (f of r) if (b = f[0], b && typeof b == "object" && (b = Mr(c, b), !b) || !bn(f[1], c.get(b))) return !1;
      return !0;
    }
    if (h === ArrayBuffer) r = new Uint8Array(r), c = new Uint8Array(c);
    else if (h === DataView) {
      if ((f = r.byteLength) === c.byteLength) for (; f-- && r.getInt8(f) === c.getInt8(f); ) ;
      return f === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((f = r.byteLength) === c.byteLength) for (; f-- && r[f] === c[f]; ) ;
      return f === -1;
    }
    if (!h || typeof r == "object") {
      f = 0;
      for (h in r) if (Ir.call(r, h) && ++f && !Ir.call(c, h) || !(h in c) || !bn(r[h], c[h])) return !1;
      return Object.keys(c).length === f;
    }
  }
  return r !== r && c !== c;
}
var Je = /* @__PURE__ */ ((r) => (r.Created = "message.created", r.Updated = "message.updated", r.Deleted = "message.deleted", r))(Je || {}), zr = /* @__PURE__ */ ((r) => (r.ChatMessage = "chat.message", r))(zr || {}), $r = /* @__PURE__ */ ((r) => (r.Occupancy = "[meta]occupancy", r))($r || {}), Ke = /* @__PURE__ */ ((r) => (r.MessageCreate = "message.create", r.MessageUpdate = "message.update", r.MessageDelete = "message.delete", r))(Ke || {}), Ae = /* @__PURE__ */ ((r) => (r.Started = "typing.started", r.Stopped = "typing.stopped", r))(Ae || {}), ut = /* @__PURE__ */ ((r) => (r.SetChanged = "typing.set.changed", r))(ut || {}), Si = /* @__PURE__ */ ((r) => (r.Reaction = "roomReaction", r))(Si || {}), Ti = /* @__PURE__ */ ((r) => (r.Reaction = "reaction", r))(Ti || {}), dt = /* @__PURE__ */ ((r) => (r.Unique = "unique", r.Distinct = "distinct", r.Multiple = "multiple", r))(dt || {}), ws = /* @__PURE__ */ ((r) => (r.Unique = "reaction:unique.v1", r.Distinct = "reaction:distinct.v1", r.Multiple = "reaction:multiple.v1", r))(ws || {}), ac = {
  "reaction:unique.v1": "unique",
  "reaction:distinct.v1": "distinct",
  "reaction:multiple.v1": "multiple"
}, xt = /* @__PURE__ */ ((r) => (r.Create = "reaction.create", r.Delete = "reaction.delete", r))(xt || {}), vn = /* @__PURE__ */ ((r) => (r.Summary = "reaction.summary", r))(vn || {}), ki = /* @__PURE__ */ ((r) => (r.Updated = "occupancy.updated", r))(ki || {}), yn = /* @__PURE__ */ ((r) => (r.Discontinuity = "room.discontinuity", r))(yn || {}), _s = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Cs = { exports: {} };
Cs.exports;
var Pr;
function lc() {
  return Pr || (Pr = 1, (function(r, c) {
    var h = "__lodash_hash_undefined__", f = 9007199254740991, b = "[object Arguments]", S = "[object Array]", k = "[object Boolean]", B = "[object Date]", q = "[object Error]", J = "[object Function]", W = "[object GeneratorFunction]", ie = "[object Map]", Xe = "[object Number]", K = "[object Object]", ge = "[object Promise]", Rn = "[object RegExp]", Ye = "[object Set]", On = "[object String]", An = "[object Symbol]", ft = "[object WeakMap]", Sn = "[object ArrayBuffer]", Ze = "[object DataView]", m = "[object Float32Array]", Ut = "[object Float64Array]", et = "[object Int8Array]", Tn = "[object Int16Array]", kn = "[object Int32Array]", me = "[object Uint8Array]", a = "[object Uint8ClampedArray]", Ue = "[object Uint16Array]", Dt = "[object Uint32Array]", Bt = /[\\^$.*+?()[\]{}|]/g, _ = /\w*$/, se = /^\[object .+?Constructor\]$/, Ss = /^(?:0|[1-9]\d*)$/, A = {};
    A[b] = A[S] = A[Sn] = A[Ze] = A[k] = A[B] = A[m] = A[Ut] = A[et] = A[Tn] = A[kn] = A[ie] = A[Xe] = A[K] = A[Rn] = A[Ye] = A[On] = A[An] = A[me] = A[a] = A[Ue] = A[Dt] = !0, A[q] = A[J] = A[ft] = !1;
    var tt = typeof _s == "object" && _s && _s.Object === Object && _s, In = typeof self == "object" && self && self.Object === Object && self, oe = tt || In || Function("return this")(), Mn = c && !c.nodeType && c, ae = Mn && r && !r.nodeType && r, Ts = ae && ae.exports === Mn;
    function Pn(d, y) {
      return d.set(y[0], y[1]), d;
    }
    function ks(d, y) {
      return d.add(y), d;
    }
    function Is(d, y) {
      for (var R = -1, P = d ? d.length : 0; ++R < P && y(d[R], R, d) !== !1; ) ;
      return d;
    }
    function En(d, y) {
      for (var R = -1, P = y.length, z = d.length; ++R < P; ) d[z + R] = y[R];
      return d;
    }
    function qt(d, y, R, P) {
      for (var z = -1, re = d ? d.length : 0; ++z < re; ) R = y(R, d[z], z, d);
      return R;
    }
    function Ln(d, y) {
      for (var R = -1, P = Array(d); ++R < d; ) P[R] = y(R);
      return P;
    }
    function xn(d, y) {
      return d?.[y];
    }
    function Nn(d) {
      var y = !1;
      if (d != null && typeof d.toString != "function") try {
        y = !!(d + "");
      } catch {
      }
      return y;
    }
    function De(d) {
      var y = -1, R = Array(d.size);
      return d.forEach(function(P, z) {
        R[++y] = [z, P];
      }), R;
    }
    function pt(d, y) {
      return function(R) {
        return d(y(R));
      };
    }
    function jt(d) {
      var y = -1, R = Array(d.size);
      return d.forEach(function(P) {
        R[++y] = P;
      }), R;
    }
    var Ms = Array.prototype, Un = Function.prototype, Be = Object.prototype, Pe = oe["__core-js_shared__"], mt = (function() {
      var d = /[^.]+$/.exec(Pe && Pe.keys && Pe.keys.IE_PROTO || "");
      return d ? "Symbol(src)_1." + d : "";
    })(), nt = Un.toString, ye = Be.hasOwnProperty, ee = Be.toString, j = RegExp("^" + nt.call(ye).replace(Bt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Gt = Ts ? oe.Buffer : void 0, Ht = oe.Symbol, st = oe.Uint8Array, Dn = pt(Object.getPrototypeOf, Object), Bn = Object.create, ue = Be.propertyIsEnumerable, X = Ms.splice, ce = Object.getOwnPropertySymbols, Wt = Gt ? Gt.isBuffer : void 0, qn = pt(Object.keys, Object), yt = He(oe, "DataView"), qe = He(oe, "Map"), it = He(oe, "Promise"), rt = He(oe, "Set"), _t = He(oe, "WeakMap"), je = He(Object, "create"), bt = Le(yt), jn = Le(qe), ot = Le(it), Z = Le(rt), Gn = Le(_t), Hn = Ht ? Ht.prototype : void 0, Ft = Hn ? Hn.valueOf : void 0;
    function te(d) {
      var y = -1, R = d ? d.length : 0;
      for (this.clear(); ++y < R; ) {
        var P = d[y];
        this.set(P[0], P[1]);
      }
    }
    function Ps() {
      this.__data__ = je ? je(null) : {};
    }
    function Es(d) {
      return this.has(d) && delete this.__data__[d];
    }
    function Vt(d) {
      var y = this.__data__;
      if (je) {
        var R = y[d];
        return R === h ? void 0 : R;
      }
      return ye.call(y, d) ? y[d] : void 0;
    }
    function Wn(d) {
      var y = this.__data__;
      return je ? y[d] !== void 0 : ye.call(y, d);
    }
    function Fn(d, y) {
      var R = this.__data__;
      return R[d] = je && y === void 0 ? h : y, this;
    }
    te.prototype.clear = Ps, te.prototype.delete = Es, te.prototype.get = Vt, te.prototype.has = Wn, te.prototype.set = Fn;
    function _e(d) {
      var y = -1, R = d ? d.length : 0;
      for (this.clear(); ++y < R; ) {
        var P = d[y];
        this.set(P[0], P[1]);
      }
    }
    function Vn() {
      this.__data__ = [];
    }
    function zn(d) {
      var y = this.__data__, R = at(y, d);
      return R < 0 ? !1 : (R == y.length - 1 ? y.pop() : X.call(y, R, 1), !0);
    }
    function Ls(d) {
      var y = this.__data__, R = at(y, d);
      return R < 0 ? void 0 : y[R][1];
    }
    function $n(d) {
      return at(this.__data__, d) > -1;
    }
    function xs(d, y) {
      var R = this.__data__, P = at(R, d);
      return P < 0 ? R.push([d, y]) : R[P][1] = y, this;
    }
    _e.prototype.clear = Vn, _e.prototype.delete = zn, _e.prototype.get = Ls, _e.prototype.has = $n, _e.prototype.set = xs;
    function Te(d) {
      var y = -1, R = d ? d.length : 0;
      for (this.clear(); ++y < R; ) {
        var P = d[y];
        this.set(P[0], P[1]);
      }
    }
    function Ns() {
      this.__data__ = {
        hash: new te(),
        map: new (qe || _e)(),
        string: new te()
      };
    }
    function Us(d) {
      return we(this, d).delete(d);
    }
    function Ds(d) {
      return we(this, d).get(d);
    }
    function vt(d) {
      return we(this, d).has(d);
    }
    function Jn(d, y) {
      return we(this, d).set(d, y), this;
    }
    Te.prototype.clear = Ns, Te.prototype.delete = Us, Te.prototype.get = Ds, Te.prototype.has = vt, Te.prototype.set = Jn;
    function Ee(d) {
      this.__data__ = new _e(d);
    }
    function Bs() {
      this.__data__ = new _e();
    }
    function qs(d) {
      return this.__data__.delete(d);
    }
    function E(d) {
      return this.__data__.get(d);
    }
    function js(d) {
      return this.__data__.has(d);
    }
    function Kn(d, y) {
      var R = this.__data__;
      if (R instanceof _e) {
        var P = R.__data__;
        if (!qe || P.length < 199) return P.push([d, y]), this;
        R = this.__data__ = new Te(P);
      }
      return R.set(d, y), this;
    }
    Ee.prototype.clear = Bs, Ee.prototype.delete = qs, Ee.prototype.get = E, Ee.prototype.has = js, Ee.prototype.set = Kn;
    function Qn(d, y) {
      var R = wt(d) || Xs(d) ? Ln(d.length, String) : [], P = R.length, z = !!P;
      for (var re in d) ye.call(d, re) && (!z || re != "length" && !Y(re, P)) && R.push(re);
      return R;
    }
    function V(d, y, R) {
      var P = d[y];
      (!(ye.call(d, y) && rs(P, R)) || R === void 0 && !(y in d)) && (d[y] = R);
    }
    function at(d, y) {
      for (var R = d.length; R--; ) if (rs(d[R][0], y)) return R;
      return -1;
    }
    function Gs(d, y) {
      return d && ns(y, Ct(y), d);
    }
    function Ge(d, y, R, P, z, re, Re) {
      var le;
      if (P && (le = re ? P(d, z, re, Re) : P(d)), le !== void 0) return le;
      if (!ct(d)) return d;
      var H = wt(d);
      if (H) {
        if (le = Ks(d), !y) return Js(d, le);
      } else {
        var We = Ce(d), cs = We == J || We == W;
        if (Xt(d)) return Yn(d, y);
        if (We == K || We == b || cs && !re) {
          if (Nn(d)) return re ? d : {};
          if (le = Kt(cs ? {} : d), !y) return ve(d, Gs(le, d));
        } else {
          if (!A[We]) return re ? d : {};
          le = Qs(d, We, Ge, y);
        }
      }
      Re || (Re = new Ee());
      var ls = Re.get(d);
      if (ls) return ls;
      if (Re.set(d, le), !H) var hs = R ? Jt(d) : Ct(d);
      return Is(hs || d, function(At, St) {
        hs && (St = At, At = d[St]), V(le, St, Ge(At, y, R, P, St, d, Re));
      }), le;
    }
    function zt(d) {
      return ct(d) ? Bn(d) : {};
    }
    function Hs(d, y, R) {
      var P = y(d);
      return wt(d) ? P : En(P, R(d));
    }
    function Ws(d) {
      return ee.call(d);
    }
    function Xn(d) {
      return !ct(d) || is(d) ? !1 : (Yt(d) || Nn(d) ? j : se).test(Le(d));
    }
    function Fs(d) {
      if (!ne(d)) return qn(d);
      var y = [];
      for (var R in Object(d)) ye.call(d, R) && R != "constructor" && y.push(R);
      return y;
    }
    function Yn(d, y) {
      if (y) return d.slice();
      var R = new d.constructor(d.length);
      return d.copy(R), R;
    }
    function $t(d) {
      var y = new d.constructor(d.byteLength);
      return new st(y).set(new st(d)), y;
    }
    function Zn(d, y) {
      var R = y ? $t(d.buffer) : d.buffer;
      return new d.constructor(R, d.byteOffset, d.byteLength);
    }
    function es(d, y, R) {
      return qt(y ? R(De(d), !0) : De(d), Pn, new d.constructor());
    }
    function Vs(d) {
      var y = new d.constructor(d.source, _.exec(d));
      return y.lastIndex = d.lastIndex, y;
    }
    function ts(d, y, R) {
      return qt(y ? R(jt(d), !0) : jt(d), ks, new d.constructor());
    }
    function zs(d) {
      return Ft ? Object(Ft.call(d)) : {};
    }
    function $s(d, y) {
      var R = y ? $t(d.buffer) : d.buffer;
      return new d.constructor(R, d.byteOffset, d.length);
    }
    function Js(d, y) {
      var R = -1, P = d.length;
      for (y || (y = Array(P)); ++R < P; ) y[R] = d[R];
      return y;
    }
    function ns(d, y, R, P) {
      R || (R = {});
      for (var z = -1, re = y.length; ++z < re; ) {
        var Re = y[z], le = void 0;
        V(R, Re, le === void 0 ? d[Re] : le);
      }
      return R;
    }
    function ve(d, y) {
      return ns(d, ss(d), y);
    }
    function Jt(d) {
      return Hs(d, Ct, ss);
    }
    function we(d, y) {
      var R = d.__data__;
      return M(y) ? R[typeof y == "string" ? "string" : "hash"] : R.map;
    }
    function He(d, y) {
      var R = xn(d, y);
      return Xn(R) ? R : void 0;
    }
    var ss = ce ? pt(ce, Object) : Rt, Ce = Ws;
    (yt && Ce(new yt(/* @__PURE__ */ new ArrayBuffer(1))) != Ze || qe && Ce(new qe()) != ie || it && Ce(it.resolve()) != ge || rt && Ce(new rt()) != Ye || _t && Ce(new _t()) != ft) && (Ce = function(d) {
      var y = ee.call(d), R = y == K ? d.constructor : void 0, P = R ? Le(R) : void 0;
      if (P) switch (P) {
        case bt:
          return Ze;
        case jn:
          return ie;
        case ot:
          return ge;
        case Z:
          return Ye;
        case Gn:
          return ft;
      }
      return y;
    });
    function Ks(d) {
      var y = d.length, R = d.constructor(y);
      return y && typeof d[0] == "string" && ye.call(d, "index") && (R.index = d.index, R.input = d.input), R;
    }
    function Kt(d) {
      return typeof d.constructor == "function" && !ne(d) ? zt(Dn(d)) : {};
    }
    function Qs(d, y, R, P) {
      var z = d.constructor;
      switch (y) {
        case Sn:
          return $t(d);
        case k:
        case B:
          return new z(+d);
        case Ze:
          return Zn(d, P);
        case m:
        case Ut:
        case et:
        case Tn:
        case kn:
        case me:
        case a:
        case Ue:
        case Dt:
          return $s(d, P);
        case ie:
          return es(d, P, R);
        case Xe:
        case On:
          return new z(d);
        case Rn:
          return Vs(d);
        case Ye:
          return ts(d, P, R);
        case An:
          return zs(d);
      }
    }
    function Y(d, y) {
      return y = y ?? f, !!y && (typeof d == "number" || Ss.test(d)) && d > -1 && d % 1 == 0 && d < y;
    }
    function M(d) {
      var y = typeof d;
      return y == "string" || y == "number" || y == "symbol" || y == "boolean" ? d !== "__proto__" : d === null;
    }
    function is(d) {
      return !!mt && mt in d;
    }
    function ne(d) {
      var y = d && d.constructor;
      return d === (typeof y == "function" && y.prototype || Be);
    }
    function Le(d) {
      if (d != null) {
        try {
          return nt.call(d);
        } catch {
        }
        try {
          return d + "";
        } catch {
        }
      }
      return "";
    }
    function Qt(d) {
      return Ge(d, !0, !0);
    }
    function rs(d, y) {
      return d === y || d !== d && y !== y;
    }
    function Xs(d) {
      return as(d) && ye.call(d, "callee") && (!ue.call(d, "callee") || ee.call(d) == b);
    }
    var wt = Array.isArray;
    function os(d) {
      return d != null && Zt(d.length) && !Yt(d);
    }
    function as(d) {
      return en(d) && os(d);
    }
    var Xt = Wt || Ot;
    function Yt(d) {
      var y = ct(d) ? ee.call(d) : "";
      return y == J || y == W;
    }
    function Zt(d) {
      return typeof d == "number" && d > -1 && d % 1 == 0 && d <= f;
    }
    function ct(d) {
      var y = typeof d;
      return !!d && (y == "object" || y == "function");
    }
    function en(d) {
      return !!d && typeof d == "object";
    }
    function Ct(d) {
      return os(d) ? Qn(d) : Fs(d);
    }
    function Rt() {
      return [];
    }
    function Ot() {
      return !1;
    }
    r.exports = Qt;
  })(Cs, Cs.exports)), Cs.exports;
}
var ze = /* @__PURE__ */ cc(lc()), Jr = class _n {
  constructor({ serial: c, clientId: h, text: f, metadata: b, headers: S, userClaim: k, action: B, version: q, timestamp: J, reactions: W }) {
    this.serial = c, this.clientId = h, this.text = f, this.metadata = b, this.headers = S, this.userClaim = k, this.action = B, this.version = q, this.timestamp = J, this.reactions = W, Object.freeze(this.version), Object.freeze(this.reactions), Object.freeze(this.reactions.multiple), Object.freeze(this.reactions.distinct), Object.freeze(this.reactions.unique), Object.freeze(this);
  }
  with(c) {
    if ("serial" in c) return this._getLatestMessageVersion(c);
    if (c.type === Je.Created) throw new N.ErrorInfo("unable to apply message event; unable to apply created event to existing message", U.InvalidArgument, 400);
    if (c.type === vn.Summary) {
      if (c.messageSerial !== this.serial) throw new N.ErrorInfo("unable to apply message event; event is for a different message", U.InvalidArgument, 400);
      const h = {
        unique: ze(c.reactions.unique),
        distinct: ze(c.reactions.distinct),
        multiple: ze(c.reactions.multiple)
      };
      return _n._clone(this, { reactions: h });
    }
    return this._getLatestMessageVersion(c.message);
  }
  _getLatestMessageVersion(c) {
    if (c.serial !== this.serial) throw new N.ErrorInfo("unable to apply message event; event is for a different message", U.InvalidArgument, 400);
    return this.version.serial >= c.version.serial ? this : _n._clone(c, { reactions: this.reactions });
  }
  static _clone(c, h) {
    return new _n({
      serial: h?.serial ?? c.serial,
      clientId: h?.clientId ?? c.clientId,
      text: h?.text ?? c.text,
      metadata: h?.metadata ?? ze(c.metadata),
      headers: h?.headers ?? ze(c.headers),
      userClaim: h?.userClaim ?? c.userClaim,
      action: h?.action ?? c.action,
      version: h?.version ?? ze(c.version),
      timestamp: h?.timestamp ?? c.timestamp,
      reactions: h?.reactions ?? ze(c.reactions)
    });
  }
  copy(c = {}) {
    return _n._clone(this, c);
  }
}, Kr = () => ({
  unique: {},
  distinct: {},
  multiple: {}
}), Cn = (r) => {
  if (!r || typeof r != "object") return {};
  const c = r, h = {};
  return c.headers && typeof c.headers == "object" && (h.headers = c.headers), typeof c.userClaim == "string" && (h.userClaim = c.userClaim), h;
}, hc = (r) => {
  const c = r, h = c.data && typeof c.data == "object" ? c.data : {}, f = Cn(r.extras), b = c.clientId || "", S = h.text || "", k = new Date(c.timestamp || 0), B = c.serial || "", q = h.metadata && typeof h.metadata == "object" ? h.metadata : {}, J = f.headers || {}, W = f.userClaim, ie = {
    ...c.version,
    serial: c.version.serial || B,
    timestamp: new Date(c.version.timestamp || k)
  }, Xe = Object.values(Ke).includes(c.action) ? c.action : Ke.MessageCreate;
  return new Jr({
    serial: B,
    clientId: b,
    text: S,
    metadata: q,
    headers: J,
    userClaim: W,
    action: Xe,
    version: ie,
    timestamp: k,
    reactions: Kr()
  });
}, Nt = (r, c, h) => {
  if (!r) throw new N.ErrorInfo(`unable to ${c}; ${h} must be a non-empty string`, U.InvalidArgument, 400);
}, uc = {
  "annotation.create": xt.Create,
  "annotation.delete": xt.Delete
}, Qr = class {
  constructor(r, c, h, f, b) {
    this._logger = r, this._options = c, this._api = h, this._roomName = f, this._channel = b, this._emitter = new Me(), this._unsubscribeMessageEvents = gt(b, this._processMessageEvent.bind(this)), this._options?.rawMessageReactions && (this._unsubscribeAnnotationEvents = gt(b.annotations, this._processAnnotationEvent.bind(this))), this._defaultType = this._options?.defaultMessageReactionType ?? dt.Distinct;
  }
  _processAnnotationEvent(r) {
    this._logger.trace("MessageReactions._processAnnotationEvent();", { event: r });
    const c = ac[r.type];
    if (!c) {
      this._logger.info("MessageReactions._processAnnotationEvent(); ignoring unknown reaction type", { event: r });
      return;
    }
    const h = uc[r.action];
    if (!h) {
      this._logger.info("MessageReactions._processAnnotationEvent(); ignoring unknown reaction event type", { event: r });
      return;
    }
    const f = r.name ?? "", b = Cn(r.extras), S = {
      type: h,
      timestamp: new Date(r.timestamp),
      reaction: {
        messageSerial: r.messageSerial,
        type: c,
        name: f,
        clientId: r.clientId ?? "",
        userClaim: b.userClaim
      }
    };
    r.count ? S.reaction.count = r.count : h === xt.Create && c === dt.Multiple && (S.reaction.count = 1), this._emitter.emit(h, S);
  }
  _processMessageEvent(r) {
    if (this._logger.trace("MessageReactions._processMessageEvent();", { event: r }), r.action !== "message.summary") return;
    const c = r.serial, h = r.annotations.summary, f = h[ws.Unique] ?? {}, b = h[ws.Distinct] ?? {}, S = h[ws.Multiple] ?? {};
    this._emitter.emit(vn.Summary, {
      type: vn.Summary,
      messageSerial: c,
      reactions: {
        unique: f,
        distinct: b,
        multiple: S
      }
    });
  }
  async send(r, c) {
    this._logger.trace("MessageReactions.send();", {
      messageSerial: r,
      params: c
    }), Nt(r, "send message reaction", "messageSerial");
    let { type: h, count: f } = c;
    h || (h = this._defaultType), h === dt.Multiple && !f && (f = 1);
    const b = {
      type: h,
      name: c.name
    };
    return f && (b.count = f), this._api.sendMessageReaction(this._roomName, r, b);
  }
  async delete(r, c) {
    this._logger.trace("MessageReactions.delete();", {
      messageSerial: r,
      params: c
    }), Nt(r, "delete message reaction", "messageSerial");
    let h = c?.type;
    if (h || (h = this._defaultType), h !== dt.Unique && !c?.name) throw new N.ErrorInfo(`unable to delete reaction of type ${h}; name not specified`, U.InvalidArgument, 400);
    const f = { type: h };
    return h !== dt.Unique && (f.name = c?.name), this._api.deleteMessageReaction(this._roomName, r, f);
  }
  subscribe(r) {
    this._logger.trace("MessageReactions.subscribe();");
    const c = Se(r);
    return this._emitter.on(vn.Summary, c), { unsubscribe: () => {
      this._emitter.off(c);
    } };
  }
  subscribeRaw(r) {
    if (this._logger.trace("MessageReactions.subscribeRaw();"), !this._options?.rawMessageReactions) throw new N.ErrorInfo("unable to subscribe to message reactions; raw message reactions are not enabled", U.FeatureNotEnabledInRoom, 400);
    const c = Se(r);
    return this._emitter.on([xt.Create, xt.Delete], c), { unsubscribe: () => {
      this._emitter.off(c);
    } };
  }
  static channelOptionMerger(r) {
    return (c) => (c.modes.includes("ANNOTATION_PUBLISH") || c.modes.push("ANNOTATION_PUBLISH"), r.messages.rawMessageReactions && !c.modes.includes("ANNOTATION_SUBSCRIBE") && c.modes.push("ANNOTATION_SUBSCRIBE"), c);
  }
  async clientReactions(r, c) {
    return this._logger.trace("MessageReactions.clientReactions();", {
      messageSerial: r,
      clientId: c
    }), Nt(r, "get client reactions", "messageSerial"), this._api.getClientReactions(this._roomName, r, c);
  }
  dispose() {
    this._logger.trace("DefaultMessageReactions.dispose();"), this._emitter.off(), this._unsubscribeMessageEvents(), this._unsubscribeAnnotationEvents?.(), this._logger.debug("DefaultMessageReactions.dispose(); disposed successfully");
  }
  hasListeners() {
    return Qe(this._emitter);
  }
}, wn = (r) => {
  const c = {
    ...Kr(),
    ...r.reactions
  };
  for (const S of ["unique", "distinct"]) {
    const k = c[S];
    for (const B of Object.keys(k)) {
      const q = k[B];
      q && !q.clipped && (q.clipped = !1);
    }
  }
  const h = c.multiple;
  for (const S of Object.keys(h)) {
    const k = h[S];
    k && (k.clipped || (k.clipped = !1), k.totalClientIds || (k.totalClientIds = 0));
  }
  const f = Object.values(Ke).includes(r.action) ? r.action : Ke.MessageCreate, b = {
    serial: r.version.serial,
    timestamp: new Date(r.version.timestamp),
    clientId: r.version.clientId,
    description: r.version.description,
    metadata: r.version.metadata
  };
  return new Jr({
    serial: r.serial,
    clientId: r.clientId,
    text: r.text,
    metadata: r.metadata,
    headers: r.headers,
    userClaim: r.userClaim,
    action: f,
    version: b,
    timestamp: new Date(r.timestamp),
    reactions: c
  });
}, dc = /* @__PURE__ */ new Map([
  [Ke.MessageCreate, Je.Created],
  [Ke.MessageUpdate, Je.Updated],
  [Ke.MessageDelete, Je.Deleted]
]), Ii = /* @__PURE__ */ ((r) => (r.OldestFirst = "oldestFirst", r.NewestFirst = "newestFirst", r))(Ii || {}), gc = class {
  constructor(r, c, h, f, b) {
    this._pendingPromiseRejecters = /* @__PURE__ */ new Set(), this._pendingAttachListeners = /* @__PURE__ */ new Set(), this._emitter = new Me(), this._roomName = r, this._options = c, this._channel = h, this._chatApi = f, this._logger = b, this._listenerSubscriptionPoints = /* @__PURE__ */ new Map(), this._reactions = new Qr(this._logger, c, this._chatApi, this._roomName, this._channel);
    const S = this._processEvent.bind(this), k = (q) => {
      this._handleAttach(q.resumed);
    }, B = (q) => {
      q.current === "attached" && q.previous === "attached" && this._handleAttach(q.resumed);
    };
    this._unsubscribeMessageEvents = gt(this._channel, [zr.ChatMessage], S), this._offChannelAttached = $e(this._channel, "attached", k), this._offChannelUpdate = $e(this._channel, "update", B);
  }
  get reactions() {
    return this._reactions;
  }
  async _getBeforeSubscriptionStart(r, c) {
    this._logger.trace("DefaultSubscriptionManager.getBeforeSubscriptionStart();");
    const h = this._listenerSubscriptionPoints.get(r);
    if (h === void 0) throw this._logger.error("DefaultSubscriptionManager.getBeforeSubscriptionStart(); listener has not been subscribed"), new N.ErrorInfo("unable to query history; listener has not been subscribed", U.ListenerNotSubscribed, 400);
    const f = await h;
    return this._chatApi.history(this._roomName, {
      ...c,
      orderBy: "newestFirst",
      ...f
    });
  }
  _handleAttach(r) {
    if (this._logger.trace("DefaultSubscriptionManager.handleAttach();"), r) return;
    const c = this._subscribeAtChannelAttach();
    for (const [h] of this._listenerSubscriptionPoints.entries()) this._listenerSubscriptionPoints.set(h, c);
  }
  async _resolveSubscriptionStart() {
    const r = this._getChannelProperties();
    if (r.state === "attached") {
      if (r.properties.channelSerial) return { fromSerial: r.properties.channelSerial };
      throw this._logger.error("DefaultSubscriptionManager.handleAttach(); channelSerial is undefined"), new N.ErrorInfo("unable to query messages; channel is attached but channelSerial is not defined", U.ChannelSerialNotDefined, 500);
    }
    return this._subscribeAtChannelAttach();
  }
  _getChannelProperties() {
    return this._channel;
  }
  async _subscribeAtChannelAttach() {
    const r = this._getChannelProperties();
    return new Promise((c, h) => {
      this._pendingPromiseRejecters.add(h);
      const f = () => {
        this._pendingPromiseRejecters.delete(h);
      };
      if (r.state === "attached") {
        this._logger.debug("Messages._subscribeAtChannelAttach(); channel is attached already, using attachSerial", { attachSerial: r.properties.attachSerial }), f(), r.properties.attachSerial ? c({ fromSerial: r.properties.attachSerial }) : (this._logger.error("DefaultSubscriptionManager.handleAttach(); attachSerial is undefined"), f(), h(new N.ErrorInfo("unable to query messages; channel is attached but attachSerial is not defined", U.ChannelSerialNotDefined, 500)));
        return;
      }
      const b = nc(r, "attached", () => {
        this._logger.debug("Messages._subscribeAtChannelAttach(); channel is now attached, using attachSerial", { attachSerial: r.properties.attachSerial }), f(), this._pendingAttachListeners.delete(b), r.properties.attachSerial ? c({ fromSerial: r.properties.attachSerial }) : (this._logger.error("DefaultSubscriptionManager.handleAttach(); attachSerial is undefined"), h(new N.ErrorInfo("unable to query messages; channel is attached but attachSerial is not defined", U.ChannelSerialNotDefined, 500)));
      });
      this._pendingAttachListeners.add(b);
    });
  }
  async history(r) {
    return this._logger.trace("Messages.query();"), this._chatApi.history(this._roomName, r);
  }
  async get(r) {
    return this._logger.trace("Messages.get();", { serial: r }), this._chatApi.getMessage(this._roomName, r);
  }
  async send(r) {
    this._logger.trace("Messages.send();", { params: r });
    const { text: c, metadata: h, headers: f } = r, b = await this._chatApi.sendMessage(this._roomName, {
      text: c,
      headers: f,
      metadata: h
    });
    return wn(b);
  }
  async delete(r, c) {
    this._logger.trace("Messages.delete();", {
      serial: r,
      details: c
    }), Nt(r, "delete message", "serial");
    const h = await this._chatApi.deleteMessage(this._roomName, r, c);
    return wn(h);
  }
  async update(r, c, h) {
    this._logger.trace("Messages.update();", {
      serial: r,
      updateParams: c,
      details: h
    }), Nt(r, "update message", "serial");
    const f = await this._chatApi.updateMessage(this._roomName, r, {
      message: {
        text: c.text,
        ...c.metadata && { metadata: c.metadata },
        ...c.headers && { headers: c.headers }
      },
      ...h
    });
    return this._logger.debug("Messages.update(); message update successfully", { updateParams: c }), wn(f);
  }
  async getVersions(r) {
    return this._logger.trace("Messages.getVersions();", { serial: r }), Nt(r, "get message getVersions", "serial"), this._chatApi.getMessageVersions(this._roomName, r);
  }
  subscribe(r) {
    this._logger.trace("Messages.subscribe();");
    const c = Se(r);
    this._emitter.on([
      Je.Created,
      Je.Updated,
      Je.Deleted
    ], c);
    const h = this._resolveSubscriptionStart();
    return h.catch(() => {
      this._logger.debug("Messages.subscribe(); subscription point was not resolved before the room was released");
    }), this._listenerSubscriptionPoints.set(c, h), {
      unsubscribe: () => {
        this._listenerSubscriptionPoints.delete(c), this._logger.trace("Messages.unsubscribe();"), this._emitter.off(c);
      },
      historyBeforeSubscribe: async (f) => this._getBeforeSubscriptionStart(c, f)
    };
  }
  _processEvent(r) {
    this._logger.trace("Messages._processEvent();", { channelEventMessage: r });
    const { action: c } = r, h = dc.get(c);
    if (!h) {
      this._logger.debug("Messages._processEvent(); received unknown message action", { action: c });
      return;
    }
    const f = hc(r);
    this._emitter.emit(h, {
      type: h,
      message: f
    });
  }
  dispose() {
    this._logger.trace("DefaultMessages.dispose();"), this._emitter.off();
    const r = new N.ErrorInfo("unable to query messages; room has been disposed", U.ResourceDisposed, 400);
    for (const c of this._pendingPromiseRejecters) try {
      c(r);
    } catch {
    }
    this._pendingPromiseRejecters.clear(), this._listenerSubscriptionPoints.clear();
    for (const c of this._pendingAttachListeners) c();
    this._pendingAttachListeners.clear(), this._unsubscribeMessageEvents(), this._offChannelAttached(), this._offChannelUpdate(), this._reactions.dispose(), this._logger.debug("DefaultMessages.dispose(); disposed successfully");
  }
  hasListeners() {
    return Qe(this._emitter);
  }
}, fc = class {
  constructor(r, c, h) {
    this._apiProtocolVersion = 4, this._realtime = r, this._logger = c, this._idempotentRestPublishing = h;
  }
  async history(r, c) {
    const h = { ...c };
    if (c.orderBy) switch (c.orderBy) {
      case Ii.NewestFirst:
        h.direction = "backwards";
        break;
      case Ii.OldestFirst:
        h.direction = "forwards";
        break;
      default:
        throw new N.ErrorInfo(`unable to query messages; invalid orderBy value: ${c.orderBy}`, U.InvalidArgument, 400);
    }
    const f = await this._makeAuthorizedPaginatedRequest(this._roomUrl(r, "/messages"), h);
    return this._recursivePaginateMessages(f);
  }
  _recursivePaginateMessages(r) {
    const c = {};
    return c.items = r.items.map((h) => wn(h)), c.next = async () => {
      const h = await r.next();
      return h ? this._recursivePaginateMessages(h) : null;
    }, c.first = async () => {
      const h = await r.first();
      return this._recursivePaginateMessages(h);
    }, c.current = async () => {
      const h = await r.current();
      return this._recursivePaginateMessages(h);
    }, c.hasNext = () => r.hasNext(), c.isLast = () => r.isLast(), {
      ...r,
      ...c
    };
  }
  async getMessage(r, c) {
    const h = await this._makeAuthorizedRequest(this._messageUrl(r, c), "GET");
    return wn(h);
  }
  async deleteMessage(r, c, h) {
    const f = {
      ...h?.description && { description: h.description },
      ...h?.metadata && { metadata: h.metadata }
    };
    return this._makeAuthorizedRequest(this._messageUrl(r, c, "/delete"), "POST", f, this._idempotencyQueryParams());
  }
  async sendMessage(r, c) {
    const h = {
      text: c.text,
      ...c.metadata && { metadata: c.metadata },
      ...c.headers && { headers: c.headers }
    };
    return this._makeAuthorizedRequest(this._roomUrl(r, "/messages"), "POST", h, this._idempotencyQueryParams());
  }
  async updateMessage(r, c, h) {
    return this._makeAuthorizedRequest(this._messageUrl(r, c), "PUT", h, this._idempotencyQueryParams());
  }
  _idempotencyQueryParams() {
    return this._idempotentRestPublishing ? { idempotencyKey: oc() } : void 0;
  }
  async sendMessageReaction(r, c, h) {
    return this._makeAuthorizedRequest(this._messageUrl(r, c, "/reactions"), "POST", h);
  }
  async deleteMessageReaction(r, c, h) {
    return this._makeAuthorizedRequest(this._messageUrl(r, c, "/reactions"), "DELETE", void 0, h);
  }
  async getClientReactions(r, c, h) {
    const f = h ? { forClientId: h } : {};
    return this._makeAuthorizedRequest(this._messageUrl(r, c, "/client-reactions"), "GET", void 0, f);
  }
  async getMessageVersions(r, c) {
    const h = await this._makeAuthorizedPaginatedRequest(this._messageUrl(r, c, "/versions"));
    return this._recursivePaginateMessages(h);
  }
  async getOccupancy(r) {
    return this._makeAuthorizedRequest(this._roomUrl(r, "/occupancy"), "GET");
  }
  async _makeAuthorizedRequest(r, c, h, f) {
    return (await this._doRequest(r, c, f, h)).items[0];
  }
  async _makeAuthorizedPaginatedRequest(r, c, h) {
    return this._doRequest(r, "GET", c, h);
  }
  async _doRequest(r, c, h, f) {
    const b = await this._realtime.request(c, r, this._apiProtocolVersion, h, f);
    if (!b.success) throw this._logger.error("ChatApi._doRequest(); failed to make request", {
      url: r,
      method: c,
      statusCode: b.statusCode,
      errorCode: b.errorCode,
      errorMessage: b.errorMessage,
      errorDetail: b.errorDetail
    }), new N.ErrorInfo(b.errorMessage, b.errorCode, b.statusCode, void 0, b.errorDetail);
    return b;
  }
  _roomUrl(r, c = "") {
    return `/chat/v4/rooms/${encodeURIComponent(r)}${c}`;
  }
  _messageUrl(r, c, h = "") {
    return `${this._roomUrl(r, "/messages")}/${encodeURIComponent(c)}${h}`;
  }
}, pc = (r) => `${r}::$chat`, Os = "1.4.0", Xr = `chat-js/${Os}`, mc = `chat-react/${Os}`, Yr = ["PUBLISH", "SUBSCRIBE"], yc = {
  params: { agent: Xr },
  attachOnSubscribe: !1,
  modes: Yr
}, _c = {
  params: { agent: `${Xr} ${mc}` },
  attachOnSubscribe: !1,
  modes: Yr
}, bc = class {
  constructor(r, c, h, f) {
    h.trace("ChannelManager();", { isReact: f }), this._realtime = c, this._logger = h, this._isReact = f, this._registeredOptions = this._defaultChannelOptions(), this._channelId = pc(r);
  }
  mergeOptions(r) {
    if (this._logger.trace("ChannelManager.mergeOptions();"), this._resolvedChannel) throw this._logger.error("unable to modify channel options; channel has already been requested"), new N.ErrorInfo("unable to modify channel options; channel has already been requested", U.ChannelOptionsCannotBeModified, 400);
    this._registeredOptions = r(this._registeredOptions);
  }
  get() {
    return this._logger.trace("ChannelManager.get();"), this._resolvedChannel ??= this._realtime.channels.get(this._channelId, this._registeredOptions), this._resolvedChannel;
  }
  release() {
    this._logger.trace("ChannelManager.release();", { channelId: this._channelId }), this._resolvedChannel && this._realtime.channels.release(this._channelId);
  }
  _defaultChannelOptions() {
    this._logger.trace("ChannelManager._defaultChannelOptions();");
    const r = this._isReact ? _c : yc;
    return this._logger.trace(this._isReact ? "using react channel options" : "using default channel options"), {
      ...r,
      modes: [...r.modes ?? []]
    };
  }
}, vc = (r) => {
  const c = r;
  let h = 0, f = 0;
  if (!c.data || typeof c.data != "object") return {
    connections: h,
    presenceMembers: f
  };
  const { metrics: b } = c.data;
  return !b || typeof b != "object" ? {
    connections: h,
    presenceMembers: f
  } : (typeof b.connections == "number" && Number.isInteger(b.connections) && (h = b.connections), typeof b.presenceMembers == "number" && Number.isInteger(b.presenceMembers) && (f = b.presenceMembers), {
    connections: h,
    presenceMembers: f
  });
}, Er = class {
  constructor(r, c, h, f, b) {
    this._emitter = new Me(), this._roomName = r, this._channel = c, this._chatApi = h, this._logger = f, this._roomOptions = b;
    const S = this._internalOccupancyListener.bind(this);
    this._roomOptions.occupancy.enableEvents ? (this._logger.debug("DefaultOccupancy(); subscribing to occupancy events"), this._unsubscribeOccupancyEvents = gt(this._channel, [$r.Occupancy], S)) : this._unsubscribeOccupancyEvents = () => {
    };
  }
  subscribe(r) {
    if (this._logger.trace("Occupancy.subscribe();"), !this._roomOptions.occupancy.enableEvents) throw new N.ErrorInfo("unable to subscribe to occupancy; occupancy events are not enabled in room options", U.FeatureNotEnabledInRoom, 400);
    const c = Se(r);
    return this._emitter.on(c), { unsubscribe: () => {
      this._logger.trace("Occupancy.unsubscribe();"), this._emitter.off(c);
    } };
  }
  async get() {
    return this._logger.trace("Occupancy.get();"), this._chatApi.getOccupancy(this._roomName);
  }
  get current() {
    if (this._logger.trace("Occupancy.current();"), !this._roomOptions.occupancy.enableEvents) throw new N.ErrorInfo("unable to get current occupancy; occupancy events are not enabled in room options", U.FeatureNotEnabledInRoom, 400);
    return this._latestOccupancyData;
  }
  _internalOccupancyListener(r) {
    this._logger.trace("Occupancy._internalOccupancyListener();", r), this._latestOccupancyData = vc(r), this._emitter.emit(ki.Updated, {
      type: ki.Updated,
      occupancy: this._latestOccupancyData
    });
  }
  static channelOptionMerger(r) {
    return (c) => r.occupancy.enableEvents ? {
      ...c,
      params: {
        ...c.params,
        occupancy: "metrics"
      }
    } : c;
  }
  dispose() {
    this._logger.trace("DefaultOccupancy.dispose();"), this._unsubscribeOccupancyEvents(), this._emitter.off(), this._logger.debug("DefaultOccupancy.dispose(); disposed successfully");
  }
  hasListeners() {
    return Qe(this._emitter);
  }
}, Lr = class {
  constructor(r, c, h) {
    this._emitter = new Me(), this._stateEmitter = new Me(), this._presenceState = { present: !1 }, this.subscribeToEvents = (k) => {
      this._emitter.emit(k.action, {
        type: k.action,
        member: this._realtimeMemberToPresenceMember(k)
      });
    }, this._channel = r, this._logger = c, this._options = h;
    const f = this.subscribeToEvents.bind(this), b = (k) => {
      if (k.reason?.code === 91004) {
        this._logger.debug("Presence auto-reentry failed", { reason: k.reason }), this._emitPresenceStateChange(!1, k.reason);
        return;
      }
      if (k.current === "detached") {
        this._emitPresenceStateChange(!1);
        return;
      }
    }, S = (k) => {
      this._emitPresenceStateChange(!1, k.reason);
    };
    this._offChannelUpdate = $e(this._channel, "update", b), this._offChannelDetach = $e(this._channel, ["detached", "failed"], S), this._unsubscribePresenceEvents = gt(this._channel.presence, f);
  }
  async get(r) {
    return this._logger.trace("Presence.get()", { params: r }), this._assertChannelState(), (await this._channel.presence.get(r)).map((c) => this._realtimeMemberToPresenceMember(c));
  }
  async isUserPresent(r) {
    return this._logger.trace("Presence.isUserPresent()", { clientId: r }), this._assertChannelState(), (await this._channel.presence.get({ clientId: r })).length > 0;
  }
  async enter(r) {
    this._logger.trace("Presence.enter()", { data: r }), this._assertChannelState();
    try {
      await this._channel.presence.enter(r), this._emitPresenceStateChange(!0);
    } catch (c) {
      throw this._emitPresenceStateChange(!1, c), c;
    }
  }
  async update(r) {
    this._logger.trace("Presence.update()", { data: r }), this._assertChannelState();
    try {
      await this._channel.presence.update(r), this._emitPresenceStateChange(!0);
    } catch (c) {
      throw this._emitPresenceStateChange(!1, c), c;
    }
  }
  async leave(r) {
    this._logger.trace("Presence.leave()", { data: r }), this._assertChannelState();
    try {
      await this._channel.presence.leave(r), this._emitPresenceStateChange(!1);
    } catch (c) {
      throw this._emitPresenceStateChange(!1, c), c;
    }
  }
  subscribe(r) {
    if (this._logger.trace("Presence.subscribe()"), !this._options.presence.enableEvents) throw this._logger.error("unable to subscribe to presence; presence events are not enabled"), new N.ErrorInfo("unable to subscribe to presence; presence events are not enabled", U.FeatureNotEnabledInRoom, 400);
    const c = Se(r);
    return this._emitter.on(c), { unsubscribe: () => {
      this._logger.trace("Presence.unsubscribe();"), this._emitter.off(c);
    } };
  }
  static channelOptionMerger(r) {
    return (c) => (c.modes.includes("PRESENCE") || c.modes.push("PRESENCE"), r.presence.enableEvents && !c.modes.includes("PRESENCE_SUBSCRIBE") && c.modes.push("PRESENCE_SUBSCRIBE"), c);
  }
  dispose() {
    this._logger.trace("DefaultPresence.dispose();"), this._emitter.off(), this._unsubscribePresenceEvents(), this._offChannelUpdate(), this._offChannelDetach(), this._logger.debug("DefaultPresence.dispose(); disposed successfully");
  }
  hasListeners() {
    return Qe(this._emitter);
  }
  _realtimeMemberToPresenceMember(r) {
    const c = Cn(r.extras);
    return {
      ...r,
      data: r.data,
      updatedAt: new Date(r.timestamp),
      userClaim: c.userClaim
    };
  }
  _assertChannelState() {
    if (this._channel.state !== "attaching" && this._channel.state !== "attached") throw this._logger.error("unable to perform presence operation; room is not attached"), new N.ErrorInfo("unable to perform presence operation; room is not attached", U.RoomInInvalidState, 400);
  }
  _emitPresenceStateChange(r, c) {
    this._logger.trace("Presence._emitPresenceStateChange()", {
      present: r,
      error: c
    });
    const h = { ...this._presenceState };
    this._presenceState = { present: r };
    const f = {
      previous: h,
      current: this._presenceState,
      error: c
    };
    this._stateEmitter.emit("presence.state.change", f);
  }
  onPresenceStateChange(r) {
    this._logger.trace("Presence.onPresenceStateChange()");
    const c = Se(r);
    return this._stateEmitter.on("presence.state.change", c), { unsubscribe: () => {
      this._logger.trace("Presence.unsubscribeFromPresenceStateChanges()"), this._stateEmitter.off(c);
    } };
  }
}, Rs = /* @__PURE__ */ new Error("request for lock canceled"), wc = function(r, c, h, f) {
  function b(S) {
    return S instanceof h ? S : new h(function(k) {
      k(S);
    });
  }
  return new (h || (h = Promise))(function(S, k) {
    function B(W) {
      try {
        J(f.next(W));
      } catch (ie) {
        k(ie);
      }
    }
    function q(W) {
      try {
        J(f.throw(W));
      } catch (ie) {
        k(ie);
      }
    }
    function J(W) {
      W.done ? S(W.value) : b(W.value).then(B, q);
    }
    J((f = f.apply(r, c || [])).next());
  });
}, Cc = class {
  constructor(r, c = Rs) {
    this._value = r, this._cancelError = c, this._queue = [], this._weightedWaiters = [];
  }
  acquire(r = 1, c = 0) {
    if (r <= 0) throw new Error(`invalid weight ${r}: must be positive`);
    return new Promise((h, f) => {
      const b = {
        resolve: h,
        reject: f,
        weight: r,
        priority: c
      }, S = Zr(this._queue, (k) => c <= k.priority);
      S === -1 && r <= this._value ? this._dispatchItem(b) : this._queue.splice(S + 1, 0, b);
    });
  }
  runExclusive(r) {
    return wc(this, arguments, void 0, function* (c, h = 1, f = 0) {
      const [b, S] = yield this.acquire(h, f);
      try {
        return yield c(b);
      } finally {
        S();
      }
    });
  }
  waitForUnlock(r = 1, c = 0) {
    if (r <= 0) throw new Error(`invalid weight ${r}: must be positive`);
    return this._couldLockImmediately(r, c) ? Promise.resolve() : new Promise((h) => {
      this._weightedWaiters[r - 1] || (this._weightedWaiters[r - 1] = []), Rc(this._weightedWaiters[r - 1], {
        resolve: h,
        priority: c
      });
    });
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(r) {
    this._value = r, this._dispatchQueue();
  }
  release(r = 1) {
    if (r <= 0) throw new Error(`invalid weight ${r}: must be positive`);
    this._value += r, this._dispatchQueue();
  }
  cancel() {
    this._queue.forEach((r) => r.reject(this._cancelError)), this._queue = [];
  }
  _dispatchQueue() {
    for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value; ) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters();
  }
  _dispatchItem(r) {
    const c = this._value;
    this._value -= r.weight, r.resolve([c, this._newReleaser(r.weight)]);
  }
  _newReleaser(r) {
    let c = !1;
    return () => {
      c || (c = !0, this.release(r));
    };
  }
  _drainUnlockWaiters() {
    if (this._queue.length === 0) for (let r = this._value; r > 0; r--) {
      const c = this._weightedWaiters[r - 1];
      c && (c.forEach((h) => h.resolve()), this._weightedWaiters[r - 1] = []);
    }
    else {
      const r = this._queue[0].priority;
      for (let c = this._value; c > 0; c--) {
        const h = this._weightedWaiters[c - 1];
        if (!h) continue;
        const f = h.findIndex((b) => b.priority <= r);
        (f === -1 ? h : h.splice(0, f)).forEach(((b) => b.resolve()));
      }
    }
  }
  _couldLockImmediately(r, c) {
    return (this._queue.length === 0 || this._queue[0].priority < c) && r <= this._value;
  }
};
function Rc(r, c) {
  const h = Zr(r, (f) => c.priority <= f.priority);
  r.splice(h + 1, 0, c);
}
function Zr(r, c) {
  for (let h = r.length - 1; h >= 0; h--) if (c(r[h])) return h;
  return -1;
}
var Oc = function(r, c, h, f) {
  function b(S) {
    return S instanceof h ? S : new h(function(k) {
      k(S);
    });
  }
  return new (h || (h = Promise))(function(S, k) {
    function B(W) {
      try {
        J(f.next(W));
      } catch (ie) {
        k(ie);
      }
    }
    function q(W) {
      try {
        J(f.throw(W));
      } catch (ie) {
        k(ie);
      }
    }
    function J(W) {
      W.done ? S(W.value) : b(W.value).then(B, q);
    }
    J((f = f.apply(r, c || [])).next());
  });
}, eo = class {
  constructor(r) {
    this._semaphore = new Cc(1, r);
  }
  acquire() {
    return Oc(this, arguments, void 0, function* (r = 0) {
      const [, c] = yield this._semaphore.acquire(1, r);
      return c;
    });
  }
  runExclusive(r, c = 0) {
    return this._semaphore.runExclusive(() => r(), 1, c);
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock(r = 0) {
    return this._semaphore.waitForUnlock(1, r);
  }
  release() {
    this._semaphore.isLocked() && this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
}, Q = /* @__PURE__ */ ((r) => (r.Initializing = "initializing", r.Initialized = "initialized", r.Attaching = "attaching", r.Attached = "attached", r.Detaching = "detaching", r.Detached = "detached", r.Suspended = "suspended", r.Failed = "failed", r.Releasing = "releasing", r.Released = "released", r))(Q || {}), Ac = class {
  constructor(r) {
    this._status = "initialized", this._emitter = new Me(), this._logger = r;
  }
  get status() {
    return this._status;
  }
  get error() {
    return this._error;
  }
  onChange(r) {
    const c = Se(r);
    return this._emitter.on(c), { off: () => {
      this._emitter.off(c);
    } };
  }
  setStatus(r) {
    const c = {
      current: r.status,
      error: r.error,
      previous: this._status
    };
    this._status = c.current, this._error = c.error, this._logger.info("room status changed", { ...c }), this._emitter.emit(c.current, c);
  }
  dispose() {
    this._logger.trace("DefaultRoomLifecycle.dispose();"), this._emitter.off(), this._logger.debug("DefaultRoomLifecycle.dispose(); disposed successfully");
  }
  hasListeners() {
    return Qe(this._emitter);
  }
}, Sc = class {
  constructor(r, c, h) {
    this._channelManager = r, this._roomLifecycle = c, this._logger = h, this._eventEmitter = new Me(), this._hasAttachedOnce = !1, this._isExplicitlyDetached = !1, this._mutex = new eo();
    const f = this._channelStateListener.bind(this), b = this._discontinuityOnAttachedListener.bind(this), S = this._discontinuityOnUpdateListener.bind(this), k = this._channelManager.get();
    this._unsubscribeChannelStateListener = $e(k, f), this._offDiscontinuityAttached = $e(k, "attached", b), this._offDiscontinuityUpdate = $e(k, "update", S);
  }
  onDiscontinuity(r) {
    this._logger.trace("RoomLifecycleManager.onDiscontinuity()");
    const c = Se(r);
    return this._eventEmitter.on(yn.Discontinuity, c), { off: () => {
      this._eventEmitter.off(yn.Discontinuity, c);
    } };
  }
  async attach() {
    await this._mutex.runExclusive(async () => {
      if (this._logger.trace("RoomLifecycleManager.attach();"), this._checkRoomNotReleasing("attach"), this._roomStatusIs(Q.Attached)) {
        this._logger.debug("RoomLifecycleManager.attach(); room already attached, no-op");
        return;
      }
      const r = this._channelManager.get();
      this._logger.debug("RoomLifecycleManager.attach(); attaching room", { channelState: r.state });
      try {
        this._setStatus(Q.Attaching), await r.attach(), this._setStatus(Q.Attached), this._isExplicitlyDetached = !1, this._hasAttachedOnce = !0, this._logger.debug("RoomLifecycleManager.attach(); room attached successfully");
      } catch (c) {
        const h = c, f = new N.ErrorInfo(`failed to attach room: ${h.message}`, h.code, h.statusCode, h), b = this._mapChannelStateToRoomStatus(r.state);
        throw this._setStatus(b, f), f;
      }
    }, 1);
  }
  async detach() {
    await this._mutex.runExclusive(async () => {
      if (this._logger.trace("RoomLifecycleManager.detach();"), this._roomStatusIs(Q.Failed)) throw new N.ErrorInfo("unable to detach room; room is in failed state", U.RoomInInvalidState, 400);
      if (this._checkRoomNotReleasing("detach"), this._roomStatusIs(Q.Detached)) {
        this._logger.debug("RoomLifecycleManager.detach(); room already detached, no-op");
        return;
      }
      const r = this._channelManager.get();
      this._logger.debug("RoomLifecycleManager.detach(); detaching room", { channelState: r.state });
      try {
        this._setStatus(Q.Detaching), await r.detach(), this._isExplicitlyDetached = !0, this._setStatus(Q.Detached), this._logger.debug("RoomLifecycleManager.detach(); room detached successfully");
      } catch (c) {
        const h = c, f = new N.ErrorInfo(`failed to detach room: ${h.message}`, h.code, h.statusCode, h), b = this._mapChannelStateToRoomStatus(r.state);
        throw this._setStatus(b, f), f;
      }
    }, 1);
  }
  async release() {
    await this._mutex.runExclusive(async () => {
      if (this._logger.trace("RoomLifecycleManager.release();"), this._roomStatusIs(Q.Released)) {
        this._logger.debug("RoomLifecycleManager.release(); room already released, no-op");
        return;
      }
      if (this._roomStatusIs(Q.Initialized) || this._roomStatusIs(Q.Detached)) {
        this._logger.debug("RoomLifecycleManager.release(); room is initialized or detached, releasing immediately", { status: this._roomLifecycle.status }), this._releaseChannel();
        return;
      }
      this._setStatus(Q.Releasing);
      const r = this._channelManager.get();
      this._logger.debug("RoomLifecycleManager.release(); attempting channel detach before release", { channelState: r.state }), await this._channelDetachLoop(r), this._releaseChannel();
    }, 0);
  }
  _mapChannelStateToRoomStatus(r) {
    switch (r) {
      case "initialized":
        return Q.Initialized;
      case "attaching":
        return Q.Attaching;
      case "attached":
        return Q.Attached;
      case "detaching":
        return Q.Detaching;
      case "detached":
        return Q.Detached;
      case "suspended":
        return Q.Suspended;
      case "failed":
        return Q.Failed;
      default:
        return this._logger.error("RoomLifecycleManager._mapChannelStateToRoomStatus(); unknown channel state", { channelState: r }), Q.Failed;
    }
  }
  _checkRoomNotReleasing(r) {
    switch (this._roomLifecycle.status) {
      case Q.Released:
        throw new N.ErrorInfo(`unable to ${r} room; room is released`, U.RoomInInvalidState, 400);
      case Q.Releasing:
        throw new N.ErrorInfo(`unable to ${r} room; room is currently releasing`, U.RoomInInvalidState, 400);
    }
  }
  _roomStatusIs(r) {
    return this._roomLifecycle.status === r;
  }
  dispose() {
    this._unsubscribeChannelStateListener(), this._offDiscontinuityAttached(), this._offDiscontinuityUpdate(), this._eventEmitter.off();
  }
  hasListeners() {
    return Qe(this._eventEmitter);
  }
  _channelStateListener(r) {
    if (this._logger.debug("RoomLifecycleManager.channel state changed", {
      oldState: r.previous,
      newState: r.current,
      reason: r.reason,
      resumed: r.resumed
    }), this._operationInProgress()) {
      this._logger.debug("RoomLifecycleManager._startMonitoringChannelState(); ignoring channel state change - operation in progress", { status: this._roomLifecycle.status });
      return;
    }
    const c = this._mapChannelStateToRoomStatus(r.current);
    this._setStatus(c, r.reason);
  }
  _discontinuityOnAttachedListener(r) {
    if (!r.resumed && this._hasAttachedOnce && !this._isExplicitlyDetached) {
      const c = new N.ErrorInfo("discontinuity detected", U.RoomDiscontinuity, r.reason?.statusCode ?? 0, r.reason);
      this._logger.warn("RoomLifecycleManager._startMonitoringDiscontinuity(); discontinuity detected", { error: c }), this._eventEmitter.emit(yn.Discontinuity, c);
    }
  }
  _discontinuityOnUpdateListener(r) {
    if (!r.resumed && this._hasAttachedOnce && !this._isExplicitlyDetached && r.current === "attached" && r.previous === "attached") {
      const c = new N.ErrorInfo("discontinuity detected", U.RoomDiscontinuity, r.reason?.statusCode ?? 0, r.reason);
      this._logger.warn("RoomLifecycleManager._startMonitoringDiscontinuity(); discontinuity detected", { error: c }), this._eventEmitter.emit(yn.Discontinuity, c);
    }
  }
  async _channelDetachLoop(r) {
    for (; ; ) {
      if (r.state === "failed") {
        this._logger.debug("RoomLifecycleManager._channelDetachLoop(); channel is failed, skipping detach");
        break;
      }
      try {
        await r.detach();
        break;
      } catch (c) {
        this._logger.error("RoomLifecycleManager._channelDetachLoop(); failed to detach channel during release", { error: c }), await new Promise((h) => setTimeout(h, 250));
      }
    }
  }
  _setStatus(r, c) {
    this._logger.debug("RoomLifecycleManager._setStatus(); updating room status", {
      oldStatus: this._roomLifecycle.status,
      newStatus: r,
      hasError: !!c
    }), this._roomLifecycle.setStatus({
      status: r,
      error: c
    });
  }
  _releaseChannel() {
    this._channelManager.release(), this._setStatus(Q.Released), this._logger.debug("RoomLifecycleManager._releaseChannel(); room released successfully");
  }
  _operationInProgress() {
    return this._mutex.isLocked();
  }
  testForceHasAttachedOnce(r) {
    this._logger.trace("RoomLifecycleManager.testForceHasAttachedOnce();", { firstAttach: r }), this._hasAttachedOnce = r;
  }
}, As = {
  typing: { heartbeatThrottleMs: 1e4 },
  occupancy: { enableEvents: !1 },
  presence: { enableEvents: !0 },
  messages: {
    rawMessageReactions: !1,
    defaultMessageReactionType: dt.Distinct
  }
}, Tc = (r) => new N.ErrorInfo(`unable to create room; invalid room configuration: ${r}`, U.InvalidArgument, 400), kc = (r) => {
  Ic(r.typing);
}, Ic = (r) => {
  if (r.heartbeatThrottleMs <= 0) throw Tc("typing heartbeat interval must be greater than 0");
}, Mc = (r) => ({
  ...As.typing,
  ...r?.typing
}), Pc = (r) => ({
  ...As.occupancy,
  ...r?.occupancy
}), Ec = (r) => ({
  ...As.presence,
  ...r?.presence
}), Lc = (r) => ({
  ...As.messages,
  ...r?.messages
}), xc = (r, c) => ({
  typing: Mc(r),
  occupancy: Pc(r),
  presence: Ec(r),
  messages: Lc(r),
  isReactClient: c
}), xr = (r, c) => ({
  name: r,
  data: c,
  extras: { ephemeral: !0 }
}), Nc = (r) => {
  const c = r.extras ? r.extras : {};
  return {
    ...r,
    extras: {
      ...c,
      ephemeral: !0
    }
  };
}, Uc = class {
  constructor(r, c, h, f, b, S, k) {
    this.name = r, this.clientId = c, this.createdAt = h, this.isSelf = f, this.metadata = b, this.headers = S, this.userClaim = k, Object.freeze(this);
  }
}, Dc = (r, c) => {
  const h = r, f = h.data?.name && typeof h.data.name == "string" ? h.data.name : "", b = h.clientId ?? "", S = h.timestamp ? new Date(h.timestamp) : /* @__PURE__ */ new Date(), k = Cn(r.extras);
  return new Uc(f, b, S, c ? c === b : !1, h.data?.metadata ?? {}, k.headers ?? {}, k.userClaim);
}, Bc = class {
  constructor(r, c, h, f) {
    this._emitter = new Me(), this._forwarder = (S) => {
      const k = Dc(S, this._clientIdResolver.get());
      this._emitter.emit(Ti.Reaction, {
        type: Ti.Reaction,
        reaction: k
      });
    }, this._channel = r, this._connection = c, this._clientIdResolver = h, this._logger = f;
    const b = this._forwarder.bind(this);
    this._unsubscribeRoomReactionEvents = gt(this._channel, [Si.Reaction], b);
  }
  async send(r) {
    this._logger.trace("RoomReactions.send();", r);
    const { name: c, metadata: h, headers: f } = r;
    if (!c) throw new N.ErrorInfo("unable to send reaction; name not set and it is required", U.InvalidArgument, 400);
    if (this._connection.state !== "connected") throw new N.ErrorInfo("unable to send reaction; not connected to Ably", U.Disconnected, 400);
    const b = {
      name: c,
      metadata: h ?? {}
    }, S = {
      name: Si.Reaction,
      data: b,
      extras: { headers: f ?? {} }
    };
    await this._channel.publish(Nc(S));
  }
  subscribe(r) {
    this._logger.trace("RoomReactions.subscribe();");
    const c = Se(r);
    return this._emitter.on(c), { unsubscribe: () => {
      this._logger.trace("RoomReactions.unsubscribe();"), this._emitter.off(c);
    } };
  }
  dispose() {
    this._unsubscribeRoomReactionEvents(), this._emitter.off();
  }
  hasListeners() {
    return Qe(this._emitter);
  }
}, qc = class extends Me {
  constructor(r, c, h, f) {
    super(), this._timeoutMs = 2e3, this._mutex = new eo(), this._internalSubscribeToEvents = (b) => {
      const { name: S, clientId: k } = b;
      if (this._logger.trace("DefaultTyping._internalSubscribeToEvents(); received event", {
        name: S,
        clientId: k
      }), !k) {
        this._logger.error("DefaultTyping._internalSubscribeToEvents(); invalid clientId in received event", { inbound: b });
        return;
      }
      const B = Cn(b.extras).userClaim;
      S === Ae.Started || S === Ae.Stopped ? this._updateCurrentlyTyping(k, S, B) : this._logger.warn("DefaultTyping._internalSubscribeToEvents(); unrecognized event", { name: S });
    }, this._channel = h, this._connection = c, this._heartbeatThrottleMs = r.heartbeatThrottleMs, this._currentlyTyping = /* @__PURE__ */ new Map(), this._logger = f, this._unsubscribeTypingEvents = gt(this._channel, [Ae.Started, Ae.Stopped], this._internalSubscribeToEvents.bind(this));
  }
  _clearAllTypingStates() {
    this._logger.debug("DefaultTyping._clearAllTypingStates(); clearing all typing states"), this._clearHeartbeatTimer(), this._clearCurrentlyTyping();
  }
  _clearHeartbeatTimer() {
    this._logger.trace("DefaultTyping._clearHeartbeatTimer(); clearing heartbeat timer"), this._heartbeatTimerId && (clearTimeout(this._heartbeatTimerId), this._heartbeatTimerId = void 0);
  }
  _clearCurrentlyTyping() {
    this._logger.trace("DefaultTyping._clearCurrentlyTyping(); clearing current store and timeouts");
    for (const [, r] of this._currentlyTyping.entries()) clearTimeout(r.timer);
    this._currentlyTyping.clear();
  }
  get current() {
    return this._logger.trace("DefaultTyping.current();"), new Set(this._currentlyTyping.keys());
  }
  get currentTypers() {
    return this._logger.trace("DefaultTyping.currentTypers();"), this._buildCurrentTypers();
  }
  get channel() {
    return this._channel;
  }
  _startHeartbeatTimer() {
    if (!this._heartbeatTimerId) {
      this._logger.trace("DefaultTyping.startHeartbeatTimer();");
      const r = this._heartbeatTimerId = setTimeout(() => {
        this._logger.debug("DefaultTyping.startHeartbeatTimer(); heartbeat timer expired"), r === this._heartbeatTimerId && (this._heartbeatTimerId = void 0);
      }, this._heartbeatThrottleMs);
    }
  }
  async keystroke() {
    this._logger.trace("DefaultTyping.keystroke();"), this._mutex.cancel();
    try {
      await this._mutex.acquire();
    } catch (r) {
      if (r === Rs) {
        this._logger.debug("DefaultTyping.keystroke(); mutex was canceled by a later operation");
        return;
      }
      throw new N.ErrorInfo("unable to send keystroke event; failed to enforce sequential execution of the operation", U.OperationSerializationFailed, 500);
    }
    try {
      if (this._connection.state !== "connected") throw this._logger.error("DefaultTyping.keystroke(); connection is not connected", { status: this._connection.state }), new N.ErrorInfo("unable to send typing keystroke event; disconnected from Ably", U.Disconnected, 400);
      if (this._heartbeatTimerId) {
        this._logger.debug("DefaultTyping.keystroke(); no-op, already typing and heartbeat timer has not expired");
        return;
      }
      await this._channel.publish(xr(Ae.Started)), this._startHeartbeatTimer(), this._logger.trace("DefaultTyping.keystroke(); starting timers");
    } finally {
      this._logger.trace("DefaultTyping.keystroke(); releasing mutex"), this._mutex.release();
    }
  }
  async stop() {
    this._logger.trace("DefaultTyping.stop();"), this._mutex.cancel();
    try {
      await this._mutex.acquire();
    } catch (r) {
      if (r === Rs) {
        this._logger.debug("DefaultTyping.stop(); mutex was canceled by a later operation");
        return;
      }
      throw new N.ErrorInfo("unable to send typing stop event; failed to enforce sequential execution of the operation", U.OperationSerializationFailed, 500);
    }
    try {
      if (this._connection.state !== "connected") throw this._logger.error("DefaultTyping.stop(); connection is not connected", { status: this._connection.state }), new N.ErrorInfo("unable to send typing stop event; disconnected from Ably", U.Disconnected, 400);
      if (!this._heartbeatTimerId) {
        this._logger.debug("DefaultTyping.stop(); no-op, not currently typing");
        return;
      }
      await this._channel.publish(xr(Ae.Stopped)), this._logger.trace("DefaultTyping.stop(); clearing timers"), clearTimeout(this._heartbeatTimerId), this._heartbeatTimerId = void 0;
    } finally {
      this._logger.trace("DefaultTyping.stop(); releasing mutex"), this._mutex.release();
    }
  }
  subscribe(r) {
    this._logger.trace("DefaultTyping.subscribe();");
    const c = Se(r);
    return this.on(c), { unsubscribe: () => {
      this._logger.trace("DefaultTyping.unsubscribe();"), this.off(c);
    } };
  }
  async dispose() {
    for (this._logger.trace("DefaultTyping.dispose();"); ; ) try {
      this._mutex.cancel(), await this._mutex.acquire();
      break;
    } catch (r) {
      if (r === Rs) this._logger.debug("DefaultTyping.dispose(); mutex was canceled"), await new Promise((c) => setTimeout(c, 200)), this._logger.debug("DefaultTyping.dispose(); retrying mutex acquisition");
      else {
        this._logger.error("DefaultTyping.dispose(); failed to acquire mutex; could not complete resource disposal", { error: r });
        return;
      }
    }
    this._clearAllTypingStates(), this._unsubscribeTypingEvents(), this.off(), this._mutex.release();
  }
  _updateCurrentlyTyping(r, c, h) {
    this._logger.trace("DefaultTyping._updateCurrentlyTyping();", {
      clientId: r,
      event: c
    }), c === Ae.Started ? this._handleTypingStart(r, h) : this._handleTypingStop(r, h);
  }
  _buildCurrentTypers() {
    return [...this._currentlyTyping.entries()].map(([r, c]) => ({
      clientId: r,
      userClaim: c.userClaim
    }));
  }
  _startNewClientInactivityTimer(r) {
    this._logger.trace("DefaultTyping._startNewClientInactivityTimer(); starting new inactivity timer", { clientId: r });
    const c = setTimeout(() => {
      this._logger.trace("DefaultTyping._startNewClientInactivityTimer(); client typing timeout expired", { clientId: r });
      const h = this._currentlyTyping.get(r);
      if (h?.timer !== c) {
        this._logger.debug("DefaultTyping._startNewClientInactivityTimer(); timeout already cleared; ignoring", { clientId: r });
        return;
      }
      const f = h.userClaim;
      this._currentlyTyping.delete(r), this.emit(ut.SetChanged, {
        type: ut.SetChanged,
        currentlyTyping: new Set(this._currentlyTyping.keys()),
        currentTypers: this._buildCurrentTypers(),
        change: {
          clientId: r,
          type: Ae.Stopped,
          userClaim: f
        }
      });
    }, this._heartbeatThrottleMs + this._timeoutMs);
    return c;
  }
  _handleTypingStart(r, c) {
    this._logger.debug("DefaultTyping._handleTypingStart();", { clientId: r });
    const h = this._startNewClientInactivityTimer(r), f = this._currentlyTyping.get(r);
    this._currentlyTyping.set(r, {
      timer: h,
      userClaim: c
    }), f ? (this._logger.debug("DefaultTyping._handleTypingStart(); received heartbeat for currently typing client", { clientId: r }), clearTimeout(f.timer)) : (this._logger.debug("DefaultTyping._handleTypingStart(); new client started typing", { clientId: r }), this.emit(ut.SetChanged, {
      type: ut.SetChanged,
      currentlyTyping: new Set(this._currentlyTyping.keys()),
      currentTypers: this._buildCurrentTypers(),
      change: {
        clientId: r,
        type: Ae.Started,
        userClaim: c
      }
    }));
  }
  _handleTypingStop(r, c) {
    const h = this._currentlyTyping.get(r);
    if (!h) {
      this._logger.trace('DefaultTyping._handleTypingStop(); received "Stop" event for client not in currentlyTyping list', { clientId: r });
      return;
    }
    this._logger.debug("DefaultTyping._handleTypingStop(); client stopped typing", { clientId: r }), clearTimeout(h.timer), this._currentlyTyping.delete(r), this.emit(ut.SetChanged, {
      type: ut.SetChanged,
      currentlyTyping: new Set(this._currentlyTyping.keys()),
      currentTypers: this._buildCurrentTypers(),
      change: {
        clientId: r,
        type: Ae.Stopped,
        userClaim: c
      }
    });
  }
  get heartbeatThrottleMs() {
    return this._heartbeatThrottleMs;
  }
  get hasHeartbeatTimer() {
    return !!this._heartbeatTimerId;
  }
}, jc = class {
  constructor(r, c, h, f, b, S, k) {
    kc(h), this._nonce = c, this._logger = k.withContext({
      roomName: r,
      roomNonce: c
    }), this._logger.debug("Room();", { options: h }), this._name = r, this._options = h, this._chatApi = b, this._lifecycle = new Ac(this._logger);
    const B = this._channelManager = this._getChannelManager(h, f, this._logger), q = B.get();
    this._messages = new gc(r, h.messages, q, this._chatApi, this._logger), this._presence = new Lr(q, this._logger, h), this._typing = new qc(h.typing, f.connection, q, this._logger), this._reactions = new Bc(q, f.connection, S, this._logger), this._occupancy = new Er(r, q, this._chatApi, this._logger, h), this._lifecycleManager = new Sc(B, this._lifecycle, this._logger);
    let J = !1;
    this._finalizer = async () => {
      if (J) {
        this._logger.debug("Room.finalizer(); already finalized");
        return;
      }
      await this._lifecycleManager.release(), this._lifecycleManager.dispose(), this._messages.dispose(), this._presence.dispose(), this._reactions.dispose(), this._occupancy.dispose(), await this._typing.dispose(), this._lifecycle.dispose(), J = !0;
    };
  }
  _getChannelManager(r, c, h) {
    const f = new bc(this._name, c, h, r.isReactClient);
    return f.mergeOptions(Er.channelOptionMerger(r)), f.mergeOptions(Lr.channelOptionMerger(r)), f.mergeOptions(Qr.channelOptionMerger(r)), f;
  }
  get name() {
    return this._name;
  }
  options() {
    return ze(this._options);
  }
  get messages() {
    return this._messages;
  }
  get presence() {
    return this._presence;
  }
  get reactions() {
    return this._reactions;
  }
  get typing() {
    return this._typing;
  }
  get occupancy() {
    return this._occupancy;
  }
  get status() {
    return this._lifecycle.status;
  }
  get error() {
    return this._lifecycle.error;
  }
  onStatusChange(r) {
    return this._lifecycle.onChange(r);
  }
  async attach() {
    return this._logger.trace("Room.attach();"), this._lifecycleManager.attach();
  }
  async detach() {
    return this._logger.trace("Room.detach();"), this._lifecycleManager.detach();
  }
  async release() {
    return this._logger.trace("Room.release();"), this._finalizer();
  }
  get nonce() {
    return this._nonce;
  }
  get lifecycle() {
    return this._lifecycle;
  }
  get lifecycleManager() {
    return this._lifecycleManager;
  }
  onDiscontinuity(r) {
    return this._logger.trace("Room.onDiscontinuity();"), this._lifecycleManager.onDiscontinuity(r);
  }
  get channel() {
    return this._channelManager.get();
  }
}, Gc = class {
  constructor(r, c, h, f) {
    this._rooms = /* @__PURE__ */ new Map(), this._releasing = /* @__PURE__ */ new Map(), this._isReact = !1, this._disposed = !1, this._realtime = r, this._chatApi = new fc(r, h, f), this._clientIdResolver = c, this._logger = h;
  }
  async get(r, c) {
    this._logger.trace("Rooms.get();", { roomName: r }), this._ensureNotDisposed();
    const h = this._rooms.get(r);
    if (h) return this._handleExistingRoom(h, r, c);
    const f = this._releasing.get(r), b = Vr();
    return f ? this._waitForReleaseAndCreateRoom(r, b, c, f) : this._createNewRoom(r, b, c);
  }
  async release(r) {
    this._logger.trace("Rooms.release();", { roomName: r });
    const c = this._rooms.get(r), h = this._releasing.get(r);
    return c ? h ? this._handleConcurrentRelease(r, c, h) : this._performRoomRelease(r, c) : this._handleNonExistentRoomRelease(r, h);
  }
  async dispose() {
    this._logger.trace("Rooms.dispose();"), this._disposed = !0;
    const r = [...this._rooms.keys()];
    if (r.length === 0) {
      this._logger.debug("Rooms.dispose(); no rooms to release");
      return;
    }
    const c = r.map(async (b) => this.release(b)), h = [...this._releasing.values()], f = [...c, ...h];
    this._logger.debug("Rooms.dispose(); releasing rooms", {
      roomCount: r.length,
      roomNames: r
    }), await Promise.all(f), this._logger.debug("Rooms.dispose(); all rooms released successfully");
  }
  get count() {
    return this._rooms.size;
  }
  _ensureNotDisposed() {
    if (this._disposed) throw new N.ErrorInfo("unable to get room; rooms instance has been disposed", U.ResourceDisposed, 400);
  }
  async _handleExistingRoom(r, c, h) {
    if (!bn(r.options, h)) throw new N.ErrorInfo("unable to get room; room already exists with different options", U.RoomExistsWithDifferentOptions, 400);
    return this._logger.debug("Rooms.get(); returning existing room", {
      roomName: c,
      nonce: r.nonce,
      options: h
    }), await r.promise;
  }
  _createNewRoom(r, c, h) {
    const f = this._makeRoom(r, c, h), b = {
      promise: Promise.resolve(f),
      nonce: c,
      options: h
    };
    return this._rooms.set(r, b), this._logger.debug("Rooms.get(); returning new room", {
      roomName: r,
      nonce: f.nonce
    }), f;
  }
  async _waitForReleaseAndCreateRoom(r, c, h, f) {
    const b = new AbortController(), S = this._createAbortableRoomPromise(r, c, h, f, b);
    return this._rooms.set(r, {
      promise: S,
      options: h,
      nonce: c,
      abort: b
    }), this._logger.debug("Rooms.get(); creating new promise dependent on previous release", { roomName: r }), await S;
  }
  async _createAbortableRoomPromise(r, c, h, f, b) {
    const S = new Promise((k, B) => {
      const q = () => {
        this._logger.debug("Rooms.get(); aborted before init", { roomName: r }), B(new N.ErrorInfo("unable to get room; room released before operation could complete", U.RoomReleasedBeforeOperationCompleted, 400));
      };
      b.signal.addEventListener("abort", q, { once: !0 });
    });
    return await Promise.race([f, S]), this._logger.debug("Rooms.get(); releasing finished", { roomName: r }), this._makeRoom(r, c, h);
  }
  async _handleNonExistentRoomRelease(r, c) {
    if (c) {
      this._logger.debug("Rooms.release(); waiting for previous release call", { roomName: r }), await c;
      return;
    }
    this._logger.debug("Rooms.release(); room does not exist", { roomName: r });
  }
  async _handleConcurrentRelease(r, c, h) {
    c.abort && (this._logger.debug("Rooms.release(); aborting get call", {
      roomName: r,
      existingNonce: c.nonce
    }), c.abort.abort(), this._rooms.delete(r)), await h;
  }
  async _performRoomRelease(r, c) {
    this._rooms.delete(r);
    const h = this._executeRoomRelease(r, c);
    this._releasing.set(r, h), this._logger.debug("Rooms.release(); creating new release promise", {
      roomName: r,
      nonce: c.nonce
    }), await h;
  }
  async _executeRoomRelease(r, c) {
    const h = await c.promise;
    this._logger.debug("Rooms.release(); releasing room", {
      roomName: r,
      nonce: c.nonce
    }), await h.release(), this._logger.debug("Rooms.release(); room released", {
      roomName: r,
      nonce: c.nonce
    }), this._releasing.delete(r);
  }
  _makeRoom(r, c, h) {
    return new jc(r, c, xc(h, this._isReact), this._realtime, this._chatApi, this._clientIdResolver, this._logger);
  }
  useReact() {
    this._logger.trace("Rooms.useReact();"), this._isReact = !0;
  }
}, Hc = class {
  constructor(r, c) {
    this._realtime = r, this._clientOptions = tc(c), this._nonce = Vr(), this._logger = Za(this._clientOptions).withContext({ chatClientNonce: this._nonce }), this._connection = new ic(r, this._logger), this._clientIdResolver = new Xa(r, this._logger), this._rooms = new Gc(r, this._clientIdResolver, this._logger, this._clientOptions.idempotentRestPublishing), this._addAgent("chat-js"), this._logger.trace(`ably chat client version ${Os}; initialized`);
  }
  get rooms() {
    return this._rooms;
  }
  get connection() {
    return this._connection;
  }
  get clientId() {
    return this._realtime.auth.clientId;
  }
  get realtime() {
    return this._realtime;
  }
  get clientOptions() {
    return this._clientOptions;
  }
  get logger() {
    return this._logger;
  }
  addReactAgent() {
    this._addAgent("chat-react"), this._rooms.useReact();
  }
  addAgentWithVersion(r, c) {
    this._addAgent(r, c), this._logger.trace(`Added agent ${r} with version ${c}`);
  }
  async dispose() {
    this._logger.trace("ChatClient.dispose();"), await this._rooms.dispose(), this._connection.dispose(), this._logger.debug("ChatClient.dispose(); client disposed successfully");
  }
  _addAgent(r, c) {
    const h = this._realtime;
    h.options.agents = {
      ...h.options.agents ?? h.options.agents,
      [r]: c ?? Os
    };
  }
};
async function Wc(r, c, h) {
  const f = new N.Realtime({
    clientId: c,
    authCallback: (S, k) => k(null, r)
  }), b = await new Hc(f).rooms.get(h);
  await b.attach(), b.messages.subscribe((S) => console.log(S.message.serial)), await b.messages.send({ text: "hola" });
}
export {
  Wc as run
};
