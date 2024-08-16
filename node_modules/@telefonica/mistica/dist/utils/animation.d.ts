import * as React from 'react';
import type { Theme } from '../theme';
type AnimationProps = {
    children?: React.ReactNode;
    strokeDasharray?: string;
    strokeDashoffset?: string;
    opacity?: number;
};
export declare const getAnimateCircleScaleInProps: (to: string | number, platformOverrides: Theme['platformOverrides']) => null | AnimationProps;
export declare const getAnimateDrawLineProps: (from: string, begin: string, platformOverrides: Theme['platformOverrides'], keySplines?: string) => null | AnimationProps;
export declare const getAnimateFadeInProps: (begin: string, platformOverrides: Theme['platformOverrides']) => null | AnimationProps;
export declare const getAnimateHopInProps: (begin: string, platformOverrides: Theme['platformOverrides']) => null | AnimationProps;
export declare const getAnimateSweepInProps: (begin: string, platformOverrides: Theme['platformOverrides']) => null | AnimationProps;
export declare const mergeProperties: (...props: Array<AnimationProps | null>) => AnimationProps;
export {};
