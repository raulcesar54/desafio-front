import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    children?: React.ReactNode;
    className?: string;
    delay?: string;
    duration?: string;
    dataAttributes?: DataAttributes;
};
declare const FadeIn: React.FC<Props>;
export default FadeIn;
