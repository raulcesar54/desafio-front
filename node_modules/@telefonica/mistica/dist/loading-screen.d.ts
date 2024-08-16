import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes } from './utils/types';
type TextProps = ExclusifyUnion<{
    title?: string;
    description?: string;
} | {
    texts: ReadonlyArray<{
        title?: string;
        description?: string;
        duration?: number;
    }>;
}>;
type LoadingScreenProps = {
    isInverse?: boolean;
    isLoading?: boolean;
    onClose?: () => void;
    children?: React.ReactNode;
    dataAttributes?: DataAttributes;
} & TextProps;
export declare const LoadingScreen: React.ForwardRefExoticComponent<LoadingScreenProps & React.RefAttributes<HTMLDivElement>>;
type BrandLoadingScreenProps = {
    isLoading?: boolean;
    onClose?: () => void;
    dataAttributes?: DataAttributes;
} & TextProps;
export declare const BrandLoadingScreen: React.ForwardRefExoticComponent<BrandLoadingScreenProps & React.RefAttributes<HTMLDivElement>>;
export {};
