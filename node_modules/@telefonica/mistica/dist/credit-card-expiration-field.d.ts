import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
type ExpirationDateValue = {
    month: number | null;
    year: number | null;
    raw: string;
};
export interface CreditCardExpirationFieldProps extends CommonFormFieldProps {
    validate?: (value: ExpirationDateValue | undefined, rawValue: string) => string | undefined;
    onChangeValue?: (value: ExpirationDateValue) => void;
}
declare const CreditCardExpirationField: React.FC<CreditCardExpirationFieldProps>;
export default CreditCardExpirationField;
