import * as React from 'react';
type Props = {
    isFooterVisible?: boolean;
    footer: React.ReactNode;
    footerHeight?: number | string;
    footerBgColor?: string;
    containerBgColor?: string;
    children: React.ReactNode;
    onChangeFooterHeight?: (heightInPx: number) => void;
};
declare const FixedFooterLayout: ({ isFooterVisible, footer, footerHeight, footerBgColor, containerBgColor, children, onChangeFooterHeight, }: Props) => JSX.Element;
export default FixedFooterLayout;
