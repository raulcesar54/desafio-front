export type CardOptions = {
    americanExpress?: boolean;
    visa?: boolean;
    masterCard?: boolean;
};
/**
 * Returns true if number looks like an American Express card
 * Do not use for validation
 */
export declare const isAmericanExpress: (str?: string) => boolean;
/**
 * Returns true if number looks like a Visa card
 * Do not use for validation
 */
export declare const isVisa: (str?: string) => boolean;
/**
 * Returns true if number looks like a MasterCard card
 * Do not use for validation
 */
export declare const isMasterCard: (str?: string) => boolean;
export declare const getCvvLength: (creditCardNumber: string) => number;
export declare const getCreditCardNumberLength: (creditCardNumber: string) => number;
export declare const isValidCreditCardNumber: (creditCardNumber: string) => boolean;
