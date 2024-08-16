import * as React from 'react';
import type { DataAttributes } from './utils/types';
type Props = {
    children?: React.ReactNode;
    value?: number;
    right?: number | string;
    top?: number | string;
    dataAttributes?: DataAttributes;
};
/**
 * This Component is decorative and won't be read by screenreaders, to make it accessible,
 * set the label to the child element
 *
 * <Badge value={2}>
 *   <IconButton aria-label="Shopping Cart with 2 items" Icon={IconShoppingCartFilled}/>
 * </Badge>
 */
declare const Badge: React.FC<Props>;
export default Badge;
