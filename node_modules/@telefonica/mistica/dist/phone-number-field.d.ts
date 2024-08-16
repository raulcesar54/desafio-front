import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
export interface PhoneNumberFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    prefix?: string;
    getSuggestions?: (value: string) => Array<string>;
    e164?: boolean;
}
declare const PhoneNumberField: React.FC<PhoneNumberFieldProps>;
export default PhoneNumberField;
