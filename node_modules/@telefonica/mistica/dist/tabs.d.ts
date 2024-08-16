import * as React from 'react';
import type { DataAttributes, TrackingEvent } from './utils/types';
export type TabsProps = {
    selectedIndex: number;
    onChange: (selectedIndex: number) => void;
    tabs: ReadonlyArray<{
        readonly text: string;
        readonly trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
        readonly icon?: React.ReactNode;
        readonly 'aria-controls'?: string;
    }>;
    children?: void;
    dataAttributes?: DataAttributes;
};
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
