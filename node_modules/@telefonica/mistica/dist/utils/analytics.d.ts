import * as React from 'react';
import type { EventFormat } from '../theme';
export declare const eventCategories: {
    readonly userInteraction: "user_interaction";
};
export declare const eventActions: {
    readonly linkTapped: "link_tapped";
};
export declare const eventNames: {
    readonly userInteraction: "user_interaction";
};
type TrackingConfigProps = {
    children: React.ReactNode;
    eventFormat: EventFormat;
};
export declare const TrackingConfig: ({ children, eventFormat }: TrackingConfigProps) => JSX.Element;
export declare const useTrackingConfig: () => {
    eventFormat: EventFormat;
};
export {};
