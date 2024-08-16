import * as React from 'react';
export type Variant = 'default' | 'inverse' | 'alternative';
type ThemeVariantProps = {
    isInverse?: boolean;
    variant?: Variant;
    children: React.ReactNode;
};
export declare const ThemeVariant: React.FC<ThemeVariantProps>;
export declare const useThemeVariant: () => Variant;
export declare const useIsInverseVariant: () => boolean;
export {};
