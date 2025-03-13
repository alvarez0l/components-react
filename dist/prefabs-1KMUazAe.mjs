import { Track as y, facingModeFromLocalTrack as ie, Mutex as oe, createLocalTracks as ue, createLocalVideoTrack as le, VideoPresets as de, createLocalAudioTrack as me, RoomEvent as fe } from "livekit-client";
import * as e from "react";
import { C as G, S as he, a as pe, M as B, b as ge, T as R, c as Ee, d as ve, D as K, e as Se, f as H, L as J, G as ke, P as z, F as be, g as Ce, h as we, R as Ie, i as ye, j as Me, k as Ne, B as Pe } from "./components-vm7194Lz.mjs";
import { i as Q, am as Te, an as Le, p as P, a as Ae, ao as De, ap as Re, $ as q, aq as Ve, ar as Oe } from "./contexts-BwNSZuXm.mjs";
import { z as $e, o as Ue, A as _e, B as x, C as Fe, D as Be, E as qe, F as xe, G as X, m as Y, x as Z, H as We, I as je } from "./room-FLLe___6.mjs";
function ee({
  messageFormatter: i,
  messageDecoder: l,
  messageEncoder: o,
  channelTopic: a,
  ...v
}) {
  const p = e.useRef(null), f = e.useRef(null), u = e.useMemo(() => ({ messageDecoder: l, messageEncoder: o, channelTopic: a }), [l, o, a]), { send: d, chatMessages: g, isSending: t } = $e(u), m = Q(), c = e.useRef(0);
  async function S(s) {
    s.preventDefault(), p.current && p.current.value.trim() !== "" && d && (await d(p.current.value), p.current.value = "", p.current.focus());
  }
  return e.useEffect(() => {
    var s;
    f && ((s = f.current) == null || s.scrollTo({ top: f.current.scrollHeight }));
  }, [f, g]), e.useEffect(() => {
    var r, E, n, C, w;
    if (!m || g.length === 0)
      return;
    if ((r = m.widget.state) != null && r.showChat && g.length > 0 && c.current !== ((E = g[g.length - 1]) == null ? void 0 : E.timestamp)) {
      c.current = (n = g[g.length - 1]) == null ? void 0 : n.timestamp;
      return;
    }
    const s = g.filter(
      (A) => !c.current || A.timestamp > c.current
    ).length, { widget: h } = m;
    s > 0 && ((C = h.state) == null ? void 0 : C.unreadMessages) !== s && ((w = h.dispatch) == null || w.call(h, { msg: "unread_msg", count: s }));
  }, [g, m == null ? void 0 : m.widget]), /* @__PURE__ */ e.createElement("div", { ...v, className: "lk-chat" }, /* @__PURE__ */ e.createElement("div", { className: "lk-chat-header" }, "Messages", m && /* @__PURE__ */ e.createElement(G, { className: "lk-close-button" }, /* @__PURE__ */ e.createElement(he, null))), /* @__PURE__ */ e.createElement("ul", { className: "lk-list lk-chat-messages", ref: f }, v.children ? g.map(
    (s, h) => Ue(v.children, {
      entry: s,
      key: s.id ?? h,
      messageFormatter: i
    })
  ) : g.map((s, h, r) => {
    const E = h >= 1 && r[h - 1].from === s.from, n = h >= 1 && s.timestamp - r[h - 1].timestamp < 6e4;
    return /* @__PURE__ */ e.createElement(
      pe,
      {
        key: s.id ?? h,
        hideName: E,
        hideTimestamp: E === !1 ? !1 : n,
        entry: s,
        messageFormatter: i
      }
    );
  })), /* @__PURE__ */ e.createElement("form", { className: "lk-chat-form", onSubmit: S }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "lk-form-control lk-chat-form-input",
      disabled: t,
      ref: p,
      type: "text",
      placeholder: "Enter a message...",
      onInput: (s) => s.stopPropagation(),
      onKeyDown: (s) => s.stopPropagation(),
      onKeyUp: (s) => s.stopPropagation()
    }
  ), /* @__PURE__ */ e.createElement("button", { type: "submit", className: "lk-button lk-chat-form-button", disabled: t }, "Send")));
}
function O({
  kind: i,
  initialSelection: l,
  onActiveDeviceChange: o,
  tracks: a,
  requestPermissions: v = !1,
  ...p
}) {
  const [f, u] = e.useState(!1), [d, g] = e.useState([]), [t, m] = e.useState(!0), [c, S] = e.useState(v), s = (n, C) => {
    P.debug("handle device change"), u(!1), o == null || o(n, C);
  }, h = e.useRef(null), r = e.useRef(null);
  e.useLayoutEffect(() => {
    f && S(!0);
  }, [f]), e.useLayoutEffect(() => {
    h.current && r.current && (d || t) && Te(h.current, r.current).then(({ x: n, y: C }) => {
      r.current && Object.assign(r.current.style, { left: `${n}px`, top: `${C}px` });
    }), m(!1);
  }, [h, r, d, t]);
  const E = e.useCallback(
    (n) => {
      r.current && n.target !== h.current && f && Le(r.current, n) && u(!1);
    },
    [f, r, h]
  );
  return e.useEffect(() => (document.addEventListener("click", E), window.addEventListener("resize", () => m(!0)), () => {
    document.removeEventListener("click", E), window.removeEventListener("resize", () => m(!0));
  }), [E, m]), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "lk-button lk-button-menu",
      "aria-pressed": f,
      ...p,
      onClick: () => u(!f),
      ref: h
    },
    p.children
  ), !p.disabled && /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "lk-device-menu",
      ref: r,
      style: { visibility: f ? "visible" : "hidden" }
    },
    i ? /* @__PURE__ */ e.createElement(
      B,
      {
        initialSelection: l,
        onActiveDeviceChange: (n) => s(i, n),
        onDeviceListChange: g,
        kind: i,
        track: a == null ? void 0 : a[i],
        requestPermissions: c
      }
    ) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "lk-device-menu-heading" }, "Audio inputs"), /* @__PURE__ */ e.createElement(
      B,
      {
        kind: "audioinput",
        onActiveDeviceChange: (n) => s("audioinput", n),
        onDeviceListChange: g,
        track: a == null ? void 0 : a.audioinput,
        requestPermissions: c
      }
    ), /* @__PURE__ */ e.createElement("div", { className: "lk-device-menu-heading" }, "Video inputs"), /* @__PURE__ */ e.createElement(
      B,
      {
        kind: "videoinput",
        onActiveDeviceChange: (n) => s("videoinput", n),
        onDeviceListChange: g,
        track: a == null ? void 0 : a.videoinput,
        requestPermissions: c
      }
    ))
  ));
}
function W() {
  e.useEffect(() => {
    _e();
  }, []);
}
function ze(i, l) {
  const [o, a] = e.useState(), v = e.useMemo(() => new oe(), []);
  return e.useEffect(() => {
    let p = !1, f = [];
    return v.lock().then(async (u) => {
      try {
        (i.audio || i.video) && (f = await ue(i), p ? f.forEach((d) => d.stop()) : a(f));
      } catch (d) {
        l && d instanceof Error ? l(d) : P.error(d);
      } finally {
        u();
      }
    }), () => {
      p = !0, f.forEach((u) => {
        u.stop();
      });
    };
  }, [JSON.stringify(i, Be), l, v]), o;
}
function Ye(i, l, o) {
  const [a, v] = e.useState(null), [p, f] = e.useState(!1), u = Fe({ kind: o }), [d, g] = e.useState(
    void 0
  ), [t, m] = e.useState(), [c, S] = e.useState(l);
  e.useEffect(() => {
    S(l);
  }, [l]);
  const s = async (E, n) => {
    try {
      const C = n === "videoinput" ? await le({
        deviceId: E,
        resolution: de.h720.resolution
      }) : await me({ deviceId: E }), w = await C.getDeviceId(!1);
      w && E !== w && (r.current = w, S(w)), m(C);
    } catch (C) {
      C instanceof Error && v(C);
    }
  }, h = async (E, n) => {
    await E.setDeviceId(n), r.current = n;
  }, r = e.useRef(c);
  return e.useEffect(() => {
    i && !t && !a && !p && (P.debug("creating track", o), f(!0), s(c, o).finally(() => {
      f(!1);
    }));
  }, [i, t, a, p]), e.useEffect(() => {
    t && (i ? d != null && d.deviceId && r.current !== (d == null ? void 0 : d.deviceId) ? (P.debug(`switching ${o} device from`, r.current, d.deviceId), h(t, d.deviceId)) : (P.debug(`unmuting local ${o} track`), t.unmute()) : (P.debug(`muting ${o} track`), t.mute().then(() => P.debug(t.mediaStreamTrack))));
  }, [t, d, i, o]), e.useEffect(() => () => {
    t && (P.debug(`stopping local ${o} track`), t.stop(), t.mute());
  }, []), e.useEffect(() => {
    g(u == null ? void 0 : u.find((E) => E.deviceId === c));
  }, [c, u]), {
    selectedDevice: d,
    localTrack: t,
    deviceError: a
  };
}
function Ze({
  defaults: i = {},
  onValidate: l,
  onSubmit: o,
  onError: a,
  debug: v,
  joinLabel: p = "Join Room",
  micLabel: f = "Microphone",
  camLabel: u = "Camera",
  userLabel: d = "Username",
  persistUserChoices: g = !0,
  videoProcessor: t,
  ...m
}) {
  const {
    userChoices: c,
    saveAudioInputDeviceId: S,
    saveAudioInputEnabled: s,
    saveVideoInputDeviceId: h,
    saveVideoInputEnabled: r,
    saveUsername: E
  } = x({
    defaults: i,
    preventSave: !g,
    preventLoad: !g
  }), [n, C] = e.useState(c), [w, A] = e.useState(n.audioEnabled), [I, L] = e.useState(n.videoEnabled), [T, $] = e.useState(n.audioDeviceId), [k, N] = e.useState(n.videoDeviceId), [V, ae] = e.useState(n.username);
  e.useEffect(() => {
    s(w);
  }, [w, s]), e.useEffect(() => {
    r(I);
  }, [I, r]), e.useEffect(() => {
    S(T);
  }, [T, S]), e.useEffect(() => {
    h(k);
  }, [k, h]), e.useEffect(() => {
    E(V);
  }, [V, E]);
  const D = ze(
    {
      audio: w ? { deviceId: c.audioDeviceId } : !1,
      video: I ? { deviceId: c.videoDeviceId, processor: t } : !1
    },
    a
  ), U = e.useRef(null), M = e.useMemo(
    () => D == null ? void 0 : D.filter((b) => b.kind === y.Kind.Video)[0],
    [D]
  ), ne = e.useMemo(() => {
    if (M) {
      const { facingMode: b } = ie(M);
      return b;
    } else
      return "undefined";
  }, [M]), j = e.useMemo(
    () => D == null ? void 0 : D.filter((b) => b.kind === y.Kind.Audio)[0],
    [D]
  );
  e.useEffect(() => (U.current && M && (M.unmute(), M.attach(U.current)), () => {
    M == null || M.detach();
  }), [M]);
  const [se, ce] = e.useState(), _ = e.useCallback(
    (b) => typeof l == "function" ? l(b) : b.username !== "",
    [l]
  );
  e.useEffect(() => {
    const b = {
      username: V,
      videoEnabled: I,
      videoDeviceId: k,
      audioEnabled: w,
      audioDeviceId: T
    };
    C(b), ce(_(b));
  }, [V, I, _, w, T, k]);
  function re(b) {
    b.preventDefault(), _(n) ? typeof o == "function" && o(n) : P.warn("Validation failed with: ", n);
  }
  return W(), /* @__PURE__ */ e.createElement("div", { className: "lk-prejoin", ...m }, /* @__PURE__ */ e.createElement("div", { className: "lk-video-container" }, M && /* @__PURE__ */ e.createElement("video", { ref: U, width: "1280", height: "720", "data-lk-facing-mode": ne }), (!M || !I) && /* @__PURE__ */ e.createElement("div", { className: "lk-camera-off-note" }, /* @__PURE__ */ e.createElement(ge, null))), /* @__PURE__ */ e.createElement("div", { className: "lk-button-group-container" }, /* @__PURE__ */ e.createElement("div", { className: "lk-button-group audio" }, /* @__PURE__ */ e.createElement(
    R,
    {
      initialState: w,
      source: y.Source.Microphone,
      onChange: (b) => A(b)
    },
    f
  ), /* @__PURE__ */ e.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ e.createElement(
    O,
    {
      initialSelection: T,
      kind: "audioinput",
      disabled: !j,
      tracks: { audioinput: j },
      onActiveDeviceChange: (b, F) => $(F)
    }
  ))), /* @__PURE__ */ e.createElement("div", { className: "lk-button-group video" }, /* @__PURE__ */ e.createElement(
    R,
    {
      initialState: I,
      source: y.Source.Camera,
      onChange: (b) => L(b)
    },
    u
  ), /* @__PURE__ */ e.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ e.createElement(
    O,
    {
      initialSelection: k,
      kind: "videoinput",
      disabled: !M,
      tracks: { videoinput: M },
      onActiveDeviceChange: (b, F) => N(F)
    }
  )))), /* @__PURE__ */ e.createElement("form", { className: "lk-username-container" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      className: "lk-form-control",
      id: "username",
      name: "username",
      type: "text",
      defaultValue: V,
      placeholder: d,
      onChange: (b) => ae(b.target.value),
      autoComplete: "off"
    }
  ), /* @__PURE__ */ e.createElement(
    "button",
    {
      className: "lk-button lk-join-button",
      type: "submit",
      onClick: re,
      disabled: !se
    },
    p
  )), v && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("strong", null, "User Choices:"), /* @__PURE__ */ e.createElement("ul", { className: "lk-list", style: { overflow: "hidden", maxWidth: "15rem" } }, /* @__PURE__ */ e.createElement("li", null, "Username: ", `${n.username}`), /* @__PURE__ */ e.createElement("li", null, "Video Enabled: ", `${n.videoEnabled}`), /* @__PURE__ */ e.createElement("li", null, "Audio Enabled: ", `${n.audioEnabled}`), /* @__PURE__ */ e.createElement("li", null, "Video Device: ", `${n.videoDeviceId}`), /* @__PURE__ */ e.createElement("li", null, "Audio Device: ", `${n.audioDeviceId}`))));
}
function Ge({ props: i }) {
  const { dispatch: l, state: o } = Ae().widget, a = "lk-button lk-settings-toggle";
  return { mergedProps: e.useMemo(() => qe(i, {
    className: a,
    onClick: () => {
      l && l({ msg: "toggle_settings" });
    },
    "aria-pressed": o != null && o.showSettings ? "true" : "false"
  }), [i, a, l, o]) };
}
const Ke = /* @__PURE__ */ e.forwardRef(
  function(l, o) {
    const { mergedProps: a } = Ge({ props: l });
    return /* @__PURE__ */ e.createElement("button", { ref: o, ...a }, l.children);
  }
);
function te({
  variation: i,
  controls: l,
  saveUserChoices: o = !0,
  onDeviceError: a,
  ...v
}) {
  var $;
  const [p, f] = e.useState(!1), u = Q();
  e.useEffect(() => {
    var k, N;
    ((k = u == null ? void 0 : u.widget.state) == null ? void 0 : k.showChat) !== void 0 && f((N = u == null ? void 0 : u.widget.state) == null ? void 0 : N.showChat);
  }, [($ = u == null ? void 0 : u.widget.state) == null ? void 0 : $.showChat]);
  const g = xe(`(max-width: ${p ? 1e3 : 760}px)`) ? "minimal" : "verbose";
  i ?? (i = g);
  const t = { leave: !0, ...l }, m = X();
  m ? (t.camera ?? (t.camera = m.canPublish), t.microphone ?? (t.microphone = m.canPublish), t.screenShare ?? (t.screenShare = m.canPublish), t.chat ?? (t.chat = m.canPublishData && (l == null ? void 0 : l.chat))) : (t.camera = !1, t.chat = !1, t.microphone = !1, t.screenShare = !1);
  const c = e.useMemo(
    () => i === "minimal" || i === "verbose",
    [i]
  ), S = e.useMemo(
    () => i === "textOnly" || i === "verbose",
    [i]
  ), s = De(), [h, r] = e.useState(!1), E = e.useCallback(
    (k) => {
      r(k);
    },
    [r]
  ), n = Y({ className: "lk-control-bar" }, v), {
    saveAudioInputEnabled: C,
    saveVideoInputEnabled: w,
    saveAudioInputDeviceId: A,
    saveVideoInputDeviceId: I
  } = x({ preventSave: !o }), L = e.useCallback(
    (k, N) => N ? C(k) : null,
    [C]
  ), T = e.useCallback(
    (k, N) => N ? w(k) : null,
    [w]
  );
  return /* @__PURE__ */ e.createElement("div", { ...n }, t.microphone && /* @__PURE__ */ e.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ e.createElement(
    R,
    {
      source: y.Source.Microphone,
      showIcon: c,
      onChange: L,
      onDeviceError: (k) => a == null ? void 0 : a({ source: y.Source.Microphone, error: k })
    },
    S && "Микрофон"
  ), /* @__PURE__ */ e.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ e.createElement(
    O,
    {
      kind: "audioinput",
      onActiveDeviceChange: (k, N) => A(N ?? "default")
    }
  ))), t.camera && /* @__PURE__ */ e.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ e.createElement(
    R,
    {
      source: y.Source.Camera,
      showIcon: c,
      onChange: T,
      onDeviceError: (k) => a == null ? void 0 : a({ source: y.Source.Camera, error: k })
    },
    S && "Камера"
  ), /* @__PURE__ */ e.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ e.createElement(
    O,
    {
      kind: "videoinput",
      onActiveDeviceChange: (k, N) => I(N ?? "default")
    }
  ))), t.screenShare && s && /* @__PURE__ */ e.createElement(
    R,
    {
      source: y.Source.ScreenShare,
      captureOptions: { audio: !0, selfBrowserSurface: "include" },
      showIcon: c,
      onChange: E,
      onDeviceError: (k) => a == null ? void 0 : a({ source: y.Source.ScreenShare, error: k })
    },
    S && (h ? "Stop screen share" : "Share screen")
  ), t.chat && /* @__PURE__ */ e.createElement(G, null, c && /* @__PURE__ */ e.createElement(Ee, null), S && "Чат"), t.settings && /* @__PURE__ */ e.createElement(Ke, null, c && /* @__PURE__ */ e.createElement(ve, null), S && "Настройки"), t.leave && /* @__PURE__ */ e.createElement(K, null, c && /* @__PURE__ */ e.createElement(Se, null), S && "Отключиться"), /* @__PURE__ */ e.createElement(H, null));
}
function et({
  chatMessageFormatter: i,
  chatMessageDecoder: l,
  chatMessageEncoder: o,
  SettingsComponent: a,
  ...v
}) {
  var s, h;
  const [p, f] = e.useState({
    showChat: !1,
    unreadMessages: 0,
    showSettings: !1
  }), u = e.useRef(null), d = Z(
    [
      { source: y.Source.Camera, withPlaceholder: !0 },
      { source: y.Source.ScreenShare, withPlaceholder: !1 }
    ],
    { updateOnlyOn: [fe.ActiveSpeakersChanged], onlySubscribed: !1 }
  ), g = (r) => {
    P.debug("updating widget state", r), f(r);
  }, t = Re(), m = d.filter(q).filter((r) => r.publication.source === y.Source.ScreenShare), c = (s = We(t)) == null ? void 0 : s[0], S = d.filter((r) => !Ve(r, c));
  return e.useEffect(() => {
    var r, E, n, C, w, A;
    if (m.some((I) => I.publication.isSubscribed) && u.current === null ? (P.debug("Auto set screen share focus:", { newScreenShareTrack: m[0] }), (E = (r = t.pin).dispatch) == null || E.call(r, { msg: "set_pin", trackReference: m[0] }), u.current = m[0]) : u.current && !m.some(
      (I) => {
        var L, T;
        return I.publication.trackSid === ((T = (L = u.current) == null ? void 0 : L.publication) == null ? void 0 : T.trackSid);
      }
    ) && (P.debug("Auto clearing screen share focus."), (C = (n = t.pin).dispatch) == null || C.call(n, { msg: "clear_pin" }), u.current = null), c && !q(c)) {
      const I = d.find(
        (L) => L.participant.identity === c.participant.identity && L.source === c.source
      );
      I !== c && q(I) && ((A = (w = t.pin).dispatch) == null || A.call(w, { msg: "set_pin", trackReference: I }));
    }
  }, [
    m.map((r) => `${r.publication.trackSid}_${r.publication.isSubscribed}`).join(),
    (h = c == null ? void 0 : c.publication) == null ? void 0 : h.trackSid,
    d
  ]), W(), /* @__PURE__ */ e.createElement("div", { className: "lk-video-conference", ...v }, Oe() && /* @__PURE__ */ e.createElement(
    J,
    {
      value: t,
      onWidgetChange: g
    },
    /* @__PURE__ */ e.createElement("div", { className: "lk-video-conference-inner" }, c ? /* @__PURE__ */ e.createElement("div", { className: "lk-focus-layout-wrapper" }, /* @__PURE__ */ e.createElement(be, null, /* @__PURE__ */ e.createElement(Ce, { tracks: S }, /* @__PURE__ */ e.createElement(z, null)), c && /* @__PURE__ */ e.createElement(we, { trackRef: c }))) : /* @__PURE__ */ e.createElement("div", { className: "lk-grid-layout-wrapper" }, /* @__PURE__ */ e.createElement(ke, { tracks: d }, /* @__PURE__ */ e.createElement(z, null))), /* @__PURE__ */ e.createElement(te, { controls: { chat: !0, settings: !!a } })),
    /* @__PURE__ */ e.createElement(
      ee,
      {
        style: { display: p.showChat ? "grid" : "none" },
        messageFormatter: i,
        messageEncoder: o,
        messageDecoder: l
      }
    ),
    a && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "lk-settings-menu-modal",
        style: { display: p.showSettings ? "block" : "none" }
      },
      /* @__PURE__ */ e.createElement(a, null)
    )
  ), /* @__PURE__ */ e.createElement(Ie, null), /* @__PURE__ */ e.createElement(ye, null));
}
function tt({ ...i }) {
  const [l, o] = e.useState({
    showChat: !1,
    unreadMessages: 0
  }), a = Z([y.Source.Microphone]);
  return W(), /* @__PURE__ */ e.createElement(J, { onWidgetChange: o }, /* @__PURE__ */ e.createElement("div", { className: "lk-audio-conference", ...i }, /* @__PURE__ */ e.createElement("div", { className: "lk-audio-conference-stage" }, /* @__PURE__ */ e.createElement(Me, { tracks: a }, /* @__PURE__ */ e.createElement(Ne, null))), /* @__PURE__ */ e.createElement(
    te,
    {
      controls: { microphone: !0, screenShare: !1, camera: !1, chat: !0 }
    }
  ), l.showChat && /* @__PURE__ */ e.createElement(ee, null)));
}
function at({
  controls: i,
  saveUserChoices: l = !0,
  onDeviceError: o,
  ...a
}) {
  const v = { leave: !0, microphone: !0, ...i }, p = X(), { microphoneTrack: f, localParticipant: u } = je(), d = e.useMemo(() => ({
    participant: u,
    source: y.Source.Microphone,
    publication: f
  }), [u, f]);
  p ? v.microphone ?? (v.microphone = p.canPublish) : v.microphone = !1;
  const g = Y({ className: "lk-agent-control-bar" }, a), { saveAudioInputEnabled: t, saveAudioInputDeviceId: m } = x({
    preventSave: !l
  }), c = e.useCallback(
    (S, s) => {
      s && t(S);
    },
    [t]
  );
  return /* @__PURE__ */ e.createElement("div", { ...g }, v.microphone && /* @__PURE__ */ e.createElement("div", { className: "lk-button-group" }, /* @__PURE__ */ e.createElement(
    R,
    {
      source: y.Source.Microphone,
      showIcon: !0,
      onChange: c,
      onDeviceError: (S) => o == null ? void 0 : o({ source: y.Source.Microphone, error: S })
    },
    /* @__PURE__ */ e.createElement(Pe, { trackRef: d, barCount: 7, options: { minHeight: 5 } })
  ), /* @__PURE__ */ e.createElement("div", { className: "lk-button-group-menu" }, /* @__PURE__ */ e.createElement(
    O,
    {
      kind: "audioinput",
      onActiveDeviceChange: (S, s) => m(s ?? "default")
    }
  ))), v.leave && /* @__PURE__ */ e.createElement(K, null, "Disconnect"), /* @__PURE__ */ e.createElement(H, null));
}
export {
  tt as A,
  ee as C,
  O as M,
  Ze as P,
  et as V,
  ze as a,
  te as b,
  at as c,
  Ye as u
};
//# sourceMappingURL=prefabs-1KMUazAe.mjs.map
