var _o = Object.create, es = Object.defineProperty, wo = Object.getOwnPropertyDescriptor, bo = Object.getOwnPropertyNames, vo = Object.getPrototypeOf, Mr = Object.prototype.hasOwnProperty, Ur = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Co = (e, t) => {
  let s = {};
  for (var i in e)
    es(s, i, {
      get: e[i],
      enumerable: !0
    });
  return t || es(s, Symbol.toStringTag, { value: "Module" }), s;
}, So = (e, t, s, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (var n = bo(t), r = 0, a = n.length, o; r < a; r++)
      o = n[r], !Mr.call(e, o) && o !== s && es(e, o, {
        get: ((l) => t[l]).bind(null, o),
        enumerable: !(i = wo(t, o)) || i.enumerable
      });
  return e;
}, Ro = (e, t, s) => (s = e != null ? _o(vo(e)) : {}, So(t || !e || !e.__esModule || !Mr.call(e, "default") ? es(s, "default", {
  value: e,
  enumerable: !0
}) : s, e)), Eo = /* @__PURE__ */ Ur(((e) => {
  e.fromByteArray = l;
  for (var t = [], s = [], i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, r = i.length; n < r; ++n)
    t[n] = i[n], s[i.charCodeAt(n)] = n;
  s[45] = 62, s[95] = 63;
  function a(c) {
    return t[c >> 18 & 63] + t[c >> 12 & 63] + t[c >> 6 & 63] + t[c & 63];
  }
  function o(c, d, h) {
    for (var p, u = [], m = d; m < h; m += 3)
      p = (c[m] << 16 & 16711680) + (c[m + 1] << 8 & 65280) + (c[m + 2] & 255), u.push(a(p));
    return u.join("");
  }
  function l(c) {
    for (var d, h = c.length, p = h % 3, u = [], m = 16383, y = 0, _ = h - p; y < _; y += m) u.push(o(c, y, y + m > _ ? _ : y + m));
    return p === 1 ? (d = c[h - 1], u.push(t[d >> 2] + t[d << 4 & 63] + "==")) : p === 2 && (d = (c[h - 2] << 8) + c[h - 1], u.push(t[d >> 10] + t[d >> 4 & 63] + t[d << 2 & 63] + "=")), u.join("");
  }
}));
function xr(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
var { toString: Mo } = Object.prototype, { getPrototypeOf: me } = Object, { iterator: Rt, toStringTag: Tr } = Symbol, yt = (({ hasOwnProperty: e }) => (t, s) => e.call(t, s))(Object.prototype), Ar = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), Lr = (e, t, s) => e === Object.prototype || !s && t === null, Uo = (e) => {
  if (!Object.isExtensible(e)) return !1;
  const t = Object.getOwnPropertyNames(e);
  return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((s) => {
    if (Ar(s)) return !1;
    const i = Object.getOwnPropertyDescriptor(e, s);
    return !!i && i.configurable && i.writable === !0;
  });
}, _t = (e, t) => {
  let s = e;
  const i = [];
  for (; s != null; ) {
    if (i.indexOf(s) !== -1) return !1;
    i.push(s);
    const n = me(s);
    if (Lr(s, n, s === e)) return !1;
    if (yt(s, t)) return !0;
    s = n;
  }
  return !1;
}, xo = (e, t) => e != null && _t(e, t) ? e[t] : void 0, To = (e) => {
  if (e == null || typeof e != "object" && typeof e != "function") return e;
  const t = me(e);
  if (t === null && Uo(e)) return e;
  const s = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), n = [];
  let r = e;
  for (; r != null && n.indexOf(r) === -1; ) {
    n.push(r);
    const a = r === e ? t : me(r);
    if (Lr(r, a, r === e)) break;
    const o = Object.getOwnPropertyNames(r);
    Object.getOwnPropertySymbols && o.push(...Object.getOwnPropertySymbols(r));
    for (const l of o)
      Ar(l) || yt(i, l) || (s[l] = e[l], i[l] = !0);
    r = a;
  }
  return s;
}, $i = /* @__PURE__ */ ((e) => (t) => {
  const s = Mo.call(t);
  return e[s] || (e[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), J = (e) => (e = e.toLowerCase(), (t) => $i(t) === e), Bs = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Oe = Bs("undefined");
function Ke(e) {
  return e !== null && !Oe(e) && e.constructor !== null && !Oe(e.constructor) && V(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
var Ir = J("ArrayBuffer");
function Ao(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ir(e.buffer), t;
}
var Lo = Bs("string"), V = Bs("function"), Dr = Bs("number"), Je = (e) => e !== null && typeof e == "object", Io = (e) => e === !0 || e === !1, Ht = (e) => {
  if (!Je(e)) return !1;
  const t = me(e);
  return (t === null || t === Object.prototype || me(t) === null) && !_t(e, Tr) && !_t(e, Rt);
}, Do = (e) => {
  if (!Je(e) || Ke(e)) return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Po = J("Date"), Oo = J("File"), ko = (e) => !!(e && typeof e.uri < "u"), No = (e) => e && typeof e.getParts < "u", Fo = J("Blob"), Bo = J("FileList"), qo = J("Set"), Vo = (e) => Je(e) && V(e.pipe);
function $o() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
var wn = $o(), bn = typeof wn.FormData < "u" ? wn.FormData : void 0, jo = (e) => {
  if (!e) return !1;
  if (bn && e instanceof bn) return !0;
  const t = me(e);
  if (!t || t === Object.prototype || !V(e.append)) return !1;
  const s = $i(e);
  return s === "formdata" || s === "object" && V(e.toString) && e.toString() === "[object FormData]";
}, Ho = J("URLSearchParams"), [Wo, zo, Qo, Go] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(J), Ko = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Et(e, t, { allOwnKeys: s = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let i, n;
  if (typeof e != "object" && (e = [e]), Pe(e)) for (i = 0, n = e.length; i < n; i++) t.call(null, e[i], i, e);
  else {
    if (Ke(e)) return;
    const r = s ? Object.getOwnPropertyNames(e) : Object.keys(e), a = r.length;
    let o;
    for (i = 0; i < a; i++)
      o = r[i], t.call(null, e[o], o, e);
  }
}
function Pr(e, t) {
  if (Ke(e)) return null;
  t = t.toLowerCase();
  const s = Object.keys(e);
  let i = s.length, n;
  for (; i-- > 0; )
    if (n = s[i], t === n.toLowerCase()) return n;
  return null;
}
var xe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Or = (e) => !Oe(e) && e !== xe;
function _i(...e) {
  const { caseless: t, skipUndefined: s } = Or(this) && this || {}, i = {}, n = (r, a) => {
    if (a === "__proto__" || a === "constructor" || a === "prototype") return;
    const o = t && typeof a == "string" && Pr(i, a) || a, l = yt(i, o) ? i[o] : void 0;
    Ht(l) && Ht(r) ? i[o] = _i(l, r) : Ht(r) ? i[o] = _i({}, r) : Pe(r) ? i[o] = r.slice() : (!s || !Oe(r)) && (i[o] = r);
  };
  for (let r = 0, a = e.length; r < a; r++) {
    const o = e[r];
    if (!o || Ke(o) || (Et(o, n), typeof o != "object" || Pe(o))) continue;
    const l = Object.getOwnPropertySymbols(o);
    for (let c = 0; c < l.length; c++) {
      const d = l[c];
      ol.call(o, d) && n(o[d], d);
    }
  }
  return i;
}
var Jo = (e, t, s, { allOwnKeys: i } = {}) => (Et(t, (n, r) => {
  s && V(n) ? Object.defineProperty(e, r, {
    __proto__: null,
    value: xr(n, s),
    writable: !0,
    enumerable: !0,
    configurable: !0
  }) : Object.defineProperty(e, r, {
    __proto__: null,
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}, { allOwnKeys: i }), e), Xo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Yo = (e, t, s, i) => {
  e.prototype = Object.create(t.prototype, i), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), s && Object.assign(e.prototype, s);
}, Zo = (e, t, s, i) => {
  let n, r, a;
  const o = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), r = n.length; r-- > 0; )
      a = n[r], (!i || i(a, e, t)) && !o[a] && (t[a] = e[a], o[a] = !0);
    e = s !== !1 && me(e);
  } while (e && (!s || s(e, t)) && e !== Object.prototype);
  return t;
}, el = (e, t, s) => {
  e = String(e), (s === void 0 || s > e.length) && (s = e.length), s -= t.length;
  const i = e.indexOf(t, s);
  return i !== -1 && i === s;
}, tl = (e) => {
  if (!e) return null;
  if (Pe(e)) return e;
  let t = e.length;
  if (!Dr(t)) return null;
  const s = new Array(t);
  for (; t-- > 0; ) s[t] = e[t];
  return s;
}, sl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && me(Uint8Array)), il = (e, t) => {
  const s = (e && e[Rt]).call(e);
  let i;
  for (; (i = s.next()) && !i.done; ) {
    const n = i.value;
    t.call(e, n[0], n[1]);
  }
}, nl = (e, t) => {
  let s;
  const i = [];
  for (; (s = e.exec(t)) !== null; ) i.push(s);
  return i;
}, rl = J("HTMLFormElement"), al = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, i, n) {
  return i.toUpperCase() + n;
}), { propertyIsEnumerable: ol } = Object.prototype, ll = J("RegExp"), kr = (e, t) => {
  const s = Object.getOwnPropertyDescriptors(e), i = {};
  Et(s, (n, r) => {
    let a;
    (a = t(n, r, e)) !== !1 && (i[r] = a || n);
  }), Object.defineProperties(e, i);
}, cl = (e) => {
  kr(e, (t, s) => {
    if (V(e) && [
      "arguments",
      "caller",
      "callee"
    ].includes(s)) return !1;
    const i = e[s];
    if (V(i)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, dl = (e, t) => {
  const s = {}, i = (n) => {
    n.forEach((r) => {
      s[r] = !0;
    });
  };
  return Pe(e) ? i(e) : i(String(e).split(t)), s;
}, hl = () => {
}, ul = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function fl(e) {
  return !!(e && V(e.append) && e[Tr] === "FormData" && e[Rt]);
}
var pl = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), s = (i) => {
    if (Je(i)) {
      if (t.has(i)) return;
      if (Ke(i)) return i;
      if (!("toJSON" in i)) {
        t.add(i);
        let n;
        if (qo(i)) {
          n = [];
          for (const r of i) {
            const a = s(r);
            !Oe(a) && n.push(a);
          }
        } else
          n = Pe(i) ? [] : {}, Et(i, (r, a) => {
            const o = s(r);
            !Oe(o) && (n[a] = o);
          });
        return t.delete(i), n;
      }
    }
    return i;
  };
  return s(e);
}, gl = J("AsyncFunction"), ml = (e) => e && (Je(e) || V(e)) && V(e.then) && V(e.catch), Nr = ((e, t) => e ? setImmediate : t ? ((s, i) => (xe.addEventListener("message", ({ source: n, data: r }) => {
  n === xe && r === s && i.length && i.shift()();
}, !1), (n) => {
  i.push(n), xe.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(typeof setImmediate == "function", V(xe.postMessage)), yl = typeof queueMicrotask < "u" ? queueMicrotask.bind(xe) : typeof process < "u" && process.nextTick || Nr, Fr = (e) => e != null && V(e[Rt]), _l = (e) => e != null && _t(e, Rt) && Fr(e), f = {
  isArray: Pe,
  isArrayBuffer: Ir,
  isBuffer: Ke,
  isFormData: jo,
  isArrayBufferView: Ao,
  isString: Lo,
  isNumber: Dr,
  isBoolean: Io,
  isObject: Je,
  isPlainObject: Ht,
  isEmptyObject: Do,
  isReadableStream: Wo,
  isRequest: zo,
  isResponse: Qo,
  isHeaders: Go,
  isUndefined: Oe,
  isDate: Po,
  isFile: Oo,
  isReactNativeBlob: ko,
  isReactNative: No,
  isBlob: Fo,
  isRegExp: ll,
  isFunction: V,
  isStream: Vo,
  isURLSearchParams: Ho,
  isTypedArray: sl,
  isFileList: Bo,
  forEach: Et,
  merge: _i,
  extend: Jo,
  trim: Ko,
  stripBOM: Xo,
  inherits: Yo,
  toFlatObject: Zo,
  kindOf: $i,
  kindOfTest: J,
  endsWith: el,
  toArray: tl,
  forEachEntry: il,
  matchAll: nl,
  isHTMLForm: rl,
  hasOwnProperty: yt,
  hasOwnProp: yt,
  hasOwnInPrototypeChain: _t,
  getSafeProp: xo,
  toSafeFlatObject: To,
  reduceDescriptors: kr,
  freezeMethods: cl,
  toObjectSet: dl,
  toCamelCase: al,
  noop: hl,
  toFiniteNumber: ul,
  findKey: Pr,
  global: xe,
  isContextDefined: Or,
  isSpecCompliantForm: fl,
  toJSONObject: pl,
  isAsyncFn: gl,
  isThenable: ml,
  setImmediate: Nr,
  asap: yl,
  isIterable: Fr,
  isSafeIterable: _l
}, wl = f.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), bl = (e) => {
  const t = {};
  let s, i, n;
  return e && e.split(`
`).forEach(function(a) {
    n = a.indexOf(":"), s = a.substring(0, n).trim().toLowerCase(), i = a.substring(n + 1).trim();
    const o = f.hasOwnProp(t, s);
    !s || o && f.hasOwnProp(wl, s) || (s === "set-cookie" ? o ? t[s].push(i) : t[s] = [i] : t[s] = o ? t[s] + ", " + i : i);
  }), t;
};
function vl(e) {
  let t = 0, s = e.length;
  for (; t < s; ) {
    const i = e.charCodeAt(t);
    if (i !== 9 && i !== 32) break;
    t += 1;
  }
  for (; s > t; ) {
    const i = e.charCodeAt(s - 1);
    if (i !== 9 && i !== 32) break;
    s -= 1;
  }
  return t === 0 && s === e.length ? e : e.slice(t, s);
}
var Cl = /* @__PURE__ */ new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Sl = /* @__PURE__ */ new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function ji(e, t) {
  return f.isArray(e) ? e.map((s) => ji(s, t)) : vl(String(e).replace(t, ""));
}
var Rl = (e) => ji(e, Cl), El = (e) => ji(e, Sl);
function Br(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return f.forEach(e.toJSON(), (s, i) => {
    t[i] = El(s);
  }), t;
}
var vn = /* @__PURE__ */ Symbol("internals");
function et(e) {
  return e && String(e).trim().toLowerCase();
}
function Wt(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Wt) : Rl(String(e));
}
function Ml(e) {
  const t = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = s.exec(e); ) t[i[1]] = i[2];
  return t;
}
var Ul = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Ks(e) {
  let t = 0, s = e.length;
  for (; t < s; ) {
    const i = e.charCodeAt(t);
    if (i !== 9 && i !== 32) break;
    t += 1;
  }
  for (; s > t; ) {
    const i = e.charCodeAt(s - 1);
    if (i !== 9 && i !== 32) break;
    s -= 1;
  }
  return t === 0 && s === e.length ? e : e.slice(t, s);
}
function xl(e) {
  const t = e.length - 1;
  if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34) return e;
  let s = "";
  for (let i = 1; i < t; i++) {
    const n = e.charCodeAt(i);
    if (n === 34 || n === 92 && (i += 1, i >= t))
      return e;
    s += e[i];
  }
  return s;
}
function Tl(e) {
  const t = /* @__PURE__ */ Object.create(null), s = String(e);
  let i = 0, n = !1, r = !1;
  function a(o) {
    const l = Ks(s.slice(i, o)), c = l.indexOf("=");
    if (c < 1) return;
    const d = Ks(l.slice(0, c));
    if (!Ul.test(d)) return;
    const h = d.toLowerCase();
    if (h === "__proto__" || h === "constructor" || h === "prototype") return;
    const p = Ks(l.slice(c + 1));
    t[h] = xl(p);
  }
  for (let o = 0; o < s.length; o++) {
    const l = s.charCodeAt(o);
    n ? r ? r = !1 : l === 92 ? r = !0 : l === 34 && (n = !1) : l === 34 ? n = !0 : (l === 44 || l === 59) && (a(o), i = o + 1);
  }
  return a(s.length), t;
}
var Al = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Js(e, t, s, i, n) {
  if (f.isFunction(i)) return i.call(this, t, s);
  if (n && (t = s), !!f.isString(t)) {
    if (f.isString(i)) return t.indexOf(i) !== -1;
    if (f.isRegExp(i)) return i.test(t);
  }
}
function Ll(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, s, i) => s.toUpperCase() + i);
}
function Il(e, t) {
  const s = f.toCamelCase(" " + t);
  [
    "get",
    "set",
    "has"
  ].forEach((i) => {
    Object.defineProperty(e, i + s, {
      __proto__: null,
      value: function(n, r, a) {
        return this[i].call(this, t, n, r, a);
      },
      configurable: !0
    });
  });
}
var F = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, t, s) {
    const i = this;
    function n(a, o, l) {
      const c = et(o);
      if (!c) return;
      const d = f.findKey(i, c);
      (!d || i[d] === void 0 || l === !0 || l === void 0 && i[d] !== !1) && (i[d || o] = Wt(a));
    }
    const r = (a, o) => f.forEach(a, (l, c) => n(l, c, o));
    if (f.isPlainObject(e) || e instanceof this.constructor) r(e, t);
    else if (f.isString(e) && (e = e.trim()) && !Al(e)) r(bl(e), t);
    else if (f.isObject(e) && f.isSafeIterable(e)) {
      let a = /* @__PURE__ */ Object.create(null), o, l;
      for (const c of e) {
        if (!f.isArray(c)) throw new TypeError("Object iterator must return a key-value pair");
        l = c[0], f.hasOwnProp(a, l) ? (o = a[l], a[l] = f.isArray(o) ? [...o, c[1]] : [o, c[1]]) : a[l] = c[1];
      }
      r(a, t);
    } else e != null && n(t, e, s);
    return this;
  }
  get(e, t) {
    if (e = et(e), e) {
      const s = f.findKey(this, e);
      if (s) {
        const i = this[s];
        if (!t) return i;
        if (t === !0) return Ml(i);
        if (f.isFunction(t)) return t.call(this, i, s);
        if (f.isRegExp(t)) return t.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, t) {
    if (e = et(e), e) {
      const s = f.findKey(this, e);
      return !!(s && this[s] !== void 0 && (!t || Js(this, this[s], s, t)));
    }
    return !1;
  }
  delete(e, t) {
    const s = this;
    let i = !1;
    function n(r) {
      if (r = et(r), r) {
        const a = f.findKey(s, r);
        a && (!t || Js(s, s[a], a, t)) && (delete s[a], i = !0);
      }
    }
    return f.isArray(e) ? e.forEach(n) : n(e), i;
  }
  clear(e) {
    const t = Object.keys(this);
    let s = t.length, i = !1;
    for (; s--; ) {
      const n = t[s];
      (!e || Js(this, this[n], n, e, !0)) && (delete this[n], i = !0);
    }
    return i;
  }
  normalize(e) {
    const t = this, s = {};
    return f.forEach(this, (i, n) => {
      const r = f.findKey(s, n);
      if (r) {
        t[r] = Wt(i), delete t[n];
        return;
      }
      const a = e ? Ll(n) : String(n).trim();
      a !== n && delete t[n], t[a] = Wt(i), s[a] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const t = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (s, i) => {
      s != null && s !== !1 && (t[i] = e && f.isArray(s) ? s.join(", ") : s);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join(`
`);
  }
  getSetCookie() {
    const e = this.get("set-cookie");
    return f.isArray(e) ? e : e == null || e === !1 ? [] : [e];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static parseParameters(e) {
    return Tl(e);
  }
  static concat(e, ...t) {
    const s = new this(e);
    return t.forEach((i) => s.set(i)), s;
  }
  static accessor(e) {
    const t = (this[vn] = this[vn] = { accessors: {} }).accessors, s = this.prototype;
    function i(n) {
      const r = et(n);
      t[r] || (Il(s, n), t[r] = !0);
    }
    return f.isArray(e) ? e.forEach(i) : i(e), this;
  }
};
F.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
f.reduceDescriptors(F.prototype, ({ value: e }, t) => {
  let s = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(i) {
      this[s] = i;
    }
  };
});
f.freezeMethods(F);
var ts = "[REDACTED ****]";
function Dl(e) {
  if (f.hasOwnProp(e, "toJSON")) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (f.hasOwnProp(t, "toJSON")) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Pl(e, t) {
  const s = new Set(t.map((r) => String(r).toLowerCase())), i = [], n = (r) => {
    if (r === null || typeof r != "object" || f.isBuffer(r)) return r;
    if (i.indexOf(r) !== -1) return;
    r instanceof F && (r = r.toJSON()), i.push(r);
    let a;
    if (f.isArray(r))
      a = [], r.forEach((o, l) => {
        const c = n(o);
        f.isUndefined(c) || (a[l] = c);
      });
    else {
      if (!f.isPlainObject(r) && Dl(r))
        return i.pop(), r;
      a = /* @__PURE__ */ Object.create(null);
      for (const [o, l] of Object.entries(r)) {
        const c = s.has(o.toLowerCase()) ? ts : n(l);
        f.isUndefined(c) || (a[o] = c);
      }
    }
    return i.pop(), a;
  };
  return n(e);
}
function Cn(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function Ol(e) {
  return e.errors.map((t) => {
    try {
      return t && t.message ? Cn(t.message) : Cn(t);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
var S = class qr extends Error {
  static from(t, s, i, n, r, a) {
    let o = t.message;
    !o && f.isArray(t.errors) && t.errors.length && (o = Ol(t));
    const l = new qr(o, s || t.code, i, n, r);
    return Object.defineProperty(l, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), l.name = t.name, t.status != null && l.status == null && (l.status = t.status), a && Object.assign(l, a), l;
  }
  constructor(t, s, i, n, r) {
    super(t), Object.defineProperty(this, "message", {
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, s && (this.code = s), i && (this.config = i), n && (this.request = n), r && (this.response = r, this.status = r.status);
  }
  toJSON() {
    const t = this.config, s = t && f.hasOwnProp(t, "redact") ? t.redact : void 0, i = f.isArray(s) && s.length > 0 ? Pl(t, s) : f.toJSONObject(t);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: i,
      code: this.code,
      status: this.status
    };
  }
};
S.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
S.ERR_BAD_OPTION = "ERR_BAD_OPTION";
S.ECONNABORTED = "ECONNABORTED";
S.ETIMEDOUT = "ETIMEDOUT";
S.ECONNREFUSED = "ECONNREFUSED";
S.ERR_NETWORK = "ERR_NETWORK";
S.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
S.ERR_DEPRECATED = "ERR_DEPRECATED";
S.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
S.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
S.ERR_CANCELED = "ERR_CANCELED";
S.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
S.ERR_INVALID_URL = "ERR_INVALID_URL";
S.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
function wi(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function Vr(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xs(e, t, s) {
  return e ? e.concat(t).map(function(n, r) {
    return n = Vr(n), !s && r ? "[" + n + "]" : n;
  }).join(s ? "." : "") : t;
}
function kl(e) {
  return f.isArray(e) && !e.some(wi);
}
var Nl = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qs(e, t, s) {
  if (!f.isObject(e)) throw new TypeError("target must be an object");
  t = t || new FormData();
  const i = (w, b) => {
    const v = f.getSafeProp(s, w);
    return f.isUndefined(v) ? b : v;
  }, n = i("metaTokens", !0), r = i("visitor") || y, a = i("dots", !1), o = i("indexes", !1), l = i("Blob") || typeof Blob < "u" && Blob, c = i("maxDepth", 100), d = l && f.isSpecCompliantForm(t), h = [];
  if (!f.isFunction(r)) throw new TypeError("visitor must be a function");
  function p(w) {
    if (w === null) return "";
    if (f.isDate(w)) return w.toISOString();
    if (f.isBoolean(w)) return w.toString();
    if (!d && f.isBlob(w)) throw new S("Blob is not supported. Use a Buffer instead.");
    if (f.isArrayBuffer(w) || f.isTypedArray(w)) {
      if (d && typeof l == "function") return new l([w]);
      throw new S("Blob is not supported. Use a Buffer instead.", S.ERR_NOT_SUPPORT);
    }
    return w;
  }
  function u(w) {
    if (w > c) throw new S("Object is too deeply nested (" + w + " levels). Max depth: " + c, S.ERR_FORM_DATA_DEPTH_EXCEEDED);
  }
  function m(w, b) {
    if (c === 1 / 0) return JSON.stringify(w);
    const v = [];
    return JSON.stringify(w, function(U, T) {
      if (!f.isObject(T)) return T;
      for (; v.length && v[v.length - 1] !== this; ) v.pop();
      return v.push(T), u(b + v.length - 1), T;
    });
  }
  function y(w, b, v) {
    let M = w;
    if (f.isReactNative(t) && f.isReactNativeBlob(w))
      return t.append(Xs(v, b, a), p(w)), !1;
    if (w && !v && typeof w == "object") {
      if (f.endsWith(b, "{}"))
        b = n ? b : b.slice(0, -2), w = m(w, 1);
      else if (f.isArray(w) && kl(w) || (f.isFileList(w) || f.endsWith(b, "[]")) && (M = f.toArray(w)))
        return b = Vr(b), M.forEach(function(T, X) {
          !(f.isUndefined(T) || T === null) && t.append(o === !0 ? Xs([b], X, a) : o === null ? b : b + "[]", p(T));
        }), !1;
    }
    return wi(w) ? !0 : (t.append(Xs(v, b, a), p(w)), !1);
  }
  const _ = Object.assign(Nl, {
    defaultVisitor: y,
    convertValue: p,
    isVisitable: wi
  });
  function g(w, b, v = 0) {
    if (!f.isUndefined(w)) {
      if (u(v), h.indexOf(w) !== -1) throw new Error("Circular reference detected in " + b.join("."));
      h.push(w), f.forEach(w, function(U, T) {
        (!(f.isUndefined(U) || U === null) && r.call(t, U, f.isString(T) ? T.trim() : T, b, _)) === !0 && g(U, b ? b.concat(T) : [T], v + 1);
      }), h.pop();
    }
  }
  if (!f.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function Sn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(i) {
    return t[i];
  });
}
function Hi(e, t) {
  this._pairs = [], e && qs(e, this, t);
}
var $r = Hi.prototype;
$r.append = function(t, s) {
  this._pairs.push([t, s]);
};
$r.toString = function(t) {
  const s = t ? (i) => t.call(this, i, Sn) : Sn;
  return this._pairs.map(function(n) {
    return s(n[0]) + "=" + s(n[1]);
  }, "").join("&");
};
function Fl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function jr(e, t, s) {
  if (!t) return e;
  e = e || "";
  const i = f.isFunction(s) ? { serialize: s } : s, n = f.getSafeProp(i, "encode") || Fl, r = f.getSafeProp(i, "serialize");
  let a;
  if (r ? a = r(t, i) : a = f.isURLSearchParams(t) ? t.toString() : new Hi(t, i).toString(n), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
var tt = /* @__PURE__ */ Symbol("internals");
function Hr(e) {
  return e ? e.length : 0;
}
function Rn(e) {
  if (e)
    for (; e.length && e[e.length - 1] === null; ) e.pop();
}
function st(e, t) {
  const s = e.handlers, i = Hr(s);
  s !== t.handlersRef ? (t.handlersRef = s, t.handlerEntries.clear()) : i !== t.handlersLength && (i ? t.handlerEntries.forEach(function(r, a) {
    s[r.index] !== r.handler && t.handlerEntries.delete(a);
  }) : t.handlerEntries.clear()), t.handlersLength = i;
}
var En = class {
  constructor() {
    this.handlers = [], this[tt] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: /* @__PURE__ */ new Map(),
      iterationDepth: 0,
      nextId: 0
    };
  }
  use(e, t, s) {
    const i = {
      fulfilled: e,
      rejected: t,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }, n = this[tt];
    this.handlers == null && (this.handlers = []), st(this, n);
    const r = n.nextId++;
    return this.handlers.push(i), n.handlerEntries.set(r, {
      handler: i,
      index: this.handlers.length - 1
    }), n.handlersLength = this.handlers.length, r;
  }
  eject(e) {
    const t = this[tt];
    st(this, t);
    const s = t.handlerEntries.get(e);
    if (s) {
      if (t.handlerEntries.delete(e), this.handlers[s.index] !== s.handler) return;
      this.handlers[s.index] = null, t.iterationDepth || (Rn(this.handlers), t.handlersLength = this.handlers.length);
    }
  }
  clear() {
    this.handlers && (this.handlers = [], st(this, this[tt]));
  }
  forEach(e) {
    const t = this[tt];
    st(this, t), t.iterationDepth++;
    try {
      f.forEach(this.handlers, function(i) {
        i !== null && e(i);
      });
    } finally {
      --t.iterationDepth || (st(this, t), Rn(this.handlers), t.handlersLength = Hr(this.handlers));
    }
  }
}, Wi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0
}, Bl = typeof URLSearchParams < "u" ? URLSearchParams : Hi, ql = typeof FormData < "u" ? FormData : null, Vl = typeof Blob < "u" ? Blob : null, $l = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Bl,
    FormData: ql,
    Blob: Vl
  },
  protocols: [
    "http",
    "https",
    "file",
    "blob",
    "url",
    "data"
  ]
}, jl = /* @__PURE__ */ Co({
  hasBrowserEnv: () => zi,
  hasStandardBrowserEnv: () => Hl,
  hasStandardBrowserWebWorkerEnv: () => Wl,
  navigator: () => bi,
  origin: () => zl
}), zi = typeof window < "u" && typeof document < "u", bi = typeof navigator == "object" && navigator || void 0, Hl = zi && (!bi || [
  "ReactNative",
  "NativeScript",
  "NS"
].indexOf(bi.product) < 0), Wl = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zl = zi && window.location.href || "http://localhost", D = {
  ...jl,
  ...$l
};
function Ql(e, t) {
  return qs(e, new D.classes.URLSearchParams(), {
    visitor: function(s, i, n, r) {
      return D.isNode && f.isBuffer(s) ? (this.append(i, s.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
var Mn = 100;
function Wr(e) {
  if (e > Mn) throw new S("FormData field is too deeply nested (" + e + " levels). Max depth: " + Mn, S.ERR_FORM_DATA_DEPTH_EXCEEDED);
}
function Gl(e) {
  const t = [], s = /[^.[\]]+|\[([^.[\]]*)]/g;
  let i;
  for (; (i = s.exec(e)) !== null; )
    Wr(t.length), t.push(i[0] === "[]" ? "" : i[1] || i[0]);
  return t;
}
function Kl(e) {
  const t = {}, s = Object.keys(e);
  let i;
  const n = s.length;
  let r;
  for (i = 0; i < n; i++)
    r = s[i], t[r] = e[r];
  return t;
}
function zr(e) {
  function t(s, i, n, r) {
    Wr(r);
    let a = s[r++];
    if (a === "__proto__") return !0;
    const o = Number.isFinite(+a), l = r >= s.length;
    return a = !a && f.isArray(n) ? n.length : a, l ? (f.hasOwnProp(n, a) ? n[a] = f.isArray(n[a]) ? n[a].concat(i) : [n[a], i] : n[a] = i, !o) : ((!f.hasOwnProp(n, a) || !f.isObject(n[a])) && (n[a] = []), t(s, i, n[a], r) && f.isArray(n[a]) && (n[a] = Kl(n[a])), !o);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const s = {};
    return f.forEachEntry(e, (i, n) => {
      t(Gl(i), n, s, 0);
    }), s;
  }
  return null;
}
var Qr = Object.freeze([
  "get",
  "delete",
  "head",
  "options",
  "post",
  "put",
  "patch",
  "purge",
  "link",
  "unlink",
  "query"
]), Ve = (e, t) => e != null && f.hasOwnProp(e, t) ? e[t] : void 0;
function Jl(e, t, s) {
  if (f.isString(e)) try {
    return (t || JSON.parse)(e), f.trim(e);
  } catch (i) {
    if (i.name !== "SyntaxError") throw i;
  }
  return (s || JSON.stringify)(e);
}
var Mt = {
  transitional: Wi,
  adapter: [
    "xhr",
    "http",
    "fetch"
  ],
  transformRequest: [function(t, s) {
    const i = s.getContentType() || "", n = i.indexOf("application/json") > -1, r = f.isObject(t);
    if (r && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t)) return n ? JSON.stringify(zr(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t)) return t;
    if (f.isArrayBufferView(t)) return t.buffer;
    if (f.isURLSearchParams(t))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (r) {
      const o = Ve(this, "formSerializer");
      if (i.indexOf("application/x-www-form-urlencoded") > -1) return Ql(t, o).toString();
      if ((a = f.isFileList(t)) || i.indexOf("multipart/form-data") > -1) {
        const l = Ve(this, "env"), c = l && l.FormData;
        return qs(a ? { "files[]": t } : t, c && new c(), o);
      }
    }
    return r || n ? (s.setContentType("application/json", !1), Jl(t)) : t;
  }],
  transformResponse: [function(t) {
    const s = Ve(this, "transitional") || Mt.transitional, i = s && s.forcedJSONParsing, n = Ve(this, "responseType"), r = n === "json";
    if (f.isResponse(t) || f.isReadableStream(t)) return t;
    if (t && f.isString(t) && (i && !n || r)) {
      const a = !(s && s.silentJSONParsing) && r;
      try {
        return JSON.parse(t, Ve(this, "parseReviver"));
      } catch (o) {
        if (a)
          throw o.name === "SyntaxError" ? S.from(o, S.ERR_BAD_RESPONSE, this, null, Ve(this, "response")) : o;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: D.classes.FormData,
    Blob: D.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: { common: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": void 0
  } }
};
f.forEach(Qr, (e) => {
  Mt.headers[e] = {};
});
function Ys(e, t) {
  const s = this || Mt, i = t || s, n = F.from(i.headers);
  let r = i.data;
  return f.forEach(e, function(o) {
    r = o.call(s, r, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), r;
}
function Gr(e) {
  return !!(e && e.__CANCEL__);
}
var Ut = class extends S {
  constructor(e, t, s) {
    super(e ?? "canceled", S.ERR_CANCELED, t, s), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function Kr(e, t, s) {
  const i = s.config.validateStatus;
  !s.status || !i || i(s.status) ? e(s) : t(new S("Request failed with status code " + s.status, s.status >= 400 && s.status < 500 ? S.ERR_BAD_REQUEST : S.ERR_BAD_RESPONSE, s.config, s.request, s));
}
var Xl = /[\t\n\r]/g;
function Jr(e) {
  if (typeof e != "string") return e;
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; ) t++;
  return e.slice(t).replace(Xl, "");
}
function Zs(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function Yl(e, t) {
  e = e || 10;
  const s = new Array(e), i = new Array(e);
  let n = 0, r = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), d = i[r];
    a || (a = c), s[n] = l, i[n] = c;
    let h = r, p = 0;
    for (; h !== n; )
      p += s[h++], h = h % e;
    if (n = (n + 1) % e, n === r && (r = (r + 1) % e), c - a < t) return;
    const u = d && c - d;
    return u ? Math.round(p * 1e3 / u) : void 0;
  };
}
function Zl(e, t) {
  let s = 0, i = 1e3 / t, n, r;
  const a = (d, h = Date.now()) => {
    s = h, n = null, r && (clearTimeout(r), r = null), e(...d);
  };
  return [
    (...d) => {
      const h = Date.now(), p = h - s;
      p >= i ? a(d, h) : (n = d, r || (r = setTimeout(() => {
        r = null, a(n);
      }, i - p)));
    },
    () => n && a(n),
    (...d) => a(d)
  ];
}
var ss = (e, t, s = 3) => {
  let i = 0;
  const n = Yl(50, 250);
  return Zl((r) => {
    if (!r || !f.isNumber(r.loaded)) return;
    const a = r.loaded, o = r.lengthComputable ? r.total : void 0, l = Math.max(0, o != null ? Math.min(a, o) : a), c = Math.max(0, l - i), d = n(c);
    i = Math.max(i, l), e({
      loaded: l,
      total: o,
      progress: o ? l / o : void 0,
      bytes: c,
      rate: d || void 0,
      estimated: d && o ? (o - l) / d : void 0,
      event: r,
      lengthComputable: o != null,
      [t ? "download" : "upload"]: !0
    });
  }, s);
}, Un = (e, t) => {
  const s = e != null;
  return [(i) => t[0]({
    lengthComputable: s,
    total: e,
    loaded: i
  }), t[1]];
}, xn = (e, t = f.asap) => (...s) => t(() => e(...s)), ec = D.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (s) => (s = new URL(s, D.origin), e.protocol === s.protocol && e.host === s.host && (t || e.port === s.port)))(new URL(D.origin), D.navigator && /(msie|trident)/i.test(D.navigator.userAgent)) : () => !0, tc = D.hasStandardBrowserEnv ? {
  write(e, t, s, i, n, r, a) {
    if (typeof document > "u") return;
    const o = [`${e}=${encodeURIComponent(t)}`];
    f.isNumber(s) && o.push(`expires=${new Date(s).toUTCString()}`), f.isString(i) && o.push(`path=${i}`), f.isString(n) && o.push(`domain=${n}`), r === !0 && o.push("secure"), f.isString(a) && o.push(`SameSite=${a}`), document.cookie = o.join("; ");
  },
  read(e) {
    if (typeof document > "u") return null;
    const t = document.cookie.split(";");
    for (let s = 0; s < t.length; s++) {
      const i = t[s].replace(/^\s+/, ""), n = i.indexOf("=");
      if (n !== -1 && i.slice(0, n) === e) try {
        return decodeURIComponent(i.slice(n + 1));
      } catch {
        return i.slice(n + 1);
      }
    }
    return null;
  },
  remove(e) {
    this.write(e, "", Date.now() - 864e5, "/");
  }
} : {
  write() {
  },
  read() {
    return null;
  },
  remove() {
  }
};
function sc(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ic(e, t) {
  if (!t) return e;
  let s = e.length;
  for (; s > 0 && e.charCodeAt(s - 1) === 47; ) s--;
  return e.slice(0, s) + "/" + t.replace(/^\/+/, "");
}
var nc = /^https?:(?!\/\/)/i;
function rc(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, s, i = "") => `${s}${i}${ts}`);
}
function ac(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${ts}@`), s = t.indexOf("#"), i = (s === -1 ? t : t.slice(0, s)).replace(/([?&][^=&#]*=)[^&#]*/g, `$1${ts}`);
  return s === -1 ? i : `${i}#${rc(t.slice(s + 1))}`;
}
function Tn(e, t) {
  if (typeof e == "string") {
    const s = Jr(e);
    if (nc.test(s)) throw new S(`Invalid URL ${JSON.stringify(ac(s))}: missing "//" after protocol`, S.ERR_INVALID_URL, t);
  }
}
function Xr(e, t, s, i) {
  Tn(t, i);
  let n = !sc(t);
  return e && (n || s === !1) ? (Tn(e, i), ic(e, t)) : t;
}
var An = (e) => e instanceof F ? { ...e } : e, oc = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)) : Object.keys(e);
function ke(e, t) {
  e = e || {}, t = t || {};
  const s = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(s, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function i(d, h, p, u) {
    return f.isPlainObject(d) && f.isPlainObject(h) ? f.merge.call({ caseless: u }, d, h) : f.isPlainObject(h) ? f.merge({}, h) : f.isArray(h) ? h.slice() : h;
  }
  function n(d, h, p, u) {
    if (f.isUndefined(h)) {
      if (!f.isUndefined(d)) return i(void 0, d, p, u);
    } else return i(d, h, p, u);
  }
  function r(d, h) {
    if (!f.isUndefined(h)) return i(void 0, h);
  }
  function a(d, h) {
    if (f.isUndefined(h)) {
      if (!f.isUndefined(d)) return i(void 0, d);
    } else return i(void 0, h);
  }
  function o(d) {
    const h = f.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!f.isUndefined(h))
      if (f.isPlainObject(h)) {
        if (f.hasOwnProp(h, d)) return h[d];
      } else return;
    const p = f.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (f.isPlainObject(p) && f.hasOwnProp(p, d)) return p[d];
  }
  function l(d, h, p) {
    if (f.hasOwnProp(t, p)) return i(d, h);
    if (f.hasOwnProp(e, p)) return i(void 0, d);
  }
  const c = {
    url: r,
    method: r,
    data: r,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutErrorMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    allowedSocketPaths: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (d, h, p) => n(An(d), An(h), p, !0)
  };
  return f.forEach(oc({
    ...e,
    ...t
  }), function(h) {
    if (h === "__proto__" || h === "constructor" || h === "prototype") return;
    const p = f.hasOwnProp(c, h) ? c[h] : n, u = p(f.hasOwnProp(e, h) ? e[h] : void 0, f.hasOwnProp(t, h) ? t[h] : void 0, h);
    f.isUndefined(u) && p !== l || (s[h] = u);
  }), f.hasOwnProp(t, "validateStatus") && f.isUndefined(t.validateStatus) && o("validateStatusUndefinedResolves") === !1 && (f.hasOwnProp(e, "validateStatus") ? s.validateStatus = i(void 0, e.validateStatus) : delete s.validateStatus), s;
}
var lc = ["content-type", "content-length"];
function cc(e, t, s) {
  if (s !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([i, n]) => {
    lc.includes(i.toLowerCase()) && e.set(i, n);
  });
}
var dc = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, s) => String.fromCharCode(parseInt(s, 16)));
function Yr(e) {
  const t = ke({}, e), s = (p) => f.hasOwnProp(t, p) ? t[p] : void 0, i = s("data");
  let n = s("withXSRFToken");
  const r = s("xsrfHeaderName"), a = s("xsrfCookieName");
  let o = s("headers");
  const l = s("auth"), c = s("baseURL"), d = s("allowAbsoluteUrls"), h = s("url");
  if (t.headers = o = F.from(o), t.url = jr(Xr(c, h, d, t), s("params"), s("paramsSerializer")), l) {
    const p = f.getSafeProp(l, "username") || "", u = f.getSafeProp(l, "password") || "";
    try {
      o.set("Authorization", "Basic " + btoa(p + ":" + (u ? dc(u) : "")));
    } catch (m) {
      throw S.from(m, S.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (f.isFormData(i)) {
    const p = f.getSafeProp(i, "getHeaders");
    D.hasStandardBrowserEnv || D.hasStandardBrowserWebWorkerEnv || f.isReactNative(i) ? o.setContentType(void 0) : f.isFunction(p) && cc(o, p.call(i), s("formDataHeaderPolicy"));
  }
  if (D.hasStandardBrowserEnv && (f.isFunction(n) && (n = n(t)), n === !0 || n == null && ec(t.url))) {
    const p = r && a && tc.read(a);
    p && o.set(r, p);
  }
  return t;
}
var hc = typeof XMLHttpRequest < "u", uc = hc && function(e) {
  return new Promise(function(s, i) {
    const n = Yr(e);
    let r = n.data;
    const a = F.from(n.headers).normalize();
    let { responseType: o, onUploadProgress: l, onDownloadProgress: c } = n, d, h, p, u, m, y;
    function _() {
      u && u(), m && m(), n.cancelToken && n.cancelToken.unsubscribe(d), n.signal && n.signal.removeEventListener("abort", d);
    }
    let g = new XMLHttpRequest();
    g.open(n.method.toUpperCase(), n.url, !0), g.timeout = n.timeout;
    function w(v) {
      if (!g) return;
      if (g.status === 0 && (Zs(Jr(n.url)) || Zs(D.origin)) !== "file" && !(g.responseURL && g.responseURL.startsWith("file:"))) {
        i(new S("Request aborted", S.ECONNABORTED, e, g)), _(), g = null;
        return;
      }
      try {
        v ? y && y(v) : m && m();
      } catch (T) {
        setTimeout(() => {
          throw T;
        });
      }
      if (!g) return;
      const M = F.from("getAllResponseHeaders" in g && g.getAllResponseHeaders()), U = {
        data: !o || o === "text" || o === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: M,
        config: e,
        request: g
      };
      Kr(function(X) {
        s(X), _();
      }, function(X) {
        i(X), _();
      }, U), g = null;
    }
    "onloadend" in g ? g.onloadend = w : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.startsWith("file:")) || setTimeout(w);
    }, g.onabort = function() {
      g && (i(new S("Request aborted", S.ECONNABORTED, e, g)), _(), g = null);
    }, g.onerror = function(M) {
      const U = M && M.message ? M.message : "Network Error", T = new S(U, S.ERR_NETWORK, e, g);
      T.event = M || null, i(T), _(), g = null;
    }, g.ontimeout = function() {
      let M = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const U = n.transitional || Wi;
      n.timeoutErrorMessage && (M = n.timeoutErrorMessage), i(new S(M, U.clarifyTimeoutError ? S.ETIMEDOUT : S.ECONNABORTED, e, g)), _(), g = null;
    }, r === void 0 && a.setContentType(null), "setRequestHeader" in g && f.forEach(Br(a), function(M, U) {
      g.setRequestHeader(U, M);
    }), f.isUndefined(n.withCredentials) || (g.withCredentials = !!n.withCredentials), o && o !== "json" && (g.responseType = n.responseType), c && ([p, m, y] = ss(c, !0), g.addEventListener("progress", p)), l && g.upload && ([h, u] = ss(l), g.upload.addEventListener("progress", h), g.upload.addEventListener("loadend", u)), (n.cancelToken || n.signal) && (d = (v) => {
      g && (i(!v || v.type ? new Ut(null, e, g) : v), g.abort(), _(), g = null);
    }, n.cancelToken && n.cancelToken.subscribe(d), n.signal && (n.signal.aborted ? d() : n.signal.addEventListener("abort", d)));
    const b = Zs(n.url);
    if (b && !D.protocols.includes(b)) {
      i(new S("Unsupported protocol " + b + ":", S.ERR_BAD_REQUEST, e)), _();
      return;
    }
    g.send(r || null);
  });
}, fc = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length) return;
  const s = new AbortController();
  let i = !1;
  const n = function(l) {
    if (!i) {
      i = !0, a();
      const c = l instanceof Error ? l : this.reason;
      s.abort(c instanceof S ? c : new Ut(c instanceof Error ? c.message : c));
    }
  };
  let r = t && setTimeout(() => {
    r = null, n(new S(`timeout of ${t}ms exceeded`, S.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (r && clearTimeout(r), r = null, e.forEach((l) => {
      l.unsubscribe ? l.unsubscribe(n) : l.removeEventListener("abort", n);
    }), e = null);
  };
  e.forEach((l) => {
    if (!i) {
      if (l.aborted) {
        n.call(l);
        return;
      }
      l.addEventListener("abort", n, { once: !0 });
    }
  });
  const { signal: o } = s;
  return o.unsubscribe = () => f.asap(a), o;
}, pc = function* (e, t) {
  let s = e.byteLength;
  if (!t || s < t) {
    yield e;
    return;
  }
  let i = 0, n;
  for (; i < s; )
    n = i + t, yield e.slice(i, n), i = n;
}, gc = async function* (e, t) {
  for await (const s of mc(e)) yield* pc(s, t);
}, mc = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: s, value: i } = await t.read();
      if (s) break;
      yield i;
    }
  } finally {
    await t.cancel();
  }
}, Ln = (e, t, s, i) => {
  const n = gc(e, t);
  let r = 0, a, o = (l) => {
    a || (a = !0, i && i(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: d } = await n.next();
        if (c) {
          o(), l.close();
          return;
        }
        let h = d.byteLength;
        s && s(r += h), l.enqueue(new Uint8Array(d));
      } catch (c) {
        throw o(c), c;
      }
    },
    cancel(l) {
      return o(l), n.return();
    }
  }, { highWaterMark: 2 });
}, In = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Zr = (e, t, s) => t + 2 < s && In(e.charCodeAt(t + 1)) && In(e.charCodeAt(t + 2)), Dn = (e) => e <= 57 ? e - 48 : (e & 223) - 55, yc = (e) => e >= 65 && e <= 90 || e >= 97 && e <= 122 || e >= 48 && e <= 57 || e === 43 || e === 47 || e === 45 || e === 95, _c = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, wc = (e) => {
  const t = Math.floor(e / 4), s = e % 4;
  return t * 3 + (s === 2 ? 1 : s === 3 ? 2 : 0);
}, bc = (e) => {
  const t = e.length;
  let s = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (s++, t > 1 && e.charCodeAt(t - 2) === 61 && s++), Math.floor((t - s) * 3 / 4);
}, vc = (e) => {
  const t = e.length;
  let s = 0, i = 0, n = !1;
  for (let r = 0; r < t; r++) {
    let a = e.charCodeAt(r);
    if (a === 37 && Zr(e, r, t) && (a = Dn(e.charCodeAt(r + 1)) * 16 + Dn(e.charCodeAt(r + 2)), r += 2), !_c(a)) {
      if (a === 61) {
        i++;
        continue;
      }
      if (!yc(a) || i > 0) {
        n = !0;
        continue;
      }
      s++;
    }
  }
  return n || i > 2 || i > 0 && (s + i) % 4 !== 0 || s % 4 === 1 ? bc(e) : wc(s);
}, Cc = (e, t) => {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const s = e.indexOf(",");
  if (s < 0) return 0;
  const i = e.slice(5, s), n = e.slice(s + 1);
  if (/;base64/i.test(i)) return t(n);
  let r = 0;
  for (let a = 0, o = n.length; a < o; a++) {
    const l = n.charCodeAt(a);
    if (l === 37 && Zr(n, a, o))
      r += 1, a += 2;
    else if (l < 128) r += 1;
    else if (l < 2048) r += 2;
    else if (l >= 55296 && l <= 56319 && a + 1 < o) {
      const c = n.charCodeAt(a + 1);
      c >= 56320 && c <= 57343 ? (r += 4, a++) : r += 3;
    } else r += 3;
  }
  return r;
};
function Sc(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return Cc(t === -1 ? e : e.slice(0, t), vc);
}
var Qi = "1.20.0", Pn = 65536, Rc = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: !1,
  priority: "auto",
  window: null
}, { isFunction: Tt } = f, Ec = (e) => encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, s) => String.fromCharCode(parseInt(s, 16))), On = (e) => {
  if (!f.isString(e)) return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, kn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Mc = (e) => {
  const t = e.indexOf("://");
  let s = e;
  return t !== -1 && (s = s.slice(t + 3)), s.includes("@") || s.includes(":");
}, Uc = (e) => {
  const t = f.global !== void 0 && f.global !== null ? f.global : globalThis, { ReadableStream: s, TextEncoder: i } = t;
  e = f.merge.call({ skipUndefined: !0 }, {
    Request: t.Request,
    Response: t.Response
  }, e);
  const { fetch: n, Request: r, Response: a } = e, o = n ? Tt(n) : typeof fetch == "function", l = Tt(r), c = Tt(a);
  if (!o) return !1;
  const d = o && Tt(s), h = o && (typeof i == "function" ? /* @__PURE__ */ ((g) => (w) => g.encode(w))(new i()) : async (g) => new Uint8Array(await new r(g).arrayBuffer())), p = l && d && kn(() => {
    let g = !1;
    const w = new r(D.origin, {
      body: new s(),
      method: "POST",
      get duplex() {
        return g = !0, "half";
      }
    }), b = w.headers.has("Content-Type");
    return w.body != null && w.body.cancel(), g && !b;
  }), u = c && d && kn(() => f.isReadableStream(new a("").body)), m = { stream: u && ((g) => g.body) };
  o && [
    "text",
    "arrayBuffer",
    "blob",
    "formData",
    "stream"
  ].forEach((g) => {
    !m[g] && (m[g] = (w, b) => {
      let v = w && w[g];
      if (v) return v.call(w);
      throw new S(`Response type '${g}' is not supported`, S.ERR_NOT_SUPPORT, b);
    });
  });
  const y = async (g) => {
    if (g == null) return 0;
    if (f.isBlob(g)) return g.size;
    if (f.isSpecCompliantForm(g)) return (await new r(D.origin, {
      method: "POST",
      body: g
    }).arrayBuffer()).byteLength;
    if (f.isArrayBufferView(g) || f.isArrayBuffer(g)) return g.byteLength;
    if (f.isURLSearchParams(g) && (g = g + ""), f.isString(g)) return (await h(g)).byteLength;
  }, _ = async (g, w) => {
    const b = f.toFiniteNumber(g.getContentLength());
    return b ?? y(w);
  };
  return async (g) => {
    let { url: w, method: b, data: v, signal: M, cancelToken: U, timeout: T, onDownloadProgress: X, onUploadProgress: _e, responseType: Y, headers: W, withCredentials: we = "same-origin", fetchOptions: be, maxContentLength: B, maxBodyLength: Z, maxRedirects: ce } = Yr(g);
    const Xe = f.isNumber(B) && B > -1, Qs = f.isNumber(Z) && Z > -1, go = (x) => f.hasOwnProp(g, x) ? g[x] : void 0;
    let pn = n || fetch;
    Y = Y ? (Y + "").toLowerCase() : "text";
    let de = fc([M, U && U.toAbortSignal()], T), P = null;
    const ve = de && de.unsubscribe && (() => {
      de.unsubscribe();
    });
    let Be, Ye = null;
    const gn = () => new S("Request body larger than maxBodyLength limit", S.ERR_BAD_REQUEST, g, P);
    try {
      let x;
      const z = go("auth");
      if (z && (x = {
        username: f.getSafeProp(z, "username") || "",
        password: f.getSafeProp(z, "password") || ""
      }), Mc(w)) {
        const R = new URL(w, D.origin);
        !x && (R.username || R.password) && (x = {
          username: On(R.username),
          password: On(R.password)
        }), (R.username || R.password) && (R.username = "", R.password = "", w = R.href);
      }
      if (x && (W.delete("authorization"), W.set("Authorization", "Basic " + btoa(Ec((x.username || "") + ":" + (x.password || ""))))), Xe && typeof w == "string" && w.startsWith("data:") && Sc(w) > B)
        throw new S("maxContentLength size of " + B + " exceeded", S.ERR_BAD_RESPONSE, g, P);
      if (Qs && b !== "get" && b !== "head") {
        const R = await y(v);
        if (typeof R == "number" && isFinite(R) && (Be = R, R > Z))
          throw gn();
      }
      const xt = Qs && (f.isReadableStream(v) || f.isStream(v)), mn = (R, Q, qe) => Ln(R, Pn, (Ce) => {
        if (Qs && Ce > Z) throw Ye = gn();
        Q && Q(Ce);
      }, qe);
      if (p && b !== "get" && b !== "head" && (_e || xt)) {
        if (Be = Be ?? await _(W, v), Be !== 0 || xt) {
          let R = new r(w, {
            method: "POST",
            body: v,
            duplex: "half"
          }), Q;
          if (f.isFormData(v) && (Q = R.headers.get("content-type")) && W.setContentType(Q), R.body) {
            const [qe, Ce] = _e && Un(Be, ss(xn(_e))) || [];
            v = mn(R.body, qe, Ce);
          }
        }
      } else if (xt && !l && d && b !== "get" && b !== "head") v = mn(v);
      else if (xt && l && !p && b !== "get" && b !== "head") throw new S("Stream request bodies are not supported by the current fetch implementation", S.ERR_NOT_SUPPORT, g, P);
      f.isString(we) || (we = we ? "include" : "omit");
      const mo = l && "credentials" in r.prototype;
      if (f.isFormData(v)) {
        const R = W.getContentType();
        R && /^multipart\/form-data/i.test(R) && !/boundary=/i.test(R) && W.delete("content-type");
      }
      W.set("User-Agent", "axios/" + Qi, !1);
      const ee = be == null ? be : Object.assign(/* @__PURE__ */ Object.create(null), be);
      ee && (delete ee.body, delete ee.headers, delete ee.method, delete ee.signal, delete ee.duplex, delete ee.credentials);
      const ie = Object.assign(/* @__PURE__ */ Object.create(null), ee, {
        signal: de,
        method: b.toUpperCase(),
        headers: Br(W.normalize()),
        body: v,
        duplex: "half",
        credentials: mo ? we : void 0
      });
      l && (f.forEach(Rc, (R, Q) => {
        ie[Q] === void 0 && (ie[Q] = R);
      }), ie.signal === void 0 && (ie.signal = null), ie.body === void 0 && (ie.body = null)), ce === 0 && (ie.redirect = "manual", ee && (ee.redirect = "manual")), P = l && new r(w, ie);
      let ne = await (l ? pn(P, ee) : pn(w, ie));
      const yn = F.from(ne.headers);
      if (Xe) {
        const R = f.toFiniteNumber(yn.getContentLength());
        if (R != null && R > B) throw new S("maxContentLength size of " + B + " exceeded", S.ERR_BAD_RESPONSE, g, P);
      }
      const Gs = u && (Y === "stream" || Y === "response");
      if (u && ne.body && (X || Xe || Gs && ve)) {
        const R = {};
        [
          "status",
          "statusText",
          "headers"
        ].forEach((Ze) => {
          R[Ze] = ne[Ze];
        });
        const Q = f.toFiniteNumber(yn.getContentLength()), [qe, Ce] = X && Un(Q, ss(xn(X), !0)) || [];
        let _n = 0;
        const yo = (Ze) => {
          if (Xe && (_n = Ze, _n > B))
            throw new S("maxContentLength size of " + B + " exceeded", S.ERR_BAD_RESPONSE, g, P);
          qe && qe(Ze);
        };
        ne = new a(Ln(ne.body, Pn, yo, () => {
          Ce && Ce(), ve && ve();
        }), R);
      }
      Y = Y || "text";
      let re = await m[f.findKey(m, Y) || "text"](ne, g);
      if (Xe && !u && !Gs) {
        let R;
        if (re != null && (typeof re.byteLength == "number" ? R = re.byteLength : typeof re.size == "number" ? R = re.size : typeof re == "string" && (R = typeof i == "function" ? new i().encode(re).byteLength : re.length)), typeof R == "number" && R > B) throw new S("maxContentLength size of " + B + " exceeded", S.ERR_BAD_RESPONSE, g, P);
      }
      return !Gs && ve && ve(), await new Promise((R, Q) => {
        Kr(R, Q, {
          data: re,
          headers: F.from(ne.headers),
          status: ne.status,
          statusText: ne.statusText,
          config: g,
          request: P
        });
      });
    } catch (x) {
      if (ve && ve(), de && de.aborted && de.reason instanceof S) {
        const z = de.reason;
        throw z.config = g, P && (z.request = P), x !== z && Object.defineProperty(z, "cause", {
          __proto__: null,
          value: x,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), z;
      }
      if (Ye)
        throw P && !Ye.request && (Ye.request = P), Ye;
      if (x instanceof S)
        throw P && !x.request && (x.request = P), x;
      if (x && x.name === "TypeError" && /Load failed|fetch/i.test(x.message)) {
        const z = new S("Network Error", S.ERR_NETWORK, g, P, x && x.response);
        throw Object.defineProperty(z, "cause", {
          __proto__: null,
          value: x.cause || x,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), z;
      }
      throw S.from(x, x && x.code, g, P, x && x.response);
    }
  };
}, xc = /* @__PURE__ */ new Map(), ea = (e) => {
  let t = e && e.env || {};
  const { fetch: s, Request: i, Response: n } = t, r = [
    i,
    n,
    s
  ];
  let a = r.length, o, l, c = xc;
  for (; a--; )
    o = r[a], l = c.get(o), l === void 0 && c.set(o, l = a ? /* @__PURE__ */ new Map() : Uc(t)), c = l;
  return l;
}, mp = ea(), Gi = {
  http: null,
  xhr: uc,
  fetch: { get: ea }
};
f.forEach(Gi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        __proto__: null,
        value: t
      });
    } catch {
    }
    Object.defineProperty(e, "adapterName", {
      __proto__: null,
      value: t
    });
  }
});
var Nn = (e) => `- ${e}`, Tc = (e) => f.isFunction(e) || e === null || e === !1;
function Ac(e, t) {
  e = f.isArray(e) ? e : [e];
  const { length: s } = e;
  let i, n;
  const r = {};
  for (let a = 0; a < s; a++) {
    i = e[a];
    let o;
    if (n = i, !Tc(i) && (n = Gi[(o = String(i)).toLowerCase()], n === void 0))
      throw new S(`Unknown adapter '${o}'`);
    if (n && (f.isFunction(n) || (n = n.get(t)))) break;
    r[o || "#" + a] = n;
  }
  if (!n) {
    const a = Object.entries(r).map(([l, c]) => `adapter ${l} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
    let o = s ? a.length > 1 ? `since :
` + a.map(Nn).join(`
`) : " " + Nn(a[0]) : "as no adapter specified";
    throw new S("There is no suitable adapter to dispatch the request " + o, S.ERR_NOT_SUPPORT);
  }
  return n;
}
var ta = {
  getAdapter: Ac,
  adapters: Gi
};
function ei(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ut(null, e);
}
function ti(e) {
  const t = f.toSafeFlatObject(e);
  return ei(t), t.headers = F.from(f.getSafeProp(t, "headers")), t.data = Ys.call(t, t.transformRequest), [
    "post",
    "put",
    "patch"
  ].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), ta.getAdapter(t.adapter || Mt.adapter, t)(t).then(function(i) {
    ei(t), t.response = i;
    try {
      i.data = Ys.call(t, t.transformResponse, i);
    } finally {
      delete t.response;
    }
    return i.headers = F.from(i.headers), i;
  }, function(i) {
    if (!Gr(i) && (ei(t), i && i.response)) {
      t.response = i.response;
      try {
        i.response.data = Ys.call(t, t.transformResponse, i.response);
      } finally {
        delete t.response;
      }
      i.response.headers = F.from(i.response.headers);
    }
    return Promise.reject(i);
  });
}
var Vs = {};
[
  "object",
  "boolean",
  "number",
  "function",
  "string",
  "symbol"
].forEach((e, t) => {
  Vs[e] = function(i) {
    return typeof i === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
var Fn = {};
Vs.transitional = function(t, s, i) {
  function n(r, a) {
    return "[Axios v" + Qi + "] Transitional option '" + r + "'" + a + (i ? ". " + i : "");
  }
  return (r, a, o) => {
    if (t === !1) throw new S(n(a, " has been removed" + (s ? " in " + s : "")), S.ERR_DEPRECATED);
    return s && !Fn[a] && (Fn[a] = !0, console.warn(n(a, " has been deprecated since v" + s + " and will be removed in the near future"))), t ? t(r, a, o) : !0;
  };
};
Vs.spelling = function(t) {
  return (s, i) => (console.warn(`${i} is likely a misspelling of ${t}`), !0);
};
function Lc(e, t, s) {
  if (typeof e != "object" || e === null) throw new S("options must be an object", S.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let n = i.length;
  for (; n-- > 0; ) {
    const r = i[n], a = Object.prototype.hasOwnProperty.call(t, r) ? t[r] : void 0;
    if (a) {
      const o = e[r], l = o === void 0 || a(o, r, e);
      if (l !== !0) throw new S("option " + r + " must be " + l, S.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0) throw new S("Unknown option " + r, S.ERR_BAD_OPTION);
  }
}
var zt = {
  assertOptions: Lc,
  validators: Vs
}, k = zt.validators, Le = class {
  constructor(e) {
    this.defaults = e || {}, this.interceptors = {
      request: new En(),
      response: new En()
    };
  }
  async request(e, t) {
    try {
      return await this._request(e, t);
    } catch (s) {
      if (s instanceof Error) try {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = /* @__PURE__ */ new Error();
        const n = i.stack;
        let r = "";
        if (typeof n == "string") {
          const a = n.indexOf(`
`);
          r = a === -1 ? "" : n.slice(a + 1);
        }
        if (!s.stack) s.stack = r;
        else if (r) {
          const a = r.indexOf(`
`), o = a === -1 ? -1 : r.indexOf(`
`, a + 1), l = o === -1 ? "" : r.slice(o + 1);
          String(s.stack).endsWith(l) || (s.stack += `
` + r);
        }
      } catch {
      }
      throw s;
    }
  }
  _request(e, t) {
    typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = ke(this.defaults, t);
    const { transitional: s, paramsSerializer: i, headers: n } = t;
    s !== void 0 && zt.assertOptions(s, {
      silentJSONParsing: k.transitional(k.boolean),
      forcedJSONParsing: k.transitional(k.boolean),
      clarifyTimeoutError: k.transitional(k.boolean),
      legacyInterceptorReqResOrdering: k.transitional(k.boolean),
      advertiseZstdAcceptEncoding: k.transitional(k.boolean),
      validateStatusUndefinedResolves: k.transitional(k.boolean)
    }, !1), i != null && (f.isFunction(i) ? t.paramsSerializer = { serialize: i } : zt.assertOptions(i, {
      encode: k.function,
      serialize: k.function
    }, !0)), t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : t.allowAbsoluteUrls = !0), zt.assertOptions(t, {
      baseUrl: k.spelling("baseURL"),
      withXsrfToken: k.spelling("withXSRFToken")
    }, !0), t.method = (f.getSafeProp(t, "method") || f.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    let r = n && f.merge(n.common, n[t.method]);
    n && f.forEach(Qr.concat("common"), (u) => {
      delete n[u];
    }), t.headers = F.concat(r, n);
    const a = [];
    let o = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(t) === !1) return;
      o = o && m.synchronous;
      const y = t.transitional || Wi;
      y && y.legacyInterceptorReqResOrdering ? a.unshift(m.fulfilled, m.rejected) : a.push(m.fulfilled, m.rejected);
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let c, d = 0, h;
    if (!o) {
      const u = [ti.bind(this), void 0];
      for (u.unshift(...a), u.push(...l), h = u.length, c = Promise.resolve(t); d < h; ) c = c.then(u[d++], u[d++]);
      return c;
    }
    h = a.length;
    let p = t;
    for (; d < h; ) {
      const u = a[d++], m = a[d++];
      try {
        p = u ? u(p) : p;
      } catch (y) {
        if (!m) {
          c = Promise.reject(y);
          break;
        }
        try {
          const _ = m.call(this, y);
          f.isThenable(_) && (c = Promise.resolve(_).then(() => ti.call(this, p)));
        } catch (_) {
          c = Promise.reject(_);
        }
        break;
      }
    }
    if (!c) try {
      c = ti.call(this, p);
    } catch (u) {
      c = Promise.reject(u);
    }
    for (d = 0, h = l.length; d < h; ) c = c.then(l[d++], l[d++]);
    return c;
  }
  getUri(e) {
    e = ke(this.defaults, e);
    const t = Xr(e.baseURL, e.url, e.allowAbsoluteUrls, e);
    return jr(t, e.params, e.paramsSerializer);
  }
};
f.forEach([
  "delete",
  "get",
  "head",
  "options"
], function(t) {
  Le.prototype[t] = function(s, i) {
    return this.request(ke(i || {}, {
      method: t,
      url: s,
      data: i && f.hasOwnProp(i, "data") ? i.data : void 0
    }));
  };
});
f.forEach([
  "post",
  "put",
  "patch",
  "query"
], function(t) {
  function s(i) {
    return function(r, a, o) {
      return this.request(ke(o || {}, {
        method: t,
        headers: i ? { "Content-Type": "multipart/form-data" } : {},
        url: r,
        data: a
      }));
    };
  }
  Le.prototype[t] = s(), t !== "query" && (Le.prototype[t + "Form"] = s(!0));
});
var Ic = class sa {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(r) {
      s = r;
    });
    const i = this;
    this.promise.then((n) => {
      if (!i._listeners) return;
      let r = i._listeners.length;
      for (; r-- > 0; ) i._listeners[r](n);
      i._listeners = null;
    }), this.promise.then = (n) => {
      let r;
      const a = new Promise((o) => {
        i.subscribe(o), r = o;
      }).then(n);
      return a.cancel = function() {
        i.unsubscribe(r);
      }, a;
    }, t(function(r, a, o) {
      i.reason || (i.reason = new Ut(r, a, o), s(i.reason));
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const s = this._listeners.indexOf(t);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), s = (i) => {
      t.abort(i);
    };
    return this.subscribe(s), t.signal.unsubscribe = () => this.unsubscribe(s), t.signal;
  }
  static source() {
    let t;
    return {
      token: new sa(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function Dc(e) {
  return function(s) {
    return e.apply(null, s);
  };
}
function Pc(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
var Qt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Qt).forEach(([e, t]) => {
  Qt[t] === void 0 && (Qt[t] = e);
});
function ia(e) {
  const t = new Le(e), s = xr(Le.prototype.request, t);
  return f.extend(s, Le.prototype, t, { allOwnKeys: !0 }), f.extend(s, t, null, { allOwnKeys: !0 }), s.create = function(n) {
    return ia(ke(e, n));
  }, s;
}
var L = ia(Mt);
L.Axios = Le;
L.CanceledError = Ut;
L.CancelToken = Ic;
L.isCancel = Gr;
L.VERSION = Qi;
L.toFormData = qs;
L.AxiosError = S;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = Dc;
L.isAxiosError = Pc;
L.mergeConfig = ke;
L.AxiosHeaders = F;
L.formToJSON = (e) => zr(f.isHTMLForm(e) ? new FormData(e) : e);
L.getAdapter = ta.getAdapter;
L.HttpStatusCode = Qt;
L.default = L;
var Oc = /* @__PURE__ */ Ur(((e, t) => {
  t.exports = typeof self == "object" ? self.FormData : window.FormData;
})), kc = Eo(), Nc = /* @__PURE__ */ Ro(Oc(), 1), Fc = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Bc = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", vi = "numeric", Ci = "ascii", Si = "alpha", dt = "asciinumeric", lt = "alphanumeric", Ri = "domain", na = "emoji", qc = "scheme", Vc = "slashscheme", si = "whitespace";
function $c(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Te(e, t, s) {
  t[vi] && (t[dt] = !0, t[lt] = !0), t[Ci] && (t[dt] = !0, t[Si] = !0), t[dt] && (t[lt] = !0), t[Si] && (t[lt] = !0), t[lt] && (t[Ri] = !0), t[na] && (t[Ri] = !0);
  for (const i in t) {
    const n = $c(i, s);
    n.indexOf(e) < 0 && n.push(e);
  }
}
function jc(e, t) {
  const s = {};
  for (const i in t) t[i].indexOf(e) >= 0 && (s[i] = !0);
  return s;
}
function H(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
H.groups = {};
H.prototype = {
  accepts() {
    return !!this.t;
  },
  go(e) {
    const t = this, s = t.j[e];
    if (s) return s;
    for (let i = 0; i < t.jr.length; i++) {
      const n = t.jr[i][0], r = t.jr[i][1];
      if (r && n.test(e)) return r;
    }
    return t.jd;
  },
  has(e, t = !1) {
    return t ? e in this.j : !!this.go(e);
  },
  ta(e, t, s, i) {
    for (let n = 0; n < e.length; n++) this.tt(e[n], t, s, i);
  },
  tr(e, t, s, i) {
    i = i || H.groups;
    let n;
    return t && t.j ? n = t : (n = new H(t), s && i && Te(t, s, i)), this.jr.push([e, n]), n;
  },
  ts(e, t, s, i) {
    let n = this;
    const r = e.length;
    if (!r) return n;
    for (let a = 0; a < r - 1; a++) n = n.tt(e[a]);
    return n.tt(e[r - 1], t, s, i);
  },
  tt(e, t, s, i) {
    i = i || H.groups;
    const n = this;
    if (t && t.j)
      return n.j[e] = t, t;
    const r = t;
    let a, o = n.go(e);
    return o ? (a = new H(), Object.assign(a.j, o.j), a.jr.push.apply(a.jr, o.jr), a.jd = o.jd, a.t = o.t) : a = new H(), r && (i && (a.t && typeof a.t == "string" ? Te(r, Object.assign(jc(a.t, i), s), i) : s && Te(r, s, i)), a.t = r), n.j[e] = a, a;
  }
};
var E = (e, t, s, i, n) => e.ta(t, s, i, n), I = (e, t, s, i, n) => e.tr(t, s, i, n), Bn = (e, t, s, i, n) => e.ts(t, s, i, n), C = (e, t, s, i, n) => e.tt(t, s, i, n), le = "WORD", Ei = "UWORD", ra = "ASCIINUMERICAL", aa = "ALPHANUMERICAL", wt = "LOCALHOST", Mi = "TLD", Ui = "UTLD", Gt = "SCHEME", $e = "SLASH_SCHEME", Ki = "NUM", xi = "WS", Ji = "NL", ht = "OPENBRACE", ut = "CLOSEBRACE", is = "OPENBRACKET", ns = "CLOSEBRACKET", rs = "OPENPAREN", as = "CLOSEPAREN", os = "OPENANGLEBRACKET", ls = "CLOSEANGLEBRACKET", cs = "FULLWIDTHLEFTPAREN", ds = "FULLWIDTHRIGHTPAREN", hs = "LEFTCORNERBRACKET", us = "RIGHTCORNERBRACKET", fs = "LEFTWHITECORNERBRACKET", ps = "RIGHTWHITECORNERBRACKET", gs = "FULLWIDTHLESSTHAN", ms = "FULLWIDTHGREATERTHAN", ys = "AMPERSAND", _s = "APOSTROPHE", ws = "ASTERISK", pe = "AT", bs = "BACKSLASH", vs = "BACKTICK", Cs = "CARET", Ae = "COLON", Xi = "COMMA", Ss = "DOLLAR", te = "DOT", Rs = "EQUALS", Yi = "EXCLAMATION", K = "HYPHEN", ft = "PERCENT", Es = "PIPE", Ms = "PLUS", Us = "POUND", pt = "QUERY", Zi = "QUOTE", oa = "FULLWIDTHMIDDLEDOT", en = "SEMI", se = "SLASH", gt = "TILDE", xs = "UNDERSCORE", la = "EMOJI", Ts = "SYM", ca = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: aa,
  AMPERSAND: ys,
  APOSTROPHE: _s,
  ASCIINUMERICAL: ra,
  ASTERISK: ws,
  AT: pe,
  BACKSLASH: bs,
  BACKTICK: vs,
  CARET: Cs,
  CLOSEANGLEBRACKET: ls,
  CLOSEBRACE: ut,
  CLOSEBRACKET: ns,
  CLOSEPAREN: as,
  COLON: Ae,
  COMMA: Xi,
  DOLLAR: Ss,
  DOT: te,
  EMOJI: la,
  EQUALS: Rs,
  EXCLAMATION: Yi,
  FULLWIDTHGREATERTHAN: ms,
  FULLWIDTHLEFTPAREN: cs,
  FULLWIDTHLESSTHAN: gs,
  FULLWIDTHMIDDLEDOT: oa,
  FULLWIDTHRIGHTPAREN: ds,
  HYPHEN: K,
  LEFTCORNERBRACKET: hs,
  LEFTWHITECORNERBRACKET: fs,
  LOCALHOST: wt,
  NL: Ji,
  NUM: Ki,
  OPENANGLEBRACKET: os,
  OPENBRACE: ht,
  OPENBRACKET: is,
  OPENPAREN: rs,
  PERCENT: ft,
  PIPE: Es,
  PLUS: Ms,
  POUND: Us,
  QUERY: pt,
  QUOTE: Zi,
  RIGHTCORNERBRACKET: us,
  RIGHTWHITECORNERBRACKET: ps,
  SCHEME: Gt,
  SEMI: en,
  SLASH: se,
  SLASH_SCHEME: $e,
  SYM: Ts,
  TILDE: gt,
  TLD: Mi,
  UNDERSCORE: xs,
  UTLD: Ui,
  UWORD: Ei,
  WORD: le,
  WS: xi
}), ae = /[a-z]/, it = /\p{L}/u, ii = /\p{Emoji}/u, oe = /\d/, ni = /\s/, qn = "\r", ri = `
`, Hc = "️", Wc = "‍", ai = "￼", At = null, Lt = null;
function zc(e = []) {
  const t = {};
  H.groups = t;
  const s = new H();
  At == null && (At = Vn(Fc)), Lt == null && (Lt = Vn(Bc)), C(s, "'", _s), C(s, "{", ht), C(s, "}", ut), C(s, "[", is), C(s, "]", ns), C(s, "(", rs), C(s, ")", as), C(s, "<", os), C(s, ">", ls), C(s, "（", cs), C(s, "）", ds), C(s, "「", hs), C(s, "」", us), C(s, "『", fs), C(s, "』", ps), C(s, "＜", gs), C(s, "＞", ms), C(s, "&", ys), C(s, "*", ws), C(s, "@", pe), C(s, "`", vs), C(s, "^", Cs), C(s, ":", Ae), C(s, ",", Xi), C(s, "$", Ss), C(s, ".", te), C(s, "=", Rs), C(s, "!", Yi), C(s, "-", K), C(s, "%", ft), C(s, "|", Es), C(s, "+", Ms), C(s, "#", Us), C(s, "?", pt), C(s, '"', Zi), C(s, "/", se), C(s, ";", en), C(s, "~", gt), C(s, "_", xs), C(s, "\\", bs), C(s, "・", oa);
  const i = I(s, oe, Ki, { [vi]: !0 });
  I(i, oe, i);
  const n = I(i, ae, ra, { [dt]: !0 }), r = I(i, it, aa, { [lt]: !0 }), a = I(s, ae, le, { [Ci]: !0 });
  I(a, oe, n), I(a, ae, a), I(n, oe, n), I(n, ae, n);
  const o = I(s, it, Ei, { [Si]: !0 });
  I(o, ae), I(o, oe, r), I(o, it, o), I(r, oe, r), I(r, ae), I(r, it, r);
  const l = C(s, ri, Ji, { [si]: !0 }), c = C(s, qn, xi, { [si]: !0 }), d = I(s, ni, xi, { [si]: !0 });
  C(s, ai, d), C(c, ri, l), C(c, ai, d), I(c, ni, d), C(d, qn), C(d, ri), I(d, ni, d), C(d, ai, d);
  const h = I(s, ii, la, { [na]: !0 });
  C(h, "#"), I(h, ii, h), C(h, Hc, h);
  const p = C(h, Wc);
  C(p, "#"), I(p, ii, h);
  const u = [[ae, a], [oe, n]], m = [
    [ae, null],
    [it, o],
    [oe, r]
  ];
  for (let y = 0; y < At.length; y++) he(s, At[y], Mi, le, u);
  for (let y = 0; y < Lt.length; y++) he(s, Lt[y], Ui, Ei, m);
  Te(Mi, {
    tld: !0,
    ascii: !0
  }, t), Te(Ui, {
    utld: !0,
    alpha: !0
  }, t), he(s, "file", Gt, le, u), he(s, "mailto", Gt, le, u), he(s, "http", $e, le, u), he(s, "https", $e, le, u), he(s, "ftp", $e, le, u), he(s, "ftps", $e, le, u), Te(Gt, {
    scheme: !0,
    ascii: !0
  }, t), Te($e, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((y, _) => y[0] > _[0] ? 1 : -1);
  for (let y = 0; y < e.length; y++) {
    const _ = e[y][0], g = e[y][1] ? { [qc]: !0 } : { [Vc]: !0 };
    _.indexOf("-") >= 0 ? g[Ri] = !0 : ae.test(_) ? oe.test(_) ? g[dt] = !0 : g[Ci] = !0 : g[vi] = !0, Bn(s, _, _, g);
  }
  return Bn(s, "localhost", wt, { ascii: !0 }), s.jd = new H(Ts), {
    start: s,
    tokens: Object.assign({ groups: t }, ca)
  };
}
function da(e, t) {
  const s = Qc(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = s.length, n = [];
  let r = 0, a = 0;
  for (; a < i; ) {
    let o = e, l = null, c = 0, d = null, h = -1, p = -1;
    for (; a < i && (l = o.go(s[a])); )
      o = l, o.accepts() ? (h = 0, p = 0, d = o) : h >= 0 && (h += s[a].length, p++), c += s[a].length, r += s[a].length, a++;
    r -= h, a -= p, c -= h, n.push({
      t: d.t,
      v: t.slice(r - c, r),
      s: r - c,
      e: r
    });
  }
  return n;
}
function Qc(e) {
  const t = [], s = e.length;
  let i = 0;
  for (; i < s; ) {
    let n = e.charCodeAt(i), r, a = n < 55296 || n > 56319 || i + 1 === s || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(a), i += a.length;
  }
  return t;
}
function he(e, t, s, i, n) {
  let r;
  const a = t.length;
  for (let o = 0; o < a - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new H(i), r.jr = n.slice(), e.j[l] = r), e = r;
  }
  return r = new H(s), r.jr = n.slice(), e.j[t[a - 1]] = r, r;
}
function Vn(e) {
  const t = [], s = [];
  let i = 0, n = "0123456789";
  for (; i < e.length; ) {
    let r = 0;
    for (; n.indexOf(e[i + r]) >= 0; ) r++;
    if (r > 0) {
      t.push(s.join(""));
      for (let a = parseInt(e.substring(i, i + r), 10); a > 0; a--) s.pop();
      i += r;
    } else
      s.push(e[i]), i++;
  }
  return t;
}
var bt = {
  defaultProtocol: "http",
  events: null,
  format: $n,
  formatHref: $n,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function tn(e, t = null) {
  let s = Object.assign({}, bt);
  e && (s = Object.assign(s, e instanceof tn ? e.o : e));
  const i = s.ignoreTags, n = [];
  for (let r = 0; r < i.length; r++) n.push(i[r].toUpperCase());
  this.o = s, t && (this.defaultRender = t), this.ignoreTags = n;
}
tn.prototype = {
  o: bt,
  ignoreTags: [],
  defaultRender(e) {
    return e;
  },
  check(e) {
    return this.get("validate", e.toString(), e);
  },
  get(e, t, s) {
    const i = t != null;
    let n = this.o[e];
    return n && (typeof n == "object" ? (n = s.t in n ? n[s.t] : bt[e], typeof n == "function" && i && (n = n(t, s))) : typeof n == "function" && i && (n = n(t, s.t, s)), n);
  },
  getObj(e, t, s) {
    let i = this.o[e];
    return typeof i == "function" && t != null && (i = i(t, s.t, s)), i;
  },
  render(e) {
    const t = e.render(this);
    return (this.get("render", null, e) || this.defaultRender)(t, e.t, e);
  }
};
function $n(e) {
  return e;
}
function ha(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
ha.prototype = {
  isLink: !1,
  toString() {
    return this.v;
  },
  toHref(e) {
    return this.toString();
  },
  toFormattedString(e) {
    const t = this.toString(), s = e.get("truncate", t, this), i = e.get("format", t, this);
    return s && i.length > s ? i.substring(0, s) + "…" : i;
  },
  toFormattedHref(e) {
    return e.get("formatHref", this.toHref(e.get("defaultProtocol")), this);
  },
  startIndex() {
    return this.tk[0].s;
  },
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  toObject(e = bt.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  toFormattedObject(e) {
    return {
      type: this.t,
      value: this.toFormattedString(e),
      isLink: this.isLink,
      href: this.toFormattedHref(e),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  validate(e) {
    return e.get("validate", this.toString(), this);
  },
  render(e) {
    const t = this, s = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", s, this), n = e.get("tagName", s, t), r = this.toFormattedString(e), a = {}, o = e.get("className", s, t), l = e.get("target", s, t), c = e.get("rel", s, t), d = e.getObj("attributes", s, t), h = e.getObj("events", s, t);
    return a.href = i, o && (a.class = o), l && (a.target = l), c && (a.rel = c), d && Object.assign(a, d), {
      tagName: n,
      attributes: a,
      content: r,
      eventListeners: h
    };
  }
};
function $s(e, t) {
  class s extends ha {
    constructor(n, r) {
      super(n, r), this.t = e;
    }
  }
  for (const i in t) s.prototype[i] = t[i];
  return s.t = e, s;
}
var Gc = $s("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), jn = $s("text"), Kc = $s("nl"), It = $s("url", {
  isLink: !0,
  toHref(e = bt.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== wt && e[1].t === Ae;
  }
}), G = (e) => new H(e);
function Jc({ groups: e }) {
  const t = e.domain.concat([
    ys,
    ws,
    pe,
    bs,
    vs,
    Cs,
    Ss,
    Rs,
    K,
    Ki,
    ft,
    Es,
    Ms,
    Us,
    se,
    Ts,
    gt,
    xs
  ]), s = [
    _s,
    Ae,
    Xi,
    te,
    Yi,
    ft,
    pt,
    Zi,
    en,
    os,
    ls,
    ht,
    ut,
    ns,
    is,
    rs,
    as,
    cs,
    ds,
    hs,
    us,
    fs,
    ps,
    gs,
    ms
  ], i = [
    ys,
    _s,
    ws,
    bs,
    vs,
    Cs,
    Ss,
    Rs,
    K,
    ht,
    ut,
    ft,
    Es,
    Ms,
    Us,
    pt,
    se,
    Ts,
    gt,
    xs
  ], n = G(), r = C(n, gt);
  E(r, i, r), E(r, e.domain, r);
  const a = G(), o = G(), l = G();
  E(n, e.domain, a), E(n, e.scheme, o), E(n, e.slashscheme, l), E(a, i, r), E(a, e.domain, a);
  const c = C(a, pe);
  C(r, pe, c), C(o, pe, c), C(l, pe, c);
  const d = C(r, te);
  E(d, i, r), E(d, e.domain, r);
  const h = G();
  E(c, e.domain, h), E(h, e.domain, h);
  const p = C(h, te);
  E(p, e.domain, h);
  const u = G(Gc);
  E(p, e.tld, u), E(p, e.utld, u), C(c, wt, u);
  const m = C(h, K);
  C(m, K, m), E(m, e.domain, h), E(u, e.domain, h), C(u, te, p), C(u, K, m);
  const y = C(a, K), _ = C(a, te);
  C(y, K, y), E(y, e.domain, a), E(_, i, r), E(_, e.domain, a);
  const g = G(It);
  E(_, e.tld, g), E(_, e.utld, g), E(g, e.domain, a), E(g, i, r), C(g, te, _), C(g, K, y), C(g, pe, c);
  const w = C(g, Ae), b = G(It);
  E(w, e.numeric, b);
  const v = G(It), M = G();
  E(v, t, v), E(v, s, M), E(M, t, v), E(M, s, M), C(g, se, v), C(b, se, v);
  const U = C(o, Ae), T = C(l, Ae), X = C(T, se), _e = C(X, se);
  E(o, e.domain, a), C(o, te, _), C(o, K, y), E(l, e.domain, a), C(l, te, _), C(l, K, y), E(U, e.domain, v), C(U, se, v), C(U, pt, v), E(_e, e.domain, v), E(_e, t, v), C(_e, se, v);
  const Y = [
    [ht, ut],
    [is, ns],
    [rs, as],
    [os, ls],
    [cs, ds],
    [hs, us],
    [fs, ps],
    [gs, ms]
  ];
  for (let W = 0; W < Y.length; W++) {
    const [we, be] = Y[W], B = C(v, we);
    C(M, we, B);
    const Z = G(It);
    E(B, t, Z);
    const ce = G();
    E(B, s, ce), C(B, be, v), E(Z, t, Z), E(Z, s, ce), E(ce, t, Z), E(ce, s, ce), C(Z, be, v), C(ce, be, v);
  }
  return C(n, wt, g), C(n, Ji, Kc), {
    start: n,
    tokens: ca
  };
}
function Xc(e, t, s) {
  let i = s.length, n = 0, r = [], a = [];
  for (; n < i; ) {
    let o = e, l = null, c = null, d = 0, h = null, p = -1;
    for (; n < i && !(l = o.go(s[n].t)); ) a.push(s[n++]);
    for (; n < i && (c = l || o.go(s[n].t)); )
      l = null, o = c, o.accepts() ? (p = 0, h = o) : p >= 0 && p++, n++, d++;
    if (p < 0)
      n -= d, n < i && (a.push(s[n]), n++);
    else {
      a.length > 0 && (r.push(oi(jn, t, a)), a = []), n -= p, d -= p;
      const u = h.t, m = s.slice(n - d, n);
      r.push(oi(u, t, m));
    }
  }
  return a.length > 0 && r.push(oi(jn, t, a)), r;
}
function oi(e, t, s) {
  const i = s[0].s, n = s[s.length - 1].e;
  return new e(t.slice(i, n), s);
}
var N = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function Yc() {
  N.scanner = zc(N.customSchemes);
  for (let e = 0; e < N.tokenQueue.length; e++) N.tokenQueue[e][1]({ scanner: N.scanner });
  N.parser = Jc(N.scanner.tokens);
  for (let e = 0; e < N.pluginQueue.length; e++) N.pluginQueue[e][1]({
    scanner: N.scanner,
    parser: N.parser
  });
  return N.initialized = !0, N;
}
function ua(e) {
  return N.initialized || Yc(), Xc(N.parser.start, e, da(N.scanner.start, e));
}
ua.scan = da;
function Zc(e, t = null, s = null) {
  if (t && typeof t == "object") {
    if (s) throw Error(`linkifyjs: Invalid link type ${t}; must be a string`);
    s = t, t = null;
  }
  const i = new tn(s), n = ua(e), r = [];
  for (let a = 0; a < n.length; a++) {
    const o = n[a];
    o.isLink && (!t || o.t === t) && i.check(o) && r.push(o.toFormattedObject(i));
  }
  return r;
}
var je = null;
typeof WebSocket < "u" ? je = WebSocket : typeof MozWebSocket < "u" ? je = MozWebSocket : typeof global < "u" ? je = global.WebSocket || global.MozWebSocket : typeof window < "u" ? je = window.WebSocket || window.MozWebSocket : typeof self < "u" && (je = self.WebSocket || self.MozWebSocket);
var ed = je, td = Object.create, fa = Object.defineProperty, sd = Object.getOwnPropertyDescriptor, pa = Object.getOwnPropertyNames, id = Object.getPrototypeOf, nd = Object.prototype.hasOwnProperty, js = (e, t) => function() {
  try {
    return t || (0, e[pa(e)[0]])((t = { exports: {} }).exports, t), t.exports;
  } catch (i) {
    throw t = 0, i;
  }
}, rd = (e, t, s, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of pa(t)) !nd.call(e, n) && n !== s && fa(e, n, {
      get: () => t[n],
      enumerable: !(i = sd(t, n)) || i.enumerable
    });
  return e;
}, Hs = (e, t, s) => (s = e != null ? td(id(e)) : {}, rd(t || !e || !e.__esModule ? fa(s, "default", {
  value: e,
  enumerable: !0
}) : s, e)), ad = js({ "(disabled):https"() {
} }), od = js({ "(disabled):node_modules/jsonwebtoken/index.js"() {
} }), ld = js({ "(disabled):crypto"() {
} }), cd = js({ "(disabled):zlib"() {
} });
function Ti(e) {
  return typeof e == "string";
}
function Hn(e, t) {
  return !!t && Ti(e);
}
function dd(e, t) {
  const s = [];
  if (Ti(e) && Hn(e, t)) {
    for (let i = 0, n = e.length; i < n; i++) if (e.charAt(i)) {
      const r = t(e.charAt(i), i, e);
      s[i] = r;
    }
  } else if (!Ti(e) && !Hn(e, t)) {
    for (let i = 0, n = e.length; i < n; i++) if (i in e) {
      const r = e[i], a = t(r, i, e);
      s[i] = a;
    }
  }
  return s;
}
var hd = (e) => (0, kc.fromByteArray)(new Uint8Array(dd(e, (t) => t.charCodeAt(0)))), ud = (e) => {
  const t = {}, s = String.fromCharCode, i = e.length;
  let n, r = 0, a, o, l = 0, c, d = "";
  const h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (n = 0; n < 64; n++) t[h.charAt(n)] = n;
  for (o = 0; o < i; o++)
    for (a = t[e.charAt(o)], r = (r << 6) + a, l += 6; l >= 8; ) ((c = r >>> (l -= 8) & 255) || o < i - 2) && (d += s(c));
  return d;
}, Wn = class {
  constructor(e, t, s) {
    this.client = e, this.id = t, this.data = s;
  }
  async create() {
    const e = {
      id: this.id,
      message_template: this.data?.message_template,
      segment_ids: this.data?.segment_ids,
      sender_id: this.data?.sender_id,
      sender_mode: this.data?.sender_mode,
      sender_visibility: this.data?.sender_visibility,
      channel_template: this.data?.channel_template,
      create_channels: this.data?.create_channels,
      show_channels: this.data?.show_channels,
      description: this.data?.description,
      name: this.data?.name,
      skip_push: this.data?.skip_push,
      skip_webhook: this.data?.skip_webhook,
      user_ids: this.data?.user_ids
    }, t = await this.client.createCampaign(e);
    return this.id = t.campaign.id, this.data = t.campaign, t;
  }
  verifyCampaignId() {
    if (!this.id) throw new Error("Campaign id is missing. Either create the campaign using campaign.create() or set the id during instantiation - const campaign = client.campaign(id)");
  }
  async start(e) {
    return this.verifyCampaignId(), await this.client.startCampaign(this.id, e);
  }
  update(e) {
    return this.verifyCampaignId(), this.client.updateCampaign(this.id, e);
  }
  async delete() {
    return this.verifyCampaignId(), await this.client.deleteCampaign(this.id);
  }
  stop() {
    return this.verifyCampaignId(), this.client.stopCampaign(this.id);
  }
  get(e) {
    return this.verifyCampaignId(), this.client.getCampaign(this.id, e);
  }
}, fd = (e) => "data" in e || "custom_set" in e || "custom_unset" in e, pd = class {
  constructor(e) {
    this.client = e;
  }
  async addMembers(e, t) {
    return await this.client.updateChannelsBatch({
      operation: "addMembers",
      filter: e,
      members: t
    });
  }
  async removeMembers(e, t) {
    return await this.client.updateChannelsBatch({
      operation: "removeMembers",
      filter: e,
      members: t
    });
  }
  async inviteMembers(e, t) {
    return await this.client.updateChannelsBatch({
      operation: "inviteMembers",
      filter: e,
      members: t
    });
  }
  async addModerators(e, t) {
    return await this.client.updateChannelsBatch({
      operation: "addModerators",
      filter: e,
      members: t
    });
  }
  async demoteModerators(e, t) {
    return await this.client.updateChannelsBatch({
      operation: "demoteModerators",
      filter: e,
      members: t
    });
  }
  async assignRoles(e, t) {
    return await this.client.updateChannelsBatch({
      operation: "assignRoles",
      filter: e,
      members: t
    });
  }
  async hide(e) {
    return await this.client.updateChannelsBatch({
      operation: "hide",
      filter: e
    });
  }
  async show(e) {
    return await this.client.updateChannelsBatch({
      operation: "show",
      filter: e
    });
  }
  async archive(e) {
    return await this.client.updateChannelsBatch({
      operation: "archive",
      filter: e
    });
  }
  async unarchive(e) {
    return await this.client.updateChannelsBatch({
      operation: "unarchive",
      filter: e
    });
  }
  async updateData(e, t) {
    const { data: s, custom_set: i, custom_unset: n } = fd(t) ? t : { data: t };
    return await this.client.updateChannelsBatch({
      operation: "updateData",
      filter: e,
      ...s && { data: s },
      ...i && { custom_set: i },
      ...n && { custom_unset: n }
    });
  }
}, gd = Hs(ad()), md = 25, yd = 100, Dt = Object.freeze({
  hasNext: !1,
  hasPrev: !1
}), _d = 104857600, wd = 10, bd = 100, vd = Object.freeze({
  created_at: !0,
  deleted_at: !0,
  pinned_at: !0,
  updated_at: !0,
  command: !0,
  mentioned_groups: !0,
  mentioned_users: !0,
  quoted_message: !0,
  latest_reactions: !0,
  own_reactions: !0,
  reaction_counts: !0,
  reply_count: !0,
  i18n: !0,
  type: !0,
  html: !0,
  __html: !0,
  user: !0
}), Cd = Object.freeze({ error: !0 }), Sd = 3, Rd = 1e3;
function ga(e, t) {
  e.then().catch((s) => {
    console.warn(`failed to do ${t}, ran into error: `, s);
  });
}
var ma = () => null, zn = (e, t, s) => {
  const i = "Unhandled error in event listener";
  e("error", i, {
    error: t,
    event: s
  }), e === ma && console.error(i, t, s);
}, ya = (e, t, s) => {
  try {
    const i = e(t);
    i && typeof i.then == "function" && Promise.resolve(i).catch((n) => zn(s, n, t));
  } catch (i) {
    zn(s, i, t);
  }
}, ge = (e) => new Promise((t) => setTimeout(t, e));
function Ai(e) {
  return typeof e == "function" || e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
var ct = {
  TOKEN_EXPIRED: 40,
  WS_CLOSED_SUCCESS: 1e3
};
function Ed(e) {
  return e !== null && typeof e == "object" && (e.readable || typeof e._read == "function");
}
function Md(e) {
  return e != null && e.constructor != null && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
function Ud(e) {
  return typeof window < "u" && "File" in window && e instanceof File;
}
function xd(e) {
  return typeof window < "u" && "Blob" in window && e instanceof Blob;
}
function Td(e) {
  return {
    channel_mutes: !0,
    devices: !0,
    mutes: !0,
    total_unread_count: !0,
    unread_channels: !0,
    unread_count: !0,
    unread_threads: !0,
    invisible: !0,
    privacy_settings: !0,
    roles: !0,
    push_preferences: !0,
    total_unread_count_by_team: !0
  }[e];
}
var li = (e) => {
  const t = e?.data?.own_capabilities;
  return !(Array.isArray(t) && !t.includes("read-events"));
};
function Ad(e, t, s) {
  const i = new Nc.default();
  return Ed(e) || Md(e) || Ud(e) || xd(e) ? t ? i.append("file", e, t) : i.append("file", e) : i.append("file", {
    uri: e,
    name: t || e.split("/").reverse()[0],
    contentType: s || void 0,
    type: s || void 0
  }), i;
}
function O(e) {
  const t = [], s = Array.isArray(e) ? e : [e];
  for (const i of s) {
    const n = Object.entries(i);
    n.length > 1 && console.warn("client._buildSort() - multiple fields in a single sort object detected. Object's field order is not guaranteed");
    for (const [r, a] of n) t.push({
      field: r,
      direction: a
    });
  }
  return t;
}
function As(e) {
  const t = Math.min(500 + e * 2e3, 25e3), s = Math.min(Math.max(250, (e - 1) * 2e3), 25e3);
  return Math.floor(Math.random() * (t - s) + s);
}
function He() {
  return $();
}
function nt(e) {
  let t = "";
  for (let s = 0; s < e.length; s++) t += e[s].toString(16).padStart(2, "0");
  return t;
}
function $() {
  const e = Dd(16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 191 | 128, nt(e.subarray(0, 4)) + "-" + nt(e.subarray(4, 6)) + "-" + nt(e.subarray(6, 8)) + "-" + nt(e.subarray(8, 10)) + "-" + nt(e.subarray(10, 16));
}
function Ld(e) {
  const t = Math.pow(2, 8 * e.byteLength / e.length);
  for (let s = 0; s < e.length; s++) e[s] = Math.random() * t;
}
var Id = typeof crypto < "u" && typeof crypto?.getRandomValues < "u" ? crypto.getRandomValues.bind(crypto) : typeof msCrypto < "u" ? msCrypto.getRandomValues.bind(msCrypto) : Ld;
function Dd(e) {
  const t = new Uint8Array(e);
  return Id(t), t;
}
function Pd(e) {
  const t = {};
  if (!e) return t;
  try {
    Object.getOwnPropertyNames(e).forEach((s) => {
      t[s] = Object.getOwnPropertyDescriptor(e, s);
    });
  } catch {
    return { error: "failed to serialize the error" };
  }
  return t;
}
function Od() {
  const e = typeof navigator < "u" ? navigator : typeof window < "u" && window.navigator ? window.navigator : void 0;
  return e ? typeof e.onLine != "boolean" ? !0 : e.onLine : (console.warn("isOnline failed to access window.navigator and assume browser is online"), !0);
}
function _a(e) {
  typeof window < "u" && window.addEventListener && (window.addEventListener("offline", e), window.addEventListener("online", e));
}
function wa(e) {
  typeof window < "u" && window.removeEventListener && (window.removeEventListener("offline", e), window.removeEventListener("online", e));
}
var kd = (e) => {
  const t = [];
  for (const s in e)
    e[s] !== void 0 && (Array.isArray(e[s]) || typeof e[s] == "object" ? t.push(`${s}=${encodeURIComponent(JSON.stringify(e[s]))}`) : t.push(`${s}=${encodeURIComponent(e[s])}`));
  return t.join("&");
};
function q(e) {
  const t = (s) => s ? {
    ...s,
    created_at: s.created_at ? new Date(s.created_at) : /* @__PURE__ */ new Date(),
    deleted_at: s.deleted_at ? new Date(s.deleted_at) : null,
    pinned_at: s.pinned_at ? new Date(s.pinned_at) : null,
    reaction_groups: Fd(s.reaction_groups, s.reaction_counts, s.reaction_scores),
    status: s.status || "received",
    updated_at: s.updated_at ? new Date(s.updated_at) : /* @__PURE__ */ new Date()
  } : null;
  return {
    ...t(e),
    error: e.error ?? null,
    quoted_message: t(e.quoted_message)
  };
}
function Nd(e) {
  const t = (s) => {
    if (!s) return null;
    const i = (/* @__PURE__ */ new Date()).toISOString();
    return {
      ...s,
      created_at: e.created_at ? e.created_at.toISOString() : i,
      deleted_at: e.deleted_at ? e.deleted_at.toISOString() : void 0,
      pinned_at: e.pinned_at ? e.pinned_at.toISOString() : void 0,
      updated_at: e.updated_at ? e.updated_at.toISOString() : i
    };
  };
  return {
    ...t(e),
    quoted_message: t(e.quoted_message)
  };
}
var Pt = (e) => !!e && /^https?:\/\//i.test(e.trim()), ba = ({ client: e, message: t }) => {
  const s = t.attachments;
  if (!s?.length) return t;
  const i = [];
  let n = !1;
  const r = s.reduce((a, o) => {
    const { localMetadata: l, ...c } = o;
    return l ? (n = !0, Pt(c.asset_url) || Pt(c.image_url) || Pt(c.og_scrape_url) || Pt(c.title_link) ? a.push(c) : i.push(c), a) : (a.push(o), a);
  }, []);
  if (i.length) {
    const a = `Dropped ${i.length} attachment(s) whose upload never completed. Composing with pending uploads requires awaiting them before sending.`, o = {
      attachments: i,
      message: t,
      tags: ["attachments"]
    };
    e.logger("warn", a, o), console.warn(a, o);
  }
  return n ? {
    ...t,
    attachments: r
  } : t;
}, va = (e) => {
  const t = {
    ...vd,
    ...Cd
  };
  return {
    ...Object.fromEntries(Object.entries(e).filter(([s]) => !t[s])),
    pinned: !!e.pinned_at,
    mentioned_users: e.mentioned_users?.map((s) => typeof s == "string" ? s : s.id)
  };
}, Qn = ({ message: e, deletedAt: t, hardDelete: s = !1 }) => s ? {
  attachments: [],
  cid: e.cid,
  created_at: e.created_at,
  deleted_at: t,
  id: e.id,
  latest_reactions: [],
  mentioned_users: [],
  own_reactions: [],
  parent_id: e.parent_id,
  reply_count: e.reply_count,
  status: e.status,
  thread_participants: e.thread_participants,
  type: "deleted",
  updated_at: e.updated_at,
  user: e.user
} : {
  ...e,
  attachments: [],
  type: "deleted",
  deleted_at: t
}, ci = ({ messages: e, user: t, hardDelete: s = !1, deletedAt: i }) => {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    r.user?.id === t.id && (e[n] = r.type === "deleted" ? r : Qn({
      message: r,
      hardDelete: s,
      deletedAt: i
    })), e[n].quoted_message && r.quoted_message?.user?.id === t.id && (e[n].quoted_message = r.quoted_message.type === "deleted" ? r.quoted_message : Qn({
      message: e[n].quoted_message,
      hardDelete: s,
      deletedAt: i
    }));
  }
}, Ca = ({ needle: e, sortedArray: t, selectKey: s, selectValueToCompare: i = (r) => r, sortDirection: n = "ascending" }) => {
  if (!t.length) return 0;
  let r = 0, a = t.length - 1, o = 0;
  const l = () => {
    o = Math.round((r + a) / 2);
  }, c = i(e);
  for (; r <= a; ) {
    l();
    const d = i(t[o]);
    n === "ascending" && c < d || n === "descending" && c >= d ? a = o - 1 : r = o + 1;
  }
  if (s) {
    const d = s(e), h = n === "ascending" ? -1 : 1;
    for (let p = r + h; 0 <= p && p < t.length && i(t[p]) === c; p += h) if (s(t[p]) === d) return p;
  }
  return r;
};
function Sa(e, t, s = !1, i = "created_at", n = !0) {
  const r = n || s;
  let a = [...e];
  if (s && (a = a.filter((d) => !(d.id && t.id === d.id))), a.length === 0 && r) return a.concat(t);
  if (a.length === 0) return a;
  const o = t[i].getTime(), l = a.at(-1)[i].getTime() < o;
  if (l && r) return a.concat(t);
  if (l) return a;
  const c = Ca({
    needle: t,
    sortedArray: a,
    sortDirection: "ascending",
    selectValueToCompare: (d) => d[i].getTime(),
    selectKey: (d) => d.id
  });
  return !s && t.id && a[c] && t.id === a[c].id ? (a[c] = t, a) : (r && a.splice(c, 0, t), a);
}
function Fd(e, t, s) {
  if (e) return e;
  if (t && s) {
    const i = {};
    for (const n of Object.keys(t)) i[n] = {
      count: t[n],
      sum_scores: s[n]
    };
    return i;
  }
  return null;
}
var Ls = (e, t = 0, { leading: s = !1, trailing: i = !0 } = {}) => {
  let n = null, r = null, a;
  const o = (...l) => {
    n ? clearTimeout(n) : s && (a = e(...l)), i && (r = l);
    const c = () => {
      r && (a = e(...r), r = null), n = null;
    }, d = typeof t == "function" ? t(...l) : t;
    return n = setTimeout(c, d), a;
  };
  return o.cancel = () => {
    n && clearTimeout(n);
  }, o.flush = () => (n && (clearTimeout(n), n = null, r && (a = e(...r))), a), o;
}, sn = (e, t = 200, { leading: s = !0, trailing: i = !1 } = {}) => {
  let n = null, r = null;
  return (...a) => {
    if (n) {
      i && (r = a);
      return;
    }
    s && e(...a);
    const o = () => {
      if (r) {
        e(...r), r = null, n = setTimeout(o, t);
        return;
      }
      n = null;
    };
    n = setTimeout(o, t);
  };
}, Bd = (e, t) => t.split(".").reduce((s, i) => {
  if (s && typeof s == "object" && i in s) return s[i];
}, e), qd = (e, t) => {
  if (!Array.isArray(e)) return [];
  const s = /* @__PURE__ */ new Set();
  return e.filter((i) => {
    const n = typeof t == "function" ? t(i) : Bd(i, t);
    return s.has(n) ? !1 : (s.add(n), !0);
  });
};
function Vd(e, t) {
  let s = 0, i = e.length - 1;
  for (; s <= i; ) {
    const n = Math.floor((s + i) / 2), r = e[n].created_at;
    if (!r) {
      s += 1;
      continue;
    }
    const a = new Date(r);
    if (a.getTime() === t.getTime()) return n;
    a.getTime() < t.getTime() ? s = n + 1 : i = n - 1;
  }
  return s;
}
var $d = ({ parentSet: e, requestedPageSize: t, returnedPage: s, filteredReturnedPage: i, messagePaginationOptions: n }) => {
  const r = { ...e.pagination };
  if (!n?.created_at_around) return r;
  let a, o, l, c;
  const d = new Date(n.created_at_around), [h, p] = [s[0], s.slice(-1)[0]], u = !!h?.created_at && new Date(h.created_at) > d, m = !!p?.created_at && new Date(p.created_at) < d, y = t > e.messages.length && t > s.length, _ = (t > e.messages.length || e.messages.length >= s.length) && t > s.length;
  if (u)
    a = !1, l = !0, y && (o = !1, c = !0);
  else if (m)
    o = !1, c = !0, y && (a = !1, l = !0);
  else if (_)
    o = a = !1, l = c = !0;
  else {
    const [g, w] = [i[0], i.slice(-1)[0]], [b, v] = [g?.id && g.id === e.messages[0]?.id, w?.id && w.id === e.messages.slice(-1)[0]?.id];
    l = b, c = v;
    const M = Math.floor(s.length / 2), U = Vd(s, d);
    U !== -1 && (a = M <= U, o = M >= U);
  }
  return l && typeof a < "u" && (r.hasPrev = a), c && typeof o < "u" && (r.hasNext = o), r;
}, jd = ({ parentSet: e, requestedPageSize: t, returnedPage: s, filteredReturnedPage: i, messagePaginationOptions: n }) => {
  const r = { ...e.pagination }, { id_around: a } = n || {};
  if (!a) return r;
  let o, l;
  const [c, d] = [i[0], i.slice(-1)[0]], [h, p] = [c?.id === e.messages[0]?.id, d?.id === e.messages.slice(-1)[0]?.id];
  let u = h, m = p;
  const y = Math.floor(s.length / 2);
  if ((t > e.messages.length || e.messages.length >= s.length) && t > s.length)
    l = o = !1, u = m = !0;
  else if (s[y]) if (s[y].id === a) o = l = !0;
  else {
    let _;
    const g = [s.slice(0, y), s.slice(y)];
    o = l = !0;
    for (let w = 0; w < g.length; w++)
      _ = g[w].find((b) => b.id === a), _ && w === 0 && (o = !1), _ && w === 1 && (l = !1);
  }
  else return r;
  return u && typeof o < "u" && (r.hasPrev = o), m && typeof l < "u" && (r.hasNext = l), r;
}, Hd = ({ parentSet: e, requestedPageSize: t, returnedPage: s, filteredReturnedPage: i, messagePaginationOptions: n }) => {
  const r = { ...e.pagination };
  let a, o;
  const [l, c] = [i[0], i.slice(-1)[0]], [d, h] = [l?.id && l.id === e.messages[0]?.id, c?.id && c.id === e.messages.slice(-1)[0]?.id], p = n && (n.created_at_after_or_equal || n.created_at_after || n.id_gt || n.id_gte), u = typeof n > "u" ? !0 : n.created_at_before_or_equal || n.created_at_before || n.id_lt || n.id_lte || n.offset, m = !p && !u && !n?.id_around && !n?.created_at_around, y = s.length >= t;
  (typeof u < "u" || m) && (a = y), typeof p < "u" && (o = y);
  const _ = s.length === 0;
  return (d || _) && typeof a < "u" && (r.hasPrev = a), (h || _) && typeof o < "u" && (r.hasNext = o), r;
}, Ra = (e) => e.parentSet.messages.length + (e.returnedPage.length - e.filteredReturnedPage.length) < e.returnedPage.length ? (e.logger?.("error", "Corrupted message set state: parent set size < returned page size"), e.parentSet.pagination) : e.messagePaginationOptions?.created_at_around ? $d(e) : e.messagePaginationOptions?.id_around ? jd(e) : Hd(e), Ot = {}, di = async ({ channel: e, client: t, id: s, members: i, options: n, type: r }) => {
  if (!e && !r) throw new Error("Channel or channel type have to be provided to query a channel.");
  const a = e || t.channel(r, s, { members: i }), o = a.id ? a.cid : i && i.length ? nn(a.type, i) : void 0;
  if (!o) throw new Error("Channel ID or channel members array have to be provided to query a channel.");
  const l = Ot[o];
  if (l) await l;
  else try {
    Ot[o] = a.watch(n), await Ot[o];
  } finally {
    delete Ot[o];
  }
  return a;
}, nn = (e, t) => {
  if (!t) return;
  const s = [...t].sort().join(",");
  if (s)
    return `${e}:!members-${s}`;
}, Is = (e) => e ? !!e.state.membership?.pinned_at : !1, kt = (e) => e ? !!e.state.membership?.archived_at : !1, Nt = (e) => e ? typeof e.archived == "boolean" : !1, Ea = ({ atIndex: e, sort: t, targetKey: s }) => {
  if (!t) return null;
  let i = null;
  if (Array.isArray(t)) i = t[e] ?? null;
  else {
    let n = 0;
    for (const r in t) {
      if (n !== e) {
        n++;
        continue;
      }
      if (r !== s) return null;
      i = t;
      break;
    }
  }
  return i?.[s] ?? null;
}, Li = (e) => {
  const t = Wd({ sort: e });
  return typeof t != "number" ? !1 : Math.abs(t) === 1;
}, Wd = ({ sort: e }) => Ea({
  atIndex: 0,
  sort: e,
  targetKey: "pinned_at"
}), Ma = ({ channels: e }) => {
  let t = null;
  for (const s of e) {
    if (!Is(s)) break;
    typeof t == "number" ? t++ : t = 0;
  }
  return t;
}, Ft = ({ channels: e, channelToMove: t, channelToMoveIndexWithinChannels: s, sort: i }) => {
  const n = s ?? e.findIndex((h) => h.cid === t.cid), r = n >= 0, a = n === 0, o = Li(i), l = Is(t);
  if (a || o && l) return e;
  const c = [...e];
  r && c.splice(n, 1);
  let d = null;
  return o && (d = Ma({ channels: c })), c.splice(typeof d == "number" ? d + 1 : 0, 0, t), c;
}, zd = (e) => !!e.getTime, Qd = (e) => zd(e.created_at), Gd = (e) => e.type === "error" && (e.moderation_details?.action === "MESSAGE_RESPONSE_ACTION_REMOVE" || e.moderation?.action === "remove"), Ua = (e, t) => ({
  newestMessageA: new Date(e[0]?.created_at ?? 0),
  oldestMessageA: new Date(e.slice(-1)[0]?.created_at ?? 0),
  newestMessageB: new Date(t[0]?.created_at ?? 0),
  oldestMessageB: new Date(t.slice(-1)[0]?.created_at ?? 0)
}), Gn = (e, t) => {
  const { newestMessageA: s, newestMessageB: i, oldestMessageA: n, oldestMessageB: r } = Ua(e, t);
  return s >= i && r >= n;
}, Kn = (e, t) => {
  const { newestMessageA: s, newestMessageB: i, oldestMessageA: n, oldestMessageB: r } = Ua(e, t);
  return n < r && r < s && s < i;
}, Kd = (e, t) => Gn(e, t) || Gn(t, e) || Kn(e, t) || Kn(t, e), Jd = class {
  constructor(e) {
    this.messageSets = [], this.formatMessage = (t) => q(t), this.setIsUpToDate = (t) => {
      this.isUpToDate = t;
    }, this.removeMessageFromArray = (t, s) => {
      const i = t.filter((n) => !(n.id && s.id && n.id === s.id));
      return {
        removed: i.length < t.length,
        result: i
      };
    }, this.updateUserMessages = (t) => {
      const s = (i, n) => {
        for (let r = 0; r < i.length; r++) {
          const a = i[r];
          a.user?.id === n.id && (i[r] = {
            ...a,
            user: n
          });
        }
      };
      this.messageSets.forEach((i) => s(i.messages, t));
      for (const i in this.threads) s(this.threads[i], t);
      s(this.pinnedMessages, t);
    }, this.deleteUserMessages = (t, s = !1, i) => {
      this.messageSets.forEach(({ messages: n }) => ci({
        messages: n,
        user: t,
        hardDelete: s,
        deletedAt: i ?? null
      }));
      for (const n in this.threads) ci({
        messages: this.threads[n],
        user: t,
        hardDelete: s,
        deletedAt: i ?? null
      });
      ci({
        messages: this.pinnedMessages,
        user: t,
        hardDelete: s,
        deletedAt: i ?? null
      });
    }, this.findMessageSetByOldestTimestamp = (t) => {
      let s = 0, i = this.messageSets.length;
      for (; s < i; ) {
        const n = s + i >>> 1, r = this.messageSets[n];
        if (r.messages.length === 0) return -1;
        r.messages[0].created_at.getTime() <= t ? i = n : s = n + 1;
      }
      return s;
    }, this._channel = e, this.watcher_count = 0, this.typing = {}, this.read = {}, this.initMessages(), this.pinnedMessages = [], this.pending_messages = [], this.threads = {}, this.mutedUsers = [], this.watchers = {}, this.members = {}, this.membership = {}, this.unreadCount = 0, this.isUpToDate = !0, this.last_message_at = e?.state?.last_message_at != null ? new Date(e.state.last_message_at) : null;
  }
  get messages() {
    return this.messageSets.find((e) => e.isCurrent)?.messages || [];
  }
  set messages(e) {
    const t = this.messageSets.findIndex((s) => s.isCurrent);
    this.messageSets[t].messages = e;
  }
  get latestMessages() {
    return this.messageSets.find((e) => e.isLatest)?.messages || [];
  }
  set latestMessages(e) {
    const t = this.messageSets.findIndex((s) => s.isLatest);
    this.messageSets[t].messages = e;
  }
  get messagePagination() {
    return this.messageSets.find((e) => e.isCurrent)?.pagination || Dt;
  }
  pruneOldest(e) {
    const t = this.messageSets.findIndex((s) => s.isCurrent);
    if (this.messageSets[t].isLatest) {
      const s = this.messageSets[t].messages;
      this.messageSets[t].messages = s.slice(-e), this.messageSets[t].pagination.hasPrev = !0;
    }
  }
  addMessageSorted(e, t = !1, s = !0, i = "latest") {
    return this.addMessagesSorted([e], t, !1, s, i);
  }
  addMessagesSorted(e, t = !1, s = !1, i = !0, n = "current") {
    const { messagesToAdd: r, targetMessageSetIndex: a } = this.findTargetMessageSet(e, i, n), o = [];
    for (let l = 0; l < r.length; l += 1) {
      if (r[l].shadowed && i) {
        o.push(r[l].id);
        continue;
      }
      const c = r[l].created_at instanceof Date;
      let d;
      c ? d = r[l] : (d = this.formatMessage(r[l]), d.user && this._channel?.cid && this._channel.getClient().state.updateUserReference(d.user, this._channel.cid), s && d.id && this.threads[d.id] && !this._channel.getClient().preventThreadCleanup && delete this.threads[d.id], !(this._channel.getConfig()?.skip_last_msg_update_for_system_msgs && d.type === "system") && (!this.last_message_at || d.created_at.getTime() > this.last_message_at.getTime()) && (this.last_message_at = new Date(d.created_at.getTime())));
      const h = d.parent_id;
      if ((!h || d.show_in_channel) && a !== -1 && (this.messageSets[a].messages = this._addToMessageList(this.messageSets[a].messages, d, t, "created_at", i)), h && !s) {
        const p = this.threads[h] || [];
        this.threads[h] = this._addToMessageList(p, d, t, "created_at", i);
      }
    }
    return {
      messageSet: this.messageSets[a],
      filteredMessageIds: o
    };
  }
  addPinnedMessages(e) {
    for (let t = 0; t < e.length; t += 1) this.addPinnedMessage(e[t]);
  }
  addPinnedMessage(e) {
    this.pinnedMessages = this._addToMessageList(this.pinnedMessages, this.formatMessage(e), !1, "pinned_at");
  }
  removePinnedMessage(e) {
    const { result: t } = this.removeMessageFromArray(this.pinnedMessages, e);
    this.pinnedMessages = t;
  }
  addReaction(e, t, s) {
    const i = t;
    let n;
    if (i || (n = this.findMessage(e.message_id)), !i && !n) return;
    const r = i ?? n, a = {
      id: r?.id,
      parent_id: r?.parent_id,
      pinned: r?.pinned,
      show_in_channel: r?.show_in_channel
    };
    return this._updateMessage(a, (o) => {
      if (i) {
        const l = { ...i };
        return i.own_reactions = this._addOwnReactionToMessage(o.own_reactions, e, s), l.own_reactions = this._channel.getClient().userID === e.user_id ? i.own_reactions : o.own_reactions, this.formatMessage(l);
      }
      return n ? this._addReactionToState(n, e, s) : o;
    }), i ?? n;
  }
  _addReactionToState(e, t, s) {
    if (e.reaction_groups || (e.reaction_groups = {}), s) for (const a of e.own_reactions ?? []) {
      const o = e.reaction_groups[a.type];
      e.reaction_groups[a.type] = {
        ...o,
        count: o.count - 1,
        sum_scores: o.sum_scores - (a.score ?? 1)
      }, e.reaction_groups[a.type].count < 1 && delete e.reaction_groups[a.type];
    }
    const i = e.reaction_groups[t.type], n = t.score ?? 1;
    e.reaction_groups[t.type] = i ? {
      ...i,
      count: i.count + 1,
      sum_scores: i.sum_scores + n,
      last_reaction_at: t.created_at
    } : {
      count: 1,
      first_reaction_at: t.created_at,
      last_reaction_at: t.created_at,
      sum_scores: n
    }, e.own_reactions = this._addOwnReactionToMessage(e.own_reactions, t, s);
    const r = this._channel.getClient().userID;
    return e.latest_reactions = s ? [...(e.latest_reactions || []).filter((a) => a.user_id !== r), t] : [...e.latest_reactions || [], t], e;
  }
  _addOwnReactionToMessage(e, t, s) {
    return s ? e = [] : e = this._removeOwnReactionFromMessage(e, t), e = e || [], this._channel.getClient().userID === t.user_id && e.push(t), e;
  }
  _removeOwnReactionFromMessage(e, t) {
    return e && e.filter((s) => s.user_id !== t.user_id || s.type !== t.type);
  }
  removeReaction(e, t) {
    const s = t;
    let i;
    if (s || (i = this.findMessage(e.message_id)), !s && !i) return;
    const n = s ?? i, r = {
      id: n?.id,
      parent_id: n?.parent_id,
      pinned: n?.pinned,
      show_in_channel: n?.show_in_channel
    };
    return this._updateMessage(r, (a) => s ? (s.own_reactions = this._removeOwnReactionFromMessage(a.own_reactions, e), this.formatMessage(s)) : i ? this._removeReactionFromState(i, e) : a), s;
  }
  _removeReactionFromState(e, t) {
    const s = e.own_reactions?.find((n) => n.type === t.type);
    if (s && e.reaction_groups?.[s.type]) {
      const n = e.reaction_groups[s.type];
      e.reaction_groups[s.type] = {
        ...n,
        count: n.count - 1,
        sum_scores: n.sum_scores - (s.score ?? 1)
      }, e.reaction_groups[s.type].count < 1 && delete e.reaction_groups[s.type];
    }
    e.own_reactions = e.own_reactions?.filter((n) => n.type !== t.type);
    const i = this._channel.getClient().userID;
    return e.latest_reactions = e.latest_reactions?.filter((n) => !(n.user_id === i && n.type === t.type)), e;
  }
  _updateQuotedMessageReferences({ message: e, remove: t }) {
    const s = (n) => ({
      ...n,
      created_at: n.created_at.toISOString(),
      pinned_at: n.pinned_at?.toISOString(),
      updated_at: n.updated_at?.toISOString()
    }), i = (n) => {
      const r = n.reduce((a, o) => (o.quoted_message_id === e.id && a.push({
        ...s(o),
        quoted_message: t ? {
          ...e,
          attachments: []
        } : e
      }), a), []);
      this.addMessagesSorted(r, !0);
    };
    e.parent_id ? e.parent_id && this.threads[e.parent_id] && i(this.threads[e.parent_id]) : this.messageSets.forEach((n) => i(n.messages));
  }
  removeQuotedMessageReferences(e) {
    this._updateQuotedMessageReferences({
      message: e,
      remove: !0
    });
  }
  _updateMessage(e, t) {
    const { parent_id: s, show_in_channel: i, pinned: n } = e;
    if (s && this.threads[s]) {
      const r = this.threads[s], a = r.findIndex((o) => o.id === e.id);
      a !== -1 && (r[a] = t(r[a]), this.threads[s] = r);
    }
    if (!i && !s || i) {
      const r = this.findMessageSetIndex(e);
      if (r !== -1) {
        const a = this.messageSets[r].messages.findIndex((o) => o.id === e.id);
        if (a !== -1) {
          const o = t(this.messageSets[r].messages[a]);
          this.messageSets[r].messages[a] = o;
        }
      }
    }
    if (n) {
      const r = this.pinnedMessages.findIndex((a) => a.id === e.id);
      r !== -1 && (this.pinnedMessages[r] = t(this.pinnedMessages[r]));
    }
  }
  _addToMessageList(e, t, s = !1, i = "created_at", n = !0) {
    return Sa(e, t, s, i, n);
  }
  removeMessage(e) {
    let t = !1;
    if (e.parent_id && this.threads[e.parent_id]) {
      const { removed: s, result: i } = this.removeMessageFromArray(this.threads[e.parent_id], e);
      this.threads[e.parent_id] = i, t = s;
    } else {
      const s = e.messageSetIndex ?? this.findMessageSetIndex(e);
      if (s !== -1) {
        const { removed: i, result: n } = this.removeMessageFromArray(this.messageSets[s].messages, e);
        this.messageSets[s].messages = n, t = i;
      }
    }
    return t;
  }
  filterErrorMessages() {
    const e = this.latestMessages.filter((s) => s.type !== "error"), t = this.latestMessages.filter(Gd);
    for (const s of t) this._channel.getClient().offlineDb?.hardDeleteMessage({ id: s.id });
    this.latestMessages = e;
  }
  clean() {
    const e = /* @__PURE__ */ new Date();
    for (const [t, s] of Object.entries(this.typing)) {
      const i = typeof s.received_at == "string" ? new Date(s.received_at) : s.received_at || /* @__PURE__ */ new Date();
      e.getTime() - i.getTime() > 7e3 && (delete this.typing[t], this._channel.getClient().dispatchEvent({
        cid: this._channel.cid,
        type: "typing.stop",
        user: { id: t }
      }));
    }
  }
  clearMessages() {
    this.initMessages(), this.pinnedMessages = [];
  }
  initMessages() {
    this.messageSets = [{
      messages: [],
      isLatest: !0,
      isCurrent: !0,
      pagination: { ...Dt }
    }];
  }
  async loadMessageIntoState(e, t, s = 25) {
    let i, n = !1, r = !1;
    const a = t || e;
    if (e === "latest") {
      if (this.messages === this.latestMessages) return;
      i = this.messageSets.findIndex((o) => o.isLatest);
    } else i = this.findMessageSetIndex({ id: a });
    i !== -1 && (this.switchToMessageSet(i), n = !0), r = !t || !!this.threads[t]?.find((o) => o.id === e), !(n && r) && (n || await this._channel.query({ messages: {
      id_around: a,
      limit: s
    } }, "new"), !r && t && await this._channel.getReplies(t, {
      id_around: e,
      limit: s
    }), i = this.findMessageSetIndex({ id: a }), i !== -1 && this.switchToMessageSet(i));
  }
  findMessage(e, t) {
    if (t) {
      const i = this.threads[t];
      return i ? i.find((n) => n.id === e) : void 0;
    }
    const s = this.findMessageSetIndex({ id: e });
    if (s !== -1)
      return this.messageSets[s].messages.find((i) => i.id === e);
  }
  findMessageByTimestamp(e, t, s = !1) {
    if (t && !this.threads[t] || this.messageSets.length === 0) return null;
    const i = this.findMessageSetByOldestTimestamp(e), n = this.messageSets[i]?.messages;
    if (!n?.length) return null;
    const r = n[0].created_at.getTime(), a = n.slice(-1)[0].created_at.getTime();
    if ((e < r || a < e) && s) return null;
    let o = 0, l = n.length - 1;
    for (; o < l; ) {
      const d = o + l >>> 1;
      e <= n[d].created_at.getTime() ? l = d : o = d + 1;
    }
    const c = n[o];
    return s ? c.created_at.getTime() === e ? c : null : c;
  }
  switchToMessageSet(e) {
    const t = this.messageSets.find((s) => s.isCurrent);
    t && (t.isCurrent = !1, this.messageSets[e].isCurrent = !0);
  }
  areMessageSetsOverlap(e, t) {
    return e.some((s) => t.find((i) => s.id === i.id));
  }
  findMessageSetIndex(e) {
    return this.messageSets.findIndex((t) => !!t.messages.find((s) => s.id === e.id));
  }
  findTargetMessageSet(e, t = !0, s = "current") {
    let i = e, n;
    if (e.length === 0) return {
      targetMessageSetIndex: 0,
      messagesToAdd: e
    };
    if (t) {
      const r = this.messageSets.map((c, d) => d).filter((c) => this.areMessageSetsOverlap(this.messageSets[c].messages, e)), a = this.messageSets.map((c, d) => d).filter((c) => Kd(this.messageSets[c].messages, e.map(q)));
      switch (s) {
        case "new":
          if (r.length > 0) n = r[0];
          else if (a.length > 0) n = a[0];
          else if (e.some((c) => !c.parent_id)) {
            const c = this.findMessageSetByOldestTimestamp(new Date(e[0].created_at).getTime());
            if (c === -1)
              this.messageSets.push({
                messages: [],
                isCurrent: !1,
                isLatest: !1,
                pagination: { ...Dt }
              }), n = this.messageSets.length - 1;
            else {
              const d = c === 0;
              this.messageSets.splice(c, 0, {
                messages: [],
                isCurrent: !1,
                isLatest: d,
                pagination: { ...Dt }
              }), d && this.messageSets.slice(1).forEach((h) => {
                h.isLatest = !1;
              }), n = c;
            }
          }
          break;
        case "current":
          a.length > 0 ? n = a[0] : n = this.messageSets.findIndex((c) => c.isCurrent);
          break;
        case "latest":
          a.length > 0 ? n = a[0] : n = this.messageSets.findIndex((c) => c.isLatest);
          break;
        default:
          n = -1;
      }
      const o = r.splice(0, 1)[0], l = [...r];
      if (o !== void 0 && o !== n && l.push(n), l.length > 0) {
        const c = this.messageSets[o], d = this.messageSets.filter((h, p) => l.indexOf(p) !== -1);
        d.forEach((h) => {
          c.isLatest = c.isLatest || h.isLatest, c.isCurrent = c.isCurrent || h.isCurrent, c.pagination.hasPrev = h.messages[0].created_at < c.messages[0].created_at ? h.pagination.hasPrev : c.pagination.hasPrev, c.pagination.hasNext = c.messages.slice(-1)[0].created_at < h.messages.slice(-1)[0].created_at ? h.pagination.hasNext : c.pagination.hasNext, i = [...i, ...h.messages];
        }), d.forEach((h) => this.messageSets.splice(this.messageSets.indexOf(h), 1)), n = this.messageSets.findIndex((h) => this.areMessageSetsOverlap(h.messages, e));
      }
    } else n = this.findMessageSetIndex(e[0]);
    return {
      targetMessageSetIndex: n,
      messagesToAdd: i
    };
  }
}, xa = (e) => typeof e == "function", Xd = () => {
}, A = class {
  constructor(e) {
    this.value = e, this.handlers = /* @__PURE__ */ new Set(), this.preprocessors = /* @__PURE__ */ new Set(), this.partialNext = (t) => this.next((s) => ({
      ...s,
      ...t
    })), this.subscribeWithSelector = (t, s) => {
      let i;
      const n = (r) => {
        const a = t(r);
        let o = typeof i > "u";
        for (const c in i)
          if (i[c] !== a[c]) {
            o = !0;
            break;
          }
        if (!o) return;
        const l = i;
        i = a, s(a, l);
      };
      return this.subscribe(n);
    };
  }
  merge(e) {
    return new Yd({
      original: this,
      merged: e
    });
  }
  next(e) {
    const t = xa(e) ? e(this.value) : e;
    if (t === this.value) return;
    this.preprocessors.forEach((i) => i(t, this.value));
    const s = this.value;
    this.value = t, this.handlers.forEach((i) => i(this.value, s));
  }
  getLatestValue() {
    return this.value;
  }
  subscribe(e) {
    return e(this.value, void 0), this.handlers.add(e), () => {
      this.handlers.delete(e);
    };
  }
  addPreprocessor(e) {
    return this.preprocessors.add(e), () => {
      this.preprocessors.delete(e);
    };
  }
}, Yd = class Kt extends A {
  constructor({ original: t, merged: s }) {
    const i = t.getLatestValue(), n = s.getLatestValue();
    super({
      ...i,
      ...n
    }), this.next = () => {
      console.warn(`${Kt.name}.next is disabled, call original.next or merged.next instead`);
    }, this.partialNext = () => {
      console.warn(`${Kt.name}.partialNext is disabled, call original.partialNext or merged.partialNext instead`);
    }, this.cachedOriginalValue = i, this.cachedMergedValue = n, this.original = t, this.merged = s;
  }
  subscribe(t) {
    const s = [];
    if (!this.handlers.size) {
      const i = (n) => {
        super.next((r) => ({
          ...r,
          ...n
        }));
      };
      s.push(this.original.subscribe((n) => {
        n !== this.cachedOriginalValue && (this.cachedOriginalValue = n, i(n));
      }), this.merged.subscribe((n) => {
        n !== this.cachedMergedValue && (this.cachedMergedValue = n, i(n));
      }));
    }
    return s.push(super.subscribe(t)), () => {
      s.forEach((i) => i());
    };
  }
  getLatestValue() {
    if (!this.handlers.size) {
      const t = this.original.getLatestValue(), s = this.merged.getLatestValue();
      (t !== this.cachedOriginalValue || s !== this.cachedMergedValue) && (this.value = {
        ...t,
        ...s
      }, this.cachedMergedValue = s, this.cachedOriginalValue = t);
    }
    return super.getLatestValue();
  }
  addPreprocessor() {
    return console.warn(`${Kt.name}.addPreprocessor is disabled, call original.addPreprocessor or merged.addPreprocessor instead`), Xd;
  }
}, Ii = class Di {
  constructor() {
    this.unsubscribeFunctions = /* @__PURE__ */ new Set(), this.refCount = 0;
  }
  get hasSubscriptions() {
    return this.unsubscribeFunctions.size > 0;
  }
  addUnsubscribeFunction(t) {
    this.unsubscribeFunctions.add(t);
  }
  incrementRefCount() {
    return ++this.refCount;
  }
  unregisterSubscriptions() {
    return this.refCount > 1 ? (this.refCount--, Di.symbol) : (this.unsubscribeFunctions.forEach((t) => t()), this.unsubscribeFunctions.clear(), this.refCount = 0, Di.symbol);
  }
};
Ii.symbol = Symbol(Ii.name);
var ye = Ii, Jn = (e) => {
  if (e instanceof Date) return e;
  if (typeof e == "string" || typeof e == "number") {
    const t = new Date(e);
    if (!Number.isNaN(t.getTime())) return t;
  }
}, Zd = class extends ye {
  constructor({ channel: e }) {
    super(), this.timeout = null, this.registerSubscriptions = () => {
      this.incrementRefCount(), !this.hasSubscriptions && (this.addUnsubscribeFunction(this.channel.on("message.new", (t) => {
        t.message?.user?.id && t.message.user.id === this.getOwnUserId() && this.setOwnLatestMessageDate(Jn(t.message?.created_at));
      }).unsubscribe), this.addUnsubscribeFunction(this.channel.on("channel.updated", (t) => {
        t.channel?.cooldown !== this.cooldownConfigSeconds && this.refresh();
      }).unsubscribe));
    }, this.setCooldownRemaining = (t) => {
      this.state.partialNext({ cooldownRemaining: t });
    }, this.clearTimeout = () => {
      this.timeout && (clearTimeout(this.timeout), this.timeout = null);
    }, this.refresh = () => {
      const { cooldown: t = 0, own_capabilities: s } = this.channel.data ?? {}, i = (s ?? []).includes("skip-slow-mode"), n = this.findOwnLatestMessageDate({ messages: this.channel.state.latestMessages });
      if ((t !== this.cooldownConfigSeconds || n?.getTime() !== this.ownLatestMessageDate?.getTime() || i !== this.canSkipCooldown) && this.state.partialNext({
        cooldownConfigSeconds: t,
        ownLatestMessageDate: n,
        canSkipCooldown: i
      }), this.canSkipCooldown || this.cooldownConfigSeconds === 0) {
        this.clearTimeout(), this.cooldownRemaining !== 0 && this.setCooldownRemaining(0);
        return;
      }
      this.recalculate();
    }, this.setOwnLatestMessageDate = (t) => {
      this.state.partialNext({ ownLatestMessageDate: t }), this.recalculate();
    }, this.recalculate = () => {
      this.clearTimeout();
      const { cooldownConfigSeconds: t, ownLatestMessageDate: s, canSkipCooldown: i } = this.state.getLatestValue(), n = s != null ? Math.max(0, (Date.now() - s.getTime()) / 1e3) : void 0, r = !i && typeof n < "u" && t > n ? Math.round(t - n) : 0;
      r !== this.cooldownRemaining && this.setCooldownRemaining(r), !(r <= 0) && (this.timeout = setTimeout(() => {
        this.recalculate();
      }, 1e3));
    }, this.channel = e, this.state = new A({
      cooldownConfigSeconds: 0,
      cooldownRemaining: 0,
      ownLatestMessageDate: void 0,
      canSkipCooldown: !1
    }), this.refresh();
  }
  get cooldownConfigSeconds() {
    return this.state.getLatestValue().cooldownConfigSeconds;
  }
  get cooldownRemaining() {
    return this.state.getLatestValue().cooldownRemaining;
  }
  get canSkipCooldown() {
    return this.state.getLatestValue().canSkipCooldown;
  }
  get ownLatestMessageDate() {
    return this.state.getLatestValue().ownLatestMessageDate;
  }
  getOwnUserId() {
    const e = this.channel.getClient();
    return e.userID ?? e.user?.id;
  }
  findOwnLatestMessageDate({ messages: e }) {
    const t = this.getOwnUserId();
    if (!t) return;
    let s;
    for (let i = e.length - 1; i >= 0; i -= 1) {
      const n = e[i];
      if (n.user?.id !== t) continue;
      const r = Jn(n.created_at);
      if (r && ((!s || r.getTime() > s.getTime()) && (s = r), s.getTime() > r.getTime()))
        break;
    }
    return s;
  }
}, eh = (e) => !!e?.og_scrape_url || !!e?.title_link, Ta = (e) => !!e?.localMetadata?.id, Aa = (e) => !!e?.localMetadata?.uploadState, th = ["pending", "uploading"], sh = (e) => Aa(e) && th.includes(e.localMetadata.uploadState), ih = (e) => Aa(e) && e.localMetadata.uploadState === "finished", nh = (e, t = []) => e.type === "file" || !!(e.mime_type && t.indexOf(e.mime_type) === -1 && e.type !== "video"), La = (e) => e.type === "image" && !eh(e), Ia = (e) => La(e) && Ta(e), rh = (e) => e.type === "audio", ah = (e) => e.type === "voiceRecording", oh = (e, t = []) => e.type === "video" || !!(e.mime_type && t.indexOf(e.mime_type) !== -1), lh = (e) => rh(e) || nh(e) || La(e) || oh(e) || ah(e), Ds = (e) => !!e.lastModified && !("uri" in e), ch = (e) => e == null || typeof e != "object" ? !1 : typeof FileList < "u" && e instanceof FileList || "item" in e && "length" in e && !Array.isArray(e), dh = (e) => e instanceof Blob && !(e instanceof File), Ue = (e) => e !== null && typeof e == "object" && !Ds(e) && !dh(e) && typeof e.name == "string" && typeof e.uri == "string" && typeof e.size == "number" && typeof e.type == "string", Da = ({ blobsArray: e, fileName: t, mimeType: s }) => {
  const i = new Blob(e, { type: s });
  return new File([i], t, { type: i.type });
}, hh = (e) => e.match(/\/([^/;]+)/)?.[1], Pa = (e) => {
  const t = hh(e);
  return `file_${(/* @__PURE__ */ new Date()).toISOString()}${t ? "." + t : ""}`;
}, mt = (e) => {
  const t = e.type;
  return t.startsWith("image/") && !t.endsWith(".photoshop");
}, uh = (e) => e.startsWith("image/") && !e.endsWith(".photoshop") ? "image" : e.includes("video/") ? "video" : e.includes("audio/") ? "audio" : "file", Xn = (e) => {
  if (!e) return null;
  if (Ta(e)) return e;
  const { localMetadata: t, ...s } = e;
  return {
    localMetadata: {
      ...t ?? {},
      id: t?.id || $()
    },
    ...s
  };
}, fh = (e) => ({
  id: "stream-io/attachment-manager-middleware/post-upload-enrichment",
  handlers: { postProcess: ({ state: t, discard: s, forward: i, next: n }) => {
    const { attachment: r, error: a, response: o } = t;
    if (a) return i();
    if (!r || !o) return s();
    const l = { ...r }, { id: c, previewUri: d } = r.localMetadata, h = !e || !!e.attachmentManager.attachmentsById[c];
    return d && h && (d.startsWith("blob:") && URL.revokeObjectURL?.(d), delete l.localMetadata.previewUri), Ia(r) ? l.image_url = o.file : l.asset_url = o.file, o.thumb_url && (l.thumb_url = o.thumb_url), n({
      ...t,
      attachment: l
    });
  } }
}), ph = ka(mh), Oa = ka(yh), vt = /* @__PURE__ */ new Map();
function gh(e) {
  return vt.has(e);
}
function ka(e) {
  return function(s, i) {
    const { cb: n, onContinued: r } = e(s, i), a = vt.get(s);
    a?.onContinued();
    const o = a ? a.promise.then(n, n) : n();
    return vt.set(s, {
      promise: o,
      onContinued: r
    }), o;
  };
}
function mh(e, t) {
  let s = !1;
  return {
    cb: () => t().finally(() => {
      s || vt.delete(e);
    }),
    onContinued: () => s = !0
  };
}
function yh(e, t) {
  const s = new AbortController();
  return {
    cb: () => s.signal.aborted ? Promise.resolve("canceled") : t(s.signal).finally(() => {
      s.signal.aborted || vt.delete(e);
    }),
    onContinued: () => s.abort()
  };
}
var Ne = class {
  constructor() {
    this.middleware = [], this.id = $();
  }
  get installedMiddleware() {
    return this.middleware;
  }
  use(e) {
    return this.middleware = this.middleware.concat(e), this;
  }
  replace(e) {
    const t = [...this.middleware];
    return e.forEach((s) => {
      const i = this.middleware.findIndex((n) => n.id === s.id);
      i >= 0 ? t.splice(i, 1, s) : t.push(s);
    }), this.middleware = t, this;
  }
  insert({ middleware: e, position: t, unique: s }) {
    s && e.forEach((a) => {
      const o = this.middleware.findIndex((l) => l.id === a.id);
      o >= 0 && this.middleware.splice(o, 1);
    });
    const i = t.after || t.before, n = this.middleware.findIndex((a) => a.id === i), r = t.after ? n + 1 : n;
    return this.middleware.splice(r, 0, ...e), this;
  }
  setOrder(e) {
    this.middleware = e.map((t) => this.middleware.find((s) => s.id === t)).filter(Boolean);
  }
  remove(e) {
    !e && !e.length || (this.middleware = this.middleware.filter((t) => typeof e == "string" ? e !== t.id : !e.includes(t.id)));
  }
  async executeMiddlewareChain({ eventName: e, initialValue: t, mode: s = "cancelable" }) {
    let i = -1;
    const n = async (a, o, l) => {
      if (a <= i) throw new Error("next() called multiple times");
      if (i = a, a === this.middleware.length || l && ["complete", "discard"].includes(l)) return {
        state: o,
        status: l
      };
      const c = this.middleware[a].handlers[e];
      return c ? await c({
        state: o,
        next: (m) => n(a + 1, m),
        complete: (m) => n(a + 1, m, "complete"),
        discard: () => n(a + 1, o, "discard"),
        forward: () => n(a + 1, o)
      }) : n(a + 1, o, l);
    }, r = s === "cancelable" ? await Oa(`middleware-execution-${this.id}-${e}`, async (a) => {
      const o = await n(0, t);
      return a.aborted ? "canceled" : o;
    }) : await n(0, t);
    return r === "canceled" ? {
      state: t,
      status: "discard"
    } : r;
  }
  async execute({ eventName: e, initialValue: t, mode: s }) {
    return await this.executeMiddlewareChain({
      eventName: e,
      initialValue: t,
      mode: s
    });
  }
}, Na = (e) => L.isCancel(e) || e instanceof Error && e.name === "AbortError", Yn = () => ({ uploads: {} }), _h = (e, t) => ({
  ...e,
  [t.id]: {
    ...e[t.id],
    ...t
  }
}), wh = (e, t) => {
  if (!(t.id in e)) return null;
  const s = e[t.id];
  return {
    ...e,
    [t.id]: {
      ...s,
      ...t
    }
  };
}, bh = class {
  constructor(e) {
    this.client = e, this.inFlightUploads = /* @__PURE__ */ new Map(), this.getUpload = (t) => this.uploads[t], this.reset = () => {
      for (const { abortController: t } of this.inFlightUploads.values()) t.abort();
      this.inFlightUploads.clear(), this.state.next(Yn());
    }, this.deleteUploadRecord = (t) => {
      const s = this.inFlightUploads.get(t);
      s && (this.inFlightUploads.delete(t), s.abortController.abort()), this.state.next((i) => {
        if (!(t in i.uploads)) return i;
        const n = { ...i.uploads };
        return delete n[t], {
          ...i,
          uploads: n
        };
      });
    }, this.upload = ({ id: t, channelCid: s, file: i }) => {
      const n = this.inFlightUploads.get(t);
      if (n) return n.promise;
      let r, a;
      const o = new Promise((c, d) => {
        r = c, a = d;
      }), l = new AbortController();
      return this.inFlightUploads.set(t, {
        promise: o,
        abortController: l
      }), (async () => {
        const c = this.resolveAttachmentManager(s), d = c.config.trackUploadProgress;
        try {
          this.upsertUpload({
            uploadConfirmationPending: !1,
            id: t,
            uploadProgress: d ? 0 : void 0
          });
          const h = d ? (m) => {
            this.updateUpload({
              id: t,
              uploadProgress: m,
              ...typeof m == "number" ? { uploadConfirmationPending: m >= 100 } : {}
            });
          } : void 0, p = {
            abortSignal: l.signal,
            ...h ? { onProgress: h } : {}
          }, u = await c.doUploadRequest(i, p);
          r(u);
        } catch (h) {
          a(h);
        } finally {
          this.inFlightUploads.delete(t), this.deleteUploadRecord(t);
        }
      })(), o;
    }, this.upsertUpload = (t) => {
      this.state.partialNext({ uploads: _h(this.uploads, t) });
    }, this.updateUpload = (t) => {
      this.state.next((s) => {
        const i = wh(s.uploads, t);
        return i ? {
          ...s,
          uploads: i
        } : s;
      });
    }, this.state = new A(Yn());
  }
  resolveAttachmentManager(e) {
    const t = e.indexOf(":");
    if (t <= 0 || t === e.length - 1) throw new Error(`Invalid channelCid: ${e}`);
    const s = e.slice(0, t), i = e.slice(t + 1);
    return this.client.channel(s, i).messageComposer.attachmentManager;
  }
  get uploads() {
    return this.state.getLatestValue().uploads;
  }
}, vh = (e) => ({
  id: "stream-io/attachment-manager-middleware/upload-error",
  handlers: { postProcess: ({ state: t, discard: s, forward: i }) => {
    const { attachment: n, error: r } = t;
    if (!r) return i();
    if (!n) return s();
    if (Na(r)) return i();
    const a = r instanceof Error ? r.message : "unknown error";
    return e.client.notifications.addError({
      message: "Error uploading attachment",
      origin: {
        emitter: "AttachmentManager",
        context: { attachment: n }
      },
      options: {
        type: "api:attachment:upload:failed",
        metadata: { reason: a },
        originalError: r
      }
    }), i();
  } }
}), Ch = class extends Ne {
  constructor({ composer: e }) {
    super(), this.use([vh(e), fh(e)]);
  }
}, Sh = (e) => ({
  id: "stream-io/attachment-manager-middleware/file-upload-config-check",
  handlers: { prepare: async ({ state: t, next: s, discard: i }) => {
    const { attachmentManager: n } = e;
    if (!n || !t.attachment) return i();
    const r = await n.getUploadConfigCheck(t.attachment.localMetadata.file), a = {
      ...t.attachment,
      localMetadata: {
        ...t.attachment.localMetadata,
        uploadPermissionCheck: r,
        uploadState: r.uploadBlocked ? "blocked" : "pending"
      }
    };
    return s({
      ...t,
      attachment: a
    });
  } }
}), Rh = (e) => ({
  id: "stream-io/attachment-manager-middleware/blocked-upload-notification",
  handlers: { prepare: ({ state: { attachment: t }, forward: s }) => (t && t.localMetadata.uploadPermissionCheck?.uploadBlocked && e.client.notifications.addError({
    message: "The attachment upload was blocked",
    origin: {
      emitter: "AttachmentManager",
      context: { blockedAttachment: t }
    },
    options: {
      type: "validation:attachment:upload:blocked",
      metadata: { reason: t.localMetadata.uploadPermissionCheck?.reason }
    }
  }), s()) }
}), Eh = class extends Ne {
  constructor({ composer: e }) {
    super(), this.use([Sh(e), Rh(e)]);
  }
}, Ie = (e) => {
  if (!e || typeof e != "object" || Array.isArray(e)) return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype ? !1 : e.constructor && e.constructor !== Object;
}, Pi = (e, t, s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new WeakSet(), n = /* @__PURE__ */ new WeakSet()) => {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  const r = typeof e;
  if (r !== typeof t) return !1;
  if (r !== "object")
    return e !== e && t !== t ? !0 : e === t;
  const a = e, o = t;
  if (i.has(a) || n.has(o)) return i.has(a) && n.has(o);
  if (i.add(a), n.add(o), e instanceof Date && t instanceof Date)
    return i.delete(a), n.delete(o), e.getTime() === t.getTime();
  if (e instanceof RegExp && t instanceof RegExp)
    return i.delete(a), n.delete(o), e.toString() === t.toString();
  if (Ie(e) || Ie(t))
    return i.delete(a), n.delete(o), !1;
  const l = Array.isArray(e), c = Array.isArray(t);
  if (l !== c)
    return i.delete(a), n.delete(o), !1;
  if (l && c) {
    const y = e, _ = t;
    if (y.length !== _.length)
      return i.delete(a), n.delete(o), !1;
    const g = [e, t];
    if (s.has(g))
      return i.delete(a), n.delete(o), !0;
    s.add(g);
    for (let w = 0; w < y.length; w++) if (!Pi(y[w], _[w], s, i, n))
      return s.delete(g), i.delete(a), n.delete(o), !1;
    return s.delete(g), i.delete(a), n.delete(o), !0;
  }
  const d = e, h = t, p = Object.keys(d), u = Object.keys(h);
  if (p.length !== u.length)
    return i.delete(a), n.delete(o), !1;
  for (const y of u) if (!Object.prototype.hasOwnProperty.call(d, y))
    return i.delete(a), n.delete(o), !1;
  const m = [e, t];
  if (s.has(m))
    return i.delete(a), n.delete(o), !0;
  s.add(m);
  for (const y of p) if (!Pi(d[y], h[y], s, i, n))
    return s.delete(m), i.delete(a), n.delete(o), !1;
  return s.delete(m), i.delete(a), n.delete(o), !0;
};
function Mh(e, t) {
  const s = { children: {} };
  return Fa(e, t, s), rn(s);
}
function Fa(e, t, s, i, n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set()) {
  if (Pi(e, t, new Set(n))) return;
  if (e == null) {
    i !== void 0 && (s.children[String(i)] = {
      type: "added",
      value: t,
      children: {}
    });
    return;
  }
  if (typeof e == "object" && e !== null) {
    if (r.has(e)) {
      i !== void 0 && (s.children[String(i)] = {
        type: "circular",
        value: t,
        oldValue: e,
        children: {}
      });
      return;
    }
    r.add(e);
  }
  if (typeof e != "object" || typeof t != "object" || e === null || t === null || Array.isArray(e) !== Array.isArray(t) || Ie(e) || Ie(t)) {
    i !== void 0 && (s.children[String(i)] = {
      type: "updated",
      value: t,
      oldValue: e,
      children: {}
    }), typeof e == "object" && e !== null && r.delete(e);
    return;
  }
  const a = e, o = t, l = i !== void 0 ? {
    type: "updated",
    children: {},
    oldValue: e,
    value: t
  } : s;
  i !== void 0 && (s.children[String(i)] = l);
  const c = [e, t];
  if (n.has(c)) {
    typeof e == "object" && e !== null && r.delete(e);
    return;
  }
  n.add(c);
  const d = /* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.getOwnPropertySymbols(a),
    ...Object.keys(o),
    ...Object.getOwnPropertySymbols(o)
  ]);
  for (const h of d) {
    const p = a[h], u = o[h];
    if (h in o) {
      if (!(h in a)) {
        l.children[String(h)] = {
          type: "added",
          value: u,
          children: {}
        };
        continue;
      }
      Fa(p, u, l, h, n, r);
    }
  }
  n.delete(c), typeof e == "object" && e !== null && r.delete(e);
}
function Ba(e = {}) {
  const { trackDiff: t = !1 } = e;
  return function({ target: i, source: n, customizer: r }) {
    const a = Array.isArray(n) ? n : [n], o = t ? structuredClone(i) : void 0;
    function l(y, _, g, w, b, v) {
      const M = r?.(y, _, g, w, b, v);
      return M !== void 0 ? (Object.defineProperty(w, g, {
        value: M,
        enumerable: !0,
        writable: !0,
        configurable: !0
      }), !0) : !1;
    }
    function c(y, _) {
      if (y === null || typeof y > "u" || !Array.isArray(y) && typeof y != "object") return _;
      if (y && typeof y == "object") {
        const g = Ie(y), w = Ie(_);
        return g || w ? w ? _ : y : Array.isArray(y) ? [...y] : { ...y };
      }
      return Array.isArray(_) ? [] : {};
    }
    function d(y, _, g, w, b) {
      const v = _[g], M = y[g];
      if (!l(M, v, g, y, _, w))
        if (v && typeof v == "object") {
          if (!w.has(v)) {
            const U = c(M, v);
            if (Object.defineProperty(y, g, {
              value: U,
              enumerable: !0,
              writable: !0,
              configurable: !0
            }), Ie(U)) return;
            b.push({
              target: U,
              source: v,
              sourceKey: g,
              parentTarget: y
            });
          }
        } else v !== void 0 && (y[g] = v);
    }
    function h(y, _, g, w) {
      const b = [...Object.keys(_), ...Object.getOwnPropertySymbols(_)];
      for (const v of b) d(y, _, v, g, w);
    }
    function p({ target: y, source: _, sourceKey: g, parentTarget: w }, b, v) {
      if (b.has(_)) {
        t && g && w && Object.defineProperty(w, g, {
          value: y,
          enumerable: !0,
          writable: !0,
          configurable: !0
        });
        return;
      }
      !b.has(y) && !b.has(_) && (b.add(y), b.add(_), h(y, _, b, v), b.delete(_), b.delete(y));
    }
    function u(y, _, g = /* @__PURE__ */ new Set()) {
      if (g.has(y) || g.has(_)) return { ...y };
      const w = { ...y }, b = [];
      for (g.add(w), g.add(_), h(w, _, g, b); b.length; ) p(b.pop(), g, b);
      return g.delete(_), g.delete(w), w;
    }
    const m = a.reduce((y, _) => u(y, _), { ...i });
    return {
      result: m,
      diff: t && o ? Mh(o, m) : null
    };
  };
}
function rn(e) {
  const t = {};
  let s = !1;
  for (const i in e.children) {
    const n = rn(e.children[i]);
    n && (t[i] = n, s = !0);
  }
  return e.type || s ? {
    ...e,
    children: t
  } : null;
}
function We(e, t, s) {
  return Ba()({
    target: e,
    source: t,
    customizer: s
  }).result;
}
function qa(e, t, s) {
  const { result: i, diff: n } = Ba({ trackDiff: !0 })({
    target: e,
    source: t,
    customizer: s
  });
  return {
    result: i,
    diff: rn(n ?? { children: {} }) || { children: {} }
  };
}
var Zn = ({ message: e }) => ({ attachments: (e?.attachments ?? [])?.filter(({ og_scrape_url: t }) => !t).map((t) => {
  const s = lh(t) ? {
    id: $(),
    uploadState: "finished"
  } : { id: $() };
  return {
    ...t,
    localMetadata: s
  };
}) }), Va = class Oi {
  constructor({ composer: t, message: s }) {
    this.setCustomUploadFn = (i) => {
      this.composer.updateConfig({ attachments: { doUploadRequest: i } });
    }, this.cancelAttachmentUploads = (i = this.attachments) => {
      for (const { localMetadata: n } of i) this.client.uploadManager.deleteUploadRecord(n.id);
    }, this.normalizeSnapshotAttachment = (i) => i.localMetadata.uploadState !== "uploading" ? i : (this.client.uploadManager.deleteUploadRecord(i.localMetadata.id), {
      ...i,
      localMetadata: {
        ...i.localMetadata,
        uploadConfirmationPending: !1,
        uploadProgress: void 0,
        uploadState: "failed"
      }
    }), this.initState = ({ message: i } = {}) => {
      this.state.next(Zn({ message: i }));
    }, this.getSnapshot = () => {
      const i = this.state.getLatestValue();
      let n = !1;
      const r = i.attachments.map(this.normalizeSnapshotAttachment);
      for (let a = 0; a < r.length; a++) if (r[a] !== i.attachments[a]) {
        n = !0;
        break;
      }
      return n ? {
        ...i,
        attachments: r
      } : i;
    }, this.restoreSnapshot = (i) => {
      this.cancelAttachmentUploads(this.attachments), this.state.next(i);
    }, this.setAttachments = (i) => {
      this.state.partialNext({ attachments: i });
    }, this.clearAttachments = () => {
      this.attachments.length && this.removeAttachments(this.attachments.map((i) => i.localMetadata.id));
    }, this.getAttachmentIndex = (i) => {
      const n = this.attachmentsById;
      return this.attachments.indexOf(n[i]);
    }, this.prepareAttachmentUpdate = (i) => {
      const n = this.attachments, r = [...this.attachments], a = this.getAttachmentIndex(i.localMetadata.id);
      if (a === -1) return null;
      const o = qa(n[a], i);
      if (o.diff && Object.keys(o.diff.children).length) {
        const l = Xn(o.result);
        if (l)
          return r.splice(a, 1, l), r;
      }
      return n;
    }, this.updateAttachment = (i) => {
      const n = this.prepareAttachmentUpdate(i);
      n && n !== this.attachments && this.state.partialNext({ attachments: n });
    }, this.upsertAttachments = (i) => {
      if (!i.length) return;
      let n = [...this.attachments], r = !1;
      i.forEach((a) => {
        const o = this.prepareAttachmentUpdate(a);
        if (o === null) {
          const l = Xn(a);
          l && (n.push(l), r = !0);
        } else o !== this.attachments && (n = o, r = !0);
      }), r && this.state.partialNext({ attachments: n });
    }, this.revokePreviewUri = (i) => {
      const n = i.localMetadata?.previewUri;
      n?.startsWith("blob:") && URL.revokeObjectURL?.(n);
    }, this.removeAttachments = (i) => {
      if (!i.length) return;
      const n = this.attachments.filter((r) => i.includes(r.localMetadata?.id));
      this.state.partialNext({ attachments: this.attachments.filter((r) => !i.includes(r.localMetadata?.id)) });
      for (const r of i) this.client.uploadManager.deleteUploadRecord(r);
      n.forEach(this.revokePreviewUri);
    }, this.getUploadConfigCheck = async (i) => {
      const n = this.channel.getClient();
      let r;
      n.appSettingsPromise ? r = await n.appSettingsPromise : r = await n.getAppSettings();
      const a = mt(i) ? r?.app?.image_upload_config : r?.app?.file_upload_config;
      if (!a) return { uploadBlocked: !1 };
      const { allowed_file_extensions: o, allowed_mime_types: l, blocked_file_extensions: c, blocked_mime_types: d, size_limit: h } = a, p = h || _d, u = i.type;
      if (Ds(i) || Ue(i)) {
        if (o?.length && !o.some((m) => i.name.toLowerCase().endsWith(m.toLowerCase()))) return {
          uploadBlocked: !0,
          reason: "allowed_file_extensions"
        };
        if (c?.length && c.some((m) => i.name.toLowerCase().endsWith(m.toLowerCase()))) return {
          uploadBlocked: !0,
          reason: "blocked_file_extensions"
        };
      }
      return l?.length && !l.some((m) => m.toLowerCase() === u?.toLowerCase()) ? {
        uploadBlocked: !0,
        reason: "allowed_mime_types"
      } : d?.length && d.some((m) => m.toLowerCase() === u?.toLowerCase()) ? {
        uploadBlocked: !0,
        reason: "blocked_mime_types"
      } : i.size && i.size > p ? {
        uploadBlocked: !0,
        reason: "size_limit"
      } : { uploadBlocked: !1 };
    }, this.fileToLocalUploadAttachment = async (i) => {
      const n = Oi.toLocalUploadAttachment(i), r = await this.getUploadConfigCheck(n.localMetadata.file);
      return n.localMetadata.uploadPermissionCheck = r, n.localMetadata.uploadState = r.uploadBlocked ? "blocked" : "pending", n;
    }, this.ensureLocalUploadAttachment = async (i) => {
      if (!i.localMetadata?.file) {
        this.client.notifications.addError({
          message: "File is required for upload attachment",
          origin: {
            emitter: "AttachmentManager",
            context: { attachment: i }
          },
          options: { type: "validation:attachment:file:missing" }
        });
        return;
      }
      if (!i.localMetadata.id) {
        this.client.notifications.addError({
          message: "Local upload attachment missing local id",
          origin: {
            emitter: "AttachmentManager",
            context: { attachment: i }
          },
          options: { type: "validation:attachment:id:missing" }
        });
        return;
      }
      if (!this.fileUploadFilter(i)) return;
      const n = await this.fileToLocalUploadAttachment(i.localMetadata.file);
      return i.localMetadata.id && (n.localMetadata.id = i.localMetadata.id), n;
    }, this.doDefaultUploadRequest = async (i, n) => {
      const r = n?.onProgress ? (d) => {
        const h = d.lengthComputable && d.total ? Math.round(d.loaded * 100 / d.total) : void 0;
        n.onProgress?.(h);
      } : void 0, a = r || n?.abortSignal ? {
        ...r ? { onUploadProgress: r } : {},
        ...n?.abortSignal ? { signal: n.abortSignal } : {}
      } : void 0;
      if (Ue(i)) return this.channel[mt(i) ? "sendImage" : "sendFile"](i.uri, i.name, i.type, void 0, a);
      const o = Ds(i) ? i : Da({
        blobsArray: [i],
        fileName: Pa(i.type),
        mimeType: i.type
      }), { duration: l, ...c } = await this.channel[mt(i) ? "sendImage" : "sendFile"](o, void 0, void 0, void 0, a);
      return c;
    }, this.doUploadRequest = async (i, n) => {
      const r = this.config.doUploadRequest;
      return r ? await r(i, n) : this.doDefaultUploadRequest(i, n);
    }, this.uploadAttachment = async (i) => {
      if (!this.isUploadEnabled) return;
      const n = await this.ensureLocalUploadAttachment(i);
      if (typeof n > "u") return;
      if (n.localMetadata.uploadState === "blocked")
        return this.upsertAttachments([n]), this.client.notifications.addError({
          message: "The attachment upload was blocked",
          origin: {
            emitter: "AttachmentManager",
            context: {
              attachment: i,
              blockedAttachment: n
            }
          },
          options: {
            type: "validation:attachment:upload:blocked",
            metadata: { reason: n.localMetadata.uploadPermissionCheck?.reason }
          }
        }), n;
      let r;
      try {
        r = await this.upload(i);
      } catch (l) {
        const c = l instanceof Error ? l.message : "unknown error", d = {
          ...i,
          localMetadata: {
            ...i.localMetadata,
            uploadState: "failed",
            uploadProgress: void 0,
            uploadConfirmationPending: !1
          }
        };
        return Na(l) || this.client.notifications.addError({
          message: "Error uploading attachment",
          origin: {
            emitter: "AttachmentManager",
            context: {
              attachment: i,
              failedAttachment: d
            }
          },
          options: {
            type: "api:attachment:upload:failed",
            metadata: { reason: c },
            originalError: l instanceof Error ? l : void 0
          }
        }), this.updateAttachment(d), d;
      }
      if (!r) {
        this.removeAttachments([i.localMetadata.id]);
        return;
      }
      const a = {
        ...i,
        localMetadata: {
          ...i.localMetadata,
          uploadState: "finished",
          uploadProgress: void 0,
          uploadConfirmationPending: !1
        }
      }, o = a.localMetadata.previewUri;
      return o && (o.startsWith("blob:") && URL.revokeObjectURL(o), delete a.localMetadata.previewUri), Ia(a) ? a.image_url = r.file : a.asset_url = r.file, r.thumb_url && (a.thumb_url = r.thumb_url), this.updateAttachment(a), a;
    }, this.uploadFile = async (i) => {
      const n = await this.preUploadMiddlewareExecutor.execute({
        eventName: "prepare",
        initialValue: { attachment: Oi.toLocalUploadAttachment(i) },
        mode: "concurrent"
      });
      let r = n.state.attachment;
      if (n.status === "discard" || !this.fileUploadFilter(r)) return r;
      if (r.localMetadata.uploadState === "blocked")
        return this.upsertAttachments([r]), n.state.attachment;
      let a, o;
      try {
        a = await this.upload(r);
      } catch (c) {
        o = c instanceof Error ? c : void 0;
      }
      const l = await this.postUploadMiddlewareExecutor.execute({
        eventName: "postProcess",
        initialValue: {
          attachment: {
            ...r,
            localMetadata: {
              ...r.localMetadata,
              uploadState: o ? "failed" : "finished",
              uploadProgress: void 0,
              uploadConfirmationPending: !1
            }
          },
          error: o,
          response: a
        },
        mode: "concurrent"
      });
      return r = l.state.attachment, l.status === "discard" ? (this.removeAttachments([r.localMetadata.id]), r) : (this.updateAttachment(r), r);
    }, this.uploadFiles = async (i) => {
      if (this.hasCustomDoUploadRequest && !this.hasAvailableUploadSlots || !this.hasCustomDoUploadRequest && !this.isUploadEnabled) return;
      const n = ch(i) ? Array.from(i) : i;
      return await Promise.all(n.slice(0, this.availableUploadSlots).map(this.uploadFile));
    }, this.composer = t, this.state = new A(Zn({ message: s })), this.attachmentsByIdGetterCache = {
      attachmentsById: {},
      attachments: []
    }, this.preUploadMiddlewareExecutor = new Eh({ composer: t }), this.postUploadMiddlewareExecutor = new Ch({ composer: t });
  }
  get attachmentsById() {
    const { attachments: t } = this.state.getLatestValue();
    return t !== this.attachmentsByIdGetterCache.attachments && (this.attachmentsByIdGetterCache.attachments = t, this.attachmentsByIdGetterCache.attachmentsById = t.reduce((s, i) => {
      var n;
      return i.localMetadata.id && (s[n = i.localMetadata.id] ?? (s[n] = i)), s;
    }, {})), this.attachmentsByIdGetterCache.attachmentsById;
  }
  get client() {
    return this.composer.client;
  }
  get channel() {
    return this.composer.channel;
  }
  get config() {
    return this.composer.config.attachments;
  }
  get acceptedFiles() {
    return this.config.acceptedFiles;
  }
  set acceptedFiles(t) {
    this.composer.updateConfig({ attachments: { acceptedFiles: t } });
  }
  get fileUploadFilter() {
    return this.config.fileUploadFilter;
  }
  set fileUploadFilter(t) {
    this.composer.updateConfig({ attachments: { fileUploadFilter: t } });
  }
  get maxNumberOfFilesPerMessage() {
    return this.config.maxNumberOfFilesPerMessage;
  }
  set maxNumberOfFilesPerMessage(t) {
    t !== this.maxNumberOfFilesPerMessage && this.composer.updateConfig({ attachments: { maxNumberOfFilesPerMessage: t } });
  }
  get attachments() {
    return this.state.getLatestValue().attachments;
  }
  get hasUploadPermission() {
    return !!this.channel.data?.own_capabilities?.includes("upload-file");
  }
  get hasCustomDoUploadRequest() {
    return typeof this.config.doUploadRequest == "function";
  }
  get hasAvailableUploadSlots() {
    return this.availableUploadSlots > 0;
  }
  get isUploadEnabled() {
    return this.hasUploadPermission && this.hasAvailableUploadSlots;
  }
  get successfulUploads() {
    return this.getUploadsByState("finished");
  }
  get successfulUploadsCount() {
    return this.successfulUploads.length;
  }
  get uploadsInProgressCount() {
    return this.getUploadsByState("uploading").length;
  }
  get failedUploadsCount() {
    return this.getUploadsByState("failed").length;
  }
  get blockedUploadsCount() {
    return this.getUploadsByState("blocked").length;
  }
  get pendingUploadsCount() {
    return this.getUploadsByState("pending").length;
  }
  get availableUploadSlots() {
    return this.config.maxNumberOfFilesPerMessage - this.successfulUploadsCount - this.uploadsInProgressCount;
  }
  getUploadsByState(t) {
    return Object.values(this.attachments).filter(({ localMetadata: s }) => s.uploadState === t);
  }
  upload(t) {
    const s = t.localMetadata.id;
    this.upsertAttachments([{
      ...t,
      localMetadata: {
        ...t.localMetadata,
        uploadState: "uploading",
        uploadProgress: this.config.trackUploadProgress ? 0 : void 0,
        uploadConfirmationPending: !1
      }
    }]);
    const i = this.client.uploadManager.state.subscribeWithSelector((n) => ({ upload: n.uploads[s] }), ({ upload: n }) => {
      n && this.updateAttachment({
        ...t,
        localMetadata: {
          ...t.localMetadata,
          uploadState: "uploading",
          uploadProgress: n.uploadProgress,
          uploadConfirmationPending: n.uploadConfirmationPending
        }
      });
    });
    return this.client.uploadManager.upload({
      id: s,
      channelCid: this.channel.cid,
      file: t.localMetadata.file
    }).finally(() => {
      i();
    });
  }
};
Va.toLocalUploadAttachment = (e) => {
  const t = Ue(e) || Ds(e) ? e : Da({
    blobsArray: [e],
    fileName: Pa(e.type),
    mimeType: e.type
  }), s = {
    file_size: t.size,
    mime_type: t.type,
    localMetadata: {
      file: t,
      id: $(),
      uploadState: "pending"
    },
    type: uh(t.type)
  };
  return s[mt(t) ? "fallback" : "title"] = t.name, s.localMetadata.previewUri = Ue(e) ? e.uri : URL.createObjectURL?.(e), Ue(e) && e.height && e.width && mt(t) && (s.original_height = e.height, s.original_width = e.width), Ue(e) && e.thumb_url && (s.thumb_url = e.thumb_url), Ue(e) && e.duration && (s.duration = e.duration), s;
};
var Uh = Va, $a = (e) => {
  const { localMetadata: t, ...s } = e;
  return s;
}, xh = (e) => ({
  id: "stream-io/message-composer-middleware/attachments",
  handlers: { compose: ({ state: t, next: s, discard: i, forward: n }) => {
    const { attachmentManager: r } = e;
    if (!r) return n();
    if (r.uploadsInProgressCount > 0)
      return e.client.notifications.addWarning({
        message: "Wait until all attachments have uploaded",
        origin: {
          emitter: "MessageComposer",
          context: { composer: e }
        },
        options: { type: "validation:attachment:upload:in-progress" }
      }), i();
    const a = (t.message.attachments ?? []).concat(r.successfulUploads.map($a));
    return a.length ? s({
      ...t,
      localMessage: {
        ...t.localMessage,
        attachments: a
      },
      message: {
        ...t.message,
        attachments: a
      }
    }) : n();
  } }
}), Th = (e) => ({
  id: "stream-io/message-composer-middleware/draft-attachments",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    const { attachmentManager: n } = e;
    if (!n) return i();
    const r = n.successfulUploads, a = r.length ? (t.draft.attachments ?? []).concat(r.map($a)) : void 0;
    return s({
      ...t,
      draft: {
        ...t.draft,
        attachments: a
      }
    });
  } }
}), Ah = (e) => ({
  id: "stream-io/message-composer-middleware/data-cleanup",
  handlers: { compose: ({ state: t, next: s }) => {
    const i = { type: !e.editedMessage?.type || e.editedMessage.type === "error" ? "regular" : e.editedMessage.type }, n = e.editedMessage ? va(e.editedMessage) : void 0;
    return s({
      ...t,
      localMessage: q({
        ...e.editedMessage,
        ...t.localMessage,
        ...i
      }),
      message: {
        ...n,
        ...t.message,
        ...i
      },
      sendOptions: e.editedMessage && t.sendOptions?.skip_enrich_url ? { skip_enrich_url: t.sendOptions?.skip_enrich_url } : t.sendOptions
    });
  } }
}), Lh = (e) => ({
  id: "stream-io/message-composer-middleware/custom-data",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    const n = e.customDataManager.customMessageData;
    return n ? s({
      ...t,
      localMessage: {
        ...t.localMessage,
        ...n
      },
      message: {
        ...t.message,
        ...n
      }
    }) : i();
  } }
}), Ih = (e) => ({
  id: "stream-io/message-composer-middleware/draft-custom-data",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    const n = e.customDataManager.customMessageData;
    return n ? s({
      ...t,
      draft: {
        ...t.draft,
        ...n
      }
    }) : i();
  } }
}), er = (e) => e.mentionType === "user", Ws = (e) => ({
  ...e,
  mentionType: "user"
}), Dh = (e) => e.map(Ws), ja = (e) => {
  const { mentionType: t, ...s } = e;
  return s;
}, Ha = (e) => {
  const { mentionType: t, tokenizedDisplayName: s, ...i } = e;
  return i;
}, Ph = (e) => Ws(Ha(e)), Wa = (e) => {
  const t = e.trim();
  return t === "" || t === ">" || t === "``````" || t === "``" || t === "**" || t === "____" || t === "__" || t === "****";
}, Oh = (e) => {
  if (!e) return [];
  const t = (e.mentioned_users ?? []).map((s) => typeof s == "string" ? {
    id: s,
    mentionType: "user"
  } : {
    ...s,
    mentionType: "user"
  });
  return e.mentioned_channel && t.push({
    id: "channel",
    mentionType: "channel",
    name: "channel"
  }), e.mentioned_here && t.push({
    id: "here",
    mentionType: "here",
    name: "here"
  }), e.mentioned_roles?.length && t.push(...e.mentioned_roles.map((s) => ({
    id: s,
    mentionType: "role",
    name: s
  }))), e.mentioned_groups?.length ? t.push(...e.mentioned_groups.map((s) => ({
    id: s.id,
    mentionType: "user_group",
    name: s.name
  }))) : e.mentioned_group_ids?.length && t.push(...e.mentioned_group_ids.map((s) => ({
    id: s,
    mentionType: "user_group"
  }))), t;
}, kh = (e, t) => e.id === t.id && e.mentionType === t.mentionType, Nh = (e) => e.mentions ?? e.mentionedUsers.map(Ws), tr = ({ composer: e, message: t }) => {
  if (!t) {
    const n = e.config.text.defaultValue ?? "";
    return {
      command: null,
      mentionedUsers: [],
      mentions: [],
      text: n,
      selection: {
        start: n.length,
        end: n.length
      }
    };
  }
  const s = t.text ?? "", i = Oh(t);
  return {
    mentionedUsers: (t.mentioned_users ?? []).map((n) => typeof n == "string" ? { id: n } : n),
    mentions: i,
    text: s,
    selection: {
      start: s.length,
      end: s.length
    }
  };
}, Fh = class {
  constructor({ composer: e, message: t }) {
    this.initState = ({ message: s } = {}) => {
      this.state.next(tr({
        composer: this.composer,
        message: s
      }));
    }, this.getSnapshot = (s = this.state.getLatestValue()) => s, this.restoreSnapshot = (s) => {
      this.state.next(s);
    }, this.upsertMentionedUser = (s) => {
      const i = [...this.mentionedUsers], n = i.findIndex((r) => r.id === s.id);
      n >= 0 ? (i.splice(n, 1, s), this.setMentionedUsers(i)) : (i.push(s), this.setMentionedUsers(i));
    }, this.getMentionedUser = (s) => this.mentionedUsers.find((i) => i.id === s), this.removeMentionedUser = (s) => {
      const i = this.mentionedUsers.findIndex((r) => r.id === s);
      if (i === -1) return;
      const n = [...this.mentionedUsers];
      n.splice(i, 1), this.setMentionedUsers(n);
    }, this.upsertMentionEntity = (s) => {
      const i = [...this.mentions], n = i.findIndex((r) => kh(r, s));
      n >= 0 ? i.splice(n, 1, s) : i.push(s), this.setMentions(i);
    }, this.getMentionEntity = (s, i) => this.mentions.find((n) => n.mentionType === s && n.id === i), this.removeMentionEntity = (s, i) => {
      const n = this.mentions.findIndex((a) => a.mentionType === s && a.id === i);
      if (n === -1) return;
      const r = [...this.mentions];
      r.splice(n, 1), this.setMentions(r);
    }, this.setCommand = (s) => {
      if (!s) {
        this.clearCommand();
        return;
      }
      if (s.name === this.command?.name || this.composer.isCommandDisabled(s)) return;
      const i = { command: null };
      this.commitState({
        ...this.state.getLatestValue(),
        command: s,
        effects: [{
          command: s,
          stateToRestore: i,
          type: "command.activate"
        }],
        suggestions: void 0
      });
    }, this.setText = (s) => {
      !this.enabled || s === this.text || this.state.partialNext({ text: s });
    }, this.setSelection = (s) => {
      const i = s.start !== this.selection.start || s.end !== this.selection.end;
      !this.enabled || !i || this.state.partialNext({ selection: s });
    }, this.insertText = async ({ text: s, selection: i }) => {
      if (!this.enabled) return;
      const n = s.replace(/\r\n/g, `
`), r = i ?? this.selection, { maxLengthOnEdit: a } = this.composer.config.text ?? {}, o = this.text, l = [
        o.slice(0, r.start),
        n,
        o.slice(r.end)
      ].join(""), c = l.slice(0, typeof a == "number" ? a : l.length), d = r.start + n.length, h = Math.min(d, c.length);
      await this.handleChange({
        text: c,
        selection: {
          start: h,
          end: h
        }
      });
    }, this.wrapSelection = ({ head: s = "", selection: i, tail: n = "" }) => {
      if (!this.enabled) return;
      const r = i ?? this.selection, a = this.text.slice(0, r.start), o = this.text.slice(r.start, r.end), l = this.text.slice(r.end), c = {
        start: a.length + s.length,
        end: a.length + s.length + o.length
      };
      this.state.partialNext({
        text: [
          a,
          s,
          o,
          n,
          l
        ].join(""),
        selection: c
      });
    }, this.setSuggestions = (s) => {
      this.state.partialNext({ suggestions: s });
    }, this.closeSuggestions = () => {
      const { suggestions: s } = this.state.getLatestValue();
      s && this.state.partialNext({ suggestions: void 0 });
    }, this.commitState = (s) => {
      const { change: i, effects: n, ...r } = s;
      this.state.next(r), this.composer.applyEffects(n);
    }, this.handleChange = async ({ text: s, selection: i }) => {
      if (!this.enabled) return;
      const n = await this.middlewareExecutor.execute({
        eventName: "onChange",
        initialValue: {
          ...this.state.getLatestValue(),
          text: s,
          selection: i
        }
      });
      n.status !== "discard" && (this.commitState(n.state), this.config.publishTypingEvents && s && ga(this.channel.keystroke(this.composer.threadId ?? void 0), "start typing event"));
    }, this.handleSelect = async (s) => {
      if (!this.enabled) return;
      const i = await this.middlewareExecutor.execute({
        eventName: "onSuggestionItemSelect",
        initialValue: {
          ...this.state.getLatestValue(),
          change: { selectedSuggestion: s }
        }
      });
      i?.status !== "discard" && this.commitState(i.state);
    }, this.composer = e, this.state = new A(tr({
      composer: e,
      message: t
    })), this.middlewareExecutor = new zu({ composer: e });
  }
  get channel() {
    return this.composer.channel;
  }
  get config() {
    return this.composer.config.text;
  }
  get enabled() {
    return this.composer.config.text.enabled;
  }
  set enabled(e) {
    e !== this.enabled && this.composer.updateConfig({ text: { enabled: e } });
  }
  get defaultValue() {
    return this.composer.config.text.defaultValue;
  }
  set defaultValue(e) {
    e !== this.defaultValue && this.composer.updateConfig({ text: { defaultValue: e } });
  }
  get maxLengthOnEdit() {
    return this.composer.config.text.maxLengthOnEdit;
  }
  set maxLengthOnEdit(e) {
    e !== this.maxLengthOnEdit && this.composer.updateConfig({ text: { maxLengthOnEdit: e } });
  }
  get maxLengthOnSend() {
    return this.composer.config.text.maxLengthOnSend;
  }
  set maxLengthOnSend(e) {
    e !== this.maxLengthOnSend && this.composer.updateConfig({ text: { maxLengthOnSend: e } });
  }
  get publishTypingEvents() {
    return this.composer.config.text.publishTypingEvents;
  }
  set publishTypingEvents(e) {
    e !== this.publishTypingEvents && this.composer.updateConfig({ text: { publishTypingEvents: e } });
  }
  get command() {
    return this.state.getLatestValue().command;
  }
  get mentionedUsers() {
    return this.state.getLatestValue().mentionedUsers;
  }
  get mentions() {
    return Nh(this.state.getLatestValue());
  }
  get selection() {
    return this.state.getLatestValue().selection;
  }
  get suggestions() {
    return this.state.getLatestValue().suggestions;
  }
  get text() {
    return this.state.getLatestValue().text;
  }
  get textIsEmpty() {
    return Wa(this.text);
  }
  setMentionedUsers(e) {
    const t = this.mentions.filter((s) => !er(s));
    this.state.partialNext({
      mentionedUsers: e,
      mentions: [...t, ...e.map(Ws)]
    });
  }
  setMentions(e) {
    this.state.partialNext({
      mentionedUsers: e.filter(er).map(ja),
      mentions: e
    });
  }
  clearCommand() {
    this.command && this.commitState({
      ...this.state.getLatestValue(),
      command: null,
      effects: [{ type: "command.clear" }]
    });
  }
}, Bh = {
  "-1": {
    name: "InternalSystemError",
    retryable: !0
  },
  2: {
    name: "AccessKeyError",
    retryable: !1
  },
  3: {
    name: "AuthenticationFailedError",
    retryable: !0
  },
  4: {
    name: "InputError",
    retryable: !1
  },
  6: {
    name: "DuplicateUsernameError",
    retryable: !1
  },
  9: {
    name: "RateLimitError",
    retryable: !0
  },
  16: {
    name: "DoesNotExistError",
    retryable: !1
  },
  17: {
    name: "NotAllowedError",
    retryable: !1
  },
  18: {
    name: "EventNotSupportedError",
    retryable: !1
  },
  19: {
    name: "ChannelFeatureNotSupportedError",
    retryable: !1
  },
  20: {
    name: "MessageTooLongError",
    retryable: !1
  },
  21: {
    name: "MultipleNestingLevelError",
    retryable: !1
  },
  22: {
    name: "PayloadTooBigError",
    retryable: !1
  },
  23: {
    name: "RequestTimeoutError",
    retryable: !0
  },
  24: {
    name: "MaxHeaderSizeExceededError",
    retryable: !1
  },
  40: {
    name: "AuthErrorTokenExpired",
    retryable: !1
  },
  41: {
    name: "AuthErrorTokenNotValidYet",
    retryable: !1
  },
  42: {
    name: "AuthErrorTokenUsedBeforeIssuedAt",
    retryable: !1
  },
  43: {
    name: "AuthErrorTokenSignatureInvalid",
    retryable: !1
  },
  44: {
    name: "CustomCommandEndpointMissingError",
    retryable: !1
  },
  45: {
    name: "CustomCommandEndpointCallError",
    retryable: !0
  },
  46: {
    name: "ConnectionIDNotFoundError",
    retryable: !1
  },
  60: {
    name: "CoolDownError",
    retryable: !0
  },
  69: {
    name: "ErrWrongRegion",
    retryable: !1
  },
  70: {
    name: "ErrQueryChannelPermissions",
    retryable: !1
  },
  71: {
    name: "ErrTooManyConnections",
    retryable: !0
  },
  99: {
    name: "AppSuspendedError",
    retryable: !1
  }
};
function zs(e) {
  return e.code !== void 0;
}
function Ct(e) {
  if (!e.code) return !1;
  const t = Bh[`${e.code}`];
  return t ? t.retryable : !1;
}
function qh(e) {
  return e.code === 46;
}
function Vh(e) {
  if (typeof e.isWSFailure == "boolean") return e.isWSFailure;
  try {
    return JSON.parse(e.message).isWSFailure;
  } catch {
    return !1;
  }
}
function $h(e) {
  return !e.status || e.status < 200 || 300 <= e.status;
}
var jh = {
  pageSize: 10,
  allowEmptySearchString: !1,
  resetOnNewSearchQuery: !0
}, Hh = ({ debounceMs: e, shortQueryDebounceMs: t, longQueryDebounceMs: s, shortQueryMaxLength: i }) => ({
  shortQueryDebounceMs: t ?? e ?? 500,
  longQueryDebounceMs: s ?? e ?? 300,
  shortQueryMaxLength: i ?? 2
}), za = class {
  constructor(e) {
    this.setDebounceOptions = (n = {}) => {
      const r = Hh(n);
      this.shortQueryDebounceMs = r.shortQueryDebounceMs, this.longQueryDebounceMs = r.longQueryDebounceMs, this.shortQueryMaxLength = r.shortQueryMaxLength, this.searchDebounced = Ls(this.executeQuery.bind(this), (a) => this.getDebounceMs(a));
    }, this.getDebounceMs = (n) => {
      const { length: r } = n ?? this.searchQuery;
      return r <= this.shortQueryMaxLength ? this.shortQueryDebounceMs : this.longQueryDebounceMs;
    }, this.search = (n) => this.searchDebounced(n), this.activate = () => {
      this.isActive || this.state.partialNext({ isActive: !0 });
    }, this.deactivate = () => {
      this.isActive && this.state.partialNext({ isActive: !1 });
    }, this.canExecuteQuery = (n) => {
      const r = typeof n < "u", a = n ?? this.searchQuery;
      return !!(this.isActive && this.canDispatchQuery(r) && (this.allowEmptySearchString || a));
    };
    const { pageSize: t, allowEmptySearchString: s, resetOnNewSearchQuery: i } = {
      ...jh,
      ...e
    };
    this.pageSize = t, this.allowEmptySearchString = s, this.resetOnNewSearchQuery = i, this.state = new A(this.initialState), this.setDebounceOptions(e ?? {});
  }
  canDispatchQuery(e) {
    return e || !this.isLoading && this.hasNext;
  }
  get lastQueryError() {
    return this.state.getLatestValue().lastQueryError;
  }
  get hasNext() {
    return this.state.getLatestValue().hasNext;
  }
  get hasResults() {
    return Array.isArray(this.state.getLatestValue().items);
  }
  get isActive() {
    return this.state.getLatestValue().isActive;
  }
  get isLoading() {
    return this.state.getLatestValue().isLoading;
  }
  get initialState() {
    return {
      hasNext: !0,
      isActive: !1,
      isLoading: !1,
      items: void 0,
      lastQueryError: void 0,
      next: void 0,
      offset: 0,
      searchQuery: ""
    };
  }
  get items() {
    return this.state.getLatestValue().items;
  }
  get next() {
    return this.state.getLatestValue().next;
  }
  get offset() {
    return this.state.getLatestValue().offset;
  }
  get searchQuery() {
    return this.state.getLatestValue().searchQuery;
  }
  getStateBeforeFirstQuery(e) {
    const t = this.initialState, s = this.items, i = this.resetOnNewSearchQuery ? t.items : s;
    return {
      ...t,
      items: i,
      isActive: this.isActive,
      isLoading: this.resetOnNewSearchQuery ? !0 : !s,
      searchQuery: e
    };
  }
  getStateAfterQuery(e, t) {
    return {
      ...this.state.getLatestValue(),
      lastQueryError: void 0,
      ...e,
      isLoading: !1,
      items: t ? e.items : [...this.items ?? [], ...e.items || []]
    };
  }
  prepareStateForQuery(e) {
    const t = typeof e < "u", s = e ?? this.searchQuery;
    return t ? this.state.next(this.getStateBeforeFirstQuery(e ?? "")) : this.state.partialNext({ isLoading: !0 }), {
      searchString: s,
      hasNewSearchQuery: t
    };
  }
  updatePaginationStateFromQuery(e) {
    const { items: t, next: s } = e, i = {};
    return Object.prototype.hasOwnProperty.call(e, "next") ? (i.next = s, i.hasNext = !!s) : (i.offset = (this.offset ?? 0) + t.length, i.hasNext = t.length === this.pageSize), i;
  }
  resetState() {
    this.state.next(this.initialState);
  }
  resetStateAndActivate() {
    this.resetState(), this.activate();
  }
}, Wh = class extends za {
  constructor() {
    super(...arguments), this.queryAbortController = null;
  }
  abortInFlightQuery() {
    return this.queryAbortController ? (this.queryAbortController.abort(), this.queryAbortController = null, !0) : !1;
  }
  resetState() {
    this.abortInFlightQuery(), super.resetState();
  }
  async executeQuery(e) {
    if (!this.canExecuteQuery(e)) return;
    this.abortInFlightQuery();
    const { signal: t } = this.queryAbortController = new AbortController(), { hasNewSearchQuery: s, searchString: i } = this.prepareStateForQuery(e);
    let n = {};
    try {
      const r = await this.query(i, { signal: t });
      if (!r) return;
      const { items: a } = r;
      n = this.updatePaginationStateFromQuery(r), n.items = await this.filterQueryResults(a);
    } catch (r) {
      n.lastQueryError = r, zs(r) && !Ct(r) && (n.hasNext = !1);
    } finally {
      t.aborted || this.state.next(this.getStateAfterQuery(n, s));
    }
  }
  cancelScheduledQuery() {
    this.searchDebounced.cancel(), this.abortInFlightQuery() && this.isLoading && this.state.partialNext({ isLoading: !1 });
  }
}, zh = class extends za {
  executeQuery(e) {
    if (!this.canExecuteQuery(e)) return;
    const { hasNewSearchQuery: t, searchString: s } = this.prepareStateForQuery(e);
    let i = {};
    try {
      const n = this.query(s);
      if (!n) return;
      const { items: r } = n;
      i = this.updatePaginationStateFromQuery(n), i.items = this.filterQueryResults(r);
    } catch (n) {
      i.lastQueryError = n, zs(n) && !Ct(n) && (i.hasNext = !1);
    } finally {
      this.state.next(this.getStateAfterQuery(i, t));
    }
  }
  cancelScheduledQuery() {
    this.searchDebounced.cancel();
  }
}, Qh = {
  debounceMs: 300,
  pageSize: 10
}, Gh = class {
  constructor(e) {
    this._isCursorPagination = !1, this.setDebounceOptions = ({ debounceMs: i }) => {
      this._executeQueryDebounced = Ls(this.executeQuery.bind(this), i);
    }, this.canExecuteQuery = (i) => !this.isLoading && i === "next" && this.hasNext || i === "prev" && this.hasPrev, this.next = () => this.executeQuery({ direction: "next" }), this.prev = () => this.executeQuery({ direction: "prev" }), this.nextDebounced = () => {
      this._executeQueryDebounced({ direction: "next" });
    }, this.prevDebounced = () => {
      this._executeQueryDebounced({ direction: "prev" });
    };
    const { debounceMs: t, pageSize: s } = {
      ...Qh,
      ...e
    };
    this.pageSize = s, this.state = new A(this.initialState), this.setDebounceOptions({ debounceMs: t });
  }
  get lastQueryError() {
    return this.state.getLatestValue().lastQueryError;
  }
  get hasNext() {
    return this.state.getLatestValue().hasNext;
  }
  get hasPrev() {
    return this.state.getLatestValue().hasPrev;
  }
  get hasResults() {
    return Array.isArray(this.state.getLatestValue().items);
  }
  get isLoading() {
    return this.state.getLatestValue().isLoading;
  }
  get initialState() {
    return {
      hasNext: !0,
      hasPrev: !0,
      isLoading: !1,
      items: void 0,
      lastQueryError: void 0,
      cursor: void 0,
      offset: 0
    };
  }
  get items() {
    return this.state.getLatestValue().items;
  }
  get cursor() {
    return this.state.getLatestValue().cursor;
  }
  get offset() {
    return this.state.getLatestValue().offset;
  }
  getStateBeforeFirstQuery() {
    return {
      ...this.initialState,
      isLoading: !0
    };
  }
  getStateAfterQuery(e, t) {
    return {
      ...this.state.getLatestValue(),
      lastQueryError: void 0,
      ...e,
      isLoading: !1,
      items: t ? e.items : [...this.items ?? [], ...e.items || []]
    };
  }
  async executeQuery({ direction: e }) {
    if (!this.canExecuteQuery(e)) return;
    const t = typeof this.items > "u";
    t ? this.state.next(this.getStateBeforeFirstQuery()) : this.state.partialNext({ isLoading: !0 });
    const s = {};
    try {
      const i = await this.query({ direction: e });
      if (!i) return;
      const { items: n, next: r, prev: a } = i;
      t && (r || a) && (this._isCursorPagination = !0), this._isCursorPagination ? (s.cursor = {
        next: r || null,
        prev: a || null
      }, s.hasNext = !!r, s.hasPrev = !!a) : (s.offset = (this.offset ?? 0) + n.length, s.hasNext = n.length === this.pageSize), s.items = await this.filterQueryResults(n);
    } catch (i) {
      s.lastQueryError = i;
    } finally {
      this.state.next(this.getStateAfterQuery(s, t));
    }
  }
  cancelScheduledQuery() {
    this._executeQueryDebounced.cancel();
  }
  resetState() {
    this.state.next(this.initialState);
  }
}, Kh = class extends Gh {
  constructor(e, t) {
    super(t), this.query = async ({ direction: s }) => {
      const i = this.cursor?.[s], { reminders: n, next: r, prev: a } = await this.client.queryReminders({
        filter: this.filters,
        sort: this.sort,
        limit: this.pageSize,
        [s]: i
      });
      return {
        items: n,
        next: r,
        prev: a
      };
    }, this.filterQueryResults = (s) => s, this.client = e;
  }
  get filters() {
    return this._filters;
  }
  get sort() {
    return this._sort;
  }
  set filters(e) {
    this._filters = e, this.resetState();
  }
  set sort(e) {
    this._sort = e, this.resetState();
  }
};
function an(e) {
  return e.replace(/[-[\]{}()*+?.,/\\^$|#]/g, "\\$&");
}
var Qa = (e) => e?.match(/^\/(\S+)(?:\s.*)?$/)?.[1], Jh = (e) => {
  const t = e.match(/^\/(\S+)\s+.*/);
  return t && t[1];
}, Xh = (e, t) => e.replace(new RegExp(`^${an(`/${t}`)}\\s*`), ""), Yh = (e, t, s = "@") => t.reduce((i, n) => {
  let r = i.replace(`${s}${n.id}`, "");
  return n.name && (r = r.replace(`${s}${n.name}`, "")), r.trim();
}, e.trim()), Ga = (e, t) => Array.from(new Set(t.filter(({ id: s, name: i }) => e.includes(`@${s}`) || !!i && e.includes(`@${i}`)))), on = (e, t) => {
  if (!t) return;
  const s = t.toLowerCase();
  return e.query(s).items.find((i) => i.name?.toLowerCase() === s);
}, Ka = (e, t) => {
  const s = e.getCommandDisabledReason(t);
  if (s)
    return e.client.notifications.addWarning({
      message: s === "editing" ? "Command not available while editing" : "Command not available while replying",
      origin: {
        emitter: "MessageComposer",
        context: {
          command: t,
          composer: e
        }
      },
      options: {
        type: "validation:command:disabled",
        metadata: {
          command: t.name,
          reason: s
        }
      }
    }), !0;
}, Zh = ({ composer: e, sendability: t }) => {
  if (!t.ready)
    return e.client.notifications.addWarning({
      message: "Command not ready to be sent",
      origin: {
        emitter: "MessageComposer",
        context: {
          command: t.command,
          composer: e
        }
      },
      options: {
        type: "validation:command:not-ready",
        metadata: {
          command: t.command.name,
          ...t.reason ? { reason: t.reason } : {},
          ...t.metadata ?? {}
        }
      }
    }), !0;
}, Ja = ({ trigger: e, text: t, isCommand: s = !1, acceptTrailingSpaces: i = !0 }) => {
  const n = an(e), r = `[^\\s${n}]*`, a = t.match(new RegExp(s ? `^[${n}]${r}$` : i ? `(?!^|\\W)?[${n}]${r}\\s?${r}$` : `(?!^|\\W)?[${n}]${r}$`, "g"));
  return a && a[a.length - 1].trim();
}, Xa = ({ insertText: e, selection: t, text: s, trigger: i }) => {
  const n = s.slice(0, t.end), r = s.slice(t.end), a = n.lastIndexOf(i);
  return {
    text: n.slice(0, a) + e + r,
    selection: {
      start: a + e.length,
      end: a + e.length
    }
  };
}, rt = ({ displayName: e, searchToken: t }) => ({ tokenizedDisplayName: {
  token: t,
  parts: t ? e.split(new RegExp(`(${an(t)})`, "gi")).filter(Boolean) : [e]
} }), Ya = class extends zh {
  constructor(e, t) {
    super(t), this.type = "commands", this.canExecuteQuery = (s) => {
      const i = typeof s < "u";
      return this.isActive && !this.isLoading && (this.hasNext || i);
    }, this.channel = e;
  }
  getStateBeforeFirstQuery(e) {
    const t = super.getStateBeforeFirstQuery(e), { items: s } = this.state.getLatestValue();
    return {
      ...t,
      items: s
    };
  }
  query(e) {
    const t = (this.channel.getConfig()?.commands || []).filter((s) => !!(s.name && s.name.toLowerCase().indexOf(e.toLowerCase()) !== -1));
    return e && t.sort((s, i) => {
      let n = s.name?.toLowerCase(), r = i.name?.toLowerCase();
      if (n?.indexOf(e) === 0 && (n = `0${n}`), r?.indexOf(e) === 0 && (r = `0${r}`), n != null && r != null) {
        if (n < r) return -1;
        if (n > r) return 1;
      }
      return 0;
    }), {
      items: t.map((s) => ({
        ...s,
        id: s.name
      })),
      next: null
    };
  }
  filterQueryResults(e) {
    return e;
  }
}, eu = {
  minChars: 1,
  trigger: "/"
}, tu = (e, t) => {
  const s = We(eu, t ?? {});
  let i = new Ya(e);
  return t?.searchSource && (i = t.searchSource, i.resetState()), i.activate(), {
    id: "stream-io/text-composer/commands-middleware",
    handlers: {
      onChange: ({ state: n, next: r, complete: a, forward: o }) => {
        if (!n.selection) return o();
        const l = n.text.slice(0, n.selection.end), c = Jh(l);
        if (c) {
          const h = on(i, c), p = t?.composer;
          if (h && !p?.isCommandDisabled(h)) return r({
            ...n,
            command: h,
            suggestions: void 0
          });
        }
        const d = Ja({
          trigger: s.trigger,
          text: l,
          acceptTrailingSpaces: !1,
          isCommand: !0
        });
        if (d && d.length === s.minChars && i.resetStateAndActivate(), !d || d.length < s.minChars) {
          const h = n.suggestions?.trigger === s.trigger, p = { ...n };
          return h && delete p.suggestions, r(p);
        }
        return a({
          ...n,
          command: null,
          suggestions: {
            query: d.slice(1),
            searchSource: i,
            trigger: s.trigger
          }
        });
      },
      onSuggestionItemSelect: ({ state: n, next: r, forward: a }) => {
        const { selectedSuggestion: o } = n.change ?? {};
        if (!o || n.suggestions?.trigger !== s.trigger) return a();
        const l = t?.composer;
        return l && Ka(l, o) ? a() : (i.resetStateAndActivate(), r({
          ...n,
          ...Xa({
            insertText: `/${o.name} `,
            selection: n.selection,
            text: n.text,
            trigger: s.trigger
          }),
          command: o,
          suggestions: void 0
        }));
      }
    }
  };
}, su = (e, t, s) => {
  const i = on(t, Qa(s));
  if (i && e.isCommandDisabled(i)) return i;
}, iu = (e, t) => {
  const s = t ?? new Ya(e.channel);
  return {
    id: "stream-io/message-composer-middleware/data-validation",
    handlers: { compose: async ({ state: i, discard: n, forward: r }) => {
      const { maxLengthOnSend: a } = e.config.text ?? {}, o = i.message.text ?? "", l = su(e, s, o);
      if (l)
        return Ka(e, l), await n();
      const c = e.textComposer.command ?? on(s, Qa(o));
      if (c && Zh({
        composer: e,
        sendability: e.validateCommandSendability(c, o)
      })) return await n();
      const d = typeof a == "number" && o.length > a;
      return e.compositionIsEmpty || d ? await n() : await r();
    } }
  };
}, nu = (e) => ({
  id: "stream-io/message-composer-middleware/draft-data-validation",
  handlers: { compose: async ({ state: t, discard: s, forward: i }) => {
    const n = !Wa(t.draft.text ?? "") || t.draft.attachments?.length || t.draft.poll_id || t.draft.quoted_message_id;
    return e.lastChangeOriginIsLocal && n ? await i() : await s();
  } }
}), ru = (e) => ({
  id: "stream-io/message-composer-middleware/link-previews",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    const { linkPreviewsManager: n } = e;
    if (!n) return i();
    n.cancelURLEnrichment();
    const r = n.loadingPreviews.length > 0, a = n.dismissedPreviews.length > 0, o = n.loadingPreviews.length > 0 ? [] : n.loadedPreviews.map((h) => cn.getPreviewData(h)), l = (t.message.attachments ?? []).concat(o), c = (t.localMessage.attachments ?? []).concat(o);
    if (!l.length && !c.length) return i();
    const d = { ...t.sendOptions };
    return (!r && o.length > 0 || a) && (d.skip_enrich_url = !0), s({
      ...t,
      message: l.length ? {
        ...t.message,
        attachments: l
      } : t.message,
      localMessage: c.length ? {
        ...t.localMessage,
        attachments: c
      } : t.localMessage,
      sendOptions: d
    });
  } }
}), au = (e) => ({
  id: "stream-io/message-composer-middleware/draft-link-previews",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    const { linkPreviewsManager: n } = e;
    if (!n) return i();
    n.cancelURLEnrichment();
    const r = n.loadedPreviews.map((a) => cn.getPreviewData(a));
    return r.length ? s({
      ...t,
      draft: {
        ...t.draft,
        attachments: (t.draft.attachments ?? []).concat(r)
      }
    }) : i();
  } }
}), ou = (e, t) => e.includes(`@${t}`), hi = (e) => e !== void 0, lu = (e) => e.mentionType === "channel" ? ["channel"] : e.mentionType === "here" ? ["here"] : e.mentionType === "user" ? [e.id, e.name].filter(hi) : e.mentionType === "role" ? [e.name, e.id].filter(hi) : e.mentionType === "user_group" ? e.name ? [e.name, e.id].filter(hi) : [] : [], cu = (e, t) => {
  const s = lu(e);
  return s.length ? s.some((i) => ou(t, i)) : !0;
}, du = (e, t) => {
  const s = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    s.set(t(i), i);
  }), [...s.values()];
}, Za = ({ mentions: e, text: t }) => du(e.filter((s) => cu(s, t)), (s) => `${s.mentionType}:${s.id}`).reduce((s, i) => (i.mentionType === "user" ? s.mentioned_users.push(ja(i)) : i.mentionType === "channel" ? s.mentioned_channel = !0 : i.mentionType === "here" ? s.mentioned_here = !0 : i.mentionType === "role" ? s.mentioned_roles.push(i.id) : i.mentionType === "user_group" && s.mentioned_group_ids.push(i.id), s), {
  mentioned_channel: !1,
  mentioned_group_ids: [],
  mentioned_here: !1,
  mentioned_roles: [],
  mentioned_users: []
}), hu = (e) => ({
  id: "stream-io/message-composer-middleware/text-composition",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    if (!e.textComposer) return i();
    const { mentions: n, text: r } = e.textComposer, { mentioned_channel: a, mentioned_group_ids: o, mentioned_here: l, mentioned_roles: c, mentioned_users: d } = Za({
      mentions: n,
      text: r
    });
    return !r && !a && !l && o.length === 0 && c.length === 0 && d.length === 0 ? i() : s({
      ...t,
      localMessage: {
        ...t.localMessage,
        mentioned_channel: a,
        mentioned_group_ids: o,
        mentioned_here: l,
        mentioned_roles: c,
        mentioned_users: d,
        text: r
      },
      message: {
        ...t.message,
        mentioned_channel: a,
        mentioned_group_ids: o,
        mentioned_here: l,
        mentioned_roles: c,
        mentioned_users: d.map((h) => h.id),
        text: r
      }
    });
  } }
}), uu = (e) => ({
  id: "stream-io/message-composer-middleware/draft-text-composition",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    if (!e.textComposer) return i();
    const { maxLengthOnSend: n } = e.config.text ?? {}, { mentions: r, text: a } = e.textComposer, o = typeof n == "number" && a.length > n ? a.slice(0, n) : a, { mentioned_channel: l, mentioned_group_ids: c, mentioned_here: d, mentioned_roles: h, mentioned_users: p } = Za({
      mentions: r,
      text: o
    }), u = {
      ...l ? { mentioned_channel: !0 } : {},
      ...c.length ? { mentioned_group_ids: c } : {},
      ...d ? { mentioned_here: !0 } : {},
      ...h.length ? { mentioned_roles: h } : {},
      ...p.length ? { mentioned_users: p.map((m) => m.id) } : {}
    };
    return s({
      ...t,
      draft: {
        ...t.draft,
        ...u,
        text: o
      }
    });
  } }
}), fu = (e) => ({
  id: "stream-io/message-composer-middleware/own-state",
  handlers: { compose: ({ state: t, next: s }) => {
    const i = {};
    return e.quotedMessage && (i.quoted_message_id = e.quotedMessage.id), e.pollId && (i.poll_id = e.pollId), e.showReplyInChannel && (i.show_in_channel = !0), s({
      ...t,
      localMessage: {
        ...t.localMessage,
        ...i,
        quoted_message: e.quotedMessage ?? void 0
      },
      message: {
        ...t.message,
        ...i
      }
    });
  } }
}), pu = (e) => ({
  id: "stream-io/message-composer-middleware/draft-own-state",
  handlers: { compose: ({ state: t, next: s }) => {
    const i = {};
    return e.quotedMessage && (i.quoted_message_id = e.quotedMessage.id), e.pollId && (i.poll_id = e.pollId), e.showReplyInChannel && (i.show_in_channel = !0), s({
      ...t,
      draft: {
        ...t.draft,
        ...i
      }
    });
  } }
}), gu = (e) => ({
  id: "stream-io/message-composer-middleware/user-data-injection",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    if (!e.client.user) return i();
    const { channel_mutes: n, devices: r, mutes: a, ...o } = e.client.user;
    return s({
      ...t,
      localMessage: {
        ...t.localMessage,
        user: o,
        user_id: o.id
      }
    });
  } }
}), mu = {
  attachments: [],
  mentioned_users: [],
  parent_id: void 0,
  quoted_message: void 0,
  text: ""
}, yu = (e) => ({
  id: "stream-io/message-composer-middleware/poll-only",
  handlers: { compose: ({ state: t, complete: s, forward: i }) => {
    const n = e.pollId, r = !!e.editedMessage, a = !!e.threadId;
    return !n || a || r ? i() : s({
      ...t,
      localMessage: {
        ...t.localMessage,
        ...mu,
        poll_id: n
      },
      message: {
        id: t.localMessage.id,
        poll_id: n
      }
    });
  } }
}), _u = (e) => ({
  id: "stream-io/message-composer-middleware/shared-location",
  handlers: { compose: ({ state: t, next: s, forward: i }) => {
    const { locationComposer: n } = e, r = n.validLocation;
    if (!n || !r || !e.client.user) return i();
    const a = (/* @__PURE__ */ new Date()).toISOString();
    return s({
      ...t,
      localMessage: {
        ...t.localMessage,
        shared_location: {
          ...r,
          channel_cid: e.channel.cid,
          created_at: a,
          updated_at: a,
          user_id: e.client.user.id
        }
      },
      message: {
        ...t.message,
        shared_location: r
      }
    });
  } }
}), wu = class extends Ne {
  constructor({ composer: e }) {
    super(), this.use([
      gu(e),
      yu(e),
      hu(e),
      xh(e),
      ru(e),
      _u(e),
      fu(e),
      Lh(e),
      iu(e),
      Ah(e)
    ]);
  }
  get installedMiddleware() {
    return super.installedMiddleware;
  }
}, bu = class extends Ne {
  constructor({ composer: e }) {
    super(), this.use([
      uu(e),
      Th(e),
      au(e),
      pu(e),
      Ih(e),
      nu(e)
    ]);
  }
}, ln = /^([2-9]|10)$/;
var sr = (e) => !e.trim(), ki = {
  enforce_unique_vote: () => ({ max_votes_allowed: void 0 }),
  max_votes_allowed: ({ data: e, value: t }) => e.enforce_unique_vote && t ? { max_votes_allowed: "Enforce unique vote is enabled" } : !t.match(/^[0-9]+$/) && t ? { max_votes_allowed: "Only numbers are allowed" } : t?.length > 1 && !t.match(ln) ? { max_votes_allowed: "Type a number from 2 to 10" } : { max_votes_allowed: void 0 },
  options: ({ value: e }) => {
    const t = {}, s = /* @__PURE__ */ new Set();
    return e.forEach((i) => {
      s.has(i.text) && i.text.length ? t[i.id] = "Option already exists" : s.add(i.text);
    }), Object.keys(t).length > 0 ? { options: t } : { options: void 0 };
  }
}, vu = { name: ({ currentError: e, value: t }) => t && e ? { name: void 0 } : { name: typeof e == "string" ? e : void 0 } }, Cu = {
  max_votes_allowed: ({ value: e }) => e && !e.match(ln) ? { max_votes_allowed: "Type a number from 2 to 10" } : { max_votes_allowed: void 0 },
  name: ({ value: e }) => sr(e) ? { name: "Question is required" } : { name: void 0 },
  options: (e) => {
    const t = ki.options?.(e)?.options ?? {};
    return e.value.forEach((s, i) => {
      const n = i === e.value.length - 1;
      sr(s.text) && !n && (t[s.id] = "Option is empty");
    }), Object.keys(t).length > 0 ? { options: t } : { options: void 0 };
  }
}, Su = (e) => !Array.isArray(e) && typeof e?.index == "number" && typeof e?.text == "string", Ru = (e) => {
  if (e === "" || e == null) return "";
  const t = typeof e == "string" ? parseInt(e, 10) : Number(e);
  return !Number.isInteger(t) || Number.isNaN(t) ? "" : String(Math.min(10, Math.max(2, t)));
}, Eu = {
  enforce_unique_vote: ({ value: e }) => ({
    enforce_unique_vote: e,
    max_votes_allowed: ""
  }),
  max_votes_allowed: ({ value: e }) => ({ max_votes_allowed: Ru(e) }),
  options: ({ value: e, data: t }) => {
    if (Array.isArray(e)) return { options: e.map((c) => ({
      id: c.id,
      text: c.text.trim()
    })) };
    const { index: s, text: i } = e, n = t.options || [], r = n && n.slice(s + 1).length > 0 && !i, a = n.slice(0, s), o = n.slice(s + 1), l = [
      ...a,
      ...r ? [] : [{
        ...n[s],
        text: i
      }],
      ...o
    ];
    return n.length < 100 && !l.some((c) => !c.text.trim()) && l.push({
      id: $(),
      text: ""
    }), { options: l };
  }
}, Mu = ({ processors: e, validators: t } = {}) => {
  const s = ({ state: i, validators: n, processors: r }) => {
    const { previousState: a, targetFields: o } = i;
    let l;
    if (!r && Su(o.options)) {
      const d = [...a.data.options], h = a.data.options[o.options.index];
      h && (h.text = o.options.text, d.splice(o.options.index, 1, h)), l = {
        ...o,
        options: d
      };
    } else r ? l = Object.entries(o).reduce((d, [h, p]) => {
      const u = r[h];
      return d = {
        ...d,
        ...u ? u({
          data: a.data,
          value: p
        }) : { [h]: p }
      }, d;
    }, {}) : l = o;
    const c = Object.keys(o).reduce((d, h) => {
      const p = n[h];
      if (p) {
        const u = p({
          currentError: a.errors[h],
          data: a.data,
          value: l[h]
        });
        d = {
          ...d,
          ...u
        };
      }
      return d;
    }, {});
    return {
      newData: l,
      newErrors: c
    };
  };
  return {
    id: "stream-io/poll-composer-state-processing",
    handlers: {
      handleFieldChange: ({ state: i, next: n, forward: r }) => {
        if (!i.targetFields) return r();
        const { previousState: a, injectedFieldErrors: o } = i, { newData: l, newErrors: c } = s({
          processors: {
            ...Eu,
            ...e?.handleFieldChange
          },
          state: i,
          validators: {
            ...ki,
            ...vu,
            ...t?.handleFieldChange
          }
        });
        return n({
          ...i,
          nextState: {
            ...a,
            data: {
              ...a.data,
              ...l
            },
            errors: {
              ...a.errors,
              ...c,
              ...o
            }
          }
        });
      },
      handleFieldBlur: ({ state: i, next: n, forward: r }) => {
        if (!i.targetFields) return r();
        const { previousState: a } = i, { newData: o, newErrors: l } = s({
          processors: e?.handleFieldBlur,
          state: i,
          validators: {
            ...ki,
            ...Cu,
            ...t?.handleFieldBlur
          }
        });
        return n({
          ...i,
          nextState: {
            ...a,
            data: {
              ...a.data,
              ...o
            },
            errors: {
              ...a.errors,
              ...l,
              ...i.injectedFieldErrors
            }
          }
        });
      }
    }
  };
}, Uu = (e) => ({
  id: "stream-io/poll-composer-composition",
  handlers: { compose: ({ discard: t, forward: s }) => e.pollComposer.canCreatePoll ? s() : t() }
}), xu = class extends Ne {
  constructor({ composer: e }) {
    super(), this.use([Uu(e)]);
  }
}, Tu = class extends Ne {
  constructor() {
    super(), this.use([Mu()]);
  }
}, Au = {
  selection: {
    start: 0,
    end: 0
  },
  text: ""
}, Lu = (e) => ({
  command: e,
  stateToRestore: Au,
  type: "command.activate"
}), Iu = (e) => typeof e?.name == "string", Du = () => ({
  handlers: {
    onChange: ({ forward: e }) => e(),
    onSuggestionItemSelect: ({ state: e, next: t, forward: s }) => {
      const { selectedSuggestion: i } = e.change ?? {};
      return !Iu(i) || !e.command || e.command.name !== i.name ? s() : t({
        ...e,
        effects: [...e.effects ?? [], Lu(e.command)]
      });
    }
  },
  id: "stream-io/text-composer/command-effects-middleware"
}), ir = {
  a: "á|à|ã|â|À|Á|Ã|Â",
  c: "ç|Ç",
  e: "é|è|ê|É|È|Ê",
  i: "í|ì|î|Í|Ì|Î",
  n: "ñ|Ñ",
  o: "ó|ò|ô|ő|õ|Ó|Ò|Ô|Õ",
  u: "ú|ù|û|ü|Ú|Ù|Û|Ü"
}, ui = (e) => e ? Object.keys(ir).reduce((t, s) => t.replace(new RegExp(ir[s], "g"), s), e) : "", Pu = (e, t) => {
  if (e.length === 0) return t.length;
  if (t.length === 0) return e.length;
  const s = [];
  let i = 0;
  for (; i <= t.length; i++) s[i] = [i];
  let n = 0;
  for (; n <= e.length; n++) s[0][n] = n;
  for (i = 1; i <= t.length; i++) for (n = 1; n <= e.length; n++) t.charAt(i - 1) === e.charAt(n - 1) ? s[i][n] = s[i - 1][n - 1] : s[i][n] = Math.min(s[i - 1][n - 1] + 1, Math.min(s[i][n - 1] + 1, s[i - 1][n] + 1));
  return s[t.length][e.length];
}, Bt = (e, t) => e?.includes(t) ?? !1, Ou = (e) => ({
  channel: Bt(e, "notify-channel"),
  here: Bt(e, "notify-here"),
  role: Bt(e, "notify-role"),
  user: !0,
  user_group: Bt(e, "notify-group")
}), ku = (e) => {
  if (e)
    try {
      return JSON.parse(e);
    } catch {
      return;
    }
}, Nu = (e, t) => {
  const s = e.findIndex((n) => n.id === t.id);
  if (s === -1) return e.concat(t);
  const i = [...e];
  return i.splice(s, 1, t), i;
}, Fu = (e, t) => {
  const s = e.findIndex((n) => n.id === t.id && n.mentionType === t.mentionType);
  if (s === -1) return e.concat(t);
  const i = [...e];
  return i.splice(s, 1, t), i;
}, Bu = (e) => {
  if (e.mentionType === "user") return Ph(e);
  if (e.mentionType === "channel") return {
    id: "channel",
    mentionType: "channel",
    name: "channel"
  };
  if (e.mentionType === "here") return {
    id: "here",
    mentionType: "here",
    name: "here"
  };
  if (e.mentionType === "role") return {
    id: e.id,
    mentionType: "role",
    name: e.name
  };
  if (e.mentionType === "user_group") return {
    id: e.id,
    mentionType: "user_group",
    name: e.name
  };
  throw new Error(`Unsupported mention suggestion type: ${JSON.stringify(e)}`);
}, qu = (e) => `@${e.name || e.id} `, Vu = {
  channel: (e, { searchToken: t }) => {
    const s = String(e);
    return {
      id: s,
      mentionType: "channel",
      name: "channel",
      ...rt({
        displayName: s,
        searchToken: t
      })
    };
  },
  here: (e, { searchToken: t }) => {
    const s = String(e);
    return {
      id: s,
      mentionType: "here",
      name: "here",
      ...rt({
        displayName: s,
        searchToken: t
      })
    };
  },
  role: (e, { searchToken: t }) => {
    const s = String(e);
    return {
      id: s,
      mentionType: "role",
      name: s,
      ...rt({
        displayName: s,
        searchToken: t
      })
    };
  },
  user: (e, { searchToken: t }) => {
    const s = e;
    return {
      ...s,
      mentionType: "user",
      ...rt({
        displayName: s.name || s.id,
        searchToken: t
      })
    };
  },
  user_group: (e, { searchToken: t }) => {
    const s = e;
    return {
      description: s.description,
      id: s.id,
      memberCount: s.members?.length,
      mentionType: "user_group",
      name: s.name,
      ...rt({
        displayName: s.name || s.id,
        searchToken: t
      })
    };
  }
}, $u = class extends Wh {
  constructor(e, t) {
    const { mentionAllAppUsers: s, memberFilters: i, memberSort: n, searchOptions: r, suggestionFactoryMappers: a, textComposerText: o, transliterate: l, trigger: c, userFilters: d, userSort: h, ...p } = t || {};
    super({
      ...p,
      allowEmptySearchString: !0
    }), this.type = "mentions", this.normalizeSearchValue = (u) => this.transliterate(ui(u)).toLowerCase(), this.matchesSearchQuery = (u, m) => m ? this.normalizeSearchValue(u).includes(this.normalizeSearchValue(m)) : !0, this.matchesPrefixSearchQuery = (u, m) => m ? this.normalizeSearchValue(u).startsWith(this.normalizeSearchValue(m)) : !0, this.matchesUserNameSearchQuery = (u, m) => {
      if (!m) return !0;
      const y = this.normalizeSearchValue(u).split(/\s+/).filter(Boolean), _ = this.normalizeSearchValue(m).split(/\s+/).filter(Boolean);
      if (!y.length || !_.length) return !1;
      const g = _.slice(0, -1), w = _[_.length - 1];
      return g.every((b) => y.includes(b)) && y.some((b) => b.startsWith(w));
    }, this.isMentionTypeAllowed = (u) => Ou(this.channel.data?.own_capabilities)[u], this.mapMentionSuggestion = (u, m, y = this.searchQuery) => (this.config.suggestionFactoryMappers?.[u] ?? Vu[u])(m, {
      searchToken: y,
      source: this
    }), this.getChannelTeam = () => this.channel.data?.team, this.toUserSuggestion = (u, m = this.searchQuery) => this.mapMentionSuggestion("user", u, m), this.toChannelMentionSuggestion = (u = this.searchQuery) => this.mapMentionSuggestion("channel", "channel", u), this.toHereMentionSuggestion = (u = this.searchQuery) => this.mapMentionSuggestion("here", "here", u), this.toRoleMentionSuggestion = (u, m = this.searchQuery) => this.mapMentionSuggestion("role", u, m), this.toUserGroupMentionSuggestion = (u, m = this.searchQuery) => this.mapMentionSuggestion("user_group", u, m), this.transliterate = (u) => u, this.getMembersAndWatchers = () => {
      const u = Object.values(this.channel.state.members ?? {}).map(({ user: g }) => g), m = Object.values(this.channel.state.watchers ?? {}), y = [...u, ...m], _ = {};
      return y.forEach((g) => {
        g && !_[g.id] && (_[g.id] = g);
      }), Object.values(_);
    }, this.getBuiltinMentionSuggestions = (u) => [...this.isMentionTypeAllowed("channel") ? [this.toChannelMentionSuggestion(u)] : [], ...this.isMentionTypeAllowed("here") ? [this.toHereMentionSuggestion(u)] : []].filter(({ name: m }) => this.matchesPrefixSearchQuery(m, u)), this.getRoleMentionSuggestions = async (u, m = {}) => {
      if (!this.isMentionTypeAllowed("role")) return [];
      if (!u) return [];
      const { roles: y } = await this.client.searchRoles({ query: u }, m);
      return [...y?.map((_) => _.name) ?? []].sort((_, g) => _.localeCompare(g)).map((_) => this.toRoleMentionSuggestion(_, u));
    }, this.searchMembersLocally = (u) => {
      const { textComposerText: m } = this.config;
      return m ? this.getMembersAndWatchers().filter((y) => {
        if (y.id === this.client.userID) return !1;
        if (!u) return !0;
        const _ = this.transliterate(ui(y.id)).toLowerCase(), g = this.transliterate(ui(u)).toLowerCase(), w = 3, b = this.config.trigger ?? "@", v = m.slice(-4).includes(b);
        if (this.matchesUserNameSearchQuery(y.name, g)) return !0;
        const M = Pu(g, _);
        return _.includes(g) || M <= w && v;
      }).sort((y, _) => {
        if (!this.memberSort) return (y.name || "").localeCompare(_.name || "");
        for (const [g, w] of Object.entries(this.memberSort)) {
          const b = y[g], v = _[g];
          if (b !== v)
            return w === 1 ? String(b || "").localeCompare(String(v || "")) : String(v || "").localeCompare(String(b || ""));
        }
        return 0;
      }) : [];
    }, this.prepareQueryUsersParams = (u, m = 0) => ({
      filters: {
        $or: [{ id: { $autocomplete: u } }, { name: { $autocomplete: u } }],
        ...this.userFilters
      },
      sort: this.userSort ?? [{ name: 1 }, { id: 1 }],
      options: {
        ...this.searchOptions,
        limit: this.pageSize,
        offset: m
      }
    }), this.prepareQueryMembersParams = (u, m = 0) => {
      let _ = [{ user_id: 1 }];
      return this.memberSort ? Array.isArray(this.memberSort) ? _ = this.memberSort[0] : Object.keys(this.memberSort).length === 1 && (_ = this.memberSort) : _ = [{ user_id: 1 }], {
        filters: this.memberFilters ?? { name: { $autocomplete: u } },
        sort: _,
        options: {
          ...this.searchOptions,
          limit: this.pageSize,
          offset: m
        }
      };
    }, this.queryUsers = async (u, m = 0, y = {}) => {
      const { filters: _, sort: g, options: w } = this.prepareQueryUsersParams(u, m), { users: b } = await this.client.queryUsers(_, g, w, y);
      return b;
    }, this.queryMembers = async (u, m = 0, y = {}) => {
      const { filters: _, sort: g, options: w } = this.prepareQueryMembersParams(u, m);
      return (await this.channel.queryMembers(_, g, w, y)).members.map((b) => b.user);
    }, this.getUserSuggestionsPage = async (u, m = 0, y = {}) => {
      if (!this.isMentionTypeAllowed("user")) return {
        items: [],
        nextOffset: void 0
      };
      let _;
      const g = this.allMembersLoadedWithInitialChannelQuery || !u;
      if (this.config.mentionAllAppUsers) _ = await this.queryUsers(u, m, y);
      else if (g) {
        const w = this.searchMembersLocally(u), b = w.slice(m, m + this.pageSize).map((v) => this.toUserSuggestion(v, u));
        return {
          items: b,
          nextOffset: w.length > m + this.pageSize ? m + b.length : void 0
        };
      } else _ = await this.queryMembers(u, m, y);
      return {
        items: _.map((w) => this.toUserSuggestion(w, u)),
        nextOffset: _.length === this.pageSize ? m + _.length : void 0
      };
    }, this.buildUserGroupSearchCursor = (u) => {
      if (u.length < this.pageSize) return;
      const m = u[u.length - 1];
      if (m?.name)
        return JSON.stringify({
          id_gt: m.id,
          name_gt: m.name
        });
    }, this.getUserGroupSuggestionsPage = async (u, m, y = {}) => {
      if (!this.isMentionTypeAllowed("user_group")) return {
        items: [],
        next: void 0
      };
      if (!u) return {
        items: [],
        next: void 0
      };
      const _ = this.getChannelTeam(), g = ku(m), w = {
        query: u,
        limit: this.pageSize,
        ..._ ? { team_id: _ } : {},
        ...g?.id_gt ? { id_gt: g.id_gt } : {},
        ...g?.name_gt ? { name_gt: g.name_gt } : {}
      }, { user_groups: b } = await this.client.searchUserGroups(w, y);
      return {
        items: b.map((v) => this.toUserGroupMentionSuggestion(v, u)),
        next: this.buildUserGroupSearchCursor(b)
      };
    }, this.client = e.getClient(), this.channel = e, this.userFilters = d, this.userSort = h, this.memberFilters = i, this.memberSort = n, this.searchOptions = r, this.config = {
      mentionAllAppUsers: s,
      suggestionFactoryMappers: a,
      textComposerText: o,
      trigger: c
    }, l && (this.transliterate = l);
  }
  get allMembersLoadedWithInitialChannelQuery() {
    return Object.keys(this.channel.state.members || {}).length < bd;
  }
  getStateBeforeFirstQuery(e) {
    this.userGroupCursor = void 0;
    const t = super.getStateBeforeFirstQuery(e), { items: s } = this.state.getLatestValue();
    return {
      ...t,
      items: s
    };
  }
  updatePaginationStateFromQuery() {
    const e = this.latestUserPaginationState ?? { itemCount: 0 };
    return {
      hasNext: typeof e.nextOffset < "u" || typeof this.userGroupCursor < "u",
      next: void 0,
      offset: (this.offset ?? 0) + e.itemCount
    };
  }
  async query(e, t = {}) {
    const s = this.offset ?? 0, i = s === 0 && typeof this.userGroupCursor > "u", n = this.latestUserPaginationState, r = this.userGroupCursor, [a, o, l] = await Promise.allSettled([
      this.getUserSuggestionsPage(e, s, t),
      this.getUserGroupSuggestionsPage(e, r, t),
      i ? this.getRoleMentionSuggestions(e, t) : Promise.resolve([])
    ]);
    if (t.signal?.aborted) return { items: [] };
    const c = a.status === "fulfilled" ? a.value : {
      items: [],
      nextOffset: i ? void 0 : n?.nextOffset
    }, d = o.status === "fulfilled" ? o.value : {
      items: [],
      next: i ? void 0 : r
    }, h = l.status === "fulfilled" ? l.value : [], p = [
      ...i ? this.getBuiltinMentionSuggestions(e) : [],
      ...h,
      ...d.items,
      ...c.items
    ];
    return this.latestUserPaginationState = {
      itemCount: c.items.length,
      nextOffset: c.nextOffset
    }, this.userGroupCursor = d.next, { items: p };
  }
  filterMutes(e) {
    const { textComposerText: t } = this.config;
    if (!t) return [];
    const { mutedUsers: s } = this.client;
    return t.includes("/unmute") && !s.length ? [] : s.length ? t.includes("/unmute") ? e.filter((i) => i.mentionType === "user" && s.some((n) => n.target.id === i.id)) : e.filter((i) => i.mentionType !== "user" || s.every((n) => n.target.id !== i.id)) : e;
  }
  filterQueryResults(e) {
    return this.filterMutes(e);
  }
  resetState() {
    this.latestUserPaginationState = void 0, this.userGroupCursor = void 0, super.resetState();
  }
}, ju = {
  minChars: 1,
  trigger: "@"
}, Hu = (e, t) => {
  const s = We(ju, t ?? {});
  let i;
  t?.searchSource ? (i = t.searchSource, i.resetState()) : i = new $u(e, { trigger: s.trigger }), i.activate();
  let n;
  return {
    id: "stream-io/text-composer/mentions-middleware",
    handlers: {
      onChange: ({ state: r, next: a, complete: o, forward: l }) => {
        if (!r.selection) return l();
        const c = n !== void 0 && r.selection.end === n;
        n = void 0;
        const d = r.command || r.text.trimStart().startsWith("/") ? r.mentionedUsers : Ga(r.text, r.mentionedUsers), h = d.length !== r.mentionedUsers.length || d.some((y, _) => y.id !== r.mentionedUsers[_]?.id) ? {
          ...r,
          mentionedUsers: d
        } : r, p = h.text.slice(0, h.selection.end), u = Ja({
          trigger: s.trigger,
          text: p
        });
        u && u.length === s.minChars && i.resetStateAndActivate();
        const m = !!u && /\s$/.test(p) && (c || (h.mentions ?? []).some((y) => {
          const _ = y.name ?? y.id;
          if (!_) return !1;
          const g = `@${_} `;
          if (!p.endsWith(g)) return !1;
          const w = g.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          return (p.match(new RegExp(w, "g"))?.length ?? 0) === 1;
        }));
        if (!u || u.length < s.minChars || m) {
          const y = h.suggestions?.trigger === s.trigger, _ = { ...h };
          return y && delete _.suggestions, a(_);
        }
        return i.config.textComposerText = h.text, o({
          ...h,
          suggestions: {
            query: u.slice(1),
            searchSource: i,
            trigger: s.trigger
          }
        });
      },
      onSuggestionItemSelect: ({ state: r, complete: a, forward: o }) => {
        const { selectedSuggestion: l } = r.change ?? {};
        if (!l || r.suggestions?.trigger !== s.trigger) return o();
        i.resetStateAndActivate();
        const c = Bu(l), d = Fu(r.mentions ?? Dh(r.mentionedUsers), c), h = Xa({
          insertText: qu(l),
          selection: r.selection,
          text: r.text,
          trigger: s.trigger
        });
        return n = h.selection.end, a({
          ...r,
          ...h,
          mentionedUsers: l.mentionType === "user" ? Nu(r.mentionedUsers, Ha(l)) : r.mentionedUsers,
          mentions: d,
          suggestions: void 0
        });
      }
    }
  };
}, Wu = (e) => ({
  id: "stream-io/text-composer/pre-validation-middleware",
  handlers: {
    onChange: ({ state: t, next: s, forward: i }) => {
      const { maxLengthOnEdit: n } = e.config.text ?? {};
      return typeof n == "number" && t.text.length > n ? (t.text = t.text.slice(0, n), s({
        ...t,
        text: t.text
      })) : i();
    },
    onSuggestionItemSelect: ({ forward: t }) => t()
  }
}), zu = class extends Ne {
  constructor({ composer: e }) {
    super(), this.use([
      Wu(e),
      Hu(e.channel),
      tu(e.channel, { composer: e }),
      Du()
    ]);
  }
  async execute({ eventName: e, initialValue: t }) {
    const s = await this.executeMiddlewareChain({
      eventName: e,
      initialValue: t
    }), { query: i, searchSource: n } = s.state.suggestions ?? {};
    return n?.search(i)?.catch(console.error), s;
  }
}, Qu = /* @__PURE__ */ new Set([
  "mute",
  "unmute",
  "unban"
]), Gu = ({ command: e, commandArgsText: t, mentionedUsersInText: s }) => {
  if (!(e.name !== "ban" && !Qu.has(e.name ?? "")))
    return s.length === 0 ? {
      command: e,
      ready: !1,
      reason: "missing-mention"
    } : e.name !== "ban" ? {
      command: e,
      ready: !0
    } : Yh(t, s).length ? {
      command: e,
      ready: !0
    } : {
      command: e,
      ready: !1,
      reason: "missing-ban-reason"
    };
}, Ku = { sendValidator: Gu }, nr = (e, t) => {
  const s = t?.commands?.sendValidator;
  return typeof s > "u" ? e : {
    ...e,
    commands: {
      ...e.commands,
      sendValidator: s
    }
  };
}, Ju = {
  debounceURLEnrichmentMs: 1500,
  enabled: !1,
  findURLFn: (e) => Zc(e, "url", { defaultProtocol: "https" }).reduce((t, s) => {
    try {
      const i = new URL(s.href);
      s.isLink && /^[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}$/.test(i.hostname) && t.push(s.href);
    } catch {
    }
    return t;
  }, [])
}, Xu = {
  acceptedFiles: [],
  fileUploadFilter: () => !0,
  maxNumberOfFilesPerMessage: wd,
  trackUploadProgress: !0
}, Yu = {
  enabled: !0,
  publishTypingEvents: !0
}, Zu = {
  enabled: !0,
  getDeviceId: () => $()
}, ef = {
  attachments: Xu,
  commands: Ku,
  drafts: { enabled: !1 },
  linkPreviews: Ju,
  location: Zu,
  text: Yu
}, rr = (e) => e ? {
  message: {},
  custom: {}
} : {
  message: {},
  custom: {}
}, tf = class {
  constructor({ composer: e, message: t }) {
    this.isMessageDataEqual = (s, i) => JSON.stringify(s.message) === JSON.stringify(i?.message), this.initState = ({ message: s } = {}) => {
      this.state.next(rr({
        composer: this.composer,
        message: s
      }));
    }, this.getSnapshot = () => this.state.getLatestValue(), this.restoreSnapshot = (s) => {
      this.state.next(s);
    }, this.composer = e, this.state = new A(rr({
      composer: e,
      message: t
    }));
  }
  get customMessageData() {
    return this.state.getLatestValue().message;
  }
  get customComposerData() {
    return this.state.getLatestValue().custom;
  }
  setMessageData(e) {
    this.state.partialNext({ message: {
      ...this.state.getLatestValue().message,
      ...e
    } });
  }
  setCustomData(e) {
    this.state.partialNext({ custom: {
      ...this.state.getLatestValue().custom,
      ...e
    } });
  }
}, sf = (e) => new Map(e.map((t) => [t.og_scrape_url, t])), ar = ({ message: e }) => e ? { previews: e.attachments?.reduce((t, s) => (s.og_scrape_url && t.set(s.og_scrape_url, {
  ...s,
  status: "loaded"
}), t), /* @__PURE__ */ new Map()) ?? /* @__PURE__ */ new Map() } : { previews: /* @__PURE__ */ new Map() }, Fe = class Ee {
  constructor({ composer: t, message: s }) {
    this.shouldDiscardEnrichQueries = !1, this.initState = ({ message: i } = {}) => {
      this.cancelURLEnrichment(), this.state.next(ar({ message: this.enabled ? i : void 0 }));
    }, this.getSnapshot = () => this.state.getLatestValue(), this.restoreSnapshot = (i) => {
      this.state.next(i);
    }, this._findAndEnrichUrls = async (i) => {
      if (!this.enabled) return;
      const n = this.config.findURLFn(i);
      if (this.shouldDiscardEnrichQueries = !n.length, this.shouldDiscardEnrichQueries) {
        this.state.next({ previews: /* @__PURE__ */ new Map() });
        return;
      }
      const r = new Map(Array.from(this.previews).filter(([o]) => n.includes(o) || n.includes(o + "/"))), a = n.filter((o) => {
        const l = this.previews;
        return !(l.get(o) || l.get(o + "/"));
      }).map((o) => ({
        og_scrape_url: o.trim(),
        status: "loading"
      }));
      a.length && (this.state.partialNext({ previews: new Map([...r, ...sf(a)]) }), await Promise.all(a.map(async (o) => {
        try {
          const { duration: l, ...c } = await this.client.enrichURL(o.og_scrape_url);
          if (this.shouldDiscardEnrichQueries) return;
          this.previews.has(o.og_scrape_url) && this.updatePreview(o.og_scrape_url, {
            status: "loaded",
            ...c
          });
        } catch {
          this.previews.has(o.og_scrape_url) && this.updatePreview(o.og_scrape_url, { status: "failed" });
        }
        return o;
      })));
    }, this.cancelURLEnrichment = () => {
      this.findAndEnrichUrls.cancel?.(), this.findAndEnrichUrls.flush?.();
    }, this.clearPreviews = () => {
      const i = this.previews, n = /* @__PURE__ */ new Map();
      i.forEach((r, a) => {
        Ee.previewIsDismissed(r) && n.set(a, r);
      }), this.state.partialNext({ previews: n });
    }, this.updatePreview = (i, n) => {
      if (!i) return;
      const r = this.previews.get(i), a = n.status ?? this.previews.get(i)?.status ?? "pending";
      let o = n;
      if (r) {
        const l = qa(r, n);
        if (!l.diff || Object.keys(l.diff).length === 0) return;
        o = l.result;
      }
      this.state.partialNext({ previews: new Map(this.previews).set(i, {
        ...o,
        og_scrape_url: i,
        status: a
      }) });
    }, this.dismissPreview = (i) => {
      const n = this.previews.get(i);
      n && (this.onLinkPreviewDismissed?.(n), this.updatePreview(i, { status: "dismissed" }));
    }, this.composer = t, this.state = new A(ar({ message: this.enabled ? s : void 0 })), this.findAndEnrichUrls = Ls(this._findAndEnrichUrls.bind(this), this.config.debounceURLEnrichmentMs);
  }
  get client() {
    return this.composer.client;
  }
  get channel() {
    return this.composer.channel;
  }
  get previews() {
    return this.state.getLatestValue().previews;
  }
  get loadingPreviews() {
    return Array.from(this.previews.values()).filter((t) => Ee.previewIsLoading(t));
  }
  get loadedPreviews() {
    return Array.from(this.previews.values()).filter((t) => Ee.previewIsLoaded(t));
  }
  get dismissedPreviews() {
    return Array.from(this.previews.values()).filter((t) => Ee.previewIsDismissed(t));
  }
  get failedPreviews() {
    return Array.from(this.previews.values()).filter((t) => Ee.previewIsFailed(t));
  }
  get pendingPreviews() {
    return Array.from(this.previews.values()).filter((t) => Ee.previewIsPending(t));
  }
  get config() {
    return this.composer.config.linkPreviews;
  }
  get debounceURLEnrichmentMs() {
    return this.config.debounceURLEnrichmentMs;
  }
  set debounceURLEnrichmentMs(t) {
    this.cancelURLEnrichment(), this.findAndEnrichUrls = Ls(this._findAndEnrichUrls.bind(this), this.config.debounceURLEnrichmentMs), this.composer.updateConfig({ linkPreviews: { debounceURLEnrichmentMs: t } });
  }
  get enabled() {
    return !!this.channel.getConfig()?.url_enrichment && this.composer.config.linkPreviews.enabled;
  }
  set enabled(t) {
    t !== this.enabled && this.composer.updateConfig({ linkPreviews: { enabled: t } });
  }
  get findURLFn() {
    return this.config.findURLFn;
  }
  set findURLFn(t) {
    this.composer.updateConfig({ linkPreviews: { findURLFn: t } });
  }
  get onLinkPreviewDismissed() {
    return this.config.onLinkPreviewDismissed;
  }
  set onLinkPreviewDismissed(t) {
    this.composer.updateConfig({ linkPreviews: { onLinkPreviewDismissed: t } });
  }
};
Fe.previewIsLoading = (e) => e.status === "loading";
Fe.previewIsLoaded = (e) => e.status === "loaded";
Fe.previewIsDismissed = (e) => e.status === "dismissed";
Fe.previewIsFailed = (e) => e.status === "failed";
Fe.previewIsPending = (e) => e.status === "pending";
Fe.getPreviewData = (e) => {
  const { status: t, ...s } = e;
  return s;
};
var cn = Fe, nf = 6e4, or = ({ message: e }) => ({ location: e?.shared_location ?? null }), rf = class {
  constructor({ composer: e, message: t }) {
    this.initState = ({ message: s } = {}) => {
      this.state.next(or({ message: s }));
    }, this.getSnapshot = () => this.state.getLatestValue(), this.restoreSnapshot = (s) => {
      this.state.next(s);
    }, this.setData = (s) => {
      this.config.enabled && (!s.latitude || !s.longitude || this.state.partialNext({ location: {
        ...s,
        message_id: this.composer.id,
        created_by_device_id: this.deviceId
      } }));
    }, this.composer = e, this.state = new A(or({ message: t })), this._deviceId = this.config.getDeviceId();
  }
  get config() {
    return this.composer.config.location;
  }
  get deviceId() {
    return this._deviceId;
  }
  get location() {
    return this.state.getLatestValue().location;
  }
  get validLocation() {
    const { durationMs: e, ...t } = this.location ?? {};
    return t?.created_by_device_id && t.message_id && t.latitude && t.longitude && (typeof e > "u" || e >= nf) ? {
      ...t,
      end_at: e && new Date(Date.now() + e).toISOString()
    } : null;
  }
}, af = (e, t) => {
  const s = t.getSnapshot();
  e.stateToRestore && (s.textComposer = {
    ...s.textComposer,
    ...e.stateToRestore,
    command: null
  }), t.captureSnapshot(s), t.textComposer.state.next({
    command: e.command,
    mentionedUsers: [],
    mentions: [],
    suggestions: void 0,
    selection: {
      start: 0,
      end: 0
    },
    text: ""
  });
  const i = t.attachmentManager.attachments;
  t.attachmentManager.initState(), t.attachmentManager.cancelAttachmentUploads(i), t.linkPreviewsManager.initState(), t.locationComposer.initState(), t.pollComposer.initState(), t.customDataManager.initState();
}, of = (e, t) => {
  const s = t.popSnapshot();
  s && t.restoreSnapshot(s);
}, lf = class {
  constructor(e) {
    this.options = e, this.handlers = /* @__PURE__ */ new Map(), this.registerDefaultHandlers = () => {
      this.registerEffectHandler("command.activate", af), this.registerEffectHandler("command.clear", of);
    }, this.registerEffectHandler = (t, s) => {
      this.handlers.set(t, s);
    }, this.applyEffects = (t = []) => {
      t.forEach((s) => this.applyEffect(s));
    }, this.applyEffect = (t) => {
      this.handlers.get(t.type)?.(t, this.options.composer);
    }, this.registerDefaultHandlers();
  }
}, cf = class extends Error {
  constructor(e, { code: t, status: s, response: i }) {
    super(e), this.name = "ErrorFromResponse", this.code = t, this.response = i, this.status = s;
  }
  toJSON() {
    const e = [["status", this.status], ["code", this.code]], t = [];
    for (const [s, i] of e) typeof i < "u" && i !== null && t.push(`${s}: ${i}`);
    return {
      message: `(${t.join(", ")}) - ${this.message}`,
      stack: this.stack,
      name: this.name,
      code: this.code,
      status: this.status
    };
  }
}, df = class {
  constructor({ composer: e }) {
    this.initState = () => {
      this.state.next(this.initialState);
    }, this.getSnapshot = () => this.state.getLatestValue(), this.restoreSnapshot = (t) => {
      this.state.next(t);
    }, this.updateFields = async (t, s) => {
      const { state: i, status: n } = await this.stateMiddlewareExecutor.execute({
        eventName: "handleFieldChange",
        initialValue: {
          nextState: { ...this.state.getLatestValue() },
          previousState: { ...this.state.getLatestValue() },
          targetFields: t,
          injectedFieldErrors: s
        }
      });
      n !== "discard" && this.state.next(i.nextState);
    }, this.handleFieldBlur = async (t) => {
      const s = await this.stateMiddlewareExecutor.execute({
        eventName: "handleFieldBlur",
        initialValue: {
          nextState: { ...this.state.getLatestValue() },
          previousState: { ...this.state.getLatestValue() },
          targetFields: { [t]: this.state.getLatestValue().data[t] }
        }
      });
      s.status !== "discard" && this.state.next(s.state.nextState);
    }, this.compose = async () => {
      const { data: t, errors: s } = this.state.getLatestValue(), i = await this.compositionMiddlewareExecutor.execute({
        eventName: "compose",
        initialValue: {
          data: {
            ...t,
            max_votes_allowed: t.max_votes_allowed ? parseInt(t.max_votes_allowed) : void 0,
            options: t.options?.filter((n) => n.text.trim()).map((n) => ({ text: n.text }))
          },
          errors: s
        }
      });
      if (i.status !== "discard")
        return i.state;
    }, this.composer = e, this.state = new A(this.initialState), this.compositionMiddlewareExecutor = new xu({ composer: e }), this.stateMiddlewareExecutor = new Tu();
  }
  get initialState() {
    return {
      data: {
        allow_answers: !1,
        allow_user_suggested_options: !1,
        description: "",
        enforce_unique_vote: !0,
        id: $(),
        max_votes_allowed: "",
        name: "",
        options: [{
          id: $(),
          text: ""
        }],
        user_id: this.composer.client.user?.id,
        voting_visibility: "public"
      },
      errors: {}
    };
  }
  get allow_answers() {
    return this.state.getLatestValue().data.allow_answers;
  }
  get allow_user_suggested_options() {
    return this.state.getLatestValue().data.allow_user_suggested_options;
  }
  get description() {
    return this.state.getLatestValue().data.description;
  }
  get enforce_unique_vote() {
    return this.state.getLatestValue().data.enforce_unique_vote;
  }
  get id() {
    return this.state.getLatestValue().data.id;
  }
  get max_votes_allowed() {
    return this.state.getLatestValue().data.max_votes_allowed;
  }
  get name() {
    return this.state.getLatestValue().data.name;
  }
  get options() {
    return this.state.getLatestValue().data.options;
  }
  get user_id() {
    return this.state.getLatestValue().data.user_id;
  }
  get voting_visibility() {
    return this.state.getLatestValue().data.voting_visibility;
  }
  get canCreatePoll() {
    const { data: e, errors: t } = this.state.getLatestValue(), s = e.options.filter((a) => !!a.text.trim()).length > 0, i = !!e.name, n = parseInt(e.max_votes_allowed?.match(ln)?.[0] || ""), r = e.max_votes_allowed === "" || !!n && (2 <= n || n <= 10);
    return s && i && r && Object.values(t).filter((a) => !!a).length === 0;
  }
}, fi = 50, hf = [{ created_at: -1 }], uf = 1e3, ff = {
  active_participant_count: !0,
  channel: !0,
  channel_cid: !0,
  created_at: !0,
  created_by: !0,
  created_by_user_id: !0,
  deleted_at: !0,
  draft: !0,
  last_message_at: !0,
  latest_replies: !0,
  parent_message: !0,
  parent_message_id: !0,
  participant_count: !0,
  read: !0,
  reply_count: !0,
  thread_participants: !0,
  title: !0,
  updated_at: !0
}, lr = (e) => {
  const t = {};
  for (const s in e) {
    if (ff[s]) continue;
    const i = s;
    t[i] = e[i];
  }
  return t;
}, ze = class extends ye {
  constructor({ client: e, threadData: t }) {
    super(), this.failedRepliesMap = /* @__PURE__ */ new Map(), this.activate = () => {
      this.state.partialNext({ active: !0 });
    }, this.deactivate = () => {
      this.state.partialNext({ active: !1 });
    }, this.reload = async () => {
      if (!this.state.getLatestValue().isLoading) {
        this.state.partialNext({ isLoading: !0 });
        try {
          const n = await this.client.getThread(this.id, { watch: !0 });
          this.hydrateState(n);
        } finally {
          this.state.partialNext({ isLoading: !1 });
        }
      }
    }, this.hydrateState = (n) => {
      if (n === this) return;
      if (n.id !== this.id) throw new Error("Cannot hydrate thread's state using thread with different threadId");
      const { createdAt: r, custom: a, title: o, deletedAt: l, parentMessage: c, participants: d, read: h, replyCount: p, replies: u, updatedAt: m } = n.state.getLatestValue(), y = Array.from(this.failedRepliesMap.values());
      this.state.partialNext({
        title: o,
        createdAt: r,
        custom: a,
        deletedAt: l,
        parentMessage: c,
        participants: d,
        read: h,
        replyCount: p,
        replies: y.length ? u.concat(y) : u,
        updatedAt: m,
        isStateStale: !1
      });
    }, this.registerSubscriptions = () => {
      this.hasSubscriptions || (this.addUnsubscribeFunction(this.subscribeThreadUpdated()), this.addUnsubscribeFunction(this.subscribeMarkActiveThreadRead()), this.addUnsubscribeFunction(this.subscribeReloadActiveStaleThread()), this.addUnsubscribeFunction(this.subscribeMarkThreadStale()), this.addUnsubscribeFunction(this.subscribeNewReplies()), this.addUnsubscribeFunction(this.subscribeRepliesRead()), this.addUnsubscribeFunction(this.subscribeRepliesUnread()), this.addUnsubscribeFunction(this.subscribeMessageDeleted()), this.addUnsubscribeFunction(this.subscribeMessageUpdated()));
    }, this.subscribeThreadUpdated = () => this.client.on("thread.updated", (n) => {
      if (!n.thread || n.thread.parent_message_id !== this.id) return;
      const r = n.thread;
      this.state.partialNext({
        title: r.title,
        updatedAt: new Date(r.updated_at),
        deletedAt: r.deleted_at ? new Date(r.deleted_at) : null,
        custom: lr(r)
      });
    }).unsubscribe, this.subscribeMarkActiveThreadRead = () => this.state.subscribeWithSelector((n) => ({
      active: n.active,
      unreadMessageCount: cr(this.client.userID)(n)
    }), ({ active: n, unreadMessageCount: r }) => {
      !n || !r || this.throttledMarkAsRead();
    }), this.subscribeReloadActiveStaleThread = () => this.state.subscribeWithSelector((n) => ({
      active: n.active,
      isStateStale: n.isStateStale
    }), ({ active: n, isStateStale: r }) => {
      n && r && this.reload();
    }), this.subscribeMarkThreadStale = () => this.client.on("user.watching.stop", (n) => {
      const { channel: r } = this.state.getLatestValue();
      !this.client.userID || this.client.userID !== n.user?.id || n.channel?.cid !== r.cid || this.state.partialNext({ isStateStale: !0 });
    }).unsubscribe, this.subscribeRepliesUnread = () => this.client.on("notification.mark_unread", (n) => {
      if (!n.user || !n.created_at || !n.thread_id || n.thread_id !== this.id) return;
      const r = n.user.id, a = n.created_at, o = n.user;
      this.state.next((l) => ({
        ...l,
        read: {
          ...l.read,
          [r]: {
            ...l.read[r],
            lastReadAt: typeof n.last_read_at < "u" ? new Date(n.last_read_at) : new Date(a),
            user: o,
            firstUnreadMessageId: n.first_unread_message_id,
            unreadMessageCount: n.unread_messages ?? 0
          }
        }
      }));
    }).unsubscribe, this.subscribeNewReplies = () => this.client.on("message.new", (n) => {
      if (!this.client.userID || n.message?.parent_id !== this.id) return;
      const r = n.message.user?.id === this.client.userID, { active: a, read: o } = this.state.getLatestValue();
      this.upsertReplyLocally({
        message: n.message,
        timestampChanged: r
      }), a && this.throttledMarkAsRead();
      const l = {};
      for (const c of Object.keys(o)) {
        const d = o[c];
        if (d) {
          let h = d;
          c === n.user?.id ? h = {
            ...h,
            lastReadAt: n.created_at ? new Date(n.created_at) : /* @__PURE__ */ new Date(),
            user: n.user,
            unreadMessageCount: 0
          } : a && c === this.client.userID || (h = {
            ...h,
            unreadMessageCount: d.unreadMessageCount + 1
          }), l[c] = h;
        }
      }
      this.state.partialNext({ read: l });
    }).unsubscribe, this.subscribeRepliesRead = () => this.client.on("message.read", (n) => {
      if (!n.user || !n.created_at || !n.thread || n.thread.parent_message_id !== this.id) return;
      const r = n.user.id, a = n.created_at, o = n.user;
      this.state.next((l) => ({
        ...l,
        read: {
          ...l.read,
          [r]: {
            lastReadAt: new Date(a),
            user: o,
            lastReadMessageId: n.last_read_message_id,
            unreadMessageCount: 0
          }
        }
      }));
    }).unsubscribe, this.subscribeMessageDeleted = () => this.client.on("message.deleted", (n) => {
      n.message && (n.message.parent_id === this.id && (n.hard_delete ? this.deleteReplyLocally({ message: n.message }) : this.upsertReplyLocally({ message: n.message })), n.message.id === this.id && this.updateParentMessageLocally({ message: n.message }));
    }).unsubscribe, this.subscribeMessageUpdated = () => {
      const n = [
        "message.updated",
        "reaction.new",
        "reaction.deleted",
        "reaction.updated"
      ].map((r) => this.client.on(r, (a) => {
        a.message && this.updateParentMessageOrReplyLocally(a.message);
      }).unsubscribe);
      return () => n.forEach((r) => r());
    }, this.unregisterSubscriptions = () => {
      const n = super.unregisterSubscriptions();
      return this.state.partialNext({ isStateStale: !0 }), n;
    }, this.deleteReplyLocally = ({ message: n }) => {
      const { replies: r } = this.state.getLatestValue(), a = Ca({
        needle: q(n),
        sortedArray: r,
        sortDirection: "ascending",
        selectValueToCompare: (l) => l.created_at.getTime(),
        selectKey: (l) => l.id
      });
      if (r[a]?.id !== n.id) return;
      const o = [...r];
      o.splice(a, 1), this.state.partialNext({ replies: o });
    }, this.upsertReplyLocally = ({ message: n, timestampChanged: r = !1 }) => {
      if (n.parent_id !== this.id) throw new Error("Reply does not belong to this thread");
      const a = q(n);
      n.status === "failed" ? this.failedRepliesMap.set(a.id, a) : this.failedRepliesMap.has(n.id) && this.failedRepliesMap.delete(n.id), this.state.next((o) => ({
        ...o,
        replies: Sa(o.replies, a, r)
      }));
    }, this.updateParentMessageLocally = ({ message: n }) => {
      if (n.id !== this.id) throw new Error("Message does not belong to this thread");
      this.state.next((r) => {
        const a = q(n);
        return {
          ...r,
          deletedAt: a.deleted_at,
          parentMessage: a,
          replyCount: n.reply_count ?? r.replyCount
        };
      });
    }, this.updateParentMessageOrReplyLocally = (n) => {
      n.parent_id === this.id && this.upsertReplyLocally({ message: n }), !n.parent_id && n.id === this.id && this.updateParentMessageLocally({ message: n });
    }, this.markAsRead = async ({ force: n = !1 } = {}) => this.ownUnreadCount === 0 && !n ? null : await this.client.messageDeliveryReporter.markRead(this), this.throttledMarkAsRead = sn(() => this.markAsRead(), uf, { trailing: !0 }), this.queryReplies = ({ limit: n = fi, sort: r = hf, ...a } = {}) => this.channel.getReplies(this.id, {
      limit: n,
      ...a
    }, r), this.loadNextPage = ({ limit: n = fi } = {}) => this.loadPage(n), this.loadPrevPage = ({ limit: n = fi } = {}) => this.loadPage(-n), this.loadPage = async (n) => {
      const { pagination: r } = this.state.getLatestValue(), [a, o, l] = n > 0 ? [
        "isLoadingNext",
        "nextCursor",
        "push"
      ] : [
        "isLoadingPrev",
        "prevCursor",
        "unshift"
      ];
      if (r[a] || r[o] === null) return;
      const c = { [n > 0 ? "id_gt" : "id_lt"]: r[o] }, d = Math.abs(n);
      this.state.partialNext({ pagination: {
        ...r,
        [a]: !0
      } });
      try {
        const h = await this.queryReplies({
          ...c,
          limit: d
        }), p = h.messages.map(q), u = p.at(n > 0 ? -1 : 0)?.id ?? null;
        this.state.next((m) => {
          let y = m.replies;
          return p.length > 0 && (y = [...m.replies], y[l](...p)), {
            ...m,
            replies: y,
            pagination: {
              ...m.pagination,
              [o]: h.messages.length < d ? null : u,
              [a]: !1
            }
          };
        });
      } catch (h) {
        this.client.logger("error", h.message), this.state.next((p) => ({
          ...p,
          pagination: {
            ...p.pagination,
            [a]: !1
          }
        }));
      }
    };
    const s = e.channel(t.channel.type, t.channel.id, { name: t.channel.name });
    s._hydrateMembers({
      members: t.channel.members ?? [],
      overrideCurrentState: !1
    });
    const i = e.userID ? [{
      user: { id: e.userID },
      unread_messages: 0,
      last_read: (/* @__PURE__ */ new Date()).toISOString()
    }] : [];
    this.state = new A({
      active: !1,
      isLoading: !1,
      isStateStale: !1,
      channel: s,
      createdAt: new Date(t.created_at),
      deletedAt: t.deleted_at ? new Date(t.deleted_at) : null,
      pagination: gf(t),
      parentMessage: q(t.parent_message),
      participants: t.thread_participants,
      read: pf(!t.read || t.read.length === 0 ? i : t.read),
      replies: t.latest_replies.map(q),
      replyCount: t.reply_count ?? 0,
      updatedAt: t.updated_at ? new Date(t.updated_at) : null,
      title: t.title,
      custom: lr(t)
    }), this.id = t.parent_message_id, this.client = e, this.messageComposer = new Ps({
      client: e,
      composition: t.draft,
      compositionContext: this
    });
  }
  get channel() {
    return this.state.getLatestValue().channel;
  }
  get hasStaleState() {
    return this.state.getLatestValue().isStateStale;
  }
  get ownUnreadCount() {
    return cr(this.client.userID)(this.state.getLatestValue());
  }
}, pf = (e) => e.reduce((t, s) => (t[s.user.id] = {
  user: s.user,
  lastReadMessageId: s.last_read_message_id,
  unreadMessageCount: s.unread_messages ?? 0,
  lastReadAt: new Date(s.last_read)
}, t), {}), gf = (e) => ({
  nextCursor: null,
  prevCursor: e.latest_replies.length === e.reply_count ? null : e.latest_replies.at(0)?.id ?? null,
  isLoadingNext: !1,
  isLoadingPrev: !1
}), cr = (e) => (t) => e && t.read[e]?.unreadMessageCount || 0, St = (e) => !!e?.message, mf = (e) => {
  let t = null, s = (/* @__PURE__ */ new Date()).getTime();
  return St(e) ? s = t = new Date(e.created_at).getTime() : e && Qd(e) && (s = new Date(e.updated_at).getTime()), { lastChange: {
    draftUpdate: t,
    stateUpdate: s
  } };
}, dr = (e) => {
  if (!e) return {
    draftId: null,
    id: Ps.generateId(),
    pollId: null,
    quotedMessage: null,
    showReplyInChannel: !1,
    editedMessage: null
  };
  const t = e.quoted_message, s = St(e) ? null : q(e);
  let i, n = null, r = Ps.generateId();
  return St(e) ? (i = e.message, n = e.message.id) : (i = e, r = e.id), {
    draftId: n,
    id: r,
    pollId: i.poll_id ?? null,
    quotedMessage: t ? q(t) : null,
    showReplyInChannel: !1,
    editedMessage: s
  };
}, eo = class Jt extends ye {
  constructor({ composition: t, config: s, compositionContext: i, client: n }) {
    if (super(), this.snapshots = [], this.setEditedMessage = (o) => {
      this.state.partialNext({ editedMessage: o ?? null }), o && this.textComposer.clearCommand();
    }, this.getCommandDisabledReason = (o) => {
      if (this.editedMessage) return "editing";
      if (this.quotedMessage && (o.set === "moderation_set" || o.name === "moderation_set")) return "quoted_message";
    }, this.isCommandDisabled = (o) => !!this.getCommandDisabledReason(o), this.validateCommandSendability = (o, l = this.textComposer.text) => {
      const c = this.textComposer.mentionedUsers, d = Ga(l, c), h = {
        command: o,
        commandArgsText: o.name ? Xh(l, o.name).trim() : l.trim(),
        composer: this,
        mentionedUsersInText: d,
        rawText: l
      }, p = this.config.commands.sendValidator(h);
      return p && !p.ready ? p : {
        command: o,
        ready: !0
      };
    }, this.refreshId = () => {
      this.state.partialNext({ id: Jt.generateId() });
    }, this.initState = ({ composition: o } = {}) => {
      this.clearSnapshots(), this.editingAuditState.partialNext(this.initEditingAuditState(o));
      const l = typeof o > "u" ? o : St(o) ? o.message : q(o);
      this.attachmentManager.initState({ message: l }), this.linkPreviewsManager.initState({ message: l }), this.locationComposer.initState({ message: l }), this.textComposer.initState({ message: l }), this.pollComposer.initState(), this.customDataManager.initState({ message: l }), this.state.next(dr(o));
    }, this.initStateFromChannelResponse = (o) => {
      this.channel.cid === o.channel.cid && (o.draft ? this.initState({ composition: o.draft }) : this.state.getLatestValue().draftId && (this.clear(), this.client.offlineDb?.executeQuerySafely((l) => l.deleteDraft({
        cid: this.channel.cid,
        parent_id: void 0
      }), { method: "deleteDraft" })));
    }, this.initEditingAuditState = (o) => mf(o), this.clearSnapshots = () => {
      this.snapshots = [];
    }, this.getSnapshot = () => ({
      attachmentManager: this.attachmentManager.getSnapshot(),
      customDataManager: this.customDataManager.getSnapshot(),
      linkPreviewsManager: this.linkPreviewsManager.getSnapshot(),
      locationComposer: this.locationComposer.getSnapshot(),
      pollComposer: this.pollComposer.getSnapshot(),
      textComposer: this.textComposer.getSnapshot()
    }), this.restoreSnapshot = (o) => {
      this.attachmentManager.restoreSnapshot(o.attachmentManager), this.linkPreviewsManager.restoreSnapshot(o.linkPreviewsManager), this.locationComposer.restoreSnapshot(o.locationComposer), this.pollComposer.restoreSnapshot(o.pollComposer), this.customDataManager.restoreSnapshot(o.customDataManager), this.textComposer.restoreSnapshot(o.textComposer);
    }, this.captureSnapshot = (o = this.getSnapshot()) => {
      this.snapshots.length || this.snapshots.push(o);
    }, this.popSnapshot = () => this.snapshots.pop(), this.registerEffectHandler = (o, l) => {
      this.effectHandlers.registerEffectHandler(o, l);
    }, this.applyEffects = (o = []) => {
      this.effectHandlers.applyEffects(o);
    }, this.registerDraftEventSubscriptions = () => {
      const o = this.subscribeDraftUpdated(), l = this.subscribeDraftDeleted();
      return () => {
        o(), l();
      };
    }, this.registerSubscriptions = () => (this.hasSubscriptions || (this.addUnsubscribeFunction(this.subscribeMessageComposerSetupStateChange()), this.addUnsubscribeFunction(this.subscribeMessageUpdated()), this.addUnsubscribeFunction(this.subscribeMessageDeleted()), this.addUnsubscribeFunction(this.subscribeTextComposerStateChanged()), this.addUnsubscribeFunction(this.subscribeAttachmentManagerStateChanged()), this.addUnsubscribeFunction(this.subscribeLinkPreviewsManagerStateChanged()), this.addUnsubscribeFunction(this.subscribeLocationComposerStateChanged()), this.addUnsubscribeFunction(this.subscribePollComposerStateChanged()), this.addUnsubscribeFunction(this.subscribeCustomDataManagerStateChanged()), this.addUnsubscribeFunction(this.subscribeMessageComposerStateChanged()), this.addUnsubscribeFunction(this.subscribeMessageComposerConfigStateChanged())), this.incrementRefCount(), () => this.unregisterSubscriptions()), this.subscribeMessageUpdated = () => {
      const o = [
        "message.updated",
        "reaction.new",
        "reaction.deleted",
        "reaction.updated"
      ].map((l) => this.client.on(l, (c) => {
        c.message && (c.message.id === this.id && this.initState({ composition: c.message }), this.quotedMessage?.id && c.message.id === this.quotedMessage.id && this.setQuotedMessage(q(c.message)));
      }).unsubscribe);
      return () => o.forEach((l) => l());
    }, this.subscribeMessageComposerSetupStateChange = () => {
      let o = null;
      const l = this.client._messageComposerSetupState.subscribeWithSelector(({ setupFunction: c }) => ({ setup: c }), ({ setup: c }) => {
        o?.(), o = c?.({ composer: this }) ?? null;
      });
      return () => {
        o?.(), l();
      };
    }, this.subscribeMessageDeleted = () => this.client.on("message.deleted", (o) => {
      o.message && (o.message.id === this.id ? this.clear() : this.quotedMessage && o.message.id === this.quotedMessage.id && this.setQuotedMessage(null));
    }).unsubscribe, this.subscribeDraftUpdated = () => this.client.on("draft.updated", (o) => {
      const l = o.draft;
      !l || (l.parent_id ?? null) !== (this.threadId ?? null) || l.channel_cid !== this.channel.cid || this.editedMessage || this.initState({ composition: l });
    }).unsubscribe, this.subscribeDraftDeleted = () => this.client.on("draft.deleted", (o) => {
      const l = o.draft;
      !l || (l.parent_id ?? null) !== (this.threadId ?? null) || l.channel_cid !== this.channel.cid || this.editedMessage || (this.logDraftUpdateTimestamp(), !this.compositionIsEmpty && this.clear());
    }).unsubscribe, this.subscribeTextComposerStateChanged = () => this.textComposer.state.subscribeWithSelector(({ text: o }) => [o], ([o], l) => {
      if (!(typeof l > "u")) {
        if (this.logStateUpdateTimestamp(), this.compositionIsEmpty) {
          this.deleteDraft();
          return;
        }
        this.linkPreviewsManager.enabled && (o ? this.linkPreviewsManager.findAndEnrichUrls(o) : this.linkPreviewsManager.clearPreviews());
      }
    }), this.subscribeAttachmentManagerStateChanged = () => this.attachmentManager.state.subscribe((o, l) => {
      if (!(typeof l > "u") && (this.logStateUpdateTimestamp(), this.compositionIsEmpty)) {
        this.deleteDraft();
        return;
      }
    }), this.subscribeLocationComposerStateChanged = () => this.locationComposer.state.subscribe((o, l) => {
      if (!(typeof l > "u") && (this.logStateUpdateTimestamp(), this.compositionIsEmpty)) {
        this.deleteDraft();
        return;
      }
    }), this.subscribeLinkPreviewsManagerStateChanged = () => this.linkPreviewsManager.state.subscribe((o, l) => {
      if (!(typeof l > "u") && (this.logStateUpdateTimestamp(), this.compositionIsEmpty)) {
        this.deleteDraft();
        return;
      }
    }), this.subscribePollComposerStateChanged = () => this.pollComposer.state.subscribe((o, l) => {
      if (!(typeof l > "u") && (this.logStateUpdateTimestamp(), this.compositionIsEmpty)) {
        this.deleteDraft();
        return;
      }
    }), this.subscribeCustomDataManagerStateChanged = () => this.customDataManager.state.subscribe((o, l) => {
      typeof l < "u" && !this.customDataManager.isMessageDataEqual(o, l) && this.logStateUpdateTimestamp();
    }), this.subscribeMessageComposerStateChanged = () => this.state.subscribe((o, l) => {
      typeof l > "u" || (this.logStateUpdateTimestamp(), this.compositionIsEmpty && this.deleteDraft());
    }), this.subscribeMessageComposerConfigStateChanged = () => {
      let o;
      const l = this.configState.subscribeWithSelector((c) => ({
        textDefaultValue: c.text.defaultValue,
        draftsEnabled: c.drafts.enabled
      }), ({ textDefaultValue: c, draftsEnabled: d }) => {
        this.textComposer.text === "" && c && this.textComposer.insertText({
          text: c,
          selection: {
            start: 0,
            end: 0
          }
        }), d && !o ? o = this.registerDraftEventSubscriptions() : !d && o && (o(), o = null);
      });
      return () => {
        o?.(), l();
      };
    }, this.setQuotedMessage = (o) => {
      this.state.partialNext({ quotedMessage: o });
      const l = this.textComposer.command;
      o && l && this.isCommandDisabled(l) && this.textComposer.clearCommand();
    }, this.toggleShowReplyInChannel = () => {
      this.state.partialNext({ showReplyInChannel: !this.showReplyInChannel });
    }, this.clear = () => {
      this.setQuotedMessage(null), this.initState();
    }, this.restore = () => {
      const { editedMessage: o } = this;
      if (o) {
        this.initState({ composition: o });
        return;
      }
      this.clear();
    }, this.compose = async () => {
      const o = this.editedMessage?.created_at ?? /* @__PURE__ */ new Date(), l = await this.compositionMiddlewareExecutor.execute({
        eventName: "compose",
        initialValue: {
          message: {
            id: this.id,
            parent_id: this.threadId ?? void 0,
            type: "regular"
          },
          localMessage: {
            attachments: [],
            created_at: o,
            deleted_at: null,
            error: void 0,
            id: this.id,
            mentioned_users: [],
            parent_id: this.threadId ?? void 0,
            pinned_at: this.editedMessage?.pinned_at || null,
            reaction_groups: null,
            status: this.editedMessage ? this.editedMessage.status : "sending",
            text: "",
            type: "regular",
            updated_at: o
          },
          sendOptions: {}
        }
      });
      if (l.status !== "discard")
        return l.state;
    }, this.composeDraft = async () => {
      const { state: o, status: l } = await this.draftCompositionMiddlewareExecutor.execute({
        eventName: "compose",
        initialValue: { draft: {
          id: this.id,
          parent_id: this.threadId ?? void 0,
          text: ""
        } }
      });
      if (l !== "discard")
        return o;
    }, this.createDraft = async () => {
      if (this.editedMessage || !this.config.drafts.enabled) return;
      const o = await this.composeDraft();
      if (!o) return;
      const { draft: l } = o;
      if (this.state.partialNext({ draftId: l.id }), this.client.offlineDb) try {
        const c = {
          channel_cid: this.channel.cid,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          message: l,
          parent_id: l.parent_id,
          quoted_message: this.quotedMessage ? Nd(this.quotedMessage) : void 0
        };
        await this.client.offlineDb.upsertDraft({ draft: c });
      } catch (c) {
        this.client.logger("error", "offlineDb:upsertDraft", {
          tags: ["channel", "offlineDb"],
          error: c
        });
      }
      this.logDraftUpdateTimestamp(), await this.channel.createDraft(l);
    }, this.deleteDraft = async () => {
      if (this.editedMessage || !this.config.drafts.enabled || !this.draftId) return;
      this.state.partialNext({ draftId: null });
      const o = this.threadId ?? void 0;
      if (this.client.offlineDb) try {
        await this.client.offlineDb.deleteDraft({
          cid: this.channel.cid,
          parent_id: o
        });
      } catch (l) {
        this.client.logger("error", "offlineDb:deleteDraft", {
          tags: ["channel", "offlineDb"],
          error: l
        });
      }
      this.logDraftUpdateTimestamp(), await this.channel.deleteDraft({ parent_id: o });
    }, this.getDraft = async () => {
      if (this.editedMessage || !this.config.drafts.enabled || !this.client.userID) return;
      const o = await this.client.offlineDb?.getDraft({
        cid: this.channel.cid,
        userId: this.client.userID,
        parent_id: this.threadId ?? void 0
      });
      o && this.initState({ composition: o });
      try {
        const { draft: l } = await this.channel.getDraft({ parent_id: this.threadId ?? void 0 });
        if (!l) return;
        this.client.offlineDb?.executeQuerySafely((c) => c.upsertDraft({ draft: l }), { method: "upsertDraft" }), this.initState({ composition: l });
      } catch (l) {
        this.client.logger("error", "messageComposer:getDraft", {
          tags: ["channel", "messageComposer"],
          error: l
        });
      }
    }, this.createPoll = async () => {
      const o = await this.pollComposer.compose();
      if (!(!o || !o.data.id))
        try {
          const l = await this.client.polls.createPoll(o.data);
          this.state.partialNext({ pollId: l?.id });
        } catch (l) {
          throw this.client.notifications.addError({
            message: "Failed to create the poll",
            origin: {
              emitter: "MessageComposer",
              context: { composer: this }
            },
            options: {
              type: "api:poll:create:failed",
              metadata: { reason: l.message },
              originalError: l instanceof Error ? l : void 0
            }
          }), l;
        }
    }, this.sendLocation = async () => {
      const o = this.locationComposer.validLocation;
      if (!(this.threadId || !o))
        try {
          await this.channel.sendSharedLocation(o), this.refreshId(), this.locationComposer.initState();
        } catch (l) {
          throw this.client.notifications.addError({
            message: "Failed to share the location",
            origin: {
              emitter: "MessageComposer",
              context: { composer: this }
            },
            options: {
              type: "api:location:create:failed",
              metadata: { reason: l.message },
              originalError: l instanceof Error ? l : void 0
            }
          }), l;
        }
    }, this.compositionContext = i, i instanceof De) this.channel = i;
    else if (i instanceof ze) this.channel = i.channel;
    else if (i.cid) {
      const [o, l] = i.cid.split(":");
      this.channel = n.channel(o, l);
    } else throw new Error("MessageComposer requires composition context pointing to channel (channel or context.cid)");
    const r = (o, l, c) => typeof o == "object" ? void 0 : o === !1 && c === "enabled" ? !1 : [
      "string",
      "number",
      "bigint",
      "boolean",
      "symbol"
    ].includes(typeof l) ? l : o;
    this.configState = new A(nr(We(We(ef, s ?? {}), { location: { enabled: this.channel.getConfig()?.shared_locations } }, r), s));
    let a;
    St(t) ? a = t.message : t && (a = q(t)), this.attachmentManager = new Uh({
      composer: this,
      message: a
    }), this.linkPreviewsManager = new cn({
      composer: this,
      message: a
    }), this.locationComposer = new rf({
      composer: this,
      message: a
    }), this.textComposer = new Fh({
      composer: this,
      message: a
    }), this.pollComposer = new df({ composer: this }), this.customDataManager = new tf({
      composer: this,
      message: a
    }), this.editingAuditState = new A(this.initEditingAuditState(t)), this.state = new A(dr(t)), this.compositionMiddlewareExecutor = new wu({ composer: this }), this.draftCompositionMiddlewareExecutor = new bu({ composer: this }), this.effectHandlers = new lf({ composer: this });
  }
  static evaluateContextType(t) {
    return t instanceof De ? "channel" : t instanceof ze ? "thread" : typeof t.legacyThreadId == "string" ? "legacy_thread" : "message";
  }
  static constructTag(t) {
    return `${this.evaluateContextType(t)}_${t.id}`;
  }
  get config() {
    return this.configState.getLatestValue();
  }
  get editedMessage() {
    return this.state.getLatestValue().editedMessage ?? void 0;
  }
  set editedMessage(t) {
    this.state.partialNext({ editedMessage: t ?? null });
  }
  get contextType() {
    return Jt.evaluateContextType(this.compositionContext);
  }
  get tag() {
    return Jt.constructTag(this.compositionContext);
  }
  get threadId() {
    return this.compositionContext instanceof De ? null : this.compositionContext instanceof ze ? this.compositionContext.id : typeof this.compositionContext.legacyThreadId == "string" ? this.compositionContext.legacyThreadId : typeof this.compositionContext.parent_id == "string" ? this.compositionContext.parent_id : null;
  }
  get client() {
    return this.channel.getClient();
  }
  get id() {
    return this.state.getLatestValue().id;
  }
  get draftId() {
    return this.state.getLatestValue().draftId;
  }
  get lastChange() {
    return this.editingAuditState.getLatestValue().lastChange;
  }
  get quotedMessage() {
    return this.state.getLatestValue().quotedMessage;
  }
  get pollId() {
    return this.state.getLatestValue().pollId;
  }
  get showReplyInChannel() {
    return this.state.getLatestValue().showReplyInChannel;
  }
  get isCommandSendable() {
    const t = this.textComposer.command;
    return !t || this.validateCommandSendability(t).ready;
  }
  get allowsPendingUploads() {
    return this.compositionMiddlewareExecutor.installedMiddleware.some((t) => t.allowsPendingUploads);
  }
  get hasSendableData() {
    if (!this.isCommandSendable) return !1;
    if (this.allowsPendingUploads) {
      const t = this.attachmentManager.attachments.some((s) => ih(s) || sh(s));
      return !!(!this.textComposer.textIsEmpty || t || this.pollId || this.locationComposer.validLocation);
    }
    return !!(!this.attachmentManager.uploadsInProgressCount && (!this.textComposer.textIsEmpty || this.attachmentManager.successfulUploadsCount > 0) || this.pollId || this.locationComposer.validLocation);
  }
  get compositionIsEmpty() {
    return !this.quotedMessage && this.contentIsEmpty;
  }
  get contentIsEmpty() {
    return this.textComposer.textIsEmpty && !this.attachmentManager.attachments.length && !this.pollId && !this.locationComposer.validLocation;
  }
  get lastChangeOriginIsLocal() {
    const t = this.lastChange.draftUpdate === null && !this.editedMessage, s = !!this.editedMessage?.updated_at && new Date(this.editedMessage.updated_at).getTime() < this.lastChange.stateUpdate, i = !!this.lastChange.draftUpdate && this.lastChange.draftUpdate < this.lastChange.stateUpdate;
    return s || i || t;
  }
  updateConfig(t) {
    this.configState.partialNext(nr(We(this.config, t), t));
  }
  logStateUpdateTimestamp() {
    this.editingAuditState.partialNext({ lastChange: {
      ...this.lastChange,
      stateUpdate: (/* @__PURE__ */ new Date()).getTime()
    } });
  }
  logDraftUpdateTimestamp() {
    if (!this.config.drafts.enabled) return;
    const t = (/* @__PURE__ */ new Date()).getTime();
    this.editingAuditState.partialNext({ lastChange: {
      draftUpdate: t,
      stateUpdate: t
    } });
  }
};
eo.generateId = $;
var Ps = eo, hr = 100, ur = 1e3, yf = 1e3, _f = 3, qt = (e) => e instanceof De, Vt = (e) => e instanceof ze, wf = class to {
  constructor({ client: t }) {
    this.deliveryReportCandidates = /* @__PURE__ */ new Map(), this.nextDeliveryReportCandidates = /* @__PURE__ */ new Map(), this.markDeliveredRequestPromise = null, this.markDeliveredTimeout = null, this.requestTimeoutMs = ur, this.requestRetryCount = 0, this.getNextDeliveryReportCandidate = (s) => {
      const i = this.client.user?.id;
      if (!i) return;
      let n = [], r, a, o;
      if (qt(s)) {
        n = s.state.latestMessages;
        const c = s.state.read[i] ?? {};
        a = c?.last_read, r = c?.last_delivered_at, o = s.cid;
      } else if (Vt(s)) {
        n = s.state.getLatestValue().replies;
        const c = s.state.getLatestValue().read[i] ?? {};
        a = c?.lastReadAt, r = c?.lastDeliveredAt, o = `${s.channel.cid}:${s.id}`;
        return;
      } else return;
      if (!o) return;
      const [l] = n.slice(-1);
      return !l || a >= l.created_at ? {
        key: o,
        id: null
      } : !l || (r ?? 0) >= l.created_at ? {
        key: o,
        id: null
      } : {
        key: o,
        id: l.id || null
      };
    }, this.announceDelivery = (s) => {
      if (!this.canExecuteRequest) return;
      const { latest_delivered_messages: i, sendBuffer: n } = this.confirmationsFromDeliveryReportCandidates();
      if (!i.length) return;
      const r = {
        ...s,
        latest_delivered_messages: i
      }, a = ({ preventSchedulingRetry: c } = {}) => {
        this.markDeliveredRequestPromise = null;
        for (const [d, h] of this.nextDeliveryReportCandidates.entries()) this.deliveryReportCandidates.set(d, h);
        this.nextDeliveryReportCandidates = /* @__PURE__ */ new Map(), !c && this.announceDeliveryBuffered(s);
      }, o = () => {
        this.resetBackOff(), a();
      }, l = (c) => {
        const d = new Map(n);
        for (const [h, p] of this.deliveryReportCandidates.entries()) d.set(h, p);
        this.deliveryReportCandidates = d, zs(c) && Ct(c) || c.status >= 500 ? (this.increaseBackOff(), a()) : a({ preventSchedulingRetry: !0 });
      };
      this.markDeliveredRequestPromise = this.client.markChannelsDelivered(r).then(o, l);
    }, this.announceDeliveryBuffered = (s) => {
      this.hasTimer || !this.canExecuteRequest || (this.markDeliveredTimeout = setTimeout(() => {
        this.markDeliveredTimeout = null, this.announceDelivery(s);
      }, this.requestTimeoutMs));
    }, this.markRead = async (s, i) => {
      let n = null;
      return qt(s) ? n = await s.markAsReadRequest(i) : Vt(s) && (n = await s.channel.markAsReadRequest({
        ...i,
        thread_id: s.id
      })), n && this.removeCandidateFor(s), n;
    }, this.throttledMarkRead = sn(this.markRead, yf, {
      leading: !1,
      trailing: !0
    }), this.client = t;
  }
  get markDeliveredRequestInFlight() {
    return this.markDeliveredRequestPromise !== null;
  }
  get hasTimer() {
    return this.markDeliveredTimeout !== null;
  }
  get hasDeliveryCandidates() {
    return this.deliveryReportCandidates.size > 0;
  }
  get canExecuteRequest() {
    return !this.markDeliveredRequestInFlight && this.hasDeliveryCandidates;
  }
  static hasPermissionToReportDeliveryFor(t) {
    if (qt(t)) return !!t.getConfig()?.delivery_events;
    if (Vt(t)) return !!t.channel.getConfig()?.delivery_events;
  }
  increaseBackOff() {
    this.requestRetryCount >= _f || (this.requestRetryCount = this.requestRetryCount + 1, this.requestTimeoutMs = this.requestTimeoutMs * 2);
  }
  resetBackOff() {
    this.requestTimeoutMs = ur, this.requestRetryCount = 0;
  }
  confirmationsFrom(t) {
    return Array.from(t.entries()).map(([s, i]) => {
      const [n, r, a] = s.split(":");
      return a ? {
        cid: `${n}:${r}`,
        id: i,
        parent_id: a
      } : {
        cid: s,
        id: i
      };
    });
  }
  confirmationsFromDeliveryReportCandidates() {
    const t = Array.from(this.deliveryReportCandidates), s = new Map(t.slice(0, hr));
    return this.deliveryReportCandidates = new Map(t.slice(hr)), {
      latest_delivered_messages: this.confirmationsFrom(s),
      sendBuffer: s
    };
  }
  candidateKeyFor(t) {
    if (qt(t)) return t.cid;
    if (Vt(t)) return `${t.channel.cid}:${t.id}`;
  }
  trackDeliveredCandidate(t) {
    if (!to.hasPermissionToReportDeliveryFor(t)) return;
    const s = this.getNextDeliveryReportCandidate(t);
    if (!s?.key) return;
    const i = this.markDeliveredRequestInFlight ? this.nextDeliveryReportCandidates : this.deliveryReportCandidates;
    s.id === null ? i.delete(s.key) : i.set(s.key, s.id);
  }
  removeCandidateFor(t) {
    const s = this.candidateKeyFor(t);
    s && (this.deliveryReportCandidates.delete(s), this.nextDeliveryReportCandidates.delete(s));
  }
  syncDeliveredCandidates(t) {
    if (this.client.user?.privacy_settings?.delivery_receipts?.enabled !== !1) {
      for (const s of t) this.trackDeliveredCandidate(s);
      this.announceDeliveryBuffered();
    }
  }
}, Se = {
  timestampMs: Number.NEGATIVE_INFINITY,
  msgId: ""
}, j = (e, t) => e.timestampMs !== t.timestampMs ? e.timestampMs - t.timestampMs : 0, ue = (e, t, s) => {
  let i = 0, n = e.length;
  for (; i < n; ) {
    const r = i + n >>> 1;
    j(s(e[r]), t) >= 0 ? n = r : i = r + 1;
  }
  return i;
}, Ni = (e, t, s) => {
  let i = 0, n = e.length;
  for (; i < n; ) {
    const r = i + n >>> 1;
    j(s(e[r]), t) > 0 ? n = r : i = r + 1;
  }
  return i;
}, Re = (e, t, s) => e.splice(Ni(e, s(t), s), 0, t), at = (e, t, s, i) => {
  let n = ue(e, s, i);
  for (; n < e.length && j(i(e[n]), s) === 0; ) {
    if (e[n].user.id === t.user.id) {
      e.splice(n, 1);
      return;
    }
    n++;
  }
}, bf = class {
  constructor({ locateMessage: e }) {
    this.byUser = /* @__PURE__ */ new Map(), this.readSorted = [], this.deliveredSorted = [], this.locateMessage = e;
  }
  ingestInitial(e) {
    this.byUser.clear(), this.readSorted = [], this.deliveredSorted = [];
    for (const t of e) {
      const s = t.last_read ? new Date(t.last_read).getTime() : null, i = t.last_delivered_at ? new Date(t.last_delivered_at).getTime() : null, n = s ? this.locateMessage(s) ?? Se : Se;
      let r = i ? this.locateMessage(i) ?? Se : Se;
      j(r, n) < 0 && (r = n);
      const a = {
        user: t.user,
        lastReadRef: n,
        lastDeliveredRef: r
      };
      this.byUser.set(t.user.id, a), this.readSorted.splice(ue(this.readSorted, n, (o) => o.lastReadRef), 0, a), this.deliveredSorted.splice(ue(this.deliveredSorted, r, (o) => o.lastDeliveredRef), 0, a);
    }
  }
  onMessageDelivered({ user: e, deliveredAt: t, lastDeliveredMessageId: s }) {
    const i = new Date(t).getTime(), n = s ? {
      timestampMs: i,
      msgId: s
    } : this.locateMessage(new Date(t).getTime());
    if (!n) return;
    const r = this.ensureUser(e), a = j(n, r.lastReadRef) < 0 ? r.lastReadRef : n;
    j(a, r.lastDeliveredRef) <= 0 || (at(this.deliveredSorted, r, r.lastDeliveredRef, (o) => o.lastDeliveredRef), r.lastDeliveredRef = a, Re(this.deliveredSorted, r, (o) => o.lastDeliveredRef));
  }
  onMessageRead({ user: e, readAt: t, lastReadMessageId: s }) {
    const i = new Date(t).getTime(), n = s ? {
      timestampMs: i,
      msgId: s
    } : this.locateMessage(i);
    if (!n) return;
    const r = this.ensureUser(e);
    j(n, r.lastReadRef) <= 0 || (at(this.readSorted, r, r.lastReadRef, (a) => a.lastReadRef), r.lastReadRef = n, Re(this.readSorted, r, (a) => a.lastReadRef), j(r.lastDeliveredRef, r.lastReadRef) < 0 && (at(this.deliveredSorted, r, r.lastDeliveredRef, (a) => a.lastDeliveredRef), r.lastDeliveredRef = r.lastReadRef, Re(this.deliveredSorted, r, (a) => a.lastDeliveredRef)));
  }
  onNotificationMarkUnread({ user: e, lastReadAt: t, lastReadMessageId: s }) {
    const i = this.ensureUser(e), n = t ? {
      timestampMs: new Date(t).getTime(),
      msgId: s ?? ""
    } : { ...Se };
    j(n, i.lastReadRef) === 0 && n.msgId === i.lastReadRef.msgId || (at(this.readSorted, i, i.lastReadRef, (r) => r.lastReadRef), i.lastReadRef = n, Re(this.readSorted, i, (r) => r.lastReadRef), j(i.lastDeliveredRef, i.lastReadRef) < 0 && (at(this.deliveredSorted, i, i.lastDeliveredRef, (r) => r.lastDeliveredRef), i.lastDeliveredRef = i.lastReadRef, Re(this.deliveredSorted, i, (r) => r.lastDeliveredRef)));
  }
  readersForMessage(e) {
    const t = ue(this.readSorted, e, ({ lastReadRef: s }) => s);
    return this.readSorted.slice(t).map((s) => s.user);
  }
  deliveredForMessage(e) {
    const t = ue(this.deliveredSorted, e, ({ lastDeliveredRef: s }) => s);
    return this.deliveredSorted.slice(t).map((s) => s.user);
  }
  deliveredNotReadForMessage(e) {
    const t = ue(this.deliveredSorted, e, ({ lastDeliveredRef: i }) => i), s = [];
    for (let i = t; i < this.deliveredSorted.length; i++) {
      const n = this.deliveredSorted[i];
      j(n.lastReadRef, e) < 0 && s.push(n.user);
    }
    return s;
  }
  usersWhoseLastReadIs(e) {
    if (!e.msgId) return [];
    const t = ue(this.readSorted, e, (n) => n.lastReadRef), s = Ni(this.readSorted, e, (n) => n.lastReadRef), i = [];
    for (let n = t; n < s; n++) {
      const r = this.readSorted[n];
      r.lastReadRef.msgId === e.msgId && i.push(r.user);
    }
    return i;
  }
  usersWhoseLastDeliveredIs(e) {
    if (!e.msgId) return [];
    const t = ue(this.deliveredSorted, e, (n) => n.lastDeliveredRef), s = Ni(this.deliveredSorted, e, (n) => n.lastDeliveredRef), i = [];
    for (let n = t; n < s; n++) {
      const r = this.deliveredSorted[n];
      r.lastDeliveredRef.msgId === e.msgId && i.push(r.user);
    }
    return i;
  }
  hasUserRead(e, t) {
    const s = this.byUser.get(t);
    return !!s && j(s.lastReadRef, e) >= 0;
  }
  hasUserDelivered(e, t) {
    const s = this.byUser.get(t);
    return !!s && j(s.lastDeliveredRef, e) >= 0;
  }
  getUserProgress(e) {
    const t = this.byUser.get(e);
    return t || null;
  }
  groupUsersByLastReadMessage() {
    return Array.from(this.byUser.values()).reduce((e, t) => {
      const s = t.lastReadRef.msgId;
      return s && (e[s] || (e[s] = []), e[s].push(t.user)), e;
    }, {});
  }
  groupUsersByLastDeliveredMessage() {
    return Array.from(this.byUser.values()).reduce((e, t) => {
      const s = t.lastDeliveredRef.msgId;
      return s && (e[s] || (e[s] = []), e[s].push(t.user)), e;
    }, {});
  }
  ensureUser(e) {
    let t = this.byUser.get(e.id);
    return t || (t = {
      user: e,
      lastReadRef: Se,
      lastDeliveredRef: Se
    }, this.byUser.set(e.id, t), Re(this.readSorted, t, (s) => s.lastReadRef), Re(this.deliveredSorted, t, (s) => s.lastDeliveredRef)), t;
  }
}, De = class {
  constructor(e, t, s, i) {
    this.create = async (a) => {
      const o = {
        ...a,
        watch: !1,
        state: !1,
        presence: !1
      };
      return await this.query(o, "latest");
    }, this._callChannelListeners = (a) => {
      const o = [...this.listeners.all ?? [], ...this.listeners[a.type] ?? []], { logger: l } = this._client;
      for (const c of o)
        typeof c != "string" && ya(c, a, l);
    }, this._channelURL = () => {
      if (!this.id) throw new Error("channel id is not defined");
      return `${this.getClient().baseURL}/channels/${encodeURIComponent(this.type)}/${encodeURIComponent(this.id)}`;
    };
    const n = /^[\w_-]+$/, r = /^[\w!_-]+$/;
    if (!n.test(t)) throw new Error(`Invalid chat type ${t}, letters, numbers and "_-" are allowed`);
    if (typeof s == "string" && !r.test(s)) throw new Error(`Invalid chat id ${s}, letters, numbers and "!-_" are allowed`);
    this._client = e, this.type = t, this.id = s, this.data = i, this._data = { ...i }, this.cid = `${t}:${s}`, this.listeners = {}, this.state = new Jd(this), this.initialized = !1, this.offlineMode = !1, this.lastTypingEvent = null, this.isTyping = !1, this.disconnected = !1, this.messageComposer = new Ps({
      client: this._client,
      compositionContext: this
    }), this.messageReceiptsTracker = new bf({ locateMessage: (a) => {
      const o = this.state.findMessageByTimestamp(a);
      return o && {
        timestampMs: a,
        msgId: o.id
      };
    } }), this.cooldownTimer = new Zd({ channel: this });
  }
  getClient() {
    if (this.disconnected === !0) throw Error("You can't use a channel after client.disconnect() was called");
    return this._client;
  }
  getConfig() {
    return this.getClient().configs[this.cid];
  }
  async _sendMessage(e, t) {
    const s = this.getClient(), i = ba({
      client: s,
      message: e
    });
    return await s.post(this._channelURL() + "/message", {
      message: i,
      ...t
    });
  }
  async sendMessage(e, t) {
    try {
      const s = this.getClient().offlineDb;
      if (s) {
        const i = e.id;
        if (i) return await s.queueTask({ task: {
          channelId: this.id,
          channelType: this.type,
          messageId: i,
          payload: [e, t],
          type: "send-message"
        } });
      }
    } catch (s) {
      this._client.logger("error", "offlineDb:send-message", {
        tags: ["channel", "offlineDb"],
        error: s
      });
    }
    return await this._sendMessage(e, t);
  }
  sendFile(e, t, s, i, n) {
    return this.getClient().sendFile(`${this._channelURL()}/file`, e, t, s, i, n);
  }
  sendImage(e, t, s, i, n) {
    return this.getClient().sendFile(`${this._channelURL()}/image`, e, t, s, i, n);
  }
  deleteFile(e) {
    return this.getClient().delete(`${this._channelURL()}/file`, { url: e });
  }
  deleteImage(e) {
    return this.getClient().delete(`${this._channelURL()}/image`, { url: e });
  }
  async sendEvent(e) {
    return this._checkInitialized(), await this.getClient().post(this._channelURL() + "/event", { event: e });
  }
  async search(e, t = {}) {
    if (t.offset && t.next) throw Error("Cannot specify offset with next");
    const s = {
      filter_conditions: { cid: this.cid },
      ...t,
      sort: t.sort ? O(t.sort) : void 0
    };
    if (typeof e == "string") s.query = e;
    else if (typeof e == "object") s.message_filter_conditions = e;
    else throw Error(`Invalid type ${typeof e} for query parameter`);
    return await this.getClient().wsPromise, await this.getClient().get(this.getClient().baseURL + "/search", { payload: s });
  }
  async queryMembers(e, t = [], s = {}, i = {}) {
    let n;
    const r = this.type;
    let a;
    return this.id ? n = this.id : this.data?.members && Array.isArray(this.data.members) && (a = this.data.members), await this.getClient().get(this.getClient().baseURL + "/members", { payload: {
      type: r,
      id: n,
      members: a,
      sort: O(t),
      filter_conditions: e,
      ...s
    } }, i);
  }
  async updateMemberPartial(e, t) {
    const s = new URL(`${this._channelURL()}/member`);
    return t?.userId && s.searchParams.append("user_id", t.userId), await this.getClient().patch(s.toString(), e);
  }
  async partialUpdateMember(e, t) {
    if (!e) throw Error("Please specify the user id");
    return await this.getClient().patch(this._channelURL() + `/member/${encodeURIComponent(e)}`, t);
  }
  async sendReaction(e, t, s) {
    if (!e) throw Error("Message id is missing");
    if (!t || Object.keys(t).length === 0) throw Error("Reaction object is missing");
    try {
      const i = this.getClient().offlineDb;
      if (i) return await i.queueTask({ task: {
        channelId: this.id,
        channelType: this.type,
        messageId: e,
        payload: [
          e,
          t,
          s
        ],
        type: "send-reaction"
      } });
    } catch (i) {
      this._client.logger("error", "offlineDb:send-reaction", {
        tags: ["channel", "offlineDb"],
        error: i
      });
    }
    return this._sendReaction(e, t, s);
  }
  async _sendReaction(e, t, s) {
    if (!e) throw Error("Message id is missing");
    if (!t || Object.keys(t).length === 0) throw Error("Reaction object is missing");
    return await this.getClient().post(this.getClient().baseURL + `/messages/${encodeURIComponent(e)}/reaction`, {
      reaction: t,
      ...s
    });
  }
  async deleteReaction(e, t, s) {
    if (this._checkInitialized(), !t || !e) throw Error("Deleting a reaction requires specifying both the message and reaction type");
    try {
      const i = this.getClient().offlineDb;
      if (i) {
        const n = this.state.messages.find(({ id: a }) => a === e), r = {
          created_at: "",
          updated_at: "",
          message_id: e,
          type: t,
          user_id: this.getClient().userID ?? s
        };
        return n && await i.deleteReaction({
          message: n,
          reaction: r
        }), await i.queueTask({ task: {
          channelId: this.id,
          channelType: this.type,
          messageId: e,
          payload: [e, t],
          type: "delete-reaction"
        } });
      }
    } catch (i) {
      this._client.logger("error", "offlineDb:delete-reaction", {
        tags: ["channel", "offlineDb"],
        error: i
      });
    }
    return await this._deleteReaction(e, t, s);
  }
  async _deleteReaction(e, t, s) {
    if (this._checkInitialized(), !t || !e) throw Error("Deleting a reaction requires specifying both the message and reaction type");
    const i = this.getClient().baseURL + `/messages/${encodeURIComponent(e)}/reaction/${encodeURIComponent(t)}`;
    return s ? await this.getClient().delete(i, { user_id: s }) : await this.getClient().delete(i, {});
  }
  async update(e = {}, t, s) {
    return [
      "config",
      "cid",
      "created_by",
      "id",
      "member_count",
      "type",
      "created_at",
      "updated_at",
      "last_message_at",
      "own_capabilities"
    ].forEach((i) => {
      delete e[i];
    }), await this._update({
      message: t,
      data: e,
      ...s
    });
  }
  async updatePartial(e) {
    const t = await this.getClient().patch(this._channelURL(), e), s = [...t.channel.own_capabilities || []].sort().join() !== [...Array.isArray(this.data?.own_capabilities) ? this.data?.own_capabilities : []].sort().join();
    return this.data = t.channel, s && this.getClient().dispatchEvent({
      type: "capabilities.changed",
      cid: this.cid,
      own_capabilities: t.channel.own_capabilities
    }), t;
  }
  async enableSlowMode(e) {
    const t = await this.getClient().post(this._channelURL(), { cooldown: e });
    return this.data = t.channel, t;
  }
  async disableSlowMode() {
    const e = await this.getClient().post(this._channelURL(), { cooldown: 0 });
    return this.data = e.channel, e;
  }
  async sendSharedLocation(e, t) {
    const s = await this.sendMessage({
      id: e.message_id,
      shared_location: e,
      user: t ? { id: t } : void 0
    });
    return e.end_at && this.getClient().dispatchEvent({
      message: s.message,
      type: "live_location_sharing.started"
    }), s;
  }
  async stopLiveLocationSharing(e) {
    const t = await this.getClient().updateLocation({
      ...e,
      end_at: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.getClient().dispatchEvent({
      live_location: t,
      type: "live_location_sharing.stopped"
    });
  }
  async delete(e = {}) {
    return await this.getClient().delete(this._channelURL(), { ...e });
  }
  async truncate(e = {}) {
    return await this.getClient().post(this._channelURL() + "/truncate", e);
  }
  async acceptInvite(e = {}) {
    return await this._update({
      accept_invite: !0,
      ...e
    });
  }
  async rejectInvite(e = {}) {
    return await this._update({
      reject_invite: !0,
      ...e
    });
  }
  async addMembers(e, t, s = {}) {
    return await this._update({
      add_members: e,
      message: t,
      ...s
    });
  }
  async addFilterTags(e, t, s = {}) {
    return await this._update({
      add_filter_tags: e,
      message: t,
      ...s
    });
  }
  async removeFilterTags(e, t, s = {}) {
    return await this._update({
      remove_filter_tags: e,
      message: t,
      ...s
    });
  }
  async addModerators(e, t, s = {}) {
    return await this._update({
      add_moderators: e,
      message: t,
      ...s
    });
  }
  async assignRoles(e, t, s = {}) {
    return await this._update({
      assign_roles: e,
      message: t,
      ...s
    });
  }
  async inviteMembers(e, t, s = {}) {
    return await this._update({
      invites: e,
      message: t,
      ...s
    });
  }
  async removeMembers(e, t, s = {}) {
    return await this._update({
      remove_members: e,
      message: t,
      ...s
    });
  }
  async demoteModerators(e, t, s = {}) {
    return await this._update({
      demote_moderators: e,
      message: t,
      ...s
    });
  }
  async _update(e) {
    const t = await this.getClient().post(this._channelURL(), e);
    return this.data = t.channel, t;
  }
  async mute(e = {}) {
    return await this.getClient().post(this.getClient().baseURL + "/moderation/mute/channel", {
      channel_cid: this.cid,
      ...e
    });
  }
  async unmute(e = {}) {
    return await this.getClient().post(this.getClient().baseURL + "/moderation/unmute/channel", {
      channel_cid: this.cid,
      ...e
    });
  }
  async archive(e = {}) {
    const t = this.getClient(), s = e.user_id || t.userID;
    if (!s) throw Error("A user_id is required for archiving a channel");
    return (await this.partialUpdateMember(s, { set: { archived: !0 } })).channel_member;
  }
  async unarchive(e = {}) {
    const t = this.getClient(), s = e.user_id || t.userID;
    if (!s) throw Error("A user_id is required for unarchiving a channel");
    return (await this.partialUpdateMember(s, { set: { archived: !1 } })).channel_member;
  }
  async pin(e = {}) {
    const t = this.getClient(), s = e.user_id || t.userID;
    if (!s) throw new Error("A user_id is required for pinning a channel");
    return (await this.partialUpdateMember(s, { set: { pinned: !0 } })).channel_member;
  }
  async unpin(e = {}) {
    const t = this.getClient(), s = e.user_id || t.userID;
    if (!s) throw new Error("A user_id is required for unpinning a channel");
    return (await this.partialUpdateMember(s, { set: { pinned: !1 } })).channel_member;
  }
  muteStatus() {
    return this._checkInitialized(), this.getClient()._muteStatus(this.cid);
  }
  sendAction(e, t) {
    if (this._checkInitialized(), !e) throw Error("Message id is missing");
    return this.getClient().post(this.getClient().baseURL + `/messages/${encodeURIComponent(e)}/action`, {
      message_id: e,
      form_data: t,
      id: this.id,
      type: this.type
    });
  }
  async keystroke(e, t) {
    if (!this._isTypingIndicatorsEnabled()) return;
    const s = /* @__PURE__ */ new Date(), i = this.lastTypingEvent && s.getTime() - this.lastTypingEvent.getTime();
    this.lastKeyStroke = s, this.isTyping = !0, (i === null || i > 2e3) && (this.lastTypingEvent = /* @__PURE__ */ new Date(), await this.sendEvent({
      type: "typing.start",
      parent_id: e,
      ...t || {}
    }));
  }
  async updateAIState(e, t, s = {}) {
    await this.sendEvent({
      ...s,
      type: "ai_indicator.update",
      message_id: e,
      ai_state: t
    });
  }
  async clearAIIndicator() {
    await this.sendEvent({ type: "ai_indicator.clear" });
  }
  async stopAIResponse() {
    await this.sendEvent({ type: "ai_indicator.stop" });
  }
  async stopTyping(e, t) {
    this._isTypingIndicatorsEnabled() && (this.lastTypingEvent = null, this.isTyping = !1, await this.sendEvent({
      type: "typing.stop",
      parent_id: e,
      ...t || {}
    }));
  }
  _isTypingIndicatorsEnabled() {
    return !this.getConfig()?.typing_events || !this.getClient().wsConnection?.isHealthy ? !1 : this.getClient().user?.privacy_settings?.typing_indicators?.enabled ?? !0;
  }
  lastMessage() {
    let e = this.state.latestMessages.length - 5;
    e < 0 && (e = 0);
    const t = this.state.latestMessages.length + 1, s = this.state.latestMessages.slice(e, t);
    return s.sort((i, n) => n.created_at.getTime() - i.created_at.getTime()), s[0];
  }
  async markRead(e = {}) {
    return await this.getClient().messageDeliveryReporter.markRead(this, e);
  }
  async markAsReadRequest(e = {}) {
    return this._checkInitialized(), !this.getClient()._isUsingServerAuth() && (!this.getConfig()?.read_events || !li(this)) ? null : await this.getClient().post(this._channelURL() + "/read", { ...e });
  }
  async markUnread(e) {
    return this._checkInitialized(), !this.getClient()._isUsingServerAuth() && (!this.getConfig()?.read_events || !li(this)) ? Promise.resolve(null) : await this.getClient().post(this._channelURL() + "/unread", { ...e });
  }
  markReadLocally() {
    const e = this.getClient();
    if (!e.userID) return;
    const t = {
      channel_id: this.id,
      channel_type: this.type,
      cid: this.cid,
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      last_read_message_id: this.lastMessage()?.id,
      team: this.data?.team,
      type: "message.read_locally",
      user: e.user
    };
    return e.dispatchEvent(t), t;
  }
  clean() {
    this.lastKeyStroke && (/* @__PURE__ */ new Date()).getTime() - this.lastKeyStroke.getTime() > 1e3 && this.isTyping && ga(this.stopTyping(), "stop typing event"), this.state.clean();
  }
  async watch(e) {
    const t = {
      state: !0,
      watch: !0,
      presence: !1
    };
    await this.getClient().wsPromise, this.getClient()._hasConnectionID() || (t.watch = !1);
    const s = {
      ...t,
      ...e
    }, i = await this.query(s, "latest");
    return this.initialized = !0, this.data = i.channel, this._client.logger("info", `channel:watch() - started watching channel ${this.cid}`, {
      tags: ["channel"],
      channel: this
    }), i;
  }
  async stopWatching() {
    const e = await this.getClient().post(this._channelURL() + "/stop-watching", {});
    return this._client.logger("info", `channel:watch() - stopped watching channel ${this.cid}`, {
      tags: ["channel"],
      channel: this
    }), e;
  }
  async getReplies(e, t, s) {
    const i = s ? O(s) : void 0, n = await this.getClient().get(this.getClient().baseURL + `/messages/${encodeURIComponent(e)}/replies`, {
      sort: i,
      ...t
    });
    return n.messages && this.state.addMessagesSorted(n.messages), n;
  }
  async getPinnedMessages(e, t = []) {
    return await this.getClient().get(this._channelURL() + "/pinned_messages", { payload: {
      ...e,
      sort: O(t)
    } });
  }
  getReactions(e, t) {
    return this.getClient().get(this.getClient().baseURL + `/messages/${encodeURIComponent(e)}/reactions`, { ...t });
  }
  getMessagesById(e) {
    return this.getClient().get(this._channelURL() + "/messages", { ids: e.join(",") });
  }
  lastRead() {
    const { userID: e } = this.getClient();
    if (e) return this.state.read[e] ? this.state.read[e].last_read : null;
  }
  _countMessageAsUnread(e) {
    return !(e.shadowed || e.silent || e.parent_id && !e.show_in_channel || e.user?.id === this.getClient().userID || e.user?.id && this.getClient().userMuteStatus(e.user.id) || !this.getClient().options.isLocalUnreadCountEnabled && !li(this) || this.getClient()._muteStatus(this.cid).muted);
  }
  countUnread(e) {
    if (!e) return this.state.unreadCount;
    let t = 0;
    for (let s = 0; s < this.state.latestMessages.length; s += 1) {
      const i = this.state.latestMessages[s];
      i.created_at > e && this._countMessageAsUnread(i) && t++;
    }
    return t;
  }
  countUnreadMentions() {
    const e = this.lastRead(), t = this.getClient().userID;
    let s = 0;
    for (let i = 0; i < this.state.latestMessages.length; i += 1) {
      const n = this.state.latestMessages[i];
      this._countMessageAsUnread(n) && (!e || n.created_at > e) && n.mentioned_users?.some((r) => r.id === t) && s++;
    }
    return s;
  }
  async query(e = {}, t = "current") {
    await this.getClient().wsPromise;
    const s = e.created_by?.id ?? e.created_by_id ?? this._data?.created_by?.id ?? this._data?.created_by_id;
    this.getClient()._isUsingServerAuth() && typeof s != "string" && this.getClient().logger("warn", "Either `created_by` (with `id` property) or `created_by_id` are missing from both `Channel._data` and `options` parameter");
    let i = `${this.getClient().baseURL}/channels/${encodeURIComponent(this.type)}`;
    this.id && (i += `/${encodeURIComponent(this.id)}`);
    const n = await this.getClient().post(i + "/query", {
      data: this._data,
      state: !0,
      ...e
    });
    if (!this.id) {
      this.id = n.channel.id, this.cid = n.channel.cid;
      const l = nn(this.type, n.members.map((c) => c.user_id || c.user?.id || ""));
      l && l in this.getClient().activeChannels && delete this.getClient().activeChannels[l], !(this.cid in this.getClient().activeChannels) && this.getClient()._cacheEnabled() && (this.getClient().activeChannels[this.cid] = this);
    }
    this.getClient()._addChannelConfig(n.channel), typeof n.channel.config?.shared_locations < "u" && this.messageComposer.updateConfig({ location: { enabled: n.channel.config.shared_locations } });
    const { messageSet: r, filteredMessageIds: a } = this._initializeState(n, t);
    r.pagination = {
      ...r.pagination,
      ...Ra({
        parentSet: r,
        messagePaginationOptions: e?.messages,
        requestedPageSize: e?.messages?.limit ?? yd,
        returnedPage: n.messages,
        filteredReturnedPage: n.messages.filter((l) => !a.includes(l.id)),
        logger: this.getClient().logger
      })
    }, this.getClient().polls.hydratePollCache(n.messages, !0), this.getClient().reminders.hydrateState(n.messages), this.messageComposer.initStateFromChannelResponse(n);
    const o = [...n.channel.own_capabilities || []].sort().join() !== [...this.data && Array.isArray(this.data?.own_capabilities) ? this.data.own_capabilities : []].sort().join();
    return this.data = n.channel, this.offlineMode = !1, this.cooldownTimer.refresh(), o && this.getClient().dispatchEvent({
      type: "capabilities.changed",
      cid: this.cid,
      own_capabilities: n.channel.own_capabilities
    }), this.getClient().dispatchEvent({
      type: "channels.queried",
      queriedChannels: {
        channels: [n],
        isLatestMessageSet: r.isLatest
      }
    }), this.getClient().offlineDb?.executeQuerySafely((l) => l.upsertChannels?.({
      channels: [n],
      isLatestMessagesSet: r.isLatest
    }), { method: "upsertChannels" }), this.getClient().syncDeliveredCandidates([this]), n;
  }
  async banUser(e, t) {
    return this._checkInitialized(), await this.getClient().banUser(e, {
      ...t,
      type: this.type,
      id: this.id
    });
  }
  async hide(e = null, t = !1) {
    return this._checkInitialized(), await this.getClient().post(`${this._channelURL()}/hide`, {
      user_id: e,
      clear_history: t
    });
  }
  async show(e = null) {
    return this._checkInitialized(), await this.getClient().post(`${this._channelURL()}/show`, { user_id: e });
  }
  async unbanUser(e, t) {
    return this._checkInitialized(), await this.getClient().unbanUser(e, {
      ...t,
      type: this.type,
      id: this.id
    });
  }
  async shadowBan(e, t) {
    return this._checkInitialized(), await this.getClient().shadowBan(e, {
      ...t,
      type: this.type,
      id: this.id
    });
  }
  async removeShadowBan(e) {
    return this._checkInitialized(), await this.getClient().removeShadowBan(e, {
      type: this.type,
      id: this.id
    });
  }
  async vote(e, t, s) {
    return await this.getClient().castPollVote(e, t, s);
  }
  async removeVote(e, t, s) {
    return await this.getClient().removePollVote(e, t, s);
  }
  async _createDraft(e) {
    return await this.getClient().post(this._channelURL() + "/draft", { message: e });
  }
  async createDraft(e) {
    try {
      const t = this.getClient().offlineDb;
      if (t) return await t.queueTask({ task: {
        channelId: this.id,
        channelType: this.type,
        threadId: e.parent_id,
        payload: [e],
        type: "create-draft"
      } });
    } catch (t) {
      this._client.logger("error", "offlineDb:create-draft", {
        tags: ["channel", "offlineDb"],
        error: t
      });
    }
    return this._createDraft(e);
  }
  async _deleteDraft({ parent_id: e } = {}) {
    return await this.getClient().delete(this._channelURL() + "/draft", { parent_id: e });
  }
  async deleteDraft(e = {}) {
    const { parent_id: t } = e;
    try {
      const s = this.getClient().offlineDb;
      if (s) return await s.queueTask({ task: {
        channelId: this.id,
        channelType: this.type,
        threadId: t,
        payload: [e],
        type: "delete-draft"
      } });
    } catch (s) {
      this._client.logger("error", "offlineDb:delete-draft", {
        tags: ["channel", "offlineDb"],
        error: s
      });
    }
    return this._deleteDraft(e);
  }
  async getDraft({ parent_id: e } = {}) {
    return await this.getClient().get(this._channelURL() + "/draft", { parent_id: e });
  }
  on(e, t) {
    const s = t ? e : "all", i = t || e;
    return s in this.listeners || (this.listeners[s] = []), this._client.logger("info", `Attaching listener for ${s} event on channel ${this.cid}`, {
      tags: ["event", "channel"],
      channel: this
    }), this.listeners[s].push(i), { unsubscribe: () => {
      this._client.logger("info", `Removing listener for ${s} event from channel ${this.cid}`, {
        tags: ["event", "channel"],
        channel: this
      }), this.listeners[s] = this.listeners[s].filter((n) => n !== i);
    } };
  }
  off(e, t) {
    const s = t ? e : "all", i = t || e;
    s in this.listeners || (this.listeners[s] = []), this._client.logger("info", `Removing listener for ${s} event from channel ${this.cid}`, {
      tags: ["event", "channel"],
      channel: this
    }), this.listeners[s] = this.listeners[s].filter((n) => n !== i);
  }
  _handleChannelEvent(e) {
    const t = this;
    this._client.logger("info", `channel:_handleChannelEvent - Received event of type { ${e.type} } on ${this.cid}`, {
      tags: ["event", "channel"],
      channel: this
    });
    const s = t.state;
    switch (e.type) {
      case "typing.start":
        e.user?.id && (s.typing[e.user.id] = e);
        break;
      case "typing.stop":
        e.user?.id && delete s.typing[e.user.id];
        break;
      case "message.read_locally":
      case "message.read":
        if (e.thread) break;
        if (e.user?.id && e.created_at) {
          const i = s.read[e.user.id];
          s.read[e.user.id] = {
            ...i,
            last_read: new Date(e.created_at),
            last_read_message_id: e.last_read_message_id,
            user: e.user,
            unread_messages: 0
          }, this.messageReceiptsTracker.onMessageRead({
            user: e.user,
            readAt: e.created_at,
            lastReadMessageId: e.last_read_message_id
          });
          const n = this.getClient();
          e.user?.id === n.user?.id && (s.unreadCount = 0, e.type === "message.read" && n.syncDeliveredCandidates([this]));
        }
        break;
      case "message.delivered":
        if (e.user?.id && e.created_at) {
          const i = s.read[e.user.id];
          s.read[e.user.id] = {
            ...i,
            last_delivered_at: e.last_delivered_at ? new Date(e.last_delivered_at) : void 0,
            last_delivered_message_id: e.last_delivered_message_id,
            user: e.user
          }, this.messageReceiptsTracker.onMessageDelivered({
            user: e.user,
            deliveredAt: e.created_at,
            lastDeliveredMessageId: e.last_delivered_message_id
          });
          const n = this.getClient();
          e.user?.id === n.user?.id && n.syncDeliveredCandidates([this]);
        }
        break;
      case "user.watching.start":
      case "user.updated":
        e.user?.id && (s.watchers[e.user.id] = e.user);
        break;
      case "user.watching.stop":
        e.user?.id && delete s.watchers[e.user.id];
        break;
      case "message.deleted":
        e.message && (this._extendEventWithOwnReactions(e), e.hard_delete ? s.removeMessage(e.message) : s.addMessageSorted(e.message, !1, !1), s.removeQuotedMessageReferences(e.message), e.message.pinned && s.removePinnedMessage(e.message));
        break;
      case "user.messages.deleted":
        e.user && this.state.deleteUserMessages(e.user, !!e.hard_delete, new Date(e.created_at ?? Date.now()));
        break;
      case "message.new":
        if (e.message) {
          const i = this.getClient(), n = e.user?.id === i.user?.id, r = e.message.parent_id && !e.message.show_in_channel;
          (this.state.isUpToDate || r) && s.addMessageSorted(e.message, n), e.message.pinned && s.addPinnedMessage(e.message);
          const a = n || r;
          if (n && this.cooldownTimer.refresh(), a) break;
          if (e.user?.id) for (const o in s.read) o === e.user.id ? s.read[e.user.id] = {
            last_read: new Date(e.created_at),
            user: e.user,
            unread_messages: 0,
            last_delivered_at: new Date(e.created_at),
            last_delivered_message_id: e.message.id
          } : s.read[o].unread_messages += 1;
          this._countMessageAsUnread(e.message) && (s.unreadCount = s.unreadCount + 1), i.syncDeliveredCandidates([this]);
        }
        break;
      case "message.updated":
      case "message.undeleted":
        e.message && (this._extendEventWithOwnReactions(e), s.addMessageSorted(e.message, !1, !1), s._updateQuotedMessageReferences({ message: e.message }), e.message.pinned ? s.addPinnedMessage(e.message) : s.removePinnedMessage(e.message));
        break;
      case "channel.truncated":
        if (e.channel?.truncated_at) {
          const i = +new Date(e.channel.truncated_at);
          s.messageSets.forEach((n, r) => {
            n.messages.forEach(({ created_at: a, id: o }) => {
              i > +a && s.removeMessage({
                id: o,
                messageSetIndex: r
              });
            });
          }), s.pinnedMessages.forEach(({ id: n, created_at: r }) => {
            i > +r && s.removePinnedMessage({ id: n });
          }), s.unreadCount = this.countUnread(new Date(e.channel.truncated_at));
        } else
          s.clearMessages(), s.unreadCount = 0;
        e.message && (s.addMessageSorted(e.message), e.message.pinned && s.addPinnedMessage(e.message));
        break;
      case "member.added":
      case "member.updated": {
        const i = { ...e.member };
        i.pinned_at === null && delete i.pinned_at, i.archived_at === null && delete i.archived_at, i?.user && (s.members = {
          ...s.members,
          [i.user.id]: i
        });
        const n = this.getClient().userID;
        typeof n == "string" && typeof i?.user?.id == "string" && i.user.id === n && (s.membership = i);
        break;
      }
      case "member.removed":
        if (e.user?.id) {
          const i = { ...s.members };
          delete i[e.user.id], s.members = i;
        }
        break;
      case "notification.mark_unread": {
        if (e.user?.id !== this.getClient().user?.id || !e.user) break;
        const i = e.unread_messages ?? 0, n = s.read[e.user.id];
        s.read[e.user.id] = {
          ...n,
          first_unread_message_id: e.first_unread_message_id,
          last_read: new Date(e.last_read_at),
          last_read_message_id: e.last_read_message_id,
          user: e.user,
          unread_messages: i
        }, s.unreadCount = i, this.messageReceiptsTracker.onNotificationMarkUnread({
          user: e.user,
          lastReadAt: e.last_read_at,
          lastReadMessageId: e.last_read_message_id
        });
        break;
      }
      case "channel.updated":
        e.channel && (e.channel?.frozen !== void 0 && e.channel.frozen !== t.data?.frozen && this.query({
          state: !1,
          messages: { limit: 0 },
          watchers: { limit: 0 }
        }), t.data = {
          ...e.channel,
          hidden: e.channel?.hidden ?? t.data?.hidden,
          own_capabilities: e.channel?.own_capabilities ?? t.data?.own_capabilities
        }, this.cooldownTimer.refresh());
        break;
      case "reaction.new":
        if (e.message && e.reaction) {
          const { message: i, reaction: n } = e;
          e.message = s.addReaction(n, i);
        }
        break;
      case "reaction.deleted":
        if (e.message && e.reaction) {
          const { message: i, reaction: n } = e;
          e.message = s.removeReaction(n, i);
        }
        break;
      case "reaction.updated":
        if (e.message && e.reaction) {
          const { message: i, reaction: n } = e;
          e.message = s.addReaction(n, i, !0);
        }
        break;
      case "channel.hidden":
        t.data = {
          ...t.data,
          blocked: !!e.channel?.blocked,
          hidden: !0
        }, e.clear_history && s.clearMessages();
        break;
      case "channel.visible":
        t.data = {
          ...t.data,
          blocked: !!e.channel?.blocked,
          hidden: !1
        }, this.getClient().offlineDb?.handleChannelVisibilityEvent({ event: e });
        break;
      case "user.banned":
        if (!e.user?.id) break;
        s.members[e.user.id] = {
          ...s.members[e.user.id] || {},
          shadow_banned: !!e.shadow,
          banned: !e.shadow,
          user: {
            ...s.members[e.user.id]?.user || {},
            ...e.user
          }
        };
        break;
      case "user.unbanned":
        if (!e.user?.id) break;
        s.members[e.user.id] = {
          ...s.members[e.user.id] || {},
          shadow_banned: !1,
          banned: !1,
          user: {
            ...s.members[e.user.id]?.user || {},
            ...e.user
          }
        };
    }
    e.watcher_count !== void 0 && (t.state.watcher_count = e.watcher_count);
  }
  _checkInitialized() {
    if (!this.initialized && !this.offlineMode && !this.getClient()._isUsingServerAuth()) throw Error(`Channel ${this.cid} hasn't been initialized yet. Make sure to call .watch() and wait for it to resolve`);
  }
  _initializeState(e, t = "latest") {
    const { state: s, user: i, userID: n } = this.getClient();
    if (e.members) {
      this._hydrateMembers({ members: e.members });
      for (const l of e.members) l.user && s.updateUserReference(l.user, this.cid);
    }
    this.state.membership = e.membership || {};
    const r = e.messages || [];
    this.state.messages || this.state.initMessages();
    const { messageSet: a, filteredMessageIds: o } = this.state.addMessagesSorted(r, !1, !0, !0, t);
    if (this.state.pinnedMessages || (this.state.pinnedMessages = []), this.state.addPinnedMessages(e.pinned_messages || []), e.pending_messages && (this.state.pending_messages = e.pending_messages), e.watcher_count !== void 0 && (this.state.watcher_count = e.watcher_count), e.watchers)
      for (const l of e.watchers) l && (s.updateUserReference(l, this.cid), this.state.watchers[l.id] = l);
    if (n != null) {
      const l = this.state.last_message_at || /* @__PURE__ */ new Date();
      i && (this.state.read[i.id] = {
        user: i,
        last_read: l,
        unread_messages: 0
      });
    }
    if (e.read) {
      for (const l of e.read)
        this.state.read[l.user.id] = {
          last_delivered_at: l.last_delivered_at ? new Date(l.last_delivered_at) : void 0,
          last_delivered_message_id: l.last_delivered_message_id,
          last_read: new Date(l.last_read),
          last_read_message_id: l.last_read_message_id,
          unread_messages: l.unread_messages ?? 0,
          user: l.user
        }, l.user.id === i?.id && (this.state.unreadCount = this.state.read[l.user.id].unread_messages);
      this.messageReceiptsTracker.ingestInitial(e.read);
    }
    return {
      messageSet: a,
      filteredMessageIds: o
    };
  }
  _extendEventWithOwnReactions(e) {
    if (!e.message) return;
    const t = this.state.findMessage(e.message.id, e.message.parent_id);
    t && (e.message.own_reactions = t.own_reactions);
  }
  _hydrateMembers({ members: e, overrideCurrentState: t = !0 }) {
    const s = e.reduce((i, n) => (n.user && (i[n.user.id] = n), i), {});
    t ? this.state.members = s : !t && e.length && (this.state.members = {
      ...this.state.members,
      ...s
    });
  }
  _disconnect() {
    this._client.logger("info", `channel:disconnect() - Disconnecting the channel ${this.cid}`, {
      tags: ["connection", "channel"],
      channel: this
    }), this.disconnected = !0, this.cooldownTimer.clearTimeout(), this.state.setIsUpToDate(!1);
  }
}, fr = class {
  constructor({ client: e }) {
    this.client = e, this.users = {}, this.userChannelReferences = {};
  }
  updateUsers(e) {
    for (const t of e) this.updateUser(t);
  }
  updateUser(e) {
    e != null && this.client._cacheEnabled() && (this.users[e.id] = e);
  }
  updateUserReference(e, t) {
    e == null || !this.client._cacheEnabled() || (this.updateUser(e), this.userChannelReferences[e.id] || (this.userChannelReferences[e.id] = {}), this.userChannelReferences[e.id][t] = !0);
  }
  deleteAllChannelReference(e) {
    for (const t in this.userChannelReferences) delete this.userChannelReferences[t][e];
  }
}, vf = class {
  constructor() {
    this.connectionStartTimestamp = null, this.wsTotalFailures = 0, this.wsConsecutiveFailures = 0, this.instanceClientId = He();
  }
}, Fi = async (e, t) => {
  for (let i = 0; i < 3; i++) {
    try {
      await L.post(`https://chat-insights.getstream.io/insights/${e}`, t);
    } catch {
      await ge((i + 1) * 3e3);
      continue;
    }
    break;
  }
};
function Cf(e, t) {
  return {
    ...t,
    ...so(e)
  };
}
function so(e) {
  const { client: t } = e;
  return {
    ready_state: e.ws?.readyState,
    url: e._buildUrl(),
    api_key: t.key,
    start_ts: t.insightMetrics.connectionStartTimestamp,
    end_ts: (/* @__PURE__ */ new Date()).getTime(),
    auth_type: t.getAuthType(),
    token: t.tokenManager.token,
    user_id: t.userID,
    user_details: t._user,
    device: t.options.device,
    client_id: e.connectionID,
    ws_details: e.ws,
    ws_consecutive_failures: t.insightMetrics.wsConsecutiveFailures,
    ws_total_failures: t.insightMetrics.wsTotalFailures,
    request_id: e.requestID,
    online: typeof navigator < "u" ? navigator?.onLine : null,
    user_agent: typeof navigator < "u" ? navigator?.userAgent : null,
    instance_client_id: t.insightMetrics.instanceClientId
  };
}
function Sf(e) {
  return so(e);
}
var Rf = (e) => e.code !== void 0, Ef = (e) => e.error !== void 0, Mf = class {
  constructor({ client: e }) {
    this._buildUrl = () => {
      const t = this.client._buildWSPayload(this.requestID), s = this.client.tokenManager.getToken(), i = this.client.options.wsUrlParams, n = new URLSearchParams(i);
      return n.set("json", t), n.set("api_key", this.client.key), n.set("authorization", `${s}`), n.set("stream-auth-type", this.client.getAuthType()), n.set("X-Stream-Client", this.client.getUserAgent()), `${this.client.wsBaseURL}/connect?${n.toString()}`;
    }, this.onlineStatusChanged = (t) => {
      t.type === "offline" ? (this._log("onlineStatusChanged() - Status changing to offline"), this._setHealth(!1)) : t.type === "online" && (this._log(`onlineStatusChanged() - Status changing to online. isHealthy: ${this.isHealthy}`), this.isHealthy || this._reconnect({ interval: 10 }));
    }, this.onopen = (t) => {
      this.wsID === t && this._log("onopen() - onopen callback", { wsID: t });
    }, this.onmessage = (t, s) => {
      if (this.wsID !== t || (this._log("onmessage() - onmessage callback", {
        event: s,
        wsID: t
      }), typeof s.data != "string")) return;
      const i = JSON.parse(s.data);
      if (!this.isResolved) {
        if (this.isResolved = !0, i.error) {
          this.rejectPromise?.(this._errorFromWSEvent(i, !1));
          return;
        }
        this.resolvePromise?.(i), this._setHealth(!0);
      }
      this.lastEvent = /* @__PURE__ */ new Date(), i.type === "health.check" && this.scheduleNextPing(), this.client.dispatchEvent(i), this.scheduleConnectionCheck();
    }, this.onclose = (t, s) => {
      if (this.wsID === t)
        if (this._log("onclose() - onclose callback - " + s.code, {
          event: s,
          wsID: t
        }), s.code === ct.WS_CLOSED_SUCCESS) {
          const i = /* @__PURE__ */ new Error(`WS connection reject with error ${s.reason}`);
          i.reason = s.reason, i.code = s.code, i.wasClean = s.wasClean, i.target = s.target, this.rejectPromise?.(i), this._log(`onclose() - WS connection reject with error ${s.reason}`, { event: s });
        } else
          this.consecutiveFailures += 1, this.totalFailures += 1, this._setHealth(!1), this.isConnecting = !1, this.rejectPromise?.(this._errorFromWSEvent(s)), this._log("onclose() - WS connection closed. Calling reconnect ...", { event: s }), this._reconnect();
    }, this.onerror = (t, s) => {
      this.wsID === t && (this.consecutiveFailures += 1, this.totalFailures += 1, this._setHealth(!1), this.isConnecting = !1, this.rejectPromise?.(this._errorFromWSEvent(s)), this._log("onerror() - WS connection resulted into error", { event: s }), this._reconnect());
    }, this._setHealth = (t) => {
      if (t !== this.isHealthy) {
        if (this.isHealthy = t, this.isHealthy) {
          this.client.dispatchEvent({
            type: "connection.changed",
            online: this.isHealthy
          });
          return;
        }
        setTimeout(() => {
          this.isHealthy || this.client.dispatchEvent({
            type: "connection.changed",
            online: this.isHealthy
          });
        }, 5e3);
      }
    }, this._errorFromWSEvent = (t, s = !0) => {
      let i, n, r;
      Rf(t) && (i = t.code, n = "unknown", r = t.reason), Ef(t) && (i = t.error.code, n = t.error.StatusCode, r = t.error.message), this._log(`_errorFromWSEvent() - WS failed with code ${i}`, { event: t }, "warn");
      const a = /* @__PURE__ */ new Error(`WS failed with code ${i} and reason - ${r}`);
      return a.code = i, a.StatusCode = n, a.isWSFailure = s, a;
    }, this._setupConnectionPromise = () => {
      this.isResolved = !1, this.connectionOpen = new Promise((t, s) => {
        this.resolvePromise = t, this.rejectPromise = s;
      });
    }, this.scheduleNextPing = () => {
      this.healthCheckTimeoutRef && clearTimeout(this.healthCheckTimeoutRef), this.healthCheckTimeoutRef = setTimeout(() => {
        const t = [{
          type: "health.check",
          client_id: this.client.clientID
        }];
        try {
          this.ws?.send(JSON.stringify(t));
        } catch {
        }
      }, this.pingInterval);
    }, this.scheduleConnectionCheck = () => {
      this.connectionCheckTimeoutRef && clearTimeout(this.connectionCheckTimeoutRef), this.connectionCheckTimeoutRef = setTimeout(() => {
        const t = /* @__PURE__ */ new Date();
        this.lastEvent && t.getTime() - this.lastEvent.getTime() > this.connectionCheckTimeout && (this._log("scheduleConnectionCheck - going to reconnect"), this._setHealth(!1), this._reconnect());
      }, this.connectionCheckTimeout);
    }, this.client = e, this.consecutiveFailures = 0, this.totalFailures = 0, this.isConnecting = !1, this.isDisconnected = !1, this.isResolved = !1, this.isHealthy = !1, this.wsID = 1, this.lastEvent = null, this.pingInterval = 25e3, this.connectionCheckTimeout = this.pingInterval + 1e4, _a(this.onlineStatusChanged);
  }
  _log(e, t = {}, s = "info") {
    this.client.logger(s, "connection:" + e, {
      tags: ["connection"],
      ...t
    });
  }
  setClient(e) {
    this.client = e;
  }
  async connect(e = 15e3) {
    if (this.isConnecting) throw Error("You've called connect twice, can only attempt 1 connection at the time");
    this.isDisconnected = !1;
    try {
      const t = await this._connect();
      this.consecutiveFailures = 0, this._log(`connect() - Established ws connection with healthcheck: ${t}`);
    } catch (t) {
      this.isHealthy = !1, this.consecutiveFailures += 1;
      const s = t;
      if (s.code === ct.TOKEN_EXPIRED && !this.client.tokenManager.isStatic())
        this._log("connect() - WS failure due to expired token, so going to try to reload token and reconnect"), this._reconnect({ refreshToken: !0 });
      else if (!s.isWSFailure) throw new Error(JSON.stringify({
        code: s.code,
        StatusCode: s.StatusCode,
        message: s.message,
        isWSFailure: s.isWSFailure
      }));
    }
    return await this._waitForHealthy(e);
  }
  _waitForHealthy(e = 15e3) {
    return Promise.race([(async () => {
      for (let s = 0; s <= e; s += 50) try {
        return await this.connectionOpen;
      } catch (i) {
        if (s === e) throw new Error(JSON.stringify({
          code: i.code,
          StatusCode: i.StatusCode,
          message: i.message,
          isWSFailure: i.isWSFailure
        }));
        await ge(50);
      }
    })(), (async () => {
      throw await ge(e), this.isConnecting = !1, new Error(JSON.stringify({
        code: "",
        StatusCode: "",
        message: "initial WS connection could not be established",
        isWSFailure: !0
      }));
    })()]);
  }
  disconnect(e) {
    this._log(`disconnect() - Closing the websocket connection for wsID ${this.wsID}`), this.wsID += 1, this.isConnecting = !1, this.isDisconnected = !0, this.healthCheckTimeoutRef && clearInterval(this.healthCheckTimeoutRef), this.connectionCheckTimeoutRef && clearInterval(this.connectionCheckTimeoutRef), wa(this.onlineStatusChanged), this.isHealthy = !1, this.ws && this.ws.removeAllListeners && this.ws.removeAllListeners();
    let t;
    const { ws: s } = this;
    return s && s.close && s.readyState === s.OPEN ? (t = new Promise((i) => {
      const n = (r) => {
        this._log(`disconnect() - resolving isClosedPromise ${r ? "with" : "without"} close frame`, { event: r }), i();
      };
      s.onclose = n, setTimeout(n, e ?? 1e3);
    }), this._log("disconnect() - Manually closed connection by calling client.disconnect()"), s.close(ct.WS_CLOSED_SUCCESS, "Manually closed connection by calling client.disconnect()")) : (this._log("disconnect() - ws connection doesn't exist or it is already closed."), t = Promise.resolve()), delete this.ws, t;
  }
  async _connect() {
    if (this.isConnecting || this.isDisconnected && this.client.options.enableWSFallback) return;
    this.isConnecting = !0, this.requestID = He(), this.client.insightMetrics.connectionStartTimestamp = (/* @__PURE__ */ new Date()).getTime();
    let e = !1;
    try {
      this._log("_connect() - waiting for token"), await this.client.tokenManager.tokenReady(), e = !0;
    } catch {
    }
    try {
      e || (this._log("_connect() - tokenProvider failed before, so going to retry"), await this.client.tokenManager.loadToken()), this._setupConnectionPromise();
      const t = this._buildUrl();
      this._log(`_connect() - Connecting to ${t}`, {
        wsURL: t,
        requestID: this.requestID
      }), this.ws = new ed(t), this.ws.onopen = this.onopen.bind(this, this.wsID), this.ws.onclose = this.onclose.bind(this, this.wsID), this.ws.onerror = this.onerror.bind(this, this.wsID), this.ws.onmessage = this.onmessage.bind(this, this.wsID);
      const s = await this.connectionOpen;
      if (this.isConnecting = !1, s)
        return this.connectionID = s.connection_id, this.client.insightMetrics.wsConsecutiveFailures > 0 && this.client.options.enableInsights && (Fi("ws_success_after_failure", Sf(this)), this.client.insightMetrics.wsConsecutiveFailures = 0), s;
    } catch (t) {
      if (this.isConnecting = !1, this._log("_connect() - Error - ", t), this.client.options.enableInsights) {
        this.client.insightMetrics.wsConsecutiveFailures++, this.client.insightMetrics.wsTotalFailures++;
        const s = Cf(this, Pd(t));
        Fi?.("ws_fatal", s);
      }
      throw t;
    }
  }
  async _reconnect(e = {}) {
    if (this._log("_reconnect() - Initiating the reconnect"), this.isConnecting || this.isHealthy) {
      this._log("_reconnect() - Abort (1) since already connecting or healthy");
      return;
    }
    let t = e.interval;
    if (t || (t = As(this.consecutiveFailures)), await ge(t), this.isConnecting || this.isHealthy) {
      this._log("_reconnect() - Abort (2) since already connecting or healthy");
      return;
    }
    if (this.isDisconnected && this.client.options.enableWSFallback) {
      this._log("_reconnect() - Abort (3) since disconnect() is called");
      return;
    }
    this._log("_reconnect() - Destroying current WS connection"), this._destroyCurrentWSConnection(), e.refreshToken && await this.client.tokenManager.loadToken();
    try {
      await this._connect(), this._log("_reconnect() - Waiting for recoverCallBack"), await this.client.recoverState(), this._log("_reconnect() - Finished recoverCallBack"), this.consecutiveFailures = 0;
    } catch (s) {
      if (this.isHealthy = !1, this.consecutiveFailures += 1, s.code === ct.TOKEN_EXPIRED && !this.client.tokenManager.isStatic())
        return this._log("_reconnect() - WS failure due to expired token, so going to try to reload token and reconnect"), this._reconnect({ refreshToken: !0 });
      s.isWSFailure && (this._log("_reconnect() - WS failure, so going to try to reconnect"), this._reconnect());
    }
    this._log("_reconnect() - == END ==");
  }
  _destroyCurrentWSConnection() {
    this.wsID += 1;
    try {
      this?.ws?.removeAllListeners(), this?.ws?.close();
    } catch {
    }
  }
}, Xt = Hs(od()), pr = Hs(ld()), Uf = Hs(cd());
function io(e, t, s = {}, i = {}) {
  if (typeof t != "string") throw new TypeError("userId should be a string");
  const n = {
    user_id: t,
    ...s
  };
  if (Xt.default == null || Xt.default.sign == null) throw Error("Unable to find jwt crypto, if you are getting this error is probably because you are trying to generate tokens on browser or React Native (or other environment where crypto functions are not available). Please Note: token should only be generated server-side.");
  const r = Object.assign({
    algorithm: "HS256",
    noTimestamp: !0
  }, i);
  return n.iat && (r.noTimestamp = !1), Xt.default.sign(n, e, r);
}
function gr(e, t = {}) {
  const s = { server: !0 }, i = Object.assign({
    algorithm: "HS256",
    noTimestamp: !0
  }, t);
  return Xt.default.sign(s, e, i);
}
function xf(e) {
  const t = e.split(".");
  if (t.length !== 3) return "";
  const s = t[1], i = ud(s);
  return JSON.parse(i).user_id;
}
function Tf(e) {
  return [
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    hd(JSON.stringify({ user_id: e })),
    "devtoken"
  ].join(".");
}
function no(e, t, s) {
  const i = Buffer.from(s, "utf8"), n = pr.default.createHmac("sha256", i).update(e).digest("hex");
  try {
    return pr.default.timingSafeEqual(Buffer.from(n), Buffer.from(t));
  } catch {
    return !1;
  }
}
var Qe = {
  signatureMismatch: "signature mismatch",
  invalidBase64: "invalid base64 encoding",
  gzipFailed: "gzip decompression failed",
  invalidJson: "invalid JSON payload"
}, Ge = class extends Error {
  constructor(e = Qe.signatureMismatch) {
    super(e), this.name = "InvalidWebhookError";
  }
};
function ro(e) {
  const t = Buffer.from([31, 139]), s = Buffer.isBuffer(e) ? e : Buffer.from(e);
  if (s.length >= 2 && s.subarray(0, 2).equals(t)) try {
    return Uf.default.gunzipSync(s);
  } catch {
    throw new Ge(Qe.gzipFailed);
  }
  return s;
}
function ao(e) {
  if (!/^[A-Za-z0-9+/]*={0,2}$/.test(e) || e.length % 4 !== 0) throw new Ge(Qe.invalidBase64);
  const t = Buffer.from(e, "base64");
  if (t.toString("base64").length !== e.length) throw new Ge(Qe.invalidBase64);
  return ro(t);
}
function Af(e) {
  return ao(Lf(e) ?? e);
}
function Lf(e) {
  const t = e.replace(/^[\s\uFEFF]+/, "");
  if (!t.startsWith("{")) return null;
  let s;
  try {
    s = JSON.parse(t);
  } catch {
    return null;
  }
  return s === null || typeof s != "object" || Array.isArray(s) || typeof s.Message != "string" ? null : s.Message;
}
function dn(e) {
  const t = Buffer.isBuffer(e) ? e.toString("utf8") : e;
  try {
    return JSON.parse(t);
  } catch {
    throw new Ge(Qe.invalidJson);
  }
}
function If(e, t, s) {
  if (!no(e, t, s)) throw new Ge(Qe.signatureMismatch);
  return dn(e);
}
function Df(e, t, s) {
  return If(ro(e), t, s);
}
function Pf(e) {
  return dn(ao(e));
}
function Of(e) {
  return dn(Af(e));
}
var kf = class {
  constructor(e) {
    this.setTokenOrProvider = async (t, s) => {
      this.validateToken(t, s), this.user = s, Ai(t) && (this.tokenProvider = t, this.type = "provider"), typeof t == "string" && (this.token = t, this.type = "static"), !t && this.user && this.secret && (this.token = io(this.secret, s.id, {}, {}), this.type = "static"), await this.loadToken();
    }, this.reset = () => {
      this.token = void 0, this.tokenProvider = void 0, this.type = "static", this.user = void 0, this.loadTokenPromise = null;
    }, this.validateToken = (t, s) => {
      if (!(s && s.anon && !t)) {
        if (!this.secret && !t) throw new Error("User token can not be empty");
        if (t && typeof t != "string" && !Ai(t)) throw new Error("user token should either be a string or a function");
        if (typeof t == "string") {
          if (s.anon && t === "") return;
          const i = xf(t);
          if (t != null && (i == null || i === "" || i !== s.id)) throw new Error("userToken does not have a user_id or is not matching with user.id");
        }
      }
    }, this.tokenReady = () => this.loadTokenPromise, this.loadToken = () => (this.loadTokenPromise = new Promise(async (t, s) => {
      if (this.type === "static") return t(this.token);
      if (this.tokenProvider && typeof this.tokenProvider != "string") {
        try {
          this.token = await this.tokenProvider();
        } catch (i) {
          return s(new Error(`Call to tokenProvider failed with message: ${i}`, { cause: i }));
        }
        t(this.token);
      }
    }), this.loadTokenPromise), this.getToken = () => {
      if (this.token) return this.token;
      if (this.user && this.user.anon && !this.token) return this.token;
      if (this.secret) return gr(this.secret);
      throw new Error("Both secret and user tokens are not set. Either client.connectUser wasn't called or client.disconnect was called");
    }, this.isStatic = () => this.type === "static", this.loadTokenPromise = null, e && (this.secret = e), this.type = "static", this.secret && (this.token = gr(this.secret));
  }
}, Nf = class {
  constructor({ client: e }) {
    this._onlineStatusChanged = (t) => {
      if (this._log(`_onlineStatusChanged() - ${t.type}`), t.type === "offline") {
        this._setState("CLOSED"), this.cancelToken?.cancel("disconnect() is called"), this.cancelToken = void 0;
        return;
      }
      t.type === "online" && this.state === "CLOSED" && this.connect(!0);
    }, this._req = async (t, s, i) => {
      !this.cancelToken && !t.close && (this.cancelToken = L.CancelToken.source());
      try {
        const n = await this.client.doAxiosRequest("get", this.client.baseURL.replace(":3030", ":8900") + "/longpoll", void 0, {
          config: {
            ...s,
            cancelToken: this.cancelToken?.token
          },
          params: t
        });
        return this.consecutiveFailures = 0, n;
      } catch (n) {
        if (this.consecutiveFailures += 1, i && Ct(n))
          return this._log("_req() - Retryable error, retrying request"), await ge(As(this.consecutiveFailures)), this._req(t, s, i);
        throw n;
      }
    }, this._poll = async () => {
      for (; this.state === "CONNECTED"; ) try {
        const t = await this._req({}, { timeout: 3e4 }, !0);
        if (t.events?.length) for (let s = 0; s < t.events.length; s++) this.client.dispatchEvent(t.events[s]);
      } catch (t) {
        if (L.isCancel(t)) {
          this._log("_poll() - axios canceled request");
          return;
        }
        if (qh(t)) {
          this._log("_poll() - ConnectionID error, connecting without ID..."), this._setState("DISCONNECTED"), this.connect(!0);
          return;
        }
        if (zs(t) && !Ct(t)) {
          this._setState("CLOSED");
          return;
        }
        await ge(As(this.consecutiveFailures));
      }
    }, this.connect = async (t = !1) => {
      if (this.state === "CONNECTING") {
        this._log("connect() - connecting already in progress", { reconnect: t }, "warn");
        return;
      }
      if (this.state === "CONNECTED") {
        this._log("connect() - already connected and polling", { reconnect: t }, "warn");
        return;
      }
      this._setState("CONNECTING"), this.connectionID = void 0;
      try {
        const { event: s } = await this._req({ json: this.client._buildWSPayload() }, { timeout: 8e3 }, t);
        return this._setState("CONNECTED"), this.connectionID = s.connection_id, this.client.dispatchEvent(s), this._poll(), t && this.client.recoverState(), s;
      } catch (s) {
        throw this._setState("CLOSED"), s;
      }
    }, this.isHealthy = () => !!this.connectionID && this.state === "CONNECTED", this.disconnect = async (t = 2e3) => {
      wa(this._onlineStatusChanged), this._setState("DISCONNECTED"), this.cancelToken?.cancel("disconnect() is called"), this.cancelToken = void 0;
      const s = this.connectionID;
      this.connectionID = void 0;
      try {
        await this._req({
          close: !0,
          connection_id: s
        }, { timeout: t }, !1), this._log("disconnect() - Closed connectionID");
      } catch (i) {
        this._log("disconnect() - Failed", { err: i }, "error");
      }
    }, this.client = e, this.state = "INIT", this.consecutiveFailures = 0, _a(this._onlineStatusChanged);
  }
  _log(e, t = {}, s = "info") {
    this.client.logger(s, "WSConnectionFallback:" + e, {
      tags: ["connection_fallback", "connection"],
      ...t
    });
  }
  _setState(e) {
    this._log(`_setState() - ${e}`), this.state === "CONNECTING" && e === "CONNECTED" && this.client.dispatchEvent({
      type: "connection.changed",
      online: !0
    }), (e === "CLOSED" || e === "DISCONNECTED") && this.client.dispatchEvent({
      type: "connection.changed",
      online: !1
    }), this.state = e;
  }
}, mr = class {
  constructor(e, t, s, i) {
    this.client = e, this.type = t, this.id = s, this.data = i;
  }
  create() {
    const e = {
      name: this.data?.name,
      filter: this.data?.filter,
      description: this.data?.description,
      all_sender_channels: this.data?.all_sender_channels,
      all_users: this.data?.all_users
    };
    return this.client.createSegment(this.type, this.id, e);
  }
  verifySegmentId() {
    if (!this.id) throw new Error("Segment id is missing. Either create the segment using segment.create() or set the id during instantiation - const segment = client.segment(id)");
  }
  get() {
    return this.verifySegmentId(), this.client.getSegment(this.id);
  }
  update(e) {
    return this.verifySegmentId(), this.client.updateSegment(this.id, e);
  }
  addTargets(e) {
    return this.verifySegmentId(), this.client.addSegmentTargets(this.id, e);
  }
  removeTargets(e) {
    return this.verifySegmentId(), this.client.removeSegmentTargets(this.id, e);
  }
  delete() {
    return this.verifySegmentId(), this.client.deleteSegment(this.id);
  }
  targetExists(e) {
    return this.verifySegmentId(), this.client.segmentTargetExists(this.id, e);
  }
  queryTargets(e = {}, t = [], s = {}) {
    return this.verifySegmentId(), this.client.querySegmentTargets(this.id, e, t, s);
  }
}, $t = {
  user: "stream:user",
  message: "stream:chat:v1:message",
  userprofile: "stream:v1:user_profile"
}, Ff = class {
  constructor(e) {
    this.client = e;
  }
  flagUser(e, t, s = {}) {
    return this.flag($t.user, e, "", t, s);
  }
  flagMessage(e, t, s = {}) {
    return this.flag($t.message, e, "", t, s);
  }
  async flag(e, t, s, i, n = {}) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/flag", {
      entity_type: e,
      entity_id: t,
      entity_creator_id: s,
      reason: i,
      ...n
    });
  }
  async muteUser(e, t = {}) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/mute", {
      target_ids: [e],
      ...t
    });
  }
  async unmuteUser(e, t) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/unmute", {
      target_ids: [e],
      ...t
    });
  }
  async getUserModerationReport(e, t = {}) {
    return await this.client.get(this.client.baseURL + "/api/v2/moderation/user_report", {
      user_id: e,
      ...t
    });
  }
  async queryReviewQueue(e = {}, t = [], s = {}) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/review_queue", {
      filter: e,
      sort: O(t),
      ...s
    });
  }
  async upsertConfig(e) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/config", e);
  }
  async getConfig(e, t) {
    return await this.client.get(this.client.baseURL + "/api/v2/moderation/config/" + e, t);
  }
  async deleteConfig(e, t) {
    return await this.client.delete(this.client.baseURL + "/api/v2/moderation/config/" + e, t);
  }
  async queryConfigs(e, t, s = {}) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/configs", {
      filter: e,
      sort: t,
      ...s
    });
  }
  async submitAction(e, t, s = {}) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/submit_action", {
      action_type: e,
      item_id: t,
      ...s
    });
  }
  async check(e, t, s, i, n, r, a) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/check", {
      entity_type: e,
      entity_id: t,
      entity_creator_id: s,
      moderation_payload: i,
      config_key: n,
      options: r,
      test_mode: a
    });
  }
  async checkUserProfile(e, t) {
    if (!t.username && !t.image) throw new Error("Either username or image must be provided");
    const s = {};
    return t.username && (s.texts = [t.username]), t.image && (s.images = [t.image]), await this.check($t.userprofile, e, e, s, "user_profile:default", { force_sync: !0 }, !0);
  }
  async addCustomFlags(e, t, s, i, n) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/custom_check", {
      entity_type: e,
      entity_id: t,
      entity_creator_id: s,
      moderation_payload: i,
      flags: n
    });
  }
  async addCustomMessageFlags(e, t) {
    return await this.addCustomFlags($t.message, e, "", {}, t);
  }
  async upsertModerationRule(e) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/moderation_rule", e);
  }
  async queryModerationRules(e = {}, t = [], s = {}) {
    return await this.client.post(this.client.baseURL + "/api/v2/moderation/moderation_rules", {
      filter: e,
      sort: t,
      ...s
    });
  }
  async getModerationRule(e) {
    return await this.client.get(this.client.baseURL + "/api/v2/moderation/moderation_rule/" + e);
  }
  async deleteModerationRule(e) {
    return await this.client.delete(this.client.baseURL + "/api/v2/moderation/moderation_rule/" + e);
  }
}, Bf = 1e3, yr = 25, _r = {
  active: !1,
  wasActivatedAtLeastOnce: !1,
  isThreadOrderStale: !1,
  threads: [],
  unreadThreadCount: 0,
  unseenThreadIds: [],
  lastConnectionDropAt: null,
  pagination: {
    isLoading: !1,
    isLoadingNext: !1,
    nextCursor: null
  },
  ready: !1
}, qf = class extends ye {
  constructor({ client: e }) {
    super(), this.resetState = () => {
      this.state.next(_r);
    }, this.activate = () => {
      this.state.partialNext({
        active: !0,
        wasActivatedAtLeastOnce: !0
      });
    }, this.deactivate = () => {
      this.state.partialNext({ active: !1 });
    }, this.registerSubscriptions = () => {
      this.hasSubscriptions || (this.addUnsubscribeFunction(this.subscribeUnreadThreadsCountChange()), this.addUnsubscribeFunction(this.subscribeManageThreadSubscriptions()), this.addUnsubscribeFunction(this.subscribeReloadOnActivation()), this.addUnsubscribeFunction(this.subscribeNewReplies()), this.addUnsubscribeFunction(this.subscribeRecoverAfterConnectionDrop()), this.addUnsubscribeFunction(this.subscribeChannelDeleted()));
    }, this.subscribeUnreadThreadsCountChange = () => {
      const { unread_threads: t = 0 } = this.client.user ?? {};
      this.state.partialNext({ unreadThreadCount: t });
      const s = [
        "health.check",
        "notification.mark_read",
        "notification.mark_unread",
        "notification.thread_message_new",
        "notification.channel_deleted"
      ].map((i) => this.client.on(i, (n) => {
        const { unread_threads: r } = n.me ?? n;
        typeof r == "number" && this.state.partialNext({ unreadThreadCount: r });
      }).unsubscribe);
      return () => s.forEach((i) => i());
    }, this.subscribeChannelDeleted = () => this.client.on("notification.channel_deleted", (t) => {
      const { cid: s } = t, { threads: i } = this.state.getLatestValue(), n = i.filter((r) => r.channel.cid !== s);
      this.state.partialNext({ threads: n });
    }).unsubscribe, this.subscribeManageThreadSubscriptions = () => this.state.subscribeWithSelector((t) => ({ threads: t.threads }), ({ threads: t }, s) => {
      const { threads: i = [] } = s ?? {}, n = i.filter((r) => r !== this.threadsById[r.id]);
      t.forEach((r) => r.registerSubscriptions()), n.forEach((r) => r.unregisterSubscriptions());
    }), this.subscribeReloadOnActivation = () => this.state.subscribeWithSelector((t) => ({ active: t.active }), ({ active: t }) => {
      t && this.reload();
    }), this.subscribeNewReplies = () => this.client.on("notification.thread_message_new", (t) => {
      const s = t.message?.parent_id;
      if (!s) return;
      const { unseenThreadIds: i, ready: n } = this.state.getLatestValue();
      n && (this.threadsById[s] ? this.state.partialNext({ isThreadOrderStale: !0 }) : i.includes(s) || this.state.partialNext({ unseenThreadIds: i.concat(s) }));
    }).unsubscribe, this.subscribeRecoverAfterConnectionDrop = () => {
      const t = this.client.on("connection.changed", (n) => {
        n.online === !1 && this.state.next((r) => r.lastConnectionDropAt ? r : {
          ...r,
          lastConnectionDropAt: /* @__PURE__ */ new Date()
        });
      }).unsubscribe, s = sn(() => {
        const { lastConnectionDropAt: n, wasActivatedAtLeastOnce: r } = this.state.getLatestValue();
        !n || !r || this.reload({ force: !0 });
      }, Bf, { trailing: !0 }), i = this.client.on("connection.recovered", s).unsubscribe;
      return () => {
        t(), i();
      };
    }, this.unregisterSubscriptions = () => (this.state.getLatestValue().threads.forEach((t) => t.unregisterSubscriptions()), super.unregisterSubscriptions()), this.reload = async ({ force: t = !1 } = {}) => {
      const { threads: s, unseenThreadIds: i, isThreadOrderStale: n, pagination: r, ready: a } = this.state.getLatestValue();
      if (r.isLoading || !t && a && !i.length && !n) return;
      const o = s.length + i.length;
      try {
        this.state.next((d) => ({
          ...d,
          pagination: {
            ...d.pagination,
            isLoading: !0
          }
        }));
        const l = await this.queryThreads({ limit: Math.min(o, yr) || yr }), c = [];
        for (const d of l.threads) {
          const h = this.threadsById[d.id];
          h ? (c.push(h), h.hasStaleState && h.hydrateState(d)) : c.push(d);
        }
        this.state.next((d) => ({
          ...d,
          threads: c,
          unseenThreadIds: [],
          isThreadOrderStale: !1,
          pagination: {
            ...d.pagination,
            isLoading: !1,
            nextCursor: l.next ?? null
          },
          ready: !0
        }));
      } catch (l) {
        this.client.logger("error", l.message), this.state.next((c) => ({
          ...c,
          pagination: {
            ...c.pagination,
            isLoading: !1
          }
        }));
      }
    }, this.queryThreads = (t = {}) => this.client.queryThreads({
      limit: 25,
      participant_limit: 10,
      reply_limit: 10,
      watch: !0,
      ...t
    }), this.loadNextPage = async (t = {}) => {
      const { pagination: s } = this.state.getLatestValue();
      if (!(s.isLoadingNext || !s.nextCursor))
        try {
          this.state.partialNext({ pagination: {
            ...s,
            isLoadingNext: !0
          } });
          const i = await this.queryThreads({
            ...t,
            next: s.nextCursor
          });
          this.state.next((n) => ({
            ...n,
            threads: i.threads.length ? n.threads.concat(i.threads) : n.threads,
            pagination: {
              ...n.pagination,
              nextCursor: i.next ?? null,
              isLoadingNext: !1
            }
          }));
        } catch (i) {
          this.client.logger("error", i.message), this.state.next((n) => ({
            ...n,
            pagination: {
              ...n.pagination,
              isLoadingNext: !1
            }
          }));
        }
    }, this.client = e, this.state = new A(_r), this.threadsByIdGetterCache = {
      threads: [],
      threadsById: {}
    };
  }
  get threadsById() {
    const { threads: e } = this.state.getLatestValue();
    if (e === this.threadsByIdGetterCache.threads) return this.threadsByIdGetterCache.threadsById;
    const t = e.reduce((s, i) => (s[i.id] = i, s), {});
    return this.threadsByIdGetterCache.threads = e, this.threadsByIdGetterCache.threadsById = t, t;
  }
}, Vf = 3e3, $f = class {
  constructor({ client: e, poll: t }) {
    this.pendingCount = 0, this.succeededChanges = [], this.requestTag = /* @__PURE__ */ Symbol("poll-votes"), this.withServerVotes = (s) => ({
      ...s,
      ...this.serverVoteState
    }), this.castVote = (s, i) => {
      const n = () => this.client.castPollVote(i, this.poll.id, { option_id: s }), r = this.poll.data;
      if (r.ownVotesByOptionId[s]) return this.send(n);
      const a = r.enforce_unique_vote ? Object.values(r.ownVotesByOptionId) : [];
      return this.poll.state.partialNext(br(r, {
        add: [this.createPlaceholderVote(s)],
        remove: a
      })), this.track(n, (o) => ({
        optionId: s,
        vote: o.vote
      }));
    }, this.removeVote = (s, i) => {
      const n = (l) => this.client.removePollVote(i, this.poll.id, l), r = this.poll.data, a = Object.values(r.ownVotesByOptionId).find(({ id: l }) => l === s);
      if (!a?.option_id) return this.send(() => n(s));
      const o = a.option_id;
      return this.poll.state.partialNext(br(r, { remove: [a] })), this.track(() => {
        const l = this.getServerVoteId(a);
        return l ? n(l) : Promise.resolve(void 0);
      }, () => ({ optionId: o }));
    }, this.send = async (s) => {
      try {
        return await ph(this.requestTag, s);
      } finally {
        gh(this.requestTag) || this.scheduleCatchUp();
      }
    }, this.handleVoteEvent = (s, { confirmsOwnVote: i, ownVotesByOptionId: n }) => (this.serverVoteState = {
      latest_votes_by_option: s.latest_votes_by_option,
      ownVotesByOptionId: n,
      vote_count: s.vote_count,
      vote_counts_by_option: s.vote_counts_by_option
    }, i && (this.pendingCount = Math.max(this.pendingCount - 1, 0)), this.pendingCount > 0 ? {} : this.takeServerVoteState()), this.reset = (s) => {
      this.serverVoteState = wr(s), this.pendingCount = 0, this.succeededChanges = [], clearTimeout(this.catchUpTimeout);
    }, this.track = async (s, i) => {
      this.pendingCount += 1, clearTimeout(this.catchUpTimeout);
      let n;
      try {
        n = await this.send(async () => {
          const r = await s();
          return r !== void 0 && this.succeededChanges.push(i(r)), r;
        });
      } catch (r) {
        throw this.settleWithoutEvent(), r;
      }
      return n === void 0 && this.settleWithoutEvent(), n;
    }, this.settleWithoutEvent = () => {
      this.pendingCount = Math.max(this.pendingCount - 1, 0), this.pendingCount === 0 && this.poll.state.partialNext(this.takeServerVoteState());
    }, this.createPlaceholderVote = (s) => {
      const i = (/* @__PURE__ */ new Date()).toISOString();
      return {
        created_at: i,
        id: `local-${$()}`,
        option_id: s,
        poll_id: this.poll.id,
        updated_at: i,
        user: this.client.user,
        user_id: this.client.userID
      };
    }, this.getServerVoteId = (s) => {
      for (let i = this.succeededChanges.length - 1; i >= 0; i--) {
        const n = this.succeededChanges[i];
        if (n.optionId === s.option_id) return n.vote?.id;
      }
      return this.serverVoteState.ownVotesByOptionId[s.option_id]?.id;
    }, this.takeServerVoteState = () => (clearTimeout(this.catchUpTimeout), this.succeededChanges = [], {
      ...this.serverVoteState,
      maxVotedOptionIds: hn(this.serverVoteState.vote_counts_by_option)
    }), this.scheduleCatchUp = () => {
      clearTimeout(this.catchUpTimeout), this.pendingCount !== 0 && (this.catchUpTimeout = setTimeout(this.applySucceededChanges, Vf));
    }, this.applySucceededChanges = () => {
      const { enforce_unique_vote: s } = this.poll.data;
      let i = { ...this.serverVoteState.ownVotesByOptionId };
      for (const { optionId: n, vote: r } of this.succeededChanges) r ? s ? i = { [n]: r } : i[n] = r : delete i[n];
      this.serverVoteState = {
        ...this.serverVoteState,
        ownVotesByOptionId: i
      }, this.pendingCount = 0, this.poll.state.partialNext(this.takeServerVoteState());
    }, this.client = e, this.poll = t, this.serverVoteState = wr(t.data);
  }
  get serverOwnVotes() {
    return this.serverVoteState.ownVotesByOptionId;
  }
};
function wr(e) {
  return {
    latest_votes_by_option: e.latest_votes_by_option,
    ownVotesByOptionId: e.ownVotesByOptionId,
    vote_count: e.vote_count,
    vote_counts_by_option: e.vote_counts_by_option
  };
}
function br(e, { add: t = [], remove: s = [] }) {
  const i = { ...e.ownVotesByOptionId }, n = { ...e.vote_counts_by_option }, r = e.latest_votes_by_option ? { ...e.latest_votes_by_option } : e.latest_votes_by_option;
  let a = e.vote_count ?? 0;
  for (const o of s) {
    const l = o.option_id;
    if (!l) continue;
    delete i[l];
    const c = (n[l] ?? 0) - 1;
    c > 0 ? n[l] = c : delete n[l], a = Math.max(a - 1, 0), r?.[l] && (r[l] = r[l].filter((d) => d.id !== o.id));
  }
  for (const o of t) {
    const l = o.option_id;
    l && (i[l] = o, n[l] = (n[l] ?? 0) + 1, a += 1, r && e.voting_visibility !== "anonymous" && (r[l] = [o, ...r[l] ?? []]));
  }
  return {
    latest_votes_by_option: r,
    maxVotedOptionIds: hn(n),
    ownVotesByOptionId: i,
    vote_count: a,
    vote_counts_by_option: n
  };
}
function hn(e) {
  let t = 0, s = [];
  for (const [i, n] of Object.entries(e ?? {})) n > t ? (s = [i], t = n) : n === t && s.push(i);
  return s;
}
var jf = (e) => e.type === "poll.updated", Hf = (e) => e.type === "poll.closed", Wf = (e) => e.type === "poll.vote_casted", zf = (e) => e.type === "poll.vote_changed", Qf = (e) => e.type === "poll.vote_removed", fe = (e) => !!e?.answer_text, Gf = class {
  constructor({ client: e, poll: t }) {
    this.closeConfirmed = !1, this.getInitialStateFromPollResponse = (s) => {
      const { own_votes: i, id: n, ...r } = s, { ownAnswer: a, ownVotes: o } = i?.reduce((l, c) => (fe(c) ? l.ownAnswer = c : l.ownVotes.push(c), l), { ownVotes: [] }) ?? { ownVotes: [] };
      return {
        ...r,
        lastActivityAt: /* @__PURE__ */ new Date(),
        maxVotedOptionIds: hn(r.vote_counts_by_option),
        ownAnswer: a,
        ownVotesByOptionId: Kf(o)
      };
    }, this.upsertOfflineDb = () => {
      const s = this.optimisticVotes.withServerVotes(this.data);
      this.client.offlineDb?.executeQuerySafely((i) => i.upsertPoll({ poll: Xf(this, s) }), { method: "upsertPoll" });
    }, this.reinitializeState = (s) => {
      s.is_closed && (this.closeConfirmed = !0);
      const i = this.getInitialStateFromPollResponse(s);
      this.optimisticVotes.reset(i), this.state.partialNext(i);
    }, this.updateFromVoteEvent = (s, i, n) => {
      const r = s.poll_vote.user_id === this.client.userID, a = this.optimisticVotes.handleVoteEvent(s.poll, {
        confirmsOwnVote: r && !fe(s.poll_vote) && !!s.poll_vote.option_id,
        ownVotesByOptionId: i
      });
      this.state.partialNext({
        ...n,
        answers_count: s.poll.answers_count,
        lastActivityAt: new Date(s.created_at),
        ...a
      }), this.upsertOfflineDb();
    }, this.handlePollUpdated = (s) => {
      if (s.poll?.id && s.poll.id !== this.id || !jf(s)) return;
      const { id: i, ...n } = Jf(s.poll);
      n.is_closed && (this.closeConfirmed = !0), this.state.partialNext({
        ...n,
        lastActivityAt: new Date(s.created_at)
      }), this.upsertOfflineDb();
    }, this.handlePollClosed = (s) => {
      s.poll?.id && s.poll.id !== this.id || Hf(s) && (this.closeConfirmed = !0, this.state.partialNext({
        is_closed: !0,
        lastActivityAt: new Date(s.created_at)
      }), this.upsertOfflineDb());
    }, this.handleVoteCasted = (s) => {
      if (s.poll?.id && s.poll.id !== this.id || !Wf(s)) return;
      const i = this.data, n = s.poll_vote.user_id === this.client.userID;
      let r = [...i.latest_answers], a = i.ownAnswer;
      const o = { ...this.optimisticVotes.serverOwnVotes };
      n && (fe(s.poll_vote) ? a = s.poll_vote : s.poll_vote.option_id && (o[s.poll_vote.option_id] = s.poll_vote)), fe(s.poll_vote) && (r = [s.poll_vote, ...r]), this.updateFromVoteEvent(s, o, {
        latest_answers: r,
        ownAnswer: a
      });
    }, this.handleVoteChanged = (s) => {
      if (s.poll?.id && s.poll.id !== this.id || !zf(s)) return;
      const i = this.data, n = s.poll_vote.user_id === this.client.userID;
      let r = [...i.latest_answers], a = i.ownAnswer, o = this.optimisticVotes.serverOwnVotes;
      n ? fe(s.poll_vote) ? (r = [s.poll_vote, ...r.filter((l) => l.id !== s.poll_vote.id)], a = s.poll_vote) : s.poll_vote.option_id && (s.poll.enforce_unique_vote ? o = { [s.poll_vote.option_id]: s.poll_vote } : (o = Object.entries(o).reduce((l, [c, d]) => (c !== s.poll_vote.option_id && d.id === s.poll_vote.id || (l[c] = d), l), {}), o[s.poll_vote.option_id] = s.poll_vote), a?.id === s.poll_vote.id && (a = void 0)) : fe(s.poll_vote) && (r = [s.poll_vote, ...r]), this.updateFromVoteEvent(s, o, {
        latest_answers: r,
        ownAnswer: a
      });
    }, this.handleVoteRemoved = (s) => {
      if (s.poll?.id && s.poll.id !== this.id || !Qf(s)) return;
      const i = this.data, n = s.poll_vote.user_id === this.client.userID;
      let r = [...i.latest_answers], a = i.ownAnswer;
      const o = { ...this.optimisticVotes.serverOwnVotes };
      fe(s.poll_vote) ? (r = r.filter((l) => l.id !== s.poll_vote.id), n && (a = void 0)) : n && s.poll_vote.option_id && delete o[s.poll_vote.option_id], this.updateFromVoteEvent(s, o, {
        latest_answers: r,
        ownAnswer: a
      });
    }, this.query = async (s) => {
      const { poll: i } = await this.client.getPoll(s);
      return this.state.partialNext({
        ...i,
        lastActivityAt: /* @__PURE__ */ new Date()
      }), i;
    }, this.update = async (s) => await this.client.updatePoll({
      ...s,
      id: this.id
    }), this.partialUpdate = async (s) => await this.client.partialUpdatePoll(this.id, s), this.close = async () => {
      if (!this.data.is_closed) {
        this.closeConfirmed = !1, this.state.partialNext({ is_closed: !0 });
        try {
          return await this.client.closePoll(this.id);
        } catch (s) {
          throw this.closeConfirmed || this.state.partialNext({ is_closed: !1 }), s;
        }
      }
    }, this.delete = async () => await this.client.deletePoll(this.id), this.createOption = async (s) => await this.client.createPollOption(this.id, s), this.updateOption = async (s) => await this.client.updatePollOption(this.id, s), this.deleteOption = async (s) => await this.client.deletePollOption(this.id, s), this.castVote = async (s, i) => {
      const { max_votes_allowed: n, ownVotesByOptionId: r } = this.data;
      if (n && n === Object.keys(r).length) {
        this.client.notifications.addInfo({
          message: "Reached the vote limit. Remove an existing vote first.",
          origin: {
            emitter: "Poll",
            context: {
              messageId: i,
              optionId: s
            }
          },
          options: { type: "validation:poll:castVote:limit" }
        });
        return;
      }
      return await this.optimisticVotes.castVote(s, i);
    }, this.removeVote = async (s, i) => await this.optimisticVotes.removeVote(s, i), this.addAnswer = async (s, i) => await this.client.addPollAnswer(i, this.id, s), this.removeAnswer = async (s, i) => await this.client.removePollVote(i, this.id, s), this.queryAnswers = async (s) => await this.client.queryPollAnswers(this.id, s.filter, s.sort, s.options), this.queryOptionVotes = async (s) => await this.client.queryPollVotes(this.id, s.filter, s.sort, s.options), this.client = e, this.id = t.id, this.state = new A(this.getInitialStateFromPollResponse(t)), this.optimisticVotes = new $f({
      client: this.client,
      poll: this
    });
  }
  get data() {
    return this.state.getLatestValue();
  }
};
function Kf(e) {
  return e ? e.reduce((t, s) => (fe(s) || !s.option_id || (t[s.option_id] = s), t), {}) : {};
}
function Jf(e) {
  return {
    allow_answers: e.allow_answers,
    allow_user_suggested_options: e.allow_user_suggested_options,
    description: e.description,
    enforce_unique_vote: e.enforce_unique_vote,
    id: e.id,
    is_closed: e.is_closed,
    max_votes_allowed: e.max_votes_allowed,
    name: e.name,
    options: e.options,
    voting_visibility: e.voting_visibility
  };
}
function Xf(e, t = e.data) {
  const { lastActivityAt: s, maxVotedOptionIds: i, ownVotesByOptionId: n, ownAnswer: r, ...a } = t, o = [...Object.values(n), ...r ? [r] : []].sort((l, c) => Date.parse(l.created_at) - Date.parse(c.created_at));
  return {
    ...a,
    own_votes: o,
    id: e.id
  };
}
var Yf = class extends ye {
  constructor({ client: e }) {
    super(), this.pollCache = /* @__PURE__ */ new Map(), this.fromState = (t) => this.pollCache.get(t), this.registerSubscriptions = () => {
      this.hasSubscriptions || (this.addUnsubscribeFunction(this.subscribeMessageNew()), this.addUnsubscribeFunction(this.subscribePollUpdated()), this.addUnsubscribeFunction(this.subscribePollClosed()), this.addUnsubscribeFunction(this.subscribeVoteCasted()), this.addUnsubscribeFunction(this.subscribeVoteChanged()), this.addUnsubscribeFunction(this.subscribeVoteRemoved()));
    }, this.createPoll = async (t) => {
      const { poll: s } = await this.client.createPoll(t);
      return s.vote_counts_by_option || (s.vote_counts_by_option = {}), this.setOrOverwriteInCache(s), this.fromState(s.id);
    }, this.getPoll = async (t) => {
      const s = this.fromState(t);
      if (s)
        return this.client.getPoll(t).then(({ poll: n }) => this.setOrOverwriteInCache(n, !0)), s;
      const { poll: i } = await this.client.getPoll(t);
      return this.setOrOverwriteInCache(i), this.fromState(t);
    }, this.queryPolls = async (t, s = [], i = {}) => {
      const { polls: n, next: r } = await this.client.queryPolls(t, s, i);
      return {
        polls: n.map((a) => (this.setOrOverwriteInCache(a, !0), this.fromState(a.id))),
        next: r
      };
    }, this.hydratePollCache = (t, s) => {
      for (const i of t) {
        if (!i.poll) continue;
        const n = i.poll;
        this.setOrOverwriteInCache(n, s);
      }
    }, this.setOrOverwriteInCache = (t, s) => {
      if (!this.client._cacheEnabled()) return;
      const i = this.fromState(t.id);
      if (i)
        s && i.reinitializeState(t);
      else {
        const n = new Gf({
          client: this.client,
          poll: t
        });
        this.pollCache.set(n.id, n);
      }
    }, this.subscribePollUpdated = () => this.client.on("poll.updated", (t) => {
      t.poll?.id && this.fromState(t.poll.id)?.handlePollUpdated(t);
    }).unsubscribe, this.subscribePollClosed = () => this.client.on("poll.closed", (t) => {
      t.poll?.id && this.fromState(t.poll.id)?.handlePollClosed(t);
    }).unsubscribe, this.subscribeVoteCasted = () => this.client.on("poll.vote_casted", (t) => {
      t.poll?.id && this.fromState(t.poll.id)?.handleVoteCasted(t);
    }).unsubscribe, this.subscribeVoteChanged = () => this.client.on("poll.vote_changed", (t) => {
      t.poll?.id && this.fromState(t.poll.id)?.handleVoteChanged(t);
    }).unsubscribe, this.subscribeVoteRemoved = () => this.client.on("poll.vote_removed", (t) => {
      t.poll?.id && this.fromState(t.poll.id)?.handleVoteRemoved(t);
    }).unsubscribe, this.subscribeMessageNew = () => this.client.on("message.new", (t) => {
      const { message: s } = t;
      if (s) {
        const i = q(s);
        this.hydratePollCache([i]);
      }
    }).unsubscribe, this.client = e;
  }
  get data() {
    return this.pollCache;
  }
}, vr = {
  "channel.deleted": "channelDeletedHandler",
  "channel.hidden": "channelHiddenHandler",
  "channel.truncated": "channelTruncatedHandler",
  "channel.updated": "channelUpdatedHandler",
  "channel.visible": "channelVisibleHandler",
  "message.new": "newMessageHandler",
  "member.updated": "memberUpdatedHandler",
  "notification.added_to_channel": "notificationAddedToChannelHandler",
  "notification.message_new": "notificationNewMessageHandler",
  "notification.removed_from_channel": "notificationRemovedFromChannelHandler"
}, Zf = {
  abortInFlightQuery: !1,
  allowNotLoadedChannelPromotionForEvent: {
    "channel.visible": !0,
    "message.new": !0,
    "notification.added_to_channel": !0,
    "notification.message_new": !0
  },
  lockChannelOrder: !1
}, pi = { offset: 0 }, ep = (e) => (e ?? []).map(({ direction: t = 1, field: s }) => ({ [s]: t })), tp = ({ queryChannelsResponse: e, sort: t }) => {
  const s = e?.predefined_filter;
  return s ? {
    responseFilters: s.filter,
    responseSort: s.sort !== void 0 ? ep(s.sort) : t
  } : {};
}, ot = (e) => ({
  filters: e.responseFilters ?? e.filters,
  sort: e.responseSort ?? e.sort
}), Cr = (e) => {
  const t = { ...e };
  return delete t.responseFilters, delete t.responseSort, t;
}, gi = (e) => !Array.isArray(e), sp = class extends ye {
  constructor({ client: e, eventHandlerOverrides: t = {}, options: s = {}, queryChannelsOverride: i }) {
    super(), this.eventHandlers = /* @__PURE__ */ new Map(), this.eventHandlerOverrides = /* @__PURE__ */ new Map(), this.options = {}, this.stateOptions = {}, this.setChannels = (n) => {
      this.state.next((c) => {
        const { channels: d } = c, h = xa(n) ? n(d) : n;
        return d === h ? c : {
          ...c,
          channels: h
        };
      });
      const { channels: r, pagination: { filters: a, options: o, sort: l } } = this.state.getLatestValue();
      this.client.offlineDb?.executeQuerySafely((c) => c.upsertCidsForQuery({
        cids: r.map((d) => d.cid),
        filters: a,
        options: o,
        sort: l
      }), { method: "upsertCidsForQuery" });
    }, this.setEventHandlerOverrides = (n = {}) => {
      const r = Object.entries(n).reduce((a, [o, l]) => (l && (a[o] = l), a), {});
      this.eventHandlerOverrides = new Map(Object.entries(r));
    }, this.setQueryChannelsRequest = (n) => {
      this.queryChannelsRequest = n;
    }, this.setOptions = (n = {}) => {
      this.options = {
        ...Zf,
        ...n
      };
    }, this.executeChannelsQuery = async (n, r = 0) => {
      const { filters: a, sort: o, options: l, stateOptions: c } = n, { offset: d, limit: h } = {
        ...pi,
        ...l
      };
      try {
        const p = await this.queryChannelsRequest(a, o, l, {
          ...c,
          withResponse: !0
        }), u = gi(p) ? p.channels : p, m = d + (u?.length ?? 0), y = {
          ...l,
          offset: m
        }, { pagination: _ } = this.state.getLatestValue(), g = tp({
          queryChannelsResponse: gi(p) ? p : void 0,
          sort: o
        }), w = Cr(_);
        this.state.partialNext({
          channels: u,
          pagination: {
            ...w,
            hasNext: (u?.length ?? 0) >= (h ?? 1),
            isLoading: !1,
            options: y,
            ...g
          },
          initialized: !0,
          error: void 0
        }), this.client.offlineDb?.executeQuerySafely((b) => b.upsertCidsForQuery({
          cids: u.map((v) => v.cid),
          filters: _.filters,
          options: l,
          sort: _.sort
        }), { method: "upsertCidsForQuery" });
      } catch (p) {
        if (r >= Sd) {
          console.warn(p);
          const u = /* @__PURE__ */ new Error(`Maximum number of retries reached in queryChannels. Last error message is: ${p}`), m = this.state.getLatestValue(), y = this.client.offlineDb && m.channels.length > 0;
          this.state.partialNext({
            error: y ? void 0 : u,
            pagination: {
              ...m.pagination,
              isLoading: !1,
              isLoadingNext: !1
            }
          });
          return;
        }
        return await ge(Rd), this.executeChannelsQuery(n, r + 1);
      }
    }, this.queryChannels = async (n, r = [], a = {}, o = {}) => {
      const { pagination: { isLoading: l, filters: c }, initialized: d } = this.state.getLatestValue();
      if (l && !this.options.abortInFlightQuery && JSON.stringify(c) === JSON.stringify(n)) return;
      const h = {
        filters: n,
        sort: r,
        options: a,
        stateOptions: o
      };
      try {
        if (this.stateOptions = o, this.state.next((p) => ({
          ...p,
          pagination: {
            ...Cr(p.pagination),
            isLoading: !0,
            isLoadingNext: !1,
            filters: n,
            sort: r,
            options: a
          },
          error: void 0
        })), this.client.offlineDb?.getChannelsForQuery && this.client.user?.id) {
          if (!d) {
            const p = await this.client.offlineDb.getChannelsForQuery({
              userId: this.client.user.id,
              filters: n,
              options: a,
              sort: r
            });
            if (p) {
              const u = this.client.hydrateActiveChannels(p, {
                offlineMode: !0,
                skipInitialization: []
              });
              this.state.partialNext({ channels: u });
            }
          }
          if (!this.client.offlineDb.syncManager.syncStatus) {
            this.client.offlineDb.syncManager.scheduleSyncStatusChangeCallback(this.id, async () => {
              await this.executeChannelsQuery(h);
            });
            return;
          }
        }
        await this.executeChannelsQuery(h);
      } catch (p) {
        throw this.client.logger("error", p.message), this.state.next((u) => ({
          ...u,
          pagination: {
            ...u.pagination,
            isLoading: !1
          }
        })), p;
      }
    }, this.loadNext = async () => {
      const { pagination: n, initialized: r } = this.state.getLatestValue(), { filters: a, sort: o, options: l, isLoadingNext: c, hasNext: d } = n;
      if (!(!r || c || !d))
        try {
          const { offset: h, limit: p } = {
            ...pi,
            ...l
          };
          this.state.partialNext({ pagination: {
            ...n,
            isLoading: !1,
            isLoadingNext: !0
          } });
          const u = await this.queryChannelsRequest(a, o, l, this.stateOptions), m = gi(u) ? u.channels : u, { channels: y } = this.state.getLatestValue(), _ = h + (m?.length ?? 0), g = {
            ...l,
            offset: _
          };
          this.state.partialNext({
            channels: qd([...y || [], ...m], "cid"),
            pagination: {
              ...n,
              hasNext: (m?.length ?? 0) >= (p ?? 1),
              isLoading: !1,
              isLoadingNext: !1,
              options: g
            }
          });
        } catch (h) {
          throw this.client.logger("error", h.message), this.state.next((p) => ({
            ...p,
            pagination: {
              ...p.pagination,
              isLoadingNext: !1,
              isLoading: !1
            }
          })), h;
        }
    }, this.notificationAddedToChannelHandler = async (n) => {
      const { id: r, type: a, members: o } = n?.channel ?? {};
      if (!a || !this.options.allowNotLoadedChannelPromotionForEvent?.["notification.added_to_channel"]) return;
      const l = await di({
        client: this.client,
        id: r,
        members: o?.reduce((p, { user: u, user_id: m }) => {
          const y = m || u?.id;
          return y && p.push(y), p;
        }, []),
        type: a
      }), { pagination: c, channels: d } = this.state.getLatestValue();
      if (!d) return;
      const { sort: h } = ot(c);
      this.setChannels(Ft({
        channels: d,
        channelToMove: l,
        sort: h
      }));
    }, this.channelDeletedHandler = (n) => {
      const { channels: r } = this.state.getLatestValue();
      if (!r) return;
      const a = [...r], o = a.findIndex((l) => l.cid === (n.cid || n.channel?.cid));
      o < 0 || (a.splice(o, 1), this.setChannels(a));
    }, this.channelHiddenHandler = this.channelDeletedHandler, this.newMessageHandler = (n) => {
      const { pagination: r, channels: a } = this.state.getLatestValue();
      if (!a) return;
      const { filters: o, sort: l } = ot(r), c = n.channel_type, d = n.channel_id;
      if (!c || !d) return;
      const h = this.client.channel(c, d), p = a.indexOf(h), u = p >= 0, m = Is(h), y = kt(h), _ = Nt(o), g = Li(l);
      _ && y && !o.archived || _ && !y && o.archived || g && m || this.options.lockChannelOrder || !u && !this.options.allowNotLoadedChannelPromotionForEvent?.["message.new"] || this.setChannels(Ft({
        channels: a,
        channelToMove: h,
        channelToMoveIndexWithinChannels: p,
        sort: l
      }));
    }, this.notificationNewMessageHandler = async (n) => {
      const { id: r, type: a } = n?.channel ?? {};
      if (!r || !a) return;
      const o = await di({
        client: this.client,
        id: r,
        type: a
      }), { channels: l, pagination: c } = this.state.getLatestValue(), { filters: d, sort: h } = ot(c), p = Nt(d), u = kt(o);
      !l || p && u && !d.archived || p && !u && d.archived || !this.options.allowNotLoadedChannelPromotionForEvent?.["notification.message_new"] || this.setChannels(Ft({
        channels: l,
        channelToMove: o,
        sort: h
      }));
    }, this.channelVisibleHandler = async (n) => {
      const { channel_type: r, channel_id: a } = n;
      if (!r || !a) return;
      const o = await di({
        client: this.client,
        id: n.channel_id,
        type: n.channel_type
      }), { channels: l, pagination: c } = this.state.getLatestValue(), { filters: d, sort: h } = ot(c), p = Nt(d), u = kt(o);
      !l || p && u && !d.archived || p && !u && d.archived || !this.options.allowNotLoadedChannelPromotionForEvent?.["channel.visible"] || this.setChannels(Ft({
        channels: l,
        channelToMove: o,
        sort: h
      }));
    }, this.notificationRemovedFromChannelHandler = this.channelDeletedHandler, this.memberUpdatedHandler = (n) => {
      const { pagination: r, channels: a } = this.state.getLatestValue(), { filters: o, sort: l } = ot(r);
      if (!n.member?.user || n.member.user.id !== this.client.userID || !n.channel_type || !n.channel_id) return;
      const c = n.channel_type, d = n.channel_id, h = Li(l), p = Nt(o), u = Ea({
        atIndex: 0,
        sort: l,
        targetKey: "pinned_at"
      });
      if (!a || !h && !p || this.options.lockChannelOrder) return;
      const m = this.client.channel(c, d), y = a.indexOf(m), _ = y >= 0, g = Is(m), w = kt(m), b = [...a];
      if (_ && b.splice(y, 1), p && !w && o?.archived || p && w && !o?.archived) {
        this.setChannels(b);
        return;
      }
      let v = null;
      (u === 1 || u === -1 && !g) && (v = Ma({ channels: b }));
      const M = typeof v == "number" ? v + 1 : 0;
      a[M] !== m && (b.splice(M, 0, m), this.setChannels(b));
    }, this.subscriptionOrOverride = (n) => {
      const r = vr[n.type], a = this.eventHandlers.get(r), o = this.eventHandlerOverrides.get(r);
      if (o && typeof o == "function") {
        o(this.setChannels, n);
        return;
      }
      a && typeof a == "function" && a(n);
    }, this.registerSubscriptions = () => {
      if (!this.hasSubscriptions)
        for (const n of Object.keys(vr)) this.addUnsubscribeFunction(this.client.on(n, this.subscriptionOrOverride).unsubscribe);
    }, this.id = `channel-manager-${$()}`, this.client = e, this.state = new A({
      channels: [],
      pagination: {
        isLoading: !1,
        isLoadingNext: !1,
        hasNext: !1,
        filters: {},
        sort: {},
        options: pi
      },
      initialized: !1,
      error: void 0
    }), this.setEventHandlerOverrides(t), this.setOptions(s), this.queryChannelsRequest = i ?? ((...n) => this.client.queryChannels(...n)), this.eventHandlers = new Map(Object.entries({
      channelDeletedHandler: this.channelDeletedHandler,
      channelHiddenHandler: this.channelHiddenHandler,
      channelVisibleHandler: this.channelVisibleHandler,
      memberUpdatedHandler: this.memberUpdatedHandler,
      newMessageHandler: this.newMessageHandler,
      notificationAddedToChannelHandler: this.notificationAddedToChannelHandler,
      notificationNewMessageHandler: this.notificationNewMessageHandler,
      notificationRemovedFromChannelHandler: this.notificationRemovedFromChannelHandler
    }));
  }
}, jt = 3e3, ip = { durations: {
  error: jt,
  info: jt,
  success: jt,
  warning: jt
} }, np = class {
  constructor(e = {}) {
    this.timeouts = /* @__PURE__ */ new Map(), this.store = new A({ notifications: [] }), this.config = We(ip, e);
  }
  get notifications() {
    return this.store.getLatestValue().notifications;
  }
  get warning() {
    return this.notifications.filter((e) => e.severity === "warning");
  }
  get error() {
    return this.notifications.filter((e) => e.severity === "error");
  }
  get info() {
    return this.notifications.filter((e) => e.severity === "info");
  }
  get success() {
    return this.notifications.filter((e) => e.severity === "success");
  }
  add({ message: e, origin: t, options: s = {} }) {
    const i = $(), n = Date.now(), r = s.severity, a = s.duration ?? (r ? this.config.durations[r] : void 0), o = {
      id: i,
      message: e,
      origin: t,
      type: s?.type,
      severity: r,
      createdAt: n,
      duration: a,
      actions: s.actions,
      metadata: s.metadata,
      tags: s.tags,
      originalError: s.originalError
    }, l = [...this.store.getLatestValue().notifications, o];
    return this.store.partialNext({ notifications: this.config.sortComparator ? [...l].sort(this.config.sortComparator) : l }), i;
  }
  addError({ message: e, origin: t, options: s }) {
    return this.add({
      message: e,
      origin: t,
      options: {
        ...s,
        severity: "error"
      }
    });
  }
  addWarning({ message: e, origin: t, options: s }) {
    return this.add({
      message: e,
      origin: t,
      options: {
        ...s,
        severity: "warning"
      }
    });
  }
  addInfo({ message: e, origin: t, options: s }) {
    return this.add({
      message: e,
      origin: t,
      options: {
        ...s,
        severity: "info"
      }
    });
  }
  addSuccess({ message: e, origin: t, options: s }) {
    return this.add({
      message: e,
      origin: t,
      options: {
        ...s,
        severity: "success"
      }
    });
  }
  clearTimeout(e) {
    const t = this.timeouts.get(e);
    t && (clearTimeout(t), this.timeouts.delete(e));
  }
  startTimeout(e, t) {
    const s = this.store.getLatestValue().notifications.find((r) => r.id === e), i = t ?? s?.duration;
    if (!s || !i) return;
    this.clearTimeout(e);
    const n = setTimeout(() => {
      this.remove(e);
    }, i);
    this.timeouts.set(e, n);
  }
  remove(e) {
    this.clearTimeout(e), this.store.partialNext({ notifications: this.store.getLatestValue().notifications.filter((t) => t.id !== e) });
  }
  clear() {
    this.timeouts.forEach((e) => clearTimeout(e)), this.timeouts.clear(), this.store.partialNext({ notifications: [] });
  }
}, Os = 6e4, ks = 60 * Os, Ns = 24 * ks, oo = 7 * Ns, mi = {
  minute: {
    lower: Os,
    upper: ks
  },
  hour: {
    lower: ks,
    upper: Ns
  },
  day: {
    lower: Ns,
    upper: oo
  }
}, lo = 2 * oo, rp = class {
  constructor({ reminder: e, config: t }) {
    this.timeout = null, this.stopRefreshBoundaryMs = lo, this.getRefreshIntervalLength = () => {
      if (!this.reminder.remindAt) return null;
      const s = Math.abs(Fs(this.reminder.remindAt.getTime()));
      let i;
      return s === 0 ? i = Os : s < mi.minute.lower ? i = s : s <= mi.minute.upper ? i = Os : s <= mi.hour.upper ? i = ks : i = Ns, i;
    }, this.init = () => {
      if (!this.reminder.remindAt) return null;
      const s = this.getRefreshIntervalLength();
      if (s === null) return null;
      if (this.reminder.remindAt?.getTime() + this.stopRefreshBoundaryMs - Date.now() <= 0) {
        this.timeout = null;
        return;
      }
      this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.reminder.refreshTimeLeft(), this.init();
      }, s);
    }, this.clear = () => {
      this.timeout && (clearInterval(this.timeout), this.timeout = null);
    }, this.reminder = e, typeof t?.stopRefreshBoundaryMs == "number" && (this.stopRefreshBoundaryMs = t.stopRefreshBoundaryMs);
  }
}, Fs = (e) => e - (/* @__PURE__ */ new Date()).getTime(), co = class Bi {
  constructor({ data: t, config: s }) {
    this.setState = (i) => {
      this.state.next((n) => {
        const r = {
          ...n,
          ...Bi.toStateValue(i)
        };
        return r.remind_at && (r.timeLeftMs = Fs(r.remind_at.getTime())), r;
      }), i.remind_at ? this.initTimer() : i.remind_at || this.clearTimer();
    }, this.refreshTimeLeft = () => {
      this.remindAt && this.state.partialNext({ timeLeftMs: Fs(this.remindAt.getTime()) });
    }, this.initTimer = () => {
      this.timer.init();
    }, this.clearTimer = () => {
      this.timer.clear();
    }, this.state = new A(Bi.toStateValue(t)), this.timer = new rp({
      reminder: this,
      config: s
    }), this.initTimer();
  }
  get id() {
    return this.state.getLatestValue().message_id;
  }
  get remindAt() {
    return this.state.getLatestValue().remind_at;
  }
  get timeLeftMs() {
    return this.state.getLatestValue().timeLeftMs;
  }
};
co.toStateValue = (e) => ({
  ...e,
  created_at: new Date(e.created_at),
  message: e.message || null,
  remind_at: e.remind_at ? new Date(e.remind_at) : null,
  timeLeftMs: e.remind_at ? Fs(new Date(e.remind_at).getTime()) : null,
  updated_at: new Date(e.updated_at),
  user: e.user || null
});
var ap = co, qi = 6e4, Yt = 60 * qi, op = 24 * Yt, Sr = {
  scheduledOffsetsMs: [
    2 * qi,
    30 * qi,
    Yt,
    2 * Yt,
    8 * Yt,
    op
  ],
  stopTimerRefreshBoundaryMs: lo
}, lp = (e) => e.message.match("already has reminder created for this message_id"), cp = (e) => e.message.match("reminder does not exist"), ho = class Zt extends ye {
  constructor({ client: t, config: s }) {
    super(), this.upsertToState = ({ data: i, overwrite: n = !0 }) => {
      if (!this.client._cacheEnabled()) return;
      const r = this.getFromState(i.message_id);
      if (r)
        n && r.setState(i);
      else {
        const a = new ap({
          data: i,
          config: { stopRefreshBoundaryMs: this.stopTimerRefreshBoundaryMs }
        });
        this.state.partialNext({ reminders: new Map(this.reminders.set(i.message_id, a)) });
      }
      return r;
    }, this.removeFromState = (i) => {
      const n = this.getFromState(i);
      if (!n) return;
      n.clearTimer();
      const r = this.reminders;
      r.delete(i), this.state.partialNext({ reminders: new Map(r) });
    }, this.hydrateState = (i) => {
      i.forEach(({ reminder: n }) => {
        n && this.upsertToState({ data: n });
      });
    }, this.initTimers = () => {
      this.reminders.forEach((i) => i.initTimer());
    }, this.clearTimers = () => {
      this.reminders.forEach((i) => i.clearTimer());
    }, this.registerSubscriptions = () => {
      this.hasSubscriptions || (this.addUnsubscribeFunction(this.subscribeReminderCreated()), this.addUnsubscribeFunction(this.subscribeReminderUpdated()), this.addUnsubscribeFunction(this.subscribeReminderDeleted()), this.addUnsubscribeFunction(this.subscribeNotificationReminderDue()), this.addUnsubscribeFunction(this.subscribeMessageDeleted()), this.addUnsubscribeFunction(this.subscribeMessageUndeleted()), this.addUnsubscribeFunction(this.subscribePaginatorStateUpdated()), this.addUnsubscribeFunction(this.subscribeConfigStateUpdated()));
    }, this.subscribeReminderCreated = () => this.client.on("reminder.created", (i) => {
      if (!Zt.isReminderWsEventPayload(i)) return;
      const { reminder: n } = i;
      this.upsertToState({ data: n });
    }).unsubscribe, this.subscribeReminderUpdated = () => this.client.on("reminder.updated", (i) => {
      if (!Zt.isReminderWsEventPayload(i)) return;
      const { reminder: n } = i;
      this.upsertToState({ data: n });
    }).unsubscribe, this.subscribeReminderDeleted = () => this.client.on("reminder.deleted", (i) => {
      Zt.isReminderWsEventPayload(i) && this.removeFromState(i.message_id);
    }).unsubscribe, this.subscribeMessageDeleted = () => this.client.on("message.deleted", (i) => {
      i.message?.id && this.removeFromState(i.message.id);
    }).unsubscribe, this.subscribeMessageUndeleted = () => this.client.on("message.undeleted", (i) => {
      i.message?.reminder && this.upsertToState({ data: i.message.reminder });
    }).unsubscribe, this.subscribeNotificationReminderDue = () => this.client.on("notification.reminder_due", () => null).unsubscribe, this.subscribePaginatorStateUpdated = () => this.paginator.state.subscribeWithSelector(({ items: i }) => [i], ([i]) => {
      if (i)
        for (const n of i) this.upsertToState({ data: n });
    }), this.subscribeConfigStateUpdated = () => this.configState.subscribeWithSelector(({ stopTimerRefreshBoundaryMs: i }) => ({ stopTimerRefreshBoundaryMs: i }), ({ stopTimerRefreshBoundaryMs: i }, n) => {
      typeof i == "number" && i !== n?.stopTimerRefreshBoundaryMs && this.reminders.forEach((r) => {
        r.timer && (r.timer.stopRefreshBoundaryMs = i);
      });
    }), this.upsertReminder = async (i) => {
      const { messageId: n } = i;
      if (this.getFromState(n)) try {
        return await this.updateReminder(i);
      } catch (r) {
        if (cp(r)) return await this.createReminder(i);
        throw r;
      }
      else try {
        return await this.createReminder(i);
      } catch (r) {
        if (lp(r)) return await this.updateReminder(i);
        throw r;
      }
    }, this.createReminder = async (i) => {
      const { reminder: n } = await this.client.createReminder(i);
      return this.upsertToState({
        data: n,
        overwrite: !1
      });
    }, this.updateReminder = async (i) => {
      const { reminder: n } = await this.client.updateReminder(i);
      return this.upsertToState({ data: n });
    }, this.deleteReminder = async (i) => {
      await this.client.deleteReminder(i), this.removeFromState(i);
    }, this.queryNextReminders = async () => {
      await this.paginator.next();
    }, this.queryPreviousReminders = async () => {
      await this.paginator.prev();
    }, this.client = t, this.configState = new A({
      scheduledOffsetsMs: s?.scheduledOffsetsMs ?? Sr.scheduledOffsetsMs,
      stopTimerRefreshBoundaryMs: s?.stopTimerRefreshBoundaryMs ?? Sr.stopTimerRefreshBoundaryMs
    }), this.state = new A({ reminders: /* @__PURE__ */ new Map() }), this.paginator = new Kh(t);
  }
  updateConfig(t) {
    typeof t.stopTimerRefreshBoundaryMs == "number" && t.stopTimerRefreshBoundaryMs !== this.stopTimerRefreshBoundaryMs && this.reminders.forEach((s) => {
      s.timer.stopRefreshBoundaryMs = t?.stopTimerRefreshBoundaryMs;
    }), this.configState.partialNext(t);
  }
  get stopTimerRefreshBoundaryMs() {
    return this.configState.getLatestValue().stopTimerRefreshBoundaryMs;
  }
  get scheduledOffsetsMs() {
    return this.configState.getLatestValue().scheduledOffsetsMs;
  }
  get reminders() {
    return this.state.getLatestValue().reminders;
  }
  getFromState(t) {
    return this.reminders.get(t);
  }
};
ho.isReminderWsEventPayload = (e) => !!e.reminder && (e.type.startsWith("reminder.") || e.type === "notification.reminder_due");
var dp = ho, hp = (e) => {
  if (!e) return {};
  const t = e.indexOf(":");
  return t <= 0 || t === e.length - 1 ? {} : {
    channelId: e.slice(t + 1),
    channelType: e.slice(0, t)
  };
}, up = class {
  constructor(e, t) {
    if (!e) throw new Error("Size must be greater than 0");
    this.keys = [], this.size = e, this.map = /* @__PURE__ */ new Map(), this.dispose = t?.dispose ?? null;
  }
  add(e, t) {
    if (this.keys.indexOf(e) > -1) this.keys.splice(this.keys.indexOf(e), 1);
    else if (this.keys.length >= this.size) {
      const s = this.keys.shift();
      if (s) {
        const i = this.peek(s);
        i && this.dispose?.(s, i), this.map.delete(s);
      }
    }
    this.keys.push(e), this.map.set(e, t);
  }
  peek(e) {
    return this.map.get(e);
  }
  get(e) {
    const t = this.peek(e);
    return t && this.keys.indexOf(e) !== this.size - 1 && (this.keys.splice(this.keys.indexOf(e), 1), this.keys.push(e)), t;
  }
  clear() {
    this.dispose && this.map.forEach((e, t) => this.dispose?.(t, e)), this.map.clear(), this.keys = [];
  }
};
function yi(e) {
  return typeof e == "string" || e instanceof String;
}
var fp = class Me {
  constructor(t, s, i) {
    this.preventThreadCleanup = !1, this._wsPromiseSettled = !0, this._wsConnectId = 0, this.nextRequestAbortController = null, this._messageComposerSetupState = new A({ setupFunction: null }), this._getConnectionID = () => this.wsConnection?.connectionID || this.wsFallback?.connectionID, this._hasConnectionID = () => !!this._getConnectionID(), this.setMessageComposerSetupFunction = (r) => {
      this._messageComposerSetupState.partialNext({ setupFunction: r });
    }, this.connectUser = async (r, a) => {
      if (!r.id) throw new Error('The "id" field on the user is missing');
      if (this.userID === r.id && this.setUserPromise)
        return console.warn("Consecutive calls to connectUser is detected, ideally you should only call this function once in your app."), this.setUserPromise;
      if (this.userID) throw new Error("Use client.disconnect() before trying to connect as a different user. connectUser was called twice.");
      (this._isUsingServerAuth() || this.node) && !this.options.allowServerSideConnect && console.warn('Please do not use connectUser server side. connectUser impacts MAU and concurrent connection usage and thus your bill. If you have a valid use-case, add "allowServerSideConnect: true" to the client options to disable this warning.'), this.userID = r.id, this.anonymous = !1;
      const o = this._setToken(r, a);
      this._setUser(r);
      const l = this.openConnection(), c = Promise.all([o, l]).then((d) => d[1]);
      this.setUserPromise = c;
      try {
        return await c;
      } catch (d) {
        throw this.setUserPromise === c && this.userID === r.id && (this.persistUserOnConnectionFailure ? this.closeConnection() : this.disconnectUser()), d;
      }
    }, this.setUser = this.connectUser, this._setToken = (r, a) => this.tokenManager.setTokenOrProvider(a, r), this.closeConnection = async (r) => (this.cleaningIntervalRef != null && (clearInterval(this.cleaningIntervalRef), this.cleaningIntervalRef = void 0), await Promise.all([this.wsConnection?.disconnect(r), this.wsFallback?.disconnect(r)]), this.offlineDb?.executeQuerySafely(async (a) => {
      this.userID && await a.upsertUserSyncStatus({
        userId: this.userID,
        lastSyncedAt: (/* @__PURE__ */ new Date()).toString()
      });
    }, { method: "upsertUserSyncStatus" }), Promise.resolve()), this.createChannelManager = ({ eventHandlerOverrides: r = {}, options: a = {}, queryChannelsOverride: o }) => new sp({
      client: this,
      eventHandlerOverrides: r,
      options: a,
      queryChannelsOverride: o
    }), this.openConnection = () => {
      if (!this.userID) throw Error("User is not set on client, use client.connectUser or client.connectAnonymousUser instead");
      if (this.wsConnection?.isConnecting && this.wsPromise)
        return this.logger("info", "client:openConnection() - connection already in progress", { tags: ["connection", "client"] }), this.wsPromise;
      if ((this.wsConnection?.isHealthy || this.wsFallback?.isHealthy()) && this._hasConnectionID()) {
        this.logger("info", "client:openConnection() - openConnection called twice, healthy connection already exists", { tags: ["connection", "client"] });
        return;
      }
      this.clientID = `${this.userID}--${He()}`;
      const r = this._bindWsPromise(this.connect());
      return this._startCleaning(), r;
    }, this._rejectPendingWsPromise = (r) => {
      this._wsPromiseSettled || (this._wsConnectId += 1, this._wsPromiseSettled = !0, this.wsPromise?.catch(() => {
      }), this._rejectWsPromise?.(r));
    }, this._bindWsPromise = (r) => {
      const a = ++this._wsConnectId;
      let o = this.wsPromise;
      return (this._wsPromiseSettled || !o) && (this._wsPromiseSettled = !1, o = new Promise((l, c) => {
        this._resolveWsPromise = l, this._rejectWsPromise = c;
      }), this.wsPromise = o), r.then((l) => {
        a === this._wsConnectId && (this._wsPromiseSettled = !0, this._resolveWsPromise?.(l));
      }, (l) => {
        a === this._wsConnectId && (this._wsPromiseSettled = !0, this._rejectWsPromise?.(l));
      }), o;
    }, this._setupConnection = this.openConnection, this._normalizeDate = (r) => {
      if (r instanceof Date && (r = r.toISOString()), r === "") throw new Error("Don't pass blank string for since, use null instead if resetting the token revoke");
      return r;
    }, this.disconnectUser = (r) => {
      this.logger("info", "client:disconnect() - Disconnecting the client", { tags: ["connection", "client"] }), delete this.user, delete this._user, delete this.userID, this.anonymous = !1, this._rejectPendingWsPromise(/* @__PURE__ */ new Error("Connection was closed because disconnectUser() was called")), this.wsPromise = null;
      const a = this.closeConnection(r);
      for (const o of Object.values(this.activeChannels)) o._disconnect();
      return this.activeChannels = {}, this.state = new fr({ client: this }), this.threads.resetState(), this.uploadManager.reset(), this.messageComposerCache.clear(), a.finally(() => {
        this.tokenManager.reset();
      }).catch((o) => console.error(o)), a;
    }, this.disconnect = this.disconnectUser, this.connectAnonymousUser = () => {
      (this._isUsingServerAuth() || this.node) && !this.options.allowServerSideConnect && console.warn('Please do not use connectUser server side. connectUser impacts MAU and concurrent connection usage and thus your bill. If you have a valid use-case, add "allowServerSideConnect: true" to the client options to disable this warning.'), this.anonymous = !0, this.userID = He();
      const r = {
        id: this.userID,
        anon: !0
      };
      return this._setToken(r, ""), this._setUser(r), this._setupConnection();
    }, this.setAnonymousUser = this.connectAnonymousUser, this.doAxiosRequest = async (r, a, o, l = {}) => {
      await this.tokenManager.tokenReady();
      const c = this._enrichAxiosOptions(l);
      try {
        let d;
        switch (this._logApiRequest(r, a, o, c), r) {
          case "get":
            d = await this.axiosInstance.get(a, c);
            break;
          case "delete":
            d = await this.axiosInstance.delete(a, c);
            break;
          case "post":
            d = await this.axiosInstance.post(a, o, c);
            break;
          case "postForm":
            d = await this.axiosInstance.postForm(a, o, c);
            break;
          case "put":
            d = await this.axiosInstance.put(a, o, c);
            break;
          case "patch":
            d = await this.axiosInstance.patch(a, o, c);
            break;
          case "options":
            d = await this.axiosInstance.options(a, c);
            break;
          default:
            throw new Error("Invalid request type");
        }
        return this._logApiResponse(r, a, d), this.consecutiveFailures = 0, this.handleResponse(d);
      } catch (d) {
        if (d.client_request_id = c.headers?.["x-client-request-id"], L.isCancel(d)) throw d;
        if (this._logApiError(r, a, d), this.consecutiveFailures += 1, d.response)
          return d.response.data.code === ct.TOKEN_EXPIRED && !this.tokenManager.isStatic() ? (this.consecutiveFailures > 1 && await ge(As(this.consecutiveFailures)), this.tokenManager.loadToken(), await this.doAxiosRequest(r, a, o, l)) : this.handleResponse(d.response);
        throw d;
      }
    }, this.dispatchEvent = (r) => {
      r.received_at || (r.received_at = /* @__PURE__ */ new Date());
      const a = this._handleClientEvent(r), o = r.cid, l = o ? this.activeChannels[o] : void 0;
      l && l._handleChannelEvent(r), this._callClientListeners(r), l && l._callChannelListeners(r), a.forEach((c) => c()), this.offlineDb?.executeQuerySafely((c) => c.handleEvent({ event: r }), { method: `handleEvent;${r.type}` });
    }, this._updateMemberWatcherReferences = (r) => {
      const a = this.state.userChannelReferences[r.id] || {};
      for (const o in a) {
        const l = this.activeChannels[o];
        l?.state && (l.state.members[r.id] && (l.state.members[r.id].user = r), l.state.watchers[r.id] && (l.state.watchers[r.id] = r), l.state.read[r.id] && (l.state.read[r.id].user = r));
      }
    }, this._updateUserReferences = this._updateMemberWatcherReferences, this._updateUserMessageReferences = (r) => {
      const a = this.state.userChannelReferences[r.id] || {};
      for (const o in a) {
        const l = this.activeChannels[o];
        l && l.state?.updateUserMessages(r);
      }
    }, this._deleteUserMessageReference = (r, a = !1, o) => {
      const l = this.state.userChannelReferences[r.id] || {};
      for (const c in l) {
        const d = this.activeChannels[c];
        d && d.state?.deleteUserMessages(r, a, o);
      }
    }, this._handleUserEvent = (r) => {
      if (r.user) {
        if (r.type === "user.presence.changed" || r.type === "user.updated") {
          if (r.user.id === this.userID) {
            const a = { ...this.user }, o = { ...this._user };
            for (const l in this.user) {
              if (l in r.user || Td(l)) continue;
              const c = l;
              delete a[c], delete o[c];
            }
            for (const l in o) {
              const c = l;
              c in r.user && (o[c] = r.user[c]);
            }
            this._user = o, this.user = {
              ...a,
              ...r.user
            };
          }
          this.state.updateUser(r.user), this._updateMemberWatcherReferences(r.user);
        }
        r.type === "user.updated" && this._updateUserMessageReferences(r.user), r.type === "user.deleted" && r.user.deleted_at && (r.mark_messages_deleted || r.hard_delete) && this._deleteUserMessageReference(r.user, r.hard_delete, r.user.deleted_at ? new Date(r.user.deleted_at) : null);
      }
    }, this._callClientListeners = (r) => {
      const a = [...this.listeners.all ?? [], ...this.listeners[r.type] ?? []];
      for (const o of a) ya(o, r, this.logger);
    }, this.recoverState = async () => {
      this.logger("info", `client:recoverState() - Start of recoverState with connectionID ${this._getConnectionID()}`, { tags: ["connection"] });
      const r = Object.keys(this.activeChannels);
      r.length && this.recoverStateOnReconnect ? (this.logger("info", `client:recoverState() - Start the querying of ${r.length} channels`, { tags: ["connection", "client"] }), await this.queryChannels({ cid: { $in: r } }, { last_message_at: -1 }, { limit: 30 }), this.logger("info", "client:recoverState() - Querying channels finished", { tags: ["connection", "client"] }), this.dispatchEvent({ type: "connection.recovered" })) : this.dispatchEvent({ type: "connection.recovered" }), this._wsPromiseSettled && (this.wsPromise = Promise.resolve()), this.setUserPromise = Promise.resolve();
    }, this.getChannelByMembers = (r, a) => {
      const o = (a.members ?? []).map((h) => typeof h == "string" ? h : h.user_id ?? ""), l = o.sort().join(","), c = nn(r, o);
      if (!c) throw Error("Please specify atleast one member when creating unique conversation");
      for (const h in this.activeChannels) {
        const p = this.activeChannels[h];
        if (!p.disconnected && (h === c || h.indexOf(`${r}:!members-`) === 0 && Object.keys(p.state.members).sort().join(",") === l))
          return p;
      }
      const d = new De(this, r, void 0, a);
      return this._cacheEnabled() && (this.activeChannels[c] = d), d;
    }, this.getChannelById = (r, a, o) => {
      if (typeof a == "string" && ~a.indexOf(":")) throw Error(`Invalid channel id ${a}, can't contain the : character`);
      const l = `${r}:${a}`;
      if (l in this.activeChannels && this.activeChannels[l] && !this.activeChannels[l].disconnected) {
        const d = this.activeChannels[l];
        return Object.keys(o).length > 0 && (d.data = {
          ...d.data,
          ...o
        }, d._data = {
          ...d._data,
          ...o
        }), d;
      }
      const c = new De(this, r, a, o);
      return this._cacheEnabled() && (this.activeChannels[c.cid] = c), c;
    }, this.updateUsers = this.upsertUsers, this.updateUser = this.upsertUser, this._unblockMessage = this.unblockMessage, this.markAllRead = this.markChannelsRead, this.getUserAgent = () => {
      if (this.userAgent) return this.userAgent;
      if (!this.cachedUserAgent) {
        const r = "9.54.0", { name: a, version: o } = this.sdkIdentifier ?? {}, { name: l, version: c } = this.appIdentifier ?? {}, { os: d, model: h } = this.deviceIdentifier ?? {}, p = a ? `stream-chat-${a}-v${o}-llc-v${r}` : `stream-chat-js-v${r}-${this.node ? "node" : "browser"}`;
        this.cachedUserAgent = [p, ...Object.entries({
          app: l,
          app_version: c,
          os: d,
          device_model: h,
          client_bundle: "browser-esm"
        }).filter(([, u]) => u && u.length > 0).map(([u, m]) => `${u}=${m}`)].join("|");
      }
      return this.cachedUserAgent;
    }, this._isUsingServerAuth = () => !!this.secret, this._cacheEnabled = () => !this._isUsingServerAuth() || !this.options.disableCache, this._buildWSPayload = (r) => JSON.stringify({
      user_id: this.userID,
      user_details: this._user,
      device: this.options.device,
      client_request_id: r
    }), this.key = t, this.listeners = {}, this.state = new fr({ client: this }), this.mutedChannels = [], this.mutedUsers = [], this.blockedUsers = new A({ userIds: [] }), this.moderation = new Ff(this), this.notifications = i?.notifications ?? new np(), this.uploadManager = new bh(this), s && yi(s) && (this.secret = s);
    const n = i || (s && !yi(s) ? s : {});
    this.browser = typeof n.browser < "u" ? n.browser : typeof window < "u", this.node = !this.browser, this.options = {
      timeout: 3e3,
      withCredentials: !1,
      warmUp: !1,
      recoverStateOnReconnect: !0,
      disableCache: !1,
      isLocalUnreadCountEnabled: !1,
      wsUrlParams: new URLSearchParams({}),
      ...n
    }, this.node && !this.options.httpsAgent && (this.options.httpsAgent = new gd.default.Agent({
      keepAlive: !0,
      keepAliveMsecs: 3e3
    })), this.axiosInstance = L.create(this.options), this.setBaseURL(this.options.baseURL || "https://chat.stream-io-api.com"), typeof process < "u" && "env" in process && process.env.STREAM_LOCAL_TEST_RUN && this.setBaseURL("http://localhost:3030"), typeof process < "u" && "env" in process && process.env.STREAM_LOCAL_TEST_HOST && this.setBaseURL("http://" + process.env.STREAM_LOCAL_TEST_HOST), this.wsConnection = null, this.wsPromise = null, this.setUserPromise = null, this.activeChannels = {}, this.configs = {}, this.anonymous = !1, this.persistUserOnConnectionFailure = this.options?.persistUserOnConnectionFailure, this.tokenManager = new kf(this.secret), this.consecutiveFailures = 0, this.insightMetrics = new vf(), this.defaultWSTimeoutWithFallback = 6e3, this.defaultWSTimeout = 15e3, this.axiosInstance.defaults.paramsSerializer = kd, this.logger = Ai(n.logger) ? n.logger : ma, this.recoverStateOnReconnect = this.options.recoverStateOnReconnect, this.threads = new qf({ client: this }), this.polls = new Yf({ client: this }), this.reminders = new dp({ client: this }), this.messageDeliveryReporter = new wf({ client: this }), this.messageComposerCache = new up(64);
  }
  static getInstance(t, s, i) {
    return Me._instance || (typeof s == "string" ? Me._instance = new Me(t, s, i) : Me._instance = new Me(t, s)), Me._instance;
  }
  setOfflineDBApi(t) {
    this.offlineDb || (this.offlineDb = t);
  }
  devToken(t) {
    return Tf(t);
  }
  getAuthType() {
    return this.anonymous ? "anonymous" : "jwt";
  }
  setBaseURL(t) {
    this.baseURL = t, this.wsBaseURL = this.baseURL.replace("http", "ws").replace(":3030", ":8800");
  }
  _setUser(t) {
    this.user = t, this.userID = t.id, this._user = { ...t };
  }
  async updateAppSettings(t) {
    const s = t.apn_config;
    return s?.p12_cert && (t = {
      ...t,
      apn_config: {
        ...s,
        p12_cert: Buffer.from(s.p12_cert).toString("base64")
      }
    }), await this.patch(this.baseURL + "/app", t);
  }
  async revokeTokens(t) {
    return await this.updateAppSettings({ revoke_tokens_issued_before: this._normalizeDate(t) });
  }
  async revokeUserToken(t, s) {
    return await this.revokeUsersToken([t], s);
  }
  async revokeUsersToken(t, s) {
    s === void 0 ? s = (/* @__PURE__ */ new Date()).toISOString() : s = this._normalizeDate(s);
    const i = [];
    for (const n of t) i.push({
      id: n,
      set: { revoke_tokens_issued_before: s }
    });
    return await this.partialUpdateUsers(i);
  }
  async getAppSettings() {
    return this.appSettingsPromise = this.get(this.baseURL + "/app"), await this.appSettingsPromise;
  }
  async testPushSettings(t, s = {}) {
    return await this.post(this.baseURL + "/check_push", {
      user_id: t,
      ...s.messageID ? { message_id: s.messageID } : {},
      ...s.apnTemplate ? { apn_template: s.apnTemplate } : {},
      ...s.firebaseTemplate ? { firebase_template: s.firebaseTemplate } : {},
      ...s.firebaseDataTemplate ? { firebase_data_template: s.firebaseDataTemplate } : {},
      ...s.skipDevices ? { skip_devices: !0 } : {},
      ...s.pushProviderName ? { push_provider_name: s.pushProviderName } : {},
      ...s.pushProviderType ? { push_provider_type: s.pushProviderType } : {}
    });
  }
  async testSQSSettings(t = {}) {
    return await this.post(this.baseURL + "/check_sqs", t);
  }
  async testSNSSettings(t = {}) {
    return await this.post(this.baseURL + "/check_sns", t);
  }
  async setGuestUser(t) {
    let s;
    this.anonymous = !0;
    try {
      s = await this.post(this.baseURL + "/guest", { user: t });
    } catch (l) {
      throw this.anonymous = !1, l;
    }
    this.anonymous = !1;
    const { created_at: i, updated_at: n, last_active: r, online: a, ...o } = s.user;
    return await this.connectUser(o, s.access_token);
  }
  createToken(t, s, i) {
    if (this.secret == null) throw Error("tokens can only be created server-side using the API Secret");
    const n = {};
    return s && (n.exp = s), i && (n.iat = i), io(this.secret, t, n, {});
  }
  on(t, s) {
    const i = s ? t : "all", n = s || t;
    return i in this.listeners || (this.listeners[i] = []), this.logger("info", `Attaching listener for ${i} event`, { tags: ["event", "client"] }), this.listeners[i].push(n), { unsubscribe: () => {
      this.logger("info", `Removing listener for ${i} event`, { tags: ["event", "client"] }), this.listeners[i] = this.listeners[i].filter((r) => r !== n);
    } };
  }
  off(t, s) {
    const i = s ? t : "all", n = s || t;
    i in this.listeners || (this.listeners[i] = []), this.logger("info", `Removing listener for ${i} event`, { tags: ["event", "client"] }), this.listeners[i] = this.listeners[i].filter((r) => r !== n);
  }
  _logApiRequest(t, s, i, n) {
    this.logger("info", `client: ${t} - Request - ${s}`, {
      tags: [
        "api",
        "api_request",
        "client"
      ],
      url: s,
      payload: i,
      config: n
    });
  }
  _logApiResponse(t, s, i) {
    this.logger("info", `client:${t} - Response - url: ${s} > status ${i.status}`, {
      tags: [
        "api",
        "api_response",
        "client"
      ],
      url: s,
      response: i
    });
  }
  _logApiError(t, s, i) {
    this.logger("error", `client:${t} - Error - url: ${s}`, {
      tags: [
        "api",
        "api_response",
        "client"
      ],
      url: s,
      error: i
    });
  }
  get(t, s, i) {
    return this.doAxiosRequest("get", t, null, {
      params: s,
      config: i
    });
  }
  put(t, s) {
    return this.doAxiosRequest("put", t, s);
  }
  post(t, s, i) {
    return this.doAxiosRequest("post", t, s, { config: i });
  }
  patch(t, s) {
    return this.doAxiosRequest("patch", t, s);
  }
  delete(t, s) {
    return this.doAxiosRequest("delete", t, null, { params: s });
  }
  sendFile(t, s, i, n, r, a) {
    const o = Ad(s, i, n || "multipart/form-data");
    return r != null && o.append("user", JSON.stringify(r)), this.doAxiosRequest("postForm", t, o, {
      headers: o.getHeaders ? o.getHeaders() : {},
      config: {
        timeout: 0,
        maxContentLength: 1 / 0,
        maxBodyLength: 1 / 0,
        ...a
      }
    });
  }
  errorFromResponse(t) {
    return new cf(typeof t.data.code < "u" ? `StreamChat error code ${t.data.code}: ${t.data.message}` : `StreamChat error HTTP code: ${t.status}`, {
      code: t.data.code ?? null,
      response: t,
      status: t.status
    });
  }
  handleResponse(t) {
    const s = t.data;
    if ($h(t)) throw this.errorFromResponse(t);
    return s;
  }
  _handleClientEvent(t) {
    const s = this, i = [];
    if (this.logger("info", `client:_handleClientEvent - Received event of type { ${t.type} }`, {
      tags: ["event", "client"],
      event: t
    }), (t.type === "user.presence.changed" || t.type === "user.updated" || t.type === "user.deleted") && this._handleUserEvent(t), t.type === "user.messages.deleted" && !t.cid && t.user && this._deleteUserMessageReference(t.user, t.hard_delete, t.created_at ? new Date(t.created_at) : null), t.type === "health.check" && t.me && (s.user = t.me, s.state.updateUser(t.me), s.mutedChannels = t.me.channel_mutes, s.mutedUsers = t.me.mutes, s.blockedUsers.partialNext({ userIds: t.me.blocked_user_ids ?? [] })), t.channel && t.type === "notification.message_new") {
      const { channel: n } = t;
      this._addChannelConfig(n);
    }
    if (t.type === "notification.channel_mutes_updated" && t.me?.channel_mutes && (this.mutedChannels = t.me.channel_mutes), t.type === "notification.mutes_updated" && t.me?.mutes && (this.mutedUsers = t.me.mutes), t.type === "notification.mark_read" && t.unread_channels === 0 && Object.keys(this.activeChannels).forEach((n) => this.activeChannels[n].state.unreadCount = 0), (t.type === "channel.deleted" || t.type === "notification.channel_deleted") && t.cid) {
      const { cid: n } = t;
      s.state.deleteAllChannelReference(n), this.activeChannels[t.cid]?._disconnect(), i.push(() => {
        n && delete this.activeChannels[n];
      });
    }
    if (t.type === "notification.removed_from_channel" && t.cid) {
      const { cid: n } = t;
      this.activeChannels[n]?._disconnect(), i.push(() => {
        delete this.activeChannels[n];
      });
    }
    return i;
  }
  _muteStatus(t) {
    let s;
    for (let i = 0; i < this.mutedChannels.length; i++) {
      const n = this.mutedChannels[i];
      if (n.channel?.cid === t) {
        s = {
          muted: n.expires ? new Date(n.expires).getTime() > (/* @__PURE__ */ new Date()).getTime() : !0,
          createdAt: n.created_at ? new Date(n.created_at) : /* @__PURE__ */ new Date(),
          expiresAt: n.expires ? new Date(n.expires) : null
        };
        break;
      }
    }
    return s || {
      muted: !1,
      createdAt: null,
      expiresAt: null
    };
  }
  async connect() {
    if (!this.userID || !this._user) throw Error("Call connectUser or connectAnonymousUser before starting the connection");
    if (!this.wsBaseURL) throw Error("Websocket base url not set");
    if (!this.clientID) throw Error("clientID is not set");
    !this.wsConnection && (this.options.warmUp || this.options.enableInsights) && this._sayHi(), this.options.wsConnection && this.node ? (this.options.wsConnection.setClient(this), this.wsConnection = this.options.wsConnection) : this.wsConnection = new Mf({ client: this });
    try {
      return this.wsFallback ? await this.wsFallback.connect() : await this.wsConnection.connect(this.options.enableWSFallback ? this.defaultWSTimeoutWithFallback : this.defaultWSTimeout);
    } catch (t) {
      if (this.options.enableWSFallback && Vh(t) && Od())
        return this.logger("info", "client:connect() - WS failed, fallback to longpoll", { tags: ["connection", "client"] }), this.dispatchEvent({
          type: "transport.changed",
          mode: "longpoll"
        }), this.wsConnection._destroyCurrentWSConnection(), this.wsConnection.disconnect().then(), this.wsFallback = new Nf({ client: this }), await this.wsFallback.connect();
      throw t;
    }
  }
  _sayHi() {
    const t = He(), s = { headers: { "x-client-request-id": t } };
    this.doAxiosRequest("get", this.baseURL + "/hi", null, s).catch((i) => {
      this.options.enableInsights && Fi("http_hi_failed", {
        api_key: this.key,
        err: i,
        client_request_id: t
      });
    });
  }
  async queryUsers(t, s = [], i = {}, n = {}) {
    const r = { presence: !1 };
    await this.wsPromise, this._hasConnectionID() || (r.presence = !1);
    const a = await this.get(this.baseURL + "/users", { payload: {
      filter_conditions: t,
      sort: O(s),
      ...r,
      ...i
    } }, n);
    return this.state.updateUsers(a.users), a;
  }
  async queryUserGroups(t = {}) {
    return await this.get(this.baseURL + "/usergroups", t);
  }
  async createUserGroup(t) {
    return await this.post(this.baseURL + "/usergroups", t);
  }
  async getUserGroup(t, s = {}) {
    return await this.get(`${this.baseURL}/usergroups/${encodeURIComponent(t)}`, s);
  }
  async searchUserGroups(t, s = {}) {
    return await this.get(this.baseURL + "/usergroups/search", t, s);
  }
  async updateUserGroup(t, s) {
    return await this.put(`${this.baseURL}/usergroups/${encodeURIComponent(t)}`, s);
  }
  async deleteUserGroup(t, s = {}) {
    return await this.delete(`${this.baseURL}/usergroups/${encodeURIComponent(t)}`, s);
  }
  async addUserGroupMembers(t, s) {
    return await this.post(`${this.baseURL}/usergroups/${encodeURIComponent(t)}/members`, s);
  }
  async removeUserGroupMembers(t, s) {
    return await this.post(`${this.baseURL}/usergroups/${encodeURIComponent(t)}/members/delete`, s);
  }
  async queryBannedUsers(t = {}, s = [], i = {}) {
    return await this.get(this.baseURL + "/query_banned_users", { payload: {
      filter_conditions: t,
      sort: O(s),
      ...i
    } });
  }
  async queryFutureChannelBans(t = {}) {
    return await this.get(this.baseURL + "/query_future_channel_bans", { payload: t });
  }
  async queryMessageFlags(t = {}, s = {}) {
    return await this.get(this.baseURL + "/moderation/flags/message", { payload: {
      filter_conditions: t,
      ...s
    } });
  }
  async queryChannelsRequestWithResponse(t, s = [], i = {}, n = {}) {
    const r = {
      state: !0,
      watch: !0,
      presence: !1
    };
    await this.wsPromise, this._hasConnectionID() || (r.watch = !1);
    const { predefined_filter: a, filter_values: o, sort_values: l, ...c } = i, d = O(s), h = a ? {
      predefined_filter: a,
      filter_values: o,
      sort_values: l,
      sort: d,
      ...r,
      ...c
    } : {
      filter_conditions: t,
      sort: d,
      ...r,
      ...c
    };
    return await this.post(this.baseURL + "/channels", h, n);
  }
  async queryChannelsRequest(t, s = [], i = {}) {
    return (await this.queryChannelsRequestWithResponse(t, s, i)).channels;
  }
  async queryChannels(t, s = [], i = {}, n = {}) {
    const r = await this.queryChannelsRequestWithResponse(t, s, i, { signal: n.signal }), a = r.channels;
    this.dispatchEvent({
      type: "channels.queried",
      queriedChannels: {
        channels: a,
        isLatestMessageSet: !0
      }
    }), a?.length && this.offlineDb?.upsertChannels && await this.offlineDb.upsertChannels({
      channels: a,
      isLatestMessagesSet: !0
    });
    const o = this.hydrateActiveChannels(a, n, i);
    return n.withResponse ? {
      ...r,
      channels: o
    } : o;
  }
  async queryReactions(t, s, i = [], n = {}) {
    const r = {
      filter: s,
      sort: O(i),
      ...n
    };
    if (this.offlineDb?.getReactions && !n.next) try {
      const a = await this.offlineDb.getReactions({
        messageId: t,
        filters: s,
        sort: i,
        limit: n.limit
      });
      a && this.dispatchEvent({
        type: "offline_reactions.queried",
        offlineReactions: a
      });
    } catch (a) {
      this.logger("warn", "An error has occurred while querying offline reactions", { error: a });
    }
    return await this.wsPromise, await this.post(this.baseURL + "/messages/" + encodeURIComponent(t) + "/reactions", r);
  }
  hydrateActiveChannels(t = [], s = {}, i) {
    const { skipInitialization: n, offlineMode: r = !1 } = s, a = [];
    for (const o of t) {
      this._addChannelConfig(o.channel);
      const l = this.channel(o.channel.type, o.channel.id);
      l.data = o.channel, l.offlineMode = r, l.initialized = !r, l.push_preferences = o.push_preferences;
      let c, d = [];
      if (n === void 0) {
        const { messageSet: h, filteredMessageIds: p } = l._initializeState(o, "latest");
        d = p, c = h;
      } else if (!n.includes(o.channel.id)) {
        l.state.clearMessages();
        const { messageSet: h, filteredMessageIds: p } = l._initializeState(o, "latest");
        d = p, c = h;
      }
      c && (c.pagination = {
        ...c.pagination,
        ...Ra({
          parentSet: c,
          requestedPageSize: i?.message_limit || md,
          returnedPage: o.messages,
          filteredReturnedPage: o.messages.filter((h) => !d.includes(h.id)),
          logger: this.logger
        })
      }, this.polls.hydratePollCache(o.messages, !0), this.reminders.hydrateState(o.messages)), l.messageComposer.initStateFromChannelResponse(o), l.cooldownTimer.refresh(), a.push(l);
    }
    return this.syncDeliveredCandidates(a), a;
  }
  async search(t, s, i = {}, n = {}) {
    if (i.offset && i.next) throw Error("Cannot specify offset with next");
    const r = {
      filter_conditions: t,
      ...i,
      sort: i.sort ? O(i.sort) : void 0
    };
    if (typeof s == "string") r.query = s;
    else if (typeof s == "object") r.message_filter_conditions = s;
    else throw Error(`Invalid type ${typeof s} for query parameter`);
    return await this.wsPromise, await this.get(this.baseURL + "/search", { payload: r }, n);
  }
  setLocalDevice(t) {
    if (this.wsConnection?.isConnecting && this.wsPromise || (this.wsConnection?.isHealthy || this.wsFallback?.isHealthy()) && this._hasConnectionID()) throw new Error("you can only set device before opening a websocket connection");
    this.options.device = t;
  }
  async addDevice(t, s, i, n) {
    return await this.post(this.baseURL + "/devices", {
      id: t,
      push_provider: s,
      ...i != null ? { user_id: i } : {},
      ...n != null ? { push_provider_name: n } : {}
    });
  }
  async getDevices(t) {
    return await this.get(this.baseURL + "/devices", t ? { user_id: t } : {});
  }
  async getUnreadCount(t) {
    return await this.get(this.baseURL + "/unread", t ? { user_id: t } : {});
  }
  async getUnreadCountBatch(t) {
    return await this.post(this.baseURL + "/unread_batch", { user_ids: t });
  }
  async setPushPreferences(t) {
    return await this.post(this.baseURL + "/push_preferences", { preferences: t });
  }
  async removeDevice(t, s) {
    return await this.delete(this.baseURL + "/devices", {
      id: t,
      ...s ? { user_id: s } : {}
    });
  }
  getRateLimits(t) {
    const { serverSide: s, web: i, android: n, ios: r, endpoints: a } = t || {};
    return this.get(this.baseURL + "/rate_limits", {
      server_side: s,
      web: i,
      android: n,
      ios: r,
      endpoints: a ? a.join(",") : void 0
    });
  }
  async getHookEvents(t) {
    const s = t && t.length > 0 ? { product: t.join(",") } : {};
    return await this.get(this.baseURL + "/hook/events", s);
  }
  _addChannelConfig({ cid: t, config: s }) {
    this._cacheEnabled() && (this.configs[t] = s);
  }
  channel(t, s, i = {}) {
    if (!this.userID && !this._isUsingServerAuth()) throw Error("Call connectUser or connectAnonymousUser before creating a channel");
    if (~t.indexOf(":")) throw new Error(`Invalid channel group ${t}, can't contain the : character`);
    return s && typeof s == "object" ? this.getChannelByMembers(t, s) : !s && typeof i == "object" && i.members?.length ? this.getChannelByMembers(t, i) : s ? this.getChannelById(t, s, i) : new De(this, t, void 0, i);
  }
  async partialUpdateUser(t) {
    return await this.partialUpdateUsers([t]);
  }
  async upsertUsers(t) {
    const s = {};
    for (const i of t) {
      if (!i.id) throw Error("User ID is required when updating a user");
      s[i.id] = i;
    }
    return await this.post(this.baseURL + "/users", { users: s });
  }
  upsertUser(t) {
    return this.upsertUsers([t]);
  }
  async partialUpdateUsers(t) {
    for (const s of t) if (!s.id) throw Error("User ID is required when updating a user");
    return await this.patch(this.baseURL + "/users", { users: t });
  }
  async deleteUser(t, s) {
    return await this.delete(this.baseURL + `/users/${encodeURIComponent(t)}`, s);
  }
  async restoreUsers(t) {
    return await this.post(this.baseURL + "/users/restore", { user_ids: t });
  }
  async reactivateUser(t, s) {
    return await this.post(this.baseURL + `/users/${encodeURIComponent(t)}/reactivate`, { ...s });
  }
  async reactivateUsers(t, s) {
    return await this.post(this.baseURL + "/users/reactivate", {
      user_ids: t,
      ...s
    });
  }
  async deactivateUser(t, s) {
    return await this.post(this.baseURL + `/users/${encodeURIComponent(t)}/deactivate`, { ...s });
  }
  async deactivateUsers(t, s) {
    return await this.post(this.baseURL + "/users/deactivate", {
      user_ids: t,
      ...s
    });
  }
  async exportUser(t, s) {
    return await this.get(this.baseURL + `/users/${encodeURIComponent(t)}/export`, { ...s });
  }
  async banUser(t, s) {
    return await this.post(this.baseURL + "/moderation/ban", {
      target_user_id: t,
      ...s
    });
  }
  async unbanUser(t, s) {
    return await this.delete(this.baseURL + "/moderation/ban", {
      target_user_id: t,
      ...s
    });
  }
  async shadowBan(t, s) {
    return await this.banUser(t, {
      shadow: !0,
      ...s
    });
  }
  async removeShadowBan(t, s) {
    return await this.unbanUser(t, {
      shadow: !0,
      ...s
    });
  }
  async blockUser(t, s) {
    const i = await this.post(this.baseURL + "/users/block", {
      blocked_user_id: t,
      ...s ? { user_id: s } : {}
    });
    return this._cacheEnabled() && this.blockedUsers.next(({ userIds: n }) => ({ userIds: n.concat(t) })), i;
  }
  async getBlockedUsers(t) {
    const s = await this.get(this.baseURL + "/users/block", { ...t ? { user_id: t } : {} });
    return this._cacheEnabled() && this.blockedUsers.partialNext({ userIds: s.blocks.map(({ blocked_user_id: i }) => i) }), s;
  }
  async unBlockUser(t, s) {
    const i = await this.post(this.baseURL + "/users/unblock", {
      blocked_user_id: t,
      ...s ? { user_id: s } : {}
    });
    return this._cacheEnabled() && this.blockedUsers.next(({ userIds: n }) => ({ userIds: n.filter((r) => r !== t) })), i;
  }
  async getSharedLocations() {
    return await this.get(this.baseURL + "/users/live_locations");
  }
  async muteUser(t, s, i = {}) {
    return await this.post(this.baseURL + "/moderation/mute", {
      target_id: t,
      ...s ? { user_id: s } : {},
      ...i
    });
  }
  async unmuteUser(t, s) {
    return await this.post(this.baseURL + "/moderation/unmute", {
      target_id: t,
      ...s ? { user_id: s } : {}
    });
  }
  userMuteStatus(t) {
    if (!this.user || !this.wsPromise) throw new Error("Make sure to await connectUser() first.");
    for (let s = 0; s < this.mutedUsers.length; s += 1) if (this.mutedUsers[s].target.id === t) return !0;
    return !1;
  }
  async flagMessage(t, s = {}) {
    return await this.post(this.baseURL + "/moderation/flag", {
      target_message_id: t,
      ...s
    });
  }
  async flagUser(t, s = {}) {
    return await this.post(this.baseURL + "/moderation/flag", {
      target_user_id: t,
      ...s
    });
  }
  async unflagMessage(t, s = {}) {
    return await this.post(this.baseURL + "/moderation/unflag", {
      target_message_id: t,
      ...s
    });
  }
  async unflagUser(t, s = {}) {
    return await this.post(this.baseURL + "/moderation/unflag", {
      target_user_id: t,
      ...s
    });
  }
  async _queryFlags(t = {}, s = {}) {
    return await this.post(this.baseURL + "/moderation/flags", {
      filter_conditions: t,
      ...s
    });
  }
  async _queryFlagReports(t = {}, s = {}) {
    return await this.post(this.baseURL + "/moderation/reports", {
      filter_conditions: t,
      ...s
    });
  }
  async _reviewFlagReport(t, s, i = {}) {
    return await this.patch(this.baseURL + `/moderation/reports/${encodeURIComponent(t)}`, {
      review_result: s,
      ...i
    });
  }
  async unblockMessage(t, s = {}) {
    return await this.post(this.baseURL + "/moderation/unblock_message", {
      target_message_id: t,
      ...s
    });
  }
  async markChannelsRead(t = {}) {
    await this.post(this.baseURL + "/channels/read", { ...t });
  }
  createCommand(t) {
    return this.post(this.baseURL + "/commands", t);
  }
  getCommand(t) {
    return this.get(this.baseURL + `/commands/${encodeURIComponent(t)}`);
  }
  updateCommand(t, s) {
    return this.put(this.baseURL + `/commands/${encodeURIComponent(t)}`, s);
  }
  deleteCommand(t) {
    return this.delete(this.baseURL + `/commands/${encodeURIComponent(t)}`);
  }
  listCommands() {
    return this.get(this.baseURL + "/commands");
  }
  createChannelType(t) {
    const s = Object.assign({}, { commands: ["all"] }, t);
    return this.post(this.baseURL + "/channeltypes", s);
  }
  getChannelType(t) {
    return this.get(this.baseURL + `/channeltypes/${encodeURIComponent(t)}`);
  }
  updateChannelType(t, s) {
    return this.put(this.baseURL + `/channeltypes/${encodeURIComponent(t)}`, s);
  }
  deleteChannelType(t) {
    return this.delete(this.baseURL + `/channeltypes/${encodeURIComponent(t)}`);
  }
  listChannelTypes() {
    return this.get(this.baseURL + "/channeltypes");
  }
  async translateMessage(t, s) {
    return await this.post(this.baseURL + `/messages/${encodeURIComponent(t)}/translate`, { language: s });
  }
  async translate(t, s, i) {
    return await this.post(this.baseURL + "/translate", {
      text: t,
      source_language: i,
      destination_language: s
    });
  }
  _normalizeExpiration(t) {
    let s = null;
    if (typeof t == "number") {
      const i = /* @__PURE__ */ new Date();
      i.setSeconds(i.getSeconds() + t), s = i.toISOString();
    } else yi(t) ? s = t : t instanceof Date && (s = t.toISOString());
    return s;
  }
  _validateAndGetMessageId(t, s) {
    let i;
    if (typeof t == "string") i = t;
    else {
      if (!t.id) throw Error(s);
      i = t.id;
    }
    return i;
  }
  pinMessage(t, s, i, n) {
    const r = this._validateAndGetMessageId(t, "Please specify the message id when calling unpinMessage");
    return this.partialUpdateMessage(r, { set: {
      pinned: !0,
      pin_expires: this._normalizeExpiration(s),
      pinned_at: this._normalizeExpiration(n)
    } }, i);
  }
  unpinMessage(t, s) {
    const i = this._validateAndGetMessageId(t, "Please specify the message id when calling unpinMessage");
    return this.partialUpdateMessage(i, { set: { pinned: !1 } }, s);
  }
  async updateMessage(t, s, i) {
    if (!t.id) throw Error("Please specify the message.id when calling updateMessage");
    const n = t.id;
    try {
      if (this.offlineDb) return await this.offlineDb.queueTask({ task: {
        ...hp(t.cid),
        messageId: n,
        payload: [
          t,
          s,
          i
        ],
        type: "update-message"
      } });
    } catch (r) {
      this.logger("error", "offlineDb:updateMessage", {
        tags: ["channel", "offlineDb"],
        error: r
      });
    }
    return await this._updateMessage(t, s, i);
  }
  async _updateMessage(t, s, i) {
    if (!t.id) throw Error("Please specify the message.id when calling updateMessage");
    const n = ba({
      client: this,
      message: va(t)
    });
    return typeof s == "string" ? n.user_id = s : typeof s?.id == "string" && (n.user_id = s.id), await this.post(this.baseURL + `/messages/${encodeURIComponent(t.id)}`, {
      message: n,
      ...i
    });
  }
  async partialUpdateMessage(t, s, i, n) {
    if (!t) throw Error("Please specify the message.id when calling partialUpdateMessage");
    let r;
    return typeof i == "string" ? r = { id: i } : typeof i?.id == "string" && (r = { id: i.id }), await this.put(this.baseURL + `/messages/${encodeURIComponent(t)}`, {
      ...s,
      ...n,
      user: r
    });
  }
  async ephemeralUpdateMessage(t, s, i, n) {
    if (!t) throw Error("messageId is required");
    let r;
    return typeof i == "string" ? r = { id: i } : typeof i?.id == "string" && (r = { id: i.id }), await this.patch(`${this.baseURL}/messages/${encodeURIComponent(t)}/ephemeral`, {
      ...s,
      ...n,
      user: r
    });
  }
  async deleteMessage(t, s) {
    let i = {};
    typeof s == "boolean" ? i = s ? { hardDelete: !0 } : {} : s?.deleteForMe ? i = { deleteForMe: !0 } : s?.hardDelete && (i = { hardDelete: !0 });
    try {
      if (this.offlineDb)
        return i.hardDelete ? await this.offlineDb.hardDeleteMessage({ id: t }) : await this.offlineDb.softDeleteMessage({
          id: t,
          deleteForMe: i.deleteForMe
        }), await this.offlineDb.queueTask({ task: {
          messageId: t,
          payload: [t, i],
          type: "delete-message"
        } });
    } catch (n) {
      this.logger("error", "offlineDb:deleteMessage", {
        tags: ["channel", "offlineDb"],
        error: n
      });
    }
    return this._deleteMessage(t, i);
  }
  async _deleteMessage(t, s) {
    const { deleteForMe: i, hardDelete: n } = typeof s == "boolean" ? { hardDelete: s } : s ?? {};
    let r = {};
    n && (r = { hard: !0 }), i && (r = {
      ...r,
      delete_for_me: !0
    });
    const a = await this.delete(this.baseURL + `/messages/${encodeURIComponent(t)}`, r);
    return i && (a.message.deleted_for_me = !0, a.message.type = "deleted"), a;
  }
  async undeleteMessage(t, s) {
    return await this.post(this.baseURL + `/messages/${encodeURIComponent(t)}/undelete`, { undeleted_by: s });
  }
  async getMessage(t, s) {
    return await this.get(this.baseURL + `/messages/${encodeURIComponent(t)}`, { ...s });
  }
  async queryThreads(t = {}) {
    const s = {
      limit: 10,
      participant_limit: 10,
      reply_limit: 3,
      watch: !0,
      ...t
    }, i = { ...s };
    s.filter && Object.keys(s.filter).length > 0 && (i.filter = s.filter), s.sort && (Array.isArray(s.sort) ? s.sort.length > 0 : Object.keys(s.sort).length > 0) && (i.sort = O(s.sort));
    const n = await this.post(`${this.baseURL}/threads`, i), r = n.threads.map((a) => a.parent_message);
    return this.polls.hydratePollCache(r), {
      threads: n.threads.map((a) => new ze({
        client: this,
        threadData: a
      })),
      next: n.next
    };
  }
  async getThread(t, s = {}) {
    if (!t) throw new Error("Please specify the messageId when calling getThread");
    const i = {
      participant_limit: 100,
      reply_limit: 3,
      watch: !0,
      ...s
    }, n = await this.get(`${this.baseURL}/threads/${encodeURIComponent(t)}`, i);
    return new ze({
      client: this,
      threadData: n.thread
    });
  }
  async partialUpdateThread(t, s) {
    if (!t) throw Error("Please specify the message id when calling partialUpdateThread");
    const i = [
      "created_at",
      "id",
      "last_message_at",
      "type",
      "updated_at",
      "user",
      "reply_count",
      "participants",
      "channel",
      "custom"
    ];
    for (const n in {
      ...s.set,
      ...s.unset
    }) if (i.includes(n)) throw Error(`You cannot set ${n} field on Thread object. ${n} is reserved for server-side use. Please omit ${n} from your set object.`);
    return await this.patch(`${this.baseURL}/threads/${encodeURIComponent(t)}`, s);
  }
  setUserAgent(t) {
    this.userAgent = t;
  }
  _enrichAxiosOptions(t = {
    params: {},
    headers: {},
    config: {}
  }) {
    const s = this._getToken(), i = s ? { Authorization: s } : void 0;
    let n = null;
    this.nextRequestAbortController !== null && (n = this.nextRequestAbortController.signal, this.nextRequestAbortController = null), t.headers?.["x-client-request-id"] || (t.headers = {
      ...t.headers,
      "x-client-request-id": He()
    });
    const { params: r, headers: a, ...o } = this.options.axiosRequestConfig || {}, l = t.config?.signal ?? o.signal ?? n;
    return {
      params: {
        user_id: this.userID,
        connection_id: this._getConnectionID(),
        api_key: this.key,
        ...t.params,
        ...r || {}
      },
      headers: {
        ...i,
        "stream-auth-type": this.getAuthType(),
        "X-Stream-Client": this.getUserAgent(),
        ...t.headers,
        ...a || {}
      },
      ...t.config,
      ...o,
      ...l ? { signal: l } : {}
    };
  }
  _getToken() {
    return !this.tokenManager || this.anonymous ? null : this.tokenManager.getToken();
  }
  _startCleaning() {
    const t = this;
    this.cleaningIntervalRef == null && (this.cleaningIntervalRef = setInterval(() => {
      for (const s of Object.values(t.activeChannels)) s.clean();
    }, 500));
  }
  verifyWebhook(t, s) {
    return !!this.secret && no(t, s, this.secret);
  }
  verifyAndParseWebhook(t, s) {
    if (!this.secret) throw new Ge("cannot verify webhook signature without an API secret on the client");
    return Df(t, s, this.secret);
  }
  parseSqs(t) {
    return Pf(t);
  }
  parseSns(t) {
    return Of(t);
  }
  getPermission(t) {
    return this.get(`${this.baseURL}/permissions/${encodeURIComponent(t)}`);
  }
  createPermission(t) {
    return this.post(`${this.baseURL}/permissions`, { ...t });
  }
  updatePermission(t, s) {
    return this.put(`${this.baseURL}/permissions/${encodeURIComponent(t)}`, { ...s });
  }
  deletePermission(t) {
    return this.delete(`${this.baseURL}/permissions/${encodeURIComponent(t)}`);
  }
  listPermissions() {
    return this.get(`${this.baseURL}/permissions`);
  }
  createRole(t) {
    return this.post(`${this.baseURL}/roles`, { name: t });
  }
  listRoles() {
    return this.get(`${this.baseURL}/roles`);
  }
  searchRoles(t, s = {}) {
    return this.get(`${this.baseURL}/roles/search`, t, s);
  }
  deleteRole(t) {
    return this.delete(`${this.baseURL}/roles/${encodeURIComponent(t)}`);
  }
  sync(t, s, i = {}) {
    return this.post(`${this.baseURL}/sync`, {
      channel_cids: t,
      last_sync_at: s,
      ...i
    });
  }
  async sendUserCustomEvent(t, s) {
    return await this.post(`${this.baseURL}/users/${encodeURIComponent(t)}/event`, { event: s });
  }
  createBlockList(t) {
    return this.post(`${this.baseURL}/blocklists`, t);
  }
  listBlockLists(t) {
    return this.get(`${this.baseURL}/blocklists`, t);
  }
  getBlockList(t, s) {
    return this.get(`${this.baseURL}/blocklists/${encodeURIComponent(t)}`, s);
  }
  updateBlockList(t, s) {
    return this.put(`${this.baseURL}/blocklists/${encodeURIComponent(t)}`, s);
  }
  deleteBlockList(t, s) {
    return this.delete(`${this.baseURL}/blocklists/${encodeURIComponent(t)}`, s);
  }
  exportChannels(t, s = {}) {
    const i = {
      channels: t,
      ...s
    };
    return this.post(`${this.baseURL}/export_channels`, i);
  }
  exportUsers(t) {
    return this.post(`${this.baseURL}/export/users`, t);
  }
  exportChannel(t, s) {
    return this.exportChannels([t], s);
  }
  getExportChannelStatus(t) {
    return this.get(`${this.baseURL}/export_channels/${encodeURIComponent(t)}`);
  }
  campaign(t, s) {
    return t && typeof t == "object" ? new Wn(this, null, t) : new Wn(this, t, s);
  }
  channelBatchUpdater() {
    return new pd(this);
  }
  segment(t, s, i) {
    return typeof s == "string" ? new mr(this, t, s, i) : new mr(this, t, null, s);
  }
  validateServerSideAuth() {
    if (!this.secret) throw new Error("This feature can be used server-side only. Please initialize the client with a secret to use this feature.");
  }
  createSegment(t, s, i) {
    this.validateServerSideAuth();
    const n = {
      id: s,
      type: t,
      ...i
    };
    return this.post(this.baseURL + "/segments", n);
  }
  createUserSegment(t, s) {
    return this.validateServerSideAuth(), this.createSegment("user", t, s);
  }
  createChannelSegment(t, s) {
    return this.validateServerSideAuth(), this.createSegment("channel", t, s);
  }
  getSegment(t) {
    return this.validateServerSideAuth(), this.get(this.baseURL + `/segments/${encodeURIComponent(t)}`);
  }
  updateSegment(t, s) {
    return this.validateServerSideAuth(), this.put(this.baseURL + `/segments/${encodeURIComponent(t)}`, s);
  }
  addSegmentTargets(t, s) {
    this.validateServerSideAuth();
    const i = { target_ids: s };
    return this.post(this.baseURL + `/segments/${encodeURIComponent(t)}/addtargets`, i);
  }
  querySegmentTargets(t, s = {}, i = [], n = {}) {
    return this.validateServerSideAuth(), this.post(this.baseURL + `/segments/${encodeURIComponent(t)}/targets/query`, {
      filter: s || {},
      sort: i || [],
      ...n
    });
  }
  removeSegmentTargets(t, s) {
    this.validateServerSideAuth();
    const i = { target_ids: s };
    return this.post(this.baseURL + `/segments/${encodeURIComponent(t)}/deletetargets`, i);
  }
  querySegments(t, s, i = {}) {
    return this.validateServerSideAuth(), this.post(this.baseURL + "/segments/query", {
      filter: t,
      sort: s,
      ...i
    });
  }
  deleteSegment(t) {
    return this.validateServerSideAuth(), this.delete(this.baseURL + `/segments/${encodeURIComponent(t)}`);
  }
  segmentTargetExists(t, s) {
    return this.validateServerSideAuth(), this.get(this.baseURL + `/segments/${encodeURIComponent(t)}/target/${encodeURIComponent(s)}`);
  }
  createCampaign(t) {
    return this.validateServerSideAuth(), this.post(this.baseURL + "/campaigns", { ...t });
  }
  getCampaign(t, s) {
    return this.validateServerSideAuth(), this.get(this.baseURL + `/campaigns/${encodeURIComponent(t)}`, { ...s?.users });
  }
  startCampaign(t, s) {
    return this.validateServerSideAuth(), this.post(this.baseURL + `/campaigns/${encodeURIComponent(t)}/start`, {
      scheduled_for: s?.scheduledFor,
      stop_at: s?.stopAt
    });
  }
  async queryCampaigns(t, s, i) {
    return this.validateServerSideAuth(), await this.post(this.baseURL + "/campaigns/query", {
      filter: t,
      sort: s,
      ...i || {}
    });
  }
  updateCampaign(t, s) {
    return this.validateServerSideAuth(), this.put(this.baseURL + `/campaigns/${encodeURIComponent(t)}`, s);
  }
  deleteCampaign(t) {
    return this.validateServerSideAuth(), this.delete(this.baseURL + `/campaigns/${encodeURIComponent(t)}`);
  }
  stopCampaign(t) {
    return this.validateServerSideAuth(), this.post(this.baseURL + `/campaigns/${encodeURIComponent(t)}/stop`);
  }
  enrichURL(t) {
    return this.get(this.baseURL + "/og", { url: t });
  }
  getTask(t) {
    return this.get(`${this.baseURL}/tasks/${encodeURIComponent(t)}`);
  }
  async deleteChannels(t, s = {}) {
    return await this.post(this.baseURL + "/channels/delete", {
      cids: t,
      ...s
    });
  }
  async deleteUsers(t, s = {}) {
    if (typeof s.user < "u" && ![
      "soft",
      "hard",
      "pruning"
    ].includes(s.user)) throw new Error("Invalid delete user options. user must be one of [soft hard pruning]");
    if (typeof s.conversations < "u" && !["soft", "hard"].includes(s.conversations)) throw new Error("Invalid delete user options. conversations must be one of [soft hard]");
    if (typeof s.messages < "u" && ![
      "soft",
      "hard",
      "pruning"
    ].includes(s.messages)) throw new Error("Invalid delete user options. messages must be one of [soft hard pruning]");
    return await this.post(this.baseURL + "/users/delete", {
      user_ids: t,
      ...s
    });
  }
  async _createImportURL(t) {
    return await this.post(this.baseURL + "/import_urls", { filename: t });
  }
  async _createImport(t, s = { mode: "upsert" }) {
    return await this.post(this.baseURL + "/imports", {
      path: t,
      ...s
    });
  }
  async _getImport(t) {
    return await this.get(this.baseURL + `/imports/${encodeURIComponent(t)}`);
  }
  async _listImports(t) {
    return await this.get(this.baseURL + "/imports", t);
  }
  async upsertPushProvider(t) {
    return await this.post(this.baseURL + "/push_providers", { push_provider: t });
  }
  async deletePushProvider({ type: t, name: s }) {
    return await this.delete(this.baseURL + `/push_providers/${encodeURIComponent(t)}/${encodeURIComponent(s)}`);
  }
  async listPushProviders() {
    return await this.get(this.baseURL + "/push_providers");
  }
  createAbortControllerForNextRequest() {
    return this.nextRequestAbortController = new AbortController();
  }
  async commitMessage(t) {
    return await this.post(this.baseURL + `/messages/${encodeURIComponent(t)}/commit`);
  }
  async createPoll(t, s) {
    return await this.post(this.baseURL + "/polls", {
      ...t,
      ...s ? { user_id: s } : {}
    });
  }
  async getPoll(t, s) {
    return await this.get(this.baseURL + `/polls/${encodeURIComponent(t)}`, s ? { user_id: s } : {});
  }
  async updatePoll(t, s) {
    return await this.put(this.baseURL + "/polls", {
      ...t,
      ...s ? { user_id: s } : {}
    });
  }
  async partialUpdatePoll(t, s, i) {
    return await this.patch(this.baseURL + `/polls/${encodeURIComponent(t)}`, {
      ...s,
      ...i ? { user_id: i } : {}
    });
  }
  async deletePoll(t, s) {
    return await this.delete(this.baseURL + `/polls/${encodeURIComponent(t)}`, { ...s ? { user_id: s } : {} });
  }
  closePoll(t, s) {
    return this.partialUpdatePoll(t, { set: { is_closed: !0 } }, s);
  }
  async createPollOption(t, s, i) {
    return await this.post(this.baseURL + `/polls/${encodeURIComponent(t)}/options`, {
      ...s,
      ...i ? { user_id: i } : {}
    });
  }
  async getPollOption(t, s, i) {
    return await this.get(this.baseURL + `/polls/${encodeURIComponent(t)}/options/${encodeURIComponent(s)}`, i ? { user_id: i } : {});
  }
  async updatePollOption(t, s, i) {
    return await this.put(this.baseURL + `/polls/${encodeURIComponent(t)}/options`, {
      ...s,
      ...i ? { user_id: i } : {}
    });
  }
  async deletePollOption(t, s, i) {
    return await this.delete(this.baseURL + `/polls/${encodeURIComponent(t)}/options/${encodeURIComponent(s)}`, i ? { user_id: i } : {});
  }
  async castPollVote(t, s, i, n) {
    return await this.post(this.baseURL + `/messages/${encodeURIComponent(t)}/polls/${encodeURIComponent(s)}/vote`, {
      vote: i,
      ...n ? { user_id: n } : {}
    });
  }
  addPollAnswer(t, s, i, n) {
    return this.castPollVote(t, s, { answer_text: i }, n);
  }
  async removePollVote(t, s, i, n) {
    return await this.delete(this.baseURL + `/messages/${encodeURIComponent(t)}/polls/${encodeURIComponent(s)}/vote/${encodeURIComponent(i)}`, { ...n ? { user_id: n } : {} });
  }
  async queryPolls(t = {}, s = [], i = {}, n) {
    const r = n ? `?user_id=${n}` : "";
    return await this.post(this.baseURL + `/polls/query${r}`, {
      filter: t,
      sort: O(s),
      ...i
    });
  }
  async queryPollVotes(t, s = {}, i = [], n = {}, r) {
    const a = r ? `?user_id=${r}` : "";
    return await this.post(this.baseURL + `/polls/${encodeURIComponent(t)}/votes${a}`, {
      filter: s,
      sort: O(i),
      ...n
    });
  }
  async queryPollAnswers(t, s = {}, i = [], n = {}, r) {
    const a = r ? `?user_id=${r}` : "";
    return await this.post(this.baseURL + `/polls/${encodeURIComponent(t)}/votes${a}`, {
      filter: {
        ...s,
        is_answer: !0
      },
      sort: O(i),
      ...n
    });
  }
  async queryMessageHistory(t = {}, s = [], i = {}) {
    return await this.post(this.baseURL + "/messages/history", {
      filter: t,
      sort: O(s),
      ...i
    });
  }
  async updateFlags(t, s, i = {}) {
    return await this.post(this.baseURL + "/automod/v1/moderation/update_flags", {
      message_ids: t,
      reviewed_by: s,
      ...i
    });
  }
  async queryDrafts(t = {}) {
    const s = {
      ...t,
      sort: t.sort ? O(t.sort) : void 0
    };
    return await this.post(this.baseURL + "/drafts/query", s);
  }
  async createReminder({ messageId: t, ...s }) {
    return await this.post(`${this.baseURL}/messages/${t}/reminders`, s);
  }
  async updateReminder({ messageId: t, ...s }) {
    return await this.patch(`${this.baseURL}/messages/${t}/reminders`, s);
  }
  async deleteReminder(t, s) {
    return await this.delete(`${this.baseURL}/messages/${t}/reminders`, s ? { user_id: s } : {});
  }
  async queryReminders({ filter: t, sort: s, ...i } = {}) {
    return await this.post(`${this.baseURL}/reminders/query`, {
      filter: t,
      sort: s && O(s),
      ...i
    });
  }
  async queryTeamUsageStats(t = {}) {
    return await this.post(`${this.baseURL}/stats/team_usage`, t);
  }
  async updateLocation(t) {
    return await this.put(this.baseURL + "/users/live_locations", t);
  }
  uploadFile(t, s, i, n, r) {
    return this.sendFile(`${this.baseURL}/uploads/file`, t, s, i, n, r);
  }
  uploadImage(t, s, i, n, r) {
    return this.sendFile(`${this.baseURL}/uploads/image`, t, s, i, n, r);
  }
  deleteFile(t) {
    return this.delete(`${this.baseURL}/uploads/file`, { url: t });
  }
  deleteImage(t) {
    return this.delete(`${this.baseURL}/uploads/image`, { url: t });
  }
  async markChannelsDelivered(t) {
    if (t?.latest_delivered_messages?.length)
      return await this.post(this.baseURL + "/channels/delivered", t);
  }
  syncDeliveredCandidates(t) {
    this.messageDeliveryReporter.syncDeliveredCandidates(t);
  }
  async updateChannelsBatch(t) {
    return await this.put(this.baseURL + "/channels/batch", t);
  }
  async createPredefinedFilter(t) {
    return this.validateServerSideAuth(), await this.post(`${this.baseURL}/predefined_filters`, t);
  }
  async getPredefinedFilter(t) {
    return this.validateServerSideAuth(), await this.get(`${this.baseURL}/predefined_filters/${encodeURIComponent(t)}`);
  }
  async updatePredefinedFilter(t, s) {
    return this.validateServerSideAuth(), await this.put(`${this.baseURL}/predefined_filters/${encodeURIComponent(t)}`, s);
  }
  async deletePredefinedFilter(t) {
    return this.validateServerSideAuth(), await this.delete(`${this.baseURL}/predefined_filters/${encodeURIComponent(t)}`);
  }
  async listPredefinedFilters(t = {}) {
    this.validateServerSideAuth();
    const { sort: s, ...i } = t;
    return await this.get(`${this.baseURL}/predefined_filters`, {
      ...i,
      ...s ? { sort: JSON.stringify(s) } : {}
    });
  }
  async setRetentionPolicy(t, s) {
    return this.validateServerSideAuth(), await this.post(this.baseURL + "/retention_policy", {
      policy: t,
      max_age_hours: s
    });
  }
  async deleteRetentionPolicy(t) {
    return this.validateServerSideAuth(), await this.post(this.baseURL + "/retention_policy/delete", { policy: t });
  }
  async getRetentionPolicy() {
    return this.validateServerSideAuth(), await this.get(this.baseURL + "/retention_policy");
  }
  async getRetentionPolicyRuns(t = {}) {
    return this.validateServerSideAuth(), await this.post(this.baseURL + "/retention_policy/runs", t);
  }
}, uo = "Allow", pp = "Deny", un = ["*"], fn = ["*"];
var fo = class {
  constructor(e, t, s = un, i = fn, n = !1, r = uo) {
    this.name = e, this.action = r, this.owner = n, this.priority = t, this.resources = s, this.roles = i;
  }
}, yp = new fo("Allow all", 999, un, fn, !1, uo), _p = new fo("Deny all", 1, un, fn, !1, pp), Vi = (e) => new Date(e.end_at).getTime() < Date.now();
function Rr(e) {
  return !e || e.type === "deleted" || !e.shared_location?.end_at ? !1 : !Vi(e.shared_location);
}
var gp = 3e3, Er = class po extends ye {
  constructor({ client: t, getDeviceId: s, watchLocation: i }) {
    if (!t.userID) throw new Error("Live-location sharing is reserved for client-side use only");
    super(), this.registerSubscriptions = () => {
      this.incrementRefCount(), !this.hasSubscriptions && (this.addUnsubscribeFunction(this.subscribeLiveLocationSharingUpdates()), this.addUnsubscribeFunction(this.subscribeTargetMessagesChange()));
    }, this.unregisterSubscriptions = () => super.unregisterSubscriptions(), this.client = t, this.state = new A({
      messages: /* @__PURE__ */ new Map(),
      ready: !1
    }), this._deviceId = s(), this.getDeviceId = s, this.watchLocation = i;
  }
  async init() {
    await this.assureStateInit(), this.registerSubscriptions();
  }
  get messages() {
    return this.state.getLatestValue().messages;
  }
  get stateIsReady() {
    return this.state.getLatestValue().ready;
  }
  get deviceId() {
    return this._deviceId || (this._deviceId = this.getDeviceId()), this._deviceId;
  }
  async assureStateInit() {
    if (this.stateIsReady) return;
    const { active_live_locations: t } = await this.client.getSharedLocations();
    this.state.next({
      messages: new Map(t.filter((s) => !Vi(s)).map((s) => [s.message_id, {
        ...s,
        stopSharingTimeout: setTimeout(() => {
          this.unregisterMessages([s.message_id]);
        }, new Date(s.end_at).getTime() - Date.now())
      }])),
      ready: !0
    });
  }
  subscribeTargetMessagesChange() {
    let t = null;
    const s = this.state.subscribeWithSelector(({ messages: i }) => ({ messages: i }), ({ messages: i }) => {
      i.size ? i.size && !t && (t = this.subscribeWatchLocation()) : (t?.(), t = null);
    });
    return () => {
      s(), t?.();
    };
  }
  subscribeWatchLocation() {
    let t = Date.now();
    return this.watchLocation(({ latitude: s, longitude: i }) => {
      Date.now() < t || (t = Date.now() + gp, Oa(po.symbol, async () => {
        const n = [];
        await this.assureStateInit();
        const r = [];
        for (const [a, o] of this.messages) {
          if (Vi(o)) {
            r.push(o.message_id);
            continue;
          }
          if (o.latitude === s && o.longitude === i) continue;
          const l = this.client.updateLocation({
            created_by_device_id: o.created_by_device_id,
            message_id: a,
            latitude: s,
            longitude: i
          });
          n.push(l);
        }
        this.unregisterMessages(r), n.length > 0 && await Promise.allSettled(n);
      }));
    });
  }
  subscribeLiveLocationSharingUpdates() {
    const t = [...[
      "live_location_sharing.started",
      "message.updated",
      "message.deleted"
    ].map((s) => this.client.on(s, (i) => {
      i.message && (i.type === "live_location_sharing.started" ? this.registerMessage(i.message) : i.type === "message.updated" ? (this.messages.has(i.message.id) && !Rr(i.message) && this.unregisterMessages([i.message.id]), this.registerMessage(i.message)) : this.unregisterMessages([i.message.id]));
    })), this.client.on("live_location_sharing.stopped", (s) => {
      s.live_location && this.unregisterMessages([s.live_location?.message_id]);
    })];
    return () => t.forEach((s) => s.unsubscribe());
  }
  registerMessage(t) {
    !this.client.userID || t?.user?.id !== this.client.userID || !Rr(t) || this.state.next((s) => {
      const i = new Map(s.messages);
      return i.set(t.id, {
        ...t.shared_location,
        stopSharingTimeout: setTimeout(() => {
          this.unregisterMessages([t.id]);
        }, new Date(t.shared_location.end_at).getTime() - Date.now())
      }), {
        ...s,
        messages: i
      };
    });
  }
  unregisterMessages(t) {
    const s = this.messages, i = new Set(t), n = new Map(Array.from(s).filter(([r, a]) => (i.has(r) && a.stopSharingTimeout && (clearTimeout(a.stopSharingTimeout), a.stopSharingTimeout = null), !i.has(r))));
    n.size !== s.size && this.state.partialNext({ messages: n });
  }
};
Er.symbol = Symbol(Er.name);
async function wp(e, t, s, i) {
  const n = fp.getInstance(e);
  await n.connectUser({ id: t }, s);
  const r = n.channel("order", i);
  await r.watch(), r.on("message.new", (a) => console.log(a.message?.id)), await r.sendMessage({ text: "hola" });
}
export {
  wp as run
};
