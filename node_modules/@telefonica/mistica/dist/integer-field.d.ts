import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
type IntegerInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'inputMode' | 'pattern' | 'onInput' | 'type'> & {
    inputRef: React.ForwardedRef<HTMLInputElement>;
    type?: 'text' | 'password';
};
export declare const IntegerInput: ({ inputRef, value, defaultValue, type, ...rest }: IntegerInputProps) => React.ReactElement;
export interface IntegerFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
}
declare const IntegerField: React.FC<IntegerFieldProps>;
export default IntegerField;
