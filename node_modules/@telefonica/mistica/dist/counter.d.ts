import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    onChangeValue?: (value: number) => void;
    onRemove?: () => void;
    children?: void;
    disabled?: boolean;
    dataAttributes?: DataAttributes;
    removeLabel?: string;
    increaseLabel?: string;
    decreaseLabel?: string;
    valueLabel?: string;
};
declare const Counter: React.FC<Props>;
export default Counter;
