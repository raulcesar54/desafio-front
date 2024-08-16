import * as React from 'react';
import type { DataAttributes } from './utils/types';
type OtpFieldProps = {
    length?: number;
    /**
     * Whether to hide the input code (password like input), false by default.
     */
    hideCode?: boolean;
    /**
     * Whether to read incoming SMS with OTP codes. It's true by default if hideCode is false, and false otherwise.
     */
    readSms?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    name: string;
    value?: string;
    defaultValue?: string;
    helperText?: string;
    error?: boolean;
    onChangeValue?: (value: string, rawValue: string) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    dataAttributes?: DataAttributes;
};
declare const PinField: ({ length, hideCode, readSms, disabled, readOnly, name, value, defaultValue, helperText, error, onChangeValue, onChange, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, dataAttributes, }: OtpFieldProps) => React.ReactElement;
export default PinField;
