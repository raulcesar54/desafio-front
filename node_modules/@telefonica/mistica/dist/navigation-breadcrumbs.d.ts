/**
 * Figma: https://www.figma.com/file/BctaFHf0PVPX2uwRSl8taf/Breadcrumbs?node-id=2%3A61
 * Accessibility: https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html
 */
import * as React from 'react';
import type { DataAttributes } from './utils/types';
export type NavigationBreadcrumbsProps = {
    title: string;
    breadcrumbs: ReadonlyArray<{
        readonly title: string;
        readonly url: string;
    }>;
    children?: void;
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
};
declare const NavigationBreadcrumbs: React.FC<NavigationBreadcrumbsProps>;
export default NavigationBreadcrumbs;
