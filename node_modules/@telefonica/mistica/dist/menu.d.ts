import * as React from 'react';
import type { ExclusifyUnion } from './utils/utility-types';
import type { DataAttributes, IconProps } from './utils/types';
interface MenuItemBaseProps {
    label: string;
    Icon?: React.FC<IconProps>;
    destructive?: boolean;
    disabled?: boolean;
    onPress: (item: number) => void;
}
interface MenuItemWithoutControlProps extends MenuItemBaseProps {
    controlType?: undefined;
    checked?: undefined;
}
interface MenuItemWithControlProps extends MenuItemBaseProps {
    controlType?: 'checkbox';
    checked?: boolean;
}
type MenuItemProps = ExclusifyUnion<MenuItemWithControlProps | MenuItemWithoutControlProps>;
export declare const MenuItem: React.FC<MenuItemProps>;
type MenuSectionProps = {
    children?: React.ReactNode;
};
export declare const MenuSection: React.FC<MenuSectionProps>;
type MenuRenderProps = {
    ref: (element: HTMLElement | null) => void;
    className: string;
    close: () => void;
};
type TargetRenderProps = {
    ref: (element: HTMLElement | null) => void;
    onPress: () => void;
    isMenuOpen: boolean;
};
export type MenuProps = {
    width?: number;
    renderTarget: (props: TargetRenderProps) => React.ReactNode;
    renderMenu: (props: MenuRenderProps) => React.ReactNode;
    children?: void;
    position?: 'left' | 'right';
    dataAttributes?: DataAttributes;
};
export declare const Menu: React.FC<MenuProps>;
export {};
