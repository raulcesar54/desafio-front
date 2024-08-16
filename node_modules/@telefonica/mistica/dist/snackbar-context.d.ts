import * as React from 'react';
import type { Props as SnackbarProps } from './snackbar';
type SnackbarEntry = SnackbarProps & {
    id: string;
};
export declare const SnackbarRoot: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
export declare const useSnackbar: () => {
    openSnackbar: (params: SnackbarProps) => void;
    snackbars: ReadonlyArray<Readonly<SnackbarEntry>>;
};
export {};
