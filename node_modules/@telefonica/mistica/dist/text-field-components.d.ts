import * as React from 'react';
import type { DataAttributes } from './utils/types';
export type InputState = 'focused' | 'filled' | 'default';
type LabelProps = {
    shrinkLabel?: boolean;
    forId: string;
    inputState: InputState;
    error?: boolean;
    children: string;
    style?: React.CSSProperties;
    optional?: boolean;
};
export declare const Label: React.FC<LabelProps>;
type HelperTextProps = {
    leftText?: string;
    rightText?: string;
    error?: boolean;
    id?: string;
    children?: void;
};
export declare const HelperText: React.FC<HelperTextProps>;
type FieldContainerProps = {
    multiline?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    helperText?: React.ReactNode;
    className?: string;
    fieldRef?: React.RefObject<HTMLDivElement>;
    fullWidth?: boolean;
    readOnly?: boolean;
    dataAttributes?: DataAttributes;
};
export declare const FieldContainer: React.FC<FieldContainerProps>;
export {};
