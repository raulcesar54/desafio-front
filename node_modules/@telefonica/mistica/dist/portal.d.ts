import * as React from 'react';
/**
 * This component renders the children elements outside the parent component.
 *
 * This is useful for components that need position fixed, for example
 * for menus, alerts, overlays, etc.
 *
 * See https://reactjs.org/docs/portals.html
 */
type Props = {
    children: React.ReactNode;
    className?: string;
};
export declare const Portal: React.FC<Props>;
export {};
