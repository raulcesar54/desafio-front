import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    visible: boolean;
    children?: void;
    dataAttributes?: DataAttributes;
};
declare const LoadingBar: React.FC<Props>;
export default LoadingBar;
