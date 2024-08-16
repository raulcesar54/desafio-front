import * as React from 'react';
import type { CardOptions } from './utils/credit-card';
type CreditCardFieldsProps = {
    numberFieldName?: string;
    expirationFieldName?: string;
    cvvFieldName?: string;
    acceptedCards?: CardOptions;
    children?: void;
};
declare const CreditCardFields: React.FC<CreditCardFieldsProps>;
export default CreditCardFields;
