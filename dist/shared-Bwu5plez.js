"use strict";const j=require("react"),i=require("./shared-B4O5D4yD.js"),c=require("./shared-BHaeMcAC.js"),b=require("livekit-client");function J(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,o.get?o:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const r=J(j);function F(e){const t=i.useEnsureRoom(e),n=r.useCallback(async()=>{await t.startAudio()},[t]),o=r.useMemo(()=>i.roomAudioPlaybackAllowedObservable(t),[t]),{canPlayAudio:s}=c.useObservableState(o,{canPlayAudio:t.canPlaybackAudio});return{canPlayAudio:s,startAudio:n}}function q(e){const{state:t,dispatch:n}=c.useLayoutContext().pin;return{buttonProps:r.useMemo(()=>{const{className:s}=i.setupClearPinButton();return c.mergeProps(e,{className:s,disabled:!(t!=null&&t.length),onClick:()=>{n&&n({msg:"clear_pin"})}})},[e,n,t])}}function U(e,t){const n=typeof e=="function"?e:t,o=typeof e=="string"?e:void 0,s=i.useRoomContext(),{send:a,messageObservable:u,isSendingObservable:d}=r.useMemo(()=>i.setupDataMessageHandler(s,o,n),[s,o,n]),p=c.useObservableState(u,void 0),f=c.useObservableState(d,!1);return{message:p,send:a,isSending:f}}const $={connect:!0,audio:!1,video:!1};function z(e){const{token:t,serverUrl:n,options:o,room:s,connectOptions:a,connect:u,audio:d,video:p,screen:f,onConnected:P,onDisconnected:S,onError:m,onMediaDeviceFailure:O,onEncryptionError:k,simulateParticipants:R,...h}={...$,...e};o&&s&&i.log.warn("when using a manually created room, the options object will be ignored. set the desired options directly when creating the room instead.");const[l,L]=r.useState(),T=r.useRef(u);r.useEffect(()=>{L(s??new b.Room(o))},[s,JSON.stringify(o,c.roomOptionsStringifyReplacer)]);const _=r.useMemo(()=>{const{className:g}=i.setupLiveKitRoom();return c.mergeProps(h,{className:g})},[h]);return r.useEffect(()=>{if(!l)return;const g=()=>{const v=l.localParticipant;i.log.debug("trying to publish local tracks"),Promise.all([v.setMicrophoneEnabled(!!d,typeof d!="boolean"?d:void 0),v.setCameraEnabled(!!p,typeof p!="boolean"?p:void 0),v.setScreenShareEnabled(!!f,typeof f!="boolean"?f:void 0)]).catch(y=>{i.log.warn(y),m==null||m(y)})},C=v=>{const y=b.MediaDeviceFailure.getFailure(v);O==null||O(y)},M=v=>{k==null||k(v)},A=v=>{S==null||S(v)},w=()=>{P==null||P()};return l.on(b.RoomEvent.SignalConnected,g).on(b.RoomEvent.MediaDevicesError,C).on(b.RoomEvent.EncryptionError,M).on(b.RoomEvent.Disconnected,A).on(b.RoomEvent.Connected,w),()=>{l.off(b.RoomEvent.SignalConnected,g).off(b.RoomEvent.MediaDevicesError,C).off(b.RoomEvent.EncryptionError,M).off(b.RoomEvent.Disconnected,A).off(b.RoomEvent.Connected,w)}},[l,d,p,f,m,k,O,P,S]),r.useEffect(()=>{if(l){if(R){l.simulateParticipants({participants:{count:R},publish:{audio:!0,useRealTracks:!0}});return}if(u){if(T.current=!0,i.log.debug("connecting"),!t){i.log.debug("no token yet");return}if(!n){i.log.warn("no livekit url provided"),m==null||m(Error("no livekit url provided"));return}l.connect(n,t,a).catch(g=>{i.log.warn(g),T.current===!0&&(m==null||m(g))})}else i.log.debug("disconnecting because connect is false"),T.current=!1,l.disconnect()}},[u,t,JSON.stringify(a),l,m,n,R]),r.useEffect(()=>{if(l)return()=>{i.log.info("disconnecting on onmount"),l.disconnect()}},[l]),{room:l,htmlProps:_}}function V(e={}){let t=c.useMaybeParticipantContext();e.participant&&(t=e.participant);const n=r.useMemo(()=>i.participantInfoObserver(t),[t]),{identity:o,name:s,metadata:a}=c.useObservableState(n,{name:t==null?void 0:t.name,identity:t==null?void 0:t.identity,metadata:t==null?void 0:t.metadata});return{identity:o,name:s,metadata:a}}function K(e={}){const t=c.useEnsureParticipant(e.participant),n=r.useMemo(()=>i.participantPermissionObserver(t),[t]);return c.useObservableState(n,t.permissions)}function E(e={}){const t=i.useEnsureRoom(e.room),[n,o]=r.useState([]);return r.useEffect(()=>{const s=i.connectedParticipantsObserver(t,{additionalRoomEvents:e.updateOnlyOn}).subscribe(o);return()=>s.unsubscribe()},[t,JSON.stringify(e.updateOnlyOn)]),n}function W(e={}){const t=E(e),{localParticipant:n}=i.useLocalParticipant(e);return r.useMemo(()=>[n,...t],[n,t])}function G(e,t={}){const n=i.useRoomContext(),[o]=r.useState(t.updateOnlyOn),s=r.useMemo(()=>typeof e=="string"?i.connectedParticipantObserver(n,e,{additionalEvents:o}):i.participantByIdentifierObserver(n,e,{additionalEvents:o}),[n,JSON.stringify(e),o]),[a,u]=r.useState({p:void 0});return r.useEffect(()=>{const d=s.subscribe(p=>u({p}));return()=>d.unsubscribe()},[s]),a.p}function H(e={}){const t=i.useEnsureRoom(e.room),n=r.useMemo(()=>i.roomInfoObserver(t),[t]),{name:o,metadata:s}=c.useObservableState(n,{name:t.name,metadata:t.metadata});return{name:o,metadata:s}}function N(){const e=i.useRoomContext(),t=r.useMemo(()=>i.activeSpeakerObserver(e),[e]);return c.useObservableState(t,e.activeSpeakers)}function Q(e){const[t,n]=r.useState(i.sortParticipants(e)),o=N();return r.useEffect(()=>{n(i.sortParticipants(e))},[o,e]),t}function X(e,t,n={}){const[o,s]=r.useState(void 0);return r.useEffect(()=>{var u;if(e===void 0)throw Error("token endpoint needs to be defined");if(((u=n.userInfo)==null?void 0:u.identity)===void 0)return;(async()=>{i.log.debug("fetching token");const d=new URLSearchParams({...n.userInfo,roomName:t}),p=await fetch(`${e}?${d.toString()}`);if(!p.ok){i.log.error(`Could not fetch token. Server responded with status ${p.status}: ${p.statusText}`);return}const{accessToken:f}=await p.json();s(f)})()},[e,t,JSON.stringify(n)]),o}function Y(e){const[t,n]=r.useState(i.getTrackByIdentifier(e)),{trackObserver:o}=r.useMemo(()=>i.setupMediaTrack(e),[e.participant.sid??e.participant.identity,e.source]);return r.useEffect(()=>{const s=o.subscribe(a=>{n(a)});return()=>s==null?void 0:s.unsubscribe()},[o]),{participant:e.participant,source:e.source??b.Track.Source.Unknown,publication:t}}function Z(e,t){const n=c.useEnsureParticipant(t);return Y({name:e,participant:n})}function I(e,t){const n=i.useRoomContext(),o=c.useMaybeParticipantContext(),s=t?n.getParticipantByIdentity(t):o,a=r.useMemo(()=>s?i.participantTracksObservable(s,{sources:e}):void 0,[s==null?void 0:s.sid,s==null?void 0:s.identity,JSON.stringify(e)]);return c.useObservableState(a,[])}function ee(e){var n,o,s;const t=r.useMemo(()=>{var a;return(a=e==null?void 0:e.publication)!=null&&a.track?i.trackSyncTimeObserver(e==null?void 0:e.publication.track):void 0},[(n=e==null?void 0:e.publication)==null?void 0:n.track]);return c.useObservableState(t,{timestamp:Date.now(),rtpTimestamp:(s=(o=e==null?void 0:e.publication)==null?void 0:o.track)==null?void 0:s.rtpTimestamp})}const te={bufferSize:100};function x(e,t){const n={...te,...t},[o,s]=r.useState([]),a=ee(e),u=d=>{var p;(p=n.onTranscription)==null||p.call(n,d),s(f=>i.dedupeSegments(f,d.map(P=>i.addMediaTimestampToTranscription(P,a)),n.bufferSize))};return r.useEffect(()=>{if(!(e!=null&&e.publication))return;const d=i.trackTranscriptionObserver(e.publication).subscribe(p=>{u(...p)});return()=>{d.unsubscribe()}},[e&&i.getTrackReferenceId(e),u]),{segments:o}}function B(e={}){const t=c.useMaybeParticipantContext(),n=e.participant??t,o=r.useMemo(()=>i.participantAttributesObserver(n),[n]);return c.useObservableState(o,{attributes:n==null?void 0:n.attributes})}function ne(e,t={}){const n=c.useEnsureParticipant(t.participant),[o,s]=r.useState(n.attributes[e]);return r.useEffect(()=>{if(!n)return;const a=i.participantAttributesObserver(n).subscribe(u=>{u.changed[e]!==void 0&&s(u.attributes[e])});return()=>{a.unsubscribe()}},[n,e]),o}const D="lk.agent.state";function se(){const e=E().find(u=>u.kind===b.ParticipantKind.AGENT),t=I([b.Track.Source.Microphone],e==null?void 0:e.identity)[0],{segments:n}=x(t),o=c.useConnectionState(),{attributes:s}=B({participant:e}),a=r.useMemo(()=>o===b.ConnectionState.Disconnected?"disconnected":o===b.ConnectionState.Connecting||!e||!(s!=null&&s[D])?"connecting":s[D],[s,e,o]);return{agent:e,state:a,audioTrack:t,agentTranscriptions:n,agentAttributes:s}}function oe(e){const t=i.useEnsureRoom(e),n=c.useConnectionState(t),o=r.useMemo(()=>i.recordingStatusObservable(t),[t,n]);return c.useObservableState(o,t.isRecording)}exports.useAudioPlayback=F;exports.useClearPinButton=q;exports.useDataChannel=U;exports.useIsRecording=oe;exports.useLiveKitRoom=z;exports.useParticipantAttribute=ne;exports.useParticipantAttributes=B;exports.useParticipantInfo=V;exports.useParticipantPermissions=K;exports.useParticipantTracks=I;exports.useParticipants=W;exports.useRemoteParticipant=G;exports.useRemoteParticipants=E;exports.useRoomInfo=H;exports.useSortedParticipants=Q;exports.useSpeakingParticipants=N;exports.useToken=X;exports.useTrackByName=Z;exports.useTrackTranscription=x;exports.useVoiceAssistant=se;
//# sourceMappingURL=shared-Bwu5plez.js.map
