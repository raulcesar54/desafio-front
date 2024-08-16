import * as React from 'react';
import type { DataAttributes, IconProps } from './utils/types';
export type TagType = 'promo' | 'active' | 'inactive' | 'success' | 'warning' | 'error';
export type TagProps = {
    type?: 'promo' | 'active' | 'inactive' | 'success' | 'warning' | 'error';
    children: string;
    Icon?: React.FC<IconProps>;
    dataAttributes?: DataAttributes;
    badge?: boolean | number;
};
declare const Tag: React.FC<TagProps>;
export default Tag;
