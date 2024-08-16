import * as React from 'react';
import type { ByBreakpoint, DataAttributes } from './utils/types';
type NumericSpace = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;
type FlexSpace = 'between' | 'around' | 'evenly';
type Props = {
    space: FlexSpace | ByBreakpoint<NumericSpace>;
    children: React.ReactNode;
    className?: string;
    role?: string;
    'aria-labelledby'?: string;
    dataAttributes?: DataAttributes;
};
declare const Stack: React.FC<Props>;
export default Stack;
