import * as React from 'react';
import type { CardOptions } from './utils/credit-card';
import type { CommonFormFieldProps } from './text-field-base';
interface CreditCardNumberFieldProps extends CommonFormFieldProps {
    acceptedCards?: CardOptions;
    onChangeValue?: (value: string, rawValue: string) => void;
}
declare const CreditCardNumberField: React.FC<CreditCardNumberFieldProps>;
export default CreditCardNumberField;
