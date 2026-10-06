import * as Qr from "react";
import tr, { createContext as nr, forwardRef as Yc, useCallback as G, useContext as sr, useEffect as ie, useLayoutEffect as Xr, useMemo as lt, useRef as ve, useState as ae } from "react";
import { Fragment as vn, jsx as S, jsxs as Y } from "react/jsx-runtime";
import { createPortal as Zc } from "react-dom";
var el = Object.create, Oo = Object.defineProperty, tl = Object.getOwnPropertyDescriptor, nl = Object.getOwnPropertyNames, sl = Object.getPrototypeOf, Mo = Object.prototype.hasOwnProperty, rl = (s, i) => () => (i || (s((i = { exports: {} }).exports, i), s = null), i.exports), il = (s, i, l, h) => {
  if (i && typeof i == "object" || typeof i == "function")
    for (var f = nl(i), m = 0, g = f.length, v; m < g; m++)
      v = f[m], !Mo.call(s, v) && v !== l && Oo(s, v, {
        get: ((C) => i[C]).bind(null, v),
        enumerable: !(h = tl(i, v)) || h.enumerable
      });
  return s;
}, ol = (s, i, l) => (l = s != null ? el(sl(s)) : {}, il(i || !s || !s.__esModule || !Mo.call(s, "default") ? Oo(l, "default", {
  value: s,
  enumerable: !0
}) : l, s)), al = /* @__PURE__ */ rl(((s, i) => {
  (function(l, h) {
    typeof s == "object" && typeof i == "object" ? i.exports = h() : typeof define == "function" && define.amd ? define([], h) : typeof s == "object" ? s.Ably = h() : l.Ably = h();
  })(s, () => {
    var l = {}, h = { exports: l }, f = Object.defineProperty, m = Object.defineProperties, g = Object.getOwnPropertyDescriptor, v = Object.getOwnPropertyDescriptors, C = Object.getOwnPropertyNames, T = Object.getOwnPropertySymbols, A = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable, L = (e, t, n) => t in e ? f(e, t, {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: n
    }) : e[t] = n, E = (e, t) => {
      for (var n in t || (t = {})) A.call(t, n) && L(e, n, t[n]);
      if (T)
        for (var n of T(t)) M.call(t, n) && L(e, n, t[n]);
      return e;
    }, j = (e, t) => m(e, v(t)), te = (e, t) => {
      var n = {};
      for (var r in e) A.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && T)
        for (var r of T(e)) t.indexOf(r) < 0 && M.call(e, r) && (n[r] = e[r]);
      return n;
    }, B = (e, t) => {
      for (var n in t) f(e, n, {
        get: t[n],
        enumerable: !0
      });
    }, X = (e, t, n, r) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let o of C(t)) !A.call(e, o) && o !== n && f(e, o, {
          get: () => t[o],
          enumerable: !(r = g(t, o)) || r.enumerable
        });
      return e;
    }, Z = (e) => X(f({}, "__esModule", { value: !0 }), e), ne = function(e, t) {
      this[0] = e, this[1] = t;
    }, J = (e, t, n) => {
      var r = (u, d, b, w) => {
        try {
          var O = n[u](d), I = (d = O.value) instanceof ne, N = O.done;
          Promise.resolve(I ? d[0] : d).then((k) => I ? r(u === "return" ? u : "next", d[1] ? {
            done: k.done,
            value: k.value
          } : k, b, w) : b({
            value: k,
            done: N
          })).catch((k) => r("throw", k, b, w));
        } catch (k) {
          w(k);
        }
      }, o = (u) => c[u] = (d) => new Promise((b, w) => r(u, d, b, w)), c = {};
      return n = n.apply(e, t), c[Symbol.asyncIterator] = () => c, o("next"), o("throw"), o("return"), c;
    }, D = {};
    B(D, {
      ErrorInfo: () => _,
      Realtime: () => Br,
      Rest: () => xr,
      default: () => Qc,
      makeProtocolMessageFromDeserialized: () => ji,
      msgpack: () => $r
    }), h.exports = Z(D);
    var y = class {
    }, ue = typeof global < "u" ? global : typeof window < "u" ? window : self;
    function $(e, t) {
      return `${e}`.padStart(t ? 3 : 2, "0");
    }
    function le(e) {
      return y.Config.logTimestamps ? function(t) {
        const n = new Date(y.Config.now());
        e($(n.getHours()) + ":" + $(n.getMinutes()) + ":" + $(n.getSeconds()) + "." + $(n.getMilliseconds(), 1) + " " + t);
      } : function(t) {
        e(t);
      };
    }
    var W = () => {
      var e;
      let t, n;
      return typeof ((e = ue?.console) == null ? void 0 : e.log) == "function" ? (t = function(...r) {
        console.log.apply(console, r);
      }, n = console.warn ? function(...r) {
        console.warn.apply(console, r);
      } : t) : t = n = function() {
      }, [t, n].map(le);
    }, z = class Kn {
      constructor() {
        this.deprecated = (t, n) => {
          this.deprecationWarning(`${t} is deprecated and will be removed in a future version. ${n}`);
        }, this.shouldLog = (t) => t <= this.logLevel, this.setLog = (t, n) => {
          t !== void 0 && (this.logLevel = t), n !== void 0 && (this.logHandler = this.logErrorHandler = n);
        }, this.logLevel = Kn.defaultLogLevel, this.logHandler = Kn.defaultLogHandler, this.logErrorHandler = Kn.defaultLogErrorHandler;
      }
      static initLogHandlers() {
        const [t, n] = W();
        this.defaultLogHandler = t, this.defaultLogErrorHandler = n, this.defaultLogger = new Kn();
      }
      static logActionNoStrip(t, n, r, o) {
        t.logAction(n, r, o);
      }
      static silentFailureLogSuffix() {
        return " This call currently fails silently because clientOptions.strictMode is not enabled. A future major version will make this call fail with an error. Set clientOptions.strictMode: true to make this call reject with an error now.";
      }
      logAction(t, n, r) {
        this.shouldLog(t) && (t === 1 ? this.logErrorHandler : this.logHandler)("Ably: " + n + ": " + r, t);
      }
      renamedClientOption(t, n) {
        this.deprecationWarning(`The \`${t}\` client option has been renamed to \`${n}\`. Please update your code to use \`${n}\` instead. \`${t}\` will be removed in a future version.`);
      }
      renamedMethod(t, n, r) {
        this.deprecationWarning(`\`${t}\`’s \`${n}\` method has been renamed to \`${r}\`. Please update your code to use \`${r}\` instead. \`${n}\` will be removed in a future version.`);
      }
      deprecationWarning(t) {
        this.shouldLog(1) && this.logErrorHandler(`Ably: Deprecation warning - ${t}`, 1);
      }
    };
    z.defaultLogLevel = 1, z.LOG_NONE = 0, z.LOG_ERROR = 1, z.LOG_MAJOR = 2, z.LOG_MINOR = 3, z.LOG_MICRO = 4, z.logAction = (e, t, n, r) => {
      z.logActionNoStrip(e, t, n, r);
    };
    var a = z, ce = {};
    B(ce, {
      Format: () => cs,
      allSame: () => or,
      allToLowerCase: () => Sn,
      allToUpperCase: () => us,
      arrChooseN: () => hs,
      arrDeleteValue: () => Dt,
      arrEquals: () => ds,
      arrIntersect: () => Je,
      arrIntersectOb: () => Lt,
      arrPopRandomElement: () => At,
      arrWithoutValue: () => Ut,
      cheapRandStr: () => Bt,
      containsValue: () => ze,
      copy: () => qe,
      createMissingPluginError: () => Ht,
      dataSizeBytes: () => An,
      decodeBody: () => ke,
      detectV1Callback: () => Ie,
      encodeBody: () => Le,
      ensureArray: () => Ke,
      forInOwnNonNullProperties: () => Cn,
      getBackoffCoefficient: () => Yt,
      getGlobalObject: () => Gt,
      getJitterCoefficient: () => St,
      getRetryTime: () => qt,
      inherits: () => Ze,
      inspectBody: () => Rn,
      inspectError: () => pe,
      intersect: () => et,
      isEmpty: () => Rt,
      isErrorInfoOrPartialErrorInfo: () => Qe,
      isNil: () => Se,
      isObject: () => Me,
      keysArray: () => tt,
      listenerToAsyncIterator: () => fs,
      matchDerivedChannel: () => kt,
      mixin: () => x,
      parseQueryString: () => jt,
      prototypicalClone: () => _e,
      randomString: () => ls,
      shallowClone: () => de,
      shallowEquals: () => Zt,
      stringifyValues: () => Xt,
      throwMissingPluginError: () => Te,
      toBase64: () => en,
      toQueryString: () => yt,
      valuesArray: () => mt,
      whenPromiseSettles: () => Ge,
      withTimeoutAsync: () => gs
    });
    function F(e) {
      let t = "[" + e.constructor.name;
      return e.message && (t += ": " + e.message), e.statusCode && (t += "; statusCode=" + e.statusCode), e.code && (t += "; code=" + e.code), e.cause && (t += "; cause=" + pe(e.cause)), e.remediation && (t += "; remediation=" + e.remediation), e.detail && Object.keys(e.detail).length > 0 && (t += "; detail=" + JSON.stringify(e.detail)), e.href && !(e.message && e.message.indexOf("help.ably.io") > -1) && (t += "; see " + e.href + " "), t += "]", t;
    }
    function se(e) {
      return e.code && !e.href && (e.href = "https://help.ably.io/error/" + e.code), e;
    }
    var _ = class Jn extends Error {
      constructor(t, n, r, o, c) {
        var u = (...d) => {
          super(...d);
        };
        if (typeof t == "object") {
          const d = t;
          if (typeof d.message != "string" || typeof d.code != "number" || typeof d.statusCode != "number" || !Se(d.detail) && (typeof d.detail != "object" || Array.isArray(d.detail))) throw new Error("ErrorInfo: invalid values: " + y.Config.inspect(d));
          u(d.message), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, Jn.prototype), this.code = d.code, this.statusCode = d.statusCode, this.detail = d.detail, Object.assign(this, d);
        } else
          u(t), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, Jn.prototype), this.code = n, this.statusCode = r, this.cause = o, this.detail = c;
      }
      toString() {
        return F(this);
      }
      static fromValues(t) {
        return se(new Jn(t));
      }
      static fromWireValues(t) {
        return se(new Jn(t));
      }
    }, U = class Ks extends Error {
      constructor(t, n, r, o, c) {
        var u = (...d) => {
          super(...d);
        };
        if (typeof t == "object") {
          const d = t;
          if (typeof d.message != "string" || !Se(d.code) && typeof d.code != "number" || !Se(d.statusCode) && typeof d.statusCode != "number" || !Se(d.detail) && (typeof d.detail != "object" || Array.isArray(d.detail))) throw new Error("PartialErrorInfo: invalid values: " + y.Config.inspect(d));
          u(d.message), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, Ks.prototype), this.code = d.code, this.statusCode = d.statusCode, this.detail = d.detail, Object.assign(this, d);
        } else
          u(t), typeof Object.setPrototypeOf < "u" && Object.setPrototypeOf(this, Ks.prototype), this.code = n, this.statusCode = r, this.cause = o, this.detail = c;
      }
      toString() {
        return F(this);
      }
      static fromValues(t) {
        return se(new Ks(t));
      }
    };
    function fe(e) {
      return Math.floor(Math.random() * e.length);
    }
    function x(e, ...t) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (!r) break;
        for (const o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
      }
      return e;
    }
    function qe(e) {
      return x({}, e);
    }
    function Ke(e) {
      return Se(e) ? [] : Array.isArray(e) ? e : [e];
    }
    function Me(e) {
      return Object.prototype.toString.call(e) == "[object Object]";
    }
    function Rt(e) {
      for (const t in e) return !1;
      return !0;
    }
    function Se(e) {
      return e == null;
    }
    function de(e) {
      const t = /* @__PURE__ */ new Object();
      for (const n in e) t[n] = e[n];
      return t;
    }
    function _e(e, t) {
      class n {
      }
      n.prototype = e;
      const r = new n();
      return t && x(r, t), r;
    }
    var Ze = function(e, t) {
      if (y.Config.inherits) {
        y.Config.inherits(e, t);
        return;
      }
      e.super_ = t, e.prototype = _e(t.prototype, { constructor: e });
    };
    function ze(e, t) {
      for (const n in e) if (e[n] == t) return !0;
      return !1;
    }
    function et(e, t) {
      return Array.isArray(t) ? Je(e, t) : Lt(e, t);
    }
    function Je(e, t) {
      const n = [];
      for (let r = 0; r < e.length; r++) {
        const o = e[r];
        t.indexOf(o) != -1 && n.push(o);
      }
      return n;
    }
    function Lt(e, t) {
      const n = [];
      for (let r = 0; r < e.length; r++) {
        const o = e[r];
        o in t && n.push(o);
      }
      return n;
    }
    function Dt(e, t) {
      const n = e.indexOf(t), r = n != -1;
      return r && e.splice(n, 1), r;
    }
    function Ut(e, t) {
      const n = e.slice();
      return Dt(n, t), n;
    }
    function tt(e, t) {
      const n = [];
      for (const r in e)
        t && !Object.prototype.hasOwnProperty.call(e, r) || n.push(r);
      return n;
    }
    function mt(e, t) {
      const n = [];
      for (const r in e)
        t && !Object.prototype.hasOwnProperty.call(e, r) || n.push(e[r]);
      return n;
    }
    function Cn(e, t) {
      for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && t(n);
    }
    function or(e, t) {
      if (e.length === 0) return !0;
      const n = e[0][t];
      return e.every(function(r) {
        return r[t] === n;
      });
    }
    var cs = /* @__PURE__ */ ((e) => (e.msgpack = "msgpack", e.json = "json", e))(cs || {});
    function At(e) {
      return e.splice(fe(e), 1)[0];
    }
    function yt(e) {
      const t = [];
      if (e) for (const n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      return t.length ? "?" + t.join("&") : "";
    }
    function Xt(e) {
      return Object.fromEntries(Object.entries(e).map(([t, n]) => [t, String(n)]));
    }
    function jt(e) {
      let t;
      const n = /([^?&=]+)=?([^&]*)/g, r = {};
      for (; t = n.exec(e); ) r[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
      return r;
    }
    function Qe(e) {
      return typeof e == "object" && e !== null && (e instanceof _ || e instanceof U);
    }
    function Ie(e, t) {
      const n = e.length;
      if (typeof e[n - 1] == "function" && !(n <= t && typeof e[n - 2] != "function"))
        throw new _({
          message: "v1 callback signature is no longer supported: v2 methods return a promise.",
          code: 40025,
          statusCode: 400,
          remediation: "Drop the trailing callback and `await` the returned promise. See https://github.com/ably/ably-js/blob/main/docs/migration-guides/v2/lib.md."
        });
    }
    function pe(e) {
      var t, n;
      return e instanceof Error || ((t = e?.constructor) == null ? void 0 : t.name) === "ErrorInfo" || ((n = e?.constructor) == null ? void 0 : n.name) === "PartialErrorInfo" ? e.toString() : y.Config.inspect(e);
    }
    function Rn(e) {
      return y.BufferUtils.isBuffer(e) ? e.toString() : typeof e == "string" ? e : y.Config.inspect(e);
    }
    function An(e) {
      if (y.BufferUtils.isBuffer(e)) return y.BufferUtils.byteLength(e);
      if (typeof e == "string") return y.Config.stringByteSize(e);
      if (typeof e == "number") return 8;
      if (typeof e == "boolean") return 1;
      throw new Error(`Expected input of Utils.dataSizeBytes to be a string, a number, a boolean or a buffer, but was: ${typeof e}`);
    }
    function Bt() {
      return String(Math.random()).substr(2);
    }
    var ls = async (e) => {
      const t = await y.Config.getRandomArrayBuffer(e);
      return y.BufferUtils.base64Encode(t);
    };
    function hs(e, t) {
      const n = Math.min(t, e.length), r = e.slice(), o = [];
      for (let c = 0; c < n; c++) o.push(At(r));
      return o;
    }
    function Ge(e, t) {
      e.then((n) => {
        t?.(null, n);
      }).catch((n) => {
        t?.(n);
      });
    }
    function ke(e, t, n) {
      return n == "msgpack" ? (t || Te("MsgPack"), t.decode(e)) : JSON.parse(String(e));
    }
    function Le(e, t, n) {
      return n == "msgpack" ? (t || Te("MsgPack"), t.encode(e, !0)) : JSON.stringify(e);
    }
    function Sn(e) {
      return e.map(function(t) {
        return t && t.toLowerCase();
      });
    }
    function us(e) {
      return e.map(function(t) {
        return t && t.toUpperCase();
      });
    }
    function Yt(e) {
      return Math.min((e + 2) / 3, 2);
    }
    function St() {
      return 1 - Math.random() * 0.2;
    }
    function qt(e, t) {
      return e * Yt(t) * St();
    }
    function Gt() {
      return typeof global < "u" ? global : typeof window < "u" ? window : self;
    }
    function Zt(e, t) {
      return Object.keys(e).every((n) => e[n] === t[n]) && Object.keys(t).every((n) => t[n] === e[n]);
    }
    function kt(e) {
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
    function en(e) {
      const t = y.BufferUtils, n = t.utf8Encode(e);
      return t.base64Encode(n);
    }
    function ds(e, t) {
      return e.length === t.length && e.every(function(n, r) {
        return n === t[r];
      });
    }
    function Ht(e) {
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
    function Te(e) {
      throw Ht(e);
    }
    async function gs(e, t = 5e3, n = "Timeout expired") {
      const r = new _(n, 5e4, 500);
      return Promise.race([e, new Promise((o, c) => y.Config.setTimeout(() => c(r), t))]);
    }
    function fs(e) {
      return J(this, null, function* () {
        const t = [];
        let n = null;
        const r = e((o) => {
          if (n) {
            const c = n;
            n = null, c(o);
          } else t.push(o);
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
            yield yield new ne(new Promise((o) => {
              n = o;
            }));
          }
        } finally {
          r();
        }
      });
    }
    var kn = "2.29.0", Ee = {
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
      version: kn,
      protocolVersion: 6,
      agent: "ably-js/" + kn,
      getPort: ar,
      getHttpScheme: cr,
      getPrimaryDomainFromEndpoint: ms,
      getEndpointFallbackHosts: Xe,
      getFallbackHosts: bs,
      getHosts: lr,
      checkHost: vs,
      objectifyOptions: ur,
      normaliseOptions: gr,
      defaultGetHeaders: fr,
      defaultPostHeaders: pr
    };
    function ar(e, t) {
      return t || e.tls ? e.tlsPort : e.port;
    }
    function cr(e) {
      return e.tls ? "https://" : "http://";
    }
    function On(e) {
      return e.includes(":") && !e.startsWith("[") ? "[" + e + "]" : e;
    }
    function ps(e) {
      return e.includes(".") || e.includes("::") || e === "localhost";
    }
    function ms(e) {
      return ps(e) ? e : e.startsWith("nonprod:") ? `${e.replace("nonprod:", "")}.realtime.ably-nonprod.net` : `${e}.realtime.ably.net`;
    }
    function Xe(e) {
      return ps(e) ? [] : e.startsWith("nonprod:") ? ys(e.replace("nonprod:", ""), "ably-realtime-nonprod.com") : ys(e, "ably-realtime.com");
    }
    function ys(e, t) {
      return [
        "a",
        "b",
        "c",
        "d",
        "e"
      ].map((n) => `${e}.${n}.fallback.${t}`);
    }
    function bs(e) {
      const t = e.fallbackHosts, n = typeof e.httpMaxRetryCount < "u" ? e.httpMaxRetryCount : Ee.httpMaxRetryCount;
      return t ? hs(t, n) : [];
    }
    function lr(e) {
      return [e.primaryDomain].concat(bs(e));
    }
    function vs(e) {
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
    function hr(e) {
      const t = {};
      for (const n in Ee.TIMEOUTS) t[n] = e[n] || Ee.TIMEOUTS[n];
      return t;
    }
    function dt(e) {
      let t = Ee.agent;
      if (e.agents) for (var n in e.agents) t += " " + n + "/" + e.agents[n];
      return t;
    }
    function ur(e, t, n, r, o) {
      if (e === void 0) {
        const u = t ? `${n} must be initialized with either a client options object, an Ably API key, or an Ably Token` : `${n} must be initialized with a client options object`;
        throw a.logAction(r, a.LOG_ERROR, `${n}()`, u), new Error(u);
      }
      let c;
      if (typeof e == "string")
        if (e.indexOf(":") == -1) {
          if (!t) {
            const u = `${n} cannot be initialized with just an Ably Token; you must provide a client options object with a \`plugins\` property. (Set this Ably Token as the object’s \`token\` property.)`;
            throw a.logAction(r, a.LOG_ERROR, `${n}()`, u), new Error(u);
          }
          c = { token: e };
        } else {
          if (!t) {
            const u = `${n} cannot be initialized with just an Ably API key; you must provide a client options object with a \`plugins\` property. (Set this Ably API key as the object’s \`key\` property.)`;
            throw a.logAction(r, a.LOG_ERROR, `${n}()`, u), new Error(u);
          }
          c = { key: e };
        }
      else c = e;
      return o && (c = j(E({}, c), { plugins: E(E({}, o), c.plugins) })), c;
    }
    function dr(e) {
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
    function gr(e, t, n) {
      const r = n ?? a.defaultLogger;
      e.environment && r.deprecated("The `environment` client option", "Use the `endpoint` client option instead."), e.restHost && r.deprecated("The `restHost` client option", "Use the `endpoint` client option instead."), e.realtimeHost && r.deprecated("The `realtimeHost` client option", "Use the `endpoint` client option instead."), dr(e), typeof e.recover == "function" && e.closeOnUnload === !0 && (a.logAction(r, a.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), e.recover = void 0), "closeOnUnload" in e || (e.closeOnUnload = !e.recover), "queueMessages" in e || (e.queueMessages = !0);
      const o = e.endpoint || Ee.ENDPOINT;
      !e.fallbackHosts && !e.restHost && !e.realtimeHost && !e.port && !e.tlsPort && (e.fallbackHosts = Xe(e.environment || o));
      const c = e.environment && `${e.environment}.realtime.ably.net`, u = e.restHost || e.realtimeHost || c || ms(o);
      (e.fallbackHosts || []).concat(u).forEach(vs), e.port = e.port || Ee.PORT, e.tlsPort = e.tlsPort || Ee.TLS_PORT, "tls" in e || (e.tls = !0);
      const d = hr(e);
      t ? "useBinaryProtocol" in e ? e.useBinaryProtocol = y.Config.supportsBinary && e.useBinaryProtocol : e.useBinaryProtocol = y.Config.preferBinary : e.useBinaryProtocol = !1;
      const b = {};
      e.clientId && (b["X-Ably-ClientId"] = y.BufferUtils.base64Encode(y.BufferUtils.utf8Encode(e.clientId))), "idempotentRestPublishing" in e || (e.idempotentRestPublishing = !0);
      let w = null, O = e.connectivityCheckUrl;
      if (e.connectivityCheckUrl) {
        let [N, k] = e.connectivityCheckUrl.split("?");
        w = k ? jt(k) : {}, N.indexOf("://") === -1 && (N = "https://" + N), O = N;
      }
      let I = e.wsConnectivityCheckUrl;
      return I && I.indexOf("://") === -1 && (I = "wss://" + I), j(E({}, e), {
        primaryDomain: u,
        maxMessageSize: e.maxMessageSize || Ee.maxMessageSize,
        timeouts: d,
        connectivityCheckParams: w,
        connectivityCheckUrl: O,
        wsConnectivityCheckUrl: I,
        headers: b
      });
    }
    function tn(e, t, n) {
      const r = n || {};
      if (r.cipher) {
        e || Te("Crypto");
        const o = e.getCipher(r.cipher, t);
        r.cipher = o.cipherParams, r.channelCipher = o.cipher;
      } else "cipher" in r && (r.cipher = void 0, r.channelCipher = null);
      return r;
    }
    var _s = {
      json: "application/json",
      xml: "application/xml",
      html: "text/html",
      msgpack: "application/x-msgpack",
      text: "text/plain"
    }, bt = {
      format: "json",
      protocolVersion: Ee.protocolVersion
    };
    function fr(e, { format: t, protocolVersion: n = bt.protocolVersion } = {}) {
      return {
        accept: _s[t ?? (e.useBinaryProtocol ? "msgpack" : "json")],
        "X-Ably-Version": n.toString(),
        "Ably-Agent": dt(e)
      };
    }
    function pr(e, { format: t, protocolVersion: n = bt.protocolVersion } = {}) {
      const r = _s[t ?? (e.useBinaryProtocol ? "msgpack" : "json")];
      return {
        accept: r,
        "content-type": r,
        "X-Ably-Version": n.toString(),
        "Ably-Agent": dt(e)
      };
    }
    var Q = Ee;
    function mr(e) {
      return Object.assign(Ee, e);
    }
    var ws = class To {
      constructor(t, n) {
        this.logger = t, this.members = n || [];
      }
      call(t, n) {
        for (const r of this.members) if (r) try {
          r(t, n);
        } catch (o) {
          a.logAction(this.logger, a.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + o + "; stack = " + o.stack);
        }
      }
      push(...t) {
        this.members.push(...t);
      }
      createPromise() {
        return new Promise((t, n) => {
          this.push((r, o) => {
            r ? n(r) : t(o);
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
        const r = new To(t, n);
        return Object.assign((o, c) => r.call(o, c), {
          push: (o) => r.push(o),
          createPromise: () => r.createPromise(),
          resolveAll: (o) => r.resolveAll(o),
          rejectAll: (o) => r.rejectAll(o)
        });
      }
    }, Cs = /* @__PURE__ */ ((e) => (e.Get = "get", e.Delete = "delete", e.Post = "post", e.Put = "put", e.Patch = "patch", e))(Cs || {}), we = Cs, Wt = /* @__PURE__ */ ((e) => (e[e.Success = 200] = "Success", e[e.NoContent = 204] = "NoContent", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.Forbidden = 403] = "Forbidden", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.InternalServerError = 500] = "InternalServerError", e))(Wt || {});
    function yr(e) {
      return e >= 200 && e < 400;
    }
    var Ot = Wt, Mn = Math.pow(2, 17);
    function br() {
      return ("000000" + Math.floor(Math.random() * 1e16)).slice(-16);
    }
    function vr(e) {
      return !!e.connection;
    }
    var Rs = 40170, _r = 40300;
    function As(e) {
      return Qe(e) ? (e.code || (e.statusCode === 403 ? e.code = _r : (e.code = Rs, e.statusCode = 401)), e) : new _(pe(e), e.code || Rs, e.statusCode || 401);
    }
    var Tn = (e, t) => {
      const n = y.BufferUtils, r = n.utf8Encode(e), o = n.utf8Encode(t), c = n.hmacSha256(r, o);
      return n.base64Encode(c);
    };
    function Ss(e) {
      if (!e) return "";
      typeof e == "string" && (e = JSON.parse(e));
      const t = /* @__PURE__ */ Object.create(null), n = tt(e, !0);
      if (!n) return "";
      n.sort();
      for (let r = 0; r < n.length; r++) t[n[r]] = e[n[r]].sort();
      return JSON.stringify(t);
    }
    function ks(e, t) {
      if (e.authCallback) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with authCallback");
      else if (e.authUrl) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with authUrl");
      else if (e.key) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with client-side signing");
      else if (e.tokenDetails) a.logAction(t, a.LOG_MINOR, "Auth()", "using token auth with supplied token only");
      else {
        const n = "authOptions must include valid authentication parameters";
        throw a.logAction(t, a.LOG_ERROR, "Auth()", n), new _(n, 40106, 401);
      }
    }
    function wr(e) {
      return "useTokenAuth" in e && !e.useTokenAuth;
    }
    function Os(e) {
      return e.useTokenAuth || !wr(e) && (e.authCallback || e.authUrl || e.token || e.tokenDetails);
    }
    function Cr(e) {
      return !e.key && !e.authCallback && !e.authUrl;
    }
    var Rr = 0;
    function Ar() {
      return Rr++;
    }
    var Ms = class {
      constructor(e, t) {
        if (this.authOptions = {}, this.client = e, this.tokenParams = t.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, Os(t))
          Cr(t) && a.logAction(this.logger, a.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(t.defaultTokenParams, t), ks(this.authOptions, this.logger);
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
        return Ie(e, 0), this._authorizeImpl(e[0], e[1]);
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
          return vr(this.client) ? new Promise((r, o) => {
            this.client.connection.connectionManager.onAuthUpdated(n, (c, u) => c ? o(c) : r(u));
          }) : n;
        } catch (n) {
          throw this.client.connection && n.statusCode === Ot.Forbidden && this.client.connection.connectionManager.actOnErrorFromAuthorize(n), n;
        }
      }
      async _forceNewToken(e, t) {
        this.tokenDetails = null, this._saveTokenOptions(e, t), ks(this.authOptions, this.logger);
        try {
          return this._ensureValidAuthCredentials(!0);
        } finally {
          delete this.tokenParams.timestamp, delete this.authOptions.queryTime;
        }
      }
      requestToken(...e) {
        return Ie(e, 0), this._requestTokenImpl(e[0], e[1]);
      }
      async _requestTokenImpl(e, t) {
        const n = t || this.authOptions, r = e || qe(this.tokenParams);
        let o, c = this.client;
        if (n.authCallback)
          a.logAction(this.logger, a.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), o = n.authCallback;
        else if (n.authUrl)
          a.logAction(this.logger, a.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), o = (d, b) => {
            const w = x({ accept: "application/json, text/plain" }, n.authHeaders), O = n.authMethod && n.authMethod.toLowerCase() === "post";
            let I;
            const N = n.authUrl.indexOf("?");
            N > -1 && (I = jt(n.authUrl.slice(N)), n.authUrl = n.authUrl.slice(0, N), O || (n.authParams = x(I, n.authParams)));
            const k = x({}, n.authParams || {}, d), H = (q) => {
              var ee, ge;
              let me = (ee = q.body) != null ? ee : null, be = null;
              if (q.error) a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + pe(q.error));
              else {
                const Ue = (ge = q.headers["content-type"]) != null ? ge : null;
                Array.isArray(Ue) ? be = Ue.join(", ") : be = Ue, a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + be + "; body: " + Rn(me));
              }
              if (q.error) {
                b(q.error, null);
                return;
              }
              if (q.unpacked) {
                b(null, me);
                return;
              }
              if (y.BufferUtils.isBuffer(me) && (me = me.toString()), !be) {
                b(new _({
                  message: "authUrl response is missing a Content-Type header",
                  code: 40170,
                  statusCode: 401,
                  remediation: "Set a Content-Type response header on your authUrl endpoint: application/json for a TokenDetails/TokenRequest object, text/plain for a token string, or application/jwt for a JWT."
                }), null);
                return;
              }
              const oe = be.indexOf("application/json") > -1, Ve = be.indexOf("text/plain") > -1 || be.indexOf("application/jwt") > -1;
              if (!oe && !Ve) {
                b(new _({
                  message: "authUrl responded with unacceptable Content-Type " + be + ". Expected one of: text/plain, application/jwt or application/json",
                  code: 40170,
                  statusCode: 401,
                  remediation: "Change your authUrl endpoint to respond with a Content-Type the SDK can parse: application/json (TokenDetails/TokenRequest), text/plain (token string), or application/jwt (JWT)."
                }), null);
                return;
              }
              if (oe) {
                if (me.length > Mn) {
                  b(new _({
                    message: "authUrl JSON response exceeded the maximum permitted length of 128 KB",
                    code: 40170,
                    statusCode: 401,
                    remediation: 'Two things commonly cause this. If your authUrl wraps the Ably token in an envelope with extra fields, return only the token payload (a token string, or a TokenRequest/TokenDetails object). If the token carries a very large capability, narrow it: grant a wildcard resource such as "*" or "namespace:*" instead of listing every channel.'
                  }), null);
                  return;
                }
                try {
                  me = JSON.parse(me);
                } catch (Ue) {
                  b(new _("Unexpected error processing authURL response; err = " + Ue.message, 40170, 401), null);
                  return;
                }
              }
              b(null, me, be);
            };
            if (a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + n.authUrl + "; Params: " + JSON.stringify(k) + "; method: " + (O ? "POST" : "GET")), O) {
              const q = w || {};
              q["content-type"] = "application/x-www-form-urlencoded";
              const ee = yt(k).slice(1);
              Ge(this.client.http.doUri(we.Post, n.authUrl, q, ee, I), (ge, me) => H(ge || me));
            } else Ge(this.client.http.doUri(we.Get, n.authUrl, w || {}, null, k), (q, ee) => H(q || ee));
          };
        else if (n.key)
          a.logAction(this.logger, a.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), o = (d, b) => {
            Ge(this.createTokenRequest(d, n), (w, O) => b(w, O ?? null));
          };
        else {
          const d = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
          throw a.logAction(this.logger, a.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), new _({
            message: d,
            code: 40171,
            statusCode: 403,
            remediation: "Initialise the client with one of ClientOptions.{ key, authUrl, authCallback } so the SDK can refresh tokens."
          });
        }
        "capability" in r && (r.capability = Ss(r.capability));
        const u = (d, b) => {
          const w = "/keys/" + d.keyName + "/requestToken", O = function(N) {
            return c.baseUri(N) + w;
          }, I = Q.defaultPostHeaders(this.client.options, { format: "json" });
          n.requestHeaders && x(I, n.requestHeaders), a.logAction(this.logger, a.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + w + "; Token params: " + JSON.stringify(d)), Ge(this.client.http.do(we.Post, O, I, JSON.stringify(d), null), (N, k) => N ? b(N) : b(k.error, k.body, k.unpacked));
        };
        return new Promise((d, b) => {
          let w = !1, O = this.client.options.timeouts.realtimeRequestTimeout, I = y.Config.setTimeout(() => {
            w = !0;
            const N = "Token request via authCallback/authUrl did not complete within the configured timeout (" + O / 1e3 + " seconds)";
            a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", N), b(new _({
              message: N,
              code: 40170,
              statusCode: 401,
              remediation: "Add logging to your authCallback/authUrl to find where it stalls, and make sure it always resolves and that authUrl is reachable. If the work legitimately takes longer, raise ClientOptions.realtimeRequestTimeout."
            }));
          }, O);
          o(r, (N, k, H) => {
            if (w) return;
            if (y.Config.clearTimeout(I), N) {
              a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + pe(N)), b(As(N));
              return;
            }
            if (typeof k == "string") {
              k.length === 0 ? b(new _({
                message: "Token string is empty",
                code: 40170,
                statusCode: 401,
                remediation: "Return a non-empty value from your authCallback/authUrl: a token string, a TokenRequest, or a TokenDetails object."
              })) : k.length > Mn ? b(new _({
                message: "Token string exceeded max permitted length (was " + k.length + " bytes)",
                code: 40170,
                statusCode: 401,
                remediation: 'Return only the bare signed token string from your authCallback/authUrl, not an envelope, debug output, or a stringified TokenDetails wrapping it, since a token must serialise to under 128 KB. If the token carries a very large capability, narrow it: grant a wildcard resource such as "*" or "namespace:*" instead of listing every channel.'
              })) : k === "undefined" || k === "null" ? b(new _({
                message: "Token string was literal null/undefined",
                code: 40170,
                statusCode: 401,
                remediation: 'Return the token itself, not "undefined"/"null". Callbacks that have no value to return should pass an error instead.'
              })) : k[0] === "{" && !(H && H.indexOf("application/jwt") > -1) ? b(new _({
                message: "Token was double-encoded",
                code: 40170,
                statusCode: 401,
                remediation: "Return TokenDetails/TokenRequest as a parsed object, or set Content-Type: application/jwt for JWT tokens."
              })) : d({ token: k });
              return;
            }
            if (typeof k != "object" || k === null) {
              const ee = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof k;
              a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", ee), b(new _({
                message: ee,
                code: 40170,
                statusCode: 401,
                remediation: "If authenticating with an authCallback, update it to callback with (err, tokenStringOrTokenDetailsOrTokenRequest). If authenticating with an authUrl, update the server to respond with a token string or TokenDetails/TokenRequest JSON."
              }));
              return;
            }
            const q = JSON.stringify(k).length;
            if (q > Mn && !n.suppressMaxLengthCheck) {
              b(new _({
                message: "Token request/details object exceeded max permitted stringified size (was " + q + " bytes)",
                code: 40170,
                statusCode: 401,
                remediation: 'The TokenRequest/TokenDetails object must serialise to under 128 KB. Trim any unused fields, and if it carries a very large capability, narrow it: grant a wildcard resource such as "*" or "namespace:*" instead of listing every channel.'
              }));
              return;
            }
            if ("issued" in k) {
              d(k);
              return;
            }
            if (!("keyName" in k)) {
              const ee = "Expected token request callback to call back with a token string, token request object, or token details object. The returned object has neither a keyName nor an issued field.";
              a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", ee), b(new _({
                message: ee,
                code: 40170,
                statusCode: 401,
                remediation: "Return a token string, a TokenRequest (an object with a `keyName` field), or a TokenDetails (an object with an `issued` field) from your authCallback/authUrl."
              }));
              return;
            }
            u(k, (ee, ge, me) => {
              if (ee) {
                a.logAction(this.logger, a.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + pe(ee)), b(As(ee));
                return;
              }
              me || (ge = JSON.parse(ge)), a.logAction(this.logger, a.LOG_MINOR, "Auth.getToken()", "token received"), d(ge);
            });
          });
        });
      }
      createTokenRequest(...e) {
        return Ie(e, 0), this._createTokenRequestImpl(e[0], e[1]);
      }
      async _createTokenRequestImpl(e, t) {
        t = t || this.authOptions, e = e || qe(this.tokenParams);
        const n = t.key;
        if (!n) throw new _({
          message: "No key specified",
          code: 40101,
          statusCode: 403,
          remediation: "Pass { key } in the authOptions argument, or set ClientOptions.key and omit the authOptions argument. A passed authOptions replaces the stored options rather than merging."
        });
        const r = n.split(":"), o = r[0], c = r[1];
        if (!c) throw new _({
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
        "capability" in e && (e.capability = Ss(e.capability));
        const u = x({ keyName: o }, e), d = e.clientId || "", b = e.ttl || "", w = e.capability || "";
        u.timestamp || (u.timestamp = await this._getTimestamp(t && t.queryTime));
        const O = u.nonce || (u.nonce = br()), I = u.timestamp, N = u.keyName + `
` + b + `
` + w + `
` + d + `
` + I + `
` + O + `
`;
        return u.mac = u.mac || Tn(N, c), a.logAction(this.logger, a.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), u;
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
          return { authorization: "Bearer " + en(e.token) };
        }
      }
      _saveBasicOptions(e) {
        this.method = "basic", this.key = e.key, this.basicKey = en(e.key), this.authOptions = e || {}, "clientId" in e && this._userSetClientId(e.clientId);
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
        const n = (this.waitingForTokenRequest || (this.waitingForTokenRequest = ws.create(this.logger))).createPromise();
        if (this.currentTokenRequestId !== null && !e) return n;
        const r = this.currentTokenRequestId = Ar();
        let o, c = null;
        try {
          o = await this.requestToken(this.tokenParams, this.authOptions);
        } catch (d) {
          c = d;
        }
        if (this.currentTokenRequestId > r)
          return a.logAction(this.logger, a.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one"), n;
        this.currentTokenRequestId = null;
        const u = this.waitingForTokenRequest;
        return this.waitingForTokenRequest = null, c ? (u?.rejectAll(c), n) : (u?.resolveAll(this.tokenDetails = o), n);
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
    }, nt = Ms;
    function In(e) {
      const t = [];
      if (e) for (const n in e) t.push(n + "=" + e[n]);
      return t.join("&");
    }
    function st(e, t) {
      return e + (t ? "?" : "") + In(t);
    }
    function Mt(e, t, n, r, o) {
      e.error ? a.logActionNoStrip(o, a.LOG_MICRO, "Http." + t + "()", "Received Error; " + st(n, r) + "; Error: " + pe(e.error)) : a.logActionNoStrip(o, a.LOG_MICRO, "Http." + t + "()", "Received; " + st(n, r) + "; Headers: " + In(e.headers) + "; StatusCode: " + e.statusCode + "; Body" + (y.BufferUtils.isBuffer(e.body) ? " (Base64): " + y.BufferUtils.base64Encode(e.body) : ": " + e.body));
    }
    function Ts(e, t, n, r, o) {
      o.shouldLog(a.LOG_MICRO) && a.logActionNoStrip(o, a.LOG_MICRO, "Http." + e + "()", "Sending; " + st(t, r) + "; Body" + (y.BufferUtils.isBuffer(n) ? " (Base64): " + y.BufferUtils.base64Encode(n) : ": " + n));
    }
    var rt = class {
      constructor(e) {
        this.client = e, this.platformHttp = new y.Http(e), this.checkConnectivity = this.platformHttp.checkConnectivity ? () => this.platformHttp.checkConnectivity() : void 0;
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
        return n ? [n].concat(Q.getFallbackHosts(e.options)) : Q.getHosts(e.options);
      }
      async do(e, t, n, r, o) {
        try {
          const c = this.client;
          if (!c) return { error: new _("http.do called without client", 5e4, 500) };
          const u = typeof t == "function" ? t : function(I) {
            return c.baseUri(I) + t;
          }, d = c._currentFallback;
          if (d)
            if (d.validUntil > y.Config.now()) {
              const I = await this.doUri(e, u(d.host), n, r, o);
              return I.error && this.platformHttp.shouldFallback(I.error) ? (c._currentFallback = null, this.do(e, t, n, r, o)) : I;
            } else c._currentFallback = null;
          const b = this._getHosts(c);
          if (b.length === 1) return this.doUri(e, u(b[0]), n, r, o);
          let w = null;
          const O = async (I, N) => {
            const k = I.shift();
            w = w ?? y.Config.now();
            const H = await this.doUri(e, u(k), n, r, o);
            return H.error && this.platformHttp.shouldFallback(H.error) && I.length ? y.Config.now() - w > c.options.timeouts.httpMaxRetryDuration ? { error: new _(`Timeout for trying fallback hosts retries. Total elapsed time exceeded the ${c.options.timeouts.httpMaxRetryDuration}ms limit`, 50003, 500) } : O(I, !0) : (N && (c._currentFallback = {
              host: k,
              validUntil: y.Config.now() + c.options.timeouts.fallbackRetryTimeout
            }), H);
          };
          return O(b);
        } catch (c) {
          return { error: new _(`Unexpected error in Http.do: ${pe(c)}`, 5e4, 500) };
        }
      }
      async doUri(e, t, n, r, o) {
        try {
          Ts(e, t, r, o, this.logger);
          const c = await this.platformHttp.doUri(e, t, n, r, o);
          return this.logger.shouldLog(a.LOG_MICRO) && Mt(c, e, t, o, this.logger), c;
        } catch (c) {
          return { error: new _(`Unexpected error in Http.doUri: ${pe(c)}`, 5e4, 500) };
        }
      }
    };
    function Sr(e, t, n, r) {
      try {
        n.apply(t, r);
      } catch (o) {
        a.logAction(e, a.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + o + "; stack = " + (o && o.stack));
      }
    }
    function En(e, t, n) {
      let r, o, c;
      for (let u = 0; u < e.length; u++)
        if (r = e[u], n && (r = r[n]), Array.isArray(r)) {
          for (; (o = r.indexOf(t)) !== -1; ) r.splice(o, 1);
          n && r.length === 0 && delete e[u][n];
        } else if (Me(r))
          for (c in r) Object.prototype.hasOwnProperty.call(r, c) && Array.isArray(r[c]) && En([r], t, c);
    }
    var kr = class {
      constructor(e) {
        this.logger = e, this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
      }
      on(...e) {
        if (e.length === 1) {
          const t = e[0];
          if (typeof t == "function") this.any.push(t);
          else throw new Error("EventListener.on(): Invalid arguments: " + y.Config.inspect(e));
        }
        if (e.length === 2) {
          const [t, n] = e;
          if (typeof n != "function") throw new Error("EventListener.on(): Invalid arguments: " + y.Config.inspect(e));
          if (Se(t)) this.any.push(n);
          else if (Array.isArray(t)) t.forEach((r) => {
            this.on(r, n);
          });
          else {
            if (typeof t != "string") throw new Error("EventListener.on(): Invalid arguments: " + y.Config.inspect(e));
            (this.events[t] || (this.events[t] = [])).push(n);
          }
        }
      }
      off(...e) {
        if (e.length == 0 || Se(e[0]) && Se(e[1])) {
          this.any = [], this.events = /* @__PURE__ */ Object.create(null), this.anyOnce = [], this.eventsOnce = /* @__PURE__ */ Object.create(null);
          return;
        }
        const [t, n] = e;
        let r = null, o = null;
        if (e.length === 1 || !n)
          typeof t == "function" ? r = t : o = t;
        else {
          if (typeof n != "function") throw new Error("EventEmitter.off(): invalid arguments:" + y.Config.inspect(e));
          [o, r] = [t, n];
        }
        if (r && Se(o)) {
          En([
            this.any,
            this.events,
            this.anyOnce,
            this.eventsOnce
          ], r);
          return;
        }
        if (Array.isArray(o)) {
          o.forEach((c) => {
            this.off(c, r);
          });
          return;
        }
        if (typeof o != "string") throw new Error("EventEmitter.off(): invalid arguments:" + y.Config.inspect(e));
        r ? En([this.events, this.eventsOnce], r, o) : (delete this.events[o], delete this.eventsOnce[o]);
      }
      listeners(e) {
        if (e) {
          const t = this.events[e] || [];
          return this.eventsOnce[e] && Array.prototype.push.apply(t, this.eventsOnce[e]), t.length ? t : null;
        }
        return this.any.length ? this.any : null;
      }
      emit(e, ...t) {
        const n = { event: e }, r = [];
        this.anyOnce.length && (Array.prototype.push.apply(r, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(r, this.any);
        const o = this.eventsOnce[e];
        o && (Array.prototype.push.apply(r, o), delete this.eventsOnce[e]);
        const c = this.events[e];
        c && Array.prototype.push.apply(r, c), r.forEach((u) => {
          Sr(this.logger, n, u, t);
        });
      }
      once(...e) {
        const t = e.length;
        if (t === 0 || t === 1 && typeof e[0] != "function") {
          const o = e[0];
          return new Promise((c) => {
            this.once(o, c);
          });
        }
        const [n, r] = e;
        if (e.length === 1 && typeof n == "function") this.anyOnce.push(n);
        else if (Se(n)) {
          if (typeof r != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
          this.anyOnce.push(r);
        } else if (Array.isArray(n)) {
          const o = this, c = function() {
            const u = Array.prototype.slice.call(arguments);
            if (n.forEach(function(d) {
              o.off(d, c);
            }), typeof r != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
            r.apply(this, u);
          };
          n.forEach(function(u) {
            o.on(u, c);
          });
        } else {
          if (typeof n != "string") throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
          const o = this.eventsOnce[n] || (this.eventsOnce[n] = []);
          if (r) {
            if (typeof r != "function") throw new Error("EventEmitter.once(): Invalid arguments:" + y.Config.inspect(e));
            o.push(r);
          }
        }
      }
      async whenState(e, t) {
        if (typeof e != "string" || typeof t != "string") throw new Error("whenState requires a valid state String argument");
        return e === t ? null : this.once(e);
      }
    }, Oe = kr, V = {
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
    }, Is = [];
    Object.keys(V).forEach(function(e) {
      Is[V[e]] = e;
    });
    var Pe = {
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
    }, vt = Object.keys(Pe);
    Pe.MODE_ALL = Pe.PRESENCE | Pe.PUBLISH | Pe.SUBSCRIBE | Pe.PRESENCE_SUBSCRIBE | Pe.ANNOTATION_PUBLISH | Pe.ANNOTATION_SUBSCRIBE | Pe.OBJECT_SUBSCRIBE | Pe.OBJECT_PUBLISH;
    var Pn = [
      "PRESENCE",
      "PUBLISH",
      "SUBSCRIBE",
      "PRESENCE_SUBSCRIBE",
      "ANNOTATION_PUBLISH",
      "ANNOTATION_SUBSCRIBE",
      "OBJECT_SUBSCRIBE",
      "OBJECT_PUBLISH"
    ];
    function Es(e) {
      return !!e && !!e.cipher && !!e.channelCipher;
    }
    function Or(e) {
      return !e || !e.channelOptions ? {
        channelOptions: e,
        plugins: {},
        baseEncodedPreviousPayload: void 0
      } : e;
    }
    function nn(e, t, n) {
      if (n && n.cipher) {
        e || Te("Crypto");
        const r = e.getCipher(n.cipher, t);
        return {
          cipher: r.cipherParams,
          channelCipher: r.cipher
        };
      }
      return n ?? {};
    }
    async function Ps(e, t) {
      const { data: n, encoding: r } = await xs(e.data, e.encoding, t);
      return e.data = n, e.encoding = r, e;
    }
    async function xs(e, t, n) {
      let r = n.channelCipher, o = e, c = t ? t + "/" : "";
      y.BufferUtils.isBuffer(o) || (o = y.BufferUtils.utf8Encode(String(o)), c = c + "utf-8/");
      const u = await r.encrypt(o);
      return c = c + "cipher+" + r.algorithm, {
        data: u,
        encoding: c
      };
    }
    async function xn(e, t) {
      const { data: n, encoding: r } = Nn(e.data, e.encoding);
      return e.data = n, e.encoding = r, Es(t) ? Ps(e, t) : e;
    }
    function Nn(e, t) {
      if (typeof e == "string" || y.BufferUtils.isBuffer(e) || e === null || e === void 0) return {
        data: e,
        encoding: t
      };
      if (Me(e) || Array.isArray(e)) return {
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
    async function Ln(e, t) {
      const { data: n, encoding: r, error: o } = await Ft(e.data, e.encoding, t);
      if (e.data = n, e.encoding = r, o) throw o;
    }
    async function Ft(e, t, n) {
      const r = Or(n);
      let o = e, c = e, u = t, d;
      if (t) {
        const b = t.split("/");
        let w, O = b.length, I = "";
        try {
          for (; (w = O) > 0; ) {
            const N = b[--O].match(/([-\w]+)(\+([\w-]+))?/);
            if (!N) break;
            switch (I = N[1], I) {
              case "base64":
                c = y.BufferUtils.base64Decode(String(c)), w == b.length && (o = c);
                continue;
              case "utf-8":
                c = y.BufferUtils.utf8Decode(c);
                continue;
              case "json":
                c = JSON.parse(c);
                continue;
              case "cipher":
                if (r.channelOptions != null && r.channelOptions.cipher && r.channelOptions.channelCipher) {
                  const k = N[3], H = r.channelOptions.channelCipher;
                  if (k != H.algorithm) throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                  c = await H.decrypt(c);
                  continue;
                } else throw new Error("Unable to decrypt message; not an encrypted channel");
              case "vcdiff":
                if (!r.plugins || !r.plugins.vcdiff) throw new _({
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
                  let k = r.baseEncodedPreviousPayload;
                  typeof k == "string" && (k = y.BufferUtils.utf8Encode(k));
                  const H = y.BufferUtils.toBuffer(k);
                  c = y.BufferUtils.toBuffer(c), c = y.BufferUtils.arrayBufferViewToBuffer(r.plugins.vcdiff.decode(c, H)), o = c;
                } catch (k) {
                  throw new _({
                    message: "Vcdiff delta decode failed with " + k,
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
        } catch (N) {
          const k = N;
          d = new _({
            message: `Error processing the ${I} encoding, decoder returned ‘${k.message}’`,
            code: k.code || 40013,
            statusCode: 400,
            remediation: k.remediation
          });
        } finally {
          u = w <= 0 ? null : b.slice(0, w).join("/");
        }
      }
      return d ? {
        error: d,
        data: c,
        encoding: u
      } : (r.baseEncodedPreviousPayload = o, {
        data: c,
        encoding: u
      });
    }
    function Dn(...e) {
      const t = e.length > 0 ? "json" : "msgpack", { data: n, encoding: r } = sn(this.data, this.encoding, t);
      return Object.assign({}, this, {
        encoding: r,
        data: n
      });
    }
    function sn(e, t, n) {
      return !e || !y.BufferUtils.isBuffer(e) ? {
        data: e,
        encoding: t
      } : n === "msgpack" ? {
        data: y.BufferUtils.toBuffer(e),
        encoding: t
      } : {
        data: y.BufferUtils.base64Encode(e),
        encoding: t ? t + "/base64" : "base64"
      };
    }
    var rn = {
      encryptData: xs,
      encodeData: Nn,
      encodeDataForWire: sn,
      decodeData: Ft
    };
    function on(e) {
      const { id: t, connectionId: n, timestamp: r } = e;
      let o;
      switch (e.action) {
        case V.MESSAGE:
          o = e.messages;
          break;
        case V.PRESENCE:
        case V.SYNC:
          o = e.presence;
          break;
        case V.ANNOTATION:
          o = e.annotations;
          break;
        case V.OBJECT:
        case V.OBJECT_SYNC:
          o = e.state;
          break;
        default:
          throw new _("Unexpected action " + e.action, 4e4, 400);
      }
      for (let c = 0; c < o.length; c++) {
        const u = o[c];
        u.connectionId || (u.connectionId = n), u.timestamp || (u.timestamp = r), t && !u.id && (u.id = t + ":" + c);
      }
    }
    function p(e, t) {
      let n = "[" + t;
      for (const r in e) r === "data" ? typeof e.data == "string" ? n += "; data=" + e.data : y.BufferUtils.isBuffer(e.data) ? n += "; data (buffer)=" + y.BufferUtils.base64Encode(e.data) : typeof e.data < "u" && (n += "; data (json)=" + JSON.stringify(e.data)) : r && (r === "extras" || r === "operation") ? n += "; " + r + "=" + JSON.stringify(e[r]) : r === "version" ? n += "; version=" + JSON.stringify(e[r]) : r === "annotations" ? n += "; annotations=" + JSON.stringify(e[r]) : e[r] !== void 0 && (n += "; " + r + "=" + e[r]);
      return n += "]", n;
    }
    var R = class {
    }, P = class {
      constructor(e) {
        this.Platform = y, this.ErrorInfo = _, this.Logger = a, this.Defaults = Q, this.Utils = ce, this.EventEmitter = Oe, this.MessageEncoding = rn;
        var t, n, r, o, c, u, d, b, w, O, I, N;
        this._additionalHTTPRequestImplementations = (t = e.plugins) != null ? t : null, this.logger = new a(), this.logger.setLog(e.logLevel, e.logHandler), a.logAction(this.logger, a.LOG_MICRO, "BaseClient()", "initialized with clientOptions " + y.Config.inspect(e)), this._MsgPack = (r = (n = e.plugins) == null ? void 0 : n.MsgPack) != null ? r : null;
        const k = this.options = Q.normaliseOptions(e, this._MsgPack, this.logger);
        if (k.key) {
          const H = k.key.match(/^([^:\s]+):([^:.\s]+)$/);
          if (!H) {
            const q = "invalid key parameter";
            throw a.logAction(this.logger, a.LOG_ERROR, "BaseClient()", q), new _({
              message: q,
              code: 40400,
              statusCode: 404,
              remediation: 'ClientOptions.key must be the full "appId.keyId:secret" string copied from the Ably dashboard. If you have the Ably CLI installed, `ably auth keys list` shows the keys configured on the current app.'
            });
          }
          k.keyName = H[1], k.keySecret = H[2];
        }
        if ("clientId" in k)
          if (typeof k.clientId == "string" || k.clientId === null) {
            if (k.clientId === "*") throw new _({
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
        a.logAction(this.logger, a.LOG_MINOR, "BaseClient()", "started; version = " + Q.version), this._currentFallback = null, this.serverTimeOffset = null, this.http = new rt(this), this.auth = new nt(this, k), this._rest = (o = e.plugins) != null && o.Rest ? new e.plugins.Rest(this) : null, this._Crypto = (u = (c = e.plugins) == null ? void 0 : c.Crypto) != null ? u : null, this.__FilteredSubscriptions = (b = (d = e.plugins) == null ? void 0 : d.MessageInteractions) != null ? b : null, this._Annotations = (O = (w = e.plugins) == null ? void 0 : w.Annotations) != null ? O : null, this._liveObjectsPlugin = (N = (I = e.plugins) == null ? void 0 : I.LiveObjects) != null ? N : null;
      }
      get rest() {
        return this._rest || Te("Rest"), this._rest;
      }
      get _FilteredSubscriptions() {
        return this.__FilteredSubscriptions || Te("MessageInteractions"), this.__FilteredSubscriptions;
      }
      get channels() {
        return this.rest.channels;
      }
      get push() {
        return this.rest.push;
      }
      get pushConfig() {
        var e, t, n;
        return (n = (t = (e = this.options.plugins) == null ? void 0 : e.Push) == null ? void 0 : t.pushConfig) != null ? n : y.Config.push;
      }
      device() {
        var e, t;
        if ((!((e = this.options.plugins) != null && e.Push) || !this.push.LocalDevice) && Te("Push"), !this._device) {
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
        if ((!((e = this.options.plugins) != null && e.Push) || !this.push.LocalDevice) && Te("Push"), !this._device) {
          const n = (t = this._devicePromise) != null ? t : this._devicePromise = this.push.LocalDevice.loadAsync(this);
          try {
            this._device = await n;
          } catch (r) {
            throw this._devicePromise === n && (this._devicePromise = void 0), r;
          }
        }
        return this._device;
      }
      baseUri(e) {
        return Q.getHttpScheme(this.options) + On(e) + ":" + Q.getPort(this.options, !1);
      }
      async stats(e) {
        return this.rest.stats(e);
      }
      async time(e) {
        return this.rest.time(e);
      }
      async request(e, t, n, r, o, c) {
        return this.rest.request(e, t, n, r, o, c);
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
        return y.Config.now() + (this.serverTimeOffset || 0);
      }
      isTimeOffsetSet() {
        return this.serverTimeOffset !== null;
      }
    };
    P.Platform = y;
    var K = P, Ce = class fn {
      toJSON() {
        var t, n, r;
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
            error: (r = this.push) == null ? void 0 : r.error
          }
        };
      }
      toString() {
        var t, n, r, o;
        let c = "[DeviceDetails";
        return this.id && (c += "; id=" + this.id), this.platform && (c += "; platform=" + this.platform), this.formFactor && (c += "; formFactor=" + this.formFactor), this.clientId && (c += "; clientId=" + this.clientId), this.metadata && (c += "; metadata=" + this.metadata), this.deviceIdentityToken && (c += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), (t = this.push) != null && t.recipient && (c += "; push.recipient=" + JSON.stringify(this.push.recipient)), (n = this.push) != null && n.state && (c += "; push.state=" + this.push.state), (r = this.push) != null && r.error && (c += "; push.error=" + JSON.stringify(this.push.error)), (o = this.push) != null && o.metadata && (c += "; push.metadata=" + this.push.metadata), c += "]", c;
      }
      static toRequestBody(t, n, r) {
        return Le(t, n, r);
      }
      static fromResponseBody(t, n, r) {
        return r && (t = ke(t, n, r)), Array.isArray(t) ? fn.fromValuesArray(t) : fn.fromValues(t);
      }
      static fromValues(t) {
        return t.error = t.error && _.fromWireValues(t.error), Object.assign(new fn(), t);
      }
      static fromLocalDevice(t) {
        return Object.assign(new fn(), t);
      }
      static fromValuesArray(t) {
        const n = t.length, r = new Array(n);
        for (let o = 0; o < n; o++) r[o] = fn.fromValues(t[o]);
        return r;
      }
    };
    async function Ne(e, t, n, r) {
      return e.http.supportsAuthHeaders ? r(x(await e.auth.getAuthHeaders(), t), n) : r(t, x(await e.auth.getAuthParams(), n));
    }
    function it(e, t, n) {
      if (e.err && !e.body) return { err: e.err };
      if (e.statusCode === Ot.NoContent) return j(E({}, e), {
        body: [],
        unpacked: !0
      });
      let r = e.body;
      if (!e.unpacked) try {
        r = ke(r, t, n);
      } catch (d) {
        return Qe(d) ? { err: d } : { err: new U(pe(d), null) };
      }
      if (!r) return { err: new U("unenvelope(): Response body is missing", null) };
      const { statusCode: o, response: c, headers: u } = r;
      if (o === void 0) return j(E({}, e), {
        body: r,
        unpacked: !0
      });
      if (o < 200 || o >= 300) {
        let d = c && c.error || e.err;
        return d || (d = /* @__PURE__ */ new Error("Error in unenveloping " + r), d.statusCode = o), {
          err: d,
          body: c,
          headers: u,
          unpacked: !0,
          statusCode: o
        };
      }
      return {
        err: e.err,
        body: c,
        headers: u,
        unpacked: !0,
        statusCode: o
      };
    }
    function De(e, t, n, r, o) {
      e.err ? a.logAction(o, a.LOG_MICRO, "Resource." + t + "()", "Received Error; " + st(n, r) + "; Error: " + pe(e.err)) : a.logAction(o, a.LOG_MICRO, "Resource." + t + "()", "Received; " + st(n, r) + "; Headers: " + In(e.headers) + "; StatusCode: " + e.statusCode + "; Body: " + (y.BufferUtils.isBuffer(e.body) ? " (Base64): " + y.BufferUtils.base64Encode(e.body) : ": " + y.Config.inspect(e.body)));
    }
    var ye = class pn {
      static async get(t, n, r, o, c, u) {
        return pn.do(we.Get, t, n, null, r, o, c, u ?? !1);
      }
      static async delete(t, n, r, o, c, u) {
        return pn.do(we.Delete, t, n, null, r, o, c, u);
      }
      static async post(t, n, r, o, c, u, d) {
        return pn.do(we.Post, t, n, r, o, c, u, d);
      }
      static async patch(t, n, r, o, c, u, d) {
        return pn.do(we.Patch, t, n, r, o, c, u, d);
      }
      static async put(t, n, r, o, c, u, d) {
        return pn.do(we.Put, t, n, r, o, c, u, d);
      }
      static async do(t, n, r, o, c, u, d, b) {
        d && ((u = u || {}).envelope = d);
        const w = n.logger;
        async function O(N, k) {
          var H;
          if (w.shouldLog(a.LOG_MICRO)) {
            let ee = o;
            if (((H = N["content-type"]) == null ? void 0 : H.indexOf("msgpack")) > 0) try {
              n._MsgPack || Te("MsgPack"), ee = n._MsgPack.decode(o);
            } catch (ge) {
              a.logAction(w, a.LOG_MICRO, "Resource." + t + "()", "Sending MsgPack Decoding Error: " + pe(ge));
            }
            a.logAction(w, a.LOG_MICRO, "Resource." + t + "()", "Sending; " + st(r, k) + "; Body: " + ee);
          }
          const q = await n.http.do(t, r, N, o, k);
          return q.error && nt.isTokenErr(q.error) ? (await n.auth.authorize(null, null), Ne(n, N, k, O)) : {
            err: q.error,
            body: q.body,
            headers: q.headers,
            unpacked: q.unpacked,
            statusCode: q.statusCode
          };
        }
        let I = await Ne(n, c, u, O);
        if (d && (I = it(I, n._MsgPack, d)), w.shouldLog(a.LOG_MICRO) && De(I, t, r, u, w), b) {
          if (I.err) throw I.err;
          {
            const N = E({}, I);
            return delete N.err, N;
          }
        }
        return I;
      }
    };
    function Tt(e) {
      const t = e.match(/^\.\/(\w+)\?(.*)$/);
      return t && t[2] && jt(t[2]);
    }
    function Ns(e) {
      typeof e == "string" && (e = e.split(","));
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
        if (r) {
          const o = Tt(r[1]);
          o && (t[r[2]] = o);
        }
      }
      return t;
    }
    function Ls(e, t, n) {
      return !(n && (t || typeof e.code == "number"));
    }
    var Ds = class {
      constructor(e, t, n, r, o, c) {
        this.client = e, this.path = t, this.headers = n, this.envelope = r ?? null, this.bodyHandler = o, this.useHttpPaginatedResponse = c || !1;
      }
      get logger() {
        return this.client.logger;
      }
      async get(e) {
        const t = await ye.get(this.client, this.path, this.headers, e, this.envelope, !1);
        return this.handlePage(t);
      }
      async delete(e) {
        const t = await ye.delete(this.client, this.path, this.headers, e, this.envelope, !1);
        return this.handlePage(t);
      }
      async post(e, t) {
        const n = await ye.post(this.client, this.path, t, this.headers, e, this.envelope, !1);
        return this.handlePage(n);
      }
      async put(e, t) {
        const n = await ye.put(this.client, this.path, t, this.headers, e, this.envelope, !1);
        return this.handlePage(n);
      }
      async patch(e, t) {
        const n = await ye.patch(this.client, this.path, t, this.headers, e, this.envelope, !1);
        return this.handlePage(n);
      }
      async handlePage(e) {
        if (e.err && Ls(e.err, e.body, this.useHttpPaginatedResponse))
          throw a.logAction(this.logger, a.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + pe(e.err)), e.err;
        let t, n, r;
        try {
          t = e.statusCode == Ot.NoContent ? [] : await this.bodyHandler(e.body, e.headers || {}, e.unpacked);
        } catch (o) {
          throw e.err || o;
        }
        return e.headers && (n = e.headers.Link || e.headers.link) && (r = Ns(n)), this.useHttpPaginatedResponse ? new cn(this, t, e.headers || {}, e.statusCode, r, e.err) : new an(this, t, r);
      }
    }, an = class {
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
        const t = this.resource, n = await ye.get(t.client, t.path, t.headers, e, t.envelope, !1);
        return t.handlePage(n);
      }
    }, cn = class extends an {
      constructor(e, t, n, r, o, c) {
        super(e, t, o), this.statusCode = r, this.success = r < 300 && r >= 200, this.headers = n, this.errorCode = c && c.code, this.errorMessage = c && c.message, this.errorDetail = c?.detail;
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
    }, ot = Ds, gi = class Qn {
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
      static fromResponseBody(t, n, r) {
        return r && (t = ke(t, n, r)), Array.isArray(t) ? Qn.fromValuesArray(t) : Qn.fromValues(t);
      }
      static fromValues(t) {
        return Object.assign(new Qn(), t);
      }
      static fromValuesArray(t) {
        const n = t.length, r = new Array(n);
        for (let o = 0; o < n; o++) r[o] = Qn.fromValues(t[o]);
        return r;
      }
    };
    gi.toRequestBody = Le;
    var Us = gi, ua = "Run push.activate() in a browser environment with service worker support, or in React Native using the ably/react-native-push plugin. From a server, use client.push.admin instead. Call client.push.admin.publish(recipient, payload) to send to a device or clientId. Call client.push.admin.deviceRegistrations.save(device) to register a device record.", da = "Run push.deactivate() in a browser environment with service worker support, or in React Native using the ably/react-native-push plugin. From a server, call client.push.admin.deviceRegistrations.remove(deviceId) to remove a device registration.", ga = "Call push.updateToken() in React Native with the ably/react-native-push plugin configured, passing plugins: { Push: ReactNativePush.create({ storage, requestToken }) } in the client options. From a server, use client.push.admin.deviceRegistrations.save(device) to modify a device registration instead.", fa = class {
      constructor(e) {
        var t;
        this.client = e, this.admin = new pa(e);
        const n = (t = e.options.plugins) == null ? void 0 : t.Push;
        e.pushConfig && n && (this.stateMachine = new n.ActivationStateMachine(e), this.LocalDevice = n.localDeviceFactory(Ce));
      }
      async activate(e, t) {
        var n;
        const r = (n = this.client.options.plugins) == null ? void 0 : n.Push;
        if (!r) throw Ht("Push");
        const o = this.stateMachine;
        if (!o) throw new _({
          message: "This platform is not supported as a target of push notifications: push activation requires a browser environment with service worker support, or a React Native environment with the ably/react-native-push plugin",
          code: 4e4,
          statusCode: 400,
          remediation: ua
        });
        if (o.activatedCallback) throw new _({
          message: "Activation already in progress",
          code: 4e4,
          statusCode: 400,
          remediation: "Await the in-flight push.activate() before calling it again."
        });
        const c = new Promise((u, d) => {
          o.activatedCallback = (b) => {
            if (b) {
              d(b);
              return;
            }
            u();
          }, o.updateFailedCallback = t;
        });
        try {
          await this.client.getDevice(), await o.ensureInitialized();
        } catch (u) {
          throw delete o.activatedCallback, delete o.updateFailedCallback, u;
        }
        o.handleEvent(new r.CalledActivate(o, e)), await c;
      }
      async deactivate(e) {
        var t;
        const n = (t = this.client.options.plugins) == null ? void 0 : t.Push;
        if (!n) throw Ht("Push");
        const r = this.stateMachine;
        if (!r) throw new _({
          message: "This platform is not supported as a target of push notifications: push activation requires a browser environment with service worker support, or a React Native environment with the ably/react-native-push plugin",
          code: 4e4,
          statusCode: 400,
          remediation: da
        });
        if (r.deactivatedCallback) throw new _({
          message: "Deactivation already in progress",
          code: 4e4,
          statusCode: 400,
          remediation: "Await the in-flight push.deactivate() before calling it again."
        });
        const o = new Promise((c, u) => {
          r.deactivatedCallback = (d) => {
            if (d) {
              u(d);
              return;
            }
            c();
          };
        });
        try {
          await this.client.getDevice(), await r.ensureInitialized();
        } catch (c) {
          throw delete r.deactivatedCallback, c;
        }
        r.handleEvent(new n.CalledDeactivate(r, e)), await o;
      }
      async updateToken(e) {
        var t;
        if (!((t = this.client.options.plugins) != null && t.Push)) throw Ht("Push");
        const n = this.stateMachine;
        if (!n) throw new _({
          message: "This platform is not supported as a target of push notifications: push token updates require a React Native environment with the ably/react-native-push plugin",
          code: 4e4,
          statusCode: 400,
          remediation: ga
        });
        if (!e || e.transportType !== "fcm" && e.transportType !== "apns" || typeof e.token != "string" || e.token.length === 0) throw new _({
          message: "push.updateToken() requires a { transportType, token } object with transportType 'fcm' or 'apns' and a non-empty token string",
          code: 4e4,
          statusCode: 400,
          remediation: "Pass the refreshed token in the shape your requestToken callback returns, for example { transportType: 'fcm', token } with the token value delivered by messaging().onTokenRefresh."
        });
        const r = await this.client.getDevice();
        if (await n.ensureInitialized(), !r.deviceIdentityToken) throw new _({
          message: "Push token cannot be updated because the device is not activated for push notifications",
          code: 4e4,
          statusCode: 400,
          remediation: "Call client.push.activate() and await its completion before calling push.updateToken(). Wire updateToken() to your platform token refresh listener only after activation has completed."
        });
        r.push.recipient = e.transportType === "apns" ? {
          transportType: "apns",
          deviceToken: e.token
        } : {
          transportType: "fcm",
          registrationToken: e.token
        }, await r.persist(), n.handleEvent(new n.GotPushDeviceDetails());
      }
    }, pa = class {
      constructor(e) {
        this.client = e, this.deviceRegistrations = new ya(e), this.channelSubscriptions = new ba(e), this.liveActivity = new ma(e);
      }
      async publish(e, t) {
        const n = this.client, r = n.options.useBinaryProtocol ? "msgpack" : "json", o = Q.defaultPostHeaders(n.options), c = {}, u = x({ recipient: e }, t);
        x(o, n.options.headers), n.options.pushFullWait && x(c, { fullWait: "true" });
        const d = Le(u, n._MsgPack, r);
        await ye.post(n, "/push/publish", d, o, c, null, !0);
      }
      async createApnsBroadcast(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", r = Q.defaultPostHeaders(t.options), o = {};
        x(r, t.options.headers);
        const c = Le({ messageStoragePolicy: e.messageStoragePolicy }, t._MsgPack, n), u = await ye.post(t, "/push/apnsBroadcastChannels", c, r, o, null, !0);
        return u.unpacked ? u.body : ke(u.body, t._MsgPack, n);
      }
    }, ma = class {
      constructor(e) {
        this.client = e;
      }
      async start(e) {
        const { recipient: t, apnsBroadcast: n, apns: r, headers: o } = e, c = Array.isArray(t.channels) && t.channels.length > 0, u = !!t.deviceId;
        if (c === u) throw new _("LiveActivity.start() requires exactly one of recipient.channels or recipient.deviceId", 4e4, 400);
        const d = { apns: r };
        c && (d.channels = t.channels), u && (d.deviceId = t.deviceId), o && (d.headers = o), await this._post(n, "start", d);
      }
      async update(e) {
        const { apnsBroadcast: t, apns: n, headers: r } = e, o = { apns: n };
        r && (o.headers = r), await this._post(t, "broadcast", o);
      }
      async end(e) {
        const { apnsBroadcast: t, apns: n, headers: r } = e, o = { apns: n };
        r && (o.headers = r), await this._post(t, "end", o);
      }
      async _post(e, t, n) {
        const r = this.client, o = r.options.useBinaryProtocol ? "msgpack" : "json", c = Q.defaultPostHeaders(r.options), u = {};
        x(c, r.options.headers);
        const d = Le(n, r._MsgPack, o);
        await ye.post(r, "/push/apnsBroadcastChannels/" + encodeURIComponent(e) + "/" + t, d, c, u, null, !0);
      }
    }, ya = class {
      constructor(e) {
        this.client = e;
      }
      async save(e) {
        const t = this.client, n = Ce.fromValues(e), r = t.options.useBinaryProtocol ? "msgpack" : "json", o = Q.defaultPostHeaders(t.options), c = {};
        x(o, t.options.headers), t.options.pushFullWait && x(c, { fullWait: "true" });
        const u = Le(n, t._MsgPack, r), d = await ye.put(t, "/push/deviceRegistrations/" + encodeURIComponent(e.id), u, o, c, null, !0);
        return Ce.fromResponseBody(d.body, t._MsgPack, d.unpacked ? void 0 : r);
      }
      async get(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", r = Q.defaultGetHeaders(t.options), o = e.id || e;
        if (typeof o != "string" || !o.length) throw new _({
          message: "First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails",
          code: 4e4,
          statusCode: 400,
          remediation: "Pass either the device id string or a DeviceDetails object with a non-empty .id field. The local device id is available from client.device().id after push.activate() completes. Alternatively pass the .id of a DeviceDetails returned by push.admin.deviceRegistrations.save()."
        });
        x(r, t.options.headers);
        const c = await ye.get(t, "/push/deviceRegistrations/" + encodeURIComponent(o), r, {}, null, !0);
        return Ce.fromResponseBody(c.body, t._MsgPack, c.unpacked ? void 0 : n);
      }
      async list(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", r = this.client.http.supportsLinkHeaders ? void 0 : n, o = Q.defaultGetHeaders(t.options);
        return x(o, t.options.headers), new ot(t, "/push/deviceRegistrations", o, r, async function(c, u, d) {
          return Ce.fromResponseBody(c, t._MsgPack, d ? void 0 : n);
        }).get(e);
      }
      async remove(e) {
        const t = this.client, n = Q.defaultGetHeaders(t.options), r = {}, o = e.id || e;
        if (typeof o != "string" || !o.length) throw new _({
          message: "First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails",
          code: 4e4,
          statusCode: 400,
          remediation: "Pass either the device id string or the DeviceDetails object (with a non-empty .id field). To deactivate the local device, call client.push.deactivate() instead."
        });
        x(n, t.options.headers), t.options.pushFullWait && x(r, { fullWait: "true" }), await ye.delete(t, "/push/deviceRegistrations/" + encodeURIComponent(o), n, r, null, !0);
      }
      async removeWhere(e) {
        const t = this.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", r = Q.defaultGetHeaders(t.options, { format: n });
        x(r, t.options.headers), t.options.pushFullWait && x(e, { fullWait: "true" }), await ye.delete(t, "/push/deviceRegistrations", r, e, null, !0);
      }
    }, ba = class Io {
      constructor(t) {
        this.remove = Io.prototype.removeWhere, this.client = t;
      }
      async save(t) {
        const n = this.client, r = Us.fromValues(t), o = n.options.useBinaryProtocol ? "msgpack" : "json", c = Q.defaultPostHeaders(n.options), u = {};
        x(c, n.options.headers), n.options.pushFullWait && x(u, { fullWait: "true" });
        const d = Le(r, n._MsgPack, o), b = await ye.post(n, "/push/channelSubscriptions", d, c, u, null, !0);
        return Us.fromResponseBody(b.body, n._MsgPack, b.unpacked ? void 0 : o);
      }
      async list(t) {
        const n = this.client, r = n.options.useBinaryProtocol ? "msgpack" : "json", o = this.client.http.supportsLinkHeaders ? void 0 : r, c = Q.defaultGetHeaders(n.options);
        return x(c, n.options.headers), new ot(n, "/push/channelSubscriptions", c, o, async function(u, d, b) {
          return Us.fromResponseBody(u, n._MsgPack, b ? void 0 : r);
        }).get(t);
      }
      async removeWhere(t) {
        const n = this.client, r = n.options.useBinaryProtocol ? "msgpack" : "json", o = Q.defaultGetHeaders(n.options, { format: r });
        x(o, n.options.headers), n.options.pushFullWait && x(t, { fullWait: "true" }), await ye.delete(n, "/push/channelSubscriptions", o, t, null, !0);
      }
      async listChannels(t) {
        const n = this.client, r = n.options.useBinaryProtocol ? "msgpack" : "json", o = this.client.http.supportsLinkHeaders ? void 0 : r, c = Q.defaultGetHeaders(n.options);
        return x(c, n.options.headers), n.options.pushFullWait && x(t, { fullWait: "true" }), new ot(n, "/push/channels", c, o, async function(u, d, b) {
          const w = !b && r ? ke(u, n._MsgPack, r) : u;
          for (let O = 0; O < w.length; O++) w[O] = String(w[O]);
          return w;
        }).get(t);
      }
    }, va = fa, fi = [
      "absent",
      "present",
      "enter",
      "leave",
      "update"
    ];
    async function pi(e, t, n, r) {
      const o = nn(t, e, r ?? null);
      return Un.fromValues(n).decode(o, e);
    }
    async function _a(e, t, n, r) {
      return Promise.all(n.map(function(o) {
        return pi(e, t, o, r);
      }));
    }
    async function wa(e, t) {
      return Un.fromValues(e).decode(t.channelOptions, t.logger);
    }
    async function mi(e, t) {
      return Promise.all(e.map(function(n) {
        return wa(n, t);
      }));
    }
    var yi = class Xn extends R {
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
        return xn(Object.assign(new Un(), this, { action: fi.indexOf(this.action || "present") }), t);
      }
      static fromValues(t) {
        return Object.assign(new Xn(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => Xn.fromValues(n));
      }
      static fromData(t) {
        return t instanceof Xn ? t : Xn.fromValues({ data: t });
      }
      toString() {
        return p(this, "PresenceMessage");
      }
    }, Un = class Yr extends R {
      toJSON(...t) {
        return Dn.call(this, ...t);
      }
      static fromValues(t) {
        return Object.assign(new Yr(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => Yr.fromValues(n));
      }
      async decode(t, n) {
        const r = Object.assign(new yi(), j(E({}, this), { action: fi[this.action] }));
        try {
          await Ln(r, t);
        } catch (o) {
          a.logAction(n, a.LOG_ERROR, "WirePresenceMessage.decode()", pe(o));
        }
        return r;
      }
      toString() {
        return p(this, "WirePresenceMessage");
      }
    }, _t = yi, Ca = class {
      constructor(e) {
        this.channel = e;
      }
      get logger() {
        return this.channel.logger;
      }
      async get(e) {
        a.logAction(this.logger, a.LOG_MICRO, "RestPresence.get()", "channel = " + this.channel.name);
        const t = this.channel.client, n = t.options.useBinaryProtocol ? "msgpack" : "json", r = this.channel.client.http.supportsLinkHeaders ? void 0 : n, o = Q.defaultGetHeaders(t.options);
        return x(o, t.options.headers), new ot(t, this.channel.client.rest.presenceMixin.basePath(this), o, r, async (c, u, d) => mi(d ? c : ke(c, t._MsgPack, n), this.channel)).get(e);
      }
      async history(e) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestPresence.history()", "channel = " + this.channel.name), this.channel.client.rest.presenceMixin.history(this, e);
      }
    }, Ra = Ca, bi = [
      "message.create",
      "message.update",
      "message.delete",
      "meta",
      "message.summary",
      "message.append"
    ];
    function Aa(e) {
      return bi[e || 0] || "unknown";
    }
    function Sa(e) {
      let t = 0;
      return e.name && (t += e.name.length), e.clientId && (t += e.clientId.length), e.extras && (t += JSON.stringify(e.extras).length), e.data && (t += An(e.data)), t;
    }
    async function vi(e, t, n, r) {
      const o = nn(t, e, r ?? null);
      return jn.fromValues(n).decode(o, e);
    }
    async function ka(e, t, n, r) {
      return Promise.all(n.map(function(o) {
        return vi(e, t, o, r);
      }));
    }
    async function _i(e, t) {
      return jn.fromValues(e).decode(t.channelOptions, t.logger);
    }
    async function wi(e, t) {
      return Promise.all(e.map(function(n) {
        return _i(n, t);
      }));
    }
    async function Ci(e, t) {
      return Promise.all(e.map((n) => n.encode(t)));
    }
    var Ri = Le;
    function Ai(e) {
      let t, n = 0;
      for (let r = 0; r < e.length; r++)
        t = e[r], n += t.size || (t.size = Sa(t));
      return n;
    }
    var Si = class Zr extends R {
      expandFields() {
        if (this.version || (this.version = {}), !this.version.serial && this.serial && (this.version.serial = this.serial), !this.version.timestamp && this.timestamp && (this.version.timestamp = this.timestamp), this.annotations ? this.annotations.summary || (this.annotations.summary = {}) : this.annotations = { summary: {} }, this.annotations && this.annotations.summary)
          for (const [t, n] of Object.entries(this.annotations.summary)) if (t.endsWith(":distinct.v1") || t.endsWith(":unique.v1") || t.endsWith(":multiple.v1"))
            for (const [, r] of Object.entries(n)) r.clipped || (r.clipped = !1);
          else t.endsWith(":flag.v1") && (n.clipped || (n.clipped = !1));
      }
      async encode(t) {
        return xn(Object.assign(new jn(), this, { action: bi.indexOf(this.action || "message.create") }), t);
      }
      static fromValues(t) {
        return Object.assign(new Zr(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => Zr.fromValues(n));
      }
      toString() {
        return p(this, "Message");
      }
    }, jn = class ei extends R {
      toJSON(...t) {
        return Dn.call(this, ...t);
      }
      static fromValues(t) {
        return Object.assign(new ei(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => ei.fromValues(n));
      }
      async decodeWithErr(t, n) {
        const r = Object.assign(new Si(), j(E({}, this), { action: Aa(this.action) }));
        let o;
        try {
          await Ln(r, t);
        } catch (c) {
          a.logAction(n, a.LOG_ERROR, "WireMessage.decode()", pe(c)), o = c;
        }
        return r.expandFields(), {
          decoded: r,
          err: o
        };
      }
      async decode(t, n) {
        const { decoded: r } = await this.decodeWithErr(t, n);
        return r;
      }
      toString() {
        return p(this, "WireMessage");
      }
    }, gt = Si, Oa = 9;
    function Ma(e) {
      return e.every(function(t) {
        return !t.id;
      });
    }
    var Ta = class {
      constructor(e, t, n) {
        this._annotations = null;
        var r, o;
        a.logAction(e.logger, a.LOG_MINOR, "RestChannel()", "started; name = " + t), this.name = t, this.client = e, this.presence = new Ra(this), this.channelOptions = tn((r = e._Crypto) != null ? r : null, this.logger, n), (o = e.options.plugins) != null && o.Push && (this._push = new e.options.plugins.Push.PushChannel(this)), e._Annotations && (this._annotations = new e._Annotations.RestAnnotations(this)), e._liveObjectsPlugin && (this._object = new e._liveObjectsPlugin.RestObject(this));
      }
      get annotations() {
        return this._annotations || Te("Annotations"), this._annotations;
      }
      get push() {
        return this._push || Te("Push"), this._push;
      }
      get object() {
        return this._object || Te("LiveObjects"), this._object;
      }
      get logger() {
        return this.client.logger;
      }
      setOptions(e) {
        var t;
        this.channelOptions = tn((t = this.client._Crypto) != null ? t : null, this.logger, e);
      }
      async history(e) {
        return a.logAction(this.logger, a.LOG_MICRO, "RestChannel.history()", "channel = " + this.name), this.client.rest.channelMixin.history(this, e ?? null);
      }
      async publish(...e) {
        const t = e[0], n = e[1];
        let r, o;
        if (typeof t == "string" || t === null)
          r = [gt.fromValues({
            name: t,
            data: n
          })], o = e[2];
        else if (Me(t))
          r = [gt.fromValues(t)], o = e[1];
        else if (Array.isArray(t))
          r = gt.fromValuesArray(t), o = e[1];
        else throw new _({
          message: "publish() expects an event name (string or null), a message object, or an array of message objects as its first argument",
          code: 40013,
          statusCode: 400,
          remediation: "Call publish(name, data) for a single event, or publish(message | message[]) with a Message-shaped object."
        });
        o || (o = {});
        const c = this.client, u = c.options, d = u.useBinaryProtocol ? "msgpack" : "json", b = c.options.idempotentRestPublishing, w = Q.defaultPostHeaders(c.options);
        if (x(w, u.headers), b && Ma(r)) {
          const k = await ls(Oa);
          r.forEach(function(H, q) {
            H.id = k + ":" + q.toString();
          });
        }
        const O = await Ci(r, this.channelOptions), I = Ai(O), N = u.maxMessageSize;
        if (I > N) throw new _({
          message: `Maximum size of messages that can be published at once exceeded (was ${I} bytes, against a limit of ${N} bytes)`,
          code: 40009,
          statusCode: 400,
          remediation: "Split the publish into multiple calls so each batch is under the limit. If you set ClientOptions.maxMessageSize yourself, raise it. It can only restrict below your account limit, not above it. To lift the account limit, contact Ably support."
        });
        return this._publish(Ri(O, c._MsgPack, d), w, o);
      }
      async _publish(e, t, n) {
        const r = this.client, o = r.options.useBinaryProtocol ? "msgpack" : "json", { body: c, unpacked: u } = await ye.post(r, r.rest.channelMixin.basePath(this) + "/messages", e, t, n, null, !0), d = (u ? c : ke(c, r._MsgPack, o)) || {};
        return delete d.channel, delete d.messageId, d;
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
    }, Ia = Ta, Ea = class Eo {
      constructor(t) {
        this.entries = t && t.entries || void 0, this.schema = t && t.schema || void 0, this.appId = t && t.appId || void 0, this.inProgress = t && t.inProgress || void 0, this.unit = t && t.unit || void 0, this.intervalId = t && t.intervalId || void 0;
      }
      static fromValues(t) {
        return new Eo(t);
      }
    }, ki = class {
      static basePath(e) {
        return "/channels/" + encodeURIComponent(e.name);
      }
      static history(e, t) {
        const n = e.client, r = n.options.useBinaryProtocol ? "msgpack" : "json", o = e.client.http.supportsLinkHeaders ? void 0 : r, c = Q.defaultGetHeaders(n.options);
        return x(c, n.options.headers), new ot(n, this.basePath(e) + "/messages", c, o, async function(u, d, b) {
          return wi(b ? u : ke(u, n._MsgPack, r), e);
        }).get(t);
      }
      static async status(e) {
        const t = e.client.options.useBinaryProtocol ? "msgpack" : "json", n = Q.defaultPostHeaders(e.client.options);
        return (await ye.get(e.client, this.basePath(e), n, {}, t, !0)).body;
      }
      static async getMessage(e, t) {
        const n = typeof t == "string" ? t : t.serial;
        if (!n) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), or its serial string. Newly constructed Message objects do not have a serial."
        });
        const r = e.client, o = r.options.useBinaryProtocol ? "msgpack" : "json", c = Q.defaultGetHeaders(r.options);
        x(c, r.options.headers);
        const { body: u, unpacked: d } = await ye.get(r, this.basePath(e) + "/messages/" + encodeURIComponent(n), c, {}, null, !0);
        return _i(d ? u : ke(u, r._MsgPack, o), e);
      }
      static async updateDeleteMessage(e, t, n, r, o) {
        if (!n.serial) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), not a freshly constructed object."
        });
        const c = e.client, u = c.options.useBinaryProtocol ? "msgpack" : "json", d = Q.defaultPostHeaders(c.options);
        x(d, c.options.headers);
        const b = gt.fromValues(n);
        b.action = t, b.version = r;
        const w = Ri(await b.encode(e.channelOptions), c._MsgPack, u);
        let O = ye.patch;
        const { body: I, unpacked: N } = await O(c, this.basePath(e) + "/messages/" + encodeURIComponent(n.serial), w, d, o || {}, null, !0);
        return (N ? I : ke(I, c._MsgPack, u)) || { versionSerial: null };
      }
      static getMessageVersions(e, t, n) {
        const r = typeof t == "string" ? t : t.serial;
        if (!r) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), or its serial string. Newly constructed Message objects do not have a serial."
        });
        const o = e.client, c = o.options.useBinaryProtocol ? "msgpack" : "json", u = e.client.http.supportsLinkHeaders ? void 0 : c, d = Q.defaultGetHeaders(o.options);
        return x(d, o.options.headers), new ot(o, this.basePath(e) + "/messages/" + encodeURIComponent(r) + "/versions", d, u, async (b, w, O) => wi(O ? b : ke(b, o._MsgPack, c), e)).get(n || {});
      }
    }, Pa = class {
      static basePath(e) {
        return ki.basePath(e.channel) + "/presence";
      }
      static async history(e, t) {
        const n = e.channel.client, r = n.options.useBinaryProtocol ? "msgpack" : "json", o = e.channel.client.http.supportsLinkHeaders ? void 0 : r, c = Q.defaultGetHeaders(n.options);
        return x(c, n.options.headers), new ot(n, this.basePath(e) + "/history", c, o, async (u, d, b) => mi(b ? u : ke(u, n._MsgPack, r), e.channel)).get(t);
      }
    }, Oi = class {
      constructor(e) {
        this.channelMixin = ki, this.presenceMixin = Pa, this.Resource = ye, this.PaginatedResource = ot, this.DeviceDetails = Ce, this.PushChannelSubscription = Us, this.client = e, this.channels = new xa(this.client), this.push = new va(this.client);
      }
      async stats(e) {
        const t = Q.defaultGetHeaders(this.client.options), n = this.client.options.useBinaryProtocol ? "msgpack" : "json", r = this.client.http.supportsLinkHeaders ? void 0 : n;
        return x(t, this.client.options.headers), new ot(this.client, "/stats", t, r, async (o, c, u) => {
          const d = u ? o : ke(o, this.client._MsgPack, n);
          for (let b = 0; b < d.length; b++) d[b] = Ea.fromValues(d[b]);
          return d;
        }).get(e);
      }
      async time(e) {
        const t = Q.defaultGetHeaders(this.client.options, { format: "json" });
        this.client.options.headers && x(t, this.client.options.headers);
        const n = (d) => this.client.baseUri(d) + "/time";
        let { error: r, body: o, unpacked: c } = await this.client.http.do(we.Get, n, t, null, e);
        if (r) throw r;
        c || (o = JSON.parse(o));
        const u = o[0];
        if (!u) throw new _("Internal error (unexpected result type from GET /time)", 5e4, 500);
        return this.client.serverTimeOffset = u - y.Config.now(), u;
      }
      async request(e, t, n, r, o, c) {
        var u;
        const [d, b, w] = this.client.options.useBinaryProtocol ? (this.client._MsgPack || Te("MsgPack"), [
          this.client._MsgPack.encode,
          this.client._MsgPack.decode,
          "msgpack"
        ]) : [
          JSON.stringify,
          JSON.parse,
          "json"
        ], O = this.client.http.supportsLinkHeaders ? void 0 : w;
        r = r || {};
        const I = e.toLowerCase(), N = I == "get" ? Q.defaultGetHeaders(this.client.options, {
          format: w,
          protocolVersion: n
        }) : Q.defaultPostHeaders(this.client.options, {
          format: w,
          protocolVersion: n
        });
        typeof o != "string" && (o = (u = d(o)) != null ? u : null), x(N, this.client.options.headers), c && x(N, c);
        const k = new ot(this.client, t, N, O, async function(H, q, ee) {
          return Ke(ee ? H : b(H));
        }, !0);
        if (!y.Http.methods.includes(I)) throw new _({
          message: "Unsupported method " + I,
          code: 40500,
          statusCode: 405,
          remediation: `Use one of: ${y.Http.methods.join(", ")}.`
        });
        return y.Http.methodsWithBody.includes(I) ? k[I](r, o) : k[I](r);
      }
      async batchPublish(e) {
        let t, n;
        Array.isArray(e) ? (t = e, n = !1) : (t = [e], n = !0);
        const r = this.client.options.useBinaryProtocol ? "msgpack" : "json", o = Q.defaultPostHeaders(this.client.options);
        this.client.options.headers && x(o, this.client.options.headers);
        const c = Le(t, this.client._MsgPack, r), u = await ye.post(this.client, "/messages", c, o, {}, null, !0), d = u.unpacked ? u.body : ke(u.body, this.client._MsgPack, r);
        return n ? d[0] : d;
      }
      async batchPresence(e) {
        const t = this.client.options.useBinaryProtocol ? "msgpack" : "json", n = Q.defaultGetHeaders(this.client.options);
        this.client.options.headers && x(n, this.client.options.headers);
        const r = e.join(","), o = await ye.get(this.client, "/presence", n, { channels: r }, null, !0);
        return o.unpacked ? o.body : ke(o.body, this.client._MsgPack, t);
      }
      async revokeTokens(e, t) {
        if (Os(this.client.options)) throw new _({
          message: "Cannot revoke tokens when using token auth",
          code: 40162,
          statusCode: 401,
          remediation: "Token revocation must use basic auth, so construct a separate Ably.Rest client with ClientOptions.key (the API key that issued the tokens) just for this call. Revocable tokens must have been enabled on the key in the Ably dashboard before the tokens were issued, otherwise there is nothing to revoke."
        });
        const n = this.client.options.keyName;
        let r = t ?? {};
        const o = E({ targets: e.map((w) => `${w.type}:${w.value}`) }, r), c = this.client.options.useBinaryProtocol ? "msgpack" : "json", u = Q.defaultPostHeaders(this.client.options);
        this.client.options.headers && x(u, this.client.options.headers);
        const d = Le(o, this.client._MsgPack, c), b = await ye.post(this.client, `/keys/${n}/revokeTokens`, d, u, {}, null, !0);
        return b.unpacked ? b.body : ke(b.body, this.client._MsgPack, c);
      }
    }, xa = class {
      constructor(e) {
        this.client = e, this.all = /* @__PURE__ */ Object.create(null);
      }
      get(e, t) {
        e = String(e);
        let n = this.all[e];
        return n ? t && n.setOptions(t) : this.all[e] = n = new Ia(this.client, e, t), n;
      }
      release(e) {
        delete this.all[String(e)];
      }
    }, Na = class extends K {
      constructor(e) {
        super(Q.objectifyOptions(e, !1, "BaseRest", a.defaultLogger, { Rest: Oi }));
      }
    }, Mi = { Rest: Oi }, Ti = class extends gt {
      static async fromEncoded(e, t) {
        return vi(a.defaultLogger, y.Crypto, e, t);
      }
      static async fromEncodedArray(e, t) {
        return ka(a.defaultLogger, y.Crypto, e, t);
      }
      static fromValues(e) {
        return gt.fromValues(e);
      }
    }, Ii = class extends _t {
      static async fromEncoded(e, t) {
        return pi(a.defaultLogger, y.Crypto, e, t);
      }
      static async fromEncodedArray(e, t) {
        return _a(a.defaultLogger, y.Crypto, e, t);
      }
      static fromValues(e) {
        return _t.fromValues(e);
      }
    }, Ei = ["annotation.create", "annotation.delete"];
    async function Pi(e, t, n) {
      return ln.fromValues(t).decode(n || {}, e);
    }
    async function La(e, t, n) {
      return Promise.all(t.map(function(r) {
        return Pi(e, r, n);
      }));
    }
    async function Da(e, t) {
      return ln.fromValues(e).decode(t.channelOptions, t.logger);
    }
    async function Ua(e, t) {
      return Promise.all(e.map(function(n) {
        return Da(n, t);
      }));
    }
    var xi = class ti extends R {
      async encode(t) {
        return xn(Object.assign(new ln(), this, { action: Ei.indexOf(this.action || "annotation.create") }), t);
      }
      static fromValues(t) {
        return Object.assign(new ti(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => ti.fromValues(n));
      }
      toString() {
        return p(this, "Annotation");
      }
    }, ln = class ni extends R {
      toJSON(...t) {
        return Dn.call(this, ...t);
      }
      static fromValues(t) {
        return Object.assign(new ni(), t);
      }
      static fromValuesArray(t) {
        return t.map((n) => ni.fromValues(n));
      }
      async decode(t, n) {
        const r = Object.assign(new xi(), j(E({}, this), { action: Ei[this.action] }));
        try {
          await Ln(r, t);
        } catch (o) {
          a.logAction(n, a.LOG_ERROR, "WireAnnotation.decode()", pe(o));
        }
        return r;
      }
      toString() {
        return p(this, "WireAnnotation");
      }
    }, hn = xi, Ni = class extends hn {
      static async fromEncoded(e, t) {
        return Pi(a.defaultLogger, e, t);
      }
      static async fromEncodedArray(e, t) {
        return La(a.defaultLogger, e, t);
      }
      static fromValues(e) {
        return hn.fromValues(e);
      }
    };
    function Li(e, t) {
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
    function Di(e, t, n) {
      const r = Li(e, n);
      if (!t || typeof t != "object") throw new _({
        message: "Second argument of annotations." + n + "() must be an object (the intended annotation to publish)",
        code: 40003,
        statusCode: 400,
        remediation: 'Pass an Annotation-shaped object as the second argument, e.g. { type: "reaction:unique.v1", name: "👍" }.'
      });
      const o = hn.fromValues(t);
      if (!o.type || typeof o.type != "string") throw new _({
        message: "The annotation argument of annotations." + n + "() must include a non-empty string `type`",
        code: 40003,
        statusCode: 400,
        remediation: 'Set type on the annotation object, e.g. { type: "reaction:unique.v1", name: "👍" }. Other fields are optional.'
      });
      return o.messageSerial = r, o.action || (o.action = "annotation.create"), o;
    }
    function Ui(e, t) {
      return e.client.rest.channelMixin.basePath(e) + "/messages/" + encodeURIComponent(t) + "/annotations";
    }
    var ja = class {
      constructor(e) {
        this.channel = e;
      }
      async publish(e, t) {
        return this._publish(e, t, "publish");
      }
      async _publish(e, t, n) {
        const r = Di(e, t, n), o = await r.encode(this.channel.channelOptions), c = this.channel.client, u = c.options.useBinaryProtocol ? "msgpack" : "json", d = Q.defaultPostHeaders(c.options), b = {};
        x(d, c.options.headers);
        const w = Le([o], c._MsgPack, u);
        await ye.post(c, Ui(this.channel, r.messageSerial), w, d, b, null, !0);
      }
      async delete(e, t) {
        return t.action = "annotation.delete", this._publish(e, t, "delete");
      }
      async get(e, t) {
        const n = this.channel.client, r = Li(e, "get"), o = n.options.useBinaryProtocol ? "msgpack" : "json", c = n.http.supportsLinkHeaders ? void 0 : o, u = Q.defaultGetHeaders(n.options);
        return x(u, n.options.headers), new ot(n, Ui(this.channel, r), u, c, async (d, b, w) => Ua(w ? d : ke(d, n._MsgPack, o), this.channel)).get(t);
      }
    }, js = ja, Ba = Le;
    function Bs(e) {
      const t = [];
      if (e) for (let n = 0; n < e.length; n++) t.push(e[n].toString());
      return "[ " + t.join(", ") + " ]";
    }
    function qa(e, t, n, r, o, c) {
      return Mr(ke(e, t, c), n, r, o);
    }
    function Mr(e, t, n, r) {
      let o;
      e.error && (o = _.fromWireValues(e.error));
      let c;
      e.messages && (c = jn.fromValuesArray(e.messages));
      let u;
      t && e.presence && (u = t.WirePresenceMessage.fromValuesArray(e.presence));
      let d;
      n && e.annotations && (d = n.WireAnnotation.fromValuesArray(e.annotations));
      let b;
      return r && e.state && (b = r.WireObjectMessage.fromValuesArray(e.state, ce, rn)), Object.assign(new Ir(), j(E({}, e), {
        presence: u,
        messages: c,
        annotations: d,
        state: b,
        error: o
      }));
    }
    function ji(e) {
      return (t) => {
        var n;
        return Mr(t, {
          PresenceMessage: _t,
          WirePresenceMessage: Un
        }, {
          Annotation: hn,
          WireAnnotation: ln,
          RealtimeAnnotations: Pr,
          RestAnnotations: js
        }, (n = e?.LiveObjectsPlugin) != null ? n : null);
      };
    }
    function He(e) {
      return Object.assign(new Ir(), e);
    }
    function Tr(e, t, n, r) {
      let o = "[ProtocolMessage";
      e.action !== void 0 && (o += "; action=" + Is[e.action] || e.action);
      const c = [
        "id",
        "channel",
        "channelSerial",
        "connectionId",
        "count",
        "msgSerial",
        "timestamp"
      ];
      let u;
      for (let d = 0; d < c.length; d++)
        u = c[d], e[u] !== void 0 && (o += "; " + u + "=" + e[u]);
      if (e.messages && (o += "; messages=" + Bs(jn.fromValuesArray(e.messages))), e.presence && t && (o += "; presence=" + Bs(t.WirePresenceMessage.fromValuesArray(e.presence))), e.annotations && n && (o += "; annotations=" + Bs(n.WireAnnotation.fromValuesArray(e.annotations))), e.state && r && (o += "; state=" + Bs(r.WireObjectMessage.fromValuesArray(e.state, ce, rn))), e.error && (o += "; error=" + _.fromWireValues(e.error).toString()), e.auth && e.auth.accessToken && (o += "; token=" + e.auth.accessToken), e.flags && (o += "; flags=" + vt.filter(e.hasFlag).join(",")), e.params) {
        let d = "";
        Cn(e.params, function(b) {
          d.length > 0 && (d += "; "), d += b + "=" + e.params[b];
        }), d.length > 0 && (o += "; params=[" + d + "]");
      }
      return o += "]", o;
    }
    var Ir = class {
      constructor() {
        this.hasFlag = (e) => (this.flags & Pe[e]) > 0;
      }
      setFlag(e) {
        return this.flags = this.flags | Pe[e];
      }
      getMode() {
        return (this.flags || 0) & Pe.MODE_ALL;
      }
      encodeModesToFlags(e) {
        e.forEach((t) => this.setFlag(t));
      }
      decodeModesFromFlags() {
        const e = [];
        return Pn.forEach((t) => {
          this.hasFlag(t) && e.push(t);
        }), e.length > 0 ? e : void 0;
      }
    }, Ga = Ir, Ha = class {
      constructor(e, t, n, r, o) {
        this.previous = e, this.current = t, t === "attached" && (this.resumed = n, this.hasBacklog = r), o && (this.reason = o);
      }
    }, Er = Ha;
    function Wa(e) {
      if (e && "params" in e && !Me(e.params)) return new _({
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
          if (!n || typeof n != "string" || !Pn.includes(String.prototype.toUpperCase.call(n))) return new _({
            message: "Invalid channel mode: " + n,
            code: 4e4,
            statusCode: 400,
            remediation: `Valid ChannelMode values are: ${Pn.join(", ").toLowerCase()}. The server grants only the modes the key or token capability permits and silently drops the rest on attach. After attach, channel.modes shows what was granted. If you have the Ably CLI installed, \`ably auth keys list\` shows your key's capabilities.`
          });
        }
      }
    }
    var Fa = class si extends Oe {
      constructor(t, n, r) {
        var o, c;
        super(t.logger), this._annotations = null, this._mode = 0, this._silentSubscribeWarned = !1, this.retryCount = 0, this.history = function(...u) {
          return Ie(u, 0), this._historyImpl(u[0]);
        }, this._historyImpl = async function(u) {
          a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name);
          const d = this.client.rest.channelMixin;
          if (u && u.untilAttach) {
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
            delete u.untilAttach, u.from_serial = this.properties.attachSerial;
          }
          return d.history(this, u);
        }, this.whenState = (u) => Oe.prototype.whenState.call(this, u, this.state), a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel()", "started; name = " + n), this.name = n, this.channelOptions = tn((o = t._Crypto) != null ? o : null, this.logger, r), this.client = t, this._presence = t._RealtimePresence ? new t._RealtimePresence.RealtimePresence(this) : null, t._Annotations && (this._annotations = new t._Annotations.RealtimeAnnotations(this)), this.connectionManager = t.connection.connectionManager, this.state = "initialized", this.subscriptions = new Oe(this.logger), this.syncChannelSerial = void 0, this.properties = {
          attachSerial: void 0,
          channelSerial: void 0
        }, this.setOptions(r), this.errorReason = null, this._decodingContext = {
          channelOptions: this.channelOptions,
          plugins: t.options.plugins || {},
          baseEncodedPreviousPayload: void 0
        }, this._lastPayload = {
          messageId: null,
          protocolMessageChannelSerial: null,
          decodeFailureRecoveryInProgress: null
        }, this._attachedReceived = new Oe(this.logger), this.internalStateChanges = new Oe(this.logger), (c = t.options.plugins) != null && c.Push && (this._push = new t.options.plugins.Push.PushChannel(this)), t._liveObjectsPlugin && (this._object = new t._liveObjectsPlugin.RealtimeObject(this));
      }
      get presence() {
        return this._presence || Te("RealtimePresence"), this._presence;
      }
      get annotations() {
        return this._annotations || Te("Annotations"), this._annotations;
      }
      get push() {
        return this._push || Te("Push"), this._push;
      }
      get object() {
        return this._object || Te("LiveObjects"), this._object;
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
        const r = this.channelOptions, o = Wa(t);
        if (o) throw o;
        if (this.channelOptions = tn((n = this.client._Crypto) != null ? n : null, this.logger, t), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(t, r))
          return this.attachImpl(), new Promise((c, u) => {
            const d = () => {
              this._attachedReceived.off(b), this.internalStateChanges.off(w);
            }, b = () => {
              d(), c();
            }, w = (O) => {
              d(), u(O.reason);
            };
            this._attachedReceived.once("attached", b), this.internalStateChanges.once(["detached", "failed"], w);
          });
      }
      _shouldReattachToSetOptions(t, n) {
        if (!(this.state === "attached" || this.state === "attaching")) return !1;
        if (t?.params) {
          const r = Bi(t.params), o = Bi(n.params);
          if (Object.keys(r).length !== Object.keys(o).length || !Zt(o, r)) return !0;
        }
        return !!(t?.modes && (!n.modes || !ds(t.modes, n.modes)));
      }
      publish(...t) {
        return Ie(t, 0), this._publishImpl(t);
      }
      async _publishImpl(t) {
        const n = t[0], r = t[1];
        let o, c;
        if (typeof n == "string" || n === null || n === void 0)
          o = [gt.fromValues({
            name: n,
            data: r
          })], c = t[2];
        else if (Me(n))
          o = [gt.fromValues(n)], c = t[1];
        else if (Array.isArray(n))
          o = gt.fromValuesArray(n), c = t[1];
        else throw new _({
          message: "The single-argument form of publish() expects a message object or an array of message objects",
          code: 40013,
          statusCode: 400,
          remediation: "Call publish(name, data) for a single event, or publish(message | message[]) with a Message-shaped object."
        });
        const u = this.client.options.maxMessageSize, d = await Ci(o, this.channelOptions), b = Ai(d);
        if (b > u) throw new _({
          message: `Maximum size of messages that can be published at once exceeded (was ${b} bytes, against a limit of ${u} bytes)`,
          code: 40009,
          statusCode: 400,
          remediation: "Split the publish into multiple calls so each batch is under the limit. If a single message exceeds the limit, reduce its payload size. To lift the account limit, contact Ably support."
        });
        this.throwIfUnpublishableState(), a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + this.state + ", message count = " + d.length);
        const w = He({
          action: V.MESSAGE,
          channel: this.name,
          messages: d,
          params: c ? Xt(c) : void 0
        });
        return this.sendAndAwaitAck(w);
      }
      throwIfUnpublishableState() {
        if (!this.connectionManager.activeState()) throw this.connectionManager.getError();
        if (this.state === "failed" || this.state === "suspended") throw this.invalidStateError();
      }
      onEvent(t) {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
        const n = this.subscriptions;
        for (let r = 0; r < t.length; r++) {
          const o = t[r];
          n.emit(o.name, o);
        }
      }
      async attach() {
        return this.state === "attached" ? null : new Promise((t, n) => {
          this._attach(!1, null, (r, o) => r ? n(r) : t(o));
        });
      }
      _attach(t, n, r) {
        r || (r = (c) => {
          c && a.logAction(this.logger, a.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + c.toString());
        });
        const o = this.connectionManager;
        if (!o.activeState()) {
          r(o.getError());
          return;
        }
        (this.state !== "attaching" || t) && this.requestState("attaching", n), this.internalStateChanges.once(function(c) {
          switch (this.event) {
            case "attached":
              r?.(null, c);
              break;
            case "detached":
            case "suspended":
            case "failed":
              r?.(c.reason || o.getError() || new _("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
              break;
            case "detaching":
              r?.(new _("Attach request superseded by a subsequent detach request", 9e4, 409));
          }
        });
      }
      attachImpl() {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message");
        const t = He({
          action: V.ATTACH,
          channel: this.name,
          params: this.channelOptions.params,
          channelSerial: this.properties.channelSerial
        });
        this.channelOptions.modes && t.encodeModesToFlags(us(this.channelOptions.modes)), this._lastPayload.decodeFailureRecoveryInProgress && (t.channelSerial = this._lastPayload.protocolMessageChannelSerial), this.send(t);
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
            return new Promise((n, r) => {
              this.internalStateChanges.once(function(o) {
                switch (this.event) {
                  case "detached":
                    n();
                    break;
                  case "attached":
                  case "suspended":
                  case "failed":
                    r(o.reason || t.getError() || new _("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                    break;
                  case "attaching":
                    r(new _("Detach request superseded by a subsequent attach request", 9e4, 409));
                }
              });
            });
        }
      }
      detachImpl() {
        a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message");
        const t = He({
          action: V.DETACH,
          channel: this.name
        });
        this.send(t);
      }
      subscribe(...t) {
        return Ie(t, 2), this._subscribeImpl(t);
      }
      async _subscribeImpl(t) {
        const [n, r] = si.processListenerArgs(t);
        if (this.state === "failed") throw _.fromValues(this.invalidStateError());
        n && typeof n == "object" && !Array.isArray(n) ? this.client._FilteredSubscriptions.subscribeFilter(this, n, r) : this.subscriptions.on(n, r);
        let o = null;
        if (this.channelOptions.attachOnSubscribe !== !1 && (o = await this.attach()), this.state === "attached" && (this._mode & Pe.SUBSCRIBE) === 0) {
          const c = new _({
            message: "The channel was attached without the subscribe mode, so the server will not deliver messages to this listener.",
            code: 90009,
            statusCode: 400,
            remediation: 'Include "subscribe" in the channel modes: realtime.channels.get(name, { modes: ["subscribe", ...] }), or call channel.setOptions({ modes: [...] }) on an existing channel to trigger a reattach. Alternatively, omit modes entirely and ensure your token/API-key capability permits subscribe on this channel. If you have the Ably CLI installed, `ably auth keys list` shows your key\'s capabilities.'
          });
          if (this.client.options.strictMode === !0) throw c;
          this._silentSubscribeWarned || (a.logActionNoStrip(this.logger, a.LOG_ERROR, "RealtimeChannel.subscribe()", c.message + "; remediation=" + c.remediation + a.silentFailureLogSuffix()), this._silentSubscribeWarned = !0);
        }
        return o;
      }
      unsubscribe(...t) {
        var n;
        const [r, o] = si.processListenerArgs(t);
        if (typeof r == "object" && !o || (n = this.filteredSubscriptions) != null && n.has(o)) {
          this.client._FilteredSubscriptions.getAndDeleteFilteredSubscriptions(this, r, o).forEach((c) => this.subscriptions.off(c));
          return;
        }
        this.subscriptions.off(r, o);
      }
      sync() {
        switch (this.state) {
          case "initialized":
          case "detaching":
          case "detached":
            throw new U({
              message: "Unable to sync to channel; not attached",
              code: 4e4
            });
        }
        const t = this.connectionManager;
        if (!t.activeState()) throw t.getError();
        const n = He({
          action: V.SYNC,
          channel: this.name
        });
        this.syncChannelSerial && (n.channelSerial = this.syncChannelSerial), t.send(n);
      }
      send(t) {
        this.connectionManager.send(t);
      }
      async sendAndAwaitAck(t) {
        return new Promise((n, r) => {
          this.connectionManager.send(t, this.client.options.queueMessages, (o, c) => {
            o ? r(o) : n(c);
          });
        });
      }
      async sendPresence(t) {
        const n = He({
          action: V.PRESENCE,
          channel: this.name,
          presence: t
        });
        await this.sendAndAwaitAck(n);
      }
      requeuePresenceFromConnectionQueue(t) {
        var n;
        if (this._presence && (this.state === "attached" || this.state === "attaching" || this.state === "suspended")) {
          const r = t.callback;
          return this._presence.requeuePresenceMessages((n = t.message.presence) != null ? n : [], (o) => r?.(o)), !0;
        }
        return !1;
      }
      async sendState(t) {
        const n = He({
          action: V.OBJECT,
          channel: this.name,
          state: t
        });
        return this.sendAndAwaitAck(n);
      }
      async processMessage(t) {
        (t.action === V.ATTACHED || t.action === V.MESSAGE || t.action === V.PRESENCE || t.action === V.OBJECT || t.action === V.ANNOTATION) && this.setChannelSerial(t.channelSerial);
        let n, r = !1;
        switch (t.action) {
          case V.ATTACHED: {
            const o = t.hasFlag("RESUMED");
            o || (this.properties.attachSerial = t.channelSerial), this._mode = t.getMode(), this._silentSubscribeWarned = !1, this.params = t.params || {};
            const c = t.decodeModesFromFlags();
            this.modes = c && Sn(c) || void 0;
            const u = t.hasFlag("HAS_PRESENCE"), d = t.hasFlag("HAS_BACKLOG"), b = t.hasFlag("HAS_OBJECTS");
            if (this._attachedReceived.emit("attached"), this.state === "attached") {
              o || this._presence && this._presence.onAttached(u), this._object && this._object.onAttached(b);
              const w = new Er(this.state, this.state, o, d, t.error);
              (!o || this.channelOptions.updateOnAttached) && this.emit("update", w);
            } else this.state === "detaching" ? this.checkPendingState() : this.notifyState("attached", t.error, o, u, d, b);
            break;
          }
          case V.DETACHED: {
            const o = t.error ? _.fromWireValues(t.error) : new _("Channel detached", 90001, 404);
            this.state === "detaching" ? this.notifyState("detached", o) : this.state === "attaching" ? this.notifyState("suspended", o) : (this.state === "attached" || this.state === "suspended") && this.requestState("attaching", o);
            break;
          }
          case V.SYNC:
            if (r = !0, n = this.syncChannelSerial = t.channelSerial, !t.presence) break;
          case V.PRESENCE: {
            if (!t.presence) break;
            on(t);
            const o = this.channelOptions;
            if (this._presence) {
              const c = await Promise.all(t.presence.map((u) => u.decode(o, this.logger)));
              this._presence.setPresence(c, r, n);
            }
            break;
          }
          case V.OBJECT:
          case V.OBJECT_SYNC: {
            if (!this._object || !t.state) return;
            on(t);
            const o = this.client.connection.connectionManager.getActiveTransportFormat(), c = t.state.map((u) => u.decode(this.client, o));
            t.action === V.OBJECT ? this._object.handleObjectMessages(c) : this._object.handleObjectSyncMessages(c, t.channelSerial);
            break;
          }
          case V.MESSAGE: {
            if (this.state !== "attached") {
              a.logAction(this.logger, a.LOG_MAJOR, "RealtimeChannel.processMessage()", 'Message "' + t.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
              return;
            }
            on(t);
            const o = t.messages, c = o[0], u = o[o.length - 1];
            if (c.extras && c.extras.delta && c.extras.delta.from !== this._lastPayload.messageId) {
              const b = 'Delta message decode failure - previous message not available for message "' + t.id + '" on this channel "' + this.name + '".';
              a.logAction(this.logger, a.LOG_ERROR, "RealtimeChannel.processMessage()", b), this._startDecodeFailureRecovery(new _(b, 40018, 400));
              break;
            }
            let d = [];
            for (let b = 0; b < o.length; b++) {
              const { decoded: w, err: O } = await o[b].decodeWithErr(this._decodingContext, this.logger);
              if (d[b] = w, O) switch (O.code) {
                case 40018:
                  this._startDecodeFailureRecovery(O);
                  return;
                case 40019:
                case 40021:
                  this.notifyState("failed", O);
                  return;
              }
            }
            this._lastPayload.messageId = u.id, this._lastPayload.protocolMessageChannelSerial = t.channelSerial, this.onEvent(d);
            break;
          }
          case V.ANNOTATION: {
            on(t);
            const o = this.channelOptions;
            if (this._annotations) {
              const c = await Promise.all((t.annotations || []).map((u) => u.decode(o, this.logger)));
              this._annotations._processIncoming(c);
            }
            break;
          }
          case V.ERROR: {
            const o = t.error;
            o && o.code == 80016 ? this.checkPendingState() : this.notifyState("failed", _.fromWireValues(o));
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
      notifyState(t, n, r, o, c, u) {
        if (a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + t), this.clearStateTimer(), ["detached", "failed"].includes(t) && (this.properties.channelSerial = null), t === this.state) return;
        this._presence && this._presence.actOnChannelState(t, o, n), this._object && this._object.actOnChannelState(t, u, n), t === "suspended" && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), n && (this.errorReason = n);
        const d = new Er(this.state, t, r, c, n), b = 'Channel state for channel "' + this.name + '"', w = t + (n ? "; reason: " + n : "");
        t === "failed" ? a.logAction(this.logger, a.LOG_ERROR, b, w) : a.logAction(this.logger, a.LOG_MAJOR, b, w), t !== "attaching" && t !== "suspended" && (this.retryCount = 0), t === "attached" && this.onAttached(), this.state = t, this.emit(t, d);
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
        this.stateTimer || (this.stateTimer = y.Config.setTimeout(() => {
          a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), this.stateTimer = null, this.timeoutPendingState();
        }, this.client.options.timeouts.realtimeRequestTimeout));
      }
      clearStateTimer() {
        const t = this.stateTimer;
        t && (y.Config.clearTimeout(t), this.stateTimer = null);
      }
      startRetryTimer() {
        if (this.retryTimer) return;
        this.retryCount++;
        const t = qt(this.client.options.timeouts.channelRetryTimeout, this.retryCount);
        this.retryTimer = y.Config.setTimeout(() => {
          this.state === "suspended" && this.connectionManager.state.sendEvents && (this.retryTimer = null, a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), this.requestState("attaching"));
        }, t);
      }
      cancelRetryTimer() {
        this.retryTimer && (y.Config.clearTimeout(this.retryTimer), this.retryTimer = null);
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
      async updateMessage(t, n, r) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.updateMessage()", "channel = " + this.name), this.sendUpdate(t, "message.update", n, r);
      }
      async deleteMessage(t, n, r) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.deleteMessage()", "channel = " + this.name), this.sendUpdate(t, "message.delete", n, r);
      }
      async appendMessage(t, n, r) {
        return a.logAction(this.logger, a.LOG_MICRO, "RealtimeChannel.appendMessage()", "channel = " + this.name), this.sendUpdate(t, "message.append", n, r);
      }
      async sendUpdate(t, n, r, o) {
        var c;
        if (!t.serial) throw new _({
          message: "This message lacks a serial",
          code: 40003,
          statusCode: 400,
          remediation: "Pass the Message received from a subscribe callback (which carries .serial), not a freshly constructed object."
        });
        this.throwIfUnpublishableState();
        const u = await gt.fromValues(j(E({}, t), {
          action: n,
          version: r
        })).encode(this.channelOptions), d = He({
          action: V.MESSAGE,
          channel: this.name,
          messages: [u],
          params: o ? Xt(o) : void 0
        });
        return { versionSerial: (c = (await this.sendAndAwaitAck(d)).serials[0]) != null ? c : null };
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
    function Bi(e) {
      const t = e || {}, { agent: n } = t;
      return te(t, ["agent"]);
    }
    var Bn = Fa, za = class {
      constructor(e) {
        this.channel = e, this.logger = e.logger, this.subscriptions = new Oe(this.logger);
      }
      async publish(e, t) {
        const n = this.channel.name, r = Di(e, t, "publish"), o = await r.encode(this.channel.channelOptions);
        this.channel.throwIfUnpublishableState(), a.logAction(this.logger, a.LOG_MICRO, "RealtimeAnnotations.publish()", "channelName = " + n + ", sending annotation with messageSerial = " + r.messageSerial + ", type = " + r.type);
        const c = He({
          action: V.ANNOTATION,
          channel: n,
          annotations: [o]
        });
        await this.channel.sendAndAwaitAck(c);
      }
      async delete(e, t) {
        t.action = "annotation.delete", await this.publish(e, t);
      }
      async subscribe(...e) {
        const t = Bn.processListenerArgs(e), n = t[0], r = t[1], o = this.channel;
        if (o.state === "failed") throw _.fromValues(o.invalidStateError());
        if (this.subscriptions.on(n, r), this.channel.channelOptions.attachOnSubscribe !== !1 && await o.attach(), this.channel.state === "attached" && (this.channel._mode & Pe.ANNOTATION_SUBSCRIBE) === 0) {
          const c = new _({
            message: "You are trying to add an annotation listener, but you haven't requested the annotation_subscribe channel mode in ChannelOptions, so this won't do anything (we only deliver annotations to clients who have explicitly requested them)",
            code: 93001,
            statusCode: 400,
            remediation: 'Include "annotation_subscribe" in the channel modes: realtime.channels.get(name, { modes: ["annotation_subscribe", ...] }), or call channel.setOptions({ modes: [...] }) on an existing channel to trigger a reattach. Calling channels.get(name, { modes }) on an existing channel throws. The server only grants the mode if your key or token has the annotation-subscribe capability. Without it the attach succeeds but the server silently drops the mode and annotations are never delivered. `ably auth keys list` shows your key\'s capabilities.'
          });
          throw a.logActionNoStrip(this.logger, a.LOG_MAJOR, "RealtimeAnnotations.subscribe()", c.message + "; remediation=" + c.remediation), c;
        }
      }
      unsubscribe(...e) {
        const t = Bn.processListenerArgs(e), n = t[0], r = t[1];
        this.subscriptions.off(n, r);
      }
      _processIncoming(e) {
        for (const t of e) this.subscriptions.emit(t.type || "", t);
      }
      async get(e, t) {
        return js.prototype.get.call(this, e, t);
      }
    }, Pr = za, zt = class Js extends Na {
      constructor(t) {
        var n, r;
        if (!Js._MsgPack) throw new Error("Expected DefaultRest._MsgPack to have been set");
        super(Q.objectifyOptions(t, !0, "Rest", a.defaultLogger, j(E({}, Mi), {
          Crypto: (n = Js.Crypto) != null ? n : void 0,
          MsgPack: (r = Js._MsgPack) != null ? r : void 0,
          Annotations: {
            Annotation: hn,
            WireAnnotation: ln,
            RealtimeAnnotations: Pr,
            RestAnnotations: js
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
    zt._Crypto = null, zt.Message = Ti, zt.PresenceMessage = Ii, zt.Annotation = Ni, zt._MsgPack = null, zt._Http = rt;
    var xr = zt, Va = class extends Oe {
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
        const r = this.messages;
        if (r.length === 0) throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
        let o = [];
        if (e === "all") o = r.splice(0);
        else {
          const c = r[0];
          if (c) {
            const u = c.message.msgSerial, d = e.serial + e.count;
            d > u && (o = r.splice(0, d - u));
          }
        }
        for (let c = 0; c < o.length; c++) {
          const u = o[c], d = n?.[c];
          u.callback(t, d);
        }
        r.length == 0 && this.emit("idle");
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
    }, qi = Va, Gi = class {
      constructor(e, t) {
        this.message = e, this.callback = t, this.merged = !1;
        const n = e.action;
        this.sendAttempted = !1, this.ackRequired = typeof n == "number" && [
          V.MESSAGE,
          V.PRESENCE,
          V.ANNOTATION,
          V.OBJECT
        ].includes(n);
      }
    }, $a = class extends Oe {
      constructor(e) {
        super(e.logger), this.transport = e, this.messageQueue = new qi(this.logger), e.on("ack", (t, n, r) => {
          this.onAck(t, n, r);
        }), e.on("nack", (t, n, r) => {
          this.onNack(t, n, r);
        });
      }
      onAck(e, t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "Protocol.onAck()", "serial = " + e + "; count = " + t), this.messageQueue.completeMessages({
          serial: e,
          count: t
        }, null, n);
      }
      onNack(e, t, n) {
        a.logAction(this.logger, a.LOG_ERROR, "Protocol.onNack()", "serial = " + e + "; count = " + t + "; err = " + pe(n)), n || (n = new _("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages({
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
        e.ackRequired && this.messageQueue.push(e), this.logger.shouldLog(a.LOG_MICRO) && a.logActionNoStrip(this.logger, a.LOG_MICRO, "Protocol.send()", "sending msg; " + Tr(e.message, this.transport.connectionManager.realtime._RealtimePresence, this.transport.connectionManager.realtime._Annotations, this.transport.connectionManager.realtime._liveObjectsPlugin)), e.sendAttempted = !0, this.transport.send(e.message);
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
    }, Ka = $a, Ja = class {
      constructor(e, t, n, r) {
        this.previous = e, this.current = t, n && (this.retryIn = n), r && (this.reason = r);
      }
    }, qs = Ja, It = {
      DISCONNECTED: 80003,
      SUSPENDED: 80002,
      FAILED: 8e4,
      CLOSING: 80017,
      CLOSED: 80017,
      UNKNOWN_CONNECTION_ERR: 50002,
      UNKNOWN_CHANNEL_ERR: 50001
    }, Qa = {
      disconnected: () => _.fromValues({
        statusCode: 400,
        code: It.DISCONNECTED,
        message: "Connection to server temporarily unavailable"
      }),
      suspended: () => _.fromValues({
        statusCode: 400,
        code: It.SUSPENDED,
        message: "Connection to server unavailable"
      }),
      failed: () => _.fromValues({
        statusCode: 400,
        code: It.FAILED,
        message: "Connection failed or disconnected by server"
      }),
      closing: () => _.fromValues({
        statusCode: 400,
        code: It.CLOSING,
        message: "Connection closing"
      }),
      closed: () => _.fromValues({
        statusCode: 400,
        code: It.CLOSED,
        message: "Connection closed"
      }),
      unknownConnectionErr: () => _.fromValues({
        statusCode: 500,
        code: It.UNKNOWN_CONNECTION_ERR,
        message: "Internal connection error"
      }),
      unknownChannelErr: () => _.fromValues({
        statusCode: 500,
        code: It.UNKNOWN_CHANNEL_ERR,
        message: "Internal channel error"
      })
    };
    function Xa(e) {
      return !e.statusCode || !e.code || e.statusCode >= 500 ? !0 : Object.values(It).includes(e.code);
    }
    var Vt = Qa, Ya = He({ action: V.CLOSE }), Za = He({ action: V.DISCONNECT }), ec = class extends Oe {
      constructor(e, t, n, r) {
        super(e.logger), r && (n.format = void 0, n.heartbeats = "true"), this.connectionManager = e, this.auth = t, this.params = n, this.timeouts = n.options.timeouts, this.format = n.format, this.isConnected = !1, this.isFinished = !1, this.isDisposed = !1, this.maxIdleInterval = null, this.idleTimer = null, this.lastActivity = null;
      }
      connect() {
      }
      close() {
        this.isConnected && this.requestClose(), this.finish("closed", Vt.closed());
      }
      disconnect(e) {
        this.isConnected && this.requestDisconnect(), this.finish("disconnected", e || Vt.disconnected());
      }
      fail(e) {
        this.isConnected && this.requestDisconnect(), this.finish("failed", e || Vt.failed());
      }
      finish(e, t) {
        var n;
        this.isFinished || (this.isFinished = !0, this.isConnected = !1, this.maxIdleInterval = null, y.Config.clearTimeout((n = this.idleTimer) != null ? n : void 0), this.idleTimer = null, this.emit(e, t), this.dispose());
      }
      onProtocolMessage(e) {
        switch (this.logger.shouldLog(a.LOG_MICRO) && a.logActionNoStrip(this.logger, a.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + Tr(e, this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._liveObjectsPlugin) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), e.action) {
          case V.HEARTBEAT:
            a.logActionNoStrip(this.logger, a.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", e.id);
            break;
          case V.CONNECTED:
            this.onConnect(e), this.emit("connected", e.error, e.connectionId, e.connectionDetails, e);
            break;
          case V.CLOSED:
            this.onClose(e);
            break;
          case V.DISCONNECTED:
            this.onDisconnect(e);
            break;
          case V.ACK:
            this.emit("ack", e.msgSerial, e.count, e.res);
            break;
          case V.NACK:
            this.emit("nack", e.msgSerial, e.count, e.error);
            break;
          case V.SYNC:
            this.connectionManager.onChannelMessage(e, this);
            break;
          case V.PING:
            this.send(He(e.id ? {
              action: V.PONG,
              id: e.id
            } : { action: V.PONG }));
            break;
          case V.PONG:
            break;
          case V.ACTIVATE:
            break;
          case V.AUTH:
            Ge(this.auth.authorize(), (t) => {
              t && a.logAction(this.logger, a.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + pe(t));
            });
            break;
          case V.ERROR:
            if (a.logAction(this.logger, a.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + y.Config.inspect(e.error) + (e.channel ? ", channel: " + e.channel : "")), e.channel === void 0) {
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
        a.logAction(this.logger, a.LOG_MINOR, "Transport.onDisconnect()", "err = " + pe(t)), this.finish("disconnected", t);
      }
      onFatalError(e) {
        const t = e && e.error;
        a.logAction(this.logger, a.LOG_MINOR, "Transport.onFatalError()", "err = " + pe(t)), this.finish("failed", t);
      }
      onClose(e) {
        const t = e && e.error;
        a.logAction(this.logger, a.LOG_MINOR, "Transport.onClose()", "err = " + pe(t)), this.finish("closed", t);
      }
      requestClose() {
        a.logAction(this.logger, a.LOG_MINOR, "Transport.requestClose()", ""), this.send(Ya);
      }
      requestDisconnect() {
        a.logAction(this.logger, a.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(Za);
      }
      ping(e) {
        const t = { action: V.HEARTBEAT };
        e && (t.id = e), this.send(He(t));
      }
      dispose() {
        a.logAction(this.logger, a.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = !0, this.off();
      }
      onActivity() {
        this.maxIdleInterval && (this.lastActivity = y.Config.now(), this.setIdleTimer(this.maxIdleInterval + 100));
      }
      setIdleTimer(e) {
        this.idleTimer || (this.idleTimer = y.Config.setTimeout(() => {
          this.onIdleTimerExpire();
        }, e));
      }
      onIdleTimerExpire() {
        if (!this.lastActivity || !this.maxIdleInterval) throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
        this.idleTimer = null;
        const e = y.Config.now() - this.lastActivity, t = this.maxIdleInterval - e;
        if (t <= 0) {
          const n = "No activity seen from realtime in " + e + "ms; assuming connection has dropped";
          a.logAction(this.logger, a.LOG_ERROR, "Transport.onIdleTimerExpire()", n), this.disconnect(new _(n, 80003, 408));
        } else this.setIdleTimer(t + 100);
      }
      static tryConnect(e, t, n, r, o) {
        const c = new e(t, n, r);
        let u;
        const d = function(w) {
          y.Config.clearTimeout(u), o({
            event: this.event,
            error: w
          });
        }, b = t.options.timeouts.realtimeRequestTimeout;
        return u = y.Config.setTimeout(() => {
          c.off([
            "preconnect",
            "disconnected",
            "failed"
          ]), c.dispose(), d.call({ event: "disconnected" }, new _("Timeout waiting for transport to indicate itself viable", 5e4, 500));
        }, b), c.on(["failed", "disconnected"], d), c.on("preconnect", function() {
          a.logAction(t.logger, a.LOG_MINOR, "Transport.tryConnect()", "viable transport " + c), y.Config.clearTimeout(u), c.off(["failed", "disconnected"], d), o(null, c);
        }), c.connect(), c;
      }
      static isAvailable() {
        throw new _("isAvailable not implemented for transport", 5e4, 500);
      }
    }, un = ec, Fe;
    ((e) => {
      e.WebSocket = "web_socket", e.Comet = "comet", e.XhrPolling = "xhr_polling";
    })(Fe || (Fe = {}));
    var tc = typeof global < "u" ? global : typeof window < "u" ? window : self, Nr = () => {
      var e;
      return typeof y.WebStorage < "u" && ((e = y.WebStorage) == null ? void 0 : e.localSupported);
    }, qn = () => {
      var e;
      return typeof y.WebStorage < "u" && ((e = y.WebStorage) == null ? void 0 : e.sessionSupported);
    }, Hi = function() {
    }, Lr = "ably-transport-preference";
    function Dr(e) {
      try {
        return JSON.parse(e);
      } catch {
        return null;
      }
    }
    var nc = class {
      constructor(e, t, n, r) {
        this.options = e, this.host = t, this.mode = n, this.connectionKey = r, this.format = e.useBinaryProtocol ? "msgpack" : "json";
      }
      getConnectParams(e) {
        const t = e ? qe(e) : {}, n = this.options;
        switch (this.mode) {
          case "resume":
            t.resume = this.connectionKey;
            break;
          case "recover": {
            const r = Dr(n.recover);
            r && (t.recover = r.connectionKey);
            break;
          }
        }
        return n.clientId !== void 0 && (t.clientId = n.clientId), n.echoMessages === !1 && (t.echo = "false"), this.format !== void 0 && (t.format = this.format), this.stream !== void 0 && (t.stream = this.stream), this.heartbeats !== void 0 && (t.heartbeats = this.heartbeats), t.v = Q.protocolVersion, t.agent = dt(this.options), n.transportParams !== void 0 && x(t, n.transportParams), t;
      }
      toString() {
        let e = "[mode=" + this.mode;
        return this.host && (e += ",host=" + this.host), this.connectionKey && (e += ",connectionKey=" + this.connectionKey), this.format && (e += ",format=" + this.format), e += "]", e;
      }
    }, Wi = class Po extends Oe {
      constructor(t, n) {
        super(t.logger), this.supportedTransports = {}, this.disconnectedRetryCount = 0, this.pendingChannelMessagesState = {
          isProcessing: !1,
          queue: []
        }, this.realtime = t, this.initTransports(), this.options = n;
        const r = n.timeouts, o = r.webSocketConnectTimeout + r.realtimeRequestTimeout;
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
            retryDelay: o,
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
            retryDelay: r.disconnectedRetryTimeout,
            failState: "disconnected"
          },
          suspended: {
            state: "suspended",
            terminal: !1,
            queueEvents: !1,
            sendEvents: !1,
            retryDelay: r.suspendedRetryTimeout,
            failState: "suspended"
          },
          closing: {
            state: "closing",
            terminal: !1,
            queueEvents: !1,
            sendEvents: !1,
            retryDelay: r.realtimeRequestTimeout,
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
        }, this.state = this.states.initialized, this.errorReason = null, this.queuedMessages = new qi(this.logger), this.msgSerial = 0, this.connectionDetails = void 0, this.connectionId = void 0, this.connectionKey = void 0, this.connectionStateTtl = r.connectionStateTtl, this.maxIdleInterval = null, this.transports = et(n.transports || Q.defaultTransports, this.supportedTransports), this.transportPreference = null, this.transports.includes(Fe.WebSocket) && (this.webSocketTransportAvailable = !0), this.transports.includes(Fe.XhrPolling) ? this.baseTransport = Fe.XhrPolling : this.transports.includes(Fe.Comet) && (this.baseTransport = Fe.Comet), this.domains = Q.getHosts(n), this.activeProtocol = null, this.host = null, this.lastAutoReconnectAttempt = null, this.forceFallbackHost = !1, this.connectCounter = 0, this.wsCheckResult = null, this.wsCheckPromise = null, this.webSocketSlowTimer = null, this.webSocketGiveUpTimer = null, this.abandonedWebSocket = !1, a.logAction(this.logger, a.LOG_MINOR, "Realtime.ConnectionManager()", "started"), a.logAction(this.logger, a.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (n.transports || Q.defaultTransports) + "]"), a.logAction(this.logger, a.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + this.transports + "]"), a.logAction(this.logger, a.LOG_MICRO, "Realtime.ConnectionManager()", "http domains = [" + this.domains + "]"), !this.transports.length) {
          const u = "no requested transports available";
          throw a.logAction(this.logger, a.LOG_ERROR, "realtime.ConnectionManager()", u), new Error(u);
        }
        const c = y.Config.addEventListener;
        c && (qn() && typeof n.recover == "function" && c("beforeunload", this.persistConnection.bind(this)), n.closeOnUnload === !0 && c("beforeunload", () => {
          a.logAction(this.logger, a.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), this.requestState({ state: "closing" });
        }), c("online", () => {
          var u;
          this.state == this.states.disconnected || this.state == this.states.suspended ? (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager caught browser ‘online’ event", "reattempting connection"), this.requestState({ state: "connecting" })) : this.state == this.states.connecting && ((u = this.pendingTransport) == null || u.off(), this.disconnectAllTransports(), this.startConnect());
        }), c("offline", () => {
          this.state == this.states.connected && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager caught browser ‘offline’ event", "disconnecting active transport"), this.disconnectAllTransports());
        }));
      }
      static supportedTransports(t) {
        const n = { supportedTransports: {} };
        return this.initTransports(t, n), n.supportedTransports;
      }
      static initTransports(t, n) {
        const r = E(E({}, y.Transports.bundledImplementations), t);
        [Fe.WebSocket, ...y.Transports.order].forEach((o) => {
          const c = r[o];
          c && c.isAvailable() && (n.supportedTransports[o] = c);
        });
      }
      initTransports() {
        Po.initTransports(this.realtime._additionalTransportImplementations, this);
      }
      createTransportParams(t, n) {
        return new nc(this.options, t, n, this.connectionKey);
      }
      getTransportParams(t) {
        ((r) => {
          if (this.connectionKey) {
            r("resume");
            return;
          }
          if (typeof this.options.recover == "string") {
            r("recover");
            return;
          }
          const o = this.options.recover, c = this.getSessionRecoverData(), u = this.sessionRecoveryName();
          if (c && typeof o == "function") {
            a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data (recovery scope: " + u + ")"), o(c, (d) => {
              d ? (this.options.recover = c.recoveryKey, r("recover")) : r("clean");
            });
            return;
          }
          r("clean");
        })((r) => {
          const o = this.createTransportParams(null, r);
          if (r === "recover") {
            a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + this.options.recover);
            const c = Dr(this.options.recover);
            c && (this.msgSerial = c.msgSerial);
          } else a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + o.toString());
          t(o);
        });
      }
      tryATransport(t, n, r) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + n), this.proposedTransport = un.tryConnect(this.supportedTransports[n], this, this.realtime.auth, t, (o, c) => {
          const u = this.state;
          if (u == this.states.closing || u == this.states.closed || u == this.states.failed) {
            c && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + u.state + " while we were attempting the transport; closing " + c), c.close()), r(!0);
            return;
          }
          if (o) {
            a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + n + " " + o.event + ", err: " + o.error.toString()), nt.isTokenErr(o.error) && !(this.errorReason && nt.isTokenErr(this.errorReason)) ? (this.errorReason = o.error, Ge(this.realtime.auth._forceNewToken(null, null), (d) => {
              if (d) {
                this.actOnErrorFromAuthorize(d);
                return;
              }
              this.tryATransport(t, n, r);
            })) : o.event === "failed" ? (this.notifyState({
              state: "failed",
              error: o.error
            }), r(!0)) : o.event === "disconnected" && (Xa(o.error) ? r(!1) : (this.notifyState({
              state: this.states.connecting.failState,
              error: o.error
            }), r(!0)));
            return;
          }
          a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + n + "; setting pending"), this.setTransportPending(c, t), r(null, c);
        });
      }
      setTransportPending(t, n) {
        const r = n.mode;
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + t + "; mode = " + r), this.pendingTransport = t, this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), t.once("connected", (c, u, d) => {
          this.activateTransport(c, t, u, d), r === "recover" && this.options.recover && (delete this.options.recover, this.unpersistConnection());
        });
        const o = this;
        t.on([
          "disconnected",
          "closed",
          "failed"
        ], function(c) {
          o.deactivateTransport(t, this.event, c);
        }), this.emit("transport.pending", t);
      }
      activateTransport(t, n, r, o) {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + n), t && a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + t), r && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + r), o && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(o)), this.persistTransportPreference(n);
        const c = this.state, u = this.states.connected.state;
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + c.state), c.state == this.states.closing.state || c.state == this.states.closed.state || c.state == this.states.failed.state)
          return a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), n.disconnect(), !1;
        if (delete this.pendingTransport, !n.isConnected)
          return a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + n + " since it appears to no longer be connected"), !1;
        const d = this.activeProtocol;
        this.activeProtocol = new Ka(n), this.host = n.params.host;
        const b = o.connectionKey;
        if (b && this.connectionKey != b && this.setConnection(r, o, !!t), this.onConnectionDetailsUpdate(o, n), y.Config.nextTick(() => {
          n.on("connected", (w, O, I) => {
            this.onConnectionDetailsUpdate(I, n), this.emit("update", new qs(u, u, null, w));
          });
        }), c.state === this.states.connected.state ? t && (this.errorReason = this.realtime.connection.errorReason = t, this.emit("update", new qs(u, u, null, t))) : (this.notifyState({
          state: "connected",
          error: t
        }), this.errorReason = this.realtime.connection.errorReason = t || null), this.emit("transport.active", n), d)
          if (d.messageQueue.count() > 0 && a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + d.transport.shortName + ", new one is " + n.shortName + ") finishing with " + d.messageQueue.count() + " messages still pending"), d.transport === n) {
            const w = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + n.shortName + "; stack = " + (/* @__PURE__ */ new Error()).stack;
            a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.activateTransport()", w);
          } else d.finish();
        return !0;
      }
      deactivateTransport(t, n, r) {
        const o = this.activeProtocol, c = o && o.getTransport() === t, u = t === this.pendingTransport, d = this.noTransportsScheduledForActivation();
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + t), a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + n + (c ? "; was active" : u ? "; was pending" : "") + (d ? "" : "; another transport is scheduled for activation")), r && r.message && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + r.message), c && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(o.getPendingMessages()), o.clearPendingMessages(), this.activeProtocol = this.host = null), this.emit("transport.inactive", t), c && d || c && n === "failed" || n === "closed" || o === null && u) {
          if (n === "disconnected" && r && r.statusCode > 500 && this.domains.length > 1) {
            this.unpersistTransportPreference(), this.forceFallbackHost = !0, this.notifyState({
              state: n,
              error: r,
              retryImmediately: !0
            });
            return;
          }
          const b = n === "failed" && nt.isTokenErr(r) ? "disconnected" : n;
          this.notifyState({
            state: b,
            error: r
          });
          return;
        }
      }
      noTransportsScheduledForActivation() {
        return !this.pendingTransport || !this.pendingTransport.isConnected;
      }
      setConnection(t, n, r) {
        const o = this.connectionId;
        (o && o !== t || !o && r) && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0, this.queuedMessages.resetSendAttempted()), this.connectionId !== t && a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), this.realtime.connection.id = this.connectionId = t, this.realtime.connection.key = this.connectionKey = n.connectionKey;
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
        if (qn()) {
          const t = this.createRecoveryKey();
          t && this.setSessionRecoverData({
            recoveryKey: t,
            disconnectedAt: y.Config.now(),
            location: tc.location,
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
          const t = U.fromValues(this.errorReason);
          return t.cause = this.errorReason, t;
        }
        return this.getStateError();
      }
      getStateError() {
        var t, n;
        return (n = (t = Vt)[this.state.state]) == null ? void 0 : n.call(t);
      }
      activeState() {
        return this.state.queueEvents || this.state.sendEvents;
      }
      enactStateChange(t) {
        const n = "Connection state", r = t.current + (t.reason ? "; reason: " + t.reason : "");
        t.current === "failed" ? a.logAction(this.logger, a.LOG_ERROR, n, r) : a.logAction(this.logger, a.LOG_MAJOR, n, r), a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + t.current + "; reason = " + (t.reason && t.reason.message));
        const o = this.state = this.states[t.current];
        t.reason && (this.errorReason = t.reason, this.realtime.connection.errorReason = t.reason), o.terminal && this.clearConnection(), this.emit("connectionstate", t);
      }
      startTransitionTimer(t) {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + t.state), this.transitionTimer && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), y.Config.clearTimeout(this.transitionTimer)), this.transitionTimer = y.Config.setTimeout(() => {
          this.transitionTimer && (this.transitionTimer = null, a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager " + t.state + " timer expired", "requesting new state: " + t.failState), this.notifyState({ state: t.failState }));
        }, t.retryDelay);
      }
      cancelTransitionTimer() {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (y.Config.clearTimeout(this.transitionTimer), this.transitionTimer = null);
      }
      startSuspendTimer() {
        this.suspendTimer || (this.suspendTimer = y.Config.setTimeout(() => {
          this.suspendTimer && (this.suspendTimer = null, a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"), this.states.connecting.failState = "suspended", this.notifyState({ state: "suspended" }));
        }, this.connectionStateTtl));
      }
      checkSuspendTimer(t) {
        t !== "disconnected" && t !== "suspended" && t !== "connecting" && this.cancelSuspendTimer();
      }
      cancelSuspendTimer() {
        this.states.connecting.failState = "disconnected", this.suspendTimer && (y.Config.clearTimeout(this.suspendTimer), this.suspendTimer = null);
      }
      startRetryTimer(t) {
        this.retryTimer = y.Config.setTimeout(() => {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), this.retryTimer = null, this.requestState({ state: "connecting" });
        }, t);
      }
      cancelRetryTimer() {
        this.retryTimer && (y.Config.clearTimeout(this.retryTimer), this.retryTimer = null);
      }
      startWebSocketSlowTimer() {
        this.webSocketSlowTimer = y.Config.setTimeout(() => {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket slow timer", "checking connectivity"), this.checkWsConnectivityOnce().then((t) => {
            t ? a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket slow timer", "ws connectivity check succeeded") : a.logAction(this.logger, a.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "ws connectivity check failed");
          }), this.realtime.http.checkConnectivity && Ge(this.realtime.http.checkConnectivity(), (t, n) => {
            t || !n ? (a.logAction(this.logger, a.LOG_MAJOR, "ConnectionManager WebSocket slow timer", "http connectivity check failed"), this.cancelWebSocketGiveUpTimer(), this.notifyState({
              state: "disconnected",
              error: new _("Unable to connect (network unreachable)", 80003, 404)
            })) : a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket slow timer", "http connectivity check succeeded");
          });
        }, this.options.timeouts.webSocketSlowTimeout);
      }
      cancelWebSocketSlowTimer() {
        this.webSocketSlowTimer && (y.Config.clearTimeout(this.webSocketSlowTimer), this.webSocketSlowTimer = null);
      }
      startWebSocketGiveUpTimer(t) {
        this.webSocketGiveUpTimer = y.Config.setTimeout(() => {
          this.wsCheckResult || (this.baseTransport ? (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager WebSocket give up timer", "websocket connection took more than " + this.options.timeouts.webSocketConnectTimeout + "ms"), this.abandonWebSocketForBaseTransport(t)) : a.logAction(this.logger, a.LOG_MAJOR, "ConnectionManager WebSocket give up timer", "websocket connectivity appears to be unavailable but no other transports to try"));
        }, this.options.timeouts.webSocketConnectTimeout);
      }
      cancelWebSocketGiveUpTimer() {
        this.webSocketGiveUpTimer && (y.Config.clearTimeout(this.webSocketGiveUpTimer), this.webSocketGiveUpTimer = null);
      }
      notifyState(t) {
        var n, r;
        const o = t.state, c = o === "disconnected" && (this.state === this.states.connected || t.retryImmediately || this.state === this.states.connecting && t.error && nt.isTokenErr(t.error) && !(this.errorReason && nt.isTokenErr(this.errorReason)));
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + o + (c ? "; will retry connection immediately" : "")), o == this.state.state || (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), this.checkSuspendTimer(t.state), (o === "suspended" || o === "connected") && (this.disconnectedRetryCount = 0), this.state.terminal)) return;
        const u = this.states[t.state];
        let d = u.retryDelay;
        u.state === "disconnected" && (this.disconnectedRetryCount++, d = qt(u.retryDelay, this.disconnectedRetryCount));
        const b = new qs(this.state.state, u.state, d, t.error || ((r = (n = Vt)[u.state]) == null ? void 0 : r.call(n)));
        if (c) {
          const w = () => {
            this.state === this.states.disconnected && (this.lastAutoReconnectAttempt = y.Config.now(), this.requestState({ state: "connecting" }));
          }, O = this.lastAutoReconnectAttempt && y.Config.now() - this.lastAutoReconnectAttempt + 1;
          O && O < 1e3 ? (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + O + "ms ago, waiting another " + (1e3 - O) + "ms before trying again"), y.Config.setTimeout(w, 1e3 - O)) : y.Config.nextTick(w);
        } else (o === "disconnected" || o === "suspended") && this.startRetryTimer(d);
        (o === "disconnected" && !c || o === "suspended" || u.terminal) && y.Config.nextTick(() => {
          this.disconnectAllTransports();
        }), o == "connected" && !this.activeProtocol && a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange(b), this.state.sendEvents ? (this.queuedPresenceToChannelQueues(), this.sendQueuedMessages()) : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(o, b.reason), this.failQueuedMessages(b.reason));
      }
      requestState(t) {
        var n, r;
        const o = t.state;
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + o + "; current state: " + this.state.state), o == this.state.state || (this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(o), o == "connecting" && this.state.state == "connected") || o == "closing" && this.state.state == "closed") return;
        const c = this.states[o], u = new qs(this.state.state, c.state, null, t.error || ((r = (n = Vt)[c.state]) == null ? void 0 : r.call(n)));
        this.enactStateChange(u), o == "connecting" && y.Config.nextTick(() => {
          this.startConnect();
        }), o == "closing" && this.closeImpl();
      }
      startConnect() {
        if (this.state !== this.states.connecting) {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state);
          return;
        }
        const t = this.realtime.auth, n = ++this.connectCounter, r = () => {
          this.getTransportParams((o) => {
            if (o.mode === "recover" && o.options.recover) {
              const c = Dr(o.options.recover);
              c && this.realtime.channels.recoverChannels(c.channelSerials);
            }
            n === this.connectCounter && this.connectImpl(o, n);
          });
        };
        if (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), t.method === "basic") r();
        else {
          const o = (c) => {
            n === this.connectCounter && (c ? this.actOnErrorFromAuthorize(c) : r());
          };
          this.errorReason && nt.isTokenErr(this.errorReason) ? Ge(t._forceNewToken(null, null), o) : Ge(t._ensureValidAuthCredentials(!1), o);
        }
      }
      connectImpl(t, n) {
        const r = this.state.state;
        if (r !== this.states.connecting.state) {
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect, but was " + r);
          return;
        }
        const o = this.getTransportPreference();
        o && o === this.baseTransport && this.webSocketTransportAvailable && this.checkWsConnectivity().then(() => {
          this.unpersistTransportPreference(), this.state === this.states.connecting && (a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.connectImpl():", "web socket connectivity available, cancelling connection attempt with " + this.baseTransport), this.disconnectAllTransports(), this.connectWs(t, ++this.connectCounter));
        }).catch(Hi), o && o === this.baseTransport || this.baseTransport && !this.webSocketTransportAvailable ? this.connectBase(t, n) : this.connectWs(t, n);
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
        var n, r;
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.abandonWebSocketForBaseTransport()", "websocket connectivity appears to be unavailable; trying base transport"), this.abandonedWebSocket = !0, this.cancelWebSocketSlowTimer(), this.cancelWebSocketGiveUpTimer(), (n = this.proposedTransport) == null || n.dispose(), (r = this.pendingTransport) == null || r.dispose(), this.connectBase(t, ++this.connectCounter);
      }
      checkWsAvailabilityBeforeGivingUp(t, n, r) {
        return !this.baseTransport || this.abandonedWebSocket || this.wsCheckResult ? !1 : (this.checkWsConnectivityOnce().then((o) => {
          n !== this.connectCounter || this.abandonedWebSocket || this.state !== this.states.connecting || (o ? r(new _("Unable to connect (and no more fallback hosts to try)", 80003, 404)) : this.abandonWebSocketForBaseTransport(t));
        }), !0);
      }
      checkWsConnectivityOnce() {
        return this.wsCheckPromise || (this.wsCheckPromise = this.checkWsConnectivity().then(() => (this.wsCheckResult = !0, !0), () => (this.wsCheckResult = !1, !1))), this.wsCheckPromise;
      }
      tryTransportWithFallbacks(t, n, r, o, c) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.tryTransportWithFallbacks()", t);
        const u = (I) => {
          this.notifyState({
            state: this.states.connecting.failState,
            error: I
          });
        }, d = this.domains.slice(), b = (I, N) => {
          if (o === this.connectCounter) {
            if (!c()) {
              N && N.dispose();
              return;
            }
            !N && !I && O();
          }
        }, w = d.shift();
        if (!w) {
          u(new _("Unable to connect (no available host)", 80003, 404));
          return;
        }
        n.host = w;
        const O = () => {
          if (!d.length) {
            if (r && this.checkWsAvailabilityBeforeGivingUp(n, o, u)) return;
            u(new _("Unable to connect (and no more fallback hosts to try)", 80003, 404));
            return;
          }
          if (!this.realtime.http.checkConnectivity) {
            u(new U("Internal error: Http.checkConnectivity not set", null, 500));
            return;
          }
          Ge(this.realtime.http.checkConnectivity(), (I, N) => {
            if (o === this.connectCounter && c()) {
              if (I) {
                u(I);
                return;
              }
              if (!N) {
                u(new _("Unable to connect (network unreachable)", 80003, 404));
                return;
              }
              n.host = At(d), this.tryATransport(n, t, b);
            }
          });
        };
        if (this.forceFallbackHost && d.length) {
          this.forceFallbackHost = !1, O();
          return;
        }
        this.tryATransport(n, t, b);
      }
      closeImpl() {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), this.pendingTransport && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + this.pendingTransport), this.pendingTransport.close()), this.activeProtocol && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()), this.notifyState({ state: "closed" });
      }
      onAuthUpdated(t, n) {
        var r;
        switch (this.state.state) {
          case "connected": {
            a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport");
            const o = (r = this.activeProtocol) == null ? void 0 : r.getTransport();
            o && o.onAuthUpdated && o.onAuthUpdated(t);
            const c = He({
              action: V.AUTH,
              auth: { accessToken: t.token }
            });
            this.send(c);
            const u = () => {
              this.off(d), n(null, t);
            }, d = (b) => {
              b.current === "failed" && (this.off(u), this.off(d), n(b.reason || this.getStateError()));
            };
            this.once("connectiondetails", u), this.on("connectionstate", d);
            break;
          }
          case "connecting":
            a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
          default: {
            a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
            const o = (c) => {
              switch (c.current) {
                case "connected":
                  this.off(o), n(null, t);
                  break;
                case "failed":
                case "closed":
                case "suspended":
                  this.off(o), n(c.reason || this.getStateError());
              }
            };
            this.on("connectionstate", o), this.state.state === "connecting" ? this.startConnect() : this.requestState({ state: "connecting" });
          }
        }
      }
      disconnectAllTransports() {
        a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports"), this.connectCounter++, this.pendingTransport && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + this.pendingTransport), this.pendingTransport.disconnect()), delete this.pendingTransport, this.proposedTransport && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting proposed transport: " + this.pendingTransport), this.proposedTransport.disconnect()), delete this.pendingTransport, this.activeProtocol && (a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect());
      }
      send(t, n, r) {
        r = r || Hi;
        const o = this.state;
        if (o.sendEvents) {
          a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.send()", "sending event"), this.sendImpl(new Gi(t, r));
          return;
        }
        if (!(n && o.queueEvents)) {
          const c = "rejecting event, queueEvent was " + n + ", state was " + o.state;
          a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.send()", c), r(this.errorReason || new _(c, 9e4, 400));
          return;
        }
        this.logger.shouldLog(a.LOG_MICRO) && a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + Tr(t, this.realtime._RealtimePresence, this.realtime._Annotations, this.realtime._liveObjectsPlugin)), this.queue(t, r);
      }
      sendImpl(t) {
        const n = t.message;
        t.ackRequired && !t.sendAttempted && (n.msgSerial = this.msgSerial++);
        try {
          this.activeProtocol.send(t);
        } catch (r) {
          a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + r.stack);
        }
      }
      queue(t, n) {
        a.logAction(this.logger, a.LOG_MICRO, "ConnectionManager.queue()", "queueing event"), this.queuedMessages.push(new Gi(t, n));
      }
      queuedPresenceToChannelQueues() {
        this.queuedMessages.messages = this.queuedMessages.messages.filter((t) => {
          if (t.message.action !== V.PRESENCE) return !0;
          const n = t.message.channel, r = n ? this.realtime.channels.all[n] : void 0;
          return !(r && r.requeuePresenceFromConnectionQueue(t));
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
        n > 0 && (a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + n + " queued messages, err = " + pe(t)), this.queuedMessages.completeAllMessages(t));
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
        const r = y.Config.now(), o = Bt();
        return gs(new Promise((c) => {
          const u = (d) => {
            d === o && (n.off("heartbeat", u), c(y.Config.now() - r));
          };
          n.on("heartbeat", u), n.ping(o);
        }), this.options.timeouts.realtimeRequestTimeout, "Timeout waiting for heartbeat response");
      }
      abort(t) {
        this.activeProtocol.getTransport().fail(t);
      }
      getTransportPreference() {
        var t, n;
        return this.transportPreference || Nr() && ((n = (t = y.WebStorage) == null ? void 0 : t.get) == null ? void 0 : n.call(t, Lr));
      }
      persistTransportPreference(t) {
        var n, r;
        this.transportPreference = t.shortName, Nr() && ((r = (n = y.WebStorage) == null ? void 0 : n.set) == null || r.call(n, Lr, t.shortName));
      }
      unpersistTransportPreference() {
        var t, n;
        this.transportPreference = null, Nr() && ((n = (t = y.WebStorage) == null ? void 0 : t.remove) == null || n.call(t, Lr));
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
        else if (t.statusCode === Ot.Forbidden) {
          const n = "Client configured authentication provider returned 403, failing the connection";
          a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", n);
          const r = new _({
            message: n,
            code: 80019,
            statusCode: 403,
            cause: t,
            remediation: "Inspect cause for the underlying error, then fix your authUrl/authCallback so it does not respond 403 for a valid client."
          });
          this.notifyState({
            state: "failed",
            error: r
          });
        } else {
          const n = "Client configured authentication provider request failed";
          a.logAction(this.logger, a.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", n);
          const r = new _({
            message: n,
            code: 80019,
            statusCode: 401,
            cause: t,
            remediation: "Check network connectivity to your authUrl/authCallback endpoint and that it returns a valid token shape. Inspect cause for the underlying error."
          });
          this.notifyState({
            state: this.state.failState,
            error: r
          });
        }
      }
      onConnectionDetailsUpdate(t, n) {
        if (!t) return;
        this.connectionDetails = t, t.maxMessageSize && (this.options.maxMessageSize = t.maxMessageSize);
        const r = t.clientId;
        if (r) {
          const c = this.realtime.auth._uncheckedSetClientId(r);
          if (c) {
            a.logAction(this.logger, a.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", c.message), n.fail(c);
            return;
          }
        }
        const o = t.connectionStateTtl;
        o && (this.connectionStateTtl = o), this.maxIdleInterval = t.maxIdleInterval, this.emit("connectiondetails", t);
      }
      checkWsConnectivity() {
        const t = this.options.wsConnectivityCheckUrl || Q.wsConnectivityCheckUrl, n = new y.Config.WebSocket(t);
        return new Promise((r, o) => {
          let c = !1;
          n.onopen = () => {
            c || (c = !0, r(), n.close());
          }, n.onclose = n.onerror = () => {
            c || (c = !0, o());
          };
        });
      }
      sessionRecoveryName() {
        return this.options.recoveryKeyStorageName || "ably-connection-recovery";
      }
      getSessionRecoverData() {
        var t, n;
        return qn() && ((n = (t = y.WebStorage) == null ? void 0 : t.getSession) == null ? void 0 : n.call(t, this.sessionRecoveryName()));
      }
      setSessionRecoverData(t) {
        var n, r;
        return qn() && ((r = (n = y.WebStorage) == null ? void 0 : n.setSession) == null ? void 0 : r.call(n, this.sessionRecoveryName(), t));
      }
      clearSessionRecoverData() {
        var t, n;
        return qn() && ((n = (t = y.WebStorage) == null ? void 0 : t.removeSession) == null ? void 0 : n.call(t, this.sessionRecoveryName()));
      }
    }, sc = class extends Oe {
      constructor(e, t) {
        super(e.logger), this.whenState = (n) => Oe.prototype.whenState.call(this, n, this.state), this.ably = e, this.connectionManager = new Wi(e, t), this.state = this.connectionManager.state.state, this.key = void 0, this.id = void 0, this.errorReason = null, this.connectionManager.on("connectionstate", (n) => {
          const r = this.state = n.current;
          y.Config.nextTick(() => {
            this.emit(r, n);
          });
        }), this.connectionManager.on("update", (n) => {
          y.Config.nextTick(() => {
            this.emit("update", n);
          });
        });
      }
      connect() {
        a.logAction(this.logger, a.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({ state: "connecting" });
      }
      ping(...e) {
        return Ie(e, 0), this._pingImpl();
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
    }, rc = sc, Fi = class xo extends K {
      constructor(t) {
        var n, r;
        if (super(Q.objectifyOptions(t, !1, "BaseRealtime", a.defaultLogger)), a.logAction(this.logger, a.LOG_MINOR, "Realtime()", ""), typeof EdgeRuntime == "string") throw new _(`Ably.Realtime instance cannot be used in Vercel Edge runtime. If you are running Vercel Edge functions, please replace your "new Ably.Realtime()" with "new Ably.Rest()" and use Ably Rest API instead of the Realtime API. If you are server-rendering your application in the Vercel Edge runtime, please use the condition "if (typeof EdgeRuntime === 'string')" to prevent instantiating Ably.Realtime instance during SSR in the Vercel Edge runtime.`, 4e4, 400);
        this._additionalTransportImplementations = xo.transportImplementationsFromPlugins(this.options.plugins), this._RealtimePresence = (r = (n = this.options.plugins) == null ? void 0 : n.RealtimePresence) != null ? r : null, this.connection = new rc(this, this.options), this._channels = new oc(this), this.options.autoConnect !== !1 && this.connect();
      }
      static transportImplementationsFromPlugins(t) {
        const n = {};
        return t?.WebSocketTransport && (n[Fe.WebSocket] = t.WebSocketTransport), t?.XHRPolling && (n[Fe.XhrPolling] = t.XHRPolling), n;
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
    Fi.EventEmitter = Oe;
    var ic = Fi, oc = class extends Oe {
      constructor(e) {
        super(e.logger), this.realtime = e, this.all = /* @__PURE__ */ Object.create(null), e.connection.connectionManager.on("transport.active", () => {
          this.onTransportActive();
        });
      }
      channelSerials() {
        let e = {};
        for (const t of tt(this.all, !0)) {
          const n = this.all[t];
          n.properties.channelSerial && (e[t] = n.properties.channelSerial);
        }
        return e;
      }
      recoverChannels(e) {
        for (const t of tt(e, !0)) {
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
        }, r = [
          "attaching",
          "attached",
          "detaching",
          "suspended"
        ], o = n[e];
        for (const c in this.all) {
          const u = this.all[c];
          r.includes(u.state) && u.notifyState(o, t);
        }
      }
      get(e, t) {
        e = String(e);
        let n = this.all[e];
        if (!n) n = this.all[e] = new Bn(this.realtime, e, t);
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
          const r = en(t.filter), o = kt(e);
          e = `[filter=${r}${o.qualifierParam}]${o.channelName}`;
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
        t.detach().catch((r) => {
          a.logAction(this.logger, a.LOG_ERROR, "Channels.release()", "Error detaching channel " + e + " prior to release: " + pe(r));
        }).then(() => {
          delete this.all[e];
        });
      }
    }, ac = ic;
    function cc(e, t) {
      if (e.isSynthesized() || t.isSynthesized()) return e.timestamp >= t.timestamp;
      const n = e.parseId(), r = t.parseId();
      return n.msgSerial === r.msgSerial ? n.index > r.index : n.msgSerial > r.msgSerial;
    }
    var Ur = class extends Oe {
      constructor(e, t, n = cc) {
        super(e.logger), this.presence = e, this.map = /* @__PURE__ */ Object.create(null), this.syncInProgress = !1, this.residualMembers = null, this.memberKey = t, this.newerThan = n;
      }
      get(e) {
        return this.map[e];
      }
      getClient(e) {
        const t = this.map, n = [];
        for (const r in t) {
          const o = t[r];
          o.clientId == e && o.action != "absent" && n.push(o);
        }
        return n;
      }
      list(e) {
        const t = this.map, n = e && e.clientId, r = e && e.connectionId, o = [];
        for (const c in t) {
          const u = t[c];
          u.action !== "absent" && (n && n != u.clientId || r && r != u.connectionId || o.push(u));
        }
        return o;
      }
      put(e) {
        (e.action === "enter" || e.action === "update") && (e = _t.fromValues(e), e.action = "present");
        const t = this.map, n = this.memberKey(e);
        this.residualMembers && delete this.residualMembers[n];
        const r = t[n];
        return r && !this.newerThan(e, r) ? !1 : (t[n] = e, !0);
      }
      values() {
        const e = this.map, t = [];
        for (const n in e) {
          const r = e[n];
          r.action != "absent" && t.push(r);
        }
        return t;
      }
      remove(e) {
        const t = this.map, n = this.memberKey(e), r = t[n];
        return r && !this.newerThan(e, r) ? !1 : (this.syncInProgress ? (e = _t.fromValues(e), e.action = "absent", t[n] = e) : delete t[n], !!r);
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
          this.presence._synthesizeLeaves(mt(this.residualMembers));
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
    function lc(e) {
      return e.channel.client.auth.clientId;
    }
    function jr(e) {
      const t = e.channel.client, n = t.auth.clientId;
      return (!n || n === "*") && t.connection.state === "connected";
    }
    var hc = class extends Oe {
      constructor(e) {
        super(e.logger), this.channel = e, this.syncComplete = !1, this.members = new Ur(this, (t) => t.memberKey), this._myMembers = new Ur(this, (t) => t.clientId), this.subscriptions = new Oe(this.logger), this.pendingPresence = [];
      }
      enter(...e) {
        return Ie(e, 0), this._enterImpl(e[0]);
      }
      async _enterImpl(e) {
        if (jr(this)) throw new _({
          message: "clientId must be specified to enter a presence channel",
          code: 40012,
          statusCode: 400,
          remediation: "Set ClientOptions.clientId (or include clientId in the token) before calling presence.enter() again. To enter on behalf of another identity, use presence.enterClient(otherId, data), which requires the library to be instantiated with an API key or a token bound to a wildcard clientId."
        });
        return this._enterOrUpdateClient(void 0, void 0, e, "enter");
      }
      update(...e) {
        return Ie(e, 0), this._updateImpl(e[0]);
      }
      async _updateImpl(e) {
        if (jr(this)) throw new _({
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
      async _enterOrUpdateClient(e, t, n, r) {
        const o = this.channel;
        if (!o.connectionManager.activeState()) throw o.connectionManager.getError();
        a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence." + r + "Client()", "channel = " + o.name + ", id = " + e + ", client = " + (t || "(implicit) " + lc(this)));
        const c = _t.fromData(n);
        c.action = r, e && (c.id = e), t && (c.clientId = t);
        const u = await c.encode(o.channelOptions);
        switch (o.state) {
          case "attached":
            return o.sendPresence([u]);
          case "initialized":
          case "detached":
            o.attach();
          case "attaching":
            if (o.client.options.queueMessages) return new Promise((d, b) => {
              this.pendingPresence.push({
                presence: u,
                callback: (w) => w ? b(w) : d()
              });
            });
          default: {
            const d = new U("Unable to " + r + " presence channel while in " + o.state + " state", 90001);
            throw d.code = 90001, d;
          }
        }
      }
      leave(...e) {
        return Ie(e, 0), this._leaveImpl(e[0]);
      }
      async _leaveImpl(e) {
        if (jr(this)) throw new _({
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
        const r = _t.fromData(t);
        r.action = "leave", e && (r.clientId = e);
        const o = await r.encode(n.channelOptions);
        switch (n.state) {
          case "attached":
            return n.sendPresence([o]);
          case "attaching":
            if (n.client.options.queueMessages) return new Promise((c, u) => {
              this.pendingPresence.push({
                presence: o,
                callback: (d) => d ? u(d) : c()
              });
            });
          default:
            throw new U({
              message: "Unable to leave presence channel while in " + n.state + " state",
              code: 90001,
              remediation: 'presence.leave() only works while the channel is attached. From "suspended" or "attaching", await channel.attach() and retry, since your presence membership is restored when the channel re-attaches. From "initialized", "detached", or "failed" there is nothing to leave: either no member was entered, or the SDK already cleared your membership when the channel left the attached state.'
            });
        }
      }
      get(...e) {
        return Ie(e, 0), this._getImpl(e[0]);
      }
      async _getImpl(e) {
        const t = !e || ("waitForSync" in e ? e.waitForSync : !0);
        function n(o) {
          return e ? o.list(e) : o.values();
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
        if (await this.channel.ensureAttached(), (this.channel._mode & Pe.PRESENCE_SUBSCRIBE) === 0) {
          const o = new _({
            message: "The channel was attached without the presence_subscribe mode, so the server has not delivered any members to this client.",
            code: 91008,
            statusCode: 400,
            remediation: 'Include "presence_subscribe" in the channel modes: realtime.channels.get(name, { modes: ["presence_subscribe", ...] }), or call channel.setOptions({ modes: [...] }) on an existing channel to trigger a reattach. Alternatively, omit modes entirely and ensure your token/API-key capability permits subscribe on this channel. If you have the Ably CLI installed, `ably auth keys list` shows your key\'s capabilities.'
          });
          if (this.channel.client.options.strictMode === !0) throw o;
          a.logActionNoStrip(this.logger, a.LOG_ERROR, "RealtimePresence.get()", o.message + "; remediation=" + o.remediation + a.silentFailureLogSuffix());
        }
        const r = this.members;
        return t && await r.waitSync(), n(this.members);
      }
      history(...e) {
        return Ie(e, 0), this._historyImpl(e[0]);
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
        let r, o, c;
        const u = this.members, d = this._myMembers, b = [], w = this.channel.connectionManager.connectionId;
        t && (n && (c = n.match(/^([\w-]+):(.*)$/)) && (r = c[1], o = c[2]), (!this.members.syncInProgress || this._syncId !== void 0 && r !== this._syncId) && this.members.startSync(), r !== void 0 && (this._syncId = r));
        for (let O of e) switch (O.action) {
          case "leave":
            u.remove(O) && b.push(O), O.connectionId === w && !O.isSynthesized() && d.remove(O);
            break;
          case "enter":
          case "present":
          case "update":
            u.put(O) && b.push(O), O.connectionId === w && d.put(O);
        }
        t && !o && (u.endSync(), this._syncId = void 0, this.channel.syncChannelSerial = null);
        for (let O = 0; O < b.length; O++) {
          const I = b[O];
          this.subscriptions.emit(I.action, I);
        }
      }
      onAttached(e) {
        a.logAction(this.logger, a.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear()), this._ensureMyMembersPresent();
        const t = this.pendingPresence, n = t.length;
        if (n) {
          this.pendingPresence = [];
          const r = [], o = ws.create(this.logger);
          a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence.onAttached", "sending " + n + " queued presence messages");
          for (let c = 0; c < n; c++) {
            const u = t[c];
            r.push(u.presence), o.push(u.callback);
          }
          this.channel.sendPresence(r).then(() => o()).catch((c) => o(c));
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
          a.logAction(this.logger, a.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + pe(e));
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
          const r = e.map[n];
          a.logAction(this.logger, a.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + r.clientId + '" into the presence set');
          const o = r.connectionId === t ? r.id : void 0;
          this._enterOrUpdateClient(o, r.clientId, r.data, "enter").catch((c) => {
            const u = new _({
              message: "Presence auto re-enter failed",
              code: 91004,
              statusCode: 400,
              cause: c,
              remediation: 'Listen for the channel "update" event and call presence.enter(...) again once the channel is attached. For a member entered on behalf of another clientId, call presence.enterClient(clientId, data) instead.'
            });
            a.logAction(this.logger, a.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", "Presence auto re-enter failed; reason = " + pe(c));
            const d = new Er(this.channel.state, this.channel.state, !0, !1, u);
            this.channel.emit("update", d);
          });
        }
      }
      _synthesizeLeaves(e) {
        const t = this.subscriptions;
        e.forEach(function(n) {
          const r = _t.fromValues({
            action: "leave",
            connectionId: n.connectionId,
            clientId: n.clientId,
            data: n.data,
            encoding: n.encoding,
            timestamp: y.Config.now()
          });
          t.emit("leave", r);
        });
      }
      subscribe(...e) {
        return Ie(e, 2), this._subscribeImpl(e);
      }
      async _subscribeImpl(e) {
        const t = Bn.processListenerArgs(e), n = t[0], r = t[1], o = this.channel;
        if (o.state === "failed") throw _.fromValues(o.invalidStateError());
        this.subscriptions.on(n, r), o.channelOptions.attachOnSubscribe !== !1 && await o.attach();
      }
      unsubscribe(...e) {
        const t = Bn.processListenerArgs(e), n = t[0], r = t[1];
        this.subscriptions.off(n, r);
      }
    }, uc = hc, dc = Fe.WebSocket;
    function gc(e) {
      return !!e.on;
    }
    var fc = class extends un {
      constructor(e, t, n) {
        super(e, t, n), this.shortName = dc, n.heartbeats = y.Config.websocketHeartbeatsParam, this.wsHost = n.host;
      }
      static isAvailable() {
        return !!y.Config.WebSocket;
      }
      createWebSocket(e, t) {
        return this.uri = e + yt(t), new y.Config.WebSocket(this.uri);
      }
      toString() {
        return "WebSocketTransport; uri=" + this.uri;
      }
      connect() {
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.connect()", "starting"), un.prototype.connect.call(this);
        const e = this, t = this.params, n = t.options, r = (n.tls ? "wss://" : "ws://") + On(this.wsHost) + ":" + Q.getPort(n) + "/";
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + r), Ge(this.auth.getAuthParams(), function(o, c) {
          if (e.isDisposed) return;
          let u = "";
          for (const b in c) u += " " + b + ": " + c[b] + ";";
          if (a.logAction(e.logger, a.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + u + " err: " + o), o) {
            e.disconnect(o);
            return;
          }
          const d = t.getConnectParams(c);
          try {
            const b = e.wsConnection = e.createWebSocket(r, d);
            b.binaryType = y.Config.binaryType, b.onopen = function() {
              e.onWsOpen();
            }, b.onclose = function(w) {
              e.onWsClose(w);
            }, b.onmessage = function(w) {
              e.onWsData(w.data);
            }, b.onerror = function(w) {
              e.onWsError(w);
            }, gc(b) && b.on("ping", function() {
              e.onActivity();
            });
          } catch (b) {
            a.logAction(e.logger, a.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (b.stack || b.message)), e.disconnect(b);
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
          t.send(Ba(e, this.connectionManager.realtime._MsgPack, this.params.format));
        } catch (n) {
          const r = "Exception from ws connection when trying to send: " + pe(n);
          a.logAction(this.logger, a.LOG_ERROR, "WebSocketTransport.send()", r), this.finish("disconnected", new _(r, 5e4, 500));
        }
      }
      onWsData(e) {
        a.logAction(this.logger, a.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + e.length + "; type = " + typeof e);
        try {
          this.onProtocolMessage(qa(e, this.connectionManager.realtime._MsgPack, this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._liveObjectsPlugin, this.format));
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
          const r = new _("Websocket closed", 80003, 400);
          this.finish("disconnected", r);
        } else {
          const r = "Unclean disconnection of WebSocket ; code = " + n, o = new _(r, 80003, 400);
          a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.onWsClose()", r), this.finish("disconnected", o);
        }
        this.emit("disposed");
      }
      onWsError(e) {
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + e.message), y.Config.nextTick(() => {
          this.disconnect(Error(e.message));
        });
      }
      dispose() {
        a.logAction(this.logger, a.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = !0;
        const e = this.wsConnection;
        e && (e.onmessage = function() {
        }, delete this.wsConnection, y.Config.nextTick(() => {
          if (a.logAction(this.logger, a.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !e) throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
          e.close();
        }));
      }
    }, zi = fc, pc = class {
      static subscribeFilter(e, t, n) {
        const r = (o) => {
          var c, u, d, b, w, O;
          const I = {
            name: o.name,
            refTimeserial: (u = (c = o.extras) == null ? void 0 : c.ref) == null ? void 0 : u.timeserial,
            refType: (b = (d = o.extras) == null ? void 0 : d.ref) == null ? void 0 : b.type,
            isRef: !!((O = (w = o.extras) == null ? void 0 : w.ref) != null && O.timeserial),
            clientId: o.clientId
          };
          Object.entries(t).find(([N, k]) => k !== void 0 ? I[N] !== k : !1) || n(o);
        };
        this.addFilteredSubscription(e, t, n, r), e.subscriptions.on(r);
      }
      static addFilteredSubscription(e, t, n, r) {
        var o;
        if (e.filteredSubscriptions || (e.filteredSubscriptions = /* @__PURE__ */ new Map()), e.filteredSubscriptions.has(n)) {
          const c = e.filteredSubscriptions.get(n);
          c.set(t, ((o = c?.get(t)) == null ? void 0 : o.concat(r)) || [r]);
        } else e.filteredSubscriptions.set(n, /* @__PURE__ */ new Map([[t, [r]]]));
      }
      static getAndDeleteFilteredSubscriptions(e, t, n) {
        if (!e.filteredSubscriptions) return [];
        if (!n && t) return Array.from(e.filteredSubscriptions.entries()).map(([c, u]) => {
          var d;
          let b = u.get(t);
          return u.delete(t), u.size === 0 && ((d = e.filteredSubscriptions) == null || d.delete(c)), b;
        }).reduce((c, u) => u ? c.concat(...u) : c, []);
        if (!n || !e.filteredSubscriptions.has(n)) return [];
        const r = e.filteredSubscriptions.get(n);
        if (!t) {
          const c = Array.from(r.values()).reduce((u, d) => u.concat(...d), []);
          return e.filteredSubscriptions.delete(n), c;
        }
        let o = r.get(t);
        return r.delete(t), o || [];
      }
    }, Ye = class ri extends ac {
      constructor(t) {
        var n;
        const r = ri._MsgPack;
        if (!r) throw new Error("Expected DefaultRealtime._MsgPack to have been set");
        super(Q.objectifyOptions(t, !0, "Realtime", a.defaultLogger, j(E({}, Mi), {
          Crypto: (n = ri.Crypto) != null ? n : void 0,
          MsgPack: r,
          RealtimePresence: {
            RealtimePresence: uc,
            PresenceMessage: _t,
            WirePresenceMessage: Un
          },
          Annotations: {
            Annotation: hn,
            WireAnnotation: ln,
            RealtimeAnnotations: Pr,
            RestAnnotations: js
          },
          WebSocketTransport: zi,
          MessageInteractions: pc
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
    Ye.Utils = ce, Ye.ConnectionManager = Wi, Ye.ProtocolMessage = Ga, Ye._Crypto = null, Ye.Message = Ti, Ye.PresenceMessage = Ii, Ye.Annotation = Ni, Ye._MsgPack = null, Ye._Http = rt, Ye._PresenceMap = Ur, Ye._MessageEncoding = rn;
    var Br = Ye, qr = Uint8Array, Gn = Uint32Array, Gr = Math.pow, Vi = new Gn(8), $i = [], Hn = new Gn(64);
    function Ki(e) {
      return (e - (e | 0)) * Gr(2, 32) | 0;
    }
    for (var Wn = 2, Fn = 0; Fn < 64; ) {
      for (Hr = !0, Gs = 2; Gs <= Wn / 2; Gs++) Wn % Gs === 0 && (Hr = !1);
      Hr && (Fn < 8 && (Vi[Fn] = Ki(Gr(Wn, 1 / 2))), $i[Fn] = Ki(Gr(Wn, 1 / 3)), Fn++), Wn++;
    }
    var Hr, Gs, mc = !!new qr(new Gn([1]).buffer)[0];
    function Wr(e) {
      return mc ? e >>> 24 | (e >>> 16 & 255) << 8 | (e & 65280) << 8 | e << 24 : e;
    }
    function ft(e, t) {
      return e >>> t | e << 32 - t;
    }
    function Hs(e) {
      var t = Vi.slice(), n = e.length, r = n * 8, o = 512 - (r + 64) % 512 - 1 + r + 65, c = new qr(o / 8), u = new Gn(c.buffer);
      c.set(e, 0), c[n] = 128, u[u.length - 1] = Wr(r);
      for (var d, b = 0; b < o / 32; b += 16) {
        var w = t.slice();
        for (d = 0; d < 64; d++) {
          var O;
          if (d < 16) O = Wr(u[b + d]);
          else {
            var I = Hn[d - 15], N = Hn[d - 2];
            O = Hn[d - 7] + Hn[d - 16] + (ft(I, 7) ^ ft(I, 18) ^ I >>> 3) + (ft(N, 17) ^ ft(N, 19) ^ N >>> 10);
          }
          Hn[d] = O |= 0;
          for (var k = (ft(w[4], 6) ^ ft(w[4], 11) ^ ft(w[4], 25)) + (w[4] & w[5] ^ ~w[4] & w[6]) + w[7] + O + $i[d], H = (ft(w[0], 2) ^ ft(w[0], 13) ^ ft(w[0], 22)) + (w[0] & w[1] ^ w[2] & (w[0] ^ w[1])), q = 7; q > 0; q--) w[q] = w[q - 1];
          w[0] = k + H | 0, w[4] = w[4] + k | 0;
        }
        for (d = 0; d < 8; d++) t[d] = t[d] + w[d] | 0;
      }
      return new qr(new Gn(t.map(function(ee) {
        return Wr(ee);
      })).buffer);
    }
    function yc(e, t) {
      if (e.length > 64 && (e = Hs(e)), e.length < 64) {
        const d = /* @__PURE__ */ new Uint8Array(64);
        d.set(e, 0), e = d;
      }
      for (var n = /* @__PURE__ */ new Uint8Array(64), r = /* @__PURE__ */ new Uint8Array(64), o = 0; o < 64; o++)
        n[o] = 54 ^ e[o], r[o] = 92 ^ e[o];
      var c = new Uint8Array(t.length + 64);
      c.set(n, 0), c.set(t, 64);
      var u = /* @__PURE__ */ new Uint8Array(96);
      return u.set(r, 0), u.set(Hs(c), 64), Hs(u);
    }
    var bc = class {
      constructor() {
        this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.hexCharSet = "0123456789abcdef";
      }
      uint8ViewToBase64(e) {
        let t = "";
        const n = this.base64CharSet, r = e.byteLength, o = r % 3, c = r - o;
        let u, d, b, w, O;
        for (let I = 0; I < c; I = I + 3)
          O = e[I] << 16 | e[I + 1] << 8 | e[I + 2], u = (O & 16515072) >> 18, d = (O & 258048) >> 12, b = (O & 4032) >> 6, w = O & 63, t += n[u] + n[d] + n[b] + n[w];
        return o == 1 ? (O = e[c], u = (O & 252) >> 2, d = (O & 3) << 4, t += n[u] + n[d] + "==") : o == 2 && (O = e[c] << 8 | e[c + 1], u = (O & 64512) >> 10, d = (O & 1008) >> 4, b = (O & 15) << 2, t += n[u] + n[d] + n[b] + "="), t;
      }
      base64ToArrayBuffer(e) {
        const t = atob?.(e), n = t.length, r = new Uint8Array(n);
        for (let o = 0; o < n; o++) {
          const c = t.charCodeAt(o);
          r[o] = c;
        }
        return this.toArrayBuffer(r);
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
        if (ArrayBuffer && y.Config.atob) return this.base64ToArrayBuffer(e);
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
        if (y.Config.TextEncoder) {
          const t = new y.Config.TextEncoder().encode(e);
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
        const n = this.toArrayBuffer(e), r = this.toArrayBuffer(t);
        if (n.byteLength != r.byteLength) return !1;
        const o = new Uint8Array(n), c = new Uint8Array(r);
        for (var u = 0; u < o.length; u++) if (o[u] != c[u]) return !1;
        return !0;
      }
      byteLength(e) {
        return e instanceof ArrayBuffer || ArrayBuffer.isView(e) ? e.byteLength : -1;
      }
      arrayBufferViewToBuffer(e) {
        return this.toArrayBuffer(e);
      }
      concat(e) {
        const t = e.reduce((o, c) => o + c.byteLength, 0), n = new Uint8Array(t);
        let r = 0;
        for (const o of e) {
          const c = this.toBuffer(o);
          n.set(c, r), r += c.byteLength;
        }
        return n.buffer;
      }
      sha256(e) {
        const t = Hs(this.toBuffer(e));
        return this.toArrayBuffer(t);
      }
      hmacSha256(e, t) {
        const n = yc(this.toBuffer(t), this.toBuffer(e));
        return this.toArrayBuffer(n);
      }
    }, Ji = new bc(), vc = function(e, t) {
      var n = "aes", r = 256, o = "cbc", c = 16;
      function u(N) {
        if (N.algorithm === "aes" && N.mode === "cbc") {
          if (N.keyLength === 128 || N.keyLength === 256) return;
          throw new Error("Unsupported key length " + N.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)");
        }
      }
      function d(N) {
        return N.replace("_", "/").replace("-", "+");
      }
      function b(N) {
        return N instanceof w;
      }
      class w {
        constructor(k, H, q, ee) {
          this.algorithm = k, this.keyLength = H, this.mode = q, this.key = ee;
        }
      }
      class O {
        static getDefaultParams(k) {
          var H;
          if (!k.key) throw new Error("Crypto.getDefaultParams: a key is required");
          typeof k.key == "string" ? H = t.toArrayBuffer(t.base64Decode(d(k.key))) : k.key instanceof ArrayBuffer ? H = k.key : H = t.toArrayBuffer(k.key);
          var q = k.algorithm || n, ee = H.byteLength * 8, ge = k.mode || o, me = new w(q, ee, ge, H);
          if (k.keyLength && k.keyLength !== me.keyLength) throw new Error("Crypto.getDefaultParams: a keyLength of " + k.keyLength + " was specified, but the key actually has length " + me.keyLength);
          return u(me), me;
        }
        static async generateRandomKey(k) {
          try {
            return e.getRandomArrayBuffer((k || r) / 8);
          } catch (H) {
            throw new _("Failed to generate random key: " + H.message, 5e4, 500);
          }
        }
        static getCipher(k, H) {
          var q, ee = b(k) ? k : this.getDefaultParams(k);
          return {
            cipherParams: ee,
            cipher: new I(ee, (q = k.iv) != null ? q : null, H)
          };
        }
      }
      O.CipherParams = w;
      class I {
        constructor(k, H, q) {
          if (this.logger = q, !crypto.subtle)
            throw isSecureContext ? new Error("Crypto operations are not possible since the browser’s SubtleCrypto class is unavailable (reason unknown).") : new Error("Crypto operations are is not possible since the current environment is a non-secure context and hence the browser’s SubtleCrypto class is not available.");
          this.algorithm = k.algorithm + "-" + String(k.keyLength) + "-" + k.mode, this.webCryptoAlgorithm = k.algorithm + "-" + k.mode, this.key = t.toArrayBuffer(k.key), this.iv = H ? t.toArrayBuffer(H) : null;
        }
        concat(k, H) {
          const q = new ArrayBuffer(k.byteLength + H.byteLength), ee = new DataView(q), ge = new DataView(t.toArrayBuffer(k));
          for (let be = 0; be < ge.byteLength; be++) ee.setInt8(be, ge.getInt8(be));
          const me = new DataView(t.toArrayBuffer(H));
          for (let be = 0; be < me.byteLength; be++) ee.setInt8(ge.byteLength + be, me.getInt8(be));
          return q;
        }
        async encrypt(k) {
          a.logAction(this.logger, a.LOG_MICRO, "CBCCipher.encrypt()", "");
          const H = await this.getIv(), q = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, !1, ["encrypt"]), ee = await crypto.subtle.encrypt({
            name: this.webCryptoAlgorithm,
            iv: H
          }, q, k);
          return this.concat(H, ee);
        }
        async decrypt(k) {
          a.logAction(this.logger, a.LOG_MICRO, "CBCCipher.decrypt()", "");
          const H = t.toArrayBuffer(k), q = H.slice(0, c), ee = H.slice(c), ge = await crypto.subtle.importKey("raw", this.key, this.webCryptoAlgorithm, !1, ["decrypt"]);
          return crypto.subtle.decrypt({
            name: this.webCryptoAlgorithm,
            iv: q
          }, ge, ee);
        }
        async getIv() {
          if (this.iv) {
            var k = this.iv;
            return this.iv = null, k;
          }
          const H = await e.getRandomArrayBuffer(c);
          return t.toArrayBuffer(H);
        }
      }
      return O;
    }, Qi = /* @__PURE__ */ ((e) => (e[e.REQ_SEND = 0] = "REQ_SEND", e[e.REQ_RECV = 1] = "REQ_RECV", e[e.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", e[e.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM", e))(Qi || {}), wt = Qi;
    function Xi() {
      return new _("No HTTP request plugin provided. Provide at least one of the FetchRequest or XHRRequest plugins.", 4e4, 400);
    }
    var Ws = class {
      constructor(e) {
        this.checksInProgress = null, this.checkConnectivity = void 0, this.supportsAuthHeaders = !1, this.supportsLinkHeaders = !1;
        var t;
        this.client = e ?? null;
        const n = e?.options.connectivityCheckUrl || Q.connectivityCheckUrl, r = (t = e?.options.connectivityCheckParams) != null ? t : null, o = !e?.options.connectivityCheckUrl, c = E(E({}, Yi.bundledRequestImplementations), e?._additionalHTTPRequestImplementations), u = c.XHRRequest, d = c.FetchRequest, b = !!(u || d);
        if (!b) throw Xi();
        y.Config.xhrSupported && u ? (this.supportsAuthHeaders = !0, this.Request = async function(w, O, I, N, k) {
          return new Promise((H) => {
            var q;
            const ee = u.createRequest(O, I, N, k, wt.REQ_SEND, (q = e && e.options.timeouts) != null ? q : null, this.logger, w);
            ee.once("complete", (ge, me, be, oe, Ve) => H({
              error: ge,
              body: me,
              headers: be,
              unpacked: oe,
              statusCode: Ve
            })), ee.exec();
          });
        }, e?.options.disableConnectivityCheck ? this.checkConnectivity = async function() {
          return !0;
        } : this.checkConnectivity = async function() {
          var w;
          a.logAction(this.logger, a.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + n);
          const O = await this.doUri(we.Get, n, null, null, r);
          let I = !1;
          return o ? I = !O.error && ((w = O.body) == null ? void 0 : w.replace(/\n/, "")) == "yes" : I = !O.error && yr(O.statusCode), a.logAction(this.logger, a.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + I), I;
        }) : y.Config.fetchSupported && d ? (this.supportsAuthHeaders = !0, this.Request = async (w, O, I, N, k) => d(w, e ?? null, O, I, N, k), e?.options.disableConnectivityCheck ? this.checkConnectivity = async function() {
          return !0;
        } : this.checkConnectivity = async function() {
          var w;
          a.logAction(this.logger, a.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + n);
          const O = await this.doUri(we.Get, n, null, null, null), I = !O.error && ((w = O.body) == null ? void 0 : w.replace(/\n/, "")) == "yes";
          return a.logAction(this.logger, a.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + I), I;
        }) : this.Request = async () => ({ error: b ? new U("no supported HTTP transports available", null, 400) : Xi() });
      }
      get logger() {
        var e, t;
        return (t = (e = this.client) == null ? void 0 : e.logger) != null ? t : a.defaultLogger;
      }
      async doUri(e, t, n, r, o) {
        return this.Request ? this.Request(e, t, n, o, r) : { error: new U("Request invoked before assigned to", null, 500) };
      }
      shouldFallback(e) {
        const t = e.statusCode;
        return t === 408 && !e.code || t === 400 && !e.code || t >= 500 && t <= 504;
      }
    }, Yi = (Ws.methods = [
      we.Get,
      we.Delete,
      we.Post,
      we.Put,
      we.Patch
    ], Ws.methodsWithoutBody = [we.Get, we.Delete], Ws.methodsWithBody = [
      we.Post,
      we.Put,
      we.Patch
    ], Ws), Zi = Yi, dn = "ablyjs-storage-test", gn = typeof global < "u" ? global : typeof window < "u" ? window : self, _c = class {
      constructor() {
        try {
          gn.sessionStorage.setItem(dn, dn), gn.sessionStorage.removeItem(dn), this.sessionSupported = !0;
        } catch {
          this.sessionSupported = !1;
        }
        try {
          gn.localStorage.setItem(dn, dn), gn.localStorage.removeItem(dn), this.localSupported = !0;
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
      _set(e, t, n, r) {
        const o = { value: t };
        return n && (o.expires = Date.now() + n), this.storageInterface(r).setItem(e, JSON.stringify(o));
      }
      _get(e, t) {
        if (t && !this.sessionSupported) throw new Error("Session Storage not supported");
        if (!t && !this.localSupported) throw new Error("Local Storage not supported");
        const n = this.storageInterface(t).getItem(e);
        if (!n) return null;
        const r = JSON.parse(n);
        return r.expires && r.expires < Date.now() ? (this.storageInterface(t).removeItem(e), null) : r.value;
      }
      _remove(e, t) {
        return this.storageInterface(t).removeItem(e);
      }
      storageInterface(e) {
        return e ? gn.sessionStorage : gn.localStorage;
      }
    }, eo = new _c(), Re = Gt(), wc = typeof EdgeRuntime == "string";
    typeof Window > "u" && typeof WorkerGlobalScope > "u" && !wc && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
    function Cc() {
      const e = Re.location;
      return !Re.WebSocket || !e || !e.origin || e.origin.indexOf("http") > -1;
    }
    function Rc() {
      return typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope;
    }
    var to = {
      agent: "browser",
      logTimestamps: !0,
      userAgent: Re.navigator && Re.navigator.userAgent.toString(),
      currentUrl: Re.location && Re.location.href,
      binaryType: "arraybuffer",
      WebSocket: Re.WebSocket,
      fetchSupported: !!Re.fetch,
      xhrSupported: Re.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
      allowComet: Cc(),
      websocketHeartbeatsParam: "bounce",
      supportsBinary: !!Re.TextDecoder,
      preferBinary: !1,
      ArrayBuffer: Re.ArrayBuffer,
      atob: Re.atob,
      nextTick: typeof Re.queueMicrotask == "function" ? (e) => Re.queueMicrotask(e) : (e) => Promise.resolve().then(e),
      setTimeout: Re.setTimeout.bind(Re),
      clearTimeout: Re.clearTimeout.bind(Re),
      now: Date.now,
      addEventListener: Re.addEventListener,
      inspect: JSON.stringify,
      stringByteSize: function(e) {
        return Re.TextDecoder && new Re.TextEncoder().encode(e).length || e.length;
      },
      TextEncoder: Re.TextEncoder,
      TextDecoder: Re.TextDecoder,
      getRandomArrayBuffer: async function(e) {
        const t = new Uint8Array(e);
        return Re.crypto.getRandomValues(t), t.buffer;
      },
      isWebworker: Rc(),
      push: {
        platform: "browser",
        formFactor: "desktop",
        storage: eo
      }
    };
    function Ac(e) {
      const t = [
        80015,
        80017,
        80030
      ];
      return e.code ? nt.isTokenErr(e) ? !1 : t.includes(e.code) ? !0 : e.code >= 4e4 && e.code < 5e4 : !1;
    }
    function Fr(e) {
      return Ac(e) ? [He({
        action: V.ERROR,
        error: e
      })] : [He({
        action: V.DISCONNECTED,
        error: e
      })];
    }
    var Sc = class extends un {
      constructor(e, t, n) {
        super(e, t, n, !0), this.onAuthUpdated = (r) => {
          this.authParams = { access_token: r.token };
        }, this.stream = "stream" in n ? n.stream : !0, this.sendRequest = null, this.recvRequest = null, this.pendingCallback = null, this.pendingItems = null;
      }
      connect() {
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.connect()", "starting"), un.prototype.connect.call(this);
        const e = this.params, t = e.options, n = e.host || t.primaryDomain, r = Q.getPort(t), o = t.tls ? "https://" : "http://";
        this.baseUri = o + On(n) + ":" + r + "/comet/";
        const c = this.baseUri + "connect";
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.connect()", "uri: " + c), Ge(this.auth.getAuthParams(), (u, d) => {
          if (u) {
            this.disconnect(u);
            return;
          }
          if (this.isDisposed) return;
          this.authParams = d;
          const b = this.params.getConnectParams(d);
          "stream" in b && (this.stream = b.stream), a.logAction(this.logger, a.LOG_MINOR, "CometTransport.connect()", "connectParams:" + yt(b));
          let w = !1;
          const O = this.recvRequest = this.createRequest(c, null, b, null, this.stream ? wt.REQ_RECV_STREAM : wt.REQ_RECV);
          O.on("data", (I) => {
            this.recvRequest && (w || (w = !0, this.emit("preconnect")), this.onData(I));
          }), O.on("complete", (I) => {
            if (this.recvRequest || (I = I || new _("Request cancelled", 80003, 400)), this.recvRequest = null, !w && !I && (w = !0, this.emit("preconnect")), this.onActivity(), I) {
              I.code ? this.onData(Fr(I)) : this.disconnect(I);
              return;
            }
            y.Config.nextTick(() => {
              this.recv();
            });
          }), O.exec();
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
          const n = this.createRequest(t, null, this.authParams, null, wt.REQ_SEND);
          n.on("complete", (r) => {
            r && (a.logAction(this.logger, a.LOG_ERROR, "CometTransport.request" + (e ? "Close()" : "Disconnect()"), "request returned err = " + pe(r)), this.finish("disconnected", r));
          }), n.exec();
        }
      }
      dispose() {
        a.logAction(this.logger, a.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = !0, this.recvRequest && (a.logAction(this.logger, a.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", Vt.disconnected()), y.Config.nextTick(() => {
          this.emit("disposed");
        }));
      }
      onConnect(e) {
        var t;
        if (this.isDisposed) return;
        const n = (t = e.connectionDetails) == null ? void 0 : t.connectionKey;
        un.prototype.onConnect.call(this, e);
        const r = this.baseUri + n;
        a.logAction(this.logger, a.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + r), this.sendUri = r + "/send", this.recvUri = r + "/recv", this.closeUri = r + "/close", this.disconnectUri = r + "/disconnect";
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
        const t = this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(e), wt.REQ_SEND);
        t.on("complete", (n, r) => {
          if (n && a.logAction(this.logger, a.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + pe(n)), this.sendRequest = null, n) {
            n.code ? this.onData(Fr(n)) : this.disconnect(n);
            return;
          }
          r && this.onData(r), this.pendingItems && y.Config.nextTick(() => {
            this.sendRequest || this.sendAnyPending();
          });
        }), t.exec();
      }
      recv() {
        if (this.recvRequest || !this.isConnected) return;
        const e = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? wt.REQ_RECV_STREAM : wt.REQ_RECV_POLL);
        e.on("data", (t) => {
          this.onData(t);
        }), e.on("complete", (t) => {
          if (this.recvRequest = null, this.onActivity(), t) {
            t.code ? this.onData(Fr(t)) : this.disconnect(t);
            return;
          }
          y.Config.nextTick(() => {
            this.recv();
          });
        }), e.exec();
      }
      onData(e) {
        try {
          const t = this.decodeResponse(e);
          if (t && t.length) for (let n = 0; n < t.length; n++) this.onProtocolMessage(Mr(t[n], this.connectionManager.realtime._RealtimePresence, this.connectionManager.realtime._Annotations, this.connectionManager.realtime._liveObjectsPlugin));
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
    }, kc = Sc;
    function Oc(e, t) {
      return Sn(tt(t)).includes("x-ably-errorcode");
    }
    function Mc(e, t) {
      if (Oc(e, t)) return e.error && _.fromWireValues(e.error);
    }
    var Tc = function() {
    }, Ic = 0, no = {};
    function Ec(e, t) {
      return e.getResponseHeader && e.getResponseHeader(t);
    }
    function Pc(e) {
      return e.getResponseHeader && (e.getResponseHeader("transfer-encoding") || !e.getResponseHeader("content-length"));
    }
    function xc(e) {
      const t = e.getAllResponseHeaders().trim().split(`\r
`), n = {};
      for (let r = 0; r < t.length; r++) {
        const o = t[r].split(":").map((c) => c.trim());
        n[o[0].toLowerCase()] = o[1];
      }
      return n;
    }
    var so = class No extends Oe {
      constructor(t, n, r, o, c, u, d, b) {
        super(d), r = r || {}, r.rnd = Bt(), this.uri = t + yt(r), this.headers = n || {}, this.body = o, this.method = b ? b.toUpperCase() : Se(o) ? "GET" : "POST", this.requestMode = c, this.timeouts = u, this.timedOut = !1, this.requestComplete = !1, this.id = String(++Ic), no[this.id] = this;
      }
      static createRequest(t, n, r, o, c, u, d, b) {
        const w = u || Q.TIMEOUTS;
        return new No(t, n, qe(r), o, c, w, d, b);
      }
      complete(t, n, r, o, c) {
        this.requestComplete || (this.requestComplete = !0, !t && n && this.emit("data", n), this.emit("complete", t, n, r, o, c), this.dispose());
      }
      abort() {
        this.dispose();
      }
      exec() {
        let t = this.headers;
        const n = this.requestMode == wt.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout, r = this.timer = setTimeout(() => {
          this.timedOut = !0, c.abort();
        }, n), o = this.method, c = this.xhr = new XMLHttpRequest(), u = t.accept;
        let d = this.body, b = "text";
        u ? u.indexOf("application/x-msgpack") === 0 && (b = "arraybuffer") : t.accept = "application/json", d && (t["content-type"] || (t["content-type"] = "application/json")).indexOf("application/json") > -1 && typeof d != "string" && (d = JSON.stringify(d)), c.open(o, this.uri, !0), c.responseType = b, "authorization" in t && (c.withCredentials = !0);
        for (const oe in t) c.setRequestHeader(oe, t[oe]);
        const w = (oe, Ve, Ue, Et) => {
          var lo;
          let Kr = Ve + " (event type: " + oe.type + ")";
          (lo = this == null ? void 0 : this.xhr) != null && lo.statusText && (Kr += ", current statusText is " + this.xhr.statusText), a.logAction(this.logger, a.LOG_ERROR, "Request.on" + oe.type + "()", Kr), this.complete(new U(Kr, Ue, Et));
        };
        c.onerror = (oe) => {
          w(oe, "XHR error occurred", null, 400);
        }, c.onabort = (oe) => {
          this.timedOut ? w(oe, "Request aborted due to request timeout expiring", null, 408) : w(oe, "Request cancelled", null, 400);
        }, c.ontimeout = (oe) => {
          w(oe, "Request timed out", null, 408);
        };
        let O, I, N, k = 0, H = !1;
        const q = () => {
          if (clearTimeout(r), N = I < 400, I == 204) {
            this.complete(null, null, null, null, I);
            return;
          }
          O = this.requestMode == wt.REQ_RECV_STREAM && N && Pc(c);
        }, ee = () => {
          let oe;
          try {
            const Ue = Ec(c, "content-type");
            if (Ue ? Ue.indexOf("application/json") >= 0 : c.responseType == "text") {
              const Et = c.responseType === "arraybuffer" ? y.BufferUtils.utf8Decode(c.response) : String(c.responseText);
              Et.length ? oe = JSON.parse(Et) : oe = Et, H = !0;
            } else oe = c.response;
            oe.response !== void 0 ? (I = oe.statusCode, N = I < 400, t = oe.headers, oe = oe.response) : t = xc(c);
          } catch (Ue) {
            this.complete(new U("Malformed response body from server: " + Ue.message, null, 400));
            return;
          }
          if (N || Array.isArray(oe)) {
            this.complete(null, oe, t, H, I);
            return;
          }
          let Ve = Mc(oe, t);
          Ve || (Ve = new U("Error response received from server: " + I + " body was: " + y.Config.inspect(oe), null, I)), this.complete(Ve, oe, t, H, I);
        };
        function ge() {
          const oe = c.responseText, Ve = oe.length - 1;
          let Ue, Et;
          for (; k < Ve && (Ue = oe.indexOf(`
`, k)) > -1; )
            Et = oe.slice(k, Ue), k = Ue + 1, me(Et);
        }
        const me = (oe) => {
          try {
            oe = JSON.parse(oe);
          } catch (Ve) {
            this.complete(new U("Malformed response body from server: " + Ve.message, null, 400));
            return;
          }
          this.emit("data", oe);
        }, be = () => {
          ge(), this.streamComplete = !0, y.Config.nextTick(() => {
            this.complete();
          });
        };
        c.onreadystatechange = () => {
          const oe = c.readyState;
          oe < 3 || c.status !== 0 && (I === void 0 && (I = c.status, q()), oe == 3 && O ? ge() : oe == 4 && (O ? be() : ee()));
        }, c.send(d);
      }
      dispose() {
        const t = this.xhr;
        if (t) {
          t.onreadystatechange = t.onerror = t.onabort = t.ontimeout = Tc, this.xhr = null;
          const n = this.timer;
          n && (clearTimeout(n), this.timer = null), this.requestComplete || t.abort();
        }
        delete no[this.id];
      }
    }, ro = Fe.XhrPolling, Nc = class extends kc {
      constructor(e, t, n) {
        super(e, t, n), this.shortName = ro, n.stream = !1, this.shortName = ro;
      }
      static isAvailable() {
        return !!(y.Config.xhrSupported && y.Config.allowComet);
      }
      toString() {
        return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected;
      }
      createRequest(e, t, n, r, o) {
        return so.createRequest(e, t, n, r, o, this.timeouts, this.logger);
      }
    }, Lc = {
      order: ["xhr_polling"],
      bundledImplementations: {
        web_socket: zi,
        xhr_polling: Nc
      }
    }, Dc = {
      connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
      wsConnectivityCheckUrl: "wss://ws-up.ably-realtime.com",
      defaultTransports: [Fe.XhrPolling, Fe.WebSocket]
    };
    function Uc(e) {
      if (e === void 0) return "undefined";
      let t, n;
      if (e instanceof ArrayBuffer ? (n = "ArrayBuffer", t = new DataView(e)) : e instanceof DataView && (n = "DataView", t = e), !t) return JSON.stringify(e);
      const r = [];
      for (let o = 0; o < e.byteLength; o++) {
        if (o > 20) {
          r.push("...");
          break;
        }
        let c = t.getUint8(o).toString(16);
        c.length === 1 && (c = "0" + c), r.push(c);
      }
      return "<" + n + " " + r.join(" ") + ">";
    }
    function zn(e, t, n) {
      const r = new TextEncoder().encode(n);
      for (let o = 0; o < r.length; o++) e.setUint8(t + o, r[o]);
    }
    function io(e, t, n) {
      return new TextDecoder().decode(e.buffer.slice(t, t + n));
    }
    function zr(e) {
      return new TextEncoder().encode(e).length;
    }
    function jc(e, t) {
      const n = $n(e, t);
      if (n === 0) return;
      const r = new ArrayBuffer(n);
      return Vn(e, new DataView(r), 0, t), r;
    }
    var Vr = 4294967296, oo = 1 / Vr;
    function Bc(e, t) {
      return t = t || 0, e.getInt32(t) * Vr + e.getUint32(t + 4);
    }
    function qc(e, t) {
      return t = t || 0, e.getUint32(t) * Vr + e.getUint32(t + 4);
    }
    function Gc(e, t, n) {
      n < 9223372036854776e3 ? (e.setInt32(t, Math.floor(n * oo)), e.setInt32(t + 4, n & -1)) : (e.setUint32(t, 2147483647), e.setUint32(t + 4, 2147483647));
    }
    function Hc(e, t, n) {
      n < 18446744073709552e3 ? (e.setUint32(t, Math.floor(n * oo)), e.setInt32(t + 4, n & -1)) : (e.setUint32(t, 4294967295), e.setUint32(t + 4, 4294967295));
    }
    var Wc = class {
      constructor(e, t) {
        this.map = (n) => {
          const r = {};
          for (let o = 0; o < n; o++) {
            const c = this.parse();
            r[c] = this.parse();
          }
          return r;
        }, this.bin = (n) => {
          const r = new ArrayBuffer(n);
          return new Uint8Array(r).set(new Uint8Array(this.view.buffer, this.offset, n), 0), this.offset += n, r;
        }, this.buf = this.bin, this.str = (n) => {
          const r = io(this.view, this.offset, n);
          return this.offset += n, r;
        }, this.array = (n) => {
          const r = new Array(n);
          for (let o = 0; o < n; o++) r[o] = this.parse();
          return r;
        }, this.ext = (n) => (this.offset += n, {
          type: this.view.getInt8(this.offset),
          data: this.buf(n)
        }), this.parse = () => {
          const n = this.view.getUint8(this.offset);
          let r, o;
          if ((n & 128) === 0)
            return this.offset++, n;
          if ((n & 240) === 128)
            return o = n & 15, this.offset++, this.map(o);
          if ((n & 240) === 144)
            return o = n & 15, this.offset++, this.array(o);
          if ((n & 224) === 160)
            return o = n & 31, this.offset++, this.str(o);
          if ((n & 224) === 224)
            return r = this.view.getInt8(this.offset), this.offset++, r;
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
              return o = this.view.getUint8(this.offset + 1), this.offset += 2, this.bin(o);
            case 197:
              return o = this.view.getUint16(this.offset + 1), this.offset += 3, this.bin(o);
            case 198:
              return o = this.view.getUint32(this.offset + 1), this.offset += 5, this.bin(o);
            case 199:
              return o = this.view.getUint8(this.offset + 1), this.offset += 2, this.ext(o);
            case 200:
              return o = this.view.getUint16(this.offset + 1), this.offset += 3, this.ext(o);
            case 201:
              return o = this.view.getUint32(this.offset + 1), this.offset += 5, this.ext(o);
            case 202:
              return r = this.view.getFloat32(this.offset + 1), this.offset += 5, r;
            case 203:
              return r = this.view.getFloat64(this.offset + 1), this.offset += 9, r;
            case 204:
              return r = this.view.getUint8(this.offset + 1), this.offset += 2, r;
            case 205:
              return r = this.view.getUint16(this.offset + 1), this.offset += 3, r;
            case 206:
              return r = this.view.getUint32(this.offset + 1), this.offset += 5, r;
            case 207:
              return r = qc(this.view, this.offset + 1), this.offset += 9, r;
            case 208:
              return r = this.view.getInt8(this.offset + 1), this.offset += 2, r;
            case 209:
              return r = this.view.getInt16(this.offset + 1), this.offset += 3, r;
            case 210:
              return r = this.view.getInt32(this.offset + 1), this.offset += 5, r;
            case 211:
              return r = Bc(this.view, this.offset + 1), this.offset += 9, r;
            case 212:
              return o = 1, this.offset++, this.ext(o);
            case 213:
              return o = 2, this.offset++, this.ext(o);
            case 214:
              return o = 4, this.offset++, this.ext(o);
            case 215:
              return o = 8, this.offset++, this.ext(o);
            case 216:
              return o = 16, this.offset++, this.ext(o);
            case 217:
              return o = this.view.getUint8(this.offset + 1), this.offset += 2, this.str(o);
            case 218:
              return o = this.view.getUint16(this.offset + 1), this.offset += 3, this.str(o);
            case 219:
              return o = this.view.getUint32(this.offset + 1), this.offset += 5, this.str(o);
            case 220:
              return o = this.view.getUint16(this.offset + 1), this.offset += 3, this.array(o);
            case 221:
              return o = this.view.getUint32(this.offset + 1), this.offset += 5, this.array(o);
            case 222:
              return o = this.view.getUint16(this.offset + 1), this.offset += 3, this.map(o);
            case 223:
              return o = this.view.getUint32(this.offset + 1), this.offset += 5, this.map(o);
          }
          throw new Error("Unknown type 0x" + n.toString(16));
        }, this.offset = t || 0, this.view = e;
      }
    };
    function Fc(e) {
      const t = new Wc(new DataView(e)), n = t.parse();
      if (t.offset !== e.byteLength) throw new Error(e.byteLength - t.offset + " trailing bytes");
      return n;
    }
    function ao(e, t) {
      return Object.keys(e).filter(function(n) {
        const r = e[n];
        return (!t || r != null) && (typeof r != "function" || !!r.toJSON);
      });
    }
    function Vn(e, t, n, r) {
      const o = typeof e;
      if (typeof e == "string") {
        const c = zr(e);
        if (c < 32)
          return t.setUint8(n, c | 160), zn(t, n + 1, e), 1 + c;
        if (c < 256)
          return t.setUint8(n, 217), t.setUint8(n + 1, c), zn(t, n + 2, e), 2 + c;
        if (c < 65536)
          return t.setUint8(n, 218), t.setUint16(n + 1, c), zn(t, n + 3, e), 3 + c;
        if (c < 4294967296)
          return t.setUint8(n, 219), t.setUint32(n + 1, c), zn(t, n + 5, e), 5 + c;
      }
      if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
        const c = e.byteLength;
        if (c < 256)
          return t.setUint8(n, 196), t.setUint8(n + 1, c), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 2), 2 + c;
        if (c < 65536)
          return t.setUint8(n, 197), t.setUint16(n + 1, c), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 3), 3 + c;
        if (c < 4294967296)
          return t.setUint8(n, 198), t.setUint32(n + 1, c), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 5), 5 + c;
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
            return t.setUint8(n, 207), Hc(t, n + 1, e), 9;
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
          return t.setUint8(n, 211), Gc(t, n + 1, e), 9;
        throw new Error("Number too small -0x" + (-e).toString(16).substr(1));
      }
      if (o === "undefined")
        return r ? 0 : (t.setUint8(n, 212), t.setUint8(n + 1, 0), t.setUint8(n + 2, 0), 3);
      if (e === null)
        return r ? 0 : (t.setUint8(n, 192), 1);
      if (o === "boolean")
        return t.setUint8(n, e ? 195 : 194), 1;
      if (typeof e.toJSON == "function") return Vn(e.toJSON(), t, n, r);
      if (o === "object") {
        let c, u = 0, d;
        const b = Array.isArray(e);
        if (b ? c = e.length : (d = ao(e, r), c = d.length), c < 16 ? (t.setUint8(n, c | (b ? 144 : 128)), u = 1) : c < 65536 ? (t.setUint8(n, b ? 220 : 222), t.setUint16(n + 1, c), u = 3) : c < 4294967296 && (t.setUint8(n, b ? 221 : 223), t.setUint32(n + 1, c), u = 5), b) for (let w = 0; w < c; w++) u += Vn(e[w], t, n + u, r);
        else if (d) for (let w = 0; w < c; w++) {
          const O = d[w];
          u += Vn(O, t, n + u), u += Vn(e[O], t, n + u, r);
        }
        return u;
      }
      if (o === "function") return 0;
      throw new Error("Unknown type " + o);
    }
    function $n(e, t) {
      const n = typeof e;
      if (n === "string") {
        const r = zr(e);
        if (r < 32) return 1 + r;
        if (r < 256) return 2 + r;
        if (r < 65536) return 3 + r;
        if (r < 4294967296) return 5 + r;
      }
      if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
        const r = e.byteLength;
        if (r < 256) return 2 + r;
        if (r < 65536) return 3 + r;
        if (r < 4294967296) return 5 + r;
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
      if (typeof e.toJSON == "function") return $n(e.toJSON(), t);
      if (n === "object") {
        let r, o = 0;
        if (Array.isArray(e)) {
          r = e.length;
          for (let c = 0; c < r; c++) o += $n(e[c], t);
        } else {
          const c = ao(e, t);
          r = c.length;
          for (let u = 0; u < r; u++) {
            const d = c[u];
            o += $n(d) + $n(e[d], t);
          }
        }
        if (r < 16) return 1 + o;
        if (r < 65536) return 3 + o;
        if (r < 4294967296) return 5 + o;
        throw new Error("Array or object too long 0x" + r.toString(16));
      }
      if (n === "function") return 0;
      throw new Error("Unknown type " + n);
    }
    var $r = {
      encode: jc,
      decode: Fc,
      inspect: Uc,
      utf8Write: zn,
      utf8Read: io,
      utf8ByteCount: zr
    };
    function zc(e, t) {
      return !!t.get("x-ably-errorcode");
    }
    function Vc(e, t) {
      if (zc(e, t)) return e.error && _.fromWireValues(e.error);
    }
    function $c(e) {
      const t = {};
      return e.forEach((n, r) => {
        t[r] = n;
      }), t;
    }
    async function Kc(e, t, n, r, o, c) {
      const u = new Headers(r || {}), d = e ? e.toUpperCase() : Se(c) ? "GET" : "POST", b = new AbortController();
      let w;
      const O = new Promise((k) => {
        w = setTimeout(() => {
          b.abort(), k({ error: new U("Request timed out", null, 408) });
        }, t ? t.options.timeouts.httpRequestTimeout : Q.TIMEOUTS.httpRequestTimeout);
      }), I = {
        method: d,
        headers: u,
        body: c,
        signal: b.signal
      };
      y.Config.isWebworker || (I.credentials = u.has("authorization") ? "include" : "same-origin");
      const N = (async () => {
        try {
          const k = new URLSearchParams(o || {});
          k.set("rnd", Bt());
          const H = n + "?" + k, q = await Gt().fetch(H, I);
          if (clearTimeout(w), q.status == 204) return {
            error: null,
            statusCode: q.status
          };
          const ee = q.headers.get("Content-Type");
          let ge;
          ee && ee.indexOf("application/x-msgpack") > -1 ? ge = await q.arrayBuffer() : ee && ee.indexOf("application/json") > -1 ? ge = await q.json() : ge = await q.text();
          const me = !!ee && ee.indexOf("application/x-msgpack") === -1, be = $c(q.headers);
          return q.ok ? {
            error: null,
            body: ge,
            headers: be,
            unpacked: me,
            statusCode: q.status
          } : {
            error: Vc(ge, q.headers) || new U("Error response received from server: " + q.status + " body was: " + y.Config.inspect(ge), null, q.status),
            body: ge,
            headers: be,
            unpacked: me,
            statusCode: q.status
          };
        } catch (k) {
          return clearTimeout(w), { error: k };
        }
      })();
      return Promise.race([O, N]);
    }
    var Jc = {
      XHRRequest: so,
      FetchRequest: Kc
    }, co = vc(to, Ji);
    y.Crypto = co, y.BufferUtils = Ji, y.Http = Zi, y.Config = to, y.Transports = Lc, y.WebStorage = eo;
    for (const e of [xr, Br])
      e.Crypto = co, e._MsgPack = $r;
    Zi.bundledRequestImplementations = Jc, a.initLogHandlers(), y.Defaults = mr(Dc), y.Config.agent && (y.Defaults.agent += " " + y.Config.agent);
    var Qc = {
      ErrorInfo: _,
      Rest: xr,
      Realtime: Br,
      msgpack: $r,
      makeProtocolMessageFromDeserialized: ji
    };
    if (typeof h.exports == "object" && typeof l == "object") {
      var Xc = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function")
          for (let o of Object.getOwnPropertyNames(t)) !Object.prototype.hasOwnProperty.call(e, o) && o !== n && Object.defineProperty(e, o, {
            get: () => t[o],
            enumerable: !(r = Object.getOwnPropertyDescriptor(t, o)) || r.enumerable
          });
        return e;
      };
      h.exports = Xc(h.exports, l);
    }
    return h.exports;
  });
})), re = /* @__PURE__ */ ol(al(), 1), he = /* @__PURE__ */ ((s) => (s[s.BadRequest = 4e4] = "BadRequest", s[s.InvalidArgument = 40003] = "InvalidArgument", s[s.InvalidClientId = 40012] = "InvalidClientId", s[s.ResourceDisposed = 40014] = "ResourceDisposed", s[s.MessageRejectedByBeforePublishRule = 42211] = "MessageRejectedByBeforePublishRule", s[s.MessageRejectedByModeration = 42213] = "MessageRejectedByModeration", s[s.Disconnected = 80003] = "Disconnected", s[s.PresenceAutoReentryFailed = 91004] = "PresenceAutoReentryFailed", s[s.RoomDiscontinuity = 102100] = "RoomDiscontinuity", s[s.RoomInInvalidState = 102112] = "RoomInInvalidState", s[s.RoomReleasedBeforeOperationCompleted = 102106] = "RoomReleasedBeforeOperationCompleted", s[s.RoomExistsWithDifferentOptions = 102107] = "RoomExistsWithDifferentOptions", s[s.FeatureNotEnabledInRoom = 102108] = "FeatureNotEnabledInRoom", s[s.ListenerNotSubscribed = 102109] = "ListenerNotSubscribed", s[s.ChannelSerialNotDefined = 102110] = "ChannelSerialNotDefined", s[s.ChannelOptionsCannotBeModified = 102111] = "ChannelOptionsCannotBeModified", s[s.OperationSerializationFailed = 102113] = "OperationSerializationFailed", s[s.ReactHookMustBeUsedWithinProvider = 102200] = "ReactHookMustBeUsedWithinProvider", s[s.ReactComponentUnmounted = 102201] = "ReactComponentUnmounted", s[s.PresenceFetchFailed = 102202] = "PresenceFetchFailed", s))(he || {}), cl = class {
  constructor(s, i) {
    this._realtime = s, this._logger = i;
  }
  get() {
    const s = this._realtime.auth.clientId;
    if (!s) throw this._logger.error("unable to get client id; client id is not set", { clientId: s }), new re.ErrorInfo("unable to get client id; client id is not set", he.InvalidClientId, 400);
    return s;
  }
}, Lo = /* @__PURE__ */ ((s) => (s.Trace = "trace", s.Debug = "debug", s.Info = "info", s.Warn = "warn", s.Error = "error", s.Silent = "silent", s))(Lo || {}), ll = (s, i, l) => {
  const h = l ? `, context: ${JSON.stringify(l)}` : "", f = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${i.valueOf().toUpperCase()} ably-chat: ${s}${h}`;
  switch (i) {
    case "trace":
    case "debug":
      console.log(f);
      break;
    case "info":
      console.info(f);
      break;
    case "warn":
      console.warn(f);
      break;
    case "error":
      console.error(f);
  }
}, hl = (s) => {
  const i = s.logHandler ?? ll;
  return new ul(i, s.logLevel);
}, ho = /* @__PURE__ */ new Map([
  ["trace", 0],
  ["debug", 1],
  ["info", 2],
  ["warn", 3],
  ["error", 4],
  ["silent", 5]
]), ul = class Do {
  constructor(i, l, h) {
    this._handler = i, this._context = h;
    const f = ho.get(l);
    if (f === void 0) throw new re.ErrorInfo(`unable to create logger; invalid log level: ${l}`, he.InvalidArgument, 400);
    this._levelNumber = f;
  }
  trace(i, l) {
    this._write(i, "trace", 0, l);
  }
  debug(i, l) {
    this._write(i, "debug", 1, l);
  }
  info(i, l) {
    this._write(i, "info", 2, l);
  }
  warn(i, l) {
    this._write(i, "warn", 3, l);
  }
  error(i, l) {
    this._write(i, "error", 4, l);
  }
  withContext(i) {
    const l = [...ho.entries()].find(([, h]) => h === this._levelNumber)?.[0] ?? "error";
    return new Do(this._handler, l, this._mergeContext(i));
  }
  _write(i, l, h, f) {
    h >= this._levelNumber && this._handler(i, l, this._mergeContext(f));
  }
  _mergeContext(i) {
    return this._context ? i ? {
      ...this._context,
      ...i
    } : this._context : i ?? void 0;
  }
}, uo = {
  logLevel: Lo.Error,
  idempotentRestPublishing: !1
}, dl = (s) => (s = s ?? {}, {
  ...s,
  logLevel: s.logLevel ?? uo.logLevel,
  idempotentRestPublishing: s.idempotentRestPublishing ?? uo.idempotentRestPublishing
});
function xt(s, i, l) {
  if ((Array.isArray(i) || typeof i == "string") && l) return s.on(i, l), () => {
    s.off(l);
  };
  if (typeof i == "function") return s.on(i), () => {
    s.off(i);
  };
  throw new TypeError("Invalid arguments passed to on()");
}
function gl(s, i, l) {
  if (l) return s.once(i, l), () => {
    s.off(l);
  };
  throw new TypeError("Invalid arguments passed to once()");
}
function Jt(s, i, l) {
  if ((Array.isArray(i) || typeof i == "string") && l) {
    const h = s.subscribe(i, l);
    return () => {
      h.then(() => {
        s.unsubscribe(l);
      }).catch((f) => {
        console.error("Error subscribing to events:", f);
      });
    };
  } else if (typeof i == "function") {
    const h = s.subscribe(i);
    return () => {
      h.then(() => {
        s.unsubscribe(i);
      }).catch((f) => {
        console.error("Error subscribing to events:", f);
      });
    };
  } else throw new TypeError("Invalid arguments passed to subscribe()");
}
var fl = re.Realtime.EventEmitter, pt = class extends fl {
}, ut = (s) => (...i) => s(...i), Nt = (s) => {
  const i = s, l = Object.values(i.events).flat().length + i.any.length + Object.values(i.eventsOnce).flat().length + i.anyOnce.length;
  return l ? l > 0 : !1;
}, pl = class {
  constructor(s, i) {
    this._status = "initialized", this._emitter = new pt(), this._logger = i, this._status = this._mapAblyStatusToChat(s.connection.state), this._error = s.connection.errorReason;
    const l = (h) => {
      const f = this._mapAblyStatusToChat(h.current);
      if (f === this._status) return;
      const m = {
        current: f,
        previous: this._status,
        error: h.reason,
        retryIn: h.retryIn
      };
      this._applyStatusChange(m);
    };
    this._clearAblyConnectionListener = xt(s.connection, l);
  }
  get status() {
    return this._status;
  }
  get error() {
    return this._error;
  }
  onStatusChange(s) {
    const i = ut(s);
    return this._emitter.on(i), { off: () => {
      this._emitter.off(i);
    } };
  }
  dispose() {
    this._logger.trace("DefaultConnection.dispose();"), this._clearAblyConnectionListener(), this._emitter.off();
  }
  hasListeners() {
    return Nt(this._emitter);
  }
  _applyStatusChange(s) {
    this._status = s.current, this._error = s.error, this._logger.info("Connection state changed", s), this._emitter.emit(s.current, s);
  }
  _mapAblyStatusToChat(s) {
    switch (s) {
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
        return this._logger.error("DefaultConnection._mapAblyStatusToChat(); unknown connection state", { status: s }), "failed";
    }
  }
}, Uo = () => Math.random().toString(36).slice(2), ml = 9, yl = () => {
  const s = new Uint8Array(ml);
  crypto.getRandomValues(s);
  const i = s.toBase64;
  if (typeof i == "function") return i.call(s);
  let l = "";
  for (const h of s) l += String.fromCodePoint(h);
  return btoa(l);
}, go = Object.prototype.hasOwnProperty;
function fo(s, i, l) {
  for (l of s.keys()) if (es(l, i)) return l;
}
function es(s, i) {
  var l, h, f;
  if (s === i) return !0;
  if (s && i && (l = s.constructor) === i.constructor) {
    if (l === Date) return s.getTime() === i.getTime();
    if (l === RegExp) return s.toString() === i.toString();
    if (l === Array) {
      if ((h = s.length) === i.length) for (; h-- && es(s[h], i[h]); ) ;
      return h === -1;
    }
    if (l === Set) {
      if (s.size !== i.size) return !1;
      for (h of s) if (f = h, f && typeof f == "object" && (f = fo(i, f), !f) || !i.has(f)) return !1;
      return !0;
    }
    if (l === Map) {
      if (s.size !== i.size) return !1;
      for (h of s) if (f = h[0], f && typeof f == "object" && (f = fo(i, f), !f) || !es(h[1], i.get(f))) return !1;
      return !0;
    }
    if (l === ArrayBuffer) s = new Uint8Array(s), i = new Uint8Array(i);
    else if (l === DataView) {
      if ((h = s.byteLength) === i.byteLength) for (; h-- && s.getInt8(h) === i.getInt8(h); ) ;
      return h === -1;
    }
    if (ArrayBuffer.isView(s)) {
      if ((h = s.byteLength) === i.byteLength) for (; h-- && s[h] === i[h]; ) ;
      return h === -1;
    }
    if (!l || typeof s == "object") {
      h = 0;
      for (l in s) if (go.call(s, l) && ++h && !go.call(i, l) || !(l in i) || !es(s[l], i[l])) return !1;
      return Object.keys(i).length === h;
    }
  }
  return s !== s && i !== i;
}
var ht = /* @__PURE__ */ ((s) => (s.Created = "message.created", s.Updated = "message.updated", s.Deleted = "message.deleted", s))(ht || {}), jo = /* @__PURE__ */ ((s) => (s.ChatMessage = "chat.message", s))(jo || {}), Bo = /* @__PURE__ */ ((s) => (s.Occupancy = "[meta]occupancy", s))(Bo || {}), je = /* @__PURE__ */ ((s) => (s.MessageCreate = "message.create", s.MessageUpdate = "message.update", s.MessageDelete = "message.delete", s))(je || {}), at = /* @__PURE__ */ ((s) => (s.Started = "typing.started", s.Stopped = "typing.stopped", s))(at || {}), $t = /* @__PURE__ */ ((s) => (s.SetChanged = "typing.set.changed", s))($t || {}), ii = /* @__PURE__ */ ((s) => (s.Reaction = "roomReaction", s))(ii || {}), oi = /* @__PURE__ */ ((s) => (s.Reaction = "reaction", s))(oi || {}), Ct = /* @__PURE__ */ ((s) => (s.Unique = "unique", s.Distinct = "distinct", s.Multiple = "multiple", s))(Ct || {}), Qs = /* @__PURE__ */ ((s) => (s.Unique = "reaction:unique.v1", s.Distinct = "reaction:distinct.v1", s.Multiple = "reaction:multiple.v1", s))(Qs || {}), bl = {
  "reaction:unique.v1": "unique",
  "reaction:distinct.v1": "distinct",
  "reaction:multiple.v1": "multiple"
}, yn = /* @__PURE__ */ ((s) => (s.Create = "reaction.create", s.Delete = "reaction.delete", s))(yn || {}), ts = /* @__PURE__ */ ((s) => (s.Summary = "reaction.summary", s))(ts || {}), ai = /* @__PURE__ */ ((s) => (s.Updated = "occupancy.updated", s))(ai || {}), Yn = /* @__PURE__ */ ((s) => (s.Discontinuity = "room.discontinuity", s))(Yn || {}), Fs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vl(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Xs = { exports: {} };
Xs.exports;
var po;
function _l() {
  return po || (po = 1, (function(s, i) {
    var l = "__lodash_hash_undefined__", h = 9007199254740991, f = "[object Arguments]", m = "[object Array]", g = "[object Boolean]", v = "[object Date]", C = "[object Error]", T = "[object Function]", A = "[object GeneratorFunction]", M = "[object Map]", L = "[object Number]", E = "[object Object]", j = "[object Promise]", te = "[object RegExp]", B = "[object Set]", X = "[object String]", Z = "[object Symbol]", ne = "[object WeakMap]", J = "[object ArrayBuffer]", D = "[object DataView]", y = "[object Float32Array]", ue = "[object Float64Array]", $ = "[object Int8Array]", le = "[object Int16Array]", W = "[object Int32Array]", z = "[object Uint8Array]", a = "[object Uint8ClampedArray]", ce = "[object Uint16Array]", F = "[object Uint32Array]", se = /[\\^$.*+?()[\]{}|]/g, _ = /\w*$/, U = /^\[object .+?Constructor\]$/, fe = /^(?:0|[1-9]\d*)$/, x = {};
    x[f] = x[m] = x[J] = x[D] = x[g] = x[v] = x[y] = x[ue] = x[$] = x[le] = x[W] = x[M] = x[L] = x[E] = x[te] = x[B] = x[X] = x[Z] = x[z] = x[a] = x[ce] = x[F] = !0, x[C] = x[T] = x[ne] = !1;
    var qe = typeof Fs == "object" && Fs && Fs.Object === Object && Fs, Ke = typeof self == "object" && self && self.Object === Object && self, Me = qe || Ke || Function("return this")(), Rt = i && !i.nodeType && i, Se = Rt && s && !s.nodeType && s, de = Se && Se.exports === Rt;
    function _e(p, R) {
      return p.set(R[0], R[1]), p;
    }
    function Ze(p, R) {
      return p.add(R), p;
    }
    function ze(p, R) {
      for (var P = -1, K = p ? p.length : 0; ++P < K && R(p[P], P, p) !== !1; ) ;
      return p;
    }
    function et(p, R) {
      for (var P = -1, K = R.length, Ce = p.length; ++P < K; ) p[Ce + P] = R[P];
      return p;
    }
    function Je(p, R, P, K) {
      for (var Ce = -1, Ne = p ? p.length : 0; ++Ce < Ne; ) P = R(P, p[Ce], Ce, p);
      return P;
    }
    function Lt(p, R) {
      for (var P = -1, K = Array(p); ++P < p; ) K[P] = R(P);
      return K;
    }
    function Dt(p, R) {
      return p?.[R];
    }
    function Ut(p) {
      var R = !1;
      if (p != null && typeof p.toString != "function") try {
        R = !!(p + "");
      } catch {
      }
      return R;
    }
    function tt(p) {
      var R = -1, P = Array(p.size);
      return p.forEach(function(K, Ce) {
        P[++R] = [Ce, K];
      }), P;
    }
    function mt(p, R) {
      return function(P) {
        return p(R(P));
      };
    }
    function Cn(p) {
      var R = -1, P = Array(p.size);
      return p.forEach(function(K) {
        P[++R] = K;
      }), P;
    }
    var or = Array.prototype, cs = Function.prototype, At = Object.prototype, yt = Me["__core-js_shared__"], Xt = (function() {
      var p = /[^.]+$/.exec(yt && yt.keys && yt.keys.IE_PROTO || "");
      return p ? "Symbol(src)_1." + p : "";
    })(), jt = cs.toString, Qe = At.hasOwnProperty, Ie = At.toString, pe = RegExp("^" + jt.call(Qe).replace(se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Rn = de ? Me.Buffer : void 0, An = Me.Symbol, Bt = Me.Uint8Array, ls = mt(Object.getPrototypeOf, Object), hs = Object.create, Ge = At.propertyIsEnumerable, ke = or.splice, Le = Object.getOwnPropertySymbols, Sn = Rn ? Rn.isBuffer : void 0, us = mt(Object.keys, Object), Yt = Mt(Me, "DataView"), St = Mt(Me, "Map"), qt = Mt(Me, "Promise"), Gt = Mt(Me, "Set"), Zt = Mt(Me, "WeakMap"), kt = Mt(Object, "create"), en = vt(Yt), ds = vt(St), Ht = vt(qt), Te = vt(Gt), gs = vt(Zt), fs = An ? An.prototype : void 0, kn = fs ? fs.valueOf : void 0;
    function Ee(p) {
      var R = -1, P = p ? p.length : 0;
      for (this.clear(); ++R < P; ) {
        var K = p[R];
        this.set(K[0], K[1]);
      }
    }
    function ar() {
      this.__data__ = kt ? kt(null) : {};
    }
    function cr(p) {
      return this.has(p) && delete this.__data__[p];
    }
    function On(p) {
      var R = this.__data__;
      if (kt) {
        var P = R[p];
        return P === l ? void 0 : P;
      }
      return Qe.call(R, p) ? R[p] : void 0;
    }
    function ps(p) {
      var R = this.__data__;
      return kt ? R[p] !== void 0 : Qe.call(R, p);
    }
    function ms(p, R) {
      var P = this.__data__;
      return P[p] = kt && R === void 0 ? l : R, this;
    }
    Ee.prototype.clear = ar, Ee.prototype.delete = cr, Ee.prototype.get = On, Ee.prototype.has = ps, Ee.prototype.set = ms;
    function Xe(p) {
      var R = -1, P = p ? p.length : 0;
      for (this.clear(); ++R < P; ) {
        var K = p[R];
        this.set(K[0], K[1]);
      }
    }
    function ys() {
      this.__data__ = [];
    }
    function bs(p) {
      var R = this.__data__, P = Wt(R, p);
      return P < 0 ? !1 : (P == R.length - 1 ? R.pop() : ke.call(R, P, 1), !0);
    }
    function lr(p) {
      var R = this.__data__, P = Wt(R, p);
      return P < 0 ? void 0 : R[P][1];
    }
    function vs(p) {
      return Wt(this.__data__, p) > -1;
    }
    function hr(p, R) {
      var P = this.__data__, K = Wt(P, p);
      return K < 0 ? P.push([p, R]) : P[K][1] = R, this;
    }
    Xe.prototype.clear = ys, Xe.prototype.delete = bs, Xe.prototype.get = lr, Xe.prototype.has = vs, Xe.prototype.set = hr;
    function dt(p) {
      var R = -1, P = p ? p.length : 0;
      for (this.clear(); ++R < P; ) {
        var K = p[R];
        this.set(K[0], K[1]);
      }
    }
    function ur() {
      this.__data__ = {
        hash: new Ee(),
        map: new (St || Xe)(),
        string: new Ee()
      };
    }
    function dr(p) {
      return st(this, p).delete(p);
    }
    function gr(p) {
      return st(this, p).get(p);
    }
    function tn(p) {
      return st(this, p).has(p);
    }
    function _s(p, R) {
      return st(this, p).set(p, R), this;
    }
    dt.prototype.clear = ur, dt.prototype.delete = dr, dt.prototype.get = gr, dt.prototype.has = tn, dt.prototype.set = _s;
    function bt(p) {
      this.__data__ = new Xe(p);
    }
    function fr() {
      this.__data__ = new Xe();
    }
    function pr(p) {
      return this.__data__.delete(p);
    }
    function Q(p) {
      return this.__data__.get(p);
    }
    function mr(p) {
      return this.__data__.has(p);
    }
    function ws(p, R) {
      var P = this.__data__;
      if (P instanceof Xe) {
        var K = P.__data__;
        if (!St || K.length < 199) return K.push([p, R]), this;
        P = this.__data__ = new dt(K);
      }
      return P.set(p, R), this;
    }
    bt.prototype.clear = fr, bt.prototype.delete = pr, bt.prototype.get = Q, bt.prototype.has = mr, bt.prototype.set = ws;
    function Cs(p, R) {
      var P = nn(p) || Or(p) ? Lt(p.length, String) : [], K = P.length, Ce = !!K;
      for (var Ne in p) Qe.call(p, Ne) && (!Ce || Ne != "length" && !Oe(Ne, K)) && P.push(Ne);
      return P;
    }
    function we(p, R, P) {
      var K = p[R];
      (!(Qe.call(p, R) && Es(K, P)) || P === void 0 && !(R in p)) && (p[R] = P);
    }
    function Wt(p, R) {
      for (var P = p.length; P--; ) if (Es(p[P][0], R)) return P;
      return -1;
    }
    function yr(p, R) {
      return p && Ms(R, sn(R), p);
    }
    function Ot(p, R, P, K, Ce, Ne, it) {
      var De;
      if (K && (De = Ne ? K(p, Ce, Ne, it) : K(p)), De !== void 0) return De;
      if (!Ft(p)) return p;
      var ye = nn(p);
      if (ye) {
        if (De = Sr(p), !R) return Ar(p, De);
      } else {
        var Tt = rt(p), Ns = Tt == T || Tt == A;
        if (xn(p)) return As(p, R);
        if (Tt == E || Tt == f || Ns && !Ne) {
          if (Ut(p)) return Ne ? p : {};
          if (De = En(Ns ? {} : p), !R) return nt(p, yr(De, p));
        } else {
          if (!x[Tt]) return Ne ? p : {};
          De = kr(p, Tt, Ot, R);
        }
      }
      it || (it = new bt());
      var Ls = it.get(p);
      if (Ls) return Ls;
      if (it.set(p, De), !ye) var Ds = P ? In(p) : sn(p);
      return ze(Ds || p, function(an, cn) {
        Ds && (cn = an, an = p[cn]), we(De, cn, Ot(an, R, P, K, cn, p, it));
      }), De;
    }
    function Mn(p) {
      return Ft(p) ? hs(p) : {};
    }
    function br(p, R, P) {
      var K = R(p);
      return nn(p) ? K : et(K, P(p));
    }
    function vr(p) {
      return Ie.call(p);
    }
    function Rs(p) {
      return !Ft(p) || Is(p) ? !1 : (Nn(p) || Ut(p) ? pe : U).test(vt(p));
    }
    function _r(p) {
      if (!Pe(p)) return us(p);
      var R = [];
      for (var P in Object(p)) Qe.call(p, P) && P != "constructor" && R.push(P);
      return R;
    }
    function As(p, R) {
      if (R) return p.slice();
      var P = new p.constructor(p.length);
      return p.copy(P), P;
    }
    function Tn(p) {
      var R = new p.constructor(p.byteLength);
      return new Bt(R).set(new Bt(p)), R;
    }
    function Ss(p, R) {
      var P = R ? Tn(p.buffer) : p.buffer;
      return new p.constructor(P, p.byteOffset, p.byteLength);
    }
    function ks(p, R, P) {
      return Je(R ? P(tt(p), !0) : tt(p), _e, new p.constructor());
    }
    function wr(p) {
      var R = new p.constructor(p.source, _.exec(p));
      return R.lastIndex = p.lastIndex, R;
    }
    function Os(p, R, P) {
      return Je(R ? P(Cn(p), !0) : Cn(p), Ze, new p.constructor());
    }
    function Cr(p) {
      return kn ? Object(kn.call(p)) : {};
    }
    function Rr(p, R) {
      var P = R ? Tn(p.buffer) : p.buffer;
      return new p.constructor(P, p.byteOffset, p.length);
    }
    function Ar(p, R) {
      var P = -1, K = p.length;
      for (R || (R = Array(K)); ++P < K; ) R[P] = p[P];
      return R;
    }
    function Ms(p, R, P, K) {
      P || (P = {});
      for (var Ce = -1, Ne = R.length; ++Ce < Ne; ) {
        var it = R[Ce], De = void 0;
        we(P, it, De === void 0 ? p[it] : De);
      }
      return P;
    }
    function nt(p, R) {
      return Ms(p, Ts(p), R);
    }
    function In(p) {
      return br(p, sn, Ts);
    }
    function st(p, R) {
      var P = p.__data__;
      return V(R) ? P[typeof R == "string" ? "string" : "hash"] : P.map;
    }
    function Mt(p, R) {
      var P = Dt(p, R);
      return Rs(P) ? P : void 0;
    }
    var Ts = Le ? mt(Le, Object) : rn, rt = vr;
    (Yt && rt(new Yt(/* @__PURE__ */ new ArrayBuffer(1))) != D || St && rt(new St()) != M || qt && rt(qt.resolve()) != j || Gt && rt(new Gt()) != B || Zt && rt(new Zt()) != ne) && (rt = function(p) {
      var R = Ie.call(p), P = R == E ? p.constructor : void 0, K = P ? vt(P) : void 0;
      if (K) switch (K) {
        case en:
          return D;
        case ds:
          return M;
        case Ht:
          return j;
        case Te:
          return B;
        case gs:
          return ne;
      }
      return R;
    });
    function Sr(p) {
      var R = p.length, P = p.constructor(R);
      return R && typeof p[0] == "string" && Qe.call(p, "index") && (P.index = p.index, P.input = p.input), P;
    }
    function En(p) {
      return typeof p.constructor == "function" && !Pe(p) ? Mn(ls(p)) : {};
    }
    function kr(p, R, P, K) {
      var Ce = p.constructor;
      switch (R) {
        case J:
          return Tn(p);
        case g:
        case v:
          return new Ce(+p);
        case D:
          return Ss(p, K);
        case y:
        case ue:
        case $:
        case le:
        case W:
        case z:
        case a:
        case ce:
        case F:
          return Rr(p, K);
        case M:
          return ks(p, K, P);
        case L:
        case X:
          return new Ce(p);
        case te:
          return wr(p);
        case B:
          return Os(p, K, P);
        case Z:
          return Cr(p);
      }
    }
    function Oe(p, R) {
      return R = R ?? h, !!R && (typeof p == "number" || fe.test(p)) && p > -1 && p % 1 == 0 && p < R;
    }
    function V(p) {
      var R = typeof p;
      return R == "string" || R == "number" || R == "symbol" || R == "boolean" ? p !== "__proto__" : p === null;
    }
    function Is(p) {
      return !!Xt && Xt in p;
    }
    function Pe(p) {
      var R = p && p.constructor;
      return p === (typeof R == "function" && R.prototype || At);
    }
    function vt(p) {
      if (p != null) {
        try {
          return jt.call(p);
        } catch {
        }
        try {
          return p + "";
        } catch {
        }
      }
      return "";
    }
    function Pn(p) {
      return Ot(p, !0, !0);
    }
    function Es(p, R) {
      return p === R || p !== p && R !== R;
    }
    function Or(p) {
      return xs(p) && Qe.call(p, "callee") && (!Ge.call(p, "callee") || Ie.call(p) == f);
    }
    var nn = Array.isArray;
    function Ps(p) {
      return p != null && Ln(p.length) && !Nn(p);
    }
    function xs(p) {
      return Dn(p) && Ps(p);
    }
    var xn = Sn || on;
    function Nn(p) {
      var R = Ft(p) ? Ie.call(p) : "";
      return R == T || R == A;
    }
    function Ln(p) {
      return typeof p == "number" && p > -1 && p % 1 == 0 && p <= h;
    }
    function Ft(p) {
      var R = typeof p;
      return !!p && (R == "object" || R == "function");
    }
    function Dn(p) {
      return !!p && typeof p == "object";
    }
    function sn(p) {
      return Ps(p) ? Cs(p) : _r(p);
    }
    function rn() {
      return [];
    }
    function on() {
      return !1;
    }
    s.exports = Pn;
  })(Xs, Xs.exports)), Xs.exports;
}
var Pt = /* @__PURE__ */ vl(_l()), qo = class Zn {
  constructor({ serial: i, clientId: l, text: h, metadata: f, headers: m, userClaim: g, action: v, version: C, timestamp: T, reactions: A }) {
    this.serial = i, this.clientId = l, this.text = h, this.metadata = f, this.headers = m, this.userClaim = g, this.action = v, this.version = C, this.timestamp = T, this.reactions = A, Object.freeze(this.version), Object.freeze(this.reactions), Object.freeze(this.reactions.multiple), Object.freeze(this.reactions.distinct), Object.freeze(this.reactions.unique), Object.freeze(this);
  }
  with(i) {
    if ("serial" in i) return this._getLatestMessageVersion(i);
    if (i.type === ht.Created) throw new re.ErrorInfo("unable to apply message event; unable to apply created event to existing message", he.InvalidArgument, 400);
    if (i.type === ts.Summary) {
      if (i.messageSerial !== this.serial) throw new re.ErrorInfo("unable to apply message event; event is for a different message", he.InvalidArgument, 400);
      const l = {
        unique: Pt(i.reactions.unique),
        distinct: Pt(i.reactions.distinct),
        multiple: Pt(i.reactions.multiple)
      };
      return Zn._clone(this, { reactions: l });
    }
    return this._getLatestMessageVersion(i.message);
  }
  _getLatestMessageVersion(i) {
    if (i.serial !== this.serial) throw new re.ErrorInfo("unable to apply message event; event is for a different message", he.InvalidArgument, 400);
    return this.version.serial >= i.version.serial ? this : Zn._clone(i, { reactions: this.reactions });
  }
  static _clone(i, l) {
    return new Zn({
      serial: l?.serial ?? i.serial,
      clientId: l?.clientId ?? i.clientId,
      text: l?.text ?? i.text,
      metadata: l?.metadata ?? Pt(i.metadata),
      headers: l?.headers ?? Pt(i.headers),
      userClaim: l?.userClaim ?? i.userClaim,
      action: l?.action ?? i.action,
      version: l?.version ?? Pt(i.version),
      timestamp: l?.timestamp ?? i.timestamp,
      reactions: l?.reactions ?? Pt(i.reactions)
    });
  }
  copy(i = {}) {
    return Zn._clone(this, i);
  }
}, Go = () => ({
  unique: {},
  distinct: {},
  multiple: {}
}), rs = (s) => {
  if (!s || typeof s != "object") return {};
  const i = s, l = {};
  return i.headers && typeof i.headers == "object" && (l.headers = i.headers), typeof i.userClaim == "string" && (l.userClaim = i.userClaim), l;
}, wl = (s) => {
  const i = s, l = i.data && typeof i.data == "object" ? i.data : {}, h = rs(s.extras), f = i.clientId || "", m = l.text || "", g = new Date(i.timestamp || 0), v = i.serial || "", C = l.metadata && typeof l.metadata == "object" ? l.metadata : {}, T = h.headers || {}, A = h.userClaim, M = {
    ...i.version,
    serial: i.version.serial || v,
    timestamp: new Date(i.version.timestamp || g)
  }, L = Object.values(je).includes(i.action) ? i.action : je.MessageCreate;
  return new qo({
    serial: v,
    clientId: f,
    text: m,
    metadata: C,
    headers: T,
    userClaim: A,
    action: L,
    version: M,
    timestamp: g,
    reactions: Go()
  });
}, bn = (s, i, l) => {
  if (!s) throw new re.ErrorInfo(`unable to ${i}; ${l} must be a non-empty string`, he.InvalidArgument, 400);
}, Cl = {
  "annotation.create": yn.Create,
  "annotation.delete": yn.Delete
}, Ho = class {
  constructor(s, i, l, h, f) {
    this._logger = s, this._options = i, this._api = l, this._roomName = h, this._channel = f, this._emitter = new pt(), this._unsubscribeMessageEvents = Jt(f, this._processMessageEvent.bind(this)), this._options?.rawMessageReactions && (this._unsubscribeAnnotationEvents = Jt(f.annotations, this._processAnnotationEvent.bind(this))), this._defaultType = this._options?.defaultMessageReactionType ?? Ct.Distinct;
  }
  _processAnnotationEvent(s) {
    this._logger.trace("MessageReactions._processAnnotationEvent();", { event: s });
    const i = bl[s.type];
    if (!i) {
      this._logger.info("MessageReactions._processAnnotationEvent(); ignoring unknown reaction type", { event: s });
      return;
    }
    const l = Cl[s.action];
    if (!l) {
      this._logger.info("MessageReactions._processAnnotationEvent(); ignoring unknown reaction event type", { event: s });
      return;
    }
    const h = s.name ?? "", f = rs(s.extras), m = {
      type: l,
      timestamp: new Date(s.timestamp),
      reaction: {
        messageSerial: s.messageSerial,
        type: i,
        name: h,
        clientId: s.clientId ?? "",
        userClaim: f.userClaim
      }
    };
    s.count ? m.reaction.count = s.count : l === yn.Create && i === Ct.Multiple && (m.reaction.count = 1), this._emitter.emit(l, m);
  }
  _processMessageEvent(s) {
    if (this._logger.trace("MessageReactions._processMessageEvent();", { event: s }), s.action !== "message.summary") return;
    const i = s.serial, l = s.annotations.summary, h = l[Qs.Unique] ?? {}, f = l[Qs.Distinct] ?? {}, m = l[Qs.Multiple] ?? {};
    this._emitter.emit(ts.Summary, {
      type: ts.Summary,
      messageSerial: i,
      reactions: {
        unique: h,
        distinct: f,
        multiple: m
      }
    });
  }
  async send(s, i) {
    this._logger.trace("MessageReactions.send();", {
      messageSerial: s,
      params: i
    }), bn(s, "send message reaction", "messageSerial");
    let { type: l, count: h } = i;
    l || (l = this._defaultType), l === Ct.Multiple && !h && (h = 1);
    const f = {
      type: l,
      name: i.name
    };
    return h && (f.count = h), this._api.sendMessageReaction(this._roomName, s, f);
  }
  async delete(s, i) {
    this._logger.trace("MessageReactions.delete();", {
      messageSerial: s,
      params: i
    }), bn(s, "delete message reaction", "messageSerial");
    let l = i?.type;
    if (l || (l = this._defaultType), l !== Ct.Unique && !i?.name) throw new re.ErrorInfo(`unable to delete reaction of type ${l}; name not specified`, he.InvalidArgument, 400);
    const h = { type: l };
    return l !== Ct.Unique && (h.name = i?.name), this._api.deleteMessageReaction(this._roomName, s, h);
  }
  subscribe(s) {
    this._logger.trace("MessageReactions.subscribe();");
    const i = ut(s);
    return this._emitter.on(ts.Summary, i), { unsubscribe: () => {
      this._emitter.off(i);
    } };
  }
  subscribeRaw(s) {
    if (this._logger.trace("MessageReactions.subscribeRaw();"), !this._options?.rawMessageReactions) throw new re.ErrorInfo("unable to subscribe to message reactions; raw message reactions are not enabled", he.FeatureNotEnabledInRoom, 400);
    const i = ut(s);
    return this._emitter.on([yn.Create, yn.Delete], i), { unsubscribe: () => {
      this._emitter.off(i);
    } };
  }
  static channelOptionMerger(s) {
    return (i) => (i.modes.includes("ANNOTATION_PUBLISH") || i.modes.push("ANNOTATION_PUBLISH"), s.messages.rawMessageReactions && !i.modes.includes("ANNOTATION_SUBSCRIBE") && i.modes.push("ANNOTATION_SUBSCRIBE"), i);
  }
  async clientReactions(s, i) {
    return this._logger.trace("MessageReactions.clientReactions();", {
      messageSerial: s,
      clientId: i
    }), bn(s, "get client reactions", "messageSerial"), this._api.getClientReactions(this._roomName, s, i);
  }
  dispose() {
    this._logger.trace("DefaultMessageReactions.dispose();"), this._emitter.off(), this._unsubscribeMessageEvents(), this._unsubscribeAnnotationEvents?.(), this._logger.debug("DefaultMessageReactions.dispose(); disposed successfully");
  }
  hasListeners() {
    return Nt(this._emitter);
  }
}, ns = (s) => {
  const i = {
    ...Go(),
    ...s.reactions
  };
  for (const m of ["unique", "distinct"]) {
    const g = i[m];
    for (const v of Object.keys(g)) {
      const C = g[v];
      C && !C.clipped && (C.clipped = !1);
    }
  }
  const l = i.multiple;
  for (const m of Object.keys(l)) {
    const g = l[m];
    g && (g.clipped || (g.clipped = !1), g.totalClientIds || (g.totalClientIds = 0));
  }
  const h = Object.values(je).includes(s.action) ? s.action : je.MessageCreate, f = {
    serial: s.version.serial,
    timestamp: new Date(s.version.timestamp),
    clientId: s.version.clientId,
    description: s.version.description,
    metadata: s.version.metadata
  };
  return new qo({
    serial: s.serial,
    clientId: s.clientId,
    text: s.text,
    metadata: s.metadata,
    headers: s.headers,
    userClaim: s.userClaim,
    action: h,
    version: f,
    timestamp: new Date(s.timestamp),
    reactions: i
  });
}, Rl = /* @__PURE__ */ new Map([
  [je.MessageCreate, ht.Created],
  [je.MessageUpdate, ht.Updated],
  [je.MessageDelete, ht.Deleted]
]), ci = /* @__PURE__ */ ((s) => (s.OldestFirst = "oldestFirst", s.NewestFirst = "newestFirst", s))(ci || {}), Al = class {
  constructor(s, i, l, h, f) {
    this._pendingPromiseRejecters = /* @__PURE__ */ new Set(), this._pendingAttachListeners = /* @__PURE__ */ new Set(), this._emitter = new pt(), this._roomName = s, this._options = i, this._channel = l, this._chatApi = h, this._logger = f, this._listenerSubscriptionPoints = /* @__PURE__ */ new Map(), this._reactions = new Ho(this._logger, i, this._chatApi, this._roomName, this._channel);
    const m = this._processEvent.bind(this), g = (C) => {
      this._handleAttach(C.resumed);
    }, v = (C) => {
      C.current === "attached" && C.previous === "attached" && this._handleAttach(C.resumed);
    };
    this._unsubscribeMessageEvents = Jt(this._channel, [jo.ChatMessage], m), this._offChannelAttached = xt(this._channel, "attached", g), this._offChannelUpdate = xt(this._channel, "update", v);
  }
  get reactions() {
    return this._reactions;
  }
  async _getBeforeSubscriptionStart(s, i) {
    this._logger.trace("DefaultSubscriptionManager.getBeforeSubscriptionStart();");
    const l = this._listenerSubscriptionPoints.get(s);
    if (l === void 0) throw this._logger.error("DefaultSubscriptionManager.getBeforeSubscriptionStart(); listener has not been subscribed"), new re.ErrorInfo("unable to query history; listener has not been subscribed", he.ListenerNotSubscribed, 400);
    const h = await l;
    return this._chatApi.history(this._roomName, {
      ...i,
      orderBy: "newestFirst",
      ...h
    });
  }
  _handleAttach(s) {
    if (this._logger.trace("DefaultSubscriptionManager.handleAttach();"), s) return;
    const i = this._subscribeAtChannelAttach();
    for (const [l] of this._listenerSubscriptionPoints.entries()) this._listenerSubscriptionPoints.set(l, i);
  }
  async _resolveSubscriptionStart() {
    const s = this._getChannelProperties();
    if (s.state === "attached") {
      if (s.properties.channelSerial) return { fromSerial: s.properties.channelSerial };
      throw this._logger.error("DefaultSubscriptionManager.handleAttach(); channelSerial is undefined"), new re.ErrorInfo("unable to query messages; channel is attached but channelSerial is not defined", he.ChannelSerialNotDefined, 500);
    }
    return this._subscribeAtChannelAttach();
  }
  _getChannelProperties() {
    return this._channel;
  }
  async _subscribeAtChannelAttach() {
    const s = this._getChannelProperties();
    return new Promise((i, l) => {
      this._pendingPromiseRejecters.add(l);
      const h = () => {
        this._pendingPromiseRejecters.delete(l);
      };
      if (s.state === "attached") {
        this._logger.debug("Messages._subscribeAtChannelAttach(); channel is attached already, using attachSerial", { attachSerial: s.properties.attachSerial }), h(), s.properties.attachSerial ? i({ fromSerial: s.properties.attachSerial }) : (this._logger.error("DefaultSubscriptionManager.handleAttach(); attachSerial is undefined"), h(), l(new re.ErrorInfo("unable to query messages; channel is attached but attachSerial is not defined", he.ChannelSerialNotDefined, 500)));
        return;
      }
      const f = gl(s, "attached", () => {
        this._logger.debug("Messages._subscribeAtChannelAttach(); channel is now attached, using attachSerial", { attachSerial: s.properties.attachSerial }), h(), this._pendingAttachListeners.delete(f), s.properties.attachSerial ? i({ fromSerial: s.properties.attachSerial }) : (this._logger.error("DefaultSubscriptionManager.handleAttach(); attachSerial is undefined"), l(new re.ErrorInfo("unable to query messages; channel is attached but attachSerial is not defined", he.ChannelSerialNotDefined, 500)));
      });
      this._pendingAttachListeners.add(f);
    });
  }
  async history(s) {
    return this._logger.trace("Messages.query();"), this._chatApi.history(this._roomName, s);
  }
  async get(s) {
    return this._logger.trace("Messages.get();", { serial: s }), this._chatApi.getMessage(this._roomName, s);
  }
  async send(s) {
    this._logger.trace("Messages.send();", { params: s });
    const { text: i, metadata: l, headers: h } = s, f = await this._chatApi.sendMessage(this._roomName, {
      text: i,
      headers: h,
      metadata: l
    });
    return ns(f);
  }
  async delete(s, i) {
    this._logger.trace("Messages.delete();", {
      serial: s,
      details: i
    }), bn(s, "delete message", "serial");
    const l = await this._chatApi.deleteMessage(this._roomName, s, i);
    return ns(l);
  }
  async update(s, i, l) {
    this._logger.trace("Messages.update();", {
      serial: s,
      updateParams: i,
      details: l
    }), bn(s, "update message", "serial");
    const h = await this._chatApi.updateMessage(this._roomName, s, {
      message: {
        text: i.text,
        ...i.metadata && { metadata: i.metadata },
        ...i.headers && { headers: i.headers }
      },
      ...l
    });
    return this._logger.debug("Messages.update(); message update successfully", { updateParams: i }), ns(h);
  }
  async getVersions(s) {
    return this._logger.trace("Messages.getVersions();", { serial: s }), bn(s, "get message getVersions", "serial"), this._chatApi.getMessageVersions(this._roomName, s);
  }
  subscribe(s) {
    this._logger.trace("Messages.subscribe();");
    const i = ut(s);
    this._emitter.on([
      ht.Created,
      ht.Updated,
      ht.Deleted
    ], i);
    const l = this._resolveSubscriptionStart();
    return l.catch(() => {
      this._logger.debug("Messages.subscribe(); subscription point was not resolved before the room was released");
    }), this._listenerSubscriptionPoints.set(i, l), {
      unsubscribe: () => {
        this._listenerSubscriptionPoints.delete(i), this._logger.trace("Messages.unsubscribe();"), this._emitter.off(i);
      },
      historyBeforeSubscribe: async (h) => this._getBeforeSubscriptionStart(i, h)
    };
  }
  _processEvent(s) {
    this._logger.trace("Messages._processEvent();", { channelEventMessage: s });
    const { action: i } = s, l = Rl.get(i);
    if (!l) {
      this._logger.debug("Messages._processEvent(); received unknown message action", { action: i });
      return;
    }
    const h = wl(s);
    this._emitter.emit(l, {
      type: l,
      message: h
    });
  }
  dispose() {
    this._logger.trace("DefaultMessages.dispose();"), this._emitter.off();
    const s = new re.ErrorInfo("unable to query messages; room has been disposed", he.ResourceDisposed, 400);
    for (const i of this._pendingPromiseRejecters) try {
      i(s);
    } catch {
    }
    this._pendingPromiseRejecters.clear(), this._listenerSubscriptionPoints.clear();
    for (const i of this._pendingAttachListeners) i();
    this._pendingAttachListeners.clear(), this._unsubscribeMessageEvents(), this._offChannelAttached(), this._offChannelUpdate(), this._reactions.dispose(), this._logger.debug("DefaultMessages.dispose(); disposed successfully");
  }
  hasListeners() {
    return Nt(this._emitter);
  }
}, Sl = class {
  constructor(s, i, l) {
    this._apiProtocolVersion = 4, this._realtime = s, this._logger = i, this._idempotentRestPublishing = l;
  }
  async history(s, i) {
    const l = { ...i };
    if (i.orderBy) switch (i.orderBy) {
      case ci.NewestFirst:
        l.direction = "backwards";
        break;
      case ci.OldestFirst:
        l.direction = "forwards";
        break;
      default:
        throw new re.ErrorInfo(`unable to query messages; invalid orderBy value: ${i.orderBy}`, he.InvalidArgument, 400);
    }
    const h = await this._makeAuthorizedPaginatedRequest(this._roomUrl(s, "/messages"), l);
    return this._recursivePaginateMessages(h);
  }
  _recursivePaginateMessages(s) {
    const i = {};
    return i.items = s.items.map((l) => ns(l)), i.next = async () => {
      const l = await s.next();
      return l ? this._recursivePaginateMessages(l) : null;
    }, i.first = async () => {
      const l = await s.first();
      return this._recursivePaginateMessages(l);
    }, i.current = async () => {
      const l = await s.current();
      return this._recursivePaginateMessages(l);
    }, i.hasNext = () => s.hasNext(), i.isLast = () => s.isLast(), {
      ...s,
      ...i
    };
  }
  async getMessage(s, i) {
    const l = await this._makeAuthorizedRequest(this._messageUrl(s, i), "GET");
    return ns(l);
  }
  async deleteMessage(s, i, l) {
    const h = {
      ...l?.description && { description: l.description },
      ...l?.metadata && { metadata: l.metadata }
    };
    return this._makeAuthorizedRequest(this._messageUrl(s, i, "/delete"), "POST", h, this._idempotencyQueryParams());
  }
  async sendMessage(s, i) {
    const l = {
      text: i.text,
      ...i.metadata && { metadata: i.metadata },
      ...i.headers && { headers: i.headers }
    };
    return this._makeAuthorizedRequest(this._roomUrl(s, "/messages"), "POST", l, this._idempotencyQueryParams());
  }
  async updateMessage(s, i, l) {
    return this._makeAuthorizedRequest(this._messageUrl(s, i), "PUT", l, this._idempotencyQueryParams());
  }
  _idempotencyQueryParams() {
    return this._idempotentRestPublishing ? { idempotencyKey: yl() } : void 0;
  }
  async sendMessageReaction(s, i, l) {
    return this._makeAuthorizedRequest(this._messageUrl(s, i, "/reactions"), "POST", l);
  }
  async deleteMessageReaction(s, i, l) {
    return this._makeAuthorizedRequest(this._messageUrl(s, i, "/reactions"), "DELETE", void 0, l);
  }
  async getClientReactions(s, i, l) {
    const h = l ? { forClientId: l } : {};
    return this._makeAuthorizedRequest(this._messageUrl(s, i, "/client-reactions"), "GET", void 0, h);
  }
  async getMessageVersions(s, i) {
    const l = await this._makeAuthorizedPaginatedRequest(this._messageUrl(s, i, "/versions"));
    return this._recursivePaginateMessages(l);
  }
  async getOccupancy(s) {
    return this._makeAuthorizedRequest(this._roomUrl(s, "/occupancy"), "GET");
  }
  async _makeAuthorizedRequest(s, i, l, h) {
    return (await this._doRequest(s, i, h, l)).items[0];
  }
  async _makeAuthorizedPaginatedRequest(s, i, l) {
    return this._doRequest(s, "GET", i, l);
  }
  async _doRequest(s, i, l, h) {
    const f = await this._realtime.request(i, s, this._apiProtocolVersion, l, h);
    if (!f.success) throw this._logger.error("ChatApi._doRequest(); failed to make request", {
      url: s,
      method: i,
      statusCode: f.statusCode,
      errorCode: f.errorCode,
      errorMessage: f.errorMessage,
      errorDetail: f.errorDetail
    }), new re.ErrorInfo(f.errorMessage, f.errorCode, f.statusCode, void 0, f.errorDetail);
    return f;
  }
  _roomUrl(s, i = "") {
    return `/chat/v4/rooms/${encodeURIComponent(s)}${i}`;
  }
  _messageUrl(s, i, l = "") {
    return `${this._roomUrl(s, "/messages")}/${encodeURIComponent(i)}${l}`;
  }
}, kl = (s) => `${s}::$chat`, Zs = "1.4.0", Wo = `chat-js/${Zs}`, Ol = `chat-react/${Zs}`, Fo = ["PUBLISH", "SUBSCRIBE"], Ml = {
  params: { agent: Wo },
  attachOnSubscribe: !1,
  modes: Fo
}, Tl = {
  params: { agent: `${Wo} ${Ol}` },
  attachOnSubscribe: !1,
  modes: Fo
}, Il = class {
  constructor(s, i, l, h) {
    l.trace("ChannelManager();", { isReact: h }), this._realtime = i, this._logger = l, this._isReact = h, this._registeredOptions = this._defaultChannelOptions(), this._channelId = kl(s);
  }
  mergeOptions(s) {
    if (this._logger.trace("ChannelManager.mergeOptions();"), this._resolvedChannel) throw this._logger.error("unable to modify channel options; channel has already been requested"), new re.ErrorInfo("unable to modify channel options; channel has already been requested", he.ChannelOptionsCannotBeModified, 400);
    this._registeredOptions = s(this._registeredOptions);
  }
  get() {
    return this._logger.trace("ChannelManager.get();"), this._resolvedChannel ??= this._realtime.channels.get(this._channelId, this._registeredOptions), this._resolvedChannel;
  }
  release() {
    this._logger.trace("ChannelManager.release();", { channelId: this._channelId }), this._resolvedChannel && this._realtime.channels.release(this._channelId);
  }
  _defaultChannelOptions() {
    this._logger.trace("ChannelManager._defaultChannelOptions();");
    const s = this._isReact ? Tl : Ml;
    return this._logger.trace(this._isReact ? "using react channel options" : "using default channel options"), {
      ...s,
      modes: [...s.modes ?? []]
    };
  }
}, El = (s) => {
  const i = s;
  let l = 0, h = 0;
  if (!i.data || typeof i.data != "object") return {
    connections: l,
    presenceMembers: h
  };
  const { metrics: f } = i.data;
  return !f || typeof f != "object" ? {
    connections: l,
    presenceMembers: h
  } : (typeof f.connections == "number" && Number.isInteger(f.connections) && (l = f.connections), typeof f.presenceMembers == "number" && Number.isInteger(f.presenceMembers) && (h = f.presenceMembers), {
    connections: l,
    presenceMembers: h
  });
}, mo = class {
  constructor(s, i, l, h, f) {
    this._emitter = new pt(), this._roomName = s, this._channel = i, this._chatApi = l, this._logger = h, this._roomOptions = f;
    const m = this._internalOccupancyListener.bind(this);
    this._roomOptions.occupancy.enableEvents ? (this._logger.debug("DefaultOccupancy(); subscribing to occupancy events"), this._unsubscribeOccupancyEvents = Jt(this._channel, [Bo.Occupancy], m)) : this._unsubscribeOccupancyEvents = () => {
    };
  }
  subscribe(s) {
    if (this._logger.trace("Occupancy.subscribe();"), !this._roomOptions.occupancy.enableEvents) throw new re.ErrorInfo("unable to subscribe to occupancy; occupancy events are not enabled in room options", he.FeatureNotEnabledInRoom, 400);
    const i = ut(s);
    return this._emitter.on(i), { unsubscribe: () => {
      this._logger.trace("Occupancy.unsubscribe();"), this._emitter.off(i);
    } };
  }
  async get() {
    return this._logger.trace("Occupancy.get();"), this._chatApi.getOccupancy(this._roomName);
  }
  get current() {
    if (this._logger.trace("Occupancy.current();"), !this._roomOptions.occupancy.enableEvents) throw new re.ErrorInfo("unable to get current occupancy; occupancy events are not enabled in room options", he.FeatureNotEnabledInRoom, 400);
    return this._latestOccupancyData;
  }
  _internalOccupancyListener(s) {
    this._logger.trace("Occupancy._internalOccupancyListener();", s), this._latestOccupancyData = El(s), this._emitter.emit(ai.Updated, {
      type: ai.Updated,
      occupancy: this._latestOccupancyData
    });
  }
  static channelOptionMerger(s) {
    return (i) => s.occupancy.enableEvents ? {
      ...i,
      params: {
        ...i.params,
        occupancy: "metrics"
      }
    } : i;
  }
  dispose() {
    this._logger.trace("DefaultOccupancy.dispose();"), this._unsubscribeOccupancyEvents(), this._emitter.off(), this._logger.debug("DefaultOccupancy.dispose(); disposed successfully");
  }
  hasListeners() {
    return Nt(this._emitter);
  }
}, yo = class {
  constructor(s, i, l) {
    this._emitter = new pt(), this._stateEmitter = new pt(), this._presenceState = { present: !1 }, this.subscribeToEvents = (g) => {
      this._emitter.emit(g.action, {
        type: g.action,
        member: this._realtimeMemberToPresenceMember(g)
      });
    }, this._channel = s, this._logger = i, this._options = l;
    const h = this.subscribeToEvents.bind(this), f = (g) => {
      if (g.reason?.code === 91004) {
        this._logger.debug("Presence auto-reentry failed", { reason: g.reason }), this._emitPresenceStateChange(!1, g.reason);
        return;
      }
      if (g.current === "detached") {
        this._emitPresenceStateChange(!1);
        return;
      }
    }, m = (g) => {
      this._emitPresenceStateChange(!1, g.reason);
    };
    this._offChannelUpdate = xt(this._channel, "update", f), this._offChannelDetach = xt(this._channel, ["detached", "failed"], m), this._unsubscribePresenceEvents = Jt(this._channel.presence, h);
  }
  async get(s) {
    return this._logger.trace("Presence.get()", { params: s }), this._assertChannelState(), (await this._channel.presence.get(s)).map((i) => this._realtimeMemberToPresenceMember(i));
  }
  async isUserPresent(s) {
    return this._logger.trace("Presence.isUserPresent()", { clientId: s }), this._assertChannelState(), (await this._channel.presence.get({ clientId: s })).length > 0;
  }
  async enter(s) {
    this._logger.trace("Presence.enter()", { data: s }), this._assertChannelState();
    try {
      await this._channel.presence.enter(s), this._emitPresenceStateChange(!0);
    } catch (i) {
      throw this._emitPresenceStateChange(!1, i), i;
    }
  }
  async update(s) {
    this._logger.trace("Presence.update()", { data: s }), this._assertChannelState();
    try {
      await this._channel.presence.update(s), this._emitPresenceStateChange(!0);
    } catch (i) {
      throw this._emitPresenceStateChange(!1, i), i;
    }
  }
  async leave(s) {
    this._logger.trace("Presence.leave()", { data: s }), this._assertChannelState();
    try {
      await this._channel.presence.leave(s), this._emitPresenceStateChange(!1);
    } catch (i) {
      throw this._emitPresenceStateChange(!1, i), i;
    }
  }
  subscribe(s) {
    if (this._logger.trace("Presence.subscribe()"), !this._options.presence.enableEvents) throw this._logger.error("unable to subscribe to presence; presence events are not enabled"), new re.ErrorInfo("unable to subscribe to presence; presence events are not enabled", he.FeatureNotEnabledInRoom, 400);
    const i = ut(s);
    return this._emitter.on(i), { unsubscribe: () => {
      this._logger.trace("Presence.unsubscribe();"), this._emitter.off(i);
    } };
  }
  static channelOptionMerger(s) {
    return (i) => (i.modes.includes("PRESENCE") || i.modes.push("PRESENCE"), s.presence.enableEvents && !i.modes.includes("PRESENCE_SUBSCRIBE") && i.modes.push("PRESENCE_SUBSCRIBE"), i);
  }
  dispose() {
    this._logger.trace("DefaultPresence.dispose();"), this._emitter.off(), this._unsubscribePresenceEvents(), this._offChannelUpdate(), this._offChannelDetach(), this._logger.debug("DefaultPresence.dispose(); disposed successfully");
  }
  hasListeners() {
    return Nt(this._emitter);
  }
  _realtimeMemberToPresenceMember(s) {
    const i = rs(s.extras);
    return {
      ...s,
      data: s.data,
      updatedAt: new Date(s.timestamp),
      userClaim: i.userClaim
    };
  }
  _assertChannelState() {
    if (this._channel.state !== "attaching" && this._channel.state !== "attached") throw this._logger.error("unable to perform presence operation; room is not attached"), new re.ErrorInfo("unable to perform presence operation; room is not attached", he.RoomInInvalidState, 400);
  }
  _emitPresenceStateChange(s, i) {
    this._logger.trace("Presence._emitPresenceStateChange()", {
      present: s,
      error: i
    });
    const l = { ...this._presenceState };
    this._presenceState = { present: s };
    const h = {
      previous: l,
      current: this._presenceState,
      error: i
    };
    this._stateEmitter.emit("presence.state.change", h);
  }
  onPresenceStateChange(s) {
    this._logger.trace("Presence.onPresenceStateChange()");
    const i = ut(s);
    return this._stateEmitter.on("presence.state.change", i), { unsubscribe: () => {
      this._logger.trace("Presence.unsubscribeFromPresenceStateChanges()"), this._stateEmitter.off(i);
    } };
  }
}, Ys = /* @__PURE__ */ new Error("request for lock canceled"), Pl = function(s, i, l, h) {
  function f(m) {
    return m instanceof l ? m : new l(function(g) {
      g(m);
    });
  }
  return new (l || (l = Promise))(function(m, g) {
    function v(A) {
      try {
        T(h.next(A));
      } catch (M) {
        g(M);
      }
    }
    function C(A) {
      try {
        T(h.throw(A));
      } catch (M) {
        g(M);
      }
    }
    function T(A) {
      A.done ? m(A.value) : f(A.value).then(v, C);
    }
    T((h = h.apply(s, i || [])).next());
  });
}, xl = class {
  constructor(s, i = Ys) {
    this._value = s, this._cancelError = i, this._queue = [], this._weightedWaiters = [];
  }
  acquire(s = 1, i = 0) {
    if (s <= 0) throw new Error(`invalid weight ${s}: must be positive`);
    return new Promise((l, h) => {
      const f = {
        resolve: l,
        reject: h,
        weight: s,
        priority: i
      }, m = zo(this._queue, (g) => i <= g.priority);
      m === -1 && s <= this._value ? this._dispatchItem(f) : this._queue.splice(m + 1, 0, f);
    });
  }
  runExclusive(s) {
    return Pl(this, arguments, void 0, function* (i, l = 1, h = 0) {
      const [f, m] = yield this.acquire(l, h);
      try {
        return yield i(f);
      } finally {
        m();
      }
    });
  }
  waitForUnlock(s = 1, i = 0) {
    if (s <= 0) throw new Error(`invalid weight ${s}: must be positive`);
    return this._couldLockImmediately(s, i) ? Promise.resolve() : new Promise((l) => {
      this._weightedWaiters[s - 1] || (this._weightedWaiters[s - 1] = []), Nl(this._weightedWaiters[s - 1], {
        resolve: l,
        priority: i
      });
    });
  }
  isLocked() {
    return this._value <= 0;
  }
  getValue() {
    return this._value;
  }
  setValue(s) {
    this._value = s, this._dispatchQueue();
  }
  release(s = 1) {
    if (s <= 0) throw new Error(`invalid weight ${s}: must be positive`);
    this._value += s, this._dispatchQueue();
  }
  cancel() {
    this._queue.forEach((s) => s.reject(this._cancelError)), this._queue = [];
  }
  _dispatchQueue() {
    for (this._drainUnlockWaiters(); this._queue.length > 0 && this._queue[0].weight <= this._value; ) this._dispatchItem(this._queue.shift()), this._drainUnlockWaiters();
  }
  _dispatchItem(s) {
    const i = this._value;
    this._value -= s.weight, s.resolve([i, this._newReleaser(s.weight)]);
  }
  _newReleaser(s) {
    let i = !1;
    return () => {
      i || (i = !0, this.release(s));
    };
  }
  _drainUnlockWaiters() {
    if (this._queue.length === 0) for (let s = this._value; s > 0; s--) {
      const i = this._weightedWaiters[s - 1];
      i && (i.forEach((l) => l.resolve()), this._weightedWaiters[s - 1] = []);
    }
    else {
      const s = this._queue[0].priority;
      for (let i = this._value; i > 0; i--) {
        const l = this._weightedWaiters[i - 1];
        if (!l) continue;
        const h = l.findIndex((f) => f.priority <= s);
        (h === -1 ? l : l.splice(0, h)).forEach(((f) => f.resolve()));
      }
    }
  }
  _couldLockImmediately(s, i) {
    return (this._queue.length === 0 || this._queue[0].priority < i) && s <= this._value;
  }
};
function Nl(s, i) {
  const l = zo(s, (h) => i.priority <= h.priority);
  s.splice(l + 1, 0, i);
}
function zo(s, i) {
  for (let l = s.length - 1; l >= 0; l--) if (i(s[l])) return l;
  return -1;
}
var Ll = function(s, i, l, h) {
  function f(m) {
    return m instanceof l ? m : new l(function(g) {
      g(m);
    });
  }
  return new (l || (l = Promise))(function(m, g) {
    function v(A) {
      try {
        T(h.next(A));
      } catch (M) {
        g(M);
      }
    }
    function C(A) {
      try {
        T(h.throw(A));
      } catch (M) {
        g(M);
      }
    }
    function T(A) {
      A.done ? m(A.value) : f(A.value).then(v, C);
    }
    T((h = h.apply(s, i || [])).next());
  });
}, Vo = class {
  constructor(s) {
    this._semaphore = new xl(1, s);
  }
  acquire() {
    return Ll(this, arguments, void 0, function* (s = 0) {
      const [, i] = yield this._semaphore.acquire(1, s);
      return i;
    });
  }
  runExclusive(s, i = 0) {
    return this._semaphore.runExclusive(() => s(), 1, i);
  }
  isLocked() {
    return this._semaphore.isLocked();
  }
  waitForUnlock(s = 0) {
    return this._semaphore.waitForUnlock(1, s);
  }
  release() {
    this._semaphore.isLocked() && this._semaphore.release();
  }
  cancel() {
    return this._semaphore.cancel();
  }
}, Ae = /* @__PURE__ */ ((s) => (s.Initializing = "initializing", s.Initialized = "initialized", s.Attaching = "attaching", s.Attached = "attached", s.Detaching = "detaching", s.Detached = "detached", s.Suspended = "suspended", s.Failed = "failed", s.Releasing = "releasing", s.Released = "released", s))(Ae || {}), Dl = class {
  constructor(s) {
    this._status = "initialized", this._emitter = new pt(), this._logger = s;
  }
  get status() {
    return this._status;
  }
  get error() {
    return this._error;
  }
  onChange(s) {
    const i = ut(s);
    return this._emitter.on(i), { off: () => {
      this._emitter.off(i);
    } };
  }
  setStatus(s) {
    const i = {
      current: s.status,
      error: s.error,
      previous: this._status
    };
    this._status = i.current, this._error = i.error, this._logger.info("room status changed", { ...i }), this._emitter.emit(i.current, i);
  }
  dispose() {
    this._logger.trace("DefaultRoomLifecycle.dispose();"), this._emitter.off(), this._logger.debug("DefaultRoomLifecycle.dispose(); disposed successfully");
  }
  hasListeners() {
    return Nt(this._emitter);
  }
}, Ul = class {
  constructor(s, i, l) {
    this._channelManager = s, this._roomLifecycle = i, this._logger = l, this._eventEmitter = new pt(), this._hasAttachedOnce = !1, this._isExplicitlyDetached = !1, this._mutex = new Vo();
    const h = this._channelStateListener.bind(this), f = this._discontinuityOnAttachedListener.bind(this), m = this._discontinuityOnUpdateListener.bind(this), g = this._channelManager.get();
    this._unsubscribeChannelStateListener = xt(g, h), this._offDiscontinuityAttached = xt(g, "attached", f), this._offDiscontinuityUpdate = xt(g, "update", m);
  }
  onDiscontinuity(s) {
    this._logger.trace("RoomLifecycleManager.onDiscontinuity()");
    const i = ut(s);
    return this._eventEmitter.on(Yn.Discontinuity, i), { off: () => {
      this._eventEmitter.off(Yn.Discontinuity, i);
    } };
  }
  async attach() {
    await this._mutex.runExclusive(async () => {
      if (this._logger.trace("RoomLifecycleManager.attach();"), this._checkRoomNotReleasing("attach"), this._roomStatusIs(Ae.Attached)) {
        this._logger.debug("RoomLifecycleManager.attach(); room already attached, no-op");
        return;
      }
      const s = this._channelManager.get();
      this._logger.debug("RoomLifecycleManager.attach(); attaching room", { channelState: s.state });
      try {
        this._setStatus(Ae.Attaching), await s.attach(), this._setStatus(Ae.Attached), this._isExplicitlyDetached = !1, this._hasAttachedOnce = !0, this._logger.debug("RoomLifecycleManager.attach(); room attached successfully");
      } catch (i) {
        const l = i, h = new re.ErrorInfo(`failed to attach room: ${l.message}`, l.code, l.statusCode, l), f = this._mapChannelStateToRoomStatus(s.state);
        throw this._setStatus(f, h), h;
      }
    }, 1);
  }
  async detach() {
    await this._mutex.runExclusive(async () => {
      if (this._logger.trace("RoomLifecycleManager.detach();"), this._roomStatusIs(Ae.Failed)) throw new re.ErrorInfo("unable to detach room; room is in failed state", he.RoomInInvalidState, 400);
      if (this._checkRoomNotReleasing("detach"), this._roomStatusIs(Ae.Detached)) {
        this._logger.debug("RoomLifecycleManager.detach(); room already detached, no-op");
        return;
      }
      const s = this._channelManager.get();
      this._logger.debug("RoomLifecycleManager.detach(); detaching room", { channelState: s.state });
      try {
        this._setStatus(Ae.Detaching), await s.detach(), this._isExplicitlyDetached = !0, this._setStatus(Ae.Detached), this._logger.debug("RoomLifecycleManager.detach(); room detached successfully");
      } catch (i) {
        const l = i, h = new re.ErrorInfo(`failed to detach room: ${l.message}`, l.code, l.statusCode, l), f = this._mapChannelStateToRoomStatus(s.state);
        throw this._setStatus(f, h), h;
      }
    }, 1);
  }
  async release() {
    await this._mutex.runExclusive(async () => {
      if (this._logger.trace("RoomLifecycleManager.release();"), this._roomStatusIs(Ae.Released)) {
        this._logger.debug("RoomLifecycleManager.release(); room already released, no-op");
        return;
      }
      if (this._roomStatusIs(Ae.Initialized) || this._roomStatusIs(Ae.Detached)) {
        this._logger.debug("RoomLifecycleManager.release(); room is initialized or detached, releasing immediately", { status: this._roomLifecycle.status }), this._releaseChannel();
        return;
      }
      this._setStatus(Ae.Releasing);
      const s = this._channelManager.get();
      this._logger.debug("RoomLifecycleManager.release(); attempting channel detach before release", { channelState: s.state }), await this._channelDetachLoop(s), this._releaseChannel();
    }, 0);
  }
  _mapChannelStateToRoomStatus(s) {
    switch (s) {
      case "initialized":
        return Ae.Initialized;
      case "attaching":
        return Ae.Attaching;
      case "attached":
        return Ae.Attached;
      case "detaching":
        return Ae.Detaching;
      case "detached":
        return Ae.Detached;
      case "suspended":
        return Ae.Suspended;
      case "failed":
        return Ae.Failed;
      default:
        return this._logger.error("RoomLifecycleManager._mapChannelStateToRoomStatus(); unknown channel state", { channelState: s }), Ae.Failed;
    }
  }
  _checkRoomNotReleasing(s) {
    switch (this._roomLifecycle.status) {
      case Ae.Released:
        throw new re.ErrorInfo(`unable to ${s} room; room is released`, he.RoomInInvalidState, 400);
      case Ae.Releasing:
        throw new re.ErrorInfo(`unable to ${s} room; room is currently releasing`, he.RoomInInvalidState, 400);
    }
  }
  _roomStatusIs(s) {
    return this._roomLifecycle.status === s;
  }
  dispose() {
    this._unsubscribeChannelStateListener(), this._offDiscontinuityAttached(), this._offDiscontinuityUpdate(), this._eventEmitter.off();
  }
  hasListeners() {
    return Nt(this._eventEmitter);
  }
  _channelStateListener(s) {
    if (this._logger.debug("RoomLifecycleManager.channel state changed", {
      oldState: s.previous,
      newState: s.current,
      reason: s.reason,
      resumed: s.resumed
    }), this._operationInProgress()) {
      this._logger.debug("RoomLifecycleManager._startMonitoringChannelState(); ignoring channel state change - operation in progress", { status: this._roomLifecycle.status });
      return;
    }
    const i = this._mapChannelStateToRoomStatus(s.current);
    this._setStatus(i, s.reason);
  }
  _discontinuityOnAttachedListener(s) {
    if (!s.resumed && this._hasAttachedOnce && !this._isExplicitlyDetached) {
      const i = new re.ErrorInfo("discontinuity detected", he.RoomDiscontinuity, s.reason?.statusCode ?? 0, s.reason);
      this._logger.warn("RoomLifecycleManager._startMonitoringDiscontinuity(); discontinuity detected", { error: i }), this._eventEmitter.emit(Yn.Discontinuity, i);
    }
  }
  _discontinuityOnUpdateListener(s) {
    if (!s.resumed && this._hasAttachedOnce && !this._isExplicitlyDetached && s.current === "attached" && s.previous === "attached") {
      const i = new re.ErrorInfo("discontinuity detected", he.RoomDiscontinuity, s.reason?.statusCode ?? 0, s.reason);
      this._logger.warn("RoomLifecycleManager._startMonitoringDiscontinuity(); discontinuity detected", { error: i }), this._eventEmitter.emit(Yn.Discontinuity, i);
    }
  }
  async _channelDetachLoop(s) {
    for (; ; ) {
      if (s.state === "failed") {
        this._logger.debug("RoomLifecycleManager._channelDetachLoop(); channel is failed, skipping detach");
        break;
      }
      try {
        await s.detach();
        break;
      } catch (i) {
        this._logger.error("RoomLifecycleManager._channelDetachLoop(); failed to detach channel during release", { error: i }), await new Promise((l) => setTimeout(l, 250));
      }
    }
  }
  _setStatus(s, i) {
    this._logger.debug("RoomLifecycleManager._setStatus(); updating room status", {
      oldStatus: this._roomLifecycle.status,
      newStatus: s,
      hasError: !!i
    }), this._roomLifecycle.setStatus({
      status: s,
      error: i
    });
  }
  _releaseChannel() {
    this._channelManager.release(), this._setStatus(Ae.Released), this._logger.debug("RoomLifecycleManager._releaseChannel(); room released successfully");
  }
  _operationInProgress() {
    return this._mutex.isLocked();
  }
  testForceHasAttachedOnce(s) {
    this._logger.trace("RoomLifecycleManager.testForceHasAttachedOnce();", { firstAttach: s }), this._hasAttachedOnce = s;
  }
}, rr = {
  typing: { heartbeatThrottleMs: 1e4 },
  occupancy: { enableEvents: !1 },
  presence: { enableEvents: !0 },
  messages: {
    rawMessageReactions: !1,
    defaultMessageReactionType: Ct.Distinct
  }
}, jl = (s) => new re.ErrorInfo(`unable to create room; invalid room configuration: ${s}`, he.InvalidArgument, 400), Bl = (s) => {
  ql(s.typing);
}, ql = (s) => {
  if (s.heartbeatThrottleMs <= 0) throw jl("typing heartbeat interval must be greater than 0");
}, Gl = (s) => ({
  ...rr.typing,
  ...s?.typing
}), Hl = (s) => ({
  ...rr.occupancy,
  ...s?.occupancy
}), Wl = (s) => ({
  ...rr.presence,
  ...s?.presence
}), Fl = (s) => ({
  ...rr.messages,
  ...s?.messages
}), zl = (s, i) => ({
  typing: Gl(s),
  occupancy: Hl(s),
  presence: Wl(s),
  messages: Fl(s),
  isReactClient: i
}), bo = (s, i) => ({
  name: s,
  data: i,
  extras: { ephemeral: !0 }
}), Vl = (s) => {
  const i = s.extras ? s.extras : {};
  return {
    ...s,
    extras: {
      ...i,
      ephemeral: !0
    }
  };
}, $l = class {
  constructor(s, i, l, h, f, m, g) {
    this.name = s, this.clientId = i, this.createdAt = l, this.isSelf = h, this.metadata = f, this.headers = m, this.userClaim = g, Object.freeze(this);
  }
}, Kl = (s, i) => {
  const l = s, h = l.data?.name && typeof l.data.name == "string" ? l.data.name : "", f = l.clientId ?? "", m = l.timestamp ? new Date(l.timestamp) : /* @__PURE__ */ new Date(), g = rs(s.extras);
  return new $l(h, f, m, i ? i === f : !1, l.data?.metadata ?? {}, g.headers ?? {}, g.userClaim);
}, Jl = class {
  constructor(s, i, l, h) {
    this._emitter = new pt(), this._forwarder = (m) => {
      const g = Kl(m, this._clientIdResolver.get());
      this._emitter.emit(oi.Reaction, {
        type: oi.Reaction,
        reaction: g
      });
    }, this._channel = s, this._connection = i, this._clientIdResolver = l, this._logger = h;
    const f = this._forwarder.bind(this);
    this._unsubscribeRoomReactionEvents = Jt(this._channel, [ii.Reaction], f);
  }
  async send(s) {
    this._logger.trace("RoomReactions.send();", s);
    const { name: i, metadata: l, headers: h } = s;
    if (!i) throw new re.ErrorInfo("unable to send reaction; name not set and it is required", he.InvalidArgument, 400);
    if (this._connection.state !== "connected") throw new re.ErrorInfo("unable to send reaction; not connected to Ably", he.Disconnected, 400);
    const f = {
      name: i,
      metadata: l ?? {}
    }, m = {
      name: ii.Reaction,
      data: f,
      extras: { headers: h ?? {} }
    };
    await this._channel.publish(Vl(m));
  }
  subscribe(s) {
    this._logger.trace("RoomReactions.subscribe();");
    const i = ut(s);
    return this._emitter.on(i), { unsubscribe: () => {
      this._logger.trace("RoomReactions.unsubscribe();"), this._emitter.off(i);
    } };
  }
  dispose() {
    this._unsubscribeRoomReactionEvents(), this._emitter.off();
  }
  hasListeners() {
    return Nt(this._emitter);
  }
}, Ql = class extends pt {
  constructor(s, i, l, h) {
    super(), this._timeoutMs = 2e3, this._mutex = new Vo(), this._internalSubscribeToEvents = (f) => {
      const { name: m, clientId: g } = f;
      if (this._logger.trace("DefaultTyping._internalSubscribeToEvents(); received event", {
        name: m,
        clientId: g
      }), !g) {
        this._logger.error("DefaultTyping._internalSubscribeToEvents(); invalid clientId in received event", { inbound: f });
        return;
      }
      const v = rs(f.extras).userClaim;
      m === at.Started || m === at.Stopped ? this._updateCurrentlyTyping(g, m, v) : this._logger.warn("DefaultTyping._internalSubscribeToEvents(); unrecognized event", { name: m });
    }, this._channel = l, this._connection = i, this._heartbeatThrottleMs = s.heartbeatThrottleMs, this._currentlyTyping = /* @__PURE__ */ new Map(), this._logger = h, this._unsubscribeTypingEvents = Jt(this._channel, [at.Started, at.Stopped], this._internalSubscribeToEvents.bind(this));
  }
  _clearAllTypingStates() {
    this._logger.debug("DefaultTyping._clearAllTypingStates(); clearing all typing states"), this._clearHeartbeatTimer(), this._clearCurrentlyTyping();
  }
  _clearHeartbeatTimer() {
    this._logger.trace("DefaultTyping._clearHeartbeatTimer(); clearing heartbeat timer"), this._heartbeatTimerId && (clearTimeout(this._heartbeatTimerId), this._heartbeatTimerId = void 0);
  }
  _clearCurrentlyTyping() {
    this._logger.trace("DefaultTyping._clearCurrentlyTyping(); clearing current store and timeouts");
    for (const [, s] of this._currentlyTyping.entries()) clearTimeout(s.timer);
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
      const s = this._heartbeatTimerId = setTimeout(() => {
        this._logger.debug("DefaultTyping.startHeartbeatTimer(); heartbeat timer expired"), s === this._heartbeatTimerId && (this._heartbeatTimerId = void 0);
      }, this._heartbeatThrottleMs);
    }
  }
  async keystroke() {
    this._logger.trace("DefaultTyping.keystroke();"), this._mutex.cancel();
    try {
      await this._mutex.acquire();
    } catch (s) {
      if (s === Ys) {
        this._logger.debug("DefaultTyping.keystroke(); mutex was canceled by a later operation");
        return;
      }
      throw new re.ErrorInfo("unable to send keystroke event; failed to enforce sequential execution of the operation", he.OperationSerializationFailed, 500);
    }
    try {
      if (this._connection.state !== "connected") throw this._logger.error("DefaultTyping.keystroke(); connection is not connected", { status: this._connection.state }), new re.ErrorInfo("unable to send typing keystroke event; disconnected from Ably", he.Disconnected, 400);
      if (this._heartbeatTimerId) {
        this._logger.debug("DefaultTyping.keystroke(); no-op, already typing and heartbeat timer has not expired");
        return;
      }
      await this._channel.publish(bo(at.Started)), this._startHeartbeatTimer(), this._logger.trace("DefaultTyping.keystroke(); starting timers");
    } finally {
      this._logger.trace("DefaultTyping.keystroke(); releasing mutex"), this._mutex.release();
    }
  }
  async stop() {
    this._logger.trace("DefaultTyping.stop();"), this._mutex.cancel();
    try {
      await this._mutex.acquire();
    } catch (s) {
      if (s === Ys) {
        this._logger.debug("DefaultTyping.stop(); mutex was canceled by a later operation");
        return;
      }
      throw new re.ErrorInfo("unable to send typing stop event; failed to enforce sequential execution of the operation", he.OperationSerializationFailed, 500);
    }
    try {
      if (this._connection.state !== "connected") throw this._logger.error("DefaultTyping.stop(); connection is not connected", { status: this._connection.state }), new re.ErrorInfo("unable to send typing stop event; disconnected from Ably", he.Disconnected, 400);
      if (!this._heartbeatTimerId) {
        this._logger.debug("DefaultTyping.stop(); no-op, not currently typing");
        return;
      }
      await this._channel.publish(bo(at.Stopped)), this._logger.trace("DefaultTyping.stop(); clearing timers"), clearTimeout(this._heartbeatTimerId), this._heartbeatTimerId = void 0;
    } finally {
      this._logger.trace("DefaultTyping.stop(); releasing mutex"), this._mutex.release();
    }
  }
  subscribe(s) {
    this._logger.trace("DefaultTyping.subscribe();");
    const i = ut(s);
    return this.on(i), { unsubscribe: () => {
      this._logger.trace("DefaultTyping.unsubscribe();"), this.off(i);
    } };
  }
  async dispose() {
    for (this._logger.trace("DefaultTyping.dispose();"); ; ) try {
      this._mutex.cancel(), await this._mutex.acquire();
      break;
    } catch (s) {
      if (s === Ys) this._logger.debug("DefaultTyping.dispose(); mutex was canceled"), await new Promise((i) => setTimeout(i, 200)), this._logger.debug("DefaultTyping.dispose(); retrying mutex acquisition");
      else {
        this._logger.error("DefaultTyping.dispose(); failed to acquire mutex; could not complete resource disposal", { error: s });
        return;
      }
    }
    this._clearAllTypingStates(), this._unsubscribeTypingEvents(), this.off(), this._mutex.release();
  }
  _updateCurrentlyTyping(s, i, l) {
    this._logger.trace("DefaultTyping._updateCurrentlyTyping();", {
      clientId: s,
      event: i
    }), i === at.Started ? this._handleTypingStart(s, l) : this._handleTypingStop(s, l);
  }
  _buildCurrentTypers() {
    return [...this._currentlyTyping.entries()].map(([s, i]) => ({
      clientId: s,
      userClaim: i.userClaim
    }));
  }
  _startNewClientInactivityTimer(s) {
    this._logger.trace("DefaultTyping._startNewClientInactivityTimer(); starting new inactivity timer", { clientId: s });
    const i = setTimeout(() => {
      this._logger.trace("DefaultTyping._startNewClientInactivityTimer(); client typing timeout expired", { clientId: s });
      const l = this._currentlyTyping.get(s);
      if (l?.timer !== i) {
        this._logger.debug("DefaultTyping._startNewClientInactivityTimer(); timeout already cleared; ignoring", { clientId: s });
        return;
      }
      const h = l.userClaim;
      this._currentlyTyping.delete(s), this.emit($t.SetChanged, {
        type: $t.SetChanged,
        currentlyTyping: new Set(this._currentlyTyping.keys()),
        currentTypers: this._buildCurrentTypers(),
        change: {
          clientId: s,
          type: at.Stopped,
          userClaim: h
        }
      });
    }, this._heartbeatThrottleMs + this._timeoutMs);
    return i;
  }
  _handleTypingStart(s, i) {
    this._logger.debug("DefaultTyping._handleTypingStart();", { clientId: s });
    const l = this._startNewClientInactivityTimer(s), h = this._currentlyTyping.get(s);
    this._currentlyTyping.set(s, {
      timer: l,
      userClaim: i
    }), h ? (this._logger.debug("DefaultTyping._handleTypingStart(); received heartbeat for currently typing client", { clientId: s }), clearTimeout(h.timer)) : (this._logger.debug("DefaultTyping._handleTypingStart(); new client started typing", { clientId: s }), this.emit($t.SetChanged, {
      type: $t.SetChanged,
      currentlyTyping: new Set(this._currentlyTyping.keys()),
      currentTypers: this._buildCurrentTypers(),
      change: {
        clientId: s,
        type: at.Started,
        userClaim: i
      }
    }));
  }
  _handleTypingStop(s, i) {
    const l = this._currentlyTyping.get(s);
    if (!l) {
      this._logger.trace('DefaultTyping._handleTypingStop(); received "Stop" event for client not in currentlyTyping list', { clientId: s });
      return;
    }
    this._logger.debug("DefaultTyping._handleTypingStop(); client stopped typing", { clientId: s }), clearTimeout(l.timer), this._currentlyTyping.delete(s), this.emit($t.SetChanged, {
      type: $t.SetChanged,
      currentlyTyping: new Set(this._currentlyTyping.keys()),
      currentTypers: this._buildCurrentTypers(),
      change: {
        clientId: s,
        type: at.Stopped,
        userClaim: i
      }
    });
  }
  get heartbeatThrottleMs() {
    return this._heartbeatThrottleMs;
  }
  get hasHeartbeatTimer() {
    return !!this._heartbeatTimerId;
  }
}, Xl = class {
  constructor(s, i, l, h, f, m, g) {
    Bl(l), this._nonce = i, this._logger = g.withContext({
      roomName: s,
      roomNonce: i
    }), this._logger.debug("Room();", { options: l }), this._name = s, this._options = l, this._chatApi = f, this._lifecycle = new Dl(this._logger);
    const v = this._channelManager = this._getChannelManager(l, h, this._logger), C = v.get();
    this._messages = new Al(s, l.messages, C, this._chatApi, this._logger), this._presence = new yo(C, this._logger, l), this._typing = new Ql(l.typing, h.connection, C, this._logger), this._reactions = new Jl(C, h.connection, m, this._logger), this._occupancy = new mo(s, C, this._chatApi, this._logger, l), this._lifecycleManager = new Ul(v, this._lifecycle, this._logger);
    let T = !1;
    this._finalizer = async () => {
      if (T) {
        this._logger.debug("Room.finalizer(); already finalized");
        return;
      }
      await this._lifecycleManager.release(), this._lifecycleManager.dispose(), this._messages.dispose(), this._presence.dispose(), this._reactions.dispose(), this._occupancy.dispose(), await this._typing.dispose(), this._lifecycle.dispose(), T = !0;
    };
  }
  _getChannelManager(s, i, l) {
    const h = new Il(this._name, i, l, s.isReactClient);
    return h.mergeOptions(mo.channelOptionMerger(s)), h.mergeOptions(yo.channelOptionMerger(s)), h.mergeOptions(Ho.channelOptionMerger(s)), h;
  }
  get name() {
    return this._name;
  }
  options() {
    return Pt(this._options);
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
  onStatusChange(s) {
    return this._lifecycle.onChange(s);
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
  onDiscontinuity(s) {
    return this._logger.trace("Room.onDiscontinuity();"), this._lifecycleManager.onDiscontinuity(s);
  }
  get channel() {
    return this._channelManager.get();
  }
}, Yl = class {
  constructor(s, i, l, h) {
    this._rooms = /* @__PURE__ */ new Map(), this._releasing = /* @__PURE__ */ new Map(), this._isReact = !1, this._disposed = !1, this._realtime = s, this._chatApi = new Sl(s, l, h), this._clientIdResolver = i, this._logger = l;
  }
  async get(s, i) {
    this._logger.trace("Rooms.get();", { roomName: s }), this._ensureNotDisposed();
    const l = this._rooms.get(s);
    if (l) return this._handleExistingRoom(l, s, i);
    const h = this._releasing.get(s), f = Uo();
    return h ? this._waitForReleaseAndCreateRoom(s, f, i, h) : this._createNewRoom(s, f, i);
  }
  async release(s) {
    this._logger.trace("Rooms.release();", { roomName: s });
    const i = this._rooms.get(s), l = this._releasing.get(s);
    return i ? l ? this._handleConcurrentRelease(s, i, l) : this._performRoomRelease(s, i) : this._handleNonExistentRoomRelease(s, l);
  }
  async dispose() {
    this._logger.trace("Rooms.dispose();"), this._disposed = !0;
    const s = [...this._rooms.keys()];
    if (s.length === 0) {
      this._logger.debug("Rooms.dispose(); no rooms to release");
      return;
    }
    const i = s.map(async (f) => this.release(f)), l = [...this._releasing.values()], h = [...i, ...l];
    this._logger.debug("Rooms.dispose(); releasing rooms", {
      roomCount: s.length,
      roomNames: s
    }), await Promise.all(h), this._logger.debug("Rooms.dispose(); all rooms released successfully");
  }
  get count() {
    return this._rooms.size;
  }
  _ensureNotDisposed() {
    if (this._disposed) throw new re.ErrorInfo("unable to get room; rooms instance has been disposed", he.ResourceDisposed, 400);
  }
  async _handleExistingRoom(s, i, l) {
    if (!es(s.options, l)) throw new re.ErrorInfo("unable to get room; room already exists with different options", he.RoomExistsWithDifferentOptions, 400);
    return this._logger.debug("Rooms.get(); returning existing room", {
      roomName: i,
      nonce: s.nonce,
      options: l
    }), await s.promise;
  }
  _createNewRoom(s, i, l) {
    const h = this._makeRoom(s, i, l), f = {
      promise: Promise.resolve(h),
      nonce: i,
      options: l
    };
    return this._rooms.set(s, f), this._logger.debug("Rooms.get(); returning new room", {
      roomName: s,
      nonce: h.nonce
    }), h;
  }
  async _waitForReleaseAndCreateRoom(s, i, l, h) {
    const f = new AbortController(), m = this._createAbortableRoomPromise(s, i, l, h, f);
    return this._rooms.set(s, {
      promise: m,
      options: l,
      nonce: i,
      abort: f
    }), this._logger.debug("Rooms.get(); creating new promise dependent on previous release", { roomName: s }), await m;
  }
  async _createAbortableRoomPromise(s, i, l, h, f) {
    const m = new Promise((g, v) => {
      const C = () => {
        this._logger.debug("Rooms.get(); aborted before init", { roomName: s }), v(new re.ErrorInfo("unable to get room; room released before operation could complete", he.RoomReleasedBeforeOperationCompleted, 400));
      };
      f.signal.addEventListener("abort", C, { once: !0 });
    });
    return await Promise.race([h, m]), this._logger.debug("Rooms.get(); releasing finished", { roomName: s }), this._makeRoom(s, i, l);
  }
  async _handleNonExistentRoomRelease(s, i) {
    if (i) {
      this._logger.debug("Rooms.release(); waiting for previous release call", { roomName: s }), await i;
      return;
    }
    this._logger.debug("Rooms.release(); room does not exist", { roomName: s });
  }
  async _handleConcurrentRelease(s, i, l) {
    i.abort && (this._logger.debug("Rooms.release(); aborting get call", {
      roomName: s,
      existingNonce: i.nonce
    }), i.abort.abort(), this._rooms.delete(s)), await l;
  }
  async _performRoomRelease(s, i) {
    this._rooms.delete(s);
    const l = this._executeRoomRelease(s, i);
    this._releasing.set(s, l), this._logger.debug("Rooms.release(); creating new release promise", {
      roomName: s,
      nonce: i.nonce
    }), await l;
  }
  async _executeRoomRelease(s, i) {
    const l = await i.promise;
    this._logger.debug("Rooms.release(); releasing room", {
      roomName: s,
      nonce: i.nonce
    }), await l.release(), this._logger.debug("Rooms.release(); room released", {
      roomName: s,
      nonce: i.nonce
    }), this._releasing.delete(s);
  }
  _makeRoom(s, i, l) {
    return new Xl(s, i, zl(l, this._isReact), this._realtime, this._chatApi, this._clientIdResolver, this._logger);
  }
  useReact() {
    this._logger.trace("Rooms.useReact();"), this._isReact = !0;
  }
}, Zl = class {
  constructor(s, i) {
    this._realtime = s, this._clientOptions = dl(i), this._nonce = Uo(), this._logger = hl(this._clientOptions).withContext({ chatClientNonce: this._nonce }), this._connection = new pl(s, this._logger), this._clientIdResolver = new cl(s, this._logger), this._rooms = new Yl(s, this._clientIdResolver, this._logger, this._clientOptions.idempotentRestPublishing), this._addAgent("chat-js"), this._logger.trace(`ably chat client version ${Zs}; initialized`);
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
  addAgentWithVersion(s, i) {
    this._addAgent(s, i), this._logger.trace(`Added agent ${s} with version ${i}`);
  }
  async dispose() {
    this._logger.trace("ChatClient.dispose();"), await this._rooms.dispose(), this._connection.dispose(), this._logger.debug("ChatClient.dispose(); client disposed successfully");
  }
  _addAgent(s, i) {
    const l = this._realtime;
    l.options.agents = {
      ...l.options.agents ?? l.options.agents,
      [s]: i ?? Zs
    };
  }
}, $o = nr(void 0);
re.Realtime.EventEmitter;
var mn = /* @__PURE__ */ ((s) => (s.Initialized = "initialized", s.Connecting = "connecting", s.Connected = "connected", s.Disconnected = "disconnected", s.Suspended = "suspended", s.Failed = "failed", s.Closing = "closing", s.Closed = "closed", s))(mn || {}), _n = /* @__PURE__ */ ((s) => (s[s.BadRequest = 4e4] = "BadRequest", s[s.InvalidArgument = 40003] = "InvalidArgument", s[s.InvalidClientId = 40012] = "InvalidClientId", s[s.ResourceDisposed = 40014] = "ResourceDisposed", s[s.MessageRejectedByBeforePublishRule = 42211] = "MessageRejectedByBeforePublishRule", s[s.MessageRejectedByModeration = 42213] = "MessageRejectedByModeration", s[s.Disconnected = 80003] = "Disconnected", s[s.PresenceAutoReentryFailed = 91004] = "PresenceAutoReentryFailed", s[s.RoomDiscontinuity = 102100] = "RoomDiscontinuity", s[s.RoomInInvalidState = 102112] = "RoomInInvalidState", s[s.RoomReleasedBeforeOperationCompleted = 102106] = "RoomReleasedBeforeOperationCompleted", s[s.RoomExistsWithDifferentOptions = 102107] = "RoomExistsWithDifferentOptions", s[s.FeatureNotEnabledInRoom = 102108] = "FeatureNotEnabledInRoom", s[s.ListenerNotSubscribed = 102109] = "ListenerNotSubscribed", s[s.ChannelSerialNotDefined = 102110] = "ChannelSerialNotDefined", s[s.ChannelOptionsCannotBeModified = 102111] = "ChannelOptionsCannotBeModified", s[s.OperationSerializationFailed = 102113] = "OperationSerializationFailed", s[s.ReactHookMustBeUsedWithinProvider = 102200] = "ReactHookMustBeUsedWithinProvider", s[s.ReactComponentUnmounted = 102201] = "ReactComponentUnmounted", s[s.PresenceFetchFailed = 102202] = "PresenceFetchFailed", s))(_n || {}), vo = /* @__PURE__ */ Symbol.for("__ABLY_CHAT_CLIENT_CONTEXT__"), _o = typeof globalThis > "u" ? {} : globalThis, eh = () => {
  let s = _o[vo];
  return s ??= _o[vo] = tr.createContext({}), s;
}, er = eh(), wo = Object.prototype.hasOwnProperty;
function Co(s, i, l) {
  for (l of s.keys()) if (ss(l, i)) return l;
}
function ss(s, i) {
  var l, h, f;
  if (s === i) return !0;
  if (s && i && (l = s.constructor) === i.constructor) {
    if (l === Date) return s.getTime() === i.getTime();
    if (l === RegExp) return s.toString() === i.toString();
    if (l === Array) {
      if ((h = s.length) === i.length) for (; h-- && ss(s[h], i[h]); ) ;
      return h === -1;
    }
    if (l === Set) {
      if (s.size !== i.size) return !1;
      for (h of s) if (f = h, f && typeof f == "object" && (f = Co(i, f), !f) || !i.has(f)) return !1;
      return !0;
    }
    if (l === Map) {
      if (s.size !== i.size) return !1;
      for (h of s) if (f = h[0], f && typeof f == "object" && (f = Co(i, f), !f) || !ss(h[1], i.get(f))) return !1;
      return !0;
    }
    if (l === ArrayBuffer) s = new Uint8Array(s), i = new Uint8Array(i);
    else if (l === DataView) {
      if ((h = s.byteLength) === i.byteLength) for (; h-- && s.getInt8(h) === i.getInt8(h); ) ;
      return h === -1;
    }
    if (ArrayBuffer.isView(s)) {
      if ((h = s.byteLength) === i.byteLength) for (; h-- && s[h] === i[h]; ) ;
      return h === -1;
    }
    if (!l || typeof s == "object") {
      h = 0;
      for (l in s) if (wo.call(s, l) && ++h && !wo.call(i, l) || !(l in i) || !ss(s[l], i[l])) return !1;
      return Object.keys(i).length === h;
    }
  }
  return s !== s && i !== i;
}
var li = (s) => {
  if (s === null || typeof s != "object") return s;
  if (Array.isArray(s)) return s.sort().map((h) => li(h));
  const i = {}, l = Object.keys(s).sort();
  for (const h of l) i[h] = li(s[h]);
  return i;
}, th = (s, i) => {
  if (i === void 0) return;
  if (i === null || typeof i != "object") return i;
  if (Array.isArray(i)) return i.sort().map((f) => li(f));
  const l = {}, h = Object.keys(i).sort();
  for (const f of h) l[f] = i[f];
  return l;
}, zs = (s, i) => JSON.stringify({
  roomName: s,
  options: i
}, th), nh = class {
  constructor(s, i) {
    this._refCounts = /* @__PURE__ */ new Map(), this._releaseDelayMs = 100, this._pendingReleases = /* @__PURE__ */ new Map(), this._client = s, this._logger = i;
  }
  get client() {
    return this._client;
  }
  async addReference(s, i) {
    this._logger.trace("RoomReferenceManager.addReference();");
    const l = zs(s, i), h = this._refCounts.get(l);
    if (h) return h.pendingRelease && (clearTimeout(h.pendingRelease), h.pendingRelease = void 0, this._logger.debug("RoomReferenceManager.addReference(); aborted pending release", {
      roomName: s,
      options: i
    })), h.count++, this._logger.debug("RoomReferenceManager.addReference(); incremented ref count", {
      roomName: s,
      options: i,
      count: h.count
    }), h.resolvedRoom ? h.resolvedRoom : new Promise((v, C) => {
      const T = setInterval(() => {
        h.resolvedRoom ? (clearInterval(T), v(h.resolvedRoom)) : h.resolutionError && (clearInterval(T), C(h.resolutionError));
      }, 100);
    });
    const f = this._pendingReleases.get(s);
    if (f) {
      this._logger.debug("RoomReferenceManager.addReference(); waiting for pending release to complete", {
        roomName: s,
        options: i
      });
      try {
        await f;
      } catch (v) {
        this._logger.debug("RoomReferenceManager.addReference(); pending release failed, continuing", {
          roomName: s,
          options: i,
          error: v
        });
      }
    }
    const m = [...this._refCounts.values()].find((v) => v.roomName === s && !ss(v.options, i));
    if (m) {
      const v = m.pendingRelease !== void 0, C = m.count <= 0;
      if (!v && !C) throw new re.ErrorInfo(`unable to get room reference; room "${s}" is already in use with different options`, _n.RoomExistsWithDifferentOptions, 400);
      this._logger.debug("RoomReferenceManager.addReference(); found existing room with different options, releasing it first", {
        roomName: s,
        newOptions: i,
        existingOptions: m.options,
        hasPendingRelease: v,
        hasZeroRefCount: C
      }), m.pendingRelease && (clearTimeout(m.pendingRelease), m.pendingRelease = void 0);
      const T = zs(s, m.options);
      this._refCounts.delete(T);
      const A = this._client.rooms.release(s).catch((M) => {
        this._logger.debug("RoomReferenceManager.addReference(); release of existing room failed", {
          roomName: s,
          error: M
        });
      }).finally(() => {
        this._pendingReleases.delete(s);
      });
      this._pendingReleases.set(s, A);
      try {
        await A;
      } catch (M) {
        this._logger.debug("RoomReferenceManager.addReference(); release of existing room failed, continuing", {
          roomName: s,
          error: M
        });
      }
    }
    const g = {
      count: 1,
      roomName: s,
      options: i
    };
    this._refCounts.set(l, g), this._logger.debug("RoomReferenceManager.addReference(); first reference, attaching room", {
      roomName: s,
      options: i
    });
    try {
      const v = await this._client.rooms.get(s, i);
      return g.resolvedRoom = v, v.attach().catch((C) => {
        this._logger.error("RoomReferenceManager.addReference(); error attaching room", {
          roomName: s,
          options: i,
          error: C
        });
      }), v;
    } catch (v) {
      throw g.resolutionError = v, this._refCounts.delete(l), this._logger.error("RoomReferenceManager.addReference(); error creating room", {
        roomName: s,
        options: i,
        error: v
      }), v;
    }
  }
  removeReference(s, i) {
    this._logger.trace("RoomReferenceManager.removeReference();");
    const l = zs(s, i), h = this._refCounts.get(l);
    if (!h) {
      this._logger.debug("RoomReferenceManager.removeReference(); no existing reference found", {
        roomName: s,
        options: i
      });
      return;
    }
    h.count--, this._logger.debug("RoomReferenceManager.removeReference(); decremented ref count", {
      roomName: s,
      options: i,
      count: h.count
    }), h.count <= 0 && (this._logger.debug("RoomReferenceManager.removeReference(); scheduling delayed release", {
      roomName: s,
      options: i,
      delayMs: this._releaseDelayMs
    }), h.pendingRelease = setTimeout(() => {
      const f = this._refCounts.get(l);
      if (f && f.count <= 0) {
        this._refCounts.delete(l), this._logger.debug("RoomReferenceManager.removeReference(); executing delayed release", {
          roomName: s,
          options: i
        });
        const m = this._client.rooms.release(s).catch((g) => {
          this._logger.debug("RoomReferenceManager.removeReference(); release failed", {
            roomName: s,
            options: i,
            error: g
          });
        }).finally(() => {
          this._pendingReleases.delete(s);
        });
        this._pendingReleases.set(s, m);
      }
    }, this._releaseDelayMs));
  }
  getReferenceCount(s, i) {
    this._logger.trace("RoomReferenceManager.getReferenceCount();");
    const l = zs(s, i);
    return this._refCounts.get(l)?.count ?? 0;
  }
}, Ko = /* @__PURE__ */ Symbol("roomReferenceManager"), sh = () => {
  const s = Qr.useContext(er)[Ko];
  if (!s) throw new re.ErrorInfo("unable to get room reference manager; useRoomReferenceManager must be used within a ChatClientProvider", _n.ReactHookMustBeUsedWithinProvider, 400);
  return s;
}, Jo = "default", rh = ({ children: s, client: i }) => {
  const l = Qr.useContext(er), h = ve(void 0), f = Qr.useMemo(() => {
    if (i.addReactAgent(), h.current?.client !== i) {
      const g = i.logger;
      h.current = new nh(i, g);
    }
    const m = globalThis.__ABLY_CHAT_REACT_UI_KIT_VERSION__;
    return typeof m == "string" && i.addAgentWithVersion("chat-react-ui-kit", m), {
      ...l,
      [Jo]: { client: i },
      [Ko]: h.current
    };
  }, [i, l]);
  return /* @__PURE__ */ S(er.Provider, {
    value: f,
    children: s
  });
}, is = () => {
  const s = tr.useContext(er)[Jo];
  if (!s) throw new re.ErrorInfo("unable to get chat client; useChatClient hook must be used within a chat client provider", _n.ReactHookMustBeUsedWithinProvider, 400);
  return s.client;
}, Qt = (s) => {
  const i = sr($o);
  if (!i) throw new re.ErrorInfo(`unable to get room context; ${s} hook must be used within a <ChatRoomProvider>`, _n.ReactHookMustBeUsedWithinProvider, 400);
  return i;
}, ui = () => {
  const s = is();
  return lt(() => s.logger, [s]);
}, wn = () => {
  const s = Qt("useRoomLogger"), i = is();
  return lt(() => i.logger.withContext({ roomName: s.roomName }), [i, s]);
}, Qo = () => {
  const s = is(), i = ui(), [l, h] = ae(() => (i.debug("useChatClient(); setting initial clientId", { clientId: s.clientId }), s.clientId));
  return ie(() => {
    i.debug("useChatClient(); subscribing to connection status changes", { clientId: s.clientId }), h(s.clientId);
    const { off: f } = s.connection.onStatusChange((m) => {
      m.current === mn.Connected && (i.debug("useChatClient(); connection status is now connected", { clientId: s.clientId }), h(s.clientId));
    });
    return () => {
      i.debug("useChatClient(); unsubscribing from connection status changes"), f();
    };
  }, [s, i]), { clientId: l };
}, ct = (s) => {
  const i = ve(s);
  ie(() => {
    i.current = s;
  });
  const l = G((...h) => {
    i.current && i.current(...h);
  }, []);
  return s ? l : void 0;
}, os = (s) => {
  const i = is(), l = ui();
  l.trace("useChatConnection();", s);
  const [h, f] = ae(i.connection.status), [m, g] = ae(i.connection.error);
  ie(() => {
    g(i.connection.error), f(i.connection.status);
  }, [i]);
  const v = ct(s?.onStatusChange);
  return ie(() => {
    l.debug("useChatConnection(); applying internal listener");
    const { off: C } = i.connection.onStatusChange((T) => {
      f(T.current), g(T.error);
    });
    return () => {
      l.debug("useChatConnection(); cleaning up listener"), C();
    };
  }, [i.connection, l]), ie(() => {
    if (!v) return;
    l.debug("useChatConnection(); applying client listener");
    const { off: C } = i.connection.onStatusChange(v);
    return () => {
      l.debug("useChatConnection(); cleaning up client listener"), C();
    };
  }, [
    i.connection,
    l,
    v
  ]), {
    currentStatus: h,
    error: m
  };
}, ih = class {
  constructor(s, i, l) {
    this._unmounted = !1, this._onResolve = i, this._logger = l, this.mount(s).catch((h) => {
      this._logger.trace("DefaultRoomPromise(); mount error", { error: h });
    });
  }
  async mount(s) {
    this._logger.debug("DefaultRoomPromise(); mount");
    try {
      const i = await s;
      if (this._unmounted) return;
      this._logger.debug("DefaultRoomPromise(); mount resolved"), this._onUnmount = this._onResolve(i);
    } catch (i) {
      this._logger.error("DefaultRoomPromise(); mount error", { error: i });
    }
  }
  unmount() {
    return this._unmounted ? () => {
    } : () => {
      this._logger.debug("DefaultRoomPromise(); unmount"), this._unmounted = !0, this._onUnmount?.();
    };
  }
}, We = (s, i, l) => new ih(s, i, l), Kt = /* @__PURE__ */ ((s) => (s.Initializing = "initializing", s.Initialized = "initialized", s.Attaching = "attaching", s.Attached = "attached", s.Detaching = "detaching", s.Detached = "detached", s.Suspended = "suspended", s.Failed = "failed", s.Releasing = "releasing", s.Released = "released", s))(Kt || {}), as = (s) => {
  const i = Qt("useRoomStatus"), [l, h] = ae(Kt.Initializing), [f, m] = ae(), g = wn(), v = ct(s?.onRoomStatusChange);
  return ie(() => We(i.room, (C) => {
    g.debug("useRoomStatus(); subscribing internal listener"), h(C.status), m(C.error);
    const { off: T } = C.onStatusChange((A) => {
      g.debug("useRoomStatus(); status change", A), h(A.current), m(A.error);
    });
    return () => {
      g.debug("useRoomStatus(); unsubscribing internal listener"), T();
    };
  }, g).unmount(), [i, g]), ie(() => We(i.room, (C) => {
    let T;
    return v && (g.debug("useRoomStatus(); subscribing to status changes"), T = C.onStatusChange(v).off), g.debug("useRoomStatus(); setting initial status", { status: C.status }), v && (g.debug("useRoomStatus(); sending initial status event"), v({
      current: C.status,
      previous: Kt.Initializing,
      error: C.error
    })), () => {
      g.debug("useRoomStatus(); unmounting"), T && (g.debug("useRoomStatus(); unsubscribing from status changes"), T());
    };
  }, g).unmount(), [
    i,
    g,
    v
  ]), {
    status: l,
    error: f
  };
}, di = (s) => {
  const { currentStatus: i, error: l } = os({ onStatusChange: s?.onConnectionStatusChange }), h = Qt("useMessages"), { status: f, error: m } = as(s), g = wn();
  g.trace("useMessages();", { params: s });
  const v = ct(s?.listener), C = ct(s?.reactionsListener), T = ct(s?.rawReactionsListener), A = ct(s?.onDiscontinuity), M = G(async (J) => (await h.room).messages.send(J), [h]), L = G(async (J) => (await h.room).messages.get(J), [h]), E = G(async (J, D) => (await h.room).messages.delete(J, D), [h]), j = G(async (J) => (await h.room).messages.history(J), [h]), te = G(async (J, D, y) => (await h.room).messages.update(J, D, y), [h]), B = G(async (J, D) => (await h.room).messages.reactions.send(J, D), [h]), X = G(async (J, D) => (await h.room).messages.reactions.delete(J, D), [h]), [Z, ne] = ae();
  return ie(() => {
    if (v) return We(h.room, (J) => {
      let D = !1;
      g.debug("useMessages(); applying listener");
      const y = J.messages.subscribe(v);
      return ne(() => {
        if (g.debug("useMessages(); setting historyBeforeSubscribe state", {
          status: J.status,
          unmounted: D
        }), !D) return async (ue) => {
          if (g.debug("useMessages(); historyBeforeSubscribe called"), D) throw new re.ErrorInfo("unable to query messages; component unmounted", _n.ReactComponentUnmounted, 400);
          return y.historyBeforeSubscribe(ue);
        };
      }), () => {
        g.debug("useMessages(); removing listener and historyBeforeSubscribe state"), D = !0, y.unsubscribe(), ne(void 0);
      };
    }, g).unmount();
  }, [
    h,
    g,
    v
  ]), ie(() => {
    if (A) return We(h.room, (J) => {
      g.debug("useMessages(); applying onDiscontinuity listener");
      const { off: D } = J.onDiscontinuity(A);
      return () => {
        g.debug("useMessages(); removing onDiscontinuity listener"), D();
      };
    }, g).unmount();
  }, [
    h,
    g,
    A
  ]), ie(() => {
    if (C) return We(h.room, (J) => {
      g.debug("useMessages(); applying reactions listener");
      const { unsubscribe: D } = J.messages.reactions.subscribe(C);
      return () => {
        g.debug("useMessages(); removing reactions listener"), D();
      };
    }, g).unmount();
  }, [
    h,
    g,
    C
  ]), ie(() => {
    if (T) return We(h.room, (J) => {
      g.debug("useMessages(); applying raw reactions listener");
      const { unsubscribe: D } = J.messages.reactions.subscribeRaw(T);
      return () => {
        g.debug("useMessages(); removing raw reactions listener"), D();
      };
    }, g).unmount();
  }, [
    h,
    g,
    T
  ]), {
    connectionStatus: i,
    connectionError: l,
    roomStatus: f,
    roomError: m,
    sendMessage: M,
    getMessage: L,
    updateMessage: te,
    history: j,
    deleteMessage: E,
    sendReaction: B,
    deleteReaction: X,
    historyBeforeSubscribe: Z
  };
}, oh = (s) => {
  const { currentStatus: i, error: l } = os({ onStatusChange: s?.onConnectionStatusChange }), h = Qt("useOccupancy"), { status: f, error: m } = as(s), g = wn();
  g.trace("useOccupancy();", { params: s });
  const [v, C] = ae({
    connections: 0,
    presenceMembers: 0
  }), T = ct(s?.listener), A = ct(s?.onDiscontinuity);
  return ie(() => {
    if (A) return We(h.room, (M) => {
      g.debug("useOccupancy(); applying onDiscontinuity listener");
      const { off: L } = M.onDiscontinuity(A);
      return () => {
        g.debug("useOccupancy(); removing onDiscontinuity listener"), L();
      };
    }, g).unmount();
  }, [
    h,
    A,
    g
  ]), ie(() => We(h.room, (M) => {
    g.debug("useOccupancy(); applying internal listener");
    const L = M.occupancy.current;
    C({
      connections: L?.connections ?? 0,
      presenceMembers: L?.presenceMembers ?? 0
    });
    const { unsubscribe: E } = M.occupancy.subscribe((j) => {
      C({
        connections: j.occupancy.connections,
        presenceMembers: j.occupancy.presenceMembers
      });
    });
    return () => {
      g.debug("useOccupancy(); cleaning up internal listener"), E();
    };
  }, g).unmount(), [h, g]), ie(() => {
    if (T) return We(h.room, (M) => {
      g.debug("useOccupancy(); applying listener");
      const { unsubscribe: L } = M.occupancy.subscribe(T);
      return () => {
        g.debug("useOccupancy(); cleaning up listener"), L();
      };
    }, g).unmount();
  }, [
    T,
    h,
    g
  ]), {
    connectionStatus: i,
    connectionError: l,
    roomStatus: f,
    roomError: m,
    connections: v.connections,
    presenceMembers: v.presenceMembers
  };
}, Ro = /* @__PURE__ */ new Set([
  mn.Suspended,
  mn.Failed,
  mn.Closing,
  mn.Closed
]), ah = (s) => {
  const { currentStatus: i, error: l } = os({ onStatusChange: s?.onConnectionStatusChange }), h = Qt("usePresence"), { status: f, error: m } = as(s), g = wn();
  g.trace("usePresence();", { params: s });
  const v = lt(() => s?.autoEnterLeave !== !1, [s?.autoEnterLeave]), [C, T] = ae({
    present: !1,
    error: void 0
  }), A = ve({
    roomStatus: f,
    connectionStatus: i
  }), M = ct(s?.onDiscontinuity), L = ve(s?.initialData), E = ve(!1), j = ve(!1), te = ve(!1);
  return ie(() => {
    j.current = !1, te.current = !1;
  }, [h]), ie(() => {
    A.current = {
      roomStatus: f,
      connectionStatus: i
    }, f === Kt.Detached && (te.current = !0);
  }, [f, i]), ie(() => (g.debug("usePresence(); subscribing to presence state changes"), We(h.room, (B) => {
    const X = B.presence.onPresenceStateChange((Z) => {
      g.debug("usePresence(); presence state changed", { stateChange: Z }), T({
        ...Z.current,
        error: Z.error
      });
    });
    return () => {
      g.debug("usePresence(); unsubscribing from presence state changes"), X.unsubscribe();
    };
  }, g).unmount()), [h, g]), ie(() => (g.debug("usePresence(); running auto-enter hook"), v ? We(h.room, (B) => {
    const X = B.status === Kt.Attached && !Ro.has(i), Z = !j.current || te.current;
    return !X || E.current || !Z ? (g.debug("usePresence(); skipping enter room", {
      roomStatus: f,
      connectionStatus: i,
      hasExplicitlyLeft: E.current,
      shouldAutoEnter: Z,
      hasAutoEntered: j.current,
      roomWasDetached: te.current
    }), () => {
    }) : (g.debug("usePresence(); entering room"), B.presence.enter(L.current).then(() => {
      g.debug("usePresence(); entered room"), j.current = !0, te.current = !1;
    }).catch((ne) => {
      g.error("usePresence(); error entering room", { error: ne });
    }), () => {
      const ne = B.status === Kt.Attached && !Ro.has(A.current.connectionStatus);
      g.debug("usePresence(); unmounting", {
        canLeavePresence: ne,
        roomStatus: f,
        connectionStatus: i
      }), ne && !E.current && B.presence.leave().then(() => {
        g.debug("usePresence(); left room");
      }).catch((J) => {
        g.error("usePresence(); error leaving room", { error: J });
      });
    });
  }, g).unmount() : (g.debug("usePresence(); auto enter/leave disabled"), () => {
  })), [
    h,
    i,
    f,
    g,
    v
  ]), ie(() => {
    if (M) return We(h.room, (B) => {
      const { off: X } = B.onDiscontinuity(M);
      return () => {
        g.debug("usePresence(); removing onDiscontinuity listener"), X();
      };
    }, g).unmount();
  }, [
    h,
    M,
    g
  ]), {
    connectionStatus: i,
    connectionError: l,
    roomStatus: f,
    roomError: m,
    update: G(async (B) => {
      L.current = B, E.current = !1, await (await h.room).presence.update(B);
    }, [h]),
    enter: G(async (B) => {
      L.current = B, E.current = !1, await (await h.room).presence.enter(B);
    }, [h]),
    leave: G(async (B) => {
      E.current = !0, await (await h.room).presence.leave(B);
    }, [h]),
    myPresenceState: C
  };
}, Xo = (s) => {
  const i = Qt("useRoom"), l = i.roomName;
  wn().debug("useRoom();");
  const { currentStatus: h, error: f } = os({ onStatusChange: s?.onConnectionStatusChange }), m = as({ onRoomStatusChange: s?.onStatusChange });
  return {
    roomName: l,
    attach: G(async () => (await i.room).attach(), [i]),
    detach: G(async () => (await i.room).detach(), [i]),
    roomStatus: m.status,
    roomError: m.error,
    connectionStatus: h,
    connectionError: f
  };
}, Yo = (s) => {
  const { currentStatus: i, error: l } = os({ onStatusChange: s?.onConnectionStatusChange }), h = Qt("useTyping"), { status: f, error: m } = as(s), g = wn();
  g.trace("useTyping();");
  const [v, C] = ae(/* @__PURE__ */ new Set()), [T, A] = ae([]), M = ct(s?.listener), L = ct(s?.onDiscontinuity);
  return ie(() => (C((E) => E.size === 0 ? E : /* @__PURE__ */ new Set()), A((E) => E.length === 0 ? E : []), We(h.room, (E) => {
    g.debug("useTyping(); subscribing to typing events");
    const { unsubscribe: j } = E.typing.subscribe((te) => {
      C(te.currentlyTyping), A(te.currentTypers);
    });
    if (E.status === Kt.Attached) {
      const te = E.typing.current;
      g.debug("useTyping(); room attached, getting initial typers", { typing: te }), C(te), A(E.typing.currentTypers);
    }
    return () => {
      g.debug("useTyping(); unsubscribing from typing events"), j();
    };
  }, g).unmount()), [h, g]), ie(() => {
    if (L) return We(h.room, (E) => {
      g.debug("useTyping(); applying onDiscontinuity listener");
      const { off: j } = E.onDiscontinuity(L);
      return () => {
        g.debug("useTyping(); removing onDiscontinuity listener"), j();
      };
    }, g).unmount();
  }, [
    h,
    L,
    g
  ]), ie(() => {
    if (M) return We(h.room, (E) => {
      g.debug("useTyping(); applying listener");
      const { unsubscribe: j } = E.typing.subscribe(M);
      return () => {
        g.debug("useTyping(); removing listener"), j();
      };
    }, g).unmount();
  }, [
    h,
    M,
    g
  ]), {
    connectionStatus: i,
    connectionError: l,
    roomStatus: f,
    roomError: m,
    keystroke: G(async () => (await h.room).typing.keystroke(), [h]),
    stop: G(async () => (await h.room).typing.stop(), [h]),
    currentlyTyping: v,
    currentTypers: T
  };
}, ch = ({ name: s, options: i, children: l }) => {
  const h = is(), f = ui(), m = lt(() => f.withContext({ roomName: s }), [f, s]), g = sh();
  m.debug("ChatRoomProvider();", { options: i });
  const [v, C] = ae(() => {
    m.debug("ChatRoomProvider(); initializing value", { options: i });
    const T = h.rooms.get(s, i);
    return T.catch(() => {
    }), {
      room: T,
      roomName: s,
      options: i,
      client: h
    };
  });
  return ie(() => {
    m.debug("ChatRoomProvider(); running lifecycle useEffect");
    let T = !1;
    const A = g.addReference(s, i);
    return C((M) => M.client === h && M.roomName === s && M.options === i ? (m.debug("ChatRoomProvider(); no change in room id or options", { options: i }), M) : (m.debug("ChatRoomProvider(); updating value", { options: i }), {
      room: A,
      roomName: s,
      options: i,
      client: h
    })), A.then(() => {
      if (T) {
        m.debug("ChatRoomProvider(); unmounted before room resolved");
        return;
      }
      m.debug("ChatRoomProvider(); room resolved");
    }).catch(() => {
    }), () => {
      T = !0, m.debug("ChatRoomProvider(); cleaning up lifecycle useEffect"), g.removeReference(s, i);
    };
  }, [
    s,
    i,
    m,
    h,
    g
  ]), /* @__PURE__ */ S($o.Provider, {
    value: v,
    children: l
  });
};
function Zo(s) {
  var i, l, h = "";
  if (typeof s == "string" || typeof s == "number") h += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var f = s.length;
    for (i = 0; i < f; i++) s[i] && (l = Zo(s[i])) && (h && (h += " "), h += l);
  } else for (l in s) s[l] && (h && (h += " "), h += l);
  return h;
}
function xe() {
  for (var s, i, l = 0, h = "", f = arguments.length; l < f; l++) (s = arguments[l]) && (i = Zo(s)) && (h && (h += " "), h += i);
  return h;
}
var lh = ({ windowSize: s = 200, overscan: i = 20, historyBatchSize: l = 300 } = {}) => {
  const h = ve(void 0), f = ve(/* @__PURE__ */ new Set()), m = ve(!1), g = ve([]), [v, C] = ae(0), [T, A] = ae([]), [M, L] = ae(-1), [E, j] = ae(!1), { roomName: te } = Xo();
  ie(() => {
    g.current = [], f.current = /* @__PURE__ */ new Set(), h.current = void 0, m.current = !1, C(0), A([]), L(-1);
  }, [te]);
  const { historyBeforeSubscribe: B } = di({
    listener: (W) => {
      const { message: z, type: a } = W;
      switch (a) {
        case ht.Created:
        case ht.Updated:
        case ht.Deleted:
          D([z]);
          break;
        default:
          console.error("Unknown message event type:", a);
      }
    },
    reactionsListener: (W) => {
      C((z) => {
        const a = W.messageSerial;
        let ce = !1;
        if (f.current.has(a)) {
          const F = ne(g.current, a);
          if (F !== -1 && g.current[F]) {
            const se = g.current[F], _ = se.with(W);
            _ !== se && (g.current[F] = _, ce = !0);
          }
        }
        return ce ? z + 1 : z;
      });
    },
    onDiscontinuity: () => {
      ue();
    }
  }), [X, Z] = ae(!!B), ne = G((W, z, a = !1) => {
    if (W.length === 0) return -1;
    let ce = 0, F = W.length - 1;
    for (; ce <= F; ) {
      const se = Math.floor((ce + F) / 2), _ = W[se];
      if (!_) return -1;
      const U = _.serial;
      if (U === z) return se;
      (a ? U > z : U < z) ? ce = se + 1 : F = se - 1;
    }
    return -1;
  }, []), J = G((W, z) => {
    let a = 0, ce = W.length;
    for (; a < ce; ) {
      const F = Math.floor((a + ce) / 2), se = W[F];
      if (!se) return -1;
      z.serial < se.serial ? ce = F : a = F + 1;
    }
    return a;
  }, []), D = G((W, z = !1) => {
    W.length !== 0 && C((a) => {
      a === 0 && g.current.length > 0 && (g.current = [], f.current.clear());
      let ce = !1, F = 0;
      const se = g.current;
      for (const _ of W) {
        if (f.current.has(_.serial)) {
          const x = ne(se, _.serial), qe = g.current[x], Ke = qe?.with(_);
          Ke && Ke !== qe && (g.current[x] = Ke, ce = !0);
          continue;
        }
        const U = se[0], fe = se.at(-1);
        if (z && (se.length === 0 || U && _.serial < U.serial)) se.unshift(_), M !== -1 && (F += 1);
        else if (se.length === 0 || fe && _.serial > fe.serial) se.push(_);
        else {
          const x = J(se, _);
          se.splice(x, 0, _), M !== -1 && x <= M && (F += 1);
        }
        f.current.add(_.serial), ce = !0;
      }
      return ce && F && L((_) => _ === -1 ? _ : _ + F), ce ? a + 1 : a;
    });
  }, [
    M,
    J,
    ne
  ]), y = G(async (W, z) => {
    if (B) {
      j(!0);
      try {
        const a = await B({ limit: W });
        if (z != null && z.current) return;
        D(a.items, !0), h.current = a.hasNext() ? () => a.next() : void 0, Z(a.hasNext());
      } catch (a) {
        console.error("History load failed", a), z != null && z.current || (m.current = !1);
      } finally {
        z != null && z.current || j(!1);
      }
    }
  }, [B, D]), ue = G(() => {
    C(0), y(l);
  }, [y, l]);
  ie(() => {
    m.current = !1;
  }, [B]), ie(() => {
    if (!B || m.current) return;
    const W = { current: !1 };
    return m.current = !0, (async () => await y(s + i * 2, W))(), () => {
      W.current = !0;
    };
  }, [
    B,
    i,
    s,
    y
  ]);
  const $ = G(async () => {
    if (!(E || !X || !h.current)) {
      j(!0);
      try {
        const W = await h.current();
        W ? (D(W.items, !0), h.current = W.hasNext() ? () => W.next() : void 0, Z(W.hasNext())) : (h.current = void 0, Z(!1));
      } catch (W) {
        console.error("History load failed", W);
      } finally {
        j(!1);
      }
    }
  }, [
    E,
    X,
    D
  ]), le = G((W, z) => {
    if (W.length === 0) return [];
    const a = W.length - 1, ce = z === -1 ? a : Math.max(0, Math.min(z, a)), F = Math.floor(s / 2), se = Math.max(0, ce - F - i), _ = Math.min(W.length, ce + F + i + 1);
    return W.slice(se, _);
  }, [s, i]);
  return ie(() => {
    A(le(g.current, M));
  }, [
    v,
    M,
    le
  ]), {
    activeMessages: T,
    updateMessages: D,
    showLatestMessages: G(() => {
      L(-1);
    }, []),
    scrollBy: G((W) => {
      L((z) => {
        if (g.current.length === 0) return z;
        const a = g.current.length - 1, ce = (z === -1 ? a : z) + W;
        return ce >= a ? -1 : ce < 0 ? 0 : ce;
      });
    }, []),
    showMessagesAroundSerial: G((W) => {
      const z = ne(g.current, W);
      z !== -1 && L(z);
    }, [ne]),
    loading: E,
    hasMoreHistory: X,
    loadMoreHistory: $
  };
}, ea = nr(void 0), ta = () => {
  const s = sr(ea);
  if (s === void 0) throw new Error("useAvatar must be used within an AvatarProvider. Make sure your component is wrapped with <AvatarProvider>.");
  return s;
}, hh = ({ clientId: s, displayName: i }) => {
  const { getAvatarForUser: l, createAvatarForUser: h, setUserAvatar: f } = ta(), [m, g] = ae();
  return ie(() => {
    const v = l(s);
    if (v) g(v);
    else {
      const C = h(s, i);
      g(C);
    }
  }, [
    l,
    h,
    s,
    i
  ]), {
    userAvatar: m,
    setUserAvatar: G((v) => {
      f(s, v), g((C) => C ? {
        ...C,
        ...v
      } : void 0);
    }, [f, s])
  };
}, uh = (s) => {
  const i = [
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-yellow-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-emerald-500",
    "bg-violet-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-fuchsia-500",
    "bg-sky-500"
  ];
  let l = 0;
  for (let h = 0; h < s.length; h++) l = (l << 5) - l + (s.codePointAt(h) ?? 0) & 4294967295;
  return i[Math.abs(l) % i.length] || "bg-gray-500";
}, hi = ({ src: s, alt: i, color: l, size: h = "md", initials: f, onClick: m }) => {
  const [g, v] = ae(!1);
  ie(() => {
    v(!1);
  }, [s]);
  const C = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-lg",
    lg: "w-12 h-12 text-xl",
    xl: "w-16 h-16 text-2xl"
  }, T = l || uh(i ?? "default"), A = () => {
    if (f) return f;
    if (!i || i.trim() === "") return "??";
    const E = i.trim().split(/\s+/).filter((j) => j.length > 0).filter((j) => /^[a-zA-Z]/.test(j));
    if (E.length >= 2 && E[0] && E[1]) {
      const j = E[0][0], te = E[1][0];
      if (j && te) return (j + te).toUpperCase();
    }
    return E.length === 1 && E[0] && E[0].length >= 2 ? E[0].slice(0, 2).toUpperCase() : i.slice(0, 2).toUpperCase();
  }, M = () => {
    v(!0);
  }, L = s && !g;
  return /* @__PURE__ */ S("div", {
    className: `${C[h]} rounded-full flex items-center justify-center text-white font-medium ${T} relative ${m ? "cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" : ""}`,
    onClick: m,
    onKeyDown: m ? (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), m());
    } : void 0,
    "data-testid": "avatar-component",
    role: m ? "button" : L ? void 0 : "img",
    tabIndex: m ? 0 : void 0,
    title: i,
    "aria-label": i,
    children: s && !g ? /* @__PURE__ */ S("img", {
      src: s,
      alt: i,
      className: "w-full h-full rounded-full object-cover",
      onError: M,
      loading: "lazy"
    }) : /* @__PURE__ */ S("span", {
      "aria-hidden": "true",
      children: A()
    })
  });
}, dh = ({ size: s }) => /* @__PURE__ */ Y("svg", {
  className: `${{
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6"
  }[s]} animate-spin`,
  fill: "none",
  viewBox: "0 0 24 24",
  children: [/* @__PURE__ */ S("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), /* @__PURE__ */ S("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })]
}), Be = ({ variant: s = "primary", size: i = "md", children: l, className: h = "", loading: f = !1, leftIcon: m, rightIcon: g, fullWidth: v = !1, loadingSpinner: C, disabled: T, ...A }) => {
  const M = [
    "inline-flex items-center justify-center",
    "font-medium rounded-md",
    "transition-all duration-200 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    v ? "w-full" : ""
  ].filter(Boolean).join(" "), L = {
    primary: [
      "bg-blue-600 text-white",
      "hover:bg-blue-700 active:bg-blue-800",
      "focus:ring-blue-500",
      "dark:bg-blue-500 dark:hover:bg-blue-600"
    ].join(" "),
    secondary: [
      "bg-gray-200 text-gray-900",
      "hover:bg-gray-300 active:bg-gray-400",
      "focus:ring-gray-500",
      "dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
    ].join(" "),
    ghost: [
      "text-gray-700 bg-transparent",
      "hover:bg-gray-100 active:bg-gray-200",
      "focus:ring-gray-500",
      "dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700"
    ].join(" "),
    outline: [
      "border border-gray-300 bg-transparent text-gray-700",
      "hover:bg-gray-50 active:bg-gray-100",
      "focus:ring-gray-500",
      "dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
    ].join(" "),
    danger: [
      "bg-red-600 text-white",
      "hover:bg-red-700 active:bg-red-800",
      "focus:ring-red-500",
      "dark:bg-red-500 dark:hover:bg-red-600"
    ].join(" ")
  }, E = {
    xs: "px-2 py-1 text-xs gap-1",
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2",
    xl: "px-8 py-4 text-lg gap-3"
  }, j = T || f;
  return /* @__PURE__ */ Y("button", {
    className: `${M} ${L[s]} ${E[i]} ${h}`.trim(),
    disabled: j,
    "aria-disabled": j,
    ...A,
    children: [
      f ? C || /* @__PURE__ */ S(dh, { size: i }) : m ? /* @__PURE__ */ S("span", {
        className: "flex-shrink-0",
        "aria-hidden": "true",
        children: m
      }) : void 0,
      /* @__PURE__ */ S("span", {
        className: f ? "opacity-70" : "",
        children: l
      }),
      !f && g && /* @__PURE__ */ S("span", {
        className: "flex-shrink-0",
        "aria-hidden": "true",
        children: g
      })
    ]
  });
}, $e = ({ name: s, size: i = "md", className: l = "", "aria-label": h, "aria-hidden": f = !1, color: m = "current", onClick: g, svgProps: v }) => {
  const C = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  }, T = {
    current: "text-current",
    primary: "text-blue-600 dark:text-blue-400",
    secondary: "text-gray-600 dark:text-gray-400",
    success: "text-green-600 dark:text-green-400",
    warning: "text-yellow-600 dark:text-yellow-400",
    error: "text-red-600 dark:text-red-400"
  }, A = {
    send: "M12 19l9-7-9-7v4l-9 3 9 3v4z",
    info: "M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z",
    moon: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
    sun: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    video: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    more: "M12 5v.01M12 12v.01M12 19v.01",
    attachment: "M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13",
    emoji: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
    thumbsup: "M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5",
    edit: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
    delete: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
    close: "M6 18L18 6M6 6l12 12",
    chevronleft: "M15 18l-6-6 6-6",
    chevronright: "M9 18l6-6-6-6",
    upload: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
  }[s];
  if (!A) return /* @__PURE__ */ S("div", {
    className: `${C[i]} ${l} flex items-center justify-center bg-gray-200 rounded text-gray-500 text-xs`,
    title: `Missing icon: ${s}`,
    "aria-label": h || `Missing icon: ${s}`,
    role: "img",
    children: "?"
  });
  const M = !!g, L = f || !h && !M;
  return /* @__PURE__ */ S("svg", {
    className: xe(C[i], M && "cursor-pointer", T[m], l),
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-label": h,
    "aria-hidden": L,
    onClick: g,
    role: M ? "button" : "img",
    tabIndex: M ? 0 : void 0,
    onKeyDown: M ? (E) => {
      (E.key === "Enter" || E.key === " ") && (E.preventDefault(), g(E));
    } : void 0,
    ...v,
    children: /* @__PURE__ */ S("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: A
    })
  });
}, ir = tr.forwardRef(({ variant: s = "default", size: i = "md", error: l = !1, success: h = !1, className: f = "", prefix: m, suffix: g, disabled: v, multiline: C = !1, maxHeight: T = "150px", value: A, onChange: M, "aria-invalid": L, ...E }, j) => {
  const te = ve(null), B = [
    "transition-colors duration-200 ease-in-out",
    "focus:outline-none",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    "placeholder:text-gray-400 dark:placeholder:text-gray-500",
    "w-full"
  ].join(" "), X = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-4 py-3 text-lg"
  }, Z = {
    default: [
      "rounded-lg border",
      "bg-white dark:bg-gray-800",
      "text-gray-900 dark:text-gray-100",
      l ? "border-red-500 dark:border-red-400" : h ? "border-green-500 dark:border-green-400" : "border-gray-300 dark:border-gray-600",
      l ? "focus:ring-2 focus:ring-red-500 focus:border-red-500" : h ? "focus:ring-2 focus:ring-green-500 focus:border-green-500" : "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400"
    ].join(" "),
    message: [
      "rounded-full border",
      "bg-gray-50 dark:bg-gray-700",
      "text-gray-900 dark:text-gray-100",
      l ? "border-red-500 dark:border-red-400" : h ? "border-green-500 dark:border-green-400" : "border-gray-300 dark:border-gray-600",
      l ? "focus:ring-2 focus:ring-red-500 focus:border-red-500" : h ? "focus:ring-2 focus:ring-green-500 focus:border-green-500" : "focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400"
    ].join(" ")
  }, ne = C ? [
    "resize-none",
    "overflow-y-hidden",
    s === "message" ? "rounded-full" : "rounded-lg"
  ].join(" ") : "", J = L ?? (l ? "true" : void 0), D = G(() => {
    const $ = te.current;
    if (!$) return;
    $.style.height = "auto";
    const le = Math.min($.scrollHeight, Number.parseInt(T));
    $.style.height = `${String(le)}px`, $.scrollHeight > Number.parseInt(T) ? ($.classList.remove("overflow-y-hidden"), $.classList.add("overflow-y-auto"), $.value === A && typeof A == "string" && ($.scrollTop = $.scrollHeight)) : ($.classList.remove("overflow-y-auto"), $.classList.add("overflow-y-hidden"));
  }, [T, A]);
  ie(() => {
    C && D();
  }, [
    A,
    C,
    D
  ]);
  const y = () => /* @__PURE__ */ S("textarea", {
    ref: ($) => {
      typeof j == "function" ? j($) : j && (j.current = $), te.current = $;
    },
    className: xe(B, Z[s === "message" ? "default" : s], X[i], ne, m && "pl-10", g && "pr-10", f),
    style: { maxHeight: T },
    disabled: v,
    "aria-invalid": J,
    rows: 1,
    value: A,
    onChange: ($) => {
      M && M($), setTimeout(D, 0);
    },
    ...E
  }), ue = () => /* @__PURE__ */ S("input", {
    ref: j,
    className: xe(B, Z[s], X[i], m ? "pl-10" : "", g ? "pr-10" : "", f),
    disabled: v,
    "aria-invalid": J,
    value: A,
    onChange: M,
    ...E
  });
  return m || g ? /* @__PURE__ */ Y("div", {
    className: `relative flex items-center ${s === "default" ? "w-full" : "flex-1"}`,
    children: [
      m && /* @__PURE__ */ S("div", {
        className: "absolute left-3 z-10 flex items-center pointer-events-none",
        children: m
      }),
      C ? y() : ue(),
      g && /* @__PURE__ */ S("div", {
        className: "absolute right-3 z-10 flex items-center",
        children: g
      })
    ]
  }) : C ? y() : ue();
});
ir.displayName = "TextInput";
var gh = ({ position: s, children: i, className: l, maxWidth: h = "max-w-xs", wrap: f = "wrap", variant: m = "dark", size: g = "md", showArrow: v = !0, zIndex: C = "z-50", spacing: T = "default", role: A = "tooltip", "aria-hidden": M, ...L }) => {
  const E = {
    sm: {
      surface: "px-2 py-1 text-xs",
      arrow: {
        border: "border-l-2 border-r-2",
        directional: {
          above: "border-t-2",
          below: "border-b-2"
        }
      }
    },
    md: {
      surface: "px-3 py-2 text-sm",
      arrow: {
        border: "border-l-4 border-r-4",
        directional: {
          above: "border-t-4",
          below: "border-b-4"
        }
      }
    },
    lg: {
      surface: "px-4 py-3 text-base",
      arrow: {
        border: "border-l-6 border-r-6",
        directional: {
          above: "border-t-6",
          below: "border-b-6"
        }
      }
    }
  }, j = {
    dark: {
      surface: "bg-gray-900 dark:bg-gray-700 text-white",
      arrow: {
        above: "border-t-gray-900 dark:border-t-gray-700",
        below: "border-b-gray-900 dark:border-b-gray-700"
      }
    },
    light: {
      surface: "bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-800 border border-gray-200 dark:border-gray-300",
      arrow: {
        above: "border-t-white dark:border-t-gray-100",
        below: "border-b-white dark:border-b-gray-100"
      }
    }
  };
  return /* @__PURE__ */ Y("div", {
    className: xe(!(l != null && l.includes("fixed")) && "absolute left-1/2 transform -translate-x-1/2", "rounded-lg shadow-lg", h, C, !(l != null && l.includes("fixed")) && {
      none: {
        above: "bottom-full",
        below: "top-full"
      },
      sm: {
        above: "bottom-full mb-1",
        below: "top-full mt-1"
      },
      default: {
        above: "bottom-full mb-2",
        below: "top-full mt-2"
      },
      lg: {
        above: "bottom-full mb-4",
        below: "top-full mt-4"
      }
    }[T][s], E[g].surface, {
      wrap: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      truncate: "whitespace-nowrap overflow-hidden text-ellipsis"
    }[f], j[m].surface, !(l != null && l.includes("fixed")) && {
      above: "bottom-full mb-2",
      below: "top-full mt-2"
    }[s], "transition-opacity duration-200 ease-in-out", l),
    role: A,
    "aria-hidden": M,
    ...L,
    children: [i, v && /* @__PURE__ */ S("div", {
      className: xe("absolute left-1/2 transform -translate-x-1/2 w-0 h-0", s === "above" ? "top-full" : "bottom-full", "border-transparent", E[g].arrow.border, E[g].arrow.directional[s], j[m].arrow[s]),
      "aria-hidden": "true"
    })]
  });
}, fh = ({ isOpen: s, onClose: i, onConfirm: l, title: h, message: f, confirmText: m = "Confirm", cancelText: g = "Cancel", confirmVariant: v = "danger", icon: C }) => {
  ie(() => {
    const A = (M) => {
      s && M.key === "Escape" && i();
    };
    return document.addEventListener("keydown", A), () => {
      document.removeEventListener("keydown", A);
    };
  }, [s, i]);
  const T = () => {
    l(), i();
  };
  if (s) return /* @__PURE__ */ S(vn, { children: /* @__PURE__ */ S("div", {
    className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
    onClick: i,
    children: /* @__PURE__ */ Y("div", {
      className: "bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md",
      onClick: (A) => {
        A.stopPropagation();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "confirm-dialog-title",
      "aria-describedby": "confirm-dialog-message",
      children: [/* @__PURE__ */ Y("div", {
        className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
        children: [/* @__PURE__ */ Y("div", {
          className: "flex items-center gap-3",
          children: [C && /* @__PURE__ */ S("div", {
            className: "flex-shrink-0 text-red-500 dark:text-red-400",
            "aria-hidden": "true",
            children: C
          }), /* @__PURE__ */ S("h2", {
            id: "confirm-dialog-title",
            className: "text-xl font-semibold text-gray-900 dark:text-gray-100",
            children: h
          })]
        }), /* @__PURE__ */ S("button", {
          onClick: i,
          className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
          "aria-label": "Close dialog",
          children: /* @__PURE__ */ S($e, {
            name: "close",
            size: "md"
          })
        })]
      }), /* @__PURE__ */ Y("div", {
        className: "p-6",
        children: [/* @__PURE__ */ S("p", {
          id: "confirm-dialog-message",
          className: "text-gray-700 dark:text-gray-300 mb-6",
          children: f
        }), /* @__PURE__ */ Y("div", {
          className: "flex items-center justify-end gap-3",
          children: [/* @__PURE__ */ S(Be, {
            variant: "secondary",
            onClick: i,
            children: g
          }), /* @__PURE__ */ S(Be, {
            variant: v,
            onClick: T,
            autoFocus: !0,
            children: m
          })]
        })]
      })]
    })
  }) });
}, Ao = "ably-chat-recent-emojis", ph = [
  "👍",
  "❤️",
  "😊",
  "😂",
  "😱",
  "😢",
  "🏃",
  "💯",
  "🔥",
  "👏",
  "☀️",
  "🎉",
  "🌈",
  "🙌",
  "💡",
  "🎶",
  "😎",
  "🤔",
  "🧠",
  "🍕",
  "🌟",
  "🚀",
  "🐶",
  "🐱",
  "🌍",
  "📚",
  "🎯",
  "🥳",
  "🤖",
  "🎨",
  "🧘",
  "🏆",
  "💥",
  "💖",
  "😇",
  "😜",
  "🌸",
  "💬",
  "📸",
  "🛠️",
  "⏰",
  "🧩",
  "🗺️"
], na = ({ onClose: s, onEmojiSelect: i, position: l, columns: h = 4, emojiList: f }) => {
  const [m, g] = ae([]);
  ie(() => {
    try {
      const M = localStorage.getItem(Ao);
      if (M) {
        const L = JSON.parse(M);
        g(L);
      }
    } catch (M) {
      console.error("Failed to load recent emojis:", M);
    }
  }, []);
  const v = G((M) => {
    g((L) => {
      const E = [M, ...L.filter((j) => j !== M)].slice(0, 10);
      try {
        localStorage.setItem(Ao, JSON.stringify(E));
      } catch (j) {
        console.error("Failed to save recent emojis:", j);
      }
      return E;
    }), i(M);
  }, [i]);
  ie(() => {
    const M = (L) => {
      L.key === "Escape" && s();
    };
    return document.addEventListener("keydown", M), () => {
      document.removeEventListener("keydown", M);
    };
  }, [s]);
  const C = lt(() => f || ph, [f]), T = lt(() => C.map((M) => /* @__PURE__ */ S("button", {
    className: "w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",
    onClick: () => {
      v(M);
    },
    "aria-label": `Emoji ${M}`,
    title: M,
    children: M
  }, M)), [C, v]), A = lt(() => {
    if (m.length !== 0) return /* @__PURE__ */ Y("div", {
      className: "mb-3 pb-3 border-b border-gray-200 dark:border-gray-700",
      children: [/* @__PURE__ */ S("p", {
        className: "text-xs text-gray-500 dark:text-gray-400 mb-2",
        children: "Recent"
      }), /* @__PURE__ */ S("div", {
        className: "grid gap-2",
        style: { gridTemplateColumns: `repeat(${String(h)}, minmax(0, 1fr))` },
        children: m.map((M) => /* @__PURE__ */ S("button", {
          className: "w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",
          onClick: () => {
            v(M);
          },
          "aria-label": `Emoji ${M}`,
          title: M,
          children: M
        }, `recent-${M}`))
      })]
    });
  }, [
    m,
    h,
    v
  ]);
  return /* @__PURE__ */ Y(vn, { children: [/* @__PURE__ */ S("div", {
    className: "fixed inset-0 z-40",
    onClick: s,
    "aria-hidden": "true"
  }), /* @__PURE__ */ S("div", {
    className: "fixed z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden",
    style: {
      top: l.top,
      left: l.left,
      width: "min(240px, calc(100vw - 40px))",
      height: "min(320px, calc(100vh - 40px))",
      minHeight: "120px"
    },
    role: "dialog",
    "aria-label": "Emoji picker",
    children: /* @__PURE__ */ S("div", {
      className: "h-full flex flex-col",
      children: /* @__PURE__ */ Y("div", {
        className: "flex-1 overflow-y-auto p-3",
        children: [A, /* @__PURE__ */ S("div", {
          className: "grid gap-2",
          style: { gridTemplateColumns: `repeat(${String(h)}, minmax(0, 1fr))` },
          children: T
        })]
      })
    })
  })] });
}, sa = nr(void 0), mh = () => {
  const s = sr(sa);
  if (!s) throw new Error("useChatSettings must be used within a ChatSettingsProvider");
  return s;
}, yh = ({ onReactionButtonClicked: s, onEditButtonClicked: i, onDeleteButtonClicked: l, isOwn: h }) => {
  const { roomName: f } = Xo(), { getEffectiveSettings: m } = mh(), { allowMessageUpdatesOwn: g, allowMessageUpdatesAny: v, allowMessageDeletesOwn: C, allowMessageDeletesAny: T, allowMessageReactions: A } = m(f), M = A && s !== void 0, L = (h && g || v) && i !== void 0, E = (h && C || T) && l !== void 0;
  if (!(!M && !L && !E)) return /* @__PURE__ */ Y("div", {
    className: "absolute -top-9 right-0 z-10 flex items-center gap-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md p-1",
    role: "toolbar",
    "aria-label": "Message actions",
    children: [
      M && /* @__PURE__ */ S(Be, {
        variant: "ghost",
        size: "sm",
        className: "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
        onClick: s,
        "aria-label": "Add reaction",
        children: /* @__PURE__ */ S($e, {
          name: "emoji",
          size: "md",
          "aria-hidden": !0
        })
      }),
      L && /* @__PURE__ */ S(Be, {
        variant: "ghost",
        size: "sm",
        className: "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
        onClick: i,
        "aria-label": "Edit message",
        children: /* @__PURE__ */ S($e, {
          name: "edit",
          size: "sm",
          "aria-hidden": !0
        })
      }),
      E && /* @__PURE__ */ S(Be, {
        variant: "ghost",
        size: "sm",
        className: "text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400",
        onClick: l,
        "aria-label": "Delete message",
        children: /* @__PURE__ */ S($e, {
          name: "delete",
          size: "sm",
          "aria-hidden": !0
        })
      })
    ]
  });
}, bh = ({ message: s, onReactionClick: i, currentClientId: l }) => {
  const h = s.reactions.distinct, f = Object.keys(h);
  if (f.length !== 0) return /* @__PURE__ */ S("div", {
    className: "flex flex-wrap gap-1 mt-2",
    role: "group",
    "aria-label": "Message reactions",
    children: f.map((m) => {
      const g = h[m];
      if (!g) return;
      const v = g.clientIds.includes(l), C = g.total;
      return /* @__PURE__ */ Y("button", {
        className: `flex items-center gap-1 px-2 py-1 rounded-full text-xs border transition-colors ${v ? "bg-blue-100 border-blue-300 text-blue-700 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-300" : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"}`,
        onClick: () => i?.(m),
        "aria-label": `${m} reaction${v ? " (you reacted)" : ""}, ${String(C)} ${C === 1 ? "person" : "people"}`,
        "aria-pressed": v,
        type: "button",
        children: [/* @__PURE__ */ S("span", {
          "aria-hidden": "true",
          children: m
        }), /* @__PURE__ */ S("span", {
          className: "font-medium",
          "aria-hidden": "true",
          children: C
        })]
      }, m);
    })
  });
}, So = (s) => {
  if (!s) return (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  const i = new Date(s), l = /* @__PURE__ */ new Date();
  return i.getDate() === l.getDate() && i.getMonth() === l.getMonth() && i.getFullYear() === l.getFullYear() ? i.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }) : i.toLocaleDateString([], {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  }) + ", " + i.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}, vh = ({ message: s, onEdit: i, onDelete: l, onReactionAdd: h, onReactionRemove: f, className: m }) => {
  const [g, v] = ae(!1), [C, T] = ae(!1), [A, M] = ae(s.text || ""), [L, E] = ae(!1), [j, te] = ae({
    top: 0,
    left: 0
  }), [B, X] = ae(!1), [Z, ne] = ae("above"), [J, D] = ae(!1), y = ve(null), ue = ve(null), $ = ve(null), { clientId: le } = Qo(), W = s.clientId === le, { userAvatar: z } = hh({ clientId: s.clientId }), a = () => {
    T(!0);
  }, ce = () => {
    A.trim() && A !== (s.text || "") && i?.(s, A.trim()), T(!1);
  }, F = () => {
    M(s.text || ""), T(!1);
  }, se = () => {
    D(!0);
  }, _ = () => {
    l?.(s);
  }, U = () => {
    var de;
    const _e = (de = ue.current) == null ? void 0 : de.getBoundingClientRect();
    if (!_e) return {
      top: 0,
      left: 0
    };
    const Ze = Math.min(240, window.innerWidth - 40), ze = Math.min(320, window.innerHeight - 40);
    let et, Je;
    et = _e.left + _e.width / 2 - Ze / 2, Je = _e.top >= Math.min(ze, 120) + 40 ? _e.top - ze - 20 : _e.bottom + 20;
    const Lt = window.innerWidth - Ze - 20, Dt = 20;
    et < Dt ? et = Dt : et > Lt && (et = Lt);
    const Ut = 20, tt = window.innerHeight - ze - Ut, mt = Ut;
    return Je < mt ? Je = mt : Je > tt && (Je = tt), {
      top: Je,
      left: et
    };
  }, fe = () => {
    const de = U();
    te(de), E(!0);
  }, x = (de) => {
    h?.(s, de), E(!1);
  };
  ie(() => {
    if (!L) return;
    const de = () => {
      const _e = U();
      te(_e);
    };
    return window.addEventListener("resize", de), () => {
      window.removeEventListener("resize", de);
    };
  }, [L]);
  const qe = (de) => {
    var _e;
    le && ((_e = s.reactions.distinct[de]) != null && _e.clientIds.includes(le) ? f?.(s, de) : h?.(s, de));
  }, Ke = (de) => {
    de.key === "Enter" && !de.shiftKey ? (de.preventDefault(), ce()) : de.key === "Escape" && F();
  }, Me = (de) => {
    const _e = de.currentTarget.getBoundingClientRect(), Ze = _e.top, ze = window.innerHeight - _e.bottom;
    Ze >= 50 ? ne("above") : ze >= 50 ? ne("below") : ne(Ze > ze ? "above" : "below"), X(!0);
  }, Rt = () => {
    X(!1);
  }, Se = () => {
    var de;
    const _e = (de = $.current) == null ? void 0 : de.getBoundingClientRect();
    if (!_e) return;
    const Ze = 40, ze = 8;
    return {
      top: Z === "above" ? _e.top - Ze - ze : _e.bottom + ze,
      left: (_e.left + _e.right) / 2
    };
  };
  return /* @__PURE__ */ Y("div", {
    ref: y,
    className: xe("relative flex items-start gap-2 mb-4", W ? "flex-row-reverse" : "flex-row", m),
    role: "article",
    "aria-label": `Message from ${s.clientId}${s.action === je.MessageDelete ? " (deleted)" : ""}${s.action === je.MessageUpdate ? " (edited)" : ""}`,
    children: [
      /* @__PURE__ */ Y("div", {
        className: "relative",
        children: [/* @__PURE__ */ S("div", {
          ref: $,
          className: "relative",
          onMouseEnter: Me,
          onMouseLeave: Rt,
          "aria-label": `Avatar for ${s.clientId}`,
          tabIndex: W ? 0 : void 0,
          children: /* @__PURE__ */ S(hi, {
            alt: z?.displayName,
            src: z?.src,
            color: z?.color,
            size: "sm",
            initials: z?.initials
          })
        }), B && (() => {
          const de = Se();
          if (de) return Zc(/* @__PURE__ */ S(gh, {
            position: Z,
            className: "fixed transform -translate-x-1/2",
            style: {
              top: de.top,
              left: de.left
            },
            spacing: "none",
            role: "tooltip",
            "aria-live": "polite",
            children: /* @__PURE__ */ S("div", {
              className: "text-center text-sm px-2 py-1",
              children: s.clientId
            })
          }), document.body);
        })()]
      }),
      /* @__PURE__ */ Y("div", {
        className: `flex flex-col max-w-[85%] md:max-w-[80%] lg:max-w-[75%] ${W ? "items-end" : "items-start"}`,
        children: [
          /* @__PURE__ */ Y("div", {
            className: "relative",
            onMouseEnter: () => {
              v(!0);
            },
            onMouseLeave: () => {
              v(!1);
            },
            children: [/* @__PURE__ */ S("div", {
              ref: ue,
              className: `relative px-4 py-2 rounded-2xl ${W ? "bg-gray-900 text-white rounded-br-md" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md"}`,
              "aria-live": s.action === je.MessageUpdate ? "polite" : "off",
              children: C ? /* @__PURE__ */ Y("div", {
                className: "min-w-[200px]",
                children: [/* @__PURE__ */ S(ir, {
                  value: A,
                  onChange: (de) => {
                    M(de.target.value);
                  },
                  onKeyDown: Ke,
                  placeholder: "Edit message...",
                  className: "text-sm mb-2",
                  autoFocus: !0,
                  "aria-label": "Edit message text"
                }), /* @__PURE__ */ Y("div", {
                  className: "flex gap-2",
                  children: [/* @__PURE__ */ S(Be, {
                    variant: "primary",
                    size: "sm",
                    onClick: ce,
                    disabled: !A.trim(),
                    children: "Save"
                  }), /* @__PURE__ */ S(Be, {
                    variant: "secondary",
                    size: "sm",
                    onClick: F,
                    children: "Cancel"
                  })]
                })]
              }) : /* @__PURE__ */ S("div", { children: s.action === je.MessageDelete ? /* @__PURE__ */ S("p", {
                className: "text-sm leading-relaxed break-words break-all whitespace-pre-wrap italic text-gray-500 dark:text-gray-400",
                children: "Message deleted"
              }) : /* @__PURE__ */ Y("p", {
                className: "text-sm leading-relaxed break-words break-all whitespace-pre-wrap",
                children: [s.text || "", s.action === je.MessageUpdate && /* @__PURE__ */ S("span", {
                  className: "text-xs opacity-60 ml-2",
                  children: "(edited)"
                })]
              }) })
            }), g && !C && s.action !== je.MessageDelete && /* @__PURE__ */ S(yh, {
              isOwn: W,
              onReactionButtonClicked: fe,
              onEditButtonClicked: a,
              onDeleteButtonClicked: se
            })]
          }),
          s.action !== je.MessageDelete && Object.keys(s.reactions.distinct).length > 0 && le && /* @__PURE__ */ S(bh, {
            message: s,
            onReactionClick: qe,
            currentClientId: le
          }),
          /* @__PURE__ */ S("div", {
            className: "flex items-center gap-2 mt-1 px-2",
            children: /* @__PURE__ */ Y("span", {
              className: "text-xs text-gray-500",
              children: [So(s.timestamp.getTime()), s.action === je.MessageUpdate && /* @__PURE__ */ Y("span", {
                className: "ml-1",
                children: ["• edited ", So(s.version.timestamp.getTime())]
              })]
            })
          })
        ]
      }),
      L && /* @__PURE__ */ S(na, {
        onClose: () => {
          E(!1);
        },
        onEmojiSelect: x,
        position: j
      }),
      /* @__PURE__ */ S(fh, {
        isOpen: J,
        onClose: () => {
          D(!1);
        },
        onConfirm: _,
        title: "Delete Message",
        message: "Are you sure you want to delete this message? This action cannot be undone.",
        confirmText: "Delete",
        cancelText: "Cancel",
        confirmVariant: "danger",
        icon: /* @__PURE__ */ S($e, {
          name: "delete",
          size: "lg"
        })
      })
    ]
  });
}, _h = [
  "0ms",
  "200ms",
  "400ms"
], wh = ({ dotSizeClassName: s = "w-1.5 h-1.5", className: i, dotClassName: l, animationDuration: h = "1s", dotColor: f = "bg-current", ...m }) => /* @__PURE__ */ S("div", {
  className: xe("flex gap-0.5", i),
  ...m,
  children: _h.map((g) => /* @__PURE__ */ S("div", {
    className: xe(s, "rounded-full animate-bounce", f, l),
    style: {
      animationDelay: g,
      animationDuration: h,
      ...globalThis.window !== void 0 && globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches && {
        animation: "none",
        opacity: 0.7
      }
    },
    "aria-hidden": "true"
  }, g))
}), ra = ({ maxClients: s, textClassName: i, className: l, onTypingChange: h }) => {
  const { currentlyTyping: f } = Yo(), { clientId: m } = Qo(), g = [...f].filter((v) => v !== m);
  if (ie(() => {
    h && h(g);
  }, [g, h]), g.length !== 0) return /* @__PURE__ */ Y("div", {
    className: xe("flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400", l),
    role: "status",
    "aria-live": "polite",
    children: [/* @__PURE__ */ S(wh, { "aria-hidden": "true" }), /* @__PURE__ */ S("span", {
      className: i,
      children: Ch(g, s)
    })]
  });
};
function Ch(s, i = 1) {
  const l = s.length, h = Math.max(1, i);
  if (l === 0) return "";
  if (l <= h) return l === 1 ? `${String(s[0])} is typing` : l === 2 ? `${String(s[0])} and ${String(s[1])} are typing` : l === 3 ? `${String(s[0])}, ${String(s[1])} and ${String(s[2])} are typing` : `${s.slice(0, -1).map(String).join(", ")} and ${String(s[l - 1])} are typing`;
  const f = s.slice(0, h).join(", "), m = l - h;
  return `${f} and ${m.toString()} other${m > 1 ? "s" : ""} are typing`;
}
var ia = Yc(({ messages: s, onLoadMoreHistory: i, isLoading: l = !1, hasMoreHistory: h = !1, onEdit: f, onDelete: m, onReactionAdd: g, onReactionRemove: v, onMessageInView: C, onViewLatest: T, autoScroll: A = !0, loadMoreThreshold: M = 100, enableTypingIndicators: L = !0, className: E = "", ...j }, te) => {
  const B = ve(null), X = ve(0), Z = ve(!1), ne = ve(0), J = ve(/* @__PURE__ */ new Map()), [D, y] = ae(!0), [ue, $] = ae(), le = G(() => {
    if (!B.current) return !1;
    const { scrollTop: U, scrollHeight: fe, clientHeight: x } = B.current;
    return fe - U - x < 50;
  }, []), W = G(() => {
    y((U) => {
      const fe = le();
      return U === fe ? U : fe;
    });
  }, [le]), z = G(() => {
    !B.current || !i || !h || l || B.current.scrollTop < M && (Z.current = !0, ne.current = B.current.scrollHeight, i());
  }, [
    i,
    h,
    l,
    M
  ]), a = G(() => {
    if (!B.current || s.length === 0) return;
    const U = B.current.getBoundingClientRect(), fe = U.top + U.height / 2;
    if (le()) {
      ue !== void 0 && $(void 0), T?.();
      return;
    }
    let x;
    for (const [qe, Ke] of J.current.entries()) {
      const { top: Me, bottom: Rt } = Ke.getBoundingClientRect(), Se = Math.abs((Me + Rt) / 2 - fe);
      (!x || Se < x.dist) && (x = {
        serial: qe,
        dist: Se
      });
    }
    x && x.serial !== ue && ($(x.serial), C?.(x.serial));
  }, [
    ue,
    le,
    s.length,
    C,
    T
  ]), ce = G(() => {
    const U = performance.now();
    U - X.current < 16 || (X.current = U, W(), z(), a());
  }, [
    W,
    z,
    a
  ]), F = G(() => {
    B.current && (B.current.scrollTop = B.current.scrollHeight);
  }, []), se = G(() => {
    A && D && requestAnimationFrame(() => {
      F();
    });
  }, [
    A,
    D,
    F
  ]);
  Xr(() => {
    if (!Z.current || !B.current) return;
    const U = B.current.scrollHeight - ne.current;
    B.current.scrollTop += U, Z.current = !1;
  }, [s]), Xr(() => {
    A && D && F();
  }, [
    s,
    A,
    D,
    F
  ]), ie(() => {
    const U = B.current;
    if (!U) return;
    W(), a(), U.addEventListener("scroll", ce, { passive: !0 });
    const fe = new ResizeObserver(() => {
      A && le() && F();
    });
    return fe.observe(U), () => {
      U.removeEventListener("scroll", ce), fe.disconnect();
    };
  }, [
    ce,
    A,
    W,
    a,
    le,
    F
  ]);
  const _ = G((U) => {
    typeof te == "function" ? te(U) : te && (te.current = U), B.current = U;
  }, [te]);
  return /* @__PURE__ */ Y("div", {
    ref: _,
    className: xe("flex-1 overflow-y-auto pt-10 px-6 pb-6 space-y-6 bg-gray-50 dark:bg-gray-950 ably-scrollbar", E),
    role: "log",
    "aria-label": "Chat messages",
    "aria-live": "polite",
    "aria-busy": l,
    "aria-describedby": l ? "loading-status" : void 0,
    ...j,
    children: [
      l && /* @__PURE__ */ S("div", {
        className: "flex justify-center py-4",
        role: "status",
        "aria-live": "polite",
        children: /* @__PURE__ */ S("span", {
          className: "text-sm text-gray-500 dark:text-gray-400",
          children: "Loading messages…"
        })
      }),
      !h && s.length > 0 && /* @__PURE__ */ S("div", {
        className: "flex justify-center py-4",
        role: "status",
        children: /* @__PURE__ */ S("span", {
          className: "text-sm text-gray-500 dark:text-gray-400",
          children: "No more messages"
        })
      }),
      s.map((U) => /* @__PURE__ */ S("div", {
        ref: (fe) => {
          fe ? J.current.set(U.serial, fe) : J.current.delete(U.serial);
        },
        children: /* @__PURE__ */ S(vh, {
          message: U,
          onEdit: f,
          onDelete: m,
          onReactionAdd: g,
          onReactionRemove: v
        })
      }, U.serial)),
      L && /* @__PURE__ */ S(ra, {
        className: "px-4",
        onTypingChange: se
      })
    ]
  });
});
ia.displayName = "ChatMessageList";
var oa = ({ children: s, className: i, "aria-label": l }) => /* @__PURE__ */ S("div", {
  className: xe("flex items-center", "bg-white dark:bg-gray-900", "border-t border-gray-200 dark:border-gray-700", i),
  role: "contentinfo",
  "aria-label": l || "Chat window footer",
  children: s
});
oa.displayName = "ChatWindowFooter";
var aa = ({ children: s, className: i = "", "aria-label": l }) => /* @__PURE__ */ S("div", {
  className: xe("px-6 py-4", "border-b border-gray-200 dark:border-gray-700", "bg-white dark:bg-gray-900", i),
  role: "banner",
  "aria-label": l || "Chat window header",
  children: s
});
aa.displayName = "ChatWindowHeader";
var Rh = ({ onSent: s, placeholder: i = "Type a message...", onSendError: l, enableTyping: h = !0 }) => {
  const [f, m] = ae(""), g = ve(""), [v, C] = ae(!1), [T, A] = ae({
    top: 0,
    left: 0
  }), M = ve(null), { keystroke: L, stop: E } = Yo(), { sendMessage: j } = di(), te = G(() => {
    const B = g.current.trim();
    B && j({ text: B }).then((X) => {
      s?.(X), m(""), g.current = "", h && E().catch((Z) => {
        console.warn("Stop typing failed:", Z);
      });
    }).catch((X) => {
      l ? l(X, B) : console.error("Failed to send message:", X);
    });
  }, [
    j,
    E,
    s,
    l,
    h
  ]);
  return /* @__PURE__ */ Y("div", {
    className: "p-4 bg-white dark:bg-gray-900",
    role: "form",
    "aria-label": "Message input",
    children: [/* @__PURE__ */ S("div", {
      className: "border border-gray-300 dark:border-gray-600 rounded-2xl p-2",
      children: /* @__PURE__ */ Y("div", {
        className: "flex items-end gap-3",
        children: [/* @__PURE__ */ S(ir, {
          ref: M,
          variant: "message",
          multiline: !0,
          maxHeight: "150px",
          value: f,
          onChange: (B) => {
            const X = B.target.value;
            m(X), g.current = X, h && (X.trim() ? L().catch((Z) => {
              console.warn("Keystroke failed:", Z);
            }) : E().catch((Z) => {
              console.warn("Stop typing failed:", Z);
            }));
          },
          onKeyDown: (B) => {
            B.key === "Enter" && !B.shiftKey && (B.preventDefault(), te());
          },
          placeholder: i,
          className: "flex-1",
          "aria-label": "Message text"
        }), /* @__PURE__ */ S(Be, {
          variant: "ghost",
          size: "sm",
          className: "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 self-end mb-1",
          onClick: () => {
            const B = document.querySelector("[data-emoji-button]");
            if (B) {
              const X = B.getBoundingClientRect(), Z = 200, ne = 200, J = Math.max(10, X.left - Z / 2 + X.width / 2), D = X.top - ne - 10;
              A({
                top: D,
                left: J
              }), C(!0);
            }
          },
          "data-emoji-button": !0,
          "aria-label": "Open emoji picker",
          "aria-haspopup": "dialog",
          "aria-expanded": v,
          children: /* @__PURE__ */ S($e, {
            name: "emoji",
            size: "md",
            "aria-hidden": !0
          })
        })]
      })
    }), v && /* @__PURE__ */ S(na, {
      onClose: () => {
        C(!1);
      },
      onEmojiSelect: (B) => {
        const X = M.current;
        if (X) {
          const Z = X.selectionStart, ne = X.selectionEnd, J = f.slice(0, Z) + B + f.slice(ne);
          m(J), g.current = J, h && L().catch((D) => {
            console.warn("Keystroke failed:", D);
          }), setTimeout(() => {
            X.focus();
            const D = Z + B.length;
            X.setSelectionRange(D, D);
          }, 0);
        } else {
          const Z = f + B;
          m(Z), g.current = Z, h && L().catch((ne) => {
            console.warn("Keystroke failed:", ne);
          });
        }
        C(!1);
      },
      position: T
    })]
  });
}, ca = ({ roomName: s, customHeaderContent: i, customFooterContent: l, windowSize: h = 200, enableTypingIndicators: f = !0, autoEnterPresence: m = !0, className: g, onError: v }) => {
  ah({ autoEnterLeave: m });
  const { deleteMessage: C, updateMessage: T, sendReaction: A, deleteReaction: M } = di(), { activeMessages: L, updateMessages: E, showLatestMessages: j, showMessagesAroundSerial: te, loadMoreHistory: B, hasMoreHistory: X, loading: Z } = lh({ windowSize: h }), ne = G(($) => {
    E([$]);
  }, [E]), J = G(($, le) => {
    const W = $.copy({
      text: le,
      metadata: $.metadata,
      headers: $.headers
    });
    T($.serial, W).then(ne).catch((z) => {
      v != null && v.onMessageUpdateError ? v.onMessageUpdateError(z, $) : console.error("Failed to update message:", z);
    });
  }, [
    T,
    ne,
    v
  ]), D = G(($) => {
    C($.serial, { description: "deleted by user" }).then(ne).catch((le) => {
      v != null && v.onMessageDeleteError ? v.onMessageDeleteError(le, $) : console.error("Failed to delete message:", le);
    });
  }, [
    C,
    ne,
    v
  ]), y = G(($, le) => {
    A($.serial, {
      type: Ct.Distinct,
      name: le
    }).catch((W) => {
      v != null && v.onSendReactionError ? v.onSendReactionError(W, $, le) : console.error("Failed to add reaction:", W);
    });
  }, [A, v]), ue = G(($, le) => {
    M($.serial, {
      type: Ct.Distinct,
      name: le
    }).catch((W) => {
      v != null && v.onRemoveReactionError ? v.onRemoveReactionError(W, $, le) : console.error("Failed to remove reaction:", W);
    });
  }, [M, v]);
  return /* @__PURE__ */ Y("div", {
    className: xe("flex flex-col h-full bg-white dark:bg-gray-900 flex-1", g),
    role: "main",
    "aria-label": `Chat room: ${s}`,
    children: [
      i && /* @__PURE__ */ S(aa, { children: i }),
      /* @__PURE__ */ S(ia, {
        messages: L,
        isLoading: Z,
        onLoadMoreHistory: () => {
          B();
        },
        hasMoreHistory: X,
        enableTypingIndicators: f,
        onEdit: J,
        onDelete: D,
        onReactionAdd: y,
        onReactionRemove: ue,
        onMessageInView: te,
        onViewLatest: j
      }),
      /* @__PURE__ */ Y(oa, { children: [/* @__PURE__ */ S("div", {
        className: "flex-1",
        children: /* @__PURE__ */ S(Rh, {
          onSent: ($) => {
            E([$]);
          },
          placeholder: `Message ${s}...`,
          "aria-label": `Send message to ${s}`,
          onSendError: v?.onMessageSendError,
          enableTyping: f
        })
      }), l] })
    ]
  });
};
ca.displayName = "ChatWindow";
var Ah = ({ icon: s, title: i, message: l, action: h, className: f, ariaLabel: m = "Empty state", maxWidth: g = "md", verticalAlign: v = "center", textAlign: C = "center" }) => /* @__PURE__ */ S("div", {
  className: xe("flex-1 flex items-center", {
    top: "justify-start",
    center: "justify-center",
    bottom: "justify-end"
  }[v], f),
  role: "status",
  "aria-label": m,
  children: /* @__PURE__ */ Y("div", {
    className: xe({
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl"
    }[g], "mx-auto px-4 py-8", {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }[C]),
    children: [
      s && /* @__PURE__ */ S("div", {
        className: "mb-6",
        "aria-hidden": "true",
        children: s
      }),
      /* @__PURE__ */ S("h3", {
        className: "text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3",
        children: i
      }),
      l && /* @__PURE__ */ S("p", {
        className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6",
        children: l
      }),
      h && /* @__PURE__ */ S("div", {
        className: xe("mt-6", C !== "center" && "flex justify-start"),
        children: h
      })
    ]
  })
});
Ah.displayName = "EmptyState";
var Sh = ({ roomName: s, displayName: i }) => {
  const { getAvatarForRoom: l, createAvatarForRoom: h, setRoomAvatar: f } = ta(), [m, g] = ae();
  return ie(() => {
    const v = l(s);
    if (v) g(v);
    else {
      const C = h(s, i);
      g(C);
    }
  }, [
    l,
    h,
    s,
    i
  ]), {
    roomAvatar: m,
    setRoomAvatar: G((v) => {
      f(s, v), g((C) => C ? {
        ...C,
        ...v
      } : void 0);
    }, [f, s])
  };
}, la = nr(void 0), kh = () => {
  const s = sr(la);
  if (s === void 0) throw new Error("useTheme must be used within a ThemeProvider. Make sure your component is wrapped with <ThemeProvider>. Example: <ThemeProvider><YourComponent /></ThemeProvider>");
  return s;
}, Oh = ({ isOpen: s, onClose: i, onCreateRoom: l }) => {
  const [h, f] = ae(""), m = G(() => {
    f(""), i();
  }, [i]);
  return ie(() => {
    const g = (v) => {
      s && v.key === "Escape" && m();
    };
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [m, s]), s ? /* @__PURE__ */ S(vn, { children: /* @__PURE__ */ S("div", {
    className: "fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4",
    onClick: m,
    children: /* @__PURE__ */ Y("div", {
      className: "bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md",
      onClick: (g) => {
        g.stopPropagation();
      },
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      children: [/* @__PURE__ */ Y("div", {
        className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
        children: [/* @__PURE__ */ S("h2", {
          id: "modal-title",
          className: "text-xl font-semibold text-gray-900 dark:text-gray-100",
          children: "Create New Room"
        }), /* @__PURE__ */ S("button", {
          onClick: m,
          className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
          "aria-label": "Close modal",
          children: /* @__PURE__ */ S($e, {
            name: "close",
            size: "md"
          })
        })]
      }), /* @__PURE__ */ Y("form", {
        onSubmit: (g) => {
          g.preventDefault(), h.trim() && (l(h.trim()), f(""), i());
        },
        className: "p-6",
        children: [/* @__PURE__ */ Y("div", {
          className: "mb-4",
          children: [/* @__PURE__ */ S("label", {
            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
            children: "Room Name"
          }), /* @__PURE__ */ S(ir, {
            value: h,
            onChange: (g) => {
              f(g.target.value);
            },
            placeholder: "Enter room name...",
            className: "w-full",
            autoFocus: !0,
            "aria-label": "Room name",
            "aria-required": "true"
          })]
        }), /* @__PURE__ */ Y("div", {
          className: "flex items-center justify-end gap-3",
          children: [/* @__PURE__ */ S(Be, {
            type: "button",
            variant: "secondary",
            onClick: m,
            children: "Cancel"
          }), /* @__PURE__ */ S(Be, {
            type: "submit",
            variant: "primary",
            disabled: !h.trim(),
            children: "Create Room"
          })]
        })]
      })]
    })
  }) }) : void 0;
}, Mh = ({ trigger: s, items: i, align: l = "right" }) => {
  const [h, f] = ae(!1), m = ve(null);
  ie(() => {
    const v = (T) => {
      m.current && !m.current.contains(T.target) && f(!1);
    }, C = (T) => {
      T.key === "Escape" && h && f(!1);
    };
    return document.addEventListener("mousedown", v), document.addEventListener("keydown", C), () => {
      document.removeEventListener("mousedown", v), document.removeEventListener("keydown", C);
    };
  }, [h]);
  const g = (v) => {
    v.onClick(), f(!1);
  };
  return /* @__PURE__ */ Y("div", {
    className: "relative",
    ref: m,
    children: [/* @__PURE__ */ S("div", {
      onClick: () => {
        f(!h);
      },
      role: "button",
      "aria-haspopup": "true",
      "aria-expanded": h,
      "aria-controls": "dropdown-menu",
      tabIndex: 0,
      onKeyDown: (v) => {
        (v.key === "Enter" || v.key === " ") && (v.preventDefault(), f(!h));
      },
      children: s
    }), h && /* @__PURE__ */ Y(vn, { children: [/* @__PURE__ */ S("div", {
      className: "fixed inset-0 z-40",
      onClick: () => {
        f(!1);
      },
      "aria-hidden": "true"
    }), /* @__PURE__ */ S("div", {
      id: "dropdown-menu",
      role: "menu",
      "aria-orientation": "vertical",
      className: `absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 ${l === "right" ? "right-0" : "left-0"}`,
      children: /* @__PURE__ */ S("div", {
        className: "py-1",
        children: i.map((v) => /* @__PURE__ */ Y("button", {
          className: "w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 transition-colors",
          onClick: () => {
            g(v);
          },
          role: "menuitem",
          tabIndex: -1,
          children: [v.icon && /* @__PURE__ */ S("span", {
            className: "text-gray-500 dark:text-gray-400",
            "aria-hidden": "true",
            children: v.icon
          }), v.label]
        }, v.id))
      })
    })] })]
  });
}, Th = tr.memo(function({ roomName: s, isSelected: i, onClick: l, onLeave: h, avatar: f, isCollapsed: m = !1, typingIndicatorsEnabled: g = !0 }) {
  const { connections: v, presenceMembers: C } = oh(), { roomAvatar: T } = Sh({ roomName: s }), A = f || T, M = C > 0;
  return m ? /* @__PURE__ */ S("div", {
    className: "flex justify-center p-2",
    children: /* @__PURE__ */ Y("div", {
      className: `relative cursor-pointer transition-transform hover:scale-110 ${i ? "ring-2 ring-blue-500 rounded-full" : ""}`,
      onClick: l,
      title: A?.displayName || s,
      role: "button",
      "aria-label": `${A?.displayName || s} room${i ? " (selected)" : ""}`,
      "aria-pressed": i,
      tabIndex: 0,
      onKeyDown: (L) => {
        (L.key === "Enter" || L.key === " ") && (L.preventDefault(), l());
      },
      children: [/* @__PURE__ */ S(hi, {
        alt: A?.displayName,
        src: A?.src,
        color: A?.color,
        size: "md",
        initials: A?.initials
      }), i && /* @__PURE__ */ S("div", { className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" })]
    })
  }) : /* @__PURE__ */ Y("div", {
    className: `group flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800
                    cursor-pointer transition-colors
                    ${i ? "bg-gray-100 dark:bg-gray-800 border-r-2 border-blue-500" : ""}`,
    onClick: l,
    role: "button",
    "aria-label": `${A?.displayName || s} room${i ? " (selected)" : ""}${M ? `, ${String(C)} online` : ""}`,
    "aria-pressed": i,
    tabIndex: 0,
    onKeyDown: (L) => {
      (L.key === "Enter" || L.key === " ") && (L.preventDefault(), l());
    },
    children: [/* @__PURE__ */ Y("div", {
      className: "relative",
      children: [
        /* @__PURE__ */ S(hi, {
          alt: A?.displayName,
          src: A?.src,
          color: A?.color,
          size: "md",
          initials: A?.initials
        }),
        M && /* @__PURE__ */ S("div", {
          className: "absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900",
          "aria-hidden": "true",
          title: "Room is active"
        }),
        C > 0 && /* @__PURE__ */ S("div", {
          className: "absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium",
          "aria-hidden": "true",
          title: `${String(C)} ${C === 1 ? "person" : "people"} online`,
          children: C > 9 ? "9+" : C
        })
      ]
    }), /* @__PURE__ */ Y("div", {
      className: "flex-1 min-w-0",
      children: [/* @__PURE__ */ Y("div", {
        className: "flex items-center justify-between",
        children: [/* @__PURE__ */ S("h3", {
          className: "font-medium text-gray-900 dark:text-gray-100 truncate",
          children: A?.displayName
        }), /* @__PURE__ */ Y("div", {
          className: "flex items-center gap-2 flex-shrink-0",
          children: [/* @__PURE__ */ S(Be, {
            variant: "ghost",
            size: "sm",
            onClick: (L) => {
              L.stopPropagation(), h();
            },
            className: "opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-500 p-1",
            "aria-label": `Leave ${A?.displayName || "room"}`,
            title: `Leave ${A?.displayName || "room"}`,
            children: /* @__PURE__ */ S($e, {
              name: "close",
              size: "sm"
            })
          }), /* @__PURE__ */ S("span", {
            className: "text-xs text-gray-400",
            title: `${String(v)} total ${v === 1 ? "connection" : "connections"}`,
            children: v
          })]
        })]
      }), /* @__PURE__ */ S("div", {
        "aria-live": "polite",
        children: g && /* @__PURE__ */ S(ra, { maxClients: 1 })
      })]
    })]
  });
}), ha = ({ roomNames: s, activeRoomName: i, defaultRoomOptions: l, onSelect: h, onLeave: f, isCollapsed: m = !1 }) => /* @__PURE__ */ S(vn, { children: s.map((g) => /* @__PURE__ */ S(ch, {
  name: g,
  options: l,
  children: /* @__PURE__ */ S(Th, {
    roomName: g,
    isSelected: g === i,
    isCollapsed: m,
    onClick: () => {
      h(g);
    },
    onLeave: () => {
      f(g);
    }
  })
}, g)) });
ha.displayName = "RoomList";
var Ih = ({ roomNames: s, activeRoomName: i, defaultRoomOptions: l, addRoom: h, setActiveRoom: f, leaveRoom: m, className: g = "", isCollapsed: v = !1, onToggleCollapse: C }) => {
  const [T, A] = ae(!1), { theme: M, toggleTheme: L } = kh();
  return /* @__PURE__ */ Y("aside", {
    className: xe("bg-white dark:bg-gray-900", "border-r border-gray-200 dark:border-gray-800", "flex flex-col h-full", "w-full", g),
    children: [
      /* @__PURE__ */ S("div", {
        className: xe("flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800", "min-h-[4rem]"),
        children: v ? /* @__PURE__ */ Y("div", {
          className: "flex flex-col items-center gap-2",
          children: [/* @__PURE__ */ S(Be, {
            variant: "ghost",
            size: "sm",
            onClick: L,
            children: /* @__PURE__ */ S($e, {
              name: M === "dark" ? "sun" : "moon",
              size: "md"
            })
          }), C && /* @__PURE__ */ S(Be, {
            variant: "ghost",
            size: "sm",
            onClick: C,
            children: /* @__PURE__ */ S($e, {
              name: "chevronright",
              size: "md"
            })
          })]
        }) : /* @__PURE__ */ Y(vn, { children: [/* @__PURE__ */ Y("h1", {
          className: "text-xl font-bold text-gray-900 dark:text-gray-100 truncate",
          children: ["Chats ", /* @__PURE__ */ Y("span", {
            className: "text-sm font-normal text-gray-500",
            children: [
              "(",
              s.length,
              ")"
            ]
          })]
        }), /* @__PURE__ */ Y("div", {
          className: "flex items-center gap-2 flex-shrink-0",
          children: [
            /* @__PURE__ */ S(Be, {
              variant: "ghost",
              size: "sm",
              onClick: L,
              children: /* @__PURE__ */ S($e, {
                name: M === "dark" ? "sun" : "moon",
                size: "md"
              })
            }),
            /* @__PURE__ */ S(Mh, {
              trigger: /* @__PURE__ */ S(Be, {
                variant: "ghost",
                size: "sm",
                children: /* @__PURE__ */ S($e, {
                  name: "more",
                  size: "md"
                })
              }),
              items: [{
                id: "create-room",
                label: "Create Room",
                icon: "➕",
                onClick: () => {
                  A(!0);
                }
              }]
            }),
            C && /* @__PURE__ */ S(Be, {
              variant: "ghost",
              size: "sm",
              onClick: C,
              children: /* @__PURE__ */ S($e, {
                name: "chevronleft",
                size: "md"
              })
            })
          ]
        })] })
      }),
      /* @__PURE__ */ S("div", {
        className: "flex-1 overflow-y-auto min-w-0",
        children: /* @__PURE__ */ S(ha, {
          roomNames: s,
          activeRoomName: i,
          defaultRoomOptions: l,
          onSelect: f,
          onLeave: m,
          isCollapsed: v
        })
      }),
      /* @__PURE__ */ S(Oh, {
        isOpen: T,
        onClose: () => {
          A(!1);
        },
        onCreateRoom: (E) => {
          h(E), A(!1);
        }
      })
    ]
  });
};
Ih.displayName = "Sidebar";
function Vs(s) {
  const i = {};
  for (const l in s) {
    const h = s[l];
    h !== void 0 && (i[l] = h);
  }
  return i;
}
var Eh = (s) => {
  if (!s || typeof s != "object") return !1;
  const i = s;
  return typeof i.version == "number" && typeof i.userAvatars == "object" && i.userAvatars !== null && typeof i.roomAvatars == "object" && i.roomAvatars !== null;
}, ko = "ably-chat-ui-avatars", Ph = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-green-500",
  "bg-orange-500",
  "bg-red-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-yellow-500",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-emerald-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-rose-500",
  "bg-fuchsia-500",
  "bg-sky-500"
], $s = 1, xh = (s) => {
  const i = s || Ph;
  return {
    generateColor: G((l) => {
      let h = 0;
      for (let f = 0; f < l.length; f++) h = (h << 5) - h + (l.codePointAt(f) ?? 0) & 4294967295;
      return i[Math.abs(h) % i.length] || "bg-gray-500";
    }, [i]),
    generateInitials: G((l) => {
      var h, f;
      if (!l.trim()) return "??";
      const m = l.trim().replace(/^(mr|mrs|ms|dr|prof)\.?\s+/i, "").replaceAll(/[^\w\s]/g, " ").replaceAll(/\s+/g, " "), g = m.split(" ").filter((v) => v.length > 0);
      return g.length >= 2 ? ((((h = g[0]) == null ? void 0 : h[0]) || "") + (((f = g[1]) == null ? void 0 : f[0]) || "")).toUpperCase() : m.slice(0, 2).toUpperCase();
    }, [])
  };
}, Nh = (s) => {
  const [i, l] = ae(/* @__PURE__ */ new Set()), h = G((f, m) => {
    s && s(f);
  }, [s]);
  return {
    notifyAvatarChange: G((f, m, g, v) => {
      for (const C of i) try {
        C(f, m, g, v);
      } catch (T) {
        h(T, "Avatar change callback");
      }
    }, [i, h]),
    onAvatarChange: G((f) => (l((m) => new Set(m).add(f)), () => {
      l((m) => {
        const g = new Set(m);
        return g.delete(f), g;
      });
    }), []),
    handleError: h
  };
}, Lh = (s, i, l) => {
  const [h, f] = ae({}), [m, g] = ae({}), v = ve(!1), C = ve(!1);
  return ie(() => {
    if (!(!s || v.current)) {
      try {
        const T = localStorage.getItem(ko);
        if (T) {
          const A = JSON.parse(T);
          Eh(A) ? A.version === $s ? (f(A.userAvatars), g(A.roomAvatars)) : l(/* @__PURE__ */ new Error(`Mismatched avatar data version: ${String(A.version)}`), "Loading persisted avatars") : l(/* @__PURE__ */ new Error("Invalid avatar data format in localStorage"), "Loading persisted avatars");
        }
      } catch (T) {
        l(T, "Loading persisted avatars");
      }
      v.current = !0;
    }
  }, [s, l]), ie(() => {
    if (!(!s || !v.current || C.current)) try {
      const T = {
        userAvatars: Vs(h),
        roomAvatars: Vs(m),
        version: $s
      };
      localStorage.setItem(ko, JSON.stringify(T));
    } catch (T) {
      l(T, "Saving persisted avatars");
    }
  }, [
    h,
    m,
    s,
    l
  ]), Xr(() => {
    C.current && (C.current = !1);
  }, [h, m]), {
    userAvatars: h,
    roomAvatars: m,
    setUserAvatars: f,
    setRoomAvatars: g,
    manageCacheSize: G((T) => {
      if (i === 0 || Object.keys(T).length < i) return T;
      const A = Object.entries(T).slice(1);
      return Object.fromEntries(A);
    }, [i]),
    clearUserAvatars: G(() => {
      f({});
    }, []),
    clearRoomAvatars: G(() => {
      g({});
    }, []),
    clearAllAvatars: G(() => {
      f({}), g({});
    }, []),
    getUserAvatars: G(() => h, [h]),
    getRoomAvatars: G(() => m, [m]),
    exportAvatars: G(() => ({
      userAvatars: Vs(h),
      roomAvatars: Vs(m),
      version: $s
    }), [h, m]),
    importAvatars: G((T) => {
      try {
        T.version === $s ? (C.current = !0, f(T.userAvatars), g(T.roomAvatars)) : l(/* @__PURE__ */ new Error(`Unsupported avatar data version: ${String(T.version)}`), "Importing avatars");
      } catch (A) {
        l(A, "Importing avatars");
      }
    }, [l])
  };
}, Dh = ({ children: s, options: i = {} }) => {
  const { persist: l = !0, customColors: h, maxCacheSize: f = 100, onError: m } = i, { generateColor: g, generateInitials: v } = xh(h), { notifyAvatarChange: C, onAvatarChange: T, handleError: A } = Nh(m), { userAvatars: M, roomAvatars: L, setUserAvatars: E, setRoomAvatars: j, manageCacheSize: te, clearUserAvatars: B, clearRoomAvatars: X, clearAllAvatars: Z, getUserAvatars: ne, getRoomAvatars: J, exportAvatars: D, importAvatars: y } = Lh(l, f, A), ue = G((F) => M[F], [M]), $ = G((F, se) => {
    const _ = se || F, U = {
      displayName: _,
      color: g(F),
      initials: v(_)
    };
    return E((fe) => {
      const x = {
        ...te(fe),
        [F]: U
      };
      return C("user", F, U), x;
    }), U;
  }, [
    g,
    v,
    te,
    C,
    E
  ]), le = G((F) => L[F], [L]), W = G((F, se) => {
    const _ = se || F, U = {
      displayName: _,
      color: g(F),
      initials: v(_)
    };
    return j((fe) => {
      const x = {
        ...te(fe),
        [F]: U
      };
      return C("room", F, U), x;
    }), U;
  }, [
    g,
    v,
    te,
    C,
    j
  ]), z = G((F, se) => {
    E((_) => {
      const U = _[F], fe = se.displayName || U?.displayName || F, x = {
        displayName: fe,
        color: se.color || U?.color || g(F),
        initials: se.initials || U?.initials || v(fe),
        src: se.src || U?.src
      };
      return C("user", F, x, U), {
        ..._,
        [F]: x
      };
    });
  }, [
    g,
    v,
    C,
    E
  ]), a = G((F, se) => {
    j((_) => {
      const U = _[F], fe = se.displayName || U?.displayName || F, x = {
        displayName: fe,
        color: se.color || U?.color || g(F),
        initials: se.initials || U?.initials || v(fe),
        src: se.src || U?.src
      };
      return C("room", F, x, U), {
        ..._,
        [F]: x
      };
    });
  }, [
    g,
    v,
    C,
    j
  ]), ce = lt(() => ({
    getAvatarForUser: ue,
    createAvatarForUser: $,
    getAvatarForRoom: le,
    createAvatarForRoom: W,
    setUserAvatar: z,
    setRoomAvatar: a,
    getUserAvatars: ne,
    getRoomAvatars: J,
    clearUserAvatars: B,
    clearRoomAvatars: X,
    clearAllAvatars: Z,
    onAvatarChange: T,
    exportAvatars: D,
    importAvatars: y
  }), [
    ue,
    $,
    le,
    W,
    z,
    a,
    ne,
    J,
    B,
    X,
    Z,
    T,
    D,
    y
  ]);
  return /* @__PURE__ */ S(ea.Provider, {
    value: ce,
    children: s
  });
}, Uh = {
  allowMessageUpdatesOwn: !0,
  allowMessageUpdatesAny: !1,
  allowMessageDeletesOwn: !0,
  allowMessageDeletesAny: !1,
  allowMessageReactions: !0
}, jh = ({ initialGlobalSettings: s = {}, initialRoomSettings: i = {}, children: l }) => {
  const h = {
    ...Uh,
    ...s
  }, f = (g) => {
    if (!g) return Object.freeze({ ...h });
    const v = i[g];
    return Object.freeze({
      ...h,
      ...v
    });
  }, m = {
    globalSettings: Object.freeze({ ...h }),
    roomSettings: i,
    getEffectiveSettings: f
  };
  return /* @__PURE__ */ S(sa.Provider, {
    value: m,
    children: l
  });
}, Jr = "ably-chat-ui-theme", Bh = ({ children: s, options: i = {}, onThemeChange: l }) => {
  const { persist: h = !0, detectSystemTheme: f = !0, defaultTheme: m = "light" } = i, [g, v] = ae(m), [C, T] = ae(/* @__PURE__ */ new Set()), A = ve(!1), M = globalThis.window !== void 0 && typeof globalThis.window.matchMedia == "function", L = G(() => {
    if (M) return globalThis.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }, [M]), E = G((D, y) => {
    if (D !== y) {
      for (const ue of C) try {
        ue(D, y);
      } catch {
      }
      if (l) try {
        l(D, y);
      } catch {
      }
    }
  }, [C, l]), j = G((D) => {
    v((y) => {
      if (y !== D) {
        if (h) try {
          localStorage.setItem(Jr, D);
        } catch {
        }
        E(D, y);
      }
      return D;
    });
  }, [h, E]), te = G(() => {
    j(g === "light" ? "dark" : "light");
  }, [g, j]), B = G(() => {
    const D = L();
    j(D || m);
  }, [
    L,
    j,
    m
  ]), X = G((D) => (T((y) => new Set(y).add(D)), () => {
    T((y) => {
      const ue = new Set(y);
      return ue.delete(D), ue;
    });
  }), []);
  ie(() => {
    if (A.current) return;
    let D = m;
    if (h) try {
      const y = localStorage.getItem(Jr);
      (y === "light" || y === "dark") && (D = y);
    } catch {
    }
    if (f && !h || h && !localStorage.getItem(Jr)) {
      const y = L();
      y && (D = y);
    }
    v(D), A.current = !0;
  }, [
    h,
    f,
    m,
    L
  ]), ie(() => {
    if (!M) return;
    const D = globalThis.matchMedia("(prefers-color-scheme: dark)"), y = (ue) => {
      j(ue.matches ? "dark" : "light");
    };
    return typeof D.addEventListener == "function" ? (D.addEventListener("change", y), () => {
      D.removeEventListener("change", y);
    }) : (D.addListener(y), () => {
      D.removeListener(y);
    });
  }, [j, M]), ie(() => {
    if (!A.current) return;
    const D = document.documentElement;
    D.dataset.theme = g, D.classList.toggle("dark", g === "dark");
    const y = document.querySelector('meta[name="theme-color"]');
    y && y.setAttribute("content", g === "dark" ? "#1f2937" : "#ffffff");
  }, [g]);
  const Z = lt(() => g === "dark", [g]), ne = lt(() => g === "light", [g]), J = lt(() => ({
    theme: g,
    toggleTheme: te,
    setTheme: j,
    isDark: Z,
    isLight: ne,
    supportsSystemTheme: M,
    getSystemTheme: L,
    resetToSystemTheme: B,
    onThemeChange: X
  }), [
    g,
    te,
    j,
    Z,
    ne,
    M,
    L,
    B,
    X
  ]);
  return /* @__PURE__ */ S(la.Provider, {
    value: J,
    children: s
  });
};
globalThis.__ABLY_CHAT_REACT_UI_KIT_VERSION__ = "0.3.0";
function Wh({ key: s, roomName: i }) {
  const l = new Zl(new re.Realtime({
    key: s,
    clientId: "demo"
  }));
  return /* @__PURE__ */ S(rh, {
    client: l,
    children: /* @__PURE__ */ S(Bh, { children: /* @__PURE__ */ S(Dh, { children: /* @__PURE__ */ S(jh, { children: /* @__PURE__ */ S(ca, { roomName: i }) }) }) })
  });
}
export {
  Wh as Kit
};
