import { setLogLevel as Un, LogLevel as mt, setLogExtension as Fn, RoomEvent as b, ParticipantEvent as y, Room as gt, Track as D, TrackEvent as jt, compareVersions as jn } from "livekit-client";
import * as M from "react";
const Qe = Math.min, le = Math.max, Ie = Math.round, te = (e) => ({
  x: e,
  y: e
}), Wn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Bn = {
  start: "end",
  end: "start"
};
function bt(e, t, n) {
  return le(e, Qe(t, n));
}
function je(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ie(e) {
  return e.split("-")[0];
}
function We(e) {
  return e.split("-")[1];
}
function Wt(e) {
  return e === "x" ? "y" : "x";
}
function Bt(e) {
  return e === "y" ? "height" : "width";
}
function pe(e) {
  return ["top", "bottom"].includes(ie(e)) ? "y" : "x";
}
function Vt(e) {
  return Wt(pe(e));
}
function Vn(e, t, n) {
  n === void 0 && (n = !1);
  const r = We(e), i = Vt(e), o = Bt(i);
  let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = Me(s)), [s, Me(s)];
}
function Hn(e) {
  const t = Me(e);
  return [Je(e), t, Je(t)];
}
function Je(e) {
  return e.replace(/start|end/g, (t) => Bn[t]);
}
function zn(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function Yn(e, t, n, r) {
  const i = We(e);
  let o = zn(ie(e), n === "start", r);
  return i && (o = o.map((s) => s + "-" + i), t && (o = o.concat(o.map(Je)))), o;
}
function Me(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Wn[t]);
}
function Gn(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Kn(e) {
  return typeof e != "number" ? Gn(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function De(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function yt(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = pe(t), s = Vt(t), a = Bt(s), c = ie(t), u = o === "y", l = r.x + r.width / 2 - i.width / 2, f = r.y + r.height / 2 - i.height / 2, h = r[a] / 2 - i[a] / 2;
  let d;
  switch (c) {
    case "top":
      d = {
        x: l,
        y: r.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: l,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - i.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (We(t)) {
    case "start":
      d[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      d[s] += h * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const qn = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = n, a = o.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: l,
    y: f
  } = yt(u, r, c), h = r, d = {}, m = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: g,
      fn: v
    } = a[p], {
      x: S,
      y: P,
      data: L,
      reset: T
    } = await v({
      x: l,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: i,
      middlewareData: d,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = S ?? l, f = P ?? f, d = {
      ...d,
      [g]: {
        ...d[g],
        ...L
      }
    }, T && m <= 50 && (m++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (u = T.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : T.rects), {
      x: l,
      y: f
    } = yt(u, h, c)), p = -1);
  }
  return {
    x: l,
    y: f,
    placement: h,
    strategy: i,
    middlewareData: d
  };
};
async function Ht(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: s,
    elements: a,
    strategy: c
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: d = 0
  } = je(t, e), m = Kn(d), g = a[h ? f === "floating" ? "reference" : "floating" : f], v = De(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: l,
    strategy: c
  })), S = f === "floating" ? {
    x: r,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), L = await (o.isElement == null ? void 0 : o.isElement(P)) ? await (o.getScale == null ? void 0 : o.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = De(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: S,
    offsetParent: P,
    strategy: c
  }) : S);
  return {
    top: (v.top - T.top + m.top) / L.y,
    bottom: (T.bottom - v.bottom + m.bottom) / L.y,
    left: (v.left - T.left + m.left) / L.x,
    right: (T.right - v.right + m.right) / L.x
  };
}
const Qn = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: s,
        initialPlacement: a,
        platform: c,
        elements: u
      } = t, {
        mainAxis: l = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...g
      } = je(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const v = ie(i), S = pe(a), P = ie(a) === a, L = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), T = h || (P || !p ? [Me(a)] : Hn(a)), ae = m !== "none";
      !h && ae && T.push(...Yn(a, p, m, L));
      const ce = [a, ...T], C = await Ht(t, g), x = [];
      let _ = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (l && x.push(C[v]), f) {
        const G = Vn(i, s, L);
        x.push(C[G[0]], C[G[1]]);
      }
      if (_ = [..._, {
        placement: i,
        overflows: x
      }], !x.every((G) => G <= 0)) {
        var w, E;
        const G = (((w = o.flip) == null ? void 0 : w.index) || 0) + 1, Ae = ce[G];
        if (Ae)
          return {
            data: {
              index: G,
              overflows: _
            },
            reset: {
              placement: Ae
            }
          };
        let ye = (E = _.filter((ue) => ue.overflows[0] <= 0).sort((ue, X) => ue.overflows[1] - X.overflows[1])[0]) == null ? void 0 : E.placement;
        if (!ye)
          switch (d) {
            case "bestFit": {
              var V;
              const ue = (V = _.filter((X) => {
                if (ae) {
                  const Z = pe(X.placement);
                  return Z === S || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Z === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((Z) => Z > 0).reduce((Z, $n) => Z + $n, 0)]).sort((X, Z) => X[1] - Z[1])[0]) == null ? void 0 : V[0];
              ue && (ye = ue);
              break;
            }
            case "initialPlacement":
              ye = a;
              break;
          }
        if (i !== ye)
          return {
            reset: {
              placement: ye
            }
          };
      }
      return {};
    }
  };
};
async function Jn(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = ie(n), a = We(n), c = pe(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, l = o && c ? -1 : 1, f = je(t, e);
  let {
    mainAxis: h,
    crossAxis: d,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof m == "number" && (d = a === "end" ? m * -1 : m), c ? {
    x: d * l,
    y: h * u
  } : {
    x: h * u,
    y: d * l
  };
}
const Xn = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: s,
        middlewareData: a
      } = t, c = await Jn(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: i + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Zn = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: v,
              y: S
            } = g;
            return {
              x: v,
              y: S
            };
          }
        },
        ...c
      } = je(e, t), u = {
        x: n,
        y: r
      }, l = await Ht(t, c), f = pe(ie(i)), h = Wt(f);
      let d = u[h], m = u[f];
      if (o) {
        const g = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", S = d + l[g], P = d - l[v];
        d = bt(S, d, P);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", S = m + l[g], P = m - l[v];
        m = bt(S, m, P);
      }
      const p = a.fn({
        ...t,
        [h]: d,
        [f]: m
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [h]: o,
            [f]: s
          }
        }
      };
    }
  };
};
function Be() {
  return typeof window < "u";
}
function ge(e) {
  return zt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function U(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Q(e) {
  var t;
  return (t = (zt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zt(e) {
  return Be() ? e instanceof Node || e instanceof U(e).Node : !1;
}
function H(e) {
  return Be() ? e instanceof Element || e instanceof U(e).Element : !1;
}
function K(e) {
  return Be() ? e instanceof HTMLElement || e instanceof U(e).HTMLElement : !1;
}
function wt(e) {
  return !Be() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof U(e).ShadowRoot;
}
function Ce(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = z(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function er(e) {
  return ["table", "td", "th"].includes(ge(e));
}
function Ve(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function st(e) {
  const t = at(), n = H(e) ? z(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tr(e) {
  let t = ne(e);
  for (; K(t) && !he(t); ) {
    if (st(t))
      return t;
    if (Ve(t))
      return null;
    t = ne(t);
  }
  return null;
}
function at() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function he(e) {
  return ["html", "body", "#document"].includes(ge(e));
}
function z(e) {
  return U(e).getComputedStyle(e);
}
function He(e) {
  return H(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ne(e) {
  if (ge(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    wt(e) && e.host || // Fallback.
    Q(e)
  );
  return wt(t) ? t.host : t;
}
function Yt(e) {
  const t = ne(e);
  return he(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : K(t) && Ce(t) ? t : Yt(t);
}
function Gt(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const i = Yt(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), s = U(i);
  return o ? (Xe(s), t.concat(s, s.visualViewport || [], Ce(i) ? i : [], [])) : t.concat(i, Gt(i, []));
}
function Xe(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kt(e) {
  const t = z(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = K(e), o = i ? e.offsetWidth : n, s = i ? e.offsetHeight : r, a = Ie(n) !== o || Ie(r) !== s;
  return a && (n = o, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function qt(e) {
  return H(e) ? e : e.contextElement;
}
function fe(e) {
  const t = qt(e);
  if (!K(t))
    return te(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = Kt(t);
  let s = (o ? Ie(n.width) : n.width) / r, a = (o ? Ie(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const nr = /* @__PURE__ */ te(0);
function Qt(e) {
  const t = U(e);
  return !at() || !t.visualViewport ? nr : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function rr(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== U(e) ? !1 : t;
}
function Se(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = qt(e);
  let s = te(1);
  t && (r ? H(r) && (s = fe(r)) : s = fe(e));
  const a = rr(o, n, r) ? Qt(o) : te(0);
  let c = (i.left + a.x) / s.x, u = (i.top + a.y) / s.y, l = i.width / s.x, f = i.height / s.y;
  if (o) {
    const h = U(o), d = r && H(r) ? U(r) : r;
    let m = h, p = Xe(m);
    for (; p && r && d !== m; ) {
      const g = fe(p), v = p.getBoundingClientRect(), S = z(p), P = v.left + (p.clientLeft + parseFloat(S.paddingLeft)) * g.x, L = v.top + (p.clientTop + parseFloat(S.paddingTop)) * g.y;
      c *= g.x, u *= g.y, l *= g.x, f *= g.y, c += P, u += L, m = U(p), p = Xe(m);
    }
  }
  return De({
    width: l,
    height: f,
    x: c,
    y: u
  });
}
function ir(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", s = Q(r), a = t ? Ve(t.floating) : !1;
  if (r === s || a && o)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = te(1);
  const l = te(0), f = K(r);
  if ((f || !f && !o) && ((ge(r) !== "body" || Ce(s)) && (c = He(r)), K(r))) {
    const h = Se(r);
    u = fe(r), l.x = h.x + r.clientLeft, l.y = h.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + l.x,
    y: n.y * u.y - c.scrollTop * u.y + l.y
  };
}
function or(e) {
  return Array.from(e.getClientRects());
}
function Ze(e, t) {
  const n = He(e).scrollLeft;
  return t ? t.left + n : Se(Q(e)).left + n;
}
function sr(e) {
  const t = Q(e), n = He(e), r = e.ownerDocument.body, i = le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ze(e);
  const a = -n.scrollTop;
  return z(r).direction === "rtl" && (s += le(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: s,
    y: a
  };
}
function ar(e, t) {
  const n = U(e), r = Q(e), i = n.visualViewport;
  let o = r.clientWidth, s = r.clientHeight, a = 0, c = 0;
  if (i) {
    o = i.width, s = i.height;
    const u = at();
    (!u || u && t === "fixed") && (a = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a,
    y: c
  };
}
function cr(e, t) {
  const n = Se(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = K(e) ? fe(e) : te(1), s = e.clientWidth * o.x, a = e.clientHeight * o.y, c = i * o.x, u = r * o.y;
  return {
    width: s,
    height: a,
    x: c,
    y: u
  };
}
function xt(e, t, n) {
  let r;
  if (t === "viewport")
    r = ar(e, n);
  else if (t === "document")
    r = sr(Q(e));
  else if (H(t))
    r = cr(t, n);
  else {
    const i = Qt(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return De(r);
}
function Jt(e, t) {
  const n = ne(e);
  return n === t || !H(n) || he(n) ? !1 : z(n).position === "fixed" || Jt(n, t);
}
function ur(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Gt(e, []).filter((a) => H(a) && ge(a) !== "body"), i = null;
  const o = z(e).position === "fixed";
  let s = o ? ne(e) : e;
  for (; H(s) && !he(s); ) {
    const a = z(s), c = st(s);
    !c && a.position === "fixed" && (i = null), (o ? !c && !i : !c && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Ce(s) && !c && Jt(e, s)) ? r = r.filter((l) => l !== s) : i = a, s = ne(s);
  }
  return t.set(e, r), r;
}
function lr(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const s = [...n === "clippingAncestors" ? Ve(t) ? [] : ur(t, this._c) : [].concat(n), r], a = s[0], c = s.reduce((u, l) => {
    const f = xt(t, l, i);
    return u.top = le(f.top, u.top), u.right = Qe(f.right, u.right), u.bottom = Qe(f.bottom, u.bottom), u.left = le(f.left, u.left), u;
  }, xt(t, a, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function fr(e) {
  const {
    width: t,
    height: n
  } = Kt(e);
  return {
    width: t,
    height: n
  };
}
function dr(e, t, n) {
  const r = K(t), i = Q(t), o = n === "fixed", s = Se(e, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = te(0);
  if (r || !r && !o)
    if ((ge(t) !== "body" || Ce(i)) && (a = He(t)), r) {
      const d = Se(t, !0, o, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else i && (c.x = Ze(i));
  let u = 0, l = 0;
  if (i && !r && !o) {
    const d = i.getBoundingClientRect();
    l = d.top + a.scrollTop, u = d.left + a.scrollLeft - // RTL <body> scrollbar.
    Ze(i, d);
  }
  const f = s.left + a.scrollLeft - c.x - u, h = s.top + a.scrollTop - c.y - l;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Ge(e) {
  return z(e).position === "static";
}
function St(e, t) {
  if (!K(e) || z(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Q(e) === n && (n = n.ownerDocument.body), n;
}
function Xt(e, t) {
  const n = U(e);
  if (Ve(e))
    return n;
  if (!K(e)) {
    let i = ne(e);
    for (; i && !he(i); ) {
      if (H(i) && !Ge(i))
        return i;
      i = ne(i);
    }
    return n;
  }
  let r = St(e, t);
  for (; r && er(r) && Ge(r); )
    r = St(r, t);
  return r && he(r) && Ge(r) && !st(r) ? n : r || tr(e) || n;
}
const pr = async function(e) {
  const t = this.getOffsetParent || Xt, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: dr(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function hr(e) {
  return z(e).direction === "rtl";
}
const vr = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ir,
  getDocumentElement: Q,
  getClippingRect: lr,
  getOffsetParent: Xt,
  getElementRects: pr,
  getClientRects: or,
  getDimensions: fr,
  getScale: fe,
  isElement: H,
  isRTL: hr
}, mr = Xn, gr = Zn, br = Qn, yr = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: vr,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return qn(e, t, {
    ...i,
    platform: o
  });
};
var ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function wr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Le = { exports: {} }, xr = Le.exports, Tt;
function Sr() {
  return Tt || (Tt = 1, function(e) {
    (function(t, n) {
      e.exports ? e.exports = n() : t.log = n();
    })(xr, function() {
      var t = function() {
      }, n = "undefined", r = typeof window !== n && typeof window.navigator !== n && /Trident\/|MSIE /.test(window.navigator.userAgent), i = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
      ], o = {}, s = null;
      function a(p, g) {
        var v = p[g];
        if (typeof v.bind == "function")
          return v.bind(p);
        try {
          return Function.prototype.bind.call(v, p);
        } catch {
          return function() {
            return Function.prototype.apply.apply(v, [p, arguments]);
          };
        }
      }
      function c() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function u(p) {
        return p === "debug" && (p = "log"), typeof console === n ? !1 : p === "trace" && r ? c : console[p] !== void 0 ? a(console, p) : console.log !== void 0 ? a(console, "log") : t;
      }
      function l() {
        for (var p = this.getLevel(), g = 0; g < i.length; g++) {
          var v = i[g];
          this[v] = g < p ? t : this.methodFactory(v, p, this.name);
        }
        if (this.log = this.debug, typeof console === n && p < this.levels.SILENT)
          return "No console available for logging";
      }
      function f(p) {
        return function() {
          typeof console !== n && (l.call(this), this[p].apply(this, arguments));
        };
      }
      function h(p, g, v) {
        return u(p) || f.apply(this, arguments);
      }
      function d(p, g) {
        var v = this, S, P, L, T = "loglevel";
        typeof p == "string" ? T += ":" + p : typeof p == "symbol" && (T = void 0);
        function ae(w) {
          var E = (i[w] || "silent").toUpperCase();
          if (!(typeof window === n || !T)) {
            try {
              window.localStorage[T] = E;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(T) + "=" + E + ";";
            } catch {
            }
          }
        }
        function ce() {
          var w;
          if (!(typeof window === n || !T)) {
            try {
              w = window.localStorage[T];
            } catch {
            }
            if (typeof w === n)
              try {
                var E = window.document.cookie, V = encodeURIComponent(T), G = E.indexOf(V + "=");
                G !== -1 && (w = /^([^;]+)/.exec(
                  E.slice(G + V.length + 1)
                )[1]);
              } catch {
              }
            return v.levels[w] === void 0 && (w = void 0), w;
          }
        }
        function C() {
          if (!(typeof window === n || !T)) {
            try {
              window.localStorage.removeItem(T);
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(T) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {
            }
          }
        }
        function x(w) {
          var E = w;
          if (typeof E == "string" && v.levels[E.toUpperCase()] !== void 0 && (E = v.levels[E.toUpperCase()]), typeof E == "number" && E >= 0 && E <= v.levels.SILENT)
            return E;
          throw new TypeError("log.setLevel() called with invalid level: " + w);
        }
        v.name = p, v.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, v.methodFactory = g || h, v.getLevel = function() {
          return L ?? P ?? S;
        }, v.setLevel = function(w, E) {
          return L = x(w), E !== !1 && ae(L), l.call(v);
        }, v.setDefaultLevel = function(w) {
          P = x(w), ce() || v.setLevel(w, !1);
        }, v.resetLevel = function() {
          L = null, C(), l.call(v);
        }, v.enableAll = function(w) {
          v.setLevel(v.levels.TRACE, w);
        }, v.disableAll = function(w) {
          v.setLevel(v.levels.SILENT, w);
        }, v.rebuild = function() {
          if (s !== v && (S = x(s.getLevel())), l.call(v), s === v)
            for (var w in o)
              o[w].rebuild();
        }, S = x(
          s ? s.getLevel() : "WARN"
        );
        var _ = ce();
        _ != null && (L = x(_)), l.call(v);
      }
      s = new d(), s.getLogger = function(g) {
        if (typeof g != "symbol" && typeof g != "string" || g === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var v = o[g];
        return v || (v = o[g] = new d(
          g,
          s.methodFactory
        )), v;
      };
      var m = typeof window !== n ? window.log : void 0;
      return s.noConflict = function() {
        return typeof window !== n && window.log === s && (window.log = m), s;
      }, s.getLoggers = function() {
        return o;
      }, s.default = s, s;
    });
  }(Le)), Le.exports;
}
var Tr = Sr();
const Er = /* @__PURE__ */ wr(Tr);
var et = function(e, t) {
  return et = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, et(e, t);
};
function J(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  et(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
function Cr(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(s) {
      s(o);
    });
  }
  return new (n || (n = Promise))(function(o, s) {
    function a(l) {
      try {
        u(r.next(l));
      } catch (f) {
        s(f);
      }
    }
    function c(l) {
      try {
        u(r.throw(l));
      } catch (f) {
        s(f);
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Zt(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = a(0), s.throw = a(1), s.return = a(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function a(u) {
    return function(l) {
      return c([u, l]);
    };
  }
  function c(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; ) try {
      if (r = 1, i && (o = u[0] & 2 ? i.return : u[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, u[1])).done) return o;
      switch (i = 0, o && (u = [u[0] & 2, o.value]), u[0]) {
        case 0:
        case 1:
          o = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!o || u[1] > o[0] && u[1] < o[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < o[1]) {
            n.label = o[1], o = u;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2], n.ops.push(u);
            break;
          }
          o[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = t.call(e, n);
    } catch (l) {
      u = [6, l], i = 0;
    } finally {
      r = o = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function ve(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function me(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (a) {
    s = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}
function Te(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function de(e) {
  return this instanceof de ? (this.v = e, this) : new de(e);
}
function Pr(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, o = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(d) {
    return function(m) {
      return Promise.resolve(m).then(d, f);
    };
  }
  function a(d, m) {
    r[d] && (i[d] = function(p) {
      return new Promise(function(g, v) {
        o.push([d, p, g, v]) > 1 || c(d, p);
      });
    }, m && (i[d] = m(i[d])));
  }
  function c(d, m) {
    try {
      u(r[d](m));
    } catch (p) {
      h(o[0][3], p);
    }
  }
  function u(d) {
    d.value instanceof de ? Promise.resolve(d.value.v).then(l, f) : h(o[0][2], d);
  }
  function l(d) {
    c("next", d);
  }
  function f(d) {
    c("throw", d);
  }
  function h(d, m) {
    d(m), o.shift(), o.length && c(o[0][0], o[0][1]);
  }
}
function Ar(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof ve == "function" ? ve(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(o) {
    n[o] = e[o] && function(s) {
      return new Promise(function(a, c) {
        s = e[o](s), i(a, c, s.done, s.value);
      });
    };
  }
  function i(o, s, a, c) {
    Promise.resolve(c).then(function(u) {
      o({ value: u, done: a });
    }, s);
  }
}
function A(e) {
  return typeof e == "function";
}
function ct(e) {
  var t = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = e(t);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ke = ct(function(e) {
  return function(n) {
    e(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Re(e, t) {
  if (e) {
    var n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Pe = function() {
  function e(t) {
    this.initialTeardown = t, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var t, n, r, i, o;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var a = ve(s), c = a.next(); !c.done; c = a.next()) {
              var u = c.value;
              u.remove(this);
            }
          } catch (p) {
            t = { error: p };
          } finally {
            try {
              c && !c.done && (n = a.return) && n.call(a);
            } finally {
              if (t) throw t.error;
            }
          }
        else
          s.remove(this);
      var l = this.initialTeardown;
      if (A(l))
        try {
          l();
        } catch (p) {
          o = p instanceof Ke ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var h = ve(f), d = h.next(); !d.done; d = h.next()) {
            var m = d.value;
            try {
              Et(m);
            } catch (p) {
              o = o ?? [], p instanceof Ke ? o = Te(Te([], me(o)), me(p.errors)) : o.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            d && !d.done && (i = h.return) && i.call(h);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (o)
        throw new Ke(o);
    }
  }, e.prototype.add = function(t) {
    var n;
    if (t && t !== this)
      if (this.closed)
        Et(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this))
            return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }, e.prototype._hasParent = function(t) {
    var n = this._parentage;
    return n === t || Array.isArray(n) && n.includes(t);
  }, e.prototype._addParent = function(t) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }, e.prototype._removeParent = function(t) {
    var n = this._parentage;
    n === t ? this._parentage = null : Array.isArray(n) && Re(n, t);
  }, e.prototype.remove = function(t) {
    var n = this._finalizers;
    n && Re(n, t), t instanceof e && t._removeParent(this);
  }, e.EMPTY = function() {
    var t = new e();
    return t.closed = !0, t;
  }(), e;
}(), en = Pe.EMPTY;
function tn(e) {
  return e instanceof Pe || e && "closed" in e && A(e.remove) && A(e.add) && A(e.unsubscribe);
}
function Et(e) {
  A(e) ? e() : e.unsubscribe();
}
var kr = {
  Promise: void 0
}, Or = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Te([e, t], me(n)));
  },
  clearTimeout: function(e) {
    return clearTimeout(e);
  },
  delegate: void 0
};
function nn(e) {
  Or.setTimeout(function() {
    throw e;
  });
}
function Ne() {
}
function _e(e) {
  e();
}
var ut = function(e) {
  J(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, tn(n) && n.add(r)) : r.destination = Ir, r;
  }
  return t.create = function(n, r, i) {
    return new tt(n, r, i);
  }, t.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, t.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, t.prototype._next = function(n) {
    this.destination.next(n);
  }, t.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, t.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t;
}(Pe), Lr = function() {
  function e(t) {
    this.partialObserver = t;
  }
  return e.prototype.next = function(t) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(t);
      } catch (r) {
        ke(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        ke(r);
      }
    else
      ke(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        ke(n);
      }
  }, e;
}(), tt = function(e) {
  J(t, e);
  function t(n, r, i) {
    var o = e.call(this) || this, s;
    return A(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, o.destination = new Lr(s), o;
  }
  return t;
}(ut);
function ke(e) {
  nn(e);
}
function _r(e) {
  throw e;
}
var Ir = {
  closed: !0,
  next: Ne,
  error: _r,
  complete: Ne
}, lt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function ft(e) {
  return e;
}
function Mr(e) {
  return e.length === 0 ? ft : e.length === 1 ? e[0] : function(n) {
    return e.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var O = function() {
  function e(t) {
    t && (this._subscribe = t);
  }
  return e.prototype.lift = function(t) {
    var n = new e();
    return n.source = this, n.operator = t, n;
  }, e.prototype.subscribe = function(t, n, r) {
    var i = this, o = Rr(t) ? t : new tt(t, n, r);
    return _e(function() {
      var s = i, a = s.operator, c = s.source;
      o.add(a ? a.call(o, c) : c ? i._subscribe(o) : i._trySubscribe(o));
    }), o;
  }, e.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (n) {
      t.error(n);
    }
  }, e.prototype.forEach = function(t, n) {
    var r = this;
    return n = Ct(n), new n(function(i, o) {
      var s = new tt({
        next: function(a) {
          try {
            t(a);
          } catch (c) {
            o(c), s.unsubscribe();
          }
        },
        error: o,
        complete: i
      });
      r.subscribe(s);
    });
  }, e.prototype._subscribe = function(t) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t);
  }, e.prototype[lt] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    return Mr(t)(this);
  }, e.prototype.toPromise = function(t) {
    var n = this;
    return t = Ct(t), new t(function(r, i) {
      var o;
      n.subscribe(function(s) {
        return o = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(o);
      });
    });
  }, e.create = function(t) {
    return new e(t);
  }, e;
}();
function Ct(e) {
  var t;
  return (t = e ?? kr.Promise) !== null && t !== void 0 ? t : Promise;
}
function Dr(e) {
  return e && A(e.next) && A(e.error) && A(e.complete);
}
function Rr(e) {
  return e && e instanceof ut || Dr(e) && tn(e);
}
function Nr(e) {
  return A(e == null ? void 0 : e.lift);
}
function B(e) {
  return function(t) {
    if (Nr(t))
      return t.lift(function(n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function j(e, t, n, r, i) {
  return new $r(e, t, n, r, i);
}
var $r = function(e) {
  J(t, e);
  function t(n, r, i, o, s, a) {
    var c = e.call(this, n) || this;
    return c.onFinalize = s, c.shouldUnsubscribe = a, c._next = r ? function(u) {
      try {
        r(u);
      } catch (l) {
        n.error(l);
      }
    } : e.prototype._next, c._error = o ? function(u) {
      try {
        o(u);
      } catch (l) {
        n.error(l);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._error, c._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : e.prototype._complete, c;
  }
  return t.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      e.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, t;
}(ut), Ur = ct(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), re = function(e) {
  J(t, e);
  function t() {
    var n = e.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return t.prototype.lift = function(n) {
    var r = new Pt(this, this);
    return r.operator = n, r;
  }, t.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Ur();
  }, t.prototype.next = function(n) {
    var r = this;
    _e(function() {
      var i, o;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = ve(r.currentObservers), a = s.next(); !a.done; a = s.next()) {
            var c = a.value;
            c.next(n);
          }
        } catch (u) {
          i = { error: u };
        } finally {
          try {
            a && !a.done && (o = s.return) && o.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, t.prototype.error = function(n) {
    var r = this;
    _e(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, t.prototype.complete = function() {
    var n = this;
    _e(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, t.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, n);
  }, t.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, t.prototype._innerSubscribe = function(n) {
    var r = this, i = this, o = i.hasError, s = i.isStopped, a = i.observers;
    return o || s ? en : (this.currentObservers = null, a.push(n), new Pe(function() {
      r.currentObservers = null, Re(a, n);
    }));
  }, t.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, o = r.thrownError, s = r.isStopped;
    i ? n.error(o) : s && n.complete();
  }, t.prototype.asObservable = function() {
    var n = new O();
    return n.source = this, n;
  }, t.create = function(n, r) {
    return new Pt(n, r);
  }, t;
}(O), Pt = function(e) {
  J(t, e);
  function t(n, r) {
    var i = e.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return t.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, t.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, t.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, t.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : en;
  }, t;
}(re), rn = function(e) {
  J(t, e);
  function t(n) {
    var r = e.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(t.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype._subscribe = function(n) {
    var r = e.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, t.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, o = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), o;
  }, t.prototype.next = function(n) {
    e.prototype.next.call(this, this._value = n);
  }, t;
}(re), Fr = {
  now: function() {
    return Date.now();
  }
}, jr = function(e) {
  J(t, e);
  function t(n, r) {
    return e.call(this) || this;
  }
  return t.prototype.schedule = function(n, r) {
    return this;
  }, t;
}(Pe), At = {
  setInterval: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Te([e, t], me(n)));
  },
  clearInterval: function(e) {
    return clearInterval(e);
  },
  delegate: void 0
}, Wr = function(e) {
  J(t, e);
  function t(n, r) {
    var i = e.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return t.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var o = this.id, s = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(s, o, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, r), this;
  }, t.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), At.setInterval(n.flush.bind(n, this), i);
  }, t.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && At.clearInterval(r);
  }, t.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(n, r) {
    var i = !1, o;
    try {
      this.work(n);
    } catch (s) {
      i = !0, o = s || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), o;
  }, t.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, o = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Re(o, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, e.prototype.unsubscribe.call(this);
    }
  }, t;
}(jr), kt = function() {
  function e(t, n) {
    n === void 0 && (n = e.now), this.schedulerActionCtor = t, this.now = n;
  }
  return e.prototype.schedule = function(t, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, t).schedule(r, n);
  }, e.now = Fr.now, e;
}(), Br = function(e) {
  J(t, e);
  function t(n, r) {
    r === void 0 && (r = kt.now);
    var i = e.call(this, n, r) || this;
    return i.actions = [], i._active = !1, i;
  }
  return t.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, t;
}(kt), Vr = new Br(Wr), Hr = new O(function(e) {
  return e.complete();
});
function zr(e) {
  return e && A(e.schedule);
}
function on(e) {
  return e[e.length - 1];
}
function ze(e) {
  return zr(on(e)) ? e.pop() : void 0;
}
function Yr(e, t) {
  return typeof on(e) == "number" ? e.pop() : t;
}
var dt = function(e) {
  return e && typeof e.length == "number" && typeof e != "function";
};
function sn(e) {
  return A(e == null ? void 0 : e.then);
}
function an(e) {
  return A(e[lt]);
}
function cn(e) {
  return Symbol.asyncIterator && A(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function un(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Gr() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ln = Gr();
function fn(e) {
  return A(e == null ? void 0 : e[ln]);
}
function dn(e) {
  return Pr(this, arguments, function() {
    var n, r, i, o;
    return Zt(this, function(s) {
      switch (s.label) {
        case 0:
          n = e.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, de(n.read())];
        case 3:
          return r = s.sent(), i = r.value, o = r.done, o ? [4, de(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, de(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function pn(e) {
  return A(e == null ? void 0 : e.getReader);
}
function Y(e) {
  if (e instanceof O)
    return e;
  if (e != null) {
    if (an(e))
      return Kr(e);
    if (dt(e))
      return qr(e);
    if (sn(e))
      return Qr(e);
    if (cn(e))
      return hn(e);
    if (fn(e))
      return Jr(e);
    if (pn(e))
      return Xr(e);
  }
  throw un(e);
}
function Kr(e) {
  return new O(function(t) {
    var n = e[lt]();
    if (A(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function qr(e) {
  return new O(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function Qr(e) {
  return new O(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, nn);
  });
}
function Jr(e) {
  return new O(function(t) {
    var n, r;
    try {
      for (var i = ve(e), o = i.next(); !o.done; o = i.next()) {
        var s = o.value;
        if (t.next(s), t.closed)
          return;
      }
    } catch (a) {
      n = { error: a };
    } finally {
      try {
        o && !o.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    t.complete();
  });
}
function hn(e) {
  return new O(function(t) {
    Zr(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function Xr(e) {
  return hn(dn(e));
}
function Zr(e, t) {
  var n, r, i, o;
  return Cr(this, void 0, void 0, function() {
    var s, a;
    return Zt(this, function(c) {
      switch (c.label) {
        case 0:
          c.trys.push([0, 5, 6, 11]), n = Ar(e), c.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = c.sent(), !!r.done) return [3, 4];
          if (s = r.value, t.next(s), t.closed)
            return [2];
          c.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = c.sent(), i = { error: a }, [3, 11];
        case 6:
          return c.trys.push([6, , 9, 10]), r && !r.done && (o = n.return) ? [4, o.call(n)] : [3, 8];
        case 7:
          c.sent(), c.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return t.complete(), [2];
      }
    });
  });
}
function ee(e, t, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var o = t.schedule(function() {
    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(o), !i)
    return o;
}
function vn(e, t) {
  return t === void 0 && (t = 0), B(function(n, r) {
    n.subscribe(j(r, function(i) {
      return ee(r, e, function() {
        return r.next(i);
      }, t);
    }, function() {
      return ee(r, e, function() {
        return r.complete();
      }, t);
    }, function(i) {
      return ee(r, e, function() {
        return r.error(i);
      }, t);
    }));
  });
}
function mn(e, t) {
  return t === void 0 && (t = 0), B(function(n, r) {
    r.add(e.schedule(function() {
      return n.subscribe(r);
    }, t));
  });
}
function ei(e, t) {
  return Y(e).pipe(mn(t), vn(t));
}
function ti(e, t) {
  return Y(e).pipe(mn(t), vn(t));
}
function ni(e, t) {
  return new O(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function ri(e, t) {
  return new O(function(n) {
    var r;
    return ee(n, t, function() {
      r = e[ln](), ee(n, t, function() {
        var i, o, s;
        try {
          i = r.next(), o = i.value, s = i.done;
        } catch (a) {
          n.error(a);
          return;
        }
        s ? n.complete() : n.next(o);
      }, 0, !0);
    }), function() {
      return A(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function gn(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new O(function(n) {
    ee(n, t, function() {
      var r = e[Symbol.asyncIterator]();
      ee(n, t, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function ii(e, t) {
  return gn(dn(e), t);
}
function oi(e, t) {
  if (e != null) {
    if (an(e))
      return ei(e, t);
    if (dt(e))
      return ni(e, t);
    if (sn(e))
      return ti(e, t);
    if (cn(e))
      return gn(e, t);
    if (fn(e))
      return ri(e, t);
    if (pn(e))
      return ii(e, t);
  }
  throw un(e);
}
function pt(e, t) {
  return t ? oi(e, t) : Y(e);
}
function Ot() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ze(e);
  return pt(e, n);
}
function si(e) {
  return e instanceof Date && !isNaN(e);
}
var ai = ct(function(e) {
  return function(n) {
    n === void 0 && (n = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = n;
  };
});
function ci(e, t) {
  var n = si(e) ? { first: e } : typeof e == "number" ? { each: e } : e, r = n.first, i = n.each, o = n.with, s = o === void 0 ? ui : o, a = n.scheduler, c = a === void 0 ? Vr : a, u = n.meta, l = u === void 0 ? null : u;
  if (r == null && i == null)
    throw new TypeError("No timeout provided.");
  return B(function(f, h) {
    var d, m, p = null, g = 0, v = function(S) {
      m = ee(h, c, function() {
        try {
          d.unsubscribe(), Y(s({
            meta: l,
            lastValue: p,
            seen: g
          })).subscribe(h);
        } catch (P) {
          h.error(P);
        }
      }, S);
    };
    d = f.subscribe(j(h, function(S) {
      m == null || m.unsubscribe(), g++, h.next(p = S), i > 0 && v(i);
    }, void 0, void 0, function() {
      m != null && m.closed || m == null || m.unsubscribe(), p = null;
    })), !g && v(r != null ? typeof r == "number" ? r : +r - c.now() : i);
  });
}
function ui(e) {
  throw new ai(e);
}
function k(e, t) {
  return B(function(n, r) {
    var i = 0;
    n.subscribe(j(r, function(o) {
      r.next(e.call(t, o, i++));
    }));
  });
}
var li = Array.isArray;
function fi(e, t) {
  return li(t) ? e.apply(void 0, Te([], me(t))) : e(t);
}
function di(e) {
  return k(function(t) {
    return fi(e, t);
  });
}
function pi(e, t, n, r, i, o, s, a) {
  var c = [], u = 0, l = 0, f = !1, h = function() {
    f && !c.length && !u && t.complete();
  }, d = function(p) {
    return u < r ? m(p) : c.push(p);
  }, m = function(p) {
    u++;
    var g = !1;
    Y(n(p, l++)).subscribe(j(t, function(v) {
      t.next(v);
    }, function() {
      g = !0;
    }, void 0, function() {
      if (g)
        try {
          u--;
          for (var v = function() {
            var S = c.shift();
            s || m(S);
          }; c.length && u < r; )
            v();
          h();
        } catch (S) {
          t.error(S);
        }
    }));
  };
  return e.subscribe(j(t, d, function() {
    f = !0, h();
  })), function() {
  };
}
function ht(e, t, n) {
  return n === void 0 && (n = 1 / 0), A(t) ? ht(function(r, i) {
    return k(function(o, s) {
      return t(r, o, i, s);
    })(Y(e(r, i)));
  }, n) : (typeof t == "number" && (n = t), B(function(r, i) {
    return pi(r, i, e, n);
  }));
}
function bn(e) {
  return e === void 0 && (e = 1 / 0), ht(ft, e);
}
function hi() {
  return bn(1);
}
function $e() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return hi()(pt(e, ze(e)));
}
var vi = ["addListener", "removeListener"], mi = ["addEventListener", "removeEventListener"], gi = ["on", "off"];
function nt(e, t, n, r) {
  if (A(n) && (r = n, n = void 0), r)
    return nt(e, t, n).pipe(di(r));
  var i = me(wi(e) ? mi.map(function(a) {
    return function(c) {
      return e[a](t, c, n);
    };
  }) : bi(e) ? vi.map(Lt(e, t)) : yi(e) ? gi.map(Lt(e, t)) : [], 2), o = i[0], s = i[1];
  if (!o && dt(e))
    return ht(function(a) {
      return nt(a, t, n);
    })(Y(e));
  if (!o)
    throw new TypeError("Invalid event target");
  return new O(function(a) {
    var c = function() {
      for (var u = [], l = 0; l < arguments.length; l++)
        u[l] = arguments[l];
      return a.next(1 < u.length ? u : u[0]);
    };
    return o(c), function() {
      return s(c);
    };
  });
}
function Lt(e, t) {
  return function(n) {
    return function(r) {
      return e[n](t, r);
    };
  };
}
function bi(e) {
  return A(e.addListener) && A(e.removeListener);
}
function yi(e) {
  return A(e.on) && A(e.off);
}
function wi(e) {
  return A(e.addEventListener) && A(e.removeEventListener);
}
function xi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ze(e), r = Yr(e, 1 / 0), i = e;
  return i.length ? i.length === 1 ? Y(i[0]) : bn(r)(pt(i, n)) : Hr;
}
function vt(e, t) {
  return B(function(n, r) {
    var i = 0;
    n.subscribe(j(r, function(o) {
      return e.call(t, o, i++) && r.next(o);
    }));
  });
}
function Si(e, t, n, r, i) {
  return function(o, s) {
    var a = n, c = t, u = 0;
    o.subscribe(j(s, function(l) {
      var f = u++;
      c = a ? e(c, l, f) : (a = !0, l), s.next(c);
    }, i));
  };
}
function Ti(e, t) {
  return t === void 0 && (t = ft), e = e ?? Ei, B(function(n, r) {
    var i, o = !0;
    n.subscribe(j(r, function(s) {
      var a = t(s);
      (o || !e(i, a)) && (o = !1, i = a, r.next(s));
    }));
  });
}
function Ei(e, t) {
  return e === t;
}
function Ci(e) {
  return B(function(t, n) {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Pi(e, t) {
  return B(Si(e, t, arguments.length >= 2, !0));
}
function Ai(e) {
  return B(function(t, n) {
    var r = !1, i = j(n, function() {
      i == null || i.unsubscribe(), r = !0;
    }, Ne);
    Y(e).subscribe(i), t.subscribe(j(n, function(o) {
      return r && n.next(o);
    }));
  });
}
function R() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = ze(e);
  return B(function(r, i) {
    (n ? $e(e, r, n) : $e(e, r)).subscribe(i);
  });
}
function yn(e, t) {
  return B(function(n, r) {
    var i = null, o = 0, s = !1, a = function() {
      return s && !i && r.complete();
    };
    n.subscribe(j(r, function(c) {
      i == null || i.unsubscribe();
      var u = 0, l = o++;
      Y(e(c, l)).subscribe(i = j(r, function(f) {
        return r.next(t ? t(c, f, l, u++) : f);
      }, function() {
        i = null, a();
      }));
    }, function() {
      s = !0, a();
    }));
  });
}
function _t(e) {
  return B(function(t, n) {
    Y(e).subscribe(j(n, function() {
      return n.complete();
    }, Ne)), !n.closed && t.subscribe(n);
  });
}
var ki = Object.defineProperty, Oi = Object.defineProperties, Li = Object.getOwnPropertyDescriptors, It = Object.getOwnPropertySymbols, _i = Object.prototype.hasOwnProperty, Ii = Object.prototype.propertyIsEnumerable, Mt = (e, t, n) => t in e ? ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, q = (e, t) => {
  for (var n in t || (t = {}))
    _i.call(t, n) && Mt(e, n, t[n]);
  if (It)
    for (var n of It(t))
      Ii.call(t, n) && Mt(e, n, t[n]);
  return e;
}, xe = (e, t) => Oi(e, Li(t)), W = (e, t, n) => new Promise((r, i) => {
  var o = (c) => {
    try {
      a(n.next(c));
    } catch (u) {
      i(u);
    }
  }, s = (c) => {
    try {
      a(n.throw(c));
    } catch (u) {
      i(u);
    }
  }, a = (c) => c.done ? r(c.value) : Promise.resolve(c.value).then(o, s);
  a((n = n.apply(e, t)).next());
}), wn = "lk";
function F(e) {
  return typeof e > "u" ? !1 : Mi(e) || Di(e);
}
function Mi(e) {
  var t;
  return e ? e.hasOwnProperty("participant") && e.hasOwnProperty("source") && e.hasOwnProperty("track") && typeof ((t = e.publication) == null ? void 0 : t.track) < "u" : !1;
}
function Di(e) {
  return e ? e.hasOwnProperty("participant") && e.hasOwnProperty("source") && e.hasOwnProperty("publication") && typeof e.publication < "u" : !1;
}
function Ee(e) {
  return e ? e.hasOwnProperty("participant") && e.hasOwnProperty("source") && typeof e.publication > "u" : !1;
}
function N(e) {
  if (typeof e == "string" || typeof e == "number")
    return `${e}`;
  if (Ee(e))
    return `${e.participant.identity}_${e.source}_placeholder`;
  if (F(e))
    return `${e.participant.identity}_${e.publication.source}_${e.publication.trackSid}`;
  throw new Error(`Can't generate a id for the given track reference: ${e}`);
}
function Oo(e, t) {
  return e === void 0 || t === void 0 ? !1 : F(e) && F(t) ? e.publication.trackSid === t.publication.trackSid : N(e) === N(t);
}
function Lo(e, t) {
  return typeof t > "u" ? !1 : F(e) ? t.some(
    (n) => n.participant.identity === e.participant.identity && F(n) && n.publication.trackSid === e.publication.trackSid
  ) : Ee(e) ? t.some(
    (n) => n.participant.identity === e.participant.identity && Ee(n) && n.source === e.source
  ) : !1;
}
function Ri(e, t) {
  return Ee(e) && F(t) && t.participant.identity === e.participant.identity && t.source === e.source;
}
function _o() {
  const e = document.createElement("p");
  e.style.width = "100%", e.style.height = "200px";
  const t = document.createElement("div");
  t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
  const n = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return n === r && (r = t.clientWidth), document.body.removeChild(t), n - r;
}
function Io() {
  return typeof document < "u";
}
function Ni(e) {
  e = q({}, e);
  const t = "(?:(?:[a-z]+:)?//)?", n = "(?:\\S+(?::\\S*)?@)?", r = new RegExp(
    "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
    "g"
  ).source, u = `(?:${t}|www\\.)${n}(?:localhost|${r}|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#][^\\s"]*)?`;
  return e.exact ? new RegExp(`(?:^${u}$)`, "i") : new RegExp(u, "ig");
}
var Dt = "[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*";
function $i({ exact: e } = {}) {
  return e ? new RegExp(`^${Dt}$`) : new RegExp(Dt, "g");
}
function Mo(e, t) {
  return W(this, null, function* () {
    const { x: n, y: r } = yield yr(e, t, {
      placement: "top",
      middleware: [mr(6), br(), gr({ padding: 5 })]
    });
    return { x: n, y: r };
  });
}
function Do(e, t) {
  return !e.contains(t.target);
}
var Ro = () => ({
  email: $i(),
  url: Ni({})
});
function No(e, t) {
  const n = Object.entries(t).map(
    ([o, s], a) => Array.from(e.matchAll(s)).map(({ index: c, 0: u }) => ({
      type: o,
      weight: a,
      content: u,
      index: c ?? 0
    }))
  ).flat().sort((o, s) => {
    const a = o.index - s.index;
    return a !== 0 ? a : o.weight - s.weight;
  }).filter(({ index: o }, s, a) => {
    if (s === 0) return !0;
    const c = a[s - 1];
    return c.index + c.content.length <= o;
  }), r = [];
  let i = 0;
  for (const { type: o, content: s, index: a } of n)
    a > i && r.push(e.substring(i, a)), r.push({ type: o, content: s }), i = a + s.length;
  return e.length > i && r.push(e.substring(i)), r;
}
var Ui = [
  b.ConnectionStateChanged,
  b.RoomMetadataChanged,
  b.ActiveSpeakersChanged,
  b.ConnectionQualityChanged,
  b.ParticipantConnected,
  b.ParticipantDisconnected,
  b.ParticipantPermissionsChanged,
  b.ParticipantMetadataChanged,
  b.ParticipantNameChanged,
  b.ParticipantAttributesChanged,
  b.TrackMuted,
  b.TrackUnmuted,
  b.TrackPublished,
  b.TrackUnpublished,
  b.TrackStreamStateChanged,
  b.TrackSubscriptionFailed,
  b.TrackSubscriptionPermissionChanged,
  b.TrackSubscriptionStatusChanged
], xn = [
  ...Ui,
  b.LocalTrackPublished,
  b.LocalTrackUnpublished
], Fi = [
  y.TrackPublished,
  y.TrackUnpublished,
  y.TrackMuted,
  y.TrackUnmuted,
  y.TrackStreamStateChanged,
  y.TrackSubscribed,
  y.TrackUnsubscribed,
  y.TrackSubscriptionPermissionChanged,
  y.TrackSubscriptionFailed,
  y.LocalTrackPublished,
  y.LocalTrackUnpublished
], ji = [
  y.ConnectionQualityChanged,
  y.IsSpeakingChanged,
  y.ParticipantMetadataChanged,
  y.ParticipantPermissionsChanged,
  y.TrackMuted,
  y.TrackUnmuted,
  y.TrackPublished,
  y.TrackUnpublished,
  y.TrackStreamStateChanged,
  y.TrackSubscriptionFailed,
  y.TrackSubscriptionPermissionChanged,
  y.TrackSubscriptionStatusChanged
], Sn = [
  ...ji,
  y.LocalTrackPublished,
  y.LocalTrackUnpublished
], I = Er.getLogger("lk-components-js");
I.setDefaultLevel("WARN");
function $o(e, t = {}) {
  var n;
  I.setLevel(e), Un((n = t.liveKitClientLogLevel) != null ? n : e);
}
function Uo(e, t = {}) {
  var n;
  const r = I.methodFactory;
  I.methodFactory = (i, o, s) => {
    const a = r(i, o, s), c = mt[i], u = c >= o && c < mt.silent;
    return (l, f) => {
      f ? a(l, f) : a(l), u && e(c, l, f);
    };
  }, I.setLevel(I.getLevel()), Fn((n = t.liveKitClientLogExtension) != null ? n : e);
}
var Fo = [
  {
    columns: 1,
    rows: 1
  },
  {
    columns: 1,
    rows: 2,
    orientation: "portrait"
  },
  {
    columns: 2,
    rows: 1,
    orientation: "landscape"
  },
  {
    columns: 2,
    rows: 2,
    minWidth: 560
  },
  {
    columns: 3,
    rows: 3,
    minWidth: 700
  },
  {
    columns: 4,
    rows: 4,
    minWidth: 960
  },
  {
    columns: 5,
    rows: 5,
    minWidth: 1100
  }
];
function Wi(e, t, n, r) {
  if (e.length < 1)
    throw new Error("At least one grid layout definition must be provided.");
  const i = Bi(e);
  if (n <= 0 || r <= 0)
    return i[0];
  let o = 0;
  const s = n / r > 1 ? "landscape" : "portrait";
  let a = i.find((c, u, l) => {
    o = u;
    const f = l.findIndex((h, d) => {
      const m = !h.orientation || h.orientation === s, p = d > u, g = h.maxTiles === c.maxTiles;
      return p && g && m;
    }) !== -1;
    return c.maxTiles >= t && !f;
  });
  if (a === void 0)
    if (a = i[i.length - 1], a)
      I.warn(
        `No layout found for: participantCount: ${t}, width/height: ${n}/${r} fallback to biggest available layout (${a}).`
      );
    else
      throw new Error("No layout or fallback layout found.");
  if ((n < a.minWidth || r < a.minHeight) && o > 0) {
    const c = i[o - 1];
    a = Wi(
      i.slice(0, o),
      c.maxTiles,
      n,
      r
    );
  }
  return a;
}
function Bi(e) {
  return [...e].map((t) => {
    var n, r;
    return {
      name: `${t.columns}x${t.rows}`,
      columns: t.columns,
      rows: t.rows,
      maxTiles: t.columns * t.rows,
      minWidth: (n = t.minWidth) != null ? n : 0,
      minHeight: (r = t.minHeight) != null ? r : 0,
      orientation: t.orientation
    };
  }).sort((t, n) => t.maxTiles !== n.maxTiles ? t.maxTiles - n.maxTiles : t.minWidth !== 0 || n.minWidth !== 0 ? t.minWidth - n.minWidth : t.minHeight !== 0 || n.minHeight !== 0 ? t.minHeight - n.minHeight : 0);
}
function jo() {
  return typeof navigator < "u" && navigator.mediaDevices && !!navigator.mediaDevices.getDisplayMedia;
}
function Wo(e, t) {
  var n;
  return xe(q({}, e), {
    receivedAtMediaTimestamp: (n = t.rtpTimestamp) != null ? n : 0,
    receivedAt: t.timestamp
  });
}
function Bo(e, t, n) {
  return [...e, ...t].reduceRight((r, i) => (r.find((o) => o.id === i.id) || r.unshift(i), r), []).slice(0 - n);
}
var Tn = [], En = {
  showChat: !1,
  unreadMessages: 0,
  showSettings: !1
};
function Vi(e) {
  return typeof e == "object";
}
function Vo(e) {
  return Array.isArray(e) && e.filter(Vi).length > 0;
}
function Cn(e, t) {
  return t.audioLevel - e.audioLevel;
}
function Pn(e, t) {
  return e.isSpeaking === t.isSpeaking ? 0 : e.isSpeaking ? -1 : 1;
}
function An(e, t) {
  var n, r, i, o;
  return e.lastSpokeAt !== void 0 || t.lastSpokeAt !== void 0 ? ((r = (n = t.lastSpokeAt) == null ? void 0 : n.getTime()) != null ? r : 0) - ((o = (i = e.lastSpokeAt) == null ? void 0 : i.getTime()) != null ? o : 0) : 0;
}
function Ue(e, t) {
  var n, r, i, o;
  return ((r = (n = e.joinedAt) == null ? void 0 : n.getTime()) != null ? r : 0) - ((o = (i = t.joinedAt) == null ? void 0 : i.getTime()) != null ? o : 0);
}
function Hi(e, t) {
  return F(e) ? F(t) ? 0 : -1 : F(t) ? 1 : 0;
}
function zi(e, t) {
  const n = e.participant.isCameraEnabled, r = t.participant.isCameraEnabled;
  return n !== r ? n ? -1 : 1 : 0;
}
function Ho(e) {
  const t = [], n = [], r = [], i = [];
  e.forEach((a) => {
    a.participant.isLocal && a.source === D.Source.Camera ? t.push(a) : a.source === D.Source.ScreenShare ? n.push(a) : a.source === D.Source.Camera ? r.push(a) : i.push(a);
  });
  const o = Yi(n), s = Gi(r);
  return [...t, ...o, ...s, ...i];
}
function Yi(e) {
  const t = [], n = [];
  return e.forEach((i) => {
    i.participant.isLocal ? t.push(i) : n.push(i);
  }), t.sort((i, o) => Ue(i.participant, o.participant)), n.sort((i, o) => Ue(i.participant, o.participant)), [...n, ...t];
}
function Gi(e) {
  const t = [], n = [];
  return e.forEach((r) => {
    r.participant.isLocal ? t.push(r) : n.push(r);
  }), n.sort((r, i) => r.participant.isSpeaking && i.participant.isSpeaking ? Cn(r.participant, i.participant) : r.participant.isSpeaking !== i.participant.isSpeaking ? Pn(r.participant, i.participant) : r.participant.lastSpokeAt !== i.participant.lastSpokeAt ? An(r.participant, i.participant) : F(r) !== F(i) ? Hi(r, i) : r.participant.isCameraEnabled !== i.participant.isCameraEnabled ? zi(r, i) : Ue(r.participant, i.participant)), [...t, ...n];
}
function zo(e) {
  const t = [...e];
  t.sort((r, i) => {
    if (r.isSpeaking && i.isSpeaking)
      return Cn(r, i);
    if (r.isSpeaking !== i.isSpeaking)
      return Pn(r, i);
    if (r.lastSpokeAt !== i.lastSpokeAt)
      return An(r, i);
    const o = r.videoTrackPublications.size > 0, s = i.videoTrackPublications.size > 0;
    return o !== s ? o ? -1 : 1 : Ue(r, i);
  });
  const n = t.find((r) => r.isLocal);
  if (n) {
    const r = t.indexOf(n);
    r >= 0 && (t.splice(r, 1), t.length > 0 ? t.splice(0, 0, n) : t.push(n));
  }
  return t;
}
function Ki(e, t) {
  return e.reduce(
    (n, r, i) => i % t === 0 ? [...n, [r]] : [...n.slice(0, -1), [...n.slice(-1)[0], r]],
    []
  );
}
function Rt(e, t) {
  const n = Math.max(e.length, t.length);
  return new Array(n).fill([]).map((r, i) => [e[i], t[i]]);
}
function Fe(e, t, n) {
  return e.filter((r) => !t.map((i) => n(i)).includes(n(r)));
}
function rt(e) {
  return e.map((t) => typeof t == "string" || typeof t == "number" ? `${t}` : N(t));
}
function qi(e, t) {
  return {
    dropped: Fe(e, t, N),
    added: Fe(t, e, N)
  };
}
function Qi(e) {
  return e.added.length !== 0 || e.dropped.length !== 0;
}
function it(e, t) {
  const n = t.findIndex(
    (r) => N(r) === N(e)
  );
  if (n === -1)
    throw new Error(
      `Element not part of the array: ${N(
        e
      )} not in ${rt(t)}`
    );
  return n;
}
function Ji(e, t, n) {
  const r = it(e, n), i = it(t, n);
  return n.splice(r, 1, t), n.splice(i, 1, e), n;
}
function Xi(e, t) {
  const n = it(e, t);
  return t.splice(n, 1), t;
}
function Zi(e, t) {
  return [...t, e];
}
function qe(e, t) {
  return Ki(e, t);
}
function Yo(e, t, n) {
  let r = eo(e, t);
  if (r.length < t.length) {
    const s = Fe(t, r, N);
    r = [...r, ...s];
  }
  const i = qe(r, n), o = qe(t, n);
  if (Rt(i, o).forEach(([s, a], c) => {
    if (s && a) {
      const u = qe(r, n)[c], l = qi(u, a);
      Qi(l) && (I.debug(
        `Detected visual changes on page: ${c}, current: ${rt(
          s
        )}, next: ${rt(a)}`,
        { changes: l }
      ), l.added.length === l.dropped.length && Rt(l.added, l.dropped).forEach(([f, h]) => {
        if (f && h)
          r = Ji(f, h, r);
        else
          throw new Error(
            `For a swap action we need a addition and a removal one is missing: ${f}, ${h}`
          );
      }), l.added.length === 0 && l.dropped.length > 0 && l.dropped.forEach((f) => {
        r = Xi(f, r);
      }), l.added.length > 0 && l.dropped.length === 0 && l.added.forEach((f) => {
        r = Zi(f, r);
      }));
    }
  }), r.length > t.length) {
    const s = Fe(r, t, N);
    r = r.filter(
      (a) => !s.map(N).includes(N(a))
    );
  }
  return r;
}
function eo(e, t) {
  return e.map((n) => {
    const r = t.find(
      (i) => (
        // If the IDs match or ..
        N(n) === N(i) || // ... if the current item is a placeholder and the new item is the track reference can replace it.
        typeof n != "number" && Ee(n) && F(i) && Ri(n, i)
      )
    );
    return r ?? n;
  });
}
function $(e) {
  return `${wn}-${e}`;
}
function Go(e) {
  const t = Nt(e), n = kn(e.participant).pipe(
    k(() => Nt(e)),
    R(t)
  );
  return { className: $(
    e.source === D.Source.Camera || e.source === D.Source.ScreenShare ? "participant-media-video" : "participant-media-audio"
  ), trackObserver: n };
}
function Nt(e) {
  if (F(e))
    return e.publication;
  {
    const { source: t, name: n, participant: r } = e;
    if (t && n)
      return r.getTrackPublications().find((i) => i.source === t && i.trackName === n);
    if (n)
      return r.getTrackPublicationByName(n);
    if (t)
      return r.getTrackPublication(t);
    throw new Error("At least one of source and name needs to be defined");
  }
}
function oe(e, ...t) {
  return new O((r) => {
    const i = () => {
      r.next(e);
    };
    return t.forEach((s) => {
      e.on(s, i);
    }), () => {
      t.forEach((s) => {
        e.off(s, i);
      });
    };
  }).pipe(R(e));
}
function se(e, t) {
  return new O((r) => {
    const i = (...s) => {
      r.next(s);
    };
    return e.on(t, i), () => {
      e.off(t, i);
    };
  });
}
function Ko(e) {
  return se(e, b.ConnectionStateChanged).pipe(
    k(([t]) => t),
    R(e.state)
  );
}
function qo(e) {
  return oe(
    e,
    b.RoomMetadataChanged,
    b.ConnectionStateChanged
  ).pipe(
    k((n) => ({ name: n.name, metadata: n.metadata }))
  );
}
function Qo(e) {
  return se(e, b.ActiveSpeakersChanged).pipe(
    k(([t]) => t)
  );
}
function Jo(e, t, n = !0) {
  var r;
  const i = () => W(this, null, function* () {
    try {
      const a = yield gt.getLocalDevices(e, n);
      o.next(a);
    } catch (a) {
      t == null || t(a);
    }
  }), o = new re(), s = o.pipe(
    Ci(() => {
      var a;
      (a = navigator == null ? void 0 : navigator.mediaDevices) == null || a.removeEventListener("devicechange", i);
    })
  );
  if (typeof window < "u") {
    if (!window.isSecureContext)
      throw new Error(
        "Accessing media devices is available only in secure contexts (HTTPS and localhost), in some or all supporting browsers. See: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices"
      );
    (r = navigator == null ? void 0 : navigator.mediaDevices) == null || r.addEventListener("devicechange", i);
  }
  return $e(
    gt.getLocalDevices(e, n).catch((a) => (t == null || t(a), [])),
    s
  );
}
function to(e) {
  return se(e, b.DataReceived);
}
function no(e) {
  return se(e, b.ChatMessage);
}
function ro(e) {
  return oe(e, b.AudioPlaybackStatusChanged).pipe(
    k((n) => ({ canPlayAudio: n.canPlaybackAudio }))
  );
}
function io(e) {
  return oe(e, b.VideoPlaybackStatusChanged).pipe(
    k((n) => ({ canPlayVideo: n.canPlaybackVideo }))
  );
}
function oo(e, t) {
  return se(e, b.ActiveDeviceChanged).pipe(
    vt(([n]) => n === t),
    k(([n, r]) => (I.debug("activeDeviceObservable | RoomEvent.ActiveDeviceChanged", { kind: n, deviceId: r }), r))
  );
}
function Xo(e, t) {
  return se(e, b.ParticipantEncryptionStatusChanged).pipe(
    vt(
      ([, n]) => (t == null ? void 0 : t.identity) === (n == null ? void 0 : n.identity) || !n && (t == null ? void 0 : t.identity) === e.localParticipant.identity
    ),
    k(([n]) => n),
    R(
      t != null && t.isLocal ? t.isE2EEEnabled : !!(t != null && t.isEncrypted)
    )
  );
}
function Zo(e) {
  return se(e, b.RecordingStatusChanged).pipe(
    k(([t]) => t),
    R(e.isRecording)
  );
}
function be(e, ...t) {
  return new O((r) => {
    const i = () => {
      r.next(e);
    };
    return t.forEach((s) => {
      e.on(s, i);
    }), () => {
      t.forEach((s) => {
        e.off(s, i);
      });
    };
  }).pipe(R(e));
}
function kn(e) {
  return be(
    e,
    y.TrackMuted,
    y.TrackUnmuted,
    y.ParticipantPermissionsChanged,
    // ParticipantEvent.IsSpeakingChanged,
    y.TrackPublished,
    y.TrackUnpublished,
    y.LocalTrackPublished,
    y.LocalTrackUnpublished,
    y.MediaDevicesError,
    y.TrackSubscriptionStatusChanged
    // ParticipantEvent.ConnectionQualityChanged,
  ).pipe(
    k((n) => {
      const { isMicrophoneEnabled: r, isCameraEnabled: i, isScreenShareEnabled: o } = n, s = n.getTrackPublication(D.Source.Microphone), a = n.getTrackPublication(D.Source.Camera);
      return {
        isCameraEnabled: i,
        isMicrophoneEnabled: r,
        isScreenShareEnabled: o,
        cameraTrack: a,
        microphoneTrack: s,
        participant: n
      };
    })
  );
}
function so(e) {
  return e ? be(
    e,
    y.ParticipantMetadataChanged,
    y.ParticipantNameChanged
  ).pipe(
    k(({ name: n, identity: r, metadata: i }) => ({
      name: n,
      identity: r,
      metadata: i
    })),
    R({
      name: e.name,
      identity: e.identity,
      metadata: e.metadata
    })
  ) : void 0;
}
function ao(e) {
  return Ye(
    e,
    y.ConnectionQualityChanged
  ).pipe(
    k(([n]) => n),
    R(e.connectionQuality)
  );
}
function Ye(e, t) {
  return new O((r) => {
    const i = (...s) => {
      r.next(s);
    };
    return e.on(t, i), () => {
      e.off(t, i);
    };
  });
}
function co(e) {
  var t, n, r, i;
  return be(
    e.participant,
    y.TrackMuted,
    y.TrackUnmuted,
    y.TrackSubscribed,
    y.TrackUnsubscribed,
    y.LocalTrackPublished,
    y.LocalTrackUnpublished
  ).pipe(
    k((o) => {
      var s, a;
      const c = (s = e.publication) != null ? s : o.getTrackPublication(e.source);
      return (a = c == null ? void 0 : c.isMuted) != null ? a : !0;
    }),
    R(
      (i = (r = (t = e.publication) == null ? void 0 : t.isMuted) != null ? r : (n = e.participant.getTrackPublication(e.source)) == null ? void 0 : n.isMuted) != null ? i : !0
    )
  );
}
function es(e) {
  return Ye(e, y.IsSpeakingChanged).pipe(
    k(([t]) => t)
  );
}
function ts(e, t = {}) {
  var n;
  let r;
  const i = new O((c) => (r = c, () => a.unsubscribe())).pipe(R(Array.from(e.remoteParticipants.values()))), o = (n = t.additionalRoomEvents) != null ? n : xn, s = Array.from(
    /* @__PURE__ */ new Set([
      b.ParticipantConnected,
      b.ParticipantDisconnected,
      b.ConnectionStateChanged,
      ...o
    ])
  ), a = oe(e, ...s).subscribe(
    (c) => r == null ? void 0 : r.next(Array.from(c.remoteParticipants.values()))
  );
  return e.remoteParticipants.size > 0 && (r == null || r.next(Array.from(e.remoteParticipants.values()))), i;
}
function ns(e, t, n = {}) {
  var r;
  const i = (r = n.additionalEvents) != null ? r : Sn;
  return oe(
    e,
    b.ParticipantConnected,
    b.ParticipantDisconnected,
    b.ConnectionStateChanged
  ).pipe(
    yn((s) => {
      const a = s.getParticipantByIdentity(t);
      return a ? be(a, ...i) : new O((c) => c.next(void 0));
    }),
    R(e.getParticipantByIdentity(t))
  );
}
function rs(e) {
  return Ye(
    e,
    y.ParticipantPermissionsChanged
  ).pipe(
    k(() => e.permissions),
    R(e.permissions)
  );
}
function is(e, { kind: t, identity: n }, r = {}) {
  var i;
  const o = (i = r.additionalEvents) != null ? i : Sn, s = (c) => {
    let u = !0;
    return t && (u = u && c.kind === t), n && (u = u && c.identity === n), u;
  };
  return oe(
    e,
    b.ParticipantConnected,
    b.ParticipantDisconnected,
    b.ConnectionStateChanged
  ).pipe(
    yn((c) => {
      const u = Array.from(c.remoteParticipants.values()).find(
        (l) => s(l)
      );
      return u ? be(u, ...o) : new O((l) => l.next(void 0));
    }),
    R(Array.from(e.remoteParticipants.values()).find((c) => s(c)))
  );
}
function os(e) {
  return typeof e > "u" ? new O() : Ye(e, y.AttributesChanged).pipe(
    k(([t]) => ({
      changed: t,
      attributes: e.attributes
    })),
    R({ changed: e.attributes, attributes: e.attributes })
  );
}
function ss(e, t, n, r, i) {
  const { localParticipant: o } = t, s = (f, h) => {
    let d = !1;
    switch (f) {
      case D.Source.Camera:
        d = h.isCameraEnabled;
        break;
      case D.Source.Microphone:
        d = h.isMicrophoneEnabled;
        break;
      case D.Source.ScreenShare:
        d = h.isScreenShareEnabled;
        break;
    }
    return d;
  }, a = kn(o).pipe(
    k((f) => s(e, f.participant)),
    R(s(e, o))
  ), c = new re(), u = (f, h) => W(this, null, function* () {
    try {
      switch (h ?? (h = n), c.next(!0), e) {
        case D.Source.Camera:
          return yield o.setCameraEnabled(
            f ?? !o.isCameraEnabled,
            h,
            r
          ), o.isCameraEnabled;
        case D.Source.Microphone:
          return yield o.setMicrophoneEnabled(
            f ?? !o.isMicrophoneEnabled,
            h,
            r
          ), o.isMicrophoneEnabled;
        case D.Source.ScreenShare:
          return yield o.setScreenShareEnabled(
            f ?? !o.isScreenShareEnabled,
            h,
            r
          ), o.isScreenShareEnabled;
        default:
          throw new TypeError("Tried to toggle unsupported source");
      }
    } catch (d) {
      if (i && d instanceof Error) {
        i == null || i(d);
        return;
      } else
        throw d;
    } finally {
      c.next(!1);
    }
  });
  return {
    className: $("button"),
    toggle: u,
    enabledObserver: a,
    pendingObserver: c.asObservable()
  };
}
function as() {
  let e = !1;
  const t = new re(), n = new re(), r = (o) => W(this, null, function* () {
    n.next(!0), e = o ?? !e, t.next(e), n.next(!1);
  });
  return {
    className: $("button"),
    toggle: r,
    enabledObserver: t.asObservable(),
    pendingObserver: n.asObservable()
  };
}
function cs(e, t, n) {
  const r = new rn(void 0), i = oo(t, e), o = (a, ...c) => W(this, [a, ...c], function* (u, l = {}) {
    var f, h, d;
    if (t) {
      I.debug(`Switching active device of kind "${e}" with id ${u}.`), yield t.switchActiveDevice(e, u, l.exact);
      const m = (f = t.getActiveDevice(e)) != null ? f : u;
      m !== u && u !== "default" && I.info(
        `We tried to select the device with id (${u}), but the browser decided to select the device with id (${m}) instead.`
      );
      let p;
      e === "audioinput" ? p = (h = t.localParticipant.getTrackPublication(D.Source.Microphone)) == null ? void 0 : h.track : e === "videoinput" && (p = (d = t.localParticipant.getTrackPublication(D.Source.Camera)) == null ? void 0 : d.track);
      const g = u === "default" && !p || u === "default" && (p == null ? void 0 : p.mediaStreamTrack.label.startsWith("Default"));
      r.next(g ? u : m);
    }
  });
  return {
    className: $("media-device-select"),
    activeDeviceObservable: i,
    setActiveMediaDevice: o
  };
}
function us(e) {
  const t = (r) => {
    e.disconnect(r);
  };
  return { className: $("disconnect-button"), disconnect: t };
}
function ls(e) {
  const t = $("connection-quality"), n = ao(e);
  return { className: t, connectionQualityObserver: n };
}
function fs(e) {
  let t = "track-muted-indicator-camera";
  switch (e.source) {
    case D.Source.Camera:
      t = "track-muted-indicator-camera";
      break;
    case D.Source.Microphone:
      t = "track-muted-indicator-microphone";
      break;
  }
  const n = $(t), r = co(e);
  return { className: n, mediaMutedObserver: r };
}
function ds(e) {
  return { className: "lk-participant-name", infoObserver: so(e) };
}
function ps() {
  return {
    className: $("participant-tile")
  };
}
var $t = {
  CHAT: "lk-chat-topic",
  CHAT_UPDATE: "lk-chat-update-topic"
};
function ot(e, t) {
  return W(this, arguments, function* (n, r, i = {}) {
    const { reliable: o, destinationIdentities: s, topic: a } = i;
    yield n.publishData(r, {
      destinationIdentities: s,
      topic: a,
      reliable: o
    });
  });
}
function uo(e, t, n) {
  const r = Array.isArray(t) ? t : [t], i = to(e).pipe(
    vt(
      ([, , , c]) => t === void 0 || c !== void 0 && r.includes(c)
    ),
    k(([c, u, , l]) => {
      const f = {
        payload: c,
        topic: l,
        from: u
      };
      return n == null || n(f), f;
    })
  );
  let o;
  const s = new O((c) => {
    o = c;
  });
  return { messageObservable: i, isSendingObservable: s, send: (c, ...u) => W(this, [c, ...u], function* (l, f = {}) {
    o.next(!0);
    try {
      yield ot(e.localParticipant, l, q({ topic: r[0] }, f));
    } finally {
      o.next(!1);
    }
  }) };
}
function lo(e) {
  return { chatObservable: no(e), send: (i) => W(this, null, function* () {
    return yield e.localParticipant.sendChatMessage(i);
  }), edit: (i, o) => W(this, null, function* () {
    return yield e.localParticipant.editChatMessage(i, o);
  }) };
}
var fo = new TextEncoder(), po = new TextDecoder(), Oe = /* @__PURE__ */ new Map(), ho = (e) => fo.encode(JSON.stringify(e)), vo = (e) => JSON.parse(po.decode(e));
function hs(e, t) {
  var n, r;
  const i = new re(), o = () => {
    var C, x, _;
    return ((C = e.serverInfo) == null ? void 0 : C.edition) === 1 || !!((x = e.serverInfo) != null && x.version) && jn((_ = e.serverInfo) == null ? void 0 : _.version, "1.17.2") > 0;
  }, { messageDecoder: s, messageEncoder: a, channelTopic: c, updateChannelTopic: u } = t ?? {}, l = c ?? $t.CHAT, f = u ?? $t.CHAT_UPDATE;
  let h = !1;
  Oe.has(e) || (h = !0);
  const d = (n = Oe.get(e)) != null ? n : /* @__PURE__ */ new Map(), m = (r = d.get(l)) != null ? r : new re();
  if (d.set(l, m), Oe.set(e, d), h) {
    const { messageObservable: C } = uo(e, [l, f]);
    C.pipe(_t(i)).subscribe(m);
  }
  const { chatObservable: p, send: g } = lo(e), v = s ?? vo, S = xi(
    m.pipe(
      k((C) => {
        const x = v(C.payload), _ = xe(q({}, x), { from: C.from });
        if (!mo(_))
          return _;
      })
    ),
    p.pipe(
      k(([C, x]) => xe(q({}, C), { from: x }))
    )
  ).pipe(
    Pi((C, x) => {
      var _;
      if (!x)
        return C;
      if ("id" in x && C.find((w) => {
        var E, V;
        return ((E = w.from) == null ? void 0 : E.identity) === ((V = x.from) == null ? void 0 : V.identity) && w.id === x.id;
      })) {
        const w = C.findIndex((E) => E.id === x.id);
        if (w > -1) {
          const E = C[w];
          C[w] = xe(q({}, x), {
            timestamp: E.timestamp,
            editTimestamp: (_ = x.editTimestamp) != null ? _ : x.timestamp
          });
        }
        return [...C];
      }
      return [...C, x];
    }, []),
    _t(i)
  ), P = new rn(!1), L = a ?? ho, T = (C) => W(this, null, function* () {
    P.next(!0);
    try {
      const x = yield g(C), _ = L(xe(q({}, x), {
        ignore: o()
      }));
      return yield ot(e.localParticipant, _, {
        reliable: !0,
        topic: l
      }), x;
    } finally {
      P.next(!1);
    }
  }), ae = (C, x) => W(this, null, function* () {
    const _ = Date.now(), w = typeof x == "string" ? { id: x, message: "", timestamp: _ } : x;
    P.next(!0);
    try {
      const E = yield e.localParticipant.editChatMessage(C, w), V = L(E);
      return yield ot(e.localParticipant, V, {
        topic: f,
        reliable: !0
      }), E;
    } finally {
      P.next(!1);
    }
  });
  function ce() {
    i.next(), i.complete(), Oe.delete(e);
  }
  return e.once(b.Disconnected, ce), {
    messageObservable: S,
    isSendingObservable: P,
    send: T,
    update: ae
  };
}
function mo(e) {
  return e.ignore == !0;
}
function vs() {
  const e = (n) => W(this, null, function* () {
    I.info("Start Audio for room: ", n), yield n.startAudio();
  });
  return { className: $("start-audio-button"), roomAudioPlaybackAllowedObservable: ro, handleStartAudioPlayback: e };
}
function ms() {
  const e = (n) => W(this, null, function* () {
    I.info("Start Video for room: ", n), yield n.startVideo();
  });
  return { className: $("start-audio-button"), roomVideoPlaybackAllowedObservable: io, handleStartVideoPlayback: e };
}
function gs() {
  return { className: [$("button"), $("chat-toggle")].join(" ") };
}
function bs() {
  return { className: [$("button"), $("focus-toggle-button")].join(" ") };
}
function ys() {
  return { className: "lk-clear-pin-button lk-button" };
}
function ws() {
  return { className: "lk-room-container" };
}
function Ut(e, t, n = !0) {
  const i = [e.localParticipant, ...Array.from(e.remoteParticipants.values())], o = [];
  return i.forEach((s) => {
    t.forEach((a) => {
      const c = Array.from(
        s.trackPublications.values()
      ).filter(
        (u) => u.source === a && // either return all or only the ones that are subscribed
        (!n || u.track)
      ).map((u) => ({
        participant: s,
        publication: u,
        source: u.source
      }));
      o.push(...c);
    });
  }), { trackReferences: o, participants: i };
}
function Ft(e, t, n = !1) {
  const { sources: r, kind: i, name: o } = t;
  return Array.from(e.trackPublications.values()).filter(
    (a) => (!r || r.includes(a.source)) && (!i || a.kind === i) && (!o || a.trackName === o) && // either return all or only the ones that are subscribed
    (!n || a.track)
  ).map((a) => ({
    participant: e,
    publication: a,
    source: a.source
  }));
}
function xs(e, t, n) {
  var r, i;
  const o = (r = n.additionalRoomEvents) != null ? r : xn, s = (i = n.onlySubscribed) != null ? i : !0, a = Array.from(
    (/* @__PURE__ */ new Set([
      b.ParticipantConnected,
      b.ParticipantDisconnected,
      b.ConnectionStateChanged,
      b.LocalTrackPublished,
      b.LocalTrackUnpublished,
      b.TrackPublished,
      b.TrackUnpublished,
      b.TrackSubscriptionStatusChanged,
      ...o
    ])).values()
  );
  return oe(e, ...a).pipe(
    k((u) => {
      const l = Ut(u, t, s);
      return I.debug(`TrackReference[] was updated. (length ${l.trackReferences.length})`, l), l;
    }),
    R(Ut(e, t, s))
  );
}
function Ss(e, t) {
  return be(e, ...Fi).pipe(
    k((r) => {
      const i = Ft(r, t);
      return I.debug(`TrackReference[] was updated. (length ${i.length})`, i), i;
    }),
    R(Ft(e, t))
  );
}
function On(e, t) {
  return new O((r) => {
    const i = (...s) => {
      r.next(s);
    };
    return e.on(t, i), () => {
      e.off(t, i);
    };
  });
}
function Ts(e) {
  return On(e, jt.TranscriptionReceived);
}
function Es(e) {
  return On(e, jt.TimeSyncUpdate).pipe(
    k(([t]) => t)
  );
}
function Cs(e, t = 1e3) {
  if (e === null) return Ot(!1);
  const n = nt(e, "mousemove", { passive: !0 }).pipe(k(() => !0)), r = n.pipe(
    ci({
      each: t,
      with: () => $e(Ot(!1), r.pipe(Ai(n)))
    }),
    Ti()
  );
  return r;
}
function go(e, t) {
  if (typeof localStorage > "u") {
    I.error("Local storage is not available.");
    return;
  }
  try {
    if (t) {
      const n = Object.fromEntries(
        Object.entries(t).filter(([, r]) => r !== "")
      );
      localStorage.setItem(e, JSON.stringify(n));
    }
  } catch (n) {
    I.error(`Error setting item to local storage: ${n}`);
  }
}
function bo(e) {
  if (typeof localStorage > "u") {
    I.error("Local storage is not available.");
    return;
  }
  try {
    const t = localStorage.getItem(e);
    if (!t) {
      I.warn(`Item with key ${e} does not exist in local storage.`);
      return;
    }
    return JSON.parse(t);
  } catch (t) {
    I.error(`Error getting item from local storage: ${t}`);
    return;
  }
}
function yo(e) {
  return {
    load: () => bo(e),
    save: (t) => go(e, t)
  };
}
var wo = `${wn}-user-choices`, we = {
  videoEnabled: !0,
  audioEnabled: !0,
  videoDeviceId: "default",
  audioDeviceId: "default",
  username: ""
}, { load: xo, save: So } = yo(wo);
function Ps(e, t = !1) {
  t !== !0 && So(e);
}
function As(e, t = !1) {
  var n, r, i, o, s;
  const a = {
    videoEnabled: (n = e == null ? void 0 : e.videoEnabled) != null ? n : we.videoEnabled,
    audioEnabled: (r = e == null ? void 0 : e.audioEnabled) != null ? r : we.audioEnabled,
    videoDeviceId: (i = e == null ? void 0 : e.videoDeviceId) != null ? i : we.videoDeviceId,
    audioDeviceId: (o = e == null ? void 0 : e.audioDeviceId) != null ? o : we.audioDeviceId,
    username: (s = e == null ? void 0 : e.username) != null ? s : we.username
  };
  if (t)
    return a;
  {
    const c = xo();
    return q(q({}, a), c ?? {});
  }
}
function Ln(e, t) {
  if (t.msg === "show_chat")
    return { ...e, showChat: !0, unreadMessages: 0 };
  if (t.msg === "hide_chat")
    return { ...e, showChat: !1 };
  if (t.msg === "toggle_chat") {
    const n = { ...e, showChat: !e.showChat };
    return n.showChat === !0 && (n.unreadMessages = 0), n;
  } else return t.msg === "unread_msg" ? { ...e, unreadMessages: t.count } : t.msg === "toggle_settings" ? { ...e, showSettings: !e.showSettings } : { ...e };
}
function _n(e, t) {
  return t.msg === "set_pin" ? [t.trackReference] : t.msg === "clear_pin" ? [] : { ...e };
}
const In = M.createContext(void 0);
function ks() {
  const e = M.useContext(In);
  if (!e)
    throw Error("Tried to access LayoutContext context outside a LayoutContextProvider provider.");
  return e;
}
function Os(e) {
  const t = To();
  if (e ?? (e = t), !e)
    throw Error("Tried to access LayoutContext context outside a LayoutContextProvider provider.");
  return e;
}
function Ls() {
  const [e, t] = M.useReducer(_n, Tn), [n, r] = M.useReducer(Ln, En);
  return {
    pin: { dispatch: t, state: e },
    widget: { dispatch: r, state: n }
  };
}
function _s(e) {
  const [t, n] = M.useReducer(_n, Tn), [r, i] = M.useReducer(Ln, En);
  return e ?? {
    pin: { dispatch: n, state: t },
    widget: { dispatch: i, state: r }
  };
}
function To() {
  return M.useContext(In);
}
const Mn = M.createContext(
  void 0
);
function Is() {
  const e = M.useContext(Mn);
  if (!e)
    throw Error("tried to access track context outside of track context provider");
  return e;
}
function Dn() {
  return M.useContext(Mn);
}
function Ms(e) {
  const t = Dn(), n = e ?? t;
  if (!n)
    throw new Error(
      "No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly"
    );
  return n;
}
const Rn = M.createContext(void 0);
function Ds() {
  const e = M.useContext(Rn);
  if (!e)
    throw Error("tried to access participant context outside of participant context provider");
  return e;
}
function Eo() {
  return M.useContext(Rn);
}
function Rs(e) {
  const t = Eo(), n = Dn(), r = e ?? t ?? (n == null ? void 0 : n.participant);
  if (!r)
    throw new Error(
      "No participant provided, make sure you are inside a participant context or pass the participant explicitly"
    );
  return r;
}
const Nn = M.createContext(void 0);
function Ns() {
  const e = M.useContext(Nn);
  if (!e)
    throw Error("tried to access room context outside of livekit room component");
  return e;
}
function Co() {
  return M.useContext(Nn);
}
function $s(e) {
  const t = Co(), n = e ?? t;
  if (!n)
    throw new Error(
      "No room provided, make sure you are inside a Room context or pass the room explicitly"
    );
  return n;
}
const Po = M.createContext(void 0);
function Us(e) {
  const t = M.useContext(Po);
  if (e === !0) {
    if (t)
      return t;
    throw Error("tried to access feature context, but none is present");
  }
  return t;
}
export {
  F as $,
  Yo as A,
  Eo as B,
  so as C,
  ps as D,
  ts as E,
  Os as F,
  Fo as G,
  ns as H,
  is as I,
  qo as J,
  Qo as K,
  zo as L,
  vs as M,
  ms as N,
  gs as O,
  fs as P,
  ss as Q,
  as as R,
  Vi as S,
  xs as T,
  Vo as U,
  Nt as V,
  Go as W,
  hs as X,
  As as Y,
  Ps as Z,
  Xo as _,
  ks as a,
  Ss as a0,
  Es as a1,
  Ts as a2,
  Bo as a3,
  Wo as a4,
  os as a5,
  Zo as a6,
  Dn as a7,
  In as a8,
  ds as a9,
  ko as aa,
  wr as ab,
  Rn as ac,
  Mn as ad,
  Us as ae,
  Cs as af,
  _o as ag,
  _s as ah,
  Nn as ai,
  Po as aj,
  No as ak,
  Ro as al,
  Mo as am,
  Do as an,
  jo as ao,
  Ls as ap,
  Oo as aq,
  Io as ar,
  $o as as,
  Uo as at,
  Ds as au,
  Is as av,
  Rs as b,
  ls as c,
  Ko as d,
  Ns as e,
  uo as f,
  us as g,
  Ms as h,
  To as i,
  bs as j,
  Lo as k,
  Wi as l,
  co as m,
  N as n,
  es as o,
  I as p,
  ws as q,
  ro as r,
  ys as s,
  kn as t,
  $s as u,
  rs as v,
  Co as w,
  Jo as x,
  cs as y,
  Ho as z
};
//# sourceMappingURL=contexts-BACje0Vb.mjs.map
