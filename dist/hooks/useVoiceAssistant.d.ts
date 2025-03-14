import { RemoteParticipant } from 'livekit-client';
import { ReceivedTranscriptionSegment, TrackReference } from '../../packages/core/dist/index.d.ts';
/**
 * @beta
 */
export type AgentState = 'disconnected' | 'connecting' | 'initializing' | 'listening' | 'thinking' | 'speaking';
/**
 * @beta
 */
export interface VoiceAssistant {
    agent: RemoteParticipant | undefined;
    state: AgentState;
    audioTrack: TrackReference | undefined;
    agentTranscriptions: ReceivedTranscriptionSegment[];
    agentAttributes: RemoteParticipant['attributes'] | undefined;
}
/**
 * This hook looks for the first agent-participant in the room.
 * @remarks This hook requires an agent running with livekit-agents \>= 0.9.0
 * @example
 * ```tsx
 * const { state, audioTrack, agentTranscriptions, agentAttributes } = useVoiceAssistant();
 * ```
 * @beta
 */
export declare function useVoiceAssistant(): VoiceAssistant;
//# sourceMappingURL=useVoiceAssistant.d.ts.map