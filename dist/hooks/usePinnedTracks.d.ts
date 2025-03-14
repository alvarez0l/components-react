import { TrackReferenceOrPlaceholder } from '../../packages/core/dist/index.d.ts';
import { LayoutContextType } from '../context';
/**
 * The `usePinnedTracks` hook returns a array of the pinned tracks of the current room.
 * @remarks
 * To function properly, this hook must be called within a `LayoutContext`.
 * @example
 * ```tsx
 * const pinnedTracks = usePinnedTracks();
 * ```
 * @public
 */
export declare function usePinnedTracks(layoutContext?: LayoutContextType): TrackReferenceOrPlaceholder[];
//# sourceMappingURL=usePinnedTracks.d.ts.map