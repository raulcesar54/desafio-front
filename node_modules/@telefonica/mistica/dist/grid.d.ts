import * as React from 'react';
import type { ByBreakpoint, DataAttributes } from './utils/types';
type RowsColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Gap = 0 | 2 | 4 | 8 | 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;
type AutoFillConfig = {
    minSize?: string | number;
    /**
     * default: 1fr
     */
    maxSize?: string | number;
};
type GridProps = {
    rows?: RowsColumns | AutoFillConfig;
    columns?: RowsColumns | AutoFillConfig;
    gap?: ByBreakpoint<Gap> | [ByBreakpoint<Gap>, ByBreakpoint<Gap>];
    flow?: 'column' | 'row' | 'column dense' | 'row dense';
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    alignContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    height?: string | number;
    minHeight?: string | number;
    children: React.ReactNode;
    as?: React.ComponentType<any> | string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
};
export declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
type Span = RowsColumns | 'full';
type GridItemProps = {
    columnStart?: RowsColumns;
    rowStart?: RowsColumns;
    span?: [Span, Span] | Span;
    columnSpan?: Span;
    rowSpan?: Span;
    justifySelf?: 'start' | 'end' | 'center' | 'stretch';
    alignSelf?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    children?: React.ReactNode;
    as?: React.ComponentType<any> | string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
};
export declare const GridItem: React.ForwardRefExoticComponent<GridItemProps & React.RefAttributes<HTMLDivElement>>;
export {};
