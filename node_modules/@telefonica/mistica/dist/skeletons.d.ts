import * as React from 'react';
import type { DataAttributes } from './utils/types';
type SkeletonAnimationProps = {
    children: React.ReactNode;
    ariaLabel?: string;
    dataAttributes?: DataAttributes;
    width?: number | string;
    height?: number | string;
};
export declare const SkeletonAnimation: ({ children, ariaLabel, dataAttributes, width, height, }: SkeletonAnimationProps) => JSX.Element;
type SkeletonLineProps = {
    width?: string | number;
    ariaLabel?: string;
    dataAttributes?: DataAttributes;
};
export declare const SkeletonLine: ({ width, ariaLabel, dataAttributes }: SkeletonLineProps) => JSX.Element;
type SkeletonTextProps = Omit<SkeletonLineProps, 'width'>;
export declare const SkeletonText: ({ ariaLabel, dataAttributes }: SkeletonTextProps) => JSX.Element;
type SkeletonCircleProps = Omit<SkeletonLineProps, 'width'> & {
    size?: number | string;
};
export declare const SkeletonCircle: ({ ariaLabel, size, dataAttributes }: SkeletonCircleProps) => JSX.Element;
type SkeletonRowProps = SkeletonLineProps;
export declare const SkeletonRow: ({ width, ariaLabel, dataAttributes }: SkeletonRowProps) => JSX.Element;
type SkeletonRectangleProps = {
    ariaLabel?: string;
    dataAttributes?: DataAttributes;
    width?: number | string;
    height?: number | string;
    noBorderRadius?: boolean;
};
export declare const SkeletonRectangle: ({ width, height, ariaLabel, dataAttributes, noBorderRadius, }: SkeletonRectangleProps) => JSX.Element;
export {};
