import { Room } from 'livekit-client';
/** @public */
export interface UseLocalParticipantOptions {
    /**
     * The room to use. If not provided, the hook will use the room from the context.
     */
    room?: Room;
}
/**
 * The `useLocalParticipant` hook returns the local participant and the associated state
 * around the participant.
 *
 * @example
 * ```tsx
 * const { localParticipant } = useLocalParticipant();
 * ```
 * @public
 */
export declare function useLocalParticipant(options?: UseLocalParticipantOptions): {
    isMicrophoneEnabled: any;
    isScreenShareEnabled: any;
    isCameraEnabled: any;
    microphoneTrack: any;
    cameraTrack: any;
    lastMicrophoneError: any;
    lastCameraError: any;
    localParticipant: any;
};
//# sourceMappingURL=useLocalParticipant.d.ts.map