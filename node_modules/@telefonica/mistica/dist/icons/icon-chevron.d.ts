import * as React from 'react';
type Direction = 'up' | 'down' | 'left' | 'right';
type Props = {
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    direction?: Direction;
    transitionDuration?: number;
};
declare const IconChevron: React.FC<Props>;
export default IconChevron;
