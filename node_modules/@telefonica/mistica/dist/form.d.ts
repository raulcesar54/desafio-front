import * as React from 'react';
import type { FormErrors } from './form-context';
export type FormValues = {
    [name: string]: any;
};
type FormProps = {
    id?: string;
    onSubmit: (values: FormValues, rawValues: FormValues) => Promise<void> | void;
    initialValues?: FormValues;
    autoJump?: boolean;
    children: React.ReactNode;
    onValidationErrors?: (errors: FormErrors) => void;
    className?: string;
};
declare const Form: React.FC<FormProps>;
export default Form;
