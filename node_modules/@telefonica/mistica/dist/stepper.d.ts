import * as React from 'react';
import type { DataAttributes } from './utils/types';
type StepperProps = {
    steps: ReadonlyArray<string>;
    currentIndex: number;
    'aria-label'?: string;
    children?: void;
    dataAttributes?: DataAttributes;
};
declare const Stepper: React.FC<StepperProps>;
export default Stepper;
