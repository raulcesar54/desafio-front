import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
/**
 * typed as `any` because `React.HTMLProps<>` has no equivalent in flowtype
 * not a big problem because this component is not exported to the public API
 *
 * The correct type would be:
 *
 * type DecimalInputProps = React.HTMLProps<HTMLInputElement> & {inputRef: React.Ref<HTMLInputElement>}
 */
type DecimalInputProps = any;
export declare const DecimalInput: React.FC<DecimalInputProps>;
export interface DecimalFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    prefix?: React.ReactNode;
    /** defaults to Infinity */
    maxDecimals?: number;
}
declare const DecimalField: React.FC<DecimalFieldProps>;
export default DecimalField;
