import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
export interface IbanFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    prefix?: string;
    getSuggestions?: (value: string) => Array<string>;
}
declare const IbanField: React.FC<IbanFieldProps>;
export default IbanField;
