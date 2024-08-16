import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
export interface PasswordFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
}
declare const PasswordField: React.FC<PasswordFieldProps>;
export default PasswordField;
