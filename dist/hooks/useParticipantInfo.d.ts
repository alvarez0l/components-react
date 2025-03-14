import { Participant } from 'livekit-client';
/**
 * The `useParticipantInfo` hook returns the identity, name, and metadata of a given participant.
 * It requires a `Participant` object passed as property or via the `ParticipantContext`.
 *
 * @example
 * ```tsx
 * const { identity, name, metadata } = useParticipantInfo({ participant });
 * ```
 * @public
 */
export interface UseParticipantInfoOptions {
    participant?: Participant;
}
/** @public */
export declare function useParticipantInfo(props?: UseParticipantInfoOptions): {
    identity: any;
    name: any;
    metadata: any;
};
//# sourceMappingURL=useParticipantInfo.d.ts.map