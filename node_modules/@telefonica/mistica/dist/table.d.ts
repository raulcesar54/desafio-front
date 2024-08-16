import * as React from 'react';
import type { CardAction } from './card';
import type { DataAttributes } from './utils/types';
type TextAlign = 'left' | 'right' | 'center';
type VerticalAlign = 'top' | 'middle';
type TableProps = {
    heading?: Array<React.ReactNode>;
    content?: Array<Array<React.ReactNode> | {
        cells: Array<React.ReactNode>;
        actions: ReadonlyArray<CardAction | React.ReactElement>;
    }>;
    boxed?: boolean;
    emptyCase?: React.ReactNode;
    /**
     * In mobile, the table will be scrollable horizontally by default. Alternatively, you can set it to 'collapse-rows', which will
     * render every row as a card
     */
    responsive?: 'scroll' | 'collapse-rows';
    columnTextAlign?: Array<TextAlign> | TextAlign;
    rowVerticalAlign?: VerticalAlign;
    columnWidth?: Array<number | string>;
    /**
     * By default, the table expands to all the available width, if you want the table to have the minimum width to fit the rows content, set fullWidth to false.
     * It's ignored in mobile
     */
    fullWidth?: boolean;
    /**
     * Limits the height of the table and the content will have vertical scroll.
     * It's ignored in mobile when responsive move is 'collapse-rows'
     */
    maxHeight?: number | string;
    /**
     * When rendering the table inside a responsive layout, you can enable this prop to make the table scrollable over the layout paddings
     */
    scrollOverResponsiveLayout?: boolean;
    /**
     * Used to hide headers from UI. Screen readers will still recognize them when reading an element from the table.
     */
    hideHeaders?: boolean | 'desktop' | 'mobile';
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    rowHeaderIndex?: number;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
};
export declare const Table: React.ForwardRefExoticComponent<TableProps & React.RefAttributes<HTMLDivElement>>;
export {};
