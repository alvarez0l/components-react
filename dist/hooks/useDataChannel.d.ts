import { ReceivedDataMessage } from '../../packages/core/dist/index.d.ts';
import { DataPublishOptions } from 'livekit-client';
type UseDataChannelReturnType<T extends string | undefined = undefined> = {
    isSending: boolean;
    send: (payload: Uint8Array, options: DataPublishOptions) => Promise<void>;
    message: ReceivedDataMessage<T> | undefined;
};
/**
 * The `useDataChannel` hook returns the ability to send and receive messages.
 * By optionally passing a `topic`, you can narrow down which messages are returned in the messages array.
 * @remarks
 * There is only one data channel. Passing a `topic` does not open a new data channel.
 * It is only used to filter out messages with no or a different `topic`.
 *
 * @example
 * ```tsx
 * // Send messages to all participants via the 'chat' topic.
 * const { message: latestMessage, send } = useDataChannel('chat', (msg) => console.log("message received", msg));
 * ```
 * @public
 */
export declare function useDataChannel<T extends string>(topic: T, onMessage?: (msg: ReceivedDataMessage<T>) => void): UseDataChannelReturnType<T>;
/**
 * The `useDataChannel` hook returns the ability to send and receive messages.
 * @remarks
 * There is only one data channel. Passing a `topic` does not open a new data channel.
 * It is only used to filter out messages with no or a different `topic`.
 *
 * @example
 * ```tsx
 * // Send messages to all participants
 * const { message: latestMessage, send } = useDataChannel('chat', (msg) => console.log("message received", msg));
 * ```
 * @public
 */
export declare function useDataChannel(onMessage?: (msg: ReceivedDataMessage) => void): UseDataChannelReturnType;
export {};
//# sourceMappingURL=useDataChannel.d.ts.map