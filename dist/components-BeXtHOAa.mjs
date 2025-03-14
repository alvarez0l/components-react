import * as e from "react";
import { useState as j, useRef as N, useEffect as z, useMemo as Ne } from "react";
import { u as ze, a as he, b as Fe, c as Ve, d as Be, e as He, m as S, f as ge, g as je, h as _e, i as Oe, j as We, k as $e, l as ve, n as qe, o as ee, p as De, q as Ge, r as Qe, s as Ue, t as Ke, v as Ze, w as Ee, x as Je, y as Xe } from "./room-CAwzLDkV.mjs";
import { RoomEvent as Ye, Track as y, ConnectionQuality as K, RemoteTrackPublication as X, RemoteAudioTrack as et, ConnectionState as Z } from "livekit-client";
import { a7 as te, a8 as pe, w as tt, e as we, b as at, a9 as nt, V as rt, W as ct, $ as D, p as _, aa as q, ab as lt, h as O, B as it, ac as ke, ad as ae, i as ot, ae as st, k as ut, n as Re, af as dt, ag as mt, ah as ft, ai as ht, aj as gt, ak as vt, al as Et } from "./contexts-BACje0Vb.mjs";
const ra = /* @__PURE__ */ e.forwardRef(
  function(n, a) {
    const { buttonProps: r } = ze(n);
    return /* @__PURE__ */ e.createElement("button", { ref: a, ...r }, n.children);
  }
), ca = /* @__PURE__ */ e.forwardRef(
  function({ room: n, ...a }, r) {
    const c = he(n);
    return /* @__PURE__ */ e.createElement("div", { ref: r, ...a }, c);
  }
), la = /* @__PURE__ */ e.forwardRef(
  function(n, a) {
    const { mergedProps: r } = Fe({ props: n });
    return /* @__PURE__ */ e.createElement("button", { ref: a, ...r }, n.children);
  }
), ia = /* @__PURE__ */ e.forwardRef(
  function(n, a) {
    const { buttonProps: r } = Ve(n);
    return /* @__PURE__ */ e.createElement("button", { ref: a, ...r }, n.children);
  }
), pt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708L11 10.293V4.5A1.5 1.5 0 0 0 9.5 3H3.707zM0 4.5a1.5 1.5 0 0 1 .943-1.393l9.532 9.533c-.262.224-.603.36-.975.36h-8A1.5 1.5 0 0 1 0 11.5z" }), /* @__PURE__ */ e.createElement("path", { d: "m15.2 3.6-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4" })), wt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 4.5A1.5 1.5 0 0 1 1.5 3h8A1.5 1.5 0 0 1 11 4.5v7A1.5 1.5 0 0 1 9.5 13h-8A1.5 1.5 0 0 1 0 11.5zM15.2 3.6l-2.8 2.1a1 1 0 0 0-.4.8v3a1 1 0 0 0 .4.8l2.8 2.1a.5.5 0 0 0 .8-.4V4a.5.5 0 0 0-.8-.4" })), oa = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, viewBox: "0 0 24 24", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "#FFF",
    d: "M4.99 3.99a1 1 0 0 0-.697 1.717L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 1 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0-.727-1.717 1 1 0 0 0-.687.303L12 10.586 5.707 4.293a1 1 0 0 0-.717-.303"
  }
)), sa = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 18, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v13.594a.75.75 0 0 1-1.234.572l-3.691-3.12a1.25 1.25 0 0 0-.807-.296H2.75A2.75 2.75 0 0 1 0 10.75zM2.75 1.5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h7.518c.65 0 1.279.23 1.775.65l2.457 2.077V2.75c0-.69-.56-1.25-1.25-1.25z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5",
    clipRule: "evenodd"
  }
)), oe = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M5.293 2.293a1 1 0 0 1 1.414 0l4.823 4.823a1.25 1.25 0 0 1 0 1.768l-4.823 4.823a1 1 0 0 1-1.414-1.414L9.586 8 5.293 3.707a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }
)), kt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ e.createElement("path", { d: "M10 1.75h4.25m0 0V6m0-4.25L9 7M6 14.25H1.75m0 0V10m0 4.25L7 9" }))), ua = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M8.961.894C8.875-.298 7.125-.298 7.04.894c-.066.912-1.246 1.228-1.76.472-.67-.99-2.186-.115-1.664.96.399.824-.465 1.688-1.288 1.289-1.076-.522-1.95.994-.961 1.665.756.513.44 1.693-.472 1.759-1.192.086-1.192 1.836 0 1.922.912.066 1.228 1.246.472 1.76-.99.67-.115 2.186.96 1.664.824-.399 1.688.465 1.289 1.288-.522 1.076.994 1.95 1.665.961.513-.756 1.693-.44 1.759.472.086 1.192 1.836 1.192 1.922 0 .066-.912 1.246-1.228 1.76-.472.67.99 2.186.115 1.664-.96-.399-.824.465-1.687 1.288-1.289 1.076.522 1.95-.994.961-1.665-.756-.513-.44-1.693.472-1.759 1.192-.086 1.192-1.836 0-1.922-.912-.066-1.228-1.246-.472-1.76.99-.67.115-2.186-.96-1.664-.824.399-1.687-.465-1.289-1.288.522-1.076-.994-1.95-1.665-.961-.513.756-1.693.44-1.759-.472M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10",
    clipRule: "evenodd"
  }
)), da = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 2.75A2.75 2.75 0 0 1 4.75 0h6.5A2.75 2.75 0 0 1 14 2.75v10.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-.5a.75.75 0 0 1 1.5 0v.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25v.5a.75.75 0 0 1-1.5 0z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.78 7.47a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97H1.75a.75.75 0 0 1 0-1.5h4.69l-.97-.97a.75.75 0 0 1 1.06-1.06z",
    clipRule: "evenodd"
  }
)), Rt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentcolor",
    fillRule: "evenodd",
    d: "M4 6.104V4a4 4 0 1 1 8 0v2.104c1.154.326 2 1.387 2 2.646v4.5A2.75 2.75 0 0 1 11.25 16h-6.5A2.75 2.75 0 0 1 2 13.25v-4.5c0-1.259.846-2.32 2-2.646M5.5 4a2.5 2.5 0 0 1 5 0v2h-5z",
    clipRule: "evenodd"
  }
)), Mt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M12.227 11.52a5.48 5.48 0 0 0 1.246-2.97.5.5 0 0 0-.995-.1 4.5 4.5 0 0 1-.962 2.359l-1.07-1.07C10.794 9.247 11 8.647 11 8V3a3 3 0 0 0-6 0v1.293L1.354.646a.5.5 0 1 0-.708.708l14 14a.5.5 0 0 0 .708-.708zM8 12.5c.683 0 1.33-.152 1.911-.425l.743.743c-.649.359-1.378.59-2.154.66V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.5 5.5 0 0 1-4.973-4.929.5.5 0 0 1 .995-.098A4.5 4.5 0 0 0 8 12.5" }), /* @__PURE__ */ e.createElement("path", { d: "M8.743 10.907 5 7.164V8a3 3 0 0 0 3.743 2.907" })), yt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fillRule: "evenodd",
    d: "M2.975 8.002a.5.5 0 0 1 .547.449 4.5 4.5 0 0 0 8.956 0 .5.5 0 1 1 .995.098A5.5 5.5 0 0 1 8.5 13.478V15h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.522a5.5 5.5 0 0 1-4.973-4.929.5.5 0 0 1 .448-.547",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement("path", { d: "M5 3a3 3 0 1 1 6 0v5a3 3 0 0 1-6 0z" })), bt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" })), St = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ e.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }))), Ct = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentcolor", ...t }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ e.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M6 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M12 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }))), It = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "currentColor", ...t }, /* @__PURE__ */ e.createElement("g", { opacity: 0.25 }, /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }), /* @__PURE__ */ e.createElement("path", { d: "M0 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm6-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" }))), Me = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 2.75A2.75 2.75 0 0 1 2.75 0h14.5A2.75 2.75 0 0 1 20 2.75v10.5A2.75 2.75 0 0 1 17.25 16H2.75A2.75 2.75 0 0 1 0 13.25zM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25z",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.47 4.22a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1-1.06 1.06l-.97-.97v4.69a.75.75 0 0 1-1.5 0V6.56l-.97.97a.75.75 0 0 1-1.06-1.06z",
    clipRule: "evenodd"
  }
)), Pt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 20, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement("g", { fill: "currentColor" }, /* @__PURE__ */ e.createElement("path", { d: "M7.28 4.22a.75.75 0 0 0-1.06 1.06L8.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L10 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L11.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L10 6.94z" }), /* @__PURE__ */ e.createElement(
  "path",
  {
    fillRule: "evenodd",
    d: "M2.75 0A2.75 2.75 0 0 0 0 2.75v10.5A2.75 2.75 0 0 0 2.75 16h14.5A2.75 2.75 0 0 0 20 13.25V2.75A2.75 2.75 0 0 0 17.25 0zM1.5 2.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H2.75c-.69 0-1.25-.56-1.25-1.25z",
    clipRule: "evenodd"
  }
))), se = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 12a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 8 12",
    clipRule: "evenodd",
    opacity: 0.7
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1.072a.75.75 0 0 1 .274 1.024l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 12 1.072",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 11.464a.75.75 0 0 1 .274 1.025l-1.25 2.165a.75.75 0 0 1-1.299-.75l1.25-2.165A.75.75 0 0 1 6 11.464",
    clipRule: "evenodd",
    opacity: 0.6
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 4a.75.75 0 0 1-.274 1.025l-2.165 1.25a.75.75 0 1 1-.75-1.3l2.165-1.25A.75.75 0 0 1 14.928 4",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 10a.75.75 0 0 1-.275 1.024l-2.165 1.25a.75.75 0 0 1-.75-1.298l2.165-1.25A.75.75 0 0 1 4.536 10",
    clipRule: "evenodd",
    opacity: 0.5
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16 8a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 16 8",
    clipRule: "evenodd"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h2.5A.75.75 0 0 1 4 8",
    clipRule: "evenodd",
    opacity: 0.4
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.928 12a.75.75 0 0 1-1.024.274l-2.165-1.25a.75.75 0 0 1 .75-1.299l2.165 1.25A.75.75 0 0 1 14.928 12",
    clipRule: "evenodd",
    opacity: 0.9
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.536 6a.75.75 0 0 1-1.025.275l-2.165-1.25a.75.75 0 1 1 .75-1.3l2.165 1.25A.75.75 0 0 1 4.536 6",
    clipRule: "evenodd",
    opacity: 0.3
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 14.928a.75.75 0 0 1-1.024-.274l-1.25-2.165a.75.75 0 0 1 1.298-.75l1.25 2.165A.75.75 0 0 1 12 14.928",
    clipRule: "evenodd",
    opacity: 0.8
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 4.536a.75.75 0 0 1-1.024-.275l-1.25-2.165a.75.75 0 1 1 1.299-.75l1.25 2.165A.75.75 0 0 1 6 4.536",
    clipRule: "evenodd",
    opacity: 0.2
  }
)), xt = (t) => /* @__PURE__ */ e.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none", ...t }, /* @__PURE__ */ e.createElement("g", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5 }, /* @__PURE__ */ e.createElement("path", { d: "M13.25 7H9m0 0V2.75M9 7l5.25-5.25M2.75 9H7m0 0v4.25M7 9l-5.25 5.25" }))), Tt = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, ...a }, r) {
    const c = te(), { mergedProps: i, inFocus: s } = Be({
      trackRef: n ?? c,
      props: a
    });
    return /* @__PURE__ */ e.createElement(pe.Consumer, null, (l) => l !== void 0 && /* @__PURE__ */ e.createElement("button", { ref: r, ...i }, a.children ? a.children : s ? /* @__PURE__ */ e.createElement(xt, null) : /* @__PURE__ */ e.createElement(kt, null)));
  }
), ma = /* @__PURE__ */ e.forwardRef(
  function({
    kind: n,
    initialSelection: a,
    onActiveDeviceChange: r,
    onDeviceListChange: c,
    onDeviceSelectError: i,
    exactMatch: s,
    track: l,
    requestPermissions: o,
    onError: u,
    ...d
  }, h) {
    const f = tt(), w = e.useCallback(
      (v) => {
        f && f.emit(Ye.MediaDevicesError, v), u == null || u(v);
      },
      [f, u]
    ), { devices: p, activeDeviceId: m, setActiveMediaDevice: E, className: b } = He({
      kind: n,
      room: f,
      track: l,
      requestPermissions: o,
      onError: w
    });
    e.useEffect(() => {
      a !== void 0 && E(a);
    }, [E]), e.useEffect(() => {
      typeof c == "function" && c(p);
    }, [c, p]), e.useEffect(() => {
      m && m !== "" && (r == null || r(m));
    }, [m]);
    const C = async (v) => {
      try {
        await E(v, { exact: s });
      } catch (k) {
        if (k instanceof Error)
          i == null || i(k);
        else
          throw k;
      }
    }, T = e.useMemo(
      () => S(d, { className: b }, { className: "lk-list" }),
      [b, d]
    ), A = !!p.find((v) => v.label.toLowerCase().startsWith("default"));
    function g(v, k, I) {
      return v === k || !A && I === 0 && k === "default";
    }
    return /* @__PURE__ */ e.createElement("ul", { ref: h, ...T }, p.map((v, k) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: v.deviceId,
        id: v.deviceId,
        "data-lk-active": g(v.deviceId, m, k),
        "aria-selected": g(v.deviceId, m, k),
        role: "option"
      },
      /* @__PURE__ */ e.createElement("button", { className: "lk-button", onClick: () => C(v.deviceId) }, v.label)
    )));
  }
), fa = /* @__PURE__ */ e.forwardRef(
  function({ label: n = "Allow Audio", ...a }, r) {
    const c = we(), { mergedProps: i } = ge({ room: c, props: a });
    return /* @__PURE__ */ e.createElement("button", { ref: r, ...i }, n);
  }
), ha = /* @__PURE__ */ e.forwardRef(
  function({ label: n, ...a }, r) {
    const c = we(), { mergedProps: i, canPlayAudio: s } = ge({ room: c, props: a }), { mergedProps: l, canPlayVideo: o } = je({ room: c, props: i }), { style: u, ...d } = l;
    return u.display = s && o ? "none" : "block", /* @__PURE__ */ e.createElement("button", { ref: r, style: u, ...d }, n ?? `Start ${s ? "Video" : "Audio"}`);
  }
);
function ye(t, n) {
  switch (t) {
    case y.Source.Microphone:
      return n ? /* @__PURE__ */ e.createElement(yt, null) : /* @__PURE__ */ e.createElement(Mt, null);
    case y.Source.Camera:
      return n ? /* @__PURE__ */ e.createElement(wt, null) : /* @__PURE__ */ e.createElement(pt, null);
    case y.Source.ScreenShare:
      return n ? /* @__PURE__ */ e.createElement(Pt, null) : /* @__PURE__ */ e.createElement(Me, null);
    default:
      return;
  }
}
function At(t) {
  switch (t) {
    case K.Excellent:
      return /* @__PURE__ */ e.createElement(bt, null);
    case K.Good:
      return /* @__PURE__ */ e.createElement(St, null);
    case K.Poor:
      return /* @__PURE__ */ e.createElement(Ct, null);
    default:
      return /* @__PURE__ */ e.createElement(It, null);
  }
}
const ga = /* @__PURE__ */ e.forwardRef(function({ showIcon: n, ...a }, r) {
  const { buttonProps: c, enabled: i } = _e(a), [s, l] = e.useState(!1);
  return e.useEffect(() => {
    l(!0);
  }, []), s && /* @__PURE__ */ e.createElement("button", { ref: r, ...c }, (n ?? !0) && ye(a.source, i), a.children);
}), be = /* @__PURE__ */ e.forwardRef(function(n, a) {
  const { className: r, quality: c } = Oe(n), i = e.useMemo(() => ({ ...S(n, { className: r }), "data-lk-quality": c }), [c, n, r]);
  return /* @__PURE__ */ e.createElement("div", { ref: a, ...i }, n.children ?? At(c));
}), Y = /* @__PURE__ */ e.forwardRef(
  function({ participant: n, ...a }, r) {
    const c = at(n), { className: i, infoObserver: s } = e.useMemo(() => nt(c), [c]), { identity: l, name: o } = We(s, {
      name: c.name,
      identity: c.identity,
      metadata: c.metadata
    }), u = e.useMemo(() => S(a, { className: i, "data-lk-participant-name": o }), [a, i, o]);
    return /* @__PURE__ */ e.createElement("span", { ref: r, ...u }, o !== "" ? o : l, a.children);
  }
), Se = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, show: a = "always", ...r }, c) {
    const { className: i, isMuted: s } = $e(n), l = a === "always" || a === "muted" && s || a === "unmuted" && !s, o = e.useMemo(
      () => S(r, {
        className: i
      }),
      [i, r]
    );
    return l ? /* @__PURE__ */ e.createElement("div", { ref: c, ...o, "data-lk-muted": s }, r.children ?? ye(n.source, !s)) : null;
  }
), Lt = (t) => /* @__PURE__ */ e.createElement(
  "svg",
  {
    width: 320,
    height: 320,
    viewBox: "0 0 320 320",
    preserveAspectRatio: "xMidYMid meet",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  },
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M160 180C204.182 180 240 144.183 240 100C240 55.8172 204.182 20 160 20C115.817 20 79.9997 55.8172 79.9997 100C79.9997 144.183 115.817 180 160 180Z",
      fill: "white",
      fillOpacity: 0.25
    }
  ),
  /* @__PURE__ */ e.createElement(
    "path",
    {
      d: "M97.6542 194.614C103.267 191.818 109.841 192.481 115.519 195.141C129.025 201.466 144.1 205 159.999 205C175.899 205 190.973 201.466 204.48 195.141C210.158 192.481 216.732 191.818 222.345 194.614C262.703 214.719 291.985 253.736 298.591 300.062C300.15 310.997 291.045 320 280 320H39.9997C28.954 320 19.8495 310.997 21.4087 300.062C28.014 253.736 57.2966 214.72 97.6542 194.614Z",
      fill: "white",
      fillOpacity: 0.25
    }
  )
);
function Ce(t, n = {}) {
  const [a, r] = e.useState(rt(t)), [c, i] = e.useState(a == null ? void 0 : a.isMuted), [s, l] = e.useState(a == null ? void 0 : a.isSubscribed), [o, u] = e.useState(a == null ? void 0 : a.track), [d, h] = e.useState("landscape"), f = e.useRef(), { className: w, trackObserver: p } = e.useMemo(() => ct(t), [
    t.participant.sid ?? t.participant.identity,
    t.source,
    D(t) && t.publication.trackSid
  ]);
  return e.useEffect(() => {
    const m = p.subscribe((E) => {
      _.debug("update track", E), r(E), i(E == null ? void 0 : E.isMuted), l(E == null ? void 0 : E.isSubscribed), u(E == null ? void 0 : E.track);
    });
    return () => m == null ? void 0 : m.unsubscribe();
  }, [p]), e.useEffect(() => {
    var m, E;
    return o && (f.current && o.detach(f.current), (m = n.element) != null && m.current && !(t.participant.isLocal && (o == null ? void 0 : o.kind) === "audio") && o.attach(n.element.current)), f.current = (E = n.element) == null ? void 0 : E.current, () => {
      f.current && (o == null || o.detach(f.current));
    };
  }, [o, n.element]), e.useEffect(() => {
    var m, E;
    if (typeof ((m = a == null ? void 0 : a.dimensions) == null ? void 0 : m.width) == "number" && typeof ((E = a == null ? void 0 : a.dimensions) == null ? void 0 : E.height) == "number") {
      const b = a.dimensions.width > a.dimensions.height ? "landscape" : "portrait";
      h(b);
    }
  }, [a]), {
    publication: a,
    isMuted: c,
    isSubscribed: s,
    track: o,
    elementProps: S(n.props, {
      className: w,
      "data-lk-local-participant": t.participant.isLocal,
      "data-lk-source": a == null ? void 0 : a.source,
      ...(a == null ? void 0 : a.kind) === "video" && { "data-lk-orientation": d }
    })
  };
}
var J, ue;
function Nt() {
  if (ue) return J;
  ue = 1;
  var t = "Expected a function", n = NaN, a = "[object Symbol]", r = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, l = parseInt, o = typeof q == "object" && q && q.Object === Object && q, u = typeof self == "object" && self && self.Object === Object && self, d = o || u || Function("return this")(), h = Object.prototype, f = h.toString, w = Math.max, p = Math.min, m = function() {
    return d.Date.now();
  };
  function E(g, v, k) {
    var I, F, W, L, M, x, V = 0, re = !1, B = !1, G = !0;
    if (typeof g != "function")
      throw new TypeError(t);
    v = A(v) || 0, b(k) && (re = !!k.leading, B = "maxWait" in k, W = B ? w(A(k.maxWait) || 0, v) : W, G = "trailing" in k ? !!k.trailing : G);
    function Q(R) {
      var P = I, H = F;
      return I = F = void 0, V = R, L = g.apply(H, P), L;
    }
    function xe(R) {
      return V = R, M = setTimeout($, v), re ? Q(R) : L;
    }
    function Te(R) {
      var P = R - x, H = R - V, ie = v - P;
      return B ? p(ie, W - H) : ie;
    }
    function ce(R) {
      var P = R - x, H = R - V;
      return x === void 0 || P >= v || P < 0 || B && H >= W;
    }
    function $() {
      var R = m();
      if (ce(R))
        return le(R);
      M = setTimeout($, Te(R));
    }
    function le(R) {
      return M = void 0, G && I ? Q(R) : (I = F = void 0, L);
    }
    function Ae() {
      M !== void 0 && clearTimeout(M), V = 0, I = x = F = M = void 0;
    }
    function Le() {
      return M === void 0 ? L : le(m());
    }
    function U() {
      var R = m(), P = ce(R);
      if (I = arguments, F = this, x = R, P) {
        if (M === void 0)
          return xe(x);
        if (B)
          return M = setTimeout($, v), Q(x);
      }
      return M === void 0 && (M = setTimeout($, v)), L;
    }
    return U.cancel = Ae, U.flush = Le, U;
  }
  function b(g) {
    var v = typeof g;
    return !!g && (v == "object" || v == "function");
  }
  function C(g) {
    return !!g && typeof g == "object";
  }
  function T(g) {
    return typeof g == "symbol" || C(g) && f.call(g) == a;
  }
  function A(g) {
    if (typeof g == "number")
      return g;
    if (T(g))
      return n;
    if (b(g)) {
      var v = typeof g.valueOf == "function" ? g.valueOf() : g;
      g = b(v) ? v + "" : v;
    }
    if (typeof g != "string")
      return g === 0 ? g : +g;
    g = g.replace(r, "");
    var k = i.test(g);
    return k || s.test(g) ? l(g.slice(2), k ? 2 : 8) : c.test(g) ? n : +g;
  }
  return J = E, J;
}
var zt = Nt();
const de = /* @__PURE__ */ lt(zt);
function Ft(t) {
  const n = N(t);
  n.current = t, z(
    () => () => {
      n.current();
    },
    []
  );
}
function Vt(t, n = 500, a) {
  const r = N();
  Ft(() => {
    r.current && r.current.cancel();
  });
  const c = Ne(() => {
    const i = de(t, n, a), s = (...l) => i(...l);
    return s.cancel = () => {
      i.cancel();
    }, s.isPending = () => !!r.current, s.flush = () => i.flush(), s;
  }, [t, n, a]);
  return z(() => {
    r.current = de(t, n, a);
  }, [t, n, a]), c;
}
function Bt(t, n, a) {
  const r = (u, d) => u === d, c = t instanceof Function ? t() : t, [i, s] = j(c), l = N(c), o = Vt(
    s,
    n,
    a
  );
  return r(l.current, c) || (o(c), l.current = c), [i, o];
}
function Ht({
  threshold: t = 0,
  root: n = null,
  rootMargin: a = "0%",
  freezeOnceVisible: r = !1,
  initialIsIntersecting: c = !1,
  onChange: i
} = {}) {
  var s;
  const [l, o] = j(null), [u, d] = j(() => ({
    isIntersecting: c,
    entry: void 0
  })), h = N();
  h.current = i;
  const f = ((s = u.entry) == null ? void 0 : s.isIntersecting) && r;
  z(() => {
    if (!l || !("IntersectionObserver" in window) || f)
      return;
    const m = new IntersectionObserver(
      (E) => {
        const b = Array.isArray(m.thresholds) ? m.thresholds : [m.thresholds];
        E.forEach((C) => {
          const T = C.isIntersecting && b.some((A) => C.intersectionRatio >= A);
          d({ isIntersecting: T, entry: C }), h.current && h.current(T, C);
        });
      },
      { threshold: t, root: n, rootMargin: a }
    );
    return m.observe(l), () => {
      m.disconnect();
    };
  }, [
    l,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(t),
    n,
    a,
    f,
    r
  ]);
  const w = N(null);
  z(() => {
    var m;
    !l && ((m = u.entry) != null && m.target) && !r && !f && w.current !== u.entry.target && (w.current = u.entry.target, d({ isIntersecting: c, entry: void 0 }));
  }, [l, u.entry, r, f, c]);
  const p = [
    o,
    !!u.isIntersecting,
    u.entry
  ];
  return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p;
}
const jt = /* @__PURE__ */ e.forwardRef(
  function({
    onTrackClick: n,
    onClick: a,
    onSubscriptionStatusChanged: r,
    trackRef: c,
    manageSubscription: i,
    ...s
  }, l) {
    const o = O(c), u = e.useRef(null);
    e.useImperativeHandle(l, () => u.current);
    const d = Ht({ root: u.current }), [h] = Bt(d, 3e3);
    e.useEffect(() => {
      i && o.publication instanceof X && (h == null ? void 0 : h.isIntersecting) === !1 && (d == null ? void 0 : d.isIntersecting) === !1 && o.publication.setSubscribed(!1);
    }, [h, o, i]), e.useEffect(() => {
      i && o.publication instanceof X && (d == null ? void 0 : d.isIntersecting) === !0 && o.publication.setSubscribed(!0);
    }, [d, o, i]);
    const {
      elementProps: f,
      publication: w,
      isSubscribed: p
    } = Ce(o, {
      element: u,
      props: s
    });
    e.useEffect(() => {
      r == null || r(!!p);
    }, [p, r]);
    const m = (E) => {
      a == null || a(E), n == null || n({ participant: o == null ? void 0 : o.participant, track: w });
    };
    return /* @__PURE__ */ e.createElement("video", { ref: u, ...f, muted: !0, onClick: m });
  }
), ne = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, onSubscriptionStatusChanged: a, volume: r, ...c }, i) {
    const s = O(n), l = e.useRef(null);
    e.useImperativeHandle(i, () => l.current);
    const {
      elementProps: o,
      isSubscribed: u,
      track: d,
      publication: h
    } = Ce(s, {
      element: l,
      props: c
    });
    return e.useEffect(() => {
      a == null || a(!!u);
    }, [u, a]), e.useEffect(() => {
      d === void 0 || r === void 0 || (d instanceof et ? d.setVolume(r) : _.warn("Volume can only be set on remote audio tracks."));
    }, [r, d]), e.useEffect(() => {
      h === void 0 || c.muted === void 0 || (h instanceof X ? h.setEnabled(!c.muted) : _.warn("Can only call setEnabled on remote track publications."));
    }, [c.muted, h, d]), /* @__PURE__ */ e.createElement("audio", { ref: l, ...o });
  }
);
function _t(t) {
  const n = !!it();
  return t.participant && !n ? /* @__PURE__ */ e.createElement(ke.Provider, { value: t.participant }, t.children) : /* @__PURE__ */ e.createElement(e.Fragment, null, t.children);
}
function Ot(t) {
  const n = !!te();
  return t.trackRef && !n ? /* @__PURE__ */ e.createElement(ae.Provider, { value: t.trackRef }, t.children) : /* @__PURE__ */ e.createElement(e.Fragment, null, t.children);
}
const Wt = /* @__PURE__ */ e.forwardRef(
  function({
    trackRef: n,
    children: a,
    onParticipantClick: r,
    disableSpeakingIndicator: c,
    ...i
  }, s) {
    var w, p;
    const l = O(n), { elementProps: o } = ve({
      htmlProps: i,
      disableSpeakingIndicator: c,
      onParticipantClick: r,
      trackRef: l
    }), u = qe(l.participant), d = ot(), h = (w = st()) == null ? void 0 : w.autoSubscription, f = e.useCallback(
      (m) => {
        l.source && !m && d && d.pin.dispatch && ut(l, d.pin.state) && d.pin.dispatch({ msg: "clear_pin" });
      },
      [l, d]
    );
    return /* @__PURE__ */ e.createElement("div", { ref: s, style: { position: "relative" }, ...o }, /* @__PURE__ */ e.createElement(Ot, { trackRef: l }, /* @__PURE__ */ e.createElement(_t, { participant: l.participant }, a ?? /* @__PURE__ */ e.createElement(e.Fragment, null, D(l) && (((p = l.publication) == null ? void 0 : p.kind) === "video" || l.source === y.Source.Camera || l.source === y.Source.ScreenShare) ? /* @__PURE__ */ e.createElement(
      jt,
      {
        trackRef: l,
        onSubscriptionStatusChanged: f,
        manageSubscription: h
      }
    ) : D(l) && /* @__PURE__ */ e.createElement(
      ne,
      {
        trackRef: l,
        onSubscriptionStatusChanged: f
      }
    ), /* @__PURE__ */ e.createElement("div", { className: "lk-participant-placeholder" }, /* @__PURE__ */ e.createElement(Lt, null)), /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata-item" }, l.source === y.Source.Camera ? /* @__PURE__ */ e.createElement(e.Fragment, null, u && /* @__PURE__ */ e.createElement(Rt, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ e.createElement(
      Se,
      {
        trackRef: {
          participant: l.participant,
          source: y.Source.Microphone
        },
        show: "muted"
      }
    ), /* @__PURE__ */ e.createElement(Y, null)) : /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Me, { style: { marginRight: "0.25rem" } }), /* @__PURE__ */ e.createElement(Y, null, "'s screen"))), /* @__PURE__ */ e.createElement(be, { className: "lk-participant-metadata-item" }))), /* @__PURE__ */ e.createElement(Tt, { trackRef: l }))));
  }
);
function va(t) {
  const n = S(t, { className: "lk-focus-layout" });
  return /* @__PURE__ */ e.createElement("div", { ...n }, t.children);
}
function Ea({ trackRef: t, ...n }) {
  return /* @__PURE__ */ e.createElement(Wt, { trackRef: t, ...n });
}
function Ie({ tracks: t, ...n }) {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.map((a) => /* @__PURE__ */ e.createElement(
    ae.Provider,
    {
      value: a,
      key: Re(a)
    },
    ee(n.children)
  )));
}
function $t({
  totalPageCount: t,
  nextPage: n,
  prevPage: a,
  currentPage: r,
  pagesContainer: c
}) {
  const [i, s] = e.useState(!1);
  return e.useEffect(() => {
    let l;
    return c && (l = dt(c.current, 2e3).subscribe(
      s
    )), () => {
      l && l.unsubscribe();
    };
  }, [c]), /* @__PURE__ */ e.createElement("div", { className: "lk-pagination-control", "data-lk-user-interaction": i }, /* @__PURE__ */ e.createElement("button", { className: "lk-button", onClick: a }, /* @__PURE__ */ e.createElement(oe, null)), /* @__PURE__ */ e.createElement("span", { className: "lk-pagination-count" }, `${r} of ${t}`), /* @__PURE__ */ e.createElement("button", { className: "lk-button", onClick: n }, /* @__PURE__ */ e.createElement(oe, null)));
}
const qt = /* @__PURE__ */ e.forwardRef(
  function({ totalPageCount: n, currentPage: a }, r) {
    const c = new Array(n).fill("").map((i, s) => s + 1 === a ? /* @__PURE__ */ e.createElement("span", { "data-lk-active": !0, key: s }) : /* @__PURE__ */ e.createElement("span", { key: s }));
    return /* @__PURE__ */ e.createElement("div", { ref: r, className: "lk-pagination-indicator" }, c);
  }
);
function pa({ tracks: t, ...n }) {
  const a = e.createRef(), r = e.useMemo(
    () => S(n, { className: "lk-grid-layout" }),
    [n]
  ), { layout: c } = De(a, t.length), i = Ge(c.maxTiles, t);
  return Qe(a, {
    onLeftSwipe: i.nextPage,
    onRightSwipe: i.prevPage
  }), /* @__PURE__ */ e.createElement("div", { ref: a, "data-lk-pagination": i.totalPageCount > 1, ...r }, /* @__PURE__ */ e.createElement(Ie, { tracks: i.tracks }, n.children), t.length > c.maxTiles && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    qt,
    {
      totalPageCount: i.totalPageCount,
      currentPage: i.currentPage
    }
  ), /* @__PURE__ */ e.createElement($t, { pagesContainer: a, ...i })));
}
const Dt = 130, Gt = 140, me = 1, Pe = 16 / 10, Qt = (1 - Pe) * -1;
function wa({ tracks: t, orientation: n, ...a }) {
  const r = e.useRef(null), [c, i] = e.useState(0), { width: s, height: l } = Ue(r), o = n || (l >= s ? "vertical" : "horizontal"), u = o === "vertical" ? Math.max(s * Qt, Dt) : Math.max(l * Pe, Gt), d = mt(), h = Math.max(o === "vertical" ? (l - d) / u : (s - d) / u, me);
  let f = Math.round(h);
  Math.abs(h - c) < 0.5 ? f = Math.round(c) : c !== h && i(h);
  const w = Ke(t, f);
  return e.useLayoutEffect(() => {
    r.current && (r.current.dataset.lkOrientation = o, r.current.style.setProperty("--lk-max-visible-tiles", f.toString()));
  }, [f, o]), /* @__PURE__ */ e.createElement("aside", { key: o, className: "lk-carousel", ref: r, ...a }, /* @__PURE__ */ e.createElement(Ie, { tracks: w }, a.children));
}
function ka({
  value: t,
  onPinChange: n,
  onWidgetChange: a,
  children: r
}) {
  const c = ft(t);
  return e.useEffect(() => {
    _.debug("PinState Updated", { state: c.pin.state }), n && c.pin.state && n(c.pin.state);
  }, [c.pin.state, n]), e.useEffect(() => {
    _.debug("Widget Updated", { widgetState: c.widget.state }), a && c.widget.state && a(c.widget.state);
  }, [a, c.widget.state]), /* @__PURE__ */ e.createElement(pe.Provider, { value: c }, r);
}
const Ra = /* @__PURE__ */ e.forwardRef(function(n, a) {
  const { room: r, htmlProps: c } = Ze(n);
  return /* @__PURE__ */ e.createElement("div", { ref: a, ...c }, r && /* @__PURE__ */ e.createElement(ht.Provider, { value: r }, /* @__PURE__ */ e.createElement(gt.Provider, { value: n.featureFlags }, n.children)));
}), Ma = /* @__PURE__ */ e.forwardRef(
  function({ trackRef: n, ...a }, r) {
    const d = O(n), h = Ee(d, { bands: 7, loPass: 300 });
    return /* @__PURE__ */ e.createElement(
      "svg",
      {
        ref: r,
        width: "100%",
        height: "100%",
        viewBox: "0 0 200 90",
        ...a,
        className: "lk-audio-visualizer"
      },
      /* @__PURE__ */ e.createElement("rect", { x: "0", y: "0", width: "100%", height: "100%" }),
      /* @__PURE__ */ e.createElement(
        "g",
        {
          style: {
            transform: `translate(${(200 - 7 * 10) / 2}px, 0)`
          }
        },
        h.map((f, w) => /* @__PURE__ */ e.createElement(
          "rect",
          {
            key: w,
            x: w * 10,
            y: 90 / 2 - f * 50 / 2,
            width: 6,
            height: f * 50
          }
        ))
      )
    );
  }
);
function ya({ participants: t, ...n }) {
  return /* @__PURE__ */ e.createElement(e.Fragment, null, t.map((a) => /* @__PURE__ */ e.createElement(ke.Provider, { value: a, key: a.identity }, ee(n.children))));
}
function ba({ volume: t, muted: n }) {
  const a = Je(
    [y.Source.Microphone, y.Source.ScreenShareAudio, y.Source.Unknown],
    {
      updateOnlyOn: [],
      onlySubscribed: !0
    }
  ).filter((r) => !r.participant.isLocal && r.publication.kind === y.Kind.Audio);
  return /* @__PURE__ */ e.createElement("div", { style: { display: "none" } }, a.map((r) => /* @__PURE__ */ e.createElement(
    ne,
    {
      key: Re(r),
      trackRef: r,
      volume: t,
      muted: n
    }
  )));
}
const Sa = /* @__PURE__ */ e.forwardRef(function({ childrenPosition: n = "before", children: a, ...r }, c) {
  const { name: i } = Xe();
  return /* @__PURE__ */ e.createElement("span", { ref: c, ...r }, n === "before" && a, i, n === "after" && a);
});
function Ut(t) {
  const n = e.useMemo(() => S(t, { className: "lk-toast" }), [t]);
  return /* @__PURE__ */ e.createElement("div", { ...n }, t.children);
}
const Kt = (t) => {
  const n = [];
  for (let a = 0; a < t; a++)
    n.push([a, t - 1 - a]);
  return n;
}, fe = (t) => [[Math.floor(t / 2)], [-1]], Zt = (t, n, a) => {
  const [r, c] = j(0), [i, s] = j([[]]);
  z(() => {
    if (t === "thinking")
      s(fe(n));
    else if (t === "connecting" || t === "initializing") {
      const o = [...Kt(n)];
      s(o);
    } else s(t === "listening" ? fe(n) : t === void 0 ? [new Array(n).fill(0).map((o, u) => u)] : [[]]);
    c(0);
  }, [t, n]);
  const l = N(null);
  return z(() => {
    let o = performance.now();
    const u = (d) => {
      d - o >= a && (c((f) => f + 1), o = d), l.current = requestAnimationFrame(u);
    };
    return l.current = requestAnimationFrame(u), () => {
      l.current !== null && cancelAnimationFrame(l.current);
    };
  }, [a, n, t, i.length]), i[r % i.length];
}, Jt = /* @__PURE__ */ new Map([
  ["connecting", 2e3],
  ["initializing", 2e3],
  ["listening", 500],
  ["thinking", 150]
]), Xt = (t, n) => {
  if (t === void 0)
    return 1e3;
  let a = Jt.get(t);
  if (a)
    switch (t) {
      case "connecting":
        a /= n;
        break;
    }
  return a;
}, Yt = /* @__PURE__ */ e.forwardRef(
  function({ state: n, options: a, barCount: r = 15, trackRef: c, children: i, ...s }, l) {
    const o = S(s, { className: "lk-audio-bar-visualizer" });
    let u = te();
    c && (u = c);
    const d = Ee(u, {
      bands: r,
      loPass: 100,
      hiPass: 200
    }), h = (a == null ? void 0 : a.minHeight) ?? 20, f = (a == null ? void 0 : a.maxHeight) ?? 100, w = Zt(
      n,
      r,
      Xt(n, r) ?? 100
    );
    return /* @__PURE__ */ e.createElement("div", { ref: l, ...o, "data-lk-va-state": n }, d.map(
      (p, m) => i ? ee(i, {
        "data-lk-highlighted": w.includes(m),
        "data-lk-bar-index": m,
        className: "lk-audio-bar",
        style: { height: `${Math.min(f, Math.max(h, p * 100 + 5))}%` }
      }) : /* @__PURE__ */ e.createElement(
        "span",
        {
          key: m,
          "data-lk-highlighted": w.includes(m),
          "data-lk-bar-index": m,
          className: `lk-audio-bar ${w.includes(m) && "lk-highlighted"}`,
          style: {
            // TODO transform animations would be more performant, however the border-radius gets distorted when using scale transforms. a 9-slice approach (or 3 in this case) could work
            // transform: `scale(1, ${Math.min(maxHeight, Math.max(minHeight, volume))}`,
            height: `${Math.min(f, Math.max(h, p * 100 + 5))}%`
          }
        }
      )
    ));
  }
), Ca = /* @__PURE__ */ e.forwardRef(
  function({
    children: n,
    disableSpeakingIndicator: a,
    onParticipantClick: r,
    trackRef: c,
    ...i
  }, s) {
    const l = O(c), { elementProps: o } = ve({
      trackRef: l,
      htmlProps: i,
      disableSpeakingIndicator: a,
      onParticipantClick: r
    });
    return /* @__PURE__ */ e.createElement("div", { ref: s, style: { position: "relative", minHeight: "160px" }, ...o }, /* @__PURE__ */ e.createElement(ae.Provider, { value: l }, n ?? /* @__PURE__ */ e.createElement(e.Fragment, null, D(l) && /* @__PURE__ */ e.createElement(ne, { trackRef: l }), /* @__PURE__ */ e.createElement(Yt, { barCount: 7, options: { minHeight: 8 } }), /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata" }, /* @__PURE__ */ e.createElement("div", { className: "lk-participant-metadata-item" }, /* @__PURE__ */ e.createElement(Se, { trackRef: l }), /* @__PURE__ */ e.createElement(Y, null)), /* @__PURE__ */ e.createElement(be, { className: "lk-participant-metadata-item" })))));
  }
);
function Ia(t) {
  const [n, a] = e.useState(void 0), r = he(t.room);
  return e.useEffect(() => {
    switch (r) {
      case Z.Reconnecting:
        a(
          /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(se, { className: "lk-spinner" }), " Reconnecting")
        );
        break;
      case Z.Connecting:
        a(
          /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(se, { className: "lk-spinner" }), " Connecting")
        );
        break;
      case Z.Disconnected:
        a(/* @__PURE__ */ e.createElement(e.Fragment, null, "Disconnected"));
        break;
      default:
        a(void 0);
        break;
    }
  }, [r]), n ? /* @__PURE__ */ e.createElement(Ut, { className: "lk-toast-connection-state" }, n) : /* @__PURE__ */ e.createElement(e.Fragment, null);
}
const Pa = /* @__PURE__ */ e.forwardRef(
  function({ entry: n, hideName: a = !1, hideTimestamp: r = !1, messageFormatter: c, ...i }, s) {
    var h, f, w;
    const l = e.useMemo(() => c ? c(n.message) : n.message, [n.message, c]), o = !!n.editTimestamp, u = new Date(n.timestamp), d = navigator ? navigator.language : "en-US";
    return /* @__PURE__ */ e.createElement(
      "li",
      {
        ref: s,
        className: "lk-chat-entry",
        title: u.toLocaleTimeString(d, { timeStyle: "full" }),
        "data-lk-message-origin": (h = n.from) != null && h.isLocal ? "local" : "remote",
        ...i
      },
      (!r || !a || o) && /* @__PURE__ */ e.createElement("span", { className: "lk-meta-data" }, !a && /* @__PURE__ */ e.createElement("strong", { className: "lk-participant-name" }, ((f = n.from) == null ? void 0 : f.name) ?? ((w = n.from) == null ? void 0 : w.identity)), (!r || o) && /* @__PURE__ */ e.createElement("span", { className: "lk-timestamp" }, o && "edited ", u.toLocaleTimeString(d, { timeStyle: "short" }))),
      /* @__PURE__ */ e.createElement("span", { className: "lk-message-body" }, l)
    );
  }
);
function xa(t) {
  return vt(t, Et()).map((n, a) => {
    if (typeof n == "string")
      return n;
    {
      const r = n.content.toString(), c = n.type === "url" ? /^http(s?):\/\//.test(r) ? r : `https://${r}` : `mailto:${r}`;
      return /* @__PURE__ */ e.createElement("a", { className: "lk-chat-link", key: a, href: c, target: "_blank", rel: "noreferrer" }, r);
    }
  });
}
export {
  xt as $,
  Ma as A,
  Yt as B,
  la as C,
  ia as D,
  pt as E,
  va as F,
  pa as G,
  wt as H,
  oe as I,
  kt as J,
  Rt as K,
  ka as L,
  ma as M,
  Mt as N,
  yt as O,
  Wt as P,
  bt as Q,
  ba as R,
  oa as S,
  ga as T,
  St as U,
  jt as V,
  Ct as W,
  It as X,
  Me as Y,
  Pt as Z,
  se as _,
  Pa as a,
  Lt as b,
  sa as c,
  ua as d,
  da as e,
  ha as f,
  wa as g,
  Ea as h,
  Ia as i,
  Ie as j,
  Ca as k,
  Ut as l,
  xa as m,
  ra as n,
  ca as o,
  Tt as p,
  fa as q,
  Ra as r,
  be as s,
  ne as t,
  Y as u,
  Se as v,
  ya as w,
  Sa as x,
  _t as y,
  Ot as z
};
//# sourceMappingURL=components-BeXtHOAa.mjs.map
