import { AgentState } from '../../hooks';
import { TrackReferenceOrPlaceholder } from '../../../packages/core/dist/index.d.ts';
import * as React from 'react';
/**
 * @beta
 */
export type BarVisualizerOptions = {
    /** in percentage */
    maxHeight?: number;
    /** in percentage */
    minHeight?: number;
};
/**
 * @beta
 */
export interface BarVisualizerProps extends React.HTMLProps<HTMLDivElement> {
    /** If set, the visualizer will transition between different voice assistant states */
    state?: AgentState;
    /** Number of bars that show up in the visualizer */
    barCount?: number;
    trackRef?: TrackReferenceOrPlaceholder;
    options?: BarVisualizerOptions;
    /** The template component to be used in the visualizer. */
    children?: React.ReactNode;
}
/**
 * Visualizes audio signals from a TrackReference as bars.
 * If the `state` prop is set, it automatically transitions between VoiceAssistant states.
 * @beta
 *
 * @remarks For VoiceAssistant state transitions this component requires a voice assistant agent running with livekit-agents \>= 0.9.0
 *
 * @example
 * ```tsx
 * function SimpleVoiceAssistant() {
 *   const { state, audioTrack } = useVoiceAssistant();
 *   return (
 *    <BarVisualizer
 *      state={state}
 *      trackRef={audioTrack}
 *    />
 *   );
 * }
 * ```
 */
export declare const BarVisualizer: React.ForwardRefExoticComponent<Omit<BarVisualizerProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BarVisualizer.d.ts.map