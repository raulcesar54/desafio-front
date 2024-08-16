import * as React from 'react';
import type { DataAttributes } from './types';
type Props = {
    children: React.ReactNode;
};
export declare const AspectRatioSupportProvider: React.FC<Props>;
export declare const useSupportsAspectRatio: () => boolean;
type AspectRatioContainerProps = {
    width?: number | string;
    height?: number | string;
    aspectRatio?: number;
    children: React.ReactNode;
    as?: React.ComponentType<any> | string;
    style?: React.CSSProperties;
    className?: string;
    dataAttributes?: DataAttributes;
};
export declare const AspectRatioContainer: (props: AspectRatioContainerProps) => JSX.Element;
export {};
