import * as React from 'react';
import type { DataAttributes } from './utils/types';
type RenderProps = {
    name: string;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (value: boolean) => void;
    id?: string;
    render?: (renderProps: {
        controlElement: React.ReactElement;
        labelId: string;
        disabled: boolean;
        checked: boolean;
    }) => React.ReactElement<any, any>;
    children?: undefined;
    disabled?: boolean;
    'aria-labelledby'?: string;
    'aria-label'?: string;
    role?: 'checkbox' | 'menuitemcheckbox';
    dataAttributes?: DataAttributes;
};
type ChildrenProps = {
    name: string;
    defaultChecked?: boolean;
    checked?: boolean;
    onChange?: (value: boolean) => void;
    id?: string;
    render?: undefined;
    children: React.ReactNode;
    disabled?: boolean;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    role?: 'checkbox' | 'menuitemcheckbox';
    dataAttributes?: DataAttributes;
};
declare const Checkbox: React.ForwardRefExoticComponent<(RenderProps | ChildrenProps) & React.RefAttributes<HTMLDivElement>>;
export default Checkbox;
