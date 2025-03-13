import * as r from "react";
import { u as w, r as ae, a as H, s as re, b as O, c as oe, d as ce, e as D, f as ie, g as ue, h as U, i as le, j as de, k as fe, G as pe, l as me, m as be, n as B, o as ge, p as y, q as ve, t as Se, v as X, w as K, x as Y, y as he, z as ye, A as Me, B as q, C as Pe, D as ke, E as Ee, F as we, H as Te, I as Ae, J as Ce, K as Oe, L as j, M as De, N as Ie, O as Le, P as Re, Q as Ne, R as Fe, S as Ve, T as Ue, U as Z, V as Be, W as qe, X as ze, Y as Je, Z as _e, _ as We, $ as $e, a0 as je, a1 as Qe, a2 as xe, a3 as Ge, a4 as He, a5 as V, a6 as Xe } from "./contexts-BwNSZuXm.mjs";
import { ConnectionQuality as Ke, ConnectionState as R, LocalTrackPublication as Ye, facingModeFromLocalTrack as Ze, Room as ee, RoomEvent as E, MediaDeviceFailure as et, Track as k, createAudioAnalyser as z, ParticipantKind as tt } from "livekit-client";
const nt = (e) => {
  const t = r.useRef(e);
  return r.useEffect(() => {
    t.current = e;
  }), t;
};
function st(e, t) {
  const n = rt(), s = nt(t);
  return r.useLayoutEffect(() => {
    let a = !1;
    const o = e.current;
    if (!o) return;
    function c(u, i) {
      a || s.current(u, i);
    }
    return n == null || n.subscribe(o, c), () => {
      a = !0, n == null || n.unsubscribe(o, c);
    };
  }, [e.current, n, s]), n == null ? void 0 : n.observer;
}
function at() {
  let e = !1, t = [];
  const n = /* @__PURE__ */ new Map();
  if (typeof window > "u")
    return;
  const s = new ResizeObserver((a, o) => {
    t = t.concat(a), e || window.requestAnimationFrame(() => {
      const c = /* @__PURE__ */ new Set();
      for (let u = 0; u < t.length; u++) {
        if (c.has(t[u].target)) continue;
        c.add(t[u].target);
        const i = n.get(t[u].target);
        i == null || i.forEach((l) => l(t[u], o));
      }
      t = [], e = !1;
    }), e = !0;
  });
  return {
    observer: s,
    subscribe(a, o) {
      s.observe(a);
      const c = n.get(a) ?? [];
      c.push(o), n.set(a, c);
    },
    unsubscribe(a, o) {
      const c = n.get(a) ?? [];
      if (c.length === 1) {
        s.unobserve(a), n.delete(a);
        return;
      }
      const u = c.indexOf(o);
      u !== -1 && c.splice(u, 1), n.set(a, c);
    }
  };
}
let F;
const rt = () => F || (F = at()), ot = (e) => {
  const [t, n] = r.useState({ width: 0, height: 0 });
  r.useLayoutEffect(() => {
    if (e.current) {
      const { width: a, height: o } = e.current.getBoundingClientRect();
      n({ width: a, height: o });
    }
  }, [e.current]);
  const s = r.useCallback(
    (a) => n(a.contentRect),
    []
  );
  return st(e, s), t;
};
function S(e, t, n = !0) {
  const [s, a] = r.useState(t);
  return r.useEffect(() => {
    if (n && a(t), typeof window > "u" || !e) return;
    const o = e.subscribe(a);
    return () => o.unsubscribe();
  }, [e, n]), s;
}
function It(e) {
  const t = (o) => typeof window < "u" ? window.matchMedia(o).matches : !1, [n, s] = r.useState(t(e));
  function a() {
    s(t(e));
  }
  return r.useEffect(() => {
    const o = window.matchMedia(e);
    return a(), o.addListener ? o.addListener(a) : o.addEventListener("change", a), () => {
      o.removeListener ? o.removeListener(a) : o.removeEventListener("change", a);
    };
  }, [e]), n;
}
function Lt(e) {
  const t = w(e), n = r.useCallback(async () => {
    await t.startAudio();
  }, [t]), s = r.useMemo(
    () => ae(t),
    [t]
  ), { canPlayAudio: a } = S(s, {
    canPlayAudio: t.canPlaybackAudio
  });
  return { canPlayAudio: a, startAudio: n };
}
function te(e) {
  var t, n, s = "";
  if (typeof e == "string" || typeof e == "number") s += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = te(e[t])) && (s && (s += " "), s += n);
  } else for (n in e) e[n] && (s && (s += " "), s += n);
  return s;
}
function ne() {
  for (var e, t, n = 0, s = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = te(e)) && (s && (s += " "), s += t);
  return s;
}
function ct(...e) {
  return (...t) => {
    for (const n of e)
      if (typeof n == "function")
        try {
          n(...t);
        } catch (s) {
          console.error(s);
        }
  };
}
function T(...e) {
  const t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    const s = e[n];
    for (const a in s) {
      const o = t[a], c = s[a];
      typeof o == "function" && typeof c == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = ct(o, c) : (a === "className" || a === "UNSAFE_className") && typeof o == "string" && typeof c == "string" ? t[a] = ne(o, c) : t[a] = c !== void 0 ? c : o;
    }
  }
  return t;
}
function Rt(e) {
  const { state: t, dispatch: n } = H().pin;
  return { buttonProps: r.useMemo(() => {
    const { className: a } = re();
    return T(e, {
      className: a,
      disabled: !(t != null && t.length),
      onClick: () => {
        n && n({ msg: "clear_pin" });
      }
    });
  }, [e, n, t]) };
}
function Nt(e = {}) {
  const t = O(e.participant), { className: n, connectionQualityObserver: s } = r.useMemo(
    () => oe(t),
    [t]
  ), a = S(s, Ke.Unknown);
  return { className: n, quality: a };
}
function N(e) {
  const t = w(e), n = r.useMemo(() => ce(t), [t]);
  return S(n, t.state);
}
function Ft(e, t) {
  const n = typeof e == "function" ? e : t, s = typeof e == "string" ? e : void 0, a = D(), { send: o, messageObservable: c, isSendingObservable: u } = r.useMemo(
    () => ie(a, s, n),
    [a, s, n]
  ), i = S(c, void 0), l = S(u, !1);
  return {
    message: i,
    send: o,
    isSending: l
  };
}
function Vt(e) {
  const t = D(), n = N(t);
  return { buttonProps: r.useMemo(() => {
    const { className: a, disconnect: o } = ue(t);
    return T(e, {
      className: a,
      onClick: () => o(e.stopTracks ?? !0),
      disabled: n === R.Disconnected
    });
  }, [t, e, n]) };
}
function it(e) {
  if (e.publication instanceof Ye) {
    const t = e.publication.track;
    if (t) {
      const { facingMode: n } = Ze(t);
      return n;
    }
  }
  return "undefined";
}
function Ut({ trackRef: e, props: t }) {
  const n = U(e), s = le(), { className: a } = r.useMemo(() => de(), []), o = r.useMemo(() => fe(n, s == null ? void 0 : s.pin.state), [n, s == null ? void 0 : s.pin.state]);
  return { mergedProps: r.useMemo(
    () => T(t, {
      className: a,
      onClick: (u) => {
        var i, l, f, p, d;
        (i = t.onClick) == null || i.call(t, u), o ? (f = s == null ? void 0 : (l = s.pin).dispatch) == null || f.call(l, {
          msg: "clear_pin"
        }) : (d = s == null ? void 0 : (p = s.pin).dispatch) == null || d.call(p, {
          msg: "set_pin",
          trackReference: n
        });
      }
    }),
    [t, a, n, o, s == null ? void 0 : s.pin]
  ), inFocus: o };
}
function Bt(e, t, n = {}) {
  const s = n.gridLayouts ?? pe, { width: a, height: o } = ot(e), c = me(s, t, a, o);
  return r.useEffect(() => {
    e.current && c && (e.current.style.setProperty("--lk-col-count", c == null ? void 0 : c.columns.toString()), e.current.style.setProperty("--lk-row-count", c == null ? void 0 : c.rows.toString()));
  }, [e, c]), {
    layout: c,
    containerWidth: a,
    containerHeight: o
  };
}
function Q(e, t = {}) {
  var u, i;
  const n = typeof e == "string" ? t.participant : e.participant, s = O(n), a = typeof e == "string" ? { participant: s, source: e } : e, [o, c] = r.useState(
    !!((u = a.publication) != null && u.isMuted || (i = s.getTrackPublication(a.source)) != null && i.isMuted)
  );
  return r.useEffect(() => {
    const l = be(a).subscribe(c);
    return () => l.unsubscribe();
  }, [B(a)]), o;
}
function ut(e) {
  const t = O(e), n = r.useMemo(() => ge(t), [t]);
  return S(n, t.isSpeaking);
}
function lt(e) {
  return e !== void 0;
}
function qt(...e) {
  return T(...e.filter(lt));
}
function zt(e, t, n) {
  return r.Children.map(e, (s) => r.isValidElement(s) && r.Children.only(e) ? (s.props.class && (t ?? (t = {}), t.class = ne(s.props.class, t.class), t.style = { ...s.props.style, ...t.style }), r.cloneElement(s, { ...t, key: n })) : s);
}
function Jt(e) {
  var t, n;
  if (typeof window < "u" && typeof process < "u" && // eslint-disable-next-line turbo/no-undeclared-env-vars
  (((t = process == null ? void 0 : process.env) == null ? void 0 : t.NODE_ENV) === "dev" || // eslint-disable-next-line turbo/no-undeclared-env-vars
  ((n = process == null ? void 0 : process.env) == null ? void 0 : n.NODE_ENV) === "development")) {
    const s = document.querySelector(".lk-room-container");
    s && !getComputedStyle(s).getPropertyValue("--lk-has-imported-styles") && y.warn(
      "It looks like you're not using the `@livekit/components-styles package`. To render the UI with the default styling, please import it in your layout or page."
    );
  }
}
function dt(e, t) {
  return e === "processor" && t && typeof t == "object" && "name" in t ? t.name : e === "e2ee" && t ? "e2ee-enabled" : t;
}
const ft = {
  connect: !0,
  audio: !1,
  video: !1
};
function _t(e) {
  const {
    token: t,
    serverUrl: n,
    options: s,
    room: a,
    connectOptions: o,
    connect: c,
    audio: u,
    video: i,
    screen: l,
    onConnected: f,
    onDisconnected: p,
    onError: d,
    onMediaDeviceFailure: b,
    onEncryptionError: v,
    simulateParticipants: g,
    ...M
  } = { ...ft, ...e };
  s && a && y.warn(
    "when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead."
  );
  const [m, P] = r.useState(), h = r.useRef(c);
  r.useEffect(() => {
    P(a ?? new ee(s));
  }, [a, JSON.stringify(s, dt)]);
  const I = r.useMemo(() => {
    const { className: C } = ve();
    return T(M, { className: C });
  }, [M]);
  return r.useEffect(() => {
    if (!m) return;
    const C = () => {
      const A = m.localParticipant;
      y.debug("trying to publish local tracks"), Promise.all([
        A.setMicrophoneEnabled(!!u, typeof u != "boolean" ? u : void 0),
        A.setCameraEnabled(!!i, typeof i != "boolean" ? i : void 0),
        A.setScreenShareEnabled(!!l, typeof l != "boolean" ? l : void 0)
      ]).catch((L) => {
        y.warn(L), d == null || d(L);
      });
    }, J = (A) => {
      const L = et.getFailure(A);
      b == null || b(L);
    }, _ = (A) => {
      v == null || v(A);
    }, W = (A) => {
      p == null || p(A);
    }, $ = () => {
      f == null || f();
    };
    return m.on(E.SignalConnected, C).on(E.MediaDevicesError, J).on(E.EncryptionError, _).on(E.Disconnected, W).on(E.Connected, $), () => {
      m.off(E.SignalConnected, C).off(E.MediaDevicesError, J).off(E.EncryptionError, _).off(E.Disconnected, W).off(E.Connected, $);
    };
  }, [
    m,
    u,
    i,
    l,
    d,
    v,
    b,
    f,
    p
  ]), r.useEffect(() => {
    if (m) {
      if (g) {
        m.simulateParticipants({
          participants: {
            count: g
          },
          publish: {
            audio: !0,
            useRealTracks: !0
          }
        });
        return;
      }
      if (c) {
        if (h.current = !0, y.debug("connecting"), !t) {
          y.debug("no token yet");
          return;
        }
        if (!n) {
          y.warn("no livekit url provided"), d == null || d(Error("no livekit url provided"));
          return;
        }
        m.connect(n, t, o).catch((C) => {
          y.warn(C), h.current === !0 && (d == null || d(C));
        });
      } else
        y.debug("disconnecting because connect is false"), h.current = !1, m.disconnect();
    }
  }, [
    c,
    t,
    JSON.stringify(o),
    m,
    d,
    n,
    g
  ]), r.useEffect(() => {
    if (m)
      return () => {
        y.info("disconnecting on onmount"), m.disconnect();
      };
  }, [m]), { room: m, htmlProps: I };
}
function pt(e = {}) {
  const t = w(e.room), [n, s] = r.useState(t.localParticipant), [a, o] = r.useState(
    n.isMicrophoneEnabled
  ), [c, u] = r.useState(
    n.isMicrophoneEnabled
  ), [i, l] = r.useState(
    n.lastMicrophoneError
  ), [f, p] = r.useState(n.lastCameraError), [d, b] = r.useState(
    n.isMicrophoneEnabled
  ), [v, g] = r.useState(
    void 0
  ), [M, m] = r.useState(void 0), P = (h) => {
    u(h.isCameraEnabled), o(h.isMicrophoneEnabled), b(h.isScreenShareEnabled), m(h.cameraTrack), g(h.microphoneTrack), l(h.participant.lastMicrophoneError), p(h.participant.lastCameraError), s(h.participant);
  };
  return r.useEffect(() => {
    const h = Se(t.localParticipant).subscribe(P);
    return () => h.unsubscribe();
  }, [t]), {
    isMicrophoneEnabled: a,
    isScreenShareEnabled: d,
    isCameraEnabled: c,
    microphoneTrack: v,
    cameraTrack: M,
    lastMicrophoneError: i,
    lastCameraError: f,
    localParticipant: n
  };
}
function Wt() {
  const e = D(), t = r.useMemo(
    () => X(e.localParticipant),
    [e]
  );
  return S(t, e.localParticipant.permissions);
}
function $t({
  kind: e,
  room: t,
  track: n,
  requestPermissions: s,
  onError: a
}) {
  const o = K(), c = r.useMemo(() => t ?? o ?? new ee(), [t, o]), u = r.useMemo(
    () => Y(e, a, s),
    [e, s, a]
  ), i = S(u, []), [l, f] = r.useState(
    (c == null ? void 0 : c.getActiveDevice(e)) ?? "default"
  ), { className: p, activeDeviceObservable: d, setActiveMediaDevice: b } = r.useMemo(
    () => he(e, c),
    [e, c, n]
  );
  return r.useEffect(() => {
    const v = d.subscribe((g) => {
      g && (y.info("setCurrentDeviceId", g), f(g));
    });
    return () => {
      v == null || v.unsubscribe();
    };
  }, [d]), { devices: i, className: p, activeDeviceId: l, setActiveMediaDevice: b };
}
function jt({
  kind: e,
  onError: t
}) {
  const n = r.useMemo(
    () => Y(e, t),
    [e, t]
  );
  return S(n, []);
}
function mt(e, t, n = {}) {
  const s = r.useRef([]), a = r.useRef(-1), o = t !== a.current, c = typeof n.customSortFunction == "function" ? n.customSortFunction(e) : ye(e);
  let u = [...c];
  if (o === !1)
    try {
      u = Me(s.current, c, t);
    } catch (i) {
      y.error("Error while running updatePages(): ", i);
    }
  return o ? s.current = c : s.current = u, a.current = t, u;
}
function Qt(e, t) {
  const [n, s] = r.useState(1), a = Math.max(Math.ceil(t.length / e), 1);
  n > a && s(a);
  const o = n * e, c = o - e, u = (p) => {
    s((d) => p === "next" ? d === a ? d : d + 1 : d === 1 ? d : d - 1);
  }, i = (p) => {
    p > a ? s(a) : p < 1 ? s(1) : s(p);
  }, f = mt(t, e).slice(c, o);
  return {
    totalPageCount: a,
    nextPage: () => u("next"),
    prevPage: () => u("previous"),
    setPage: i,
    firstItemIndex: c,
    lastItemIndex: o,
    tracks: f,
    currentPage: n
  };
}
function xt(e = {}) {
  let t = q();
  e.participant && (t = e.participant);
  const n = r.useMemo(() => Pe(t), [t]), { identity: s, name: a, metadata: o } = S(n, {
    name: t == null ? void 0 : t.name,
    identity: t == null ? void 0 : t.identity,
    metadata: t == null ? void 0 : t.metadata
  });
  return { identity: s, name: a, metadata: o };
}
function Gt(e = {}) {
  const t = O(e.participant), n = r.useMemo(() => X(t), [t]);
  return S(n, t.permissions);
}
function Ht({
  trackRef: e,
  onParticipantClick: t,
  disableSpeakingIndicator: n,
  htmlProps: s
}) {
  const a = U(e), o = r.useMemo(() => {
    const { className: d } = ke();
    return T(s, {
      className: d,
      onClick: (b) => {
        var v;
        if ((v = s.onClick) == null || v.call(s, b), typeof t == "function") {
          const g = a.publication ?? a.participant.getTrackPublication(a.source);
          t({ participant: a.participant, track: g });
        }
      }
    });
  }, [
    s,
    t,
    a.publication,
    a.source,
    a.participant
  ]), c = a.participant.getTrackPublication(k.Source.Microphone), u = r.useMemo(() => ({
    participant: a.participant,
    source: k.Source.Microphone,
    publication: c
  }), [c, a.participant]), i = Q(a), l = Q(u), f = ut(a.participant), p = it(a);
  return {
    elementProps: {
      "data-lk-audio-muted": l,
      "data-lk-video-muted": i,
      "data-lk-speaking": n === !0 ? !1 : f,
      "data-lk-local-participant": a.participant.isLocal,
      "data-lk-source": a.source,
      "data-lk-facing-mode": p,
      ...o
    }
  };
}
function se(e = {}) {
  const t = w(e.room), [n, s] = r.useState([]);
  return r.useEffect(() => {
    const a = Ee(t, {
      additionalRoomEvents: e.updateOnlyOn
    }).subscribe(s);
    return () => a.unsubscribe();
  }, [t, JSON.stringify(e.updateOnlyOn)]), n;
}
function Xt(e = {}) {
  const t = se(e), { localParticipant: n } = pt(e);
  return r.useMemo(
    () => [n, ...t],
    [n, t]
  );
}
function Kt(e) {
  return e = we(e), r.useMemo(() => (e == null ? void 0 : e.pin.state) !== void 0 && e.pin.state.length >= 1 ? e.pin.state : [], [e.pin.state]);
}
function Yt(e, t = {}) {
  const n = D(), [s] = r.useState(t.updateOnlyOn), a = r.useMemo(() => typeof e == "string" ? Te(n, e, {
    additionalEvents: s
  }) : Ae(n, e, {
    additionalEvents: s
  }), [n, JSON.stringify(e), s]), [o, c] = r.useState({
    p: void 0
  });
  return r.useEffect(() => {
    const u = a.subscribe((i) => c({ p: i }));
    return () => u.unsubscribe();
  }, [a]), o.p;
}
function Zt(e = {}) {
  const t = w(e.room), n = r.useMemo(() => Ce(t), [t]), { name: s, metadata: a } = S(n, {
    name: t.name,
    metadata: t.metadata
  });
  return { name: s, metadata: a };
}
function bt() {
  const e = D(), t = r.useMemo(() => Oe(e), [e]);
  return S(t, e.activeSpeakers);
}
function en(e) {
  const [t, n] = r.useState(
    j(e)
  ), s = bt();
  return r.useEffect(() => {
    n(j(e));
  }, [s, e]), t;
}
function tn({ room: e, props: t }) {
  const n = w(e), { className: s, roomAudioPlaybackAllowedObservable: a, handleStartAudioPlayback: o } = r.useMemo(
    () => De(),
    []
  ), c = r.useMemo(
    () => a(n),
    [n, a]
  ), { canPlayAudio: u } = S(c, {
    canPlayAudio: n.canPlaybackAudio
  });
  return { mergedProps: r.useMemo(
    () => T(t, {
      className: s,
      onClick: () => {
        o(n);
      },
      style: { display: u ? "none" : "block" }
    }),
    [t, s, u, o, n]
  ), canPlayAudio: u };
}
function nn({ room: e, props: t }) {
  const n = w(e), { className: s, roomVideoPlaybackAllowedObservable: a, handleStartVideoPlayback: o } = r.useMemo(
    () => Ie(),
    []
  ), c = r.useMemo(
    () => a(n),
    [n, a]
  ), { canPlayVideo: u } = S(c, {
    canPlayVideo: n.canPlaybackVideo
  });
  return { mergedProps: r.useMemo(
    () => T(t, {
      className: s,
      onClick: () => {
        o(n);
      },
      style: { display: u ? "none" : "block" }
    }),
    [t, s, u, o, n]
  ), canPlayVideo: u };
}
function sn(e, t = {}) {
  const n = r.useRef(null), s = r.useRef(null), a = t.minSwipeDistance ?? 50, o = (i) => {
    s.current = null, n.current = i.targetTouches[0].clientX;
  }, c = (i) => {
    s.current = i.targetTouches[0].clientX;
  }, u = r.useCallback(() => {
    if (!n.current || !s.current)
      return;
    const i = n.current - s.current, l = i > a, f = i < -a;
    l && t.onLeftSwipe && t.onLeftSwipe(), f && t.onRightSwipe && t.onRightSwipe();
  }, [a, t]);
  r.useEffect(() => {
    const i = e.current;
    return i && (i.addEventListener("touchstart", o, { passive: !0 }), i.addEventListener("touchmove", c, { passive: !0 }), i.addEventListener("touchend", u, { passive: !0 })), () => {
      i && (i.removeEventListener("touchstart", o), i.removeEventListener("touchmove", c), i.removeEventListener("touchend", u));
    };
  }, [e, u]);
}
function an({ props: e }) {
  const { dispatch: t, state: n } = H().widget, { className: s } = r.useMemo(() => Le(), []);
  return { mergedProps: r.useMemo(() => T(e, {
    className: s,
    onClick: () => {
      t && t({ msg: "toggle_chat" });
    },
    "aria-pressed": n != null && n.showChat ? "true" : "false",
    "data-lk-unread-msgs": n ? n.unreadMessages < 10 ? n.unreadMessages.toFixed(0) : "9+" : "0"
  }), [e, s, t, n]) };
}
function rn(e, t, n = {}) {
  const [s, a] = r.useState(void 0);
  return r.useEffect(() => {
    var c;
    if (e === void 0)
      throw Error("token endpoint needs to be defined");
    if (((c = n.userInfo) == null ? void 0 : c.identity) === void 0)
      return;
    (async () => {
      y.debug("fetching token");
      const u = new URLSearchParams({ ...n.userInfo, roomName: t }), i = await fetch(`${e}?${u.toString()}`);
      if (!i.ok) {
        y.error(
          `Could not fetch token. Server responded with status ${i.status}: ${i.statusText}`
        );
        return;
      }
      const { accessToken: l } = await i.json();
      a(l);
    })();
  }, [e, t, JSON.stringify(n)]), s;
}
function on(e) {
  var o, c;
  const t = U(e), { className: n, mediaMutedObserver: s } = r.useMemo(
    () => Re(t),
    [B(t)]
  );
  return { isMuted: S(
    s,
    !!((o = t.publication) != null && o.isMuted || (c = t.participant.getTrackPublication(t.source)) != null && c.isMuted)
  ), className: n };
}
function cn({
  source: e,
  onChange: t,
  initialState: n,
  captureOptions: s,
  publishOptions: a,
  onDeviceError: o,
  ...c
}) {
  var P;
  const u = K(), i = (P = u == null ? void 0 : u.localParticipant) == null ? void 0 : P.getTrackPublication(e), l = r.useRef(!1), { toggle: f, className: p, pendingObserver: d, enabledObserver: b } = r.useMemo(
    () => u ? Ne(e, u, s, a, o) : Fe(),
    [u, e, JSON.stringify(s), a]
  ), v = S(d, !1), g = S(b, n ?? !!(i != null && i.isEnabled));
  r.useEffect(() => {
    t == null || t(g, l.current), l.current = !1;
  }, [g, t]), r.useEffect(() => {
    n !== void 0 && (y.debug("forcing initial toggle state", e, n), f(n));
  }, []);
  const M = r.useMemo(() => T(c, { className: p }), [c, p]), m = r.useCallback(
    (h) => {
      var I;
      l.current = !0, f().catch(() => l.current = !1), (I = c.onClick) == null || I.call(c, h);
    },
    [c, f]
  );
  return {
    toggle: f,
    enabled: g,
    pending: v,
    track: i,
    buttonProps: {
      ...M,
      "aria-pressed": g,
      "data-lk-source": e,
      "data-lk-enabled": g,
      disabled: v,
      onClick: m
    }
  };
}
function un(e = [
  k.Source.Camera,
  k.Source.Microphone,
  k.Source.ScreenShare,
  k.Source.ScreenShareAudio,
  k.Source.Unknown
], t = {}) {
  const n = w(t.room), [s, a] = r.useState([]), [o, c] = r.useState([]), u = r.useMemo(() => e.map((l) => Ve(l) ? l.source : l), [JSON.stringify(e)]);
  return r.useEffect(() => {
    const l = Ue(n, u, {
      additionalRoomEvents: t.updateOnlyOn,
      onlySubscribed: t.onlySubscribed
    }).subscribe(({ trackReferences: f, participants: p }) => {
      y.debug("setting track bundles", f, p), a(f), c(p);
    });
    return () => l.unsubscribe();
  }, [
    n,
    JSON.stringify(t.onlySubscribed),
    JSON.stringify(t.updateOnlyOn),
    JSON.stringify(e)
  ]), r.useMemo(() => {
    if (Z(e)) {
      const l = vt(e, o), f = Array.from(s);
      return o.forEach((p) => {
        l.has(p.identity) && (l.get(p.identity) ?? []).forEach((b) => {
          if (s.find(
            ({ participant: g, publication: M }) => p.identity === g.identity && M.source === b
          ))
            return;
          y.debug(
            `Add ${b} placeholder for participant ${p.identity}.`
          );
          const v = {
            participant: p,
            source: b
          };
          f.push(v);
        });
      }), f;
    } else
      return s;
  }, [s, o, e]);
}
function gt(e, t) {
  const n = new Set(e);
  for (const s of t)
    n.delete(s);
  return n;
}
function vt(e, t) {
  const n = /* @__PURE__ */ new Map();
  if (Z(e)) {
    const s = e.filter((a) => a.withPlaceholder).map((a) => a.source);
    t.forEach((a) => {
      const o = a.getTrackPublications().map((u) => {
        var i;
        return (i = u.track) == null ? void 0 : i.source;
      }).filter((u) => u !== void 0), c = Array.from(
        gt(new Set(s), new Set(o))
      );
      c.length > 0 && n.set(a.identity, c);
    });
  }
  return n;
}
function St(e) {
  const [t, n] = r.useState(Be(e)), { trackObserver: s } = r.useMemo(() => qe(e), [e.participant.sid ?? e.participant.identity, e.source]);
  return r.useEffect(() => {
    const a = s.subscribe((o) => {
      n(o);
    });
    return () => a == null ? void 0 : a.unsubscribe();
  }, [s]), {
    participant: e.participant,
    source: e.source ?? k.Source.Unknown,
    publication: t
  };
}
function ln(e, t) {
  const n = O(t);
  return St({ name: e, participant: n });
}
function dn(e) {
  const t = D(), n = N(t), s = r.useMemo(
    () => n === R.Disconnected,
    [n]
  ), a = r.useMemo(
    () => ze(t, e),
    [t, e, s]
  ), o = S(a.isSendingObservable, !1), c = S(a.messageObservable, []);
  return { send: a.send, update: a.update, chatMessages: c, isSending: o };
}
function fn(e = {}) {
  const [t, n] = r.useState(
    Je(e.defaults, e.preventLoad ?? !1)
  ), s = r.useCallback((i) => {
    n((l) => ({ ...l, audioEnabled: i }));
  }, []), a = r.useCallback((i) => {
    n((l) => ({ ...l, videoEnabled: i }));
  }, []), o = r.useCallback((i) => {
    n((l) => ({ ...l, audioDeviceId: i }));
  }, []), c = r.useCallback((i) => {
    n((l) => ({ ...l, videoDeviceId: i }));
  }, []), u = r.useCallback((i) => {
    n((l) => ({ ...l, username: i }));
  }, []);
  return r.useEffect(() => {
    _e(t, e.preventSave ?? !1);
  }, [t, e.preventSave]), {
    userChoices: t,
    saveAudioInputEnabled: s,
    saveVideoInputEnabled: a,
    saveAudioInputDeviceId: o,
    saveVideoInputDeviceId: c,
    saveUsername: u
  };
}
function pn(e, t = {}) {
  const n = O(e), s = w(t.room), a = r.useMemo(() => We(s, n), [s, n]);
  return S(
    a,
    n.isLocal ? n.isE2EEEnabled : !!(n != null && n.isEncrypted)
  );
}
function mn(e, t = { fftSize: 32, smoothingTimeConstant: 0 }) {
  const n = $e(e) ? e.publication.track : e, [s, a] = r.useState(0);
  return r.useEffect(() => {
    if (!n || !n.mediaStream)
      return;
    const { cleanup: o, analyser: c } = z(n, t), u = c.frequencyBinCount, i = new Uint8Array(u), f = setInterval(() => {
      c.getByteFrequencyData(i);
      let p = 0;
      for (let d = 0; d < i.length; d++) {
        const b = i[d];
        p += b * b;
      }
      a(Math.sqrt(p / i.length) / 255);
    }, 1e3 / 30);
    return () => {
      o(), clearInterval(f);
    };
  }, [n, n == null ? void 0 : n.mediaStream, JSON.stringify(t)]), s;
}
const ht = (e) => {
  const t = (n) => {
    let o = 1 - Math.max(-100, Math.min(-10, n)) * -1 / 100;
    return o = Math.sqrt(o), o;
  };
  return e.map((n) => n === -1 / 0 ? 0 : t(n));
}, yt = {
  bands: 5,
  loPass: 100,
  hiPass: 600,
  updateInterval: 32,
  analyserOptions: { fftSize: 2048 }
};
function bn(e, t = {}) {
  var c;
  const n = e instanceof k ? e : (c = e == null ? void 0 : e.publication) == null ? void 0 : c.track, s = { ...yt, ...t }, [a, o] = r.useState(
    new Array(s.bands).fill(0)
  );
  return r.useEffect(() => {
    if (!n || !(n != null && n.mediaStream))
      return;
    const { analyser: u, cleanup: i } = z(n, s.analyserOptions), l = u.frequencyBinCount, f = new Float32Array(l), d = setInterval(() => {
      u.getFloatFrequencyData(f);
      let b = new Float32Array(f.length);
      for (let m = 0; m < f.length; m++)
        b[m] = f[m];
      b = b.slice(t.loPass, t.hiPass);
      const v = ht(b), g = Math.ceil(v.length / s.bands), M = [];
      for (let m = 0; m < s.bands; m++) {
        const P = v.slice(m * g, (m + 1) * g).reduce((h, I) => h += I, 0);
        M.push(P / g);
      }
      o(M);
    }, s.updateInterval);
    return () => {
      i(), clearInterval(d);
    };
  }, [n, n == null ? void 0 : n.mediaStream, JSON.stringify(t)]), a;
}
const Mt = {
  barCount: 120,
  volMultiplier: 5,
  updateInterval: 20
};
function gn(e, t = {}) {
  var f;
  const n = e instanceof k ? e : (f = e == null ? void 0 : e.publication) == null ? void 0 : f.track, s = { ...Mt, ...t }, a = r.useRef(new Float32Array()), o = r.useRef(performance.now()), c = r.useRef(0), [u, i] = r.useState([]), l = r.useCallback((p) => {
    i(
      Array.from(
        kt(p, s.barCount).map((d) => Math.sqrt(d) * s.volMultiplier)
        // wave.slice(0, opts.barCount).map((v) => sigmoid(v * opts.volMultiplier, 0.08, 0.2)),
      )
    );
  }, []);
  return r.useEffect(() => {
    if (!n || !(n != null && n.mediaStream))
      return;
    const { analyser: p, cleanup: d } = z(n, {
      fftSize: x(s.barCount)
    }), b = x(s.barCount), v = new Float32Array(b), g = () => {
      if (M = requestAnimationFrame(g), p.getFloatTimeDomainData(v), a.current.map((m, P) => m + v[P]), c.current += 1, performance.now() - o.current >= s.updateInterval) {
        const m = v.map((P) => P / c.current);
        l(m), o.current = performance.now(), c.current = 0;
      }
    };
    let M = requestAnimationFrame(g);
    return () => {
      d(), cancelAnimationFrame(M);
    };
  }, [n, n == null ? void 0 : n.mediaStream, JSON.stringify(t), l]), {
    bars: u
  };
}
function x(e) {
  return e < 32 ? 32 : Pt(e);
}
function Pt(e) {
  let t = 2;
  for (; e >>= 1; )
    t <<= 1;
  return t;
}
function kt(e, t) {
  const n = Math.floor(e.length / t), s = new Float32Array(t);
  for (let a = 0; a < t; a++) {
    const o = n * a;
    let c = 0;
    for (let u = 0; u < n; u++)
      c = c + Math.abs(e[o + u]);
    s[a] = c / n;
  }
  return s;
}
function Et(e, t) {
  const n = D(), s = q(), a = t ? n.getParticipantByIdentity(t) : s, o = r.useMemo(
    () => a ? je(a, { sources: e }) : void 0,
    [a == null ? void 0 : a.sid, a == null ? void 0 : a.identity, JSON.stringify(e)]
  );
  return S(o, []);
}
function wt(e) {
  var n, s, a;
  const t = r.useMemo(
    () => {
      var o;
      return (o = e == null ? void 0 : e.publication) != null && o.track ? Qe(e == null ? void 0 : e.publication.track) : void 0;
    },
    [(n = e == null ? void 0 : e.publication) == null ? void 0 : n.track]
  );
  return S(t, {
    timestamp: Date.now(),
    rtpTimestamp: (a = (s = e == null ? void 0 : e.publication) == null ? void 0 : s.track) == null ? void 0 : a.rtpTimestamp
  });
}
const Tt = {
  bufferSize: 100
  // maxAge: 2_000,
};
function At(e, t) {
  const n = { ...Tt, ...t }, [s, a] = r.useState([]), o = wt(e), c = (u) => {
    var i;
    (i = n.onTranscription) == null || i.call(n, u), a(
      (l) => Ge(
        l,
        // when first receiving a segment, add the current media timestamp to it
        u.map((f) => He(f, o)),
        n.bufferSize
      )
    );
  };
  return r.useEffect(() => {
    if (!(e != null && e.publication))
      return;
    const u = xe(e.publication).subscribe((i) => {
      c(...i);
    });
    return () => {
      u.unsubscribe();
    };
  }, [e && B(e), c]), { segments: s };
}
function Ct(e = {}) {
  const t = q(), n = e.participant ?? t, s = r.useMemo(
    // weird typescript constraint
    () => n ? V(n) : V(n),
    [n]
  );
  return S(s, {
    attributes: n == null ? void 0 : n.attributes
  });
}
function vn(e, t = {}) {
  const n = O(t.participant), [s, a] = r.useState(n.attributes[e]);
  return r.useEffect(() => {
    if (!n)
      return;
    const o = V(n).subscribe((c) => {
      c.changed[e] !== void 0 && a(c.attributes[e]);
    });
    return () => {
      o.unsubscribe();
    };
  }, [n, e]), s;
}
const G = "lk.agent.state";
function Sn() {
  const e = se().find((c) => c.kind === tt.AGENT), t = Et([k.Source.Microphone], e == null ? void 0 : e.identity)[0], { segments: n } = At(t), s = N(), { attributes: a } = Ct({ participant: e }), o = r.useMemo(() => s === R.Disconnected ? "disconnected" : s === R.Connecting || !e || !(a != null && a[G]) ? "connecting" : a[G], [a, e, s]);
  return {
    agent: e,
    state: o,
    audioTrack: t,
    agentTranscriptions: n,
    agentAttributes: a
  };
}
function hn(e) {
  const t = w(e), n = N(t), s = r.useMemo(() => Xe(t), [t, n]);
  return S(s, t.isRecording);
}
export {
  Sn as $,
  Jt as A,
  fn as B,
  jt as C,
  dt as D,
  T as E,
  It as F,
  Wt as G,
  Kt as H,
  pt as I,
  Lt as J,
  Ft as K,
  it as L,
  Q as M,
  ut as N,
  xt as O,
  Gt as P,
  Xt as Q,
  Yt as R,
  se as S,
  en as T,
  bt as U,
  rn as V,
  ln as W,
  mn as X,
  gn as Y,
  Et as Z,
  At as _,
  N as a,
  Ct as a0,
  vn as a1,
  hn as a2,
  an as b,
  Vt as c,
  Ut as d,
  $t as e,
  tn as f,
  nn as g,
  cn as h,
  Nt as i,
  S as j,
  on as k,
  Ht as l,
  qt as m,
  pn as n,
  zt as o,
  Bt as p,
  Qt as q,
  sn as r,
  ot as s,
  mt as t,
  Rt as u,
  _t as v,
  bn as w,
  un as x,
  Zt as y,
  dn as z
};
//# sourceMappingURL=room-FLLe___6.mjs.map
