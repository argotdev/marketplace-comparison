var Pa = Object.defineProperty, Au = Object.getOwnPropertyDescriptor, Mu = Object.getOwnPropertyNames, Vi = Object.prototype.hasOwnProperty, Nu = (c, e, r) => () => {
  if (r) throw r[0];
  try {
    return c && (e = c(c = 0)), e;
  } catch (n) {
    throw r = [n], n;
  }
}, J = (c, e) => () => (e || (c((e = { exports: {} }).exports, e), c = null), e.exports), xu = (c, e) => {
  let r = {};
  for (var n in c)
    Pa(r, n, {
      get: c[n],
      enumerable: !0
    });
  return e || Pa(r, Symbol.toStringTag, { value: "Module" }), r;
}, ju = (c, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (var i = Mu(e), s = 0, l = i.length, b; s < l; s++)
      b = i[s], !Vi.call(c, b) && b !== r && Pa(c, b, {
        get: ((h) => e[h]).bind(null, b),
        enumerable: !(n = Au(e, b)) || n.enumerable
      });
  return c;
}, Uu = (c) => Vi.call(c, "module.exports") ? c["module.exports"] : ju(Pa({}, "__esModule", { value: !0 }), c), Dt = /* @__PURE__ */ J(((c, e) => {
  var r = function(n) {
    return n && n.Math === Math && n;
  };
  e.exports = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof global == "object" && global) || r(typeof c == "object" && c) || /* @__PURE__ */ (function() {
    return this;
  })() || Function("return this")();
})), Mt = /* @__PURE__ */ J(((c, e) => {
  e.exports = function(r) {
    try {
      return !!r();
    } catch {
      return !0;
    }
  };
})), Yt = /* @__PURE__ */ J(((c, e) => {
  var r = Mt();
  e.exports = !r(function() {
    return Object.defineProperty({}, 1, { get: function() {
      return 7;
    } })[1] !== 7;
  });
})), Xn = /* @__PURE__ */ J(((c, e) => {
  var r = Mt();
  e.exports = !r(function() {
    var n = function() {
    }.bind();
    return typeof n != "function" || n.hasOwnProperty("prototype");
  });
})), Vt = /* @__PURE__ */ J(((c, e) => {
  var r = Xn(), n = Function.prototype.call;
  e.exports = r ? n.bind(n) : function() {
    return n.apply(n, arguments);
  };
})), Aa = /* @__PURE__ */ J(((c) => {
  var e = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, n = r && !e.call({ 1: 2 }, 1);
  c.f = n ? function(s) {
    var l = r(this, s);
    return !!l && l.enumerable;
  } : e;
})), Sn = /* @__PURE__ */ J(((c, e) => {
  e.exports = function(r, n) {
    return {
      enumerable: !(r & 1),
      configurable: !(r & 2),
      writable: !(r & 4),
      value: n
    };
  };
})), Ut = /* @__PURE__ */ J(((c, e) => {
  var r = Xn(), n = Function.prototype, i = n.call, s = r && n.bind.bind(i, i);
  e.exports = r ? s : function(l) {
    return function() {
      return i.apply(l, arguments);
    };
  };
})), Gr = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = r({}.toString), i = r("".slice);
  e.exports = function(s) {
    return i(n(s), 8, -1);
  };
})), Zn = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Mt(), i = Gr(), s = Object, l = r("".split);
  e.exports = n(function() {
    return !s("z").propertyIsEnumerable(0);
  }) ? function(b) {
    return i(b) === "String" ? l(b, "") : s(b);
  } : s;
})), kn = /* @__PURE__ */ J(((c, e) => {
  e.exports = function(r) {
    return r == null;
  };
})), Hr = /* @__PURE__ */ J(((c, e) => {
  var r = kn(), n = TypeError;
  e.exports = function(i) {
    if (r(i)) throw new n("Can't call method on " + i);
    return i;
  };
})), xr = /* @__PURE__ */ J(((c, e) => {
  var r = Zn(), n = Hr();
  e.exports = function(i) {
    return r(n(i));
  };
})), Kt = /* @__PURE__ */ J(((c, e) => {
  var r = typeof document == "object" && document.all;
  e.exports = typeof r > "u" && r !== void 0 ? function(n) {
    return typeof n == "function" || n === r;
  } : function(n) {
    return typeof n == "function";
  };
})), Gt = /* @__PURE__ */ J(((c, e) => {
  var r = Kt();
  e.exports = function(n) {
    return typeof n == "object" ? n !== null : r(n);
  };
})), qr = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Kt(), i = function(s) {
    return n(s) ? s : void 0;
  };
  e.exports = function(s, l) {
    return arguments.length < 2 ? i(r[s]) : r[s] && r[s][l];
  };
})), sn = /* @__PURE__ */ J(((c, e) => {
  var r = Ut();
  e.exports = r({}.isPrototypeOf);
})), pn = /* @__PURE__ */ J(((c, e) => {
  var r = Dt().navigator, n = r && r.userAgent;
  e.exports = n ? String(n) : "";
})), $n = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = pn(), i = r.process, s = r.Deno, l = i && i.versions || s && s.version, b = l && l.v8, h, E;
  b && (h = b.split("."), E = h[0] > 0 && h[0] < 4 ? 1 : +(h[0] + h[1])), !E && n && (h = n.match(/Edge\/(\d+)/), (!h || h[1] >= 74) && (h = n.match(/Chrome\/(\d+)/), h && (E = +h[1]))), e.exports = E;
})), Dn = /* @__PURE__ */ J(((c, e) => {
  var r = $n(), n = Mt(), i = Dt().String;
  e.exports = !!Object.getOwnPropertySymbols && !n(function() {
    var s = /* @__PURE__ */ Symbol("symbol detection");
    return !i(s) || !(Object(s) instanceof Symbol) || !Symbol.sham && r && r < 41;
  });
})), Ki = /* @__PURE__ */ J(((c, e) => {
  var r = Dn();
  e.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
})), Fn = /* @__PURE__ */ J(((c, e) => {
  var r = qr(), n = Kt(), i = sn(), s = Ki(), l = Object;
  e.exports = s ? function(b) {
    return typeof b == "symbol";
  } : function(b) {
    var h = r("Symbol");
    return n(h) && i(h.prototype, l(b));
  };
})), In = /* @__PURE__ */ J(((c, e) => {
  var r = String;
  e.exports = function(n) {
    try {
      return r(n);
    } catch {
      return "Object";
    }
  };
})), Br = /* @__PURE__ */ J(((c, e) => {
  var r = Kt(), n = In(), i = TypeError;
  e.exports = function(s) {
    if (r(s)) return s;
    throw new i(n(s) + " is not a function");
  };
})), Tn = /* @__PURE__ */ J(((c, e) => {
  var r = Br(), n = kn();
  e.exports = function(i, s) {
    var l = i[s];
    return n(l) ? void 0 : r(l);
  };
})), Lu = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = Kt(), i = Gt(), s = TypeError;
  e.exports = function(l, b) {
    var h, E;
    if (b === "string" && n(h = l.toString) && !i(E = r(h, l)) || n(h = l.valueOf) && !i(E = r(h, l)) || b !== "string" && n(h = l.toString) && !i(E = r(h, l))) return E;
    throw new s("Can't convert object to primitive value");
  };
})), Wr = /* @__PURE__ */ J(((c, e) => {
  e.exports = !1;
})), ui = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Object.defineProperty;
  e.exports = function(i, s) {
    try {
      n(r, i, {
        value: s,
        configurable: !0,
        writable: !0
      });
    } catch {
      r[i] = s;
    }
    return s;
  };
})), oi = /* @__PURE__ */ J(((c, e) => {
  var r = Wr(), n = Dt(), i = ui(), s = "__core-js_shared__", l = e.exports = n[s] || i(s, {});
  (l.versions || (l.versions = [])).push({
    version: "3.50.0",
    mode: r ? "pure" : "global",
    copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
    license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
  });
})), qn = /* @__PURE__ */ J(((c, e) => {
  var r = oi(), n = Object.create || Object;
  e.exports = function(i, s) {
    return r[i] || (r[i] = s || n(null));
  };
})), br = /* @__PURE__ */ J(((c, e) => {
  var r = Hr(), n = Object;
  e.exports = function(i) {
    return n(r(i));
  };
})), tr = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = br(), i = r({}.hasOwnProperty);
  e.exports = Object.hasOwn || function(l, b) {
    return i(n(l), b);
  };
})), Bn = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = 0, i = Math.random(), s = r(1.1.toString);
  e.exports = function(l) {
    return "Symbol(" + (l === void 0 ? "" : l) + ")_" + s(++n + i, 36);
  };
})), Jt = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = qn(), i = tr(), s = Bn(), l = Dn(), b = Ki(), h = r.Symbol, E = n("wks"), T = b ? h.for || h : h && h.withoutSetter || s;
  e.exports = function(S) {
    return i(E, S) || (E[S] = l && i(h, S) ? h[S] : T("Symbol." + S)), E[S];
  };
})), li = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = Gt(), i = Fn(), s = Tn(), l = Lu(), b = Jt(), h = TypeError, E = b("toPrimitive");
  e.exports = function(T, S) {
    if (!n(T) || i(T)) return T;
    var j = s(T, E), V;
    if (j) {
      if (S === void 0 && (S = "default"), V = r(j, T, S), !n(V) || i(V)) return V;
      throw new h("Can't convert object to primitive value");
    }
    return S === void 0 && (S = "number"), l(T, S);
  };
})), Ma = /* @__PURE__ */ J(((c, e) => {
  var r = li(), n = Fn();
  e.exports = function(i) {
    var s = r(i, "string");
    return n(s) ? s : s + "";
  };
})), Na = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Gt(), i = r.document, s = n(i) && n(i.createElement);
  e.exports = function(l) {
    return s ? i.createElement(l) : {};
  };
})), Ji = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = Mt(), i = Na();
  e.exports = !r && !n(function() {
    return Object.defineProperty(i("div"), "a", { get: function() {
      return 7;
    } }).a !== 7;
  });
})), vn = /* @__PURE__ */ J(((c) => {
  var e = Yt(), r = Vt(), n = Aa(), i = Sn(), s = xr(), l = Ma(), b = tr(), h = Ji(), E = Object.getOwnPropertyDescriptor;
  c.f = e ? E : function(S, j) {
    if (S = s(S), j = l(j), h) try {
      return E(S, j);
    } catch {
    }
    if (b(S, j)) return i(!r(n.f, S, j), S[j]);
  };
})), Yi = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = Mt();
  e.exports = r && n(function() {
    return Object.defineProperty(function() {
    }, "prototype", {
      value: 42,
      writable: !1
    }).prototype !== 42;
  });
})), cr = /* @__PURE__ */ J(((c, e) => {
  var r = Gt(), n = String, i = TypeError;
  e.exports = function(s) {
    if (r(s)) return s;
    throw new i(n(s) + " is not an object");
  };
})), Ar = /* @__PURE__ */ J(((c) => {
  var e = Yt(), r = Ji(), n = Yi(), i = cr(), s = Ma(), l = TypeError, b = Object.defineProperty, h = Object.getOwnPropertyDescriptor, E = "enumerable", T = "configurable", S = "writable";
  c.f = e ? n ? function(V, O, X) {
    if (i(V), O = s(O), i(X), typeof V == "function" && O === "prototype" && "value" in X && S in X && !X[S]) {
      var B = h(V, O);
      B && B[S] && (V[O] = X.value, X = {
        configurable: T in X ? X[T] : B[T],
        enumerable: E in X ? X[E] : B[E],
        writable: !1
      });
    }
    return b(V, O, X);
  } : b : function(V, O, X) {
    if (i(V), O = s(O), i(X), r) try {
      return b(V, O, X);
    } catch {
    }
    if ("get" in X || "set" in X) throw new l("Accessors not supported");
    return "value" in X && (V[O] = X.value), V;
  };
})), un = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = Ar(), i = Sn();
  e.exports = r ? function(s, l, b) {
    return n.f(s, l, i(1, b));
  } : function(s, l, b) {
    return s[l] = b, s;
  };
})), ea = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = tr(), i = Function.prototype, s = r && Object.getOwnPropertyDescriptor, l = n(i, "name"), b = l && function() {
  }.name === "something", h = l && (!r || r && s(i, "name").configurable);
  e.exports = {
    EXISTS: l,
    PROPER: b,
    CONFIGURABLE: h
  };
})), ci = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Kt(), i = oi(), s = r(Function.toString);
  n(i.inspectSource) || (i.inspectSource = function(l) {
    return s(l);
  }), e.exports = i.inspectSource;
})), $u = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Kt(), i = r.WeakMap;
  e.exports = n(i) && /native code/.test(String(i));
})), xa = /* @__PURE__ */ J(((c, e) => {
  var r = qn(), n = Bn(), i = r("keys");
  e.exports = function(s) {
    return i[s] || (i[s] = n(s));
  };
})), ta = /* @__PURE__ */ J(((c, e) => {
  e.exports = {};
})), Mr = /* @__PURE__ */ J(((c, e) => {
  var r = $u(), n = Dt(), i = Gt(), s = un(), l = tr(), b = oi(), h = xa(), E = ta(), T = "Object already initialized", S = n.TypeError, j = n.WeakMap, V, O, X, B = function(re) {
    return X(re) ? O(re) : V(re, {});
  }, G = function(re) {
    return function(se) {
      var H;
      if (!i(se) || (H = O(se)).type !== re) throw new S("Incompatible receiver, " + re + " required");
      return H;
    };
  };
  if (r || b.state) {
    var Y = b.state || (b.state = new j());
    Y.get = Y.get, Y.has = Y.has, Y.set = Y.set, V = function(re, se) {
      if (Y.has(re)) throw new S(T);
      return se.facade = re, Y.set(re, se), se;
    }, O = function(re) {
      return Y.get(re) || {};
    }, X = function(re) {
      return Y.has(re);
    };
  } else {
    var ue = h("state");
    E[ue] = !0, V = function(re, se) {
      if (l(re, ue)) throw new S(T);
      return se.facade = re, s(re, ue, se), se;
    }, O = function(re) {
      return l(re, ue) ? re[ue] : {};
    }, X = function(re) {
      return l(re, ue);
    };
  }
  e.exports = {
    set: V,
    get: O,
    has: X,
    enforce: B,
    getterFor: G
  };
})), Qi = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Mt(), i = Kt(), s = tr(), l = Yt(), b = ea().CONFIGURABLE, h = ci(), E = Mr(), T = E.enforce, S = E.get, j = String, V = Object.defineProperty, O = r("".slice), X = r("".replace), B = r([].join), G = l && !n(function() {
    return V(function() {
    }, "length", { value: 8 }).length !== 8;
  }), Y = String(String).split("String"), ue = e.exports = function(re, se, H) {
    O(j(se), 0, 7) === "Symbol(" && (se = "[" + X(j(se), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), H && H.getter && (se = "get " + se), H && H.setter && (se = "set " + se), (!s(re, "name") || b && re.name !== se) && (l ? V(re, "name", {
      value: se,
      configurable: !0
    }) : re.name = se), G && H && s(H, "arity") && re.length !== H.arity && V(re, "length", { value: H.arity });
    try {
      H && s(H, "constructor") && H.constructor ? l && V(re, "prototype", { writable: !1 }) : re.prototype && (re.prototype = void 0);
    } catch {
    }
    var U = T(re);
    return s(U, "source") || (U.source = B(Y, typeof se == "string" ? se : "")), re;
  };
  Function.prototype.toString = ue(function() {
    return i(this) && S(this).source || h(this);
  }, "toString");
})), Tr = /* @__PURE__ */ J(((c, e) => {
  var r = Kt(), n = Ar(), i = Qi(), s = ui();
  e.exports = function(l, b, h, E) {
    E || (E = {});
    var T = E.enumerable, S = E.name !== void 0 ? E.name : b;
    if (r(h) && i(h, S, E), E.global)
      T ? l[b] = h : s(b, h);
    else {
      try {
        E.unsafe ? l[b] && (T = !0) : delete l[b];
      } catch {
      }
      T ? l[b] = h : n.f(l, b, {
        value: h,
        enumerable: !1,
        configurable: !E.nonConfigurable,
        writable: !E.nonWritable
      });
    }
    return l;
  };
})), Du = /* @__PURE__ */ J(((c, e) => {
  var r = Math.ceil, n = Math.floor;
  e.exports = Math.trunc || function(s) {
    var l = +s;
    return (l > 0 ? n : r)(l);
  };
})), Yr = /* @__PURE__ */ J(((c, e) => {
  var r = Du();
  e.exports = function(n) {
    var i = +n;
    return i !== i || i === 0 ? 0 : r(i);
  };
})), Rn = /* @__PURE__ */ J(((c, e) => {
  var r = Yr(), n = Math.max, i = Math.min;
  e.exports = function(s, l) {
    var b = r(s);
    return b < 0 ? n(b + l, 0) : i(b, l);
  };
})), En = /* @__PURE__ */ J(((c, e) => {
  var r = Yr(), n = Math.min;
  e.exports = function(i) {
    var s = r(i);
    return s > 0 ? n(s, 9007199254740991) : 0;
  };
})), _r = /* @__PURE__ */ J(((c, e) => {
  var r = En();
  e.exports = function(n) {
    return r(n.length);
  };
})), ra = /* @__PURE__ */ J(((c, e) => {
  var r = xr(), n = Rn(), i = _r(), s = function(l) {
    return function(b, h, E) {
      var T = r(b), S = i(T);
      if (S === 0) return !l && -1;
      var j = n(E, S), V;
      if (l && h !== h) {
        for (; S > j; )
          if (V = T[j++], V !== V) return !0;
      } else for (; S > j; j++) if ((l || j in T) && T[j] === h) return l || j || 0;
      return !l && -1;
    };
  };
  e.exports = {
    includes: s(!0),
    indexOf: s(!1)
  };
})), Xi = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = tr(), i = xr(), s = ra().indexOf, l = ta(), b = r([].push);
  e.exports = function(h, E) {
    var T = i(h), S = 0, j = [], V;
    for (V in T) !n(l, V) && n(T, V) && b(j, V);
    for (; E.length > S; ) n(T, V = E[S++]) && (~s(j, V) || b(j, V));
    return j;
  };
})), fi = /* @__PURE__ */ J(((c, e) => {
  e.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
  ];
})), Wn = /* @__PURE__ */ J(((c) => {
  var e = Xi(), r = fi().concat("length", "prototype");
  c.f = Object.getOwnPropertyNames || function(i) {
    return e(i, r);
  };
})), ja = /* @__PURE__ */ J(((c) => {
  c.f = Object.getOwnPropertySymbols;
})), Zi = /* @__PURE__ */ J(((c, e) => {
  var r = qr(), n = Ut(), i = Wn(), s = ja(), l = cr(), b = n([].concat);
  e.exports = r("Reflect", "ownKeys") || function(E) {
    var T = i.f(l(E)), S = s.f;
    return S ? b(T, S(E)) : T;
  };
})), di = /* @__PURE__ */ J(((c, e) => {
  var r = tr(), n = Zi(), i = vn(), s = Ar();
  e.exports = function(l, b, h) {
    for (var E = n(b), T = s.f, S = i.f, j = 0; j < E.length; j++) {
      var V = E[j];
      !r(l, V) && !(h && r(h, V)) && T(l, V, S(b, V));
    }
  };
})), Ua = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Kt(), i = /#|\.prototype\./, s = function(T, S) {
    var j = b[l(T)];
    return j === E ? !0 : j === h ? !1 : n(S) ? r(S) : !!S;
  }, l = s.normalize = function(T) {
    return String(T).replace(i, ".").toLowerCase();
  }, b = s.data = {}, h = s.NATIVE = "N", E = s.POLYFILL = "P";
  e.exports = s;
})), $t = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = vn().f, i = un(), s = Tr(), l = ui(), b = di(), h = Ua();
  e.exports = function(E, T) {
    var S = E.target, j = E.global, V = E.stat, O, X, B, G, Y, ue;
    if (j ? X = r : V ? X = r[S] || l(S, {}) : X = r[S] && r[S].prototype, X) for (B in T) {
      if (Y = T[B], E.dontCallGetSet ? (ue = n(X, B), G = ue && ue.value) : G = X[B], O = h(j ? B : S + (V ? "." : "#") + B, E.forced), !O && G !== void 0) {
        if (typeof Y == typeof G) continue;
        b(Y, G);
      }
      (E.sham || G && G.sham) && i(Y, "sham", !0), s(X, B, Y, E);
    }
  };
})), Qr = /* @__PURE__ */ J(((c, e) => {
  var r = Ar().f, n = tr(), i = Jt()("toStringTag");
  e.exports = function(s, l, b) {
    s && !b && (s = s.prototype), s && !n(s, i) && r(s, i, {
      configurable: !0,
      value: l
    });
  };
})), Cn = /* @__PURE__ */ J((() => {
  var c = $t(), e = Dt(), r = Qr();
  c({ global: !0 }, { Reflect: {} }), r(e.Reflect, "Reflect", !0);
})), zn = /* @__PURE__ */ J(((c, e) => {
  var r = Xn(), n = Function.prototype, i = n.apply, s = n.call;
  e.exports = typeof Reflect == "object" && Reflect.apply || (r ? s.bind(i) : function() {
    return s.apply(i, arguments);
  });
})), on = /* @__PURE__ */ J(((c, e) => {
  var r = Ut();
  e.exports = r([].slice);
})), Fu = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Br(), i = Gt(), s = tr(), l = on(), b = Xn(), h = Function, E = r([].concat), T = r([].join), S = {}, j = function(V, O, X) {
    if (!s(S, O)) {
      for (var B = [], G = 0; G < O; G++) B[G] = "a[" + G + "]";
      S[O] = h("C,a", "return new C(" + T(B, ",") + ")");
    }
    return S[O](V, X);
  };
  e.exports = b ? h.bind : function(O) {
    var X = n(this), B = X.prototype, G = l(arguments, 1), Y = function() {
      var re = E(G, l(arguments));
      return this instanceof Y ? j(X, re.length, re) : X.apply(O, re);
    };
    return i(B) && (Y.prototype = B), Y;
  };
})), pi = /* @__PURE__ */ J(((c, e) => {
  var r = Jt()("toStringTag"), n = {};
  n[r] = "z", e.exports = String(n) === "[object z]";
})), hn = /* @__PURE__ */ J(((c, e) => {
  var r = pi(), n = Kt(), i = Gr(), s = Jt()("toStringTag"), l = Object, b = i(/* @__PURE__ */ (function() {
    return arguments;
  })()) === "Arguments", h = function(E, T) {
    try {
      return E[T];
    } catch {
    }
  };
  e.exports = r ? i : function(E) {
    var T, S, j;
    return E === void 0 ? "Undefined" : E === null ? "Null" : typeof (S = h(T = l(E), s)) == "string" ? S : b ? i(T) : (j = i(T)) === "Object" && n(T.callee) ? "Arguments" : j;
  };
})), La = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Mt(), i = Kt(), s = hn(), l = qr(), b = ci(), h = function() {
  }, E = l("Reflect", "construct"), T = /^\s*(?:class|function)\b/, S = r(T.exec), j = !T.test(h), V = function(B) {
    if (!i(B)) return !1;
    try {
      return E(h, [], B), !0;
    } catch {
      return !1;
    }
  }, O = function(B) {
    if (!i(B)) return !1;
    switch (s(B)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return j || !!S(T, b(B));
    } catch {
      return !0;
    }
  };
  O.sham = !0, e.exports = !E || n(function() {
    var X;
    return V(V.call) || !V(Object) || !V(function() {
      X = !0;
    }) || X;
  }) ? O : V;
})), vi = /* @__PURE__ */ J(((c, e) => {
  var r = La(), n = In(), i = TypeError;
  e.exports = function(s) {
    if (r(s)) return s;
    throw new i(n(s) + " is not a constructor");
  };
})), na = /* @__PURE__ */ J(((c, e) => {
  var r = Xi(), n = fi();
  e.exports = Object.keys || function(s) {
    return r(s, n);
  };
})), es = /* @__PURE__ */ J(((c) => {
  var e = Yt(), r = Yi(), n = Ar(), i = cr(), s = xr(), l = na();
  c.f = e && !r ? Object.defineProperties : function(h, E) {
    i(h);
    for (var T = s(E), S = l(E), j = S.length, V = 0, O; j > V; ) n.f(h, O = S[V++], T[O]);
    return h;
  };
})), ts = /* @__PURE__ */ J(((c, e) => {
  var r = qr();
  e.exports = r("document", "documentElement");
})), Xr = /* @__PURE__ */ J(((c, e) => {
  var r = cr(), n = es(), i = fi(), s = ta(), l = ts(), b = Na(), h = xa(), E = ">", T = "<", S = "prototype", j = "script", V = h("IE_PROTO"), O = function() {
  }, X = function(re) {
    return T + j + E + re + T + "/" + j + E;
  }, B = function(re) {
    re.write(X("")), re.close();
    var se = re.parentWindow.Object;
    return re = null, se;
  }, G = function() {
    var re = b("iframe"), se = "java" + j + ":", H;
    return re.style.display = "none", l.appendChild(re), re.src = String(se), H = re.contentWindow.document, H.open(), H.write(X("document.F=Object")), H.close(), H.F;
  }, Y, ue = function() {
    try {
      Y = new ActiveXObject("htmlfile");
    } catch {
    }
    ue = typeof document < "u" ? document.domain && Y ? B(Y) : G() : B(Y);
    for (var re = i.length; re--; ) delete ue[S][i[re]];
    return ue();
  };
  s[V] = !0, e.exports = Object.create || function(se, H) {
    var U;
    return se !== null ? (O[S] = r(se), U = new O(), O[S] = null, U[V] = se) : U = ue(), H === void 0 ? U : n.f(U, H);
  };
})), On = /* @__PURE__ */ J((() => {
  var c = $t(), e = qr(), r = zn(), n = Fu(), i = vi(), s = cr(), l = Gt(), b = Xr(), h = Mt(), E = e("Reflect", "construct"), T = Object.prototype, S = [].push, j = h(function() {
    function X() {
    }
    return !(E(function() {
    }, [], X) instanceof X);
  }), V = !h(function() {
    E(function() {
    });
  }), O = j || V;
  c({
    target: "Reflect",
    stat: !0,
    forced: O,
    sham: O
  }, { construct: function(B, G) {
    i(B);
    var Y = arguments.length < 3 ? B : i(arguments[2]);
    if (s(G), V && !j) return E(B, G, Y);
    if (B === Y) {
      switch (G.length) {
        case 0:
          return new B();
        case 1:
          return new B(G[0]);
        case 2:
          return new B(G[0], G[1]);
        case 3:
          return new B(G[0], G[1], G[2]);
        case 4:
          return new B(G[0], G[1], G[2], G[3]);
      }
      var ue = [null];
      return r(S, ue, G), new (r(n, B, ue))();
    }
    var re = Y.prototype, se = b(l(re) ? re : T), H = r(B, se, G);
    return l(H) ? H : se;
  } });
})), hi = /* @__PURE__ */ J((() => {
  var c = $t(), e = br(), r = na();
  c({
    target: "Object",
    stat: !0,
    forced: Mt()(function() {
      r(1);
    })
  }, { keys: function(i) {
    return r(e(i));
  } });
})), hr = /* @__PURE__ */ J(((c, e) => {
  var r = hn(), n = String;
  e.exports = function(i) {
    if (r(i) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
    return n(i);
  };
})), rs = /* @__PURE__ */ J(((c, e) => {
  var r = Gr(), n = xr(), i = Wn().f, s = on(), l = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], b = function(h) {
    try {
      return i(h);
    } catch {
      return s(l);
    }
  };
  e.exports.f = function(E) {
    return l && r(E) === "Window" ? b(E) : i(n(E));
  };
})), Zr = /* @__PURE__ */ J(((c, e) => {
  var r = Qi(), n = Ar();
  e.exports = function(i, s, l) {
    return l.get && r(l.get, s, { getter: !0 }), l.set && r(l.set, s, { setter: !0 }), n.f(i, s, l);
  };
})), ns = /* @__PURE__ */ J(((c) => {
  var e = Jt();
  c.f = e;
})), yi = /* @__PURE__ */ J(((c, e) => {
  var r = Dt();
  e.exports = r;
})), as = /* @__PURE__ */ J(((c, e) => {
  var r = yi(), n = tr(), i = ns(), s = Ar().f;
  e.exports = function(l) {
    var b = r.Symbol || (r.Symbol = {});
    n(b, l) || s(b, l, { value: i.f(l) });
  };
})), qu = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = qr(), i = Jt(), s = Tr();
  e.exports = function() {
    var l = n("Symbol"), b = l && l.prototype, h = b && b.valueOf, E = i("toPrimitive");
    b && !b[E] && s(b, E, function(T) {
      return r(h, this);
    }, { arity: 1 });
  };
})), gi = /* @__PURE__ */ J(((c, e) => {
  var r = Gr(), n = Ut();
  e.exports = function(i) {
    if (r(i) === "Function") return n(i);
  };
})), ln = /* @__PURE__ */ J(((c, e) => {
  var r = gi(), n = Br(), i = Xn(), s = r(r.bind);
  e.exports = function(l, b) {
    return n(l), b === void 0 ? l : i ? s(l, b) : function() {
      return l.apply(b, arguments);
    };
  };
})), aa = /* @__PURE__ */ J(((c, e) => {
  var r = Gr();
  e.exports = Array.isArray || function(i) {
    return r(i) === "Array";
  };
})), Bu = /* @__PURE__ */ J(((c, e) => {
  var r = aa(), n = La(), i = Gt(), s = Jt()("species"), l = Array;
  e.exports = function(b) {
    var h;
    return r(b) && (h = b.constructor, n(h) && (h === l || r(h.prototype)) ? h = void 0 : i(h) && (h = h[s], h === null && (h = void 0))), h === void 0 ? l : h;
  };
})), mi = /* @__PURE__ */ J(((c, e) => {
  var r = Bu();
  e.exports = function(n, i) {
    return new (r(n))(i === 0 ? 0 : i);
  };
})), Gn = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = Ar(), i = Sn();
  e.exports = function(s, l, b) {
    r ? n.f(s, l, i(0, b)) : s[l] = b;
  };
})), Nr = /* @__PURE__ */ J(((c, e) => {
  var r = ln(), n = Zn(), i = br(), s = _r(), l = mi(), b = Gn(), h = function(E) {
    var T = E === 1, S = E === 2, j = E === 3, V = E === 4, O = E === 6, X = E === 7, B = E === 5 || O;
    return function(G, Y, ue) {
      for (var re = i(G), se = n(re), H = s(se), U = r(Y, ue), D = 0, Q = 0, ve = T ? l(G, H) : S || X ? l(G, 0) : void 0, L, le; H > D; D++) if ((B || D in se) && (L = se[D], le = U(L, D, re), E))
        if (T) b(ve, D, le);
        else if (le) switch (E) {
          case 3:
            return !0;
          case 5:
            return L;
          case 6:
            return D;
          case 2:
            b(ve, Q++, L);
        }
        else switch (E) {
          case 4:
            return !1;
          case 7:
            b(ve, Q++, L);
        }
      return O ? -1 : j || V ? V : ve;
    };
  };
  e.exports = {
    forEach: h(0),
    map: h(1),
    filter: h(2),
    some: h(3),
    every: h(4),
    find: h(5),
    findIndex: h(6),
    filterReject: h(7)
  };
})), Wu = /* @__PURE__ */ J((() => {
  var c = $t(), e = Dt(), r = Vt(), n = Ut(), i = Wr(), s = Yt(), l = Dn(), b = Mt(), h = tr(), E = sn(), T = cr(), S = xr(), j = Ma(), V = hr(), O = Sn(), X = Xr(), B = na(), G = Wn(), Y = rs(), ue = ja(), re = vn(), se = Ar(), H = es(), U = Aa(), D = Tr(), Q = Zr(), ve = qn(), L = xa(), le = ta(), Re = Bn(), fe = Jt(), P = ns(), oe = as(), Ae = qu(), Ce = Qr(), $ = Mr(), He = Nr().forEach, ot = L("hidden"), vt = "Symbol", Ie = "prototype", z = $.set, F = $.getterFor(vt), m = Object[Ie], he = e.Symbol, te = he && he[Ie], De = e.RangeError, ee = e.TypeError, pe = e.QObject, Ne = re.f, $e = se.f, Oe = Y.f, nt = U.f, Ze = n([].push), Je = ve("symbols"), _t = ve("op-symbols"), ft = ve("wks"), lt = !pe || !pe[Ie] || !pe[Ie].findChild, ze = function(ct, Ve, at) {
    var qe = Ne(m, Ve);
    return qe && delete m[Ve], $e(ct, Ve, at), qe && ct !== m && $e(m, Ve, qe), ct;
  }, _e = s && b(function() {
    return X($e({}, "a", { get: function() {
      return $e(this, "a", { value: 7 }).a;
    } })).a !== 7;
  }) ? ze : $e, de = function(ct, Ve) {
    var at = Je[ct] = X(te);
    return z(at, {
      type: vt,
      tag: ct,
      description: Ve
    }), s || (at.description = Ve), at;
  }, ce = function(Ve, at, qe) {
    Ve === m && ce(_t, at, qe), T(Ve);
    var ae = j(at);
    return T(qe), h(Je, ae) ? (("enumerable" in qe ? !qe.enumerable : !h(Ve, ae) || h(Ve, ot) && Ve[ot][ae]) ? (h(Ve, ot) || $e(Ve, ot, O(1, X(null))), Ve[ot][ae] = !0) : (h(Ve, ot) && Ve[ot][ae] && (Ve[ot][ae] = !1), qe = X(qe, { enumerable: O(0, !1) })), _e(Ve, ae, qe)) : $e(Ve, ae, qe);
  }, ye = function(Ve, at) {
    T(Ve);
    var qe = S(at);
    return He(B(qe).concat(mt(qe)), function(ae) {
      (!s || r(Fe, qe, ae)) && ce(Ve, ae, qe[ae]);
    }), Ve;
  }, Ye = function(Ve, at) {
    return at === void 0 ? X(Ve) : ye(X(Ve), at);
  }, Fe = function(Ve) {
    var at = j(Ve), qe = r(nt, this, at);
    return this === m && h(Je, at) && !h(_t, at) ? !1 : qe || !h(this, at) || !h(Je, at) || h(this, ot) && this[ot][at] ? qe : !0;
  }, We = function(Ve, at) {
    var qe = S(Ve), ae = j(at);
    if (!(qe === m && h(Je, ae) && !h(_t, ae))) {
      var Se = Ne(qe, ae);
      return Se && h(Je, ae) && !(h(qe, ot) && qe[ot][ae]) && (Se.enumerable = !0), Se;
    }
  }, ht = function(Ve) {
    var at = Oe(S(Ve)), qe = [];
    return He(at, function(ae) {
      !h(Je, ae) && !h(le, ae) && Ze(qe, ae);
    }), qe;
  }, mt = function(ct) {
    var Ve = ct === m, at = Oe(Ve ? _t : S(ct)), qe = [];
    return He(at, function(ae) {
      h(Je, ae) && (!Ve || h(m, ae)) && Ze(qe, Je[ae]);
    }), qe;
  };
  l || (he = function() {
    if (E(te, this)) throw new ee("Symbol is not a constructor");
    var Ve = !arguments.length || arguments[0] === void 0 ? void 0 : V(arguments[0]), at = Re(Ve), qe = function(ae) {
      var Se = this === void 0 ? e : this;
      Se === m && r(qe, _t, ae), h(Se, ot) && h(Se[ot], at) && (Se[ot][at] = !1);
      var Te = O(1, ae);
      try {
        _e(Se, at, Te);
      } catch (je) {
        if (!(je instanceof De)) throw je;
        ze(Se, at, Te);
      }
    };
    return s && lt && _e(m, at, {
      configurable: !0,
      set: qe
    }), de(at, Ve);
  }, te = he[Ie], D(te, "toString", function() {
    return F(this).tag;
  }), D(he, "withoutSetter", function(ct) {
    return de(Re(ct), ct);
  }), U.f = Fe, se.f = ce, H.f = ye, re.f = We, G.f = Y.f = ht, ue.f = mt, P.f = function(ct) {
    return de(fe(ct), ct);
  }, s && (Q(te, "description", {
    configurable: !0,
    get: function() {
      return F(this).description;
    }
  }), i || D(m, "propertyIsEnumerable", Fe, { unsafe: !0 }))), c({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: !l,
    sham: !l
  }, { Symbol: he }), He(B(ft), function(ct) {
    oe(ct);
  }), c({
    target: vt,
    stat: !0,
    forced: !l
  }, {
    useSetter: function() {
      lt = !0;
    },
    useSimple: function() {
      lt = !1;
    }
  }), c({
    target: "Object",
    stat: !0,
    forced: !l,
    sham: !s
  }, {
    create: Ye,
    defineProperty: ce,
    defineProperties: ye,
    getOwnPropertyDescriptor: We
  }), c({
    target: "Object",
    stat: !0,
    forced: !l
  }, { getOwnPropertyNames: ht }), Ae(), Ce(he, vt), le[ot] = !0;
})), is = /* @__PURE__ */ J(((c, e) => {
  var r = Dn();
  e.exports = r && !!Symbol.for && !!Symbol.keyFor;
})), zu = /* @__PURE__ */ J((() => {
  var c = $t(), e = qr(), r = tr(), n = hr(), i = qn(), s = is(), l = i("string-to-symbol-registry"), b = i("symbol-to-string-registry");
  c({
    target: "Symbol",
    stat: !0,
    forced: !s
  }, { for: function(h) {
    var E = n(h);
    if (r(l, E)) return l[E];
    var T = e("Symbol")(E);
    return l[E] = T, b[T] = E, T;
  } });
})), Gu = /* @__PURE__ */ J((() => {
  var c = $t(), e = tr(), r = Fn(), n = In(), i = qn(), s = is(), l = i("symbol-to-string-registry");
  c({
    target: "Symbol",
    stat: !0,
    forced: !s
  }, { keyFor: function(h) {
    if (!r(h)) throw new TypeError(n(h) + " is not a symbol");
    if (e(l, h)) return l[h];
  } });
})), Hu = /* @__PURE__ */ J(((c, e) => {
  var r = Gt(), n = Mr().get;
  e.exports = function(s) {
    if (!r(s)) return !1;
    var l = n(s);
    return !!l && l.type === "RawJSON";
  };
})), ss = /* @__PURE__ */ J(((c, e) => {
  var r = Ut();
  e.exports = r(1.1.valueOf);
})), Vu = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = tr(), i = SyntaxError, s = parseInt, l = String.fromCharCode, b = r("".charAt), h = r("".slice), E = r(/./.exec), T = {
    '\\"': '"',
    "\\\\": "\\",
    "\\/": "/",
    "\\b": "\b",
    "\\f": "\f",
    "\\n": `
`,
    "\\r": "\r",
    "\\t": "	"
  }, S = /^[\da-f]{4}$/i, j = /^[\u0000-\u001F]$/;
  e.exports = function(V, O) {
    for (var X = !0, B = ""; O < V.length; ) {
      var G = b(V, O);
      if (G === "\\") {
        var Y = h(V, O, O + 2);
        if (n(T, Y))
          B += T[Y], O += 2;
        else if (Y === "\\u") {
          O += 2;
          var ue = h(V, O, O + 4);
          if (!E(S, ue)) throw new i("Bad Unicode escape at: " + O);
          B += l(s(ue, 16)), O += 4;
        } else throw new i('Unknown escape sequence: "' + Y + '"');
      } else if (G === '"') {
        X = !1, O++;
        break;
      } else {
        if (E(j, G)) throw new i("Bad control character in string literal at: " + O);
        B += G, O++;
      }
    }
    if (X) throw new i("Unterminated string at: " + O);
    return {
      value: B,
      end: O
    };
  };
})), Ku = /* @__PURE__ */ J(((c, e) => {
  var r = Mt();
  e.exports = !r(function() {
    var n = "9007199254740993", i = JSON.rawJSON(n);
    return !JSON.isRawJSON(i) || JSON.stringify(i) !== n;
  });
})), ia = /* @__PURE__ */ J((() => {
  var c = $t(), e = qr(), r = Vt(), n = Ut(), i = Mt(), s = aa(), l = Kt(), b = Gt(), h = Xr(), E = Hu(), T = Fn(), S = Gr(), j = ss(), V = ra().includes, O = tr(), X = hr(), B = Vu(), G = Bn(), Y = Dn(), ue = Ku(), re = String, se = TypeError, H = e("JSON", "stringify"), U = e("BigInt"), D = n("".valueOf), Q = n((!0).valueOf), ve = U && n(U.prototype.valueOf), L = n(/./.exec), le = n("".charAt), Re = n("".charCodeAt), fe = n("".replace), P = n("".slice), oe = n([].push), Ae = n([].pop), Ce = n(1.1.toString), $ = /[\uD800-\uDFFF]/g, He = /^[\uD800-\uDBFF]$/, ot = /^[\uDC00-\uDFFF]$/, vt = /^\d+$/, Ie = G(), z = G(), F = G(), m = Ie.length, he = z.length, te = !Y || i(function() {
    var lt = e("Symbol")("stringify detection");
    return H([lt]) !== "[null]" || H({ a: lt }) !== "{}" || H(Object(lt)) !== "{}";
  }), De = i(function() {
    return H("\uDF06\uD834") !== '"\\udf06\\ud834"' || H("\uDEAD") !== '"\\udead"';
  }), ee = ue ? e("JSON", "isRawJSON") : E, pe = te ? function(lt, ze, _e) {
    return H(lt, function(de, ce) {
      var ye = r(ze, this, de, ce);
      if (!T(ye)) return ye;
    }, _e);
  } : H, Ne = function(lt, ze, _e) {
    var de = le(_e, ze - 1), ce = le(_e, ze + 1);
    return L(He, lt) && !L(ot, ce) || L(ot, lt) && !L(He, de) ? "\\u" + Ce(Re(lt, 0), 16) : lt;
  }, $e = function(lt) {
    if (s(lt)) {
      for (var ze = lt.length, _e = [], de = h(null), ce = 0; ce < ze; ce++) {
        var ye = lt[ce], Ye;
        if (typeof ye == "string") Ye = ye;
        else if (typeof ye == "number" || S(ye) === "Number" || S(ye) === "String") Ye = X(ye);
        else continue;
        O(de, Ye) || (de[Ye] = !0, oe(_e, Ye));
      }
      return _e;
    }
  }, Oe = function(lt, ze) {
    try {
      return lt(ze), !0;
    } catch {
      return !1;
    }
  }, nt = function(lt) {
    var ze = S(lt);
    return ze === "Number" && Oe(j, lt) || ze === "String" && Oe(D, lt) || ze === "Boolean" && Oe(Q, lt) || !!ve && ze === "BigInt" && Oe(ve, lt);
  }, Ze = function(lt) {
    if (!b(lt) || l(lt) || s(lt)) return !1;
    try {
      return !nt(lt);
    } catch {
      return !0;
    }
  }, Je = function(lt, ze) {
    return { toJSON: function() {
      var _e = lt[ze];
      if (b(_e) || typeof _e == "bigint") {
        var de = _e.toJSON;
        l(de) && (_e = r(de, _e, ze));
      }
      return _e;
    } };
  }, _t = function(lt) {
    for (var ze = 0, _e = lt.length; ze < _e; ze++) if (L(vt, lt[ze])) return z;
    return "";
  }, ft = function(lt, ze, _e) {
    for (var de = h(null), ce = 0, ye = ze.length; ce < ye; ce++) {
      var Ye = ze[ce];
      de[_e + Ye] = Je(lt, Ye);
    }
    return de[F] = null, de;
  };
  H && c({
    target: "JSON",
    stat: !0,
    arity: 3,
    forced: te || De || !ue
  }, { stringify: function(ze, _e, de) {
    var ce = l(_e) ? _e : void 0, ye = ce ? void 0 : $e(_e), Ye = ye && _t(ye), Fe = [], We = [], ht = [], mt, ct = !1, Ve = !0, at = pe(ze, function(Qe, tt) {
      if (Qe = re(Qe), ye) {
        if (Qe === F) {
          Ae(We), mt = Ae(ht);
          return;
        }
        if (Ve) Ve = !1;
        else if (this !== mt && !s(this) && !V(ye, Qe)) return;
      } else ce && (tt = r(ce, this, Qe, tt));
      if (ee(tt))
        return ue ? tt : (ct = !0, Ie + (oe(Fe, tt.rawJSON) - 1));
      if (ye && Ze(tt)) {
        if (V(We, tt)) throw new se("Converting circular structure to JSON");
        var gt = ft(tt, ye, Ye);
        return oe(We, tt), oe(ht, mt), mt = gt, Ye && (ct = !0), gt;
      }
      return tt;
    }, de);
    if (typeof at != "string" || (De && (at = fe(at, $, Ne)), !ct)) return at;
    for (var qe = "", ae = at.length, Se = 0; Se < ae; Se++) {
      var Te = le(at, Se);
      if (Te === '"') {
        var je = B(at, ++Se).end - 1, be = P(at, Se, je);
        P(be, 0, m) === Ie ? qe += Fe[P(be, m)] : P(be, 0, he) === z ? qe += '"' + P(be, he) + '"' : qe += '"' + be + '"', Se = je;
      } else qe += Te;
    }
    return qe;
  } });
})), Ju = /* @__PURE__ */ J((() => {
  var c = $t(), e = Dn(), r = Mt(), n = ja(), i = br();
  c({
    target: "Object",
    stat: !0,
    forced: !e || r(function() {
      n.f(1);
    })
  }, { getOwnPropertySymbols: function(l) {
    var b = n.f;
    return b ? b(i(l)) : [];
  } });
})), $a = /* @__PURE__ */ J((() => {
  Wu(), zu(), Gu(), ia(), Ju();
})), sa = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Jt(), i = $n(), s = n("species");
  e.exports = function(l) {
    return i >= 51 || !r(function() {
      var b = [], h = b.constructor = {};
      return h[s] = function() {
        return { foo: 1 };
      }, b[l](Boolean).foo !== 1;
    });
  };
})), ua = /* @__PURE__ */ J((() => {
  var c = $t(), e = Nr().filter;
  c({
    target: "Array",
    proto: !0,
    forced: !sa()("filter")
  }, { filter: function(n) {
    return e(this, n, arguments.length > 1 ? arguments[1] : void 0);
  } });
})), bi = /* @__PURE__ */ J((() => {
  var c = $t(), e = Mt(), r = xr(), n = vn().f, i = Yt();
  c({
    target: "Object",
    stat: !0,
    forced: !i || e(function() {
      n(1);
    }),
    sham: !i
  }, { getOwnPropertyDescriptor: function(l, b) {
    return n(r(l), b);
  } });
})), _i = /* @__PURE__ */ J((() => {
  var c = $t(), e = Yt(), r = Zi(), n = xr(), i = vn(), s = Gn();
  c({
    target: "Object",
    stat: !0,
    sham: !e
  }, { getOwnPropertyDescriptors: function(b) {
    for (var h = n(b), E = i.f, T = r(h), S = {}, j = 0, V, O; T.length > j; )
      O = E(h, V = T[j++]), O !== void 0 && s(S, V, O);
    return S;
  } });
})), oa = /* @__PURE__ */ J(((c, e) => {
  function r(i, s, l, b, h, E, T) {
    try {
      var S = i[E](T), j = S.value;
    } catch (V) {
      l(V);
      return;
    }
    S.done ? s(j) : Promise.resolve(j).then(b, h);
  }
  function n(i) {
    return function() {
      var s = this, l = arguments;
      return new Promise(function(b, h) {
        var E = i.apply(s, l);
        function T(j) {
          r(E, b, h, T, S, "next", j);
        }
        function S(j) {
          r(E, b, h, T, S, "throw", j);
        }
        T(void 0);
      });
    };
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Pn = /* @__PURE__ */ J(((c, e) => {
  function r(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), wi = /* @__PURE__ */ J(((c, e) => {
  function r(n, i) {
    return e.exports = r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(s, l) {
      return s.__proto__ = l, s;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, r(n, i);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), yn = /* @__PURE__ */ J(((c, e) => {
  var r = wi();
  function n(i, s) {
    if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function");
    i.prototype = Object.create(s && s.prototype, { constructor: {
      value: i,
      writable: !0,
      configurable: !0
    } }), Object.defineProperty(i, "prototype", { writable: !1 }), s && r(i, s);
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), en = /* @__PURE__ */ J(((c, e) => {
  function r(n) {
    "@babel/helpers - typeof";
    return e.exports = r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, r(n);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), gn = /* @__PURE__ */ J(((c, e) => {
  var r = en().default, n = Pn();
  function i(s, l) {
    if (l && (r(l) == "object" || typeof l == "function")) return l;
    if (l !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return n(s);
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
})), tn = /* @__PURE__ */ J(((c, e) => {
  function r(n) {
    return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
      return i.__proto__ || Object.getPrototypeOf(i);
    }, e.exports.__esModule = !0, e.exports.default = e.exports, r(n);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Yu = /* @__PURE__ */ J(((c, e) => {
  var r = en().default;
  function n(i, s) {
    if (r(i) != "object" || !i) return i;
    var l = i[Symbol.toPrimitive];
    if (l !== void 0) {
      var b = l.call(i, s || "default");
      if (r(b) != "object") return b;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (s === "string" ? String : Number)(i);
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), us = /* @__PURE__ */ J(((c, e) => {
  var r = en().default, n = Yu();
  function i(s) {
    var l = n(s, "string");
    return r(l) == "symbol" ? l : l + "";
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
})), An = /* @__PURE__ */ J(((c, e) => {
  var r = us();
  function n(i, s, l) {
    return (s = r(s)) in i ? Object.defineProperty(i, s, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : i[s] = l, i;
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), mn = /* @__PURE__ */ J(((c, e) => {
  var r = us();
  function n(s, l) {
    for (var b = 0; b < l.length; b++) {
      var h = l[b];
      h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(s, r(h.key), h);
    }
  }
  function i(s, l, b) {
    return l && n(s.prototype, l), b && n(s, b), Object.defineProperty(s, "prototype", { writable: !1 }), s;
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
})), bn = /* @__PURE__ */ J(((c, e) => {
  function r(n, i) {
    if (!(n instanceof i)) throw new TypeError("Cannot call a class as a function");
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Da = /* @__PURE__ */ J((() => {
  var c = $t(), e = Nr().map;
  c({
    target: "Array",
    proto: !0,
    forced: !sa()("map")
  }, { map: function(n) {
    return e(this, n, arguments.length > 1 ? arguments[1] : void 0);
  } });
})), Qu = /* @__PURE__ */ J(((c, e) => {
  var r = pi(), n = hn();
  e.exports = r ? {}.toString : function() {
    return "[object " + n(this) + "]";
  };
})), Mn = /* @__PURE__ */ J((() => {
  var c = pi(), e = Tr(), r = Qu();
  c || e(Object.prototype, "toString", r, { unsafe: !0 });
})), os = /* @__PURE__ */ J(((c, e) => {
  e.exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
})), ls = /* @__PURE__ */ J(((c, e) => {
  var r = Na()("span").classList, n = r && r.constructor && r.constructor.prototype;
  e.exports = n === Object.prototype ? void 0 : n;
})), Fa = /* @__PURE__ */ J(((c, e) => {
  var r = Mt();
  e.exports = function(n, i) {
    var s = [][n];
    return !!s && r(function() {
      s.call(null, i || function() {
        return 1;
      }, 1);
    });
  };
})), Xu = /* @__PURE__ */ J(((c, e) => {
  var r = Nr().forEach, n = Fa()("forEach");
  e.exports = n ? [].forEach : function(s) {
    return r(this, s, arguments.length > 1 ? arguments[1] : void 0);
  };
})), la = /* @__PURE__ */ J((() => {
  var c = Dt(), e = os(), r = ls(), n = Xu(), i = un(), s = function(b) {
    if (b && b.forEach !== n) try {
      i(b, "forEach", n);
    } catch {
      b.forEach = n;
    }
  };
  for (var l in e) e[l] && s(c[l] && c[l].prototype);
  s(r);
})), cs = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = pn(), i = Gr(), s = function(l) {
    return n.slice(0, l.length) === l;
  };
  e.exports = (function() {
    return s("Bun/") ? "BUN" : s("Cloudflare-Workers") ? "CLOUDFLARE" : s("Deno/") ? "DENO" : s("Node.js/") ? "NODE" : r.Bun && typeof Bun.version == "string" ? "BUN" : r.Deno && typeof Deno.version == "object" ? "DENO" : i(r.process) === "process" ? "NODE" : r.window && r.document ? "BROWSER" : "REST";
  })();
})), Si = /* @__PURE__ */ J(((c, e) => {
  var r = cs();
  e.exports = r === "NODE";
})), Zu = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Br();
  e.exports = function(i, s, l) {
    try {
      return r(n(Object.getOwnPropertyDescriptor(i, s)[l]));
    } catch {
    }
  };
})), eo = /* @__PURE__ */ J(((c, e) => {
  var r = Gt();
  e.exports = function(n) {
    return r(n) || n === null;
  };
})), to = /* @__PURE__ */ J(((c, e) => {
  var r = eo(), n = String, i = TypeError;
  e.exports = function(s) {
    if (r(s)) return s;
    throw new i("Can't set " + n(s) + " as a prototype");
  };
})), Hn = /* @__PURE__ */ J(((c, e) => {
  var r = Zu(), n = Gt(), i = Hr(), s = to();
  e.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
    var l = !1, b = {}, h;
    try {
      h = r(Object.prototype, "__proto__", "set"), h(b, []), l = b instanceof Array;
    } catch {
    }
    return function(T, S) {
      return i(T), s(S), n(T) && (l ? h(T, S) : T.__proto__ = S), T;
    };
  })() : void 0);
})), qa = /* @__PURE__ */ J(((c, e) => {
  var r = qr(), n = Zr(), i = Jt(), s = Yt(), l = i("species");
  e.exports = function(b) {
    var h = r(b);
    s && h && !h[l] && n(h, l, {
      configurable: !0,
      get: function() {
        return this;
      }
    });
  };
})), _n = /* @__PURE__ */ J(((c, e) => {
  var r = sn(), n = TypeError;
  e.exports = function(i, s) {
    if (r(s, i)) return i;
    throw new n("Incorrect invocation");
  };
})), fs = /* @__PURE__ */ J(((c, e) => {
  var r = cr(), n = vi(), i = kn(), s = Jt()("species");
  e.exports = function(l, b) {
    var h = r(l).constructor, E;
    return h === void 0 || i(E = r(h)[s]) ? b : n(E);
  };
})), ki = /* @__PURE__ */ J(((c, e) => {
  var r = TypeError;
  e.exports = function(n, i) {
    if (n < i) throw new r("Not enough arguments");
    return n;
  };
})), ds = /* @__PURE__ */ J(((c, e) => {
  var r = pn();
  e.exports = /ipad|iphone|ipod/i.test(r) && /applewebkit/i.test(r);
})), ps = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = zn(), i = ln(), s = Kt(), l = tr(), b = Mt(), h = ts(), E = on(), T = Na(), S = ki(), j = ds(), V = Si(), O = r.setImmediate, X = r.clearImmediate, B = r.process, G = r.Dispatch, Y = r.Function, ue = r.MessageChannel, re = r.String, se = 0, H = {}, U = "onreadystatechange", D, Q, ve, L;
  b(function() {
    D = r.location;
  });
  var le = function(oe) {
    if (l(H, oe)) {
      var Ae = H[oe];
      delete H[oe], Ae();
    }
  }, Re = function(oe) {
    return function() {
      le(oe);
    };
  }, fe = function(oe) {
    le(oe.data);
  }, P = function(oe) {
    r.postMessage(re(oe), D.protocol + "//" + D.host);
  };
  (!O || !X) && (O = function(Ae) {
    S(arguments.length, 1);
    var Ce = s(Ae) ? Ae : Y(Ae), $ = E(arguments, 1);
    return H[++se] = function() {
      n(Ce, void 0, $);
    }, Q(se), se;
  }, X = function(Ae) {
    delete H[Ae];
  }, V ? Q = function(oe) {
    B.nextTick(Re(oe));
  } : G && G.now ? Q = function(oe) {
    G.now(Re(oe));
  } : ue && !j ? (ve = new ue(), L = ve.port2, ve.port1.onmessage = fe, Q = i(L.postMessage, L)) : r.addEventListener && s(r.postMessage) && !r.importScripts && D && D.protocol !== "file:" && !b(P) ? (Q = P, r.addEventListener("message", fe, !1)) : U in T("script") ? Q = function(oe) {
    h.appendChild(T("script"))[U] = function() {
      h.removeChild(this), le(oe);
    };
  } : Q = function(oe) {
    setTimeout(Re(oe), 0);
  }), e.exports = {
    set: O,
    clear: X
  };
})), vs = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Yt(), i = Object.getOwnPropertyDescriptor;
  e.exports = function(s) {
    if (!n) return r[s];
    var l = i(r, s);
    return l && l.value;
  };
})), hs = /* @__PURE__ */ J(((c, e) => {
  var r = function() {
    this.head = null, this.tail = null;
  };
  r.prototype = {
    add: function(n) {
      var i = {
        item: n,
        next: null
      }, s = this.tail;
      s ? s.next = i : this.head = i, this.tail = i;
    },
    get: function() {
      var n = this.head;
      if (n)
        return (this.head = n.next) === null && (this.tail = null), n.item;
    }
  }, e.exports = r;
})), ro = /* @__PURE__ */ J(((c, e) => {
  var r = pn();
  e.exports = /ipad|iphone|ipod/i.test(r) && typeof Pebble < "u";
})), no = /* @__PURE__ */ J(((c, e) => {
  var r = pn();
  e.exports = /web0s(?!.*chrome)/i.test(r);
})), ao = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = vs(), i = ln(), s = ps().set, l = hs(), b = ds(), h = ro(), E = no(), T = Si(), S = r.MutationObserver || r.WebKitMutationObserver, j = r.document, V = r.process, O = r.Promise, X = n("queueMicrotask"), B, G, Y, ue, re;
  if (!X) {
    var se = new l(), H = function() {
      var U, D;
      for (T && (U = V.domain) && U.exit(); D = se.get(); ) try {
        D();
      } catch (Q) {
        throw se.head && B(), Q;
      }
      U && U.enter();
    };
    !b && !T && !E && S && j ? (G = !0, Y = j.createTextNode(""), new S(H).observe(Y, { characterData: !0 }), B = function() {
      Y.data = G = !G;
    }) : !h && O && O.resolve ? (ue = O.resolve(void 0), ue.constructor = O, re = i(ue.then, ue), B = function() {
      re(H);
    }) : T ? B = function() {
      V.nextTick(H);
    } : (s = i(s, r), B = function() {
      s(H);
    }), X = function(U) {
      se.head || B(), se.add(U);
    };
  }
  e.exports = X;
})), io = /* @__PURE__ */ J(((c, e) => {
  e.exports = function(r, n) {
    try {
      arguments.length === 1 ? console.error(r) : console.error(r, n);
    } catch {
    }
  };
})), Ii = /* @__PURE__ */ J(((c, e) => {
  e.exports = function(r) {
    try {
      return {
        error: !1,
        value: r()
      };
    } catch (n) {
      return {
        error: !0,
        value: n
      };
    }
  };
})), ca = /* @__PURE__ */ J(((c, e) => {
  var r = Dt();
  e.exports = r.Promise;
})), fa = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = ca(), i = Kt(), s = Ua(), l = ci(), b = Jt(), h = cs(), E = Wr(), T = $n(), S = n && n.prototype, j = b("species"), V = !1, O = i(r.PromiseRejectionEvent), X = s("Promise", function() {
    var B = l(n), G = B !== String(n);
    if (!G && T === 66 || E && !(S.catch && S.finally)) return !0;
    if (!T || T < 51 || !/native code/.test(B)) {
      var Y = new n(function(se) {
        se(1);
      }), ue = function(se) {
        se(function() {
        }, function() {
        });
      }, re = Y.constructor = {};
      if (re[j] = ue, V = Y.then(function() {
      }) instanceof ue, !V) return !0;
    }
    return !G && (h === "BROWSER" || h === "DENO") && !O;
  });
  e.exports = {
    CONSTRUCTOR: X,
    REJECTION_EVENT: O,
    SUBCLASSING: V
  };
})), da = /* @__PURE__ */ J(((c, e) => {
  var r = Br(), n = TypeError, i = function(s) {
    var l, b;
    this.promise = new s(function(h, E) {
      if (l !== void 0 || b !== void 0) throw new n("Bad Promise constructor");
      l = h, b = E;
    }), this.resolve = r(l), this.reject = r(b);
  };
  e.exports.f = function(s) {
    return new i(s);
  };
})), so = /* @__PURE__ */ J((() => {
  var c = $t(), e = Wr(), r = Si(), n = Dt(), i = yi(), s = Vt(), l = Tr(), b = Hn(), h = Qr(), E = qa(), T = Br(), S = Kt(), j = Gt(), V = _n(), O = fs(), X = ps().set, B = ao(), G = io(), Y = Ii(), ue = hs(), re = Mr(), se = ca(), H = fa(), U = da(), D = "Promise", Q = H.CONSTRUCTOR, ve = H.REJECTION_EVENT, L = H.SUBCLASSING, le = re.getterFor(D), Re = re.set, fe = se && se.prototype, P = se, oe = fe, Ae = n.TypeError, Ce = n.document, $ = n.process, He = U.f, ot = He, vt = !!(Ce && Ce.createEvent && n.dispatchEvent), Ie = "unhandledrejection", z = "rejectionhandled", F = 0, m = 1, he = 2, te = 1, De = 2, ee, pe, Ne, $e, Oe = function(ce) {
    var ye;
    return j(ce) && S(ye = ce.then) ? ye : !1;
  }, nt = function(ce, ye) {
    var Ye = ye.value, Fe = ye.state === m, We = Fe ? ce.ok : ce.fail, ht = ce.resolve, mt = ce.reject, ct = ce.domain, Ve, at, qe;
    try {
      We ? (Fe || (ye.rejection === De && lt(ye), ye.rejection = te), We === !0 ? Ve = Ye : (ct && ct.enter(), Ve = We(Ye), ct && (ct.exit(), qe = !0)), Ve === ce.promise ? mt(new Ae("Promise-chain cycle")) : (at = Oe(Ve)) ? s(at, Ve, ht, mt) : ht(Ve)) : mt(Ye);
    } catch (ae) {
      ct && !qe && ct.exit(), mt(ae);
    }
  }, Ze = function(ce, ye) {
    ce.notified || (ce.notified = !0, B(function() {
      for (var Ye = ce.reactions, Fe; Fe = Ye.get(); ) nt(Fe, ce);
      ce.notified = !1, ye && !ce.rejection && _t(ce);
    }));
  }, Je = function(ce, ye, Ye) {
    var Fe, We;
    vt ? (Fe = Ce.createEvent("Event"), Fe.promise = ye, Fe.reason = Ye, Fe.initEvent(ce, !1, !0), n.dispatchEvent(Fe)) : Fe = {
      promise: ye,
      reason: Ye
    }, !ve && (We = n["on" + ce]) ? We(Fe) : ce === Ie && G("Unhandled promise rejection", Ye);
  }, _t = function(ce) {
    s(X, n, function() {
      var ye = ce.facade, Ye = ce.value, Fe = ft(ce), We;
      if (Fe && (We = Y(function() {
        r ? $.emit("unhandledRejection", Ye, ye) : Je(Ie, ye, Ye);
      }), ce.rejection = r || ft(ce) ? De : te, We.error))
        throw We.value;
    });
  }, ft = function(ce) {
    return ce.rejection !== te && !ce.parent;
  }, lt = function(ce) {
    s(X, n, function() {
      var ye = ce.facade;
      r ? $.emit("rejectionHandled", ye) : Je(z, ye, ce.value);
    });
  }, ze = function(ce, ye, Ye) {
    return function(Fe) {
      ce(ye, Fe, Ye);
    };
  }, _e = function(ce, ye, Ye) {
    ce.done || (ce.done = !0, Ye && (ce = Ye), ce.value = ye, ce.state = he, Ze(ce, !0));
  }, de = function(ce, ye, Ye) {
    if (!ce.done) {
      ce.done = !0, Ye && (ce = Ye);
      try {
        if (ce.facade === ye) throw new Ae("Promise can't be resolved itself");
        var Fe = Oe(ye);
        Fe ? B(function() {
          var We = { done: !1 };
          try {
            s(Fe, ye, ze(de, We, ce), ze(_e, We, ce));
          } catch (ht) {
            _e(We, ht, ce);
          }
        }) : (ce.value = ye, ce.state = m, Ze(ce, !1));
      } catch (We) {
        _e({ done: !1 }, We, ce);
      }
    }
  };
  if (Q && (P = function(ye) {
    V(this, oe), T(ye), s(ee, this);
    var Ye = le(this);
    try {
      ye(ze(de, Ye), ze(_e, Ye));
    } catch (Fe) {
      _e(Ye, Fe);
    }
  }, oe = P.prototype, ee = function(ye) {
    Re(this, {
      type: D,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new ue(),
      rejection: !1,
      state: F,
      value: null
    });
  }, ee.prototype = l(oe, "then", function(ye, Ye) {
    var Fe = le(this), We = He(O(this, P));
    return Fe.parent = !0, We.ok = S(ye) ? ye : !0, We.fail = S(Ye) && Ye, We.domain = r ? $.domain : void 0, Fe.state === F ? Fe.reactions.add(We) : B(function() {
      nt(We, Fe);
    }), We.promise;
  }), pe = function() {
    var ce = new ee(), ye = le(ce);
    this.promise = ce, this.resolve = ze(de, ye), this.reject = ze(_e, ye);
  }, U.f = He = function(ce) {
    return ce === P || ce === Ne ? new pe(ce) : ot(ce);
  }, !e && S(se) && fe !== Object.prototype)) {
    $e = fe.then, L || l(fe, "then", function(ye, Ye) {
      var Fe = this;
      return new P(function(We, ht) {
        s($e, Fe, We, ht);
      }).then(ye, Ye);
    }, { unsafe: !0 });
    try {
      delete fe.constructor;
    } catch {
    }
    b && b(fe, oe);
  }
  c({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: Q
  }, { Promise: P }), Ne = i.Promise, h(P, D, !1, !0), E(D);
})), Ba = /* @__PURE__ */ J(((c, e) => {
  e.exports = Object.create ? /* @__PURE__ */ Object.create(null) : {};
})), Ti = /* @__PURE__ */ J(((c, e) => {
  var r = Jt(), n = Ba(), i = r("iterator"), s = Array.prototype;
  e.exports = function(l) {
    return l !== void 0 && (n.Array === l || s[i] === l);
  };
})), pa = /* @__PURE__ */ J(((c, e) => {
  var r = Gr(), n = kn(), i = Tn(), s = Jt()("iterator"), l = Array.prototype;
  e.exports = function(b) {
    if (!n(b)) return i(b, s) || i(b, "@@iterator") || (r(b) === "Arguments" ? l[s] : void 0);
  };
})), Wa = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = Kt(), i = cr(), s = In(), l = pa(), b = TypeError;
  e.exports = function(h, E) {
    var T = arguments.length < 2 ? l(h) : E;
    if (n(T)) return i(r(T, h));
    throw new b(s(h) + " is not iterable");
  };
})), Ri = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = cr(), i = Tn();
  e.exports = function(s, l, b) {
    var h, E;
    n(s);
    try {
      if (h = i(s, "return"), !h) {
        if (l === "throw") throw b;
        return b;
      }
      h = r(h, s);
    } catch (T) {
      E = !0, h = T;
    }
    if (l === "throw") throw b;
    if (E) throw h;
    return n(h), b;
  };
})), va = /* @__PURE__ */ J(((c, e) => {
  var r = ln(), n = Vt(), i = cr(), s = In(), l = Ti(), b = _r(), h = sn(), E = Wa(), T = pa(), S = Ri(), j = TypeError, V = function(X, B) {
    this.stopped = X, this.result = B;
  }, O = V.prototype;
  e.exports = function(X, B, G) {
    var Y = G && G.that, ue = !!(G && G.AS_ENTRIES), re = !!(G && G.IS_RECORD), se = !!(G && G.IS_ITERATOR), H = !!(G && G.INTERRUPTED), U = r(B, Y), D, Q, ve, L, le, Re, fe, P = function(Ce) {
      var $ = D;
      return D = void 0, $ && S($, "normal"), new V(!0, Ce);
    }, oe = function(Ce) {
      return ue ? (i(Ce), H ? U(Ce[0], Ce[1], P) : U(Ce[0], Ce[1])) : H ? U(Ce, P) : U(Ce);
    };
    if (re) D = X.iterator;
    else if (se) D = X;
    else {
      if (Q = T(X), !Q) throw new j(s(X) + " is not iterable");
      if (l(Q)) {
        for (ve = 0, L = b(X); L > ve; ve++)
          if (le = oe(X[ve]), le && h(O, le)) return le;
        return new V(!1);
      }
      D = E(X, Q);
    }
    for (Re = re ? X.next : D.next; !(fe = n(Re, D)).done; ) {
      var Ae = fe.value;
      try {
        le = oe(Ae);
      } catch (Ce) {
        if (D) S(D, "throw", Ce);
        else throw Ce;
      }
      if (typeof le == "object" && le && h(O, le)) return le;
    }
    return new V(!1);
  };
})), za = /* @__PURE__ */ J(((c, e) => {
  var r = Jt()("iterator"), n = !1;
  try {
    var i = 0, s = {
      next: function() {
        return { done: !!i++ };
      },
      return: function() {
        n = !0;
      }
    };
    s[r] = function() {
      return this;
    }, Array.from(s, function() {
      throw 2;
    });
  } catch {
  }
  e.exports = function(l, b) {
    try {
      if (!b && !n) return !1;
    } catch {
      return !1;
    }
    var h = !1;
    try {
      var E = {};
      E[r] = function() {
        return { next: function() {
          return { done: h = !0 };
        } };
      }, l(E);
    } catch {
    }
    return h;
  };
})), ys = /* @__PURE__ */ J(((c, e) => {
  var r = ca(), n = za(), i = fa().CONSTRUCTOR;
  e.exports = i || !n(function(s) {
    r.all(s).then(void 0, function() {
    });
  });
})), uo = /* @__PURE__ */ J((() => {
  var c = $t(), e = Vt(), r = Br(), n = da(), i = Ii(), s = va();
  c({
    target: "Promise",
    stat: !0,
    forced: ys()
  }, { all: function(b) {
    var h = this, E = n.f(h), T = E.resolve, S = E.reject, j = i(function() {
      var V = r(h.resolve), O = [], X = 0, B = 1;
      s(b, function(G) {
        var Y = X++, ue = !1;
        B++, e(V, h, G).then(function(re) {
          ue || (ue = !0, O[Y] = re, --B || T(O));
        }, S);
      }), --B || T(O);
    });
    return j.error && S(j.value), E.promise;
  } });
})), oo = /* @__PURE__ */ J((() => {
  var c = $t(), e = Wr(), r = fa().CONSTRUCTOR, n = ca(), i = qr(), s = Kt(), l = Tr(), b = n && n.prototype;
  if (c({
    target: "Promise",
    proto: !0,
    forced: r,
    real: !0
  }, { catch: function(E) {
    return this.then(void 0, E);
  } }), !e && s(n)) {
    var h = i("Promise").prototype.catch;
    b.catch !== h && l(b, "catch", h, { unsafe: !0 });
  }
})), lo = /* @__PURE__ */ J((() => {
  var c = $t(), e = Vt(), r = Br(), n = da(), i = Ii(), s = va();
  c({
    target: "Promise",
    stat: !0,
    forced: ys()
  }, { race: function(b) {
    var h = this, E = n.f(h), T = E.reject, S = i(function() {
      var j = r(h.resolve);
      s(b, function(V) {
        e(j, h, V).then(E.resolve, T);
      });
    });
    return S.error && T(S.value), E.promise;
  } });
})), co = /* @__PURE__ */ J((() => {
  var c = $t(), e = da(), r = fa().CONSTRUCTOR;
  c({
    target: "Promise",
    stat: !0,
    forced: r
  }, { reject: function(i) {
    var s = e.f(this), l = s.reject;
    return l(i), s.promise;
  } });
})), fo = /* @__PURE__ */ J(((c, e) => {
  var r = cr(), n = Gt(), i = da();
  e.exports = function(s, l) {
    if (r(s), n(l) && l.constructor === s) return l;
    var b = i.f(s), h = b.resolve;
    return h(l), b.promise;
  };
})), po = /* @__PURE__ */ J((() => {
  var c = $t(), e = qr(), r = Wr(), n = ca(), i = fa().CONSTRUCTOR, s = fo(), l = e("Promise"), b = r && !i;
  c({
    target: "Promise",
    stat: !0,
    forced: r || i
  }, { resolve: function(E) {
    return s(b && this === l ? n : this, E);
  } });
})), Nn = /* @__PURE__ */ J((() => {
  so(), uo(), oo(), lo(), co(), po();
})), gs = /* @__PURE__ */ J(((c, e) => {
  function r(n, i) {
    this.v = n, this.k = i;
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), ms = /* @__PURE__ */ J(((c, e) => {
  function r(n, i, s, l) {
    var b = Object.defineProperty;
    try {
      b({}, "", {});
    } catch {
      b = 0;
    }
    e.exports = r = function(E, T, S, j) {
      function V(O, X) {
        r(E, O, function(B) {
          return this._invoke(O, X, B);
        });
      }
      T ? b ? b(E, T, {
        value: S,
        enumerable: !j,
        configurable: !j,
        writable: !j
      }) : E[T] = S : (V("next", 0), V("throw", 1), V("return", 2));
    }, e.exports.__esModule = !0, e.exports.default = e.exports, r(n, i, s, l);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), bs = /* @__PURE__ */ J(((c, e) => {
  var r = ms();
  function n() {
    var i, s, l = typeof Symbol == "function" ? Symbol : {}, b = l.iterator || "@@iterator", h = l.toStringTag || "@@toStringTag";
    function E(G, Y, ue, re) {
      var se = Y && Y.prototype instanceof S ? Y : S, H = Object.create(se.prototype);
      return r(H, "_invoke", (function(U, D, Q) {
        var ve, L, le, Re = 0, fe = Q || [], P = !1, oe = {
          p: 0,
          n: 0,
          v: i,
          a: Ae,
          f: Ae.bind(i, 4),
          d: function($, He) {
            return ve = $, L = 0, le = i, oe.n = He, T;
          }
        };
        function Ae(Ce, $) {
          for (L = Ce, le = $, s = 0; !P && Re && !He && s < fe.length; s++) {
            var He, ot = fe[s], vt = oe.p, Ie = ot[2];
            Ce > 3 ? (He = Ie === $) && (le = ot[(L = ot[4]) ? 5 : (L = 3, 3)], ot[4] = ot[5] = i) : ot[0] <= vt && ((He = Ce < 2 && vt < ot[1]) ? (L = 0, oe.v = $, oe.n = ot[1]) : vt < Ie && (He = Ce < 3 || ot[0] > $ || $ > Ie) && (ot[4] = Ce, ot[5] = $, oe.n = Ie, L = 0));
          }
          if (He || Ce > 1) return T;
          throw P = !0, $;
        }
        return function(Ce, $, He) {
          if (Re > 1) throw TypeError("Generator is already running");
          for (P && $ === 1 && Ae($, He), L = $, le = He; (s = L < 2 ? i : le) || !P; ) {
            ve || (L ? L < 3 ? (L > 1 && (oe.n = -1), Ae(L, le)) : oe.n = le : oe.v = le);
            try {
              if (Re = 2, ve) {
                if (L || (Ce = "next"), s = ve[Ce]) {
                  if (!(s = s.call(ve, le))) throw TypeError("iterator result is not an object");
                  if (!s.done) return s;
                  le = s.value, L < 2 && (L = 0);
                } else L === 1 && (s = ve.return) && s.call(ve), L < 2 && (le = TypeError("The iterator does not provide a '" + Ce + "' method"), L = 1);
                ve = i;
              } else if ((s = (P = oe.n < 0) ? le : U.call(D, oe)) !== T) break;
            } catch (ot) {
              ve = i, L = 1, le = ot;
            } finally {
              Re = 1;
            }
          }
          return {
            value: s,
            done: P
          };
        };
      })(G, ue, re), !0), H;
    }
    var T = {};
    function S() {
    }
    function j() {
    }
    function V() {
    }
    s = Object.getPrototypeOf;
    var O = [][b] ? s(s([][b]())) : (r(s = {}, b, function() {
      return this;
    }), s), X = V.prototype = S.prototype = Object.create(O);
    function B(G) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(G, V) : (G.__proto__ = V, r(G, h, "GeneratorFunction")), G.prototype = Object.create(X), G;
    }
    return j.prototype = V, r(X, "constructor", V), r(V, "constructor", j), j.displayName = "GeneratorFunction", r(V, h, "GeneratorFunction"), r(X), r(X, h, "Generator"), r(X, b, function() {
      return this;
    }), r(X, "toString", function() {
      return "[object Generator]";
    }), (e.exports = n = function() {
      return {
        w: E,
        m: B
      };
    }, e.exports.__esModule = !0, e.exports.default = e.exports)();
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), _s = /* @__PURE__ */ J(((c, e) => {
  var r = gs(), n = ms();
  function i(s, l) {
    function b(E, T, S, j) {
      try {
        var V = s[E](T), O = V.value;
        return O instanceof r ? l.resolve(O.v).then(function(X) {
          b("next", X, S, j);
        }, function(X) {
          b("throw", X, S, j);
        }) : l.resolve(O).then(function(X) {
          V.value = X, S(V);
        }, function(X) {
          return b("throw", X, S, j);
        });
      } catch (X) {
        j(X);
      }
    }
    var h;
    this.next || (n(i.prototype), n(i.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
      return this;
    })), n(this, "_invoke", function(E, T, S) {
      function j() {
        return new l(function(V, O) {
          b(E, S, V, O);
        });
      }
      return h = h ? h.then(j, j) : j();
    }, !0);
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
})), ws = /* @__PURE__ */ J(((c, e) => {
  var r = bs(), n = _s();
  function i(s, l, b, h, E) {
    return new n(r().w(s, l, b, h), E || Promise);
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
})), vo = /* @__PURE__ */ J(((c, e) => {
  var r = ws();
  function n(i, s, l, b, h) {
    var E = r(i, s, l, b, h);
    return E.next().then(function(T) {
      return T.done ? T.value : E.next();
    });
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), ho = /* @__PURE__ */ J(((c, e) => {
  function r(n) {
    var i = Object(n), s = [];
    for (var l in i) s.unshift(l);
    return function b() {
      for (; s.length; ) if ((l = s.pop()) in i) return b.value = l, b.done = !1, b;
      return b.done = !0, b;
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), yo = /* @__PURE__ */ J(((c, e) => {
  var r = en().default;
  function n(i) {
    if (i != null) {
      var s = i[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], l = 0;
      if (s) return s.call(i);
      if (typeof i.next == "function") return i;
      if (!isNaN(i.length)) return { next: function() {
        return i && l >= i.length && (i = void 0), {
          value: i && i[l++],
          done: !i
        };
      } };
    }
    throw new TypeError(r(i) + " is not iterable");
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), go = /* @__PURE__ */ J(((c, e) => {
  var r = gs(), n = bs(), i = vo(), s = ws(), l = _s(), b = ho(), h = yo();
  function E() {
    "use strict";
    var T = n(), S = T.m(E), j = (Object.getPrototypeOf ? Object.getPrototypeOf(S) : S.__proto__).constructor;
    function V(B) {
      var G = typeof B == "function" && B.constructor;
      return !!G && (G === j || (G.displayName || G.name) === "GeneratorFunction");
    }
    var O = {
      throw: 1,
      return: 2,
      break: 3,
      continue: 3
    };
    function X(B) {
      var G, Y;
      return function(ue) {
        G || (G = {
          stop: function() {
            return Y(ue.a, 2);
          },
          catch: function() {
            return ue.v;
          },
          abrupt: function(se, H) {
            return Y(ue.a, O[se], H);
          },
          delegateYield: function(se, H, U) {
            return G.resultName = H, Y(ue.d, h(se), U);
          },
          finish: function(se) {
            return Y(ue.f, se);
          }
        }, Y = function(se, H, U) {
          ue.p = G.prev, ue.n = G.next;
          try {
            return se(H, U);
          } finally {
            G.next = ue.n;
          }
        }), G.resultName && (G[G.resultName] = ue.v, G.resultName = void 0), G.sent = ue.v, G.next = ue.n;
        try {
          return B.call(this, G);
        } finally {
          ue.p = G.prev, ue.n = G.next;
        }
      };
    }
    return (e.exports = E = function() {
      return {
        wrap: function(Y, ue, re, se) {
          return T.w(X(Y), ue, re, se && se.reverse());
        },
        isGeneratorFunction: V,
        mark: T.m,
        awrap: function(Y, ue) {
          return new r(Y, ue);
        },
        AsyncIterator: l,
        async: function(Y, ue, re, se, H) {
          return (V(ue) ? s : i)(X(Y), ue, re, se, H);
        },
        keys: b,
        values: h
      };
    }, e.exports.__esModule = !0, e.exports.default = e.exports)();
  }
  e.exports = E, e.exports.__esModule = !0, e.exports.default = e.exports;
})), ha = /* @__PURE__ */ J(((c, e) => {
  var r = go()();
  e.exports = r;
  try {
    regeneratorRuntime = r;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
  }
})), Ei = /* @__PURE__ */ J(((c, e) => {
  var r = TypeError, n = 9007199254740991;
  e.exports = function(i) {
    if (i > n) throw new r("Maximum allowed index exceeded");
    return i;
  };
})), Ga = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = aa(), i = TypeError, s = Object.getOwnPropertyDescriptor, l = r && !(function() {
    if (this !== void 0) return !0;
    try {
      Object.defineProperty([], "length", { writable: !1 }).length = 1;
    } catch (b) {
      return b instanceof TypeError;
    }
  })();
  e.exports = l ? function(b, h) {
    if (n(b) && !s(b, "length").writable) throw new i("Cannot set read only .length");
    return b.length = h;
  } : function(b, h) {
    return b.length = h;
  };
})), xn = /* @__PURE__ */ J((() => {
  var c = $t(), e = Mt(), r = aa(), n = Gt(), i = br(), s = _r(), l = Ei(), b = Gn(), h = Ga(), E = mi(), T = sa(), S = Jt(), j = $n(), V = S("isConcatSpreadable"), O = j >= 51 || !e(function() {
    var B = [];
    return B[V] = !1, B.concat()[0] !== B;
  }), X = function(B) {
    if (!n(B)) return !1;
    var G = B[V];
    return G !== void 0 ? !!G : r(B);
  };
  c({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: !O || !T("concat")
  }, { concat: function(G) {
    for (var Y = i(this), ue = E(Y, 0), re = 0, se = -1, H, U = arguments.length, D, Q; se < U; se++)
      if (Q = se === -1 ? Y : arguments[se], X(Q))
        for (D = s(Q), l(re + D), H = 0; H < D; H++, re++) H in Q && b(ue, re, Q[H]);
      else
        l(re + 1), b(ue, re++, Q);
    return h(ue, re), ue;
  } });
})), mo = /* @__PURE__ */ J(((c, e) => {
  var r = cr(), n = Ri();
  e.exports = function(i, s, l, b) {
    try {
      return b ? s(r(l)[0], l[1]) : s(l);
    } catch (h) {
      n(i, "throw", h);
    }
  };
})), Ss = /* @__PURE__ */ J(((c, e) => {
  var r = ln(), n = Vt(), i = br(), s = mo(), l = Ti(), b = La(), h = _r(), E = Gn(), T = Ga(), S = Wa(), j = pa(), V = Ri(), O = Ei(), X = Array;
  e.exports = function(G) {
    var Y = b(this), ue = arguments.length, re = ue > 1 ? arguments[1] : void 0, se = re !== void 0;
    se && (re = r(re, ue > 2 ? arguments[2] : void 0));
    var H = i(G), U = j(H), D = 0, Q, ve, L, le, Re, fe;
    if (U && !(this === X && l(U)))
      for (ve = Y ? new this() : [], le = S(H, U), Re = le.next; !(L = n(Re, le)).done; D++) {
        try {
          O(D);
        } catch (P) {
          V(le, "throw", P);
        }
        fe = se ? s(le, re, [L.value, D], !0) : L.value;
        try {
          E(ve, D, fe);
        } catch (P) {
          V(le, "throw", P);
        }
      }
    else
      for (Q = h(H), ve = Y ? new this(Q) : X(Q); Q > D; D++)
        fe = se ? re(H[D], D) : H[D], E(ve, D, fe);
    return T(ve, D), ve;
  };
})), Vn = /* @__PURE__ */ J((() => {
  var c = $t(), e = Ss();
  c({
    target: "Array",
    stat: !0,
    forced: !za()(function(r) {
      Array.from(r);
    })
  }, { from: e });
})), Ci = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Yr(), i = hr(), s = Hr(), l = r("".charAt), b = r("".charCodeAt), h = r("".slice), E = function(T) {
    return function(S, j) {
      var V = i(s(S)), O = n(j), X = V.length, B, G;
      return O < 0 || O >= X ? T ? "" : void 0 : (B = b(V, O), B < 55296 || B > 56319 || O + 1 === X || (G = b(V, O + 1)) < 56320 || G > 57343 ? T ? l(V, O) : B : T ? h(V, O, O + 2) : (B - 55296 << 10) + (G - 56320) + 65536);
    };
  };
  e.exports = {
    codeAt: E(!1),
    charAt: E(!0)
  };
})), bo = /* @__PURE__ */ J(((c, e) => {
  var r = Mt();
  e.exports = !r(function() {
    function n() {
    }
    return n.prototype.constructor = null, Object.getPrototypeOf(new n()) !== n.prototype;
  });
})), ya = /* @__PURE__ */ J(((c, e) => {
  var r = tr(), n = Kt(), i = br(), s = xa(), l = bo(), b = s("IE_PROTO"), h = Object, E = h.prototype;
  e.exports = l ? h.getPrototypeOf : function(T) {
    var S = i(T);
    if (r(S, b)) return S[b];
    var j = S.constructor;
    return n(j) && S instanceof j ? j.prototype : S instanceof h ? E : null;
  };
})), ks = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Kt(), i = Gt(), s = Xr(), l = ya(), b = Tr(), h = Jt(), E = Wr(), T = h("iterator"), S = !1, j, V, O;
  [].keys && (O = [].keys(), "next" in O ? (V = l(l(O)), V !== Object.prototype && (j = V)) : S = !0), !i(j) || r(function() {
    var X = {};
    return j[T].call(X) !== X;
  }) ? j = {} : E && (j = s(j)), n(j[T]) || b(j, T, function() {
    return this;
  }), e.exports = {
    IteratorPrototype: j,
    BUGGY_SAFARI_ITERATORS: S
  };
})), Is = /* @__PURE__ */ J(((c, e) => {
  var r = ks().IteratorPrototype, n = Xr(), i = Sn(), s = Qr(), l = Ba(), b = function() {
    return this;
  };
  e.exports = function(h, E, T, S) {
    var j = E + " Iterator";
    return h.prototype = n(r, { next: i(+!S, T) }), s(h, j, !1, !0), l[j] = b, h;
  };
})), Oi = /* @__PURE__ */ J(((c, e) => {
  var r = $t(), n = Vt(), i = Wr(), s = ea(), l = Kt(), b = Is(), h = ya(), E = Hn(), T = Qr(), S = un(), j = Tr(), V = Jt(), O = Ba(), X = ks(), B = s.PROPER, G = s.CONFIGURABLE, Y = X.IteratorPrototype, ue = X.BUGGY_SAFARI_ITERATORS, re = V("iterator"), se = "keys", H = "values", U = "entries", D = function() {
    return this;
  };
  e.exports = function(Q, ve, L, le, Re, fe, P) {
    b(L, ve, le);
    var oe = function(m) {
      if (m === Re && ot) return ot;
      if (!ue && m && m in $) return $[m];
      switch (m) {
        case se:
          return function() {
            return new L(this, m);
          };
        case H:
          return function() {
            return new L(this, m);
          };
        case U:
          return function() {
            return new L(this, m);
          };
      }
      return function() {
        return new L(this);
      };
    }, Ae = ve + " Iterator", Ce = !1, $ = Q.prototype, He = $[re] || $["@@iterator"] || Re && $[Re], ot = !ue && He || oe(Re), vt = ve === "Array" && $.entries || He, Ie, z, F;
    if (vt && (Ie = h(vt.call(new Q())), Ie !== Object.prototype && Ie.next && (!i && h(Ie) !== Y && (E ? E(Ie, Y) : l(Ie[re]) || j(Ie, re, D)), T(Ie, Ae, !0, !0), i && (O[Ae] = D))), B && Re === H && He && He.name !== H && (!i && G ? S($, "name", H) : (Ce = !0, ot = function() {
      return n(He, this);
    })), Re)
      if (z = {
        values: oe(H),
        keys: fe ? ot : oe(se),
        entries: oe(U)
      }, P)
        for (F in z) (ue || Ce || !(F in $)) && j($, F, z[F]);
      else r({
        target: ve,
        proto: !0,
        forced: ue || Ce
      }, z);
    return (!i || P) && $[re] !== ot && j($, re, ot, { name: Re }), O[ve] = ot, z;
  };
})), Ha = /* @__PURE__ */ J(((c, e) => {
  e.exports = function(r, n) {
    return {
      value: r,
      done: n
    };
  };
})), jn = /* @__PURE__ */ J((() => {
  var c = Ci().charAt, e = hr(), r = Mr(), n = Oi(), i = Ha(), s = "String Iterator", l = r.set, b = r.getterFor(s);
  n(String, "String", function(h) {
    l(this, {
      type: s,
      string: e(h),
      index: 0
    });
  }, function() {
    var E = b(this), T = E.string, S = E.index, j;
    return S >= T.length ? i(void 0, !0) : (j = c(T, S), E.index += j.length, i(j, !1));
  });
})), Kn = /* @__PURE__ */ J(((c, e) => {
  (function(r, n) {
    "use strict";
    typeof define == "function" && define.amd ? define(n) : typeof e == "object" && e.exports ? e.exports = n() : r.log = n();
  })(c, function() {
    "use strict";
    var r = function() {
    }, n = "undefined", i = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent), s = [
      "trace",
      "debug",
      "info",
      "warn",
      "error"
    ], l = {}, b = null;
    function h(B, G) {
      var Y = B[G];
      if (typeof Y.bind == "function") return Y.bind(B);
      try {
        return Function.prototype.bind.call(Y, B);
      } catch {
        return function() {
          return Function.prototype.apply.apply(Y, [B, arguments]);
        };
      }
    }
    function E() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
    }
    function T(B) {
      return B === "debug" && (B = "log"), typeof console === n ? !1 : B === "trace" && i ? E : console[B] !== void 0 ? h(console, B) : console.log !== void 0 ? h(console, "log") : r;
    }
    function S() {
      for (var B = this.getLevel(), G = 0; G < s.length; G++) {
        var Y = s[G];
        this[Y] = G < B ? r : this.methodFactory(Y, B, this.name);
      }
      if (this.log = this.debug, typeof console === n && B < this.levels.SILENT) return "No console available for logging";
    }
    function j(B) {
      return function() {
        typeof console !== n && (S.call(this), this[B].apply(this, arguments));
      };
    }
    function V(B, G, Y) {
      return T(B) || j.apply(this, arguments);
    }
    function O(B, G) {
      var Y = this, ue, re, se, H = "loglevel";
      typeof B == "string" ? H += ":" + B : typeof B == "symbol" && (H = void 0);
      function U(le) {
        var Re = (s[le] || "silent").toUpperCase();
        if (!(typeof window === n || !H)) {
          try {
            window.localStorage[H] = Re;
            return;
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(H) + "=" + Re + ";";
          } catch {
          }
        }
      }
      function D() {
        var le;
        if (!(typeof window === n || !H)) {
          try {
            le = window.localStorage[H];
          } catch {
          }
          if (typeof le === n) try {
            var Re = window.document.cookie, fe = encodeURIComponent(H), P = Re.indexOf(fe + "=");
            P !== -1 && (le = /^([^;]+)/.exec(Re.slice(P + fe.length + 1))[1]);
          } catch {
          }
          return Y.levels[le] === void 0 && (le = void 0), le;
        }
      }
      function Q() {
        if (!(typeof window === n || !H)) {
          try {
            window.localStorage.removeItem(H);
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(H) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch {
          }
        }
      }
      function ve(le) {
        var Re = le;
        if (typeof Re == "string" && Y.levels[Re.toUpperCase()] !== void 0 && (Re = Y.levels[Re.toUpperCase()]), typeof Re == "number" && Re >= 0 && Re <= Y.levels.SILENT) return Re;
        throw new TypeError("log.setLevel() called with invalid level: " + le);
      }
      Y.name = B, Y.levels = {
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
      }, Y.methodFactory = G || V, Y.getLevel = function() {
        return se ?? re ?? ue;
      }, Y.setLevel = function(le, Re) {
        return se = ve(le), Re !== !1 && U(se), S.call(Y);
      }, Y.setDefaultLevel = function(le) {
        re = ve(le), D() || Y.setLevel(le, !1);
      }, Y.resetLevel = function() {
        se = null, Q(), S.call(Y);
      }, Y.enableAll = function(le) {
        Y.setLevel(Y.levels.TRACE, le);
      }, Y.disableAll = function(le) {
        Y.setLevel(Y.levels.SILENT, le);
      }, Y.rebuild = function() {
        if (b !== Y && (ue = ve(b.getLevel())), S.call(Y), b === Y) for (var le in l) l[le].rebuild();
      }, ue = ve(b ? b.getLevel() : "WARN");
      var L = D();
      L != null && (se = ve(L)), S.call(Y);
    }
    b = new O(), b.getLogger = function(G) {
      if (typeof G != "symbol" && typeof G != "string" || G === "") throw new TypeError("You must supply a name when creating a logger.");
      var Y = l[G];
      return Y || (Y = l[G] = new O(G, b.methodFactory)), Y;
    };
    var X = typeof window !== n ? window.log : void 0;
    return b.noConflict = function() {
      return typeof window !== n && window.log === b && (window.log = X), b;
    }, b.getLoggers = function() {
      return l;
    }, b.default = b, b;
  });
})), _o = /* @__PURE__ */ xu({
  default: () => Ts,
  end: () => Oa,
  parse: () => ii,
  pattern: () => Ca,
  toSeconds: () => si
}), dn, Gi, Hi, Ca, ii, Oa, si, Ts, wo = Nu((() => {
  dn = "\\d+(?:[\\.,]\\d+)?", Gi = `P(?:${`(${dn}W)`}|${`(${dn}Y)?(${dn}M)?(${dn}D)?`}(?:${`T(${dn}H)?(${dn}M)?(${dn}S)?`})?)`, Hi = [
    "weeks",
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds"
  ], Ca = new RegExp(Gi), ii = (c) => c.match(Ca).slice(1).reduce((e, r, n) => (e[Hi[n]] = parseFloat(r) || 0, e), {}), Oa = (c, e) => {
    const r = e ? e.getTime() : Date.now(), n = new Date(r);
    return n.setFullYear(n.getFullYear() + c.years), n.setMonth(n.getMonth() + c.months), n.setDate(n.getDate() + c.days), n.setHours(n.getHours() + c.hours), n.setMinutes(n.getMinutes() + c.minutes), n.setMilliseconds(n.getMilliseconds() + c.seconds * 1e3), n.setDate(n.getDate() + c.weeks * 7), n;
  }, si = (c, e) => {
    const r = e ? e.getTime() : Date.now(), n = new Date(r);
    return (Oa(c, n).getTime() - n.getTime()) / 1e3;
  }, Ts = {
    end: Oa,
    toSeconds: si,
    pattern: Ca,
    parse: ii
  };
})), Pi = /* @__PURE__ */ J(((c, e) => {
  var r = Jt(), n = Xr(), i = Ar().f, s = r("unscopables"), l = Array.prototype;
  l[s] === void 0 && i(l, s, {
    configurable: !0,
    value: n(null)
  }), e.exports = function(b) {
    l[s][b] = !0;
  };
})), cn = /* @__PURE__ */ J(((c, e) => {
  var r = xr(), n = Pi(), i = Ba(), s = Mr(), l = Ar().f, b = Oi(), h = Ha(), E = Wr(), T = Yt(), S = "Array Iterator", j = s.set, V = s.getterFor(S);
  e.exports = b(Array, "Array", function(X, B) {
    j(this, {
      type: S,
      target: r(X),
      index: 0,
      kind: B
    });
  }, function() {
    var X = V(this), B = X.target, G = X.index++;
    if (!B || G >= B.length)
      return X.target = null, h(void 0, !0);
    switch (X.kind) {
      case "keys":
        return h(G, !1);
      case "values":
        return h(B[G], !1);
    }
    return h([G, B[G]], !1);
  }, "values");
  var O = i.Arguments = i.Array;
  if (n("keys"), n("values"), n("entries"), !E && T && O.name !== "values") try {
    l(O, "name", { value: "values" });
  } catch {
  }
})), Jn = /* @__PURE__ */ J((() => {
  var c = Dt(), e = os(), r = ls(), n = cn(), i = un(), s = Qr(), l = Jt()("iterator"), b = n.values, h = function(T, S) {
    if (T) {
      if (T[l] !== b) try {
        i(T, l, b);
      } catch {
        T[l] = b;
      }
      if (s(T, S, !0), e[S]) {
        for (var j in n) if (T[j] !== n[j]) try {
          i(T, j, n[j]);
        } catch {
          T[j] = n[j];
        }
      }
    }
  };
  for (var E in e) h(c[E] && c[E].prototype, E);
  h(r, "DOMTokenList");
})), Va = /* @__PURE__ */ J(((c, e) => {
  var r = Kt(), n = Gt(), i = Hn();
  e.exports = function(s, l, b) {
    var h, E;
    return i && r(h = l.constructor) && h !== b && n(E = h.prototype) && E !== b.prototype && i(s, E), s;
  };
})), So = /* @__PURE__ */ J(((c, e) => {
  e.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
})), ko = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = Hr(), i = hr(), s = So(), l = r("".replace), b = RegExp("^[" + s + "]+"), h = RegExp("(^|[^" + s + "])[" + s + "]+$"), E = function(T) {
    return function(S) {
      var j = i(n(S));
      return T & 1 && (j = l(j, b, "")), T & 2 && (j = l(j, h, "$1")), j;
    };
  };
  e.exports = {
    start: E(1),
    end: E(2),
    trim: E(3)
  };
})), Ka = /* @__PURE__ */ J((() => {
  var c = $t(), e = Wr(), r = Yt(), n = Dt(), i = yi(), s = Ut(), l = Ua(), b = tr(), h = Va(), E = sn(), T = Fn(), S = li(), j = Mt(), V = Wn().f, O = vn().f, X = Ar().f, B = ss(), G = ko().trim, Y = "Number", ue = n[Y], re = i[Y], se = ue.prototype, H = n.TypeError, U = s("".slice), D = s("".charCodeAt), Q = function(P) {
    var oe = S(P, "number");
    return typeof oe == "bigint" ? oe : ve(oe);
  }, ve = function(P) {
    var oe = S(P, "number"), Ae, Ce, $, He, ot, vt, Ie, z;
    if (T(oe)) throw new H("Cannot convert a Symbol value to a number");
    if (typeof oe == "string" && oe.length > 2) {
      if (oe = G(oe), Ae = D(oe, 0), Ae === 43 || Ae === 45) {
        if (Ce = D(oe, 2), Ce === 88 || Ce === 120) return NaN;
      } else if (Ae === 48) {
        switch (D(oe, 1)) {
          case 66:
          case 98:
            $ = 2, He = 49;
            break;
          case 79:
          case 111:
            $ = 8, He = 55;
            break;
          default:
            return +oe;
        }
        for (ot = U(oe, 2), vt = ot.length, Ie = 0; Ie < vt; Ie++)
          if (z = D(ot, Ie), z < 48 || z > He) return NaN;
        return parseInt(ot, $);
      }
    }
    return +oe;
  }, L = l(Y, !ue(" 0o1") || !ue("0b1") || ue("+0x1")), le = function(P) {
    return E(se, P) && j(function() {
      B(P);
    });
  }, Re = function(oe) {
    var Ae = arguments.length < 1 ? 0 : ue(Q(oe));
    return le(this) ? h(Object(Ae), this, Re) : Ae;
  };
  Re.prototype = se, L && !e && (se.constructor = Re), c({
    global: !0,
    constructor: !0,
    wrap: !0,
    forced: L
  }, { Number: Re });
  var fe = function(P, oe) {
    for (var Ae = r ? V(oe) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), Ce = 0, $; Ae.length > Ce; Ce++) b(oe, $ = Ae[Ce]) && !b(P, $) && X(P, $, O(oe, $));
  };
  e && re && fe(i[Y], re), (L || e) && fe(i[Y], ue);
})), Rs = /* @__PURE__ */ J(((c, e) => {
  var r = cr();
  e.exports = function() {
    var n = r(this), i = "";
    return n.hasIndices && (i += "d"), n.global && (i += "g"), n.ignoreCase && (i += "i"), n.multiline && (i += "m"), n.dotAll && (i += "s"), n.unicode && (i += "u"), n.unicodeSets && (i += "v"), n.sticky && (i += "y"), i;
  };
})), Es = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Dt().RegExp, i = r(function() {
    var b = n("a", "y");
    return b.lastIndex = 2, b.exec("abcd") !== null;
  }), s = i || r(function() {
    return !n("a", "y").sticky;
  }), l = i || r(function() {
    var b = n("^r", "gy");
    return b.lastIndex = 2, b.exec("str") !== null;
  });
  e.exports = {
    BROKEN_CARET: l,
    MISSED_STICKY: s,
    UNSUPPORTED_Y: i
  };
})), Io = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Dt().RegExp;
  e.exports = r(function() {
    var i = n(".", "s");
    return !(i.dotAll && i.test(`
`) && i.flags === "s");
  });
})), To = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Dt().RegExp;
  e.exports = r(function() {
    var i = n("(?<a>b)", "g");
    return i.exec("b").groups.a !== "b" || "b".replace(i, "$<a>c") !== "bc";
  });
})), Ai = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = Ut(), i = hr(), s = Rs(), l = Es(), b = qn(), h = Xr(), E = Mr().get, T = Io(), S = To(), j = b("native-string-replace", String.prototype.replace), V = RegExp.prototype.exec, O = V, X = n("".charAt), B = n("".indexOf), G = n("".replace), Y = n("".slice), ue = (function() {
    var D = /a/, Q = /b*/g;
    return r(V, D, "a"), r(V, Q, "a"), D.lastIndex !== 0 || Q.lastIndex !== 0;
  })(), re = l.BROKEN_CARET, se = /()??/.exec("")[1] !== void 0, H = ue || se || re || T || S, U = function(D, Q) {
    for (var ve = D.groups = h(null), L = 0; L < Q.length; L++) {
      var le = Q[L];
      ve[le[0]] = D[le[1]];
    }
  };
  H && (O = function(Q) {
    var ve = this, L = E(ve), le = i(Q), Re = L.raw, fe, P, oe;
    if (Re)
      return Re.lastIndex = ve.lastIndex, fe = r(O, Re, le), ve.lastIndex = Re.lastIndex, fe && L.groups && U(fe, L.groups), fe;
    var Ae = L.groups, Ce = re && ve.sticky, $ = r(s, ve), He = ve.source, ot = 0, vt = le;
    if (Ce) {
      $ = G($, "y", ""), B($, "g") === -1 && ($ += "g"), vt = Y(le, ve.lastIndex);
      var Ie = ve.lastIndex > 0 && X(le, ve.lastIndex - 1);
      ve.lastIndex > 0 && (!ve.multiline || ve.multiline && Ie !== `
` && Ie !== "\r" && Ie !== "\u2028" && Ie !== "\u2029") && (He = "(?: (?:" + He + "))", vt = " " + vt, ot++), P = new RegExp("^(?:" + He + ")", $);
    }
    se && (P = new RegExp("^" + He + "$(?!\\s)", $)), ue && (oe = ve.lastIndex);
    var z = r(V, Ce ? P : ve, vt);
    return Ce ? z ? (z.input = le, z[0] = Y(z[0], ot), z.index = ve.lastIndex, ve.lastIndex += z[0].length) : ve.lastIndex = 0 : ue && z && (ve.lastIndex = ve.global ? z.index + z[0].length : oe), se && z && z.length > 1 && r(j, z[0], P, function() {
      for (var F = 1; F < arguments.length - 2; F++) arguments[F] === void 0 && (z[F] = void 0);
    }), z && Ae && U(z, Ae), z;
  }), e.exports = O;
})), Un = /* @__PURE__ */ J((() => {
  var c = $t(), e = Ai();
  c({
    target: "RegExp",
    proto: !0,
    forced: /./.exec !== e
  }, { exec: e });
})), Ja = /* @__PURE__ */ J(((c, e) => {
  Un();
  var r = Vt(), n = Tr(), i = Ai(), s = Mt(), l = Jt(), b = un(), h = l("species"), E = RegExp.prototype;
  e.exports = function(T, S, j, V) {
    var O = l(T), X = !s(function() {
      var ue = {};
      return ue[O] = function() {
        return 7;
      }, ""[T](ue) !== 7;
    }), B = X && !s(function() {
      var ue = !1, re = /a/;
      if (T === "split") {
        var se = {};
        se[h] = function() {
          return re;
        }, re = {
          constructor: se,
          flags: ""
        }, re[O] = /./[O];
      }
      return re.exec = function() {
        return ue = !0, null;
      }, re[O](""), !ue;
    });
    if (!X || !B || j) {
      var G = /./[O], Y = S(O, ""[T], function(ue, re, se, H, U) {
        var D = re.exec;
        return D === i || D === E.exec ? X && !U ? {
          done: !0,
          value: r(G, re, se, H)
        } : {
          done: !0,
          value: r(ue, se, re, H)
        } : { done: !1 };
      });
      n(String.prototype, T, Y[0]), n(E, O, Y[1]);
    }
    V && b(E[O], "sham", !0);
  };
})), Mi = /* @__PURE__ */ J(((c, e) => {
  var r = Ci().charAt;
  e.exports = function(n, i, s) {
    return i + (s && r(n, i).length || 1);
  };
})), Ro = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = br(), i = Math.floor, s = r("".charAt), l = r("".replace), b = r("".slice), h = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, E = /\$([$&'`]|\d{1,2})/g;
  e.exports = function(T, S, j, V, O, X) {
    var B = j + T.length, G = V.length, Y = E;
    return O !== void 0 && (O = n(O), Y = h), l(X, Y, function(ue, re) {
      var se;
      switch (s(re, 0)) {
        case "$":
          return "$";
        case "&":
          return T;
        case "`":
          return b(S, 0, j);
        case "'":
          return b(S, B);
        case "<":
          se = O[b(re, 1, -1)];
          break;
        default:
          var H = +re;
          if (H === 0) return ue;
          if (H > G) {
            var U = i(H / 10);
            return U === 0 ? ue : U <= G ? V[U - 1] === void 0 ? s(re, 1) : V[U - 1] + s(re, 1) : ue;
          }
          se = V[H - 1];
      }
      return se === void 0 ? "" : se;
    });
  };
})), Eo = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Mt(), i = r.RegExp, s = !n(function() {
    var l = !0;
    try {
      i(".", "d");
    } catch {
      l = !1;
    }
    var b = {}, h = "", E = l ? "dgimsy" : "gimsy", T = function(V, O) {
      Object.defineProperty(b, V, { get: function() {
        return h += O, !0;
      } });
    }, S = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y"
    };
    l && (S.hasIndices = "d");
    for (var j in S) T(j, S[j]);
    return Object.getOwnPropertyDescriptor(i.prototype, "flags").get.call(b) !== E || h !== E;
  });
  e.exports = { correct: s };
})), Ya = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = tr(), i = sn(), s = Eo(), l = Rs(), b = RegExp.prototype;
  e.exports = s.correct ? function(h) {
    return h.flags;
  } : function(h) {
    return !s.correct && i(b, h) && !n(h, "flags") ? r(l, h) : h.flags;
  };
})), Qa = /* @__PURE__ */ J(((c, e) => {
  var r = Vt(), n = cr(), i = Kt(), s = Gr(), l = Ai(), b = TypeError;
  e.exports = function(h, E) {
    var T = h.exec;
    if (i(T)) {
      var S = r(T, h, E);
      return S !== null && n(S), S;
    }
    if (s(h) === "RegExp") return r(l, h, E);
    throw new b("RegExp#exec called on incompatible receiver");
  };
})), Xa = /* @__PURE__ */ J((() => {
  var c = zn(), e = Vt(), r = Ut(), n = Ja(), i = Mt(), s = cr(), l = Kt(), b = Gt(), h = Yr(), E = En(), T = hr(), S = Hr(), j = Mi(), V = Tn(), O = Ro(), X = Ya(), B = Qa(), G = Jt()("replace"), Y = Math.max, ue = Math.min, re = r([].concat), se = r([].push), H = r("".indexOf), U = r("".slice), D = function(L) {
    return L === void 0 ? L : String(L);
  }, Q = (function() {
    return "a".replace(/./, "$0") === "$0";
  })(), ve = (function() {
    return /./[G] ? /./[G]("a", "$0") === "" : !1;
  })();
  n("replace", function(L, le, Re) {
    var fe = ve ? "$" : "$0";
    return [function(oe, Ae) {
      var Ce = S(this), $ = b(oe) ? V(oe, G) : void 0;
      return $ ? e($, oe, Ce, Ae) : e(le, T(Ce), oe, Ae);
    }, function(P, oe) {
      var Ae = s(this), Ce = T(P), $ = l(oe);
      $ || (oe = T(oe));
      var He = T(X(Ae));
      if (typeof oe == "string" && !~H(oe, fe) && !~H(oe, "$<") && !~H(He, "y")) {
        var ot = Re(le, Ae, Ce, oe);
        if (ot.done) return ot.value;
      }
      var vt = !!~H(He, "g"), Ie;
      vt && (Ie = !!~H(He, "u") || !!~H(He, "v"), Ae.lastIndex = 0);
      for (var z = [], F; F = B(Ae, Ce), !(F === null || (se(z, F), !vt)); )
        T(F[0]) === "" && (Ae.lastIndex = j(Ce, E(Ae.lastIndex), Ie));
      for (var m = "", he = 0, te = 0; te < z.length; te++) {
        F = z[te];
        for (var De = T(F[0]), ee = Y(ue(h(F.index), Ce.length), 0), pe = [], Ne, $e = 1; $e < F.length; $e++) se(pe, D(F[$e]));
        var Oe = F.groups;
        if ($) {
          var nt = re([De], pe, ee, Ce);
          Oe !== void 0 && se(nt, Oe), Ne = T(c(oe, void 0, nt));
        } else Ne = O(De, Ce, ee, pe, Oe, oe);
        ee >= he && (m += U(Ce, he, ee) + Ne, he = ee + De.length);
      }
      return m + U(Ce, he);
    }];
  }, !!i(function() {
    var L = /./;
    return L.exec = function() {
      var le = [];
      return le.groups = { a: "7" }, le;
    }, "".replace(L, "$<a>") !== "7";
  }) || !Q || ve);
})), ga = /* @__PURE__ */ J((() => {
  var c = $t(), e = Ut(), r = Zn(), n = xr(), i = Fa(), s = e([].join);
  c({
    target: "Array",
    proto: !0,
    forced: r !== Object || !i("join", ",")
  }, { join: function(b) {
    return s(n(this), b === void 0 ? "," : b);
  } });
})), Ni = /* @__PURE__ */ J((() => {
  var c = Yt(), e = ea().EXISTS, r = Ut(), n = Zr(), i = Function.prototype, s = r(i.toString), l = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, b = r(l.exec), h = "name";
  c && !e && n(i, h, {
    configurable: !0,
    get: function() {
      try {
        return b(l, s(this))[1];
      } catch {
        return "";
      }
    }
  });
})), Co = /* @__PURE__ */ J(((c, e) => {
  function r(n) {
    if (Array.isArray(n)) return n;
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Oo = /* @__PURE__ */ J(((c, e) => {
  function r(n, i) {
    var s = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (s != null) {
      var l, b, h, E, T = [], S = !0, j = !1;
      try {
        if (h = (s = s.call(n)).next, i === 0) {
          if (Object(s) !== s) return;
          S = !1;
        } else for (; !(S = (l = h.call(s)).done) && (T.push(l.value), T.length !== i); S = !0) ;
      } catch (V) {
        j = !0, b = V;
      } finally {
        try {
          if (!S && s.return != null && (E = s.return(), Object(E) !== E)) return;
        } finally {
          if (j) throw b;
        }
      }
      return T;
    }
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Cs = /* @__PURE__ */ J(((c, e) => {
  function r(n, i) {
    (i == null || i > n.length) && (i = n.length);
    for (var s = 0, l = Array(i); s < i; s++) l[s] = n[s];
    return l;
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Os = /* @__PURE__ */ J(((c, e) => {
  var r = Cs();
  function n(i, s) {
    if (i) {
      if (typeof i == "string") return r(i, s);
      var l = {}.toString.call(i).slice(8, -1);
      return l === "Object" && i.constructor && (l = i.constructor.name), l === "Map" || l === "Set" ? Array.from(i) : l === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l) ? r(i, s) : void 0;
    }
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Po = /* @__PURE__ */ J(((c, e) => {
  function r() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Za = /* @__PURE__ */ J(((c, e) => {
  var r = Co(), n = Oo(), i = Os(), s = Po();
  function l(b, h) {
    return r(b) || n(b, h) || i(b, h) || s();
  }
  e.exports = l, e.exports.__esModule = !0, e.exports.default = e.exports;
})), ei = /* @__PURE__ */ J((() => {
  var c = $t(), e = aa(), r = La(), n = Gt(), i = Rn(), s = _r(), l = xr(), b = Gn(), h = Ga(), E = Jt(), T = sa(), S = on(), j = T("slice"), V = E("species"), O = Array, X = Math.max;
  c({
    target: "Array",
    proto: !0,
    forced: !j
  }, { slice: function(G, Y) {
    var ue = l(this), re = s(ue), se = i(G, re), H = i(Y === void 0 ? re : Y, re), U, D, Q;
    if (e(ue) && (U = ue.constructor, r(U) && (U === O || e(U.prototype)) ? U = void 0 : n(U) && (U = U[V], U === null && (U = void 0)), U === O || U === void 0))
      return S(ue, se, H);
    for (D = new (U === void 0 ? O : U)(X(H - se, 0)), Q = 0; se < H; se++, Q++) se in ue && b(D, Q, ue[se]);
    return h(D, Q), D;
  } });
})), xi = /* @__PURE__ */ J((() => {
  Un();
  var c = $t(), e = Vt(), r = Kt(), n = cr(), i = hr(), s = (function() {
    var b = !1, h = /[ac]/;
    return h.exec = function() {
      return b = !0, /./.exec.apply(this, arguments);
    }, h.test("abc") === !0 && b;
  })(), l = /./.test;
  c({
    target: "RegExp",
    proto: !0,
    forced: !s
  }, { test: function(b) {
    var h = n(this), E = i(b), T = h.exec;
    if (!r(T)) return e(l, h, E);
    var S = e(T, h, E);
    return S === null ? !1 : (n(S), !0);
  } });
})), ti = /* @__PURE__ */ J((() => {
  var c = $t(), e = Yt(), r = Dt(), n = Vt(), i = Ut(), s = tr(), l = Kt(), b = sn(), h = hr(), E = Zr(), T = di(), S = r.Symbol, j = S && S.prototype;
  if (e && l(S) && (!("description" in j) || S().description !== void 0)) {
    var V = {}, O = function() {
      var U = arguments.length < 1 || arguments[0] === void 0 ? void 0 : h(arguments[0]), D = b(j, this) ? new S(U) : U === void 0 ? S() : S(U);
      return U === "" && (V[D] = !0), D;
    };
    T(O, S);
    var X = O.for;
    O.for = function(H) {
      var U = h(H), D = n(X, this, U);
      return U === "" && (V[D] = !0), D;
    }, O.prototype = j, j.constructor = O;
    var B = String(S("description detection")) === "Symbol(description detection)", G = i(j.valueOf), Y = i(j.toString), ue = /^Symbol\((.*)\)[^)]+$/, re = i("".replace), se = i("".slice);
    E(j, "description", {
      configurable: !0,
      get: function() {
        var U = G(this);
        if (s(V, U)) return "";
        var D = Y(U), Q = B ? se(D, 7, -1) : re(D, ue, "$1");
        return Q === "" ? void 0 : Q;
      }
    }), c({
      global: !0,
      constructor: !0,
      forced: !0
    }, { Symbol: O });
  }
})), ji = /* @__PURE__ */ J((() => {
  as()("iterator");
})), Ao = /* @__PURE__ */ J(((c, e) => {
  var r = Cs();
  function n(i) {
    if (Array.isArray(i)) return r(i);
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Mo = /* @__PURE__ */ J(((c, e) => {
  function r(n) {
    if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), No = /* @__PURE__ */ J(((c, e) => {
  function r() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), ma = /* @__PURE__ */ J(((c, e) => {
  var r = Ao(), n = Mo(), i = Os(), s = No();
  function l(b) {
    return r(b) || n(b) || i(b) || s();
  }
  e.exports = l, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Ui = /* @__PURE__ */ J((() => {
  var c = $t(), e = ra().includes, r = Mt(), n = Pi(), i = r(function() {
    return !Array(1).includes();
  }), s = r(function() {
    return [, 1].includes(void 0, 1);
  });
  c({
    target: "Array",
    proto: !0,
    forced: i || s
  }, { includes: function(b) {
    return e(this, b, arguments.length > 1 ? arguments[1] : void 0);
  } }), n("includes");
})), Ps = /* @__PURE__ */ J(((c, e) => {
  var r = Gt(), n = Math.floor;
  e.exports = Number.isInteger || function(s) {
    return !r(s) && isFinite(s) && n(s) === s;
  };
})), As = /* @__PURE__ */ J((() => {
  $t()({
    target: "Number",
    stat: !0
  }, { isInteger: Ps() });
})), xo = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = Mt(), i = Ut(), s = ya(), l = na(), b = xr(), h = Aa().f, E = i(h), T = i([].push), S = r && n(function() {
    var V = /* @__PURE__ */ Object.create(null);
    return V[2] = 2, !E(V, 2);
  }), j = function(V) {
    return function(O) {
      for (var X = b(O), B = l(X), G = S && s(X) === null, Y = B.length, ue = 0, re = [], se; Y > ue; )
        se = B[ue++], (!r || (G ? se in X : E(X, se))) && T(re, V ? [se, X[se]] : X[se]);
      return re;
    };
  };
  e.exports = {
    entries: j(!0),
    values: j(!1)
  };
})), Ms = /* @__PURE__ */ J((() => {
  var c = $t(), e = xo().entries;
  c({
    target: "Object",
    stat: !0
  }, { entries: function(n) {
    return e(n);
  } });
})), ba = /* @__PURE__ */ J(((c) => {
  Object.defineProperty(c, "__esModule", { value: !0 });
  var e = en();
  Ni();
  var r = Za();
  cn(), Mn(), Jn(), xn(), ei(), Vn(), jn(), Un(), xi(), $a(), ti(), ji(), Cn(), On();
  var n = ma(), i = mn(), s = bn(), l = yn(), b = gn(), h = tn();
  Ui(), Nn(), ga(), As(), Ka(), Ms();
  function E(ee) {
    return ee && typeof ee == "object" && "default" in ee ? ee : { default: ee };
  }
  var T = /* @__PURE__ */ E(e), S = /* @__PURE__ */ E(r), j = /* @__PURE__ */ E(n), V = /* @__PURE__ */ E(i), O = /* @__PURE__ */ E(s), X = /* @__PURE__ */ E(l), B = /* @__PURE__ */ E(b), G = /* @__PURE__ */ E(h), Y = function() {
    for (var pe = arguments.length, Ne = new Array(pe), $e = 0; $e < pe; $e++) Ne[$e] = arguments[$e];
    return { checks: Ne };
  }, ue = function() {
    for (var pe = arguments.length, Ne = new Array(pe), $e = 0; $e < pe; $e++) Ne[$e] = arguments[$e];
    return Y(function(Oe) {
      for (var nt = !1, Ze = [], Je = 0, _t = Ne; Je < _t.length; Je++) {
        var ft = _t[Je];
        if (typeof ft == "string") {
          nt = nt || T.default(Oe) === ft, Ze.push("of type ".concat(ft));
          continue;
        }
        nt = nt || Oe instanceof ft, Ze.push("an instance of ".concat(ft.name));
      }
      return [nt, Ze];
    });
  }, re = function() {
    for (var pe = arguments.length, Ne = new Array(pe), $e = 0; $e < pe; $e++) Ne[$e] = arguments[$e];
    return Y(function(Oe) {
      for (var nt = !1, Ze = [], Je = 0, _t = Ne; Je < _t.length; Je++) {
        var ft = _t[Je];
        nt = nt || Oe === ft, Ze.push(typeof ft == "string" ? '"'.concat(ft, '"') : "".concat(ft));
      }
      return [nt, Ze];
    });
  };
  function se(ee) {
    var pe = H();
    return function() {
      var $e = G.default(ee), Oe;
      if (pe) {
        var nt = G.default(this).constructor;
        Oe = Reflect.construct($e, arguments, nt);
      } else Oe = $e.apply(this, arguments);
      return B.default(this, Oe);
    };
  }
  function H() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function U(ee, pe) {
    var Ne = typeof Symbol < "u" && ee[Symbol.iterator] || ee["@@iterator"];
    if (!Ne) {
      if (Array.isArray(ee) || (Ne = D(ee)) || pe && ee && typeof ee.length == "number") {
        Ne && (ee = Ne);
        var $e = 0, Oe = function() {
        };
        return {
          s: Oe,
          n: function() {
            return $e >= ee.length ? { done: !0 } : {
              done: !1,
              value: ee[$e++]
            };
          },
          e: function(ft) {
            throw ft;
          },
          f: Oe
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var nt = !0, Ze = !1, Je;
    return {
      s: function() {
        Ne = Ne.call(ee);
      },
      n: function() {
        var ft = Ne.next();
        return nt = ft.done, ft;
      },
      e: function(ft) {
        Ze = !0, Je = ft;
      },
      f: function() {
        try {
          !nt && Ne.return != null && Ne.return();
        } finally {
          if (Ze) throw Je;
        }
      }
    };
  }
  function D(ee, pe) {
    if (ee) {
      if (typeof ee == "string") return Q(ee, pe);
      var Ne = Object.prototype.toString.call(ee).slice(8, -1);
      if (Ne === "Object" && ee.constructor && (Ne = ee.constructor.name), Ne === "Map" || Ne === "Set") return Array.from(ee);
      if (Ne === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ne)) return Q(ee, pe);
    }
  }
  function Q(ee, pe) {
    (pe == null || pe > ee.length) && (pe = ee.length);
    for (var Ne = 0, $e = new Array(pe); Ne < pe; Ne++) $e[Ne] = ee[Ne];
    return $e;
  }
  var ve = function(pe, Ne) {
    if (Ne.length > pe.length) throw new Error("Expected at most ".concat(pe.length, " argument(s), but got ").concat(Ne.length));
    for (; Ne.length < pe.length; ) Ne.push(void 0);
    var $e = U(Ne.entries()), Oe;
    try {
      for ($e.s(); !(Oe = $e.n()).done; ) {
        var nt = S.default(Oe.value, 2), Ze = nt[0], Je = nt[1], _t = Ae(pe[Ze], Je), ft = S.default(_t, 4), lt = ft[0], ze = ft[1], _e = ft[2], de = ft[3];
        if (!lt) {
          var ce = Ze + 1;
          throw new Error("Argument ".concat(ce, " is expected to be ").concat(_e).concat(de, " but got ").concat(ze));
        }
      }
    } catch (ye) {
      $e.e(ye);
    } finally {
      $e.f();
    }
  }, L = function(pe) {
    var Ne, $e;
    if ([
      "undefined",
      "boolean",
      "number",
      "bigint",
      "string"
    ].includes(T.default(pe)) && ($e = typeof pe == "string" ? '"'.concat(pe, '"') : "".concat(pe)), T.default(pe) === "object" && (pe == null || (Ne = pe.constructor) === null || Ne === void 0 ? void 0 : Ne.name) !== "Object") {
      var Oe;
      $e = pe === null ? "null" : "instance of ".concat(pe == null || (Oe = pe.constructor) === null || Oe === void 0 ? void 0 : Oe.name);
    }
    return $e || ($e = T.default(pe)), $e;
  }, le = function() {
    for (var pe = arguments.length, Ne = new Array(pe), $e = 0; $e < pe; $e++) Ne[$e] = arguments[$e];
    var Oe = P(Ne);
    return function(nt) {
      return /* @__PURE__ */ (function(Ze) {
        X.default(_t, Ze);
        var Je = se(_t);
        function _t() {
          O.default(this, _t);
          for (var ft = arguments.length, lt = new Array(ft), ze = 0; ze < ft; ze++) lt[ze] = arguments[ze];
          return ve(Oe, lt), Je.call.apply(Je, [this].concat(lt));
        }
        return V.default(_t);
      })(nt);
    };
  }, Re = function() {
    for (var pe = arguments.length, Ne = new Array(pe), $e = 0; $e < pe; $e++) Ne[$e] = arguments[$e];
    var Oe = P(Ne);
    return function(nt, Ze, Je) {
      if (typeof Je.value != "function") throw new Error("The validateTypes decorator can only be applied to methods");
      var _t = Je.value;
      Je.value = function() {
        for (var ft = arguments.length, lt = new Array(ft), ze = 0; ze < ft; ze++) lt[ze] = arguments[ze];
        return ve(Oe, lt), _t.apply(this, lt);
      };
    };
  }, fe = function() {
    for (var pe = arguments.length, Ne = new Array(pe), $e = 0; $e < pe; $e++) Ne[$e] = arguments[$e];
    var Oe = P(Ne);
    return function(nt, Ze, Je) {
      if (typeof Je.value != "function") throw new Error("The validateTypesAsync decorator can only be applied to methods");
      var _t = Je.value;
      Je.value = function() {
        for (var ft = arguments.length, lt = new Array(ft), ze = 0; ze < ft; ze++) lt[ze] = arguments[ze];
        try {
          ve(Oe, lt);
        } catch (_e) {
          return Promise.reject(_e);
        }
        return _t.apply(this, lt);
      };
    };
  }, P = function(pe) {
    var Ne = [], $e = U(pe), Oe;
    try {
      for ($e.s(); !(Oe = $e.n()).done; ) {
        var nt = Oe.value;
        Ne.push(oe(nt));
      }
    } catch (Ze) {
      $e.e(Ze);
    } finally {
      $e.f();
    }
    return Ne;
  }, oe = function(pe) {
    var Ne = [], $e = U(Array.isArray(pe) ? pe : [pe]), Oe;
    try {
      for ($e.s(); !(Oe = $e.n()).done; ) {
        var nt = Oe.value;
        if (typeof nt == "string" || typeof nt == "function") {
          Ne.push(ue(nt));
          continue;
        }
        Ne.push(nt);
      }
    } catch (Ze) {
      $e.e(Ze);
    } finally {
      $e.f();
    }
    return Ne;
  }, Ae = function(pe, Ne) {
    var $e = [], Oe, nt = !1, Ze = U(pe), Je;
    try {
      for (Ze.s(); !(Je = Ze.n()).done; ) {
        var _t = Je.value, ft = U(_t.checks), lt;
        try {
          for (ft.s(); !(lt = ft.n()).done; ) {
            var ze = lt.value, _e = ze(Ne), de = S.default(_e, 3), ce = de[0], ye = de[1], Ye = de[2];
            nt = nt || ce, !Oe && Ye && (Oe = Ye), ye && ($e = typeof ye == "string" ? [].concat(j.default($e), [ye]) : [].concat(j.default($e), j.default(ye)));
          }
        } catch (ht) {
          ft.e(ht);
        } finally {
          ft.f();
        }
      }
    } catch (ht) {
      Ze.e(ht);
    } finally {
      Ze.f();
    }
    if (nt) return [!0];
    var Fe = Oe || L(Ne), We = $e.length - 1;
    return [
      !1,
      Fe,
      We > 0 ? "".concat($e.slice(0, We).join(", "), " or ").concat($e[We]) : $e.join(", "),
      We > 1 ? ";" : ","
    ];
  };
  function Ce(ee, pe) {
    var Ne = typeof Symbol < "u" && ee[Symbol.iterator] || ee["@@iterator"];
    if (!Ne) {
      if (Array.isArray(ee) || (Ne = $(ee)) || pe && ee && typeof ee.length == "number") {
        Ne && (ee = Ne);
        var $e = 0, Oe = function() {
        };
        return {
          s: Oe,
          n: function() {
            return $e >= ee.length ? { done: !0 } : {
              done: !1,
              value: ee[$e++]
            };
          },
          e: function(ft) {
            throw ft;
          },
          f: Oe
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var nt = !0, Ze = !1, Je;
    return {
      s: function() {
        Ne = Ne.call(ee);
      },
      n: function() {
        var ft = Ne.next();
        return nt = ft.done, ft;
      },
      e: function(ft) {
        Ze = !0, Je = ft;
      },
      f: function() {
        try {
          !nt && Ne.return != null && Ne.return();
        } finally {
          if (Ze) throw Je;
        }
      }
    };
  }
  function $(ee, pe) {
    if (ee) {
      if (typeof ee == "string") return He(ee, pe);
      var Ne = Object.prototype.toString.call(ee).slice(8, -1);
      if (Ne === "Object" && ee.constructor && (Ne = ee.constructor.name), Ne === "Map" || Ne === "Set") return Array.from(ee);
      if (Ne === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ne)) return He(ee, pe);
    }
  }
  function He(ee, pe) {
    (pe == null || pe > ee.length) && (pe = ee.length);
    for (var Ne = 0, $e = new Array(pe); Ne < pe; Ne++) $e[Ne] = ee[Ne];
    return $e;
  }
  var ot = function(pe, Ne) {
    return Y(function($e) {
      if (!Array.isArray($e) || $e.length < 1) return [!1, "a non-empty array of ".concat(pe)];
      var Oe = Ce($e.entries()), nt;
      try {
        for (Oe.s(); !(nt = Oe.n()).done; ) {
          var Ze = S.default(nt.value, 2), Je = Ze[0], _t = Ze[1], ft = Ae(oe(Ne), _t), lt = S.default(ft, 3), ze = lt[0], _e = lt[1], de = lt[2];
          if (!ze) return [
            !1,
            "a valid non-empty array of ".concat(pe, " (index ").concat(Je, " should be ").concat(de, ")"),
            "malformed array of ".concat(pe, " (index ").concat(Je, " is ").concat(_e, ")")
          ];
        }
      } catch (ce) {
        Oe.e(ce);
      } finally {
        Oe.f();
      }
      return [!0];
    });
  }, vt = Y(function(ee) {
    return [typeof ee == "string" && ee.length > 0, "a non-empty string"];
  }), Ie = Y(function(ee) {
    return [typeof ee == "number" && Number.isInteger(ee) && ee >= 0, "a non-negative integer"];
  }), z = Y(function(ee) {
    return [T.default(ee) === "object" && ee !== null && !Array.isArray(ee), "a pure object (non-null and non-array)"];
  }), F = function(pe, Ne) {
    return Y(function($e) {
      if (T.default($e) !== "object" || $e === null || Array.isArray($e)) return [!1, "valid ".concat(pe, " (should be a pure object)")];
      for (var Oe = 0, nt = Object.entries(Ne); Oe < nt.length; Oe++) {
        var Ze = S.default(nt[Oe], 2), Je = Ze[0], _t = Ze[1], ft = Ae(oe(_t), $e[Je]), lt = S.default(ft, 3), ze = lt[0], _e = lt[1], de = lt[2];
        if (!ze) return [
          !1,
          "valid ".concat(pe, ' (key "').concat(Je, '" should be ').concat(de, ")"),
          "malformed ".concat(pe, ' (key "').concat(Je, '" is ').concat(_e, ")")
        ];
      }
      return [!0];
    });
  };
  function m(ee, pe) {
    var Ne = typeof Symbol < "u" && ee[Symbol.iterator] || ee["@@iterator"];
    if (!Ne) {
      if (Array.isArray(ee) || (Ne = he(ee)) || pe && ee && typeof ee.length == "number") {
        Ne && (ee = Ne);
        var $e = 0, Oe = function() {
        };
        return {
          s: Oe,
          n: function() {
            return $e >= ee.length ? { done: !0 } : {
              done: !1,
              value: ee[$e++]
            };
          },
          e: function(ft) {
            throw ft;
          },
          f: Oe
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var nt = !0, Ze = !1, Je;
    return {
      s: function() {
        Ne = Ne.call(ee);
      },
      n: function() {
        var ft = Ne.next();
        return nt = ft.done, ft;
      },
      e: function(ft) {
        Ze = !0, Je = ft;
      },
      f: function() {
        try {
          !nt && Ne.return != null && Ne.return();
        } finally {
          if (Ze) throw Je;
        }
      }
    };
  }
  function he(ee, pe) {
    if (ee) {
      if (typeof ee == "string") return te(ee, pe);
      var Ne = Object.prototype.toString.call(ee).slice(8, -1);
      if (Ne === "Object" && ee.constructor && (Ne = ee.constructor.name), Ne === "Map" || Ne === "Set") return Array.from(ee);
      if (Ne === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Ne)) return te(ee, pe);
    }
  }
  function te(ee, pe) {
    (pe == null || pe > ee.length) && (pe = ee.length);
    for (var Ne = 0, $e = new Array(pe); Ne < pe; Ne++) $e[Ne] = ee[Ne];
    return $e;
  }
  var De = function(pe, Ne) {
    return Y(function($e) {
      if (!Array.isArray($e)) return [!1, "an array of ".concat(pe)];
      var Oe = m($e.entries()), nt;
      try {
        for (Oe.s(); !(nt = Oe.n()).done; ) {
          var Ze = S.default(nt.value, 2), Je = Ze[0], _t = Ze[1], ft = Ae(oe(Ne), _t), lt = S.default(ft, 3), ze = lt[0], _e = lt[1], de = lt[2];
          if (!ze) return [
            !1,
            "a valid array of ".concat(pe, " (index ").concat(Je, " should be ").concat(de, ")"),
            "malformed array of ".concat(pe, " (index ").concat(Je, " is ").concat(_e, ")")
          ];
        }
      } catch (ce) {
        Oe.e(ce);
      } finally {
        Oe.f();
      }
      return [!0];
    });
  };
  c.array = De, c.custom = Y, c.literal = re, c.nonEmptyArray = ot, c.nonEmptyString = vt, c.nonNegativeInteger = Ie, c.objectSchema = F, c.pureObject = z, c.runtimeTypeValidation = ve, c.stringifyReceivedType = L, c.type = ue, c.validateConstructorTypes = le, c.validateTypes = Re, c.validateTypesAsync = fe;
})), jo = /* @__PURE__ */ J(((c, e) => {
  var r = tn();
  function n(i, s) {
    for (; !{}.hasOwnProperty.call(i, s) && (i = r(i)) !== null; ) ;
    return i;
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), Li = /* @__PURE__ */ J(((c, e) => {
  var r = jo();
  function n() {
    return e.exports = n = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(i, s, l) {
      var b = r(i, s);
      if (b) {
        var h = Object.getOwnPropertyDescriptor(b, s);
        return h.get ? h.get.call(arguments.length < 3 ? i : l) : h.value;
      }
    }, e.exports.__esModule = !0, e.exports.default = e.exports, n.apply(null, arguments);
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})), $i = /* @__PURE__ */ J(((c) => {
  Object.defineProperty(c, "__esModule", { value: !0 });
  var e = ma(), r = bn(), n = mn(), i = Pn(), s = Li(), l = yn(), b = gn(), h = tn(), E = An();
  function T(Ie) {
    return Ie && typeof Ie == "object" && "default" in Ie ? Ie : { default: Ie };
  }
  var S = /* @__PURE__ */ T(e), j = /* @__PURE__ */ T(r), V = /* @__PURE__ */ T(n), O = /* @__PURE__ */ T(i), X = /* @__PURE__ */ T(s), B = /* @__PURE__ */ T(l), G = /* @__PURE__ */ T(b), Y = /* @__PURE__ */ T(h), ue = /* @__PURE__ */ T(E), re;
  function se() {
  }
  se.prototype = /* @__PURE__ */ Object.create(null);
  function H() {
    H.init.call(this);
  }
  H.EventEmitter = H, H.usingDomains = !1, H.prototype.domain = void 0, H.prototype._events = void 0, H.prototype._maxListeners = void 0, H.defaultMaxListeners = 10, H.init = function() {
    this.domain = null, H.usingDomains && re.active, (!this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = new se(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, H.prototype.setMaxListeners = function(z) {
    if (typeof z != "number" || z < 0 || isNaN(z)) throw new TypeError('"n" argument must be a positive number');
    return this._maxListeners = z, this;
  };
  function U(Ie) {
    return Ie._maxListeners === void 0 ? H.defaultMaxListeners : Ie._maxListeners;
  }
  H.prototype.getMaxListeners = function() {
    return U(this);
  };
  function D(Ie, z, F) {
    if (z) Ie.call(F);
    else
      for (var m = Ie.length, he = Ce(Ie, m), te = 0; te < m; ++te) he[te].call(F);
  }
  function Q(Ie, z, F, m) {
    if (z) Ie.call(F, m);
    else
      for (var he = Ie.length, te = Ce(Ie, he), De = 0; De < he; ++De) te[De].call(F, m);
  }
  function ve(Ie, z, F, m, he) {
    if (z) Ie.call(F, m, he);
    else
      for (var te = Ie.length, De = Ce(Ie, te), ee = 0; ee < te; ++ee) De[ee].call(F, m, he);
  }
  function L(Ie, z, F, m, he, te) {
    if (z) Ie.call(F, m, he, te);
    else
      for (var De = Ie.length, ee = Ce(Ie, De), pe = 0; pe < De; ++pe) ee[pe].call(F, m, he, te);
  }
  function le(Ie, z, F, m) {
    if (z) Ie.apply(F, m);
    else
      for (var he = Ie.length, te = Ce(Ie, he), De = 0; De < he; ++De) te[De].apply(F, m);
  }
  H.prototype.emit = function(z) {
    var F, m, he, te, De, ee, pe, Ne = z === "error";
    if (ee = this._events, ee) Ne = Ne && ee.error == null;
    else if (!Ne) return !1;
    if (pe = this.domain, Ne) {
      if (F = arguments[1], pe)
        F || (F = /* @__PURE__ */ new Error('Uncaught, unspecified "error" event')), F.domainEmitter = this, F.domain = pe, F.domainThrown = !1, pe.emit("error", F);
      else {
        if (F instanceof Error) throw F;
        var $e = /* @__PURE__ */ new Error('Uncaught, unspecified "error" event. (' + F + ")");
        throw $e.context = F, $e;
      }
      return !1;
    }
    if (m = ee[z], !m) return !1;
    var Oe = typeof m == "function";
    switch (he = arguments.length, he) {
      case 1:
        D(m, Oe, this);
        break;
      case 2:
        Q(m, Oe, this, arguments[1]);
        break;
      case 3:
        ve(m, Oe, this, arguments[1], arguments[2]);
        break;
      case 4:
        L(m, Oe, this, arguments[1], arguments[2], arguments[3]);
        break;
      default:
        for (te = new Array(he - 1), De = 1; De < he; De++) te[De - 1] = arguments[De];
        le(m, Oe, this, te);
    }
    return !0;
  };
  function Re(Ie, z, F, m) {
    var he, te, De;
    if (typeof F != "function") throw new TypeError('"listener" argument must be a function');
    if (te = Ie._events, te ? (te.newListener && (Ie.emit("newListener", z, F.listener ? F.listener : F), te = Ie._events), De = te[z]) : (te = Ie._events = new se(), Ie._eventsCount = 0), !De)
      De = te[z] = F, ++Ie._eventsCount;
    else if (typeof De == "function" ? De = te[z] = m ? [F, De] : [De, F] : m ? De.unshift(F) : De.push(F), !De.warned && (he = U(Ie), he && he > 0 && De.length > he)) {
      De.warned = !0;
      var ee = /* @__PURE__ */ new Error("Possible EventEmitter memory leak detected. " + De.length + " " + z + " listeners added. Use emitter.setMaxListeners() to increase limit");
      ee.name = "MaxListenersExceededWarning", ee.emitter = Ie, ee.type = z, ee.count = De.length, fe(ee);
    }
    return Ie;
  }
  function fe(Ie) {
    typeof console.warn == "function" ? console.warn(Ie) : console.log(Ie);
  }
  H.prototype.addListener = function(z, F) {
    return Re(this, z, F, !1);
  }, H.prototype.on = H.prototype.addListener, H.prototype.prependListener = function(z, F) {
    return Re(this, z, F, !0);
  };
  function P(Ie, z, F) {
    var m = !1;
    function he() {
      Ie.removeListener(z, he), m || (m = !0, F.apply(Ie, arguments));
    }
    return he.listener = F, he;
  }
  H.prototype.once = function(z, F) {
    if (typeof F != "function") throw new TypeError('"listener" argument must be a function');
    return this.on(z, P(this, z, F)), this;
  }, H.prototype.prependOnceListener = function(z, F) {
    if (typeof F != "function") throw new TypeError('"listener" argument must be a function');
    return this.prependListener(z, P(this, z, F)), this;
  }, H.prototype.removeListener = function(z, F) {
    var m, he, te, De, ee;
    if (typeof F != "function") throw new TypeError('"listener" argument must be a function');
    if (he = this._events, !he) return this;
    if (m = he[z], !m) return this;
    if (m === F || m.listener && m.listener === F)
      --this._eventsCount === 0 ? this._events = new se() : (delete he[z], he.removeListener && this.emit("removeListener", z, m.listener || F));
    else if (typeof m != "function") {
      for (te = -1, De = m.length; De-- > 0; ) if (m[De] === F || m[De].listener && m[De].listener === F) {
        ee = m[De].listener, te = De;
        break;
      }
      if (te < 0) return this;
      if (m.length === 1) {
        if (m[0] = void 0, --this._eventsCount === 0)
          return this._events = new se(), this;
        delete he[z];
      } else Ae(m, te);
      he.removeListener && this.emit("removeListener", z, ee || F);
    }
    return this;
  }, H.prototype.off = function(Ie, z) {
    return this.removeListener(Ie, z);
  }, H.prototype.removeAllListeners = function(z) {
    var F, m = this._events;
    if (!m) return this;
    if (!m.removeListener)
      return arguments.length === 0 ? (this._events = new se(), this._eventsCount = 0) : m[z] && (--this._eventsCount === 0 ? this._events = new se() : delete m[z]), this;
    if (arguments.length === 0) {
      for (var he = Object.keys(m), te = 0, De; te < he.length; ++te)
        De = he[te], De !== "removeListener" && this.removeAllListeners(De);
      return this.removeAllListeners("removeListener"), this._events = new se(), this._eventsCount = 0, this;
    }
    if (F = m[z], typeof F == "function") this.removeListener(z, F);
    else if (F) do
      this.removeListener(z, F[F.length - 1]);
    while (F[0]);
    return this;
  }, H.prototype.listeners = function(z) {
    var F, m, he = this._events;
    return he ? (F = he[z], F ? typeof F == "function" ? m = [F.listener || F] : m = $(F) : m = []) : m = [], m;
  }, H.listenerCount = function(Ie, z) {
    return typeof Ie.listenerCount == "function" ? Ie.listenerCount(z) : oe.call(Ie, z);
  }, H.prototype.listenerCount = oe;
  function oe(Ie) {
    var z = this._events;
    if (z) {
      var F = z[Ie];
      if (typeof F == "function") return 1;
      if (F) return F.length;
    }
    return 0;
  }
  H.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };
  function Ae(Ie, z) {
    for (var F = z, m = F + 1, he = Ie.length; m < he; F += 1, m += 1) Ie[F] = Ie[m];
    Ie.pop();
  }
  function Ce(Ie, z) {
    for (var F = new Array(z); z--; ) F[z] = Ie[z];
    return F;
  }
  function $(Ie) {
    for (var z = new Array(Ie.length), F = 0; F < z.length; ++F) z[F] = Ie[F].listener || Ie[F];
    return z;
  }
  function He(Ie) {
    var z = ot();
    return function() {
      var m = Y.default(Ie), he;
      if (z) {
        var te = Y.default(this).constructor;
        he = Reflect.construct(m, arguments, te);
      } else he = m.apply(this, arguments);
      return G.default(this, he);
    };
  }
  function ot() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var vt = /* @__PURE__ */ (function(Ie) {
    B.default(F, Ie);
    var z = He(F);
    function F() {
      var m;
      return j.default(this, F), m = z.call(this), ue.default(O.default(m), "eventHistory", /* @__PURE__ */ new Map()), m;
    }
    return V.default(F, [
      {
        key: "on",
        value: function(he, te) {
          return X.default(Y.default(F.prototype), "on", this).call(this, he, te);
        }
      },
      {
        key: "once",
        value: function(he, te) {
          return X.default(Y.default(F.prototype), "once", this).call(this, he, te);
        }
      },
      {
        key: "off",
        value: function(he, te) {
          return X.default(Y.default(F.prototype), "off", this).call(this, he, te);
        }
      },
      {
        key: "emit",
        value: function(he) {
          for (var te, De = arguments.length, ee = new Array(De > 1 ? De - 1 : 0), pe = 1; pe < De; pe++) ee[pe - 1] = arguments[pe];
          return this.eventHistory.set(he, ee), (te = X.default(Y.default(F.prototype), "emit", this)).call.apply(te, [this, he].concat(ee));
        }
      },
      {
        key: "addListener",
        value: function(he, te) {
          return X.default(Y.default(F.prototype), "addListener", this).call(this, he, te);
        }
      },
      {
        key: "removeListener",
        value: function(he, te) {
          return X.default(Y.default(F.prototype), "removeListener", this).call(this, he, te);
        }
      },
      {
        key: "addListenerWithReplay",
        value: function(he, te) {
          var De = this.eventHistory.get(he);
          return De !== void 0 && te.apply(void 0, S.default(De)), this.addListener(he, te);
        }
      },
      {
        key: "onWithReplay",
        value: function(he, te) {
          return this.addListenerWithReplay(he, te);
        }
      },
      {
        key: "onceWithReplay",
        value: function(he, te) {
          var De = this.eventHistory.get(he);
          return De !== void 0 ? (te.apply(void 0, S.default(De)), this) : X.default(Y.default(F.prototype), "once", this).call(this, he, te);
        }
      }
    ]), F;
  })(H);
  c.ReplayEventEmitter = vt;
})), Uo = /* @__PURE__ */ J(((c, e) => {
  var r = Mt();
  e.exports = r(function() {
    if (typeof ArrayBuffer == "function") {
      var n = /* @__PURE__ */ new ArrayBuffer(8);
      Object.isExtensible(n) && Object.defineProperty(n, "a", { value: 8 });
    }
  });
})), Lo = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Gt(), i = Gr(), s = Uo(), l = Object.isExtensible, b = r(function() {
    l(1);
  });
  e.exports = b || s ? function(E) {
    return !n(E) || s && i(E) === "ArrayBuffer" ? !1 : l ? l(E) : !0;
  } : l;
})), Ns = /* @__PURE__ */ J(((c, e) => {
  var r = Mt();
  e.exports = !r(function() {
    return Object.isExtensible(Object.preventExtensions({}));
  });
})), ri = /* @__PURE__ */ J(((c, e) => {
  var r = $t(), n = Ut(), i = ta(), s = Gt(), l = tr(), b = Ar().f, h = Wn(), E = rs(), T = Lo(), S = Bn(), j = Ns(), V = !1, O = S("meta"), X = 0, B = function(H) {
    b(H, O, { value: {
      objectID: "O" + X++,
      weakData: {}
    } });
  }, G = function(H, U) {
    if (!s(H)) return typeof H == "symbol" ? H : (typeof H == "string" ? "S" : "P") + H;
    if (!l(H, O)) {
      if (!T(H)) return "F";
      if (!U) return "E";
      B(H);
    }
    return H[O].objectID;
  }, Y = function(H, U) {
    if (!l(H, O)) {
      if (!T(H)) return !0;
      if (!U) return !1;
      B(H);
    }
    return H[O].weakData;
  }, ue = function(H) {
    return j && V && T(H) && !l(H, O) && B(H), H;
  }, re = function() {
    se.enable = function() {
    }, V = !0;
    var H = h.f, U = n([].splice), D = {};
    D[O] = 1, H(D).length && (h.f = function(Q) {
      for (var ve = H(Q), L = 0, le = ve.length; L < le; L++) if (ve[L] === O) {
        U(ve, L, 1);
        break;
      }
      return ve;
    }, r({
      target: "Object",
      stat: !0,
      forced: !0
    }, { getOwnPropertyNames: E.f }));
  }, se = e.exports = {
    enable: re,
    fastKey: G,
    getWeakData: Y,
    onFreeze: ue
  };
  i[O] = !0;
})), Di = /* @__PURE__ */ J(((c, e) => {
  var r = $t(), n = Dt(), i = Ut(), s = Ua(), l = Tr(), b = ri(), h = va(), E = _n(), T = Kt(), S = kn(), j = Gt(), V = Mt(), O = za(), X = Qr(), B = Va();
  e.exports = function(G, Y, ue) {
    var re = G.indexOf("Map") !== -1, se = G.indexOf("Weak") !== -1, H = re ? "set" : "add", U = n[G], D = U && U.prototype, Q = U, ve = {}, L = function(Ae) {
      var Ce = i(D[Ae]);
      l(D, Ae, Ae === "add" ? function(He) {
        return Ce(this, He === 0 ? 0 : He), this;
      } : Ae === "delete" ? function($) {
        return se && !j($) ? !1 : Ce(this, $ === 0 ? 0 : $);
      } : Ae === "get" ? function(He) {
        return se && !j(He) ? void 0 : Ce(this, He === 0 ? 0 : He);
      } : Ae === "has" ? function(He) {
        return se && !j(He) ? !1 : Ce(this, He === 0 ? 0 : He);
      } : function(He, ot) {
        return Ce(this, He === 0 ? 0 : He, ot), this;
      });
    };
    if (s(G, !T(U) || !(se || D.forEach && !V(function() {
      new U().entries().next();
    }))))
      Q = ue.getConstructor(Y, G, re, H), b.enable();
    else if (s(G, !0)) {
      var le = new Q(), Re = le[H](se ? {} : -0, 1) !== le, fe = V(function() {
        le.has(1);
      }), P = O(function(Ae) {
        new U(Ae);
      }), oe = !se && V(function() {
        for (var Ae = new U(), Ce = 5; Ce--; ) Ae[H](Ce, Ce);
        return !Ae.has(-0);
      });
      P || (Q = Y(function(Ae, Ce) {
        E(Ae, D);
        var $ = B(new U(), Ae, Q);
        return S(Ce) || h(Ce, $[H], {
          that: $,
          AS_ENTRIES: re
        }), $;
      }), Q.prototype = D, D.constructor = Q), (fe || oe) && (L("delete"), L("has"), re && L("get")), (oe || Re) && L(H), se && D.clear && delete D.clear;
    }
    return ve[G] = Q, r({
      global: !0,
      constructor: !0,
      forced: Q !== U
    }, ve), X(Q, G), se || ue.setStrong(Q, G, re), Q;
  };
})), ni = /* @__PURE__ */ J(((c, e) => {
  var r = Tr();
  e.exports = function(n, i, s) {
    for (var l in i) r(n, l, i[l], s);
    return n;
  };
})), xs = /* @__PURE__ */ J(((c, e) => {
  var r = Xr(), n = Zr(), i = ni(), s = ln(), l = _n(), b = kn(), h = va(), E = Oi(), T = Ha(), S = qa(), j = Yt(), V = ri().fastKey, O = Mr(), X = O.set, B = O.getterFor;
  e.exports = {
    getConstructor: function(G, Y, ue, re) {
      var se = G(function(ve, L) {
        l(ve, H), X(ve, {
          type: Y,
          index: r(null),
          first: null,
          last: null,
          size: 0
        }), j || (ve.size = 0), b(L) || h(L, ve[re], {
          that: ve,
          AS_ENTRIES: ue
        });
      }), H = se.prototype, U = B(Y), D = function(ve, L, le) {
        var Re = U(ve), fe = Q(ve, L), P, oe;
        return fe ? fe.value = le : (Re.last = fe = {
          index: oe = V(L, !0),
          key: L,
          value: le,
          previous: P = Re.last,
          next: null,
          removed: !1
        }, Re.first || (Re.first = fe), P && (P.next = fe), j ? Re.size++ : ve.size++, oe !== "F" && (Re.index[oe] = fe)), ve;
      }, Q = function(ve, L) {
        var le = U(ve), Re = V(L), fe;
        if (Re !== "F") return le.index[Re];
        for (fe = le.first; fe; fe = fe.next) if (fe.key === L) return fe;
      };
      return i(H, {
        clear: function() {
          for (var L = this, le = U(L), Re = le.first; Re; )
            Re.removed = !0, Re.previous && (Re.previous = Re.previous.next = null), Re = Re.next;
          le.first = le.last = null, le.index = r(null), j ? le.size = 0 : L.size = 0;
        },
        delete: function(ve) {
          var L = this, le = U(L), Re = Q(L, ve);
          if (Re) {
            var fe = Re.next, P = Re.previous;
            delete le.index[Re.index], Re.removed = !0, P && (P.next = fe), fe && (fe.previous = P), le.first === Re && (le.first = fe), le.last === Re && (le.last = P), j ? le.size-- : L.size--;
          }
          return !!Re;
        },
        forEach: function(L) {
          for (var le = U(this), Re = s(L, arguments.length > 1 ? arguments[1] : void 0), fe; fe = fe ? fe.next : le.first; )
            for (Re(fe.value, fe.key, this); fe && fe.removed; ) fe = fe.previous;
        },
        has: function(L) {
          return !!Q(this, L);
        }
      }), i(H, ue ? {
        get: function(L) {
          var le = Q(this, L);
          return le && le.value;
        },
        set: function(L, le) {
          return D(this, L === 0 ? 0 : L, le);
        }
      } : { add: function(L) {
        return D(this, L = L === 0 ? 0 : L, L);
      } }), j && n(H, "size", {
        configurable: !0,
        get: function() {
          return U(this).size;
        }
      }), se;
    },
    setStrong: function(G, Y, ue) {
      var re = Y + " Iterator", se = B(Y), H = B(re);
      E(G, Y, function(U, D) {
        X(this, {
          type: re,
          target: U,
          state: se(U),
          kind: D,
          last: null
        });
      }, function() {
        for (var U = H(this), D = U.kind, Q = U.last; Q && Q.removed; ) Q = Q.previous;
        return !U.target || !(U.last = Q = Q ? Q.next : U.state.first) ? (U.target = null, T(void 0, !0)) : T(D === "keys" ? Q.key : D === "values" ? Q.value : [Q.key, Q.value], !1);
      }, ue ? "entries" : "values", !ue, !0), S(Y);
    }
  };
})), $o = /* @__PURE__ */ J((() => {
  Di()("Map", function(c) {
    return function() {
      return c(this, arguments.length ? arguments[0] : void 0);
    };
  }, xs());
})), _a = /* @__PURE__ */ J((() => {
  $o();
})), wa = /* @__PURE__ */ J(((c) => {
  Object.defineProperty(c, "__esModule", { value: !0 }), Cn(), On();
  var e = bn(), r = mn(), n = Pn(), i = yn(), s = gn(), l = tn(), b = An();
  Mn(), Nn();
  function h(z) {
    return z && typeof z == "object" && "default" in z ? z : { default: z };
  }
  var E = /* @__PURE__ */ h(e), T = /* @__PURE__ */ h(r), S = /* @__PURE__ */ h(n), j = /* @__PURE__ */ h(i), V = /* @__PURE__ */ h(s), O = /* @__PURE__ */ h(l), X = /* @__PURE__ */ h(b), B;
  function G() {
  }
  G.prototype = /* @__PURE__ */ Object.create(null);
  function Y() {
    Y.init.call(this);
  }
  Y.EventEmitter = Y, Y.usingDomains = !1, Y.prototype.domain = void 0, Y.prototype._events = void 0, Y.prototype._maxListeners = void 0, Y.defaultMaxListeners = 10, Y.init = function() {
    this.domain = null, Y.usingDomains && B.active, (!this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = new G(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, Y.prototype.setMaxListeners = function(F) {
    if (typeof F != "number" || F < 0 || isNaN(F)) throw new TypeError('"n" argument must be a positive number');
    return this._maxListeners = F, this;
  };
  function ue(z) {
    return z._maxListeners === void 0 ? Y.defaultMaxListeners : z._maxListeners;
  }
  Y.prototype.getMaxListeners = function() {
    return ue(this);
  };
  function re(z, F, m) {
    if (F) z.call(m);
    else
      for (var he = z.length, te = fe(z, he), De = 0; De < he; ++De) te[De].call(m);
  }
  function se(z, F, m, he) {
    if (F) z.call(m, he);
    else
      for (var te = z.length, De = fe(z, te), ee = 0; ee < te; ++ee) De[ee].call(m, he);
  }
  function H(z, F, m, he, te) {
    if (F) z.call(m, he, te);
    else
      for (var De = z.length, ee = fe(z, De), pe = 0; pe < De; ++pe) ee[pe].call(m, he, te);
  }
  function U(z, F, m, he, te, De) {
    if (F) z.call(m, he, te, De);
    else
      for (var ee = z.length, pe = fe(z, ee), Ne = 0; Ne < ee; ++Ne) pe[Ne].call(m, he, te, De);
  }
  function D(z, F, m, he) {
    if (F) z.apply(m, he);
    else
      for (var te = z.length, De = fe(z, te), ee = 0; ee < te; ++ee) De[ee].apply(m, he);
  }
  Y.prototype.emit = function(F) {
    var m, he, te, De, ee, pe, Ne, $e = F === "error";
    if (pe = this._events, pe) $e = $e && pe.error == null;
    else if (!$e) return !1;
    if (Ne = this.domain, $e) {
      if (m = arguments[1], Ne)
        m || (m = /* @__PURE__ */ new Error('Uncaught, unspecified "error" event')), m.domainEmitter = this, m.domain = Ne, m.domainThrown = !1, Ne.emit("error", m);
      else {
        if (m instanceof Error) throw m;
        var Oe = /* @__PURE__ */ new Error('Uncaught, unspecified "error" event. (' + m + ")");
        throw Oe.context = m, Oe;
      }
      return !1;
    }
    if (he = pe[F], !he) return !1;
    var nt = typeof he == "function";
    switch (te = arguments.length, te) {
      case 1:
        re(he, nt, this);
        break;
      case 2:
        se(he, nt, this, arguments[1]);
        break;
      case 3:
        H(he, nt, this, arguments[1], arguments[2]);
        break;
      case 4:
        U(he, nt, this, arguments[1], arguments[2], arguments[3]);
        break;
      default:
        for (De = new Array(te - 1), ee = 1; ee < te; ee++) De[ee - 1] = arguments[ee];
        D(he, nt, this, De);
    }
    return !0;
  };
  function Q(z, F, m, he) {
    var te, De, ee;
    if (typeof m != "function") throw new TypeError('"listener" argument must be a function');
    if (De = z._events, De ? (De.newListener && (z.emit("newListener", F, m.listener ? m.listener : m), De = z._events), ee = De[F]) : (De = z._events = new G(), z._eventsCount = 0), !ee)
      ee = De[F] = m, ++z._eventsCount;
    else if (typeof ee == "function" ? ee = De[F] = he ? [m, ee] : [ee, m] : he ? ee.unshift(m) : ee.push(m), !ee.warned && (te = ue(z), te && te > 0 && ee.length > te)) {
      ee.warned = !0;
      var pe = /* @__PURE__ */ new Error("Possible EventEmitter memory leak detected. " + ee.length + " " + F + " listeners added. Use emitter.setMaxListeners() to increase limit");
      pe.name = "MaxListenersExceededWarning", pe.emitter = z, pe.type = F, pe.count = ee.length, ve(pe);
    }
    return z;
  }
  function ve(z) {
    typeof console.warn == "function" ? console.warn(z) : console.log(z);
  }
  Y.prototype.addListener = function(F, m) {
    return Q(this, F, m, !1);
  }, Y.prototype.on = Y.prototype.addListener, Y.prototype.prependListener = function(F, m) {
    return Q(this, F, m, !0);
  };
  function L(z, F, m) {
    var he = !1;
    function te() {
      z.removeListener(F, te), he || (he = !0, m.apply(z, arguments));
    }
    return te.listener = m, te;
  }
  Y.prototype.once = function(F, m) {
    if (typeof m != "function") throw new TypeError('"listener" argument must be a function');
    return this.on(F, L(this, F, m)), this;
  }, Y.prototype.prependOnceListener = function(F, m) {
    if (typeof m != "function") throw new TypeError('"listener" argument must be a function');
    return this.prependListener(F, L(this, F, m)), this;
  }, Y.prototype.removeListener = function(F, m) {
    var he, te, De, ee, pe;
    if (typeof m != "function") throw new TypeError('"listener" argument must be a function');
    if (te = this._events, !te) return this;
    if (he = te[F], !he) return this;
    if (he === m || he.listener && he.listener === m)
      --this._eventsCount === 0 ? this._events = new G() : (delete te[F], te.removeListener && this.emit("removeListener", F, he.listener || m));
    else if (typeof he != "function") {
      for (De = -1, ee = he.length; ee-- > 0; ) if (he[ee] === m || he[ee].listener && he[ee].listener === m) {
        pe = he[ee].listener, De = ee;
        break;
      }
      if (De < 0) return this;
      if (he.length === 1) {
        if (he[0] = void 0, --this._eventsCount === 0)
          return this._events = new G(), this;
        delete te[F];
      } else Re(he, De);
      te.removeListener && this.emit("removeListener", F, pe || m);
    }
    return this;
  }, Y.prototype.off = function(z, F) {
    return this.removeListener(z, F);
  }, Y.prototype.removeAllListeners = function(F) {
    var m, he = this._events;
    if (!he) return this;
    if (!he.removeListener)
      return arguments.length === 0 ? (this._events = new G(), this._eventsCount = 0) : he[F] && (--this._eventsCount === 0 ? this._events = new G() : delete he[F]), this;
    if (arguments.length === 0) {
      for (var te = Object.keys(he), De = 0, ee; De < te.length; ++De)
        ee = te[De], ee !== "removeListener" && this.removeAllListeners(ee);
      return this.removeAllListeners("removeListener"), this._events = new G(), this._eventsCount = 0, this;
    }
    if (m = he[F], typeof m == "function") this.removeListener(F, m);
    else if (m) do
      this.removeListener(F, m[m.length - 1]);
    while (m[0]);
    return this;
  }, Y.prototype.listeners = function(F) {
    var m, he, te = this._events;
    return te ? (m = te[F], m ? typeof m == "function" ? he = [m.listener || m] : he = P(m) : he = []) : he = [], he;
  }, Y.listenerCount = function(z, F) {
    return typeof z.listenerCount == "function" ? z.listenerCount(F) : le.call(z, F);
  }, Y.prototype.listenerCount = le;
  function le(z) {
    var F = this._events;
    if (F) {
      var m = F[z];
      if (typeof m == "function") return 1;
      if (m) return m.length;
    }
    return 0;
  }
  Y.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };
  function Re(z, F) {
    for (var m = F, he = m + 1, te = z.length; he < te; m += 1, he += 1) z[m] = z[he];
    z.pop();
  }
  function fe(z, F) {
    for (var m = new Array(F); F--; ) m[F] = z[F];
    return m;
  }
  function P(z) {
    for (var F = new Array(z.length), m = 0; m < F.length; ++m) F[m] = z[m].listener || z[m];
    return F;
  }
  function oe(z) {
    var F = Ae();
    return function() {
      var he = O.default(z), te;
      if (F) {
        var De = O.default(this).constructor;
        te = Reflect.construct(he, arguments, De);
      } else te = he.apply(this, arguments);
      return V.default(this, te);
    };
  }
  function Ae() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Ce = /* @__PURE__ */ (function(z) {
    j.default(m, z);
    var F = oe(m);
    function m(he) {
      var te;
      return E.default(this, m), te = F.call(this), X.default(S.default(te), "timeout", null), X.default(S.default(te), "startTimestamp", -1), te.minDelay = he.min, te.maxDelay = he.max, te.initialDelay = he.initial || 0, te.maxAttemptsCount = he.maxAttemptsCount || 0, te.maxAttemptsTime = he.maxAttemptsTime || 0, te.randomness = he.randomness || 0, te.inProgress = !1, te.attemptNum = 0, te.prevDelay = 0, te.currDelay = 0, te;
    }
    return T.default(m, [
      {
        key: "attempt",
        value: function() {
          this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.attemptNum++, this.emit("attempt", this);
        }
      },
      {
        key: "nextDelay",
        value: function(te) {
          if (typeof te == "number")
            return this.prevDelay = 0, this.currDelay = te, te;
          if (this.attemptNum == 0) return this.initialDelay;
          if (this.attemptNum == 1)
            return this.currDelay = this.minDelay, this.currDelay;
          this.prevDelay = this.currDelay;
          var De = this.currDelay + this.prevDelay;
          return this.maxDelay && De > this.maxDelay && (this.currDelay = this.maxDelay, De = this.maxDelay), this.currDelay = De, De;
        }
      },
      {
        key: "randomize",
        value: function(te) {
          var De = te * this.randomness, ee = Math.round(Math.random() * De * 2 - De);
          return Math.max(0, te + ee);
        }
      },
      {
        key: "scheduleAttempt",
        value: function(te) {
          var De = this;
          if (this.maxAttemptsCount && this.attemptNum >= this.maxAttemptsCount) {
            this.cleanup(), this.emit("failed", /* @__PURE__ */ new Error("Maximum attempt count limit reached"));
            return;
          }
          var ee = this.nextDelay(te);
          if (ee = this.randomize(ee), this.maxAttemptsTime && this.startTimestamp + this.maxAttemptsTime < Date.now() + ee) {
            this.cleanup(), this.emit("failed", /* @__PURE__ */ new Error("Maximum attempt time limit reached"));
            return;
          }
          this.timeout = setTimeout(function() {
            return De.attempt();
          }, ee);
        }
      },
      {
        key: "cleanup",
        value: function() {
          this.timeout && (clearTimeout(this.timeout), this.timeout = null), this.inProgress = !1, this.attemptNum = 0, this.prevDelay = 0, this.currDelay = 0;
        }
      },
      {
        key: "start",
        value: function() {
          if (this.inProgress) throw new Error("Retrier is already in progress");
          this.inProgress = !0, this.startTimestamp = Date.now(), this.scheduleAttempt(this.initialDelay);
        }
      },
      {
        key: "cancel",
        value: function() {
          this.timeout && (clearTimeout(this.timeout), this.timeout = null, this.inProgress = !1, this.emit("cancelled"));
        }
      },
      {
        key: "succeeded",
        value: function(te) {
          this.emit("succeeded", te);
        }
      },
      {
        key: "failed",
        value: function(te, De) {
          if (this.timeout) throw new Error("Retrier attempt is already in progress");
          this.scheduleAttempt(De);
        }
      }
    ]), m;
  })(Y), $ = /* @__PURE__ */ (function(z) {
    j.default(m, z);
    var F = oe(m);
    function m(he) {
      var te;
      return E.default(this, m), te = F.call(this), X.default(S.default(te), "resolve", function() {
      }), X.default(S.default(te), "reject", function() {
      }), te.retrier = new Ce(he), te;
    }
    return T.default(m, [{
      key: "run",
      value: function(te) {
        var De = this;
        return this.retrier.on("attempt", function() {
          te().then(function(ee) {
            return De.retrier.succeeded(ee);
          }).catch(function(ee) {
            return De.retrier.failed(ee);
          });
        }), this.retrier.on("succeeded", function(ee) {
          return De.resolve(ee);
        }), this.retrier.on("cancelled", function() {
          return De.reject(/* @__PURE__ */ new Error("Cancelled"));
        }), this.retrier.on("failed", function(ee) {
          return De.reject(ee);
        }), new Promise(function(ee, pe) {
          De.resolve = ee, De.reject = pe, De.retrier.start();
        });
      }
    }, {
      key: "cancel",
      value: function() {
        this.retrier.cancel();
      }
    }]), m;
  })(Y);
  function He(z) {
    var F = ot();
    return function() {
      var he = O.default(z), te;
      if (F) {
        var De = O.default(this).constructor;
        te = Reflect.construct(he, arguments, De);
      } else te = he.apply(this, arguments);
      return V.default(this, te);
    };
  }
  function ot() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function vt(z) {
    return z != null;
  }
  var Ie = /* @__PURE__ */ (function(z) {
    j.default(m, z);
    var F = He(m);
    function m(he) {
      var te;
      E.default(this, m), te = F.call(this), X.default(S.default(te), "backoffDelay", 0), X.default(S.default(te), "nextBackoffDelay", 0), X.default(S.default(te), "backoffNumber", 0), X.default(S.default(te), "timeoutID", null), X.default(S.default(te), "maxNumberOfRetry", -1), he = he || {};
      var De = he, ee = De.initialDelay, pe = De.maxDelay, Ne = De.randomisationFactor, $e = De.factor;
      if (vt(ee) && ee < 1) throw new Error("The initial timeout must be equal to or greater than 1.");
      if (vt(pe) && pe <= 1) throw new Error("The maximal timeout must be greater than 1.");
      if (vt(Ne) && (Ne < 0 || Ne > 1)) throw new Error("The randomisation factor must be between 0 and 1.");
      if (vt($e) && $e <= 1) throw new Error("Exponential factor should be greater than 1.");
      if (te.initialDelay = ee || 100, te.maxDelay = pe || 1e4, te.maxDelay <= te.initialDelay) throw new Error("The maximal backoff delay must be greater than the initial backoff delay.");
      return te.randomisationFactor = Ne || 0, te.factor = $e || 2, te.reset(), te;
    }
    return T.default(m, [
      {
        key: "backoff",
        value: function(te) {
          this.timeoutID == null && (this.backoffNumber === this.maxNumberOfRetry ? (this.emit("fail", te), this.reset()) : (this.backoffDelay = this.next(), this.timeoutID = setTimeout(this.onBackoff.bind(this), this.backoffDelay), this.emit("backoff", this.backoffNumber, this.backoffDelay, te)));
        }
      },
      {
        key: "reset",
        value: function() {
          this.backoffDelay = 0, this.nextBackoffDelay = this.initialDelay, this.backoffNumber = 0, this.timeoutID && clearTimeout(this.timeoutID), this.timeoutID = null;
        }
      },
      {
        key: "failAfter",
        value: function(te) {
          if (te <= 0) throw new Error("Expected a maximum number of retry greater than 0 but got ".concat(te));
          this.maxNumberOfRetry = te;
        }
      },
      {
        key: "next",
        value: function() {
          this.backoffDelay = Math.min(this.nextBackoffDelay, this.maxDelay), this.nextBackoffDelay = this.backoffDelay * this.factor;
          var te = 1 + Math.random() * this.randomisationFactor;
          return Math.min(this.maxDelay, Math.round(this.backoffDelay * te));
        }
      },
      {
        key: "onBackoff",
        value: function() {
          this.timeoutID = null, this.emit("ready", this.backoffNumber, this.backoffDelay), this.backoffNumber++;
        }
      }
    ], [{
      key: "exponential",
      value: function(te) {
        return new m(te);
      }
    }]), m;
  })(Y);
  c.AsyncRetrier = $, c.Backoff = Ie, c.Retrier = Ce;
})), js = /* @__PURE__ */ J((() => {
  var c = ea().PROPER, e = Tr(), r = cr(), n = hr(), i = Mt(), s = Ya(), l = "toString", b = RegExp.prototype, h = b[l], E = i(function() {
    return h.call({
      source: "a",
      flags: "b"
    }) !== "/a/b";
  }), T = c && h.name !== l;
  (E || T) && e(b, l, function() {
    var j = r(this), V = n(j.source), O = n(s(j));
    return "/" + V + "/" + O;
  }, { unsafe: !0 });
})), Do = /* @__PURE__ */ J((() => {
  Di()("Set", function(c) {
    return function() {
      return c(this, arguments.length ? arguments[0] : void 0);
    };
  }, xs());
})), Fi = /* @__PURE__ */ J((() => {
  Do();
})), Fo = /* @__PURE__ */ J(((c, e) => {
  (function(n, i) {
    typeof c == "object" && typeof e == "object" ? e.exports = i() : typeof define == "function" && define.amd ? define("StateMachine", [], i) : typeof c == "object" ? c.StateMachine = i() : n.StateMachine = i();
  })(c, function() {
    return (function(r) {
      var n = {};
      function i(s) {
        if (n[s]) return n[s].exports;
        var l = n[s] = {
          i: s,
          l: !1,
          exports: {}
        };
        return r[s].call(l.exports, l, l.exports, i), l.l = !0, l.exports;
      }
      return i.m = r, i.c = n, i.i = function(s) {
        return s;
      }, i.d = function(s, l, b) {
        i.o(s, l) || Object.defineProperty(s, l, {
          configurable: !1,
          enumerable: !0,
          get: b
        });
      }, i.n = function(s) {
        var l = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(l, "a", l), l;
      }, i.o = function(s, l) {
        return Object.prototype.hasOwnProperty.call(s, l);
      }, i.p = "", i(i.s = 5);
    })([
      (function(r, n, i) {
        "use strict";
        r.exports = function(s, l) {
          for (var b = 1, h, E; b < arguments.length; b++) {
            h = arguments[b];
            for (E in h) h.hasOwnProperty(E) && (s[E] = h[E]);
          }
          return s;
        };
      }),
      (function(r, n, i) {
        "use strict";
        var s = i(0);
        r.exports = {
          build: function(l, b) {
            var h, E, T, S = b.plugins;
            for (h = 0, E = S.length; h < E; h++)
              T = S[h], T.methods && s(l, T.methods), T.properties && Object.defineProperties(l, T.properties);
          },
          hook: function(l, b, h) {
            var E, T, S, j, V = l.config.plugins, O = [l.context];
            for (h && (O = O.concat(h)), E = 0, T = V.length; E < T; E++)
              j = V[E], S = V[E][b], S && S.apply(j, O);
          }
        };
      }),
      (function(r, n, i) {
        "use strict";
        function s(l) {
          if (l.length === 0) return l;
          var b, h, E = l.split(/[_-]/);
          if (E.length === 1 && E[0][0].toLowerCase() === E[0][0]) return l;
          for (h = E[0].toLowerCase(), b = 1; b < E.length; b++) h = h + E[b].charAt(0).toUpperCase() + E[b].substring(1).toLowerCase();
          return h;
        }
        s.prepended = function(l, b) {
          return b = s(b), l + b[0].toUpperCase() + b.substring(1);
        }, r.exports = s;
      }),
      (function(r, n, i) {
        "use strict";
        var s = i(0), l = i(2);
        function b(h, E) {
          h = h || {}, this.options = h, this.defaults = E.defaults, this.states = [], this.transitions = [], this.map = {}, this.lifecycle = this.configureLifecycle(), this.init = this.configureInitTransition(h.init), this.data = this.configureData(h.data), this.methods = this.configureMethods(h.methods), this.map[this.defaults.wildcard] = {}, this.configureTransitions(h.transitions || []), this.plugins = this.configurePlugins(h.plugins, E.plugin);
        }
        s(b.prototype, {
          addState: function(h) {
            this.map[h] || (this.states.push(h), this.addStateLifecycleNames(h), this.map[h] = {});
          },
          addStateLifecycleNames: function(h) {
            this.lifecycle.onEnter[h] = l.prepended("onEnter", h), this.lifecycle.onLeave[h] = l.prepended("onLeave", h), this.lifecycle.on[h] = l.prepended("on", h);
          },
          addTransition: function(h) {
            this.transitions.indexOf(h) < 0 && (this.transitions.push(h), this.addTransitionLifecycleNames(h));
          },
          addTransitionLifecycleNames: function(h) {
            this.lifecycle.onBefore[h] = l.prepended("onBefore", h), this.lifecycle.onAfter[h] = l.prepended("onAfter", h), this.lifecycle.on[h] = l.prepended("on", h);
          },
          mapTransition: function(h) {
            var E = h.name, T = h.from, S = h.to;
            return this.addState(T), typeof S != "function" && this.addState(S), this.addTransition(E), this.map[T][E] = h, h;
          },
          configureLifecycle: function() {
            return {
              onBefore: { transition: "onBeforeTransition" },
              onAfter: { transition: "onAfterTransition" },
              onEnter: { state: "onEnterState" },
              onLeave: { state: "onLeaveState" },
              on: { transition: "onTransition" }
            };
          },
          configureInitTransition: function(h) {
            return typeof h == "string" ? this.mapTransition(s({}, this.defaults.init, {
              to: h,
              active: !0
            })) : typeof h == "object" ? this.mapTransition(s({}, this.defaults.init, h, { active: !0 })) : (this.addState(this.defaults.init.from), this.defaults.init);
          },
          configureData: function(h) {
            return typeof h == "function" ? h : typeof h == "object" ? function() {
              return h;
            } : function() {
              return {};
            };
          },
          configureMethods: function(h) {
            return h || {};
          },
          configurePlugins: function(h, E) {
            h = h || [];
            for (var T = 0, S = h.length, j; T < S; T++)
              j = h[T], typeof j == "function" && (h[T] = j = j()), j.configure && j.configure(this);
            return h;
          },
          configureTransitions: function(h) {
            var E, T, S, j, V, O = this.defaults.wildcard;
            for (T = 0; T < h.length; T++)
              for (S = h[T], j = Array.isArray(S.from) ? S.from : [S.from || O], V = S.to || O, E = 0; E < j.length; E++) this.mapTransition({
                name: S.name,
                from: j[E],
                to: V
              });
          },
          transitionFor: function(h, E) {
            var T = this.defaults.wildcard;
            return this.map[h][E] || this.map[T][E];
          },
          transitionsFor: function(h) {
            var E = this.defaults.wildcard;
            return Object.keys(this.map[h]).concat(Object.keys(this.map[E]));
          },
          allStates: function() {
            return this.states;
          },
          allTransitions: function() {
            return this.transitions;
          }
        }), r.exports = b;
      }),
      (function(r, n, i) {
        var s = i(0), l = i(6), b = i(1), h = [null, []];
        function E(T, S) {
          this.context = T, this.config = S, this.state = S.init.from, this.observers = [T];
        }
        s(E.prototype, {
          init: function(T) {
            if (s(this.context, this.config.data.apply(this.context, T)), b.hook(this, "init"), this.config.init.active) return this.fire(this.config.init.name, []);
          },
          is: function(T) {
            return Array.isArray(T) ? T.indexOf(this.state) >= 0 : this.state === T;
          },
          isPending: function() {
            return this.pending;
          },
          can: function(T) {
            return !this.isPending() && !!this.seek(T);
          },
          cannot: function(T) {
            return !this.can(T);
          },
          allStates: function() {
            return this.config.allStates();
          },
          allTransitions: function() {
            return this.config.allTransitions();
          },
          transitions: function() {
            return this.config.transitionsFor(this.state);
          },
          seek: function(T, S) {
            var j = this.config.defaults.wildcard, V = this.config.transitionFor(this.state, T), O = V && V.to;
            return typeof O == "function" ? O.apply(this.context, S) : O === j ? this.state : O;
          },
          fire: function(T, S) {
            return this.transit(T, this.state, this.seek(T, S), S);
          },
          transit: function(T, S, j, V) {
            var O = this.config.lifecycle, X = this.config.options.observeUnchangedState || S !== j;
            return j ? this.isPending() ? this.context.onPendingTransition(T, S, j) : (this.config.addState(j), this.beginTransit(), V.unshift({
              transition: T,
              from: S,
              to: j,
              fsm: this.context
            }), this.observeEvents([
              this.observersForEvent(O.onBefore.transition),
              this.observersForEvent(O.onBefore[T]),
              X ? this.observersForEvent(O.onLeave.state) : h,
              X ? this.observersForEvent(O.onLeave[S]) : h,
              this.observersForEvent(O.on.transition),
              X ? ["doTransit", [this]] : h,
              X ? this.observersForEvent(O.onEnter.state) : h,
              X ? this.observersForEvent(O.onEnter[j]) : h,
              X ? this.observersForEvent(O.on[j]) : h,
              this.observersForEvent(O.onAfter.transition),
              this.observersForEvent(O.onAfter[T]),
              this.observersForEvent(O.on[T])
            ], V)) : this.context.onInvalidTransition(T, S, j);
          },
          beginTransit: function() {
            this.pending = !0;
          },
          endTransit: function(T) {
            return this.pending = !1, T;
          },
          failTransit: function(T) {
            throw this.pending = !1, T;
          },
          doTransit: function(T) {
            this.state = T.to;
          },
          observe: function(T) {
            if (T.length === 2) {
              var S = {};
              S[T[0]] = T[1], this.observers.push(S);
            } else this.observers.push(T[0]);
          },
          observersForEvent: function(T) {
            for (var S = 0, j = this.observers.length, V, O = []; S < j; S++)
              V = this.observers[S], V[T] && O.push(V);
            return [
              T,
              O,
              !0
            ];
          },
          observeEvents: function(T, S, j, V) {
            if (T.length === 0) return this.endTransit(V === void 0 ? !0 : V);
            var O = T[0][0], X = T[0][1], B = T[0][2];
            if (S[0].event = O, O && B && O !== j && b.hook(this, "lifecycle", S), X.length === 0)
              return T.shift(), this.observeEvents(T, S, O, V);
            var G = X.shift(), Y = G[O].apply(G, S);
            return Y && typeof Y.then == "function" ? Y.then(this.observeEvents.bind(this, T, S, O)).catch(this.failTransit.bind(this)) : Y === !1 ? this.endTransit(!1) : this.observeEvents(T, S, O, Y);
          },
          onInvalidTransition: function(T, S, j) {
            throw new l("transition is invalid in current state", T, S, j, this.state);
          },
          onPendingTransition: function(T, S, j) {
            throw new l("transition is invalid while previous transition is still in progress", T, S, j, this.state);
          }
        }), r.exports = E;
      }),
      (function(r, n, i) {
        "use strict";
        var s = i(0), l = i(2), b = i(1), h = i(3), E = i(4), T = {
          is: function(B) {
            return this._fsm.is(B);
          },
          can: function(B) {
            return this._fsm.can(B);
          },
          cannot: function(B) {
            return this._fsm.cannot(B);
          },
          observe: function() {
            return this._fsm.observe(arguments);
          },
          transitions: function() {
            return this._fsm.transitions();
          },
          allTransitions: function() {
            return this._fsm.allTransitions();
          },
          allStates: function() {
            return this._fsm.allStates();
          },
          onInvalidTransition: function(B, G, Y) {
            return this._fsm.onInvalidTransition(B, G, Y);
          },
          onPendingTransition: function(B, G, Y) {
            return this._fsm.onPendingTransition(B, G, Y);
          }
        }, S = { state: {
          configurable: !1,
          enumerable: !0,
          get: function() {
            return this._fsm.state;
          },
          set: function(B) {
            throw Error("use transitions to change state");
          }
        } };
        function j(B) {
          return O(this || {}, B);
        }
        function V() {
          var B, G;
          typeof arguments[0] == "function" ? (B = arguments[0], G = arguments[1] || {}) : (B = function() {
            this._fsm.apply(this, arguments);
          }, G = arguments[0] || {});
          var Y = new h(G, j);
          return X(B.prototype, Y), B.prototype._fsm.config = Y, B;
        }
        function O(B, G) {
          return X(B, new h(G, j)), B._fsm(), B;
        }
        function X(B, G) {
          if (typeof B != "object" || Array.isArray(B)) throw Error("StateMachine can only be applied to objects");
          b.build(B, G), Object.defineProperties(B, S), s(B, T), s(B, G.methods), G.allTransitions().forEach(function(Y) {
            B[l(Y)] = function() {
              return this._fsm.fire(Y, [].slice.call(arguments));
            };
          }), B._fsm = function() {
            this._fsm = new E(this, G), this._fsm.init(arguments);
          };
        }
        j.version = "3.0.1", j.factory = V, j.apply = O, j.defaults = {
          wildcard: "*",
          init: {
            name: "init",
            from: "none"
          }
        }, r.exports = j;
      }),
      (function(r, n, i) {
        "use strict";
        r.exports = function(s, l, b, h, E) {
          this.message = s, this.transition = l, this.from = b, this.to = h, this.current = E;
        };
      })
    ]);
  });
})), Us = /* @__PURE__ */ J(((c, e) => {
  e.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
})), Qt = /* @__PURE__ */ J(((c, e) => {
  var r = Us(), n = Yt(), i = Dt(), s = Kt(), l = Gt(), b = tr(), h = hn(), E = In(), T = un(), S = Tr(), j = Zr(), V = sn(), O = ya(), X = Hn(), B = Jt(), G = Bn(), Y = Mr(), ue = Y.enforce, re = Y.get, se = i.Int8Array, H = se && se.prototype, U = i.Uint8ClampedArray, D = U && U.prototype, Q = se && O(se), ve = H && O(H), L = Object.prototype, le = i.TypeError, Re = B("toStringTag"), fe = G("TYPED_ARRAY_TAG"), P = "TypedArrayConstructor", oe = r && !!X && h(i.opera) !== "Opera", Ae = !1, Ce, $, He, ot = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  }, vt = {
    BigInt64Array: 8,
    BigUint64Array: 8
  }, Ie = function(pe) {
    if (!l(pe)) return !1;
    var Ne = h(pe);
    return Ne === "DataView" || b(ot, Ne) || b(vt, Ne);
  }, z = function(ee) {
    var pe = O(ee);
    if (l(pe)) {
      var Ne = re(pe);
      return Ne && b(Ne, P) ? Ne[P] : z(pe);
    }
  }, F = function(ee) {
    if (!l(ee)) return !1;
    var pe = h(ee);
    return b(ot, pe) || b(vt, pe);
  }, m = function(ee) {
    if (F(ee)) return ee;
    throw new le("Target is not a typed array");
  }, he = function(ee) {
    if (s(ee) && (!X || V(Q, ee))) return ee;
    throw new le(E(ee) + " is not a typed array constructor");
  }, te = function(ee, pe, Ne, $e) {
    if (n) {
      if (Ne) for (var Oe in ot) {
        var nt = i[Oe];
        if (nt && b(nt.prototype, ee)) try {
          delete nt.prototype[ee];
        } catch {
          try {
            nt.prototype[ee] = pe;
          } catch {
          }
        }
      }
      (!ve[ee] || Ne) && S(ve, ee, Ne ? pe : oe && H[ee] || pe, $e);
    }
  }, De = function(ee, pe, Ne) {
    var $e, Oe;
    if (n) {
      if (X) {
        if (Ne) {
          for ($e in ot)
            if (Oe = i[$e], Oe && b(Oe, ee)) try {
              delete Oe[ee];
            } catch {
            }
        }
        if (!Q[ee] || Ne) try {
          return S(Q, ee, Ne ? pe : oe && Q[ee] || pe);
        } catch {
        }
        else return;
      }
      for ($e in ot)
        Oe = i[$e], Oe && (!Oe[ee] || Ne) && S(Oe, ee, pe);
    }
  };
  for (Ce in ot)
    $ = i[Ce], He = $ && $.prototype, He ? ue(He)[P] = $ : oe = !1;
  for (Ce in vt)
    $ = i[Ce], He = $ && $.prototype, He && (ue(He)[P] = $);
  if ((!oe || !s(Q) || Q === Function.prototype) && (Q = function() {
    throw new le("Incorrect invocation");
  }, oe))
    for (Ce in ot) i[Ce] && X(i[Ce], Q);
  if ((!oe || !ve || ve === L) && (ve = Q.prototype, oe))
    for (Ce in ot) i[Ce] && X(i[Ce].prototype, ve);
  if (oe && O(D) !== ve && X(D, ve), n && !b(ve, Re)) {
    Ae = !0, j(ve, Re, {
      configurable: !0,
      get: function() {
        return l(this) ? this[fe] : void 0;
      }
    });
    for (Ce in ot) i[Ce] && T(i[Ce].prototype, fe, Ce);
  }
  e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: oe,
    TYPED_ARRAY_TAG: Ae && fe,
    aTypedArray: m,
    aTypedArrayConstructor: he,
    exportTypedArrayMethod: te,
    exportTypedArrayStaticMethod: De,
    getTypedArrayConstructor: z,
    isView: Ie,
    isTypedArray: F,
    TypedArray: Q,
    TypedArrayPrototype: ve
  };
})), qo = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Mt(), i = za(), s = Qt().NATIVE_ARRAY_BUFFER_VIEWS, l = r.ArrayBuffer, b = r.Int8Array;
  e.exports = !s || !n(function() {
    b(1);
  }) || !n(function() {
    new b(-1);
  }) || !i(function(h) {
    new b(), new b(null), new b(1.5), new b(h);
  }, !0) || n(function() {
    return new b(new l(2), 1, void 0).length !== 1;
  });
})), Ls = /* @__PURE__ */ J(((c, e) => {
  var r = Yr(), n = En(), i = RangeError;
  e.exports = function(s) {
    if (s === void 0) return 0;
    var l = r(s), b = n(l);
    if (l !== b) throw new i("Wrong length or index");
    return b;
  };
})), Bo = /* @__PURE__ */ J(((c, e) => {
  e.exports = Math.sign || function(n) {
    var i = +n;
    return i === 0 || i !== i ? i : i < 0 ? -1 : 1;
  };
})), Wo = /* @__PURE__ */ J(((c, e) => {
  var r = 4503599627370496;
  e.exports = function(n) {
    return n + r - r;
  };
})), zo = /* @__PURE__ */ J(((c, e) => {
  var r = Bo(), n = Wo(), i = Math.abs, s = 2220446049250313e-31;
  e.exports = function(l, b, h, E) {
    var T = +l, S = i(T), j = r(T);
    if (S < E) return j * n(S / E / b) * E * b;
    var V = (1 + b / s) * S, O = V - (V - S);
    return O > h || O !== O ? j * (1 / 0) : j * O;
  };
})), Go = /* @__PURE__ */ J(((c, e) => {
  var r = zo(), n = 11920928955078125e-23, i = 34028234663852886e22, s = 11754943508222875e-54;
  e.exports = Math.fround || function(b) {
    return r(b, n, i, s);
  };
})), Ho = /* @__PURE__ */ J(((c, e) => {
  var r = Array, n = Math.abs, i = Math.pow, s = Math.floor, l = Math.log, b = Math.LN2, h = function(T, S, j) {
    var V = r(j), O = j * 8 - S - 1, X = (1 << O) - 1, B = X >> 1, G = S === 23 ? i(2, -24) - i(2, -77) : 0, Y = T < 0 || T === 0 && 1 / T < 0 ? 1 : 0, ue = 0, re, se, H;
    for (T = n(T), T !== T || T === 1 / 0 ? (se = T !== T ? 1 : 0, re = X) : (re = s(l(T) / b), H = i(2, -re), T * H < 1 && (re--, H *= 2), re + B >= 1 ? T += G / H : T += G * i(2, 1 - B), T * H >= 2 && (re++, H /= 2), re + B >= X ? (se = 0, re = X) : re + B >= 1 ? (se = (T * H - 1) * i(2, S), re += B) : (se = T * i(2, B - 1) * i(2, S), re = 0)); S >= 8; )
      V[ue++] = se & 255, se /= 256, S -= 8;
    for (re = re << S | se, O += S; O > 0; )
      V[ue++] = re & 255, re /= 256, O -= 8;
    return V[ue - 1] |= Y * 128, V;
  }, E = function(T, S) {
    var j = T.length, V = j * 8 - S - 1, O = (1 << V) - 1, X = O >> 1, B = V - 7, G = j - 1, Y = T[G--], ue = Y & 127, re;
    for (Y >>= 7; B > 0; )
      ue = ue * 256 + T[G--], B -= 8;
    for (re = ue & (1 << -B) - 1, ue >>= -B, B += S; B > 0; )
      re = re * 256 + T[G--], B -= 8;
    if (ue === 0) ue = 1 - X;
    else {
      if (ue === O) return re ? NaN : Y ? -1 / 0 : 1 / 0;
      re += i(2, S), ue -= X;
    }
    return (Y ? -1 : 1) * re * i(2, ue - S);
  };
  e.exports = {
    pack: h,
    unpack: E
  };
})), $s = /* @__PURE__ */ J(((c, e) => {
  var r = br(), n = Rn(), i = _r();
  e.exports = [].fill || function(l) {
    for (var b = r(this), h = i(b), E = arguments.length, T = n(E > 1 ? arguments[1] : void 0, h), S = E > 2 ? arguments[2] : void 0, j = S === void 0 ? h : n(S, h); j > T; ) b[T++] = l;
    return b;
  };
})), Ds = /* @__PURE__ */ J(((c, e) => {
  var r = Dt(), n = Ut(), i = Yt(), s = Us(), l = ea(), b = un(), h = Zr(), E = ni(), T = Mt(), S = _n(), j = Yr(), V = Ls(), O = Go(), X = Ho(), B = ya(), G = Hn(), Y = $s(), ue = on(), re = Va(), se = di(), H = Qr(), U = Mr(), D = l.PROPER, Q = l.CONFIGURABLE, ve = "ArrayBuffer", L = "DataView", le = "prototype", Re = "Wrong length", fe = "Wrong index", P = U.getterFor(ve), oe = U.getterFor(L), Ae = U.set, Ce = r[ve], $ = Ce, He = $ && $[le], ot = r[L], vt = ot && ot[le], Ie = Object.prototype, z = r.Array, F = r.RangeError, m = n(Y), he = n([].reverse), te = X.pack, De = X.unpack, ee = function(_e) {
    return [_e & 255];
  }, pe = function(_e) {
    return [_e & 255, _e >> 8 & 255];
  }, Ne = function(_e) {
    return [
      _e & 255,
      _e >> 8 & 255,
      _e >> 16 & 255,
      _e >> 24 & 255
    ];
  }, $e = function(_e) {
    return _e[3] << 24 | _e[2] << 16 | _e[1] << 8 | _e[0];
  }, Oe = function(_e) {
    return te(O(_e), 23, 4);
  }, nt = function(_e) {
    return te(_e, 52, 8);
  }, Ze = function(_e, de, ce) {
    h(_e[le], de, {
      configurable: !0,
      get: function() {
        return ce(this)[de];
      }
    });
  }, Je = function(_e, de, ce, ye) {
    var Ye = oe(_e), Fe = V(ce), We = !!ye;
    if (Fe + de > Ye.byteLength) throw new F(fe);
    var ht = Ye.bytes, mt = Fe + Ye.byteOffset, ct = ue(ht, mt, mt + de);
    return We ? ct : he(ct);
  }, _t = function(_e, de, ce, ye, Ye, Fe) {
    var We = oe(_e), ht = V(ce), mt = ye(+Ye), ct = !!Fe;
    if (ht + de > We.byteLength) throw new F(fe);
    for (var Ve = We.bytes, at = ht + We.byteOffset, qe = 0; qe < de; qe++) Ve[at + qe] = mt[ct ? qe : de - qe - 1];
  };
  if (!s)
    $ = function(de) {
      S(this, He);
      var ce = V(de);
      Ae(this, {
        type: ve,
        bytes: m(z(ce), 0),
        byteLength: ce
      }), i || (this.byteLength = ce, this.detached = !1);
    }, He = $[le], ot = function(de, ce, ye) {
      S(this, vt), S(de, He);
      var Ye = P(de), Fe = Ye.byteLength, We = j(ce);
      if (We < 0 || We > Fe) throw new F("Wrong offset");
      if (ye = ye === void 0 ? Fe - We : V(ye), We + ye > Fe) throw new F(Re);
      Ae(this, {
        type: L,
        buffer: de,
        byteLength: ye,
        byteOffset: We,
        bytes: Ye.bytes
      }), i || (this.buffer = de, this.byteLength = ye, this.byteOffset = We);
    }, vt = ot[le], i && (Ze($, "byteLength", P), Ze(ot, "buffer", oe), Ze(ot, "byteLength", oe), Ze(ot, "byteOffset", oe)), E(vt, {
      getInt8: function(de) {
        return Je(this, 1, de)[0] << 24 >> 24;
      },
      getUint8: function(de) {
        return Je(this, 1, de)[0];
      },
      getInt16: function(de) {
        var ce = Je(this, 2, de, arguments.length > 1 ? arguments[1] : !1);
        return (ce[1] << 8 | ce[0]) << 16 >> 16;
      },
      getUint16: function(de) {
        var ce = Je(this, 2, de, arguments.length > 1 ? arguments[1] : !1);
        return ce[1] << 8 | ce[0];
      },
      getInt32: function(de) {
        return $e(Je(this, 4, de, arguments.length > 1 ? arguments[1] : !1));
      },
      getUint32: function(de) {
        return $e(Je(this, 4, de, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
      },
      getFloat32: function(de) {
        return De(Je(this, 4, de, arguments.length > 1 ? arguments[1] : !1), 23);
      },
      getFloat64: function(de) {
        return De(Je(this, 8, de, arguments.length > 1 ? arguments[1] : !1), 52);
      },
      setInt8: function(de, ce) {
        _t(this, 1, de, ee, ce);
      },
      setUint8: function(de, ce) {
        _t(this, 1, de, ee, ce);
      },
      setInt16: function(de, ce) {
        _t(this, 2, de, pe, ce, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint16: function(de, ce) {
        _t(this, 2, de, pe, ce, arguments.length > 2 ? arguments[2] : !1);
      },
      setInt32: function(de, ce) {
        _t(this, 4, de, Ne, ce, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint32: function(de, ce) {
        _t(this, 4, de, Ne, ce, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat32: function(de, ce) {
        _t(this, 4, de, Oe, ce, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat64: function(de, ce) {
        _t(this, 8, de, nt, ce, arguments.length > 2 ? arguments[2] : !1);
      }
    });
  else {
    var ft = D && Ce.name !== ve;
    !T(function() {
      Ce(1);
    }) || !T(function() {
      new Ce(-1);
    }) || T(function() {
      return new Ce(), new Ce(1.5), new Ce(NaN), Ce.length !== 1 || ft && !Q;
    }) ? ($ = function(de) {
      return S(this, He), re(new Ce(V(de)), this, $);
    }, $[le] = He, He.constructor = $, se($, Ce)) : ft && Q && b(Ce, "name", ve), G && B(vt) !== Ie && G(vt, Ie);
    var lt = new ot(new $(2)), ze = n(vt.setInt8);
    lt.setInt8(0, 2147483648), lt.setInt8(1, 2147483649), (lt.getInt8(0) || !lt.getInt8(1)) && E(vt, {
      setInt8: function(de, ce) {
        ze(this, de, ce << 24 >> 24);
      },
      setUint8: function(de, ce) {
        ze(this, de, ce << 24 >> 24);
      }
    }, { unsafe: !0 });
  }
  H($, ve), H(ot, L), e.exports = {
    ArrayBuffer: $,
    DataView: ot
  };
})), Vo = /* @__PURE__ */ J(((c, e) => {
  var r = Yr(), n = RangeError;
  e.exports = function(i) {
    var s = r(i);
    if (s < 0) throw new n("The argument can't be less than 0");
    return s;
  };
})), Fs = /* @__PURE__ */ J(((c, e) => {
  var r = Vo(), n = RangeError;
  e.exports = function(i, s) {
    var l = r(i);
    if (l % s) throw new n("Wrong offset");
    return l;
  };
})), Ko = /* @__PURE__ */ J(((c, e) => {
  var r = Math.floor;
  e.exports = function(n) {
    var i = +n;
    if (i !== i || i <= 0) return 0;
    if (i >= 255) return 255;
    var s = r(i);
    return s + 0.5 < i ? s + 1 : i < s + 0.5 || s % 2 === 0 ? s : s + 1;
  };
})), Jo = /* @__PURE__ */ J(((c, e) => {
  var r = hn();
  e.exports = function(n) {
    var i = r(n);
    return i === "BigInt64Array" || i === "BigUint64Array";
  };
})), qs = /* @__PURE__ */ J(((c, e) => {
  var r = li(), n = TypeError;
  e.exports = function(i) {
    var s = r(i, "number");
    if (typeof s == "number") throw new n("Can't convert number to bigint");
    return BigInt(s);
  };
})), Yo = /* @__PURE__ */ J(((c, e) => {
  var r = ln(), n = Vt(), i = Br(), s = vi(), l = br(), b = _r(), h = Wa(), E = pa(), T = Ti(), S = Jo(), j = Qt().aTypedArrayConstructor, V = qs();
  e.exports = function(X) {
    var B = s(this), G = arguments.length, Y = G > 1 ? arguments[1] : void 0, ue = Y !== void 0;
    ue && i(Y);
    var re = l(X), se = E(re), H, U, D, Q, ve, L, le, Re;
    if (se && !T(se))
      for (le = h(re, se), Re = le.next, re = []; !(L = n(Re, le)).done; ) re.push(L.value);
    for (ue && G > 2 && (Y = r(Y, arguments[2])), U = b(re), D = new (j(B))(U), Q = S(D), H = 0; U > H; H++)
      ve = ue ? Y(re[H], H) : re[H], D[H] = Q ? V(ve) : +ve;
    return D;
  };
})), Bs = /* @__PURE__ */ J(((c, e) => {
  var r = _r();
  e.exports = function(n, i, s) {
    for (var l = 0, b = arguments.length > 2 ? s : r(i), h = new n(b); b > l; ) h[l] = i[l++];
    return h;
  };
})), Qo = /* @__PURE__ */ J(((c, e) => {
  var r = $t(), n = Dt(), i = Vt(), s = Yt(), l = qo(), b = Qt(), h = Ds(), E = _n(), T = Sn(), S = un(), j = Ps(), V = Ls(), O = Fs(), X = Ko(), B = Ma(), G = tr(), Y = hn(), ue = Gt(), re = Fn(), se = Xr(), H = sn(), U = Hn(), D = Wn().f, Q = Yo(), ve = Nr().forEach, L = qa(), le = Zr(), Re = Ar(), fe = vn(), P = Bs(), oe = Mr(), Ae = Va(), Ce = oe.get, $ = oe.set, He = oe.enforce, ot = Re.f, vt = fe.f, Ie = n.RangeError, z = h.ArrayBuffer, F = z.prototype, m = h.DataView, he = b.NATIVE_ARRAY_BUFFER_VIEWS, te = b.TYPED_ARRAY_TAG, De = b.TypedArray, ee = b.TypedArrayPrototype, pe = b.isTypedArray, Ne = "BYTES_PER_ELEMENT", $e = "Wrong length", Oe = function(ft, lt) {
    le(ft, lt, {
      configurable: !0,
      get: function() {
        return Ce(this)[lt];
      }
    });
  }, nt = function(ft) {
    var lt;
    return H(F, ft) || (lt = Y(ft)) === "ArrayBuffer" || lt === "SharedArrayBuffer";
  }, Ze = function(ft, lt) {
    return pe(ft) && !re(lt) && lt in ft && j(+lt) && lt >= 0;
  }, Je = function(lt, ze) {
    return ze = B(ze), Ze(lt, ze) ? T(2, lt[ze]) : vt(lt, ze);
  }, _t = function(lt, ze, _e) {
    return ze = B(ze), Ze(lt, ze) && ue(_e) && G(_e, "value") && !G(_e, "get") && !G(_e, "set") && !_e.configurable && (!G(_e, "writable") || _e.writable) && (!G(_e, "enumerable") || _e.enumerable) ? (lt[ze] = _e.value, lt) : ot(lt, ze, _e);
  };
  s ? (he || (fe.f = Je, Re.f = _t, Oe(ee, "buffer"), Oe(ee, "byteOffset"), Oe(ee, "byteLength"), Oe(ee, "length")), r({
    target: "Object",
    stat: !0,
    forced: !he
  }, {
    getOwnPropertyDescriptor: Je,
    defineProperty: _t
  }), e.exports = function(ft, lt, ze) {
    var _e = ft.match(/\d+/)[0] / 8, de = ft + (ze ? "Clamped" : "") + "Array", ce = "get" + ft, ye = "set" + ft, Ye = n[de], Fe = Ye, We = Fe && Fe.prototype, ht = {}, mt = function(qe, ae) {
      var Se = Ce(qe);
      return Se.view[ce](ae * _e + Se.byteOffset, !0);
    }, ct = function(qe, ae, Se) {
      var Te = Ce(qe);
      Te.view[ye](ae * _e + Te.byteOffset, ze ? X(Se) : Se, !0);
    }, Ve = function(qe, ae) {
      ot(qe, ae, {
        get: function() {
          return mt(this, ae);
        },
        set: function(Se) {
          return ct(this, ae, Se);
        },
        enumerable: !0
      });
    };
    he ? l && (Fe = lt(function(qe, ae, Se, Te) {
      return E(qe, We), Ae((function() {
        return ue(ae) ? nt(ae) ? Te !== void 0 ? new Ye(ae, O(Se, _e), Te) : Se !== void 0 ? new Ye(ae, O(Se, _e)) : new Ye(ae) : pe(ae) ? P(Fe, ae) : i(Q, Fe, ae) : new Ye(V(ae));
      })(), qe, Fe);
    }), U && U(Fe, De), ve(D(Ye), function(qe) {
      qe in Fe || S(Fe, qe, Ye[qe]);
    }), Fe.prototype = We) : (Fe = lt(function(qe, ae, Se, Te) {
      E(qe, We);
      var je = 0, be = 0, Qe, tt, gt;
      if (!ue(ae))
        gt = V(ae), tt = gt * _e, Qe = new z(tt);
      else if (nt(ae)) {
        Qe = ae, be = O(Se, _e);
        var Pt = ae.byteLength;
        if (Te === void 0) {
          if (Pt % _e) throw new Ie($e);
          if (tt = Pt - be, tt < 0) throw new Ie($e);
        } else if (tt = V(Te) * _e, tt + be > Pt) throw new Ie($e);
        gt = tt / _e;
      } else return pe(ae) ? P(Fe, ae) : i(Q, Fe, ae);
      for ($(qe, {
        buffer: Qe,
        byteOffset: be,
        byteLength: tt,
        length: gt,
        view: new m(Qe)
      }); je < gt; ) Ve(qe, je++);
    }), U && U(Fe, De), We = Fe.prototype = se(ee)), We.constructor !== Fe && S(We, "constructor", Fe), He(We).TypedArrayConstructor = Fe, te && S(We, te, de);
    var at = Fe !== Ye;
    ht[de] = Fe, r({
      global: !0,
      constructor: !0,
      forced: at,
      sham: !he
    }, ht), Ne in Fe || S(Fe, Ne, _e), Ne in We || S(We, Ne, _e), L(de);
  }) : e.exports = function() {
  };
})), Ws = /* @__PURE__ */ J((() => {
  Qo()("Uint8", function(c) {
    return function(r, n, i) {
      return c(this, r, n, i);
    };
  });
})), zs = /* @__PURE__ */ J((() => {
  var c = Qt(), e = _r(), r = Yr(), n = c.aTypedArray, i = c.exportTypedArrayMethod;
  i("at", function(l) {
    var b = n(this), h = e(b), E = r(l), T = E >= 0 ? E : h + E;
    return T < 0 || T >= h ? void 0 : b[T];
  });
})), qi = /* @__PURE__ */ J(((c, e) => {
  var r = In(), n = TypeError;
  e.exports = function(i, s) {
    if (!delete i[s]) throw new n("Cannot delete property " + r(s) + " of " + r(i));
  };
})), Xo = /* @__PURE__ */ J(((c, e) => {
  var r = br(), n = Rn(), i = _r(), s = qi(), l = Math.min;
  e.exports = [].copyWithin || function(h, E) {
    var T = r(this), S = i(T), j = n(h, S), V = n(E, S), O = arguments.length > 2 ? arguments[2] : void 0, X = l((O === void 0 ? S : n(O, S)) - V, S - j), B = 1;
    for (V < j && j < V + X && (B = -1, V += X - 1, j += X - 1); X-- > 0; )
      V in T ? T[j] = T[V] : s(T, j), j += B, V += B;
    return T;
  };
})), Gs = /* @__PURE__ */ J((() => {
  var c = Ut(), e = Qt(), r = c(Xo()), n = e.aTypedArray, i = e.exportTypedArrayMethod;
  i("copyWithin", function(l, b) {
    return r(n(this), l, b, arguments.length > 2 ? arguments[2] : void 0);
  });
})), Hs = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Nr().every, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("every", function(s) {
    return e(r(this), s, arguments.length > 1 ? arguments[1] : void 0);
  });
})), Vs = /* @__PURE__ */ J((() => {
  var c = Qt(), e = $s(), r = qs(), n = hn(), i = Vt(), s = Ut(), l = Mt(), b = c.aTypedArray, h = c.exportTypedArrayMethod, E = s("".slice);
  h("fill", function(S) {
    var j = arguments.length;
    b(this);
    var V = E(n(this), 0, 3) === "Big" ? r(S) : +S;
    return i(e, this, V, j > 1 ? arguments[1] : void 0, j > 2 ? arguments[2] : void 0);
  }, l(function() {
    var T = 0;
    return (/* @__PURE__ */ new Int8Array(2)).fill({ valueOf: function() {
      return T++;
    } }), T !== 1;
  }));
})), Ks = /* @__PURE__ */ J(((c, e) => {
  var r = Bs(), n = Qt().getTypedArrayConstructor;
  e.exports = function(i, s) {
    return r(n(i), s);
  };
})), Js = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Nr().filter, r = Ks(), n = c.aTypedArray, i = c.exportTypedArrayMethod;
  i("filter", function(l) {
    var b = e(n(this), l, arguments.length > 1 ? arguments[1] : void 0);
    return r(this, b);
  });
})), Ys = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Nr().find, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("find", function(s) {
    return e(r(this), s, arguments.length > 1 ? arguments[1] : void 0);
  });
})), Qs = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Nr().findIndex, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("findIndex", function(s) {
    return e(r(this), s, arguments.length > 1 ? arguments[1] : void 0);
  });
})), Xs = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Nr().forEach, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("forEach", function(s) {
    e(r(this), s, arguments.length > 1 ? arguments[1] : void 0);
  });
})), Zs = /* @__PURE__ */ J((() => {
  var c = Qt(), e = ra().includes, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("includes", function(s) {
    return e(r(this), s, arguments.length > 1 ? arguments[1] : void 0);
  });
})), eu = /* @__PURE__ */ J((() => {
  var c = Qt(), e = ra().indexOf, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("indexOf", function(s) {
    return e(r(this), s, arguments.length > 1 ? arguments[1] : void 0);
  });
})), tu = /* @__PURE__ */ J((() => {
  var c = Dt(), e = Mt(), r = Ut(), n = Qt(), i = cn(), s = Jt()("iterator"), l = c.Uint8Array, b = r(i.values), h = r(i.keys), E = r(i.entries), T = n.aTypedArray, S = n.exportTypedArrayMethod, j = l && l.prototype, V = !e(function() {
    j[s].call([1]);
  }), O = !!j && j.values && j[s] === j.values && j.values.name === "values", X = function() {
    return b(T(this));
  };
  S("entries", function() {
    return E(T(this));
  }, V), S("keys", function() {
    return h(T(this));
  }, V), S("values", X, V || !O, { name: "values" }), S(s, X, V || !O, { name: "values" });
})), ru = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Ut(), r = c.aTypedArray, n = c.exportTypedArrayMethod, i = e([].join);
  n("join", function(l) {
    return i(r(this), l);
  });
})), Zo = /* @__PURE__ */ J(((c, e) => {
  var r = zn(), n = xr(), i = Yr(), s = _r(), l = Fa(), b = Math.min, h = [].lastIndexOf, E = !!h && 1 / [1].lastIndexOf(1, -0) < 0, T = l("lastIndexOf"), S = E || !T;
  e.exports = S ? function(V) {
    if (E) return r(h, this, arguments) || 0;
    var O = n(this), X = s(O);
    if (X === 0) return -1;
    var B = X - 1;
    for (arguments.length > 1 && (B = b(B, i(arguments[1]))), B < 0 && (B = X + B); B >= 0; B--) if (B in O && O[B] === V) return B || 0;
    return -1;
  } : h;
})), nu = /* @__PURE__ */ J((() => {
  var c = Qt(), e = zn(), r = Zo(), n = c.aTypedArray, i = c.exportTypedArrayMethod;
  i("lastIndexOf", function(l) {
    var b = arguments.length;
    return e(r, n(this), b > 1 ? [l, arguments[1]] : [l]);
  });
})), au = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Nr().map, r = Ks(), n = c.aTypedArray, i = c.exportTypedArrayMethod;
  i("map", function(l) {
    var b = e(n(this), l, arguments.length > 1 ? arguments[1] : void 0);
    return r(this, b);
  });
})), iu = /* @__PURE__ */ J(((c, e) => {
  var r = Br(), n = br(), i = Zn(), s = _r(), l = TypeError, b = "Reduce of empty array with no initial value", h = function(E) {
    return function(T, S, j, V) {
      var O = n(T), X = i(O), B = s(O);
      if (r(S), B === 0 && j < 2) throw new l(b);
      var G = E ? B - 1 : 0, Y = E ? -1 : 1;
      if (j < 2) for (; ; ) {
        if (G in X) {
          V = X[G], G += Y;
          break;
        }
        if (G += Y, E ? G < 0 : B <= G) throw new l(b);
      }
      for (; E ? G >= 0 : B > G; G += Y) G in X && (V = S(V, X[G], G, O));
      return V;
    };
  };
  e.exports = {
    left: h(!1),
    right: h(!0)
  };
})), su = /* @__PURE__ */ J((() => {
  var c = Qt(), e = iu().left, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("reduce", function(s) {
    var l = arguments.length;
    return e(r(this), s, l, l > 1 ? arguments[1] : void 0);
  });
})), uu = /* @__PURE__ */ J((() => {
  var c = Qt(), e = iu().right, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("reduceRight", function(s) {
    var l = arguments.length;
    return e(r(this), s, l, l > 1 ? arguments[1] : void 0);
  });
})), ou = /* @__PURE__ */ J((() => {
  var c = Qt(), e = c.aTypedArray, r = c.exportTypedArrayMethod, n = Math.floor;
  r("reverse", function() {
    for (var s = this, l = e(s).length, b = n(l / 2), h = 0, E; h < b; )
      E = s[h], s[h++] = s[--l], s[l] = E;
    return s;
  });
})), lu = /* @__PURE__ */ J((() => {
  var c = Dt(), e = Vt(), r = Qt(), n = _r(), i = Fs(), s = br(), l = Mt(), b = c.RangeError, h = c.Int8Array, E = h && h.prototype, T = E && E.set, S = r.aTypedArray, j = r.exportTypedArrayMethod, V = !l(function() {
    var X = /* @__PURE__ */ new Uint8ClampedArray(2);
    return e(T, X, {
      length: 1,
      0: 3
    }, 1), X[1] !== 3;
  }), O = V && r.NATIVE_ARRAY_BUFFER_VIEWS && l(function() {
    var X = new h(2);
    return X.set(1), X.set("2", 1), X[0] !== 0 || X[1] !== 2;
  });
  j("set", function(B) {
    S(this);
    var G = i(arguments.length > 1 ? arguments[1] : void 0, 1), Y = s(B);
    if (V) return e(T, this, Y, G);
    var ue = this.length, re = n(Y), se = 0;
    if (re + G > ue) throw new b("Wrong length");
    for (; se < re; ) this[G + se] = Y[se++];
  }, !V || O);
})), cu = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Mt(), r = on(), n = c.aTypedArray, i = c.getTypedArrayConstructor, s = c.exportTypedArrayMethod;
  s("slice", function(b, h) {
    for (var E = r(n(this), b, h), T = i(this), S = 0, j = E.length, V = new T(j); j > S; ) V[S] = E[S++];
    return V;
  }, e(function() {
    (/* @__PURE__ */ new Int8Array(1)).slice();
  }));
})), fu = /* @__PURE__ */ J((() => {
  var c = Qt(), e = Nr().some, r = c.aTypedArray, n = c.exportTypedArrayMethod;
  n("some", function(s) {
    return e(r(this), s, arguments.length > 1 ? arguments[1] : void 0);
  });
})), Bi = /* @__PURE__ */ J(((c, e) => {
  var r = on(), n = Math.floor, i = function(s, l) {
    var b = s.length;
    if (b < 8)
      for (var h = 1, E, T; h < b; ) {
        for (T = h, E = s[h]; T && l(s[T - 1], E) > 0; ) s[T] = s[--T];
        T !== h++ && (s[T] = E);
      }
    else
      for (var S = n(b / 2), j = i(r(s, 0, S), l), V = i(r(s, S), l), O = j.length, X = V.length, B = 0, G = 0; B < O || G < X; ) s[B + G] = B < O && G < X ? l(j[B], V[G]) <= 0 ? j[B++] : V[G++] : B < O ? j[B++] : V[G++];
    return s;
  };
  e.exports = i;
})), du = /* @__PURE__ */ J(((c, e) => {
  var r = pn().match(/firefox\/(\d+)/i);
  e.exports = !!r && +r[1];
})), pu = /* @__PURE__ */ J(((c, e) => {
  var r = pn();
  e.exports = /MSIE|Trident/.test(r);
})), vu = /* @__PURE__ */ J(((c, e) => {
  var r = pn().match(/AppleWebKit\/(\d+)\./);
  e.exports = !!r && +r[1];
})), hu = /* @__PURE__ */ J((() => {
  var c = Dt(), e = gi(), r = Mt(), n = Br(), i = Bi(), s = Qt(), l = du(), b = pu(), h = $n(), E = vu(), T = s.aTypedArray, S = s.exportTypedArrayMethod, j = c.Uint16Array, V = j && e(j.prototype.sort), O = !!V && !(r(function() {
    V(new j(2), null);
  }) && r(function() {
    V(new j(2), {});
  })), X = !!V && !r(function() {
    if (h) return h < 74;
    if (l) return l < 67;
    if (b) return !0;
    if (E) return E < 602;
    for (var G = new j(516), Y = Array(516), ue = 0, re; ue < 516; ue++)
      re = ue % 4, G[ue] = 515 - ue, Y[ue] = ue - 2 * re + 3;
    for (V(G, function(se, H) {
      return (se / 4 | 0) - (H / 4 | 0);
    }), ue = 0; ue < 516; ue++) if (G[ue] !== Y[ue]) return !0;
  }), B = function(G) {
    return function(Y, ue) {
      return G !== void 0 ? +G(Y, ue) || 0 : ue !== ue ? Y !== Y ? 0 : -1 : Y !== Y ? 1 : Y === 0 && ue === 0 ? 1 / Y > 0 ? 1 / ue > 0 ? 0 : 1 : 1 / ue > 0 ? -1 : 0 : Y > ue ? 1 : Y < ue ? -1 : 0;
    };
  };
  S("sort", function(Y) {
    return Y !== void 0 && n(Y), X ? V(this, Y) : i(T(this), B(Y));
  }, !X || O);
})), yu = /* @__PURE__ */ J((() => {
  var c = Qt(), e = En(), r = Rn(), n = c.aTypedArray, i = c.getTypedArrayConstructor, s = c.exportTypedArrayMethod;
  s("subarray", function(b, h) {
    var E = n(this), T = E.length, S = r(b, T);
    return new (i(E))(E.buffer, E.byteOffset + S * E.BYTES_PER_ELEMENT, e((h === void 0 ? T : r(h, T)) - S));
  });
})), gu = /* @__PURE__ */ J((() => {
  var c = Dt(), e = zn(), r = Qt(), n = Mt(), i = on(), s = c.Int8Array, l = r.aTypedArray, b = r.exportTypedArrayMethod, h = [].toLocaleString, E = !!s && n(function() {
    h.call(new s(1));
  });
  b("toLocaleString", function() {
    return e(h, E ? i(l(this)) : l(this), i(arguments));
  }, n(function() {
    return [1, 2].toLocaleString() !== new s([1, 2]).toLocaleString();
  }) || !n(function() {
    s.prototype.toLocaleString.call([1, 2]);
  }));
})), mu = /* @__PURE__ */ J((() => {
  var c = Qt().exportTypedArrayMethod, e = Mt(), r = Dt(), n = Ut(), i = r.Uint8Array, s = i && i.prototype || {}, l = [].toString, b = n([].join);
  e(function() {
    l.call({});
  }) && (l = function() {
    return b(this);
  });
  var h = s.toString !== l;
  c("toString", l, h);
})), bu = /* @__PURE__ */ J((() => {
  var c = Vt(), e = Ut(), r = Ja(), n = cr(), i = Gt(), s = Hr(), l = fs(), b = Mi(), h = En(), E = hr(), T = Tn(), S = Ya(), j = Qa(), V = Es(), O = Mt(), X = V.UNSUPPORTED_Y, B = 4294967295, G = Math.min, Y = e([].push), ue = e("".slice), re = e("".indexOf), se = !O(function() {
    var U = /(?:)/, D = U.exec;
    U.exec = function() {
      return D.apply(this, arguments);
    };
    var Q = "ab".split(U);
    return Q.length !== 2 || Q[0] !== "a" || Q[1] !== "b";
  }), H = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
  r("split", function(U, D, Q) {
    var ve = "0".split(void 0, 0).length ? function(L, le) {
      return L === void 0 && le === 0 ? [] : c(D, this, L, le);
    } : D;
    return [function(le, Re) {
      var fe = s(this), P = i(le) ? T(le, U) : void 0;
      return P ? c(P, le, fe, Re) : c(ve, E(fe), le, Re);
    }, function(L, le) {
      var Re = n(this), fe = E(L);
      if (!H) {
        var P = Q(ve, Re, fe, le, ve !== D);
        if (P.done) return P.value;
      }
      var oe = l(Re, RegExp), Ae = E(S(Re)), Ce = !!~re(Ae, "u") || !!~re(Ae, "v");
      X ? ~re(Ae, "g") || (Ae += "g") : ~re(Ae, "y") || (Ae += "y");
      var $ = new oe(X ? "^(?:" + Re.source + ")" : Re, Ae), He = le === void 0 ? B : le >>> 0;
      if (He === 0) return [];
      if (fe.length === 0) return j($, fe) === null ? [fe] : [];
      for (var ot = 0, vt = 0, Ie = []; vt < fe.length; ) {
        $.lastIndex = X ? 0 : vt;
        var z = j($, X ? ue(fe, vt) : fe), F;
        if (z === null || (F = G(h($.lastIndex + (X ? vt : 0)), fe.length)) === ot) vt = b(fe, vt, Ce);
        else {
          if (Y(Ie, ue(fe, ot, vt)), Ie.length === He) return Ie;
          for (var m = 1; m <= z.length - 1; m++)
            if (Y(Ie, z[m]), Ie.length === He) return Ie;
          vt = ot = F;
        }
      }
      return Y(Ie, ue(fe, ot)), Ie;
    }];
  }, H || !se, X);
})), el = /* @__PURE__ */ J(((c, e) => {
  function r(n) {
    try {
      return Function.toString.call(n).indexOf("[native code]") !== -1;
    } catch {
      return typeof n == "function";
    }
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), tl = /* @__PURE__ */ J(((c, e) => {
  function r() {
    try {
      var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (e.exports = r = function() {
      return !!n;
    }, e.exports.__esModule = !0, e.exports.default = e.exports)();
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})), rl = /* @__PURE__ */ J(((c, e) => {
  var r = tl(), n = wi();
  function i(s, l, b) {
    if (r()) return Reflect.construct.apply(null, arguments);
    var h = [null];
    h.push.apply(h, l);
    var E = new (s.bind.apply(s, h))();
    return b && n(E, b.prototype), E;
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
})), ai = /* @__PURE__ */ J(((c, e) => {
  var r = tn(), n = wi(), i = el(), s = rl();
  function l(b) {
    var h = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return e.exports = l = function(T) {
      if (T === null || !i(T)) return T;
      if (typeof T != "function") throw new TypeError("Super expression must either be null or a function");
      if (h !== void 0) {
        if (h.has(T)) return h.get(T);
        h.set(T, S);
      }
      function S() {
        return s(T, arguments, r(this).constructor);
      }
      return S.prototype = Object.create(T.prototype, { constructor: {
        value: S,
        enumerable: !1,
        writable: !0,
        configurable: !0
      } }), n(S, T);
    }, e.exports.__esModule = !0, e.exports.default = e.exports, l(b);
  }
  e.exports = l, e.exports.__esModule = !0, e.exports.default = e.exports;
})), _u = /* @__PURE__ */ J(((c, e) => {
  (function() {
    "use strict";
    var r = {
      function: !0,
      object: !0
    }, n = r[typeof window] && window || this, i = r[typeof c] && c, s = r[typeof e] && e && !e.nodeType && e, l = i && s && typeof global == "object" && global;
    l && (l.global === l || l.window === l || l.self === l) && (n = l);
    var b = Math.pow(2, 53) - 1, h = /\bOpera/, E = Object.prototype, T = E.hasOwnProperty, S = E.toString;
    function j(D) {
      return D = String(D), D.charAt(0).toUpperCase() + D.slice(1);
    }
    function V(D, Q, ve) {
      var L = {
        "10.0": "10",
        "6.4": "10 Technical Preview",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "Server 2008 R2 / 7",
        "6.0": "Server 2008 / Vista",
        "5.2": "Server 2003 / XP 64-bit",
        "5.1": "XP",
        "5.01": "2000 SP1",
        "5.0": "2000",
        "4.0": "NT",
        "4.90": "ME"
      };
      return Q && ve && /^Win/i.test(D) && !/^Windows Phone /i.test(D) && (L = L[/[\d.]+$/.exec(D)]) && (D = "Windows " + L), D = String(D), Q && ve && (D = D.replace(RegExp(Q, "i"), ve)), D = X(D.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]), D;
    }
    function O(D, Q) {
      var ve = -1, L = D ? D.length : 0;
      if (typeof L == "number" && L > -1 && L <= b) for (; ++ve < L; ) Q(D[ve], ve, D);
      else B(D, Q);
    }
    function X(D) {
      return D = se(D), /^(?:webOS|i(?:OS|P))/.test(D) ? D : j(D);
    }
    function B(D, Q) {
      for (var ve in D) T.call(D, ve) && Q(D[ve], ve, D);
    }
    function G(D) {
      return D == null ? j(D) : S.call(D).slice(8, -1);
    }
    function Y(D, Q) {
      var ve = D != null ? typeof D[Q] : "number";
      return !/^(?:boolean|number|string|undefined)$/.test(ve) && (ve == "object" ? !!D[Q] : !0);
    }
    function ue(D) {
      return String(D).replace(/([ -])(?!$)/g, "$1?");
    }
    function re(D, Q) {
      var ve = null;
      return O(D, function(L, le) {
        ve = Q(ve, L, le, D);
      }), ve;
    }
    function se(D) {
      return String(D).replace(/^ +| +$/g, "");
    }
    function H(D) {
      var Q = n, ve = D && typeof D == "object" && G(D) != "String";
      ve && (Q = D, D = null);
      var L = Q.navigator || {}, le = L.userAgent || "";
      D || (D = le);
      var Re = ve ? !!L.likeChrome : /\bChrome\b/.test(D) && !/internal|\n/i.test(S.toString()), fe = "Object", P = ve ? fe : "ScriptBridgingProxyObject", oe = ve ? fe : "Environment", Ae = ve && Q.java ? "JavaPackage" : G(Q.java), Ce = ve ? fe : "RuntimeObject", $ = /\bJava/.test(Ae) && Q.java, He = $ && G(Q.environment) == oe, ot = $ ? "a" : "α", vt = $ ? "b" : "β", Ie = Q.document || {}, z = Q.operamini || Q.opera, F = h.test(F = ve && z ? z["[[Class]]"] : G(z)) ? F : z = null, m, he = D, te = [], De = null, ee = D == le, pe = ee && z && typeof z.version == "function" && z.version(), Ne, $e = _t([
        {
          label: "EdgeHTML",
          pattern: "Edge"
        },
        "Trident",
        {
          label: "WebKit",
          pattern: "AppleWebKit"
        },
        "iCab",
        "Presto",
        "NetFront",
        "Tasman",
        "KHTML",
        "Gecko"
      ]), Oe = lt([
        "Adobe AIR",
        "Arora",
        "Avant Browser",
        "Breach",
        "Camino",
        "Electron",
        "Epiphany",
        "Fennec",
        "Flock",
        "Galeon",
        "GreenBrowser",
        "iCab",
        "Iceweasel",
        "K-Meleon",
        "Konqueror",
        "Lunascape",
        "Maxthon",
        {
          label: "Microsoft Edge",
          pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
        },
        "Midori",
        "Nook Browser",
        "PaleMoon",
        "PhantomJS",
        "Raven",
        "Rekonq",
        "RockMelt",
        {
          label: "Samsung Internet",
          pattern: "SamsungBrowser"
        },
        "SeaMonkey",
        {
          label: "Silk",
          pattern: "(?:Cloud9|Silk-Accelerated)"
        },
        "Sleipnir",
        "SlimBrowser",
        {
          label: "SRWare Iron",
          pattern: "Iron"
        },
        "Sunrise",
        "Swiftfox",
        "Vivaldi",
        "Waterfox",
        "WebPositive",
        {
          label: "Yandex Browser",
          pattern: "YaBrowser"
        },
        {
          label: "UC Browser",
          pattern: "UCBrowser"
        },
        "Opera Mini",
        {
          label: "Opera Mini",
          pattern: "OPiOS"
        },
        "Opera",
        {
          label: "Opera",
          pattern: "OPR"
        },
        "Chromium",
        "Chrome",
        {
          label: "Chrome",
          pattern: "(?:HeadlessChrome)"
        },
        {
          label: "Chrome Mobile",
          pattern: "(?:CriOS|CrMo)"
        },
        {
          label: "Firefox",
          pattern: "(?:Firefox|Minefield)"
        },
        {
          label: "Firefox for iOS",
          pattern: "FxiOS"
        },
        {
          label: "IE",
          pattern: "IEMobile"
        },
        {
          label: "IE",
          pattern: "MSIE"
        },
        "Safari"
      ]), nt = _e([
        {
          label: "BlackBerry",
          pattern: "BB10"
        },
        "BlackBerry",
        {
          label: "Galaxy S",
          pattern: "GT-I9000"
        },
        {
          label: "Galaxy S2",
          pattern: "GT-I9100"
        },
        {
          label: "Galaxy S3",
          pattern: "GT-I9300"
        },
        {
          label: "Galaxy S4",
          pattern: "GT-I9500"
        },
        {
          label: "Galaxy S5",
          pattern: "SM-G900"
        },
        {
          label: "Galaxy S6",
          pattern: "SM-G920"
        },
        {
          label: "Galaxy S6 Edge",
          pattern: "SM-G925"
        },
        {
          label: "Galaxy S7",
          pattern: "SM-G930"
        },
        {
          label: "Galaxy S7 Edge",
          pattern: "SM-G935"
        },
        "Google TV",
        "Lumia",
        "iPad",
        "iPod",
        "iPhone",
        "Kindle",
        {
          label: "Kindle Fire",
          pattern: "(?:Cloud9|Silk-Accelerated)"
        },
        "Nexus",
        "Nook",
        "PlayBook",
        "PlayStation Vita",
        "PlayStation",
        "TouchPad",
        "Transformer",
        {
          label: "Wii U",
          pattern: "WiiU"
        },
        "Wii",
        "Xbox One",
        {
          label: "Xbox 360",
          pattern: "Xbox"
        },
        "Xoom"
      ]), Ze = ft({
        Apple: {
          iPad: 1,
          iPhone: 1,
          iPod: 1
        },
        Alcatel: {},
        Archos: {},
        Amazon: {
          Kindle: 1,
          "Kindle Fire": 1
        },
        Asus: { Transformer: 1 },
        "Barnes & Noble": { Nook: 1 },
        BlackBerry: { PlayBook: 1 },
        Google: {
          "Google TV": 1,
          Nexus: 1
        },
        HP: { TouchPad: 1 },
        HTC: {},
        Huawei: {},
        Lenovo: {},
        LG: {},
        Microsoft: {
          Xbox: 1,
          "Xbox One": 1
        },
        Motorola: { Xoom: 1 },
        Nintendo: {
          "Wii U": 1,
          Wii: 1
        },
        Nokia: { Lumia: 1 },
        Oppo: {},
        Samsung: {
          "Galaxy S": 1,
          "Galaxy S2": 1,
          "Galaxy S3": 1,
          "Galaxy S4": 1
        },
        Sony: {
          PlayStation: 1,
          "PlayStation Vita": 1
        },
        Xiaomi: {
          Mi: 1,
          Redmi: 1
        }
      }), Je = ze([
        "Windows Phone",
        "KaiOS",
        "Android",
        "CentOS",
        {
          label: "Chrome OS",
          pattern: "CrOS"
        },
        "Debian",
        {
          label: "DragonFly BSD",
          pattern: "DragonFly"
        },
        "Fedora",
        "FreeBSD",
        "Gentoo",
        "Haiku",
        "Kubuntu",
        "Linux Mint",
        "OpenBSD",
        "Red Hat",
        "SuSE",
        "Ubuntu",
        "Xubuntu",
        "Cygwin",
        "Symbian OS",
        "hpwOS",
        "webOS ",
        "webOS",
        "Tablet OS",
        "Tizen",
        "Linux",
        "Mac OS X",
        "Macintosh",
        "Mac",
        "Windows 98;",
        "Windows "
      ]);
      function _t(Ye) {
        return re(Ye, function(Fe, We) {
          return Fe || RegExp("\\b" + (We.pattern || ue(We)) + "\\b", "i").exec(D) && (We.label || We);
        });
      }
      function ft(Ye) {
        return re(Ye, function(Fe, We, ht) {
          return Fe || (We[nt] || We[/^[a-z]+(?: +[a-z]+\b)*/i.exec(nt)] || RegExp("\\b" + ue(ht) + "(?:\\b|\\w*\\d)", "i").exec(D)) && ht;
        });
      }
      function lt(Ye) {
        return re(Ye, function(Fe, We) {
          return Fe || RegExp("\\b" + (We.pattern || ue(We)) + "\\b", "i").exec(D) && (We.label || We);
        });
      }
      function ze(Ye) {
        return re(Ye, function(Fe, We) {
          var ht = We.pattern || ue(We);
          return !Fe && (Fe = RegExp("\\b" + ht + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(D)) && (Fe = V(Fe, ht, We.label || We)), Fe;
        });
      }
      function _e(Ye) {
        return re(Ye, function(Fe, We) {
          var ht = We.pattern || ue(We);
          return !Fe && (Fe = RegExp("\\b" + ht + " *\\d+[.\\w_]*", "i").exec(D) || RegExp("\\b" + ht + " *\\w+-[\\w]*", "i").exec(D) || RegExp("\\b" + ht + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(D)) && ((Fe = String(We.label && !RegExp(ht, "i").test(We.label) ? We.label : Fe).split("/"))[1] && !/[\d.]+/.test(Fe[0]) && (Fe[0] += " " + Fe[1]), We = We.label || We, Fe = X(Fe[0].replace(RegExp(ht, "i"), We).replace(RegExp("; *(?:" + We + "[_-])?", "i"), " ").replace(RegExp("(" + We + ")[-_.]?(\\w)", "i"), "$1 $2"))), Fe;
        });
      }
      function de(Ye) {
        return re(Ye, function(Fe, We) {
          return Fe || (RegExp(We + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(D) || 0)[1] || null;
        });
      }
      function ce() {
        return this.description || "";
      }
      if ($e && ($e = [$e]), /\bAndroid\b/.test(Je) && !nt && (m = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(D)) && (nt = se(m[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), Ze && !nt ? nt = _e([Ze]) : Ze && nt && (nt = nt.replace(RegExp("^(" + ue(Ze) + ")[-_.\\s]", "i"), Ze + " ").replace(RegExp("^(" + ue(Ze) + ")[-_.]?(\\w)", "i"), Ze + " $2")), (m = /\bGoogle TV\b/.exec(nt)) && (nt = m[0]), /\bSimulator\b/i.test(D) && (nt = (nt ? nt + " " : "") + "Simulator"), Oe == "Opera Mini" && /\bOPiOS\b/.test(D) && te.push("running in Turbo/Uncompressed mode"), Oe == "IE" && /\blike iPhone OS\b/.test(D) ? (m = H(D.replace(/like iPhone OS/, "")), Ze = m.manufacturer, nt = m.product) : /^iP/.test(nt) ? (Oe || (Oe = "Safari"), Je = "iOS" + ((m = / OS ([\d_]+)/i.exec(D)) ? " " + m[1].replace(/_/g, ".") : "")) : Oe == "Konqueror" && /^Linux\b/i.test(Je) ? Je = "Kubuntu" : Ze && Ze != "Google" && (/Chrome/.test(Oe) && !/\bMobile Safari\b/i.test(D) || /\bVita\b/.test(nt)) || /\bAndroid\b/.test(Je) && /^Chrome/.test(Oe) && /\bVersion\//i.test(D) ? (Oe = "Android Browser", Je = /\bAndroid\b/.test(Je) ? Je : "Android") : Oe == "Silk" ? (/\bMobi/i.test(D) || (Je = "Android", te.unshift("desktop mode")), /Accelerated *= *true/i.test(D) && te.unshift("accelerated")) : Oe == "UC Browser" && /\bUCWEB\b/.test(D) ? te.push("speed mode") : Oe == "PaleMoon" && (m = /\bFirefox\/([\d.]+)\b/.exec(D)) ? te.push("identifying as Firefox " + m[1]) : Oe == "Firefox" && (m = /\b(Mobile|Tablet|TV)\b/i.exec(D)) ? (Je || (Je = "Firefox OS"), nt || (nt = m[1])) : !Oe || (m = !/\bMinefield\b/i.test(D) && /\b(?:Firefox|Safari)\b/.exec(Oe)) ? (Oe && !nt && /[\/,]|^[^(]+?\)/.test(D.slice(D.indexOf(m + "/") + 8)) && (Oe = null), (m = nt || Ze || Je) && (nt || Ze || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Je)) && (Oe = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Je) ? Je : m) + " Browser")) : Oe == "Electron" && (m = (/\bChrome\/([\d.]+)\b/.exec(D) || 0)[1]) && te.push("Chromium " + m), pe || (pe = de([
        "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
        "Version",
        ue(Oe),
        "(?:Firefox|Minefield|NetFront)"
      ])), (m = $e == "iCab" && parseFloat(pe) > 3 && "WebKit" || /\bOpera\b/.test(Oe) && (/\bOPR\b/.test(D) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(D) && !/^(?:Trident|EdgeHTML)$/.test($e) && "WebKit" || !$e && /\bMSIE\b/i.test(D) && (Je == "Mac OS" ? "Tasman" : "Trident") || $e == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(Oe) && "NetFront") && ($e = [m]), Oe == "IE" && (m = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(D) || 0)[1]) ? (Oe += " Mobile", Je = "Windows Phone " + (/\+$/.test(m) ? m : m + ".x"), te.unshift("desktop mode")) : /\bWPDesktop\b/i.test(D) ? (Oe = "IE Mobile", Je = "Windows Phone 8.x", te.unshift("desktop mode"), pe || (pe = (/\brv:([\d.]+)/.exec(D) || 0)[1])) : Oe != "IE" && $e == "Trident" && (m = /\brv:([\d.]+)/.exec(D)) && (Oe && te.push("identifying as " + Oe + (pe ? " " + pe : "")), Oe = "IE", pe = m[1]), ee) {
        if (Y(Q, "global"))
          if ($ && (m = $.lang.System, he = m.getProperty("os.arch"), Je = Je || m.getProperty("os.name") + " " + m.getProperty("os.version")), He) {
            try {
              pe = Q.require("ringo/engine").version.join("."), Oe = "RingoJS";
            } catch {
              (m = Q.system) && m.global.system == Q.system && (Oe = "Narwhal", Je || (Je = m[0].os || null));
            }
            Oe || (Oe = "Rhino");
          } else typeof Q.process == "object" && !Q.process.browser && (m = Q.process) && (typeof m.versions == "object" && (typeof m.versions.electron == "string" ? (te.push("Node " + m.versions.node), Oe = "Electron", pe = m.versions.electron) : typeof m.versions.nw == "string" && (te.push("Chromium " + pe, "Node " + m.versions.node), Oe = "NW.js", pe = m.versions.nw)), Oe || (Oe = "Node.js", he = m.arch, Je = m.platform, pe = /[\d.]+/.exec(m.version), pe = pe ? pe[0] : null));
        else G(m = Q.runtime) == P ? (Oe = "Adobe AIR", Je = m.flash.system.Capabilities.os) : G(m = Q.phantom) == Ce ? (Oe = "PhantomJS", pe = (m = m.version || null) && m.major + "." + m.minor + "." + m.patch) : typeof Ie.documentMode == "number" && (m = /\bTrident\/(\d+)/i.exec(D)) ? (pe = [pe, Ie.documentMode], (m = +m[1] + 4) != pe[1] && (te.push("IE " + pe[1] + " mode"), $e && ($e[1] = ""), pe[1] = m), pe = Oe == "IE" ? String(pe[1].toFixed(1)) : pe[0]) : typeof Ie.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(Oe) && (te.push("masking as " + Oe + " " + pe), Oe = "IE", pe = "11.0", $e = ["Trident"], Je = "Windows");
        Je = Je && X(Je);
      }
      if (pe && (m = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(pe) || /(?:alpha|beta)(?: ?\d)?/i.exec(D + ";" + (ee && L.appMinorVersion)) || /\bMinefield\b/i.test(D) && "a") && (De = /b/i.test(m) ? "beta" : "alpha", pe = pe.replace(RegExp(m + "\\+?$"), "") + (De == "beta" ? vt : ot) + (/\d+\+?/.exec(m) || "")), Oe == "Fennec" || Oe == "Firefox" && /\b(?:Android|Firefox OS|KaiOS)\b/.test(Je)) Oe = "Firefox Mobile";
      else if (Oe == "Maxthon" && pe) pe = pe.replace(/\.[\d.]+/, ".x");
      else if (/\bXbox\b/i.test(nt))
        nt == "Xbox 360" && (Je = null), nt == "Xbox 360" && /\bIEMobile\b/.test(D) && te.unshift("mobile mode");
      else if ((/^(?:Chrome|IE|Opera)$/.test(Oe) || Oe && !nt && !/Browser|Mobi/.test(Oe)) && (Je == "Windows CE" || /Mobi/i.test(D))) Oe += " Mobile";
      else if (Oe == "IE" && ee) try {
        Q.external === null && te.unshift("platform preview");
      } catch {
        te.unshift("embedded");
      }
      else (/\bBlackBerry\b/.test(nt) || /\bBB10\b/.test(D)) && (m = (RegExp(nt.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(D) || 0)[1] || pe) ? (m = [m, /BB10/.test(D)], Je = (m[1] ? (nt = null, Ze = "BlackBerry") : "Device Software") + " " + m[0], pe = null) : this != B && nt != "Wii" && (ee && z || /Opera/.test(Oe) && /\b(?:MSIE|Firefox)\b/i.test(D) || Oe == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(Je) || Oe == "IE" && (Je && !/^Win/.test(Je) && pe > 5.5 || /\bWindows XP\b/.test(Je) && pe > 8 || pe == 8 && !/\bTrident\b/.test(D))) && !h.test(m = H.call(B, D.replace(h, "") + ";")) && m.name && (m = "ing as " + m.name + ((m = m.version) ? " " + m : ""), h.test(Oe) ? (/\bIE\b/.test(m) && Je == "Mac OS" && (Je = null), m = "identify" + m) : (m = "mask" + m, F ? Oe = X(F.replace(/([a-z])([A-Z])/g, "$1 $2")) : Oe = "Opera", /\bIE\b/.test(m) && (Je = null), ee || (pe = null)), $e = ["Presto"], te.push(m));
      (m = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(D) || 0)[1]) && (m = [parseFloat(m.replace(/\.(\d)$/, ".0$1")), m], Oe == "Safari" && m[1].slice(-1) == "+" ? (Oe = "WebKit Nightly", De = "alpha", pe = m[1].slice(0, -1)) : (pe == m[1] || pe == (m[2] = (/\bSafari\/([\d.]+\+?)/i.exec(D) || 0)[1])) && (pe = null), m[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(D) || 0)[1], m[0] == 537.36 && m[2] == 537.36 && parseFloat(m[1]) >= 28 && $e == "WebKit" && ($e = ["Blink"]), !ee || !Re && !m[1] ? ($e && ($e[1] = "like Safari"), m = (m = m[0], m < 400 ? 1 : m < 500 ? 2 : m < 526 ? 3 : m < 533 ? 4 : m < 534 ? "4+" : m < 535 ? 5 : m < 537 ? 6 : m < 538 ? 7 : m < 601 ? 8 : m < 602 ? 9 : m < 604 ? 10 : m < 606 ? 11 : m < 608 ? 12 : "12")) : ($e && ($e[1] = "like Chrome"), m = m[1] || (m = m[0], m < 530 ? 1 : m < 532 ? 2 : m < 532.05 ? 3 : m < 533 ? 4 : m < 534.03 ? 5 : m < 534.07 ? 6 : m < 534.1 ? 7 : m < 534.13 ? 8 : m < 534.16 ? 9 : m < 534.24 ? 10 : m < 534.3 ? 11 : m < 535.01 ? 12 : m < 535.02 ? "13+" : m < 535.07 ? 15 : m < 535.11 ? 16 : m < 535.19 ? 17 : m < 536.05 ? 18 : m < 536.1 ? 19 : m < 537.01 ? 20 : m < 537.11 ? "21+" : m < 537.13 ? 23 : m < 537.18 ? 24 : m < 537.24 ? 25 : m < 537.36 ? 26 : $e != "Blink" ? "27" : "28")), $e && ($e[1] += " " + (m += typeof m == "number" ? ".x" : /[.+]/.test(m) ? "" : "+")), Oe == "Safari" && (!pe || parseInt(pe) > 45) ? pe = m : Oe == "Chrome" && /\bHeadlessChrome/i.test(D) && te.unshift("headless")), Oe == "Opera" && (m = /\bzbov|zvav$/.exec(Je)) ? (Oe += " ", te.unshift("desktop mode"), m == "zvav" ? (Oe += "Mini", pe = null) : Oe += "Mobile", Je = Je.replace(RegExp(" *" + m + "$"), "")) : Oe == "Safari" && /\bChrome\b/.exec($e && $e[1]) ? (te.unshift("desktop mode"), Oe = "Chrome Mobile", pe = null, /\bOS X\b/.test(Je) ? (Ze = "Apple", Je = "iOS 4.3+") : Je = null) : /\bSRWare Iron\b/.test(Oe) && !pe && (pe = de("Chrome")), pe && pe.indexOf(m = /[\d.]+$/.exec(Je)) == 0 && D.indexOf("/" + m + "-") > -1 && (Je = se(Je.replace(m, ""))), Je && Je.indexOf(Oe) != -1 && !RegExp(Oe + " OS").test(Je) && (Je = Je.replace(RegExp(" *" + ue(Oe) + " *"), "")), $e && !/\b(?:Avant|Nook)\b/.test(Oe) && (/Browser|Lunascape|Maxthon/.test(Oe) || Oe != "Safari" && /^iOS/.test(Je) && /\bSafari\b/.test($e[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(Oe) && $e[1]) && (m = $e[$e.length - 1]) && te.push(m), te.length && (te = ["(" + te.join("; ") + ")"]), Ze && nt && nt.indexOf(Ze) < 0 && te.push("on " + Ze), nt && te.push((/^on /.test(te[te.length - 1]) ? "" : "on ") + nt), Je && (m = / ([\d.+]+)$/.exec(Je), Ne = m && Je.charAt(Je.length - m[0].length - 1) == "/", Je = {
        architecture: 32,
        family: m && !Ne ? Je.replace(m[0], "") : Je,
        version: m ? m[1] : null,
        toString: function() {
          var Ye = this.version;
          return this.family + (Ye && !Ne ? " " + Ye : "") + (this.architecture == 64 ? " 64-bit" : "");
        }
      }), (m = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(he)) && !/\bi686\b/i.test(he) ? (Je && (Je.architecture = 64, Je.family = Je.family.replace(RegExp(" *" + m), "")), Oe && (/\bWOW64\b/i.test(D) || ee && /\w(?:86|32)$/.test(L.cpuClass || L.platform) && !/\bWin64; x64\b/i.test(D)) && te.unshift("32-bit")) : Je && /^OS X/.test(Je.family) && Oe == "Chrome" && parseFloat(pe) >= 39 && (Je.architecture = 64), D || (D = null);
      var ye = {};
      return ye.description = D, ye.layout = $e && $e[0], ye.manufacturer = Ze, ye.name = Oe, ye.prerelease = De, ye.product = nt, ye.ua = D, ye.version = Oe && pe, ye.os = Je || {
        architecture: null,
        family: null,
        version: null,
        toString: function() {
          return "null";
        }
      }, ye.parse = H, ye.toString = ce, ye.version && te.unshift(pe), ye.name && te.unshift(Oe), Je && Oe && !(Je == String(Je).split(" ")[0] && (Je == Oe.split(" ")[0] || nt)) && te.push(nt ? "(" + Je + ")" : "on " + Je), te.length && (ye.description = te.join(" ")), ye;
    }
    var U = H();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (n.platform = U, define(function() {
      return U;
    })) : i && s ? B(U, function(D, Q) {
      i[Q] = D;
    }) : n.platform = U;
  }).call(c);
})), wu = /* @__PURE__ */ J((() => {
  var c = Vt(), e = Ut(), r = Ja(), n = cr(), i = Gt(), s = En(), l = hr(), b = Hr(), h = Tn(), E = Mi(), T = Ya(), S = Qa(), j = e("".indexOf);
  r("match", function(V, O, X) {
    return [function(G) {
      var Y = b(this), ue = i(G) ? h(G, V) : void 0;
      if (ue) return c(ue, G, Y);
      var re = l(Y);
      return new RegExp(G)[V](re);
    }, function(B) {
      var G = n(this), Y = l(B), ue = X(O, G, Y);
      if (ue.done) return ue.value;
      var re = l(T(G));
      if (!~j(re, "g")) return S(G, Y);
      var se = !!~j(re, "u") || !!~j(re, "v");
      G.lastIndex = 0;
      for (var H = [], U = 0, D; (D = S(G, Y)) !== null; ) {
        var Q = l(D[0]);
        H[U] = Q, Q === "" && (G.lastIndex = E(Y, s(G.lastIndex), se)), U++;
      }
      return U === 0 ? null : H;
    }];
  });
})), nl = /* @__PURE__ */ J(((c, e) => {
  e.exports = Object.is || function(n, i) {
    return n === i ? n !== 0 || 1 / n === 1 / i : n !== n && i !== i;
  };
})), al = /* @__PURE__ */ J((() => {
  var c = Vt(), e = Ja(), r = cr(), n = Gt(), i = Hr(), s = nl(), l = hr(), b = Tn(), h = Qa();
  e("search", function(E, T, S) {
    return [function(V) {
      var O = i(this), X = n(V) ? b(V, E) : void 0;
      if (X) return c(X, V, O);
      var B = l(O);
      return new RegExp(V)[E](B);
    }, function(j) {
      var V = r(this), O = l(j), X = S(T, V, O);
      if (X.done) return X.value;
      var B = V.lastIndex;
      s(B, 0) || (V.lastIndex = 0);
      var G = h(V, O);
      return s(V.lastIndex, B) || (V.lastIndex = B), G === null ? -1 : G.index;
    }];
  });
})), Su = /* @__PURE__ */ J((() => {
  var c = $t(), e = br(), r = Rn(), n = Yr(), i = _r(), s = Ga(), l = Ei(), b = mi(), h = Gn(), E = qi(), T = sa()("splice"), S = Math.max, j = Math.min;
  c({
    target: "Array",
    proto: !0,
    forced: !T
  }, { splice: function(O, X) {
    var B = e(this), G = i(B), Y = r(O, G), ue = arguments.length, re, se, H, U, D, Q;
    for (ue === 0 ? re = se = 0 : ue === 1 ? (re = 0, se = G - Y) : (re = ue - 2, se = j(S(n(X), 0), G - Y)), l(G + re - se), H = b(B, se), U = 0; U < se; U++)
      D = Y + U, D in B && h(H, U, B[D]);
    if (s(H, se), re < se) {
      for (U = Y; U < G - se; U++)
        D = U + se, Q = U + re, D in B ? B[Q] = B[D] : E(B, Q);
      for (U = G; U > G - se + re; U--) E(B, U - 1);
    } else if (re > se) for (U = G - se; U > Y; U--)
      D = U + se - 1, Q = U + re - 1, D in B ? B[Q] = B[D] : E(B, Q);
    for (U = 0; U < re; U++) B[U + Y] = arguments[U + 2];
    return s(B, G - se + re), H;
  } });
})), Wi = /* @__PURE__ */ J(((c) => {
  var e = typeof e < "u" ? e : typeof self < "u" ? self : typeof window < "u" ? window : {};
  Object.defineProperty(c, "__esModule", { value: !0 }), Cn(), On();
  var r = oa(), n = Pn(), i = Li(), s = yn(), l = gn(), b = tn(), h = mn(), E = bn(), T = An(), S = ha();
  xn(), Mn(), js(), ga(), Da(), ia();
  var j = en(), V = ba();
  Vn(), jn();
  var O = Kn();
  cn(), Fi(), Jn(), $a(), ti(), Nn();
  var X = Fo();
  Un(), Xa(), Ka(), Ws(), zs(), Gs(), Hs(), Vs(), Js(), Ys(), Qs(), Xs(), Zs(), eu(), tu(), ru(), nu(), au(), su(), uu(), ou(), lu(), cu(), fu(), hu(), yu(), gu(), mu(), bu();
  var B = ai();
  hi(), ua(), bi(), la(), _i();
  var G = wa(), Y = $i();
  _a();
  var ue = _u();
  wu(), al(), Su();
  function re(we) {
    return we && typeof we == "object" && "default" in we ? we : { default: we };
  }
  function se(we) {
    if (we && we.__esModule) return we;
    var Pe = /* @__PURE__ */ Object.create(null);
    return we && Object.keys(we).forEach(function(Z) {
      if (Z !== "default") {
        var K = Object.getOwnPropertyDescriptor(we, Z);
        Object.defineProperty(Pe, Z, K.get ? K : {
          enumerable: !0,
          get: function() {
            return we[Z];
          }
        });
      }
    }), Pe.default = we, Object.freeze(Pe);
  }
  var H = /* @__PURE__ */ re(r), U = /* @__PURE__ */ re(n), D = /* @__PURE__ */ re(i), Q = /* @__PURE__ */ re(s), ve = /* @__PURE__ */ re(l), L = /* @__PURE__ */ re(b), le = /* @__PURE__ */ re(h), Re = /* @__PURE__ */ re(E), fe = /* @__PURE__ */ re(T), P = /* @__PURE__ */ re(S), oe = /* @__PURE__ */ re(j), Ae = /* @__PURE__ */ se(O), Ce = /* @__PURE__ */ se(X), $ = /* @__PURE__ */ re(B), He = /* @__PURE__ */ se(ue);
  function ot(we, Pe, Z, K) {
    var q = arguments.length, ke = q < 3 ? Pe : K === null ? K = Object.getOwnPropertyDescriptor(Pe, Z) : K, ie;
    if ((typeof Reflect > "u" ? "undefined" : oe.default(Reflect)) === "object" && typeof Reflect.decorate == "function") ke = Reflect.decorate(we, Pe, Z, K);
    else for (var et = we.length - 1; et >= 0; et--) (ie = we[et]) && (ke = (q < 3 ? ie(ke) : q > 3 ? ie(Pe, Z, ke) : ie(Pe, Z)) || ke);
    return q > 3 && ke && Object.defineProperty(Pe, Z, ke), ke;
  }
  function vt(we, Pe) {
    if ((typeof Reflect > "u" ? "undefined" : oe.default(Reflect)) === "object" && typeof Reflect.metadata == "function") return Reflect.metadata(we, Pe);
  }
  var Ie = Ae.getLogger("twilsock");
  function z(we, Pe) {
    return ["".concat((/* @__PURE__ */ new Date()).toISOString(), " Twilsock ").concat(we, ":")].concat(Array.from(Pe));
  }
  var F = new (/* @__PURE__ */ (function() {
    function we(Pe) {
      Re.default(this, we), fe.default(this, "prefix", ""), this.prefix = Pe != null && Pe.length > 0 ? " " + Pe + ":" : "";
    }
    return le.default(we, [
      {
        key: "setLevel",
        value: function(Z) {
          Ie.setLevel(Z);
        }
      },
      {
        key: "trace",
        value: function() {
          if (Ie.getLevel() == Ie.levels.TRACE) {
            for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
            Ie.debug.apply(null, z("T", K));
          }
        }
      },
      {
        key: "debug",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.debug.apply(null, z("D", K));
        }
      },
      {
        key: "info",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.info.apply(null, z("I", K));
        }
      },
      {
        key: "warn",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.warn.apply(null, z("W", K));
        }
      },
      {
        key: "error",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.error.apply(null, z("E", K));
        }
      }
    ], [
      {
        key: "setLevel",
        value: function(Z) {
          Ie.setLevel(Z);
        }
      },
      {
        key: "trace",
        value: function() {
          if (Ie.getLevel() == Ie.levels.TRACE) {
            for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
            Ie.debug.apply(null, z("T", K));
          }
        }
      },
      {
        key: "debug",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.debug.apply(null, z("D", K));
        }
      },
      {
        key: "info",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.info.apply(null, z("I", K));
        }
      },
      {
        key: "warn",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.warn.apply(null, z("W", K));
        }
      },
      {
        key: "error",
        value: function() {
          for (var Z = arguments.length, K = new Array(Z), q = 0; q < Z; q++) K[q] = arguments[q];
          Ie.error.apply(null, z("E", K));
        }
      }
    ]), we;
  })())(""), m = "1.0.2", he = /* @__PURE__ */ (function() {
    function we(Pe, Z, K) {
      Re.default(this, we), fe.default(this, "confirmedCapabilities", /* @__PURE__ */ new Set()), this.activeGrant = Z, this._token = Pe;
      var q = K.region || "us1", ke = "wss://tsock.".concat(q, ".twilio.com/v3/wsconnect"), ie = K.twilsock || K.Twilsock || {};
      this.url = ie.uri || ke, this._continuationToken = K.continuationToken ? K.continuationToken : null, this.logLevel = K.logLevel ? K.logLevel : "error", this.retryPolicy = K.retryPolicy ? K.retryPolicy : {
        min: 1e3,
        max: 12e4,
        randomness: 0.2
      }, this.clientMetadata = K.clientMetadata ? K.clientMetadata : {}, this.clientMetadata.ver = m, this.initRegistrations = K.initRegistrations ? K.initRegistrations : null, this.tweaks = K.tweaks ? K.tweaks : null;
    }
    return le.default(we, [
      {
        key: "token",
        get: function() {
          return this._token;
        }
      },
      {
        key: "continuationToken",
        get: function() {
          return this._continuationToken;
        }
      },
      {
        key: "updateToken",
        value: function(Z) {
          this._token = Z;
        }
      },
      {
        key: "updateContinuationToken",
        value: function(Z) {
          this._continuationToken = Z;
        }
      }
    ]), we;
  })(), te = function() {
    return crypto.randomUUID();
  }, De = te, ee = /* @__PURE__ */ le.default(function we(Pe) {
    Re.default(this, we), this.id = Pe || "TM".concat(De());
  });
  function pe(we) {
    var Pe = Ne();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Ne() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var $e = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = pe(Z);
    function Z(K, q, ke, ie, et) {
      var rt;
      return Re.default(this, Z), rt = Pe.call(this), fe.default(U.default(rt), "method", "init"), rt.token = K, rt.continuation_token = q, rt.metadata = ke, rt.registrations = ie, rt.tweaks = et, rt.capabilities = [
        "client_update",
        "offline_storage",
        "telemetry.v1"
      ], rt;
    }
    return le.default(Z);
  })(ee);
  function Oe(we) {
    var Pe = nt();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function nt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Ze = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = Oe(Z);
    function Z(K, q, ke, ie, et, rt, pt) {
      var yt;
      return Re.default(this, Z), yt = Pe.call(this, K), yt.continuationToken = q, yt.continuationTokenStatus = ie, yt.offlineStorage = et, yt.initRegistrations = rt, yt.debugInfo = pt, yt.confirmedCapabilities = ke, yt;
    }
    return le.default(Z);
  })(ee);
  function Je(we) {
    var Pe = _t();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function _t() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ft = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = Je(Z);
    function Z(K) {
      var q;
      return Re.default(this, Z), q = Pe.call(this), fe.default(U.default(q), "method", "update"), q.token = K, q;
    }
    return le.default(Z);
  })(ee);
  function lt(we) {
    var Pe = ze();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function ze() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var _e = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = lt(Z);
    function Z(K, q, ke) {
      var ie;
      return Re.default(this, Z), ie = Pe.call(this), fe.default(U.default(ie), "method", "message"), ie.active_grant = K, ie.payload_type = q, ie.http_request = ke, ie;
    }
    return le.default(Z);
  })(ee);
  function de(we) {
    var Pe = ce();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function ce() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ye = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = de(Z);
    function Z(K) {
      var q;
      return Re.default(this, Z), q = Pe.call(this, K), fe.default(U.default(q), "method", "reply"), fe.default(U.default(q), "payload_type", "application/json"), fe.default(U.default(q), "status", {
        code: 200,
        status: "OK"
      }), q;
    }
    return le.default(Z);
  })(ee);
  function Ye(we) {
    var Pe = Fe();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Fe() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var We = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = Ye(Z);
    function Z() {
      var K;
      return Re.default(this, Z), K = Pe.call(this), fe.default(U.default(K), "method", "close"), K;
    }
    return le.default(Z);
  })(ee);
  function ht(we) {
    var Pe = mt();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function mt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ct = /* @__PURE__ */ le.default(function we(Pe, Z, K, q, ke, ie) {
    Re.default(this, we), this.start = Pe, this.end = Z, this.title = K, this.details = q, this.id = ke, this.type = ie;
  }), Ve = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = ht(Z);
    function Z(K) {
      var q;
      return Re.default(this, Z), q = Pe.call(this), fe.default(U.default(q), "method", "telemetry.v1"), q.events = K, q;
    }
    return le.default(Z);
  })(ee);
  function at(we) {
    return encodeURIComponent(we).replace(/%([0-9A-F]{2})/g, function(Pe, Z) {
      return String.fromCharCode(+("0x" + Z));
    }).length;
  }
  function qe(we) {
    var Pe = encodeURIComponent(we).replace(/%([0-9A-F]{2})/g, function(K, q) {
      return String.fromCharCode(+("0x" + q));
    }), Z = new Uint8Array(Pe.length);
    return Array.prototype.forEach.call(Pe, function(K, q) {
      Z[q] = K.charCodeAt(0);
    }), Z;
  }
  function ae(we) {
    var Pe = Array.prototype.map.call(we, function(Z) {
      return String.fromCharCode(Z);
    }).join("").replace(/(.)/g, function(Z, K) {
      var q = K.charCodeAt(0).toString(16).toUpperCase();
      return q.length < 2 && (q = "0" + q), "%" + q;
    });
    return decodeURIComponent(Pe);
  }
  function Se(we) {
    return JSON.parse(ae(we));
  }
  function Te(we) {
    for (var Pe = "", Z = 0; Z < we.length; ++Z) {
      var K = String.fromCharCode(we[Z]);
      if (Pe += K, K === "\r") {
        Z += 2;
        break;
      }
    }
    var q = Pe.split(" ");
    return {
      size: Z,
      protocol: q[0],
      version: q[1],
      headerSize: Number(q[2])
    };
  }
  var je = /* @__PURE__ */ (function() {
    function we() {
      Re.default(this, we);
    }
    return le.default(we, null, [{
      key: "parse",
      value: function(Z) {
        var K = 2, q = new Uint8Array(Z), ke = Te(q);
        if (ke.protocol !== "TWILSOCK" || ke.version !== "V3.0")
          return F.error("unsupported protocol: ".concat(ke.protocol, " ver ").concat(ke.version)), null;
        var ie;
        try {
          ie = Se(q.subarray(ke.size, ke.size + ke.headerSize));
        } catch (yt) {
          return F.error("failed to parse message header", yt, Z), null;
        }
        F.debug("message received:", ie.method);
        var et;
        if (ie.payload_size > 0) {
          var rt = K + ke.size + ke.headerSize, pt = ie.payload_size;
          if (!ie.hasOwnProperty("payload_type") || ie.payload_type.indexOf("application/json") === 0) try {
            et = Se(q.subarray(rt, rt + pt));
          } catch (yt) {
            return F.error("failed to parse message body", yt, Z), null;
          }
          else ie.payload_type.indexOf("text/plain") === 0 && (et = ae(q.subarray(rt, rt + pt)));
        }
        return {
          method: ie.method,
          header: ie,
          payload: et
        };
      }
    }, {
      key: "createPacket",
      value: function(Z) {
        var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        Z.payload_size = at(K);
        var q = JSON.stringify(Z), ke = "TWILSOCK V3.0 " + at(q);
        return F.debug("send request:", ke + q + K), qe(ke + `\r
` + q + `\r
` + K).buffer;
      }
    }]), we;
  })();
  function be(we) {
    var Pe = Qe();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Qe() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var tt = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = be(Z);
    function Z(K) {
      return Re.default(this, Z), Pe.call(this, K);
    }
    return le.default(Z);
  })(/* @__PURE__ */ $.default(Error));
  function gt(we) {
    var Pe = Pt();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Pt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Et = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = gt(Z);
    function Z(K, q) {
      var ke;
      return Re.default(this, Z), ke = Pe.call(this, K), ke.reply = q, ke;
    }
    return le.default(Z);
  })(tt);
  function At(we, Pe) {
    var Z = Object.keys(we);
    if (Object.getOwnPropertySymbols) {
      var K = Object.getOwnPropertySymbols(we);
      Pe && (K = K.filter(function(q) {
        return Object.getOwnPropertyDescriptor(we, q).enumerable;
      })), Z.push.apply(Z, K);
    }
    return Z;
  }
  function Tt(we) {
    for (var Pe = 1; Pe < arguments.length; Pe++) {
      var Z = arguments[Pe] != null ? arguments[Pe] : {};
      Pe % 2 ? At(Object(Z), !0).forEach(function(K) {
        fe.default(we, K, Z[K]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(we, Object.getOwnPropertyDescriptors(Z)) : At(Object(Z)).forEach(function(K) {
        Object.defineProperty(we, K, Object.getOwnPropertyDescriptor(Z, K));
      });
    }
    return we;
  }
  function ir(we) {
    var Pe = Lt();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Lt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Xt = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = ir(Z);
    function Z(K) {
      var q;
      return Re.default(this, Z), q = Pe.call(this), fe.default(U.default(q), "newBackoff", null), fe.default(U.default(q), "usedBackoff", null), fe.default(U.default(q), "retrier", null), q.options = K ? Tt({}, K) : {}, q;
    }
    return le.default(Z, [
      {
        key: "inProgress",
        get: function() {
          return !!this.retrier;
        }
      },
      {
        key: "start",
        value: function() {
          if (this.inProgress) throw new Error("Already waiting for next attempt, call finishAttempt(success : boolean) to finish it");
          this.createRetrier();
        }
      },
      {
        key: "stop",
        value: function() {
          this.cleanRetrier(), this.newBackoff = null, this.usedBackoff = null;
        }
      },
      {
        key: "modifyBackoff",
        value: function(q) {
          this.newBackoff = q;
        }
      },
      {
        key: "attemptFailed",
        value: function() {
          if (!this.inProgress) throw new Error("No attempt is in progress");
          if (this.newBackoff)
            if (!this.usedBackoff || this.usedBackoff < this.newBackoff) this.createRetrier();
            else {
              var q;
              (q = this.retrier) === null || q === void 0 || q.failed(/* @__PURE__ */ new Error());
            }
          else {
            var ke;
            (ke = this.retrier) === null || ke === void 0 || ke.failed(/* @__PURE__ */ new Error());
          }
        }
      },
      {
        key: "cancel",
        value: function() {
          var q;
          (q = this.retrier) === null || q === void 0 || q.cancel();
        }
      },
      {
        key: "cleanRetrier",
        value: function() {
          var q, ke;
          (q = this.retrier) === null || q === void 0 || q.removeAllListeners(), (ke = this.retrier) === null || ke === void 0 || ke.cancel(), this.retrier = null;
        }
      },
      {
        key: "getRetryPolicy",
        value: function() {
          var q = Tt({}, this.options);
          return this.newBackoff && (q.min = this.newBackoff, q.max = this.options.max && this.options.max > this.newBackoff ? this.options.max : this.newBackoff), q.maxAttemptsCount = this.options.maxAttemptsCount ? this.options.maxAttemptsCount + 1 : void 0, q;
        }
      },
      {
        key: "createRetrier",
        value: function() {
          var q = this;
          this.cleanRetrier();
          var ke = this.getRetryPolicy();
          this.retrier = new G.Retrier(ke), this.retrier.once("attempt", function() {
            var ie, et;
            (ie = q.retrier) === null || ie === void 0 || ie.on("attempt", function() {
              return q.emit("attempt");
            }), (et = q.retrier) === null || et === void 0 || et.failed(/* @__PURE__ */ new Error("Skipping first attempt"));
          }), this.retrier.on("failed", function(ie) {
            return q.emit("failed", ie);
          }), this.usedBackoff = this.newBackoff, this.newBackoff = null, this.retrier.start();
        }
      }
    ]), Z;
  })(Y.ReplayEventEmitter);
  function Wt(we) {
    var Pe = jr();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function jr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Rr = 3e3;
  function sr(we) {
    setTimeout(we, 0);
  }
  var wr = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = Wt(Z);
    function Z(K, q, ke) {
      var ie;
      Re.default(this, Z), ie = Pe.call(this), fe.default(U.default(ie), "disconnectingTimer", null), fe.default(U.default(ie), "disconnectedPromiseResolve", null), fe.default(U.default(ie), "terminalStates", ["disconnected", "rejected"]), fe.default(U.default(ie), "tokenExpiredSasCode", 20104), fe.default(U.default(ie), "terminationReason", "Connection is not initialized"), ie.websocket = K, ie.websocket.on("connected", function() {
        return ie.fsm.socketConnected();
      }), ie.websocket.on("disconnected", function() {
        return ie.fsm.socketClosed();
      }), ie.websocket.on("message", function(rt) {
        return ie.onIncomingMessage(rt);
      }), ie.websocket.on("socketError", function(rt) {
        ie.emit("connectionError", {
          terminal: !1,
          message: "Socket error: ".concat(rt.message),
          httpStatusCode: null,
          errorCode: null
        }), ie.emit("stateChanged", "retrying");
      }), ie.transport = q, ie.config = ke, ie.retrier = new Xt(ke.retryPolicy), ie.retrier.on("attempt", function() {
        return ie.retry();
      }), ie.retrier.on("failed", function(rt) {
        F.warn("Retrying failed: ".concat(rt.message)), ie.disconnect();
      }), typeof window < "u" && typeof window.addEventListener < "u" && (window.addEventListener("online", function() {
        F.debug("Browser reported connectivity state: online"), ie.resetBackoff(), ie.fsm.systemOnline();
      }), window.addEventListener("offline", function() {
        F.debug("Browser reported connectivity state: offline"), ie.websocket.close(), ie.fsm.socketClosed();
      }));
      var et = Ce.factory({
        init: "disconnected",
        transitions: [
          {
            name: "userConnect",
            from: ["disconnected", "rejected"],
            to: "connecting"
          },
          {
            name: "userConnect",
            from: ["connecting", "connected"]
          },
          {
            name: "userDisconnect",
            from: [
              "connecting",
              "initialising",
              "connected",
              "updating",
              "retrying",
              "rejected",
              "waitSocketClosed",
              "waitOffloadSocketClosed"
            ],
            to: "disconnecting"
          },
          {
            name: "userRetry",
            from: ["retrying"],
            to: "connecting"
          },
          {
            name: "socketConnected",
            from: ["connecting"],
            to: "initialising"
          },
          {
            name: "socketClosed",
            from: [
              "connecting",
              "initialising",
              "connected",
              "updating",
              "error",
              "waitOffloadSocketClosed"
            ],
            to: "retrying"
          },
          {
            name: "socketClosed",
            from: ["disconnecting"],
            to: "disconnected"
          },
          {
            name: "socketClosed",
            from: ["waitSocketClosed"],
            to: "disconnected"
          },
          {
            name: "socketClosed",
            from: ["rejected"],
            to: "rejected"
          },
          {
            name: "initSuccess",
            from: ["initialising"],
            to: "connected"
          },
          {
            name: "initError",
            from: ["initialising"],
            to: "error"
          },
          {
            name: "tokenRejected",
            from: ["initialising", "updating"],
            to: "rejected"
          },
          {
            name: "protocolError",
            from: [
              "initialising",
              "connected",
              "updating"
            ],
            to: "error"
          },
          {
            name: "receiveClose",
            from: [
              "initialising",
              "connected",
              "updating"
            ],
            to: "waitSocketClosed"
          },
          {
            name: "receiveOffload",
            from: [
              "initialising",
              "connected",
              "updating"
            ],
            to: "waitOffloadSocketClosed"
          },
          {
            name: "unsupportedProtocol",
            from: [
              "initialising",
              "connected",
              "updating"
            ],
            to: "unsupported"
          },
          {
            name: "receiveFatalClose",
            from: [
              "initialising",
              "connected",
              "updating"
            ],
            to: "unsupported"
          },
          {
            name: "userUpdateToken",
            from: [
              "disconnected",
              "rejected",
              "connecting",
              "retrying"
            ],
            to: "connecting"
          },
          {
            name: "userUpdateToken",
            from: ["connected"],
            to: "updating"
          },
          {
            name: "updateSuccess",
            from: ["updating"],
            to: "connected"
          },
          {
            name: "updateError",
            from: ["updating"],
            to: "error"
          },
          {
            name: "userSend",
            from: ["connected"],
            to: "connected"
          },
          {
            name: "systemOnline",
            from: ["retrying"],
            to: "connecting"
          }
        ],
        methods: {
          onConnecting: function() {
            ie.setupSocket(), ie.emit("connecting");
          },
          onEnterInitialising: function() {
            ie.sendInit();
          },
          onLeaveInitialising: function() {
            ie.cancelInit();
          },
          onEnterUpdating: function() {
            ie.sendUpdate();
          },
          onLeaveUpdating: function() {
            ie.cancelUpdate();
          },
          onEnterRetrying: function() {
            ie.initRetry(), ie.emit("connecting");
          },
          onEnterConnected: function() {
            ie.resetBackoff(), ie.onConnected();
          },
          onUserUpdateToken: function() {
            ie.resetBackoff();
          },
          onTokenRejected: function() {
            ie.resetBackoff(), ie.closeSocket(!0), ie.finalizeSocket();
          },
          onUserDisconnect: function() {
            ie.closeSocket(!0);
          },
          onEnterDisconnecting: function() {
            ie.startDisconnectTimer();
          },
          onLeaveDisconnecting: function() {
            ie.cancelDisconnectTimer();
          },
          onEnterWaitSocketClosed: function() {
            ie.startDisconnectTimer();
          },
          onLeaveWaitSocketClosed: function() {
            ie.cancelDisconnectTimer();
          },
          onEnterWaitOffloadSocketClosed: function() {
            ie.startDisconnectTimer();
          },
          onLeaveWaitOffloadSocketClosed: function() {
            ie.cancelDisconnectTimer();
          },
          onDisconnected: function() {
            ie.resetBackoff(), ie.finalizeSocket();
          },
          onReceiveClose: function() {
            ie.onCloseReceived();
          },
          onReceiveOffload: function(pt, yt) {
            F.debug("onreceiveoffload: ", yt), ie.modifyBackoff(yt.body), ie.onCloseReceived();
          },
          onUnsupported: function() {
            ie.closeSocket(!0), ie.finalizeSocket();
          },
          onError: function(pt, yt) {
            ie.closeSocket(yt), ie.finalizeSocket();
          },
          onEnterState: function(pt) {
            pt.from !== "none" && ie.changeState(pt);
          },
          onInvalidTransition: function(pt, yt, Ct) {
            F.warn("FSM: unexpected transition", yt, Ct);
          }
        }
      });
      return ie.fsm = new et(), ie;
    }
    return le.default(Z, [
      {
        key: "changeState",
        value: function(q) {
          F.debug("FSM: ".concat(q.transition, ": ").concat(q.from, " --> ").concat(q.to)), this.lastEmittedState !== this.state && (this.lastEmittedState = this.state, this.emit("stateChanged", this.state));
        }
      },
      {
        key: "resetBackoff",
        value: function() {
          F.trace("resetBackoff"), this.retrier.stop();
        }
      },
      {
        key: "modifyBackoff",
        value: function(q) {
          F.trace("modifyBackoff", q);
          var ke = q ? q.backoff_policy : null;
          ke && typeof ke.reconnect_min_ms == "number" && this.retrier.modifyBackoff(ke.reconnect_min_ms);
        }
      },
      {
        key: "startDisconnectTimer",
        value: function() {
          var q = this;
          F.trace("startDisconnectTimer"), this.disconnectingTimer && (clearTimeout(this.disconnectingTimer), this.disconnectingTimer = null), this.disconnectingTimer = setTimeout(function() {
            F.debug("disconnecting is timed out"), q.closeSocket(!0);
          }, Rr);
        }
      },
      {
        key: "cancelDisconnectTimer",
        value: function() {
          F.trace("cancelDisconnectTimer"), this.disconnectingTimer && (clearTimeout(this.disconnectingTimer), this.disconnectingTimer = null);
        }
      },
      {
        key: "isConnected",
        get: function() {
          return this.state === "connected" && this.websocket.isConnected;
        }
      },
      {
        key: "state",
        get: function() {
          switch (this.fsm.state) {
            case "connecting":
            case "initialising":
            case "retrying":
            case "error":
              return "connecting";
            case "updating":
            case "connected":
              return "connected";
            case "rejected":
              return "denied";
            case "disconnecting":
            case "waitSocketClosed":
            case "waitOffloadSocketClosed":
              return "disconnecting";
            default:
              return "disconnected";
          }
        }
      },
      {
        key: "initRetry",
        value: function() {
          F.debug("initRetry"), this.retrier.inProgress ? this.retrier.attemptFailed() : this.retrier.start();
        }
      },
      {
        key: "retry",
        value: function() {
          this.fsm.state != "connecting" ? (F.trace("retry"), this.websocket.close(), this.fsm.userRetry()) : F.trace("can	 retry as already connecting");
        }
      },
      {
        key: "onConnected",
        value: function() {
          this.emit("connected");
        }
      },
      {
        key: "finalizeSocket",
        value: function() {
          F.trace("finalizeSocket"), this.websocket.close(), this.emit("disconnected"), this.disconnectedPromiseResolve && (this.disconnectedPromiseResolve(), this.disconnectedPromiseResolve = null);
        }
      },
      {
        key: "setupSocket",
        value: function() {
          F.trace("setupSocket:", this.config.token), this.emit("beforeConnect"), this.websocket.connect();
        }
      },
      {
        key: "onIncomingMessage",
        value: function(q) {
          var ke = je.parse(q);
          if (ke) {
            var ie = ke.method, et = ke.header, rt = ke.payload;
            if (ie !== "reply" && this.confirmReceiving(et), ie === "notification") this.emit("message", et.message_type, rt);
            else if (et.method === "reply") this.transport.processReply({
              id: et.id,
              status: et.status,
              header: et,
              body: rt
            });
            else if (et.method === "client_update")
              et.client_update_type === "token_about_to_expire" && this.emit("tokenAboutToExpire");
            else if (et.method === "close")
              if (et.status.code === 308)
                F.debug("Connection has been offloaded"), this.fsm.receiveOffload({
                  status: et.status.status,
                  body: rt
                });
              else if (et.status.code === 406) {
                var pt = "Server closed connection because can't parse protocol: ".concat(JSON.stringify(et.status));
                this.emitReplyConnectionError(pt, et, !0), F.error(pt), this.fsm.receiveFatalClose();
              } else et.status.code === 417 ? (F.error("Server closed connection because can't parse client reply: ".concat(JSON.stringify(et.status))), this.fsm.receiveFatalClose(et.status.status)) : et.status.code === 410 ? (F.warn("Server closed connection: ".concat(JSON.stringify(et.status))), this.fsm.receiveClose(et.status.status), this.emit("tokenExpired")) : et.status.code === 401 ? (F.error("Server closed connection: ".concat(JSON.stringify(et.status))), this.fsm.receiveClose(et.status.status)) : (F.warn("unexpected message: ", et.status), this.fsm.receiveOffload({
                status: et.status.status,
                body: null
              }));
          }
        }
      },
      {
        key: "sendInit",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke() {
            var ie, et;
            return P.default.wrap(function(pt) {
              for (; ; ) switch (pt.prev = pt.next) {
                case 0:
                  return F.trace("sendInit"), pt.prev = 1, this.emit("beforeSendInit"), pt.next = 5, this.transport.sendInit();
                case 5:
                  ie = pt.sent, this.config.updateContinuationToken(ie.continuationToken), this.config.confirmedCapabilities = ie.confirmedCapabilities, this.fsm.initSuccess(ie), this.emit("initialized", ie), this.emit("tokenUpdated"), pt.next = 17;
                  break;
                case 13:
                  pt.prev = 13, pt.t0 = pt.catch(1), pt.t0 instanceof Et ? (et = !1, F.warn("Init rejected by server: ".concat(JSON.stringify(pt.t0.reply.status))), this.emit("sendInitFailed"), pt.t0.reply.status.code === 401 || pt.t0.reply.status.code === 403 ? (et = !0, this.fsm.tokenRejected(pt.t0.reply.status), pt.t0.reply.status.errorCode === this.tokenExpiredSasCode && this.emit("tokenExpired")) : pt.t0.reply.status.code === 429 ? (this.modifyBackoff(pt.t0.reply.body), this.fsm.initError(!0)) : pt.t0.reply.status.code === 500 ? this.fsm.initError(!1) : this.fsm.initError(!0), this.emitReplyConnectionError(pt.t0.message, pt.t0.reply, et)) : (this.terminationReason = pt.t0.message, this.emit("connectionError", {
                    terminal: !0,
                    message: "Unknown error during connection initialisation: ".concat(pt.t0.message, `
`).concat(JSON.stringify(pt.t0, null, 2)),
                    httpStatusCode: null,
                    errorCode: null
                  }), this.fsm.initError(!0)), this.emit("tokenUpdated", pt.t0);
                case 17:
                case "end":
                  return pt.stop();
              }
            }, ke, this, [[1, 13]]);
          }));
          function q() {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "sendUpdate",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke() {
            var ie, et, rt;
            return P.default.wrap(function(yt) {
              for (; ; ) switch (yt.prev = yt.next) {
                case 0:
                  return F.trace("sendUpdate"), ie = new ft(this.config.token), yt.prev = 2, yt.next = 5, this.transport.sendWithReply(ie);
                case 5:
                  et = yt.sent, this.fsm.updateSuccess(et.body), this.emit("tokenUpdated"), yt.next = 14;
                  break;
                case 10:
                  yt.prev = 10, yt.t0 = yt.catch(2), yt.t0 instanceof Et ? (rt = !1, F.warn("Token update rejected by server: ".concat(JSON.stringify(yt.t0.reply.status))), yt.t0.reply.status.code === 401 || yt.t0.reply.status.code === 403 ? (rt = !0, this.fsm.tokenRejected(yt.t0.reply.status), yt.t0.reply.status.errorCode === this.tokenExpiredSasCode && this.emit("tokenExpired")) : yt.t0.reply.status.code === 429 ? (this.modifyBackoff(yt.t0.reply.body), this.fsm.updateError(yt.t0.reply.status)) : this.fsm.updateError(yt.t0.reply.status), this.emitReplyConnectionError(yt.t0.message, yt.t0.reply, rt)) : (this.emit("error", !1, yt.t0.message, null, null), this.fsm.updateError(yt.t0)), this.emit("tokenUpdated", yt.t0);
                case 14:
                case "end":
                  return yt.stop();
              }
            }, ke, this, [[2, 10]]);
          }));
          function q() {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "emitReplyConnectionError",
        value: function(q, ke, ie) {
          var et = ke.status && ke.status.description ? ke.status.description : q, rt = ke.status.code, pt = ke.status && ke.status.errorCode ? ke.status.errorCode : null;
          ie && (this.terminationReason = et), this.emit("connectionError", {
            terminal: ie,
            message: "Connection error: ".concat(et),
            httpStatusCode: rt,
            errorCode: pt
          });
        }
      },
      {
        key: "cancelInit",
        value: function() {
          F.trace("cancelInit");
        }
      },
      {
        key: "cancelUpdate",
        value: function() {
          F.trace("cancelUpdate");
        }
      },
      {
        key: "confirmReceiving",
        value: function(q) {
          F.trace("confirmReceiving");
          try {
            this.transport.send(new ye(q.id));
          } catch (ke) {
            F.debug("failed to confirm packet receiving", ke);
          }
        }
      },
      {
        key: "closeSocket",
        value: function(q) {
          var ke = this;
          F.trace("closeSocket (graceful: ".concat(q, ")")), q && this.transport.isConnected && this.transport.sendClose(), this.websocket.close(), sr(function() {
            return ke.fsm.socketClosed();
          });
        }
      },
      {
        key: "connect",
        value: function() {
          F.trace("connect"), this.fsm.userConnect();
        }
      },
      {
        key: "disconnect",
        value: function() {
          var q = this;
          return F.trace("disconnect"), this.fsm.is("disconnected") ? Promise.resolve() : new Promise(function(ke) {
            q.disconnectedPromiseResolve = ke, q.fsm.userDisconnect();
          });
        }
      },
      {
        key: "updateToken",
        value: function(q) {
          var ke = this;
          return F.trace("updateToken:", q), new Promise(function(ie, et) {
            ke.once("tokenUpdated", function(rt) {
              rt ? et(rt) : ie();
            }), ke.fsm.userUpdateToken();
          });
        }
      },
      {
        key: "isTerminalState",
        get: function() {
          return this.terminalStates.indexOf(this.fsm.state) !== -1;
        }
      },
      {
        key: "getTerminationReason",
        get: function() {
          return this.terminationReason;
        }
      },
      {
        key: "onCloseReceived",
        value: function() {
          this.websocket.close();
        }
      }
    ]), Z;
  })(Y.ReplayEventEmitter), fr = /* @__PURE__ */ (function() {
    function we() {
      Re.default(this, we);
    }
    return le.default(we, null, [{
      key: "getMetadata",
      value: function(Z) {
        var K, q, ke, ie, et, rt, pt, yt, Ct = Z && Z.clientMetadata ? Z.clientMetadata : {}, vr = [
          "ver",
          "env",
          "envv",
          "os",
          "osv",
          "osa",
          "type",
          "sdk",
          "sdkv",
          "dev",
          "devv",
          "devt",
          "app",
          "appv"
        ], wn = {
          env: (K = He.name) !== null && K !== void 0 ? K : "unknown",
          envv: (q = He.version) !== null && q !== void 0 ? q : "unknown",
          os: (ke = (ie = He.os) === null || ie === void 0 ? void 0 : ie.family) !== null && ke !== void 0 ? ke : "unknown",
          osv: (et = (rt = He.os) === null || rt === void 0 ? void 0 : rt.version) !== null && et !== void 0 ? et : "unknown",
          osa: (pt = (yt = He.os) === null || yt === void 0 ? void 0 : yt.architecture) !== null && pt !== void 0 ? pt : "unknown",
          sdk: "js-default"
        }, gr = {};
        return vr.filter(function(Pr) {
          return Pr in Ct || Pr in wn;
        }).forEach(function(Pr) {
          return gr[Pr] = Pr in Ct ? Ct[Pr] : wn[Pr];
        }), gr;
      }
    }]), we;
  })(), yr = te, Sr = 3e4;
  function Ur(we) {
    return we >= 200 && we < 300;
  }
  function zr(we) {
    switch (oe.default(we)) {
      case "undefined":
        return "";
      case "object":
        return JSON.stringify(we);
      default:
        return we;
    }
  }
  var rn = /* @__PURE__ */ (function() {
    function we(Pe, Z) {
      var K = this;
      Re.default(this, we), this.config = Z, this.activeRequests = /* @__PURE__ */ new Map(), this.channel = Pe, this.channel.on("reply", function(q) {
        return K.processReply(q);
      }), this.channel.on("disconnected", function() {
        K.activeRequests.forEach(function(q) {
          clearTimeout(q.timeout), q.reject(new tt("disconnected"));
        }), K.activeRequests.clear();
      });
    }
    return le.default(we, [
      {
        key: "isConnected",
        get: function() {
          return this.channel.isConnected;
        }
      },
      {
        key: "processReply",
        value: function(Z) {
          var K = this.activeRequests.get(Z.id);
          K && (clearTimeout(K.timeout), this.activeRequests.delete(Z.id), Ur(Z.status.code) ? K.resolve(Z) : (K.reject(new Et("Transport failure: " + Z.status.status, Z)), F.trace("message rejected")));
        }
      },
      {
        key: "storeRequest",
        value: function(Z, K, q) {
          var ke = {
            resolve: K,
            reject: q,
            timeout: setTimeout(function() {
              F.trace("request", Z, "is timed out"), q(new tt("Twilsock: request timeout: " + Z));
            }, Sr)
          };
          this.activeRequests.set(Z, ke);
        }
      },
      {
        key: "shutdown",
        value: function() {
          this.activeRequests.forEach(function(Z) {
            clearTimeout(Z.timeout), Z.reject(new tt("Twilsock: request cancelled by user"));
          }), this.activeRequests.clear();
        }
      },
      {
        key: "sendInit",
        value: (function() {
          var Pe = H.default(/* @__PURE__ */ P.default.mark(function K() {
            var q, ke, ie;
            return P.default.wrap(function(rt) {
              for (; ; ) switch (rt.prev = rt.next) {
                case 0:
                  return F.trace("sendInit"), q = fr.getMetadata(this.config), ke = new $e(this.config.token, this.config.continuationToken, q, this.config.initRegistrations, this.config.tweaks), rt.next = 5, this.sendWithReply(ke);
                case 5:
                  return ie = rt.sent, rt.abrupt("return", new Ze(ie.id, ie.header.continuation_token, new Set(ie.header.capabilities), ie.header.continuation_token_status, ie.header.offline_storage, ie.header.init_registrations, ie.header.debug_info));
                case 7:
                case "end":
                  return rt.stop();
              }
            }, K, this);
          }));
          function Z() {
            return Pe.apply(this, arguments);
          }
          return Z;
        })()
      },
      {
        key: "sendClose",
        value: function() {
          var Z = new We();
          this.send(Z);
        }
      },
      {
        key: "sendWithReply",
        value: function(Z, K) {
          var q = this;
          return new Promise(function(ke, ie) {
            var et = q.send(Z, K);
            q.storeRequest(et, ke, ie);
          });
        }
      },
      {
        key: "send",
        value: function(Z, K) {
          Z.id = Z.id || "TM".concat(yr());
          var q = je.createPacket(Z, zr(K));
          try {
            return this.channel.send(q), Z.id;
          } catch (ke) {
            throw F.debug("failed to send ", Z, ke), F.trace(ke.stack), ke;
          }
        }
      }
    ]), we;
  })();
  function Lr(we) {
    var Pe = Vr();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Vr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Kr = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = Lr(Z);
    function Z(K) {
      var q;
      return Re.default(this, Z), q = Pe.call(this), fe.default(U.default(q), "socket", null), q.url = K, q.url = K, q.WebSocket = e.WebSocket || e.MozWebSocket || {}, q;
    }
    return le.default(Z, [
      {
        key: "isConnected",
        get: function() {
          return !!this.socket && this.socket.readyState === 1;
        }
      },
      {
        key: "connect",
        value: function() {
          var q = this;
          F.trace("connecting to socket");
          var ke;
          try {
            ke = new this.WebSocket(this.url);
          } catch (ie) {
            F.debug("Socket error: ".concat(this.url)), this.emit("socketError", ie);
            return;
          }
          ke.binaryType = "arraybuffer", ke.onopen = function() {
            F.debug("socket opened ".concat(q.url)), q.emit("connected");
          }, ke.onclose = function(ie) {
            F.debug("socket closed", ie), q.emit("disconnected", ie);
          }, ke.onerror = function(ie) {
            F.debug("Socket error:", ie), q.emit("socketError", ie);
          }, ke.onmessage = function(ie) {
            q.emit("message", ie.data);
          }, this.socket = ke;
        }
      },
      {
        key: "send",
        value: function(q) {
          return this.socket && this.socket.send(q);
        }
      },
      {
        key: "close",
        value: function() {
          F.trace("closing socket"), this.socket && (this.socket.onopen = null, this.socket.onclose = null, this.socket.onerror = null, this.socket.onmessage = null, this.socket.close());
        }
      }
    ]), Z;
  })(Y.ReplayEventEmitter);
  function Er(we) {
    var Pe = $r();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function $r() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Cr = te, ar = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = Er(Z);
    function Z(K) {
      var q;
      return Re.default(this, Z), q = Pe.call(this), q.transport = K, q.registrations = /* @__PURE__ */ new Map(), q.registrationsInProgress = /* @__PURE__ */ new Map(), q;
    }
    return le.default(Z, [
      {
        key: "putNotificationContext",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et) {
            var rt;
            return P.default.wrap(function(yt) {
              for (; ; ) switch (yt.prev = yt.next) {
                case 0:
                  return rt = {
                    method: "put_notification_ctx",
                    notification_ctx_id: ie
                  }, yt.next = 3, this.transport.sendWithReply(rt, et);
                case 3:
                case "end":
                  return yt.stop();
              }
            }, ke, this);
          }));
          function q(ke, ie) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "deleteNotificationContext",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie) {
            var et;
            return P.default.wrap(function(pt) {
              for (; ; ) switch (pt.prev = pt.next) {
                case 0:
                  return et = {
                    method: "delete_notification_ctx",
                    notification_ctx_id: ie
                  }, pt.next = 3, this.transport.sendWithReply(et);
                case 3:
                case "end":
                  return pt.stop();
              }
            }, ke, this);
          }));
          function q(ke) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "updateRegistration",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et) {
            var rt, pt;
            return P.default.wrap(function(Ct) {
              for (; ; ) switch (Ct.prev = Ct.next) {
                case 0:
                  return F.debug("update registration for context", ie), rt = this.registrationsInProgress.get(ie), rt || (rt = /* @__PURE__ */ new Set(), this.registrationsInProgress.set(ie, rt)), pt = Cr(), rt.add(pt), Ct.prev = 5, Ct.next = 8, this.putNotificationContext(ie, et);
                case 8:
                  F.debug("registration attempt succeeded for context", et), rt.delete(pt), rt.size === 0 && (this.registrationsInProgress.delete(ie), this.emit("registered", ie)), Ct.next = 19;
                  break;
                case 13:
                  Ct.prev = 13, Ct.t0 = Ct.catch(5), F.warn("registration attempt failed for context", et), F.debug(Ct.t0), rt.delete(pt), rt.size === 0 && (this.registrationsInProgress.delete(ie), this.emit("registrationFailed", ie, Ct.t0));
                case 19:
                case "end":
                  return Ct.stop();
              }
            }, ke, this, [[5, 13]]);
          }));
          function q(ke, ie) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "updateRegistrations",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke() {
            var ie = this, et;
            return P.default.wrap(function(pt) {
              for (; ; ) switch (pt.prev = pt.next) {
                case 0:
                  return F.trace("refreshing ".concat(this.registrations.size, " registrations")), et = [], this.registrations.forEach(function(yt, Ct) {
                    et.push(ie.updateRegistration(Ct, yt));
                  }), pt.next = 5, Promise.all(et);
                case 5:
                case "end":
                  return pt.stop();
              }
            }, ke, this);
          }));
          function q() {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "setNotificationsContext",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et) {
            return P.default.wrap(function(pt) {
              for (; ; ) switch (pt.prev = pt.next) {
                case 0:
                  if (!(!ie || !et)) {
                    pt.next = 2;
                    break;
                  }
                  throw new tt("Invalid arguments provided");
                case 2:
                  return this.registrations.set(ie, et), pt.next = 5, this.updateRegistration(ie, et);
                case 5:
                  return pt.abrupt("return", pt.sent);
                case 6:
                case "end":
                  return pt.stop();
              }
            }, ke, this);
          }));
          function q(ke, ie) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "removeNotificationsContext",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie) {
            return P.default.wrap(function(rt) {
              for (; ; ) switch (rt.prev = rt.next) {
                case 0:
                  if (this.registrations.has(ie)) {
                    rt.next = 2;
                    break;
                  }
                  return rt.abrupt("return");
                case 2:
                  return rt.next = 4, this.deleteNotificationContext(ie);
                case 4:
                  this.transport.isConnected && this.registrations.delete(ie);
                case 5:
                case "end":
                  return rt.stop();
              }
            }, ke, this);
          }));
          function q(ke) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      }
    ]), Z;
  })(Y.ReplayEventEmitter);
  function kr(we) {
    var Pe = Zt();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Zt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var dr = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = kr(Z);
    function Z(K, q, ke) {
      var ie;
      return Re.default(this, Z), ie = Pe.call(this, q), ie.status = K, ie.description = q, ie.body = ke, ie;
    }
    return le.default(Z);
  })(tt);
  function Jr(we) {
    var Pe = Or();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function Or() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var rr = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = Jr(Z);
    function Z(K) {
      return Re.default(this, Z), Pe.call(this, K);
    }
    return le.default(Z);
  })(tt), lr = 2e4;
  function nn(we) {
    return we >= 200 && we < 300;
  }
  function an(we) {
    return we && we.header && we.header.http_status;
  }
  function Ee(we) {
    var Pe = we.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)(\/[^?#]*)(\?[^#]*|)(#.*|)$/);
    if (Pe) {
      var Z = {
        protocol: Pe[1],
        host: Pe[2],
        hostname: Pe[3],
        port: Pe[4],
        pathname: Pe[5],
        search: Pe[6],
        hash: Pe[7],
        params: {}
      };
      return Z.search.length > 0 && (Z.params = Z.search.substring(1).split("&").map(function(K) {
        return K.split("=");
      }).reduce(function(K, q) {
        return K.hasOwnProperty(q[0]) ? Array.isArray(K[q[0]]) ? K[q[0]].push(q[1]) : K[q[0]] = [K[q[0]], q[1]] : K[q[0]] = q[1], K;
      }, {})), Z;
    }
    throw new tt("Incorrect URI: " + we);
  }
  function it(we, Pe) {
    var Z = Ee(Pe), K = {
      method: we,
      host: Z.host,
      path: Z.pathname
    };
    return Z.params && (K.params = Z.params), K;
  }
  function Ke(we, Pe, Z, K, q) {
    return {
      to: it(we, Pe),
      headers: Z,
      body: K,
      grant: q
    };
  }
  var xe = /* @__PURE__ */ (function() {
    function we(Pe, Z, K) {
      Re.default(this, we), this.config = K, this.transport = Pe, this.pendingMessages = [], this.twilsock = Z;
    }
    return le.default(we, [
      {
        key: "saveMessage",
        value: function(Z) {
          var K = this;
          return new Promise(function(q, ke) {
            var ie = {
              message: Z,
              resolve: q,
              reject: ke,
              alreadyRejected: !1,
              timeout: setTimeout(function() {
                F.debug("request is timed out"), ke(new tt("request '".concat(Z.to.method, "' to '").concat(Z.to.host, "' timed out"))), ie.alreadyRejected = !0;
              }, lr)
            };
            K.pendingMessages.push(ie);
          });
        }
      },
      {
        key: "sendPendingMessages",
        value: function() {
          for (var Z = this, K = function() {
            var ke = Z.pendingMessages[0];
            if (!ke.alreadyRejected) try {
              var ie = ke.message;
              Z.actualSend(ie).then(function(et) {
                return ke.resolve(et);
              }).catch(function(et) {
                return ke.reject(et);
              }), clearTimeout(ke.timeout);
            } catch (et) {
              return F.debug("Failed to send pending message", et), "break";
            }
            Z.pendingMessages.splice(0, 1);
          }; this.pendingMessages.length > 0 && K() !== "break"; ) ;
        }
      },
      {
        key: "rejectPendingMessages",
        value: function() {
          var Z = this;
          this.pendingMessages.forEach(function(K) {
            K.reject(new rr("Unable to connect: " + Z.twilsock.getTerminationReason)), K.alreadyRejected = !0, clearTimeout(K.timeout);
          }), this.pendingMessages.splice(0, this.pendingMessages.length);
        }
      },
      {
        key: "actualSend",
        value: (function() {
          var Pe = H.default(/* @__PURE__ */ P.default.mark(function K(q) {
            var ke, ie, et, rt, pt, yt, Ct, vr;
            return P.default.wrap(function(gr) {
              for (; ; ) switch (gr.prev = gr.next) {
                case 0:
                  return ie = q.to, et = q.headers, rt = q.body, pt = (ke = q.grant) !== null && ke !== void 0 ? ke : this.config.activeGrant, yt = {
                    host: ie.host,
                    path: ie.path,
                    method: ie.method,
                    params: ie.params,
                    headers: et
                  }, Ct = new _e(pt, et["Content-Type"] || "application/json", yt), F.trace("Sending upstream message", Ct), gr.next = 9, this.transport.sendWithReply(Ct, rt);
                case 9:
                  if (vr = gr.sent, F.trace("Received upstream message response", vr), !(an(vr) && !nn(vr.header.http_status.code))) {
                    gr.next = 13;
                    break;
                  }
                  throw new dr(vr.header.http_status.code, vr.header.http_status.status, vr.body);
                case 13:
                  return gr.abrupt("return", {
                    status: vr.header.http_status,
                    headers: vr.header.http_headers,
                    body: vr.body
                  });
                case 14:
                case "end":
                  return gr.stop();
              }
            }, K, this);
          }));
          function Z(K) {
            return Pe.apply(this, arguments);
          }
          return Z;
        })()
      },
      {
        key: "send",
        value: function(Z, K) {
          var q = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ke = arguments.length > 3 ? arguments[3] : void 0, ie = arguments.length > 4 ? arguments[4] : void 0;
          if (this.twilsock.isTerminalState) return Promise.reject(new rr("Unable to connect: " + this.twilsock.getTerminationReason));
          var et = Ke(Z, K, q, ke, ie);
          return this.twilsock.isConnected ? this.actualSend(et) : this.saveMessage(et);
        }
      }
    ]), we;
  })(), dt = /* @__PURE__ */ (function() {
    function we() {
      var Pe = this;
      Re.default(this, we), this._promise = new Promise(function(Z, K) {
        Pe._resolve = Z, Pe._reject = K;
      });
    }
    return le.default(we, [
      {
        key: "promise",
        get: function() {
          return this._promise;
        }
      },
      {
        key: "update",
        value: function(Z) {
          this._resolve(Z);
        }
      },
      {
        key: "set",
        value: function(Z) {
          this._resolve(Z);
        }
      },
      {
        key: "fail",
        value: function(Z) {
          this._reject(Z);
        }
      }
    ]), we;
  })(), kt = /* @__PURE__ */ (function() {
    function we(Pe) {
      Re.default(this, we), this.id = Pe;
    }
    return le.default(we, null, [{
      key: "create",
      value: function(Z) {
        if (Z instanceof Object && "storage_id" in Z) return new we(Z.storage_id);
        throw new tt('Field "storage_id" is missing');
      }
    }]), we;
  })(), It = /* @__PURE__ */ (function() {
    function we() {
      return Re.default(this, we), fe.default(this, "initializedFlag", "twilio_twilsock_token_storage"), fe.default(this, "tokenStoragePrefix", "twilio_continuation_token_"), we._instance || (this.initialize(), we._instance = this), we._instance;
    }
    return le.default(we, [
      {
        key: "sessionStorage",
        value: function() {
          try {
            return e.sessionStorage;
          } catch {
            return null;
          }
        }
      },
      {
        key: "window",
        value: function() {
          try {
            return e.window;
          } catch {
            return null;
          }
        }
      },
      {
        key: "storeToken",
        value: function(Z, K) {
          this.canStore() && this.sessionStorage.setItem(this.getKeyName(K), Z);
        }
      },
      {
        key: "getStoredToken",
        value: function(Z) {
          return this.canStore() ? this.sessionStorage.getItem(this.getKeyName(Z)) : null;
        }
      },
      {
        key: "initialize",
        value: function() {
          var Z = this;
          if (this.canStore()) {
            this.sessionStorage.getItem(this.initializedFlag) && this.clear(), this.sessionStorage.setItem(this.initializedFlag, "true");
            var K = this.sessionStorage.removeItem;
            this.window.addEventListener("unload", function() {
              K(Z.initializedFlag);
            });
          }
        }
      },
      {
        key: "clear",
        value: function() {
          if (this.canStore()) {
            for (var Z = [], K = 0; K < this.sessionStorage.length; K++) {
              var q = this.sessionStorage.key(K);
              q && q.indexOf(this.tokenStoragePrefix) === 0 && Z.push(q);
            }
            var ke = this.sessionStorage.removeItem;
            Z.forEach(function(ie) {
              return ke(ie);
            }), ke(this.initializedFlag);
          }
        }
      },
      {
        key: "getKeyName",
        value: function(Z) {
          return "".concat(this.tokenStoragePrefix).concat(Z);
        }
      },
      {
        key: "canStore",
        value: function() {
          return !!(this.sessionStorage && this.sessionStorage.length && this.window);
        }
      }
    ]), we;
  })();
  fe.default(It, "_instance", null);
  var zt = new It(), qt = /* @__PURE__ */ (function() {
    function we(Pe, Z, K, q, ke, ie) {
      Re.default(this, we), this.title = Pe, this.details = Z, this.start = K, this.type = ke, this.id = ie, this.end = q;
    }
    return le.default(we, [{
      key: "toTelemetryEvent",
      value: function() {
        var Z = /* @__PURE__ */ new Date(), K = this.start, q = this.end ? this.end : Z;
        if (q < K) {
          var ke = q;
          q = K, K = ke;
        }
        return new ct(K.getTime() - Z.getTime(), q.getTime() - Z.getTime(), this.title, this.details, this.id, this.type);
      }
    }]), we;
  })();
  c.TelemetryPoint = void 0, (function(we) {
    we[we.Start = 0] = "Start", we[we.End = 1] = "End";
  })(c.TelemetryPoint || (c.TelemetryPoint = {})), c.EventSendingLimitation = void 0, (function(we) {
    we[we.MinEventsPortion = 0] = "MinEventsPortion", we[we.AnyEvents = 1] = "AnyEvents", we[we.AnyEventsIncludingUnfinished = 2] = "AnyEventsIncludingUnfinished";
  })(c.EventSendingLimitation || (c.EventSendingLimitation = {}));
  var nr = /* @__PURE__ */ (function() {
    function we(Pe, Z) {
      Re.default(this, we), fe.default(this, "minEventsPortionToSend", 50), fe.default(this, "maxEventsPortionToSend", 100), fe.default(this, "pendingEvents", /* @__PURE__ */ new Map()), fe.default(this, "readyEvents", []), fe.default(this, "hasInitializationFinished", !1), fe.default(this, "_canSendTelemetry", !1), this.config = Pe, this.packetInterface = Z;
    }
    return le.default(we, [
      {
        key: "isTelemetryEnabled",
        get: function() {
          return this.config.confirmedCapabilities.has("telemetry.v1");
        }
      },
      {
        key: "canSendTelemetry",
        get: function() {
          return this._canSendTelemetry && this.isTelemetryEnabled;
        },
        set: function(Z) {
          F.debug("TelemetryTracker.canSendTelemetry: ".concat(Z, " TelemetryTracker.isTelemetryEnabled: ").concat(this.isTelemetryEnabled)), this._canSendTelemetry && !Z && (this.pendingEvents.clear(), this.readyEvents = []), this._canSendTelemetry = Z, Z && this.sendTelemetry(c.EventSendingLimitation.AnyEvents), Z && !this.hasInitializationFinished && (this.hasInitializationFinished = !0);
        }
      },
      {
        key: "addTelemetryEvent",
        value: function(Z) {
          !this.canSendTelemetry && this.hasInitializationFinished || this.readyEvents.push(Z);
        }
      },
      {
        key: "addPartialEvent",
        value: function(Z, K, q) {
          F.debug("Adding ".concat(q === c.TelemetryPoint.Start ? "starting" : "ending", " timepoint for '").concat(K, "' event"));
          var ke = this.pendingEvents.has(K);
          if (q === c.TelemetryPoint.Start)
            ke && F.debug("Overwriting starting point for '".concat(K, "' event")), this.pendingEvents.set(K, Z);
          else {
            if (!ke) {
              F.info("Could not find started event for '".concat(K, "' event"));
              return;
            }
            this.addTelemetryEvent(this.merge(this.pendingEvents.get(K), Z)), this.pendingEvents.delete(K);
          }
        }
      },
      {
        key: "getTelemetryToSend",
        value: function(Z) {
          return !this.canSendTelemetry || this.readyEvents.length == 0 ? [] : Z == c.EventSendingLimitation.MinEventsPortion && this.readyEvents.length < this.minEventsPortionToSend ? [] : this.getTelemetryPortion(Z == c.EventSendingLimitation.AnyEventsIncludingUnfinished);
        }
      },
      {
        key: "getTelemetryPortion",
        value: function(Z) {
          var K = this, q = Math.min(this.readyEvents.length, this.maxEventsPortionToSend), ke = this.readyEvents.splice(0, q);
          return Z && ke.length < this.maxEventsPortionToSend && this.pendingEvents.forEach(function(ie, et) {
            if (!(ke.length >= K.maxEventsPortionToSend)) {
              var rt = K.pendingEvents.get(et);
              K.pendingEvents.delete(et), ke.push(new qt("[UNFINISHED] ".concat(rt.title), rt.details, rt.start, null, rt.type, rt.id));
            }
          }), ke;
        }
      },
      {
        key: "merge",
        value: function(Z, K) {
          return new qt(K.title ? K.title : Z.title, K.details ? K.details : Z.details, Z.start, K.end, K.type ? K.type : Z.type, K.id ? K.id : Z.id);
        }
      },
      {
        key: "sendTelemetryIfMinimalPortionCollected",
        value: function() {
          this.sendTelemetry(c.EventSendingLimitation.MinEventsPortion);
        }
      },
      {
        key: "sendTelemetry",
        value: function(Z) {
          var K = this.getTelemetryToSend(Z);
          if (K.length !== 0)
            try {
              this.packetInterface.send(new Ve(K.map(function(q) {
                return q.toTelemetryEvent();
              })));
            } catch (q) {
              F.debug("Error while sending ".concat(K.length, " telemetry events due to ").concat(q, "; they will be resubmitted")), this.readyEvents = this.readyEvents.concat(K);
            }
        }
      }
    ]), we;
  })();
  function ur(we) {
    var Pe = ut();
    return function() {
      var K = L.default(we), q;
      if (Pe) {
        var ke = L.default(this).constructor;
        q = Reflect.construct(K, arguments, ke);
      } else q = K.apply(this, arguments);
      return ve.default(this, q);
    };
  }
  function ut() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Rt = /* @__PURE__ */ le.default(function we() {
    Re.default(this, we);
  });
  fe.default(Rt, "TWILSOCK_CONNECT", "twilsock.sdk.connect"), fe.default(Rt, "TWILSOCK_INIT", "twilsock.sdk.init"), c.TwilsockClient = /* @__PURE__ */ (function(we) {
    Q.default(Z, we);
    var Pe = ur(Z);
    function Z(K, q, ke) {
      var ie;
      Re.default(this, Z), ie = Pe.call(this), fe.default(U.default(ie), "version", m), fe.default(U.default(ie), "offlineStorageDeferred", new dt()), ke.continuationToken = ke.continuationToken ? ke.continuationToken : zt.getStoredToken(q);
      var et = ie.config = new he(K, q, ke);
      F.setLevel(et.logLevel);
      var rt = new Kr(et.url), pt = new rn(rt, et);
      return ie.channel = new wr(rt, pt, et), ie.registrations = new ar(pt), ie.upstream = new xe(pt, ie.channel, et), ie.telemetryTracker = new nr(et, pt), ie.channel.on("initialized", function() {
        return ie.telemetryTracker.canSendTelemetry = !0;
      }), rt.on("disconnected", function() {
        return ie.telemetryTracker.canSendTelemetry = !1;
      }), ie.registrations.on("registered", function(yt) {
        return ie.emit("registered", yt);
      }), ie.channel.on("message", function(yt, Ct) {
        return setTimeout(function() {
          return ie.emit("message", yt, Ct);
        }, 0);
      }), ie.channel.on("stateChanged", function(yt) {
        return setTimeout(function() {
          return ie.emit("stateChanged", yt);
        }, 0);
      }), ie.channel.on("connectionError", function(yt) {
        return setTimeout(function() {
          return ie.emit("connectionError", yt);
        }, 0);
      }), ie.channel.on("tokenAboutToExpire", function() {
        return setTimeout(function() {
          return ie.emit("tokenAboutToExpire");
        }, 0);
      }), ie.channel.on("tokenExpired", function() {
        return setTimeout(function() {
          return ie.emit("tokenExpired");
        }, 0);
      }), ie.channel.on("connected", function() {
        return ie.registrations.updateRegistrations();
      }), ie.channel.on("connected", function() {
        return ie.upstream.sendPendingMessages();
      }), ie.channel.on("connected", function() {
        return setTimeout(function() {
          return ie.emit("connected");
        }, 0);
      }), ie.channel.on("beforeConnect", function() {
        return ie.telemetryTracker.addPartialEvent(new qt("Establish WebSocket connection", "", /* @__PURE__ */ new Date()), Rt.TWILSOCK_CONNECT, c.TelemetryPoint.Start);
      }), ie.channel.on("connected", function() {
        return ie.telemetryTracker.addPartialEvent(new qt("Establish WebSocket connection", "", /* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()), Rt.TWILSOCK_CONNECT, c.TelemetryPoint.End);
      }), ie.channel.on("beforeSendInit", function() {
        return ie.telemetryTracker.addPartialEvent(new qt("Send Twilsock init", "", /* @__PURE__ */ new Date()), Rt.TWILSOCK_INIT, c.TelemetryPoint.Start);
      }), ie.channel.on("initialized", function() {
        return ie.telemetryTracker.addPartialEvent(new qt("Send Twilsock init", "Succeeded", /* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()), Rt.TWILSOCK_INIT, c.TelemetryPoint.End);
      }), ie.channel.on("sendInitFailed", function() {
        return ie.telemetryTracker.addPartialEvent(new qt("Send Twilsock init", "Failed", /* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()), Rt.TWILSOCK_INIT, c.TelemetryPoint.End);
      }), ie.channel.on("initialized", function(yt) {
        ie.handleStorageId(q, yt), zt.storeToken(yt.continuationToken, q), setTimeout(function() {
          return ie.emit("initialized", yt);
        }, 0);
      }), ie.channel.on("disconnected", function() {
        return setTimeout(function() {
          return ie.emit("disconnected");
        }, 0);
      }), ie.channel.on("disconnected", function() {
        return ie.upstream.rejectPendingMessages();
      }), ie.channel.on("disconnected", function() {
        return ie.offlineStorageDeferred.fail(new tt("Client disconnected"));
      }), ie.offlineStorageDeferred.promise.catch(function() {
      }), ie;
    }
    return le.default(Z, [
      {
        key: "emit",
        value: function(q) {
          for (var ke, ie = arguments.length, et = new Array(ie > 1 ? ie - 1 : 0), rt = 1; rt < ie; rt++) et[rt - 1] = arguments[rt];
          return F.debug("Emitting ".concat(q.toString(), "(").concat(et.map(function(pt) {
            return JSON.stringify(pt);
          }).join(", "), ")")), (ke = D.default(L.default(Z.prototype), "emit", this)).call.apply(ke, [this, q].concat(et));
        }
      },
      {
        key: "handleStorageId",
        value: function(q, ke) {
          if (!ke.offlineStorage) this.offlineStorageDeferred.fail(new tt("No offline storage id"));
          else if (ke.offlineStorage.hasOwnProperty(q)) try {
            this.offlineStorageDeferred.set(kt.create(ke.offlineStorage[q])), F.debug("Offline storage for '".concat(q, "' product: ").concat(JSON.stringify(ke.offlineStorage[q]), "."));
          } catch (ie) {
            this.offlineStorageDeferred.fail(new tt("Failed to parse offline storage for ".concat(q, " ").concat(JSON.stringify(ke.offlineStorage[q]), ". ").concat(ie, ".")));
          }
          else this.offlineStorageDeferred.fail(new tt("No offline storage id for '".concat(q, "' product: ").concat(JSON.stringify(ke.offlineStorage))));
        }
      },
      {
        key: "storageId",
        value: function() {
          return this.offlineStorageDeferred.promise;
        }
      },
      {
        key: "isConnected",
        get: function() {
          return this.channel.isConnected;
        }
      },
      {
        key: "state",
        get: function() {
          return this.channel.state;
        }
      },
      {
        key: "updateToken",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie) {
            return P.default.wrap(function(rt) {
              for (; ; ) switch (rt.prev = rt.next) {
                case 0:
                  if (F.trace("updating token '".concat(ie, "'")), this.config.token !== ie) {
                    rt.next = 3;
                    break;
                  }
                  return rt.abrupt("return");
                case 3:
                  return this.config.updateToken(ie), rt.next = 6, this.channel.updateToken(ie);
                case 6:
                  return rt.abrupt("return", rt.sent);
                case 7:
                case "end":
                  return rt.stop();
              }
            }, ke, this);
          }));
          function q(ke) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "setNotificationsContext",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et) {
            return P.default.wrap(function(pt) {
              for (; ; ) switch (pt.prev = pt.next) {
                case 0:
                  return pt.next = 2, this.registrations.setNotificationsContext(ie, et);
                case 2:
                case "end":
                  return pt.stop();
              }
            }, ke, this);
          }));
          function q(ke, ie) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "removeNotificationsContext",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie) {
            return P.default.wrap(function(rt) {
              for (; ; ) switch (rt.prev = rt.next) {
                case 0:
                  return rt.next = 2, this.registrations.removeNotificationsContext(ie);
                case 2:
                case "end":
                  return rt.stop();
              }
            }, ke, this);
          }));
          function q(ke) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "connect",
        value: function() {
          return this.channel.connect();
        }
      },
      {
        key: "disconnect",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke() {
            return P.default.wrap(function(et) {
              for (; ; ) switch (et.prev = et.next) {
                case 0:
                  return this.telemetryTracker.sendTelemetry(c.EventSendingLimitation.AnyEventsIncludingUnfinished), et.next = 3, this.channel.disconnect();
                case 3:
                  return et.abrupt("return", et.sent);
                case 4:
                case "end":
                  return et.stop();
              }
            }, ke, this);
          }));
          function q() {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "get",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et, rt) {
            return P.default.wrap(function(yt) {
              for (; ; ) switch (yt.prev = yt.next) {
                case 0:
                  return this.telemetryTracker.sendTelemetry(c.EventSendingLimitation.AnyEvents), yt.next = 3, this.upstream.send("GET", ie, et, void 0, rt);
                case 3:
                  return yt.abrupt("return", yt.sent);
                case 4:
                case "end":
                  return yt.stop();
              }
            }, ke, this);
          }));
          function q(ke, ie, et) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "post",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et, rt, pt) {
            return P.default.wrap(function(Ct) {
              for (; ; ) switch (Ct.prev = Ct.next) {
                case 0:
                  return this.telemetryTracker.sendTelemetry(c.EventSendingLimitation.AnyEvents), Ct.next = 3, this.upstream.send("POST", ie, et, rt, pt);
                case 3:
                  return Ct.abrupt("return", Ct.sent);
                case 4:
                case "end":
                  return Ct.stop();
              }
            }, ke, this);
          }));
          function q(ke, ie, et, rt) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "put",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et, rt, pt) {
            return P.default.wrap(function(Ct) {
              for (; ; ) switch (Ct.prev = Ct.next) {
                case 0:
                  return this.telemetryTracker.sendTelemetry(c.EventSendingLimitation.AnyEvents), Ct.next = 3, this.upstream.send("PUT", ie, et, rt, pt);
                case 3:
                  return Ct.abrupt("return", Ct.sent);
                case 4:
                case "end":
                  return Ct.stop();
              }
            }, ke, this);
          }));
          function q(ke, ie, et, rt) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "delete",
        value: (function() {
          var K = H.default(/* @__PURE__ */ P.default.mark(function ke(ie, et, rt, pt) {
            return P.default.wrap(function(Ct) {
              for (; ; ) switch (Ct.prev = Ct.next) {
                case 0:
                  return this.telemetryTracker.sendTelemetry(c.EventSendingLimitation.AnyEvents), Ct.next = 3, this.upstream.send("DELETE", ie, et, rt, pt);
                case 3:
                  return Ct.abrupt("return", Ct.sent);
                case 4:
                case "end":
                  return Ct.stop();
              }
            }, ke, this);
          }));
          function q(ke, ie, et, rt) {
            return K.apply(this, arguments);
          }
          return q;
        })()
      },
      {
        key: "addTelemetryEvent",
        value: function(q) {
          this.telemetryTracker.addTelemetryEvent(q), this.telemetryTracker.sendTelemetryIfMinimalPortionCollected();
        }
      },
      {
        key: "addPartialTelemetryEvent",
        value: function(q, ke, ie) {
          this.telemetryTracker.addPartialEvent(q, ke, ie), ie === c.TelemetryPoint.End && this.telemetryTracker.sendTelemetryIfMinimalPortionCollected();
        }
      }
    ]), Z;
  })(Y.ReplayEventEmitter), c.TwilsockClient = ot([V.validateConstructorTypes(V.nonEmptyString, V.nonEmptyString, [
    V.pureObject,
    "undefined",
    V.literal(null)
  ]), vt("design:paramtypes", [
    String,
    String,
    Object
  ])], c.TwilsockClient);
  var Ir = /* @__PURE__ */ (function() {
    function we(Pe) {
      Re.default(this, we), this.product = Pe, this.type = "ers", this.notification_protocol_version = 0, this.message_types = [];
    }
    return le.default(we, [{
      key: "populateInitRegistrations",
      value: function(Z) {
        var K = new Set(this.message_types);
        for (var q in Z) K.add(Z[q]);
        this.message_types = Array.from(K);
      }
    }]), we;
  })();
  c.InitRegistration = Ir, c.TelemetryEventDescription = qt, c.TelemetryTracker = nr, c.TransportUnavailableError = rr, c.Twilsock = c.TwilsockClient, c.TwilsockError = tt;
})), ku = /* @__PURE__ */ J(((c, e) => {
  var r = Yt(), n = Ut(), i = Vt(), s = Mt(), l = na(), b = ja(), h = Aa(), E = br(), T = Zn(), S = Object.assign, j = Object.defineProperty, V = n([].concat);
  e.exports = !S || s(function() {
    if (r && S({ b: 1 }, S(j({}, "a", {
      enumerable: !0,
      get: function() {
        j(this, "b", {
          value: 3,
          enumerable: !1
        });
      }
    }), { b: 2 })).b !== 1) return !0;
    var O = {}, X = {}, B = /* @__PURE__ */ Symbol("assign detection"), G = "abcdefghijklmnopqrst";
    return O[B] = 7, G.split("").forEach(function(Y) {
      X[Y] = Y;
    }), S({}, O)[B] !== 7 || l(S({}, X)).join("") !== G;
  }) ? function(X, B) {
    for (var G = E(X), Y = arguments.length, ue = 1, re = b.f, se = h.f; Y > ue; )
      for (var H = T(arguments[ue++]), U = re ? V(l(H), re(H)) : l(H), D = U.length, Q = 0, ve; D > Q; )
        ve = U[Q++], (!r || i(se, H, ve)) && (G[ve] = H[ve]);
    return G;
  } : S;
})), zi = /* @__PURE__ */ J((() => {
  var c = $t(), e = ku();
  c({
    target: "Object",
    stat: !0,
    arity: 2,
    forced: Object.assign !== e
  }, { assign: e });
})), il = /* @__PURE__ */ J(((c) => {
  Object.defineProperty(c, "__esModule", { value: !0 }), Cn(), On();
  var e = oa(), r = bn(), n = mn(), i = yn(), s = gn(), l = tn(), b = ha();
  cn(), _a(), Mn(), jn(), Jn(), xn(), la(), Nn();
  var h = en(), E = Wi(), T = Pn(), S = An();
  js(), Vn(), zi();
  var j = wa(), V = Za(), O = ma();
  Fi(), ua();
  var X = Kn(), B = ba();
  function G(ae) {
    return ae && typeof ae == "object" && "default" in ae ? ae : { default: ae };
  }
  function Y(ae) {
    if (ae && ae.__esModule) return ae;
    var Se = /* @__PURE__ */ Object.create(null);
    return ae && Object.keys(ae).forEach(function(Te) {
      if (Te !== "default") {
        var je = Object.getOwnPropertyDescriptor(ae, Te);
        Object.defineProperty(Se, Te, je.get ? je : {
          enumerable: !0,
          get: function() {
            return ae[Te];
          }
        });
      }
    }), Se.default = ae, Object.freeze(Se);
  }
  var ue = /* @__PURE__ */ G(e), re = /* @__PURE__ */ G(r), se = /* @__PURE__ */ G(n), H = /* @__PURE__ */ G(i), U = /* @__PURE__ */ G(s), D = /* @__PURE__ */ G(l), Q = /* @__PURE__ */ G(b), ve = /* @__PURE__ */ G(h), L = /* @__PURE__ */ G(T), le = /* @__PURE__ */ G(S), Re = /* @__PURE__ */ G(V), fe = /* @__PURE__ */ G(O), P = /* @__PURE__ */ Y(X);
  function oe(ae, Se, Te, je) {
    var be = arguments.length, Qe = be < 3 ? Se : je === null ? je = Object.getOwnPropertyDescriptor(Se, Te) : je, tt;
    if ((typeof Reflect > "u" ? "undefined" : ve.default(Reflect)) === "object" && typeof Reflect.decorate == "function") Qe = Reflect.decorate(ae, Se, Te, je);
    else for (var gt = ae.length - 1; gt >= 0; gt--) (tt = ae[gt]) && (Qe = (be < 3 ? tt(Qe) : be > 3 ? tt(Se, Te, Qe) : tt(Se, Te)) || Qe);
    return be > 3 && Qe && Object.defineProperty(Se, Te, Qe), Qe;
  }
  function Ae(ae, Se) {
    if ((typeof Reflect > "u" ? "undefined" : ve.default(Reflect)) === "object" && typeof Reflect.metadata == "function") return Reflect.metadata(ae, Se);
  }
  var Ce;
  function $() {
  }
  $.prototype = /* @__PURE__ */ Object.create(null);
  function He() {
    He.init.call(this);
  }
  He.EventEmitter = He, He.usingDomains = !1, He.prototype.domain = void 0, He.prototype._events = void 0, He.prototype._maxListeners = void 0, He.defaultMaxListeners = 10, He.init = function() {
    this.domain = null, He.usingDomains && Ce.active, (!this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = new $(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, He.prototype.setMaxListeners = function(Se) {
    if (typeof Se != "number" || Se < 0 || isNaN(Se)) throw new TypeError('"n" argument must be a positive number');
    return this._maxListeners = Se, this;
  };
  function ot(ae) {
    return ae._maxListeners === void 0 ? He.defaultMaxListeners : ae._maxListeners;
  }
  He.prototype.getMaxListeners = function() {
    return ot(this);
  };
  function vt(ae, Se, Te) {
    if (Se) ae.call(Te);
    else
      for (var je = ae.length, be = Ne(ae, je), Qe = 0; Qe < je; ++Qe) be[Qe].call(Te);
  }
  function Ie(ae, Se, Te, je) {
    if (Se) ae.call(Te, je);
    else
      for (var be = ae.length, Qe = Ne(ae, be), tt = 0; tt < be; ++tt) Qe[tt].call(Te, je);
  }
  function z(ae, Se, Te, je, be) {
    if (Se) ae.call(Te, je, be);
    else
      for (var Qe = ae.length, tt = Ne(ae, Qe), gt = 0; gt < Qe; ++gt) tt[gt].call(Te, je, be);
  }
  function F(ae, Se, Te, je, be, Qe) {
    if (Se) ae.call(Te, je, be, Qe);
    else
      for (var tt = ae.length, gt = Ne(ae, tt), Pt = 0; Pt < tt; ++Pt) gt[Pt].call(Te, je, be, Qe);
  }
  function m(ae, Se, Te, je) {
    if (Se) ae.apply(Te, je);
    else
      for (var be = ae.length, Qe = Ne(ae, be), tt = 0; tt < be; ++tt) Qe[tt].apply(Te, je);
  }
  He.prototype.emit = function(Se) {
    var Te, je, be, Qe, tt, gt, Pt, Et = Se === "error";
    if (gt = this._events, gt) Et = Et && gt.error == null;
    else if (!Et) return !1;
    if (Pt = this.domain, Et) {
      if (Te = arguments[1], Pt)
        Te || (Te = /* @__PURE__ */ new Error('Uncaught, unspecified "error" event')), Te.domainEmitter = this, Te.domain = Pt, Te.domainThrown = !1, Pt.emit("error", Te);
      else {
        if (Te instanceof Error) throw Te;
        var At = /* @__PURE__ */ new Error('Uncaught, unspecified "error" event. (' + Te + ")");
        throw At.context = Te, At;
      }
      return !1;
    }
    if (je = gt[Se], !je) return !1;
    var Tt = typeof je == "function";
    switch (be = arguments.length, be) {
      case 1:
        vt(je, Tt, this);
        break;
      case 2:
        Ie(je, Tt, this, arguments[1]);
        break;
      case 3:
        z(je, Tt, this, arguments[1], arguments[2]);
        break;
      case 4:
        F(je, Tt, this, arguments[1], arguments[2], arguments[3]);
        break;
      default:
        for (Qe = new Array(be - 1), tt = 1; tt < be; tt++) Qe[tt - 1] = arguments[tt];
        m(je, Tt, this, Qe);
    }
    return !0;
  };
  function he(ae, Se, Te, je) {
    var be, Qe, tt;
    if (typeof Te != "function") throw new TypeError('"listener" argument must be a function');
    if (Qe = ae._events, Qe ? (Qe.newListener && (ae.emit("newListener", Se, Te.listener ? Te.listener : Te), Qe = ae._events), tt = Qe[Se]) : (Qe = ae._events = new $(), ae._eventsCount = 0), !tt)
      tt = Qe[Se] = Te, ++ae._eventsCount;
    else if (typeof tt == "function" ? tt = Qe[Se] = je ? [Te, tt] : [tt, Te] : je ? tt.unshift(Te) : tt.push(Te), !tt.warned && (be = ot(ae), be && be > 0 && tt.length > be)) {
      tt.warned = !0;
      var gt = /* @__PURE__ */ new Error("Possible EventEmitter memory leak detected. " + tt.length + " " + Se + " listeners added. Use emitter.setMaxListeners() to increase limit");
      gt.name = "MaxListenersExceededWarning", gt.emitter = ae, gt.type = Se, gt.count = tt.length, te(gt);
    }
    return ae;
  }
  function te(ae) {
    typeof console.warn == "function" ? console.warn(ae) : console.log(ae);
  }
  He.prototype.addListener = function(Se, Te) {
    return he(this, Se, Te, !1);
  }, He.prototype.on = He.prototype.addListener, He.prototype.prependListener = function(Se, Te) {
    return he(this, Se, Te, !0);
  };
  function De(ae, Se, Te) {
    var je = !1;
    function be() {
      ae.removeListener(Se, be), je || (je = !0, Te.apply(ae, arguments));
    }
    return be.listener = Te, be;
  }
  He.prototype.once = function(Se, Te) {
    if (typeof Te != "function") throw new TypeError('"listener" argument must be a function');
    return this.on(Se, De(this, Se, Te)), this;
  }, He.prototype.prependOnceListener = function(Se, Te) {
    if (typeof Te != "function") throw new TypeError('"listener" argument must be a function');
    return this.prependListener(Se, De(this, Se, Te)), this;
  }, He.prototype.removeListener = function(Se, Te) {
    var je, be, Qe, tt, gt;
    if (typeof Te != "function") throw new TypeError('"listener" argument must be a function');
    if (be = this._events, !be) return this;
    if (je = be[Se], !je) return this;
    if (je === Te || je.listener && je.listener === Te)
      --this._eventsCount === 0 ? this._events = new $() : (delete be[Se], be.removeListener && this.emit("removeListener", Se, je.listener || Te));
    else if (typeof je != "function") {
      for (Qe = -1, tt = je.length; tt-- > 0; ) if (je[tt] === Te || je[tt].listener && je[tt].listener === Te) {
        gt = je[tt].listener, Qe = tt;
        break;
      }
      if (Qe < 0) return this;
      if (je.length === 1) {
        if (je[0] = void 0, --this._eventsCount === 0)
          return this._events = new $(), this;
        delete be[Se];
      } else pe(je, Qe);
      be.removeListener && this.emit("removeListener", Se, gt || Te);
    }
    return this;
  }, He.prototype.off = function(ae, Se) {
    return this.removeListener(ae, Se);
  }, He.prototype.removeAllListeners = function(Se) {
    var Te, je = this._events;
    if (!je) return this;
    if (!je.removeListener)
      return arguments.length === 0 ? (this._events = new $(), this._eventsCount = 0) : je[Se] && (--this._eventsCount === 0 ? this._events = new $() : delete je[Se]), this;
    if (arguments.length === 0) {
      for (var be = Object.keys(je), Qe = 0, tt; Qe < be.length; ++Qe)
        tt = be[Qe], tt !== "removeListener" && this.removeAllListeners(tt);
      return this.removeAllListeners("removeListener"), this._events = new $(), this._eventsCount = 0, this;
    }
    if (Te = je[Se], typeof Te == "function") this.removeListener(Se, Te);
    else if (Te) do
      this.removeListener(Se, Te[Te.length - 1]);
    while (Te[0]);
    return this;
  }, He.prototype.listeners = function(Se) {
    var Te, je, be = this._events;
    return be ? (Te = be[Se], Te ? typeof Te == "function" ? je = [Te.listener || Te] : je = $e(Te) : je = []) : je = [], je;
  }, He.listenerCount = function(ae, Se) {
    return typeof ae.listenerCount == "function" ? ae.listenerCount(Se) : ee.call(ae, Se);
  }, He.prototype.listenerCount = ee;
  function ee(ae) {
    var Se = this._events;
    if (Se) {
      var Te = Se[ae];
      if (typeof Te == "function") return 1;
      if (Te) return Te.length;
    }
    return 0;
  }
  He.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  };
  function pe(ae, Se) {
    for (var Te = Se, je = Te + 1, be = ae.length; je < be; Te += 1, je += 1) ae[Te] = ae[je];
    ae.pop();
  }
  function Ne(ae, Se) {
    for (var Te = new Array(Se); Se--; ) Te[Se] = ae[Se];
    return Te;
  }
  function $e(ae) {
    for (var Se = new Array(ae.length), Te = 0; Te < Se.length; ++Te) Se[Te] = ae[Te].listener || ae[Te];
    return Se;
  }
  var Oe = P.getLogger("twilio-notificatiions");
  function nt(ae, Se) {
    return ["".concat((/* @__PURE__ */ new Date()).toISOString(), " Twilio.Notifications ").concat(ae, ":")].concat(Array.from(Se));
  }
  var Ze = new (/* @__PURE__ */ (function() {
    function ae() {
      re.default(this, ae);
    }
    return se.default(ae, [
      {
        key: "setLevel",
        value: function(Te) {
          Oe.setLevel(Te);
        }
      },
      {
        key: "trace",
        value: function() {
          if (Oe.getLevel() == Oe.levels.TRACE) {
            for (var Te = arguments.length, je = new Array(Te), be = 0; be < Te; be++) je[be] = arguments[be];
            Oe.debug.apply(null, nt("T", je));
          }
        }
      },
      {
        key: "debug",
        value: function() {
          for (var Te = arguments.length, je = new Array(Te), be = 0; be < Te; be++) je[be] = arguments[be];
          Oe.debug.apply(null, nt("D", je));
        }
      },
      {
        key: "info",
        value: function() {
          for (var Te = arguments.length, je = new Array(Te), be = 0; be < Te; be++) je[be] = arguments[be];
          Oe.info.apply(null, nt("I", je));
        }
      },
      {
        key: "warn",
        value: function() {
          for (var Te = arguments.length, je = new Array(Te), be = 0; be < Te; be++) je[be] = arguments[be];
          Oe.warn.apply(null, nt("W", je));
        }
      },
      {
        key: "error",
        value: function() {
          for (var Te = arguments.length, je = new Array(Te), be = 0; be < Te; be++) je[be] = arguments[be];
          Oe.error.apply(null, nt("E", je));
        }
      }
    ]), ae;
  })())();
  function Je(ae) {
    var Se = _t();
    return function() {
      var je = D.default(ae), be;
      if (Se) {
        var Qe = D.default(this).constructor;
        be = Reflect.construct(je, arguments, Qe);
      } else be = je.apply(this, arguments);
      return U.default(this, be);
    };
  }
  function _t() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ft = /* @__PURE__ */ se.default(function ae() {
    var Se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", je = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Set();
    re.default(this, ae), this.token = Se, this.notificationId = Te, this.messageTypes = je;
  });
  function lt(ae, Se) {
    return [].concat(fe.default(fe.default(ae).filter(function(Te) {
      return !Se.has(Te);
    })), fe.default(fe.default(Se).filter(function(Te) {
      return !ae.has(Te);
    })));
  }
  function ze(ae, Se) {
    var Te = /* @__PURE__ */ new Set();
    return ae.notificationId !== Se.notificationId && Te.add("notificationId"), ae.token !== Se.token && Te.add("token"), lt(ae.messageTypes, Se.messageTypes).length > 0 && Te.add("messageType"), [Te.size > 0, Te];
  }
  var _e = /* @__PURE__ */ (function(ae) {
    H.default(Te, ae);
    var Se = Je(Te);
    function Te(je) {
      var be;
      return re.default(this, Te), be = Se.call(this), le.default(L.default(be), "desiredState", new ft()), le.default(L.default(be), "currentState", new ft()), le.default(L.default(be), "_hasActiveAttempt", !1), be.channelType = je, be;
    }
    return se.default(Te, [
      {
        key: "setNotificationId",
        value: function(be) {
          this.desiredState.notificationId = be;
        }
      },
      {
        key: "isActive",
        value: function() {
          return this.desiredState.notificationId !== "";
        }
      },
      {
        key: "subscribe",
        value: function(be) {
          if (this.desiredState.messageTypes.has(be)) {
            Ze.debug("message type '".concat(be, "' for channel ").concat(this.channelType, " is already registered"));
            return;
          }
          this.desiredState.messageTypes.add(be);
        }
      },
      {
        key: "unsubscribe",
        value: function(be) {
          this.desiredState.messageTypes.has(be) && this.desiredState.messageTypes.delete(be);
        }
      },
      {
        key: "updateToken",
        value: function(be) {
          this.desiredState.token = be;
        }
      },
      {
        key: "commitChanges",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe() {
            var tt, gt, Pt, Et, At, Tt;
            return Q.default.wrap(function(Lt) {
              for (; ; ) switch (Lt.prev = Lt.next) {
                case 0:
                  if (!this._hasActiveAttempt) {
                    Lt.next = 3;
                    break;
                  }
                  throw Ze.error("One registration attempt is already in progress"), new Error("One registration attempt is already in progress");
                case 3:
                  if (tt = ze(this.desiredState, this.currentState), gt = Re.default(tt, 2), Pt = gt[0], Et = gt[1], Pt) {
                    Lt.next = 6;
                    break;
                  }
                  return Lt.abrupt("return");
                case 6:
                  if (this.currentState.notificationId || Et.delete("notificationId"), Ze.trace("Persisting ".concat(this.channelType, " registration"), Et, this.desiredState), Lt.prev = 8, this._hasActiveAttempt = !0, At = new ft(), At.token = this.desiredState.token, At.notificationId = this.desiredState.notificationId, At.messageTypes = new Set(this.desiredState.messageTypes), !(At.messageTypes.size > 0)) {
                    Lt.next = 24;
                    break;
                  }
                  return Lt.next = 17, this.updateRegistration(At, Et);
                case 17:
                  Tt = Lt.sent, this.currentState.token = Tt.token, this.currentState.notificationId = Tt.notificationId, this.currentState.messageTypes = new Set(Tt.messageTypes), this.emit("stateChanged", this.channelType, "registered", this.currentState), Lt.next = 30;
                  break;
                case 24:
                  return Lt.next = 26, this.removeRegistration();
                case 26:
                  this.currentState.token = At.token, this.currentState.notificationId = At.notificationId, this.currentState.messageTypes.clear(), this.emit("stateChanged", this.channelType, "unregistered", this.currentState);
                case 30:
                  Lt.next = 35;
                  break;
                case 32:
                  throw Lt.prev = 32, Lt.t0 = Lt.catch(8), Lt.t0;
                case 35:
                  return Lt.prev = 35, this._hasActiveAttempt = !1, Lt.finish(35);
                case 38:
                case "end":
                  return Lt.stop();
              }
            }, Qe, this, [[
              8,
              32,
              35,
              38
            ]]);
          }));
          function be() {
            return je.apply(this, arguments);
          }
          return be;
        })()
      }
    ]), Te;
  })(He);
  function de(ae) {
    var Se = ce();
    return function() {
      var je = D.default(ae), be;
      if (Se) {
        var Qe = D.default(this).constructor;
        be = Reflect.construct(je, arguments, Qe);
      } else be = je.apply(this, arguments);
      return U.default(this, be);
    };
  }
  function ce() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ye = {
    min: 2e3,
    max: 12e4,
    randomness: 0.2
  }, Ye = /* @__PURE__ */ (function(ae) {
    H.default(Te, ae);
    var Se = de(Te);
    function Te(je, be, Qe, tt) {
      var gt;
      return re.default(this, Te), gt = Se.call(this, je), le.default(L.default(gt), "registrationId", null), gt.context = be, gt.twilsock = Qe, gt.registrarUrl = tt, gt;
    }
    return se.default(Te, [
      {
        key: "updateRegistration",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe(tt, gt) {
            var Pt = this, Et, At, Tt, ir, Lt;
            return Q.default.wrap(function(Wt) {
              for (; ; ) switch (Wt.prev = Wt.next) {
                case 0:
                  if (!gt.has("notificationId")) {
                    Wt.next = 3;
                    break;
                  }
                  return Wt.next = 3, this.removeRegistration();
                case 3:
                  if (!(!tt.notificationId || !tt.notificationId.length)) {
                    Wt.next = 6;
                    break;
                  }
                  throw Ze.error("No push notification ID for registration"), new Error("No push notification ID for registration");
                case 6:
                  return Ze.trace("Registering", this.channelType, tt), Et = {
                    endpoint_platform: this.context.platform,
                    channel_type: this.channelType,
                    version: this.context.protocolVersion.toString(),
                    message_types: Array.from(tt.messageTypes),
                    data: { registration_id: tt.notificationId }
                  }, At = this.context.productId, Tt = "".concat(this.registrarUrl, "?productId=").concat(At), ir = { "Content-Type": "application/json" }, Ze.trace("Creating registration for channel ".concat(this.channelType)), Wt.prev = 12, Wt.next = 15, new j.AsyncRetrier(ye).run(function() {
                    return Pt.twilsock.post(Tt, ir, Et, At);
                  });
                case 15:
                  Lt = Wt.sent, this.registrationId = Lt.body.id, Ze.debug("Registration created: ", Lt), Wt.next = 24;
                  break;
                case 20:
                  throw Wt.prev = 20, Wt.t0 = Wt.catch(12), Ze.error("Registration failed: ", Wt.t0), Wt.t0;
                case 24:
                  return Wt.abrupt("return", tt);
                case 25:
                case "end":
                  return Wt.stop();
              }
            }, Qe, this, [[12, 20]]);
          }));
          function be(Qe, tt) {
            return je.apply(this, arguments);
          }
          return be;
        })()
      },
      {
        key: "removeRegistration",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe() {
            var tt = this, gt, Pt, Et;
            return Q.default.wrap(function(Tt) {
              for (; ; ) switch (Tt.prev = Tt.next) {
                case 0:
                  if (this.registrationId) {
                    Tt.next = 2;
                    break;
                  }
                  return Tt.abrupt("return");
                case 2:
                  return gt = this.context.productId, Pt = "".concat(this.registrarUrl, "/").concat(this.registrationId, "?productId=").concat(gt), Et = { "Content-Type": "application/json" }, Ze.trace("Removing registration for ".concat(this.channelType)), Tt.prev = 6, Tt.next = 9, new j.AsyncRetrier(Object.assign(ye, { maxAttemptsCount: 3 })).run(function() {
                    return tt.twilsock.delete(Pt, Et, {}, gt);
                  });
                case 9:
                  this.registrationId = null, this.currentState.notificationId = "", Ze.debug("Registration removed for ".concat(this.channelType)), Tt.next = 18;
                  break;
                case 14:
                  throw Tt.prev = 14, Tt.t0 = Tt.catch(6), Ze.error("Failed to remove registration ", this.channelType, Tt.t0), Tt.t0;
                case 18:
                case "end":
                  return Tt.stop();
              }
            }, Qe, this, [[6, 14]]);
          }));
          function be() {
            return je.apply(this, arguments);
          }
          return be;
        })()
      },
      {
        key: "sendDeviceRemoveRequest",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe(tt) {
            var gt = this, Pt, Et, At, Tt;
            return Q.default.wrap(function(Lt) {
              for (; ; ) switch (Lt.prev = Lt.next) {
                case 0:
                  if (tt !== "") {
                    Lt.next = 2;
                    break;
                  }
                  throw new Error("Empty registration ID");
                case 2:
                  return Pt = this.context.productId, Et = "".concat(this.registrarUrl, "?productId=").concat(Pt), At = { "Content-Type": "application/json" }, Tt = {
                    binding_type: this.channelType,
                    address: tt
                  }, Lt.prev = 6, Ze.trace("Removing old registrations for ".concat(this.channelType)), Lt.next = 10, new j.AsyncRetrier(Object.assign(ye, { maxAttemptsCount: 3 })).run(function() {
                    return gt.twilsock.delete(Et, At, Tt, Pt);
                  });
                case 10:
                  this.registrationId = null, this.currentState.notificationId = "", Ze.debug("Registration removed for ".concat(this.channelType)), Lt.next = 19;
                  break;
                case 15:
                  throw Lt.prev = 15, Lt.t0 = Lt.catch(6), Ze.error("Failed to remove registration ", this.channelType, Lt.t0), Lt.t0;
                case 19:
                case "end":
                  return Lt.stop();
              }
            }, Qe, this, [[6, 15]]);
          }));
          function be(Qe) {
            return je.apply(this, arguments);
          }
          return be;
        })()
      }
    ]), Te;
  })(_e), Fe = function() {
    return crypto.randomUUID();
  };
  function We(ae) {
    var Se = ht();
    return function() {
      var je = D.default(ae), be;
      if (Se) {
        var Qe = D.default(this).constructor;
        be = Reflect.construct(je, arguments, Qe);
      } else be = je.apply(this, arguments);
      return U.default(this, be);
    };
  }
  function ht() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var mt = /* @__PURE__ */ (function(ae) {
    H.default(Te, ae);
    var Se = We(Te);
    function Te(je, be, Qe) {
      var tt;
      return re.default(this, Te), tt = Se.call(this, "twilsock"), le.default(L.default(tt), "contextId", Fe()), tt.productId = je, tt.platform = be, tt.twilsock = Qe, tt;
    }
    return se.default(Te, [
      {
        key: "updateRegistration",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe(tt, gt) {
            var Pt, Et;
            return Q.default.wrap(function(Tt) {
              for (; ; ) switch (Tt.prev = Tt.next) {
                case 0:
                  if (gt.has("messageType")) {
                    Tt.next = 2;
                    break;
                  }
                  return Tt.abrupt("return", tt);
                case 2:
                  return Pt = Array.from(tt.messageTypes), Et = {
                    product_id: this.productId,
                    notification_protocol_version: 4,
                    endpoint_platform: this.platform,
                    message_types: Pt
                  }, Tt.prev = 4, Tt.next = 7, this.twilsock.setNotificationsContext(this.contextId, Et);
                case 7:
                  Tt.next = 13;
                  break;
                case 9:
                  throw Tt.prev = 9, Tt.t0 = Tt.catch(4), Ze.error("Failed to update twilsock notification context: ".concat(Tt.t0)), Tt.t0;
                case 13:
                  return Tt.abrupt("return", tt);
                case 14:
                case "end":
                  return Tt.stop();
              }
            }, Qe, this, [[4, 9]]);
          }));
          function be(Qe, tt) {
            return je.apply(this, arguments);
          }
          return be;
        })()
      },
      {
        key: "removeRegistration",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe() {
            return Q.default.wrap(function(gt) {
              for (; ; ) switch (gt.prev = gt.next) {
                case 0:
                  return gt.prev = 0, gt.next = 3, this.twilsock.removeNotificationsContext(this.contextId);
                case 3:
                  gt.next = 9;
                  break;
                case 5:
                  throw gt.prev = 5, gt.t0 = gt.catch(0), Ze.error("Failed to remove twilsock notification context: ".concat(gt.t0)), gt.t0;
                case 9:
                case "end":
                  return gt.stop();
              }
            }, Qe, this, [[0, 5]]);
          }));
          function be() {
            return je.apply(this, arguments);
          }
          return be;
        })()
      },
      {
        key: "sendDeviceRemoveRequest",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe(tt) {
            return Q.default.wrap(function(Pt) {
              for (; ; ) switch (Pt.prev = Pt.next) {
                case 0:
                case "end":
                  return Pt.stop();
              }
            }, Qe);
          }));
          function be(Qe) {
            return je.apply(this, arguments);
          }
          return be;
        })()
      }
    ]), Te;
  })(_e);
  function ct(ae) {
    var Se = Ve();
    return function() {
      var je = D.default(ae), be;
      if (Se) {
        var Qe = D.default(this).constructor;
        be = Reflect.construct(je, arguments, Qe);
      } else be = je.apply(this, arguments);
      return U.default(this, be);
    };
  }
  function Ve() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var at, qe = B.literal("apn", "fcm", "twilsock");
  c.Notifications = at = /* @__PURE__ */ (function(ae) {
    H.default(Te, ae);
    var Se = ct(Te);
    function Te(je) {
      var be, Qe, tt, gt, Pt, Et, At, Tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      re.default(this, Te), At = Se.call(this), Tt.logLevel = (be = Tt.logLevel) !== null && be !== void 0 ? be : "error", Ze.setLevel(Tt.logLevel);
      var ir = (Qe = Tt.productId) !== null && Qe !== void 0 ? Qe : "notifications", Lt = !Tt.twilsockClient, Xt = Tt.twilsockClient = (tt = Tt.twilsockClient) !== null && tt !== void 0 ? tt : new E.TwilsockClient(je, ir, Tt), Wt = (gt = Tt.notifications) !== null && gt !== void 0 ? gt : {}, jr = (Pt = (Et = Wt.region) !== null && Et !== void 0 ? Et : Tt.region) !== null && Pt !== void 0 ? Pt : "us1", Rr = "https://ers.".concat(jr, ".twilio.com/v1/registrations"), sr = Wt.ersUrl || Rr;
      At.connectors = /* @__PURE__ */ new Map();
      var wr = at._detectPlatform();
      return At.connectors.set("apn", new Ye("apn", {
        protocolVersion: 4,
        productId: ir,
        platform: wr
      }, Xt, sr)), At.connectors.set("fcm", new Ye("fcm", {
        protocolVersion: 3,
        productId: ir,
        platform: wr
      }, Xt, sr)), At.connectors.set("twilsock", new mt(ir, wr, Xt)), Xt.on("stateChanged", function(fr) {
        return At.emit("transportState", fr);
      }), At._connector("twilsock").on("stateChanged", function(fr, yr, Sr) {
        return At.emit("stateChanged", fr, yr, Sr);
      }), At._connector("apn").on("stateChanged", function(fr, yr, Sr) {
        return At.emit("stateChanged", fr, yr, Sr);
      }), At._connector("fcm").on("stateChanged", function(fr, yr, Sr) {
        return At.emit("stateChanged", fr, yr, Sr);
      }), Xt.on("message", function(fr, yr) {
        return At._routeMessage(fr, yr);
      }), At.updateToken(je), Lt && (Xt.connect(), At.twilsock = Xt), At;
    }
    return se.default(Te, [
      {
        key: "shutdown",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe() {
            return Q.default.wrap(function(gt) {
              for (; ; ) switch (gt.prev = gt.next) {
                case 0:
                  if (this.connectors.clear(), !this.twilsock) {
                    gt.next = 4;
                    break;
                  }
                  return gt.next = 4, this.twilsock.disconnect();
                case 4:
                case "end":
                  return gt.stop();
              }
            }, Qe, this);
          }));
          function be() {
            return je.apply(this, arguments);
          }
          return be;
        })()
      },
      {
        key: "setPushRegistrationId",
        value: function(be, Qe) {
          Ze.debug("Set ".concat(be, " push registration id '").concat(Qe, "'")), this._connector(be).setNotificationId(Qe);
        }
      },
      {
        key: "subscribe",
        value: function(be, Qe) {
          Ze.debug("Add ".concat(be, " subscriptions for message type ").concat(Qe)), this._connector(be).subscribe(Qe);
        }
      },
      {
        key: "unsubscribe",
        value: function(be, Qe) {
          Ze.debug("Remove ".concat(be, " subscriptions for message type ").concat(Qe)), this._connector(be).unsubscribe(Qe);
        }
      },
      {
        key: "updateToken",
        value: function(be) {
          this.connectors.forEach(function(Qe) {
            return Qe.updateToken(be);
          });
        }
      },
      {
        key: "commitChanges",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe() {
            var tt;
            return Q.default.wrap(function(Pt) {
              for (; ; ) switch (Pt.prev = Pt.next) {
                case 0:
                  return tt = [], this.connectors.forEach(function(Et) {
                    Et.isActive() && tt.push(Et.commitChanges());
                  }), Pt.next = 4, Promise.all(tt);
                case 4:
                case "end":
                  return Pt.stop();
              }
            }, Qe, this);
          }));
          function be() {
            return je.apply(this, arguments);
          }
          return be;
        })()
      },
      {
        key: "removeRegistrations",
        value: (function() {
          var je = ue.default(/* @__PURE__ */ Q.default.mark(function Qe(tt, gt) {
            return Q.default.wrap(function(Et) {
              for (; ; ) switch (Et.prev = Et.next) {
                case 0:
                  return Et.next = 2, this._connector(tt).sendDeviceRemoveRequest(gt);
                case 2:
                case "end":
                  return Et.stop();
              }
            }, Qe, this);
          }));
          function be(Qe, tt) {
            return je.apply(this, arguments);
          }
          return be;
        })()
      },
      {
        key: "handlePushNotification",
        value: function(be) {
          return {
            messageType: be.twi_message_type,
            payload: be.payload
          };
        }
      },
      {
        key: "_routeMessage",
        value: function(be, Qe) {
          Ze.debug("Notification message arrived: ", be, Qe), this.emit("message", be, Qe);
        }
      },
      {
        key: "_connector",
        value: function(be) {
          var Qe = this.connectors.get(be);
          if (!Qe) throw new Error("Unknown channel type: ".concat(be));
          return Qe;
        }
      }
    ], [{
      key: "_detectPlatform",
      value: function() {
        var be = "";
        return typeof navigator < "u" ? (be = "unknown", typeof navigator.product < "u" && (be = navigator.product), typeof navigator.userAgent < "u" && (be = navigator.userAgent)) : be = "web", be.substring(0, 128);
      }
    }]), Te;
  })(He), oe([
    B.validateTypes(qe, B.nonEmptyString),
    Ae("design:type", Function),
    Ae("design:paramtypes", [String, String]),
    Ae("design:returntype", void 0)
  ], c.Notifications.prototype, "setPushRegistrationId", null), oe([
    B.validateTypes(qe, B.nonEmptyString),
    Ae("design:type", Function),
    Ae("design:paramtypes", [String, String]),
    Ae("design:returntype", void 0)
  ], c.Notifications.prototype, "subscribe", null), oe([
    B.validateTypes(qe, B.nonEmptyString),
    Ae("design:type", Function),
    Ae("design:paramtypes", [String, String]),
    Ae("design:returntype", void 0)
  ], c.Notifications.prototype, "unsubscribe", null), oe([
    B.validateTypes(B.nonEmptyString),
    Ae("design:type", Function),
    Ae("design:paramtypes", [String]),
    Ae("design:returntype", void 0)
  ], c.Notifications.prototype, "updateToken", null), oe([
    B.validateTypesAsync(qe, B.nonEmptyString),
    Ae("design:type", Function),
    Ae("design:paramtypes", [String, String]),
    Ae("design:returntype", Promise)
  ], c.Notifications.prototype, "removeRegistrations", null), c.Notifications = at = oe([B.validateConstructorTypes(B.nonEmptyString, [
    B.pureObject,
    "undefined",
    B.literal(null)
  ]), Ae("design:paramtypes", [String, Object])], c.Notifications);
})), Iu = /* @__PURE__ */ J((() => {
  var c = $t(), e = Ut(), r = Br(), n = br(), i = _r(), s = qi(), l = hr(), b = Mt(), h = Bi(), E = Fa(), T = du(), S = pu(), j = $n(), V = vu(), O = [], X = e(O.sort), B = e(O.push), G = b(function() {
    O.sort(void 0);
  }), Y = b(function() {
    O.sort(null);
  }), ue = E("sort"), re = !b(function() {
    if (j) return j < 70;
    if (!(T && T > 3)) {
      if (S) return !0;
      if (V) return V < 603;
      for (var U = "", D = 65, Q, ve, L; D < 76; D++) {
        switch (Q = String.fromCharCode(D), D) {
          case 66:
          case 69:
          case 70:
          case 72:
            ve = 3;
            break;
          case 68:
          case 71:
            ve = 4;
            break;
          default:
            ve = 2;
        }
        for (L = 0; L < 47; L++) O.push({
          k: Q + L,
          v: ve
        });
      }
      for (O.sort(function(le, Re) {
        return Re.v - le.v;
      }), L = 0; L < O.length; L++)
        Q = O[L].k.charAt(0), U.charAt(U.length - 1) !== Q && (U += Q);
      return U !== "DGBEFHACIJK";
    }
  }), se = G || !Y || !ue || !re, H = function(U) {
    return function(D, Q) {
      if (Q === void 0) return -1;
      if (D === void 0) return 1;
      if (U !== void 0) return +U(D, Q) || 0;
      var ve = l(D), L = l(Q);
      return ve === L ? 0 : ve > L ? 1 : -1;
    };
  };
  c({
    target: "Array",
    proto: !0,
    forced: se
  }, { sort: function(D) {
    D !== void 0 && r(D);
    var Q = n(this);
    if (re) return D === void 0 ? X(Q) : X(Q, D);
    for (var ve = [], L = i(Q), le, Re = 0; Re < L; Re++) Re in Q && B(ve, Q[Re]);
    for (h(ve, H(D)), le = i(ve), Re = 0; Re < le; ) Q[Re] = ve[Re++];
    for (; Re < L; ) s(Q, Re++);
    return Q;
  } });
})), sl = /* @__PURE__ */ J(((c) => {
  Object.defineProperty(c, "__esModule", { value: !0 }), hi(), $a(), ua(), bi(), la(), _i(), Cn(), On();
  var e = oa(), r = bn(), n = mn(), i = Pn(), s = yn(), l = gn(), b = tn(), h = An();
  Da(), Mn(), Nn();
  var E = ha(), T = en(), S = ba(), j = Wi();
  ga();
  var V = ai();
  Ni(), xn(), ia(), Ui(), Vn(), jn();
  var O = Kn();
  ei(), xi(), ti(), ji();
  var X = Za();
  cn(), _a(), Jn(), zi(), Un(), wu();
  var B = wa();
  Xa();
  var G = Li();
  Ka();
  var Y = $i(), ue = ma();
  Iu();
  var re = _u();
  function se(x) {
    return x && typeof x == "object" && "default" in x ? x : { default: x };
  }
  function H(x) {
    if (x && x.__esModule) return x;
    var W = /* @__PURE__ */ Object.create(null);
    return x && Object.keys(x).forEach(function(y) {
      if (y !== "default") {
        var a = Object.getOwnPropertyDescriptor(x, y);
        Object.defineProperty(W, y, a.get ? a : {
          enumerable: !0,
          get: function() {
            return x[y];
          }
        });
      }
    }), W.default = x, Object.freeze(W);
  }
  var U = /* @__PURE__ */ se(e), D = /* @__PURE__ */ se(r), Q = /* @__PURE__ */ se(n), ve = /* @__PURE__ */ se(i), L = /* @__PURE__ */ se(s), le = /* @__PURE__ */ se(l), Re = /* @__PURE__ */ se(b), fe = /* @__PURE__ */ se(h), P = /* @__PURE__ */ se(E), oe = /* @__PURE__ */ se(T), Ae = /* @__PURE__ */ se(V), Ce = /* @__PURE__ */ H(O), $ = /* @__PURE__ */ se(X), He = /* @__PURE__ */ se(G), ot = /* @__PURE__ */ se(ue), vt = /* @__PURE__ */ H(re);
  function Ie(x, W, y, a) {
    var t = arguments.length, p = t < 3 ? W : a === null ? a = Object.getOwnPropertyDescriptor(W, y) : a, f;
    if ((typeof Reflect > "u" ? "undefined" : oe.default(Reflect)) === "object" && typeof Reflect.decorate == "function") p = Reflect.decorate(x, W, y, a);
    else for (var C = x.length - 1; C >= 0; C--) (f = x[C]) && (p = (t < 3 ? f(p) : t > 3 ? f(W, y, p) : f(W, y)) || p);
    return t > 3 && p && Object.defineProperty(W, y, p), p;
  }
  function z(x, W) {
    if ((typeof Reflect > "u" ? "undefined" : oe.default(Reflect)) === "object" && typeof Reflect.metadata == "function") return Reflect.metadata(x, W);
  }
  var F = /* @__PURE__ */ (function() {
    function x(W) {
      D.default(this, x), this.base = W, this.args = new Array(), this.paths = new Array();
    }
    return Q.default(x, [
      {
        key: "pathSegment",
        value: function(y) {
          return this.paths.push(encodeURIComponent(y)), this;
        }
      },
      {
        key: "queryParam",
        value: function(y, a) {
          return typeof a < "u" && this.args.push(encodeURIComponent(y) + "=" + encodeURIComponent(a)), this;
        }
      },
      {
        key: "build",
        value: function() {
          var y = this.base;
          return this.paths.length && (y += "/" + this.paths.join("/")), this.args.length && (y += "?" + this.args.join("&")), y;
        }
      }
    ]), x;
  })();
  function m(x) {
    var W = he();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function he() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var te = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = m(y);
    function y(a) {
      var t, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      return D.default(this, y), t = W.call(this), t.name = t.constructor.name, t.message = "".concat(a, " (status: ").concat(p, ", code: ").concat(f, ")"), t.status = p, t.code = f, t;
    }
    return Q.default(y);
  })(/* @__PURE__ */ Ae.default(Error)), De = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = m(y);
    function y(a) {
      var t, p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, C = arguments.length > 3 ? arguments[3] : void 0;
      return D.default(this, y), t = W.call(this, a, p, f), t.body = C, t;
    }
    return Q.default(y);
  })(te);
  function ee(x) {
    return JSON.parse(JSON.stringify(x));
  }
  function pe(x) {
    if (!(x === void 0 || $e(x))) throw new te("Invalid pageSize parameter. Expected a positive integer, was '".concat(x, "'."), 400, 20007);
  }
  function Ne(x) {
    return !isNaN(parseInt(x)) && isFinite(x);
  }
  function $e(x) {
    return Ne(x) && x > 0;
  }
  var Oe = Ce.getLogger("twilio-sync");
  function nt(x, W) {
    return ["".concat((/* @__PURE__ */ new Date()).toISOString(), " Sync ").concat(x, ":")].concat(Array.from(W));
  }
  var Ze = {
    setLevel: function(W) {
      Oe.setLevel(W);
    },
    trace: function() {
      if (Oe.getLevel() == Oe.levels.TRACE) {
        for (var W = arguments.length, y = new Array(W), a = 0; a < W; a++) y[a] = arguments[a];
        Oe.debug.apply(null, nt("T", y));
      }
    },
    debug: function() {
      for (var W = arguments.length, y = new Array(W), a = 0; a < W; a++) y[a] = arguments[a];
      Oe.debug.apply(null, nt("D", y));
    },
    info: function() {
      for (var W = arguments.length, y = new Array(W), a = 0; a < W; a++) y[a] = arguments[a];
      Oe.info.apply(null, nt("I", y));
    },
    warn: function() {
      for (var W = arguments.length, y = new Array(W), a = 0; a < W; a++) y[a] = arguments[a];
      Oe.warn.apply(null, nt("W", y));
    },
    error: function() {
      for (var W = arguments.length, y = new Array(W), a = 0; a < W; a++) y[a] = arguments[a];
      Oe.error.apply(null, nt("E", y));
    }
  }, Je = "/v4/Subscriptions", _t = "/v3/Maps", ft = "/v3/Lists", lt = "/v3/Documents", ze = "/v3/Streams", _e = "/v3/Insights";
  function de(x, W, y) {
    return x && typeof x[W] < "u" ? x[W] : y;
  }
  var ce = /* @__PURE__ */ (function() {
    function x() {
      var W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      D.default(this, x);
      var y = W.region || "us1", a = "https://cds.".concat(y, ".twilio.com"), t = W.cdsUri || a;
      this.settings = {
        subscriptionsUri: t + Je,
        documentsUri: t + lt,
        listsUri: t + ft,
        mapsUri: t + _t,
        streamsUri: t + ze,
        insightsUri: t + _e,
        sessionStorageEnabled: de(W.Sync, "enableSessionStorage", !0),
        productId: W.productId
      };
    }
    return Q.default(x, [
      {
        key: "subscriptionsUri",
        get: function() {
          return this.settings.subscriptionsUri;
        }
      },
      {
        key: "documentsUri",
        get: function() {
          return this.settings.documentsUri;
        }
      },
      {
        key: "listsUri",
        get: function() {
          return this.settings.listsUri;
        }
      },
      {
        key: "mapsUri",
        get: function() {
          return this.settings.mapsUri;
        }
      },
      {
        key: "streamsUri",
        get: function() {
          return this.settings.streamsUri;
        }
      },
      {
        key: "insightsUri",
        get: function() {
          return this.settings.insightsUri;
        }
      },
      {
        key: "backoffConfig",
        get: function() {
          return this.settings.backoffConfig || {};
        }
      },
      {
        key: "sessionStorageEnabled",
        get: function() {
          return this.settings.sessionStorageEnabled;
        }
      },
      {
        key: "productId",
        get: function() {
          return this.settings.productId;
        }
      }
    ]), x;
  })();
  function ye(x, W) {
    var y = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
    if (!y) {
      if (Array.isArray(x) || (y = Ye(x)) || W && x && typeof x.length == "number") {
        y && (x = y);
        var a = 0, t = function() {
        };
        return {
          s: t,
          n: function() {
            return a >= x.length ? { done: !0 } : {
              done: !1,
              value: x[a++]
            };
          },
          e: function(N) {
            throw N;
          },
          f: t
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, f = !1, C;
    return {
      s: function() {
        y = y.call(x);
      },
      n: function() {
        var N = y.next();
        return p = N.done, N;
      },
      e: function(N) {
        f = !0, C = N;
      },
      f: function() {
        try {
          !p && y.return != null && y.return();
        } finally {
          if (f) throw C;
        }
      }
    };
  }
  function Ye(x, W) {
    if (x) {
      if (typeof x == "string") return Fe(x, W);
      var y = Object.prototype.toString.call(x).slice(8, -1);
      if (y === "Object" && x.constructor && (y = x.constructor.name), y === "Map" || y === "Set") return Array.from(x);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return Fe(x, W);
    }
  }
  function Fe(x, W) {
    (W == null || W > x.length) && (W = x.length);
    for (var y = 0, a = new Array(W); y < W; y++) a[y] = x[y];
    return a;
  }
  var We = /* @__PURE__ */ (function() {
    function x(W) {
      D.default(this, x), this.localObject = W, this.pendingCorrelationId = null, this.pendingAction = null, this.established = !1, this.retryCount = 0;
    }
    return Q.default(x, [
      {
        key: "sid",
        get: function() {
          return this.localObject.sid;
        }
      },
      {
        key: "type",
        get: function() {
          return this.localObject.type;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.localObject.lastEventId;
        }
      },
      {
        key: "indexName",
        get: function() {
          return this.localObject.indexName;
        }
      },
      {
        key: "queryString",
        get: function() {
          return this.localObject.queryString;
        }
      },
      {
        key: "isEstablished",
        get: function() {
          return this.established;
        }
      },
      {
        key: "update",
        value: function(y, a) {
          this.localObject._update(y, a);
        }
      },
      {
        key: "updatePending",
        value: function(y, a) {
          this.pendingAction = y, this.pendingCorrelationId = a;
        }
      },
      {
        key: "reset",
        value: function() {
          this.updatePending(null, null), this.retryCount = 0, this.established = !1, this.setSubscriptionState("none");
        }
      },
      {
        key: "markAsFailed",
        value: function(y) {
          this.rejectedWithError = y.error, this.updatePending(null, null), this.localObject.reportFailure(new te("Failed to subscribe on service events: ".concat(y.error.message), y.error.status, y.error.code));
        }
      },
      {
        key: "complete",
        value: function(y) {
          this.updatePending(null, null), this.established = !0, this.localObject._advanceLastEventId(y);
        }
      },
      {
        key: "setSubscriptionState",
        value: function(y) {
          this.localObject._setSubscriptionState(y);
        }
      }
    ]), x;
  })(), ht = /* @__PURE__ */ (function() {
    function x(W) {
      var y = this;
      D.default(this, x), fe.default(this, "isConnected", !1), fe.default(this, "maxBatchSize", 100), fe.default(this, "subscriptionTtlTimer", null), fe.default(this, "pendingPokeReason", null), this.services = W, this.subscriptions = /* @__PURE__ */ new Map(), this.persisted = /* @__PURE__ */ new Map(), this.latestPokeResponseArrivalTimestampByCorrelationId = /* @__PURE__ */ new Map();
      var a = {
        randomisationFactor: 0.2,
        initialDelay: 100,
        maxDelay: 12e4
      };
      this.backoff = B.Backoff.exponential(Object.assign(a, this.services.config.backoffConfig)), this.backoff.on("ready", function() {
        var t = y.getSubscriptionUpdateBatch(), p = t.action, f = t.subscriptions;
        p ? y.applyNewSubscriptionUpdateBatch(p, f) : (y.backoff.reset(), Ze.debug("All subscriptions resolved."));
      });
    }
    return Q.default(x, [
      {
        key: "getSubscriptionUpdateBatch",
        value: function() {
          function y(p, f, C, _) {
            var N = [], ne = ye(p), Be;
            try {
              for (ne.s(); !(Be = ne.n()).done; ) {
                var Ge = $.default(Be.value, 2), Le = Ge[0], st = Ge[1];
                if (!f.get(Le) && C !== st.pendingAction && !st.rejectedWithError && (N.push(st), _ && N.length >= _))
                  break;
              }
            } catch (wt) {
              ne.e(wt);
            } finally {
              ne.f();
            }
            return N;
          }
          var a = y(this.subscriptions, this.persisted, "establish", this.maxBatchSize);
          if (a.length > 0) return {
            action: "establish",
            subscriptions: a
          };
          var t = y(this.persisted, this.subscriptions, "cancel", this.maxBatchSize);
          return t.length > 0 ? {
            action: "cancel",
            subscriptions: t
          } : {
            action: null,
            subscriptions: null
          };
        }
      },
      {
        key: "persist",
        value: function() {
          this.backoff.backoff();
        }
      },
      {
        key: "applyNewSubscriptionUpdateBatch",
        value: (function() {
          var W = U.default(/* @__PURE__ */ P.default.mark(function a(t, p) {
            var f = this, C, _, N, ne, Be, Ge, Le, st, wt, bt, Bt, pr, xt, er, M, A;
            return P.default.wrap(function(o) {
              for (; ; ) switch (o.prev = o.next) {
                case 0:
                  if (this.isConnected) {
                    o.next = 4;
                    break;
                  }
                  return Ze.debug("Twilsock connection (required for subscription) not ready; waiting…"), this.backoff.reset(), o.abrupt("return");
                case 4:
                  p = this.processLocalActions(t, p), C = (/* @__PURE__ */ new Date()).getTime(), _ = ye(p);
                  try {
                    for (_.s(); !(N = _.n()).done; )
                      ne = N.value, this.recordActionAttemptOn(ne, t, C);
                  } catch (u) {
                    _.e(u);
                  } finally {
                    _.f();
                  }
                  return Be = this.pendingPokeReason, this.pendingPokeReason = null, o.prev = 10, o.next = 13, this.request(t, C, Be, p);
                case 13:
                  Ge = o.sent, Le = Ge.body.max_batch_size, !isNaN(parseInt(Le)) && isFinite(Le) && Le > 0 && (this.maxBatchSize = Le), this.subscriptionTtlTimer || (st = Ge.body.ttl_in_s, wt = !isNaN(parseFloat(st)) && isFinite(st), bt = wt && st > 0, bt && (this.subscriptionTtlTimer = setTimeout(function() {
                    return f.onSubscriptionTtlElapsed();
                  }, st * 1e3))), t === "establish" && (Bt = Ge.body.estimated_delivery_in_ms, pr = !isNaN(parseFloat(Bt)) && isFinite(Bt), xt = pr && Bt > 0, xt ? setTimeout(function() {
                    return f.verifyPokeDelivery(C, Bt, p);
                  }, Bt) : Ze.error("Invalid timeout: ".concat(Bt)), p.filter(function(u) {
                    return u.pendingCorrelationId === C;
                  }).forEach(function(u) {
                    return u.setSubscriptionState("response_in_flight");
                  })), this.backoff.reset(), o.next = 26;
                  break;
                case 21:
                  o.prev = 21, o.t0 = o.catch(10), er = ye(p);
                  try {
                    for (er.s(); !(M = er.n()).done; )
                      A = M.value, this.recordActionFailureOn(A, t);
                  } catch (u) {
                    er.e(u);
                  } finally {
                    er.f();
                  }
                  o.t0 instanceof j.TransportUnavailableError ? (Ze.debug("Twilsock connection (required for subscription) not ready (c:".concat(C, "); waiting…")), this.backoff.reset()) : (Ze.debug("Failed an attempt to ".concat(t, " subscriptions (c:").concat(C, "); retrying"), o.t0), this.persist());
                case 26:
                case "end":
                  return o.stop();
              }
            }, a, this, [[10, 21]]);
          }));
          function y(a, t) {
            return W.apply(this, arguments);
          }
          return y;
        })()
      },
      {
        key: "verifyPokeDelivery",
        value: function(y, a, t) {
          var p = this, f = this.latestPokeResponseArrivalTimestampByCorrelationId.get(y), C = f ? (/* @__PURE__ */ new Date()).getTime() - f : a;
          if (C >= a)
            t.filter(function(N) {
              return N.pendingCorrelationId === y;
            }).forEach(function(N) {
              N.updatePending(null, null), N.retryCount++, p.persisted.delete(N.sid);
            }), this.persist(), this.latestPokeResponseArrivalTimestampByCorrelationId.delete(y);
          else {
            var _ = a - C;
            setTimeout(function() {
              return p.verifyPokeDelivery(y, a, t);
            }, _);
          }
        }
      },
      {
        key: "processLocalActions",
        value: function(y, a) {
          return y === "cancel" ? a.filter(function(t) {
            return !t.rejectedWithError;
          }) : a;
        }
      },
      {
        key: "recordActionAttemptOn",
        value: function(y, a, t) {
          if (y.setSubscriptionState("request_in_flight"), a === "establish")
            this.persisted.set(y.sid, y), y.updatePending(a, t);
          else {
            var p = this.persisted.get(y.sid);
            p && p.updatePending(a, t);
          }
        }
      },
      {
        key: "recordActionFailureOn",
        value: function(y, a) {
          y.setSubscriptionState("none"), y.updatePending(null, null), a === "establish" && this.persisted.delete(y.sid);
        }
      },
      {
        key: "request",
        value: function(y, a, t, p) {
          var f = p.map(function(N) {
            return {
              object_sid: N.sid,
              object_type: N.type,
              last_event_id: y === "establish" ? N.lastEventId : void 0,
              index_name: y === "establish" ? N.indexName : void 0,
              query_string: y === "establish" ? N.queryString : void 0
            };
          }), C = p.filter(function(N) {
            return N.retryCount > 0;
          }).length;
          Ze.debug("Attempting '".concat(y, "' request (c:").concat(a, "):"), f);
          var _ = {
            event_protocol_version: 4,
            action: y,
            correlation_id: a,
            retried_requests: C,
            ttl_in_s: -1,
            requests: f
          };
          return t === "ttl" && (_.reason = t), this.services.network.post(this.services.config.subscriptionsUri, _);
        }
      },
      {
        key: "add",
        value: function(y, a) {
          Ze.debug("Establishing intent to subscribe to ".concat(y));
          var t = this.subscriptions.get(y);
          t && a && t.lastEventId === a.lastEventId || (this.persisted.delete(y), this.subscriptions.set(y, new We(a)), this.persist());
        }
      },
      {
        key: "remove",
        value: function(y) {
          Ze.debug("Establishing intent to unsubscribe from ".concat(y)), this.subscriptions.delete(y) && this.persist();
        }
      },
      {
        key: "acceptMessage",
        value: function(y, a) {
          Ze.trace("Subscriptions received", y);
          var t = y.event_type, p = typeof y.events < "u" ? y.events : [y.event], f = y.correlation_id;
          f && this.latestPokeResponseArrivalTimestampByCorrelationId.set(f, (/* @__PURE__ */ new Date()).getTime());
          var C = ye(p), _;
          try {
            for (C.s(); !(_ = C.n()).done; ) {
              var N = _.value, ne = void 0;
              switch (y.event_type) {
                case "subscription_established":
                  this.applySubscriptionEstablishedMessage(N, f);
                  break;
                case "subscription_canceled":
                  this.applySubscriptionCancelledMessage(N, f);
                  break;
                case "subscription_failed":
                  this.applySubscriptionFailedMessage(N, f);
                  break;
                case (ne = t.match(/^(?:map|list|document|stream|live_query)_/) || {}).input:
                  var Be = void 0;
                  switch (ne[0]) {
                    case "map_":
                      Be = N.map_sid;
                      break;
                    case "list_":
                      Be = N.list_sid;
                      break;
                    case "document_":
                      Be = N.document_sid;
                      break;
                    case "stream_":
                      Be = N.stream_sid;
                      break;
                    case "live_query_":
                      Be = N.query_id, a = !1, y.strictly_ordered === !0 && (a = !0);
                      break;
                    default:
                      Be = void 0;
                  }
                  this.applyEventToSubscribedEntity(Be, N, t, a);
                  break;
                default:
                  Ze.debug("Dropping unknown message type ".concat(t));
              }
            }
          } catch (Ge) {
            C.e(Ge);
          } finally {
            C.f();
          }
        }
      },
      {
        key: "applySubscriptionEstablishedMessage",
        value: function(y, a) {
          var t = y.object_sid, p = this.persisted.get(y.object_sid);
          p && p.pendingCorrelationId === a ? y.replay_status === "interrupted" ? (Ze.debug("Event Replay for subscription to ".concat(t, " (c:").concat(a, ") interrupted; continuing eagerly.")), p.updatePending(null, null), this.persisted.delete(p.sid), this.backoff.reset()) : y.replay_status === "completed" && (Ze.debug("Event Replay for subscription to ".concat(t, " (c:").concat(a, ") completed. Subscription is ready.")), p.complete(y.last_event_id), this.persisted.set(y.object_sid, p), p.setSubscriptionState("established"), this.backoff.reset()) : Ze.debug("Late message for ".concat(y.object_sid, " (c:").concat(a, ") dropped.")), this.persist();
        }
      },
      {
        key: "applySubscriptionCancelledMessage",
        value: function(y, a) {
          var t = this.persisted.get(y.object_sid);
          t && t.pendingCorrelationId === a ? (t.updatePending(null, null), t.setSubscriptionState("none"), this.persisted.delete(y.object_sid)) : Ze.debug("Late message for ".concat(y.object_sid, " (c:").concat(a, ") dropped.")), this.persist();
        }
      },
      {
        key: "applySubscriptionFailedMessage",
        value: function(y, a) {
          var t = y.object_sid, p = this.subscriptions.get(t), f = this.persisted.get(t);
          p && f ? f.pendingCorrelationId === a && (Ze.error("Failed to subscribe on ".concat(f.sid), y.error), f.markAsFailed(y), f.setSubscriptionState("none")) : !p && f && (this.persisted.delete(t), f.setSubscriptionState("none")), this.persist();
        }
      },
      {
        key: "applyEventToSubscribedEntity",
        value: function(y, a, t, p) {
          var f = this;
          if (y) {
            p = p || (function() {
              var _ = f.persisted.get(y);
              return _ && _.isEstablished;
            })();
            var C = this.subscriptions.get(y);
            C ? (a.type = t, C.update(a, p)) : Ze.debug("Message dropped for SID '".concat(y, "', for which there is no subscription."));
          }
        }
      },
      {
        key: "onConnectionStateChanged",
        value: function(y) {
          this.isConnected = y, y && this.poke("reconnect");
        }
      },
      {
        key: "onSubscriptionTtlElapsed",
        value: function() {
          this.isConnected && this.poke("ttl");
        }
      },
      {
        key: "poke",
        value: function(y) {
          Ze.debug("Triggering event replay for all subscriptions, reason=".concat(y)), this.pendingPokeReason = y, this.subscriptionTtlTimer && (clearTimeout(this.subscriptionTtlTimer), this.subscriptionTtlTimer = null);
          var a = [], t = ye(this.persisted.values()), p;
          try {
            for (t.s(); !(p = t.n()).done; ) {
              var f = p.value;
              f.reset(), f.rejectedWithError && a.push(f);
            }
          } catch (ne) {
            t.e(ne);
          } finally {
            t.f();
          }
          this.persisted.clear();
          for (var C = 0, _ = a; C < _.length; C++) {
            var N = _[C];
            this.persisted.set(N.sid, N);
          }
          this.persist();
        }
      },
      {
        key: "shutdown",
        value: function() {
          this.backoff.reset(), this.subscriptions.clear();
        }
      }
    ]), x;
  })(), mt = function() {
    return crypto.randomUUID();
  }, ct = { v4: mt }, Ve = 4e3, at = 6e4, qe = 9e4, ae = 0.2;
  function Se(x) {
    if (x.body && x.body.message)
      return x.body.message;
    switch (x.status) {
      case 429:
        return "Throttled by server";
      case 404:
        return "Not found from server";
      default:
        return "Error from server";
    }
  }
  function Te(x) {
    return x.body ? x.body.code : 0;
  }
  function je(x) {
    return x.status === 409 ? new De(Se(x), x.status, Te(x), x.body) : x.status ? new te(Se(x), x.status, Te(x)) : x instanceof j.TransportUnavailableError ? x : new te(x.message, 0, 0);
  }
  var be = /* @__PURE__ */ (function() {
    function x(W, y, a) {
      D.default(this, x), this.clientInfo = W, this.config = y, this.transport = a;
    }
    return Q.default(x, [
      {
        key: "createHeaders",
        value: function() {
          return {
            "Content-Type": "application/json",
            "Twilio-Sync-Client-Info": JSON.stringify(this.clientInfo),
            "Twilio-Request-Id": "RQ" + ct.v4().replace(/-/g, "")
          };
        }
      },
      {
        key: "backoffConfig",
        value: function() {
          return Object.assign({
            min: Ve,
            max: at,
            maxAttemptsTime: qe,
            randomness: ae
          }, this.config.backoffConfig);
        }
      },
      {
        key: "executeWithRetry",
        value: function(y) {
          var a = this, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          return new Promise(function(p, f) {
            var C = [
              502,
              503,
              504
            ];
            t && C.push(429);
            var _ = new B.Retrier(a.backoffConfig());
            _.on("attempt", function() {
              y().then(function(N) {
                return _.succeeded(N);
              }).catch(function(N) {
                if (C.includes(N.status)) {
                  var ne = parseInt(N.headers ? N.headers["Retry-After"] : null);
                  _.failed(je(N), isNaN(ne) ? null : ne * 1e3);
                } else N.message === "Twilsock disconnected" ? _.failed(je(N)) : (_.removeAllListeners(), _.cancel(), f(je(N)));
              });
            }), _.on("succeeded", function(N) {
              p(N);
            }), _.on("cancelled", function(N) {
              return f(je(N));
            }), _.on("failed", function(N) {
              return f(je(N));
            }), _.start();
          });
        }
      },
      {
        key: "get",
        value: function(y) {
          var a = this, t = this.createHeaders();
          return Ze.debug("GET", y, "ID:", t["Twilio-Request-Id"]), this.executeWithRetry(function() {
            return a.transport.get(y, t, a.config.productId);
          }, !0);
        }
      },
      {
        key: "post",
        value: function(y, a, t) {
          var p = this, f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, C = this.createHeaders();
          return typeof t < "u" && t !== null && (C["If-Match"] = t), Ze.debug("POST", y, "ID:", C["Twilio-Request-Id"]), this.executeWithRetry(function() {
            return p.transport.post(y, C, a, p.config.productId);
          }, f);
        }
      },
      {
        key: "put",
        value: function(y, a, t) {
          var p = this, f = this.createHeaders();
          return typeof t < "u" && t !== null && (f["If-Match"] = t), Ze.debug("PUT", y, "ID:", f["Twilio-Request-Id"]), this.executeWithRetry(function() {
            return p.transport.put(y, f, a, p.config.productId);
          }, !1);
        }
      },
      {
        key: "delete",
        value: function(y) {
          var a = this, t = this.createHeaders();
          return Ze.debug("DELETE", y, "ID:", t["Twilio-Request-Id"]), this.executeWithRetry(function() {
            return a.transport.delete(y, t, a.config.productId);
          }, !1);
        }
      }
    ]), x;
  })(), Qe = /* @__PURE__ */ (function() {
    function x(W, y) {
      D.default(this, x), this.config = W, this.storageId = null;
      try {
        this.storage = y || sessionStorage;
      } catch {
      }
    }
    return Q.default(x, [
      {
        key: "storageKey",
        value: function(y, a) {
          return "".concat(this.storageId, "::").concat(y, "::").concat(a);
        }
      },
      {
        key: "isReady",
        get: function() {
          return this.config.sessionStorageEnabled && !!this.storageId;
        }
      },
      {
        key: "updateStorageId",
        value: function(y) {
          this.storageId = y;
        }
      },
      {
        key: "store",
        value: function(y, a, t) {
          return this.isReady ? this._store(this.storageKey(y, a), t) : null;
        }
      },
      {
        key: "read",
        value: function(y, a) {
          return this.isReady ? this._read(this.storageKey(y, a)) : null;
        }
      },
      {
        key: "remove",
        value: function(y, a, t) {
          if (!this.isReady) return null;
          try {
            this.storage.removeItem(this.storageKey(y, a)), t && this.storage.removeItem(this.storageKey(y, t));
          } catch {
          }
        }
      },
      {
        key: "update",
        value: function(y, a, t, p) {
          if (!this.isReady) return null;
          this._apply(this.storageKey(y, a), p), t && this._apply(this.storageKey(y, t), p);
        }
      },
      {
        key: "_store",
        value: function(y, a) {
          try {
            this.storage.setItem(y, JSON.stringify(a));
          } catch {
          }
        }
      },
      {
        key: "_read",
        value: function(y) {
          try {
            var a = this.storage.getItem(y);
            if (a) return JSON.parse(a);
          } catch {
          }
          return null;
        }
      },
      {
        key: "_apply",
        value: function(y, a) {
          var t = this._read(y);
          if (!t) return !1;
          this._store(y, Object.assign(t, a));
        }
      }
    ]), x;
  })();
  function tt(x, W) {
    var y = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
    if (!y) {
      if (Array.isArray(x) || (y = gt(x)) || W && x && typeof x.length == "number") {
        y && (x = y);
        var a = 0, t = function() {
        };
        return {
          s: t,
          n: function() {
            return a >= x.length ? { done: !0 } : {
              done: !1,
              value: x[a++]
            };
          },
          e: function(N) {
            throw N;
          },
          f: t
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, f = !1, C;
    return {
      s: function() {
        y = y.call(x);
      },
      n: function() {
        var N = y.next();
        return p = N.done, N;
      },
      e: function(N) {
        f = !0, C = N;
      },
      f: function() {
        try {
          !p && y.return != null && y.return();
        } finally {
          if (f) throw C;
        }
      }
    };
  }
  function gt(x, W) {
    if (x) {
      if (typeof x == "string") return Pt(x, W);
      var y = Object.prototype.toString.call(x).slice(8, -1);
      if (y === "Object" && x.constructor && (y = x.constructor.name), y === "Map" || y === "Set") return Array.from(x);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return Pt(x, W);
    }
  }
  function Pt(x, W) {
    (W == null || W > x.length) && (W = x.length);
    for (var y = 0, a = new Array(W); y < W; y++) a[y] = x[y];
    return a;
  }
  var Et = /* @__PURE__ */ (function() {
    function x(W, y) {
      D.default(this, x), this.services = W, this.removalHandler = y, this.subscriptionState = "none", this._attachedListeners = /* @__PURE__ */ new Map();
    }
    return Q.default(x, [
      {
        key: "_advanceLastEventId",
        value: function(y, a) {
        }
      },
      {
        key: "reportFailure",
        value: function(y) {
          y.status === 404 ? this.onRemoved(!1) : this.broadcastEventToListeners("failure", y);
        }
      },
      {
        key: "_subscribe",
        value: function() {
          this.services.router._subscribe(this.sid, this);
        }
      },
      {
        key: "_unsubscribe",
        value: function() {
          this.services.router._unsubscribe(this.sid);
        }
      },
      {
        key: "_setSubscriptionState",
        value: function(y) {
          this.subscriptionState = y, this.broadcastEventToListeners("_subscriptionStateChanged", y);
        }
      },
      {
        key: "close",
        value: function() {
          this._unsubscribe(), this.removalHandler != null && this.removalHandler(this.type, this.sid, this.uniqueName);
        }
      },
      {
        key: "attach",
        value: function(y) {
          var a = y.listenerUuid;
          this._attachedListeners.get(a) || (this._attachedListeners.size || this._subscribe(), this._attachedListeners.set(a, y));
        }
      },
      {
        key: "detach",
        value: function(y) {
          this._attachedListeners.delete(y), this._attachedListeners.size || this.close();
        }
      },
      {
        key: "broadcastEventToListeners",
        value: function(y) {
          for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++) t[p - 1] = arguments[p];
          var f = tt(this._attachedListeners.values()), C;
          try {
            for (f.s(); !(C = f.n()).done; ) {
              var _ = C.value;
              _.emit.apply(_, [y].concat(t));
            }
          } catch (N) {
            f.e(N);
          } finally {
            f.f();
          }
        }
      }
    ]), x;
  })(), At = /* @__PURE__ */ (function() {
    function x(W) {
      D.default(this, x), fe.default(this, "queuedRequests", []), fe.default(this, "isRequestInFlight", !1), this.inputMergingFunction = W;
    }
    return Q.default(x, [
      {
        key: "add",
        value: function(y, a) {
          var t = this, p = new Promise(function(f, C) {
            return t.queuedRequests.push({
              input: y,
              requestFunction: a,
              resolve: f,
              reject: C
            });
          });
          return this.wakeupQueue(), p;
        }
      },
      {
        key: "squashAndAdd",
        value: function(y, a) {
          var t = this.queuedRequests;
          this.queuedRequests = [];
          var p;
          t.length > 0 ? (p = t.map(function(C) {
            return C.input;
          }).reduce(this.inputMergingFunction), p = this.inputMergingFunction(p, y)) : p = y;
          var f = this.add(p, a);
          return t.forEach(function(C) {
            return f.then(C.resolve, C.reject);
          }), f;
        }
      },
      {
        key: "isEmpty",
        value: function() {
          return this.queuedRequests.length === 0 && !this.isRequestInFlight;
        }
      },
      {
        key: "wakeupQueue",
        value: function() {
          var y = this;
          if (!(this.queuedRequests.length === 0 || this.isRequestInFlight)) {
            var a = this.queuedRequests.shift();
            this.isRequestInFlight = !0, a.requestFunction(a.input).then(a.resolve, a.reject).then(function(t) {
              y.isRequestInFlight = !1, y.wakeupQueue();
            });
          }
        }
      }
    ]), x;
  })(), Tt = /* @__PURE__ */ (function() {
    function x(W) {
      D.default(this, x), fe.default(this, "queueByNamespaceKey", /* @__PURE__ */ new Map()), this.inputReducer = W;
    }
    return Q.default(x, [
      {
        key: "add",
        value: (function() {
          var W = U.default(/* @__PURE__ */ P.default.mark(function a(t, p, f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return _.abrupt("return", this.invokeQueueMethod(t, function(N) {
                    return N.add(p, f);
                  }));
                case 1:
                case "end":
                  return _.stop();
              }
            }, a, this);
          }));
          function y(a, t, p) {
            return W.apply(this, arguments);
          }
          return y;
        })()
      },
      {
        key: "squashAndAdd",
        value: (function() {
          var W = U.default(/* @__PURE__ */ P.default.mark(function a(t, p, f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return _.abrupt("return", this.invokeQueueMethod(t, function(N) {
                    return N.squashAndAdd(p, f);
                  }));
                case 1:
                case "end":
                  return _.stop();
              }
            }, a, this);
          }));
          function y(a, t, p) {
            return W.apply(this, arguments);
          }
          return y;
        })()
      },
      {
        key: "invokeQueueMethod",
        value: (function() {
          var W = U.default(/* @__PURE__ */ P.default.mark(function a(t, p) {
            var f, C;
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return this.queueByNamespaceKey.has(t) || this.queueByNamespaceKey.set(t, new At(this.inputReducer)), f = this.queueByNamespaceKey.get(t), C = p(f), this.queueByNamespaceKey.get(t).isEmpty() && this.queueByNamespaceKey.delete(t), N.abrupt("return", C);
                case 5:
                case "end":
                  return N.stop();
              }
            }, a, this);
          }));
          function y(a, t) {
            return W.apply(this, arguments);
          }
          return y;
        })()
      }
    ]), x;
  })();
  function ir(x) {
    var W = Lt();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function Lt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Xt = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = ir(y);
    function y() {
      var a;
      return D.default(this, y), a = W.call(this), a.closed = !1, a.uuid = mt(), a;
    }
    return Q.default(y, [
      {
        key: "listenerUuid",
        get: function() {
          return this.uuid;
        }
      },
      {
        key: "close",
        value: function() {
          this.removeAllListeners(), this.closed = !0;
        }
      },
      {
        key: "ensureNotClosed",
        value: function() {
          if (this.closed) throw new Error("Invalid operation on closed object");
        }
      }
    ]), y;
  })(Y.ReplayEventEmitter);
  function Wt(x) {
    var W = jr();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function jr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Rr = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = Wt(y);
    function y(a, t, p) {
      var f;
      return D.default(this, y), f = W.call(this, a, p), fe.default(ve.default(f), "isDeleted", !1), f.updateMergingQueue = new At(function(_, N) {
        return typeof N.ttl == "number" ? { ttl: N.ttl } : _;
      }), f.descriptor = t, f.descriptor.data = f.descriptor.data || {}, f.descriptor.date_updated = new Date(f.descriptor.date_updated), f;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.descriptor.url;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.descriptor.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.descriptor.last_event_id;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.descriptor.date_expires;
        }
      },
      {
        key: "type",
        get: function() {
          return "document";
        }
      },
      {
        key: "indexName",
        get: function() {
        }
      },
      {
        key: "queryString",
        get: function() {
        }
      },
      {
        key: "sid",
        get: function() {
          return this.descriptor.sid;
        }
      },
      {
        key: "data",
        get: function() {
          return this.descriptor.data;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.descriptor.date_updated;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.descriptor.unique_name || null;
        }
      },
      {
        key: "_update",
        value: function(t) {
          switch (t.date_created = new Date(t.date_created), t.type) {
            case "document_updated":
              if (t.id <= this.lastEventId) {
                Ze.trace("Document update skipped, current:", this.lastEventId, ", remote:", t.id);
                break;
              }
              var p = this.descriptor.data !== void 0 ? ee(this.descriptor.data) : null;
              this.descriptor.last_event_id = t.id, this.descriptor.revision = t.document_revision, this.descriptor.date_updated = t.date_created, this.descriptor.data = t.document_data, this.broadcastEventToListeners("updated", {
                data: t.document_data,
                isLocal: !1,
                previousData: p
              }), this.services.storage.update(this.type, this.sid, this.uniqueName, {
                last_event_id: t.id,
                revision: t.document_revision,
                date_updated: t.date_created,
                data: t.document_data
              });
              break;
            case "document_removed":
              this.onRemoved(!1);
          }
        }
      },
      {
        key: "set",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _ = this, N;
            return P.default.wrap(function(Be) {
              for (; ; ) switch (Be.prev = Be.next) {
                case 0:
                  return N = C || {}, Be.abrupt("return", this.updateMergingQueue.squashAndAdd(N, function(Ge) {
                    return _._setUnconditionally(f, Ge.ttl);
                  }));
                case 2:
                case "end":
                  return Be.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "mutate",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _ = this, N;
            return P.default.wrap(function(Be) {
              for (; ; ) switch (Be.prev = Be.next) {
                case 0:
                  return N = C || {}, Be.abrupt("return", this.updateMergingQueue.add(N, function(Ge) {
                    return _._setWithIfMatch(f, Ge.ttl);
                  }));
                case 2:
                case "end":
                  return Be.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "update",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return N.abrupt("return", this.mutate(function(ne) {
                    return Object.assign(ne, f);
                  }, C));
                case 1:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C;
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return N.next = 2, this._postUpdateToServer({ ttl: f });
                case 2:
                  C = N.sent, this.descriptor.date_expires = C.date_expires;
                case 4:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_setUnconditionally",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _;
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return ne.next = 2, this._postUpdateToServer({
                    data: f,
                    revision: void 0,
                    ttl: C
                  });
                case 2:
                  return _ = ne.sent, this._handleSuccessfulUpdateResult(_), ne.abrupt("return", this.descriptor.data);
                case 5:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_setWithIfMatch",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _, N, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  if (_ = f(ee(this.descriptor.data)), !_) {
                    Ge.next = 22;
                    break;
                  }
                  return N = this.revision, Ge.prev = 3, Ge.next = 6, this._postUpdateToServer({
                    data: _,
                    revision: N,
                    ttl: C
                  });
                case 6:
                  return ne = Ge.sent, this._handleSuccessfulUpdateResult(ne), Ge.abrupt("return", this.descriptor.data);
                case 11:
                  if (Ge.prev = 11, Ge.t0 = Ge.catch(3), Ge.t0.status !== 412) {
                    Ge.next = 19;
                    break;
                  }
                  return Ge.next = 16, this._softSync();
                case 16:
                  return Ge.abrupt("return", this._setWithIfMatch(f));
                case 19:
                  throw Ge.t0;
                case 20:
                  Ge.next = 23;
                  break;
                case 22:
                  return Ge.abrupt("return", this.descriptor.data);
                case 23:
                case "end":
                  return Ge.stop();
              }
            }, p, this, [[3, 11]]);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_handleSuccessfulUpdateResult",
        value: function(t) {
          if (!(t.last_event_id <= this.descriptor.last_event_id)) {
            var p = this.descriptor.data !== void 0 ? ee(this.descriptor.data) : null;
            this.descriptor.revision = t.revision, this.descriptor.data = t.data, this.descriptor.last_event_id = t.last_event_id, this.descriptor.date_expires = t.date_expires, this.descriptor.date_updated = new Date(t.date_updated), this.services.storage.update(this.type, this.sid, this.uniqueName, {
              last_event_id: t.last_event_id,
              revision: t.revision,
              date_updated: t.date_updated,
              data: t.data
            }), this.broadcastEventToListeners("updated", {
              data: this.descriptor.data,
              isLocal: !0,
              previousData: p
            });
          }
        }
      },
      {
        key: "_postUpdateToServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N;
            return P.default.wrap(function(Be) {
              for (; ; ) switch (Be.prev = Be.next) {
                case 0:
                  if (this.isDeleted) {
                    Be.next = 17;
                    break;
                  }
                  return C = { data: f.data }, f.ttl !== void 0 && (C.ttl = f.ttl), _ = f.revision, Be.prev = 4, Be.next = 7, this.services.network.post(this.uri, C, _);
                case 7:
                  return N = Be.sent, Be.abrupt("return", {
                    revision: N.body.revision,
                    data: f.data,
                    last_event_id: N.body.last_event_id,
                    date_updated: N.body.date_updated,
                    date_expires: N.body.date_expires
                  });
                case 11:
                  throw Be.prev = 11, Be.t0 = Be.catch(4), Be.t0.status === 404 && this.onRemoved(!1), Be.t0;
                case 15:
                  Be.next = 18;
                  break;
                case 17:
                  return Be.abrupt("return", Promise.reject(new te("The Document has been removed", 404, 54100)));
                case 18:
                case "end":
                  return Be.stop();
              }
            }, p, this, [[4, 11]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_softSync",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            var f = this;
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return _.abrupt("return", this.services.network.get(this.uri).then(function(N) {
                    var ne = {
                      type: "document_updated",
                      id: N.body.last_event_id,
                      document_revision: N.body.revision,
                      document_data: N.body.data,
                      date_created: N.body.date_updated
                    };
                    return f._update(ne), f;
                  }).catch(function(N) {
                    N.status === 404 ? f.onRemoved(!1) : Ze.error("Can't get updates for ".concat(f.sid, ":"), N);
                  }));
                case 1:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "onRemoved",
        value: function(t) {
          if (!this.isDeleted) {
            var p = this.descriptor.data !== void 0 ? ee(this.descriptor.data) : null;
            this.isDeleted = !0, this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", {
              isLocal: t,
              previousData: p
            });
          }
        }
      },
      {
        key: "removeDocument",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  if (this.isDeleted) {
                    C.next = 6;
                    break;
                  }
                  return C.next = 3, this.services.network.delete(this.uri);
                case 3:
                  this.onRemoved(!0), C.next = 7;
                  break;
                case 6:
                  return C.abrupt("return", Promise.reject(new te("The Document has been removed", 404, 54100)));
                case 7:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      }
    ], [{
      key: "type",
      get: function() {
        return "document";
      }
    }]), y;
  })(Et), sr = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = Wt(y);
    function y(a) {
      var t;
      return D.default(this, y), t = W.call(this), t.syncDocumentImpl = a, t.syncDocumentImpl.attach(ve.default(t)), t;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.syncDocumentImpl.uri;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.syncDocumentImpl.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.syncDocumentImpl.lastEventId;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.syncDocumentImpl.dateExpires;
        }
      },
      {
        key: "type",
        get: function() {
          return Rr.type;
        }
      },
      {
        key: "sid",
        get: function() {
          return this.syncDocumentImpl.sid;
        }
      },
      {
        key: "data",
        get: function() {
          return this.syncDocumentImpl.data;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.syncDocumentImpl.dateUpdated;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.syncDocumentImpl.uniqueName;
        }
      },
      {
        key: "set",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return this.ensureNotClosed(), N.abrupt("return", this.syncDocumentImpl.set(f, C));
                case 2:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "mutate",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return this.ensureNotClosed(), N.abrupt("return", this.syncDocumentImpl.mutate(f, C));
                case 2:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "update",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return this.ensureNotClosed(), N.abrupt("return", this.syncDocumentImpl.update(f, C));
                case 2:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncDocumentImpl.setTtl(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "removeDocument",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return this.ensureNotClosed(), C.abrupt("return", this.syncDocumentImpl.removeDocument());
                case 2:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "close",
        value: function() {
          He.default(Re.default(y.prototype), "close", this).call(this), this.syncDocumentImpl.detach(this.listenerUuid);
        }
      }
    ], [{
      key: "type",
      get: function() {
        return Rr.type;
      }
    }]), y;
  })(Xt);
  fe.default(sr, "removed", "removed"), fe.default(sr, "updated", "updated"), Ie([
    S.validateTypesAsync(S.pureObject, ["undefined", S.objectSchema("document metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [Object, Object]),
    z("design:returntype", Promise)
  ], sr.prototype, "set", null), Ie([
    S.validateTypesAsync("function", ["undefined", S.objectSchema("document metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [Function, Object]),
    z("design:returntype", Promise)
  ], sr.prototype, "mutate", null), Ie([
    S.validateTypesAsync(S.pureObject, ["undefined", S.objectSchema("document metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [Object, Object]),
    z("design:returntype", Promise)
  ], sr.prototype, "update", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number]),
    z("design:returntype", Promise)
  ], sr.prototype, "setTtl", null);
  var wr = /* @__PURE__ */ (function() {
    function x(W) {
      D.default(this, x), this.descriptor = W;
    }
    return Q.default(x, [
      {
        key: "url",
        get: function() {
          return this.descriptor.url;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.descriptor.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.descriptor.lastEventId;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.descriptor.dateUpdated;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.descriptor.dateExpires;
        }
      },
      {
        key: "index",
        get: function() {
          return this.descriptor.index;
        }
      },
      {
        key: "data",
        get: function() {
          return this.descriptor.data;
        }
      },
      {
        key: "cacheKey",
        get: function() {
          return this.index;
        }
      },
      {
        key: "update",
        value: function(y, a, t, p) {
          return this.descriptor.lastEventId = y, this.descriptor.revision = a, this.descriptor.data = t, this.descriptor.dateUpdated = p, this;
        }
      },
      {
        key: "updateDateExpires",
        value: function(y) {
          this.descriptor.dateExpires = y;
        }
      }
    ]), x;
  })(), fr = /* @__PURE__ */ (function() {
    function x(W, y) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      D.default(this, x), this.items = W, this.source = y, this.prevPageItemId = a, this.nextPageItemId = t;
    }
    return Q.default(x, [
      {
        key: "nextPage",
        value: (function() {
          var W = U.default(/* @__PURE__ */ P.default.mark(function a() {
            return P.default.wrap(function(p) {
              for (; ; ) switch (p.prev = p.next) {
                case 0:
                  if (this.hasNextPage) {
                    p.next = 2;
                    break;
                  }
                  throw new Error("No next page");
                case 2:
                  return p.abrupt("return", this.source({ nextPageItemId: this.nextPageItemId }));
                case 3:
                case "end":
                  return p.stop();
              }
            }, a, this);
          }));
          function y() {
            return W.apply(this, arguments);
          }
          return y;
        })()
      },
      {
        key: "prevPage",
        value: (function() {
          var W = U.default(/* @__PURE__ */ P.default.mark(function a() {
            return P.default.wrap(function(p) {
              for (; ; ) switch (p.prev = p.next) {
                case 0:
                  if (this.hasPrevPage) {
                    p.next = 2;
                    break;
                  }
                  throw new Error("No previous page");
                case 2:
                  return p.abrupt("return", this.source({ prevPageItemId: this.prevPageItemId }));
                case 3:
                case "end":
                  return p.stop();
              }
            }, a, this);
          }));
          function y() {
            return W.apply(this, arguments);
          }
          return y;
        })()
      },
      {
        key: "hasNextPage",
        get: function() {
          return this.nextPageItemId !== null;
        }
      },
      {
        key: "hasPrevPage",
        get: function() {
          return this.prevPageItemId !== null;
        }
      }
    ]), x;
  })();
  function yr(x, W) {
    var y = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
    if (!y) {
      if (Array.isArray(x) || (y = Sr(x)) || W && x && typeof x.length == "number") {
        y && (x = y);
        var a = 0, t = function() {
        };
        return {
          s: t,
          n: function() {
            return a >= x.length ? { done: !0 } : {
              done: !1,
              value: x[a++]
            };
          },
          e: function(N) {
            throw N;
          },
          f: t
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, f = !1, C;
    return {
      s: function() {
        y = y.call(x);
      },
      n: function() {
        var N = y.next();
        return p = N.done, N;
      },
      e: function(N) {
        f = !0, C = N;
      },
      f: function() {
        try {
          !p && y.return != null && y.return();
        } finally {
          if (f) throw C;
        }
      }
    };
  }
  function Sr(x, W) {
    if (x) {
      if (typeof x == "string") return Ur(x, W);
      var y = Object.prototype.toString.call(x).slice(8, -1);
      if (y === "Object" && x.constructor && (y = x.constructor.name), y === "Map" || y === "Set") return Array.from(x);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return Ur(x, W);
    }
  }
  function Ur(x, W) {
    (W == null || W > x.length) && (W = x.length);
    for (var y = 0, a = new Array(W); y < W; y++) a[y] = x[y];
    return a;
  }
  var zr = /* @__PURE__ */ (function() {
    function x(W, y) {
      D.default(this, x), this.balanceFactor = 0, this.key = W, this.value = y, this.parent = null, this.left = null, this.right = null;
    }
    return Q.default(x, [
      {
        key: "isRoot",
        get: function() {
          return this.parent === null;
        }
      },
      {
        key: "isLeaf",
        get: function() {
          return this.left === null && this.right === null;
        }
      },
      {
        key: "isLeftChild",
        get: function() {
          return this.parent.left === this;
        }
      },
      {
        key: "update",
        value: function(y) {
          this.value = y;
        }
      },
      {
        key: "replace",
        value: function(y, a) {
          y && (this.left === a ? this.left = a : this.right === a && (this.right = a));
        }
      }
    ]), x;
  })(), rn = /* @__PURE__ */ (function(x) {
    function W(y, a) {
      D.default(this, W), this.isLessThan = y || function(t, p) {
        return t < p;
      }, this.isEqual = a || function(t, p) {
        return t === p;
      }, this.root = null, this.count = null;
    }
    return Q.default(W, [
      {
        key: "size",
        get: function() {
          return this.count;
        }
      },
      {
        key: "clear",
        value: function() {
          this.root = null, this.count = 0;
        }
      },
      {
        key: "set",
        value: function(a, t) {
          var p = this.getNode(a);
          p ? p.update(t) : this.insert(a, t);
        }
      },
      {
        key: "insert",
        value: function(a, t) {
          var p = new zr(a, t);
          if (this.count++, !this.root) {
            this.root = p;
            return;
          }
          for (var f = this.root; ; ) if (this.isLessThan(a, f.key))
            if (f.left) f = f.left;
            else {
              f.left = p;
              break;
            }
          else if (f.right) f = f.right;
          else {
            f.right = p;
            break;
          }
          for (p.parent = f, f = p; f.parent; ) {
            var C = f.parent, _ = C.balanceFactor;
            if (f.isLeftChild ? C.balanceFactor++ : C.balanceFactor--, Math.abs(C.balanceFactor) < Math.abs(_)) break;
            if (C.balanceFactor < -1 || C.balanceFactor > 1) {
              this.rebalance(C);
              break;
            }
            f = C;
          }
        }
      },
      {
        key: "get",
        value: function(a) {
          for (var t = this.root; t; ) {
            if (this.isEqual(a, t.key)) return t.value;
            this.isLessThan(a, t.key) ? t = t.left : t = t.right;
          }
          return null;
        }
      },
      {
        key: "delete",
        value: function(a) {
          var t = this.getNode(a);
          if (!t || t.key !== a) return null;
          var p = t.parent, f = t.left, C = t.right;
          if (!!f != !!C) {
            var _ = f || C;
            !p && !_ ? this.root = null : p && !_ ? this.root = _ : (p.replace(t, null), this.rebalance(p));
          } else {
            for (var N = t.left; N.right; ) N = N.right;
            if (t.left === N)
              t.isRoot ? (this.root = N, N.parent = null) : (t.isLeftChild ? t.parent.left = N : t.parent.right = N, N.parent = t.parent), N.right = t.right, N.right.parent = N, N.balanceFactor = t.balanceFactor, t = {
                parent: N,
                isLeftChild: !0
              };
            else {
              var ne = N.parent, Be = N.left;
              ne.right = Be, Be && (Be.parent = ne), t.isRoot ? (this.root = N, N.parent = null) : (t.isLeftChild ? t.parent.left = N : t.parent.right = N, N.parent = t.parent), N.right = t.right, N.right.parent = N, N.left = t.left, N.left.parent = N, N.balanceFactor = t.balanceFactor, t = {
                parent: ne,
                isLeftChild: !1
              };
            }
          }
          for (this.count--; t.parent; ) {
            var Ge = t.parent, Le = Ge.balanceFactor;
            if (t.isLeftChild ? Ge.balanceFactor -= 1 : Ge.balanceFactor += 1, Math.abs(Ge.balanceFactor) > Math.abs(Le))
              if (Ge.balanceFactor < -1 || Ge.balanceFactor > 1)
                if (this.rebalance(Ge), Ge.parent.balanceFactor === 0) t = Ge.parent;
                else break;
              else break;
            else t = Ge;
          }
          return null;
        }
      },
      {
        key: "getNode",
        value: function(a) {
          for (var t = this.root; t; ) {
            if (this.isEqual(a, t.key)) return t;
            this.isLessThan(a, t.key) ? t = t.left : t = t.right;
          }
          return null;
        }
      },
      {
        key: "rebalance",
        value: function(a) {
          a.balanceFactor < 0 ? a.right.balanceFactor > 0 ? (this.rotateRight(a.right), this.rotateLeft(a)) : this.rotateLeft(a) : a.balanceFactor > 0 && (a.left.balanceFactor < 0 ? (this.rotateLeft(a.left), this.rotateRight(a)) : this.rotateRight(a));
        }
      },
      {
        key: "rotateLeft",
        value: function(a) {
          var t = a.right;
          a.right = t.left, t.left !== null && (t.left.parent = a), t.parent = a.parent, t.parent === null ? this.root = t : a.isLeftChild ? t.parent.left = t : t.parent.right = t, t.left = a, a.parent = t, a.balanceFactor = a.balanceFactor + 1 - Math.min(t.balanceFactor, 0), t.balanceFactor = t.balanceFactor + 1 - Math.max(a.balanceFactor, 0);
        }
      },
      {
        key: "rotateRight",
        value: function(a) {
          var t = a.left;
          a.left = t.right, t.right !== null && (t.right.parent = a), t.parent = a.parent, t.parent === null ? this.root = t : a.isLeftChild ? t.parent.left = t : t.parent.right = t, t.right = a, a.parent = t, a.balanceFactor = a.balanceFactor - 1 - Math.min(t.balanceFactor, 0), t.balanceFactor = t.balanceFactor - 1 - Math.max(a.balanceFactor, 0);
        }
      },
      {
        key: x,
        value: /* @__PURE__ */ P.default.mark(function y() {
          var a, t, p;
          return P.default.wrap(function(C) {
            for (; ; ) switch (C.prev = C.next) {
              case 0:
                a = yr(this.getIterator()), C.prev = 1, a.s();
              case 3:
                if ((t = a.n()).done) {
                  C.next = 9;
                  break;
                }
                return p = t.value, C.next = 7, p;
              case 7:
                C.next = 3;
                break;
              case 9:
                C.next = 14;
                break;
              case 11:
                C.prev = 11, C.t0 = C.catch(1), a.e(C.t0);
              case 14:
                return C.prev = 14, a.f(), C.finish(14);
              case 17:
              case "end":
                return C.stop();
            }
          }, y, this, [[
            1,
            11,
            14,
            17
          ]]);
        })
      },
      {
        key: "getIterator",
        value: /* @__PURE__ */ P.default.mark(function y() {
          var a, t, p, f = arguments;
          return P.default.wrap(function(_) {
            for (; ; ) switch (_.prev = _.next) {
              case 0:
                a = f.length > 0 && f[0] !== void 0 ? f[0] : null, t = this.root;
              case 2:
                if (!t) {
                  _.next = 8;
                  break;
                }
                if (!(this.isEqual(a, t.key) || a === null && !t.left)) {
                  _.next = 5;
                  break;
                }
                return _.abrupt("break", 8);
              case 5:
                this.isLessThan(a, t.key) || a === null ? t = t.left : t = t.right, _.next = 2;
                break;
              case 8:
                if (t) {
                  _.next = 10;
                  break;
                }
                return _.abrupt("return", null);
              case 10:
                p = !0;
              case 11:
                if (!p) {
                  _.next = 29;
                  break;
                }
                return _.next = 14, [t.key, t.value];
              case 14:
                if (p = !1, !t.right) {
                  _.next = 21;
                  break;
                }
                for (t = t.right; t.left; ) t = t.left;
                p = !0, _.next = 27;
                break;
              case 21:
                if (!t.parent) {
                  _.next = 26;
                  break;
                }
                p = t.parent.left === t, t = t.parent, _.next = 27;
                break;
              case 26:
                return _.abrupt("break", 37);
              case 27:
                _.next = 35;
                break;
              case 29:
                if (!t.parent) {
                  _.next = 34;
                  break;
                }
                p = t.parent.left === t, t = t.parent, _.next = 35;
                break;
              case 34:
                return _.abrupt("break", 37);
              case 35:
                _.next = 11;
                break;
              case 37:
                return _.abrupt("return", null);
              case 38:
              case "end":
                return _.stop();
            }
          }, y, this);
        })
      },
      {
        key: "getReverseIterator",
        value: /* @__PURE__ */ P.default.mark(function y() {
          var a, t, p, f = arguments;
          return P.default.wrap(function(_) {
            for (; ; ) switch (_.prev = _.next) {
              case 0:
                a = f.length > 0 && f[0] !== void 0 ? f[0] : null, t = this.root;
              case 2:
                if (!t) {
                  _.next = 8;
                  break;
                }
                if (!(this.isEqual(a, t.key) || a === null && !t.right)) {
                  _.next = 5;
                  break;
                }
                return _.abrupt("break", 8);
              case 5:
                !this.isLessThan(a, t.key) || a === null ? t = t.right : t = t.left, _.next = 2;
                break;
              case 8:
                if (t) {
                  _.next = 10;
                  break;
                }
                return _.abrupt("return", null);
              case 10:
                p = !0;
              case 11:
                if (!p) {
                  _.next = 29;
                  break;
                }
                return _.next = 14, [t.key, t.value];
              case 14:
                if (p = !1, !t.left) {
                  _.next = 21;
                  break;
                }
                for (t = t.left; t.right; ) t = t.right;
                p = !0, _.next = 27;
                break;
              case 21:
                if (!t.parent) {
                  _.next = 26;
                  break;
                }
                p = t.parent.right === t, t = t.parent, _.next = 27;
                break;
              case 26:
                return _.abrupt("break", 37);
              case 27:
                _.next = 35;
                break;
              case 29:
                if (!t.parent) {
                  _.next = 34;
                  break;
                }
                p = t.parent.right === t, t = t.parent, _.next = 35;
                break;
              case 34:
                return _.abrupt("break", 37);
              case 35:
                _.next = 11;
                break;
              case 37:
                return _.abrupt("return", null);
              case 38:
              case "end":
                return _.stop();
            }
          }, y, this);
        })
      }
    ]), W;
  })(Symbol.iterator);
  function Lr(x, W) {
    var y = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
    if (!y) {
      if (Array.isArray(x) || (y = Vr(x)) || W && x && typeof x.length == "number") {
        y && (x = y);
        var a = 0, t = function() {
        };
        return {
          s: t,
          n: function() {
            return a >= x.length ? { done: !0 } : {
              done: !1,
              value: x[a++]
            };
          },
          e: function(N) {
            throw N;
          },
          f: t
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, f = !1, C;
    return {
      s: function() {
        y = y.call(x);
      },
      n: function() {
        var N = y.next();
        return p = N.done, N;
      },
      e: function(N) {
        f = !0, C = N;
      },
      f: function() {
        try {
          !p && y.return != null && y.return();
        } finally {
          if (f) throw C;
        }
      }
    };
  }
  function Vr(x, W) {
    if (x) {
      if (typeof x == "string") return Kr(x, W);
      var y = Object.prototype.toString.call(x).slice(8, -1);
      if (y === "Object" && x.constructor && (y = x.constructor.name), y === "Map" || y === "Set") return Array.from(x);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return Kr(x, W);
    }
  }
  function Kr(x, W) {
    (W == null || W > x.length) && (W = x.length);
    for (var y = 0, a = new Array(W); y < W; y++) a[y] = x[y];
    return a;
  }
  var Er = /* @__PURE__ */ (function() {
    function x(W, y) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      D.default(this, x), this._data = W, this.lastEventId = y || 0, this.isLeftBound = a, this.isRightBound = t;
    }
    return Q.default(x, [{
      key: "isValid",
      get: function() {
        return !0;
      }
    }, {
      key: "value",
      get: function() {
        return this._data;
      }
    }]), x;
  })(), $r = /* @__PURE__ */ (function() {
    function x(W) {
      D.default(this, x), this.lastEventId = W, this.isLeftBound = !1, this.isRightBound = !1;
    }
    return Q.default(x, [{
      key: "isValid",
      get: function() {
        return !1;
      }
    }, {
      key: "value",
      get: function() {
        return null;
      }
    }]), x;
  })(), Cr = /* @__PURE__ */ (function() {
    function x() {
      D.default(this, x), fe.default(this, "items", new rn()), fe.default(this, "beginKey", null), fe.default(this, "endKey", null), this.items.clear();
    }
    return Q.default(x, [
      {
        key: "size",
        get: function() {
          return this.items.size;
        }
      },
      {
        key: "collectionBegin",
        get: function() {
          return this.beginKey;
        }
      },
      {
        key: "collectionEnd",
        get: function() {
          return this.endKey;
        }
      },
      {
        key: "has",
        value: function(y) {
          var a, t = this.items.get(y);
          return (a = t?.isValid) !== null && a !== void 0 ? a : !1;
        }
      },
      {
        key: "exists",
        value: function(y) {
          return !!this.items.get(y);
        }
      },
      {
        key: "getValue",
        value: function(y) {
          var a, t = this.items.get(y);
          return (a = t?.value) !== null && a !== void 0 ? a : null;
        }
      },
      {
        key: "get",
        value: function(y) {
          return this.items.get(y);
        }
      },
      {
        key: "getNextItem",
        value: function(y, a, t) {
          return y === null ? this.getFirstItem(a) : t ? this.getValue(y) : this.getAdjacentItem(y, a);
        }
      },
      {
        key: "getFirstItem",
        value: function(y) {
          var a = y === "asc" ? this.beginKey : this.endKey;
          if (this.exists(a)) {
            var t = this.items.get(a);
            return t.isValid ? t.value : this.getAdjacentItem(a, y);
          }
          return null;
        }
      },
      {
        key: "getAdjacentItem",
        value: function(y, a) {
          var t = Lr(a === "asc" ? this.items.getIterator(y) : this.items.getReverseIterator(y)), p;
          try {
            for (t.s(); !(p = t.n()).done; ) {
              var f = $.default(p.value, 2);
              f[0];
              var C = f[1];
              if (a === "asc" ? C.isRightBound : C.isLeftBound) break;
              if (C.isValid) return C.value;
            }
          } catch (_) {
            t.e(_);
          } finally {
            t.f();
          }
          return null;
        }
      },
      {
        key: "store",
        value: function(y, a, t) {
          var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, C = this.items.get(y);
          if (C && C.lastEventId > t) return C.value;
          if (this.items.set(y, new Er(a, t, C ? C.isLeftBound && p : p, C ? C.isRightBound && f : f)), this.beginKey !== null && y < this.beginKey) {
            var _ = this.items.get(this.beginKey);
            _ && (_.isLeftBound = !1), this.beginKey = y;
          }
          if (this.endKey !== null && this.endKey < y) {
            var N = this.items.get(this.endKey);
            N && (N.isRightBound = !1), this.endKey = y;
          }
          return a;
        }
      },
      {
        key: "populate",
        value: function(y, a, t) {
          var p = this;
          if (y.length) {
            var f = ot.default(y);
            if (f.sort(function(N, ne) {
              return N.cacheKey === ne.cacheKey ? 0 : N.cacheKey > ne.cacheKey ? 1 : -1;
            }), f.forEach(function(N, ne) {
              p.store(N.cacheKey, N, N.lastEventId, ne === 0, ne === f.length - 1);
            }), a) {
              var C = f[0].cacheKey;
              (!this.beginKey || C < this.beginKey) && (this.beginKey = C);
            }
            if (t) {
              var _ = f[f.length - 1].cacheKey;
              (!this.endKey || this.endKey < _) && (this.endKey = _);
            }
          }
        }
      },
      {
        key: "delete",
        value: function(y, a) {
          var t = this.items.get(y);
          (t === null || a === null || t.lastEventId < a) && this.items.set(y, new $r(a));
        }
      },
      {
        key: "isKnown",
        value: function(y, a) {
          var t = this.items.get(y);
          return t && t.lastEventId >= a;
        }
      },
      {
        key: "getIterator",
        value: /* @__PURE__ */ P.default.mark(function W(y) {
          var a, t, p, f;
          return P.default.wrap(function(_) {
            for (; ; ) switch (_.prev = _.next) {
              case 0:
                if (y === null && this.beginKey !== null && (y = this.beginKey), y !== null) {
                  _.next = 3;
                  break;
                }
                return _.abrupt("return");
              case 3:
                a = Lr(this.items.getIterator(y)), _.prev = 4, a.s();
              case 6:
                if ((t = a.n()).done) {
                  _.next = 16;
                  break;
                }
                if (p = $.default(t.value, 2), p[0], f = p[1], f.isValid) {
                  _.next = 10;
                  break;
                }
                return _.abrupt("continue", 14);
              case 10:
                return _.next = 12, f;
              case 12:
                if (!f.isRightBound) {
                  _.next = 14;
                  break;
                }
                return _.abrupt("break", 16);
              case 14:
                _.next = 6;
                break;
              case 16:
                _.next = 21;
                break;
              case 18:
                _.prev = 18, _.t0 = _.catch(4), a.e(_.t0);
              case 21:
                return _.prev = 21, a.f(), _.finish(21);
              case 24:
              case "end":
                return _.stop();
            }
          }, W, this, [[
            4,
            18,
            21,
            24
          ]]);
        })
      },
      {
        key: "getReverseIterator",
        value: /* @__PURE__ */ P.default.mark(function W(y) {
          var a, t, p, f;
          return P.default.wrap(function(_) {
            for (; ; ) switch (_.prev = _.next) {
              case 0:
                if (y === null && this.endKey !== null && (y = this.endKey), y !== null) {
                  _.next = 3;
                  break;
                }
                return _.abrupt("return");
              case 3:
                a = Lr(this.items.getReverseIterator(y)), _.prev = 4, a.s();
              case 6:
                if ((t = a.n()).done) {
                  _.next = 16;
                  break;
                }
                if (p = $.default(t.value, 2), p[0], f = p[1], f.isValid) {
                  _.next = 10;
                  break;
                }
                return _.abrupt("continue", 14);
              case 10:
                return _.next = 12, f;
              case 12:
                if (!f.isLeftBound) {
                  _.next = 14;
                  break;
                }
                return _.abrupt("break", 16);
              case 14:
                _.next = 6;
                break;
              case 16:
                _.next = 21;
                break;
              case 18:
                _.prev = 18, _.t0 = _.catch(4), a.e(_.t0);
              case 21:
                return _.prev = 21, a.f(), _.finish(21);
              case 24:
              case "end":
                return _.stop();
            }
          }, W, this, [[
            4,
            18,
            21,
            24
          ]]);
        })
      },
      {
        key: "forEach",
        value: function(y) {
          if (this.items) {
            var a = Lr(this.items), t;
            try {
              for (a.s(); !(t = a.n()).done; ) {
                var p = $.default(t.value, 2), f = p[0], C = p[1];
                C.isValid && y(f, C.value);
              }
            } catch (_) {
              a.e(_);
            } finally {
              a.f();
            }
          }
        }
      }
    ]), x;
  })();
  function ar(x) {
    return x.reverse();
  }
  function kr(x) {
    return x.length > 0 ? x[x.length - 1] : void 0;
  }
  function Zt(x) {
    return x.length > 0 ? x[0] : void 0;
  }
  function dr(x, W) {
    var y = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
    if (!y) {
      if (Array.isArray(x) || (y = Jr(x)) || W && x && typeof x.length == "number") {
        y && (x = y);
        var a = 0, t = function() {
        };
        return {
          s: t,
          n: function() {
            return a >= x.length ? { done: !0 } : {
              done: !1,
              value: x[a++]
            };
          },
          e: function(N) {
            throw N;
          },
          f: t
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, f = !1, C;
    return {
      s: function() {
        y = y.call(x);
      },
      n: function() {
        var N = y.next();
        return p = N.done, N;
      },
      e: function(N) {
        f = !0, C = N;
      },
      f: function() {
        try {
          !p && y.return != null && y.return();
        } finally {
          if (f) throw C;
        }
      }
    };
  }
  function Jr(x, W) {
    if (x) {
      if (typeof x == "string") return Or(x, W);
      var y = Object.prototype.toString.call(x).slice(8, -1);
      if (y === "Object" && x.constructor && (y = x.constructor.name), y === "Map" || y === "Set") return Array.from(x);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return Or(x, W);
    }
  }
  function Or(x, W) {
    (W == null || W > x.length) && (W = x.length);
    for (var y = 0, a = new Array(W); y < W; y++) a[y] = x[y];
    return a;
  }
  function rr(x, W) {
    var y = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(x);
      W && (a = a.filter(function(t) {
        return Object.getOwnPropertyDescriptor(x, t).enumerable;
      })), y.push.apply(y, a);
    }
    return y;
  }
  function lr(x) {
    for (var W = 1; W < arguments.length; W++) {
      var y = arguments[W] != null ? arguments[W] : {};
      W % 2 ? rr(Object(y), !0).forEach(function(a) {
        fe.default(x, a, y[a]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(y)) : rr(Object(y)).forEach(function(a) {
        Object.defineProperty(x, a, Object.getOwnPropertyDescriptor(y, a));
      });
    }
    return x;
  }
  function nn(x) {
    var W = an();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function an() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Ee = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = nn(y);
    function y(a, t, p) {
      var f;
      return D.default(this, y), f = W.call(this, a, p), f.updateMergingQueue = new Tt(function(_, N) {
        return typeof N.ttl == "number" ? { ttl: N.ttl } : _;
      }), f.cache = new Cr(), f.descriptor = t, f.descriptor.date_updated = new Date(f.descriptor.date_updated), f;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.descriptor.url;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.descriptor.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.descriptor.last_event_id;
        }
      },
      {
        key: "links",
        get: function() {
          return this.descriptor.links;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.descriptor.date_expires;
        }
      },
      {
        key: "type",
        get: function() {
          return "list";
        }
      },
      {
        key: "indexName",
        get: function() {
        }
      },
      {
        key: "queryString",
        get: function() {
        }
      },
      {
        key: "sid",
        get: function() {
          return this.descriptor.sid;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.descriptor.unique_name || null;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.descriptor.date_updated;
        }
      },
      {
        key: "_addOrUpdateItemOnServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _, N) {
            var ne, Be;
            return P.default.wrap(function(Le) {
              for (; ; ) switch (Le.prev = Le.next) {
                case 0:
                  return ne = { data: C }, N !== void 0 && (ne.ttl = N), Le.next = 4, this.services.network.post(f, ne, _);
                case 4:
                  return Be = Le.sent, Be.body.data = C, Be.body.date_updated = new Date(Be.body.date_updated), Le.abrupt("return", Be.body);
                case 8:
                case "end":
                  return Le.stop();
              }
            }, p, this);
          }));
          function t(p, f, C, _) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "push",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _, N, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return _ = (C || {}).ttl, Ge.next = 3, this._addOrUpdateItemOnServer(this.links.items, f, void 0, _);
                case 3:
                  return N = Ge.sent, ne = Number(N.index), this._handleItemMutated(ne, N.url, N.last_event_id, N.revision, f, N.date_updated, N.date_expires, !0, !1), Ge.abrupt("return", this.cache.getValue(ne));
                case 7:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "set",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N = this, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return ne = _ || {}, Ge.abrupt("return", this.updateMergingQueue.squashAndAdd(f, ne, function(Le) {
                    return N._updateItemUnconditionally(f, C, Le.ttl);
                  }));
                case 2:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_updateItemUnconditionally",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return Ge.next = 2, this.get(f);
                case 2:
                  return N = Ge.sent, Ge.next = 5, this._addOrUpdateItemOnServer(N.url, C, void 0, _);
                case 5:
                  return ne = Ge.sent, this._handleItemMutated(f, ne.url, ne.last_event_id, ne.revision, ne.data, ne.date_updated, ne.date_expires, !1, !1), Ge.abrupt("return", this.cache.getValue(f));
                case 8:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_updateItemWithIfMatch",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N, ne, Be, Ge;
            return P.default.wrap(function(st) {
              for (; ; ) switch (st.prev = st.next) {
                case 0:
                  return st.next = 2, this.get(f);
                case 2:
                  if (N = st.sent, ne = C(ee(N.data)), !ne) {
                    st.next = 25;
                    break;
                  }
                  return Be = N.revision, st.prev = 6, st.next = 9, this._addOrUpdateItemOnServer(N.url, ne, Be, _);
                case 9:
                  return Ge = st.sent, this._handleItemMutated(f, Ge.url, Ge.last_event_id, Ge.revision, Ge.data, Ge.date_updated, Ge.date_expires, !1, !1), st.abrupt("return", this.cache.getValue(f));
                case 14:
                  if (st.prev = 14, st.t0 = st.catch(6), st.t0.status !== 412) {
                    st.next = 22;
                    break;
                  }
                  return st.next = 19, this._getItemFromServer(f);
                case 19:
                  return st.abrupt("return", this._updateItemWithIfMatch(f, C, _));
                case 22:
                  throw st.t0;
                case 23:
                  st.next = 26;
                  break;
                case 25:
                  return st.abrupt("return", N);
                case 26:
                case "end":
                  return st.stop();
              }
            }, p, this, [[6, 14]]);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "mutate",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N = this, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return ne = _ || {}, Ge.abrupt("return", this.updateMergingQueue.add(f, ne, function(Le) {
                    return N._updateItemWithIfMatch(f, C, Le.ttl);
                  }));
                case 2:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "update",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return ne.abrupt("return", this.mutate(f, function(Be) {
                    return Object.assign(Be, C);
                  }, _));
                case 1:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "remove",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N;
            return P.default.wrap(function(Be) {
              for (; ; ) switch (Be.prev = Be.next) {
                case 0:
                  return Be.next = 2, this.get(f);
                case 2:
                  return C = Be.sent, _ = ee(C.data), Be.next = 6, this.services.network.delete(C.url);
                case 6:
                  N = Be.sent, this._handleItemRemoved(f, N.body.last_event_id, _, new Date(N.body.date_updated), !1);
                case 8:
                case "end":
                  return Be.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "get",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C;
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  if (C = this.cache.get(f), !C) {
                    N.next = 3;
                    break;
                  }
                  return N.abrupt("return", C.value);
                case 3:
                  return N.abrupt("return", this._getItemFromServer(f));
                case 4:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_getItemFromServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C;
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return N.next = 2, this._queryItemsFromServer({ index: f });
                case 2:
                  if (C = N.sent, !(C.items.length < 1)) {
                    N.next = 7;
                    break;
                  }
                  throw new te("No item with index ".concat(f, " found"), 404, 54151);
                case 7:
                  return N.abrupt("return", C.items[0]);
                case 8:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "queryItems",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N, ne, Be, Ge, Le, st, wt, bt, Bt, pr, xt, er, M, A, k, o, u, I, d, v, g, w, R, me, ge, Me, Ue;
            return P.default.wrap(function(Xe) {
              for (; ; ) switch (Xe.prev = Xe.next) {
                case 0:
                  if (!f.index) {
                    Xe.next = 5;
                    break;
                  }
                  if (wt = this.cache.get(f.index), !wt) {
                    Xe.next = 4;
                    break;
                  }
                  return Xe.abrupt("return", this.makePaginator(wt.isValid ? [wt.value] : [], f, !1, !1));
                case 4:
                  return Xe.abrupt("return", this._querySingleItemFromServer(f.index));
                case 5:
                  bt = !!f.nextPageItemId || !!f.prevPageItemId, Bt = lr({}, f), bt && (f.from = (pr = (xt = f.nextPageItemId) !== null && xt !== void 0 ? xt : f.prevPageItemId) !== null && pr !== void 0 ? pr : f.from), er = !!f.prevPageItemId, M = f.order === "desc" ? er ? this.cache.getIterator((C = (_ = f.prevPageItemId) !== null && _ !== void 0 ? _ : f.from) !== null && C !== void 0 ? C : null) : this.cache.getReverseIterator((N = (ne = f.nextPageItemId) !== null && ne !== void 0 ? ne : f.from) !== null && N !== void 0 ? N : null) : er ? this.cache.getReverseIterator((Be = (Ge = f.prevPageItemId) !== null && Ge !== void 0 ? Ge : f.from) !== null && Be !== void 0 ? Be : null) : this.cache.getIterator((Le = (st = f.nextPageItemId) !== null && st !== void 0 ? st : f.from) !== null && Le !== void 0 ? Le : null), A = [], k = bt ? f.limit + 1 : f.limit, o = dr(M), Xe.prev = 13, o.s();
                case 15:
                  if ((u = o.n()).done) {
                    Xe.next = 25;
                    break;
                  }
                  if (I = u.value, !(bt && I.value.index == f.from)) {
                    Xe.next = 19;
                    break;
                  }
                  return Xe.abrupt("continue", 23);
                case 19:
                  if (A.push(I.value), !(A.length >= f.limit)) {
                    Xe.next = 23;
                    break;
                  }
                  return er && ar(A), Xe.abrupt("return", this.makePaginator(A, f, this._prevPageAllowed(A, f.order), this._nextPageAllowed(A, f.order)));
                case 23:
                  Xe.next = 15;
                  break;
                case 25:
                  Xe.next = 30;
                  break;
                case 27:
                  Xe.prev = 27, Xe.t0 = Xe.catch(13), o.e(Xe.t0);
                case 30:
                  return Xe.prev = 30, o.f(), Xe.finish(30);
                case 33:
                  if (A.length > 0 && (f.from = kr(A).index), d = Math.max(k - A.length, 10), er && (f.order = f.order === "desc" ? "asc" : "desc"), v = f.from !== (Bt.order === "desc" ? er ? this.cache.collectionEnd : this.cache.collectionBegin : er ? this.cache.collectionBegin : this.cache.collectionEnd), !v) {
                    Xe.next = 66;
                    break;
                  }
                  return Xe.next = 40, this._queryItemsFromServer(lr(lr({}, f), {}, { limit: d }));
                case 40:
                  g = Xe.sent, w = g.items, Bt.order === "desc" ? (R = !g.hasNextPage, me = !g.hasPrevPage) : (R = !g.hasPrevPage, me = !g.hasNextPage), this.cache.populate(w, R, me), ge = dr(w), Xe.prev = 45, ge.s();
                case 47:
                  if ((Me = ge.n()).done) {
                    Xe.next = 56;
                    break;
                  }
                  if (Ue = Me.value, !((A.length > 0 || bt) && Ue.index == f.from)) {
                    Xe.next = 51;
                    break;
                  }
                  return Xe.abrupt("continue", 54);
                case 51:
                  if (er ? A.unshift(Ue) : A.push(Ue), !(A.length >= f.limit)) {
                    Xe.next = 54;
                    break;
                  }
                  return Xe.abrupt("break", 56);
                case 54:
                  Xe.next = 47;
                  break;
                case 56:
                  Xe.next = 61;
                  break;
                case 58:
                  Xe.prev = 58, Xe.t1 = Xe.catch(45), ge.e(Xe.t1);
                case 61:
                  return Xe.prev = 61, ge.f(), Xe.finish(61);
                case 64:
                  Xe.next = 67;
                  break;
                case 66:
                  er && ar(A);
                case 67:
                  return Xe.abrupt("return", this.makePaginator(A, Bt, this._prevPageAllowed(A, Bt.order), this._nextPageAllowed(A, Bt.order)));
                case 68:
                case "end":
                  return Xe.stop();
              }
            }, p, this, [[
              13,
              27,
              30,
              33
            ], [
              45,
              58,
              61,
              64
            ]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_prevPageAllowed",
        value: function(t, p) {
          return t.length > 0 && Zt(t).index !== (p === "desc" ? this.cache.collectionEnd : this.cache.collectionBegin);
        }
      },
      {
        key: "_nextPageAllowed",
        value: function(t, p) {
          return t.length > 0 && kr(t).index !== (p === "desc" ? this.cache.collectionBegin : this.cache.collectionEnd);
        }
      },
      {
        key: "makePaginator",
        value: function(t, p, f, C) {
          var _ = this;
          p.nextPageItemId = p.prevPageItemId = null;
          var N = f && this._prevPageAllowed(t, p.order), ne = C && this._nextPageAllowed(t, p.order);
          return new fr(t, function(Be) {
            return _.queryItems(lr(lr({}, p), Be));
          }, N ? Zt(t).index : null, ne ? kr(t).index : null);
        }
      },
      {
        key: "_querySingleItemFromServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C;
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return N.next = 2, this._queryItemsFromServer({ index: f });
                case 2:
                  return C = N.sent, C.items.length === 0 && this.cache.exists(f) && this.cache.delete(f, null), N.abrupt("return", C);
                case 5:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_queryItemsFromServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N = this, ne, Be, Ge, Le;
            return P.default.wrap(function(wt) {
              for (; ; ) switch (wt.prev = wt.next) {
                case 0:
                  return ne = new F(this.links.items).queryParam("HideExpired", !0).queryParam("Index", f.index).queryParam("PageToken", f.pageToken).queryParam("From", f.from).queryParam("PageSize", f.limit).queryParam("Order", f.order).build(), wt.next = 3, this.services.network.get(ne);
                case 3:
                  return Be = wt.sent, Ge = ((C = (_ = Be.body) === null || _ === void 0 ? void 0 : _.items) !== null && C !== void 0 ? C : []).map(function(bt) {
                    bt.date_updated = new Date(bt.date_updated);
                    var Bt = N.cache.get(bt.index);
                    if (Bt && Bt.value) N._handleItemMutated(bt.index, bt.url, bt.last_event_id, bt.revision, bt.data, bt.date_updated, bt.date_expires, !1, !0);
                    else {
                      var pr = new wr({
                        index: bt.index,
                        url: bt.url,
                        lastEventId: bt.last_event_id,
                        revision: bt.revision,
                        data: bt.data,
                        dateUpdated: bt.date_updated,
                        dateExpires: bt.date_expires
                      });
                      N.cache.store(bt.index, pr, bt.last_event_id);
                    }
                    return N.cache.getValue(bt.index);
                  }), Le = Be.body.meta, wt.abrupt("return", this.makePaginator(Ge, f, !!Le.previous_token, !!Le.next_token));
                case 7:
                case "end":
                  return wt.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "getItems",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return f = f || {}, pe(f.pageSize), f.limit = f.pageSize || f.limit || 50, f.order = f.order || "asc", _.abrupt("return", this.queryItems(f));
                case 5:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "getContext",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            var f;
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  if (this.context) {
                    _.next = 5;
                    break;
                  }
                  return _.next = 3, this.services.network.get(this.links.context);
                case 3:
                  f = _.sent, this._updateContextIfRequired(f.body.data, f.body.last_event_id);
                case 5:
                  return _.abrupt("return", this.context);
                case 6:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _;
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return ne.prev = 0, C = { ttl: f }, ne.next = 4, this.services.network.post(this.uri, C);
                case 4:
                  _ = ne.sent, this.descriptor.date_expires = _.body.date_expires, ne.next = 12;
                  break;
                case 8:
                  throw ne.prev = 8, ne.t0 = ne.catch(0), ne.t0.status === 404 && this.onRemoved(!1), ne.t0;
                case 12:
                case "end":
                  return ne.stop();
              }
            }, p, this, [[0, 8]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setItemTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _, N, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return Ge.next = 2, this.get(f);
                case 2:
                  return _ = Ge.sent, N = { ttl: C }, Ge.next = 6, this.services.network.post(_.url, N);
                case 6:
                  ne = Ge.sent, _.updateDateExpires(ne.body.date_expires);
                case 8:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "removeList",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return C.next = 2, this.services.network.delete(this.uri);
                case 2:
                  this.onRemoved(!0);
                case 3:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "onRemoved",
        value: function(t) {
          this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", { isLocal: t });
        }
      },
      {
        key: "shouldIgnoreEvent",
        value: function(t, p) {
          return this.cache.isKnown(t, p);
        }
      },
      {
        key: "_update",
        value: function(t, p) {
          var f = Number(t.item_index);
          switch (t.date_created = new Date(t.date_created), t.type) {
            case "list_item_added":
            case "list_item_updated":
              this._handleItemMutated(f, t.item_url, t.id, t.item_revision, t.item_data, t.date_created, t.date_expires, t.type === "list_item_added", !0);
              break;
            case "list_item_removed":
              this._handleItemRemoved(f, t.id, t.item_data, t.date_created, !0);
              break;
            case "list_context_updated":
              this._handleContextUpdate(t.context_data, t.id, t.date_created);
              break;
            case "list_removed":
              this.onRemoved(!1);
          }
          p && this._advanceLastEventId(t.id, t.list_revision);
        }
      },
      {
        key: "_advanceLastEventId",
        value: function(t, p) {
          this.lastEventId < t && (this.descriptor.last_event_id = t, p && (this.descriptor.revision = p));
        }
      },
      {
        key: "_updateRootDateUpdated",
        value: function(t) {
          (!this.descriptor.date_updated || t.getTime() > this.descriptor.date_updated.getTime()) && (this.descriptor.date_updated = t, this.services.storage.update(this.type, this.sid, this.uniqueName, { date_updated: t }));
        }
      },
      {
        key: "_handleItemMutated",
        value: function(t, p, f, C, _, N, ne, Be, Ge) {
          if (this.shouldIgnoreEvent(t, f)) {
            Ze.trace("Item ".concat(t, " update skipped, current: ").concat(this.lastEventId, ", remote: ").concat(f));
            return;
          }
          this._updateRootDateUpdated(N);
          var Le = this.cache.getValue(t);
          if (!Le) {
            var st = new wr({
              index: t,
              url: p,
              lastEventId: f,
              revision: C,
              data: _,
              dateUpdated: N,
              dateExpires: ne
            });
            this.cache.store(t, st, f), this.emitItemMutationEvent(st, Ge, Be);
            return;
          }
          var wt = ee(Le.data);
          Le.update(f, C, _, N), this.cache.store(t, Le, f), ne !== void 0 && Le.updateDateExpires(ne), this.emitItemMutationEvent(Le, Ge, !1, wt);
        }
      },
      {
        key: "emitItemMutationEvent",
        value: function(t, p, f) {
          var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, _ = f ? "itemAdded" : "itemUpdated", N = {
            item: t,
            isLocal: !p
          };
          f || (N.previousItemData = C), this.broadcastEventToListeners(_, N);
        }
      },
      {
        key: "_handleItemRemoved",
        value: function(t, p, f, C, _) {
          this._updateRootDateUpdated(C), this.cache.delete(t, p), this.broadcastEventToListeners("itemRemoved", {
            index: t,
            isLocal: !_,
            previousItemData: f
          });
        }
      },
      {
        key: "_handleContextUpdate",
        value: function(t, p, f) {
          this._updateRootDateUpdated(f), this._updateContextIfRequired(t, p) && this.broadcastEventToListeners("contextUpdated", {
            context: t,
            isLocal: !1
          });
        }
      },
      {
        key: "_updateContextIfRequired",
        value: function(t, p) {
          return !this.contextEventId || p > this.contextEventId ? (this.context = t, this.contextEventId = p, !0) : (Ze.trace("Context update skipped, current:", this.lastEventId, ", remote:", p), !1);
        }
      }
    ], [{
      key: "type",
      get: function() {
        return "list";
      }
    }]), y;
  })(Et), it = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = nn(y);
    function y(a) {
      var t;
      return D.default(this, y), t = W.call(this), t.syncListImpl = a, t.syncListImpl.attach(ve.default(t)), t;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.syncListImpl.uri;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.syncListImpl.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.syncListImpl.lastEventId;
        }
      },
      {
        key: "links",
        get: function() {
          return this.syncListImpl.links;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.syncListImpl.dateExpires;
        }
      },
      {
        key: "type",
        get: function() {
          return Ee.type;
        }
      },
      {
        key: "sid",
        get: function() {
          return this.syncListImpl.sid;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.syncListImpl.uniqueName;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.syncListImpl.dateUpdated;
        }
      },
      {
        key: "push",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return this.ensureNotClosed(), N.abrupt("return", this.syncListImpl.push(f, C));
                case 2:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "set",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return this.ensureNotClosed(), ne.abrupt("return", this.syncListImpl.set(f, C, _));
                case 2:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "mutate",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return this.ensureNotClosed(), ne.abrupt("return", this.syncListImpl.mutate(f, C, _));
                case 2:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "update",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return this.ensureNotClosed(), ne.abrupt("return", this.syncListImpl.update(f, C, _));
                case 2:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "remove",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncListImpl.remove(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "get",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncListImpl.get(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "getContext",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return this.ensureNotClosed(), C.abrupt("return", this.syncListImpl.getContext());
                case 2:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "getItems",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncListImpl.getItems(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncListImpl.setTtl(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setItemTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return this.ensureNotClosed(), N.abrupt("return", this.syncListImpl.setItemTtl(f, C));
                case 2:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "removeList",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return this.ensureNotClosed(), C.abrupt("return", this.syncListImpl.removeList());
                case 2:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "close",
        value: function() {
          He.default(Re.default(y.prototype), "close", this).call(this), this.syncListImpl.detach(this.listenerUuid);
        }
      }
    ], [{
      key: "type",
      get: function() {
        return Ee.type;
      }
    }]), y;
  })(Xt);
  fe.default(it, "itemAdded", "itemAdded"), fe.default(it, "itemUpdated", "itemUpdated"), fe.default(it, "itemRemoved", "itemRemoved"), fe.default(it, "removed", "removed"), Ie([
    S.validateTypesAsync(S.pureObject, ["undefined", S.objectSchema("item metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [Object, Object]),
    z("design:returntype", Promise)
  ], it.prototype, "push", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger, S.pureObject, ["undefined", S.objectSchema("item metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [
      Number,
      Object,
      Object
    ]),
    z("design:returntype", Promise)
  ], it.prototype, "set", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger, "function", ["undefined", S.objectSchema("item metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [
      Number,
      Function,
      Object
    ]),
    z("design:returntype", Promise)
  ], it.prototype, "mutate", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger, S.pureObject, ["undefined", S.objectSchema("item metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [
      Number,
      Object,
      Object
    ]),
    z("design:returntype", Promise)
  ], it.prototype, "update", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number]),
    z("design:returntype", Promise)
  ], it.prototype, "remove", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number]),
    z("design:returntype", Promise)
  ], it.prototype, "get", null), Ie([
    S.validateTypesAsync(["undefined", S.objectSchema("query options", {
      from: [S.nonNegativeInteger, "undefined"],
      pageSize: [S.custom(function(x) {
        return [$e(x), "a positive integer"];
      }), "undefined"],
      order: [S.custom(function(x) {
        return [x === "asc" || x === "desc", "either 'asc' or 'desc'"];
      }), "undefined"]
    })]),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], it.prototype, "getItems", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number]),
    z("design:returntype", Promise)
  ], it.prototype, "setTtl", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger, S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number, Number]),
    z("design:returntype", Promise)
  ], it.prototype, "setItemTtl", null);
  var Ke = /* @__PURE__ */ (function() {
    function x(W) {
      D.default(this, x), this.descriptor = W;
    }
    return Q.default(x, [
      {
        key: "uri",
        get: function() {
          return this.descriptor.url;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.descriptor.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.descriptor.last_event_id;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.descriptor.date_expires;
        }
      },
      {
        key: "key",
        get: function() {
          return this.descriptor.key;
        }
      },
      {
        key: "data",
        get: function() {
          return this.descriptor.data;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.descriptor.date_updated;
        }
      },
      {
        key: "cacheKey",
        get: function() {
          return this.key;
        }
      },
      {
        key: "update",
        value: function(y, a, t, p) {
          return this.descriptor.last_event_id = y, this.descriptor.revision = a, this.descriptor.data = t, this.descriptor.date_updated = p, this;
        }
      },
      {
        key: "updateDateExpires",
        value: function(y) {
          this.descriptor.date_expires = y;
        }
      }
    ]), x;
  })();
  function xe(x, W) {
    var y = typeof Symbol < "u" && x[Symbol.iterator] || x["@@iterator"];
    if (!y) {
      if (Array.isArray(x) || (y = dt(x)) || W && x && typeof x.length == "number") {
        y && (x = y);
        var a = 0, t = function() {
        };
        return {
          s: t,
          n: function() {
            return a >= x.length ? { done: !0 } : {
              done: !1,
              value: x[a++]
            };
          },
          e: function(N) {
            throw N;
          },
          f: t
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, f = !1, C;
    return {
      s: function() {
        y = y.call(x);
      },
      n: function() {
        var N = y.next();
        return p = N.done, N;
      },
      e: function(N) {
        f = !0, C = N;
      },
      f: function() {
        try {
          !p && y.return != null && y.return();
        } finally {
          if (f) throw C;
        }
      }
    };
  }
  function dt(x, W) {
    if (x) {
      if (typeof x == "string") return kt(x, W);
      var y = Object.prototype.toString.call(x).slice(8, -1);
      if (y === "Object" && x.constructor && (y = x.constructor.name), y === "Map" || y === "Set") return Array.from(x);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return kt(x, W);
    }
  }
  function kt(x, W) {
    (W == null || W > x.length) && (W = x.length);
    for (var y = 0, a = new Array(W); y < W; y++) a[y] = x[y];
    return a;
  }
  function It(x, W) {
    var y = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(x);
      W && (a = a.filter(function(t) {
        return Object.getOwnPropertyDescriptor(x, t).enumerable;
      })), y.push.apply(y, a);
    }
    return y;
  }
  function zt(x) {
    for (var W = 1; W < arguments.length; W++) {
      var y = arguments[W] != null ? arguments[W] : {};
      W % 2 ? It(Object(y), !0).forEach(function(a) {
        fe.default(x, a, y[a]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(y)) : It(Object(y)).forEach(function(a) {
        Object.defineProperty(x, a, Object.getOwnPropertyDescriptor(y, a));
      });
    }
    return x;
  }
  function qt(x) {
    var W = nr();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function nr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ur = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = qt(y);
    function y(a, t, p) {
      var f;
      return D.default(this, y), f = W.call(this, a, p), f.updateMergingQueue = new Tt(function(_, N) {
        return typeof N.ttl == "number" ? { ttl: N.ttl } : _;
      }), f.cache = new Cr(), f.descriptor = t, f.descriptor.date_updated = new Date(f.descriptor.date_updated), t.items && t.items.forEach(function(C) {
        C.date_updated = new Date(C.date_updated), f.cache.store(C.key, new Ke(C), C.last_event_id);
      }), f;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.descriptor.url;
        }
      },
      {
        key: "links",
        get: function() {
          return this.descriptor.links;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.descriptor.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.descriptor.last_event_id;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.descriptor.date_expires;
        }
      },
      {
        key: "type",
        get: function() {
          return "map";
        }
      },
      {
        key: "indexName",
        get: function() {
        }
      },
      {
        key: "queryString",
        get: function() {
        }
      },
      {
        key: "sid",
        get: function() {
          return this.descriptor.sid;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.descriptor.unique_name || null;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.descriptor.date_updated;
        }
      },
      {
        key: "set",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N = this, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return ne = _ || {}, Ge.abrupt("return", this.updateMergingQueue.squashAndAdd(f, ne, function(Le) {
                    return N._putItemUnconditionally(f, C, Le.ttl);
                  }));
                case 2:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "get",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  if (f != null) {
                    _.next = 2;
                    break;
                  }
                  throw new te("SyncMapItem key may not be empty", 400, 54209);
                case 2:
                  if (!this.cache.has(f)) {
                    _.next = 6;
                    break;
                  }
                  return _.abrupt("return", this.cache.getValue(f));
                case 6:
                  return _.abrupt("return", this._getItemFromServer(f));
                case 7:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_getItemFromServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C;
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return N.next = 2, this._queryItemsFromServer({ key: f });
                case 2:
                  if (C = N.sent, !(C.items.length < 1)) {
                    N.next = 7;
                    break;
                  }
                  throw new te("The specified Map Item does not exist", 404, 54201);
                case 7:
                  return N.abrupt("return", C.items[0]);
                case 8:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "mutate",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N = this, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return ne = _ || {}, Ge.abrupt("return", this.updateMergingQueue.add(f, ne, function(Le) {
                    return N._putItemWithIfMatch(f, C, Le.ttl);
                  }));
                case 2:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "update",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return ne.abrupt("return", this.mutate(f, function(Be) {
                    return Object.assign(Be, C);
                  }, _));
                case 1:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_putItemUnconditionally",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return Ge.next = 2, this._putItemToServer(f, C, void 0, _);
                case 2:
                  return N = Ge.sent, ne = N.item, this._handleItemMutated(ne.key, ne.url, ne.last_event_id, ne.revision, ne.data, ne.date_updated, ne.date_expires, N.added, !1), Ge.abrupt("return", this.cache.getValue(ne.key));
                case 6:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_putItemWithIfMatch",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            var N, ne, Be, Ge, Le;
            return P.default.wrap(function(wt) {
              for (; ; ) switch (wt.prev = wt.next) {
                case 0:
                  return wt.next = 2, this.get(f).catch(function(bt) {
                    if (bt.status === 404) return new Ke({
                      key: f,
                      data: {},
                      last_event_id: -1,
                      revision: "-1",
                      url: null,
                      date_updated: null,
                      date_expires: null
                    });
                    throw bt;
                  });
                case 2:
                  if (N = wt.sent, ne = C(ee(N.data)), !ne) {
                    wt.next = 26;
                    break;
                  }
                  return Be = N.revision, wt.prev = 6, wt.next = 9, this._putItemToServer(f, ne, Be, _);
                case 9:
                  return Ge = wt.sent, Le = Ge.item, this._handleItemMutated(Le.key, Le.url, Le.last_event_id, Le.revision, Le.data, Le.date_updated, Le.date_expires, Ge.added, !1), wt.abrupt("return", this.cache.getValue(Le.key));
                case 15:
                  if (wt.prev = 15, wt.t0 = wt.catch(6), wt.t0.status !== 412) {
                    wt.next = 23;
                    break;
                  }
                  return wt.next = 20, this._getItemFromServer(f);
                case 20:
                  return wt.abrupt("return", this._putItemWithIfMatch(f, C, _));
                case 23:
                  throw wt.t0;
                case 24:
                  wt.next = 27;
                  break;
                case 26:
                  return wt.abrupt("return", N);
                case 27:
                case "end":
                  return wt.stop();
              }
            }, p, this, [[6, 15]]);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_putItemToServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _, N) {
            var ne, Be, Ge, Le, st;
            return P.default.wrap(function(bt) {
              for (; ; ) switch (bt.prev = bt.next) {
                case 0:
                  return ne = new F(this.links.items).pathSegment(f).build(), Be = { data: C }, N !== void 0 && (Be.ttl = N), bt.prev = 3, bt.next = 6, this.services.network.put(ne, Be, _);
                case 6:
                  return Ge = bt.sent, Le = Ge.body, Le.data = C, Le.date_updated = new Date(Le.date_updated), st = Ge.status.code === 201, bt.abrupt("return", {
                    added: st,
                    item: Le
                  });
                case 14:
                  throw bt.prev = 14, bt.t0 = bt.catch(3), bt.t0.status === 404 && this.onRemoved(!1), bt.t0;
                case 18:
                case "end":
                  return bt.stop();
              }
            }, p, this, [[3, 14]]);
          }));
          function t(p, f, C, _) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "remove",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N;
            return P.default.wrap(function(Be) {
              for (; ; ) switch (Be.prev = Be.next) {
                case 0:
                  return Be.next = 2, this.get(f);
                case 2:
                  return C = Be.sent, _ = ee(C.data), Be.next = 6, this.services.network.delete(C.uri);
                case 6:
                  N = Be.sent, this._handleItemRemoved(f, N.body.last_event_id, _, new Date(N.body.date_updated), !1);
                case 8:
                case "end":
                  return Be.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "queryItems",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N, ne, Be, Ge, Le, st, wt, bt, Bt, pr, xt, er, M, A, k, o, u, I, d, v, g, w, R, me, ge, Me, Ue;
            return P.default.wrap(function(Xe) {
              for (; ; ) switch (Xe.prev = Xe.next) {
                case 0:
                  if (!f.key) {
                    Xe.next = 5;
                    break;
                  }
                  if (wt = this.cache.get(f.key), !wt) {
                    Xe.next = 4;
                    break;
                  }
                  return Xe.abrupt("return", this.makePaginator(wt.isValid ? [wt.value] : [], f, !1, !1));
                case 4:
                  return Xe.abrupt("return", this._querySingleItemFromServer(f.key));
                case 5:
                  bt = !!f.nextPageItemId || !!f.prevPageItemId, Bt = zt({}, f), bt && (f.from = (pr = (xt = f.nextPageItemId) !== null && xt !== void 0 ? xt : f.prevPageItemId) !== null && pr !== void 0 ? pr : f.from), er = !!f.prevPageItemId, M = f.order === "desc" ? er ? this.cache.getIterator((C = (_ = f.prevPageItemId) !== null && _ !== void 0 ? _ : f.from) !== null && C !== void 0 ? C : null) : this.cache.getReverseIterator((N = (ne = f.nextPageItemId) !== null && ne !== void 0 ? ne : f.from) !== null && N !== void 0 ? N : null) : er ? this.cache.getReverseIterator((Be = (Ge = f.prevPageItemId) !== null && Ge !== void 0 ? Ge : f.from) !== null && Be !== void 0 ? Be : null) : this.cache.getIterator((Le = (st = f.nextPageItemId) !== null && st !== void 0 ? st : f.from) !== null && Le !== void 0 ? Le : null), A = [], k = bt ? f.limit + 1 : f.limit, o = xe(M), Xe.prev = 13, o.s();
                case 15:
                  if ((u = o.n()).done) {
                    Xe.next = 25;
                    break;
                  }
                  if (I = u.value, !(bt && I.value.key == f.from)) {
                    Xe.next = 19;
                    break;
                  }
                  return Xe.abrupt("continue", 23);
                case 19:
                  if (A.push(I.value), !(A.length >= f.limit)) {
                    Xe.next = 23;
                    break;
                  }
                  return er && ar(A), Xe.abrupt("return", this.makePaginator(A, f, this._prevPageAllowed(A, f.order), this._nextPageAllowed(A, f.order)));
                case 23:
                  Xe.next = 15;
                  break;
                case 25:
                  Xe.next = 30;
                  break;
                case 27:
                  Xe.prev = 27, Xe.t0 = Xe.catch(13), o.e(Xe.t0);
                case 30:
                  return Xe.prev = 30, o.f(), Xe.finish(30);
                case 33:
                  if (A.length > 0 && (f.from = kr(A).key), d = Math.max(k - A.length, 10), er && (f.order = f.order === "desc" ? "asc" : "desc"), v = f.from !== (Bt.order === "desc" ? er ? this.cache.collectionEnd : this.cache.collectionBegin : er ? this.cache.collectionBegin : this.cache.collectionEnd), !v) {
                    Xe.next = 66;
                    break;
                  }
                  return Xe.next = 40, this._queryItemsFromServer(zt(zt({}, f), {}, { limit: d }));
                case 40:
                  g = Xe.sent, w = g.items, Bt.order === "desc" ? (R = !g.hasNextPage, me = !g.hasPrevPage) : (R = !g.hasPrevPage, me = !g.hasNextPage), this.cache.populate(w, R, me), ge = xe(w), Xe.prev = 45, ge.s();
                case 47:
                  if ((Me = ge.n()).done) {
                    Xe.next = 56;
                    break;
                  }
                  if (Ue = Me.value, !((A.length > 0 || bt) && Ue.key == f.from)) {
                    Xe.next = 51;
                    break;
                  }
                  return Xe.abrupt("continue", 54);
                case 51:
                  if (er ? A.unshift(Ue) : A.push(Ue), !(A.length >= f.limit)) {
                    Xe.next = 54;
                    break;
                  }
                  return Xe.abrupt("break", 56);
                case 54:
                  Xe.next = 47;
                  break;
                case 56:
                  Xe.next = 61;
                  break;
                case 58:
                  Xe.prev = 58, Xe.t1 = Xe.catch(45), ge.e(Xe.t1);
                case 61:
                  return Xe.prev = 61, ge.f(), Xe.finish(61);
                case 64:
                  Xe.next = 67;
                  break;
                case 66:
                  er && ar(A);
                case 67:
                  return Xe.abrupt("return", this.makePaginator(A, Bt, this._prevPageAllowed(A, Bt.order), this._nextPageAllowed(A, Bt.order)));
                case 68:
                case "end":
                  return Xe.stop();
              }
            }, p, this, [[
              13,
              27,
              30,
              33
            ], [
              45,
              58,
              61,
              64
            ]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_prevPageAllowed",
        value: function(t, p) {
          return t.length > 0 && Zt(t).key !== (p === "desc" ? this.cache.collectionEnd : this.cache.collectionBegin);
        }
      },
      {
        key: "_nextPageAllowed",
        value: function(t, p) {
          return t.length > 0 && kr(t).key !== (p === "desc" ? this.cache.collectionBegin : this.cache.collectionEnd);
        }
      },
      {
        key: "makePaginator",
        value: function(t, p, f, C) {
          var _ = this;
          p.nextPageItemId = p.prevPageItemId = null;
          var N = f && this._prevPageAllowed(t, p.order), ne = C && this._nextPageAllowed(t, p.order);
          return new fr(t, function(Be) {
            return _.queryItems(zt(zt({}, p), Be));
          }, N ? Zt(t).key : null, ne ? kr(t).key : null);
        }
      },
      {
        key: "_querySingleItemFromServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C;
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return N.next = 2, this._queryItemsFromServer({ key: f });
                case 2:
                  return C = N.sent, C.items.length === 0 && this.cache.exists(f) && this.cache.delete(f, null), N.abrupt("return", C);
                case 5:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_queryItemsFromServer",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N = this, ne, Be, Ge, Le;
            return P.default.wrap(function(wt) {
              for (; ; ) switch (wt.prev = wt.next) {
                case 0:
                  return ne = new F(this.links.items).queryParam("HideExpired", !0).queryParam("Key", f.key).queryParam("PageToken", f.pageToken).queryParam("From", f.from).queryParam("PageSize", f.limit).queryParam("Order", f.order).build(), wt.next = 3, this.services.network.get(ne);
                case 3:
                  return Be = wt.sent, Ge = ((C = (_ = Be.body) === null || _ === void 0 ? void 0 : _.items) !== null && C !== void 0 ? C : []).map(function(bt) {
                    bt.date_updated = new Date(bt.date_updated);
                    var Bt = N.cache.get(bt.key);
                    if (Bt && Bt.value) N._handleItemMutated(bt.key, bt.url, bt.last_event_id, bt.revision, bt.data, bt.date_updated, bt.date_expires, !1, !0);
                    else {
                      var pr = new Ke({
                        key: bt.key,
                        url: bt.url,
                        last_event_id: bt.last_event_id,
                        revision: bt.revision,
                        data: bt.data,
                        date_updated: bt.date_updated,
                        date_expires: bt.date_expires
                      });
                      N.cache.store(bt.key, pr, bt.last_event_id);
                    }
                    return N.cache.getValue(bt.key);
                  }), Le = Be.body.meta, wt.abrupt("return", this.makePaginator(Ge, f, !!Le.previous_token, !!Le.next_token));
                case 7:
                case "end":
                  return wt.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "getItems",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return f = f || {}, pe(f.pageSize), f.limit = f.pageSize || f.limit || 50, f.order = f.order || "asc", _.abrupt("return", this.queryItems(f));
                case 5:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "shouldIgnoreEvent",
        value: function(t, p) {
          return this.cache.isKnown(t, p);
        }
      },
      {
        key: "_update",
        value: function(t, p) {
          switch (t.date_created = new Date(t.date_created), t.type) {
            case "map_item_added":
            case "map_item_updated":
              this._handleItemMutated(t.item_key, t.item_url, t.id, t.item_revision, t.item_data, t.date_created, t.date_expires, t.type === "map_item_added", !0);
              break;
            case "map_item_removed":
              this._handleItemRemoved(t.item_key, t.id, t.item_data, t.date_created, !0);
              break;
            case "map_removed":
              this.onRemoved(!1);
          }
          p && this._advanceLastEventId(t.id, t.map_revision);
        }
      },
      {
        key: "_advanceLastEventId",
        value: function(t, p) {
          this.lastEventId < t && (this.descriptor.last_event_id = t, p && (this.descriptor.revision = p));
        }
      },
      {
        key: "_updateRootDateUpdated",
        value: function(t) {
          (!this.descriptor.date_updated || t.getTime() > this.descriptor.date_updated.getTime()) && (this.descriptor.date_updated = t, this.services.storage.update(this.type, this.sid, this.uniqueName, { date_updated: t }));
        }
      },
      {
        key: "_handleItemMutated",
        value: function(t, p, f, C, _, N, ne, Be, Ge) {
          if (this.shouldIgnoreEvent(t, f)) {
            Ze.trace("SyncMapItem ", t, " update skipped, current:", this.lastEventId, ", remote:", f);
            return;
          }
          this._updateRootDateUpdated(N);
          var Le = this.cache.getValue(t);
          if (!Le) {
            var st = new Ke({
              key: t,
              url: p,
              last_event_id: f,
              revision: C,
              data: _,
              date_updated: N,
              date_expires: ne
            });
            this.cache.store(t, st, f), this.emitItemMutationEvent(st, Ge, Be);
            return;
          }
          var wt = ee(Le.data);
          Le.update(f, C, _, N), this.cache.store(t, Le, f), ne !== void 0 && Le.updateDateExpires(ne), this.emitItemMutationEvent(Le, Ge, !1, wt);
        }
      },
      {
        key: "emitItemMutationEvent",
        value: function(t, p, f) {
          var C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, _ = f ? "itemAdded" : "itemUpdated", N = {
            item: t,
            isLocal: !p
          };
          f || (N.previousItemData = C), this.broadcastEventToListeners(_, N);
        }
      },
      {
        key: "_handleItemRemoved",
        value: function(t, p, f, C, _) {
          this._updateRootDateUpdated(C), this.cache.delete(t, p), this.broadcastEventToListeners("itemRemoved", {
            key: t,
            isLocal: !_,
            previousItemData: f
          });
        }
      },
      {
        key: "onRemoved",
        value: function(t) {
          this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", { isLocal: t });
        }
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _;
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return ne.prev = 0, C = { ttl: f }, ne.next = 4, this.services.network.post(this.uri, C);
                case 4:
                  _ = ne.sent, this.descriptor.date_expires = _.body.date_expires, ne.next = 12;
                  break;
                case 8:
                  throw ne.prev = 8, ne.t0 = ne.catch(0), ne.t0.status === 404 && this.onRemoved(!1), ne.t0;
                case 12:
                case "end":
                  return ne.stop();
              }
            }, p, this, [[0, 8]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setItemTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _, N, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return Ge.next = 2, this.get(f);
                case 2:
                  return _ = Ge.sent, N = { ttl: C }, Ge.next = 6, this.services.network.post(_.uri, N);
                case 6:
                  ne = Ge.sent, _.updateDateExpires(ne.body.date_expires);
                case 8:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "removeMap",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return C.next = 2, this.services.network.delete(this.uri);
                case 2:
                  this.onRemoved(!0);
                case 3:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      }
    ], [{
      key: "type",
      get: function() {
        return "map";
      }
    }]), y;
  })(Et), ut = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = qt(y);
    function y(a) {
      var t;
      return D.default(this, y), t = W.call(this), t.syncMapImpl = a, t.syncMapImpl.attach(ve.default(t)), t;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.syncMapImpl.uri;
        }
      },
      {
        key: "links",
        get: function() {
          return this.syncMapImpl.links;
        }
      },
      {
        key: "revision",
        get: function() {
          return this.syncMapImpl.revision;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.syncMapImpl.lastEventId;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.syncMapImpl.dateExpires;
        }
      },
      {
        key: "type",
        get: function() {
          return ur.type;
        }
      },
      {
        key: "sid",
        get: function() {
          return this.syncMapImpl.sid;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.syncMapImpl.uniqueName;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.syncMapImpl.dateUpdated;
        }
      },
      {
        key: "set",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return this.ensureNotClosed(), ne.abrupt("return", this.syncMapImpl.set(f, C, _));
                case 2:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "get",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncMapImpl.get(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "mutate",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return this.ensureNotClosed(), ne.abrupt("return", this.syncMapImpl.mutate(f, C, _));
                case 2:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "update",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C, _) {
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return this.ensureNotClosed(), ne.abrupt("return", this.syncMapImpl.update(f, C, _));
                case 2:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p, f, C) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "remove",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncMapImpl.remove(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "getItems",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncMapImpl.getItems(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncMapImpl.setTtl(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setItemTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            return P.default.wrap(function(N) {
              for (; ; ) switch (N.prev = N.next) {
                case 0:
                  return this.ensureNotClosed(), N.abrupt("return", this.syncMapImpl.setItemTtl(f, C));
                case 2:
                case "end":
                  return N.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "removeMap",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return this.ensureNotClosed(), C.next = 3, this.syncMapImpl.removeMap();
                case 3:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "close",
        value: function() {
          He.default(Re.default(y.prototype), "close", this).call(this), this.syncMapImpl.detach(this.listenerUuid);
        }
      }
    ], [{
      key: "type",
      get: function() {
        return ur.type;
      }
    }]), y;
  })(Xt);
  fe.default(ut, "itemAdded", "itemAdded"), fe.default(ut, "itemUpdated", "itemUpdated"), fe.default(ut, "itemRemoved", "itemRemoved"), fe.default(ut, "removed", "removed"), Ie([
    S.validateTypesAsync("string", S.pureObject, ["undefined", S.objectSchema("item metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [
      String,
      Object,
      Object
    ]),
    z("design:returntype", Promise)
  ], ut.prototype, "set", null), Ie([
    S.validateTypesAsync("string"),
    z("design:type", Function),
    z("design:paramtypes", [String]),
    z("design:returntype", Promise)
  ], ut.prototype, "get", null), Ie([
    S.validateTypesAsync("string", "function", ["undefined", S.objectSchema("item metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [
      String,
      Function,
      Object
    ]),
    z("design:returntype", Promise)
  ], ut.prototype, "mutate", null), Ie([
    S.validateTypesAsync("string", S.pureObject, ["undefined", S.objectSchema("item metadata", { ttl: [S.nonNegativeInteger, "undefined"] })]),
    z("design:type", Function),
    z("design:paramtypes", [
      String,
      Object,
      Object
    ]),
    z("design:returntype", Promise)
  ], ut.prototype, "update", null), Ie([
    S.validateTypesAsync("string"),
    z("design:type", Function),
    z("design:paramtypes", [String]),
    z("design:returntype", Promise)
  ], ut.prototype, "remove", null), Ie([
    S.validateTypesAsync(["undefined", S.objectSchema("query options", {
      from: ["string", "undefined"],
      pageSize: [S.custom(function(x) {
        return [$e(x), "a positive integer"];
      }), "undefined"],
      order: [S.custom(function(x) {
        return [x === "asc" || x === "desc", "either 'asc' or 'desc'"];
      }), "undefined"]
    })]),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], ut.prototype, "getItems", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number]),
    z("design:returntype", Promise)
  ], ut.prototype, "setTtl", null), Ie([
    S.validateTypesAsync("string", S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [String, Number]),
    z("design:returntype", Promise)
  ], ut.prototype, "setItemTtl", null);
  function Rt(x) {
    var W = Ir();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function Ir() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var we = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = Rt(y);
    function y(a, t, p) {
      var f;
      return D.default(this, y), f = W.call(this, a, p), f.descriptor = t, f;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.descriptor.url;
        }
      },
      {
        key: "links",
        get: function() {
          return this.descriptor.links;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.descriptor.date_expires;
        }
      },
      {
        key: "type",
        get: function() {
          return "stream";
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return null;
        }
      },
      {
        key: "indexName",
        get: function() {
        }
      },
      {
        key: "queryString",
        get: function() {
        }
      },
      {
        key: "sid",
        get: function() {
          return this.descriptor.sid;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.descriptor.unique_name || null;
        }
      },
      {
        key: "publishMessage",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _, N, ne;
            return P.default.wrap(function(Ge) {
              for (; ; ) switch (Ge.prev = Ge.next) {
                case 0:
                  return C = { data: f }, Ge.next = 3, this.services.network.post(this.links.messages, C);
                case 3:
                  return _ = Ge.sent, N = _.body, ne = this._handleMessagePublished(N.sid, f, !1), Ge.abrupt("return", ne);
                case 7:
                case "end":
                  return Ge.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _;
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return ne.prev = 0, C = { ttl: f }, ne.next = 4, this.services.network.post(this.uri, C);
                case 4:
                  _ = ne.sent, this.descriptor.date_expires = _.body.date_expires, ne.next = 12;
                  break;
                case 8:
                  throw ne.prev = 8, ne.t0 = ne.catch(0), ne.t0.status === 404 && this.onRemoved(!1), ne.t0;
                case 12:
                case "end":
                  return ne.stop();
              }
            }, p, this, [[0, 8]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "removeStream",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return C.next = 2, this.services.network.delete(this.uri);
                case 2:
                  this.onRemoved(!0);
                case 3:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_update",
        value: function(t) {
          switch (t.type) {
            case "stream_message_published":
              this._handleMessagePublished(t.message_sid, t.message_data, !0);
              break;
            case "stream_removed":
              this.onRemoved(!1);
          }
        }
      },
      {
        key: "_handleMessagePublished",
        value: function(t, p, f) {
          var C = {
            sid: t,
            data: p
          };
          return this.broadcastEventToListeners("messagePublished", {
            message: C,
            isLocal: !f
          }), C;
        }
      },
      {
        key: "onRemoved",
        value: function(t) {
          this._unsubscribe(), this.removalHandler(this.type, this.sid, this.uniqueName), this.broadcastEventToListeners("removed", { isLocal: t });
        }
      }
    ], [{
      key: "type",
      get: function() {
        return "stream";
      }
    }]), y;
  })(Et);
  Ie([
    S.validateTypesAsync(S.pureObject),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], we.prototype, "publishMessage", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number]),
    z("design:returntype", Promise)
  ], we.prototype, "setTtl", null);
  var Pe = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = Rt(y);
    function y(a) {
      var t;
      return D.default(this, y), t = W.call(this), t.syncStreamImpl = a, t.syncStreamImpl.attach(ve.default(t)), t;
    }
    return Q.default(y, [
      {
        key: "uri",
        get: function() {
          return this.syncStreamImpl.uri;
        }
      },
      {
        key: "links",
        get: function() {
          return this.syncStreamImpl.links;
        }
      },
      {
        key: "dateExpires",
        get: function() {
          return this.syncStreamImpl.dateExpires;
        }
      },
      {
        key: "type",
        get: function() {
          return we.type;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return null;
        }
      },
      {
        key: "sid",
        get: function() {
          return this.syncStreamImpl.sid;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return this.syncStreamImpl.uniqueName;
        }
      },
      {
        key: "publishMessage",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncStreamImpl.publishMessage(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "setTtl",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return this.ensureNotClosed(), _.abrupt("return", this.syncStreamImpl.setTtl(f));
                case 2:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "removeStream",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return this.ensureNotClosed(), C.abrupt("return", this.syncStreamImpl.removeStream());
                case 2:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "close",
        value: function() {
          He.default(Re.default(y.prototype), "close", this).call(this), this.syncStreamImpl.detach(this.listenerUuid);
        }
      }
    ], [{
      key: "type",
      get: function() {
        return we.type;
      }
    }]), y;
  })(Xt);
  fe.default(Pe, "messagePublished", "messagePublished"), fe.default(Pe, "removed", "removed"), Ie([
    S.validateTypesAsync(S.pureObject),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], Pe.prototype, "publishMessage", null), Ie([
    S.validateTypesAsync(S.nonNegativeInteger),
    z("design:type", Function),
    z("design:paramtypes", [Number]),
    z("design:returntype", Promise)
  ], Pe.prototype, "setTtl", null);
  var Z = /* @__PURE__ */ Q.default(function x(W) {
    D.default(this, x), this.sdk = "js", this.sdkVer = W, this.os = vt.os.family, this.osVer = vt.os.version, this.pl = vt.name, this.plVer = vt.version;
  }), K = /* @__PURE__ */ (function() {
    function x() {
      D.default(this, x), this.names = /* @__PURE__ */ new Map(), this.entities = /* @__PURE__ */ new Map();
    }
    return Q.default(x, [
      {
        key: "store",
        value: function(y) {
          var a = this.entities.get(y.sid);
          return a || (this.entities.set(y.sid, y), y.uniqueName && this.names.set(y.type + "::" + y.uniqueName, y.sid), y);
        }
      },
      {
        key: "getResolved",
        value: function(y, a) {
          var t = this.names.get(a + "::" + y);
          return t ? this.entities.get(t) : null;
        }
      },
      {
        key: "get",
        value: function(y, a) {
          return this.entities.get(y) || this.getResolved(y, a) || null;
        }
      },
      {
        key: "remove",
        value: function(y) {
          var a = this.entities.get(y);
          a && (this.entities.delete(y), a.uniqueName && this.names.delete(a.type + "::" + a.uniqueName));
        }
      }
    ]), x;
  })();
  function q(x) {
    var W = ke();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function ke() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ie = /* @__PURE__ */ (function() {
    function x(W, y, a) {
      D.default(this, x), this.key = W, this.value = y, this.lastEventId = a;
    }
    return Q.default(x, [{
      key: "cacheKey",
      get: function() {
        return this.key;
      }
    }]), x;
  })(), et = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = q(y);
    function y(a, t, p, f) {
      var C;
      return D.default(this, y), C = W.call(this, t, p), C.descriptor = a, C.cache = new Cr(), f && f.forEach(function(_) {
        var N = new ie(_.key, _.data, _.revision);
        C.cache.store(_.key, N, _.revision);
      }), C;
    }
    return Q.default(y, [
      {
        key: "sid",
        get: function() {
          return this.descriptor.sid;
        }
      },
      {
        key: "uniqueName",
        get: function() {
          return null;
        }
      },
      {
        key: "type",
        get: function() {
          return y.type;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.descriptor.last_event_id;
        }
      },
      {
        key: "indexName",
        get: function() {
          return this.descriptor.indexName;
        }
      },
      {
        key: "queryString",
        get: function() {
          return this.descriptor.queryExpression;
        }
      },
      {
        key: "queryUri",
        get: function() {
          return this.descriptor.queryUri;
        }
      },
      {
        key: "liveQueryDescriptor",
        get: function() {
          return this.descriptor;
        }
      },
      {
        key: "onRemoved",
        value: function() {
        }
      },
      {
        key: "getItems",
        value: function() {
          var t = {};
          return this.cache.forEach(function(p, f) {
            t[p] = f.value;
          }), t;
        }
      },
      {
        key: "_update",
        value: function(t, p) {
          switch (t.type) {
            case "live_query_item_updated":
              this.handleItemMutated(t.item_key, t.item_data, t.item_revision);
              break;
            case "live_query_item_removed":
              this.handleItemRemoved(t.item_key, t.item_revision);
              break;
            case "live_query_updated":
              this.handleBatchUpdate(t.items);
          }
          p && this._advanceLastEventId(t.last_event_id);
        }
      },
      {
        key: "handleItemMutated",
        value: function(t, p, f) {
          if (this.shouldIgnoreEvent(t, f)) {
            Ze.trace("Item ".concat(t, " update skipped, revision: ").concat(f));
            return;
          }
          var C = new ie(t, p, f);
          this.cache.store(t, C, f), this.broadcastEventToListeners("itemUpdated", C);
        }
      },
      {
        key: "handleItemRemoved",
        value: function(t, p) {
          if (this.shouldIgnoreEvent(t, p)) {
            Ze.trace("Item ".concat(t, " delete skipped, revision: ").concat(p));
            return;
          }
          this.cache.delete(t, p), this.broadcastEventToListeners("itemRemoved", { key: t });
        }
      },
      {
        key: "handleBatchUpdate",
        value: function(t) {
          var p = this, f = {};
          t?.forEach(function(_) {
            f[_.key] = {
              data: _.data,
              revision: _.revision
            };
          }), this.cache.forEach(function(_, N) {
            var ne = f[_];
            ne != null ? p.handleItemMutated(_, ne.data, ne.revision) : p.handleItemRemoved(_, null), delete f[_];
          });
          for (var C in f) this.handleItemMutated(C, f[C].data, f[C].revision);
        }
      },
      {
        key: "shouldIgnoreEvent",
        value: function(t, p) {
          return t != null && p != null && this.cache.isKnown(t, p);
        }
      },
      {
        key: "_advanceLastEventId",
        value: function(t, p) {
          this.lastEventId < t && (this.descriptor.last_event_id = t);
        }
      }
    ], [{
      key: "type",
      get: function() {
        return "live_query";
      }
    }]), y;
  })(Et);
  function rt(x) {
    return pt.apply(this, arguments);
  }
  function pt() {
    return pt = U.default(/* @__PURE__ */ P.default.mark(function x(W) {
      var y, a, t, p, f, C;
      return P.default.wrap(function(N) {
        for (; ; ) switch (N.prev = N.next) {
          case 0:
            if (y = W.network, a = W.queryString, t = W.uri, p = W.type, a != null) {
              N.next = 3;
              break;
            }
            throw new te("Invalid query", 400, 54507);
          case 3:
            return f = { query_string: a }, p === yt.type && (f.type = p), N.next = 7, y.post(t, f, void 0, !0);
          case 7:
            return C = N.sent, N.abrupt("return", C.body);
          case 9:
          case "end":
            return N.stop();
        }
      }, x);
    })), pt.apply(this, arguments);
  }
  var yt = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = q(y);
    function y(a) {
      var t;
      return D.default(this, y), t = W.call(this), t.liveQueryImpl = a, t.liveQueryImpl.attach(ve.default(t)), t;
    }
    return Q.default(y, [
      {
        key: "type",
        get: function() {
          return et.type;
        }
      },
      {
        key: "lastEventId",
        get: function() {
          return this.liveQueryImpl.lastEventId;
        }
      },
      {
        key: "sid",
        get: function() {
          return this.liveQueryImpl.sid;
        }
      },
      {
        key: "close",
        value: function() {
          He.default(Re.default(y.prototype), "close", this).call(this), this.liveQueryImpl.detach(this.listenerUuid);
        }
      },
      {
        key: "getItems",
        value: function() {
          return this.ensureNotClosed(), this.liveQueryImpl.getItems();
        }
      }
    ], [{
      key: "type",
      get: function() {
        return et.type;
      }
    }]), y;
  })(Xt);
  fe.default(yt, "itemUpdated", "itemUpdated"), fe.default(yt, "itemRemoved", "itemRemoved");
  var Ct = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = q(y);
    function y(a) {
      var t;
      return D.default(this, y), t = W.call(this), fe.default(ve.default(t), "queryExpression", null), fe.default(ve.default(t), "items", {}), Object.assign(ve.default(t), a), t.updateIndexName(a.indexName), t;
    }
    return Q.default(y, [
      {
        key: "type",
        get: function() {
          return y.type;
        }
      },
      {
        key: "search",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C = this, _;
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return this.items = {}, ne.prev = 1, ne.next = 4, rt({
                    network: this.network,
                    uri: this.queryUri,
                    queryString: f
                  });
                case 4:
                  _ = ne.sent, this.queryExpression = f, _.items && _.items.forEach(function(Be) {
                    C.items[Be.key] = Be.data;
                  }), this.emit("searchResult", this.getItems()), ne.next = 15;
                  break;
                case 10:
                  throw ne.prev = 10, ne.t0 = ne.catch(1), Ze.error("Error '".concat(ne.t0.message, "' while executing query '").concat(f, "'")), this.queryExpression = null, ne.t0;
                case 15:
                case "end":
                  return ne.stop();
              }
            }, p, this, [[1, 10]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "subscribe",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  if (this.queryExpression != null) {
                    C.next = 2;
                    break;
                  }
                  return C.abrupt("return", Promise.reject(new te("Invalid query", 400, 54507)));
                case 2:
                  return C.abrupt("return", this.liveQueryCreator(this.indexName, this.queryExpression));
                case 3:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "getItems",
        value: function() {
          return this.items;
        }
      },
      {
        key: "updateIndexName",
        value: function(t) {
          this.indexName = t, this.queryUri = this.generateQueryUri(this.indexName);
        }
      },
      {
        key: "generateQueryUri",
        value: function(t) {
          return new F(this.insightsUri).pathSegment(t).pathSegment("Items").build();
        }
      }
    ], [{
      key: "type",
      get: function() {
        return "instant_query";
      }
    }]), y;
  })(Y.ReplayEventEmitter);
  fe.default(Ct, "searchResult", "searchResult"), Ie([
    S.validateTypesAsync("string"),
    z("design:type", Function),
    z("design:paramtypes", [String]),
    z("design:returntype", Promise)
  ], Ct.prototype, "search", null), Ie([
    S.validateTypes(S.nonEmptyString),
    z("design:type", Function),
    z("design:paramtypes", [String]),
    z("design:returntype", void 0)
  ], Ct.prototype, "updateIndexName", null);
  var vr = "4.0.1";
  function wn(x) {
    var W = gr();
    return function() {
      var a = Re.default(x), t;
      if (W) {
        var p = Re.default(this).constructor;
        t = Reflect.construct(a, arguments, p);
      } else t = a.apply(this, arguments);
      return le.default(this, t);
    };
  }
  function gr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function Pr(x, W) {
    var y = Object.keys(x);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(x);
      W && (a = a.filter(function(t) {
        return Object.getOwnPropertyDescriptor(x, t).enumerable;
      })), y.push.apply(y, a);
    }
    return y;
  }
  function Sa(x) {
    for (var W = 1; W < arguments.length; W++) {
      var y = arguments[W] != null ? arguments[W] : {};
      W % 2 ? Pr(Object(y), !0).forEach(function(a) {
        fe.default(x, a, y[a]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(x, Object.getOwnPropertyDescriptors(y)) : Pr(Object(y)).forEach(function(a) {
        Object.defineProperty(x, a, Object.getOwnPropertyDescriptor(y, a));
      });
    }
    return x;
  }
  var ka = "data_sync", Yn = vr;
  function Ln(x) {
    if (x) {
      if (typeof x == "string") return {
        id: x,
        mode: "open_or_create"
      };
      var W = x.mode || (x.id ? "open_or_create" : "create_new");
      return Sa(Sa({}, x), {}, { mode: W });
    } else return { mode: "create_new" };
  }
  var Ia = "com.twilio.rtd.cds.document", Ta = "com.twilio.rtd.cds.list", Qn = "com.twilio.rtd.cds.map", Ra = "twilio.sync.event", mr = /* @__PURE__ */ (function(x) {
    L.default(y, x);
    var W = wn(y);
    function y(a) {
      var t, p, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (D.default(this, y), p = W.call(this), !a) throw new Error("Sync library needs a valid Twilio token to be passed");
      f.hasOwnProperty("logLevel") ? Ze.setLevel(f.logLevel) : Ze.setLevel("silent");
      var C = f.productId = f.productId || ka;
      f.clientMetadata = f.clientMetadata || {}, f.clientMetadata.hasOwnProperty("type") || (f.clientMetadata.type = "sync"), f.clientMetadata.hasOwnProperty("sdk") || (f.clientMetadata.sdk = "JS", f.clientMetadata.sdkv = Yn);
      var _ = !f.twilsockClient;
      if (!f.initRegistrations) {
        var N = new j.InitRegistration(C);
        y.populateInitRegistrations(N), f.initRegistrations = [N];
      }
      var ne = f.twilsockClient = (t = f.twilsockClient) !== null && t !== void 0 ? t : new j.Twilsock(a, C, f);
      ne.on("tokenAboutToExpire", function() {
        return p.emit("tokenAboutToExpire");
      }), ne.on("tokenExpired", function() {
        return p.emit("tokenExpired");
      }), ne.on("connectionError", function(st) {
        return p.emit("connectionError", st);
      }), ne.on("stateChanged", function(st) {
        p.emit("connectionStateChanged", st), p.services.subscriptions.onConnectionStateChanged(st === "connected");
      }), ne.on("message", function(st, wt) {
        return p._routeMessage(st, wt);
      });
      var Be = new ce(f), Ge = new be(new Z(Yn), Be, ne), Le = new Qe(Be);
      return p.services = {
        config: Be,
        twilsock: ne,
        network: Ge,
        storage: Le,
        router: ve.default(p),
        subscriptions: null
      }, p.services.subscriptions = new ht(p.services), p.entities = new K(), _ && ne.connect(), p;
    }
    return Q.default(y, [
      {
        key: "_routeMessage",
        value: function(t, p) {
          switch (Ze.trace("Notification type:", t, "content:", p), t) {
            case Ia:
            case Ta:
            case Qn:
              this.services.subscriptions.acceptMessage(p, !1);
              break;
            case Ra:
              this.services.subscriptions.acceptMessage(p, !0);
          }
        }
      },
      {
        key: "_subscribe",
        value: function(t, p) {
          this.services.subscriptions.add(t, p);
        }
      },
      {
        key: "_unsubscribe",
        value: function(t) {
          this.services.subscriptions.remove(t);
        }
      },
      {
        key: "connectionState",
        get: function() {
          return this.services.twilsock.state;
        }
      },
      {
        key: "ensureReady",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            var f;
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  if (this.services.config.sessionStorageEnabled) {
                    _.next = 2;
                    break;
                  }
                  return _.abrupt("return");
                case 2:
                  return _.prev = 2, _.next = 5, this.services.twilsock.storageId();
                case 5:
                  f = _.sent, this.services.storage.updateStorageId(f.id), _.next = 12;
                  break;
                case 9:
                  _.prev = 9, _.t0 = _.catch(2), Ze.warn("Failed to initialize storage", _.t0);
                case 12:
                case "end":
                  return _.stop();
              }
            }, p, this, [[2, 9]]);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "storeRootInSessionCache",
        value: function(t, p, f) {
          if (!(!this.services.config.sessionStorageEnabled || !p)) {
            var C = ee(f);
            (t === it.type || t === ut.type) && (C.last_event_id = null, delete C.items), this.services.storage.store(t, p, C);
          }
        }
      },
      {
        key: "readRootFromSessionCache",
        value: function(t, p) {
          return !this.services.config.sessionStorageEnabled || !p ? null : this.services.storage.read(t, p);
        }
      },
      {
        key: "_get",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _, N, ne, Be = arguments;
            return P.default.wrap(function(Le) {
              for (; ; ) switch (Le.prev = Le.next) {
                case 0:
                  if (_ = Be.length > 2 && Be[2] !== void 0 ? Be[2] : !1, C) {
                    Le.next = 3;
                    break;
                  }
                  throw new te("Cannot get entity without id", 404);
                case 3:
                  return N = new F(f).pathSegment(C).queryParam("Include", _ ? "items" : void 0).build(), Le.next = 6, this.services.network.get(N);
                case 6:
                  return ne = Le.sent, Le.abrupt("return", ne.body);
                case 8:
                case "end":
                  return Le.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_createDocument",
        value: function(t, p, f) {
          var C = {
            unique_name: t,
            data: p || {}
          };
          return f !== void 0 && (C.ttl = f), this.services.network.post(this.services.config.documentsUri, C).then(function(_) {
            return _.body.data = C.data, _.body;
          });
        }
      },
      {
        key: "_getDocument",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return _.abrupt("return", this.readRootFromSessionCache(sr.type, f) || this._get(this.services.config.documentsUri, f));
                case 1:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_createList",
        value: function(t, p, f, C) {
          var _ = {
            unique_name: t,
            purpose: p,
            context: f
          };
          return C !== void 0 && (_.ttl = C), this.services.network.post(this.services.config.listsUri, _).then(function(N) {
            return N.body;
          });
        }
      },
      {
        key: "_getList",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return _.abrupt("return", this.readRootFromSessionCache(it.type, f) || this._get(this.services.config.listsUri, f));
                case 1:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_createMap",
        value: function(t, p) {
          var f = { unique_name: t };
          return p !== void 0 && (f.ttl = p), this.services.network.post(this.services.config.mapsUri, f).then(function(C) {
            return C.body;
          });
        }
      },
      {
        key: "_getMap",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C, _ = arguments;
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return C = _.length > 1 && _[1] !== void 0 ? _[1] : !1, ne.abrupt("return", this.readRootFromSessionCache(ut.type, f) || this._get(this.services.config.mapsUri, f, C));
                case 2:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_getStream",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return _.abrupt("return", this.readRootFromSessionCache(Pe.type, f) || this._get(this.services.config.streamsUri, f, !1));
                case 1:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_createStream",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _, N;
            return P.default.wrap(function(Be) {
              for (; ; ) switch (Be.prev = Be.next) {
                case 0:
                  return _ = { unique_name: f }, C !== void 0 && (_.ttl = C), Be.next = 4, this.services.network.post(this.services.config.streamsUri, _);
                case 4:
                  return N = Be.sent, Be.abrupt("return", N.body);
                case 6:
                case "end":
                  return Be.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "_getLiveQuery",
        value: function(t) {
          return this.readRootFromSessionCache(yt.type, t);
        }
      },
      {
        key: "getCached",
        value: function(t, p) {
          return t && this.entities.get(t, p) || null;
        }
      },
      {
        key: "removeFromCacheAndSession",
        value: function(t, p, f) {
          this.entities.remove(p), this.services.config.sessionStorageEnabled && this.services.storage.remove(t, p, f);
        }
      },
      {
        key: "document",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C = this, _, N, ne, Be;
            return P.default.wrap(function(Le) {
              for (; ; ) switch (Le.prev = Le.next) {
                case 0:
                  return Le.next = 2, this.ensureReady();
                case 2:
                  if (_ = Ln(f), _.mode !== "create_new") {
                    Le.next = 9;
                    break;
                  }
                  return Le.next = 6, this._createDocument(_.id, _.data, _.ttl);
                case 6:
                  N = Le.sent, Le.next = 39;
                  break;
                case 9:
                  if (ne = this.getCached(_.id, sr.type), !ne) {
                    Le.next = 14;
                    break;
                  }
                  return Le.abrupt("return", new sr(ne));
                case 14:
                  return Le.prev = 14, Le.next = 17, this._getDocument(_.id);
                case 17:
                  N = Le.sent, Le.next = 39;
                  break;
                case 20:
                  if (Le.prev = 20, Le.t0 = Le.catch(14), !(Le.t0.status !== 404 || _.mode === "open_existing")) {
                    Le.next = 26;
                    break;
                  }
                  throw Le.t0;
                case 26:
                  return Le.prev = 26, Le.next = 29, this._createDocument(_.id, _.data, _.ttl);
                case 29:
                  N = Le.sent, Le.next = 39;
                  break;
                case 32:
                  if (Le.prev = 32, Le.t1 = Le.catch(26), Le.t1.status !== 409) {
                    Le.next = 38;
                    break;
                  }
                  return Le.abrupt("return", this.document(f));
                case 38:
                  throw Le.t1;
                case 39:
                  return this.storeRootInSessionCache(sr.type, _.id, N), Be = new Rr(this.services, N, function(st, wt, bt) {
                    return C.removeFromCacheAndSession(st, wt, bt);
                  }), Be = this.entities.store(Be), Le.abrupt("return", new sr(Be));
                case 43:
                case "end":
                  return Le.stop();
              }
            }, p, this, [[14, 20], [26, 32]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "map",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C = this, _, N, ne, Be;
            return P.default.wrap(function(Le) {
              for (; ; ) switch (Le.prev = Le.next) {
                case 0:
                  return Le.next = 2, this.ensureReady();
                case 2:
                  if (_ = Ln(f), _.mode !== "create_new") {
                    Le.next = 9;
                    break;
                  }
                  return Le.next = 6, this._createMap(_.id, _.ttl);
                case 6:
                  N = Le.sent, Le.next = 39;
                  break;
                case 9:
                  if (ne = this.getCached(_.id, ut.type), !ne) {
                    Le.next = 14;
                    break;
                  }
                  return Le.abrupt("return", new ut(ne));
                case 14:
                  return Le.prev = 14, Le.next = 17, this._getMap(_.id, _.includeItems);
                case 17:
                  N = Le.sent, Le.next = 39;
                  break;
                case 20:
                  if (Le.prev = 20, Le.t0 = Le.catch(14), !(Le.t0.status !== 404 || _.mode === "open_existing")) {
                    Le.next = 26;
                    break;
                  }
                  throw Le.t0;
                case 26:
                  return Le.prev = 26, Le.next = 29, this._createMap(_.id, _.ttl);
                case 29:
                  N = Le.sent, Le.next = 39;
                  break;
                case 32:
                  if (Le.prev = 32, Le.t1 = Le.catch(26), Le.t1.status !== 409) {
                    Le.next = 38;
                    break;
                  }
                  return Le.abrupt("return", this.map(f));
                case 38:
                  throw Le.t1;
                case 39:
                  return this.storeRootInSessionCache(ut.type, _.id, N), Be = new ur(this.services, N, function(st, wt, bt) {
                    return C.removeFromCacheAndSession(st, wt, bt);
                  }), Be = this.entities.store(Be), Le.abrupt("return", new ut(Be));
                case 43:
                case "end":
                  return Le.stop();
              }
            }, p, this, [[14, 20], [26, 32]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "list",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C = this, _, N, ne, Be;
            return P.default.wrap(function(Le) {
              for (; ; ) switch (Le.prev = Le.next) {
                case 0:
                  return Le.next = 2, this.ensureReady();
                case 2:
                  if (_ = Ln(f), _.mode !== "create_new") {
                    Le.next = 9;
                    break;
                  }
                  return Le.next = 6, this._createList(_.id, _.purpose, _.context, _.ttl);
                case 6:
                  N = Le.sent, Le.next = 39;
                  break;
                case 9:
                  if (ne = this.getCached(_.id, it.type), !ne) {
                    Le.next = 14;
                    break;
                  }
                  return Le.abrupt("return", new it(ne));
                case 14:
                  return Le.prev = 14, Le.next = 17, this._getList(_.id);
                case 17:
                  N = Le.sent, Le.next = 39;
                  break;
                case 20:
                  if (Le.prev = 20, Le.t0 = Le.catch(14), !(Le.t0.status !== 404 || _.mode === "open_existing")) {
                    Le.next = 26;
                    break;
                  }
                  throw Le.t0;
                case 26:
                  return Le.prev = 26, Le.next = 29, this._createList(_.id, _.purpose, _.context, _.ttl);
                case 29:
                  N = Le.sent, Le.next = 39;
                  break;
                case 32:
                  if (Le.prev = 32, Le.t1 = Le.catch(26), Le.t1.status !== 409) {
                    Le.next = 38;
                    break;
                  }
                  return Le.abrupt("return", this.list(f));
                case 38:
                  throw Le.t1;
                case 39:
                  return this.storeRootInSessionCache(it.type, _.id, N), Be = new Ee(this.services, N, function(st, wt, bt) {
                    return C.removeFromCacheAndSession(st, wt, bt);
                  }), Be = this.entities.store(Be), Le.abrupt("return", new it(Be));
                case 43:
                case "end":
                  return Le.stop();
              }
            }, p, this, [[14, 20], [26, 32]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "stream",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C = this, _, N, ne, Be, Ge;
            return P.default.wrap(function(st) {
              for (; ; ) switch (st.prev = st.next) {
                case 0:
                  return st.next = 2, this.ensureReady();
                case 2:
                  if (_ = Ln(f), _.mode !== "create_new") {
                    st.next = 9;
                    break;
                  }
                  return st.next = 6, this._createStream(_.id, _.ttl);
                case 6:
                  N = st.sent, st.next = 39;
                  break;
                case 9:
                  if (ne = this.getCached(_.id, Pe.type), !ne) {
                    st.next = 14;
                    break;
                  }
                  return st.abrupt("return", new Pe(ne));
                case 14:
                  return st.prev = 14, st.next = 17, this._getStream(_.id);
                case 17:
                  N = st.sent, st.next = 39;
                  break;
                case 20:
                  if (st.prev = 20, st.t0 = st.catch(14), !(st.t0.status !== 404 || _.mode === "open_existing")) {
                    st.next = 26;
                    break;
                  }
                  throw st.t0;
                case 26:
                  return st.prev = 26, st.next = 29, this._createStream(_.id, _.ttl);
                case 29:
                  N = st.sent, st.next = 39;
                  break;
                case 32:
                  if (st.prev = 32, st.t1 = st.catch(26), st.t1.status !== 409) {
                    st.next = 38;
                    break;
                  }
                  return st.abrupt("return", this.stream(f));
                case 38:
                  throw st.t1;
                case 39:
                  return this.storeRootInSessionCache(Pe.type, _.id, N), Be = function(bt, Bt, pr) {
                    return C.removeFromCacheAndSession(bt, Bt, pr);
                  }, Ge = new we(this.services, N, Be), Ge = this.entities.store(Ge), st.abrupt("return", new Pe(Ge));
                case 44:
                case "end":
                  return st.stop();
              }
            }, p, this, [[14, 20], [26, 32]]);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "shutdown",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p() {
            return P.default.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  return C.next = 2, this.services.subscriptions.shutdown();
                case 2:
                  return C.next = 4, this.services.twilsock.disconnect();
                case 4:
                case "end":
                  return C.stop();
              }
            }, p, this);
          }));
          function t() {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "updateToken",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            return P.default.wrap(function(_) {
              for (; ; ) switch (_.prev = _.next) {
                case 0:
                  return _.abrupt("return", this.services.twilsock.updateToken(f).catch(function(N) {
                    var ne, Be = N == null || (ne = N.reply) === null || ne === void 0 ? void 0 : ne.status;
                    throw Be?.code === 401 && Be?.status === "UNAUTHORIZED" ? new te("Updated token was rejected by server", 400, 51130) : N;
                  }));
                case 1:
                case "end":
                  return _.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "liveQuery",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f, C) {
            var _ = this, N, ne, Be, Ge, Le;
            return P.default.wrap(function(wt) {
              for (; ; ) switch (wt.prev = wt.next) {
                case 0:
                  return wt.next = 2, this.ensureReady();
                case 2:
                  return N = new F(this.services.config.insightsUri).pathSegment(f).pathSegment("Items").build(), wt.next = 5, rt({
                    network: this.services.network,
                    uri: N,
                    queryString: C,
                    type: yt.type
                  });
                case 5:
                  return ne = wt.sent, Be = this.getCached(ne.query_id, yt.type), Be || (Ge = this._getLiveQuery(ne.query_id), Ge || (Ge = {
                    indexName: f,
                    queryExpression: C,
                    sid: ne.query_id,
                    queryUri: N,
                    last_event_id: ne.last_event_id
                  }), Le = function(Bt, pr, xt) {
                    return _.removeFromCacheAndSession(Bt, pr, xt);
                  }, Be = new et(Ge, this.services, Le, ne.items)), this.storeRootInSessionCache(yt.type, ne.query_id, Be.liveQueryDescriptor), Be = this.entities.store(Be), wt.abrupt("return", new yt(Be));
                case 11:
                case "end":
                  return wt.stop();
              }
            }, p, this);
          }));
          function t(p, f) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      },
      {
        key: "instantQuery",
        value: (function() {
          var a = U.default(/* @__PURE__ */ P.default.mark(function p(f) {
            var C = this, _;
            return P.default.wrap(function(ne) {
              for (; ; ) switch (ne.prev = ne.next) {
                case 0:
                  return ne.next = 2, this.ensureReady();
                case 2:
                  return _ = function(Ge, Le) {
                    return C.liveQuery(Ge, Le);
                  }, ne.abrupt("return", new Ct({
                    indexName: f,
                    network: this.services.network,
                    insightsUri: this.services.config.insightsUri,
                    liveQueryCreator: _
                  }));
                case 4:
                case "end":
                  return ne.stop();
              }
            }, p, this);
          }));
          function t(p) {
            return a.apply(this, arguments);
          }
          return t;
        })()
      }
    ], [{
      key: "populateInitRegistrations",
      value: function(t) {
        t.populateInitRegistrations([
          Ra,
          Ia,
          Ta,
          Qn
        ]);
      }
    }, {
      key: "version",
      get: function() {
        return Yn;
      }
    }]), y;
  })(Y.ReplayEventEmitter);
  fe.default(mr, "connectionStateChanged", "connectionStateChanged"), fe.default(mr, "connectionError", "connectionError"), fe.default(mr, "tokenAboutToExpire", "tokenAboutToExpire"), fe.default(mr, "tokenExpired", "tokenExpired"), Ie([
    S.validateTypesAsync([
      "undefined",
      "string",
      S.objectSchema("open document options", {
        id: ["string", "undefined"],
        mode: [S.literal("open_or_create", "open_existing", "create_new"), "undefined"],
        ttl: [S.nonNegativeInteger, "undefined"],
        data: [
          S.pureObject,
          "undefined",
          S.literal(null)
        ]
      })
    ]),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], mr.prototype, "document", null), Ie([
    S.validateTypesAsync([
      "undefined",
      "string",
      S.objectSchema("open map options", {
        id: ["string", "undefined"],
        mode: [S.literal("open_or_create", "open_existing", "create_new"), "undefined"],
        ttl: [S.nonNegativeInteger, "undefined"],
        data: [
          S.pureObject,
          "undefined",
          S.literal(null)
        ],
        includeItems: ["boolean", "undefined"]
      })
    ]),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], mr.prototype, "map", null), Ie([
    S.validateTypesAsync([
      "undefined",
      "string",
      S.objectSchema("open list options", {
        id: ["string", "undefined"],
        mode: [S.literal("open_or_create", "open_existing", "create_new"), "undefined"],
        ttl: [S.nonNegativeInteger, "undefined"],
        data: [
          S.pureObject,
          "undefined",
          S.literal(null)
        ],
        purpose: ["string", "undefined"],
        context: [S.pureObject, "undefined"],
        includeItems: ["boolean", "undefined"]
      })
    ]),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], mr.prototype, "list", null), Ie([
    S.validateTypesAsync([
      "undefined",
      "string",
      S.objectSchema("open stream options", {
        id: ["string", "undefined"],
        mode: [S.literal("open_or_create", "open_existing", "create_new"), "undefined"],
        ttl: [S.nonNegativeInteger, "undefined"],
        data: [
          S.pureObject,
          "undefined",
          S.literal(null)
        ]
      })
    ]),
    z("design:type", Function),
    z("design:paramtypes", [Object]),
    z("design:returntype", Promise)
  ], mr.prototype, "stream", null), Ie([
    S.validateTypesAsync(S.nonEmptyString),
    z("design:type", Function),
    z("design:paramtypes", [String]),
    z("design:returntype", Promise)
  ], mr.prototype, "updateToken", null), Ie([
    S.validateTypesAsync(S.nonEmptyString, "string"),
    z("design:type", Function),
    z("design:paramtypes", [String, String]),
    z("design:returntype", Promise)
  ], mr.prototype, "liveQuery", null), Ie([
    S.validateTypesAsync(S.nonEmptyString),
    z("design:type", Function),
    z("design:paramtypes", [String]),
    z("design:returntype", Promise)
  ], mr.prototype, "instantQuery", null), c.Client = mr, c.InsightsItem = ie, c.InstantQuery = Ct, c.LiveQuery = yt, c.Paginator = fr, c.SyncClient = mr, c.SyncDocument = sr, c.SyncList = it, c.SyncListItem = wr, c.SyncMap = ut, c.SyncMapItem = Ke, c.SyncStream = Pe;
})), ul = /* @__PURE__ */ J(((c, e) => {
  var r = Gt(), n = Gr(), i = Jt()("match");
  e.exports = function(s) {
    var l;
    return r(s) && ((l = s[i]) !== void 0 ? !!l : n(s) === "RegExp");
  };
})), Tu = /* @__PURE__ */ J(((c, e) => {
  var r = ul(), n = TypeError;
  e.exports = function(i) {
    if (r(i)) throw new n("The method doesn't accept regular expressions");
    return i;
  };
})), Ru = /* @__PURE__ */ J(((c, e) => {
  var r = Jt()("match");
  e.exports = function(n) {
    var i = /./;
    try {
      "/./"[n](i);
    } catch {
      try {
        return i[r] = !1, "/./"[n](i);
      } catch {
      }
    }
    return !1;
  };
})), Eu = /* @__PURE__ */ J((() => {
  var c = $t(), e = gi(), r = vn().f, n = En(), i = hr(), s = Tu(), l = Hr(), b = Ru(), h = Wr(), E = e("".slice), T = Math.min, S = b("startsWith");
  c({
    target: "String",
    proto: !0,
    forced: !(!h && !S && (function() {
      var j = r(String.prototype, "startsWith");
      return j && !j.writable;
    })()) && !S
  }, { startsWith: function(V) {
    var O = i(l(this));
    s(V);
    var X = i(V), B = n(T(arguments.length > 1 ? arguments[1] : void 0, O.length));
    return E(O, B, B + X.length) === X;
  } });
})), Cu = /* @__PURE__ */ J(((c, e) => {
  var r = Mt(), n = Jt(), i = Yt(), s = Wr(), l = n("iterator");
  e.exports = !r(function() {
    var b = new URL("b?a=1&b=2&c=3", "https://a"), h = b.searchParams, E = new URLSearchParams("a=1&a=2&b=3"), T = "";
    return b.pathname = "c%20d", h.forEach(function(S, j) {
      h.delete("b"), T += j + S;
    }), E.delete("a", 2), E.delete("b", void 0), s && (!b.toJSON || !E.has("a", 1) || E.has("a", 2) || !E.has("a", void 0) || E.has("b")) || !h.size && (s || !i) || !h.sort || b.href !== "https://a/c%20d?a=1&c=3" || h.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !h[l] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || T !== "a1c3" || new URL("https://x", void 0).host !== "x";
  });
})), ol = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = 2147483647, i = 36, s = 1, l = 26, b = 38, h = 700, E = 72, T = 128, S = "-", j = /[^\0-\u007E]/, V = /[.\u3002\uFF0E\uFF61]/g, O = "Overflow: input needs wider integers to process", X = i - s, B = RangeError, G = r(V.exec), Y = Math.floor, ue = String.fromCharCode, re = r("".charCodeAt), se = r([].join), H = r([].push), U = r("".replace), D = r("".split), Q = r("".toLowerCase), ve = function(fe) {
    for (var P = [], oe = 0, Ae = fe.length; oe < Ae; ) {
      var Ce = re(fe, oe++);
      if (Ce >= 55296 && Ce <= 56319 && oe < Ae) {
        var $ = re(fe, oe++);
        ($ & 64512) === 56320 ? H(P, ((Ce & 1023) << 10) + ($ & 1023) + 65536) : (H(P, Ce), oe--);
      } else H(P, Ce);
    }
    return P;
  }, L = function(fe) {
    return fe + 22 + 75 * (fe < 26);
  }, le = function(fe, P, oe) {
    var Ae = 0;
    for (fe = oe ? Y(fe / h) : fe >> 1, fe += Y(fe / P); fe > X * l >> 1; )
      fe = Y(fe / X), Ae += i;
    return Y(Ae + (X + 1) * fe / (fe + b));
  }, Re = function(fe) {
    var P = [];
    fe = ve(fe);
    for (var oe = fe.length, Ae = T, Ce = 0, $ = E, He = 0, ot; He < fe.length; He++)
      ot = fe[He], ot < 128 && H(P, ue(ot));
    var vt = P.length, Ie = vt;
    for (vt && H(P, S); Ie < oe; ) {
      var z = n;
      for (He = 0; He < fe.length; He++)
        ot = fe[He], ot >= Ae && ot < z && (z = ot);
      var F = Ie + 1;
      if (z - Ae > Y((n - Ce) / F)) throw new B(O);
      for (Ce += (z - Ae) * F, Ae = z, He = 0; He < fe.length; He++) {
        if (ot = fe[He], ot < Ae && ++Ce > n) throw new B(O);
        if (ot === Ae) {
          for (var m = Ce, he = i; ; ) {
            var te = he <= $ ? s : he >= $ + l ? l : he - $;
            if (m < te) break;
            var De = m - te, ee = i - te;
            H(P, ue(L(te + De % ee))), m = Y(De / ee), he += i;
          }
          H(P, ue(L(m))), $ = le(Ce, F, Ie === vt), Ce = 0, Ie++;
        }
      }
      Ce++, Ae++;
    }
    return se(P, "");
  };
  e.exports = function(fe) {
    for (var P = [], oe = D(U(Q(fe), V, "."), "."), Ae = 0, Ce; Ae < oe.length; Ae++)
      Ce = oe[Ae], H(P, G(j, Ce) ? "xn--" + Re(Ce) : Ce);
    return se(P, ".");
  };
})), ll = /* @__PURE__ */ J((() => {
  var c = $t(), e = Ut(), r = Rn(), n = RangeError, i = String.fromCharCode, s = String.fromCodePoint, l = e([].join);
  c({
    target: "String",
    stat: !0,
    arity: 1,
    forced: !!s && s.length !== 1
  }, { fromCodePoint: function(h) {
    for (var E = [], T = arguments.length, S = 0, j; T > S; ) {
      if (j = +arguments[S], r(j, 1114111) !== j) throw new n(j + " is not a valid code point");
      E[S++] = j < 65536 ? i(j) : i(((j -= 65536) >> 10) + 55296, j % 1024 + 56320);
    }
    return l(E, "");
  } });
})), Ou = /* @__PURE__ */ J(((c, e) => {
  ll();
  var r = qr(), n = Ut(), i = String.fromCharCode, s = r("String", "fromCodePoint"), l = encodeURIComponent, b = parseInt, h = n("".charAt), E = n([].push), T = n("".replace), S = n("".slice), j = n(/./.exec), V = "�", O = /^[0-9a-f]+$/i, X = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g, B = function(H, U) {
    var D = S(H, U, U + 2);
    return j(O, D) ? b(D, 16) : NaN;
  }, G = function(H) {
    for (var U = 0, D = 128; D > 0 && (H & D) !== 0; D >>= 1) U++;
    return U;
  }, Y = function(H) {
    var U = null, D = H.length;
    switch (D) {
      case 1:
        U = H[0];
        break;
      case 2:
        U = (H[0] & 31) << 6 | H[1] & 63;
        break;
      case 3:
        U = (H[0] & 15) << 12 | (H[1] & 63) << 6 | H[2] & 63;
        break;
      case 4:
        U = (H[0] & 7) << 18 | (H[1] & 63) << 12 | (H[2] & 63) << 6 | H[3] & 63;
    }
    return U === null || U > 1114111 || U >= 55296 && U <= 57343 || U < (D > 3 ? 65536 : D > 2 ? 2048 : D > 1 ? 128 : 0) ? null : U;
  }, ue = function(H) {
    return H.length === 2 ? H : V;
  }, re = function(H) {
    for (var U = H.length, D = "", Q = 0; Q < U; ) {
      var ve = h(H, Q);
      if (ve === "%") {
        if (h(H, Q + 1) === "%" || Q + 3 > U) {
          D += "%", Q++;
          continue;
        }
        var L = B(H, Q + 1);
        if (L !== L) {
          D += ve, Q++;
          continue;
        }
        Q += 2;
        var le = G(L);
        if (le === 0) ve = i(L);
        else {
          if (le === 1 || le > 4) {
            D += V, Q++;
            continue;
          }
          for (var Re = [L], fe = 1; fe < le && (Q++, !(Q + 3 > U || h(H, Q) !== "%")); ) {
            var P = B(H, Q + 1);
            if (P !== P || P > 191 || P < 128 || fe === 1 && (L === 224 && P < 160 || L === 237 && P > 159 || L === 240 && P < 144 || L === 244 && P > 143))
              break;
            E(Re, P), Q += 2, fe++;
          }
          if (Re.length !== le) {
            D += V;
            continue;
          }
          var oe = Y(Re);
          if (oe === null) {
            for (var Ae = 0; Ae < le; Ae++) D += V;
            Q++;
            continue;
          } else ve = s(oe);
        }
      }
      D += ve, Q++;
    }
    return D;
  }, se = function(H) {
    try {
      return l(H);
    } catch {
      return l(T(H, X, ue));
    }
  };
  e.exports = {
    decode: re,
    encode: se
  };
})), Pu = /* @__PURE__ */ J(((c, e) => {
  cn();
  var r = $t(), n = Dt(), i = vs(), s = Vt(), l = Ut(), b = Yt(), h = Cu(), E = Ou(), T = Tr(), S = Zr(), j = ni(), V = Qr(), O = Is(), X = Mr(), B = _n(), G = Kt(), Y = tr(), ue = ln(), re = hn(), se = cr(), H = Gt(), U = hr(), D = Xr(), Q = Sn(), ve = Wa(), L = pa(), le = Ha(), Re = ki(), fe = Jt(), P = Bi(), oe = fe("iterator"), Ae = "URLSearchParams", Ce = Ae + "Iterator", $ = X.set, He = X.getterFor(Ae), ot = X.getterFor(Ce), vt = E.decode, Ie = E.encode, z = i("fetch"), F = i("Request"), m = i("Headers"), he = F && F.prototype, te = m && m.prototype, De = n.TypeError, ee = l("".charAt), pe = l([].join), Ne = l([].push), $e = l("".replace), Oe = l([].shift), nt = l([].splice), Ze = l("".split), Je = l("".slice), _t = /\+/g, ft = function(Ve) {
    return vt($e(Ve, _t, " "));
  }, lt = /[!'()~]|%20/g, ze = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  }, _e = function(Ve) {
    return ze[Ve];
  }, de = function(Ve) {
    return $e(Ie(Ve), lt, _e);
  }, ce = O(function(at, qe) {
    $(this, {
      type: Ce,
      target: He(at).entries,
      index: 0,
      kind: qe
    });
  }, Ae, function() {
    var at = ot(this), qe = at.target, ae = at.index++;
    if (!qe || ae >= qe.length)
      return at.target = null, le(void 0, !0);
    var Se = qe[ae];
    switch (at.kind) {
      case "keys":
        return le(Se.key, !1);
      case "values":
        return le(Se.value, !1);
    }
    return le([Se.key, Se.value], !1);
  }, !0), ye = function(Ve) {
    this.entries = [], this.url = null, Ve !== void 0 && (H(Ve) ? this.parseObject(Ve) : this.parseQuery(typeof Ve == "string" ? ee(Ve, 0) === "?" ? Je(Ve, 1) : Ve : U(Ve)));
  };
  ye.prototype = {
    type: Ae,
    bindURL: function(Ve) {
      this.url = Ve, this.update();
    },
    parseObject: function(Ve) {
      var at = this.entries, qe = L(Ve), ae, Se, Te, je, be, Qe, tt;
      if (qe)
        for (ae = ve(Ve, qe), Se = ae.next; !(Te = s(Se, ae)).done; ) {
          if (je = ve(se(Te.value)), be = je.next, (Qe = s(be, je)).done || (tt = s(be, je)).done || !s(be, je).done) throw new De("Expected sequence with length 2");
          Ne(at, {
            key: U(Qe.value),
            value: U(tt.value)
          });
        }
      else for (var gt in Ve) Y(Ve, gt) && Ne(at, {
        key: gt,
        value: U(Ve[gt])
      });
    },
    parseQuery: function(Ve) {
      if (Ve)
        for (var at = this.entries, qe = Ze(Ve, "&"), ae = 0, Se, Te; ae < qe.length; )
          Se = qe[ae++], Se.length && (Te = Ze(Se, "="), Ne(at, {
            key: ft(Oe(Te)),
            value: ft(pe(Te, "="))
          }));
    },
    serialize: function() {
      for (var Ve = this.entries, at = [], qe = 0, ae; qe < Ve.length; )
        ae = Ve[qe++], Ne(at, de(ae.key) + "=" + de(ae.value));
      return pe(at, "&");
    },
    update: function() {
      this.entries.length = 0, this.parseQuery(this.url.query);
    },
    updateURL: function() {
      this.url && this.url.update();
    }
  };
  var Ye = function() {
    B(this, Fe);
    var at = arguments.length > 0 ? arguments[0] : void 0, qe = $(this, new ye(at));
    b || (this.size = qe.entries.length);
  }, Fe = Ye.prototype;
  if (j(Fe, {
    append: function(at, qe) {
      var ae = He(this);
      Re(arguments.length, 2), Ne(ae.entries, {
        key: U(at),
        value: U(qe)
      }), b || this.size++, ae.updateURL();
    },
    delete: function(Ve) {
      for (var at = He(this), qe = Re(arguments.length, 1), ae = at.entries, Se = U(Ve), Te = qe < 2 ? void 0 : arguments[1], je = Te === void 0 ? Te : U(Te), be = 0; be < ae.length; ) {
        var Qe = ae[be];
        Qe.key === Se && (je === void 0 || Qe.value === je) ? nt(ae, be, 1) : be++;
      }
      b || (this.size = ae.length), at.updateURL();
    },
    get: function(at) {
      var qe = He(this).entries;
      Re(arguments.length, 1);
      for (var ae = U(at), Se = 0; Se < qe.length; Se++) if (qe[Se].key === ae) return qe[Se].value;
      return null;
    },
    getAll: function(at) {
      var qe = He(this).entries;
      Re(arguments.length, 1);
      for (var ae = U(at), Se = [], Te = 0; Te < qe.length; Te++) qe[Te].key === ae && Ne(Se, qe[Te].value);
      return Se;
    },
    has: function(at) {
      for (var qe = He(this).entries, ae = Re(arguments.length, 1), Se = U(at), Te = ae < 2 ? void 0 : arguments[1], je = Te === void 0 ? Te : U(Te), be = 0; be < qe.length; ) {
        var Qe = qe[be++];
        if (Qe.key === Se && (je === void 0 || Qe.value === je)) return !0;
      }
      return !1;
    },
    set: function(at, qe) {
      var ae = He(this);
      Re(arguments.length, 2);
      for (var Se = ae.entries, Te = !1, je = U(at), be = U(qe), Qe = 0, tt; Qe < Se.length; Qe++)
        tt = Se[Qe], tt.key === je && (Te ? nt(Se, Qe--, 1) : (Te = !0, tt.value = be));
      Te || Ne(Se, {
        key: je,
        value: be
      }), b || (this.size = Se.length), ae.updateURL();
    },
    sort: function() {
      var at = He(this);
      P(at.entries, function(qe, ae) {
        return qe.key > ae.key ? 1 : -1;
      }), at.updateURL();
    },
    forEach: function(at) {
      for (var qe = He(this).entries, ae = ue(at, arguments.length > 1 ? arguments[1] : void 0), Se = 0, Te; Se < qe.length; )
        Te = qe[Se++], ae(Te.value, Te.key, this);
    },
    keys: function() {
      return new ce(this, "keys");
    },
    values: function() {
      return new ce(this, "values");
    },
    entries: function() {
      return new ce(this, "entries");
    }
  }, { enumerable: !0 }), T(Fe, oe, Fe.entries, { name: "entries" }), T(Fe, "toString", function() {
    return He(this).serialize();
  }, { enumerable: !0 }), b && S(Fe, "size", {
    get: function() {
      return He(this).entries.length;
    },
    configurable: !0,
    enumerable: !0
  }), V(Ye, Ae), r({
    global: !0,
    constructor: !0,
    forced: !h
  }, { URLSearchParams: Ye }), !h && G(m)) {
    var We = l(te.has), ht = l(te.set), mt = function(Ve) {
      if (H(Ve)) {
        var at = Ve.body, qe;
        if (re(at) === Ae)
          return qe = Ve.headers ? new m(Ve.headers) : new m(), We(qe, "content-type") || ht(qe, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), D(Ve, {
            body: Q(0, U(at)),
            headers: Q(0, qe)
          });
      }
      return Ve;
    };
    if (G(z) && r({
      global: !0,
      enumerable: !0,
      dontCallGetSet: !0,
      forced: !0
    }, { fetch: function(at) {
      return z(at, arguments.length > 1 ? mt(arguments[1]) : {});
    } }), G(F)) {
      var ct = function(at) {
        return B(this, he), new F(at, arguments.length > 1 ? mt(arguments[1]) : {});
      };
      he.constructor = ct, ct.prototype = he, r({
        global: !0,
        constructor: !0,
        dontCallGetSet: !0,
        forced: !0
      }, { Request: ct });
    }
  }
  e.exports = {
    URLSearchParams: Ye,
    getState: He
  };
})), cl = /* @__PURE__ */ J((() => {
  jn();
  var c = $t(), e = Yt(), r = Cu(), n = Dt(), i = ln(), s = Ut(), l = Tr(), b = Zr(), h = _n(), E = tr(), T = ku(), S = Ss(), j = on(), V = Ci().codeAt, O = ol(), X = Ou(), B = hr(), G = Qr(), Y = ki(), ue = Pu(), re = Mr(), se = re.set, H = re.getterFor("URL"), U = ue.URLSearchParams, D = ue.getState, Q = X.decode, ve = X.encode, L = n.URL, le = n.TypeError, Re = n.parseInt, fe = Math.floor, P = Math.pow, oe = String.fromCharCode, Ae = s("".charAt), Ce = s(/./.exec), $ = s([].join), He = s(1.1.toString), ot = s([].pop), vt = s([].push), Ie = s("".replace), z = s([].shift), F = s("".split), m = s("".indexOf), he = s("".slice), te = s("".toLowerCase), De = s([].unshift), ee = "Invalid authority", pe = "Invalid scheme", Ne = "Invalid host", $e = "Invalid port", Oe = /[a-z]/i, nt = /[\d+\-.a-z]/i, Ze = /\d/, Je = /^0x/i, _t = /^[0-7]+$/, ft = /^\d+$/, lt = /^[\da-f]+$/i, ze = /[\u0000-\u0020#%/:<>?@[\\\]^|\u007F]/, _e = /[\0\t\n\r #/:<>?@[\\\]^|]/, de = /^[\u0000-\u0020]+/, ce = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, ye = /[\t\n\r]/g, Ye = /[^\u0000-\u007F]/, Fe = "¨¯´¸˘˙˚˛˜˝ͺ΄΅᾽᾿῀῁῍῎῏῝῞῟῭΅´῾‗‾⁇⁈⁉℀℁℅℆⩴゛゜ﱞﱟﱠﱡﱢﱣﷺﷻ︓︖﹇﹈﹉﹊﹋﹌﹕﹖﹟﹤﹥﹨﹪﹫ﹰﹲﹴﹶﹸﹺﹼﹾ￣", We, ht = function(Ee) {
    return Ee === 173 || Ee === 847 || Ee === 8203 || Ee === 12644 || Ee === 65279 || Ee === 65440 || Ee >= 4447 && Ee <= 4448 || Ee >= 6068 && Ee <= 6069 || Ee >= 6155 && Ee <= 6159 || Ee >= 8288 && Ee <= 8292 || Ee >= 8298 && Ee <= 8303 || Ee >= 65024 && Ee <= 65039 || Ee >= 917760 && Ee <= 917999;
  }, mt = function(Ee) {
    return Ee === 65533 || Ee >= 55296 && Ee <= 57343 || Ee >= 128 && Ee <= 159 || Ee >= 8206 && Ee <= 8207 || Ee >= 8232 && Ee <= 8233 || Ee >= 8234 && Ee <= 8238 || Ee >= 8293 && Ee <= 8297 || Ee >= 64976 && Ee <= 65007 || (Ee & 65534) === 65534 || Ee >= 57344 && Ee <= 63743 || Ee >= 983040 && Ee <= 1114109;
  }, ct = function(Ee) {
    return Ee >= 65281 && Ee <= 65374 ? Ee - 65248 : Ee === 160 || Ee === 5760 || Ee === 8239 || Ee === 8287 || Ee === 12288 || Ee >= 8192 && Ee <= 8202 || Ee <= 65535 && m(Fe, oe(Ee)) > -1 ? 32 : Ee;
  }, Ve = function(Ee) {
    if (!Ce(Ye, Ee)) return Ee === "" ? null : O(Ee);
    for (var it = S(Ee), Ke = "", xe = 0, dt, kt; xe < it.length; xe++) {
      if (dt = V(it[xe], 0), mt(dt)) return null;
      ht(dt) || (kt = ct(dt), Ke += kt === dt ? it[xe] : oe(kt));
    }
    return Ke === "" ? null : O(Ke);
  }, at = function(Ee) {
    var it = F(Ee, "."), Ke, xe;
    if (it[it.length - 1] === "") {
      if (it.length === 1) return !1;
      it.length--;
    }
    return Ke = it[it.length - 1], Ce(ft, Ke) ? !0 : Ce(Je, Ke) ? (xe = he(Ke, 2), xe === "" || !!Ce(lt, xe)) : !1;
  }, qe = function(Ee) {
    var it = F(Ee, "."), Ke, xe, dt, kt, It, zt, qt;
    if (it.length && it[it.length - 1] === "" && it.length--, Ke = it.length, Ke > 4) return null;
    for (xe = [], dt = 0; dt < Ke; dt++) {
      if (kt = it[dt], kt === "") return null;
      if (It = 10, kt.length > 1 && Ae(kt, 0) === "0" && (It = Ce(Je, kt) ? 16 : 8, kt = he(kt, It === 8 ? 1 : 2)), kt === "") zt = 0;
      else {
        if (!Ce(It === 10 ? ft : It === 8 ? _t : lt, kt)) return null;
        zt = Re(kt, It);
      }
      vt(xe, zt);
    }
    for (dt = 0; dt < Ke; dt++)
      if (zt = xe[dt], dt === Ke - 1) {
        if (zt >= P(256, 5 - Ke)) return null;
      } else if (zt > 255) return null;
    for (qt = ot(xe), dt = 0; dt < xe.length; dt++) qt += xe[dt] * P(256, 3 - dt);
    return qt;
  }, ae = function(Ee) {
    var it = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ], Ke = 0, xe = null, dt = 0, kt, It, zt, qt, nr, ur, ut, Rt = function() {
      return Ae(Ee, dt);
    };
    if (Rt() === ":") {
      if (Ae(Ee, 1) !== ":") return;
      dt += 2, Ke++, xe = Ke;
    }
    for (; Rt(); ) {
      if (Ke === 8) return;
      if (Rt() === ":") {
        if (xe !== null) return;
        dt++, Ke++, xe = Ke;
        continue;
      }
      for (kt = It = 0; It < 4 && Ce(lt, Rt()); )
        kt = kt * 16 + Re(Rt(), 16), dt++, It++;
      if (Rt() === ".") {
        if (It === 0 || (dt -= It, Ke > 6)) return;
        for (zt = 0; Rt(); ) {
          if (qt = null, zt > 0)
            if (Rt() === "." && zt < 4) dt++;
            else return;
          if (!Ce(Ze, Rt())) return;
          for (; Ce(Ze, Rt()); ) {
            if (nr = Re(Rt(), 10), qt === null) qt = nr;
            else {
              if (qt === 0) return;
              qt = qt * 10 + nr;
            }
            if (qt > 255) return;
            dt++;
          }
          it[Ke] = it[Ke] * 256 + qt, zt++, (zt === 2 || zt === 4) && Ke++;
        }
        if (zt !== 4) return;
        break;
      } else if (Rt() === ":") {
        if (dt++, !Rt()) return;
      } else if (Rt()) return;
      it[Ke++] = kt;
    }
    if (xe !== null)
      for (ur = Ke - xe, Ke = 7; Ke !== 0 && ur > 0; )
        ut = it[Ke], it[Ke--] = it[xe + ur - 1], it[xe + --ur] = ut;
    else if (Ke !== 8) return;
    return it;
  }, Se = function(Ee) {
    for (var it = null, Ke = 1, xe = null, dt = 0, kt = 0; kt < 8; kt++) Ee[kt] !== 0 ? (dt > Ke && (it = xe, Ke = dt), xe = null, dt = 0) : (xe === null && (xe = kt), ++dt);
    return dt > Ke ? xe : it;
  }, Te = function(Ee) {
    var it, Ke, xe, dt;
    if (typeof Ee == "number") {
      for (it = [], Ke = 0; Ke < 4; Ke++)
        De(it, Ee % 256), Ee = fe(Ee / 256);
      return $(it, ".");
    }
    if (typeof Ee == "object") {
      for (it = "", xe = Se(Ee), Ke = 0; Ke < 8; Ke++)
        dt && Ee[Ke] === 0 || (dt && (dt = !1), xe === Ke ? (it += Ke ? ":" : "::", dt = !0) : (it += He(Ee[Ke], 16), Ke < 7 && (it += ":")));
      return "[" + it + "]";
    }
    return Ee;
  }, je = {}, be = T({}, je, {
    " ": 1,
    '"': 1,
    "#": 1,
    "<": 1,
    ">": 1
  }), Qe = T({}, be, { "'": 1 }), tt = T({}, je, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }), gt = T({}, tt, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1,
    "^": 1
  }), Pt = T({}, gt, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }), Et = function(Ee, it) {
    var Ke = V(Ee, 0);
    return Ke >= 32 && Ke < 127 && !E(it, Ee) ? Ee : Ee === "'" && E(it, Ee) ? "%27" : ve(Ee);
  }, At = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  }, Tt = function(Ee, it) {
    var Ke;
    return Ee.length === 2 && Ce(Oe, Ae(Ee, 0)) && ((Ke = Ae(Ee, 1)) === ":" || !it && Ke === "|");
  }, ir = function(Ee) {
    var it;
    return Ee.length > 1 && Tt(he(Ee, 0, 2)) && (Ee.length === 2 || (it = Ae(Ee, 2)) === "/" || it === "\\" || it === "?" || it === "#");
  }, Lt = function(Ee) {
    return Ee === "." || te(Ee) === "%2e";
  }, Xt = function(Ee) {
    return Ee = te(Ee), Ee === ".." || Ee === "%2e." || Ee === ".%2e" || Ee === "%2e%2e";
  }, Wt = {}, jr = {}, Rr = {}, sr = {}, wr = {}, fr = {}, yr = {}, Sr = {}, Ur = {}, zr = {}, rn = {}, Lr = {}, Vr = {}, Kr = {}, Er = {}, $r = {}, Cr = {}, ar = {}, kr = {}, Zt = {}, dr = {}, Jr = function(Ee, it, Ke) {
    var xe = B(Ee), dt, kt, It;
    if (it) {
      if (kt = this.parse(xe), kt) throw new le(kt);
      this.searchParams = null;
    } else {
      if (Ke !== void 0 && (dt = new Jr(Ke, !0)), kt = this.parse(xe, null, dt), kt) throw new le(kt);
      It = D(new U()), It.bindURL(this), this.searchParams = It;
    }
  };
  Jr.prototype = {
    type: "URL",
    parse: function(Ee, it, Ke) {
      var xe = this, dt = it || Wt, kt = 0, It = "", zt = !1, qt = !1, nr = !1, ur, ut, Rt, Ir;
      for (Ee = B(Ee), it || (xe.scheme = "", xe.username = "", xe.password = "", xe.host = null, xe.port = null, xe.path = [], xe.query = null, xe.fragment = null, xe.cannotBeABaseURL = !1, Ee = Ie(Ee, de, ""), Ee = Ie(Ee, ce, "$1")), Ee = Ie(Ee, ye, ""), ur = S(Ee); kt <= ur.length; ) {
        switch (ut = ur[kt], dt) {
          case Wt:
            if (ut && Ce(Oe, ut))
              It += te(ut), dt = jr;
            else {
              if (it)
                return pe;
              dt = Rr;
              continue;
            }
            break;
          case jr:
            if (ut && Ce(nt, ut)) It += te(ut);
            else if (ut === ":") {
              if (it && (xe.isSpecial() !== E(At, It) || It === "file" && (xe.includesCredentials() || xe.port !== null) || xe.scheme === "file" && xe.host === "")) return;
              if (xe.scheme = It, it) {
                xe.isSpecial() && At[xe.scheme] === xe.port && (xe.port = null);
                return;
              }
              It = "", xe.scheme === "file" ? dt = Kr : xe.isSpecial() && Ke && Ke.scheme === xe.scheme ? dt = sr : xe.isSpecial() ? dt = Sr : ur[kt + 1] === "/" ? (dt = wr, kt++) : (xe.cannotBeABaseURL = !0, vt(xe.path, ""), dt = kr);
            } else {
              if (it)
                return pe;
              It = "", dt = Rr, kt = 0;
              continue;
            }
            break;
          case Rr:
            if (!Ke || Ke.cannotBeABaseURL && ut !== "#") return pe;
            if (Ke.cannotBeABaseURL && ut === "#") {
              xe.scheme = Ke.scheme, xe.path = j(Ke.path), xe.query = Ke.query, xe.fragment = "", xe.cannotBeABaseURL = !0, dt = dr;
              break;
            }
            dt = Ke.scheme === "file" ? Kr : fr;
            continue;
          case sr:
            if (ut === "/" && ur[kt + 1] === "/")
              dt = Ur, kt++;
            else {
              dt = fr;
              continue;
            }
            break;
          case wr:
            if (ut === "/") {
              dt = zr;
              break;
            } else {
              dt = ar;
              continue;
            }
          case fr:
            if (xe.scheme = Ke.scheme, ut === We)
              xe.username = Ke.username, xe.password = Ke.password, xe.host = Ke.host, xe.port = Ke.port, xe.path = j(Ke.path), xe.query = Ke.query;
            else if (ut === "/" || ut === "\\" && xe.isSpecial()) dt = yr;
            else if (ut === "?")
              xe.username = Ke.username, xe.password = Ke.password, xe.host = Ke.host, xe.port = Ke.port, xe.path = j(Ke.path), xe.query = "", dt = Zt;
            else if (ut === "#")
              xe.username = Ke.username, xe.password = Ke.password, xe.host = Ke.host, xe.port = Ke.port, xe.path = j(Ke.path), xe.query = Ke.query, xe.fragment = "", dt = dr;
            else {
              xe.username = Ke.username, xe.password = Ke.password, xe.host = Ke.host, xe.port = Ke.port, xe.path = j(Ke.path), xe.path.length && xe.path.length--, dt = ar;
              continue;
            }
            break;
          case yr:
            if (xe.isSpecial() && (ut === "/" || ut === "\\")) dt = Ur;
            else if (ut === "/") dt = zr;
            else {
              xe.username = Ke.username, xe.password = Ke.password, xe.host = Ke.host, xe.port = Ke.port, dt = ar;
              continue;
            }
            break;
          case Sr:
            if (dt = Ur, ut !== "/" || ur[kt + 1] !== "/") continue;
            kt++;
            break;
          case Ur:
            if (ut !== "/" && ut !== "\\") {
              dt = zr;
              continue;
            }
            break;
          case zr:
            if (ut === "@") {
              zt && (It = "%40" + It), zt = !0, Rt = S(It);
              for (var we = 0; we < Rt.length; we++) {
                var Pe = Rt[we];
                if (Pe === ":" && !nr) {
                  nr = !0;
                  continue;
                }
                var Z = Et(Pe, Pt);
                nr ? xe.password += Z : xe.username += Z;
              }
              It = "";
            } else if (ut === We || ut === "/" || ut === "?" || ut === "#" || ut === "\\" && xe.isSpecial()) {
              if (zt && It === "") return ee;
              kt -= S(It).length + 1, It = "", dt = rn;
            } else It += ut;
            break;
          case rn:
          case Lr:
            if (it && xe.scheme === "file") {
              dt = $r;
              continue;
            } else if (ut === ":" && !qt) {
              if (It === "") return Ne;
              if (it === Lr) return;
              if (Ir = xe.parseHost(It), Ir) return Ir;
              It = "", dt = Vr;
            } else if (ut === We || ut === "/" || ut === "?" || ut === "#" || ut === "\\" && xe.isSpecial()) {
              if (xe.isSpecial() && It === "") return Ne;
              if (it && It === "" && (xe.includesCredentials() || xe.port !== null)) return;
              if (Ir = xe.parseHost(It), Ir) return Ir;
              if (It = "", dt = Cr, it) return;
              continue;
            } else
              ut === "[" ? qt = !0 : ut === "]" && (qt = !1), It += ut;
            break;
          case Vr:
            if (Ce(Ze, ut)) It += ut;
            else if (ut === We || ut === "/" || ut === "?" || ut === "#" || ut === "\\" && xe.isSpecial() || it) {
              if (It !== "") {
                var K = Re(It, 10);
                if (K > 65535) return $e;
                xe.port = xe.isSpecial() && K === At[xe.scheme] ? null : K, It = "";
              }
              if (it) return;
              dt = Cr;
              continue;
            } else return $e;
            break;
          case Kr:
            if (xe.scheme = "file", xe.host = "", ut === "/" || ut === "\\") dt = Er;
            else if (Ke && Ke.scheme === "file") switch (ut) {
              case We:
                xe.host = Ke.host, xe.path = j(Ke.path), xe.query = Ke.query;
                break;
              case "?":
                xe.host = Ke.host, xe.path = j(Ke.path), xe.query = "", dt = Zt;
                break;
              case "#":
                xe.host = Ke.host, xe.path = j(Ke.path), xe.query = Ke.query, xe.fragment = "", dt = dr;
                break;
              default:
                xe.host = Ke.host, ir($(j(ur, kt), "")) || (xe.path = j(Ke.path), xe.shortenPath()), dt = ar;
                continue;
            }
            else {
              dt = ar;
              continue;
            }
            break;
          case Er:
            if (ut === "/" || ut === "\\") {
              dt = $r;
              break;
            }
            Ke && Ke.scheme === "file" && (xe.host = Ke.host, !ir($(j(ur, kt), "")) && Tt(Ke.path[0], !0) && vt(xe.path, Ke.path[0])), dt = ar;
            continue;
          case $r:
            if (ut === We || ut === "/" || ut === "\\" || ut === "?" || ut === "#") {
              if (!it && Tt(It)) dt = ar;
              else if (It === "") {
                if (xe.host = "", it) return;
                dt = Cr;
              } else {
                if (Ir = xe.parseHost(It), Ir) return Ir;
                if (xe.host === "localhost" && (xe.host = ""), it) return;
                It = "", dt = Cr;
              }
              continue;
            } else It += ut;
            break;
          case Cr:
            if (xe.isSpecial()) {
              if (dt = ar, ut !== "/" && ut !== "\\") continue;
            } else if (!it && ut === "?")
              xe.query = "", dt = Zt;
            else if (!it && ut === "#")
              xe.fragment = "", dt = dr;
            else if (ut !== We && (dt = ar, ut !== "/"))
              continue;
            break;
          case ar:
            if (ut === We || ut === "/" || ut === "\\" && xe.isSpecial() || !it && (ut === "?" || ut === "#")) {
              if (Xt(It) ? (xe.shortenPath(), ut !== "/" && !(ut === "\\" && xe.isSpecial()) && vt(xe.path, "")) : Lt(It) ? ut !== "/" && !(ut === "\\" && xe.isSpecial()) && vt(xe.path, "") : (xe.scheme === "file" && !xe.path.length && Tt(It) && (xe.host !== null && xe.host !== "" && (xe.host = ""), It = Ae(It, 0) + ":"), vt(xe.path, It)), It = "", xe.scheme === "file" && (ut === We || ut === "?" || ut === "#")) for (; xe.path.length > 1 && xe.path[0] === ""; ) z(xe.path);
              ut === "?" ? (xe.query = "", dt = Zt) : ut === "#" && (xe.fragment = "", dt = dr);
            } else It += Et(ut, gt);
            break;
          case kr:
            ut === "?" ? (xe.query = "", dt = Zt) : ut === "#" ? (xe.fragment = "", dt = dr) : ut !== We && (ut === " " ? xe.path[0] += ur[kt + 1] === "?" || ur[kt + 1] === "#" ? "%20" : " " : xe.path[0] += Et(ut, je));
            break;
          case Zt:
            !it && ut === "#" ? (xe.fragment = "", dt = dr) : ut !== We && (xe.query += Et(ut, xe.isSpecial() ? Qe : be));
            break;
          case dr:
            ut !== We && (xe.fragment += Et(ut, tt));
        }
        kt++;
      }
    },
    parseHost: function(Ee) {
      var it, Ke, xe;
      if (Ae(Ee, 0) === "[") {
        if (Ae(Ee, Ee.length - 1) !== "]" || (it = ae(he(Ee, 1, -1)), !it)) return Ne;
        this.host = it;
      } else if (this.isSpecial()) {
        if (Ee = Ve(Q(Ee)), Ee === null || Ce(ze, Ee)) return Ne;
        if (at(Ee)) {
          if (it = qe(Ee), it === null) return Ne;
          this.host = it;
        } else this.host = Ee;
      } else {
        if (Ce(_e, Ee)) return Ne;
        for (it = "", Ke = S(Ee), xe = 0; xe < Ke.length; xe++) it += Et(Ke[xe], je);
        this.host = it;
      }
    },
    cannotHaveUsernamePasswordPort: function() {
      return this.host === null || this.host === "" || this.cannotBeABaseURL || this.scheme === "file";
    },
    includesCredentials: function() {
      return this.username !== "" || this.password !== "";
    },
    isSpecial: function() {
      return E(At, this.scheme);
    },
    shortenPath: function() {
      var Ee = this.path, it = Ee.length;
      it && (this.scheme !== "file" || it !== 1 || !Tt(Ee[0], !0)) && Ee.length--;
    },
    serialize: function() {
      var Ee = this, it = Ee.scheme, Ke = Ee.username, xe = Ee.password, dt = Ee.host, kt = Ee.port, It = Ee.path, zt = Ee.query, qt = Ee.fragment, nr = it + ":";
      return dt !== null ? (nr += "//", Ee.includesCredentials() && (nr += Ke + (xe ? ":" + xe : "") + "@"), nr += Te(dt), kt !== null && (nr += ":" + kt)) : it === "file" && (nr += "//"), dt === null && !Ee.cannotBeABaseURL && It.length > 1 && It[0] === "" && (nr += "/."), nr += Ee.cannotBeABaseURL ? It[0] : It.length ? "/" + $(It, "/") : "", zt !== null && (nr += "?" + zt), qt !== null && (nr += "#" + qt), nr;
    },
    setHref: function(Ee) {
      var it = this.parse(Ee);
      if (it) throw new le(it);
      this.searchParams.update();
    },
    getOrigin: function() {
      var Ee = this.scheme, it = this.port;
      if (Ee === "blob") try {
        return new Or(this.path[0]).origin;
      } catch {
        return "null";
      }
      return Ee === "file" || !this.isSpecial() ? "null" : Ee + "://" + Te(this.host) + (it !== null ? ":" + it : "");
    },
    getProtocol: function() {
      return this.scheme + ":";
    },
    setProtocol: function(Ee) {
      this.parse(B(Ee) + ":", Wt);
    },
    getUsername: function() {
      return this.username;
    },
    setUsername: function(Ee) {
      var it = S(B(Ee));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = "";
        for (var Ke = 0; Ke < it.length; Ke++) this.username += Et(it[Ke], Pt);
      }
    },
    getPassword: function() {
      return this.password;
    },
    setPassword: function(Ee) {
      var it = S(B(Ee));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = "";
        for (var Ke = 0; Ke < it.length; Ke++) this.password += Et(it[Ke], Pt);
      }
    },
    getHost: function() {
      var Ee = this.host, it = this.port;
      return Ee === null ? "" : it === null ? Te(Ee) : Te(Ee) + ":" + it;
    },
    setHost: function(Ee) {
      this.cannotBeABaseURL || this.parse(Ee, rn);
    },
    getHostname: function() {
      var Ee = this.host;
      return Ee === null ? "" : Te(Ee);
    },
    setHostname: function(Ee) {
      this.cannotBeABaseURL || this.parse(Ee, Lr);
    },
    getPort: function() {
      var Ee = this.port;
      return Ee === null ? "" : B(Ee);
    },
    setPort: function(Ee) {
      this.cannotHaveUsernamePasswordPort() || (Ee = B(Ee), Ee === "" ? this.port = null : this.parse(Ee, Vr));
    },
    getPathname: function() {
      var Ee = this.path;
      return this.cannotBeABaseURL ? Ee[0] : Ee.length ? "/" + $(Ee, "/") : "";
    },
    setPathname: function(Ee) {
      this.cannotBeABaseURL || (this.path = [], this.parse(Ee, Cr));
    },
    getSearch: function() {
      var Ee = this.query;
      return Ee ? "?" + Ee : "";
    },
    setSearch: function(Ee) {
      Ee = B(Ee), Ee === "" ? this.query = null : (Ae(Ee, 0) === "?" && (Ee = he(Ee, 1)), this.query = "", this.parse(Ee, Zt)), this.searchParams.update();
    },
    getSearchParams: function() {
      return this.searchParams.facade;
    },
    getHash: function() {
      var Ee = this.fragment;
      return Ee ? "#" + Ee : "";
    },
    setHash: function(Ee) {
      if (Ee = B(Ee), Ee === "") {
        this.fragment = null;
        return;
      }
      Ae(Ee, 0) === "#" && (Ee = he(Ee, 1)), this.fragment = "", this.parse(Ee, dr);
    },
    update: function() {
      this.query = this.searchParams.serialize() || null;
    }
  };
  var Or = function(it) {
    var Ke = h(this, rr), xe = se(Ke, new Jr(it, !1, Y(arguments.length, 1) > 1 ? arguments[1] : void 0));
    e || (Ke.href = xe.serialize(), Ke.origin = xe.getOrigin(), Ke.protocol = xe.getProtocol(), Ke.username = xe.getUsername(), Ke.password = xe.getPassword(), Ke.host = xe.getHost(), Ke.hostname = xe.getHostname(), Ke.port = xe.getPort(), Ke.pathname = xe.getPathname(), Ke.search = xe.getSearch(), Ke.searchParams = xe.getSearchParams(), Ke.hash = xe.getHash());
  }, rr = Or.prototype, lr = function(Ee, it) {
    return {
      get: function() {
        return H(this)[Ee]();
      },
      set: it && function(Ke) {
        return H(this)[it](Ke);
      },
      configurable: !0,
      enumerable: !0
    };
  };
  if (e && (b(rr, "href", lr("serialize", "setHref")), b(rr, "origin", lr("getOrigin")), b(rr, "protocol", lr("getProtocol", "setProtocol")), b(rr, "username", lr("getUsername", "setUsername")), b(rr, "password", lr("getPassword", "setPassword")), b(rr, "host", lr("getHost", "setHost")), b(rr, "hostname", lr("getHostname", "setHostname")), b(rr, "port", lr("getPort", "setPort")), b(rr, "pathname", lr("getPathname", "setPathname")), b(rr, "search", lr("getSearch", "setSearch")), b(rr, "searchParams", lr("getSearchParams")), b(rr, "hash", lr("getHash", "setHash"))), l(rr, "toJSON", function() {
    return H(this).serialize();
  }, { enumerable: !0 }), l(rr, "toString", function() {
    return H(this).serialize();
  }, { enumerable: !0 }), L) {
    var nn = L.createObjectURL, an = L.revokeObjectURL;
    nn && l(Or, "createObjectURL", i(nn, L)), an && l(Or, "revokeObjectURL", i(an, L));
  }
  G(Or, "URL"), c({
    global: !0,
    constructor: !0,
    forced: !r,
    sham: !e
  }, { URL: Or });
})), fl = /* @__PURE__ */ J((() => {
  cl();
})), dl = /* @__PURE__ */ J((() => {
  Pu();
})), pl = /* @__PURE__ */ J(((c) => {
  var e = typeof e < "u" ? e : typeof self < "u" ? self : typeof window < "u" ? window : {};
  Object.defineProperty(c, "__esModule", { value: !0 }), Cn(), On();
  var r = bn(), n = mn(), i = yn(), s = gn(), l = tn(), b = ai(), h = An();
  Mn(), Nn(), cn(), _a(), jn(), Jn();
  var E = oa(), T = ha();
  xn(), Da(), la();
  var S = en();
  Vn();
  var j = Kn();
  Eu(), ua(), Un(), bu(), Xa(), ga(), ei(), ia(), zi(), fl(), dl();
  var V = wa(), O = ba();
  function X(ze) {
    return ze && typeof ze == "object" && "default" in ze ? ze : { default: ze };
  }
  function B(ze) {
    if (ze && ze.__esModule) return ze;
    var _e = /* @__PURE__ */ Object.create(null);
    return ze && Object.keys(ze).forEach(function(de) {
      if (de !== "default") {
        var ce = Object.getOwnPropertyDescriptor(ze, de);
        Object.defineProperty(_e, de, ce.get ? ce : {
          enumerable: !0,
          get: function() {
            return ze[de];
          }
        });
      }
    }), _e.default = ze, Object.freeze(_e);
  }
  var G = /* @__PURE__ */ X(r), Y = /* @__PURE__ */ X(n), ue = /* @__PURE__ */ X(i), re = /* @__PURE__ */ X(s), se = /* @__PURE__ */ X(l), H = /* @__PURE__ */ X(b), U = /* @__PURE__ */ X(h), D = /* @__PURE__ */ X(E), Q = /* @__PURE__ */ X(T), ve = /* @__PURE__ */ X(S), L = /* @__PURE__ */ B(j), le = function() {
    return crypto.randomUUID();
  };
  function Re(ze) {
    var _e = fe();
    return function() {
      var ce = se.default(ze), ye;
      if (_e) {
        var Ye = se.default(this).constructor;
        ye = Reflect.construct(ce, arguments, Ye);
      } else ye = ce.apply(this, arguments);
      return re.default(this, ye);
    };
  }
  function fe() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var P = /* @__PURE__ */ (function(ze) {
    ue.default(de, ze);
    var _e = Re(de);
    function de(ce) {
      var ye;
      G.default(this, de);
      var Ye = le(), Fe;
      return ye = _e.call(this, function(We, ht) {
        return Fe = ht, ce(function(mt) {
          de.cancellationMap.delete(Ye), We(mt);
        }, function(mt) {
          de.cancellationMap.delete(Ye), ht(mt);
        }, function(mt) {
          de.cancellationMap.set(Ye, mt);
        });
      }), ye.id = Ye, ye.rejectPromise = Fe, ye;
    }
    return Y.default(de, [{
      key: "cancel",
      value: function() {
        var ye = de.cancellationMap.get(this.id);
        return ye?.(), this.rejectPromise && (this.catch(function() {
        }), this.rejectPromise(/* @__PURE__ */ new Error("Promise was cancelled"))), this;
      }
    }]), de;
  })(/* @__PURE__ */ H.default(Promise));
  U.default(P, "cancellationMap", /* @__PURE__ */ new Map());
  function oe(ze, _e, de, ce) {
    var ye = arguments.length, Ye = ye < 3 ? _e : ce === null ? ce = Object.getOwnPropertyDescriptor(_e, de) : ce, Fe;
    if ((typeof Reflect > "u" ? "undefined" : ve.default(Reflect)) === "object" && typeof Reflect.decorate == "function") Ye = Reflect.decorate(ze, _e, de, ce);
    else for (var We = ze.length - 1; We >= 0; We--) (Fe = ze[We]) && (Ye = (ye < 3 ? Fe(Ye) : ye > 3 ? Fe(_e, de, Ye) : Fe(_e, de)) || Ye);
    return ye > 3 && Ye && Object.defineProperty(_e, de, Ye), Ye;
  }
  function Ae(ze, _e) {
    if ((typeof Reflect > "u" ? "undefined" : ve.default(Reflect)) === "object" && typeof Reflect.metadata == "function") return Reflect.metadata(ze, _e);
  }
  function Ce(ze, _e) {
    return ["".concat((/* @__PURE__ */ new Date()).toISOString(), " MCS Client ").concat(ze, ":")].concat(Array.from(_e));
  }
  var $ = /* @__PURE__ */ (function() {
    function ze(_e) {
      G.default(this, ze), U.default(this, "prefix", ""), this.prefix = _e != null && _e.length > 0 ? _e + " " : "";
    }
    return Y.default(ze, [
      {
        key: "setLevel",
        value: function(de) {
          L.setLevel(de);
        }
      },
      {
        key: "trace",
        value: function() {
          if (L.getLevel() == L.levels.TRACE) {
            for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
            L.debug.apply(null, Ce(this.prefix + "T", ce));
          }
        }
      },
      {
        key: "debug",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.debug.apply(null, Ce(this.prefix + "D", ce));
        }
      },
      {
        key: "info",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.info.apply(null, Ce(this.prefix + "I", ce));
        }
      },
      {
        key: "warn",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.warn.apply(null, Ce(this.prefix + "W", ce));
        }
      },
      {
        key: "error",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.error.apply(null, Ce(this.prefix + "E", ce));
        }
      }
    ], [
      {
        key: "scope",
        value: function(de) {
          return new ze(de);
        }
      },
      {
        key: "setLevel",
        value: function(de) {
          L.setLevel(de);
        }
      },
      {
        key: "trace",
        value: function() {
          if (L.getLevel() == L.levels.TRACE) {
            for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
            L.debug.apply(null, Ce("T", ce));
          }
        }
      },
      {
        key: "debug",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.debug.apply(null, Ce("D", ce));
        }
      },
      {
        key: "info",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.info.apply(null, Ce("I", ce));
        }
      },
      {
        key: "warn",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.warn.apply(null, Ce("W", ce));
        }
      },
      {
        key: "error",
        value: function() {
          for (var de = arguments.length, ce = new Array(de), ye = 0; ye < de; ye++) ce[ye] = arguments[ye];
          L.error.apply(null, Ce("E", ce));
        }
      }
    ]), ze;
  })(), He = 1e3, ot = 4e3, vt = 3, Ie = !0, z = function(_e) {
    return "https://mcs.".concat(_e ?? "us1", ".twilio.com");
  }, F = function(_e) {
    return _e.startsWith("http");
  }, m = function(_e, de) {
    return "".concat(F(_e) ? "" : z(de)).concat(_e);
  }, he = /* @__PURE__ */ (function() {
    function ze(_e, de, ce, ye) {
      var Ye, Fe, We, ht, mt, ct;
      G.default(this, ze);
      var Ve = (Ye = (Fe = ye.MCS) !== null && Fe !== void 0 ? Fe : ye) !== null && Ye !== void 0 ? Ye : {};
      this.region = (We = (ht = Ve.region) !== null && ht !== void 0 ? ht : ye.region) !== null && We !== void 0 ? We : "us1", this.mediaUrl = m(de, this.region), this.mediaSetUrl = ce ? m(ce) : "".concat(this.mediaUrl, "Set"), this.token = _e, this.retryWhenThrottledOverride = (mt = Ve.retryWhenThrottledOverride) !== null && mt !== void 0 ? mt : Ie, this.backoffConfigOverride = (ct = Ve.backoffConfigOverride) !== null && ct !== void 0 ? ct : ze.backoffConfigDefault;
    }
    return Y.default(ze, [{
      key: "updateToken",
      value: function(de) {
        this.token = de;
      }
    }], [{
      key: "backoffConfigDefault",
      get: function() {
        return {
          min: He,
          max: ot,
          maxAttemptsCount: vt
        };
      }
    }, {
      key: "retryWhenThrottledDefault",
      get: function() {
        return Ie;
      }
    }]), ze;
  })(), te = /* @__PURE__ */ (function() {
    function ze(_e, de, ce) {
      G.default(this, ze), this.config = _e, this.network = de, this._update(ce);
    }
    return Y.default(ze, [
      {
        key: "sid",
        get: function() {
          return this.state.sid;
        }
      },
      {
        key: "serviceSid",
        get: function() {
          return this.state.serviceSid;
        }
      },
      {
        key: "dateCreated",
        get: function() {
          return this.state.dateCreated;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.state.dateUpdated;
        }
      },
      {
        key: "contentType",
        get: function() {
          return this.state.contentType;
        }
      },
      {
        key: "size",
        get: function() {
          return this.state.size;
        }
      },
      {
        key: "fileName",
        get: function() {
          return this.state.filename;
        }
      },
      {
        key: "filename",
        get: function() {
          return this.state.filename;
        }
      },
      {
        key: "category",
        get: function() {
          return this.state.category;
        }
      },
      {
        key: "getContentUrl",
        value: function() {
          var de = this;
          return new P(/* @__PURE__ */ (function() {
            var ce = D.default(/* @__PURE__ */ Q.default.mark(function ye(Ye, Fe, We) {
              var ht, mt;
              return Q.default.wrap(function(Ve) {
                for (; ; ) switch (Ve.prev = Ve.next) {
                  case 0:
                    return ht = de.network.get("".concat(de.config.mediaUrl, "/").concat(de.sid)), We(function() {
                      return ht.cancel();
                    }), Ve.prev = 2, Ve.next = 5, ht;
                  case 5:
                    mt = Ve.sent, de._update(mt.body), Ye(de.state.contentDirectUrl), Ve.next = 13;
                    break;
                  case 10:
                    Ve.prev = 10, Ve.t0 = Ve.catch(2), Fe(Ve.t0);
                  case 13:
                  case "end":
                    return Ve.stop();
                }
              }, ye, null, [[2, 10]]);
            }));
            return function(ye, Ye, Fe) {
              return ce.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "_update",
        value: function(de) {
          var ce, ye, Ye, Fe;
          this.state = {
            sid: de.sid,
            serviceSid: de.service_sid,
            channelSid: de.channel_sid,
            messageSid: de.message_sid,
            dateCreated: de.date_created ? new Date(de.date_created) : null,
            dateUploadUpdated: de.date_upload_updated ? new Date(de.date_upload_updated) : null,
            dateUpdated: de.date_updated ? new Date(de.date_updated) : null,
            size: de.size,
            contentType: de.content_type,
            author: de.author,
            url: de.url,
            contentUrl: de.links.content,
            contentDirectUrl: (ce = de.links.content_direct_temporary) !== null && ce !== void 0 ? ce : null,
            filename: (ye = de.filename) !== null && ye !== void 0 ? ye : null,
            category: (Ye = de.category) !== null && Ye !== void 0 ? Ye : "media",
            isMultipartUpstream: (Fe = de.is_multipart_upstream) !== null && Fe !== void 0 ? Fe : !1
          };
        }
      },
      {
        key: "_state",
        value: function() {
          var de;
          return {
            sid: this.state.sid,
            category: this.state.category,
            filename: (de = this.state.filename) !== null && de !== void 0 ? de : null,
            contentType: this.state.contentType,
            size: this.state.size
          };
        }
      }
    ]), ze;
  })();
  function De(ze) {
    var _e = ee();
    return function() {
      var ce = se.default(ze), ye;
      if (_e) {
        var Ye = se.default(this).constructor;
        ye = Reflect.construct(ce, arguments, Ye);
      } else ye = ce.apply(this, arguments);
      return re.default(this, ye);
    };
  }
  function ee() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var pe = /* @__PURE__ */ (function(ze) {
    ue.default(de, ze);
    var _e = De(de);
    function de(ce, ye, Ye, Fe, We) {
      var ht;
      return G.default(this, de), ht = _e.call(this, ce), ht.code = ye, ht.body = Ye, ht.status = Fe, ht.headers = We, ht;
    }
    return Y.default(de);
  })(/* @__PURE__ */ H.default(Error)), Ne = e.XMLHttpRequest || {};
  function $e(ze) {
    return ze ? ze.split(`\r
`).map(function(_e) {
      return _e.split(": ");
    }).filter(function(_e) {
      return _e.length === 2 && _e[1].length > 0;
    }).reduce(function(_e, de) {
      return _e[de[0]] = de[1], _e;
    }, {}) : {};
  }
  function Oe(ze) {
    var _e = ze.getResponseHeader("Content-Type");
    if (!_e || _e.indexOf("application/json") !== 0 || ze.responseText.length === 0) return ze.responseText;
    try {
      return JSON.parse(ze.responseText);
    } catch {
      return ze.responseText;
    }
  }
  var nt = /* @__PURE__ */ (function() {
    function ze() {
      G.default(this, ze);
    }
    return Y.default(ze, [{
      key: "get",
      value: function(de, ce) {
        return ze.request("GET", de, ce);
      }
    }, {
      key: "post",
      value: function(de, ce, ye) {
        return ze.request("POST", de, ce, ye);
      }
    }], [{
      key: "request",
      value: function(de, ce, ye, Ye) {
        return new P(function(Fe, We, ht) {
          var mt = new Ne(), ct = !1;
          ht(function() {
            mt.abort(), ct = !0;
          }), mt.open(de, ce, !0), mt.onreadystatechange = function() {
            if (!(mt.readyState !== 4 || ct)) {
              var qe = $e(mt.getAllResponseHeaders()), ae = Oe(mt);
              if (200 <= mt.status && mt.status < 300) Fe({
                status: mt.status,
                headers: qe,
                body: ae
              });
              else {
                var Se, Te = (Se = mt.statusText) !== null && Se !== void 0 ? Se : "NONE", je;
                if (typeof ae == "string")
                  if (ae && ae.split(`
`, 2).length === 1) je = ae;
                  else {
                    var be, Qe = (be = ae.replace(/<.*?>/g, "").split(/\r\n/g).filter(function(tt) {
                      return tt.length;
                    })[0]) === null || be === void 0 ? void 0 : be.split(" ");
                    je = Qe?.length > 2 ? Qe?.slice(1).join(" ") : "";
                  }
                else je = JSON.stringify(ae);
                We(new pe("".concat(mt.status, ": [").concat(Te, "] ").concat(je), mt.status, ae, Te, qe));
              }
            }
          };
          for (var Ve in ye)
            mt.setRequestHeader(Ve, ye[Ve]), Ve === "Content-Type" && ye[Ve] === "application/json" && (Ye = JSON.stringify(Ye));
          mt.send(Ye);
        });
      }
    }]), ze;
  })(), Ze = $.scope("Network"), Je = /* @__PURE__ */ (function() {
    function ze(_e, de) {
      G.default(this, ze), this.config = _e, this.transport = de;
    }
    return Y.default(ze, [
      {
        key: "backoffConfig",
        value: function() {
          return Object.assign(he.backoffConfigDefault, this.config.backoffConfigOverride);
        }
      },
      {
        key: "retryWhenThrottled",
        value: function() {
          var de, ce;
          return (de = (ce = this.config.retryWhenThrottledOverride) !== null && ce !== void 0 ? ce : he.retryWhenThrottledDefault) !== null && de !== void 0 ? de : !1;
        }
      },
      {
        key: "executeWithRetry",
        value: function(de, ce) {
          var ye = this;
          return new P(/* @__PURE__ */ (function() {
            var Ye = D.default(/* @__PURE__ */ Q.default.mark(function Fe(We, ht, mt) {
              var ct, Ve;
              return Q.default.wrap(function(qe) {
                for (; ; ) switch (qe.prev = qe.next) {
                  case 0:
                    ct = new V.Retrier(ye.backoffConfig()), Ve = [
                      502,
                      503,
                      504
                    ], ce && Ve.push(429), mt(function() {
                      ct.cancel(), ct.removeAllListeners();
                    }), ct.on("attempt", /* @__PURE__ */ D.default(/* @__PURE__ */ Q.default.mark(function ae() {
                      var Se, Te;
                      return Q.default.wrap(function(be) {
                        for (; ; ) switch (be.prev = be.next) {
                          case 0:
                            return be.prev = 0, Se = de(), mt(function() {
                              Se.cancel(), ct.cancel(), ct.removeAllListeners();
                            }), be.next = 5, Se;
                          case 5:
                            Te = be.sent, ct.succeeded(Te), be.next = 12;
                            break;
                          case 9:
                            be.prev = 9, be.t0 = be.catch(0), Ve.indexOf(be.t0.status) > -1 || be.t0.message === "Twilsock disconnected" ? ct.failed(be.t0) : (ct.removeAllListeners(), ct.cancel(), ht(be.t0));
                          case 12:
                          case "end":
                            return be.stop();
                        }
                      }, ae, null, [[0, 9]]);
                    }))), ct.on("succeeded", function(ae) {
                      We(ae);
                    }), ct.on("cancelled", function(ae) {
                      return ht(ae);
                    }), ct.on("failed", function(ae) {
                      return ht(ae);
                    }), ct.start();
                  case 9:
                  case "end":
                    return qe.stop();
                }
              }, Fe);
            }));
            return function(Fe, We, ht) {
              return Ye.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "get",
        value: function(de) {
          var ce = this;
          return new P(/* @__PURE__ */ (function() {
            var ye = D.default(/* @__PURE__ */ Q.default.mark(function Ye(Fe, We, ht) {
              var mt, ct, Ve;
              return Q.default.wrap(function(qe) {
                for (; ; ) switch (qe.prev = qe.next) {
                  case 0:
                    return mt = { "X-Twilio-Token": ce.config.token }, ct = ce.executeWithRetry(function() {
                      return ce.transport.get(de, mt);
                    }, ce.retryWhenThrottled()), Ze.trace("sending GET request to ", de, " headers ", mt), ht(function() {
                      return ct.cancel();
                    }), qe.prev = 4, qe.next = 7, ct;
                  case 7:
                    Ve = qe.sent, Ze.trace("response", Ve), Fe(Ve), qe.next = 16;
                    break;
                  case 12:
                    qe.prev = 12, qe.t0 = qe.catch(4), Ze.debug("get() error ".concat(qe.t0)), We(qe.t0);
                  case 16:
                  case "end":
                    return qe.stop();
                }
              }, Ye, null, [[4, 12]]);
            }));
            return function(Ye, Fe, We) {
              return ye.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "post",
        value: function(de, ce, ye, Ye, Fe) {
          var We = this, ht = { "X-Twilio-Token": this.config.token };
          (typeof FormData > "u" || !(ye instanceof FormData)) && Ye && Object.assign(ht, { "Content-Type": Ye });
          var mt = new URL(de);
          return ce && mt.searchParams.append("Category", ce), Fe && mt.searchParams.append("Filename", Fe), new P(/* @__PURE__ */ (function() {
            var ct = D.default(/* @__PURE__ */ Q.default.mark(function Ve(at, qe, ae) {
              var Se, Te;
              return Q.default.wrap(function(be) {
                for (; ; ) switch (be.prev = be.next) {
                  case 0:
                    return Se = We.transport.post(mt.href, ht, ye), ae(function() {
                      return Se.cancel();
                    }), Ze.trace("sending POST request to ".concat(de, " with headers ").concat(ht)), be.prev = 3, be.next = 6, Se;
                  case 6:
                    Te = be.sent, be.next = 17;
                    break;
                  case 9:
                    if (be.prev = 9, be.t0 = be.catch(3), !(e.XMLHttpRequest === void 0 && ye instanceof FormData)) {
                      be.next = 14;
                      break;
                    }
                    return qe(/* @__PURE__ */ new TypeError("Posting FormData supported only with browser engine's FormData")), be.abrupt("return");
                  case 14:
                    return Ze.debug("post() error ".concat(be.t0)), qe(be.t0), be.abrupt("return");
                  case 17:
                    Ze.trace("response", Te), at(Te);
                  case 19:
                  case "end":
                    return be.stop();
                }
              }, Ve, null, [[3, 9]]);
            }));
            return function(Ve, at, qe) {
              return ct.apply(this, arguments);
            };
          })());
        }
      }
    ]), ze;
  })(), _t = "1.0.1", ft, lt = $.scope("");
  c.default = (ft = /* @__PURE__ */ (function() {
    function ze(_e, de, ce) {
      var ye, Ye, Fe = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      G.default(this, ze), this.options = Fe, this.options.logLevel = (ye = this.options.logLevel) !== null && ye !== void 0 ? ye : "silent", this.config = new he(_e, de, ce, this.options), lt.setLevel(this.options.logLevel), this.options.transport = (Ye = this.options.transport) !== null && Ye !== void 0 ? Ye : new nt(), this.transport = this.options.transport, this.network = new Je(this.config, this.transport);
    }
    return Y.default(ze, [
      {
        key: "updateToken",
        value: function(de) {
          lt.info("updateToken"), this.config.updateToken(de);
        }
      },
      {
        key: "get",
        value: function(de) {
          var ce = this;
          return new P(/* @__PURE__ */ (function() {
            var ye = D.default(/* @__PURE__ */ Q.default.mark(function Ye(Fe, We, ht) {
              var mt, ct;
              return Q.default.wrap(function(at) {
                for (; ; ) switch (at.prev = at.next) {
                  case 0:
                    return mt = ce.network.get("".concat(ce.config.mediaUrl, "/").concat(de)), ht(function() {
                      return mt.cancel();
                    }), at.prev = 2, at.next = 5, mt;
                  case 5:
                    ct = at.sent, Fe(new te(ce.config, ce.network, ct.body)), at.next = 12;
                    break;
                  case 9:
                    at.prev = 9, at.t0 = at.catch(2), We(at.t0);
                  case 12:
                  case "end":
                    return at.stop();
                }
              }, Ye, null, [[2, 9]]);
            }));
            return function(Ye, Fe, We) {
              return ye.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "post",
        value: function(de, ce, ye, Ye) {
          var Fe = this;
          return new P(/* @__PURE__ */ (function() {
            var We = D.default(/* @__PURE__ */ Q.default.mark(function ht(mt, ct, Ve) {
              var at, qe;
              return Q.default.wrap(function(Se) {
                for (; ; ) switch (Se.prev = Se.next) {
                  case 0:
                    return at = Fe.network.post(Fe.config.mediaUrl, ye ?? "media", ce, de, Ye), Ve(function() {
                      return at.cancel();
                    }), Se.prev = 2, Se.next = 5, at;
                  case 5:
                    qe = Se.sent, mt(new te(Fe.config, Fe.network, qe.body)), Se.next = 12;
                    break;
                  case 9:
                    Se.prev = 9, Se.t0 = Se.catch(2), ct(Se.t0);
                  case 12:
                  case "end":
                    return Se.stop();
                }
              }, ht, null, [[2, 9]]);
            }));
            return function(ht, mt, ct) {
              return We.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "postFormData",
        value: function(de, ce) {
          var ye = this;
          return new P(/* @__PURE__ */ (function() {
            var Ye = D.default(/* @__PURE__ */ Q.default.mark(function Fe(We, ht, mt) {
              var ct, Ve;
              return Q.default.wrap(function(qe) {
                for (; ; ) switch (qe.prev = qe.next) {
                  case 0:
                    return ct = ye.network.post(ye.config.mediaUrl, ce ?? "media", de), mt(function() {
                      return ct.cancel();
                    }), qe.prev = 2, qe.next = 5, ct;
                  case 5:
                    Ve = qe.sent, We(new te(ye.config, ye.network, Ve.body)), qe.next = 12;
                    break;
                  case 9:
                    qe.prev = 9, qe.t0 = qe.catch(2), ht(qe.t0);
                  case 12:
                  case "end":
                    return qe.stop();
                }
              }, Fe, null, [[2, 9]]);
            }));
            return function(Fe, We, ht) {
              return Ye.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "mediaSetGet",
        value: function(de) {
          var ce = this;
          return new P(/* @__PURE__ */ (function() {
            var ye = D.default(/* @__PURE__ */ Q.default.mark(function Ye(Fe, We, ht) {
              var mt, ct, Ve, at;
              return Q.default.wrap(function(ae) {
                for (; ; ) switch (ae.prev = ae.next) {
                  case 0:
                    return mt = {
                      command: "get",
                      list: de.map(function(Se) {
                        return { media_sid: Se };
                      })
                    }, ct = ce.network.post("".concat(ce.config.mediaSetUrl), null, mt, "application/json"), ht(function() {
                      return ct.cancel();
                    }), ae.prev = 3, ae.next = 6, ct;
                  case 6:
                    Ve = ae.sent, at = Ve.body.map(function(Se) {
                      if (Se.code !== 200) {
                        We("Failed to obtain detailed information about Media items (failed SID ".concat(Se.media_record.sid, ")"));
                        return;
                      }
                      return new te(ce.config, ce.network, Se.media_record);
                    }), Fe(at), ae.next = 14;
                    break;
                  case 11:
                    ae.prev = 11, ae.t0 = ae.catch(3), We(ae.t0);
                  case 14:
                  case "end":
                    return ae.stop();
                }
              }, Ye, null, [[3, 11]]);
            }));
            return function(Ye, Fe, We) {
              return ye.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "mediaSetGetContentUrls",
        value: function(de) {
          var ce = this;
          return new P(/* @__PURE__ */ (function() {
            var ye = D.default(/* @__PURE__ */ Q.default.mark(function Ye(Fe, We, ht) {
              var mt, ct, Ve, at;
              return Q.default.wrap(function(ae) {
                for (; ; ) switch (ae.prev = ae.next) {
                  case 0:
                    return mt = {
                      command: "get",
                      list: de.map(function(Se) {
                        return { media_sid: Se };
                      })
                    }, ct = ce.network.post("".concat(ce.config.mediaSetUrl), null, mt, "application/json"), ht(function() {
                      return ct.cancel();
                    }), ae.prev = 3, ae.next = 6, ct;
                  case 6:
                    Ve = ae.sent, at = /* @__PURE__ */ new Map(), Ve.body.forEach(function(Se) {
                      if (Se.code !== 200) {
                        We("Failed to obtain detailed information about Media items (failed SID ".concat(Se.media_record.sid, ")"));
                        return;
                      }
                      at.set(Se.media_record.sid, Se.media_record.links.content_direct_temporary);
                    }), Fe(at), ae.next = 15;
                    break;
                  case 12:
                    ae.prev = 12, ae.t0 = ae.catch(3), We(ae.t0);
                  case 15:
                  case "end":
                    return ae.stop();
                }
              }, Ye, null, [[3, 12]]);
            }));
            return function(Ye, Fe, We) {
              return ye.apply(this, arguments);
            };
          })());
        }
      }
    ]), ze;
  })(), U.default(ft, "version", _t), ft), oe([
    O.validateTypes(O.nonEmptyString),
    Ae("design:type", Function),
    Ae("design:paramtypes", [String]),
    Ae("design:returntype", void 0)
  ], c.default.prototype, "updateToken", null), oe([
    O.validateTypesAsync(O.nonEmptyString),
    Ae("design:type", Function),
    Ae("design:paramtypes", [String]),
    Ae("design:returntype", P)
  ], c.default.prototype, "get", null), c.default = oe([O.validateConstructorTypes(O.nonEmptyString, O.nonEmptyString, [O.nonEmptyString, O.literal(null)], [O.pureObject, "undefined"]), Ae("design:paramtypes", [
    String,
    String,
    Object,
    Object
  ])], c.default), c.CancellablePromise = P, c.Client = c.default, c.McsClient = c.default, c.McsMedia = te, c.Media = te;
})), vl = /* @__PURE__ */ J((() => {
  var c = $t(), e = Dt(), r = Ds(), n = qa(), i = "ArrayBuffer", s = r[i], l = e[i];
  c({
    global: !0,
    constructor: !0,
    forced: l !== s
  }, { ArrayBuffer: s }), n(i);
})), hl = /* @__PURE__ */ J((() => {
  var c = $t(), e = Ut(), r = Tu(), n = Hr(), i = hr(), s = Ru(), l = e("".indexOf);
  c({
    target: "String",
    proto: !0,
    forced: !s("includes")
  }, { includes: function(h) {
    return !!~l(i(n(this)), i(r(h)), arguments.length > 1 ? arguments[1] : void 0);
  } });
})), yl = /* @__PURE__ */ J(((c, e) => {
  var r = Ut(), n = ni(), i = ri().getWeakData, s = _n(), l = cr(), b = kn(), h = Gt(), E = va(), T = Nr(), S = tr(), j = Mr(), V = j.set, O = j.getterFor, X = T.find, B = T.findIndex, G = r([].splice), Y = 0, ue = function(H) {
    return H.frozen || (H.frozen = new re());
  }, re = function() {
    this.entries = [];
  }, se = function(H, U) {
    return X(H.entries, function(D) {
      return D[0] === U;
    });
  };
  re.prototype = {
    get: function(H) {
      var U = se(this, H);
      if (U) return U[1];
    },
    has: function(H) {
      return !!se(this, H);
    },
    set: function(H, U) {
      var D = se(this, H);
      D ? D[1] = U : this.entries.push([H, U]);
    },
    delete: function(H) {
      var U = B(this.entries, function(D) {
        return D[0] === H;
      });
      return ~U && G(this.entries, U, 1), !!~U;
    }
  }, e.exports = { getConstructor: function(H, U, D, Q) {
    var ve = H(function(fe, P) {
      s(fe, L), V(fe, {
        type: U,
        id: Y++,
        frozen: null
      }), b(P) || E(P, fe[Q], {
        that: fe,
        AS_ENTRIES: D
      });
    }), L = ve.prototype, le = O(U), Re = function(fe, P, oe) {
      var Ae = le(fe), Ce = i(l(P), !0);
      return Ce === !0 ? ue(Ae).set(P, oe) : Ce[Ae.id] = oe, fe;
    };
    return n(L, {
      delete: function(fe) {
        var P = le(this);
        if (!h(fe)) return !1;
        var oe = i(fe);
        return oe === !0 ? ue(P).delete(fe) : oe && S(oe, P.id) && delete oe[P.id];
      },
      has: function(P) {
        var oe = le(this);
        if (!h(P)) return !1;
        var Ae = i(P);
        return Ae === !0 ? ue(oe).has(P) : Ae && S(Ae, oe.id);
      }
    }), n(L, D ? {
      get: function(P) {
        var oe = le(this);
        if (h(P)) {
          var Ae = i(P);
          if (Ae === !0) return ue(oe).get(P);
          if (Ae) return Ae[oe.id];
        }
      },
      set: function(P, oe) {
        return Re(this, P, oe);
      }
    } : { add: function(P) {
      return Re(this, P, !0);
    } }), ve;
  } };
})), gl = /* @__PURE__ */ J((() => {
  Di()("WeakSet", function(c) {
    return function() {
      return c(this, arguments.length ? arguments[0] : void 0);
    };
  }, yl());
})), ml = /* @__PURE__ */ J((() => {
  gl();
})), bl = /* @__PURE__ */ J(((c) => {
  Object.defineProperty(c, "__esModule", { value: !0 }), xn();
  var e = Kn();
  function r(l) {
    return l && typeof l == "object" && "default" in l ? l : { default: l };
  }
  var n = /* @__PURE__ */ r(e), i = function(b, h, E) {
    return function(T, S, j) {
      if (typeof j.value != "function" && j?.get === void 0) throw new Error("The deprecated decorator can only be applied to methods or getters");
      if (typeof j.value == "function") {
        var V = j.value;
        j.value = function() {
          s("The method ".concat(b, " is deprecated").concat(h ? ", use " + h + " instead" : "").concat(E ? ", " + E : "."));
          for (var X = arguments.length, B = new Array(X), G = 0; G < X; G++) B[G] = arguments[G];
          return V.apply(this, B);
        };
        return;
      }
      var O = j.get;
      j.get = function() {
        return s("The getter ".concat(b, " is deprecated").concat(h ? ", use " + h + " instead" : "").concat(E ? ", " + E : ".")), O?.apply(this);
      };
    };
  }, s = function(b) {
    var h = n.default.getLevel();
    n.default.setLevel("warn"), n.default.warn(b), n.default.setLevel(h);
  };
  c.deprecated = i, c.deprecationWarning = s;
})), _l = /* @__PURE__ */ J((() => {
  var c = $t(), e = Nr().find, r = Pi(), n = "find", i = !0;
  n in [] && Array(1)[n](function() {
    i = !1;
  }), c({
    target: "Array",
    proto: !0,
    forced: i
  }, { find: function(l) {
    return e(this, l, arguments.length > 1 ? arguments[1] : void 0);
  } }), r(n);
})), wl = /* @__PURE__ */ J((() => {
  var c = $t(), e = Ns(), r = Mt(), n = Gt(), i = ri().onFreeze, s = Object.freeze;
  c({
    target: "Object",
    stat: !0,
    forced: r(function() {
      s(1);
    }),
    sham: !e
  }, { freeze: function(b) {
    return s && n(b) ? s(i(b)) : b;
  } });
})), Sl = /* @__PURE__ */ J(((c) => {
  var e = typeof e < "u" ? e : typeof self < "u" ? self : typeof window < "u" ? window : {};
  Object.defineProperty(c, "__esModule", { value: !0 }), Cn(), On(), hi(), $a(), ua(), bi(), _i();
  var r = oa(), n = Pn(), i = yn(), s = gn(), l = tn(), b = An(), h = mn(), E = bn();
  Da(), Mn(), la(), Nn();
  var T = ha(), S = en();
  xn(), Vn(), jn();
  var j = Kn(), V = (wo(), Uu(_o));
  cn(), Jn(), ia(), Ka(), Un(), Xa(), ga();
  var O = ba(), X = ma();
  Ui();
  var B = $i();
  ei(), Ni(), xi(), ti(), ji();
  var G = Za();
  _a();
  var Y = wa(), ue = Wi(), re = il(), se = sl(), H = pl();
  Fi(), As(), Ws(), zs(), Gs(), Hs(), Vs(), Js(), Ys(), Qs(), Xs(), Zs(), eu(), tu(), ru(), nu(), au(), su(), uu(), ou(), lu(), cu(), fu(), hu(), yu(), gu(), mu(), vl(), Iu(), hl(), Eu(), ml();
  var U = bl();
  Ms(), _l(), Su();
  var D = ai();
  wl();
  function Q(M) {
    return M && typeof M == "object" && "default" in M ? M : { default: M };
  }
  function ve(M) {
    if (M && M.__esModule) return M;
    var A = /* @__PURE__ */ Object.create(null);
    return M && Object.keys(M).forEach(function(k) {
      if (k !== "default") {
        var o = Object.getOwnPropertyDescriptor(M, k);
        Object.defineProperty(A, k, o.get ? o : {
          enumerable: !0,
          get: function() {
            return M[k];
          }
        });
      }
    }), A.default = M, Object.freeze(A);
  }
  var L = /* @__PURE__ */ Q(r), le = /* @__PURE__ */ Q(n), Re = /* @__PURE__ */ Q(i), fe = /* @__PURE__ */ Q(s), P = /* @__PURE__ */ Q(l), oe = /* @__PURE__ */ Q(b), Ae = /* @__PURE__ */ Q(h), Ce = /* @__PURE__ */ Q(E), $ = /* @__PURE__ */ Q(T), He = /* @__PURE__ */ Q(S), ot = /* @__PURE__ */ ve(j), vt = /* @__PURE__ */ Q(X), Ie = /* @__PURE__ */ Q(G), z = /* @__PURE__ */ Q(D);
  function F(M, A, k, o) {
    var u = arguments.length, I = u < 3 ? A : o === null ? o = Object.getOwnPropertyDescriptor(A, k) : o, d;
    if ((typeof Reflect > "u" ? "undefined" : He.default(Reflect)) === "object" && typeof Reflect.decorate == "function") I = Reflect.decorate(M, A, k, o);
    else for (var v = M.length - 1; v >= 0; v--) (d = M[v]) && (I = (u < 3 ? d(I) : u > 3 ? d(A, k, I) : d(A, k)) || I);
    return u > 3 && I && Object.defineProperty(A, k, I), I;
  }
  function m(M, A) {
    if ((typeof Reflect > "u" ? "undefined" : He.default(Reflect)) === "object" && typeof Reflect.metadata == "function") return Reflect.metadata(M, A);
  }
  function he(M, A) {
    return ["".concat((/* @__PURE__ */ new Date()).toISOString(), " Conversations ").concat(M, ":")].concat(Array.from(A));
  }
  var te = ot.getLogger("twilio-conversations"), De = /* @__PURE__ */ (function() {
    function M(A) {
      Ce.default(this, M), oe.default(this, "prefix", ""), this.prefix = A != null && A.length > 0 ? A + " " : "";
    }
    return Ae.default(M, [
      {
        key: "setLevel",
        value: function(k) {
          te.setLevel(k);
        }
      },
      {
        key: "trace",
        value: function() {
          if (te.getLevel() == te.levels.TRACE) {
            for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
            te.debug.apply(null, he(this.prefix + "T", o));
          }
        }
      },
      {
        key: "debug",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.debug.apply(null, he(this.prefix + "D", o));
        }
      },
      {
        key: "info",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.info.apply(null, he(this.prefix + "I", o));
        }
      },
      {
        key: "warn",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.warn.apply(null, he(this.prefix + "W", o));
        }
      },
      {
        key: "error",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.error.apply(null, he(this.prefix + "E", o));
        }
      }
    ], [
      {
        key: "scope",
        value: function(k) {
          return new M(k);
        }
      },
      {
        key: "setLevel",
        value: function(k) {
          te.setLevel(k);
        }
      },
      {
        key: "trace",
        value: function() {
          if (te.getLevel() == te.levels.TRACE) {
            for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
            te.debug.apply(null, he("T", o));
          }
        }
      },
      {
        key: "debug",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.debug.apply(null, he("D", o));
        }
      },
      {
        key: "info",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.info.apply(null, he("I", o));
        }
      },
      {
        key: "warn",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.warn.apply(null, he("W", o));
        }
      },
      {
        key: "error",
        value: function() {
          for (var k = arguments.length, o = new Array(k), u = 0; u < k; u++) o[u] = arguments[u];
          te.error.apply(null, he("E", o));
        }
      }
    ]), M;
  })();
  function ee(M, A) {
    var k = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(M);
      A && (o = o.filter(function(u) {
        return Object.getOwnPropertyDescriptor(M, u).enumerable;
      })), k.push.apply(k, o);
    }
    return k;
  }
  function pe(M) {
    for (var A = 1; A < arguments.length; A++) {
      var k = arguments[A] != null ? arguments[A] : {};
      A % 2 ? ee(Object(k), !0).forEach(function(o) {
        oe.default(M, o, k[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(k)) : ee(Object(k)).forEach(function(o) {
        Object.defineProperty(M, o, Object.getOwnPropertyDescriptor(k, o));
      });
    }
    return M;
  }
  var Ne = 5, $e = "PT5S", Oe = "PT5S", nt = 100, Ze = 1e3, Je = 4e3, _t = 3, ft = !0, lt = 100, ze = 1e3, _e = /* @__PURE__ */ Ae.default(function M() {
    var A, k, o, u, I, d, v, g, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, R = arguments.length > 1 ? arguments[1] : void 0, me = arguments.length > 2 ? arguments[2] : void 0;
    Ce.default(this, M), oe.default(this, "typingIndicatorTimeoutDefault", Ne * 1e3);
    var ge = w.Chat || w.IPMessaging || w || {};
    this.productId = ge.productId, this.links = {
      myConversations: R.links.my_conversations,
      conversations: R.links.conversations,
      users: R.links.users,
      currentUser: R.links.current_user,
      typing: R.links.typing,
      mediaService: R.links.media_service,
      mediaSetService: R.links.media_set_service,
      messagesReceipts: R.links.messages_receipts
    }, this.limits = {
      mediaAttachmentsCountLimit: R.options.media_attachments_count_limit,
      mediaAttachmentSizeLimitInMb: R.options.media_attachment_size_limit_in_mb,
      mediaAttachmentsTotalSizeLimitInMb: R.options.media_attachments_total_size_limit_in_mb,
      emailHistoriesAllowedContentTypes: R.options.email_histories_allowed_mime_types,
      emailBodiesAllowedContentTypes: R.options.email_bodies_allowed_mime_types
    }, this.typingIndicatorTimeoutOverride = ge.typingIndicatorTimeoutOverride, this.backoffConfiguration = pe({
      min: Ze,
      max: Je,
      maxAttemptsCount: _t
    }, ge.backoffConfigOverride), this.retryWhenThrottled = ge.retryWhenThrottledOverride !== void 0 ? ge.retryWhenThrottledOverride : ft, this.userInfosToSubscribe = (A = (k = ge.userInfosToSubscribeOverride) !== null && k !== void 0 ? k : R.options.user_infos_to_subscribe) !== null && A !== void 0 ? A : nt, this.reachabilityEnabled = R.options.reachability_enabled, this.userIdentity = R.identity, this.userInfo = R.sync_objects.my_user_info, this.myConversations = R.sync_objects.my_conversations;
    var Me = (o = (u = ge.httpCacheIntervalOverride) !== null && u !== void 0 ? u : R.options.http_cache_interval) !== null && o !== void 0 ? o : $e;
    try {
      this.httpCacheInterval = V.toSeconds(V.parse(Me));
    } catch {
      me.error("Failed to parse http cache interval ".concat(Me, ", using default value ").concat($e)), this.httpCacheInterval = V.toSeconds(V.parse($e));
    }
    var Ue = (I = (d = ge.consumptionReportIntervalOverride) !== null && d !== void 0 ? d : R.options.consumption_report_interval) !== null && I !== void 0 ? I : Oe;
    try {
      this.consumptionReportInterval = V.toSeconds(V.parse(Ue));
    } catch {
      me.error("Failed to parse consumption report interval ".concat(Ue, ", using default value ").concat(Oe)), this.consumptionReportInterval = V.toSeconds(V.parse(Oe));
    }
    this.channelMetadataCacheCapacity = (v = w.channelMetadataCacheCapacity) !== null && v !== void 0 ? v : lt, this.messageRecipientsCacheCapacity = (g = w.messageRecipientsCacheCapacity) !== null && g !== void 0 ? g : ze;
  });
  function de(M) {
    return JSON.parse(JSON.stringify(M));
  }
  function ce(M) {
    return typeof M < "u" && !isNaN(Number(M)) ? Number(M) : null;
  }
  function ye(M) {
    try {
      return new Date(M);
    } catch {
      return null;
    }
  }
  function Ye(M, A, k) {
    var o = {};
    if (M) try {
      o = JSON.parse(M);
    } catch (u) {
      k.warn(A, u);
    }
    return o;
  }
  var Fe = /* @__PURE__ */ (function() {
    function M(A) {
      Ce.default(this, M), this.base = A.replace(/\/$/, ""), this.args = [], this.paths = [];
    }
    return Ae.default(M, [
      {
        key: "arg",
        value: function(k, o) {
          return typeof o < "u" && this.args.push(encodeURIComponent(k) + "=" + encodeURIComponent(o)), this;
        }
      },
      {
        key: "path",
        value: function(k) {
          return this.paths.push(encodeURIComponent(k)), this;
        }
      },
      {
        key: "build",
        value: function() {
          var k = this.base;
          return this.paths.length && (k += "/" + this.paths.join("/")), this.args.length && (k += "?" + this.args.join("&")), k;
        }
      }
    ]), M;
  })();
  function We(M, A) {
    if (M === A) return !0;
    if (M === null || A === null || M === void 0 || A === void 0) return M === A;
    if (He.default(M) !== He.default(A)) return !1;
    if (He.default(M) !== "object") return M === A;
    if (Array.isArray(M) && Array.isArray(A))
      return M.length !== A.length ? !1 : M.every(function(u, I) {
        return We(u, A[I]);
      });
    if (Array.isArray(M) || Array.isArray(A)) return !1;
    var k = Object.keys(M), o = Object.keys(A);
    return k.length !== o.length ? !1 : k.every(function(u) {
      return We(M[u], A[u]);
    });
  }
  var ht = O.custom(function(M) {
    return [[
      "string",
      "number",
      "boolean",
      "object"
    ].includes(He.default(M)), "a JSON type"];
  }), mt = O.custom(function(M) {
    return [[
      "undefined",
      "string",
      "number",
      "boolean",
      "object"
    ].includes(He.default(M)), "an optional JSON type"];
  }), ct = O.objectSchema("send media options", {
    contentType: [O.literal(null), "string"],
    filename: ["string", "undefined"],
    media: [O.literal("null"), "string"].concat(vt.default(typeof Buffer == "function" ? [Buffer] : []), vt.default(typeof Blob == "function" ? [Blob] : []))
  });
  function Ve(M) {
    var A = at();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function at() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var qe = De.scope("User"), ae = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = Ve(k);
    function k(o, u, I, d) {
      var v;
      return Ce.default(this, k), v = A.call(this), oe.default(le.default(v), "promiseToFetch", null), oe.default(le.default(v), "updated", "updated"), oe.default(le.default(v), "userSubscribed", "userSubscribed"), oe.default(le.default(v), "userUnsubscribed", "userUnsubscribed"), v.services = d, v.subscribed = "initializing", v.setMaxListeners(0), v.state = {
        identity: o,
        entityName: u,
        friendlyName: null,
        attributes: {},
        online: null,
        notifiable: null
      }, v._initializationPromise = new Promise(function(g) {
        v._resolveInitializationPromise = g;
      }), I !== null && v._resolveInitialization(I, o, u, !1), v;
    }
    return Ae.default(k, [
      {
        key: "identity",
        get: function() {
          return this.state.identity;
        },
        set: function(u) {
          this.state.identity = u;
        }
      },
      {
        key: "entityName",
        set: function(u) {
          this.state.entityName = u;
        }
      },
      {
        key: "attributes",
        get: function() {
          return this.state.attributes;
        }
      },
      {
        key: "friendlyName",
        get: function() {
          return this.state.friendlyName;
        }
      },
      {
        key: "isOnline",
        get: function() {
          return this.state.online;
        }
      },
      {
        key: "isNotifiable",
        get: function() {
          return this.state.notifiable;
        }
      },
      {
        key: "isSubscribed",
        get: function() {
          return this.subscribed == "subscribed";
        }
      },
      {
        key: "_update",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g, w;
            return $.default.wrap(function(me) {
              for (; ; ) switch (me.prev = me.next) {
                case 0:
                  return me.next = 2, this._initializationPromise;
                case 2:
                  g = [], qe.debug("User for", this.state.identity, "updated:", d, v), me.t0 = d, me.next = me.t0 === "friendlyName" ? 7 : me.t0 === "attributes" ? 9 : me.t0 === "reachability" ? 12 : 15;
                  break;
                case 7:
                  return this.state.friendlyName !== v.value && (g.push("friendlyName"), this.state.friendlyName = v.value), me.abrupt("break", 16);
                case 9:
                  return w = Ye(v.value, "Retrieved malformed attributes from the server for user: ".concat(this.state.identity), qe), We(this.state.attributes, w) || (this.state.attributes = w, g.push("attributes")), me.abrupt("break", 16);
                case 12:
                  return this.state.online !== v.online && (this.state.online = v.online, g.push("reachabilityOnline")), this.state.notifiable !== v.notifiable && (this.state.notifiable = v.notifiable, g.push("reachabilityNotifiable")), me.abrupt("break", 16);
                case 15:
                  return me.abrupt("return");
                case 16:
                  g.length > 0 && this.emit("updated", {
                    user: this,
                    updateReasons: g
                  });
                case 17:
                case "end":
                  return me.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_updateReachabilityInfo",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g = this;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  return R.next = 2, this._initializationPromise;
                case 2:
                  if (this.configuration.reachabilityEnabled) {
                    R.next = 4;
                    break;
                  }
                  return R.abrupt("return", Promise.resolve());
                case 4:
                  return R.abrupt("return", d.get("reachability").then(v).catch(function(me) {
                    qe.warn("Failed to get reachability info for ", g.state.identity, me);
                  }));
                case 5:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_fetch",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._initializationPromise;
                case 2:
                  if (this.state.entityName) {
                    g.next = 4;
                    break;
                  }
                  return g.abrupt("return", this);
                case 4:
                  return this.promiseToFetch = this.services.syncClient.map({
                    id: this.state.entityName,
                    mode: "open_existing",
                    includeItems: !0
                  }).then(function(w) {
                    return d.entity = w, w.on("itemUpdated", function(R) {
                      return qe.debug(d.state.entityName + " (" + d.state.identity + ") itemUpdated: " + R.item.key), d._update(R.item.key, R.item.data);
                    }), w.on("itemAdded", function(R) {
                      return qe.debug(d.state.entityName + " (" + d.state.identity + ") itemAdded: " + R.item.key), d._update(R.item.key, R.item.data);
                    }), Promise.all([
                      w.get("friendlyName").then(function(R) {
                        return d._update(R.key, R.data);
                      }),
                      w.get("attributes").then(function(R) {
                        return d._update(R.key, R.data);
                      }),
                      d._updateReachabilityInfo(w, function(R) {
                        return d._update(R.key, R.data);
                      })
                    ]);
                  }).then(function() {
                    return qe.debug("Fetched for", d.identity), d.subscribed = "subscribed", d.emit("userSubscribed", d), d;
                  }).catch(function(w) {
                    throw d.promiseToFetch = null, w;
                  }), g.abrupt("return", this.promiseToFetch);
                case 6:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_ensureFetched",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._initializationPromise;
                case 2:
                  return v.abrupt("return", this.promiseToFetch || this._fetch());
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateAttributes",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._initializationPromise;
                case 2:
                  if (this.subscribed != "unsubscribed") {
                    g.next = 4;
                    break;
                  }
                  throw new Error("Can't modify unsubscribed object");
                case 4:
                  return g.next = 6, this.services.commandExecutor.mutateResource("post", this.links.self, { attributes: JSON.stringify(d) });
                case 6:
                  return g.abrupt("return", this);
                case 7:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateFriendlyName",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._initializationPromise;
                case 2:
                  if (this.subscribed != "unsubscribed") {
                    g.next = 4;
                    break;
                  }
                  throw new Error("Can't modify unsubscribed object");
                case 4:
                  return g.next = 6, this.services.commandExecutor.mutateResource("post", this.links.self, { friendly_name: d });
                case 6:
                  return g.abrupt("return", this);
                case 7:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "unsubscribe",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._initializationPromise;
                case 2:
                  if (!this.promiseToFetch) {
                    v.next = 9;
                    break;
                  }
                  return v.next = 5, this.promiseToFetch;
                case 5:
                  this.entity.close(), this.promiseToFetch = null, this.subscribed = "unsubscribed", this.emit("userUnsubscribed", this);
                case 9:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_resolveInitialization",
        value: function(u, I, d, v) {
          this.configuration = u, this.identity = I, this.entityName = d, this.links = { self: "".concat(this.configuration.links.users, "/").concat(encodeURIComponent(this.identity)) }, this._resolveInitializationPromise(), v && this.emit("updated", {
            user: this,
            updateReasons: [
              "friendlyName",
              "attributes",
              "reachabilityOnline",
              "reachabilityNotifiable"
            ]
          });
        }
      }
    ]), k;
  })(B.ReplayEventEmitter);
  F([
    O.validateTypesAsync(ht),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Promise)
  ], ae.prototype, "updateAttributes", null), F([
    O.validateTypesAsync(["string"]),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], ae.prototype, "updateFriendlyName", null);
  function Se(M, A) {
    var k = typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
    if (!k) {
      if (Array.isArray(M) || (k = Te(M)) || A && M && typeof M.length == "number") {
        k && (M = k);
        var o = 0, u = function() {
        };
        return {
          s: u,
          n: function() {
            return o >= M.length ? { done: !0 } : {
              done: !1,
              value: M[o++]
            };
          },
          e: function(w) {
            throw w;
          },
          f: u
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, d = !1, v;
    return {
      s: function() {
        k = k.call(M);
      },
      n: function() {
        var w = k.next();
        return I = w.done, w;
      },
      e: function(w) {
        d = !0, v = w;
      },
      f: function() {
        try {
          !I && k.return != null && k.return();
        } finally {
          if (d) throw v;
        }
      }
    };
  }
  function Te(M, A) {
    if (M) {
      if (typeof M == "string") return je(M, A);
      var k = Object.prototype.toString.call(M).slice(8, -1);
      if (k === "Object" && M.constructor && (k = M.constructor.name), k === "Map" || k === "Set") return Array.from(M);
      if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return je(M, A);
    }
  }
  function je(M, A) {
    (A == null || A > M.length) && (A = M.length);
    for (var k = 0, o = new Array(A); k < A; k++) o[k] = M[k];
    return o;
  }
  var be = /* @__PURE__ */ (function() {
    function M(A, k) {
      Ce.default(this, M), this.configuration = A, this.services = k, this.cache = /* @__PURE__ */ new Map(), this.cacheLifetime = this.configuration.httpCacheInterval * 100, this.cleanupCache();
    }
    return Ae.default(M, [
      {
        key: "isExpired",
        value: function(k) {
          return !this.cacheLifetime || Date.now() - k > this.cacheLifetime;
        }
      },
      {
        key: "cleanupCache",
        value: function() {
          var k = Se(this.cache), o;
          try {
            for (k.s(); !(o = k.n()).done; ) {
              var u = Ie.default(o.value, 2), I = u[0], d = u[1];
              this.isExpired(d.timestamp) && this.cache.delete(I);
            }
          } catch (v) {
            k.e(v);
          } finally {
            k.f();
          }
          this.cache.size === 0 && clearInterval(this.timer);
        }
      },
      {
        key: "pokeTimer",
        value: function() {
          var k = this;
          this.timer = this.timer || setInterval(function() {
            return k.cleanupCache();
          }, this.cacheLifetime * 2);
        }
      },
      {
        key: "executeWithRetry",
        value: function(k) {
          var o = this, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return new Promise(function(I, d) {
            var v = [
              502,
              503,
              504
            ];
            u && v.push(429);
            var g = new Y.Retrier(o.configuration.backoffConfiguration);
            g.on("attempt", function() {
              k().then(function(w) {
                return g.succeeded(w);
              }).catch(function(w) {
                v.indexOf(w.status) > -1 || w.message === "Twilsock disconnected" ? g.failed(w) : (g.removeAllListeners(), g.cancel(), d(w));
              });
            }), g.on("succeeded", function(w) {
              I(w);
            }), g.on("cancelled", function(w) {
              return d(w);
            }), g.on("failed", function(w) {
              return d(w);
            }), g.start();
          });
        }
      },
      {
        key: "get",
        value: (function() {
          var A = L.default(/* @__PURE__ */ $.default.mark(function o(u) {
            var I = this, d, v, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  if (d = this.cache.get(u), !(d && !this.isExpired(d.timestamp))) {
                    R.next = 3;
                    break;
                  }
                  return R.abrupt("return", d.response);
                case 3:
                  return v = {}, R.next = 6, this.executeWithRetry(function() {
                    return I.services.transport.get(u, v, I.configuration.productId);
                  }, this.configuration.retryWhenThrottled);
                case 6:
                  return g = R.sent, this.cache.set(u, {
                    response: g,
                    timestamp: Date.now()
                  }), this.pokeTimer(), R.abrupt("return", g);
                case 10:
                case "end":
                  return R.stop();
              }
            }, o, this);
          }));
          function k(o) {
            return A.apply(this, arguments);
          }
          return k;
        })()
      }
    ]), M;
  })(), Qe = /* @__PURE__ */ Ae.default(function M() {
    Ce.default(this, M);
  });
  oe.default(Qe, "TYPING_INDICATOR", "twilio.ipmsg.typing_indicator"), oe.default(Qe, "NEW_MESSAGE", "twilio.conversations.new_message"), oe.default(Qe, "ADDED_TO_CONVERSATION", "twilio.conversations.added_to_conversation"), oe.default(Qe, "REMOVED_FROM_CONVERSATION", "twilio.conversations.removed_from_conversation"), oe.default(Qe, "CONSUMPTION_UPDATE", "twilio.channel.consumption_update");
  function tt(M) {
    var A = gt();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function gt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Pt = De.scope("Participant"), Et = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = tt(k);
    function k(o, u, I, d, v) {
      var g, w, R;
      if (Ce.default(this, k), R = A.call(this), R.conversation = I, R.links = d, R.services = v, R.state = {
        attributes: Ye(o.attributes, "Retrieved malformed attributes from the server for participant: " + u, Pt),
        dateCreated: o.dateCreated ? ye(o.dateCreated) : null,
        dateUpdated: o.dateCreated ? ye(o.dateUpdated) : null,
        sid: u,
        typingTimeout: null,
        isTyping: !1,
        identity: o.identity,
        roleSid: (g = o.roleSid) !== null && g !== void 0 ? g : "",
        lastReadMessageIndex: Number.isInteger(o.lastConsumedMessageIndex) ? o.lastConsumedMessageIndex : null,
        lastReadTimestamp: o.lastConsumptionTimestamp ? ye(o.lastConsumptionTimestamp) : null,
        type: o.type || "chat",
        userInfo: o.userInfo,
        bindings: (w = o.bindings) !== null && w !== void 0 ? w : {}
      }, !o.identity && !o.type) throw new Error("Received invalid Participant object from server: Missing identity or type of Participant.");
      return R;
    }
    return Ae.default(k, [
      {
        key: "sid",
        get: function() {
          return this.state.sid;
        }
      },
      {
        key: "attributes",
        get: function() {
          return this.state.attributes;
        }
      },
      {
        key: "dateCreated",
        get: function() {
          return this.state.dateCreated;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.state.dateUpdated;
        }
      },
      {
        key: "identity",
        get: function() {
          return this.state.identity;
        }
      },
      {
        key: "isTyping",
        get: function() {
          return this.state.isTyping;
        }
      },
      {
        key: "lastReadMessageIndex",
        get: function() {
          return this.state.lastReadMessageIndex;
        }
      },
      {
        key: "lastReadTimestamp",
        get: function() {
          return this.state.lastReadTimestamp;
        }
      },
      {
        key: "roleSid",
        get: function() {
          return this.state.roleSid;
        }
      },
      {
        key: "type",
        get: function() {
          return this.state.type;
        }
      },
      {
        key: "bindings",
        get: function() {
          var u;
          return (u = this.state.bindings) !== null && u !== void 0 ? u : {};
        }
      },
      {
        key: "_startTyping",
        value: function(u) {
          var I = this;
          return this.state.typingTimeout && clearTimeout(this.state.typingTimeout), this.state.isTyping = !0, this.emit(k.typingStarted, this), this.conversation.emit(Rt.typingStarted, this), this.state.typingTimeout = Number(setTimeout(function() {
            return I._endTyping();
          }, u)), this;
        }
      },
      {
        key: "_endTyping",
        value: function() {
          this.state.typingTimeout && (this.state.isTyping = !1, this.emit(k.typingEnded, this), this.conversation.emit(Rt.typingEnded, this), clearInterval(this.state.typingTimeout), this.state.typingTimeout = null);
        }
      },
      {
        key: "_update",
        value: function(u) {
          var I = [], d = Ye(u.attributes, "Retrieved malformed attributes from the server for participant: " + this.state.sid, Pt);
          u.attributes && !We(this.state.attributes, d) && (this.state.attributes = d, I.push("attributes"));
          var v = ye(u.dateUpdated);
          u.dateUpdated && v?.getTime() !== (this.state.dateUpdated && this.state.dateUpdated.getTime()) && (this.state.dateUpdated = v, I.push("dateUpdated"));
          var g = ye(u.dateCreated);
          if (u.dateCreated && g?.getTime() !== (this.state.dateCreated && this.state.dateCreated.getTime()) && (this.state.dateCreated = g, I.push("dateCreated")), u.roleSid && this.state.roleSid !== u.roleSid && (this.state.roleSid = u.roleSid, I.push("roleSid")), (Number.isInteger(u.lastConsumedMessageIndex) || u.lastConsumedMessageIndex === null) && this.state.lastReadMessageIndex !== u.lastConsumedMessageIndex && (this.state.lastReadMessageIndex = u.lastConsumedMessageIndex, I.push("lastReadMessageIndex")), u.lastConsumptionTimestamp) {
            var w = new Date(u.lastConsumptionTimestamp);
            (!this.state.lastReadTimestamp || this.state.lastReadTimestamp.getTime() !== w.getTime()) && (this.state.lastReadTimestamp = w, I.push("lastReadTimestamp"));
          }
          return u.bindings && !We(this.state.bindings, u.bindings) && (this.state.bindings = u.bindings, I.push("bindings")), I.length > 0 && this.emit(k.updated, {
            participant: this,
            updateReasons: I
          }), this;
        }
      },
      {
        key: "getUser",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  if (this.type == "chat") {
                    v.next = 2;
                    break;
                  }
                  throw new Error("Getting User is not supported for this Participant type: " + this.type);
                case 2:
                  return v.abrupt("return", this.services.users.getUser(this.state.identity, this.state.userInfo));
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "remove",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.abrupt("return", this.conversation.removeParticipant(this));
                case 1:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateAttributes",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this.services.commandExecutor.mutateResource("post", this.links.self, { attributes: JSON.stringify(d) });
                case 2:
                  return g.abrupt("return", this);
                case 3:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      }
    ]), k;
  })(B.ReplayEventEmitter);
  oe.default(Et, "typingStarted", "typingStarted"), oe.default(Et, "typingEnded", "typingEnded"), oe.default(Et, "updated", "updated"), F([
    O.validateTypesAsync(ht),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Promise)
  ], Et.prototype, "updateAttributes", null);
  function At(M) {
    var A = Tt();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function Tt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ir = De.scope("Participants"), Lt = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = At(k);
    function k(o, u, I, d) {
      var v;
      return Ce.default(this, k), v = A.call(this), oe.default(le.default(v), "rosterEntityPromise", null), v.conversation = o, v.participants = u, v.links = I, v.services = d, v;
    }
    return Ae.default(k, [
      {
        key: "unsubscribe",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  if (!this.rosterEntityPromise) {
                    g.next = 6;
                    break;
                  }
                  return g.next = 3, this.rosterEntityPromise;
                case 3:
                  d = g.sent, d.close(), this.rosterEntityPromise = null;
                case 6:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "subscribe",
        value: function(u) {
          var I = this, d = typeof u == "string" ? this.services.syncClient.map({
            id: u,
            mode: "open_existing"
          }) : Promise.resolve(u);
          return this.rosterEntityPromise = this.rosterEntityPromise || d.then(function(v) {
            v.on(se.SyncMap.itemAdded, function(w) {
              ir.debug(I.conversation.sid + " itemAdded: " + w.item.key), I.upsertParticipant(w.item.key, w.item.data).then(function(R) {
                I.emit(Rt.participantJoined, R);
              });
            }), v.on(se.SyncMap.itemRemoved, function(w) {
              ir.debug(I.conversation.sid + " itemRemoved: " + w.key);
              var R = w.key;
              if (I.participants.has(R)) {
                var me = I.participants.get(R);
                I.participants.delete(R), me && I.emit(Rt.participantLeft, me);
              }
            }), v.on(se.SyncMap.itemUpdated, function(w) {
              ir.debug(I.conversation.sid + " itemUpdated: " + w.item.key), I.upsertParticipant(w.item.key, w.item.data).catch(function(R) {
                return ir.error(R);
              });
            });
            var g = [];
            return v.getItems().then(function w(R) {
              return R.items.forEach(function(me) {
                g.push(I.upsertParticipant(me.key, me.data));
              }), R.hasNextPage ? R.nextPage().then(w) : null;
            }).then(function() {
              return Promise.all(g);
            }).then(function() {
              return v;
            });
          }).catch(function(v) {
            throw I.rosterEntityPromise = null, I.services.syncClient.connectionState != "disconnected" && ir.error("Failed to get roster object for conversation", I.conversation.sid, v), ir.debug("ERROR: Failed to get roster object for conversation", I.conversation.sid, v), v;
          });
        }
      },
      {
        key: "upsertParticipantFromResponse",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v, g, w, R, me, ge, Me, Ue;
            return $.default.wrap(function(Xe) {
              for (; ; ) switch (Xe.prev = Xe.next) {
                case 0:
                  return g = d.sid, w = d.attributes, R = d.date_created, me = d.date_updated, ge = d.identity, Me = d.role_sid, Ue = d.messaging_binding, Xe.next = 3, this.upsertParticipant(g, {
                    attributes: w,
                    dateCreated: new Date(R),
                    dateUpdated: new Date(me),
                    identity: ge,
                    roleSid: Me,
                    lastConsumedMessageIndex: null,
                    lastConsumptionTimestamp: null,
                    type: (v = Ue?.type) !== null && v !== void 0 ? v : "chat"
                  });
                case 3:
                  return Xe.abrupt("return", Xe.sent);
                case 4:
                case "end":
                  return Xe.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "upsertParticipant",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g = this, w, R;
            return $.default.wrap(function(ge) {
              for (; ; ) switch (ge.prev = ge.next) {
                case 0:
                  if (w = this.participants.get(d), !w) {
                    ge.next = 3;
                    break;
                  }
                  return ge.abrupt("return", w._update(v));
                case 3:
                  return R = { self: "".concat(this.links.participants, "/").concat(d) }, w = new Et(v, d, this.conversation, R, this.services), this.participants.set(d, w), w.on(Et.updated, function(Me) {
                    return g.emit(Rt.participantUpdated, Me);
                  }), ge.abrupt("return", w);
                case 8:
                case "end":
                  return ge.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getParticipants",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.abrupt("return", this.rosterEntityPromise ? this.rosterEntityPromise.then(function() {
                    var w = [];
                    return d.participants.forEach(function(R) {
                      return w.push(R);
                    }), w;
                  }) : []);
                case 1:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getParticipantBySid",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v = this;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.abrupt("return", this.rosterEntityPromise ? this.rosterEntityPromise.then(function() {
                    var R = v.participants.get(d);
                    if (!R) throw new Error("Participant with SID " + d + " was not found");
                    return R;
                  }) : null);
                case 1:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getParticipantByIdentity",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v = this, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  return g = null, R.abrupt("return", this.rosterEntityPromise ? this.rosterEntityPromise.then(function() {
                    if (v.participants.forEach(function(me) {
                      me.identity === d && (g = me);
                    }), !g) throw new Error("Participant with identity " + d + " was not found");
                    return g;
                  }) : null);
                case 2:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "add",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this.services.commandExecutor.mutateResource("post", this.links.participants, {
                    identity: d,
                    attributes: typeof v < "u" ? JSON.stringify(v) : void 0
                  });
                case 2:
                  return w.abrupt("return", w.sent);
                case 3:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "addNonChatParticipant",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g, w, R, me, ge = arguments;
            return $.default.wrap(function(Ue) {
              for (; ; ) switch (Ue.prev = Ue.next) {
                case 0:
                  return R = ge.length > 2 && ge[2] !== void 0 ? ge[2] : {}, me = ge.length > 3 && ge[3] !== void 0 ? ge[3] : {}, Ue.next = 4, this.services.commandExecutor.mutateResource("post", this.links.participants, {
                    attributes: typeof R < "u" ? JSON.stringify(R) : void 0,
                    messaging_binding: {
                      address: v,
                      proxy_address: d,
                      name: me == null || (g = me.email) === null || g === void 0 ? void 0 : g.name,
                      level: me == null || (w = me.email) === null || w === void 0 ? void 0 : w.level
                    }
                  });
                case 4:
                  return Ue.abrupt("return", Ue.sent);
                case 5:
                case "end":
                  return Ue.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "remove",
        value: function(u) {
          return this.services.commandExecutor.mutateResource("delete", "".concat(this.links.participants, "/").concat(encodeURIComponent(u)));
        }
      }
    ]), k;
  })(B.ReplayEventEmitter), Xt = /* @__PURE__ */ (function() {
    function M(A, k) {
      var o;
      Ce.default(this, M), oe.default(this, "mcsMedia", null), this.services = k, A instanceof H.McsMedia && (this.mcsMedia = A), this.state = {
        sid: A.sid,
        category: A.category,
        filename: (o = A.filename) !== null && o !== void 0 ? o : null,
        contentType: A.contentType,
        size: A.size
      };
    }
    return Ae.default(M, [
      {
        key: "sid",
        get: function() {
          return this.state.sid;
        }
      },
      {
        key: "filename",
        get: function() {
          return this.state.filename;
        }
      },
      {
        key: "contentType",
        get: function() {
          return this.state.contentType;
        }
      },
      {
        key: "size",
        get: function() {
          return this.state.size;
        }
      },
      {
        key: "category",
        get: function() {
          return this.state.category;
        }
      },
      {
        key: "getContentTemporaryUrl",
        value: function() {
          var k = this;
          return new H.CancellablePromise(/* @__PURE__ */ (function() {
            var o = L.default(/* @__PURE__ */ $.default.mark(function u(I, d, v) {
              var g, w, R, me;
              return $.default.wrap(function(Me) {
                for (; ; ) switch (Me.prev = Me.next) {
                  case 0:
                    if (w = k.mcsMedia ? void 0 : k._fetchMcsMedia(), R = (g = k.mcsMedia) === null || g === void 0 ? void 0 : g.getContentUrl(), v(function() {
                      w && w.cancel(), R && R.cancel();
                    }), Me.prev = 3, R) {
                      Me.next = 9;
                      break;
                    }
                    return Me.next = 7, w;
                  case 7:
                    me = Me.sent, R = me?.getContentUrl();
                  case 9:
                    if (Me.t0 = I, !R) {
                      Me.next = 16;
                      break;
                    }
                    return Me.next = 13, R;
                  case 13:
                    Me.t1 = Me.sent, Me.next = 17;
                    break;
                  case 16:
                    Me.t1 = null;
                  case 17:
                    Me.t2 = Me.t1, (0, Me.t0)(Me.t2), Me.next = 24;
                    break;
                  case 21:
                    Me.prev = 21, Me.t3 = Me.catch(3), d(Me.t3);
                  case 24:
                  case "end":
                    return Me.stop();
                }
              }, u, null, [[3, 21]]);
            }));
            return function(u, I, d) {
              return o.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "_fetchMcsMedia",
        value: function() {
          var k = this;
          return new H.CancellablePromise(/* @__PURE__ */ (function() {
            var o = L.default(/* @__PURE__ */ $.default.mark(function u(I, d, v) {
              var g;
              return $.default.wrap(function(R) {
                for (; ; ) switch (R.prev = R.next) {
                  case 0:
                    return k.services.mcsClient === null && d(/* @__PURE__ */ new Error("Media Content Service is unavailable")), g = k.services.mcsClient.get(k.state.sid), v(function() {
                      return g.cancel();
                    }), R.prev = 3, R.next = 6, g;
                  case 6:
                    k.mcsMedia = R.sent, k.state = k.mcsMedia._state(), I(k.mcsMedia), R.next = 14;
                    break;
                  case 11:
                    R.prev = 11, R.t0 = R.catch(3), d(R.t0);
                  case 14:
                  case "end":
                    return R.stop();
                }
              }, u, null, [[3, 11]]);
            }));
            return function(u, I, d) {
              return o.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "_state",
        value: function() {
          return this.state;
        }
      }
    ]), M;
  })(), Wt = /* @__PURE__ */ (function() {
    function M(A) {
      Ce.default(this, M), this.state = A;
    }
    return Ae.default(M, [
      {
        key: "total",
        get: function() {
          return this.state.total;
        }
      },
      {
        key: "sent",
        get: function() {
          return this.state.sent;
        }
      },
      {
        key: "delivered",
        get: function() {
          return this.state.delivered;
        }
      },
      {
        key: "read",
        get: function() {
          return this.state.read;
        }
      },
      {
        key: "undelivered",
        get: function() {
          return this.state.undelivered;
        }
      },
      {
        key: "failed",
        get: function() {
          return this.state.failed;
        }
      },
      {
        key: "_update",
        value: function(k) {
          this.state = k;
        }
      },
      {
        key: "_isEquals",
        value: function(k) {
          var o = this.total === k.total, u = this.sent === k.sent, I = this.delivered === k.delivered, d = this.read === k.read, v = this.undelivered === k.undelivered, g = this.failed === k.failed;
          return o && u && I && d && v && g;
        }
      }
    ]), M;
  })(), jr = /* @__PURE__ */ (function() {
    function M(A, k, o, u) {
      Ce.default(this, M), this.state = {
        prevToken: o,
        nextToken: u,
        source: k,
        items: A
      };
    }
    return Ae.default(M, [
      {
        key: "hasNextPage",
        get: function() {
          return !!this.state.nextToken;
        }
      },
      {
        key: "hasPrevPage",
        get: function() {
          return !!this.state.prevToken;
        }
      },
      {
        key: "items",
        get: function() {
          return this.state.items;
        }
      },
      {
        key: "nextPage",
        value: function() {
          return this.hasNextPage ? this.state.source(this.state.nextToken) : Promise.reject(/* @__PURE__ */ new Error("No next page"));
        }
      },
      {
        key: "prevPage",
        value: function() {
          return this.hasPrevPage ? this.state.source(this.state.prevToken) : Promise.reject(/* @__PURE__ */ new Error("No previous page"));
        }
      }
    ]), M;
  })(), Rr = /* @__PURE__ */ Ae.default(function M(A) {
    Ce.default(this, M), this.sid = A.sid, this.messageSid = A.message_sid, this.conversationSid = A.conversation_sid, this.channelMessageSid = A.channel_message_sid, this.participantSid = A.participant_sid, this.status = A.status || "queued", this.errorCode = A.error_code || 0, this.dateCreated = A.date_created, this.dateUpdated = A.date_updated;
  }), sr = function(A) {
    return A.map(function(k) {
      var o, u, I, d, v = JSON.stringify(k);
      switch (k.type) {
        case "QUICK_REPLY":
          return {
            type: "reply",
            title: k.title,
            id: (o = k.id) !== null && o !== void 0 ? o : "",
            index: (u = k.index) !== null && u !== void 0 ? u : 0,
            rawData: v
          };
        case "PHONE_NUMBER":
          return {
            type: "phone",
            title: k.title,
            phone: (I = k.phone) !== null && I !== void 0 ? I : "",
            rawData: v
          };
        case "URL":
          return {
            type: "url",
            title: k.title,
            url: (d = k.url) !== null && d !== void 0 ? d : "",
            rawData: v
          };
        default:
          return {
            type: "other",
            rawData: v
          };
      }
    });
  }, wr = function(A, k) {
    var o = JSON.stringify(k);
    switch (A) {
      case "twilio/text":
        return {
          type: "text",
          body: k.body,
          rawData: o
        };
      case "twilio/media":
        var u = k;
        return {
          type: "media",
          body: u.body,
          media: u.media,
          rawData: o
        };
      case "twilio/location":
        var I = k;
        return {
          type: "location",
          longitude: I.longitude,
          latitude: I.latitude,
          label: I.label,
          rawData: o
        };
      case "twilio/quick-reply":
        var d = k;
        return {
          type: "quickReply",
          body: d.body,
          replies: d.actions,
          rawData: o
        };
      case "twilio/call-to-action":
        var v = k;
        return {
          type: "callToAction",
          body: v.body,
          actions: sr(v.actions),
          rawData: o
        };
      case "twilio/list-picker":
        var g = k;
        return {
          type: "listPicker",
          body: g.body,
          button: g.button,
          items: g.items,
          rawData: o
        };
      case "twilio/card":
        var w, R, me = k;
        return {
          type: "card",
          title: me.title,
          subtitle: me.subtitle,
          media: (w = me.media) !== null && w !== void 0 ? w : [],
          actions: sr((R = me.actions) !== null && R !== void 0 ? R : []),
          rawData: o
        };
      default:
        return {
          type: "other",
          rawData: o
        };
    }
  }, fr = function(A) {
    for (var k = /* @__PURE__ */ new Map(), o = 0, u = Object.entries(A); o < u.length; o++) {
      var I = Ie.default(u[o], 2), d = I[0], v = I[1];
      k.set(d, wr(d, v));
    }
    return k;
  }, yr = /* @__PURE__ */ (function() {
    function M(A, k) {
      Ce.default(this, M), this.name = A, this.value = k;
    }
    return Ae.default(M, [{
      key: "copyWithValue",
      value: function(k) {
        return new M(this.name, k);
      }
    }]), M;
  })(), Sr = /* @__PURE__ */ Ae.default(function M(A) {
    Ce.default(this, M), this.sid = A.sid, this.friendlyName = A.friendly_name, this.variables = Object.entries(JSON.parse(A.variables)).map(function(k) {
      var o = Ie.default(k, 2), u = o[0], I = o[1];
      return new yr(u, I);
    }), this.variants = fr(A.variants), this.dateCreated = new Date(A.date_created), this.dateUpdated = new Date(A.date_updated);
  });
  function Ur(M, A) {
    var k = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(M);
      A && (o = o.filter(function(u) {
        return Object.getOwnPropertyDescriptor(M, u).enumerable;
      })), k.push.apply(k, o);
    }
    return k;
  }
  function zr(M) {
    for (var A = 1; A < arguments.length; A++) {
      var k = arguments[A] != null ? arguments[A] : {};
      A % 2 ? Ur(Object(k), !0).forEach(function(o) {
        oe.default(M, o, k[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(k)) : Ur(Object(k)).forEach(function(o) {
        Object.defineProperty(M, o, Object.getOwnPropertyDescriptor(k, o));
      });
    }
    return M;
  }
  function rn(M) {
    var A = Lr();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function Lr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  function Vr(M, A) {
    Kr(M, A), A.add(M);
  }
  function Kr(M, A) {
    if (A.has(M)) throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
  function Er(M, A, k) {
    if (!A.has(M)) throw new TypeError("attempted to get private field on non-instance");
    return k;
  }
  var $r = De.scope("Message"), Cr = e.XMLHttpRequest || {}, ar = /* @__PURE__ */ new WeakSet(), kr = /* @__PURE__ */ new WeakSet(), Zt = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = rn(k);
    function k(o, u, I, d, v, g) {
      var w, R, me, ge, Me, Ue, St, Xe;
      return Ce.default(this, k), Xe = A.call(this), Vr(le.default(Xe), kr), Vr(le.default(Xe), ar), Xe.conversation = I, Xe.links = d, Xe.configuration = v, Xe.services = g, Xe.state = {
        sid: u.sid,
        index: o,
        author: u.author,
        subject: u.subject,
        contentSid: u.contentSid,
        body: (w = u.text) !== null && w !== void 0 ? w : null,
        timestamp: u.timestamp ? new Date(u.timestamp) : null,
        dateUpdated: u.dateUpdated ? new Date(u.dateUpdated) : null,
        lastUpdatedBy: (R = u.lastUpdatedBy) !== null && R !== void 0 ? R : null,
        attributes: Ye(u.attributes, "Got malformed attributes for the message ".concat(u.sid), $r),
        type: (me = u.type) !== null && me !== void 0 ? me : "text",
        media: null,
        medias: null,
        participantSid: (ge = u.memberSid) !== null && ge !== void 0 ? ge : null,
        aggregatedDeliveryReceipt: u.delivery ? new Wt(u.delivery) : null,
        hasChannelMetadata: (Me = u.channelMetadata) !== null && Me !== void 0 ? Me : !1
      }, Er(le.default(Xe), kr, Jr).call(le.default(Xe), (Ue = u.medias) !== null && Ue !== void 0 ? Ue : null, (St = u.media) !== null && St !== void 0 ? St : null), Xe;
    }
    return Ae.default(k, [
      {
        key: "sid",
        get: function() {
          return this.state.sid;
        }
      },
      {
        key: "author",
        get: function() {
          return this.state.author;
        }
      },
      {
        key: "subject",
        get: function() {
          return this.state.subject;
        }
      },
      {
        key: "contentSid",
        get: function() {
          return this.state.contentSid;
        }
      },
      {
        key: "body",
        get: function() {
          return this.state.body;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this.state.dateUpdated;
        }
      },
      {
        key: "index",
        get: function() {
          return this.state.index;
        }
      },
      {
        key: "lastUpdatedBy",
        get: function() {
          return this.state.lastUpdatedBy;
        }
      },
      {
        key: "dateCreated",
        get: function() {
          return this.state.timestamp;
        }
      },
      {
        key: "attributes",
        get: function() {
          return this.state.attributes;
        }
      },
      {
        key: "type",
        get: function() {
          return this.state.type;
        }
      },
      {
        key: "media",
        get: function() {
          return this.state.media;
        }
      },
      {
        key: "attachedMedia",
        get: function() {
          return this.getMediaByCategories(["media"]);
        }
      },
      {
        key: "participantSid",
        get: function() {
          return this.state.participantSid;
        }
      },
      {
        key: "aggregatedDeliveryReceipt",
        get: function() {
          return this.state.aggregatedDeliveryReceipt;
        }
      },
      {
        key: "getMediaByCategory",
        value: function(u) {
          return this.getMediaByCategories(u);
        }
      },
      {
        key: "getMediaByCategories",
        value: function(u) {
          var I;
          return ((I = this.state.medias) !== null && I !== void 0 ? I : []).filter(function(d) {
            return u.includes(d.category);
          });
        }
      },
      {
        key: "getEmailBody",
        value: function() {
          var u, I, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "text/plain";
          return (u = (I = this.getMediaByCategories(["body"])) === null || I === void 0 ? void 0 : I.filter(function(v) {
            return v.contentType == d;
          }).shift()) !== null && u !== void 0 ? u : null;
        }
      },
      {
        key: "getEmailHistory",
        value: function() {
          var u, I, d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "text/plain";
          return (u = (I = this.getMediaByCategories(["history"])) === null || I === void 0 ? void 0 : I.filter(function(v) {
            return v.contentType == d;
          }).shift()) !== null && u !== void 0 ? u : null;
        }
      },
      {
        key: "_update",
        value: function(u) {
          var I, d = this, v, g, w, R = [];
          (u.text || typeof u.text == "string") && u.text !== this.state.body && (this.state.body = u.text, R.push("body")), u.subject && u.subject !== this.state.subject && (this.state.subject = u.subject, R.push("subject")), u.lastUpdatedBy && u.lastUpdatedBy !== this.state.lastUpdatedBy && (this.state.lastUpdatedBy = u.lastUpdatedBy, R.push("lastUpdatedBy")), u.author && u.author !== this.state.author && (this.state.author = u.author, R.push("author")), u.dateUpdated && new Date(u.dateUpdated).getTime() !== (this.state.dateUpdated && this.state.dateUpdated.getTime()) && (this.state.dateUpdated = new Date(u.dateUpdated), R.push("dateUpdated")), u.timestamp && new Date(u.timestamp).getTime() !== (this.state.timestamp && this.state.timestamp.getTime()) && (this.state.timestamp = new Date(u.timestamp), R.push("dateCreated"));
          var me = Ye(u.attributes, "Got malformed attributes for the message ".concat(this.sid), $r);
          We(this.state.attributes, me) || (this.state.attributes = me, R.push("attributes"));
          var ge = u.delivery, Me = this.state.aggregatedDeliveryReceipt;
          if (ge && ge.total && ge.delivered && ge.failed && ge.read && ge.sent && ge.undelivered && (Me ? Me._isEquals(ge) || (Me._update(ge), R.push("deliveryReceipt")) : (this.state.aggregatedDeliveryReceipt = new Wt(ge), R.push("deliveryReceipt"))), !We(((I = u.medias) !== null && I !== void 0 ? I : []).map(function(Xe) {
            var Nt;
            return (Nt = Er(d, ar, dr).call(d, Xe)) === null || Nt === void 0 ? void 0 : Nt._state();
          }).filter(function(Xe) {
            return Xe !== null;
          }), ((v = this.state.medias) !== null && v !== void 0 ? v : []).map(function(Xe) {
            return Xe._state();
          }).filter(function(Xe) {
            return Xe !== null;
          })) || !We((g = Er(this, ar, dr).call(this, u.media)) === null || g === void 0 ? void 0 : g._state(), (w = this.state.media) === null || w === void 0 ? void 0 : w._state())) {
            var Ue, St;
            Er(this, kr, Jr).call(this, (Ue = u.medias) !== null && Ue !== void 0 ? Ue : null, (St = u.media) !== null && St !== void 0 ? St : null), R.push("media");
          }
          R.length > 0 && this.emit("updated", {
            message: this,
            updateReasons: R
          });
        }
      },
      {
        key: "getParticipant",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this, v, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  if (v = null, !this.state.participantSid) {
                    R.next = 5;
                    break;
                  }
                  return R.next = 4, this.conversation.getParticipantBySid(this.state.participantSid).catch(function() {
                    return $r.debug('Participant with sid "'.concat(d.participantSid, '" not found for message ').concat(d.sid)), null;
                  });
                case 4:
                  v = R.sent;
                case 5:
                  if (!(!v && this.state.author)) {
                    R.next = 9;
                    break;
                  }
                  return R.next = 8, this.conversation.getParticipantByIdentity(this.state.author).catch(function() {
                    return $r.debug('Participant with identity "'.concat(d.author, '" not found for message ').concat(d.sid)), null;
                  });
                case 8:
                  v = R.sent;
                case 9:
                  if (!v) {
                    R.next = 11;
                    break;
                  }
                  return R.abrupt("return", v);
                case 11:
                  throw g = "Participant with ", this.state.participantSid && (g += "SID '" + this.state.participantSid + "' "), this.state.author && (this.state.participantSid && (g += "or "), g += "identity '" + this.state.author + "' "), g === "Participant with " && (g = "Participant "), g += "was not found", new Error(g);
                case 17:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getDetailedDeliveryReceipts",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d, v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._getDetailedDeliveryReceiptsPaginator();
                case 2:
                  d = w.sent, v = d.items;
                case 4:
                  if (!d.hasNextPage) {
                    w.next = 11;
                    break;
                  }
                  return w.next = 7, d.nextPage();
                case 7:
                  d = w.sent, v = [].concat(vt.default(v), vt.default(d.items)), w.next = 4;
                  break;
                case 11:
                  return w.abrupt("return", v);
                case 12:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "remove",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this.services.commandExecutor.mutateResource("delete", this.links.self);
                case 2:
                  return v.abrupt("return", this);
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateBody",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this.services.commandExecutor.mutateResource("post", this.links.self, { body: d });
                case 2:
                  return g.abrupt("return", this);
                case 3:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateAttributes",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this.services.commandExecutor.mutateResource("post", this.links.self, { attributes: typeof d < "u" ? JSON.stringify(d) : void 0 });
                case 2:
                  return g.abrupt("return", this);
                case 3:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "attachTemporaryUrlsFor",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v = this, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  if (g = d?.map(function(me) {
                    return me.sid;
                  }), !(this.services.mcsClient && g)) {
                    R.next = 7;
                    break;
                  }
                  return R.next = 4, this.services.mcsClient.mediaSetGet(g);
                case 4:
                  return R.abrupt("return", R.sent.map(function(me) {
                    return new Xt(me, v.services);
                  }));
                case 7:
                  throw new Error("Media Content Service is unavailable");
                case 8:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getTemporaryContentUrlsForMedia",
        value: function(u) {
          var I = u.map(function(d) {
            return d.sid;
          });
          return this.getTemporaryContentUrlsForMediaSids(I);
        }
      },
      {
        key: "getTemporaryContentUrlsForMediaSids",
        value: function(u) {
          var I = this;
          return new H.CancellablePromise(/* @__PURE__ */ (function() {
            var d = L.default(/* @__PURE__ */ $.default.mark(function v(g, w, R) {
              var me, ge;
              return $.default.wrap(function(Ue) {
                for (; ; ) switch (Ue.prev = Ue.next) {
                  case 0:
                    if (me = I.services.mcsClient.mediaSetGetContentUrls(u ?? []), !(!I.services.mcsClient || !u)) {
                      Ue.next = 4;
                      break;
                    }
                    return w(/* @__PURE__ */ new Error("Media Content Service is unavailable")), Ue.abrupt("return");
                  case 4:
                    return R(function() {
                      me.cancel();
                    }), Ue.prev = 5, Ue.next = 8, me;
                  case 8:
                    ge = Ue.sent, g(ge), Ue.next = 15;
                    break;
                  case 12:
                    Ue.prev = 12, Ue.t0 = Ue.catch(5), w(Ue.t0);
                  case 15:
                  case "end":
                    return Ue.stop();
                }
              }, v, null, [[5, 12]]);
            }));
            return function(v, g, w) {
              return d.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "getTemporaryContentUrlsForAttachedMedia",
        value: function() {
          var u, I = this.attachedMedia, d = (u = I?.map(function(v) {
            return v.sid;
          })) !== null && u !== void 0 ? u : [];
          return this.getTemporaryContentUrlsForMediaSids(d);
        }
      },
      {
        key: "_getDetailedDeliveryReceiptsPaginator",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v = this, g, w, R;
            return $.default.wrap(function(ge) {
              for (; ; ) switch (ge.prev = ge.next) {
                case 0:
                  return g = this.configuration.links.messagesReceipts.replace("%s", this.conversation.sid).replace("%s", this.sid), w = new Fe(g).arg("PageToken", d?.pageToken).arg("PageSize", d?.pageSize).build(), ge.next = 4, this.services.network.get(w);
                case 4:
                  return R = ge.sent, ge.abrupt("return", new jr(R.body.delivery_receipts.map(function(Me) {
                    return new Rr(Me);
                  }), function(Me, Ue) {
                    return v._getDetailedDeliveryReceiptsPaginator({
                      pageToken: Me,
                      pageSize: Ue
                    });
                  }, R.body.meta.previous_token, R.body.meta.next_token));
                case 6:
                case "end":
                  return ge.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getContentData",
        value: function() {
          var u = this;
          return new H.CancellablePromise(/* @__PURE__ */ (function() {
            var I = L.default(/* @__PURE__ */ $.default.mark(function d(v, g, w) {
              var R, me, ge, Me, Ue, St, Xe, Nt, Ft, or;
              return $.default.wrap(function(jt) {
                for (; ; ) switch (jt.prev = jt.next) {
                  case 0:
                    if (u.state.contentSid !== null) {
                      jt.next = 3;
                      break;
                    }
                    return v(null), jt.abrupt("return");
                  case 3:
                    if (R = u.getMediaByCategories(["body"]), R !== null) {
                      jt.next = 7;
                      break;
                    }
                    return v(null), jt.abrupt("return");
                  case 7:
                    if (me = "application/x-vnd.com.twilio.rich.", ge = R.filter(function(Dr) {
                      return Dr.contentType.startsWith(me);
                    }), ge.length !== 0) {
                      jt.next = 12;
                      break;
                    }
                    return v(null), jt.abrupt("return");
                  case 12:
                    return Me = ge[0], Ue = Me.getContentTemporaryUrl(), w(function() {
                      Ue.cancel();
                    }), jt.prev = 15, jt.next = 18, Ue;
                  case 18:
                    St = jt.sent, jt.next = 25;
                    break;
                  case 21:
                    return jt.prev = 21, jt.t0 = jt.catch(15), g(jt.t0), jt.abrupt("return");
                  case 25:
                    if (St !== null) {
                      jt.next = 28;
                      break;
                    }
                    return v(null), jt.abrupt("return");
                  case 28:
                    return Xe = new Promise(function(Dr, Ea) {
                      var Ot, fn = !1, Fr = new Cr();
                      Fr.open("GET", (Ot = St) !== null && Ot !== void 0 ? Ot : "", !0), Fr.responseType = "text", Fr.onreadystatechange = function() {
                        Fr.readyState !== 4 || fn || Dr(Fr.responseText);
                      }, Fr.onerror = function() {
                        Ea(Fr.statusText);
                      }, w(function() {
                        fn = !0, Fr.abort(), Ea(/* @__PURE__ */ new Error("XHR has been aborted"));
                      }), Fr.send();
                    }), jt.prev = 29, jt.next = 32, Xe;
                  case 32:
                    Ft = jt.sent, Nt = JSON.parse(Ft), jt.next = 40;
                    break;
                  case 36:
                    return jt.prev = 36, jt.t1 = jt.catch(29), g(jt.t1), jt.abrupt("return");
                  case 40:
                    or = Me.contentType.replace(me, "").replace(".", "/"), v(wr(or, Nt.data));
                  case 42:
                  case "end":
                    return jt.stop();
                }
              }, d, null, [[15, 21], [29, 36]]);
            }));
            return function(d, v, g) {
              return I.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "getChannelMetadata",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  if (this.state.hasChannelMetadata) {
                    v.next = 2;
                    break;
                  }
                  return v.abrupt("return", null);
                case 2:
                  return v.next = 4, this.services.channelMetadataClient.getChannelMetadata(this.conversation.sid, this.sid);
                case 4:
                  return v.abrupt("return", v.sent);
                case 5:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getMessageRecipients",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this.services.messageRecipientsClient.getRecipientsFromMessage(this.conversation.sid, this.sid);
                case 2:
                  return v.abrupt("return", v.sent);
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      }
    ]), k;
  })(B.ReplayEventEmitter);
  function dr(M) {
    var A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    return M ? A ? new Xt(zr(zr({}, M), {}, { category: A }), this.services) : new Xt(M, this.services) : null;
  }
  function Jr(M, A) {
    var k = this;
    this.state.media = Er(this, ar, dr).call(this, A), this.state.medias = M ? M.map(function(o) {
      return Er(k, ar, dr).call(k, o);
    }).filter(function(o) {
      return o !== null;
    }) : A && !M ? [Er(this, ar, dr).call(this, A, "media")].filter(function(o) {
      return o !== null;
    }) : null;
  }
  oe.default(Zt, "updated", "updated"), F([
    U.deprecated("getMediaByCategory", "getMediaByCategories"),
    m("design:type", Function),
    m("design:paramtypes", [Array]),
    m("design:returntype", Array)
  ], Zt.prototype, "getMediaByCategory", null), F([
    O.validateTypes([O.nonEmptyString, "undefined"]),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Xt)
  ], Zt.prototype, "getEmailBody", null), F([
    O.validateTypes([O.nonEmptyString, "undefined"]),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Xt)
  ], Zt.prototype, "getEmailHistory", null), F([
    O.validateTypesAsync("string"),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], Zt.prototype, "updateBody", null), F([
    O.validateTypesAsync(ht),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Promise)
  ], Zt.prototype, "updateAttributes", null), F([
    U.deprecated("attachTemporaryUrlsFor", "getTemporaryContentUrlsForMedia"),
    m("design:type", Function),
    m("design:paramtypes", [Array]),
    m("design:returntype", Promise)
  ], Zt.prototype, "attachTemporaryUrlsFor", null), F([
    O.validateTypesAsync(O.nonEmptyArray("media", Xt)),
    m("design:type", Function),
    m("design:paramtypes", [Array]),
    m("design:returntype", H.CancellablePromise)
  ], Zt.prototype, "getTemporaryContentUrlsForMedia", null), F([
    O.validateTypesAsync(O.nonEmptyArray("strings", "string")),
    m("design:type", Function),
    m("design:paramtypes", [Array]),
    m("design:returntype", H.CancellablePromise)
  ], Zt.prototype, "getTemporaryContentUrlsForMediaSids", null);
  function Or(M, A) {
    var k = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(M);
      A && (o = o.filter(function(u) {
        return Object.getOwnPropertyDescriptor(M, u).enumerable;
      })), k.push.apply(k, o);
    }
    return k;
  }
  function rr(M) {
    for (var A = 1; A < arguments.length; A++) {
      var k = arguments[A] != null ? arguments[A] : {};
      A % 2 ? Or(Object(k), !0).forEach(function(o) {
        oe.default(M, o, k[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(k)) : Or(Object(k)).forEach(function(o) {
        Object.defineProperty(M, o, Object.getOwnPropertyDescriptor(k, o));
      });
    }
    return M;
  }
  function lr(M, A) {
    var k = typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
    if (!k) {
      if (Array.isArray(M) || (k = nn(M)) || A && M && typeof M.length == "number") {
        k && (M = k);
        var o = 0, u = function() {
        };
        return {
          s: u,
          n: function() {
            return o >= M.length ? { done: !0 } : {
              done: !1,
              value: M[o++]
            };
          },
          e: function(w) {
            throw w;
          },
          f: u
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, d = !1, v;
    return {
      s: function() {
        k = k.call(M);
      },
      n: function() {
        var w = k.next();
        return I = w.done, w;
      },
      e: function(w) {
        d = !0, v = w;
      },
      f: function() {
        try {
          !I && k.return != null && k.return();
        } finally {
          if (d) throw v;
        }
      }
    };
  }
  function nn(M, A) {
    if (M) {
      if (typeof M == "string") return an(M, A);
      var k = Object.prototype.toString.call(M).slice(8, -1);
      if (k === "Object" && M.constructor && (k = M.constructor.name), k === "Map" || k === "Set") return Array.from(M);
      if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return an(M, A);
    }
  }
  function an(M, A) {
    (A == null || A > M.length) && (A = M.length);
    for (var k = 0, o = new Array(A); k < A; k++) o[k] = M[k];
    return o;
  }
  function Ee(M) {
    var A = it();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function it() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Ke = De.scope("Messages"), xe = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = Ee(k);
    function k(o, u, I) {
      var d;
      return Ce.default(this, k), d = A.call(this), d.conversation = o, d.configuration = u, d.services = I, d.messagesByIndex = /* @__PURE__ */ new Map(), d.messagesListPromise = null, d;
    }
    return Ae.default(k, [
      {
        key: "subscribe",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v = this, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  if (!this.messagesListPromise) {
                    R.next = 2;
                    break;
                  }
                  return R.abrupt("return", this.messagesListPromise);
                case 2:
                  return this.messagesListPromise = typeof d == "string" ? this.services.syncClient.list({
                    id: d,
                    mode: "open_existing"
                  }) : Promise.resolve(d), R.prev = 3, R.next = 6, this.messagesListPromise;
                case 6:
                  return g = R.sent, g.on("itemAdded", function(me) {
                    Ke.debug("".concat(v.conversation.sid, " itemAdded: ").concat(me.item.index));
                    var ge = {
                      self: "".concat(v.conversation._links.messages, "/").concat(me.item.data.sid),
                      conversation: v.conversation._links.self,
                      messages_receipts: "".concat(v.conversation._links.messages, "/").concat(me.item.data.sid, "/Receipts")
                    }, Me = new Zt(me.item.index, me.item.data, v.conversation, ge, v.configuration, v.services);
                    if (v.messagesByIndex.has(Me.index)) {
                      Ke.debug("Message arrived, but is already known and ignored", v.conversation.sid, Me.index);
                      return;
                    }
                    v.messagesByIndex.set(Me.index, Me), Me.on("updated", function(Ue) {
                      return v.emit("messageUpdated", Ue);
                    }), v.emit("messageAdded", Me);
                  }), g.on("itemRemoved", function(me) {
                    Ke.debug("#{this.conversation.sid} itemRemoved: ".concat(me.index));
                    var ge = me.index;
                    if (v.messagesByIndex.has(ge)) {
                      var Me = v.messagesByIndex.get(ge);
                      if (!Me) return;
                      v.messagesByIndex.delete(Me.index), Me.removeAllListeners("updated"), v.emit("messageRemoved", Me);
                    }
                  }), g.on("itemUpdated", function(me) {
                    Ke.debug("".concat(v.conversation.sid, " itemUpdated: ").concat(me.item.index));
                    var ge = v.messagesByIndex.get(me.item.index);
                    ge && ge._update(me.item.data);
                  }), R.abrupt("return", g);
                case 13:
                  throw R.prev = 13, R.t0 = R.catch(3), this.messagesListPromise = null, this.services.syncClient.connectionState !== "disconnected" && Ke.error("Failed to get messages object for conversation", this.conversation.sid, R.t0), Ke.debug("ERROR: Failed to get messages object for conversation", this.conversation.sid, R.t0), R.t0;
                case 19:
                case "end":
                  return R.stop();
              }
            }, I, this, [[3, 13]]);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "unsubscribe",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  if (this.messagesListPromise) {
                    g.next = 2;
                    break;
                  }
                  return g.abrupt("return");
                case 2:
                  return g.next = 4, this.messagesListPromise;
                case 4:
                  d = g.sent, d.close(), this.messagesListPromise = null;
                case 7:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "sendV2",
        value: function(u) {
          var I = this;
          return Ke.debug("Sending message V2", u.mediaContent, u.attributes, u.emailOptions), new H.CancellablePromise(/* @__PURE__ */ (function() {
            var d = L.default(/* @__PURE__ */ $.default.mark(function v(g, w, R) {
              var me, ge, Me, Ue, St, Xe, Nt, Ft, or, Ht, jt, Dr;
              return $.default.wrap(function(Ot) {
                for (; ; ) switch (Ot.prev = Ot.next) {
                  case 0:
                    ge = [], Me = [], R(function() {
                      Me.forEach(function(fn) {
                        return fn.cancel();
                      });
                    }), Ue = lr(u.mediaContent), Ot.prev = 4, Ue.s();
                  case 6:
                    if ((St = Ue.n()).done) {
                      Ot.next = 25;
                      break;
                    }
                    return Xe = Ie.default(St.value, 2), Nt = Xe[0], Ft = Xe[1], Ot.prev = 8, Ke.debug("Adding media to a message as ".concat(Ft instanceof FormData ? "FormData" : "SendMediaOptions"), Ft), jt = Ft instanceof FormData ? I.services.mcsClient.postFormData(Ft, Nt) : I.services.mcsClient.post((or = Ft.contentType) !== null && or !== void 0 ? or : "", (Ht = Ft.media) !== null && Ht !== void 0 ? Ht : "", Nt, Ft.filename), Me.push(jt), Ot.t0 = ge, Ot.next = 15, jt;
                  case 15:
                    Ot.t1 = Ot.sent, Ot.t0.push.call(Ot.t0, Ot.t1), Ot.next = 23;
                    break;
                  case 19:
                    return Ot.prev = 19, Ot.t2 = Ot.catch(8), w(Ot.t2), Ot.abrupt("return");
                  case 23:
                    Ot.next = 6;
                    break;
                  case 25:
                    Ot.next = 30;
                    break;
                  case 27:
                    Ot.prev = 27, Ot.t3 = Ot.catch(4), Ue.e(Ot.t3);
                  case 30:
                    return Ot.prev = 30, Ue.f(), Ot.finish(30);
                  case 33:
                    return Dr = I.services.commandExecutor.mutateResource("post", I.conversation._links.messages, {
                      body: u.text,
                      subject: (me = u.emailOptions) === null || me === void 0 ? void 0 : me.subject,
                      media_sids: ge.map(function(fn) {
                        return fn.sid;
                      }),
                      attributes: typeof u.attributes < "u" ? JSON.stringify(u.attributes) : void 0,
                      content_sid: u.contentSid,
                      content_variables: typeof u.contentVariables < "u" ? JSON.stringify(u.contentVariables.reduce(function(fn, Fr) {
                        return rr(rr({}, fn), {}, oe.default({}, Fr.name, Fr.value));
                      }, {})) : void 0
                    }), Ot.prev = 34, Ot.t4 = g, Ot.next = 38, Dr;
                  case 38:
                    Ot.t5 = Ot.sent, (0, Ot.t4)(Ot.t5), Ot.next = 45;
                    break;
                  case 42:
                    Ot.prev = 42, Ot.t6 = Ot.catch(34), w(Ot.t6);
                  case 45:
                  case "end":
                    return Ot.stop();
                }
              }, v, null, [
                [
                  4,
                  27,
                  30,
                  33
                ],
                [8, 19],
                [34, 42]
              ]);
            }));
            return function(v, g, w) {
              return d.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "send",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v, g, w = arguments;
            return $.default.wrap(function(me) {
              for (; ; ) switch (me.prev = me.next) {
                case 0:
                  return v = w.length > 1 && w[1] !== void 0 ? w[1] : {}, g = w.length > 2 ? w[2] : void 0, Ke.debug("Sending text message", d, v, g), me.abrupt("return", this.services.commandExecutor.mutateResource("post", this.conversation._links.messages, {
                    body: d ?? "",
                    attributes: typeof v < "u" ? JSON.stringify(v) : void 0,
                    subject: g?.subject
                  }));
                case 4:
                case "end":
                  return me.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "sendMedia",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v, g, w, R, me, ge = arguments;
            return $.default.wrap(function(Ue) {
              for (; ; ) switch (Ue.prev = Ue.next) {
                case 0:
                  if (w = ge.length > 1 && ge[1] !== void 0 ? ge[1] : {}, R = ge.length > 2 ? ge[2] : void 0, Ke.debug("Sending media message", d, w, R), Ke.debug("Sending media message as ".concat(d instanceof FormData ? "FormData" : "SendMediaOptions"), d, w), !(d instanceof FormData)) {
                    Ue.next = 10;
                    break;
                  }
                  return Ue.next = 7, this.services.mcsClient.postFormData(d);
                case 7:
                  Ue.t0 = Ue.sent, Ue.next = 13;
                  break;
                case 10:
                  return Ue.next = 12, this.services.mcsClient.post((v = d.contentType) !== null && v !== void 0 ? v : "", (g = d.media) !== null && g !== void 0 ? g : "", "media", d.filename);
                case 12:
                  Ue.t0 = Ue.sent;
                case 13:
                  return me = Ue.t0, Ue.next = 16, this.services.commandExecutor.mutateResource("post", this.conversation._links.messages, {
                    media_sids: [me.sid],
                    attributes: typeof w < "u" ? JSON.stringify(w) : void 0
                  });
                case 16:
                  return Ue.abrupt("return", Ue.sent);
                case 17:
                case "end":
                  return Ue.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getMessages",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g, w = arguments;
            return $.default.wrap(function(me) {
              for (; ; ) switch (me.prev = me.next) {
                case 0:
                  return g = w.length > 2 && w[2] !== void 0 ? w[2] : "backwards", me.abrupt("return", this._getMessages(d, v, g));
                case 2:
                case "end":
                  return me.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_wrapPaginator",
        value: function(u, I, d) {
          var v = this, g = u === "desc", w = function() {
            return I.nextPage().then(function(ge) {
              return v._wrapPaginator(u, ge, d);
            });
          }, R = function() {
            return I.prevPage().then(function(ge) {
              return v._wrapPaginator(u, ge, d);
            });
          };
          return d(I.items).then(function(me) {
            return {
              items: me.sort(function(ge, Me) {
                return ge.index - Me.index;
              }),
              hasPrevPage: g ? I.hasNextPage : I.hasPrevPage,
              hasNextPage: g ? I.hasPrevPage : I.hasNextPage,
              prevPage: g ? w : R,
              nextPage: g ? R : w
            };
          });
        }
      },
      {
        key: "_upsertMessage",
        value: function(u, I) {
          var d = this, v = this.messagesByIndex.get(u);
          if (v) return v;
          var g = {
            self: "".concat(this.conversation._links.messages, "/").concat(I.sid),
            conversation: this.conversation._links.self,
            messages_receipts: "".concat(this.conversation._links.messages, "/").concat(I.sid, "/Receipts")
          }, w = new Zt(u, I, this.conversation, g, this.configuration, this.services);
          return this.messagesByIndex.set(w.index, w), w.on("updated", function(R) {
            return d.emit("messageUpdated", R);
          }), w;
        }
      },
      {
        key: "_getMessages",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this, v, g, w, R, me, ge, Me = arguments;
            return $.default.wrap(function(St) {
              for (; ; ) switch (St.prev = St.next) {
                case 0:
                  return v = Me.length > 0 && Me[0] !== void 0 ? Me[0] : 30, g = Me.length > 1 && Me[1] !== void 0 ? Me[1] : "end", w = Me.length > 2 && Me[2] !== void 0 ? Me[2] : "forward", R = w === "backwards" ? "desc" : "asc", St.next = 6, this.messagesListPromise;
                case 6:
                  return me = St.sent, St.next = 9, me?.getItems({
                    from: g !== "end" ? g : void 0,
                    pageSize: v,
                    order: R,
                    limit: v
                  });
                case 9:
                  return ge = St.sent, St.next = 12, this._wrapPaginator(R, ge, function(Xe) {
                    return Promise.all(Xe.map(function(Nt) {
                      return d._upsertMessage(Nt.index, Nt.data);
                    }));
                  });
                case 12:
                  return St.abrupt("return", St.sent);
                case 13:
                case "end":
                  return St.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      }
    ]), k;
  })(B.ReplayEventEmitter), dt = /* @__PURE__ */ (function() {
    function M(A) {
      Ce.default(this, M), oe.default(this, "attributes", {}), oe.default(this, "mediaContent", []), oe.default(this, "emailOptions", {}), this.messagesEntity = A;
    }
    return Ae.default(M, [{
      key: "send",
      value: function() {
        var k = this;
        return new H.CancellablePromise(/* @__PURE__ */ (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function u(I, d, v) {
            var g, w;
            return $.default.wrap(function(me) {
              for (; ; ) switch (me.prev = me.next) {
                case 0:
                  return g = k.messagesEntity.sendV2(k), v(function() {
                    return g.cancel();
                  }), me.prev = 2, me.next = 5, g;
                case 5:
                  w = me.sent, I(ce(w.index)), me.next = 12;
                  break;
                case 9:
                  me.prev = 9, me.t0 = me.catch(2), d(me.t0);
                case 12:
                case "end":
                  return me.stop();
              }
            }, u, null, [[2, 9]]);
          }));
          return function(u, I, d) {
            return o.apply(this, arguments);
          };
        })());
      }
    }]), M;
  })(), kt = /* @__PURE__ */ (function() {
    function M(A, k) {
      Ce.default(this, M), this.limits = A, this.message = new dt(k), this.emailBodies = /* @__PURE__ */ new Map(), this.emailHistories = /* @__PURE__ */ new Map();
    }
    return Ae.default(M, [
      {
        key: "setBody",
        value: function(k) {
          return this.message.text = k, this;
        }
      },
      {
        key: "setSubject",
        value: function(k) {
          return this.message.emailOptions.subject = k, this;
        }
      },
      {
        key: "setAttributes",
        value: function(k) {
          return this.message.attributes = k, this;
        }
      },
      {
        key: "setEmailBody",
        value: function(k, o) {
          return this.emailBodies.set(k, o), this;
        }
      },
      {
        key: "setEmailHistory",
        value: function(k, o) {
          return this.emailHistories.set(k, o), this;
        }
      },
      {
        key: "setContentTemplate",
        value: function(k) {
          var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
          return this.message.contentSid = k, this.message.contentVariables = o, this;
        }
      },
      {
        key: "addMedia",
        value: function(k) {
          if (typeof FormData > "u" && k instanceof FormData) throw new Error("Could not add FormData content whilst not in a browser");
          if (!(k instanceof FormData)) {
            var o = k;
            if (!o.contentType || !o.media) throw new Error("Media content in SendMediaOptions must contain non-empty contentType and media");
          }
          return this.message.mediaContent.push(["media", k]), this;
        }
      },
      {
        key: "build",
        value: function() {
          var k = this;
          if (this.emailBodies.forEach(function(o, u) {
            if (!k.limits.emailBodiesAllowedContentTypes.includes(u)) throw new Error("Unsupported email body content type ".concat(u));
          }), this.emailHistories.forEach(function(o, u) {
            if (!k.limits.emailHistoriesAllowedContentTypes.includes(u)) throw new Error("Unsupported email history content type ".concat(u));
          }), this.emailBodies.size > this.limits.emailBodiesAllowedContentTypes.length) throw new Error("Too many email bodies attached to the message (".concat(this.emailBodies.size, " > ").concat(this.limits.emailBodiesAllowedContentTypes.length, ")"));
          if (this.emailHistories.size > this.limits.emailHistoriesAllowedContentTypes.length) throw new Error("Too many email histories attached to the message (".concat(this.emailHistories.size, " > ").concat(this.limits.emailHistoriesAllowedContentTypes.length, ")"));
          if (this.message.mediaContent.length > this.limits.mediaAttachmentsCountLimit) throw new Error("Too many media attachments in the message (".concat(this.message.mediaContent.length, " > ").concat(this.limits.mediaAttachmentsCountLimit, ")"));
          return this.emailBodies.forEach(function(o) {
            k.message.mediaContent.push(["body", o]);
          }), this.emailHistories.forEach(function(o) {
            k.message.mediaContent.push(["history", o]);
          }), this.message;
        }
      },
      {
        key: "buildAndSend",
        value: function() {
          return this.build().send();
        }
      }
    ]), M;
  })();
  F([
    O.validateTypes("string"),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", kt)
  ], kt.prototype, "setBody", null), F([
    O.validateTypes("string"),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", kt)
  ], kt.prototype, "setSubject", null), F([
    O.validateTypes(ht),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", kt)
  ], kt.prototype, "setAttributes", null), F([
    O.validateTypes("string", [FormData, ct]),
    m("design:type", Function),
    m("design:paramtypes", [String, Object]),
    m("design:returntype", kt)
  ], kt.prototype, "setEmailBody", null), F([
    O.validateTypes("string", [FormData, ct]),
    m("design:type", Function),
    m("design:paramtypes", [String, Object]),
    m("design:returntype", kt)
  ], kt.prototype, "setEmailHistory", null), F([
    O.validateTypes("string", [O.array("content variables", yr), "undefined"]),
    m("design:type", Function),
    m("design:paramtypes", [String, Array]),
    m("design:returntype", kt)
  ], kt.prototype, "setContentTemplate", null), F([
    O.validateTypes([FormData, ct]),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", kt)
  ], kt.prototype, "addMedia", null);
  function It(M, A) {
    var k = typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
    if (!k) {
      if (Array.isArray(M) || (k = zt(M)) || A && M && typeof M.length == "number") {
        k && (M = k);
        var o = 0, u = function() {
        };
        return {
          s: u,
          n: function() {
            return o >= M.length ? { done: !0 } : {
              done: !1,
              value: M[o++]
            };
          },
          e: function(w) {
            throw w;
          },
          f: u
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, d = !1, v;
    return {
      s: function() {
        k = k.call(M);
      },
      n: function() {
        var w = k.next();
        return I = w.done, w;
      },
      e: function(w) {
        d = !0, v = w;
      },
      f: function() {
        try {
          !I && k.return != null && k.return();
        } finally {
          if (d) throw v;
        }
      }
    };
  }
  function zt(M, A) {
    if (M) {
      if (typeof M == "string") return qt(M, A);
      var k = Object.prototype.toString.call(M).slice(8, -1);
      if (k === "Object" && M.constructor && (k = M.constructor.name), k === "Map" || k === "Set") return Array.from(M);
      if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return qt(M, A);
    }
  }
  function qt(M, A) {
    (A == null || A > M.length) && (A = M.length);
    for (var k = 0, o = new Array(A); k < A; k++) o[k] = M[k];
    return o;
  }
  function nr(M) {
    var A = ur();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function ur() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var ut = {
    lastMessage: "lastMessage",
    attributes: "attributes",
    createdBy: "createdBy",
    dateCreated: "dateCreated",
    dateUpdated: "dateUpdated",
    friendlyName: "friendlyName",
    lastConsumedMessageIndex: "lastConsumedMessageIndex",
    notificationLevel: "notificationLevel",
    sid: "sid",
    status: "status",
    uniqueName: "uniqueName",
    state: "state",
    bindings: "bindings"
  }, Rt = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = nr(k);
    function k(o, u, I, d, v) {
      var g, w, R;
      Ce.default(this, k), R = A.call(this), R.sid = u, R._links = I, R._configuration = d, R._services = v, R._entityName = o.channel, R._internalState = {
        uniqueName: o.uniqueName || null,
        status: "notParticipating",
        attributes: (g = o.attributes) !== null && g !== void 0 ? g : {},
        createdBy: o.createdBy,
        dateCreated: ye(o.dateCreated),
        dateUpdated: ye(o.dateUpdated),
        friendlyName: o.friendlyName || null,
        lastReadMessageIndex: Number.isInteger(o.lastConsumedMessageIndex) ? o.lastConsumedMessageIndex : null,
        bindings: (w = o.bindings) !== null && w !== void 0 ? w : {}
      }, o.notificationLevel && (R._internalState.notificationLevel = o.notificationLevel);
      var me = { participants: R._links.participants };
      return R._participants = /* @__PURE__ */ new Map(), R._participantsEntity = new Lt(le.default(R), R._participants, me, R._services), R._participantsEntity.on(k.participantJoined, function(ge) {
        return R.emit(k.participantJoined, ge);
      }), R._participantsEntity.on(k.participantLeft, function(ge) {
        return R.emit(k.participantLeft, ge);
      }), R._participantsEntity.on(k.participantUpdated, function(ge) {
        return R.emit(k.participantUpdated, ge);
      }), R._messagesEntity = new xe(le.default(R), d, v), R._messagesEntity.on(k.messageAdded, function(ge) {
        return R._onMessageAdded(ge);
      }), R._messagesEntity.on(k.messageUpdated, function(ge) {
        return R.emit(k.messageUpdated, ge);
      }), R._messagesEntity.on(k.messageRemoved, function(ge) {
        return R.emit(k.messageRemoved, ge);
      }), R;
    }
    return Ae.default(k, [
      {
        key: "uniqueName",
        get: function() {
          return this._internalState.uniqueName;
        }
      },
      {
        key: "status",
        get: function() {
          return this._internalState.status;
        }
      },
      {
        key: "friendlyName",
        get: function() {
          return this._internalState.friendlyName;
        }
      },
      {
        key: "dateUpdated",
        get: function() {
          return this._internalState.dateUpdated;
        }
      },
      {
        key: "dateCreated",
        get: function() {
          return this._internalState.dateCreated;
        }
      },
      {
        key: "createdBy",
        get: function() {
          var u;
          return (u = this._internalState.createdBy) !== null && u !== void 0 ? u : "";
        }
      },
      {
        key: "attributes",
        get: function() {
          return this._internalState.attributes;
        }
      },
      {
        key: "lastReadMessageIndex",
        get: function() {
          return this._internalState.lastReadMessageIndex;
        }
      },
      {
        key: "lastMessage",
        get: function() {
          var u;
          return (u = this._internalState.lastMessage) !== null && u !== void 0 ? u : void 0;
        }
      },
      {
        key: "notificationLevel",
        get: function() {
          var u;
          return (u = this._internalState.notificationLevel) !== null && u !== void 0 ? u : "default";
        }
      },
      {
        key: "bindings",
        get: function() {
          return this._internalState.bindings;
        }
      },
      {
        key: "limits",
        get: function() {
          return this._configuration.limits;
        }
      },
      {
        key: "state",
        get: function() {
          return this._internalState.state;
        }
      },
      {
        key: "_statusSource",
        get: function() {
          return this._dataSource;
        }
      },
      {
        key: "add",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.abrupt("return", this._participantsEntity.add(d, v ?? {}));
                case 1:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "addNonChatParticipant",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g, w, R = arguments;
            return $.default.wrap(function(ge) {
              for (; ; ) switch (ge.prev = ge.next) {
                case 0:
                  return g = R.length > 2 && R[2] !== void 0 ? R[2] : {}, w = R.length > 3 && R[3] !== void 0 ? R[3] : {}, ge.abrupt("return", this._participantsEntity.addNonChatParticipant(d, v, g ?? {}, w ?? {}));
                case 3:
                case "end":
                  return ge.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "advanceLastReadMessageIndex",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._subscribeStreams();
                case 2:
                  if (!(d < ((v = this.lastReadMessageIndex) !== null && v !== void 0 ? v : 0))) {
                    w.next = 6;
                    break;
                  }
                  return w.next = 5, this._setLastReadMessageIndex(this.lastReadMessageIndex);
                case 5:
                  return w.abrupt("return", w.sent);
                case 6:
                  return w.next = 8, this._setLastReadMessageIndex(d);
                case 8:
                  return w.abrupt("return", w.sent);
                case 9:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "delete",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._services.commandExecutor.mutateResource("delete", this._links.self);
                case 2:
                  return v.abrupt("return", this);
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getAttributes",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._subscribe();
                case 2:
                  return v.abrupt("return", this.attributes);
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getMessages",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v, g) {
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  return R.next = 2, this._subscribeStreams();
                case 2:
                  return R.abrupt("return", this._messagesEntity.getMessages(d, v, g));
                case 3:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u(I, d, v) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getParticipants",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._subscribeStreams();
                case 2:
                  return v.abrupt("return", this._participantsEntity.getParticipants());
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getParticipantsCount",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d, v, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  return v = new Fe(this._configuration.links.conversations).path(this.sid).build(), R.next = 3, this._services.network.get(v);
                case 3:
                  return g = R.sent, R.abrupt("return", (d = g.body.participants_count) !== null && d !== void 0 ? d : 0);
                case 5:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getParticipantBySid",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.abrupt("return", this._participantsEntity.getParticipantBySid(d));
                case 1:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getParticipantByIdentity",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d, v = arguments;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return d = v.length > 0 && v[0] !== void 0 ? v[0] : "", w.abrupt("return", this._participantsEntity.getParticipantByIdentity(d ?? ""));
                case 2:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getMessagesCount",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d, v, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  return v = new Fe(this._configuration.links.conversations).path(this.sid).build(), R.next = 3, this._services.network.get(v);
                case 3:
                  return g = R.sent, R.abrupt("return", (d = g.body.messages_count) !== null && d !== void 0 ? d : 0);
                case 5:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getUnreadMessagesCount",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d, v, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  return d = new Fe(this._configuration.links.myConversations).path(this.sid).build(), R.next = 3, this._services.network.get(d);
                case 3:
                  if (v = R.sent, v.body.conversation_sid === this.sid) {
                    R.next = 6;
                    break;
                  }
                  throw new Error("Conversation was not found in the user conversations list");
                case 6:
                  if (g = v.body.unread_messages_count, typeof g != "number") {
                    R.next = 9;
                    break;
                  }
                  return R.abrupt("return", g);
                case 9:
                  return R.abrupt("return", null);
                case 10:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "join",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._services.commandExecutor.mutateResource("post", this._links.participants, { identity: this._configuration.userIdentity });
                case 2:
                  return v.abrupt("return", this);
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "leave",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  if (this._internalState.status !== "joined") {
                    v.next = 3;
                    break;
                  }
                  return v.next = 3, this._services.commandExecutor.mutateResource("delete", "".concat(this._links.participants, "/").concat(encodeURIComponent(this._configuration.userIdentity)));
                case 3:
                  return v.abrupt("return", this);
                case 4:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "removeParticipant",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._participantsEntity.remove(typeof d == "string" ? d : d.sid);
                case 2:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "sendMessage",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v, g) {
            var w, R, me, ge;
            return $.default.wrap(function(Ue) {
              for (; ; ) switch (Ue.prev = Ue.next) {
                case 0:
                  if (!(typeof d == "string" || d === null)) {
                    Ue.next = 5;
                    break;
                  }
                  return Ue.next = 3, this._messagesEntity.send(d, v, g);
                case 3:
                  return me = Ue.sent, Ue.abrupt("return", (R = ce(me.index)) !== null && R !== void 0 ? R : 0);
                case 5:
                  return Ue.next = 7, this._messagesEntity.sendMedia(d, v, g);
                case 7:
                  return ge = Ue.sent, Ue.abrupt("return", (w = ce(ge.index)) !== null && w !== void 0 ? w : 0);
                case 9:
                case "end":
                  return Ue.stop();
              }
            }, I, this);
          }));
          function u(I, d, v) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "prepareMessage",
        value: function() {
          return new kt(this.limits, this._messagesEntity);
        }
      },
      {
        key: "setAllMessagesRead",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._subscribeStreams();
                case 2:
                  return g.next = 4, this.getMessages(1);
                case 4:
                  if (d = g.sent, !(d.items.length > 0)) {
                    g.next = 7;
                    break;
                  }
                  return g.abrupt("return", this.advanceLastReadMessageIndex(d.items[0].index));
                case 7:
                  return g.abrupt("return", 0);
                case 8:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "setAllMessagesUnread",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._subscribeStreams();
                case 2:
                  return v.next = 4, this._setLastReadMessageIndex(null);
                case 4:
                  return v.abrupt("return", v.sent);
                case 5:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "setUserNotificationLevel",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._services.commandExecutor.mutateResource("post", "".concat(this._configuration.links.myConversations, "/").concat(this.sid), { notification_level: d });
                case 2:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "typing",
        value: function() {
          return this._services.typingIndicator.send(this.sid);
        }
      },
      {
        key: "updateAttributes",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._services.commandExecutor.mutateResource("post", this._links.self, { attributes: d !== void 0 ? JSON.stringify(d) : void 0 });
                case 2:
                  return g.abrupt("return", this);
                case 3:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateFriendlyName",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  if (this._internalState.friendlyName === d) {
                    g.next = 3;
                    break;
                  }
                  return g.next = 3, this._services.commandExecutor.mutateResource("post", this._links.self, { friendly_name: d });
                case 3:
                  return g.abrupt("return", this);
                case 4:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateLastReadMessageIndex",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._subscribeStreams();
                case 2:
                  return g.abrupt("return", this._setLastReadMessageIndex(d));
                case 3:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateUniqueName",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  if (this._internalState.uniqueName === d) {
                    g.next = 4;
                    break;
                  }
                  return d || (d = ""), g.next = 4, this._services.commandExecutor.mutateResource("post", this._links.self, { unique_name: d });
                case 4:
                  return g.abrupt("return", this);
                case 5:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getMessageRecipients",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._services.messageRecipientsClient.getRecipientsFromConversation(this.sid, d);
                case 2:
                  return g.abrupt("return", g.sent);
                case 3:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_subscribe",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  if (!this._entityPromise) {
                    g.next = 2;
                    break;
                  }
                  return g.abrupt("return", this._entityPromise);
                case 2:
                  return this._entityPromise = this._services.syncClient.document({
                    id: this._entityName,
                    mode: "open_existing"
                  }), g.prev = 3, g.next = 6, this._entityPromise;
                case 6:
                  return this._entity = g.sent, this._entity.on(se.SyncDocument.updated, function(w) {
                    return d._update(w.data);
                  }), this._entity.on(se.SyncDocument.removed, function() {
                    return d.emit(k.removed, d);
                  }), this._update(this._entity.data), g.abrupt("return", this._entity);
                case 13:
                  throw g.prev = 13, g.t0 = g.catch(3), this._entity = null, this._entityPromise = null, this._services.syncClient.connectionState != "disconnected" && k._logger.error("Failed to get conversation object", g.t0), k._logger.debug("ERROR: Failed to get conversation object", g.t0), g.t0;
                case 20:
                case "end":
                  return g.stop();
              }
            }, I, this, [[3, 13]]);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_fetchStreams",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  if (!this._streamsPromise) {
                    g.next = 2;
                    break;
                  }
                  return g.abrupt("return", this._streamsPromise);
                case 2:
                  return this._streamsPromise = new Promise(/* @__PURE__ */ (function() {
                    var w = L.default(/* @__PURE__ */ $.default.mark(function R(me, ge) {
                      var Me, Ue, St, Xe, Nt;
                      return $.default.wrap(function(or) {
                        for (; ; ) switch (or.prev = or.next) {
                          case 0:
                            return or.prev = 0, or.next = 3, d._subscribe();
                          case 3:
                            or.next = 9;
                            break;
                          case 5:
                            return or.prev = 5, or.t0 = or.catch(0), k._logger.trace("Failed to subscribe to conversation", or.t0), or.abrupt("return", ge(or.t0));
                          case 9:
                            k._logger.trace("_streamsAvailable, this.entity.data=", (Me = d._entity) === null || Me === void 0 ? void 0 : Me.data), St = (Ue = d._entity) === null || Ue === void 0 ? void 0 : Ue.data, Xe = d._services.syncClient.list({
                              id: St.messages,
                              mode: "open_existing"
                            }).then(function(Ht) {
                              return d._messagesList = Ht, Ht;
                            }), Nt = d._services.syncClient.map({
                              id: St.roster,
                              mode: "open_existing"
                            }).then(function(Ht) {
                              return d._participantsMap = Ht, Ht;
                            }), Promise.all([Xe, Nt]).then(function() {
                              return me(!0);
                            }).catch(function(Ht) {
                              k._logger.trace("Failed to fetch conversation streams for conversation", d.sid, Ht), ge(Ht);
                            });
                          case 14:
                          case "end":
                            return or.stop();
                        }
                      }, R, null, [[0, 5]]);
                    }));
                    return function(R, me) {
                      return w.apply(this, arguments);
                    };
                  })()), g.abrupt("return", this._streamsPromise.catch(function(w) {
                    throw d._streamsPromise = null, w;
                  }));
                case 4:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_subscribeStreams",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d, v, g, w, R, me, ge;
            return $.default.wrap(function(Ue) {
              for (; ; ) switch (Ue.prev = Ue.next) {
                case 0:
                  return Ue.prev = 0, Ue.next = 3, this._fetchStreams();
                case 3:
                  return k._logger.trace("_subscribeStreams, this.entity.data=", (d = this._entity) === null || d === void 0 ? void 0 : d.data), R = (v = this._entity) === null || v === void 0 ? void 0 : v.data, me = R.messages, ge = R.roster, Ue.next = 9, Promise.all([this._messagesEntity.subscribe((g = this._messagesList) !== null && g !== void 0 ? g : me), this._participantsEntity.subscribe((w = this._participantsMap) !== null && w !== void 0 ? w : ge)]);
                case 9:
                  Ue.next = 16;
                  break;
                case 11:
                  throw Ue.prev = 11, Ue.t0 = Ue.catch(0), this._services.syncClient.connectionState !== "disconnected" && k._logger.error("Failed to subscribe on conversation objects", this.sid, Ue.t0), k._logger.debug("ERROR: Failed to subscribe on conversation objects", this.sid, Ue.t0), Ue.t0;
                case 16:
                case "end":
                  return Ue.stop();
              }
            }, I, this, [[0, 11]]);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_unsubscribe",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return this._entity && (this._entity.close(), this._entity = null, this._entityPromise = null), v.abrupt("return", Promise.all([this._participantsEntity.unsubscribe(), this._messagesEntity.unsubscribe()]));
                case 2:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_setStatus",
        value: function(u, I) {
          var d = this;
          if (this._dataSource = I, this._internalState.status !== u) {
            if (this._internalState.status = u, u === "joined") {
              this._subscribeStreams().catch(function(v) {
                if (k._logger.debug("ERROR while setting conversation status " + u, v), d._services.syncClient.connectionState !== "disconnected") throw v;
              });
              return;
            }
            this._entityPromise && this._unsubscribe().catch(function(v) {
              if (k._logger.debug("ERROR while setting conversation status " + u, v), d._services.syncClient.connectionState !== "disconnected") throw v;
            });
          }
        }
      },
      {
        key: "_update",
        value: function(u) {
          var I, d, v, g, w;
          k._logger.trace("_update", u), k.preprocessUpdate(u, this.sid);
          for (var R = /* @__PURE__ */ new Set(), me = 0, ge = Object.keys(u); me < ge.length; me++) {
            var Me = ge[me], Ue = ut[Me];
            if (Ue)
              switch (Ue) {
                case ut.status:
                  if (!u.status || u.status === "unknown" || this._internalState.status === u.status) break;
                  this._internalState.status = u.status, R.add(Ue);
                  break;
                case ut.attributes:
                  if (We(this._internalState.attributes, u.attributes)) break;
                  this._internalState.attributes = u.attributes, R.add(Ue);
                  break;
                case ut.lastConsumedMessageIndex:
                  if (u.lastConsumedMessageIndex === void 0 || u.lastConsumedMessageIndex === this._internalState.lastReadMessageIndex) break;
                  this._internalState.lastReadMessageIndex = u.lastConsumedMessageIndex, R.add("lastReadMessageIndex");
                  break;
                case ut.lastMessage:
                  if (this._internalState.lastMessage && !u.lastMessage) {
                    delete this._internalState.lastMessage, R.add(Ue);
                    break;
                  }
                  this._internalState.lastMessage = this._internalState.lastMessage || {}, ((I = u.lastMessage) === null || I === void 0 ? void 0 : I.index) !== void 0 && u.lastMessage.index !== this._internalState.lastMessage.index && (this._internalState.lastMessage.index = u.lastMessage.index, R.add(Ue)), ((d = u.lastMessage) === null || d === void 0 ? void 0 : d.timestamp) !== void 0 && ((v = this._internalState.lastMessage) === null || v === void 0 || (g = v.dateCreated) === null || g === void 0 ? void 0 : g.getTime()) !== u.lastMessage.timestamp.getTime() && (this._internalState.lastMessage.dateCreated = u.lastMessage.timestamp, R.add(Ue)), We(this._internalState.lastMessage, {}) && delete this._internalState.lastMessage;
                  break;
                case ut.state:
                  var St = u.state || void 0;
                  if (St !== void 0 && (St.dateUpdated = new Date(St.dateUpdated)), We(this._internalState.state, St)) break;
                  this._internalState.state = St, R.add(Ue);
                  break;
                case ut.bindings:
                  if (We(this._internalState.bindings, u.bindings)) break;
                  this._internalState.bindings = u.bindings, R.add(Ue);
                  break;
                default:
                  var Xe = u[Me] instanceof Date, Nt = Xe && ((w = this._internalState[Ue]) === null || w === void 0 ? void 0 : w.getTime()) === u[Me].getTime(), Ft = !Xe && this[Ue] === u[Me];
                  if (Nt || Ft) break;
                  this._internalState[Ue] = u[Me], R.add(Ue);
              }
          }
          R.size > 0 && this.emit(k.updated, {
            conversation: this,
            updateReasons: vt.default(R)
          });
        }
      },
      {
        key: "_onMessageAdded",
        value: function(u) {
          var I = It(this._participants.values()), d;
          try {
            for (I.s(); !(d = I.n()).done; ) {
              var v = d.value;
              if (v.identity === u.author) {
                v._endTyping();
                break;
              }
            }
          } catch (g) {
            I.e(g);
          } finally {
            I.f();
          }
          this.emit(k.messageAdded, u);
        }
      },
      {
        key: "_setLastReadMessageIndex",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._services.commandExecutor.mutateResource("post", "".concat(this._configuration.links.myConversations, "/").concat(this.sid), { last_read_message_index: d });
                case 2:
                  return v = w.sent, w.abrupt("return", v.unread_messages_count);
                case 4:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      }
    ], [{
      key: "preprocessUpdate",
      value: function(u, I) {
        try {
          typeof u.attributes == "string" ? u.attributes = JSON.parse(u.attributes) : u.attributes && JSON.stringify(u.attributes);
        } catch {
          k._logger.warn("Retrieved malformed attributes from the server for conversation: " + I), u.attributes = {};
        }
        try {
          u.dateCreated && (u.dateCreated = new Date(u.dateCreated));
        } catch {
          k._logger.warn("Retrieved malformed dateCreated from the server for conversation: " + I), delete u.dateCreated;
        }
        try {
          u.dateUpdated && (u.dateUpdated = new Date(u.dateUpdated));
        } catch {
          k._logger.warn("Retrieved malformed dateUpdated from the server for conversation: " + I), delete u.dateUpdated;
        }
        try {
          u.lastMessage && u.lastMessage.timestamp && (u.lastMessage.timestamp = new Date(u.lastMessage.timestamp));
        } catch {
          k._logger.warn("Retrieved malformed lastMessage.timestamp from the server for conversation: " + I), delete u.lastMessage.timestamp;
        }
      }
    }]), k;
  })(B.ReplayEventEmitter);
  oe.default(Rt, "participantJoined", "participantJoined"), oe.default(Rt, "participantLeft", "participantLeft"), oe.default(Rt, "participantUpdated", "participantUpdated"), oe.default(Rt, "messageAdded", "messageAdded"), oe.default(Rt, "messageRemoved", "messageRemoved"), oe.default(Rt, "messageUpdated", "messageUpdated"), oe.default(Rt, "typingEnded", "typingEnded"), oe.default(Rt, "typingStarted", "typingStarted"), oe.default(Rt, "updated", "updated"), oe.default(Rt, "removed", "removed"), oe.default(Rt, "_logger", De.scope("Conversation")), F([
    O.validateTypesAsync(O.nonEmptyString, mt),
    m("design:type", Function),
    m("design:paramtypes", [String, Object]),
    m("design:returntype", Promise)
  ], Rt.prototype, "add", null), F([
    O.validateTypesAsync(O.nonEmptyString, O.nonEmptyString, mt, mt),
    m("design:type", Function),
    m("design:paramtypes", [
      String,
      String,
      Object,
      Object
    ]),
    m("design:returntype", Promise)
  ], Rt.prototype, "addNonChatParticipant", null), F([
    O.validateTypesAsync(O.nonNegativeInteger),
    m("design:type", Function),
    m("design:paramtypes", [Number]),
    m("design:returntype", Promise)
  ], Rt.prototype, "advanceLastReadMessageIndex", null), F([
    O.validateTypesAsync(["undefined", O.nonNegativeInteger], ["undefined", O.nonNegativeInteger], ["undefined", O.literal("backwards", "forward")]),
    m("design:type", Function),
    m("design:paramtypes", [
      Number,
      Number,
      String
    ]),
    m("design:returntype", Promise)
  ], Rt.prototype, "getMessages", null), F([
    O.validateTypesAsync(O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], Rt.prototype, "getParticipantBySid", null), F([
    O.validateTypesAsync(O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], Rt.prototype, "getParticipantByIdentity", null), F([
    O.validateTypesAsync([O.nonEmptyString, Et]),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Promise)
  ], Rt.prototype, "removeParticipant", null), F([
    O.validateTypesAsync([
      "string",
      FormData,
      O.literal(null),
      O.objectSchema("media options", {
        contentType: O.nonEmptyString,
        media: O.custom(function(M) {
          var A = typeof M == "string" && M.length > 0 || M instanceof Uint8Array || M instanceof ArrayBuffer;
          return typeof Blob == "function" && (A = A || M instanceof Blob), [A, "a non-empty string, an instance of Buffer or an instance of Blob"];
        })
      })
    ], mt, [
      "undefined",
      O.literal(null),
      O.objectSchema("email attributes", { subject: [O.nonEmptyString, "undefined"] })
    ]),
    m("design:type", Function),
    m("design:paramtypes", [
      Object,
      Object,
      Object
    ]),
    m("design:returntype", Promise)
  ], Rt.prototype, "sendMessage", null), F([
    O.validateTypesAsync(O.literal("default", "muted")),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], Rt.prototype, "setUserNotificationLevel", null), F([
    O.validateTypesAsync(ht),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Promise)
  ], Rt.prototype, "updateAttributes", null), F([
    O.validateTypesAsync("string"),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], Rt.prototype, "updateFriendlyName", null), F([
    O.validateTypesAsync([O.literal(null), O.nonNegativeInteger]),
    m("design:type", Function),
    m("design:paramtypes", [Number]),
    m("design:returntype", Promise)
  ], Rt.prototype, "updateLastReadMessageIndex", null), F([
    O.validateTypesAsync(["string", O.literal(null)]),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], Rt.prototype, "updateUniqueName", null);
  var Ir = /* @__PURE__ */ (function() {
    function M() {
      var A = this;
      Ce.default(this, M), this._promise = new Promise(function(k, o) {
        A._resolve = k, A._reject = o;
      });
    }
    return Ae.default(M, [
      {
        key: "promise",
        get: function() {
          return this._promise;
        }
      },
      {
        key: "update",
        value: function(k) {
          this._resolve(k);
        }
      },
      {
        key: "set",
        value: function(k) {
          this.current = k, this._resolve(k);
        }
      },
      {
        key: "fail",
        value: function(k) {
          this._reject(k);
        }
      }
    ]), M;
  })();
  function we(M, A) {
    var k = typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
    if (!k) {
      if (Array.isArray(M) || (k = Pe(M)) || A && M && typeof M.length == "number") {
        k && (M = k);
        var o = 0, u = function() {
        };
        return {
          s: u,
          n: function() {
            return o >= M.length ? { done: !0 } : {
              done: !1,
              value: M[o++]
            };
          },
          e: function(w) {
            throw w;
          },
          f: u
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, d = !1, v;
    return {
      s: function() {
        k = k.call(M);
      },
      n: function() {
        var w = k.next();
        return I = w.done, w;
      },
      e: function(w) {
        d = !0, v = w;
      },
      f: function() {
        try {
          !I && k.return != null && k.return();
        } finally {
          if (d) throw v;
        }
      }
    };
  }
  function Pe(M, A) {
    if (M) {
      if (typeof M == "string") return Z(M, A);
      var k = Object.prototype.toString.call(M).slice(8, -1);
      if (k === "Object" && M.constructor && (k = M.constructor.name), k === "Map" || k === "Set") return Array.from(M);
      if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return Z(M, A);
    }
  }
  function Z(M, A) {
    (A == null || A > M.length) && (A = M.length);
    for (var k = 0, o = new Array(A); k < A; k++) o[k] = M[k];
    return o;
  }
  function K(M, A) {
    var k = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(M);
      A && (o = o.filter(function(u) {
        return Object.getOwnPropertyDescriptor(M, u).enumerable;
      })), k.push.apply(k, o);
    }
    return k;
  }
  function q(M) {
    for (var A = 1; A < arguments.length; A++) {
      var k = arguments[A] != null ? arguments[A] : {};
      A % 2 ? K(Object(k), !0).forEach(function(o) {
        oe.default(M, o, k[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(k)) : K(Object(k)).forEach(function(o) {
        Object.defineProperty(M, o, Object.getOwnPropertyDescriptor(k, o));
      });
    }
    return M;
  }
  function ke(M) {
    var A = ie();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function ie() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var et = De.scope("Conversations"), rt = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = ke(k);
    function k(o, u) {
      var I;
      return Ce.default(this, k), I = A.call(this), oe.default(le.default(I), "conversations", /* @__PURE__ */ new Map()), oe.default(le.default(I), "myConversationsRead", new Ir()), oe.default(le.default(I), "tombstones", /* @__PURE__ */ new Set()), oe.default(le.default(I), "myConversationsFetched", !1), I.configuration = o, I.services = u, I;
    }
    return Ae.default(k, [
      {
        key: "addConversation",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v, g, w, R, me, ge, Me, Ue, St, Xe;
            return $.default.wrap(function(Ft) {
              for (; ; ) switch (Ft.prev = Ft.next) {
                case 0:
                  return R = typeof d?.attributes < "u" ? d.attributes : {}, Ft.next = 3, this.services.commandExecutor.mutateResource("post", this.configuration.links.conversations, {
                    friendly_name: d.friendlyName,
                    unique_name: d.uniqueName,
                    access: d.access,
                    attributes: typeof R < "u" ? JSON.stringify(R) : void 0
                  });
                case 3:
                  if (me = Ft.sent, ge = (v = me.sid) !== null && v !== void 0 ? v : null, Me = (g = (w = me.sync_objects) === null || w === void 0 ? void 0 : w.conversation) !== null && g !== void 0 ? g : null, Ue = q({ self: me.url }, me.links), St = this.conversations.get(ge), !St) {
                    Ft.next = 12;
                    break;
                  }
                  return Ft.next = 11, St._subscribe();
                case 11:
                  return Ft.abrupt("return", St);
                case 12:
                  return Xe = new Rt({
                    channel: Me,
                    entityName: "",
                    uniqueName: "",
                    attributes: null,
                    createdBy: "",
                    friendlyName: "",
                    lastConsumedMessageIndex: 0,
                    dateCreated: null,
                    dateUpdated: null
                  }, ge, Ue, this.configuration, this.services), this.conversations.set(Xe.sid, Xe), this._registerForEvents(Xe), Ft.next = 17, Xe._subscribe();
                case 17:
                  return this.emit("conversationAdded", Xe), Ft.abrupt("return", Xe);
                case 19:
                case "end":
                  return Ft.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "fetchConversations",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this, v, g, w, R, me, ge, Me;
            return $.default.wrap(function(St) {
              for (; ; ) switch (St.prev = St.next) {
                case 0:
                  return St.prev = 0, St.next = 3, this._getMap();
                case 3:
                  return v = St.sent, v.on(se.SyncMap.itemAdded, function(Xe) {
                    et.debug("itemAdded: ".concat(Xe.item.key)), d._upsertConversation("sync", Xe.item.key, Xe.item.data);
                  }), v.on(se.SyncMap.itemRemoved, function(Xe) {
                    et.debug("itemRemoved: ".concat(Xe.key));
                    var Nt = Xe.key;
                    d.myConversationsFetched || d.tombstones.add(Nt);
                    var Ft = d.conversations.get(Nt);
                    Ft && (Ft.status === "joined" && (Ft._setStatus("notParticipating", "sync"), d.emit("conversationLeft", Ft)), d.conversations.delete(Nt), d.emit("conversationRemoved", Ft), Ft.emit("removed", Ft));
                  }), v.on(se.SyncMap.itemUpdated, function(Xe) {
                    et.debug("itemUpdated: ".concat(Xe.item.key)), d._upsertConversation("sync", Xe.item.key, Xe.item.data);
                  }), St.next = 9, this._fetchMyConversations();
                case 9:
                  g = St.sent, w = [], R = we(g);
                  try {
                    for (R.s(); !(me = R.n()).done; )
                      ge = me.value, w.push(this._upsertConversation("rest", ge.channel_sid, ge));
                  } catch (Xe) {
                    R.e(Xe);
                  } finally {
                    R.f();
                  }
                  return this.myConversationsRead.set(!0), St.next = 16, Promise.all(w);
                case 16:
                  return this.myConversationsFetched = !0, this.tombstones.clear(), et.debug("The conversations list has been successfully fetched"), St.abrupt("return", this);
                case 22:
                  throw St.prev = 22, St.t0 = St.catch(0), Me = "Failed to fetch the conversations list", this.services.syncClient.connectionState !== "disconnected" && et.error(Me, St.t0), et.debug("ERROR: ".concat(Me), St.t0), St.t0;
                case 28:
                case "end":
                  return St.stop();
              }
            }, I, this, [[0, 22]]);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getConversations",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this, v, g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  return R.next = 2, this._getMap();
                case 2:
                  return v = R.sent, R.next = 5, v.getItems();
                case 5:
                  return g = R.sent, R.abrupt("return", this._wrapPaginator(g, function(me) {
                    return Promise.all(me.map(function(ge) {
                      return d._upsertConversation("sync", ge.key, ge.data);
                    }));
                  }));
                case 7:
                case "end":
                  return R.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getConversation",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v = this, g, w, R;
            return $.default.wrap(function(ge) {
              for (; ; ) switch (ge.prev = ge.next) {
                case 0:
                  return ge.next = 2, this._getMap();
                case 2:
                  return g = ge.sent, ge.next = 5, g.getItems({ key: d });
                case 5:
                  return w = ge.sent, R = w.items.map(function(Me) {
                    return v._upsertConversation("sync", Me.key, Me.data);
                  }), ge.abrupt("return", R.length > 0 ? R[0] : null);
                case 8:
                case "end":
                  return ge.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getConversationByUniqueName",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v, g, w, R, me;
            return $.default.wrap(function(Me) {
              for (; ; ) switch (Me.prev = Me.next) {
                case 0:
                  return v = new Fe(this.configuration.links.myConversations).path(d).build(), Me.next = 3, this.services.network.get(v);
                case 3:
                  return g = Me.sent, w = g.body, R = w.conversation_sid, me = {
                    entityName: null,
                    lastConsumedMessageIndex: w.last_read_message_index,
                    status: w?.status || "unknown",
                    friendlyName: w.friendly_name,
                    dateUpdated: w.date_updated,
                    dateCreated: w.date_created,
                    uniqueName: w.unique_name,
                    createdBy: w.created_by,
                    attributes: w.attributes,
                    channel: w.sync_objects.conversation,
                    roster: w.sync_objects.participants,
                    messages: w.sync_objects.messages,
                    notificationLevel: w?.notification_level,
                    sid: R
                  }, Me.abrupt("return", R ? this._upsertConversation("sync", R, me) : null);
                case 8:
                case "end":
                  return Me.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "peekConversation",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v, g, w, R;
            return $.default.wrap(function(ge) {
              for (; ; ) switch (ge.prev = ge.next) {
                case 0:
                  return v = new Fe(this.configuration.links.conversations).path(d).build(), ge.next = 3, this.services.network.get(v);
                case 3:
                  return g = ge.sent, w = g.body, R = {
                    entityName: null,
                    status: w?.status || "unknown",
                    friendlyName: w.friendly_name,
                    dateUpdated: w.date_updated,
                    dateCreated: w.date_created,
                    uniqueName: w.unique_name,
                    createdBy: w.created_by,
                    attributes: w.attributes,
                    channel: w.sync_objects.conversation || "".concat(d, ".channel"),
                    roster: w.sync_objects.participants,
                    messages: w.sync_objects.messages,
                    notificationLevel: w?.notification_level,
                    sid: d
                  }, ge.abrupt("return", this._upsertConversation("sync", d, R));
                case 7:
                case "end":
                  return ge.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_getMap",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this.services.syncClient.map({
                    id: this.configuration.myConversations,
                    mode: "open_existing"
                  });
                case 2:
                  return v.abrupt("return", v.sent);
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_wrapPaginator",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g = this, w;
            return $.default.wrap(function(me) {
              for (; ; ) switch (me.prev = me.next) {
                case 0:
                  return me.next = 2, v(d.items);
                case 2:
                  return w = me.sent, me.abrupt("return", {
                    items: w.filter(function(ge) {
                      return ge !== null;
                    }),
                    hasNextPage: d.hasNextPage,
                    hasPrevPage: d.hasPrevPage,
                    nextPage: function() {
                      return d.nextPage().then(function(Me) {
                        return g._wrapPaginator(Me, v);
                      });
                    },
                    prevPage: function() {
                      return d.prevPage().then(function(Me) {
                        return g._wrapPaginator(Me, v);
                      });
                    }
                  });
                case 4:
                case "end":
                  return me.stop();
              }
            }, I);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_updateConversation",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v, g) {
            var w, R, me;
            return $.default.wrap(function(Me) {
              for (; ; ) switch (Me.prev = Me.next) {
                case 0:
                  if (w = v._statusSource !== void 0 && d !== v._statusSource, R = d !== "rest" || v._statusSource === "sync", !(w && R && d !== "sync")) {
                    Me.next = 5;
                    break;
                  }
                  return et.trace("upsertConversation: conversation is known from sync and came from REST, ignoring", {
                    sid: v.sid,
                    data: g.status,
                    conversation: v.status
                  }), Me.abrupt("return");
                case 5:
                  if (!(g.status === "joined" && v.status !== "joined")) {
                    Me.next = 15;
                    break;
                  }
                  return v._setStatus("joined", d), me = {}, typeof g.notificationLevel < "u" && (me.notificationLevel = g.notificationLevel), typeof g.lastConsumedMessageIndex < "u" && (me.lastConsumedMessageIndex = g.lastConsumedMessageIndex), We(me, {}) || v._update(me), Me.next = 13, v._subscribe();
                case 13:
                  return this.emit("conversationJoined", v), Me.abrupt("return");
                case 15:
                  if (!(g.status === "notParticipating" && v.status === "joined")) {
                    Me.next = 22;
                    break;
                  }
                  return v._setStatus("notParticipating", d), v._update(g), Me.next = 20, v._subscribe();
                case 20:
                  return this.emit("conversationLeft", v), Me.abrupt("return");
                case 22:
                  if (g.status !== "notParticipating") {
                    Me.next = 26;
                    break;
                  }
                  return Me.next = 25, v._subscribe();
                case 25:
                  return Me.abrupt("return");
                case 26:
                  v._update(g);
                case 27:
                case "end":
                  return Me.stop();
              }
            }, I, this);
          }));
          function u(I, d, v) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_upsertConversation",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v, g) {
            var w, R, me, ge;
            return $.default.wrap(function(Ue) {
              for (; ; ) switch (Ue.prev = Ue.next) {
                case 0:
                  if (et.trace("upsertConversation called for ".concat(v), g), w = this.conversations.get(v), !w) {
                    Ue.next = 9;
                    break;
                  }
                  return et.trace("upsertConversation: the conversation ".concat(w.sid, " is known;") + "its status is known from the source ".concat(w._statusSource, " ") + "and the update came from the source ".concat(d), w), Ue.next = 6, this._updateConversation(d, w, g);
                case 6:
                  return Ue.next = 8, w._subscribe();
                case 8:
                  return Ue.abrupt("return", w);
                case 9:
                  if (!(d === "rest" && this.tombstones.has(v))) {
                    Ue.next = 12;
                    break;
                  }
                  return et.trace("upsertChannel: the conversation is deleted but reappeared again from REST, ignoring", v), Ue.abrupt("return", null);
                case 12:
                  return et.trace("upsertConversation: creating a local conversation object with sid " + v, g), R = "".concat(this.configuration.links.conversations, "/").concat(v), me = {
                    self: R,
                    messages: "".concat(R, "/Messages"),
                    participants: "".concat(R, "/Participants")
                  }, ge = new Rt(g, v, me, this.configuration, this.services), this.conversations.set(v, ge), Ue.prev = 17, Ue.next = 20, ge._subscribe();
                case 20:
                  if (g.status !== "joined") {
                    Ue.next = 23;
                    break;
                  }
                  return Ue.next = 23, ge._fetchStreams();
                case 23:
                  Ue.next = 32;
                  break;
                case 25:
                  if (Ue.prev = 25, Ue.t0 = Ue.catch(17), Ue.t0.name === "SyncError") {
                    Ue.next = 29;
                    break;
                  }
                  throw Ue.t0;
                case 29:
                  return et.trace("upsertChannel: the conversation is missing some Sync entity(ies), ignoring", v, Ue.t0), this.conversations.delete(v), Ue.abrupt("return", null);
                case 32:
                  return this._registerForEvents(ge), this.emit("conversationAdded", ge), g.status === "joined" && (ge._setStatus("joined", d), this.emit("conversationJoined", ge)), Ue.abrupt("return", ge);
                case 36:
                case "end":
                  return Ue.stop();
              }
            }, I, this, [[17, 25]]);
          }));
          function u(I, d, v) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_fetchMyConversations",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d, v, g, w, R, me;
            return $.default.wrap(function(Me) {
              for (; ; ) switch (Me.prev = Me.next) {
                case 0:
                  d = [], v = null;
                case 2:
                  return w = new Fe(this.configuration.links.myConversations), v && w.arg("PageToken", v), Me.next = 6, this.services.network.get(w.build());
                case 6:
                  R = Me.sent, me = (g = R.body) === null || g === void 0 ? void 0 : g.conversations.map(function(Ue) {
                    return {
                      descriptor: Ue,
                      channel_sid: Ue.conversation_sid,
                      status: Ue.status,
                      channel: Ue.sync_objects.conversation,
                      messages: Ue.sync_objects.messages,
                      roster: Ue.sync_objects.participants || "".concat(Ue.conversation_sid, ".roster"),
                      lastConsumedMessageIndex: Ue.last_read_message_index,
                      notificationLevel: Ue.notification_level
                    };
                  }), v = R.body.meta.next_token, d = [].concat(vt.default(d), vt.default(me));
                case 10:
                  if (v) {
                    Me.next = 2;
                    break;
                  }
                case 11:
                  return Me.abrupt("return", d);
                case 12:
                case "end":
                  return Me.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_onConversationRemoved",
        value: function(u) {
          var I = this.conversations.get(u);
          I && (this.conversations.delete(u), this.emit("conversationRemoved", I));
        }
      },
      {
        key: "_registerForEvents",
        value: function(u) {
          var I = this;
          u.on("removed", function() {
            return I._onConversationRemoved(u.sid);
          }), u.on("updated", function(d) {
            return I.emit("conversationUpdated", d);
          }), u.on("participantJoined", function(d) {
            return I.emit("participantJoined", d);
          }), u.on("participantLeft", function(d) {
            return I.emit("participantLeft", d);
          }), u.on("participantUpdated", function(d) {
            return I.emit("participantUpdated", d);
          }), u.on("messageAdded", function(d) {
            return I.emit("messageAdded", d);
          }), u.on("messageUpdated", function(d) {
            return I.emit("messageUpdated", d);
          }), u.on("messageRemoved", function(d) {
            return I.emit("messageRemoved", d);
          }), u.on("typingStarted", function(d) {
            return I.emit("typingStarted", d);
          }), u.on("typingEnded", function(d) {
            return I.emit("typingEnded", d);
          });
        }
      }
    ]), k;
  })(B.ReplayEventEmitter);
  function pt(M) {
    var A = yt();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function yt() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Ct = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = pt(k);
    function k(o, u, I) {
      var d;
      return Ce.default(this, k), d = A.call(this), d.configuration = u, d.services = I, d.fifoStack = [], d.myself = o, d.myself.on("updated", function(v) {
        return d.emit("userUpdated", v);
      }), d.myself.on("userSubscribed", function() {
        return d.emit("userSubscribed", d.myself);
      }), d.myself.on("userUnsubscribed", function() {
        d.emit("userUnsubscribed", d.myself), d.myself._ensureFetched();
      }), d.subscribedUsers = /* @__PURE__ */ new Map(), d;
    }
    return Ae.default(k, [
      {
        key: "handleUnsubscribeUser",
        value: function(u) {
          this.subscribedUsers.has(u.identity) && this.subscribedUsers.delete(u.identity);
          var I = 0;
          this.fifoStack.find(function(d, v) {
            return d == u.identity ? (I = v, !0) : !1;
          }) && this.fifoStack.splice(I, 1), this.emit("userUnsubscribed", u);
        }
      },
      {
        key: "handleSubscribeUser",
        value: function(u) {
          if (!this.subscribedUsers.has(u.identity)) {
            if (this.fifoStack.length >= this.configuration.userInfosToSubscribe) {
              var I, d, v = this.fifoStack.shift();
              (I = this.subscribedUsers) === null || I === void 0 || (d = I.get(v)) == null || d.unsubscribe();
            }
            this.fifoStack.push(u.identity), this.subscribedUsers.set(u.identity, u), this.emit("userSubscribed", u);
          }
        }
      },
      {
        key: "getUser",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g, w = this, R, me;
            return $.default.wrap(function(Me) {
              for (; ; ) switch (Me.prev = Me.next) {
                case 0:
                  return Me.next = 2, this.myself._ensureFetched();
                case 2:
                  if (d != this.myself.identity) {
                    Me.next = 4;
                    break;
                  }
                  return Me.abrupt("return", this.myself);
                case 4:
                  if (R = this.subscribedUsers.get(d), !R) {
                    Me.next = 7;
                    break;
                  }
                  return Me.abrupt("return", R);
                case 7:
                  if (!((g = v) !== null && g !== void 0)) {
                    Me.next = 11;
                    break;
                  }
                  Me.next = 14;
                  break;
                case 11:
                  return Me.next = 13, this.getSyncUniqueName(d);
                case 13:
                  v = Me.sent;
                case 14:
                  return me = new ae(d, v, this.configuration, this.services), me.on("updated", function(Ue) {
                    return w.emit("userUpdated", Ue);
                  }), me.on("userSubscribed", function() {
                    return w.handleSubscribeUser(me);
                  }), me.on("userUnsubscribed", function() {
                    return w.handleUnsubscribeUser(me);
                  }), Me.next = 20, me._ensureFetched();
                case 20:
                  return Me.abrupt("return", me);
                case 21:
                case "end":
                  return Me.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getSubscribedUsers",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d;
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this.myself._ensureFetched();
                case 2:
                  return d = [this.myself], this.subscribedUsers.forEach(function(w) {
                    return d.push(w);
                  }), g.abrupt("return", d);
                case 5:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getSyncUniqueName",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v, g, w, R;
            return $.default.wrap(function(ge) {
              for (; ; ) switch (ge.prev = ge.next) {
                case 0:
                  return w = new Fe(this.configuration.links.users).path(d).build(), ge.next = 3, this.services.network.get(w);
                case 3:
                  return R = ge.sent, ge.abrupt("return", (v = (g = R.body) === null || g === void 0 ? void 0 : g.sync_objects.user_info_map) !== null && v !== void 0 ? v : "");
                case 5:
                case "end":
                  return ge.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      }
    ]), k;
  })(B.ReplayEventEmitter), vr = De.scope("TypingIndicator"), wn = /* @__PURE__ */ (function() {
    function M(A, k, o) {
      Ce.default(this, M), this.configuration = k, this.services = o, this.getConversation = A, this.serviceTypingTimeout = null, this.sentUpdates = /* @__PURE__ */ new Map();
    }
    return Ae.default(M, [
      {
        key: "typingTimeout",
        get: function() {
          return this.configuration.typingIndicatorTimeoutOverride || this.serviceTypingTimeout || this.configuration.typingIndicatorTimeoutDefault;
        }
      },
      {
        key: "initialize",
        value: function() {
          var k = this;
          this.services.notificationClient.on("message", /* @__PURE__ */ (function() {
            var o = L.default(/* @__PURE__ */ $.default.mark(function u(I, d) {
              return $.default.wrap(function(g) {
                for (; ; ) switch (g.prev = g.next) {
                  case 0:
                    if (I !== Qe.TYPING_INDICATOR) {
                      g.next = 3;
                      break;
                    }
                    return g.next = 3, k._handleRemoteTyping(d);
                  case 3:
                  case "end":
                    return g.stop();
                }
              }, u);
            }));
            return function(u, I) {
              return o.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "_handleRemoteTyping",
        value: (function() {
          var A = L.default(/* @__PURE__ */ $.default.mark(function o(u) {
            var I = this;
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  vr.trace("Got new typing indicator ", u), this.getConversation(u.channel_sid).then(function(g) {
                    g && g._participants.forEach(function(w) {
                      if (!(w.identity !== u.identity && w.type !== "apple")) {
                        var R = I.configuration.typingIndicatorTimeoutOverride ? I.configuration.typingIndicatorTimeoutOverride + 1e3 : u.typing_timeout * 1e3;
                        w._startTyping(R);
                      }
                    });
                  }).catch(function(g) {
                    throw vr.error(g), g;
                  });
                case 2:
                case "end":
                  return v.stop();
              }
            }, o, this);
          }));
          function k(o) {
            return A.apply(this, arguments);
          }
          return k;
        })()
      },
      {
        key: "send",
        value: function(k) {
          var o = this.sentUpdates.get(k);
          return o && o > Date.now() - this.typingTimeout ? Promise.resolve() : (this.sentUpdates.set(k, Date.now()), this._send(k));
        }
      },
      {
        key: "_send",
        value: function(k) {
          var o = this;
          vr.trace("Sending typing indicator");
          var u = this.configuration.links.typing, I = { "Content-Type": "application/x-www-form-urlencoded" }, d = "ChannelSid=".concat(k);
          return this.services.twilsockClient.post(u, I, d, this.configuration.productId).then(function(v) {
            v.body.hasOwnProperty("typing_timeout") && (o.serviceTypingTimeout = v.body.typing_timeout * 1e3);
          }).catch(function(v) {
            throw vr.error("Failed to send typing indicator:", v), v;
          });
        }
      }
    ]), M;
  })(), gr = /* @__PURE__ */ Ae.default(function M(A) {
    Ce.default(this, M), this.title = A.title || null, this.body = A.body || null, this.sound = A.sound || null, this.badge = A.badge || null, this.action = A.action || null, this.type = A.type || null, this.data = A.data || {};
  }), Pr = "3.0.1", Sa = function() {
    return crypto.randomUUID();
  };
  function ka(M, A) {
    var k = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(M);
      A && (o = o.filter(function(u) {
        return Object.getOwnPropertyDescriptor(M, u).enumerable;
      })), k.push.apply(k, o);
    }
    return k;
  }
  function Yn(M) {
    for (var A = 1; A < arguments.length; A++) {
      var k = arguments[A] != null ? arguments[A] : {};
      A % 2 ? ka(Object(k), !0).forEach(function(o) {
        oe.default(M, o, k[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(k)) : ka(Object(k)).forEach(function(o) {
        Object.defineProperty(M, o, Object.getOwnPropertyDescriptor(k, o));
      });
    }
    return M;
  }
  function Ln(M) {
    var A = Ia();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function Ia() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var Ta = Sa, Qn = function(A) {
    return A.replace(/(^\/+|\/+$)/g, "");
  }, Ra = function(A) {
    return A.status.code === 202;
  }, mr = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = Ln(k);
    function k(o) {
      return Ce.default(this, k), A.call(this, o);
    }
    return Ae.default(k);
  })(/* @__PURE__ */ z.default(Error)), x = /* @__PURE__ */ (function() {
    function M(A, k, o) {
      Ce.default(this, M), this._serviceUrl = A, this._services = k, this._productId = o;
    }
    return Ae.default(M, [
      {
        key: "_preProcessUrl",
        value: function(k) {
          var o = Qn(k);
          return /^https?:\/\//.test(k) ? o : "".concat(Qn(this._serviceUrl), "/").concat(o);
        }
      },
      {
        key: "_makeRequest",
        value: (function() {
          var A = L.default(/* @__PURE__ */ $.default.mark(function o(u, I, d, v) {
            var g, w, R, me;
            return $.default.wrap(function(Me) {
              for (; ; ) switch (Me.prev = Me.next) {
                case 0:
                  g = this._preProcessUrl(I), w = Yn({ "Content-Type": "application/json; charset=utf-8" }, v || {}), Me.t0 = u, Me.next = Me.t0 === "get" ? 5 : Me.t0 === "post" ? 11 : Me.t0 === "delete" ? 15 : 19;
                  break;
                case 5:
                  return me = g, d && (me += "?" + Object.entries(d).map(function(Ue) {
                    return Ue.map(encodeURIComponent).join("=");
                  }).join("&")), Me.next = 9, this._services.transport.get(me, w, this._productId);
                case 9:
                  return R = Me.sent, Me.abrupt("break", 19);
                case 11:
                  return Me.next = 13, this._services.transport.post(g, w, JSON.stringify(d), this._productId);
                case 13:
                  return R = Me.sent, Me.abrupt("break", 19);
                case 15:
                  return Me.next = 17, this._services.transport.delete(g, w, {}, this._productId);
                case 17:
                  return R = Me.sent, Me.abrupt("break", 19);
                case 19:
                  if (!(R.status.code < 200 || R.status.code >= 300)) {
                    Me.next = 21;
                    break;
                  }
                  throw new Error("Request responded with a non-success code ".concat(R.status.code));
                case 21:
                  return Me.abrupt("return", R);
                case 22:
                case "end":
                  return Me.stop();
              }
            }, o, this);
          }));
          function k(o, u, I, d) {
            return A.apply(this, arguments);
          }
          return k;
        })()
      },
      {
        key: "fetchResource",
        value: (function() {
          var A = L.default(/* @__PURE__ */ $.default.mark(function o(u, I) {
            var d = this, v, g, w;
            return $.default.wrap(function(me) {
              for (; ; ) switch (me.prev = me.next) {
                case 0:
                  return v = 6, g = new Y.AsyncRetrier({
                    min: 50,
                    max: 1600,
                    maxAttemptsCount: v
                  }), me.prev = 2, me.next = 5, g.run(/* @__PURE__ */ L.default(/* @__PURE__ */ $.default.mark(function ge() {
                    var Me, Ue, St;
                    return $.default.wrap(function(Nt) {
                      for (; ; ) switch (Nt.prev = Nt.next) {
                        case 0:
                          return Nt.prev = 0, Nt.next = 3, d._makeRequest("get", u, I);
                        case 3:
                          return Me = Nt.sent, Nt.abrupt("return", {
                            type: "success",
                            data: Me.body
                          });
                        case 7:
                          if (Nt.prev = 7, Nt.t0 = Nt.catch(0), !((Nt.t0 === null || Nt.t0 === void 0 || (Ue = Nt.t0.body) === null || Ue === void 0 ? void 0 : Ue.status) === 404 && (Nt.t0 === null || Nt.t0 === void 0 || (St = Nt.t0.body) === null || St === void 0 ? void 0 : St.code) === 50530)) {
                            Nt.next = 11;
                            break;
                          }
                          return Nt.abrupt("return", { type: "noMetadata" });
                        case 11:
                          throw Nt.t0;
                        case 12:
                        case "end":
                          return Nt.stop();
                      }
                    }, ge, null, [[0, 7]]);
                  })));
                case 5:
                  w = me.sent, me.next = 11;
                  break;
                case 8:
                  throw me.prev = 8, me.t0 = me.catch(2), new Error('Fetch resource from "'.concat(u, '" failed.'));
                case 11:
                  if (w.type !== "noMetadata") {
                    me.next = 13;
                    break;
                  }
                  throw new mr("No metadata found.");
                case 13:
                  return me.abrupt("return", w.data);
                case 14:
                case "end":
                  return me.stop();
              }
            }, o, null, [[2, 8]]);
          }));
          function k(o, u) {
            return A.apply(this, arguments);
          }
          return k;
        })()
      },
      {
        key: "mutateResource",
        value: (function() {
          var A = L.default(/* @__PURE__ */ $.default.mark(function o(u, I, d) {
            var v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._makeRequest(u, I, d, { "X-Twilio-Mutation-Id": Ta() });
                case 2:
                  if (v = w.sent, !Ra(v)) {
                    w.next = 7;
                    break;
                  }
                  return w.next = 6, this.fetchResource(v.body.resource_url);
                case 6:
                  return w.abrupt("return", w.sent);
                case 7:
                  return w.abrupt("return", v.body);
                case 8:
                case "end":
                  return w.stop();
              }
            }, o, this);
          }));
          function k(o, u, I) {
            return A.apply(this, arguments);
          }
          return k;
        })()
      }
    ]), M;
  })(), W = /* @__PURE__ */ (function() {
    function M(A) {
      var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5e3;
      Ce.default(this, M), oe.default(this, "_cachedTemplates", null), this._services = A, this._pageSize = k, this._cacheTtlMs = o;
    }
    return Ae.default(M, [{
      key: "getContentTemplates",
      value: (function() {
        var A = L.default(/* @__PURE__ */ $.default.mark(function o() {
          var u = this, I, d, v, g, w, R, me;
          return $.default.wrap(function(Me) {
            for (; ; ) switch (Me.prev = Me.next) {
              case 0:
                if (this._cachedTemplates === null) {
                  Me.next = 2;
                  break;
                }
                return Me.abrupt("return", this._cachedTemplates);
              case 2:
                return Me.next = 4, this._fetchContentTemplates();
              case 4:
                I = Me.sent, d = Ie.default(I, 2), v = d[0], g = d[1], w = v;
              case 9:
                if (g === null) {
                  Me.next = 19;
                  break;
                }
                return Me.next = 12, this._fetchContentTemplates(g);
              case 12:
                R = Me.sent, me = Ie.default(R, 2), v = me[0], g = me[1], w = [].concat(vt.default(w), vt.default(v)), Me.next = 9;
                break;
              case 19:
                return this._cachedTemplates = Object.freeze(w), setTimeout(function() {
                  u._cachedTemplates = null;
                }, this._cacheTtlMs), Me.abrupt("return", w);
              case 22:
              case "end":
                return Me.stop();
            }
          }, o, this);
        }));
        function k() {
          return A.apply(this, arguments);
        }
        return k;
      })()
    }, {
      key: "_fetchContentTemplates",
      value: (function() {
        var A = L.default(/* @__PURE__ */ $.default.mark(function o(u) {
          var I, d, v;
          return $.default.wrap(function(w) {
            for (; ; ) switch (w.prev = w.next) {
              case 0:
                return I = "Client/v2/ContentTemplates", d = new Fe(I), d.arg("PageSize", this._pageSize), u !== void 0 && d.arg("PageToken", u), w.next = 6, this._services.commandExecutor.fetchResource(d.build());
              case 6:
                return v = w.sent, w.abrupt("return", [v.templates.map(function(R) {
                  return new Sr(R);
                }), v.meta.next_token]);
              case 8:
              case "end":
                return w.stop();
            }
          }, o, this);
        }));
        function k(o) {
          return A.apply(this, arguments);
        }
        return k;
      })()
    }]), M;
  })();
  function y(M, A) {
    var k = typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
    if (!k) {
      if (Array.isArray(M) || (k = a(M)) || A && M && typeof M.length == "number") {
        k && (M = k);
        var o = 0, u = function() {
        };
        return {
          s: u,
          n: function() {
            return o >= M.length ? { done: !0 } : {
              done: !1,
              value: M[o++]
            };
          },
          e: function(w) {
            throw w;
          },
          f: u
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, d = !1, v;
    return {
      s: function() {
        k = k.call(M);
      },
      n: function() {
        var w = k.next();
        return I = w.done, w;
      },
      e: function(w) {
        d = !0, v = w;
      },
      f: function() {
        try {
          !I && k.return != null && k.return();
        } finally {
          if (d) throw v;
        }
      }
    };
  }
  function a(M, A) {
    if (M) {
      if (typeof M == "string") return t(M, A);
      var k = Object.prototype.toString.call(M).slice(8, -1);
      if (k === "Object" && M.constructor && (k = M.constructor.name), k === "Map" || k === "Set") return Array.from(M);
      if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return t(M, A);
    }
  }
  function t(M, A) {
    (A == null || A > M.length) && (A = M.length);
    for (var k = 0, o = new Array(A); k < A; k++) o[k] = M[k];
    return o;
  }
  var p = /* @__PURE__ */ (function(M) {
    function A() {
      var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (Ce.default(this, A), !(k.maxSize && k.maxSize > 0)) throw new TypeError("`maxSize` must be a number greater than 0");
      this.maxSize = k.maxSize, this.onEviction = k.onEviction, this.cache = /* @__PURE__ */ new Map(), this.oldCache = /* @__PURE__ */ new Map(), this._size = 0;
    }
    return Ae.default(A, [
      {
        key: "_set",
        value: function(o, u) {
          if (this.cache.set(o, u), this._size++, this._size >= this.maxSize) {
            if (this._size = 0, typeof this.onEviction == "function") {
              var I = y(this.oldCache.entries()), d;
              try {
                for (I.s(); !(d = I.n()).done; ) {
                  var v = Ie.default(d.value, 2), g = v[0], w = v[1];
                  this.onEviction(g, w);
                }
              } catch (R) {
                I.e(R);
              } finally {
                I.f();
              }
            }
            this.oldCache = this.cache, this.cache = /* @__PURE__ */ new Map();
          }
        }
      },
      {
        key: "get",
        value: function(o) {
          if (this.cache.has(o)) return this.cache.get(o);
          if (this.oldCache.has(o)) {
            var u = this.oldCache.get(o);
            return this.oldCache.delete(o), this._set(o, u), u;
          }
        }
      },
      {
        key: "set",
        value: function(o, u) {
          return this.cache.has(o) ? this.cache.set(o, u) : this._set(o, u), this;
        }
      },
      {
        key: "has",
        value: function(o) {
          return this.cache.has(o) || this.oldCache.has(o);
        }
      },
      {
        key: "peek",
        value: function(o) {
          if (this.cache.has(o)) return this.cache.get(o);
          if (this.oldCache.has(o)) return this.oldCache.get(o);
        }
      },
      {
        key: "delete",
        value: function(o) {
          var u = this.cache.delete(o);
          return u && this._size--, this.oldCache.delete(o) || u;
        }
      },
      {
        key: "clear",
        value: function() {
          this.cache.clear(), this.oldCache.clear(), this._size = 0;
        }
      },
      {
        key: "keys",
        value: /* @__PURE__ */ $.default.mark(function k() {
          var o, u, I, d;
          return $.default.wrap(function(g) {
            for (; ; ) switch (g.prev = g.next) {
              case 0:
                o = y(this), g.prev = 1, o.s();
              case 3:
                if ((u = o.n()).done) {
                  g.next = 9;
                  break;
                }
                return I = Ie.default(u.value, 1), d = I[0], g.next = 7, d;
              case 7:
                g.next = 3;
                break;
              case 9:
                g.next = 14;
                break;
              case 11:
                g.prev = 11, g.t0 = g.catch(1), o.e(g.t0);
              case 14:
                return g.prev = 14, o.f(), g.finish(14);
              case 17:
              case "end":
                return g.stop();
            }
          }, k, this, [[
            1,
            11,
            14,
            17
          ]]);
        })
      },
      {
        key: "values",
        value: /* @__PURE__ */ $.default.mark(function k() {
          var o, u, I, d;
          return $.default.wrap(function(g) {
            for (; ; ) switch (g.prev = g.next) {
              case 0:
                o = y(this), g.prev = 1, o.s();
              case 3:
                if ((u = o.n()).done) {
                  g.next = 9;
                  break;
                }
                return I = Ie.default(u.value, 2), d = I[1], g.next = 7, d;
              case 7:
                g.next = 3;
                break;
              case 9:
                g.next = 14;
                break;
              case 11:
                g.prev = 11, g.t0 = g.catch(1), o.e(g.t0);
              case 14:
                return g.prev = 14, o.f(), g.finish(14);
              case 17:
              case "end":
                return g.stop();
            }
          }, k, this, [[
            1,
            11,
            14,
            17
          ]]);
        })
      },
      {
        key: M,
        value: /* @__PURE__ */ $.default.mark(function k() {
          var o, u, I, d, v, g, w, R;
          return $.default.wrap(function(ge) {
            for (; ; ) switch (ge.prev = ge.next) {
              case 0:
                o = y(this.cache), ge.prev = 1, o.s();
              case 3:
                if ((u = o.n()).done) {
                  ge.next = 9;
                  break;
                }
                return I = u.value, ge.next = 7, I;
              case 7:
                ge.next = 3;
                break;
              case 9:
                ge.next = 14;
                break;
              case 11:
                ge.prev = 11, ge.t0 = ge.catch(1), o.e(ge.t0);
              case 14:
                return ge.prev = 14, o.f(), ge.finish(14);
              case 17:
                d = y(this.oldCache), ge.prev = 18, d.s();
              case 20:
                if ((v = d.n()).done) {
                  ge.next = 28;
                  break;
                }
                if (g = v.value, w = Ie.default(g, 1), R = w[0], this.cache.has(R)) {
                  ge.next = 26;
                  break;
                }
                return ge.next = 26, g;
              case 26:
                ge.next = 20;
                break;
              case 28:
                ge.next = 33;
                break;
              case 30:
                ge.prev = 30, ge.t1 = ge.catch(18), d.e(ge.t1);
              case 33:
                return ge.prev = 33, d.f(), ge.finish(33);
              case 36:
              case "end":
                return ge.stop();
            }
          }, k, this, [[
            1,
            11,
            14,
            17
          ], [
            18,
            30,
            33,
            36
          ]]);
        })
      },
      {
        key: "size",
        get: function() {
          var o = 0, u = y(this.oldCache.keys()), I;
          try {
            for (u.s(); !(I = u.n()).done; ) {
              var d = I.value;
              this.cache.has(d) || o++;
            }
          } catch (v) {
            u.e(v);
          } finally {
            u.f();
          }
          return Math.min(this._size + o, this.maxSize);
        }
      }
    ]), A;
  })(Symbol.iterator), f = /* @__PURE__ */ Ae.default(function M(A, k) {
    Ce.default(this, M), this.type = A, this.data = k, Object.freeze(k);
  }), C = /* @__PURE__ */ (function() {
    function M(A, k) {
      Ce.default(this, M), this._services = A, this._configuration = k, this._cache = new p({ maxSize: k.channelMetadataCacheCapacity });
    }
    return Ae.default(M, [{
      key: "getChannelMetadata",
      value: (function() {
        var A = L.default(/* @__PURE__ */ $.default.mark(function o(u, I) {
          var d, v, g, w, R;
          return $.default.wrap(function(ge) {
            for (; ; ) switch (ge.prev = ge.next) {
              case 0:
                if (d = "".concat(u, ",").concat(I), v = this._cache.get(d), !v) {
                  ge.next = 4;
                  break;
                }
                return ge.abrupt("return", v.item);
              case 4:
                return g = "".concat(this._configuration.links.conversations, "/").concat(u, "/Messages/").concat(I, "/ChannelMetadata"), ge.prev = 5, ge.next = 8, this._services.commandExecutor.fetchResource(g);
              case 8:
                w = ge.sent, ge.next = 17;
                break;
              case 11:
                if (ge.prev = 11, ge.t0 = ge.catch(5), !(ge.t0 instanceof mr)) {
                  ge.next = 16;
                  break;
                }
                return this._cache.set(d, { item: null }), ge.abrupt("return", null);
              case 16:
                throw new Error(ge.t0);
              case 17:
                return R = new f(w.type, w.data), this._cache.set(d, { item: R }), ge.abrupt("return", R);
              case 20:
              case "end":
                return ge.stop();
            }
          }, o, this, [[5, 11]]);
        }));
        function k(o, u) {
          return A.apply(this, arguments);
        }
        return k;
      })()
    }]), M;
  })();
  function _(M, A) {
    var k = typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
    if (!k) {
      if (Array.isArray(M) || (k = N(M)) || A && M && typeof M.length == "number") {
        k && (M = k);
        var o = 0, u = function() {
        };
        return {
          s: u,
          n: function() {
            return o >= M.length ? { done: !0 } : {
              done: !1,
              value: M[o++]
            };
          },
          e: function(w) {
            throw w;
          },
          f: u
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var I = !0, d = !1, v;
    return {
      s: function() {
        k = k.call(M);
      },
      n: function() {
        var w = k.next();
        return I = w.done, w;
      },
      e: function(w) {
        d = !0, v = w;
      },
      f: function() {
        try {
          !I && k.return != null && k.return();
        } finally {
          if (d) throw v;
        }
      }
    };
  }
  function N(M, A) {
    if (M) {
      if (typeof M == "string") return ne(M, A);
      var k = Object.prototype.toString.call(M).slice(8, -1);
      if (k === "Object" && M.constructor && (k = M.constructor.name), k === "Map" || k === "Set") return Array.from(M);
      if (k === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)) return ne(M, A);
    }
  }
  function ne(M, A) {
    (A == null || A > M.length) && (A = M.length);
    for (var k = 0, o = new Array(A); k < A; k++) o[k] = M[k];
    return o;
  }
  var Be = /* @__PURE__ */ Ae.default(function M(A) {
    Ce.default(this, M), oe.default(this, "type", "email"), this.messageSid = A.message_sid, this.level = A.level, this.name = A.name, this.address = A.address;
  }), Ge = /* @__PURE__ */ Ae.default(function M(A) {
    Ce.default(this, M), this.type = A.type, this.messageSid = A.message_sid, this.rawData = JSON.stringify(A);
  }), Le = /* @__PURE__ */ (function() {
    function M(A, k) {
      Ce.default(this, M), this._services = A, this._configuration = k, this._cache = new p({ maxSize: k.messageRecipientsCacheCapacity });
    }
    return Ae.default(M, [
      {
        key: "getRecipientsFromMessage",
        value: (function() {
          var A = L.default(/* @__PURE__ */ $.default.mark(function o(u, I) {
            var d = this, v, g, w, R, me;
            return $.default.wrap(function(Me) {
              for (; ; ) switch (Me.prev = Me.next) {
                case 0:
                  if (v = "".concat(u, ",").concat(I), g = this._cache.get(v), !g) {
                    Me.next = 4;
                    break;
                  }
                  return Me.abrupt("return", g.item);
                case 4:
                  return w = new Fe(this._configuration.links.conversations).path(u).path("MessageRecipients").arg("MessageSid", I).build(), Me.next = 7, this._services.commandExecutor.fetchResource(w);
                case 7:
                  return R = Me.sent, me = R.message_recipients.map(function(Ue) {
                    return d._wrapResponse(Ue);
                  }), me.length > 0 && this._cache.set(v, { item: me }), Me.abrupt("return", me);
                case 11:
                case "end":
                  return Me.stop();
              }
            }, o, this);
          }));
          function k(o, u) {
            return A.apply(this, arguments);
          }
          return k;
        })()
      },
      {
        key: "getRecipientsFromConversation",
        value: (function() {
          var A = L.default(/* @__PURE__ */ $.default.mark(function o(u, I) {
            var d, v, g = this, w, R, me, ge, Me, Ue, St, Xe, Nt, Ft;
            return $.default.wrap(function(Ht) {
              for (; ; ) switch (Ht.prev = Ht.next) {
                case 0:
                  return w = new Fe(this._configuration.links.conversations).path(u).path("MessageRecipients").arg("PageToken", (d = I?.pageToken) !== null && d !== void 0 ? d : void 0).arg("PageSize", (v = I?.pageSize) !== null && v !== void 0 ? v : void 0).build(), Ht.next = 3, this._services.commandExecutor.fetchResource(w);
                case 3:
                  R = Ht.sent, me = R.message_recipients.map(function(jt) {
                    return g._wrapResponse(jt);
                  }), ge = _(me);
                  try {
                    for (ge.s(); !(Me = ge.n()).done; )
                      Xe = Me.value, Nt = "".concat(u, ",").concat(Xe.messageSid), Ft = (Ue = (St = this._cache.get(Nt)) === null || St === void 0 ? void 0 : St.item) !== null && Ue !== void 0 ? Ue : [], this._cache.set(Nt, { item: [].concat(vt.default(Ft), [Xe]) });
                  } catch (jt) {
                    ge.e(jt);
                  } finally {
                    ge.f();
                  }
                  return Ht.abrupt("return", new jr(me, function(jt, Dr) {
                    return g.getRecipientsFromConversation(u, {
                      pageToken: jt,
                      pageSize: Dr
                    });
                  }, R.meta.previous_token, R.meta.next_token));
                case 8:
                case "end":
                  return Ht.stop();
              }
            }, o, this);
          }));
          function k(o, u) {
            return A.apply(this, arguments);
          }
          return k;
        })()
      },
      {
        key: "_wrapResponse",
        value: function(k) {
          return k.type === "email" ? new Be(k) : new Ge(k);
        }
      }
    ]), M;
  })(), st;
  function wt(M, A) {
    var k = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(M);
      A && (o = o.filter(function(u) {
        return Object.getOwnPropertyDescriptor(M, u).enumerable;
      })), k.push.apply(k, o);
    }
    return k;
  }
  function bt(M) {
    for (var A = 1; A < arguments.length; A++) {
      var k = arguments[A] != null ? arguments[A] : {};
      A % 2 ? wt(Object(k), !0).forEach(function(o) {
        oe.default(M, o, k[o]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(k)) : wt(Object(k)).forEach(function(o) {
        Object.defineProperty(M, o, Object.getOwnPropertyDescriptor(k, o));
      });
    }
    return M;
  }
  function Bt(M) {
    var A = pr();
    return function() {
      var o = P.default(M), u;
      if (A) {
        var I = P.default(this).constructor;
        u = Reflect.construct(o, arguments, I);
      } else u = o.apply(this, arguments);
      return fe.default(this, u);
    };
  }
  function pr() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }
  var xt, er = /* @__PURE__ */ Ae.default(function M() {
    Ce.default(this, M);
  });
  c.Client = xt = (st = /* @__PURE__ */ (function(M) {
    Re.default(k, M);
    var A = Bt(k);
    function k(o) {
      var u, I, d, v, g, w, R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Ce.default(this, k), w = A.call(this), oe.default(le.default(w), "version", Pr), oe.default(le.default(w), "connectionState", "unknown"), oe.default(le.default(w), "parsePushNotification", xt.parsePushNotification), w._fpaToken = o ?? "", w._options = R ?? {}, !w._options.disableDeepClone) {
        var me = bt(bt({}, w._options), {}, {
          transport: void 0,
          twilsockClient: void 0
        });
        me = de(me), me.transport = w._options.transport, me.twilsockClient = w._options.twilsockClient, w._options = me;
      }
      w._options.logLevel = (u = w._options.logLevel) !== null && u !== void 0 ? u : "silent", xt._logger.setLevel(w._options.logLevel);
      var ge = w._options.productId = "ip_messaging";
      if (w._options.clientMetadata = w._options.clientMetadata || {}, w._options.clientMetadata.hasOwnProperty("type") || (w._options.clientMetadata.type = "conversations"), w._options.clientMetadata.hasOwnProperty("sdk") || (w._options.clientMetadata.sdk = "JS", w._options.clientMetadata.sdkv = Pr), w._options.Sync = w._options.Sync || {}, typeof w._options.Sync.enableSessionStorage > "u" && (w._options.Sync.enableSessionStorage = !0), w._options.region && (w._options.Sync.region = w._options.region), !o) throw new Error("A valid Twilio token should be provided");
      w._services = new er(), w._myself = new ae("", "", null, w._services);
      var Me = !w._options.twilsockClient;
      if (!w._options.initRegistrations) {
        var Ue = new ue.InitRegistration(ge);
        xt.populateInitRegistrations(Ue), w._options.initRegistrations = [Ue];
      }
      w._services.twilsockClient = w._options.twilsockClient = (I = w._options.twilsockClient) !== null && I !== void 0 ? I : new ue.TwilsockClient(o, ge, w._options), w._services.twilsockClient.on(xt.tokenAboutToExpire, function() {
        return w.emit(xt.tokenAboutToExpire);
      }), w._services.twilsockClient.on(xt.tokenExpired, function() {
        return w.emit(xt.tokenExpired);
      }), w._services.twilsockClient.on(xt.connectionError, function(Ht) {
        return w.emit(xt.connectionError, Ht);
      }), w._services.twilsockClient.on("stateChanged", function(Ht) {
        xt._logger.debug("Handling stateChanged for ConversationsClient: new state ".concat(Ht)), Ht !== w.connectionState && (w.connectionState = Ht, w.emit(xt.connectionStateChanged, w.connectionState));
      }), w._services.transport = w._options.transport = (d = w._options.transport) !== null && d !== void 0 ? d : w._options.twilsockClient, w._services.notificationClient = w._options.notificationsClient = (v = w._options.notificationsClient) !== null && v !== void 0 ? v : new re.Notifications(o, w._options), w._services.syncClient = w._options.syncClient = (g = w._options.syncClient) !== null && g !== void 0 ? g : new se.SyncClient(o, w._options);
      var St = R?.Chat || R?.IPMessaging || R || {}, Xe = St.region || R?.region, Nt = St.apiUri || St.typingUri || "https://aim.".concat(Xe || "us1", ".twilio.com");
      w._services.commandExecutor = new x(Nt, { transport: w._options.transport }, ge), w._services.contentClient = new W(w._services);
      var Ft = function(jt) {
        w._rejectEnsureReady(jt), w.emit(xt.stateChanged, "failed"), w.emit(xt.initFailed, { error: jt });
      }, or = function() {
        Ft({
          terminal: !0,
          message: "Twilsock has disconnected."
        }), w._initializeEnsureReady(R?.throwErrorsAlways || !1);
      };
      return w._services.twilsockClient.once("connectionError", Ft), w._services.twilsockClient.once("disconnected", or), w._services.twilsockClient.once("connected", /* @__PURE__ */ L.default(/* @__PURE__ */ $.default.mark(function Ht() {
        var jt, Dr;
        return $.default.wrap(function(Ot) {
          for (; ; ) switch (Ot.prev = Ot.next) {
            case 0:
              return xt._logger.debug("ConversationsClient started INITIALIZING"), w._services.twilsockClient.off("connectionError", Ft), w._services.twilsockClient.off("disconnected", or), Ot.prev = 3, jt = "conversations.client.startup", w._services.twilsockClient.addPartialTelemetryEvent(new ue.TelemetryEventDescription(jt, "Conversations client startup", /* @__PURE__ */ new Date()), jt, ue.TelemetryPoint.Start), Ot.next = 8, w._initialize();
            case 8:
              w._services.twilsockClient.addPartialTelemetryEvent(new ue.TelemetryEventDescription("", "", /* @__PURE__ */ new Date()), jt, ue.TelemetryPoint.End), Ot.next = 17;
              break;
            case 11:
              Ot.prev = 11, Ot.t0 = Ot.catch(3), Dr = {
                terminal: !0,
                message: Ot.t0.message
              }, w._rejectEnsureReady(Dr), w.emit(xt.stateChanged, "failed"), w.emit(xt.initFailed, { error: Dr });
            case 17:
            case "end":
              return Ot.stop();
          }
        }, Ht, null, [[3, 11]]);
      }))), w._initializeEnsureReady(R?.throwErrorsAlways || !1), Me && w._services.twilsockClient.connect(), w;
    }
    return Ae.default(k, [
      {
        key: "user",
        get: function() {
          return this._myself;
        }
      },
      {
        key: "reachabilityEnabled",
        get: function() {
          if (!this._configuration) throw new Error("Reachability information could not yet be accessed as the client has not yet been initialized. Subscribe to the 'stateChanged' event to properly react to the client initialization.");
          return this._configuration.reachabilityEnabled;
        }
      },
      {
        key: "token",
        get: function() {
          return this._fpaToken;
        }
      },
      {
        key: "shutdown",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._ensureReady;
                case 2:
                  return v.next = 4, this._services.twilsockClient.disconnect();
                case 4:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "updateToken",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._ensureReady;
                case 2:
                  if (xt._logger.info("updateToken"), this._fpaToken !== d) {
                    g.next = 5;
                    break;
                  }
                  return g.abrupt("return", this);
                case 5:
                  return g.next = 7, this._services.twilsockClient.updateToken(d);
                case 7:
                  return g.next = 9, this._services.notificationClient.updateToken(d);
                case 9:
                  return g.next = 11, this._services.mcsClient.updateToken(d);
                case 11:
                  return this._fpaToken = d, g.abrupt("return", this);
                case 13:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getConversationBySid",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._ensureReady;
                case 2:
                  return w.next = 4, this._conversationsEntity.myConversationsRead.promise;
                case 4:
                  return w.next = 6, this._conversationsEntity.getConversation(d);
                case 6:
                  if (v = w.sent, v) {
                    w.next = 12;
                    break;
                  }
                  return w.next = 10, this.peekConversationBySid(d);
                case 10:
                  v = w.sent, v && U.deprecationWarning("The method getConversationBySid is deprecated to retrieve conversations you're not part of. Use peekConversationBySid instead.");
                case 12:
                  if (v) {
                    w.next = 14;
                    break;
                  }
                  throw new Error("Conversation with SID ".concat(d, " was not found."));
                case 14:
                  return w.abrupt("return", v);
                case 15:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "peekConversationBySid",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._ensureReady;
                case 2:
                  return w.next = 4, this._conversationsEntity.peekConversation(d);
                case 4:
                  if (v = w.sent, v) {
                    w.next = 7;
                    break;
                  }
                  throw new Error("Conversation with SID ".concat(d, " was not found."));
                case 7:
                  return w.abrupt("return", v);
                case 8:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getConversationByUniqueName",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            var v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._ensureReady;
                case 2:
                  return w.next = 4, this._conversationsEntity.myConversationsRead.promise;
                case 4:
                  return w.next = 6, this._conversationsEntity.getConversationByUniqueName(d);
                case 6:
                  if (v = w.sent, v) {
                    w.next = 9;
                    break;
                  }
                  throw new Error("Conversation with unique name ".concat(d, " was not found."));
                case 9:
                  return w.abrupt("return", v);
                case 10:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getSubscribedConversations",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._ensureReady;
                case 2:
                  return v.abrupt("return", this._conversationsPromise.then(function(g) {
                    return g.getConversations();
                  }));
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "createConversation",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._ensureReady;
                case 2:
                  return d = d || {}, g.abrupt("return", this._conversationsPromise.then(function(w) {
                    return w.addConversation(d);
                  }));
                case 4:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "setPushRegistrationId",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._ensureReady;
                case 2:
                  return this._subscribeToPushNotifications(d), this._services.notificationClient.setPushRegistrationId(d, v), w.next = 6, this._services.notificationClient.commitChanges();
                case 6:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "unsetPushRegistrationId",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._ensureReady;
                case 2:
                  return this._unsubscribeFromPushNotifications(d), g.next = 5, this._services.notificationClient.commitChanges();
                case 5:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "removePushRegistrations",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._services.notificationClient.removeRegistrations(d, v);
                case 2:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "handlePushNotification",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._ensureReady;
                case 2:
                  xt._logger.debug("handlePushNotification, notificationPayload=", d), this.emit("pushNotification", xt.parsePushNotification(d));
                case 4:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getUser",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d) {
            return $.default.wrap(function(g) {
              for (; ; ) switch (g.prev = g.next) {
                case 0:
                  return g.next = 2, this._ensureReady;
                case 2:
                  return g.abrupt("return", this._services.users.getUser(d));
                case 3:
                case "end":
                  return g.stop();
              }
            }, I, this);
          }));
          function u(I) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getSubscribedUsers",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._ensureReady;
                case 2:
                  return v.abrupt("return", this._services.users.getSubscribedUsers());
                case 3:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "getTemporaryContentUrlsForMediaSids",
        value: function(u) {
          var I = this;
          return new H.CancellablePromise(/* @__PURE__ */ (function() {
            var d = L.default(/* @__PURE__ */ $.default.mark(function v(g, w, R) {
              var me, ge;
              return $.default.wrap(function(Ue) {
                for (; ; ) switch (Ue.prev = Ue.next) {
                  case 0:
                    if (!(!I._services.mcsClient || !u)) {
                      Ue.next = 3;
                      break;
                    }
                    return w(/* @__PURE__ */ new Error("Media Content Service is unavailable")), Ue.abrupt("return");
                  case 3:
                    return me = I._services.mcsClient.mediaSetGetContentUrls(u), R(function() {
                      me.cancel();
                    }), Ue.prev = 5, Ue.next = 8, me;
                  case 8:
                    ge = Ue.sent, g(ge), Ue.next = 15;
                    break;
                  case 12:
                    Ue.prev = 12, Ue.t0 = Ue.catch(5), w(Ue.t0);
                  case 15:
                  case "end":
                    return Ue.stop();
                }
              }, v, null, [[5, 12]]);
            }));
            return function(v, g, w) {
              return d.apply(this, arguments);
            };
          })());
        }
      },
      {
        key: "getTemporaryContentUrlsForMedia",
        value: function(u) {
          var I = u.map(function(d) {
            return d.sid;
          });
          return this.getTemporaryContentUrlsForMediaSids(I);
        }
      },
      {
        key: "getContentTemplates",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            return $.default.wrap(function(v) {
              for (; ; ) switch (v.prev = v.next) {
                case 0:
                  return v.next = 2, this._ensureReady;
                case 2:
                  return v.next = 4, this._services.contentClient.getContentTemplates();
                case 4:
                  return v.abrupt("return", v.sent);
                case 5:
                case "end":
                  return v.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_initialize",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I() {
            var d = this, v;
            return $.default.wrap(function(w) {
              for (; ; ) switch (w.prev = w.next) {
                case 0:
                  return w.next = 2, this._services.commandExecutor.fetchResource("Client/v2/Configuration");
                case 2:
                  return v = w.sent, this._configuration = new _e(this._options, v, xt._logger), this._services.channelMetadataClient = new C(this._services, this._configuration), this._services.messageRecipientsClient = new Le(this._services, this._configuration), this._myself._resolveInitialization(this._configuration, this._configuration.userIdentity, this._configuration.userInfo, !0), this._services.typingIndicator = new wn(this.getConversationBySid.bind(this), this._configuration, this._services), this._services.network = new be(this._configuration, this._services), this._services.users = new Ct(this._myself, this._configuration, this._services), this._services.users.on("userSubscribed", function(R) {
                    d.emit("userSubscribed", R);
                  }), this._services.users.on("userUpdated", function(R) {
                    return d.emit("userUpdated", R);
                  }), this._services.users.on("userUnsubscribed", function(R) {
                    d.emit("userUnsubscribed", R);
                  }), this._conversationsEntity = new rt(this._configuration, this._services), this._conversationsEntity.on("conversationAdded", function(R) {
                    d.emit("conversationAdded", R);
                  }), this._conversationsEntity.on("conversationRemoved", function(R) {
                    d.emit("conversationRemoved", R);
                  }), this._conversationsEntity.on("conversationJoined", function(R) {
                    d.emit("conversationJoined", R);
                  }), this._conversationsEntity.on("conversationLeft", function(R) {
                    d.emit("conversationLeft", R);
                  }), this._conversationsEntity.on("conversationUpdated", function(R) {
                    return d.emit("conversationUpdated", R);
                  }), this._conversationsEntity.on("participantJoined", function(R) {
                    d.emit("participantJoined", R);
                  }), this._conversationsEntity.on("participantLeft", function(R) {
                    d.emit("participantLeft", R);
                  }), this._conversationsEntity.on("participantUpdated", function(R) {
                    return d.emit("participantUpdated", R);
                  }), this._conversationsEntity.on("messageAdded", function(R) {
                    return d.emit("messageAdded", R);
                  }), this._conversationsEntity.on("messageUpdated", function(R) {
                    return d.emit("messageUpdated", R);
                  }), this._conversationsEntity.on("messageRemoved", function(R) {
                    return d.emit("messageRemoved", R);
                  }), this._conversationsEntity.on("typingStarted", function(R) {
                    return d.emit("typingStarted", R);
                  }), this._conversationsEntity.on("typingEnded", function(R) {
                    return d.emit("typingEnded", R);
                  }), this._conversationsPromise = this._conversationsEntity.fetchConversations().then(function() {
                    return d._conversationsEntity;
                  }).catch(function(R) {
                    throw console.error("Failed to fetch conversations _conversationsPromise -> client.ts", R), R;
                  }), w.next = 30, this._services.users.myself._ensureFetched();
                case 30:
                  xt._supportedPushChannels.forEach(function(R) {
                    return d._subscribeToPushNotifications(R);
                  }), this._services.typingIndicator.initialize(), this._services.mcsClient = new H.McsClient(this._fpaToken, this._configuration.links.mediaService, this._configuration.links.mediaSetService, bt(bt({}, this._options), {}, { transport: void 0 })), this._resolveEnsureReady(), this.emit(xt.stateChanged, "initialized"), this.emit(xt.initialized);
                case 36:
                case "end":
                  return w.stop();
              }
            }, I, this);
          }));
          function u() {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "_subscribeToPushNotifications",
        value: function(u) {
          var I = this;
          [
            Qe.NEW_MESSAGE,
            Qe.ADDED_TO_CONVERSATION,
            Qe.REMOVED_FROM_CONVERSATION,
            Qe.TYPING_INDICATOR,
            Qe.CONSUMPTION_UPDATE
          ].forEach(function(d) {
            I._services.notificationClient.subscribe(u, d);
          });
        }
      },
      {
        key: "_unsubscribeFromPushNotifications",
        value: function(u) {
          var I = this;
          [
            Qe.NEW_MESSAGE,
            Qe.ADDED_TO_CONVERSATION,
            Qe.REMOVED_FROM_CONVERSATION,
            Qe.TYPING_INDICATOR,
            Qe.CONSUMPTION_UPDATE
          ].forEach(function(d) {
            I._services.notificationClient.unsubscribe(u, d);
          });
        }
      },
      {
        key: "_initializeEnsureReady",
        value: function(u) {
          var I = this;
          this._ensureReady = new Promise(function(d, v) {
            I._resolveEnsureReady = d, I._rejectEnsureReady = v;
          }).catch(function(d) {
            if (u) throw d;
          });
        }
      }
    ], [
      {
        key: "create",
        value: (function() {
          var o = L.default(/* @__PURE__ */ $.default.mark(function I(d, v) {
            var g;
            return $.default.wrap(function(R) {
              for (; ; ) switch (R.prev = R.next) {
                case 0:
                  if (!(v != null && v.twilsockClient)) {
                    R.next = 2;
                    break;
                  }
                  throw new Error("Obsolete usage of ConversationsClient.create() factory method: if you pass twilsock from the outside then you must use ConversationsClient constructor and be prepared to work with uninitialized client.");
                case 2:
                  return g = new xt(d, v), R.next = 5, g._ensureReady;
                case 5:
                  return R.abrupt("return", g);
                case 6:
                case "end":
                  return R.stop();
              }
            }, I);
          }));
          function u(I, d) {
            return o.apply(this, arguments);
          }
          return u;
        })()
      },
      {
        key: "parsePushNotification",
        value: function(u) {
          if (xt._logger.debug("parsePushNotification, notificationPayload=", u), typeof u.aps < "u") {
            if (!u.twi_message_type) throw new Error("Provided push notification payload does not contain Programmable Chat push notification type");
            var I = xt._parsePushNotificationChatData(u), d = u.aps, v, g = null;
            if (typeof d.alert == "string") v = d.alert || null;
            else {
              var w, R;
              v = ((w = d.alert) === null || w === void 0 ? void 0 : w.body) || null, g = ((R = d.alert) === null || R === void 0 ? void 0 : R.title) || null;
            }
            return new gr({
              title: g,
              body: v,
              sound: d.sound || null,
              badge: d.badge || null,
              action: d.category || null,
              type: u.twi_message_type,
              data: I
            });
          }
          if (typeof u.data < "u") {
            var me = u.data;
            if (!me.twi_message_type) throw new Error("Provided push notification payload does not contain Programmable Chat push notification type");
            var ge = xt._parsePushNotificationChatData(u.data);
            return new gr({
              title: me.twi_title || null,
              body: me.twi_body || null,
              sound: me.twi_sound || null,
              badge: null,
              action: me.twi_action || null,
              type: me.twi_message_type,
              data: ge
            });
          }
          throw new Error("Provided push notification payload is not Programmable Chat notification");
        }
      },
      {
        key: "_parsePushNotificationChatData",
        value: function(u) {
          var I = {};
          for (var d in xt._supportedPushDataFields) {
            var v = u[d];
            if (!(typeof v > "u" || v === null)) {
              if (d === "message_index" || d === "media_count") {
                var g = ce(v);
                g !== null && (I[xt._supportedPushDataFields[d]] = g);
                continue;
              }
              if (d === "media") {
                if (typeof v == "string") try {
                  I[xt._supportedPushDataFields[d]] = JSON.parse(v);
                } catch {
                  xt._logger.debug("Media message notification parsing error");
                }
                continue;
              }
              I[xt._supportedPushDataFields[d]] = v;
            }
          }
          return I;
        }
      },
      {
        key: "populateInitRegistrations",
        value: function(u) {
          u.populateInitRegistrations([Qe.TYPING_INDICATOR]), se.SyncClient.populateInitRegistrations(u);
        }
      }
    ]), k;
  })(B.ReplayEventEmitter), oe.default(st, "conversationAdded", "conversationAdded"), oe.default(st, "conversationJoined", "conversationJoined"), oe.default(st, "conversationLeft", "conversationLeft"), oe.default(st, "conversationRemoved", "conversationRemoved"), oe.default(st, "conversationUpdated", "conversationUpdated"), oe.default(st, "participantJoined", "participantJoined"), oe.default(st, "participantLeft", "participantLeft"), oe.default(st, "participantUpdated", "participantUpdated"), oe.default(st, "messageAdded", "messageAdded"), oe.default(st, "messageRemoved", "messageRemoved"), oe.default(st, "messageUpdated", "messageUpdated"), oe.default(st, "tokenAboutToExpire", "tokenAboutToExpire"), oe.default(st, "tokenExpired", "tokenExpired"), oe.default(st, "typingEnded", "typingEnded"), oe.default(st, "typingStarted", "typingStarted"), oe.default(st, "pushNotification", "pushNotification"), oe.default(st, "userSubscribed", "userSubscribed"), oe.default(st, "userUnsubscribed", "userUnsubscribed"), oe.default(st, "userUpdated", "userUpdated"), oe.default(st, "stateChanged", "stateChanged"), oe.default(st, "initialized", "initialized"), oe.default(st, "initFailed", "initFailed"), oe.default(st, "connectionStateChanged", "connectionStateChanged"), oe.default(st, "connectionError", "connectionError"), oe.default(st, "version", Pr), oe.default(st, "_logger", De.scope("Client")), oe.default(st, "_supportedPushChannels", ["fcm", "apn"]), oe.default(st, "_supportedPushDataFields", {
    conversation_sid: "conversationSid",
    conversation_title: "conversationTitle",
    message_sid: "messageSid",
    message_index: "messageIndex",
    media_count: "mediaCount",
    media: "media"
  }), st), F([
    U.deprecated("token"),
    m("design:type", String),
    m("design:paramtypes", [])
  ], c.Client.prototype, "token", null), F([
    O.validateTypesAsync(O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "updateToken", null), F([
    O.validateTypesAsync(O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "getConversationBySid", null), F([
    O.validateTypesAsync(O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "peekConversationBySid", null), F([
    O.validateTypesAsync(O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "getConversationByUniqueName", null), F([
    O.validateTypesAsync(["undefined", O.objectSchema("conversation options", {
      friendlyName: ["string", "undefined"],
      isPrivate: ["boolean", "undefined"],
      uniqueName: ["string", "undefined"]
    })]),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "createConversation", null), F([
    O.validateTypesAsync(O.literal("fcm", "apn"), "string"),
    m("design:type", Function),
    m("design:paramtypes", [String, String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "setPushRegistrationId", null), F([
    O.validateTypesAsync(O.literal("fcm", "apn")),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "unsetPushRegistrationId", null), F([
    O.validateTypesAsync(O.literal("fcm", "apn"), O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String, String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "removePushRegistrations", null), F([
    O.validateTypesAsync(O.pureObject),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "handlePushNotification", null), F([
    O.validateTypesAsync(O.nonEmptyString),
    m("design:type", Function),
    m("design:paramtypes", [String]),
    m("design:returntype", Promise)
  ], c.Client.prototype, "getUser", null), F([
    O.validateTypesAsync(O.nonEmptyArray("strings", "string")),
    m("design:type", Function),
    m("design:paramtypes", [Array]),
    m("design:returntype", H.CancellablePromise)
  ], c.Client.prototype, "getTemporaryContentUrlsForMediaSids", null), F([
    O.validateTypesAsync(O.nonEmptyArray("media", Xt)),
    m("design:type", Function),
    m("design:paramtypes", [Array]),
    m("design:returntype", H.CancellablePromise)
  ], c.Client.prototype, "getTemporaryContentUrlsForMedia", null), F([
    U.deprecated("Client.create()", "new Client()"),
    O.validateTypesAsync("string", ["undefined", O.pureObject]),
    m("design:type", Function),
    m("design:paramtypes", [String, Object]),
    m("design:returntype", Promise)
  ], c.Client, "create", null), F([
    O.validateTypes(O.pureObject),
    m("design:type", Function),
    m("design:paramtypes", [Object]),
    m("design:returntype", gr)
  ], c.Client, "parsePushNotification", null), c.Client = xt = F([O.validateConstructorTypes(O.nonEmptyString, [O.pureObject, "undefined"]), m("design:paramtypes", [String, Object])], c.Client), Object.defineProperty(c, "CancellablePromise", {
    enumerable: !0,
    get: function() {
      return H.CancellablePromise;
    }
  }), c.AggregatedDeliveryReceipt = Wt, c.ChannelMetadata = f, c.ContentTemplate = Sr, c.ContentTemplateVariable = yr, c.Conversation = Rt, c.DetailedDeliveryReceipt = Rr, c.EmailRecipientDescriptor = Be, c.Media = Xt, c.Message = Zt, c.MessageBuilder = kt, c.NotificationTypes = Qe, c.Participant = Et, c.PushNotification = gr, c.RestPaginator = jr, c.UnknownRecipientDescriptor = Ge, c.UnsentMessage = dt, c.User = ae;
})), kl = Sl();
async function Il(c, e) {
  const r = await new kl.Client(c).getConversationByUniqueName(e);
  r.on("messageAdded", (n) => console.log(n.sid)), await r.sendMessage("hola");
}
export {
  Il as run
};
