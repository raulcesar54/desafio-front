import * as React from 'react';
import type { CommonFormFieldProps } from './text-field-base';
import type { CardOptions } from './utils/credit-card';
export interface CvvFieldProps extends CommonFormFieldProps {
    acceptedCards?: CardOptions;
    onChangeValue?: (value: string, rawValue: string) => void;
}
declare const CvvField: React.FC<CvvFieldProps>;
export default CvvField;
