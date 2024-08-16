import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
export interface EmailFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    getSuggestions?: (value: string) => Array<string>;
}
declare const EmailField: React.FC<EmailFieldProps>;
export default EmailField;
