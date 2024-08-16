import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
export interface DateFieldProps extends CommonFormFieldProps {
    onChangeValue?: (value: string, rawValue: string) => void;
    min?: Date;
    max?: Date;
}
declare const FormDateField: React.FC<DateFieldProps>;
export default FormDateField;
