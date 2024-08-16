import * as React from 'react';
type TooltipState = {
    openTooltipId: string | null;
};
type TooltipSetter = {
    openTooltip: (tooltipId: string) => void;
    closeTooltip: (tooltipId: string) => void;
};
declare const TooltipContextProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useTooltipState: () => TooltipState;
export declare const useSetTooltipState: () => TooltipSetter;
export default TooltipContextProvider;
