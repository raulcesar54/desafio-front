import * as React from 'react';
import type { DataAttributes, IconProps } from './utils/types';
import type { FieldValidator } from './form-context';
import type { ExclusifyUnion } from './utils/utility-types';
type FieldEndIconProps = {
    /** In date fields, we want the icon's background to stay transparent when hovering/pressing it */
    hasBackgroundColor?: boolean;
    disabled?: boolean;
} & ExclusifyUnion<{
    Icon: React.FC<IconProps>;
    'aria-label'?: string;
    onPress: (event: React.MouseEvent<HTMLElement>) => void;
} | {
    checkedProps: {
        Icon: React.FC<IconProps>;
        'aria-label'?: string;
    };
    uncheckedProps: {
        Icon: React.FC<IconProps>;
        'aria-label'?: string;
    };
    onChange?: (checked: boolean) => void | undefined | Promise<void>;
    checked?: boolean;
}>;
export declare const FieldEndIcon: React.FC<FieldEndIconProps>;
/**
 * Incomplete list, add more if needed
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
 */
export type AutoComplete = 'on' | 'off' | 'name' | 'given-name' | 'additional-name' | 'family-name' | 'email' | 'tel' | 'street-address' | 'address-line1' | 'address-line2' | 'address-level1' | 'address-level2' | 'country' | 'postal-code' | 'transaction-amount' | 'new-password' | 'current-password' | 'cc-type' | 'cc-name' | 'cc-number' | 'cc-exp' | 'cc-csc' | 'username';
export interface CommonFormFieldProps<T = HTMLInputElement> {
    autoFocus?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    id?: string;
    label: string;
    name: string;
    optional?: boolean;
    maxLength?: number;
    validate?: FieldValidator;
    autoComplete?: AutoComplete;
    onFocus?: React.FocusEventHandler<T>;
    onBlur?: React.FocusEventHandler<T>;
    fullWidth?: boolean;
    getSuggestions?: (text: string) => ReadonlyArray<string>;
    placeholder?: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: void;
    readOnly?: boolean;
    dataAttributes?: DataAttributes;
}
interface TextFieldBaseProps {
    id?: string;
    type?: string;
    autoComplete?: AutoComplete;
    autoFocus?: boolean;
    disabled?: boolean;
    error?: boolean;
    pattern?: string;
    required?: boolean;
    fullWidth?: boolean;
    helperText?: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;
    name?: string;
    maxLength?: number;
    prefix?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    endIconOverlay?: React.ReactNode;
    style?: React.CSSProperties;
    value?: string;
    inputRef?: React.Ref<HTMLInputElement | HTMLSelectElement>;
    getSuggestions?: (value: string) => ReadonlyArray<string>;
    onClick?: (event: React.MouseEvent) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: React.FocusEventHandler;
    onFocus?: React.FocusEventHandler;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    inputProps?: {
        [name: string]: string | number | undefined;
    };
    inputComponent?: React.ComponentType<any>;
    shrinkLabel?: boolean;
    focus?: boolean;
    fieldRef?: React.RefObject<HTMLDivElement>;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    multiline?: boolean;
    inputMode?: string;
    readOnly?: boolean;
    min?: string;
    max?: string;
    role?: string;
    dataAttributes?: DataAttributes;
}
export declare const TextFieldBase: React.ForwardRefExoticComponent<TextFieldBaseProps & React.RefAttributes<any>>;
export declare const TextFieldBaseAutosuggest: React.ForwardRefExoticComponent<TextFieldBaseProps & React.RefAttributes<any>>;
export {};
