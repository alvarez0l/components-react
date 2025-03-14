import { PinState, WidgetState } from '../../../packages/core/dist/index.d.ts';
import { LayoutContextType } from '../../context';
import * as React from 'react';
/** @alpha */
export interface LayoutContextProviderProps {
    value?: LayoutContextType;
    onPinChange?: (state: PinState) => void;
    onWidgetChange?: (state: WidgetState) => void;
}
/** @alpha */
export declare function LayoutContextProvider({ value, onPinChange, onWidgetChange, children, }: React.PropsWithChildren<LayoutContextProviderProps>): React.JSX.Element;
//# sourceMappingURL=LayoutContextProvider.d.ts.map