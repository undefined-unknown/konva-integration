var s0 = Object.defineProperty;
var r0 = (r, t, e) => t in r ? s0(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Gt = (r, t, e) => (r0(r, typeof t != "symbol" ? t + "" : t, e), e), ja = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var R = (r, t, e) => (ja(r, t, "read from private field"), e ? e.call(r) : t.get(r)), ee = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, Dt = (r, t, e, s) => (ja(r, t, "write to private field"), s ? s.call(r, e) : t.set(r, e), e);
var Es = (r, t, e) => (ja(r, t, "access private method"), e);
import { shallowRef as Gr, inject as dn, triggerRef as za, defineComponent as ge, provide as Zn, renderSlot as jr, openBlock as q, createElementBlock as ct, createElementVNode as A, Fragment as un, toDisplayString as wr, createVNode as $t, unref as he, createCommentVNode as Ee, computed as hr, createBlock as ye, resolveDynamicComponent as bl, defineAsyncComponent as Ie, ref as Ri, onMounted as Jd, onUnmounted as i0, renderList as hc, normalizeClass as n0, normalizeStyle as Qd, onBeforeUnmount as o0, watch as a0, normalizeProps as fn, guardReactiveProps as pn, withCtx as Fs, mergeProps as l0, withModifiers as c0, createStaticVNode as h0 } from "vue";
var d0 = typeof global == "object" && global && global.Object === Object && global, u0 = typeof self == "object" && self && self.Object === Object && self, tu = d0 || u0 || Function("return this")(), Jn = tu.Symbol, eu = Object.prototype, f0 = eu.hasOwnProperty, p0 = eu.toString, yi = Jn ? Jn.toStringTag : void 0;
function g0(r) {
  var t = f0.call(r, yi), e = r[yi];
  try {
    r[yi] = void 0;
    var s = !0;
  } catch {
  }
  var i = p0.call(r);
  return s && (t ? r[yi] = e : delete r[yi]), i;
}
var m0 = Object.prototype, _0 = m0.toString;
function v0(r) {
  return _0.call(r);
}
var y0 = "[object Null]", w0 = "[object Undefined]", ph = Jn ? Jn.toStringTag : void 0;
function b0(r) {
  return r == null ? r === void 0 ? w0 : y0 : ph && ph in Object(r) ? g0(r) : v0(r);
}
function S0(r) {
  return r != null && typeof r == "object";
}
var k0 = "[object Symbol]";
function x0(r) {
  return typeof r == "symbol" || S0(r) && b0(r) == k0;
}
var C0 = /\s/;
function E0(r) {
  for (var t = r.length; t-- && C0.test(r.charAt(t)); )
    ;
  return t;
}
var T0 = /^\s+/;
function A0(r) {
  return r && r.slice(0, E0(r) + 1).replace(T0, "");
}
function Qn(r) {
  var t = typeof r;
  return r != null && (t == "object" || t == "function");
}
var gh = NaN, M0 = /^[-+]0x[0-9a-f]+$/i, P0 = /^0b[01]+$/i, O0 = /^0o[0-7]+$/i, R0 = parseInt;
function mh(r) {
  if (typeof r == "number")
    return r;
  if (x0(r))
    return gh;
  if (Qn(r)) {
    var t = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = Qn(t) ? t + "" : t;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = A0(r);
  var e = P0.test(r);
  return e || O0.test(r) ? R0(r.slice(2), e ? 2 : 8) : M0.test(r) ? gh : +r;
}
var _h = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
function D0(r) {
  if (r.__esModule)
    return r;
  var t = r.default;
  if (typeof t == "function") {
    var e = function s() {
      return this instanceof s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else
    e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(r).forEach(function(s) {
    var i = Object.getOwnPropertyDescriptor(r, s);
    Object.defineProperty(e, s, i.get ? i : {
      enumerable: !0,
      get: function() {
        return r[s];
      }
    });
  }), e;
}
var Ha = function() {
  return tu.Date.now();
}, I0 = "Expected a function", N0 = Math.max, F0 = Math.min;
function Io(r, t, e) {
  var s, i, n, o, a, l, c = 0, h = !1, d = !1, u = !0;
  if (typeof r != "function")
    throw new TypeError(I0);
  t = mh(t) || 0, Qn(e) && (h = !!e.leading, d = "maxWait" in e, n = d ? N0(mh(e.maxWait) || 0, t) : n, u = "trailing" in e ? !!e.trailing : u);
  function p(w) {
    var x = s, S = i;
    return s = i = void 0, c = w, o = r.apply(S, x), o;
  }
  function f(w) {
    return c = w, a = setTimeout(y, t), h ? p(w) : o;
  }
  function m(w) {
    var x = w - l, S = w - c, M = t - x;
    return d ? F0(M, n - S) : M;
  }
  function _(w) {
    var x = w - l, S = w - c;
    return l === void 0 || x >= t || x < 0 || d && S >= n;
  }
  function y() {
    var w = Ha();
    if (_(w))
      return k(w);
    a = setTimeout(y, m(w));
  }
  function k(w) {
    return a = void 0, u && s ? p(w) : (s = i = void 0, o);
  }
  function g() {
    a !== void 0 && clearTimeout(a), c = 0, s = l = i = a = void 0;
  }
  function v() {
    return a === void 0 ? o : k(Ha());
  }
  function b() {
    var w = Ha(), x = _(w);
    if (s = arguments, i = this, l = w, x) {
      if (a === void 0)
        return f(l);
      if (d)
        return clearTimeout(a), a = setTimeout(y, t), p(l);
    }
    return a === void 0 && (a = setTimeout(y, t)), o;
  }
  return b.cancel = g, b.flush = v, b;
}
var L0 = "Expected a function";
function B0(r, t, e) {
  var s = !0, i = !0;
  if (typeof r != "function")
    throw new TypeError(L0);
  return Qn(e) && (s = "leading" in e ? !!e.leading : s, i = "trailing" in e ? !!e.trailing : i), Io(r, t, {
    leading: s,
    maxWait: t,
    trailing: i
  });
}
function B(r, t = "val does not exist") {
  if (r == null)
    throw t instanceof Error ? t : new Error(t);
}
class ds {
  constructor() {
    this._disposed = !1, this._disposables = [];
  }
  get disposed() {
    return this._disposed;
  }
  /**
   * Add to group to be disposed with others.
   * This will be immediately disposed if this group has already been disposed.
   */
  add(t) {
    typeof t == "function" ? this._disposed ? t() : this._disposables.push({ dispose: t }) : this._disposed ? t.dispose() : this._disposables.push(t);
  }
  addFromEvent(t, e, s, i) {
    this.add({
      dispose: () => {
        t.removeEventListener(e, s, i);
      }
    }), t.addEventListener(e, s, i);
  }
  dispose() {
    su(this._disposables), this._disposables = [], this._disposed = !0;
  }
}
function $0(r) {
  return {
    dispose: () => su(r)
  };
}
function su(r) {
  for (const t of r)
    try {
      t.dispose();
    } catch (e) {
      console.error(e);
    }
}
class ot {
  constructor() {
    this._emitting = !1, this._callbacks = [], this._disposables = [], this.subscribe = (t, e, s) => {
      let i;
      const { filter: n, equalityFn: o = Object.is } = s ?? {};
      return this.on((a) => {
        if (n && !n(a))
          return;
        const l = t(a);
        (i === void 0 || !o(i, l)) && (e(l), i = l);
      });
    };
  }
  filter(t) {
    const e = new ot();
    return e._disposables.push({ dispose: () => this.dispose() }), this.on((s) => {
      t(s) && e.emit(s);
    }), e;
  }
  on(t) {
    if (this._emitting) {
      const e = [...this._callbacks, t];
      this._callbacks = e;
    } else
      this._callbacks.push(t);
    return {
      dispose: () => {
        if (this._emitting)
          this._callbacks = this._callbacks.filter((e) => e !== t);
        else {
          const e = this._callbacks.indexOf(t);
          e > -1 && this._callbacks.splice(e, 1);
        }
      }
    };
  }
  once(t) {
    let e;
    const s = (n) => {
      t(n), e && e();
    }, i = this.on(s);
    return e = i.dispose, i;
  }
  unshift(t) {
    if (this._emitting) {
      const e = [t, ...this._callbacks];
      this._callbacks = e;
    } else
      this._callbacks.unshift(t);
    return {
      dispose: () => {
        if (this._emitting)
          this._callbacks = this._callbacks.filter((e) => e !== t);
        else {
          const e = this._callbacks.indexOf(t);
          e > -1 && this._callbacks.splice(e, 1);
        }
      }
    };
  }
  emit(t) {
    const e = this._emitting;
    this._emitting = !0, this._callbacks.forEach((s) => {
      try {
        s(t);
      } catch (i) {
        console.error(i);
      }
    }), this._emitting = e;
  }
  pipe(t) {
    return this._callbacks.push((e) => t.emit(e)), this;
  }
  dispose() {
    $0(this._disposables).dispose(), this._callbacks = [], this._disposables = [];
  }
  toDispose(t) {
    return t.push(this), this;
  }
}
const dr = () => /* @__PURE__ */ new Set(), Wa = (r) => r[r.length - 1], U0 = (r, t) => {
  for (let e = 0; e < t.length; e++)
    r.push(t[e]);
}, us = Array.from, G0 = (r, t) => {
  for (let e = 0; e < r.length; e++)
    if (t(r[e], e, r))
      return !0;
  return !1;
}, V0 = (r, t) => {
  const e = new Array(r);
  for (let s = 0; s < r; s++)
    e[s] = t(s, e);
  return e;
}, Sl = Array.isArray, j0 = String.fromCharCode, z0 = (r) => r.toLowerCase(), H0 = /^\s*/g, W0 = (r) => r.replace(H0, ""), Y0 = /([A-Z])/g, vh = (r, t) => W0(r.replace(Y0, (e) => `${t}${z0(e)}`)), q0 = (r) => {
  const t = unescape(encodeURIComponent(r)), e = t.length, s = new Uint8Array(e);
  for (let i = 0; i < e; i++)
    s[i] = /** @type {number} */
    t.codePointAt(i);
  return s;
}, Di = (
  /** @type {TextEncoder} */
  typeof TextEncoder < "u" ? new TextEncoder() : null
), K0 = (r) => Di.encode(r), X0 = Di ? K0 : q0;
let Pi = typeof TextDecoder > "u" ? null : new TextDecoder("utf-8", { fatal: !0, ignoreBOM: !0 });
Pi && Pi.decode(new Uint8Array()).length === 1 && (Pi = null);
const Z0 = (r, t) => V0(t, () => r).join(""), Zt = () => /* @__PURE__ */ new Map(), kl = (r) => {
  const t = Zt();
  return r.forEach((e, s) => {
    t.set(s, e);
  }), t;
}, de = (r, t, e) => {
  let s = r.get(t);
  return s === void 0 && r.set(t, s = e()), s;
}, J0 = (r, t) => {
  const e = [];
  for (const [s, i] of r)
    e.push(t(i, s));
  return e;
}, Q0 = (r, t) => {
  for (const [e, s] of r)
    if (t(s, e))
      return !0;
  return !1;
}, yh = (r) => r === void 0 ? null : r;
class tg {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {string} key
   * @param {any} newValue
   */
  setItem(t, e) {
    this.map.set(t, e);
  }
  /**
   * @param {string} key
   */
  getItem(t) {
    return this.map.get(t);
  }
}
let ru = new tg(), eg = !0;
try {
  typeof localStorage < "u" && localStorage && (ru = localStorage, eg = !1);
} catch {
}
const sg = ru, rg = Object.assign, ig = Object.keys, ng = (r, t) => {
  for (const e in r)
    t(r[e], e);
}, to = (r) => ig(r).length, og = (r) => {
  for (const t in r)
    return !1;
  return !0;
}, ag = (r, t) => {
  for (const e in r)
    if (!t(r[e], e))
      return !1;
  return !0;
}, iu = (r, t) => Object.prototype.hasOwnProperty.call(r, t), lg = (r, t) => r === t || to(r) === to(t) && ag(r, (e, s) => (e !== void 0 || iu(t, s)) && t[s] === e), uc = (r, t, e = 0) => {
  try {
    for (; e < r.length; e++)
      r[e](...t);
  } finally {
    e < r.length && uc(r, t, e + 1);
  }
}, nu = (r) => r, cg = (r, t) => r === t, $n = (r, t) => {
  if (r == null || t == null)
    return cg(r, t);
  if (r.constructor !== t.constructor)
    return !1;
  if (r === t)
    return !0;
  switch (r.constructor) {
    case ArrayBuffer:
      r = new Uint8Array(r), t = new Uint8Array(t);
    case Uint8Array: {
      if (r.byteLength !== t.byteLength)
        return !1;
      for (let e = 0; e < r.length; e++)
        if (r[e] !== t[e])
          return !1;
      break;
    }
    case Set: {
      if (r.size !== t.size)
        return !1;
      for (const e of r)
        if (!t.has(e))
          return !1;
      break;
    }
    case Map: {
      if (r.size !== t.size)
        return !1;
      for (const e of r.keys())
        if (!t.has(e) || !$n(r.get(e), t.get(e)))
          return !1;
      break;
    }
    case Object:
      if (to(r) !== to(t))
        return !1;
      for (const e in r)
        if (!iu(r, e) || !$n(r[e], t[e]))
          return !1;
      break;
    case Array:
      if (r.length !== t.length)
        return !1;
      for (let e = 0; e < r.length; e++)
        if (!$n(r[e], t[e]))
          return !1;
      break;
    default:
      return !1;
  }
  return !0;
}, hg = (r, t) => t.includes(r), Wr = typeof process < "u" && process.release && /node|io\.js/.test(process.release.name) && Object.prototype.toString.call(typeof process < "u" ? process : 0) === "[object process]", dg = typeof window < "u" && typeof document < "u" && !Wr;
let ze;
const ug = () => {
  if (ze === void 0)
    if (Wr) {
      ze = Zt();
      const r = process.argv;
      let t = null;
      for (let e = 0; e < r.length; e++) {
        const s = r[e];
        s[0] === "-" ? (t !== null && ze.set(t, ""), t = s) : t !== null && (ze.set(t, s), t = null);
      }
      t !== null && ze.set(t, "");
    } else
      typeof location == "object" ? (ze = Zt(), (location.search || "?").slice(1).split("&").forEach((r) => {
        if (r.length !== 0) {
          const [t, e] = r.split("=");
          ze.set(`--${vh(t, "-")}`, e), ze.set(`-${vh(t, "-")}`, e);
        }
      })) : ze = Zt();
  return ze;
}, xl = (r) => ug().has(r), Cl = (r) => yh(Wr ? process.env[r.toUpperCase().replaceAll("-", "_")] : sg.getItem(r)), fg = (r) => xl("--" + r) || Cl(r) !== null;
fg("production");
const wh = Wr && hg(process.env.FORCE_COLOR, ["true", "1", "2"]), pg = !xl("no-colors") && (!Wr || process.stdout.isTTY || wh) && (!Wr || xl("color") || wh || Cl("COLORTERM") !== null || (Cl("TERM") || "").includes("color")), fs = Math.floor, Un = Math.abs, ou = (r, t) => r < t ? r : t, br = (r, t) => r > t ? r : t, au = (r) => r !== 0 ? r < 0 : 1 / r < 0, bh = 1, Sh = 2, Ya = 4, qa = 8, Ii = 32, as = 64, we = 128, No = 31, El = 63, nr = 127, gg = 2147483647, lu = Number.MAX_SAFE_INTEGER, mg = Number.isInteger || ((r) => typeof r == "number" && isFinite(r) && fs(r) === r);
class gn {
  constructor() {
    this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = [];
  }
}
const ci = () => new gn(), _g = (r) => {
  let t = r.cpos;
  for (let e = 0; e < r.bufs.length; e++)
    t += r.bufs[e].length;
  return t;
}, Te = (r) => {
  const t = new Uint8Array(_g(r));
  let e = 0;
  for (let s = 0; s < r.bufs.length; s++) {
    const i = r.bufs[s];
    t.set(i, e), e += i.length;
  }
  return t.set(new Uint8Array(r.cbuf.buffer, 0, r.cpos), e), t;
}, vg = (r, t) => {
  const e = r.cbuf.length;
  e - r.cpos < t && (r.bufs.push(new Uint8Array(r.cbuf.buffer, 0, r.cpos)), r.cbuf = new Uint8Array(br(e, t) * 2), r.cpos = 0);
}, Xt = (r, t) => {
  const e = r.cbuf.length;
  r.cpos === e && (r.bufs.push(r.cbuf), r.cbuf = new Uint8Array(e * 2), r.cpos = 0), r.cbuf[r.cpos++] = t;
}, Ni = Xt, Y = (r, t) => {
  for (; t > nr; )
    Xt(r, we | nr & t), t = fs(t / 128);
  Xt(r, nr & t);
}, Fo = (r, t) => {
  const e = au(t);
  for (e && (t = -t), Xt(r, (t > El ? we : 0) | (e ? as : 0) | El & t), t = fs(t / 64); t > 0; )
    Xt(r, (t > nr ? we : 0) | nr & t), t = fs(t / 128);
}, Tl = new Uint8Array(3e4), yg = Tl.length / 3, wg = (r, t) => {
  if (t.length < yg) {
    const e = Di.encodeInto(t, Tl).written || 0;
    Y(r, e);
    for (let s = 0; s < e; s++)
      Xt(r, Tl[s]);
  } else
    me(r, X0(t));
}, bg = (r, t) => {
  const e = unescape(encodeURIComponent(t)), s = e.length;
  Y(r, s);
  for (let i = 0; i < s; i++)
    Xt(
      r,
      /** @type {number} */
      e.codePointAt(i)
    );
}, or = Di && /** @type {any} */
Di.encodeInto ? wg : bg, Sg = (r, t) => mn(r, Te(t)), mn = (r, t) => {
  const e = r.cbuf.length, s = r.cpos, i = ou(e - s, t.length), n = t.length - i;
  r.cbuf.set(t.subarray(0, i), s), r.cpos += i, n > 0 && (r.bufs.push(r.cbuf), r.cbuf = new Uint8Array(br(e * 2, n)), r.cbuf.set(t.subarray(i)), r.cpos = n);
}, me = (r, t) => {
  Y(r, t.byteLength), mn(r, t);
}, fc = (r, t) => {
  vg(r, t);
  const e = new DataView(r.cbuf.buffer, r.cpos, t);
  return r.cpos += t, e;
}, kg = (r, t) => fc(r, 4).setFloat32(0, t, !1), xg = (r, t) => fc(r, 8).setFloat64(0, t, !1), Cg = (r, t) => (
  /** @type {any} */
  fc(r, 8).setBigInt64(0, t, !1)
), kh = new DataView(new ArrayBuffer(4)), Eg = (r) => (kh.setFloat32(0, r), kh.getFloat32(0) === r), Fi = (r, t) => {
  switch (typeof t) {
    case "string":
      Xt(r, 119), or(r, t);
      break;
    case "number":
      mg(t) && Un(t) <= gg ? (Xt(r, 125), Fo(r, t)) : Eg(t) ? (Xt(r, 124), kg(r, t)) : (Xt(r, 123), xg(r, t));
      break;
    case "bigint":
      Xt(r, 122), Cg(r, t);
      break;
    case "object":
      if (t === null)
        Xt(r, 126);
      else if (Sl(t)) {
        Xt(r, 117), Y(r, t.length);
        for (let e = 0; e < t.length; e++)
          Fi(r, t[e]);
      } else if (t instanceof Uint8Array)
        Xt(r, 116), me(r, t);
      else {
        Xt(r, 118);
        const e = Object.keys(t);
        Y(r, e.length);
        for (let s = 0; s < e.length; s++) {
          const i = e[s];
          or(r, i), Fi(r, t[i]);
        }
      }
      break;
    case "boolean":
      Xt(r, t ? 120 : 121);
      break;
    default:
      Xt(r, 127);
  }
};
class xh extends gn {
  /**
   * @param {function(Encoder, T):void} writer
   */
  constructor(t) {
    super(), this.w = t, this.s = null, this.count = 0;
  }
  /**
   * @param {T} v
   */
  write(t) {
    this.s === t ? this.count++ : (this.count > 0 && Y(this, this.count - 1), this.count = 1, this.w(this, t), this.s = t);
  }
}
const Ch = (r) => {
  r.count > 0 && (Fo(r.encoder, r.count === 1 ? r.s : -r.s), r.count > 1 && Y(r.encoder, r.count - 2));
};
class Gn {
  constructor() {
    this.encoder = new gn(), this.s = 0, this.count = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.s === t ? this.count++ : (Ch(this), this.count = 1, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Ch(this), Te(this.encoder);
  }
}
const Eh = (r) => {
  if (r.count > 0) {
    const t = r.diff * 2 + (r.count === 1 ? 0 : 1);
    Fo(r.encoder, t), r.count > 1 && Y(r.encoder, r.count - 2);
  }
};
class Ka {
  constructor() {
    this.encoder = new gn(), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @param {number} v
   */
  write(t) {
    this.diff === t - this.s ? (this.s = t, this.count++) : (Eh(this), this.count = 1, this.diff = t - this.s, this.s = t);
  }
  /**
   * Flush the encoded state and transform this to a Uint8Array.
   *
   * Note that this should only be called once.
   */
  toUint8Array() {
    return Eh(this), Te(this.encoder);
  }
}
class Tg {
  constructor() {
    this.sarr = [], this.s = "", this.lensE = new Gn();
  }
  /**
   * @param {string} string
   */
  write(t) {
    this.s += t, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(t.length);
  }
  toUint8Array() {
    const t = new gn();
    return this.sarr.push(this.s), this.s = "", or(t, this.sarr.join("")), mn(t, this.lensE.toUint8Array()), Te(t);
  }
}
const Ls = (r) => new Error(r), qe = () => {
  throw Ls("Method unimplemented");
}, pe = () => {
  throw Ls("Unexpected case");
}, cu = Ls("Unexpected end of array"), hu = Ls("Integer out of Range");
class Lo {
  /**
   * @param {Uint8Array} uint8Array Binary data to decode
   */
  constructor(t) {
    this.arr = t, this.pos = 0;
  }
}
const ie = (r) => new Lo(r), du = (r) => r.pos !== r.arr.length, Ag = (r, t) => {
  const e = new Uint8Array(r.arr.buffer, r.pos + r.arr.byteOffset, t);
  return r.pos += t, e;
}, _e = (r) => Ag(r, Q(r)), Yr = (r) => r.arr[r.pos++], Q = (r) => {
  let t = 0, e = 1;
  const s = r.arr.length;
  for (; r.pos < s; ) {
    const i = r.arr[r.pos++];
    if (t = t + (i & nr) * e, e *= 128, i < we)
      return t;
    if (t > lu)
      throw hu;
  }
  throw cu;
}, Bo = (r) => {
  let t = r.arr[r.pos++], e = t & El, s = 64;
  const i = (t & as) > 0 ? -1 : 1;
  if (!(t & we))
    return i * e;
  const n = r.arr.length;
  for (; r.pos < n; ) {
    if (t = r.arr[r.pos++], e = e + (t & nr) * s, s *= 128, t < we)
      return i * e;
    if (e > lu)
      throw hu;
  }
  throw cu;
}, Mg = (r) => {
  let t = Q(r);
  if (t === 0)
    return "";
  {
    let e = String.fromCodePoint(Yr(r));
    if (--t < 100)
      for (; t--; )
        e += String.fromCodePoint(Yr(r));
    else
      for (; t > 0; ) {
        const s = t < 1e4 ? t : 1e4, i = r.arr.subarray(r.pos, r.pos + s);
        r.pos += s, e += String.fromCodePoint.apply(
          null,
          /** @type {any} */
          i
        ), t -= s;
      }
    return decodeURIComponent(escape(e));
  }
}, Pg = (r) => (
  /** @type any */
  Pi.decode(_e(r))
), ar = Pi ? Pg : Mg, pc = (r, t) => {
  const e = new DataView(r.arr.buffer, r.arr.byteOffset + r.pos, t);
  return r.pos += t, e;
}, Og = (r) => pc(r, 4).getFloat32(0, !1), Rg = (r) => pc(r, 8).getFloat64(0, !1), Dg = (r) => (
  /** @type {any} */
  pc(r, 8).getBigInt64(0, !1)
), Ig = [
  (r) => {
  },
  // CASE 127: undefined
  (r) => null,
  // CASE 126: null
  Bo,
  // CASE 125: integer
  Og,
  // CASE 124: float32
  Rg,
  // CASE 123: float64
  Dg,
  // CASE 122: bigint
  (r) => !1,
  // CASE 121: boolean (false)
  (r) => !0,
  // CASE 120: boolean (true)
  ar,
  // CASE 119: string
  (r) => {
    const t = Q(r), e = {};
    for (let s = 0; s < t; s++) {
      const i = ar(r);
      e[i] = Li(r);
    }
    return e;
  },
  (r) => {
    const t = Q(r), e = [];
    for (let s = 0; s < t; s++)
      e.push(Li(r));
    return e;
  },
  _e
  // CASE 116: Uint8Array
], Li = (r) => Ig[127 - Yr(r)](r);
class Th extends Lo {
  /**
   * @param {Uint8Array} uint8Array
   * @param {function(Decoder):T} reader
   */
  constructor(t, e) {
    super(t), this.reader = e, this.s = null, this.count = 0;
  }
  read() {
    return this.count === 0 && (this.s = this.reader(this), du(this) ? this.count = Q(this) + 1 : this.count = -1), this.count--, /** @type {T} */
    this.s;
  }
}
class Vn extends Lo {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0;
  }
  read() {
    if (this.count === 0) {
      this.s = Bo(this);
      const t = au(this.s);
      this.count = 1, t && (this.s = -this.s, this.count = Q(this) + 2);
    }
    return this.count--, /** @type {number} */
    this.s;
  }
}
class Xa extends Lo {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    super(t), this.s = 0, this.count = 0, this.diff = 0;
  }
  /**
   * @return {number}
   */
  read() {
    if (this.count === 0) {
      const t = Bo(this), e = t & 1;
      this.diff = fs(t / 2), this.count = 1, e && (this.count = Q(this) + 2);
    }
    return this.s += this.diff, this.count--, this.s;
  }
}
class Ng {
  /**
   * @param {Uint8Array} uint8Array
   */
  constructor(t) {
    this.decoder = new Vn(t), this.str = ar(this.decoder), this.spos = 0;
  }
  /**
   * @return {string}
   */
  read() {
    const t = this.spos + this.decoder.read(), e = this.str.slice(this.spos, t);
    return this.spos = t, e;
  }
}
const Fg = (r) => new Uint8Array(r), Lg = (r) => {
  let t = "";
  for (let e = 0; e < r.byteLength; e++)
    t += j0(r[e]);
  return btoa(t);
}, Bg = (r) => Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString("base64"), $g = dg ? Lg : Bg, Ug = (r) => {
  const t = Fg(r.byteLength);
  return t.set(r), t;
};
async function Gg(r) {
  const t = await crypto.subtle.digest("SHA-256", r);
  return $g(new Uint8Array(t)).replace(/\+/g, "-").replace(/\//g, "_");
}
class gc {
  constructor() {
    this._observers = Zt();
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  on(t, e) {
    return de(
      this._observers,
      /** @type {string} */
      t,
      dr
    ).add(e), e;
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  once(t, e) {
    const s = (...i) => {
      this.off(
        t,
        /** @type {any} */
        s
      ), e(...i);
    };
    this.on(
      t,
      /** @type {any} */
      s
    );
  }
  /**
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name
   * @param {EVENTS[NAME]} f
   */
  off(t, e) {
    const s = this._observers.get(t);
    s !== void 0 && (s.delete(e), s.size === 0 && this._observers.delete(t));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @template {keyof EVENTS & string} NAME
   * @param {NAME} name The event name.
   * @param {Parameters<EVENTS[NAME]>} args The arguments that are applied to the event listener.
   */
  emit(t, e) {
    return us((this._observers.get(t) || Zt()).values()).forEach((s) => s(...e));
  }
  destroy() {
    this._observers = Zt();
  }
}
class Vg {
  constructor() {
    this._observers = Zt();
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  on(t, e) {
    de(this._observers, t, dr).add(e);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  once(t, e) {
    const s = (...i) => {
      this.off(t, s), e(...i);
    };
    this.on(t, s);
  }
  /**
   * @param {N} name
   * @param {function} f
   */
  off(t, e) {
    const s = this._observers.get(t);
    s !== void 0 && (s.delete(e), s.size === 0 && this._observers.delete(t));
  }
  /**
   * Emit a named event. All registered event listeners that listen to the
   * specified name will receive the event.
   *
   * @todo This should catch exceptions
   *
   * @param {N} name The event name.
   * @param {Array<any>} args The arguments that are applied to the event listener.
   */
  emit(t, e) {
    return us((this._observers.get(t) || Zt()).values()).forEach((s) => s(...e));
  }
  destroy() {
    this._observers = Zt();
  }
}
const jg = crypto.getRandomValues.bind(crypto), uu = () => jg(new Uint32Array(1))[0], zg = "10000000-1000-4000-8000" + -1e11, mc = () => zg.replace(
  /[018]/g,
  /** @param {number} c */
  (r) => (r ^ uu() & 15 >> r / 4).toString(16)
), eo = Date.now, Ah = (r) => (
  /** @type {Promise<T>} */
  new Promise(r)
);
Promise.all.bind(Promise);
class Hg {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(t, e) {
    this.left = t, this.right = e;
  }
}
const ss = (r, t) => new Hg(r, t);
typeof DOMParser < "u" && new DOMParser();
const Wg = (r) => J0(r, (t, e) => `${e}:${t};`).join(""), _s = Symbol, fu = _s(), pu = _s(), Yg = _s(), qg = _s(), Kg = _s(), gu = _s(), Xg = _s(), _c = _s(), Zg = _s(), Jg = (r) => {
  var s;
  r.length === 1 && ((s = r[0]) == null ? void 0 : s.constructor) === Function && (r = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  r[0]());
  const t = [];
  let e = 0;
  for (; e < r.length; e++) {
    const i = r[e];
    i === void 0 || i.constructor === String || i.constructor === Number || i.constructor === Object && t.push(JSON.stringify(i));
  }
  return t;
}, Qg = {
  [fu]: ss("font-weight", "bold"),
  [pu]: ss("font-weight", "normal"),
  [Yg]: ss("color", "blue"),
  [Kg]: ss("color", "green"),
  [qg]: ss("color", "grey"),
  [gu]: ss("color", "red"),
  [Xg]: ss("color", "purple"),
  [_c]: ss("color", "orange"),
  // not well supported in chrome when debugging node with inspector - TODO: deprecate
  [Zg]: ss("color", "black")
}, t1 = (r) => {
  var o;
  r.length === 1 && ((o = r[0]) == null ? void 0 : o.constructor) === Function && (r = /** @type {Array<string|Symbol|Object|number>} */
  /** @type {[function]} */
  r[0]());
  const t = [], e = [], s = Zt();
  let i = [], n = 0;
  for (; n < r.length; n++) {
    const a = r[n], l = Qg[a];
    if (l !== void 0)
      s.set(l.left, l.right);
    else {
      if (a === void 0)
        break;
      if (a.constructor === String || a.constructor === Number) {
        const c = Wg(s);
        n > 0 || c.length > 0 ? (t.push("%c" + a), e.push(c)) : t.push(a);
      } else
        break;
    }
  }
  for (n > 0 && (i = e, i.unshift(t.join(""))); n < r.length; n++) {
    const a = r[n];
    a instanceof Symbol || i.push(a);
  }
  return i;
}, mu = pg ? t1 : Jg, Al = (...r) => {
  console.log(...mu(r)), _u.forEach((t) => t.print(r));
}, e1 = (...r) => {
  console.warn(...mu(r)), r.unshift(_c), _u.forEach((t) => t.print(r));
}, _u = dr(), vu = (r) => ({
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return this;
  },
  // @ts-ignore
  next: r
}), s1 = (r, t) => vu(() => {
  let e;
  do
    e = r.next();
  while (!e.done && !t(e.value));
  return e;
}), Za = (r, t) => vu(() => {
  const { done: e, value: s } = r.next();
  return { done: e, value: e ? void 0 : t(s) };
});
class r1 extends gc {
  /**
   * @param {Doc} ydoc
   * @param {any} awareness
   */
  constructor(t, e) {
    super(), this.doc = t, this.awareness = e;
  }
}
class vc {
  /**
   * @param {number} clock
   * @param {number} len
   */
  constructor(t, e) {
    this.clock = t, this.len = e;
  }
}
class hi {
  constructor() {
    this.clients = /* @__PURE__ */ new Map();
  }
}
const ur = (r, t, e) => t.clients.forEach((s, i) => {
  const n = (
    /** @type {Array<GC|Item>} */
    r.doc.store.clients.get(i)
  );
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    Pu(r, n, a.clock, a.len, e);
  }
}), i1 = (r, t) => {
  let e = 0, s = r.length - 1;
  for (; e <= s; ) {
    const i = fs((e + s) / 2), n = r[i], o = n.clock;
    if (o <= t) {
      if (t < o + n.len)
        return i;
      e = i + 1;
    } else
      s = i - 1;
  }
  return null;
}, Sr = (r, t) => {
  const e = r.clients.get(t.client);
  return e !== void 0 && i1(e, t.clock) !== null;
}, yc = (r) => {
  r.clients.forEach((t) => {
    t.sort((i, n) => i.clock - n.clock);
    let e, s;
    for (e = 1, s = 1; e < t.length; e++) {
      const i = t[s - 1], n = t[e];
      i.clock + i.len >= n.clock ? i.len = br(i.len, n.clock + n.len - i.clock) : (s < e && (t[s] = n), s++);
    }
    t.length = s;
  });
}, qr = (r) => {
  const t = new hi();
  for (let e = 0; e < r.length; e++)
    r[e].clients.forEach((s, i) => {
      if (!t.clients.has(i)) {
        const n = s.slice();
        for (let o = e + 1; o < r.length; o++)
          U0(n, r[o].clients.get(i) || []);
        t.clients.set(i, n);
      }
    });
  return yc(t), t;
}, Bi = (r, t, e, s) => {
  de(r.clients, t, () => (
    /** @type {Array<DeleteItem>} */
    []
  )).push(new vc(e, s));
}, $o = () => new hi(), wc = (r) => {
  const t = $o();
  return r.clients.forEach((e, s) => {
    const i = [];
    for (let n = 0; n < e.length; n++) {
      const o = e[n];
      if (o.deleted) {
        const a = o.id.clock;
        let l = o.length;
        if (n + 1 < e.length)
          for (let c = e[n + 1]; n + 1 < e.length && c.deleted; c = e[++n + 1])
            l += c.length;
        i.push(new vc(a, l));
      }
    }
    i.length > 0 && t.clients.set(s, i);
  }), t;
}, Ke = (r, t) => {
  Y(r.restEncoder, t.clients.size), us(t.clients.entries()).sort((e, s) => s[0] - e[0]).forEach(([e, s]) => {
    r.resetDsCurVal(), Y(r.restEncoder, e);
    const i = s.length;
    Y(r.restEncoder, i);
    for (let n = 0; n < i; n++) {
      const o = s[n];
      r.writeDsClock(o.clock), r.writeDsLen(o.len);
    }
  });
}, ps = (r) => {
  const t = new hi(), e = Q(r.restDecoder);
  for (let s = 0; s < e; s++) {
    r.resetDsCurVal();
    const i = Q(r.restDecoder), n = Q(r.restDecoder);
    if (n > 0) {
      const o = de(t.clients, i, () => (
        /** @type {Array<DeleteItem>} */
        []
      ));
      for (let a = 0; a < n; a++)
        o.push(new vc(r.readDsClock(), r.readDsLen()));
    }
  }
  return t;
}, Mh = (r, t, e) => {
  const s = new hi(), i = Q(r.restDecoder);
  for (let n = 0; n < i; n++) {
    r.resetDsCurVal();
    const o = Q(r.restDecoder), a = Q(r.restDecoder), l = e.clients.get(o) || [], c = Et(e, o);
    for (let h = 0; h < a; h++) {
      const d = r.readDsClock(), u = d + r.readDsLen();
      if (d < c) {
        c < u && Bi(s, o, c, u - c);
        let p = Ae(l, d), f = l[p];
        for (!f.deleted && f.id.clock < d && (l.splice(p + 1, 0, io(t, f, d - f.id.clock)), p++); p < l.length && (f = l[p++], f.id.clock < u); )
          f.deleted || (u < f.id.clock + f.length && l.splice(p, 0, io(t, f, u - f.id.clock)), f.delete(t));
      } else
        Bi(s, o, d, u - d);
    }
  }
  if (s.clients.size > 0) {
    const n = new Ue();
    return Y(n.restEncoder, 0), Ke(n, s), n.toUint8Array();
  }
  return null;
}, yu = (r, t) => {
  if (r.clients.size !== t.clients.size)
    return !1;
  for (const [e, s] of r.clients.entries()) {
    const i = (
      /** @type {Array<import('../internals.js').DeleteItem>} */
      t.clients.get(e)
    );
    if (i === void 0 || s.length !== i.length)
      return !1;
    for (let n = 0; n < s.length; n++) {
      const o = s[n], a = i[n];
      if (o.clock !== a.clock || o.len !== a.len)
        return !1;
    }
  }
  return !0;
}, wu = uu;
class Je extends gc {
  /**
   * @param {DocOpts} opts configuration
   */
  constructor({ guid: t = mc(), collectionid: e = null, gc: s = !0, gcFilter: i = () => !0, meta: n = null, autoLoad: o = !1, shouldLoad: a = !0 } = {}) {
    super(), this.gc = s, this.gcFilter = i, this.clientID = wu(), this.guid = t, this.collectionid = e, this.share = /* @__PURE__ */ new Map(), this.store = new Au(), this._transaction = null, this._transactionCleanups = [], this.subdocs = /* @__PURE__ */ new Set(), this._item = null, this.shouldLoad = a, this.autoLoad = o, this.meta = n, this.isLoaded = !1, this.isSynced = !1, this.whenLoaded = Ah((c) => {
      this.on("load", () => {
        this.isLoaded = !0, c(this);
      });
    });
    const l = () => Ah((c) => {
      const h = (d) => {
        (d === void 0 || d === !0) && (this.off("sync", h), c());
      };
      this.on("sync", h);
    });
    this.on("sync", (c) => {
      c === !1 && this.isSynced && (this.whenSynced = l()), this.isSynced = c === void 0 || c === !0, this.isSynced && !this.isLoaded && this.emit("load", [this]);
    }), this.whenSynced = l();
  }
  /**
   * Notify the parent document that you request to load data into this subdocument (if it is a subdocument).
   *
   * `load()` might be used in the future to request any provider to load the most current data.
   *
   * It is safe to call `load()` multiple times.
   */
  load() {
    const t = this._item;
    t !== null && !this.shouldLoad && mt(
      /** @type {any} */
      t.parent.doc,
      (e) => {
        e.subdocsLoaded.add(this);
      },
      null,
      !0
    ), this.shouldLoad = !0;
  }
  getSubdocs() {
    return this.subdocs;
  }
  getSubdocGuids() {
    return new Set(us(this.subdocs).map((t) => t.guid));
  }
  /**
   * Changes that happen inside of a transaction are bundled. This means that
   * the observer fires _after_ the transaction is finished and that all changes
   * that happened inside of the transaction are sent as one message to the
   * other peers.
   *
   * @template T
   * @param {function(Transaction):T} f The function that should be executed as a transaction
   * @param {any} [origin] Origin of who started the transaction. Will be stored on transaction.origin
   * @return T
   *
   * @public
   */
  transact(t, e = null) {
    return mt(this, t, e);
  }
  /**
   * Define a shared data type.
   *
   * Multiple calls of `y.get(name, TypeConstructor)` yield the same result
   * and do not overwrite each other. I.e.
   * `y.define(name, Y.Array) === y.define(name, Y.Array)`
   *
   * After this method is called, the type is also available on `y.share.get(name)`.
   *
   * *Best Practices:*
   * Define all types right after the Yjs instance is created and store them in a separate object.
   * Also use the typed methods `getText(name)`, `getArray(name)`, ..
   *
   * @template {typeof AbstractType<any>} Type
   * @example
   *   const y = new Y(..)
   *   const appState = {
   *     document: y.getText('document')
   *     comments: y.getArray('comments')
   *   }
   *
   * @param {string} name
   * @param {Type} TypeConstructor The constructor of the type definition. E.g. Y.Text, Y.Array, Y.Map, ...
   * @return {InstanceType<Type>} The created type. Constructed with TypeConstructor
   *
   * @public
   */
  get(t, e = (
    /** @type {any} */
    zt
  )) {
    const s = de(this.share, t, () => {
      const n = new e();
      return n._integrate(this, null), n;
    }), i = s.constructor;
    if (e !== zt && i !== e)
      if (i === zt) {
        const n = new e();
        n._map = s._map, s._map.forEach(
          /** @param {Item?} n */
          (o) => {
            for (; o !== null; o = o.left)
              o.parent = n;
          }
        ), n._start = s._start;
        for (let o = n._start; o !== null; o = o.right)
          o.parent = n;
        return n._length = s._length, this.share.set(t, n), n._integrate(this, null), /** @type {InstanceType<Type>} */
        n;
      } else
        throw new Error(`Type with the name ${t} has already been defined with a different constructor`);
    return (
      /** @type {InstanceType<Type>} */
      s
    );
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YArray<T>}
   *
   * @public
   */
  getArray(t = "") {
    return (
      /** @type {YArray<T>} */
      this.get(t, Ht)
    );
  }
  /**
   * @param {string} [name]
   * @return {YText}
   *
   * @public
   */
  getText(t = "") {
    return this.get(t, Jt);
  }
  /**
   * @template T
   * @param {string} [name]
   * @return {YMap<T>}
   *
   * @public
   */
  getMap(t = "") {
    return (
      /** @type {YMap<T>} */
      this.get(t, Wt)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlElement}
   *
   * @public
   */
  getXmlElement(t = "") {
    return (
      /** @type {YXmlElement<{[key:string]:string}>} */
      this.get(t, $s)
    );
  }
  /**
   * @param {string} [name]
   * @return {YXmlFragment}
   *
   * @public
   */
  getXmlFragment(t = "") {
    return this.get(t, Bs);
  }
  /**
   * Converts the entire document into a js object, recursively traversing each yjs type
   * Doesn't log types that have not been defined (using ydoc.getType(..)).
   *
   * @deprecated Do not use this method and rather call toJSON directly on the shared types.
   *
   * @return {Object<string, any>}
   */
  toJSON() {
    const t = {};
    return this.share.forEach((e, s) => {
      t[s] = e.toJSON();
    }), t;
  }
  /**
   * Emit `destroy` event and unregister all event handlers.
   */
  destroy() {
    us(this.subdocs).forEach((e) => e.destroy());
    const t = this._item;
    if (t !== null) {
      this._item = null;
      const e = (
        /** @type {ContentDoc} */
        t.content
      );
      e.doc = new Je({ guid: this.guid, ...e.opts, shouldLoad: !1 }), e.doc._item = t, mt(
        /** @type {any} */
        t.parent.doc,
        (s) => {
          const i = e.doc;
          t.deleted || s.subdocsAdded.add(i), s.subdocsRemoved.add(this);
        },
        null,
        !0
      );
    }
    this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy();
  }
}
class $i {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    this.restDecoder = t;
  }
  resetDsCurVal() {
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return Q(this.restDecoder);
  }
  /**
   * @return {number}
   */
  readDsLen() {
    return Q(this.restDecoder);
  }
}
class Pe extends $i {
  /**
   * @return {ID}
   */
  readLeftID() {
    return K(Q(this.restDecoder), Q(this.restDecoder));
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return K(Q(this.restDecoder), Q(this.restDecoder));
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return Q(this.restDecoder);
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return Yr(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readString() {
    return ar(this.restDecoder);
  }
  /**
   * @return {boolean} isKey
   */
  readParentInfo() {
    return Q(this.restDecoder) === 1;
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readTypeRef() {
    return Q(this.restDecoder);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number} len
   */
  readLen() {
    return Q(this.restDecoder);
  }
  /**
   * @return {any}
   */
  readAny() {
    return Li(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return Ug(_e(this.restDecoder));
  }
  /**
   * Legacy implementation uses JSON parse. We use any-decoding in v2.
   *
   * @return {any}
   */
  readJSON() {
    return JSON.parse(ar(this.restDecoder));
  }
  /**
   * @return {string}
   */
  readKey() {
    return ar(this.restDecoder);
  }
}
class bu {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    this.dsCurrVal = 0, this.restDecoder = t;
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @return {number}
   */
  readDsClock() {
    return this.dsCurrVal += Q(this.restDecoder), this.dsCurrVal;
  }
  /**
   * @return {number}
   */
  readDsLen() {
    const t = Q(this.restDecoder) + 1;
    return this.dsCurrVal += t, t;
  }
}
class be extends bu {
  /**
   * @param {decoding.Decoder} decoder
   */
  constructor(t) {
    super(t), this.keys = [], Q(t), this.keyClockDecoder = new Xa(_e(t)), this.clientDecoder = new Vn(_e(t)), this.leftClockDecoder = new Xa(_e(t)), this.rightClockDecoder = new Xa(_e(t)), this.infoDecoder = new Th(_e(t), Yr), this.stringDecoder = new Ng(_e(t)), this.parentInfoDecoder = new Th(_e(t), Yr), this.typeRefDecoder = new Vn(_e(t)), this.lenDecoder = new Vn(_e(t));
  }
  /**
   * @return {ID}
   */
  readLeftID() {
    return new lr(this.clientDecoder.read(), this.leftClockDecoder.read());
  }
  /**
   * @return {ID}
   */
  readRightID() {
    return new lr(this.clientDecoder.read(), this.rightClockDecoder.read());
  }
  /**
   * Read the next client id.
   * Use this in favor of readID whenever possible to reduce the number of objects created.
   */
  readClient() {
    return this.clientDecoder.read();
  }
  /**
   * @return {number} info An unsigned 8-bit integer
   */
  readInfo() {
    return (
      /** @type {number} */
      this.infoDecoder.read()
    );
  }
  /**
   * @return {string}
   */
  readString() {
    return this.stringDecoder.read();
  }
  /**
   * @return {boolean}
   */
  readParentInfo() {
    return this.parentInfoDecoder.read() === 1;
  }
  /**
   * @return {number} An unsigned 8-bit integer
   */
  readTypeRef() {
    return this.typeRefDecoder.read();
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @return {number}
   */
  readLen() {
    return this.lenDecoder.read();
  }
  /**
   * @return {any}
   */
  readAny() {
    return Li(this.restDecoder);
  }
  /**
   * @return {Uint8Array}
   */
  readBuf() {
    return _e(this.restDecoder);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @return {any}
   */
  readJSON() {
    return Li(this.restDecoder);
  }
  /**
   * @return {string}
   */
  readKey() {
    const t = this.keyClockDecoder.read();
    if (t < this.keys.length)
      return this.keys[t];
    {
      const e = this.stringDecoder.read();
      return this.keys.push(e), e;
    }
  }
}
class Kr {
  constructor() {
    this.restEncoder = ci();
  }
  toUint8Array() {
    return Te(this.restEncoder);
  }
  resetDsCurVal() {
  }
  /**
   * @param {number} clock
   */
  writeDsClock(t) {
    Y(this.restEncoder, t);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    Y(this.restEncoder, t);
  }
}
class qs extends Kr {
  /**
   * @param {ID} id
   */
  writeLeftID(t) {
    Y(this.restEncoder, t.client), Y(this.restEncoder, t.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(t) {
    Y(this.restEncoder, t.client), Y(this.restEncoder, t.clock);
  }
  /**
   * Use writeClient and writeClock instead of writeID if possible.
   * @param {number} client
   */
  writeClient(t) {
    Y(this.restEncoder, t);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(t) {
    Ni(this.restEncoder, t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    or(this.restEncoder, t);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(t) {
    Y(this.restEncoder, t ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(t) {
    Y(this.restEncoder, t);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(t) {
    Y(this.restEncoder, t);
  }
  /**
   * @param {any} any
   */
  writeAny(t) {
    Fi(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    me(this.restEncoder, t);
  }
  /**
   * @param {any} embed
   */
  writeJSON(t) {
    or(this.restEncoder, JSON.stringify(t));
  }
  /**
   * @param {string} key
   */
  writeKey(t) {
    or(this.restEncoder, t);
  }
}
class Uo {
  constructor() {
    this.restEncoder = ci(), this.dsCurrVal = 0;
  }
  toUint8Array() {
    return Te(this.restEncoder);
  }
  resetDsCurVal() {
    this.dsCurrVal = 0;
  }
  /**
   * @param {number} clock
   */
  writeDsClock(t) {
    const e = t - this.dsCurrVal;
    this.dsCurrVal = t, Y(this.restEncoder, e);
  }
  /**
   * @param {number} len
   */
  writeDsLen(t) {
    t === 0 && pe(), Y(this.restEncoder, t - 1), this.dsCurrVal += t;
  }
}
class Ue extends Uo {
  constructor() {
    super(), this.keyMap = /* @__PURE__ */ new Map(), this.keyClock = 0, this.keyClockEncoder = new Ka(), this.clientEncoder = new Gn(), this.leftClockEncoder = new Ka(), this.rightClockEncoder = new Ka(), this.infoEncoder = new xh(Ni), this.stringEncoder = new Tg(), this.parentInfoEncoder = new xh(Ni), this.typeRefEncoder = new Gn(), this.lenEncoder = new Gn();
  }
  toUint8Array() {
    const t = ci();
    return Y(t, 0), me(t, this.keyClockEncoder.toUint8Array()), me(t, this.clientEncoder.toUint8Array()), me(t, this.leftClockEncoder.toUint8Array()), me(t, this.rightClockEncoder.toUint8Array()), me(t, Te(this.infoEncoder)), me(t, this.stringEncoder.toUint8Array()), me(t, Te(this.parentInfoEncoder)), me(t, this.typeRefEncoder.toUint8Array()), me(t, this.lenEncoder.toUint8Array()), mn(t, Te(this.restEncoder)), Te(t);
  }
  /**
   * @param {ID} id
   */
  writeLeftID(t) {
    this.clientEncoder.write(t.client), this.leftClockEncoder.write(t.clock);
  }
  /**
   * @param {ID} id
   */
  writeRightID(t) {
    this.clientEncoder.write(t.client), this.rightClockEncoder.write(t.clock);
  }
  /**
   * @param {number} client
   */
  writeClient(t) {
    this.clientEncoder.write(t);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeInfo(t) {
    this.infoEncoder.write(t);
  }
  /**
   * @param {string} s
   */
  writeString(t) {
    this.stringEncoder.write(t);
  }
  /**
   * @param {boolean} isYKey
   */
  writeParentInfo(t) {
    this.parentInfoEncoder.write(t ? 1 : 0);
  }
  /**
   * @param {number} info An unsigned 8-bit integer
   */
  writeTypeRef(t) {
    this.typeRefEncoder.write(t);
  }
  /**
   * Write len of a struct - well suited for Opt RLE encoder.
   *
   * @param {number} len
   */
  writeLen(t) {
    this.lenEncoder.write(t);
  }
  /**
   * @param {any} any
   */
  writeAny(t) {
    Fi(this.restEncoder, t);
  }
  /**
   * @param {Uint8Array} buf
   */
  writeBuf(t) {
    me(this.restEncoder, t);
  }
  /**
   * This is mainly here for legacy purposes.
   *
   * Initial we incoded objects using JSON. Now we use the much faster lib0/any-encoder. This method mainly exists for legacy purposes for the v1 encoder.
   *
   * @param {any} embed
   */
  writeJSON(t) {
    Fi(this.restEncoder, t);
  }
  /**
   * Property keys are often reused. For example, in y-prosemirror the key `bold` might
   * occur very often. For a 3d application, the key `position` might occur very often.
   *
   * We cache these keys in a Map and refer to them via a unique number.
   *
   * @param {string} key
   */
  writeKey(t) {
    const e = this.keyMap.get(t);
    e === void 0 ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(t)) : this.keyClockEncoder.write(e);
  }
}
const n1 = (r, t, e, s) => {
  s = br(s, t[0].id.clock);
  const i = Ae(t, s);
  Y(r.restEncoder, t.length - i), r.writeClient(e), Y(r.restEncoder, s);
  const n = t[i];
  n.write(r, s - n.id.clock);
  for (let o = i + 1; o < t.length; o++)
    t[o].write(r, 0);
}, bc = (r, t, e) => {
  const s = /* @__PURE__ */ new Map();
  e.forEach((i, n) => {
    Et(t, n) > i && s.set(n, i);
  }), _n(t).forEach((i, n) => {
    e.has(n) || s.set(n, 0);
  }), Y(r.restEncoder, s.size), us(s.entries()).sort((i, n) => n[0] - i[0]).forEach(([i, n]) => {
    n1(
      r,
      /** @type {Array<GC|Item>} */
      t.clients.get(i),
      i,
      n
    );
  });
}, o1 = (r, t) => {
  const e = Zt(), s = Q(r.restDecoder);
  for (let i = 0; i < s; i++) {
    const n = Q(r.restDecoder), o = new Array(n), a = r.readClient();
    let l = Q(r.restDecoder);
    e.set(a, { i: 0, refs: o });
    for (let c = 0; c < n; c++) {
      const h = r.readInfo();
      switch (No & h) {
        case 0: {
          const d = r.readLen();
          o[c] = new ue(K(a, l), d), l += d;
          break;
        }
        case 10: {
          const d = Q(r.restDecoder);
          o[c] = new le(K(a, l), d), l += d;
          break;
        }
        default: {
          const d = (h & (as | we)) === 0, u = new ft(
            K(a, l),
            null,
            // leftd
            (h & we) === we ? r.readLeftID() : null,
            // origin
            null,
            // right
            (h & as) === as ? r.readRightID() : null,
            // right origin
            d ? r.readParentInfo() ? t.get(r.readString()) : r.readLeftID() : null,
            // parent
            d && (h & Ii) === Ii ? r.readString() : null,
            // parentSub
            hf(r, h)
            // item content
          );
          o[c] = u, l += u.length;
        }
      }
    }
  }
  return e;
}, a1 = (r, t, e) => {
  const s = [];
  let i = us(e.keys()).sort((p, f) => p - f);
  if (i.length === 0)
    return null;
  const n = () => {
    if (i.length === 0)
      return null;
    let p = (
      /** @type {{i:number,refs:Array<GC|Item>}} */
      e.get(i[i.length - 1])
    );
    for (; p.refs.length === p.i; )
      if (i.pop(), i.length > 0)
        p = /** @type {{i:number,refs:Array<GC|Item>}} */
        e.get(i[i.length - 1]);
      else
        return null;
    return p;
  };
  let o = n();
  if (o === null)
    return null;
  const a = new Au(), l = /* @__PURE__ */ new Map(), c = (p, f) => {
    const m = l.get(p);
    (m == null || m > f) && l.set(p, f);
  };
  let h = (
    /** @type {any} */
    o.refs[
      /** @type {any} */
      o.i++
    ]
  );
  const d = /* @__PURE__ */ new Map(), u = () => {
    for (const p of s) {
      const f = p.id.client, m = e.get(f);
      m ? (m.i--, a.clients.set(f, m.refs.slice(m.i)), e.delete(f), m.i = 0, m.refs = []) : a.clients.set(f, [p]), i = i.filter((_) => _ !== f);
    }
    s.length = 0;
  };
  for (; ; ) {
    if (h.constructor !== le) {
      const f = de(d, h.id.client, () => Et(t, h.id.client)) - h.id.clock;
      if (f < 0)
        s.push(h), c(h.id.client, h.id.clock - 1), u();
      else {
        const m = h.getMissing(r, t);
        if (m !== null) {
          s.push(h);
          const _ = e.get(
            /** @type {number} */
            m
          ) || { refs: [], i: 0 };
          if (_.refs.length === _.i)
            c(
              /** @type {number} */
              m,
              Et(t, m)
            ), u();
          else {
            h = _.refs[_.i++];
            continue;
          }
        } else
          (f === 0 || f < h.length) && (h.integrate(r, f), d.set(h.id.client, h.id.clock + h.length));
      }
    }
    if (s.length > 0)
      h = /** @type {GC|Item} */
      s.pop();
    else if (o !== null && o.i < o.refs.length)
      h = /** @type {GC|Item} */
      o.refs[o.i++];
    else {
      if (o = n(), o === null)
        break;
      h = /** @type {GC|Item} */
      o.refs[o.i++];
    }
  }
  if (a.clients.size > 0) {
    const p = new Ue();
    return bc(p, a, /* @__PURE__ */ new Map()), Y(p.restEncoder, 0), { missing: l, update: p.toUint8Array() };
  }
  return null;
}, l1 = (r, t) => bc(r, t.doc.store, t.beforeState), Sc = (r, t, e, s = new be(r)) => mt(t, (i) => {
  i.local = !1;
  let n = !1;
  const o = i.doc, a = o.store, l = o1(s, o), c = a1(i, a, l), h = a.pendingStructs;
  if (h) {
    for (const [u, p] of h.missing)
      if (p < Et(a, u)) {
        n = !0;
        break;
      }
    if (c) {
      for (const [u, p] of c.missing) {
        const f = h.missing.get(u);
        (f == null || f > p) && h.missing.set(u, p);
      }
      h.update = Gi([h.update, c.update]);
    }
  } else
    a.pendingStructs = c;
  const d = Mh(s, i, a);
  if (a.pendingDs) {
    const u = new be(ie(a.pendingDs));
    Q(u.restDecoder);
    const p = Mh(u, i, a);
    d && p ? a.pendingDs = Gi([d, p]) : a.pendingDs = d || p;
  } else
    a.pendingDs = d;
  if (n) {
    const u = (
      /** @type {{update: Uint8Array}} */
      a.pendingStructs.update
    );
    a.pendingStructs = null, Go(i.doc, u);
  }
}, e, !1), c1 = (r, t, e) => Sc(r, t, e, new Pe(r)), Go = (r, t, e, s = be) => {
  const i = ie(t);
  Sc(i, r, e, new s(i));
}, h1 = (r, t, e) => Go(r, t, e, Pe), d1 = (r, t, e = /* @__PURE__ */ new Map()) => {
  bc(r, t.store, e), Ke(r, wc(t.store));
}, Su = (r, t = new Uint8Array([0]), e = new Ue()) => {
  const s = kc(t);
  d1(e, r, s);
  const i = [e.toUint8Array()];
  if (r.store.pendingDs && i.push(r.store.pendingDs), r.store.pendingStructs && i.push(Pc(r.store.pendingStructs.update, t)), i.length > 1) {
    if (e.constructor === qs)
      return Lu(i.map((n, o) => o === 0 ? n : Vu(n)));
    if (e.constructor === Ue)
      return Gi(i);
  }
  return i[0];
}, u1 = (r, t) => Su(r, t, new qs()), ku = (r) => {
  const t = /* @__PURE__ */ new Map(), e = Q(r.restDecoder);
  for (let s = 0; s < e; s++) {
    const i = Q(r.restDecoder), n = Q(r.restDecoder);
    t.set(i, n);
  }
  return t;
}, kc = (r) => ku(new $i(ie(r))), xc = (r, t) => (Y(r.restEncoder, t.size), us(t.entries()).sort((e, s) => s[0] - e[0]).forEach(([e, s]) => {
  Y(r.restEncoder, e), Y(r.restEncoder, s);
}), r), f1 = (r, t) => xc(r, _n(t.store)), p1 = (r, t = new Uo()) => (r instanceof Map ? xc(t, r) : f1(t, r), t.toUint8Array()), g1 = (r) => p1(r, new Kr());
class m1 {
  constructor() {
    this.l = [];
  }
}
const Ph = () => new m1(), Oh = (r, t) => r.l.push(t), Rh = (r, t) => {
  const e = r.l, s = e.length;
  r.l = e.filter((i) => t !== i), s === r.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.");
}, xu = (r, t, e) => uc(r.l, [t, e]);
class lr {
  /**
   * @param {number} client client id
   * @param {number} clock unique per client id, continuous number
   */
  constructor(t, e) {
    this.client = t, this.clock = e;
  }
}
const sr = (r, t) => r === t || r !== null && t !== null && r.client === t.client && r.clock === t.clock, K = (r, t) => new lr(r, t), Dh = (r, t) => {
  Y(r, t.client), Y(r, t.clock);
}, Ih = (r) => K(Q(r), Q(r)), Cc = (r) => {
  for (const [t, e] of r.doc.share.entries())
    if (e === r)
      return t;
  throw pe();
}, Ui = (r, t) => {
  for (; t !== null; ) {
    if (t.parent === r)
      return !0;
    t = /** @type {AbstractType<any>} */
    t.parent._item;
  }
  return !1;
}, _1 = (r) => {
  const t = [];
  let e = r._start;
  for (; e; )
    t.push(e), e = e.right;
  console.log("Children: ", t), console.log("Children content: ", t.filter((s) => !s.deleted).map((s) => s.content));
};
class v1 {
  /**
   * @param {Doc} doc
   * @param {YMap<any>} [storeType]
   */
  constructor(t, e = t.getMap("users")) {
    const s = /* @__PURE__ */ new Map();
    this.yusers = e, this.doc = t, this.clients = /* @__PURE__ */ new Map(), this.dss = s;
    const i = (n, o) => {
      const a = n.get("ds"), l = n.get("ids"), c = (
        /** @param {number} clientid */
        (h) => this.clients.set(h, o)
      );
      a.observe(
        /** @param {YArrayEvent<any>} event */
        (h) => {
          h.changes.added.forEach((d) => {
            d.content.getContent().forEach((u) => {
              u instanceof Uint8Array && this.dss.set(o, qr([this.dss.get(o) || $o(), ps(new $i(ie(u)))]));
            });
          });
        }
      ), this.dss.set(o, qr(a.map((h) => ps(new $i(ie(h)))))), l.observe(
        /** @param {YArrayEvent<any>} event */
        (h) => h.changes.added.forEach((d) => d.content.getContent().forEach(c))
      ), l.forEach(c);
    };
    e.observe((n) => {
      n.keysChanged.forEach(
        (o) => i(e.get(o), o)
      );
    }), e.forEach(i);
  }
  /**
   * @param {Doc} doc
   * @param {number} clientid
   * @param {string} userDescription
   * @param {Object} conf
   * @param {function(Transaction, DeleteSet):boolean} [conf.filter]
   */
  setUserMapping(t, e, s, { filter: i = () => !0 } = {}) {
    const n = this.yusers;
    let o = n.get(s);
    o || (o = new Wt(), o.set("ids", new Ht()), o.set("ds", new Ht()), n.set(s, o)), o.get("ids").push([e]), n.observe((a) => {
      setTimeout(() => {
        const l = n.get(s);
        if (l !== o) {
          o = l, this.clients.forEach((d, u) => {
            s === d && o.get("ids").push([u]);
          });
          const c = new Kr(), h = this.dss.get(s);
          h && (Ke(c, h), o.get("ds").push([c.toUint8Array()]));
        }
      }, 0);
    }), t.on(
      "afterTransaction",
      /** @param {Transaction} transaction */
      (a) => {
        setTimeout(() => {
          const l = o.get("ds"), c = a.deleteSet;
          if (a.local && c.clients.size > 0 && i(a, c)) {
            const h = new Kr();
            Ke(h, c), l.push([h.toUint8Array()]);
          }
        });
      }
    );
  }
  /**
   * @param {number} clientid
   * @return {any}
   */
  getUserByClientId(t) {
    return this.clients.get(t) || null;
  }
  /**
   * @param {ID} id
   * @return {string | null}
   */
  getUserByDeletedId(t) {
    for (const [e, s] of this.dss.entries())
      if (Sr(s, t))
        return e;
    return null;
  }
}
class Vo {
  /**
   * @param {ID|null} type
   * @param {string|null} tname
   * @param {ID|null} item
   * @param {number} assoc
   */
  constructor(t, e, s, i = 0) {
    this.type = t, this.tname = e, this.item = s, this.assoc = i;
  }
}
const y1 = (r) => {
  const t = {};
  return r.type && (t.type = r.type), r.tname && (t.tname = r.tname), r.item && (t.item = r.item), r.assoc != null && (t.assoc = r.assoc), t;
}, w1 = (r) => new Vo(r.type == null ? null : K(r.type.client, r.type.clock), r.tname || null, r.item == null ? null : K(r.item.client, r.item.clock), r.assoc == null ? 0 : r.assoc);
class Cu {
  /**
   * @param {AbstractType<any>} type
   * @param {number} index
   * @param {number} [assoc]
   */
  constructor(t, e, s = 0) {
    this.type = t, this.index = e, this.assoc = s;
  }
}
const b1 = (r, t, e = 0) => new Cu(r, t, e), An = (r, t, e) => {
  let s = null, i = null;
  return r._item === null ? i = Cc(r) : s = K(r._item.id.client, r._item.id.clock), new Vo(s, i, t, e);
}, S1 = (r, t, e = 0) => {
  let s = r._start;
  if (e < 0) {
    if (t === 0)
      return An(r, null, e);
    t--;
  }
  for (; s !== null; ) {
    if (!s.deleted && s.countable) {
      if (s.length > t)
        return An(r, K(s.id.client, s.id.clock + t), e);
      t -= s.length;
    }
    if (s.right === null && e < 0)
      return An(r, s.lastId, e);
    s = s.right;
  }
  return An(r, null, e);
}, k1 = (r, t) => {
  const { type: e, tname: s, item: i, assoc: n } = t;
  if (i !== null)
    Y(r, 0), Dh(r, i);
  else if (s !== null)
    Ni(r, 1), or(r, s);
  else if (e !== null)
    Ni(r, 2), Dh(r, e);
  else
    throw pe();
  return Fo(r, n), r;
}, x1 = (r) => {
  const t = ci();
  return k1(t, r), Te(t);
}, C1 = (r) => {
  let t = null, e = null, s = null;
  switch (Q(r)) {
    case 0:
      s = Ih(r);
      break;
    case 1:
      e = ar(r);
      break;
    case 2:
      t = Ih(r);
  }
  const i = du(r) ? Bo(r) : 0;
  return new Vo(t, e, s, i);
}, E1 = (r) => C1(ie(r)), T1 = (r, t) => {
  const e = t.store, s = r.item, i = r.type, n = r.tname, o = r.assoc;
  let a = null, l = 0;
  if (s !== null) {
    if (Et(e, s.client) <= s.clock)
      return null;
    const c = Rl(e, s), h = c.item;
    if (!(h instanceof ft))
      return null;
    if (a = /** @type {AbstractType<any>} */
    h.parent, a._item === null || !a._item.deleted) {
      l = h.deleted || !h.countable ? 0 : c.diff + (o >= 0 ? 0 : 1);
      let d = h.left;
      for (; d !== null; )
        !d.deleted && d.countable && (l += d.length), d = d.left;
    }
  } else {
    if (n !== null)
      a = t.get(n);
    else if (i !== null) {
      if (Et(e, i.client) <= i.clock)
        return null;
      const { item: c } = Rl(e, i);
      if (c instanceof ft && c.content instanceof Oe)
        a = c.content.type;
      else
        return null;
    } else
      throw pe();
    o >= 0 ? l = a._length : l = 0;
  }
  return b1(a, l, r.assoc);
}, A1 = (r, t) => r === t || r !== null && t !== null && r.tname === t.tname && sr(r.item, t.item) && sr(r.type, t.type) && r.assoc === t.assoc;
class Ec {
  /**
   * @param {DeleteSet} ds
   * @param {Map<number,number>} sv state map
   */
  constructor(t, e) {
    this.ds = t, this.sv = e;
  }
}
const M1 = (r, t) => {
  const e = r.ds.clients, s = t.ds.clients, i = r.sv, n = t.sv;
  if (i.size !== n.size || e.size !== s.size)
    return !1;
  for (const [o, a] of i.entries())
    if (n.get(o) !== a)
      return !1;
  for (const [o, a] of e.entries()) {
    const l = s.get(o) || [];
    if (a.length !== l.length)
      return !1;
    for (let c = 0; c < a.length; c++) {
      const h = a[c], d = l[c];
      if (h.clock !== d.clock || h.len !== d.len)
        return !1;
    }
  }
  return !0;
}, Eu = (r, t = new Uo()) => (Ke(t, r.ds), xc(t, r.sv), t.toUint8Array()), P1 = (r) => Eu(r, new Kr()), Tu = (r, t = new bu(ie(r))) => new Ec(ps(t), ku(t)), O1 = (r) => Tu(r, new $i(ie(r))), Tc = (r, t) => new Ec(r, t), R1 = Tc($o(), /* @__PURE__ */ new Map()), D1 = (r) => Tc(wc(r.store), _n(r.store)), Ms = (r, t) => t === void 0 ? !r.deleted : t.sv.has(r.id.client) && (t.sv.get(r.id.client) || 0) > r.id.clock && !Sr(t.ds, r.id), Ml = (r, t) => {
  const e = de(r.meta, Ml, dr), s = r.doc.store;
  e.has(t) || (t.sv.forEach((i, n) => {
    i < Et(s, n) && ae(r, K(n, i));
  }), ur(r, t.ds, (i) => {
  }), e.add(t));
}, I1 = (r, t, e = new Je()) => {
  if (r.gc)
    throw new Error("Garbage-collection must be disabled in `originDoc`!");
  const { sv: s, ds: i } = t, n = new Ue();
  return r.transact((o) => {
    let a = 0;
    s.forEach((l) => {
      l > 0 && a++;
    }), Y(n.restEncoder, a);
    for (const [l, c] of s) {
      if (c === 0)
        continue;
      c < Et(r.store, l) && ae(o, K(l, c));
      const h = r.store.clients.get(l) || [], d = Ae(h, c - 1);
      Y(n.restEncoder, d + 1), n.writeClient(l), Y(n.restEncoder, 0);
      for (let u = 0; u <= d; u++)
        h[u].write(n, 0);
    }
    Ke(n, i);
  }), Go(e, n.toUint8Array(), "snapshot"), e;
}, N1 = (r, t, e = be) => {
  const s = new e(ie(t)), i = new Ks(s, !1);
  for (let o = i.curr; o !== null; o = i.next())
    if ((r.sv.get(o.id.client) || 0) < o.id.clock + o.length)
      return !1;
  const n = qr([r.ds, ps(s)]);
  return yu(r.ds, n);
}, F1 = (r, t) => N1(r, t, Pe);
class Au {
  constructor() {
    this.clients = /* @__PURE__ */ new Map(), this.pendingStructs = null, this.pendingDs = null;
  }
}
const _n = (r) => {
  const t = /* @__PURE__ */ new Map();
  return r.clients.forEach((e, s) => {
    const i = e[e.length - 1];
    t.set(s, i.id.clock + i.length);
  }), t;
}, Et = (r, t) => {
  const e = r.clients.get(t);
  if (e === void 0)
    return 0;
  const s = e[e.length - 1];
  return s.id.clock + s.length;
}, Mu = (r, t) => {
  let e = r.clients.get(t.id.client);
  if (e === void 0)
    e = [], r.clients.set(t.id.client, e);
  else {
    const s = e[e.length - 1];
    if (s.id.clock + s.length !== t.id.clock)
      throw pe();
  }
  e.push(t);
}, Ae = (r, t) => {
  let e = 0, s = r.length - 1, i = r[s], n = i.id.clock;
  if (n === t)
    return s;
  let o = fs(t / (n + i.length - 1) * s);
  for (; e <= s; ) {
    if (i = r[o], n = i.id.clock, n <= t) {
      if (t < n + i.length)
        return o;
      e = o + 1;
    } else
      s = o - 1;
    o = fs((e + s) / 2);
  }
  throw pe();
}, L1 = (r, t) => {
  const e = r.clients.get(t.client);
  return e[Ae(e, t.clock)];
}, Oi = (
  /** @type {function(StructStore,ID):Item} */
  L1
), Pl = (r, t, e) => {
  const s = Ae(t, e), i = t[s];
  return i.id.clock < e && i instanceof ft ? (t.splice(s + 1, 0, io(r, i, e - i.id.clock)), s + 1) : s;
}, ae = (r, t) => {
  const e = (
    /** @type {Array<Item>} */
    r.doc.store.clients.get(t.client)
  );
  return e[Pl(r, e, t.clock)];
}, Nh = (r, t, e) => {
  const s = t.clients.get(e.client), i = Ae(s, e.clock), n = s[i];
  return e.clock !== n.id.clock + n.length - 1 && n.constructor !== ue && s.splice(i + 1, 0, io(r, n, e.clock - n.id.clock + 1)), n;
}, B1 = (r, t, e) => {
  const s = (
    /** @type {Array<GC|Item>} */
    r.clients.get(t.id.client)
  );
  s[Ae(s, t.id.clock)] = e;
}, Pu = (r, t, e, s, i) => {
  if (s === 0)
    return;
  const n = e + s;
  let o = Pl(r, t, e), a;
  do
    a = t[o++], n < a.id.clock + a.length && Pl(r, t, n), i(a);
  while (o < t.length && t[o].id.clock < n);
};
class Ou {
  /**
   * @param {Doc} doc
   * @param {any} origin
   * @param {boolean} local
   */
  constructor(t, e, s) {
    this.doc = t, this.deleteSet = new hi(), this.beforeState = _n(t.store), this.afterState = /* @__PURE__ */ new Map(), this.changed = /* @__PURE__ */ new Map(), this.changedParentTypes = /* @__PURE__ */ new Map(), this._mergeStructs = [], this.origin = e, this.meta = /* @__PURE__ */ new Map(), this.local = s, this.subdocsAdded = /* @__PURE__ */ new Set(), this.subdocsRemoved = /* @__PURE__ */ new Set(), this.subdocsLoaded = /* @__PURE__ */ new Set(), this._needFormattingCleanup = !1;
  }
}
const Fh = (r, t) => t.deleteSet.clients.size === 0 && !Q0(t.afterState, (e, s) => t.beforeState.get(s) !== e) ? !1 : (yc(t.deleteSet), l1(r, t), Ke(r, t.deleteSet), !0), Lh = (r, t, e) => {
  const s = t._item;
  (s === null || s.id.clock < (r.beforeState.get(s.id.client) || 0) && !s.deleted) && de(r.changed, t, dr).add(e);
}, jn = (r, t) => {
  let e = r[t], s = r[t - 1], i = t;
  for (; i > 0; e = s, s = r[--i - 1]) {
    if (s.deleted === e.deleted && s.constructor === e.constructor && s.mergeWith(e)) {
      e instanceof ft && e.parentSub !== null && /** @type {AbstractType<any>} */
      e.parent._map.get(e.parentSub) === e && e.parent._map.set(
        e.parentSub,
        /** @type {Item} */
        s
      );
      continue;
    }
    break;
  }
  const n = t - i;
  return n && r.splice(t + 1 - n, n), n;
}, Ru = (r, t, e) => {
  for (const [s, i] of r.clients.entries()) {
    const n = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let o = i.length - 1; o >= 0; o--) {
      const a = i[o], l = a.clock + a.len;
      for (let c = Ae(n, a.clock), h = n[c]; c < n.length && h.id.clock < l; h = n[++c]) {
        const d = n[c];
        if (a.clock + a.len <= d.id.clock)
          break;
        d instanceof ft && d.deleted && !d.keep && e(d) && d.gc(t, !1);
      }
    }
  }
}, Du = (r, t) => {
  r.clients.forEach((e, s) => {
    const i = (
      /** @type {Array<GC|Item>} */
      t.clients.get(s)
    );
    for (let n = e.length - 1; n >= 0; n--) {
      const o = e[n], a = ou(i.length - 1, 1 + Ae(i, o.clock + o.len - 1));
      for (let l = a, c = i[l]; l > 0 && c.id.clock >= o.clock; c = i[l])
        l -= 1 + jn(i, l);
    }
  });
}, $1 = (r, t, e) => {
  Ru(r, t, e), Du(r, t);
}, Iu = (r, t) => {
  if (t < r.length) {
    const e = r[t], s = e.doc, i = s.store, n = e.deleteSet, o = e._mergeStructs;
    try {
      yc(n), e.afterState = _n(e.doc.store), s.emit("beforeObserverCalls", [e, s]);
      const a = [];
      e.changed.forEach(
        (l, c) => a.push(() => {
          (c._item === null || !c._item.deleted) && c._callObserver(e, l);
        })
      ), a.push(() => {
        e.changedParentTypes.forEach((l, c) => {
          c._dEH.l.length > 0 && (c._item === null || !c._item.deleted) && (l = l.filter(
            (h) => h.target._item === null || !h.target._item.deleted
          ), l.forEach((h) => {
            h.currentTarget = c, h._path = null;
          }), l.sort((h, d) => h.path.length - d.path.length), xu(c._dEH, l, e));
        });
      }), a.push(() => s.emit("afterTransaction", [e, s])), uc(a, []), e._needFormattingCleanup && cm(e);
    } finally {
      s.gc && Ru(n, i, s.gcFilter), Du(n, i), e.afterState.forEach((h, d) => {
        const u = e.beforeState.get(d) || 0;
        if (u !== h) {
          const p = (
            /** @type {Array<GC|Item>} */
            i.clients.get(d)
          ), f = br(Ae(p, u), 1);
          for (let m = p.length - 1; m >= f; )
            m -= 1 + jn(p, m);
        }
      });
      for (let h = o.length - 1; h >= 0; h--) {
        const { client: d, clock: u } = o[h].id, p = (
          /** @type {Array<GC|Item>} */
          i.clients.get(d)
        ), f = Ae(p, u);
        f + 1 < p.length && jn(p, f + 1) > 1 || f > 0 && jn(p, f);
      }
      if (!e.local && e.afterState.get(s.clientID) !== e.beforeState.get(s.clientID) && (Al(_c, fu, "[yjs] ", pu, gu, "Changed the client-id because another client seems to be using it."), s.clientID = wu()), s.emit("afterTransactionCleanup", [e, s]), s._observers.has("update")) {
        const h = new qs();
        Fh(h, e) && s.emit("update", [h.toUint8Array(), e.origin, s, e]);
      }
      if (s._observers.has("updateV2")) {
        const h = new Ue();
        Fh(h, e) && s.emit("updateV2", [h.toUint8Array(), e.origin, s, e]);
      }
      const { subdocsAdded: a, subdocsLoaded: l, subdocsRemoved: c } = e;
      (a.size > 0 || c.size > 0 || l.size > 0) && (a.forEach((h) => {
        h.clientID = s.clientID, h.collectionid == null && (h.collectionid = s.collectionid), s.subdocs.add(h);
      }), c.forEach((h) => s.subdocs.delete(h)), s.emit("subdocs", [{ loaded: l, added: a, removed: c }, s, e]), c.forEach((h) => h.destroy())), r.length <= t + 1 ? (s._transactionCleanups = [], s.emit("afterAllTransactions", [s, r])) : Iu(r, t + 1);
    }
  }
}, mt = (r, t, e = null, s = !0) => {
  const i = r._transactionCleanups;
  let n = !1, o = null;
  r._transaction === null && (n = !0, r._transaction = new Ou(r, e, s), i.push(r._transaction), i.length === 1 && r.emit("beforeAllTransactions", [r]), r.emit("beforeTransaction", [r._transaction, r]));
  try {
    o = t(r._transaction);
  } finally {
    if (n) {
      const a = r._transaction === i[0];
      r._transaction = null, a && Iu(i, 0);
    }
  }
  return o;
};
class U1 {
  /**
   * @param {DeleteSet} deletions
   * @param {DeleteSet} insertions
   */
  constructor(t, e) {
    this.insertions = e, this.deletions = t, this.meta = /* @__PURE__ */ new Map();
  }
}
const Bh = (r, t, e) => {
  ur(r, e.deletions, (s) => {
    s instanceof ft && t.scope.some((i) => Ui(i, s)) && Bc(s, !1);
  });
}, $h = (r, t, e) => {
  let s = null;
  const i = r.doc, n = r.scope;
  if (mt(i, (o) => {
    for (; t.length > 0 && r.currStackItem === null; ) {
      const a = i.store, l = (
        /** @type {StackItem} */
        t.pop()
      ), c = /* @__PURE__ */ new Set(), h = [];
      let d = !1;
      ur(o, l.insertions, (u) => {
        if (u instanceof ft) {
          if (u.redone !== null) {
            let { item: p, diff: f } = Rl(a, u.id);
            f > 0 && (p = ae(o, K(p.id.client, p.id.clock + f))), u = p;
          }
          !u.deleted && n.some((p) => Ui(
            p,
            /** @type {Item} */
            u
          )) && h.push(u);
        }
      }), ur(o, l.deletions, (u) => {
        u instanceof ft && n.some((p) => Ui(p, u)) && // Never redo structs in stackItem.insertions because they were created and deleted in the same capture interval.
        !Sr(l.insertions, u.id) && c.add(u);
      }), c.forEach((u) => {
        d = cf(o, u, c, l.insertions, r.ignoreRemoteMapChanges, r) !== null || d;
      });
      for (let u = h.length - 1; u >= 0; u--) {
        const p = h[u];
        r.deleteFilter(p) && (p.delete(o), d = !0);
      }
      r.currStackItem = d ? l : null;
    }
    o.changed.forEach((a, l) => {
      a.has(null) && l._searchMarker && (l._searchMarker.length = 0);
    }), s = o;
  }, r), r.currStackItem != null) {
    const o = s.changedParentTypes;
    r.emit("stack-item-popped", [{ stackItem: r.currStackItem, type: e, changedParentTypes: o, origin: r }, r]), r.currStackItem = null;
  }
  return r.currStackItem;
};
class Ac extends gc {
  /**
   * @param {AbstractType<any>|Array<AbstractType<any>>} typeScope Accepts either a single type, or an array of types
   * @param {UndoManagerOptions} options
   */
  constructor(t, {
    captureTimeout: e = 500,
    captureTransaction: s = (l) => !0,
    deleteFilter: i = () => !0,
    trackedOrigins: n = /* @__PURE__ */ new Set([null]),
    ignoreRemoteMapChanges: o = !1,
    doc: a = (
      /** @type {Doc} */
      Sl(t) ? t[0].doc : t.doc
    )
  } = {}) {
    super(), this.scope = [], this.doc = a, this.addToScope(t), this.deleteFilter = i, n.add(this), this.trackedOrigins = n, this.captureTransaction = s, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = e, this.afterTransactionHandler = (l) => {
      if (!this.captureTransaction(l) || !this.scope.some((_) => l.changedParentTypes.has(_)) || !this.trackedOrigins.has(l.origin) && (!l.origin || !this.trackedOrigins.has(l.origin.constructor)))
        return;
      const c = this.undoing, h = this.redoing, d = c ? this.redoStack : this.undoStack;
      c ? this.stopCapturing() : h || this.clear(!1, !0);
      const u = new hi();
      l.afterState.forEach((_, y) => {
        const k = l.beforeState.get(y) || 0, g = _ - k;
        g > 0 && Bi(u, y, k, g);
      });
      const p = eo();
      let f = !1;
      if (this.lastChange > 0 && p - this.lastChange < this.captureTimeout && d.length > 0 && !c && !h) {
        const _ = d[d.length - 1];
        _.deletions = qr([_.deletions, l.deleteSet]), _.insertions = qr([_.insertions, u]);
      } else
        d.push(new U1(l.deleteSet, u)), f = !0;
      !c && !h && (this.lastChange = p), ur(
        l,
        l.deleteSet,
        /** @param {Item|GC} item */
        (_) => {
          _ instanceof ft && this.scope.some((y) => Ui(y, _)) && Bc(_, !0);
        }
      );
      const m = [{ stackItem: d[d.length - 1], origin: l.origin, type: c ? "redo" : "undo", changedParentTypes: l.changedParentTypes }, this];
      f ? this.emit("stack-item-added", m) : this.emit("stack-item-updated", m);
    }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
      this.destroy();
    });
  }
  /**
   * @param {Array<AbstractType<any>> | AbstractType<any>} ytypes
   */
  addToScope(t) {
    t = Sl(t) ? t : [t], t.forEach((e) => {
      this.scope.every((s) => s !== e) && (e.doc !== this.doc && e1("[yjs#509] Not same Y.Doc"), this.scope.push(e));
    });
  }
  /**
   * @param {any} origin
   */
  addTrackedOrigin(t) {
    this.trackedOrigins.add(t);
  }
  /**
   * @param {any} origin
   */
  removeTrackedOrigin(t) {
    this.trackedOrigins.delete(t);
  }
  clear(t = !0, e = !0) {
    (t && this.canUndo() || e && this.canRedo()) && this.doc.transact((s) => {
      t && (this.undoStack.forEach((i) => Bh(s, this, i)), this.undoStack = []), e && (this.redoStack.forEach((i) => Bh(s, this, i)), this.redoStack = []), this.emit("stack-cleared", [{ undoStackCleared: t, redoStackCleared: e }]);
    });
  }
  /**
   * UndoManager merges Undo-StackItem if they are created within time-gap
   * smaller than `options.captureTimeout`. Call `um.stopCapturing()` so that the next
   * StackItem won't be merged.
   *
   *
   * @example
   *     // without stopCapturing
   *     ytext.insert(0, 'a')
   *     ytext.insert(1, 'b')
   *     um.undo()
   *     ytext.toString() // => '' (note that 'ab' was removed)
   *     // with stopCapturing
   *     ytext.insert(0, 'a')
   *     um.stopCapturing()
   *     ytext.insert(0, 'b')
   *     um.undo()
   *     ytext.toString() // => 'a' (note that only 'b' was removed)
   *
   */
  stopCapturing() {
    this.lastChange = 0;
  }
  /**
   * Undo last changes on type.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  undo() {
    this.undoing = !0;
    let t;
    try {
      t = $h(this, this.undoStack, "undo");
    } finally {
      this.undoing = !1;
    }
    return t;
  }
  /**
   * Redo last undo operation.
   *
   * @return {StackItem?} Returns StackItem if a change was applied
   */
  redo() {
    this.redoing = !0;
    let t;
    try {
      t = $h(this, this.redoStack, "redo");
    } finally {
      this.redoing = !1;
    }
    return t;
  }
  /**
   * Are undo steps available?
   *
   * @return {boolean} `true` if undo is possible
   */
  canUndo() {
    return this.undoStack.length > 0;
  }
  /**
   * Are redo steps available?
   *
   * @return {boolean} `true` if redo is possible
   */
  canRedo() {
    return this.redoStack.length > 0;
  }
  destroy() {
    this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy();
  }
}
function* G1(r) {
  const t = Q(r.restDecoder);
  for (let e = 0; e < t; e++) {
    const s = Q(r.restDecoder), i = r.readClient();
    let n = Q(r.restDecoder);
    for (let o = 0; o < s; o++) {
      const a = r.readInfo();
      if (a === 10) {
        const l = Q(r.restDecoder);
        yield new le(K(i, n), l), n += l;
      } else if (No & a) {
        const l = (a & (as | we)) === 0, c = new ft(
          K(i, n),
          null,
          // left
          (a & we) === we ? r.readLeftID() : null,
          // origin
          null,
          // right
          (a & as) === as ? r.readRightID() : null,
          // right origin
          // @ts-ignore Force writing a string here.
          l ? r.readParentInfo() ? r.readString() : r.readLeftID() : null,
          // parent
          l && (a & Ii) === Ii ? r.readString() : null,
          // parentSub
          hf(r, a)
          // item content
        );
        yield c, n += c.length;
      } else {
        const l = r.readLen();
        yield new ue(K(i, n), l), n += l;
      }
    }
  }
}
class Ks {
  /**
   * @param {UpdateDecoderV1 | UpdateDecoderV2} decoder
   * @param {boolean} filterSkips
   */
  constructor(t, e) {
    this.gen = G1(t), this.curr = null, this.done = !1, this.filterSkips = e, this.next();
  }
  /**
   * @return {Item | GC | Skip |null}
   */
  next() {
    do
      this.curr = this.gen.next().value || null;
    while (this.filterSkips && this.curr !== null && this.curr.constructor === le);
    return this.curr;
  }
}
const V1 = (r) => Nu(r, Pe), Nu = (r, t = be) => {
  const e = [], s = new t(ie(r)), i = new Ks(s, !1);
  for (let o = i.curr; o !== null; o = i.next())
    e.push(o);
  Al("Structs: ", e);
  const n = ps(s);
  Al("DeleteSet: ", n);
}, j1 = (r) => Fu(r, Pe), Fu = (r, t = be) => {
  const e = [], s = new t(ie(r)), i = new Ks(s, !1);
  for (let n = i.curr; n !== null; n = i.next())
    e.push(n);
  return {
    structs: e,
    ds: ps(s)
  };
};
class Mc {
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  constructor(t) {
    this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = [];
  }
}
const Lu = (r) => Gi(r, Pe, qs), Bu = (r, t = Uo, e = be) => {
  const s = new t(), i = new Ks(new e(ie(r)), !1);
  let n = i.curr;
  if (n !== null) {
    let o = 0, a = n.id.client, l = n.id.clock !== 0, c = l ? 0 : n.id.clock + n.length;
    for (; n !== null; n = i.next())
      a !== n.id.client && (c !== 0 && (o++, Y(s.restEncoder, a), Y(s.restEncoder, c)), a = n.id.client, c = 0, l = n.id.clock !== 0), n.constructor === le && (l = !0), l || (c = n.id.clock + n.length);
    c !== 0 && (o++, Y(s.restEncoder, a), Y(s.restEncoder, c));
    const h = ci();
    return Y(h, o), Sg(h, s.restEncoder), s.restEncoder = h, s.toUint8Array();
  } else
    return Y(s.restEncoder, 0), s.toUint8Array();
}, z1 = (r) => Bu(r, Kr, Pe), $u = (r, t = be) => {
  const e = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), i = new Ks(new t(ie(r)), !1);
  let n = i.curr;
  if (n !== null) {
    let o = n.id.client, a = n.id.clock;
    for (e.set(o, a); n !== null; n = i.next())
      o !== n.id.client && (s.set(o, a), e.set(n.id.client, n.id.clock), o = n.id.client), a = n.id.clock + n.length;
    s.set(o, a);
  }
  return { from: e, to: s };
}, H1 = (r) => $u(r, Pe), W1 = (r, t) => {
  if (r.constructor === ue) {
    const { client: e, clock: s } = r.id;
    return new ue(K(e, s + t), r.length - t);
  } else if (r.constructor === le) {
    const { client: e, clock: s } = r.id;
    return new le(K(e, s + t), r.length - t);
  } else {
    const e = (
      /** @type {Item} */
      r
    ), { client: s, clock: i } = e.id;
    return new ft(
      K(s, i + t),
      null,
      K(s, i + t - 1),
      null,
      e.rightOrigin,
      e.parent,
      e.parentSub,
      e.content.splice(t)
    );
  }
}, Gi = (r, t = be, e = Ue) => {
  if (r.length === 1)
    return r[0];
  const s = r.map((h) => new t(ie(h)));
  let i = s.map((h) => new Ks(h, !0)), n = null;
  const o = new e(), a = new Mc(o);
  for (; i = i.filter((u) => u.curr !== null), i.sort(
    /** @type {function(any,any):number} */
    (u, p) => {
      if (u.curr.id.client === p.curr.id.client) {
        const f = u.curr.id.clock - p.curr.id.clock;
        return f === 0 ? u.curr.constructor === p.curr.constructor ? 0 : u.curr.constructor === le ? 1 : -1 : f;
      } else
        return p.curr.id.client - u.curr.id.client;
    }
  ), i.length !== 0; ) {
    const h = i[0], d = (
      /** @type {Item | GC} */
      h.curr.id.client
    );
    if (n !== null) {
      let u = (
        /** @type {Item | GC | null} */
        h.curr
      ), p = !1;
      for (; u !== null && u.id.clock + u.length <= n.struct.id.clock + n.struct.length && u.id.client >= n.struct.id.client; )
        u = h.next(), p = !0;
      if (u === null || // current decoder is empty
      u.id.client !== d || // check whether there is another decoder that has has updates from `firstClient`
      p && u.id.clock > n.struct.id.clock + n.struct.length)
        continue;
      if (d !== n.struct.id.client)
        Ps(a, n.struct, n.offset), n = { struct: u, offset: 0 }, h.next();
      else if (n.struct.id.clock + n.struct.length < u.id.clock)
        if (n.struct.constructor === le)
          n.struct.length = u.id.clock + u.length - n.struct.id.clock;
        else {
          Ps(a, n.struct, n.offset);
          const f = u.id.clock - n.struct.id.clock - n.struct.length;
          n = { struct: new le(K(d, n.struct.id.clock + n.struct.length), f), offset: 0 };
        }
      else {
        const f = n.struct.id.clock + n.struct.length - u.id.clock;
        f > 0 && (n.struct.constructor === le ? n.struct.length -= f : u = W1(u, f)), n.struct.mergeWith(
          /** @type {any} */
          u
        ) || (Ps(a, n.struct, n.offset), n = { struct: u, offset: 0 }, h.next());
      }
    } else
      n = { struct: (
        /** @type {Item | GC} */
        h.curr
      ), offset: 0 }, h.next();
    for (let u = h.curr; u !== null && u.id.client === d && u.id.clock === n.struct.id.clock + n.struct.length && u.constructor !== le; u = h.next())
      Ps(a, n.struct, n.offset), n = { struct: u, offset: 0 };
  }
  n !== null && (Ps(a, n.struct, n.offset), n = null), Oc(a);
  const l = s.map((h) => ps(h)), c = qr(l);
  return Ke(o, c), o.toUint8Array();
}, Pc = (r, t, e = be, s = Ue) => {
  const i = kc(t), n = new s(), o = new Mc(n), a = new e(ie(r)), l = new Ks(a, !1);
  for (; l.curr; ) {
    const h = l.curr, d = h.id.client, u = i.get(d) || 0;
    if (l.curr.constructor === le) {
      l.next();
      continue;
    }
    if (h.id.clock + h.length > u)
      for (Ps(o, h, br(u - h.id.clock, 0)), l.next(); l.curr && l.curr.id.client === d; )
        Ps(o, l.curr, 0), l.next();
    else
      for (; l.curr && l.curr.id.client === d && l.curr.id.clock + l.curr.length <= u; )
        l.next();
  }
  Oc(o);
  const c = ps(a);
  return Ke(n, c), n.toUint8Array();
}, Y1 = (r, t) => Pc(r, t, Pe, qs), Uu = (r) => {
  r.written > 0 && (r.clientStructs.push({ written: r.written, restEncoder: Te(r.encoder.restEncoder) }), r.encoder.restEncoder = ci(), r.written = 0);
}, Ps = (r, t, e) => {
  r.written > 0 && r.currClient !== t.id.client && Uu(r), r.written === 0 && (r.currClient = t.id.client, r.encoder.writeClient(t.id.client), Y(r.encoder.restEncoder, t.id.clock + e)), t.write(r.encoder, e), r.written++;
}, Oc = (r) => {
  Uu(r);
  const t = r.encoder.restEncoder;
  Y(t, r.clientStructs.length);
  for (let e = 0; e < r.clientStructs.length; e++) {
    const s = r.clientStructs[e];
    Y(t, s.written), mn(t, s.restEncoder);
  }
}, jo = (r, t, e, s) => {
  const i = new e(ie(r)), n = new Ks(i, !1), o = new s(), a = new Mc(o);
  for (let c = n.curr; c !== null; c = n.next())
    Ps(a, t(c), 0);
  Oc(a);
  const l = ps(i);
  return Ke(o, l), o.toUint8Array();
}, Gu = ({ formatting: r = !0, subdocs: t = !0, yxml: e = !0 } = {}) => {
  let s = 0;
  const i = Zt(), n = Zt(), o = Zt(), a = Zt();
  return a.set(null, null), (l) => {
    switch (l.constructor) {
      case ue:
      case le:
        return l;
      case ft: {
        const c = (
          /** @type {Item} */
          l
        ), h = c.content;
        switch (h.constructor) {
          case fr:
            break;
          case Oe: {
            if (e) {
              const d = (
                /** @type {ContentType} */
                h.type
              );
              d instanceof $s && (d.nodeName = de(n, d.nodeName, () => "node-" + s)), d instanceof Xr && (d.hookName = de(n, d.hookName, () => "hook-" + s));
            }
            break;
          }
          case gs: {
            const d = (
              /** @type {ContentAny} */
              h
            );
            d.arr = d.arr.map(() => s);
            break;
          }
          case kr: {
            const d = (
              /** @type {ContentBinary} */
              h
            );
            d.content = new Uint8Array([s]);
            break;
          }
          case xr: {
            const d = (
              /** @type {ContentDoc} */
              h
            );
            t && (d.opts = {}, d.doc.guid = s + "");
            break;
          }
          case vs: {
            const d = (
              /** @type {ContentEmbed} */
              h
            );
            d.embed = {};
            break;
          }
          case Ft: {
            const d = (
              /** @type {ContentFormat} */
              h
            );
            r && (d.key = de(o, d.key, () => s + ""), d.value = de(a, d.value, () => ({ i: s })));
            break;
          }
          case Zr: {
            const d = (
              /** @type {ContentJSON} */
              h
            );
            d.arr = d.arr.map(() => s);
            break;
          }
          case Me: {
            const d = (
              /** @type {ContentString} */
              h
            );
            d.str = Z0(s % 10 + "", d.str.length);
            break;
          }
          default:
            pe();
        }
        return c.parentSub && (c.parentSub = de(i, c.parentSub, () => s + "")), s++, l;
      }
      default:
        pe();
    }
  };
}, q1 = (r, t) => jo(r, Gu(t), Pe, qs), K1 = (r, t) => jo(r, Gu(t), be, Ue), X1 = (r) => jo(r, nu, Pe, Ue), Vu = (r) => jo(r, nu, be, qs), Uh = "You must not compute changes after the event-handler fired.";
class vn {
  /**
   * @param {T} target The changed type.
   * @param {Transaction} transaction
   */
  constructor(t, e) {
    this.target = t, this.currentTarget = t, this.transaction = e, this._changes = null, this._keys = null, this._delta = null, this._path = null;
  }
  /**
   * Computes the path from `y` to the changed type.
   *
   * @todo v14 should standardize on path: Array<{parent, index}> because that is easier to work with.
   *
   * The following property holds:
   * @example
   *   let type = y
   *   event.path.forEach(dir => {
   *     type = type.get(dir)
   *   })
   *   type === event.target // => true
   */
  get path() {
    return this._path || (this._path = Z1(this.currentTarget, this.target));
  }
  /**
   * Check if a struct is deleted by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  deletes(t) {
    return Sr(this.transaction.deleteSet, t.id);
  }
  /**
   * @type {Map<string, { action: 'add' | 'update' | 'delete', oldValue: any, newValue: any }>}
   */
  get keys() {
    if (this._keys === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Ls(Uh);
      const t = /* @__PURE__ */ new Map(), e = this.target;
      /** @type Set<string|null> */
      this.transaction.changed.get(e).forEach((i) => {
        if (i !== null) {
          const n = (
            /** @type {Item} */
            e._map.get(i)
          );
          let o, a;
          if (this.adds(n)) {
            let l = n.left;
            for (; l !== null && this.adds(l); )
              l = l.left;
            if (this.deletes(n))
              if (l !== null && this.deletes(l))
                o = "delete", a = Wa(l.content.getContent());
              else
                return;
            else
              l !== null && this.deletes(l) ? (o = "update", a = Wa(l.content.getContent())) : (o = "add", a = void 0);
          } else if (this.deletes(n))
            o = "delete", a = Wa(
              /** @type {Item} */
              n.content.getContent()
            );
          else
            return;
          t.set(i, { action: o, oldValue: a });
        }
      }), this._keys = t;
    }
    return this._keys;
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {Array<{insert?: string | Array<any> | object | AbstractType<any>, retain?: number, delete?: number, attributes?: Object<string, any>}>}
   */
  get delta() {
    return this.changes.delta;
  }
  /**
   * Check if a struct is added by this event.
   *
   * In contrast to change.deleted, this method also returns true if the struct was added and then deleted.
   *
   * @param {AbstractStruct} struct
   * @return {boolean}
   */
  adds(t) {
    return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0);
  }
  /**
   * This is a computed property. Note that this can only be safely computed during the
   * event call. Computing this property after other changes happened might result in
   * unexpected behavior (incorrect computation of deltas). A safe way to collect changes
   * is to store the `changes` or the `delta` object. Avoid storing the `transaction` object.
   *
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    let t = this._changes;
    if (t === null) {
      if (this.transaction.doc._transactionCleanups.length === 0)
        throw Ls(Uh);
      const e = this.target, s = dr(), i = dr(), n = [];
      if (t = {
        added: s,
        deleted: i,
        delta: n,
        keys: this.keys
      }, /** @type Set<string|null> */
      this.transaction.changed.get(e).has(null)) {
        let a = null;
        const l = () => {
          a && n.push(a);
        };
        for (let c = e._start; c !== null; c = c.right)
          c.deleted ? this.deletes(c) && !this.adds(c) && ((a === null || a.delete === void 0) && (l(), a = { delete: 0 }), a.delete += c.length, i.add(c)) : this.adds(c) ? ((a === null || a.insert === void 0) && (l(), a = { insert: [] }), a.insert = a.insert.concat(c.content.getContent()), s.add(c)) : ((a === null || a.retain === void 0) && (l(), a = { retain: 0 }), a.retain += c.length);
        a !== null && a.retain === void 0 && l();
      }
      this._changes = t;
    }
    return (
      /** @type {any} */
      t
    );
  }
}
const Z1 = (r, t) => {
  const e = [];
  for (; t._item !== null && t !== r; ) {
    if (t._item.parentSub !== null)
      e.unshift(t._item.parentSub);
    else {
      let s = 0, i = (
        /** @type {AbstractType<any>} */
        t._item.parent._start
      );
      for (; i !== t._item && i !== null; )
        i.deleted || s++, i = i.right;
      e.unshift(s);
    }
    t = /** @type {AbstractType<any>} */
    t._item.parent;
  }
  return e;
}, ju = 80;
let Rc = 0;
class J1 {
  /**
   * @param {Item} p
   * @param {number} index
   */
  constructor(t, e) {
    t.marker = !0, this.p = t, this.index = e, this.timestamp = Rc++;
  }
}
const Q1 = (r) => {
  r.timestamp = Rc++;
}, zu = (r, t, e) => {
  r.p.marker = !1, r.p = t, t.marker = !0, r.index = e, r.timestamp = Rc++;
}, tm = (r, t, e) => {
  if (r.length >= ju) {
    const s = r.reduce((i, n) => i.timestamp < n.timestamp ? i : n);
    return zu(s, t, e), s;
  } else {
    const s = new J1(t, e);
    return r.push(s), s;
  }
}, zo = (r, t) => {
  if (r._start === null || t === 0 || r._searchMarker === null)
    return null;
  const e = r._searchMarker.length === 0 ? null : r._searchMarker.reduce((n, o) => Un(t - n.index) < Un(t - o.index) ? n : o);
  let s = r._start, i = 0;
  for (e !== null && (s = e.p, i = e.index, Q1(e)); s.right !== null && i < t; ) {
    if (!s.deleted && s.countable) {
      if (t < i + s.length)
        break;
      i += s.length;
    }
    s = s.right;
  }
  for (; s.left !== null && i > t; )
    s = s.left, !s.deleted && s.countable && (i -= s.length);
  for (; s.left !== null && s.left.id.client === s.id.client && s.left.id.clock + s.left.length === s.id.clock; )
    s = s.left, !s.deleted && s.countable && (i -= s.length);
  return e !== null && Un(e.index - i) < /** @type {YText|YArray<any>} */
  s.parent.length / ju ? (zu(e, s, i), e) : tm(r._searchMarker, s, i);
}, Vi = (r, t, e) => {
  for (let s = r.length - 1; s >= 0; s--) {
    const i = r[s];
    if (e > 0) {
      let n = i.p;
      for (n.marker = !1; n && (n.deleted || !n.countable); )
        n = n.left, n && !n.deleted && n.countable && (i.index -= n.length);
      if (n === null || n.marker === !0) {
        r.splice(s, 1);
        continue;
      }
      i.p = n, n.marker = !0;
    }
    (t < i.index || e > 0 && t === i.index) && (i.index = br(t, i.index + e));
  }
}, em = (r) => {
  let t = r._start;
  const e = [];
  for (; t; )
    e.push(t), t = t.right;
  return e;
}, Ho = (r, t, e) => {
  const s = r, i = t.changedParentTypes;
  for (; de(i, r, () => []).push(e), r._item !== null; )
    r = /** @type {AbstractType<any>} */
    r._item.parent;
  xu(s._eH, e, t);
};
class zt {
  constructor() {
    this._item = null, this._map = /* @__PURE__ */ new Map(), this._start = null, this.doc = null, this._length = 0, this._eH = Ph(), this._dEH = Ph(), this._searchMarker = null;
  }
  /**
   * @return {AbstractType<any>|null}
   */
  get parent() {
    return this._item ? (
      /** @type {AbstractType<any>} */
      this._item.parent
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item|null} item
   */
  _integrate(t, e) {
    this.doc = t, this._item = e;
  }
  /**
   * @return {AbstractType<EventType>}
   */
  _copy() {
    throw qe();
  }
  /**
   * @return {AbstractType<EventType>}
   */
  clone() {
    throw qe();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} _encoder
   */
  _write(t) {
  }
  /**
   * The first non-deleted item
   */
  get _first() {
    let t = this._start;
    for (; t !== null && t.deleted; )
      t = t.right;
    return t;
  }
  /**
   * Creates YEvent and calls all type observers.
   * Must be implemented by each type.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} _parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, e) {
    !t.local && this._searchMarker && (this._searchMarker.length = 0);
  }
  /**
   * Observe all events that are created on this type.
   *
   * @param {function(EventType, Transaction):void} f Observer function
   */
  observe(t) {
    Oh(this._eH, t);
  }
  /**
   * Observe all events that are created by this type and its children.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  observeDeep(t) {
    Oh(this._dEH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(EventType,Transaction):void} f Observer function
   */
  unobserve(t) {
    Rh(this._eH, t);
  }
  /**
   * Unregister an observer function.
   *
   * @param {function(Array<YEvent<any>>,Transaction):void} f Observer function
   */
  unobserveDeep(t) {
    Rh(this._dEH, t);
  }
  /**
   * @abstract
   * @return {any}
   */
  toJSON() {
  }
}
const Hu = (r, t, e) => {
  t < 0 && (t = r._length + t), e < 0 && (e = r._length + e);
  let s = e - t;
  const i = [];
  let n = r._start;
  for (; n !== null && s > 0; ) {
    if (n.countable && !n.deleted) {
      const o = n.content.getContent();
      if (o.length <= t)
        t -= o.length;
      else {
        for (let a = t; a < o.length && s > 0; a++)
          i.push(o[a]), s--;
        t = 0;
      }
    }
    n = n.right;
  }
  return i;
}, Wu = (r) => {
  const t = [];
  let e = r._start;
  for (; e !== null; ) {
    if (e.countable && !e.deleted) {
      const s = e.content.getContent();
      for (let i = 0; i < s.length; i++)
        t.push(s[i]);
    }
    e = e.right;
  }
  return t;
}, sm = (r, t) => {
  const e = [];
  let s = r._start;
  for (; s !== null; ) {
    if (s.countable && Ms(s, t)) {
      const i = s.content.getContent();
      for (let n = 0; n < i.length; n++)
        e.push(i[n]);
    }
    s = s.right;
  }
  return e;
}, ji = (r, t) => {
  let e = 0, s = r._start;
  for (; s !== null; ) {
    if (s.countable && !s.deleted) {
      const i = s.content.getContent();
      for (let n = 0; n < i.length; n++)
        t(i[n], e++, r);
    }
    s = s.right;
  }
}, Yu = (r, t) => {
  const e = [];
  return ji(r, (s, i) => {
    e.push(t(s, i, r));
  }), e;
}, rm = (r) => {
  let t = r._start, e = null, s = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next: () => {
      if (e === null) {
        for (; t !== null && t.deleted; )
          t = t.right;
        if (t === null)
          return {
            done: !0,
            value: void 0
          };
        e = t.content.getContent(), s = 0, t = t.right;
      }
      const i = e[s++];
      return e.length <= s && (e = null), {
        done: !1,
        value: i
      };
    }
  };
}, qu = (r, t) => {
  const e = zo(r, t);
  let s = r._start;
  for (e !== null && (s = e.p, t -= e.index); s !== null; s = s.right)
    if (!s.deleted && s.countable) {
      if (t < s.length)
        return s.content.getContent()[t];
      t -= s.length;
    }
}, so = (r, t, e, s) => {
  let i = e;
  const n = r.doc, o = n.clientID, a = n.store, l = e === null ? t._start : e.right;
  let c = [];
  const h = () => {
    c.length > 0 && (i = new ft(K(o, Et(a, o)), i, i && i.lastId, l, l && l.id, t, null, new gs(c)), i.integrate(r, 0), c = []);
  };
  s.forEach((d) => {
    if (d === null)
      c.push(d);
    else
      switch (d.constructor) {
        case Number:
        case Object:
        case Boolean:
        case Array:
        case String:
          c.push(d);
          break;
        default:
          switch (h(), d.constructor) {
            case Uint8Array:
            case ArrayBuffer:
              i = new ft(K(o, Et(a, o)), i, i && i.lastId, l, l && l.id, t, null, new kr(new Uint8Array(
                /** @type {Uint8Array} */
                d
              ))), i.integrate(r, 0);
              break;
            case Je:
              i = new ft(K(o, Et(a, o)), i, i && i.lastId, l, l && l.id, t, null, new xr(
                /** @type {Doc} */
                d
              )), i.integrate(r, 0);
              break;
            default:
              if (d instanceof zt)
                i = new ft(K(o, Et(a, o)), i, i && i.lastId, l, l && l.id, t, null, new Oe(d)), i.integrate(r, 0);
              else
                throw new Error("Unexpected content type in insert operation");
          }
      }
  }), h();
}, Ku = () => Ls("Length exceeded!"), Xu = (r, t, e, s) => {
  if (e > t._length)
    throw Ku();
  if (e === 0)
    return t._searchMarker && Vi(t._searchMarker, e, s.length), so(r, t, null, s);
  const i = e, n = zo(t, e);
  let o = t._start;
  for (n !== null && (o = n.p, e -= n.index, e === 0 && (o = o.prev, e += o && o.countable && !o.deleted ? o.length : 0)); o !== null; o = o.right)
    if (!o.deleted && o.countable) {
      if (e <= o.length) {
        e < o.length && ae(r, K(o.id.client, o.id.clock + e));
        break;
      }
      e -= o.length;
    }
  return t._searchMarker && Vi(t._searchMarker, i, s.length), so(r, t, o, s);
}, im = (r, t, e) => {
  let i = (t._searchMarker || []).reduce((n, o) => o.index > n.index ? o : n, { index: 0, p: t._start }).p;
  if (i)
    for (; i.right; )
      i = i.right;
  return so(r, t, i, e);
}, Zu = (r, t, e, s) => {
  if (s === 0)
    return;
  const i = e, n = s, o = zo(t, e);
  let a = t._start;
  for (o !== null && (a = o.p, e -= o.index); a !== null && e > 0; a = a.right)
    !a.deleted && a.countable && (e < a.length && ae(r, K(a.id.client, a.id.clock + e)), e -= a.length);
  for (; s > 0 && a !== null; )
    a.deleted || (s < a.length && ae(r, K(a.id.client, a.id.clock + s)), a.delete(r), s -= a.length), a = a.right;
  if (s > 0)
    throw Ku();
  t._searchMarker && Vi(
    t._searchMarker,
    i,
    -n + s
    /* in case we remove the above exception */
  );
}, ro = (r, t, e) => {
  const s = t._map.get(e);
  s !== void 0 && s.delete(r);
}, Dc = (r, t, e, s) => {
  const i = t._map.get(e) || null, n = r.doc, o = n.clientID;
  let a;
  if (s == null)
    a = new gs([s]);
  else
    switch (s.constructor) {
      case Number:
      case Object:
      case Boolean:
      case Array:
      case String:
        a = new gs([s]);
        break;
      case Uint8Array:
        a = new kr(
          /** @type {Uint8Array} */
          s
        );
        break;
      case Je:
        a = new xr(
          /** @type {Doc} */
          s
        );
        break;
      default:
        if (s instanceof zt)
          a = new Oe(s);
        else
          throw new Error("Unexpected content type");
    }
  new ft(K(o, Et(n.store, o)), i, i && i.lastId, null, null, t, e, a).integrate(r, 0);
}, Ic = (r, t) => {
  const e = r._map.get(t);
  return e !== void 0 && !e.deleted ? e.content.getContent()[e.length - 1] : void 0;
}, Ju = (r) => {
  const t = {};
  return r._map.forEach((e, s) => {
    e.deleted || (t[s] = e.content.getContent()[e.length - 1]);
  }), t;
}, Qu = (r, t) => {
  const e = r._map.get(t);
  return e !== void 0 && !e.deleted;
}, nm = (r, t, e) => {
  let s = r._map.get(t) || null;
  for (; s !== null && (!e.sv.has(s.id.client) || s.id.clock >= (e.sv.get(s.id.client) || 0)); )
    s = s.left;
  return s !== null && Ms(s, e) ? s.content.getContent()[s.length - 1] : void 0;
}, tf = (r, t) => {
  const e = {};
  return r._map.forEach((s, i) => {
    let n = s;
    for (; n !== null && (!t.sv.has(n.id.client) || n.id.clock >= (t.sv.get(n.id.client) || 0)); )
      n = n.left;
    n !== null && Ms(n, t) && (e[i] = n.content.getContent()[n.length - 1]);
  }), e;
}, Mn = (r) => s1(
  r.entries(),
  /** @param {any} entry */
  (t) => !t[1].deleted
);
class Nc extends vn {
  /**
   * @param {YArray<T>} yarray The changed type
   * @param {Transaction} transaction The transaction object
   */
  constructor(t, e) {
    super(t, e), this._transaction = e;
  }
}
class Ht extends zt {
  constructor() {
    super(), this._prelimContent = [], this._searchMarker = [];
  }
  /**
   * Construct a new YArray containing the specified items.
   * @template {Object<string,any>|Array<any>|number|null|string|Uint8Array} T
   * @param {Array<T>} items
   * @return {YArray<T>}
   */
  static from(t) {
    const e = new Ht();
    return e.push(t), e;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, e) {
    super._integrate(t, e), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  /**
   * @return {YArray<T>}
   */
  _copy() {
    return new Ht();
  }
  /**
   * @return {YArray<T>}
   */
  clone() {
    const t = new Ht();
    return t.insert(0, this.toArray().map(
      (e) => e instanceof zt ? (
        /** @type {typeof el} */
        e.clone()
      ) : e
    )), t;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Creates YArrayEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, e) {
    super._callObserver(t, e), Ho(this, t, new Nc(this, t));
  }
  /**
   * Inserts new content at an index.
   *
   * Important: This function expects an array of content. Not just a content
   * object. The reason for this "weirdness" is that inserting several elements
   * is very efficient when it is done as a single operation.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  yarray.insert(0, ['a'])
   *  // Insert numbers 1, 2 at position 1
   *  yarray.insert(1, [1, 2])
   *
   * @param {number} index The index to insert content at.
   * @param {Array<T>} content The array of content
   */
  insert(t, e) {
    this.doc !== null ? mt(this.doc, (s) => {
      Xu(
        s,
        this,
        t,
        /** @type {any} */
        e
      );
    }) : this._prelimContent.splice(t, 0, ...e);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<T>} content Array of content to append.
   *
   * @todo Use the following implementation in all types.
   */
  push(t) {
    this.doc !== null ? mt(this.doc, (e) => {
      im(
        e,
        this,
        /** @type {any} */
        t
      );
    }) : this._prelimContent.push(...t);
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<T>} content Array of content to preppend.
   */
  unshift(t) {
    this.insert(0, t);
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} length The number of elements to remove. Defaults to 1.
   */
  delete(t, e = 1) {
    this.doc !== null ? mt(this.doc, (s) => {
      Zu(s, this, t, e);
    }) : this._prelimContent.splice(t, e);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {T}
   */
  get(t) {
    return qu(this, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<T>}
   */
  toArray() {
    return Wu(this);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<T>}
   */
  slice(t = 0, e = this.length) {
    return Hu(this, t, e);
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Array<any>}
   */
  toJSON() {
    return this.map((t) => t instanceof zt ? t.toJSON() : t);
  }
  /**
   * Returns an Array with the result of calling a provided function on every
   * element of this YArray.
   *
   * @template M
   * @param {function(T,number,YArray<T>):M} f Function that produces an element of the new Array
   * @return {Array<M>} A new array with each element being the result of the
   *                 callback function
   */
  map(t) {
    return Yu(
      this,
      /** @type {any} */
      t
    );
  }
  /**
   * Executes a provided function once on overy element of this YArray.
   *
   * @param {function(T,number,YArray<T>):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    ji(this, t);
  }
  /**
   * @return {IterableIterator<T>}
   */
  [Symbol.iterator]() {
    return rm(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Cm);
  }
}
const om = (r) => new Ht();
class Fc extends vn {
  /**
   * @param {YMap<T>} ymap The YArray that changed.
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed.
   */
  constructor(t, e, s) {
    super(t, e), this.keysChanged = s;
  }
}
class Wt extends zt {
  /**
   *
   * @param {Iterable<readonly [string, any]>=} entries - an optional iterable to initialize the YMap
   */
  constructor(t) {
    super(), this._prelimContent = null, t === void 0 ? this._prelimContent = /* @__PURE__ */ new Map() : this._prelimContent = new Map(t);
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, e) {
    super._integrate(t, e), this._prelimContent.forEach((s, i) => {
      this.set(i, s);
    }), this._prelimContent = null;
  }
  /**
   * @return {YMap<MapType>}
   */
  _copy() {
    return new Wt();
  }
  /**
   * @return {YMap<MapType>}
   */
  clone() {
    const t = new Wt();
    return this.forEach((e, s) => {
      t.set(s, e instanceof zt ? (
        /** @type {typeof value} */
        e.clone()
      ) : e);
    }), t;
  }
  /**
   * Creates YMapEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, e) {
    Ho(this, t, new Fc(this, t, e));
  }
  /**
   * Transforms this Shared Type to a JSON object.
   *
   * @return {Object<string,any>}
   */
  toJSON() {
    const t = {};
    return this._map.forEach((e, s) => {
      if (!e.deleted) {
        const i = e.content.getContent()[e.length - 1];
        t[s] = i instanceof zt ? i.toJSON() : i;
      }
    }), t;
  }
  /**
   * Returns the size of the YMap (count of key/value pairs)
   *
   * @return {number}
   */
  get size() {
    return [...Mn(this._map)].length;
  }
  /**
   * Returns the keys for each element in the YMap Type.
   *
   * @return {IterableIterator<string>}
   */
  keys() {
    return Za(
      Mn(this._map),
      /** @param {any} v */
      (t) => t[0]
    );
  }
  /**
   * Returns the values for each element in the YMap Type.
   *
   * @return {IterableIterator<MapType>}
   */
  values() {
    return Za(
      Mn(this._map),
      /** @param {any} v */
      (t) => t[1].content.getContent()[t[1].length - 1]
    );
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  entries() {
    return Za(
      Mn(this._map),
      /** @param {any} v */
      (t) => (
        /** @type {any} */
        [t[0], t[1].content.getContent()[t[1].length - 1]]
      )
    );
  }
  /**
   * Executes a provided function on once on every key-value pair.
   *
   * @param {function(MapType,string,YMap<MapType>):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    this._map.forEach((e, s) => {
      e.deleted || t(e.content.getContent()[e.length - 1], s, this);
    });
  }
  /**
   * Returns an Iterator of [key, value] pairs
   *
   * @return {IterableIterator<[string, MapType]>}
   */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Remove a specified element from this YMap.
   *
   * @param {string} key The key of the element to remove.
   */
  delete(t) {
    this.doc !== null ? mt(this.doc, (e) => {
      ro(e, this, t);
    }) : this._prelimContent.delete(t);
  }
  /**
   * Adds or updates an element with a specified key and value.
   * @template {MapType} VAL
   *
   * @param {string} key The key of the element to add to this YMap
   * @param {VAL} value The value of the element to add
   * @return {VAL}
   */
  set(t, e) {
    return this.doc !== null ? mt(this.doc, (s) => {
      Dc(
        s,
        this,
        t,
        /** @type {any} */
        e
      );
    }) : this._prelimContent.set(t, e), e;
  }
  /**
   * Returns a specified element from this YMap.
   *
   * @param {string} key
   * @return {MapType|undefined}
   */
  get(t) {
    return (
      /** @type {any} */
      Ic(this, t)
    );
  }
  /**
   * Returns a boolean indicating whether the specified key exists or not.
   *
   * @param {string} key The key to test.
   * @return {boolean}
   */
  has(t) {
    return Qu(this, t);
  }
  /**
   * Removes all elements from this YMap.
   */
  clear() {
    this.doc !== null ? mt(this.doc, (t) => {
      this.forEach(function(e, s, i) {
        ro(t, i, s);
      });
    }) : this._prelimContent.clear();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Em);
  }
}
const am = (r) => new Wt(), Ns = (r, t) => r === t || typeof r == "object" && typeof t == "object" && r && t && lg(r, t);
class Ol {
  /**
   * @param {Item|null} left
   * @param {Item|null} right
   * @param {number} index
   * @param {Map<string,any>} currentAttributes
   */
  constructor(t, e, s, i) {
    this.left = t, this.right = e, this.index = s, this.currentAttributes = i;
  }
  /**
   * Only call this if you know that this.right is defined
   */
  forward() {
    switch (this.right === null && pe(), this.right.content.constructor) {
      case Ft:
        this.right.deleted || di(
          this.currentAttributes,
          /** @type {ContentFormat} */
          this.right.content
        );
        break;
      default:
        this.right.deleted || (this.index += this.right.length);
        break;
    }
    this.left = this.right, this.right = this.right.right;
  }
}
const Gh = (r, t, e) => {
  for (; t.right !== null && e > 0; ) {
    switch (t.right.content.constructor) {
      case Ft:
        t.right.deleted || di(
          t.currentAttributes,
          /** @type {ContentFormat} */
          t.right.content
        );
        break;
      default:
        t.right.deleted || (e < t.right.length && ae(r, K(t.right.id.client, t.right.id.clock + e)), t.index += t.right.length, e -= t.right.length);
        break;
    }
    t.left = t.right, t.right = t.right.right;
  }
  return t;
}, Pn = (r, t, e, s) => {
  const i = /* @__PURE__ */ new Map(), n = s ? zo(t, e) : null;
  if (n) {
    const o = new Ol(n.p.left, n.p, n.index, i);
    return Gh(r, o, e - n.index);
  } else {
    const o = new Ol(null, t._start, 0, i);
    return Gh(r, o, e);
  }
}, ef = (r, t, e, s) => {
  for (; e.right !== null && (e.right.deleted === !0 || e.right.content.constructor === Ft && Ns(
    s.get(
      /** @type {ContentFormat} */
      e.right.content.key
    ),
    /** @type {ContentFormat} */
    e.right.content.value
  )); )
    e.right.deleted || s.delete(
      /** @type {ContentFormat} */
      e.right.content.key
    ), e.forward();
  const i = r.doc, n = i.clientID;
  s.forEach((o, a) => {
    const l = e.left, c = e.right, h = new ft(K(n, Et(i.store, n)), l, l && l.lastId, c, c && c.id, t, null, new Ft(a, o));
    h.integrate(r, 0), e.right = h, e.forward();
  });
}, di = (r, t) => {
  const { key: e, value: s } = t;
  s === null ? r.delete(e) : r.set(e, s);
}, sf = (r, t) => {
  for (; r.right !== null; ) {
    if (!(r.right.deleted || r.right.content.constructor === Ft && Ns(
      t[
        /** @type {ContentFormat} */
        r.right.content.key
      ] ?? null,
      /** @type {ContentFormat} */
      r.right.content.value
    )))
      break;
    r.forward();
  }
}, rf = (r, t, e, s) => {
  const i = r.doc, n = i.clientID, o = /* @__PURE__ */ new Map();
  for (const a in s) {
    const l = s[a], c = e.currentAttributes.get(a) ?? null;
    if (!Ns(c, l)) {
      o.set(a, c);
      const { left: h, right: d } = e;
      e.right = new ft(K(n, Et(i.store, n)), h, h && h.lastId, d, d && d.id, t, null, new Ft(a, l)), e.right.integrate(r, 0), e.forward();
    }
  }
  return o;
}, Ja = (r, t, e, s, i) => {
  e.currentAttributes.forEach((u, p) => {
    i[p] === void 0 && (i[p] = null);
  });
  const n = r.doc, o = n.clientID;
  sf(e, i);
  const a = rf(r, t, e, i), l = s.constructor === String ? new Me(
    /** @type {string} */
    s
  ) : s instanceof zt ? new Oe(s) : new vs(s);
  let { left: c, right: h, index: d } = e;
  t._searchMarker && Vi(t._searchMarker, e.index, l.getLength()), h = new ft(K(o, Et(n.store, o)), c, c && c.lastId, h, h && h.id, t, null, l), h.integrate(r, 0), e.right = h, e.index = d, e.forward(), ef(r, t, e, a);
}, Vh = (r, t, e, s, i) => {
  const n = r.doc, o = n.clientID;
  sf(e, i);
  const a = rf(r, t, e, i);
  t:
    for (; e.right !== null && (s > 0 || a.size > 0 && (e.right.deleted || e.right.content.constructor === Ft)); ) {
      if (!e.right.deleted)
        switch (e.right.content.constructor) {
          case Ft: {
            const { key: l, value: c } = (
              /** @type {ContentFormat} */
              e.right.content
            ), h = i[l];
            if (h !== void 0) {
              if (Ns(h, c))
                a.delete(l);
              else {
                if (s === 0)
                  break t;
                a.set(l, c);
              }
              e.right.delete(r);
            } else
              e.currentAttributes.set(l, c);
            break;
          }
          default:
            s < e.right.length && ae(r, K(e.right.id.client, e.right.id.clock + s)), s -= e.right.length;
            break;
        }
      e.forward();
    }
  if (s > 0) {
    let l = "";
    for (; s > 0; s--)
      l += `
`;
    e.right = new ft(K(o, Et(n.store, o)), e.left, e.left && e.left.lastId, e.right, e.right && e.right.id, t, null, new Me(l)), e.right.integrate(r, 0), e.forward();
  }
  ef(r, t, e, a);
}, nf = (r, t, e, s, i) => {
  let n = t;
  const o = Zt();
  for (; n && (!n.countable || n.deleted); ) {
    if (!n.deleted && n.content.constructor === Ft) {
      const c = (
        /** @type {ContentFormat} */
        n.content
      );
      o.set(c.key, c);
    }
    n = n.right;
  }
  let a = 0, l = !1;
  for (; t !== n; ) {
    if (e === t && (l = !0), !t.deleted) {
      const c = t.content;
      switch (c.constructor) {
        case Ft: {
          const { key: h, value: d } = (
            /** @type {ContentFormat} */
            c
          ), u = s.get(h) ?? null;
          (o.get(h) !== c || u === d) && (t.delete(r), a++, !l && (i.get(h) ?? null) === d && u !== d && (u === null ? i.delete(h) : i.set(h, u))), !l && !t.deleted && di(
            i,
            /** @type {ContentFormat} */
            c
          );
          break;
        }
      }
    }
    t = /** @type {Item} */
    t.right;
  }
  return a;
}, lm = (r, t) => {
  for (; t && t.right && (t.right.deleted || !t.right.countable); )
    t = t.right;
  const e = /* @__PURE__ */ new Set();
  for (; t && (t.deleted || !t.countable); ) {
    if (!t.deleted && t.content.constructor === Ft) {
      const s = (
        /** @type {ContentFormat} */
        t.content.key
      );
      e.has(s) ? t.delete(r) : e.add(s);
    }
    t = t.left;
  }
}, of = (r) => {
  let t = 0;
  return mt(
    /** @type {Doc} */
    r.doc,
    (e) => {
      let s = (
        /** @type {Item} */
        r._start
      ), i = r._start, n = Zt();
      const o = kl(n);
      for (; i; ) {
        if (i.deleted === !1)
          switch (i.content.constructor) {
            case Ft:
              di(
                o,
                /** @type {ContentFormat} */
                i.content
              );
              break;
            default:
              t += nf(e, s, i, n, o), n = kl(o), s = i;
              break;
          }
        i = i.right;
      }
    }
  ), t;
}, cm = (r) => {
  const t = /* @__PURE__ */ new Set(), e = r.doc;
  for (const [s, i] of r.afterState.entries()) {
    const n = r.beforeState.get(s) || 0;
    i !== n && Pu(
      r,
      /** @type {Array<Item|GC>} */
      e.store.clients.get(s),
      n,
      i,
      (o) => {
        !o.deleted && /** @type {Item} */
        o.content.constructor === Ft && o.constructor !== ue && t.add(
          /** @type {any} */
          o.parent
        );
      }
    );
  }
  mt(e, (s) => {
    ur(r, r.deleteSet, (i) => {
      if (i instanceof ue || !/** @type {YText} */
      i.parent._hasFormatting || t.has(
        /** @type {YText} */
        i.parent
      ))
        return;
      const n = (
        /** @type {YText} */
        i.parent
      );
      i.content.constructor === Ft ? t.add(n) : lm(s, i);
    });
    for (const i of t)
      of(i);
  });
}, jh = (r, t, e) => {
  const s = e, i = kl(t.currentAttributes), n = t.right;
  for (; e > 0 && t.right !== null; ) {
    if (t.right.deleted === !1)
      switch (t.right.content.constructor) {
        case Oe:
        case vs:
        case Me:
          e < t.right.length && ae(r, K(t.right.id.client, t.right.id.clock + e)), e -= t.right.length, t.right.delete(r);
          break;
      }
    t.forward();
  }
  n && nf(r, n, t.right, i, t.currentAttributes);
  const o = (
    /** @type {AbstractType<any>} */
    /** @type {Item} */
    (t.left || t.right).parent
  );
  return o._searchMarker && Vi(o._searchMarker, t.index, -s + e), t;
};
class Lc extends vn {
  /**
   * @param {YText} ytext
   * @param {Transaction} transaction
   * @param {Set<any>} subs The keys that changed
   */
  constructor(t, e, s) {
    super(t, e), this.childListChanged = !1, this.keysChanged = /* @__PURE__ */ new Set(), s.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.keysChanged.add(i);
    });
  }
  /**
   * @type {{added:Set<Item>,deleted:Set<Item>,keys:Map<string,{action:'add'|'update'|'delete',oldValue:any}>,delta:Array<{insert?:Array<any>|string, delete?:number, retain?:number}>}}
   */
  get changes() {
    if (this._changes === null) {
      const t = {
        keys: this.keys,
        delta: this.delta,
        added: /* @__PURE__ */ new Set(),
        deleted: /* @__PURE__ */ new Set()
      };
      this._changes = t;
    }
    return (
      /** @type {any} */
      this._changes
    );
  }
  /**
   * Compute the changes in the delta format.
   * A {@link https://quilljs.com/docs/delta/|Quill Delta}) that represents the changes on the document.
   *
   * @type {Array<{insert?:string|object|AbstractType<any>, delete?:number, retain?:number, attributes?: Object<string,any>}>}
   *
   * @public
   */
  get delta() {
    if (this._delta === null) {
      const t = (
        /** @type {Doc} */
        this.target.doc
      ), e = [];
      mt(t, (s) => {
        const i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
        let o = this.target._start, a = null;
        const l = {};
        let c = "", h = 0, d = 0;
        const u = () => {
          if (a !== null) {
            let p = null;
            switch (a) {
              case "delete":
                d > 0 && (p = { delete: d }), d = 0;
                break;
              case "insert":
                (typeof c == "object" || c.length > 0) && (p = { insert: c }, i.size > 0 && (p.attributes = {}, i.forEach((f, m) => {
                  f !== null && (p.attributes[m] = f);
                }))), c = "";
                break;
              case "retain":
                h > 0 && (p = { retain: h }, og(l) || (p.attributes = rg({}, l))), h = 0;
                break;
            }
            p && e.push(p), a = null;
          }
        };
        for (; o !== null; ) {
          switch (o.content.constructor) {
            case Oe:
            case vs:
              this.adds(o) ? this.deletes(o) || (u(), a = "insert", c = o.content.getContent()[0], u()) : this.deletes(o) ? (a !== "delete" && (u(), a = "delete"), d += 1) : o.deleted || (a !== "retain" && (u(), a = "retain"), h += 1);
              break;
            case Me:
              this.adds(o) ? this.deletes(o) || (a !== "insert" && (u(), a = "insert"), c += /** @type {ContentString} */
              o.content.str) : this.deletes(o) ? (a !== "delete" && (u(), a = "delete"), d += o.length) : o.deleted || (a !== "retain" && (u(), a = "retain"), h += o.length);
              break;
            case Ft: {
              const { key: p, value: f } = (
                /** @type {ContentFormat} */
                o.content
              );
              if (this.adds(o)) {
                if (!this.deletes(o)) {
                  const m = i.get(p) ?? null;
                  Ns(m, f) ? f !== null && o.delete(s) : (a === "retain" && u(), Ns(f, n.get(p) ?? null) ? delete l[p] : l[p] = f);
                }
              } else if (this.deletes(o)) {
                n.set(p, f);
                const m = i.get(p) ?? null;
                Ns(m, f) || (a === "retain" && u(), l[p] = m);
              } else if (!o.deleted) {
                n.set(p, f);
                const m = l[p];
                m !== void 0 && (Ns(m, f) ? m !== null && o.delete(s) : (a === "retain" && u(), f === null ? delete l[p] : l[p] = f));
              }
              o.deleted || (a === "insert" && u(), di(
                i,
                /** @type {ContentFormat} */
                o.content
              ));
              break;
            }
          }
          o = o.right;
        }
        for (u(); e.length > 0; ) {
          const p = e[e.length - 1];
          if (p.retain !== void 0 && p.attributes === void 0)
            e.pop();
          else
            break;
        }
      }), this._delta = e;
    }
    return (
      /** @type {any} */
      this._delta
    );
  }
}
class Jt extends zt {
  /**
   * @param {String} [string] The initial value of the YText.
   */
  constructor(t) {
    super(), this._pending = t !== void 0 ? [() => this.insert(0, t)] : [], this._searchMarker = [], this._hasFormatting = !1;
  }
  /**
   * Number of characters of this text type.
   *
   * @type {number}
   */
  get length() {
    return this._length;
  }
  /**
   * @param {Doc} y
   * @param {Item} item
   */
  _integrate(t, e) {
    super._integrate(t, e);
    try {
      this._pending.forEach((s) => s());
    } catch (s) {
      console.error(s);
    }
    this._pending = null;
  }
  _copy() {
    return new Jt();
  }
  /**
   * @return {YText}
   */
  clone() {
    const t = new Jt();
    return t.applyDelta(this.toDelta()), t;
  }
  /**
   * Creates YTextEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, e) {
    super._callObserver(t, e);
    const s = new Lc(this, t, e);
    Ho(this, t, s), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0);
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @public
   */
  toString() {
    let t = "", e = this._start;
    for (; e !== null; )
      !e.deleted && e.countable && e.content.constructor === Me && (t += /** @type {ContentString} */
      e.content.str), e = e.right;
    return t;
  }
  /**
   * Returns the unformatted string representation of this YText type.
   *
   * @return {string}
   * @public
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Apply a {@link Delta} on this shared YText type.
   *
   * @param {any} delta The changes to apply on this element.
   * @param {object}  opts
   * @param {boolean} [opts.sanitize] Sanitize input delta. Removes ending newlines if set to true.
   *
   *
   * @public
   */
  applyDelta(t, { sanitize: e = !0 } = {}) {
    this.doc !== null ? mt(this.doc, (s) => {
      const i = new Ol(null, this._start, 0, /* @__PURE__ */ new Map());
      for (let n = 0; n < t.length; n++) {
        const o = t[n];
        if (o.insert !== void 0) {
          const a = !e && typeof o.insert == "string" && n === t.length - 1 && i.right === null && o.insert.slice(-1) === `
` ? o.insert.slice(0, -1) : o.insert;
          (typeof a != "string" || a.length > 0) && Ja(s, this, i, a, o.attributes || {});
        } else
          o.retain !== void 0 ? Vh(s, this, i, o.retain, o.attributes || {}) : o.delete !== void 0 && jh(s, i, o.delete);
      }
    }) : this._pending.push(() => this.applyDelta(t));
  }
  /**
   * Returns the Delta representation of this YText type.
   *
   * @param {Snapshot} [snapshot]
   * @param {Snapshot} [prevSnapshot]
   * @param {function('removed' | 'added', ID):any} [computeYChange]
   * @return {any} The Delta representation of this type.
   *
   * @public
   */
  toDelta(t, e, s) {
    const i = [], n = /* @__PURE__ */ new Map(), o = (
      /** @type {Doc} */
      this.doc
    );
    let a = "", l = this._start;
    function c() {
      if (a.length > 0) {
        const d = {};
        let u = !1;
        n.forEach((f, m) => {
          u = !0, d[m] = f;
        });
        const p = { insert: a };
        u && (p.attributes = d), i.push(p), a = "";
      }
    }
    const h = () => {
      for (; l !== null; ) {
        if (Ms(l, t) || e !== void 0 && Ms(l, e))
          switch (l.content.constructor) {
            case Me: {
              const d = n.get("ychange");
              t !== void 0 && !Ms(l, t) ? (d === void 0 || d.user !== l.id.client || d.type !== "removed") && (c(), n.set("ychange", s ? s("removed", l.id) : { type: "removed" })) : e !== void 0 && !Ms(l, e) ? (d === void 0 || d.user !== l.id.client || d.type !== "added") && (c(), n.set("ychange", s ? s("added", l.id) : { type: "added" })) : d !== void 0 && (c(), n.delete("ychange")), a += /** @type {ContentString} */
              l.content.str;
              break;
            }
            case Oe:
            case vs: {
              c();
              const d = {
                insert: l.content.getContent()[0]
              };
              if (n.size > 0) {
                const u = (
                  /** @type {Object<string,any>} */
                  {}
                );
                d.attributes = u, n.forEach((p, f) => {
                  u[f] = p;
                });
              }
              i.push(d);
              break;
            }
            case Ft:
              Ms(l, t) && (c(), di(
                n,
                /** @type {ContentFormat} */
                l.content
              ));
              break;
          }
        l = l.right;
      }
      c();
    };
    return t || e ? mt(o, (d) => {
      t && Ml(d, t), e && Ml(d, e), h();
    }, "cleanup") : h(), i;
  }
  /**
   * Insert text at a given index.
   *
   * @param {number} index The index at which to start inserting.
   * @param {String} text The text to insert at the specified position.
   * @param {TextAttributes} [attributes] Optionally define some formatting
   *                                    information to apply on the inserted
   *                                    Text.
   * @public
   */
  insert(t, e, s) {
    if (e.length <= 0)
      return;
    const i = this.doc;
    i !== null ? mt(i, (n) => {
      const o = Pn(n, this, t, !s);
      s || (s = {}, o.currentAttributes.forEach((a, l) => {
        s[l] = a;
      })), Ja(n, this, o, e, s);
    }) : this._pending.push(() => this.insert(t, e, s));
  }
  /**
   * Inserts an embed at a index.
   *
   * @param {number} index The index to insert the embed at.
   * @param {Object | AbstractType<any>} embed The Object that represents the embed.
   * @param {TextAttributes} [attributes] Attribute information to apply on the
   *                                    embed
   *
   * @public
   */
  insertEmbed(t, e, s) {
    const i = this.doc;
    i !== null ? mt(i, (n) => {
      const o = Pn(n, this, t, !s);
      Ja(n, this, o, e, s || {});
    }) : this._pending.push(() => this.insertEmbed(t, e, s || {}));
  }
  /**
   * Deletes text starting from an index.
   *
   * @param {number} index Index at which to start deleting.
   * @param {number} length The number of characters to remove. Defaults to 1.
   *
   * @public
   */
  delete(t, e) {
    if (e === 0)
      return;
    const s = this.doc;
    s !== null ? mt(s, (i) => {
      jh(i, Pn(i, this, t, !0), e);
    }) : this._pending.push(() => this.delete(t, e));
  }
  /**
   * Assigns properties to a range of text.
   *
   * @param {number} index The position where to start formatting.
   * @param {number} length The amount of characters to assign properties to.
   * @param {TextAttributes} attributes Attribute information to apply on the
   *                                    text.
   *
   * @public
   */
  format(t, e, s) {
    if (e === 0)
      return;
    const i = this.doc;
    i !== null ? mt(i, (n) => {
      const o = Pn(n, this, t, !1);
      o.right !== null && Vh(n, this, o, e, s);
    }) : this._pending.push(() => this.format(t, e, s));
  }
  /**
   * Removes an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(t) {
    this.doc !== null ? mt(this.doc, (e) => {
      ro(e, this, t);
    }) : this._pending.push(() => this.removeAttribute(t));
  }
  /**
   * Sets or updates an attribute.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that is to be set.
   * @param {any} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(t, e) {
    this.doc !== null ? mt(this.doc, (s) => {
      Dc(s, this, t, e);
    }) : this._pending.push(() => this.setAttribute(t, e));
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @param {String} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {any} The queried attribute value.
   *
   * @public
   */
  getAttribute(t) {
    return (
      /** @type {any} */
      Ic(this, t)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @note Xml-Text nodes don't have attributes. You can use this feature to assign properties to complete text-blocks.
   *
   * @return {Object<string, any>} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes() {
    return Ju(this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Tm);
  }
}
const hm = (r) => new Jt();
class Qa {
  /**
   * @param {YXmlFragment | YXmlElement} root
   * @param {function(AbstractType<any>):boolean} [f]
   */
  constructor(t, e = () => !0) {
    this._filter = e, this._root = t, this._currentNode = /** @type {Item} */
    t._start, this._firstCall = !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  /**
   * Get the next node.
   *
   * @return {IteratorResult<YXmlElement|YXmlText|YXmlHook>} The next node.
   *
   * @public
   */
  next() {
    let t = this._currentNode, e = t && t.content && /** @type {any} */
    t.content.type;
    if (t !== null && (!this._firstCall || t.deleted || !this._filter(e)))
      do
        if (e = /** @type {any} */
        t.content.type, !t.deleted && (e.constructor === $s || e.constructor === Bs) && e._start !== null)
          t = e._start;
        else
          for (; t !== null; )
            if (t.right !== null) {
              t = t.right;
              break;
            } else
              t.parent === this._root ? t = null : t = /** @type {AbstractType<any>} */
              t.parent._item;
      while (t !== null && (t.deleted || !this._filter(
        /** @type {ContentType} */
        t.content.type
      )));
    return this._firstCall = !1, t === null ? { value: void 0, done: !0 } : (this._currentNode = t, { value: (
      /** @type {any} */
      t.content.type
    ), done: !1 });
  }
}
class Bs extends zt {
  constructor() {
    super(), this._prelimContent = [];
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get firstChild() {
    const t = this._first;
    return t ? t.content.getContent()[0] : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, e) {
    super._integrate(t, e), this.insert(
      0,
      /** @type {Array<any>} */
      this._prelimContent
    ), this._prelimContent = null;
  }
  _copy() {
    return new Bs();
  }
  /**
   * @return {YXmlFragment}
   */
  clone() {
    const t = new Bs();
    return t.insert(0, this.toArray().map((e) => e instanceof zt ? e.clone() : e)), t;
  }
  get length() {
    return this._prelimContent === null ? this._length : this._prelimContent.length;
  }
  /**
   * Create a subtree of childNodes.
   *
   * @example
   * const walker = elem.createTreeWalker(dom => dom.nodeName === 'div')
   * for (let node in walker) {
   *   // `node` is a div node
   *   nop(node)
   * }
   *
   * @param {function(AbstractType<any>):boolean} filter Function that is called on each child element and
   *                          returns a Boolean indicating whether the child
   *                          is to be included in the subtree.
   * @return {YXmlTreeWalker} A subtree and a position within it.
   *
   * @public
   */
  createTreeWalker(t) {
    return new Qa(this, t);
  }
  /**
   * Returns the first YXmlElement that matches the query.
   * Similar to DOM's {@link querySelector}.
   *
   * Query support:
   *   - tagname
   * TODO:
   *   - id
   *   - attribute
   *
   * @param {CSS_Selector} query The query on the children.
   * @return {YXmlElement|YXmlText|YXmlHook|null} The first element that matches the query or null.
   *
   * @public
   */
  querySelector(t) {
    t = t.toUpperCase();
    const s = new Qa(this, (i) => i.nodeName && i.nodeName.toUpperCase() === t).next();
    return s.done ? null : s.value;
  }
  /**
   * Returns all YXmlElements that match the query.
   * Similar to Dom's {@link querySelectorAll}.
   *
   * @todo Does not yet support all queries. Currently only query by tagName.
   *
   * @param {CSS_Selector} query The query on the children
   * @return {Array<YXmlElement|YXmlText|YXmlHook|null>} The elements that match this query.
   *
   * @public
   */
  querySelectorAll(t) {
    return t = t.toUpperCase(), us(new Qa(this, (e) => e.nodeName && e.nodeName.toUpperCase() === t));
  }
  /**
   * Creates YXmlEvent and calls observers.
   *
   * @param {Transaction} transaction
   * @param {Set<null|string>} parentSubs Keys changed on this type. `null` if list was modified.
   */
  _callObserver(t, e) {
    Ho(this, t, new af(this, e, t));
  }
  /**
   * Get the string representation of all the children of this YXmlFragment.
   *
   * @return {string} The string representation of all children.
   */
  toString() {
    return Yu(this, (t) => t.toString()).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, e = {}, s) {
    const i = t.createDocumentFragment();
    return s !== void 0 && s._createAssociation(i, this), ji(this, (n) => {
      i.insertBefore(n.toDOM(t, e, s), null);
    }), i;
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {number} index The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insert(t, e) {
    this.doc !== null ? mt(this.doc, (s) => {
      Xu(s, this, t, e);
    }) : this._prelimContent.splice(t, 0, ...e);
  }
  /**
   * Inserts new content at an index.
   *
   * @example
   *  // Insert character 'a' at position 0
   *  xml.insert(0, [new Y.XmlText('text')])
   *
   * @param {null|Item|YXmlElement|YXmlText} ref The index to insert content at
   * @param {Array<YXmlElement|YXmlText>} content The array of content
   */
  insertAfter(t, e) {
    if (this.doc !== null)
      mt(this.doc, (s) => {
        const i = t && t instanceof zt ? t._item : t;
        so(s, this, i, e);
      });
    else {
      const s = (
        /** @type {Array<any>} */
        this._prelimContent
      ), i = t === null ? 0 : s.findIndex((n) => n === t) + 1;
      if (i === 0 && t !== null)
        throw Ls("Reference item not found");
      s.splice(i, 0, ...e);
    }
  }
  /**
   * Deletes elements starting from an index.
   *
   * @param {number} index Index at which to start deleting elements
   * @param {number} [length=1] The number of elements to remove. Defaults to 1.
   */
  delete(t, e = 1) {
    this.doc !== null ? mt(this.doc, (s) => {
      Zu(s, this, t, e);
    }) : this._prelimContent.splice(t, e);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @return {Array<YXmlElement|YXmlText|YXmlHook>}
   */
  toArray() {
    return Wu(this);
  }
  /**
   * Appends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to append.
   */
  push(t) {
    this.insert(this.length, t);
  }
  /**
   * Preppends content to this YArray.
   *
   * @param {Array<YXmlElement|YXmlText>} content Array of content to preppend.
   */
  unshift(t) {
    this.insert(0, t);
  }
  /**
   * Returns the i-th element from a YArray.
   *
   * @param {number} index The index of the element to return from the YArray
   * @return {YXmlElement|YXmlText}
   */
  get(t) {
    return qu(this, t);
  }
  /**
   * Transforms this YArray to a JavaScript Array.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @return {Array<YXmlElement|YXmlText>}
   */
  slice(t = 0, e = this.length) {
    return Hu(this, t, e);
  }
  /**
   * Executes a provided function on once on overy child element.
   *
   * @param {function(YXmlElement|YXmlText,number, typeof self):void} f A function to execute on every element of this YArray.
   */
  forEach(t) {
    ji(this, t);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(Mm);
  }
}
const dm = (r) => new Bs();
class $s extends Bs {
  constructor(t = "UNDEFINED") {
    super(), this.nodeName = t, this._prelimAttrs = /* @__PURE__ */ new Map();
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const t = this._item ? this._item.next : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const t = this._item ? this._item.prev : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * Integrate this type into the Yjs instance.
   *
   * * Save this struct in the os
   * * This type is sent to other client
   * * Observer functions are fired
   *
   * @param {Doc} y The Yjs instance
   * @param {Item} item
   */
  _integrate(t, e) {
    super._integrate(t, e), /** @type {Map<string, any>} */
    this._prelimAttrs.forEach((s, i) => {
      this.setAttribute(i, s);
    }), this._prelimAttrs = null;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   *
   * @return {YXmlElement}
   */
  _copy() {
    return new $s(this.nodeName);
  }
  /**
   * @return {YXmlElement<KV>}
   */
  clone() {
    const t = new $s(this.nodeName), e = this.getAttributes();
    return ng(e, (s, i) => {
      typeof s == "string" && t.setAttribute(i, s);
    }), t.insert(0, this.toArray().map((s) => s instanceof zt ? s.clone() : s)), t;
  }
  /**
   * Returns the XML serialization of this YXmlElement.
   * The attributes are ordered by attribute-name, so you can easily use this
   * method to compare YXmlElements
   *
   * @return {string} The string representation of this type.
   *
   * @public
   */
  toString() {
    const t = this.getAttributes(), e = [], s = [];
    for (const a in t)
      s.push(a);
    s.sort();
    const i = s.length;
    for (let a = 0; a < i; a++) {
      const l = s[a];
      e.push(l + '="' + t[l] + '"');
    }
    const n = this.nodeName.toLocaleLowerCase(), o = e.length > 0 ? " " + e.join(" ") : "";
    return `<${n}${o}>${super.toString()}</${n}>`;
  }
  /**
   * Removes an attribute from this YXmlElement.
   *
   * @param {string} attributeName The attribute name that is to be removed.
   *
   * @public
   */
  removeAttribute(t) {
    this.doc !== null ? mt(this.doc, (e) => {
      ro(e, this, t);
    }) : this._prelimAttrs.delete(t);
  }
  /**
   * Sets or updates an attribute.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that is to be set.
   * @param {KV[KEY]} attributeValue The attribute value that is to be set.
   *
   * @public
   */
  setAttribute(t, e) {
    this.doc !== null ? mt(this.doc, (s) => {
      Dc(s, this, t, e);
    }) : this._prelimAttrs.set(t, e);
  }
  /**
   * Returns an attribute value that belongs to the attribute name.
   *
   * @template {keyof KV & string} KEY
   *
   * @param {KEY} attributeName The attribute name that identifies the
   *                               queried value.
   * @return {KV[KEY]|undefined} The queried attribute value.
   *
   * @public
   */
  getAttribute(t) {
    return (
      /** @type {any} */
      Ic(this, t)
    );
  }
  /**
   * Returns whether an attribute exists
   *
   * @param {string} attributeName The attribute name to check for existence.
   * @return {boolean} whether the attribute exists.
   *
   * @public
   */
  hasAttribute(t) {
    return (
      /** @type {any} */
      Qu(this, t)
    );
  }
  /**
   * Returns all attribute name/value pairs in a JSON Object.
   *
   * @param {Snapshot} [snapshot]
   * @return {{ [Key in Extract<keyof KV,string>]?: KV[Key]}} A JSON Object that describes the attributes.
   *
   * @public
   */
  getAttributes(t) {
    return (
      /** @type {any} */
      t ? tf(this, t) : Ju(this)
    );
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks={}] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Node} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, e = {}, s) {
    const i = t.createElement(this.nodeName), n = this.getAttributes();
    for (const o in n) {
      const a = n[o];
      typeof a == "string" && i.setAttribute(o, a);
    }
    return ji(this, (o) => {
      i.appendChild(o.toDOM(t, e, s));
    }), s !== void 0 && s._createAssociation(i, this), i;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(Am), t.writeKey(this.nodeName);
  }
}
const um = (r) => new $s(r.readKey());
class af extends vn {
  /**
   * @param {YXmlElement|YXmlText|YXmlFragment} target The target on which the event is created.
   * @param {Set<string|null>} subs The set of changed attributes. `null` is included if the
   *                   child list changed.
   * @param {Transaction} transaction The transaction instance with wich the
   *                                  change was created.
   */
  constructor(t, e, s) {
    super(t, s), this.childListChanged = !1, this.attributesChanged = /* @__PURE__ */ new Set(), e.forEach((i) => {
      i === null ? this.childListChanged = !0 : this.attributesChanged.add(i);
    });
  }
}
class Xr extends Wt {
  /**
   * @param {string} hookName nodeName of the Dom Node.
   */
  constructor(t) {
    super(), this.hookName = t;
  }
  /**
   * Creates an Item with the same effect as this Item (without position effect)
   */
  _copy() {
    return new Xr(this.hookName);
  }
  /**
   * @return {YXmlHook}
   */
  clone() {
    const t = new Xr(this.hookName);
    return this.forEach((e, s) => {
      t.set(s, e);
    }), t;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlElement.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object.<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type
   * @return {Element} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, e = {}, s) {
    const i = e[this.hookName];
    let n;
    return i !== void 0 ? n = i.createDom(this) : n = document.createElement(this.hookName), n.setAttribute("data-yjs-hook", this.hookName), s !== void 0 && s._createAssociation(n, this), n;
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   */
  _write(t) {
    t.writeTypeRef(Pm), t.writeKey(this.hookName);
  }
}
const fm = (r) => new Xr(r.readKey());
class zi extends Jt {
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get nextSibling() {
    const t = this._item ? this._item.next : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  /**
   * @type {YXmlElement|YXmlText|null}
   */
  get prevSibling() {
    const t = this._item ? this._item.prev : null;
    return t ? (
      /** @type {YXmlElement|YXmlText} */
      /** @type {ContentType} */
      t.content.type
    ) : null;
  }
  _copy() {
    return new zi();
  }
  /**
   * @return {YXmlText}
   */
  clone() {
    const t = new zi();
    return t.applyDelta(this.toDelta()), t;
  }
  /**
   * Creates a Dom Element that mirrors this YXmlText.
   *
   * @param {Document} [_document=document] The document object (you must define
   *                                        this when calling this method in
   *                                        nodejs)
   * @param {Object<string, any>} [hooks] Optional property to customize how hooks
   *                                             are presented in the DOM
   * @param {any} [binding] You should not set this property. This is
   *                               used if DomBinding wants to create a
   *                               association to the created DOM type.
   * @return {Text} The {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Dom Element}
   *
   * @public
   */
  toDOM(t = document, e, s) {
    const i = t.createTextNode(this.toString());
    return s !== void 0 && s._createAssociation(i, this), i;
  }
  toString() {
    return this.toDelta().map((t) => {
      const e = [];
      for (const i in t.attributes) {
        const n = [];
        for (const o in t.attributes[i])
          n.push({ key: o, value: t.attributes[i][o] });
        n.sort((o, a) => o.key < a.key ? -1 : 1), e.push({ nodeName: i, attrs: n });
      }
      e.sort((i, n) => i.nodeName < n.nodeName ? -1 : 1);
      let s = "";
      for (let i = 0; i < e.length; i++) {
        const n = e[i];
        s += `<${n.nodeName}`;
        for (let o = 0; o < n.attrs.length; o++) {
          const a = n.attrs[o];
          s += ` ${a.key}="${a.value}"`;
        }
        s += ">";
      }
      s += t.insert;
      for (let i = e.length - 1; i >= 0; i--)
        s += `</${e[i].nodeName}>`;
      return s;
    }).join("");
  }
  /**
   * @return {string}
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   */
  _write(t) {
    t.writeTypeRef(Om);
  }
}
const pm = (r) => new zi();
class Wo {
  /**
   * @param {ID} id
   * @param {number} length
   */
  constructor(t, e) {
    this.id = t, this.length = e;
  }
  /**
   * @type {boolean}
   */
  get deleted() {
    throw qe();
  }
  /**
   * Merge this struct with the item to the right.
   * This method is already assuming that `this.id.clock + this.length === this.id.clock`.
   * Also this method does *not* remove right from StructStore!
   * @param {AbstractStruct} right
   * @return {boolean} wether this merged with right
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   * @param {number} encodingRef
   */
  write(t, e, s) {
    throw qe();
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, e) {
    throw qe();
  }
}
const gm = 0;
class ue extends Wo {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {GC} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.constructor !== t.constructor ? !1 : (this.length += t.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, e) {
    e > 0 && (this.id.clock += e, this.length -= e), Mu(t.doc.store, this);
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeInfo(gm), t.writeLen(this.length - e);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, e) {
    return null;
  }
}
class kr {
  /**
   * @param {Uint8Array} content
   */
  constructor(t) {
    this.content = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.content];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentBinary}
   */
  copy() {
    return new kr(this.content);
  }
  /**
   * @param {number} offset
   * @return {ContentBinary}
   */
  splice(t) {
    throw qe();
  }
  /**
   * @param {ContentBinary} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeBuf(this.content);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 3;
  }
}
const mm = (r) => new kr(r.readBuf());
class fr {
  /**
   * @param {number} len
   */
  constructor(t) {
    this.len = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.len;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentDeleted}
   */
  copy() {
    return new fr(this.len);
  }
  /**
   * @param {number} offset
   * @return {ContentDeleted}
   */
  splice(t) {
    const e = new fr(this.len - t);
    return this.len = t, e;
  }
  /**
   * @param {ContentDeleted} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.len += t.len, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
    Bi(t.deleteSet, e.id.client, e.id.clock, this.len), e.markDeleted();
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeLen(this.len - e);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 1;
  }
}
const _m = (r) => new fr(r.readLen()), lf = (r, t) => new Je({ guid: r, ...t, shouldLoad: t.shouldLoad || t.autoLoad || !1 });
class xr {
  /**
   * @param {Doc} doc
   */
  constructor(t) {
    t._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = t;
    const e = {};
    this.opts = e, t.gc || (e.gc = !1), t.autoLoad && (e.autoLoad = !0), t.meta !== null && (e.meta = t.meta);
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.doc];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentDoc}
   */
  copy() {
    return new xr(lf(this.doc.guid, this.opts));
  }
  /**
   * @param {number} offset
   * @return {ContentDoc}
   */
  splice(t) {
    throw qe();
  }
  /**
   * @param {ContentDoc} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
    this.doc._item = e, t.subdocsAdded.add(this.doc), this.doc.shouldLoad && t.subdocsLoaded.add(this.doc);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
    t.subdocsAdded.has(this.doc) ? t.subdocsAdded.delete(this.doc) : t.subdocsRemoved.add(this.doc);
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeString(this.doc.guid), t.writeAny(this.opts);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 9;
  }
}
const vm = (r) => new xr(lf(r.readString(), r.readAny()));
class vs {
  /**
   * @param {Object} embed
   */
  constructor(t) {
    this.embed = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.embed];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentEmbed}
   */
  copy() {
    return new vs(this.embed);
  }
  /**
   * @param {number} offset
   * @return {ContentEmbed}
   */
  splice(t) {
    throw qe();
  }
  /**
   * @param {ContentEmbed} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeJSON(this.embed);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 5;
  }
}
const ym = (r) => new vs(r.readJSON());
class Ft {
  /**
   * @param {string} key
   * @param {Object} value
   */
  constructor(t, e) {
    this.key = t, this.value = e;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !1;
  }
  /**
   * @return {ContentFormat}
   */
  copy() {
    return new Ft(this.key, this.value);
  }
  /**
   * @param {number} _offset
   * @return {ContentFormat}
   */
  splice(t) {
    throw qe();
  }
  /**
   * @param {ContentFormat} _right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} _transaction
   * @param {Item} item
   */
  integrate(t, e) {
    const s = (
      /** @type {YText} */
      e.parent
    );
    s._searchMarker = null, s._hasFormatting = !0;
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeKey(this.key), t.writeJSON(this.value);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 6;
  }
}
const wm = (r) => new Ft(r.readKey(), r.readJSON());
class Zr {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentJSON}
   */
  copy() {
    return new Zr(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentJSON}
   */
  splice(t) {
    const e = new Zr(this.arr.slice(t));
    return this.arr = this.arr.slice(0, t), e;
  }
  /**
   * @param {ContentJSON} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.arr = this.arr.concat(t.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    const s = this.arr.length;
    t.writeLen(s - e);
    for (let i = e; i < s; i++) {
      const n = this.arr[i];
      t.writeString(n === void 0 ? "undefined" : JSON.stringify(n));
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 2;
  }
}
const bm = (r) => {
  const t = r.readLen(), e = [];
  for (let s = 0; s < t; s++) {
    const i = r.readString();
    i === "undefined" ? e.push(void 0) : e.push(JSON.parse(i));
  }
  return new Zr(e);
};
class gs {
  /**
   * @param {Array<any>} arr
   */
  constructor(t) {
    this.arr = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.arr.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.arr;
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentAny}
   */
  copy() {
    return new gs(this.arr);
  }
  /**
   * @param {number} offset
   * @return {ContentAny}
   */
  splice(t) {
    const e = new gs(this.arr.slice(t));
    return this.arr = this.arr.slice(0, t), e;
  }
  /**
   * @param {ContentAny} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.arr = this.arr.concat(t.arr), !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    const s = this.arr.length;
    t.writeLen(s - e);
    for (let i = e; i < s; i++) {
      const n = this.arr[i];
      t.writeAny(n);
    }
  }
  /**
   * @return {number}
   */
  getRef() {
    return 8;
  }
}
const Sm = (r) => {
  const t = r.readLen(), e = [];
  for (let s = 0; s < t; s++)
    e.push(r.readAny());
  return new gs(e);
};
class Me {
  /**
   * @param {string} str
   */
  constructor(t) {
    this.str = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return this.str.length;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return this.str.split("");
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentString}
   */
  copy() {
    return new Me(this.str);
  }
  /**
   * @param {number} offset
   * @return {ContentString}
   */
  splice(t) {
    const e = new Me(this.str.slice(t));
    this.str = this.str.slice(0, t);
    const s = this.str.charCodeAt(t - 1);
    return s >= 55296 && s <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", e.str = "�" + e.str.slice(1)), e;
  }
  /**
   * @param {ContentString} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.str += t.str, !0;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeString(e === 0 ? this.str : this.str.slice(e));
  }
  /**
   * @return {number}
   */
  getRef() {
    return 4;
  }
}
const km = (r) => new Me(r.readString()), xm = [
  om,
  am,
  hm,
  um,
  dm,
  fm,
  pm
], Cm = 0, Em = 1, Tm = 2, Am = 3, Mm = 4, Pm = 5, Om = 6;
class Oe {
  /**
   * @param {AbstractType<any>} type
   */
  constructor(t) {
    this.type = t;
  }
  /**
   * @return {number}
   */
  getLength() {
    return 1;
  }
  /**
   * @return {Array<any>}
   */
  getContent() {
    return [this.type];
  }
  /**
   * @return {boolean}
   */
  isCountable() {
    return !0;
  }
  /**
   * @return {ContentType}
   */
  copy() {
    return new Oe(this.type._copy());
  }
  /**
   * @param {number} offset
   * @return {ContentType}
   */
  splice(t) {
    throw qe();
  }
  /**
   * @param {ContentType} right
   * @return {boolean}
   */
  mergeWith(t) {
    return !1;
  }
  /**
   * @param {Transaction} transaction
   * @param {Item} item
   */
  integrate(t, e) {
    this.type._integrate(t.doc, e);
  }
  /**
   * @param {Transaction} transaction
   */
  delete(t) {
    let e = this.type._start;
    for (; e !== null; )
      e.deleted ? e.id.clock < (t.beforeState.get(e.id.client) || 0) && t._mergeStructs.push(e) : e.delete(t), e = e.right;
    this.type._map.forEach((s) => {
      s.deleted ? s.id.clock < (t.beforeState.get(s.id.client) || 0) && t._mergeStructs.push(s) : s.delete(t);
    }), t.changed.delete(this.type);
  }
  /**
   * @param {StructStore} store
   */
  gc(t) {
    let e = this.type._start;
    for (; e !== null; )
      e.gc(t, !0), e = e.right;
    this.type._start = null, this.type._map.forEach(
      /** @param {Item | null} item */
      (s) => {
        for (; s !== null; )
          s.gc(t, !0), s = s.left;
      }
    ), this.type._map = /* @__PURE__ */ new Map();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    this.type._write(t);
  }
  /**
   * @return {number}
   */
  getRef() {
    return 7;
  }
}
const Rm = (r) => new Oe(xm[r.readTypeRef()](r)), Rl = (r, t) => {
  let e = t, s = 0, i;
  do
    s > 0 && (e = K(e.client, e.clock + s)), i = Oi(r, e), s = e.clock - i.id.clock, e = i.redone;
  while (e !== null && i instanceof ft);
  return {
    item: i,
    diff: s
  };
}, Bc = (r, t) => {
  for (; r !== null && r.keep !== t; )
    r.keep = t, r = /** @type {AbstractType<any>} */
    r.parent._item;
}, io = (r, t, e) => {
  const { client: s, clock: i } = t.id, n = new ft(
    K(s, i + e),
    t,
    K(s, i + e - 1),
    t.right,
    t.rightOrigin,
    t.parent,
    t.parentSub,
    t.content.splice(e)
  );
  return t.deleted && n.markDeleted(), t.keep && (n.keep = !0), t.redone !== null && (n.redone = K(t.redone.client, t.redone.clock + e)), t.right = n, n.right !== null && (n.right.left = n), r._mergeStructs.push(n), n.parentSub !== null && n.right === null && n.parent._map.set(n.parentSub, n), t.length = e, n;
}, zh = (r, t) => G0(
  r,
  /** @param {StackItem} s */
  (e) => Sr(e.deletions, t)
), cf = (r, t, e, s, i, n) => {
  const o = r.doc, a = o.store, l = o.clientID, c = t.redone;
  if (c !== null)
    return ae(r, c);
  let h = (
    /** @type {AbstractType<any>} */
    t.parent._item
  ), d = null, u;
  if (h !== null && h.deleted === !0) {
    if (h.redone === null && (!e.has(h) || cf(r, h, e, s, i, n) === null))
      return null;
    for (; h.redone !== null; )
      h = ae(r, h.redone);
  }
  const p = h === null ? (
    /** @type {AbstractType<any>} */
    t.parent
  ) : (
    /** @type {ContentType} */
    h.content.type
  );
  if (t.parentSub === null) {
    for (d = t.left, u = t; d !== null; ) {
      let y = d;
      for (; y !== null && /** @type {AbstractType<any>} */
      y.parent._item !== h; )
        y = y.redone === null ? null : ae(r, y.redone);
      if (y !== null && /** @type {AbstractType<any>} */
      y.parent._item === h) {
        d = y;
        break;
      }
      d = d.left;
    }
    for (; u !== null; ) {
      let y = u;
      for (; y !== null && /** @type {AbstractType<any>} */
      y.parent._item !== h; )
        y = y.redone === null ? null : ae(r, y.redone);
      if (y !== null && /** @type {AbstractType<any>} */
      y.parent._item === h) {
        u = y;
        break;
      }
      u = u.right;
    }
  } else if (u = null, t.right && !i) {
    for (d = t; d !== null && d.right !== null && (d.right.redone || Sr(s, d.right.id) || zh(n.undoStack, d.right.id) || zh(n.redoStack, d.right.id)); )
      for (d = d.right; d.redone; )
        d = ae(r, d.redone);
    if (d && d.right !== null)
      return null;
  } else
    d = p._map.get(t.parentSub) || null;
  const f = Et(a, l), m = K(l, f), _ = new ft(
    m,
    d,
    d && d.lastId,
    u,
    u && u.id,
    p,
    t.parentSub,
    t.content.copy()
  );
  return t.redone = m, Bc(_, !0), _.integrate(r, 0), _;
};
class ft extends Wo {
  /**
   * @param {ID} id
   * @param {Item | null} left
   * @param {ID | null} origin
   * @param {Item | null} right
   * @param {ID | null} rightOrigin
   * @param {AbstractType<any>|ID|null} parent Is a type if integrated, is null if it is possible to copy parent from left or right, is ID before integration to search for it.
   * @param {string | null} parentSub
   * @param {AbstractContent} content
   */
  constructor(t, e, s, i, n, o, a, l) {
    super(t, l.getLength()), this.origin = s, this.left = e, this.right = i, this.rightOrigin = n, this.parent = o, this.parentSub = a, this.redone = null, this.content = l, this.info = this.content.isCountable() ? Sh : 0;
  }
  /**
   * This is used to mark the item as an indexed fast-search marker
   *
   * @type {boolean}
   */
  set marker(t) {
    (this.info & qa) > 0 !== t && (this.info ^= qa);
  }
  get marker() {
    return (this.info & qa) > 0;
  }
  /**
   * If true, do not garbage collect this Item.
   */
  get keep() {
    return (this.info & bh) > 0;
  }
  set keep(t) {
    this.keep !== t && (this.info ^= bh);
  }
  get countable() {
    return (this.info & Sh) > 0;
  }
  /**
   * Whether this item was deleted or not.
   * @type {Boolean}
   */
  get deleted() {
    return (this.info & Ya) > 0;
  }
  set deleted(t) {
    this.deleted !== t && (this.info ^= Ya);
  }
  markDeleted() {
    this.info |= Ya;
  }
  /**
   * Return the creator clientID of the missing op or define missing items and return null.
   *
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, e) {
    if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= Et(e, this.origin.client))
      return this.origin.client;
    if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= Et(e, this.rightOrigin.client))
      return this.rightOrigin.client;
    if (this.parent && this.parent.constructor === lr && this.id.client !== this.parent.client && this.parent.clock >= Et(e, this.parent.client))
      return this.parent.client;
    if (this.origin && (this.left = Nh(t, e, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = ae(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === ue || this.right && this.right.constructor === ue)
      this.parent = null;
    else if (!this.parent)
      this.left && this.left.constructor === ft && (this.parent = this.left.parent, this.parentSub = this.left.parentSub), this.right && this.right.constructor === ft && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
    else if (this.parent.constructor === lr) {
      const s = Oi(e, this.parent);
      s.constructor === ue ? this.parent = null : this.parent = /** @type {ContentType} */
      s.content.type;
    }
    return null;
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, e) {
    if (e > 0 && (this.id.clock += e, this.left = Nh(t, t.doc.store, K(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(e), this.length -= e), this.parent) {
      if (!this.left && (!this.right || this.right.left !== null) || this.left && this.left.right !== this.right) {
        let s = this.left, i;
        if (s !== null)
          i = s.right;
        else if (this.parentSub !== null)
          for (i = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; i !== null && i.left !== null; )
            i = i.left;
        else
          i = /** @type {AbstractType<any>} */
          this.parent._start;
        const n = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
        for (; i !== null && i !== this.right; ) {
          if (o.add(i), n.add(i), sr(this.origin, i.origin)) {
            if (i.id.client < this.id.client)
              s = i, n.clear();
            else if (sr(this.rightOrigin, i.rightOrigin))
              break;
          } else if (i.origin !== null && o.has(Oi(t.doc.store, i.origin)))
            n.has(Oi(t.doc.store, i.origin)) || (s = i, n.clear());
          else
            break;
          i = i.right;
        }
        this.left = s;
      }
      if (this.left !== null) {
        const s = this.left.right;
        this.right = s, this.left.right = this;
      } else {
        let s;
        if (this.parentSub !== null)
          for (s = /** @type {AbstractType<any>} */
          this.parent._map.get(this.parentSub) || null; s !== null && s.left !== null; )
            s = s.left;
        else
          s = /** @type {AbstractType<any>} */
          this.parent._start, this.parent._start = this;
        this.right = s;
      }
      this.right !== null ? this.right.left = this : this.parentSub !== null && (this.parent._map.set(this.parentSub, this), this.left !== null && this.left.delete(t)), this.parentSub === null && this.countable && !this.deleted && (this.parent._length += this.length), Mu(t.doc.store, this), this.content.integrate(t, this), Lh(
        t,
        /** @type {AbstractType<any>} */
        this.parent,
        this.parentSub
      ), /** @type {AbstractType<any>} */
      (this.parent._item !== null && /** @type {AbstractType<any>} */
      this.parent._item.deleted || this.parentSub !== null && this.right !== null) && this.delete(t);
    } else
      new ue(this.id, this.length).integrate(t, 0);
  }
  /**
   * Returns the next non-deleted item
   */
  get next() {
    let t = this.right;
    for (; t !== null && t.deleted; )
      t = t.right;
    return t;
  }
  /**
   * Returns the previous non-deleted item
   */
  get prev() {
    let t = this.left;
    for (; t !== null && t.deleted; )
      t = t.left;
    return t;
  }
  /**
   * Computes the last content address of this Item.
   */
  get lastId() {
    return this.length === 1 ? this.id : K(this.id.client, this.id.clock + this.length - 1);
  }
  /**
   * Try to merge two items
   *
   * @param {Item} right
   * @return {boolean}
   */
  mergeWith(t) {
    if (this.constructor === t.constructor && sr(t.origin, this.lastId) && this.right === t && sr(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && this.redone === null && t.redone === null && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
      const e = (
        /** @type {AbstractType<any>} */
        this.parent._searchMarker
      );
      return e && e.forEach((s) => {
        s.p === t && (s.p = this, !this.deleted && this.countable && (s.index -= this.length));
      }), t.keep && (this.keep = !0), this.right = t.right, this.right !== null && (this.right.left = this), this.length += t.length, !0;
    }
    return !1;
  }
  /**
   * Mark this Item as deleted.
   *
   * @param {Transaction} transaction
   */
  delete(t) {
    if (!this.deleted) {
      const e = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      this.countable && this.parentSub === null && (e._length -= this.length), this.markDeleted(), Bi(t.deleteSet, this.id.client, this.id.clock, this.length), Lh(t, e, this.parentSub), this.content.delete(t);
    }
  }
  /**
   * @param {StructStore} store
   * @param {boolean} parentGCd
   */
  gc(t, e) {
    if (!this.deleted)
      throw pe();
    this.content.gc(t), e ? B1(t, this, new ue(this.id, this.length)) : this.content = new fr(this.length);
  }
  /**
   * Transform the properties of this type to binary and write it to an
   * BinaryEncoder.
   *
   * This is called when this Item is sent to a remote peer.
   *
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder The encoder to write data to.
   * @param {number} offset
   */
  write(t, e) {
    const s = e > 0 ? K(this.id.client, this.id.clock + e - 1) : this.origin, i = this.rightOrigin, n = this.parentSub, o = this.content.getRef() & No | (s === null ? 0 : we) | // origin is defined
    (i === null ? 0 : as) | // right origin is defined
    (n === null ? 0 : Ii);
    if (t.writeInfo(o), s !== null && t.writeLeftID(s), i !== null && t.writeRightID(i), s === null && i === null) {
      const a = (
        /** @type {AbstractType<any>} */
        this.parent
      );
      if (a._item !== void 0) {
        const l = a._item;
        if (l === null) {
          const c = Cc(a);
          t.writeParentInfo(!0), t.writeString(c);
        } else
          t.writeParentInfo(!1), t.writeLeftID(l.id);
      } else
        a.constructor === String ? (t.writeParentInfo(!0), t.writeString(a)) : a.constructor === lr ? (t.writeParentInfo(!1), t.writeLeftID(a)) : pe();
      n !== null && t.writeString(n);
    }
    this.content.write(t, e);
  }
}
const hf = (r, t) => Dm[t & No](r), Dm = [
  () => {
    pe();
  },
  // GC is not ItemContent
  _m,
  // 1
  bm,
  // 2
  mm,
  // 3
  km,
  // 4
  ym,
  // 5
  wm,
  // 6
  Rm,
  // 7
  Sm,
  // 8
  vm,
  // 9
  () => {
    pe();
  }
  // 10 - Skip is not ItemContent
], Im = 10;
class le extends Wo {
  get deleted() {
    return !0;
  }
  delete() {
  }
  /**
   * @param {Skip} right
   * @return {boolean}
   */
  mergeWith(t) {
    return this.constructor !== t.constructor ? !1 : (this.length += t.length, !0);
  }
  /**
   * @param {Transaction} transaction
   * @param {number} offset
   */
  integrate(t, e) {
    pe();
  }
  /**
   * @param {UpdateEncoderV1 | UpdateEncoderV2} encoder
   * @param {number} offset
   */
  write(t, e) {
    t.writeInfo(Im), Y(t.restEncoder, this.length - e);
  }
  /**
   * @param {Transaction} transaction
   * @param {StructStore} store
   * @return {null | number}
   */
  getMissing(t, e) {
    return null;
  }
}
const df = (
  /** @type {any} */
  typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : {}
), uf = "__ $YJS$ __";
df[uf] === !0 && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");
df[uf] = !0;
const Nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbsolutePosition: Cu,
  AbstractConnector: r1,
  AbstractStruct: Wo,
  AbstractType: zt,
  Array: Ht,
  ContentAny: gs,
  ContentBinary: kr,
  ContentDeleted: fr,
  ContentDoc: xr,
  ContentEmbed: vs,
  ContentFormat: Ft,
  ContentJSON: Zr,
  ContentString: Me,
  ContentType: Oe,
  Doc: Je,
  GC: ue,
  ID: lr,
  Item: ft,
  Map: Wt,
  PermanentUserData: v1,
  RelativePosition: Vo,
  Skip: le,
  Snapshot: Ec,
  Text: Jt,
  Transaction: Ou,
  UndoManager: Ac,
  UpdateDecoderV1: Pe,
  UpdateDecoderV2: be,
  UpdateEncoderV1: qs,
  UpdateEncoderV2: Ue,
  XmlElement: $s,
  XmlFragment: Bs,
  XmlHook: Xr,
  XmlText: zi,
  YArrayEvent: Nc,
  YEvent: vn,
  YMapEvent: Fc,
  YTextEvent: Lc,
  YXmlEvent: af,
  applyUpdate: h1,
  applyUpdateV2: Go,
  cleanupYTextFormatting: of,
  compareIDs: sr,
  compareRelativePositions: A1,
  convertUpdateFormatV1ToV2: X1,
  convertUpdateFormatV2ToV1: Vu,
  createAbsolutePositionFromRelativePosition: T1,
  createDeleteSet: $o,
  createDeleteSetFromStructStore: wc,
  createDocFromSnapshot: I1,
  createID: K,
  createRelativePositionFromJSON: w1,
  createRelativePositionFromTypeIndex: S1,
  createSnapshot: Tc,
  decodeRelativePosition: E1,
  decodeSnapshot: O1,
  decodeSnapshotV2: Tu,
  decodeStateVector: kc,
  decodeUpdate: j1,
  decodeUpdateV2: Fu,
  diffUpdate: Y1,
  diffUpdateV2: Pc,
  emptySnapshot: R1,
  encodeRelativePosition: x1,
  encodeSnapshot: P1,
  encodeSnapshotV2: Eu,
  encodeStateAsUpdate: u1,
  encodeStateAsUpdateV2: Su,
  encodeStateVector: g1,
  encodeStateVectorFromUpdate: z1,
  encodeStateVectorFromUpdateV2: Bu,
  equalDeleteSets: yu,
  equalSnapshots: M1,
  findIndexSS: Ae,
  findRootTypeKey: Cc,
  getItem: Oi,
  getState: Et,
  getTypeChildren: em,
  isDeleted: Sr,
  isParentOf: Ui,
  iterateDeletedStructs: ur,
  logType: _1,
  logUpdate: V1,
  logUpdateV2: Nu,
  mergeUpdates: Lu,
  mergeUpdatesV2: Gi,
  obfuscateUpdate: q1,
  obfuscateUpdateV2: K1,
  parseUpdateMeta: H1,
  parseUpdateMetaV2: $u,
  readUpdate: c1,
  readUpdateV2: Sc,
  relativePositionToJSON: y1,
  snapshot: D1,
  snapshotContainsUpdate: F1,
  transact: mt,
  tryGc: $1,
  typeListToArraySnapshot: sm,
  typeMapGetAllSnapshot: tf,
  typeMapGetSnapshot: nm
}, Symbol.toStringTag, { value: "Module" })), Fm = [
  {
    desc: "frame element --> frame block (page v1 --> v2)",
    condition: (r) => r < 2,
    migrate: (r, t) => {
      const e = t.getMap("blocks");
      let s, i;
      e.forEach((o) => {
        const a = o.get("sys:flavour");
        a === "affine:page" && (s = o), a === "affine:surface" && (i = o);
      }), B(s), B(i);
      const n = i.get("prop:elements").get("value");
      n.forEach((o) => {
        if (o.get("type") === "frame") {
          const a = new Wt(), l = o.get("id");
          a.set("sys:flavour", "affine:frame"), a.set("sys:id", l), a.set("sys:children", new Ht()), a.set("prop:title", o.get("title").clone()), a.set("prop:xywh", o.get("xywh")), a.set("prop:index", o.get("index")), e.set(l, a), s.get("sys:children").push([l]), n.delete(l);
        }
      });
    }
  }
], Lm = [
  {
    desc: "add pageVersion in meta",
    condition: (r) => r.getMap("meta").get("workspaceVersion") < 2,
    migrate: (r) => {
      const t = r.getMap("meta");
      t.set("pageVersion", 1), t.set("workspaceVersion", 2);
    }
  }
], Bm = () => {
  const r = /* @__PURE__ */ new Map();
  return {
    crud: {
      get: async (t) => r.get(t) ?? null,
      set: async (t, e) => (r.set(t, e), t),
      delete: async (t) => {
        r.delete(t);
      },
      list: async () => Array.from(r.keys())
    }
  };
}, tl = 2, el = 2, sl = "Schema not found. The block flavour may not be registered.", ff = "$blocksuite:internal:text$", Hi = "$blocksuite:internal:native$", $m = /* @__PURE__ */ new Set(["id", "flavour", "children"]);
class Ge {
  constructor(t) {
    t instanceof Wt && t.get("type") === Hi ? this._map = t : (this._map = new Wt(), this._map.set("type", Hi), this._map.set("value", t));
  }
  get yMap() {
    return this._map;
  }
  setValue(t) {
    return this._map.set("value", t);
  }
  getValue() {
    return this._map.get("value");
  }
}
Ge.is = (r) => r instanceof Wt && r.get("type") === Hi;
Ge.from = (r) => new Ge(r.get("value"));
let ui = class zn {
  constructor(t) {
    if (typeof t == "string") {
      const e = t.replaceAll(`\r
`, `
`);
      this._yText = new Jt(e);
    } else if (t instanceof Jt)
      this._yText = t;
    else if (t instanceof Array) {
      for (const s of t)
        s.insert && (s.insert = s.insert.replaceAll(`\r
`, `
`));
      const e = new Jt();
      e.applyDelta(t), this._yText = e;
    } else
      this._yText = new Jt();
  }
  static fromDelta(t) {
    const e = new Jt();
    return e.applyDelta(t), new zn(e);
  }
  get length() {
    return this._yText.length;
  }
  get yText() {
    return this._yText;
  }
  _transact(t) {
    const e = this._yText.doc;
    if (!e)
      throw new Error("Failed to transact text! yText is not attached to a doc");
    e.transact(() => {
      t();
    }, e.clientID);
  }
  clone() {
    return new zn(this._yText.clone());
  }
  /**
   * NOTE: The string included in [index, index + length) will be deleted.
   *
   * Here are three cases for point position(index + length):
   * [{insert: 'abc', ...}, {insert: 'def', ...}, {insert: 'ghi', ...}]
   * 1. abc|de|fghi
   *    left: [{insert: 'abc', ...}]
   *    right: [{insert: 'f', ...}, {insert: 'ghi', ...}]
   * 2. abc|def|ghi
   *    left: [{insert: 'abc', ...}]
   *    right: [{insert: 'ghi', ...}]
   * 3. abc|defg|hi
   *    left: [{insert: 'abc', ...}]
   *    right: [{insert: 'hi', ...}]
   */
  split(t, e = 0) {
    if (t < 0 || e < 0 || t + e > this._yText.length)
      throw new Error("Failed to split text! Index or length out of range, index: " + t + ", length: " + e + ", text length: " + this._yText.length);
    const s = this._yText.toDelta();
    if (!(s instanceof Array))
      throw new Error("This text cannot be split because we failed to get the deltas of it.");
    let i = 0;
    const n = [];
    for (let l = 0; l < s.length; l++) {
      const c = s[l].insert;
      if (typeof c == "string") {
        if (i + c.length >= t + e) {
          const h = c.slice(t + e - i);
          n.push({
            insert: h,
            attributes: s[l].attributes
          }), n.push(...s.slice(l + 1));
          break;
        }
        i += c.length;
      } else
        throw new Error("This text cannot be split because it contains non-string insert.");
    }
    this.delete(t, this.length - t);
    const o = new Jt();
    return o.applyDelta(n), new zn(o);
  }
  insert(t, e, s) {
    if (t.length) {
      if (e < 0 || e > this._yText.length)
        throw new Error("Failed to insert text! Index or length out of range, index: " + e + ", length: " + length + ", text length: " + this._yText.length);
      this._transact(() => {
        this._yText.insert(e, t, s);
      });
    }
  }
  join(t) {
    t.toDelta().length && this._transact(() => {
      const s = t._yText.toDelta();
      s.unshift({ retain: this._yText.length }), this._yText.applyDelta(s);
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  format(t, e, s) {
    if (e !== 0) {
      if (t < 0 || e < 0 || t + e > this._yText.length)
        throw new Error("Failed to format text! Index or length out of range, index: " + t + ", length: " + e + ", text length: " + this._yText.length);
      this._transact(() => {
        this._yText.format(t, e, s);
      });
    }
  }
  delete(t, e) {
    if (e !== 0) {
      if (t < 0 || e < 0 || t + e > this._yText.length)
        throw new Error("Failed to delete text! Index or length out of range, index: " + t + ", length: " + e + ", text length: " + this._yText.length);
      this._transact(() => {
        this._yText.delete(t, e);
      });
    }
  }
  replace(t, e, s, i) {
    if (t < 0 || e < 0 || t + e > this._yText.length)
      throw new Error("Failed to replace text! The length of the text is" + this._yText.length + ", but you are trying to replace from" + t + "to" + t + e);
    this._transact(() => {
      this._yText.delete(t, e), this._yText.insert(t, s, i);
    });
  }
  clear() {
    this._yText.length && this._transact(() => {
      this._yText.delete(0, this._yText.length);
    });
  }
  applyDelta(t) {
    this._transact(() => {
      var e;
      (e = this._yText) == null || e.applyDelta(t);
    });
  }
  toDelta() {
    var t;
    return ((t = this._yText) == null ? void 0 : t.toDelta()) || [];
  }
  sliceToDelta(t, e) {
    const s = [];
    if (e && t >= e)
      return s;
    if (t === 0 && e === 0)
      return [];
    const i = this.toDelta();
    if (t < 1 && !e)
      return i;
    if (i && i instanceof Array) {
      let n = 0;
      for (let o = 0; o < i.length; o++) {
        const a = i[o];
        let l = a.insert || "";
        const c = l.length, h = e && n + c > e, d = n + c > t && s.length === 0;
        if (d && h) {
          l = l.slice(t - n, e - n), s.push({
            ...a,
            insert: l
          });
          break;
        } else
          d || h ? (l = h ? l.slice(0, e - n) : l.slice(t - n), s.push({
            ...a,
            insert: l
          })) : s.length > 0 && s.push(a);
        if (e && n + c > e)
          break;
        n = n + c;
      }
    }
    return s;
  }
  toString() {
    var t;
    return ((t = this._yText) == null ? void 0 : t.toString()) || "";
  }
};
function pf(r) {
  return r !== null && typeof r == "object" && Object.prototype.toString.call(r) === "[object Object]" && [Object, void 0, null].some((t) => t === r.constructor);
}
function Us(r, { deep: t = !0, transform: e = (s) => s } = {}) {
  if (r instanceof Ge)
    return r.yMap;
  if (r instanceof ui)
    return r.yText.doc ? r.yText.clone() : r.yText;
  if (Array.isArray(r)) {
    const s = new Ht(), i = r.map((n) => t ? Us(n, { deep: t, transform: e }) : n);
    return s.insert(0, i), s;
  }
  if (pf(r)) {
    const s = new Wt();
    return Object.entries(r).forEach(([i, n]) => {
      s.set(i, t ? Us(n, { deep: t, transform: e }) : n);
    }), s;
  }
  return r;
}
function no(r, { deep: t = !0, transform: e = (s) => s } = {}) {
  if (Ge.is(r)) {
    const s = new Ge(r);
    return e(s, r);
  }
  if (r instanceof Jt) {
    const s = new ui(r);
    return e(s, r);
  }
  if (r instanceof Ht) {
    const s = r.toArray().map((i) => t ? no(i, { deep: t, transform: e }) : i);
    return e(s, r);
  }
  if (r instanceof Wt) {
    const s = Object.fromEntries(Array.from(r.entries()).map(([i, n]) => [i, t ? no(n, { deep: t, transform: e }) : n]));
    return e(s, r);
  }
  return e(r, r);
}
class gf {
  constructor() {
    this._skipNext = !1, this._stashed = /* @__PURE__ */ new Set(), this._getOrigin = (t) => ({
      doc: t,
      proxy: !0,
      target: this
    }), this._updateWithSkip = (t) => {
      this._skipNext = !0, t(), this._skipNext = !1;
    }, this._transact = (t, e) => {
      t.transact(e, this._getOrigin(t));
    }, this._onObserve = (t, e) => {
      var s, i, n;
      ((s = t.transaction.origin) == null ? void 0 : s.proxy) !== !0 && (!t.transaction.local || t.transaction.origin instanceof Ac) && e(), (n = (i = this._options).onChange) == null || n.call(i, this._proxy);
    };
  }
  get proxy() {
    return this._proxy;
  }
}
const We = /* @__PURE__ */ new WeakMap();
class Um extends gf {
  constructor(t, e, s) {
    super(), this._source = t, this._ySource = e, this._options = s, this._getProxy = () => new Proxy(this._source, {
      has: (i, n) => Reflect.has(i, n),
      set: (i, n, o, a) => {
        var p, f;
        if (typeof n != "string")
          throw new Error("key cannot be a symbol");
        const l = Number(n);
        if (this._skipNext || Number.isNaN(l))
          return Reflect.set(i, n, o, a);
        if (this._stashed.has(l)) {
          const m = Reflect.set(i, n, o, a);
          return (f = (p = this._options).onChange) == null || f.call(p, this._proxy), m;
        }
        const c = We.get(this._ySource);
        B(c, "YData is not subscribed before changes");
        const h = this._ySource.doc;
        B(h, "YData is not bound to a Y.Doc");
        const d = Us(o);
        this._transact(h, () => {
          l < this._ySource.length && this._ySource.delete(l, 1), this._ySource.insert(l, [d]);
        });
        const u = pr(d, this._options);
        return Reflect.set(i, n, u, a);
      },
      get: (i, n, o) => Reflect.get(i, n, o),
      deleteProperty: (i, n) => {
        if (typeof n != "string")
          throw new Error("key cannot be a symbol");
        const o = We.get(this._ySource);
        B(o, "YData is not subscribed before changes");
        const a = this._ySource.doc;
        B(a, "YData is not bound to a Y.Doc");
        const l = Number(n);
        return this._skipNext || Number.isNaN(l) || this._transact(a, () => {
          this._ySource.delete(l, 1);
        }), Reflect.deleteProperty(i, n);
      }
    }), this._observer = (i) => {
      this._onObserve(i, () => {
        let n = 0;
        i.changes.delta.forEach((o) => {
          if (o.retain) {
            n += o.retain;
            return;
          }
          if (o.delete) {
            this._updateWithSkip(() => {
              this._source.splice(n, o.delete);
            });
            return;
          }
          if (o.insert) {
            const l = [o.insert].flat().map((c) => pr(c));
            this._updateWithSkip(() => {
              this._source.splice(n, 0, ...l);
            }), n += o.insert.length;
          }
        });
      });
    }, this._proxy = this._getProxy(), We.set(e, this), e.observe(this._observer);
  }
  stash(t) {
    this._stashed.add(t);
  }
  pop(t) {
    const e = this._source[t];
    this._stashed.delete(t), this._proxy[t] = e;
  }
}
class Gm extends gf {
  constructor(t, e, s) {
    super(), this._source = t, this._ySource = e, this._options = s, this._getProxy = () => new Proxy(this._source, {
      has: (i, n) => Reflect.has(i, n),
      set: (i, n, o, a) => {
        var u, p;
        if (typeof n != "string")
          throw new Error("key cannot be a symbol");
        if (this._skipNext)
          return Reflect.set(i, n, o, a);
        if (this._stashed.has(n)) {
          const f = Reflect.set(i, n, o, a);
          return (p = (u = this._options).onChange) == null || p.call(u, this._proxy), f;
        }
        const l = We.get(this._ySource);
        B(l, "YData is not subscribed before changes");
        const c = this._ySource.doc;
        B(c, "YData is not bound to a Y.Doc");
        const h = Us(o);
        this._transact(c, () => {
          this._ySource.set(n, h);
        });
        const d = pr(h, this._options);
        return Reflect.set(i, n, d, a);
      },
      get: (i, n, o) => Reflect.get(i, n, o),
      deleteProperty: (i, n) => {
        if (typeof n != "string")
          throw new Error("key cannot be a symbol");
        if (this._skipNext)
          return Reflect.deleteProperty(i, n);
        const o = We.get(this._ySource);
        B(o, "YData is not subscribed before changes");
        const a = this._ySource.doc;
        return B(a, "YData is not bound to a Y.Doc"), this._transact(a, () => {
          this._ySource.delete(n);
        }), Reflect.deleteProperty(i, n);
      }
    }), this._observer = (i) => {
      this._onObserve(i, () => {
        i.keysChanged.forEach((n) => {
          const o = i.changes.keys.get(n);
          if (o) {
            if (o.action === "delete")
              this._updateWithSkip(() => {
                delete this._source[n];
              });
            else if (o.action === "add" || o.action === "update") {
              const a = this._ySource.get(n);
              this._updateWithSkip(() => {
                this._source[n] = We.has(a) ? We.get(a) : pr(a, this._options);
              });
            }
          }
        });
      });
    }, this._proxy = this._getProxy(), We.set(e, this), e.observe(this._observer);
  }
  stash(t) {
    this._stashed.add(t);
  }
  pop(t) {
    const e = this._source[t];
    this._stashed.delete(t), this._proxy[t] = e;
  }
}
function pr(r, t = {}) {
  return We.has(r) ? We.get(r).proxy : no(r, {
    transform: (e, s) => Ge.is(s) ? e : s instanceof Ht ? new Um(e, s, t).proxy : s instanceof Wt ? new Gm(e, s, t).proxy : e
  });
}
var ht;
(function(r) {
  r.assertEqual = (i) => i;
  function t(i) {
  }
  r.assertIs = t;
  function e(i) {
    throw new Error();
  }
  r.assertNever = e, r.arrayToEnum = (i) => {
    const n = {};
    for (const o of i)
      n[o] = o;
    return n;
  }, r.getValidEnumValues = (i) => {
    const n = r.objectKeys(i).filter((a) => typeof i[i[a]] != "number"), o = {};
    for (const a of n)
      o[a] = i[a];
    return r.objectValues(o);
  }, r.objectValues = (i) => r.objectKeys(i).map(function(n) {
    return i[n];
  }), r.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const n = [];
    for (const o in i)
      Object.prototype.hasOwnProperty.call(i, o) && n.push(o);
    return n;
  }, r.find = (i, n) => {
    for (const o of i)
      if (n(o))
        return o;
  }, r.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function s(i, n = " | ") {
    return i.map((o) => typeof o == "string" ? `'${o}'` : o).join(n);
  }
  r.joinValues = s, r.jsonStringifyReplacer = (i, n) => typeof n == "bigint" ? n.toString() : n;
})(ht || (ht = {}));
var Dl;
(function(r) {
  r.mergeShapes = (t, e) => ({
    ...t,
    ...e
    // second overwrites first
  });
})(Dl || (Dl = {}));
const F = ht.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Os = (r) => {
  switch (typeof r) {
    case "undefined":
      return F.undefined;
    case "string":
      return F.string;
    case "number":
      return isNaN(r) ? F.nan : F.number;
    case "boolean":
      return F.boolean;
    case "function":
      return F.function;
    case "bigint":
      return F.bigint;
    case "symbol":
      return F.symbol;
    case "object":
      return Array.isArray(r) ? F.array : r === null ? F.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? F.promise : typeof Map < "u" && r instanceof Map ? F.map : typeof Set < "u" && r instanceof Set ? F.set : typeof Date < "u" && r instanceof Date ? F.date : F.object;
    default:
      return F.unknown;
  }
}, O = ht.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), Vm = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class Le extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const e = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, e) : this.__proto__ = e, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const e = t || function(n) {
      return n.message;
    }, s = { _errors: [] }, i = (n) => {
      for (const o of n.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(i);
        else if (o.code === "invalid_return_type")
          i(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          i(o.argumentsError);
        else if (o.path.length === 0)
          s._errors.push(e(o));
        else {
          let a = s, l = 0;
          for (; l < o.path.length; ) {
            const c = o.path[l];
            l === o.path.length - 1 ? (a[c] = a[c] || { _errors: [] }, a[c]._errors.push(e(o))) : a[c] = a[c] || { _errors: [] }, a = a[c], l++;
          }
        }
    };
    return i(this), s;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ht.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (e) => e.message) {
    const e = {}, s = [];
    for (const i of this.issues)
      i.path.length > 0 ? (e[i.path[0]] = e[i.path[0]] || [], e[i.path[0]].push(t(i))) : s.push(t(i));
    return { formErrors: s, fieldErrors: e };
  }
  get formErrors() {
    return this.flatten();
  }
}
Le.create = (r) => new Le(r);
const Wi = (r, t) => {
  let e;
  switch (r.code) {
    case O.invalid_type:
      r.received === F.undefined ? e = "Required" : e = `Expected ${r.expected}, received ${r.received}`;
      break;
    case O.invalid_literal:
      e = `Invalid literal value, expected ${JSON.stringify(r.expected, ht.jsonStringifyReplacer)}`;
      break;
    case O.unrecognized_keys:
      e = `Unrecognized key(s) in object: ${ht.joinValues(r.keys, ", ")}`;
      break;
    case O.invalid_union:
      e = "Invalid input";
      break;
    case O.invalid_union_discriminator:
      e = `Invalid discriminator value. Expected ${ht.joinValues(r.options)}`;
      break;
    case O.invalid_enum_value:
      e = `Invalid enum value. Expected ${ht.joinValues(r.options)}, received '${r.received}'`;
      break;
    case O.invalid_arguments:
      e = "Invalid function arguments";
      break;
    case O.invalid_return_type:
      e = "Invalid function return type";
      break;
    case O.invalid_date:
      e = "Invalid date";
      break;
    case O.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (e = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (e = `${e} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? e = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? e = `Invalid input: must end with "${r.validation.endsWith}"` : ht.assertNever(r.validation) : r.validation !== "regex" ? e = `Invalid ${r.validation}` : e = "Invalid";
      break;
    case O.too_small:
      r.type === "array" ? e = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? e = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? e = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? e = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : e = "Invalid input";
      break;
    case O.too_big:
      r.type === "array" ? e = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? e = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? e = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? e = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? e = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : e = "Invalid input";
      break;
    case O.custom:
      e = "Invalid input";
      break;
    case O.invalid_intersection_types:
      e = "Intersection results could not be merged";
      break;
    case O.not_multiple_of:
      e = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case O.not_finite:
      e = "Number must be finite";
      break;
    default:
      e = t.defaultError, ht.assertNever(r);
  }
  return { message: e };
};
let mf = Wi;
function jm(r) {
  mf = r;
}
function oo() {
  return mf;
}
const ao = (r) => {
  const { data: t, path: e, errorMaps: s, issueData: i } = r, n = [...e, ...i.path || []], o = {
    ...i,
    path: n
  };
  let a = "";
  const l = s.filter((c) => !!c).slice().reverse();
  for (const c of l)
    a = c(o, { data: t, defaultError: a }).message;
  return {
    ...i,
    path: n,
    message: i.message || a
  };
}, zm = [];
function L(r, t) {
  const e = ao({
    issueData: t,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      r.schemaErrorMap,
      oo(),
      Wi
      // then global default map
    ].filter((s) => !!s)
  });
  r.common.issues.push(e);
}
class ne {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, e) {
    const s = [];
    for (const i of e) {
      if (i.status === "aborted")
        return X;
      i.status === "dirty" && t.dirty(), s.push(i.value);
    }
    return { status: t.value, value: s };
  }
  static async mergeObjectAsync(t, e) {
    const s = [];
    for (const i of e)
      s.push({
        key: await i.key,
        value: await i.value
      });
    return ne.mergeObjectSync(t, s);
  }
  static mergeObjectSync(t, e) {
    const s = {};
    for (const i of e) {
      const { key: n, value: o } = i;
      if (n.status === "aborted" || o.status === "aborted")
        return X;
      n.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), n.value !== "__proto__" && (typeof o.value < "u" || i.alwaysSet) && (s[n.value] = o.value);
    }
    return { status: t.value, value: s };
  }
}
const X = Object.freeze({
  status: "aborted"
}), _f = (r) => ({ status: "dirty", value: r }), ce = (r) => ({ status: "valid", value: r }), Il = (r) => r.status === "aborted", Nl = (r) => r.status === "dirty", Yi = (r) => r.status === "valid", lo = (r) => typeof Promise < "u" && r instanceof Promise;
var V;
(function(r) {
  r.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, r.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(V || (V = {}));
class Xe {
  constructor(t, e, s, i) {
    this._cachedPath = [], this.parent = t, this.data = e, this._path = s, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Hh = (r, t) => {
  if (Yi(t))
    return { success: !0, data: t.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const e = new Le(r.common.issues);
      return this._error = e, this._error;
    }
  };
};
function J(r) {
  if (!r)
    return {};
  const { errorMap: t, invalid_type_error: e, required_error: s, description: i } = r;
  if (t && (e || s))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: s ?? a.defaultError } : { message: e ?? a.defaultError }, description: i };
}
class tt {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Os(t.data);
  }
  _getOrReturnCtx(t, e) {
    return e || {
      common: t.parent.common,
      data: t.data,
      parsedType: Os(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new ne(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Os(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const e = this._parse(t);
    if (lo(e))
      throw new Error("Synchronous parse encountered promise.");
    return e;
  }
  _parseAsync(t) {
    const e = this._parse(t);
    return Promise.resolve(e);
  }
  parse(t, e) {
    const s = this.safeParse(t, e);
    if (s.success)
      return s.data;
    throw s.error;
  }
  safeParse(t, e) {
    var s;
    const i = {
      common: {
        issues: [],
        async: (s = e == null ? void 0 : e.async) !== null && s !== void 0 ? s : !1,
        contextualErrorMap: e == null ? void 0 : e.errorMap
      },
      path: (e == null ? void 0 : e.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Os(t)
    }, n = this._parseSync({ data: t, path: i.path, parent: i });
    return Hh(i, n);
  }
  async parseAsync(t, e) {
    const s = await this.safeParseAsync(t, e);
    if (s.success)
      return s.data;
    throw s.error;
  }
  async safeParseAsync(t, e) {
    const s = {
      common: {
        issues: [],
        contextualErrorMap: e == null ? void 0 : e.errorMap,
        async: !0
      },
      path: (e == null ? void 0 : e.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Os(t)
    }, i = this._parse({ data: t, path: s.path, parent: s }), n = await (lo(i) ? i : Promise.resolve(i));
    return Hh(s, n);
  }
  refine(t, e) {
    const s = (i) => typeof e == "string" || typeof e > "u" ? { message: e } : typeof e == "function" ? e(i) : e;
    return this._refinement((i, n) => {
      const o = t(i), a = () => n.addIssue({
        code: O.custom,
        ...s(i)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((l) => l ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(t, e) {
    return this._refinement((s, i) => t(s) ? !0 : (i.addIssue(typeof e == "function" ? e(s, i) : e), !1));
  }
  _refinement(t) {
    return new Ve({
      schema: this,
      typeName: W.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return ls.create(this, this._def);
  }
  nullable() {
    return _r.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Be.create(this, this._def);
  }
  promise() {
    return Qr.create(this, this._def);
  }
  or(t) {
    return Zi.create([this, t], this._def);
  }
  and(t) {
    return Ji.create(this, t, this._def);
  }
  transform(t) {
    return new Ve({
      ...J(this._def),
      schema: this,
      typeName: W.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const e = typeof t == "function" ? t : () => t;
    return new rn({
      ...J(this._def),
      innerType: this,
      defaultValue: e,
      typeName: W.ZodDefault
    });
  }
  brand() {
    return new yf({
      typeName: W.ZodBranded,
      type: this,
      ...J(this._def)
    });
  }
  catch(t) {
    const e = typeof t == "function" ? t : () => t;
    return new fo({
      ...J(this._def),
      innerType: this,
      catchValue: e,
      typeName: W.ZodCatch
    });
  }
  describe(t) {
    const e = this.constructor;
    return new e({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return yn.create(this, t);
  }
  readonly() {
    return go.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Hm = /^c[^\s-]{8,}$/i, Wm = /^[a-z][a-z0-9]*$/, Ym = /^[0-9A-HJKMNP-TV-Z]{26}$/, qm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Km = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Xm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let rl;
const Zm = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Jm = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Qm = (r) => r.precision ? r.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${r.precision}}Z$`) : r.precision === 0 ? r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : r.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function t2(r, t) {
  return !!((t === "v4" || !t) && Zm.test(r) || (t === "v6" || !t) && Jm.test(r));
}
class Fe extends tt {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== F.string) {
      const n = this._getOrReturnCtx(t);
      return L(
        n,
        {
          code: O.invalid_type,
          expected: F.string,
          received: n.parsedType
        }
        //
      ), X;
    }
    const s = new ne();
    let i;
    for (const n of this._def.checks)
      if (n.kind === "min")
        t.data.length < n.value && (i = this._getOrReturnCtx(t, i), L(i, {
          code: O.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), s.dirty());
      else if (n.kind === "max")
        t.data.length > n.value && (i = this._getOrReturnCtx(t, i), L(i, {
          code: O.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: n.message
        }), s.dirty());
      else if (n.kind === "length") {
        const o = t.data.length > n.value, a = t.data.length < n.value;
        (o || a) && (i = this._getOrReturnCtx(t, i), o ? L(i, {
          code: O.too_big,
          maximum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }) : a && L(i, {
          code: O.too_small,
          minimum: n.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: n.message
        }), s.dirty());
      } else if (n.kind === "email")
        Km.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "email",
          code: O.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "emoji")
        rl || (rl = new RegExp(Xm, "u")), rl.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "emoji",
          code: O.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "uuid")
        qm.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "uuid",
          code: O.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "cuid")
        Hm.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "cuid",
          code: O.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "cuid2")
        Wm.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "cuid2",
          code: O.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "ulid")
        Ym.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "ulid",
          code: O.invalid_string,
          message: n.message
        }), s.dirty());
      else if (n.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), L(i, {
            validation: "url",
            code: O.invalid_string,
            message: n.message
          }), s.dirty();
        }
      else
        n.kind === "regex" ? (n.regex.lastIndex = 0, n.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "regex",
          code: O.invalid_string,
          message: n.message
        }), s.dirty())) : n.kind === "trim" ? t.data = t.data.trim() : n.kind === "includes" ? t.data.includes(n.value, n.position) || (i = this._getOrReturnCtx(t, i), L(i, {
          code: O.invalid_string,
          validation: { includes: n.value, position: n.position },
          message: n.message
        }), s.dirty()) : n.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : n.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : n.kind === "startsWith" ? t.data.startsWith(n.value) || (i = this._getOrReturnCtx(t, i), L(i, {
          code: O.invalid_string,
          validation: { startsWith: n.value },
          message: n.message
        }), s.dirty()) : n.kind === "endsWith" ? t.data.endsWith(n.value) || (i = this._getOrReturnCtx(t, i), L(i, {
          code: O.invalid_string,
          validation: { endsWith: n.value },
          message: n.message
        }), s.dirty()) : n.kind === "datetime" ? Qm(n).test(t.data) || (i = this._getOrReturnCtx(t, i), L(i, {
          code: O.invalid_string,
          validation: "datetime",
          message: n.message
        }), s.dirty()) : n.kind === "ip" ? t2(t.data, n.version) || (i = this._getOrReturnCtx(t, i), L(i, {
          validation: "ip",
          code: O.invalid_string,
          message: n.message
        }), s.dirty()) : ht.assertNever(n);
    return { status: s.value, value: t.data };
  }
  _regex(t, e, s) {
    return this.refinement((i) => t.test(i), {
      validation: e,
      code: O.invalid_string,
      ...V.errToObj(s)
    });
  }
  _addCheck(t) {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...V.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...V.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...V.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...V.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...V.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...V.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...V.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...V.errToObj(t) });
  }
  datetime(t) {
    var e;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (e = t == null ? void 0 : t.offset) !== null && e !== void 0 ? e : !1,
      ...V.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, e) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...V.errToObj(e)
    });
  }
  includes(t, e) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: e == null ? void 0 : e.position,
      ...V.errToObj(e == null ? void 0 : e.message)
    });
  }
  startsWith(t, e) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...V.errToObj(e)
    });
  }
  endsWith(t, e) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...V.errToObj(e)
    });
  }
  min(t, e) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...V.errToObj(e)
    });
  }
  max(t, e) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...V.errToObj(e)
    });
  }
  length(t, e) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...V.errToObj(e)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, V.errToObj(t));
  }
  trim() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Fe({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "min" && (t === null || e.value > t) && (t = e.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "max" && (t === null || e.value < t) && (t = e.value);
    return t;
  }
}
Fe.create = (r) => {
  var t;
  return new Fe({
    checks: [],
    typeName: W.ZodString,
    coerce: (t = r == null ? void 0 : r.coerce) !== null && t !== void 0 ? t : !1,
    ...J(r)
  });
};
function e2(r, t) {
  const e = (r.toString().split(".")[1] || "").length, s = (t.toString().split(".")[1] || "").length, i = e > s ? e : s, n = parseInt(r.toFixed(i).replace(".", "")), o = parseInt(t.toFixed(i).replace(".", ""));
  return n % o / Math.pow(10, i);
}
class Gs extends tt {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== F.number) {
      const n = this._getOrReturnCtx(t);
      return L(n, {
        code: O.invalid_type,
        expected: F.number,
        received: n.parsedType
      }), X;
    }
    let s;
    const i = new ne();
    for (const n of this._def.checks)
      n.kind === "int" ? ht.isInteger(t.data) || (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.invalid_type,
        expected: "integer",
        received: "float",
        message: n.message
      }), i.dirty()) : n.kind === "min" ? (n.inclusive ? t.data < n.value : t.data <= n.value) && (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.too_small,
        minimum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? t.data > n.value : t.data >= n.value) && (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.too_big,
        maximum: n.value,
        type: "number",
        inclusive: n.inclusive,
        exact: !1,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? e2(t.data, n.value) !== 0 && (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), i.dirty()) : n.kind === "finite" ? Number.isFinite(t.data) || (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.not_finite,
        message: n.message
      }), i.dirty()) : ht.assertNever(n);
    return { status: i.value, value: t.data };
  }
  gte(t, e) {
    return this.setLimit("min", t, !0, V.toString(e));
  }
  gt(t, e) {
    return this.setLimit("min", t, !1, V.toString(e));
  }
  lte(t, e) {
    return this.setLimit("max", t, !0, V.toString(e));
  }
  lt(t, e) {
    return this.setLimit("max", t, !1, V.toString(e));
  }
  setLimit(t, e, s, i) {
    return new Gs({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: e,
          inclusive: s,
          message: V.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Gs({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: V.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: V.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: V.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: V.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: V.toString(t)
    });
  }
  multipleOf(t, e) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: V.toString(e)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: V.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: V.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: V.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "min" && (t === null || e.value > t) && (t = e.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "max" && (t === null || e.value < t) && (t = e.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && ht.isInteger(t.value));
  }
  get isFinite() {
    let t = null, e = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf")
        return !0;
      s.kind === "min" ? (e === null || s.value > e) && (e = s.value) : s.kind === "max" && (t === null || s.value < t) && (t = s.value);
    }
    return Number.isFinite(e) && Number.isFinite(t);
  }
}
Gs.create = (r) => new Gs({
  checks: [],
  typeName: W.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...J(r)
});
class Vs extends tt {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== F.bigint) {
      const n = this._getOrReturnCtx(t);
      return L(n, {
        code: O.invalid_type,
        expected: F.bigint,
        received: n.parsedType
      }), X;
    }
    let s;
    const i = new ne();
    for (const n of this._def.checks)
      n.kind === "min" ? (n.inclusive ? t.data < n.value : t.data <= n.value) && (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.too_small,
        type: "bigint",
        minimum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "max" ? (n.inclusive ? t.data > n.value : t.data >= n.value) && (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.too_big,
        type: "bigint",
        maximum: n.value,
        inclusive: n.inclusive,
        message: n.message
      }), i.dirty()) : n.kind === "multipleOf" ? t.data % n.value !== BigInt(0) && (s = this._getOrReturnCtx(t, s), L(s, {
        code: O.not_multiple_of,
        multipleOf: n.value,
        message: n.message
      }), i.dirty()) : ht.assertNever(n);
    return { status: i.value, value: t.data };
  }
  gte(t, e) {
    return this.setLimit("min", t, !0, V.toString(e));
  }
  gt(t, e) {
    return this.setLimit("min", t, !1, V.toString(e));
  }
  lte(t, e) {
    return this.setLimit("max", t, !0, V.toString(e));
  }
  lt(t, e) {
    return this.setLimit("max", t, !1, V.toString(e));
  }
  setLimit(t, e, s, i) {
    return new Vs({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: e,
          inclusive: s,
          message: V.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Vs({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: V.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: V.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: V.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: V.toString(t)
    });
  }
  multipleOf(t, e) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: V.toString(e)
    });
  }
  get minValue() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "min" && (t === null || e.value > t) && (t = e.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "max" && (t === null || e.value < t) && (t = e.value);
    return t;
  }
}
Vs.create = (r) => {
  var t;
  return new Vs({
    checks: [],
    typeName: W.ZodBigInt,
    coerce: (t = r == null ? void 0 : r.coerce) !== null && t !== void 0 ? t : !1,
    ...J(r)
  });
};
class qi extends tt {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean) {
      const s = this._getOrReturnCtx(t);
      return L(s, {
        code: O.invalid_type,
        expected: F.boolean,
        received: s.parsedType
      }), X;
    }
    return ce(t.data);
  }
}
qi.create = (r) => new qi({
  typeName: W.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...J(r)
});
class gr extends tt {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== F.date) {
      const n = this._getOrReturnCtx(t);
      return L(n, {
        code: O.invalid_type,
        expected: F.date,
        received: n.parsedType
      }), X;
    }
    if (isNaN(t.data.getTime())) {
      const n = this._getOrReturnCtx(t);
      return L(n, {
        code: O.invalid_date
      }), X;
    }
    const s = new ne();
    let i;
    for (const n of this._def.checks)
      n.kind === "min" ? t.data.getTime() < n.value && (i = this._getOrReturnCtx(t, i), L(i, {
        code: O.too_small,
        message: n.message,
        inclusive: !0,
        exact: !1,
        minimum: n.value,
        type: "date"
      }), s.dirty()) : n.kind === "max" ? t.data.getTime() > n.value && (i = this._getOrReturnCtx(t, i), L(i, {
        code: O.too_big,
        message: n.message,
        inclusive: !0,
        exact: !1,
        maximum: n.value,
        type: "date"
      }), s.dirty()) : ht.assertNever(n);
    return {
      status: s.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new gr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, e) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: V.toString(e)
    });
  }
  max(t, e) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: V.toString(e)
    });
  }
  get minDate() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "min" && (t === null || e.value > t) && (t = e.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const e of this._def.checks)
      e.kind === "max" && (t === null || e.value < t) && (t = e.value);
    return t != null ? new Date(t) : null;
  }
}
gr.create = (r) => new gr({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: W.ZodDate,
  ...J(r)
});
class co extends tt {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const s = this._getOrReturnCtx(t);
      return L(s, {
        code: O.invalid_type,
        expected: F.symbol,
        received: s.parsedType
      }), X;
    }
    return ce(t.data);
  }
}
co.create = (r) => new co({
  typeName: W.ZodSymbol,
  ...J(r)
});
class Ki extends tt {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const s = this._getOrReturnCtx(t);
      return L(s, {
        code: O.invalid_type,
        expected: F.undefined,
        received: s.parsedType
      }), X;
    }
    return ce(t.data);
  }
}
Ki.create = (r) => new Ki({
  typeName: W.ZodUndefined,
  ...J(r)
});
class Xi extends tt {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const s = this._getOrReturnCtx(t);
      return L(s, {
        code: O.invalid_type,
        expected: F.null,
        received: s.parsedType
      }), X;
    }
    return ce(t.data);
  }
}
Xi.create = (r) => new Xi({
  typeName: W.ZodNull,
  ...J(r)
});
class Jr extends tt {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return ce(t.data);
  }
}
Jr.create = (r) => new Jr({
  typeName: W.ZodAny,
  ...J(r)
});
class cr extends tt {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return ce(t.data);
  }
}
cr.create = (r) => new cr({
  typeName: W.ZodUnknown,
  ...J(r)
});
class ms extends tt {
  _parse(t) {
    const e = this._getOrReturnCtx(t);
    return L(e, {
      code: O.invalid_type,
      expected: F.never,
      received: e.parsedType
    }), X;
  }
}
ms.create = (r) => new ms({
  typeName: W.ZodNever,
  ...J(r)
});
class ho extends tt {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const s = this._getOrReturnCtx(t);
      return L(s, {
        code: O.invalid_type,
        expected: F.void,
        received: s.parsedType
      }), X;
    }
    return ce(t.data);
  }
}
ho.create = (r) => new ho({
  typeName: W.ZodVoid,
  ...J(r)
});
class Be extends tt {
  _parse(t) {
    const { ctx: e, status: s } = this._processInputParams(t), i = this._def;
    if (e.parsedType !== F.array)
      return L(e, {
        code: O.invalid_type,
        expected: F.array,
        received: e.parsedType
      }), X;
    if (i.exactLength !== null) {
      const o = e.data.length > i.exactLength.value, a = e.data.length < i.exactLength.value;
      (o || a) && (L(e, {
        code: o ? O.too_big : O.too_small,
        minimum: a ? i.exactLength.value : void 0,
        maximum: o ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), s.dirty());
    }
    if (i.minLength !== null && e.data.length < i.minLength.value && (L(e, {
      code: O.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), s.dirty()), i.maxLength !== null && e.data.length > i.maxLength.value && (L(e, {
      code: O.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), s.dirty()), e.common.async)
      return Promise.all([...e.data].map((o, a) => i.type._parseAsync(new Xe(e, o, e.path, a)))).then((o) => ne.mergeArray(s, o));
    const n = [...e.data].map((o, a) => i.type._parseSync(new Xe(e, o, e.path, a)));
    return ne.mergeArray(s, n);
  }
  get element() {
    return this._def.type;
  }
  min(t, e) {
    return new Be({
      ...this._def,
      minLength: { value: t, message: V.toString(e) }
    });
  }
  max(t, e) {
    return new Be({
      ...this._def,
      maxLength: { value: t, message: V.toString(e) }
    });
  }
  length(t, e) {
    return new Be({
      ...this._def,
      exactLength: { value: t, message: V.toString(e) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Be.create = (r, t) => new Be({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: W.ZodArray,
  ...J(t)
});
function Ur(r) {
  if (r instanceof Ct) {
    const t = {};
    for (const e in r.shape) {
      const s = r.shape[e];
      t[e] = ls.create(Ur(s));
    }
    return new Ct({
      ...r._def,
      shape: () => t
    });
  } else
    return r instanceof Be ? new Be({
      ...r._def,
      type: Ur(r.element)
    }) : r instanceof ls ? ls.create(Ur(r.unwrap())) : r instanceof _r ? _r.create(Ur(r.unwrap())) : r instanceof Ze ? Ze.create(r.items.map((t) => Ur(t))) : r;
}
class Ct extends tt {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), e = ht.objectKeys(t);
    return this._cached = { shape: t, keys: e };
  }
  _parse(t) {
    if (this._getType(t) !== F.object) {
      const c = this._getOrReturnCtx(t);
      return L(c, {
        code: O.invalid_type,
        expected: F.object,
        received: c.parsedType
      }), X;
    }
    const { status: s, ctx: i } = this._processInputParams(t), { shape: n, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof ms && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const h = n[c], d = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: h._parse(new Xe(i, d, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof ms) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const h of a)
          l.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: i.data[h] }
          });
      else if (c === "strict")
        a.length > 0 && (L(i, {
          code: O.unrecognized_keys,
          keys: a
        }), s.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const h of a) {
        const d = i.data[h];
        l.push({
          key: { status: "valid", value: h },
          value: c._parse(
            new Xe(i, d, i.path, h)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: h in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const h of l) {
        const d = await h.key;
        c.push({
          key: d,
          value: await h.value,
          alwaysSet: h.alwaysSet
        });
      }
      return c;
    }).then((c) => ne.mergeObjectSync(s, c)) : ne.mergeObjectSync(s, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return V.errToObj, new Ct({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (e, s) => {
          var i, n, o, a;
          const l = (o = (n = (i = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(i, e, s).message) !== null && o !== void 0 ? o : s.defaultError;
          return e.code === "unrecognized_keys" ? {
            message: (a = V.errToObj(t).message) !== null && a !== void 0 ? a : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new Ct({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ct({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Ct({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Ct({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: W.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, e) {
    return this.augment({ [t]: e });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Ct({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const e = {};
    return ht.objectKeys(t).forEach((s) => {
      t[s] && this.shape[s] && (e[s] = this.shape[s]);
    }), new Ct({
      ...this._def,
      shape: () => e
    });
  }
  omit(t) {
    const e = {};
    return ht.objectKeys(this.shape).forEach((s) => {
      t[s] || (e[s] = this.shape[s]);
    }), new Ct({
      ...this._def,
      shape: () => e
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Ur(this);
  }
  partial(t) {
    const e = {};
    return ht.objectKeys(this.shape).forEach((s) => {
      const i = this.shape[s];
      t && !t[s] ? e[s] = i : e[s] = i.optional();
    }), new Ct({
      ...this._def,
      shape: () => e
    });
  }
  required(t) {
    const e = {};
    return ht.objectKeys(this.shape).forEach((s) => {
      if (t && !t[s])
        e[s] = this.shape[s];
      else {
        let n = this.shape[s];
        for (; n instanceof ls; )
          n = n._def.innerType;
        e[s] = n;
      }
    }), new Ct({
      ...this._def,
      shape: () => e
    });
  }
  keyof() {
    return vf(ht.objectKeys(this.shape));
  }
}
Ct.create = (r, t) => new Ct({
  shape: () => r,
  unknownKeys: "strip",
  catchall: ms.create(),
  typeName: W.ZodObject,
  ...J(t)
});
Ct.strictCreate = (r, t) => new Ct({
  shape: () => r,
  unknownKeys: "strict",
  catchall: ms.create(),
  typeName: W.ZodObject,
  ...J(t)
});
Ct.lazycreate = (r, t) => new Ct({
  shape: r,
  unknownKeys: "strip",
  catchall: ms.create(),
  typeName: W.ZodObject,
  ...J(t)
});
class Zi extends tt {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t), s = this._def.options;
    function i(n) {
      for (const a of n)
        if (a.result.status === "valid")
          return a.result;
      for (const a of n)
        if (a.result.status === "dirty")
          return e.common.issues.push(...a.ctx.common.issues), a.result;
      const o = n.map((a) => new Le(a.ctx.common.issues));
      return L(e, {
        code: O.invalid_union,
        unionErrors: o
      }), X;
    }
    if (e.common.async)
      return Promise.all(s.map(async (n) => {
        const o = {
          ...e,
          common: {
            ...e.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await n._parseAsync({
            data: e.data,
            path: e.path,
            parent: o
          }),
          ctx: o
        };
      })).then(i);
    {
      let n;
      const o = [];
      for (const l of s) {
        const c = {
          ...e,
          common: {
            ...e.common,
            issues: []
          },
          parent: null
        }, h = l._parseSync({
          data: e.data,
          path: e.path,
          parent: c
        });
        if (h.status === "valid")
          return h;
        h.status === "dirty" && !n && (n = { result: h, ctx: c }), c.common.issues.length && o.push(c.common.issues);
      }
      if (n)
        return e.common.issues.push(...n.ctx.common.issues), n.result;
      const a = o.map((l) => new Le(l));
      return L(e, {
        code: O.invalid_union,
        unionErrors: a
      }), X;
    }
  }
  get options() {
    return this._def.options;
  }
}
Zi.create = (r, t) => new Zi({
  options: r,
  typeName: W.ZodUnion,
  ...J(t)
});
const Hn = (r) => r instanceof tn ? Hn(r.schema) : r instanceof Ve ? Hn(r.innerType()) : r instanceof en ? [r.value] : r instanceof js ? r.options : r instanceof sn ? Object.keys(r.enum) : r instanceof rn ? Hn(r._def.innerType) : r instanceof Ki ? [void 0] : r instanceof Xi ? [null] : null;
class Yo extends tt {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t);
    if (e.parsedType !== F.object)
      return L(e, {
        code: O.invalid_type,
        expected: F.object,
        received: e.parsedType
      }), X;
    const s = this.discriminator, i = e.data[s], n = this.optionsMap.get(i);
    return n ? e.common.async ? n._parseAsync({
      data: e.data,
      path: e.path,
      parent: e
    }) : n._parseSync({
      data: e.data,
      path: e.path,
      parent: e
    }) : (L(e, {
      code: O.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [s]
    }), X);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, e, s) {
    const i = /* @__PURE__ */ new Map();
    for (const n of e) {
      const o = Hn(n.shape[t]);
      if (!o)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (i.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        i.set(a, n);
      }
    }
    return new Yo({
      typeName: W.ZodDiscriminatedUnion,
      discriminator: t,
      options: e,
      optionsMap: i,
      ...J(s)
    });
  }
}
function Fl(r, t) {
  const e = Os(r), s = Os(t);
  if (r === t)
    return { valid: !0, data: r };
  if (e === F.object && s === F.object) {
    const i = ht.objectKeys(t), n = ht.objectKeys(r).filter((a) => i.indexOf(a) !== -1), o = { ...r, ...t };
    for (const a of n) {
      const l = Fl(r[a], t[a]);
      if (!l.valid)
        return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (e === F.array && s === F.array) {
    if (r.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let n = 0; n < r.length; n++) {
      const o = r[n], a = t[n], l = Fl(o, a);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else
    return e === F.date && s === F.date && +r == +t ? { valid: !0, data: r } : { valid: !1 };
}
class Ji extends tt {
  _parse(t) {
    const { status: e, ctx: s } = this._processInputParams(t), i = (n, o) => {
      if (Il(n) || Il(o))
        return X;
      const a = Fl(n.value, o.value);
      return a.valid ? ((Nl(n) || Nl(o)) && e.dirty(), { status: e.value, value: a.data }) : (L(s, {
        code: O.invalid_intersection_types
      }), X);
    };
    return s.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      }),
      this._def.right._parseAsync({
        data: s.data,
        path: s.path,
        parent: s
      })
    ]).then(([n, o]) => i(n, o)) : i(this._def.left._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }), this._def.right._parseSync({
      data: s.data,
      path: s.path,
      parent: s
    }));
  }
}
Ji.create = (r, t, e) => new Ji({
  left: r,
  right: t,
  typeName: W.ZodIntersection,
  ...J(e)
});
class Ze extends tt {
  _parse(t) {
    const { status: e, ctx: s } = this._processInputParams(t);
    if (s.parsedType !== F.array)
      return L(s, {
        code: O.invalid_type,
        expected: F.array,
        received: s.parsedType
      }), X;
    if (s.data.length < this._def.items.length)
      return L(s, {
        code: O.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), X;
    !this._def.rest && s.data.length > this._def.items.length && (L(s, {
      code: O.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), e.dirty());
    const n = [...s.data].map((o, a) => {
      const l = this._def.items[a] || this._def.rest;
      return l ? l._parse(new Xe(s, o, s.path, a)) : null;
    }).filter((o) => !!o);
    return s.common.async ? Promise.all(n).then((o) => ne.mergeArray(e, o)) : ne.mergeArray(e, n);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Ze({
      ...this._def,
      rest: t
    });
  }
}
Ze.create = (r, t) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Ze({
    items: r,
    typeName: W.ZodTuple,
    rest: null,
    ...J(t)
  });
};
class Qi extends tt {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: e, ctx: s } = this._processInputParams(t);
    if (s.parsedType !== F.object)
      return L(s, {
        code: O.invalid_type,
        expected: F.object,
        received: s.parsedType
      }), X;
    const i = [], n = this._def.keyType, o = this._def.valueType;
    for (const a in s.data)
      i.push({
        key: n._parse(new Xe(s, a, s.path, a)),
        value: o._parse(new Xe(s, s.data[a], s.path, a))
      });
    return s.common.async ? ne.mergeObjectAsync(e, i) : ne.mergeObjectSync(e, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, e, s) {
    return e instanceof tt ? new Qi({
      keyType: t,
      valueType: e,
      typeName: W.ZodRecord,
      ...J(s)
    }) : new Qi({
      keyType: Fe.create(),
      valueType: t,
      typeName: W.ZodRecord,
      ...J(e)
    });
  }
}
class uo extends tt {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: e, ctx: s } = this._processInputParams(t);
    if (s.parsedType !== F.map)
      return L(s, {
        code: O.invalid_type,
        expected: F.map,
        received: s.parsedType
      }), X;
    const i = this._def.keyType, n = this._def.valueType, o = [...s.data.entries()].map(([a, l], c) => ({
      key: i._parse(new Xe(s, a, s.path, [c, "key"])),
      value: n._parse(new Xe(s, l, s.path, [c, "value"]))
    }));
    if (s.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key, h = await l.value;
          if (c.status === "aborted" || h.status === "aborted")
            return X;
          (c.status === "dirty" || h.status === "dirty") && e.dirty(), a.set(c.value, h.value);
        }
        return { status: e.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const l of o) {
        const c = l.key, h = l.value;
        if (c.status === "aborted" || h.status === "aborted")
          return X;
        (c.status === "dirty" || h.status === "dirty") && e.dirty(), a.set(c.value, h.value);
      }
      return { status: e.value, value: a };
    }
  }
}
uo.create = (r, t, e) => new uo({
  valueType: t,
  keyType: r,
  typeName: W.ZodMap,
  ...J(e)
});
class mr extends tt {
  _parse(t) {
    const { status: e, ctx: s } = this._processInputParams(t);
    if (s.parsedType !== F.set)
      return L(s, {
        code: O.invalid_type,
        expected: F.set,
        received: s.parsedType
      }), X;
    const i = this._def;
    i.minSize !== null && s.data.size < i.minSize.value && (L(s, {
      code: O.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), e.dirty()), i.maxSize !== null && s.data.size > i.maxSize.value && (L(s, {
      code: O.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), e.dirty());
    const n = this._def.valueType;
    function o(l) {
      const c = /* @__PURE__ */ new Set();
      for (const h of l) {
        if (h.status === "aborted")
          return X;
        h.status === "dirty" && e.dirty(), c.add(h.value);
      }
      return { status: e.value, value: c };
    }
    const a = [...s.data.values()].map((l, c) => n._parse(new Xe(s, l, s.path, c)));
    return s.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(t, e) {
    return new mr({
      ...this._def,
      minSize: { value: t, message: V.toString(e) }
    });
  }
  max(t, e) {
    return new mr({
      ...this._def,
      maxSize: { value: t, message: V.toString(e) }
    });
  }
  size(t, e) {
    return this.min(t, e).max(t, e);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
mr.create = (r, t) => new mr({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: W.ZodSet,
  ...J(t)
});
class zr extends tt {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: e } = this._processInputParams(t);
    if (e.parsedType !== F.function)
      return L(e, {
        code: O.invalid_type,
        expected: F.function,
        received: e.parsedType
      }), X;
    function s(a, l) {
      return ao({
        data: a,
        path: e.path,
        errorMaps: [
          e.common.contextualErrorMap,
          e.schemaErrorMap,
          oo(),
          Wi
        ].filter((c) => !!c),
        issueData: {
          code: O.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(a, l) {
      return ao({
        data: a,
        path: e.path,
        errorMaps: [
          e.common.contextualErrorMap,
          e.schemaErrorMap,
          oo(),
          Wi
        ].filter((c) => !!c),
        issueData: {
          code: O.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const n = { errorMap: e.common.contextualErrorMap }, o = e.data;
    if (this._def.returns instanceof Qr) {
      const a = this;
      return ce(async function(...l) {
        const c = new Le([]), h = await a._def.args.parseAsync(l, n).catch((p) => {
          throw c.addIssue(s(l, p)), c;
        }), d = await Reflect.apply(o, this, h);
        return await a._def.returns._def.type.parseAsync(d, n).catch((p) => {
          throw c.addIssue(i(d, p)), c;
        });
      });
    } else {
      const a = this;
      return ce(function(...l) {
        const c = a._def.args.safeParse(l, n);
        if (!c.success)
          throw new Le([s(l, c.error)]);
        const h = Reflect.apply(o, this, c.data), d = a._def.returns.safeParse(h, n);
        if (!d.success)
          throw new Le([i(h, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new zr({
      ...this._def,
      args: Ze.create(t).rest(cr.create())
    });
  }
  returns(t) {
    return new zr({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, e, s) {
    return new zr({
      args: t || Ze.create([]).rest(cr.create()),
      returns: e || cr.create(),
      typeName: W.ZodFunction,
      ...J(s)
    });
  }
}
class tn extends tt {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: e } = this._processInputParams(t);
    return this._def.getter()._parse({ data: e.data, path: e.path, parent: e });
  }
}
tn.create = (r, t) => new tn({
  getter: r,
  typeName: W.ZodLazy,
  ...J(t)
});
class en extends tt {
  _parse(t) {
    if (t.data !== this._def.value) {
      const e = this._getOrReturnCtx(t);
      return L(e, {
        received: e.data,
        code: O.invalid_literal,
        expected: this._def.value
      }), X;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
en.create = (r, t) => new en({
  value: r,
  typeName: W.ZodLiteral,
  ...J(t)
});
function vf(r, t) {
  return new js({
    values: r,
    typeName: W.ZodEnum,
    ...J(t)
  });
}
class js extends tt {
  _parse(t) {
    if (typeof t.data != "string") {
      const e = this._getOrReturnCtx(t), s = this._def.values;
      return L(e, {
        expected: ht.joinValues(s),
        received: e.parsedType,
        code: O.invalid_type
      }), X;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const e = this._getOrReturnCtx(t), s = this._def.values;
      return L(e, {
        received: e.data,
        code: O.invalid_enum_value,
        options: s
      }), X;
    }
    return ce(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const e of this._def.values)
      t[e] = e;
    return t;
  }
  get Values() {
    const t = {};
    for (const e of this._def.values)
      t[e] = e;
    return t;
  }
  get Enum() {
    const t = {};
    for (const e of this._def.values)
      t[e] = e;
    return t;
  }
  extract(t) {
    return js.create(t);
  }
  exclude(t) {
    return js.create(this.options.filter((e) => !t.includes(e)));
  }
}
js.create = vf;
class sn extends tt {
  _parse(t) {
    const e = ht.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(t);
    if (s.parsedType !== F.string && s.parsedType !== F.number) {
      const i = ht.objectValues(e);
      return L(s, {
        expected: ht.joinValues(i),
        received: s.parsedType,
        code: O.invalid_type
      }), X;
    }
    if (e.indexOf(t.data) === -1) {
      const i = ht.objectValues(e);
      return L(s, {
        received: s.data,
        code: O.invalid_enum_value,
        options: i
      }), X;
    }
    return ce(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
sn.create = (r, t) => new sn({
  values: r,
  typeName: W.ZodNativeEnum,
  ...J(t)
});
class Qr extends tt {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: e } = this._processInputParams(t);
    if (e.parsedType !== F.promise && e.common.async === !1)
      return L(e, {
        code: O.invalid_type,
        expected: F.promise,
        received: e.parsedType
      }), X;
    const s = e.parsedType === F.promise ? e.data : Promise.resolve(e.data);
    return ce(s.then((i) => this._def.type.parseAsync(i, {
      path: e.path,
      errorMap: e.common.contextualErrorMap
    })));
  }
}
Qr.create = (r, t) => new Qr({
  type: r,
  typeName: W.ZodPromise,
  ...J(t)
});
class Ve extends tt {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === W.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: e, ctx: s } = this._processInputParams(t), i = this._def.effect || null, n = {
      addIssue: (o) => {
        L(s, o), o.fatal ? e.abort() : e.dirty();
      },
      get path() {
        return s.path;
      }
    };
    if (n.addIssue = n.addIssue.bind(n), i.type === "preprocess") {
      const o = i.transform(s.data, n);
      return s.common.issues.length ? {
        status: "dirty",
        value: s.data
      } : s.common.async ? Promise.resolve(o).then((a) => this._def.schema._parseAsync({
        data: a,
        path: s.path,
        parent: s
      })) : this._def.schema._parseSync({
        data: o,
        path: s.path,
        parent: s
      });
    }
    if (i.type === "refinement") {
      const o = (a) => {
        const l = i.refinement(a, n);
        if (s.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (s.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return a.status === "aborted" ? X : (a.status === "dirty" && e.dirty(), o(a.value), { status: e.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((a) => a.status === "aborted" ? X : (a.status === "dirty" && e.dirty(), o(a.value).then(() => ({ status: e.value, value: a.value }))));
    }
    if (i.type === "transform")
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: s.data,
          path: s.path,
          parent: s
        });
        if (!Yi(o))
          return o;
        const a = i.transform(o.value, n);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: e.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => Yi(o) ? Promise.resolve(i.transform(o.value, n)).then((a) => ({ status: e.value, value: a })) : o);
    ht.assertNever(i);
  }
}
Ve.create = (r, t, e) => new Ve({
  schema: r,
  typeName: W.ZodEffects,
  effect: t,
  ...J(e)
});
Ve.createWithPreprocess = (r, t, e) => new Ve({
  schema: t,
  effect: { type: "preprocess", transform: r },
  typeName: W.ZodEffects,
  ...J(e)
});
class ls extends tt {
  _parse(t) {
    return this._getType(t) === F.undefined ? ce(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ls.create = (r, t) => new ls({
  innerType: r,
  typeName: W.ZodOptional,
  ...J(t)
});
class _r extends tt {
  _parse(t) {
    return this._getType(t) === F.null ? ce(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_r.create = (r, t) => new _r({
  innerType: r,
  typeName: W.ZodNullable,
  ...J(t)
});
class rn extends tt {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t);
    let s = e.data;
    return e.parsedType === F.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({
      data: s,
      path: e.path,
      parent: e
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
rn.create = (r, t) => new rn({
  innerType: r,
  typeName: W.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...J(t)
});
class fo extends tt {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t), s = {
      ...e,
      common: {
        ...e.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: s.data,
      path: s.path,
      parent: {
        ...s
      }
    });
    return lo(i) ? i.then((n) => ({
      status: "valid",
      value: n.status === "valid" ? n.value : this._def.catchValue({
        get error() {
          return new Le(s.common.issues);
        },
        input: s.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Le(s.common.issues);
        },
        input: s.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
fo.create = (r, t) => new fo({
  innerType: r,
  typeName: W.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...J(t)
});
class po extends tt {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const s = this._getOrReturnCtx(t);
      return L(s, {
        code: O.invalid_type,
        expected: F.nan,
        received: s.parsedType
      }), X;
    }
    return { status: "valid", value: t.data };
  }
}
po.create = (r) => new po({
  typeName: W.ZodNaN,
  ...J(r)
});
const s2 = Symbol("zod_brand");
class yf extends tt {
  _parse(t) {
    const { ctx: e } = this._processInputParams(t), s = e.data;
    return this._def.type._parse({
      data: s,
      path: e.path,
      parent: e
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class yn extends tt {
  _parse(t) {
    const { status: e, ctx: s } = this._processInputParams(t);
    if (s.common.async)
      return (async () => {
        const n = await this._def.in._parseAsync({
          data: s.data,
          path: s.path,
          parent: s
        });
        return n.status === "aborted" ? X : n.status === "dirty" ? (e.dirty(), _f(n.value)) : this._def.out._parseAsync({
          data: n.value,
          path: s.path,
          parent: s
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: s.data,
        path: s.path,
        parent: s
      });
      return i.status === "aborted" ? X : i.status === "dirty" ? (e.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: s.path,
        parent: s
      });
    }
  }
  static create(t, e) {
    return new yn({
      in: t,
      out: e,
      typeName: W.ZodPipeline
    });
  }
}
class go extends tt {
  _parse(t) {
    const e = this._def.innerType._parse(t);
    return Yi(e) && (e.value = Object.freeze(e.value)), e;
  }
}
go.create = (r, t) => new go({
  innerType: r,
  typeName: W.ZodReadonly,
  ...J(t)
});
const wf = (r, t = {}, e) => r ? Jr.create().superRefine((s, i) => {
  var n, o;
  if (!r(s)) {
    const a = typeof t == "function" ? t(s) : typeof t == "string" ? { message: t } : t, l = (o = (n = a.fatal) !== null && n !== void 0 ? n : e) !== null && o !== void 0 ? o : !0, c = typeof a == "string" ? { message: a } : a;
    i.addIssue({ code: "custom", ...c, fatal: l });
  }
}) : Jr.create(), r2 = {
  object: Ct.lazycreate
};
var W;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(W || (W = {}));
const i2 = (r, t = {
  message: `Input not instance of ${r.name}`
}) => wf((e) => e instanceof r, t), bf = Fe.create, Sf = Gs.create, n2 = po.create, o2 = Vs.create, kf = qi.create, a2 = gr.create, l2 = co.create, c2 = Ki.create, h2 = Xi.create, d2 = Jr.create, u2 = cr.create, f2 = ms.create, p2 = ho.create, g2 = Be.create, m2 = Ct.create, _2 = Ct.strictCreate, v2 = Zi.create, y2 = Yo.create, w2 = Ji.create, b2 = Ze.create, S2 = Qi.create, k2 = uo.create, x2 = mr.create, C2 = zr.create, E2 = tn.create, T2 = en.create, A2 = js.create, M2 = sn.create, P2 = Qr.create, Wh = Ve.create, O2 = ls.create, R2 = _r.create, D2 = Ve.createWithPreprocess, I2 = yn.create, N2 = () => bf().optional(), F2 = () => Sf().optional(), L2 = () => kf().optional(), B2 = {
  string: (r) => Fe.create({ ...r, coerce: !0 }),
  number: (r) => Gs.create({ ...r, coerce: !0 }),
  boolean: (r) => qi.create({
    ...r,
    coerce: !0
  }),
  bigint: (r) => Vs.create({ ...r, coerce: !0 }),
  date: (r) => gr.create({ ...r, coerce: !0 })
}, $2 = X;
var N = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: Wi,
  setErrorMap: jm,
  getErrorMap: oo,
  makeIssue: ao,
  EMPTY_PATH: zm,
  addIssueToContext: L,
  ParseStatus: ne,
  INVALID: X,
  DIRTY: _f,
  OK: ce,
  isAborted: Il,
  isDirty: Nl,
  isValid: Yi,
  isAsync: lo,
  get util() {
    return ht;
  },
  get objectUtil() {
    return Dl;
  },
  ZodParsedType: F,
  getParsedType: Os,
  ZodType: tt,
  ZodString: Fe,
  ZodNumber: Gs,
  ZodBigInt: Vs,
  ZodBoolean: qi,
  ZodDate: gr,
  ZodSymbol: co,
  ZodUndefined: Ki,
  ZodNull: Xi,
  ZodAny: Jr,
  ZodUnknown: cr,
  ZodNever: ms,
  ZodVoid: ho,
  ZodArray: Be,
  ZodObject: Ct,
  ZodUnion: Zi,
  ZodDiscriminatedUnion: Yo,
  ZodIntersection: Ji,
  ZodTuple: Ze,
  ZodRecord: Qi,
  ZodMap: uo,
  ZodSet: mr,
  ZodFunction: zr,
  ZodLazy: tn,
  ZodLiteral: en,
  ZodEnum: js,
  ZodNativeEnum: sn,
  ZodPromise: Qr,
  ZodEffects: Ve,
  ZodTransformer: Ve,
  ZodOptional: ls,
  ZodNullable: _r,
  ZodDefault: rn,
  ZodCatch: fo,
  ZodNaN: po,
  BRAND: s2,
  ZodBranded: yf,
  ZodPipeline: yn,
  ZodReadonly: go,
  custom: wf,
  Schema: tt,
  ZodSchema: tt,
  late: r2,
  get ZodFirstPartyTypeKind() {
    return W;
  },
  coerce: B2,
  any: d2,
  array: g2,
  bigint: o2,
  boolean: kf,
  date: a2,
  discriminatedUnion: y2,
  effect: Wh,
  enum: A2,
  function: C2,
  instanceof: i2,
  intersection: w2,
  lazy: E2,
  literal: T2,
  map: k2,
  nan: n2,
  nativeEnum: M2,
  never: f2,
  null: h2,
  nullable: R2,
  number: Sf,
  object: m2,
  oboolean: L2,
  onumber: F2,
  optional: O2,
  ostring: N2,
  pipeline: I2,
  preprocess: D2,
  promise: P2,
  record: S2,
  set: x2,
  strictObject: _2,
  string: bf,
  symbol: l2,
  transformer: Wh,
  tuple: b2,
  undefined: c2,
  union: v2,
  unknown: u2,
  void: p2,
  NEVER: $2,
  ZodIssueCode: O,
  quotelessJson: Vm,
  ZodError: Le
});
const U2 = N.string(), G2 = N.array(N.string()).optional(), V2 = N.array(N.string()).optional(), j2 = ["root", "hub", "content"], z2 = N.enum(j2), wn = Object.freeze({
  Text: (r = "") => new ui(r),
  Boxed: (r) => new Ge(r)
}), xf = N.object({
  version: N.number(),
  model: N.object({
    role: z2,
    flavour: U2,
    parent: G2,
    children: V2,
    props: N.function().args(N.custom()).returns(N.record(N.any())).optional(),
    toModel: N.function().args().returns(N.custom()).optional()
  }),
  transformer: N.function().args().returns(N.custom()).optional(),
  onUpgrade: N.function().args(N.any(), N.number(), N.number()).returns(N.void()).optional()
});
function H2({ flavour: r, props: t, metadata: e, onUpgrade: s, toModel: i, transformer: n }) {
  const o = {
    version: e.version,
    model: {
      role: e.role,
      parent: e.parent,
      children: e.children,
      flavour: r,
      props: t,
      toModel: i
    },
    onUpgrade: s,
    transformer: n
  };
  return xf.parse(o), o;
}
function W2() {
  return class {
  };
}
class $c extends W2() {
  constructor() {
    super(...arguments), this.created = new ot(), this.deleted = new ot(), this.propsUpdated = new ot(), this.childrenUpdated = new ot();
  }
  get childMap() {
    return this.children.reduce((t, e, s) => (t.set(e.id, s), t), /* @__PURE__ */ new Map());
  }
  get children() {
    const t = this.yBlock.get("sys:children");
    if (!t)
      return [];
    const e = [];
    return t.forEach((s) => {
      const i = this.page.getBlockById(s);
      i && e.push(i);
    }), e;
  }
  isEmpty() {
    return this.children.length === 0;
  }
  firstChild() {
    return this.children[0] || null;
  }
  lastChild() {
    return this.children.length ? this.children[this.children.length - 1].lastChild() : this;
  }
  lastItem() {
    return this.children.length ? this.children[this.children.length - 1] : this;
  }
  dispose() {
    this.created.dispose(), this.deleted.dispose(), this.propsUpdated.dispose(), this.childrenUpdated.dispose();
  }
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}
var Y2 = Cf;
function Cf(r, t, e) {
  r instanceof RegExp && (r = Yh(r, e)), t instanceof RegExp && (t = Yh(t, e));
  var s = Ef(r, t, e);
  return s && {
    start: s[0],
    end: s[1],
    pre: e.slice(0, s[0]),
    body: e.slice(s[0] + r.length, s[1]),
    post: e.slice(s[1] + t.length)
  };
}
function Yh(r, t) {
  var e = t.match(r);
  return e ? e[0] : null;
}
Cf.range = Ef;
function Ef(r, t, e) {
  var s, i, n, o, a, l = e.indexOf(r), c = e.indexOf(t, l + 1), h = l;
  if (l >= 0 && c > 0) {
    if (r === t)
      return [l, c];
    for (s = [], n = e.length; h >= 0 && !a; )
      h == l ? (s.push(h), l = e.indexOf(r, h + 1)) : s.length == 1 ? a = [s.pop(), c] : (i = s.pop(), i < n && (n = i, o = c), c = e.indexOf(t, h + 1)), h = l < c && l >= 0 ? l : c;
    s.length && (a = [n, o]);
  }
  return a;
}
var Tf = Y2, q2 = Z2, Af = "\0SLASH" + Math.random() + "\0", Mf = "\0OPEN" + Math.random() + "\0", Uc = "\0CLOSE" + Math.random() + "\0", Pf = "\0COMMA" + Math.random() + "\0", Of = "\0PERIOD" + Math.random() + "\0";
function il(r) {
  return parseInt(r, 10) == r ? parseInt(r, 10) : r.charCodeAt(0);
}
function K2(r) {
  return r.split("\\\\").join(Af).split("\\{").join(Mf).split("\\}").join(Uc).split("\\,").join(Pf).split("\\.").join(Of);
}
function X2(r) {
  return r.split(Af).join("\\").split(Mf).join("{").split(Uc).join("}").split(Pf).join(",").split(Of).join(".");
}
function Rf(r) {
  if (!r)
    return [""];
  var t = [], e = Tf("{", "}", r);
  if (!e)
    return r.split(",");
  var s = e.pre, i = e.body, n = e.post, o = s.split(",");
  o[o.length - 1] += "{" + i + "}";
  var a = Rf(n);
  return n.length && (o[o.length - 1] += a.shift(), o.push.apply(o, a)), t.push.apply(t, o), t;
}
function Z2(r) {
  return r ? (r.substr(0, 2) === "{}" && (r = "\\{\\}" + r.substr(2)), Ai(K2(r), !0).map(X2)) : [];
}
function J2(r) {
  return "{" + r + "}";
}
function Q2(r) {
  return /^-?0\d/.test(r);
}
function t_(r, t) {
  return r <= t;
}
function e_(r, t) {
  return r >= t;
}
function Ai(r, t) {
  var e = [], s = Tf("{", "}", r);
  if (!s)
    return [r];
  var i = s.pre, n = s.post.length ? Ai(s.post, !1) : [""];
  if (/\$$/.test(s.pre))
    for (var o = 0; o < n.length; o++) {
      var a = i + "{" + s.body + "}" + n[o];
      e.push(a);
    }
  else {
    var l = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(s.body), c = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(s.body), h = l || c, d = s.body.indexOf(",") >= 0;
    if (!h && !d)
      return s.post.match(/,.*\}/) ? (r = s.pre + "{" + s.body + Uc + s.post, Ai(r)) : [r];
    var u;
    if (h)
      u = s.body.split(/\.\./);
    else if (u = Rf(s.body), u.length === 1 && (u = Ai(u[0], !1).map(J2), u.length === 1))
      return n.map(function(E) {
        return s.pre + u[0] + E;
      });
    var p;
    if (h) {
      var f = il(u[0]), m = il(u[1]), _ = Math.max(u[0].length, u[1].length), y = u.length == 3 ? Math.abs(il(u[2])) : 1, k = t_, g = m < f;
      g && (y *= -1, k = e_);
      var v = u.some(Q2);
      p = [];
      for (var b = f; k(b, m); b += y) {
        var w;
        if (c)
          w = String.fromCharCode(b), w === "\\" && (w = "");
        else if (w = String(b), v) {
          var x = _ - w.length;
          if (x > 0) {
            var S = new Array(x + 1).join("0");
            b < 0 ? w = "-" + S + w.slice(1) : w = S + w;
          }
        }
        p.push(w);
      }
    } else {
      p = [];
      for (var M = 0; M < u.length; M++)
        p.push.apply(p, Ai(u[M], !1));
    }
    for (var M = 0; M < p.length; M++)
      for (var o = 0; o < n.length; o++) {
        var a = i + p[M] + n[o];
        (!t || h || a) && e.push(a);
      }
  }
  return e;
}
const s_ = /* @__PURE__ */ dc(q2), r_ = 1024 * 64, mo = (r) => {
  if (typeof r != "string")
    throw new TypeError("invalid pattern");
  if (r.length > r_)
    throw new TypeError("pattern is too long");
}, i_ = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0],
  "[:alpha:]": ["\\p{L}\\p{Nl}", !0],
  "[:ascii:]": ["\\x00-\\x7f", !1],
  "[:blank:]": ["\\p{Zs}\\t", !0],
  "[:cntrl:]": ["\\p{Cc}", !0],
  "[:digit:]": ["\\p{Nd}", !0],
  "[:graph:]": ["\\p{Z}\\p{C}", !0, !0],
  "[:lower:]": ["\\p{Ll}", !0],
  "[:print:]": ["\\p{C}", !0],
  "[:punct:]": ["\\p{P}", !0],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0],
  "[:upper:]": ["\\p{Lu}", !0],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0],
  "[:xdigit:]": ["A-Fa-f0-9", !1]
}, wi = (r) => r.replace(/[[\]\\-]/g, "\\$&"), n_ = (r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), qh = (r) => r.join(""), o_ = (r, t) => {
  const e = t;
  if (r.charAt(e) !== "[")
    throw new Error("not in a brace expression");
  const s = [], i = [];
  let n = e + 1, o = !1, a = !1, l = !1, c = !1, h = e, d = "";
  t:
    for (; n < r.length; ) {
      const m = r.charAt(n);
      if ((m === "!" || m === "^") && n === e + 1) {
        c = !0, n++;
        continue;
      }
      if (m === "]" && o && !l) {
        h = n + 1;
        break;
      }
      if (o = !0, m === "\\" && !l) {
        l = !0, n++;
        continue;
      }
      if (m === "[" && !l) {
        for (const [_, [y, k, g]] of Object.entries(i_))
          if (r.startsWith(_, n)) {
            if (d)
              return ["$.", !1, r.length - e, !0];
            n += _.length, g ? i.push(y) : s.push(y), a = a || k;
            continue t;
          }
      }
      if (l = !1, d) {
        m > d ? s.push(wi(d) + "-" + wi(m)) : m === d && s.push(wi(m)), d = "", n++;
        continue;
      }
      if (r.startsWith("-]", n + 1)) {
        s.push(wi(m + "-")), n += 2;
        continue;
      }
      if (r.startsWith("-", n + 1)) {
        d = m, n += 2;
        continue;
      }
      s.push(wi(m)), n++;
    }
  if (h < n)
    return ["", !1, 0, !1];
  if (!s.length && !i.length)
    return ["$.", !1, r.length - e, !0];
  if (i.length === 0 && s.length === 1 && /^\\?.$/.test(s[0]) && !c) {
    const m = s[0].length === 2 ? s[0].slice(-1) : s[0];
    return [n_(m), !1, h - e, !1];
  }
  const u = "[" + (c ? "^" : "") + qh(s) + "]", p = "[" + (c ? "" : "^") + qh(i) + "]";
  return [s.length && i.length ? "(" + u + "|" + p + ")" : s.length ? u : p, a, h - e, !0];
}, Mi = (r, { windowsPathsNoEscape: t = !1 } = {}) => t ? r.replace(/\[([^\/\\])\]/g, "$1") : r.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), a_ = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Kh = (r) => a_.has(r), l_ = "(?!(?:^|/)\\.\\.?(?:$|/))", On = "(?!\\.)", c_ = /* @__PURE__ */ new Set(["[", "."]), h_ = /* @__PURE__ */ new Set(["..", "."]), d_ = new Set("().*{}+?[]^$\\!"), u_ = (r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), Gc = "[^/]", Xh = Gc + "*?", Zh = Gc + "+?";
var Vt, Kt, os, St, Bt, Ds, rr, Is, He, ir, cn, Eo, Df, Hr, Wn, hn, Ll, To, If;
const se = class se {
  constructor(t, e, s = {}) {
    ee(this, Eo);
    ee(this, hn);
    Gt(this, "type");
    ee(this, Vt, void 0);
    ee(this, Kt, void 0);
    ee(this, os, !1);
    ee(this, St, []);
    ee(this, Bt, void 0);
    ee(this, Ds, void 0);
    ee(this, rr, void 0);
    ee(this, Is, !1);
    ee(this, He, void 0);
    ee(this, ir, void 0);
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    ee(this, cn, !1);
    this.type = t, t && Dt(this, Kt, !0), Dt(this, Bt, e), Dt(this, Vt, R(this, Bt) ? R(R(this, Bt), Vt) : this), Dt(this, He, R(this, Vt) === this ? s : R(R(this, Vt), He)), Dt(this, rr, R(this, Vt) === this ? [] : R(R(this, Vt), rr)), t === "!" && !R(R(this, Vt), Is) && R(this, rr).push(this), Dt(this, Ds, R(this, Bt) ? R(R(this, Bt), St).length : 0);
  }
  get hasMagic() {
    if (R(this, Kt) !== void 0)
      return R(this, Kt);
    for (const t of R(this, St))
      if (typeof t != "string" && (t.type || t.hasMagic))
        return Dt(this, Kt, !0);
    return R(this, Kt);
  }
  // reconstructs the pattern
  toString() {
    return R(this, ir) !== void 0 ? R(this, ir) : this.type ? Dt(this, ir, this.type + "(" + R(this, St).map((t) => String(t)).join("|") + ")") : Dt(this, ir, R(this, St).map((t) => String(t)).join(""));
  }
  push(...t) {
    for (const e of t)
      if (e !== "") {
        if (typeof e != "string" && !(e instanceof se && R(e, Bt) === this))
          throw new Error("invalid part: " + e);
        R(this, St).push(e);
      }
  }
  toJSON() {
    var e;
    const t = this.type === null ? R(this, St).slice().map((s) => typeof s == "string" ? s : s.toJSON()) : [this.type, ...R(this, St).map((s) => s.toJSON())];
    return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === R(this, Vt) || R(R(this, Vt), Is) && ((e = R(this, Bt)) == null ? void 0 : e.type) === "!") && t.push({}), t;
  }
  isStart() {
    var e;
    if (R(this, Vt) === this)
      return !0;
    if (!((e = R(this, Bt)) != null && e.isStart()))
      return !1;
    if (R(this, Ds) === 0)
      return !0;
    const t = R(this, Bt);
    for (let s = 0; s < R(this, Ds); s++) {
      const i = R(t, St)[s];
      if (!(i instanceof se && i.type === "!"))
        return !1;
    }
    return !0;
  }
  isEnd() {
    var e, s, i;
    if (R(this, Vt) === this || ((e = R(this, Bt)) == null ? void 0 : e.type) === "!")
      return !0;
    if (!((s = R(this, Bt)) != null && s.isEnd()))
      return !1;
    if (!this.type)
      return (i = R(this, Bt)) == null ? void 0 : i.isEnd();
    const t = R(this, Bt) ? R(R(this, Bt), St).length : 0;
    return R(this, Ds) === t - 1;
  }
  copyIn(t) {
    typeof t == "string" ? this.push(t) : this.push(t.clone(this));
  }
  clone(t) {
    const e = new se(this.type, t);
    for (const s of R(this, St))
      e.copyIn(s);
    return e;
  }
  static fromGlob(t, e = {}) {
    var i;
    const s = new se(null, void 0, e);
    return Es(i = se, Hr, Wn).call(i, t, s, 0, e), s;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== R(this, Vt))
      return R(this, Vt).toMMPattern();
    const t = this.toString(), [e, s, i, n] = this.toRegExpSource();
    if (!(i || R(this, Kt) || R(this, He).nocase && !R(this, He).nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase()))
      return s;
    const a = (R(this, He).nocase ? "i" : "") + (n ? "u" : "");
    return Object.assign(new RegExp(`^${e}$`, a), {
      _src: e,
      _glob: t
    });
  }
  get options() {
    return R(this, He);
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(t) {
    var l;
    const e = t ?? !!R(this, He).dot;
    if (R(this, Vt) === this && Es(this, Eo, Df).call(this), !this.type) {
      const c = this.isStart() && this.isEnd(), h = R(this, St).map((f) => {
        var g;
        const [m, _, y, k] = typeof f == "string" ? Es(g = se, To, If).call(g, f, R(this, Kt), c) : f.toRegExpSource(t);
        return Dt(this, Kt, R(this, Kt) || y), Dt(this, os, R(this, os) || k), m;
      }).join("");
      let d = "";
      if (this.isStart() && typeof R(this, St)[0] == "string" && !(R(this, St).length === 1 && h_.has(R(this, St)[0]))) {
        const m = c_, _ = (
          // dots are allowed, and the pattern starts with [ or .
          e && m.has(h.charAt(0)) || // the pattern starts with \., and then [ or .
          h.startsWith("\\.") && m.has(h.charAt(2)) || // the pattern starts with \.\., and then [ or .
          h.startsWith("\\.\\.") && m.has(h.charAt(4))
        ), y = !e && !t && m.has(h.charAt(0));
        d = _ ? l_ : y ? On : "";
      }
      let u = "";
      return this.isEnd() && R(R(this, Vt), Is) && ((l = R(this, Bt)) == null ? void 0 : l.type) === "!" && (u = "(?:$|\\/)"), [
        d + h + u,
        Mi(h),
        Dt(this, Kt, !!R(this, Kt)),
        R(this, os)
      ];
    }
    const s = this.type === "*" || this.type === "+", i = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let n = Es(this, hn, Ll).call(this, e);
    if (this.isStart() && this.isEnd() && !n && this.type !== "!") {
      const c = this.toString();
      return Dt(this, St, [c]), this.type = null, Dt(this, Kt, void 0), [c, Mi(this.toString()), !1, !1];
    }
    let o = !s || t || e || !On ? "" : Es(this, hn, Ll).call(this, !0);
    o === n && (o = ""), o && (n = `(?:${n})(?:${o})*?`);
    let a = "";
    if (this.type === "!" && R(this, cn))
      a = (this.isStart() && !e ? On : "") + Zh;
    else {
      const c = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !e && !t ? On : "") + Xh + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && o ? ")" : this.type === "*" && o ? ")?" : `)${this.type}`;
      a = i + n + c;
    }
    return [
      a,
      Mi(n),
      Dt(this, Kt, !!R(this, Kt)),
      R(this, os)
    ];
  }
};
Vt = new WeakMap(), Kt = new WeakMap(), os = new WeakMap(), St = new WeakMap(), Bt = new WeakMap(), Ds = new WeakMap(), rr = new WeakMap(), Is = new WeakMap(), He = new WeakMap(), ir = new WeakMap(), cn = new WeakMap(), Eo = new WeakSet(), Df = function() {
  if (this !== R(this, Vt))
    throw new Error("should only call on root");
  if (R(this, Is))
    return this;
  this.toString(), Dt(this, Is, !0);
  let t;
  for (; t = R(this, rr).pop(); ) {
    if (t.type !== "!")
      continue;
    let e = t, s = R(e, Bt);
    for (; s; ) {
      for (let i = R(e, Ds) + 1; !s.type && i < R(s, St).length; i++)
        for (const n of R(t, St)) {
          if (typeof n == "string")
            throw new Error("string part in extglob AST??");
          n.copyIn(R(s, St)[i]);
        }
      e = s, s = R(e, Bt);
    }
  }
  return this;
}, Hr = new WeakSet(), Wn = function(t, e, s, i) {
  var p, f;
  let n = !1, o = !1, a = -1, l = !1;
  if (e.type === null) {
    let m = s, _ = "";
    for (; m < t.length; ) {
      const y = t.charAt(m++);
      if (n || y === "\\") {
        n = !n, _ += y;
        continue;
      }
      if (o) {
        m === a + 1 ? (y === "^" || y === "!") && (l = !0) : y === "]" && !(m === a + 2 && l) && (o = !1), _ += y;
        continue;
      } else if (y === "[") {
        o = !0, a = m, l = !1, _ += y;
        continue;
      }
      if (!i.noext && Kh(y) && t.charAt(m) === "(") {
        e.push(_), _ = "";
        const k = new se(y, e);
        m = Es(p = se, Hr, Wn).call(p, t, k, m, i), e.push(k);
        continue;
      }
      _ += y;
    }
    return e.push(_), m;
  }
  let c = s + 1, h = new se(null, e);
  const d = [];
  let u = "";
  for (; c < t.length; ) {
    const m = t.charAt(c++);
    if (n || m === "\\") {
      n = !n, u += m;
      continue;
    }
    if (o) {
      c === a + 1 ? (m === "^" || m === "!") && (l = !0) : m === "]" && !(c === a + 2 && l) && (o = !1), u += m;
      continue;
    } else if (m === "[") {
      o = !0, a = c, l = !1, u += m;
      continue;
    }
    if (Kh(m) && t.charAt(c) === "(") {
      h.push(u), u = "";
      const _ = new se(m, h);
      h.push(_), c = Es(f = se, Hr, Wn).call(f, t, _, c, i);
      continue;
    }
    if (m === "|") {
      h.push(u), u = "", d.push(h), h = new se(null, e);
      continue;
    }
    if (m === ")")
      return u === "" && R(e, St).length === 0 && Dt(e, cn, !0), h.push(u), u = "", e.push(...d, h), c;
    u += m;
  }
  return e.type = null, Dt(e, Kt, void 0), Dt(e, St, [t.substring(s - 1)]), c;
}, hn = new WeakSet(), Ll = function(t) {
  return R(this, St).map((e) => {
    if (typeof e == "string")
      throw new Error("string type in extglob ast??");
    const [s, i, n, o] = e.toRegExpSource(t);
    return Dt(this, os, R(this, os) || o), s;
  }).filter((e) => !(this.isStart() && this.isEnd()) || !!e).join("|");
}, To = new WeakSet(), If = function(t, e, s = !1) {
  let i = !1, n = "", o = !1;
  for (let a = 0; a < t.length; a++) {
    const l = t.charAt(a);
    if (i) {
      i = !1, n += (d_.has(l) ? "\\" : "") + l;
      continue;
    }
    if (l === "\\") {
      a === t.length - 1 ? n += "\\\\" : i = !0;
      continue;
    }
    if (l === "[") {
      const [c, h, d, u] = o_(t, a);
      if (d) {
        n += c, o = o || h, a += d - 1, e = e || u;
        continue;
      }
    }
    if (l === "*") {
      s && t === "*" ? n += Zh : n += Xh, e = !0;
      continue;
    }
    if (l === "?") {
      n += Gc, e = !0;
      continue;
    }
    n += u_(l);
  }
  return [n, Mi(t), !!e, o];
}, ee(se, Hr), ee(se, To);
let _o = se;
const f_ = (r, { windowsPathsNoEscape: t = !1 } = {}) => t ? r.replace(/[?*()[\]]/g, "[$&]") : r.replace(/[?*()[\]\\]/g, "\\$&"), te = (r, t, e = {}) => (mo(t), !e.nocomment && t.charAt(0) === "#" ? !1 : new qo(t, e).match(r)), p_ = /^\*+([^+@!?\*\[\(]*)$/, g_ = (r) => (t) => !t.startsWith(".") && t.endsWith(r), m_ = (r) => (t) => t.endsWith(r), __ = (r) => (r = r.toLowerCase(), (t) => !t.startsWith(".") && t.toLowerCase().endsWith(r)), v_ = (r) => (r = r.toLowerCase(), (t) => t.toLowerCase().endsWith(r)), y_ = /^\*+\.\*+$/, w_ = (r) => !r.startsWith(".") && r.includes("."), b_ = (r) => r !== "." && r !== ".." && r.includes("."), S_ = /^\.\*+$/, k_ = (r) => r !== "." && r !== ".." && r.startsWith("."), x_ = /^\*+$/, C_ = (r) => r.length !== 0 && !r.startsWith("."), E_ = (r) => r.length !== 0 && r !== "." && r !== "..", T_ = /^\?+([^+@!?\*\[\(]*)?$/, A_ = ([r, t = ""]) => {
  const e = Nf([r]);
  return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
}, M_ = ([r, t = ""]) => {
  const e = Ff([r]);
  return t ? (t = t.toLowerCase(), (s) => e(s) && s.toLowerCase().endsWith(t)) : e;
}, P_ = ([r, t = ""]) => {
  const e = Ff([r]);
  return t ? (s) => e(s) && s.endsWith(t) : e;
}, O_ = ([r, t = ""]) => {
  const e = Nf([r]);
  return t ? (s) => e(s) && s.endsWith(t) : e;
}, Nf = ([r]) => {
  const t = r.length;
  return (e) => e.length === t && !e.startsWith(".");
}, Ff = ([r]) => {
  const t = r.length;
  return (e) => e.length === t && e !== "." && e !== "..";
}, Lf = typeof process == "object" && process ? typeof process.env == "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix", Jh = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
}, R_ = Lf === "win32" ? Jh.win32.sep : Jh.posix.sep;
te.sep = R_;
const Ce = Symbol("globstar **");
te.GLOBSTAR = Ce;
const D_ = "[^/]", I_ = D_ + "*?", N_ = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?", F_ = "(?:(?!(?:\\/|^)\\.).)*?", L_ = (r, t = {}) => (e) => te(e, r, t);
te.filter = L_;
const ke = (r, t = {}) => Object.assign({}, r, t), B_ = (r) => {
  if (!r || typeof r != "object" || !Object.keys(r).length)
    return te;
  const t = te;
  return Object.assign((s, i, n = {}) => t(s, i, ke(r, n)), {
    Minimatch: class extends t.Minimatch {
      constructor(i, n = {}) {
        super(i, ke(r, n));
      }
      static defaults(i) {
        return t.defaults(ke(r, i)).Minimatch;
      }
    },
    AST: class extends t.AST {
      /* c8 ignore start */
      constructor(i, n, o = {}) {
        super(i, n, ke(r, o));
      }
      /* c8 ignore stop */
      static fromGlob(i, n = {}) {
        return t.AST.fromGlob(i, ke(r, n));
      }
    },
    unescape: (s, i = {}) => t.unescape(s, ke(r, i)),
    escape: (s, i = {}) => t.escape(s, ke(r, i)),
    filter: (s, i = {}) => t.filter(s, ke(r, i)),
    defaults: (s) => t.defaults(ke(r, s)),
    makeRe: (s, i = {}) => t.makeRe(s, ke(r, i)),
    braceExpand: (s, i = {}) => t.braceExpand(s, ke(r, i)),
    match: (s, i, n = {}) => t.match(s, i, ke(r, n)),
    sep: t.sep,
    GLOBSTAR: Ce
  });
};
te.defaults = B_;
const Bf = (r, t = {}) => (mo(r), t.nobrace || !/\{(?:(?!\{).)*\}/.test(r) ? [r] : s_(r));
te.braceExpand = Bf;
const $_ = (r, t = {}) => new qo(r, t).makeRe();
te.makeRe = $_;
const U_ = (r, t, e = {}) => {
  const s = new qo(t, e);
  return r = r.filter((i) => s.match(i)), s.options.nonull && !r.length && r.push(t), r;
};
te.match = U_;
const Qh = /[?*]|[+@!]\(.*?\)|\[|\]/, G_ = (r) => r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class qo {
  constructor(t, e = {}) {
    Gt(this, "options");
    Gt(this, "set");
    Gt(this, "pattern");
    Gt(this, "windowsPathsNoEscape");
    Gt(this, "nonegate");
    Gt(this, "negate");
    Gt(this, "comment");
    Gt(this, "empty");
    Gt(this, "preserveMultipleSlashes");
    Gt(this, "partial");
    Gt(this, "globSet");
    Gt(this, "globParts");
    Gt(this, "nocase");
    Gt(this, "isWindows");
    Gt(this, "platform");
    Gt(this, "windowsNoMagicRoot");
    Gt(this, "regexp");
    mo(t), e = e || {}, this.options = e, this.pattern = t, this.platform = e.platform || Lf, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!e.windowsPathsNoEscape || e.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!e.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!e.nonegate, this.comment = !1, this.empty = !1, this.partial = !!e.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = e.windowsNoMagicRoot !== void 0 ? e.windowsNoMagicRoot : !!(this.isWindows && this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1)
      return !0;
    for (const t of this.set)
      for (const e of t)
        if (typeof e != "string")
          return !0;
    return !1;
  }
  debug(...t) {
  }
  make() {
    const t = this.pattern, e = this.options;
    if (!e.nocomment && t.charAt(0) === "#") {
      this.comment = !0;
      return;
    }
    if (!t) {
      this.empty = !0;
      return;
    }
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], e.debug && (this.debug = (...n) => console.error(...n)), this.debug(this.pattern, this.globSet);
    const s = this.globSet.map((n) => this.slashSplit(n));
    this.globParts = this.preprocess(s), this.debug(this.pattern, this.globParts);
    let i = this.globParts.map((n, o, a) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const l = n[0] === "" && n[1] === "" && (n[2] === "?" || !Qh.test(n[2])) && !Qh.test(n[3]), c = /^[a-z]:/i.test(n[0]);
        if (l)
          return [...n.slice(0, 4), ...n.slice(4).map((h) => this.parse(h))];
        if (c)
          return [n[0], ...n.slice(1).map((h) => this.parse(h))];
      }
      return n.map((l) => this.parse(l));
    });
    if (this.debug(this.pattern, i), this.set = i.filter((n) => n.indexOf(!1) === -1), this.isWindows)
      for (let n = 0; n < this.set.length; n++) {
        const o = this.set[n];
        o[0] === "" && o[1] === "" && this.globParts[n][2] === "?" && typeof o[3] == "string" && /^[a-z]:$/i.test(o[3]) && (o[2] = "?");
      }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(t) {
    if (this.options.noglobstar)
      for (let s = 0; s < t.length; s++)
        for (let i = 0; i < t[s].length; i++)
          t[s][i] === "**" && (t[s][i] = "*");
    const { optimizationLevel: e = 1 } = this.options;
    return e >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : e >= 1 ? t = this.levelOneOptimize(t) : t = this.adjascentGlobstarOptimize(t), t;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(t) {
    return t.map((e) => {
      let s = -1;
      for (; (s = e.indexOf("**", s + 1)) !== -1; ) {
        let i = s;
        for (; e[i + 1] === "**"; )
          i++;
        i !== s && e.splice(s, i - s);
      }
      return e;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(t) {
    return t.map((e) => (e = e.reduce((s, i) => {
      const n = s[s.length - 1];
      return i === "**" && n === "**" ? s : i === ".." && n && n !== ".." && n !== "." && n !== "**" ? (s.pop(), s) : (s.push(i), s);
    }, []), e.length === 0 ? [""] : e));
  }
  levelTwoFileOptimize(t) {
    Array.isArray(t) || (t = this.slashSplit(t));
    let e = !1;
    do {
      if (e = !1, !this.preserveMultipleSlashes) {
        for (let i = 1; i < t.length - 1; i++) {
          const n = t[i];
          i === 1 && n === "" && t[0] === "" || (n === "." || n === "") && (e = !0, t.splice(i, 1), i--);
        }
        t[0] === "." && t.length === 2 && (t[1] === "." || t[1] === "") && (e = !0, t.pop());
      }
      let s = 0;
      for (; (s = t.indexOf("..", s + 1)) !== -1; ) {
        const i = t[s - 1];
        i && i !== "." && i !== ".." && i !== "**" && (e = !0, t.splice(s - 1, 2), s -= 2);
      }
    } while (e);
    return t.length === 0 ? [""] : t;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(t) {
    let e = !1;
    do {
      e = !1;
      for (let s of t) {
        let i = -1;
        for (; (i = s.indexOf("**", i + 1)) !== -1; ) {
          let o = i;
          for (; s[o + 1] === "**"; )
            o++;
          o > i && s.splice(i + 1, o - i);
          let a = s[i + 1];
          const l = s[i + 2], c = s[i + 3];
          if (a !== ".." || !l || l === "." || l === ".." || !c || c === "." || c === "..")
            continue;
          e = !0, s.splice(i, 1);
          const h = s.slice(0);
          h[i] = "**", t.push(h), i--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let o = 1; o < s.length - 1; o++) {
            const a = s[o];
            o === 1 && a === "" && s[0] === "" || (a === "." || a === "") && (e = !0, s.splice(o, 1), o--);
          }
          s[0] === "." && s.length === 2 && (s[1] === "." || s[1] === "") && (e = !0, s.pop());
        }
        let n = 0;
        for (; (n = s.indexOf("..", n + 1)) !== -1; ) {
          const o = s[n - 1];
          if (o && o !== "." && o !== ".." && o !== "**") {
            e = !0;
            const l = n === 1 && s[n + 1] === "**" ? ["."] : [];
            s.splice(n - 1, 2, ...l), s.length === 0 && s.push(""), n -= 2;
          }
        }
      }
    } while (e);
    return t;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(t) {
    for (let e = 0; e < t.length - 1; e++)
      for (let s = e + 1; s < t.length; s++) {
        const i = this.partsMatch(t[e], t[s], !this.preserveMultipleSlashes);
        i && (t[e] = i, t[s] = []);
      }
    return t.filter((e) => e.length);
  }
  partsMatch(t, e, s = !1) {
    let i = 0, n = 0, o = [], a = "";
    for (; i < t.length && n < e.length; )
      if (t[i] === e[n])
        o.push(a === "b" ? e[n] : t[i]), i++, n++;
      else if (s && t[i] === "**" && e[n] === t[i + 1])
        o.push(t[i]), i++;
      else if (s && e[n] === "**" && t[i] === e[n + 1])
        o.push(e[n]), n++;
      else if (t[i] === "*" && e[n] && (this.options.dot || !e[n].startsWith(".")) && e[n] !== "**") {
        if (a === "b")
          return !1;
        a = "a", o.push(t[i]), i++, n++;
      } else if (e[n] === "*" && t[i] && (this.options.dot || !t[i].startsWith(".")) && t[i] !== "**") {
        if (a === "a")
          return !1;
        a = "b", o.push(e[n]), i++, n++;
      } else
        return !1;
    return t.length === e.length && o;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const t = this.pattern;
    let e = !1, s = 0;
    for (let i = 0; i < t.length && t.charAt(i) === "!"; i++)
      e = !e, s++;
    s && (this.pattern = t.slice(s)), this.negate = e;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(t, e, s = !1) {
    const i = this.options;
    if (this.isWindows) {
      const m = typeof t[0] == "string" && /^[a-z]:$/i.test(t[0]), _ = !m && t[0] === "" && t[1] === "" && t[2] === "?" && /^[a-z]:$/i.test(t[3]), y = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), k = !y && e[0] === "" && e[1] === "" && e[2] === "?" && typeof e[3] == "string" && /^[a-z]:$/i.test(e[3]), g = _ ? 3 : m ? 0 : void 0, v = k ? 3 : y ? 0 : void 0;
      if (typeof g == "number" && typeof v == "number") {
        const [b, w] = [t[g], e[v]];
        b.toLowerCase() === w.toLowerCase() && (e[v] = b, v > g ? e = e.slice(v) : g > v && (t = t.slice(g)));
      }
    }
    const { optimizationLevel: n = 1 } = this.options;
    n >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, { file: t, pattern: e }), this.debug("matchOne", t.length, e.length);
    for (var o = 0, a = 0, l = t.length, c = e.length; o < l && a < c; o++, a++) {
      this.debug("matchOne loop");
      var h = e[a], d = t[o];
      if (this.debug(e, h, d), h === !1)
        return !1;
      if (h === Ce) {
        this.debug("GLOBSTAR", [e, h, d]);
        var u = o, p = a + 1;
        if (p === c) {
          for (this.debug("** at the end"); o < l; o++)
            if (t[o] === "." || t[o] === ".." || !i.dot && t[o].charAt(0) === ".")
              return !1;
          return !0;
        }
        for (; u < l; ) {
          var f = t[u];
          if (this.debug(`
globstar while`, t, u, e, p, f), this.matchOne(t.slice(u), e.slice(p), s))
            return this.debug("globstar found match!", u, l, f), !0;
          if (f === "." || f === ".." || !i.dot && f.charAt(0) === ".") {
            this.debug("dot detected!", t, u, e, p);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), u++;
        }
        return !!(s && (this.debug(`
>>> no match, partial?`, t, u, e, p), u === l));
      }
      let m;
      if (typeof h == "string" ? (m = d === h, this.debug("string match", h, d, m)) : (m = h.test(d), this.debug("pattern match", h, d, m)), !m)
        return !1;
    }
    if (o === l && a === c)
      return !0;
    if (o === l)
      return s;
    if (a === c)
      return o === l - 1 && t[o] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Bf(this.pattern, this.options);
  }
  parse(t) {
    mo(t);
    const e = this.options;
    if (t === "**")
      return Ce;
    if (t === "")
      return "";
    let s, i = null;
    (s = t.match(x_)) ? i = e.dot ? E_ : C_ : (s = t.match(p_)) ? i = (e.nocase ? e.dot ? v_ : __ : e.dot ? m_ : g_)(s[1]) : (s = t.match(T_)) ? i = (e.nocase ? e.dot ? M_ : A_ : e.dot ? P_ : O_)(s) : (s = t.match(y_)) ? i = e.dot ? b_ : w_ : (s = t.match(S_)) && (i = k_);
    const n = _o.fromGlob(t, this.options).toMMPattern();
    return i && typeof n == "object" && Reflect.defineProperty(n, "test", { value: i }), n;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1)
      return this.regexp;
    const t = this.set;
    if (!t.length)
      return this.regexp = !1, this.regexp;
    const e = this.options, s = e.noglobstar ? I_ : e.dot ? N_ : F_, i = new Set(e.nocase ? ["i"] : []);
    let n = t.map((l) => {
      const c = l.map((h) => {
        if (h instanceof RegExp)
          for (const d of h.flags.split(""))
            i.add(d);
        return typeof h == "string" ? G_(h) : h === Ce ? Ce : h._src;
      });
      return c.forEach((h, d) => {
        const u = c[d + 1], p = c[d - 1];
        h !== Ce || p === Ce || (p === void 0 ? u !== void 0 && u !== Ce ? c[d + 1] = "(?:\\/|" + s + "\\/)?" + u : c[d] = s : u === void 0 ? c[d - 1] = p + "(?:\\/|" + s + ")?" : u !== Ce && (c[d - 1] = p + "(?:\\/|\\/" + s + "\\/)" + u, c[d + 1] = Ce));
      }), c.filter((h) => h !== Ce).join("/");
    }).join("|");
    const [o, a] = t.length > 1 ? ["(?:", ")"] : ["", ""];
    n = "^" + o + n + a + "$", this.negate && (n = "^(?!" + n + ").+$");
    try {
      this.regexp = new RegExp(n, [...i].join(""));
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  slashSplit(t) {
    return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? ["", ...t.split(/\/+/)] : t.split(/\/+/);
  }
  match(t, e = this.partial) {
    if (this.debug("match", t, this.pattern), this.comment)
      return !1;
    if (this.empty)
      return t === "";
    if (t === "/" && e)
      return !0;
    const s = this.options;
    this.isWindows && (t = t.split("\\").join("/"));
    const i = this.slashSplit(t);
    this.debug(this.pattern, "split", i);
    const n = this.set;
    this.debug(this.pattern, "set", n);
    let o = i[i.length - 1];
    if (!o)
      for (let a = i.length - 2; !o && a >= 0; a--)
        o = i[a];
    for (let a = 0; a < n.length; a++) {
      const l = n[a];
      let c = i;
      if (s.matchBase && l.length === 1 && (c = [o]), this.matchOne(c, l, e))
        return s.flipNegate ? !0 : !this.negate;
    }
    return s.flipNegate ? !1 : this.negate;
  }
  static defaults(t) {
    return te.defaults(t).Minimatch;
  }
}
te.AST = _o;
te.Minimatch = qo;
te.escape = f_;
te.unescape = Mi;
class $f {
  constructor(t, e, s = {}) {
    this.schema = t, this.yBlock = e, this.options = s, this._byPassProxy = !1, this._stashed = /* @__PURE__ */ new Set(), this.stash = (c) => {
      this._stashed.has(c) || (this._stashed.add(c), this.model[c] = no(this.yBlock.get(`prop:${c}`), {
        transform: (h, d) => Ge.is(d) ? h : d instanceof Wt ? new Proxy(h, {
          get: (u, p, f) => Reflect.get(u, p, f),
          set: (u, p, f, m) => {
            var y, k;
            const _ = Reflect.set(u, p, f, m);
            return (k = (y = this.options).onChange) == null || k.call(y, this, c, f), _;
          },
          deleteProperty: (u, p) => {
            var m, _;
            const f = Reflect.deleteProperty(u, p);
            return (_ = (m = this.options).onChange) == null || _.call(m, this, c, void 0), f;
          }
        }) : d instanceof Ht ? new Proxy(h, {
          get: (u, p, f) => Reflect.get(u, p, f),
          set: (u, p, f, m) => {
            var k, g;
            const _ = Number(p);
            if (Number.isNaN(_))
              return Reflect.set(u, p, f, m);
            const y = Reflect.set(u, p, f, m);
            return (g = (k = this.options).onChange) == null || g.call(k, this, c, f), y;
          },
          deleteProperty: (u, p) => {
            var m, _;
            const f = Reflect.deleteProperty(u, p);
            return (_ = (m = this.options).onChange) == null || _.call(m, this, p, void 0), f;
          }
        }) : h
      }));
    }, this.pop = (c) => {
      if (!this._stashed.has(c))
        return;
      const h = this.model[c];
      this._stashed.delete(c), this.model[c] = h;
    }, this._byPassUpdate = (c) => {
      this._byPassProxy = !0, c(), this._byPassProxy = !1;
    }, this._getPropsProxy = (c, h) => pr(h, {
      onChange: () => {
        var d, u;
        (u = (d = this.options).onChange) == null || u.call(d, this, c, h);
      }
    });
    const { id: i, flavour: n, version: o, yChildren: a, props: l } = this._parseYBlock();
    this.id = i, this.flavour = n, this.yChildren = a, this.version = o, this.model = this._createModel(l), this.yChildren.observe(() => {
      this.model.childrenUpdated.emit();
    }), this.yBlock.observe((c) => {
      c.keysChanged.forEach((h) => {
        var u, p, f, m;
        const d = c.changes.keys.get(h);
        if (d) {
          if (d.action === "update" || d.action === "add") {
            const _ = this.yBlock.get(h), y = h.replace("prop:", ""), k = this._getPropsProxy(y, _);
            this._byPassUpdate(() => {
              this.model[y] = k;
            }), (p = (u = this.options).onChange) == null || p.call(u, this, y, _);
            return;
          }
          if (d.action === "delete") {
            const _ = h.replace("prop:", "");
            this._byPassUpdate(() => {
              delete this.model[_];
            }), (m = (f = this.options).onChange) == null || m.call(f, this, _, void 0);
            return;
          }
        }
      });
    }), this.yBlock.observeDeep((c) => {
      var d, u;
      const h = c[0];
      !h || h.currentTarget === h.target || (u = (d = this.options).onChange) == null || u.call(d, this, "", void 0);
    });
  }
  _parseYBlock() {
    var l, c;
    let t, e, s, i;
    const n = {};
    this.yBlock.forEach((h, d) => {
      if (d.startsWith("prop:")) {
        const u = d.replace("prop:", "");
        n[u] = this._getPropsProxy(u, h);
        return;
      }
      if (d === "sys:id" && typeof h == "string") {
        t = h;
        return;
      }
      if (d === "sys:flavour" && typeof h == "string") {
        e = h;
        return;
      }
      if (d === "sys:children" && h instanceof Ht) {
        i = h;
        return;
      }
      if (d === "sys:version" && typeof h == "number") {
        s = h;
        return;
      }
    }), B(t, "Block id is not found"), B(e, "Block flavour is not found"), B(i, "Block children is not found");
    const o = this.schema.flavourSchemaMap.get(e);
    B(o, `Cannot find schema for flavour ${e}`);
    const a = (c = (l = o.model).props) == null ? void 0 : c.call(l, wn);
    return typeof s != "number" && (s = o.version), a && Object.entries(a).forEach(([h, d]) => {
      if (n[h] !== void 0)
        return;
      const u = Us(d);
      this.yBlock.set(`prop:${h}`, u), n[h] = this._getPropsProxy(h, u);
    }), {
      id: t,
      flavour: e,
      version: s,
      props: n,
      yChildren: i
    };
  }
  _createModel(t) {
    var i, n;
    const e = this.schema.flavourSchemaMap.get(this.flavour);
    B(e, `Cannot find schema for flavour ${this.flavour}`);
    const s = ((n = (i = e.model).toModel) == null ? void 0 : n.call(i)) ?? new $c();
    return Object.assign(s, t), s.id = this.id, s.version = this.version, s.keys = Object.keys(t), s.flavour = e.model.flavour, s.role = e.model.role, s.yBlock = this.yBlock, s.stash = this.stash, s.pop = this.pop, new Proxy(s, {
      has: (o, a) => Reflect.has(o, a),
      set: (o, a, l, c) => {
        var h, d;
        if (!this._byPassProxy && typeof a == "string" && s.keys.includes(a)) {
          if (this._stashed.has(a)) {
            const f = Reflect.set(o, a, l, c);
            return (d = (h = this.options).onChange) == null || d.call(h, this, a, l), f;
          }
          const u = Us(l);
          this.yBlock.set(`prop:${a}`, u);
          const p = this._getPropsProxy(a, u);
          return Reflect.set(o, a, p, c);
        }
        return Reflect.set(o, a, l, c);
      },
      get: (o, a, l) => Reflect.get(o, a, l),
      deleteProperty: (o, a) => (!this._byPassProxy && typeof a == "string" && s.keys.includes(a) && this.yBlock.delete(`prop:${a}`), Reflect.deleteProperty(o, a))
    });
  }
}
var Uf, vo;
(function(r) {
  r[r.MIGRATION_ERROR = 100] = "MIGRATION_ERROR", r[r.SCHEMA_VALIDATE_ERROR = 101] = "SCHEMA_VALIDATE_ERROR";
})(vo || (vo = {}));
const V_ = Symbol("internal_error");
class Gf extends Error {
  constructor(t, e) {
    super(e), this[Uf] = !0, this.code = t;
  }
}
Uf = V_;
class nl extends Gf {
  constructor(t) {
    super(vo.MIGRATION_ERROR, `Migration failed. Please report to https://github.com/toeverything/blocksuite/issues
          ${t}`);
  }
}
class rs extends Gf {
  constructor(t, e) {
    super(vo.SCHEMA_VALIDATE_ERROR, `Invalid schema for ${t}: ${e}`);
  }
}
class j_ {
  constructor() {
    this.flavourSchemaMap = /* @__PURE__ */ new Map(), this.validate = (t, e, s) => {
      const i = this.flavourSchemaMap.get(t);
      B(i, new rs(t, sl));
      const n = () => {
        s == null || s.forEach((a) => {
          const l = this.flavourSchemaMap.get(a);
          B(l, new rs(a, sl)), this.validateSchema(l, i);
        });
      };
      if (i.model.role === "root") {
        if (e)
          throw new rs(i.model.flavour, "Root block cannot have parent.");
        n();
        return;
      }
      if (!e)
        throw new rs(i.model.flavour, "Hub/Content must have parent.");
      const o = this.flavourSchemaMap.get(e);
      B(o, new rs(e, sl)), this.validateSchema(i, o), n();
    }, this.upgradeWorkspace = (t) => {
      this._upgradeBlockVersions(t), Lm.forEach((e) => {
        try {
          e.condition(t) && e.migrate(t);
        } catch (s) {
          throw console.error(s), new nl(e.desc);
        }
      });
    }, this.upgradePage = (t, e, s) => {
      const i = s.getMap("blocks");
      Array.from(i.values()).forEach((n) => {
        const o = n.get("sys:flavour"), a = e[o] ?? 0;
        B(a, `previous version for flavour ${o} not found`), this.upgradeBlock(o, a, n);
      }), Fm.forEach((n) => {
        try {
          n.condition(t, s) && n.migrate(t, s);
        } catch (o) {
          throw new nl(`${n.desc}
            ${o}`);
        }
      });
    }, this.upgradeBlock = (t, e, s) => {
      try {
        const i = this.flavourSchemaMap.get(t);
        B(i);
        const { onUpgrade: n, version: o } = i;
        if (!n)
          return;
        const a = new $f(this, s);
        return n(a.model, e, o);
      } catch (i) {
        throw new nl(`upgrade block ${t} failed.
          ${i}`);
      }
    }, this._upgradeBlockVersions = (t) => {
      const s = t.getMap("meta").get("blockVersions");
      s && s.forEach((i, n) => {
        const o = this.flavourSchemaMap.get(n);
        o && i !== o.version && s.set(n, o.version);
      });
    };
  }
  get versions() {
    return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map((t) => [t.model.flavour, t.version]));
  }
  toJSON() {
    return Object.fromEntries(Array.from(this.flavourSchemaMap.values()).map((t) => [
      t.model.flavour,
      {
        role: t.model.role,
        parent: t.model.parent,
        children: t.model.children
      }
    ]));
  }
  register(t) {
    return t.forEach((e) => {
      xf.parse(e), this.flavourSchemaMap.set(e.model.flavour, e);
    }), this;
  }
  validateSchema(t, e) {
    if (this._validateRole(t, e), !this._validateParent(t, e))
      throw new rs(t.model.flavour, `Block cannot have parent: ${e.model.flavour}.`);
  }
  _validateRole(t, e) {
    const s = t.model.role, i = e.model.role, n = t.model.flavour, o = e.model.flavour;
    if (s === "root")
      throw new rs(n, `Root block cannot have parent: ${o}.`);
    if (s === "hub" && i === "content")
      throw new rs(n, `Hub block cannot be child of content block: ${o}.`);
    if (s === "content" && i === "root")
      throw new rs(n, `Content block can only be child of hub block or itself. But get: ${o}.`);
  }
  _matchFlavour(t, e) {
    return te(t, e) || te(e, t);
  }
  _validateParent(t, e) {
    const s = t.model.flavour, i = e.model.flavour, n = t.model.parent || ["*"];
    return (e.model.children || ["*"]).some((a) => n.some((l) => a === "*" && l === "*" ? !0 : a === "*" ? this._matchFlavour(l, i) : l === "*" ? this._matchFlavour(s, a) : this._matchFlavour(s, a) && this._matchFlavour(l, i)));
  }
}
class z_ {
  constructor(t) {
    this._assetsMap = /* @__PURE__ */ new Map(), this._blob = t.blob;
  }
  getAssets() {
    return this._assetsMap;
  }
  cleanup() {
    this._assetsMap.clear();
  }
  async readFromBlob(t) {
    const e = await this._blob.get(t);
    B(e, `Blob ${t} not found in blob manager`), this._assetsMap.set(t, e);
  }
  async writeToBlob(t) {
    const e = this._assetsMap.get(t);
    B(e), await this._blob.get(t) === null && await this._blob.set(e, t);
  }
}
function Bl(r) {
  return r instanceof Ge ? {
    [Hi]: !0,
    value: r.getValue()
  } : r instanceof ui ? {
    [ff]: !0,
    delta: r.yText.toDelta()
  } : Array.isArray(r) ? r.map(Bl) : pf(r) ? Object.fromEntries(Object.entries(r).map(([t, e]) => [t, Bl(e)])) : r;
}
function $l(r) {
  return Array.isArray(r) ? r.map($l) : r instanceof Object ? Reflect.has(r, Hi) ? new Ge(Reflect.get(r, "value")) : Reflect.has(r, ff) ? new ui(Reflect.get(r, "delta")) : Object.fromEntries(Object.entries(r).map(([t, e]) => [t, $l(e)])) : r;
}
class H_ {
  constructor() {
    this._internal = wn;
  }
  _propsFromSnapshot(t) {
    return Object.fromEntries(Object.entries(t).map(([e, s]) => [e, $l(s)]));
  }
  _propsToSnapshot(t) {
    return Object.fromEntries(t.keys.map((e) => {
      const s = t[e];
      return [e, Bl(s)];
    }));
  }
  async fromSnapshot({ json: t }) {
    const { flavour: e, id: s, version: i, props: n } = t, o = this._propsFromSnapshot(n);
    return {
      id: s,
      flavour: e,
      version: i ?? -1,
      props: o
    };
  }
  async toSnapshot({ model: t }) {
    const { id: e, flavour: s, version: i } = t, n = this._propsToSnapshot(t);
    return {
      id: e,
      flavour: s,
      version: i,
      props: n
    };
  }
}
class Vc {
  static fromModels(t, e) {
    const s = t.workspace.meta, { pageVersion: i, workspaceVersion: n } = s;
    return B(i), B(n), new Vc({
      content: e,
      workspaceId: t.workspace.id,
      pageId: t.id,
      pageVersion: i,
      workspaceVersion: n
    });
  }
  constructor(t) {
    this.data = t;
  }
  get content() {
    return this.data.content;
  }
  get pageVersion() {
    return this.data.pageVersion;
  }
  get workspaceVersion() {
    return this.data.workspaceVersion;
  }
  get workspaceId() {
    return this.data.workspaceId;
  }
  get pageId() {
    return this.data.pageId;
  }
}
const nn = N.object({
  type: N.literal("block"),
  id: N.string(),
  flavour: N.string(),
  version: N.number().optional(),
  props: N.record(N.unknown()),
  children: N.lazy(() => nn.array())
}), td = N.object({
  type: N.literal("slice"),
  content: nn.array(),
  pageVersion: N.number(),
  workspaceVersion: N.number(),
  workspaceId: N.string(),
  pageId: N.string()
}), ed = N.object({
  id: N.string(),
  type: N.literal("info"),
  pageVersion: N.number(),
  workspaceVersion: N.number(),
  properties: N.record(N.any())
}), W_ = N.object({
  id: N.string(),
  title: N.string(),
  createDate: N.number(),
  tags: N.array(N.string())
}), sd = N.object({
  type: N.literal("page"),
  meta: W_,
  blocks: nn
});
class Vf {
  constructor({ workspace: t, middlewares: e = [] }) {
    this._adapterConfigs = /* @__PURE__ */ new Map(), this._slots = {
      beforeImport: new ot(),
      afterImport: new ot(),
      beforeExport: new ot(),
      afterExport: new ot()
    }, this.blockToSnapshot = async (s) => {
      const i = await this._blockToSnapshot(s);
      return nn.parse(i), i;
    }, this.snapshotToModelData = async (s) => {
      const { children: i, flavour: n, props: o, id: a } = s, l = this._getSchema(n), c = {
        id: a,
        flavour: n,
        props: o
      };
      return await this._getTransformer(l).fromSnapshot({
        json: c,
        assets: this._assetsManager,
        children: i
      });
    }, this.snapshotToBlock = async (s, i, n, o) => (nn.parse(s), await this._snapshotToBlock(s, i, n, o)), this.pageToSnapshot = async (s) => {
      this._slots.beforeExport.emit({
        type: "page",
        page: s
      });
      const i = s.root, n = this._exportPageMeta(s);
      B(i, "Root block not found in page");
      const o = await this.blockToSnapshot(i), a = {
        type: "page",
        meta: n,
        blocks: o
      };
      return this._slots.afterExport.emit({
        type: "page",
        page: s,
        snapshot: a
      }), sd.parse(a), a;
    }, this.snapshotToPage = async (s) => {
      this._slots.beforeImport.emit({
        type: "page",
        snapshot: s
      }), sd.parse(s);
      const { meta: i, blocks: n } = s, o = this._workspace.createPage({ id: i.id });
      return await o.load(), this._importPageMeta(o, i), await this.snapshotToBlock(n, o), this._slots.afterImport.emit({
        type: "page",
        snapshot: s,
        page: o
      }), o;
    }, this.workspaceInfoToSnapshot = () => {
      this._slots.beforeExport.emit({
        type: "info"
      });
      const s = this._getWorkspaceMeta(), i = {
        type: "info",
        id: this._workspace.id,
        ...s
      };
      return this._slots.afterExport.emit({
        type: "info",
        snapshot: i
      }), ed.parse(i), i;
    }, this.snapshotToWorkspaceInfo = (s) => {
      var c, h;
      this._slots.beforeImport.emit({
        type: "info",
        snapshot: s
      }), ed.parse(s);
      const { properties: i } = s, n = this._workspace.meta.properties, o = ((c = i.tags) == null ? void 0 : c.options) ?? [], a = ((h = n.tags) == null ? void 0 : h.options) ?? [], l = /* @__PURE__ */ new Set([...o, ...a]);
      this._workspace.meta.setProperties({
        tags: {
          options: Array.from(l)
        }
      }), this._slots.afterImport.emit({
        type: "info",
        snapshot: s
      });
    }, this.sliceToSnapshot = async (s) => {
      this._slots.beforeExport.emit({
        type: "slice",
        slice: s
      });
      const { content: i, pageVersion: n, workspaceVersion: o, pageId: a, workspaceId: l } = s.data, c = [];
      for (const d of i)
        c.push(await this.blockToSnapshot(d));
      const h = {
        type: "slice",
        workspaceId: l,
        pageId: a,
        pageVersion: n,
        workspaceVersion: o,
        content: c
      };
      return this._slots.afterExport.emit({
        type: "slice",
        slice: s,
        snapshot: h
      }), td.parse(h), h;
    }, this.snapshotToSlice = async (s, i, n, o) => {
      this._slots.beforeImport.emit({
        type: "slice",
        snapshot: s
      }), td.parse(s);
      const { content: a, pageVersion: l, workspaceVersion: c, workspaceId: h, pageId: d } = s, u = [];
      for (const [f, m] of a.entries())
        u.push(await this._snapshotToBlock(m, i, n, (o ?? 0) + f));
      const p = new Vc({
        content: u,
        pageVersion: l,
        workspaceVersion: c,
        workspaceId: h,
        pageId: d
      });
      return this._slots.afterImport.emit({
        type: "slice",
        snapshot: s,
        slice: p
      }), p;
    }, this._workspace = t, this._assetsManager = new z_({ blob: t.blob }), e.forEach((s) => {
      s({
        slots: this._slots,
        assetsManager: this._assetsManager,
        workspace: this._workspace,
        adapterConfigs: this._adapterConfigs
      });
    });
  }
  get assetsManager() {
    return this._assetsManager;
  }
  get assets() {
    return this._assetsManager.getAssets();
  }
  get adapterConfigs() {
    return this._adapterConfigs;
  }
  reset() {
    this._assetsManager.cleanup();
  }
  _getSchema(t) {
    const e = this._workspace.schema.flavourSchemaMap.get(t);
    return B(e, `Flavour schema not found for ${t}`), e;
  }
  _getTransformer(t) {
    var e;
    return ((e = t.transformer) == null ? void 0 : e.call(t)) ?? new H_();
  }
  _getWorkspaceMeta() {
    const { meta: t } = this._workspace, { pageVersion: e, workspaceVersion: s, properties: i, pages: n } = t;
    return B(e), B(s), B(i), B(n), {
      pageVersion: e,
      workspaceVersion: s,
      properties: JSON.parse(JSON.stringify(i)),
      pages: JSON.parse(JSON.stringify(n))
    };
  }
  _exportPageMeta(t) {
    const e = t.meta;
    return B(e), {
      id: e.id,
      title: e.title,
      createDate: e.createDate,
      tags: [...e.tags]
    };
  }
  _importPageMeta(t, e) {
    var n;
    const s = t.meta, i = (n = this._workspace.meta.properties.tags) == null ? void 0 : n.options;
    B(i), e.tags.forEach((o) => {
      if (!i.some((l) => l.id === o))
        throw new Error(`Tag ${o} is not in workspace options`);
      s.tags.push(o);
    });
  }
  async _blockToSnapshot(t) {
    this._slots.beforeExport.emit({
      type: "block",
      model: t
    });
    const e = this._getSchema(t.flavour), i = await this._getTransformer(e).toSnapshot({
      model: t,
      assets: this._assetsManager
    }), n = await Promise.all(t.children.map((a) => this._blockToSnapshot(a))), o = {
      type: "block",
      ...i,
      children: n
    };
    return this._slots.afterExport.emit({
      type: "block",
      model: t,
      snapshot: o
    }), o;
  }
  async _snapshotToBlock(t, e, s, i) {
    this._slots.beforeImport.emit({
      type: "block",
      snapshot: t,
      parent: s,
      index: i
    });
    const { children: n, flavour: o, props: a, id: l } = t, c = this._getSchema(o), h = {
      id: l,
      flavour: o,
      props: a
    }, u = await this._getTransformer(c).fromSnapshot({
      json: h,
      assets: this._assetsManager,
      children: n
    });
    e.addBlock(u.flavour, { ...u.props, id: u.id }, s, i);
    for (const [f, m] of n.entries())
      await this._snapshotToBlock(m, e, l, f);
    const p = e.getBlockById(l);
    return B(p), this._slots.afterImport.emit({
      type: "block",
      snapshot: t,
      model: p,
      parent: s,
      index: i
    }), p;
  }
}
const Y_ = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let q_ = (r = 21) => {
  let t = "", e = crypto.getRandomValues(new Uint8Array(r));
  for (; r--; )
    t += Y_[e[r] & 63];
  return t;
};
function K_() {
  let r = 0;
  return () => (r++).toString();
}
function X_(r) {
  let t = 0;
  return () => `${r}:${t++}`;
}
const Z_ = () => mc(), rd = () => q_(10);
function J_(r, t) {
  Array.isArray(t.children) && t.children.forEach((e) => {
    if (!r.has(e.id))
      throw new Error("Invalid child id: " + e.id);
  });
}
function Q_(r, t, e, s) {
  var n, o;
  const i = ((o = (n = r.model).props) == null ? void 0 : o.call(n, wn)) ?? {};
  Object.entries(s).forEach(([a, l]) => {
    $m.has(a) || l !== void 0 && (t[a] = l);
  }), Object.entries(i).forEach(([a, l]) => {
    (!e.has(`prop:${a}`) || e.get(`prop:${a}`) === void 0) && (t[a] = Us(l));
  });
}
class tv {
  getBlock(t) {
    return this._blocks.get(t);
  }
  get blocks() {
    return this._blocks;
  }
  constructor({ schema: t, yBlocks: e }) {
    this._blocks = /* @__PURE__ */ new Map(), this._yBlocks = e, this._schema = t;
  }
  onBlockAdded(t, e, s = {}) {
    if (this._blocks.has(t))
      return;
    const i = this._yBlocks.get(t);
    if (!i) {
      console.warn(`Could not find block with id ${t}`);
      return;
    }
    const n = new $f(this._schema, i, s);
    this._blocks.set(t, n), n.model.page = e, n.model.created.emit();
  }
  onBlockRemoved(t) {
    if (!this._blocks.has(t))
      return;
    const e = this._blocks.get(t);
    e.model.dispose(), this._blocks.delete(t), e.model.deleted.emit();
  }
  addBlock(t, e, s) {
    var h, d;
    const i = this._schema.flavourSchemaMap.get(e);
    B(i, `Could not find schema for flavour ${e}`);
    const n = new Wt();
    this._yBlocks.set(t, n);
    const o = i.version;
    n.set("sys:id", t), n.set("sys:flavour", e), n.set("sys:version", o);
    const l = {
      ...((d = (h = i.model).props) == null ? void 0 : d.call(h, wn)) ?? {},
      ...s
    }, c = Ht.from((l.children ?? []).map((u) => u.id));
    return n.set("sys:children", c), delete l.children, delete l.id, delete l.flavour, Object.entries(l).forEach(([u, p]) => {
      p !== void 0 && n.set(`prop:${u}`, Us(p));
    }), n;
  }
  removeBlock(t) {
    this._yBlocks.delete(t);
  }
}
class ev {
  constructor(t, e, s) {
    this._onLoadSlot = new ot(), this._initSubDoc = () => {
      let i = this.rootDoc.spaces.get(this.id);
      return i ? (this._loaded = !1, this.rootDoc.on("subdocs", this._onSubdocEvent)) : (i = new Je({
        guid: this.id
      }), this.rootDoc.spaces.set(this.id, i), this._loaded = !0, this._onLoadSlot.emit()), i;
    }, this._onSubdocEvent = ({ loaded: i }) => {
      Array.from(i).find((o) => o.guid === this._ySpaceDoc.guid) && (this.rootDoc.off("subdocs", this._onSubdocEvent), this._loaded = !0, this._onLoadSlot.emit());
    }, this.id = t, this.rootDoc = e, this.awarenessStore = s, this._ySpaceDoc = this._initSubDoc(), this._yBlocks = this._ySpaceDoc.getMap("blocks");
  }
  get yBlocks() {
    return this._yBlocks;
  }
  get loaded() {
    return this._loaded;
  }
  get spaceDoc() {
    return this._ySpaceDoc;
  }
  async load() {
    if (this.loaded)
      return this;
    const t = new Promise((e) => {
      this._onLoadSlot.once(() => {
        e(void 0);
      });
    });
    return this._ySpaceDoc.load(), await t, this;
  }
  remove() {
    this.destroy(), this.rootDoc.spaces.delete(this.id);
  }
  destroy() {
    this._ySpaceDoc.destroy(), this._onLoadSlot.dispose(), this._loaded = !1;
  }
  clear() {
    this._yBlocks.clear();
  }
  /**
   * If `shouldTransact` is `false`, the transaction will not be push to the history stack.
   */
  transact(t, e = !0) {
    this._ySpaceDoc.transact(t, e ? this.rootDoc.clientID : null);
  }
}
class sv extends ev {
  constructor({ id: t, workspace: e, doc: s, awarenessStore: i, idGenerator: n = mc }) {
    super(t, s, i), this._root = null, this._docLoaded = !1, this._ready = !1, this._shouldTransact = !0, this.slots = {
      /**
       * This fires when the block tree is initialized via API call or underlying existing ydoc binary.
       * Note that this is different with the `doc.loaded` field,
       * since `loaded` only indicates that the ydoc is loaded, not the block tree.
       */
      ready: new ot(),
      historyUpdated: new ot(),
      /**
       * This fires when the root block is added via API call or has just been initialized from existing ydoc.
       * useful for internal block UI components to start subscribing following up events.
       * Note that at this moment, the whole block tree may not be fully initialized yet.
       */
      rootAdded: new ot(),
      rootDeleted: new ot(),
      blockUpdated: new ot()
    }, this._historyObserver = () => {
      this.slots.historyUpdated.emit();
    }, this._handleYEvents = (o) => {
      for (const a of o)
        this._handleYEvent(a);
    }, this._workspace = e, this._idGenerator = n, this._blockTree = new tv({
      schema: e.schema,
      yBlocks: this.yBlocks
    });
  }
  get readonly() {
    return this.awarenessStore.isReadonly(this);
  }
  get ready() {
    return this._ready;
  }
  get history() {
    return this._history;
  }
  get workspace() {
    return this._workspace;
  }
  get schema() {
    return this.workspace.schema;
  }
  get meta() {
    return this.workspace.meta.getPageMeta(this.id);
  }
  get blob() {
    return this.workspace.blob;
  }
  get root() {
    return this._root;
  }
  get isEmpty() {
    return this._yBlocks.size === 0;
  }
  get canUndo() {
    return this.readonly ? !1 : this._history.canUndo();
  }
  get canRedo() {
    return this.readonly ? !1 : this._history.canRedo();
  }
  get Text() {
    return ui;
  }
  withoutTransact(t) {
    this._shouldTransact = !1, t(), this._shouldTransact = !0;
  }
  transact(t, e = this._shouldTransact) {
    super.transact(t, e);
  }
  undo() {
    if (this.readonly) {
      console.error("cannot modify data in readonly mode");
      return;
    }
    this._history.undo();
  }
  redo() {
    if (this.readonly) {
      console.error("cannot modify data in readonly mode");
      return;
    }
    this._history.redo();
  }
  /** Capture current operations to undo stack synchronously. */
  captureSync() {
    this._history.stopCapturing();
  }
  resetHistory() {
    this._history.clear();
  }
  generateBlockId() {
    return this._idGenerator();
  }
  getBlockById(t) {
    var e;
    return ((e = this._blockTree.getBlock(t)) == null ? void 0 : e.model) ?? null;
  }
  getBlockByFlavour(t) {
    const e = typeof t == "string" ? [t] : t;
    return Array.from(this._blockTree.blocks.values()).filter(({ flavour: s }) => e.includes(s)).map((s) => s.model);
  }
  getParent(t) {
    const e = this._root, s = typeof t == "string" ? t : t.id;
    if (!e || e.id === s)
      return null;
    const i = (o) => {
      const a = this.getBlockById(o);
      if (!a)
        return null;
      for (const [l] of a.childMap) {
        if (l === s)
          return a;
        const c = i(l);
        if (c !== null)
          return c;
      }
      return null;
    }, n = i(e.id);
    return n !== null ? n : null;
  }
  getPreviousSibling(t) {
    const e = this.getParent(t);
    if (!e)
      return null;
    const s = e.children.indexOf(t);
    if (s === -1)
      throw new Error("Failed to getPreviousSiblings! Block not found in parent's children");
    return e.children[s - 1] ?? null;
  }
  getPreviousSiblings(t) {
    const e = this.getParent(t);
    if (!e)
      return [];
    const s = e.children.indexOf(t);
    if (s === -1)
      throw new Error("Failed to getPreviousSiblings! Block not found in parent's children");
    return e.children.slice(0, s);
  }
  getNextSibling(t) {
    const e = this.getParent(t);
    if (!e)
      return null;
    const s = e.children.indexOf(t);
    if (s === -1)
      throw new Error("Failed to getPreviousSiblings! Block not found in parent's children");
    return e.children[s + 1] ?? null;
  }
  getNextSiblings(t) {
    const e = this.getParent(t);
    if (!e)
      return [];
    const s = e.children.indexOf(t);
    if (s === -1)
      throw new Error("Failed to getNextSiblings! Block not found in parent's children");
    return e.children.slice(s + 1);
  }
  getSchemaByFlavour(t) {
    return this.schema.flavourSchemaMap.get(t);
  }
  getInitialPropsByFlavour(t) {
    var s, i;
    const e = this.schema.flavourSchemaMap.get(t);
    return B(e), ((i = (s = e.model).props) == null ? void 0 : i.call(s, wn)) ?? {};
  }
  getBlocks() {
    const t = [];
    return this._blockTree.blocks.forEach(({ model: s }) => {
      t.push(s);
    }), t;
  }
  addBlocks(t, e, s) {
    const i = [];
    return t.forEach((n) => {
      const o = this.addBlock(n.flavour, n.blockProps ?? {}, e, s);
      i.push(o), typeof s == "number" && s++;
    }), i;
  }
  addBlock(t, e = {}, s, i) {
    var l;
    if (this.readonly)
      throw new Error("cannot modify data in readonly mode");
    if (!t)
      throw new Error("Block props must contain flavour");
    const n = typeof s == "string" ? this.getBlockById(s) : s;
    this.schema.validate(t, n == null ? void 0 : n.flavour, (l = e.children) == null ? void 0 : l.map((c) => c.flavour));
    const o = e.id ?? this._idGenerator(), a = {
      id: o,
      flavour: t,
      ...e
    };
    return this.transact(() => {
      var d;
      this._blockTree.addBlock(o, t, { ...e }), J_(this._yBlocks, a);
      const c = this.getSchemaByFlavour(t);
      B(c);
      const h = (n == null ? void 0 : n.id) ?? (c.model.role === "root" || (d = this._root) == null ? void 0 : d.id);
      if (h) {
        const p = this._yBlocks.get(h).get("sys:children"), f = i ?? p.length;
        p.insert(f, [o]);
      }
    }), o;
  }
  moveBlocks(t, e, s = null, i = !0) {
    if (this.readonly) {
      console.error("Cannot modify data in read-only mode");
      return;
    }
    if (!e)
      throw new Error("Can't find new parent block");
    const n = /* @__PURE__ */ new Map();
    t.forEach((o) => {
      const a = this.getParent(o);
      if (!a)
        throw new Error("Can't find parent block for the current block");
      this.schema.validate(o.flavour, e.flavour);
      const l = n.get(a);
      if (l) {
        if (this.getNextSibling(l[l.length - 1]) !== o)
          throw new Error("The blocks to move are not contiguous under their parent");
        l.push(o);
      } else
        n.set(a, [o]);
    }), this.transact(() => {
      let o = 0, a = !0;
      for (const [l, c] of n) {
        const d = this._yBlocks.get(e.id).get("sys:children"), p = this._yBlocks.get(l.id).get("sys:children"), f = c.map(({ id: _ }) => _), m = p.toArray().findIndex((_) => _ === f[0]);
        if (p.delete(m, f.length), a) {
          if (s) {
            const _ = d.toArray().findIndex((y) => y === s.id);
            if (_ === -1)
              throw new Error("Target sibling not found");
            o = i ? _ : _ + 1;
          } else
            o = d.length;
          a = !1;
        } else
          o++;
        d.insert(o, f);
      }
    });
  }
  updateBlock(t, e) {
    var n;
    if (this.readonly) {
      console.error("cannot modify data in readonly mode");
      return;
    }
    const s = typeof e == "function";
    if (!s) {
      const o = this.getParent(t);
      this.schema.validate(t.flavour, o == null ? void 0 : o.flavour, (n = e.children) == null ? void 0 : n.map((a) => a.flavour));
    }
    const i = this._yBlocks.get(t.id);
    B(i), this.transact(() => {
      if (!s) {
        if (e.children) {
          const a = new Ht();
          a.insert(0, e.children.map((l) => l.id)), i.set("sys:children", a);
        }
        const o = this.schema.flavourSchemaMap.get(t.flavour);
        B(o), Q_(o, t, i, e);
        return;
      }
      e();
    });
  }
  addSiblingBlocks(t, e, s = "after") {
    if (!e.length)
      return [];
    const i = this.getParent(t);
    B(i);
    const n = i.children.findIndex(({ id: a }) => a === t.id) ?? 0, o = s === "before" ? n : n + 1;
    if (e.length > 1) {
      const a = [];
      return e.forEach((l) => {
        const { flavour: c, ...h } = l;
        B(c), a.push({ flavour: c, blockProps: h });
      }), this.addBlocks(a, i.id, o);
    } else {
      B(e[0].flavour);
      const { flavour: a, ...l } = e[0];
      return [this.addBlock(a, l, i.id, o)];
    }
  }
  deleteBlock(t, e = {
    deleteChildren: !0
  }) {
    if (this.readonly) {
      console.error("cannot modify data in readonly mode");
      return;
    }
    const { bringChildrenTo: s, deleteChildren: i } = e;
    if (s && i) {
      console.error("Cannot bring children to another block and delete them at the same time");
      return;
    }
    const o = this._yBlocks.get(t.id).get("sys:children"), a = this.getParent(t);
    B(a);
    const c = this._yBlocks.get(a.id).get("sys:children"), h = c.toArray().indexOf(t.id);
    this.transact(() => {
      if (h > -1 && c.delete(h, 1), s)
        t.children.forEach((d) => {
          this.schema.validate(d.flavour, s.flavour);
        }), s.id === a.id ? c.insert(h, o.toArray()) : this._yBlocks.get(s.id).get("sys:children").push(o.toArray());
      else if (i) {
        const d = (u) => {
          this._yBlocks.get(u).get("sys:children").forEach((m) => {
            d(m);
          }), this._blockTree.removeBlock(u);
        };
        o.forEach((u) => {
          d(u);
        });
      }
      this._blockTree.removeBlock(t.id);
    });
  }
  trySyncFromExistingDoc() {
    var t;
    if (this._docLoaded)
      throw new Error("Cannot sync from existing doc more than once");
    (((t = this.workspace.meta.pages) == null ? void 0 : t.length) ?? 0) <= 1 && this._handleVersion(), this._initYBlocks(), this._yBlocks.forEach((e, s) => {
      this._handleYBlockAdd(s);
    }), this._docLoaded = !0, this._yBlocks.size > 0 && (this._ready = !0, this.slots.ready.emit());
  }
  dispose() {
    this.slots.historyUpdated.dispose(), this.slots.rootAdded.dispose(), this.slots.rootDeleted.dispose(), this.slots.blockUpdated.dispose(), this._docLoaded && (this._yBlocks.unobserveDeep(this._handleYEvents), this._yBlocks.clear());
  }
  _initYBlocks() {
    const { _yBlocks: t } = this;
    t.observeDeep(this._handleYEvents), this._history = new Ac([t], {
      trackedOrigins: /* @__PURE__ */ new Set([this._ySpaceDoc.clientID])
    }), this._history.on("stack-cleared", this._historyObserver), this._history.on("stack-item-added", this._historyObserver), this._history.on("stack-item-popped", this._historyObserver), this._history.on("stack-item-updated", this._historyObserver);
  }
  _getYBlock(t) {
    const e = this._yBlocks.get(t);
    return e || null;
  }
  _handleYBlockAdd(t) {
    const e = this._getYBlock(t);
    if (!e) {
      console.warn(`Failed to handle yBlock add, yBlock with id-${t} not found`);
      return;
    }
    this._blockTree.onBlockAdded(t, this, {
      onChange: (o, a) => {
        a && o.model.propsUpdated.emit({ key: a }), this.slots.blockUpdated.emit({
          type: "update",
          id: t,
          flavour: o.flavour,
          props: { key: a }
        });
      }
    });
    const s = this._blockTree.getBlock(t);
    B(s);
    const i = s.model, n = e.get("sys:children");
    if (n instanceof Ht && n.forEach((o, a) => {
      this._blockTree.blocks.has(o) || this._handleYBlockAdd(o), i.children[a] = this.getBlockById(o);
    }), i.role === "root") {
      this._root = i, this.slots.rootAdded.emit(this._root);
      return;
    }
    this.slots.blockUpdated.emit({ type: "add", id: t, flavour: i.flavour });
  }
  _handleYBlockDelete(t) {
    var s;
    const e = this.getBlockById(t);
    e === this._root && this.slots.rootDeleted.emit(t), B(e), this._blockTree.onBlockRemoved(t), this.slots.blockUpdated.emit({
      type: "delete",
      id: t,
      flavour: e.flavour,
      parent: ((s = this.getParent(e)) == null ? void 0 : s.id) ?? "",
      model: e
    });
  }
  _handleYEvent(t) {
    t.target === this._yBlocks && t.keys.forEach((e, s) => {
      e.action === "add" ? this._handleYBlockAdd(s) : e.action === "delete" && this._handleYBlockDelete(s);
    });
  }
  _handleVersion() {
    this.workspace.meta.hasVersion ? this.awarenessStore.getFlag("enable_legacy_validation") && this.workspace.meta.validateVersion(this.workspace) : this.workspace.meta.writeVersion(this.workspace);
  }
  async load(t) {
    return await super.load(), this._docLoaded || this.trySyncFromExistingDoc(), t && (await t(), this._ready = !0, this.slots.ready.emit()), this;
  }
  /** @deprecated use page.load() instead */
  async waitForLoaded() {
    await this.load();
  }
}
var Ul = { exports: {} };
(function(r, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isPlainObject = t.clone = t.recursive = t.merge = t.main = void 0, r.exports = t = e, t.default = e;
  function e() {
    for (var c = [], h = 0; h < arguments.length; h++)
      c[h] = arguments[h];
    return s.apply(void 0, c);
  }
  t.main = e, e.clone = n, e.isPlainObject = o, e.recursive = i;
  function s() {
    for (var c = [], h = 0; h < arguments.length; h++)
      c[h] = arguments[h];
    return l(c[0] === !0, !1, c);
  }
  t.merge = s;
  function i() {
    for (var c = [], h = 0; h < arguments.length; h++)
      c[h] = arguments[h];
    return l(c[0] === !0, !0, c);
  }
  t.recursive = i;
  function n(c) {
    if (Array.isArray(c)) {
      for (var h = [], d = 0; d < c.length; ++d)
        h.push(n(c[d]));
      return h;
    } else if (o(c)) {
      var h = {};
      for (var d in c)
        h[d] = n(c[d]);
      return h;
    } else
      return c;
  }
  t.clone = n;
  function o(c) {
    return c && typeof c == "object" && !Array.isArray(c);
  }
  t.isPlainObject = o;
  function a(c, h) {
    if (!o(c))
      return h;
    for (var d in h)
      d === "__proto__" || d === "constructor" || d === "prototype" || (c[d] = o(c[d]) && o(h[d]) ? a(c[d], h[d]) : h[d]);
    return c;
  }
  function l(c, h, d) {
    var u;
    (c || !o(u = d.shift())) && (u = {});
    for (var p = 0; p < d.length; ++p) {
      var f = d[p];
      if (o(f)) {
        for (var m in f)
          if (!(m === "__proto__" || m === "constructor" || m === "prototype")) {
            var _ = c ? n(f[m]) : f[m];
            u[m] = h ? a(u[m], _) : _;
          }
      }
    }
    return u;
  }
})(Ul, Ul.exports);
var jf = Ul.exports;
const ol = 3e4;
class rv extends Vg {
  /**
   * @param {Y.Doc} doc
   */
  constructor(t) {
    super(), this.doc = t, this.clientID = t.clientID, this.states = /* @__PURE__ */ new Map(), this.meta = /* @__PURE__ */ new Map(), this._checkInterval = /** @type {any} */
    setInterval(() => {
      const e = eo();
      this.getLocalState() !== null && ol / 2 <= e - /** @type {{lastUpdated:number}} */
      this.meta.get(this.clientID).lastUpdated && this.setLocalState(this.getLocalState());
      const s = [];
      this.meta.forEach((i, n) => {
        n !== this.clientID && ol <= e - i.lastUpdated && this.states.has(n) && s.push(n);
      }), s.length > 0 && iv(this, s, "timeout");
    }, fs(ol / 10)), t.on("destroy", () => {
      this.destroy();
    }), this.setLocalState({});
  }
  destroy() {
    this.emit("destroy", [this]), this.setLocalState(null), super.destroy(), clearInterval(this._checkInterval);
  }
  /**
   * @return {Object<string,any>|null}
   */
  getLocalState() {
    return this.states.get(this.clientID) || null;
  }
  /**
   * @param {Object<string,any>|null} state
   */
  setLocalState(t) {
    const e = this.clientID, s = this.meta.get(e), i = s === void 0 ? 0 : s.clock + 1, n = this.states.get(e);
    t === null ? this.states.delete(e) : this.states.set(e, t), this.meta.set(e, {
      clock: i,
      lastUpdated: eo()
    });
    const o = [], a = [], l = [], c = [];
    t === null ? c.push(e) : n == null ? t != null && o.push(e) : (a.push(e), $n(n, t) || l.push(e)), (o.length > 0 || l.length > 0 || c.length > 0) && this.emit("change", [{ added: o, updated: l, removed: c }, "local"]), this.emit("update", [{ added: o, updated: a, removed: c }, "local"]);
  }
  /**
   * @param {string} field
   * @param {any} value
   */
  setLocalStateField(t, e) {
    const s = this.getLocalState();
    s !== null && this.setLocalState({
      ...s,
      [t]: e
    });
  }
  /**
   * @return {Map<number,Object<string,any>>}
   */
  getStates() {
    return this.states;
  }
}
const iv = (r, t, e) => {
  const s = [];
  for (let i = 0; i < t.length; i++) {
    const n = t[i];
    if (r.states.has(n)) {
      if (r.states.delete(n), n === r.clientID) {
        const o = (
          /** @type {MetaClientState} */
          r.meta.get(n)
        );
        r.meta.set(n, {
          clock: o.clock + 1,
          lastUpdated: eo()
        });
      }
      s.push(n);
    }
  }
  s.length > 0 && (r.emit("change", [{ added: [], updated: [], removed: s }, e]), r.emit("update", [{ added: [], updated: [], removed: s }, e]));
};
class nv {
  constructor(t, e, s) {
    this.slots = {
      update: new ot()
    }, this._onAwarenessChange = (i) => {
      const { added: n, removed: o, updated: a } = i, l = this.awareness.getStates();
      n.forEach((c) => {
        this.slots.update.emit({
          id: c,
          type: "add",
          state: l.get(c)
        });
      }), a.forEach((c) => {
        this.slots.update.emit({
          id: c,
          type: "update",
          state: l.get(c)
        });
      }), o.forEach((c) => {
        this.slots.update.emit({
          id: c,
          type: "remove"
        });
      });
    }, this.store = t, this.awareness = e, this.awareness.on("change", this._onAwarenessChange), this.awareness.setLocalStateField("selection", []), this._initFlags(s);
  }
  _initFlags(t) {
    var i;
    const e = (i = this.awareness.getLocalState()) == null ? void 0 : i.flags, s = e ? jf.merge(!0, t, e) : { ...t };
    this.awareness.setLocalStateField("flags", s);
  }
  setFlag(t, e) {
    var i;
    const s = ((i = this.awareness.getLocalState()) == null ? void 0 : i.flags) ?? {};
    this.awareness.setLocalStateField("flags", { ...s, [t]: e });
  }
  getFlag(t) {
    var s;
    return (((s = this.awareness.getLocalState()) == null ? void 0 : s.flags) ?? {})[t];
  }
  setReadonly(t, e) {
    const s = this.getFlag("readonly") ?? {};
    this.setFlag("readonly", {
      ...s,
      [t.id]: e
    });
  }
  isReadonly(t) {
    const e = this.getFlag("readonly");
    return e && typeof e == "object" ? !!e[t.id] : !1;
  }
  setLocalSelection(t) {
    this.awareness.setLocalStateField("selection", t);
  }
  getLocalSelection() {
    var t;
    return ((t = this.awareness.getLocalState()) == null ? void 0 : t.selection) || [];
  }
  getStates() {
    return this.awareness.getStates();
  }
  destroy() {
    this.awareness && (this.awareness.off("change", this._onAwarenessChange), this.slots.update.dispose());
  }
}
class ov extends Je {
  constructor() {
    super(...arguments), this._spaces = this.getMap("spaces");
  }
  get spaces() {
    return this._spaces;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON() {
    const t = super.toJSON();
    delete t.spaces;
    const e = {};
    return this.spaces.forEach((s, i) => {
      e[i] = s.toJSON();
    }), {
      ...t,
      spaces: e
    };
  }
  getMapProxy(t) {
    const e = super.getMap(t);
    return pr(e);
  }
  getArrayProxy(t) {
    const e = super.getArray(t);
    return pr(e);
  }
  transact(t, e) {
    return super.transact(t, e);
  }
}
var Vr;
(function(r) {
  r.NanoID = "nanoID", r.UUIDv4 = "uuidV4", r.AutoIncrementByClientId = "autoIncrementByClientId", r.AutoIncrement = "autoIncrement";
})(Vr || (Vr = {}));
const av = {
  enable_legacy_validation: !0,
  enable_expand_database_block: !1,
  enable_bultin_ledits: !1,
  readonly: {}
};
class lv {
  constructor({ id: t, providerCreators: e = [], awareness: s, idGenerator: i, defaultFlags: n } = { id: rd() }) {
    if (this.providers = [], this.spaces = /* @__PURE__ */ new Map(), this.id = t || "", this.doc = new ov({ guid: t }), this.awarenessStore = new nv(this, s ?? new rv(this.doc), jf.merge(!0, av, n)), typeof i == "function")
      this.idGenerator = i;
    else
      switch (i) {
        case Vr.AutoIncrement: {
          this.idGenerator = K_();
          break;
        }
        case Vr.AutoIncrementByClientId: {
          this.idGenerator = X_(this.doc.clientID);
          break;
        }
        case Vr.UUIDv4: {
          this.idGenerator = Z_;
          break;
        }
        case Vr.NanoID:
        default: {
          this.idGenerator = rd;
          break;
        }
      }
    this.providers = e.map((o) => o(this.id, this.doc, {
      awareness: this.awarenessStore.awareness
    }));
  }
  registerProvider(t, e) {
    const s = t(e ?? this.id, this.doc, {
      awareness: this.awarenessStore.awareness
    });
    return this.providers.push(s), s;
  }
  addSpace(t) {
    this.spaces.set(t.id, t);
  }
  removeSpace(t) {
    this.spaces.delete(t.id);
  }
}
const cv = (r) => class extends r {
  constructor(t) {
    super(t), this._storages = [], this._blobsRef = /* @__PURE__ */ new Map(), this._storages = (t.blobStorages ?? [Bm]).map((e) => e(t.id || "")), this.blob = {
      get: async (e) => {
        let s = !1, i = 0;
        return new Promise((n) => {
          this._storages.forEach((o) => {
            o.crud.get(e).then((a) => {
              a && !s && (s = !0, n(a)), ++i === this._storages.length && !s && n(null);
            }).catch((a) => {
              console.error(a), ++i === this._storages.length && !s && n(null);
            });
          });
        });
      },
      set: async (e, s) => {
        const i = s || await Gg(await e.arrayBuffer());
        return await Promise.all(this._storages.map((n) => n.crud.set(i, e))), i;
      },
      delete: async (e) => {
        await Promise.all(this._storages.map((s) => s.crud.delete(e)));
      },
      list: async () => {
        const e = /* @__PURE__ */ new Set();
        return await Promise.all(this._storages.map(async (s) => {
          (await s.crud.list()).forEach((n) => e.add(n));
        })), Array.from(e);
      },
      gc: async () => {
        (await this.blob.list()).forEach((s) => {
          const i = this._blobsRef.get(s);
          (!i || i <= 0) && (this.blob.delete(s).catch(console.error), this._blobsRef.delete(s));
        });
      },
      increaseRef: (e) => {
        const s = this._blobsRef.get(e) ?? 0;
        this._blobsRef.set(e, s + 1);
      },
      decreaseRef: (e) => {
        const s = this._blobsRef.get(e) ?? 0;
        this._blobsRef.set(e, Math.max(s - 1, 0));
      }
    };
  }
};
function hv(r, t, e = (s, i) => s === i) {
  const s = [], i = [], n = [];
  for (const o of r)
    t.some((a) => e(a, o)) ? n.push(o) : i.push(o);
  for (const o of t)
    r.some((a) => e(a, o)) || s.push(o);
  return { changed: s.length || i.length, add: s, remove: i, unchanged: n };
}
class dv {
  get linkIndexMap() {
    return this._linkIndexMap;
  }
  constructor(t) {
    this._disposables = new ds(), this._linkIndexMap = {}, this.slots = {
      /**
       * Note: sys:children update will not trigger event
       */
      indexUpdated: new ot()
    }, this._backlinkIndexMapCache = null, this._disposables.add(t.slots.refreshIndex.on(() => this._onRefreshIndex())), this._disposables.add(t.slots.pageRemoved.on((e) => this._onPageRemoved(e))), this._disposables.add(t.slots.blockUpdated.on((e) => this._onBlockUpdated(e))), this.slots.indexUpdated.on(() => {
      this._backlinkIndexMapCache = null;
    });
  }
  /**
   * Get the list of backlinks for a given page
   */
  getBacklink(t) {
    if (this._backlinkIndexMapCache)
      return this._backlinkIndexMapCache[t] ?? [];
    const e = {};
    for (const [s, i] of Object.entries(this._linkIndexMap))
      for (const [n, o] of Object.entries(i))
        o.forEach(({ pageId: a, type: l }) => {
          a in e || (e[a] = []), e[a].push({
            pageId: s,
            blockId: n,
            type: l
          });
        });
    return this._backlinkIndexMapCache = e, this._backlinkIndexMapCache[t] ?? [];
  }
  _onRefreshIndex() {
    this._linkIndexMap = {};
  }
  _onPageRemoved(t) {
    this._linkIndexMap[t] && (this._linkIndexMap[t] = {}, this.slots.indexUpdated.emit({ action: "delete", pageId: t }));
  }
  _onBlockUpdated({ action: t, pageId: e, block: s, blockId: i }) {
    switch (t) {
      case "add":
      case "update": {
        let n = [];
        const o = s.get("prop:text");
        if (o)
          if (o instanceof Jt) {
            const l = o.toDelta();
            n = [
              ...n,
              ...l.filter((c) => c.attributes && c.attributes.reference).map((c) => ({ ...c.attributes.reference, blockId: i }))
            ];
          } else
            console.warn("Unexpected prop:text type", o);
        if (s.get("sys:flavour") === "affine:embed-linked-doc") {
          const l = s.get("prop:pageId");
          typeof l == "string" ? n = [...n, { pageId: l, blockId: i, type: "LinkedPage" }] : console.warn("Unexpected prop:pageId type", l);
        }
        this._indexDelta({ action: t, pageId: e, blockId: i, links: n });
        return;
      }
      case "delete": {
        this._removeIndex(e, i);
        break;
      }
    }
  }
  _indexDelta({ action: t, pageId: e, blockId: s, links: i }) {
    var a;
    const n = ((a = this._linkIndexMap[e]) == null ? void 0 : a[s]) ?? [];
    hv(n, i).changed && (this._linkIndexMap[e] = {
      ...this._linkIndexMap[e],
      [s]: i
    }, this.slots.indexUpdated.emit({ action: t, pageId: e, blockId: s }));
  }
  _removeIndex(t, e) {
    if (!this._linkIndexMap[t] || !this._linkIndexMap[t][e])
      return;
    const s = this._linkIndexMap[t][e];
    delete this._linkIndexMap[t][e], s.length && this.slots.indexUpdated.emit({
      action: "delete",
      pageId: t,
      blockId: e
    });
  }
  dispose() {
    this._disposables.dispose();
  }
}
class uv {
  constructor(t, { immediately: e = !1, slots: s }) {
    if (this._disposables = new ds(), this.slots = {
      pageRemoved: new ot(),
      /**
       * Note: sys:children update will not trigger event
       */
      blockUpdated: new ot(),
      refreshIndex: new ot()
    }, this._yPageObserver = (i, n, { pageId: o, yPage: a }) => {
      i.forEach((l) => {
        if (!(l instanceof Nc)) {
          if (l instanceof Fc) {
            if (l.target !== l.currentTarget) {
              if (l.keysChanged.has("prop:text")) {
                const c = l.path[0], h = a.get(c);
                B(h), this._indexBlock({
                  action: "update",
                  pageId: o,
                  blockId: c,
                  block: h
                });
              }
              return;
            }
            Array.from(l.changes.keys.entries()).forEach(([c, { action: h }]) => {
              if (h === "delete") {
                this._indexBlock({
                  action: h,
                  pageId: o,
                  blockId: c
                });
                return;
              }
              const d = a.get(c);
              B(d), this._indexBlock({
                action: h,
                pageId: o,
                blockId: c,
                block: d
              });
            });
            return;
          }
          if (l instanceof Lc) {
            const c = l.path[0];
            if (!c || typeof c != "string")
              throw new Error("Failed to update index! Unexpected YText Event!");
            const h = a.get(c);
            B(h), this._indexBlock({
              action: "update",
              pageId: o,
              blockId: c,
              block: h
            });
            return;
          }
        }
      });
    }, this._doc = t, this._workspaceSlots = s, e) {
      this._initIndex();
      return;
    }
    setTimeout(() => {
      this._initIndex();
    }, 0);
  }
  _initIndex() {
    const t = this._doc;
    if (!t.share.has("meta"))
      throw new Error("Failed to initialize indexer: workspace meta not found");
    let s = {};
    this._disposables.add(() => {
      Object.values(s).forEach((i) => i == null ? void 0 : i()), s = {};
    }), Array.from(t.spaces.keys()).map((i) => ({ pageId: i, page: this._getPage(i) })).forEach(({ pageId: i, page: n }) => {
      if (B(n, `Failed to find page '${i}'`), s[i]) {
        console.warn(`Duplicated pageAdded event! ${i} already observed`, s);
        return;
      }
      const o = this._indexPage(i, n);
      s[i] = o;
    }), this._workspaceSlots.pageAdded.on((i) => {
      const n = this._getPage(i);
      if (B(n, `Failed to find page '${i}'`), s[i])
        return;
      const o = this._indexPage(i, n);
      s[i] = o;
    }), this._workspaceSlots.pageRemoved.on((i) => {
      var n;
      (n = s[i]) == null || n.call(s), s[i] = null, this.slots.pageRemoved.emit(i);
    });
  }
  _indexPage(t, e) {
    const s = e.getMap("blocks");
    s.forEach((n, o) => {
      this._indexBlock({ action: "add", pageId: t, blockId: o, block: n });
    });
    const i = (n, o) => this._yPageObserver(n, o, { pageId: t, yPage: s });
    return s.observeDeep(i), () => {
      s.unobserveDeep(i);
    };
  }
  _indexBlock(t) {
    this.slots.blockUpdated.emit(t);
  }
  _getPage(t) {
    return this._doc.spaces.get(t);
  }
  refreshIndex() {
    this.slots.refreshIndex.emit(), this._initIndex();
  }
  dispose() {
    this._disposables.dispose();
  }
}
const jc = typeof window < "u" && typeof document < "u", fv = typeof process < "u" && !jc;
jc && navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
const pv = {}, gv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pv
}, Symbol.toStringTag, { value: "Module" })), mv = /* @__PURE__ */ D0(gv);
var Mt;
function Yn(r) {
  return typeof r < "u" ? r : !0;
}
function id(r) {
  const t = Array(r);
  for (let e = 0; e < r; e++)
    t[e] = kt();
  return t;
}
function kt() {
  return /* @__PURE__ */ Object.create(null);
}
function _v(r, t) {
  return t.length - r.length;
}
function re(r) {
  return typeof r == "string";
}
function zs(r) {
  return typeof r == "object";
}
function zc(r) {
  return typeof r == "function";
}
function zf(r, t) {
  var e = vv;
  if (r && (t && (r = qn(r, t)), this.H && (r = qn(r, this.H)), this.J && 1 < r.length && (r = qn(r, this.J)), e || e === "")) {
    if (t = r.split(e), this.filter) {
      r = this.filter, e = t.length;
      const s = [];
      for (let i = 0, n = 0; i < e; i++) {
        const o = t[i];
        o && !r[o] && (s[n++] = o);
      }
      r = s;
    } else
      r = t;
    return r;
  }
  return r;
}
const vv = /[\p{Z}\p{S}\p{P}\p{C}]+/u, yv = /[\u0300-\u036f]/g;
function nd(r, t) {
  const e = Object.keys(r), s = e.length, i = [];
  let n = "", o = 0;
  for (let a = 0, l, c; a < s; a++)
    l = e[a], (c = r[l]) ? (i[o++] = It(t ? "(?!\\b)" + l + "(\\b|_)" : l), i[o++] = c) : n += (n ? "|" : "") + l;
  return n && (i[o++] = It(t ? "(?!\\b)(" + n + ")(\\b|_)" : "(" + n + ")"), i[o] = ""), i;
}
function qn(r, t) {
  for (let e = 0, s = t.length; e < s && (r = r.replace(t[e], t[e + 1]), r); e += 2)
    ;
  return r;
}
function It(r) {
  return new RegExp(r, "g");
}
function Hf(r) {
  let t = "", e = "";
  for (let s = 0, i = r.length, n; s < i; s++)
    (n = r[s]) !== e && (t += e = n);
  return t;
}
var wv = { encode: Wf, F: !1, G: "" };
function Wf(r) {
  return zf.call(this, ("" + r).toLowerCase(), !1);
}
const Yf = {}, Cr = {};
function qf(r) {
  bi(r, "add"), bi(r, "append"), bi(r, "search"), bi(r, "update"), bi(r, "remove");
}
function bi(r, t) {
  r[t + "Async"] = function() {
    const e = this, s = arguments;
    var i = s[s.length - 1];
    let n;
    return zc(i) && (n = i, delete s[s.length - 1]), i = new Promise(function(o) {
      setTimeout(function() {
        e.async = !0;
        const a = e[t].apply(e, s);
        e.async = !1, o(a);
      });
    }), n ? (i.then(n), this) : i;
  };
}
function Kf(r, t, e, s) {
  const i = r.length;
  let n = [], o, a, l = 0;
  s && (s = []);
  for (let c = i - 1; 0 <= c; c--) {
    const h = r[c], d = h.length, u = kt();
    let p = !o;
    for (let f = 0; f < d; f++) {
      const m = h[f], _ = m.length;
      if (_)
        for (let y = 0, k, g; y < _; y++)
          if (g = m[y], o) {
            if (o[g]) {
              if (!c) {
                if (e)
                  e--;
                else if (n[l++] = g, l === t)
                  return n;
              }
              (c || s) && (u[g] = 1), p = !0;
            }
            if (s && (k = (a[g] || 0) + 1, a[g] = k, k < i)) {
              const v = s[k - 2] || (s[k - 2] = []);
              v[v.length] = g;
            }
          } else
            u[g] = 1;
    }
    if (s)
      o || (a = u);
    else if (!p)
      return [];
    o = u;
  }
  if (s)
    for (let c = s.length - 1, h, d; 0 <= c; c--) {
      h = s[c], d = h.length;
      for (let u = 0, p; u < d; u++)
        if (p = h[u], !o[p]) {
          if (e)
            e--;
          else if (n[l++] = p, l === t)
            return n;
          o[p] = 1;
        }
    }
  return n;
}
function bv(r, t) {
  const e = kt(), s = kt(), i = [];
  for (let n = 0; n < r.length; n++)
    e[r[n]] = 1;
  for (let n = 0, o; n < t.length; n++) {
    o = t[n];
    for (let a = 0, l; a < o.length; a++)
      l = o[a], e[l] && !s[l] && (s[l] = 1, i[i.length] = l);
  }
  return i;
}
function Ko(r) {
  this.l = r !== !0 && r, this.cache = kt(), this.h = [];
}
function Xf(r, t, e) {
  zs(r) && (r = r.query);
  let s = this.cache.get(r);
  return s || (s = this.search(r, t, e), this.cache.set(r, s)), s;
}
Ko.prototype.set = function(r, t) {
  if (!this.cache[r]) {
    var e = this.h.length;
    for (e === this.l ? delete this.cache[this.h[e - 1]] : e++, --e; 0 < e; e--)
      this.h[e] = this.h[e - 1];
    this.h[0] = r;
  }
  this.cache[r] = t;
};
Ko.prototype.get = function(r) {
  const t = this.cache[r];
  if (this.l && t && (r = this.h.indexOf(r))) {
    const e = this.h[r - 1];
    this.h[r - 1] = this.h[r], this.h[r] = e;
  }
  return t;
};
const Sv = { memory: { charset: "latin:extra", D: 3, B: 4, m: !1 }, performance: { D: 3, B: 3, s: !1, context: { depth: 2, D: 1 } }, match: { charset: "latin:extra", G: "reverse" }, score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } }, default: {} };
function Zf(r, t, e, s, i, n, o, a) {
  setTimeout(function() {
    const l = r(e ? e + "." + s : s, JSON.stringify(o));
    l && l.then ? l.then(function() {
      t.export(r, t, e, i, n + 1, a);
    }) : t.export(r, t, e, i, n + 1, a);
  });
}
function vr(r, t) {
  if (!(this instanceof vr))
    return new vr(r);
  var e;
  if (r) {
    re(r) ? r = Sv[r] : (e = r.preset) && (r = Object.assign({}, e[e], r)), e = r.charset;
    var s = r.lang;
    re(e) && (e.indexOf(":") === -1 && (e += ":default"), e = Cr[e]), re(s) && (s = Yf[s]);
  } else
    r = {};
  let i, n, o = r.context || {};
  if (this.encode = r.encode || e && e.encode || Wf, this.register = t || kt(), this.D = i = r.resolution || 9, this.G = t = e && e.G || r.tokenize || "strict", this.depth = t === "strict" && o.depth, this.l = Yn(o.bidirectional), this.s = n = Yn(r.optimize), this.m = Yn(r.fastupdate), this.B = r.minlength || 1, this.C = r.boost, this.map = n ? id(i) : kt(), this.A = i = o.resolution || 1, this.h = n ? id(i) : kt(), this.F = e && e.F || r.rtl, this.H = (t = r.matcher || s && s.H) && nd(t, !1), this.J = (t = r.stemmer || s && s.J) && nd(t, !0), e = t = r.filter || s && s.filter) {
    e = t, s = kt();
    for (let a = 0, l = e.length; a < l; a++)
      s[e[a]] = 1;
    e = s;
  }
  this.filter = e, this.cache = (t = r.cache) && new Ko(t);
}
Mt = vr.prototype;
Mt.append = function(r, t) {
  return this.add(r, t, !0);
};
Mt.add = function(r, t, e, s) {
  if (t && (r || r === 0)) {
    if (!s && !e && this.register[r])
      return this.update(r, t);
    if (t = this.encode(t), s = t.length) {
      const c = kt(), h = kt(), d = this.depth, u = this.D;
      for (let p = 0; p < s; p++) {
        let f = t[this.F ? s - 1 - p : p];
        var i = f.length;
        if (f && i >= this.B && (d || !h[f])) {
          var n = Rn(u, s, p), o = "";
          switch (this.G) {
            case "full":
              if (2 < i) {
                for (n = 0; n < i; n++)
                  for (var a = i; a > n; a--)
                    if (a - n >= this.B) {
                      var l = Rn(u, s, p, i, n);
                      o = f.substring(n, a), Si(this, h, o, l, r, e);
                    }
                break;
              }
            case "reverse":
              if (1 < i) {
                for (a = i - 1; 0 < a; a--)
                  o = f[a] + o, o.length >= this.B && Si(
                    this,
                    h,
                    o,
                    Rn(u, s, p, i, a),
                    r,
                    e
                  );
                o = "";
              }
            case "forward":
              if (1 < i) {
                for (a = 0; a < i; a++)
                  o += f[a], o.length >= this.B && Si(this, h, o, n, r, e);
                break;
              }
            default:
              if (this.C && (n = Math.min(n / this.C(t, f, p) | 0, u - 1)), Si(this, h, f, n, r, e), d && 1 < s && p < s - 1) {
                for (i = kt(), o = this.A, n = f, a = Math.min(d + 1, s - p), i[n] = 1, l = 1; l < a; l++)
                  if ((f = t[this.F ? s - 1 - p - l : p + l]) && f.length >= this.B && !i[f]) {
                    i[f] = 1;
                    const m = this.l && f > n;
                    Si(this, c, m ? n : f, Rn(o + (s / 2 > o ? 0 : 1), s, p, a - 1, l - 1), r, e, m ? f : n);
                  }
              }
          }
        }
      }
      this.m || (this.register[r] = 1);
    }
  }
  return this;
};
function Rn(r, t, e, s, i) {
  return e && 1 < r ? t + (s || 0) <= r ? e + (i || 0) : (r - 1) / (t + (s || 0)) * (e + (i || 0)) + 1 | 0 : 0;
}
function Si(r, t, e, s, i, n, o) {
  let a = o ? r.h : r.map;
  (!t[e] || o && !t[e][o]) && (r.s && (a = a[s]), o ? (t = t[e] || (t[e] = kt()), t[o] = 1, a = a[o] || (a[o] = kt())) : t[e] = 1, a = a[e] || (a[e] = []), r.s || (a = a[s] || (a[s] = [])), n && a.includes(i) || (a[a.length] = i, r.m && (r = r.register[i] || (r.register[i] = []), r[r.length] = a)));
}
Mt.search = function(r, t, e) {
  e || (!t && zs(r) ? (e = r, r = e.query) : zs(t) && (e = t));
  let s = [], i, n, o = 0;
  if (e) {
    r = e.query || r, t = e.limit, o = e.offset || 0;
    var a = e.context;
    n = e.suggest;
  }
  if (r && (r = this.encode("" + r), i = r.length, 1 < i)) {
    e = kt();
    var l = [];
    for (let h = 0, d = 0, u; h < i; h++)
      if ((u = r[h]) && u.length >= this.B && !e[u])
        if (this.s || n || this.map[u])
          l[d++] = u, e[u] = 1;
        else
          return s;
    r = l, i = r.length;
  }
  if (!i)
    return s;
  t || (t = 100), a = this.depth && 1 < i && a !== !1, e = 0;
  let c;
  a ? (c = r[0], e = 1) : 1 < i && r.sort(_v);
  for (let h, d; e < i; e++) {
    if (d = r[e], a ? (h = od(
      this,
      s,
      n,
      t,
      o,
      i === 2,
      d,
      c
    ), n && h === !1 && s.length || (c = d)) : h = od(this, s, n, t, o, i === 1, d), h)
      return h;
    if (n && e === i - 1) {
      if (l = s.length, !l) {
        if (a) {
          a = 0, e = -1;
          continue;
        }
        return s;
      }
      if (l === 1)
        return Jf(s[0], t, o);
    }
  }
  return Kf(s, t, o, n);
};
function od(r, t, e, s, i, n, o, a) {
  let l = [], c = a ? r.h : r.map;
  if (r.s || (c = ad(c, o, a, r.l)), c) {
    let h = 0;
    const d = Math.min(c.length, a ? r.A : r.D);
    for (let u = 0, p = 0, f, m; u < d && !((f = c[u]) && (r.s && (f = ad(f, o, a, r.l)), i && f && n && (m = f.length, m <= i ? (i -= m, f = null) : (f = f.slice(i), i = 0)), f && (l[h++] = f, n && (p += f.length, p >= s)))); u++)
      ;
    if (h) {
      if (n)
        return Jf(l, s, 0);
      t[t.length] = l;
      return;
    }
  }
  return !e && l;
}
function Jf(r, t, e) {
  return r = r.length === 1 ? r[0] : [].concat.apply([], r), e || r.length > t ? r.slice(e, e + t) : r;
}
function ad(r, t, e, s) {
  return e ? (s = s && t > e, r = (r = r[s ? t : e]) && r[s ? e : t]) : r = r[t], r;
}
Mt.contain = function(r) {
  return !!this.register[r];
};
Mt.update = function(r, t) {
  return this.remove(r).add(r, t);
};
Mt.remove = function(r, t) {
  const e = this.register[r];
  if (e) {
    if (this.m)
      for (let s = 0, i; s < e.length; s++)
        i = e[s], i.splice(i.indexOf(r), 1);
    else
      yo(this.map, r, this.D, this.s), this.depth && yo(this.h, r, this.A, this.s);
    if (t || delete this.register[r], this.cache) {
      t = this.cache;
      for (let s = 0, i, n; s < t.h.length; s++)
        n = t.h[s], i = t.cache[n], i.includes(r) && (t.h.splice(s--, 1), delete t.cache[n]);
    }
  }
  return this;
};
function yo(r, t, e, s, i) {
  let n = 0;
  if (r.constructor === Array)
    if (i)
      t = r.indexOf(t), t !== -1 ? 1 < r.length && (r.splice(t, 1), n++) : n++;
    else {
      i = Math.min(r.length, e);
      for (let o = 0, a; o < i; o++)
        (a = r[o]) && (n = yo(a, t, e, s, i), s || n || delete r[o]);
    }
  else
    for (let o in r)
      (n = yo(r[o], t, e, s, i)) || delete r[o];
  return n;
}
Mt.searchCache = Xf;
Mt.export = function(r, t, e, s, i, n) {
  let o = !0;
  typeof n > "u" && (o = new Promise((c) => {
    n = c;
  }));
  let a, l;
  switch (i || (i = 0)) {
    case 0:
      if (a = "reg", this.m) {
        l = kt();
        for (let c in this.register)
          l[c] = 1;
      } else
        l = this.register;
      break;
    case 1:
      a = "cfg", l = { doc: 0, opt: this.s ? 1 : 0 };
      break;
    case 2:
      a = "map", l = this.map;
      break;
    case 3:
      a = "ctx", l = this.h;
      break;
    default:
      typeof e > "u" && n && n();
      return;
  }
  return Zf(r, t || this, e, a, s, i, l, n), o;
};
Mt.import = function(r, t) {
  if (t)
    switch (re(t) && (t = JSON.parse(t)), r) {
      case "cfg":
        this.s = !!t.opt;
        break;
      case "reg":
        this.m = !1, this.register = t;
        break;
      case "map":
        this.map = t;
        break;
      case "ctx":
        this.h = t;
    }
};
qf(vr.prototype);
function kv(r) {
  r = r.data;
  var t = self._index;
  const e = r.args;
  var s = r.task;
  switch (s) {
    case "init":
      s = r.options || {}, r = r.factory, t = s.encode, s.cache = !1, t && t.indexOf("function") === 0 && (s.encode = Function("return " + t)()), r ? (Function("return " + r)()(self), self._index = new self.FlexSearch.Index(s), delete self.FlexSearch) : self._index = new vr(s);
      break;
    default:
      r = r.id, t = t[s].apply(t, e), postMessage(s === "search" ? { id: r, msg: t } : { id: r });
  }
}
let ld = 0;
function ti(r) {
  if (!(this instanceof ti))
    return new ti(r);
  var t;
  r ? zc(t = r.encode) && (r.encode = t.toString()) : r = {}, (t = (self || window)._factory) && (t = t.toString());
  const e = typeof window > "u" && self.exports, s = this;
  this.o = xv(t, e, r.worker), this.h = kt(), this.o && (e ? this.o.on("message", function(i) {
    s.h[i.id](i.msg), delete s.h[i.id];
  }) : this.o.onmessage = function(i) {
    i = i.data, s.h[i.id](i.msg), delete s.h[i.id];
  }, this.o.postMessage({ task: "init", factory: t, options: r }));
}
bn("add");
bn("append");
bn("search");
bn("update");
bn("remove");
function bn(r) {
  ti.prototype[r] = ti.prototype[r + "Async"] = function() {
    const t = this, e = [].slice.call(arguments);
    var s = e[e.length - 1];
    let i;
    return zc(s) && (i = s, e.splice(e.length - 1, 1)), s = new Promise(function(n) {
      setTimeout(function() {
        t.h[++ld] = n, t.o.postMessage({ task: r, id: ld, args: e });
      });
    }), i ? (s.then(i), this) : s;
  };
}
function xv(r, t, e) {
  let s;
  try {
    s = t ? new mv.Worker(__dirname + "/node/node.js") : r ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + kv.toString()], { type: "text/javascript" }))) : new Worker(re(e) ? e : "worker/worker.js", { type: "module" });
  } catch {
  }
  return s;
}
function on(r) {
  if (!(this instanceof on))
    return new on(r);
  var t = r.document || r.doc || r, e;
  this.K = [], this.h = [], this.A = [], this.register = kt(), this.key = (e = t.key || t.id) && Dn(e, this.A) || "id", this.m = Yn(r.fastupdate), this.C = (e = t.store) && e !== !0 && [], this.store = e && kt(), this.I = (e = t.tag) && Dn(e, this.A), this.l = e && kt(), this.cache = (e = r.cache) && new Ko(e), r.cache = !1, this.o = r.worker, this.async = !1, e = kt();
  let s = t.index || t.field || t;
  re(s) && (s = [s]);
  for (let i = 0, n, o; i < s.length; i++)
    n = s[i], re(n) || (o = n, n = n.field), o = zs(o) ? Object.assign({}, r, o) : r, this.o && (e[n] = new ti(o), e[n].o || (this.o = !1)), this.o || (e[n] = new vr(o, this.register)), this.K[i] = Dn(n, this.A), this.h[i] = n;
  if (this.C)
    for (r = t.store, re(r) && (r = [r]), t = 0; t < r.length; t++)
      this.C[t] = Dn(r[t], this.A);
  this.index = e;
}
function Dn(r, t) {
  const e = r.split(":");
  let s = 0;
  for (let i = 0; i < e.length; i++)
    r = e[i], 0 <= r.indexOf("[]") && (r = r.substring(0, r.length - 2)) && (t[s] = !0), r && (e[s++] = r);
  return s < e.length && (e.length = s), 1 < s ? e : e[0];
}
function Gl(r, t) {
  if (re(t))
    r = r[t];
  else
    for (let e = 0; r && e < t.length; e++)
      r = r[t[e]];
  return r;
}
function Vl(r, t, e, s, i) {
  if (r = r[i], s === e.length - 1)
    t[i] = r;
  else if (r)
    if (r.constructor === Array)
      for (t = t[i] = Array(r.length), i = 0; i < r.length; i++)
        Vl(r, t, e, s, i);
    else
      t = t[i] || (t[i] = kt()), i = e[++s], Vl(r, t, e, s, i);
}
function jl(r, t, e, s, i, n, o, a) {
  if (r = r[o])
    if (s === t.length - 1) {
      if (r.constructor === Array) {
        if (e[s]) {
          for (t = 0; t < r.length; t++)
            i.add(n, r[t], !0, !0);
          return;
        }
        r = r.join(" ");
      }
      i.add(n, r, a, !0);
    } else if (r.constructor === Array)
      for (o = 0; o < r.length; o++)
        jl(r, t, e, s, i, n, o, a);
    else
      o = t[++s], jl(r, t, e, s, i, n, o, a);
}
Mt = on.prototype;
Mt.add = function(r, t, e) {
  if (zs(r) && (t = r, r = Gl(t, this.key)), t && (r || r === 0)) {
    if (!e && this.register[r])
      return this.update(r, t);
    for (let s = 0, i, n; s < this.h.length; s++)
      n = this.h[s], i = this.K[s], re(i) && (i = [i]), jl(t, i, this.A, 0, this.index[n], r, i[0], e);
    if (this.I) {
      let s = Gl(t, this.I), i = kt();
      re(s) && (s = [s]);
      for (let n = 0, o, a; n < s.length; n++)
        if (o = s[n], !i[o] && (i[o] = 1, a = this.l[o] || (this.l[o] = []), !e || !a.includes(r)) && (a[a.length] = r, this.m)) {
          const l = this.register[r] || (this.register[r] = []);
          l[l.length] = a;
        }
    }
    if (this.store && (!e || !this.store[r])) {
      let s;
      if (this.C) {
        s = kt();
        for (let i = 0, n; i < this.C.length; i++)
          n = this.C[i], re(n) ? s[n] = t[n] : Vl(t, s, n, 0, n[0]);
      }
      this.store[r] = s || t;
    }
  }
  return this;
};
Mt.append = function(r, t) {
  return this.add(r, t, !0);
};
Mt.update = function(r, t) {
  return this.remove(r).add(r, t);
};
Mt.remove = function(r) {
  if (zs(r) && (r = Gl(r, this.key)), this.register[r]) {
    for (var t = 0; t < this.h.length && (this.index[this.h[t]].remove(r, !this.o), !this.m); t++)
      ;
    if (this.I && !this.m)
      for (let e in this.l) {
        t = this.l[e];
        const s = t.indexOf(r);
        s !== -1 && (1 < t.length ? t.splice(s, 1) : delete this.l[e]);
      }
    this.store && delete this.store[r], delete this.register[r];
  }
  return this;
};
Mt.search = function(r, t, e, s) {
  e || (!t && zs(r) ? (e = r, r = "") : zs(t) && (e = t, t = 0));
  let i = [], n = [], o, a, l, c, h, d, u = 0;
  if (e)
    if (e.constructor === Array)
      l = e, e = null;
    else {
      if (r = e.query || r, l = (o = e.pluck) || e.index || e.field, c = e.tag, a = this.store && e.enrich, h = e.bool === "and", t = e.limit || t || 100, d = e.offset || 0, c && (re(c) && (c = [c]), !r)) {
        for (let f = 0, m; f < c.length; f++)
          (m = Cv.call(this, c[f], t, d, a)) && (i[i.length] = m, u++);
        return u ? i : [];
      }
      re(l) && (l = [l]);
    }
  l || (l = this.h), h = h && (1 < l.length || c && 1 < c.length);
  const p = !s && (this.o || this.async) && [];
  for (let f = 0, m, _, y; f < l.length; f++) {
    let k;
    if (_ = l[f], re(_) || (k = _, _ = k.field, r = k.query || r, t = k.limit || t, a = k.enrich || a), p)
      p[f] = this.index[_].searchAsync(r, t, k || e);
    else {
      if (s ? m = s[f] : m = this.index[_].search(r, t, k || e), y = m && m.length, c && y) {
        const g = [];
        let v = 0;
        h && (g[0] = [m]);
        for (let b = 0, w, x; b < c.length; b++)
          w = c[b], (y = (x = this.l[w]) && x.length) && (v++, g[g.length] = h ? [x] : x);
        v && (m = h ? Kf(g, t || 100, d || 0) : bv(m, g), y = m.length);
      }
      if (y)
        n[u] = _, i[u++] = m;
      else if (h)
        return [];
    }
  }
  if (p) {
    const f = this;
    return new Promise(function(m) {
      Promise.all(p).then(function(_) {
        m(f.search(
          r,
          t,
          e,
          _
        ));
      });
    });
  }
  if (!u)
    return [];
  if (o && (!a || !this.store))
    return i[0];
  for (let f = 0, m; f < n.length; f++) {
    if (m = i[f], m.length && a && (m = Qf.call(this, m)), o)
      return m;
    i[f] = { field: n[f], result: m };
  }
  return i;
};
function Cv(r, t, e, s) {
  let i = this.l[r], n = i && i.length - e;
  if (n && 0 < n)
    return (n > t || e) && (i = i.slice(e, e + t)), s && (i = Qf.call(this, i)), { tag: r, result: i };
}
function Qf(r) {
  const t = Array(r.length);
  for (let e = 0, s; e < r.length; e++)
    s = r[e], t[e] = { id: s, doc: this.store[s] };
  return t;
}
Mt.contain = function(r) {
  return !!this.register[r];
};
Mt.get = function(r) {
  return this.store[r];
};
Mt.set = function(r, t) {
  return this.store[r] = t, this;
};
Mt.searchCache = Xf;
Mt.export = function(r, t, e, s, i, n) {
  let o;
  if (typeof n > "u" && (o = new Promise((a) => {
    n = a;
  })), i || (i = 0), s || (s = 0), s < this.h.length) {
    const a = this.h[s], l = this.index[a];
    t = this, setTimeout(function() {
      l.export(r, t, i ? a : "", s, i++, n) || (s++, i = 1, t.export(r, t, a, s, i, n));
    });
  } else {
    let a, l;
    switch (i) {
      case 1:
        a = "tag", l = this.l, e = null;
        break;
      case 2:
        a = "store", l = this.store, e = null;
        break;
      default:
        n();
        return;
    }
    Zf(r, this, e, a, s, i, l, n);
  }
  return o;
};
Mt.import = function(r, t) {
  if (t)
    switch (re(t) && (t = JSON.parse(t)), r) {
      case "tag":
        this.l = t;
        break;
      case "reg":
        this.m = !1, this.register = t;
        for (let s = 0, i; s < this.h.length; s++)
          i = this.index[this.h[s]], i.register = t, i.m = !1;
        break;
      case "store":
        this.store = t;
        break;
      default:
        r = r.split(".");
        const e = r[0];
        r = r[1], e && r && this.index[e].import(r, t);
    }
};
qf(on.prototype);
var Ev = { encode: tp, F: !1, G: "" };
const Tv = [It("[àáâãäå]"), "a", It("[èéêë]"), "e", It("[ìíîï]"), "i", It("[òóôõöő]"), "o", It("[ùúûüű]"), "u", It("[ýŷÿ]"), "y", It("ñ"), "n", It("[çc]"), "k", It("ß"), "s", It(" & "), " and "];
function tp(r) {
  var t = r = "" + r;
  return t.normalize && (t = t.normalize("NFD").replace(yv, "")), zf.call(this, t.toLowerCase(), !r.normalize && Tv);
}
var Av = { encode: ep, F: !1, G: "strict" };
const Mv = /[^a-z0-9]+/, cd = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function ep(r) {
  r = tp.call(this, r).join(" ");
  const t = [];
  if (r) {
    const e = r.split(Mv), s = e.length;
    for (let i = 0, n, o = 0; i < s; i++)
      if ((r = e[i]) && (!this.filter || !this.filter[r])) {
        n = r[0];
        let a = cd[n] || n, l = a;
        for (let c = 1; c < r.length; c++) {
          n = r[c];
          const h = cd[n] || n;
          h && h !== l && (a += h, l = h);
        }
        t[o++] = a;
      }
  }
  return t;
}
var Pv = { encode: sp, F: !1, G: "" };
const Ov = [It("ae"), "a", It("oe"), "o", It("sh"), "s", It("th"), "t", It("ph"), "f", It("pf"), "f", It("(?![aeo])h(?![aeo])"), "", It("(?!^[aeo])h(?!^[aeo])"), ""];
function sp(r, t) {
  return r && (r = ep.call(this, r).join(" "), 2 < r.length && (r = qn(r, Ov)), t || (1 < r.length && (r = Hf(r)), r && (r = r.split(" ")))), r || [];
}
var Rv = { encode: Iv, F: !1, G: "" };
const Dv = It("(?!\\b)[aeo]");
function Iv(r) {
  return r && (r = sp.call(this, r, !0), 1 < r.length && (r = r.replace(Dv, "")), 1 < r.length && (r = Hf(r)), r && (r = r.split(" "))), r || [];
}
Cr["latin:default"] = wv;
Cr["latin:simple"] = Ev;
Cr["latin:balance"] = Av;
Cr["latin:advanced"] = Pv;
Cr["latin:extra"] = Rv;
const rp = { Index: vr, Document: on, Worker: ti, registerCharset: function(r, t) {
  Cr[r] = t;
}, registerLanguage: function(r, t) {
  Yf[r] = t;
} }, Nv = rp.Document, Fv = rp.Index;
function Lv(r) {
  const t = Intl.Segmenter;
  if (t) {
    const e = new Fv({ charset: "latin:advanced" }), s = e.encode.bind(e), i = /^[\p{Script=Latin}\p{Mark}\d]+$/u, n = new t([r], { granularity: "word" });
    return (o) => {
      const a = [];
      return [...Array.from(n.segment(o)).filter((c) => {
        if (c.isWordLike) {
          if (!i.test(c.segment))
            return !0;
          a.push(c.segment);
        }
        return !1;
      }).map((c) => c.segment), ...s(a.join(" "))];
    };
  }
  return (e) => e.replace(/[\x00-\x7F]/g, "").split("");
}
const Bv = 200;
class $v {
  constructor(t, e = "en-US") {
    this._reindexMap = null, this._reindex = () => {
      if (this._reindexMap) {
        for (const s of this._reindexMap.keys()) {
          const i = this._reindexMap.get(s);
          i && (this._reindexMap.delete(s), this._indexer.add(s, i));
        }
        setTimeout(() => {
          this._reindexMap && requestIdleCallback(this._reindex, { timeout: 1e3 });
        }, Bv);
      }
    }, this._doc = t, this._indexer = new Nv({
      document: {
        id: "id",
        index: ["content", "reference", "space"],
        tag: "tags",
        store: ["space", "content"]
      },
      encode: Lv(e),
      tokenize: "forward",
      context: !0
    }), this._reindexMap = /* @__PURE__ */ new Map(), this._reindex(), t.spaces.observe((s) => {
      s.keysChanged.forEach((i) => {
        const n = this._getPage(i);
        n != null && this._handlePageIndexing(i, n);
      });
    }), jc && window.addEventListener("beforeunload", () => {
      this._reindexMap = null;
    }), fv && process.on("exit", () => {
      this._reindexMap = null;
    });
  }
  search(t) {
    return new Map(this._search(t).flatMap(({ result: e }) => e.map((s) => [s.id, { space: s.doc.space, content: s.doc.content }])));
  }
  _search(t) {
    return typeof t == "object" ? this._indexer.search({
      ...t,
      enrich: !0
    }) : this._indexer.search(t, {
      enrich: !0
    });
  }
  refreshPageIndex(t, e) {
    const s = e.getMap("blocks");
    s.forEach((i, n) => {
      this._refreshIndex(t, n, "add", s.get(n));
    });
  }
  _handlePageIndexing(t, e) {
    if (!e)
      return;
    const s = e.getMap("blocks");
    this.refreshPageIndex(t, e), s.observeDeep((i) => {
      const n = i.flatMap((o) => {
        var a;
        return (((a = o.path) == null ? void 0 : a.length) | 0) > 0 ? [[o.path[0], "update"]] : Array.from(o.changes.keys.entries()).map(([l, { action: c }]) => [l, c]);
      });
      n.length && n.forEach(([o, a]) => {
        this._refreshIndex(t, o, a, s.get(o));
      });
    });
  }
  _refreshIndex(t, e, s, i) {
    var n, o;
    switch (s) {
      case "add":
      case "update": {
        if (i) {
          const a = this._toContent(i.get("prop:title") || i.get("prop:text"));
          a && ((n = this._reindexMap) == null || n.set(e, {
            content: a,
            space: t,
            tags: [t]
          }));
        }
        break;
      }
      case "delete": {
        (o = this._reindexMap) == null || o.delete(e), this._indexer.remove(e);
        break;
      }
    }
  }
  _toContent(t) {
    if (t) {
      if (typeof t == "string")
        return t;
      if (t instanceof Jt)
        return t.toJSON();
    }
  }
  _getPage(t) {
    try {
      return this._doc.spaces.get(t);
    } catch {
      return;
    }
  }
}
const Uv = (r) => class extends r {
  search(t) {
    return this.indexer.search.search(t);
  }
  constructor(t) {
    super(t);
    const e = new uv(this.doc, { slots: this.slots });
    this.indexer = {
      search: new $v(this.doc),
      backlink: new dv(e)
    };
  }
}, zl = Symbol.for("react.test.json");
function Gv(r) {
  return !(typeof r != "object" || r === null);
}
const Vv = [
  "sys:id",
  "sys:version",
  "sys:flavour",
  "sys:children",
  "prop:xywh",
  "prop:cells",
  "prop:elements"
];
function ip(r, t) {
  if (!Gv(r))
    throw new Error("Failed to parse doc record! Invalid data.");
  const e = r[t];
  if (!e)
    throw new Error(`Failed to parse doc record! Node not found! id: ${t}.`);
  const s = e["sys:flavour"], i = e["sys:children"], n = Object.fromEntries(Object.entries(e).filter(([o]) => !Vv.includes(o)));
  return "prop:text" in n && n["prop:text"] instanceof Array && (n["prop:text"] = hd(n["prop:text"])), "prop:title" in n && n["prop:title"] instanceof Array && (n["prop:title"] = hd(n["prop:title"])), "prop:columns" in n && n["prop:columns"] instanceof Array && (n["prop:columns"] = `Array [${n["prop:columns"].length}]`), "prop:views" in n && n["prop:views"] instanceof Array && (n["prop:views"] = `Array [${n["prop:views"].length}]`), {
    $$typeof: zl,
    type: s,
    props: n,
    children: (i == null ? void 0 : i.map((o) => ip(r, o))) ?? []
  };
}
function np(r) {
  const t = {};
  return r.share.forEach((e, s) => {
    e instanceof Wt ? t[s] = ap(e) : t[s] = e.toJSON();
  }), t;
}
function op(r) {
  return r instanceof Je ? np(r) : r instanceof Wt ? ap(r) : r instanceof Jt ? jv(r) : r instanceof Ht ? r.toArray().map((t) => op(t)) : r instanceof zt ? r.toJSON() : r;
}
function ap(r) {
  const t = {};
  return r.forEach((e, s) => {
    t[s] = op(e);
  }), t;
}
function jv(r) {
  return r.toDelta();
}
function hd(r) {
  if (r.length)
    return r.length === 1 && !r[0].attributes ? r[0].insert : {
      // The `Symbol.for('react.fragment')` will render as `<React.Fragment>`
      // so we use a empty string to render it as `<>`.
      // But it will empty children ad `< />`
      // so we return `undefined` directly if not delta text.
      $$typeof: zl,
      // Symbol.for('react.element'),
      type: "",
      // Symbol.for('react.fragment'),
      props: {},
      children: r == null ? void 0 : r.map(({ insert: t, attributes: e }) => ({
        $$typeof: zl,
        type: "text",
        props: {
          // Not place at `children` to avoid the trailing whitespace be trim by formatter.
          insert: t,
          ...e
        }
      }))
    };
}
const zv = (r) => class extends r {
  /** @internal Only for testing */
  exportJSX(t, e = ((s) => (s = this.meta.pageMetas.at(0)) == null ? void 0 : s.id)()) {
    B(e);
    const i = this.doc.spaces.get(e);
    B(i);
    const n = np(i);
    if (!n)
      throw new Error(`Page ${e} doesn't exist`);
    const o = n.blocks;
    if (!t) {
      const a = Object.keys(o).at(0);
      if (!a)
        return null;
      t = a;
    }
    return o[t] ? ip(o, t) : null;
  }
};
class Hv {
}
class Wv {
  constructor(t) {
    this.id = "meta", this._prevPages = /* @__PURE__ */ new Set(), this.pageMetaAdded = new ot(), this.pageMetaRemoved = new ot(), this.pageMetasUpdated = new ot(), this.commonFieldsUpdated = new ot(), this._handleWorkspaceMetaEvents = (e) => {
      e.forEach((s) => {
        const i = (n) => s.target === this._yMap && s.changes.keys.has(n);
        (s.target === this.yPages || s.target.parent === this.yPages || i("pages")) && this._handlePageMetaEvent(), (i("name") || i("avatar")) && this._handleCommonFieldsEvent();
      });
    }, this.doc = t, this._yMap = t.getMap(this.id), this._proxy = t.getMapProxy(this.id), this._yMap.observeDeep(this._handleWorkspaceMetaEvents);
  }
  get yPages() {
    return this._yMap.get("pages");
  }
  get pages() {
    return this._proxy.pages;
  }
  get name() {
    return this._proxy.name;
  }
  get avatar() {
    return this._proxy.avatar;
  }
  get blockVersions() {
    return this._proxy.blockVersions;
  }
  get workspaceVersion() {
    return this._proxy.workspaceVersion;
  }
  get pageVersion() {
    return this._proxy.pageVersion;
  }
  setName(t) {
    this.doc.transact(() => {
      this._proxy.name = t;
    }, this.doc.clientID);
  }
  setAvatar(t) {
    this.doc.transact(() => {
      this._proxy.avatar = t;
    }, this.doc.clientID);
  }
  get pageMetas() {
    return this._proxy.pages ? [...this._proxy.pages] : [];
  }
  getPageMeta(t) {
    return this.pageMetas.find((e) => e.id === t);
  }
  addPageMeta(t, e) {
    this.doc.transact(() => {
      this.pages || (this._proxy.pages = []);
      const s = this.pages;
      e === void 0 ? s.push(t) : s.splice(e, 0, t);
    }, this.doc.clientID);
  }
  /**
   * @internal Use {@link Workspace.setPageMeta} instead
   */
  setPageMeta(t, e) {
    const i = (this.pages ?? []).findIndex((n) => t === n.id);
    this.doc.transact(() => {
      if (this.pages || (this._proxy.pages = []), i === -1)
        return;
      B(this.pages);
      const n = this.pages[i];
      Object.entries(e).forEach(([o, a]) => {
        n[o] = a;
      });
    }, this.doc.clientID);
  }
  removePageMeta(t) {
    B(this.pages);
    const s = this.pageMetas.findIndex((i) => t === i.id);
    s !== -1 && this.doc.transact(() => {
      B(this.pages), this.pages.splice(s, 1);
    }, this.doc.clientID);
  }
  get hasVersion() {
    return !this.blockVersions || !this.pageVersion || !this.workspaceVersion ? !1 : Object.keys(this.blockVersions).length > 0;
  }
  /**
   * @internal Only for page initialization
   */
  writeVersion(t) {
    const { blockVersions: e, pageVersion: s, workspaceVersion: i } = this._proxy;
    if (i ? console.error("Workspace version is already set") : this._proxy.workspaceVersion = tl, s ? console.error("Page version is already set") : this._proxy.pageVersion = el, e)
      console.error("Block versions is already set");
    else {
      const n = {};
      t.schema.flavourSchemaMap.forEach((o, a) => {
        n[a] = o.version;
      }), this._proxy.blockVersions = n;
    }
  }
  updateVersion(t) {
    this._proxy.workspaceVersion = tl, this._proxy.pageVersion = el;
    const e = {};
    t.schema.flavourSchemaMap.forEach((s, i) => {
      e[i] = s.version;
    }), this._proxy.blockVersions = e;
  }
  /**
   * @deprecated Only used for legacy page version validation
   */
  validateVersion(t) {
    const e = this._proxy.workspaceVersion;
    if (!e)
      throw new Error("Invalid workspace data, workspace version is missing. Please make sure the data is valid.");
    if (e < tl)
      throw new Error(`Workspace version ${e} is outdated. Please upgrade the editor.`);
    const s = this._proxy.pageVersion;
    if (!s)
      throw new Error("Invalid workspace data, page version is missing. Please make sure the data is valid.");
    if (s < el)
      throw new Error(`Page version ${s} is outdated. Please upgrade the editor.`);
    const i = { ...this._proxy.blockVersions };
    if (!i)
      throw new Error("Invalid workspace data, versions data is missing. Please make sure the data is valid");
    const n = Object.keys(i);
    if (n.length === 0)
      throw new Error("Invalid workspace data, missing versions field. Please make sure the data is valid.");
    n.forEach((o) => {
      var c;
      const a = i[o], l = (c = t.schema.flavourSchemaMap.get(o)) == null ? void 0 : c.version;
      if (l) {
        if (a > l)
          throw new Error(`Editor doesn't support ${o}@${a}. Please upgrade the editor.`);
        if (a < l)
          throw new Error(`In workspace data, the block flavour ${o}@${a} is outdated. Please downgrade the editor or try data migration.`);
      } else
        throw new Error(`Editor missing ${o} flavour. Please make sure this block flavour is registered.`);
    });
  }
  _handlePageMetaEvent() {
    const { pageMetas: t, _prevPages: e } = this;
    t.forEach((s) => {
      e.has(s.id) || this.pageMetaAdded.emit(s.id);
    }), e.forEach((s) => {
      !t.find((n) => n.id === s) && this.pageMetaRemoved.emit(s);
    }), e.clear(), t.forEach((s) => e.add(s.id)), this.pageMetasUpdated.emit();
  }
  _handleCommonFieldsEvent() {
    this.commonFieldsUpdated.emit();
  }
  get properties() {
    const t = this._proxy.properties;
    return t || {
      tags: {
        options: []
      }
    };
  }
  setProperties(t) {
    this._proxy.properties = t, this.pageMetasUpdated.emit();
  }
}
var Yv = function(r, t, e, s) {
  var i = arguments.length, n = i < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, e) : s, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    n = Reflect.decorate(r, t, e, s);
  else
    for (var a = r.length - 1; a >= 0; a--)
      (o = r[a]) && (n = (i < 3 ? o(n) : i > 3 ? o(t, e, n) : o(t, e)) || n);
  return i > 3 && n && Object.defineProperty(t, e, n), n;
};
let wo = class extends Hv {
  constructor(t) {
    super(), this.slots = {
      pagesUpdated: new ot(),
      pageAdded: new ot(),
      pageRemoved: new ot()
    }, this._schema = t.schema, this._store = new lv(t), this.meta = new Wv(this.doc), this._bindPageMetaEvents();
  }
  get id() {
    return this._store.id;
  }
  get isEmpty() {
    if (this.doc.store.clients.size === 0)
      return !0;
    let t = !1;
    return this.doc.store.clients.size === 1 && Array.from(this.doc.store.clients.values())[0].length <= 2 && (t = !0), t;
  }
  get awarenessStore() {
    return this._store.awarenessStore;
  }
  get providers() {
    return this._store.providers;
  }
  get pages() {
    return this._store.spaces;
  }
  get doc() {
    return this._store.doc;
  }
  get idGenerator() {
    return this._store.idGenerator;
  }
  get schema() {
    return this._schema;
  }
  registerProvider(t, e) {
    return this._store.registerProvider(t, e);
  }
  _hasPage(t) {
    return this.pages.has(t);
  }
  getPage(t) {
    return this.pages.get(t) ?? null;
  }
  _bindPageMetaEvents() {
    this.meta.pageMetaAdded.on((t) => {
      const e = new sv({
        id: t,
        workspace: this,
        doc: this.doc,
        awarenessStore: this.awarenessStore,
        idGenerator: this._store.idGenerator
      });
      this._store.addSpace(e), this.slots.pageAdded.emit(e.id);
    }), this.meta.pageMetasUpdated.on(() => this.slots.pagesUpdated.emit()), this.meta.pageMetaRemoved.on((t) => {
      const e = this.getPage(t);
      this._store.removeSpace(e), e.remove(), this.slots.pageRemoved.emit(t);
    });
  }
  /**
   * By default, only an empty page will be created.
   * If the `init` parameter is passed, a `surface`, `note`, and `paragraph` block
   * will be created in the page simultaneously.
   */
  createPage(t = {}) {
    typeof t == "string" && (t = { id: t }, console.warn("`createPage(pageId)` is deprecated, use `createPage()` directly or `createPage({ id: pageId })` instead"), console.warn("More details see https://github.com/toeverything/blocksuite/pull/2272"));
    const { id: e = this.idGenerator() } = t;
    if (this._hasPage(e))
      throw new Error("page already exists");
    return this.meta.addPageMeta({
      id: e,
      title: "",
      createDate: +/* @__PURE__ */ new Date(),
      tags: []
    }), this.getPage(e);
  }
  /** Update page meta state. Note that this intentionally does not mutate page state. */
  setPageMeta(t, e) {
    this.meta.setPageMeta(t, e);
  }
  removePage(t) {
    const e = this.meta.getPageMeta(t);
    B(e);
    const s = this.getPage(t);
    s && (s.dispose(), this.meta.removePageMeta(t), this._store.removeSpace(s));
  }
};
wo.Y = Nm;
wo = Yv([
  cv,
  Uv,
  zv
], wo);
function qv(r) {
  return r instanceof $c;
}
function Kv() {
  if (process.env.NODE_ENV !== "development" || typeof window > "u")
    return;
  const r = {
    style: "color: #eee; background: #3F6FDB; margin-right: 5px; padding: 2px; border-radius: 4px"
  }, t = {
    style: "color: #eee; background: #DB6D56; margin-right: 5px; padding: 2px; border-radius: 4px"
  }, e = {
    header(s, i = { expand: !1 }) {
      return !qv(s) || i.expand ? null : s.text ? [
        "div",
        {},
        ["span", r, s.constructor.name],
        ["span", t, s.flavour],
        s.text.toString()
      ] : [
        "div",
        {},
        ["span", r, s.constructor.name],
        ["span", t, s.flavour]
      ];
    },
    hasBody() {
      return !0;
    },
    body(s) {
      return ["object", { object: s, config: { expand: !0 } }];
    }
  };
  window.devtoolsFormatters ? window.devtoolsFormatters.push(e) : window.devtoolsFormatters = [e];
}
Kv();
const lp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : (
  // @ts-ignore
  typeof global < "u" ? (
    // @ts-ignore
    global
  ) : {}
), cp = "__ $BLOCKSUITE_STORE$ __";
lp[cp] === !0 && console.error("@blocksuite/store was already imported. This breaks constructor checks and will lead to issues!");
lp[cp] = !0;
class Xv {
  constructor(t) {
    this.Block = t;
  }
  add(t, e) {
    const s = this.Block, i = s.pickModelProps(t, {
      initProps: {
        std: e.std,
        model: t
      }
    });
    new s(i).mount(e), this.renderChildren(t, e);
  }
  remove(t, e) {
    const s = this.getNode(t, e);
    e.std.selection.update((i) => i.filter((n) => n.blockId !== t.id)), s == null || s.destroy();
  }
  update(t, e) {
    const s = this.getNode(t, e);
    if (!s || !s.update) {
      console.warn("Node not implemented update:", s);
      return;
    }
    s == null || s.update(e);
  }
  renderChildren(t, e) {
    const s = e.std.spec;
    t.children.forEach((i) => {
      var a;
      const n = i.flavour, o = (a = s.getView(n)) == null ? void 0 : a.component;
      o && o.add(i, e);
    });
  }
  getNode(t, e) {
    const { stage: s } = e;
    return s.findOne("#" + t.getFullId());
  }
}
const Ao = class Ao extends $c {
  constructor() {
    super();
  }
  getFullId() {
    return this.flavour + ":" + this.id;
  }
  static props() {
    return {
      // title: internal.Text(),
      name: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotation: 0,
      scaleX: 1,
      scaleY: 1
    };
  }
  static defineSchema() {
    return H2({
      flavour: this.flavour,
      props: this.props,
      metadata: this.metadata,
      toModel: () => new this()
    });
  }
};
Ao.flavour = "xpix:base", Ao.metadata = {
  version: 1,
  role: "root"
};
let Hs = Ao;
var Hc = { exports: {} }, Xo = {}, hp = {}, rt = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r._registerNode = r.Konva = r.glob = void 0;
  const t = Math.PI / 180;
  function e() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  r.glob = typeof _h < "u" ? _h : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, r.Konva = {
    _global: r.glob,
    version: "9.3.6",
    isBrowser: e(),
    isUnminified: /param/.test((function(i) {
    }).toString()),
    dblClickWindow: 400,
    getAngle(i) {
      return r.Konva.angleDeg ? i * t : i;
    },
    enableTrace: !1,
    pointerEventsEnabled: !0,
    autoDrawEnabled: !0,
    hitOnDragEnabled: !1,
    capturePointerEventsEnabled: !1,
    _mouseListenClick: !1,
    _touchListenClick: !1,
    _pointerListenClick: !1,
    _mouseInDblClickWindow: !1,
    _touchInDblClickWindow: !1,
    _pointerInDblClickWindow: !1,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: !0,
    showWarnings: !0,
    dragButtons: [0, 1],
    isDragging() {
      return r.Konva.DD.isDragging;
    },
    isTransforming() {
      var i;
      return (i = r.Konva.Transformer) === null || i === void 0 ? void 0 : i.isTransforming();
    },
    isDragReady() {
      return !!r.Konva.DD.node;
    },
    releaseCanvasOnDestroy: !0,
    document: r.glob.document,
    _injectGlobal(i) {
      r.glob.Konva = i;
    }
  };
  const s = (i) => {
    r.Konva[i.prototype.getClassName()] = i;
  };
  r._registerNode = s, r.Konva._injectGlobal(r.Konva);
})(rt);
var Tt = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Util = r.Transform = void 0;
  const t = rt;
  class e {
    constructor(v = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = v && v.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new e(this.m);
    }
    copyInto(v) {
      v.m[0] = this.m[0], v.m[1] = this.m[1], v.m[2] = this.m[2], v.m[3] = this.m[3], v.m[4] = this.m[4], v.m[5] = this.m[5];
    }
    point(v) {
      var b = this.m;
      return {
        x: b[0] * v.x + b[2] * v.y + b[4],
        y: b[1] * v.x + b[3] * v.y + b[5]
      };
    }
    translate(v, b) {
      return this.m[4] += this.m[0] * v + this.m[2] * b, this.m[5] += this.m[1] * v + this.m[3] * b, this;
    }
    scale(v, b) {
      return this.m[0] *= v, this.m[1] *= v, this.m[2] *= b, this.m[3] *= b, this;
    }
    rotate(v) {
      var b = Math.cos(v), w = Math.sin(v), x = this.m[0] * b + this.m[2] * w, S = this.m[1] * b + this.m[3] * w, M = this.m[0] * -w + this.m[2] * b, E = this.m[1] * -w + this.m[3] * b;
      return this.m[0] = x, this.m[1] = S, this.m[2] = M, this.m[3] = E, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(v, b) {
      var w = this.m[0] + this.m[2] * b, x = this.m[1] + this.m[3] * b, S = this.m[2] + this.m[0] * v, M = this.m[3] + this.m[1] * v;
      return this.m[0] = w, this.m[1] = x, this.m[2] = S, this.m[3] = M, this;
    }
    multiply(v) {
      var b = this.m[0] * v.m[0] + this.m[2] * v.m[1], w = this.m[1] * v.m[0] + this.m[3] * v.m[1], x = this.m[0] * v.m[2] + this.m[2] * v.m[3], S = this.m[1] * v.m[2] + this.m[3] * v.m[3], M = this.m[0] * v.m[4] + this.m[2] * v.m[5] + this.m[4], E = this.m[1] * v.m[4] + this.m[3] * v.m[5] + this.m[5];
      return this.m[0] = b, this.m[1] = w, this.m[2] = x, this.m[3] = S, this.m[4] = M, this.m[5] = E, this;
    }
    invert() {
      var v = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), b = this.m[3] * v, w = -this.m[1] * v, x = -this.m[2] * v, S = this.m[0] * v, M = v * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), E = v * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = b, this.m[1] = w, this.m[2] = x, this.m[3] = S, this.m[4] = M, this.m[5] = E, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      var v = this.m[0], b = this.m[1], w = this.m[2], x = this.m[3], S = this.m[4], M = this.m[5], E = v * x - b * w;
      let T = {
        x: S,
        y: M,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (v != 0 || b != 0) {
        var I = Math.sqrt(v * v + b * b);
        T.rotation = b > 0 ? Math.acos(v / I) : -Math.acos(v / I), T.scaleX = I, T.scaleY = E / I, T.skewX = (v * w + b * x) / E, T.skewY = 0;
      } else if (w != 0 || x != 0) {
        var D = Math.sqrt(w * w + x * x);
        T.rotation = Math.PI / 2 - (x > 0 ? Math.acos(-w / D) : -Math.acos(w / D)), T.scaleX = E / D, T.scaleY = D, T.skewX = 0, T.skewY = (v * w + b * x) / E;
      }
      return T.rotation = r.Util._getRotation(T.rotation), T;
    }
  }
  r.Transform = e;
  var s = "[object Array]", i = "[object Number]", n = "[object String]", o = "[object Boolean]", a = Math.PI / 180, l = 180 / Math.PI, c = "#", h = "", d = "0", u = "Konva warning: ", p = "Konva error: ", f = "rgb(", m = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  }, _ = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, y = [];
  const k = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(g) {
    setTimeout(g, 60);
  };
  r.Util = {
    _isElement(g) {
      return !!(g && g.nodeType == 1);
    },
    _isFunction(g) {
      return !!(g && g.constructor && g.call && g.apply);
    },
    _isPlainObject(g) {
      return !!g && g.constructor === Object;
    },
    _isArray(g) {
      return Object.prototype.toString.call(g) === s;
    },
    _isNumber(g) {
      return Object.prototype.toString.call(g) === i && !isNaN(g) && isFinite(g);
    },
    _isString(g) {
      return Object.prototype.toString.call(g) === n;
    },
    _isBoolean(g) {
      return Object.prototype.toString.call(g) === o;
    },
    isObject(g) {
      return g instanceof Object;
    },
    isValidSelector(g) {
      if (typeof g != "string")
        return !1;
      var v = g[0];
      return v === "#" || v === "." || v === v.toUpperCase();
    },
    _sign(g) {
      return g === 0 || g > 0 ? 1 : -1;
    },
    requestAnimFrame(g) {
      y.push(g), y.length === 1 && k(function() {
        const v = y;
        y = [], v.forEach(function(b) {
          b();
        });
      });
    },
    createCanvasElement() {
      var g = document.createElement("canvas");
      try {
        g.style = g.style || {};
      } catch {
      }
      return g;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(g) {
      for (; g = g.parentNode; )
        if (g == document)
          return !0;
      return !1;
    },
    _urlToImage(g, v) {
      var b = r.Util.createImageElement();
      b.onload = function() {
        v(b);
      }, b.src = g;
    },
    _rgbToHex(g, v, b) {
      return ((1 << 24) + (g << 16) + (v << 8) + b).toString(16).slice(1);
    },
    _hexToRgb(g) {
      g = g.replace(c, h);
      var v = parseInt(g, 16);
      return {
        r: v >> 16 & 255,
        g: v >> 8 & 255,
        b: v & 255
      };
    },
    getRandomColor() {
      for (var g = (Math.random() * 16777215 << 0).toString(16); g.length < 6; )
        g = d + g;
      return c + g;
    },
    getRGB(g) {
      var v;
      return g in m ? (v = m[g], {
        r: v[0],
        g: v[1],
        b: v[2]
      }) : g[0] === c ? this._hexToRgb(g.substring(1)) : g.substr(0, 4) === f ? (v = _.exec(g.replace(/ /g, "")), {
        r: parseInt(v[1], 10),
        g: parseInt(v[2], 10),
        b: parseInt(v[3], 10)
      }) : {
        r: 0,
        g: 0,
        b: 0
      };
    },
    colorToRGBA(g) {
      return g = g || "black", r.Util._namedColorToRBA(g) || r.Util._hex3ColorToRGBA(g) || r.Util._hex4ColorToRGBA(g) || r.Util._hex6ColorToRGBA(g) || r.Util._hex8ColorToRGBA(g) || r.Util._rgbColorToRGBA(g) || r.Util._rgbaColorToRGBA(g) || r.Util._hslColorToRGBA(g);
    },
    _namedColorToRBA(g) {
      var v = m[g.toLowerCase()];
      return v ? {
        r: v[0],
        g: v[1],
        b: v[2],
        a: 1
      } : null;
    },
    _rgbColorToRGBA(g) {
      if (g.indexOf("rgb(") === 0) {
        g = g.match(/rgb\(([^)]+)\)/)[1];
        var v = g.split(/ *, */).map(Number);
        return {
          r: v[0],
          g: v[1],
          b: v[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(g) {
      if (g.indexOf("rgba(") === 0) {
        g = g.match(/rgba\(([^)]+)\)/)[1];
        var v = g.split(/ *, */).map((b, w) => b.slice(-1) === "%" ? w === 3 ? parseInt(b) / 100 : parseInt(b) / 100 * 255 : Number(b));
        return {
          r: v[0],
          g: v[1],
          b: v[2],
          a: v[3]
        };
      }
    },
    _hex8ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 9)
        return {
          r: parseInt(g.slice(1, 3), 16),
          g: parseInt(g.slice(3, 5), 16),
          b: parseInt(g.slice(5, 7), 16),
          a: parseInt(g.slice(7, 9), 16) / 255
        };
    },
    _hex6ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 7)
        return {
          r: parseInt(g.slice(1, 3), 16),
          g: parseInt(g.slice(3, 5), 16),
          b: parseInt(g.slice(5, 7), 16),
          a: 1
        };
    },
    _hex4ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 5)
        return {
          r: parseInt(g[1] + g[1], 16),
          g: parseInt(g[2] + g[2], 16),
          b: parseInt(g[3] + g[3], 16),
          a: parseInt(g[4] + g[4], 16) / 255
        };
    },
    _hex3ColorToRGBA(g) {
      if (g[0] === "#" && g.length === 4)
        return {
          r: parseInt(g[1] + g[1], 16),
          g: parseInt(g[2] + g[2], 16),
          b: parseInt(g[3] + g[3], 16),
          a: 1
        };
    },
    _hslColorToRGBA(g) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(g)) {
        const [v, ...b] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(g), w = Number(b[0]) / 360, x = Number(b[1]) / 100, S = Number(b[2]) / 100;
        let M, E, T;
        if (x === 0)
          return T = S * 255, {
            r: Math.round(T),
            g: Math.round(T),
            b: Math.round(T),
            a: 1
          };
        S < 0.5 ? M = S * (1 + x) : M = S + x - S * x;
        const I = 2 * S - M, D = [0, 0, 0];
        for (let j = 0; j < 3; j++)
          E = w + 1 / 3 * -(j - 1), E < 0 && E++, E > 1 && E--, 6 * E < 1 ? T = I + (M - I) * 6 * E : 2 * E < 1 ? T = M : 3 * E < 2 ? T = I + (M - I) * (2 / 3 - E) * 6 : T = I, D[j] = T * 255;
        return {
          r: Math.round(D[0]),
          g: Math.round(D[1]),
          b: Math.round(D[2]),
          a: 1
        };
      }
    },
    haveIntersection(g, v) {
      return !(v.x > g.x + g.width || v.x + v.width < g.x || v.y > g.y + g.height || v.y + v.height < g.y);
    },
    cloneObject(g) {
      var v = {};
      for (var b in g)
        this._isPlainObject(g[b]) ? v[b] = this.cloneObject(g[b]) : this._isArray(g[b]) ? v[b] = this.cloneArray(g[b]) : v[b] = g[b];
      return v;
    },
    cloneArray(g) {
      return g.slice(0);
    },
    degToRad(g) {
      return g * a;
    },
    radToDeg(g) {
      return g * l;
    },
    _degToRad(g) {
      return r.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), r.Util.degToRad(g);
    },
    _radToDeg(g) {
      return r.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), r.Util.radToDeg(g);
    },
    _getRotation(g) {
      return t.Konva.angleDeg ? r.Util.radToDeg(g) : g;
    },
    _capitalize(g) {
      return g.charAt(0).toUpperCase() + g.slice(1);
    },
    throw(g) {
      throw new Error(p + g);
    },
    error(g) {
      console.error(p + g);
    },
    warn(g) {
      t.Konva.showWarnings && console.warn(u + g);
    },
    each(g, v) {
      for (var b in g)
        v(b, g[b]);
    },
    _inRange(g, v, b) {
      return v <= g && g < b;
    },
    _getProjectionToSegment(g, v, b, w, x, S) {
      var M, E, T, I = (g - b) * (g - b) + (v - w) * (v - w);
      if (I == 0)
        M = g, E = v, T = (x - b) * (x - b) + (S - w) * (S - w);
      else {
        var D = ((x - g) * (b - g) + (S - v) * (w - v)) / I;
        D < 0 ? (M = g, E = v, T = (g - x) * (g - x) + (v - S) * (v - S)) : D > 1 ? (M = b, E = w, T = (b - x) * (b - x) + (w - S) * (w - S)) : (M = g + D * (b - g), E = v + D * (w - v), T = (M - x) * (M - x) + (E - S) * (E - S));
      }
      return [M, E, T];
    },
    _getProjectionToLine(g, v, b) {
      var w = r.Util.cloneObject(g), x = Number.MAX_VALUE;
      return v.forEach(function(S, M) {
        if (!(!b && M === v.length - 1)) {
          var E = v[(M + 1) % v.length], T = r.Util._getProjectionToSegment(S.x, S.y, E.x, E.y, g.x, g.y), I = T[0], D = T[1], j = T[2];
          j < x && (w.x = I, w.y = D, x = j);
        }
      }), w;
    },
    _prepareArrayForTween(g, v, b) {
      var w, x = [], S = [];
      if (g.length > v.length) {
        var M = v;
        v = g, g = M;
      }
      for (w = 0; w < g.length; w += 2)
        x.push({
          x: g[w],
          y: g[w + 1]
        });
      for (w = 0; w < v.length; w += 2)
        S.push({
          x: v[w],
          y: v[w + 1]
        });
      var E = [];
      return S.forEach(function(T) {
        var I = r.Util._getProjectionToLine(T, x, b);
        E.push(I.x), E.push(I.y);
      }), E;
    },
    _prepareToStringify(g) {
      var v;
      g.visitedByCircularReferenceRemoval = !0;
      for (var b in g)
        if (g.hasOwnProperty(b) && g[b] && typeof g[b] == "object") {
          if (v = Object.getOwnPropertyDescriptor(g, b), g[b].visitedByCircularReferenceRemoval || r.Util._isElement(g[b]))
            if (v.configurable)
              delete g[b];
            else
              return null;
          else if (r.Util._prepareToStringify(g[b]) === null)
            if (v.configurable)
              delete g[b];
            else
              return null;
        }
      return delete g.visitedByCircularReferenceRemoval, g;
    },
    _assign(g, v) {
      for (var b in v)
        g[b] = v[b];
      return g;
    },
    _getFirstPointerId(g) {
      return g.touches ? g.changedTouches[0].identifier : g.pointerId || 999;
    },
    releaseCanvas(...g) {
      t.Konva.releaseCanvasOnDestroy && g.forEach((v) => {
        v.width = 0, v.height = 0;
      });
    },
    drawRoundedRectPath(g, v, b, w) {
      let x = 0, S = 0, M = 0, E = 0;
      typeof w == "number" ? x = S = M = E = Math.min(w, v / 2, b / 2) : (x = Math.min(w[0] || 0, v / 2, b / 2), S = Math.min(w[1] || 0, v / 2, b / 2), E = Math.min(w[2] || 0, v / 2, b / 2), M = Math.min(w[3] || 0, v / 2, b / 2)), g.moveTo(x, 0), g.lineTo(v - S, 0), g.arc(v - S, S, S, Math.PI * 3 / 2, 0, !1), g.lineTo(v, b - E), g.arc(v - E, b - E, E, 0, Math.PI / 2, !1), g.lineTo(M, b), g.arc(M, b - M, M, Math.PI / 2, Math.PI, !1), g.lineTo(0, x), g.arc(x, x, x, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(Tt);
var xt = {}, et = {}, U = {};
Object.defineProperty(U, "__esModule", { value: !0 });
U.getComponentValidator = U.getBooleanValidator = U.getNumberArrayValidator = U.getFunctionValidator = U.getStringOrGradientValidator = U.getStringValidator = U.getNumberOrAutoValidator = U.getNumberOrArrayOfNumbersValidator = U.getNumberValidator = U.alphaComponent = U.RGBComponent = void 0;
const ys = rt, At = Tt;
function ws(r) {
  return At.Util._isString(r) ? '"' + r + '"' : Object.prototype.toString.call(r) === "[object Number]" || At.Util._isBoolean(r) ? r : Object.prototype.toString.call(r);
}
function Zv(r) {
  return r > 255 ? 255 : r < 0 ? 0 : Math.round(r);
}
U.RGBComponent = Zv;
function Jv(r) {
  return r > 1 ? 1 : r < 1e-4 ? 1e-4 : r;
}
U.alphaComponent = Jv;
function Qv() {
  if (ys.Konva.isUnminified)
    return function(r, t) {
      return At.Util._isNumber(r) || At.Util.warn(ws(r) + ' is a not valid value for "' + t + '" attribute. The value should be a number.'), r;
    };
}
U.getNumberValidator = Qv;
function ty(r) {
  if (ys.Konva.isUnminified)
    return function(t, e) {
      let s = At.Util._isNumber(t), i = At.Util._isArray(t) && t.length == r;
      return !s && !i && At.Util.warn(ws(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or Array<number>(' + r + ")"), t;
    };
}
U.getNumberOrArrayOfNumbersValidator = ty;
function ey() {
  if (ys.Konva.isUnminified)
    return function(r, t) {
      var e = At.Util._isNumber(r), s = r === "auto";
      return e || s || At.Util.warn(ws(r) + ' is a not valid value for "' + t + '" attribute. The value should be a number or "auto".'), r;
    };
}
U.getNumberOrAutoValidator = ey;
function sy() {
  if (ys.Konva.isUnminified)
    return function(r, t) {
      return At.Util._isString(r) || At.Util.warn(ws(r) + ' is a not valid value for "' + t + '" attribute. The value should be a string.'), r;
    };
}
U.getStringValidator = sy;
function ry() {
  if (ys.Konva.isUnminified)
    return function(r, t) {
      const e = At.Util._isString(r), s = Object.prototype.toString.call(r) === "[object CanvasGradient]" || r && r.addColorStop;
      return e || s || At.Util.warn(ws(r) + ' is a not valid value for "' + t + '" attribute. The value should be a string or a native gradient.'), r;
    };
}
U.getStringOrGradientValidator = ry;
function iy() {
  if (ys.Konva.isUnminified)
    return function(r, t) {
      return At.Util._isFunction(r) || At.Util.warn(ws(r) + ' is a not valid value for "' + t + '" attribute. The value should be a function.'), r;
    };
}
U.getFunctionValidator = iy;
function ny() {
  if (ys.Konva.isUnminified)
    return function(r, t) {
      const e = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return e && r instanceof e || (At.Util._isArray(r) ? r.forEach(function(s) {
        At.Util._isNumber(s) || At.Util.warn('"' + t + '" attribute has non numeric element ' + s + ". Make sure that all elements are numbers.");
      }) : At.Util.warn(ws(r) + ' is a not valid value for "' + t + '" attribute. The value should be a array of numbers.')), r;
    };
}
U.getNumberArrayValidator = ny;
function oy() {
  if (ys.Konva.isUnminified)
    return function(r, t) {
      var e = r === !0 || r === !1;
      return e || At.Util.warn(ws(r) + ' is a not valid value for "' + t + '" attribute. The value should be a boolean.'), r;
    };
}
U.getBooleanValidator = oy;
function ay(r) {
  if (ys.Konva.isUnminified)
    return function(t, e) {
      return t == null || At.Util.isObject(t) || At.Util.warn(ws(t) + ' is a not valid value for "' + e + '" attribute. The value should be an object with properties ' + r), t;
    };
}
U.getComponentValidator = ay;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Factory = void 0;
  const t = Tt, e = U;
  var s = "get", i = "set";
  r.Factory = {
    addGetterSetter(n, o, a, l, c) {
      r.Factory.addGetter(n, o, a), r.Factory.addSetter(n, o, l, c), r.Factory.addOverloadedGetterSetter(n, o);
    },
    addGetter(n, o, a) {
      var l = s + t.Util._capitalize(o);
      n.prototype[l] = n.prototype[l] || function() {
        var c = this.attrs[o];
        return c === void 0 ? a : c;
      };
    },
    addSetter(n, o, a, l) {
      var c = i + t.Util._capitalize(o);
      n.prototype[c] || r.Factory.overWriteSetter(n, o, a, l);
    },
    overWriteSetter(n, o, a, l) {
      var c = i + t.Util._capitalize(o);
      n.prototype[c] = function(h) {
        return a && h !== void 0 && h !== null && (h = a.call(this, h, o)), this._setAttr(o, h), l && l.call(this), this;
      };
    },
    addComponentsGetterSetter(n, o, a, l, c) {
      var h = a.length, d = t.Util._capitalize, u = s + d(o), p = i + d(o), f, m;
      n.prototype[u] = function() {
        var y = {};
        for (f = 0; f < h; f++)
          m = a[f], y[m] = this.getAttr(o + d(m));
        return y;
      };
      var _ = (0, e.getComponentValidator)(a);
      n.prototype[p] = function(y) {
        var k = this.attrs[o], g;
        l && (y = l.call(this, y)), _ && _.call(this, y, o);
        for (g in y)
          y.hasOwnProperty(g) && this._setAttr(o + d(g), y[g]);
        return y || a.forEach((v) => {
          this._setAttr(o + d(v), void 0);
        }), this._fireChangeEvent(o, k, y), c && c.call(this), this;
      }, r.Factory.addOverloadedGetterSetter(n, o);
    },
    addOverloadedGetterSetter(n, o) {
      var a = t.Util._capitalize(o), l = i + a, c = s + a;
      n.prototype[o] = function() {
        return arguments.length ? (this[l](arguments[0]), this) : this[c]();
      };
    },
    addDeprecatedGetterSetter(n, o, a, l) {
      t.Util.error("Adding deprecated " + o);
      var c = s + t.Util._capitalize(o), h = o + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      n.prototype[c] = function() {
        t.Util.error(h);
        var d = this.attrs[o];
        return d === void 0 ? a : d;
      }, r.Factory.addSetter(n, o, l, function() {
        t.Util.error(h);
      }), r.Factory.addOverloadedGetterSetter(n, o);
    },
    backCompat(n, o) {
      t.Util.each(o, function(a, l) {
        var c = n.prototype[l], h = s + t.Util._capitalize(a), d = i + t.Util._capitalize(a);
        function u() {
          c.apply(this, arguments), t.Util.error('"' + a + '" method is deprecated and will be removed soon. Use ""' + l + '" instead.');
        }
        n.prototype[a] = u, n.prototype[h] = u, n.prototype[d] = u;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(et);
var $e = {}, cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.HitContext = cs.SceneContext = cs.Context = void 0;
const dp = Tt, ly = rt;
function cy(r) {
  var t = [], e = r.length, s = dp.Util, i, n;
  for (i = 0; i < e; i++)
    n = r[i], s._isNumber(n) ? n = Math.round(n * 1e3) / 1e3 : s._isString(n) || (n = n + ""), t.push(n);
  return t;
}
var dd = ",", hy = "(", dy = ")", uy = "([", fy = "])", py = ";", gy = "()", my = "=", ud = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "roundRect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], _y = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "letterSpacing",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "direction",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const vy = 100;
class Zo {
  constructor(t) {
    this.canvas = t, ly.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(t) {
    t.fillEnabled() && this._fill(t);
  }
  _fill(t) {
  }
  strokeShape(t) {
    t.hasStroke() && this._stroke(t);
  }
  _stroke(t) {
  }
  fillStrokeShape(t) {
    t.attrs.fillAfterStrokeEnabled ? (this.strokeShape(t), this.fillShape(t)) : (this.fillShape(t), this.strokeShape(t));
  }
  getTrace(t, e) {
    var s = this.traceArr, i = s.length, n = "", o, a, l, c;
    for (o = 0; o < i; o++)
      a = s[o], l = a.method, l ? (c = a.args, n += l, t ? n += gy : dp.Util._isArray(c[0]) ? n += uy + c.join(dd) + fy : (e && (c = c.map((h) => typeof h == "number" ? Math.floor(h) : h)), n += hy + c.join(dd) + dy)) : (n += a.property, t || (n += my + a.val)), n += py;
    return n;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    var e = this.traceArr, s;
    e.push(t), s = e.length, s >= vy && e.shift();
  }
  reset() {
    var t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    var e = this.getCanvas();
    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio);
  }
  _applyLineCap(t) {
    const e = t.attrs.lineCap;
    e && this.setAttr("lineCap", e);
  }
  _applyOpacity(t) {
    var e = t.getAbsoluteOpacity();
    e !== 1 && this.setAttr("globalAlpha", e);
  }
  _applyLineJoin(t) {
    const e = t.attrs.lineJoin;
    e && this.setAttr("lineJoin", e);
  }
  setAttr(t, e) {
    this._context[t] = e;
  }
  arc(t, e, s, i, n, o) {
    this._context.arc(t, e, s, i, n, o);
  }
  arcTo(t, e, s, i, n) {
    this._context.arcTo(t, e, s, i, n);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, e, s, i, n, o) {
    this._context.bezierCurveTo(t, e, s, i, n, o);
  }
  clearRect(t, e, s, i) {
    this._context.clearRect(t, e, s, i);
  }
  clip(...t) {
    this._context.clip.apply(this._context, t);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, e) {
    var s = arguments;
    if (s.length === 2)
      return this._context.createImageData(t, e);
    if (s.length === 1)
      return this._context.createImageData(t);
  }
  createLinearGradient(t, e, s, i) {
    return this._context.createLinearGradient(t, e, s, i);
  }
  createPattern(t, e) {
    return this._context.createPattern(t, e);
  }
  createRadialGradient(t, e, s, i, n, o) {
    return this._context.createRadialGradient(t, e, s, i, n, o);
  }
  drawImage(t, e, s, i, n, o, a, l, c) {
    var h = arguments, d = this._context;
    h.length === 3 ? d.drawImage(t, e, s) : h.length === 5 ? d.drawImage(t, e, s, i, n) : h.length === 9 && d.drawImage(t, e, s, i, n, o, a, l, c);
  }
  ellipse(t, e, s, i, n, o, a, l) {
    this._context.ellipse(t, e, s, i, n, o, a, l);
  }
  isPointInPath(t, e, s, i) {
    return s ? this._context.isPointInPath(s, t, e, i) : this._context.isPointInPath(t, e, i);
  }
  fill(...t) {
    this._context.fill.apply(this._context, t);
  }
  fillRect(t, e, s, i) {
    this._context.fillRect(t, e, s, i);
  }
  strokeRect(t, e, s, i) {
    this._context.strokeRect(t, e, s, i);
  }
  fillText(t, e, s, i) {
    i ? this._context.fillText(t, e, s, i) : this._context.fillText(t, e, s);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, e, s, i) {
    return this._context.getImageData(t, e, s, i);
  }
  lineTo(t, e) {
    this._context.lineTo(t, e);
  }
  moveTo(t, e) {
    this._context.moveTo(t, e);
  }
  rect(t, e, s, i) {
    this._context.rect(t, e, s, i);
  }
  roundRect(t, e, s, i, n) {
    this._context.roundRect(t, e, s, i, n);
  }
  putImageData(t, e, s) {
    this._context.putImageData(t, e, s);
  }
  quadraticCurveTo(t, e, s, i) {
    this._context.quadraticCurveTo(t, e, s, i);
  }
  restore() {
    this._context.restore();
  }
  rotate(t) {
    this._context.rotate(t);
  }
  save() {
    this._context.save();
  }
  scale(t, e) {
    this._context.scale(t, e);
  }
  setLineDash(t) {
    this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, e, s, i, n, o) {
    this._context.setTransform(t, e, s, i, n, o);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, e, s, i) {
    this._context.strokeText(t, e, s, i);
  }
  transform(t, e, s, i, n, o) {
    this._context.transform(t, e, s, i, n, o);
  }
  translate(t, e) {
    this._context.translate(t, e);
  }
  _enableTrace() {
    var t = this, e = ud.length, s = this.setAttr, i, n, o = function(a) {
      var l = t[a], c;
      t[a] = function() {
        return n = cy(Array.prototype.slice.call(arguments, 0)), c = l.apply(t, arguments), t._trace({
          method: a,
          args: n
        }), c;
      };
    };
    for (i = 0; i < e; i++)
      o(ud[i]);
    t.setAttr = function() {
      s.apply(t, arguments);
      var a = arguments[0], l = arguments[1];
      (a === "shadowOffsetX" || a === "shadowOffsetY" || a === "shadowBlur") && (l = l / this.canvas.getPixelRatio()), t._trace({
        property: a,
        val: l
      });
    };
  }
  _applyGlobalCompositeOperation(t) {
    const e = t.attrs.globalCompositeOperation;
    var s = !e || e === "source-over";
    s || this.setAttr("globalCompositeOperation", e);
  }
}
cs.Context = Zo;
_y.forEach(function(r) {
  Object.defineProperty(Zo.prototype, r, {
    get() {
      return this._context[r];
    },
    set(t) {
      this._context[r] = t;
    }
  });
});
class yy extends Zo {
  constructor(t, { willReadFrequently: e = !1 } = {}) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: e
    });
  }
  _fillColor(t) {
    var e = t.fill();
    this.setAttr("fillStyle", e), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    var e = t._getLinearGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    const e = t._getRadialGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fill(t) {
    const e = t.fill(), s = t.getFillPriority();
    if (e && s === "color") {
      this._fillColor(t);
      return;
    }
    const i = t.getFillPatternImage();
    if (i && s === "pattern") {
      this._fillPattern(t);
      return;
    }
    const n = t.getFillLinearGradientColorStops();
    if (n && s === "linear-gradient") {
      this._fillLinearGradient(t);
      return;
    }
    const o = t.getFillRadialGradientColorStops();
    if (o && s === "radial-gradient") {
      this._fillRadialGradient(t);
      return;
    }
    e ? this._fillColor(t) : i ? this._fillPattern(t) : n ? this._fillLinearGradient(t) : o && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    const e = t.getStrokeLinearGradientStartPoint(), s = t.getStrokeLinearGradientEndPoint(), i = t.getStrokeLinearGradientColorStops(), n = this.createLinearGradient(e.x, e.y, s.x, s.y);
    if (i) {
      for (var o = 0; o < i.length; o += 2)
        n.addColorStop(i[o], i[o + 1]);
      this.setAttr("strokeStyle", n);
    }
  }
  _stroke(t) {
    var e = t.dash(), s = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!s) {
        this.save();
        var i = this.getCanvas().getPixelRatio();
        this.setTransform(i, 0, 0, i, 0, 0);
      }
      this._applyLineCap(t), e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var n = t.getStrokeLinearGradientColorStops();
      n ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), s || this.restore();
    }
  }
  _applyShadow(t) {
    var e, s, i, n = (e = t.getShadowRGBA()) !== null && e !== void 0 ? e : "black", o = (s = t.getShadowBlur()) !== null && s !== void 0 ? s : 5, a = (i = t.getShadowOffset()) !== null && i !== void 0 ? i : {
      x: 0,
      y: 0
    }, l = t.getAbsoluteScale(), c = this.canvas.getPixelRatio(), h = l.x * c, d = l.y * c;
    this.setAttr("shadowColor", n), this.setAttr("shadowBlur", o * Math.min(Math.abs(h), Math.abs(d))), this.setAttr("shadowOffsetX", a.x * h), this.setAttr("shadowOffsetY", a.y * d);
  }
}
cs.SceneContext = yy;
class wy extends Zo {
  constructor(t) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(t) {
    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore();
  }
  strokeShape(t) {
    t.hasHitStroke() && this._stroke(t);
  }
  _stroke(t) {
    if (t.hasHitStroke()) {
      const n = t.getStrokeScaleEnabled();
      if (!n) {
        this.save();
        var e = this.getCanvas().getPixelRatio();
        this.setTransform(e, 0, 0, e, 0, 0);
      }
      this._applyLineCap(t);
      var s = t.hitStrokeWidth(), i = s === "auto" ? t.strokeWidth() : s;
      this.setAttr("lineWidth", i), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), n || this.restore();
    }
  }
}
cs.HitContext = wy;
Object.defineProperty($e, "__esModule", { value: !0 });
$e.HitCanvas = $e.SceneCanvas = $e.Canvas = void 0;
const bo = Tt, up = cs, fp = rt, by = et, Sy = U;
var In;
function ky() {
  if (In)
    return In;
  var r = bo.Util.createCanvasElement(), t = r.getContext("2d");
  return In = function() {
    var e = fp.Konva._global.devicePixelRatio || 1, s = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return e / s;
  }(), bo.Util.releaseCanvas(r), In;
}
class Jo {
  constructor(t) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    var e = t || {}, s = e.pixelRatio || fp.Konva.pixelRatio || ky();
    this.pixelRatio = s, this._canvas = bo.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    var e = this.pixelRatio;
    this.pixelRatio = t, this.setSize(this.getWidth() / e, this.getHeight() / e);
  }
  setWidth(t) {
    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
    var e = this.pixelRatio, s = this.getContext()._context;
    s.scale(e, e);
  }
  setHeight(t) {
    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
    var e = this.pixelRatio, s = this.getContext()._context;
    s.scale(e, e);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, e) {
    this.setWidth(t || 0), this.setHeight(e || 0);
  }
  toDataURL(t, e) {
    try {
      return this._canvas.toDataURL(t, e);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (i) {
        return bo.Util.error("Unable to get data URL. " + i.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
$e.Canvas = Jo;
by.Factory.addGetterSetter(Jo, "pixelRatio", void 0, (0, Sy.getNumberValidator)());
class xy extends Jo {
  constructor(t = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(t), this.context = new up.SceneContext(this, {
      willReadFrequently: t.willReadFrequently
    }), this.setSize(t.width, t.height);
  }
}
$e.SceneCanvas = xy;
class Cy extends Jo {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.hitCanvas = !0, this.context = new up.HitContext(this), this.setSize(t.width, t.height);
  }
}
$e.HitCanvas = Cy;
var Qo = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.DD = void 0;
  const t = rt, e = Tt;
  r.DD = {
    get isDragging() {
      var s = !1;
      return r.DD._dragElements.forEach((i) => {
        i.dragStatus === "dragging" && (s = !0);
      }), s;
    },
    justDragged: !1,
    get node() {
      var s;
      return r.DD._dragElements.forEach((i) => {
        s = i.node;
      }), s;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(s) {
      const i = [];
      r.DD._dragElements.forEach((n, o) => {
        const { node: a } = n, l = a.getStage();
        l.setPointersPositions(s), n.pointerId === void 0 && (n.pointerId = e.Util._getFirstPointerId(s));
        const c = l._changedPointerPositions.find((u) => u.id === n.pointerId);
        if (c) {
          if (n.dragStatus !== "dragging") {
            var h = a.dragDistance(), d = Math.max(Math.abs(c.x - n.startPointerPos.x), Math.abs(c.y - n.startPointerPos.y));
            if (d < h || (a.startDrag({ evt: s }), !a.isDragging()))
              return;
          }
          a._setDragPosition(s, n), i.push(a);
        }
      }), i.forEach((n) => {
        n.fire("dragmove", {
          type: "dragmove",
          target: n,
          evt: s
        }, !0);
      });
    },
    _endDragBefore(s) {
      const i = [];
      r.DD._dragElements.forEach((n) => {
        const { node: o } = n, a = o.getStage();
        if (s && a.setPointersPositions(s), !a._changedPointerPositions.find((h) => h.id === n.pointerId))
          return;
        (n.dragStatus === "dragging" || n.dragStatus === "stopped") && (r.DD.justDragged = !0, t.Konva._mouseListenClick = !1, t.Konva._touchListenClick = !1, t.Konva._pointerListenClick = !1, n.dragStatus = "stopped");
        const c = n.node.getLayer() || n.node instanceof t.Konva.Stage && n.node;
        c && i.indexOf(c) === -1 && i.push(c);
      }), i.forEach((n) => {
        n.draw();
      });
    },
    _endDragAfter(s) {
      r.DD._dragElements.forEach((i, n) => {
        i.dragStatus === "stopped" && i.node.fire("dragend", {
          type: "dragend",
          target: i.node,
          evt: s
        }, !0), i.dragStatus !== "dragging" && r.DD._dragElements.delete(n);
      });
    }
  }, t.Konva.isBrowser && (window.addEventListener("mouseup", r.DD._endDragBefore, !0), window.addEventListener("touchend", r.DD._endDragBefore, !0), window.addEventListener("mousemove", r.DD._drag), window.addEventListener("touchmove", r.DD._drag), window.addEventListener("mouseup", r.DD._endDragAfter, !1), window.addEventListener("touchend", r.DD._endDragAfter, !1));
})(Qo);
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.Node = void 0;
const nt = Tt, Sn = et, ki = $e, Ts = rt, xe = Qo, Lt = U;
var Kn = "absoluteOpacity", Nn = "allEventListeners", ns = "absoluteTransform", fd = "absoluteScale", er = "canvas", Ey = "Change", Ty = "children", Ay = "konva", Hl = "listening", pd = "mouseenter", gd = "mouseleave", md = "set", _d = "Shape", Xn = " ", vd = "stage", As = "transform", My = "Stage", Wl = "visible", Py = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(Xn);
let Oy = 1, Z = class Yl {
  constructor(t) {
    this._id = Oy++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === As || t === ns) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
  }
  _getCache(t, e) {
    var s = this._cache.get(t), i = t === As || t === ns, n = s === void 0 || i && s.dirty === !0;
    return n && (s = e.call(this), this._cache.set(t, s)), s;
  }
  _calculate(t, e, s) {
    if (!this._attachedDepsListeners.get(t)) {
      const i = e.map((n) => n + "Change.konva").join(Xn);
      this.on(i, () => {
        this._clearCache(t);
      }), this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, s);
  }
  _getCanvasCache() {
    return this._cache.get(er);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === ns && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(er)) {
      const { scene: t, filter: e, hit: s } = this._cache.get(er);
      nt.Util.releaseCanvas(t, e, s), this._cache.delete(er);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    var e = t || {}, s = {};
    (e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0) && (s = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent() || void 0
    }));
    var i = Math.ceil(e.width || s.width), n = Math.ceil(e.height || s.height), o = e.pixelRatio, a = e.x === void 0 ? Math.floor(s.x) : e.x, l = e.y === void 0 ? Math.floor(s.y) : e.y, c = e.offset || 0, h = e.drawBorder || !1, d = e.hitCanvasPixelRatio || 1;
    if (!i || !n) {
      nt.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const u = Math.abs(Math.round(s.x) - a) > 0.5 ? 1 : 0, p = Math.abs(Math.round(s.y) - l) > 0.5 ? 1 : 0;
    i += c * 2 + u, n += c * 2 + p, a -= c, l -= c;
    var f = new ki.SceneCanvas({
      pixelRatio: o,
      width: i,
      height: n
    }), m = new ki.SceneCanvas({
      pixelRatio: o,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), _ = new ki.HitCanvas({
      pixelRatio: d,
      width: i,
      height: n
    }), y = f.getContext(), k = _.getContext();
    return _.isCache = !0, f.isCache = !0, this._cache.delete(er), this._filterUpToDate = !1, e.imageSmoothingEnabled === !1 && (f.getContext()._context.imageSmoothingEnabled = !1, m.getContext()._context.imageSmoothingEnabled = !1), y.save(), k.save(), y.translate(-a, -l), k.translate(-a, -l), this._isUnderCache = !0, this._clearSelfAndDescendantCache(Kn), this._clearSelfAndDescendantCache(fd), this.drawScene(f, this), this.drawHit(_, this), this._isUnderCache = !1, y.restore(), k.restore(), h && (y.save(), y.beginPath(), y.rect(0, 0, i, n), y.closePath(), y.setAttr("strokeStyle", "red"), y.setAttr("lineWidth", 5), y.stroke(), y.restore()), this._cache.set(er, {
      scene: f,
      filter: m,
      hit: _,
      x: a,
      y: l
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(er);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, e) {
    var s = [
      { x: t.x, y: t.y },
      { x: t.x + t.width, y: t.y },
      { x: t.x + t.width, y: t.y + t.height },
      { x: t.x, y: t.y + t.height }
    ], i = 1 / 0, n = 1 / 0, o = -1 / 0, a = -1 / 0, l = this.getAbsoluteTransform(e);
    return s.forEach(function(c) {
      var h = l.point(c);
      i === void 0 && (i = o = h.x, n = a = h.y), i = Math.min(i, h.x), n = Math.min(n, h.y), o = Math.max(o, h.x), a = Math.max(a, h.y);
    }), {
      x: i,
      y: n,
      width: o - i,
      height: a - n
    };
  }
  _drawCachedSceneCanvas(t) {
    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
    const e = this._getCanvasCache();
    t.translate(e.x, e.y);
    var s = this._getCachedSceneCanvas(), i = s.pixelRatio;
    t.drawImage(s._canvas, 0, 0, s.width / i, s.height / i), t.restore();
  }
  _drawCachedHitCanvas(t) {
    var e = this._getCanvasCache(), s = e.hit;
    t.save(), t.translate(e.x, e.y), t.drawImage(s._canvas, 0, 0, s.width / s.pixelRatio, s.height / s.pixelRatio), t.restore();
  }
  _getCachedSceneCanvas() {
    var t = this.filters(), e = this._getCanvasCache(), s = e.scene, i = e.filter, n = i.getContext(), o, a, l, c;
    if (t) {
      if (!this._filterUpToDate) {
        var h = s.pixelRatio;
        i.setSize(s.width / s.pixelRatio, s.height / s.pixelRatio);
        try {
          for (o = t.length, n.clear(), n.drawImage(s._canvas, 0, 0, s.getWidth() / h, s.getHeight() / h), a = n.getImageData(0, 0, i.getWidth(), i.getHeight()), l = 0; l < o; l++) {
            if (c = t[l], typeof c != "function") {
              nt.Util.error("Filter should be type of function, but got " + typeof c + " instead. Please check correct filters");
              continue;
            }
            c.call(this, a), n.putImageData(a, 0, 0);
          }
        } catch (d) {
          nt.Util.error("Unable to apply filter. " + d.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return i;
    }
    return s;
  }
  on(t, e) {
    if (this._cache && this._cache.delete(Nn), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    var s = t.split(Xn), i = s.length, n, o, a, l, c;
    for (n = 0; n < i; n++)
      o = s[n], a = o.split("."), l = a[0], c = a[1] || "", this.eventListeners[l] || (this.eventListeners[l] = []), this.eventListeners[l].push({
        name: c,
        handler: e
      });
    return this;
  }
  off(t, e) {
    var s = (t || "").split(Xn), i = s.length, n, o, a, l, c, h;
    if (this._cache && this._cache.delete(Nn), !t)
      for (o in this.eventListeners)
        this._off(o);
    for (n = 0; n < i; n++)
      if (a = s[n], l = a.split("."), c = l[0], h = l[1], c)
        this.eventListeners[c] && this._off(c, h, e);
      else
        for (o in this.eventListeners)
          this._off(o, h, e);
    return this;
  }
  dispatchEvent(t) {
    var e = {
      target: this,
      type: t.type,
      evt: t
    };
    return this.fire(t.type, e), this;
  }
  addEventListener(t, e) {
    return this.on(t, function(s) {
      e.call(this, s.evt);
    }), this;
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, e, s) {
    var i = this;
    this.on(t, function(n) {
      for (var o = n.target.findAncestors(e, !0, i), a = 0; a < o.length; a++)
        n = nt.Util.cloneObject(n), n.currentTarget = o[a], s.call(o[a], n);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), xe.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(ns), this._clearSelfAndDescendantCache(Kn), this._clearSelfAndDescendantCache(fd), this._clearSelfAndDescendantCache(vd), this._clearSelfAndDescendantCache(Wl), this._clearSelfAndDescendantCache(Hl);
  }
  _remove() {
    this._clearCaches();
    var t = this.getParent();
    t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(t) {
    var e = "get" + nt.Util._capitalize(t);
    return nt.Util._isFunction(this[e]) ? this[e]() : this.attrs[t];
  }
  getAncestors() {
    for (var t = this.getParent(), e = []; t; )
      e.push(t), t = t.getParent();
    return e;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return this._batchTransformChanges(() => {
      var e, s;
      if (!t)
        return this;
      for (e in t)
        e !== Ty && (s = md + nt.Util._capitalize(e), nt.Util._isFunction(this[s]) ? this[s](t[e]) : this._setAttr(e, t[e]));
    }), this;
  }
  isListening() {
    return this._getCache(Hl, this._isListening);
  }
  _isListening(t) {
    if (!this.listening())
      return !1;
    const s = this.getParent();
    return s && s !== t && this !== t ? s._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache(Wl, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible())
      return !1;
    const s = this.getParent();
    return s && s !== t && this !== t ? s._isVisible(t) : !0;
  }
  shouldDrawHit(t, e = !1) {
    if (t)
      return this._isVisible(t) && this._isListening(t);
    var s = this.getLayer(), i = !1;
    xe.DD._dragElements.forEach((o) => {
      o.dragStatus === "dragging" && (o.node.nodeType === "Stage" || o.node.getLayer() === s) && (i = !0);
    });
    var n = !e && !Ts.Konva.hitOnDragEnabled && (i || Ts.Konva.isTransforming());
    return this.isListening() && this.isVisible() && !n;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var t = this.getDepth(), e = this, s = 0, i, n, o, a;
    function l(h) {
      for (i = [], n = h.length, o = 0; o < n; o++)
        a = h[o], s++, a.nodeType !== _d && (i = i.concat(a.getChildren().slice())), a._id === e._id && (o = n);
      i.length > 0 && i[0].getDepth() <= t && l(i);
    }
    const c = this.getStage();
    return e.nodeType !== My && c && l(c.getChildren()), s;
  }
  getDepth() {
    for (var t = 0, e = this.parent; e; )
      t++, e = e.parent;
    return t;
  }
  _batchTransformChanges(t) {
    this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(As), this._clearSelfAndDescendantCache(ns)), this._needClearTransformCache = !1;
  }
  setPosition(t) {
    return this._batchTransformChanges(() => {
      this.x(t.x), this.y(t.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    const t = this.getStage();
    if (!t)
      return null;
    var e = t.getPointerPosition();
    if (!e)
      return null;
    var s = this.getAbsoluteTransform().copy();
    return s.invert(), s.point(e);
  }
  getAbsolutePosition(t) {
    let e = !1, s = this.parent;
    for (; s; ) {
      if (s.isCached()) {
        e = !0;
        break;
      }
      s = s.parent;
    }
    e && !t && (t = !0);
    var i = this.getAbsoluteTransform(t).getMatrix(), n = new nt.Transform(), o = this.offset();
    return n.m = i.slice(), n.translate(o.x, o.y), n.getTranslation();
  }
  setAbsolutePosition(t) {
    const { x: e, y: s, ...i } = this._clearTransform();
    this.attrs.x = e, this.attrs.y = s, this._clearCache(As);
    var n = this._getAbsoluteTransform().copy();
    return n.invert(), n.translate(t.x, t.y), t = {
      x: this.attrs.x + n.getTranslation().x,
      y: this.attrs.y + n.getTranslation().y
    }, this._setTransform(i), this.setPosition({ x: t.x, y: t.y }), this._clearCache(As), this._clearSelfAndDescendantCache(ns), this;
  }
  _setTransform(t) {
    var e;
    for (e in t)
      this.attrs[e] = t[e];
  }
  _clearTransform() {
    var t = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t;
  }
  move(t) {
    var e = t.x, s = t.y, i = this.x(), n = this.y();
    return e !== void 0 && (i += e), s !== void 0 && (n += s), this.setPosition({ x: i, y: n }), this;
  }
  _eachAncestorReverse(t, e) {
    var s = [], i = this.getParent(), n, o;
    if (!(e && e._id === this._id)) {
      for (s.unshift(this); i && (!e || i._id !== e._id); )
        s.unshift(i), i = i.parent;
      for (n = s.length, o = 0; o < n; o++)
        t(s[o]);
    }
  }
  rotate(t) {
    return this.rotation(this.rotation() + t), this;
  }
  moveToTop() {
    if (!this.parent)
      return nt.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    var t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return nt.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    var t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return nt.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return nt.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    var t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return nt.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (t < 0 || t >= this.parent.children.length) && nt.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    var e = this.index;
    return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(Kn, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var t = this.opacity(), e = this.getParent();
    return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    var t = this.getAttrs(), e, s, i, n, o;
    const a = {
      attrs: {},
      className: this.getClassName()
    };
    for (e in t)
      s = t[e], o = nt.Util.isObject(s) && !nt.Util._isPlainObject(s) && !nt.Util._isArray(s), !o && (i = typeof this[e] == "function" && this[e], delete t[e], n = i ? i.call(this) : null, t[e] = s, n !== s && (a.attrs[e] = s));
    return nt.Util._prepareToStringify(a);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, e, s) {
    var i = [];
    e && this._isMatch(t) && i.push(this);
    for (var n = this.parent; n; ) {
      if (n === s)
        return i;
      n._isMatch(t) && i.push(n), n = n.parent;
    }
    return i;
  }
  isAncestorOf(t) {
    return !1;
  }
  findAncestor(t, e, s) {
    return this.findAncestors(t, e, s)[0];
  }
  _isMatch(t) {
    if (!t)
      return !1;
    if (typeof t == "function")
      return t(this);
    var e = t.replace(/ /g, "").split(","), s = e.length, i, n;
    for (i = 0; i < s; i++)
      if (n = e[i], nt.Util.isValidSelector(n) || (nt.Util.warn('Selector "' + n + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), nt.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), nt.Util.warn("Konva is awesome, right?")), n.charAt(0) === "#") {
        if (this.id() === n.slice(1))
          return !0;
      } else if (n.charAt(0) === ".") {
        if (this.hasName(n.slice(1)))
          return !0;
      } else if (this.className === n || this.nodeType === n)
        return !0;
    return !1;
  }
  getLayer() {
    var t = this.getParent();
    return t ? t.getLayer() : null;
  }
  getStage() {
    return this._getCache(vd, this._getStage);
  }
  _getStage() {
    var t = this.getParent();
    return t ? t.getStage() : null;
  }
  fire(t, e = {}, s) {
    return e.target = e.target || this, s ? this._fireAndBubble(t, e) : this._fire(t, e), this;
  }
  getAbsoluteTransform(t) {
    return t ? this._getAbsoluteTransform(t) : this._getCache(ns, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    var e;
    if (t)
      return e = new nt.Transform(), this._eachAncestorReverse(function(i) {
        var n = i.transformsEnabled();
        n === "all" ? e.multiply(i.getTransform()) : n === "position" && e.translate(i.x() - i.offsetX(), i.y() - i.offsetY());
      }, t), e;
    e = this._cache.get(ns) || new nt.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
    var s = this.transformsEnabled();
    if (s === "all")
      e.multiply(this.getTransform());
    else if (s === "position") {
      const i = this.attrs.x || 0, n = this.attrs.y || 0, o = this.attrs.offsetX || 0, a = this.attrs.offsetY || 0;
      e.translate(i - o, n - a);
    }
    return e.dirty = !1, e;
  }
  getAbsoluteScale(t) {
    for (var e = this; e; )
      e._isUnderCache && (t = e), e = e.getParent();
    const i = this.getAbsoluteTransform(t).decompose();
    return {
      x: i.scaleX,
      y: i.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(As, this._getTransform);
  }
  _getTransform() {
    var t, e, s = this._cache.get(As) || new nt.Transform();
    s.reset();
    var i = this.x(), n = this.y(), o = Ts.Konva.getAngle(this.rotation()), a = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, l = (e = this.attrs.scaleY) !== null && e !== void 0 ? e : 1, c = this.attrs.skewX || 0, h = this.attrs.skewY || 0, d = this.attrs.offsetX || 0, u = this.attrs.offsetY || 0;
    return (i !== 0 || n !== 0) && s.translate(i, n), o !== 0 && s.rotate(o), (c !== 0 || h !== 0) && s.skew(c, h), (a !== 1 || l !== 1) && s.scale(a, l), (d !== 0 || u !== 0) && s.translate(-1 * d, -1 * u), s.dirty = !1, s;
  }
  clone(t) {
    var e = nt.Util.cloneObject(this.attrs), s, i, n, o, a;
    for (s in t)
      e[s] = t[s];
    var l = new this.constructor(e);
    for (s in this.eventListeners)
      for (i = this.eventListeners[s], n = i.length, o = 0; o < n; o++)
        a = i[o], a.name.indexOf(Ay) < 0 && (l.eventListeners[s] || (l.eventListeners[s] = []), l.eventListeners[s].push(a));
    return l;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    var e = this.getClientRect(), s = this.getStage(), i = t.x !== void 0 ? t.x : Math.floor(e.x), n = t.y !== void 0 ? t.y : Math.floor(e.y), o = t.pixelRatio || 1, a = new ki.SceneCanvas({
      width: t.width || Math.ceil(e.width) || (s ? s.width() : 0),
      height: t.height || Math.ceil(e.height) || (s ? s.height() : 0),
      pixelRatio: o
    }), l = a.getContext();
    const c = new ki.SceneCanvas({
      width: a.width / a.pixelRatio + Math.abs(i),
      height: a.height / a.pixelRatio + Math.abs(n),
      pixelRatio: a.pixelRatio
    });
    return t.imageSmoothingEnabled === !1 && (l._context.imageSmoothingEnabled = !1), l.save(), (i || n) && l.translate(-1 * i, -1 * n), this.drawScene(a, void 0, c), l.restore(), a;
  }
  toCanvas(t) {
    return this._toKonvaCanvas(t)._canvas;
  }
  toDataURL(t) {
    t = t || {};
    var e = t.mimeType || null, s = t.quality || null, i = this._toKonvaCanvas(t).toDataURL(e, s);
    return t.callback && t.callback(i), i;
  }
  toImage(t) {
    return new Promise((e, s) => {
      try {
        const i = t == null ? void 0 : t.callback;
        i && delete t.callback, nt.Util._urlToImage(this.toDataURL(t), function(n) {
          e(n), i == null || i(n);
        });
      } catch (i) {
        s(i);
      }
    });
  }
  toBlob(t) {
    return new Promise((e, s) => {
      try {
        const i = t == null ? void 0 : t.callback;
        i && delete t.callback, this.toCanvas(t).toBlob((n) => {
          e(n), i == null || i(n);
        }, t == null ? void 0 : t.mimeType, t == null ? void 0 : t.quality);
      } catch (i) {
        s(i);
      }
    });
  }
  setSize(t) {
    return this.width(t.width), this.height(t.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Ts.Konva.dragDistance;
  }
  _off(t, e, s) {
    var i = this.eventListeners[t], n, o, a;
    for (n = 0; n < i.length; n++)
      if (o = i[n].name, a = i[n].handler, (o !== "konva" || e === "konva") && (!e || o === e) && (!s || s === a)) {
        if (i.splice(n, 1), i.length === 0) {
          delete this.eventListeners[t];
          break;
        }
        n--;
      }
  }
  _fireChangeEvent(t, e, s) {
    this._fire(t + Ey, {
      oldVal: e,
      newVal: s
    });
  }
  addName(t) {
    if (!this.hasName(t)) {
      var e = this.name(), s = e ? e + " " + t : t;
      this.name(s);
    }
    return this;
  }
  hasName(t) {
    if (!t)
      return !1;
    const e = this.name();
    if (!e)
      return !1;
    var s = (e || "").split(/\s/g);
    return s.indexOf(t) !== -1;
  }
  removeName(t) {
    var e = (this.name() || "").split(/\s/g), s = e.indexOf(t);
    return s !== -1 && (e.splice(s, 1), this.name(e.join(" "))), this;
  }
  setAttr(t, e) {
    var s = this[md + nt.Util._capitalize(t)];
    return nt.Util._isFunction(s) ? s.call(this, e) : this._setAttr(t, e), this;
  }
  _requestDraw() {
    if (Ts.Konva.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, e) {
    var s = this.attrs[t];
    s === e && !nt.Util.isObject(e) || (e == null ? delete this.attrs[t] : this.attrs[t] = e, this._shouldFireChangeEvents && this._fireChangeEvent(t, s, e), this._requestDraw());
  }
  _setComponentAttr(t, e, s) {
    var i;
    s !== void 0 && (i = this.attrs[t], i || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = s, this._fireChangeEvent(t, i, s));
  }
  _fireAndBubble(t, e, s) {
    e && this.nodeType === _d && (e.target = this);
    var i = (t === pd || t === gd) && (s && (this === s || this.isAncestorOf && this.isAncestorOf(s)) || this.nodeType === "Stage" && !s);
    if (!i) {
      this._fire(t, e);
      var n = (t === pd || t === gd) && s && s.isAncestorOf && s.isAncestorOf(this) && !s.isAncestorOf(this.parent);
      (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !n && (s && s.parent ? this._fireAndBubble.call(this.parent, t, e, s) : this._fireAndBubble.call(this.parent, t, e));
    }
  }
  _getProtoListeners(t) {
    var e, s, i;
    const n = (e = this._cache.get(Nn)) !== null && e !== void 0 ? e : {};
    let o = n == null ? void 0 : n[t];
    if (o === void 0) {
      o = [];
      let a = Object.getPrototypeOf(this);
      for (; a; ) {
        const l = (i = (s = a.eventListeners) === null || s === void 0 ? void 0 : s[t]) !== null && i !== void 0 ? i : [];
        o.push(...l), a = Object.getPrototypeOf(a);
      }
      n[t] = o, this._cache.set(Nn, n);
    }
    return o;
  }
  _fire(t, e) {
    e = e || {}, e.currentTarget = this, e.type = t;
    const s = this._getProtoListeners(t);
    if (s)
      for (var i = 0; i < s.length; i++)
        s[i].handler.call(this, e);
    const n = this.eventListeners[t];
    if (n)
      for (var i = 0; i < n.length; i++)
        n[i].handler.call(this, e);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    var e = t ? t.pointerId : void 0, s = this.getStage(), i = this.getAbsolutePosition();
    if (s) {
      var n = s._getPointerById(e) || s._changedPointerPositions[0] || i;
      xe.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: n,
        offset: {
          x: n.x - i.x,
          y: n.y - i.y
        },
        dragStatus: "ready",
        pointerId: e
      });
    }
  }
  startDrag(t, e = !0) {
    xe.DD._dragElements.has(this._id) || this._createDragElement(t);
    const s = xe.DD._dragElements.get(this._id);
    s.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: t && t.evt
    }, e);
  }
  _setDragPosition(t, e) {
    const s = this.getStage()._getPointerById(e.pointerId);
    if (s) {
      var i = {
        x: s.x - e.offset.x,
        y: s.y - e.offset.y
      }, n = this.dragBoundFunc();
      if (n !== void 0) {
        const o = n.call(this, i, t);
        o ? i = o : nt.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== i.x || this._lastPos.y !== i.y) && (this.setAbsolutePosition(i), this._requestDraw()), this._lastPos = i;
    }
  }
  stopDrag(t) {
    const e = xe.DD._dragElements.get(this._id);
    e && (e.dragStatus = "stopped"), xe.DD._endDragBefore(t), xe.DD._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = xe.DD._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
      var e = t.evt.button !== void 0, s = !e || Ts.Konva.dragButtons.indexOf(t.evt.button) >= 0;
      if (s && !this.isDragging()) {
        var i = !1;
        xe.DD._dragElements.forEach((n) => {
          this.isAncestorOf(n.node) && (i = !0);
        }), i || this._createDragElement(t);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      this._dragCleanup();
      var t = this.getStage();
      if (!t)
        return;
      const e = xe.DD._dragElements.get(this._id), s = e && e.dragStatus === "dragging", i = e && e.dragStatus === "ready";
      s ? this.stopDrag() : i && xe.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const e = this.getStage();
    if (!e)
      return !1;
    const s = {
      x: -t.x,
      y: -t.y,
      width: e.width() + 2 * t.x,
      height: e.height() + 2 * t.y
    };
    return nt.Util.haveIntersection(s, this.getClientRect());
  }
  static create(t, e) {
    return nt.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e);
  }
  static _createNode(t, e) {
    var s = Yl.prototype.getClassName.call(t), i = t.children, n, o, a;
    e && (t.attrs.container = e), Ts.Konva[s] || (nt.Util.warn('Can not find a node with class name "' + s + '". Fallback to "Shape".'), s = "Shape");
    const l = Ts.Konva[s];
    if (n = new l(t.attrs), i)
      for (o = i.length, a = 0; a < o; a++)
        n.add(Yl._createNode(i[a]));
    return n;
  }
};
xt.Node = Z;
Z.prototype.nodeType = "Node";
Z.prototype._attrsAffectingSize = [];
Z.prototype.eventListeners = {};
Z.prototype.on.call(Z.prototype, Py, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(As), this._clearSelfAndDescendantCache(ns);
});
Z.prototype.on.call(Z.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(Wl);
});
Z.prototype.on.call(Z.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(Hl);
});
Z.prototype.on.call(Z.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(Kn);
});
const _t = Sn.Factory.addGetterSetter;
_t(Z, "zIndex");
_t(Z, "absolutePosition");
_t(Z, "position");
_t(Z, "x", 0, (0, Lt.getNumberValidator)());
_t(Z, "y", 0, (0, Lt.getNumberValidator)());
_t(Z, "globalCompositeOperation", "source-over", (0, Lt.getStringValidator)());
_t(Z, "opacity", 1, (0, Lt.getNumberValidator)());
_t(Z, "name", "", (0, Lt.getStringValidator)());
_t(Z, "id", "", (0, Lt.getStringValidator)());
_t(Z, "rotation", 0, (0, Lt.getNumberValidator)());
Sn.Factory.addComponentsGetterSetter(Z, "scale", ["x", "y"]);
_t(Z, "scaleX", 1, (0, Lt.getNumberValidator)());
_t(Z, "scaleY", 1, (0, Lt.getNumberValidator)());
Sn.Factory.addComponentsGetterSetter(Z, "skew", ["x", "y"]);
_t(Z, "skewX", 0, (0, Lt.getNumberValidator)());
_t(Z, "skewY", 0, (0, Lt.getNumberValidator)());
Sn.Factory.addComponentsGetterSetter(Z, "offset", ["x", "y"]);
_t(Z, "offsetX", 0, (0, Lt.getNumberValidator)());
_t(Z, "offsetY", 0, (0, Lt.getNumberValidator)());
_t(Z, "dragDistance", null, (0, Lt.getNumberValidator)());
_t(Z, "width", 0, (0, Lt.getNumberValidator)());
_t(Z, "height", 0, (0, Lt.getNumberValidator)());
_t(Z, "listening", !0, (0, Lt.getBooleanValidator)());
_t(Z, "preventDefault", !0, (0, Lt.getBooleanValidator)());
_t(Z, "filters", null, function(r) {
  return this._filterUpToDate = !1, r;
});
_t(Z, "visible", !0, (0, Lt.getBooleanValidator)());
_t(Z, "transformsEnabled", "all", (0, Lt.getStringValidator)());
_t(Z, "size");
_t(Z, "dragBoundFunc");
_t(Z, "draggable", !1, (0, Lt.getBooleanValidator)());
Sn.Factory.backCompat(Z, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.Container = void 0;
const fi = et, al = xt, ta = U;
class Tr extends al.Node {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(t) {
    if (!t)
      return this.children || [];
    const e = this.children || [];
    var s = [];
    return e.forEach(function(i) {
      t(i) && s.push(i);
    }), s;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...t) {
    if (t.length === 0)
      return this;
    if (t.length > 1) {
      for (var e = 0; e < t.length; e++)
        this.add(t[e]);
      return this;
    }
    const s = t[0];
    return s.getParent() ? (s.moveTo(this), this) : (this._validateAdd(s), s.index = this.getChildren().length, s.parent = this, s._clearCaches(), this.getChildren().push(s), this._fire("add", {
      child: s
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    var e = this._generalFind(t, !0);
    return e.length > 0 ? e[0] : void 0;
  }
  _generalFind(t, e) {
    var s = [];
    return this._descendants((i) => {
      const n = i._isMatch(t);
      return n && s.push(i), !!(n && e);
    }), s;
  }
  _descendants(t) {
    let e = !1;
    const s = this.getChildren();
    for (const i of s) {
      if (e = t(i), e)
        return !0;
      if (i.hasChildren() && (e = i._descendants(t), e))
        return !0;
    }
    return !1;
  }
  toObject() {
    var t = al.Node.prototype.toObject.call(this);
    return t.children = [], this.getChildren().forEach((e) => {
      t.children.push(e.toObject());
    }), t;
  }
  isAncestorOf(t) {
    for (var e = t.getParent(); e; ) {
      if (e._id === this._id)
        return !0;
      e = e.getParent();
    }
    return !1;
  }
  clone(t) {
    var e = al.Node.prototype.clone.call(this, t);
    return this.getChildren().forEach(function(s) {
      e.add(s.clone());
    }), e;
  }
  getAllIntersections(t) {
    var e = [];
    return this.find("Shape").forEach((s) => {
      s.isVisible() && s.intersects(t) && e.push(s);
    }), e;
  }
  _clearSelfAndDescendantCache(t) {
    var e;
    super._clearSelfAndDescendantCache(t), !this.isCached() && ((e = this.children) === null || e === void 0 || e.forEach(function(s) {
      s._clearSelfAndDescendantCache(t);
    }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null || t === void 0 || t.forEach(function(e, s) {
      e.index = s;
    }), this._requestDraw();
  }
  drawScene(t, e, s) {
    var i = this.getLayer(), n = t || i && i.getCanvas(), o = n && n.getContext(), a = this._getCanvasCache(), l = a && a.scene, c = n && n.isCache;
    if (!this.isVisible() && !c)
      return this;
    if (l) {
      o.save();
      var h = this.getAbsoluteTransform(e).getMatrix();
      o.transform(h[0], h[1], h[2], h[3], h[4], h[5]), this._drawCachedSceneCanvas(o), o.restore();
    } else
      this._drawChildren("drawScene", n, e, s);
    return this;
  }
  drawHit(t, e) {
    if (!this.shouldDrawHit(e))
      return this;
    var s = this.getLayer(), i = t || s && s.hitCanvas, n = i && i.getContext(), o = this._getCanvasCache(), a = o && o.hit;
    if (a) {
      n.save();
      var l = this.getAbsoluteTransform(e).getMatrix();
      n.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedHitCanvas(n), n.restore();
    } else
      this._drawChildren("drawHit", i, e);
    return this;
  }
  _drawChildren(t, e, s, i) {
    var n, o = e && e.getContext(), a = this.clipWidth(), l = this.clipHeight(), c = this.clipFunc(), h = typeof a == "number" && typeof l == "number" || c;
    const d = s === this;
    if (h) {
      o.save();
      var u = this.getAbsoluteTransform(s), p = u.getMatrix();
      o.transform(p[0], p[1], p[2], p[3], p[4], p[5]), o.beginPath();
      let y;
      if (c)
        y = c.call(this, o, this);
      else {
        var f = this.clipX(), m = this.clipY();
        o.rect(f || 0, m || 0, a, l);
      }
      o.clip.apply(o, y), p = u.copy().invert().getMatrix(), o.transform(p[0], p[1], p[2], p[3], p[4], p[5]);
    }
    var _ = !d && this.globalCompositeOperation() !== "source-over" && t === "drawScene";
    _ && (o.save(), o._applyGlobalCompositeOperation(this)), (n = this.children) === null || n === void 0 || n.forEach(function(y) {
      y[t](e, s, i);
    }), _ && o.restore(), h && o.restore();
  }
  getClientRect(t = {}) {
    var e, s = t.skipTransform, i = t.relativeTo, n, o, a, l, c = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    }, h = this;
    (e = this.children) === null || e === void 0 || e.forEach(function(m) {
      if (m.visible()) {
        var _ = m.getClientRect({
          relativeTo: h,
          skipShadow: t.skipShadow,
          skipStroke: t.skipStroke
        });
        _.width === 0 && _.height === 0 || (n === void 0 ? (n = _.x, o = _.y, a = _.x + _.width, l = _.y + _.height) : (n = Math.min(n, _.x), o = Math.min(o, _.y), a = Math.max(a, _.x + _.width), l = Math.max(l, _.y + _.height)));
      }
    });
    for (var d = this.find("Shape"), u = !1, p = 0; p < d.length; p++) {
      var f = d[p];
      if (f._isVisible(this)) {
        u = !0;
        break;
      }
    }
    return u && n !== void 0 ? c = {
      x: n,
      y: o,
      width: a - n,
      height: l - o
    } : c = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, s ? c : this._transformedRect(c, i);
  }
}
Er.Container = Tr;
fi.Factory.addComponentsGetterSetter(Tr, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
fi.Factory.addGetterSetter(Tr, "clipX", void 0, (0, ta.getNumberValidator)());
fi.Factory.addGetterSetter(Tr, "clipY", void 0, (0, ta.getNumberValidator)());
fi.Factory.addGetterSetter(Tr, "clipWidth", void 0, (0, ta.getNumberValidator)());
fi.Factory.addGetterSetter(Tr, "clipHeight", void 0, (0, ta.getNumberValidator)());
fi.Factory.addGetterSetter(Tr, "clipFunc");
var pp = {}, ve = {};
Object.defineProperty(ve, "__esModule", { value: !0 });
ve.releaseCapture = ve.setPointerCapture = ve.hasPointerCapture = ve.createEvent = ve.getCapturedShape = void 0;
const Ry = rt, an = /* @__PURE__ */ new Map(), gp = Ry.Konva._global.PointerEvent !== void 0;
function Dy(r) {
  return an.get(r);
}
ve.getCapturedShape = Dy;
function Wc(r) {
  return {
    evt: r,
    pointerId: r.pointerId
  };
}
ve.createEvent = Wc;
function Iy(r, t) {
  return an.get(r) === t;
}
ve.hasPointerCapture = Iy;
function Ny(r, t) {
  mp(r), t.getStage() && (an.set(r, t), gp && t._fire("gotpointercapture", Wc(new PointerEvent("gotpointercapture"))));
}
ve.setPointerCapture = Ny;
function mp(r, t) {
  const e = an.get(r);
  if (!e)
    return;
  const s = e.getStage();
  s && s.content, an.delete(r), gp && e._fire("lostpointercapture", Wc(new PointerEvent("lostpointercapture")));
}
ve.releaseCapture = mp;
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Stage = r.stages = void 0;
  const t = Tt, e = et, s = Er, i = rt, n = $e, o = Qo, a = rt, l = ve;
  var c = "Stage", h = "string", d = "px", u = "mouseout", p = "mouseleave", f = "mouseover", m = "mouseenter", _ = "mousemove", y = "mousedown", k = "mouseup", g = "pointermove", v = "pointerdown", b = "pointerup", w = "pointercancel", x = "lostpointercapture", S = "pointerout", M = "pointerleave", E = "pointerover", T = "pointerenter", I = "contextmenu", D = "touchstart", j = "touchend", $ = "touchmove", st = "touchcancel", it = "wheel", lt = 5, Ot = [
    [m, "_pointerenter"],
    [y, "_pointerdown"],
    [_, "_pointermove"],
    [k, "_pointerup"],
    [p, "_pointerleave"],
    [D, "_pointerdown"],
    [$, "_pointermove"],
    [j, "_pointerup"],
    [st, "_pointercancel"],
    [f, "_pointerover"],
    [it, "_wheel"],
    [I, "_contextmenu"],
    [v, "_pointerdown"],
    [g, "_pointermove"],
    [b, "_pointerup"],
    [w, "_pointercancel"],
    [x, "_lostpointercapture"]
  ];
  const z = {
    mouse: {
      [S]: u,
      [M]: p,
      [E]: f,
      [T]: m,
      [g]: _,
      [v]: y,
      [b]: k,
      [w]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [S]: "touchout",
      [M]: "touchleave",
      [E]: "touchover",
      [T]: "touchenter",
      [g]: $,
      [v]: D,
      [b]: j,
      [w]: st,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [S]: S,
      [M]: M,
      [E]: E,
      [T]: T,
      [g]: g,
      [v]: v,
      [b]: b,
      [w]: w,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, H = (Ut) => Ut.indexOf("pointer") >= 0 ? "pointer" : Ut.indexOf("touch") >= 0 ? "touch" : "mouse", ut = (Ut) => {
    const C = H(Ut);
    if (C === "pointer")
      return i.Konva.pointerEventsEnabled && z.pointer;
    if (C === "touch")
      return z.touch;
    if (C === "mouse")
      return z.mouse;
  };
  function yt(Ut = {}) {
    return (Ut.clipFunc || Ut.clipWidth || Ut.clipHeight) && t.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), Ut;
  }
  const vt = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  r.stages = [];
  class ts extends s.Container {
    constructor(C) {
      super(yt(C)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), r.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        yt(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(C) {
      const P = C.getType() === "Layer", G = C.getType() === "FastLayer";
      P || G || t.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const C = this.visible() ? "" : "none";
      this.content.style.display = C;
    }
    setContainer(C) {
      if (typeof C === h) {
        if (C.charAt(0) === ".") {
          var P = C.slice(1);
          C = document.getElementsByClassName(P)[0];
        } else {
          var G;
          C.charAt(0) !== "#" ? G = C : G = C.slice(1), C = document.getElementById(G);
        }
        if (!C)
          throw "Can not find container in document with id " + G;
      }
      return this._setAttr("container", C), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), C.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      var C = this.children, P = C.length, G;
      for (G = 0; G < P; G++)
        C[G].clear();
      return this;
    }
    clone(C) {
      return C || (C = {}), C.container = typeof document < "u" && document.createElement("div"), s.Container.prototype.clone.call(this, C);
    }
    destroy() {
      super.destroy();
      var C = this.content;
      C && t.Util._isInDocument(C) && this.container().removeChild(C);
      var P = r.stages.indexOf(this);
      return P > -1 && r.stages.splice(P, 1), t.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const C = this._pointerPositions[0] || this._changedPointerPositions[0];
      return C ? {
        x: C.x,
        y: C.y
      } : (t.Util.warn(vt), null);
    }
    _getPointerById(C) {
      return this._pointerPositions.find((P) => P.id === C);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(C) {
      C = C || {}, C.x = C.x || 0, C.y = C.y || 0, C.width = C.width || this.width(), C.height = C.height || this.height();
      var P = new n.SceneCanvas({
        width: C.width,
        height: C.height,
        pixelRatio: C.pixelRatio || 1
      }), G = P.getContext()._context, bt = this.children;
      return (C.x || C.y) && G.translate(-1 * C.x, -1 * C.y), bt.forEach(function(pt) {
        if (pt.isVisible()) {
          var Rt = pt._toKonvaCanvas(C);
          G.drawImage(Rt._canvas, C.x, C.y, Rt.getWidth() / Rt.getPixelRatio(), Rt.getHeight() / Rt.getPixelRatio());
        }
      }), P;
    }
    getIntersection(C) {
      if (!C)
        return null;
      var P = this.children, G = P.length, bt = G - 1, pt;
      for (pt = bt; pt >= 0; pt--) {
        const Rt = P[pt].getIntersection(C);
        if (Rt)
          return Rt;
      }
      return null;
    }
    _resizeDOM() {
      var C = this.width(), P = this.height();
      this.content && (this.content.style.width = C + d, this.content.style.height = P + d), this.bufferCanvas.setSize(C, P), this.bufferHitCanvas.setSize(C, P), this.children.forEach((G) => {
        G.setSize({ width: C, height: P }), G.draw();
      });
    }
    add(C, ...P) {
      if (arguments.length > 1) {
        for (var G = 0; G < arguments.length; G++)
          this.add(arguments[G]);
        return this;
      }
      super.add(C);
      var bt = this.children.length;
      return bt > lt && t.Util.warn("The stage has " + bt + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), C.setSize({ width: this.width(), height: this.height() }), C.draw(), i.Konva.isBrowser && this.content.appendChild(C.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(C) {
      return l.hasPointerCapture(C, this);
    }
    setPointerCapture(C) {
      l.setPointerCapture(C, this);
    }
    releaseCapture(C) {
      l.releaseCapture(C, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      i.Konva.isBrowser && Ot.forEach(([C, P]) => {
        this.content.addEventListener(C, (G) => {
          this[P](G);
        }, { passive: !1 });
      });
    }
    _pointerenter(C) {
      this.setPointersPositions(C);
      const P = ut(C.type);
      P && this._fire(P.pointerenter, {
        evt: C,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(C) {
      this.setPointersPositions(C);
      const P = ut(C.type);
      P && this._fire(P.pointerover, {
        evt: C,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(C) {
      let P = this[C + "targetShape"];
      return P && !P.getStage() && (P = null), P;
    }
    _pointerleave(C) {
      const P = ut(C.type), G = H(C.type);
      if (P) {
        this.setPointersPositions(C);
        var bt = this._getTargetShape(G), pt = !(i.Konva.isDragging() || i.Konva.isTransforming()) || i.Konva.hitOnDragEnabled;
        bt && pt ? (bt._fireAndBubble(P.pointerout, { evt: C }), bt._fireAndBubble(P.pointerleave, { evt: C }), this._fire(P.pointerleave, {
          evt: C,
          target: this,
          currentTarget: this
        }), this[G + "targetShape"] = null) : pt && (this._fire(P.pointerleave, {
          evt: C,
          target: this,
          currentTarget: this
        }), this._fire(P.pointerout, {
          evt: C,
          target: this,
          currentTarget: this
        })), this.pointerPos = null, this._pointerPositions = [];
      }
    }
    _pointerdown(C) {
      const P = ut(C.type), G = H(C.type);
      if (P) {
        this.setPointersPositions(C);
        var bt = !1;
        this._changedPointerPositions.forEach((pt) => {
          var Rt = this.getIntersection(pt);
          if (o.DD.justDragged = !1, i.Konva["_" + G + "ListenClick"] = !0, !Rt || !Rt.isListening())
            return;
          i.Konva.capturePointerEventsEnabled && Rt.setPointerCapture(pt.id), this[G + "ClickStartShape"] = Rt, Rt._fireAndBubble(P.pointerdown, {
            evt: C,
            pointerId: pt.id
          }), bt = !0;
          const Se = C.type.indexOf("touch") >= 0;
          Rt.preventDefault() && C.cancelable && Se && C.preventDefault();
        }), bt || this._fire(P.pointerdown, {
          evt: C,
          target: this,
          currentTarget: this,
          pointerId: this._pointerPositions[0].id
        });
      }
    }
    _pointermove(C) {
      const P = ut(C.type), G = H(C.type);
      if (!P)
        return;
      i.Konva.isDragging() && o.DD.node.preventDefault() && C.cancelable && C.preventDefault(), this.setPointersPositions(C);
      var bt = !(i.Konva.isDragging() || i.Konva.isTransforming()) || i.Konva.hitOnDragEnabled;
      if (!bt)
        return;
      var pt = {};
      let Rt = !1;
      var Se = this._getTargetShape(G);
      this._changedPointerPositions.forEach((Cs) => {
        const wt = l.getCapturedShape(Cs.id) || this.getIntersection(Cs), Nr = Cs.id, es = { evt: C, pointerId: Nr };
        var Fr = Se !== wt;
        if (Fr && Se && (Se._fireAndBubble(P.pointerout, { ...es }, wt), Se._fireAndBubble(P.pointerleave, { ...es }, wt)), wt) {
          if (pt[wt._id])
            return;
          pt[wt._id] = !0;
        }
        wt && wt.isListening() ? (Rt = !0, Fr && (wt._fireAndBubble(P.pointerover, { ...es }, Se), wt._fireAndBubble(P.pointerenter, { ...es }, Se), this[G + "targetShape"] = wt), wt._fireAndBubble(P.pointermove, { ...es })) : Se && (this._fire(P.pointerover, {
          evt: C,
          target: this,
          currentTarget: this,
          pointerId: Nr
        }), this[G + "targetShape"] = null);
      }), Rt || this._fire(P.pointermove, {
        evt: C,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(C) {
      const P = ut(C.type), G = H(C.type);
      if (!P)
        return;
      this.setPointersPositions(C);
      const bt = this[G + "ClickStartShape"], pt = this[G + "ClickEndShape"];
      var Rt = {};
      let Se = !1;
      this._changedPointerPositions.forEach((Cs) => {
        const wt = l.getCapturedShape(Cs.id) || this.getIntersection(Cs);
        if (wt) {
          if (wt.releaseCapture(Cs.id), Rt[wt._id])
            return;
          Rt[wt._id] = !0;
        }
        const Nr = Cs.id, es = { evt: C, pointerId: Nr };
        let Fr = !1;
        i.Konva["_" + G + "InDblClickWindow"] ? (Fr = !0, clearTimeout(this[G + "DblTimeout"])) : o.DD.justDragged || (i.Konva["_" + G + "InDblClickWindow"] = !0, clearTimeout(this[G + "DblTimeout"])), this[G + "DblTimeout"] = setTimeout(function() {
          i.Konva["_" + G + "InDblClickWindow"] = !1;
        }, i.Konva.dblClickWindow), wt && wt.isListening() ? (Se = !0, this[G + "ClickEndShape"] = wt, wt._fireAndBubble(P.pointerup, { ...es }), i.Konva["_" + G + "ListenClick"] && bt && bt === wt && (wt._fireAndBubble(P.pointerclick, { ...es }), Fr && pt && pt === wt && wt._fireAndBubble(P.pointerdblclick, { ...es }))) : (this[G + "ClickEndShape"] = null, i.Konva["_" + G + "ListenClick"] && this._fire(P.pointerclick, {
          evt: C,
          target: this,
          currentTarget: this,
          pointerId: Nr
        }), Fr && this._fire(P.pointerdblclick, {
          evt: C,
          target: this,
          currentTarget: this,
          pointerId: Nr
        }));
      }), Se || this._fire(P.pointerup, {
        evt: C,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), i.Konva["_" + G + "ListenClick"] = !1, C.cancelable && G !== "touch" && C.preventDefault();
    }
    _contextmenu(C) {
      this.setPointersPositions(C);
      var P = this.getIntersection(this.getPointerPosition());
      P && P.isListening() ? P._fireAndBubble(I, { evt: C }) : this._fire(I, {
        evt: C,
        target: this,
        currentTarget: this
      });
    }
    _wheel(C) {
      this.setPointersPositions(C);
      var P = this.getIntersection(this.getPointerPosition());
      P && P.isListening() ? P._fireAndBubble(it, { evt: C }) : this._fire(it, {
        evt: C,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(C) {
      this.setPointersPositions(C);
      const P = l.getCapturedShape(C.pointerId) || this.getIntersection(this.getPointerPosition());
      P && P._fireAndBubble(b, l.createEvent(C)), l.releaseCapture(C.pointerId);
    }
    _lostpointercapture(C) {
      l.releaseCapture(C.pointerId);
    }
    setPointersPositions(C) {
      var P = this._getContentPosition(), G = null, bt = null;
      C = C || window.event, C.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(C.touches, (pt) => {
        this._pointerPositions.push({
          id: pt.identifier,
          x: (pt.clientX - P.left) / P.scaleX,
          y: (pt.clientY - P.top) / P.scaleY
        });
      }), Array.prototype.forEach.call(C.changedTouches || C.touches, (pt) => {
        this._changedPointerPositions.push({
          id: pt.identifier,
          x: (pt.clientX - P.left) / P.scaleX,
          y: (pt.clientY - P.top) / P.scaleY
        });
      })) : (G = (C.clientX - P.left) / P.scaleX, bt = (C.clientY - P.top) / P.scaleY, this.pointerPos = {
        x: G,
        y: bt
      }, this._pointerPositions = [{ x: G, y: bt, id: t.Util._getFirstPointerId(C) }], this._changedPointerPositions = [
        { x: G, y: bt, id: t.Util._getFirstPointerId(C) }
      ]);
    }
    _setPointerPosition(C) {
      t.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(C);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      var C = this.content.getBoundingClientRect();
      return {
        top: C.top,
        left: C.left,
        scaleX: C.width / this.content.clientWidth || 1,
        scaleY: C.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      if (this.bufferCanvas = new n.SceneCanvas({
        width: this.width(),
        height: this.height()
      }), this.bufferHitCanvas = new n.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      }), !!i.Konva.isBrowser) {
        var C = this.container();
        if (!C)
          throw "Stage has no container. A container is required.";
        C.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), C.appendChild(this.content), this._resizeDOM();
      }
    }
    cache() {
      return t.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(C) {
        C.batchDraw();
      }), this;
    }
  }
  r.Stage = ts, ts.prototype.nodeType = c, (0, a._registerNode)(ts), e.Factory.addGetterSetter(ts, "container");
})(pp);
var kn = {}, Yt = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Shape = r.shapes = void 0;
  const t = rt, e = Tt, s = et, i = xt, n = U, o = rt, a = ve;
  var l = "hasShadow", c = "shadowRGBA", h = "patternImage", d = "linearGradient", u = "radialGradient";
  let p;
  function f() {
    return p || (p = e.Util.createCanvasElement().getContext("2d"), p);
  }
  r.shapes = {};
  function m(M) {
    const E = this.attrs.fillRule;
    E ? M.fill(E) : M.fill();
  }
  function _(M) {
    M.stroke();
  }
  function y(M) {
    M.fill();
  }
  function k(M) {
    M.stroke();
  }
  function g() {
    this._clearCache(l);
  }
  function v() {
    this._clearCache(c);
  }
  function b() {
    this._clearCache(h);
  }
  function w() {
    this._clearCache(d);
  }
  function x() {
    this._clearCache(u);
  }
  class S extends i.Node {
    constructor(E) {
      super(E);
      let T;
      for (; T = e.Util.getRandomColor(), !(T && !(T in r.shapes)); )
        ;
      this.colorKey = T, r.shapes[T] = this;
    }
    getContext() {
      return e.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
    }
    getCanvas() {
      return e.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(l, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(h, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        var E = f();
        const T = E.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (T && T.setTransform) {
          const I = new e.Transform();
          I.translate(this.fillPatternX(), this.fillPatternY()), I.rotate(t.Konva.getAngle(this.fillPatternRotation())), I.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), I.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const D = I.getMatrix(), j = typeof DOMMatrix > "u" ? {
            a: D[0],
            b: D[1],
            c: D[2],
            d: D[3],
            e: D[4],
            f: D[5]
          } : new DOMMatrix(D);
          T.setTransform(j);
        }
        return T;
      }
    }
    _getLinearGradient() {
      return this._getCache(d, this.__getLinearGradient);
    }
    __getLinearGradient() {
      var E = this.fillLinearGradientColorStops();
      if (E) {
        for (var T = f(), I = this.fillLinearGradientStartPoint(), D = this.fillLinearGradientEndPoint(), j = T.createLinearGradient(I.x, I.y, D.x, D.y), $ = 0; $ < E.length; $ += 2)
          j.addColorStop(E[$], E[$ + 1]);
        return j;
      }
    }
    _getRadialGradient() {
      return this._getCache(u, this.__getRadialGradient);
    }
    __getRadialGradient() {
      var E = this.fillRadialGradientColorStops();
      if (E) {
        for (var T = f(), I = this.fillRadialGradientStartPoint(), D = this.fillRadialGradientEndPoint(), j = T.createRadialGradient(I.x, I.y, this.fillRadialGradientStartRadius(), D.x, D.y, this.fillRadialGradientEndRadius()), $ = 0; $ < E.length; $ += 2)
          j.addColorStop(E[$], E[$ + 1]);
        return j;
      }
    }
    getShadowRGBA() {
      return this._getCache(c, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (this.hasShadow()) {
        var E = e.Util.colorToRGBA(this.shadowColor());
        if (E)
          return "rgba(" + E.r + "," + E.g + "," + E.b + "," + E.a * (this.shadowOpacity() || 1) + ")";
      }
    }
    hasFill() {
      return this._calculate("hasFill", [
        "fillEnabled",
        "fill",
        "fillPatternImage",
        "fillLinearGradientColorStops",
        "fillRadialGradientColorStops"
      ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
    }
    hasStroke() {
      return this._calculate("hasStroke", [
        "strokeEnabled",
        "strokeWidth",
        "stroke",
        "strokeLinearGradientColorStops"
      ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
    }
    hasHitStroke() {
      const E = this.hitStrokeWidth();
      return E === "auto" ? this.hasStroke() : this.strokeEnabled() && !!E;
    }
    intersects(E) {
      var T = this.getStage();
      if (!T)
        return !1;
      const I = T.bufferHitCanvas;
      return I.getContext().clear(), this.drawHit(I, void 0, !0), I.context.getImageData(Math.round(E.x), Math.round(E.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return i.Node.prototype.destroy.call(this), delete r.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(E) {
      var T;
      if (!((T = this.attrs.perfectDrawEnabled) !== null && T !== void 0 ? T : !0))
        return !1;
      const D = E || this.hasFill(), j = this.hasStroke(), $ = this.getAbsoluteOpacity() !== 1;
      if (D && j && $)
        return !0;
      const st = this.hasShadow(), it = this.shadowForStrokeEnabled();
      return !!(D && j && st && it);
    }
    setStrokeHitEnabled(E) {
      e.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), E ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      var E = this.size();
      return {
        x: this._centroid ? -E.width / 2 : 0,
        y: this._centroid ? -E.height / 2 : 0,
        width: E.width,
        height: E.height
      };
    }
    getClientRect(E = {}) {
      const T = E.skipTransform, I = E.relativeTo, D = this.getSelfRect(), $ = !E.skipStroke && this.hasStroke() && this.strokeWidth() || 0, st = D.width + $, it = D.height + $, lt = !E.skipShadow && this.hasShadow(), Ot = lt ? this.shadowOffsetX() : 0, z = lt ? this.shadowOffsetY() : 0, H = st + Math.abs(Ot), ut = it + Math.abs(z), yt = lt && this.shadowBlur() || 0, vt = H + yt * 2, ts = ut + yt * 2, Ut = {
        width: vt,
        height: ts,
        x: -($ / 2 + yt) + Math.min(Ot, 0) + D.x,
        y: -($ / 2 + yt) + Math.min(z, 0) + D.y
      };
      return T ? Ut : this._transformedRect(Ut, I);
    }
    drawScene(E, T, I) {
      var D = this.getLayer(), j = E || D.getCanvas(), $ = j.getContext(), st = this._getCanvasCache(), it = this.getSceneFunc(), lt = this.hasShadow(), Ot, z, H = j.isCache, ut = T === this;
      if (!this.isVisible() && !ut)
        return this;
      if (st) {
        $.save();
        var yt = this.getAbsoluteTransform(T).getMatrix();
        return $.transform(yt[0], yt[1], yt[2], yt[3], yt[4], yt[5]), this._drawCachedSceneCanvas($), $.restore(), this;
      }
      if (!it)
        return this;
      if ($.save(), this._useBufferCanvas() && !H) {
        Ot = this.getStage();
        const Ut = I || Ot.bufferCanvas;
        z = Ut.getContext(), z.clear(), z.save(), z._applyLineJoin(this);
        var vt = this.getAbsoluteTransform(T).getMatrix();
        z.transform(vt[0], vt[1], vt[2], vt[3], vt[4], vt[5]), it.call(this, z, this), z.restore();
        var ts = Ut.pixelRatio;
        lt && $._applyShadow(this), $._applyOpacity(this), $._applyGlobalCompositeOperation(this), $.drawImage(Ut._canvas, 0, 0, Ut.width / ts, Ut.height / ts);
      } else {
        if ($._applyLineJoin(this), !ut) {
          var vt = this.getAbsoluteTransform(T).getMatrix();
          $.transform(vt[0], vt[1], vt[2], vt[3], vt[4], vt[5]), $._applyOpacity(this), $._applyGlobalCompositeOperation(this);
        }
        lt && $._applyShadow(this), it.call(this, $, this);
      }
      return $.restore(), this;
    }
    drawHit(E, T, I = !1) {
      if (!this.shouldDrawHit(T, I))
        return this;
      var D = this.getLayer(), j = E || D.hitCanvas, $ = j && j.getContext(), st = this.hitFunc() || this.sceneFunc(), it = this._getCanvasCache(), lt = it && it.hit;
      if (this.colorKey || e.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), lt) {
        $.save();
        var Ot = this.getAbsoluteTransform(T).getMatrix();
        return $.transform(Ot[0], Ot[1], Ot[2], Ot[3], Ot[4], Ot[5]), this._drawCachedHitCanvas($), $.restore(), this;
      }
      if (!st)
        return this;
      if ($.save(), $._applyLineJoin(this), !(this === T)) {
        var H = this.getAbsoluteTransform(T).getMatrix();
        $.transform(H[0], H[1], H[2], H[3], H[4], H[5]);
      }
      return st.call(this, $, this), $.restore(), this;
    }
    drawHitFromCache(E = 0) {
      var T = this._getCanvasCache(), I = this._getCachedSceneCanvas(), D = T.hit, j = D.getContext(), $ = D.getWidth(), st = D.getHeight(), it, lt, Ot, z, H, ut;
      j.clear(), j.drawImage(I._canvas, 0, 0, $, st);
      try {
        for (it = j.getImageData(0, 0, $, st), lt = it.data, Ot = lt.length, z = e.Util._hexToRgb(this.colorKey), H = 0; H < Ot; H += 4)
          ut = lt[H + 3], ut > E ? (lt[H] = z.r, lt[H + 1] = z.g, lt[H + 2] = z.b, lt[H + 3] = 255) : lt[H + 3] = 0;
        j.putImageData(it, 0, 0);
      } catch (yt) {
        e.Util.error("Unable to draw hit graph from cached scene canvas. " + yt.message);
      }
      return this;
    }
    hasPointerCapture(E) {
      return a.hasPointerCapture(E, this);
    }
    setPointerCapture(E) {
      a.setPointerCapture(E, this);
    }
    releaseCapture(E) {
      a.releaseCapture(E, this);
    }
  }
  r.Shape = S, S.prototype._fillFunc = m, S.prototype._strokeFunc = _, S.prototype._fillFuncHit = y, S.prototype._strokeFuncHit = k, S.prototype._centroid = !1, S.prototype.nodeType = "Shape", (0, o._registerNode)(S), S.prototype.eventListeners = {}, S.prototype.on.call(S.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", g), S.prototype.on.call(S.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", v), S.prototype.on.call(S.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", b), S.prototype.on.call(S.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", w), S.prototype.on.call(S.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", x), s.Factory.addGetterSetter(S, "stroke", void 0, (0, n.getStringOrGradientValidator)()), s.Factory.addGetterSetter(S, "strokeWidth", 2, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "fillAfterStrokeEnabled", !1), s.Factory.addGetterSetter(S, "hitStrokeWidth", "auto", (0, n.getNumberOrAutoValidator)()), s.Factory.addGetterSetter(S, "strokeHitEnabled", !0, (0, n.getBooleanValidator)()), s.Factory.addGetterSetter(S, "perfectDrawEnabled", !0, (0, n.getBooleanValidator)()), s.Factory.addGetterSetter(S, "shadowForStrokeEnabled", !0, (0, n.getBooleanValidator)()), s.Factory.addGetterSetter(S, "lineJoin"), s.Factory.addGetterSetter(S, "lineCap"), s.Factory.addGetterSetter(S, "sceneFunc"), s.Factory.addGetterSetter(S, "hitFunc"), s.Factory.addGetterSetter(S, "dash"), s.Factory.addGetterSetter(S, "dashOffset", 0, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "shadowColor", void 0, (0, n.getStringValidator)()), s.Factory.addGetterSetter(S, "shadowBlur", 0, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "shadowOpacity", 1, (0, n.getNumberValidator)()), s.Factory.addComponentsGetterSetter(S, "shadowOffset", ["x", "y"]), s.Factory.addGetterSetter(S, "shadowOffsetX", 0, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "shadowOffsetY", 0, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "fillPatternImage"), s.Factory.addGetterSetter(S, "fill", void 0, (0, n.getStringOrGradientValidator)()), s.Factory.addGetterSetter(S, "fillPatternX", 0, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "fillPatternY", 0, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "fillLinearGradientColorStops"), s.Factory.addGetterSetter(S, "strokeLinearGradientColorStops"), s.Factory.addGetterSetter(S, "fillRadialGradientStartRadius", 0), s.Factory.addGetterSetter(S, "fillRadialGradientEndRadius", 0), s.Factory.addGetterSetter(S, "fillRadialGradientColorStops"), s.Factory.addGetterSetter(S, "fillPatternRepeat", "repeat"), s.Factory.addGetterSetter(S, "fillEnabled", !0), s.Factory.addGetterSetter(S, "strokeEnabled", !0), s.Factory.addGetterSetter(S, "shadowEnabled", !0), s.Factory.addGetterSetter(S, "dashEnabled", !0), s.Factory.addGetterSetter(S, "strokeScaleEnabled", !0), s.Factory.addGetterSetter(S, "fillPriority", "color"), s.Factory.addComponentsGetterSetter(S, "fillPatternOffset", ["x", "y"]), s.Factory.addGetterSetter(S, "fillPatternOffsetX", 0, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "fillPatternOffsetY", 0, (0, n.getNumberValidator)()), s.Factory.addComponentsGetterSetter(S, "fillPatternScale", ["x", "y"]), s.Factory.addGetterSetter(S, "fillPatternScaleX", 1, (0, n.getNumberValidator)()), s.Factory.addGetterSetter(S, "fillPatternScaleY", 1, (0, n.getNumberValidator)()), s.Factory.addComponentsGetterSetter(S, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), s.Factory.addComponentsGetterSetter(S, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), s.Factory.addGetterSetter(S, "fillLinearGradientStartPointX", 0), s.Factory.addGetterSetter(S, "strokeLinearGradientStartPointX", 0), s.Factory.addGetterSetter(S, "fillLinearGradientStartPointY", 0), s.Factory.addGetterSetter(S, "strokeLinearGradientStartPointY", 0), s.Factory.addComponentsGetterSetter(S, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), s.Factory.addComponentsGetterSetter(S, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), s.Factory.addGetterSetter(S, "fillLinearGradientEndPointX", 0), s.Factory.addGetterSetter(S, "strokeLinearGradientEndPointX", 0), s.Factory.addGetterSetter(S, "fillLinearGradientEndPointY", 0), s.Factory.addGetterSetter(S, "strokeLinearGradientEndPointY", 0), s.Factory.addComponentsGetterSetter(S, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), s.Factory.addGetterSetter(S, "fillRadialGradientStartPointX", 0), s.Factory.addGetterSetter(S, "fillRadialGradientStartPointY", 0), s.Factory.addComponentsGetterSetter(S, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), s.Factory.addGetterSetter(S, "fillRadialGradientEndPointX", 0), s.Factory.addGetterSetter(S, "fillRadialGradientEndPointY", 0), s.Factory.addGetterSetter(S, "fillPatternRotation", 0), s.Factory.addGetterSetter(S, "fillRule", void 0, (0, n.getStringValidator)()), s.Factory.backCompat(S, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
})(Yt);
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.Layer = void 0;
const is = Tt, ll = Er, Lr = xt, Yc = et, yd = $e, Fy = U, Ly = Yt, By = rt;
var $y = "#", Uy = "beforeDraw", Gy = "draw", _p = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], Vy = _p.length;
class pi extends ll.Container {
  constructor(t) {
    super(t), this.canvas = new yd.SceneCanvas(), this.hitCanvas = new yd.HitCanvas({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(t) {
    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this;
  }
  setZIndex(t) {
    super.setZIndex(t);
    var e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), t < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[t + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    Lr.Node.prototype.moveToTop.call(this);
    var t = this.getStage();
    return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    var t = Lr.Node.prototype.moveUp.call(this);
    if (!t)
      return !1;
    var e = this.getStage();
    return !e || !e.content ? !1 : (e.content.removeChild(this.getNativeCanvasElement()), this.index < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[this.index + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (Lr.Node.prototype.moveDown.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (Lr.Node.prototype.moveToBottom.call(this)) {
      var t = this.getStage();
      if (t) {
        var e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var t = this.getNativeCanvasElement();
    return Lr.Node.prototype.remove.call(this), t && t.parentNode && is.Util._isInDocument(t) && t.parentNode.removeChild(t), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: e }) {
    return this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e), this._setSmoothEnabled(), this;
  }
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" && e !== "Shape" && is.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return t = t || {}, t.width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = t.x !== void 0 ? t.x : this.x(), t.y = t.y !== void 0 ? t.y : this.y(), Lr.Node.prototype._toKonvaCanvas.call(this, t);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    is.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    is.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, is.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible())
      return null;
    for (var e = 1, s = !1; ; ) {
      for (let i = 0; i < Vy; i++) {
        const n = _p[i], o = this._getIntersection({
          x: t.x + n.x * e,
          y: t.y + n.y * e
        }), a = o.shape;
        if (a)
          return a;
        if (s = !!o.antialiased, !o.antialiased)
          break;
      }
      if (s)
        e += 1;
      else
        return null;
    }
  }
  _getIntersection(t) {
    const e = this.hitCanvas.pixelRatio, s = this.hitCanvas.context.getImageData(Math.round(t.x * e), Math.round(t.y * e), 1, 1).data, i = s[3];
    if (i === 255) {
      const n = is.Util._rgbToHex(s[0], s[1], s[2]), o = Ly.shapes[$y + n];
      return o ? {
        shape: o
      } : {
        antialiased: !0
      };
    } else if (i > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(t, e) {
    var s = this.getLayer(), i = t || s && s.getCanvas();
    return this._fire(Uy, {
      node: this
    }), this.clearBeforeDraw() && i.getContext().clear(), ll.Container.prototype.drawScene.call(this, i, e), this._fire(Gy, {
      node: this
    }), this;
  }
  drawHit(t, e) {
    var s = this.getLayer(), i = t || s && s.hitCanvas;
    return s && s.clearBeforeDraw() && s.getHitCanvas().getContext().clear(), ll.Container.prototype.drawHit.call(this, i, e), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    is.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t);
  }
  getHitGraphEnabled(t) {
    return is.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var t = this.parent, e = !!this.hitCanvas._canvas.parentNode;
      e ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas);
    }
  }
  destroy() {
    return is.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
}
kn.Layer = pi;
pi.prototype.nodeType = "Layer";
(0, By._registerNode)(pi);
Yc.Factory.addGetterSetter(pi, "imageSmoothingEnabled", !0);
Yc.Factory.addGetterSetter(pi, "clearBeforeDraw", !0);
Yc.Factory.addGetterSetter(pi, "hitGraphEnabled", !0, (0, Fy.getBooleanValidator)());
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.FastLayer = void 0;
const jy = Tt, zy = kn, Hy = rt;
class qc extends zy.Layer {
  constructor(t) {
    super(t), this.listening(!1), jy.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
ea.FastLayer = qc;
qc.prototype.nodeType = "FastLayer";
(0, Hy._registerNode)(qc);
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.Group = void 0;
const Wy = Tt, Yy = Er, qy = rt;
class Kc extends Yy.Container {
  _validateAdd(t) {
    var e = t.getType();
    e !== "Group" && e !== "Shape" && Wy.Util.throw("You may only add groups and shapes to groups.");
  }
}
gi.Group = Kc;
Kc.prototype.nodeType = "Group";
(0, qy._registerNode)(Kc);
var mi = {};
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.Animation = void 0;
const cl = rt, wd = Tt, hl = function() {
  return cl.glob.performance && cl.glob.performance.now ? function() {
    return cl.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class Ye {
  constructor(t, e) {
    this.id = Ye.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: hl(),
      frameRate: 0
    }, this.func = t, this.setLayers(e);
  }
  setLayers(t) {
    let e = [];
    return t && (e = Array.isArray(t) ? t : [t]), this.layers = e, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(t) {
    const e = this.layers, s = e.length;
    for (let i = 0; i < s; i++)
      if (e[i]._id === t._id)
        return !1;
    return this.layers.push(t), !0;
  }
  isRunning() {
    const e = Ye.animations, s = e.length;
    for (let i = 0; i < s; i++)
      if (e[i].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = hl(), Ye._addAnimation(this), this;
  }
  stop() {
    return Ye._removeAnimation(this), this;
  }
  _updateFrameObject(t) {
    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(t) {
    this.animations.push(t), this._handleAnimation();
  }
  static _removeAnimation(t) {
    const e = t.id, s = this.animations, i = s.length;
    for (let n = 0; n < i; n++)
      if (s[n].id === e) {
        this.animations.splice(n, 1);
        break;
      }
  }
  static _runFrames() {
    const t = {}, e = this.animations;
    for (let s = 0; s < e.length; s++) {
      const i = e[s], n = i.layers, o = i.func;
      i._updateFrameObject(hl());
      const a = n.length;
      let l;
      if (o ? l = o.call(i, i.frame) !== !1 : l = !0, !!l)
        for (let c = 0; c < a; c++) {
          const h = n[c];
          h._id !== void 0 && (t[h._id] = h);
        }
    }
    for (let s in t)
      t.hasOwnProperty(s) && t[s].batchDraw();
  }
  static _animationLoop() {
    const t = Ye;
    t.animations.length ? (t._runFrames(), wd.Util.requestAnimFrame(t._animationLoop)) : t.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, wd.Util.requestAnimFrame(this._animationLoop));
  }
}
mi.Animation = Ye;
Ye.animations = [];
Ye.animIdCounter = 0;
Ye.animRunning = !1;
var vp = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Easings = r.Tween = void 0;
  const t = Tt, e = mi, s = xt, i = rt;
  var n = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, o = 1, a = 2, l = 3, c = 0, h = ["fill", "stroke", "shadowColor"];
  class d {
    constructor(f, m, _, y, k, g, v) {
      this.prop = f, this.propFunc = m, this.begin = y, this._pos = y, this.duration = g, this._change = 0, this.prevPos = 0, this.yoyo = v, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = _, this._change = k - this.begin, this.pause();
    }
    fire(f) {
      var m = this[f];
      m && m();
    }
    setTime(f) {
      f > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : f < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = f, this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(f) {
      this.prevPos = this._pos, this.propFunc(f), this._pos = f;
    }
    getPosition(f) {
      return f === void 0 && (f = this._time), this.func(f, this.begin, this._change, this.duration);
    }
    play() {
      this.state = a, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
    }
    reverse() {
      this.state = l, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
    }
    seek(f) {
      this.pause(), this._time = f, this.update(), this.fire("onSeek");
    }
    reset() {
      this.pause(), this._time = 0, this.update(), this.fire("onReset");
    }
    finish() {
      this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
    }
    onEnterFrame() {
      var f = this.getTimer() - this._startTime;
      this.state === a ? this.setTime(f) : this.state === l && this.setTime(this.duration - f);
    }
    pause() {
      this.state = o, this.fire("onPause");
    }
    getTimer() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
  class u {
    constructor(f) {
      var m = this, _ = f.node, y = _._id, k, g = f.easing || r.Easings.Linear, v = !!f.yoyo, b;
      typeof f.duration > "u" ? k = 0.3 : f.duration === 0 ? k = 1e-3 : k = f.duration, this.node = _, this._id = c++;
      var w = _.getLayer() || (_ instanceof i.Konva.Stage ? _.getLayers() : null);
      w || t.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new e.Animation(function() {
        m.tween.onEnterFrame();
      }, w), this.tween = new d(b, function(x) {
        m._tweenFunc(x);
      }, g, 0, 1, k * 1e3, v), this._addListeners(), u.attrs[y] || (u.attrs[y] = {}), u.attrs[y][this._id] || (u.attrs[y][this._id] = {}), u.tweens[y] || (u.tweens[y] = {});
      for (b in f)
        n[b] === void 0 && this._addAttr(b, f[b]);
      this.reset(), this.onFinish = f.onFinish, this.onReset = f.onReset, this.onUpdate = f.onUpdate;
    }
    _addAttr(f, m) {
      var _ = this.node, y = _._id, k, g, v, b, w, x, S, M;
      if (v = u.tweens[y][f], v && delete u.attrs[y][v][f], k = _.getAttr(f), t.Util._isArray(m))
        if (g = [], w = Math.max(m.length, k.length), f === "points" && m.length !== k.length && (m.length > k.length ? (S = k, k = t.Util._prepareArrayForTween(k, m, _.closed())) : (x = m, m = t.Util._prepareArrayForTween(m, k, _.closed()))), f.indexOf("fill") === 0)
          for (b = 0; b < w; b++)
            if (b % 2 === 0)
              g.push(m[b] - k[b]);
            else {
              var E = t.Util.colorToRGBA(k[b]);
              M = t.Util.colorToRGBA(m[b]), k[b] = E, g.push({
                r: M.r - E.r,
                g: M.g - E.g,
                b: M.b - E.b,
                a: M.a - E.a
              });
            }
        else
          for (b = 0; b < w; b++)
            g.push(m[b] - k[b]);
      else
        h.indexOf(f) !== -1 ? (k = t.Util.colorToRGBA(k), M = t.Util.colorToRGBA(m), g = {
          r: M.r - k.r,
          g: M.g - k.g,
          b: M.b - k.b,
          a: M.a - k.a
        }) : g = m - k;
      u.attrs[y][this._id][f] = {
        start: k,
        diff: g,
        end: m,
        trueEnd: x,
        trueStart: S
      }, u.tweens[y][f] = this._id;
    }
    _tweenFunc(f) {
      var m = this.node, _ = u.attrs[m._id][this._id], y, k, g, v, b, w, x, S;
      for (y in _) {
        if (k = _[y], g = k.start, v = k.diff, S = k.end, t.Util._isArray(g))
          if (b = [], x = Math.max(g.length, S.length), y.indexOf("fill") === 0)
            for (w = 0; w < x; w++)
              w % 2 === 0 ? b.push((g[w] || 0) + v[w] * f) : b.push("rgba(" + Math.round(g[w].r + v[w].r * f) + "," + Math.round(g[w].g + v[w].g * f) + "," + Math.round(g[w].b + v[w].b * f) + "," + (g[w].a + v[w].a * f) + ")");
          else
            for (w = 0; w < x; w++)
              b.push((g[w] || 0) + v[w] * f);
        else
          h.indexOf(y) !== -1 ? b = "rgba(" + Math.round(g.r + v.r * f) + "," + Math.round(g.g + v.g * f) + "," + Math.round(g.b + v.b * f) + "," + (g.a + v.a * f) + ")" : b = g + v * f;
        m.setAttr(y, b);
      }
    }
    _addListeners() {
      this.tween.onPlay = () => {
        this.anim.start();
      }, this.tween.onReverse = () => {
        this.anim.start();
      }, this.tween.onPause = () => {
        this.anim.stop();
      }, this.tween.onFinish = () => {
        var f = this.node, m = u.attrs[f._id][this._id];
        m.points && m.points.trueEnd && f.setAttr("points", m.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        var f = this.node, m = u.attrs[f._id][this._id];
        m.points && m.points.trueStart && f.points(m.points.trueStart), this.onReset && this.onReset();
      }, this.tween.onUpdate = () => {
        this.onUpdate && this.onUpdate.call(this);
      };
    }
    play() {
      return this.tween.play(), this;
    }
    reverse() {
      return this.tween.reverse(), this;
    }
    reset() {
      return this.tween.reset(), this;
    }
    seek(f) {
      return this.tween.seek(f * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      var f = this.node._id, m = this._id, _ = u.tweens[f], y;
      this.pause();
      for (y in _)
        delete u.tweens[f][y];
      delete u.attrs[f][m];
    }
  }
  r.Tween = u, u.attrs = {}, u.tweens = {}, s.Node.prototype.to = function(p) {
    var f = p.onFinish;
    p.node = this, p.onFinish = function() {
      this.destroy(), f && f();
    };
    var m = new u(p);
    m.play();
  }, r.Easings = {
    BackEaseIn(p, f, m, _) {
      var y = 1.70158;
      return m * (p /= _) * p * ((y + 1) * p - y) + f;
    },
    BackEaseOut(p, f, m, _) {
      var y = 1.70158;
      return m * ((p = p / _ - 1) * p * ((y + 1) * p + y) + 1) + f;
    },
    BackEaseInOut(p, f, m, _) {
      var y = 1.70158;
      return (p /= _ / 2) < 1 ? m / 2 * (p * p * (((y *= 1.525) + 1) * p - y)) + f : m / 2 * ((p -= 2) * p * (((y *= 1.525) + 1) * p + y) + 2) + f;
    },
    ElasticEaseIn(p, f, m, _, y, k) {
      var g = 0;
      return p === 0 ? f : (p /= _) === 1 ? f + m : (k || (k = _ * 0.3), !y || y < Math.abs(m) ? (y = m, g = k / 4) : g = k / (2 * Math.PI) * Math.asin(m / y), -(y * Math.pow(2, 10 * (p -= 1)) * Math.sin((p * _ - g) * (2 * Math.PI) / k)) + f);
    },
    ElasticEaseOut(p, f, m, _, y, k) {
      var g = 0;
      return p === 0 ? f : (p /= _) === 1 ? f + m : (k || (k = _ * 0.3), !y || y < Math.abs(m) ? (y = m, g = k / 4) : g = k / (2 * Math.PI) * Math.asin(m / y), y * Math.pow(2, -10 * p) * Math.sin((p * _ - g) * (2 * Math.PI) / k) + m + f);
    },
    ElasticEaseInOut(p, f, m, _, y, k) {
      var g = 0;
      return p === 0 ? f : (p /= _ / 2) === 2 ? f + m : (k || (k = _ * (0.3 * 1.5)), !y || y < Math.abs(m) ? (y = m, g = k / 4) : g = k / (2 * Math.PI) * Math.asin(m / y), p < 1 ? -0.5 * (y * Math.pow(2, 10 * (p -= 1)) * Math.sin((p * _ - g) * (2 * Math.PI) / k)) + f : y * Math.pow(2, -10 * (p -= 1)) * Math.sin((p * _ - g) * (2 * Math.PI) / k) * 0.5 + m + f);
    },
    BounceEaseOut(p, f, m, _) {
      return (p /= _) < 1 / 2.75 ? m * (7.5625 * p * p) + f : p < 2 / 2.75 ? m * (7.5625 * (p -= 1.5 / 2.75) * p + 0.75) + f : p < 2.5 / 2.75 ? m * (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375) + f : m * (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375) + f;
    },
    BounceEaseIn(p, f, m, _) {
      return m - r.Easings.BounceEaseOut(_ - p, 0, m, _) + f;
    },
    BounceEaseInOut(p, f, m, _) {
      return p < _ / 2 ? r.Easings.BounceEaseIn(p * 2, 0, m, _) * 0.5 + f : r.Easings.BounceEaseOut(p * 2 - _, 0, m, _) * 0.5 + m * 0.5 + f;
    },
    EaseIn(p, f, m, _) {
      return m * (p /= _) * p + f;
    },
    EaseOut(p, f, m, _) {
      return -m * (p /= _) * (p - 2) + f;
    },
    EaseInOut(p, f, m, _) {
      return (p /= _ / 2) < 1 ? m / 2 * p * p + f : -m / 2 * (--p * (p - 2) - 1) + f;
    },
    StrongEaseIn(p, f, m, _) {
      return m * (p /= _) * p * p * p * p + f;
    },
    StrongEaseOut(p, f, m, _) {
      return m * ((p = p / _ - 1) * p * p * p * p + 1) + f;
    },
    StrongEaseInOut(p, f, m, _) {
      return (p /= _ / 2) < 1 ? m / 2 * p * p * p * p * p + f : m / 2 * ((p -= 2) * p * p * p * p + 2) + f;
    },
    Linear(p, f, m, _) {
      return m * p / _ + f;
    }
  };
})(vp);
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.Konva = void 0;
  const t = rt, e = Tt, s = xt, i = Er, n = pp, o = kn, a = ea, l = gi, c = Qo, h = Yt, d = mi, u = vp, p = cs, f = $e;
  r.Konva = e.Util._assign(t.Konva, {
    Util: e.Util,
    Transform: e.Transform,
    Node: s.Node,
    Container: i.Container,
    Stage: n.Stage,
    stages: n.stages,
    Layer: o.Layer,
    FastLayer: a.FastLayer,
    Group: l.Group,
    DD: c.DD,
    Shape: h.Shape,
    shapes: h.shapes,
    Animation: d.Animation,
    Tween: u.Tween,
    Easings: u.Easings,
    Context: p.Context,
    Canvas: f.Canvas
  }), r.default = r.Konva;
})(hp);
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.Arc = void 0;
const ra = et, Ky = Yt, bd = rt, ia = U, Xy = rt;
class bs extends Ky.Shape {
  _sceneFunc(t) {
    var e = bd.Konva.getAngle(this.angle()), s = this.clockwise();
    t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, e, s), t.arc(0, 0, this.innerRadius(), e, 0, !s), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
  getSelfRect() {
    const t = this.innerRadius(), e = this.outerRadius(), s = this.clockwise(), i = bd.Konva.getAngle(s ? 360 - this.angle() : this.angle()), n = Math.cos(Math.min(i, Math.PI)), o = 1, a = Math.sin(Math.min(Math.max(Math.PI, i), 3 * Math.PI / 2)), l = Math.sin(Math.min(i, Math.PI / 2)), c = n * (n > 0 ? t : e), h = o * e, d = a * (a > 0 ? t : e), u = l * (l > 0 ? e : t);
    return {
      x: c,
      y: s ? -1 * u : d,
      width: h - c,
      height: u - d
    };
  }
}
sa.Arc = bs;
bs.prototype._centroid = !0;
bs.prototype.className = "Arc";
bs.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Xy._registerNode)(bs);
ra.Factory.addGetterSetter(bs, "innerRadius", 0, (0, ia.getNumberValidator)());
ra.Factory.addGetterSetter(bs, "outerRadius", 0, (0, ia.getNumberValidator)());
ra.Factory.addGetterSetter(bs, "angle", 0, (0, ia.getNumberValidator)());
ra.Factory.addGetterSetter(bs, "clockwise", !1, (0, ia.getBooleanValidator)());
var na = {}, xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.Line = void 0;
const oa = et, Zy = Yt, yp = U, Jy = rt;
function ql(r, t, e, s, i, n, o) {
  var a = Math.sqrt(Math.pow(e - r, 2) + Math.pow(s - t, 2)), l = Math.sqrt(Math.pow(i - e, 2) + Math.pow(n - s, 2)), c = o * a / (a + l), h = o * l / (a + l), d = e - c * (i - r), u = s - c * (n - t), p = e + h * (i - r), f = s + h * (n - t);
  return [d, u, p, f];
}
function Sd(r, t) {
  var e = r.length, s = [], i, n;
  for (i = 2; i < e - 2; i += 2)
    n = ql(r[i - 2], r[i - 1], r[i], r[i + 1], r[i + 2], r[i + 3], t), !isNaN(n[0]) && (s.push(n[0]), s.push(n[1]), s.push(r[i]), s.push(r[i + 1]), s.push(n[2]), s.push(n[3]));
  return s;
}
class Xs extends Zy.Shape {
  constructor(t) {
    super(t), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(t) {
    var e = this.points(), s = e.length, i = this.tension(), n = this.closed(), o = this.bezier(), a, l, c;
    if (s) {
      if (t.beginPath(), t.moveTo(e[0], e[1]), i !== 0 && s > 4) {
        for (a = this.getTensionPoints(), l = a.length, c = n ? 0 : 4, n || t.quadraticCurveTo(a[0], a[1], a[2], a[3]); c < l - 2; )
          t.bezierCurveTo(a[c++], a[c++], a[c++], a[c++], a[c++], a[c++]);
        n || t.quadraticCurveTo(a[l - 2], a[l - 1], e[s - 2], e[s - 1]);
      } else if (o)
        for (c = 2; c < s; )
          t.bezierCurveTo(e[c++], e[c++], e[c++], e[c++], e[c++], e[c++]);
      else
        for (c = 2; c < s; c += 2)
          t.lineTo(e[c], e[c + 1]);
      n ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : Sd(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var t = this.points(), e = t.length, s = this.tension(), i = ql(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], s), n = ql(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], s), o = Sd(t, s), a = [i[2], i[3]].concat(o).concat([
      n[0],
      n[1],
      t[e - 2],
      t[e - 1],
      n[2],
      n[3],
      i[0],
      i[1],
      t[0],
      t[1]
    ]);
    return a;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var t = this.points();
    if (t.length < 4)
      return {
        x: t[0] || 0,
        y: t[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? t = [
      t[0],
      t[1],
      ...this._getTensionPoints(),
      t[t.length - 2],
      t[t.length - 1]
    ] : t = this.points();
    for (var e = t[0], s = t[0], i = t[1], n = t[1], o, a, l = 0; l < t.length / 2; l++)
      o = t[l * 2], a = t[l * 2 + 1], e = Math.min(e, o), s = Math.max(s, o), i = Math.min(i, a), n = Math.max(n, a);
    return {
      x: e,
      y: i,
      width: s - e,
      height: n - i
    };
  }
}
xn.Line = Xs;
Xs.prototype.className = "Line";
Xs.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, Jy._registerNode)(Xs);
oa.Factory.addGetterSetter(Xs, "closed", !1);
oa.Factory.addGetterSetter(Xs, "bezier", !1);
oa.Factory.addGetterSetter(Xs, "tension", 0, (0, yp.getNumberValidator)());
oa.Factory.addGetterSetter(Xs, "points", [], (0, yp.getNumberArrayValidator)());
var _i = {}, wp = {};
(function(r) {
  Object.defineProperty(r, "__esModule", { value: !0 }), r.t2length = r.getQuadraticArcLength = r.getCubicArcLength = r.binomialCoefficients = r.cValues = r.tValues = void 0, r.tValues = [
    [],
    [],
    [
      -0.5773502691896257,
      0.5773502691896257
    ],
    [
      0,
      -0.7745966692414834,
      0.7745966692414834
    ],
    [
      -0.33998104358485626,
      0.33998104358485626,
      -0.8611363115940526,
      0.8611363115940526
    ],
    [
      0,
      -0.5384693101056831,
      0.5384693101056831,
      -0.906179845938664,
      0.906179845938664
    ],
    [
      0.6612093864662645,
      -0.6612093864662645,
      -0.2386191860831969,
      0.2386191860831969,
      -0.932469514203152,
      0.932469514203152
    ],
    [
      0,
      0.4058451513773972,
      -0.4058451513773972,
      -0.7415311855993945,
      0.7415311855993945,
      -0.9491079123427585,
      0.9491079123427585
    ],
    [
      -0.1834346424956498,
      0.1834346424956498,
      -0.525532409916329,
      0.525532409916329,
      -0.7966664774136267,
      0.7966664774136267,
      -0.9602898564975363,
      0.9602898564975363
    ],
    [
      0,
      -0.8360311073266358,
      0.8360311073266358,
      -0.9681602395076261,
      0.9681602395076261,
      -0.3242534234038089,
      0.3242534234038089,
      -0.6133714327005904,
      0.6133714327005904
    ],
    [
      -0.14887433898163122,
      0.14887433898163122,
      -0.4333953941292472,
      0.4333953941292472,
      -0.6794095682990244,
      0.6794095682990244,
      -0.8650633666889845,
      0.8650633666889845,
      -0.9739065285171717,
      0.9739065285171717
    ],
    [
      0,
      -0.26954315595234496,
      0.26954315595234496,
      -0.5190961292068118,
      0.5190961292068118,
      -0.7301520055740494,
      0.7301520055740494,
      -0.8870625997680953,
      0.8870625997680953,
      -0.978228658146057,
      0.978228658146057
    ],
    [
      -0.1252334085114689,
      0.1252334085114689,
      -0.3678314989981802,
      0.3678314989981802,
      -0.5873179542866175,
      0.5873179542866175,
      -0.7699026741943047,
      0.7699026741943047,
      -0.9041172563704749,
      0.9041172563704749,
      -0.9815606342467192,
      0.9815606342467192
    ],
    [
      0,
      -0.2304583159551348,
      0.2304583159551348,
      -0.44849275103644687,
      0.44849275103644687,
      -0.6423493394403402,
      0.6423493394403402,
      -0.8015780907333099,
      0.8015780907333099,
      -0.9175983992229779,
      0.9175983992229779,
      -0.9841830547185881,
      0.9841830547185881
    ],
    [
      -0.10805494870734367,
      0.10805494870734367,
      -0.31911236892788974,
      0.31911236892788974,
      -0.5152486363581541,
      0.5152486363581541,
      -0.6872929048116855,
      0.6872929048116855,
      -0.827201315069765,
      0.827201315069765,
      -0.9284348836635735,
      0.9284348836635735,
      -0.9862838086968123,
      0.9862838086968123
    ],
    [
      0,
      -0.20119409399743451,
      0.20119409399743451,
      -0.3941513470775634,
      0.3941513470775634,
      -0.5709721726085388,
      0.5709721726085388,
      -0.7244177313601701,
      0.7244177313601701,
      -0.8482065834104272,
      0.8482065834104272,
      -0.937273392400706,
      0.937273392400706,
      -0.9879925180204854,
      0.9879925180204854
    ],
    [
      -0.09501250983763744,
      0.09501250983763744,
      -0.2816035507792589,
      0.2816035507792589,
      -0.45801677765722737,
      0.45801677765722737,
      -0.6178762444026438,
      0.6178762444026438,
      -0.755404408355003,
      0.755404408355003,
      -0.8656312023878318,
      0.8656312023878318,
      -0.9445750230732326,
      0.9445750230732326,
      -0.9894009349916499,
      0.9894009349916499
    ],
    [
      0,
      -0.17848418149584785,
      0.17848418149584785,
      -0.3512317634538763,
      0.3512317634538763,
      -0.5126905370864769,
      0.5126905370864769,
      -0.6576711592166907,
      0.6576711592166907,
      -0.7815140038968014,
      0.7815140038968014,
      -0.8802391537269859,
      0.8802391537269859,
      -0.9506755217687678,
      0.9506755217687678,
      -0.9905754753144174,
      0.9905754753144174
    ],
    [
      -0.0847750130417353,
      0.0847750130417353,
      -0.2518862256915055,
      0.2518862256915055,
      -0.41175116146284263,
      0.41175116146284263,
      -0.5597708310739475,
      0.5597708310739475,
      -0.6916870430603532,
      0.6916870430603532,
      -0.8037049589725231,
      0.8037049589725231,
      -0.8926024664975557,
      0.8926024664975557,
      -0.9558239495713977,
      0.9558239495713977,
      -0.9915651684209309,
      0.9915651684209309
    ],
    [
      0,
      -0.16035864564022537,
      0.16035864564022537,
      -0.31656409996362983,
      0.31656409996362983,
      -0.46457074137596094,
      0.46457074137596094,
      -0.600545304661681,
      0.600545304661681,
      -0.7209661773352294,
      0.7209661773352294,
      -0.8227146565371428,
      0.8227146565371428,
      -0.9031559036148179,
      0.9031559036148179,
      -0.96020815213483,
      0.96020815213483,
      -0.9924068438435844,
      0.9924068438435844
    ],
    [
      -0.07652652113349734,
      0.07652652113349734,
      -0.22778585114164507,
      0.22778585114164507,
      -0.37370608871541955,
      0.37370608871541955,
      -0.5108670019508271,
      0.5108670019508271,
      -0.636053680726515,
      0.636053680726515,
      -0.7463319064601508,
      0.7463319064601508,
      -0.8391169718222188,
      0.8391169718222188,
      -0.912234428251326,
      0.912234428251326,
      -0.9639719272779138,
      0.9639719272779138,
      -0.9931285991850949,
      0.9931285991850949
    ],
    [
      0,
      -0.1455618541608951,
      0.1455618541608951,
      -0.2880213168024011,
      0.2880213168024011,
      -0.4243421202074388,
      0.4243421202074388,
      -0.5516188358872198,
      0.5516188358872198,
      -0.6671388041974123,
      0.6671388041974123,
      -0.7684399634756779,
      0.7684399634756779,
      -0.8533633645833173,
      0.8533633645833173,
      -0.9200993341504008,
      0.9200993341504008,
      -0.9672268385663063,
      0.9672268385663063,
      -0.9937521706203895,
      0.9937521706203895
    ],
    [
      -0.06973927331972223,
      0.06973927331972223,
      -0.20786042668822127,
      0.20786042668822127,
      -0.34193582089208424,
      0.34193582089208424,
      -0.469355837986757,
      0.469355837986757,
      -0.5876404035069116,
      0.5876404035069116,
      -0.6944872631866827,
      0.6944872631866827,
      -0.7878168059792081,
      0.7878168059792081,
      -0.8658125777203002,
      0.8658125777203002,
      -0.926956772187174,
      0.926956772187174,
      -0.9700604978354287,
      0.9700604978354287,
      -0.9942945854823992,
      0.9942945854823992
    ],
    [
      0,
      -0.1332568242984661,
      0.1332568242984661,
      -0.26413568097034495,
      0.26413568097034495,
      -0.3903010380302908,
      0.3903010380302908,
      -0.5095014778460075,
      0.5095014778460075,
      -0.6196098757636461,
      0.6196098757636461,
      -0.7186613631319502,
      0.7186613631319502,
      -0.8048884016188399,
      0.8048884016188399,
      -0.8767523582704416,
      0.8767523582704416,
      -0.9329710868260161,
      0.9329710868260161,
      -0.9725424712181152,
      0.9725424712181152,
      -0.9947693349975522,
      0.9947693349975522
    ],
    [
      -0.06405689286260563,
      0.06405689286260563,
      -0.1911188674736163,
      0.1911188674736163,
      -0.3150426796961634,
      0.3150426796961634,
      -0.4337935076260451,
      0.4337935076260451,
      -0.5454214713888396,
      0.5454214713888396,
      -0.6480936519369755,
      0.6480936519369755,
      -0.7401241915785544,
      0.7401241915785544,
      -0.820001985973903,
      0.820001985973903,
      -0.8864155270044011,
      0.8864155270044011,
      -0.9382745520027328,
      0.9382745520027328,
      -0.9747285559713095,
      0.9747285559713095,
      -0.9951872199970213,
      0.9951872199970213
    ]
  ], r.cValues = [
    [],
    [],
    [1, 1],
    [
      0.8888888888888888,
      0.5555555555555556,
      0.5555555555555556
    ],
    [
      0.6521451548625461,
      0.6521451548625461,
      0.34785484513745385,
      0.34785484513745385
    ],
    [
      0.5688888888888889,
      0.47862867049936647,
      0.47862867049936647,
      0.23692688505618908,
      0.23692688505618908
    ],
    [
      0.3607615730481386,
      0.3607615730481386,
      0.46791393457269104,
      0.46791393457269104,
      0.17132449237917036,
      0.17132449237917036
    ],
    [
      0.4179591836734694,
      0.3818300505051189,
      0.3818300505051189,
      0.27970539148927664,
      0.27970539148927664,
      0.1294849661688697,
      0.1294849661688697
    ],
    [
      0.362683783378362,
      0.362683783378362,
      0.31370664587788727,
      0.31370664587788727,
      0.22238103445337448,
      0.22238103445337448,
      0.10122853629037626,
      0.10122853629037626
    ],
    [
      0.3302393550012598,
      0.1806481606948574,
      0.1806481606948574,
      0.08127438836157441,
      0.08127438836157441,
      0.31234707704000286,
      0.31234707704000286,
      0.26061069640293544,
      0.26061069640293544
    ],
    [
      0.29552422471475287,
      0.29552422471475287,
      0.26926671930999635,
      0.26926671930999635,
      0.21908636251598204,
      0.21908636251598204,
      0.1494513491505806,
      0.1494513491505806,
      0.06667134430868814,
      0.06667134430868814
    ],
    [
      0.2729250867779006,
      0.26280454451024665,
      0.26280454451024665,
      0.23319376459199048,
      0.23319376459199048,
      0.18629021092773426,
      0.18629021092773426,
      0.1255803694649046,
      0.1255803694649046,
      0.05566856711617366,
      0.05566856711617366
    ],
    [
      0.24914704581340277,
      0.24914704581340277,
      0.2334925365383548,
      0.2334925365383548,
      0.20316742672306592,
      0.20316742672306592,
      0.16007832854334622,
      0.16007832854334622,
      0.10693932599531843,
      0.10693932599531843,
      0.04717533638651183,
      0.04717533638651183
    ],
    [
      0.2325515532308739,
      0.22628318026289723,
      0.22628318026289723,
      0.2078160475368885,
      0.2078160475368885,
      0.17814598076194574,
      0.17814598076194574,
      0.13887351021978725,
      0.13887351021978725,
      0.09212149983772845,
      0.09212149983772845,
      0.04048400476531588,
      0.04048400476531588
    ],
    [
      0.2152638534631578,
      0.2152638534631578,
      0.2051984637212956,
      0.2051984637212956,
      0.18553839747793782,
      0.18553839747793782,
      0.15720316715819355,
      0.15720316715819355,
      0.12151857068790319,
      0.12151857068790319,
      0.08015808715976021,
      0.08015808715976021,
      0.03511946033175186,
      0.03511946033175186
    ],
    [
      0.2025782419255613,
      0.19843148532711158,
      0.19843148532711158,
      0.1861610000155622,
      0.1861610000155622,
      0.16626920581699392,
      0.16626920581699392,
      0.13957067792615432,
      0.13957067792615432,
      0.10715922046717194,
      0.10715922046717194,
      0.07036604748810812,
      0.07036604748810812,
      0.03075324199611727,
      0.03075324199611727
    ],
    [
      0.1894506104550685,
      0.1894506104550685,
      0.18260341504492358,
      0.18260341504492358,
      0.16915651939500254,
      0.16915651939500254,
      0.14959598881657674,
      0.14959598881657674,
      0.12462897125553388,
      0.12462897125553388,
      0.09515851168249279,
      0.09515851168249279,
      0.062253523938647894,
      0.062253523938647894,
      0.027152459411754096,
      0.027152459411754096
    ],
    [
      0.17944647035620653,
      0.17656270536699264,
      0.17656270536699264,
      0.16800410215645004,
      0.16800410215645004,
      0.15404576107681028,
      0.15404576107681028,
      0.13513636846852548,
      0.13513636846852548,
      0.11188384719340397,
      0.11188384719340397,
      0.08503614831717918,
      0.08503614831717918,
      0.0554595293739872,
      0.0554595293739872,
      0.02414830286854793,
      0.02414830286854793
    ],
    [
      0.1691423829631436,
      0.1691423829631436,
      0.16427648374583273,
      0.16427648374583273,
      0.15468467512626524,
      0.15468467512626524,
      0.14064291467065065,
      0.14064291467065065,
      0.12255520671147846,
      0.12255520671147846,
      0.10094204410628717,
      0.10094204410628717,
      0.07642573025488905,
      0.07642573025488905,
      0.0497145488949698,
      0.0497145488949698,
      0.02161601352648331,
      0.02161601352648331
    ],
    [
      0.1610544498487837,
      0.15896884339395434,
      0.15896884339395434,
      0.15276604206585967,
      0.15276604206585967,
      0.1426067021736066,
      0.1426067021736066,
      0.12875396253933621,
      0.12875396253933621,
      0.11156664554733399,
      0.11156664554733399,
      0.09149002162245,
      0.09149002162245,
      0.06904454273764123,
      0.06904454273764123,
      0.0448142267656996,
      0.0448142267656996,
      0.019461788229726478,
      0.019461788229726478
    ],
    [
      0.15275338713072584,
      0.15275338713072584,
      0.14917298647260374,
      0.14917298647260374,
      0.14209610931838204,
      0.14209610931838204,
      0.13168863844917664,
      0.13168863844917664,
      0.11819453196151841,
      0.11819453196151841,
      0.10193011981724044,
      0.10193011981724044,
      0.08327674157670475,
      0.08327674157670475,
      0.06267204833410907,
      0.06267204833410907,
      0.04060142980038694,
      0.04060142980038694,
      0.017614007139152118,
      0.017614007139152118
    ],
    [
      0.14608113364969041,
      0.14452440398997005,
      0.14452440398997005,
      0.13988739479107315,
      0.13988739479107315,
      0.13226893863333747,
      0.13226893863333747,
      0.12183141605372853,
      0.12183141605372853,
      0.10879729916714838,
      0.10879729916714838,
      0.09344442345603386,
      0.09344442345603386,
      0.0761001136283793,
      0.0761001136283793,
      0.057134425426857205,
      0.057134425426857205,
      0.036953789770852494,
      0.036953789770852494,
      0.016017228257774335,
      0.016017228257774335
    ],
    [
      0.13925187285563198,
      0.13925187285563198,
      0.13654149834601517,
      0.13654149834601517,
      0.13117350478706238,
      0.13117350478706238,
      0.12325237681051242,
      0.12325237681051242,
      0.11293229608053922,
      0.11293229608053922,
      0.10041414444288096,
      0.10041414444288096,
      0.08594160621706773,
      0.08594160621706773,
      0.06979646842452049,
      0.06979646842452049,
      0.052293335152683286,
      0.052293335152683286,
      0.03377490158481415,
      0.03377490158481415,
      0.0146279952982722,
      0.0146279952982722
    ],
    [
      0.13365457218610619,
      0.1324620394046966,
      0.1324620394046966,
      0.12890572218808216,
      0.12890572218808216,
      0.12304908430672953,
      0.12304908430672953,
      0.11499664022241136,
      0.11499664022241136,
      0.10489209146454141,
      0.10489209146454141,
      0.09291576606003515,
      0.09291576606003515,
      0.07928141177671895,
      0.07928141177671895,
      0.06423242140852585,
      0.06423242140852585,
      0.04803767173108467,
      0.04803767173108467,
      0.030988005856979445,
      0.030988005856979445,
      0.013411859487141771,
      0.013411859487141771
    ],
    [
      0.12793819534675216,
      0.12793819534675216,
      0.1258374563468283,
      0.1258374563468283,
      0.12167047292780339,
      0.12167047292780339,
      0.1155056680537256,
      0.1155056680537256,
      0.10744427011596563,
      0.10744427011596563,
      0.09761865210411388,
      0.09761865210411388,
      0.08619016153195327,
      0.08619016153195327,
      0.0733464814110803,
      0.0733464814110803,
      0.05929858491543678,
      0.05929858491543678,
      0.04427743881741981,
      0.04427743881741981,
      0.028531388628933663,
      0.028531388628933663,
      0.0123412297999872,
      0.0123412297999872
    ]
  ], r.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const t = (o, a, l) => {
    let c, h, d;
    c = l / 2, h = 0;
    for (let p = 0; p < 20; p++)
      d = c * r.tValues[20][p] + c, h += r.cValues[20][p] * s(o, a, d);
    return c * h;
  };
  r.getCubicArcLength = t;
  const e = (o, a, l) => {
    l === void 0 && (l = 1);
    const c = o[0] - 2 * o[1] + o[2], h = a[0] - 2 * a[1] + a[2], d = 2 * o[1] - 2 * o[0], u = 2 * a[1] - 2 * a[0], p = 4 * (c * c + h * h), f = 4 * (c * d + h * u), m = d * d + u * u;
    if (p === 0)
      return l * Math.sqrt(Math.pow(o[2] - o[0], 2) + Math.pow(a[2] - a[0], 2));
    const _ = f / (2 * p), y = m / p, k = l + _, g = y - _ * _, v = k * k + g > 0 ? Math.sqrt(k * k + g) : 0, b = _ * _ + g > 0 ? Math.sqrt(_ * _ + g) : 0, w = _ + Math.sqrt(_ * _ + g) !== 0 ? g * Math.log(Math.abs((k + v) / (_ + b))) : 0;
    return Math.sqrt(p) / 2 * (k * v - _ * b + w);
  };
  r.getQuadraticArcLength = e;
  function s(o, a, l) {
    const c = i(1, l, o), h = i(1, l, a), d = c * c + h * h;
    return Math.sqrt(d);
  }
  const i = (o, a, l) => {
    const c = l.length - 1;
    let h, d;
    if (c === 0)
      return 0;
    if (o === 0) {
      d = 0;
      for (let u = 0; u <= c; u++)
        d += r.binomialCoefficients[c][u] * Math.pow(1 - a, c - u) * Math.pow(a, u) * l[u];
      return d;
    } else {
      h = new Array(c);
      for (let u = 0; u < c; u++)
        h[u] = c * (l[u + 1] - l[u]);
      return i(o - 1, a, h);
    }
  }, n = (o, a, l) => {
    let c = 1, h = o / a, d = (o - l(h)) / a, u = 0;
    for (; c > 1e-3; ) {
      const p = l(h + d), f = Math.abs(o - p) / a;
      if (f < c)
        c = f, h += d;
      else {
        const m = l(h - d), _ = Math.abs(o - m) / a;
        _ < c ? (c = _, h -= d) : d /= 2;
      }
      if (u++, u > 500)
        break;
    }
    return h;
  };
  r.t2length = n;
})(wp);
Object.defineProperty(_i, "__esModule", { value: !0 });
_i.Path = void 0;
const Qy = et, t5 = Yt, e5 = rt, Br = wp;
class jt extends t5.Shape {
  constructor(t) {
    super(t), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = jt.parsePathData(this.data()), this.pathLength = jt.getPathLength(this.dataArray);
  }
  _sceneFunc(t) {
    var e = this.dataArray;
    t.beginPath();
    for (var s = !1, i = 0; i < e.length; i++) {
      var n = e[i].command, o = e[i].points;
      switch (n) {
        case "L":
          t.lineTo(o[0], o[1]);
          break;
        case "M":
          t.moveTo(o[0], o[1]);
          break;
        case "C":
          t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
          break;
        case "Q":
          t.quadraticCurveTo(o[0], o[1], o[2], o[3]);
          break;
        case "A":
          var a = o[0], l = o[1], c = o[2], h = o[3], d = o[4], u = o[5], p = o[6], f = o[7], m = c > h ? c : h, _ = c > h ? 1 : c / h, y = c > h ? h / c : 1;
          t.translate(a, l), t.rotate(p), t.scale(_, y), t.arc(0, 0, m, d, d + u, 1 - f), t.scale(1 / _, 1 / y), t.rotate(-p), t.translate(-a, -l);
          break;
        case "z":
          s = !0, t.closePath();
          break;
      }
    }
    !s && !this.hasFill() ? t.strokeShape(this) : t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = [];
    this.dataArray.forEach(function(c) {
      if (c.command === "A") {
        var h = c.points[4], d = c.points[5], u = c.points[4] + d, p = Math.PI / 180;
        if (Math.abs(h - u) < p && (p = Math.abs(h - u)), d < 0)
          for (let f = h - p; f > u; f -= p) {
            const m = jt.getPointOnEllipticalArc(c.points[0], c.points[1], c.points[2], c.points[3], f, 0);
            t.push(m.x, m.y);
          }
        else
          for (let f = h + p; f < u; f += p) {
            const m = jt.getPointOnEllipticalArc(c.points[0], c.points[1], c.points[2], c.points[3], f, 0);
            t.push(m.x, m.y);
          }
      } else if (c.command === "C")
        for (let f = 0; f <= 1; f += 0.01) {
          const m = jt.getPointOnCubicBezier(f, c.start.x, c.start.y, c.points[0], c.points[1], c.points[2], c.points[3], c.points[4], c.points[5]);
          t.push(m.x, m.y);
        }
      else
        t = t.concat(c.points);
    });
    for (var e = t[0], s = t[0], i = t[1], n = t[1], o, a, l = 0; l < t.length / 2; l++)
      o = t[l * 2], a = t[l * 2 + 1], isNaN(o) || (e = Math.min(e, o), s = Math.max(s, o)), isNaN(a) || (i = Math.min(i, a), n = Math.max(n, a));
    return {
      x: e,
      y: i,
      width: s - e,
      height: n - i
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(t) {
    return jt.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  static getLineLength(t, e, s, i) {
    return Math.sqrt((s - t) * (s - t) + (i - e) * (i - e));
  }
  static getPathLength(t) {
    let e = 0;
    for (var s = 0; s < t.length; ++s)
      e += t[s].pathLength;
    return e;
  }
  static getPointAtLengthOfDataArray(t, e) {
    var s, i = 0, n = e.length;
    if (!n)
      return null;
    for (; i < n && t > e[i].pathLength; )
      t -= e[i].pathLength, ++i;
    if (i === n)
      return s = e[i - 1].points.slice(-2), {
        x: s[0],
        y: s[1]
      };
    if (t < 0.01)
      return s = e[i].points.slice(0, 2), {
        x: s[0],
        y: s[1]
      };
    var o = e[i], a = o.points;
    switch (o.command) {
      case "L":
        return jt.getPointOnLine(t, o.start.x, o.start.y, a[0], a[1]);
      case "C":
        return jt.getPointOnCubicBezier((0, Br.t2length)(t, jt.getPathLength(e), (m) => (0, Br.getCubicArcLength)([o.start.x, a[0], a[2], a[4]], [o.start.y, a[1], a[3], a[5]], m)), o.start.x, o.start.y, a[0], a[1], a[2], a[3], a[4], a[5]);
      case "Q":
        return jt.getPointOnQuadraticBezier((0, Br.t2length)(t, jt.getPathLength(e), (m) => (0, Br.getQuadraticArcLength)([o.start.x, a[0], a[2]], [o.start.y, a[1], a[3]], m)), o.start.x, o.start.y, a[0], a[1], a[2], a[3]);
      case "A":
        var l = a[0], c = a[1], h = a[2], d = a[3], u = a[4], p = a[5], f = a[6];
        return u += p * t / o.pathLength, jt.getPointOnEllipticalArc(l, c, h, d, u, f);
    }
    return null;
  }
  static getPointOnLine(t, e, s, i, n, o, a) {
    o === void 0 && (o = e), a === void 0 && (a = s);
    var l = (n - s) / (i - e + 1e-8), c = Math.sqrt(t * t / (1 + l * l));
    i < e && (c *= -1);
    var h = l * c, d;
    if (i === e)
      d = {
        x: o,
        y: a + h
      };
    else if ((a - s) / (o - e + 1e-8) === l)
      d = {
        x: o + c,
        y: a + h
      };
    else {
      var u, p, f = this.getLineLength(e, s, i, n), m = (o - e) * (i - e) + (a - s) * (n - s);
      m = m / (f * f), u = e + m * (i - e), p = s + m * (n - s);
      var _ = this.getLineLength(o, a, u, p), y = Math.sqrt(t * t - _ * _);
      c = Math.sqrt(y * y / (1 + l * l)), i < e && (c *= -1), h = l * c, d = {
        x: u + c,
        y: p + h
      };
    }
    return d;
  }
  static getPointOnCubicBezier(t, e, s, i, n, o, a, l, c) {
    function h(_) {
      return _ * _ * _;
    }
    function d(_) {
      return 3 * _ * _ * (1 - _);
    }
    function u(_) {
      return 3 * _ * (1 - _) * (1 - _);
    }
    function p(_) {
      return (1 - _) * (1 - _) * (1 - _);
    }
    var f = l * h(t) + o * d(t) + i * u(t) + e * p(t), m = c * h(t) + a * d(t) + n * u(t) + s * p(t);
    return {
      x: f,
      y: m
    };
  }
  static getPointOnQuadraticBezier(t, e, s, i, n, o, a) {
    function l(p) {
      return p * p;
    }
    function c(p) {
      return 2 * p * (1 - p);
    }
    function h(p) {
      return (1 - p) * (1 - p);
    }
    var d = o * l(t) + i * c(t) + e * h(t), u = a * l(t) + n * c(t) + s * h(t);
    return {
      x: d,
      y: u
    };
  }
  static getPointOnEllipticalArc(t, e, s, i, n, o) {
    var a = Math.cos(o), l = Math.sin(o), c = {
      x: s * Math.cos(n),
      y: i * Math.sin(n)
    };
    return {
      x: t + (c.x * a - c.y * l),
      y: e + (c.x * l + c.y * a)
    };
  }
  static parsePathData(t) {
    if (!t)
      return [];
    var e = t, s = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    e = e.replace(new RegExp(" ", "g"), ",");
    for (var i = 0; i < s.length; i++)
      e = e.replace(new RegExp(s[i], "g"), "|" + s[i]);
    var n = e.split("|"), o = [], a = [], l = 0, c = 0, h = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, d;
    for (i = 1; i < n.length; i++) {
      var u = n[i], p = u.charAt(0);
      for (u = u.slice(1), a.length = 0; d = h.exec(u); )
        a.push(d[0]);
      for (var f = [], m = 0, _ = a.length; m < _; m++) {
        if (a[m] === "00") {
          f.push(0, 0);
          continue;
        }
        var y = parseFloat(a[m]);
        isNaN(y) ? f.push(0) : f.push(y);
      }
      for (; f.length > 0 && !isNaN(f[0]); ) {
        var k = "", g = [], v = l, b = c, w, x, S, M, E, T, I, D, j, $;
        switch (p) {
          case "l":
            l += f.shift(), c += f.shift(), k = "L", g.push(l, c);
            break;
          case "L":
            l = f.shift(), c = f.shift(), g.push(l, c);
            break;
          case "m":
            var st = f.shift(), it = f.shift();
            if (l += st, c += it, k = "M", o.length > 2 && o[o.length - 1].command === "z") {
              for (var lt = o.length - 2; lt >= 0; lt--)
                if (o[lt].command === "M") {
                  l = o[lt].points[0] + st, c = o[lt].points[1] + it;
                  break;
                }
            }
            g.push(l, c), p = "l";
            break;
          case "M":
            l = f.shift(), c = f.shift(), k = "M", g.push(l, c), p = "L";
            break;
          case "h":
            l += f.shift(), k = "L", g.push(l, c);
            break;
          case "H":
            l = f.shift(), k = "L", g.push(l, c);
            break;
          case "v":
            c += f.shift(), k = "L", g.push(l, c);
            break;
          case "V":
            c = f.shift(), k = "L", g.push(l, c);
            break;
          case "C":
            g.push(f.shift(), f.shift(), f.shift(), f.shift()), l = f.shift(), c = f.shift(), g.push(l, c);
            break;
          case "c":
            g.push(l + f.shift(), c + f.shift(), l + f.shift(), c + f.shift()), l += f.shift(), c += f.shift(), k = "C", g.push(l, c);
            break;
          case "S":
            x = l, S = c, w = o[o.length - 1], w.command === "C" && (x = l + (l - w.points[2]), S = c + (c - w.points[3])), g.push(x, S, f.shift(), f.shift()), l = f.shift(), c = f.shift(), k = "C", g.push(l, c);
            break;
          case "s":
            x = l, S = c, w = o[o.length - 1], w.command === "C" && (x = l + (l - w.points[2]), S = c + (c - w.points[3])), g.push(x, S, l + f.shift(), c + f.shift()), l += f.shift(), c += f.shift(), k = "C", g.push(l, c);
            break;
          case "Q":
            g.push(f.shift(), f.shift()), l = f.shift(), c = f.shift(), g.push(l, c);
            break;
          case "q":
            g.push(l + f.shift(), c + f.shift()), l += f.shift(), c += f.shift(), k = "Q", g.push(l, c);
            break;
          case "T":
            x = l, S = c, w = o[o.length - 1], w.command === "Q" && (x = l + (l - w.points[0]), S = c + (c - w.points[1])), l = f.shift(), c = f.shift(), k = "Q", g.push(x, S, l, c);
            break;
          case "t":
            x = l, S = c, w = o[o.length - 1], w.command === "Q" && (x = l + (l - w.points[0]), S = c + (c - w.points[1])), l += f.shift(), c += f.shift(), k = "Q", g.push(x, S, l, c);
            break;
          case "A":
            M = f.shift(), E = f.shift(), T = f.shift(), I = f.shift(), D = f.shift(), j = l, $ = c, l = f.shift(), c = f.shift(), k = "A", g = this.convertEndpointToCenterParameterization(j, $, l, c, I, D, M, E, T);
            break;
          case "a":
            M = f.shift(), E = f.shift(), T = f.shift(), I = f.shift(), D = f.shift(), j = l, $ = c, l += f.shift(), c += f.shift(), k = "A", g = this.convertEndpointToCenterParameterization(j, $, l, c, I, D, M, E, T);
            break;
        }
        o.push({
          command: k || p,
          points: g,
          start: {
            x: v,
            y: b
          },
          pathLength: this.calcLength(v, b, k || p, g)
        });
      }
      (p === "z" || p === "Z") && o.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return o;
  }
  static calcLength(t, e, s, i) {
    var n, o, a, l, c = jt;
    switch (s) {
      case "L":
        return c.getLineLength(t, e, i[0], i[1]);
      case "C":
        return (0, Br.getCubicArcLength)([t, i[0], i[2], i[4]], [e, i[1], i[3], i[5]], 1);
      case "Q":
        return (0, Br.getQuadraticArcLength)([t, i[0], i[2]], [e, i[1], i[3]], 1);
      case "A":
        n = 0;
        var h = i[4], d = i[5], u = i[4] + d, p = Math.PI / 180;
        if (Math.abs(h - u) < p && (p = Math.abs(h - u)), o = c.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], h, 0), d < 0)
          for (l = h - p; l > u; l -= p)
            a = c.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), n += c.getLineLength(o.x, o.y, a.x, a.y), o = a;
        else
          for (l = h + p; l < u; l += p)
            a = c.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0), n += c.getLineLength(o.x, o.y, a.x, a.y), o = a;
        return a = c.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0), n += c.getLineLength(o.x, o.y, a.x, a.y), n;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(t, e, s, i, n, o, a, l, c) {
    var h = c * (Math.PI / 180), d = Math.cos(h) * (t - s) / 2 + Math.sin(h) * (e - i) / 2, u = -1 * Math.sin(h) * (t - s) / 2 + Math.cos(h) * (e - i) / 2, p = d * d / (a * a) + u * u / (l * l);
    p > 1 && (a *= Math.sqrt(p), l *= Math.sqrt(p));
    var f = Math.sqrt((a * a * (l * l) - a * a * (u * u) - l * l * (d * d)) / (a * a * (u * u) + l * l * (d * d)));
    n === o && (f *= -1), isNaN(f) && (f = 0);
    var m = f * a * u / l, _ = f * -l * d / a, y = (t + s) / 2 + Math.cos(h) * m - Math.sin(h) * _, k = (e + i) / 2 + Math.sin(h) * m + Math.cos(h) * _, g = function(E) {
      return Math.sqrt(E[0] * E[0] + E[1] * E[1]);
    }, v = function(E, T) {
      return (E[0] * T[0] + E[1] * T[1]) / (g(E) * g(T));
    }, b = function(E, T) {
      return (E[0] * T[1] < E[1] * T[0] ? -1 : 1) * Math.acos(v(E, T));
    }, w = b([1, 0], [(d - m) / a, (u - _) / l]), x = [(d - m) / a, (u - _) / l], S = [(-1 * d - m) / a, (-1 * u - _) / l], M = b(x, S);
    return v(x, S) <= -1 && (M = Math.PI), v(x, S) >= 1 && (M = 0), o === 0 && M > 0 && (M = M - 2 * Math.PI), o === 1 && M < 0 && (M = M + 2 * Math.PI), [y, k, a, l, w, M, h, o];
  }
}
_i.Path = jt;
jt.prototype.className = "Path";
jt.prototype._attrsAffectingSize = ["data"];
(0, e5._registerNode)(jt);
Qy.Factory.addGetterSetter(jt, "data");
Object.defineProperty(na, "__esModule", { value: !0 });
na.Arrow = void 0;
const aa = et, s5 = xn, bp = U, r5 = rt, kd = _i;
class Ar extends s5.Line {
  _sceneFunc(t) {
    super._sceneFunc(t);
    var e = Math.PI * 2, s = this.points(), i = s, n = this.tension() !== 0 && s.length > 4;
    n && (i = this.getTensionPoints());
    var o = this.pointerLength(), a = s.length, l, c;
    if (n) {
      const u = [
        i[i.length - 4],
        i[i.length - 3],
        i[i.length - 2],
        i[i.length - 1],
        s[a - 2],
        s[a - 1]
      ], p = kd.Path.calcLength(i[i.length - 4], i[i.length - 3], "C", u), f = kd.Path.getPointOnQuadraticBezier(Math.min(1, 1 - o / p), u[0], u[1], u[2], u[3], u[4], u[5]);
      l = s[a - 2] - f.x, c = s[a - 1] - f.y;
    } else
      l = s[a - 2] - s[a - 4], c = s[a - 1] - s[a - 3];
    var h = (Math.atan2(c, l) + e) % e, d = this.pointerWidth();
    this.pointerAtEnding() && (t.save(), t.beginPath(), t.translate(s[a - 2], s[a - 1]), t.rotate(h), t.moveTo(0, 0), t.lineTo(-o, d / 2), t.lineTo(-o, -d / 2), t.closePath(), t.restore(), this.__fillStroke(t)), this.pointerAtBeginning() && (t.save(), t.beginPath(), t.translate(s[0], s[1]), n ? (l = (i[0] + i[2]) / 2 - s[0], c = (i[1] + i[3]) / 2 - s[1]) : (l = s[2] - s[0], c = s[3] - s[1]), t.rotate((Math.atan2(-c, -l) + e) % e), t.moveTo(0, 0), t.lineTo(-o, d / 2), t.lineTo(-o, -d / 2), t.closePath(), t.restore(), this.__fillStroke(t));
  }
  __fillStroke(t) {
    var e = this.dashEnabled();
    e && (this.attrs.dashEnabled = !1, t.setLineDash([])), t.fillStrokeShape(this), e && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const t = super.getSelfRect(), e = this.pointerWidth() / 2;
    return {
      x: t.x - e,
      y: t.y - e,
      width: t.width + e * 2,
      height: t.height + e * 2
    };
  }
}
na.Arrow = Ar;
Ar.prototype.className = "Arrow";
(0, r5._registerNode)(Ar);
aa.Factory.addGetterSetter(Ar, "pointerLength", 10, (0, bp.getNumberValidator)());
aa.Factory.addGetterSetter(Ar, "pointerWidth", 10, (0, bp.getNumberValidator)());
aa.Factory.addGetterSetter(Ar, "pointerAtBeginning", !1);
aa.Factory.addGetterSetter(Ar, "pointerAtEnding", !0);
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
la.Circle = void 0;
const i5 = et, n5 = Yt, o5 = U, a5 = rt;
class vi extends n5.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
  setHeight(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
}
la.Circle = vi;
vi.prototype._centroid = !0;
vi.prototype.className = "Circle";
vi.prototype._attrsAffectingSize = ["radius"];
(0, a5._registerNode)(vi);
i5.Factory.addGetterSetter(vi, "radius", 0, (0, o5.getNumberValidator)());
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.Ellipse = void 0;
const Xc = et, l5 = Yt, Sp = U, c5 = rt;
class Zs extends l5.Shape {
  _sceneFunc(t) {
    var e = this.radiusX(), s = this.radiusY();
    t.beginPath(), t.save(), e !== s && t.scale(1, s / e), t.arc(0, 0, e, 0, Math.PI * 2, !1), t.restore(), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(t) {
    this.radiusX(t / 2);
  }
  setHeight(t) {
    this.radiusY(t / 2);
  }
}
ca.Ellipse = Zs;
Zs.prototype.className = "Ellipse";
Zs.prototype._centroid = !0;
Zs.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, c5._registerNode)(Zs);
Xc.Factory.addComponentsGetterSetter(Zs, "radius", ["x", "y"]);
Xc.Factory.addGetterSetter(Zs, "radiusX", 0, (0, Sp.getNumberValidator)());
Xc.Factory.addGetterSetter(Zs, "radiusY", 0, (0, Sp.getNumberValidator)());
var ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.Image = void 0;
const dl = Tt, Mr = et, h5 = Yt, d5 = rt, Cn = U;
class Re extends h5.Shape {
  constructor(t) {
    super(t), this.on("imageChange.konva", () => {
      this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const t = this.image();
    t && t.complete || t && t.readyState === 4 || t && t.addEventListener && t.addEventListener("load", () => {
      this._requestDraw();
    });
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(t) {
    const e = this.getWidth(), s = this.getHeight(), i = this.cornerRadius(), n = this.attrs.image;
    let o;
    if (n) {
      const a = this.attrs.cropWidth, l = this.attrs.cropHeight;
      a && l ? o = [
        n,
        this.cropX(),
        this.cropY(),
        a,
        l,
        0,
        0,
        e,
        s
      ] : o = [n, 0, 0, e, s];
    }
    (this.hasFill() || this.hasStroke() || i) && (t.beginPath(), i ? dl.Util.drawRoundedRectPath(t, e, s, i) : t.rect(0, 0, e, s), t.closePath(), t.fillStrokeShape(this)), n && (i && t.clip(), t.drawImage.apply(t, o));
  }
  _hitFunc(t) {
    var e = this.width(), s = this.height(), i = this.cornerRadius();
    t.beginPath(), i ? dl.Util.drawRoundedRectPath(t, e, s, i) : t.rect(0, 0, e, s), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    var t, e;
    return (t = this.attrs.width) !== null && t !== void 0 ? t : (e = this.image()) === null || e === void 0 ? void 0 : e.width;
  }
  getHeight() {
    var t, e;
    return (t = this.attrs.height) !== null && t !== void 0 ? t : (e = this.image()) === null || e === void 0 ? void 0 : e.height;
  }
  static fromURL(t, e, s = null) {
    var i = dl.Util.createImageElement();
    i.onload = function() {
      var n = new Re({
        image: i
      });
      e(n);
    }, i.onerror = s, i.crossOrigin = "Anonymous", i.src = t;
  }
}
ha.Image = Re;
Re.prototype.className = "Image";
(0, d5._registerNode)(Re);
Mr.Factory.addGetterSetter(Re, "cornerRadius", 0, (0, Cn.getNumberOrArrayOfNumbersValidator)(4));
Mr.Factory.addGetterSetter(Re, "image");
Mr.Factory.addComponentsGetterSetter(Re, "crop", ["x", "y", "width", "height"]);
Mr.Factory.addGetterSetter(Re, "cropX", 0, (0, Cn.getNumberValidator)());
Mr.Factory.addGetterSetter(Re, "cropY", 0, (0, Cn.getNumberValidator)());
Mr.Factory.addGetterSetter(Re, "cropWidth", 0, (0, Cn.getNumberValidator)());
Mr.Factory.addGetterSetter(Re, "cropHeight", 0, (0, Cn.getNumberValidator)());
var ei = {};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.Tag = ei.Label = void 0;
const da = et, u5 = Yt, f5 = gi, Zc = U, kp = rt;
var xp = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], p5 = "Change.konva", g5 = "none", Kl = "up", Xl = "right", Zl = "down", Jl = "left", m5 = xp.length;
class Jc extends f5.Group {
  constructor(t) {
    super(t), this.on("add.konva", function(e) {
      this._addListeners(e.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(t) {
    var e = this, s, i = function() {
      e._sync();
    };
    for (s = 0; s < m5; s++)
      t.on(xp[s] + p5, i);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var t = this.getText(), e = this.getTag(), s, i, n, o, a, l, c;
    if (t && e) {
      switch (s = t.width(), i = t.height(), n = e.pointerDirection(), o = e.pointerWidth(), c = e.pointerHeight(), a = 0, l = 0, n) {
        case Kl:
          a = s / 2, l = -1 * c;
          break;
        case Xl:
          a = s + o, l = i / 2;
          break;
        case Zl:
          a = s / 2, l = i + c;
          break;
        case Jl:
          a = -1 * o, l = i / 2;
          break;
      }
      e.setAttrs({
        x: -1 * a,
        y: -1 * l,
        width: s,
        height: i
      }), t.setAttrs({
        x: -1 * a,
        y: -1 * l
      });
    }
  }
}
ei.Label = Jc;
Jc.prototype.className = "Label";
(0, kp._registerNode)(Jc);
class Pr extends u5.Shape {
  _sceneFunc(t) {
    var e = this.width(), s = this.height(), i = this.pointerDirection(), n = this.pointerWidth(), o = this.pointerHeight(), a = this.cornerRadius();
    let l = 0, c = 0, h = 0, d = 0;
    typeof a == "number" ? l = c = h = d = Math.min(a, e / 2, s / 2) : (l = Math.min(a[0] || 0, e / 2, s / 2), c = Math.min(a[1] || 0, e / 2, s / 2), d = Math.min(a[2] || 0, e / 2, s / 2), h = Math.min(a[3] || 0, e / 2, s / 2)), t.beginPath(), t.moveTo(l, 0), i === Kl && (t.lineTo((e - n) / 2, 0), t.lineTo(e / 2, -1 * o), t.lineTo((e + n) / 2, 0)), t.lineTo(e - c, 0), t.arc(e - c, c, c, Math.PI * 3 / 2, 0, !1), i === Xl && (t.lineTo(e, (s - o) / 2), t.lineTo(e + n, s / 2), t.lineTo(e, (s + o) / 2)), t.lineTo(e, s - d), t.arc(e - d, s - d, d, 0, Math.PI / 2, !1), i === Zl && (t.lineTo((e + n) / 2, s), t.lineTo(e / 2, s + o), t.lineTo((e - n) / 2, s)), t.lineTo(h, s), t.arc(h, s - h, h, Math.PI / 2, Math.PI, !1), i === Jl && (t.lineTo(0, (s + o) / 2), t.lineTo(-1 * n, s / 2), t.lineTo(0, (s - o) / 2)), t.lineTo(0, l), t.arc(l, l, l, Math.PI, Math.PI * 3 / 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getSelfRect() {
    var t = 0, e = 0, s = this.pointerWidth(), i = this.pointerHeight(), n = this.pointerDirection(), o = this.width(), a = this.height();
    return n === Kl ? (e -= i, a += i) : n === Zl ? a += i : n === Jl ? (t -= s * 1.5, o += s) : n === Xl && (o += s * 1.5), {
      x: t,
      y: e,
      width: o,
      height: a
    };
  }
}
ei.Tag = Pr;
Pr.prototype.className = "Tag";
(0, kp._registerNode)(Pr);
da.Factory.addGetterSetter(Pr, "pointerDirection", g5);
da.Factory.addGetterSetter(Pr, "pointerWidth", 0, (0, Zc.getNumberValidator)());
da.Factory.addGetterSetter(Pr, "pointerHeight", 0, (0, Zc.getNumberValidator)());
da.Factory.addGetterSetter(Pr, "cornerRadius", 0, (0, Zc.getNumberOrArrayOfNumbersValidator)(4));
var En = {};
Object.defineProperty(En, "__esModule", { value: !0 });
En.Rect = void 0;
const _5 = et, v5 = Yt, y5 = rt, w5 = Tt, b5 = U;
class ua extends v5.Shape {
  _sceneFunc(t) {
    var e = this.cornerRadius(), s = this.width(), i = this.height();
    t.beginPath(), e ? w5.Util.drawRoundedRectPath(t, s, i, e) : t.rect(0, 0, s, i), t.closePath(), t.fillStrokeShape(this);
  }
}
En.Rect = ua;
ua.prototype.className = "Rect";
(0, y5._registerNode)(ua);
_5.Factory.addGetterSetter(ua, "cornerRadius", 0, (0, b5.getNumberOrArrayOfNumbersValidator)(4));
var fa = {};
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.RegularPolygon = void 0;
const Cp = et, S5 = Yt, Ep = U, k5 = rt;
class Or extends S5.Shape {
  _sceneFunc(t) {
    const e = this._getPoints();
    t.beginPath(), t.moveTo(e[0].x, e[0].y);
    for (var s = 1; s < e.length; s++)
      t.lineTo(e[s].x, e[s].y);
    t.closePath(), t.fillStrokeShape(this);
  }
  _getPoints() {
    const t = this.attrs.sides, e = this.attrs.radius || 0, s = [];
    for (var i = 0; i < t; i++)
      s.push({
        x: e * Math.sin(i * 2 * Math.PI / t),
        y: -1 * e * Math.cos(i * 2 * Math.PI / t)
      });
    return s;
  }
  getSelfRect() {
    const t = this._getPoints();
    var e = t[0].x, s = t[0].y, i = t[0].x, n = t[0].y;
    return t.forEach((o) => {
      e = Math.min(e, o.x), s = Math.max(s, o.x), i = Math.min(i, o.y), n = Math.max(n, o.y);
    }), {
      x: e,
      y: i,
      width: s - e,
      height: n - i
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
fa.RegularPolygon = Or;
Or.prototype.className = "RegularPolygon";
Or.prototype._centroid = !0;
Or.prototype._attrsAffectingSize = ["radius"];
(0, k5._registerNode)(Or);
Cp.Factory.addGetterSetter(Or, "radius", 0, (0, Ep.getNumberValidator)());
Cp.Factory.addGetterSetter(Or, "sides", 0, (0, Ep.getNumberValidator)());
var pa = {};
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.Ring = void 0;
const Tp = et, x5 = Yt, Ap = U, C5 = rt;
var xd = Math.PI * 2;
class Rr extends x5.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, xd, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), xd, 0, !0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
pa.Ring = Rr;
Rr.prototype.className = "Ring";
Rr.prototype._centroid = !0;
Rr.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, C5._registerNode)(Rr);
Tp.Factory.addGetterSetter(Rr, "innerRadius", 0, (0, Ap.getNumberValidator)());
Tp.Factory.addGetterSetter(Rr, "outerRadius", 0, (0, Ap.getNumberValidator)());
var ga = {};
Object.defineProperty(ga, "__esModule", { value: !0 });
ga.Sprite = void 0;
const Dr = et, E5 = Yt, T5 = mi, Mp = U, A5 = rt;
class Qe extends E5.Shape {
  constructor(t) {
    super(t), this._updated = !0, this.anim = new T5.Animation(() => {
      var e = this._updated;
      return this._updated = !1, e;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(t) {
    var e = this.animation(), s = this.frameIndex(), i = s * 4, n = this.animations()[e], o = this.frameOffsets(), a = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3], d = this.image();
    if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, c, h), t.closePath(), t.fillStrokeShape(this)), d)
      if (o) {
        var u = o[e], p = s * 2;
        t.drawImage(d, a, l, c, h, u[p + 0], u[p + 1], c, h);
      } else
        t.drawImage(d, a, l, c, h, 0, 0, c, h);
  }
  _hitFunc(t) {
    var e = this.animation(), s = this.frameIndex(), i = s * 4, n = this.animations()[e], o = this.frameOffsets(), a = n[i + 2], l = n[i + 3];
    if (t.beginPath(), o) {
      var c = o[e], h = s * 2;
      t.rect(c[h + 0], c[h + 1], a, l);
    } else
      t.rect(0, 0, a, l);
    t.closePath(), t.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var t = this;
    this.interval = setInterval(function() {
      t._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var t = this.getLayer();
      this.anim.setLayers(t), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var t = this.frameIndex(), e = this.animation(), s = this.animations(), i = s[e], n = i.length / 4;
    t < n - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
  }
}
ga.Sprite = Qe;
Qe.prototype.className = "Sprite";
(0, A5._registerNode)(Qe);
Dr.Factory.addGetterSetter(Qe, "animation");
Dr.Factory.addGetterSetter(Qe, "animations");
Dr.Factory.addGetterSetter(Qe, "frameOffsets");
Dr.Factory.addGetterSetter(Qe, "image");
Dr.Factory.addGetterSetter(Qe, "frameIndex", 0, (0, Mp.getNumberValidator)());
Dr.Factory.addGetterSetter(Qe, "frameRate", 17, (0, Mp.getNumberValidator)());
Dr.Factory.backCompat(Qe, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var ma = {};
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.Star = void 0;
const Qc = et, M5 = Yt, th = U, P5 = rt;
class Js extends M5.Shape {
  _sceneFunc(t) {
    var e = this.innerRadius(), s = this.outerRadius(), i = this.numPoints();
    t.beginPath(), t.moveTo(0, 0 - s);
    for (var n = 1; n < i * 2; n++) {
      var o = n % 2 === 0 ? s : e, a = o * Math.sin(n * Math.PI / i), l = -1 * o * Math.cos(n * Math.PI / i);
      t.lineTo(a, l);
    }
    t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
ma.Star = Js;
Js.prototype.className = "Star";
Js.prototype._centroid = !0;
Js.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, P5._registerNode)(Js);
Qc.Factory.addGetterSetter(Js, "numPoints", 5, (0, th.getNumberValidator)());
Qc.Factory.addGetterSetter(Js, "innerRadius", 0, (0, th.getNumberValidator)());
Qc.Factory.addGetterSetter(Js, "outerRadius", 0, (0, th.getNumberValidator)());
var yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.Text = yr.stringToArray = void 0;
const Ql = Tt, oe = et, O5 = Yt, Qs = U, R5 = rt;
function Pp(r) {
  return Array.from(r);
}
yr.stringToArray = Pp;
var $r = "auto", D5 = "center", Op = "inherit", xi = "justify", I5 = "Change.konva", N5 = "2d", Cd = "-", Rp = "left", F5 = "text", L5 = "Text", B5 = "top", $5 = "bottom", Ed = "middle", Dp = "normal", U5 = "px ", Fn = " ", G5 = "right", Td = "rtl", V5 = "word", j5 = "char", Ad = "none", ul = "…", Ip = [
  "direction",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], z5 = Ip.length;
function H5(r) {
  return r.split(",").map((t) => {
    t = t.trim();
    const e = t.indexOf(" ") >= 0, s = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
    return e && !s && (t = `"${t}"`), t;
  }).join(", ");
}
var Ln;
function fl() {
  return Ln || (Ln = Ql.Util.createCanvasElement().getContext(N5), Ln);
}
function W5(r) {
  r.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function Y5(r) {
  r.setAttr("miterLimit", 2), r.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function q5(r) {
  return r = r || {}, !r.fillLinearGradientColorStops && !r.fillRadialGradientColorStops && !r.fillPatternImage && (r.fill = r.fill || "black"), r;
}
class Pt extends O5.Shape {
  constructor(t) {
    super(q5(t)), this._partialTextX = 0, this._partialTextY = 0;
    for (var e = 0; e < z5; e++)
      this.on(Ip[e] + I5, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    var e = this.textArr, s = e.length;
    if (this.text()) {
      var i = this.padding(), n = this.fontSize(), o = this.lineHeight() * n, a = this.verticalAlign(), l = this.direction(), c = 0, h = this.align(), d = this.getWidth(), u = this.letterSpacing(), p = this.fill(), f = this.textDecoration(), m = f.indexOf("underline") !== -1, _ = f.indexOf("line-through") !== -1, y;
      l = l === Op ? t.direction : l;
      var k = 0, k = o / 2, g = 0, v = 0;
      for (l === Td && t.setAttr("direction", l), t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", Ed), t.setAttr("textAlign", Rp), a === Ed ? c = (this.getHeight() - s * o - i * 2) / 2 : a === $5 && (c = this.getHeight() - s * o - i * 2), t.translate(i, c + i), y = 0; y < s; y++) {
        var g = 0, v = 0, b = e[y], w = b.text, x = b.width, S = b.lastInParagraph, M, E, T;
        if (t.save(), h === G5 ? g += d - x - i * 2 : h === D5 && (g += (d - x - i * 2) / 2), m) {
          t.save(), t.beginPath(), t.moveTo(g, k + v + Math.round(n / 2)), M = w.split(" ").length - 1, E = M === 0, T = h === xi && !S ? d - i * 2 : x, t.lineTo(g + Math.round(T), k + v + Math.round(n / 2)), t.lineWidth = n / 15;
          const it = this._getLinearGradient();
          t.strokeStyle = it || p, t.stroke(), t.restore();
        }
        if (_) {
          t.save(), t.beginPath(), t.moveTo(g, k + v), M = w.split(" ").length - 1, E = M === 0, T = h === xi && S && !E ? d - i * 2 : x, t.lineTo(g + Math.round(T), k + v), t.lineWidth = n / 15;
          const it = this._getLinearGradient();
          t.strokeStyle = it || p, t.stroke(), t.restore();
        }
        if (l !== Td && (u !== 0 || h === xi)) {
          M = w.split(" ").length - 1;
          for (var I = Pp(w), D = 0; D < I.length; D++) {
            var j = I[D];
            j === " " && !S && h === xi && (g += (d - i * 2 - x) / M), this._partialTextX = g, this._partialTextY = k + v, this._partialText = j, t.fillStrokeShape(this), g += this.measureSize(j).width + u;
          }
        } else
          u !== 0 && t.setAttr("letterSpacing", `${u}px`), this._partialTextX = g, this._partialTextY = k + v, this._partialText = w, t.fillStrokeShape(this);
        t.restore(), s > 1 && (k += o);
      }
    }
  }
  _hitFunc(t) {
    var e = this.getWidth(), s = this.getHeight();
    t.beginPath(), t.rect(0, 0, e, s), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    var e = Ql.Util._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr(F5, e), this;
  }
  getWidth() {
    var t = this.attrs.width === $r || this.attrs.width === void 0;
    return t ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var t = this.attrs.height === $r || this.attrs.height === void 0;
    return t ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Ql.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(t) {
    var e = fl(), s = this.fontSize(), i;
    return e.save(), e.font = this._getContextFont(), i = e.measureText(t), e.restore(), {
      width: i.width,
      height: s
    };
  }
  _getContextFont() {
    return this.fontStyle() + Fn + this.fontVariant() + Fn + (this.fontSize() + U5) + H5(this.fontFamily());
  }
  _addTextLine(t) {
    this.align() === xi && (t = t.trim());
    var s = this._getTextWidth(t);
    return this.textArr.push({
      text: t,
      width: s,
      lastInParagraph: !1
    });
  }
  _getTextWidth(t) {
    var e = this.letterSpacing(), s = t.length;
    return fl().measureText(t).width + (s ? e * (s - 1) : 0);
  }
  _setTextData() {
    var t = this.text().split(`
`), e = +this.fontSize(), s = 0, i = this.lineHeight() * e, n = this.attrs.width, o = this.attrs.height, a = n !== $r && n !== void 0, l = o !== $r && o !== void 0, c = this.padding(), h = n - c * 2, d = o - c * 2, u = 0, p = this.wrap(), f = p !== Ad, m = p !== j5 && f, _ = this.ellipsis();
    this.textArr = [], fl().font = this._getContextFont();
    for (var y = _ ? this._getTextWidth(ul) : 0, k = 0, g = t.length; k < g; ++k) {
      var v = t[k], b = this._getTextWidth(v);
      if (a && b > h)
        for (; v.length > 0; ) {
          for (var w = 0, x = v.length, S = "", M = 0; w < x; ) {
            var E = w + x >>> 1, T = v.slice(0, E + 1), I = this._getTextWidth(T) + y;
            I <= h ? (w = E + 1, S = T, M = I) : x = E;
          }
          if (S) {
            if (m) {
              var D, j = v[S.length], $ = j === Fn || j === Cd;
              $ && M <= h ? D = S.length : D = Math.max(S.lastIndexOf(Fn), S.lastIndexOf(Cd)) + 1, D > 0 && (w = D, S = S.slice(0, w), M = this._getTextWidth(S));
            }
            S = S.trimRight(), this._addTextLine(S), s = Math.max(s, M), u += i;
            var st = this._shouldHandleEllipsis(u);
            if (st) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (v = v.slice(w), v = v.trimLeft(), v.length > 0 && (b = this._getTextWidth(v), b <= h)) {
              this._addTextLine(v), u += i, s = Math.max(s, b);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(v), u += i, s = Math.max(s, b), this._shouldHandleEllipsis(u) && k < g - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), l && u + i > d)
        break;
    }
    this.textHeight = e, this.textWidth = s;
  }
  _shouldHandleEllipsis(t) {
    var e = +this.fontSize(), s = this.lineHeight() * e, i = this.attrs.height, n = i !== $r && i !== void 0, o = this.padding(), a = i - o * 2, l = this.wrap(), c = l !== Ad;
    return !c || n && t + s > a;
  }
  _tryToAddEllipsisToLastLine() {
    var t = this.attrs.width, e = t !== $r && t !== void 0, s = this.padding(), i = t - s * 2, n = this.ellipsis(), o = this.textArr[this.textArr.length - 1];
    if (!(!o || !n)) {
      if (e) {
        var a = this._getTextWidth(o.text + ul) < i;
        a || (o.text = o.text.slice(0, o.text.length - 3));
      }
      this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(o.text + ul);
    }
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const t = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, e = this.hasShadow();
    return t && e ? !0 : super._useBufferCanvas();
  }
}
yr.Text = Pt;
Pt.prototype._fillFunc = W5;
Pt.prototype._strokeFunc = Y5;
Pt.prototype.className = L5;
Pt.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, R5._registerNode)(Pt);
oe.Factory.overWriteSetter(Pt, "width", (0, Qs.getNumberOrAutoValidator)());
oe.Factory.overWriteSetter(Pt, "height", (0, Qs.getNumberOrAutoValidator)());
oe.Factory.addGetterSetter(Pt, "direction", Op);
oe.Factory.addGetterSetter(Pt, "fontFamily", "Arial");
oe.Factory.addGetterSetter(Pt, "fontSize", 12, (0, Qs.getNumberValidator)());
oe.Factory.addGetterSetter(Pt, "fontStyle", Dp);
oe.Factory.addGetterSetter(Pt, "fontVariant", Dp);
oe.Factory.addGetterSetter(Pt, "padding", 0, (0, Qs.getNumberValidator)());
oe.Factory.addGetterSetter(Pt, "align", Rp);
oe.Factory.addGetterSetter(Pt, "verticalAlign", B5);
oe.Factory.addGetterSetter(Pt, "lineHeight", 1, (0, Qs.getNumberValidator)());
oe.Factory.addGetterSetter(Pt, "wrap", V5);
oe.Factory.addGetterSetter(Pt, "ellipsis", !1, (0, Qs.getBooleanValidator)());
oe.Factory.addGetterSetter(Pt, "letterSpacing", 0, (0, Qs.getNumberValidator)());
oe.Factory.addGetterSetter(Pt, "text", "", (0, Qs.getStringValidator)());
oe.Factory.addGetterSetter(Pt, "textDecoration", "");
var _a = {};
Object.defineProperty(_a, "__esModule", { value: !0 });
_a.TextPath = void 0;
const pl = Tt, je = et, K5 = Yt, Ci = _i, gl = yr, Np = U, X5 = rt;
var Z5 = "", Fp = "normal";
function Lp(r) {
  r.fillText(this.partialText, 0, 0);
}
function Bp(r) {
  r.strokeText(this.partialText, 0, 0);
}
class qt extends K5.Shape {
  constructor(t) {
    super(t), this.dummyCanvas = pl.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return Ci.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(t) {
    if (!this.attrs.data)
      return null;
    const e = this.pathLength;
    return t - 1 > e ? null : Ci.Path.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = Ci.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(t) {
    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
    var e = this.textDecoration(), s = this.fill(), i = this.fontSize(), n = this.glyphInfo;
    e === "underline" && t.beginPath();
    for (var o = 0; o < n.length; o++) {
      t.save();
      var a = n[o].p0;
      t.translate(a.x, a.y), t.rotate(n[o].rotation), this.partialText = n[o].text, t.fillStrokeShape(this), e === "underline" && (o === 0 && t.moveTo(0, i / 2 + 1), t.lineTo(i, i / 2 + 1)), t.restore();
    }
    e === "underline" && (t.strokeStyle = s, t.lineWidth = i / 20, t.stroke()), t.restore();
  }
  _hitFunc(t) {
    t.beginPath();
    var e = this.glyphInfo;
    if (e.length >= 1) {
      var s = e[0].p0;
      t.moveTo(s.x, s.y);
    }
    for (var i = 0; i < e.length; i++) {
      var n = e[i].p1;
      t.lineTo(n.x, n.y);
    }
    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return pl.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(t) {
    return gl.Text.prototype.setText.call(this, t);
  }
  _getContextFont() {
    return gl.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(t) {
    var e = this.dummyCanvas, s = e.getContext("2d");
    s.save(), s.font = this._getContextFont();
    var i = s.measureText(t);
    return s.restore(), {
      width: i.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const { width: t, height: e } = this._getTextSize(this.attrs.text);
    if (this.textWidth = t, this.textHeight = e, this.glyphInfo = [], !this.attrs.data)
      return null;
    const s = this.letterSpacing(), i = this.align(), n = this.kerningFunc(), o = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * s, 0);
    let a = 0;
    i === "center" && (a = Math.max(0, this.pathLength / 2 - o / 2)), i === "right" && (a = Math.max(0, this.pathLength - o));
    const l = (0, gl.stringToArray)(this.text());
    let c = a;
    for (var h = 0; h < l.length; h++) {
      const d = this._getPointAtLength(c);
      if (!d)
        return;
      let u = this._getTextSize(l[h]).width + s;
      if (l[h] === " " && i === "justify") {
        const k = this.text().split(" ").length - 1;
        u += (this.pathLength - o) / k;
      }
      const p = this._getPointAtLength(c + u);
      if (!p)
        return;
      const f = Ci.Path.getLineLength(d.x, d.y, p.x, p.y);
      let m = 0;
      if (n)
        try {
          m = n(l[h - 1], l[h]) * this.fontSize();
        } catch {
          m = 0;
        }
      d.x += m, p.x += m, this.textWidth += m;
      const _ = Ci.Path.getPointOnLine(m + f / 2, d.x, d.y, p.x, p.y), y = Math.atan2(p.y - d.y, p.x - d.x);
      this.glyphInfo.push({
        transposeX: _.x,
        transposeY: _.y,
        text: l[h],
        rotation: y,
        p0: d,
        p1: p
      }), c += u;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    var t = [];
    this.glyphInfo.forEach(function(h) {
      t.push(h.p0.x), t.push(h.p0.y), t.push(h.p1.x), t.push(h.p1.y);
    });
    for (var e = t[0] || 0, s = t[0] || 0, i = t[1] || 0, n = t[1] || 0, o, a, l = 0; l < t.length / 2; l++)
      o = t[l * 2], a = t[l * 2 + 1], e = Math.min(e, o), s = Math.max(s, o), i = Math.min(i, a), n = Math.max(n, a);
    var c = this.fontSize();
    return {
      x: e - c / 2,
      y: i - c / 2,
      width: s - e + c,
      height: n - i + c
    };
  }
  destroy() {
    return pl.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
_a.TextPath = qt;
qt.prototype._fillFunc = Lp;
qt.prototype._strokeFunc = Bp;
qt.prototype._fillFuncHit = Lp;
qt.prototype._strokeFuncHit = Bp;
qt.prototype.className = "TextPath";
qt.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, X5._registerNode)(qt);
je.Factory.addGetterSetter(qt, "data");
je.Factory.addGetterSetter(qt, "fontFamily", "Arial");
je.Factory.addGetterSetter(qt, "fontSize", 12, (0, Np.getNumberValidator)());
je.Factory.addGetterSetter(qt, "fontStyle", Fp);
je.Factory.addGetterSetter(qt, "align", "left");
je.Factory.addGetterSetter(qt, "letterSpacing", 0, (0, Np.getNumberValidator)());
je.Factory.addGetterSetter(qt, "textBaseline", "middle");
je.Factory.addGetterSetter(qt, "fontVariant", Fp);
je.Factory.addGetterSetter(qt, "text", Z5);
je.Factory.addGetterSetter(qt, "textDecoration", null);
je.Factory.addGetterSetter(qt, "kerningFunc", null);
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.Transformer = void 0;
const gt = Tt, dt = et, Md = xt, J5 = Yt, Q5 = En, Pd = gi, Ne = rt, tr = U, t3 = rt;
var $p = "tr-konva", e3 = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange",
  "anchorStyleFuncChange"
].map((r) => r + `.${$p}`).join(" "), Od = "nodesRect", s3 = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
], r3 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
const i3 = "ontouchstart" in Ne.Konva._global;
function n3(r, t, e) {
  if (r === "rotater")
    return e;
  t += gt.Util.degToRad(r3[r] || 0);
  var s = (gt.Util.radToDeg(t) % 360 + 360) % 360;
  return gt.Util._inRange(s, 315 + 22.5, 360) || gt.Util._inRange(s, 0, 22.5) ? "ns-resize" : gt.Util._inRange(s, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : gt.Util._inRange(s, 90 - 22.5, 90 + 22.5) ? "ew-resize" : gt.Util._inRange(s, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : gt.Util._inRange(s, 180 - 22.5, 180 + 22.5) ? "ns-resize" : gt.Util._inRange(s, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : gt.Util._inRange(s, 270 - 22.5, 270 + 22.5) ? "ew-resize" : gt.Util._inRange(s, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (gt.Util.error("Transformer has unknown angle for cursor detection: " + s), "pointer");
}
var So = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], Rd = 1e8;
function o3(r) {
  return {
    x: r.x + r.width / 2 * Math.cos(r.rotation) + r.height / 2 * Math.sin(-r.rotation),
    y: r.y + r.height / 2 * Math.cos(r.rotation) + r.width / 2 * Math.sin(r.rotation)
  };
}
function Up(r, t, e) {
  const s = e.x + (r.x - e.x) * Math.cos(t) - (r.y - e.y) * Math.sin(t), i = e.y + (r.x - e.x) * Math.sin(t) + (r.y - e.y) * Math.cos(t);
  return {
    ...r,
    rotation: r.rotation + t,
    x: s,
    y: i
  };
}
function a3(r, t) {
  const e = o3(r);
  return Up(r, t, e);
}
function l3(r, t, e) {
  let s = t;
  for (let i = 0; i < r.length; i++) {
    const n = Ne.Konva.getAngle(r[i]), o = Math.abs(n - t) % (Math.PI * 2);
    Math.min(o, Math.PI * 2 - o) < e && (s = n);
  }
  return s;
}
let tc = 0;
class at extends Pd.Group {
  constructor(t) {
    super(t), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(e3, this.update), this.getNode() && this.update();
  }
  attachTo(t) {
    return this.setNode(t), this;
  }
  setNode(t) {
    return gt.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([t]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return $p + this._id;
  }
  setNodes(t = []) {
    this._nodes && this._nodes.length && this.detach();
    const e = t.filter((i) => i.isAncestorOf(this) ? (gt.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    this._nodes = t = e, t.length === 1 && this.useSingleNodeRotation() ? this.rotation(t[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((i) => {
      const n = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      }, o = i._attrsAffectingSize.map((a) => a + "Change." + this._getEventNamespace()).join(" ");
      i.on(o, n), i.on(s3.map((a) => a + `.${this._getEventNamespace()}`).join(" "), n), i.on(`absoluteTransformChange.${this._getEventNamespace()}`, n), this._proxyDrag(i);
    }), this._resetTransformCache();
    var s = !!this.findOne(".top-left");
    return s && this.update(), this;
  }
  _proxyDrag(t) {
    let e;
    t.on(`dragstart.${this._getEventNamespace()}`, (s) => {
      e = t.getAbsolutePosition(), !this.isDragging() && t !== this.findOne(".back") && this.startDrag(s, !1);
    }), t.on(`dragmove.${this._getEventNamespace()}`, (s) => {
      if (!e)
        return;
      const i = t.getAbsolutePosition(), n = i.x - e.x, o = i.y - e.y;
      this.nodes().forEach((a) => {
        if (a === t || a.isDragging())
          return;
        const l = a.getAbsolutePosition();
        a.setAbsolutePosition({
          x: l.x + n,
          y: l.y + o
        }), a.startDrag(s);
      }), e = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((t) => {
      t.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(Od), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(Od, this.__getNodeRect);
  }
  __getNodeShape(t, e = this.rotation(), s) {
    var i = t.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), n = t.getAbsoluteScale(s), o = t.getAbsolutePosition(s), a = i.x * n.x - t.offsetX() * n.x, l = i.y * n.y - t.offsetY() * n.y;
    const c = (Ne.Konva.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), h = {
      x: o.x + a * Math.cos(c) + l * Math.sin(-c),
      y: o.y + l * Math.cos(c) + a * Math.sin(c),
      width: i.width * n.x,
      height: i.height * n.y,
      rotation: c
    };
    return Up(h, -Ne.Konva.getAngle(e), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    var t = this.getNode();
    if (!t)
      return {
        x: -Rd,
        y: -Rd,
        width: 0,
        height: 0,
        rotation: 0
      };
    const e = [];
    this.nodes().map((c) => {
      const h = c.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      });
      var d = [
        { x: h.x, y: h.y },
        { x: h.x + h.width, y: h.y },
        { x: h.x + h.width, y: h.y + h.height },
        { x: h.x, y: h.y + h.height }
      ], u = c.getAbsoluteTransform();
      d.forEach(function(p) {
        var f = u.point(p);
        e.push(f);
      });
    });
    const s = new gt.Transform();
    s.rotate(-Ne.Konva.getAngle(this.rotation()));
    var i = 1 / 0, n = 1 / 0, o = -1 / 0, a = -1 / 0;
    e.forEach(function(c) {
      var h = s.point(c);
      i === void 0 && (i = o = h.x, n = a = h.y), i = Math.min(i, h.x), n = Math.min(n, h.y), o = Math.max(o, h.x), a = Math.max(a, h.y);
    }), s.invert();
    const l = s.point({ x: i, y: n });
    return {
      x: l.x,
      y: l.y,
      width: o - i,
      height: a - n,
      rotation: Ne.Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), So.forEach((t) => {
      this._createAnchor(t);
    }), this._createAnchor("rotater");
  }
  _createAnchor(t) {
    var e = new Q5.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: t + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: i3 ? 10 : "auto"
    }), s = this;
    e.on("mousedown touchstart", function(i) {
      s._handleMouseDown(i);
    }), e.on("dragstart", (i) => {
      e.stopDrag(), i.cancelBubble = !0;
    }), e.on("dragend", (i) => {
      i.cancelBubble = !0;
    }), e.on("mouseenter", () => {
      var i = Ne.Konva.getAngle(this.rotation()), n = this.rotateAnchorCursor(), o = n3(t, i, n);
      e.getStage().content && (e.getStage().content.style.cursor = o), this._cursorChange = !0;
    }), e.on("mouseout", () => {
      e.getStage().content && (e.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(e);
  }
  _createBack() {
    var t = new J5.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(e, s) {
        var i = s.getParent(), n = i.padding();
        e.beginPath(), e.rect(-n, -n, s.width() + n * 2, s.height() + n * 2), e.moveTo(s.width() / 2, -n), i.rotateEnabled() && i.rotateLineVisible() && e.lineTo(s.width() / 2, -i.rotateAnchorOffset() * gt.Util._sign(s.height()) - n), e.fillStrokeShape(s);
      },
      hitFunc: (e, s) => {
        if (this.shouldOverdrawWholeArea()) {
          var i = this.padding();
          e.beginPath(), e.rect(-i, -i, s.width() + i * 2, s.height() + i * 2), e.fillStrokeShape(s);
        }
      }
    });
    this.add(t), this._proxyDrag(t), t.on("dragstart", (e) => {
      e.cancelBubble = !0;
    }), t.on("dragmove", (e) => {
      e.cancelBubble = !0;
    }), t.on("dragend", (e) => {
      e.cancelBubble = !0;
    }), this.on("dragmove", (e) => {
      this.update();
    });
  }
  _handleMouseDown(t) {
    this._movingAnchorName = t.target.name().split(" ")[0];
    var e = this._getNodeRect(), s = e.width, i = e.height, n = Math.sqrt(Math.pow(s, 2) + Math.pow(i, 2));
    this.sin = Math.abs(i / n), this.cos = Math.abs(s / n), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    var o = t.target.getAbsolutePosition(), a = t.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: a.x - o.x,
      y: a.y - o.y
    }, tc++, this._fire("transformstart", { evt: t.evt, target: this.getNode() }), this._nodes.forEach((l) => {
      l._fire("transformstart", { evt: t.evt, target: l });
    });
  }
  _handleMouseMove(t) {
    var e, s, i, n = this.findOne("." + this._movingAnchorName), o = n.getStage();
    o.setPointersPositions(t);
    const a = o.getPointerPosition();
    let l = {
      x: a.x - this._anchorDragOffset.x,
      y: a.y - this._anchorDragOffset.y
    };
    const c = n.getAbsolutePosition();
    this.anchorDragBoundFunc() && (l = this.anchorDragBoundFunc()(c, l, t)), n.setAbsolutePosition(l);
    const h = n.getAbsolutePosition();
    if (!(c.x === h.x && c.y === h.y)) {
      if (this._movingAnchorName === "rotater") {
        var d = this._getNodeRect();
        e = n.x() - d.width / 2, s = -n.y() + d.height / 2;
        let D = Math.atan2(-s, e) + Math.PI / 2;
        d.height < 0 && (D -= Math.PI);
        var u = Ne.Konva.getAngle(this.rotation());
        const j = u + D, $ = Ne.Konva.getAngle(this.rotationSnapTolerance()), it = l3(this.rotationSnaps(), j, $) - d.rotation, lt = a3(d, it);
        this._fitNodesInto(lt, t);
        return;
      }
      var p = this.shiftBehavior(), f;
      p === "inverted" ? f = this.keepRatio() && !t.shiftKey : p === "none" ? f = this.keepRatio() : f = this.keepRatio() || t.shiftKey;
      var g = this.centeredScaling() || t.altKey;
      if (this._movingAnchorName === "top-left") {
        if (f) {
          var m = g ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          i = Math.sqrt(Math.pow(m.x - n.x(), 2) + Math.pow(m.y - n.y(), 2));
          var _ = this.findOne(".top-left").x() > m.x ? -1 : 1, y = this.findOne(".top-left").y() > m.y ? -1 : 1;
          e = i * this.cos * _, s = i * this.sin * y, this.findOne(".top-left").x(m.x - e), this.findOne(".top-left").y(m.y - s);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(n.y());
      else if (this._movingAnchorName === "top-right") {
        if (f) {
          var m = g ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          i = Math.sqrt(Math.pow(n.x() - m.x, 2) + Math.pow(m.y - n.y(), 2));
          var _ = this.findOne(".top-right").x() < m.x ? -1 : 1, y = this.findOne(".top-right").y() > m.y ? -1 : 1;
          e = i * this.cos * _, s = i * this.sin * y, this.findOne(".top-right").x(m.x + e), this.findOne(".top-right").y(m.y - s);
        }
        var k = n.position();
        this.findOne(".top-left").y(k.y), this.findOne(".bottom-right").x(k.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(n.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(n.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (f) {
          var m = g ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          i = Math.sqrt(Math.pow(m.x - n.x(), 2) + Math.pow(n.y() - m.y, 2));
          var _ = m.x < n.x() ? -1 : 1, y = n.y() < m.y ? -1 : 1;
          e = i * this.cos * _, s = i * this.sin * y, n.x(m.x - e), n.y(m.y + s);
        }
        k = n.position(), this.findOne(".top-left").x(k.x), this.findOne(".bottom-right").y(k.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(n.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (f) {
          var m = g ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          i = Math.sqrt(Math.pow(n.x() - m.x, 2) + Math.pow(n.y() - m.y, 2));
          var _ = this.findOne(".bottom-right").x() < m.x ? -1 : 1, y = this.findOne(".bottom-right").y() < m.y ? -1 : 1;
          e = i * this.cos * _, s = i * this.sin * y, this.findOne(".bottom-right").x(m.x + e), this.findOne(".bottom-right").y(m.y + s);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var g = this.centeredScaling() || t.altKey;
      if (g) {
        var v = this.findOne(".top-left"), b = this.findOne(".bottom-right"), w = v.x(), x = v.y(), S = this.getWidth() - b.x(), M = this.getHeight() - b.y();
        b.move({
          x: -w,
          y: -x
        }), v.move({
          x: S,
          y: M
        });
      }
      var E = this.findOne(".top-left").getAbsolutePosition();
      e = E.x, s = E.y;
      var T = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), I = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: e,
        y: s,
        width: T,
        height: I,
        rotation: Ne.Konva.getAngle(this.rotation())
      }, t);
    }
  }
  _handleMouseUp(t) {
    this._removeEvents(t);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(t) {
    var e;
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      var s = this.getNode();
      tc--, this._fire("transformend", { evt: t, target: s }), (e = this.getLayer()) === null || e === void 0 || e.batchDraw(), s && this._nodes.forEach((i) => {
        var n;
        i._fire("transformend", { evt: t, target: i }), (n = i.getLayer()) === null || n === void 0 || n.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(t, e) {
    var s = this._getNodeRect();
    const i = 1;
    if (gt.Util._inRange(t.width, -this.padding() * 2 - i, i)) {
      this.update();
      return;
    }
    if (gt.Util._inRange(t.height, -this.padding() * 2 - i, i)) {
      this.update();
      return;
    }
    var n = new gt.Transform();
    if (n.rotate(Ne.Konva.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const u = n.point({
        x: -this.padding() * 2,
        y: 0
      });
      t.x += u.x, t.y += u.y, t.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= u.x, this._anchorDragOffset.y -= u.y;
    } else if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const u = n.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= u.x, this._anchorDragOffset.y -= u.y, t.width += this.padding() * 2;
    }
    if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const u = n.point({
        x: 0,
        y: -this.padding() * 2
      });
      t.x += u.x, t.y += u.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= u.x, this._anchorDragOffset.y -= u.y, t.height += this.padding() * 2;
    } else if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const u = n.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= u.x, this._anchorDragOffset.y -= u.y, t.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const u = this.boundBoxFunc()(s, t);
      u ? t = u : gt.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const o = 1e7, a = new gt.Transform();
    a.translate(s.x, s.y), a.rotate(s.rotation), a.scale(s.width / o, s.height / o);
    const l = new gt.Transform(), c = t.width / o, h = t.height / o;
    this.flipEnabled() === !1 ? (l.translate(t.x, t.y), l.rotate(t.rotation), l.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0), l.scale(Math.abs(c), Math.abs(h))) : (l.translate(t.x, t.y), l.rotate(t.rotation), l.scale(c, h));
    const d = l.multiply(a.invert());
    this._nodes.forEach((u) => {
      var p;
      const f = u.getParent().getAbsoluteTransform(), m = u.getTransform().copy();
      m.translate(u.offsetX(), u.offsetY());
      const _ = new gt.Transform();
      _.multiply(f.copy().invert()).multiply(d).multiply(f).multiply(m);
      const y = _.decompose();
      u.setAttrs(y), (p = u.getLayer()) === null || p === void 0 || p.batchDraw();
    }), this.rotation(gt.Util._getRotation(t.rotation)), this._nodes.forEach((u) => {
      this._fire("transform", { evt: e, target: u }), u._fire("transform", { evt: e, target: u });
    }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(t, e) {
    this.findOne(t).setAttrs(e);
  }
  update() {
    var t, e = this._getNodeRect();
    this.rotation(gt.Util._getRotation(e.rotation));
    var s = e.width, i = e.height, n = this.enabledAnchors(), o = this.resizeEnabled(), a = this.padding(), l = this.anchorSize();
    const c = this.find("._anchor");
    c.forEach((d) => {
      d.setAttrs({
        width: l,
        height: l,
        offsetX: l / 2,
        offsetY: l / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: l / 2 + a,
      offsetY: l / 2 + a,
      visible: o && n.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: s / 2,
      y: 0,
      offsetY: l / 2 + a,
      visible: o && n.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: s,
      y: 0,
      offsetX: l / 2 - a,
      offsetY: l / 2 + a,
      visible: o && n.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: i / 2,
      offsetX: l / 2 + a,
      visible: o && n.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: s,
      y: i / 2,
      offsetX: l / 2 - a,
      visible: o && n.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: i,
      offsetX: l / 2 + a,
      offsetY: l / 2 - a,
      visible: o && n.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: s / 2,
      y: i,
      offsetY: l / 2 - a,
      visible: o && n.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: s,
      y: i,
      offsetX: l / 2 - a,
      offsetY: l / 2 - a,
      visible: o && n.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: s / 2,
      y: -this.rotateAnchorOffset() * gt.Util._sign(i) - a,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: s,
      height: i,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    const h = this.anchorStyleFunc();
    h && c.forEach((d) => {
      h(d);
    }), (t = this.getLayer()) === null || t === void 0 || t.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var t = this.findOne("." + this._movingAnchorName);
      t && t.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), Pd.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return Md.Node.prototype.toObject.call(this);
  }
  clone(t) {
    var e = Md.Node.prototype.clone.call(this, t);
    return e;
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
}
va.Transformer = at;
at.isTransforming = () => tc > 0;
function c3(r) {
  return r instanceof Array || gt.Util.warn("enabledAnchors value should be an array"), r instanceof Array && r.forEach(function(t) {
    So.indexOf(t) === -1 && gt.Util.warn("Unknown anchor name: " + t + ". Available names are: " + So.join(", "));
  }), r || [];
}
at.prototype.className = "Transformer";
(0, t3._registerNode)(at);
dt.Factory.addGetterSetter(at, "enabledAnchors", So, c3);
dt.Factory.addGetterSetter(at, "flipEnabled", !0, (0, tr.getBooleanValidator)());
dt.Factory.addGetterSetter(at, "resizeEnabled", !0);
dt.Factory.addGetterSetter(at, "anchorSize", 10, (0, tr.getNumberValidator)());
dt.Factory.addGetterSetter(at, "rotateEnabled", !0);
dt.Factory.addGetterSetter(at, "rotateLineVisible", !0);
dt.Factory.addGetterSetter(at, "rotationSnaps", []);
dt.Factory.addGetterSetter(at, "rotateAnchorOffset", 50, (0, tr.getNumberValidator)());
dt.Factory.addGetterSetter(at, "rotateAnchorCursor", "crosshair");
dt.Factory.addGetterSetter(at, "rotationSnapTolerance", 5, (0, tr.getNumberValidator)());
dt.Factory.addGetterSetter(at, "borderEnabled", !0);
dt.Factory.addGetterSetter(at, "anchorStroke", "rgb(0, 161, 255)");
dt.Factory.addGetterSetter(at, "anchorStrokeWidth", 1, (0, tr.getNumberValidator)());
dt.Factory.addGetterSetter(at, "anchorFill", "white");
dt.Factory.addGetterSetter(at, "anchorCornerRadius", 0, (0, tr.getNumberValidator)());
dt.Factory.addGetterSetter(at, "borderStroke", "rgb(0, 161, 255)");
dt.Factory.addGetterSetter(at, "borderStrokeWidth", 1, (0, tr.getNumberValidator)());
dt.Factory.addGetterSetter(at, "borderDash");
dt.Factory.addGetterSetter(at, "keepRatio", !0);
dt.Factory.addGetterSetter(at, "shiftBehavior", "default");
dt.Factory.addGetterSetter(at, "centeredScaling", !1);
dt.Factory.addGetterSetter(at, "ignoreStroke", !1);
dt.Factory.addGetterSetter(at, "padding", 0, (0, tr.getNumberValidator)());
dt.Factory.addGetterSetter(at, "node");
dt.Factory.addGetterSetter(at, "nodes");
dt.Factory.addGetterSetter(at, "boundBoxFunc");
dt.Factory.addGetterSetter(at, "anchorDragBoundFunc");
dt.Factory.addGetterSetter(at, "anchorStyleFunc");
dt.Factory.addGetterSetter(at, "shouldOverdrawWholeArea", !1);
dt.Factory.addGetterSetter(at, "useSingleNodeRotation", !0);
dt.Factory.backCompat(at, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var ya = {};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.Wedge = void 0;
const wa = et, h3 = Yt, d3 = rt, Gp = U, u3 = rt;
class Ss extends h3.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.radius(), 0, d3.Konva.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
ya.Wedge = Ss;
Ss.prototype.className = "Wedge";
Ss.prototype._centroid = !0;
Ss.prototype._attrsAffectingSize = ["radius"];
(0, u3._registerNode)(Ss);
wa.Factory.addGetterSetter(Ss, "radius", 0, (0, Gp.getNumberValidator)());
wa.Factory.addGetterSetter(Ss, "angle", 0, (0, Gp.getNumberValidator)());
wa.Factory.addGetterSetter(Ss, "clockwise", !1);
wa.Factory.backCompat(Ss, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.Blur = void 0;
const Dd = et, f3 = xt, p3 = U;
function Id() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
var g3 = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], m3 = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function _3(r, t) {
  var e = r.data, s = r.width, i = r.height, n, o, a, l, c, h, d, u, p, f, m, _, y, k, g, v, b, w, x, S, M, E, T, I, D = t + t + 1, j = s - 1, $ = i - 1, st = t + 1, it = st * (st + 1) / 2, lt = new Id(), Ot = null, z = lt, H = null, ut = null, yt = g3[t], vt = m3[t];
  for (a = 1; a < D; a++)
    z = z.next = new Id(), a === st && (Ot = z);
  for (z.next = lt, d = h = 0, o = 0; o < i; o++) {
    for (v = b = w = x = u = p = f = m = 0, _ = st * (S = e[h]), y = st * (M = e[h + 1]), k = st * (E = e[h + 2]), g = st * (T = e[h + 3]), u += it * S, p += it * M, f += it * E, m += it * T, z = lt, a = 0; a < st; a++)
      z.r = S, z.g = M, z.b = E, z.a = T, z = z.next;
    for (a = 1; a < st; a++)
      l = h + ((j < a ? j : a) << 2), u += (z.r = S = e[l]) * (I = st - a), p += (z.g = M = e[l + 1]) * I, f += (z.b = E = e[l + 2]) * I, m += (z.a = T = e[l + 3]) * I, v += S, b += M, w += E, x += T, z = z.next;
    for (H = lt, ut = Ot, n = 0; n < s; n++)
      e[h + 3] = T = m * yt >> vt, T !== 0 ? (T = 255 / T, e[h] = (u * yt >> vt) * T, e[h + 1] = (p * yt >> vt) * T, e[h + 2] = (f * yt >> vt) * T) : e[h] = e[h + 1] = e[h + 2] = 0, u -= _, p -= y, f -= k, m -= g, _ -= H.r, y -= H.g, k -= H.b, g -= H.a, l = d + ((l = n + t + 1) < j ? l : j) << 2, v += H.r = e[l], b += H.g = e[l + 1], w += H.b = e[l + 2], x += H.a = e[l + 3], u += v, p += b, f += w, m += x, H = H.next, _ += S = ut.r, y += M = ut.g, k += E = ut.b, g += T = ut.a, v -= S, b -= M, w -= E, x -= T, ut = ut.next, h += 4;
    d += s;
  }
  for (n = 0; n < s; n++) {
    for (b = w = x = v = p = f = m = u = 0, h = n << 2, _ = st * (S = e[h]), y = st * (M = e[h + 1]), k = st * (E = e[h + 2]), g = st * (T = e[h + 3]), u += it * S, p += it * M, f += it * E, m += it * T, z = lt, a = 0; a < st; a++)
      z.r = S, z.g = M, z.b = E, z.a = T, z = z.next;
    for (c = s, a = 1; a <= t; a++)
      h = c + n << 2, u += (z.r = S = e[h]) * (I = st - a), p += (z.g = M = e[h + 1]) * I, f += (z.b = E = e[h + 2]) * I, m += (z.a = T = e[h + 3]) * I, v += S, b += M, w += E, x += T, z = z.next, a < $ && (c += s);
    for (h = n, H = lt, ut = Ot, o = 0; o < i; o++)
      l = h << 2, e[l + 3] = T = m * yt >> vt, T > 0 ? (T = 255 / T, e[l] = (u * yt >> vt) * T, e[l + 1] = (p * yt >> vt) * T, e[l + 2] = (f * yt >> vt) * T) : e[l] = e[l + 1] = e[l + 2] = 0, u -= _, p -= y, f -= k, m -= g, _ -= H.r, y -= H.g, k -= H.b, g -= H.a, l = n + ((l = o + st) < $ ? l : $) * s << 2, u += v += H.r = e[l], p += b += H.g = e[l + 1], f += w += H.b = e[l + 2], m += x += H.a = e[l + 3], H = H.next, _ += S = ut.r, y += M = ut.g, k += E = ut.b, g += T = ut.a, v -= S, b -= M, w -= E, x -= T, ut = ut.next, h += s;
  }
}
const v3 = function(t) {
  var e = Math.round(this.blurRadius());
  e > 0 && _3(t, e);
};
ba.Blur = v3;
Dd.Factory.addGetterSetter(f3.Node, "blurRadius", 0, (0, p3.getNumberValidator)(), Dd.Factory.afterSetFilter);
var Sa = {};
Object.defineProperty(Sa, "__esModule", { value: !0 });
Sa.Brighten = void 0;
const Nd = et, y3 = xt, w3 = U, b3 = function(r) {
  var t = this.brightness() * 255, e = r.data, s = e.length, i;
  for (i = 0; i < s; i += 4)
    e[i] += t, e[i + 1] += t, e[i + 2] += t;
};
Sa.Brighten = b3;
Nd.Factory.addGetterSetter(y3.Node, "brightness", 0, (0, w3.getNumberValidator)(), Nd.Factory.afterSetFilter);
var ka = {};
Object.defineProperty(ka, "__esModule", { value: !0 });
ka.Contrast = void 0;
const Fd = et, S3 = xt, k3 = U, x3 = function(r) {
  var t = Math.pow((this.contrast() + 100) / 100, 2), e = r.data, s = e.length, i = 150, n = 150, o = 150, a;
  for (a = 0; a < s; a += 4)
    i = e[a], n = e[a + 1], o = e[a + 2], i /= 255, i -= 0.5, i *= t, i += 0.5, i *= 255, n /= 255, n -= 0.5, n *= t, n += 0.5, n *= 255, o /= 255, o -= 0.5, o *= t, o += 0.5, o *= 255, i = i < 0 ? 0 : i > 255 ? 255 : i, n = n < 0 ? 0 : n > 255 ? 255 : n, o = o < 0 ? 0 : o > 255 ? 255 : o, e[a] = i, e[a + 1] = n, e[a + 2] = o;
};
ka.Contrast = x3;
Fd.Factory.addGetterSetter(S3.Node, "contrast", 0, (0, k3.getNumberValidator)(), Fd.Factory.afterSetFilter);
var xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
xa.Emboss = void 0;
const Ws = et, Ca = xt, C3 = Tt, Vp = U, E3 = function(r) {
  var t = this.embossStrength() * 10, e = this.embossWhiteLevel() * 255, s = this.embossDirection(), i = this.embossBlend(), n = 0, o = 0, a = r.data, l = r.width, c = r.height, h = l * 4, d = c;
  switch (s) {
    case "top-left":
      n = -1, o = -1;
      break;
    case "top":
      n = -1, o = 0;
      break;
    case "top-right":
      n = -1, o = 1;
      break;
    case "right":
      n = 0, o = 1;
      break;
    case "bottom-right":
      n = 1, o = 1;
      break;
    case "bottom":
      n = 1, o = 0;
      break;
    case "bottom-left":
      n = 1, o = -1;
      break;
    case "left":
      n = 0, o = -1;
      break;
    default:
      C3.Util.error("Unknown emboss direction: " + s);
  }
  do {
    var u = (d - 1) * h, p = n;
    d + p < 1 && (p = 0), d + p > c && (p = 0);
    var f = (d - 1 + p) * l * 4, m = l;
    do {
      var _ = u + (m - 1) * 4, y = o;
      m + y < 1 && (y = 0), m + y > l && (y = 0);
      var k = f + (m - 1 + y) * 4, g = a[_] - a[k], v = a[_ + 1] - a[k + 1], b = a[_ + 2] - a[k + 2], w = g, x = w > 0 ? w : -w, S = v > 0 ? v : -v, M = b > 0 ? b : -b;
      if (S > x && (w = v), M > x && (w = b), w *= t, i) {
        var E = a[_] + w, T = a[_ + 1] + w, I = a[_ + 2] + w;
        a[_] = E > 255 ? 255 : E < 0 ? 0 : E, a[_ + 1] = T > 255 ? 255 : T < 0 ? 0 : T, a[_ + 2] = I > 255 ? 255 : I < 0 ? 0 : I;
      } else {
        var D = e - w;
        D < 0 ? D = 0 : D > 255 && (D = 255), a[_] = a[_ + 1] = a[_ + 2] = D;
      }
    } while (--m);
  } while (--d);
};
xa.Emboss = E3;
Ws.Factory.addGetterSetter(Ca.Node, "embossStrength", 0.5, (0, Vp.getNumberValidator)(), Ws.Factory.afterSetFilter);
Ws.Factory.addGetterSetter(Ca.Node, "embossWhiteLevel", 0.5, (0, Vp.getNumberValidator)(), Ws.Factory.afterSetFilter);
Ws.Factory.addGetterSetter(Ca.Node, "embossDirection", "top-left", null, Ws.Factory.afterSetFilter);
Ws.Factory.addGetterSetter(Ca.Node, "embossBlend", !1, null, Ws.Factory.afterSetFilter);
var Ea = {};
Object.defineProperty(Ea, "__esModule", { value: !0 });
Ea.Enhance = void 0;
const Ld = et, T3 = xt, A3 = U;
function ml(r, t, e, s, i) {
  var n = e - t, o = i - s, a;
  return n === 0 ? s + o / 2 : o === 0 ? s : (a = (r - t) / n, a = o * a + s, a);
}
const M3 = function(r) {
  var t = r.data, e = t.length, s = t[0], i = s, n, o = t[1], a = o, l, c = t[2], h = c, d, u, p = this.enhance();
  if (p !== 0) {
    for (u = 0; u < e; u += 4)
      n = t[u + 0], n < s ? s = n : n > i && (i = n), l = t[u + 1], l < o ? o = l : l > a && (a = l), d = t[u + 2], d < c ? c = d : d > h && (h = d);
    i === s && (i = 255, s = 0), a === o && (a = 255, o = 0), h === c && (h = 255, c = 0);
    var f, m, _, y, k, g, v, b, w;
    for (p > 0 ? (m = i + p * (255 - i), _ = s - p * (s - 0), k = a + p * (255 - a), g = o - p * (o - 0), b = h + p * (255 - h), w = c - p * (c - 0)) : (f = (i + s) * 0.5, m = i + p * (i - f), _ = s + p * (s - f), y = (a + o) * 0.5, k = a + p * (a - y), g = o + p * (o - y), v = (h + c) * 0.5, b = h + p * (h - v), w = c + p * (c - v)), u = 0; u < e; u += 4)
      t[u + 0] = ml(t[u + 0], s, i, _, m), t[u + 1] = ml(t[u + 1], o, a, g, k), t[u + 2] = ml(t[u + 2], c, h, w, b);
  }
};
Ea.Enhance = M3;
Ld.Factory.addGetterSetter(T3.Node, "enhance", 0, (0, A3.getNumberValidator)(), Ld.Factory.afterSetFilter);
var Ta = {};
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.Grayscale = void 0;
const P3 = function(r) {
  var t = r.data, e = t.length, s, i;
  for (s = 0; s < e; s += 4)
    i = 0.34 * t[s] + 0.5 * t[s + 1] + 0.16 * t[s + 2], t[s] = i, t[s + 1] = i, t[s + 2] = i;
};
Ta.Grayscale = P3;
var Aa = {};
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.HSL = void 0;
const si = et, eh = xt, sh = U;
si.Factory.addGetterSetter(eh.Node, "hue", 0, (0, sh.getNumberValidator)(), si.Factory.afterSetFilter);
si.Factory.addGetterSetter(eh.Node, "saturation", 0, (0, sh.getNumberValidator)(), si.Factory.afterSetFilter);
si.Factory.addGetterSetter(eh.Node, "luminance", 0, (0, sh.getNumberValidator)(), si.Factory.afterSetFilter);
const O3 = function(r) {
  var t = r.data, e = t.length, s = 1, i = Math.pow(2, this.saturation()), n = Math.abs(this.hue() + 360) % 360, o = this.luminance() * 127, a, l = s * i * Math.cos(n * Math.PI / 180), c = s * i * Math.sin(n * Math.PI / 180), h = 0.299 * s + 0.701 * l + 0.167 * c, d = 0.587 * s - 0.587 * l + 0.33 * c, u = 0.114 * s - 0.114 * l - 0.497 * c, p = 0.299 * s - 0.299 * l - 0.328 * c, f = 0.587 * s + 0.413 * l + 0.035 * c, m = 0.114 * s - 0.114 * l + 0.293 * c, _ = 0.299 * s - 0.3 * l + 1.25 * c, y = 0.587 * s - 0.586 * l - 1.05 * c, k = 0.114 * s + 0.886 * l - 0.2 * c, g, v, b, w;
  for (a = 0; a < e; a += 4)
    g = t[a + 0], v = t[a + 1], b = t[a + 2], w = t[a + 3], t[a + 0] = h * g + d * v + u * b + o, t[a + 1] = p * g + f * v + m * b + o, t[a + 2] = _ * g + y * v + k * b + o, t[a + 3] = w;
};
Aa.HSL = O3;
var Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.HSV = void 0;
const ri = et, rh = xt, ih = U, R3 = function(r) {
  var t = r.data, e = t.length, s = Math.pow(2, this.value()), i = Math.pow(2, this.saturation()), n = Math.abs(this.hue() + 360) % 360, o, a = s * i * Math.cos(n * Math.PI / 180), l = s * i * Math.sin(n * Math.PI / 180), c = 0.299 * s + 0.701 * a + 0.167 * l, h = 0.587 * s - 0.587 * a + 0.33 * l, d = 0.114 * s - 0.114 * a - 0.497 * l, u = 0.299 * s - 0.299 * a - 0.328 * l, p = 0.587 * s + 0.413 * a + 0.035 * l, f = 0.114 * s - 0.114 * a + 0.293 * l, m = 0.299 * s - 0.3 * a + 1.25 * l, _ = 0.587 * s - 0.586 * a - 1.05 * l, y = 0.114 * s + 0.886 * a - 0.2 * l, k, g, v, b;
  for (o = 0; o < e; o += 4)
    k = t[o + 0], g = t[o + 1], v = t[o + 2], b = t[o + 3], t[o + 0] = c * k + h * g + d * v, t[o + 1] = u * k + p * g + f * v, t[o + 2] = m * k + _ * g + y * v, t[o + 3] = b;
};
Ma.HSV = R3;
ri.Factory.addGetterSetter(rh.Node, "hue", 0, (0, ih.getNumberValidator)(), ri.Factory.afterSetFilter);
ri.Factory.addGetterSetter(rh.Node, "saturation", 0, (0, ih.getNumberValidator)(), ri.Factory.afterSetFilter);
ri.Factory.addGetterSetter(rh.Node, "value", 0, (0, ih.getNumberValidator)(), ri.Factory.afterSetFilter);
var Pa = {};
Object.defineProperty(Pa, "__esModule", { value: !0 });
Pa.Invert = void 0;
const D3 = function(r) {
  var t = r.data, e = t.length, s;
  for (s = 0; s < e; s += 4)
    t[s] = 255 - t[s], t[s + 1] = 255 - t[s + 1], t[s + 2] = 255 - t[s + 2];
};
Pa.Invert = D3;
var Oa = {};
Object.defineProperty(Oa, "__esModule", { value: !0 });
Oa.Kaleidoscope = void 0;
const ko = et, jp = xt, Bd = Tt, zp = U;
var I3 = function(r, t, e) {
  var s = r.data, i = t.data, n = r.width, o = r.height, a = e.polarCenterX || n / 2, l = e.polarCenterY || o / 2, c, h, d, u = 0, p = 0, f = 0, m = 0, _, y = Math.sqrt(a * a + l * l);
  h = n - a, d = o - l, _ = Math.sqrt(h * h + d * d), y = _ > y ? _ : y;
  var k = o, g = n, v, b, w = 360 / g * Math.PI / 180, x, S;
  for (b = 0; b < g; b += 1)
    for (x = Math.sin(b * w), S = Math.cos(b * w), v = 0; v < k; v += 1)
      h = Math.floor(a + y * v / k * S), d = Math.floor(l + y * v / k * x), c = (d * n + h) * 4, u = s[c + 0], p = s[c + 1], f = s[c + 2], m = s[c + 3], c = (b + v * n) * 4, i[c + 0] = u, i[c + 1] = p, i[c + 2] = f, i[c + 3] = m;
}, N3 = function(r, t, e) {
  var s = r.data, i = t.data, n = r.width, o = r.height, a = e.polarCenterX || n / 2, l = e.polarCenterY || o / 2, c, h, d, u, p, f = 0, m = 0, _ = 0, y = 0, k, g = Math.sqrt(a * a + l * l);
  h = n - a, d = o - l, k = Math.sqrt(h * h + d * d), g = k > g ? k : g;
  var v = o, b = n, w, x, S = e.polarRotation || 0, M, E;
  for (h = 0; h < n; h += 1)
    for (d = 0; d < o; d += 1)
      u = h - a, p = d - l, w = Math.sqrt(u * u + p * p) * v / g, x = (Math.atan2(p, u) * 180 / Math.PI + 360 + S) % 360, x = x * b / 360, M = Math.floor(x), E = Math.floor(w), c = (E * n + M) * 4, f = s[c + 0], m = s[c + 1], _ = s[c + 2], y = s[c + 3], c = (d * n + h) * 4, i[c + 0] = f, i[c + 1] = m, i[c + 2] = _, i[c + 3] = y;
};
const F3 = function(r) {
  var t = r.width, e = r.height, s, i, n, o, a, l, c, h, d, u, p = Math.round(this.kaleidoscopePower()), f = Math.round(this.kaleidoscopeAngle()), m = Math.floor(t * (f % 360) / 360);
  if (!(p < 1)) {
    var _ = Bd.Util.createCanvasElement();
    _.width = t, _.height = e;
    var y = _.getContext("2d").getImageData(0, 0, t, e);
    Bd.Util.releaseCanvas(_), I3(r, y, {
      polarCenterX: t / 2,
      polarCenterY: e / 2
    });
    for (var k = t / Math.pow(2, p); k <= 8; )
      k = k * 2, p -= 1;
    k = Math.ceil(k);
    var g = k, v = 0, b = g, w = 1;
    for (m + k > t && (v = g, b = 0, w = -1), i = 0; i < e; i += 1)
      for (s = v; s !== b; s += w)
        n = Math.round(s + m) % t, d = (t * i + n) * 4, a = y.data[d + 0], l = y.data[d + 1], c = y.data[d + 2], h = y.data[d + 3], u = (t * i + s) * 4, y.data[u + 0] = a, y.data[u + 1] = l, y.data[u + 2] = c, y.data[u + 3] = h;
    for (i = 0; i < e; i += 1)
      for (g = Math.floor(k), o = 0; o < p; o += 1) {
        for (s = 0; s < g + 1; s += 1)
          d = (t * i + s) * 4, a = y.data[d + 0], l = y.data[d + 1], c = y.data[d + 2], h = y.data[d + 3], u = (t * i + g * 2 - s - 1) * 4, y.data[u + 0] = a, y.data[u + 1] = l, y.data[u + 2] = c, y.data[u + 3] = h;
        g *= 2;
      }
    N3(y, r, { polarRotation: 0 });
  }
};
Oa.Kaleidoscope = F3;
ko.Factory.addGetterSetter(jp.Node, "kaleidoscopePower", 2, (0, zp.getNumberValidator)(), ko.Factory.afterSetFilter);
ko.Factory.addGetterSetter(jp.Node, "kaleidoscopeAngle", 0, (0, zp.getNumberValidator)(), ko.Factory.afterSetFilter);
var Ra = {};
Object.defineProperty(Ra, "__esModule", { value: !0 });
Ra.Mask = void 0;
const $d = et, L3 = xt, B3 = U;
function Bn(r, t, e) {
  var s = (e * r.width + t) * 4, i = [];
  return i.push(r.data[s++], r.data[s++], r.data[s++], r.data[s++]), i;
}
function Ei(r, t) {
  return Math.sqrt(Math.pow(r[0] - t[0], 2) + Math.pow(r[1] - t[1], 2) + Math.pow(r[2] - t[2], 2));
}
function $3(r) {
  for (var t = [0, 0, 0], e = 0; e < r.length; e++)
    t[0] += r[e][0], t[1] += r[e][1], t[2] += r[e][2];
  return t[0] /= r.length, t[1] /= r.length, t[2] /= r.length, t;
}
function U3(r, t) {
  var e = Bn(r, 0, 0), s = Bn(r, r.width - 1, 0), i = Bn(r, 0, r.height - 1), n = Bn(r, r.width - 1, r.height - 1), o = t || 10;
  if (Ei(e, s) < o && Ei(s, n) < o && Ei(n, i) < o && Ei(i, e) < o) {
    for (var a = $3([s, e, n, i]), l = [], c = 0; c < r.width * r.height; c++) {
      var h = Ei(a, [
        r.data[c * 4],
        r.data[c * 4 + 1],
        r.data[c * 4 + 2]
      ]);
      l[c] = h < o ? 0 : 255;
    }
    return l;
  }
}
function G3(r, t) {
  for (var e = 0; e < r.width * r.height; e++)
    r.data[4 * e + 3] = t[e];
}
function V3(r, t, e) {
  for (var s = [1, 1, 1, 1, 0, 1, 1, 1, 1], i = Math.round(Math.sqrt(s.length)), n = Math.floor(i / 2), o = [], a = 0; a < e; a++)
    for (var l = 0; l < t; l++) {
      for (var c = a * t + l, h = 0, d = 0; d < i; d++)
        for (var u = 0; u < i; u++) {
          var p = a + d - n, f = l + u - n;
          if (p >= 0 && p < e && f >= 0 && f < t) {
            var m = p * t + f, _ = s[d * i + u];
            h += r[m] * _;
          }
        }
      o[c] = h === 255 * 8 ? 255 : 0;
    }
  return o;
}
function j3(r, t, e) {
  for (var s = [1, 1, 1, 1, 1, 1, 1, 1, 1], i = Math.round(Math.sqrt(s.length)), n = Math.floor(i / 2), o = [], a = 0; a < e; a++)
    for (var l = 0; l < t; l++) {
      for (var c = a * t + l, h = 0, d = 0; d < i; d++)
        for (var u = 0; u < i; u++) {
          var p = a + d - n, f = l + u - n;
          if (p >= 0 && p < e && f >= 0 && f < t) {
            var m = p * t + f, _ = s[d * i + u];
            h += r[m] * _;
          }
        }
      o[c] = h >= 255 * 4 ? 255 : 0;
    }
  return o;
}
function z3(r, t, e) {
  for (var s = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], i = Math.round(Math.sqrt(s.length)), n = Math.floor(i / 2), o = [], a = 0; a < e; a++)
    for (var l = 0; l < t; l++) {
      for (var c = a * t + l, h = 0, d = 0; d < i; d++)
        for (var u = 0; u < i; u++) {
          var p = a + d - n, f = l + u - n;
          if (p >= 0 && p < e && f >= 0 && f < t) {
            var m = p * t + f, _ = s[d * i + u];
            h += r[m] * _;
          }
        }
      o[c] = h;
    }
  return o;
}
const H3 = function(r) {
  var t = this.threshold(), e = U3(r, t);
  return e && (e = V3(e, r.width, r.height), e = j3(e, r.width, r.height), e = z3(e, r.width, r.height), G3(r, e)), r;
};
Ra.Mask = H3;
$d.Factory.addGetterSetter(L3.Node, "threshold", 0, (0, B3.getNumberValidator)(), $d.Factory.afterSetFilter);
var Da = {};
Object.defineProperty(Da, "__esModule", { value: !0 });
Da.Noise = void 0;
const Ud = et, W3 = xt, Y3 = U, q3 = function(r) {
  var t = this.noise() * 255, e = r.data, s = e.length, i = t / 2, n;
  for (n = 0; n < s; n += 4)
    e[n + 0] += i - 2 * i * Math.random(), e[n + 1] += i - 2 * i * Math.random(), e[n + 2] += i - 2 * i * Math.random();
};
Da.Noise = q3;
Ud.Factory.addGetterSetter(W3.Node, "noise", 0.2, (0, Y3.getNumberValidator)(), Ud.Factory.afterSetFilter);
var Ia = {};
Object.defineProperty(Ia, "__esModule", { value: !0 });
Ia.Pixelate = void 0;
const Gd = et, K3 = Tt, X3 = xt, Z3 = U, J3 = function(r) {
  var t = Math.ceil(this.pixelSize()), e = r.width, s = r.height, i, n, o, a, l, c, h, d = Math.ceil(e / t), u = Math.ceil(s / t), p, f, m, _, y, k, g, v = r.data;
  if (t <= 0) {
    K3.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (y = 0; y < d; y += 1)
    for (k = 0; k < u; k += 1) {
      for (a = 0, l = 0, c = 0, h = 0, p = y * t, f = p + t, m = k * t, _ = m + t, g = 0, i = p; i < f; i += 1)
        if (!(i >= e))
          for (n = m; n < _; n += 1)
            n >= s || (o = (e * n + i) * 4, a += v[o + 0], l += v[o + 1], c += v[o + 2], h += v[o + 3], g += 1);
      for (a = a / g, l = l / g, c = c / g, h = h / g, i = p; i < f; i += 1)
        if (!(i >= e))
          for (n = m; n < _; n += 1)
            n >= s || (o = (e * n + i) * 4, v[o + 0] = a, v[o + 1] = l, v[o + 2] = c, v[o + 3] = h);
    }
};
Ia.Pixelate = J3;
Gd.Factory.addGetterSetter(X3.Node, "pixelSize", 8, (0, Z3.getNumberValidator)(), Gd.Factory.afterSetFilter);
var Na = {};
Object.defineProperty(Na, "__esModule", { value: !0 });
Na.Posterize = void 0;
const Vd = et, Q3 = xt, t4 = U, e4 = function(r) {
  var t = Math.round(this.levels() * 254) + 1, e = r.data, s = e.length, i = 255 / t, n;
  for (n = 0; n < s; n += 1)
    e[n] = Math.floor(e[n] / i) * i;
};
Na.Posterize = e4;
Vd.Factory.addGetterSetter(Q3.Node, "levels", 0.5, (0, t4.getNumberValidator)(), Vd.Factory.afterSetFilter);
var Fa = {};
Object.defineProperty(Fa, "__esModule", { value: !0 });
Fa.RGB = void 0;
const xo = et, nh = xt, s4 = U, r4 = function(r) {
  var t = r.data, e = t.length, s = this.red(), i = this.green(), n = this.blue(), o, a;
  for (o = 0; o < e; o += 4)
    a = (0.34 * t[o] + 0.5 * t[o + 1] + 0.16 * t[o + 2]) / 255, t[o] = a * s, t[o + 1] = a * i, t[o + 2] = a * n, t[o + 3] = t[o + 3];
};
Fa.RGB = r4;
xo.Factory.addGetterSetter(nh.Node, "red", 0, function(r) {
  return this._filterUpToDate = !1, r > 255 ? 255 : r < 0 ? 0 : Math.round(r);
});
xo.Factory.addGetterSetter(nh.Node, "green", 0, function(r) {
  return this._filterUpToDate = !1, r > 255 ? 255 : r < 0 ? 0 : Math.round(r);
});
xo.Factory.addGetterSetter(nh.Node, "blue", 0, s4.RGBComponent, xo.Factory.afterSetFilter);
var La = {};
Object.defineProperty(La, "__esModule", { value: !0 });
La.RGBA = void 0;
const ln = et, Ba = xt, i4 = U, n4 = function(r) {
  var t = r.data, e = t.length, s = this.red(), i = this.green(), n = this.blue(), o = this.alpha(), a, l;
  for (a = 0; a < e; a += 4)
    l = 1 - o, t[a] = s * o + t[a] * l, t[a + 1] = i * o + t[a + 1] * l, t[a + 2] = n * o + t[a + 2] * l;
};
La.RGBA = n4;
ln.Factory.addGetterSetter(Ba.Node, "red", 0, function(r) {
  return this._filterUpToDate = !1, r > 255 ? 255 : r < 0 ? 0 : Math.round(r);
});
ln.Factory.addGetterSetter(Ba.Node, "green", 0, function(r) {
  return this._filterUpToDate = !1, r > 255 ? 255 : r < 0 ? 0 : Math.round(r);
});
ln.Factory.addGetterSetter(Ba.Node, "blue", 0, i4.RGBComponent, ln.Factory.afterSetFilter);
ln.Factory.addGetterSetter(Ba.Node, "alpha", 1, function(r) {
  return this._filterUpToDate = !1, r > 1 ? 1 : r < 0 ? 0 : r;
});
var $a = {};
Object.defineProperty($a, "__esModule", { value: !0 });
$a.Sepia = void 0;
const o4 = function(r) {
  var t = r.data, e = t.length, s, i, n, o;
  for (s = 0; s < e; s += 4)
    i = t[s + 0], n = t[s + 1], o = t[s + 2], t[s + 0] = Math.min(255, i * 0.393 + n * 0.769 + o * 0.189), t[s + 1] = Math.min(255, i * 0.349 + n * 0.686 + o * 0.168), t[s + 2] = Math.min(255, i * 0.272 + n * 0.534 + o * 0.131);
};
$a.Sepia = o4;
var Ua = {};
Object.defineProperty(Ua, "__esModule", { value: !0 });
Ua.Solarize = void 0;
const a4 = function(r) {
  var t = r.data, e = r.width, s = r.height, i = e * 4, n = s;
  do {
    var o = (n - 1) * i, a = e;
    do {
      var l = o + (a - 1) * 4, c = t[l], h = t[l + 1], d = t[l + 2];
      c > 127 && (c = 255 - c), h > 127 && (h = 255 - h), d > 127 && (d = 255 - d), t[l] = c, t[l + 1] = h, t[l + 2] = d;
    } while (--a);
  } while (--n);
};
Ua.Solarize = a4;
var Ga = {};
Object.defineProperty(Ga, "__esModule", { value: !0 });
Ga.Threshold = void 0;
const jd = et, l4 = xt, c4 = U, h4 = function(r) {
  var t = this.threshold() * 255, e = r.data, s = e.length, i;
  for (i = 0; i < s; i += 1)
    e[i] = e[i] < t ? 0 : 255;
};
Ga.Threshold = h4;
jd.Factory.addGetterSetter(l4.Node, "threshold", 0.5, (0, c4.getNumberValidator)(), jd.Factory.afterSetFilter);
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.Konva = void 0;
const zd = hp, d4 = sa, u4 = na, f4 = la, p4 = ca, g4 = ha, Hd = ei, m4 = xn, _4 = _i, v4 = En, y4 = fa, w4 = pa, b4 = ga, S4 = ma, k4 = yr, x4 = _a, C4 = va, E4 = ya, T4 = ba, A4 = Sa, M4 = ka, P4 = xa, O4 = Ea, R4 = Ta, D4 = Aa, I4 = Ma, N4 = Pa, F4 = Oa, L4 = Ra, B4 = Da, $4 = Ia, U4 = Na, G4 = Fa, V4 = La, j4 = $a, z4 = Ua, H4 = Ga;
Xo.Konva = zd.Konva.Util._assign(zd.Konva, {
  Arc: d4.Arc,
  Arrow: u4.Arrow,
  Circle: f4.Circle,
  Ellipse: p4.Ellipse,
  Image: g4.Image,
  Label: Hd.Label,
  Tag: Hd.Tag,
  Line: m4.Line,
  Path: _4.Path,
  Rect: v4.Rect,
  RegularPolygon: y4.RegularPolygon,
  Ring: w4.Ring,
  Sprite: b4.Sprite,
  Star: S4.Star,
  Text: k4.Text,
  TextPath: x4.TextPath,
  Transformer: C4.Transformer,
  Wedge: E4.Wedge,
  Filters: {
    Blur: T4.Blur,
    Brighten: A4.Brighten,
    Contrast: M4.Contrast,
    Emboss: P4.Emboss,
    Enhance: O4.Enhance,
    Grayscale: R4.Grayscale,
    HSL: D4.HSL,
    HSV: I4.HSV,
    Invert: N4.Invert,
    Kaleidoscope: F4.Kaleidoscope,
    Mask: L4.Mask,
    Noise: B4.Noise,
    Pixelate: $4.Pixelate,
    Posterize: U4.Posterize,
    RGB: G4.RGB,
    RGBA: V4.RGBA,
    Sepia: j4.Sepia,
    Solarize: z4.Solarize,
    Threshold: H4.Threshold
  }
});
var W4 = Hc.exports;
Object.defineProperty(W4, "__esModule", { value: !0 });
const Y4 = Xo;
Hc.exports = Y4.Konva;
var q4 = Hc.exports;
const fe = /* @__PURE__ */ dc(q4), K4 = Hs.props(), _l = Object.keys(K4).filter((r) => r !== "width" && r !== "height"), Mo = class Mo extends fe.Group {
  static pickModelProps(t, e) {
    const {
      afterPick: s = void 0,
      keys: i = void 0,
      initProps: n = {}
    } = e || {}, a = ((i ?? t.keys) || []).reduce((l, c) => (t[c] !== void 0 && (l[c] = t[c]), l), n);
    return s && s(a), a;
  }
  constructor(t) {
    const e = t.model;
    super(t), this.std = t.std, this.model = e, this.setAttrs({
      modelId: e.id,
      id: e.getFullId(),
      name: `xpix:node ${e.flavour}`,
      // TODO: Remove draggable to one-way data flow
      draggable: !0
      // TODO: Add shadow support
      // shadowColor: 'rgba(0,0,0,0.2)',
      // shadowOffset: { x: 1, y: 1 }
      // shadowBlur: 15
    }), this.created();
  }
  // Lifecycle events
  // beforeCreate() {}
  created() {
  }
  // beforeMount() {}
  mounted() {
  }
  // beforeUnmount() {}
  unmounted() {
  }
  onUpdate(t) {
    const e = t.props, s = this._mainNode;
    if (!e || !s)
      return;
    const i = _l.reduce((l, c) => (e[c] !== void 0 && (l[c] = e[c]), l), {});
    let n = 0;
    const a = Object.keys(e).reduce((l, c) => (_l.includes(c) || (l[c] = e[c], n++), l), {});
    n > 0 && s.setAttrs(a), this.setAttrs(i);
  }
  onDestroy() {
  }
  mount(t) {
    const e = this.getParentNode(t);
    if (!e)
      throw new Error("Parent node not found");
    this.buildNode(), e.add(this), this.mounted();
  }
  update(t) {
    t.props && this.onUpdate(t);
  }
  getMainKeys() {
    return this.model.keys.filter((e) => !_l.includes(e));
  }
  buildNode() {
    throw new Error("Block.buildNode not implemented: " + this.model.flavour);
  }
  getParentNode(t) {
    const e = t.stage, s = this.model, i = s.page.getParent(s);
    return i ? e.findOne("#" + i.getFullId()) : void 0;
  }
  centerModel(t, e) {
    const s = e.getClientRect(), i = Math.max(e.width(), s.width), n = Math.max(e.height(), s.height), o = Wd(t.height, n), a = Wd(t.width, i);
    this.setAttrs({ x: a, y: o }), t.page.updateBlock(t, { x: a, y: o });
  }
  pickModelProps(t) {
    return Mo.pickModelProps(this.model, t);
  }
  destroy() {
    return this.unmounted(), this.onDestroy(), super.destroy();
  }
};
Mo.Model = Hs;
let ii = Mo;
function Wd(r, t) {
  return r = r ?? 0, t = t ?? 0, t / 2 - r / 2;
}
const Po = class Po extends Hs {
  constructor() {
    super();
  }
  static props() {
    return {
      ...super.props(),
      mode: "board"
    };
  }
};
Po.flavour = "xpix:page", Po.metadata = {
  version: 1,
  role: "root",
  children: [
    "xpix:frame"
  ]
};
let ec = Po;
const hh = class hh extends ii {
  buildNode() {
    console.log("PageBlock.buildNode:", this.model);
  }
};
hh.Model = ec;
let sc = hh;
const Oo = class Oo extends Hs {
  constructor() {
    super();
  }
  static props() {
    return {
      ...super.props(),
      background: "#FFF",
      width: 666,
      height: 666
    };
  }
};
Oo.flavour = "xpix:frame", Oo.metadata = {
  version: 1,
  role: "hub",
  parent: ["xpix:page"]
};
let rc = Oo;
const dh = class dh extends ii {
  constructor(t) {
    super(t), this.std.editor.on("frame:switch", () => {
      this.fitViewMode();
    });
  }
  fitViewMode() {
    const t = this.std.editor;
    if (t.viewMode !== "board")
      return;
    const { width: e, height: s, id: i } = this.model;
    this.setAttrs({
      visible: i === t.viewState.currentFrameId,
      y: -s / 2,
      x: -e / 2
    });
  }
  mounted() {
    this.fitViewMode();
  }
  onUpdate(t) {
    var s;
    super.onUpdate(t);
    const e = t.props || {};
    e.background && ((s = this._mainNode) == null || s.setAttrs({
      fill: e.background
    }));
  }
  buildNode() {
    const { width: t, height: e, background: s } = this.model, i = this._mainNode = new fe.Rect(this.pickModelProps({
      // keys: ['width', 'height' ],
      keys: this.getMainKeys(),
      initProps: {
        fill: s
      }
    }));
    this.setAttrs({
      clipX: 0,
      clipY: 0,
      clipWidth: t,
      clipHeight: e,
      draggable: !1
    }), this.add(i);
  }
};
dh.Model = rc;
let ic = dh;
const Ro = class Ro extends Hs {
  constructor() {
    super();
  }
  static props() {
    return {
      ...super.props(),
      type: "shape",
      fill: "#080",
      radius: 0
    };
  }
};
Ro.flavour = "xpix:shape", Ro.metadata = {
  version: 1,
  role: "content",
  parent: ["xpix:page", "xpix:frame", "xpix:group"]
};
let nc = Ro;
const X4 = {
  shape: fe.Shape,
  circle: fe.Circle,
  rect: fe.Rect
}, uh = class uh extends ii {
  onUpdate(t) {
    const e = this.model, s = t.props || {};
    e.type === "circle" && (delete s.height, delete s.width), super.onUpdate(t);
  }
  buildNode() {
    const t = this.model, e = X4[t.type];
    if (!e)
      throw new Error("ShapeClass not found");
    const s = this._mainNode = new e(this.pickModelProps({
      // keys: ['width', 'height', 'fill', 'stroke', 'strokeWidth', 'radius'],
      keys: this.getMainKeys(),
      initProps: {
        fill: "#FFF"
      }
    }));
    this.add(s);
  }
};
uh.Model = nc;
let oc = uh;
const Do = class Do extends Hs {
  constructor() {
    super();
  }
  static props() {
    return {
      ...super.props(),
      caption: "",
      assetId: ""
    };
  }
};
Do.flavour = "xpix:image", Do.metadata = {
  version: 1,
  role: "content",
  parent: ["xpix:page", "xpix:frame", "xpix:group"]
};
let ac = Do;
async function Z4(r) {
  return r instanceof Blob ? Hp(r) : J4(r);
}
async function J4(r) {
  const e = await (await fetch(r)).blob();
  return Hp(e);
}
async function Hp(r) {
  return r instanceof File || (r = new File([r], "unknown.ext", {
    type: "application/octet-stream"
  })), r;
}
async function Wp(r) {
  return r instanceof Blob ? Q4(r) : Yp(r);
}
async function Q4(r, t = !0) {
  const e = URL.createObjectURL(r);
  return t && setTimeout(() => {
    URL.revokeObjectURL(e);
  }, 6400), Yp(e);
}
async function Yp(r) {
  return new Promise((t, e) => {
    const s = document.createElement("img");
    s.onload = () => {
      s.height = s.naturalHeight, s.width = s.naturalWidth, t(s);
    }, s.onerror = () => {
      e(new Error("Image load error: " + r));
    }, s.crossOrigin = "Anonymous", s.src = r;
  });
}
const Yd = document.createElement("canvas"), fh = class fh extends ii {
  constructor() {
    super(...arguments), this.assetId = "", this.assetURL = "";
  }
  mounted() {
    this.updateImage();
  }
  onUpdate(t) {
    super.onUpdate(t), this.updateImage();
  }
  async updateImage() {
    const t = this.model, e = t.assetId, s = this._mainNode;
    if (!e) {
      s == null || s.setAttr("image", Yd);
      return;
    }
    if (e === this.assetId)
      return;
    this.assetId = e, this.assetURL && URL.revokeObjectURL(this.assetURL);
    const i = await t.page.blob.get(e);
    if (i && s) {
      const n = this.assetURL = URL.createObjectURL(i), o = this.assetImage = await Wp(n);
      s.setAttr("image", o), s.cache();
    }
  }
  buildNode() {
    const t = this._mainNode = new fe.Image({
      ...this.pickModelProps({
        // keys: ['width', 'height' ]
        keys: this.getMainKeys()
      }),
      image: Yd
    });
    this.add(t);
  }
};
fh.Model = ac;
let lc = fh;
const t8 = [
  sc,
  ic,
  oc,
  lc
], qp = t8.map((r) => ({
  schema: r.Model.defineSchema(),
  view: {
    component: new Xv(r)
  }
})), e8 = qp.map((r) => r.schema);
function s8() {
  const r = new j_().register(e8), e = new wo({ schema: r }).createPage();
  return {
    page: e,
    async init() {
      return await e.load(() => {
        const s = e.addBlock("xpix:page", {});
        e.addBlock("xpix:frame", {
          // background: '#F00',
          height: 400,
          width: 600
        }, s);
      }), e;
    }
  };
}
function r8(r, t) {
  return {
    ...t,
    page: r
  };
}
var oh = { exports: {} };
oh.exports;
(function(r) {
  var t = function() {
    var e = String.fromCharCode, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", n = {};
    function o(l, c) {
      if (!n[l]) {
        n[l] = {};
        for (var h = 0; h < l.length; h++)
          n[l][l.charAt(h)] = h;
      }
      return n[l][c];
    }
    var a = {
      compressToBase64: function(l) {
        if (l == null)
          return "";
        var c = a._compress(l, 6, function(h) {
          return s.charAt(h);
        });
        switch (c.length % 4) {
          default:
          case 0:
            return c;
          case 1:
            return c + "===";
          case 2:
            return c + "==";
          case 3:
            return c + "=";
        }
      },
      decompressFromBase64: function(l) {
        return l == null ? "" : l == "" ? null : a._decompress(l.length, 32, function(c) {
          return o(s, l.charAt(c));
        });
      },
      compressToUTF16: function(l) {
        return l == null ? "" : a._compress(l, 15, function(c) {
          return e(c + 32);
        }) + " ";
      },
      decompressFromUTF16: function(l) {
        return l == null ? "" : l == "" ? null : a._decompress(l.length, 16384, function(c) {
          return l.charCodeAt(c) - 32;
        });
      },
      //compress into uint8array (UCS-2 big endian format)
      compressToUint8Array: function(l) {
        for (var c = a.compress(l), h = new Uint8Array(c.length * 2), d = 0, u = c.length; d < u; d++) {
          var p = c.charCodeAt(d);
          h[d * 2] = p >>> 8, h[d * 2 + 1] = p % 256;
        }
        return h;
      },
      //decompress from uint8array (UCS-2 big endian format)
      decompressFromUint8Array: function(l) {
        if (l == null)
          return a.decompress(l);
        for (var c = new Array(l.length / 2), h = 0, d = c.length; h < d; h++)
          c[h] = l[h * 2] * 256 + l[h * 2 + 1];
        var u = [];
        return c.forEach(function(p) {
          u.push(e(p));
        }), a.decompress(u.join(""));
      },
      //compress into a string that is already URI encoded
      compressToEncodedURIComponent: function(l) {
        return l == null ? "" : a._compress(l, 6, function(c) {
          return i.charAt(c);
        });
      },
      //decompress from an output of compressToEncodedURIComponent
      decompressFromEncodedURIComponent: function(l) {
        return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), a._decompress(l.length, 32, function(c) {
          return o(i, l.charAt(c));
        }));
      },
      compress: function(l) {
        return a._compress(l, 16, function(c) {
          return e(c);
        });
      },
      _compress: function(l, c, h) {
        if (l == null)
          return "";
        var d, u, p = {}, f = {}, m = "", _ = "", y = "", k = 2, g = 3, v = 2, b = [], w = 0, x = 0, S;
        for (S = 0; S < l.length; S += 1)
          if (m = l.charAt(S), Object.prototype.hasOwnProperty.call(p, m) || (p[m] = g++, f[m] = !0), _ = y + m, Object.prototype.hasOwnProperty.call(p, _))
            y = _;
          else {
            if (Object.prototype.hasOwnProperty.call(f, y)) {
              if (y.charCodeAt(0) < 256) {
                for (d = 0; d < v; d++)
                  w = w << 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++;
                for (u = y.charCodeAt(0), d = 0; d < 8; d++)
                  w = w << 1 | u & 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = u >> 1;
              } else {
                for (u = 1, d = 0; d < v; d++)
                  w = w << 1 | u, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = 0;
                for (u = y.charCodeAt(0), d = 0; d < 16; d++)
                  w = w << 1 | u & 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = u >> 1;
              }
              k--, k == 0 && (k = Math.pow(2, v), v++), delete f[y];
            } else
              for (u = p[y], d = 0; d < v; d++)
                w = w << 1 | u & 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = u >> 1;
            k--, k == 0 && (k = Math.pow(2, v), v++), p[_] = g++, y = String(m);
          }
        if (y !== "") {
          if (Object.prototype.hasOwnProperty.call(f, y)) {
            if (y.charCodeAt(0) < 256) {
              for (d = 0; d < v; d++)
                w = w << 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++;
              for (u = y.charCodeAt(0), d = 0; d < 8; d++)
                w = w << 1 | u & 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = u >> 1;
            } else {
              for (u = 1, d = 0; d < v; d++)
                w = w << 1 | u, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = 0;
              for (u = y.charCodeAt(0), d = 0; d < 16; d++)
                w = w << 1 | u & 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = u >> 1;
            }
            k--, k == 0 && (k = Math.pow(2, v), v++), delete f[y];
          } else
            for (u = p[y], d = 0; d < v; d++)
              w = w << 1 | u & 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = u >> 1;
          k--, k == 0 && (k = Math.pow(2, v), v++);
        }
        for (u = 2, d = 0; d < v; d++)
          w = w << 1 | u & 1, x == c - 1 ? (x = 0, b.push(h(w)), w = 0) : x++, u = u >> 1;
        for (; ; )
          if (w = w << 1, x == c - 1) {
            b.push(h(w));
            break;
          } else
            x++;
        return b.join("");
      },
      decompress: function(l) {
        return l == null ? "" : l == "" ? null : a._decompress(l.length, 32768, function(c) {
          return l.charCodeAt(c);
        });
      },
      _decompress: function(l, c, h) {
        var d = [], u = 4, p = 4, f = 3, m = "", _ = [], y, k, g, v, b, w, x, S = { val: h(0), position: c, index: 1 };
        for (y = 0; y < 3; y += 1)
          d[y] = y;
        for (g = 0, b = Math.pow(2, 2), w = 1; w != b; )
          v = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = c, S.val = h(S.index++)), g |= (v > 0 ? 1 : 0) * w, w <<= 1;
        switch (g) {
          case 0:
            for (g = 0, b = Math.pow(2, 8), w = 1; w != b; )
              v = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = c, S.val = h(S.index++)), g |= (v > 0 ? 1 : 0) * w, w <<= 1;
            x = e(g);
            break;
          case 1:
            for (g = 0, b = Math.pow(2, 16), w = 1; w != b; )
              v = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = c, S.val = h(S.index++)), g |= (v > 0 ? 1 : 0) * w, w <<= 1;
            x = e(g);
            break;
          case 2:
            return "";
        }
        for (d[3] = x, k = x, _.push(x); ; ) {
          if (S.index > l)
            return "";
          for (g = 0, b = Math.pow(2, f), w = 1; w != b; )
            v = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = c, S.val = h(S.index++)), g |= (v > 0 ? 1 : 0) * w, w <<= 1;
          switch (x = g) {
            case 0:
              for (g = 0, b = Math.pow(2, 8), w = 1; w != b; )
                v = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = c, S.val = h(S.index++)), g |= (v > 0 ? 1 : 0) * w, w <<= 1;
              d[p++] = e(g), x = p - 1, u--;
              break;
            case 1:
              for (g = 0, b = Math.pow(2, 16), w = 1; w != b; )
                v = S.val & S.position, S.position >>= 1, S.position == 0 && (S.position = c, S.val = h(S.index++)), g |= (v > 0 ? 1 : 0) * w, w <<= 1;
              d[p++] = e(g), x = p - 1, u--;
              break;
            case 2:
              return _.join("");
          }
          if (u == 0 && (u = Math.pow(2, f), f++), d[x])
            m = d[x];
          else if (x === p)
            m = k + k.charAt(0);
          else
            return null;
          _.push(m), d[p++] = k + m.charAt(0), u--, k = m, u == 0 && (u = Math.pow(2, f), f++);
        }
      }
    };
    return a;
  }();
  r != null ? r.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return t;
  });
})(oh);
var qd = oh.exports;
class i8 {
  constructor(t) {
    this.std = t, this._jobMiddlewares = [], this._adapterMap = /* @__PURE__ */ new Map(), this.use = (e) => {
      this._jobMiddlewares.push(e);
    }, this.unuse = (e) => {
      this._jobMiddlewares = this._jobMiddlewares.filter((s) => s !== e);
    }, this.registerAdapter = (e, s, i = 0) => {
      this._adapterMap.set(e, { adapter: s, priority: i });
    }, this.unregisterAdapter = (e) => {
      this._adapterMap.delete(e);
    }, this._getDataByType = (e) => {
      const s = /* @__PURE__ */ new Map();
      for (const i of e.types)
        i === "Files" ? s.set(i, Array.from(e.files)) : s.set(i, e.getData(i));
      return (i) => {
        const n = s.get(i);
        if (n)
          return n;
        const o = s.get("Files") ?? [];
        return o.length > 0 ? o : "";
      };
    }, this._getSnapshotByPriority = async (e, s, i, n) => {
      const o = Array.from(this._adapterMap.entries()).sort((a, l) => l[1].priority - a[1].priority);
      for (const [a, { adapter: l }] of o) {
        const c = e(a);
        if (!(Array.isArray(c) && (c.length === 0 || // if all files are not the same target type, fallback to */*
        !c.map((h) => h.type === a || a === "*/*").reduce((h, d) => h && d, !0))) && c) {
          const h = this._getJob();
          l.applyConfigs(h.adapterConfigs);
          const d = {
            file: c,
            assets: h.assetsManager,
            blockVersions: s.workspace.meta.blockVersions,
            pageVersion: s.workspace.meta.pageVersion,
            workspaceVersion: s.workspace.meta.workspaceVersion,
            workspaceId: s.workspace.id,
            pageId: s.id
          }, u = await l.toSliceSnapshot(d);
          if (u)
            return h.snapshotToSlice(u, s, i, n);
        }
      }
      return null;
    }, this.copy = async (e) => this.copySlice(e), this.paste = async (e, s, i, n) => {
      const o = e.clipboardData;
      if (o)
        try {
          const a = this.readFromClipboard(o), l = await this._getSnapshotByPriority((c) => a[c], s, i, n);
          return B(l), l;
        } catch {
          const a = this._getDataByType(o);
          return await this._getSnapshotByPriority((c) => a(c), s, i, n);
        }
    }, this.pasteBlockSnapshot = async (e, s, i, n) => this._getJob().snapshotToBlock(e, s, i, n), this.copySlice = async (e) => {
      const s = Array.from(this._adapterMap.keys());
      await this.writeToClipboard(async (i) => {
        const n = { ...i };
        return await Promise.all(s.map(async (o) => {
          const a = await this._getClipboardItem(e, o);
          typeof a == "string" && (n[o] = a);
        })), n;
      });
    };
  }
  _getJob() {
    return new Vf({
      middlewares: this._jobMiddlewares,
      workspace: this.std.workspace
    });
  }
  async _getClipboardItem(t, e) {
    const s = this._getJob(), i = this._adapterMap.get(e);
    B(i);
    const { adapter: n } = i, o = await s.sliceToSnapshot(t);
    return n.applyConfigs(s.adapterConfigs), (await n.fromSliceSnapshot({ snapshot: o, assets: s.assetsManager })).file;
  }
  async writeToClipboard(t) {
    const s = await t({
      "text/plain": "",
      "text/html": "",
      "image/png": ""
    }), i = s["text/plain"], n = s["text/html"], o = s["image/png"];
    delete s["text/plain"], delete s["text/html"], delete s["image/png"];
    const l = `<div data-blocksuite-snapshot=${qd.compressToEncodedURIComponent(JSON.stringify(s))}>${n}</div>`, h = {
      "text/html": new Blob([l], {
        type: "text/html"
      })
    };
    if (i.length > 0) {
      const d = new Blob([i], {
        type: "text/plain"
      });
      h["text/plain"] = d;
    }
    if (o instanceof Blob)
      h["image/png"] = o;
    else if (o.length > 0) {
      const d = new Blob([o], {
        type: "image/png"
      });
      h["image/png"] = d;
    }
    await navigator.clipboard.write([new ClipboardItem(h)]);
  }
  readFromClipboard(t) {
    const e = t.getData("text/html"), n = new DOMParser().parseFromString(e, "text/html").querySelector("[data-blocksuite-snapshot]");
    return B(n), JSON.parse(qd.decompressFromEncodedURIComponent(n.dataset.blocksuiteSnapshot));
  }
}
const De = Symbol("cmds");
class n8 {
  constructor(t) {
    this.std = t, this._commands = /* @__PURE__ */ new Map(), this._getCommandCtx = () => ({
      std: this.std
    }), this.createChain = (e, s) => {
      const i = this._getCommandCtx, n = this.createChain, o = this.pipe, a = (l, [c, ...h]) => {
        c && c(l, (d) => a({ ...l, ...d }, h));
      };
      return {
        [De]: s,
        run: function() {
          const l = i();
          let c = !1;
          try {
            const h = this[De];
            a(l, [
              ...h,
              (d, u) => {
                c = !0, u();
              }
            ]);
          } catch (h) {
            console.error(h);
          }
          return c;
        },
        with: function(l) {
          const c = this[De];
          return n(e, [
            ...c,
            (h, d) => d(l)
          ]);
        },
        inline: function(l) {
          const c = this[De];
          return n(e, [...c, l]);
        },
        try: function(l) {
          const c = this[De];
          return n(e, [
            ...c,
            (h, d) => {
              let u = h;
              const p = l(o());
              for (const f of p)
                if (f[De] = [
                  (_, y) => {
                    y(u);
                  },
                  ...f[De]
                ], f.inline((_, y) => {
                  u = { ...u, ..._ }, y();
                }).run()) {
                  d(u);
                  break;
                }
            }
          ]);
        },
        tryAll: function(l) {
          const c = this[De];
          return n(e, [
            ...c,
            (h, d) => {
              let u = h;
              const p = l(o());
              let f = !0;
              for (const m of p)
                m[De] = [
                  (y, k) => {
                    k(u);
                  },
                  ...m[De]
                ], m.inline((y, k) => {
                  u = { ...u, ...y }, k();
                }).run() && (f = !1);
              f || d(u);
            }
          ]);
        },
        ...e
      };
    }, this.pipe = () => {
      const e = {}, s = this.createChain;
      for (const [i, n] of this._commands.entries())
        e[i] = function(o) {
          const a = this[De];
          return s(e, [
            ...a,
            (l, c) => n({ ...l, ...o }, c)
          ]);
        };
      return s(e, []);
    }, this.getChainCtx = (e) => {
      const s = {};
      return e.inline((i, n) => {
        Object.assign(s, i), n();
      }).run(), s;
    };
  }
  add(t, e) {
    return this._commands.set(t, e), this;
  }
}
class ks {
  constructor(t) {
    this.event = t, this.type = "defaultState";
  }
}
class Ir {
  constructor() {
    this._map = {}, this.add = (t) => {
      const e = t.type;
      this._map[e] && console.warn("UIEventStateContext: state name duplicated", e), this._map[e] = t;
    }, this.has = (t) => !!this._map[t], this.get = (t) => {
      const e = this._map[t];
      return B(e, `UIEventStateContext: state ${t} not found`), e;
    };
  }
  static from(...t) {
    const e = new Ir();
    return t.forEach((s) => {
      e.add(s);
    }), e;
  }
}
class Nt {
  constructor() {
  }
}
Nt.id = (r) => r[r.length - 1];
Nt.parent = (r) => r.slice(0, r.length - 1);
Nt.pathToKey = (r) => r.join("|");
Nt.keyToPath = (r) => r.split("|");
Nt.equals = (r, t) => Nt.pathToKey(r) === Nt.pathToKey(t);
Nt.includes = (r, t) => Nt.pathToKey(r).startsWith(Nt.pathToKey(t));
class vl extends ks {
  constructor({ event: t }) {
    super(t), this.type = "clipboardState", this.raw = t;
  }
}
var hs;
(function(r) {
  r.Selection = "selection", r.Target = "target";
})(hs || (hs = {}));
class Tn extends ks {
  constructor({ event: t, sourceType: e }) {
    super(t), this.type = "sourceState", this.sourceType = e;
  }
}
class o8 {
  constructor(t) {
    this._dispatcher = t, this._cut = (e) => {
      if (!this._dispatcher.isActive)
        return;
      const s = new vl({
        event: e
      });
      this._dispatcher.run("cut", this._createContext(e, s));
    }, this._copy = (e) => {
      if (!this._dispatcher.isActive)
        return;
      const s = new vl({
        event: e
      });
      this._dispatcher.run("copy", this._createContext(e, s));
    }, this._paste = (e) => {
      if (!this._dispatcher.isActive)
        return;
      const s = new vl({
        event: e
      });
      this._dispatcher.run("paste", this._createContext(e, s));
    };
  }
  _createContext(t, e) {
    return Ir.from(new ks(t), new Tn({
      event: t,
      sourceType: hs.Selection
    }), e);
  }
  listen() {
    this._dispatcher.disposables.addFromEvent(document, "cut", this._cut), this._dispatcher.disposables.addFromEvent(document, "copy", this._copy), this._dispatcher.disposables.addFromEvent(document, "paste", this._paste);
  }
}
var Ys = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Co = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, a8 = typeof navigator < "u" && /Mac/.test(navigator.platform), l8 = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Qt = 0; Qt < 10; Qt++)
  Ys[48 + Qt] = Ys[96 + Qt] = String(Qt);
for (var Qt = 1; Qt <= 24; Qt++)
  Ys[Qt + 111] = "F" + Qt;
for (var Qt = 65; Qt <= 90; Qt++)
  Ys[Qt] = String.fromCharCode(Qt + 32), Co[Qt] = String.fromCharCode(Qt);
for (var yl in Ys)
  Co.hasOwnProperty(yl) || (Co[yl] = Ys[yl]);
function c8(r) {
  var t = a8 && r.metaKey && r.shiftKey && !r.ctrlKey && !r.altKey || l8 && r.shiftKey && r.key && r.key.length == 1 || r.key == "Unidentified", e = !t && r.key || (r.shiftKey ? Co : Ys)[r.keyCode] || r.key || "Unidentified";
  return e == "Esc" && (e = "Escape"), e == "Del" && (e = "Delete"), e == "Left" && (e = "ArrowLeft"), e == "Up" && (e = "ArrowUp"), e == "Right" && (e = "ArrowRight"), e == "Down" && (e = "ArrowDown"), e;
}
const h8 = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function d8(r) {
  const t = r.split(/-(?!$)/);
  let e = t.at(-1);
  e === "Space" && (e = " ");
  let s, i, n, o;
  return t.slice(0, -1).forEach((a) => {
    if (/^(cmd|meta|m)$/i.test(a)) {
      o = !0;
      return;
    }
    if (/^a(lt)?$/i.test(a)) {
      s = !0;
      return;
    }
    if (/^(c|ctrl|control)$/i.test(a)) {
      i = !0;
      return;
    }
    if (/^s(hift)?$/i.test(a)) {
      n = !0;
      return;
    }
    if (/^mod$/i.test(a)) {
      h8 ? o = !0 : i = !0;
      return;
    }
    throw new Error("Unrecognized modifier name: " + a);
  }), s && (e = "Alt-" + e), i && (e = "Ctrl-" + e), o && (e = "Meta-" + e), n && (e = "Shift-" + e), e;
}
function wl(r, t, e = !0) {
  return t.altKey && (r = "Alt-" + r), t.ctrlKey && (r = "Ctrl-" + r), t.metaKey && (r = "Meta-" + r), e && t.shiftKey && (r = "Shift-" + r), r;
}
function u8(r) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const e in r)
    t[d8(e)] = r[e];
  return t;
}
function f8(r) {
  const t = u8(r);
  return (e) => {
    const i = e.get("keyboardState").raw, n = c8(i), o = t[wl(n, i)];
    if (o && o(e))
      return !0;
    if (n.length !== 1 || n === " ")
      return !1;
    if (i.shiftKey) {
      const c = t[wl(n, i, !1)];
      if (c && c(e))
        return !0;
    }
    const a = i.shiftKey || i.altKey || i.metaKey || n.charCodeAt(0) > 127, l = Ys[i.keyCode];
    if (a && l && l !== n) {
      const c = t[wl(l, i)];
      if (c && c(e))
        return !0;
    }
    return !1;
  };
}
class Kd extends ks {
  constructor({ event: t, composing: e }) {
    super(t), this.type = "keyboardState", this.raw = t, this.composing = e;
  }
}
class Ti extends ks {
  get x() {
    return this.point.x;
  }
  get y() {
    return this.point.y;
  }
  constructor({ event: t, rect: e, startX: s, startY: i, last: n }) {
    super(t), this.type = "pointerState";
    const o = t.clientX - e.left, a = t.clientY - e.top;
    this.raw = t, this.point = { x: o, y: a }, this.containerOffset = { x: e.left, y: e.top }, this.start = { x: s, y: i }, this.delta = n ? { x: o - n.point.x, y: a - n.point.y } : { x: 0, y: 0 }, this.keys = {
      shift: t.shiftKey,
      cmd: t.metaKey || t.ctrlKey,
      alt: t.altKey
    }, this.button = (n == null ? void 0 : n.button) || t.button, this.dragging = !!n;
  }
}
class p8 {
  constructor(t) {
    this._dispatcher = t, this.composition = !1, this._down = (e) => {
      if (!this._dispatcher.isActive)
        return;
      const s = new Kd({
        event: e,
        composing: this.composition
      });
      this._dispatcher.run("keyDown", this._createContext(e, s));
    }, this._up = (e) => {
      if (!this._dispatcher.isActive)
        return;
      const s = new Kd({
        event: e,
        composing: this.composition
      });
      this._dispatcher.run("keyUp", this._createContext(e, s));
    };
  }
  _createContext(t, e) {
    return Ir.from(new ks(t), new Tn({
      event: t,
      sourceType: hs.Selection
    }), e);
  }
  listen() {
    this._dispatcher.disposables.addFromEvent(document, "keydown", this._down), this._dispatcher.disposables.addFromEvent(document, "keyup", this._up), this._dispatcher.disposables.addFromEvent(document, "compositionstart", () => {
      this.composition = !0;
    }), this._dispatcher.disposables.addFromEvent(document, "compositionend", () => {
      this.composition = !1;
    });
  }
  bindHotkey(t, e) {
    return this._dispatcher.add("keyDown", (s) => this.composition ? !1 : f8(t)(s), e);
  }
}
function Xd(r, t) {
  const e = r.x - t.x, s = r.y - t.y;
  return Math.pow(e, 2) + Math.pow(s, 2) > 4;
}
const g8 = (r) => r.toLowerCase();
class m8 {
  constructor(t) {
    this._dispatcher = t, this._lastPointerDownEvent = null, this._startDragState = null, this._lastDragState = null, this._pointerDownCount = 0, this._dragging = !1, this._startX = -1 / 0, this._startY = -1 / 0, this._reset = () => {
      this._startX = -1 / 0, this._startY = -1 / 0, this._lastDragState = null, this._dragging = !1;
    }, this._down = (e) => {
      this._dispatcher.activate(), this._lastPointerDownEvent && e.timeStamp - this._lastPointerDownEvent.timeStamp < 500 && !Xd(e, this._lastPointerDownEvent) ? this._pointerDownCount++ : this._pointerDownCount = 1;
      const s = new Ti({
        event: e,
        rect: this._rect,
        startX: this._startX,
        startY: this._startY,
        last: null
      });
      this._startX = s.point.x, this._startY = s.point.y, this._startDragState = s, this._lastDragState = s, this._lastPointerDownEvent = e, this._dispatcher.run("pointerDown", this._createContext(e, s)), this._dispatcher.disposables.addFromEvent(document, "pointermove", this._move), this._dispatcher.disposables.addFromEvent(document, "pointerup", this._up);
    }, this._up = (e) => {
      const s = new Ti({
        event: e,
        rect: this._rect,
        startX: this._startX,
        startY: this._startY,
        last: this._lastDragState
      }), i = this._createContext(e, s);
      (() => {
        if (this._dragging) {
          this._dispatcher.run("dragEnd", i);
          return;
        }
        this._dispatcher.run("click", i), this._pointerDownCount === 2 && this._dispatcher.run("doubleClick", i), this._pointerDownCount === 3 && this._dispatcher.run("tripleClick", i);
      })(), this._dispatcher.run("pointerUp", i), this._reset(), document.removeEventListener("pointermove", this._move), document.removeEventListener("pointerup", this._up);
    }, this._move = (e) => {
      const s = this._lastDragState, i = new Ti({
        event: e,
        rect: this._rect,
        startX: this._startX,
        startY: this._startY,
        last: s
      });
      this._lastDragState = i, B(this._startDragState), !this._dragging && Xd(this._startDragState.raw, i.raw) && (this._dragging = !0, this._dispatcher.run("dragStart", this._createContext(e, this._startDragState))), this._dragging && this._dispatcher.run("dragMove", this._createContext(e, i));
    }, this._moveOn = (e) => {
      const s = new Ti({
        event: e,
        rect: this._rect,
        startX: this._startX,
        startY: this._startY,
        last: this._lastDragState
      });
      this._dispatcher.run("pointerMove", this._createContext(e, s));
    }, this._out = (e) => {
      const s = new Ti({
        event: e,
        rect: this._rect,
        startX: -1 / 0,
        startY: -1 / 0,
        last: null
      });
      this._dispatcher.run("pointerOut", this._createContext(e, s));
    };
  }
  listen() {
    this._dispatcher.disposables.addFromEvent(this._dispatcher.host, "pointerdown", this._down), this._dispatcher.disposables.addFromEvent(this._dispatcher.host, "pointermove", this._moveOn), this._dispatcher.disposables.addFromEvent(this._dispatcher.host, "pointerout", this._out);
  }
  get _rect() {
    return this._dispatcher.host.getBoundingClientRect();
  }
  _createContext(t, e) {
    return Ir.from(new ks(t), new Tn({
      event: t,
      sourceType: hs.Target
    }), e);
  }
}
class _8 {
  constructor(t) {
    this._dispatcher = t, this._prev = null, this._compositionUpdate = (e) => {
      const s = this._buildScope("compositionUpdate");
      this._dispatcher.run("compositionUpdate", this._createContext(e), s);
    }, this._compositionStart = (e) => {
      const s = this._buildScope("compositionStart");
      this._dispatcher.run("compositionStart", this._createContext(e), s);
    }, this._compositionEnd = (e) => {
      const s = this._buildScope("compositionEnd");
      this._dispatcher.run("compositionEnd", this._createContext(e), s);
    }, this._selectionChange = (e) => {
      if (!this._dispatcher.isActive)
        return;
      const s = this._buildScope("selectionChange");
      this._dispatcher.run("selectionChange", this._createContext(e), s);
    }, this._buildScope = (e) => {
      let s;
      const i = document.getSelection();
      if (i && i.rangeCount > 0) {
        const n = i.getRangeAt(0);
        s = this._buildEventScopeByNativeRange(e, n), this._prev = n;
      } else
        this._prev !== null && (s = this._buildEventScopeByNativeRange(e, this._prev), this._prev = null);
      return s;
    };
  }
  listen() {
    this._dispatcher.disposables.addFromEvent(document, "selectionchange", this._selectionChange), this._dispatcher.disposables.addFromEvent(document, "compositionstart", this._compositionStart), this._dispatcher.disposables.addFromEvent(document, "compositionend", this._compositionEnd), this._dispatcher.disposables.addFromEvent(document, "compositionupdate", this._compositionUpdate);
  }
  _createContext(t) {
    return Ir.from(new ks(t), new Tn({
      event: t,
      sourceType: hs.Selection
    }));
  }
  _buildEventScopeByNativeRange(t, e) {
    const i = this._findBlockElementPath(e).map((o) => o).filter((o) => !!o), n = Array.from(new Set(i.flatMap((o) => o.map((a) => {
      var l;
      return (l = this._dispatcher.std.page.getBlockById(a)) == null ? void 0 : l.flavour;
    })).filter((o) => !!o))).reverse();
    return this._dispatcher.buildEventScope(t, n, i);
  }
  _findBlockElementPath(t) {
    const e = t.startContainer, s = t.endContainer, i = t.commonAncestorContainer, n = this._dispatcher.std.view.getNodeView;
    if (i.nodeType === Node.TEXT_NODE) {
      const h = n(i);
      if (h)
        return [h.path];
    }
    const o = /* @__PURE__ */ new Set();
    let a = !1;
    const l = (h, d) => {
      if (h && h !== d) {
        if (h === s) {
          o.add(h), a = !1;
          return;
        }
        h === e && (a = !0), a && (h.nodeType === Node.TEXT_NODE || h.nodeType === Node.ELEMENT_NODE) && o.add(h), l(h.firstChild, d), l(h.nextSibling, d);
      }
    };
    l(i.firstChild, i);
    const c = /* @__PURE__ */ new Set();
    return o.forEach((h) => {
      const d = n(h);
      d && (c.has(d.path) || c.add(d.path));
    }), Array.from(c);
  }
}
const Kp = [
  "beforeInput",
  "blur",
  "focus",
  "drop",
  "contextMenu",
  "wheel"
], v8 = [
  "click",
  "doubleClick",
  "tripleClick",
  "pointerDown",
  "pointerMove",
  "pointerUp",
  "pointerOut",
  "dragStart",
  "dragMove",
  "dragEnd",
  "keyDown",
  "keyUp",
  "selectionChange",
  "compositionStart",
  "compositionUpdate",
  "compositionEnd",
  "cut",
  "copy",
  "paste",
  ...Kp
];
class Rs {
  constructor(t) {
    this.std = t, this.disposables = new ds(), this._handlersMap = Object.fromEntries(v8.map((e) => [e, []])), this.activate = () => {
      const e = Rs._activeDispatcher;
      e !== this && (Rs._activeDispatcher = this, e == null || e.std.selection.clear());
    }, this.deactivate = () => {
      const e = Rs._activeDispatcher;
      e && e === this && (Rs._activeDispatcher = null, e.std.selection.clear());
    }, this.bindHotkey = (...e) => this._keyboardControl.bindHotkey(...e), this._pointerControl = new m8(this), this._keyboardControl = new p8(this), this._rangeControl = new _8(this), this._clipboardControl = new o8(this);
  }
  get isActive() {
    return Rs._activeDispatcher === this;
  }
  mount() {
    this.disposables.disposed && (this.disposables = new ds()), this._bindEvents();
  }
  unmount() {
    this.disposables.dispose();
  }
  get host() {
    return this.std.host;
  }
  run(t, e, s) {
    const i = e.get("sourceState");
    if (!(!s && (s = this._getEventScope(t, i), !s)))
      for (const n of s.runners) {
        const { fn: o } = n;
        if (o(e))
          return;
      }
  }
  add(t, e, s) {
    const i = {
      fn: e,
      flavour: s == null ? void 0 : s.flavour,
      path: s == null ? void 0 : s.path
    };
    return this._handlersMap[t].unshift(i), () => {
      this._handlersMap[t].includes(i) && (this._handlersMap[t] = this._handlersMap[t].filter((n) => n !== i));
    };
  }
  get _currentSelections() {
    return this.std.selection.value;
  }
  _getEventScope(t, e) {
    if (!this._handlersMap[t])
      return;
    let i;
    switch (e.sourceType) {
      case hs.Selection: {
        i = this._buildEventScopeBySelection(t);
        break;
      }
      case hs.Target: {
        i = this._buildEventScopeByTarget(t, e.event.target);
        break;
      }
      default:
        throw new Error(`Unknown event scope source: ${e.sourceType}`);
    }
    return i;
  }
  buildEventScope(t, e, s) {
    const i = this._handlersMap[t];
    if (!i)
      return;
    const n = i.filter((l) => l.flavour === void 0 && l.path === void 0), o = i.filter((l) => {
      const c = l.path;
      return c === void 0 ? !1 : s.some((h) => Nt.includes(h, c));
    }), a = i.filter((l) => l.flavour && e.includes(l.flavour));
    return {
      runners: o.concat(a).concat(n),
      flavours: e,
      paths: s
    };
  }
  _buildEventScopeByTarget(t, e) {
    var o;
    if (!this._handlersMap[t])
      return;
    const i = (o = this.std.view.getNodeView(e)) == null ? void 0 : o.path;
    if (!i)
      return this._buildEventScopeBySelection(t);
    const n = i.map((a) => {
      var l;
      return (l = this.std.page.getBlockById(a)) == null ? void 0 : l.flavour;
    }).filter((a) => !!a).reverse();
    return this.buildEventScope(t, n, [i]);
  }
  _buildEventScopeBySelection(t) {
    if (!this._handlersMap[t])
      return;
    const s = this._currentSelections, i = {}, n = s.map((a) => a.path).flatMap((a) => a.map((l) => {
      var c;
      return (c = this.std.page.getBlockById(l)) == null ? void 0 : c.flavour;
    })).filter((a) => !a || i[a] ? !1 : (i[a] = !0, !0)).reverse(), o = s.map((a) => a.path);
    return this.buildEventScope(t, n, o);
  }
  _bindEvents() {
    Kp.forEach((t) => {
      this.disposables.addFromEvent(this.host, g8(t), (e) => {
        this.run(t, Ir.from(new ks(e), new Tn({
          event: e,
          sourceType: hs.Selection
        })));
      });
    }), this._pointerControl.listen(), this._keyboardControl.listen(), this._rangeControl.listen(), this._clipboardControl.listen();
  }
}
Rs._activeDispatcher = null;
class Va {
  constructor({ path: t }) {
    this.path = t;
  }
  get blockId() {
    return Nt.id(this.path);
  }
  is(t) {
    return this.type === t;
  }
  get type() {
    return this.constructor.type;
  }
  get group() {
    return this.constructor.group;
  }
  static fromJSON(t) {
    throw new Error("You must override this method");
  }
}
const y8 = N.object({
  path: N.array(N.string())
});
class ni extends Va {
  equals(t) {
    return t instanceof ni ? Nt.equals(this.path, t.path) : !1;
  }
  toJSON() {
    return {
      type: "block",
      path: this.path
    };
  }
  static fromJSON(t) {
    return y8.parse(t), new ni({
      path: t.path
    });
  }
}
ni.type = "block";
ni.group = "note";
const w8 = N.object({
  x: N.number(),
  y: N.number()
});
class oi extends Va {
  constructor(t, e) {
    super({ path: [] }), this.x = t, this.y = e;
  }
  equals(t) {
    return t instanceof oi ? this.x === t.x && this.y === t.y : !1;
  }
  toJSON() {
    return {
      type: "cursor",
      x: this.x,
      y: this.y
    };
  }
  static fromJSON(t) {
    return w8.parse(t), new oi(t.x, t.y);
  }
}
oi.type = "cursor";
oi.group = "edgeless";
const b8 = N.object({
  elements: N.array(N.string()),
  editing: N.boolean()
});
class ai extends Va {
  constructor(t, e, s) {
    super({ path: t }), this.elements = e, this.editing = s;
  }
  isEmpty() {
    return this.elements.length === 0 && !this.editing;
  }
  equals(t) {
    return t instanceof ai ? this.blockId === t.blockId && this.elements.length === t.elements.length && this.elements.every((e, s) => e === t.elements[s]) && this.editing === t.editing : !1;
  }
  toJSON() {
    return {
      type: "surface",
      path: this.path,
      elements: this.elements,
      editing: this.editing
    };
  }
  static fromJSON(t) {
    return b8.parse(t), new ai(t.path, t.elements, t.editing);
  }
}
ai.type = "surface";
ai.group = "edgeless";
const S8 = N.object({
  from: N.object({
    path: N.array(N.string()),
    index: N.number(),
    length: N.number()
  }),
  to: N.object({
    path: N.array(N.string()),
    index: N.number(),
    length: N.number()
  }).nullable(),
  // The `optional()` is for backward compatibility,
  // since `isReverse` may not exist in remote selection.
  isReverse: N.boolean().optional()
});
class li extends Va {
  constructor({ from: t, to: e, isReverse: s }) {
    super({
      path: t.path
    }), this.from = t, this.to = this._equalPoint(t, e) ? null : e, this.isReverse = !!s;
  }
  get start() {
    return this.isReverse ? this.to ?? this.from : this.from;
  }
  get end() {
    return this.isReverse ? this.from : this.to ?? this.from;
  }
  empty() {
    return !!this.to;
  }
  _equalPoint(t, e) {
    return t && e ? Nt.equals(t.path, e.path) && t.index === e.index && t.length === e.length : t === e;
  }
  equals(t) {
    return t instanceof li ? Nt.equals(this.path, t.path) && this._equalPoint(t.from, this.from) && this._equalPoint(t.to, this.to) : !1;
  }
  toJSON() {
    return {
      type: "text",
      from: this.from,
      to: this.to,
      isReverse: this.isReverse
    };
  }
  static fromJSON(t) {
    return S8.parse(t), new li({
      from: t.from,
      to: t.to,
      isReverse: !!t.isReverse
    });
  }
  isCollapsed() {
    return this.to === null && this.from.length === 0;
  }
  isInSameBlock() {
    return this.to === null || Nt.equals(this.from.path, this.to.path);
  }
}
li.type = "text";
li.group = "note";
class k8 {
  constructor(t) {
    this.std = t, this.disposables = new ds(), this._selectionConstructors = {}, this.slots = {
      changed: new ot(),
      remoteChanged: new ot()
    }, this._jsonToSelection = (e) => {
      const s = this._selectionConstructors[e.type];
      if (!s)
        throw new Error(`Unknown selection type: ${e.type}`);
      return s.fromJSON(e);
    }, this._itemAdded = (e) => {
      e.stackItem.meta.set("selection-state", this.value);
    }, this._itemPopped = (e) => {
      const s = e.stackItem.meta.get("selection-state");
      s && this.set(s);
    }, this._setupDefaultSelections();
  }
  register(t) {
    return [t].flat().forEach((e) => {
      this._selectionConstructors[e.type] = e;
    }), this;
  }
  get _store() {
    return this.std.workspace.awarenessStore;
  }
  _setupDefaultSelections() {
    this.register([
      li,
      ni,
      ai,
      oi
    ]);
  }
  create(t, ...e) {
    const s = this._selectionConstructors[t];
    if (!s)
      throw new Error(`Unknown selection type: ${t}`);
    return new s(...e);
  }
  get value() {
    return this._store.getLocalSelection().map((t) => this._jsonToSelection(t));
  }
  fromJSON(t) {
    const e = t.map((s) => this._jsonToSelection(s));
    return this.set(e);
  }
  set(t) {
    this._store.setLocalSelection(t.map((e) => e.toJSON())), this.slots.changed.emit(t);
  }
  setGroup(t, e) {
    const s = this.value.filter((i) => i.group !== t);
    this.set([...s, ...e]);
  }
  getGroup(t) {
    return this.value.filter((e) => e.group === t);
  }
  update(t) {
    const e = t(this.value);
    this.set(e);
  }
  clear(t) {
    if (t) {
      const e = this.value.filter((s) => !t.includes(s.type));
      this.set(e);
    } else
      this.set([]);
  }
  find(t) {
    return this.value.find((e) => e.is(t));
  }
  filter(t) {
    return this.value.filter((e) => e.is(t));
  }
  get remoteSelections() {
    const t = /* @__PURE__ */ new Map();
    return this._store.getStates().forEach((e, s) => {
      if (s === this._store.awareness.clientID)
        return;
      const i = e.selection.map((n) => {
        try {
          return this._jsonToSelection(n);
        } catch (o) {
          return console.error("Parse remote selection failed:", s, n, o), null;
        }
      }).filter((n) => !!n);
      t.set(s, i);
    }), t;
  }
  mount() {
    this.disposables.disposed && (this.disposables = new ds()), this.std.page.history.on("stack-item-added", this._itemAdded), this.std.page.history.on("stack-item-popped", this._itemPopped), this.disposables.add(this._store.slots.update.on(({ id: t }) => {
      t !== this._store.awareness.clientID && this.slots.remoteChanged.emit(this.remoteSelections);
    }));
  }
  unmount() {
    this.std.page.history.off("stack-item-added", this._itemAdded), this.std.page.history.off("stack-item-popped", this._itemPopped), this.slots.changed.dispose(), this.disposables.dispose(), this.clear();
  }
  dispose() {
    Object.values(this.slots).forEach((t) => t.dispose()), this.disposables.dispose();
  }
}
const x8 = () => ({
  mounted: new ot(),
  unmounted: new ot(),
  viewConnected: new ot(),
  viewDisconnected: new ot(),
  widgetConnected: new ot(),
  widgetDisconnected: new ot()
});
class C8 {
  constructor(t) {
    this.disposables = new ds(), this.flavour = t.flavour, this.std = t.std, this.specSlots = t.slots;
  }
  get workspace() {
    return this.std.workspace;
  }
  get page() {
    return this.std.page;
  }
  get selectionManager() {
    return this.std.selection;
  }
  get uiEventDispatcher() {
    return this.std.event;
  }
  // life cycle start
  dispose() {
    this.disposables.dispose();
  }
  mounted() {
    this.specSlots.mounted.emit({ service: this });
  }
  unmounted() {
    this.specSlots.unmounted.emit({ service: this });
  }
  // life cycle end
  // event handlers start
  handleEvent(t, e, s) {
    this.disposables.add(this.uiEventDispatcher.add(t, e, {
      flavour: s != null && s.global ? void 0 : this.flavour
    }));
  }
  bindHotKey(t, e) {
    this.disposables.add(this.uiEventDispatcher.bindHotkey(t, {
      flavour: e != null && e.global ? void 0 : this.flavour
    }));
  }
}
class E8 {
  constructor(t) {
    this.std = t, this._specs = /* @__PURE__ */ new Map(), this._services = /* @__PURE__ */ new Map(), this._disposables = new ds();
  }
  mount() {
    this._disposables.disposed && (this._disposables = new ds());
  }
  unmount() {
    this._services.forEach((t) => {
      t.dispose(), t.unmounted();
    }), this._services.clear(), this._disposables.dispose();
  }
  applySpecs(t) {
    const e = this._specs, s = this._buildSpecMap(t);
    this._diffServices(e, s), this._specs = s;
  }
  getView(t) {
    const e = this._specs.get(t);
    return e ? e.view : null;
  }
  getService(t) {
    return this._services.get(t);
  }
  _diffServices(t, e) {
    t.forEach((s, i) => {
      var o;
      if (e.has(i) && ((o = e.get(i)) == null ? void 0 : o.service) === s.service)
        return;
      const n = this._services.get(i);
      n && (n.dispose(), n.unmounted()), this._services.delete(i);
    }), e.forEach((s, i) => {
      var l;
      if (this._services.has(i))
        return;
      const n = s.service ?? C8, o = x8(), a = new n({
        flavour: i,
        std: this.std,
        slots: o
      });
      (l = s.setup) == null || l.call(s, o, this._disposables), this._services.set(i, a), a.mounted();
    });
  }
  _buildSpecMap(t) {
    const e = /* @__PURE__ */ new Map();
    return t.forEach((s) => {
      e.set(s.schema.model.flavour, s);
    }), e;
  }
}
const T8 = {
  childList: !0,
  subtree: !0
};
class A8 {
  constructor(t) {
    this.std = t, this._cachedTree = null, this._cachedPath = /* @__PURE__ */ new Map(), this.viewSpec = /* @__PURE__ */ new Set(), this.getChildren = (e) => {
      const s = this.fromPath(e);
      return s ? s.children : [];
    }, this.getNodeView = (e) => {
      for (const [s, i] of this.viewSpec.entries()) {
        const n = i.fromDOM(e);
        if (n)
          return {
            ...n
          };
      }
      return null;
    }, this.calculatePath = (e) => this._calculateNodeViewPath(e).map((i) => i.id), this._getViewSpec = (e) => Array.from(this.viewSpec).find((s) => s.type === e), this._calculateNodeViewPath = (e) => {
      if (this._cachedPath.has(e))
        return this._cachedPath.get(e);
      const s = this.std.host, i = (o, a) => {
        if (!o || o === s)
          return a;
        const l = this.getNodeView(o);
        if (!l)
          return a;
        const c = this._getViewSpec(l.type);
        B(c);
        const h = c.toDOM(l).parentElement;
        return h ? i(h, a.concat(l)) : a;
      }, n = i(e, []).reverse();
      return this._cachedPath.set(e, n), n;
    }, this.getNodeViewTree = () => {
      if (this._cachedTree)
        return this._cachedTree;
      const e = (n) => {
        const o = this.getNodeView(n);
        if (!o)
          throw new Error("nodeView not found");
        const a = this._getViewSpec(o.type);
        B(a);
        const l = a.getChildren(a.toDOM(o)).map((c) => e(c));
        return {
          ...o,
          children: l
        };
      }, s = this.std.host.querySelector("[data-block-id]");
      B(s);
      const i = {
        id: "__root__",
        path: [],
        children: [e(s)]
      };
      return this._cachedTree = i, i;
    }, this.fromPath = (e) => {
      const s = this.getNodeViewTree();
      return e.reduce((i, n) => {
        if (!i)
          return null;
        const o = i.children.find((a) => a.id === n);
        return o || null;
      }, s);
    }, this.walkThrough = (e, s = []) => {
      const i = this.fromPath(s);
      B(i, `Invalid path to get node in view: ${s}`);
      const n = (o) => (a, l) => {
        e(a, l, o) !== !0 && a.children.forEach(n(a));
      };
      i.children.forEach(n(i));
    }, this.getParent = (e) => e.length === 0 ? null : this.fromPath(Nt.parent(e)), this.findPrev = (e, s) => {
      const i = (a) => {
        const l = this.getParent(a);
        if (!l)
          return null;
        const c = this._indexOf(a, l);
        if (c === -1)
          return null;
        if (c === 0) {
          const h = this.getParent(Nt.parent(a));
          return h ? {
            nodeView: l,
            parent: h,
            index: this._indexOf(Nt.parent(a), h)
          } : null;
        }
        return {
          nodeView: l.children[c - 1],
          parent: l,
          index: c - 1
        };
      };
      let n = null;
      const o = (a) => {
        const l = i(a);
        if (!l)
          return;
        const { nodeView: c, parent: h, index: d } = l;
        if (s(c, d, h)) {
          n = c;
          return;
        }
        o(c.path);
      };
      return o(e), n;
    }, this.findNext = (e, s) => {
      const i = (a) => {
        const l = this.getParent(a);
        if (!l)
          return null;
        const c = this._indexOf(a, l);
        if (c === -1)
          return null;
        if (c === l.children.length - 1) {
          const h = this.getParent(Nt.parent(a));
          return h ? {
            nodeView: l,
            parent: h,
            index: this._indexOf(Nt.parent(a), h)
          } : null;
        }
        return {
          nodeView: l.children[c + 1],
          parent: l,
          index: c + 1
        };
      };
      let n = null;
      const o = (a) => {
        const l = i(a);
        if (!l)
          return;
        const { nodeView: c, parent: h, index: d } = l;
        if (s(c, d, h)) {
          n = c;
          return;
        }
        o(c.path);
      };
      return o(e), n;
    }, this.indexOf = (e) => {
      const s = this.getParent(e);
      return s ? this._indexOf(e, s) : -1;
    }, this._indexOf = (e, s) => s.children.findIndex((i) => i.id === e[e.length - 1]), this._observer = new MutationObserver(() => {
      this._cachedPath.clear(), this._cachedTree = null;
    });
  }
  register(t) {
    this.viewSpec.add(t);
  }
  viewFromPath(t, e) {
    const s = this.fromPath(e);
    return !s || s.type !== t ? null : s.view;
  }
  mount() {
    this._observer.observe(this.std.host, T8);
  }
  unmount() {
    this._cachedPath.clear(), this._cachedTree = null, this._observer.disconnect(), this.viewSpec.clear();
  }
}
class M8 {
  constructor(t) {
    this.host = t.host, this.workspace = t.workspace, this.page = t.page, this.event = new Rs(this), this.selection = new k8(this), this.command = new n8(this), this.spec = new E8(this), this.view = new A8(this), this.clipboard = new i8(this);
  }
  mount() {
    this.selection.mount(), this.event.mount(), this.view.mount(), this.spec.mount();
  }
  unmount() {
    this.event.unmount(), this.selection.unmount(), this.view.unmount(), this.spec.unmount();
  }
}
class P8 extends M8 {
  constructor(t) {
    super(t), this.editor = t.editor;
  }
}
var Xp = { exports: {} };
(function(r) {
  var t = Object.prototype.hasOwnProperty, e = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (e = !1));
  function i(l, c, h) {
    this.fn = l, this.context = c, this.once = h || !1;
  }
  function n(l, c, h, d, u) {
    if (typeof h != "function")
      throw new TypeError("The listener must be a function");
    var p = new i(h, d || l, u), f = e ? e + c : c;
    return l._events[f] ? l._events[f].fn ? l._events[f] = [l._events[f], p] : l._events[f].push(p) : (l._events[f] = p, l._eventsCount++), l;
  }
  function o(l, c) {
    --l._eventsCount === 0 ? l._events = new s() : delete l._events[c];
  }
  function a() {
    this._events = new s(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var c = [], h, d;
    if (this._eventsCount === 0)
      return c;
    for (d in h = this._events)
      t.call(h, d) && c.push(e ? d.slice(1) : d);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(h)) : c;
  }, a.prototype.listeners = function(c) {
    var h = e ? e + c : c, d = this._events[h];
    if (!d)
      return [];
    if (d.fn)
      return [d.fn];
    for (var u = 0, p = d.length, f = new Array(p); u < p; u++)
      f[u] = d[u].fn;
    return f;
  }, a.prototype.listenerCount = function(c) {
    var h = e ? e + c : c, d = this._events[h];
    return d ? d.fn ? 1 : d.length : 0;
  }, a.prototype.emit = function(c, h, d, u, p, f) {
    var m = e ? e + c : c;
    if (!this._events[m])
      return !1;
    var _ = this._events[m], y = arguments.length, k, g;
    if (_.fn) {
      switch (_.once && this.removeListener(c, _.fn, void 0, !0), y) {
        case 1:
          return _.fn.call(_.context), !0;
        case 2:
          return _.fn.call(_.context, h), !0;
        case 3:
          return _.fn.call(_.context, h, d), !0;
        case 4:
          return _.fn.call(_.context, h, d, u), !0;
        case 5:
          return _.fn.call(_.context, h, d, u, p), !0;
        case 6:
          return _.fn.call(_.context, h, d, u, p, f), !0;
      }
      for (g = 1, k = new Array(y - 1); g < y; g++)
        k[g - 1] = arguments[g];
      _.fn.apply(_.context, k);
    } else {
      var v = _.length, b;
      for (g = 0; g < v; g++)
        switch (_[g].once && this.removeListener(c, _[g].fn, void 0, !0), y) {
          case 1:
            _[g].fn.call(_[g].context);
            break;
          case 2:
            _[g].fn.call(_[g].context, h);
            break;
          case 3:
            _[g].fn.call(_[g].context, h, d);
            break;
          case 4:
            _[g].fn.call(_[g].context, h, d, u);
            break;
          default:
            if (!k)
              for (b = 1, k = new Array(y - 1); b < y; b++)
                k[b - 1] = arguments[b];
            _[g].fn.apply(_[g].context, k);
        }
    }
    return !0;
  }, a.prototype.on = function(c, h, d) {
    return n(this, c, h, d, !1);
  }, a.prototype.once = function(c, h, d) {
    return n(this, c, h, d, !0);
  }, a.prototype.removeListener = function(c, h, d, u) {
    var p = e ? e + c : c;
    if (!this._events[p])
      return this;
    if (!h)
      return o(this, p), this;
    var f = this._events[p];
    if (f.fn)
      f.fn === h && (!u || f.once) && (!d || f.context === d) && o(this, p);
    else {
      for (var m = 0, _ = [], y = f.length; m < y; m++)
        (f[m].fn !== h || u && !f[m].once || d && f[m].context !== d) && _.push(f[m]);
      _.length ? this._events[p] = _.length === 1 ? _[0] : _ : o(this, p);
    }
    return this;
  }, a.prototype.removeAllListeners = function(c) {
    var h;
    return c ? (h = e ? e + c : c, this._events[h] && o(this, h)) : (this._events = new s(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = e, a.EventEmitter = a, r.exports = a;
})(Xp);
var O8 = Xp.exports;
const Zp = /* @__PURE__ */ dc(O8);
class R8 extends fe.Layer {
  constructor(t) {
    super(t), this.viewPadding = 13 * 4, this.zoomRatio = 1;
    const { page: e, stage: s } = t;
    this.stage = s, this.page = e, this.centerAnchor(), this.updateMeta(), s.add(this);
  }
  updatePage(t) {
    this.reset(), this.page = t, this.updateMeta();
  }
  updateMeta() {
    var e;
    const t = (e = this.page) == null ? void 0 : e.root;
    this.setAttrs({
      id: `${t == null ? void 0 : t.flavour}:${t == null ? void 0 : t.id}`,
      name: "viewport"
    });
  }
  centerAnchor(t = this.zoomRatio) {
    const e = this.stage;
    this.setAttrs({
      offsetX: -e.width() / t / 2,
      offsetY: -e.height() / t / 2
    });
  }
  zoomTo(t = 1) {
    this.scale({ x: t, y: t }), this.centerAnchor(t), this.zoomRatio = t, this.fire("zoom", { ratio: t });
  }
  getScrollLimit() {
    const t = this.size(), e = this.getClientRect(), s = this.viewPadding, i = {
      width: e.width + s * 2,
      height: e.height + s * 2
    }, n = e.width > t.width ? (e.width - t.width) / 2 + s : 0, o = i.height > t.height ? (e.height - t.height) / 2 + s : 0;
    return {
      minX: -n,
      maxX: n,
      minY: -o,
      maxY: o
    };
  }
  scrollTo(t, e) {
    const s = this.position(), i = this.getScrollLimit();
    return t = Math.max(i.minX, Math.min(t, i.maxX)), e = Math.max(i.minY, Math.min(e, i.maxY)), s.x === t && s.y === e ? !1 : (this.position({ x: t, y: e }), this.fire("scroll", { x: t, y: e }), !0);
  }
  onResize() {
    this.centerAnchor(), this.fire("resize");
  }
  handleEvents() {
  }
  reset() {
    this.destroyChildren();
  }
}
class D8 extends fe.Transformer {
  constructor(t) {
    super(t), this.page = t.page, this.std = t.std;
    const s = getComputedStyle(this.std.host).getPropertyValue("--p") || "0.540977 0.192841 258.88531";
    this.setAttrs({
      rotateLineVisible: !1,
      rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315],
      rotateAnchorCursor: "corsshair",
      rotateAnchorOffset: 30,
      anchorStroke: `oklch(${s} / 0.8)`,
      anchorSize: 10,
      keepRatio: !0,
      flipEnabled: !1,
      shouldOverdrawWholeArea: !0
    }), this.anchorStyleFunc((i) => {
      i.stroke("rgba(0, 0, 0, 0.2)"), i.cornerRadius(10), i.hasName("top-center") || i.hasName("bottom-center") ? (i.height(6), i.offsetY(3), i.width(20), i.offsetX(10)) : (i.hasName("middle-left") || i.hasName("middle-right")) && (i.height(20), i.offsetY(10), i.width(6), i.offsetX(3));
    }), this.updateMeta();
  }
  select(t) {
    const e = this.std.selection, s = t.map((i) => e.create("block", {
      path: [i.getAttr("modelId")]
    }));
    e.set(s);
  }
  clear() {
    this.std.selection.set([]);
  }
  updateMeta() {
    var e;
    const t = (e = this.page) == null ? void 0 : e.root;
    this.setAttrs({
      id: `selection:${t == null ? void 0 : t.flavour}:${t == null ? void 0 : t.id}`,
      name: "selection"
    });
  }
  reset() {
  }
}
const I8 = fe.Util.haveIntersection;
class N8 extends fe.Rect {
  constructor(t) {
    super(t), this.className = "Selector", this.dragging = !1, this.selecting = !1, this.selectPoints = {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0
    }, this.selection = t.selection, this.container = t.container, this.stage = t.stage, this.handleEvents(), this.updateMeta();
  }
  onPointerDown(t) {
    const e = this.stage;
    if (t.target !== e)
      return;
    t.evt.preventDefault();
    const s = this.selectPoints, i = e.getPointerPosition();
    i && (s.x1 = i.x, s.y1 = i.y, s.x2 = i.x, s.y2 = i.y, this.width(0), this.height(0), this.selecting = !0);
  }
  onPointerMove(t) {
    if (!this.selecting)
      return;
    t.evt.preventDefault();
    const e = this.stage, s = this.selectPoints, i = e.getPointerPosition();
    if (!i)
      return;
    s.x2 = i.x, s.y2 = i.y;
    const { x1: n, y1: o, x2: a, y2: l } = s;
    this.setAttrs({
      visible: !0,
      x: Math.min(n, a),
      y: Math.min(o, l),
      width: Math.abs(a - n),
      height: Math.abs(l - o)
    });
  }
  onPointerUp(t) {
    if (this.selecting = !1, !this.visible())
      return;
    t.evt.preventDefault(), this.visible(!1);
    const e = this.container.find(".xpix:node"), s = this.getClientRect(), i = e.filter((n) => n.hasName("xpix:frame") ? !1 : I8(s, n.getClientRect()));
    this.selection.select(i);
  }
  onPointerClick(t) {
    if (this.visible() || this.dragging)
      return;
    const { stage: e, selection: s } = this, i = e.getPointerPosition() || { x: 0, y: 0 }, n = this.container.getIntersection(i), l = (n ? n.getAncestors() : []).filter((u) => u.hasName("xpix:node"))[0] || null;
    if (!l) {
      s.clear();
      return;
    }
    const c = t.evt.shiftKey || t.evt.ctrlKey || t.evt.metaKey, h = s.nodes(), d = h.indexOf(l) >= 0;
    if (!c && !d)
      s.select([l]);
    else if (c && d) {
      const u = h.slice();
      u.splice(u.indexOf(l), 1), s.select(u);
    } else if (c && !d) {
      const u = h.concat([l]);
      s.select(u);
    }
  }
  onDragStart() {
    this.dragging = !0;
  }
  onDragEnd(t) {
    this.dragging = !1;
    const e = t.target;
    if (!e.hasName("xpix:node") || e.hasName("selection"))
      return;
    const s = this.selection;
    s.nodes().indexOf(e) < 0 && s.select([t.target]);
  }
  handleEvents() {
    const t = this.stage;
    t.on("pointerdown", this.onPointerDown.bind(this)), t.on("pointermove", this.onPointerMove.bind(this)), t.on("pointerup", this.onPointerUp.bind(this)), t.on("pointerclick", this.onPointerClick.bind(this)), t.on("dragstart", this.onDragStart.bind(this)), t.on("dragend", this.onDragEnd.bind(this));
  }
  updateMeta() {
    this.setAttrs({
      id: "selector:page:root",
      name: "selector",
      fill: "rgba(0, 161, 255, .5)",
      visible: !1
    });
  }
  reset() {
  }
}
function F8(r) {
  return (t, e) => ({
    configurable: !0,
    enumerable: !1,
    value: Io(t[e], r)
  });
}
var L8 = Object.defineProperty, B8 = Object.getOwnPropertyDescriptor, $8 = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? B8(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && L8(t, e, i), i;
};
class Jp extends fe.Group {
  constructor(t) {
    super(t), this.className = "Scroller", this.viewport = t.viewport, this.stage = t.stage, this.setAttrs({
      name: "scroller"
    });
    const e = {
      viewport: this.viewport,
      visible: !1,
      // opacity: 0.8,
      fill: "rgba(22, 22, 22, .4)",
      stroke: "rgba(255, 255, 255, .24)",
      strokeWidth: 1,
      cornerRadius: 5,
      margin: 6,
      size: 6
    };
    this.hBar = new Zd({
      ...e,
      dir: "horizontal"
    }), this.vBar = new Zd({
      ...e,
      dir: "vertical"
    }), this.handleEvents(), this.add(this.hBar, this.vBar), this.update();
  }
  getLimit() {
    return this.viewport.getScrollLimit();
  }
  scrollTo(t, e) {
    return this.viewport.scrollTo(t, e);
  }
  update() {
    this.scrollTo(this.viewport.x(), this.viewport.y()), this.hBar.update(), this.vBar.update();
  }
  handleEvents() {
    const { stage: t, viewport: e } = this;
    e.on("scroll resize zoom", () => {
      this.update();
    }), t.on("wheel", (s) => {
      const { deltaX: i, deltaY: n } = s.evt, o = e.position();
      this.scrollTo(o.x - i, o.y - n) && s.evt.preventDefault();
    });
  }
}
$8([
  F8(0)
], Jp.prototype, "update", 1);
class Zd extends fe.Rect {
  constructor(t) {
    super(t), this.viewport = t.viewport;
    const e = (s) => {
      const i = this.getStage();
      if (!i)
        return s;
      const { size: n, margin: o } = t;
      return t.dir === "horizontal" ? (s.x = Math.max(
        Math.min(s.x, i.width() - this.width() - o),
        o
      ), s.y = i.height() - o - n) : (s.x = i.width() - o - n, s.y = Math.max(
        Math.min(s.y, i.height() - this.height() - o),
        o
      )), s;
    };
    this.setAttrs({
      name: "scrollbar:" + t.dir,
      width: t.size,
      height: t.size,
      draggable: !0,
      dragBoundFunc: e
    });
  }
  update() {
    const t = this.viewport, e = t.getClientRect(), s = t.getScrollLimit(), i = t.viewPadding, n = {
      width: t.width(),
      height: t.height()
    }, o = {
      width: e.width + i * 2,
      height: e.height + i * 2
    }, { dir: a, margin: l } = this.getAttrs(), c = this.position(), h = this.size();
    if (a === "horizontal") {
      const d = this.height(), u = Math.min(n.width / o.width, 1), p = n.width - (l + d) * 2, f = s.maxX - s.minX;
      if (!f || u >= 1) {
        this.hide();
        return;
      }
      h.width = u * p;
      const _ = (-t.x() - s.minX) / f;
      c.x = _ * (p - h.width) + l + d, c.y = n.height - h.height - l;
    } else {
      const d = this.width(), u = Math.min(n.height / o.height, 1), p = n.height - (l + d) * 2, f = s.maxY - s.minY;
      if (!f || u >= 1) {
        this.hide();
        return;
      }
      h.height = u * p;
      const _ = (-t.y() - s.minY) / f;
      c.y = _ * (p - h.height) + l + d, c.x = n.width - h.width - l;
    }
    this.position(c), this.size(h), this.show();
  }
}
class U8 {
  get viewport() {
    return this.view.viewport;
  }
  get stage() {
    return this.view.stage;
  }
  constructor(t) {
    const e = this.container = new fe.Layer(), s = this.page = t.page, i = this.view = t.view, n = this.std = t.std;
    this.selection = new D8({ page: s, std: n }), this.selector = new N8({
      selection: this.selection,
      container: this.viewport,
      stage: i.stage,
      page: s
    }), this.scroller = new Jp({
      viewport: i.viewport,
      stage: i.stage,
      page: s
    }), this.handleEvents(), this.updateMeta(), e.add(this.selector), e.add(this.selection), e.add(this.scroller), this.stage.add(e);
  }
  updateMeta() {
    var s;
    const t = (s = this.page) == null ? void 0 : s.root, e = `${t == null ? void 0 : t.flavour}:${t == null ? void 0 : t.id}`;
    this.container.setAttrs({
      id: `helper:${e}`,
      name: "helper"
    }), this.scroller.setAttrs({
      id: `scroller:${e}`
    });
  }
  handleEvents() {
    const { std: t, page: e, selection: s, viewport: i } = this;
    e.slots.blockUpdated.on(() => {
      this.scroller.update();
    }), t.selection.slots.changed.on((n) => {
      const o = n.map((a) => {
        const l = e.getBlockById(a.blockId);
        return i.findOne(`#${l == null ? void 0 : l.flavour}:${l == null ? void 0 : l.id}`);
      }).filter((a) => !!a);
      s.nodes(o);
    }), i.on("dragend", (n) => {
      const o = n.target, a = e.getBlockById(o.getAttr("modelId"));
      !a || !o.hasName("xpix:node") || e.updateBlock(a, {
        x: o.x(),
        y: o.y()
      });
    }), s.on("transformend", (n) => {
      const o = n.target, a = e.getBlockById(o.getAttr("modelId"));
      !a || !o.hasName("xpix:node") || e.updateBlock(a, {
        x: o.x(),
        y: o.y(),
        width: o.width(),
        height: o.height(),
        rotation: o.rotation(),
        scaleX: o.scaleX(),
        scaleY: o.scaleY()
      });
    });
  }
  updatePage(t) {
    this.reset(), this.page = t, this.updateMeta();
  }
  reset() {
    this.selection.clear();
  }
}
class G8 extends Zp {
  constructor(t) {
    super(), this.viewState = {
      currentFrameId: "",
      zoomRatio: 1
    };
    const { root: e, std: s, page: i, viewState: n } = t;
    this.viewState = n, this.root = e, this.page = i, this.std = s;
    const o = this.stage = new fe.Stage({
      // draggable: true
      container: e,
      height: Math.max(10, e.offsetHeight),
      width: Math.max(10, e.offsetWidth)
    });
    e.oncontextmenu = () => !1, this.viewport = new R8({
      stage: o,
      page: i
    }), this.helper = new U8({
      std: this.std,
      view: this,
      page: i
    }), this.handleEvents(), this.handleRootResize(), this.updatePage(i);
  }
  getMode() {
    var e;
    const t = (e = this.page) == null ? void 0 : e.root;
    return (t == null ? void 0 : t.mode) || "board";
  }
  getRootFrames(t = this.page) {
    var s;
    return (((s = t == null ? void 0 : t.root) == null ? void 0 : s.children) || []).filter((i) => i.flavour === "xpix:frame");
  }
  getCurrentFrame(t = this.page, e = !0) {
    const s = this.getRootFrames(t), i = this.viewState.currentFrameId, n = s.find((o) => o.id === i) || s[0];
    if (!n && e)
      throw new Error("Frame block not found");
    return n;
  }
  switchFrame(t) {
    t.id !== this.viewState.currentFrameId && (this.viewState.currentFrameId = t.id, this.emit("frame:switch", t));
  }
  renderRoot() {
    var e;
    const t = (e = this.page) == null ? void 0 : e.root;
    t && this.render({
      id: t.id || "",
      flavour: t.flavour || "",
      type: "add"
    });
  }
  render(t) {
    var d, u;
    const { std: e, page: s, stage: i } = this, { id: n, flavour: o, type: a } = t, l = (t == null ? void 0 : t.model) ?? s.getBlockById(n), c = (d = e.spec.getView(o)) == null ? void 0 : d.component;
    if (!l)
      throw new Error("model not found");
    const h = {
      action: a,
      stage: i,
      std: e
    };
    if (a === "update") {
      const p = (u = t.props) == null ? void 0 : u.key;
      h.props = p ? { [p]: l[p] } : {}, c.update(l, h);
    } else
      a === "add" ? l.role !== "root" ? c.add(l, h) : c.renderChildren(l, h) : a === "delete" && c.remove(l, h);
  }
  handleRootResize() {
    const { stage: t, root: e } = this, s = B0(() => {
      const i = Math.max(10, e.offsetHeight), n = Math.max(10, e.offsetWidth);
      t.height(i), t.width(n), this.viewport.onResize(), this.emit("resize", { width: n, height: i });
    }, 64);
    window.addEventListener("resize", s);
  }
  handleEvents() {
  }
  updatePage(t) {
    return this.reset(), this.page = t, t.slots.blockUpdated.on((e) => {
      this.render(e);
    }), this.viewport.updatePage(t), this.renderRoot(), this;
  }
  getZoomRatios() {
    return [0.02, 0.05, 0.1, 0.25, 0.5, 1, 2, 4, 8];
  }
  zoomIn() {
    const e = this.getZoomRatios().find((s) => s > this.viewState.zoomRatio);
    e && this.zoomTo(e);
  }
  zoomOut() {
    const e = this.getZoomRatios().reverse().find((s) => s < this.viewState.zoomRatio);
    e && this.zoomTo(e);
  }
  zoomTo(t) {
    const { viewport: e } = this, s = this.getZoomRatios();
    t = Math.max(s[0], Math.min(s[s.length - 1], t)), e.zoomTo(t), this.viewState.zoomRatio = t, this.emit("zoom:change", this.viewState);
  }
  zoomBy(t) {
    if (!t)
      return;
    const e = t.size(), s = this.stage.size(), i = Math.min(
      s.width / e.width,
      s.height / e.height
    );
    this.zoomTo(i);
  }
  reset() {
  }
  destroy() {
    this.stage.destroy();
  }
}
const V8 = {
  multiple: !1,
  excludeAcceptAllOption: !0,
  accept: {
    "image/*": [".png", ".gif", ".jpeg", ".jpg"]
  }
};
async function j8(r = V8) {
  if (r && (r.excludeAcceptAllOption === void 0 && (r.excludeAcceptAllOption = !0), r.accept && !r.types && (r.types = [{
    accept: r.accept
  }])), window.showOpenFilePicker) {
    const t = await window.showOpenFilePicker(r);
    return Promise.all(t.map((e) => e.getFile()));
  }
  throw new Error("File picker not supported");
}
class z8 extends Zp {
  constructor(t) {
    super(), this.viewState = {
      currentFrameId: "",
      zoomRatio: 1
    }, this.root = t.root;
  }
  get page() {
    return this._page;
  }
  get viewMode() {
    var t;
    return ((t = this.view) == null ? void 0 : t.getMode()) || "board";
  }
  // History
  get canUndo() {
    var t;
    return !!((t = this.page) != null && t.canUndo);
  }
  get canRedo() {
    var t;
    return !!((t = this.page) != null && t.canRedo);
  }
  undo() {
    var t;
    return (t = this.page) == null ? void 0 : t.undo();
  }
  redo() {
    var t;
    return (t = this.page) == null ? void 0 : t.redo();
  }
  // Std
  get command() {
    var t;
    return (t = this.std) == null ? void 0 : t.command;
  }
  get event() {
    var t;
    return (t = this.std) == null ? void 0 : t.event;
  }
  get selection() {
    var t;
    return (t = this.std) == null ? void 0 : t.selection;
  }
  async init(t = !0) {
    var i, n;
    t && !this.page && this.setPage(await this.createPage());
    const e = this.page;
    if (!e)
      throw new Error("Editor init error: Page not found");
    return e.resetHistory(), this.std = new P8({
      editor: this,
      host: this.root,
      workspace: e.workspace,
      page: e
    }), this.std.spec.applySpecs(qp), this.std.mount(), this.viewState.currentFrameId = ((n = (i = e.root) == null ? void 0 : i.children[0]) == null ? void 0 : n.id) || "", this.view = new G8({
      viewState: this.viewState,
      root: this.root,
      std: this.std,
      page: e
    }), ["frame:switch", "zoom:change"].forEach((o) => {
      var a;
      (a = this.view) == null || a.on(o, (...l) => this.emit(o, ...l));
    }), this;
  }
  setPage(t) {
    this._page = t;
  }
  async createPage() {
    return s8().init();
  }
  getRootFrames(t = this.page) {
    var s;
    return (((s = t == null ? void 0 : t.root) == null ? void 0 : s.children) || []).filter((i) => i.flavour === "xpix:frame");
  }
  getCurrentFrame(t = this.page, e = !0) {
    const s = this.getRootFrames(t), i = this.viewState.currentFrameId, n = s.find((o) => o.id === i) || s[0];
    if (!n && e)
      throw new Error("Frame block not found");
    return n;
  }
  addFrame(t) {
    t = {
      width: 600,
      height: 400,
      ...t
    };
    const e = this.getCurrentFrame();
    e && (t.width = t.width || e.width, t.height = t.height || e.height);
    const s = e.page.root, i = this.addBlock("frame", t, s);
    return this.switchFrame(i);
  }
  switchFrame(t) {
    var e, s;
    return (e = this.view) == null || e.switchFrame(t), (s = this.selection) == null || s.clear(), t;
  }
  getSelections() {
    var e;
    const t = (e = this.std) == null ? void 0 : e.selection;
    return t ? t.value : [];
  }
  getActiveBlock(t = this.getSelections()) {
    const e = this.page, s = t.length;
    return !e || s < 1 ? null : s === 1 ? this.getBlockById(t[0].blockId) : r8(e, {
      name: "xpix:mixed",
      flavour: "xpix:mixed",
      count: s
    });
  }
  getBlockById(t) {
    var s;
    const e = (s = this.page) == null ? void 0 : s.getBlockById(t);
    return e || null;
  }
  getBlockType(t = this.getActiveBlock(), e = !0) {
    if (!t)
      return "";
    let s = t.flavour.replace("xpix:", "");
    return e && (s = s.charAt(0).toUpperCase() + s.slice(1)), s;
  }
  getAddableRoot() {
    var e;
    let t = this.getCurrentFrame();
    return t || (t = (e = this.page) == null ? void 0 : e.root), t;
  }
  // async addImage(imgSource: CanvasImageSource, props?: BlockModelProps): Promise<string> {
  // async addImage(file: Blob, props?: BlockModelProps): Promise<string>;
  async addImage(t, e, s = this.getAddableRoot()) {
    const { blob: i, width: n, height: o } = await this.loadImage(t);
    e || (e = {}), e.height = e.height || o, e.width = e.width || n;
    const a = {
      width: s.width || 400,
      height: s.height || 400
    }, l = e.width / e.height;
    e.width > e.height ? (e.width = Math.min(e.width, a.width), e.height = e.width / l) : (e.height = Math.min(e.height, a.height), e.width = e.height * l), e.x = e.x ?? (a.width - e.width) / 2, e.y = e.y ?? (a.height - e.height) / 2;
    const c = await s.page.blob.set(i);
    return this.addBlock("image", {
      ...e,
      assetId: c
    }, s);
  }
  getActiveNode(t = this.getSelections()) {
    const e = this.getActiveBlock(t);
    return e ? this.getNode(e) : null;
  }
  getNode(t) {
    var s;
    let e = t;
    return typeof t == "string" && (e = this.getBlockById(t)), e || (e = this.getActiveBlock()), e ? (s = this.view) == null ? void 0 : s.stage.findOne(`#${e.getFullId()}`) : null;
  }
  addBlock(t, e = {}, s = this.getAddableRoot()) {
    if (!s)
      throw new Error("addBlock: parent not found");
    const i = s.page, n = t.indexOf("xpix:") !== 0 ? `xpix:${t}` : t;
    if (!i.getSchemaByFlavour(n))
      throw new Error("addBlock: schema not found for type: " + t);
    const a = i.addBlock(n, e, s.id), l = i.getBlockById(a);
    if (!this.getNode(l))
      throw i.deleteBlock(l), new Error("Node not found for model: " + a);
    return l;
  }
  updateBlock(t, e) {
    t.page.updateBlock(t, e);
  }
  removeBlock(t) {
    t.page.deleteBlock(t);
  }
  addAsset(t) {
    var e;
    return (e = this.page) == null ? void 0 : e.blob.set(t);
  }
  select(t) {
    if (!this.std)
      return;
    Array.isArray(t) || (t = [t]);
    const e = this.std.selection, s = t.map((i) => e.create("block", {
      path: [i.id]
    }));
    e.set(s);
  }
  // TODO: implement updatePage
  // updatePage(page: Page) {
  //   if (this.page) {
  //     const { slots } = this.page;
  //     slots.blockUpdated.dispose();
  //     slots.ready.dispose();
  //   }
  //   if (this.std) {
  //     this.std.unmount();
  //   }
  //   if (!this.view) {
  //     this.view = new Surface(this.root, this.std, page);
  //   }
  //   else {
  //     this.view.updatePage(page);
  //   }
  //   this.page = page;
  // }
  // async resetPage(page?: Page) {
  //   if (!page) {
  //     page = await this.createPage();
  //     // Reset history
  //     page.resetHistory();
  //   }
  //   this.updatePage(page);
  // }
  async exportImage(t, e) {
    if (e || (e = this.getCurrentFrame()), !e)
      throw new Error("No block found");
    if (e.count > 1)
      throw new Error("Mixed block not supported");
    const s = this.getNode(e);
    if (!s)
      throw new Error("No node found");
    const i = (t == null ? void 0 : t.mimeType) || "image/png", n = i.split("/")[1] || "png", o = `${e.name || "xpix-export-image"}.${n}`, a = await s.toBlob(t);
    return new File([a], o, {
      type: i
    });
  }
  async saveToFile(t) {
    const e = t;
    t instanceof Blob && (t = URL.createObjectURL(t));
    const s = document.createElement("a");
    s.download = e.name || "", s.href = t, s.click();
  }
  toJSON() {
    const t = this.page;
    return t ? new Vf({ workspace: t.workspace }).pageToSnapshot(t) : null;
  }
  fitZoom() {
    var s;
    const t = this.getCurrentFrame(), e = t ? this.getNode(t) : null;
    e && ((s = this.view) == null || s.zoomBy(e));
  }
  zoomIn() {
    var t;
    (t = this.view) == null || t.zoomIn();
  }
  zoomOut() {
    var t;
    (t = this.view) == null || t.zoomOut();
  }
  zoomTo(t) {
    var e;
    (e = this.view) == null || e.zoomTo(t);
  }
  // Tools
  showOpenFilePicker(t) {
    return j8(t);
  }
  async loadImage(t) {
    const e = await Z4(t), s = await Wp(e);
    return {
      height: s.naturalHeight,
      width: s.naturalWidth,
      image: s,
      blob: e
    };
  }
  // destroy
  destroy() {
    var t;
    (t = this.view) == null || t.destroy();
  }
  async runDemo() {
    await this.addBlock("shape", {
      type: "rect",
      cornerRadius: 5,
      fill: "#EEE",
      stroke: "#DDD",
      strokeWidth: 2,
      width: 560,
      height: 360,
      x: 20,
      y: 20
    }), await this.addBlock("shape", {
      type: "circle",
      radius: 70,
      fill: "red",
      stroke: "black",
      strokeWidth: 4,
      x: 80,
      y: 80
    });
    const t = 200, e = t * (window.devicePixelRatio || 1);
    await this.addImage(`https://st0.dancf.com/02/cms/202212290331-12c2.png?x-oss-process=image/interlace,1/crop,g_nw,w_${e},h_${e}`, {
      height: t,
      width: t,
      x: 190,
      y: 80
    });
  }
}
function a7(r) {
  return new z8(r);
}
const ah = "XPIX_EDITOR_INSTANCE", cc = /* @__PURE__ */ new WeakMap();
function H8() {
  return {
    editorState: Gr(null)
  };
}
async function W8(r) {
  var h;
  const t = cc.get(r);
  if (t)
    return t;
  const e = dn(ah);
  if (!e)
    throw new Error("installEditor must be call in EditorProvider context");
  const { createEditor: s } = await import("./index-DlOHvBZw.mjs"), i = s({ root: r }), n = e.editorState.value = {
    editor: i,
    docs: Gr([]),
    doc: Gr(void 0),
    selections: Gr([]),
    viewState: Gr({
      currentFrameId: "",
      zoomRatio: 1
    })
  };
  console.log("XPix-Editor:", i);
  const o = Io(() => {
    var u;
    const d = i == null ? void 0 : i.page;
    !i || !d || (n.doc.value = d, za(n.doc), n.selections.value = ((u = i.selection) == null ? void 0 : u.value) || [], za(n.selections), n.viewState.value = i.viewState, za(n.viewState));
  }, 0);
  cc.set(r, e), await i.init();
  const a = (h = i.page) == null ? void 0 : h.slots, { selection: l, view: c } = i;
  return a && l && c && (a.rootAdded.on(o), a.rootDeleted.on(o), a.blockUpdated.on(o), a.historyUpdated.on(o), l.slots.changed.on(o), c.on("frame:switch", o), c.on("zoom:change", o)), o(), Object.assign(window, {
    xxUpdateState: o,
    xxDocRef: n.doc,
    xxState: n,
    xxDoc: i.page,
    xx: i
  }), e;
}
function Y8() {
  const r = dn(ah);
  if (!r)
    throw new Error("installEditor must be call in EditorProvider context");
  const t = r.editorState.value, e = t == null ? void 0 : t.editor;
  if (e) {
    const s = e.root;
    r.editorState.value = null, cc.delete(s), e.destroy();
  } else
    console.log("unmount.error:", e, t);
}
function xs() {
  const t = dn(ah).editorState;
  if (!t.value)
    throw new Error("useEditor must be call in EditorProvider context");
  return t.value;
}
const l7 = /* @__PURE__ */ ge({
  __name: "EditorProvider",
  setup(r) {
    return Zn("XPIX_EDITOR_INSTANCE", H8()), (t, e) => jr(t.$slots, "default");
  }
}), q8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, K8 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M6 14q-.825 0-1.412-.587T4 12t.588-1.412T6 10t1.413.588T8 12t-.587 1.413T6 14m6 0q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m6 0q-.825 0-1.412-.587T16 12t.588-1.412T18 10t1.413.588T20 12t-.587 1.413T18 14"
  },
  null,
  -1
  /* HOISTED */
), X8 = [
  K8
];
function Z8(r, t) {
  return q(), ct("svg", q8, [...X8]);
}
const J8 = { name: "material-symbols-more-horiz", render: Z8 }, Q8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, t6 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M16.2 10H9.9q-1.575 0-2.738 1T6 13.5T7.163 16T9.9 17H16q.425 0 .713.288T17 18t-.288.713T16 19H9.9q-2.425 0-4.163-1.575T4 13.5t1.738-3.925T9.9 8h6.3l-1.9-1.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.6 3.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-3.6 3.6q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7z"
  },
  null,
  -1
  /* HOISTED */
), e6 = [
  t6
];
function s6(r, t) {
  return q(), ct("svg", Q8, [...e6]);
}
const r6 = { name: "material-symbols-redo-rounded", render: s6 }, i6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, n6 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M8 19q-.425 0-.712-.288T7 18t.288-.712T8 17h6.1q1.575 0 2.738-1T18 13.5T16.838 11T14.1 10H7.8l1.9 1.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275L4.7 9.7q-.15-.15-.213-.325T4.426 9t.063-.375T4.7 8.3l3.6-3.6q.275-.275.7-.275t.7.275t.275.7t-.275.7L7.8 8h6.3q2.425 0 4.163 1.575T20 13.5t-1.737 3.925T14.1 19z"
  },
  null,
  -1
  /* HOISTED */
), o6 = [
  n6
];
function a6(r, t) {
  return q(), ct("svg", i6, [...o6]);
}
const l6 = { name: "material-symbols-undo-rounded", render: a6 }, c6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, h6 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M10.35 17L16 11.35L14.55 9.9l-4.225 4.225l-2.1-2.1L6.8 13.45zM6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20zm0-2h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m5.5-6"
  },
  null,
  -1
  /* HOISTED */
), d6 = [
  h6
];
function u6(r, t) {
  return q(), ct("svg", c6, [...d6]);
}
const f6 = { name: "material-symbols-cloud-done-outline", render: u6 }, p6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, g6 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
  },
  null,
  -1
  /* HOISTED */
), m6 = [
  g6
];
function _6(r, t) {
  return q(), ct("svg", p6, [...m6]);
}
const v6 = { name: "material-symbols-menu-rounded", render: _6 }, y6 = { class: "flex-none mr-2" }, w6 = {
  href: "javascript:;",
  class: "btn btn-ghost mr-1"
}, b6 = { class: "font-medium" }, S6 = { class: "btn btn-square btn-ghost" }, k6 = {
  key: 0,
  class: "flex-1"
}, x6 = /* @__PURE__ */ A(
  "div",
  { class: "divider divider-horizontal mx-0 my-3 w-2" },
  null,
  -1
  /* HOISTED */
), C6 = {
  class: "tooltip tooltip-bottom",
  "data-tip": "Saving..."
}, E6 = {
  type: "button",
  class: "btn btn-square btn-ghost ml-1"
}, T6 = {
  class: "tooltip tooltip-bottom",
  "data-tip": "Undo"
}, A6 = ["disabled"], M6 = {
  class: "tooltip tooltip-bottom",
  "data-tip": "Redo"
}, P6 = ["disabled"], O6 = {
  key: 1,
  class: "flex-none"
}, R6 = { class: "btn ml-1 btn-square btn-ghost" }, D6 = /* @__PURE__ */ ge({
  __name: "Header",
  props: {
    title: {}
  },
  setup(r) {
    const { editor: t, doc: e } = xs();
    async function s(n = {}, o = null) {
      const a = await t.exportImage({
        pixelRatio: 2,
        ...n
      }, o);
      t.saveToFile(a);
    }
    async function i() {
      const n = t.getActiveBlock();
      if (!n || t.getSelections().length > 1) {
        alert("Please select a block to export");
        return;
      }
      const o = await t.exportImage({}, n);
      t.saveToFile(o);
    }
    return (n, o) => {
      const a = v6, l = f6, c = l6, h = r6, d = J8;
      return q(), ct(
        un,
        null,
        [
          A("div", y6, [
            A("a", w6, [
              A(
                "h1",
                b6,
                wr(n.title),
                1
                /* TEXT */
              )
            ]),
            A("button", S6, [
              $t(a)
            ])
          ]),
          he(e) ? (q(), ct("div", k6, [
            x6,
            A("div", C6, [
              A("button", E6, [
                $t(l)
              ])
            ]),
            A("div", T6, [
              A("button", {
                type: "button",
                class: "btn btn-square btn-ghost ml-1",
                disabled: !he(e).canUndo,
                onClick: o[0] || (o[0] = (u) => he(e).undo())
              }, [
                $t(c)
              ], 8, A6)
            ]),
            A("div", M6, [
              A("button", {
                type: "button",
                class: "btn btn-square btn-ghost ml-1",
                disabled: !he(e).canRedo,
                onClick: o[1] || (o[1] = (u) => he(e).redo())
              }, [
                $t(h)
              ], 8, P6)
            ]),
            Ee(' <input type="text" :value="doc.id" placeholder="Filename" class="input input-bordered ml-2 max-w-xs" /> ')
          ])) : Ee("v-if", !0),
          he(e) ? (q(), ct("div", O6, [
            A("button", {
              type: "button",
              class: "btn mr-2",
              onClick: o[2] || (o[2] = (u) => i())
            }, "Save as template"),
            A("button", {
              type: "button",
              class: "btn btn-primary",
              onClick: o[3] || (o[3] = (u) => s())
            }, "Export"),
            A("button", R6, [
              $t(d)
            ])
          ])) : Ee("v-if", !0)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
}), I6 = (r, t) => {
  const e = r[t];
  return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((s, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
}, N6 = /* @__PURE__ */ ge({
  __name: "Props",
  setup(r) {
    const { editor: t, selections: e } = xs(), s = hr(() => t.getCurrentFrame()), i = hr(() => t.getActiveBlock(e.value));
    function n(o = "") {
      return o || (o = t.getBlockType(i.value)), !o && s.value && (o = "Frame"), Ie(() => I6(/* @__PURE__ */ Object.assign({ "../props/Frame.vue": () => import("./Frame-BG0LQ7HK.mjs"), "../props/Image.vue": () => import("./Image-DE8MwS7-.mjs"), "../props/Mixed.vue": () => import("./Mixed-D4tCVZCd.mjs"), "../props/PropBase.vue": () => import("./PropBase-BnpGy5wI.mjs"), "../props/Shape.vue": () => import("./Shape-BL0n5txR.mjs") }), `../props/${o}.vue`));
    }
    return (o, a) => i.value || s.value ? (q(), ye(bl(n()), {
      key: 0,
      activeBlock: i.value || s.value
    }, null, 8, ["activeBlock"])) : Ee("v-if", !0);
  }
}), F6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, L6 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
  },
  null,
  -1
  /* HOISTED */
), B6 = [
  L6
];
function $6(r, t) {
  return q(), ct("svg", F6, [...B6]);
}
const Qp = { name: "material-symbols-add", render: $6 }, U6 = { class: "xpix-editor-nav p-4" }, G6 = ["onClick"], V6 = { key: 1 }, j6 = ["src", "width", "height", "alt"], z6 = /* @__PURE__ */ ge({
  __name: "Nav",
  setup(r) {
    const { editor: t, doc: e } = xs(), s = hr(() => t.getRootFrames(e.value)), i = hr(() => t.getCurrentFrame(e.value));
    function n() {
      t.addFrame({});
    }
    function o(f) {
      t.switchFrame(f);
    }
    const a = Ri(/* @__PURE__ */ new Map());
    function l(f) {
      const m = f.id, _ = a.value.get(m) || "";
      return _ || h(f), _;
    }
    async function c(f) {
      try {
        const m = 300 / f.width, _ = await t.exportImage({
          pixelRatio: m
        }, f), y = a.value.get(f.id);
        y && URL.revokeObjectURL(y);
        const k = URL.createObjectURL(_);
        a.value.set(f.id, k);
      } catch (m) {
        console.log("makeThumbnail.error:", m);
      }
    }
    const h = Io(c, 1024, {
      leading: !0
    });
    let d = null;
    Jd(() => {
      const f = e.value;
      d = f == null ? void 0 : f.slots.historyUpdated.on(() => {
        h(i.value);
      });
    }), i0(() => {
      d && d.dispose();
    });
    const u = Ri(null);
    function p(f) {
      var _;
      return (((_ = u.value) == null ? void 0 : _.clientWidth) || 120) * f.height / f.width;
    }
    return (f, m) => {
      const _ = Qp;
      return q(), ct("div", U6, [
        A(
          "div",
          {
            class: "btn mb-4 shadow-xl rounded-lg text-2xl w-full h-28",
            onClick: m[0] || (m[0] = (y) => n()),
            ref_key: "addBtn",
            ref: u
          },
          [
            $t(_)
          ],
          512
          /* NEED_PATCH */
        ),
        (q(!0), ct(
          un,
          null,
          hc(s.value, (y) => (q(), ct("div", {
            class: n0(["mb-4 shadow-xl rounded-lg cursor-pointer overflow-hidden max", i.value === y ? "outline outline-offset-1 outline-2 outline-primary" : ""]),
            key: y.id,
            onClick: (k) => o(y)
          }, [
            l(y) ? (q(), ct("figure", V6, [
              A("img", {
                src: l(y),
                width: y.width,
                height: y.height,
                alt: y.name
              }, null, 8, j6)
            ])) : (q(), ct(
              "div",
              {
                key: 0,
                class: "skeleton",
                style: Qd({ height: p(y) + "px" })
              },
              null,
              4
              /* STYLE */
            ))
          ], 10, G6))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
}), H6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, W6 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M7 13q-.425 0-.712-.288T6 12t.288-.712T7 11h10q.425 0 .713.288T18 12t-.288.713T17 13z"
  },
  null,
  -1
  /* HOISTED */
), Y6 = [
  W6
];
function q6(r, t) {
  return q(), ct("svg", H6, [...Y6]);
}
const K6 = { name: "material-symbols-check-indeterminate-small-rounded", render: q6 }, X6 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Z6 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M10 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h5V2q0-.425.288-.712T11 1t.713.288T12 2v20q0 .425-.288.713T11 23t-.712-.288T10 22zm-5-3h5v-6zm9 3v-9l5 6V5h-5V3h5q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
  },
  null,
  -1
  /* HOISTED */
), J6 = [
  Z6
];
function Q6(r, t) {
  return q(), ct("svg", X6, [...J6]);
}
const t9 = { name: "material-symbols-compare-rounded", render: Q6 }, e9 = { class: "xpix-editor-Helper absolute right-4 bottom-4" }, s9 = {
  class: "tooltip tooltip-top join-item",
  "data-tip": "Original picture"
}, r9 = {
  type: "button",
  class: "btn btn-sm btn-outline btn-ghost ml-1"
}, i9 = { class: "join ml-2" }, n9 = /* @__PURE__ */ ge({
  __name: "Helper",
  setup(r) {
    const { editor: t, viewState: e } = xs(), s = hr(() => (e.value.zoomRatio * 100).toFixed(2).replace(/\.\d+$/, "") + "%");
    function i() {
      e.value.zoomRatio === 1 ? t.fitZoom() : t.zoomTo(1);
    }
    return (n, o) => {
      const a = t9, l = K6, c = Qp;
      return q(), ct("div", e9, [
        A("div", s9, [
          A("button", r9, [
            $t(a)
          ])
        ]),
        A("div", i9, [
          A("button", {
            type: "button",
            class: "btn btn-sm btn-outline btn-ghost join-item",
            onClick: o[0] || (o[0] = (h) => he(t).zoomOut())
          }, [
            $t(l)
          ]),
          A(
            "button",
            {
              type: "button",
              class: "btn btn-sm btn-outline btn-ghost join-item min-w-16 text-center",
              onClick: o[1] || (o[1] = (h) => i())
            },
            wr(s.value),
            1
            /* TEXT */
          ),
          A("button", {
            type: "button",
            class: "btn btn-sm btn-outline btn-ghost join-item",
            onClick: o[2] || (o[2] = (h) => he(t).zoomIn())
          }, [
            $t(c)
          ])
        ])
      ]);
    };
  }
}), o9 = { class: "xpix-editor-header flex-none navbar border-b border-slate-700" }, a9 = { class: "xpix-editor-main flex flex-1" }, l9 = { class: "xpix-editor-res flex-none border-r border-slate-700 w-[152px]" }, c9 = { class: "xpix-editor-container relative flex-1" }, h9 = /* @__PURE__ */ A(
  "div",
  { class: "loader text-center p-20" },
  [
    /* @__PURE__ */ A("div", { class: "join mx-auto" }, [
      /* @__PURE__ */ A("i", { class: "loading loading-spinner loading-md" }),
      /* @__PURE__ */ A("span", { class: "ml-1" }, "Loading...")
    ])
  ],
  -1
  /* HOISTED */
), d9 = [
  h9
], u9 = { class: "xpix-editor-props relative flex-none bg-base-100 border-l border-slate-700 w-[320px]" }, c7 = /* @__PURE__ */ ge({
  __name: "ImageEditor",
  props: {
    config: {
      type: Object,
      required: !0,
      default: () => ({
        title: "XPix-Editor"
      })
    }
  },
  setup(r) {
    const t = Ri(null), e = Gr(void 0);
    return o0(Y8), Jd(async () => {
      const i = (await W8(t.value)).editorState.value;
      if (!i)
        throw new Error("Failed to install editor");
      a0(i.doc, (n) => {
        e.value = n;
      }), i.editor.runDemo();
    }), (s, i) => (q(), ct(
      un,
      null,
      [
        A("div", o9, [
          e.value ? (q(), ye(he(D6), {
            key: 0,
            title: r.config.title || "XPix-Editor"
          }, null, 8, ["title"])) : Ee("v-if", !0)
        ]),
        A("div", a9, [
          A("div", l9, [
            e.value ? (q(), ye(he(z6), { key: 0 })) : Ee("v-if", !0)
          ]),
          A("div", c9, [
            A(
              "div",
              {
                class: "xpix-editor-shell absolute w-full h-full",
                ref_key: "shell",
                ref: t
              },
              d9,
              512
              /* NEED_PATCH */
            ),
            e.value ? (q(), ye(he(n9), { key: 0 })) : Ee("v-if", !0)
          ]),
          A("div", u9, [
            e.value ? (q(), ye(he(N6), { key: 0 })) : Ee("v-if", !0)
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
function f9() {
  return dn("activeBlock");
}
function p9() {
  return dn("activeBlockType");
}
const g9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, m9 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
  },
  null,
  -1
  /* HOISTED */
), _9 = [
  m9
];
function v9(r, t) {
  return q(), ct("svg", g9, [..._9]);
}
const y9 = { name: "material-symbols-arrow-back-ios-rounded", render: v9 }, w9 = { class: "xpix-editor-prop xpix-editor-prop-tool absolute left-0 top-0 w-full h-full bg-base-100" }, b9 = { class: "xpix-prop-header px-4 border-b border-slate-700" }, S9 = { class: "xpix-prop-main mx-4 py-5" }, k9 = /* @__PURE__ */ A(
  "span",
  { class: "p-2" },
  "Current Block props not implemented yet",
  -1
  /* HOISTED */
), lh = /* @__PURE__ */ ge({
  __name: "PropToolBase",
  props: {
    toolName: String
  },
  emits: ["close"],
  setup(r, { emit: t }) {
    const e = t, s = p9();
    return (i, n) => {
      const o = y9;
      return q(), ct("div", w9, [
        A("div", b9, [
          jr(i.$slots, "header", {}, () => [
            A("a", {
              href: "javascript:;",
              class: "flex py-4",
              onClick: n[0] || (n[0] = (a) => e("close"))
            }, [
              $t(o),
              A(
                "span",
                null,
                wr(r.toolName || he(s)),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        A("div", S9, [
          jr(i.$slots, "default", {}, () => [
            k9
          ])
        ])
      ]);
    };
  }
}), x9 = { class: "color-group" }, C9 = /* @__PURE__ */ A(
  "i",
  { class: "w-8 h-8 cursor-pointer" },
  "Transparent",
  -1
  /* HOISTED */
), E9 = [
  C9
], T9 = { class: "avatar color-picker" }, A9 = /* @__PURE__ */ A(
  "i",
  { class: "w-8 h-8 cursor-pointer" },
  "Color picker",
  -1
  /* HOISTED */
), M9 = ["value"], P9 = ["onClick"], O9 = { class: "w-8 h-8 cursor-pointer" }, h7 = /* @__PURE__ */ ge({
  __name: "Background",
  props: {
    toolName: {}
  },
  setup(r) {
    const t = r, e = Ri([
      "#2C2C2C",
      "#7D7D7D",
      "#BABABA",
      "#D9D9D9",
      "#FEFEFE",
      "#B0301D",
      "#EE9130",
      "#F2DC6C",
      "#64833F",
      "#6E79E5",
      "#212080",
      "#411E80",
      "#D28C86",
      "#F6D3A3",
      "#EBE1A6",
      "#BAD993",
      "#8C94D1",
      "#686AB2",
      "#9F8DC1"
    ]), { editor: s } = xs(), i = f9();
    function n(a) {
      s.updateBlock(i, {
        background: a || "transparent"
      });
    }
    function o(a) {
      n(a.target.value);
    }
    return (a, l) => (q(), ye(
      lh,
      fn(pn(t)),
      {
        default: Fs(() => [
          A("div", x9, [
            A("div", {
              class: "avatar color-transparent",
              onClick: l[0] || (l[0] = (c) => n(""))
            }, E9),
            A("div", T9, [
              A9,
              A("input", {
                type: "color",
                value: he(i).background,
                onInput: o
              }, null, 40, M9)
            ]),
            (q(!0), ct(
              un,
              null,
              hc(e.value, (c) => (q(), ct("div", {
                key: c,
                class: "avatar",
                style: Qd({ backgroundColor: c }),
                onClick: (h) => n(c)
              }, [
                A(
                  "i",
                  O9,
                  wr(c),
                  1
                  /* TEXT */
                )
              ], 12, P9))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), R9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, D9 = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M7.077 16.077q-1.692 0-2.884-1.192Q3 13.693 3 12t1.193-2.885t2.884-1.193h3.038q.213 0 .357.144q.143.144.143.357t-.143.356t-.357.143h-3.04q-1.267 0-2.171.904T4 12t.904 2.173t2.17.904h3.041q.213 0 .357.144q.143.144.143.357t-.143.356t-.357.143zM9 12.5q-.213 0-.356-.144Q8.5 12.212 8.5 12t.144-.356T9 11.5h6q.213 0 .356.144q.144.144.144.357t-.144.356T15 12.5zm4.885 3.577q-.213 0-.357-.144q-.143-.144-.143-.357t.143-.356t.357-.143h3.04q1.267 0 2.171-.904T20 12t-.904-2.173t-2.17-.904h-3.041q-.213 0-.357-.144q-.143-.144-.143-.357t.143-.356t.357-.143h3.038q1.692 0 2.885 1.192T21 12t-1.193 2.885t-2.884 1.193z"
  },
  null,
  -1
  /* HOISTED */
), I9 = [
  D9
];
function N9(r, t) {
  return q(), ct("svg", R9, [...I9]);
}
const F9 = { name: "material-symbols-light-link-rounded", render: N9 }, L9 = /* @__PURE__ */ A(
  "h5",
  { class: "mb-3" },
  "Custom size",
  -1
  /* HOISTED */
), B9 = { class: "form-inner flex" }, $9 = /* @__PURE__ */ A(
  "input",
  {
    name: "width",
    type: "text",
    placeholder: "0",
    class: "input input-bordered w-16",
    min: "0",
    max: "1000",
    step: "1",
    value: "100"
  },
  null,
  -1
  /* HOISTED */
), U9 = { class: "btn btn-outline mx-2" }, G9 = /* @__PURE__ */ A(
  "input",
  {
    type: "text",
    placeholder: "0",
    class: "input input-bordered w-16",
    min: "0",
    max: "1000",
    step: "1",
    value: "100"
  },
  null,
  -1
  /* HOISTED */
), V9 = /* @__PURE__ */ A(
  "select",
  { class: "select select-bordered w-20 ml-3" },
  [
    /* @__PURE__ */ A("option", { selected: "" }, "px"),
    /* @__PURE__ */ A("option", null, "cm")
  ],
  -1
  /* HOISTED */
), d7 = /* @__PURE__ */ ge({
  __name: "Resize",
  props: {
    toolName: {}
  },
  setup(r) {
    const t = r;
    return (e, s) => {
      const i = F9;
      return q(), ye(
        lh,
        l0(t, { "tool-name": "Resize" }),
        {
          default: Fs(() => [
            A(
              "form",
              {
                action: ".",
                onSubmit: s[0] || (s[0] = c0(() => {
                }, ["prevent"]))
              },
              [
                L9,
                A("div", B9, [
                  $9,
                  A("button", U9, [
                    $t(i)
                  ]),
                  G9,
                  V9
                ])
              ],
              32
              /* NEED_HYDRATION */
            )
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
}), j9 = { class: "p-5" }, u7 = /* @__PURE__ */ ge({
  __name: "Crop",
  props: {
    toolName: {}
  },
  setup(r) {
    const t = r;
    return (e, s) => (q(), ye(
      lh,
      fn(pn(t)),
      {
        default: Fs(() => [
          A(
            "p",
            j9,
            "TODO: " + wr(e.toolName),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), z9 = { class: "x-pix-editor-prop" }, H9 = { class: "x-pix-prop-header px-4 border-b border-slate-700" }, W9 = { class: "py-4" }, Y9 = { class: "x-pix-prop-main mx-4 pb-5" }, q9 = /* @__PURE__ */ A(
  "span",
  { class: "p-2" },
  "Current Block props not implemented yet",
  -1
  /* HOISTED */
), K9 = { class: "x-pix-editor-prop" }, X9 = /* @__PURE__ */ A(
  "div",
  { class: "x-pix-prop-header px-4 border-t border-b border-slate-700" },
  [
    /* @__PURE__ */ Ee(' <h4 class="py-4">Tools</h4> ')
  ],
  -1
  /* HOISTED */
), Z9 = { class: "x-pix-prop-main mx-4 py-5" }, ch = /* @__PURE__ */ ge({
  __name: "PropBase",
  props: {
    activeBlock: {}
  },
  setup(r) {
    const t = r, { editor: e } = xs(), s = hr(() => {
      const n = e.getBlockType(t.activeBlock);
      return n !== "Frame" ? n : "Board";
    });
    Zn("activeBlock", t.activeBlock), Zn("activeBlockType", s);
    function i() {
      e.removeBlock(t.activeBlock);
    }
    return (n, o) => (q(), ct("div", z9, [
      A("div", H9, [
        jr(n.$slots, "header", {}, () => [
          A(
            "h4",
            W9,
            wr(s.value),
            1
            /* TEXT */
          )
        ])
      ]),
      A("div", Y9, [
        jr(n.$slots, "default", {}, () => [
          q9
        ])
      ]),
      jr(n.$slots, "ext", {}, () => [
        A("div", K9, [
          X9,
          A("div", Z9, [
            A("button", {
              type: "button",
              class: "btn mr-2 mb-2",
              onClick: o[0] || (o[0] = (a) => i())
            }, "Delete")
          ])
        ])
      ])
    ]));
  }
}), J9 = { class: "menu xpix-prop-menu" }, Q9 = ["onClick"], tw = { class: "xpix-editor-prop" }, ew = /* @__PURE__ */ A(
  "div",
  { class: "xpix-prop-header px-4 border-t border-b border-slate-700" },
  [
    /* @__PURE__ */ Ee(' <h4 class="py-4">Tools</h4> ')
  ],
  -1
  /* HOISTED */
), sw = { class: "xpix-prop-main mx-4 py-5" }, f7 = /* @__PURE__ */ ge({
  __name: "Frame",
  props: {
    activeBlock: {}
  },
  setup(r) {
    const { editor: t } = xs(), e = r;
    Zn("activeBlock", e.activeBlock);
    const s = Ri([
      {
        name: "Resize",
        component() {
          return Ie(() => import("./Resize-Cs2cscyE.mjs"));
        },
        icon() {
          return Ie(() => import("./resize-24-regular-BLDpl91H.mjs"));
        },
        active: !1
      },
      {
        name: "Crop",
        component() {
          return Ie(() => import("./Crop-BJ-X2Cse.mjs"));
        },
        icon() {
          return Ie(() => Promise.resolve().then(() => jw));
        },
        active: !1
      },
      {
        name: "Background",
        component() {
          return Ie(() => import("./Background-BjDJJwIa.mjs"));
        },
        icon() {
          return Ie(() => import("./background-line-fipp9b-9.mjs"));
        },
        active: !1
      },
      {
        name: "Magic Eraser",
        component() {
          return Ie(() => import("./MagicEraser-7oFqEmwG.mjs"));
        },
        icon() {
          return Ie(() => import("./eraser-square-outline-Db_onrHD.mjs"));
        },
        active: !1
      },
      {
        name: "AI Image to Image",
        component() {
          return Ie(() => import("./AIImageToImage-5EAeqhKx.mjs"));
        },
        icon() {
          return Ie(() => import("./magic-wand-D4ychCuF.mjs"));
        },
        active: !1
      }
    ]), i = hr(() => s.value.find((l) => l.active));
    function n(l) {
      i.value && (i.value.active = !1), l.active = !0;
    }
    const o = {
      runDemo() {
        return t.runDemo();
      },
      clearStage() {
        alert("Clear stage not implemented yet");
      },
      addRect() {
        return t.addBlock("shape", {
          type: "rect",
          x: 100,
          y: 100,
          width: 100,
          height: 100,
          fill: "#EE0"
        });
      },
      addCircle() {
        return t.addBlock("shape", {
          type: "circle",
          x: 100,
          y: 100,
          radius: 50,
          fill: "#0A0"
        });
      },
      async addImage() {
        (await t.showOpenFilePicker({
          excludeAcceptAllOption: !0,
          multiple: !0,
          accept: {
            "image/*": [".png", ".gif", ".jpeg", ".jpg"]
          }
        })).forEach(async (c) => {
          if (c.type.startsWith("image/")) {
            const h = await t.addImage(c);
            t.select(h);
          }
        });
      },
      addText() {
        return t.addBlock("text", {
          x: 100,
          y: 100,
          text: "Hello World",
          fontSize: 24,
          fill: "#000"
        });
      }
    };
    function a(l, ...c) {
      const h = o[l];
      return typeof h == "function" ? h(...c) : alert("Action not implemented");
    }
    return (l, c) => (q(), ye(
      ch,
      fn(pn(e)),
      {
        ext: Fs(() => [
          A("div", tw, [
            ew,
            A("div", sw, [
              A("button", {
                type: "button",
                class: "btn mr-2 mb-2",
                onClick: c[1] || (c[1] = (h) => a("runDemo"))
              }, "Run demo"),
              A("button", {
                type: "button",
                class: "btn mr-2 mb-2",
                onClick: c[2] || (c[2] = (h) => a("clearStage"))
              }, "Clear stage"),
              A("button", {
                type: "button",
                class: "btn mr-2 mb-2",
                onClick: c[3] || (c[3] = (h) => a("addRect"))
              }, "Add Rect"),
              A("button", {
                type: "button",
                class: "btn mr-2 mb-2",
                onClick: c[4] || (c[4] = (h) => a("addCircle"))
              }, "Add Circle"),
              A("button", {
                type: "button",
                class: "btn mr-2 mb-2",
                onClick: c[5] || (c[5] = (h) => a("addImage"))
              }, "Add Image"),
              A("button", {
                type: "button",
                class: "btn mr-2 mb-2",
                onClick: c[6] || (c[6] = (h) => a("addText"))
              }, "Add Text")
            ])
          ])
        ]),
        default: Fs(() => [
          A("ul", J9, [
            (q(!0), ct(
              un,
              null,
              hc(s.value, (h) => (q(), ct("li", {
                key: h.name
              }, [
                A("a", {
                  onClick: (d) => n(h)
                }, [
                  (q(), ye(bl(h.icon()))),
                  A(
                    "span",
                    null,
                    wr(h.name),
                    1
                    /* TEXT */
                  )
                ], 8, Q9)
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          i.value ? (q(), ye(bl(i.value.component()), {
            key: 0,
            "tool-name": i.value.name,
            onClose: c[0] || (c[0] = (h) => i.value.active = !1)
          }, null, 40, ["tool-name"])) : Ee("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), rw = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
}, iw = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M40 88h33a32 32 0 0 0 62 0h81a8 8 0 0 0 0-16h-81a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16m64-24a16 16 0 1 1-16 16a16 16 0 0 1 16-16m112 104h-17a32 32 0 0 0-62 0H40a8 8 0 0 0 0 16h97a32 32 0 0 0 62 0h17a8 8 0 0 0 0-16m-48 24a16 16 0 1 1 16-16a16 16 0 0 1-16 16"
  },
  null,
  -1
  /* HOISTED */
), nw = [
  iw
];
function ow(r, t) {
  return q(), ct("svg", rw, [...nw]);
}
const t0 = { name: "ph-sliders-horizontal", render: ow }, aw = { class: "menu xpix-prop-menu" }, lw = /* @__PURE__ */ A(
  "span",
  null,
  "Color",
  -1
  /* HOISTED */
), p7 = /* @__PURE__ */ ge({
  __name: "Shape",
  props: {
    activeBlock: {}
  },
  setup(r) {
    const t = r, { editor: e } = xs();
    async function s() {
      const i = t.activeBlock;
      i && e.updateBlock(i, {
        fill: i.fill === "#0A0" ? "#F00" : "#0A0"
      });
    }
    return (i, n) => {
      const o = t0;
      return q(), ye(
        ch,
        fn(pn(t)),
        {
          default: Fs(() => [
            A("ul", aw, [
              A("li", null, [
                A("a", {
                  onClick: n[0] || (n[0] = (a) => s())
                }, [
                  $t(o),
                  lw
                ])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
}), cw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, hw = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M4.025 14.85q-.4-.3-.387-.787t.412-.788q.275-.2.6-.2t.6.2L12 18.5l6.75-5.225q.275-.2.6-.2t.6.2q.4.3.413.787t-.388.788l-6.75 5.25q-.55.425-1.225.425t-1.225-.425zm6.75.2l-5.75-4.475Q4.25 9.975 4.25 9t.775-1.575l5.75-4.475q.55-.425 1.225-.425t1.225.425l5.75 4.475q.775.6.775 1.575t-.775 1.575l-5.75 4.475q-.55.425-1.225.425t-1.225-.425M12 13.45L17.75 9L12 4.55L6.25 9zM12 9"
  },
  null,
  -1
  /* HOISTED */
), dw = [
  hw
];
function uw(r, t) {
  return q(), ct("svg", cw, [...dw]);
}
const fw = { name: "material-symbols-layers-outline-rounded", render: uw }, pw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, gw = /* @__PURE__ */ A(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M2.5 17a4 4 0 1 0 8 0a4 4 0 1 0-8 0m11 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0"
  },
  null,
  -1
  /* HOISTED */
), mw = [
  gw
];
function _w(r, t) {
  return q(), ct("svg", pw, [...mw]);
}
const vw = { name: "tabler-circles", render: _w }, yw = {
  viewBox: "0 0 20 20",
  width: "1.2em",
  height: "1.2em"
}, ww = /* @__PURE__ */ h0('<g fill="none"><path d="M16.5 2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 0 1H17v.5a.5.5 0 0 1-1 0V4h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5z" fill="currentColor"></path><path d="M6.5 6a.5.5 0 1 0 0-1H6v-.5a.5.5 0 1 0-1 0V5h-.5a.5.5 0 0 0 0 1H5v.5a.5.5 0 0 0 1 0V6h.5z" fill="currentColor"></path><path d="M15.5 15a.5.5 0 0 0 0-1H15v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V15h.5z" fill="currentColor"></path><path d="M13.435 6.566a1.914 1.914 0 0 0-2.708 0l-8.166 8.166a1.914 1.914 0 1 0 2.707 2.707l8.167-8.166a1.914 1.914 0 0 0 0-2.707zm-2 .707a.914.914 0 1 1 1.292 1.293l-.477.477l-1.293-1.293l.478-.477zM10.25 8.457l1.293 1.293l-6.982 6.982a.914.914 0 0 1-1.293-1.292l6.982-6.983z" fill="currentColor"></path></g>', 1), bw = [
  ww
];
function Sw(r, t) {
  return q(), ct("svg", yw, [...bw]);
}
const kw = { name: "fluent-magic-wand20-regular", render: Sw }, xw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Cw = /* @__PURE__ */ A(
  "g",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  },
  [
    /* @__PURE__ */ A("path", { d: "M10.1 2.18a9.9 9.9 0 0 1 3.8 0m3.7 1.53a10 10 0 0 1 2.69 2.7m1.53 3.69a9.9 9.9 0 0 1 0 3.8m-1.53 3.7a10 10 0 0 1-2.7 2.69m-3.69 1.53a9.9 9.9 0 0 1-3.8 0m-3.7-1.53a10 10 0 0 1-2.69-2.7M2.18 13.9a9.9 9.9 0 0 1 0-3.8m1.53-3.7a10 10 0 0 1 2.7-2.69" }),
    /* @__PURE__ */ A("circle", {
      cx: "12",
      cy: "12",
      r: "1"
    })
  ],
  -1
  /* HOISTED */
), Ew = [
  Cw
];
function Tw(r, t) {
  return q(), ct("svg", xw, [...Ew]);
}
const Aw = { name: "lucide-circle-dot-dashed", render: Tw }, Mw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Pw = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M3 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1zm15 9.56l2 2v2.88l-2-2zm0-2.12V8h2v3.44zM18 17v-.44l2 2V20h-1.44l-2-2H17a1 1 0 0 0 1-1m-3.56 1l2 2h-2.88l-2-2zm-5 0l2 2H8v-2zM4 16V4h12v12z"
  },
  null,
  -1
  /* HOISTED */
), Ow = [
  Pw
];
function Rw(r, t) {
  return q(), ct("svg", Mw, [...Ow]);
}
const Dw = { name: "ri-shadow-line", render: Rw }, Iw = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Nw = /* @__PURE__ */ A(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m6.141 4.163l12 1.714a1 1 0 0 1 .859.99v10.266a1 1 0 0 1-.859.99l-12 1.714A1 1 0 0 1 5 18.847V5.153a1 1 0 0 1 1.141-.99"
  },
  null,
  -1
  /* HOISTED */
), Fw = [
  Nw
];
function Lw(r, t) {
  return q(), ct("svg", Iw, [...Fw]);
}
const Bw = { name: "tabler-perspective", render: Lw }, $w = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
}, Uw = /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M17 23v-4H7q-.825 0-1.412-.587T5 17V7H1V5h4V1h2v16h16v2h-4v4zm0-8V7H9V5h8q.825 0 1.413.588T19 7v8z"
  },
  null,
  -1
  /* HOISTED */
), Gw = [
  Uw
];
function Vw(r, t) {
  return q(), ct("svg", $w, [...Gw]);
}
const e0 = { name: "material-symbols-crop", render: Vw }, jw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: e0
}, Symbol.toStringTag, { value: "Module" })), zw = { class: "menu xpix-prop-menu" }, Hw = /* @__PURE__ */ A(
  "span",
  null,
  "Crop",
  -1
  /* HOISTED */
), Ww = /* @__PURE__ */ A(
  "span",
  null,
  "Correct Deformation",
  -1
  /* HOISTED */
), Yw = /* @__PURE__ */ A(
  "span",
  null,
  "Shadows",
  -1
  /* HOISTED */
), qw = /* @__PURE__ */ A(
  "span",
  null,
  "Cutout",
  -1
  /* HOISTED */
), Kw = /* @__PURE__ */ A(
  "span",
  null,
  "1-Tap Unblur",
  -1
  /* HOISTED */
), Xw = /* @__PURE__ */ A(
  "span",
  null,
  "Color",
  -1
  /* HOISTED */
), Zw = /* @__PURE__ */ A(
  "span",
  null,
  "Paint Matting",
  -1
  /* HOISTED */
), Jw = /* @__PURE__ */ A(
  "span",
  null,
  "Transparency",
  -1
  /* HOISTED */
), Qw = { class: "xpix-editor-prop" }, t7 = /* @__PURE__ */ A(
  "div",
  { class: "xpix-prop-header px-4 border-t border-b border-slate-700" },
  [
    /* @__PURE__ */ Ee(' <h4 class="py-4">Tools</h4> ')
  ],
  -1
  /* HOISTED */
), e7 = { class: "xpix-prop-main mx-4 py-5" }, g7 = /* @__PURE__ */ ge({
  __name: "Image",
  props: {
    activeBlock: {}
  },
  setup(r) {
    const t = r, { editor: e, doc: s } = xs();
    async function i() {
      const o = t.activeBlock, a = await e.showOpenFilePicker();
      if (o) {
        const { blob: l } = await e.loadImage(a[0]), c = await e.addAsset(l);
        e.updateBlock(o, { assetId: c });
      }
    }
    function n() {
      e.removeBlock(t.activeBlock);
    }
    return (o, a) => {
      const l = e0, c = Bw, h = Dw, d = Aw, u = kw, p = t0, f = vw, m = fw;
      return q(), ye(
        ch,
        fn(pn(t)),
        {
          ext: Fs(() => [
            A("div", Qw, [
              t7,
              A("div", e7, [
                A("button", {
                  type: "button",
                  class: "btn mr-2 mb-2",
                  onClick: a[0] || (a[0] = (_) => i())
                }, "Replace Image"),
                A("button", {
                  type: "button",
                  class: "btn mr-2 mb-2",
                  onClick: a[1] || (a[1] = (_) => n())
                }, "Delete")
              ])
            ])
          ]),
          default: Fs(() => [
            A("ul", zw, [
              A("li", null, [
                A("a", null, [
                  $t(l),
                  Hw
                ])
              ]),
              A("li", null, [
                A("a", null, [
                  $t(c),
                  Ww
                ])
              ]),
              A("li", null, [
                A("a", null, [
                  $t(h),
                  Yw
                ])
              ]),
              A("li", null, [
                A("a", null, [
                  $t(d),
                  qw
                ])
              ]),
              A("li", null, [
                A("a", null, [
                  $t(u),
                  Kw
                ])
              ]),
              A("li", null, [
                A("a", null, [
                  $t(p),
                  Xw
                ])
              ]),
              A("li", null, [
                A("a", null, [
                  $t(f),
                  Zw
                ])
              ]),
              A("li", null, [
                A("a", null, [
                  $t(m),
                  Jw
                ])
              ])
            ])
          ]),
          _: 1
          /* STABLE */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
});
export {
  Va as B,
  z8 as E,
  Vf as J,
  sv as P,
  j_ as S,
  wo as W,
  Hs as X,
  f7 as _,
  s8 as a,
  r8 as b,
  a7 as c,
  $c as d,
  H2 as e,
  g7 as f,
  ch as g,
  p7 as h,
  d7 as i,
  u7 as j,
  h7 as k,
  lh as l,
  l7 as m,
  c7 as n,
  H8 as o,
  W8 as p,
  Y8 as q,
  D6 as r,
  N6 as s,
  z6 as t,
  xs as u,
  n9 as v,
  f9 as w,
  p9 as x
};
