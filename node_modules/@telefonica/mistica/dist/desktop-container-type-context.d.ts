import * as React from 'react';
export type DesktopContainerType = 'small' | 'medium' | 'large';
export declare const useDesktopContainerType: () => DesktopContainerType | null;
declare const _default: ({ children, value }: {
    children: React.ReactNode;
    value: DesktopContainerType;
}) => JSX.Element;
export default _default;
