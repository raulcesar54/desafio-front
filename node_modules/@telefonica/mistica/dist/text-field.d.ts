import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
export interface TextFieldProps extends CommonFormFieldProps<HTMLInputElement | HTMLTextAreaElement> {
    onChangeValue?: (value: string, rawValue: string) => void;
    onPress?: (event: React.MouseEvent) => void;
    multiline?: boolean;
    prefix?: React.ReactNode;
    endIcon?: React.ReactNode;
    getSuggestions?: (value: string) => ReadonlyArray<string>;
    role?: string;
}
declare const TextField: React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>;
export default TextField;
