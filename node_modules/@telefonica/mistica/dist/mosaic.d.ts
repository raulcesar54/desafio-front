import * as React from 'react';
import type { DataAttributes } from './utils/types';
type HorizontalMosaicProps = {
    items: ReadonlyArray<React.ReactElement>;
    withBullets?: boolean;
    free?: boolean;
    dataAttributes?: DataAttributes;
};
export declare const HorizontalMosaic: React.FC<HorizontalMosaicProps>;
type Props = {
    items: ReadonlyArray<React.ReactElement>;
    dataAttributes?: DataAttributes;
};
export declare const VerticalMosaic: React.FC<Props>;
export {};
