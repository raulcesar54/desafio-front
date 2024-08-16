import * as React from 'react';
import type { DataAttributes, IconProps } from './utils/types';
type AvatarProps = {
    size: number;
    src?: string;
    initials?: string;
    textColor?: string;
    backgroundColor?: string;
    Icon?: React.FC<IconProps>;
    badge?: boolean | number;
    'aria-label'?: string;
    dataAttributes?: DataAttributes;
    border?: boolean;
};
declare const Avatar: ({ size, src, Icon, badge, initials, "aria-label": ariaLabel, dataAttributes, ...props }: AvatarProps) => JSX.Element;
export default Avatar;
