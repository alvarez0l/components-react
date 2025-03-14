import { TrackReference } from '../../packages/core/dist/index.d.ts';
import { Track } from 'livekit-client';
/**
 * `useParticipantTracks` is a custom React that allows you to get tracks of a specific participant only, by specifiying the participant's identity.
 * If the participant identity is not passed the hook will try to get the participant from a participant context.
 * @public
 */
export declare function useParticipantTracks(sources: Track.Source[], participantIdentity?: string): TrackReference[];
//# sourceMappingURL=useParticipantTracks.d.ts.map